/* ShopJoy Admin - 판매자관리 상세/등록 (mb_seller) */
window.MbSellerDtl = {
  name: 'MbSellerDtl',
  props: {
    navigate:      { type: Function, required: true },        // 페이지 이동
    dtlId:         { type: String, default: null },           // 수정 대상 ID
    dtlMode:       { type: String, default: 'view' },         // 상세 모드 (new/view/edit)
    active:        { type: Boolean, default: true },          // false=행 미선택 빈 폼(저장/취소 등 버튼 숨김)
    reloadTrigger: { type: Number, default: 0 },              // 첫 탭 저장 시 상위 Mng 재조회 (UX-bo §18)
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { reactive, computed, watch, onMounted, ref } = Vue;
    const showToast    = window.boApp.showToast;   // 토스트 알림
    const showConfirm  = window.boApp.showConfirm; // 확인 모달

    const uiState = reactive({ loading: false, error: null, showVendorModal: false }); // UI 상태
    const codes = reactive({ seller_type_cd: [], seller_status_cd: [] });              // 공통코드

    const form = reactive({                        // 판매자 폼 데이터
      sellerId: null, sellerNm: '', sellerTypeCd: '', sellerStatusCd: 'PENDING',
      vendorId: null, vendorNm: '',
      settleBankNm: '', settleBankAccount: '', settleBankHolder: '',
    });
    const errors = reactive({});                   // 폼 검증 에러

    const schema = yup.object({                    // 폼 검증 스키마
      sellerNm: yup.string().required('판매자명을 입력해주세요.'),
      sellerTypeCd: yup.string().required('판매자유형을 선택해주세요.'),
    });

    const cfIsNew = computed(() => props.dtlId === null || props.dtlId === undefined);
    const cfDtlMode = computed(() => props.dtlMode === 'view'); // dtlMode: 'view' 이면 읽기전용, 'new'/'edit' 이면 편집

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    /* handleBtnAction — 버튼 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ MbSellerDtl.js : handleBtnAction -> ', cmd, param);
      // 폼 저장 (신규 등록 또는 수정)
      if (cmd === 'form-save') {
        return handleSave();
      // 폼 편집 취소 → 상세영역 유지 + 빈 신규 폼으로 초기화 (영역 사라지지 않음)
      } else if (cmd === 'form-cancel') {
        return props.navigate('__cancelEdit__');
      // 상세 보기 → 편집 모드 전환
      } else if (cmd === 'form-edit') {
        return props.navigate('__switchToEdit__');
      // 폼 닫기 → 상세영역 유지 + 빈 신규 폼으로 초기화
      } else if (cmd === 'form-close') {
        return props.navigate('__closeDtl__');
      // 보기모드에서 바로 삭제 (2026-08-22 정책: 보기모드 표준 버튼 = [수정][삭제][닫기])
      } else if (cmd === 'form-delete') {
        return handleDelete();
      // 연결업체 선택 모달 열기 (사업자형 판매자 전용)
      } else if (cmd === 'vendorModal-open') {
        uiState.showVendorModal = true;
        return;
      // 연결업체 선택 해제
      } else if (cmd === 'vendor-clear') {
        form.vendorId = null;
        form.vendorNm = '';
        return;
      } else {
        console.warn('[handleBtnAction] unknown cmd:', cmd);
      }
    };

    /* fnCallbackModal — 모달 콜백 통합 dispatch. cmd=모달명, param=호출 파라미터, result=응답 결과 (null=닫기) */
    const fnCallbackModal = (popCmd, param, result) => {
      console.log(' ■■ MbSellerDtl : fnCallbackModal -> ', popCmd, param, result);
      if (popCmd === 'cmPopup-vendor-pick') {
        uiState.showVendorModal = false;
        if (result == null) { return; }
        form.vendorId = result.selId;
        form.vendorNm = result.selName;
        return;
      } else {
        console.warn('[fnCallbackModal] unknown popCmd:', popCmd);
      }
    };

    /* ##### [04] 내장 사용 함수 (이벤트 핸들러 on* / handle*) #################### */

    /* handleLoadDetail — 상세 조회 */
    const handleLoadDetail = async () => {
      if (cfIsNew.value) { return; }
      uiState.loading = true;
      try {
        const res = await boApiSvc.mbSeller.getById(props.dtlId, '판매자관리', '상세조회');
        const data = res.data?.data;
        if (data) { Object.assign(form, data); }
        uiState.error = null;
      } catch (err) {
        console.error('[catch-info]', err);
        uiState.error = err.message;
      } finally {
        uiState.loading = false;
      }
    };

    /* handleSave — 저장 */
    const handleSave = async () => {
      Object.keys(errors).forEach(k => delete errors[k]);
      try {
        await schema.validate(form, { abortEarly: false });
      } catch (err) {
        console.error('[catch-info]', err);
        err.inner.forEach(e => { errors[e.path] = e.message; });
        coUtil.cofValidationToast(errors, showToast);
        return;
      }
      const ok = await showConfirm(cfIsNew.value ? '등록' : '저장', cfIsNew.value ? '등록하시겠습니까?' : '저장하시겠습니까?');
      if (!ok) { return; }
      try {
        const res = await (cfIsNew.value ? boApiSvc.mbSeller.create({ ...form }, '판매자관리', '등록') : boApiSvc.mbSeller.update(form.sellerId, { ...form }, '판매자관리', '저장'));
        if (showToast) { showToast(cfIsNew.value ? '등록되었습니다.' : '저장되었습니다.', 'success'); }
        if (props.navigate) { props.navigate('mbSellerMng', { reload: true }); }
      } catch (err) {
        console.error('[catch-info]', err);
        const errMsg = (err.response?.data?.message) || err.message || '오류가 발생했습니다.';
        if (showToast) { showToast(errMsg, 'error', 0); }
      }
    };

    /* handleDelete — 보기모드 [삭제] (2026-08-22 정책: 보기모드 표준 버튼 = [수정][삭제][닫기]) */
    const handleDelete = async () => {
      if (cfIsNew.value || !form.sellerId) { return; }
      const ok = await showConfirm('삭제', `[${form.sellerNm}] 판매자를 삭제하시겠습니까?`);
      if (!ok) { return; }
      try {
        await boApiSvc.mbSeller.remove(form.sellerId, '판매자관리', '삭제');
        showToast('삭제되었습니다.', 'success');
        props.navigate('mbSellerMng', { reload: true });
      } catch (err) {
        console.error('[catch-info]', err);
        const errMsg = (err.response?.data?.message) || err.message || '오류가 발생했습니다.';
        if (showToast) { showToast(errMsg, 'error', 0); }
      }
    };

    /* fnLoadCodes — 공통코드 로드
       SELLER_TYPE_CD(개인/업체) · SELLER_STATUS_CD(신청중/승인/정지) — 신설 sy_code 그룹.
       SyVendorDtl.js 가 VENDOR_TYPE_KR/ACTIVE_STATUS 를 로드하는 것과 동일한 codeStore 경로를
       그대로 사용한다(그룹명만 신설 코드로 교체). */
    const fnLoadCodes = async () => {
      try {
        const codeStore = window.sfGetBoCodeStore();
        /* 필요한 코드그룹만 지연 로딩 — 캐시에 있으면 API 가 나가지 않는다 */
        await codeStore.saLoadCodes(['SELLER_TYPE_CD', 'SELLER_STATUS_CD'], {compNm: 'MbSellerDtl'});
        codes.seller_type_cd = codeStore.sgGetGrpCodes('SELLER_TYPE_CD');
        codes.seller_status_cd = codeStore.sgGetGrpCodes('SELLER_STATUS_CD');
      } catch (err) {
        console.error('[fnLoadCodes]', err);
      }
    };

    // ★ onMounted — 진입 시 코드 로드 + 상세 조회
    /* initPage — 화면 로드 시퀀스.
       코드 응답을 받은 뒤 초기 조회를 시작한다 — 코드 기반 select·라벨·기본값이
       빈 상태로 첫 조회가 나가는 것을 막는다(순서가 코드에 드러나도록 한 곳에 모았다). */
    const initPage = async () => {
      await fnLoadCodes();
      if (cfIsNew.value && !form.sellerTypeCd) { form.sellerTypeCd = codes.seller_type_cd[0]?.codeValue || ''; }
      if (!cfIsNew.value) { await handleLoadDetail(); }
    };
    onMounted(initPage);

    /* policy: 상위 Mng 이 reloadTrigger 증가시키면 상세 API 재조회 */
    watch(() => props.reloadTrigger, async (n, o) => {
      if (n === o || n === 0) { return; }
      try { Object.keys(errors).forEach(k => delete errors[k]); } catch(_) {}
      await handleLoadDetail();
    });

    /* ##### [05] 사용자 함수 (헬퍼 / 카운트 / 렌더 / 컬럼정의) #################### */

    /* fnVendorPickDisplay — 연결업체 pick 필드 표시값 */
    const fnVendorPickDisplay = (f) => f.vendorNm || '';

    // 기본 폼 (cols=3 빈칸 최소화)
    const columns = {};
    columns.baseForm = [
      { type: 'group', label: '판매자정보' },
      // 1행: 판매자명(2) + 판매자유형(1)
      { key: 'sellerNm',       label: '판매자명', type: 'text', required: true, placeholder: '판매자명', colSpan: 2 },
      { key: 'sellerTypeCd',   label: '판매자유형', type: 'select', nullable: false, required: true,
        options: () => codes.seller_type_cd },
      // 2행: 상태(1) + 연결업체(2, 사업자형 전용)
      { key: 'sellerStatusCd', label: '상태', type: 'select', nullable: false,
        options: () => codes.seller_status_cd },
      { key: 'vendorId',       label: '연결업체', type: 'pick', placeholder: '업체 선택(사업자형)', colSpan: 2,
        display: (f) => fnVendorPickDisplay(f),
        onOpen: () => handleBtnAction('vendorModal-open'),
        onClear: () => handleBtnAction('vendor-clear') },
      // 3행: 정산은행 / 정산계좌 / 예금주
      { key: 'settleBankNm',      label: '정산은행', type: 'text', placeholder: '은행명' },
      { key: 'settleBankAccount', label: '정산계좌번호', type: 'text', placeholder: '계좌번호' },
      { key: 'settleBankHolder',  label: '예금주', type: 'text', placeholder: '예금주명' },
    ];

    /* ##### [06] return (템플릿 노출) ############################################## */

    return {
      columns,
      form, errors, // 상태 / 데이터
      uiState,
      handleBtnAction, fnCallbackModal,                                       // dispatch (모든 이벤트 / 액션 라우팅)
      cfIsNew, cfDtlMode, // computed
    };
  },
  template: /* html */`
<div>
<!-- ===== ■. 상세 영역 (제목/라벨/폼 모두 컨테이너 안에) ============================= -->
<bo-container :title="!active ? '판매자 상세' : (cfIsNew ? '판매자 등록' : (cfDtlMode ? '판매자 상세' : '판매자 수정'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.sellerId)">
  <!-- ===== ■.■. 폼 영역 ================================================== -->
  <bo-form-area plain-readonly :columns="columns.baseForm" :form="form" :errors="errors"
    :readonly="cfDtlMode" :cols="3" compact :show-actions="active" :show-cancel="!cfIsNew" :show-delete="!cfIsNew"
    @save="handleBtnAction('form-save')"
    @cancel="handleBtnAction('form-cancel')"
    @edit="handleBtnAction('form-edit')"
    @close="handleBtnAction('form-close')"
    @delete="handleBtnAction('form-delete')">
  </bo-form-area>
  <!-- ===== □.□. 폼 영역 ================================================== -->
</bo-container>
</div>
<!-- ===== ■. 연결업체 선택 모달(사업자형 판매자) ============================ -->
<bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="uiState.showVendorModal" :on-callback="fnCallbackModal" />
<!-- ===== □. 컨테이너 영역 =================================================== -->
`,
};
