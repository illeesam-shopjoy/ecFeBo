window.SyBbsMng={name:"SyBbsMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(y){const{ref:Q,reactive:c,computed:_,watch:X,onMounted:I}=Vue,p=window.boApp.showToast,m=window.boApp.showConfirm,b=c([]),w=c([]),l=c({loading:!1,error:null,sortKey:"",sortDir:"asc"}),h=c({bbs_status:[],bbs_post_statuses:[],date_range_opts:[]}),S={nm:{asc:"authorNm asc",desc:"authorNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},i=c({searchType:"",searchValue:"",bbmId:"",status:"",dateRange:"",dateRangeType:"",dateRangeStart:"",dateRangeEnd:""}),T={},n=c({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),t=c({show:!0,dtlId:"__new__",dtlMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),A=(e,a={})=>{if(e==="searchParam-list")return n.pageNo=1,d("DEFAULT");if(e==="searchParam-reset")return Object.assign(i,T),l.sortKey="",l.sortDir="asc",n.pageNo=1,g(),d("DEFAULT");if(e==="searchParam-dateRange")return L();if(e==="bbsList-add")return a&&(a.ctrlKey||a.metaKey||a.button===1)?y.openNewWindow("syBbsDtl",null,"new"):E();if(e==="detailPanel-close")return M();if(e==="bbsList-sort")return D(a);if(e==="bbsList-pager-setPage")return R(a);console.warn("[handleBtnAction] unknown cmd:",e)},P=(e,a={})=>{if(e==="bbsList-pager-sizeChange")return U();console.warn("[handleSelectAction] unknown cmd:",e)},C=(e,a,s,r={})=>{if(e==="bbsList-cellClick"){if(a==="btn_row_edit")return r&&(r.ctrlKey||r.metaKey||r.button===1)?y.openNewWindow("syBbsDtl",s.bbsId,"edit"):k(s.bbsId);if(a==="btn_row_delete")return x(s);const o=["__no__"];if(r.col&&r.col.link||o.includes(a))return r.ctrlKey||r.metaKey||r.button===1?y.openNewWindow("syBbsDtl",s.bbsId):N(s.bbsId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},B=()=>{const{sortKey:e,sortDir:a}=l;return!e||!S[e]?{}:{sort:S[e][a]}},D=e=>{l.sortKey===e?l.sortDir==="asc"?l.sortDir="desc":(l.sortKey="",l.sortDir="asc"):(l.sortKey=e,l.sortDir="asc"),n.pageNo=1,d()},d=async(e="DEFAULT")=>{var a;l.loading=!0;try{const s={pageNo:n.pageNo,pageSize:n.pageSize,...B(),...coUtil.cofOmitEmpty(i)};s.searchValue&&!s.searchType&&(s.searchType="bbsTitle,authorNm");const o=(a=(await boApiSvc.syBbs.getPage(s,"\uAC8C\uC2DC\uD310\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:a.data;b.splice(0,b.length,...(o==null?void 0:o.pageList)||[]),n.pageTotalCount=(o==null?void 0:o.pageTotalCount)||b.length,n.pageTotalPage=(o==null?void 0:o.pageTotalPage)||coUtil.cofTotalPage(n),coUtil.cofBuildPagerNums(n),Object.assign(n.pageCond,(o==null?void 0:o.pageCond)||n.pageCond),l.error=null}catch(s){console.error("[catch-info]",s),l.error=s.message}finally{l.loading=!1}},v=async()=>{var e,a;try{const s=await boApiSvc.syBbm.getPage({pageNo:1,pageSize:1e4},"\uAC8C\uC2DC\uD310\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C");w.splice(0,w.length,...((a=(e=s.data)==null?void 0:e.data)==null?void 0:a.list)||[])}catch(s){console.error("[handleLoadBbmList]",s)}},L=()=>{boUtil.bofApplyDateRange(i),n.pageNo=1},N=e=>{t.dtlId=e,t.dtlMode="view",t.show=!0,t.active=!0,t.reloadTrigger++},g=()=>{t.show=!0,t.dtlId="__new__",t.dtlMode="view",t.active=!1,t.resetSeq++},k=e=>{t.dtlId=e,t.dtlMode="edit",t.show=!0,t.active=!0,t.reloadTrigger++},E=()=>{t.show=!0,t.dtlId="__new__",t.dtlMode="edit",t.active=!0,t.resetSeq++},M=()=>{g()},G=(e,a={})=>{if(e==="syBbsMng"){a.reload&&d("RELOAD"),g();return}if(e==="__cancelEdit__"){if(t.dtlId&&t.dtlId!=="__new__"){t.dtlMode="view";return}g();return}if(e==="__closeDtl__"){g();return}if(e==="__switchToEdit__"){t.dtlMode="edit";return}y.navigate(e,a)},R=e=>{e>=1&&e<=n.pageTotalPage&&(n.pageNo=e,d("PAGE_CLICK"))},U=()=>{n.pageNo=1,d("DEFAULT")},x=async e=>{var r,o;if(!await m("\uC0AD\uC81C",`[${e.bbsTitle}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const s=b.findIndex(u=>u.bbsId===e.bbsId);s!==-1&&b.splice(s,1),t.dtlId===e.bbsId&&g();try{const u=await boApiSvc.syBbs.remove(e.bbsId,"\uAC8C\uC2DC\uD310\uAD00\uB9AC","\uC0AD\uC81C");p&&p("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(u){console.error("[catch-info]",u);const J=((o=(r=u.response)==null?void 0:r.data)==null?void 0:o.message)||u.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";p&&p(J,"error",0)}},O=c({show:!1}),K=()=>{const e={...B(),...coUtil.cofOmitEmpty(i)};return e.searchValue&&!e.searchType&&(e.searchType="bbsTitle,authorNm"),e},F=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["BBS_STATUS","BBS_POST_STATUS","DATE_RANGE_OPT"],{compNm:"SyBbsMng"}),h.bbs_status=e.sgGetGrpCodes("BBS_STATUS"),h.bbs_post_statuses=e.sgGetGrpCodes("BBS_POST_STATUS"),h.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")};I(async()=>{const a=new Date().getFullYear();Object.assign(i,{dateRangeType:"regDate",dateRangeStart:`${a-3}-01-01`,dateRangeEnd:`${a}-12-31`}),await F(),await v();const s=new URLSearchParams(window.location.search),r=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(i).forEach(o=>{!r.includes(o)&&s.has(o)&&(i[o]=s.get(o))}),await d("DEFAULT"),Object.assign(T,i)});const $={PUBLISH:"badge-green",DRAFT:"badge-gray",DELETED:"badge-red",PRIVATE:"badge-orange"},z=e=>coUtil.cofCodeBadge("BBS_POST_STATUS",e,$[e]||"badge-gray"),j=e=>{const a=w.find(s=>s.bbmId===e);return a?a.bbmNm:e},V=e=>t.dtlId===e.bbsId?"background:#fff8f9;":"",q=_(()=>boUtil.bofGetSiteNm()),W=_(()=>w.map(e=>({value:e.bbmId,label:e.bbmNm}))),Y=_(()=>t.dtlId==="__new__"?null:t.dtlId),H=_(()=>`${t.dtlId}_${t.dtlMode}_${t.resetSeq}`),f={};return f.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"bbsTitle",label:"\uC81C\uBAA9"},{value:"authorNm",label:"\uC791\uC131\uC790"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"bbmId",type:"select",label:"\uAC8C\uC2DC\uD310",options:()=>W.value,nullLabel:"\uAC8C\uC2DC\uD310 \uC804\uCCB4"},{key:"status",type:"select",label:"\uC0C1\uD0DC",options:()=>h.bbs_post_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>h.date_range_opts,onRangeChange:()=>A("searchParam-dateRange")}],f.baseGrid=[{key:"bbmId",label:"\uAC8C\uC2DC\uD310",badge:()=>"badge-gray",fmt:e=>j(e)},{key:"bbsTitle",label:"\uC81C\uBAA9",sortKey:"nm",link:!0,cellInnerStyle:e=>t.dtlId===e?"color:#e8587a;font-weight:700;":""},{key:"authorNm",label:"\uC791\uC131\uC790"},{key:"viewCount",label:"\uC870\uD68C\uC218",align:"center"},{key:"commentCount",label:"\uB313\uAE00",align:"center"},{key:"bbsStatusCd",label:"\uC0C1\uD0DC",badge:e=>z(e.bbsStatusCd)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;",fmt:()=>q.value},{key:"regDate",label:"\uB4F1\uB85D\uC77C",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)}],{excelModal:O,buildExcelParams:K,columns:f,bbsList:b,uiState:l,searchParam:i,baseGridPager:n,detailModal:t,handleBtnAction:A,handleSelectAction:P,handleGridCellAction:C,cfDetailEditId:Y,cfDetailKey:H,fnRowStyle:V,inlineNavigate:G,showToast:p,showConfirm:m,handleSearchBbs:d}},template:`
<bo-page title="\uAC8C\uC2DC\uAE00\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ====================================================== -->
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uAC8C\uC2DC\uAE00\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <div style="display:flex;gap:6px;">
        <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
        <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
          @click="handleBtnAction('bbsList-add', $event)"
          @auxclick="handleBtnAction('bbsList-add', $event)">
          + \uC2E0\uADDC
        </button>
      </div>
    </template>
    <bo-grid
      bare
      :columns="columns.baseGrid" :rows="bbsList" row-key="bbsId" :selected-key="detailModal.dtlId"
      :sort-state="uiState" :row-style="fnRowStyle"
      @sort="key => handleBtnAction('bbsList-sort', key)"
      grid-id="bbsList-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
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
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('bbsList-pager-setPage', n)" :on-size-change="() => handleSelectAction('bbsList-pager-sizeChange')" />
  </bo-container>
  <!-- ===== \u25A1. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uC0C1\uC138 \uD328\uB110 (\uC778\uB77C\uC778 \uC784\uBCA0\uB4DC, \uD56D\uC0C1 \uD45C\uC2DC) =================================== -->
  <sy-bbs-dtl :key="cfDetailKey" :navigate="inlineNavigate" :dtl-id="cfDetailEditId"
    :dtl-mode="detailModal.dtlMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailModal.active"
    :reload-trigger="detailModal.reloadTrigger" />
  <!-- ===== \u25A1. \uC0C1\uC138 \uD328\uB110 (\uC778\uB77C\uC778 \uC784\uBCA0\uB4DC, \uD56D\uC0C1 \uD45C\uC2DC) =================================== -->
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="syBbs"
    area-nm="\uAC8C\uC2DC\uD310\uAD00\uB9AC" :columns="columns.baseGrid" ui-nm="\uAC8C\uC2DC\uD310\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
