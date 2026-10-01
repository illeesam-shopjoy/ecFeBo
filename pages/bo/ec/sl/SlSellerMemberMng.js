/* ShopJoy Admin - 판매자 소속계정 (sl_seller_member) */
window.SlSellerMemberMng = {
  name: 'SlSellerMemberMng',
  props: {
    navigate:     { type: Function, required: true }, // 페이지 이동
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { ref, reactive, computed, watch, onMounted } = Vue;
    const showToast    = window.boApp.showToast;  // 토스트 알림
    const showConfirm  = window.boApp.showConfirm;  // 확인 모달

    const sellerMembers = reactive([]);
    const uiState = reactive({ loading: false, error: null, searchSellerId: null,
      bizSearchType: '', bizSearchValue: '', bizTypeFlt: '', formMode: '', dtlMode: 'view' }); // dtlMode: 'view'|'edit' — 기본은 항상 view
    const cfDtlMode = computed(() => uiState.dtlMode === 'view');
    /* roleCd(OWNER/STAFF)·statusCd(ACTIVE/REMOVED) — sl_seller_member 전용 코드로, 신설
       sy_code 그룹이 아니라서(과제 지시 대상은 SELLER_TYPE_CD/SELLER_STATUS_CD 뿐) 로컬 하드코딩한다.
       BOOL_YN(Y/N) 만 공통코드에서 로드한다(isMain/isDefault). */
    const codes = reactive({
      BOOL_YN: [],
      role_cd: [['OWNER','대표'],['STAFF','직원']],
      member_status: [['ACTIVE','활성'],['REMOVED','제외']],
    });

    const sellers = reactive([]);
    const sellerGridPager = reactive({ pageType: 'PAGE', pageNo: 1, pageSize: 5, pageTotalCount: 0, pageTotalPage: 1, pageSizes: [5, 10, 20, 30, 50, 100, 200, 500], pageCond: {} });
    const memberGridPager = reactive({ pageType: 'PAGE', pageNo: 1, pageSize: 10, pageTotalCount: 0, pageTotalPage: 1, pageSizes: [5, 10, 20, 30, 50, 100, 200, 500], pageCond: {} });

    /* -- 인라인 폼 (소속계정 등록/수정) -- */
    const formData = reactive({});
    const errors   = reactive({}); // 저장 검증 오류 (항목 아래 빨간 라벨)

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    /* handleBtnAction — 버튼 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ SlSellerMemberMng.js : handleBtnAction -> ', cmd, param);
      // 판매자 검색조건으로 목록 조회
      if (cmd === 'searchParam-list') {
        return onSearch();
      // 검색조건 초기화
      } else if (cmd === 'searchParam-reset') {
        return onReset();
      // 소속계정 인라인 폼: 신규 등록
      } else if (cmd === 'sellerMembers-add') {
        return openNew();
      // 소속계정 인라인 폼: 저장
      } else if (cmd === 'sellerMembers-save') {
        return handleSaveForm();
      // 소속계정 인라인 폼: 닫기/취소
      } else if (cmd === 'sellerMembers-close') {
        return closeForm();
      // 소속계정 인라인 폼: 보기모드 → 수정모드 전환
      } else if (cmd === 'sellerMembers-edit') {
        return switchToEdit();
      // 소속계정 인라인 폼: 수정 취소 (보기모드 복귀 또는 닫기)
      } else if (cmd === 'sellerMembers-cancel') {
        return handleCancelEdit();
      // 판매자 그리드 페이지 번호 클릭
      } else if (cmd === 'sellers-pager-setPage') {
        return setBizPage(param);
      // 소속계정 그리드 페이지 번호 클릭
      } else if (cmd === 'sellerMembers-pager-setPage') {
        return setPage(param);
      } else {
        console.warn('[handleBtnAction] unknown cmd:', cmd);
      }
    };

    /* handleSelectAction — 그리드 행/노드/모달 선택 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleSelectAction = (cmd, param = {}) => {
      console.log(' ■■ SlSellerMemberMng.js : handleSelectAction -> ', cmd, param);
      // 판매자 그리드 [선택] 버튼 클릭 → 선택 판매자 변경
      if (cmd === 'sellers-rowSelect') {
        return pickSellerRow(param);
      // 판매자 그리드 페이지 크기 변경
      } else if (cmd === 'sellers-pager-sizeChange') {
        sellerGridPager.pageNo = 1; return handleLoadSellers();
      // 소속계정 그리드 행 삭제
      } else if (cmd === 'sellerMembers-rowDelete') {
        return handleDeleteRow(param);
      // 소속계정 그리드 페이지 크기 변경
      } else if (cmd === 'sellerMembers-pager-sizeChange') {
        return onSizeChange();
      } else {
        console.warn('[handleSelectAction] unknown cmd:', cmd);
      }
    };

    /* handleGridCellAction — 그리드 셀 클릭 라우터. colKey 기준 분기 (판매자 선택 / 소속계정 수정) */
    const handleGridCellAction = (cmd, colKey, row, e = {}) => {
      console.log(' ■■ SlSellerMemberMng.js : handleGridCellAction -> ', cmd, colKey, row);
      if (cmd === 'sellers-cellClick') {
        // 판매자 선택 — 행 아무 셀이나 클릭 시 선택
        return pickSellerRow(row);
      } else if (cmd === 'sellerMembers-cellClick') {
        // 행 수정 버튼 → 상세/수정 패널 열기
        if (colKey === 'btn_row_edit') {
          return openEdit(row);
        }
        // 보기모드 트리거 컬럼: 행번호(__no__)
        const VIEW_COLS = ['__no__'];
        if ((e.col && e.col.link) || VIEW_COLS.includes(colKey)) {
          return loadView(row);
        }
      } else {
        console.warn('[handleGridCellAction] unknown cmd:', cmd);
      }
    };

    /* ##### [04] 내장 사용 함수 (이벤트 핸들러 on* / handle*) #################### */

    /* handleLoadSellers — 판매자 목록 조회 (서버사이드 페이징) */
    const handleLoadSellers = async () => {
      uiState.loading = true;
      try {
        const params = {
          pageNo: sellerGridPager.pageNo, pageSize: sellerGridPager.pageSize,
          ...coUtil.cofOmitEmpty({
            searchValue: (uiState.bizSearchValue || '').trim(),
            searchType:  uiState.bizSearchType,
            sellerTypeCd: uiState.bizTypeFlt,
          }),
        };
        if (params.searchValue && !params.searchType) {
          params.searchType = 'sellerNm,sellerId';
        }
        const res = await boApiSvc.slSeller.getPage(params, '판매자소속계정관리', '조회');
        const d = res.data?.data || {};
        sellers.splice(0, sellers.length, ...(d.pageList || d.list || []));
        sellerGridPager.pageTotalCount = d.pageTotalCount || 0;
        sellerGridPager.pageTotalPage  = d.pageTotalPage  || 1;
        coUtil.cofBuildPagerNums(sellerGridPager);
      } catch(e) {
        console.error('[SlSellerMemberMng] seller load failed', e);
      } finally {
        uiState.loading = false;
      }
    };

    /* fnLoadCodes — 공통코드 로드 */
    const fnLoadCodes = async () => {
      const codeStore = window.sfGetBoCodeStore();
      /* 필요한 코드그룹만 지연 로딩 — 캐시에 있으면 API 가 나가지 않는다 */
      await codeStore.saLoadCodes(['BOOL_YN'], {compNm: 'SlSellerMemberMng'});
      codes.BOOL_YN = codeStore.sgGetGrpCodes('BOOL_YN');
    };

    // ★ onMounted — 진입 시 코드 로드 + 목록 초기 조회 + 상세영역 빈 신규 폼(비활성)
    /* initPage — 화면 로드 시퀀스.
       코드 응답을 받은 뒤 초기 조회를 시작한다 — 코드 기반 select·라벨·기본값이
       빈 상태로 첫 조회가 나가는 것을 막는다(순서가 코드에 드러나도록 한 곳에 모았다). */
    const initPage = async () => {
      await fnLoadCodes();
      await handleLoadSellers();
      Object.assign(formData, blank());   // 상세영역 항상 표시: 진입 시 빈 폼 (formMode='' → 버튼 숨김)
    };
    onMounted(initPage);

    /* fnRoleLabel — 역할코드 라벨 */
    const fnRoleLabel = (cd) => (codes.role_cd.find(x=>x[0]===cd)||[,cd])[1];

    /* fnRoleBadge — 역할 배지 */
    const fnRoleBadge = (cd) => ({ OWNER:'badge-purple', STAFF:'badge-blue' }[cd] || 'badge-gray');

    /* fnStatusLabel — 상태 라벨 */
    const fnStatusLabel = (cd) => (codes.member_status.find(x=>x[0]===cd)||[,cd])[1];

    /* fnStatusBadge — 상태 배지 */
    const fnStatusBadge = (cd) => ({ ACTIVE:'badge-green', REMOVED:'badge-gray' }[cd] || 'badge-gray');

    /* setBizPage — 판매자 그리드 페이지 이동 */
    const setBizPage = n => { if (n >= 1 && n <= sellerGridPager.pageTotalPage) { sellerGridPager.pageNo = n; handleLoadSellers(); } };

    /* pickSellerRow — 선택 판매자 행 (판매자 전환 시 상세영역은 빈 신규 폼으로 초기화) */
    const pickSellerRow = (v) => {
      uiState.searchSellerId = v.sellerId;
      loadSellerMembers(v.sellerId);
      memberGridPager.pageNo = 1;
      resetFormToNew();    // 판매자 전환 → 이전 선택 소속계정 폼 초기화 (빈 폼 + 버튼 숨김)
    };

    /* onSearch — 조회 */
    const onSearch = () => { sellerGridPager.pageNo = 1; handleLoadSellers(); };

    /* onReset — 초기화 */
    const onReset = () => {
      uiState.bizSearchType = '';
      uiState.bizSearchValue = '';
      uiState.bizTypeFlt = '';
      sellerGridPager.pageNo = 1;
      handleLoadSellers();
    };

    /* loadSellerMembers — 소속계정 목록 로드 (서버사이드 페이징) */
    const loadSellerMembers = async (sellerId) => {
      if (!sellerId) { return; }
      uiState.loading = true;
      try {
        const params = { sellerId, pageNo: memberGridPager.pageNo, pageSize: memberGridPager.pageSize };
        const res = await boApiSvc.slSellerMember.getPage(params, '판매자소속계정관리', '조회');
        const d = res.data?.data || {};
        sellerMembers.splice(0, sellerMembers.length, ...(d.pageList || d.list || []));
        memberGridPager.pageTotalCount = d.pageTotalCount || 0;
        memberGridPager.pageTotalPage  = d.pageTotalPage  || 1;
        coUtil.cofBuildPagerNums(memberGridPager);
      } catch(e) {
        console.error('[SlSellerMemberMng] member load failed', e);
      } finally {
        uiState.loading = false;
      }
    };

    /* setPage — 소속계정 그리드 페이지 이동 */
    const setPage = n => { if (n >= 1 && n <= memberGridPager.pageTotalPage) { memberGridPager.pageNo = n; loadSellerMembers(uiState.searchSellerId); } };

    /* onSizeChange — 페이지 크기 변경 */
    const onSizeChange = () => { memberGridPager.pageNo = 1; loadSellerMembers(uiState.searchSellerId); };

    /* blank — 빈 폼 데이터 생성 */
    const blank = () => ({
      sellerMemberId: null, sellerId: null, memberId: null, userId: null,
      roleCd: 'STAFF', isMain: 'N', isDefault: 'N', statusCd: 'ACTIVE',
    });

    /* resetFormToNew — 폼을 빈 신규 폼(비활성)으로 초기화 (영역은 항상 표시 유지)
     *   formMode='' → 저장/취소 등 버튼 숨김 (행 미선택 안내 상태) */
    const resetFormToNew = () => {
      Object.assign(formData, blank());
      if (uiState.searchSellerId) { formData.sellerId = uiState.searchSellerId; }
      uiState.formMode = '';     // 버튼 숨김 (비활성)
      uiState.dtlMode = 'view';
    };

    /* openNew — 신규 열기 (빈 폼 + 활성, 항상 수정모드로 시작 → 저장/취소 노출) */
    const openNew = () => {
      const sid = uiState.searchSellerId;
      if (!sid) { showToast('판매자를 먼저 선택해주세요.', 'warning'); return; }
      Object.assign(formData, blank());
      formData.sellerId = sid;
      uiState.formMode = 'new';  // 신규 입력 가능 → 저장/취소 노출
      uiState.dtlMode = 'edit';
      Object.keys(errors).forEach(k => delete errors[k]);
    };

    /* _loadDetailForm — 인라인 폼에 행 데이터 적재 (view/edit 공용) */
    const _loadDetailForm = (m, mode) => {
      Object.assign(formData, m);
      uiState.formMode = 'edit';
      uiState.dtlMode = mode;
      Object.keys(errors).forEach(k => delete errors[k]);
    };

    /* loadView — 보기모드로 인라인 폼 열기 (행 클릭) */
    const loadView = (m) => _loadDetailForm(m, 'view');

    /* openEdit — 수정모드로 인라인 폼 열기 ([수정] 버튼) */
    const openEdit = (m) => _loadDetailForm(m, 'edit');

    /* switchToEdit — 보기모드 → 수정모드 전환 (상세 패널 상단 [수정] 버튼) */
    const switchToEdit = () => { uiState.dtlMode = 'edit'; };

    /* closeForm — 닫기/취소 = 빈 신규 폼(비활성)으로 초기화 (영역 유지) */
    const closeForm = () => { resetFormToNew(); };

    /* handleCancelEdit — 수정 취소: 신규 등록 중이면 패널 닫기, 기존 행 수정 중이면 원본 재적재 후 보기모드 복귀 */
    const handleCancelEdit = () => {
      if (uiState.formMode === 'new') { return closeForm(); }
      const row = sellerMembers.find(m => m.sellerMemberId === formData.sellerMemberId);
      return row ? loadView(row) : closeForm();
    };

    /* handleSaveForm — 저장. memberId/userId 는 정확히 하나만 채운다(비회원용 memberId, 사업자 임직원용 userId). */
    const handleSaveForm = async () => {
      Object.keys(errors).forEach(k => delete errors[k]);
      if (!formData.memberId && !formData.userId) {
        errors.memberId = '회원ID 또는 사용자ID 중 하나를 입력해주세요.';
      } else if (formData.memberId && formData.userId) {
        errors.memberId = '회원ID/사용자ID 중 하나만 입력해주세요.';
      }
      if (!formData.roleCd) { errors.roleCd = '역할을 선택해주세요.'; }
      if (Object.keys(errors).length) { showToast('입력 내용을 확인해주세요.', 'error'); return; }
      const isNew = uiState.formMode === 'new';
      const ok = await showConfirm(isNew?'등록':'저장', isNew?'등록하시겠습니까?':'저장하시겠습니까?');
      if (!ok) { return; }
      try {
        const res = isNew
          ? await boApiSvc.slSellerMember.create({ ...formData }, '판매자소속계정관리', '등록')
          : await boApiSvc.slSellerMember.update(formData.sellerMemberId, { ...formData }, '판매자소속계정관리', '저장');
        showToast(isNew?'등록되었습니다.':'저장되었습니다.', 'success');
        await loadSellerMembers(formData.sellerId);
        if (isNew) {
          closeForm();
        } else {
          const saved = res.data?.data;
          if (saved) { Object.assign(formData, saved); }
          uiState.formMode = 'edit';
          uiState.dtlMode = 'view';
        }
      } catch(err) {
        const msg = coUtil.cofErrMsg(err);
        showToast(msg, 'error', 0);
      }
    };

    /* handleDeleteRow — 삭제 */
    const handleDeleteRow = async (m) => {
      const ok = await showConfirm('삭제', `[${m.memberNm || m.userNm || m.sellerMemberId}] 소속계정을 삭제하시겠습니까?`);
      if (!ok) { return; }
      try {
        const res = await boApiSvc.slSellerMember.remove(m.sellerMemberId, '판매자소속계정관리', '삭제');
        showToast('삭제되었습니다.', 'success');
        await loadSellerMembers(m.sellerId);
        if (uiState.formMode === 'edit' && formData.sellerMemberId === m.sellerMemberId) { closeForm(); }
      } catch(err) {
        const msg = coUtil.cofErrMsg(err);
        showToast(msg, 'error', 0);
      }
    };

    /* ##### [05] 사용자 함수 (헬퍼 / 카운트 / 렌더 / 컬럼정의) #################### */

    // 판매자 검색 (좌측 판매자목록 상단)
    const columns = {};
    columns.sellerSearch = [
      { key: 'bizSearchType', type: 'multiCheck', label: '검색대상',
        options: [
          { value: 'sellerNm', label: '판매자명' },
          { value: 'sellerId', label: '판매자ID' },
        ],
        placeholder: '검색대상 전체', allLabel: '전체 선택', minWidth: '140px' },
      { key: 'bizSearchValue', type: 'text', label: '검색어', placeholder: '검색어 입력' },
    ];

    // 판매자 그리드
    columns.sellerGrid = [
      { key: 'sellerNm',     label: '판매자명', cellStyle: 'font-weight:600' },
      { key: 'sellerTypeCd', label: '유형', align: 'center' },
      { key: 'vendorNm',     label: '연결업체' },
      { type: 'actions', actions: [
        { label: (row) => (uiState.searchSellerId === row.sellerId ? '선택됨' : '선택'), cls: 'btn btn-primary btn-xs',
          onClick: (row) => handleSelectAction('sellers-rowSelect', row) },
      ] },
    ];
    // 소속계정 그리드
    columns.memberGrid = [
      { key: 'memberNm',  label: '이름(회원)', cellStyle: 'font-weight:600', fmt: (v, row) => row.memberNm || row.userNm || '-' },
      { key: 'roleCd',    label: '역할', style: 'width:80px;text-align:center;', align: 'center', badge: (row) => fnRoleBadge(row.roleCd), fmt: (v) => fnRoleLabel(v) },
      { key: 'isMain',    label: '대표', style: 'width:60px;text-align:center;', align: 'center' },
      { key: 'isDefault', label: '기본', style: 'width:60px;text-align:center;', align: 'center' },
      { key: 'statusCd',  label: '상태', style: 'width:80px;text-align:center;', align: 'center', badge: (row) => fnStatusBadge(row.statusCd), fmt: (v) => fnStatusLabel(v) },
      { type: 'actions', actions: [
        { label: '수정', cls: 'btn btn_row_edit btn-sm', onClick: (row) => handleGridCellAction('sellerMembers-cellClick', 'btn_row_edit', row) },
        { label: '삭제', cls: 'btn btn_row_delete',       onClick: (row) => handleSelectAction('sellerMembers-rowDelete', row) },
      ] },
    ];

    // 소속계정 폼
    columns.baseMemberForm = [
      { type: 'group', label: '기본정보' },
      { key: 'sellerId',   label: '판매자', type: 'readonly' },
      { key: 'memberId',   label: '회원ID', type: 'number', placeholder: '개인회원인 경우 입력' },
      { key: 'userId',     label: '사용자ID', type: 'number', placeholder: '사업자 임직원인 경우 입력' },
      { type: 'group', label: '권한 · 상태' },
      { key: 'roleCd',     label: '역할', type: 'select', options: () => codes.role_cd.map(r => ({ codeValue: r[0], codeLabel: r[1] })) },
      { key: 'isMain',     label: '대표담당자', type: 'select', options: () => codes.BOOL_YN },
      { key: 'isDefault',  label: '기본계정', type: 'select', options: () => codes.BOOL_YN },
      { key: 'statusCd',   label: '상태', type: 'select', options: () => codes.member_status.map(s => ({ codeValue: s[0], codeLabel: s[1] })) },
    ];

    /* fnSellerRowStyle — 유틸 (선택 강조는 selected-key 의 파란 테두리로 처리) */
    const fnSellerRowStyle = (v) => '';
    /* fnMemberRowStyle — 유틸 (선택 강조는 selected-key 의 파란 테두리로 처리) */
    const fnMemberRowStyle = (m) => '';

    /* ##### [06] return (템플릿 노출) ############################################## */

    return {
      columns,
      uiState, cfDtlMode, sellerMembers, sellers, sellerGridPager, memberGridPager, formData, errors,    // 상태 / 데이터
      handleBtnAction, handleSelectAction, handleGridCellAction,                              // dispatch (모든 이벤트 / 액션 라우팅)
      fnSellerRowStyle, fnMemberRowStyle,      // 헬퍼
    };
  },
  template: /* html */`
<bo-page title="판매자 소속계정">
  <!-- ===== ■. 판매자 목록 (좌) + 소속계정 목록 (우) — 2단 그리드 ==================== -->
  <div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);gap:0 12px;align-items:flex-start;margin-bottom:16px;">
    <!-- ===== ■.■. 좌: 판매자 검색 + 목록 ===================================== -->
    <div>
      <!-- ===== ■.■.■. 판매자 검색 영역 ========================================= -->
      <bo-container>
        <bo-search-area :columns="columns.sellerSearch" :param="uiState" :loading="uiState.loading"
          @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
      </bo-container>
      <!-- ===== ■.■.■. 판매자 목록 ============================================= -->
      <bo-container title="판매자목록" :count-text="sellers.length + '건'">
        <bo-grid bare
          :columns="columns.sellerGrid" :rows="sellers" :pager="sellerGridPager" row-key="sellerId" :selected-key="uiState.searchSellerId"
          :row-style="fnSellerRowStyle"
          grid-id="sellers-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
        <bo-pager :pager="sellerGridPager" :on-set-page="n => handleBtnAction('sellers-pager-setPage', n)" :on-size-change="() => handleSelectAction('sellers-pager-sizeChange')" />
      </bo-container>
    </div>
    <!-- ===== □.□. 좌: 판매자 검색 + 목록 ===================================== -->
    <!-- ===== ■.■. 우: 소속계정 목록 (항상 표시 — 판매자 미선택 시 안내 empty-text) ======== -->
    <div>
      <bo-container title="소속계정목록" :count-text="sellerMembers.length + '건'">
        <template #toolbar-actions>
          <button class="btn btn_new" :disabled="uiState.searchSellerId == null" @click="handleBtnAction('sellerMembers-add')">
            + 신규등록
          </button>
        </template>
        <bo-grid bare
          :columns="columns.memberGrid" :rows="sellerMembers" :pager="memberGridPager" row-key="sellerMemberId" :selected-key="formData.sellerMemberId"
          :row-style="fnMemberRowStyle" :loading="uiState.loading"
          :empty-text="uiState.searchSellerId != null ? '소속계정이 없습니다.' : '좌측 판매자목록에서 판매자를 선택하면 소속계정 목록이 표시됩니다.'"
          grid-id="sellerMembers-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
        <bo-pager v-if="uiState.searchSellerId != null" :pager="memberGridPager" :on-set-page="n => handleBtnAction('sellerMembers-pager-setPage', n)" :on-size-change="() => handleSelectAction('sellerMembers-pager-sizeChange')" />
      </bo-container>
    </div>
    <!-- ===== □.□. 우: 소속계정 목록 =================================== -->
  </div>
  <!-- ===== □. 판매자 목록 (좌) + 소속계정 목록 (우) =================================== -->
  <!-- ===== ■. 인라인 폼 (항상 표시 — 미선택 시 빈 폼 + 버튼 숨김 + 안내) ============ -->
  <bo-container bare>
    <div class="card" style="margin-top:12px;">
      <div class="toolbar">
        <span class="list-title">
          {{ uiState.formMode==='new' ? '소속계정 신규' : (uiState.formMode==='edit' ? (cfDtlMode ? '소속계정 상세' : '소속계정 수정') : '소속계정 상세') }}
          <span v-if="uiState.formMode==='edit'" style="margin-left:8px;font-size:11px;color:#888;font-weight:400;">
            #{{ formData.sellerMemberId }}
          </span>
        </span>
        <div v-if="uiState.formMode" style="display:flex;gap:6px;flex-wrap:wrap;">
          <template v-if="cfDtlMode">
            <button class="btn btn_edit" @click="handleBtnAction('sellerMembers-edit')">수정</button>
            <button class="btn btn_close" @click="handleBtnAction('sellerMembers-close')">닫기</button>
          </template>
          <template v-else>
            <button class="btn btn_cancel" @click="handleBtnAction('sellerMembers-cancel')">취소</button>
            <button class="btn btn_save" @click="handleBtnAction('sellerMembers-save')">저장</button>
          </template>
        </div>
      </div>
      <!-- ===== ■.■. 소속계정 상세 폼 (항상 표시 — 미선택 시 빈 폼 구조 노출) =============== -->
      <div style="padding:16px;">
        <!-- ===== ■.■.■. 폼 영역 ================================================ -->
        <bo-form-area :columns="columns.baseMemberForm" :form="formData" :errors="errors"
          :cols="3" compact :show-actions="false" :readonly="cfDtlMode" plain-readonly />
      </div>
      <!-- ===== □.□. 소속계정 상세 폼 (BoFormArea 자동 렌더) ========================= -->
    </div>
  </bo-container>
  <!-- ===== □. 인라인 폼 =================================================== -->
</bo-page>
`,
};
