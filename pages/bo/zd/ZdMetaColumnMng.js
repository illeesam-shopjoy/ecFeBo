/* ShopJoy Admin - 운영지원 > DB메타관리 > 컬럼정보 (2026-10-03)
 * 전체 테이블의 컬럼을 한 목록에서 검색 — 실제 DB(pg_catalog) 기준.
 * 단어 분해(단어사전 대조)·표준 문제(미등록 단어·비표준 동의어·도메인 위반)·같은 이름 컬럼의 타입 불일치를 함께 보여 준다.
 * 컬럼 코멘트는 여기서 바로 고칠 수 있다(COMMENT ON). */
window.ZdMetaColumnMng = {
  name: 'ZdMetaColumnMng',
  props: {
    navigate: { type: Function, required: true }, // 페이지 이동
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { reactive, computed, onMounted } = Vue;
    const showToast   = window.boApp.showToast;
    const showConfirm = window.boApp.showConfirm;
    const UI = '컬럼정보';

    const cols     = reactive([]);
    const sameRows = reactive([]);
    const uiState  = reactive({ loading: false, sameOpen: false, sameColNm: '', commentOpen: false, commentBusy: false });
    const commentForm = reactive({ tableNm: '', colNm: '', commentTxt: '' });
    const searchParam = reactive({ searchValue: '', bizCd: '', dataType: '', noCommentYn: '', issueYn: '', includeSampleYn: '', sort: 'tableNm asc' });
    const searchParamInit = {};
    const baseGridPager = reactive({ pageType: 'PAGE', pageNo: 1, pageSize: 50, pageTotalCount: 0, pageTotalPage: 1, pageSizes: [20, 50, 100, 200, 500], pageCond: {} });
    const codes = reactive({
      bizCds: [],
      dataTypes: ['varchar', 'char', 'text', 'integer', 'bigint', 'smallint', 'numeric', 'date', 'timestamp', 'timestamptz', 'boolean', 'jsonb'].map(v => ({ value: v, label: v })),
      sorts: [{ value: 'tableNm asc', label: '테이블순' }, { value: 'colNm asc', label: '컬럼명순' }, { value: 'sameNameCnt desc', label: '같은이름 많은순' }],
    });

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ ZdMetaColumnMng.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'searchParam-list') { baseGridPager.pageNo = 1; return handleSearchData(); }
      else if (cmd === 'searchParam-reset') { Object.assign(searchParam, searchParamInit); baseGridPager.pageNo = 1; return handleSearchData(); }
      else if (cmd === 'comment-edit') return openComment(param.row);
      else if (cmd === 'comment-save') return saveComment();
      else if (cmd === 'comment-close') { uiState.commentOpen = false; return; }
      else if (cmd === 'same-close') { uiState.sameOpen = false; return; }
      console.warn('[handleBtnAction] unknown cmd:', cmd);
    };

    const handleSelectAction = (cmd, param = {}) => {
      if (cmd === 'cols-pager-setPage') {
        if (param >= 1 && param <= baseGridPager.pageTotalPage) { baseGridPager.pageNo = param; handleSearchData(); }
        return;
      } else if (cmd === 'cols-pager-sizeChange') { baseGridPager.pageNo = 1; return handleSearchData(); }
    };

    const handleGridCellAction = (cmd, colKey, row) => {
      if (cmd === 'cols-cellClick') {
        if (colKey === 'tableNm') return props.navigate('zdMetaTableMng', { id: row.tableNm });
        if (colKey === 'sameNameCnt' && row.sameNameCnt > 1) return openSameName(row.colNm);
      } else if (cmd === 'same-cellClick' && colKey === 'tableNm') {
        uiState.sameOpen = false;
        return props.navigate('zdMetaTableMng', { id: row.tableNm });
      }
    };

    /* ##### [04] 내장 사용 함수 ################################################### */

    const handleSearchData = async () => {
      uiState.loading = true;
      try {
        const params = { pageNo: baseGridPager.pageNo, pageSize: baseGridPager.pageSize,
          ...coUtil.cofOmitEmpty({ ...searchParam, searchValue: (searchParam.searchValue || '').trim() }) };
        const res = await boApiSvc.zdMeta.getColumns(params, UI, '조회');
        const d = res.data?.data;
        cols.splice(0, cols.length, ...(d?.pageList || []));
        baseGridPager.pageTotalCount = d?.pageTotalCount || 0;
        baseGridPager.pageTotalPage  = d?.pageTotalPage || 1;
        coUtil.cofBuildPagerNums(baseGridPager);
      } catch (err) {
        console.error('[handleSearchData] 컬럼 목록 조회 실패', err);
        cols.splice(0, cols.length);
      } finally {
        uiState.loading = false;
      }
    };

    /* 업무구분 select — 테이블 목록에서 접두어를 모은다 */
    const fnLoadBizCds = async () => {
      try {
        const res = await boApiSvc.zdMeta.getTables({}, UI, '업무구분');
        codes.bizCds = [...new Set((res.data?.data || []).map(t => t.bizCd))].sort().map(b => ({ value: b, label: b }));
      } catch (err) {
        console.warn('[fnLoadBizCds] 업무구분 조회 실패', err);
      }
    };

    const openSameName = async (colNm) => {
      uiState.sameColNm = colNm;
      uiState.sameOpen = true;
      try {
        const res = await boApiSvc.zdMeta.getSameName(colNm, UI, '같은이름컬럼');
        sameRows.splice(0, sameRows.length, ...(res.data?.data || []));
      } catch (err) {
        console.error('[openSameName] 같은 이름 컬럼 조회 실패', err);
        sameRows.splice(0, sameRows.length);
      }
    };
    const cfSameTypes = computed(() => [...new Set(sameRows.map(r => r.dataType))]);

    const openComment = (row) => {
      commentForm.tableNm = row.tableNm;
      commentForm.colNm = row.colNm;
      /* 코멘트가 비어 있으면 단어 분해 결과(미등록·비표준이 없을 때)를 초안으로 */
      const draft = row.wordNms && !row.wordNms.includes('?') && !row.wordNms.includes('*') ? row.wordNms.replace(/\+/g, '') : '';
      commentForm.commentTxt = row.colComment || draft;
      uiState.commentOpen = true;
    };

    const saveComment = async () => {
      const ok = await showConfirm('코멘트 저장', `${commentForm.tableNm}.${commentForm.colNm} 코멘트를 DB 에 바로 반영합니다(COMMENT ON).`);
      if (!ok) return;
      uiState.commentBusy = true;
      try {
        await boApiSvc.zdMeta.saveComment({ ...commentForm }, UI, '코멘트저장');
        uiState.commentOpen = false;
        await handleSearchData();
        showToast('코멘트를 저장했습니다.', 'success');
      } catch (err) {
        console.error('[saveComment] 코멘트 저장 실패', err);
        showToast(err.response?.data?.message || err.message || '코멘트 저장 실패', 'error', 0);
      } finally {
        uiState.commentBusy = false;
      }
    };

    /* ★ onMounted */
    const initPage = async () => {
      const _qs = new URLSearchParams(window.location.search);
      Object.keys(searchParam).forEach((k) => { if (_qs.has(k)) searchParam[k] = _qs.get(k); });
      await Promise.all([fnLoadBizCds(), handleSearchData()]);
      Object.assign(searchParamInit, searchParam);
    };
    onMounted(initPage);

    /* ##### [05] 사용자 함수 (컬럼정의) ########################################### */

    const fnIssueTxt = (r) => [r.unknownWords ? '미등록 ' + r.unknownWords : '', r.synonymWords ? '비표준 ' + r.synonymWords : '', r.domainIssue ? '도메인 ' + r.domainIssue : '']
      .filter(Boolean).join(' · ');

    const columns = {};
    columns.baseSearch = [
      { key: 'searchValue', type: 'text', label: '검색어', placeholder: '컬럼명·코멘트·테이블명' },
      { key: 'bizCd', type: 'select', label: '업무', options: () => codes.bizCds, nullLabel: '업무 전체' },
      { key: 'dataType', type: 'select', label: '타입', options: () => codes.dataTypes, nullLabel: '타입 전체' },
      { key: 'noCommentYn', type: 'select', label: '코멘트', options: () => [{ value: 'Y', label: '없는 것만' }], nullLabel: '전체' },
      { key: 'issueYn', type: 'select', label: '표준 문제', options: () => [{ value: 'Y', label: '문제 있는 것만' }], nullLabel: '전체' },
      { key: 'includeSampleYn', type: 'select', label: '샘플(zz_)', options: () => [{ value: 'Y', label: '포함' }], nullLabel: '제외' },
      { key: 'sort', type: 'select', label: '정렬', options: () => codes.sorts, nullable: false },
    ];
    columns.baseGrid = [
      { key: 'tableNm', label: '테이블', link: true, cellInnerStyle: 'font-family:monospace;color:#1d4ed8;', width: '170px' },
      { key: 'tableComment', label: '테이블 코멘트', cellStyle: 'font-size:12px;color:#64748b;', width: '120px' },
      { key: 'colNm', label: '컬럼명', cellInnerStyle: 'font-family:monospace;font-weight:600;', fmt: (v, r) => (r.pkYn === 'Y' ? '🔑 ' : '') + v },
      { key: 'colComment', label: '코멘트', cellStyle: (v) => v ? 'font-size:12px;' : 'font-size:12px;color:#dc2626;', fmt: (v) => v || '(없음)' },
      { key: 'dataType', label: '타입', width: '120px', cellStyle: 'font-family:monospace;font-size:12px;color:#7c3aed;' },
      { key: 'notNullYn', label: 'NULL', align: 'center', width: '50px', fmt: (v) => v === 'Y' ? 'NN' : '' },
      { key: 'wordNms', label: '단어 분해', cellStyle: 'font-size:12px;color:#475569;' },
      { key: 'issue', label: '표준 문제', fmt: (v, r) => fnIssueTxt(r), cellStyle: 'font-size:11px;color:#c2410c;' },
      { key: 'sameNameCnt', label: '같은이름', align: 'center', width: '70px', link: true,
        fmt: (v, r) => v > 1 ? v + '개' + (r.sameNameTypeCnt > 1 ? ' ⚠' : '') : '-', cellStyle: (v, r) => r.sameNameTypeCnt > 1 ? 'color:#dc2626;' : '' },
      { key: 'termNm', label: '용어', width: '90px', cellStyle: 'font-size:12px;color:#15803d;', fmt: (v) => v || '' },
      { type: 'actions', actions: [
        { label: '코멘트', cls: 'btn btn_row_edit btn-sm', onClick: (row) => handleBtnAction('comment-edit', { row }) },
      ] },
    ];
    columns.same = [
      { key: 'tableNm', label: '테이블', link: true, cellInnerStyle: 'font-family:monospace;' },
      { key: 'dataType', label: '타입', cellStyle: 'font-family:monospace;font-size:12px;color:#7c3aed;' },
      { key: 'notNullYn', label: 'NULL', align: 'center', fmt: (v) => v === 'Y' ? 'NN' : '' },
      { key: 'defaultVal', label: '기본값', cellStyle: 'font-family:monospace;font-size:11px;' },
      { key: 'colComment', label: '코멘트', cellStyle: 'font-size:12px;' },
    ];

    /* ##### [06] return ######################################################### */

    return {
      columns, codes, uiState, searchParam, baseGridPager, cols, sameRows, cfSameTypes, commentForm,
      handleBtnAction, handleSelectAction, handleGridCellAction,
    };
  },
  template: `
<bo-page title="컬럼정보" :share-query="searchParam">
  <div style="margin:0 0 10px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;font-size:12.5px;color:#475569;line-height:1.6;">
    전체 테이블의 컬럼을 검색합니다(지금 DB 기준). <b>단어 분해</b>는 단어사전으로 컬럼명을 풀어 쓴 것으로 <b>?</b> 는 미등록 단어, <b>*</b> 는 비표준 동의어입니다.
    <b>같은이름 ⚠</b> 는 같은 컬럼명이 테이블마다 타입이 다르다는 뜻입니다 — 눌러서 비교하세요. 테이블명을 누르면 테이블정보로 이동합니다.
  </div>
  <bo-container>
    <bo-search-area @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <bo-container title="컬럼 목록" :count-text="'총 ' + baseGridPager.pageTotalCount.toLocaleString() + '건'">
    <bo-grid bare :columns="columns.baseGrid" :rows="cols" :loading="uiState.loading" empty-text="조건에 맞는 컬럼이 없습니다."
      grid-id="cols-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleSelectAction('cols-pager-setPage', n)" :on-size-change="() => handleSelectAction('cols-pager-sizeChange')" />
  </bo-container>

  <bo-modal :show="uiState.commentOpen" :title="'컬럼 코멘트 — ' + commentForm.tableNm + '.' + commentForm.colNm" width="560px" @close="handleBtnAction('comment-close')">
    <div style="font-size:12px;color:#64748b;margin-bottom:8px;">DB 에 바로 반영됩니다(COMMENT ON). 논리 참조는 <code>설명 (테이블.컬럼)</code> 처럼 적으면 테이블정보 참조관계에 나타납니다.</div>
    <textarea class="form-control" rows="4" v-model="commentForm.commentTxt" style="width:100%;"></textarea>
    <template #footer>
      <button class="btn btn_save" :disabled="uiState.commentBusy" @click="handleBtnAction('comment-save')">{{ uiState.commentBusy ? '저장 중…' : '저장' }}</button>
      <button class="btn btn_close" @click="handleBtnAction('comment-close')">닫기</button>
    </template>
  </bo-modal>

  <bo-modal :show="uiState.sameOpen" :title="'같은 이름 컬럼 — ' + uiState.sameColNm + ' (' + sameRows.length + '개 테이블)'" width="900px" @close="handleBtnAction('same-close')">
    <div v-if="cfSameTypes.length > 1" style="margin-bottom:8px;padding:8px 10px;background:#fef2f2;border-radius:6px;color:#b91c1c;font-size:12px;">
      ⚠ 같은 컬럼명인데 타입이 {{ cfSameTypes.length }}가지입니다: {{ cfSameTypes.join(' · ') }}
    </div>
    <bo-grid bare narrow :columns="columns.same" :rows="sameRows" row-key="tableNm" table-max-height="60vh" :excel-menu="false"
      grid-id="same-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
    <template #footer><button class="btn btn_close" @click="handleBtnAction('same-close')">닫기</button></template>
  </bo-modal>
</bo-page>
`,
};
