window.Prod03List={name:"Prod03List",props:{navigate:{type:Function,required:!0}},setup(N){const{reactive:u,computed:b,watch:P,onMounted:I,onBeforeUnmount:E}=Vue,m=e=>window.foApp.selectProd(e),j=e=>window.foApp.toggleLike(e),O=e=>{var t,i,a;return(a=(i=(t=window.foApp).isLiked)==null?void 0:i.call(t,e))!=null?a:!1},B=window.foApp.addToCart,V=window.foApp.compareList,q=e=>{var t,i,a;return(a=(i=(t=window.foApp).isCompared)==null?void 0:i.call(t,e))!=null?a:!1},w=e=>{var t,i;return(i=(t=window.foApp).toggleCompare)==null?void 0:i.call(t,e)},F=()=>{var e,t;return(t=(e=window.foApp).clearCompare)==null?void 0:t.call(e)},$=e=>w({prodId:e}),k=coUtil.cofShakeCtl(),S=coUtil.cofShakeCtl(),r=u({pageType:"INFINITE_SCROLL",pageNo:1,pageSize:12,pageTotalCount:0,pageTotalPage:1,pageSizes:[12,24,48],pageNums:[],pageList:[],pageCond:{}}),o=u({loading:!1,error:null,searchText:"",priceMin:"",priceMax:"",isMobile:window.innerWidth<768,filterOpen:!1,quickViewProduct:null,cartModalMode:!1,compareModalOpen:!1}),c=u([]),l=u(new Set),p=u(new Set),s=u(new Set),U=b(()=>({searchValue:o.searchText||"",priceMin:o.priceMin||"",priceMax:o.priceMax||"",categoryIds:s.size?[...s].join(","):"",colors:l.size?[...l].join(","):"",sizes:p.size?[...p].join(","):""})),_=(e,t={})=>{if(e==="page-goHome")return N.navigate("home");if(e==="search-do")return T();if(e==="filter-toggle"){o.filterOpen=!o.filterOpen;return}else{if(e==="filter-clear")return Z();if(e==="filter-priceRange"){o.priceMin=t.min||"",o.priceMax=t.max||"";return}else if(e==="categories-clear"){s.clear();return}else if(e==="pager-prev"){if(r.pageNo<=1)return;r.pageNo=r.pageNo-1,g();return}else if(e==="pager-next"){if(r.pageNo>=r.pageTotalPage)return;r.pageNo=r.pageNo+1,g();return}else if(e==="quickViewModal-openCart"){o.quickViewProduct=t,o.cartModalMode=!0;return}else if(e==="quickViewModal-openView"){o.quickViewProduct=t,o.cartModalMode=!1;return}else if(e==="quickViewModal-close"){o.quickViewProduct=null,o.cartModalMode=!1;return}else if(e==="compareModal-open"){o.compareModalOpen=!0;return}else if(e==="compareModal-close"){o.compareModalOpen=!1;return}else console.warn("[handleBtnAction] unknown cmd:",e)}},H=(e,t={},i={})=>{if(e==="categories-rowToggle")return D(t);if(e==="filter-colorToggle")return Q(t);if(e==="filter-sizeToggle")return Y(t);if(e==="prods-rowSelect")return i.ctrlKey||i.metaKey||i.button===1?window.foApp.openNewWindow("prodView",t.prodId):m(t);if(e==="prods-rowLike")return k.fire(t),j(t);if(e==="prods-rowCompare")return S.fire(t.prodId),w(t);if(e==="pager-rowGo"){if(t===r.pageNo)return;r.pageNo=t,g();return}else console.warn("[handleSelectAction] unknown cmd:",e)},R=e=>coUtil.cofAssignProdImage(e),z=()=>{const e=Math.max(1,r.pageTotalPage||1),t=r.pageNo;if(e<=7){r.pageNums=Array.from({length:e},(n,f)=>f+1);return}const a=[...new Set([1,e,t-2,t-1,t,t+1,t+2].filter(n=>n>=1&&n<=e))].sort((n,f)=>n-f),d=[];for(let n=0;n<a.length;n++)n>0&&a[n]-a[n-1]>1&&d.push("\u2026"),d.push(a[n]);r.pageNums=d},g=async()=>{var e,t,i,a,d,n;o.loading=!0;try{const f={pageNo:r.pageNo,pageSize:r.pageSize,...coUtil.cofOmitEmpty({searchValue:o.searchText,priceMin:o.priceMin||"",priceMax:o.priceMax||"",categoryIds:s.size?[...s].join(","):"",colors:l.size?[...l].join(","):"",sizes:p.size?[...p].join(","):""})},h=await foApiSvc.pdProd.getPage(f,"\uC0C1\uD488\uBAA9\uB85D","\uBAA9\uB85D\uC870\uD68C");r.pageTotalCount=((t=(e=h.data)==null?void 0:e.data)==null?void 0:t.pageTotalCount)||0,r.pageTotalPage=((a=(i=h.data)==null?void 0:i.data)==null?void 0:a.pageTotalPage)||1;const y=(((n=(d=h.data)==null?void 0:d.data)==null?void 0:n.pageList)||[]).map(v=>R({...v,priceNum:v.price,price:coUtil.cofWon(v.price)}));c.splice(0,c.length,...y),o.isMobile&&r.pageNo>1?r.pageList.push(...y):r.pageList=y;try{window.SITE_CONFIG&&Array.isArray(window.SITE_CONFIG.prods)&&window.SITE_CONFIG.prods.splice(0,window.SITE_CONFIG.prods.length,...r.pageList)}catch{}z()}catch(f){console.error("[handleSearchList]",f),c.splice(0,c.length)}finally{o.loading=!1}},G=b(()=>{const e=new Map;return c.forEach(t=>(t.opt1s||[]).forEach(i=>{e.has(i.name)||e.set(i.name,i)})),[...e.values()]}),M=["FREE","XS","S","M","L","XL","XXL","XXXL"],X=b(()=>{const e=new Set;return c.forEach(t=>(t.opt2s||[]).forEach(i=>e.add(i))),[...e].sort((t,i)=>{const a=M.indexOf(t),d=M.indexOf(i);return a<0&&d<0?t.localeCompare(i):a<0?1:a-d})}),W=b(()=>window.SITE_CONFIG&&window.SITE_CONFIG.categorys||[]),K=e=>coUtil.cofCategoryLabel(e),Q=e=>coUtil.cofToggleSet(l,e),Y=e=>coUtil.cofToggleSet(p,e),D=e=>coUtil.cofToggleSet(s,e),J=b(()=>o.searchText||o.priceMin||o.priceMax||l.size>0||p.size>0||s.size>0),Z=()=>{o.searchText="",o.priceMin="",o.priceMax="",l.clear(),p.clear(),s.clear()},C=()=>{o.isMobile=window.innerWidth<768,z()};window.addEventListener("resize",C),P([()=>o.searchText,()=>o.priceMin,()=>o.priceMax,l,p,s],()=>{r.pageNo=1,g()});let x=null;const A=()=>{x&&x.disconnect();const e=document.getElementById("sj-sentinel");!e||!("IntersectionObserver"in window)||(x=new IntersectionObserver(t=>{t[0].isIntersecting&&o.isMobile&&!o.loading&&r.pageNo<r.pageTotalPage&&(r.pageNo++,g())},{rootMargin:"300px"}),x.observe(e))},T=async()=>{r.pageNo=1,await g(),A()},ee=async(e="DEFAULT")=>{await g(),A()};E(()=>{x&&x.disconnect(),window.removeEventListener("resize",C)}),I(async()=>{const e=new URLSearchParams(window.location.search);e.has("searchValue")&&(o.searchText=e.get("searchValue")),e.has("priceMin")&&(o.priceMin=e.get("priceMin")),e.has("priceMax")&&(o.priceMax=e.get("priceMax")),e.has("categoryIds")&&e.get("categoryIds").split(",").filter(Boolean).forEach(t=>s.add(t)),e.has("colors")&&e.get("colors").split(",").filter(Boolean).forEach(t=>l.add(t)),e.has("sizes")&&e.get("sizes").split(",").filter(Boolean).forEach(t=>p.add(t)),ee()});const L={};return L.baseSearch=[{key:"searchText",type:"text",label:"\uC0C1\uD488\uBA85",placeholder:"\uC0C1\uD488\uBA85, \uD0DC\uADF8 \uAC80\uC0C9..."}],{columns:L,pager:r,uiState:o,allProds:c,selColors:l,selSizes:p,selCats:s,handleBtnAction:_,handleSelectAction:H,cfAllColors:G,cfAllSizes:X,cfAllCats:W,cfHasFilter:J,cfShareQuery:U,fnCategoryLabel:K,isLiked:O,onSearch:T,selectProd:m,addToCart:B,compareList:V,isCompared:q,clearCompare:F,removeCompare:$,likeShake:k,compareShake:S}},template:`
<fo-page title="\uC0C1\uD488 \uBAA9\uB85D" eyebrow="Shopping"
  banner-img="assets/cdn/prod/img/page-title/page-title-2.jpg"
  banner-align="center 40%"
  :share-query="cfShareQuery"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'\uC0C1\uD488\uBAA9\uB85D' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \uBC30\uB108 \uC2AC\uB86F (Site 03 Edition Ribbon + \uD480\uBE14\uB9AC\uB4DC \uBC30\uB108 \uC720\uC9C0) ============ -->
  <template #banner>
    <!-- ===== \u25A0. Site 03 Edition Ribbon ================================== -->
    <div style="background:linear-gradient(135deg,#4a148c 0%,#7b1fa2 50%,#9c27b0 100%);color:#fff;padding:10px 24px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;font-size:12px;box-shadow:0 2px 8px rgba(80,30,130,0.15);">
      <span style="letter-spacing:2.5px;padding:2px 8px;border:1px solid rgba(255,255,255,0.5);">
        \u{1F451} LUXE
      </span>
      <span>
        \u2728 \uD504\uB9AC\uBBF8\uC5C4 \uD050\uB808\uC774\uC158 \u2014 \uC7A5\uC778\uC758 \uC190\uAE38
      </span>
      <span style="margin-left:auto;opacity:0.9;">
        SITE 03
      </span>
    </div>
    <!-- ===== \u25A1. Site 03 Edition Ribbon ================================== -->
    <!-- ===== \u25A0. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 \uBC30\uB108 ============================================== -->
    <div class="page-banner-full" style="position:relative;overflow:hidden;height:220px;margin-bottom:36px;display:flex;align-items:center;justify-content:center;">
      <img src="assets/cdn/prod/img/page-title/page-title-2.jpg" alt="\uC0C1\uD488\uBAA9\uB85D"
        style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 40%;" />
      <div style="position:absolute;inset:0;background:linear-gradient(120deg,rgba(255,255,255,0.72) 0%,rgba(240,245,255,0.55) 45%,rgba(220,232,255,0.38) 100%);">
      </div>
      <div style="position:relative;z-index:1;text-align:center;">
        <div style="font-size:0.75rem;color:rgba(0,0,0,0.55);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">
          Shopping
        </div>
        <h1 style="font-size:2.2rem;font-weight:700;color:#111;letter-spacing:-0.5px;margin-bottom:8px;">
          \uC0C1\uD488 \uBAA9\uB85D
        </h1>
        <div style="display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.8rem;color:rgba(0,0,0,0.55);">
          <span style="cursor:pointer;" @click="handleBtnAction('page-goHome')">
            \uD648
          </span>
          <span>
            /
          </span>
          <span style="color:#333;">
            \uC0C1\uD488\uBAA9\uB85D
          </span>
        </div>
      </div>
    </div>
    <!-- ===== \u25A1. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 \uBC30\uB108 ============================================== -->
  </template>
  <!-- ===== \u25A0. \uCE74\uD14C\uACE0\uB9AC \uD0ED (\uCD5C\uC0C1\uC704 \uB3C5\uB9BD \uBC30\uCE58) ====================================== -->
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">
    <button
      @click="handleBtnAction('categories-clear')"
      style="padding:7px 18px;border-radius:24px;cursor:pointer;font-size:0.85rem;font-weight:700;transition:all 0.18s;"
      :style="selCats.size===0
      ? 'background:var(--blue);color:#fff;border:2px solid var(--blue);'
      : 'background:var(--bg-card);color:var(--text-secondary);border:2px solid var(--border);'">
      \uC804\uCCB4
    </button>
    <button v-for="cat in cfAllCats" :key="cat.categoryId"
      @click="handleSelectAction('categories-rowToggle', cat.categoryId)"
      style="padding:7px 18px;border-radius:24px;cursor:pointer;font-size:0.85rem;font-weight:700;transition:all 0.18s;"
      :style="selCats.has(cat.categoryId)
      ? 'background:var(--blue);color:#fff;border:2px solid var(--blue);'
      : 'background:var(--bg-card);color:var(--text-secondary);border:2px solid var(--border);'">
      {{ cat.categoryNm }}
      <span v-if="selCats.has(cat.categoryId)"
        style="margin-left:4px;font-size:0.75rem;opacity:0.8;">
        \u2713
      </span>
    </button>
  </div>
  <!-- ===== \u25A1. \uCE74\uD14C\uACE0\uB9AC \uD0ED (\uCD5C\uC0C1\uC704 \uB3C5\uB9BD \uBC30\uCE58) ====================================== -->
  <!-- ===== \u25A0. \uAC80\uC0C9 \uBC14 ==================================================== -->
  <fo-search-area :show-actions="false" bar-style="margin-bottom:12px;"
    :columns="columns.baseSearch" :param="uiState"
    @search="onSearch">
    <button @click="handleBtnAction('filter-toggle')"
      style="display:flex;align-items:center;gap:6px;padding:10px 16px;border:1.5px solid var(--border);border-radius:10px;background:var(--bg-card);cursor:pointer;font-size:0.85rem;font-weight:600;white-space:nowrap;transition:all 0.2s;"
      :style="uiState.filterOpen?'border-color:var(--blue);color:var(--blue);':cfHasFilter?'border-color:#f97316;color:#f97316;':'color:var(--text-muted);'">
      <span>
        \u2699\uFE0F
      </span>
      <span>
        {{ uiState.filterOpen ? '\uD544\uD130 \uB2EB\uAE30' : '\uD544\uD130' }}
      </span>
      <span v-if="cfHasFilter ? !uiState.filterOpen : false" style="display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;background:#f97316;color:#fff;border-radius:9px;font-size:0.7rem;font-weight:700;">
      {{ (selColors.size+selSizes.size+selCats.size+(uiState.priceMin?1:0)+(uiState.priceMax?1:0)) }}
    </span>
  </button>
  <button class="btn_search" @click="handleBtnAction('search-do')"
      style="white-space:nowrap;">
    \uC870\uD68C
  </button>
</fo-search-area>
<!-- ===== \u25A1. \uAC80\uC0C9 \uBC14 ==================================================== -->
<!-- ===== \u25A0. \uC0C1\uC138 \uD544\uD130 \uD328\uB110 ================================================ -->
<div v-show="uiState.filterOpen"
    style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:clamp(12px,2vw,18px);margin-bottom:20px;">
  <!-- ===== \u25A0.\u25A0. \uAC00\uACA9 \uAD6C\uAC04 ================================================= -->
  <div style="margin-bottom:16px;">
    <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:8px;letter-spacing:0.05em;">
      \u{1F4B0} \uD310\uB9E4\uAC00 \uAD6C\uAC04
    </div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
      <div style="position:relative;">
        <input v-model="uiState.priceMin" type="number" placeholder="\uCD5C\uC18C"
            style="width:110px;padding:7px 28px 7px 10px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.85rem;outline:none;"
            @focus="$event.target.style.borderColor='var(--blue)'"
            @blur="$event.target.style.borderColor='var(--border)'" />
        <span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:0.75rem;color:var(--text-muted);">
          \uC6D0
        </span>
      </div>
      <span style="color:var(--text-muted);font-size:0.9rem;">
        ~
      </span>
      <div style="position:relative;">
        <input v-model="uiState.priceMax" type="number" placeholder="\uCD5C\uB300"
            style="width:110px;padding:7px 28px 7px 10px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.85rem;outline:none;"
            @focus="$event.target.style.borderColor='var(--blue)'"
            @blur="$event.target.style.borderColor='var(--border)'" />
        <span style="position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:0.75rem;color:var(--text-muted);">
          \uC6D0
        </span>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <button v-for="r in [{label:'~3\uB9CC',max:30000},{label:'3~5\uB9CC',min:30000,max:50000},{label:'5~10\uB9CC',min:50000,max:100000},{label:'10\uB9CC~',min:100000}]" :key="r.label" @click="handleBtnAction('filter-priceRange', r)" style="padding:5px 10px;border:1px solid var(--border);border-radius:20px;background:var(--bg-base);cursor:pointer;font-size:0.75rem;font-weight:600;color:var(--text-secondary);transition:all 0.15s;" :style="(uiState.priceMin==(r.min||'') ? uiState.priceMax==(r.max||'') : false)?'background:var(--blue);color:#fff;border-color:var(--blue);':''">
        {{ r.label }}
      </button>
    </div>
  </div>
</div>
<!-- ===== \u25A1.\u25A1. \uAC00\uACA9 \uAD6C\uAC04 ================================================= -->
<!-- ===== \u25A0.\u25A0. \uC0C9\uC0C1 ==================================================== -->
<div style="margin-bottom:16px;">
  <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:8px;letter-spacing:0.05em;">
    \u{1F3A8} \uC0C9\uC0C1
    <span style="font-weight:400;font-size:0.72rem;">
      (\uBCF5\uC218\uC120\uD0DD)
    </span>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:8px;">
    <button v-for="c in cfAllColors" :key="c.name"
          @click="handleSelectAction('filter-colorToggle', c.name)"
          :title="c.name"
          style="display:flex;align-items:center;gap:5px;padding:4px 10px 4px 6px;border-radius:20px;cursor:pointer;font-size:0.75rem;font-weight:600;transition:all 0.15s;"
          :style="selColors.has(c.name)
          ? 'border:2px solid var(--blue);background:var(--blue-dim);color:var(--blue);'
          : 'border:1.5px solid var(--border);background:var(--bg-base);color:var(--text-secondary);'">
      <span :style="'width:14px;height:14px;border-radius:50%;background:'+c.hex+';border:1px solid rgba(0,0,0,0.15);flex-shrink:0;'">
      </span>
      <span>
        {{ c.name }}
      </span>
    </button>
  </div>
</div>
<!-- ===== \u25A1.\u25A1. \uC0C9\uC0C1 ==================================================== -->
<!-- ===== \u25A0.\u25A0. \uC0AC\uC774\uC988 =================================================== -->
<div style="margin-bottom:12px;">
  <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:8px;letter-spacing:0.05em;">
    \u{1F4CF} \uC0AC\uC774\uC988
    <span style="font-weight:400;font-size:0.72rem;">
      (\uBCF5\uC218\uC120\uD0DD)
    </span>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:6px;">
    <button v-for="sz in cfAllSizes" :key="sz"
          @click="handleSelectAction('filter-sizeToggle', sz)"
          style="padding:5px 12px;border-radius:6px;cursor:pointer;font-size:0.82rem;font-weight:700;transition:all 0.15s;"
          :style="selSizes.has(sz)
          ? 'background:var(--blue);color:#fff;border:1.5px solid var(--blue);'
          : 'background:var(--bg-base);color:var(--text-secondary);border:1.5px solid var(--border);'">
      {{ sz }}
    </button>
  </div>
</div>
<!-- ===== \u25A1.\u25A1. \uC0AC\uC774\uC988 =================================================== -->
<!-- ===== \u25A0.\u25A0. \uD544\uD130 \uCD08\uAE30\uD654 ================================================ -->
<div style="display:flex;justify-content:flex-end;">
  <button v-if="cfHasFilter" @click="handleBtnAction('filter-clear')"
        style="padding:6px 16px;border:1.5px solid #ef4444;border-radius:8px;background:transparent;color:#ef4444;cursor:pointer;font-size:0.8rem;font-weight:600;transition:all 0.15s;">
    \u2715 \uD544\uD130 \uCD08\uAE30\uD654
  </button>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \uD544\uD130 \uCD08\uAE30\uD654 ================================================ -->
<!-- ===== \u25A1. \uC0C1\uC138 \uD544\uD130 \uD328\uB110 ================================================ -->
<!-- ===== \u25A0. \uACB0\uACFC \uC694\uC57D =================================================== -->
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
  <div style="font-size:0.85rem;color:var(--text-secondary);">
    \uCD1D
    <strong style="color:var(--text-primary);">
      {{ allProds.length }}
    </strong>
    \uAC1C \uC0C1\uD488
    <span v-if="cfHasFilter" style="color:#f97316;font-size:0.78rem;margin-left:6px;">
      (\uD544\uD130 \uC801\uC6A9\uC911)
    </span>
  </div>
</div>
<!-- ===== \u25A1. \uACB0\uACFC \uC694\uC57D =================================================== -->
<!-- ===== \u25A0. \uC2A4\uCF08\uB808\uD1A4 ==================================================== -->
<div v-if="uiState.loading" class="grid-3">
  <div v-for="i in 6" :key="'sk'+i" class="prod-card" style="overflow:hidden;">
    <div style="height:160px;" class="skeleton-line">
    </div>
    <div style="padding:16px;display:flex;flex-direction:column;gap:10px;">
      <div class="skeleton-line" style="height:14px;width:70%;">
      </div>
      <div class="skeleton-line" style="height:11px;width:55%;">
      </div>
      <div style="display:flex;gap:6px;">
        <div v-for="j in 4" :key="j" class="skeleton-line" style="width:16px;height:16px;border-radius:50%;">
        </div>
      </div>
      <div class="skeleton-line" style="height:18px;width:35%;">
      </div>
      <div class="skeleton-line" style="height:36px;border-radius:8px;">
      </div>
    </div>
  </div>
</div>
<!-- ===== \u25A1. \uC2A4\uCF08\uB808\uD1A4 ==================================================== -->
<!-- ===== \u25A0. \uC0C1\uD488 \uADF8\uB9AC\uB4DC ================================================== -->
<div v-else class="grid-3">
  <div v-for="p in pager.pageList" :key="p.prodId"
      class="prod-card" style="cursor:pointer;" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
      @click="handleSelectAction('prods-rowSelect', p, $event)"
      @auxclick="$event.button===1 ? handleSelectAction('prods-rowSelect', p, $event) : null">
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC378\uB124\uC77C ================================================= -->
    <div style="height:220px;overflow:hidden;background:#f5f0eb;position:relative;display:flex;align-items:center;justify-content:center;"
        @mouseenter="$event.currentTarget.querySelector('.prod-hover').style.opacity='1'"
        @mouseleave="$event.currentTarget.querySelector('.prod-hover').style.opacity='0'">
      <img :src="p.image || window.NO_IMAGE" :alt="p.prodNm" style="width:100%;height:100%;object-fit:cover;transition:transform .3s;"
          @mouseenter="$event.target.style.transform='scale(1.05)'"
          @mouseleave="$event.target.style.transform=''"
          @error="$event.target.style.display='none'" />
      <span v-if="!p.image" style="font-size:3rem;opacity:0.3;">
        \u{1F4F7}
      </span>
      <span v-if="p.badge==='NEW'" class="badge badge-new" style="position:absolute;top:12px;left:12px;">
        NEW
      </span>
      <span v-else-if="p.badge==='\uC778\uAE30'" class="badge badge-hot" style="position:absolute;top:12px;left:12px;">
        \uC778\uAE30
      </span>
      <span v-if="p.originalPrice"
          style="position:absolute;top:12px;right:12px;background:#ef4444;color:#fff;font-size:0.7rem;font-weight:800;padding:3px 7px;border-radius:10px;">
        {{ Math.round((1-p.priceNum/p.originalPrice)*100) }}%
      </span>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC88B\uC544\uC694 (\uC88B\uC544\uC694 \uC0C1\uD0DC\uBA74 \uD56D\uC0C1 \uD45C\uC2DC) ============================= -->
      <button @click.stop="handleSelectAction('prods-rowLike', p.prodId)"
          :class="{ 'fo-shake': likeShake.isActive(p.prodId) }"
          style="position:absolute;right:12px;top:12px;width:32px;height:32px;border-radius:50%;border:none;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2;"
          class="prod-like" title="\uC704\uC2DC\uB9AC\uC2A4\uD2B8">
        <svg width="16" height="16" viewBox="0 0 24 24"
            :fill="isLiked(p.prodId)?'#ef4444':'none'"
            :stroke="isLiked(p.prodId)?'#ef4444':'#555'"
            stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
          </path>
        </svg>
      </button>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC7A5\uBC14\uAD6C\uB2C8 + \uBE44\uAD50 (hover \uC2DC\uC5D0\uB9CC) ========================= -->
      <div class="prod-hover" style="opacity:0;transition:opacity .25s;position:absolute;right:12px;top:48px;display:flex;flex-direction:column;gap:6px;">
        <button @click.stop="handleBtnAction('quickViewModal-openCart', p)" style="width:32px;height:32px;border-radius:50%;border:none;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;" title="\uC7A5\uBC14\uAD6C\uB2C8">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2">
            <circle cx="9" cy="21" r="1">
            </circle>
            <circle cx="20" cy="21" r="1">
            </circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
            </path>
          </svg>
        </button>
        <button @click.stop="handleSelectAction('prods-rowCompare', p)"
            :class="{ 'fo-shake': compareShake.isActive(p.prodId) }"
            :style="isCompared(p.prodId) ? 'background:rgba(26,26,26,0.1);' : 'background:transparent;'"
            style="width:32px;height:32px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;"
            title="\uC0C1\uD488 \uBE44\uAD50\uD568">
          <span>
            \u2696\uFE0F
          </span>
        </button>
      </div>
    </div>
    <div style="padding:16px;">
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD488\uBA85 + \uCE74\uD14C\uACE0\uB9AC ======================================== -->
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:6px;margin-bottom:6px;">
        <span style="font-weight:700;color:var(--text-primary);font-size:0.92rem;flex:1;line-height:1.4;">
          {{ p.prodNm }}
        </span>
        <span class="badge badge-cat" style="flex-shrink:0;margin-top:2px;">
          {{ fnCategoryLabel(p) }}
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC124\uBA85 ================================================ -->
      <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.5;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
        {{ p.desc }}
      </p>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0C9\uC0C1 \uC2A4\uC640\uCE58 ============================================ -->
      <div style="display:flex;align-items:center;gap:5px;margin-bottom:8px;flex-wrap:wrap;">
        <div v-for="c in (p.opt1s||[]).slice(0,6)" :key="c.name"
            :style="{ width:'16px', height:'16px', borderRadius:'50%', background:c.hex, border:'1.5px solid rgba(0,0,0,0.12)', flexShrink:0 }"
            :title="c.name">
        </div>
        <span v-if="(p.opt1s||[]).length>6" style="font-size:0.68rem;color:var(--text-muted);">
          +{{ (p.opt1s||[]).length-6 }}
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0AC\uC774\uC988 =============================================== -->
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:10px;">
        <span v-for="s in (p.opt2s||[]).slice(0,5)" :key="s"
            style="font-size:0.68rem;padding:2px 5px;border-radius:4px;border:1px solid var(--border);color:var(--text-muted);">
          {{ s }}
        </span>
        <span v-if="(p.opt2s||[]).length>5" style="font-size:0.68rem;color:var(--text-muted);">
          +{{ (p.opt2s||[]).length-5 }}
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uAC00\uACA9 \uC601\uC5ED ============================================= -->
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
        <span style="font-size:0.95rem;font-weight:800;color:var(--blue);">
          {{ p.price }}
        </span>
        <template v-if="p.originalPrice">
          <span style="font-size:0.78rem;color:var(--text-muted);text-decoration:line-through;">
            {{ p.originalPrice.toLocaleString() }}\uC6D0
          </span>
        </template>
      </div>
      <button class="btn-outline" style="width:100%;padding:9px;" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D" @click.stop="handleSelectAction('prods-rowSelect', p, $event)"
        @auxclick.stop="$event.button===1 ? handleSelectAction('prods-rowSelect', p, $event) : null">
        \uC0C1\uC138\uBCF4\uAE30
      </button>
    </div>
  </div>
</div>
<!-- ===== \u25A1. \uC0C1\uD488 \uADF8\uB9AC\uB4DC ================================================== -->
<!-- ===== \u25A0. \uACB0\uACFC \uC5C6\uC74C =================================================== -->
<div v-if="!uiState.loading ? allProds.length===0 : false" style="text-align:center;padding:60px 0;color:var(--text-muted);">
<div style="font-size:3rem;margin-bottom:12px;">
  \u{1F50D}
</div>
<div style="font-size:1rem;font-weight:600;">
  \uD574\uB2F9 \uC870\uAC74\uC758 \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
</div>
<button v-if="cfHasFilter" @click="handleBtnAction('filter-clear')"
      style="margin-top:16px;padding:8px 20px;border:1.5px solid var(--blue);border-radius:8px;background:transparent;color:var(--blue);cursor:pointer;font-size:0.85rem;font-weight:600;">
  \uD544\uD130 \uCD08\uAE30\uD654
</button>
</div>
<!-- ===== \u25A1. \uACB0\uACFC \uC5C6\uC74C =================================================== -->
<!-- ===== \u25A0. PC \uD398\uC774\uC9C0\uB124\uC774\uC158 =============================================== -->
<div v-if="!uiState.loading ? (!uiState.isMobile ? pager.pageTotalPage > 1 : false) : false" style="display:flex;align-items:center;justify-content:center;gap:4px;margin-top:32px;flex-wrap:wrap;">
<button @click="handleBtnAction('pager-prev')" :disabled="pager.pageNo===1"
      style="padding:8px 14px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);cursor:pointer;color:var(--text-secondary);font-size:0.85rem;"
      :style="pager.pageNo===1?'opacity:0.4;cursor:not-allowed;':''">
  \u2039
</button>
<template v-for="n in pager.pageNums" :key="n">
  <span v-if="n==='\u2026'" style="padding:8px 4px;color:var(--text-muted);font-size:0.85rem;">
    \u2026
  </span>
  <button v-else @click="handleSelectAction('pager-rowGo', n)"
        style="min-width:38px;padding:8px 12px;border-radius:8px;cursor:pointer;font-size:0.85rem;font-weight:600;transition:all 0.15s;"
        :style="pager.pageNo===n
        ? 'background:var(--blue);color:#fff;border:1px solid var(--blue);'
        : 'background:var(--bg-card);color:var(--text-secondary);border:1px solid var(--border);'">
    {{ n }}
  </button>
</template>
<button @click="handleBtnAction('pager-next')" :disabled="pager.pageNo===pager.pageTotalPage"
      style="padding:8px 14px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);cursor:pointer;color:var(--text-secondary);font-size:0.85rem;"
      :style="pager.pageNo===pager.pageTotalPage?'opacity:0.4;cursor:not-allowed;':''">
  \u203A
</button>
<span style="font-size:0.78rem;color:var(--text-muted);margin-left:8px;">
  {{ pager.pageNo }} / {{ pager.pageTotalPage }}
</span>
</div>
<!-- ===== \u25A1. PC \uD398\uC774\uC9C0\uB124\uC774\uC158 =============================================== -->
<!-- ===== \u25A0. \uBAA8\uBC14\uC77C \uBB34\uD55C\uC2A4\uD06C\uB864 \uC13C\uD2F0\uB12C =========================================== -->
<div v-if="!uiState.loading ? uiState.isMobile : false" id="sj-sentinel" style="height:1px;">
</div>
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<div v-if="!uiState.loading ? (uiState.isMobile ? pager.pageNo < pager.pageTotalPage : false) : false" style="text-align:center;padding:16px;color:var(--text-muted);font-size:0.85rem;">
\uC2A4\uD06C\uB864\uD558\uBA74 \uB354 \uBD88\uB7EC\uC635\uB2C8\uB2E4\u2026
</div>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<!-- ===== \u25A0. \uBE44\uAD50\uD568 \uD50C\uB85C\uD305 \uBC84\uD2BC ================================================ -->
<button v-if="compareList.length" @click="handleBtnAction('compareModal-open')"
    style="position:fixed;right:24px;bottom:24px;z-index:60;display:flex;align-items:center;gap:8px;padding:12px 18px;border-radius:30px;border:none;background:#1a1a1a;color:#fff;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,0.25);font-size:0.85rem;font-weight:700;">
  <span>
    \u2696\uFE0F
  </span>
  <span>
    \uBE44\uAD50\uD568 {{ compareList.length }}
  </span>
</button>
<!-- ===== \u25A1. \uBE44\uAD50\uD568 \uD50C\uB85C\uD305 \uBC84\uD2BC ================================================ -->
<!-- ===== \u25A0. \uBE60\uB978\uBCF4\uAE30 / \uBE44\uAD50 \uBAA8\uB2EC ================================================ -->
<product-modal :show="!!uiState.quickViewProduct" :product="uiState.quickViewProduct" :cart-mode="uiState.cartModalMode"
  :navigate="(page, opts) => { if(opts?.instantOrder){ navigate('order',opts); uiState.quickViewProduct=null; } else { selectProd(uiState.quickViewProduct); uiState.quickViewProduct=null; } }"
  :toggle-like="toggleLike" :is-liked="isLiked" :add-to-cart="addToCart"
  modal-name="quick-view" @close="handleBtnAction('quickViewModal-close')" />
<compare-modal :show="uiState.compareModalOpen" :items="compareList"
  :select-prod="selectProd" :remove-item="removeCompare" :clear-all="clearCompare"
  @close="handleBtnAction('compareModal-close')" />
<!-- ===== \u25A1. \uBE60\uB978\uBCF4\uAE30 / \uBE44\uAD50 \uBAA8\uB2EC ================================================ -->
</fo-page>
`};
