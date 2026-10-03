/* ShopJoy Admin - 운영지원 > DB메타관리 > 단어사전관리 (2026-10-03)
 * 컬럼명을 '_' 로 나눈 조각(영문약어)의 뜻을 정의하는 표준 단어사전(zd_meta_word).
 * "사용 컬럼 수" 는 지금 DB 컬럼 기준(pg_catalog)이라 컬럼명을 바꾸면 바로 달라진다.
 * [컬럼에서 단어 추출] — 지금 컬럼명에 쓰였는데 사전에 없는 단어를 추천 한글명과 함께 보여 주고, 골라서 일괄 등록한다. */
window.ZdMetaWordMng = {
  name: 'ZdMetaWordMng',
  props: {
    navigate: { type: Function, required: true }, // 페이지 이동
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { reactive, computed, onMounted } = Vue;
    const showToast   = window.boApp.showToast;
    const showConfirm = window.boApp.showConfirm;
    const UI = '단어사전관리';

    const words   = reactive([]);   // 단어 목록(현재 페이지)
    const uiState = reactive({ loading: false, selectedId: null, dtlMode: 'view', isNew: false,
      candOpen: false, candLoading: false, candSrc: '', candHideSyn: true, candSearch: '', candIncludeSample: false, bulkBusy: false });
    const cfDtlView = computed(() => uiState.dtlMode === 'view' && !uiState.isNew);
    const searchParam = reactive({ searchValue: '', wordTypeCd: '', useYn: '', unusedYn: '' });
    const searchParamInit = {};
    const baseGridPager = reactive({ pageType: 'PAGE', pageNo: 1, pageSize: 20, pageTotalCount: 0, pageTotalPage: 1, pageSizes: [10, 20, 50, 100, 200, 500], pageCond: {} });
    const FORM_INIT = { wordId: '', wordNm: '', wordAbbr: '', wordEngNm: '', wordTypeCd: 'GENERAL', synonymAbbrs: '', wordDesc: '', useYn: 'Y' };
    const form   = reactive({ ...FORM_INIT });
    const errors = reactive({});
    const candidates = reactive([]);          // 미등록 단어 후보
    const candChecked = reactive([]);         // 체크한 후보 약어
    const codes = {
      wordTypes: [{ value: 'GENERAL', label: '일반어' }, { value: 'CLASS', label: '분류어' }],
      useYn: [{ value: 'Y', label: '사용' }, { value: 'N', label: '미사용' }],
      srcTypes: [{ value: 'HINT', label: '추천표' }, { value: 'COMMENT', label: '코멘트 추론' }, { value: 'NONE', label: '추천 없음' }],
    };

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    /* handleBtnAction — 버튼 액션 dispatch (cmd: '{영역명}-기능명') */
    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ ZdMetaWordMng.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'searchParam-list') { baseGridPager.pageNo = 1; return handleSearchData(); }
      else if (cmd === 'searchParam-reset') { Object.assign(searchParam, searchParamInit); baseGridPager.pageNo = 1; return handleSearchData(); }
      else if (cmd === 'baseDetail-new') { return openNew(); }
      else if (cmd === 'baseDetail-edit') { uiState.dtlMode = 'edit'; return; }
      else if (cmd === 'baseDetail-save') { return handleSave(); }
      else if (cmd === 'baseDetail-cancel') { return cfSelected.value ? loadDetail(cfSelected.value, 'view') : closeDetail(); }
      else if (cmd === 'baseDetail-close') { return closeDetail(); }
      else if (cmd === 'baseDetail-delete') { return handleDelete(param.row || cfSelected.value); }
      else if (cmd === 'candModal-open') { uiState.candOpen = true; return loadCandidates(); }
      else if (cmd === 'candModal-close') { uiState.candOpen = false; return; }
      else if (cmd === 'candModal-reload') { return loadCandidates(); }
      else if (cmd === 'candModal-checkSuggested') { return checkSuggested(); }
      else if (cmd === 'candModal-uncheck') { candChecked.splice(0, candChecked.length); return; }
      else if (cmd === 'candModal-register') { return registerChecked(); }
      console.warn('[handleBtnAction] unknown cmd:', cmd);
    };

    /* handleSelectAction — 페이저 */
    const handleSelectAction = (cmd, param = {}) => {
      if (cmd === 'words-pager-setPage') {
        if (param >= 1 && param <= baseGridPager.pageTotalPage) { baseGridPager.pageNo = param; handleSearchData(); }
        return;
      } else if (cmd === 'words-pager-sizeChange') { baseGridPager.pageNo = 1; return handleSearchData(); }
      console.warn('[handleSelectAction] unknown cmd:', cmd);
    };

    /* handleGridCellAction — 셀 클릭(약어 링크 = 상세 보기) */
    const handleGridCellAction = (cmd, colKey, row, e = {}) => {
      if (cmd === 'words-cellClick') {
        if (colKey === 'btn_row_edit') return loadDetail(row, 'edit');
        if ((e.col && e.col.link) || colKey === '__no__') {
          if (uiState.selectedId === row.wordId && uiState.dtlMode === 'view') return closeDetail();
          return loadDetail(row, 'view');
        }
      }
    };

    /* ##### [04] 내장 사용 함수 ################################################### */

    const cfSelected = computed(() => words.find(w => w.wordId === uiState.selectedId) || null);

    /* handleSearchData — 목록 조회 */
    const handleSearchData = async () => {
      uiState.loading = true;
      try {
        const params = { pageNo: baseGridPager.pageNo, pageSize: baseGridPager.pageSize,
          ...coUtil.cofOmitEmpty({ ...searchParam, searchValue: (searchParam.searchValue || '').trim() }) };
        const res = await boApiSvc.zdMeta.getWordPage(params, UI, '조회');
        const d = res.data?.data;
        words.splice(0, words.length, ...(d?.pageList || []));
        baseGridPager.pageTotalCount = d?.pageTotalCount || 0;
        baseGridPager.pageTotalPage  = d?.pageTotalPage || 1;
        coUtil.cofBuildPagerNums(baseGridPager);
      } catch (err) {
        console.error('[handleSearchData] 단어 목록 조회 실패', err);
        words.splice(0, words.length);
      } finally {
        uiState.loading = false;
      }
    };

    const _clearErrors = () => Object.keys(errors).forEach(k => delete errors[k]);

    const loadDetail = (row, mode) => {
      _clearErrors();
      Object.assign(form, FORM_INIT, row);
      uiState.selectedId = row.wordId;
      uiState.isNew = false;
      uiState.dtlMode = mode;
    };

    const openNew = () => {
      _clearErrors();
      Object.assign(form, FORM_INIT);
      uiState.selectedId = null;
      uiState.isNew = true;
      uiState.dtlMode = 'edit';
    };

    const closeDetail = () => { uiState.selectedId = null; uiState.isNew = false; uiState.dtlMode = 'view'; _clearErrors(); };

    /* validateForm — 약어 형식·한글명 필수 */
    const validateForm = () => {
      _clearErrors();
      const abbr = String(form.wordAbbr || '').trim().toLowerCase();
      if (!/^[a-z][a-z0-9]{0,29}$/.test(abbr)) errors.wordAbbr = '영문 소문자로 시작하는 소문자·숫자 30자 이내';
      if (!String(form.wordNm || '').trim()) errors.wordNm = '단어명(한글)을 입력해주세요.';
      form.wordAbbr = abbr;
      return Object.keys(errors).length === 0;
    };

    const handleSave = async () => {
      if (!validateForm()) { showToast('입력 내용을 확인해주세요.', 'error'); return; }
      const ok = await showConfirm('저장', uiState.isNew ? '단어를 등록하시겠습니까?' : '단어를 저장하시겠습니까?');
      if (!ok) return;
      const body = { wordNm: form.wordNm, wordAbbr: form.wordAbbr, wordEngNm: form.wordEngNm || null, wordTypeCd: form.wordTypeCd,
        synonymAbbrs: form.synonymAbbrs || null, wordDesc: form.wordDesc || null, useYn: form.useYn || 'Y' };
      try {
        const res = uiState.isNew
          ? await boApiSvc.zdMeta.createWord(body, UI, '등록')
          : await boApiSvc.zdMeta.updateWord(form.wordId, body, UI, '저장');
        const saved = res.data?.data;
        await handleSearchData();
        const row = words.find(w => w.wordId === saved?.wordId);
        if (row) loadDetail(row, 'view'); else closeDetail();
        showToast('저장되었습니다.', 'success');
      } catch (err) {
        console.error('[handleSave] 단어 저장 실패', err);
        showToast(err.response?.data?.message || err.message || '저장 중 오류가 발생했습니다.', 'error', 0);
      }
    };

    const handleDelete = async (row) => {
      if (!row) return;
      const ok = await showConfirm('삭제', `단어 '${row.wordAbbr}(${row.wordNm})' 를 삭제하시겠습니까?`
        + (row.usedColCnt ? `\n지금 ${row.usedColCnt}개 컬럼이 이 단어를 쓰고 있어 삭제하면 '미등록 단어'로 바뀝니다.` : ''));
      if (!ok) return;
      try {
        await boApiSvc.zdMeta.removeWord(row.wordId, UI, '삭제');
        if (uiState.selectedId === row.wordId) closeDetail();
        await handleSearchData();
        showToast('삭제되었습니다.', 'success');
      } catch (err) {
        console.error('[handleDelete] 단어 삭제 실패', err);
        showToast(err.response?.data?.message || err.message || '삭제 중 오류가 발생했습니다.', 'error', 0);
      }
    };

    /* ── 후보 추출 모달 ───────────────────────────────────────────── */

    const loadCandidates = async () => {
      uiState.candLoading = true;
      candChecked.splice(0, candChecked.length);
      try {
        const res = await boApiSvc.zdMeta.getWordCandidates({ includeSampleYn: uiState.candIncludeSample ? 'Y' : 'N' }, UI, '단어추출');
        /* 추천값을 편집 가능한 값으로 복사(행에서 바로 고친 뒤 등록) */
        candidates.splice(0, candidates.length, ...(res.data?.data || []).map(c => ({
          ...c, editNm: c.suggestNm || '', editEngNm: c.suggestEngNm || '', editTypeCd: c.suggestTypeCd || 'GENERAL', editSynonyms: c.suggestSynonyms || '',
        })));
      } catch (err) {
        console.error('[loadCandidates] 단어 후보 조회 실패', err);
        showToast(err.response?.data?.message || '단어 후보를 불러오지 못했습니다.', 'error');
      } finally {
        uiState.candLoading = false;
      }
    };

    const cfCandRows = computed(() => {
      const q = uiState.candSearch.trim().toLowerCase();
      return candidates.filter(c => (!uiState.candSrc || c.suggestSrcCd === uiState.candSrc)
        && (!uiState.candHideSyn || !c.stdAbbr)
        && (!q || c.wordAbbr.includes(q) || (c.editNm || '').includes(q) || (c.sampleColNms || '').toLowerCase().includes(q)));
    });
    const cfCandSummary = computed(() => {
      const s = { HINT: 0, COMMENT: 0, NONE: 0, SYN: 0 };
      candidates.forEach(c => { s[c.suggestSrcCd] = (s[c.suggestSrcCd] || 0) + 1; if (c.stdAbbr) s.SYN++; });
      return s;
    });
    const isCandChecked = (abbr) => candChecked.includes(abbr);
    const cfAllCandChecked = computed(() => cfCandRows.value.length > 0 && cfCandRows.value.every(c => candChecked.includes(c.wordAbbr)));
    const onToggleCand = (abbr) => { const i = candChecked.indexOf(abbr); if (i >= 0) candChecked.splice(i, 1); else candChecked.push(abbr); };
    const onToggleCandAll = () => {
      if (cfAllCandChecked.value) { cfCandRows.value.forEach(c => { const i = candChecked.indexOf(c.wordAbbr); if (i >= 0) candChecked.splice(i, 1); }); }
      else { cfCandRows.value.forEach(c => { if (!candChecked.includes(c.wordAbbr)) candChecked.push(c.wordAbbr); }); }
    };
    /* 추천 한글명이 있는 행(지금 보이는 것)만 모두 체크 */
    const checkSuggested = () => {
      cfCandRows.value.forEach(c => { if ((c.editNm || '').trim() && !candChecked.includes(c.wordAbbr)) candChecked.push(c.wordAbbr); });
    };

    const registerChecked = async () => {
      const rows = candidates.filter(c => candChecked.includes(c.wordAbbr));
      if (!rows.length) { showToast('등록할 단어를 체크해주세요.', 'error'); return; }
      const noNm = rows.filter(c => !(c.editNm || '').trim());
      if (noNm.length) { showToast(`한글명이 비어 있는 단어가 ${noNm.length}개 있습니다: ${noNm.slice(0, 5).map(c => c.wordAbbr).join(', ')}`, 'error', 0); return; }
      const ok = await showConfirm('일괄 등록', `체크한 단어 ${rows.length}개를 단어사전에 등록하시겠습니까?`);
      if (!ok) return;
      uiState.bulkBusy = true;
      try {
        const body = rows.map(c => ({ wordAbbr: c.wordAbbr, wordNm: c.editNm.trim(), wordEngNm: c.editEngNm || null,
          wordTypeCd: c.editTypeCd || 'GENERAL', synonymAbbrs: c.editSynonyms || null, useYn: 'Y' }));
        const res = await boApiSvc.zdMeta.bulkWords(body, UI, '일괄등록');
        const r = res.data?.data || {};
        showToast(`등록 ${r.createdCnt || 0}건` + (r.skippedCnt ? ` · 건너뜀 ${r.skippedCnt}건` : ''), r.skippedCnt ? 'warning' : 'success', r.skippedCnt ? 0 : 3000);
        if (r.skippedCnt) console.warn('[registerChecked] 건너뛴 단어', r.skipped);
        await Promise.all([handleSearchData(), loadCandidates()]);
      } catch (err) {
        console.error('[registerChecked] 단어 일괄 등록 실패', err);
        showToast(err.response?.data?.message || err.message || '일괄 등록 중 오류가 발생했습니다.', 'error', 0);
      } finally {
        uiState.bulkBusy = false;
      }
    };

    /* ★ onMounted */
    const initPage = async () => {
      const _qs = new URLSearchParams(window.location.search);
      Object.keys(searchParam).forEach((k) => { if (_qs.has(k)) searchParam[k] = _qs.get(k); });
      await handleSearchData();
      Object.assign(searchParamInit, searchParam);
    };
    onMounted(initPage);

    /* ##### [05] 사용자 함수 (컬럼정의) ########################################### */

    const fnTypeBadge = (v) => v === 'CLASS' ? 'badge-orange' : 'badge-blue';
    const fnTypeLabel = (v) => v === 'CLASS' ? '분류어' : '일반어';
    const fnSrcBadge  = (v) => ({ HINT: 'badge-green', COMMENT: 'badge-blue', NONE: 'badge-gray' }[v] || 'badge-gray');
    const fnSrcLabel  = (v) => ({ HINT: '추천표', COMMENT: '코멘트', NONE: '없음' }[v] || v);
    const fnRowStyle  = (row) => uiState.selectedId === row.wordId ? 'background:#fff8f9;' : '';

    const columns = {};
    columns.baseSearch = [
      { key: 'searchValue', type: 'text', label: '검색어', placeholder: '약어·한글명·영문명·설명' },
      { key: 'wordTypeCd', type: 'select', label: '유형', options: () => codes.wordTypes, nullLabel: '전체' },
      { key: 'useYn', type: 'select', label: '사용여부', options: () => codes.useYn, nullLabel: '전체' },
      { key: 'unusedYn', type: 'select', label: '컬럼 사용', options: () => [{ value: 'Y', label: '안 쓰이는 단어만' }], nullLabel: '전체' },
    ];
    columns.baseGrid = [
      { key: 'wordAbbr', label: '영문약어', link: true, width: '120px', cellInnerStyle: 'font-family:monospace;color:#7c3aed;font-weight:600;' },
      { key: 'wordNm', label: '단어명', width: '120px' },
      { key: 'wordEngNm', label: '영문명', cellStyle: 'color:#666;font-size:12px;' },
      { key: 'wordTypeCd', label: '유형', align: 'center', width: '70px', badge: (r) => fnTypeBadge(r.wordTypeCd), fmt: (v) => fnTypeLabel(v) },
      { key: 'synonymAbbrs', label: '비표준 동의어', cellStyle: 'font-family:monospace;font-size:12px;color:#b45309;' },
      { key: 'usedColCnt', label: '사용 컬럼', align: 'right', width: '80px', fmt: (v) => (v || 0).toLocaleString() },
      { key: 'synonymColCnt', label: '동의어 사용', align: 'right', width: '80px', fmt: (v) => v ? v.toLocaleString() : '-',
        cellStyle: (v) => v ? 'color:#dc2626;font-weight:600;' : 'color:#bbb;' },
      { key: 'useYn', label: '사용', align: 'center', width: '60px', badge: (r) => r.useYn === 'Y' ? 'badge-green' : 'badge-gray' },
      { key: 'wordDesc', label: '설명', cellStyle: 'color:#888;font-size:12px;' },
      { type: 'actions', actions: [
        { label: '수정', cls: 'btn btn_row_edit btn-sm', onClick: (row) => handleGridCellAction('words-cellClick', 'btn_row_edit', row) },
        { label: '삭제', cls: 'btn btn_row_delete btn-sm', onClick: (row) => handleBtnAction('baseDetail-delete', { row }) },
      ] },
    ];
    columns.baseForm = [
      { key: 'wordAbbr', label: '영문약어', type: 'text', required: true, placeholder: '예: amt (소문자)', mono: true },
      { key: 'wordNm', label: '단어명(한글)', type: 'text', required: true, placeholder: '예: 금액' },
      { key: 'wordEngNm', label: '영문명', type: 'text', placeholder: '예: amount' },
      { key: 'wordTypeCd', label: '유형', type: 'select', nullable: false, options: () => codes.wordTypes },
      { key: 'synonymAbbrs', label: '비표준 동의어', type: 'text', placeholder: '같은 뜻의 다른 약어(쉼표) 예: amount', mono: true },
      { key: 'useYn', label: '사용여부', type: 'select', nullable: false, options: () => codes.useYn },
      { key: 'wordDesc', label: '설명', type: 'textarea', rows: 2, colSpan: 3 },
    ];
    columns.candGrid = [
      { key: 'wordAbbr', label: '약어', width: '90px', cellInnerStyle: 'font-family:monospace;font-weight:600;color:#7c3aed;' },
      { key: 'colCnt', label: '컬럼', align: 'right', width: '55px' },
      { key: 'tableCnt', label: '테이블', align: 'right', width: '55px' },
      { key: 'editNm', label: '한글명(수정 가능)', edit: 'text', placeholder: '한글명 입력', width: '140px' },
      { key: 'editEngNm', label: '영문명', edit: 'text', width: '130px' },
      { key: 'editTypeCd', label: '유형', edit: 'select', options: () => codes.wordTypes, width: '90px' },
      { key: 'editSynonyms', label: '비표준 동의어', edit: 'text', width: '110px' },
      { key: 'suggestSrcCd', label: '추천근거', align: 'center', width: '70px', badge: (r) => fnSrcBadge(r.suggestSrcCd), fmt: (v) => fnSrcLabel(v) },
      { key: 'sampleColNms', label: '쓰인 곳(예)', cellStyle: 'font-family:monospace;font-size:11px;color:#666;' ,
        fmt: (v, r) => (r.stdAbbr ? `⚠ 비표준(→${r.stdAbbr}) · ` : '') + (v || '') },
    ];

    /* ##### [06] return ######################################################### */

    return {
      columns, codes, uiState, cfDtlView, searchParam, baseGridPager, words, form, errors, cfSelected,
      candidates, candChecked, cfCandRows, cfCandSummary, isCandChecked, cfAllCandChecked, onToggleCand, onToggleCandAll,
      handleBtnAction, handleSelectAction, handleGridCellAction, fnRowStyle,
    };
  },
  template: `
<bo-page title="단어사전관리" :share-query="searchParam">
  <div style="margin:0 0 10px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;font-size:12.5px;color:#475569;line-height:1.6;">
    컬럼명을 <b>_</b> 로 나눈 조각(영문약어)의 뜻을 정의합니다. 예: <code>order_qty</code> = <b>order</b>(주문) + <b>qty</b>(수량).
    <b>분류어</b>는 컬럼 끝에 와서 데이터 성격을 정하는 단어(id·cd·nm·yn·amt·date …)로, 도메인관리의 기준이 됩니다.
    <b>비표준 동의어</b>를 적어 두면 표준점검이 그 약어를 쓴 컬럼을 찾아냅니다. 사용 컬럼 수는 지금 DB 기준입니다.
  </div>
  <bo-container>
    <bo-search-area @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <bo-container title="단어 목록" :count-text="'총 ' + baseGridPager.pageTotalCount + '건'">
    <template #toolbar-actions>
      <button class="btn btn_search" @click="handleBtnAction('candModal-open')">🔎 컬럼에서 단어 추출</button>
      <button class="btn btn_new" @click="handleBtnAction('baseDetail-new')">+ 신규</button>
    </template>
    <bo-grid bare :columns="columns.baseGrid" :rows="words" row-key="wordId" :selected-key="uiState.selectedId"
      :row-style="fnRowStyle" :loading="uiState.loading" empty-text="등록된 단어가 없습니다. [컬럼에서 단어 추출]로 시작해 보세요."
      grid-id="words-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleSelectAction('words-pager-setPage', n)" :on-size-change="() => handleSelectAction('words-pager-sizeChange')" />
  </bo-container>
  <bo-container v-if="uiState.isNew || cfSelected">
    <div class="toolbar">
      <span class="list-title">{{ uiState.isNew ? '단어 신규' : (cfDtlView ? '단어 상세' : '단어 수정') }}
        <span v-if="!uiState.isNew" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">#{{ form.wordAbbr }} · 사용 컬럼 {{ cfSelected ? cfSelected.usedColCnt : 0 }}개</span>
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

  <!-- ===== ■. 컬럼에서 단어 추출 모달 =========================================== -->
  <bo-modal :show="uiState.candOpen" title="🔎 컬럼에서 미등록 단어 추출" width="1180px" max-height="92vh" @close="handleBtnAction('candModal-close')">
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:10px;font-size:12.5px;">
      <span>후보 <b>{{ candidates.length }}</b>개 — 추천표 {{ cfCandSummary.HINT || 0 }} · 코멘트 추론 {{ cfCandSummary.COMMENT || 0 }} · 추천 없음 {{ cfCandSummary.NONE || 0 }}</span>
      <select class="form-control" style="width:130px;" v-model="uiState.candSrc">
        <option value="">추천근거 전체</option>
        <option v-for="s in codes.srcTypes" :key="s.value" :value="s.value">{{ s.label }}</option>
      </select>
      <label style="display:flex;align-items:center;gap:4px;"><input type="checkbox" v-model="uiState.candHideSyn" /> 비표준 동의어 후보 숨김({{ cfCandSummary.SYN }})</label>
      <label style="display:flex;align-items:center;gap:4px;"><input type="checkbox" v-model="uiState.candIncludeSample" @change="handleBtnAction('candModal-reload')" /> 샘플(zz_) 포함</label>
      <input class="form-control" style="width:180px;" v-model="uiState.candSearch" placeholder="약어·한글명·컬럼 검색" />
      <span style="margin-left:auto;color:#666;">체크 {{ candChecked.length }}개</span>
    </div>
    <bo-grid bare selectable narrow :columns="columns.candGrid" :rows="cfCandRows" row-key="wordAbbr" checked-key="wordAbbr"
      :is-checked="isCandChecked" :all-checked="cfAllCandChecked" @toggle-check="onToggleCand" @toggle-check-all="onToggleCandAll"
      :loading="uiState.candLoading" table-max-height="56vh" :excel-menu="false" empty-text="미등록 단어가 없습니다." />
    <template #footer>
      <div style="display:flex;gap:6px;justify-content:flex-end;width:100%;">
        <button class="btn btn_search" @click="handleBtnAction('candModal-checkSuggested')">한글명 있는 행 모두 체크</button>
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
