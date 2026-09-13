window.SyUserMng={name:"SyUserMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(y){const{ref:re,reactive:c,computed:_,onMounted:k,watch:de}=Vue,f=window.boApp.showToast,A=window.boApp.showConfirm,b=c([]),I=c([]),w=c({}),o=c({loading:!1,error:null,boUsers:[],selectedDeptId:null,sortKey:"",sortDir:"asc"}),g=c({user_status:[],user_roles:[],user_date_types:[],date_range_opts:[]}),D={nm:{asc:"userNm asc",desc:"userNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},E=(e,t={})=>{if(e==="searchParam-list")return d.pageNo=1,p("DEFAULT");if(e==="searchParam-reset")return Object.assign(i,C),o.sortKey="",o.sortDir="asc",o.selectedDeptId=null,d.pageNo=1,h(),p("DEFAULT");if(e==="searchParam-dateRange")return K();if(e==="users-add")return t&&(t.ctrlKey||t.metaKey||t.button===1)?y.openNewWindow("syUserDtl",null,"new"):F();if(e==="users-excel-upload"){S.reloadTrigger++,S.show=!0;return}else{if(e==="deptTree-expandAll")return O();if(e==="deptTree-collapseAll")return B();if(e==="deptTree-toggle"){u.has(t)?u.delete(t):u.add(t);return}else{if(e==="detailPanel-close")return $();if(e==="users-sort")return R(t);if(e==="users-pager-setPage")return V(t);console.warn("[handleBtnAction] unknown cmd:",e)}}},v=(e,t={})=>{if(e==="users-pager-sizeChange")return W();if(e==="deptTree-select")return o.selectedDeptId=t,d.pageNo=1,h(),p();console.warn("[handleSelectAction] unknown cmd:",e)},P=(e,t,s,r={})=>{if(e==="users-cellClick"){if(t==="btn_row_edit")return r&&(r.ctrlKey||r.metaKey||r.button===1)?y.openNewWindow("syUserDtl",s.userId,"edit"):z(s.userId);if(t==="btn_row_delete")return Y(s);const a=["__no__"];if(r.col&&r.col.link||a.includes(t))return r.ctrlKey||r.metaKey||r.button===1?y.openNewWindow("syUserDtl",s.userId):j(s.userId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},N=(e,t,s)=>{if(e==="excel-upload"){if(s==null){S.show=!1;return}return p()}else console.warn("[fnCallbackModal] unknown popCmd:",e)},i=c({searchType:"",searchValue:"",role:"",status:"",dateRangeType:"",dateRange:"",dateRangeStart:"",dateRangeEnd:""}),C={},d=c({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),u=c(new Set([null])),l=c({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),S=c({show:!1,reloadTrigger:0}),x=()=>{const{sortKey:e,sortDir:t}=o;return!e||!D[e]?{}:{sort:D[e][t]}},R=e=>{o.sortKey===e?o.sortDir==="asc"?o.sortDir="desc":(o.sortKey="",o.sortDir="asc"):(o.sortKey=e,o.sortDir="asc"),d.pageNo=1,p("DEFAULT")},M=async()=>{var e;try{const t=Object.fromEntries(Object.entries(i).filter(([a,n])=>n!==""&&n!==null&&n!==void 0&&a!=="deptId")),r=((e=(await boApiSvc.syUser.getDeptTreeNodeCounts(t,"\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uBD80\uC11C\uBCC4\uCE74\uC6B4\uD2B8")).data)==null?void 0:e.data)||[];Object.keys(w).forEach(a=>{delete w[a]});for(const a of r)a&&a.deptId!=null&&(w[a.deptId]=a.cnt)}catch(t){console.error("[handleLoadDeptTreeNodeCounts]",t)}},p=async(e="DEFAULT")=>{var t;o.loading=!0;try{const s={pageNo:d.pageNo,pageSize:d.pageSize,...x(),...coUtil.cofOmitEmpty(i)};s.searchValue&&!s.searchType&&(s.searchType="userId,loginId,userNm,userEmail"),o.selectedDeptId!=null&&(s.deptId=o.selectedDeptId);const a=(t=(await boApiSvc.syUser.getPage(s,"\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data;b.splice(0,b.length,...(a==null?void 0:a.pageList)||[]),d.pageTotalCount=(a==null?void 0:a.pageTotalCount)||b.length,d.pageTotalPage=(a==null?void 0:a.pageTotalPage)||coUtil.cofTotalPage(d),coUtil.cofBuildPagerNums(d),Object.assign(d.pageCond,(a==null?void 0:a.pageCond)||d.pageCond),o.error=null,M()}catch(s){console.error("[catch-info]",s),o.error=s.message}finally{o.loading=!1}},G=async()=>{var e;try{const t=await boApiSvc.syDept.getTree("\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uD2B8\uB9AC\uC870\uD68C");I.splice(0,I.length,...((e=t.data)==null?void 0:e.data)||[])}catch(t){console.error("[handleSearchTree]",t)}},L=e=>{const t={};e.forEach(n=>{t[n.deptId]={...n,children:[]}});const s=[];e.forEach(n=>{n.parentDeptId&&t[n.parentDeptId]?t[n.parentDeptId].children.push(t[n.deptId]):s.push(t[n.deptId])});const r=n=>n.sort((m,oe)=>(m.sortOrd||0)-(oe.sortOrd||0)),a=n=>{r(n.children),n.children.forEach(a)};return r(s).forEach(a),{deptId:null,deptNm:"\uC804\uCCB4",children:s}},U=_(()=>L(I)),O=()=>{const e=t=>{u.add(t.deptId),t.children.forEach(e)};U.value.children.forEach(e),u.add(null)},B=()=>{u.clear(),u.add(null)},K=()=>{boUtil.bofApplyDateRange(i),d.pageNo=1},j=e=>{l.selectedId=e,l.openMode="view",l.active=!0,l.reloadTrigger++},h=()=>{l.selectedId="__new__",l.openMode="view",l.active=!1,l.resetSeq++},z=e=>{l.selectedId=e,l.openMode="edit",l.active=!0,l.reloadTrigger++},F=()=>{l.selectedId="__new__",l.openMode="edit",l.active=!0,l.resetSeq++},$=()=>{h()},q=(e,t={})=>{if(e==="syUserMng"){t.reload&&p("RELOAD"),h();return}if(e==="__cancelEdit__"){if(l.selectedId&&l.selectedId!=="__new__"){l.openMode="view";return}h();return}if(e==="__closeDtl__"){h();return}if(e==="__switchToEdit__"){l.openMode="edit";return}y.navigate(e,t)},V=e=>{e>=1&&e<=d.pageTotalPage&&(d.pageNo=e,p("PAGE_CLICK"))},W=()=>{d.pageNo=1,p("DEFAULT")},Y=async e=>{var r,a;if(!await A("\uC0AD\uC81C",`[${e.userNm}] \uC0AC\uC6A9\uC790\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const s=b.findIndex(n=>n.userId===e.userId);s!==-1&&b.splice(s,1),l.selectedId===e.userId&&h();try{await boApiSvc.syUser.remove(e.userId,"\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC0AD\uC81C"),f&&f("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(n){console.error("[catch-info]",n);const m=((a=(r=n.response)==null?void 0:r.data)==null?void 0:a.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";f&&f(m,"error",0)}},H=c({show:!1}),J=()=>{const e={...x(),...coUtil.cofOmitEmpty(i)};return e.searchValue&&!e.searchType&&(e.searchType="userId,loginId,userNm,userEmail"),o.selectedDeptId!=null&&(e.deptId=o.selectedDeptId),e},Q=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["USER_STATUS_CD","USER_ROLE","USER_DATE_TYPE","DATE_RANGE_OPT"],{compNm:"SyUserMng"}),g.user_status=e.sgGetGrpCodes("USER_STATUS_CD"),g.user_roles=e.sgGetGrpCodes("USER_ROLE"),g.user_date_types=e.sgGetGrpCodes("USER_DATE_TYPE"),g.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")};k(async()=>{const t=new Date().getFullYear();Object.assign(i,{dateRangeType:"reg_date",dateRangeStart:`${t-3}-01-01`,dateRangeEnd:`${t}-12-31`}),await Q(),await G(),u.add(null);const s=new URLSearchParams(window.location.search),r=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(i).forEach(a=>{!r.includes(a)&&s.has(a)&&(i[a]=s.get(a))}),await p("DEFAULT"),Object.assign(C,i)});const X=_(()=>boUtil.bofGetSiteNm()),Z=_(()=>l.selectedId==="__new__"?null:l.selectedId),ee=_(()=>`${l.selectedId}_${l.openMode}_${l.resetSeq}`),te={\uC288\uD37C\uAD00\uB9AC\uC790:"badge-red",\uAD00\uB9AC\uC790:"badge-purple",\uC6B4\uC601\uC790:"badge-blue"},ae=e=>coUtil.cofCodeBadge("USER_ROLE",e,te[e]||"badge-gray"),le={\uD65C\uC131:"badge-green",\uBE44\uD65C\uC131:"badge-gray"},se=e=>coUtil.cofCodeBadge("USER_STATUS_CD",e,le[e]||"badge-gray"),ne=e=>l.selectedId===e.userId?"background:#fff8f9;":"",T={};return T.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"userId",label:"\uC0AC\uC6A9\uC790ID"},{value:"loginId",label:"\uB85C\uADF8\uC778ID"},{value:"userNm",label:"\uC774\uB984"},{value:"userEmail",label:"\uC774\uBA54\uC77C"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"role",type:"select",label:"\uAD8C\uD55C",options:()=>g.user_roles,nullLabel:"\uAD8C\uD55C \uC804\uCCB4"},{key:"status",type:"select",label:"\uC0C1\uD0DC",options:()=>g.user_status,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uC77C",typeKey:"dateRangeType",startKey:"dateRangeStart",endKey:"dateRangeEnd",typeOptions:()=>g.user_date_types,rangeOptions:()=>g.date_range_opts,onRangeChange:()=>E("searchParam-dateRange")}],T.baseGrid=[{key:"loginId",label:"\uB85C\uADF8\uC778ID",cellInnerStyle:"background:#f5f5f5;padding:1px 5px;border-radius:3px;font-size:12px;font-family:monospace;"},{key:"userNm",label:"\uC774\uB984",sortKey:"nm",link:!0,cellInnerStyle:e=>l.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"userEmail",label:"\uC774\uBA54\uC77C"},{key:"userPhone",label:"\uC5F0\uB77D\uCC98"},{key:"roleNm",label:"\uAD8C\uD55C",badge:e=>ae(e.roleNm)},{key:"deptNm",label:"\uBD80\uC11C",cellStyle:"color:#666"},{key:"userStatusCd",label:"\uC0C1\uD0DC",badge:e=>se(e.userStatusCd)},{key:"lastLoginDate",label:"\uCD5C\uADFC\uB85C\uADF8\uC778",sortKey:"reg",cellStyle:"color:#888",fmt:e=>e?e.substring(0,10):"-"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;",fmt:()=>X.value}],{excelModal:H,buildExcelParams:J,columns:T,users:b,uiState:o,searchParam:i,baseGridPager:d,detailPanel:l,expanded:u,deptCounts:w,excelUploadModal:S,handleBtnAction:E,handleSelectAction:v,handleGridCellAction:P,fnCallbackModal:N,cfTree:U,cfDetailEditId:Z,cfDetailKey:ee,fnRowStyle:ne,inlineNavigate:q,showToast:f,showConfirm:A}},template:`
<bo-page title="\uC0AC\uC6A9\uC790\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" :columns="columns.baseSearch" :param="searchParam" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
  </bo-container>
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED (\uD2B8\uB9AC + \uBAA9\uB85D) ===================================== -->
  <div class="bo-2col">
    <!-- ===== \u25A0.\u25A0. \uBD80\uC11C \uD2B8\uB9AC ================================================= -->
    <bo-container title="\u{1F4C2} \uBD80\uC11C">
      <template #toolbar-actions>
        <div style="display:flex;gap:4px;">
          <button class="btn btn_expand_all" @click="handleBtnAction('deptTree-expandAll')" style="font-size:11px;">
            \u25BC \uC804\uCCB4\uD3BC\uCE58\uAE30
          </button>
          <button class="btn btn_collapse_all" @click="handleBtnAction('deptTree-collapseAll')" style="font-size:11px;">
            \u25B6 \uC804\uCCB4\uB2EB\uAE30
          </button>
        </div>
      </template>
      <div style="max-height:calc(100vh - 320px);overflow:auto;">
        <bo-dept-tree-node :node="cfTree" :expanded="expanded" :selected="uiState.selectedDeptId"
          :on-toggle="id => handleBtnAction('deptTree-toggle', id)"
          :on-select="id => handleSelectAction('deptTree-select', id)"
          :depth="0" :counts="deptCounts" />
      </div>
    </bo-container>
    <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uADF8\uB9AC\uB4DC ============================================== -->
    <bo-container title="\uC0AC\uC6A9\uC790\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
      <template #toolbar-actions>
        <div style="display:flex;gap:6px;">
          <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
          <button class="btn btn_excel_upload" @click="handleBtnAction('users-excel-upload')">
            \u{1F4E4} \uC5D1\uC140\uC5C5\uB85C\uB4DC
          </button>
          <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
            @click="handleBtnAction('users-add', $event)"
            @auxclick="handleBtnAction('users-add', $event)">
            + \uC2E0\uADDC
          </button>
        </div>
      </template>
      <bo-grid bare max-height="calc(100vh - 320px)"
        :columns="columns.baseGrid" :rows="users" row-key="userId" :selected-key="detailPanel.selectedId"
        :sort-state="uiState" :row-style="fnRowStyle"
        @sort="key => handleBtnAction('users-sort', key)"
        grid-id="users-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
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
      <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('users-pager-setPage', n)" :on-size-change="() => handleSelectAction('users-pager-sizeChange')" />
    </bo-container>
  </div>
  <!-- ===== \u25A0. \uC0C1\uC138 \uD328\uB110 (\uC778\uB77C\uC778 \uC784\uBCA0\uB4DC, \uD56D\uC0C1 \uD45C\uC2DC, \uC804\uCCB4 \uD3ED) ================ -->
  <sy-user-dtl :key="cfDetailKey" :navigate="inlineNavigate" :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    />

  <!-- ===== \u25A0. \uC5D1\uC140 \uC5C5\uB85C\uB4DC \uBAA8\uB2EC (\uB3C4\uBA54\uC778\uC740 \uBAA8\uB2EC \uC548\uC758 select \uB85C \uC804\uD658 \uAC00\uB2A5) ===== -->
  <bo-excel-upload-modal v-if="excelUploadModal.show"
    default-domain="user" modal-name="excel-upload" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="syUser"
    area-nm="\uC0AC\uC6A9\uC790\uAD00\uB9AC" :columns="columns.baseGrid" ui-nm="\uC0AC\uC6A9\uC790\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
