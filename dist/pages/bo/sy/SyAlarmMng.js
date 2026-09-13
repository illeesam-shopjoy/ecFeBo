window.SyAlarmMng={name:"SyAlarmMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(y){const{ref:ne,reactive:g,computed:w,onMounted:D,watch:re}=Vue,d=window.boApp.showToast,P=window.boApp.showConfirm,b=g([]),f=g({}),n=g({loading:!1,error:null,selectedPath:null,sortKey:"",sortDir:"asc"}),m=g({alarm_type:[],alarm_status:[],date_range_opts:[]}),S={nm:{asc:"alarmTitle asc",desc:"alarmTitle desc"},reg:{asc:"alarmSendDate asc",desc:"alarmSendDate desc"}},T=(e,a={})=>{if(e==="searchParam-list")return s.pageNo=1,p("DEFAULT");if(e==="searchParam-reset")return Object.assign(i,M),n.sortKey="",n.sortDir="asc",n.selectedPath=null,s.pageNo=1,h(),p("DEFAULT");if(e==="searchParam-dateRange")return N();if(e==="alarms-add")return a&&(a.ctrlKey||a.metaKey||a.button===1)?y.openNewWindow("syAlarmDtl",null,"new"):K();if(e==="detailPanel-close")return O();if(e==="pathModal-close")return v();if(e==="alarms-sort")return L(a);if(e==="alarms-pager-setPage")return z(a);console.warn("[handleBtnAction] unknown cmd:",e)},C=(e,a={})=>{if(e==="alarms-pager-sizeChange")return F();if(e==="pathTree-select")return n.selectedPath=a,s.pageNo=1,h(),p();if(e==="pathModal-open")return x(a);if(e==="pathModal-pick")return _(a);console.warn("[handleSelectAction] unknown cmd:",e)},E=(e,a,o,r={})=>{if(e==="alarms-cellClick"){if(a==="btn_row_edit")return r&&(r.ctrlKey||r.metaKey||r.button===1)?y.openNewWindow("syAlarmDtl",o.alarmId,"edit"):B(o.alarmId);if(a==="btn_row_delete")return $(o);const l=["__no__"];if(r.col&&r.col.link||l.includes(a))return r.ctrlKey||r.metaKey||r.button===1?y.openNewWindow("syAlarmDtl",o.alarmId):U(o.alarmId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},R=(e,a,o)=>{if(e==="cmPopup-path-pick")return o==null?v():_(o);console.warn("[fnCallbackModal] unknown popCmd:",e)},i=g({searchType:"",searchValue:"",typeCd:"",status:"",dateRange:"",dateRangeStart:"",dateRangeEnd:""}),M={},s=g({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),u=g({show:!1,row:null}),t=g({show:!0,dtlId:"__new__",dtlMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),k=()=>{const{sortKey:e,sortDir:a}=n;return!e||!S[e]?{}:{sort:S[e][a]}},L=e=>{n.sortKey===e?n.sortDir==="asc"?n.sortDir="desc":(n.sortKey="",n.sortDir="asc"):(n.sortKey=e,n.sortDir="asc"),s.pageNo=1,p()},I=async()=>{var e;try{const a=Object.fromEntries(Object.entries(i).filter(([l,c])=>c!==""&&c!==null&&c!==void 0&&l!=="pathId")),r=((e=(await boApiSvc.syAlarm.getPathTreeNodeCounts(a,"\uACBD\uB85C\uBCC4\uCE74\uC6B4\uD2B8","\uC870\uD68C")).data)==null?void 0:e.data)||[];Object.keys(f).forEach(l=>{delete f[l]});for(const l of r)l&&l.pathId!=null&&(f[l.pathId]=l.cnt)}catch(a){console.error("[handleLoadPathTreeNodeCounts]",a)}},p=async(e="DEFAULT")=>{var a;n.loading=!0;try{const o={pageNo:s.pageNo,pageSize:s.pageSize,...k(),...n.selectedPath!=null?{pathId:n.selectedPath}:{},...coUtil.cofOmitEmpty(i)};o.searchValue&&!o.searchType&&(o.searchType="alarmTitle,alarmMsg");const l=(a=(await boApiSvc.syAlarm.getPage(o,"\uC54C\uB78C\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:a.data;b.splice(0,b.length,...(l==null?void 0:l.pageList)||[]),s.pageTotalCount=(l==null?void 0:l.pageTotalCount)||b.length,s.pageTotalPage=(l==null?void 0:l.pageTotalPage)||coUtil.cofTotalPage(s),coUtil.cofBuildPagerNums(s),Object.assign(s.pageCond,(l==null?void 0:l.pageCond)||s.pageCond),n.error=null,I()}catch(o){console.error("[catch-info]",o),n.error=o.message}finally{n.loading=!1}},x=e=>{u.row=e,u.show=!0},v=()=>{u.show=!1,u.row=null},_=async e=>{var r,l;const a=u.row;if(!a||!a.alarmId)return;const o=a.pathId;a.pathId=e;try{await boApiSvc.syAlarm.update(a.alarmId,{pathId:e},"\uC54C\uB9BC\uAD00\uB9AC","\uD45C\uC2DC\uACBD\uB85C\uBCC0\uACBD"),d==null||d("\uD45C\uC2DC\uACBD\uB85C\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),I()}catch(c){console.error("[onPathPicked] save failed",c),a.pathId=o,d==null||d(((l=(r=c.response)==null?void 0:r.data)==null?void 0:l.message)||"\uD45C\uC2DC\uACBD\uB85C \uC800\uC7A5 \uC2E4\uD328","error",0)}},G=e=>boUtil.bofGetPathLabel(e)||(e==null?"":"#"+e),N=()=>{boUtil.bofApplyDateRange(i),s.pageNo=1},U=e=>{if(t.dtlId===e&&t.dtlMode==="view"){h();return}t.dtlId=e,t.dtlMode="view",t.show=!0,t.active=!0,t.reloadTrigger++},h=()=>{t.show=!0,t.dtlId="__new__",t.dtlMode="view",t.active=!1,t.resetSeq++},B=e=>{t.dtlId=e,t.dtlMode="edit",t.show=!0,t.active=!0,t.reloadTrigger++},K=()=>{t.show=!0,t.dtlId="__new__",t.dtlMode="edit",t.active=!0,t.resetSeq++},O=()=>{h()},j=(e,a={})=>{if(e==="syAlarmMng"){a.reload&&p("RELOAD"),h();return}if(e==="__cancelEdit__"){if(t.dtlId&&t.dtlId!=="__new__"){t.dtlMode="view";return}h();return}if(e==="__closeDtl__"){h();return}if(e==="__switchToEdit__"){t.dtlMode="edit";return}y.navigate(e,a)},z=e=>{e>=1&&e<=s.pageTotalPage&&(s.pageNo=e,p("PAGE_CLICK"))},F=()=>{s.pageNo=1,p("DEFAULT")},$=async e=>{var r,l;if(!await P("\uC0AD\uC81C",`[${e.alarmTitle}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const o=b.findIndex(c=>c.alarmId===e.alarmId);o!==-1&&b.splice(o,1),t.dtlId===e.alarmId&&h();try{const c=await boApiSvc.syAlarm.remove(e.alarmId,"\uC54C\uB78C\uAD00\uB9AC","\uC0AD\uC81C");d&&d("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(c){console.error("[catch-info]",c);const oe=((l=(r=c.response)==null?void 0:r.data)==null?void 0:l.message)||c.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";d&&d(oe,"error",0)}},Y=g({show:!1}),V=()=>{const e={...k(),...n.selectedPath!=null?{pathId:n.selectedPath}:{},...coUtil.cofOmitEmpty(i)};return e.searchValue&&!e.searchType&&(e.searchType="alarmTitle,alarmMsg"),e},q=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["ALARM_TYPE_CD","ALARM_STATUS","DATE_RANGE_OPT"],{compNm:"SyAlarmMng"}),m.alarm_type=e.sgGetGrpCodes("ALARM_TYPE_CD"),m.alarm_status=e.sgGetGrpCodes("ALARM_STATUS"),m.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")};D(async()=>{const a=new Date().getFullYear();Object.assign(i,{dateRangeStart:`${a-3}-01-01`,dateRangeEnd:`${a}-12-31`}),await q();const o=new URLSearchParams(window.location.search),r=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(i).forEach(l=>{!r.includes(l)&&o.has(l)&&(i[l]=o.get(l))}),await p("DEFAULT"),Object.assign(M,i)});const W={\uBC1C\uC1A1\uC644\uB8CC:"badge-green",\uC608\uC57D:"badge-blue",\uC2E4\uD328:"badge-red",\uC784\uC2DC:"badge-gray"},H=e=>coUtil.cofCodeBadge("ALARM_STATUS",e,W[e]||"badge-gray"),J={\uD478\uC2DC:"badge-blue",\uC774\uBA54\uC77C:"badge-orange",SMS:"badge-green",\uC778\uC571:"badge-gray"},Q=e=>coUtil.cofCodeBadge("ALARM_TYPE_CD",e,J[e]||"badge-gray"),X={\uC804\uCCB4:"badge-red",VIP:"badge-orange",\uC6B0\uC218:"badge-blue",\uC77C\uBC18:"badge-gray"},Z=e=>coUtil.cofCodeBadge("ALARM_TARGET_TYPE",e,X[e]||"badge-gray"),ee=e=>t.dtlId===e.alarmId?"background:#fff8f9;":"",ae=w(()=>boUtil.bofGetSiteNm()),te=w(()=>t.dtlId==="__new__"?null:t.dtlId),le=w(()=>`${t.dtlId}_${t.dtlMode}_${t.resetSeq}`),A={};return A.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"alarmTitle",label:"\uC81C\uBAA9"},{value:"alarmMsg",label:"\uBA54\uC2DC\uC9C0"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"typeCd",type:"select",label:"\uC720\uD615",options:()=>m.alarm_type,nullLabel:"\uC720\uD615 \uC804\uCCB4"},{key:"status",type:"select",label:"\uC0C1\uD0DC",options:()=>m.alarm_status,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"dateRange",type:"dateRange",label:"\uBC1C\uC1A1\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>m.date_range_opts,onRangeChange:()=>T("searchParam-dateRange")}],A.baseGrid=[{key:"pathId",label:"\uD45C\uC2DC\uACBD\uB85C",style:"width:170px;max-width:170px;",pathLabelOpen:{label:G,open:e=>C("pathModal-open",e),clear:e=>{u.row=e,_(null)},placeholder:"\uACBD\uB85C \uC120\uD0DD..."}},{key:"alarmTypeCd",label:"\uC720\uD615",badge:e=>Q(e.alarmTypeCd)},{key:"alarmTitle",label:"\uC81C\uBAA9",sortKey:"nm",link:!0,cellInnerStyle:e=>t.dtlId===e?"color:#e8587a;font-weight:700;":""},{key:"alarmMsg",label:"\uBA54\uC2DC\uC9C0",cellStyle:"max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"},{key:"targetTypeCd",label:"\uB300\uC0C1",badge:e=>Z(e.targetTypeCd)},{key:"alarmSendDate",label:"\uBC1C\uC1A1\uC77C",fmt:e=>e||"-"},{key:"alarmStatusCd",label:"\uC0C1\uD0DC",badge:e=>H(e.alarmStatusCd)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;",fmt:()=>ae.value},{key:"regDate",label:"\uB4F1\uB85D\uC77C",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"}],{excelModal:Y,buildExcelParams:V,columns:A,alarms:b,uiState:n,alarmCounts:f,searchParam:i,baseGridPager:s,detailModal:t,pathPickModal:u,handleBtnAction:T,handleSelectAction:C,handleGridCellAction:E,fnCallbackModal:R,cfDetailEditId:te,cfDetailKey:le,fnRowStyle:ee,inlineNavigate:j,showToast:d,showConfirm:P}},template:`
<bo-page title="\uC54C\uB9BC\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ====================================================== -->
  <!-- ===== \u25A0. \uC88C \uD2B8\uB9AC + \uC6B0 \uC601\uC5ED ============================================= -->
  <div class="bo-2col">
    <!-- ===== \u25A0.\u25A0. \uACBD\uB85C \uD2B8\uB9AC ================================================= -->
    <bo-container bare>
      <bo-path-tree-card biz-cd="sy_alarm" title="\uD45C\uC2DC\uACBD\uB85C" :show-biz-cd="false" :counts="alarmCounts"
        max-height="calc(100vh - 320px)"
        :selected="uiState.selectedPath" @select="path => handleSelectAction('pathTree-select', path)" />
    </bo-container>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uADF8\uB9AC\uB4DC ============================================ -->
    <bo-container title="\uC54C\uB9BC\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
      <template #toolbar-actions>
        <div style="display:flex;gap:6px;">
          <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
          <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
            @click="handleBtnAction('alarms-add', $event)"
            @auxclick="handleBtnAction('alarms-add', $event)">
            + \uC2E0\uADDC
          </button>
        </div>
      </template>
      <bo-grid bare max-height="calc(100vh - 320px)"
        :columns="columns.baseGrid" :rows="alarms" row-key="alarmId" :selected-key="detailModal.dtlId"
        :sort-state="uiState" :row-style="fnRowStyle"
        @sort="key => handleBtnAction('alarms-sort', key)"
        grid-id="alarms-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
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
      <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('alarms-pager-setPage', n)" :on-size-change="() => handleSelectAction('alarms-pager-sizeChange')" />
    </bo-container>
  </div>
  <!-- ===== \u25A1. \uC88C \uD2B8\uB9AC + \uC6B0 \uC601\uC5ED ============================================= -->
  <!-- ===== \u25A0. \uC0C1\uC138 \uC778\uB77C\uC778 \uD328\uB110 (.bo-2col \uBC14\uAE65 \u2192 \uC804\uCCB4 \uD3ED, \uD56D\uC0C1 \uD45C\uC2DC) ===================== -->
  <sy-alarm-dtl :key="cfDetailKey" :navigate="inlineNavigate" :dtl-id="cfDetailEditId"
    :dtl-mode="detailModal.dtlMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailModal.active"
    :reload-trigger="detailModal.reloadTrigger" />
  <!-- ===== \u25A0. \uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
  <bo-cm-popup-modal v-if="pathPickModal ? (pathPickModal.show) : false" popup-cmd="cmPopup-path-pick" popup-code="path" result-type="id" :init-param="{ bizCd: 'sy_alarm' }" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="syAlarm"
    area-nm="\uC54C\uB9BC\uAD00\uB9AC" :columns="columns.baseGrid" ui-nm="\uC54C\uB9BC\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
