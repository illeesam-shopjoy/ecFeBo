window.SyAttachMng={name:"SyAttachMng",props:{navigate:{type:Function,required:!0}},setup(U){const{reactive:c,computed:k,onMounted:_}=Vue,m=window.boApp.showToast,N=window.boApp.showConfirm,g=c([]),i=c({loading:!1,error:null}),b=c({date_range_opts:[]}),l=c({pageNo:1,pageSize:20,pageTotalCount:0,pageTotalPage:1,pageNums:[],pageSizes:[10,20,30,50,100,200,500]}),s=c({refTableNm:"",refId:"",searchType:"",searchValue:"",dateRange:"",dateRangeStart:"",dateRangeEnd:""}),y={},p=c({selectedId:null,reloadTrigger:0}),w=k(()=>boUtil.bofGetSiteNm()),x=(e,t={})=>{if(e==="searchParam-list")return E();if(e==="searchParam-reset")return I();if(e==="searchParam-dateRange")return v();if(e==="attaches-pager-setPage")return G(t);console.warn("[handleBtnAction] unknown cmd:",e)},P=(e,t={})=>{if(e==="attaches-rowDelete")return B(t);if(e==="attaches-pager-sizeChange")return O();if(e==="attaches-rowOpen"){p.selectedId=t.attachId,p.reloadTrigger++;return}else console.warn("[handleSelectAction] unknown cmd:",e)},R=(e,t,o)=>{if(e==="attaches-cellClick"&&t==="__no__")return P("attaches-rowOpen",o)},C=()=>{const e=l.pageNo,t=l.pageTotalPage,o=Math.max(1,e-2),h=Math.min(t,o+4);l.pageNums=Array.from({length:h-o+1},(u,n)=>o+n)},v=()=>{boUtil.bofApplyDateRange(s)},r=async()=>{var e,t,o,h,u;i.loading=!0;try{const n={pageNo:l.pageNo,pageSize:l.pageSize,...coUtil.cofOmitEmpty(s)};n.searchValue&&!n.searchType&&(n.searchType="fileNm,attachMemo");const a=(e=(await boApiSvc.syAttach.getPage(n,"\uCCA8\uBD80\uD30C\uC77C\uAD00\uB9AC","\uC870\uD68C")).data)==null?void 0:e.data,T=(a==null?void 0:a.pageList)||(a==null?void 0:a.list)||[];g.splice(0,g.length,...T),l.pageTotalCount=(u=(h=(o=(t=a==null?void 0:a.pageTotalCount)!=null?t:a==null?void 0:a.totalCount)!=null?o:a==null?void 0:a.total)!=null?h:T.length)!=null?u:0,l.pageTotalPage=(a==null?void 0:a.pageTotalPage)||coUtil.cofTotalPage(l),C(),i.error=null}catch(n){console.error("[catch-info]",n),i.error=n.message}finally{i.loading=!1}},M=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["DATE_RANGE_OPT"],{compNm:"SyAttachMng"}),b.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")};_(async()=>{await M(),await z();const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(s).forEach(o=>{!t.includes(o)&&e.has(o)&&(s[o]=e.get(o))}),await r(),Object.assign(y,s)});const E=async()=>{l.pageNo=1,await r()},I=()=>{Object.assign(s,y),l.pageNo=1,r()},G=e=>{e>=1&&e<=l.pageTotalPage&&(l.pageNo=e,r())},O=()=>{l.pageNo=1,r()},B=async e=>{if(await N("\uD30C\uC77C \uC0AD\uC81C",`[${e.fileNm}] \uD30C\uC77C\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{await boApi.delete(`/bo/sy/attach/${e.attachId}`,coUtil.cofApiHdr("\uCCA8\uBD80\uD30C\uC77C\uAD00\uB9AC","\uD30C\uC77C\uC0AD\uC81C")),m("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await r()}catch(o){m(coUtil.cofErrMsg(o),"error",0)}},S=e=>e?e<1024?e+" B":e<1024*1024?(e/1024).toFixed(1)+" KB":(e/(1024*1024)).toFixed(1)+" MB":"0 B",d=c([]),z=async()=>{const e=await coUtil.cofGetAttachRefTableOptions();d.splice(0,d.length,...e.map(t=>({value:t.value,label:t.label})),{value:"sy_attach_grp_legacy",label:"\uB808\uAC70\uC2DC \uCCA8\uBD80\uADF8\uB8F9"})},A=e=>{var t;return((t=d.find(o=>o.value===e))==null?void 0:t.label)||e||"-"},f={};f.fileGrid=[{key:"refTableNm",label:"\uC5F0\uACC4 \uB300\uC0C1",cellStyle:"color:#666;",fmt:(e,t)=>e?`${A(e)} #${t.refId}`:"(\uBBF8\uC5F0\uACC4)"},{key:"fileNm",label:"\uD30C\uC77C\uBA85",style:"word-break:break-all;"},{key:"fileSize",label:"\uD06C\uAE30",style:"width:70px;",fmt:e=>S(e)},{key:"fileExt",label:"\uD655\uC7A5\uC790",style:"width:55px;",cellInnerStyle:"background:#f0f0f0;padding:1px 5px;border-radius:3px;font-size:11px;"},{key:"attachMemo",label:"\uBA54\uBAA8",cellStyle:"color:#888;"},{key:"regDate",label:"\uB4F1\uB85D\uC77C",style:"width:145px;",fmt:e=>coUtil.cofYmdHms(e||"")},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",style:"width:70px;",cellStyle:"color:#2563eb;",fmt:()=>w.value}],f.fileSearch=[{key:"refTableNm",type:"select",options:d,nullLabel:"\uC5F0\uACC4 \uB300\uC0C1 \uC804\uCCB4",width:"150px"},{key:"refId",type:"text",placeholder:"\uAD00\uB828 ID",width:"130px"},{key:"searchType",type:"multiCheck",options:[{value:"fileNm",label:"\uD30C\uC77C\uBA85"},{value:"attachMemo",label:"\uBA54\uBAA8"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"140px"},{key:"searchValue",type:"text",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825",width:"150px"},{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>b.date_range_opts,dateWidth:"140px",onRangeChange:()=>x("searchParam-dateRange")}];const D=c({show:!1});return{columns:f,attaches:g,uiState:i,searchParam:s,fileGridPager:l,detailPanel:p,excelModal:D,buildExcelParams:()=>{const e={...coUtil.cofOmitEmpty(s)};return e.searchValue&&!e.searchType&&(e.searchType="fileNm,attachMemo"),e},handleBtnAction:x,handleSelectAction:P,handleGridCellAction:R,cfSiteNm:w,fnFmtSize:S,fnRefTableNm:A}},template:`
<bo-page title="\uCCA8\uBD80\uD30C\uC77C \uD1B5\uD569\uC870\uD68C" :share-query="searchParam">
  <!-- ===== \u25A0. \uC870\uD68C \uC601\uC5ED ===================================================== -->
  <bo-container>
    <bo-search-area :columns="columns.fileSearch" :param="searchParam"
      @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED ===================================================== -->
  <bo-container title="\uCCA8\uBD80\uD30C\uC77C\uBAA9\uB85D" :count-text="fileGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uD30C\uC77C \uADF8\uB9AC\uB4DC (\uAE30\uBCF8 20\uAC1C \uD398\uC774\uC9C0 + \uD654\uBA74 \uB192\uC774\uC5D0 \uB530\uB77C \uBC18\uC751\uD615\uC73C\uB85C \uD655\uC7A5, \uCD08\uACFC \uC2DC \uB0B4\uBD80 \uC2A4\uD06C\uB864) ===== -->
    <div style="max-height:calc(100vh - 280px);min-height:480px;overflow-y:auto;border:1px solid #eef0f3;border-radius:6px;background:#fff;">
      <bo-grid
        bare
        :columns="columns.fileGrid"
        :rows="attaches"
        row-key="attachId"
        :selected-key="detailPanel.selectedId"
        :loading="uiState.loading"
        :empty-text="uiState.loading ? '\uC870\uD68C \uC911...' : '\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.'"
        row-actions
        @cell-click="e => handleGridCellAction('attaches-cellClick', e.colKey, e.row)">
        <template #row-actions="{ row }">
          <div class="actions">
            <button class="btn btn_row_edit" @click="handleSelectAction('attaches-rowOpen', row)">
              \uC218\uC815
            </button>
            <button class="btn btn_row_delete" @click="handleSelectAction('attaches-rowDelete', row)">
              \uC0AD\uC81C
            </button>
          </div>
        </template>
      </bo-grid>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC800 ===================================================== -->
    <div style="margin-top:6px;white-space:nowrap;overflow-x:auto;">
      <bo-pager :pager="fileGridPager" :on-set-page="n => handleBtnAction('attaches-pager-setPage', n)" :on-size-change="() => handleSelectAction('attaches-pager-sizeChange')"
        style="margin-top:0;min-height:34px;" />
    </div>
    <bo-excel-down-modal :show="excelModal.show" domain="syAttach" area-nm="\uCCA8\uBD80\uD30C\uC77C"
      :columns="columns.fileGrid" ui-nm="\uCCA8\uBD80\uD30C\uC77C\uAD00\uB9AC" :params="buildExcelParams()"
      @close="excelModal.show = false" />
  </bo-container>
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138 (\uD56D\uC0C1 \uD45C\uC2DC) =========================================== -->
  <sy-attach-dtl :key="detailPanel.selectedId + '_' + detailPanel.reloadTrigger"
    :navigate="navigate" :dtl-id="detailPanel.selectedId" />
</bo-page>
`};
