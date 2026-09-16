window.PlanPage={name:"PlanPage",props:{navigate:{type:Function,required:!0}},setup(p){const{ref:g,reactive:l,computed:f,watch:u,onMounted:b}=Vue,o=l({loading:!1,error:null,sortBy:"latest"}),s=g(""),n=l([]),t=l({pageNo:1,pageSize:20,pageTotalCount:0,pageTotalPage:1,pageType:"PAGE",pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),x=(e,a={})=>{if(e==="page-goHome")return p.navigate("home");if(e==="sort-change"){o.sortBy=a;return}else if(e==="search-submit"){t.pageNo=1,r();return}else if(e==="search-reset"){s.value="",t.pageNo=1,r();return}else console.warn("[handleBtnAction] unknown cmd:",e)},v=(e,a={},i={})=>{if(e==="plans-rowView")return i.ctrlKey||i.metaKey||i.button===1?window.foApp.openNewWindow("planView",a):p.navigate("planView",{planId:a});console.warn("[handleSelectAction] unknown cmd:",e)},m=e=>{const a=e.planTitle||e.planNm||"";return{id:e.planId,title:a,startDate:coUtil.cofYmd(e.startDate),endDate:coUtil.cofYmd(e.endDate),thumbnailUrl:e.thumbnailUrl||"",tag:e.planTypeCdNm||e.planTypeCd||"\uAE30\uD68D\uC804"}},h=async()=>{var c;const e=s.value.trim(),a={pageNo:t.pageNo,pageSize:t.pageSize,...o.sortBy==="deadline"?{sort:"endDate asc"}:{},...e?{searchValue:e,searchType:"planId,planTitle"}:{}},d=((c=(await foApiSvc.pmPlan.getPage(a,"\uAE30\uD68D\uC804","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:c.data)||{};return{list:d.pageList||[],total:d.pageTotalCount||0,totalPage:d.pageTotalPage||1}},r=async()=>{try{const e=await h();t.pageTotalCount=e.total,t.pageTotalPage=e.totalPage,n.splice(0,n.length,...e.list.map(m)),coUtil.cofBuildPagerNums(t)}catch(e){console.error("[handleSearchList]",e),n.splice(0,n.length),t.pageTotalCount=0,t.pageTotalPage=1}};return u(()=>o.sortBy,()=>{t.pageNo=1,r()}),b(async()=>{r()}),{uiState:o,searchValue:s,handleBtnAction:x,handleSelectAction:v,plans:n}},template:`
<fo-page title="\uAE30\uD68D\uC804" eyebrow="Promotion"
  banner-img="assets/cdn/prod/img/page-title/page-title-1.jpg"
  banner-align="center 40%"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'\uAE30\uD68D\uC804' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \uAC80\uC0C9\uCC3D ======================================================= -->
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
    <div style="position:relative;flex:1;max-width:400px;">
      <input
        v-model="searchValue"
        type="text"
        placeholder="ID \uB610\uB294 \uAE30\uD68D\uC804\uBA85 \uAC80\uC0C9"
        @keyup.enter="handleBtnAction('search-submit')"
        style="width:100%;padding:9px 40px 9px 14px;border:1px solid var(--border);border-radius:6px;font-size:0.88rem;background:var(--bg-card);color:var(--text-primary);box-sizing:border-box;outline:none;" />
      <button v-if="searchValue"
        @click="handleBtnAction('search-reset')"
        style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1rem;line-height:1;padding:2px 4px;">\u2715</button>
    </div>
    <button @click="handleBtnAction('search-submit')"
      style="padding:9px 20px;background:var(--text-primary);color:#fff;border:none;border-radius:6px;font-size:0.88rem;font-weight:600;cursor:pointer;white-space:nowrap;">
      \uAC80\uC0C9
    </button>
  </div>
  <!-- ===== \u25A1. \uAC80\uC0C9\uCC3D ======================================================= -->
  <!-- ===== \u25A0. \uC815\uB82C ========================================================= -->
  <div style="display:flex;justify-content:flex-end;border-bottom:1px solid var(--border);margin-bottom:28px;padding-bottom:10px;">
    <button @click="handleBtnAction('sort-change', 'latest')"
      :style="{ padding:'6px 14px', background:'none', border:'none', cursor:'pointer', fontSize:'0.8rem',
      color: uiState.sortBy==='latest' ? 'var(--text-primary)' : 'var(--text-muted)',
      fontWeight: uiState.sortBy==='latest' ? '700' : '400', borderRight:'1px solid var(--border)' }">
      \uCD5C\uADFC\uB4F1\uB85D\uC21C
    </button>
    <button @click="handleBtnAction('sort-change', 'deadline')"
      :style="{ padding:'6px 14px', background:'none', border:'none', cursor:'pointer', fontSize:'0.8rem',
      color: uiState.sortBy==='deadline' ? 'var(--text-primary)' : 'var(--text-muted)',
      fontWeight: uiState.sortBy==='deadline' ? '700' : '400' }">
      \uB9C8\uAC10\uC784\uBC15\uC21C
    </button>
  </div>
  <!-- ===== \u25A1. \uC815\uB82C ========================================================= -->
  <!-- ===== \u25A0. \uAE30\uD68D\uC804 \uADF8\uB9AC\uB4DC ================================================= -->
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;">
    <div v-for="pl in plans" :key="pl.id"
      style="background:var(--bg-card);border:1px solid var(--border);border-radius:4px;overflow:hidden;cursor:pointer;transition:transform .2s,box-shadow .2s;"
      title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D" @click="handleSelectAction('plans-rowView', pl.id, $event)"
      @auxclick="$event.button===1 ? handleSelectAction('plans-rowView', pl.id, $event) : null"
      @mouseenter="$event.currentTarget.style.transform='translateY(-3px)';$event.currentTarget.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)'"
      @mouseleave="$event.currentTarget.style.transform='';$event.currentTarget.style.boxShadow=''">
      <div :style="{ height:'170px', background: pl.thumbnailUrl ? ('url(' + pl.thumbnailUrl + ') center/cover') : 'linear-gradient(135deg,#5b6cff 0%,#8a4fff 100%)' }">
      </div>
      <div style="padding:14px 14px 16px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px;">
          <span style="padding:2px 7px;border-radius:2px;font-size:0.68rem;font-weight:700;color:#fff;background:#5b6cff;">
            {{ pl.tag }}
          </span>
        </div>
        <div style="font-size:0.87rem;font-weight:600;color:var(--text-primary);line-height:1.45;margin-bottom:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
          {{ pl.title }}
        </div>
        <div style="font-size:0.75rem;color:var(--text-muted);">
          {{ pl.startDate }} ~ {{ pl.endDate }}
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uAE30\uD68D\uC804 \uADF8\uB9AC\uB4DC ================================================= -->
  <!-- ===== \u25A0. \uBE48 \uC0C1\uD0DC ==================================================== -->
  <div v-if="plans.length === 0" style="text-align:center;padding:clamp(32px,6vw,60px) 0;color:var(--text-muted);">
    <div style="font-size:2rem;margin-bottom:12px;">
      \u{1F4ED}
    </div>
    <div style="font-size:0.95rem;">
      {{ searchValue ? '\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' : '\uC9C4\uD589 \uC911\uC778 \uAE30\uD68D\uC804\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.' }}
    </div>
  </div>
  <!-- ===== \u25A1. \uBE48 \uC0C1\uD0DC ==================================================== -->
</fo-page>
`};
