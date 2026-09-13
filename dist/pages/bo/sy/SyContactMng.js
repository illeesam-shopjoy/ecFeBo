window.SyContactMng={name:"SyContactMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(y){const{ref:W,reactive:i,computed:w,onMounted:S,watch:Y}=Vue,b=window.boApp.showToast,A=window.boApp.showConfirm,I=window.boApp.showRefModal,u=i([]),l=i({loading:!1,error:null,sortKey:"",sortDir:"asc"}),p=i({contact_status:[],contact_categories:[],date_range_opts:[]}),f={reg:{asc:"regDate asc",desc:"regDate desc"}},C=(e,a={})=>{if(e==="searchParam-list")return c.pageNo=1,d("DEFAULT");if(e==="searchParam-reset")return Object.assign(r,T),l.sortKey="",l.sortDir="asc",c.pageNo=1,g(),d("DEFAULT");if(e==="searchParam-dateRange")return E();if(e==="contacts-add")return a&&(a.ctrlKey||a.metaKey||a.button===1)?y.openNewWindow("syContactDtl",null,"new"):O();if(e==="detailPanel-close")return x();if(e==="contacts-sort")return k(a);if(e==="contacts-pager-setPage")return $(a);console.warn("[handleBtnAction] unknown cmd:",e)},D=(e,a={})=>{if(e==="contacts-pager-sizeChange")return F();if(e==="contacts-rowRef")return I(a.type,a.id);console.warn("[handleSelectAction] unknown cmd:",e)},v=(e,a,n,s={})=>{if(e==="contacts-cellClick"){if(a==="btn_row_edit")return s&&(s.ctrlKey||s.metaKey||s.button===1)?y.openNewWindow("syContactDtl",n.contactId,"edit"):K(n.contactId);if(a==="btn_row_delete")return j(n);const o=["__no__"];if(s.col&&s.col.link||o.includes(a))return s.ctrlKey||s.metaKey||s.button===1?y.openNewWindow("syContactDtl",n.contactId):G(n.contactId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},r=i({searchType:"",searchValue:"",categoryCd:"",status:"",dateRange:"",dateRangeType:"",dateRangeStart:"",dateRangeEnd:""}),T={},c=i({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),t=i({show:!0,dtlId:"__new__",dtlMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),P=w(()=>boUtil.bofGetSiteNm()),N=w(()=>t.dtlId==="__new__"?null:t.dtlId),R=w(()=>`${t.dtlId}_${t.dtlMode}_${t.resetSeq}`),m=()=>{const{sortKey:e,sortDir:a}=l;return!e||!f[e]?{}:{sort:f[e][a]}},k=e=>{l.sortKey===e?l.sortDir==="asc"?l.sortDir="desc":(l.sortKey="",l.sortDir="asc"):(l.sortKey=e,l.sortDir="asc"),c.pageNo=1,d()},d=async(e="DEFAULT")=>{var a;l.loading=!0;try{const n={pageNo:c.pageNo,pageSize:c.pageSize,...m(),...coUtil.cofOmitEmpty(r)};n.searchValue&&!n.searchType&&(n.searchType="contactTitle,memberNm");const o=(a=(await boApiSvc.syContact.getPage(n,"\uBB38\uC758\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:a.data;u.splice(0,u.length,...(o==null?void 0:o.pageList)||[]),c.pageTotalCount=(o==null?void 0:o.pageTotalCount)||u.length,c.pageTotalPage=(o==null?void 0:o.pageTotalPage)||coUtil.cofTotalPage(c),coUtil.cofBuildPagerNums(c),Object.assign(c.pageCond,(o==null?void 0:o.pageCond)||c.pageCond),l.error=null}catch(n){console.error("[catch-info]",n),l.error=n.message}finally{l.loading=!1}},M=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["CONTACT_STATUS_CD","CONTACT_CATEGORY_KR","DATE_RANGE_OPT"],{compNm:"SyContactMng"}),p.contact_status=e.sgGetGrpCodes("CONTACT_STATUS_CD"),p.contact_categories=e.sgGetGrpCodes("CONTACT_CATEGORY_KR"),p.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")};S(async()=>{const a=new Date().getFullYear();Object.assign(r,{dateRangeType:"reg_date",dateRangeStart:`${a-3}-01-01`,dateRangeEnd:`${a}-12-31`}),await M();const n=new URLSearchParams(window.location.search),s=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(r).forEach(o=>{!s.includes(o)&&n.has(o)&&(r[o]=n.get(o))}),await d("DEFAULT"),Object.assign(T,r)});const E=()=>{boUtil.bofApplyDateRange(r),c.pageNo=1},G=e=>{if(t.dtlId===e&&t.dtlMode==="view"&&t.active){g();return}t.dtlId=e,t.dtlMode="view",t.show=!0,t.active=!0,t.reloadTrigger++},g=()=>{t.show=!0,t.dtlId="__new__",t.dtlMode="view",t.active=!1,t.resetSeq++},K=e=>{t.dtlId=e,t.dtlMode="edit",t.show=!0,t.active=!0,t.reloadTrigger++},O=()=>{t.show=!0,t.dtlId="__new__",t.dtlMode="edit",t.active=!0,t.resetSeq++},x=()=>{g()},L=(e,a={})=>{if(e==="syContactMng"){a.reload&&d("RELOAD"),g();return}if(e==="__cancelEdit__"){if(t.dtlId&&t.dtlId!=="__new__"){t.dtlMode="view";return}g();return}if(e==="__closeDtl__"){g();return}if(e==="__switchToEdit__"){t.dtlMode="edit";return}y.navigate(e,a)},U={\uC694\uCCAD:"badge-orange",\uCC98\uB9AC\uC911:"badge-blue",\uB2F5\uBCC0\uC644\uB8CC:"badge-green",\uCDE8\uC18C\uB428:"badge-gray"},B=e=>coUtil.cofCodeBadge("CONTACT_STATUS_KR",e,U[e]||"badge-gray"),$=e=>{e>=1&&e<=c.pageTotalPage&&(c.pageNo=e,d("PAGE_CLICK"))},F=()=>{c.pageNo=1,d("DEFAULT")},j=async e=>{var s,o;if(!await A("\uC0AD\uC81C",`[${e.contactTitle}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const n=u.findIndex(h=>h.contactId===e.contactId);n!==-1&&u.splice(n,1),t.dtlId===e.contactId&&g();try{const h=await boApiSvc.syContact.remove(e.contactId,"\uBB38\uC758\uAD00\uB9AC","\uC0AD\uC81C");b&&b("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(h){console.error("[catch-info]",h);const V=((o=(s=h.response)==null?void 0:s.data)==null?void 0:o.message)||h.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";b&&b(V,"error",0)}},z=i({show:!1}),q=()=>{const e={...m(),...coUtil.cofOmitEmpty(r)};return e.searchValue&&!e.searchType&&(e.searchType="contactTitle,memberNm"),e},_={};return _.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"contactTitle",label:"\uC81C\uBAA9"},{value:"memberNm",label:"\uD68C\uC6D0\uBA85"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"categoryCd",type:"select",label:"\uCE74\uD14C\uACE0\uB9AC",options:()=>p.contact_categories,nullLabel:"\uCE74\uD14C\uACE0\uB9AC \uC804\uCCB4"},{key:"status",type:"select",label:"\uC0C1\uD0DC",options:()=>p.contact_status,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>p.date_range_opts,onRangeChange:()=>C("searchParam-dateRange")}],_.baseGrid=[{key:"memberNm",label:"\uD68C\uC6D0",refLink:"member",refKey:"memberId"},{key:"categoryCd",label:"\uCE74\uD14C\uACE0\uB9AC",cellInnerClass:"tag"},{key:"contactTitle",label:"\uC81C\uBAA9",link:!0,cellInnerStyle:e=>t.dtlId===e?"color:#e8587a;font-weight:700;":""},{key:"contactStatusCd",label:"\uC0C1\uD0DC",badge:e=>B(e.contactStatusCd)},{key:"regDate",label:"\uB4F1\uB85D\uC77C",sortKey:"reg",fmt:(e,a)=>String(a.regDate||a.contactDate||"").slice(0,10)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;",fmt:()=>P.value}],{excelModal:z,buildExcelParams:q,columns:_,contacts:u,uiState:l,searchParam:r,baseGridPager:c,detailModal:t,handleBtnAction:C,handleSelectAction:D,handleGridCellAction:v,cfDetailEditId:N,cfDetailKey:R,fnRowStyle:e=>t.dtlId===e.contactId?"background:#fff8f9;":"",inlineNavigate:L}},template:`
<bo-page title="\uBB38\uC758\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uBB38\uC758\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <div style="display:flex;gap:6px;">
        <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
        <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
          @click="handleBtnAction('contacts-add', $event)"
          @auxclick="handleBtnAction('contacts-add', $event)">
          + \uC2E0\uADDC
        </button>
      </div>
    </template>
    <bo-grid
      bare
      :columns="columns.baseGrid" :rows="contacts" row-key="contactId" :selected-key="detailModal.dtlId"
      :sort-state="uiState" :row-style="fnRowStyle"
      @sort="key => handleBtnAction('contacts-sort', key)"
      @ref-click="({type,id}) => handleSelectAction('contacts-rowRef', {type, id})"
      grid-id="contacts-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
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
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('contacts-pager-setPage', n)" :on-size-change="() => handleSelectAction('contacts-pager-sizeChange')" />
  </bo-container>
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138: ContactDtl \uC784\uBCA0\uB4DC (\uD56D\uC0C1 \uD45C\uC2DC) =========================== -->
  <sy-contact-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailModal.dtlMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailModal.active"
    :reload-trigger="detailModal.reloadTrigger"
    />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="syContact"
    area-nm="\uBB38\uC758\uAD00\uB9AC" :columns="columns.baseGrid" ui-nm="\uBB38\uC758\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
