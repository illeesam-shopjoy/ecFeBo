window.myDateFilterHelper=()=>{const{ref:o,computed:l,reactive:s}=Vue,c=new Date,d=t=>coUtil.cofToYmd(t),e=s({start:(t=>{const r=new Date(c);return r.setMonth(r.getMonth()-t),d(r)})(6),end:d(c)});return{dateRange:e,inRange:t=>{const r=coUtil.cofYmd(t).replace(/\./g,"-").replace(/ .*/g,"");return(!e.start||r>=e.start)&&(!e.end||r<=e.end)},onDateSearch:({startDate:t,endDate:r})=>{e.start=t,e.end=r}}},window.MyDateFilter={emits:["search","reset"],setup(o,{emit:l}){const{ref:s}=Vue,c=(i,g={})=>{if(i==="filter-search")return v();if(i==="filter-reset")return x();console.warn("[handleBtnAction] unknown cmd:",i)},d=(i,g={})=>{if(i==="filter-period-change")return b();console.warn("[handleSelectAction] unknown cmd:",i)},p=new Date,e=i=>coUtil.cofToYmd(i),n=i=>{const g=new Date(p);return g.setMonth(g.getMonth()-i),e(g)},a=foConsts.DATE_FILTER_PERIODS,t=s(6),r=s(n(6)),u=s(e(p)),b=()=>{r.value=n(t.value),u.value=e(p)},v=()=>l("search",{startDate:r.value,endDate:u.value}),x=()=>{t.value=6,r.value=n(6),u.value=e(p),l("search",{startDate:r.value,endDate:u.value}),l("reset")};return{period:t,startDate:r,endDate:u,PERIODS:a,handleBtnAction:c,handleSelectAction:d}},template:`
<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;margin-bottom:16px;">
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
    <span style="font-size:0.8rem;font-weight:600;color:var(--text-secondary);white-space:nowrap;">\uB4F1\uB85D\uAE30\uAC04</span>
    <input type="date" v-model="startDate"
      style="padding:5px 8px;border:1px solid var(--border);border-radius:6px;background:var(--bg-base);color:var(--text-primary);font-size:0.82rem;cursor:pointer;" />
    <span style="font-size:0.82rem;color:var(--text-muted);">~</span>
    <input type="date" v-model="endDate"
      style="padding:5px 8px;border:1px solid var(--border);border-radius:6px;background:var(--bg-base);color:var(--text-primary);font-size:0.82rem;cursor:pointer;" />
    <select v-model="period" @change="handleSelectAction('filter-period-change')"
      style="padding:5px 10px;border:1px solid var(--border);border-radius:6px;background:var(--bg-base);color:var(--text-primary);font-size:0.82rem;cursor:pointer;">
      <option v-for="p in PERIODS" :key="p.value" :value="p.value">{{ p.label }}</option>
    </select>
    <button @click="handleBtnAction('filter-search')"
      style="padding:6px 18px;border-radius:6px;border:none;background:var(--blue);color:#fff;font-size:0.82rem;font-weight:700;cursor:pointer;white-space:nowrap;">\uC870\uD68C</button>
    <button @click="handleBtnAction('filter-reset')"
      style="padding:6px 14px;border-radius:6px;border:1.5px solid var(--border);background:var(--bg-base);color:var(--text-secondary);font-size:0.82rem;font-weight:600;cursor:pointer;white-space:nowrap;">\uCD08\uAE30\uD654</button>
  </div>
</div>
  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->`},window.PagerHeader={props:["total","pager"],emits:["size-change"],setup(o,{emit:l}){return{onSizeChange:()=>{o.pager.pageNo=1,l("size-change")}}},template:`
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="font-size:0.85rem;color:var(--text-secondary);">\uCD1D <strong style="color:var(--text-primary);">{{ pager.pageTotalCount != null ? pager.pageTotalCount : total }}</strong>\uAC74</div>
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <select v-model="pager.pageSize" @change="onSizeChange"
    style="padding:5px 10px;border:1px solid var(--border);border-radius:6px;background:var(--bg-card);color:var(--text-primary);font-size:0.82rem;cursor:pointer;">
    <option v-for="s in (pager.pageSizes || [5,10,20,30,50,100])" :key="s" :value="s">{{ s }}\uAC1C\uC529</option>
  </select>
</div>
  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->`},window.Pagination={props:["total","pager"],emits:["set-page"],setup(o,{emit:l}){const s=Vue.computed(()=>{const e=Math.max(1,o.pager.pageTotalPage||1);return Array.from({length:e},(n,a)=>a+1)}),c=e=>{const n=s.value.length;e<1||e>n||e===o.pager.pageNo||(o.pager.pageNo=e,l("set-page",e))};return{pages:s,handleBtnAction:(e,n={})=>{if(e==="pager-prev")return c(o.pager.pageNo-1);if(e==="pager-next")return c(o.pager.pageNo+1);console.warn("[handleBtnAction] unknown cmd:",e)},handleSelectAction:(e,n={})=>{if(e==="pager-set-page")return c(n);console.warn("[handleSelectAction] unknown cmd:",e)}}},template:`
<div v-if="pages.length>1" style="display:flex;gap:6px;justify-content:center;margin-top:20px;flex-wrap:wrap;">
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <button @click="handleBtnAction('pager-prev')" :disabled="pager.pageNo===1"
    style="padding:6px 12px;border:1px solid var(--border);border-radius:6px;background:var(--bg-card);cursor:pointer;color:var(--text-secondary);font-size:0.82rem;"
    :style="pager.pageNo===1?'opacity:0.4;cursor:not-allowed;':''">\u2039</button>
  <button v-for="p in pages" :key="p" @click="handleSelectAction('pager-set-page', p)"
    style="padding:6px 12px;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:0.82rem;min-width:36px;"
    :style="pager.pageNo===p?'background:var(--blue);color:#fff;border-color:var(--blue);font-weight:700;':'background:var(--bg-card);color:var(--text-secondary);'">{{ p }}</button>
  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <button @click="handleBtnAction('pager-next')" :disabled="pager.pageNo===pages.length"
    style="padding:6px 12px;border:1px solid var(--border);border-radius:6px;background:var(--bg-card);cursor:pointer;color:var(--text-secondary);font-size:0.82rem;"
    :style="pager.pageNo===pages.length?'opacity:0.4;cursor:not-allowed;':''">\u203A</button>
</div>
  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->`},window.foMyLayout={name:"FoMyLayout",props:["navigate","cartCount","activePage"],setup(o){const{computed:l}=Vue,s=window.useFoMyStore(),c=(a,t={})=>{if(a==="nav-go-home")return o.navigate("home");console.warn("[handleBtnAction] unknown cmd:",a)},d=(a,t={})=>{if(a==="nav-go-tab")return n(t);console.warn("[handleSelectAction] unknown cmd:",a)},p=foConsts.MY_TABS,e=l(()=>s.getTabCounts(o.cartCount)),n=a=>{a==="myCart"?o.navigate("cart"):o.navigate(a)};return{MY_TABS:p,cfTabCounts:e,handleBtnAction:c,handleSelectAction:d}},template:`
<div class="mypage-wrap" style="padding:0 20px 24px;max-width:1100px;margin:0 auto;">

  <!-- ===== \u25A0. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 \uBC30\uB108 ============================================== -->
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- page-banner-full \uD074\uB798\uC2A4\uAC00 \uD480\uBE14\uB9AC\uB4DC \uACC4\uC0B0(desktop calc(-50vw+50%) / mobile \uACE0\uC815 px \uC774\uD0C8)\uC744
       \uC804\uB2F4(2026-09-06, .fo-page-banner \uBAA8\uBC14\uC77C \uC624\uBC84\uD50C\uB85C\uC6B0 \uBC84\uADF8\uC640 \uB3D9\uC77C \uC6D0\uC778 \uC218\uC815) \u2014 margin-top \uC740
       \uC774 \uD654\uBA74 \uC6D0\uB798 \uB3D9\uC791(\uD5E4\uB354 \uC704\uB85C \uC548 \uB2F9\uAE40)\uC744 \uC720\uC9C0\uD558\uB824\uACE0 0\uC73C\uB85C \uC0C1\uC1C4. -->
  <div class="page-banner-full" style="position:relative;overflow:hidden;height:220px;margin-top:0;margin-bottom:28px;display:flex;align-items:center;justify-content:center;">
    <img src="assets/cdn/prod/img/page-title/page-title-1.jpg" alt="\uB9C8\uC774\uD398\uC774\uC9C0"
      style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 40%;" />
    <div style="position:absolute;inset:0;background:linear-gradient(120deg,rgba(255,255,255,0.72) 0%,rgba(240,245,255,0.55) 45%,rgba(220,232,255,0.38) 100%);"></div>
    <div style="position:relative;z-index:1;text-align:center;">
      <div style="font-size:0.75rem;color:rgba(0,0,0,0.55);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">My Account</div>
      <h1 style="font-size:2.2rem;font-weight:700;color:#111;letter-spacing:-0.5px;margin-bottom:8px;">\uB9C8\uC774\uD398\uC774\uC9C0</h1>
      <div style="display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.8rem;color:rgba(0,0,0,0.55);">
        <span style="cursor:pointer;" @click="handleBtnAction('nav-go-home')">\uD648</span>
        <span>/</span>
        <span style="color:#333;">\uB9C8\uC774\uD398\uC774\uC9C0</span>
      </div>
    </div>
  </div>

  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uD0ED \uBC14 ===================================================== -->
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="display:flex;gap:0;margin-bottom:24px;overflow-x:auto;scrollbar-width:none;background:var(--bg-card);border:1px solid var(--border);border-radius:14px;padding:8px;box-shadow:0 2px 12px rgba(0,0,0,0.05);align-items:stretch;">
    <template v-for="(t, ti) in MY_TABS" :key="t.pageId">
      <button @click="handleSelectAction('nav-go-tab', t.pageId)"
        style="padding:11px 18px;border:none;cursor:pointer;font-size:0.92rem;white-space:nowrap;border-radius:10px;transition:all 0.18s;display:flex;align-items:center;gap:7px;flex:1;justify-content:center;min-width:fit-content;"
        :style="activePage===t.pageId
          ? 'background:linear-gradient(135deg,#1a1a1a,#404040);color:#fff;font-weight:800;box-shadow:0 4px 12px rgba(0,0,0,0.18);transform:translateY(-1px);'
          : 'background:transparent;color:var(--text-secondary);font-weight:600;'"
        @mouseenter="activePage===t.pageId || ($event.currentTarget.style.background='var(--bg-base)')"
        @mouseleave="activePage===t.pageId || ($event.currentTarget.style.background='transparent')">
        <span style="font-size:1.05rem;">{{ t.icon }}</span>
        <span>{{ t.label }}</span>
        <span v-if="cfTabCounts[t.pageId] > 0"
          style="display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;border-radius:10px;font-size:0.72rem;font-weight:800;"
          :style="activePage===t.pageId ? 'background:rgba(255,255,255,0.25);color:#fff;' : 'background:#fee2e2;color:#dc2626;'">
          {{ cfTabCounts[t.pageId] }}
        </span>
      </button>
      <div v-if="ti < MY_TABS.length-1"
        style="width:1px;background:var(--border);margin:8px 0;flex-shrink:0;"></div>
    </template>
  </div>

  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 (\uC2AC\uB86F) ============================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <slot />

</div>
  
  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->`};
