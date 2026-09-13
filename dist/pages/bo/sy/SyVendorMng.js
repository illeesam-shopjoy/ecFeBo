window.SyVendorMng={name:"SyVendorMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(b){const{ref:H,reactive:g,computed:_,watch:J,onMounted:I}=Vue,y=window.boApp.showToast,w=window.boApp.showConfirm,h=g([]),v=g({}),a=g({loading:!1,error:null,selectedPath:null,sortKey:"",sortDir:"asc"}),u=g({vendor_status:[],vendor_type_kr:[],date_range_opts:[]}),m={nm:{asc:"vendorNm asc",desc:"vendorNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},S=(e,t={})=>{if(e==="searchParam-list")return s.pageNo=1,i("DEFAULT");if(e==="searchParam-reset")return Object.assign(d,P),a.sortKey="",a.sortDir="asc",a.selectedPath=null,s.pageNo=1,p(),i("DEFAULT");if(e==="searchParam-dateRange")return k();if(e==="vendors-add")return t&&(t.ctrlKey||t.metaKey||t.button===1)?b.openNewWindow("syVendorDtl",null,"new"):x();if(e==="vendors-reload")return i("RELOAD");if(e==="detailPanel-close")return V();if(e==="vendors-sort")return A(t);if(e==="vendors-pager-setPage")return M(t);console.warn("[handleBtnAction] unknown cmd:",e)},C=(e,t={})=>{if(e==="vendors-pager-sizeChange")return O();if(e==="pathTree-select")return a.selectedPath=t,s.pageNo=1,p(),i();console.warn("[handleSelectAction] unknown cmd:",e)},N=(e,t,r,l={})=>{if(e==="vendors-cellClick"){if(t==="btn_row_edit")return l&&(l.ctrlKey||l.metaKey||l.button===1)?b.openNewWindow("syVendorDtl",r.vendorId,"edit"):R(r.vendorId);if(t==="btn_row_delete")return L(r);const o=["__no__"];if(l.col&&l.col.link||o.includes(t))return l.ctrlKey||l.metaKey||l.button===1?b.openNewWindow("syVendorDtl",r.vendorId):E(r.vendorId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},d=g({searchType:"",searchValue:"",vendorTypeCd:"",status:"",dateRange:"",dateRangeType:"",dateRangeStart:"",dateRangeEnd:""}),P={},s=g({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),n=g({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),T=()=>{const{sortKey:e,sortDir:t}=a;return!e||!m[e]?{}:{sort:m[e][t]}},A=e=>{a.sortKey===e?a.sortDir==="asc"?a.sortDir="desc":(a.sortKey="",a.sortDir="asc"):(a.sortKey=e,a.sortDir="asc"),s.pageNo=1,i()},D=async()=>{var e;try{const t=Object.fromEntries(Object.entries(d).filter(([o,c])=>c!==""&&c!==null&&c!==void 0&&o!=="pathId")),l=((e=(await boApiSvc.syVendor.getPathTreeNodeCounts(t,"\uACBD\uB85C\uBCC4\uCE74\uC6B4\uD2B8","\uC870\uD68C")).data)==null?void 0:e.data)||[];Object.keys(v).forEach(o=>{delete v[o]});for(const o of l)o&&o.pathId!=null&&(v[o.pathId]=o.cnt)}catch(t){console.error("[handleLoadPathTreeNodeCounts]",t)}},i=async(e="DEFAULT")=>{var t;a.loading=!0;try{const r={pageNo:s.pageNo,pageSize:s.pageSize,...T(),...a.selectedPath!=null?{pathId:a.selectedPath}:{},...coUtil.cofOmitEmpty(d)};r.searchValue&&!r.searchType&&(r.searchType="vendorNm,corpNo,vendorId");const o=(t=(await boApiSvc.syVendor.getPage(r,"\uD310\uB9E4\uC790\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data;h.splice(0,h.length,...(o==null?void 0:o.pageList)||[]),s.pageTotalCount=(o==null?void 0:o.pageTotalCount)||h.length,s.pageTotalPage=(o==null?void 0:o.pageTotalPage)||coUtil.cofTotalPage(s),coUtil.cofBuildPagerNums(s),Object.assign(s.pageCond,(o==null?void 0:o.pageCond)||s.pageCond),a.error=null,D()}catch(r){console.error("[catch-info]",r),a.error=r.message}finally{a.loading=!1}},k=()=>{boUtil.bofApplyDateRange(d),s.pageNo=1},E=e=>{n.selectedId=e,n.openMode="view",n.active=!0,n.reloadTrigger++},p=()=>{n.selectedId="__new__",n.openMode="view",n.active=!1,n.resetSeq++},R=e=>{n.selectedId=e,n.openMode="edit",n.active=!0,n.reloadTrigger++},x=()=>{n.selectedId="__new__",n.openMode="edit",n.active=!0,n.resetSeq++},V=()=>{p()},G=(e,t={})=>{if(e==="syVendorMng"){t.reload&&i("RELOAD"),p();return}if(e==="__cancelEdit__"){if(n.selectedId&&n.selectedId!=="__new__"){n.openMode="view";return}p();return}if(e==="__closeDtl__"){p();return}if(e==="__switchToEdit__"){n.openMode="edit";return}b.navigate(e,t)},M=e=>{e>=1&&e<=s.pageTotalPage&&(s.pageNo=e,i("PAGE_CLICK"))},O=()=>{s.pageNo=1,i("DEFAULT")},L=async e=>{var l,o;if(!await w("\uC0AD\uC81C",`[${e.vendorNm}] \uC5C5\uCCB4\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const r=h.findIndex(c=>c.vendorId===e.vendorId);r!==-1&&h.splice(r,1),n.selectedId===e.vendorId&&p();try{const c=await boApiSvc.syVendor.remove(e.vendorId,"\uD310\uB9E4\uC790\uAD00\uB9AC","\uC0AD\uC81C");y&&y("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(c){console.error("[catch-info]",c);const Y=((o=(l=c.response)==null?void 0:l.data)==null?void 0:o.message)||c.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";y&&y(Y,"error",0)}},K=g({show:!1}),U=()=>{const e={...T(),...a.selectedPath!=null?{pathId:a.selectedPath}:{},...coUtil.cofOmitEmpty(d)};return e.searchValue&&!e.searchType&&(e.searchType="vendorNm,corpNo,vendorId"),e},B=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["VENDOR_STATUS_CD","VENDOR_TYPE_KR","DATE_RANGE_OPT"],{compNm:"SyVendorMng"}),u.vendor_status=e.sgGetGrpCodes("VENDOR_STATUS_CD"),u.vendor_type_kr=e.sgGetGrpCodes("VENDOR_TYPE_KR"),u.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")};I(async()=>{const t=new Date().getFullYear();Object.assign(d,{dateRangeType:"reg_date",dateRangeStart:`${t-3}-01-01`,dateRangeEnd:`${t}-12-31`}),await B();const r=new URLSearchParams(window.location.search),l=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(d).forEach(o=>{!l.includes(o)&&r.has(o)&&(d[o]=r.get(o))}),await i("DEFAULT"),Object.assign(P,d)});const j=_(()=>boUtil.bofGetSiteNm()),z=_(()=>n.selectedId==="__new__"?null:n.selectedId),$=_(()=>`${n.selectedId}_${n.openMode}_${n.resetSeq}`),F=boUtil.bofVendorTypeBadge,q=boUtil.bofVendorStatusBadge,W=e=>n.selectedId===e.vendorId?"background:#fff8f9;":"",f={};return f.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"vendorNm",label:"\uC5C5\uCCB4\uBA85"},{value:"corpNo",label:"\uC0AC\uC5C5\uC790\uBC88\uD638"},{value:"vendorId",label:"\uC5C5\uCCB4ID"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"vendorTypeCd",type:"select",label:"\uC720\uD615",options:()=>u.vendor_type_kr,nullLabel:"\uC720\uD615 \uC804\uCCB4"},{key:"status",type:"select",label:"\uC0C1\uD0DC",options:()=>u.vendor_status,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>u.date_range_opts,onRangeChange:()=>S("searchParam-dateRange")}],f.baseGrid=[{key:"pathId",label:"\uD45C\uC2DC\uACBD\uB85C",style:"width:170px;max-width:170px;",pathPick:"sy_vendor"},{key:"vendorId",label:"ID"},{key:"vendorTypeCd",label:"\uC5C5\uCCB4\uC720\uD615",badge:e=>F(e.vendorTypeCd)},{key:"vendorNm",label:"\uC5C5\uCCB4\uBA85",sortKey:"nm",link:!0,cellInnerStyle:e=>n.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"ceoNm",label:"\uB300\uD45C\uC790"},{key:"vendorNo",label:"\uC0AC\uC5C5\uC790\uBC88\uD638"},{key:"vendorPhone",label:"\uC804\uD654\uBC88\uD638"},{key:"vendorEmail",label:"\uC774\uBA54\uC77C"},{key:"contractDate",label:"\uACC4\uC57D\uC77C",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"vendorStatusCd",label:"\uC0C1\uD0DC",badge:e=>q(e.vendorStatusCd)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;",fmt:()=>j.value}],{excelModal:K,buildExcelParams:U,columns:f,vendors:h,uiState:a,vendorCounts:v,searchParam:d,baseGridPager:s,detailPanel:n,handleBtnAction:S,handleSelectAction:C,handleGridCellAction:N,cfDetailEditId:z,cfDetailKey:$,fnRowStyle:W,inlineNavigate:G,showToast:y,showConfirm:w}},template:`
<bo-page title="\uC5C5\uCCB4\uC815\uBCF4" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uC88C \uD2B8\uB9AC + \uC6B0 \uC601\uC5ED ============================================= -->
  <div class="bo-2col">
    <!-- ===== \u25A0.\u25A0. \uACBD\uB85C \uD2B8\uB9AC ================================================= -->
    <bo-container bare>
      <bo-path-tree-card biz-cd="sy_vendor" title="\uD45C\uC2DC\uACBD\uB85C" :show-biz-cd="false" :counts="vendorCounts"
        max-height="calc(100vh - 320px)"
        :selected="uiState.selectedPath"
        @select="path => handleSelectAction('pathTree-select', path)" />
    </bo-container>
    <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uADF8\uB9AC\uB4DC ============================================== -->
    <bo-container title="\uAC70\uB798\uCC98\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
      <template #toolbar-actions>
        <div style="display:flex;gap:6px;">
          <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
          <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
            @click="handleBtnAction('vendors-add', $event)"
            @auxclick="handleBtnAction('vendors-add', $event)">
            + \uC2E0\uADDC
          </button>
        </div>
      </template>
      <bo-grid bare max-height="calc(100vh - 320px)"
        :columns="columns.baseGrid" :rows="vendors" row-key="vendorId" :selected-key="detailPanel.selectedId"
        :sort-state="uiState" :row-style="fnRowStyle"
        @sort="key => handleBtnAction('vendors-sort', key)"
        grid-id="vendors-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
        <template #head-actions>
          \uAD00\uB9AC
        </template>
        <template #row-actions="{ row, gridId, pinStyle }">
          <td :style="'white-space:nowrap;' + pinStyle">
            <div class="actions" style="white-space:nowrap;flex-wrap:nowrap;">
              <button class="btn btn_row_edit"
                @click.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)"
                @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)">
                \uC218\uC815
              </button>
              <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', row)">
                \uC0AD\uC81C
              </button>
            </div>
          </td>
        </template>
      </bo-grid>
      <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('vendors-pager-setPage', n)" :on-size-change="() => handleSelectAction('vendors-pager-sizeChange')" />
    </bo-container>
  </div>
  <!-- ===== \u25A0. \uC0C1\uC138 \uD328\uB110 (\uC804\uCCB4 \uD3ED, .bo-2col \uBC14\uAE65, \uD56D\uC0C1 \uD45C\uC2DC) ====================== -->
  <sy-vendor-dtl :key="cfDetailKey" :navigate="inlineNavigate" :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
  />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="syVendor"
    area-nm="\uC5C5\uCCB4\uAD00\uB9AC" :columns="columns.baseGrid" ui-nm="\uC5C5\uCCB4\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
