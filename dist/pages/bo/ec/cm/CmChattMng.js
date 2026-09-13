window.CmChattMng={name:"CmChattMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(b){const{ref:W,reactive:i,computed:w,onMounted:S,watch:Y}=Vue,m=window.boApp.showToast,A=window.boApp.showConfirm,P=window.boApp.showRefModal,p=i([]),l=i({loading:!1,error:null,sortKey:"",sortDir:"asc"}),u=i({chatt_message_types:[],chatt_statuses:[],date_range_opts:[]}),f={reg:{asc:"regDate asc",desc:"regDate desc"}},y=(e,t={})=>{if(e==="searchParam-list")return s.pageNo=1,d("SEARCH");if(e==="searchParam-reset")return Object.assign(r,C),l.sortKey="",l.sortDir="asc",s.pageNo=1,g(),d("SEARCH");if(e==="searchParam-dateRange")return v();if(e==="chatts-add")return t&&(t.ctrlKey||t.metaKey||t.button===1)?b.openNewWindow("cmChattDtl",null,"new"):G();if(e==="detailPanel-close")return M();if(e==="chatts-sort")return D(t);if(e==="chatts-pager-setPage")return x(t);console.warn("[handleBtnAction] unknown cmd:",e)},R=(e,t={})=>{if(e==="chatts-pager-sizeChange")return U();if(e==="chatts-rowRef")return P(t.type,t.id);console.warn("[handleSelectAction] unknown cmd:",e)},I=(e,t,n,c={})=>{if(e==="chatts-cellClick"){if(t==="btn_row_edit")return c&&(c.ctrlKey||c.metaKey||c.button===1)?b.openNewWindow("cmChattDtl",n.chattRoomId,"edit"):E(n.chattRoomId);if(t==="btn_row_delete")return K(n);const o=["__no__"];if(c.col&&c.col.link||o.includes(t))return c.ctrlKey||c.metaKey||c.button===1?b.openNewWindow("cmChattDtl",n.chattRoomId):k(n.chattRoomId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},r=i({searchType:"",searchValue:"",dateRangeType:"",dateRange:"",dateRangeStart:"",dateRangeEnd:"",chattStatusCd:""}),C={},s=i({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),a=i({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),v=()=>{boUtil.bofApplyDateRange(r),s.pageNo=1},T=()=>{const{sortKey:e,sortDir:t}=l;return!e||!f[e]?{}:{sort:f[e][t]}},D=e=>{l.sortKey===e?l.sortDir==="asc"?l.sortDir="desc":(l.sortKey="",l.sortDir="asc"):(l.sortKey=e,l.sortDir="asc"),s.pageNo=1,d()},d=async(e="DEFAULT")=>{var t;l.loading=!0;try{const n={pageNo:s.pageNo,pageSize:s.pageSize,...T(),...coUtil.cofOmitEmpty(r)};n.searchValue&&!n.searchType&&(n.searchType="memberNm,subject");const o=(t=(await boApiSvc.cmChatt.getPage(n,"\uCC44\uD305\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data;p.splice(0,p.length,...(o==null?void 0:o.pageList)||[]),s.pageTotalCount=(o==null?void 0:o.pageTotalCount)||0,s.pageTotalPage=(o==null?void 0:o.pageTotalPage)||coUtil.cofTotalPage(s),coUtil.cofBuildPagerNums(s),Object.assign(s.pageCond,(o==null?void 0:o.pageCond)||s.pageCond),l.error=null}catch(n){console.error("[catch-info]",n),l.error=n.message}finally{l.loading=!1}},k=e=>{a.selectedId=e,a.openMode="view",a.active=!0,a.reloadTrigger++},g=()=>{a.selectedId="__new__",a.openMode="view",a.active=!1,a.resetSeq++},E=e=>{a.selectedId=e,a.openMode="edit",a.active=!0,a.reloadTrigger++},G=()=>{a.selectedId="__new__",a.openMode="edit",a.active=!0,a.resetSeq++,a.reloadTrigger++},M=()=>{g()},N=(e,t={})=>{if(e==="cmChattMng"){t.reload&&d("RELOAD"),g();return}if(e==="__cancelEdit__"){if(a.selectedId&&a.selectedId!=="__new__"){a.openMode="view";return}g();return}if(e==="__closeDtl__"){g();return}if(e==="__switchToEdit__"){a.openMode="edit";return}b.navigate(e,t)},x=e=>{e>=1&&e<=s.pageTotalPage&&(s.pageNo=e,d("PAGE_CLICK"))},U=()=>{s.pageNo=1,d("DEFAULT")},K=async e=>{var c,o;if(!await A("\uC0AD\uC81C",`[${e.subject}] \uCC44\uD305\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const n=p.findIndex(h=>h.chattRoomId===e.chattRoomId);n!==-1&&p.splice(n,1),a.selectedId===e.chattRoomId&&g();try{const h=await boApiSvc.cmChatt.remove(e.chattRoomId,"\uCC44\uD305\uAD00\uB9AC","\uC0AD\uC81C");m&&m("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(h){console.error("[catch-info]",h);const V=((o=(c=h.response)==null?void 0:c.data)==null?void 0:o.message)||h.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";m&&m(V,"error",0)}},L=i({show:!1}),B=()=>{const e={...T(),...coUtil.cofOmitEmpty(r)};return e.searchValue&&!e.searchType&&(e.searchType="memberNm,subject"),e},O=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["CHATT_MESSAGE_TYPE","CHATT_STATUS","DATE_RANGE_OPT"],{compNm:"CmChattMng"}),u.chatt_message_types=e.sgGetGrpCodes("CHATT_MESSAGE_TYPE"),u.chatt_statuses=e.sgGetGrpCodes("CHATT_STATUS"),u.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")};S(async()=>{const t=new Date().getFullYear();Object.assign(r,{dateRangeType:"reg_date",dateRangeStart:`${t-3}-01-01`,dateRangeEnd:`${t}-12-31`}),await O();const n=new URLSearchParams(window.location.search),c=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(r).forEach(o=>{!c.includes(o)&&n.has(o)&&(r[o]=n.get(o))}),await d("DEFAULT"),Object.assign(C,r)});const j=w(()=>boUtil.bofGetSiteNm()),$=w(()=>a.selectedId==="__new__"?null:a.selectedId),z=w(()=>`${a.selectedId}_${a.openMode}_${a.resetSeq}`),H={\uC9C4\uD589\uC911:"badge-green",\uC885\uB8CC:"badge-gray"},q=e=>coUtil.cofCodeBadge("CHATT_STATUS",e,H[e]||"badge-gray"),F=e=>a.selectedId===e.chattRoomId?"active":"",_={};return _.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"memberNm",label:"\uD68C\uC6D0\uBA85"},{value:"subject",label:"\uC81C\uBAA9"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"chattStatusCd",type:"select",label:"\uC0C1\uD0DC",options:()=>u.chatt_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"dateRange",type:"dateRange",label:"\uAE30\uAC04",typeKey:"dateRangeType",startKey:"dateRangeStart",endKey:"dateRangeEnd",typeOptions:()=>[{value:"reg_date",label:"\uB4F1\uB85D\uC77C"},{value:"upd_date",label:"\uC218\uC815\uC77C"}],rangeOptions:()=>u.date_range_opts,onRangeChange:()=>y("searchParam-dateRange")}],_.baseGrid=[{key:"memberNm",label:"\uD68C\uC6D0",refLink:"member",refKey:"memberId"},{key:"subject",label:"\uC81C\uBAA9",link:!0,cellInnerStyle:e=>a.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"lastMsgDate",label:"\uB9C8\uC9C0\uB9C9 \uBA54\uC2DC\uC9C0",cellStyle:"max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#888",fmt:e=>e||"-"},{key:"msgCnt",label:"\uBA54\uC2DC\uC9C0\uC218",style:"width:80px;",fmt:(e,t)=>(t.adminUnreadCnt||0)+(t.memberUnreadCnt||0)+"\uAC1C"},{key:"unread",label:"\uBBF8\uC77D\uC74C",style:"width:80px;",badge:e=>e.memberUnreadCnt>0?"badge-red":"badge-gray",fmt:(e,t)=>t.memberUnreadCnt>0?t.memberUnreadCnt:0},{key:"chattStatusCd",label:"\uC0C1\uD0DC",style:"width:90px;",badge:e=>q(e.chattStatusCd)},{key:"regDate",label:"\uC77C\uC2DC",style:"width:140px;",sortKey:"reg",fmt:e=>e?String(e).slice(0,16):"-"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",style:"width:110px;",cellStyle:"color:#2563eb;",fmt:()=>j.value}],{columns:_,excelModal:L,buildExcelParams:B,chatts:p,uiState:l,searchParam:r,baseGridPager:s,detailPanel:a,handleBtnAction:y,handleSelectAction:R,handleGridCellAction:I,cfDetailEditId:$,cfDetailKey:z,fnGridRowClass:F,inlineNavigate:N}},template:`
<bo-page title="\uCC44\uD305\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 ======================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ======================================================== -->
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uCC44\uD305\uBAA9\uB85D" :count-text="'\uCD1D ' + baseGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">
        \u{1F4E5} \uC5D1\uC140
      </button>
      <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
        @click="handleBtnAction('chatts-add', $event)"
        @auxclick="handleBtnAction('chatts-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <bo-grid bare :columns="columns.baseGrid" :rows="chatts" row-key="chattRoomId" :selected-key="detailPanel.selectedId"
      :sort-state="uiState"
      :row-class="fnGridRowClass" empty-text="\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
      @sort="key => handleBtnAction('chatts-sort', key)"
      @ref-click="ref => handleSelectAction('chatts-rowRef', ref)"
      grid-id="chatts-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" row-actions
            table-max-height="540px">
      <template #row-actions="{ row, gridId }">
        <div class="actions">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', row)">
            \uC0AD\uC81C
          </button>
        </div>
      </template>
    </bo-grid>
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('chatts-pager-setPage', n)" :on-size-change="() => handleSelectAction('chatts-pager-sizeChange')" />
  </bo-container>
  <!-- ===== \u25A1. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138: ChattDtl \uC784\uBCA0\uB4DC (\uD56D\uC0C1 \uD45C\uC2DC) ============================ -->
  <cm-chatt-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    />
  <!-- ===== \u25A1. \uD558\uB2E8 \uC0C1\uC138: ChattDtl \uC784\uBCA0\uB4DC ===================================== -->
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="cmChatt"
    area-nm="\uCC44\uD305\uAD00\uB9AC" :columns="columns.baseGrid" ui-nm="\uCC44\uD305\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
