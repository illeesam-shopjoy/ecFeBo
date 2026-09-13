window.MyClaim={name:"MyClaim",props:{navigate:{type:Function,required:!0}},setup(B){const{reactive:l,computed:c,onMounted:m,watch:Y}=Vue,p=window.foApp.showToast,x=window.foApp.showConfirm,y=window.foApp.cart,j=l({loading:!1,error:null}),b=(e,t={})=>{if(e==="claims-setFilter")return d.value=t,a.splice(0),s.pageNo=1,n();e==="claims-statusReset"?a.splice(0):console.warn("[handleBtnAction] unknown cmd:",e)},v=(e,t={})=>{if(e==="claims-statusToggle")S(t);else{if(e==="claims-cancel")return z(t);if(e==="claims-orderOpen")return T(t);if(e==="claims-customerOpen")return O(t);if(e==="claims-prodOpen")return A(t);if(e==="claims-track")return L(t.courier,t.trackingNo);console.warn("[handleSelectAction] unknown cmd:",e)}},h=(e,t,r)=>{if(e==="order-detail"){if(r==null){o.orderDetailModal.show=!1;return}return}else if(e==="product"){if(r==null){o.productModal.show=!1;return}return}else if(e==="customer"){if(r==null){o.customerModal.show=!1;return}return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},o=window.useFoMyStore(),{claims:i,claimFilter:d,orders:w}=Pinia.storeToRefs(o),s=l({pageType:"PAGE",pageNo:1,pageSize:50,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),{dateRange:f,onDateSearch:k}=window.myDateFilterHelper(),a=l([]),C={\uCDE8\uC18C:"CANCEL",\uBC18\uD488:"RETURN",\uAD50\uD658:"EXCHANGE"},S=e=>{const t=a.indexOf(e);t===-1?a.push(e):a.splice(t,1)},M=c(()=>i.value.filter(e=>!a.length||a.includes(e.status))),u=c(()=>window.foAuth.state.user),g=e=>{const t=window.SITE_CONFIG&&window.SITE_CONFIG.prods;return Array.isArray(t)&&t.find(r=>r.prodNm===e)||null},A=e=>{const t=g(e);t&&(o.productModal.prod=t,o.productModal.show=!0)},O=e=>{o.customerModal.user=u.value,o.customerModal.order=e||null,o.customerModal.show=!0},T=async e=>{await o.handleLoadOrders(),o.openOrderModal(e)||p("\uC8FC\uBB38 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error")},L=(e,t)=>{const r=coConsts.courierTrackUrl(e,t);r&&window.open(r,"_blank","width=960,height=700,scrollbars=yes")},z=async e=>{if(!await x("\uC2E0\uCCAD \uCDE8\uC18C","\uC774 \uC2E0\uCCAD\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?","warning"))return;const r=i.value.find(W=>W.claimId===e);r&&(r.status=r.type==="\uCDE8\uC18C"?"\uCDE8\uC18C\uC644\uB8CC":r.type==="\uBC18\uD488"?"\uBC18\uD488\uCDE8\uC18C\uB428":"\uAD50\uD658\uCDE8\uC18C\uB428",o.removeClaim(e)),p("\uC2E0\uCCAD\uC774 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","info")},F=()=>{const e={dateRangeType:"request_date",dateRangeStart:f.start,dateRangeEnd:f.end},t=C[d.value];return t&&(e.claimTypeCd=t),e},n=async()=>{await o.handleLoadClaimsPage(F(),s)},P=async e=>{e&&k(e),s.pageNo=1,await n(),o.handleLoadOrders()},I=async()=>{await n()},_=async()=>{await n()};m(async()=>{await n(),o.handleLoadOrders()});const N=(e,t)=>i.value.filter(r=>r.type===e&&r.status===t).length,D=(e,t)=>{if(!e.trackingNo||t!=="\uC218\uAC70\uC644\uB8CC")return!1;const r=o.CLAIM_FLOWS[e.type];return r.indexOf(e.status)>=r.indexOf("\uC218\uAC70\uC644\uB8CC")},R=(e,t)=>{if(!e.exchangeTrackingNo||t!=="\uBC1C\uC1A1\uC644\uB8CC")return!1;const r=o.CLAIM_FLOWS[e.type];return r.indexOf(e.status)>=r.indexOf("\uBC1C\uC1A1\uC644\uB8CC")},E=c(()=>y.length);return{handleBtnAction:b,handleSelectAction:v,fnCallbackModal:h,myStore:o,claims:i,claimFilter:d,orders:w,pager:s,cfDateFilteredClaims:M,claimStatusFilter:a,onSearch:P,onPageChange:I,onSizeChange:_,cfAuthUser:u,findProd:g,fnClaimStepCount:N,fnShowPickupTrack:D,fnShowShipTrack:R,cartCount:E}},template:`
<fo-page bare>
<fo-my-layout :navigate="navigate" :cart-count="cartCount" active-page="myClaim">
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <MyDateFilter @search="onSearch" @reset="handleBtnAction('claims-statusReset')" />
  <!-- ===== \u25A0. \uC720\uD615 \uD544\uD130 =================================================== -->
  <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;">
    <button v-for="f in ['\uC804\uCCB4','\uCDE8\uC18C','\uBC18\uD488','\uAD50\uD658']" :key="f"
      @click="handleBtnAction('claims-setFilter', f)"
      style="padding:6px 16px;border-radius:20px;cursor:pointer;font-size:0.82rem;font-weight:700;transition:all 0.15s;"
      :style="claimFilter===f
      ? 'background:var(--blue);color:#fff;border:2px solid var(--blue);'
      : 'background:var(--bg-card);color:var(--text-secondary);border:2px solid var(--border);'">
      {{ f }}
      <span v-if="f!=='\uC804\uCCB4'" style="margin-left:4px;font-size:0.75rem;opacity:0.8;">
        ({{ claims.filter(c=>c.type===f).length }})
      </span>
      <span v-else style="margin-left:4px;font-size:0.75rem;opacity:0.8;">
        ({{ claims.length }})
      </span>
    </button>
  </div>
  <!-- ===== \u25A1. \uC720\uD615 \uD544\uD130 =================================================== -->
  <!-- ===== \u25A0. \uCC98\uB9AC \uD750\uB984 (\uCDE8\uC18C/\uBC18\uD488/\uAD50\uD658) ======================================== -->
  <template v-for="claimType in (claimFilter==='\uC804\uCCB4' ? ['\uCDE8\uC18C','\uBC18\uD488','\uAD50\uD658'] : [claimFilter])" :key="claimType">
    <div v-if="claims.filter(c=>c.type===claimType).length>0"
      style="background:#f4f5f7;border:1px solid var(--border);border-radius:var(--radius);padding:8px 12px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;gap:6px;overflow-x:auto;flex-wrap:nowrap;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC720\uD615 \uBC30\uC9C0 ============================================= -->
        <span style="font-size:0.72rem;font-weight:800;padding:3px 10px;border-radius:10px;color:#fff;flex-shrink:0;"
          :style="'background:' + myStore.CLAIM_TYPE_COLOR[claimType]">
          {{ claimType }}
        </span>
        <span style="font-size:0.75rem;color:var(--border);flex-shrink:0;">
          \u203A
        </span>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD750\uB984 \uB2E8\uACC4 ============================================= -->
        <template v-for="(step, si) in myStore.CLAIM_FLOWS[claimType]" :key="step">
          <button @click="fnClaimStepCount(claimType, step)>0 ? handleSelectAction('claims-statusToggle', step) : null" style="display:flex;align-items:center;gap:4px;padding:4px 10px;border-radius:20px;border:1.5px solid transparent;white-space:nowrap;flex-shrink:0;transition:all 0.15s;" :style="claimStatusFilter.includes(step) ? 'background:var(--blue);border-color:var(--blue);cursor:pointer;' : fnClaimStepCount(claimType, step)>0 ? 'background:var(--bg-base);border-color:var(--border);cursor:pointer;' : 'background:var(--bg-card);border-color:#e5e7eb;cursor:default;opacity:0.72;'">
          <span style="font-size:0.7rem;font-weight:600;" :style="claimStatusFilter.includes(step) ? 'color:#fff;' : fnClaimStepCount(claimType, step)>0 ? 'color:var(--text-primary);' : 'color:#9ca3af;'">
          {{ step }}
        </span>
        <span style="font-size:0.65rem;font-weight:800;padding:0px 5px;border-radius:8px;" :style="claimStatusFilter.includes(step) ? 'background:rgba(255,255,255,0.25);color:#fff;' : fnClaimStepCount(claimType, step)>0 ? 'background:var(--blue-dim);color:var(--blue);' : 'color:#9ca3af;'">
        {{ fnClaimStepCount(claimType, step) || 0 }}
      </span>
    </button>
    <span v-if="si < myStore.CLAIM_FLOWS[claimType].length-1"
            style="font-size:0.75rem;color:var(--border);flex-shrink:0;">
      \u203A
    </span>
  </template>
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD544\uD130\uD574\uC81C ============================================== -->
  <button v-if="claimStatusFilter.length"
          @click="handleBtnAction('claims-statusReset')"
          style="margin-left:4px;font-size:0.68rem;padding:2px 7px;border-radius:6px;border:1px solid var(--border);background:var(--bg-base);color:var(--text-secondary);cursor:pointer;flex-shrink:0;">
    \u2715
  </button>
</div>
</div>
</template>
<!-- ===== \u25A1. \uCC98\uB9AC \uD750\uB984 (\uCDE8\uC18C/\uBC18\uD488/\uAD50\uD658) ======================================== -->
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<PagerHeader :total="pager.pageTotalCount" :pager="pager" @size-change="onSizeChange" />
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<div v-if="!cfDateFilteredClaims.length" style="text-align:center;padding:60px 0;color:var(--text-muted);">
  \uD574\uB2F9 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
</div>
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<div v-for="c in cfDateFilteredClaims" :key="c.claimId"
    style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:14px;">
  <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uD5E4\uB354 ================================================= -->
  <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;margin:-16px -16px 12px;padding:12px 16px;border-bottom:1px solid var(--border);border-radius:var(--radius) var(--radius) 0 0;"
      :style="'background:linear-gradient(135deg,'+({'\uCDE8\uC18C':'rgba(220,38,38,0.22)','\uBC18\uD488':'rgba(255,187,0,0.22)','\uAD50\uD658':'rgba(59,130,246,0.13)'}[c.type]||'rgba(156,95,163,0.13)')+' 0%,rgba(255,255,255,0.6) 60%,rgba(255,255,255,0) 100%);'">
    <div>
      <span style="font-weight:700;font-size:0.88rem;color:var(--text-primary);">
        {{ c.claimId }}
      </span>
      <button @click="handleSelectAction('claims-orderOpen', c.orderId)"
          style="margin-left:8px;font-size:0.78rem;color:var(--blue);border:none;background:none;cursor:pointer;padding:0;font-weight:600;text-decoration:underline;text-underline-offset:2px;">
        \uC8FC\uBB38: {{ c.orderId }}
      </button>
      <button v-if="cfAuthUser" @click="handleSelectAction('claims-customerOpen', orders.find(o=>o.orderId===c.orderId))"
          style="margin-left:8px;font-size:0.78rem;font-weight:600;color:var(--text-secondary);border:none;background:none;cursor:pointer;padding:0;text-decoration:underline;text-underline-offset:2px;">
        {{ cfAuthUser.name }}
      </button>
      <div style="margin-top:4px;font-size:0.78rem;color:var(--text-muted);">
        \uC2E0\uCCAD\uC77C: {{ c.requestDate }}
        <span v-if="c.completeDate">
          \xB7 \uC644\uB8CC\uC77C: {{ c.completeDate }}
        </span>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:flex-end;">
      <button v-if="c.status === myStore.CLAIM_FLOWS[c.type][0]" @click="handleSelectAction('claims-cancel', c.claimId)"
          style="padding:4px 12px;border:1.5px solid #ef4444;border-radius:6px;background:transparent;color:#ef4444;cursor:pointer;font-size:0.76rem;font-weight:700;white-space:nowrap;">
        \uC2E0\uCCAD\uCDE8\uC18C
      </button>
      <span style="font-size:0.78rem;font-weight:800;padding:4px 12px;border-radius:20px;color:#fff;"
          :style="'background:' + myStore.CLAIM_TYPE_COLOR[c.type]">
        {{ c.type }}
      </span>
      <span style="font-size:0.68rem;font-weight:600;padding:2px 8px;border-radius:10px;color:#fff;opacity:0.85;"
          :style="'background:' + myStore.CLAIM_STATUS_COLOR(c.status)">
        {{ c.status }}
      </span>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uCE74\uB4DC \uD5E4\uB354 ================================================= -->
  <!-- ===== \u25A0.\u25A0. \uC9C4\uD589 \uD750\uB984 \uBC14 =============================================== -->
  <div style="background:#f6f6f6;border-radius:8px;padding:12px 14px;margin-bottom:12px;overflow-x:auto;">
    <div style="display:flex;align-items:center;min-width:320px;">
      <template v-for="(step, si) in myStore.CLAIM_FLOWS[c.type]" :key="step">
        <div style="display:flex;flex-direction:column;align-items:center;flex:1;">
          <div :style="{
              width: c.status===step ? '14px' : '10px',
              height: c.status===step ? '14px' : '10px',
              borderRadius:'50%',
              marginBottom:'4px',
              transition:'all .15s',
              boxShadow: c.status===step ? '0 0 0 2px '+myStore.CLAIM_TYPE_COLOR[c.type]+'33' : 'none',
              background: myStore.CLAIM_FLOWS[c.type].indexOf(c.status) >= si ? myStore.CLAIM_TYPE_COLOR[c.type] : '#bbb',
              }">
          </div>
          <div style="font-size:0.65rem;text-align:center;white-space:nowrap;font-weight:600;"
              :style="c.status===step ? 'color:'+myStore.CLAIM_TYPE_COLOR[c.type]+';font-weight:800;'
              : myStore.CLAIM_FLOWS[c.type].indexOf(c.status) > si ? 'color:var(--text-secondary);'
              : 'color:var(--text-muted);'">
            {{ step }}
          </div>
          <button v-if="fnShowPickupTrack(c, step)" @click.stop="handleSelectAction('claims-track', { courier: c.courier, trackingNo: c.trackingNo })" style="margin-top:4px;padding:2px 6px;border-radius:4px;border:1px solid #fed7aa;background:#fff7ed;color:#c2410c;cursor:pointer;font-size:0.6rem;font-weight:700;white-space:nowrap;">
          {{ (c.courier||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','').replace('\uB85C\uC9C0\uC2A4','') }}\uC218\uAC70
        </button>
        <button v-if="fnShowShipTrack(c, step)" @click.stop="handleSelectAction('claims-track', { courier: c.exchangeCourier, trackingNo: c.exchangeTrackingNo })" style="margin-top:3px;padding:2px 6px;border-radius:4px;border:1px solid #93c5fd;background:#dbeafe;color:#1d4ed8;cursor:pointer;font-size:0.6rem;font-weight:700;white-space:nowrap;">
        {{ (c.exchangeCourier||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','').replace('\uB85C\uC9C0\uC2A4','') }}\uBC1C\uC1A1
      </button>
    </div>
    <div v-if="si < myStore.CLAIM_FLOWS[c.type].length-1" style="height:2px;flex:1;margin-bottom:16px;"
            :style="myStore.CLAIM_FLOWS[c.type].indexOf(c.status) > si ? 'background:'+myStore.CLAIM_TYPE_COLOR[c.type] : 'background:#bbb;'">
    </div>
  </template>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \uC9C4\uD589 \uD750\uB984 \uBC14 =============================================== -->
<!-- ===== \u25A0.\u25A0. \uC0C1\uD488 \uBAA9\uB85D ================================================= -->
<div v-for="(item, ii) in c.items" :key="ii"
      style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px dashed var(--border);">
  <span style="font-size:1.4rem;">
    {{ item.emoji }}
  </span>
  <div style="flex:1;">
    <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;">
      <span style="font-size:0.88rem;font-weight:600;color:var(--text-primary);">
        {{ item.prodNm }}
      </span>
      <button v-if="findProd(item.prodNm)" @click="handleSelectAction('claims-prodOpen', item.prodNm)"
            style="font-size:0.65rem;padding:0 5px;border:1px solid var(--border);border-radius:4px;background:var(--bg-base);color:var(--text-muted);cursor:pointer;font-weight:600;line-height:1.7;white-space:nowrap;">
        #{{ findProd(item.prodNm).prodId }}
      </button>
    </div>
    <div style="font-size:0.78rem;color:var(--text-muted);">
      {{ item.color }} / {{ item.size }} / {{ item.qty }}\uAC1C
    </div>
  </div>
  <div style="font-size:0.88rem;font-weight:700;color:var(--blue);">
    {{ item.price.toLocaleString() }}\uC6D0
  </div>
</div>
<!-- ===== \u25A1.\u25A1. \uC0C1\uD488 \uBAA9\uB85D ================================================= -->
<!-- ===== \u25A0.\u25A0. \uC0AC\uC720 + \uAD50\uD658 \uC815\uBCF4 ============================================ -->
<div style="margin-top:10px;display:flex;flex-direction:column;gap:6px;font-size:0.82rem;">
  <div style="display:flex;gap:8px;align-items:flex-start;">
    <span style="color:var(--text-muted);flex-shrink:0;min-width:44px;">
      \uC0AC\uC720
    </span>
    <span style="color:var(--text-primary);font-weight:600;">
      {{ c.reason }}
    </span>
    <span v-if="c.reasonDetail" style="color:var(--text-secondary);">
      \xB7 {{ c.reasonDetail }}
    </span>
  </div>
  <div v-if="c.exchangeSize || c.exchangeColor" style="display:flex;gap:8px;">
    <span style="color:var(--text-muted);flex-shrink:0;min-width:44px;">
      \uAD50\uD658
    </span>
    <span style="color:var(--text-primary);">
      <span v-if="c.exchangeSize">
        \uC0AC\uC774\uC988: {{ c.exchangeSize }}
      </span>
      <span v-if="c.exchangeColor">
        \uC0C9\uC0C1: {{ c.exchangeColor }}
      </span>
    </span>
  </div>
  <div v-if="c.courier" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
    <span style="color:var(--text-muted);flex-shrink:0;min-width:44px;">
      \uC218\uAC70
    </span>
    <span style="color:var(--text-primary);">
      {{ c.courier }}
    </span>
    <button v-if="c.trackingNo" @click="handleSelectAction('claims-track', { courier: c.courier, trackingNo: c.trackingNo })"
          style="padding:2px 8px;border:1.5px solid var(--blue);border-radius:14px;background:transparent;color:var(--blue);cursor:pointer;font-size:0.75rem;font-weight:700;">
      {{ c.trackingNo }}
    </button>
    <span v-if="c.pickupDate" style="color:var(--text-muted);font-size:0.78rem;">
      \uC218\uAC70\uC608\uC815: {{ c.pickupDate }}
    </span>
  </div>
  <div v-if="c.exchangeCourier" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
    <span style="color:var(--text-muted);flex-shrink:0;min-width:44px;">
      \uBC1C\uC1A1
    </span>
    <span style="color:var(--text-primary);">
      {{ c.exchangeCourier }}
    </span>
    <button v-if="c.exchangeTrackingNo" @click="handleSelectAction('claims-track', { courier: c.exchangeCourier, trackingNo: c.exchangeTrackingNo })"
          style="padding:2px 8px;border:1.5px solid #22c55e;border-radius:14px;background:transparent;color:#22c55e;cursor:pointer;font-size:0.75rem;font-weight:700;">
      {{ c.exchangeTrackingNo }}
    </button>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ============================================== -->
  <div v-if="c.refundAmount" style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;padding-top:8px;border-top:1px solid var(--border);">
    <span style="color:var(--text-muted);">
      {{ c.type==='\uBC18\uD488' ? '\uD658\uBD88 \uC608\uC815\uAE08\uC561' : '\uCDE8\uC18C \uD658\uBD88\uAE08\uC561' }}
    </span>
    <span style="font-size:0.95rem;font-weight:800;color:var(--blue);">
      {{ c.refundAmount.toLocaleString() }}\uC6D0
    </span>
  </div>
  <div v-if="c.refundDetails?.length" style="margin-top:8px;padding:8px 10px;background:var(--bg-base);border-radius:7px;">
  <div style="font-size:0.68rem;font-weight:700;color:var(--text-muted);letter-spacing:0.04em;margin-bottom:5px;">
    \u{1F4B8} \uD658\uBD88 \uB0B4\uC5ED
  </div>
  <div v-for="(rd, rdi) in c.refundDetails" :key="rdi"
          style="display:flex;align-items:center;gap:6px;font-size:0.72rem;padding:2px 0;flex-wrap:wrap;">
    <span style="padding:1px 7px;border-radius:4px;font-weight:700;white-space:nowrap;flex-shrink:0;"
            :style="rd.type==='\uACC4\uC88C\uD658\uBD88' ? 'background:#dcfce7;color:#16a34a;'
            : rd.type==='\uCE74\uB4DC\uCDE8\uC18C' ? 'background:#dbeafe;color:#1d4ed8;'
            : rd.type==='\uCE90\uC26C\uD658\uAE09' ? 'background:#fef3c7;color:#d97706;'
            : rd.type==='\uD658\uBD88\uCC98\uB9AC\uC911' ? 'background:#ffedd5;color:#ea580c;'
            : 'background:#f3f4f6;color:#6b7280;'">
      {{ rd.type }}
    </span>
    <span style="font-weight:700;color:var(--text-primary);white-space:nowrap;">
      {{ rd.amount.toLocaleString() }}\uC6D0
    </span>
    <span v-if="rd.account" style="color:var(--text-secondary);white-space:nowrap;">
      {{ rd.account }}
    </span>
    <span v-if="rd.name ? rd.type==='\uACC4\uC88C\uD658\uBD88' : false" style="color:var(--text-secondary);white-space:nowrap;">
    \xB7 {{ rd.name }}
  </span>
  <span style="color:var(--text-muted);white-space:nowrap;flex-shrink:0;">
    {{ rd.datetime }}
  </span>
</div>
</div>
</div>
</div>
<Pagination :total="pager.pageTotalCount" :pager="pager" @set-page="onPageChange" />
<!-- ===== \u25A1.\u25A1. \uC0AC\uC720 + \uAD50\uD658 \uC815\uBCF4 ============================================ -->
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<Teleport to="body">
  <OrderDetailModal :show="myStore.orderDetailModal.show" :order="myStore.orderDetailModal.order" modal-name="order-detail" :on-callback="fnCallbackModal" />
  <ProductModal :show="myStore.productModal.show" :product="myStore.productModal.prod" modal-name="product" :on-callback="fnCallbackModal" />
  <CustomerModal :show="myStore.customerModal.show" :user="myStore.customerModal.user" :order="myStore.customerModal.order" modal-name="customer" :on-callback="fnCallbackModal" />
</teleport>
</fo-my-layout>
</fo-page>
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
`,components:{FoMyLayout:window.foMyLayout,PagerHeader:window.PagerHeader,Pagination:window.Pagination,OrderDetailModal:window.OrderDetailModal,ProductModal:window.ProductModal,CustomerModal:window.CustomerModal}};
