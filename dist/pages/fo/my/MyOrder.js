window.MyOrder={name:"MyOrder",props:{navigate:{type:Function,required:!0}},setup(de){const{reactive:p,computed:n,onMounted:C,watch:ne}=Vue,s=window.foApp.showToast,w=window.foApp.showConfirm,M=window.foApp.cart,c=p({loading:!1,error:null,helpTab:"order",flowHelpOpen:!1}),A=(e,r={})=>{if(e==="orders-helpOpen")c.flowHelpOpen=!0;else{if(e==="orders-helpClose")return f("orders-help",{},null);if(e==="orders-helpTab")c.helpTab=r;else if(e==="orders-flowReset")l.splice(0);else{if(e==="review-modalClose")return f("review",{},null);if(e==="review-submit")return K();if(e==="review-setRating")o.rating=r;else{if(e==="claim-modalClose")return f("claim",{},null);if(e==="claim-submit")return $();console.warn("[handleBtnAction] unknown cmd:",e)}}}},B=(e,r={})=>{if(e==="orders-flowToggle")ee(r);else{if(e==="orders-cancel")return L(r);if(e==="orders-confirmPurchase")return _(r);if(e==="orders-track")return N(r.courier,r.trackingNo);if(e==="orders-track2")return F(r.courier,r.trackingNo);if(e==="orders-claimOpen")return U(r.orderId,r.type);if(e==="claim-setReason")t.reason=r,t.selectedCouponId=null;else if(e==="claim-setExchangeItem")t.exchangeItemIdx=r,t.exchangeSize="",t.exchangeColor="";else if(e==="claim-toggleSize")t.exchangeSize=t.exchangeSize===r?"":r;else if(e==="claim-toggleColor")t.exchangeColor=t.exchangeColor===r?"":r;else{if(e==="orders-reviewOpen")return J(r.orderId,r.itemIdx,r.item);if(e==="orders-prodOpen")return Y(r);if(e==="orders-customerOpen")return q(r);if(e==="review-fileRemove")return X(r);console.warn("[handleSelectAction] unknown cmd:",e)}}},f=(e,r,i)=>{if(e==="order-detail"){if(i==null){a.orderDetailModal.show=!1;return}return}else if(e==="product"){if(i==null){a.productModal.show=!1;return}return}else if(e==="customer"){if(i==null){a.customerModal.show=!1;return}return}else if(e==="orders-help"){if(i==null){c.flowHelpOpen=!1;return}return}else if(e==="review"){if(i==null){o.show=!1;return}return}else if(e==="claim"){if(i==null){t.show=!1;return}return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},a=window.useFoMyStore(),{orders:x,cfClaimsByOrderId:R,coupons:v}=Pinia.storeToRefs(a),I=R,y=p({pageType:"PAGE",pageNo:1,pageSize:50,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),N=(e,r)=>{const i=coConsts.courierTrackUrl(e,r);if(!i){s("\uD0DD\uBC30\uC0AC \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}window.open(i,"_blank","width=960,height=700,scrollbars=yes,resizable=yes")},F=(e,r)=>{const i=coConsts.courierTrackUrl(e,r);i&&window.open(i,"_blank","width=960,height=700,scrollbars=yes")},E=e=>{var r;return e.shippingFee!=null&&e.shippingFee>0||Number((r=e.shippingCoupon)==null?void 0:r.discount)>0||Number(e.cashPaid)>0||Number(e.transferPaid)>0},L=async e=>{await w("\uC8FC\uBB38 \uCDE8\uC18C","\uC774 \uC8FC\uBB38\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?","warning")&&(a.setOrderStatus(e,"\uCDE8\uC18C\uB428"),s("\uC8FC\uBB38\uC774 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"))},_=async e=>{await w("\uAD6C\uB9E4\uD655\uC815",`\uAD6C\uB9E4\uB97C \uD655\uC815\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
\uD655\uC815 \uD6C4\uC5D0\uB294 \uAD50\uD658/\uBC18\uD488 \uC2E0\uCCAD\uC774 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.`,"warning")&&(a.setOrderStatus(e,"\uC644\uB8CC"),s("\uAD6C\uB9E4\uAC00 \uD655\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uAC10\uC0AC\uD569\uB2C8\uB2E4! \u{1F389}","success"))},T=foConsts.CLAIM_SHIPPING_FEE,P=foConsts.CLAIM_FREE_REASONS,D=foConsts.EXCHANGE_REASONS,j=foConsts.RETURN_REASONS,t=p({show:!1,type:"",orderId:"",order:null,reason:"",reasonDetail:"",exchangeSize:"",exchangeColor:"",selectedCouponId:null,exchangeItemIdx:0}),b=n(()=>P.includes(t.reason)?0:T),W=n(()=>v.value.filter(e=>!e.used&&(e.discountType==="shipping"||e.discountType==="amount"&&e.discountValue>=b.value))),u=n(()=>v.value.find(e=>e.couponId===t.selectedCouponId)||null),H=n(()=>{const e=b.value;if(!e||!u.value)return e;const r=u.value;return r.discountType==="shipping"?0:r.discountType==="amount"?Math.max(0,e-r.discountValue):e}),G=n(()=>{var r;if(!t.order)return null;const e=(r=t.order.orderItems[t.exchangeItemIdx])==null?void 0:r.prodNm;return h(e)}),U=(e,r)=>{t.show=!0,t.type=r,t.orderId=e,t.order=x.value.find(i=>i.orderId===e)||null,t.reason="",t.reasonDetail="",t.exchangeSize="",t.exchangeColor="",t.selectedCouponId=null,t.exchangeItemIdx=0,v.value.length||a.handleLoadCoupons()},$=()=>{if(!t.reason){s("\uC2E0\uCCAD \uC0AC\uC720\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}if(t.type==="exchange"&&!t.exchangeSize&&!t.exchangeColor){s("\uAD50\uD658\uD560 \uC0AC\uC774\uC988 \uB610\uB294 \uC0C9\uC0C1\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}u.value&&(u.value.used=!0),a.setOrderStatus(t.orderId,t.type==="exchange"?"\uAD50\uD658\uC694\uCCAD":"\uBC18\uD488\uC694\uCCAD");const e=t.type==="exchange"?"\uAD50\uD658":"\uBC18\uD488";t.show=!1,s(e+" \uC2E0\uCCAD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uACE7 \uC5F0\uB77D\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.","success")},k=n(()=>window.foAuth.state.user),h=e=>{const r=window.SITE_CONFIG&&window.SITE_CONFIG.prods;return Array.isArray(r)&&r.find(i=>i.prodNm===e)||null},Y=e=>{const r=h(e);r&&(a.productModal.prod=r,a.productModal.show=!0)},q=e=>{a.customerModal.user=k.value,a.customerModal.order=e||null,a.customerModal.show=!0},g=p({}),o=p({show:!1,orderId:"",itemIdx:0,item:null,rating:5,text:"",isEdit:!1,files:[],errMsg:""}),V=e=>{const r=Array.from(e.target.files||[]);o.files=[...o.files,...r].slice(0,5),e.target.value=""},X=e=>{o.files.splice(e,1)},J=(e,r,i)=>{const z=`${e}_${r}`,d=g[z];o.show=!0,o.orderId=e,o.itemIdx=r,o.item=i,o.rating=d?d.rating:5,o.text=d?d.text:"",o.isEdit=!!d,o.files=d?d.files||[]:[],o.errMsg=""},K=()=>{if(o.errMsg="",!o.text.trim()||o.text.trim().length<10){o.errMsg="\uB9AC\uBDF0 \uB0B4\uC6A9\uC744 10\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694.",s(o.errMsg,"error");return}const e=`${o.orderId}_${o.itemIdx}`;g[e]={rating:o.rating,text:o.text,date:coUtil.cofToYmd(new Date),files:o.files.map(i=>i.name)};const r=x.value.find(i=>i.orderId===o.orderId);r&&r.status==="\uBC30\uC1A1\uC644\uB8CC"&&r.orderItems.every((z,d)=>g[`${o.orderId}_${d}`])&&a.setOrderStatus(o.orderId,"\uAD6C\uB9E4\uD655\uC815"),o.show=!1,s(o.isEdit?"\uB9AC\uBDF0\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uB9AC\uBDF0\uAC00 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uAC10\uC0AC\uD569\uB2C8\uB2E4 \u{1F60A}","success")},Q=(e,r)=>g[`${e}_${r}`]||null,{dateRange:S,onDateSearch:Z}=window.myDateFilterHelper(),l=p([]),ee=e=>{const r=l.indexOf(e);r===-1?l.push(e):l.splice(r,1)},re=n(()=>x.value.filter(e=>!l.length||l.includes(e.status))),te=()=>({dateRangeType:"order_date",dateRangeStart:S.start,dateRangeEnd:S.end}),m=async()=>{await a.handleLoadOrdersPage(te(),y),a.handleLoadClaims(),a.handleLoadCoupons()},oe=async e=>{e&&Z(e),y.pageNo=1,await m()},ie=async()=>{await m()},ae=async()=>{await m()};C(async()=>{m()});const O=e=>{const r=I.value[e.orderId];return!(r&&!a.CLAIM_DONE.includes(r.status))};return{uiState:c,handleBtnAction:A,handleSelectAction:B,fnCallbackModal:f,myStore:a,orders:x,claimsByOrderId:I,cfDateFilteredOrders:re,pager:y,flowStatusFilter:l,onSearch:oe,onPageChange:ie,onSizeChange:ae,showOrderPayBreakdown:E,fnCanCancel:e=>a.CANCELABLE.includes(e.status)&&O(e),fnCanExchange:e=>e.status==="\uBC30\uC1A1\uC644\uB8CC"&&O(e),fnShowCourierStep:(e,r)=>r==="\uBC30\uC1A1\uC644\uB8CC"&&!!e.trackingNo&&a.SHOW_COURIER.includes(e.status),fnShowClaimPickup:(e,r)=>{if(!e||!e.trackingNo||r!=="\uC218\uAC70\uC644\uB8CC")return!1;const i=a.CLAIM_FLOWS[e.type];return i.indexOf(e.status)>=i.indexOf("\uC218\uAC70\uC644\uB8CC")},fnShowClaimShip:(e,r)=>!e||r!=="\uBC1C\uC1A1\uC644\uB8CC"||!e.exchangeTrackingNo?!1:["\uBC1C\uC1A1\uC644\uB8CC","\uAD50\uD658\uC644\uB8CC"].includes(e.status),EXCHANGE_REASONS:D,RETURN_REASONS:j,claimModal:t,cfClaimShippingFee:b,cfApplicableCoupons:W,cfClaimFinalFee:H,cfClaimModalProduct:G,reviewModal:o,getReview:Q,onReviewFileChange:V,cfAuthUser:k,findProd:h,SITE_CONFIG:window.SITE_CONFIG,cartCount:n(()=>M.length)}},template:`
<fo-page bare>
<fo-my-layout :navigate="navigate" :cart-count="cartCount" active-page="myOrder">
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <MyDateFilter @search="onSearch" @reset="handleBtnAction('orders-flowReset')" />
  <!-- ===== \u25A0. \uC8FC\uBB38 \uCC98\uB9AC \uD750\uB984 (\uD1A0\uAE00 \uD544\uD130) ======================================== -->
  <div style="background:#f4f5f7;border:1px solid var(--border);border-radius:var(--radius);padding:8px 12px;margin-bottom:14px;">
    <div style="display:flex;align-items:center;gap:6px;overflow-x:auto;flex-wrap:nowrap;">
      <span style="font-size:0.72rem;font-weight:800;padding:3px 10px;border-radius:10px;color:#fff;background:#16a34a;flex-shrink:0;">
        \uC8FC\uBB38
      </span>
      <span style="font-size:0.75rem;color:var(--border);flex-shrink:0;">
        \u203A
      </span>
      <template v-for="(step, si) in myStore.ORDER_FLOW" :key="step.status">
        <button @click="orders.filter(o=>o.status===step.status).length>0 ? handleSelectAction('orders-flowToggle', step.status) : null" style="display:flex;align-items:center;gap:4px;padding:4px 10px;border-radius:20px;border:1.5px solid transparent;white-space:nowrap;flex-shrink:0;transition:all 0.15s;" :style="flowStatusFilter.includes(step.status) ? 'background:var(--blue);border-color:var(--blue);cursor:pointer;' : orders.filter(o=>o.status===step.status).length>0 ? 'background:var(--bg-card);border-color:var(--border);cursor:pointer;' : 'background:transparent;border-color:transparent;opacity:0.35;cursor:default;'">
        <span style="font-size:0.7rem;font-weight:700;"
            :style="flowStatusFilter.includes(step.status) ? 'color:#fff;' : orders.filter(o=>o.status===step.status).length>0 ? 'color:var(--text-primary);' : 'color:var(--text-muted);'">
          {{ step.label || step.status }}
        </span>
        <span v-if="orders.filter(o=>o.status===step.status).length>0"
            style="font-size:0.65rem;font-weight:800;padding:0px 5px;border-radius:8px;"
            :style="flowStatusFilter.includes(step.status) ? 'background:rgba(255,255,255,0.25);color:#fff;' : 'background:var(--blue-dim);color:var(--blue);'">
          {{ orders.filter(o=>o.status===step.status).length }}
        </span>
      </button>
      <span v-if="si < myStore.ORDER_FLOW.length-1" style="font-size:0.75rem;color:var(--border);flex-shrink:0;">
        \u203A
      </span>
    </template>
    <button v-if="flowStatusFilter.length" @click="handleBtnAction('orders-flowReset')"
        style="margin-left:4px;font-size:0.68rem;padding:2px 7px;border-radius:6px;border:1px solid var(--border);background:var(--bg-base);color:var(--text-secondary);cursor:pointer;flex-shrink:0;">
      \u2715
    </button>
    <button type="button" @click="handleBtnAction('orders-helpOpen')" aria-label="\uB3C4\uC6C0\uB9D0"
        style="margin-left:auto;flex-shrink:0;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--border);background:var(--bg-base);cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--blue);">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    </button>
  </div>
</div>
<!-- ===== \u25A1. \uC8FC\uBB38 \uCC98\uB9AC \uD750\uB984 (\uD1A0\uAE00 \uD544\uD130) ======================================== -->
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<PagerHeader :total="pager.pageTotalCount" :pager="pager" @size-change="onSizeChange" />
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<div v-if="!cfDateFilteredOrders.length" style="text-align:center;padding:60px 0;color:var(--text-muted);">
  \uC8FC\uBB38 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
</div>
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<div v-for="o in cfDateFilteredOrders" :key="o.orderId"
    style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:12px;">
  <!-- ===== \u25A0.\u25A0. \uC8FC\uBB38 \uD5E4\uB354 ================================================= -->
  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin:-16px -16px 12px;padding:12px 16px;border-bottom:1px solid var(--border);border-radius:var(--radius) var(--radius) 0 0;background:linear-gradient(135deg,rgba(34,197,94,0.15) 0%,rgba(255,255,255,0.6) 60%,rgba(255,255,255,0) 100%);">
    <div>
      <span style="font-weight:700;font-size:0.88rem;color:var(--text-primary);">
        {{ o.orderId }}
      </span>
      <span style="margin-left:10px;font-size:0.78rem;color:var(--text-muted);">
        \uC8FC\uBB38\uC77C: {{ o.orderDate }}
      </span>
      <button v-if="cfAuthUser" @click="handleSelectAction('orders-customerOpen', o)"
          style="margin-left:8px;font-size:0.78rem;font-weight:600;color:var(--text-secondary);border:none;background:none;cursor:pointer;padding:0;text-decoration:underline;text-underline-offset:2px;">
        <span style="font-weight:400;color:var(--text-muted);text-decoration:none;">
          \uC8FC\uBB38\uC790:
        </span>
        {{ cfAuthUser.name }}
      </button>
    </div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end;">
      <button v-if="fnCanCancel(o)" @click="handleSelectAction('orders-cancel', o.orderId)" style="padding:5px 12px;border:1.5px solid #ef4444;border-radius:6px;background:transparent;color:#ef4444;cursor:pointer;font-size:0.78rem;font-weight:600;">
      \uC8FC\uBB38\uCDE8\uC18C
    </button>
    <template v-if="fnCanExchange(o)">
    <button @click="handleSelectAction('orders-claimOpen', { orderId: o.orderId, type: 'exchange' })"
            style="padding:5px 12px;border:1.5px solid #f59e0b;border-radius:6px;background:transparent;color:#f59e0b;cursor:pointer;font-size:0.78rem;font-weight:600;white-space:nowrap;">
      \uAD50\uD658\uC2E0\uCCAD
    </button>
    <button @click="handleSelectAction('orders-claimOpen', { orderId: o.orderId, type: 'return' })"
            style="padding:5px 12px;border:1.5px solid #f97316;border-radius:6px;background:transparent;color:#f97316;cursor:pointer;font-size:0.78rem;font-weight:600;white-space:nowrap;">
      \uBC18\uD488\uC2E0\uCCAD
    </button>
    <button @click="handleSelectAction('orders-confirmPurchase', o.orderId)"
            style="padding:5px 12px;border:1.5px solid #22c55e;border-radius:6px;background:#22c55e;color:#fff;cursor:pointer;font-size:0.78rem;font-weight:700;white-space:nowrap;">
      \uAD6C\uB9E4\uD655\uC815
    </button>
  </template>
  <span style="font-size:0.78rem;font-weight:700;padding:5px 12px;border-radius:20px;color:#fff;white-space:nowrap;"
          :style="'background:' + myStore.statusColor(o.status)">
    {{ myStore.orderStatusLabel(o.status) }}
  </span>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \uC8FC\uBB38 \uD5E4\uB354 ================================================= -->
<!-- ===== \u25A0.\u25A0. \uC8FC\uBB38 \uC9C4\uD589 \uD504\uB85C\uC138\uC2A4 (\uCDE8\uC18C\uB428 \uD3EC\uD568) =================================== -->
<div v-if="myStore.ORDER_FLOW.findIndex(f=>f.status===o.status) >= 0 || o.status==='\uCDE8\uC18C\uB428'"
      style="background:#f6f6f6;border-radius:8px;padding:10px 14px;margin-bottom:12px;overflow-x:auto;">
  <div style="display:flex;align-items:flex-start;min-width:320px;">
    <template v-for="(step, si) in myStore.ORDER_FLOW" :key="step.status">
      <div style="display:flex;flex-direction:column;align-items:center;flex:1;min-width:48px;">
        <div :style="{
              width: o.status===step.status ? '14px' : '10px',
              height: o.status===step.status ? '14px' : '10px',
              borderRadius:'50%', marginBottom:'4px', flexShrink:0, transition:'all .15s',
              boxShadow: o.status===step.status ? '0 0 0 2px rgba(74,222,128,0.3)' : 'none',
              background: o.status==='\uCDE8\uC18C\uB428' ? '#bbb' : (myStore.ORDER_FLOW.findIndex(f=>f.status===o.status) >= si ? '#4ade80' : '#bbb'),
              }">
        </div>
        <div style="font-size:0.63rem;text-align:center;line-height:1.3;white-space:nowrap;"
              :style="o.status===step.status ? 'color:#16a34a;font-weight:800;'
              : myStore.ORDER_FLOW.findIndex(f=>f.status===o.status) > si ? 'color:var(--text-secondary);font-weight:600;'
              : 'color:var(--text-muted);'">
          {{ step.label || step.status }}
        </div>
        <button v-if="fnShowCourierStep(o, step.status)" @click.stop="handleSelectAction('orders-track', { courier: o.courier, trackingNo: o.trackingNo })" style="margin-top:3px;padding:1px 6px;border-radius:4px;border:1px solid #86efac;background:#dcfce7;color:#15803d;cursor:pointer;font-size:0.58rem;font-weight:700;white-space:nowrap;">
        {{ (o.courier||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','').replace('\uB85C\uC9C0\uC2A4','') }}\uBC30\uC1A1
      </button>
    </div>
    <div v-if="si < myStore.ORDER_FLOW.length-1" style="height:2px;flex:1;margin-bottom:16px;flex-shrink:0;min-width:8px;"
            :style="o.status==='\uCDE8\uC18C\uB428' ? 'background:#bbb;' : (myStore.ORDER_FLOW.findIndex(f=>f.status===o.status) > si ? 'background:#4ade80;' : 'background:#bbb;')">
    </div>
  </template>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \uC8FC\uBB38 \uC9C4\uD589 \uD504\uB85C\uC138\uC2A4 (\uCDE8\uC18C\uB428 \uD3EC\uD568) =================================== -->
<!-- ===== \u25A0.\u25A0. \uD074\uB808\uC784 \uC815\uBCF4 ================================================ -->
<template v-if="claimsByOrderId[o.orderId]">
  <div :style="'border-left:3px solid '+myStore.CLAIM_TYPE_COLOR[claimsByOrderId[o.orderId].type]+';background:#FAFAFA;border-radius:0 8px 8px 0;padding:10px 14px;margin-bottom:12px;'">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:0.8rem;font-weight:800;" :style="'color:'+myStore.CLAIM_TYPE_COLOR[claimsByOrderId[o.orderId].type]">
          \u21A9 {{ claimsByOrderId[o.orderId].type }} \uC2E0\uCCAD
        </span>
        <span style="font-size:0.7rem;color:var(--text-muted);font-weight:600;">
          {{ claimsByOrderId[o.orderId].claimId }}
        </span>
      </div>
      <span style="font-size:0.7rem;font-weight:700;padding:2px 8px;border-radius:12px;color:#fff;"
            :style="'background:'+myStore.CLAIM_STATUS_COLOR(claimsByOrderId[o.orderId].status)">
        {{ claimsByOrderId[o.orderId].status }}
      </span>
    </div>
    <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:8px;">
      \uC2E0\uCCAD\uC77C: {{ claimsByOrderId[o.orderId].requestDate }}
      <span v-if="claimsByOrderId[o.orderId].completeDate">
        \xB7 \uC644\uB8CC: {{ claimsByOrderId[o.orderId].completeDate }}
      </span>
    </div>
    <div style="overflow-x:auto;margin-bottom:8px;">
      <div style="display:flex;align-items:flex-start;min-width:220px;">
        <template v-for="(step, si) in myStore.CLAIM_FLOWS[claimsByOrderId[o.orderId].type]" :key="step">
          <div style="display:flex;flex-direction:column;align-items:center;flex:1;min-width:38px;">
            <div :style="{
                  width: claimsByOrderId[o.orderId].status===step ? '14px' : '10px',
                  height: claimsByOrderId[o.orderId].status===step ? '14px' : '10px',
                  borderRadius:'50%', marginBottom:'4px', flexShrink:0, transition:'all .15s',
                  boxShadow: claimsByOrderId[o.orderId].status===step
                  ? '0 0 0 2px '+myStore.CLAIM_TYPE_COLOR[claimsByOrderId[o.orderId].type]+'4d' : 'none',
                  background: myStore.CLAIM_FLOWS[claimsByOrderId[o.orderId].type].indexOf(claimsByOrderId[o.orderId].status) >= si
                  ? myStore.CLAIM_TYPE_COLOR[claimsByOrderId[o.orderId].type] : '#bbb',
                  }">
            </div>
            <div style="font-size:0.57rem;text-align:center;line-height:1.2;white-space:nowrap;"
                  :style="claimsByOrderId[o.orderId].status===step
                  ? 'color:'+myStore.CLAIM_TYPE_COLOR[claimsByOrderId[o.orderId].type]+';font-weight:800;'
                  : myStore.CLAIM_FLOWS[claimsByOrderId[o.orderId].type].indexOf(claimsByOrderId[o.orderId].status) > si
                  ? 'color:var(--text-secondary);' : 'color:var(--text-muted);'">
              {{ step }}
            </div>
            <button v-if="fnShowClaimPickup(claimsByOrderId[o.orderId], step)" @click.stop="handleSelectAction('orders-track2', { courier: claimsByOrderId[o.orderId].courier, trackingNo: claimsByOrderId[o.orderId].trackingNo })" style="margin-top:2px;padding:1px 4px;border-radius:3px;border:1px solid #fed7aa;background:#fff7ed;color:#c2410c;cursor:pointer;font-size:0.52rem;font-weight:700;white-space:nowrap;">
            {{ (claimsByOrderId[o.orderId].courier||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','').replace('\uB85C\uC9C0\uC2A4','') }}\uC218\uAC70
          </button>
          <button v-if="fnShowClaimShip(claimsByOrderId[o.orderId], step)" @click.stop="handleSelectAction('orders-track2', { courier: claimsByOrderId[o.orderId].exchangeCourier, trackingNo: claimsByOrderId[o.orderId].exchangeTrackingNo })" style="margin-top:2px;padding:1px 4px;border-radius:3px;border:1px solid #93c5fd;background:#dbeafe;color:#1d4ed8;cursor:pointer;font-size:0.52rem;font-weight:700;white-space:nowrap;">
          {{ (claimsByOrderId[o.orderId].exchangeCourier||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','').replace('\uB85C\uC9C0\uC2A4','') }}\uBC1C\uC1A1
        </button>
      </div>
      <div v-if="si < myStore.CLAIM_FLOWS[claimsByOrderId[o.orderId].type].length-1"
                style="height:1.5px;flex:1;margin-bottom:13px;flex-shrink:0;min-width:6px;"
                :style="myStore.CLAIM_FLOWS[claimsByOrderId[o.orderId].type].indexOf(claimsByOrderId[o.orderId].status) > si
                ? 'background:'+myStore.CLAIM_TYPE_COLOR[claimsByOrderId[o.orderId].type] : 'background:#bbb'">
      </div>
    </template>
  </div>
</div>
<!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
<div style="font-size:0.73rem;margin-bottom:5px;">
  <span style="color:var(--text-muted);">
    \uC0AC\uC720
  </span>
  <span style="margin-left:5px;font-weight:600;color:var(--text-primary);">
    {{ claimsByOrderId[o.orderId].reason }}
  </span>
  <span v-if="claimsByOrderId[o.orderId].reasonDetail" style="margin-left:4px;color:var(--text-muted);">
    \xB7 {{ claimsByOrderId[o.orderId].reasonDetail }}
  </span>
</div>
<div v-if="claimsByOrderId[o.orderId].refundAmount" style="font-size:0.73rem;margin-bottom:3px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
  <span style="color:var(--text-muted);">
    \uD658\uBD88 \uC608\uC815
  </span>
  <span style="font-weight:700;color:var(--text-primary);">
    {{ claimsByOrderId[o.orderId].refundAmount.toLocaleString() }}\uC6D0
  </span>
  <span v-if="claimsByOrderId[o.orderId].refundMethod" style="color:var(--text-muted);">
    \xB7 {{ claimsByOrderId[o.orderId].refundMethod }}
  </span>
  <template v-if="claimsByOrderId[o.orderId].refundDetails?.length">
  <template v-for="(rd, rdi) in claimsByOrderId[o.orderId].refundDetails" :key="rdi">
    <span v-if="rd.account" style="color:var(--text-secondary);">
      {{ rd.account }}
    </span>
    <span v-if="rd.name ? rd.type==='\uACC4\uC88C\uD658\uBD88' : false" style="color:var(--text-secondary);">
    \xB7 {{ rd.name }}
  </span>
  <span style="color:var(--text-muted);">
    {{ rd.datetime }}
  </span>
</template>
</template>
</div>
<div v-if="claimsByOrderId[o.orderId].type==='\uAD50\uD658' ? (claimsByOrderId[o.orderId].exchangeSize || claimsByOrderId[o.orderId].exchangeColor) : false" style="font-size:0.73rem;margin-bottom:3px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
<span style="color:var(--text-muted);">
  \uAD50\uD658
</span>
<span v-if="claimsByOrderId[o.orderId].exchangeSize" style="font-weight:700;color:var(--text-primary);">
  \uC0AC\uC774\uC988 \u2192 {{ claimsByOrderId[o.orderId].exchangeSize }}
</span>
<span v-if="claimsByOrderId[o.orderId].exchangeColor" style="font-weight:700;color:var(--text-primary);">
  \uC0C9\uC0C1 \u2192 {{ claimsByOrderId[o.orderId].exchangeColor }}
</span>
</div>
<!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ============================================ -->
<div v-if="claimsByOrderId[o.orderId].courier" style="font-size:0.7rem;color:var(--text-muted);margin-bottom:2px;display:flex;align-items:center;gap:5px;flex-wrap:wrap;">
  <span>
    \uC218\uAC70 {{ claimsByOrderId[o.orderId].courier }}
  </span>
  <button v-if="claimsByOrderId[o.orderId].trackingNo" @click.stop="handleSelectAction('orders-track2', { courier: claimsByOrderId[o.orderId].courier, trackingNo: claimsByOrderId[o.orderId].trackingNo })"
            style="padding:1px 6px;border:1px solid var(--border);border-radius:4px;background:var(--bg-card);color:var(--blue);cursor:pointer;font-size:0.65rem;font-weight:600;">
    {{ claimsByOrderId[o.orderId].trackingNo }}
  </button>
</div>
<div v-if="claimsByOrderId[o.orderId].exchangeCourier" style="font-size:0.7rem;color:var(--text-muted);margin-bottom:2px;display:flex;align-items:center;gap:5px;flex-wrap:wrap;">
  <span>
    \uAD50\uD658 \uBC1C\uC1A1 {{ claimsByOrderId[o.orderId].exchangeCourier }}
  </span>
  <button v-if="claimsByOrderId[o.orderId].exchangeTrackingNo" @click.stop="handleSelectAction('orders-track2', { courier: claimsByOrderId[o.orderId].exchangeCourier, trackingNo: claimsByOrderId[o.orderId].exchangeTrackingNo })"
            style="padding:1px 6px;border:1px solid var(--border);border-radius:4px;background:var(--bg-card);color:var(--blue);cursor:pointer;font-size:0.65rem;font-weight:600;">
    {{ claimsByOrderId[o.orderId].exchangeTrackingNo }}
  </button>
</div>
<div v-if="claimsByOrderId[o.orderId].pickupDate" style="font-size:0.7rem;color:var(--text-muted);">
  \uC218\uAC70 \uC608\uC815\uC77C {{ claimsByOrderId[o.orderId].pickupDate }}
</div>
</div>
</template>
<!-- ===== \u25A1.\u25A1. \uD074\uB808\uC784 \uC815\uBCF4 ================================================ -->
<!-- ===== \u25A0.\u25A0. \uC0C1\uD488 \uBAA9\uB85D ================================================= -->
<div v-for="(item, iix) in o.orderItems" :key="iix">
  <div style="display:flex;align-items:center;gap:10px;padding:6px 0;">
    <span style="font-size:1.4rem;">
      {{ item.emoji }}
    </span>
    <div style="flex:1;">
      <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;">
        <span style="font-size:0.88rem;font-weight:600;color:var(--text-primary);">
          {{ item.prodNm }}
        </span>
        <button v-if="findProd(item.prodNm)" @click="handleSelectAction('orders-prodOpen', item.prodNm)"
              style="font-size:0.65rem;padding:0 5px;border:1px solid var(--border);border-radius:4px;background:var(--bg-base);color:var(--text-muted);cursor:pointer;font-weight:600;line-height:1.7;white-space:nowrap;">
          #{{ findProd(item.prodNm).prodId }}
        </button>
      </div>
      <div style="font-size:0.78rem;color:var(--text-muted);">
        {{ item.color }} / {{ item.size }} / {{ item.qty }}\uAC1C
      </div>
      <div v-if="getReview(o.orderId, iix)" style="margin-top:3px;display:flex;align-items:center;gap:4px;">
        <span style="font-size:0.72rem;color:#f59e0b;">
          {{ '\u2605'.repeat(getReview(o.orderId,iix).rating) }}{{ '\u2606'.repeat(5-getReview(o.orderId,iix).rating) }}
        </span>
        <span style="font-size:0.7rem;color:var(--text-muted);">
          {{ getReview(o.orderId,iix).text.slice(0,20) }}{{ getReview(o.orderId,iix).text.length>20?'\u2026':'' }}
        </span>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
      <div style="font-size:0.88rem;font-weight:700;color:var(--blue);">
        {{ item.price.toLocaleString() }}\uC6D0
      </div>
      <button v-if="o.status==='\uBC30\uC1A1\uC644\uB8CC' || o.status==='\uAD6C\uB9E4\uD655\uC815'"
            @click="handleSelectAction('orders-reviewOpen', { orderId: o.orderId, itemIdx: iix, item })"
            style="font-size:0.7rem;padding:3px 9px;border-radius:6px;border:1.5px solid;cursor:pointer;font-weight:700;white-space:nowrap;"
            :style="getReview(o.orderId,iix)
            ? 'border-color:#6366f1;background:#eef2ff;color:#6366f1;'
            : 'border-color:#22c55e;background:#f0fdf4;color:#16a34a;'">
        {{ getReview(o.orderId,iix) ? '\uB9AC\uBDF0\uC218\uC815' : '\uB9AC\uBDF0\uC791\uC131' }}
      </button>
    </div>
  </div>
  <div v-if="item.productCoupon?.discount" style="margin:1px 0 4px 46px;padding:3px 8px;border-radius:5px;font-size:0.68rem;background:var(--bg-base);display:inline-flex;align-items:center;gap:4px;">
  <span style="color:var(--text-muted);">
    \u{1F39F}
  </span>
  <span style="color:var(--text-muted);">
    {{ item.productCoupon.name }}
  </span>
  <span style="font-weight:700;color:#16a34a;">
    -{{ Number(item.productCoupon.discount).toLocaleString() }}\uC6D0
  </span>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \uC0C1\uD488 \uBAA9\uB85D ================================================= -->
<!-- ===== \u25A0.\u25A0. \uACB0\uC81C \uB0B4\uC5ED ================================================= -->
<div v-if="showOrderPayBreakdown(o)" style="border-top:1px dashed var(--border);margin-top:10px;padding-top:12px;display:flex;flex-direction:column;gap:6px;">
  <div v-if="o.shippingFee != null ? o.shippingFee > 0 : false" style="display:flex;justify-content:space-between;font-size:0.8rem;color:var(--text-secondary);">
  <span>
    \uBC30\uC1A1\uBE44
  </span>
  <span style="font-weight:600;color:var(--text-primary);">
    {{ o.shippingFee.toLocaleString() }}\uC6D0
  </span>
</div>
<div v-if="Number(o.shippingCoupon?.discount) > 0" style="display:flex;justify-content:space-between;font-size:0.8rem;">
<span style="color:var(--text-secondary);">
  \u{1F69A} \uBC30\uC1A1\uBE44 \uCFE0\uD3F0 \xB7
  <span style="color:var(--text-primary);font-weight:600;">
    {{ o.shippingCoupon.name }}
  </span>
</span>
<span style="font-weight:800;color:var(--blue);">
  -{{ Number(o.shippingCoupon.discount).toLocaleString() }}\uC6D0
</span>
</div>
<div v-if="Number(o.cashPaid) > 0" style="display:flex;justify-content:space-between;font-size:0.8rem;">
  <span style="color:var(--text-secondary);">
    \u{1F4B0} \uCE90\uC26C \uACB0\uC81C
  </span>
  <span style="font-weight:700;color:var(--text-primary);">
    {{ Number(o.cashPaid).toLocaleString() }}\uC6D0
  </span>
</div>
<div v-if="Number(o.transferPaid) > 0" style="display:flex;align-items:center;gap:10px;font-size:0.8rem;flex-wrap:wrap;">
  <span style="color:var(--text-secondary);flex-shrink:0;">
    \u{1F3E6} \uACC4\uC88C\uC774\uCCB4
  </span>
  <span v-if="o.status==='\uC8FC\uBB38\uC644\uB8CC'" style="font-size:0.76rem;font-weight:700;color:#d97706;">
    \uC785\uAE08\uD655\uC778\uC911...
  </span>
  <span style="margin-left:auto;font-weight:700;color:var(--text-primary);">
    {{ Number(o.transferPaid).toLocaleString() }}\uC6D0
  </span>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \uACB0\uC81C \uB0B4\uC5ED ================================================= -->
<!-- ===== \u25A0.\u25A0. \uC785\uAE08 \uB0B4\uC5ED ================================================= -->
<div v-if="o.paymentDetails?.length" style="border-top:1px dashed var(--border);margin-top:8px;padding-top:8px;">
<div style="font-size:0.68rem;font-weight:700;color:var(--text-muted);letter-spacing:0.04em;margin-bottom:5px;">
  \u{1F4B3} \uC785\uAE08 \uB0B4\uC5ED
</div>
<div v-for="(pd, pdi) in o.paymentDetails" :key="pdi"
        style="display:flex;align-items:center;gap:6px;font-size:0.72rem;padding:3px 0;flex-wrap:wrap;border-bottom:1px dashed var(--border);">
  <span style="color:var(--text-muted);white-space:nowrap;flex-shrink:0;">
    {{ pd.datetime }}
  </span>
  <span style="padding:1px 7px;border-radius:4px;font-weight:700;white-space:nowrap;flex-shrink:0;"
          :style="pd.type==='\uACC4\uC88C\uC774\uCCB4'||pd.type==='\uACC4\uC88C\uD658\uBD88' ? 'background:#dcfce7;color:#16a34a;'
          : pd.type==='\uCE74\uB4DC\uACB0\uC81C'||pd.type==='\uCE74\uB4DC\uCDE8\uC18C' ? 'background:#dbeafe;color:#1d4ed8;'
          : pd.type==='\uCE90\uC26C'||pd.type==='\uCE90\uC26C\uD658\uAE09' ? 'background:#fef3c7;color:#d97706;'
          : 'background:var(--bg-base);color:var(--text-secondary);'">
    {{ pd.type }}
  </span>
  <span style="font-weight:700;color:var(--text-primary);white-space:nowrap;">
    {{ pd.amount.toLocaleString() }}\uC6D0
  </span>
  <span style="color:var(--text-secondary);white-space:nowrap;">
    {{ pd.name }}
  </span>
  <span v-if="pd.account" style="color:var(--text-muted);white-space:nowrap;">
    {{ pd.account }}
  </span>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \uC785\uAE08 \uB0B4\uC5ED ================================================= -->
<!-- ===== \u25A0.\u25A0. \uD569\uACC4 + \uD0DD\uBC30 =============================================== -->
<div style="border-top:1px solid var(--border);margin-top:10px;padding-top:10px;">
  <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;">
    <div v-if="myStore.SHOW_COURIER.includes(o.status) ? o.courier : false" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
    <span style="font-size:0.8rem;color:var(--text-muted);">
      \u{1F69A} {{ o.courier }}
    </span>
    <button @click="handleSelectAction('orders-track', { courier: o.courier, trackingNo: o.trackingNo })"
            style="padding:3px 10px;border:1.5px solid var(--blue);border-radius:20px;background:transparent;color:var(--blue);cursor:pointer;font-size:0.78rem;font-weight:700;">
      {{ o.trackingNo }}
    </button>
  </div>
  <div v-else style="flex:1;min-width:0;">
  </div>
  <div style="text-align:right;">
    <div v-if="showOrderPayBreakdown(o)" style="font-size:0.72rem;color:var(--text-muted);margin-bottom:2px;">
      \uCD1D \uACB0\uC81C\uAE08\uC561
    </div>
    <span style="font-size:0.9rem;font-weight:700;color:var(--blue);">
      {{ o.totalPrice.toLocaleString() }}\uC6D0
    </span>
  </div>
</div>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \uD569\uACC4 + \uD0DD\uBC30 =============================================== -->
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<Pagination :total="pager.pageTotalCount" :pager="pager" @set-page="onPageChange" />
<!-- ===== \u25A0. Teleport \uBAA8\uB2EC\uB4E4 ============================================ -->
<Teleport to="body">
  <!-- ===== \u25A0.\u25A0. \uB9AC\uBDF0 \uC791\uC131/\uC218\uC815 \uBAA8\uB2EC =========================================== -->
  <fo-modal :show="reviewModal.show" max-width="480px" box-pad="0" @close="handleBtnAction('review-modalClose')">
    <div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD5E4\uB354 ================================================ -->
      <div style="padding:18px 20px 14px;border-bottom:1px solid var(--border);">
        <div style="font-size:1rem;font-weight:800;color:var(--text-primary);">
          {{ reviewModal.isEdit ? '\uB9AC\uBDF0 \uC218\uC815' : '\uB9AC\uBDF0 \uC791\uC131' }}
        </div>
        <div v-if="reviewModal.item" style="font-size:0.78rem;color:var(--text-muted);margin-top:2px;display:flex;align-items:center;gap:5px;flex-wrap:wrap;">
          <span>
            {{ reviewModal.item.emoji }} {{ reviewModal.item.prodNm }}
          </span>
          <span v-if="findProd(reviewModal.item.prodNm)"
              style="font-size:0.7rem;padding:0 5px;border:1px solid var(--border);border-radius:4px;background:var(--bg-base);color:var(--text-muted);font-weight:600;line-height:1.7;">
            #{{ findProd(reviewModal.item.prodNm).prodId }}
          </span>
          <span style="color:var(--border);">
            \xB7
          </span>
          <span>
            {{ reviewModal.item.color }} / {{ reviewModal.item.size }}
          </span>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBCC4\uC810 ================================================ -->
      <div style="padding:18px 20px 0;">
        <div style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);margin-bottom:8px;">
          \uBCC4\uC810
        </div>
        <div style="display:flex;gap:6px;margin-bottom:16px;">
          <button v-for="s in [1,2,3,4,5]" :key="s" @click="handleBtnAction('review-setRating', s)"
              style="background:none;border:none;cursor:pointer;font-size:1.8rem;padding:0;line-height:1;transition:transform 0.1s;"
              :style="s<=reviewModal.rating ? 'color:#f59e0b;' : 'color:#d1d5db;'">
            \u2605
          </button>
          <span style="margin-left:6px;font-size:0.85rem;font-weight:700;color:var(--text-secondary);align-self:center;">
            {{ ['','\uB9E4\uC6B0 \uBD88\uB9CC\uC871','\uBD88\uB9CC\uC871','\uBCF4\uD1B5','\uB9CC\uC871','\uB9E4\uC6B0 \uB9CC\uC871'][reviewModal.rating] }}
          </span>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB9AC\uBDF0 \uD14D\uC2A4\uD2B8 ========================================== -->
        <div style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);margin-bottom:6px;">
          \uB9AC\uBDF0 \uB0B4\uC6A9
        </div>
        <textarea v-model="reviewModal.text" @input="reviewModal.text.trim().length >= 10 ? reviewModal.errMsg = '' : null"
            placeholder="\uC0C1\uD488\uC5D0 \uB300\uD55C \uC194\uC9C1\uD55C \uB9AC\uBDF0\uB97C \uC791\uC131\uD574\uC8FC\uC138\uC694. (10\uC790 \uC774\uC0C1)"
            :style="'width:100%;min-height:110px;padding:10px 12px;border:1.5px solid ' + (reviewModal.errMsg ? '#ef4444' : 'var(--border)') + ';border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.85rem;resize:vertical;outline:none;box-sizing:border-box;font-family:inherit;line-height:1.6;'"></textarea>
          <div v-if="reviewModal.errMsg" style="color:#ef4444;font-size:0.78rem;margin-top:4px;">
            {{ reviewModal.errMsg }}
          </div>
          <div style="text-align:right;font-size:0.72rem;color:var(--text-muted);margin-top:3px;">
            {{ reviewModal.text.length }}\uC790
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCCA8\uBD80 ============================================== -->
          <div style="margin-top:14px;">
            <div style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);margin-bottom:6px;">
              \uCCA8\uBD80 \uD30C\uC77C
              <span style="font-size:0.72rem;font-weight:400;color:var(--text-muted);">
                (\uC774\uBBF8\uC9C0 \uCD5C\uB300 5\uAC1C)
              </span>
            </div>
            <label style="display:inline-flex;align-items:center;gap:5px;padding:6px 14px;border:1.5px dashed var(--border);border-radius:8px;cursor:pointer;font-size:0.8rem;color:var(--text-secondary);background:var(--bg-base);">
              \u{1F4CE} \uD30C\uC77C \uC120\uD0DD
              <input type="file" accept="image/*" multiple @change="onReviewFileChange" style="display:none;" />
            </label>
            <div v-if="reviewModal.files.length" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">
              <div v-for="(f, fi) in reviewModal.files" :key="fi"
                style="display:flex;align-items:center;gap:4px;padding:3px 8px 3px 10px;background:var(--bg-base);border:1px solid var(--border);border-radius:20px;font-size:0.72rem;color:var(--text-secondary);">
                <span style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                  {{ f.name }}
                </span>
                <button @click="handleSelectAction('review-fileRemove', fi)" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:0.85rem;padding:0;line-height:1;margin-left:2px;">
                  \xD7
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD478\uD130 ================================================ -->
        <div style="padding:14px 20px 18px;display:flex;gap:8px;justify-content:flex-end;">
          <button @click="handleBtnAction('review-modalClose')"
            style="padding:8px 18px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-secondary);cursor:pointer;font-size:0.85rem;font-weight:600;">
            \uCDE8\uC18C
          </button>
          <button @click="handleBtnAction('review-submit')"
            style="padding:8px 22px;border:none;border-radius:8px;background:#22c55e;color:#fff;cursor:pointer;font-size:0.85rem;font-weight:700;">
            {{ reviewModal.isEdit ? '\uC218\uC815 \uC644\uB8CC' : '\uB9AC\uBDF0 \uB4F1\uB85D' }}
          </button>
        </div>
      </div>
    </div>
  </fo-modal>
  <!-- ===== \u25A1.\u25A1. \uB9AC\uBDF0 \uC791\uC131/\uC218\uC815 \uBAA8\uB2EC =========================================== -->
    <!-- ===== \u25A0.\u25A0. \uB3C4\uC6C0\uB9D0 \uBAA8\uB2EC ================================================ -->
    <fo-modal :show="uiState.flowHelpOpen" title="\u{1F4CB} \uC8FC\uBB38 \xB7 \uD074\uB808\uC784 \uB3C4\uC6C0\uB9D0" max-width="520px" box-pad="0" @close="handleBtnAction('orders-helpClose')">
      <div style="display:flex;flex-direction:column;max-height:80vh;">
        <div style="padding:12px 20px 0;flex-shrink:0;">
          <div style="display:flex;border-bottom:2px solid var(--border);">
            <button v-for="t in [{id:'order',label:'\uC8FC\uBB38',icon:'\u{1F4E6}'},{id:'cancel',label:'\uCDE8\uC18C',icon:'\u{1F6AB}'},{id:'return',label:'\uBC18\uD488',icon:'\u21A9\uFE0F'},{id:'exchange',label:'\uAD50\uD658',icon:'\u{1F504}'}]"
              :key="t.id" @click="handleBtnAction('orders-helpTab', t.id)"
              style="padding:8px 14px;border:none;cursor:pointer;font-size:0.82rem;font-weight:700;background:none;position:relative;white-space:nowrap;"
              :style="uiState.helpTab===t.id ? 'color:var(--blue);' : 'color:var(--text-muted);'">
              {{ t.icon }} {{ t.label }}
              <span v-if="uiState.helpTab===t.id" style="position:absolute;bottom:-2px;left:0;right:0;height:2px;background:var(--blue);border-radius:2px;">
              </span>
            </button>
          </div>
        </div>
        <div style="padding:18px 20px 20px;overflow-y:auto;flex:1;">
          <div v-if="uiState.helpTab==='order'">
            <p style="font-size:0.8rem;color:var(--text-muted);margin:0 0 14px;line-height:1.5;">
              \uC8FC\uBB38 \uC811\uC218\uBD80\uD130 \uAD6C\uB9E4\uD655\uC815\uAE4C\uC9C0 \uC544\uB798 \uC21C\uC11C\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4.
            </p>
            <div v-for="s in [{icon:'\u{1F4CB}',status:'\uC8FC\uBB38\uC644\uB8CC',color:'#3b82f6',desc:'\uC8FC\uBB38\uC774 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uACC4\uC88C\uC774\uCCB4\uC758 \uACBD\uC6B0 \uC785\uAE08 \uD655\uC778 \uD6C4 \uB2E4\uC74C \uB2E8\uACC4\uB85C \uB118\uC5B4\uAC11\uB2C8\uB2E4.',tip:'\uC8FC\uBB38\uC644\uB8CC\xB7\uACB0\uC81C\uC644\uB8CC \uC0C1\uD0DC\uC5D0\uC11C\uB9CC \uC8FC\uBB38 \uCDE8\uC18C\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4.'},{icon:'\u{1F4B3}',status:'\uACB0\uC81C\uC644\uB8CC',color:'#8b5cf6',desc:'\uC785\uAE08 \uD655\uC778 \uB610\uB294 \uCE74\uB4DC/\uCE90\uC26C \uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5B4 \uC0C1\uD488 \uC900\uBE44\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4.',tip:null},{icon:'\u{1F4E6}',status:'\uBC30\uC1A1\uC900\uBE44\uC911',color:'#f59e0b',desc:'\uC0C1\uD488\uC744 \uD3EC\uC7A5\uD558\uACE0 \uCD9C\uACE0 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uC774 \uB2E8\uACC4\uBD80\uD130\uB294 \uC8FC\uBB38 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uD569\uB2C8\uB2E4.',tip:'\uCDE8\uC18C\uAC00 \uD544\uC694\uD558\uBA74 \uBC30\uC1A1\uC644\uB8CC \uD6C4 \uBC18\uD488\uC73C\uB85C \uCC98\uB9AC\uD574 \uC8FC\uC138\uC694.'},{icon:'\u{1F69A}',status:'\uBC30\uC1A1\uC911',color:'#f97316',desc:'\uD0DD\uBC30\uC0AC\uC5D0 \uC778\uACC4\uB418\uC5B4 \uBC30\uC1A1\uC9C0\uB85C \uC774\uB3D9 \uC911\uC785\uB2C8\uB2E4.',tip:null},{icon:'\u2705',status:'\uBC30\uC1A1\uC644\uB8CC',color:'#22c55e',desc:'\uC0C1\uD488\uC774 \uB3C4\uCC29\uD588\uC2B5\uB2C8\uB2E4. \uAD50\uD658\xB7\uBC18\uD488 \uC2E0\uCCAD\uC740 \uC218\uB839 \uD6C4 7\uC77C \uC774\uB0B4\uC5D0 \uD574\uC8FC\uC138\uC694.',tip:'\uBC30\uC1A1\uC644\uB8CC \uC0C1\uD0DC\uC5D0\uC11C \uAD50\uD658\uC2E0\uCCAD\xB7\uBC18\uD488\uC2E0\uCCAD\xB7\uAD6C\uB9E4\uD655\uC815 \uBC84\uD2BC\uC774 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.'},{icon:'\u{1F3C1}',status:'\uAD6C\uB9E4\uD655\uC815',color:'#6b7280',desc:'\uAC70\uB798\uAC00 \uCD5C\uC885 \uD655\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uAD6C\uB9E4\uD655\uC815 \uD6C4\uC5D0\uB294 \uAD50\uD658\xB7\uBC18\uD488 \uC2E0\uCCAD\uC774 \uBD88\uAC00\uD569\uB2C8\uB2E4.',tip:'\uBC30\uC1A1\uC644\uB8CC \uD6C4 \uBBF8\uD655\uC815 \uC2DC 14\uC77C \uD6C4 \uC790\uB3D9 \uAD6C\uB9E4\uD655\uC815 \uCC98\uB9AC\uB429\uB2C8\uB2E4.'}]" :key="s.status" style="display:flex;gap:12px;margin-bottom:14px;">
              <div style="flex-shrink:0;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;" :style="'background:'+s.color+'22;'">
                {{ s.icon }}
              </div>
              <div>
                <div style="font-size:0.85rem;font-weight:800;margin-bottom:3px;" :style="'color:'+s.color">
                  {{ s.status }}
                </div>
                <div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.5;">
                  {{ s.desc }}
                </div>
                <div v-if="s.tip" style="margin-top:4px;font-size:0.73rem;color:#f59e0b;background:#fef3c7;padding:3px 8px;border-radius:4px;display:inline-block;">
                  \u{1F4A1} {{ s.tip }}
                </div>
              </div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================== -->
          <div v-else-if="uiState.helpTab==='cancel'">
            <div style="background:#fee2e2;border-radius:8px;padding:10px 14px;margin-bottom:14px;">
              <div style="font-size:0.82rem;font-weight:800;color:#dc2626;margin-bottom:4px;">
                \u{1F6AB} \uCDE8\uC18C \uC2E0\uCCAD \uC548\uB0B4
              </div>
              <div style="font-size:0.76rem;color:#7f1d1d;line-height:1.55;">
                \uC8FC\uBB38\uC644\uB8CC \uB610\uB294 \uACB0\uC81C\uC644\uB8CC \uC0C1\uD0DC\uC77C \uB54C\uB9CC \uCDE8\uC18C \uC2E0\uCCAD\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
                <br>
                \uBC30\uC1A1\uC900\uBE44\uC911 \uC774\uD6C4\uC5D0\uB294 \uBC18\uD488\uC73C\uB85C \uCC98\uB9AC\uD574 \uC8FC\uC138\uC694.
              </div>
            </div>
            <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);margin-bottom:8px;">
              \uC9C4\uD589 \uD750\uB984
            </div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:16px;flex-wrap:wrap;">
              <span v-for="(st,i) in ['\uCDE8\uC18C\uC694\uCCAD','\uCDE8\uC18C\uCC98\uB9AC\uC911','\uCDE8\uC18C\uC644\uB8CC']" :key="st" style="display:flex;align-items:center;gap:6px;">
                <span style="padding:4px 10px;border-radius:20px;font-size:0.76rem;font-weight:700;background:#fee2e2;color:#dc2626;">
                  {{ st }}
                </span>
                <span v-if="i<2" style="color:var(--text-muted);">
                  \u2192
                </span>
              </span>
            </div>
          </div>
          <div v-else-if="uiState.helpTab==='return'">
            <div style="background:#fff7ed;border-radius:8px;padding:10px 14px;margin-bottom:14px;">
              <div style="font-size:0.82rem;font-weight:800;color:#ea580c;margin-bottom:4px;">
                \u21A9\uFE0F \uBC18\uD488 \uC2E0\uCCAD \uC548\uB0B4
              </div>
              <div style="font-size:0.76rem;color:#7c2d12;line-height:1.55;">
                \uBC30\uC1A1\uC644\uB8CC \uD6C4
                <strong>
                  7\uC77C \uC774\uB0B4
                </strong>
                \uC5D0 \uC2E0\uCCAD\uD574\uC57C \uD569\uB2C8\uB2E4.
                <br>
                \uBBF8\uCC29\uC6A9\xB7\uBBF8\uC138\uD0C1\xB7\uD0DC\uADF8 \uBD80\uCC29 \uC0C1\uD0DC\uC5EC\uC57C \uD569\uB2C8\uB2E4.
              </div>
            </div>
            <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);margin-bottom:8px;">
              \uC9C4\uD589 \uD750\uB984
            </div>
            <div style="display:flex;align-items:center;gap:4px;margin-bottom:16px;flex-wrap:wrap;">
              <span v-for="(st,i) in ['\uBC18\uD488\uC694\uCCAD','\uC218\uAC70\uC608\uC815','\uC218\uAC70\uC911','\uC218\uAC70\uC644\uB8CC','\uD658\uBD88\uCC98\uB9AC\uC911','\uD658\uBD88\uC644\uB8CC']" :key="st" style="display:flex;align-items:center;gap:4px;">
                <span style="padding:3px 8px;border-radius:20px;font-size:0.72rem;font-weight:700;background:#fff7ed;color:#ea580c;">
                  {{ st }}
                </span>
                <span v-if="i<5" style="color:var(--text-muted);">
                  \u2192
                </span>
              </span>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================== -->
          <div v-else-if="uiState.helpTab==='exchange'">
            <div style="background:#eff6ff;border-radius:8px;padding:10px 14px;margin-bottom:14px;">
              <div style="font-size:0.82rem;font-weight:800;color:#1d4ed8;margin-bottom:4px;">
                \u{1F504} \uAD50\uD658 \uC2E0\uCCAD \uC548\uB0B4
              </div>
              <div style="font-size:0.76rem;color:#1e3a8a;line-height:1.55;">
                \uBC30\uC1A1\uC644\uB8CC \uD6C4
                <strong>
                  7\uC77C \uC774\uB0B4
                </strong>
                \uC5D0 \uC2E0\uCCAD\uD574\uC57C \uD569\uB2C8\uB2E4.
                <br>
                \uB3D9\uC77C \uC0C1\uD488\uC758 \uC0AC\uC774\uC988\xB7\uC0C9\uC0C1 \uAD50\uD658\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.
              </div>
            </div>
            <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);margin-bottom:8px;">
              \uC9C4\uD589 \uD750\uB984
            </div>
            <div style="display:flex;align-items:center;gap:4px;margin-bottom:16px;flex-wrap:wrap;">
              <span v-for="(st,i) in ['\uAD50\uD658\uC694\uCCAD','\uC218\uAC70\uC608\uC815','\uC218\uAC70\uC911','\uC218\uAC70\uC644\uB8CC','\uC0C1\uD488\uC900\uBE44\uC911','\uBC1C\uC1A1\uC911','\uBC1C\uC1A1\uC644\uB8CC','\uAD50\uD658\uC644\uB8CC']" :key="st" style="display:flex;align-items:center;gap:4px;">
                <span style="padding:3px 8px;border-radius:20px;font-size:0.72rem;font-weight:700;background:#eff6ff;color:#1d4ed8;">
                  {{ st }}
                </span>
                <span v-if="i<7" style="color:var(--text-muted);">
                  \u2192
                </span>
              </span>
            </div>
          </div>
        </div>
        <div style="padding:12px 20px;border-top:1px solid var(--border);flex-shrink:0;">
          <button @click="handleBtnAction('orders-helpClose')" class="btn btn_confirm" style="width:100%;padding:10px;border:none;border-radius:8px;cursor:pointer;font-size:0.88rem;font-weight:700;">
            \uD655\uC778
          </button>
        </div>
      </div>
    </fo-modal>
    <!-- ===== \u25A1.\u25A1. \uB3C4\uC6C0\uB9D0 \uBAA8\uB2EC ================================================ -->
    <!-- ===== \u25A0.\u25A0. \uAD50\uD658\xB7\uBC18\uD488 \uC2E0\uCCAD \uBAA8\uB2EC =========================================== -->
    <fo-modal :show="claimModal.show" :title="claimModal.type==='exchange' ? '\u{1F504} \uAD50\uD658 \uC2E0\uCCAD' : '\u21A9\uFE0F \uBC18\uD488 \uC2E0\uCCAD'" max-width="480px" box-pad="0" @close="handleBtnAction('claim-modalClose')">
      <div style="display:flex;flex-direction:column;max-height:80vh;">
        <div style="padding:4px 20px 8px;border-bottom:1px solid var(--border);flex-shrink:0;">
          <span style="font-size:0.75rem;color:var(--text-muted);">
            {{ claimModal.orderId }}
          </span>
        </div>
        <div style="padding:18px 20px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:18px;">
          <div>
            <div style="font-size:0.8rem;font-weight:700;color:var(--text-primary);margin-bottom:8px;">
              \uC2E0\uCCAD \uC0AC\uC720
              <span style="color:#ef4444;">
                *
              </span>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">
              <button v-for="r in (claimModal.type==='exchange' ? EXCHANGE_REASONS : RETURN_REASONS)" :key="r"
                @click="handleSelectAction('claim-setReason', r)"
                style="padding:6px 14px;border-radius:20px;cursor:pointer;font-size:0.78rem;font-weight:600;"
                :style="claimModal.reason===r ? 'background:var(--blue);color:#fff;border:1.5px solid var(--blue);' : 'background:var(--bg-base);color:var(--text-secondary);border:1.5px solid var(--border);'">
                {{ r }}
              </button>
            </div>
          </div>
          <div>
            <div style="font-size:0.8rem;font-weight:700;color:var(--text-primary);margin-bottom:6px;">
              \uC0C1\uC138 \uB0B4\uC6A9
              <span style="font-size:0.72rem;font-weight:400;color:var(--text-muted);">
                (\uC120\uD0DD)
              </span>
            </div>
            <textarea v-model="claimModal.reasonDetail" rows="2" placeholder="\uC0C1\uC138 \uB0B4\uC6A9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694."
              style="width:100%;padding:8px 12px;border:1px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.8rem;resize:none;box-sizing:border-box;outline:none;"></textarea>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ========================================== -->
            <div v-if="claimModal.type==='exchange' ? claimModal.order?.orderItems.length > 1 : false">
            <div style="font-size:0.8rem;font-weight:700;color:var(--text-primary);margin-bottom:8px;">
              \uAD50\uD658 \uC0C1\uD488 \uC120\uD0DD
              <span style="color:#ef4444;">
                *
              </span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <button v-for="(item, idx) in claimModal.order.orderItems" :key="idx" @click="handleSelectAction('claim-setExchangeItem', idx)"
                style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;cursor:pointer;text-align:left;width:100%;"
                :style="claimModal.exchangeItemIdx===idx ? 'background:var(--blue-dim);border:1.5px solid var(--blue);' : 'background:var(--bg-base);border:1.5px solid var(--border);'">
                <span style="font-size:1.2rem;">
                  {{ item.emoji }}
                </span>
                <div style="flex:1;">
                  <div style="font-size:0.85rem;font-weight:600;" :style="claimModal.exchangeItemIdx===idx ? 'color:var(--blue);' : 'color:var(--text-primary);'">
                    {{ item.prodNm }}
                  </div>
                  <div style="font-size:0.75rem;color:var(--text-muted);">
                    {{ item.color }} / {{ item.size }}
                  </div>
                </div>
                <span v-if="claimModal.exchangeItemIdx===idx" style="color:var(--blue);">
                  \u2713
                </span>
              </button>
            </div>
          </div>
          <div v-if="claimModal.type==='exchange'" style="display:flex;flex-direction:column;gap:10px;">
            <div style="font-size:0.8rem;font-weight:700;color:var(--text-primary);">
              \uAD50\uD658 \uC635\uC158
              <span style="color:#ef4444;">
                *
              </span>
            </div>
            <div v-if="cfClaimModalProduct?.opt2s">
            <div style="font-size:0.74rem;color:var(--text-muted);margin-bottom:5px;">
              \uC0AC\uC774\uC988
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:5px;">
              <button v-for="sz in cfClaimModalProduct.opt2s" :key="sz" @click="handleSelectAction('claim-toggleSize', sz)"
                  style="padding:4px 12px;border-radius:6px;cursor:pointer;font-size:0.78rem;font-weight:600;"
                  :style="claimModal.exchangeSize===sz ? 'background:var(--blue);color:#fff;border:1.5px solid var(--blue);' : 'background:var(--bg-base);color:var(--text-secondary);border:1.5px solid var(--border);'">
                {{ sz }}
              </button>
            </div>
          </div>
          <div v-if="cfClaimModalProduct?.opt1s">
          <div style="font-size:0.74rem;color:var(--text-muted);margin-bottom:5px;">
            \uC0C9\uC0C1
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            <button v-for="col in cfClaimModalProduct.opt1s" :key="col.name" @click="handleSelectAction('claim-toggleColor', col.name)"
                  style="display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:6px;cursor:pointer;font-size:0.78rem;font-weight:600;"
                  :style="claimModal.exchangeColor===col.name ? 'background:var(--blue);color:#fff;border:1.5px solid var(--blue);' : 'background:var(--bg-base);color:var(--text-secondary);border:1.5px solid var(--border);'">
              <span style="width:10px;height:10px;border-radius:50%;border:1px solid rgba(0,0,0,0.15);" :style="'background:'+col.hex">
              </span>
              {{ col.name }}
            </button>
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================== -->
      <div>
        <div style="font-size:0.8rem;font-weight:700;color:var(--text-primary);margin-bottom:8px;">
          \uBC30\uC1A1\uBE44 \uC548\uB0B4
        </div>
        <div v-if="!claimModal.reason" style="font-size:0.78rem;color:var(--text-muted);padding:10px;background:var(--bg-base);border-radius:8px;">
          \uC0AC\uC720\uB97C \uC120\uD0DD\uD558\uBA74 \uBC30\uC1A1\uBE44\uAC00 \uC548\uB0B4\uB429\uB2C8\uB2E4.
        </div>
        <template v-else>
          <div v-if="cfClaimShippingFee===0" style="display:flex;align-items:center;gap:8px;padding:10px 14px;background:#dcfce7;border-radius:8px;margin-bottom:8px;">
            <span>
              \u2705
            </span>
            <div>
              <div style="font-size:0.82rem;font-weight:800;color:#16a34a;">
                \uBC30\uC1A1\uBE44 \uBB34\uB8CC
              </div>
              <div style="font-size:0.73rem;color:#15803d;margin-top:1px;">
                \uC0C1\uD488 \uBD88\uB7C9\xB7\uC624\uBC30\uC1A1\uC758 \uACBD\uC6B0 \uC655\uBCF5 \uBC30\uC1A1\uBE44\uB97C \uB2F9\uC0AC\uAC00 \uBD80\uB2F4\uD569\uB2C8\uB2E4.
              </div>
            </div>
          </div>
          <div v-else style="padding:10px 14px;background:#fff7ed;border-radius:8px;margin-bottom:8px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
              <span style="font-size:0.82rem;font-weight:700;color:#ea580c;">
                \uC655\uBCF5 \uBC30\uC1A1\uBE44 (\uACE0\uAC1D \uBD80\uB2F4)
              </span>
              <span style="font-size:0.9rem;font-weight:800;color:#ea580c;">
                {{ cfClaimShippingFee.toLocaleString() }}\uC6D0
              </span>
            </div>
          </div>
          <div v-if="cfClaimShippingFee>0">
            <div style="font-size:0.78rem;font-weight:700;color:var(--text-primary);margin-bottom:6px;">
              \u{1F39F} \uBC30\uC1A1\uBE44 \uCFE0\uD3F0 \uC801\uC6A9
            </div>
            <div v-if="!cfApplicableCoupons.length" style="font-size:0.75rem;color:var(--text-muted);padding:8px 12px;background:var(--bg-base);border-radius:6px;">
              \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
            </div>
            <div v-else style="display:flex;flex-direction:column;gap:5px;">
              <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;cursor:pointer;border:1.5px solid var(--border);background:var(--bg-base);">
                <input type="radio" :value="null" v-model="claimModal.selectedCouponId" style="accent-color:var(--blue);">
                <span style="font-size:0.78rem;color:var(--text-secondary);">
                  \uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uD568
                </span>
              </label>
              <label v-for="cp in cfApplicableCoupons" :key="cp.couponId"
                    style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;cursor:pointer;border:1.5px solid var(--border);"
                    :style="claimModal.selectedCouponId===cp.couponId ? 'border-color:var(--blue);background:var(--blue-dim);' : 'background:var(--bg-base);'">
                <input type="radio" :value="cp.couponId" v-model="claimModal.selectedCouponId" style="accent-color:var(--blue);">
                <div style="flex:1;">
                  <div style="font-size:0.8rem;font-weight:700;">
                    {{ cp.name }}
                  </div>
                  <div style="font-size:0.7rem;color:var(--text-muted);">
                    {{ myStore.discountLabel(cp) }} \xB7 \uB9CC\uB8CC {{ cp.expiry }}
                  </div>
                </div>
                <span style="font-size:0.78rem;font-weight:800;color:var(--blue);">
                  {{ myStore.discountLabel(cp) }}
                </span>
              </label>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ======================================== -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding:8px 12px;background:var(--bg-base);border-radius:8px;border:1px solid var(--border);">
              <span style="font-size:0.8rem;color:var(--text-secondary);">
                \uCD5C\uC885 \uBC30\uC1A1\uBE44
              </span>
              <span style="font-size:0.92rem;font-weight:800;" :style="cfClaimFinalFee===0 ? 'color:#16a34a;' : 'color:#ea580c;'">
                {{ cfClaimFinalFee===0 ? '\uBB34\uB8CC' : cfClaimFinalFee.toLocaleString()+'\uC6D0' }}
              </span>
            </div>
            <div v-if="cfClaimFinalFee>0" style="margin-top:10px;padding:10px 14px;background:#eff6ff;border-radius:8px;border:1px solid #bfdbfe;">
              <div style="font-size:0.76rem;font-weight:700;color:#1d4ed8;margin-bottom:6px;">
                \u{1F3E6} \uBC30\uC1A1\uBE44 \uC785\uAE08 \uC548\uB0B4
              </div>
              <div style="font-size:0.8rem;color:#1e40af;font-weight:700;margin-bottom:2px;">
                {{ (SITE_CONFIG.bank || {}).name }} {{ (SITE_CONFIG.bank || {}).account }}
              </div>
              <div style="font-size:0.75rem;color:#3730a3;">
                \uC608\uAE08\uC8FC: {{ (SITE_CONFIG.bank || {}).holder }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
    <div style="padding:12px 20px;border-top:1px solid var(--border);display:flex;gap:8px;flex-shrink:0;">
      <button @click="handleBtnAction('claim-modalClose')" style="flex:1;padding:10px;border:1.5px solid var(--border);border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer;font-size:0.88rem;font-weight:700;">
        \uCDE8\uC18C
      </button>
      <button @click="handleBtnAction('claim-submit')" style="flex:2;padding:10px;border:none;border-radius:8px;cursor:pointer;font-size:0.88rem;font-weight:700;color:#fff;"
            :style="claimModal.type==='exchange' ? 'background:#3b82f6;' : 'background:#f97316;'">
        {{ claimModal.type==='exchange' ? '\uAD50\uD658 \uC2E0\uCCAD\uD558\uAE30' : '\uBC18\uD488 \uC2E0\uCCAD\uD558\uAE30' }}
      </button>
    </div>
      </div>
    </fo-modal>
<!-- ===== \u25A1.\u25A1. \uAD50\uD658\xB7\uBC18\uD488 \uC2E0\uCCAD \uBAA8\uB2EC =========================================== -->
<!-- ===== \u25A0.\u25A0. \uC8FC\uBB38 \uC0C1\uC138 \uBAA8\uB2EC ============================================== -->
<OrderDetailModal :show="myStore.orderDetailModal.show" :order="myStore.orderDetailModal.order" modal-name="order-detail" :on-callback="fnCallbackModal" />
<!-- ===== \u25A0.\u25A0. \uC0C1\uD488 \uBAA8\uB2EC ================================================= -->
<ProductModal :show="myStore.productModal.show" :product="myStore.productModal.prod" modal-name="product" :on-callback="fnCallbackModal" />
<!-- ===== \u25A0.\u25A0. \uC8FC\uBB38\uC790 \uBAA8\uB2EC ================================================ -->
<CustomerModal :show="myStore.customerModal.show" :user="myStore.customerModal.user" :order="myStore.customerModal.order" modal-name="customer" :on-callback="fnCallbackModal" />
</teleport>
</fo-my-layout>
</fo-page>
<!-- ===== \u25A1.\u25A1. \uC8FC\uBB38\uC790 \uBAA8\uB2EC ================================================ -->
<!-- ===== \u25A1. Teleport \uBAA8\uB2EC\uB4E4 ============================================ -->
`,components:{FoMyLayout:window.foMyLayout,PagerHeader:window.PagerHeader,Pagination:window.Pagination,OrderDetailModal:window.OrderDetailModal,ProductModal:window.ProductModal,CustomerModal:window.CustomerModal}};
