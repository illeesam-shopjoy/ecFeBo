window.MyCoupon={name:"MyCoupon",props:{navigate:{type:Function,required:!0}},setup(k){const{reactive:c,computed:n,onMounted:u,watch:P}=Vue,d=window.foApp.showToast,g=window.foApp.cart,s=c({loading:!1,error:null,activeTab:"unused"}),v=(e,i={})=>{if(e==="coupons-add")return b();if(e==="coupons-tabChange")return w(i);console.warn("[handleBtnAction] unknown cmd:",e)},o=window.useFoMyStore(),{coupons:t,couponCode:p}=Pinia.storeToRefs(o),a=c({pageType:"PAGE",pageNo:1,pageSize:50,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),{dateRange:l,onDateSearch:x}=window.myDateFilterHelper(),f=n(()=>t.value.filter(e=>s.activeTab==="unused"?!e.used:e.used)),m=n(()=>t.value.filter(e=>!e.used).length),y=n(()=>t.value.filter(e=>e.used).length),b=()=>{const e=p.value.trim().toUpperCase();if(!e){d("\uCFE0\uD3F0 \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if(t.value.find(i=>i.code===e)){d("\uC774\uBBF8 \uB4F1\uB85D\uB41C \uCFE0\uD3F0\uC785\uB2C8\uB2E4.","error");return}t.value.unshift({couponId:Date.now(),code:e,name:"\uCD94\uAC00 \uCFE0\uD3F0 ("+e+")",discountType:"amount",discountValue:3e3,minOrder:3e4,expiry:"2026-12-31",used:!1,regDate:coUtil.cofToYmd(new Date),regSource:"\uCFE0\uD3F0 \uCF54\uB4DC \uC785\uB825",regMethod:"\uC218\uB3D9"}),p.value="",a.pageNo=1,d("\uCFE0\uD3F0\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4!","success")},h=()=>({dateRangeType:"reg_date",dateRangeStart:l.start,dateRangeEnd:l.end}),r=async()=>{await o.handleLoadCouponsPage(h(),a)},w=async e=>{s.activeTab=e,a.pageNo=1,await r()},C=async e=>{e&&x(e),a.pageNo=1,await r(),o.handleLoadOrders()},S=async()=>{await r()},z=async()=>{await r()};u(async()=>{await r(),o.handleLoadOrders()});const T=n(()=>g.length);return{uiState:s,handleBtnAction:v,myStore:o,coupons:t,couponCode:p,pager:a,cfPageCoupons:f,cfUnusedCount:m,cfUsedCount:y,onSearch:C,onPageChange:S,onSizeChange:z,cartCount:T}},template:`
<fo-page bare>
<fo-my-layout :navigate="navigate" :cart-count="cartCount" active-page="myCoupon">
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <MyDateFilter @search="onSearch" />
  <!-- ===== \u25A0. \uCFE0\uD3F0 \uB4F1\uB85D =================================================== -->
  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:20px;display:flex;gap:10px;align-items:center;">
    <input v-model="couponCode" type="text" placeholder="\uCFE0\uD3F0 \uCF54\uB4DC \uC785\uB825 (\uC608: SPRING5000)" @keyup.enter="handleBtnAction('coupons-add')"
      style="flex:1;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.9rem;outline:none;text-transform:uppercase;">
    <button @click="handleBtnAction('coupons-add')" class="btn-blue" style="padding:10px 20px;white-space:nowrap;">
      \uCFE0\uD3F0 \uB4F1\uB85D
    </button>
  </div>
  <!-- ===== \u25A1. \uCFE0\uD3F0 \uB4F1\uB85D =================================================== -->
  <!-- ===== \u25A0. \uD0ED ======================================================= -->
  <div style="display:flex;border-bottom:2px solid var(--border);margin-bottom:20px;">
    <button @click="handleBtnAction('coupons-tabChange', 'unused')"
      :style="{
      padding:'10px 24px', background:'none', border:'none', cursor:'pointer',
      fontSize:'0.88rem', fontWeight: uiState.activeTab==='unused' ? '700' : '500',
      color: uiState.activeTab==='unused' ? 'var(--text-primary)' : 'var(--text-muted)',
      borderBottom: uiState.activeTab==='unused' ? '2px solid var(--text-primary)' : '2px solid transparent',
      marginBottom: '-2px',
      }">
      \uBBF8\uC0AC\uC6A9
      <span style="font-size:0.8rem;margin-left:2px;">
        ({{ cfUnusedCount }})
      </span>
    </button>
    <button @click="handleBtnAction('coupons-tabChange', 'used')"
      :style="{
      padding:'10px 24px', background:'none', border:'none', cursor:'pointer',
      fontSize:'0.88rem', fontWeight: uiState.activeTab==='used' ? '700' : '500',
      color: uiState.activeTab==='used' ? 'var(--text-primary)' : 'var(--text-muted)',
      borderBottom: uiState.activeTab==='used' ? '2px solid var(--text-primary)' : '2px solid transparent',
      marginBottom: '-2px',
      }">
      \uC0AC\uC6A9
      <span style="font-size:0.8rem;margin-left:2px;">
        ({{ cfUsedCount }})
      </span>
    </button>
  </div>
  <!-- ===== \u25A1. \uD0ED ======================================================= -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <PagerHeader :total="pager.pageTotalCount" :pager="pager" @size-change="onSizeChange" />
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <div v-if="!cfPageCoupons.length" style="text-align:center;padding:60px 0;color:var(--text-muted);">
    {{ uiState.activeTab==='unused' ? '\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.' : '\uC0AC\uC6A9\uB41C \uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.' }}
  </div>
  <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div v-for="c in cfPageCoupons" :key="c.couponId"
    style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:10px;display:flex;align-items:flex-start;gap:14px;">
    <!-- ===== \u25A0.\u25A0. \uCFE0\uD3F0 \uC544\uC774\uCF58 ================================================ -->
    <div style="font-size:2rem;flex-shrink:0;margin-top:2px;">
      \u{1F39F}\uFE0F
    </div>
    <!-- ===== \u25A0.\u25A0. \uBA54\uC778 \uC815\uBCF4 ================================================= -->
    <div style="flex:1;min-width:0;">
      <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">
        {{ c.name }}
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBC30\uC9C0 ================================================== -->
      <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:8px;">
        <span style="font-size:0.72rem;padding:2px 8px;border-radius:10px;font-weight:600;"
          :style="c.discountType==='shipping' ? 'background:#dbeafe;color:#1d4ed8;' : 'background:#dcfce7;color:#15803d;'">
          {{ c.discountType==='shipping' ? '\uBC30\uC1A1\uBE44 \uD560\uC778' : '\uC0C1\uD488 \uD560\uC778' }}
        </span>
        <span v-if="c.applicableTo ? c.discountType!=='shipping' : false" style="font-size:0.72rem;padding:2px 8px;border-radius:10px;font-weight:600;background:var(--bg-base);color:var(--text-secondary);border:1px solid var(--border);">
        {{ c.applicableTo }}
      </span>
      <span style="font-size:0.72rem;padding:2px 8px;border-radius:10px;font-weight:600;"
          :style="c.regMethod==='\uC790\uB3D9' ? 'background:#ede9fe;color:#6d28d9;' : 'background:#fef3c7;color:#92400e;'">
        {{ c.regMethod || '\uC218\uB3D9' }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uAE30\uBCF8 \uC815\uBCF4 =============================================== -->
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:3px 16px;margin-bottom:6px;">
      <div style="font-size:0.78rem;color:var(--text-muted);">
        \uCFE0\uD3F0\uCF54\uB4DC
        <span style="font-weight:600;color:var(--text-secondary);margin-left:4px;font-family:monospace;letter-spacing:.5px;">
          {{ c.code }}
        </span>
      </div>
      <div style="font-size:0.78rem;color:var(--text-muted);">
        \uCFE0\uD3F0\uBC1C\uAE09\uBC88\uD638
        <span style="font-weight:600;color:var(--text-secondary);margin-left:4px;">
          {{ String(c.couponId).padStart(8, '0') }}
        </span>
      </div>
      <div style="font-size:0.78rem;color:var(--text-muted);">
        \uB9CC\uB8CC
        <span style="font-weight:600;color:var(--text-secondary);margin-left:4px;">
          {{ c.expiry }}
        </span>
      </div>
      <div v-if="c.minOrder>0" style="font-size:0.78rem;color:var(--text-muted);">
        \uCD5C\uC18C\uC8FC\uBB38
        <span style="font-weight:600;color:var(--text-secondary);margin-left:4px;">
          {{ c.minOrder.toLocaleString() }}\uC6D0 \uC774\uC0C1
        </span>
      </div>
      <div v-if="c.regDate" style="font-size:0.78rem;color:var(--text-muted);">
        \uB4F1\uB85D\uC77C
        <span style="font-weight:600;color:var(--text-secondary);margin-left:4px;">
          {{ c.regDate }}
        </span>
      </div>
      <div v-if="c.regSource" style="font-size:0.78rem;color:var(--text-muted);">
        \uB4F1\uB85D\uCD9C\uCC98
        <span style="font-weight:600;color:var(--text-secondary);margin-left:4px;">
          {{ c.regSource }}
        </span>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC0AC\uC6A9 \uC815\uBCF4 (\uC0AC\uC6A9\uB428 \uD0ED) ======================================= -->
    <div v-if="c.used" style="margin-top:6px;padding:8px 12px;background:var(--bg-base);border-radius:6px;border:1px solid var(--border);display:flex;flex-wrap:wrap;gap:8px 20px;">
      <div v-if="c.usedOrderId" style="font-size:0.78rem;color:var(--text-muted);">
        \uC8FC\uBB38id
        <span style="font-weight:600;color:var(--blue);margin-left:4px;">
          {{ c.usedOrderId }}
        </span>
      </div>
      <div v-if="c.usedOrderItemId" style="font-size:0.78rem;color:var(--text-muted);">
        \uC8FC\uBB38\uC0C1\uD488id
        <span style="font-weight:600;color:var(--text-secondary);margin-left:4px;">
          {{ c.usedOrderItemId }}
        </span>
      </div>
      <div v-if="c.usedProductId" style="font-size:0.78rem;color:var(--text-muted);">
        \uC0C1\uD488id
        <span style="font-weight:600;color:var(--text-secondary);margin-left:4px;">
          {{ c.usedProductId }}
        </span>
      </div>
      <div v-if="c.usedClaimId" style="font-size:0.78rem;color:var(--text-muted);">
        \uD074\uB808\uC784id
        <span style="font-weight:600;color:var(--text-secondary);margin-left:4px;">
          {{ c.usedClaimId }}
        </span>
      </div>
      <div v-if="myStore.getCouponUsedOrderItems(c)" style="width:100%;display:flex;flex-wrap:wrap;gap:4px;margin-top:2px;">
        <span v-for="(item, ii) in myStore.getCouponUsedOrderItems(c)" :key="ii"
            style="font-size:0.68rem;padding:1px 6px;border-radius:8px;background:var(--bg-card);color:var(--text-muted);border:1px solid var(--border);">
          {{ item.emoji }} {{ item.prodNm }}
        </span>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uBA54\uC778 \uC815\uBCF4 ================================================= -->
  <!-- ===== \u25A0.\u25A0. \uD560\uC778\uAE08\uC561 + \uC0C1\uD0DC ============================================= -->
  <div style="text-align:right;flex-shrink:0;">
    <div style="font-size:1.1rem;font-weight:800;color:var(--blue);">
      {{ myStore.discountLabel(c) }}
    </div>
    <div style="font-size:0.75rem;font-weight:600;margin-top:4px;"
        :style="c.used ? 'color:#9ca3af;' : 'color:#22c55e;'">
      {{ c.used ? '\uC0AC\uC6A9\uB428' : '\uC0AC\uC6A9 \uAC00\uB2A5' }}
    </div>
  </div>
</div>
<!-- ===== \u25A1.\u25A1. \uD560\uC778\uAE08\uC561 + \uC0C1\uD0DC ============================================= -->
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<Pagination :total="pager.pageTotalCount" :pager="pager" @set-page="onPageChange" />
</fo-my-layout>
</fo-page>
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
`,components:{FoMyLayout:window.foMyLayout,PagerHeader:window.PagerHeader,Pagination:window.Pagination}};
