window.PdCategoryMng={name:"PdCategoryMng",props:{navigate:{type:Function,required:!0}},setup(he){const{ref:x,reactive:h,computed:O,watch:E,onMounted:z}=Vue,l=window.boApp.showToast,u=window.boApp.showConfirm,f=h([]),T=O(()=>window._boCmSites||[]),d=h({loading:!1,error:null,selectedCatId:null,focusedIdx:null}),_=h({category_depths:[],product_statuses:[],category_statuses:[]}),B=(e,t={})=>{if(e==="searchParam-list")return $();if(e==="searchParam-reset")return H();if(e==="categories-add")return le();if(e==="categories-save")return pe();if(e==="categories-deleteChecked")return ge();if(e==="categories-cancelChecked")return ie();if(e==="categoryTree-clear"){d.selectedCatId=null;return}else if(e==="parentModal-close"){w.show=!1;return}else{if(e==="categories-pager-setPage")return V(t);console.warn("[handleBtnAction] unknown cmd:",e)}},v=(e,t={})=>{if(e==="categories-pager-sizeChange")return Y();if(e==="categoryTree-select")return L(t);if(e==="categories-rowFocus")return ne(t);if(e==="categories-rowCellChange")return te(t);if(e==="categories-rowAddChild")return ce(t.row,t.idx);if(e==="categories-rowCancel")return R(t);if(e==="categories-rowDelete")return de(t);if(e==="categories-rowCheckAll")return oe();if(e==="categories-rowDragStart")return ae(t);if(e==="categories-rowDragOver")return re(t);if(e==="categories-rowDrop")return se();if(e==="parentModal-open")return J(t);if(e==="parentModal-select")return P(t);if(e==="searchParam-siteChange")return U();console.warn("[handleSelectAction] unknown cmd:",e)},G=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["CATEGORY_DEPTH","PROD_STATUS_CD","CATEGORY_STATUS_CD"],{compNm:"PdCategoryMng"});try{_.category_depths=e.sgGetGrpCodes("CATEGORY_DEPTH"),_.product_statuses=e.sgGetGrpCodes("PROD_STATUS_CD"),_.category_statuses=e.sgGetGrpCodes("CATEGORY_STATUS_CD")}catch(t){console.error("[fnLoadCodes]",t)}},p=h({siteId:"",depth:"",status:""}),k={},C=async()=>{var e,t,o,s;try{const r=await boApiSvc.pdCategory.getPage({siteId:p.siteId,pageNo:1,pageSize:1e4},"\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C"),a=((t=(e=r.data)==null?void 0:e.data)==null?void 0:t.pageList)||((s=(o=r.data)==null?void 0:o.data)==null?void 0:s.list)||[];f.splice(0,f.length,...a),window._categoryTreeCache&&(window._categoryTreeCache.list=null,window._categoryTreeCache.bySite={})}catch(r){console.error("[handleSearchList]",r)}},b=async()=>{var e,t,o,s;try{const r={pageNo:1,pageSize:1e4,...coUtil.cofOmitEmpty(p),...d.selectedCatId?{parentCategoryId:d.selectedCatId}:{}},a=await boApiSvc.pdCategory.getPage(r,"\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C"),i=((t=(e=a.data)==null?void 0:e.data)==null?void 0:t.pageList)||((s=(o=a.data)==null?void 0:o.data)==null?void 0:s.list)||[];n.splice(0),F(i).forEach(y=>n.push(j(y))),c.pageNo=1,c.pageTotalCount=n.length,c.pageTotalPage=Math.max(1,Math.ceil(n.length/c.pageSize)),S()}catch(r){console.error("[handleGridSearch]",r)}},U=async()=>{d.selectedCatId=null,window.boCommonFilter&&(window.boCommonFilter.siteId=p.siteId),await C(),await b()};z(async()=>{var o,s,r,a;await G();const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(p).forEach(i=>{!t.includes(i)&&e.has(i)&&(p[i]=e.get(i))}),await C(),await b(),Object.assign(p,{siteId:window.boCommonFilter&&window.boCommonFilter.siteId||((s=(o=window.sfGetBoAppStore)==null?void 0:o.call(window))==null?void 0:s.svBoSiteId)||((a=(r=window._boCmSites)==null?void 0:r[0])==null?void 0:a.siteId)||"2604010000000001"}),Object.assign(k,p)});const L=e=>{if(e===null){d.selectedCatId=null;return}d.selectedCatId=d.selectedCatId===e?null:e};E(()=>d.selectedCatId,()=>b());const n=h([]);let A=-1;const c=h({pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),F=e=>{const t={};window.safeArrayUtils.safeForEach(e,a=>{t[a.categoryId]={...a,_children:[]}});const o=[];window.safeArrayUtils.safeForEach(e,a=>{a.parentCategoryId&&t[a.parentCategoryId]?t[a.parentCategoryId]._children.push(t[a.categoryId]):o.push(t[a.categoryId])});const s=[],r=(a,i)=>{s.push({...a,_depth:i}),a._children.sort((y,g)=>(y.sortOrd||0)-(g.sortOrd||0)).forEach(y=>r(y,i+1))};return o.sort((a,i)=>(a.sortOrd||0)-(i.sortOrd||0)).forEach(a=>r(a,0)),s},j=e=>({...e,_depth:e._depth||0,_row_status:"N",_row_check:!1,_row_org:{categoryNm:e.categoryNm,parentCategoryId:e.parentCategoryId,sortOrd:e.sortOrd,categoryDesc:e.categoryDesc,categoryStatusCd:e.categoryStatusCd}}),S=()=>{const e=c.pageNo,t=c.pageTotalPage,o=Math.max(1,e-2),s=Math.min(t,o+4);c.pageNums=Array.from({length:s-o+1},(r,a)=>o+a),c.pageList=n.slice((e-1)*c.pageSize,e*c.pageSize)},V=e=>{e>=1&&e<=c.pageTotalPage&&(c.pageNo=e,S())},Y=()=>{c.pageNo=1,c.pageTotalCount=n.length,c.pageTotalPage=Math.max(1,Math.ceil(n.length/c.pageSize)),S()},q=e=>(c.pageNo-1)*c.pageSize+e,$=async()=>{c.pageNo=1,await b()},H=async()=>{Object.assign(p,k),d.selectedCatId=null,await C(),await b()},W=e=>{if(!e)return 0;let t=0;const o=[e];for(;o.length;){const s=o.pop(),r=(f||[]).filter(a=>a.parentCategoryId===s);t+=r.length,r.forEach(a=>o.push(a.categoryId))}return t},w=h({show:!1,forCategoryId:null,forRowIdx:null}),P=e=>{const t=w.forRowIdx;t!=null&&n[t]&&(n[t].parentCategoryId=e?e.categoryId:null,n[t]._row_status!=="N"&&(n[t]._row_status="U")),w.show=!1},J=async e=>{w.forRowIdx=n.indexOf(e),w.forCategoryId=e.categoryId,w.show=!0,await C()},K=(e,t,o)=>{if(e==="cmPopup-cat-parent-pick")return w.show=!1,o!==void 0?P(o):void 0},Q=e=>({0:"#e8587a",1:"#1677ff",2:"#3ba87a"})[e]||"#999",X=e=>["\u25CF","\u25CB","\u25AA"][e]||"\xB7",Z=e=>({N:"badge-gray",I:"badge-blue",U:"badge-orange",D:"badge-red"})[e]||"badge-gray",ee=e=>{var t;return((t=(f||[]).find(o=>o.categoryId===e))==null?void 0:t.categoryNm)||e},te=e=>{e._row_status!=="N"&&(e._row_status="U")},D=x(!1),oe=()=>{n.forEach(e=>{e._row_check=D.value})},m=x(null),I=x(null),ae=e=>{m.value=e},re=e=>{I.value=e},se=async()=>{var i,y;const e=m.value,t=I.value;if(m.value=null,I.value=null,e==null||t==null||e===t)return;const[o]=n.splice(e,1);n.splice(t,0,o);const s=o.parentCategoryId||null,r=[];let a=1;if(n.forEach(g=>{(g.parentCategoryId||null)===s&&(g.sortOrd!==a&&(g.sortOrd=a,g._row_status!=="C"&&g.categoryId!=null&&(r.push({categoryId:g.categoryId,sortOrd:a,rowStatus:"U"}),g._row_status==null&&(g._row_status="U"))),a++)}),r.length>0)try{await boApiSvc.pdCategory.saveList("order",r,"\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC","\uC21C\uC11C\uBCC0\uACBD"),l==null||l("\uC21C\uC11C\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await C()}catch(g){console.error("[PdCategoryMng] sort save failed",g),l==null||l(((y=(i=g.response)==null?void 0:i.data)==null?void 0:y.message)||"\uC21C\uC11C \uC800\uC7A5 \uC2E4\uD328","error",0)}},N=x(-1),ne=e=>{N.value=e},le=()=>{const e=d.selectedCatId||null,t=e?(f||[]).find(s=>s.categoryId===e):null,o=t?(t.categoryDepth||0)+1:1;n.unshift({categoryId:A--,siteId:p.siteId,categoryNm:"",parentCategoryId:e,sortOrd:0,categoryDesc:"",categoryStatusCd:"ACTIVE",categoryDepth:o,_depth:o-1,_row_status:"N",_row_check:!1}),c.pageNo=1},ce=(e,t)=>{const o=(e.categoryDepth||1)+1;n.splice(t+1,0,{categoryId:A--,siteId:e.siteId||p.siteId,categoryNm:"",parentCategoryId:e.categoryId,sortOrd:0,categoryDesc:"",categoryStatusCd:"ACTIVE",categoryDepth:o,_depth:o-1,_row_status:"N",_row_check:!1})},R=e=>{const t=n[e];t&&(t._row_status==="N"?n.splice(e,1):t._row_org&&(Object.assign(t,t._row_org),t._row_status=null))},ie=()=>{for(let e=n.length-1;e>=0;e--)n[e]._row_check&&R(e)},de=async e=>{const t=n[e];if(!t)return;if(t._row_status==="N"){n.splice(e,1);return}if(await(u==null?void 0:u("\uC0AD\uC81C",`[${t.categoryNm}] \uCE74\uD14C\uACE0\uB9AC\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))){t._row_status="D";try{const s=await boApiSvc.pdCategory.remove(t.categoryId,"\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC","\uC0AD\uC81C");l&&l("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),n.splice(e,1)}catch(s){console.error("[catch-info]",s);const r=coUtil.cofErrMsg(s);l&&l(r,"error",0)}}},ge=async()=>{const e=[];if(n.forEach((o,s)=>{o._row_check&&e.push(s)}),!e.length){l==null||l("\uC0AD\uC81C\uD560 \uD589\uC744 \uC120\uD0DD\uD558\uC138\uC694.","info");return}if(await(u==null?void 0:u("\uC0AD\uC81C",`\uC120\uD0DD\uD55C ${e.length}\uAC74\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))){for(let o=e.length-1;o>=0;o--){const s=e[o],r=n[s];if(r._row_status==="N"){n.splice(s,1);continue}try{await boApiSvc.pdCategory.remove(r.categoryId,"\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC","\uC0AD\uC81C"),n.splice(s,1)}catch(a){console.error("[deleteRows]",a)}}l==null||l("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}},pe=async()=>{const e=n.filter(o=>o._row_status==="N"||o._row_status==="U");if(!e.length){l==null||l("\uBCC0\uACBD\uB41C \uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","info");return}for(const o of e)if(!o.categoryNm){l==null||l("\uCE74\uD14C\uACE0\uB9AC\uBA85\uC740 \uD544\uC218\uC785\uB2C8\uB2E4.","error");return}if(await(u==null?void 0:u("\uC800\uC7A5",`${e.length}\uAC74\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))){for(const o of e){const s=o._row_status==="N",r={...o};delete r._depth,delete r._row_status,delete r._row_check,delete r._row_org,delete r._children,s&&delete r.categoryId;try{const a=s?await boApiSvc.pdCategory.create(r,"\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC","\uC800\uC7A5"):await boApiSvc.pdCategory.update(o.categoryId,r,"\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC","\uC800\uC7A5");o._row_status=null}catch(a){console.error("[handleSave]",a);const i=coUtil.cofErrMsg(a);l&&l(i,"error",0);return}}l==null||l("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await C(),await b()}},M={};M.baseSearch=[{key:"siteId",label:"\uC0AC\uC774\uD2B8 *",type:"select",nullable:!1,options:()=>T.value.map(e=>({value:e.siteId,label:e.siteId+" "+e.siteNm})),onChange:()=>v("searchParam-siteChange")},{key:"searchValue",label:"\uCE74\uD14C\uACE0\uB9AC\uBA85",type:"text",placeholder:"\uCE74\uD14C\uACE0\uB9AC\uBA85 \uAC80\uC0C9"},{key:"depth",label:"\uB2E8\uACC4",type:"select",options:()=>_.category_depths,nullLabel:"\uC804\uCCB4"},{key:"status",label:"\uC0C1\uD0DC",type:"select",options:()=>_.category_statuses,nullLabel:"\uC804\uCCB4"}];const ue=h({show:!1});return{columns:M,codes:_,uiState:d,searchParam:p,gridRows:n,categoriesGridPager:c,catPickerModal:w,categories:f,excelModal:ue,excelColumns:[{key:"categoryNm",label:"\uCE74\uD14C\uACE0\uB9AC\uBA85"},{key:"parentCategoryNm",label:"\uC0C1\uC704\uCE74\uD14C\uACE0\uB9AC"},{key:"sortOrd",label:"\uC21C\uC11C"},{key:"categoryDesc",label:"\uC124\uBA85"},{key:"categoryStatusCdNm",label:"\uC0C1\uD0DC"}],buildExcelParams:()=>({...coUtil.cofOmitEmpty(p),...d.selectedCatId?{parentCategoryId:d.selectedCatId}:{}}),handleBtnAction:B,handleSelectAction:v,fnCallbackModal:K,fnDepthColor:Q,fnDepthBullet:X,parentNm:ee,fnStatusClass:Z,getRealIdx:q,fnCategoryDescCount:W,focusedIdx:N,checkAll:D,dragoverRowIdx:I}},template:`
<bo-page title="\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC" :share-query="searchParam"
    desc-summary="\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC\uB294 \uC0C1\uD488 \uBD84\uB958\uB97C \uC704\uD55C 3\uB2E8\uACC4 \uACC4\uCE35(\uB300/\uC911/\uC18C) \uCE74\uD14C\uACE0\uB9AC\uB97C \uAD00\uB9AC\uD569\uB2C8\uB2E4."
    :desc-detail="['\u2714 \uB300\xB7\uC911\xB7\uC18C 3\uB2E8\uACC4\uB85C \uCE74\uD14C\uACE0\uB9AC \uD2B8\uB9AC\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4.','\u2714 \uC815\uB82C\uC21C\uC11C\xB7\uD45C\uC2DC\uC5EC\uBD80\uB97C \uC124\uC815\uD558\uACE0 \uC0C1\uD488\uACFC \uC5F0\uACB0\uD569\uB2C8\uB2E4.','\u2714 \uCE74\uD14C\uACE0\uB9AC \uC0AD\uC81C \uC2DC \uD558\uC704 \uCE74\uD14C\uACE0\uB9AC\uC640 \uC5F0\uACB0 \uC0C1\uD488\uC744 \uD568\uAED8 \uD655\uC778\uD569\uB2C8\uB2E4.','\uC608) \uC758\uB958 > \uC0C1\uC758 > \uD2F0\uC154\uCE20, \uC804\uC790\uAE30\uAE30 > \uC2A4\uB9C8\uD2B8\uD3F0'].join(String.fromCharCode(10))">
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" :columns="columns.baseSearch" :param="searchParam" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ====================================================== -->
  <!-- ===== \u25A0. \uC88C \uD2B8\uB9AC + \uC6B0 \uADF8\uB9AC\uB4DC ============================================ -->
  <div class="bo-2col">
    <!-- ===== \u25A0.\u25A0. \uC88C\uCE21: \uCE74\uD14C\uACE0\uB9AC \uD2B8\uB9AC =========================================== -->
    <bo-container title="\u{1F4C1} \uCE74\uD14C\uACE0\uB9AC">
      <template #toolbar-actions>
        <div v-if="uiState.selectedCatId" style="font-size:11px;color:#1677ff;cursor:pointer" @click="handleBtnAction('categoryTree-clear')">
          \uC804\uCCB4\uBCF4\uAE30
        </div>
      </template>
      <bo-category-tree mode="tree" :site-id="searchParam.siteId" :selected="uiState.selectedCatId" :show-count="fnCategoryDescCount" max-height="calc(100vh - 320px)" @select="id => handleSelectAction('categoryTree-select', id)" />
    </bo-container>
    <!-- ===== \u25A1.\u25A1. \uC88C\uCE21: \uCE74\uD14C\uACE0\uB9AC \uD2B8\uB9AC =========================================== -->
    <!-- ===== \u25A0.\u25A0. \uC6B0\uCE21: \uCE74\uD14C\uACE0\uB9AC \uADF8\uB9AC\uB4DC ========================================== -->
    <bo-container>
      <template #title>
        \uCE74\uD14C\uACE0\uB9AC \uBAA9\uB85D
        <span v-if="uiState.selectedCatId" style="font-size:12px;color:#1677ff;margin-left:6px">
          \u2014 {{ parentNm(uiState.selectedCatId) }} \uD558\uC704
        </span>
        <span class="list-count">
          {{ gridRows.filter(r => r._row_status !== 'D').length }}\uAC74
        </span>
      </template>
      <template #toolbar-actions>
        <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
        <button class="btn btn_new" @click="handleBtnAction('categories-add')">
          + \uD589\uCD94\uAC00
        </button>
        <button class="btn btn-danger btn-sm" @click="handleBtnAction('categories-deleteChecked')">
          \uD589\uC0AD\uC81C
        </button>
        <button class="btn btn-secondary btn-sm" @click="handleBtnAction('categories-cancelChecked')">
          \uCDE8\uC18C
        </button>
        <button class="btn btn_save" @click="handleBtnAction('categories-save')">
          \uC800\uC7A5
        </button>
      </template>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 ================================================= -->
      <table class="bo-table crud-grid" style="table-layout:fixed">
        <colgroup>
          <col style="width:36px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC88\uD638 ============================================== -->
          <col style="width:28px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB4DC\uB798\uADF8 \uD578\uB4E4 ========================================== -->
          <col style="width:36px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD0DC ============================================== -->
          <col style="width:32px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCCB4\uD06C ============================================== -->
          <col style="min-width:140px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCE74\uD14C\uACE0\uB9AC\uBA85 =========================================== -->
          <col style="min-width:120px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uC704 ============================================== -->
          <col style="width:64px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC21C\uC11C ============================================== -->
          <col>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC124\uBA85 ============================================== -->
          <col style="width:70px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD0DC ============================================== -->
          <col style="width:32px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD558\uC704\uCD94\uAC00 ============================================ -->
          <col style="width:44px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCDE8\uC18C ============================================== -->
          <col style="width:44px">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0AD\uC81C ============================================== -->
        </colgroup>
        <thead>
          <tr>
            <th style="width:36px;text-align:center;">
              \uBC88\uD638
            </th>
            <th>
            </th>
            <th>
              \uC0C1\uD0DC
            </th>
            <th>
              <input type="checkbox" v-model="checkAll" @change="handleSelectAction('categories-rowCheckAll')">
            </th>
            <th>
              \uCE74\uD14C\uACE0\uB9AC\uBA85
            </th>
            <th>
              \uC0C1\uC704\uCE74\uD14C\uACE0\uB9AC
            </th>
            <th style="text-align:center">
              \uC21C\uC11C
            </th>
            <th>
              \uC124\uBA85
            </th>
            <th style="text-align:center">
              \uD65C\uC131
            </th>
            <th>
            </th>
            <th>
            </th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!gridRows.length">
            <td colspan="12" style="text-align:center;color:#aaa;padding:30px">
              {{ uiState.selectedCatId ? '\uD558\uC704 \uCE74\uD14C\uACE0\uB9AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. [+ \uD589\uCD94\uAC00]\uB85C \uCD94\uAC00\uD558\uC138\uC694.' : '\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' }}
            </td>
          </tr>
          <tr v-else v-for="(row, idx) in categoriesGridPager.pageList" :key="(row?.categoryId)" :class="[uiState.focusedIdx===getRealIdx(idx) ? 'focused' : '', 'status-'+row._row_status]" draggable="true" @dragstart="handleSelectAction('categories-rowDragStart', getRealIdx(idx))" @dragover.prevent="handleSelectAction('categories-rowDragOver', getRealIdx(idx))" @drop="handleSelectAction('categories-rowDrop')" :style="dragoverRowIdx===getRealIdx(idx) ? 'background:#e6f4ff' : ''" @click="handleSelectAction('categories-rowFocus', getRealIdx(idx))">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC88\uD638 ============================================ -->
          <td style="text-align:center;font-size:11px;color:#999;">
            {{ getRealIdx(idx) + 1 }}
          </td>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB4DC\uB798\uADF8 \uD578\uB4E4 ======================================== -->
          <td style="text-align:center;cursor:grab;color:#ccc;font-size:16px;user-select:none">
            \u2261
          </td>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD589 \uC0C1\uD0DC \uBC43\uC9C0 ======================================= -->
          <td style="text-align:center">
            <span class="badge badge-xs" :class="fnStatusClass(row._row_status)">
              {{ row._row_status }}
            </span>
          </td>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCCB4\uD06C\uBC15\uC2A4 ========================================== -->
          <td style="text-align:center">
            <input type="checkbox" v-model="row._row_check" @click.stop>
          </td>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCE74\uD14C\uACE0\uB9AC\uBA85 (\uB4E4\uC5EC\uC4F0\uAE30 \uD2B8\uB9AC \uD45C\uD604) ============================ -->
          <td style="padding:3px 6px">
            <div style="display:flex;align-items:center">
              <span :style="{ marginLeft:(row._depth*12)+'px', marginRight:'5px', fontWeight:700,
                  fontSize: row._depth===0?'8px':'11px', flexShrink:0, color:fnDepthColor(row._depth) }">
                {{ fnDepthBullet(row._depth) }}
              </span>
              <input class="grid-input" v-model="row.categoryNm" :disabled="row._row_status==='D'"
                  @input="handleSelectAction('categories-rowCellChange', row)" style="flex:1" placeholder="\uCE74\uD14C\uACE0\uB9AC\uBA85">
            </div>
          </td>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uC704\uCE74\uD14C\uACE0\uB9AC ======================================== -->
          <td style="padding:3px 8px">
            <div style="display:flex;align-items:center;gap:4px">
              <span style="flex:1;font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
                  :style="row.parentCategoryId ? 'color:#444' : 'color:#bbb;font-style:italic'">
                {{ row.parentCategoryId ? parentNm(row.parentCategoryId) : '\uCD5C\uC0C1\uC704' }}
              </span>
              <span style="display:inline-flex;align-items:center;flex-shrink:0;">
                <button v-if="row._row_status!=='D'" class="btn btn-secondary btn-xs"
                    style="flex-shrink:0;padding:1px 6px;font-size:11px;color:#e8587a"
                    @click.stop="handleSelectAction('parentModal-open', row)" title="\uC0C1\uC704 \uC120\uD0DD">\u{1F50D}</button>
                <span v-if="row.parentCategoryId != null &amp;&amp; row._row_status!=='D'" title="\uCD5C\uC0C1\uC704\uB85C \uCD08\uAE30\uD654"
                    style="cursor:pointer;color:#bbb;font-size:10px;flex-shrink:0;line-height:1;padding:0 3px;"
                    @click.stop="row.parentCategoryId = null; handleSelectAction('categories-rowCellChange', row)">x</span>
              </span>
            </div>
          </td>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC21C\uC11C ============================================ -->
          <td style="padding:3px 4px">
            <input class="grid-input grid-num" type="number" v-model.number="row.sortOrd"
                :disabled="row._row_status==='D'" @input="handleSelectAction('categories-rowCellChange', row)" style="text-align:center">
          </td>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC124\uBA85 ============================================ -->
          <td style="padding:3px 6px">
            <input class="grid-input" v-model="row.categoryDesc"
                :disabled="row._row_status==='D'" @input="handleSelectAction('categories-rowCellChange', row)" placeholder="\uC124\uBA85">
          </td>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD65C\uC131 ============================================ -->
          <td style="padding:3px 4px;text-align:center">
            <select class="grid-select" v-model="row.categoryStatusCd"
                :disabled="row._row_status==='D'" @change="handleSelectAction('categories-rowCellChange', row)" style="width:58px">
              <option v-for="c in codes.category_statuses" :key="c.codeValue" :value="c.codeValue">
                {{ c.codeLabel }}
              </option>
            </select>
          </td>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD558\uC704 \uCD94\uAC00 ========================================= -->
          <td style="text-align:center;padding:2px">
            <button v-if="row._row_status!=='D' ? (row.categoryId>0) : false" class="btn btn_new" style="padding:1px 5px;font-size:11px;background:#f0f7ff;color:#1677ff;border:1px solid #91caff" title="\uD558\uC704 \uCE74\uD14C\uACE0\uB9AC \uCD94\uAC00" @click.stop="handleSelectAction('categories-rowAddChild', { row, idx: getRealIdx(idx) })">
            +\uD558\uC704
          </button>
        </td>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCDE8\uC18C ============================================ -->
        <td style="text-align:center;padding:2px">
          <button v-if="['U','I','D'].includes(row._row_status)"
                class="btn btn_cancel" @click.stop="handleSelectAction('categories-rowCancel', getRealIdx(idx))">
            \uCDE8\uC18C
          </button>
        </td>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0AD\uC81C ============================================ -->
        <td style="text-align:center;padding:2px">
          <button v-if="row._row_status !== 'D'"
                class="btn btn_row_delete" @click.stop="handleSelectAction('categories-rowDelete', getRealIdx(idx))">
            \uC0AD\uC81C
          </button>
        </td>
      </tr>
    </tbody>
  </table>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD398\uC774\uC9C0\uB124\uC774\uC158 ============================================== -->
      <bo-pager :pager="categoriesGridPager" :on-set-page="n => handleBtnAction('categories-pager-setPage', n)" :on-size-change="() => handleSelectAction('categories-pager-sizeChange')" />
      <bo-excel-down-modal :show="excelModal.show" domain="pdCategory" area-nm="\uCE74\uD14C\uACE0\uB9AC"
        :columns="excelColumns" ui-nm="\uCE74\uD14C\uACE0\uB9AC\uAD00\uB9AC" :params="buildExcelParams()"
        @close="excelModal.show = false" />
    </bo-container>
  </div>
<!-- ===== \u25A1.\u25A1. \uC6B0\uCE21: \uCE74\uD14C\uACE0\uB9AC \uADF8\uB9AC\uB4DC ========================================== -->
<!-- ===== \u25A1. \uC88C \uD2B8\uB9AC + \uC6B0 \uADF8\uB9AC\uB4DC ============================================ -->
<!-- ===== \u25A0. \uC0C1\uC704\uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC (BoModals.js / PdCatParentPickModal) ======== -->
<bo-cm-popup-modal popup-cmd="cmPopup-cat-parent-pick" popup-code="category" clearable :show="catPickerModal.show" :exclude-id="catPickerModal.forCategoryId" :on-callback="fnCallbackModal" />
<!-- ===== \u25A1. \uC0C1\uC704\uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC ============================================ -->
</bo-page>
<!-- ===== \u25A1. \uC0C1\uC704\uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC ============================================ -->
`};
