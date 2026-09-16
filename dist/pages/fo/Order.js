window.Order={name:"Order",props:{navigate:{type:Function,required:!0}},setup(h){const{reactive:i,computed:u,onMounted:_,onBeforeUnmount:j,watch:T,nextTick:q}=Vue,p=window.foApp.showToast,U=window.foApp.clearCart,A=window.foApp.cart,C=i({isAddrSearchModal:!1}),r=i({loading:!1,error:null,view:"order",resultData:null,selectedShipCoupon:null,cashBalance:0,cashInput:0,shipCouponPopup:!1,payMethod:"transfer"}),w="fo_pending_toss_order",f=i({mounted:!1,confirming:!1,containerId:"fo-order-toss-widget-"+Math.random().toString(36).slice(2)});let x=null;const E=i({dliv_req_opts:[{value:"\uBB38 \uC55E\uC5D0 \uB194\uC8FC\uC138\uC694",label:"\uBB38 \uC55E\uC5D0 \uB194\uC8FC\uC138\uC694"},{value:"\uACBD\uBE44\uC2E4\uC5D0 \uB9E1\uACA8\uC8FC\uC138\uC694",label:"\uACBD\uBE44\uC2E4\uC5D0 \uB9E1\uACA8\uC8FC\uC138\uC694"},{value:"\uD0DD\uBC30\uD568\uC5D0 \uB123\uC5B4\uC8FC\uC138\uC694",label:"\uD0DD\uBC30\uD568\uC5D0 \uB123\uC5B4\uC8FC\uC138\uC694"},{value:"\uC5F0\uB77D \uD6C4 \uBC30\uC1A1\uD574\uC8FC\uC138\uC694",label:"\uC5F0\uB77D \uD6C4 \uBC30\uC1A1\uD574\uC8FC\uC138\uC694"}]}),L=(e,t={})=>{if(e==="page-goHome")return h.navigate("home");if(e==="page-goProdList")return h.navigate("prodList");if(e==="page-goMyOrder")return h.navigate("myOrder");if(e==="page-goContact")return h.navigate("contact");if(e==="form-openAddr"){C.isAddrSearchModal=!0;return}else{if(e==="form-submit")return oe();if(e==="cash-useAll"){r.cashInput=r.cashBalance;return}else if(e==="cash-reset"){r.cashInput=0;return}else if(e==="shipCoupon-open"){r.shipCouponPopup=!0;return}else{if(e==="shipCoupon-remove")return Q();if(e==="coupon-open")return Y(t);if(e==="coupon-remove")return H(t);console.warn("[handleBtnAction] unknown cmd:",e)}}},N=(e,t={})=>{console.warn("[handleSelectAction] unknown cmd:",e)},F=(e,t,o)=>{if(e==="coupon")return m.show=!1,o==="close"?void 0:G(o);if(e==="shipCoupon")return r.shipCouponPopup=!1,o==="close"?void 0:J(o);if(e==="addr-search"){if(C.isAddrSearchModal=!1,o==null)return;a.postcode=o.zonecode,a.address=o.address,D("address");return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},b=e=>parseInt(String(e||"").replace(/[^0-9]/g,""),10)||0,M=e=>Number(e).toLocaleString("ko-KR")+"\uC6D0",y=i([]),R=async()=>{var e;try{const t=await foApiSvc.myCoupon.getList({},"\uC8FC\uBB38","\uCFE0\uD3F0\uC870\uD68C");y.splice(0,y.length,...(((e=t.data)==null?void 0:e.data)||[]).filter(o=>!o.used))}catch{y.length=0}},V=e=>{const t=b(e.prod.price)*e.qty;return y.filter(o=>(o.discountType==="rate"||o.discountType==="amount")&&t>=(o.minOrder||0))},K=u(()=>y.filter(e=>e.discountType==="shipping")),W=e=>e?e.discountType==="rate"?e.discountValue+"% \uD560\uC778":e.discountType==="shipping"?"\uBB34\uB8CC\uBC30\uC1A1":M(e.discountValue)+" \uD560\uC778":"",z=(e,t)=>{if(!e)return 0;const o=b(t.prod.price)*t.qty;return e.discountType==="rate"?Math.floor(o*e.discountValue/100):e.discountType==="amount"?Math.min(e.discountValue,o):0},m=i({show:!1,targetIdx:null}),v=i({}),Y=e=>{m.targetIdx=e,m.show=!0},G=e=>{v[m.targetIdx]=e,m.show=!1},H=e=>{delete v[e]},J=e=>{r.selectedShipCoupon=e,r.shipCouponPopup=!1},Q=()=>{r.selectedShipCoupon=null},X=async()=>{var e,t;try{const o=await foApiSvc.myCash.getInfo({},"\uC8FC\uBB38","\uCE90\uC2DC\uC870\uD68C");r.cashBalance=((t=(e=o.data)==null?void 0:e.data)==null?void 0:t.balance)||0}catch{}},c=u(()=>{var e;return window.foApp.instantOrder?[window.foApp.instantOrder]:(e=window.foApp.cartIds)!=null&&e.length?A.filter(t=>window.foApp.cartIds.includes(t.cartId)):A}),k=u(()=>c.value.reduce((e,t)=>e+b(t.prod.price)*t.qty,0)),S=u(()=>c.value.reduce((e,t,o)=>e+z(v[o],t),0)),I=u(()=>{const e=parseInt(String(r.cashInput).replace(/[^0-9]/g,""),10)||0;return Math.min(e,r.cashBalance,Math.max(0,k.value-S.value))}),g=u(()=>Math.max(0,k.value-S.value-I.value)),a=i({name:"",tel:"",email:"",postcode:"",address:"",addressDetail:"",deliveryReq:""}),Z=async(e="DEFAULT")=>{var o,n,l;const t=(n=(o=window.foAuth)==null?void 0:o.state)==null?void 0:n.user;t&&(!((l=window.foAuth)!=null&&l.isLoggedIn)||window.foAuth.isLoggedIn())&&(await Promise.all([R(),X()]),a.name=t.memberNm||"",a.tel=t.phone||"",a.email=t.email||"")},s=i({}),D=e=>{delete s[e]},ee=()=>{Object.keys(s).forEach(t=>delete s[t]);let e=!0;return(!a.name.trim()||a.name.trim().length<2)&&(s.name="\uC774\uB984\uC744 2\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694.",e=!1),a.tel.trim()?coUtil.cofIsValidPhone(a.tel)||(s.tel="\uC62C\uBC14\uB978 \uC5F0\uB77D\uCC98 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)",e=!1):(s.tel="\uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",e=!1),(!a.email.trim()||!coUtil.cofIsValidEmail(a.email))&&(s.email="\uC720\uD6A8\uD55C \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",e=!1),a.address.trim()||(s.address="\uBC30\uC1A1 \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",e=!1),e},te=e=>{var t;return{orderId:e,orderDate:coUtil.cofToYmd(new Date),form:{...a},payMethod:r.payMethod,items:c.value.map((o,n)=>{var l;return{prodId:o.prod.prodId,prodNm:o.prod.prodNm,image:o.prod.image,color:o.color.name,size:o.size,qty:o.qty,price:b(o.prod.price)*o.qty,coupon:((l=v[n])==null?void 0:l.name)||null,discount:z(v[n],o)}}),shippingCoupon:((t=r.selectedShipCoupon)==null?void 0:t.name)||null,cartTotal:k.value,couponDiscount:S.value,cashUsed:I.value,finalPrice:g.value}},P=async e=>{typeof foApiSvc!="undefined"&&await foApiSvc.myOrder.create(e,"\uC8FC\uBB38","\uC800\uC7A5").catch(()=>{}),r.resultData=e,r.view="result",window.foApp.instantOrder||U(),r.cashBalance=Math.max(0,r.cashBalance-(e.cashUsed||0))},oe=async()=>{var e;if(ee()){r.submitting=!0;try{const t="ORD-"+new Date().getFullYear()+"-"+String(Date.now()).slice(-5),o=te(t);if(r.payMethod==="toss"&&g.value>0){if(!x){p("\uACB0\uC81C\uC704\uC82F\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.","error");return}try{localStorage.setItem(w,JSON.stringify(o))}catch{}const n=window.location.origin+window.location.pathname;await x.requestPayment({orderId:t,orderName:((e=c.value[0])==null?void 0:e.prod.prodNm)+(c.value.length>1?` \uC678 ${c.value.length-1}\uAC74`:""),customerName:a.name,customerEmail:a.email,successUrl:n+"?page=order&callback_pay_toss_succ=1",failUrl:n+"?page=order&callback_pay_toss_fail=1"});return}await P(o)}catch(t){p("\uACB0\uC81C \uC694\uCCAD \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: "+(t.message||t),"error",0)}finally{r.submitting=!1}}},O=async()=>{var e,t,o;if(!(g.value<=0))try{const n=((o=(t=(e=window.foAuth)==null?void 0:e.state)==null?void 0:t.user)==null?void 0:o.memberId)||"GUEST_"+Date.now();x=await coExtSdk.getTossPaymentWidgets(n),await x.setAmount({currency:"KRW",value:Number(g.value)}),await q(),await x.renderPaymentMethods({selector:"#"+f.containerId,variantKey:"DEFAULT"}),f.mounted=!0}catch(n){f.mounted=!1,p("\uACB0\uC81C\uC704\uC82F\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+(n.message||n),"error",0)}},re=async()=>{const e=new URLSearchParams(window.location.search||""),t=window.location.origin+window.location.pathname+"?page=order";if(e.get("callback_pay_toss_fail")==="1"){history.replaceState(null,"",t),p("\uACB0\uC81C\uAC00 \uCDE8\uC18C\uB418\uC5C8\uAC70\uB098 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0);try{localStorage.removeItem(w)}catch{}return}if(e.get("callback_pay_toss_succ")!=="1")return;const o=e.get("paymentKey"),n=e.get("orderId"),l=Number(e.get("amount"));if(history.replaceState(null,"",t),!(!o||!n||!l)){f.confirming=!0,r.submitting=!0;try{await foApiSvc.tossPay.confirm({paymentKey:o,orderId:n,amount:l},"\uC8FC\uBB38","\uD1A0\uC2A4\uACB0\uC81C\uC2B9\uC778");let d=null;try{d=JSON.parse(localStorage.getItem(w)||"null")}catch{}if(localStorage.removeItem(w),!d||d.orderId!==n){p("\uACB0\uC81C\uB294 \uC2B9\uC778\uB418\uC5C8\uC73C\uB098 \uC8FC\uBB38 \uC815\uBCF4\uB97C \uBCF5\uC6D0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uACE0\uAC1D\uC13C\uD130\uB85C \uBB38\uC758\uD574\uC8FC\uC138\uC694.","error",0);return}await P(d),p("\uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(d){p("\uACB0\uC81C \uC2B9\uC778\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4: "+(coUtil.cofErrMsg?coUtil.cofErrMsg(d):d.message||d),"error",0)}finally{f.confirming=!1,r.submitting=!1}}};T(()=>r.payMethod,e=>{e==="toss"&&O()}),T(g,()=>{r.payMethod==="toss"&&O()});const $=e=>{const t=e.detail||{};t.name!=null&&(a.name=t.name),t.tel!=null&&(a.tel=t.tel),t.email!=null&&(a.email=t.email),t.postcode!=null&&(a.postcode=t.postcode),t.address!=null&&(a.address=t.address),t.addressDetail!=null&&(a.addressDetail=t.addressDetail)};_(async()=>{Z(),re(),window.addEventListener("fo-dev-autofill",$)}),j(()=>window.removeEventListener("fo-dev-autofill",$));const B={};return B.baseForm=[{key:"name",label:"\uC774\uB984",type:"text",required:!0,placeholder:"\uD64D\uAE38\uB3D9"},{key:"tel",label:"\uC5F0\uB77D\uCC98",type:"tel",required:!0,placeholder:"010-1234-5678",validate:e=>e&&!coUtil.cofIsValidPhone(e)?"\uC62C\uBC14\uB978 \uC5F0\uB77D\uCC98 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)":null},{type:"rowBreak"},{key:"email",label:"\uC774\uBA54\uC77C",type:"email",required:!0,colSpan:2,placeholder:"hello@example.com",validate:e=>e&&!coUtil.cofIsValidEmail(e)?"\uC720\uD6A8\uD55C \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.":null},{type:"rowBreak"},{key:"address",label:"\uBC30\uC1A1 \uC8FC\uC18C",type:"slot",name:"address",colSpan:2,required:!0},{type:"rowBreak"},{key:"deliveryReq",label:"\uBC30\uC1A1 \uC694\uCCAD\uC0AC\uD56D",type:"select",colSpan:2,options:()=>E.dliv_req_opts,nullLabel:"\uC120\uD0DD \uC5C6\uC74C"}],{modals:C,columns:B,uiState:r,handleBtnAction:L,handleSelectAction:N,fnCallbackModal:F,form:a,errors:s,clearErr:D,cfOrderItems:c,cfCartTotal:k,cfTotalCouponDiscount:S,cfAppliedCash:I,cfFinalPrice:g,cfShippingCoupons:K,parsePrice:b,fmt:M,productCoupons:V,discountLabel:W,calcCouponDiscount:z,couponPopup:m,selectedCoupons:v,toss:f,config:window.SITE_CONFIG||{}}},template:`
<fo-page eyebrow="Shopping" title="\uC8FC\uBB38 \xB7 \uACB0\uC81C"
  :banner-img="uiState.view==='result' ? '' : 'assets/cdn/prod/img/page-title/page-title-1.jpg'"
  banner-align="center 40%"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'\uC8FC\uBB38\uD558\uAE30' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \u2550\u2550 \uC8FC\uBB38 \uACB0\uACFC \uD654\uBA74 \u2550\u2550 ========================================== -->
  <template v-if="uiState.view==='result' ? uiState.resultData : false">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;text-align:center;">
    <div style="font-size:4rem;margin-bottom:16px;">
      \u{1F389}
    </div>
    <h1 style="font-size:1.8rem;font-weight:900;color:var(--text-primary);margin-bottom:8px;">
      \uC8FC\uBB38\uC774 \uC644\uB8CC\uB410\uC5B4\uC694!
    </h1>
    <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:4px;">
      \uC8FC\uBB38\uBC88\uD638:
      <strong style="color:var(--blue);">
        {{ uiState.resultData.orderId }}
      </strong>
    </p>
    <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:32px;">
      \uC785\uAE08 \uD655\uC778 \uD6C4 1~2 \uC601\uC5C5\uC77C \uC774\uB0B4 \uBC1C\uC1A1\uB429\uB2C8\uB2E4.
    </p>
    <fo-container card-style="padding:20px;text-align:left;margin-bottom:20px;">
      <div style="font-size:0.88rem;font-weight:700;color:var(--text-primary);margin-bottom:14px;">
        \u{1F4E6} \uC8FC\uBB38 \uC0C1\uD488
      </div>
      <div v-for="item in uiState.resultData.items" :key="item.prodId"
          style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);">
        <div style="width:40px;height:40px;border-radius:6px;overflow:hidden;flex-shrink:0;background:var(--bg-base);">
          <img :src="item.image || window.NO_IMAGE" style="width:100%;height:100%;object-fit:cover;" />
        </div>
        <div style="flex:1;">
          <div style="font-size:0.88rem;font-weight:600;color:var(--text-primary);">
            {{ item.prodNm }}
          </div>
          <div style="font-size:0.78rem;color:var(--text-muted);">
            {{ item.color }} / {{ item.size }} \xD7 {{ item.qty }}
          </div>
          <div v-if="item.coupon" style="font-size:0.75rem;color:var(--blue);margin-top:2px;">
            \u{1F39F}\uFE0F {{ item.coupon }} (-{{ fmt(item.discount) }})
          </div>
        </div>
        <div style="font-size:0.88rem;font-weight:700;color:var(--text-primary);">
          {{ fmt(item.price) }}
        </div>
      </div>
      <div style="margin-top:14px;display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;justify-content:space-between;font-size:0.85rem;color:var(--text-secondary);">
          <span>
            \uC0C1\uD488\uAE08\uC561
          </span>
          <span>
            {{ fmt(uiState.resultData.cartTotal) }}
          </span>
        </div>
        <div v-if="uiState.resultData.couponDiscount>0" style="display:flex;justify-content:space-between;font-size:0.85rem;color:var(--blue);">
          <span>
            \uCFE0\uD3F0 \uD560\uC778
          </span>
          <span>
            -{{ fmt(uiState.resultData.couponDiscount) }}
          </span>
        </div>
        <div v-if="uiState.resultData.shippingCoupon" style="display:flex;justify-content:space-between;font-size:0.85rem;color:var(--blue);">
          <span>
            \uBC30\uC1A1\uBE44 \uCFE0\uD3F0
          </span>
          <span>
            \u{1F39F}\uFE0F {{ uiState.resultData.shippingCoupon }}
          </span>
        </div>
        <div v-if="uiState.resultData.cashUsed>0" style="display:flex;justify-content:space-between;font-size:0.85rem;color:#f97316;">
          <span>
            \uCE90\uC26C \uC0AC\uC6A9
          </span>
          <span>
            -{{ fmt(uiState.resultData.cashUsed) }}
          </span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.85rem;color:var(--text-secondary);">
          <span>
            \uBC30\uC1A1\uBE44
          </span>
          <span style="color:#22c55e;">
            \uBB34\uB8CC
          </span>
        </div>
        <div style="border-top:1px solid var(--border);padding-top:8px;display:flex;justify-content:space-between;font-size:1rem;font-weight:800;">
          <span style="color:var(--text-primary);">
            \uCD5C\uC885 \uACB0\uC81C\uAE08\uC561
          </span>
          <span style="color:var(--blue);">
            {{ fmt(uiState.resultData.finalPrice) }}
          </span>
        </div>
      </div>
    </fo-container>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uCE74\uB4DC \uC601\uC5ED =============================================== -->
    <fo-container card-style="padding:18px;text-align:left;margin-bottom:28px;background:var(--blue-dim);">
      <div style="font-size:0.85rem;font-weight:700;color:var(--blue);margin-bottom:10px;">
        \u{1F4B3} \uC785\uAE08 \uC548\uB0B4
      </div>
      <div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.8;">
        {{ config.bank && config.bank.name }} {{ config.bank?.account }}
        <br>
        \uC608\uAE08\uC8FC: {{ config.bank && config.bank.holder }}
        <br>
        <strong style="color:var(--blue);">
          \uC785\uAE08\uC561: {{ fmt(uiState.resultData.finalPrice) }}
        </strong>
        <br>
        \uC785\uAE08\uC790\uBA85: {{ uiState.resultData.form.name }}
      </div>
    </fo-container>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <button @click="handleBtnAction('page-goMyOrder')"
          style="padding:14px;font-size:1rem;font-weight:700;border:none;border-radius:10px;background:linear-gradient(135deg,#1a1a1a,#404040);color:#fff;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.15);transition:all .15s;"
          @mouseenter="$event.currentTarget.style.transform='translateY(-1px)'"
          @mouseleave="$event.currentTarget.style.transform=''">
        \u{1F4CB} \uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C \uC8FC\uBB38 \uD655\uC778
      </button>
      <button @click="handleBtnAction('page-goHome')"
          style="padding:14px;border:1.5px solid #e4e7ec;border-radius:10px;background:#fff;color:#555;font-weight:600;cursor:pointer;transition:all .15s;"
          @mouseenter="$event.currentTarget.style.background='#f8f9fb'"
          @mouseleave="$event.currentTarget.style.background='#fff'">
        \u{1F6CD} \uACC4\uC18D \uC1FC\uD551\uD558\uAE30
      </button>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \u2550\u2550 \uC8FC\uBB38 \uACB0\uACFC \uD654\uBA74 \u2550\u2550 ========================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uC8FC\uBB38 \uC785\uB825 \uD654\uBA74 \u2550\u2550 ========================================== -->
<template v-else>
  <div v-if="cfOrderItems.length===0" style="text-align:center;padding:80px 20px;">
    <div style="font-size:4rem;margin-bottom:20px;">
      \u{1F4E6}
    </div>
    <p style="color:var(--text-muted);font-size:1rem;margin-bottom:24px;">
      \uC8FC\uBB38\uD560 \uC0C1\uD488\uC774 \uC5C6\uC5B4\uC694.
    </p>
    <button class="btn-blue" @click="handleBtnAction('page-goProdList')" style="padding:12px 28px;">
      \uC0C1\uD488 \uBCF4\uB7EC\uAC00\uAE30
    </button>
  </div>
  <template v-else>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC8FC\uBB38 \uC0C1\uD488 + \uCFE0\uD3F0 ========================================== -->
    <fo-container card-style="padding:20px;margin-bottom:20px;">
      <h2 style="font-size:0.95rem;font-weight:700;margin-bottom:14px;color:var(--text-primary);">
        \u{1F6CD}\uFE0F \uC8FC\uBB38 \uC0C1\uD488 ({{ cfOrderItems.length }})
      </h2>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div v-for="(item, idx) in cfOrderItems" :key="idx"
            style="padding-bottom:14px;"
            :style="idx<cfOrderItems.length-1?'border-bottom:1px solid var(--border);':''">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD488 \uD589 ========================================== -->
          <div style="display:flex;gap:12px;align-items:center;margin-bottom:10px;">
            <div style="width:52px;height:52px;border-radius:10px;flex-shrink:0;overflow:hidden;background:var(--bg-base);">
              <img v-if="item.prod.image" :src="item.prod.image" :alt="item.prod.prodNm" style="width:100%;height:100%;object-fit:cover;" />
            </div>
            <div style="flex:1;min-width:0;">
              <div style="font-weight:700;font-size:0.9rem;color:var(--text-primary);">
                {{ item.prod.prodNm }}
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:3px;">
                <span v-if="item.color" style="font-size:0.75rem;padding:1px 8px;border-radius:10px;background:var(--blue-dim);color:var(--blue);font-weight:600;">
                  {{ item.color.name }}
                </span>
                <span style="font-size:0.75rem;padding:1px 8px;border-radius:10px;background:var(--purple-dim);color:var(--purple);font-weight:600;">
                  {{ item.size }}
                </span>
                <span style="font-size:0.75rem;padding:1px 8px;border-radius:10px;background:var(--bg-base);color:var(--text-secondary);font-weight:600;">
                  \xD7 {{ item.qty }}
                </span>
              </div>
            </div>
            <div style="text-align:right;flex-shrink:0;">
              <div style="font-weight:800;color:var(--text-primary);font-size:0.9rem;">
                {{ fmt(parsePrice(item.prod.price)*item.qty) }}
              </div>
              <div v-if="selectedCoupons[idx]" style="font-size:0.78rem;color:var(--blue);margin-top:2px;">
                -{{ fmt(calcCouponDiscount(selectedCoupons[idx],item)) }}
              </div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD488 \uCFE0\uD3F0 (rate/amount \uB9CC) ========================= -->
          <div style="display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:8px;background:var(--bg-base);">
            <span style="font-size:0.82rem;color:var(--text-muted);flex-shrink:0;">
              \u{1F39F}\uFE0F \uC0C1\uD488\uCFE0\uD3F0
            </span>
            <template v-if="selectedCoupons[idx]">
              <div style="flex:1;min-width:0;">
                <span style="font-size:0.82rem;font-weight:700;color:var(--blue);">
                  {{ selectedCoupons[idx].name }}
                </span>
                <span style="font-size:0.78rem;color:var(--blue);margin-left:6px;">
                  ({{ discountLabel(selectedCoupons[idx]) }})
                </span>
              </div>
              <button @click="handleBtnAction('coupon-remove', idx)"
                  style="padding:6px 12px;border:1px solid #ffcdd2;border-radius:6px;background:#ffebee;color:#c62828;font-size:0.8rem;cursor:pointer;font-weight:600;transition:all .15s;"
                  @mouseenter="$event.currentTarget.style.background='#ffcdd2'"
                  @mouseleave="$event.currentTarget.style.background='#ffebee'">
                \u2715 \uC81C\uAC70
              </button>
              <button @click="handleBtnAction('coupon-open', idx)"
                  style="padding:6px 12px;border:1px solid #bbdefb;border-radius:6px;background:#e3f2fd;color:#1565c0;font-size:0.8rem;cursor:pointer;font-weight:600;transition:all .15s;"
                  @mouseenter="$event.currentTarget.style.background='#bbdefb'"
                  @mouseleave="$event.currentTarget.style.background='#e3f2fd'">
                \u21BB \uBCC0\uACBD
              </button>
            </template>
            <template v-else>
              <span style="flex:1;font-size:0.82rem;color:var(--text-muted);">
                {{ productCoupons(item).length ? '\uC801\uC6A9 \uAC00\uB2A5 ' + productCoupons(item).length + '\uAC1C' : '\uC801\uC6A9 \uAC00\uB2A5 \uCFE0\uD3F0 \uC5C6\uC74C' }}
              </span>
              <button v-if="productCoupons(item).length" @click="handleBtnAction('coupon-open', idx)"
                  style="padding:6px 14px;border:1px solid #bbdefb;border-radius:8px;background:#e3f2fd;color:#1565c0;font-size:0.8rem;cursor:pointer;font-weight:600;transition:all .15s;"
                  @mouseenter="$event.currentTarget.style.background='#bbdefb'"
                  @mouseleave="$event.currentTarget.style.background='#e3f2fd'">
                \u{1F39F} \uC120\uD0DD
              </button>
            </template>
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uCE90\uC26C \uC801\uC6A9 ============================================= -->
      <div style="border-top:1px solid var(--border);margin-top:16px;padding-top:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <span style="font-size:0.88rem;font-weight:700;color:var(--text-primary);">
            \u{1F4B0} \uCE90\uC26C \uC0AC\uC6A9
          </span>
          <span style="font-size:0.82rem;color:var(--text-muted);">
            \uC794\uC561
            <strong style="color:var(--text-primary);">
              {{ fmt(uiState.cashBalance) }}
            </strong>
          </span>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <input v-model="uiState.cashInput" type="number" min="0" :max="uiState.cashBalance" placeholder="\uC0AC\uC6A9\uD560 \uCE90\uC26C \uAE08\uC561"
              style="flex:1;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.88rem;outline:none;">
          <button @click="handleBtnAction('cash-useAll')"
              style="padding:8px 16px;border:1px solid #ffcc80;border-radius:8px;background:#fff3e0;color:#e65100;font-size:0.82rem;cursor:pointer;font-weight:600;white-space:nowrap;transition:all .15s;"
              @mouseenter="$event.currentTarget.style.background='#ffe0b2'"
              @mouseleave="$event.currentTarget.style.background='#fff3e0'">
            \u{1F4B0} \uC804\uC561\uC0AC\uC6A9
          </button>
          <button @click="handleBtnAction('cash-reset')"
              style="padding:8px 14px;border:1px solid #e0e0e0;border-radius:8px;background:#fafafa;color:#888;font-size:0.82rem;cursor:pointer;font-weight:500;transition:all .15s;"
              @mouseenter="$event.currentTarget.style.background='#f0f0f0';$event.currentTarget.style.color='#555'"
              @mouseleave="$event.currentTarget.style.background='#fafafa';$event.currentTarget.style.color='#888'">
            \u21BB \uCD08\uAE30\uD654
          </button>
        </div>
        <div v-if="cfAppliedCash>0" style="margin-top:6px;font-size:0.82rem;color:#f97316;">
          {{ fmt(cfAppliedCash) }} \uCE90\uC26C \uC0AC\uC6A9 \uC608\uC815
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uCD5C\uC885 \uAE08\uC561 ============================================= -->
      <div style="border-top:1px solid var(--border);margin-top:16px;padding-top:14px;display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;justify-content:space-between;font-size:0.85rem;color:var(--text-secondary);">
          <span>
            \uC0C1\uD488\uAE08\uC561
          </span>
          <span>
            {{ fmt(cfCartTotal) }}
          </span>
        </div>
        <div v-if="cfTotalCouponDiscount>0" style="display:flex;justify-content:space-between;font-size:0.85rem;color:var(--blue);">
          <span>
            \uCFE0\uD3F0 \uD560\uC778
          </span>
          <span>
            -{{ fmt(cfTotalCouponDiscount) }}
          </span>
        </div>
        <div v-if="cfAppliedCash>0" style="display:flex;justify-content:space-between;font-size:0.85rem;color:#f97316;">
          <span>
            \uCE90\uC26C \uC0AC\uC6A9
          </span>
          <span>
            -{{ fmt(cfAppliedCash) }}
          </span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.85rem;color:var(--text-secondary);">
          <span>
            \uBC30\uC1A1\uBE44
          </span>
          <span>
            <span v-if="uiState.selectedShipCoupon" style="color:var(--blue);font-size:0.8rem;margin-right:6px;">
              \u{1F39F}\uFE0F {{ uiState.selectedShipCoupon.name }}
            </span>
            <span style="color:#22c55e;">
              \uBB34\uB8CC
            </span>
          </span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:1.05rem;font-weight:800;padding-top:8px;border-top:2px solid var(--border);margin-top:2px;">
          <span style="color:var(--text-primary);">
            \uCD5C\uC885 \uACB0\uC81C\uAE08\uC561
          </span>
          <span style="color:var(--blue);">
            {{ fmt(cfFinalPrice) }}
          </span>
        </div>
      </div>
    </fo-container>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC8FC\uBB38\uC790 \uC815\uBCF4 + \uACB0\uC81C \uC548\uB0B4 ====================================== -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(12px,2vw,20px);align-items:start;" class="order-grid">
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC8FC\uBB38\uC790 \uC815\uBCF4 ============================================ -->
      <fo-container card-style="padding:clamp(16px,3vw,28px);">
        <h2 style="font-size:1rem;font-weight:700;margin-bottom:18px;color:var(--text-primary);">
          \u{1F464} \uC8FC\uBB38\uC790 \uC815\uBCF4
        </h2>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================ -->
        <fo-form-area :columns="columns.baseForm" :form="form" :errors="errors" :cols="2" min-col-width="160px">
          <template #address>
            <div style="display:flex;gap:8px;margin-bottom:8px;">
              <input v-model="form.postcode" class="form-input" placeholder="\uC6B0\uD3B8\uBC88\uD638" readonly
                  style="width:110px;flex-shrink:0;background:var(--bg-base);cursor:default;" />
              <button @click="handleBtnAction('form-openAddr')" type="button"
                  style="padding:8px 16px;border:1px solid #a5d6a7;border-radius:8px;background:#e8f5e9;color:#2e7d32;font-size:0.82rem;font-weight:600;cursor:pointer;white-space:nowrap;transition:all .15s;"
                  @mouseenter="$event.currentTarget.style.background='#c8e6c9'"
                  @mouseleave="$event.currentTarget.style.background='#e8f5e9'">
                \u{1F4EE} \uC8FC\uC18C \uAC80\uC0C9
              </button>
            </div>
            <input v-model="form.address" class="form-input" placeholder="\uB3C4\uB85C\uBA85 \uC8FC\uC18C" readonly
                @input="clearErr('address')"
                style="margin-bottom:8px;background:var(--bg-base);cursor:default;" />
            <input v-model="form.addressDetail" class="form-input" placeholder="\uC0C1\uC138 \uC8FC\uC18C (\uB3D9/\uD638\uC218 \uB4F1)" />
            <div v-if="errors.address" class="form-error">
              {{ errors.address }}
            </div>
          </template>
        </fo-form-area>
        <button @click="handleBtnAction('form-submit')" :disabled="uiState.submitting"
            :style="{
            width:'100%',padding:'14px',border:'none',borderRadius:'10px',fontSize:'0.95rem',fontWeight:700,
            cursor: uiState.submitting ? 'wait' : 'pointer',
            background: uiState.submitting ? '#9ca3af' : 'linear-gradient(135deg,#1a1a1a,#404040)',
            color:'#fff',transition:'all .15s',
            boxShadow: uiState.submitting ? 'none' : '0 2px 8px rgba(0,0,0,0.15)',
            letterSpacing:'0.5px',
            }"
            @mouseenter="!uiState.submitting ? ($event.currentTarget.style.transform='translateY(-1px)', $event.currentTarget.style.boxShadow='0 4px 14px rgba(0,0,0,0.25)') : null"
            @mouseleave="$event.currentTarget.style.transform='', $event.currentTarget.style.boxShadow=uiState.submitting?'none':'0 2px 8px rgba(0,0,0,0.15)'">
          {{ uiState.submitting ? '\uCC98\uB9AC \uC911...' : '\u{1F6D2} \uC8FC\uBB38 \uC644\uB8CC' }}
        </button>
      </fo-container>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uACB0\uC81C \uC548\uB0B4 ============================================= -->
      <fo-container card-style="padding:clamp(16px,3vw,28px);">
        <h2 style="font-size:1rem;font-weight:700;margin-bottom:18px;color:var(--text-primary);">
          \u{1F4B3} \uACB0\uC81C \uBC29\uBC95
        </h2>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uACB0\uC81C\uC218\uB2E8 \uC120\uD0DD (\uACC4\uC88C\uC774\uCCB4 / \uD1A0\uC2A4) ========================= -->
        <div style="display:flex;gap:8px;margin-bottom:16px;">
          <label :style="{ flex:1, textAlign:'center', padding:'10px', border:'1.5px solid ' + (uiState.payMethod==='transfer' ? 'var(--text-primary)' : 'var(--border)'), borderRadius:'8px', cursor:'pointer', fontSize:'0.85rem', fontWeight: uiState.payMethod==='transfer'?700:500 }">
            <input type="radio" value="transfer" v-model="uiState.payMethod" style="margin-right:6px;" /> \uACC4\uC88C\uC774\uCCB4
          </label>
          <label :style="{ flex:1, textAlign:'center', padding:'10px', border:'1.5px solid ' + (uiState.payMethod==='toss' ? 'var(--text-primary)' : 'var(--border)'), borderRadius:'8px', cursor:'pointer', fontSize:'0.85rem', fontWeight: uiState.payMethod==='toss'?700:500 }">
            <input type="radio" value="toss" v-model="uiState.payMethod" style="margin-right:6px;" /> \u{1F4B3} \uCE74\uB4DC/\uAC04\uD3B8\uACB0\uC81C (\uD1A0\uC2A4)
          </label>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uACC4\uC88C\uC774\uCCB4 \uC548\uB0B4 ============================================ -->
        <div v-if="uiState.payMethod==='transfer'" style="display:flex;flex-direction:column;gap:4px;">
          <div class="info-row">
            <span class="info-icon">
              1\uFE0F\u20E3
            </span>
            <div>
              <div class="info-label">
                \uACB0\uC81C \uBC29\uC2DD
              </div>
              <div class="info-val">
                \uACC4\uC88C\uC774\uCCB4 \uBC29\uC2DD\uC73C\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4.
              </div>
            </div>
          </div>
          <div class="info-row">
            <span class="info-icon">
              2\uFE0F\u20E3
            </span>
            <div>
              <div class="info-label">
                \uC785\uAE08 \uACC4\uC88C
              </div>
              <div class="info-val" style="margin-top:4px;">
                <span v-if="config.bank?.account">
                {{ config.bank.name }} {{ config.bank.account }}
                <br>
                \uC608\uAE08\uC8FC: {{ config.bank.holder }}
              </span>
            </div>
          </div>
        </div>
        <div class="info-row">
          <span class="info-icon">
            3\uFE0F\u20E3
          </span>
          <div>
            <div class="info-label">
              \uC785\uAE08 \uAE08\uC561
            </div>
            <div class="info-val" style="color:var(--blue);font-weight:700;margin-top:4px;">
              {{ fmt(cfFinalPrice) }}
            </div>
          </div>
        </div>
        <div class="info-row">
          <span class="info-icon">
            4\uFE0F\u20E3
          </span>
          <div>
            <div class="info-label">
              \uC785\uAE08\uC790\uBA85
            </div>
            <div class="info-val" style="margin-top:4px;">
              \uC8FC\uBB38\uC790\uBA85\uACFC \uB3D9\uC77C\uD558\uAC8C \uC785\uB825\uD574\uC8FC\uC138\uC694.
            </div>
          </div>
        </div>
        </div>
        <!-- ===== \u25A1.\u25A1.\u25A1.\u25A1.\u25A1. \uACC4\uC88C\uC774\uCCB4 \uC548\uB0B4 ============================================ -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD1A0\uC2A4 \uACB0\uC81C\uC704\uC82F ============================================ -->
        <div v-else style="margin-bottom:8px;">
          <div v-if="cfFinalPrice <= 0" style="padding:14px;background:var(--bg-base);border-radius:8px;font-size:0.85rem;color:var(--text-muted);text-align:center;">
            \uD560\uC778/\uCE90\uC2DC\uB85C \uC804\uC561 \uACB0\uC81C\uB418\uC5B4 \uBCC4\uB3C4 \uCE74\uB4DC\uACB0\uC81C\uAC00 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
          </div>
          <template v-else>
            <div :id="toss.containerId"></div>
            <div v-if="!toss.mounted" style="padding:20px;text-align:center;color:var(--text-muted);font-size:0.82rem;">
              \uACB0\uC81C\uC704\uC82F\uC744 \uBD88\uB7EC\uC624\uB294 \uC911...
            </div>
          </template>
        </div>
        <!-- ===== \u25A1.\u25A1.\u25A1.\u25A1.\u25A1. \uD1A0\uC2A4 \uACB0\uC81C\uC704\uC82F ============================================ -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uC1A1\uBE44 + \uBC30\uC1A1\uBE44 \uCFE0\uD3F0 \uC120\uD0DD =============================== -->
        <div class="info-row" style="align-items:flex-start;">
          <span class="info-icon">
            \u{1F69A}
          </span>
          <div style="flex:1;">
            <div class="info-label">
              \uBC30\uC1A1\uBE44
            </div>
            <div style="margin-top:6px;">
              <template v-if="uiState.selectedShipCoupon">
                <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;background:var(--blue-dim);">
                  <span style="font-size:0.82rem;font-weight:700;color:var(--blue);flex:1;">
                    \u{1F39F}\uFE0F {{ uiState.selectedShipCoupon.name }}
                  </span>
                  <button @click="handleBtnAction('shipCoupon-remove')"
                        style="padding:5px 11px;border:1px solid #ffcdd2;border-radius:6px;background:#ffebee;color:#c62828;font-size:0.78rem;cursor:pointer;font-weight:600;transition:all .15s;"
                        @mouseenter="$event.currentTarget.style.background='#ffcdd2'"
                        @mouseleave="$event.currentTarget.style.background='#ffebee'">
                    \u2715 \uC81C\uAC70
                  </button>
                  <button @click="handleBtnAction('shipCoupon-open')"
                        style="padding:5px 12px;border:1px solid #ce93d8;border-radius:6px;background:#f3e5f5;color:#6a1b9a;font-size:0.78rem;cursor:pointer;font-weight:600;transition:all .15s;"
                        @mouseenter="$event.currentTarget.style.background='#e1bee7'"
                        @mouseleave="$event.currentTarget.style.background='#f3e5f5'">
                    \uBCC0\uACBD
                  </button>
                </div>
                <div style="font-size:0.82rem;color:#22c55e;margin-top:4px;">
                  \u2713 \uBC30\uC1A1\uBE44 \uCFE0\uD3F0 \uC801\uC6A9\uB428 \u2192 \uBB34\uB8CC
                </div>
              </template>
              <template v-else>
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="font-size:0.85rem;color:#22c55e;font-weight:700;">
                    \uBB34\uB8CC
                  </span>
                  <button v-if="cfShippingCoupons.length" @click="handleBtnAction('shipCoupon-open')"
                        style="padding:6px 12px;border:1px solid #ce93d8;border-radius:8px;background:#f3e5f5;color:#6a1b9a;font-size:0.78rem;cursor:pointer;font-weight:600;transition:all .15s;"
                        @mouseenter="$event.currentTarget.style.background='#e1bee7'"
                        @mouseleave="$event.currentTarget.style.background='#f3e5f5'">
                    \u{1F39F} \uBC30\uC1A1\uBE44 \uCFE0\uD3F0 \uC120\uD0DD
                  </button>
                </div>
              </template>
            </div>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================ -->
        <div class="info-row">
          <span class="info-icon">
            \u{1F4DE}
          </span>
          <div>
            <div class="info-label">
              \uBB38\uC758
            </div>
            <div class="info-val" style="margin-top:4px;">
              {{ config.tel }} / {{ config.email }}
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top:16px;">
        <button @click="handleBtnAction('page-goContact')"
              style="width:100%;padding:10px;border:1.5px solid #e4e7ec;border-radius:10px;background:#fff;color:#555;font-size:0.88rem;font-weight:600;cursor:pointer;transition:all .15s;"
              @mouseenter="$event.currentTarget.style.background='#f8f9fb';$event.currentTarget.style.borderColor='#d0d7de'"
              @mouseleave="$event.currentTarget.style.background='#fff';$event.currentTarget.style.borderColor='#e4e7ec'">
          \u{1F4AC} \uBB38\uC758\xB7\uC0C1\uB2F4\uD558\uAE30
        </button>
      </div>
    </fo-container>
  </div>
</template>
</template>
<!-- ===== \u25A1.\u25A1. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 \uBC30\uB108 ============================================ -->
<!-- ===== \u25A1. \u2550\u2550 \uC8FC\uBB38 \uC785\uB825 \uD654\uBA74 \u2550\u2550 ========================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uC0C1\uD488 \uCFE0\uD3F0 \uD31D\uC5C5 \u2550\u2550 ========================================== -->
<fo-modal :show="couponPopup.show && cfOrderItems.length > 0" title="\u{1F39F}\uFE0F \uC0C1\uD488 \uCFE0\uD3F0 \uC120\uD0DD" max-width="480px" max-height="82vh"
  @close="fnCallbackModal('coupon', null, 'close')">
  <div style="font-size:0.76rem;color:var(--text-muted);margin-bottom:12px;">
    \uD560\uC778(\uC815\uB960/\uC815\uC561) \uCFE0\uD3F0 \xB7 \uC0C1\uD488 1\uAC1C\uB2F9 1\uAC1C \uC801\uC6A9
  </div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <!-- \uCFE0\uD3F0 \uC5C6\uC74C -->
    <div @click="fnCallbackModal('coupon', null, null)"
        style="padding:14px 16px;border-radius:10px;border:1.5px solid var(--border);background:var(--bg-card);cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .15s;"
        :style="!selectedCoupons[couponPopup.targetIdx] ? 'border-color:var(--text-muted);background:var(--bg-base);' : ''">
      <div style="width:38px;height:38px;border-radius:10px;background:var(--bg-base);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;color:var(--text-muted);">
        \u{1F6AB}
      </div>
      <div style="flex:1;font-size:0.9rem;font-weight:600;color:var(--text-secondary);">
        \uCFE0\uD3F0 \uC0AC\uC6A9 \uC548 \uD568
      </div>
    </div>
    <template v-if="couponPopup.targetIdx !== null">
      <div v-for="c in productCoupons(cfOrderItems[couponPopup.targetIdx])" :key="c.couponId"
          @click="fnCallbackModal('coupon', null, c)"
          :style="{
            padding:'14px 16px', borderRadius:'10px', cursor:'pointer',
            display:'flex', alignItems:'center', gap:'12px', transition:'all .15s',
            border: selectedCoupons[couponPopup.targetIdx] ? (selectedCoupons[couponPopup.targetIdx].couponId===c.couponId ? '2px solid var(--blue)' : '1.5px solid var(--border)') : '1.5px solid var(--border)',
            background: selectedCoupons[couponPopup.targetIdx] ? (selectedCoupons[couponPopup.targetIdx].couponId===c.couponId ? 'var(--blue-dim)' : 'var(--bg-card)') : 'var(--bg-card)',
          }">
        <div style="width:44px;height:44px;background:var(--blue-dim);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;">
          \u{1F39F}\uFE0F
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:0.9rem;font-weight:700;color:var(--text-primary);">
            {{ c.name }}
          </div>
          <div style="font-size:0.74rem;color:var(--text-muted);margin-top:3px;display:flex;gap:8px;flex-wrap:wrap;">
            <span>{{ c.minOrder > 0 ? fmt(c.minOrder) + ' \uC774\uC0C1' : '\uCD5C\uC18C\uAE08\uC561 \uC5C6\uC74C' }}</span>
            <span>\xB7</span>
            <span>~ {{ c.expiry }}</span>
          </div>
        </div>
        <div style="font-size:1rem;font-weight:800;color:var(--blue);flex-shrink:0;background:var(--blue-dim);border:1px solid var(--border);border-radius:8px;padding:4px 10px;">
          {{ discountLabel(c) }}
        </div>
      </div>
      <div v-if="!productCoupons(cfOrderItems[couponPopup.targetIdx]).length"
          style="text-align:center;padding:40px 20px;color:var(--text-muted);font-size:0.88rem;background:var(--bg-base);border-radius:10px;border:1px dashed var(--border);">
        \u{1FA99} \uC774 \uC0C1\uD488\uC5D0 \uC801\uC6A9 \uAC00\uB2A5\uD55C \uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
    </template>
  </div>
</fo-modal>
<!-- ===== \u25A1. \u2550\u2550 \uC0C1\uD488 \uCFE0\uD3F0 \uD31D\uC5C5 \u2550\u2550 ========================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uBC30\uC1A1\uBE44 \uCFE0\uD3F0 \uD31D\uC5C5 \u2550\u2550 ========================================= -->
<fo-modal :show="uiState.shipCouponPopup && cfOrderItems.length > 0" title="\u{1F69A} \uBC30\uC1A1\uBE44 \uCFE0\uD3F0 \uC120\uD0DD" max-width="440px" max-height="72vh"
  @close="fnCallbackModal('shipCoupon', null, 'close')">
  <div style="font-size:0.76rem;color:var(--text-muted);margin-bottom:12px;">
    \uBC30\uC1A1\uBE44 \uD560\uC778 \uCFE0\uD3F0\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4
  </div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <!-- \uCFE0\uD3F0 \uC5C6\uC74C -->
    <div @click="fnCallbackModal('shipCoupon', null, null)"
        style="padding:14px 16px;border-radius:10px;border:1.5px solid var(--border);background:var(--bg-card);cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .15s;"
        :style="!uiState.selectedShipCoupon ? 'border-color:var(--text-muted);background:var(--bg-base);' : ''">
      <div style="width:38px;height:38px;border-radius:10px;background:var(--bg-base);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;color:var(--text-muted);">
        \u{1F6AB}
      </div>
      <div style="font-size:0.9rem;font-weight:600;color:var(--text-secondary);">
        \uCFE0\uD3F0 \uC0AC\uC6A9 \uC548 \uD568
      </div>
    </div>
    <div v-for="c in cfShippingCoupons" :key="c.couponId"
        @click="fnCallbackModal('shipCoupon', null, c)"
        :style="{
          padding:'14px 16px', borderRadius:'10px', cursor:'pointer',
          display:'flex', alignItems:'center', gap:'12px', transition:'all .15s',
          border: uiState.selectedShipCoupon ? (uiState.selectedShipCoupon.couponId===c.couponId ? '2px solid var(--green)' : '1.5px solid var(--border)') : '1.5px solid var(--border)',
          background: uiState.selectedShipCoupon ? (uiState.selectedShipCoupon.couponId===c.couponId ? 'var(--green-dim)' : 'var(--bg-card)') : 'var(--bg-card)',
        }">
      <div style="width:44px;height:44px;border-radius:10px;background:var(--green-dim);display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;">
        \u{1F69A}
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:0.9rem;font-weight:700;color:var(--text-primary);">
          {{ c.name }}
        </div>
        <div style="font-size:0.74rem;color:var(--text-muted);margin-top:3px;">
          ~ {{ c.expiry }}
        </div>
      </div>
      <div style="font-size:0.9rem;font-weight:800;color:var(--green);flex-shrink:0;background:var(--green-dim);border:1px solid var(--border);border-radius:8px;padding:4px 10px;">
        \uBB34\uB8CC\uBC30\uC1A1
      </div>
    </div>
    <div v-if="!cfShippingCoupons.length"
        style="text-align:center;padding:40px 20px;color:var(--text-muted);font-size:0.88rem;background:var(--bg-base);border-radius:10px;border:1px dashed var(--border);">
      \u{1FA99} \uBCF4\uC720\uD55C \uBC30\uC1A1\uBE44 \uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
  </div>
</fo-modal>
<!-- ===== \u25A0. \uC8FC\uC18C \uAC80\uC0C9 \uBAA8\uB2EC (\uCE74\uCE74\uC624 \uC6B0\uD3B8\uBC88\uD638, \uC778\uB77C\uC778 \uB808\uC774\uC5B4) ============================ -->
<fo-addr-search-modal v-if="modals.isAddrSearchModal" modal-name="addr-search" :on-callback="fnCallbackModal" />
</fo-page>
<!-- ===== \u25A1. \u2550\u2550 \uBC30\uC1A1\uBE44 \uCFE0\uD3F0 \uD31D\uC5C5 \u2550\u2550 ========================================= -->
`};
