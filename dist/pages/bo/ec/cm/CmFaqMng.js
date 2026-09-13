window.CmFaqMng={name:"CmFaqMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(p){const{ref:W,reactive:i,computed:f,onMounted:C,watch:R}=Vue,g=window.boApp.showToast,_=window.boApp.showConfirm,u=i([]),w=i({}),s=i({loading:!1,error:null,selectedPath:null}),y=i({use_yn:[]}),v=(e,a={})=>{if(e==="searchParam-list")return l.pageNo=1,r("DEFAULT");if(e==="searchParam-reset")return Object.assign(h,q),s.selectedPath=null,l.pageNo=1,d(),r("DEFAULT");if(e==="faqs-add")return a&&(a.ctrlKey||a.metaKey||a.button===1)?p.openNewWindow("cmFaqDtl",null,"new"):D();if(e==="faqs-excel"){I.show=!0;return}else{if(e==="detailPanel-close")return G();if(e==="faqs-pager-setPage")return U(a);console.warn("[handleBtnAction] unknown cmd:",e)}},P=(e,a={})=>{if(e==="faqs-pager-sizeChange")return B();if(e==="pathTree-select")return s.selectedPath=a,l.pageNo=1,d(),r();console.warn("[handleSelectAction] unknown cmd:",e)},S=(e,a,o,c={})=>{if(e==="faqs-cellClick"){if(a==="btn_row_edit")return c&&(c.ctrlKey||c.metaKey||c.button===1)?p.openNewWindow("cmFaqDtl",o.faqId,"edit"):N(o.faqId);if(a==="btn_row_delete")return z(o);const n=["__no__"];if(c.col&&c.col.link||n.includes(a))return c.ctrlKey||c.metaKey||c.button===1?p.openNewWindow("cmFaqDtl",o.faqId):F(o.faqId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},h=i({searchType:"",searchValue:"",useYn:""}),q={},l=i({pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),t=i({show:!0,dtlId:"__new__",dtlMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),I=i({show:!1}),x=f(()=>"cmFaq"),k=f(()=>"FAQ"),M=f(()=>b.baseGrid),A=()=>{const e={...s.selectedPath!=null?{pathId:s.selectedPath}:{},...coUtil.cofOmitEmpty(h)};return e.searchValue&&!e.searchType&&(e.searchType="faqQuestion,faqAnswer"),e},T=()=>A(),r=async(e="DEFAULT")=>{var a;s.loading=!0;try{const o={pageNo:l.pageNo,pageSize:l.pageSize,...A()},n=(a=(await boApiSvc.cmFaq.getPage(o,"FAQ\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:a.data;u.splice(0,u.length,...(n==null?void 0:n.pageList)||[]),l.pageTotalCount=(n==null?void 0:n.pageTotalCount)||u.length,l.pageTotalPage=(n==null?void 0:n.pageTotalPage)||coUtil.cofTotalPage(l),coUtil.cofBuildPagerNums(l),Object.assign(l.pageCond,(n==null?void 0:n.pageCond)||l.pageCond),s.error=null}catch(o){console.error("[catch-info]",o),s.error=o.message}finally{s.loading=!1}E()},E=async()=>{var e;try{const a={...coUtil.cofOmitEmpty(h)};delete a.pathId;const c=((e=(await boApiSvc.cmFaq.getPathTreeNodeCounts(a,"\uACBD\uB85C\uBCC4\uCE74\uC6B4\uD2B8","\uC870\uD68C")).data)==null?void 0:e.data)||[];Object.keys(w).forEach(n=>{delete w[n]});for(const n of c)n&&n.pathId!=null&&(w[n.pathId]=n.cnt)}catch(a){console.error("[handleLoadPathCounts]",a)}},F=e=>{if(t.dtlId===e&&t.dtlMode==="view"){d();return}t.dtlId=e,t.dtlMode="view",t.show=!0,t.active=!0,t.reloadTrigger++},d=()=>{t.show=!0,t.dtlId="__new__",t.dtlMode="view",t.active=!1,t.resetSeq++},N=e=>{t.dtlId=e,t.dtlMode="edit",t.show=!0,t.active=!0,t.reloadTrigger++},D=()=>{t.show=!0,t.dtlId="__new__",t.dtlMode="edit",t.active=!0,t.resetSeq++},G=()=>{d()},L=(e,a={})=>{if(e==="cmFaqMng"){a.reload&&r("RELOAD"),d();return}if(e==="__cancelEdit__"){if(t.dtlId&&t.dtlId!=="__new__"){t.dtlMode="view";return}d();return}if(e==="__closeDtl__"){d();return}if(e==="__switchToEdit__"){t.dtlMode="edit";return}p.navigate(e,a)},U=e=>{e>=1&&e<=l.pageTotalPage&&(l.pageNo=e,r("PAGE_CLICK"))},B=()=>{l.pageNo=1,r("DEFAULT")},z=async e=>{var o,c;if(await _("\uC0AD\uC81C",`[${e.faqQuestion}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{await boApiSvc.cmFaq.remove(e.faqId,"FAQ\uAD00\uB9AC","\uC0AD\uC81C");const n=u.findIndex(m=>m.faqId===e.faqId);n!==-1&&u.splice(n,1),t.dtlId===e.faqId&&d(),g&&g("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(n){console.error("[catch-info]",n);const m=((c=(o=n.response)==null?void 0:o.data)==null?void 0:c.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";g&&g(m,"error",0)}},Q=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["USE_YN"],{compNm:"CmFaqMng"}),y.use_yn=e.sgGetGrpCodes("USE_YN")};C(async()=>{await Q();const e=new URLSearchParams(window.location.search),a=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(h).forEach(o=>{!a.includes(o)&&e.has(o)&&(h[o]=e.get(o))}),await r("DEFAULT"),Object.assign(q,h)});const O=e=>e==="Y"?"badge-green":"badge-gray",Y=e=>t.dtlId===e.faqId?"background:#fff8f9;":"",j=f(()=>boUtil.bofGetSiteNm()),K=f(()=>t.dtlId==="__new__"?null:t.dtlId),V=f(()=>t.dtlMode==="view"&&t.dtlId!=="__new__"),$=f(()=>`${t.dtlId}_${t.dtlMode}_${t.resetSeq}`),b={};return b.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"faqQuestion",label:"\uC9C8\uBB38"},{value:"faqAnswer",label:"\uB2F5\uBCC0"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"useYn",type:"select",label:"\uB178\uCD9C\uC5EC\uBD80",options:()=>y.use_yn,nullLabel:"\uB178\uCD9C\uC5EC\uBD80 \uC804\uCCB4"}],b.baseGrid=[{key:"pathId",label:"\uBD84\uB958(\uD45C\uC2DC\uACBD\uB85C)",style:"width:180px;max-width:180px;",pathPick:"cm_faq",excelKeys:[{key:"pathLabel",label:"\uBD84\uB958"}]},{key:"faqQuestion",label:"\uC9C8\uBB38",link:!0,cellInnerStyle:(e,a)=>t.dtlId===a.faqId?"color:#e8587a;font-weight:700;":""},{key:"faqAnswer",label:"\uB2F5\uBCC0",cellStyle:"color:#666;font-size:12px;",fmt:e=>coUtil.cofStripHtml(e,40)||"-"},{key:"sortOrd",label:"\uC815\uB82C\uC21C\uC11C",align:"center"},{key:"viewCount",label:"\uC870\uD68C\uC218",align:"center",fmt:e=>e||0},{key:"useYn",label:"\uB178\uCD9C\uC5EC\uBD80",badge:e=>O(e.useYn),fmt:e=>e==="Y"?"\uB178\uCD9C":"\uC228\uAE40"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;",fmt:()=>j.value},{key:"regDate",label:"\uB4F1\uB85D\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"}],{columns:b,faqs:u,uiState:s,faqCounts:w,searchParam:h,baseGridPager:l,detailModal:t,excelModal:I,cfExcelDomain:x,cfExcelAreaNm:k,cfExcelColumns:M,buildExcelParams:T,handleBtnAction:v,handleSelectAction:P,handleGridCellAction:S,cfDetailEditId:K,cfIsViewMode:V,cfDetailKey:$,fnRowStyle:Y,inlineNavigate:L,showToast:g,showConfirm:_,handleSearchList:r}},template:`
<bo-page title="FAQ\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED (\uD2B8\uB9AC + \uBAA9\uB85D) ===================================== -->
  <div class="bo-2col">
    <!-- ===== \u25A0.\u25A0. \uC88C: \uD45C\uC2DC\uACBD\uB85C \uD2B8\uB9AC ============================================ -->
    <bo-container bare>
      <bo-path-tree-card biz-cd="cm_faq" title="FAQ \uBD84\uB958" :show-biz-cd="false" :counts="faqCounts"
        max-height="calc(100vh - 320px)"
        :selected="uiState.selectedPath" @select="path => handleSelectAction('pathTree-select', path)" />
    </bo-container>
    <!-- ===== \u25A0.\u25A0. \uC6B0: \uBAA9\uB85D ================================================== -->
    <bo-container title="FAQ\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
      <template #toolbar-actions>
        <button class="btn btn_excel" @click="handleBtnAction('faqs-excel')">
          \u{1F4E5} \uC5D1\uC140
        </button>
        <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
          @click="handleBtnAction('faqs-add', $event)"
          @auxclick="handleBtnAction('faqs-add', $event)">
          + \uC2E0\uADDC
        </button>
      </template>
      <bo-grid bare max-height="calc(100vh - 320px)"
        :columns="columns.baseGrid" :rows="faqs" row-key="faqId" :selected-key="detailModal.dtlId"
        :row-style="fnRowStyle"
        grid-id="faqs-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
        <template #head-actions>
          \uAD00\uB9AC
        </template>
        <template #row-actions="{ row, gridId, pinStyle }">
          <td :style="'white-space:nowrap;' + pinStyle">
            <div class="actions" style="white-space:nowrap;flex-wrap:nowrap;">
              <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)">
                \uC218\uC815
              </button>
              <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', row)">
                \uC0AD\uC81C
              </button>
            </div>
          </td>
        </template>
      </bo-grid>
      <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('faqs-pager-setPage', n)" :on-size-change="() => handleSelectAction('faqs-pager-sizeChange')" />
    </bo-container>
  </div>
  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uC0C1\uC138 \uC778\uB77C\uC778 \uD328\uB110 (\uC804\uCCB4 \uD3ED, \uD56D\uC0C1 \uD45C\uC2DC) ============================ -->
  <cm-faq-dtl :key="cfDetailKey" :navigate="inlineNavigate" :dtl-id="cfDetailEditId" :tab-mode="cfIsViewMode"
    :dtl-mode="detailModal.dtlMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailModal.active"
    :reload-trigger="detailModal.reloadTrigger"
  />
  <!-- ===== \u25A1. \uC0C1\uC138 \uC778\uB77C\uC778 \uD328\uB110 ============================================= -->
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" :domain="cfExcelDomain"
    :area-nm="cfExcelAreaNm" :columns="cfExcelColumns" ui-nm="FAQ\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
