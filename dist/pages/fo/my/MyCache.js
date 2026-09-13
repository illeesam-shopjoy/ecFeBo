window.MyCache={name:"MyCache",props:{navigate:{type:Function,required:!0}},setup(C){const{reactive:l,computed:g,onMounted:f,watch:A}=Vue,i=window.foApp.showToast,h=window.foApp.cart,L=l({loading:!1,error:null}),y=(e,a={})=>{if(e==="caches-add")return u();e==="caches-setAmount"?n.value=a:console.warn("[handleBtnAction] unknown cmd:",e)},x=(e,a={})=>{if(e==="caches-orderOpen")return b(a);console.warn("[handleSelectAction] unknown cmd:",e)},m=(e,a,c)=>{if(e==="order-detail"){if(c==null){t.orderDetailModal.show=!1;return}return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},t=window.useFoMyStore(),{cashBalance:d,cashHistory:s,chargeAmount:n}=Pinia.storeToRefs(t),o=l({pageType:"PAGE",pageNo:1,pageSize:50,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),{dateRange:p,onDateSearch:v}=window.myDateFilterHelper(),u=()=>{const e=parseInt(String(n.value).replace(/,/g,""),10);if(!e||e<1e3){i("\uCD5C\uC18C 1,000\uC6D0 \uC774\uC0C1 \uCDA9\uC804 \uAC00\uB2A5\uD569\uB2C8\uB2E4.","error");return}d.value+=e,s.value.unshift({cashId:Date.now(),date:coUtil.cofToYmd(new Date),type:"\uCDA9\uC804",amount:e,desc:"\uC9C1\uC811 \uCDA9\uC804",balance:d.value}),n.value="",o.pageNo=1,i(e.toLocaleString()+"\uC6D0\uC774 \uCDA9\uC804\uB418\uC5C8\uC2B5\uB2C8\uB2E4!","success")},b=async e=>{await t.handleLoadOrders(),t.openOrderModal(e)||i("\uC8FC\uBB38 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error")},w=()=>({dateRangeType:"reg_date",dateRangeStart:p.start,dateRangeEnd:p.end}),r=async()=>{await t.handleLoadCashPage(w(),o)},k=async e=>{e&&v(e),o.pageNo=1,await r(),t.handleLoadOrders()},z=async()=>{await r()},S=async()=>{await r()};f(async()=>{await r(),t.handleLoadOrders()});const M=g(()=>h.length);return{handleBtnAction:y,handleSelectAction:x,fnCallbackModal:m,myStore:t,cashBalance:d,cashHistory:s,chargeAmount:n,pager:o,onPageChange:z,onSizeChange:S,onSearch:k,cartCount:M}},template:`
<fo-page bare>
<fo-my-layout :navigate="navigate" :cart-count="cartCount" active-page="myCache">
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <MyDateFilter @search="onSearch" />
  <!-- ===== \u25A0. \uBCF4\uC720 \uCE90\uC26C =================================================== -->
  <div style="background:linear-gradient(135deg,#fbbf24,#f59e0b);border-radius:var(--radius);padding:24px;margin-bottom:20px;color:#1a1a1a;">
    <div style="font-size:0.85rem;font-weight:600;opacity:0.7;">
      \uBCF4\uC720 \uCE90\uC26C
    </div>
    <div style="font-size:2.2rem;font-weight:900;margin-top:4px;">
      {{ cashBalance.toLocaleString() }}
      <span style="font-size:1rem;margin-left:4px;">
        \uC6D0
      </span>
    </div>
  </div>
  <!-- ===== \u25A1. \uBCF4\uC720 \uCE90\uC26C =================================================== -->
  <!-- ===== \u25A0. \uCDA9\uC804 \uC785\uB825 =================================================== -->
  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:20px;display:flex;gap:10px;align-items:center;">
    <input v-model="chargeAmount" type="number" placeholder="\uCDA9\uC804 \uAE08\uC561 \uC785\uB825 (\uCD5C\uC18C 1,000\uC6D0)" @keyup.enter="handleBtnAction('caches-add')"
      style="flex:1;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.9rem;outline:none;">
    <button @click="handleBtnAction('caches-add')" class="btn-blue" style="padding:10px 20px;white-space:nowrap;">
      \uCDA9\uC804\uD558\uAE30
    </button>
  </div>
  <!-- ===== \u25A1. \uCDA9\uC804 \uC785\uB825 =================================================== -->
  <!-- ===== \u25A0. \uBE60\uB978 \uAE08\uC561 \uBC84\uD2BC ================================================ -->
  <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
    <button v-for="amt in [5000,10000,30000,50000]" :key="amt" @click="handleBtnAction('caches-setAmount', amt)"
      style="padding:8px 14px;border:1.5px solid var(--border);border-radius:20px;background:var(--bg-card);cursor:pointer;font-size:0.82rem;font-weight:600;color:var(--text-secondary);">
      +{{ amt.toLocaleString() }}\uC6D0
    </button>
  </div>
  <!-- ===== \u25A1. \uBE60\uB978 \uAE08\uC561 \uBC84\uD2BC ================================================ -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <PagerHeader :total="pager.pageTotalCount" :pager="pager" @size-change="onSizeChange" />
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <div v-if="!cashHistory.length" style="text-align:center;padding:60px 0;color:var(--text-muted);">
    \uCE90\uC26C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
  </div>
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div v-for="h in cashHistory" :key="h.cashId"
    style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:8px;display:flex;align-items:center;gap:12px;">
    <div style="width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;"
      :style="h.type==='\uD658\uBD88'?'background:#ffedd5;':h.type==='\uCDA9\uC804'?'background:#dcfce7;':'background:#fee2e2;'">
      {{ h.type==='\uD658\uBD88' ? '\u21A9' : h.type==='\uCDA9\uC804' ? '\u2191' : '\u2193' }}
    </div>
    <!-- ===== \u25A0.\u25A0. 1\uC5F4: \uC124\uBA85 + \uB0A0\uC9DC =========================================== -->
    <div style="min-width:160px;flex:0 0 auto;">
      <div style="font-weight:600;font-size:0.88rem;color:var(--text-primary);">
        <template v-if="myStore.extractOrderId(h.desc)">
          <button @click="handleSelectAction('caches-orderOpen', myStore.extractOrderId(h.desc))"
            style="background:none;border:none;padding:0;cursor:pointer;font-size:0.88rem;font-weight:700;color:var(--blue);text-decoration:underline;text-underline-offset:2px;">
            {{ myStore.extractOrderId(h.desc) }}
          </button>
          <span style="font-weight:400;color:var(--text-secondary);">
            {{ h.desc.replace(myStore.extractOrderId(h.desc), '').trim() }}
          </span>
        </template>
        <template v-else>
          {{ h.desc }}
        </template>
      </div>
      <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px;">
        {{ h.date }}
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. 1\uC5F4: \uC124\uBA85 + \uB0A0\uC9DC =========================================== -->
    <!-- ===== \u25A0.\u25A0. 2\uC5F4: \uACB0\uC81C/\uD658\uBD88 \uC815\uBCF4 ========================================== -->
    <div style="flex:1;min-width:0;padding:0 8px;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC9C1\uC811 \uCDA9\uC804 \uACB0\uC81C\uC815\uBCF4 ========================================== -->
      <div v-if="h.payMethod" style="display:inline-flex;flex-direction:column;gap:3px;padding:5px 10px;background:var(--bg-base);border-radius:6px;border:1px solid var(--border);">
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="font-size:0.7rem;color:var(--text-muted);min-width:42px;flex-shrink:0;">
            \uCDA9\uC804\uAE08\uC561
          </span>
          <span style="font-size:0.75rem;font-weight:700;color:#22c55e;">
            +{{ h.amount.toLocaleString() }}\uC6D0
          </span>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="font-size:0.7rem;color:var(--text-muted);min-width:42px;flex-shrink:0;">
            \uACB0\uC81C\uC218\uB2E8
          </span>
          <span style="font-size:0.75rem;font-weight:600;color:var(--text-primary);">
            {{ h.payMethod }}
          </span>
        </div>
        <div v-if="h.cardInfo||h.bankInfo" style="display:flex;gap:8px;align-items:center;">
          <span style="font-size:0.7rem;color:var(--text-muted);min-width:42px;flex-shrink:0;">
            \uCE74\uB4DC/\uACC4\uC88C
          </span>
          <span style="font-size:0.72rem;font-weight:600;color:var(--text-primary);">
            {{ h.cardInfo || h.bankInfo }}
          </span>
        </div>
        <div v-if="h.approvalNo" style="display:flex;gap:8px;align-items:center;">
          <span style="font-size:0.7rem;color:var(--text-muted);min-width:42px;flex-shrink:0;">
            \uC2B9\uC778\uBC88\uD638
          </span>
          <span style="font-size:0.75rem;font-weight:600;color:var(--text-primary);">
            {{ h.approvalNo }}
          </span>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCE90\uC26C \uD658\uBD88 \uC815\uBCF4 ============================================ -->
      <div v-else-if="h.refundBank" style="display:inline-flex;flex-direction:column;gap:3px;padding:5px 10px;background:#fff7ed;border-radius:6px;border:1px solid #fed7aa;">
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="font-size:0.7rem;color:#92400e;min-width:42px;flex-shrink:0;">
            \uD658\uBD88\uACC4\uC88C
          </span>
          <span style="font-size:0.72rem;font-weight:600;color:#78350f;">
            {{ h.refundBank }}
          </span>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="font-size:0.7rem;color:#92400e;min-width:42px;flex-shrink:0;">
            \uC608\uAE08\uC8FC
          </span>
          <span style="font-size:0.75rem;font-weight:600;color:#78350f;">
            {{ h.refundHolder }}
          </span>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="font-size:0.7rem;color:#92400e;min-width:42px;flex-shrink:0;">
            \uD658\uBD88\uAE08
          </span>
          <span style="font-size:0.75rem;font-weight:700;color:#f97316;">
            {{ (h.refundNet + h.refundFee).toLocaleString() }}\uC6D0
          </span>
          <span style="font-size:0.7rem;color:#92400e;margin-left:4px;">
            \uC218\uC218\uB8CC
          </span>
          <span style="font-size:0.75rem;font-weight:600;color:#ef4444;">
            -{{ h.refundFee.toLocaleString() }}\uC6D0
          </span>
          <span style="font-size:0.7rem;color:#92400e;margin-left:4px;">
            \u2192 \uC2E4\uC9C0\uAE09
          </span>
          <span style="font-size:0.75rem;font-weight:700;color:#78350f;">
            {{ h.refundNet.toLocaleString() }}\uC6D0
          </span>
        </div>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. 2\uC5F4: \uACB0\uC81C/\uD658\uBD88 \uC815\uBCF4 ========================================== -->
    <!-- ===== \u25A0.\u25A0. 3\uC5F4: \uAC70\uB798\uAE08\uC561 ============================================== -->
    <div style="font-weight:800;font-size:0.95rem;text-align:right;min-width:80px;flex-shrink:0;"
      :style="h.type==='\uD658\uBD88'?'color:#f97316;':h.type==='\uCDA9\uC804'?'color:#22c55e;':'color:#ef4444;'">
      {{ h.type==='\uCDA9\uC804' ? '+' : h.type==='\uD658\uBD88' ? '-' : '' }}{{ Math.abs(h.amount).toLocaleString() }}\uC6D0
    </div>
    <!-- ===== \u25A1.\u25A1. 3\uC5F4: \uAC70\uB798\uAE08\uC561 ============================================== -->
    <!-- ===== \u25A0.\u25A0. 4\uC5F4: \uC794\uC561 ================================================ -->
    <div v-if="h.balance != null" style="text-align:right;min-width:90px;flex-shrink:0;border-left:1px solid var(--border);padding-left:14px;">
      <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:2px;">
        \uC794\uC561
      </div>
      <div style="font-size:0.88rem;font-weight:700;color:var(--text-primary);">
        {{ h.balance.toLocaleString() }}\uC6D0
      </div>
    </div>
  </div>
  <Pagination :total="pager.pageTotalCount" :pager="pager" @set-page="onPageChange" />
  <!-- ===== \u25A1.\u25A1. 4\uC5F4: \uC794\uC561 ================================================ -->
  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <Teleport to="body">
    <OrderDetailModal :show="myStore.orderDetailModal.show" :order="myStore.orderDetailModal.order" modal-name="order-detail" :on-callback="fnCallbackModal" />
  </teleport>
</fo-my-layout>
</fo-page>
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
`,components:{FoMyLayout:window.foMyLayout,PagerHeader:window.PagerHeader,Pagination:window.Pagination,OrderDetailModal:window.OrderDetailModal}};
