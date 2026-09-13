window.PdCategoryProdMng={name:"PdCategoryProdMng",props:{navigate:{type:Function,required:!0}},setup(xe){var B;const{ref:P,reactive:i,computed:u,watch:S,onMounted:j}=Vue,f=window.boApp.showToast,Y=window.boApp.showConfirm,g=i([]),w=i([]),n=i([]),d=i({loading:!1,error:null,tabMode:((B=window._ecCategoryProdState)==null?void 0:B.tabMode)||"tab",activeTypeCd:"NORMAL"}),ve=Vue.toRef(d,"tab"),C=i({product_statuses:[],disp_yn_opts:[{codeValue:"Y",codeLabel:"\uC804\uC2DC"},{codeValue:"N",codeLabel:"\uBE44\uC804\uC2DC"}]}),I=i([]),U=(e,t={})=>{if(e==="searchParam-list")return E();if(e==="searchParam-reset")return X();if(e==="categoryProds-save")return he();if(e==="prodPickModal-open"){T.value=!0;return}else if(e==="categoryTree-clear"){s.value=null;return}else if(e==="tab-typeSelect"){d.activeTypeCd=t;return}else if(e==="tab-mode"){d.tabMode=t;return}else console.warn("[handleBtnAction] unknown cmd:",e)},G=(e,t={})=>{if(e==="categoryTree-select")return Z(t);if(e==="categoryProds-rowRemove")return ge(t);if(e==="categoryProds-rowEmphasisToggle")return q(t.row,t.cd);if(e==="categoryProds-rowDragStart")return le(t);if(e==="categoryProds-rowDragOver")return ce(t);if(e==="categoryProds-rowDrop")return ie();if(e==="prodPickModal-add")return R(t);console.warn("[handleSelectAction] unknown cmd:",e)},V=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["PROD_STATUS_CD"],{compNm:"PdCategoryProdMng"});try{C.product_statuses=e.sgGetGrpCodes("PROD_STATUS_CD")}catch(t){console.error("[fnLoadCodes]",t)}I.splice(0,I.length,...await window.boUtil.bofLoadSiteOptions())},s=P(null),H=e=>{if(!e)return[];const t=[e],o=[e];for(;o.length;){const r=o.shift();g.forEach(a=>{a.parentCategoryId===r&&(t.push(a.categoryId),o.push(a.categoryId))})}return t},k=async()=>{const e=s.value;y.pageNo=1,p.categoryId="",p.categoryIdsCsv=e?H(e).join(","):"",p.typeCd=d.activeTypeCd,await N("DEFAULT")};S(()=>s.value,k),S(()=>d.activeTypeCd,k),window._ecCategoryProdState||(window._ecCategoryProdState={tabMode:"tab"}),S(()=>d.tabMode,e=>{window._ecCategoryProdState.tabMode=e});const x=[{cd:"NORMAL",nm:"\uC77C\uBC18\uC0C1\uD488"},{cd:"HIGHLIGHT",nm:"\uD558\uC774\uB77C\uC774\uD2B8\uC0C1\uD488"},{cd:"RECOMMEND",nm:"\uCD94\uCC9C\uC0C1\uD488"},{cd:"MAIN",nm:"\uB300\uD45C\uC0C1\uD488"},{cd:"BANNER",nm:"\uBC30\uB108\uC0C1\uD488"},{cd:"HOT_DEAL",nm:"\uD56B\uB51C\uC0C1\uD488"}],F=[{cd:"BOLD",nm:"\uBCFC\uB4DC",icon:"B"},{cd:"TEXT_COLOR",nm:"\uAE00\uC790\uC0C9",icon:"A"},{cd:"EMOTICON",nm:"\uC774\uBAA8\uD2F0\uCF58",icon:"\u{1F60A}"},{cd:"MARQUEE",nm:"\uD750\uB974\uB294\uAE00\uC790",icon:"\u301C"}],M=e=>e?e.split("^").filter(Boolean):[],W=(e,t)=>M(e).includes(t),q=(e,t)=>{const o=new Set(M(e.emphasisCd));o.has(t)?o.delete(t):o.add(t),e.emphasisCd=o.size?"^"+[...o].join("^")+"^":""},$=()=>`${new Date().getFullYear()+3}-12-31`,Q=()=>coUtil.cofToYmd(new Date),y=i({pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),p=i({prodNm:"",categoryId:"",categoryIdsCsv:"",typeCd:""}),_={},N=async(e="DEFAULT")=>{var t;try{const{prodNm:o,...r}=p,a={pageNo:y.pageNo,pageSize:y.pageSize,...Object.fromEntries(Object.entries(r).filter(([,D])=>D!==""&&D!==null&&D!==void 0)),...o?{prodNm:o.trim()}:{}},c=(t=(await boApiSvc.pdCategory.getProds(a,"\uCE74\uD14C\uACE0\uB9AC\uC0C1\uD488\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data;n.splice(0,n.length,...(c==null?void 0:c.pageList)||(c==null?void 0:c.list)||[]),y.pageTotalCount=(c==null?void 0:c.pageTotalCount)||0,y.pageTotalPage=(c==null?void 0:c.pageTotalPage)||coUtil.cofTotalPage(y)}catch(o){console.error("[handleSearchList]",o),n.splice(0,n.length)}},E=()=>{y.pageNo=1,Object.assign(y.pageCond,p),N("DEFAULT")},X=()=>{Object.assign(p,_),E()},J=async()=>{var e,t,o,r;try{const a=await boApiSvc.pdCategory.getPage({pageNo:1,pageSize:1e4},"\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C"),l=((t=(e=a.data)==null?void 0:e.data)==null?void 0:t.pageList)||((r=(o=a.data)==null?void 0:o.data)==null?void 0:r.list)||[];g.splice(0,g.length,...l)}catch(a){console.error("[handleSearchCategoriesList]",a)}},K=async()=>{var e,t,o,r;try{const a=await boApiSvc.pdProd.getPage({pageNo:1,pageSize:1e4},"\uCE74\uD14C\uACE0\uB9AC\uC0C1\uD488\uAD00\uB9AC","\uC0C1\uD488\uBAA9\uB85D\uC870\uD68C"),l=((t=(e=a.data)==null?void 0:e.data)==null?void 0:t.pageList)||((r=(o=a.data)==null?void 0:o.data)==null?void 0:r.list)||[];w.splice(0,w.length,...l)}catch(a){console.error("[handleSearchProductsList]",a)}},v=i([]),L=async()=>{var e,t,o,r;try{const a=await boApiSvc.pdCategory.getProds({pageNo:1,pageSize:1e5},"\uCE74\uD14C\uACE0\uB9AC\uC0C1\uD488\uAD00\uB9AC","\uCE74\uC6B4\uD2B8\uC870\uD68C"),l=((t=(e=a.data)==null?void 0:e.data)==null?void 0:t.pageList)||((r=(o=a.data)==null?void 0:o.data)==null?void 0:r.list)||[];v.splice(0,v.length,...l)}catch(a){console.error("[handleSearchAllCategoryProds]",a)}};j(async()=>{await V();const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(p).forEach(o=>{!t.includes(o)&&e.has(o)&&(p[o]=e.get(o))}),await Promise.all([J(),K(),L()]);try{await k()}catch(o){console.warn("[initPage] handleReloadByCategory failed:",o.message)}Object.assign(_,p)});const Z=e=>{if(e===null){s.value=null;return}s.value=s.value===e?null:e},ee=u(()=>g.find(e=>e.categoryId===s.value)),te=u(()=>!g.some(e=>e.parentCategoryId===s.value)),oe=e=>({0:"#e8587a",1:"#1677ff",2:"#3ba87a"})[e]||"#999",ae=e=>["\u25CF","\u25CB","\u25AA"][e]||"\xB7",re=e=>{const t=[e],o=[e];for(;o.length;){const r=o.shift();g.forEach(a=>{a.parentCategoryId===r&&(t.push(a.categoryId),o.push(a.categoryId))})}return t},ne=e=>{if(e==null)return v.length;const t=new Set(re(e));return v.filter(o=>t.has(o.categoryId)).length},O=u(()=>{const e={};return x.forEach(t=>{e[t.cd]=n.filter(o=>o.categoryProdTypeCd===t.cd).length}),e}),se=i(x.map(e=>({id:e.cd,label:e.nm,get count(){return O.value[e.cd]||0}}))),de=u(()=>(x.find(e=>e.cd===d.activeTypeCd)||{}).nm||""),h=P(null);let b=null;const le=e=>{b=e},ce=e=>{h.value=e},ie=()=>{if(b!==null&&h.value!==null&&b!==h.value){const e=n[b];n.splice(b,1),n.splice(h.value,0,e)}h.value=null,b=null},pe=e=>{const t=w.find(o=>o.prodId===e);return(t==null?void 0:t.prodNm)||`[${e}]`},m=e=>w.find(t=>t.prodId===e),z=e=>{const t=g.find(a=>a.categoryId===e);if(!t)return"-";const o=[t.categoryNm];let r=t.parentCategoryId;for(;r&&g.some(a=>a.categoryId===r);){const a=g.find(l=>l.categoryId===r);o.unshift(a.categoryNm),r=a.parentCategoryId}return o.join(" > ")},ge=e=>{const t=n.findIndex(o=>o===e);t!==-1&&(e._isNew?n.splice(t,1):e.rowStatus="D")},fe=u(()=>n.filter(e=>e.rowStatus!=="D")),R=e=>{var a;const t=(a=e.prodId)!=null?a:e.productId;if(n.some(l=>l.prodId===t&&l.categoryId===s.value&&l.categoryProdTypeCd===d.activeTypeCd)){f&&f("\uC774\uBBF8 \uCD94\uAC00\uB41C \uC0C1\uD488\uC785\uB2C8\uB2E4.","warning");return}const r={_id:Math.random(),_isNew:!0,rowStatus:"I",prodId:t,categoryId:s.value,categoryProdTypeCd:d.activeTypeCd,emphasisCd:"",dispStartDate:Q(),dispEndDate:$(),dispYn:"Y"};n.push(r),f&&f("\uC0C1\uD488\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")},T=P(!1),ye=(e,t,o)=>{if(e==="cmPopup-prod-pick")return T.value=!1,o?R(o):void 0},ue=u(()=>s.value?n.filter(e=>e.categoryId===s.value&&e.categoryProdTypeCd===d.activeTypeCd&&e.rowStatus!=="D").map(e=>e.prodId).filter(Boolean):[]),he=async()=>{var t,o;if(await Y("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const r=await boApiSvc.pdCategory.updateProds({categoryProds:n},"\uCE74\uD14C\uACE0\uB9AC\uC0C1\uD488\uAD00\uB9AC","\uC800\uC7A5");f&&f("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await L(),s.value&&await N("DEFAULT")}catch(r){console.error("[catch-info]",r);const a=((o=(t=r.response)==null?void 0:t.data)==null?void 0:o.message)||r.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";f&&f(a,"error",0)}},A={};A.baseSearch=[{key:"prodNm",label:"\uC0C1\uD488\uBA85",type:"text",placeholder:"\uC0C1\uD488\uBA85 \uAC80\uC0C9",width:"280px"},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>I,nullLabel:"\uC804\uCCB4"}];const be=u(()=>{const e=[{key:"prodId",label:"ID",style:"width:40px;text-align:center",align:"center",cellStyle:"color:#aaa;"},{key:"_prodNm",label:"\uC0C1\uD488\uBA85 / \uAC15\uC870\uC635\uC158"},{key:"_catPath",label:"\uCE74\uD14C\uACE0\uB9AC\uACBD\uB85C",style:"width:130px;text-align:center",align:"center",cellStyle:"color:#888;line-height:1.3;",fmt:(t,o)=>z(o.categoryId)},{key:"_price",label:"\uD310\uB9E4\uAC00",style:"width:78px;text-align:right",align:"right",fmt:(t,o)=>((m(o.prodId)||{}).salePrice||0).toLocaleString()+"\uC6D0"},{key:"_stock",label:"\uC7AC\uACE0",style:"width:44px;text-align:center",align:"center",fmt:(t,o)=>(m(o.prodId)||{}).prodStock!=null?(m(o.prodId)||{}).prodStock:"-"},{key:"_status",label:"\uC0C1\uD0DC",style:"width:52px;text-align:center",align:"center",badge:t=>{const o=(m(t.prodId)||{}).prodStatusCdNm;return o==="\uD310\uB9E4\uC911"?"badge-green":o==="\uD488\uC808"?"badge-red":"badge-gray"},fmt:(t,o)=>(m(o.prodId)||{}).prodStatusCdNm||"-"}];return d.activeTypeCd!=="NORMAL"&&(e.push({key:"_dispPeriod",label:"\uC804\uC2DC\uAE30\uAC04",style:"width:216px;text-align:center"}),e.push({key:"dispYn",label:"\uC804\uC2DC",style:"width:60px;text-align:center",edit:"select",options:()=>C.disp_yn_opts,cellStyle:t=>t==="Y"?"color:#16a34a;font-weight:600;":"color:#9ca3af;"})),e}),me=(e,t)=>h.value===t?"background:#e6f4ff":e._isNew?"background:#f6ffed":d.activeTypeCd!=="NORMAL"&&e.dispYn==="N"?"background:#fafafa;opacity:0.65":"";A.catProdPickerGrid=[{key:"prodId",label:"ID",style:"width:44px",cellStyle:"color:#aaa;"},{key:"prodNm",label:"\uC0C1\uD488\uBA85"},{key:"cateNm",label:"\uCE74\uD14C\uACE0\uB9AC",style:"width:80px;text-align:center",align:"center",cellStyle:"color:#888;",fmt:e=>e||"-"},{key:"_price",label:"\uD310\uB9E4\uAC00",style:"width:90px;text-align:right",align:"right",fmt:(e,t)=>coUtil.cofWon(t.salePrice)},{key:"prodStock",label:"\uC7AC\uACE0",style:"width:60px;text-align:center",align:"center",fmt:e=>e!=null?e:"-"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8"}];const we=i({show:!1});return{columns:A,codes:C,uiState:d,categoryProds:n,cfVisibleCategoryProds:fe,searchParam:p,excelModal:we,buildExcelParams:()=>{const{prodNm:e,...t}=p;return{...Object.fromEntries(Object.entries(t).filter(([,o])=>o!==""&&o!==null&&o!==void 0)),...e?{prodNm:e.trim()}:{}}},cfCatProdGridColumns:be,handleBtnAction:U,handleSelectAction:G,fnCallbackModal:ye,cfSelectedCatId:s,cfSelectedCat:ee,cfIsLeafCat:te,cfTypeCountMap:O,tabs:se,cfActiveTypeNm:de,cfExcludeProdIds:ue,fnCatProdRowStyle:me,fnDepthColor:oe,fnDepthBullet:ae,totalProdCount:ne,TYPE_TABS:x,EMPHASIS_OPTS:F,hasEmphasis:W,getProdNm:pe,getProd:m,getCatPath:z,dragoverIdx:h,pickerOpen:T}},template:`
<bo-page title="\uCE74\uD14C\uACE0\uB9AC\uC0C1\uD488\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ====================================================== -->
  <!-- ===== \u25A0. \uC88C \uD2B8\uB9AC + \uC6B0 \uC0C1\uD488\uBAA9\uB85D =========================================== -->
  <div class="bo-2col">
    <!-- ===== \u25A0.\u25A0. \uC88C\uCE21 \uCE74\uD14C\uACE0\uB9AC \uD2B8\uB9AC ============================================ -->
    <bo-container title="\u{1F4C1} \uCE74\uD14C\uACE0\uB9AC">
      <template #toolbar-actions>
        <div v-if="cfSelectedCatId" style="font-size:11px;color:#1677ff;cursor:pointer" @click="handleBtnAction('categoryTree-clear')">
          \uC804\uCCB4
        </div>
      </template>
      <bo-category-tree mode="tree" :selected="cfSelectedCatId" :show-count="totalProdCount" max-height="calc(100vh - 320px)" @select="id => handleSelectAction('categoryTree-select', id)" />
    </bo-container>
    <!-- ===== \u25A1.\u25A1. \uC88C\uCE21 \uCE74\uD14C\uACE0\uB9AC \uD2B8\uB9AC ============================================ -->
    <!-- ===== \u25A0.\u25A0. \uC6B0\uCE21 \uC0C1\uD488 \uBAA9\uB85D ============================================== -->
    <bo-container>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uCE74\uD14C\uACE0\uB9AC\uBA85 + \uC800\uC7A5/\uCD94\uAC00 \uBC84\uD2BC (\uD0ED\uBC14\uC640 \uAC04\uACA9 \uD655\uBCF4) ================== -->
        <div class="toolbar" style="margin-bottom:10px">
          <span class="list-title">
            <span v-if="cfSelectedCatId" :style="{ color: fnDepthColor((cfSelectedCat?.categoryDepth||1)-1), fontWeight:700, marginRight:'4px' }">
              {{ fnDepthBullet((cfSelectedCat?.categoryDepth||1)-1) }}
            </span>
            <span v-else style="color:#e8587a;font-weight:700;margin-right:4px">
              \u2605
            </span>
            {{ cfSelectedCatId ? cfSelectedCat?.categoryNm : '\uC804\uCCB4' }}
            <span v-if="cfSelectedCatId ? (!cfIsLeafCat) : false" style="font-size:11px;color:#aaa;margin-left:6px">
              (\uD558\uC704 \uD3EC\uD568)
            </span>
            <span v-else-if="!cfSelectedCatId" style="font-size:11px;color:#aaa;margin-left:6px">
              (\uBAA8\uB4E0 \uCE74\uD14C\uACE0\uB9AC)
            </span>
          </span>
          <div style="display:flex;gap:8px">
            <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
            <button class="btn btn-secondary btn-sm" :disabled="!cfSelectedCatId" @click="handleBtnAction('prodPickModal-open')">
              + \uC0C1\uD488\uCD94\uAC00
            </button>
            <button class="btn btn_save" @click="handleBtnAction('categoryProds-save')">
              \uC800\uC7A5
            </button>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD0ED\uBC14 + \uBDF0\uBAA8\uB4DC \uBC84\uD2BC ======================================= -->
        <bo-tab-bar :tabs="tabs" :tab="uiState.activeTypeCd" :tab-mode="uiState.tabMode"
          @tab-select="id => handleBtnAction('tab-typeSelect', id)"
          @mode-select="m => handleBtnAction('tab-mode', m)" />
      <div style="font-size:12px;color:#aaa;margin:8px 0 4px;padding:0 2px">
        \u2261 \uB4DC\uB798\uADF8\uB85C \uC21C\uC11C \uBCC0\uACBD \xB7 \uC800\uC7A5 \uD6C4 \uBC18\uC601\uB429\uB2C8\uB2E4.
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. TABLE \uBDF0 (tab / 1col) ============================== -->
      <bo-grid v-if="uiState.tabMode==='tab'||uiState.tabMode==='1col'"
          bare :columns="cfCatProdGridColumns" :rows="cfVisibleCategoryProds" row-key="_id"
          draggable row-actions :row-style="fnCatProdRowStyle"
          :empty-text="searchParam.prodNm ? '\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' : '\uB4F1\uB85D\uB41C \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. [+ \uC0C1\uD488\uCD94\uAC00] \uBC84\uD2BC\uC73C\uB85C \uCD94\uAC00\uD558\uC138\uC694.'"
          @reorder="handleSelectAction('categoryProds-rowDrop')">
        <template #cell-_prodNm="{ row }">
          <td>
            <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap">
              <span v-if="row._isNew" class="badge badge-green" style="font-size:10px">
                NEW
              </span>
              <span style="font-weight:500">
                {{ getProdNm(row.prodId) }}
              </span>
            </div>
            <div style="display:flex;gap:3px;flex-wrap:wrap;margin-top:4px">
              <button v-for="opt in EMPHASIS_OPTS" :key="(opt?.cd)" @click="handleSelectAction('categoryProds-rowEmphasisToggle', { row, cd: opt.cd })" style="padding:1px 5px;border-radius:4px;font-size:10px;border:1px solid;line-height:1.5" :style="hasEmphasis(row.emphasisCd, opt.cd) ? 'background:#fce4ec;border-color:#e8587a;color:#e8587a;font-weight:700' : 'background:#f5f5f5;border-color:#ddd;color:#bbb'">
              {{ opt.icon }} {{ opt.nm }}
            </button>
          </div>
        </td>
      </template>
      <template #cell-_dispPeriod="{ row }">
        <td>
          <div style="display:flex;align-items:center;gap:2px;justify-content:center">
            <input type="date" class="form-control" v-model="row.dispStartDate"
                  style="width:100px;padding:2px 4px;font-size:11px;text-align:center" />
            <span style="color:#aaa;font-size:11px;flex-shrink:0">
              ~
            </span>
            <input type="date" class="form-control" v-model="row.dispEndDate"
                  style="width:100px;padding:2px 4px;font-size:11px;text-align:center" />
          </div>
        </td>
      </template>
      <template #row-actions="{ row, pinStyle }">
        <td :style="'text-align:center;white-space:nowrap;' + pinStyle">
          <button class="btn btn-danger btn-xs" @click="handleSelectAction('categoryProds-rowRemove', row)">
            \u2715
          </button>
        </td>
      </template>
    </bo-grid>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. CARD GRID \uBDF0 (2col / 3col / 4col) ================== -->
    <div v-else
          :style="{
          display:'grid',
          gridTemplateColumns: uiState.tabMode==='2col' ? 'repeat(2,1fr)' : uiState.tabMode==='3col' ? 'repeat(3,1fr)' : 'repeat(4,1fr)',
          gap:'10px',
          }">
      <div v-for="(row, idx) in cfVisibleCategoryProds" :key="(row?._id)" draggable="true" @dragstart="handleSelectAction('categoryProds-rowDragStart', idx)" @dragover.prevent="handleSelectAction('categoryProds-rowDragOver', idx)" @drop="handleSelectAction('categoryProds-rowDrop')" style="border:1px solid #eee;border-radius:10px;padding:10px;background:#fff" :style="dragoverIdx===idx ? 'border-color:#1677ff;box-shadow:0 0 0 2px #bfdbfe' : row._isNew ? 'border-color:#52c41a' : (uiState.activeTypeCd!=='NORMAL' ? row.dispYn==='N' : false) ? 'opacity:0.6' : ''">
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCE74\uB4DC \uD5E4\uB354 ========================================= -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <div style="display:flex;align-items:center;gap:5px">
          <span style="cursor:grab;color:#bbb;font-size:15px;user-select:none">
            \u2261
          </span>
          <span style="font-size:10px;color:#aaa">
            #{{ idx+1 }}
          </span>
          <span v-if="row._isNew" class="badge badge-green" style="font-size:10px">
            NEW
          </span>
        </div>
        <button class="btn btn-danger btn-xs" @click="handleSelectAction('categoryProds-rowRemove', row)">
          \u2715
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD488\uBA85 =========================================== -->
      <div style="font-weight:600;font-size:13px;margin-bottom:3px;line-height:1.4;word-break:keep-all">
        {{ getProdNm(row.prodId) }}
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCE74\uD14C\uACE0\uB9AC\uACBD\uB85C ======================================== -->
      <div style="font-size:10px;color:#888;margin-bottom:6px;background:#f5f5f5;border-radius:4px;padding:2px 6px;display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
        {{ getCatPath(row.categoryId) }}
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAC00\uACA9/\uC7AC\uACE0/\uC0C1\uD0DC ====================================== -->
      <div style="display:flex;align-items:center;gap:5px;margin-bottom:6px;flex-wrap:wrap">
        <span style="font-size:12px;font-weight:700;color:#e8587a">
          {{ ((getProd(row.prodId)?.salePrice||0)).toLocaleString() }}\uC6D0
        </span>
        <span style="font-size:10px;color:#999">
          \uC7AC\uACE0 {{ ((getProd(row.prodId) || {}).prodStock != null ? (getProd(row.prodId) || {}).prodStock : '-') }}
        </span>
        <span :class="['badge',
                getProd(row.prodId)?.prodStatusCdNm==='\uD310\uB9E4\uC911' ? 'badge-green' :
                getProd(row.prodId)?.prodStatusCdNm==='\uD488\uC808'   ? 'badge-red'   : 'badge-gray']"
                style="font-size:10px">
          {{ getProd(row.prodId)?.prodStatusCdNm || '-' }}
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAC15\uC870\uC635\uC158 chips ==================================== -->
      <div style="display:flex;gap:3px;flex-wrap:wrap;margin-bottom:7px">
        <button v-for="opt in EMPHASIS_OPTS" :key="(opt?.cd)" @click="handleSelectAction('categoryProds-rowEmphasisToggle', { row, cd: opt.cd })" style="padding:1px 5px;border-radius:4px;font-size:10px;border:1px solid;line-height:1.5" :style="hasEmphasis(row.emphasisCd, opt.cd) ? 'background:#fce4ec;border-color:#e8587a;color:#e8587a;font-weight:700' : 'background:#f5f5f5;border-color:#ddd;color:#bbb'">
        {{ opt.icon }} {{ opt.nm }}
      </button>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC804\uC2DC\uAE30\uAC04 (NORMAL \uC81C\uC678) ============================== -->
    <template v-if="uiState.activeTypeCd!=='NORMAL'">
      <div style="display:flex;align-items:center;gap:2px;margin-bottom:4px">
        <input type="date" class="form-control" v-model="row.dispStartDate"
                  style="flex:1;padding:2px 4px;font-size:10px;min-width:0" />
        <span style="color:#aaa;font-size:10px;flex-shrink:0">
          ~
        </span>
        <input type="date" class="form-control" v-model="row.dispEndDate"
                  style="flex:1;padding:2px 4px;font-size:10px;min-width:0" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC804\uC2DC\uC5EC\uBD80 ======================================== -->
      <select class="form-control" v-model="row.dispYn"
                style="width:100%;padding:2px 6px;font-size:11px"
                :style="row.dispYn==='Y' ? 'color:#16a34a;font-weight:600' : 'color:#9ca3af'">
        <option v-for="c in codes.disp_yn_opts" :key="c.codeValue" :value="c.codeValue">
          {{ c.codeLabel }}
        </option>
      </select>
    </template>
  </div>
  <div v-if="!cfVisibleCategoryProds.length"
            style="grid-column:1/-1;text-align:center;padding:40px;color:#aaa;border:1px dashed #eee;border-radius:8px">
    \uB4F1\uB85D\uB41C \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. [+ \uC0C1\uD488\uCD94\uAC00] \uBC84\uD2BC\uC73C\uB85C \uCD94\uAC00\uD558\uC138\uC694.
  </div>
</div>
      <bo-excel-down-modal :show="excelModal.show" domain="pdCategoryProd" area-nm="\uCE74\uD14C\uACE0\uB9AC\uBCC4\uC0C1\uD488"
        :columns="cfCatProdGridColumns" ui-nm="\uCE74\uD14C\uACE0\uB9AC\uC0C1\uD488\uAD00\uB9AC" :params="buildExcelParams()"
        @close="excelModal.show = false" />
    </bo-container>
  </div>
<!-- ===== \u25A1.\u25A1. \uC6B0\uCE21 \uC0C1\uD488 \uBAA9\uB85D ============================================== -->
<!-- ===== \u25A1. \uC88C \uD2B8\uB9AC + \uC6B0 \uC0C1\uD488\uBAA9\uB85D =========================================== -->
<!-- ===== \u25A0. \uC0C1\uD488 \uCD94\uAC00 \uD53C\uCEE4 \uBAA8\uB2EC ============================================= -->
<!-- ===== \u25A0. \uC0C1\uD488 \uCD94\uAC00 \uBAA8\uB2EC (BoModals.js / PdProdPickModal) ================== -->
<bo-cm-popup-modal popup-cmd="cmPopup-prod-pick" popup-code="prod" :show="pickerOpen" :title="'\uC0C1\uD488 \uCD94\uAC00' + (cfSelectedCat ? ' \u2192 ' + cfSelectedCat.categoryNm : '')" :init-selected-ids="cfExcludeProdIds" :on-callback="fnCallbackModal" />
<!-- ===== \u25A1. \uC0C1\uD488 \uCD94\uAC00 \uBAA8\uB2EC ================================================= -->
</bo-page>
<!-- ===== \u25A1. \uC0C1\uD488 \uCD94\uAC00 \uD53C\uCEE4 \uBAA8\uB2EC ============================================= -->
`};
