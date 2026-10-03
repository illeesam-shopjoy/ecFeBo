/* ShopJoy Admin - 클레임관리 상세/등록 */
// 2026-10-03 클레임/부분환불 계약(od.13.impl) — 금액은 서버 계산값 읽기전용, 품목/환불내역 그리드, 상태는 §1 전이 버튼으로만, 신규는 /create(주문 선택 → 품목·수량 → preview → create)
window._odClaimDtlState = window._odClaimDtlState || { activeTab: 'info', tabMode: 'tab' };
window.OdClaimDtl = {
  name: 'OdClaimDtl',
  props: {
    navigate:     { type: Function, required: true }, // 페이지 이동
    dtlId:        { type: String, default: null }, // 수정 대상 ID
    dtlMode:      { type: String, default: 'view' }, // 상세 모드 (new/view/edit),
    active:       { type: Boolean, default: true }, // false=행 미선택 빈 폼(저장/취소 등 버튼 숨김)
    reloadTrigger: { type: Number, default: 0 }, // reload signal from parent Mng // 첫 탭 저장 시 상위 Mng 재조회 (UX-bo §18)
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { ref, reactive, computed, onMounted, watch } = Vue;
    const showToast    = window.boApp.showToast;  // 토스트 알림
    const showConfirm  = window.boApp.showConfirm;  // 확인 모달
    const showRefModal = window.boApp.showRefModal;  // 참조 모달

    const uiState = reactive({ loading: false, error: null, statusSaving: false, activeTab: window._odClaimDtlState.activeTab || 'info', tabMode2: window._odClaimDtlState.tabMode || 'tab' });
    const activeTab = Vue.toRef(uiState, 'activeTab');
    const tabMode2 = Vue.toRef(uiState, 'tabMode2');
    const codes = reactive({ claim_statuses: [], claim_types: [] });
    const claimItems = reactive([]);                                            // 클레임 항목 목록 (서버 claimItems)
    const refunds = reactive([]);                                               // 환불 내역 (서버 refunds + refundMethods)
    const expandedItems = reactive(new Set());                                  // 펼쳐진 클레임 항목 행 인덱스
    const orderPick = reactive({ open: false });                                // 주문 선택 모달 상태
    const memberPick = reactive({ open: false });                               // 회원 선택 모달 상태

    // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 신규 생성용: 선택 주문의 품목(수량 스텝퍼) + 미리보기 결과
    const newItems = reactive([]);                                              // [{orderItemId, prodNm, prodSkuId, orderQty, cancelQty, unitPrice, _maxQty, claimQty, newProdSkuId}]
    const newItemsState = reactive({ loading: false, orderId: '' });
    const preview = reactive({ loading: false, data: null, error: '' });

    const cfIsNew = computed(() => !props.dtlId);

    const form = reactive({
      claimId: '', memberId: '', memberNm: '', orderId: '', prodNm: '',
      claimTypeCd: '', claimStatusCd: '', reasonCd: '', reasonDetail: '',
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 서버 계산 금액(읽기전용)
      refundProdAmt: null, refundCouponAmt: null, refundSaveAmt: null, refundShippingAmt: null, returnShippingFee: null,
      refundAmt: null, fullClaimYn: '', customerFaultYn: '', refundMethodCd: '',
      refundBankCd: '', refundAccountNo: '', refundAccountNm: '',
      requestDate: '', procDate: '', memo: '',
    });
    /* _applyNewDefaults — 신규 진입 시에만 비어있지 않던 기본값 채움 (inactive/초기화 시 빈 폼 유지) */
    const _applyNewDefaults = () => {
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 기본값은 한글 라벨이 아니라 코드값(CANCEL / REQUESTED)
      Object.assign(form, {
        claimTypeCd: 'CANCEL', claimStatusCd: 'REQUESTED', reasonCd: 'ETC',
      });
    };
    const errors = reactive({});

    const schema = yup.object({
      claimId: yup.string().required('클레임ID를 입력해주세요.'),
      orderId: yup.string().required('주문ID를 입력해주세요.'),
    });
    // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 신규(/create) 검증: claimId 는 서버 생성
    const createSchema = yup.object({
      orderId:     yup.string().required('주문을 선택해주세요.'),
      claimTypeCd: yup.string().required('클레임 유형을 선택해주세요.'),
      reasonCd:    yup.string().required('사유를 선택해주세요.'),
    });

    /* ── 2026-10-03 클레임/부분환불 계약(od.13.impl) §1 코드/전이 ── */
    const CLAIM_STATUS_FLOW = {
      CANCEL:   ['REQUESTED', 'APPROVED', 'COMPLT'],
      RETURN:   ['REQUESTED', 'APPROVED', 'IN_PICKUP', 'PROCESSING', 'REFUND_WAIT', 'COMPLT'],
      EXCHANGE: ['REQUESTED', 'APPROVED', 'IN_PICKUP', 'COMPLT'],
    };
    const CLAIM_FINAL_STATUSES = ['COMPLT', 'REJECTED', 'CANCELLED'];
    const CLAIM_REASON_CDS = [
      { value: 'CHANGE_MIND',    label: '단순변심 (고객 귀책)' },
      { value: 'WRONG_ORDER',    label: '잘못 주문 (고객 귀책)' },
      { value: 'DEFECT',         label: '상품 불량' },
      { value: 'WRONG_DELIVERY', label: '오배송' },
      { value: 'DELIVERY_DELAY', label: '배송 지연' },
      { value: 'ETC',            label: '기타 (고객 귀책)' },
    ];
    const CLAIM_TYPE_LABEL = { CANCEL: '취소', RETURN: '반품', EXCHANGE: '교환' };
    /* fnStatusLabel — 상태코드 → 한글 (boConsts.CLAIM_STATUS_LABEL) */
    const fnStatusLabel = (cd) => (window.boConsts && boConsts.CLAIM_STATUS_LABEL[cd]) || cd || '-';
    const fnReasonLabel = (cd) => (CLAIM_REASON_CDS.find(r => r.value === cd) || {}).label || cd || '-';
    const fnTypeKey = () => coConsts.CLAIM_TYPE_CD_MAP[form.claimTypeCd] || form.claimTypeCd || 'CANCEL';

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    /* handleBtnAction — 버튼 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ OdClaimDtl.js : handleBtnAction -> ', cmd, param);
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
      // 주문 선택 모달 열기
      } else if (cmd === 'orderPickModal-open') {
        orderPick.open = true; return;
      // 주문 선택 모달 닫기
      } else if (cmd === 'orderPickModal-close') {
        orderPick.open = false; return;
      // 회원 선택 모달 열기
      } else if (cmd === 'memberPickModal-open') {
        memberPick.open = true; return;
      // 회원 선택 모달 닫기
      } else if (cmd === 'memberPickModal-close') {
        memberPick.open = false; return;
      // 주문ID 초기화
      } else if (cmd === 'orderId-clear') {
        form.orderId = ''; newItems.splice(0, newItems.length); preview.data = null; return;
      // 회원ID 초기화
      } else if (cmd === 'memberId-clear') {
        form.memberId = ''; form.memberNm = ''; return;
      // 주문 참조 모달 열기
      } else if (cmd === 'form-orderRef') {
        return showRefModal('order', form.orderId);
      // 회원 참조 모달 열기
      } else if (cmd === 'form-memberRef') {
        return showRefModal('member', form.memberId);
      // 탭 전환
      } else if (cmd === 'tab-change') {
        if (uiState.tabMode2 === 'tab') { uiState.activeTab = param; }
        return;
      // 뷰모드 전환
      } else if (cmd === 'viewMode-change') {
        uiState.tabMode2 = param;
        return;
      // 클레임항목 전체 펼침 토글
      } else if (cmd === 'claimItems-toggleExpandAll') {
        if (cfAllExpanded.value) { expandedItems.clear(); }
        else { expandedItems.clear(); claimItems.forEach((_, i) => expandedItems.add(i)); }
        return;
      // 배송 추적 창 열기
      } else if (cmd === 'tracking-open') {
        return openTracking(param.courier, param.trackingNo);
      // 환불 계산 모달 열기
      } else if (cmd === 'calc-open') {
        return handleOpenDtlCalc();
      // 환불 계산 모달 닫기
      } else if (cmd === 'calc-close') {
        dtlCalcDialog.show = false; return;
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 상태 전이 버튼 (save/status)
      } else if (cmd === 'status-change') {
        return handleChangeStatus(param);
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 신규: 선택 주문의 품목 불러오기
      } else if (cmd === 'newItems-load') {
        return handleLoadNewItems();
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 신규: 수량 스텝퍼 (param: {row, delta})
      } else if (cmd === 'newItems-step') {
        return handleStepQty(param.row, param.delta);
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 신규: 금액 미리보기(/preview)
      } else if (cmd === 'newItems-preview') {
        return handlePreview();
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 환불내역: 무통장 송금 완료(/refund/{id}/complete)
      } else if (cmd === 'refund-complete') {
        return handleCompleteRefund(param);
      } else {
        console.warn('[handleBtnAction] unknown cmd:', cmd);
      }
    };

    /* handleSelectAction — 그리드 행/노드/모달 선택 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleSelectAction = (cmd, param = {}) => {
      console.log(' ■■ OdClaimDtl.js : handleSelectAction -> ', cmd, param);
      // 클레임항목 행 펼침 토글
      if (cmd === 'claimItems-rowToggleExpand') {
        if (expandedItems.has(param)) { expandedItems.delete(param); }
        else { expandedItems.add(param); }
        return;
      } else {
        console.warn('[handleSelectAction] unknown cmd:', cmd);
      }
    };

    /* fnCallbackModal — 모달 선택 결과 처리 (cmd = modalName) */
    const fnCallbackModal = (popCmd, param, result) => {
      // 주문 선택
      if (popCmd === 'cmPopup-order-pick') {
        orderPick.open = false;
        if (result) {
          form.orderId  = result.selId || '';
          /* 주문에서 회원정보 자동 채움 — order 팝업은 nm_field=orderId 라 selName 은 주문ID다.
             회원명은 order 팝업이 조인해 얹어준 별도 필드(memberNm/userNm)에서 읽어야 한다. */
          if (result.memberNm || result.userNm) { form.memberNm = result.memberNm || result.userNm || ''; }
          if (result.memberId) { form.memberId = result.memberId; }
          // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 신규면 주문 선택 직후 품목 목록 로드
          if (cfIsNew.value && form.orderId) { handleLoadNewItems(); }
        }
        return;
      // 회원 선택
      } else if (popCmd === 'cmPopup-member-pick') {
        memberPick.open = false;
        if (result) {
          form.memberId = result.selId || '';
          form.memberNm = result.selName || result.loginId || result.selId || '';
        }
        return;
      }
    };

    /* ##### [03] 초기 함수 (마운트 / 코드 로드 / watch) ############################## */

    /* fnLoadCodes — 공통코드 로드 */
    const fnLoadCodes = async () => {
      const codeStore = window.sfGetBoCodeStore();
      /* 필요한 코드그룹만 지연 로딩 — 캐시에 있으면 API 가 나가지 않는다 */
      await codeStore.saLoadCodes(['CLAIM_STATUS_CD', 'CLAIM_TYPE_CD'], {compNm: 'OdClaimDtl'});
      codes.claim_statuses = codeStore.sgGetGrpCodes('CLAIM_STATUS_CD');
      codes.claim_types = codeStore.sgGetGrpCodes('CLAIM_TYPE_CD');
    };

    // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 진행 단계는 코드값(§1) 기준, 라벨은 표시 시 변환
    const cfClaimSteps = computed(() => CLAIM_STATUS_FLOW[fnTypeKey()] || CLAIM_STATUS_FLOW.CANCEL);
    const cfCurrentStepIdx = computed(() => cfClaimSteps.value.indexOf(form.claimStatusCd));
    const cfIsFinal = computed(() => CLAIM_FINAL_STATUSES.includes(form.claimStatusCd));
    /* cfStatusActions — 현재 상태에서 허용되는 다음 상태 버튼 (§1: 앞으로만, 건너뛰기 허용 / 종결 전이면 반려·철회 가능) */
    const cfStatusActions = computed(() => {
      if (cfIsNew.value || !form.claimId || cfIsFinal.value) { return []; }
      const flow = cfClaimSteps.value;
      const idx  = flow.indexOf(form.claimStatusCd);
      const forward = idx < 0 ? flow.slice(1) : flow.slice(idx + 1);
      const acts = forward.map((cd, i) => ({
        cd, label: cd === 'COMPLT' ? '완료(환불 실행)' : fnStatusLabel(cd),
        style: cd === 'COMPLT'
          ? 'background:#059669;color:#fff;border:none;font-weight:700;'
          : (i === 0 ? 'background:#2563eb;color:#fff;border:none;' : 'background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;'),
      }));
      acts.push({ cd: 'REJECTED',  label: '반려', style: 'background:#fee2e2;color:#b91c1c;border:1px solid #fca5a5;' });
      acts.push({ cd: 'CANCELLED', label: '철회(고객)', style: 'background:#f3f4f6;color:#374151;border:1px solid #d1d5db;' });
      return acts;
    });

    /* ##### [04] 내장 사용 함수 (이벤트 핸들러 on* / handle*) #################### */

    /* handleSearchDetail — 처리 */
    const handleSearchDetail = async () => {
      if (cfIsNew.value) { return; }
      uiState.loading = true;
      try {
        const res = await boApiSvc.odClaim.getById(props.dtlId, '클레임관리', '상세조회');
        const c = res.data?.data || res.data || {};
        const { claimItems: _ci, refunds: _rf, ...rest } = c;          // 하위 목록은 form 에 섞지 않는다
        Object.assign(form, { ...rest });
        if (!form.claimId) { form.claimId = props.dtlId; }
        // getById 응답에 임베드된 클레임항목(claimItems) 사용 — 2026-10-03 계약 필드(prodSkuId/unitPrice/itemAmt/refundAmt/newProdSkuId/newQty)
        claimItems.splice(0, claimItems.length, ...((_ci || []).map(x => ({
          ...x,
          prodNm: x.prodNm,
          qty: x.claimQty || 1,
          // 교환 대상 필드 (new_* 컬럼)
          newProdId: x.newProdId || null,
          newProdSkuId: x.newProdSkuId || null,
          newProdOpt1Id: x.newProdOpt1Id || null,
          newProdOpt2Id: x.newProdOpt2Id || null,
          newProdNm: x.newProdNm || null,
          newProdOption: x.newProdOption || null,
          newQty: x.newQty || null,
          newUnitPrice: x.newUnitPrice || null,
        }))));
        // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 환불 내역(od_refund + od_refund_method)
        refunds.splice(0, refunds.length, ...(_rf || []));
        uiState.error = null;
      } catch (err) {
        console.error('[catch-info]', err);
        uiState.error = err.message;
      } finally {
        uiState.loading = false;
      }
    };

    // ★ onMounted — 진입 시 코드 로드 + 목록 초기 조회
    /* initPage — 화면 로드 시퀀스.
       코드 응답을 받은 뒤 초기 조회를 시작한다 — 코드 기반 select·라벨·기본값이
       빈 상태로 첫 조회가 나가는 것을 막는다(순서가 코드에 드러나도록 한 곳에 모았다). */
    const initPage = async () => {
      await fnLoadCodes();
      await handleSearchDetail();
      if (props.active && cfIsNew.value) { _applyNewDefaults(); }
    };
    onMounted(initPage);

    /* policy: re-fetch detail API whenever parent Mng increments reloadTrigger */
    watch(() => props.reloadTrigger, async (n, o) => {
      if (n === o || n === 0) { return; }
      uiState.activeTab = 'items'; // 행 변경 시 클레임항목 탭 기본
      try { Object.keys(errors).forEach(k => delete errors[k]); } catch(_) {}
      await handleSearchDetail();
    });

    /* handleSave — 저장 (신규 = /create, 수정 = raw PUT, 상태/금액은 서버 관리라 보내도 변경되지 않음) */
    const handleSave = async () => {
      Object.keys(errors).forEach(k => delete errors[k]);
      if (cfIsNew.value) { return handleCreateClaim(); }
      try {
        await schema.validate(form, { abortEarly: false });
      } catch (err) {
        console.error('[catch-info]', err);
        err.inner.forEach(e => { errors[e.path] = e.message; });
        coUtil.cofValidationToast(errors, showToast);
        return;
      }
      const ok = await showConfirm('저장', '저장하시겠습니까?');
      if (!ok) { return; }
      try {
        // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 금액·상태는 서버 소유. 메모/사유상세 등 편집 가능 필드만 의미 있음
        const body = { ...form };
        delete body.claimItems; delete body.refunds;
        const res = await boApiSvc.odClaim.update(form.claimId, body, '클레임관리', '저장');
        if (showToast) { showToast('저장되었습니다.', 'success'); }
        if (props.navigate) { props.navigate('odClaimMng', { reload: true }); }
      } catch (err) {
        console.error('[catch-info]', err);
        const errMsg = (err.response?.data?.message) || err.message || '오류가 발생했습니다.';
        if (showToast) { showToast(errMsg, 'error', 0); }
      }
    };

    /* ── 2026-10-03 클레임/부분환불 계약(od.13.impl) 신규 생성 흐름 ── */

    /* handleLoadNewItems — 선택한 주문의 주문항목을 불러와 수량 스텝퍼 행으로 */
    const handleLoadNewItems = async () => {
      const oid = (form.orderId || '').trim();
      if (!oid) { showToast('주문을 먼저 선택해주세요.', 'error'); return; }
      newItemsState.loading = true;
      preview.data = null; preview.error = '';
      try {
        const res = await boApiSvc.odOrderItem.getPage({ orderId: oid, pageNo: 1, pageSize: 200 }, '클레임관리', '주문항목조회');
        const list = res.data?.data?.pageList || res.data?.data?.list || [];
        newItems.splice(0, newItems.length, ...list.map(it => {
          const orderQty  = Number(it.orderQty || 0);
          const cancelQty = Number(it.cancelQty || 0);
          const maxQty    = it.claimableQty != null ? Number(it.claimableQty) : Math.max(0, orderQty - cancelQty);
          return {
            orderItemId: it.orderItemId, prodId: it.prodId, prodNm: it.prodNm || it.prodId, prodSkuId: it.prodSkuId || '',
            prodOption: [it.optItemNm1, it.optItemNm2].filter(Boolean).join(' / '),
            orderItemStatusCd: it.orderItemStatusCd, orderQty, cancelQty,
            unitPrice: Number(it.unitPrice || (it.itemOrderAmt && orderQty ? it.itemOrderAmt / orderQty : 0)),
            claimableTypeCds: it.claimableTypeCds || '',
            _maxQty: maxQty, claimQty: 0, newProdSkuId: '',
          };
        }));
        newItemsState.orderId = oid;
        if (!newItems.length) { showToast('이 주문에는 주문항목이 없습니다.', 'error'); }
      } catch (err) {
        console.error('[catch-info]', err);
        showToast((err.response?.data?.message) || err.message || '주문항목 조회 중 오류가 발생했습니다.', 'error', 0);
      } finally {
        newItemsState.loading = false;
      }
    };

    /* handleStepQty — 수량 스텝퍼 (0 ~ 남은 수량) */
    const handleStepQty = (row, delta) => {
      let v = Number(row.claimQty || 0) + Number(delta || 0);
      if (v < 0) { v = 0; }
      if (v > row._maxQty) { v = row._maxQty; }
      row.claimQty = v;
      preview.data = null;        // 수량이 바뀌면 미리보기 무효
    };
    /* handleQtyInput — 직접 입력도 범위 보정 */
    const handleQtyInput = (row, e) => {
      let v = parseInt(e.target.value, 10);
      if (isNaN(v) || v < 0) { v = 0; }
      if (v > row._maxQty) { v = row._maxQty; }
      row.claimQty = v;
      preview.data = null;
    };

    /* fnBuildCreateBody — /preview·/create 공통 본문 (FoClaimReqDto 와 동일, memberId 는 서버가 주문에서) */
    const fnBuildCreateBody = () => {
      const isExch = fnTypeKey() === 'EXCHANGE';
      return {
        orderId:         form.orderId,
        claimTypeCd:     fnTypeKey(),
        reasonCd:        form.reasonCd || 'ETC',
        reasonDetail:    form.reasonDetail || '',
        refundBankCd:    form.refundBankCd || null,
        refundAccountNo: form.refundAccountNo || null,
        refundAccountNm: form.refundAccountNm || null,
        items: newItems.filter(i => Number(i.claimQty) > 0).map(i => ({
          orderItemId: i.orderItemId,
          claimQty:    Number(i.claimQty),
          ...(isExch ? { newProdSkuId: i.newProdSkuId || null, newQty: Number(i.claimQty) } : {}),
        })),
      };
    };

    /* fnValidateCreate — 신규 생성 입력 검증 (서버 §3 검증 전 최소 확인) */
    const fnValidateCreate = async () => {
      Object.keys(errors).forEach(k => delete errors[k]);
      try {
        await createSchema.validate(form, { abortEarly: false });
      } catch (err) {
        err.inner.forEach(e => { errors[e.path] = e.message; });
        coUtil.cofValidationToast(errors, showToast);
        return false;
      }
      const body = fnBuildCreateBody();
      if (!body.items.length) { showToast('클레임 수량을 1개 이상 입력해주세요.', 'error'); return false; }
      if (body.claimTypeCd === 'EXCHANGE' && body.items.some(i => !i.newProdSkuId)) {
        showToast('교환은 품목마다 교환 SKU(같은 상품의 다른 옵션)를 입력해야 합니다.', 'error'); return false;
      }
      return true;
    };

    /* handlePreview — 금액 미리보기 (저장 안 함) */
    const handlePreview = async () => {
      if (!(await fnValidateCreate())) { return; }
      preview.loading = true; preview.error = '';
      try {
        const res = await boApiSvc.odClaim.preview(fnBuildCreateBody(), '클레임관리', '금액미리보기');
        preview.data = res.data?.data || res.data || null;
      } catch (err) {
        console.error('[catch-info]', err);
        preview.data = null;
        preview.error = (err.response?.data?.message) || err.message || '금액 미리보기 중 오류가 발생했습니다.';
        showToast(preview.error, 'error', 0);
      } finally {
        preview.loading = false;
      }
    };

    /* handleCreateClaim — /create 로 품목 포함 생성 (미리보기를 안 봤으면 먼저 보여주고 확인) */
    const handleCreateClaim = async () => {
      if (!(await fnValidateCreate())) { return; }
      if (!preview.data) { await handlePreview(); if (!preview.data) { return; } }
      const p = preview.data;
      const msg = `[${CLAIM_TYPE_LABEL[fnTypeKey()] || fnTypeKey()}] 주문 ${form.orderId}\n`
        + `품목 ${fnBuildCreateBody().items.length}건 / 상품금액 ${fmt(p.refundProdAmt)} / 환불예정액(현금성) ${fmt(p.refundAmt)}`
        + (Number(p.refundSaveAmt) > 0 ? ` / 캐시 복원 ${fmt(p.refundSaveAmt)}` : '')
        + `\n\n클레임을 등록하시겠습니까? (상태: 요청)`;
      const ok = await showConfirm('클레임 등록', msg);
      if (!ok) { return; }
      try {
        const res = await boApiSvc.odClaim.create(fnBuildCreateBody(), '클레임관리', '등록');
        const created = res.data?.data || res.data || {};
        if (showToast) { showToast(`클레임 ${created.claimId || ''} 이(가) 등록되었습니다.`, 'success'); }
        if (props.navigate) { props.navigate('odClaimMng', { reload: true }); }
      } catch (err) {
        console.error('[catch-info]', err);
        const errMsg = (err.response?.data?.message) || err.message || '오류가 발생했습니다.';
        if (showToast) { showToast(errMsg, 'error', 0); }
      }
    };

    /* ── 2026-10-03 클레임/부분환불 계약(od.13.impl) 상태 전이 / 환불 완료 ── */

    /* handleChangeStatus — save/status 단건 (COMPLT 는 서버가 재고·주문·환불 실행 → 확인 필수) */
    const handleChangeStatus = async (toCd) => {
      if (!form.claimId || uiState.statusSaving) { return; }
      const fromLabel = fnStatusLabel(form.claimStatusCd);
      const toLabel   = fnStatusLabel(toCd);
      let title = '클레임 상태 변경';
      let msg   = `[${form.claimId}] ${fromLabel} → ${toLabel} 으로 변경하시겠습니까?`;
      if (toCd === 'COMPLT') {
        title = '완료(환불 실행)';
        msg = `[${form.claimId}] 을(를) 완료 처리합니다.\n\n`
          + `· 재고 복구${fnTypeKey() === 'EXCHANGE' ? ' + 교환 SKU 출고' : ''}\n`
          + `· 주문항목 취소수량/주문상태 갱신\n`
          + `· 현금성 환불 ${fmt(form.refundAmt)} (${form.refundMethodCd || '주문 결제수단'})`
          + (Number(form.refundSaveAmt) > 0 ? ` / 회원 캐시 복원 ${fmt(form.refundSaveAmt)}` : '') + '\n\n'
          + `PG 취소가 실패하면 전체 롤백됩니다. 되돌릴 수 없습니다. 진행하시겠습니까?`;
      } else if (toCd === 'REJECTED') {
        title = '반려';
        msg = `[${form.claimId}] 클레임을 반려(운영자)하시겠습니까?\n재고·환불 변동은 없습니다.`;
      } else if (toCd === 'CANCELLED') {
        title = '철회';
        msg = `[${form.claimId}] 고객 철회로 처리하시겠습니까?\n재고·환불 변동은 없습니다.`;
      }
      const ok = await (window.showBoConfirm ? window.showBoConfirm(title, msg) : showConfirm(title, msg));
      if (!ok) { return; }
      uiState.statusSaving = true;
      try {
        await boApiSvc.odClaim.saveOne('status', { claimId: form.claimId, claimStatusCd: toCd, rowStatus: 'U' }, '클레임관리', '상태변경');
        if (showToast) { showToast(`${toLabel} 처리되었습니다.`, 'success'); }
        await handleSearchDetail();
        if (props.navigate) { props.navigate('__reloadList__'); }   // 상위 Mng 목록만 재조회(상세 유지)
      } catch (err) {
        console.error('[catch-info]', err);
        const errMsg = (err.response?.data?.message) || err.message || '상태 변경 중 오류가 발생했습니다.';
        if (showToast) { showToast(errMsg, 'error', 0); }
      } finally {
        uiState.statusSaving = false;
      }
    };

    /* handleCompleteRefund — 무통장 PENDING 환불행 [송금완료] → /refund/{refundId}/complete */
    const handleCompleteRefund = async (row) => {
      if (!row || !row.refundId) { return; }
      const msg = `환불 ${row.refundId} (${fmt(row.refundAmt)}${row.account ? ' / ' + row.account : ''}) 을(를) 송금 완료 처리하시겠습니까?`;
      const ok = await (window.showBoConfirm ? window.showBoConfirm('송금 완료', msg) : showConfirm('송금 완료', msg));
      if (!ok) { return; }
      try {
        await boApiSvc.odClaim.completeRefund(row.refundId, '클레임관리', '송금완료');
        if (showToast) { showToast('환불이 완료 처리되었습니다.', 'success'); }
        await handleSearchDetail();
      } catch (err) {
        console.error('[catch-info]', err);
        const errMsg = (err.response?.data?.message) || err.message || '송금 완료 처리 중 오류가 발생했습니다.';
        if (showToast) { showToast(errMsg, 'error', 0); }
      }
    };

    watch(() => uiState.activeTab, v => { window._odClaimDtlState.activeTab = v; });
    watch(() => uiState.tabMode2, v => { window._odClaimDtlState.tabMode = v; });

    /* showTab — 표시 */
    const showTab = (id) => uiState.tabMode2 !== 'tab' || uiState.activeTab === id;

    /* fmt — 포맷 */
    const fmt = (n) => NumbercoUtil.cofWon(Number(n || 0));

    const CLAIM_TYPE_COLOR = coConsts.CLAIM_TYPE_COLOR;
    /* fnTypeColor — 코드/한글 어느 쪽이 들어와도 색상 */
    const fnTypeColor = () => CLAIM_TYPE_COLOR[form.claimTypeCd] || CLAIM_TYPE_COLOR[CLAIM_TYPE_LABEL[form.claimTypeCd]] || '#9ca3af';

    /* isExpanded — 여부 확인 */
    const isExpanded = (i) => expandedItems.has(i);
    /* fnItemExpanded — 유틸 */
    const fnItemExpanded = (row, i) => isExpanded(i) && fnTypeKey() === 'EXCHANGE';
    const cfAllExpanded = computed(() => claimItems.length > 0 && window.safeArrayUtils.safeEvery(claimItems, (_,i) => expandedItems.has(i)));
    const cfIsExchange = computed(() => fnTypeKey() === 'EXCHANGE');

    watch(claimItems, (list) => { expandedItems.clear(); list.forEach((_,i) => expandedItems.add(i)); });

    /* getExchangedItem — 교환 요청 대상 정보 반환 (new_* 실데이터 기반) */
    const getExchangedItem = (it) => {
      if (fnTypeKey() !== 'EXCHANGE') { return {}; }
      return {
        prodNm: it.newProdNm || '-',
        prodOption: it.newProdOption || '-',
        qty: it.newQty != null ? it.newQty : '-',
        unitPrice: it.newUnitPrice != null ? it.newUnitPrice : null,
        prodId: it.newProdId || null,
        prodSkuId: it.newProdSkuId || null,
        prodOpt1Id: it.newProdOpt1Id || null,
        prodOpt2Id: it.newProdOpt2Id || null,
        courier: form.exchangeCourierCd || null,
        trackingNo: form.exchangeTrackingNo || null,
      };
    };

    /* trackingUrl — 추적 URL */
    const trackingUrl = (courier, no) => {
      if (!no) { return ''; }
      if (courier === 'CJ대한통운') return 'https://trace.cjlogistics.com/next/tracking.html?wblNo=' + no;
      if (courier === '롯데택배')   return 'https://www.lotteglogis.com/open/tracking?invno=' + no;
      if (courier === '한진택배')   return 'https://www.hanjin.com/kor/CMS/DeliveryMgr/WaybillResult.do?mCode=MN038&wblnumText2=' + no;
      if (courier === '우체국택배') return 'https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?sid1=' + no;
      if (courier === '로젠택배')   return 'https://www.ilogen.com/web/personal/trace/' + no;
      return '';
    };

    /* openTracking — 열기 */
    const openTracking = (courier, no) => {
      const url = trackingUrl(courier, no);
      if (!url) { showToast && showToast('운송장 정보가 없습니다.', 'error'); return; }
      window.open(url, 'dlivTrack', 'width=900,height=760,menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes');
    };

    // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 환불 내역 행: od_refund × od_refund_method 평탄화 (수단별 1행)
    const BANK_METHODS = ['BANK_TRANSFER', 'VBANK'];
    const cfRefundRows = computed(() => refunds.flatMap(r => {
      const ms = r.refundMethods || r.methods || [];
      const base = { refundId: r.refundId, refundTypeCd: r.refundTypeCd, refundDate: r.refundDate || r.regDate };
      if (!ms.length) {
        const pm = r.refundMethodCd || r.payMethodCd || '-';
        return [{ ...base, payMethodCd: pm, refundAmt: r.refundAmt, refundStatusCd: r.refundStatusCd, pgResponse: r.pgResponse || '', pgRefundId: r.pgRefundId || '',
          account: [r.refundBankCd, r.refundAccountNo, r.refundAccountNm].filter(Boolean).join(' '),
          _canComplete: BANK_METHODS.includes(pm) && r.refundStatusCd === 'PENDING' }];
      }
      return ms.map(m => {
        const st = m.refundStatusCd || r.refundStatusCd;
        return { ...base, refundMethodId: m.refundMethodId, payMethodCd: m.payMethodCd || '-', refundAmt: m.refundAmt, refundStatusCd: st,
          pgResponse: m.pgResponse || '', pgRefundId: m.pgRefundId || '',
          account: [m.refundBankCd || r.refundBankCd, m.refundAccountNo || r.refundAccountNo, m.refundAccountNm || r.refundAccountNm].filter(Boolean).join(' '),
          refundDate: m.refundDate || base.refundDate,
          _canComplete: BANK_METHODS.includes(m.payMethodCd) && st === 'PENDING' };
      });
    }));
    const cfStatusHistList = computed(() => {
      if (!form.claimId) { return []; }
      const d = coUtil.cofYmd(form.requestDate) || '-';
      return [
        { date: d+' 09:10', user:'회원',   from:'-',           to: form.claimTypeCd+'요청', memo: form.claimTypeCd+' 접수' },
        { date: d+' 11:30', user:'bo',  from: form.claimTypeCd+'요청', to:'처리중',        memo:'검토 후 처리 시작' },
        { date: d+' 15:00', user:'bo',  from:'처리중',      to: form.claimStatusCd,  memo:'상태 갱신' },
      ];
    });
    const cfEditHistList = computed(() => form.claimId ? [
      { date: coUtil.cofYmd(form.requestDate)+' 10:00', user:'bo', field:'사유',      before:'-', after: form.reasonCd || '-' },
      { date: coUtil.cofYmd(form.requestDate)+' 12:20', user:'bo', field:'환불금액',  before:'0', after: (form.refundAmt||0).toLocaleString() },
    ] : []);
    /* tabs — 탭 정의 (BoTabBar 데이터, reactive) */
    const tabs = reactive([
      { id:'info',     label:'상세정보',      icon:'📋' },
      { id:'items',    label:'클레임 품목',   icon:'↩', get count() { return claimItems.length; } },
      { id:'refunds',  label:'환불 내역',     icon:'💳', get count() { return cfRefundRows.value.length; } },
      { id:'hist',     label:'상태변경이력',  icon:'🕒', get count() { return cfStatusHistList.value.length; } },
      { id:'editHist', label:'정보수정이력',  icon:'📝', get count() { return cfEditHistList.value.length; } },
    ]);

    // dtlMode: 'view'이면 읽기전용, 'new'/'edit'이면 편집
    const cfDtlMode = computed(() => props.dtlMode === 'view');

    /* fnShareUrl — 이 클레임 상세를 가리키는 독립 새창 딥링크 URL 생성 */
    const fnShareUrl = () => {
      const qs = new URLSearchParams();
      qs.set('page', 'odClaimDtl');
      qs.set('id', form.claimId);
      qs.set('embed', '1');
      return `${window.location.origin}${window.location.pathname}?${qs.toString()}`;
    };
    /* handleShareKakao — 카카오톡 공유(피드 카드, 상세보기 모드 전용) */
    const handleShareKakao = () => {
      try {
        window.coExtSdk.shareKakao({
          title: `클레임 ${form.claimId} - ShopJoy BO`,
          description: form.reasonDetail || form.claimTypeCd || '',
          imageUrl: window.location.origin + '/assets/img/shopjoy-share-og.png',
          url: fnShareUrl(),
        });
      } catch (e) {
        showToast(e.message || '카카오톡 공유를 열 수 없습니다.', 'error', 0);
      }
    };
    /* handleCopyLink — 순수 URL만 클립보드에 복사 (카카오톡 카드 없음) */
    const handleCopyLink = async () => {
      try {
        await navigator.clipboard.writeText(fnShareUrl());
        showToast('링크가 복사되었습니다.', 'success');
      } catch (e) {
        showToast(e.message || '링크 복사에 실패했습니다.', 'error', 0);
      }
    };
    /* pdfAreaRef — 클레임 상세 카드 캡처 대상. handleExportPdf — PDF 다운로드(상세보기 모드 전용) */
    const pdfAreaRef = ref(null);
    const pdfExporting = ref(false);
    const handleExportPdf = async () => {
      pdfExporting.value = true;
      try {
        const filename = coUtil.cofBuildExportFilename(`클레임상세_${form.claimId}.pdf`);
        await window.boUtil.bofExportPdf(pdfAreaRef.value, filename, showToast);
      } finally {
        pdfExporting.value = false;
      }
    };

    /* ##### [05] 사용자 함수 (헬퍼 / 카운트 / 렌더 / 컬럼정의) #################### */

    const columns = {};
    // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 환불 내역 그리드 (수단·금액·상태·PG 응답 요약 + [송금완료])
    const REFUND_STATUS_LABEL = { PENDING: '대기', COMPLT: '완료', FAILED: '실패' };
    const REFUND_TYPE_LABEL   = { CANCEL: '취소', RETURN: '반품', PARTIAL: '부분', EXTRA: '추가' };
    columns.refundGrid = [
      { key: 'refundId',      label: '환불ID', style: 'width:150px;', cellStyle: 'font-family:monospace;font-size:11px;' },
      { key: 'refundTypeCd',  label: '구분', style: 'width:60px;text-align:center;', align: 'center', fmt: (v) => REFUND_TYPE_LABEL[v] || v || '-' },
      { key: 'payMethodCd',   label: '환불수단', style: 'width:110px;', fmt: (v) => v === 'CACHE' ? 'CACHE (캐시 복원)' : (v || '-') },
      { key: 'refundAmt',     label: '환불금액', style: 'width:100px;text-align:right;', align: 'right', fmt: (v) => fmt(v), cellStyle: 'font-weight:700;' },
      { key: 'refundStatusCd', label: '환불상태', style: 'width:70px;text-align:center;', align: 'center',
        fmt: (v) => REFUND_STATUS_LABEL[v] || v || '-',
        cellInnerStyle: (v) => 'font-size:10.5px;padding:2px 8px;border-radius:8px;font-weight:700;'
          + (v === 'COMPLT' ? 'background:#dcfce7;color:#15803d;' : v === 'FAILED' ? 'background:#fee2e2;color:#b91c1c;' : 'background:#fef9c3;color:#92400e;') },
      { key: 'account',       label: '환불계좌', fmt: (v) => v || '-', cellStyle: 'font-size:11px;' },
      { key: 'pgRefundId',    label: 'PG취소키', fmt: (v) => v || '-', cellStyle: 'font-family:monospace;font-size:10.5px;color:#555;' },
      { key: 'pgResponse',    label: 'PG응답 요약', cellStyle: 'font-size:10.5px;color:#555;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;',
        fmt: (v) => { const s = typeof v === 'string' ? v : (v ? JSON.stringify(v) : ''); return s ? (s.length > 80 ? s.slice(0, 80) + '…' : s) : '-'; } },
      { key: 'refundDate',    label: '처리일시', style: 'width:130px;', fmt: (v) => v ? String(v).replace('T', ' ').slice(0, 16) : '-' },
    ];

    /* 정보수정이력 탭 그리드 컬럼 */
    columns.editHistGrid = [
      { key: 'date',   label: '수정일시', style: 'width:140px;' },
      { key: 'user',   label: '수정자',   style: 'width:100px;' },
      { key: 'field',  label: '항목',     style: 'width:120px;' },
      { key: 'before', label: '변경 전', cellStyle: 'color:#888;' },
      { key: 'after',  label: '변경 후', cellStyle: 'color:#e8587a;font-weight:600;' },
    ];

    // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 클레임 품목 그리드: 상품명·SKU·수량·단가·금액·환불액·교환SKU/수량 (번호 컬럼은 bo-grid 자동)
    columns.claimItemGrid = [
      { key: 'prodNm',       label: '상품명' },
      { key: 'prodSkuId',    label: 'SKU',      style: 'width:130px;', cellStyle: 'font-family:monospace;font-size:11px;color:#555;', fmt: v => v || '-' },
      { key: 'claimQty',     label: '수량',     style: 'width:50px;text-align:center;', align: 'center', fmt: (v) => v || 1, cellStyle: 'font-weight:600;' },
      { key: 'unitPrice',    label: '단가',     style: 'width:90px;text-align:right;', align: 'right', fmt: (v) => fmt(v), cellStyle: 'color:#666;' },
      { key: 'itemAmt',      label: '금액',     style: 'width:100px;text-align:right;', align: 'right', fmt: (v) => fmt(v), cellStyle: 'font-weight:700;color:#1a1a1a;' },
      { key: 'refundAmt',    label: '환불액',   style: 'width:100px;text-align:right;', align: 'right', fmt: (v) => fmt(v), cellStyle: 'font-weight:700;color:#059669;' },
      { key: 'newProdSkuId', label: '교환SKU',  style: 'width:130px;', cellStyle: 'font-family:monospace;font-size:11px;color:#1e40af;',
        fmt: (v, row) => cfIsExchange.value ? (v || '-') : '' },
      { key: 'newQty',       label: '교환수량', style: 'width:60px;text-align:center;', align: 'center',
        fmt: (v) => cfIsExchange.value ? (v != null ? v : '-') : '' },
      { key: 'claimStatus',  label: '클레임상태', style: 'width:110px;text-align:center;', align: 'center',
        fmt: () => `${CLAIM_TYPE_LABEL[fnTypeKey()] || form.claimTypeCd || ''} · ${fnStatusLabel(form.claimStatusCd)}`,
        cellInnerStyle: () => `font-size:10px;padding:2px 8px;border-radius:8px;color:#fff;font-weight:700;background:${fnTypeColor()};` },
    ];

    // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 신규 생성: 주문항목 + 수량 스텝퍼 그리드 (claimQty/newProdSkuId 는 #cell 슬롯)
    columns.newItemGrid = [
      { key: 'prodNm',       label: '상품명', fmt: (v, row) => row.prodOption ? `${v} (${row.prodOption})` : v },
      { key: 'prodSkuId',    label: 'SKU',    style: 'width:130px;', cellStyle: 'font-family:monospace;font-size:11px;color:#555;', fmt: v => v || '-' },
      { key: 'orderItemStatusCd', label: '항목상태', style: 'width:90px;text-align:center;', align: 'center', fmt: v => v || '-',
        cellInnerStyle: () => 'font-size:10.5px;padding:2px 7px;border-radius:8px;background:#eef4ff;color:#1e40af;font-weight:600;' },
      { key: 'orderQty',     label: '주문수량', style: 'width:60px;text-align:center;', align: 'center' },
      { key: '_maxQty',      label: '남은수량', style: 'width:60px;text-align:center;', align: 'center', cellStyle: 'font-weight:700;color:#c2410c;' },
      { key: 'unitPrice',    label: '단가',     style: 'width:90px;text-align:right;', align: 'right', fmt: (v) => fmt(v), cellStyle: 'color:#666;' },
      { key: 'claimQty',     label: '클레임수량', style: 'width:130px;text-align:center;', align: 'center' },
      { key: 'newProdSkuId', label: '교환SKU',  style: 'width:170px;' },
      { key: '_amt',         label: '금액',     style: 'width:100px;text-align:right;', align: 'right',
        fmt: (v, row) => fmt((row.unitPrice || 0) * (row.claimQty || 0)), cellStyle: 'font-weight:700;' },
    ];

    // 기본 폼 (cols=3 한 줄 3필드 + 상세 사유는 한 줄 전체)
    columns.baseForm = [
      // 1행: 클레임ID / 주문ID / 회원ID
      { key: 'claimId',      label: '클레임ID', type: 'text', readonly: true, placeholder: '(서버 자동 생성)',
        visible: () => !cfIsNew.value },
      { key: 'orderId',      label: '주문ID', type: 'slot', name: 'orderId', required: true },
      { key: 'memberId',     label: '회원ID', type: 'slot', name: 'memberId', visible: () => !cfIsNew.value },
      // 2행: 회원명 / 클레임유형 / 처리상태
      { key: 'memberNm',     label: '회원명', type: 'text', readonly: true, placeholder: '(주문에서 자동)' },
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 유형은 신규에서만 선택, 기존은 금액이 유형에 묶여 있어 읽기전용
      { key: 'claimTypeCd',  label: '클레임 유형', type: 'select', nullable: false, required: true,
        options: () => (codes.claim_types && codes.claim_types.length) ? codes.claim_types : Object.keys(CLAIM_TYPE_LABEL).map(k => ({ value: k, label: CLAIM_TYPE_LABEL[k] })),
        visible: () => cfIsNew.value,
        onChange: () => { preview.data = null; } },
      { key: 'claimTypeCd',  label: '클레임 유형', type: 'readonly', visible: () => !cfIsNew.value,
        fmt: (v) => `${CLAIM_TYPE_LABEL[v] || v || '-'} (${v || '-'})` },
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 상태는 전이 버튼으로만 변경(읽기전용)
      { key: 'claimStatusCd', label: '처리 상태', type: 'readonly', fmt: (v) => `${fnStatusLabel(v)} (${v || '-'})` },
      // 3행: 사유 / 신청일 / 처리일
      { key: 'reasonCd',     label: '사유', type: 'select', nullable: false, required: true, options: CLAIM_REASON_CDS,
        visible: () => cfIsNew.value, onChange: () => { preview.data = null; } },
      { key: 'reasonCd',     label: '사유', type: 'readonly', visible: () => !cfIsNew.value,
        fmt: (v, f) => `${fnReasonLabel(v)}${f.customerFaultYn ? ' · 고객귀책 ' + f.customerFaultYn : ''}` },
      { key: 'requestDate',  label: '신청일', type: 'readonly', visible: () => !cfIsNew.value, fmt: (v) => v ? String(v).replace('T', ' ').slice(0, 16) : '-' },
      { key: 'procDate',     label: '완료 처리일', type: 'readonly', visible: () => !cfIsNew.value, fmt: (v) => v ? String(v).replace('T', ' ').slice(0, 16) : '-' },
      // 4행: 상세 사유 (한 줄 전체)
      { key: 'reasonDetail', label: '상세 사유', type: 'textarea', rows: 2, colSpan: 3 },
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 신규: 무통장/가상계좌 주문의 취소·반품만 환불계좌 (주문 refund_* 있으면 생략 가능)
      { type: 'group', label: '환불계좌 (무통장/가상계좌 주문의 취소·반품만)', visible: () => cfIsNew.value },
      { key: 'refundBankCd',    label: '환불 은행',   type: 'text', placeholder: '은행코드/은행명', visible: () => cfIsNew.value },
      { key: 'refundAccountNo', label: '환불 계좌번호', type: 'text', mono: true, visible: () => cfIsNew.value },
      { key: 'refundAccountNm', label: '예금주',     type: 'text', visible: () => cfIsNew.value },
      // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 서버 계산 금액(§4) 읽기전용
      { type: 'group', label: '금액 (서버 계산 · 수정 불가)', visible: () => !cfIsNew.value },
      { key: 'refundProdAmt',     label: '상품금액',          type: 'readonly', visible: () => !cfIsNew.value, fmt: (v) => fmt(v) },
      { key: 'refundCouponAmt',   label: '쿠폰 차감',         type: 'readonly', visible: () => !cfIsNew.value, fmt: (v) => v ? '-' + fmt(v) : fmt(0) },
      { key: 'refundSaveAmt',     label: '적립/캐시 복원',    type: 'readonly', visible: () => !cfIsNew.value, fmt: (v) => fmt(v) },
      { key: 'refundShippingAmt', label: '배송비 환불(순)',   type: 'readonly', visible: () => !cfIsNew.value, fmt: (v) => fmt(v) },
      { key: 'returnShippingFee', label: '반품/교환 배송비',  type: 'readonly', visible: () => !cfIsNew.value, fmt: (v) => v ? '-' + fmt(v) : fmt(0) },
      { key: 'refundAmt',         label: '환불액 (현금성)',   type: 'readonly', html: true, visible: () => !cfIsNew.value,
        fmt: (v) => `<b style="color:#059669;font-size:13px;">${fmt(v)}</b>` },
      { key: 'refundMethodCd',    label: '환불수단',          type: 'readonly', visible: () => !cfIsNew.value, fmt: (v) => v || '-' },
      { key: 'fullClaimYn',       label: '전체 클레임',       type: 'readonly', visible: () => !cfIsNew.value, fmt: (v) => v === 'Y' ? 'Y (주문 전량 소진)' : (v || 'N') },
      { key: 'customerFaultYn',   label: '고객 귀책',         type: 'readonly', visible: () => !cfIsNew.value, fmt: (v) => v || '-' },
      { key: 'memo',              label: '메모',              type: 'textarea', rows: 2, colSpan: 3, visible: () => !cfIsNew.value },
    ];

    /* ##### [06] 클레임 금액 계산 ##################################################### */

    // 2026-10-03 클레임/부분환불 계약(od.13.impl) — 자체 계산 삭제. 모달(OdClaimCalcModal)이 claimId 로 직접 조회/preview 한다
    const dtlCalcDialog = reactive({ show: false, claimId: '' });
    const handleOpenDtlCalc = function () {
      dtlCalcDialog.claimId = form.claimId || props.dtlId;
      dtlCalcDialog.show    = true;
    };

    /* ##### [07] return (템플릿 노출) ############################################## */

    /* claimItemGridRowDetail — 클레임항목 행 펼침 BoFormArea 컬럼 (교환품 정보) */
    columns.claimItemGridRowDetail = [
      { key: '_exchLabel',  label: '교환품',   type: 'readonly', html: true,
        fmt: () => `<span style="font-size:11px;padding:2px 8px;border-radius:10px;background:#3b82f6;color:#fff;font-weight:800;">↔ 교환 요청</span>` },
      { key: '_exchProd',   label: '교환 상품명', type: 'readonly', html: true,
        fmt: (v, row) => `<b style="color:#1e40af;">${getExchangedItem(row).prodNm || '-'}</b>` },
      { key: '_exchSku',    label: '교환 SKU',   type: 'readonly',
        fmt: (v, row) => getExchangedItem(row).prodSkuId || '-' },
      { key: '_exchOption', label: '교환 옵션',   type: 'readonly',
        fmt: (v, row) => getExchangedItem(row).prodOption || '-' },
      { key: '_exchQty',    label: '교환 수량',   type: 'readonly',
        fmt: (v, row) => getExchangedItem(row).qty != null ? getExchangedItem(row).qty : '-' },
      { key: '_exchPrice',  label: '교환 단가',   type: 'readonly',
        fmt: (v, row) => getExchangedItem(row).unitPrice != null ? fmt(getExchangedItem(row).unitPrice) : '-' },
      { key: '_tracking',   label: '발송추적',    type: 'slot', name: 'tracking',
        visible: (row) => !!getExchangedItem(row).courier },
    ];

    return {
      columns,
      handleShareKakao, handleCopyLink,                                    // 카카오톡 공유 / 링크 복사 (상세보기)
      pdfAreaRef, pdfExporting, handleExportPdf,                           // PDF 다운로드 (항상 노출)
      form, errors, claimItems, refunds, activeTab, tabMode2, uiState,     // 상태 / 데이터
      orderPick, memberPick,                                               // 모달 상태
      handleBtnAction, handleSelectAction, fnCallbackModal,               // dispatch (모든 이벤트 / 액션 라우팅)
      cfIsNew, cfDtlMode, cfClaimSteps, cfCurrentStepIdx, cfIsFinal, cfStatusActions, tabs, cfEditHistList, // computed
      cfRefundRows, cfStatusHistList, cfAllExpanded, cfIsExchange,        // computed
      CLAIM_TYPE_COLOR, CLAIM_TYPE_LABEL, // 상수
      fmt, showTab, isExpanded, fnItemExpanded, getExchangedItem, fnStatusLabel, fnTypeColor, // 헬퍼
      newItems, newItemsState, preview, handleQtyInput,                    // 2026-10-03 신규 생성(품목·미리보기)
      showRefModal,                                                                                       // 모달 (template 직접 참조)
      dtlCalcDialog, handleOpenDtlCalc,                                                                   // 환불 계산 모달
    };
  },
  template: /* html */`
<div ref="pdfAreaRef">
<!-- ===== ■. 상세 카드 (제목 + 탭바 + 탭컨텐츠를 한 영역으로) ===================== -->
<bo-container :title="!active ? '클레임 상세' : (cfIsNew ? '클레임 등록' : (cfDtlMode ? '클레임 상세' : '클레임 수정'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.claimId)">
  <template #toolbar-actions>
    <button v-if="active ? (cfDtlMode ? !cfIsNew : false) : false" class="btn btn_link" title="링크 공유(URL만)" @click="handleCopyLink">🔗</button>
    <button v-if="active ? (cfDtlMode ? !cfIsNew : false) : false" class="btn btn_kakao" title="카카오톡 공유" @click="handleShareKakao">💬</button>
    <button class="btn btn_pdf" title="PDF 다운로드" :disabled="pdfExporting" @click="handleExportPdf">
      <span v-if="pdfExporting">⏳</span>
      <svg v-else width="18" height="20" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2 H20 L28 10 V34 H4 Z" fill="#fff" stroke="#c2410c" stroke-width="1.5"/>
        <path d="M20 2 V10 H28 Z" fill="#f3d4c0"/>
        <rect x="2" y="20" width="28" height="12" rx="2" fill="#e2372c"/>
        <text x="16" y="29" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">PDF</text>
      </svg>
    </button>
  </template>
  <!-- ===== ■.■. 탭바 ==================================================== -->
  <bo-tab-bar :tabs="tabs" :tab="activeTab" :tab-mode="tabMode2"
    @tab-select="id => handleBtnAction('tab-change', id)"
    @mode-select="m => handleBtnAction('viewMode-change', m)" />
  <!-- ===== □. 탭바 ====================================================== -->
  <!-- ===== ■. 탭 컨텐츠 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <div v-if="showTab('info')" class="dtl-pane">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">📋 상세정보</div>
      <!-- ===== ■.■.■. 클레임 진행 상태 흐름 (2026-10-03 §1 코드 기준) ================ -->
      <div style="margin-bottom:20px;padding:16px 18px;background:#f6f6f6;border-radius:10px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;">
          <span :style="{
            fontSize:'11px',padding:'3px 10px',borderRadius:'10px',color:'#fff',fontWeight:800,
            background: fnTypeColor(),
            }">
            ↩ {{ CLAIM_TYPE_LABEL[form.claimTypeCd] || form.claimTypeCd || (cfIsNew ? '신규 클레임' : '') }}
          </span>
          <span style="font-size:13px;font-weight:700;color:#222;">{{ form.claimId }}</span>
          <span v-if="cfIsFinal" :style="'font-size:11px;padding:2px 9px;border-radius:8px;font-weight:800;' + (form.claimStatusCd==='COMPLT' ? 'background:#dcfce7;color:#15803d;' : 'background:#fee2e2;color:#b91c1c;')">
            {{ fnStatusLabel(form.claimStatusCd) }} (종결)
          </span>
          <span v-if="form.requestDate" style="font-size:11px;color:#888;">신청일: {{ String(form.requestDate).replace('T',' ').slice(0,16) }}</span>
          <span v-if="form.reasonDetail" style="font-size:11px;color:#888;">사유: {{ form.reasonDetail }}</span>
          <button v-if="!cfIsNew" class="btn btn-xs" style="margin-left:auto;background:#059669;color:#fff;border:none;padding:2px 8px;" @click="handleBtnAction('calc-open')">💰 계산</button>
        </div>
        <div style="display:flex;align-items:flex-start;overflow-x:auto;">
          <template v-for="(step, idx) in cfClaimSteps" :key="step">
            <div style="display:flex;flex-direction:column;align-items:center;min-width:80px;flex:1;">
              <div :style="{
                width: idx === cfCurrentStepIdx ? '14px' : '10px',
                height: idx === cfCurrentStepIdx ? '14px' : '10px',
                borderRadius:'50%', marginBottom:'6px', flexShrink:0, transition:'all .15s',
                boxShadow: idx === cfCurrentStepIdx ? '0 0 0 3px '+fnTypeColor()+'40' : 'none',
                background: idx <= cfCurrentStepIdx ? fnTypeColor() : '#bbb',
                }"></div>
              <div :style="{
                fontSize:'11.5px', fontWeight: idx === cfCurrentStepIdx ? 800 : 600,
                color: idx === cfCurrentStepIdx ? fnTypeColor() : (idx < cfCurrentStepIdx ? '#444' : '#bbb'),
                whiteSpace:'nowrap', textAlign:'center',
                }">
                {{ fnStatusLabel(step) }}
              </div>
              <span v-if="step==='IN_PICKUP' ? (form.returnTrackingNo) : false" @click="handleBtnAction('tracking-open', { courier: form.returnCourierCd, trackingNo: form.returnTrackingNo })" title="수거 배송조회" style="margin-top:4px;padding:1px 7px;border:1px solid #fed7aa;background:#fff7ed;color:#c2410c;border-radius:4px;font-size:0.7rem;font-weight:700;user-select:none;">
                {{ (form.returnCourierCd||'').replace('대한통운','').replace('택배','') || 'CJ' }}수거 🔍
              </span>
              <span v-if="step==='COMPLT' ? (form.exchangeTrackingNo) : false" @click="handleBtnAction('tracking-open', { courier: form.exchangeCourierCd, trackingNo: form.exchangeTrackingNo })" title="발송 배송조회" style="margin-top:4px;padding:1px 7px;border:1px solid #93c5fd;background:#dbeafe;color:#1d4ed8;border-radius:4px;font-size:0.7rem;font-weight:700;user-select:none;">
                {{ (form.exchangeCourierCd||'').replace('대한통운','').replace('택배','') || 'CJ' }}발송 🔍
              </span>
            </div>
            <div v-if="idx < cfClaimSteps.length - 1"
              :style="{flex:'1', height:'2px', minWidth:'12px', marginTop:'6px',
              background: idx < cfCurrentStepIdx ? fnTypeColor() : '#bbb'}"></div>
          </template>
        </div>
        <!-- ===== ■.■.■.■. 상태 전이 버튼 (2026-10-03 §1: 다음 단계(앞으로만) / 반려 / 철회) =============== -->
        <div v-if="cfStatusActions.length" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:14px;padding-top:12px;border-top:1px dashed #ddd;">
          <span style="font-size:11px;color:#666;font-weight:700;margin-right:4px;">상태 변경 →</span>
          <button v-for="a in cfStatusActions" :key="a.cd" class="btn btn-sm" :style="a.style + 'padding:4px 12px;'"
            :disabled="uiState.statusSaving" :title="a.cd" @click="handleBtnAction('status-change', a.cd)">
            {{ a.label }}
          </button>
          <span v-if="uiState.statusSaving" style="font-size:11px;color:#94a3b8;">⏳ 처리 중...</span>
        </div>
      </div>
      <!-- ===== ■.■.■. 기본정보 폼 (BoFormArea 자동 렌더) =========================== -->
      <!-- ===== ■.■.■. 폼 영역 ================================================ -->
      <bo-form-area plain-readonly :columns="columns.baseForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="active" :show-cancel="!cfIsNew" :show-delete="false"
        :save-label="cfIsNew ? '등록(클레임 생성)' : '저장'"
        @save="handleBtnAction('form-save')"
        @cancel="handleBtnAction('form-cancel')"
        @edit="handleBtnAction('form-edit')"
        @close="handleBtnAction('form-close')">
        <!-- ===== ■.■.■.■. 주문ID + 선택/초기화/보기 ===================================== -->
        <template #orderId>
          <div style="display:flex;gap:6px;align-items:center;">
            <input class="form-control" v-model="form.orderId" placeholder="주문 선택 🔍" :readonly="cfDtlMode ? true : !cfIsNew" :class="errors.orderId ? 'is-invalid' : ''" style="flex:1;"
              @input="form.orderId && errors.orderId ? delete errors.orderId : null" />
            <span v-if="cfDtlMode ? false : cfIsNew" style="display:inline-flex;align-items:center;">
              <button class="btn btn-sm btn-secondary" style="padding:2px 7px;" @click="handleBtnAction('orderPickModal-open')" title="주문 선택">🔍</button>
              <button v-if="form.orderId" class="btn btn-sm btn-secondary" style="padding:2px 7px;margin-left:2px;" @click="handleBtnAction('newItems-load')" title="이 주문의 품목 불러오기">📦</button>
              <button v-if="form.orderId" type="button" style="background:none;border:none;padding:0 4px;color:#bbb;cursor:pointer;font-size:11px;line-height:1;" @click="handleBtnAction('orderId-clear')" title="초기화">x</button>
            </span>
            <span v-if="form.orderId" class="ref-link" @click="handleBtnAction('form-orderRef')">보기</span>
          </div>
          <span v-if="errors.orderId" class="field-error">{{ errors.orderId }}</span>
        </template>
        <!-- ===== ■.■.■.■. 회원ID + 보기 (서버가 주문에서 채움) ===================================== -->
        <template #memberId>
          <div style="display:flex;gap:6px;align-items:center;">
            <input class="form-control" v-model="form.memberId" placeholder="(주문에서 자동)" readonly style="flex:1;background:#f5f5f5;" />
            <span v-if="form.memberId" class="ref-link" @click="handleBtnAction('form-memberRef')">보기</span>
          </div>
        </template>
      </bo-form-area>
      <!-- ===== ■.■.■. 신규 생성: 품목·수량 스텝퍼 + 금액 미리보기 (2026-10-03 /preview → /create) ======= -->
      <div v-if="cfIsNew ? active : false" style="margin-top:16px;padding:14px 16px;background:#fbfbfb;border:1px solid #e5e7eb;border-radius:10px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
          <span style="font-size:13px;font-weight:800;color:#222;">📦 클레임 품목</span>
          <span v-if="newItemsState.orderId" style="font-size:11px;color:#1d4ed8;font-family:monospace;">{{ newItemsState.orderId }}</span>
          <span style="font-size:11px;color:#888;">남은수량 = 주문수량 − 취소수량 − 진행 중 클레임 수량 (서버 재검증)</span>
          <span style="margin-left:auto;display:inline-flex;gap:6px;">
            <button class="btn btn-sm btn-secondary" :disabled="!form.orderId || newItemsState.loading" @click="handleBtnAction('newItems-load')">{{ newItemsState.loading ? '⏳' : '🔄 품목 불러오기' }}</button>
            <button class="btn btn-sm" style="background:#059669;color:#fff;border:none;" :disabled="preview.loading || !newItems.length" @click="handleBtnAction('newItems-preview')">{{ preview.loading ? '⏳ 계산 중' : '💰 금액 확인' }}</button>
          </span>
        </div>
        <bo-grid bare :columns="columns.newItemGrid" :rows="newItems"
          :empty-text="form.orderId ? '품목이 없습니다. [품목 불러오기]를 눌러주세요.' : '주문을 선택하면 품목이 표시됩니다.'">
          <template #cell-claimQty="{ row }">
            <td style="text-align:center;">
              <div style="display:inline-flex;align-items:center;gap:3px;">
                <button type="button" class="btn btn-xs btn-secondary" style="padding:0 7px;line-height:20px;" :disabled="row.claimQty <= 0" @click="handleBtnAction('newItems-step', { row, delta: -1 })">−</button>
                <input type="number" :value="row.claimQty" min="0" :max="row._maxQty" style="width:48px;text-align:center;border:1px solid #cbd5e1;border-radius:5px;padding:2px 4px;font-size:12px;font-weight:700;"
                  @input="e => handleQtyInput(row, e)" />
                <button type="button" class="btn btn-xs btn-secondary" style="padding:0 7px;line-height:20px;" :disabled="row.claimQty >= row._maxQty" @click="handleBtnAction('newItems-step', { row, delta: 1 })">+</button>
              </div>
            </td>
          </template>
          <template #cell-newProdSkuId="{ row }">
            <td>
              <input v-if="cfIsExchange" class="form-control" v-model="row.newProdSkuId" placeholder="교환 SKU ID (같은 상품)" style="font-family:monospace;font-size:11px;padding:3px 6px;" :disabled="row.claimQty <= 0" @input="preview.data = null" />
              <span v-else style="color:#ccc;font-size:11px;">-</span>
            </td>
          </template>
          <template #tfoot>
            <tr style="background:#fafafa;font-weight:700;">
              <td style="width:36px;"></td>
              <td colspan="7" style="text-align:right;color:#555;">선택 수량 합계 {{ newItems.reduce((s,x)=>s+Number(x.claimQty||0),0) }}개 · 상품금액(단가×수량, 서버 재계산 전)</td>
              <td colspan="2" style="text-align:right;color:#1a1a1a;">{{ fmt(newItems.reduce((s,x)=>s+(x.unitPrice||0)*(x.claimQty||0),0)) }}</td>
            </tr>
          </template>
        </bo-grid>
        <!-- 미리보기 결과 (§4 필드) -->
        <div v-if="preview.data" style="margin-top:12px;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;padding:12px 14px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;font-size:12px;">
          <div><div style="color:#6b7280;font-size:10.5px;">상품금액</div><b>{{ fmt(preview.data.refundProdAmt) }}</b></div>
          <div><div style="color:#6b7280;font-size:10.5px;">쿠폰 차감</div><b style="color:#dc2626;">-{{ fmt(preview.data.refundCouponAmt) }}</b></div>
          <div><div style="color:#6b7280;font-size:10.5px;">적립/캐시 복원</div><b style="color:#2563eb;">{{ fmt(preview.data.refundSaveAmt) }}</b></div>
          <div><div style="color:#6b7280;font-size:10.5px;">배송비 환불(순)</div><b>{{ fmt(preview.data.refundShippingAmt) }}</b></div>
          <div><div style="color:#6b7280;font-size:10.5px;">반품/교환 배송비</div><b style="color:#dc2626;">-{{ fmt(preview.data.returnShippingFee) }}</b></div>
          <div><div style="color:#6b7280;font-size:10.5px;">환불 예정액 (현금성)</div><b style="color:#059669;font-size:14px;">{{ fmt(preview.data.refundAmt) }}</b></div>
          <div><div style="color:#6b7280;font-size:10.5px;">전체 클레임 / 고객 귀책</div><b>{{ preview.data.fullClaimYn || '-' }} / {{ preview.data.customerFaultYn || '-' }}</b></div>
          <div style="grid-column:1/-1;font-size:10.5px;color:#6b7280;">※ 미리보기(저장 안 함). [등록(클레임 생성)] 을 누르면 같은 본문으로 /create 호출 → 상태 요청(REQUESTED)으로 생성됩니다.</div>
        </div>
        <div v-else-if="preview.error" style="margin-top:10px;padding:8px 12px;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;font-size:11.5px;color:#b91c1c;">{{ preview.error }}</div>
      </div>
    </div>
    <!-- ===== ■.■. 클레임 품목 탭 ============================================= -->
    <div v-if="showTab('items')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">↩ 클레임 품목 <span class="tab-count"> {{ claimItems.length }} </span></div>
      <div v-if="cfIsExchange" style="display:flex;justify-content:flex-end;margin-bottom:10px;">
        <button class="btn btn-secondary btn-sm" @click="handleBtnAction('claimItems-toggleExpandAll')">
          {{ cfAllExpanded ? '▲ 교환품 모두접기' : '▼ 교환품 모두펼치기' }}
        </button>
      </div>
      <!-- ===== ■.■.■. 목록 영역 =============================================== -->
      <bo-grid bare :columns="columns.claimItemGrid" :rows="claimItems"
        :is-expanded="fnItemExpanded"
        empty-text="클레임 품목 정보가 없습니다.">
        <template #cell-prodNm="{ row, idx }">
          <td style="font-size:12px;">
            <span v-if="cfIsExchange" @click="handleSelectAction('claimItems-rowToggleExpand', idx)" style="font-size:11px;color:#3b82f6;font-weight:800;user-select:none;margin-right:6px;" :title="isExpanded(idx)?'교환품 숨기기':'교환품 보기'">
              {{ isExpanded(idx) ? '▼' : '▶' }}
            </span>
            {{ row.prodNm }}
            <span v-if="row.prodOption" style="color:#888;font-size:11px;"> ({{ row.prodOption }})</span>
          </td>
        </template>
        <template #row-expand="{ row, colspan }">
          <td :colspan="colspan" style="padding:10px 14px;background:#f0f7ff;">
            <bo-form-area plain-readonly :columns="columns.claimItemGridRowDetail" :form="row" :cols="3" compact readonly label-left :show-actions="false">
              <template #tracking>
                <div class="readonly-field" @click="handleBtnAction('tracking-open', { courier: getExchangedItem(row).courier, trackingNo: getExchangedItem(row).trackingNo })" style="padding:2px 8px;border:1px solid #93c5fd;background:#dbeafe;color:#1d4ed8;border-radius:4px;font-size:11px;font-weight:700;display:inline-block;cursor:pointer;">
                  {{ getExchangedItem(row).courier }} · {{ getExchangedItem(row).trackingNo || '-' }} 🔍
                </div>
              </template>
            </bo-form-area>
          </td>
        </template>
        <template #tfoot>
          <tr style="background:#fafafa;font-weight:700;">
            <td style="width:36px;"></td>
            <td colspan="2" style="text-align:right;color:#555;">합계</td>
            <td style="width:50px;text-align:center;">{{ claimItems.reduce((s,x)=>s+Number(x.claimQty||0),0) }}</td>
            <td style="width:90px;"></td>
            <td style="width:100px;text-align:right;color:#1a1a1a;">{{ fmt(claimItems.reduce((s,x)=>s+Number(x.itemAmt||0),0)) }}</td>
            <td style="width:100px;text-align:right;color:#059669;">{{ fmt(claimItems.reduce((s,x)=>s+Number(x.refundAmt||0),0)) }}</td>
            <td colspan="3"></td>
          </tr>
        </template>
      </bo-grid>
    </div>
    <!-- ===== □.□. 클레임 품목 탭 ============================================= -->
    <!-- ===== ■.■. 환불 내역 탭 (2026-10-03 od_refund + od_refund_method) ======================= -->
    <div v-if="showTab('refunds')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">💳 환불 내역 <span class="tab-count"> {{ cfRefundRows.length }} </span></div>
      <div style="font-size:11px;color:#888;margin-bottom:8px;">완료(환불 실행) 시 생성됩니다. 무통장/가상계좌는 PENDING 으로 생기며 운영자가 송금 후 [송금완료] 처리합니다(7일 후 자동완료).</div>
      <!-- ===== ■.■.■. 목록 영역 =============================================== -->
      <bo-grid bare :columns="columns.refundGrid" :rows="cfRefundRows" empty-text="환불 내역이 없습니다. (완료 처리 전)" row-actions>
        <template #row-actions="{ row }">
          <div class="actions">
            <button v-if="row._canComplete" class="btn btn-xs" style="background:#059669;color:#fff;border:none;" title="송금 완료 → COMPLT"
              @click="handleBtnAction('refund-complete', row)">송금완료</button>
            <span v-else style="color:#ccc;font-size:11px;">-</span>
          </div>
        </template>
      </bo-grid>
    </div>
    <!-- ===== □.□. 환불 내역 탭 ================================================ -->
    <!-- ===== ■.■. 상태변경이력 탭 ============================================== -->
    <div v-if="showTab('hist')" class="dtl-pane">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title" style="margin-bottom:10px;padding:0 0 10px 0;">
        🕒 상태변경이력
        <span class="tab-count">{{ cfStatusHistList.length }}</span>
      </div>
      <od-claim-hist :claim-id="form.claimId" :navigate="navigate" />
    </div>
    <!-- ===== □.□. 상태변경이력 탭 ============================================== -->
    <!-- ===== ■.■. 정보수정이력 탭 ============================================== -->
    <div v-if="showTab('editHist')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">📝 정보수정이력 <span class="tab-count"> {{ cfEditHistList.length }} </span></div>
      <!-- ===== ■.■.■. 목록 영역 =============================================== -->
      <bo-grid bare :columns="columns.editHistGrid" :rows="cfEditHistList" empty-text="정보 수정 이력이 없습니다."></bo-grid>
    </div>
  </div>
  <!-- ===== □. 탭 컨텐츠 =================================================== -->
</bo-container>
<!-- ===== □. 상세 카드 (제목 + 탭바 + 탭컨텐츠를 한 영역으로) ===================== -->
</div>
<!-- ===== □.□. 정보수정이력 탭 ============================================== -->
<!-- ===== ■. 주문 선택 모달 ================================================= -->
<div v-if="orderPick.open">
  <bo-cm-popup-modal popup-cmd="cmPopup-order-pick" popup-code="order" :on-callback="fnCallbackModal" @close="handleBtnAction('orderPickModal-close')" />
</div>
<!-- ===== ■. 회원 선택 모달 ================================================= -->
<bo-cm-popup-modal popup-cmd="cmPopup-member-pick" popup-code="member" :show="memberPick.open" :on-callback="fnCallbackModal" @close="handleBtnAction('memberPickModal-close')" />
<!-- ===== ■. 환불 계산 모달 ================================================= -->
<od-claim-calc-modal :show="dtlCalcDialog.show" :claim-id="dtlCalcDialog.claimId" @close="handleBtnAction('calc-close')" />
`
};
