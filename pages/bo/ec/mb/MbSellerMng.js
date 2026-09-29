/* ShopJoy Admin - 판매자관리 (mb_seller) */
window.MbSellerMng = {
  name: 'MbSellerMng',
  props: {
    navigate:     { type: Function, required: true }, // 페이지 이동
    openNewWindow: { type: Function, default: () => {} }, // 실제 새 브라우저 창으로 열기 (Ctrl+클릭)
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { ref, reactive, computed, watch, onMounted } = Vue;
    const showToast    = window.boApp.showToast;   // 토스트 알림
    const showConfirm  = window.boApp.showConfirm; // 확인 모달
    const sellers = reactive([]);                  // 판매자 목록 (메인 그리드 데이터)
    const uiState = reactive({                     // UI 상태
      loading: false, error: null, sortKey: '', sortDir: 'asc',
    });
    const codes = reactive({ seller_type_cd: [], seller_status_cd: [], date_range_opts: [] });
    const SORT_MAP = { nm: { asc: 'sellerNm asc', desc: 'sellerNm desc' }, reg: { asc: 'regDate asc', desc: 'regDate desc' } };

    /* ===== 검색조건 ===== */

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    /* handleBtnAction — 버튼 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ MbSellerMng.js : handleBtnAction -> ', cmd, param);
      // 검색조건으로 목록 조회
      if (cmd === 'searchParam-list') {
        baseGridPager.pageNo = 1;
        return handleSearchList('DEFAULT');
      // 검색조건 초기화 + 재조회
      } else if (cmd === 'searchParam-reset') {
        Object.assign(searchParam, searchParamInit);
        uiState.sortKey = ''; uiState.sortDir = 'asc';
        baseGridPager.pageNo = 1;
        resetDetailToNew();
        return handleSearchList('DEFAULT');
      // 기간 옵션 변경
      } else if (cmd === 'searchParam-dateRange') {
        return onDateRangeChange();
      // 판매자 신규 등록 (인라인 패널 / Ctrl·휠클릭 시 새창)
      } else if (cmd === 'sellers-add') {
        if (param && (param.ctrlKey || param.metaKey || param.button === 1)) { return props.openNewWindow('mbSellerDtl', null, 'new'); }
        return openNew();
      // 판매자 목록 재조회
      } else if (cmd === 'sellers-reload') {
        return handleSearchList('RELOAD');
      // 상세 인라인 패널 닫기
      } else if (cmd === 'detailPanel-close') {
        return closeDetail();
      // 그리드 정렬 헤더 클릭
      } else if (cmd === 'sellers-sort') {
        return onSort(param);
      // 페이지 번호 클릭
      } else if (cmd === 'sellers-pager-setPage') {
        return setPage(param);
      } else {
        console.warn('[handleBtnAction] unknown cmd:', cmd);
      }
    };

    /* handleSelectAction — 그리드 행/노드/모달 선택 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleSelectAction = (cmd, param = {}) => {
      console.log(' ■■ MbSellerMng.js : handleSelectAction -> ', cmd, param);
      // 페이지 크기 변경
      if (cmd === 'sellers-pager-sizeChange') {
        return onSizeChange();
      } else {
        console.warn('[handleSelectAction] unknown cmd:', cmd);
      }
    };

    /* handleGridCellAction — 그리드 셀 클릭 dispatch. cmd='{영역}-cellClick', e={row,col,colKey,colIndex,rowIndex}.
       e.colKey(클릭 컬럼명) 기준으로 셀별 동작 분기, e.row 행 객체 활용 */
    const handleGridCellAction = (cmd, colKey, row, e = {}) => {
      console.log(' ■■ MbSellerMng.js : handleGridCellAction -> ', cmd, colKey, row);
      if (cmd === 'sellers-cellClick') {
        // 행 액션 버튼 (colKey='btn_*') — [수정]/[삭제] 등
        if (colKey === 'btn_row_edit') {
          if (e && (e.ctrlKey || e.metaKey || e.button === 1)) { return props.openNewWindow('mbSellerDtl', row.sellerId, 'edit'); }
          return handleLoadDetail(row.sellerId);
        }
        if (colKey === 'btn_row_delete') { return handleDelete(row); }
        // 보기모드 트리거 컬럼: 제목(link) 셀 + 행번호(__no__) + VIEW_COLS 명시 헤더명
        const VIEW_COLS = ['__no__'];
        if ((e.col && e.col.link) || VIEW_COLS.includes(colKey)) {
          if (e.ctrlKey || e.metaKey || e.button === 1) { return props.openNewWindow('mbSellerDtl', row.sellerId); }
          return loadView(row.sellerId);
        }
      } else {
        console.warn('[handleGridCellAction] unknown cmd:', cmd);
      }
    };

    const searchParam = reactive({ searchType: '', searchValue: '', sellerTypeCd: '', sellerStatusCd: '', dateRange: '', dateRangeType: '', dateRangeStart: '', dateRangeEnd: '' });
    /* searchParamInit — [초기화] 기준값. initPage 끝에서 그때의 searchParam 을 복사해 둔다.
       리터럴 기본값이 아니라 '화면을 열었을 때의 상태'가 기준이라, initPage 가 채운
       기본 기간 값도 함께 복원된다. (재대입 금지 — Object.assign 으로만 갱신) */
    const searchParamInit = {};

    /* ===== 페이지네이션 ===== */
    const baseGridPager = reactive({ pageType: 'PAGE', pageNo: 1, pageSize: 10, pageTotalCount: 0, pageTotalPage: 1, pageSizes: [5, 10, 20, 30, 50, 100, 200, 500], pageCond: {} });

    /* ===== 상세 인라인 패널 ===== */
    const detailPanel = reactive({   // 인라인 Dtl 패널 상태
      selectedId: '__new__',         // 초기: 신규(빈) 폼. 행 클릭 시 해당 ID 로 전환
      openMode: 'view',              // 'view' | 'edit'
      reloadTrigger: 0,
      resetSeq: 0,                   // 취소 시 ++ → :key 재마운트로 상세 폼 초기화
      active: false,                 // 행 선택/신규 시 true → 저장/취소 노출. 초기/취소 시 false → 버튼 숨김
    });

    /* ##### [04] 내장 사용 함수 (이벤트 핸들러 on* / handle*) ############################ */

    /* getSortParam — 정렬 파라미터 */
    const getSortParam = () => {
      const { sortKey, sortDir } = uiState;
      if (!sortKey || !SORT_MAP[sortKey]) { return {}; }
      return { sort: SORT_MAP[sortKey][sortDir] };
    };

    /* onSort — 정렬 */
    const onSort = (key) => {
      if (uiState.sortKey === key) {
        if (uiState.sortDir === 'asc') { uiState.sortDir = 'desc'; }
        else { uiState.sortKey = ''; uiState.sortDir = 'asc'; }
      } else { uiState.sortKey = key; uiState.sortDir = 'asc'; }
      baseGridPager.pageNo = 1;
      handleSearchList();
    };

    /* handleSearchList — 목록 조회 */
    const handleSearchList = async (searchType = 'DEFAULT') => {
      uiState.loading = true;
      try {
        const params = { pageNo: baseGridPager.pageNo, pageSize: baseGridPager.pageSize, ...getSortParam(), ...coUtil.cofOmitEmpty(searchParam) };
        if (params.searchValue && !params.searchType) {
          params.searchType = 'sellerNm,sellerId';
        }
        const res = await boApiSvc.mbSeller.getPage(params, '판매자관리', '목록조회');
        const data = res.data?.data;
        sellers.splice(0, sellers.length, ...(data?.pageList || []));
        baseGridPager.pageTotalCount = data?.pageTotalCount || sellers.length;
        baseGridPager.pageTotalPage = data?.pageTotalPage || coUtil.cofTotalPage(baseGridPager);
        coUtil.cofBuildPagerNums(baseGridPager);
        Object.assign(baseGridPager.pageCond, data?.pageCond || baseGridPager.pageCond);
        uiState.error = null;
      } catch (err) {
        console.error('[catch-info]', err);
        uiState.error = err.message;
      } finally {
        uiState.loading = false;
      }
    };

    /* onDateRangeChange — 기간 옵션 변경 */
    const onDateRangeChange = () => {
      boUtil.bofApplyDateRange(searchParam);
      baseGridPager.pageNo = 1;
    };

    /* loadView — 인라인 패널 뷰 모드로 열기 */
    const loadView = (id) => { detailPanel.selectedId = id; detailPanel.openMode = 'view'; detailPanel.active = true; detailPanel.reloadTrigger++; };

    /* resetDetailToNew — 상세영역을 빈 신규 폼(비활성)으로 초기화 (영역은 항상 표시 유지)
     *   active=false → 저장/취소 등 버튼 숨김 (행 미선택 안내 상태) */
    const resetDetailToNew = () => {
      detailPanel.selectedId = '__new__';
      detailPanel.openMode = 'view';
      detailPanel.active = false;    // 버튼 숨김
      detailPanel.resetSeq++;        // :key 재마운트 → 폼 초기화
    };

    /* handleLoadDetail — 인라인 패널 편집 모드로 열기 (행 선택 → 저장/취소 노출) */
    const handleLoadDetail = (id) => { detailPanel.selectedId = id; detailPanel.openMode = 'edit'; detailPanel.active = true; detailPanel.reloadTrigger++; };

    /* openNew — 신규 등록 (빈 폼 + 활성 → 저장/취소 노출) */
    const openNew = () => { detailPanel.selectedId = '__new__'; detailPanel.openMode = 'edit'; detailPanel.active = true; detailPanel.resetSeq++; };

    /* closeDetail — 상세 닫기 = 빈 신규 폼(비활성)으로 초기화 (영역 유지) */
    const closeDetail = () => { resetDetailToNew(); };

    /* inlineNavigate — 인라인 Dtl 의 navigate 콜백 */
    const inlineNavigate = (pg, opts = {}) => {
      if (pg === 'mbSellerMng') {
        /* 저장 완료 등: 영역은 유지하고 빈 신규 폼으로 초기화 */
        if (opts.reload) { handleSearchList('RELOAD'); }
        resetDetailToNew();
        return;
      }
      /* 취소: 패널은 그대로 두고 상세영역만 빈 신규 폼으로 초기화 */
      if (pg === '__cancelEdit__') {
        if (detailPanel.selectedId && detailPanel.selectedId !== '__new__') { detailPanel.openMode = 'view'; return; }
        resetDetailToNew(); return;
      }
      if (pg === '__closeDtl__') { resetDetailToNew(); return; }
      if (pg === '__switchToEdit__') { detailPanel.openMode = 'edit'; return; }
      props.navigate(pg, opts);
    };

    /* setPage — 페이지 번호 변경 */
    const setPage = n => { if (n >= 1 && n <= baseGridPager.pageTotalPage) { baseGridPager.pageNo = n; handleSearchList('PAGE_CLICK'); } };

    /* onSizeChange — 페이지 크기 변경 */
    const onSizeChange = () => { baseGridPager.pageNo = 1; handleSearchList('DEFAULT'); };

    /* handleDelete — 삭제 */
    const handleDelete = async (v) => {
      const ok = await showConfirm('삭제', `[${v.sellerNm}] 판매자를 삭제하시겠습니까?`);
      if (!ok) { return; }
      const idx = sellers.findIndex(x => x.sellerId === v.sellerId);
      if (idx !== -1) { sellers.splice(idx, 1); }
      if (detailPanel.selectedId === v.sellerId) { resetDetailToNew(); }
      try {
        const res = await boApiSvc.mbSeller.remove(v.sellerId, '판매자관리', '삭제');
        if (showToast) { showToast('삭제되었습니다.', 'success'); }
      } catch (err) {
        console.error('[catch-info]', err);
        const errMsg = (err.response?.data?.message) || err.message || '오류가 발생했습니다.';
        if (showToast) { showToast(errMsg, 'error', 0); }
      }
    };

    /* ===== 엑셀 다운로드 ===== */
    const excelModal = reactive({ show: false });

    /* buildExcelParams — 엑셀은 현재 검색조건 전체를 그대로 넘긴다(페이지 번호/크기 제외).
       handleSearchList 의 검색조건 조립 로직과 동일하게 맞춰야 화면과 엑셀이 같은 결과를 낸다. */
    const buildExcelParams = () => {
      const p = { ...getSortParam(), ...coUtil.cofOmitEmpty(searchParam) };
      if (p.searchValue && !p.searchType) { p.searchType = 'sellerNm,sellerId'; }
      return p;
    };

    /* fnLoadCodes — 공통코드 로드 */
    const fnLoadCodes = async () => {
      const codeStore = window.sfGetBoCodeStore();
      /* 필요한 코드그룹만 지연 로딩 — 캐시에 있으면 API 가 나가지 않는다 */
      await codeStore.saLoadCodes(['SELLER_TYPE_CD', 'SELLER_STATUS_CD', 'DATE_RANGE_OPT'], {compNm: 'MbSellerMng'});
      codes.seller_type_cd = codeStore.sgGetGrpCodes('SELLER_TYPE_CD');
      codes.seller_status_cd = codeStore.sgGetGrpCodes('SELLER_STATUS_CD');
      codes.date_range_opts = codeStore.sgGetGrpCodes('DATE_RANGE_OPT');
    };

    // ★ onMounted
    /* initPage — 화면 로드 시퀀스.
       코드 응답을 받은 뒤 초기 조회를 시작한다 — 코드 기반 select·라벨·기본값이
       빈 상태로 첫 조회가 나가는 것을 막는다(순서가 코드에 드러나도록 한 곳에 모았다). */
    const initPage = async () => {
      /* 검색조건 초기값 (계산이 필요한 항목) */
      const today = new Date();
      const thisYear = today.getFullYear();
      Object.assign(searchParam, { dateRangeType: 'reg_date', dateRangeStart: `${thisYear - 3}-01-01`, dateRangeEnd: `${thisYear}-12-31` });
      await fnLoadCodes();
      /* 공유된 링크(bo-page shareQuery)로 들어온 경우 URL 쿼리의 검색조건을 복원 */
      const _qs = new URLSearchParams(window.location.search);
      const _reserved = ['page','id','orderId','claimId','embed','dtlMode'];
      Object.keys(searchParam).forEach((k) => { if (!_reserved.includes(k) && _qs.has(k)) searchParam[k] = _qs.get(k); });
      await handleSearchList('DEFAULT');
      Object.assign(searchParamInit, searchParam);   // [초기화] 기준값 스냅샷
    };
    onMounted(initPage);

    /* ##### [05] 사용자 함수 (헬퍼 / 카운트 / 렌더 / 컬럼정의) #################### */

    const cfDetailEditId = computed(() => detailPanel.selectedId === '__new__' ? null : detailPanel.selectedId);

    const cfDetailKey = computed(() => `${detailPanel.selectedId}_${detailPanel.openMode}_${detailPanel.resetSeq}`);

    /* fnTypeLabel — 판매자유형 라벨 */
    const fnTypeLabel = (cd) => (codes.seller_type_cd.find(c => c.codeValue === cd) || {}).codeLabel || cd || '-';

    /* fnTypeBadge — 판매자유형 배지 */
    const fnTypeBadge = (cd) => ({ INDIVIDUAL: 'badge-blue', COMPANY: 'badge-purple' }[cd] || 'badge-gray');

    /* fnStatusLabel — 판매자상태 라벨 */
    const fnStatusLabel = (cd) => (codes.seller_status_cd.find(c => c.codeValue === cd) || {}).codeLabel || cd || '-';

    /* fnStatusBadge — 판매자상태 배지 */
    const fnStatusBadge = (cd) => ({ PENDING: 'badge-orange', ACTIVE: 'badge-green', SUSPENDED: 'badge-red' }[cd] || 'badge-gray');

    /* fnRowStyle — 행 스타일 */
    const fnRowStyle = (v) => detailPanel.selectedId === v.sellerId ? 'background:#fff8f9;' : '';

    // 기본 검색
    const columns = {};
    columns.baseSearch = [
      { key: 'searchType', type: 'multiCheck', label: '검색대상',
        options: [
          { value: 'sellerNm', label: '판매자명' },
          { value: 'sellerId', label: '판매자ID' },
        ],
        placeholder: '검색대상 전체', allLabel: '전체 선택', minWidth: '160px' },
      { key: 'searchValue', type: 'text', label: '검색어', placeholder: '검색어 입력' },
      { key: 'sellerTypeCd', type: 'select', label: '유형', options: () => codes.seller_type_cd, nullLabel: '유형 전체' },
      { key: 'sellerStatusCd', type: 'select', label: '상태', options: () => codes.seller_status_cd, nullLabel: '상태 전체' },
      { key: 'dateRange', type: 'dateRange', label: '등록일',
        startKey: 'dateRangeStart', endKey: 'dateRangeEnd',
        rangeOptions: () => codes.date_range_opts,
        onRangeChange: () => handleBtnAction('searchParam-dateRange') },
    ];

    // 기본 그리드
    columns.baseGrid = [
      { key: 'sellerId',        label: 'ID' },
      { key: 'sellerNm',      label: '판매자명', sortKey: 'nm', link: true,
        cellInnerStyle: (v) => detailPanel.selectedId === v ? 'color:#e8587a;font-weight:700;' : '' },
      { key: 'sellerTypeCd',    label: '유형', badge: (row) => fnTypeBadge(row.sellerTypeCd), fmt: (v) => fnTypeLabel(v) },
      { key: 'sellerStatusCd', label: '상태', badge: (row) => fnStatusBadge(row.sellerStatusCd), fmt: (v) => fnStatusLabel(v) },
      { key: 'vendorNm',      label: '연결업체' },
      { key: 'settleBankNm',  label: '정산은행' },
      { key: 'regDate',       label: '등록일', sortKey: 'reg', fmt: (v) => coUtil.cofYmd(v) || '-' },
    ];

    /* ##### [06] return (템플릿 노출) ############################################## */

    return {
      excelModal, buildExcelParams,                       // 엑셀 다운로드
      columns,
      sellers, uiState, searchParam, baseGridPager, detailPanel,       // 상태 / 데이터
      handleBtnAction, handleSelectAction, handleGridCellAction,                      // dispatch (모든 이벤트 / 액션 라우팅)
      cfDetailEditId, cfDetailKey,              // computed
      fnRowStyle, // 헬퍼
      inlineNavigate, showToast, showConfirm, // Dtl 콜백 (closure 필요)
    };
  },
  template: /* html */`
<bo-page title="판매자관리" :share-query="searchParam">
  <!-- ===== ■. 검색 영역 =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== ■. 목록 그리드 ================================================== -->
  <bo-container title="판매자목록" :count-text="baseGridPager.pageTotalCount + '건'">
    <template #toolbar-actions>
      <div style="display:flex;gap:6px;">
        <button class="btn btn_excel" @click="excelModal.show = true">엑셀</button>
        <button class="btn btn_new" title="Ctrl+클릭/휠클릭: 새창"
          @click="handleBtnAction('sellers-add', $event)"
          @auxclick="handleBtnAction('sellers-add', $event)">
          + 신규
        </button>
      </div>
    </template>
    <bo-grid bare max-height="calc(100vh - 320px)"
      :columns="columns.baseGrid" :rows="sellers" row-key="sellerId" :selected-key="detailPanel.selectedId"
      :sort-state="uiState" :row-style="fnRowStyle"
      @sort="key => handleBtnAction('sellers-sort', key)"
      grid-id="sellers-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
          table-max-height="540px">
      <template #head-actions>
        관리
      </template>
      <template #row-actions="{ row, gridId, pinStyle }">
        <td :style="'white-space:nowrap;' + pinStyle">
          <div class="actions" style="white-space:nowrap;flex-wrap:nowrap;">
            <button class="btn btn_row_edit"
              @click.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)"
              @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)">
              수정
            </button>
            <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', row)">
              삭제
            </button>
          </div>
        </td>
      </template>
    </bo-grid>
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('sellers-pager-setPage', n)" :on-size-change="() => handleSelectAction('sellers-pager-sizeChange')" />
  </bo-container>
  <!-- ===== ■. 상세 패널 (항상 표시) ====================== -->
  <mb-seller-dtl :key="cfDetailKey" :navigate="inlineNavigate" :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
  />
  <!-- ===== ■. 엑셀 다운로드 모달 (즉시/예약 + 진행중 안내 + 강제취소) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="mbSeller"
    area-nm="판매자관리" :columns="columns.baseGrid" ui-nm="판매자관리" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`,
};
