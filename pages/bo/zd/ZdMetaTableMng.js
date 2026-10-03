/* ShopJoy Admin - 운영지원 > DB메타관리 > 테이블정보 (2026-10-03)
 * 실제 DB(pg_catalog) 기준 테이블·뷰 목록과 상세(컬럼·인덱스·제약조건·참조관계·DDL).
 * 참조관계는 물리 FK + 컬럼 코멘트에 적힌 논리 참조 "(sy_site.site_id)" 를 함께 보여 준다(이 DB 는 FK 를 거의 안 쓴다).
 * 테이블/컬럼 코멘트는 여기서 바로 고칠 수 있다(COMMENT ON). */
window.ZdMetaTableMng = {
  name: 'ZdMetaTableMng',
  props: {
    navigate: { type: Function, required: true },          // 페이지 이동
    dtlId:    { type: [String, Number], default: null },    // 열어 둘 테이블명 — 다른 메타 화면에서 navigate('zdMetaTableMng', { id: 테이블명 })
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { reactive, computed, onMounted, watch } = Vue;
    const showToast   = window.boApp.showToast;
    const showConfirm = window.boApp.showConfirm;
    const UI = '테이블정보';

    const tables  = reactive([]);    // 테이블 목록(전체 — 200여 개)
    const detail  = reactive({ tableNm: '', tableComment: '', tableType: '', rowCnt: 0, sizeBytes: 0, pkColNms: '',
      indexes: [], constraints: [], references: [], ddl: '' });
    const detailCols = reactive([]); // 선택 테이블 컬럼
    const sameRows   = reactive([]); // 같은 이름 컬럼 모달
    const uiState = reactive({ loading: false, dtlLoading: false, selectedTable: null, tab: 'cols',
      sameOpen: false, sameColNm: '', commentOpen: false, commentBusy: false });
    const commentForm = reactive({ tableNm: '', colNm: '', commentTxt: '', label: '' });
    const searchParam = reactive({ bizCd: '', searchValue: '', tableType: '', noCommentYn: '', issueYn: '', includeSampleYn: '' });
    const searchParamInit = {};

    const tabs = reactive([
      { id: 'cols', label: '컬럼', icon: '📋', get count() { return detailCols.length; } },
      { id: 'idx', label: '인덱스', icon: '⚡', get count() { return detail.indexes.length; } },
      { id: 'cons', label: '제약조건', icon: '🔒', get count() { return detail.constraints.length; } },
      { id: 'refs', label: '참조관계', icon: '🔗', get count() { return detail.references.length; } },
      { id: 'ddl', label: 'DDL', icon: '📝' },
    ]);
    const codes = {
      tableTypes: [{ value: 'TABLE', label: '테이블' }, { value: 'VIEW', label: '뷰' }],
      yn: [{ value: 'Y', label: '예' }],
      bizCds: [],
    };

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ ZdMetaTableMng.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'searchParam-list') return handleSearchData();
      else if (cmd === 'searchParam-reset') { Object.assign(searchParam, searchParamInit); return handleSearchData(); }
      else if (cmd === 'meta-refresh') return handleRefresh();
      else if (cmd === 'detail-close') { uiState.selectedTable = null; return; }
      else if (cmd === 'tab-select') { uiState.tab = param; return; }
      else if (cmd === 'detail-open') return openDetail(param.tableNm);
      else if (cmd === 'comment-edit') return openComment(param.colNm || '', param.current || '');
      else if (cmd === 'comment-save') return saveComment();
      else if (cmd === 'comment-close') { uiState.commentOpen = false; return; }
      else if (cmd === 'same-open') return openSameName(param.colNm);
      else if (cmd === 'same-close') { uiState.sameOpen = false; return; }
      else if (cmd === 'ddl-copy') return copyDdl();
      console.warn('[handleBtnAction] unknown cmd:', cmd);
    };

    const handleGridCellAction = (cmd, colKey, row, e = {}) => {
      if (cmd === 'tables-cellClick' && ((e.col && e.col.link) || colKey === '__no__')) {
        if (uiState.selectedTable === row.tableNm) { uiState.selectedTable = null; return; }
        return openDetail(row.tableNm);
      }
      if (cmd === 'cols-cellClick' && colKey === 'sameNameCnt' && row.sameNameCnt > 1) return openSameName(row.colNm);
      if (cmd === 'refs-cellClick' && (colKey === 'fromTableNm' || colKey === 'toTableNm')) {
        const t = row[colKey];
        if (t && t !== uiState.selectedTable) return openDetail(t);
      }
      if (cmd === 'same-cellClick' && colKey === 'tableNm') { uiState.sameOpen = false; return openDetail(row.tableNm); }
    };

    /* ##### [04] 내장 사용 함수 ################################################### */

    const handleSearchData = async () => {
      uiState.loading = true;
      try {
        const res = await boApiSvc.zdMeta.getTables(coUtil.cofOmitEmpty({ ...searchParam, searchValue: (searchParam.searchValue || '').trim() }), UI, '조회');
        tables.splice(0, tables.length, ...(res.data?.data || []));
        if (!codes.bizCds.length || !searchParam.bizCd) {
          codes.bizCds = [...new Set(tables.map(t => t.bizCd))].sort().map(b => ({ value: b, label: b }));
        }
      } catch (err) {
        console.error('[handleSearchData] 테이블 목록 조회 실패', err);
        tables.splice(0, tables.length);
      } finally {
        uiState.loading = false;
      }
    };

    /* handleRefresh — 30초 캐시를 기다리지 않고 DB 메타를 다시 읽는다 */
    const handleRefresh = async () => {
      try {
        await boApiSvc.zdMeta.refresh(UI, '새로고침');
        await handleSearchData();
        if (uiState.selectedTable) await openDetail(uiState.selectedTable, true);
        showToast('DB 메타를 다시 읽었습니다.', 'success');
      } catch (err) {
        console.error('[handleRefresh] 새로고침 실패', err);
        showToast(err.response?.data?.message || '새로고침 실패', 'error');
      }
    };

    const openDetail = async (tableNm, keepTab) => {
      if (!tableNm) return;
      uiState.selectedTable = tableNm;
      if (!keepTab) uiState.tab = 'cols';
      uiState.dtlLoading = true;
      try {
        const [tRes, cRes] = await Promise.all([
          boApiSvc.zdMeta.getTable(tableNm, UI, '상세'),
          boApiSvc.zdMeta.getColumns({ tableNm, includeSampleYn: 'Y', pageNo: 1, pageSize: 1000, sort: 'tableNm asc' }, UI, '컬럼조회'),
        ]);
        Object.assign(detail, tRes.data?.data || {});
        detailCols.splice(0, detailCols.length, ...(cRes.data?.data?.pageList || []));
        Vue.nextTick(() => document.getElementById('zdMetaTableDtl')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      } catch (err) {
        console.error('[openDetail] 테이블 상세 조회 실패', err);
        showToast(err.response?.data?.message || '테이블 상세를 불러오지 못했습니다.', 'error');
      } finally {
        uiState.dtlLoading = false;
      }
    };

    const openComment = (colNm, current) => {
      commentForm.tableNm = uiState.selectedTable;
      commentForm.colNm = colNm;
      commentForm.commentTxt = current || '';
      commentForm.label = colNm ? `${uiState.selectedTable}.${colNm}` : `${uiState.selectedTable} (테이블)`;
      uiState.commentOpen = true;
    };

    const saveComment = async () => {
      const ok = await showConfirm('코멘트 저장', `${commentForm.label} 코멘트를 DB 에 바로 반영합니다(COMMENT ON).` + (commentForm.commentTxt.trim() ? '' : '\n빈 값이면 코멘트가 지워집니다.'));
      if (!ok) return;
      uiState.commentBusy = true;
      try {
        await boApiSvc.zdMeta.saveComment({ tableNm: commentForm.tableNm, colNm: commentForm.colNm || null, commentTxt: commentForm.commentTxt }, UI, '코멘트저장');
        uiState.commentOpen = false;
        await Promise.all([openDetail(commentForm.tableNm, true), handleSearchData()]);
        showToast('코멘트를 저장했습니다.', 'success');
      } catch (err) {
        console.error('[saveComment] 코멘트 저장 실패', err);
        showToast(err.response?.data?.message || err.message || '코멘트 저장 실패', 'error', 0);
      } finally {
        uiState.commentBusy = false;
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

    const copyDdl = async () => {
      try { await navigator.clipboard.writeText(detail.ddl || ''); showToast('DDL 을 복사했습니다.', 'success'); }
      catch (e) { showToast('복사하지 못했습니다(브라우저 권한).', 'error'); }
    };

    /* ★ onMounted */
    const initPage = async () => {
      const _qs = new URLSearchParams(window.location.search);
      Object.keys(searchParam).forEach((k) => { if (_qs.has(k)) searchParam[k] = _qs.get(k); });
      await handleSearchData();
      Object.assign(searchParamInit, searchParam);
      const t = props.dtlId || _qs.get('tableNm');
      if (t) await openDetail(String(t));
    };
    onMounted(initPage);
    /* 탭이 살아 있는 채로 다른 화면에서 다시 들어오면 onMounted 가 다시 돌지 않는다 — dtlId 변화를 따라간다 */
    watch(() => props.dtlId, (v) => { if (v && String(v) !== uiState.selectedTable) openDetail(String(v)); });

    /* ##### [05] 사용자 함수 (헬퍼 / 컬럼정의) ##################################### */

    const fnSize = (b) => { const n = Number(b || 0); if (!n) return '-'; if (n < 1024) return n + 'B';
      if (n < 1048576) return (n / 1024).toFixed(0) + 'KB'; return (n / 1048576).toFixed(1) + 'MB'; };
    const fnNum = (v) => Number(v || 0).toLocaleString();
    const cfSummary = computed(() => ({
      tableCnt: tables.filter(t => t.tableType === 'TABLE').length,
      viewCnt: tables.filter(t => t.tableType !== 'TABLE').length,
      colCnt: tables.reduce((s, t) => s + (t.colCnt || 0), 0),
      noCommentCol: tables.reduce((s, t) => s + (t.noCommentColCnt || 0), 0),
      issueCol: tables.reduce((s, t) => s + (t.issueColCnt || 0), 0),
    }));
    const fnRowStyle = (row) => uiState.selectedTable === row.tableNm ? 'background:#fff8f9;' : '';
    const fnIssueTxt = (r) => [r.unknownWords ? '미등록:' + r.unknownWords : '', r.synonymWords ? '동의어:' + r.synonymWords : '', r.domainIssue ? '도메인:' + r.domainIssue : '']
      .filter(Boolean).join(' / ');

    const columns = {};
    columns.baseSearch = [
      { key: 'bizCd', type: 'select', label: '업무', options: () => codes.bizCds, nullLabel: '업무 전체' },
      { key: 'searchValue', type: 'text', label: '검색어', placeholder: '테이블명·코멘트' },
      { key: 'tableType', type: 'select', label: '유형', options: () => codes.tableTypes, nullLabel: '전체' },
      { key: 'noCommentYn', type: 'select', label: '코멘트 누락', options: () => [{ value: 'Y', label: '누락 있는 것만' }], nullLabel: '전체' },
      { key: 'issueYn', type: 'select', label: '표준 문제', options: () => [{ value: 'Y', label: '문제 있는 것만' }], nullLabel: '전체' },
      { key: 'includeSampleYn', type: 'select', label: '샘플(zz_)', options: () => [{ value: 'Y', label: '포함' }], nullLabel: '제외' },
    ];
    columns.tables = [
      { key: 'tableNm', label: '테이블명', link: true, cellInnerStyle: 'font-family:monospace;font-weight:600;color:#1d4ed8;' },
      { key: 'tableComment', label: '코멘트(한글명)', cellStyle: (v) => v ? '' : 'color:#dc2626;', fmt: (v) => v || '(코멘트 없음)' },
      { key: 'bizCd', label: '업무', align: 'center', width: '60px' },
      { key: 'tableType', label: '유형', align: 'center', width: '60px', badge: (r) => r.tableType === 'TABLE' ? 'badge-blue' : 'badge-orange', fmt: (v) => v === 'TABLE' ? '테이블' : '뷰' },
      { key: 'colCnt', label: '컬럼', align: 'right', width: '60px' },
      { key: 'rowCnt', label: '행(추정)', align: 'right', width: '80px', fmt: (v) => fnNum(v) },
      { key: 'sizeBytes', label: '크기', align: 'right', width: '70px', fmt: (v) => fnSize(v) },
      { key: 'idxCnt', label: '인덱스', align: 'right', width: '60px' },
      { key: 'fkCnt', label: 'FK', align: 'right', width: '50px', fmt: (v) => v || '-' },
      { key: 'pkColNms', label: 'PK', cellStyle: 'font-family:monospace;font-size:12px;color:#666;' },
      { key: 'noCommentColCnt', label: '코멘트 없음', align: 'right', width: '80px', fmt: (v) => v || '-', cellStyle: (v) => v ? 'color:#dc2626;font-weight:600;' : 'color:#bbb;' },
      { key: 'issueColCnt', label: '표준 문제', align: 'right', width: '75px', fmt: (v) => v || '-', cellStyle: (v) => v ? 'color:#c2410c;font-weight:600;' : 'color:#bbb;' },
    ];
    columns.cols = [
      { key: 'ord', label: '#', align: 'center', width: '40px' },
      { key: 'colNm', label: '컬럼명', cellInnerStyle: 'font-family:monospace;font-weight:600;', fmt: (v, r) => (r.pkYn === 'Y' ? '🔑 ' : '') + v },
      { key: 'colComment', label: '코멘트', cellStyle: (v) => v ? 'font-size:12px;' : 'color:#dc2626;font-size:12px;', fmt: (v) => v || '(없음)' },
      { key: 'dataType', label: '타입', width: '120px', cellStyle: 'font-family:monospace;font-size:12px;color:#7c3aed;' },
      { key: 'notNullYn', label: 'NULL', align: 'center', width: '55px', fmt: (v) => v === 'Y' ? 'NN' : '' },
      { key: 'defaultVal', label: '기본값', cellStyle: 'font-family:monospace;font-size:11px;color:#666;' },
      { key: 'wordNms', label: '단어 분해', cellStyle: 'font-size:12px;color:#475569;' },
      { key: 'issue', label: '표준 문제', fmt: (v, r) => fnIssueTxt(r), cellStyle: 'font-size:11px;color:#c2410c;' },
      { key: 'sameNameCnt', label: '같은이름', align: 'center', width: '70px', link: true,
        fmt: (v, r) => v > 1 ? (v + '개' + (r.sameNameTypeCnt > 1 ? ' ⚠' : '')) : '-',
        cellStyle: (v, r) => r.sameNameTypeCnt > 1 ? 'color:#dc2626;' : '' },
      { key: 'termNm', label: '용어', cellStyle: 'font-size:12px;color:#15803d;', fmt: (v) => v || '' },
      { type: 'actions', actions: [
        { label: '코멘트', cls: 'btn btn_row_edit btn-sm', onClick: (row) => handleBtnAction('comment-edit', { colNm: row.colNm, current: row.colComment }) },
      ] },
    ];
    columns.idx = [
      { key: 'indexNm', label: '인덱스명', cellStyle: 'font-family:monospace;font-size:12px;' },
      { key: 'colNms', label: '컬럼', cellStyle: 'font-family:monospace;font-size:12px;color:#1d4ed8;' },
      { key: 'primaryYn', label: 'PK', align: 'center', width: '50px', fmt: (v) => v === 'Y' ? '●' : '' },
      { key: 'uniqueYn', label: 'UNIQUE', align: 'center', width: '65px', fmt: (v) => v === 'Y' ? '●' : '' },
      { key: 'constraintYn', label: '제약조건', align: 'center', width: '70px', fmt: (v) => v === 'Y' ? '●' : '' },
      { key: 'sizeBytes', label: '크기', align: 'right', width: '70px', fmt: (v) => fnSize(v) },
      { key: 'indexDef', label: '정의', cellStyle: 'font-family:monospace;font-size:11px;color:#666;' },
    ];
    columns.cons = [
      { key: 'constraintNm', label: '제약조건명', cellStyle: 'font-family:monospace;font-size:12px;' },
      { key: 'constraintTypeCd', label: '유형', align: 'center', width: '70px', badge: (r) => ({ PK: 'badge-red', UK: 'badge-orange', FK: 'badge-blue' }[r.constraintTypeCd] || 'badge-gray') },
      { key: 'constraintDef', label: '정의', cellStyle: 'font-family:monospace;font-size:12px;color:#475569;' },
    ];
    columns.refs = [
      { key: 'dirCd', label: '방향', align: 'center', width: '90px', fmt: (v) => v === 'OUT' ? '→ 참조함' : '← 참조됨', badge: (r) => r.dirCd === 'OUT' ? 'badge-blue' : 'badge-green' },
      { key: 'refTypeCd', label: '근거', align: 'center', width: '70px', fmt: (v) => v === 'FK' ? 'FK' : '코멘트' },
      { key: 'fromTableNm', label: '참조하는 쪽', link: true, cellInnerStyle: 'font-family:monospace;', fmt: (v, r) => v + (r.fromColNm ? '.' + r.fromColNm : '') },
      { key: 'toTableNm', label: '참조되는 쪽', link: true, cellInnerStyle: 'font-family:monospace;', fmt: (v, r) => v + (r.toColNm ? '.' + r.toColNm : '') },
      { key: 'refDesc', label: '근거 내용', cellStyle: 'font-size:12px;color:#666;' },
    ];
    columns.same = [
      { key: 'tableNm', label: '테이블', link: true, cellInnerStyle: 'font-family:monospace;' },
      { key: 'dataType', label: '타입', cellStyle: 'font-family:monospace;font-size:12px;color:#7c3aed;' },
      { key: 'notNullYn', label: 'NULL', align: 'center', fmt: (v) => v === 'Y' ? 'NN' : '' },
      { key: 'defaultVal', label: '기본값', cellStyle: 'font-family:monospace;font-size:11px;' },
      { key: 'colComment', label: '코멘트', cellStyle: 'font-size:12px;' },
    ];
    const cfSameTypes = computed(() => [...new Set(sameRows.map(r => r.dataType))]);

    /* ##### [06] return ######################################################### */

    return {
      columns, codes, tabs, uiState, searchParam, tables, detail, detailCols, sameRows, commentForm, cfSummary, cfSameTypes,
      handleBtnAction, handleGridCellAction, fnRowStyle, fnSize, fnNum,
    };
  },
  template: `
<bo-page title="테이블정보" :share-query="searchParam">
  <div style="margin:0 0 10px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;font-size:12.5px;color:#475569;line-height:1.6;">
    지금 DB(<code>shopjoy_2604</code>)의 실제 정의입니다 — 컬럼명을 바꾸면 바로 반영됩니다(30초 캐시, [DB 다시 읽기]로 즉시).
    참조관계는 물리 FK 와 컬럼 코멘트의 <code>(테이블.컬럼)</code> 표기를 함께 보여 줍니다. 코멘트는 상세에서 바로 고칠 수 있습니다.
  </div>
  <bo-container>
    <bo-search-area @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <bo-container title="테이블 목록" :count-text="'테이블 ' + cfSummary.tableCnt + ' · 뷰 ' + cfSummary.viewCnt + ' · 컬럼 ' + fnNum(cfSummary.colCnt) + ' · 코멘트 없는 컬럼 ' + fnNum(cfSummary.noCommentCol) + ' · 표준 문제 컬럼 ' + fnNum(cfSummary.issueCol)">
    <template #toolbar-actions>
      <button class="btn btn_search" @click="handleBtnAction('meta-refresh')">↻ DB 다시 읽기</button>
    </template>
    <bo-grid bare :columns="columns.tables" :rows="tables" row-key="tableNm" :selected-key="uiState.selectedTable" :row-style="fnRowStyle"
      :loading="uiState.loading" table-max-height="440px" empty-text="조건에 맞는 테이블이 없습니다."
      grid-id="tables-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
  </bo-container>

  <bo-container v-if="uiState.selectedTable">
    <div id="zdMetaTableDtl" class="toolbar">
      <span class="list-title">
        <span style="font-family:monospace;">{{ uiState.selectedTable }}</span>
        <span style="font-size:13px;margin-left:8px;" :style="detail.tableComment ? 'color:#334155' : 'color:#dc2626'">{{ detail.tableComment || '(테이블 코멘트 없음)' }}</span>
        <span style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">{{ detail.tableType === 'TABLE' ? '테이블' : '뷰' }} · 행 {{ fnNum(detail.rowCnt) }} · {{ fnSize(detail.sizeBytes) }} · PK {{ detail.pkColNms || '-' }}</span>
      </span>
      <div style="margin-left:auto;display:flex;gap:6px;">
        <button class="btn btn_edit" @click="handleBtnAction('comment-edit', { colNm: '', current: detail.tableComment })">테이블 코멘트</button>
        <button class="btn btn_close" @click="handleBtnAction('detail-close')">닫기</button>
      </div>
    </div>
    <bo-tab-bar :tabs="tabs" :tab="uiState.tab" :show-modes="false" @tab-select="id => handleBtnAction('tab-select', id)" />
    <div style="padding:10px 12px;">
      <div v-if="uiState.dtlLoading" style="color:#999;font-size:12px;padding:8px;">⏳ 불러오는 중…</div>
      <bo-grid v-show="uiState.tab==='cols'" bare :columns="columns.cols" :rows="detailCols" row-key="colNm" table-max-height="520px"
        grid-id="cols-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" empty-text="컬럼이 없습니다." />
      <bo-grid v-show="uiState.tab==='idx'" bare :columns="columns.idx" :rows="detail.indexes" row-key="indexNm" empty-text="인덱스가 없습니다." />
      <bo-grid v-show="uiState.tab==='cons'" bare :columns="columns.cons" :rows="detail.constraints" row-key="constraintNm" empty-text="제약조건이 없습니다." />
      <bo-grid v-show="uiState.tab==='refs'" bare :columns="columns.refs" :rows="detail.references"
        grid-id="refs-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" empty-text="참조관계(FK·코멘트 표기)가 없습니다." />
      <div v-show="uiState.tab==='ddl'">
        <div style="display:flex;justify-content:flex-end;margin-bottom:6px;"><button class="btn btn_search" @click="handleBtnAction('ddl-copy')">📋 복사</button></div>
        <pre style="margin:0;padding:12px;background:#0f172a;color:#e2e8f0;border-radius:8px;font-size:12px;line-height:1.5;max-height:520px;overflow:auto;white-space:pre;">{{ detail.ddl }}</pre>
      </div>
    </div>
  </bo-container>

  <!-- ===== ■. 코멘트 편집 모달 =============================================== -->
  <bo-modal :show="uiState.commentOpen" :title="'코멘트 — ' + commentForm.label" width="560px" @close="handleBtnAction('comment-close')">
    <div style="font-size:12px;color:#64748b;margin-bottom:8px;">DB 에 바로 반영됩니다(COMMENT ON). 논리 참조는 <code>설명 (테이블.컬럼)</code> 처럼 적으면 참조관계에 나타납니다.</div>
    <textarea class="form-control" rows="4" v-model="commentForm.commentTxt" placeholder="예: 주문수량 / 사이트ID (sy_site.site_id)" style="width:100%;"></textarea>
    <template #footer>
      <button class="btn btn_save" :disabled="uiState.commentBusy" @click="handleBtnAction('comment-save')">{{ uiState.commentBusy ? '저장 중…' : '저장' }}</button>
      <button class="btn btn_close" @click="handleBtnAction('comment-close')">닫기</button>
    </template>
  </bo-modal>

  <!-- ===== ■. 같은 이름 컬럼 모달 =============================================== -->
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
