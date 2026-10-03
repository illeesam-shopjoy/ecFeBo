/**
 * OdClaimCalcModal.js — 클레임 계산 (예정) 공용 모달 (취소/반품/교환)
 *
 * 클레임관리(OdClaimMng), 클레임상세(OdClaimDtl), 칸반보드(OdOrderKanban) 공용.
 *
 * 2026-10-03 클레임/부분환불 계약(od.13.impl) — 자체 계산(fnCalcAmt) 삭제.
 *   금액은 서버 `POST /bo/ec/od/claim/preview`(ClaimAmountCalculator) 결과(§4 필드)를 그대로 표시한다.
 *   · claimId 모드: 클레임 조회 → 그 주문/유형/품목으로 /preview 호출. 종결(COMPLT/REJECTED/CANCELLED) 이거나
 *     preview 가 거부되면(수량 검증 등) 클레임에 저장된 서버 계산값(refund_* 컬럼)을 표시한다.
 *   · preview 모드(claimId 없음, 칸반 신청 전): previewItems + previewOrderId + previewClaimType 으로 /preview 호출.
 *   · "최종 결제잔액" = 결제액 − Σ(상태 COMPLT 인 클레임의 refundAmt) — 진행 중 클레임은 아직 환불되지 않았다.
 *
 * Props:
 *   show          — Boolean  모달 표시 여부
 *   claimId       — String   최초 조회할 클레임 ID
 *   orderId       — String   (선택) 주문 ID (없으면 claimId로 API 조회 시 획득)
 *   previewItems  — Array    claimId 없을 때 [{orderItemId, claimQty, newProdSkuId?, newQty?, prodNm?}]
 *   previewClaimType — 'CANCEL'|'RETURN'|'EXCHANGE'
 *   previewOrderId   — orderId 별칭 (칸반용)
 *   previewReasonCd  — (선택) 사유코드, 기본 ETC
 *
 * Emits:
 *   close         — 닫기
 */
