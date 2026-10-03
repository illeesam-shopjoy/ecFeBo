/* ShopJoy Admin - 운영지원 > DB메타관리 > 용어사전관리 (2026-10-03)
 * 업무 용어(한글)와 표준 컬럼명을 짝지어 두는 표준 용어사전(zd_meta_term). 예: 주문수량 = order_qty (도메인: 수량)
 * [조합] — 한글 용어를 단어사전으로 풀어 컬럼명을 만들어 준다(주문 수량 → order_qty).
 * [컬럼에서 용어 추출] — 지금 DB 컬럼명 중 용어로 등록 안 된 것을 코멘트 기반 용어명과 함께 보여 주고 골라서 일괄 등록한다. */
window.ZdMetaTermMng = {
  name: 'ZdMetaTermMng',
  props: {
    navigate: { type: Function, required: true }, // 페이지 이동
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { reactive, computed, onMounted } = Vue;
    const showToast   = window.boApp.showToast;
    const showConfirm = window.boApp.showConfirm;
    const UI = '용어사전관리';

    const terms   = reactive([]);
    const domains = reactive([]);     // 도메인 select 옵션
    const uiState = reactive({ loading: false, selectedId: null, dtlMode: 'view', isNew: false, composeMsg: '',
      candOpen: false, candLoading: false, candSearch: '', candBizCd: '', candOnlyNamed: true, bulkBusy: false });
    const cfDtlView = computed(() => uiState.dtlMode === 'view' && !uiState.isNew);
    const searchParam = reactive({ searchValue: '', domainId: '', useYn: '', unusedYn: '' });
    const searchParamInit = {};
    const baseGridPager = reactive({ pageType: 'PAGE', pageNo: 1, pageSize: 20, pageTotalCount: 0, pageTotalPage: 1, pageSizes: [10, 20, 50, 100, 200, 500], pageCond: {} });
    const FORM_INIT = { termId: '', termNm: '', colNm: '', domainId: '', termDesc: '', useYn: 'Y' };
    const form   = reactive({ ...FORM_INIT });
    const errors = reactive({});
    const candidates  = reactive([]);
    const candChecked = reactive([]);
    const codes = reactive({ bizCds: [], useYn: [{ value: 'Y', label: '사용' }, { value: 'N', label: '미사용' }] });
    const cfDomainOpts = computed(() => domains.map(d => ({ value: d.domainId, label: `${d.domainNm} (${d.typeLabel})` })));

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ ZdMetaTermMng.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'searchParam-list') { baseGridPager.pageNo = 1; return handleSearchData(); }
      else if (cmd === 'searchParam-reset') { Object.assign(searchParam, searchParamInit); baseGridPager.pageNo = 1; return handleSearchData(); }
      else if (cmd === 'baseDetail-new') return openNew();
      else if (cmd === 'baseDetail-edit') { uiState.dtlMode = 'edit'; return; }
      else if (cmd === 'baseDetail-save') return handleSave();
      else if (cmd === 'baseDetail-cancel') return cfSelected.value ? loadDetail(cfSelected.value, 'view') : closeDetail();
      else if (cmd === 'baseDetail-close') return closeDetail();
      else if (cmd === 'baseDetail-delete') return handleDelete(param.row || cfSelected.value);
      else if (cmd === 'baseDetail-compose') return handleCompose();
      else if (cmd === 'candModal-open') { uiState.candOpen = true; return loadCandidates(); }
      else if (cmd === 'candModal-close') { uiState.candOpen = false; return; }
      else if (cmd === 'candModal-checkNamed') return checkNamed();
      else if (cmd === 'candModal-uncheck') { candChecked.splice(0, candChecked.length); return; }
      else if (cmd === 'candModal-register') return registerChecked();
      console.warn('[handleBtnAction] unknown cmd:', cmd);
    };

    const handleSelectAction = (cmd, param = {}) => {
      if (cmd === 'terms-pager-setPage') {
        if (param >= 1 && param <= baseGridPager.pageTotalPage) { baseGridPager.pageNo = param; handleSearchData(); }
        return;
      } else if (cmd === 'terms-pager-sizeChange') { baseGridPager.pageNo = 1; return handleSearchData(); }
    };

    const handleGridCellAction = (cmd, colKey, row, e = {}) => {
      if (cmd === 'terms-cellClick') {
        if (colKey === 'btn_row_edit') return loadDetail(row, 'edit');
        if ((e.col && e.col.link) || colKey === '__no__') {
          if (uiState.selectedId === row.termId && uiState.dtlMode === 'view') return closeDetail();
          return loadDetail(row, 'view');
        }
      }
    };

    /* ##### [04] 내장 사용 함수 ################################################### */

    const cfSelected = computed(() => terms.find(t => t.termId === uiState.selectedId) || null);

    const handleSearchData = async () => {
      uiState.loading = true;
      try {
        const params = { pageNo: baseGridPager.pageNo, pageSize: baseGridPager.pageSize,
          ...coUtil.cofOmitEmpty({ ...searchParam, searchValue: (searchParam.searchValue || '').trim() }) };
        const res = await boApiSvc.zdMeta.getTermPage(params, UI, '조회');
        const d = res.data?.data;
        terms.splice(0, terms.length, ...(d?.pageList || []));
        baseGridPager.pageTotalCount = d?.pageTotalCount || 0;
        baseGridPager.pageTotalPage  = d?.pageTotalPage || 1;
        coUtil.cofBuildPagerNums(baseGridPager);
      } catch (err) {
        console.error('[handleSearchData] 용어 목록 조회 실패', err);
        terms.splice(0, terms.length);
      } finally {
        uiState.loading = false;
      }
    };

    const fnLoadDomains = async () => {
      try {
        const res = await boApiSvc.zdMeta.getDomains({}, UI, '도메인목록');
        domains.splice(0, domains.length, ...(res.data?.data || []));
      } catch (err) {
        console.warn('[fnLoadDomains] 도메인 목록 조회 실패', err);
      }
    };

    const _clearErrors = () => Object.keys(errors).forEach(k => delete errors[k]);
    const loadDetail = (row, mode) => {
      _clearErrors();
      Object.assign(form, FORM_INIT, row, { domainId: row.domainId || '' });
      uiState.selectedId = row.termId; uiState.isNew = false; uiState.dtlMode = mode; uiState.composeMsg = '';
    };
    const openNew = () => {
      _clearErrors();
      Object.assign(form, FORM_INIT);
      uiState.selectedId = null; uiState.isNew = true; uiState.dtlMode = 'edit'; uiState.composeMsg = '';
    };
    const closeDetail = () => { uiState.selectedId = null; uiState.isNew = false; uiState.dtlMode = 'view'; _clearErrors(); };

    /* handleCompose — 용어명(한글)으로 컬럼명 조합(단어사전 기준, 없으면 추천표) */
    const handleCompose = async () => {
      if (!String(form.termNm || '').trim()) { errors.termNm = '용어명(한글)을 먼저 입력하세요.'; return; }
      try {
        const res = await boApiSvc.zdMeta.composeTerm(form.termNm.trim(), UI, '컬럼명조합');
        const r = res.data?.data || {};
        form.colNm = (r.colNm || '').includes('?') ? form.colNm || r.colNm : r.colNm;
        if (r.suggestDomainId && !form.domainId) form.domainId = r.suggestDomainId;
        uiState.composeMsg = (r.parts || []).join(' + ')
          + (r.unknownParts?.length ? ` — 사전에 없는 부분: ${r.unknownParts.join(', ')} (단어사전에 먼저 등록)` : '')
          + (r.existsTermNm ? ` — 이미 '${r.existsTermNm}' 용어로 등록된 컬럼명` : '')
          + (r.usedTableCnt ? ` — 지금 ${r.usedTableCnt}개 테이블이 이 컬럼명을 씀` : '');
      } catch (err) {
        console.error('[handleCompose] 컬럼명 조합 실패', err);
        showToast(err.response?.data?.message || '컬럼명을 조합하지 못했습니다.', 'error');
      }
    };

    const validateForm = () => {
      _clearErrors();
      form.colNm = String(form.colNm || '').trim().toLowerCase();
      if (!String(form.termNm || '').trim()) errors.termNm = '용어명(한글)을 입력해주세요.';
      if (!/^[a-z][a-z0-9]*(_[a-z0-9]+)*$/.test(form.colNm)) errors.colNm = '영문 소문자 snake_case (예: order_qty)';
      return Object.keys(errors).length === 0;
    };

    const handleSave = async () => {
      if (!validateForm()) { showToast('입력 내용을 확인해주세요.', 'error'); return; }
      const ok = await showConfirm('저장', uiState.isNew ? '용어를 등록하시겠습니까?' : '용어를 저장하시겠습니까?');
      if (!ok) return;
      const body = { termNm: form.termNm.trim(), colNm: form.colNm, domainId: form.domainId || null, termDesc: form.termDesc || null, useYn: form.useYn || 'Y' };
      try {
        const res = uiState.isNew ? await boApiSvc.zdMeta.createTerm(body, UI, '등록') : await boApiSvc.zdMeta.updateTerm(form.termId, body, UI, '저장');
        const saved = res.data?.data;
        await handleSearchData();
        const row = terms.find(t => t.termId === saved?.termId);
        if (row) loadDetail(row, 'view'); else closeDetail();
        showToast('저장되었습니다.', 'success');
      } catch (err) {
        console.error('[handleSave] 용어 저장 실패', err);
        showToast(err.response?.data?.message || err.message || '저장 중 오류가 발생했습니다.', 'error', 0);
      }
    };

    const handleDelete = async (row) => {
      if (!row) return;
      const ok = await showConfirm('삭제', `용어 '${row.termNm} (${row.colNm})' 를 삭제하시겠습니까?`);
      if (!ok) return;
      try {
        await boApiSvc.zdMeta.removeTerm(row.termId, UI, '삭제');
        if (uiState.selectedId === row.termId) closeDetail();
        await handleSearchData();
        showToast('삭제되었습니다.', 'success');
      } catch (err) {
        console.error('[handleDelete] 용어 삭제 실패', err);
        showToast(err.response?.data?.message || err.message || '삭제 중 오류가 발생했습니다.', 'error', 0);
      }
    };

    /* ── 후보 추출 모달 ───────────────────────────────────────────── */

    const loadCandidates = async () => {
      uiState.candLoading = true;
      candChecked.splice(0, candChecked.length);
      try {
        const res = await boApiSvc.zdMeta.getTermCandidates({ pageNo: 1, pageSize: 5000, bizCd: uiState.candBizCd || null }, UI, '용어추출');
        candidates.splice(0, candidates.length, ...(res.data?.data?.pageList || []).map(c => ({
          ...c, editNm: c.suggestNm || '', editDomainId: c.suggestDomainId || '',
        })));
        if (!codes.bizCds.length) {
          const t = await boApiSvc.zdMeta.getTables({}, UI, '업무구분');
          codes.bizCds = [...new Set((t.data?.data || []).map(x => x.bizCd))].sort().map(b => ({ value: b, label: b }));
        }
      } catch (err) {
        console.error('[loadCandidates] 용어 후보 조회 실패', err);
        showToast(err.response?.data?.message || '용어 후보를 불러오지 못했습니다.', 'error');
      } finally {
        uiState.candLoading = false;
      }
    };

    const cfCandRows = computed(() => {
      const q = uiState.candSearch.trim().toLowerCase();
      return candidates.filter(c => (!uiState.candOnlyNamed || (c.editNm || '').trim())
        && (!q || c.colNm.includes(q) || (c.editNm || '').includes(q) || (c.sampleTableNms || '').includes(q)));
    });
    const isCandChecked = (k) => candChecked.includes(k);
    const cfAllCandChecked = computed(() => cfCandRows.value.length > 0 && cfCandRows.value.every(c => candChecked.includes(c.colNm)));
    const onToggleCand = (k) => { const i = candChecked.indexOf(k); if (i >= 0) candChecked.splice(i, 1); else candChecked.push(k); };
    const onToggleCandAll = () => {
      if (cfAllCandChecked.value) cfCandRows.value.forEach(c => { const i = candChecked.indexOf(c.colNm); if (i >= 0) candChecked.splice(i, 1); });
      else cfCandRows.value.forEach(c => { if (!candChecked.includes(c.colNm)) candChecked.push(c.colNm); });
    };
    const checkNamed = () => cfCandRows.value.forEach(c => { if ((c.editNm || '').trim() && !candChecked.includes(c.colNm)) candChecked.push(c.colNm); });

    const registerChecked = async () => {
      const rows = candidates.filter(c => candChecked.includes(c.colNm));
      if (!rows.length) { showToast('등록할 용어를 체크해주세요.', 'error'); return; }
      const noNm = rows.filter(c => !(c.editNm || '').trim());
      if (noNm.length) { showToast(`용어명이 비어 있는 행이 ${noNm.length}개 있습니다: ${noNm.slice(0, 5).map(c => c.colNm).join(', ')}`, 'error', 0); return; }
      const ok = await showConfirm('일괄 등록', `체크한 컬럼명 ${rows.length}개를 용어사전에 등록하시겠습니까?`);
      if (!ok) return;
      uiState.bulkBusy = true;
      try {
        const body = rows.map(c => ({ colNm: c.colNm, termNm: c.editNm.trim(), domainId: c.editDomainId || null, useYn: 'Y' }));
        const res = await boApiSvc.zdMeta.bulkTerms(body, UI, '일괄등록');
        const r = res.data?.data || {};
        showToast(`등록 ${r.createdCnt || 0}건` + (r.skippedCnt ? ` · 건너뜀 ${r.skippedCnt}건` : ''), r.skippedCnt ? 'warning' : 'success', r.skippedCnt ? 0 : 3000);
        if (r.skippedCnt) console.warn('[registerChecked] 건너뛴 용어', r.skipped);
        await Promise.all([handleSearchData(), loadCandidates()]);
      } catch (err) {
        console.error('[registerChecked] 용어 일괄 등록 실패', err);
        showToast(err.response?.data?.message || err.message || '일괄 등록 중 오류가 발생했습니다.', 'error', 0);
      } finally {
        uiState.bulkBusy = false;
      }
    };

    /* ★ onMounted */
    const initPage = async () => {
      await fnLoadDomains();
      const _qs = new URLSearchParams(window.location.search);
      Object.keys(searchParam).forEach((k) => { if (_qs.has(k)) searchParam[k] = _qs.get(k); });
      await handleSearchData();
      Object.assign(searchParamInit, searchParam);
    };
    onMounted(initPage);

    /* ##### [05] 사용자 함수 (컬럼정의) ########################################### */

    const fnRowStyle = (row) => uiState.selectedId === row.termId ? 'background:#fff8f9;' : '';
    const columns = {};
    columns.baseSearch = [
      { key: 'searchValue', type: 'text', label: '검색어', placeholder: '용어명·컬럼명·설명' },
      { key: 'domainId', type: 'select', label: '도메인', options: () => cfDomainOpts.value, nullLabel: '도메인 전체' },
      { key: 'useYn', type: 'select', label: '사용여부', options: () => codes.useYn, nullLabel: '전체' },
      { key: 'unusedYn', type: 'select', label: 'DB 사용', options: () => [{ value: 'Y', label: 'DB 에 없는 컬럼명만' }], nullLabel: '전체' },
    ];
    columns.baseGrid = [
      { key: 'colNm', label: '컬럼명', link: true, cellInnerStyle: 'font-family:monospace;color:#7c3aed;font-weight:600;' },
      { key: 'termNm', label: '용어명' },
      { key: 'wordNms', label: '단어 분해', cellStyle: 'font-size:12px;color:#475569;' },
      { key: 'unknownWords', label: '미등록 단어', cellStyle: 'font-family:monospace;font-size:12px;color:#dc2626;', fmt: (v) => v || '' },
      { key: 'domainNm', label: '도메인', cellStyle: 'font-size:12px;', fmt: (v) => v || '-' },
      { key: 'usedTableCnt', label: '사용 테이블', align: 'right', width: '85px', fmt: (v) => v || '-', cellStyle: (v) => v ? '' : 'color:#bbb;' },
      { key: 'useYn', label: '사용', align: 'center', width: '60px', badge: (r) => r.useYn === 'Y' ? 'badge-green' : 'badge-gray' },
      { key: 'termDesc', label: '설명', cellStyle: 'font-size:12px;color:#888;' },
      { type: 'actions', actions: [
        { label: '수정', cls: 'btn btn_row_edit btn-sm', onClick: (row) => handleGridCellAction('terms-cellClick', 'btn_row_edit', row) },
        { label: '삭제', cls: 'btn btn_row_delete btn-sm', onClick: (row) => handleBtnAction('baseDetail-delete', { row }) },
      ] },
    ];
    columns.baseForm = [
      { key: 'termNm', label: '용어명(한글)', type: 'text', required: true, placeholder: '예: 주문수량 (띄어 쓰면 조합이 더 정확)' },
      { key: 'colNm', label: '컬럼명', type: 'text', required: true, placeholder: '예: order_qty', mono: true },
      { key: 'domainId', label: '도메인', type: 'select', options: () => cfDomainOpts.value, nullable: true, nullLabel: '-- 없음 --' },
      { key: 'useYn', label: '사용여부', type: 'select', nullable: false, options: () => codes.useYn },
      { key: 'termDesc', label: '설명', type: 'textarea', rows: 2, colSpan: 2 },
    ];
    columns.candGrid = [
      { key: 'colNm', label: '컬럼명', cellInnerStyle: 'font-family:monospace;font-weight:600;color:#7c3aed;', width: '170px' },
      { key: 'tableCnt', label: '테이블', align: 'right', width: '55px' },
      { key: 'editNm', label: '용어명(수정 가능)', edit: 'text', placeholder: '용어명 입력', width: '150px' },
      { key: 'editDomainId', label: '도메인', edit: 'select', options: () => cfDomainOpts.value, nullable: true, nullLabel: '-- 없음 --', width: '170px' },
      { key: 'wordNms', label: '단어 분해', cellStyle: 'font-size:11px;color:#475569;', width: '130px' },
      { key: 'typeDist', label: '타입', cellStyle: 'font-family:monospace;font-size:11px;color:#7c3aed;', width: '120px' },
      { key: 'sampleTableNms', label: '쓰는 테이블(예)', cellStyle: 'font-family:monospace;font-size:11px;color:#666;' },
    ];

    /* ##### [06] return ######################################################### */

    return {
      columns, codes, uiState, cfDtlView, searchParam, baseGridPager, terms, domains, form, errors, cfSelected,
      candidates, candChecked, cfCandRows, isCandChecked, cfAllCandChecked, onToggleCand, onToggleCandAll,
      handleBtnAction, handleSelectAction, handleGridCellAction, fnRowStyle,
    };
  },
  template: `
<bo-page title="용어사전관리" :share-query="searchParam">
  <div style="margin:0 0 10px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;font-size:12.5px;color:#475569;line-height:1.6;">
    업무 용어(한글)와 표준 컬럼명을 짝지어 둡니다. 예: <b>주문수량</b> = <code>order_qty</code>.
    새 컬럼을 만들 때 용어명을 넣고 <b>[조합]</b>을 누르면 단어사전으로 컬럼명을 만들어 줍니다.
    <b>사용 테이블</b>은 지금 DB 에서 그 컬럼명을 쓰는 테이블 수입니다.
  </div>
  <bo-container>
    <bo-search-area @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <bo-container title="용어 목록" :count-text="'총 ' + baseGridPager.pageTotalCount + '건'">
    <template #toolbar-actions>
      <button class="btn btn_search" @click="handleBtnAction('candModal-open')">🔎 컬럼에서 용어 추출</button>
      <button class="btn btn_new" @click="handleBtnAction('baseDetail-new')">+ 신규</button>
    </template>
    <bo-grid bare :columns="columns.baseGrid" :rows="terms" row-key="termId" :selected-key="uiState.selectedId"
      :row-style="fnRowStyle" :loading="uiState.loading" empty-text="등록된 용어가 없습니다. [컬럼에서 용어 추출]로 시작해 보세요."
      grid-id="terms-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleSelectAction('terms-pager-setPage', n)" :on-size-change="() => handleSelectAction('terms-pager-sizeChange')" />
  </bo-container>
  <bo-container v-if="uiState.isNew || cfSelected">
    <div class="toolbar">
      <span class="list-title">{{ uiState.isNew ? '용어 신규' : (cfDtlView ? '용어 상세' : '용어 수정') }}
        <span v-if="!uiState.isNew && cfSelected" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">#{{ form.colNm }} · 사용 테이블 {{ cfSelected.usedTableCnt }}개</span>
      </span>
      <div style="margin-left:auto;display:flex;gap:6px;">
        <template v-if="cfDtlView">
          <button class="btn btn_edit" @click="handleBtnAction('baseDetail-edit')">수정</button>
          <button class="btn btn_delete" @click="handleBtnAction('baseDetail-delete')">삭제</button>
          <button class="btn btn_close" @click="handleBtnAction('baseDetail-close')">닫기</button>
        </template>
        <template v-else>
          <button class="btn btn_search" @click="handleBtnAction('baseDetail-compose')">🧩 조합</button>
          <button class="btn btn_save" @click="handleBtnAction('baseDetail-save')">저장</button>
          <button class="btn btn_cancel" @click="handleBtnAction('baseDetail-cancel')">취소</button>
        </template>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area :columns="columns.baseForm" :form="form" :errors="errors" :cols="2" :show-actions="false" :readonly="cfDtlView" plain-readonly />
      <div v-if="uiState.composeMsg" style="margin-top:8px;padding:8px 10px;background:#f0fdf4;border-radius:6px;font-size:12px;color:#166534;">🧩 {{ uiState.composeMsg }}</div>
    </div>
  </bo-container>

  <bo-modal :show="uiState.candOpen" title="🔎 컬럼에서 미등록 용어 추출" width="1180px" max-height="92vh" @close="handleBtnAction('candModal-close')">
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:10px;font-size:12.5px;">
      <span>미등록 컬럼명 <b>{{ candidates.length }}</b>개 (표시 {{ cfCandRows.length }})</span>
      <select class="form-control" style="width:120px;" v-model="uiState.candBizCd" @change="handleBtnAction('candModal-open')">
        <option value="">업무 전체</option>
        <option v-for="b in codes.bizCds" :key="b.value" :value="b.value">{{ b.label }}</option>
      </select>
      <label style="display:flex;align-items:center;gap:4px;"><input type="checkbox" v-model="uiState.candOnlyNamed" /> 용어명 있는 것만</label>
      <input class="form-control" style="width:180px;" v-model="uiState.candSearch" placeholder="컬럼명·용어명·테이블 검색" />
      <span style="margin-left:auto;color:#666;">체크 {{ candChecked.length }}개</span>
    </div>
    <bo-grid bare selectable narrow :columns="columns.candGrid" :rows="cfCandRows" row-key="colNm" checked-key="colNm"
      :is-checked="isCandChecked" :all-checked="cfAllCandChecked" @toggle-check="onToggleCand" @toggle-check-all="onToggleCandAll"
      :loading="uiState.candLoading" table-max-height="56vh" :excel-menu="false" empty-text="미등록 컬럼명이 없습니다." />
    <template #footer>
      <div style="display:flex;gap:6px;justify-content:flex-end;width:100%;">
        <button class="btn btn_search" @click="handleBtnAction('candModal-checkNamed')">용어명 있는 행 모두 체크</button>
        <button class="btn btn_cancel" @click="handleBtnAction('candModal-uncheck')">체크 해제</button>
        <button class="btn btn_save" :disabled="uiState.bulkBusy || !candChecked.length" @click="handleBtnAction('candModal-register')">
          {{ uiState.bulkBusy ? '등록 중…' : '체크한 ' + candChecked.length + '개 등록' }}</button>
        <button class="btn btn_close" @click="handleBtnAction('candModal-close')">닫기</button>
      </div>
    </template>
  </bo-modal>
</bo-page>
`,
};
