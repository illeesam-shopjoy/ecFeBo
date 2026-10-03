/* ShopJoy Admin - 운영지원 > DB메타관리 > 도메인관리 (2026-10-03)
 * 분류어(컬럼 끝 단어)별로 허용하는 데이터 타입을 정한다(zd_meta_domain). 예: …_amt = bigint, …_yn = varchar(1)
 * 같은 분류어에 도메인을 여러 개 둘 수 있다(…_date = date 또는 timestamp) — 표준점검은 그중 하나라도 맞으면 통과.
 * [실제 타입 분포로 후보 보기] — 지금 DB 컬럼의 분류어별 타입 분포에서 도메인 후보를 뽑아 골라 등록한다. */
window.ZdMetaDomainMng = {
  name: 'ZdMetaDomainMng',
  props: {
    navigate: { type: Function, required: true }, // 페이지 이동
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { reactive, computed, onMounted } = Vue;
    const showToast   = window.boApp.showToast;
    const showConfirm = window.boApp.showConfirm;
    const UI = '도메인관리';

    const domains = reactive([]);
    const uiState = reactive({ loading: false, selectedId: null, dtlMode: 'view', isNew: false,
      candOpen: false, candLoading: false, candHideExists: true, bulkBusy: false });
    const cfDtlView = computed(() => uiState.dtlMode === 'view' && !uiState.isNew);
    const searchParam = reactive({ searchValue: '' });
    const FORM_INIT = { domainId: '', domainNm: '', classWordAbbr: '', dataType: 'varchar', dataLen: null, dataScale: null, domainDesc: '', sortOrd: 0, useYn: 'Y' };
    const form   = reactive({ ...FORM_INIT });
    const errors = reactive({});
    const candidates  = reactive([]);
    const candChecked = reactive([]);
    const codes = {
      dataTypes: ['varchar', 'char', 'text', 'integer', 'bigint', 'smallint', 'numeric', 'date', 'timestamp', 'timestamptz', 'boolean', 'jsonb'].map(v => ({ value: v, label: v })),
      useYn: [{ value: 'Y', label: '사용' }, { value: 'N', label: '미사용' }],
    };

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ ZdMetaDomainMng.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'searchParam-list') return handleSearchData();
      else if (cmd === 'searchParam-reset') { searchParam.searchValue = ''; return handleSearchData(); }
      else if (cmd === 'baseDetail-new') return openNew();
      else if (cmd === 'baseDetail-edit') { uiState.dtlMode = 'edit'; return; }
      else if (cmd === 'baseDetail-save') return handleSave();
      else if (cmd === 'baseDetail-cancel') return cfSelected.value ? loadDetail(cfSelected.value, 'view') : closeDetail();
      else if (cmd === 'baseDetail-close') return closeDetail();
      else if (cmd === 'baseDetail-delete') return handleDelete(param.row || cfSelected.value);
      else if (cmd === 'baseDetail-violations') return props.navigate('zdMetaStdCheck', { id: 'DOMAIN' });
      else if (cmd === 'candModal-open') { uiState.candOpen = true; return loadCandidates(); }
      else if (cmd === 'candModal-close') { uiState.candOpen = false; return; }
      else if (cmd === 'candModal-checkTop') return checkTop();
      else if (cmd === 'candModal-uncheck') { candChecked.splice(0, candChecked.length); return; }
      else if (cmd === 'candModal-register') return registerChecked();
      console.warn('[handleBtnAction] unknown cmd:', cmd);
    };

    const handleGridCellAction = (cmd, colKey, row, e = {}) => {
      if (cmd === 'domains-cellClick') {
        if (colKey === 'btn_row_edit') return loadDetail(row, 'edit');
        if ((e.col && e.col.link) || colKey === '__no__') {
          if (uiState.selectedId === row.domainId && uiState.dtlMode === 'view') return closeDetail();
          return loadDetail(row, 'view');
        }
      }
    };

    /* ##### [04] 내장 사용 함수 ################################################### */

    const cfSelected = computed(() => domains.find(d => d.domainId === uiState.selectedId) || null);

    const handleSearchData = async () => {
      uiState.loading = true;
      try {
        const res = await boApiSvc.zdMeta.getDomains(coUtil.cofOmitEmpty({ searchValue: (searchParam.searchValue || '').trim() }), UI, '조회');
        domains.splice(0, domains.length, ...(res.data?.data || []));
      } catch (err) {
        console.error('[handleSearchData] 도메인 목록 조회 실패', err);
        domains.splice(0, domains.length);
      } finally {
        uiState.loading = false;
      }
    };

    const _clearErrors = () => Object.keys(errors).forEach(k => delete errors[k]);
    const loadDetail = (row, mode) => { _clearErrors(); Object.assign(form, FORM_INIT, row); uiState.selectedId = row.domainId; uiState.isNew = false; uiState.dtlMode = mode; };
    const openNew = () => { _clearErrors(); Object.assign(form, FORM_INIT); uiState.selectedId = null; uiState.isNew = true; uiState.dtlMode = 'edit'; };
    const closeDetail = () => { uiState.selectedId = null; uiState.isNew = false; uiState.dtlMode = 'view'; _clearErrors(); };

    const validateForm = () => {
      _clearErrors();
      if (!String(form.domainNm || '').trim()) errors.domainNm = '도메인명을 입력해주세요.';
      const cw = String(form.classWordAbbr || '').trim().toLowerCase();
      if (cw && !/^[a-z][a-z0-9]{0,29}$/.test(cw)) errors.classWordAbbr = '영문 소문자 약어 (예: amt)';
      form.classWordAbbr = cw;
      if (!form.dataType) errors.dataType = '데이터 타입을 고르세요.';
      if (form.dataLen !== null && form.dataLen !== '' && !(Number(form.dataLen) > 0)) errors.dataLen = '1 이상';
      return Object.keys(errors).length === 0;
    };

    const _num = (v) => (v === null || v === '' || v === undefined) ? null : Number(v);

    const handleSave = async () => {
      if (!validateForm()) { showToast('입력 내용을 확인해주세요.', 'error'); return; }
      const ok = await showConfirm('저장', uiState.isNew ? '도메인을 등록하시겠습니까?' : '도메인을 저장하시겠습니까?');
      if (!ok) return;
      const body = { domainNm: form.domainNm.trim(), classWordAbbr: form.classWordAbbr || null, dataType: form.dataType,
        dataLen: _num(form.dataLen), dataScale: _num(form.dataScale), domainDesc: form.domainDesc || null, sortOrd: _num(form.sortOrd) || 0, useYn: form.useYn || 'Y' };
      try {
        const res = uiState.isNew ? await boApiSvc.zdMeta.createDomain(body, UI, '등록') : await boApiSvc.zdMeta.updateDomain(form.domainId, body, UI, '저장');
        const saved = res.data?.data;
        await handleSearchData();
        const row = domains.find(d => d.domainId === saved?.domainId);
        if (row) loadDetail(row, 'view'); else closeDetail();
        showToast('저장되었습니다.', 'success');
      } catch (err) {
        console.error('[handleSave] 도메인 저장 실패', err);
        showToast(err.response?.data?.message || err.message || '저장 중 오류가 발생했습니다.', 'error', 0);
      }
    };

    const handleDelete = async (row) => {
      if (!row) return;
      const ok = await showConfirm('삭제', `도메인 '${row.domainNm}' 을 삭제하시겠습니까?`);
      if (!ok) return;
      try {
        await boApiSvc.zdMeta.removeDomain(row.domainId, UI, '삭제');
        if (uiState.selectedId === row.domainId) closeDetail();
        await handleSearchData();
        showToast('삭제되었습니다.', 'success');
      } catch (err) {
        console.error('[handleDelete] 도메인 삭제 실패', err);
        showToast(err.response?.data?.message || err.message || '삭제 중 오류가 발생했습니다.', 'error', 0);
      }
    };

    /* ── 후보 모달 ───────────────────────────────────────────────── */

    const _candKey = (c) => c.classWordAbbr + '|' + c.suggestType + '|' + (c.suggestLen ?? '') + '|' + (c.suggestScale ?? '');
    const loadCandidates = async () => {
      uiState.candLoading = true;
      candChecked.splice(0, candChecked.length);
      try {
        const res = await boApiSvc.zdMeta.getDomainCandidates(UI, '도메인후보');
        candidates.splice(0, candidates.length, ...(res.data?.data || []).map(c => ({
          ...c, _key: _candKey(c), editNm: c.suggestNm || '', editType: c.suggestType || '', editLen: c.suggestLen ?? null, editScale: c.suggestScale ?? null,
        })));
      } catch (err) {
        console.error('[loadCandidates] 도메인 후보 조회 실패', err);
        showToast(err.response?.data?.message || '도메인 후보를 불러오지 못했습니다.', 'error');
      } finally {
        uiState.candLoading = false;
      }
    };
    const cfCandRows = computed(() => candidates.filter(c => !uiState.candHideExists || c.existsYn !== 'Y'));
    const isCandChecked = (k) => candChecked.includes(k);
    const cfAllCandChecked = computed(() => cfCandRows.value.length > 0 && cfCandRows.value.every(c => candChecked.includes(c._key)));
    const onToggleCand = (k) => { const i = candChecked.indexOf(k); if (i >= 0) candChecked.splice(i, 1); else candChecked.push(k); };
    const onToggleCandAll = () => {
      if (cfAllCandChecked.value) cfCandRows.value.forEach(c => { const i = candChecked.indexOf(c._key); if (i >= 0) candChecked.splice(i, 1); });
      else cfCandRows.value.forEach(c => { if (!candChecked.includes(c._key)) candChecked.push(c._key); });
    };
    /* 분류어마다 가장 많이 쓰인 타입(첫 후보)만 체크 */
    const checkTop = () => {
      const seen = new Set();
      cfCandRows.value.forEach(c => { if (!seen.has(c.classWordAbbr)) { seen.add(c.classWordAbbr); if (!candChecked.includes(c._key)) candChecked.push(c._key); } });
    };

    const registerChecked = async () => {
      const rows = candidates.filter(c => candChecked.includes(c._key));
      if (!rows.length) { showToast('등록할 후보를 체크해주세요.', 'error'); return; }
      const ok = await showConfirm('일괄 등록', `체크한 도메인 ${rows.length}개를 등록하시겠습니까?`);
      if (!ok) return;
      uiState.bulkBusy = true;
      try {
        const body = rows.map((c, i) => ({ domainNm: (c.editNm || '').trim(), classWordAbbr: c.classWordAbbr, dataType: c.editType,
          dataLen: _num(c.editLen), dataScale: _num(c.editScale), sortOrd: (i + 1) * 10, useYn: 'Y',
          domainDesc: `후보 등록(2026-10-03) — 실제 분포: ${c.typeDist}` }));
        const res = await boApiSvc.zdMeta.bulkDomains(body, UI, '일괄등록');
        const r = res.data?.data || {};
        showToast(`등록 ${r.createdCnt || 0}건` + (r.skippedCnt ? ` · 건너뜀 ${r.skippedCnt}건` : ''), r.skippedCnt ? 'warning' : 'success', r.skippedCnt ? 0 : 3000);
        if (r.skippedCnt) console.warn('[registerChecked] 건너뛴 도메인', r.skipped);
        await Promise.all([handleSearchData(), loadCandidates()]);
      } catch (err) {
        console.error('[registerChecked] 도메인 일괄 등록 실패', err);
        showToast(err.response?.data?.message || err.message || '일괄 등록 중 오류가 발생했습니다.', 'error', 0);
      } finally {
        uiState.bulkBusy = false;
      }
    };

    /* ★ onMounted */
    onMounted(handleSearchData);

    /* ##### [05] 사용자 함수 (컬럼정의) ########################################### */

    const fnRowStyle = (row) => uiState.selectedId === row.domainId ? 'background:#fff8f9;' : '';
    const columns = {};
    columns.baseSearch = [
      { key: 'searchValue', type: 'text', label: '검색어', placeholder: '도메인명·분류어·타입·설명' },
    ];
    columns.baseGrid = [
      { key: 'domainNm', label: '도메인명', link: true, cellInnerStyle: 'font-weight:600;' },
      { key: 'classWordAbbr', label: '분류어', width: '120px', cellInnerStyle: 'font-family:monospace;color:#7c3aed;',
        fmt: (v, r) => v ? ('…_' + v + (r.classWordNm ? ' (' + r.classWordNm + ')' : '')) : '-' },
      { key: 'typeLabel', label: '타입', width: '130px', cellStyle: 'font-family:monospace;font-size:12px;' },
      { key: 'applyColCnt', label: '적용 컬럼', align: 'right', width: '80px', fmt: (v) => v ? v.toLocaleString() : '-' },
      { key: 'violateColCnt', label: '위반 컬럼', align: 'right', width: '80px', fmt: (v) => v ? v.toLocaleString() : '-',
        cellStyle: (v) => v ? 'color:#dc2626;font-weight:600;' : 'color:#bbb;' },
      { key: 'termCnt', label: '용어', align: 'right', width: '60px', fmt: (v) => v || '-' },
      { key: 'useYn', label: '사용', align: 'center', width: '60px', badge: (r) => r.useYn === 'Y' ? 'badge-green' : 'badge-gray' },
      { key: 'sortOrd', label: '순서', align: 'right', width: '55px' },
      { key: 'domainDesc', label: '설명', cellStyle: 'font-size:12px;color:#888;' },
      { type: 'actions', actions: [
        { label: '수정', cls: 'btn btn_row_edit btn-sm', onClick: (row) => handleGridCellAction('domains-cellClick', 'btn_row_edit', row) },
        { label: '삭제', cls: 'btn btn_row_delete btn-sm', onClick: (row) => handleBtnAction('baseDetail-delete', { row }) },
      ] },
    ];
    columns.baseForm = [
      { key: 'domainNm', label: '도메인명', type: 'text', required: true, placeholder: '예: 금액' },
      { key: 'classWordAbbr', label: '분류어(컬럼 끝 단어)', type: 'text', placeholder: '예: amt', mono: true },
      { key: 'dataType', label: '데이터 타입', type: 'select', nullable: false, required: true, options: () => codes.dataTypes },
      { key: 'dataLen', label: '길이/자릿수', type: 'number', placeholder: '비우면 길이 무관' },
      { key: 'dataScale', label: '소수 자릿수', type: 'number', placeholder: 'numeric 만' },
      { key: 'sortOrd', label: '정렬순서', type: 'number' },
      { key: 'useYn', label: '사용여부', type: 'select', nullable: false, options: () => codes.useYn },
      { key: 'domainDesc', label: '설명', type: 'textarea', rows: 2, colSpan: 2 },
    ];
    columns.candGrid = [
      { key: 'classWordAbbr', label: '분류어', width: '90px', cellInnerStyle: 'font-family:monospace;font-weight:600;color:#7c3aed;', fmt: (v, r) => v + (r.classWordNm ? ' ' + r.classWordNm : '') },
      { key: 'colCnt', label: '컬럼', align: 'right', width: '55px' },
      { key: 'editNm', label: '도메인명(수정 가능)', edit: 'text', width: '140px' },
      { key: 'editType', label: '타입', edit: 'select', options: () => codes.dataTypes, width: '120px' },
      { key: 'editLen', label: '길이', edit: 'number', width: '70px' },
      { key: 'editScale', label: '소수', edit: 'number', width: '60px' },
      { key: 'suggestCoverCnt', label: '맞는 컬럼', align: 'right', width: '75px', fmt: (v, r) => v + '/' + r.colCnt },
      { key: 'existsYn', label: '기존', align: 'center', width: '50px', fmt: (v) => v === 'Y' ? '있음' : '' },
      { key: 'typeDist', label: '실제 타입 분포', cellStyle: 'font-family:monospace;font-size:11px;color:#666;' },
    ];

    /* ##### [06] return ######################################################### */

    return {
      columns, codes, uiState, cfDtlView, searchParam, domains, form, errors, cfSelected,
      candidates, candChecked, cfCandRows, isCandChecked, cfAllCandChecked, onToggleCand, onToggleCandAll,
      handleBtnAction, handleGridCellAction, fnRowStyle,
    };
  },
  template: `
<bo-page title="도메인관리">
  <div style="margin:0 0 10px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;font-size:12.5px;color:#475569;line-height:1.6;">
    <b>분류어</b>(컬럼 끝 단어)별로 허용하는 데이터 타입을 정합니다. 예: <code>…_amt</code> = bigint, <code>…_yn</code> = varchar(1).
    같은 분류어에 도메인을 여러 개 둘 수 있습니다(<code>…_date</code> = date 또는 timestamp) — 하나라도 맞으면 통과입니다.
    <b>위반 컬럼</b>은 지금 DB 에서 그 분류어로 끝나는데 어느 도메인과도 타입이 안 맞는 컬럼 수입니다(표준점검 &gt; 도메인 위반에서 목록 확인).
  </div>
  <bo-container>
    <bo-search-area @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <bo-container title="도메인 목록" :count-text="'총 ' + domains.length + '건'">
    <template #toolbar-actions>
      <button class="btn btn_search" @click="handleBtnAction('baseDetail-violations')">⚠ 위반 컬럼 보기</button>
      <button class="btn btn_search" @click="handleBtnAction('candModal-open')">📊 실제 타입 분포로 후보 보기</button>
      <button class="btn btn_new" @click="handleBtnAction('baseDetail-new')">+ 신규</button>
    </template>
    <bo-grid bare :columns="columns.baseGrid" :rows="domains" row-key="domainId" :selected-key="uiState.selectedId"
      :row-style="fnRowStyle" :loading="uiState.loading" empty-text="등록된 도메인이 없습니다. [실제 타입 분포로 후보 보기]로 시작해 보세요."
      grid-id="domains-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
  </bo-container>
  <bo-container v-if="uiState.isNew || cfSelected">
    <div class="toolbar">
      <span class="list-title">{{ uiState.isNew ? '도메인 신규' : (cfDtlView ? '도메인 상세' : '도메인 수정') }}
        <span v-if="!uiState.isNew && cfSelected" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">적용 {{ cfSelected.applyColCnt }} · 위반 {{ cfSelected.violateColCnt }} · 용어 {{ cfSelected.termCnt }}</span>
      </span>
      <div style="margin-left:auto;display:flex;gap:6px;">
        <template v-if="cfDtlView">
          <button class="btn btn_edit" @click="handleBtnAction('baseDetail-edit')">수정</button>
          <button class="btn btn_delete" @click="handleBtnAction('baseDetail-delete')">삭제</button>
          <button class="btn btn_close" @click="handleBtnAction('baseDetail-close')">닫기</button>
        </template>
        <template v-else>
          <button class="btn btn_save" @click="handleBtnAction('baseDetail-save')">저장</button>
          <button class="btn btn_cancel" @click="handleBtnAction('baseDetail-cancel')">취소</button>
        </template>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area :columns="columns.baseForm" :form="form" :errors="errors" :cols="3" :show-actions="false" :readonly="cfDtlView" plain-readonly />
    </div>
  </bo-container>

  <bo-modal :show="uiState.candOpen" title="📊 분류어별 실제 타입 분포 — 도메인 후보" width="1150px" max-height="92vh" @close="handleBtnAction('candModal-close')">
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:10px;font-size:12.5px;">
      <span>후보 <b>{{ candidates.length }}</b>개 — 한 분류어에 타입이 갈리면(15% 이상) 타입마다 후보가 나옵니다.</span>
      <label style="display:flex;align-items:center;gap:4px;"><input type="checkbox" v-model="uiState.candHideExists" /> 이미 도메인이 있는 분류어 숨김</label>
      <span style="margin-left:auto;color:#666;">체크 {{ candChecked.length }}개</span>
    </div>
    <bo-grid bare selectable narrow :columns="columns.candGrid" :rows="cfCandRows" row-key="_key" checked-key="_key"
      :is-checked="isCandChecked" :all-checked="cfAllCandChecked" @toggle-check="onToggleCand" @toggle-check-all="onToggleCandAll"
      :loading="uiState.candLoading" table-max-height="56vh" :excel-menu="false" empty-text="후보가 없습니다." />
    <template #footer>
      <div style="display:flex;gap:6px;justify-content:flex-end;width:100%;">
        <button class="btn btn_search" @click="handleBtnAction('candModal-checkTop')">분류어별 최다 타입만 체크</button>
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