window.OdClaimCalcModal = {
  name: 'OdClaimCalcModal',
  props: {
    show:             { type: Boolean, default: false },
    claimId:          { type: String,  default: '' },
    orderId:          { type: String,  default: '' },
    previewItems:     { type: Array,   default: () => [] },  // claimId 없을 때 직접 전달
    previewClaimType: { type: String,  default: '' },        // 'CANCEL'|'RETURN'|'EXCHANGE'
    previewOrderId:   { type: String,  default: '' },        // orderId 별칭 (칸반용)
    previewReasonCd:  { type: String,  default: 'ETC' },     // 2026-10-03 preview 본문 reasonCd
    zIndex:           { type: Number,  default: 9000 },      // 중첩 모달 z-index 조정용
  },
  emits: ['close'],
  setup(props, { emit }) {
    const { ref, reactive, watch, onMounted } = Vue;

    /* ##### [01] 상태 ########################################################## */

    const state = reactive({
      loading:       false,
      switchLoading: false,
      claimId:       '',
      claimType:     '',
      isPreview:     false,  // true: claimId 없이 previewItems로 계산한 경우
      data:          null,   // { claim, order, calc, calcSource, statusHist }
      orderClaims:   [],
      error:         '',
    });

    /* ##### [02] 계산 헬퍼 (2026-10-03 — 서버 /preview 결과 또는 저장값) ############ */

    const CLAIM_TYPE_LABEL = { CANCEL: '취소', RETURN: '반품', EXCHANGE: '교환' };
    const FINAL_STATUSES   = ['COMPLT', 'REJECTED', 'CANCELLED'];
    /* fnTypeKey — 코드/레거시 한글 → 코드 */
    const fnTypeKey = function (t) { return (window.coConsts && coConsts.CLAIM_TYPE_CD_MAP[t]) || t || 'CANCEL'; };
    /* fnStatusLabel — 실제 코드(REQUESTED/APPROVED/IN_PICKUP/PROCESSING/REFUND_WAIT/COMPLT/REJECTED/CANCELLED) → 한글 */
    const fnStatusLabel = function (cd) { return (window.boConsts && boConsts.CLAIM_STATUS_LABEL[cd]) || cd || '-'; };
    const fnStatusStyle = function (cd) {
      if (cd === 'COMPLT') return 'background:#dcfce7;color:#15803d';
      if (cd === 'REJECTED' || cd === 'CANCELLED') return 'background:#fee2e2;color:#b91c1c';
      return 'background:#fef9c3;color:#92400e';
    };
    const won = function (v) { return Number(v || 0).toLocaleString() + '원'; };

    /* fnBuildPreviewBody — FoClaimReqDto 와 같은 본문 */
    const fnBuildPreviewBody = function (orderId, claimTypeCd, reasonCd, reasonDetail, items) {
      var tk = fnTypeKey(claimTypeCd);
      return {
        orderId:      orderId,
        claimTypeCd:  tk,
        reasonCd:     reasonCd || 'ETC',
        reasonDetail: reasonDetail || '',
        items: (items || []).filter(function (it) { return Number(it.claimQty || it.claim_qty || 0) > 0; }).map(function (it) {
          var row = { orderItemId: it.orderItemId || it.order_item_id, claimQty: Number(it.claimQty || it.claim_qty || 1) };
          if (tk === 'EXCHANGE') { row.newProdSkuId = it.newProdSkuId || it.new_prod_sku_id || null; row.newQty = Number(it.newQty || it.new_qty || row.claimQty); }
          return row;
        }),
      };
    };

    /* fnCallPreview — /preview 호출 → §4 필드 (OdClaimDto.Item 확장) */
    const fnCallPreview = async function (body) {
      var r = await boApiSvc.odClaim.preview(body, '클레임계산', '미리보기');
      return (r.data && r.data.data) || r.data || {};
    };

    /* fnCalcFromClaim — 클레임에 저장된 서버 계산값. 하나도 없으면 null (레거시 행) */
    const fnCalcFromClaim = function (c) {
      if (!c) return null;
      if (c.refundProdAmt == null && c.refundAmt == null) return null;
      return {
        refundProdAmt:     Number(c.refundProdAmt || 0),
        refundCouponAmt:   Number(c.refundCouponAmt || 0),
        refundSaveAmt:     Number(c.refundSaveAmt || 0),
        refundShippingAmt: Number(c.refundShippingAmt || 0),
        returnShippingFee: Number(c.returnShippingFee || 0),
        refundAmt:         Number(c.refundAmt || 0),
        fullClaimYn:       c.fullClaimYn || '',
        customerFaultYn:   c.customerFaultYn || '',
        refundMethodCd:    c.refundMethodCd || '',
        claimItems:        c.claimItems || [],
      };
    };

    /* fnResolveCalc — 기존 클레임: 종결이면 저장값, 아니면 /preview (거부되면 저장값으로 대체) */
    const fnResolveCalc = async function (claimData, orderId) {
      var stored = fnCalcFromClaim(claimData);
      var st = claimData.claimStatusCd || claimData.claim_status_cd || '';
      if (FINAL_STATUSES.indexOf(st) >= 0 && stored) {
        return { calc: stored, source: '확정 (클레임 저장값 · ' + fnStatusLabel(st) + ')' };
      }
      try {
        var body = fnBuildPreviewBody(orderId, claimData.claimTypeCd || claimData.claim_type_cd, claimData.reasonCd, claimData.reasonDetail, claimData.claimItems || []);
        if (!body.items.length) throw new Error('클레임 품목이 없어 미리보기를 계산할 수 없습니다.');
        var p = await fnCallPreview(body);
        return { calc: Object.assign({}, p, { claimItems: (p.claimItems && p.claimItems.length) ? p.claimItems : (claimData.claimItems || []) }), source: '서버 미리보기 (/preview)' };
      } catch (e) {
        var msg = (e.response && e.response.data && e.response.data.message) || e.message || '';
        if (stored) return { calc: stored, source: '클레임 저장값 (preview 거부: ' + msg + ')' };
        throw e;
      }
    };

    const fnLoadData = async function (claimId, orderId) {
      var cr = await boApiSvc.odClaim.getById(claimId, '클레임계산', '조회');
      var claimData = (cr.data && cr.data.data) || cr.data || {};
      var resolvedOrderId = orderId || claimData.orderId || '';
      var orderData = {};
      if (resolvedOrderId) {
        var or = await boApiSvc.odOrder.getById(resolvedOrderId, '클레임계산', '주문조회').catch(function () { return null; });
        orderData = (or && ((or.data && or.data.data) || or.data)) || {};
      }
      var hr = await boApiSvc.odClaim.getStatusHist(claimId, '클레임계산', '상태이력').catch(function () { return null; });
      var statusHist = (hr && hr.data && hr.data.data) || [];
      return { claimData, orderData, statusHist, resolvedOrderId };
    };

    /* fnLoadOrderClaims — 같은 주문의 클레임 목록 (전환바 + COMPLT 환불합계) */
    const fnLoadOrderClaims = async function (orderId) {
      if (!orderId) return [];
      var lor = await boApiSvc.odClaim.getPage({ orderId: orderId, pageNo: 1, pageSize: 100 }, '클레임계산', '주문클레임목록').catch(function () { return null; });
      return (lor && (lor.data?.data?.pageList || lor.data?.data?.list || [])) || [];
    };

    /* ##### [03] 최초 로드 ##################################################### */

    /* preview 모드: claimId 없이 items + orderId 로 /preview */
    const fnDoPreview = async function () {
      state.loading     = true;
      state.isPreview   = true;
      state.data        = null;
      state.orderClaims = [];
      state.claimId     = '';
      state.error       = '';
      state.claimType   = fnTypeKey(props.previewClaimType || '');
      try {
        var resolvedOrderId = props.previewOrderId || props.orderId || '';
        var orderData = {};
        if (resolvedOrderId) {
          var or = await boApiSvc.odOrder.getById(resolvedOrderId, '클레임계산', '주문조회').catch(function () { return null; });
          orderData = (or && ((or.data && or.data.data) || or.data)) || {};
        }
        var body = fnBuildPreviewBody(resolvedOrderId, state.claimType, props.previewReasonCd, '', props.previewItems || []);
        var p = await fnCallPreview(body);
        /* 서버 claimItems 에 상품명이 없으면 전달받은 previewItems 의 prodNm 으로 보강 */
        var items = (p.claimItems && p.claimItems.length) ? p.claimItems : body.items;
        items.forEach(function (it) {
          if (!it.prodNm) { var src = (props.previewItems || []).find(function (x) { return (x.orderItemId || x.order_item_id) === it.orderItemId; }); if (src) it.prodNm = src.prodNm || ''; }
        });
        var claimData = { claimItems: items, claimTypeCd: state.claimType, orderId: resolvedOrderId, reasonCd: body.reasonCd };
        state.orderClaims = await fnLoadOrderClaims(resolvedOrderId);
        state.data = { claim: claimData, order: orderData, calc: Object.assign({}, p, { claimItems: items }), calcSource: '서버 미리보기 (/preview · 신청 전)', statusHist: [] };
      } catch (e) {
        console.error('[OdClaimCalcModal] preview error', e);
        state.error = (e.response && e.response.data && e.response.data.message) || e.message || '미리보기 계산 중 오류가 발생했습니다.';
      } finally {
        state.loading = false;
      }
    };

    const fnDoLoad = async function (newId, newOrderId) {
      if (!newId) return;
      state.loading     = true;
      state.isPreview   = false;
      state.data        = null;
      state.orderClaims = [];
      state.claimId     = newId;
      state.claimType   = '';
      state.error       = '';
      try {
        var { claimData, orderData, statusHist, resolvedOrderId } = await fnLoadData(newId, newOrderId || '');
        state.claimType = fnTypeKey(claimData.claimTypeCd || '');
        var r = await fnResolveCalc(claimData, resolvedOrderId);
        state.data = { claim: claimData, order: orderData, calc: r.calc, calcSource: r.source, statusHist };
        var allClaims = await fnLoadOrderClaims(resolvedOrderId);
        state.orderClaims = allClaims.length ? allClaims : [claimData];
      } catch (e) {
        console.error('[OdClaimCalcModal] load error', e);
        state.error = (e.response && e.response.data && e.response.data.message) || e.message || '계산 정보 조회 중 오류가 발생했습니다.';
      } finally {
        state.loading = false;
      }
    };

    /* show/claimId 변경 감지 (Mng/Dtl: v-if 없이 show 토글 방식) */
    watch([() => props.show, () => props.claimId], async function ([newShow, newId]) {
      if (!newShow) return;
      if (newId) { await fnDoLoad(newId, props.orderId); }
      else if (props.previewItems && props.previewItems.length) { await fnDoPreview(); }
    }, { immediate: false });

    /* 마운트 시점에 이미 show=true인 경우 (Kanban: v-if로 새로 마운트) */
    onMounted(function () {
      if (!props.show) return;
      if (props.claimId) { fnDoLoad(props.claimId, props.orderId); }
      else if (props.previewItems && props.previewItems.length) { fnDoPreview(); }
    });

    /* ##### [04] 클레임 전환 ################################################### */

    const handleSwitch = async function (claimId) {
      if (!claimId || claimId === state.claimId) return;
      state.switchLoading = true;
      try {
        var target = state.orderClaims.find(function (c) { return c.claimId === claimId; }) || {};
        var { claimData, orderData, statusHist, resolvedOrderId } = await fnLoadData(claimId, target.orderId || (state.data && state.data.claim && state.data.claim.orderId) || '');
        var r = await fnResolveCalc(claimData, resolvedOrderId);
        state.claimId   = claimId;
        state.isPreview = false;
        state.claimType = fnTypeKey(claimData.claimTypeCd || '');
        state.data      = { claim: claimData, order: orderData, calc: r.calc, calcSource: r.source, statusHist };
      } catch (e) {
        console.error('[OdClaimCalcModal] switch error', e);
      } finally {
        state.switchLoading = false;
      }
    };

    const handleClose = function () { emit('close'); };

    const debugOpen = Vue.ref(false);

    /* ##### [05] 표시 헬퍼 ##################################################### */

    /* 주문 금액 필드 — 계약(§4) 이름 우선, 기존 DTO 이름 호환 */
    const fnOrderPayAmt   = function (o) { return Number(o.payAmt || o.pay_amt || o.totalAmt || o.total_amt || 0); };
    const fnOrderCoupon   = function (o) { return Number(o.couponDiscountAmt || o.couponDiscntAmt || o.couponDiscAmt || o.coupon_disc_amt || 0); };
    const fnOrderCache    = function (o) { return Number(o.cacheUseAmt || o.saveUseAmt || o.saveUsedAmt || o.save_used_amt || o.cacheUsedAmt || 0); };
    const fnOrderShipping = function (o) { return Number(o.outboundShippingFee || o.shippingFee || o.dlivFee || o.dliv_fee || 0); };
    const fnOrderGoods    = function (o) {
      return (o.orderItems || []).reduce(function (s, it) {
        return s + Number(it.itemOrderAmt || it.item_order_amt || (it.unitPrice || it.unit_price || it.salePrice || 0) * (it.orderQty || it.order_qty || 1));
      }, 0);
    };
    /* fnCompltRefundSum — 상태 COMPLT 인 클레임의 refundAmt 합 (실제 환불된 금액만) */
    const fnCompltRefundSum = function () {
      return state.orderClaims.reduce(function (s, c) {
        return (c.claimStatusCd || c.claim_status_cd) === 'COMPLT' ? s + Number(c.refundAmt || 0) : s;
      }, 0);
    };
    /* fnRemainBalance — 최종 결제잔액 = 결제액 − COMPLT 환불합계 */
    const fnRemainBalance = function () {
      return fnOrderPayAmt(state.data.order) - fnCompltRefundSum();
    };
    /* fnRemainItems — 이 클레임 반영 후 남는 주문상품 수량 [{prodNm, remainQty}] */
    const fnRemainItems = function () {
      var items = (state.data.order.orderItems || []);
      var cl = state.data.calc.claimItems || [];
      return items.map(function (it) {
        var oid = it.orderItemId || it.order_item_id;
        var claimed = cl.filter(function (c) { return (c.orderItemId || c.order_item_id) === oid; }).reduce(function (s, c) { return s + Number(c.claimQty || c.claim_qty || 0); }, 0);
        var remain = Number(it.orderQty || it.order_qty || 0) - Number(it.cancelQty || it.cancel_qty || 0) - claimed;
        return { prodNm: it.prodNm || it.prod_nm || '-', remainQty: remain < 0 ? 0 : remain };
      }).filter(function (r) { return r.remainQty > 0; });
    };

    const orderItemsColumns = [
      { key: 'prodNm',   label: '상품명', fmt: (v, row) => row.prodNm || row.prod_nm || '-' },
      { key: 'orderQty', label: '수량', align: 'center',
        fmt: (v, row) => (row.orderQty || row.order_qty || 1) + ((row.cancelQty || row.cancel_qty) ? ' (취소 ' + (row.cancelQty || row.cancel_qty) + ')' : '') },
      { key: 'itemAmt',  label: '금액', align: 'right',
        fmt: (v, row) => won(row.itemOrderAmt || row.item_order_amt || (row.unitPrice || row.unit_price || row.salePrice || 0) * (row.orderQty || row.order_qty || 1)) },
    ];
    // 2026-10-03 계약 claimItems[{prodNm, claimQty, unitPrice, itemAmt, refundAmt, newProdSkuId, newQty}]
    const claimItemsColumns = [
      { key: 'prodNm',    label: '상품명', fmt: (v, row) => row.prodNm || row.prod_nm || row.orderItemId || '-' },
      { key: 'claimQty',  label: '수량', align: 'center', fmt: (v, row) => row.claimQty || row.claim_qty || 1 },
      { key: 'itemAmt',   label: '금액', align: 'right', fmt: (v, row) => won(row.itemAmt || row.item_amt || (row.unitPrice || 0) * (row.claimQty || 1)) },
      { key: 'refundAmt', label: '환불액', align: 'right', fmt: (v, row) => row.refundAmt != null ? won(row.refundAmt) : '-', cellStyle: 'color:#059669;font-weight:700;' },
      { key: 'newProdSkuId', label: '교환SKU', fmt: (v, row) => row.newProdSkuId ? row.newProdSkuId + (row.newQty ? ' ×' + row.newQty : '') : '' , cellStyle: 'font-family:monospace;font-size:10px;color:#1e40af;' },
    ];

    return { state, handleSwitch, handleClose, debugOpen, orderItemsColumns, claimItemsColumns,
             CLAIM_TYPE_LABEL, fnStatusLabel, fnStatusStyle, fnTypeKey, won,
             fnOrderPayAmt, fnOrderCoupon, fnOrderCache, fnOrderShipping, fnOrderGoods, fnCompltRefundSum, fnRemainBalance, fnRemainItems };
  },
  template: /* html */`
<bo-modal :show="show" :title="state.claimType==='CANCEL'?'취소 클레임 계산 (예정)':state.claimType==='RETURN'?'반품 클레임 계산 (예정)':state.claimType==='EXCHANGE'?'교환 클레임 계산 (예정)':'클레임 계산 (예정)'" width="680px" box-pad="12px" body-pad="12px" :z-index="zIndex" @close="handleClose">
  <template #default>
    <!-- ── 파라미터 디버그 섹션 (접이식 / 다크 톤) ── -->
    <div style="margin-bottom:10px;border-radius:8px;overflow:hidden;font-size:11px;border:1px solid #334155;">
      <div @click="debugOpen=!debugOpen" style="display:flex;align-items:center;gap:6px;padding:5px 10px;background:#1e293b;cursor:pointer;user-select:none;">
        <span style="color:#94a3b8;font-weight:600;font-family:monospace;">📋 전달된 파라미터</span>
        <span v-if="state.data" style="color:#34d399;font-size:10px;margin-left:8px;">계산 출처: {{ state.data.calcSource }}</span>
        <span style="margin-left:auto;color:#64748b;font-size:10px;">{{ debugOpen ? '▲ 접기' : '▼ 펼치기' }}</span>
      </div>
      <div v-if="debugOpen" style="padding:8px 10px;background:#0f172a;display:grid;grid-template-columns:auto 1fr;gap:3px 12px;font-family:monospace;">
        <span style="color:#64748b;">mode</span>
        <span :style="state.isPreview?'color:#fbbf24':'color:#60a5fa'">{{ state.isPreview ? 'preview (claimId 없음 → /preview)' : 'claimId 직접 조회 → /preview 또는 저장값' }}</span>
        <span style="color:#64748b;">claimId</span>
        <span style="color:#f1f5f9;">{{ claimId || '—' }}</span>
        <span style="color:#64748b;">orderId</span>
        <span style="color:#38bdf8;">{{ previewOrderId || orderId || '—' }}</span>
        <span style="color:#64748b;">previewClaimType</span>
        <span :style="previewClaimType==='CANCEL'?'color:#f87171':previewClaimType==='RETURN'?'color:#fb923c':'color:#818cf8'">{{ previewClaimType || '—' }}</span>
        <span style="color:#64748b;">state.claimType</span>
        <span :style="state.claimType==='CANCEL'?'color:#f87171':state.claimType==='RETURN'?'color:#fb923c':'color:#818cf8'">{{ state.claimType || '(미결정)' }}</span>
        <template v-if="state.isPreview">
          <span style="color:#64748b;">previewItems</span>
          <span style="color:#f1f5f9;">{{ previewItems ? previewItems.length + '건' : '—' }}</span>
        </template>
        <!-- previewItems 목록 -->
        <template v-if="state.isPreview &amp;&amp; previewItems &amp;&amp; previewItems.length">
          <div style="grid-column:1/-1;margin-top:4px;border-top:1px solid #1e293b;padding-top:6px;">
            <div v-for="(it, i) in previewItems" :key="i"
              style="display:grid;grid-template-columns:1fr auto auto auto;gap:0 10px;align-items:center;padding:3px 0;border-bottom:1px solid #1e293b;">
              <span style="color:#94a3b8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="it.orderItemId">
                {{ it.prodNm || it.orderItemId }}
              </span>
              <span style="color:#64748b;white-space:nowrap;">qty</span>
              <span style="color:#e2e8f0;text-align:right;">{{ it.claimQty }}</span>
              <span style="color:#34d399;text-align:right;min-width:72px;">{{ it.newProdSkuId ? '↔ ' + it.newProdSkuId : '' }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- ──────────────────────────────────────────────── -->
    <div v-if="state.loading" style="text-align:center;padding:40px;color:#94a3b8;">⏳ 서버 계산 중...</div>
    <div v-else-if="state.error" style="padding:16px;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;color:#b91c1c;font-size:12px;">
      ⚠ {{ state.error }}
    </div>
    <template v-else-if="state.data">
      <!-- ① 메타 바: 회원·주문·클레임·신청일·상태 한 줄 (preview 모드는 주문번호만) -->
      <div v-if="state.isPreview" style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding:8px 14px;background:#f1f5f9;border-radius:10px;border:1px solid #e2e8f0;font-size:11px;">
        <span style="color:#94a3b8;">주문번호</span>
        <span style="font-weight:700;color:#1d4ed8;font-family:monospace;">{{ state.data.claim.orderId || '-' }}</span>
        <span style="padding:1px 8px;border-radius:8px;font-size:10px;font-weight:700;"
          :style="state.claimType==='CANCEL'?'background:#fee2e2;color:#b91c1c':state.claimType==='RETURN'?'background:#fff7ed;color:#9a3412':'background:#dbeafe;color:#1d4ed8'">
          {{ CLAIM_TYPE_LABEL[state.claimType] || state.claimType }} (신청 예정)
        </span>
      </div>
      <div v-else style="display:grid;grid-template-columns:auto auto 1fr auto auto;gap:0;align-items:stretch;margin-bottom:14px;border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;font-size:11px;">
        <div style="padding:8px 14px;background:#f1f5f9;border-right:1px solid #e2e8f0;">
          <div style="color:#94a3b8;margin-bottom:2px;">회원</div>
          <div style="font-weight:700;color:#111;white-space:nowrap;">{{ state.data.claim.memberNm || state.data.claim.member_nm || '-' }}</div>
        </div>
        <div style="padding:8px 14px;background:#f1f5f9;border-right:1px solid #e2e8f0;">
          <div style="color:#94a3b8;margin-bottom:2px;">주문번호</div>
          <div style="font-weight:700;color:#1d4ed8;font-family:monospace;white-space:nowrap;">{{ state.data.claim.orderId || state.data.order.orderId || '-' }}</div>
        </div>
        <div style="padding:8px 14px;background:#f1f5f9;border-right:1px solid #e2e8f0;">
          <div style="color:#94a3b8;margin-bottom:2px;">클레임번호</div>
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-weight:700;font-family:monospace;color:#111;">{{ state.claimId }}</span>
            <span style="padding:1px 8px;border-radius:8px;font-size:10px;font-weight:700;"
              :style="state.claimType==='CANCEL'?'background:#fee2e2;color:#b91c1c':state.claimType==='RETURN'?'background:#fff7ed;color:#9a3412':'background:#dbeafe;color:#1d4ed8'">
              {{ CLAIM_TYPE_LABEL[state.claimType] || state.claimType }}
            </span>
          </div>
        </div>
        <div style="padding:8px 14px;background:#f1f5f9;border-right:1px solid #e2e8f0;">
          <div style="color:#94a3b8;margin-bottom:2px;">신청일</div>
          <div style="font-weight:600;color:#111;white-space:nowrap;">{{ (state.data.claim.requestDate || state.data.claim.request_date || '').replace('T',' ').slice(0,10) || '-' }}</div>
        </div>
        <div style="padding:8px 14px;background:#f1f5f9;">
          <div style="color:#94a3b8;margin-bottom:2px;">상태</div>
          <div style="font-weight:700;">
            <span style="padding:2px 8px;border-radius:6px;font-size:10px;" :style="fnStatusStyle(state.data.claim.claimStatusCd)">
              {{ fnStatusLabel(state.data.claim.claimStatusCd) }}
            </span>
          </div>
        </div>
      </div><!-- v-else 메타 바 끝 -->
      <!-- ② 클레임 전환 선택바 -->
      <div v-if="state.orderClaims.length >= 1" style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding:8px 12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;font-size:11px;">
        <span style="color:#6b7280;white-space:nowrap;">이 주문의 클레임</span>
        <span style="font-weight:700;color:#1d4ed8;">{{ state.orderClaims.length }}건</span>
        <select :value="state.claimId" @change="handleSwitch($event.target.value)" :disabled="state.switchLoading"
          style="flex:1;padding:4px 8px;border:1px solid #d1d5db;border-radius:6px;font-size:11px;background:#fff;cursor:pointer;">
          <option v-if="state.isPreview" value="">(신청 예정 — 현재 미리보기)</option>
          <option v-for="c in state.orderClaims" :key="c.claimId" :value="c.claimId">
            {{ c.claimId }} — {{ CLAIM_TYPE_LABEL[fnTypeKey(c.claimTypeCd)] || c.claimTypeCd }} / {{ fnStatusLabel(c.claimStatusCd) }} / {{ won(c.refundAmt) }}
          </option>
        </select>
        <span v-if="state.switchLoading" style="color:#94a3b8;">⏳</span>
      </div>
      <!-- ③ 상품 정보 카드 (3열) -->
      <div style="border-radius:10px;border:1px solid #e2e8f0;overflow:hidden;">
        <div style="padding:8px 12px;background:#f1f5f9;font-size:11px;font-weight:800;color:#374151;border-bottom:1px solid #e2e8f0;">🛍 상품 정보</div>
        <div style="padding:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;align-items:start;">
          <!-- 1열: 현재 주문상품 정보 -->
          <div style="border-radius:8px;border:1px solid #e2e8f0;overflow:hidden;">
            <div style="padding:7px 10px;background:#f8fafc;font-size:11px;font-weight:700;color:#374151;border-bottom:1px solid #e2e8f0;">🛒 현재 주문상품 정보</div>
            <div style="padding:10px 12px;">
              <bo-grid bare :columns="orderItemsColumns"
                :rows="state.data.order.orderItems || []"
                empty-text="-" style="margin-bottom:8px;font-size:11px;" />
              <div style="border-top:1px solid #e5e7eb;padding-top:6px;font-size:11px;">
                <div style="display:flex;justify-content:space-between;padding:2px 0;color:#6b7280;">
                  <span>상품 합계</span><span style="font-family:monospace;">{{ won(fnOrderGoods(state.data.order)) }}</span>
                </div>
                <div v-if="fnOrderShipping(state.data.order)" style="display:flex;justify-content:space-between;padding:2px 0;color:#6b7280;">
                  <span>배송비</span><span style="font-family:monospace;">{{ won(fnOrderShipping(state.data.order)) }}</span>
                </div>
                <div v-if="fnOrderCoupon(state.data.order)" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>쿠폰 할인</span><span style="font-family:monospace;">- {{ won(fnOrderCoupon(state.data.order)) }}</span>
                </div>
                <div v-if="fnOrderCache(state.data.order)" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>적립금/캐시 사용</span><span style="font-family:monospace;">- {{ won(fnOrderCache(state.data.order)) }}</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:5px 0 1px;font-weight:800;border-top:1px solid #e2e8f0;margin-top:3px;">
                  <span>실 결제액</span>
                  <span style="font-family:monospace;color:#1d4ed8;">{{ won(fnOrderPayAmt(state.data.order)) }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 2열: 클레임 신청 후 (환불 예정) — 2026-10-03 §4 필드 -->
          <div style="border-radius:8px;border:1px solid #bbf7d0;overflow:hidden;">
            <div style="padding:7px 10px;background:#f0fdf4;font-size:11px;font-weight:700;color:#14532d;border-bottom:1px solid #bbf7d0;">♻️ 클레임 신청 후 (환불 예정)</div>
            <div style="padding:10px 12px;">
              <bo-grid bare :columns="claimItemsColumns"
                :rows="state.data.calc.claimItems || []"
                empty-text="항목 없음" style="margin-bottom:8px;font-size:11px;" />
              <div style="border-top:1px solid #bbf7d0;padding-top:6px;font-size:11px;">
                <div style="display:flex;justify-content:space-between;padding:2px 0;color:#6b7280;">
                  <span>상품금액 (refundProdAmt)</span><span style="font-family:monospace;">{{ won(state.data.calc.refundProdAmt) }}</span>
                </div>
                <div v-if="state.data.calc.refundCouponAmt > 0" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>쿠폰 차감 (비례)</span><span style="font-family:monospace;">- {{ won(state.data.calc.refundCouponAmt) }}</span>
                </div>
                <div v-if="state.data.calc.refundSaveAmt > 0" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>적립/캐시 차감 → 캐시 복원</span><span style="font-family:monospace;">- {{ won(state.data.calc.refundSaveAmt) }}</span>
                </div>
                <div v-if="state.data.calc.refundShippingAmt > 0" style="display:flex;justify-content:space-between;padding:2px 0;color:#059669;">
                  <span>배송비 환불 {{ state.data.calc.fullClaimYn==='Y' ? '(전체 클레임)' : '' }}</span><span style="font-family:monospace;">+ {{ won(state.data.calc.refundShippingAmt) }}</span>
                </div>
                <div v-if="state.data.calc.returnShippingFee > 0" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>반품/교환 배송비 (고객 귀책)</span><span style="font-family:monospace;">- {{ won(state.data.calc.returnShippingFee) }}</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:5px 0 1px;font-size:13px;font-weight:800;border-top:1px solid #bbf7d0;margin-top:3px;">
                  <span>환불 예정액 (현금성)</span>
                  <span style="font-family:monospace;color:#059669;">{{ won(state.data.calc.refundAmt) }}</span>
                </div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px;">
                  <span style="padding:1px 7px;border-radius:8px;font-size:10px;font-weight:700;" :style="state.data.calc.fullClaimYn==='Y' ? 'background:#dcfce7;color:#15803d' : 'background:#f3f4f6;color:#6b7280'">전체 클레임 {{ state.data.calc.fullClaimYn || 'N' }}</span>
                  <span style="padding:1px 7px;border-radius:8px;font-size:10px;font-weight:700;" :style="state.data.calc.customerFaultYn==='Y' ? 'background:#ffedd5;color:#c2410c' : 'background:#f3f4f6;color:#6b7280'">고객 귀책 {{ state.data.calc.customerFaultYn || '-' }}</span>
                  <span v-if="state.claimType==='EXCHANGE'" style="padding:1px 7px;border-radius:8px;font-size:10px;font-weight:700;background:#dbeafe;color:#1d4ed8;">교환: 현금 환불 0 (가격차 v1 미처리)</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 3열: 최종 정보 -->
          <div style="border-radius:8px;border:1px solid #a5b4fc;overflow:hidden;">
            <div style="padding:7px 10px;background:#eef2ff;font-size:11px;font-weight:700;color:#3730a3;border-bottom:1px solid #a5b4fc;">✅ 최종 정보</div>
            <div style="padding:10px 12px;font-size:11px;">
              <div style="font-size:10px;font-weight:700;color:#4f46e5;margin-bottom:4px;">유지되는 주문상품 (이 클레임 반영 후)</div>
              <div style="background:#f5f3ff;border-radius:6px;padding:6px 8px;margin-bottom:8px;">
                <template v-if="fnRemainItems().length">
                  <div v-for="(it, i) in fnRemainItems()" :key="i"
                    style="display:flex;justify-content:space-between;padding:2px 0;color:#374151;">
                    <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px;" :title="it.prodNm">{{ it.prodNm }}</span>
                    <span style="font-family:monospace;white-space:nowrap;margin-left:4px;">{{ it.remainQty }}개</span>
                  </div>
                </template>
                <div v-else style="color:#94a3b8;font-size:11px;text-align:center;padding:4px 0;">전량 클레임 처리</div>
              </div>
              <div style="font-size:10px;font-weight:700;color:#4f46e5;margin-bottom:4px;">최종 금액 요약</div>
              <div style="display:flex;flex-direction:column;gap:3px;">
                <div style="display:flex;justify-content:space-between;padding:2px 0;color:#6b7280;">
                  <span>원 결제액</span>
                  <span style="font-family:monospace;">{{ won(fnOrderPayAmt(state.data.order)) }}</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:2px 0;color:#059669;">
                  <span>환불 예정액 (현재 클레임)</span>
                  <span style="font-family:monospace;font-weight:700;">- {{ won(state.data.calc.refundAmt) }}</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>환불 완료합계 (COMPLT 클레임만)</span>
                  <span style="font-family:monospace;">- {{ won(fnCompltRefundSum()) }}</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:5px 0 2px;font-weight:800;border-top:1px solid #a5b4fc;margin-top:2px;">
                  <span style="color:#3730a3;">최종 결제잔액</span>
                  <span style="font-family:monospace;color:#1d4ed8;">{{ won(fnRemainBalance()) }}</span>
                </div>
                <div style="margin-top:6px;padding:5px 8px;background:#e0e7ff;border-radius:6px;text-align:center;font-size:10px;color:#4338ca;font-weight:700;">
                  {{ state.data.calcSource }}
                </div>
              </div>
            </div>
          </div>
        </div><!-- /grid -->
      </div><!-- /상품 정보 카드 -->
      <!-- ④ 결제 정보 카드 (3열) -->
      <div style="margin-top:12px;border-radius:10px;border:1px solid #bfdbfe;overflow:hidden;">
        <div style="padding:8px 12px;background:#eff6ff;font-size:11px;font-weight:800;color:#1e40af;border-bottom:1px solid #bfdbfe;">💳 결제 정보</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;">
          <div style="padding:10px 14px;border-right:1px solid #bfdbfe;">
            <div style="font-size:10px;font-weight:700;color:#1d4ed8;margin-bottom:6px;">📌 결제 상세</div>
            <template v-if="(state.data.order.orderPays || []).length">
              <div v-for="(pay, pi) in (state.data.order.orderPays || [])" :key="pi"
                style="font-size:11px;padding:5px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #dbeafe;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="color:#374151;font-weight:700;">{{ pay.payMethodCdNm || pay.payMethodCd || '-' }}</span>
                  <span style="font-family:monospace;color:#1d4ed8;font-weight:700;">{{ won(pay.payAmt) }}</span>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:3px;color:#94a3b8;font-size:10px;">
                  <span>{{ pay.payStatusCdNm || pay.payStatusCd || '' }}</span>
                  <span>{{ (pay.payDate || '').replace('T',' ').slice(0,16) }}</span>
                  <span v-if="pay.refundAmt">환불누계 {{ won(pay.refundAmt) }} ({{ pay.refundStatusCd || '-' }})</span>
                  <span v-if="pay.cardNo">카드 {{ pay.cardNo }}</span>
                  <span v-if="pay.pgTransactionId" style="font-family:monospace;">PG {{ pay.pgTransactionId }}</span>
                </div>
              </div>
            </template>
            <div v-else style="font-size:11px;color:#94a3b8;padding:6px 8px;background:#f8fafc;border-radius:6px;text-align:center;">결제 데이터 없음</div>
          </div>
          <div style="padding:10px 14px;border-right:1px solid #bfdbfe;">
            <div style="font-size:10px;font-weight:700;color:#059669;margin-bottom:6px;">♻️ 환불 예정 수단 (완료 시 실행)</div>
            <div style="font-size:11px;padding:5px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #bbf7d0;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span style="color:#374151;font-weight:700;">{{ state.data.calc.refundMethodCd || state.data.claim.refundMethodCd || state.data.order.payMethodCd || '주문 결제수단' }}</span>
                <span style="font-family:monospace;color:#059669;font-weight:700;">{{ won(state.data.calc.refundAmt) }}</span>
              </div>
              <div style="font-size:10px;color:#6b9b7a;margin-top:2px;">TOSS/KAKAO/NAVER 는 PG 취소 즉시 COMPLT · 무통장/가상계좌는 PENDING 후 운영자 송금완료</div>
            </div>
            <div v-if="state.data.calc.refundSaveAmt > 0" style="font-size:11px;padding:5px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #bbf7d0;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span style="color:#374151;font-weight:700;">CACHE (회원 캐시 복원)</span>
                <span style="font-family:monospace;color:#2563eb;font-weight:700;">{{ won(state.data.calc.refundSaveAmt) }}</span>
              </div>
            </div>
          </div>
          <div style="padding:10px 14px;background:#f8faff;">
            <div style="font-size:10px;font-weight:700;color:#6366f1;margin-bottom:6px;">✅ 최종 결제 요약</div>
            <div style="font-size:11px;display:flex;flex-direction:column;gap:4px;">
              <div style="display:flex;justify-content:space-between;padding:3px 0;color:#6b7280;">
                <span>원 결제액</span>
                <span style="font-family:monospace;">{{ won(fnOrderPayAmt(state.data.order)) }}</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:3px 0;color:#059669;">
                <span>환불 예정액 (현재 클레임)</span>
                <span style="font-family:monospace;font-weight:700;">{{ won(state.data.calc.refundAmt) }}</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:3px 0;color:#dc2626;">
                <span>환불 완료합계 (COMPLT 클레임만)</span>
                <span style="font-family:monospace;">{{ won(fnCompltRefundSum()) }}</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:3px 0;border-top:1px solid #e2e8f0;margin-top:2px;font-weight:800;">
                <span style="color:#374151;">최종 결제잔액</span>
                <span style="font-family:monospace;color:#1d4ed8;">{{ won(fnRemainBalance()) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ⑤ 프로모션 정보 카드 (3열) -->
      <div style="margin-top:12px;border-radius:10px;border:1px solid #e9d5ff;overflow:hidden;">
        <div style="padding:8px 12px;background:#f5f3ff;font-size:11px;font-weight:800;color:#6d28d9;border-bottom:1px solid #e9d5ff;">🎁 프로모션 정보 (할인, 쿠폰)</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;">
          <div style="padding:10px 14px;border-right:1px solid #e9d5ff;">
            <div style="font-size:10px;font-weight:700;color:#7c3aed;margin-bottom:8px;">📌 사용된 프로모션 (주문 시)</div>
            <div v-if="!fnOrderCoupon(state.data.order) &amp;&amp; !fnOrderCache(state.data.order)"
              style="font-size:11px;color:#94a3b8;padding:4px 0;">사용된 프로모션 없음</div>
            <template v-else>
              <div v-if="fnOrderCoupon(state.data.order)"
                style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #e9d5ff;font-size:11px;">
                <div>
                  <span style="color:#7c3aed;font-weight:700;">🎟 쿠폰 할인</span>
                  <span v-if="state.data.order.couponNm" style="color:#94a3b8;font-size:10px;margin-left:4px;">{{ state.data.order.couponNm }}</span>
                </div>
                <span style="font-family:monospace;color:#dc2626;font-weight:700;">-{{ won(fnOrderCoupon(state.data.order)) }}</span>
              </div>
              <div v-if="fnOrderCache(state.data.order)"
                style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #e9d5ff;font-size:11px;">
                <span style="color:#7c3aed;font-weight:700;">💰 적립금/캐시 사용</span>
                <span style="font-family:monospace;color:#dc2626;font-weight:700;">-{{ won(fnOrderCache(state.data.order)) }}</span>
              </div>
            </template>
          </div>
          <div style="padding:10px 14px;border-right:1px solid #e9d5ff;">
            <div style="font-size:10px;font-weight:700;color:#059669;margin-bottom:8px;">♻️ 클레임 반영 (완료 후)</div>
            <div v-if="!(state.data.calc.refundCouponAmt > 0) &amp;&amp; !(state.data.calc.refundSaveAmt > 0)"
              style="font-size:11px;color:#94a3b8;padding:4px 0;">반영되는 프로모션 없음</div>
            <template v-else>
              <div v-if="state.data.calc.refundCouponAmt > 0"
                style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #bbf7d0;font-size:11px;">
                <span style="color:#059669;font-weight:700;">🎟 쿠폰 비례 차감</span>
                <span style="font-family:monospace;color:#dc2626;font-weight:700;">-{{ won(state.data.calc.refundCouponAmt) }}</span>
              </div>
              <div v-if="state.data.calc.refundSaveAmt > 0"
                style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #bbf7d0;font-size:11px;">
                <span style="color:#059669;font-weight:700;">💰 캐시 잔액 복원</span>
                <span style="font-family:monospace;color:#1d4ed8;font-weight:700;">+{{ won(state.data.calc.refundSaveAmt) }}</span>
              </div>
            </template>
          </div>
          <div style="padding:10px 14px;background:#faf5ff;">
            <div style="font-size:10px;font-weight:700;color:#6d28d9;margin-bottom:8px;">✅ 최종 프로모션 현황</div>
            <div style="font-size:11px;display:flex;flex-direction:column;gap:4px;">
              <div v-if="fnOrderCoupon(state.data.order)" style="padding:4px 8px;background:#fff;border-radius:6px;border:1px solid #e9d5ff;font-size:11px;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="color:#6b7280;">🎟 쿠폰</span>
                  <span style="color:#94a3b8;font-size:10px;">환불액에서 {{ won(state.data.calc.refundCouponAmt) }} 차감 (재발급 없음)</span>
                </div>
              </div>
              <div v-if="fnOrderCache(state.data.order)" style="padding:4px 8px;background:#fff;border-radius:6px;border:1px solid #e9d5ff;font-size:11px;">
                <div style="display:flex;justify-content:space-between;color:#6b7280;">
                  <span>💰 적립금/캐시</span>
                  <div style="text-align:right;">
                    <div style="color:#dc2626;">사용 -{{ won(fnOrderCache(state.data.order)) }}</div>
                    <div v-if="state.data.calc.refundSaveAmt > 0" style="color:#059669;">복원 +{{ won(state.data.calc.refundSaveAmt) }}</div>
                    <div style="font-weight:700;color:#374151;border-top:1px solid #e9d5ff;margin-top:2px;padding-top:2px;">
                      순차감 {{ won(fnOrderCache(state.data.order) - (state.data.calc.refundSaveAmt || 0)) }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!fnOrderCoupon(state.data.order) &amp;&amp; !fnOrderCache(state.data.order)"
                style="font-size:11px;color:#94a3b8;padding:4px 0;">프로모션 없음</div>
            </div>
          </div>
        </div>
      </div>
      <!-- ⑥ 상세 사유 -->
      <div v-if="state.data.claim.reasonDetail || state.data.claim.reason_detail || state.data.claim.reasonCd"
        style="margin-top:10px;padding:8px 12px;background:#fafafa;border-radius:8px;border:1px solid #e5e7eb;font-size:11px;">
        <span style="color:#9ca3af;margin-right:8px;">사유</span>
        <span v-if="state.data.claim.reasonCd" style="color:#6b7280;margin-right:8px;font-family:monospace;">{{ state.data.claim.reasonCd }}</span>
        <span style="color:#374151;">{{ state.data.claim.reasonDetail || state.data.claim.reason_detail }}</span>
      </div>
      <!-- ⑦ 진행 이력 타임라인 -->
      <div v-if="(state.data.statusHist || []).length"
        style="margin-top:10px;padding:10px 14px;background:#fafafa;border-radius:8px;border:1px solid #e5e7eb;">
        <div style="font-size:10px;color:#6b7280;font-weight:700;margin-bottom:10px;">📋 진행 이력</div>
        <div style="display:flex;align-items:flex-start;gap:0;overflow-x:auto;padding-bottom:4px;">
          <template v-for="(h, i) in (state.data.statusHist || [])" :key="i">
            <div style="display:flex;flex-direction:column;align-items:center;min-width:90px;max-width:110px;">
              <div style="padding:3px 10px;border-radius:12px;font-size:10px;font-weight:700;white-space:nowrap;margin-bottom:4px;" :style="fnStatusStyle(h.claimStatusCd)">
                {{ fnStatusLabel(h.claimStatusCd) }}
              </div>
              <div style="font-size:9px;color:#9ca3af;text-align:center;">{{ (h.chgDate||'').replace('T',' ').slice(0,16) }}</div>
              <div v-if="h.chgUserId" style="font-size:9px;color:#cbd5e1;text-align:center;margin-top:1px;">{{ h.chgUserId }}</div>
            </div>
            <div v-if="i < (state.data.statusHist||[]).length - 1"
              style="flex-shrink:0;padding:0 4px;color:#d1d5db;font-size:14px;margin-top:6px;">›</div>
          </template>
        </div>
      </div>
      <!-- ⑧ 안내 -->
      <div style="margin-top:8px;font-size:10px;color:#9ca3af;padding:5px 10px;background:#f9fafb;border-radius:6px;border-left:3px solid #e5e7eb;">
        ※ 금액은 서버(ClaimAmountCalculator)가 계산한 값입니다. 완료(환불 실행) 시점에 같은 계산으로 od_refund 가 생성되며, PG 취소 실패 시 전체 롤백됩니다.
      </div>
    </template>
  </template>
</bo-modal>
`,
};
