/* ShopJoy Admin - 판매자창고관리 (mb_seller_warehouse) */
window.MbSellerWarehouseMng = {
  name: 'MbSellerWarehouseMng',
  props: {
    navigate:     { type: Function, required: true }, // 페이지 이동
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { ref, reactive, computed, watch, onMounted } = Vue;
    const showToast    = window.boApp.showToast;   // 토스트 알림
    const showConfirm  = window.boApp.showConfirm; // 확인 모달

    const warehouses = reactive([]);                // 판매자창고 목록 (메인 그리드 데이터)
    const uiState = reactive({                      // UI 상태
      loading: false, error: null, sortKey: '', sortDir: 'asc',
      formMode: '', dtlMode: 'view',                 // formMode: ''|'new'|'edit' — 인라인 폼 상태. dtlMode: 'view'|'edit'
      showSellerModal: false, showAddrModal: false,  // 판매자선택 / 주소검색 모달
    });
    const cfDtlMode = computed(() => uiState.dtlMode === 'view');
    const codes = reactive({ BOOL_YN: [], date_range_opts: [] });
    const SORT_MAP = { nm: { asc: 'warehouseNm asc', desc: 'warehouseNm desc' }, reg: { asc: 'regDate asc', desc: 'regDate desc' } };
    const addrDetailRef = ref(null);                 // 상세주소 input ref

    /* ===== 검색조건 ===== */
    const searchParam = reactive({
      searchType: '', searchValue: '', sellerId: '', sellerNm: '', useYn: '',
      dateRange: '', dateRangeType: '', dateRangeStart: '', dateRangeEnd: '',
    });
    /* searchParamInit — [초기화] 기준값. initPage 끝에서 그때의 searchParam 을 복사해 둔다. */
    const searchParamInit = {};

    /* ===== 페이지네이션 ===== */
    const gridPager = reactive({ pageType: 'PAGE', pageNo: 1, pageSize: 10, pageTotalCount: 0, pageTotalPage: 1, pageSizes: [5, 10, 20, 30, 50, 100, 200, 500], pageCond: {} });

    /* -- 인라인 폼 (창고 등록/수정) -- */
    const formData = reactive({});
    const errors   = reactive({}); // 저장 검증 오류 (항목 아래 빨간 라벨)

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    /* handleBtnAction — 버튼 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ MbSellerWarehouseMng.js : handleBtnAction -> ', cmd, param);
      // 검색조건으로 목록 조회
      if (cmd === 'searchParam-list') {
        gridPager.pageNo = 1;
        return handleSearchList('DEFAULT');
      // 검색조건 초기화 + 재조회
      } else if (cmd === 'searchParam-reset') {
        Object.assign(searchParam, searchParamInit);
        uiState.sortKey = ''; uiState.sortDir = 'asc';
        gridPager.pageNo = 1;
        return handleSearchList('DEFAULT');
      // 기간 옵션 변경
      } else if (cmd === 'searchParam-dateRange') {
        return onDateRangeChange();
      // 검색조건 판매자 선택 모달 열기 / 해제
      } else if (cmd === 'sellerFilterModal-open') {
        uiState.showSellerModal = 'filter';
        return;
      } else if (cmd === 'sellerFilterModal-clear') {
        searchParam.sellerId = ''; searchParam.sellerNm = '';
        return;
      // 창고 신규 등록
      } else if (cmd === 'warehouses-add') {
        return openNew();
      // 목록 재조회
      } else if (cmd === 'warehouses-reload') {
        return handleSearchList('RELOAD');
      // 인라인 폼: 저장
      } else if (cmd === 'warehouses-save') {
        return handleSaveForm();
      // 인라인 폼: 닫기/취소
      } else if (cmd === 'warehouses-close') {
        return closeForm();
      // 인라인 폼: 보기모드 → 수정모드 전환
      } else if (cmd === 'warehouses-edit') {
        return switchToEdit();
      // 인라인 폼: 수정 취소 (보기모드 복귀 또는 닫기)
      } else if (cmd === 'warehouses-cancel') {
        return handleCancelEdit();
      // 인라인 폼: 보기모드에서 바로 삭제
      } else if (cmd === 'warehouses-delete') {
        return handleDeleteRow(formData);
      // 인라인 폼: 판매자 선택 모달 열기 / 해제
      } else if (cmd === 'sellerFormModal-open') {
        uiState.showSellerModal = 'form';
        return;
      } else if (cmd === 'seller-clear') {
        formData.sellerId = null; formData.sellerNm = '';
        return;
      // 인라인 폼: 주소 검색 모달 열기 / 초기화
      } else if (cmd === 'addr-search') {
        uiState.showAddrModal = true;
        return;
      } else if (cmd === 'addr-clear') {
        formData.zipCode = ''; formData.addr = '';
        return;
      // 그리드 정렬 헤더 클릭
      } else if (cmd === 'warehouses-sort') {
        return onSort(param);
      // 페이지 번호 클릭
      } else if (cmd === 'warehouses-pager-setPage') {
        return setPage(param);
      } else {
        console.warn('[handleBtnAction] unknown cmd:', cmd);
      }
    };

    /* handleSelectAction — 그리드 행/노드/모달 선택 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleSelectAction = (cmd, param = {}) => {
      console.log(' ■■ MbSellerWarehouseMng.js : handleSelectAction -> ', cmd, param);
      // 페이지 크기 변경
      if (cmd === 'warehouses-pager-sizeChange') {
        return onSizeChange();
      // 그리드 행 삭제
      } else if (cmd === 'warehouses-rowDelete') {
        return handleDeleteRow(param);
      } else {
        console.warn('[handleSelectAction] unknown cmd:', cmd);
      }
    };

    /* handleGridCellAction — 그리드 셀 클릭 dispatch. cmd='{영역}-cellClick', e={row,col,colKey,colIndex,rowIndex}. */
    const handleGridCellAction = (cmd, colKey, row, e = {}) => {
      console.log(' ■■ MbSellerWarehouseMng.js : handleGridCellAction -> ', cmd, colKey, row);
      if (cmd === 'warehouses-cellClick') {
        // 행 액션 버튼 (colKey='btn_*') — [수정]/[삭제] 등
        if (colKey === 'btn_row_edit') { return openEdit(row); }
        if (colKey === 'btn_row_delete') { return handleDeleteRow(row); }
        // 보기모드 트리거 컬럼: 제목(link) 셀 + 행번호(__no__)
        const VIEW_COLS = ['__no__'];
        if ((e.col && e.col.link) || VIEW_COLS.includes(colKey)) {
          return loadView(row);
        }
      } else {
        console.warn('[handleGridCellAction] unknown cmd:', cmd);
      }
    };

    /* fnCallbackModal — 모달 콜백 통합 dispatch. cmd=모달명, param=호출 파라미터, result=응답 결과 (null=닫기) */
    const fnCallbackModal = (popCmd, param, result) => {
      console.log(' ■■ MbSellerWarehouseMng : fnCallbackModal -> ', popCmd, param, result);
      if (popCmd === 'cmPopup-seller-pick') {
        const target = uiState.showSellerModal;   // 'filter' | 'form'
        uiState.showSellerModal = false;
        if (result == null) { return; }
        if (target === 'filter') {
          searchParam.sellerId = result.selId;
          searchParam.sellerNm = result.selName;
        } else {
          formData.sellerId = result.selId;
          formData.sellerNm = result.selName;
        }
        return;
      } else if (popCmd === 'addr-search') {
        uiState.showAddrModal = false;
        if (result == null) { return; }
        formData.zipCode = result.zonecode;
        formData.addr = result.address;
        if (addrDetailRef.value) { addrDetailRef.value.focus(); }
        return;
      } else {
        console.warn('[fnCallbackModal] unknown popCmd:', popCmd);
      }
    };

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
      gridPager.pageNo = 1;
      handleSearchList();
    };

    /* handleSearchList — 목록 조회 */
    const handleSearchList = async (searchType = 'DEFAULT') => {
      uiState.loading = true;
      try {
        const params = { pageNo: gridPager.pageNo, pageSize: gridPager.pageSize, ...getSortParam(), ...coUtil.cofOmitEmpty(searchParam) };
        if (params.searchValue && !params.searchType) {
          params.searchType = 'warehouseNm,sellerNm,contactNm';
        }
        const res = await boApiSvc.mbSellerWarehouse.getPage(params, '판매자창고관리', '목록조회');
        const data = res.data?.data;
        warehouses.splice(0, warehouses.length, ...(data?.pageList || []));
        gridPager.pageTotalCount = data?.pageTotalCount || warehouses.length;
        gridPager.pageTotalPage = data?.pageTotalPage || coUtil.cofTotalPage(gridPager);
        coUtil.cofBuildPagerNums(gridPager);
        Object.assign(gridPager.pageCond, data?.pageCond || gridPager.pageCond);
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
      gridPager.pageNo = 1;
    };

    /* setPage — 페이지 번호 변경 */
    const setPage = n => { if (n >= 1 && n <= gridPager.pageTotalPage) { gridPager.pageNo = n; handleSearchList('PAGE_CLICK'); } };

    /* onSizeChange — 페이지 크기 변경 */
    const onSizeChange = () => { gridPager.pageNo = 1; handleSearchList('DEFAULT'); };

    /* fnLoadCodes — 공통코드 로드 */
    const fnLoadCodes = async () => {
      const codeStore = window.sfGetBoCodeStore();
      /* 필요한 코드그룹만 지연 로딩 — 캐시에 있으면 API 가 나가지 않는다 */
      await codeStore.saLoadCodes(['BOOL_YN', 'DATE_RANGE_OPT'], {compNm: 'MbSellerWarehouseMng'});
      codes.BOOL_YN = codeStore.sgGetGrpCodes('BOOL_YN');
      codes.date_range_opts = codeStore.sgGetGrpCodes('DATE_RANGE_OPT');
    };

    // ★ onMounted
    /* initPage — 화면 로드 시퀀스.
       코드 응답을 받은 뒤 초기 조회를 시작한다 — 코드 기반 select·라벨·기본값이
       빈 상태로 첫 조회가 나가는 것을 막는다(순서가 코드에 드러나도록 한 곳에 모았다). */
    const initPage = async () => {
      await fnLoadCodes();
      const _qs = new URLSearchParams(window.location.search);
      const _reserved = ['page','id','orderId','claimId','embed','dtlMode'];
      Object.keys(searchParam).forEach((k) => { if (!_reserved.includes(k) && _qs.has(k)) searchParam[k] = _qs.get(k); });
      await handleSearchList('DEFAULT');
      Object.assign(searchParamInit, searchParam);   // [초기화] 기준값 스냅샷
      Object.assign(formData, blank());              // 상세영역 항상 표시: 진입 시 빈 폼 (formMode='' → 버튼 숨김)
    };
    onMounted(initPage);

    /* blank — 빈 폼 데이터 생성 */
    const blank = () => ({
      warehouseId: null, sellerId: null, sellerNm: '',
      warehouseNm: '', zipCode: '', addr: '', addrDetail: '',
      contactNm: '', contactPhone: '',
      isDefault: 'N', isReturnAddr: 'N', useYn: 'Y',
    });

    /* resetFormToNew — 폼을 빈 신규 폼(비활성)으로 초기화 (영역은 항상 표시 유지)
     *   formMode='' → 저장/취소 등 버튼 숨김 (행 미선택 안내 상태) */
    const resetFormToNew = () => {
      Object.assign(formData, blank());
      uiState.formMode = '';     // 버튼 숨김 (비활성)
      uiState.dtlMode = 'view';
      Object.keys(errors).forEach(k => delete errors[k]);
    };

    /* openNew — 신규 열기 (빈 폼 + 활성, 항상 수정모드로 시작 → 저장/취소 노출) */
    const openNew = () => {
      Object.assign(formData, blank());
      uiState.formMode = 'new';  // 신규 입력 가능 → 저장/취소 노출
      uiState.dtlMode = 'edit';
      Object.keys(errors).forEach(k => delete errors[k]);
    };

    /* _loadDetailForm — 인라인 폼에 행 데이터 적재 (view/edit 공용) */
    const _loadDetailForm = (w, mode) => {
      Object.assign(formData, blank(), w);
      uiState.formMode = 'edit';
      uiState.dtlMode = mode;
      Object.keys(errors).forEach(k => delete errors[k]);
    };

    /* loadView — 보기모드로 인라인 폼 열기 (행 클릭) */
    const loadView = (w) => _loadDetailForm(w, 'view');

    /* openEdit — 수정모드로 인라인 폼 열기 ([수정] 버튼) */
    const openEdit = (w) => _loadDetailForm(w, 'edit');

    /* switchToEdit — 보기모드 → 수정모드 전환 (상세 패널 상단 [수정] 버튼) */
    const switchToEdit = () => { uiState.dtlMode = 'edit'; };

    /* closeForm — 닫기/취소 = 빈 신규 폼(비활성)으로 초기화 (영역 유지) */
    const closeForm = () => { resetFormToNew(); };

    /* handleCancelEdit — 수정 취소: 신규 등록 중이면 패널 닫기, 기존 행 수정 중이면 원본 재적재 후 보기모드 복귀 */
    const handleCancelEdit = () => {
      if (uiState.formMode === 'new') { return closeForm(); }
      const row = warehouses.find(w => w.warehouseId === formData.warehouseId);
      return row ? loadView(row) : closeForm();
    };

    /* handleSaveForm — 저장 */
    const handleSaveForm = async () => {
      Object.keys(errors).forEach(k => delete errors[k]);
      if (!formData.sellerId) { errors.sellerId = '판매자를 선택해주세요.'; }
      if (!formData.warehouseNm) { errors.warehouseNm = '창고명을 입력해주세요.'; }
      if (Object.keys(errors).length) { coUtil.cofValidationToast(errors, showToast); return; }
      const isNew = uiState.formMode === 'new';
      const ok = await showConfirm(isNew?'등록':'저장', isNew?'등록하시겠습니까?':'저장하시겠습니까?');
      if (!ok) { return; }
      try {
        const res = isNew
          ? await boApiSvc.mbSellerWarehouse.create({ ...formData }, '판매자창고관리', '등록')
          : await boApiSvc.mbSellerWarehouse.update(formData.warehouseId, { ...formData }, '판매자창고관리', '저장');
        showToast(isNew?'등록되었습니다.':'저장되었습니다.', 'success');
        await handleSearchList('RELOAD');
        if (isNew) {
          closeForm();
        } else {
          const saved = res.data?.data;
          if (saved) { Object.assign(formData, saved); }
          uiState.formMode = 'edit';
          uiState.dtlMode = 'view';
        }
      } catch(err) {
        console.error('[catch-info]', err);
        const errMsg = (err.response?.data?.message) || err.message || '오류가 발생했습니다.';
        showToast(errMsg, 'error', 0);
      }
    };

    /* handleDeleteRow — 삭제 */
    const handleDeleteRow = async (w) => {
      const ok = await showConfirm('삭제', `[${w.warehouseNm}] 창고를 삭제하시겠습니까?`);
      if (!ok) { return; }
      try {
        await boApiSvc.mbSellerWarehouse.remove(w.warehouseId, '판매자창고관리', '삭제');
        showToast('삭제되었습니다.', 'success');
        await handleSearchList('RELOAD');
        if (formData.warehouseId === w.warehouseId) { closeForm(); }
      } catch(err) {
        console.error('[catch-info]', err);
        const errMsg = (err.response?.data?.message) || err.message || '오류가 발생했습니다.';
        showToast(errMsg, 'error', 0);
      }
    };

    /* ##### [05] 사용자 함수 (헬퍼 / 카운트 / 렌더 / 컬럼정의) #################### */

    /* fnYnLabel — Y/N 코드 라벨 */
    const fnYnLabel = (cd) => (codes.BOOL_YN.find(c => c.codeValue === cd) || {}).codeLabel || cd || '-';

    /* fnYnBadge — Y/N 배지 */
    const fnYnBadge = (cd) => cd === 'Y' ? 'badge-green' : 'badge-gray';

    /* fnRowStyle — 행 스타일 */
    const fnRowStyle = (w) => formData.warehouseId === w.warehouseId ? 'background:#fff8f9;' : '';

    /* fnSellerPickDisplay — 판매자 pick 필드 표시값 */
    const fnSellerPickDisplay = (p) => p.sellerNm || '';

    // 기본 검색
    const columns = {};
    columns.baseSearch = [
      { key: 'searchType', type: 'multiCheck', label: '검색대상',
        options: [
          { value: 'warehouseNm', label: '창고명' },
          { value: 'sellerNm', label: '판매자명' },
          { value: 'contactNm', label: '담당자명' },
        ],
        placeholder: '검색대상 전체', allLabel: '전체 선택', minWidth: '160px' },
      { key: 'searchValue', type: 'text', label: '검색어', placeholder: '검색어 입력' },
      { key: 'sellerId', type: 'pick', label: '판매자', nameKey: 'sellerNm',
        display: (p) => p.sellerNm || p.sellerId, placeholder: '판매자 선택',
        onOpen: () => handleBtnAction('sellerFilterModal-open'),
        onClear: () => handleBtnAction('sellerFilterModal-clear') },
      { key: 'useYn', type: 'select', label: '사용여부', options: () => codes.BOOL_YN, nullLabel: '사용여부 전체' },
      { key: 'dateRange', type: 'dateRange', label: '등록일',
        startKey: 'dateRangeStart', endKey: 'dateRangeEnd',
        rangeOptions: () => codes.date_range_opts,
        onRangeChange: () => handleBtnAction('searchParam-dateRange') },
    ];

    // 기본 그리드
    columns.baseGrid = [
      { key: 'sellerNm',      label: '판매자', },
      { key: 'warehouseNm',   label: '창고명', sortKey: 'nm', link: true,
        cellInnerStyle: (v, row) => formData.warehouseId === row.warehouseId ? 'color:#e8587a;font-weight:700;' : '' },
      { key: 'zipCode',       label: '우편번호' },
      { key: 'addr',          label: '주소', fmt: (v, row) => [row.addr, row.addrDetail].filter(Boolean).join(' ') || '-' },
      { key: 'contactNm',     label: '담당자' },
      { key: 'contactPhone',  label: '연락처' },
      { key: 'isDefault',     label: '기본배송지', align: 'center', badge: (row) => fnYnBadge(row.isDefault), fmt: (v) => fnYnLabel(v) },
      { key: 'isReturnAddr',  label: '반품지', align: 'center', badge: (row) => fnYnBadge(row.isReturnAddr), fmt: (v) => fnYnLabel(v) },
      { key: 'useYn',         label: '사용', align: 'center', badge: (row) => fnYnBadge(row.useYn), fmt: (v) => fnYnLabel(v) },
      { key: 'regDate',       label: '등록일', sortKey: 'reg', fmt: (v) => coUtil.cofYmd(v) || '-' },
    ];

    // 창고 폼
    columns.baseForm = [
      { type: 'group', label: '판매자·창고정보' },
      { key: 'sellerId',      label: '판매자', type: 'pick', required: true, placeholder: '판매자 선택', colSpan: 2,
        display: (f) => fnSellerPickDisplay(f),
        onOpen: () => handleBtnAction('sellerFormModal-open'),
        onClear: () => handleBtnAction('seller-clear') },
      { key: 'warehouseNm',   label: '창고명', type: 'text', required: true, placeholder: '창고명' },
      { key: '_addr',         label: '주소', type: 'slot', name: 'addr', colSpan: 3 },
      { type: 'group', label: '담당자 · 옵션' },
      { key: 'contactNm',     label: '담당자명', type: 'text', placeholder: '담당자명' },
      { key: 'contactPhone',  label: '연락처', type: 'text', placeholder: '연락처' },
      { key: 'useYn',         label: '사용여부', type: 'select', nullable: false, options: () => codes.BOOL_YN },
      { key: 'isDefault',     label: '기본배송지', type: 'select', nullable: false, options: () => codes.BOOL_YN },
      { key: 'isReturnAddr',  label: '반품지', type: 'select', nullable: false, options: () => codes.BOOL_YN },
    ];

    /* ##### [06] return (템플릿 노출) ############################################## */

    return {
      columns,
      warehouses, uiState, cfDtlMode, searchParam, gridPager, formData, errors, addrDetailRef,   // 상태 / 데이터
      handleBtnAction, handleSelectAction, handleGridCellAction, fnCallbackModal,                 // dispatch (모든 이벤트 / 액션 라우팅)
      fnRowStyle, // 헬퍼
    };
  },
  template: /* html */`
<bo-page title="판매자창고관리" :share-query="searchParam">
  <!-- ===== ■. 검색 영역 =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== ■. 목록 그리드 ================================================== -->
  <bo-container title="판매자창고목록" :count-text="gridPager.pageTotalCount + '건'">
    <template #toolbar-actions>
      <button class="btn btn_new" @click="handleBtnAction('warehouses-add')">
        + 신규등록
      </button>
    </template>
    <bo-grid bare max-height="calc(100vh - 420px)"
      :columns="columns.baseGrid" :rows="warehouses" row-key="warehouseId" :selected-key="formData.warehouseId"
      :sort-state="uiState" :row-style="fnRowStyle"
      grid-id="warehouses-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
          table-max-height="480px">
      <template #head-actions>
        관리
      </template>
      <template #row-actions="{ row, gridId, pinStyle }">
        <td :style="'white-space:nowrap;' + pinStyle">
          <div class="actions" style="white-space:nowrap;flex-wrap:nowrap;">
            <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', row)">
              수정
            </button>
            <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', row)">
              삭제
            </button>
          </div>
        </td>
      </template>
    </bo-grid>
    <bo-pager :pager="gridPager" :on-set-page="n => handleBtnAction('warehouses-pager-setPage', n)" :on-size-change="() => handleSelectAction('warehouses-pager-sizeChange')" />
  </bo-container>
  <!-- ===== ■. 인라인 폼 (항상 표시 — 미선택 시 빈 폼 + 버튼 숨김 + 안내) ============ -->
  <bo-container :title="uiState.formMode==='new' ? '창고 등록' : (uiState.formMode==='edit' ? (cfDtlMode ? '창고 상세' : '창고 수정') : '창고 상세')"
    :title-id="uiState.formMode==='edit' ? formData.warehouseId : ''">
    <template #toolbar-actions>
      <div v-if="uiState.formMode" style="display:flex;gap:6px;flex-wrap:wrap;">
        <template v-if="cfDtlMode">
          <button class="btn btn_edit" @click="handleBtnAction('warehouses-edit')">수정</button>
          <button class="btn btn_row_delete" @click="handleBtnAction('warehouses-delete')">삭제</button>
          <button class="btn btn_close" @click="handleBtnAction('warehouses-close')">닫기</button>
        </template>
        <template v-else>
          <button class="btn btn_cancel" @click="handleBtnAction('warehouses-cancel')">취소</button>
          <button class="btn btn_save" @click="handleBtnAction('warehouses-save')">저장</button>
        </template>
      </div>
    </template>
    <!-- ===== ■.■. 폼 영역 ================================================== -->
    <bo-form-area plain-readonly :columns="columns.baseForm" :form="formData" :errors="errors"
      :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
      <!-- ===== ■.■.■. 주소: 우편번호+검색버튼+기본주소+상세주소 ============================= -->
      <template #addr>
        <div v-if="cfDtlMode" class="readonly-field-plain">
          {{ [formData.zipCode, formData.addr, formData.addrDetail].filter(Boolean).join(' ') || '-' }}
        </div>
        <template v-else>
          <div style="display:flex;gap:8px;align-items:flex-end;margin-bottom:6px;">
            <input class="form-control" v-model="formData.zipCode" placeholder="우편번호"
              style="width:110px;flex-shrink:0;" readonly />
            <button type="button" class="btn btn-blue btn-sm" @click="handleBtnAction('addr-search')"
              style="white-space:nowrap;">
              🔍 주소 검색
            </button>
            <button v-if="formData.zipCode || formData.addr" type="button" title="주소 초기화"
              @click="handleBtnAction('addr-clear')"
              style="background:none;border:none;padding:0 2px 2px;margin-left:-4px;color:#999;cursor:pointer;font-size:13px;line-height:1;flex-shrink:0;">
              x
            </button>
          </div>
          <input class="form-control" v-model="formData.addr" placeholder="기본주소 (주소 검색 후 자동 입력)"
            style="margin-bottom:6px;" readonly />
          <input class="form-control" v-model="formData.addrDetail" ref="addrDetailRef"
            placeholder="상세주소 (동/호수 등)" />
        </template>
      </template>
    </bo-form-area>
    <!-- ===== □.□. 폼 영역 ================================================== -->
  </bo-container>
  <!-- ===== □. 인라인 폼 =================================================== -->
  <!-- ===== ■. 판매자 선택 모달 (검색조건 / 인라인폼 공용 — uiState.showSellerModal 로 대상 구분) ==== -->
  <bo-cm-popup-modal popup-cmd="cmPopup-seller-pick" popup-code="seller" :show="!!uiState.showSellerModal" :on-callback="fnCallbackModal" />
  <!-- ===== ■. 주소 검색 모달 (카카오 우편번호, 인라인 레이어) ============================ -->
  <bo-addr-search-modal v-if="uiState.showAddrModal" modal-name="addr-search" :on-callback="fnCallbackModal" />
</bo-page>
`,
};
