window.PmEventMng={name:"PmEventMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}},initSearchValue:{type:String,default:null}},setup(f){const{ref:X,reactive:s,computed:u,watch:Z,onMounted:A}=Vue,h=window.boApp.showToast,E=window.boApp.showConfirm,ee=window.boApp.showRefModal,b=s([]),d=s({loading:!1,error:null,tabMode:"list",sortKey:"",sortDir:"asc"}),y=s({event_statuses:[],date_range_opts:[]}),_=s([]),i=s({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),n=s({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),c=(e,a={})=>{if(e==="searchParam-list")return i.pageNo=1,g("SEARCH");if(e==="searchParam-reset")return Object.assign(l,P),d.sortKey="",d.sortDir="asc",i.pageNo=1,v(),g("SEARCH");if(e==="searchParam-dateRange")return G();if(e==="events-add")return a&&(a.ctrlKey||a.metaKey||a.button===1)?f.openNewWindow("pmEventDtl",null,"new"):K();if(e==="events-excel"){S.show=!0;return}else if(e==="tab-mode"){d.tabMode=a;return}else{if(e==="detailPanel-close")return V();if(e==="events-sort")return R(a);if(e==="events-pager-setPage")return $(a);e==="mdModal-open"?p.isMdPick=!0:e==="searchParam-mdClear"?(l.mdUserId="",l.mdUserNm=""):e==="prodModal-open"?p.isProdPick=!0:e==="searchParam-prodClear"?(l.prodId="",l.prodNm=""):e==="vendorModal-open"?p.isVendorPick=!0:e==="searchParam-vendorClear"?(l.vendorId="",l.vendorNm=""):console.warn("[handleBtnAction] unknown cmd:",e)}},M=(e,a={})=>{if(e==="events-pager-sizeChange")return q();if(e==="events-rowView")return I(a);console.warn("[handleSelectAction] unknown cmd:",e)},N=(e,a,t,o={})=>{if(e==="events-cellClick"){if(a==="btn_row_edit")return o&&(o.ctrlKey||o.metaKey||o.button===1)?f.openNewWindow("pmEventDtl",t.eventId,"edit"):U(t.eventId);if(a==="btn_row_delete")return j(t);const r=["__no__"];if(o.col&&o.col.link||r.includes(a))return o.ctrlKey||o.metaKey||o.button===1?f.openNewWindow("pmEventDtl",t.eventId):I(t.eventId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},T=(e,a,t)=>{e==="cmPopup-userMd-pick"?(l.mdUserId=(t==null?void 0:t.selId)||"",l.mdUserNm=(t==null?void 0:t.selName)||"",p.isMdPick=!1):e==="cmPopup-prod-pick"?(l.prodId=(t==null?void 0:t.selId)||"",l.prodNm=(t==null?void 0:t.selName)||"",p.isProdPick=!1):e==="cmPopup-vendor-pick"&&(l.vendorId=(t==null?void 0:t.selId)||"",l.vendorNm=(t==null?void 0:t.selName)||"",p.isVendorPick=!1)},l=s({searchValue:"",dateRange:"",dateRangeType:"",dateRangeStart:"",dateRangeEnd:"",eventStatusCd:"",mdUserId:"",mdUserNm:"",prodId:"",prodNm:"",vendorId:"",vendorNm:""}),P={},p=s({isMdPick:!1,isProdPick:!1,isVendorPick:!1}),D=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["EVENT_STATUS_KR","DATE_RANGE_OPT"],{compNm:"PmEventMng"});try{y.event_statuses=e.sgGetGrpCodes("EVENT_STATUS_KR"),y.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")}catch(a){console.error("[fnLoadCodes]",a)}_.splice(0,_.length,...await window.boUtil.bofLoadSiteOptions())},k={nm:{asc:"eventNm asc",desc:"eventNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},x=()=>{const{sortKey:e,sortDir:a}=d;return!e||!k[e]?{}:{sort:k[e][a]}},R=e=>{d.sortKey===e?d.sortDir==="asc"?d.sortDir="desc":(d.sortKey="",d.sortDir="asc"):(d.sortKey=e,d.sortDir="asc"),i.pageNo=1,g()},g=async(e="DEFAULT")=>{var a;d.loading=!0;try{const o=(a=(await boApiSvc.pmEvent.getPage({pageNo:i.pageNo,pageSize:i.pageSize,...x(),...coUtil.cofOmitEmpty(l)},"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:a.data;b.splice(0,b.length,...(o==null?void 0:o.pageList)||[]),i.pageTotalCount=(o==null?void 0:o.pageTotalCount)||0,i.pageTotalPage=(o==null?void 0:o.pageTotalPage)||coUtil.cofTotalPage(i),coUtil.cofBuildPagerNums(i),Object.assign(i.pageCond,(o==null?void 0:o.pageCond)||i.pageCond),d.error=null}catch(t){console.error("[catch-info]",t),d.error=t.message}finally{d.loading=!1}};A(async()=>{const a=new Date().getFullYear();Object.assign(l,{dateRangeType:"reg_date",dateRangeStart:`${a-3}-01-01`,dateRangeEnd:`${a}-12-31`}),await D(),f.initSearchValue&&(l.searchValue=f.initSearchValue,l.dateRangeStart="",l.dateRangeEnd="");const t=new URLSearchParams(window.location.search),o=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(l).forEach(r=>{!o.includes(r)&&t.has(r)&&(l[r]=t.get(r))}),await g("DEFAULT"),Object.assign(P,l)});const G=()=>{boUtil.bofApplyDateRange(l),i.pageNo=1},I=e=>{n.selectedId=e,n.openMode="view",n.active=!0,n.reloadTrigger++},v=()=>{n.selectedId="__new__",n.openMode="view",n.active=!1,n.resetSeq++},U=e=>{n.selectedId=e,n.openMode="edit",n.active=!0,n.reloadTrigger++},K=()=>{n.selectedId="__new__",n.openMode="edit",n.active=!0,n.resetSeq++,n.reloadTrigger++},V=()=>{v()},z=(e,a={})=>{if(e==="pmEventMng"){a.reload&&g("RELOAD"),v();return}if(e==="__cancelEdit__"){if(n.selectedId&&n.selectedId!=="__new__"){n.openMode="view";return}v();return}if(e==="__closeDtl__"){v();return}if(e==="__switchToEdit__"){n.openMode="edit";return}f.navigate(e,a)},B=u(()=>n.selectedId==="__new__"?null:n.selectedId),O=u(()=>`${n.selectedId}_${n.openMode}_${n.resetSeq}`),L={\uC9C4\uD589\uC911:"badge-green",\uC608\uC815:"badge-blue",\uC885\uB8CC:"badge-gray"},C=e=>coUtil.cofCodeBadge("EVENT_STATUS_KR",e,L[e]||"badge-gray"),$=async e=>{e>=1&&e<=i.pageTotalPage&&(i.pageNo=e,await g("PAGE_CLICK"))},q=()=>{i.pageNo=1,g("DEFAULT")},j=async e=>{var o,r;if(!await E("\uC0AD\uC81C",`[${e.eventTitle}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)||!Array.isArray(b))return;const t=b.findIndex(m=>m.eventId===e.eventId);t!==-1&&b.splice(t,1),n.selectedId===e.eventId&&v();try{const m=await boApiSvc.pmEvent.remove(e.eventId,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uC0AD\uC81C");h&&h("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(m){console.error("[catch-info]",m);const Q=((r=(o=m.response)==null?void 0:o.data)==null?void 0:r.message)||m.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";h&&h(Q,"error",0)}},S=s({show:!1}),F=u(()=>"pmEvent"),W=u(()=>"\uC774\uBCA4\uD2B8"),Y=u(()=>w.baseGrid),H=()=>({...x(),...coUtil.cofOmitEmpty(l)}),J=Vue.toRef(d,"tabMode"),w={};return w.baseSearch=[{key:"searchValue",type:"text",label:"\uC774\uBCA4\uD2B8 \uC81C\uBAA9",placeholder:"\uC774\uBCA4\uD2B8 \uC81C\uBAA9 \uAC80\uC0C9"},{key:"eventStatusCd",type:"select",label:"\uC0C1\uD0DC",options:()=>y.event_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"mdUserId",label:"\uB2F4\uB2F9MD",type:"pick",nameKey:"mdUserNm",display:e=>e.mdUserNm,placeholder:"MD \uC120\uD0DD",onOpen:()=>c("mdModal-open"),onClear:()=>c("searchParam-mdClear")},{key:"prodId",label:"\uC0C1\uD488",type:"pick",nameKey:"prodNm",display:e=>e.prodNm,placeholder:"\uC0C1\uD488 \uC120\uD0DD",onOpen:()=>c("prodModal-open"),onClear:()=>c("searchParam-prodClear")},{key:"vendorId",label:"\uC5C5\uCCB4",type:"pick",nameKey:"vendorNm",display:e=>e.vendorNm,placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",onOpen:()=>c("vendorModal-open"),onClear:()=>c("searchParam-vendorClear")},{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>y.date_range_opts,onRangeChange:()=>c("searchParam-dateRange")},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>_,nullLabel:"\uC804\uCCB4"}],w.baseGrid=[{key:"eventTitle",label:"\uC774\uBCA4\uD2B8 \uC81C\uBAA9",sortKey:"nm",link:!0,cellInnerStyle:e=>n.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"targetProducts",label:"\uB300\uC0C1\uC0C1\uD488",fmt:e=>(e||[]).length+"\uAC1C \uC0C1\uD488"},{key:"authRequired",label:"\uC778\uC99D\uD544\uC694",badge:e=>e.authRequired?"badge-orange":"badge-gray",fmt:e=>e?"\uD544\uC694":"\uBD88\uD544\uC694"},{key:"startDate",label:"\uC2DC\uC791\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"endDate",label:"\uC885\uB8CC\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"eventStatusCd",label:"\uC0C1\uD0DC",badge:e=>C(e.eventStatusCd)},{key:"regDate",label:"\uB4F1\uB85D\uC77C",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb"}],{columns:w,events:b,uiState:d,searchParam:l,baseGridPager:i,detailPanel:n,handleBtnAction:c,handleSelectAction:M,handleGridCellAction:N,cfDetailEditId:B,cfDetailKey:O,tabMode:J,fnStatusBadge:C,inlineNavigate:z,modals:p,fnCallbackModal:T,excelModal:S,cfExcelDomain:F,cfExcelAreaNm:W,cfExcelColumns:Y,buildExcelParams:H}},template:`
<bo-page title="\uC774\uBCA4\uD2B8\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uC774\uBCA4\uD2B8\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <div style="display:flex;border:1px solid #ddd;border-radius:6px;overflow:hidden;">
        <button @click="handleBtnAction('tab-mode', 'list')" style="font-size:11px;padding:4px 10px;border:none;transition:all .15s;"
          :style="tabMode==='list' ? 'background:#333;color:#fff;font-weight:600;' : 'background:#fff;color:#666;'">
          \u2630 \uB9AC\uC2A4\uD2B8
        </button>
        <button @click="handleBtnAction('tab-mode', 'card')" style="font-size:11px;padding:4px 10px;border:none;border-left:1px solid #ddd;transition:all .15s;"
          :style="tabMode==='card' ? 'background:#333;color:#fff;font-weight:600;' : 'background:#fff;color:#666;'">
          \u229E \uCE74\uB4DC
        </button>
      </div>
      <button class="btn btn_excel" @click="handleBtnAction('events-excel')">
        \u{1F4E5} \uC5D1\uC140
      </button>
      <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
        @click="handleBtnAction('events-add', $event)"
        @auxclick="handleBtnAction('events-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uB9AC\uC2A4\uD2B8 \uBDF0 ================================================= -->
    <bo-grid v-if="tabMode==='list'" :bare="true"
      :columns="columns.baseGrid" :rows="events" row-key="eventId" :selected-key="detailPanel.selectedId"
      :row-actions="true"
      :sort-state="{ sortKey: uiState.sortKey, sortDir: uiState.sortDir }"
      :row-style="(e) => detailPanel.selectedId===e.eventId ? 'background:#fff8f9;' : ''" @sort="key => handleBtnAction('events-sort', key)" grid-id="events-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
      <template #head-actions>
        \uAD00\uB9AC
      </template>
      <template #row-actions="{ row: e, gridId }">
        <div class="actions" style="display:flex;gap:6px;align-items:center;justify-content:center;">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', e, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', e, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', e)">
            \uC0AD\uC81C
          </button>
        </div>
      </template>
    </bo-grid>
    <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uBDF0 ================================================== -->
    <div v-else style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:14px;margin-bottom:16px;">
      <div v-if="events.length===0" style="grid-column:1/-1;text-align:center;color:#999;padding:60px 20px;">
        \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <div v-for="(e, idx) in events" :key="e?.eventId" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.05);transition:all .15s;"
        :style="detailPanel.selectedId===e.eventId?{borderColor:'#e8587a',boxShadow:'0 2px 8px rgba(232,88,122,0.15)'}:{}"
        @click="handleSelectAction('events-rowView', e.eventId)">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uB108 \uC774\uBBF8\uC9C0 ============================================ -->
        <div v-if="e.bannerImage" style="padding:12px;background:#f5f5f5;border-bottom:1px solid #e8e8e8;" v-html="e.bannerImage">
        </div>
        <div style="padding:16px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:12px;color:#999;margin-bottom:6px;">
            <span style="display:inline-block;min-width:20px;font-weight:700;color:#e8587a;">{{ (baseGridPager.pageNo-1)*baseGridPager.pageSize + idx + 1 }}</span> \uC774\uBCA4\uD2B8 #{{ e.eventId }}
          </div>
          <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:8px;" @click="handleSelectAction('events-rowView', e.eventId)" :style="detailPanel.selectedId===e.eventId?{color:'#e8587a'}:{}">
            {{ e.eventTitle }}
            <span v-if="detailPanel.selectedId===e.eventId" style="font-size:10px;margin-left:4px;">
              \u25BC
            </span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            <span class="badge" :class="fnStatusBadge(e.eventStatusCd)" style="font-size:11px;">
              {{ e.eventStatusCd }}
            </span>
            <span class="badge" :class="e.authRequired ? 'badge-orange' : 'badge-gray'" style="font-size:11px;">
              {{ e.authRequired ? '\uC778\uC99D\uD544\uC694' : '\uC778\uC99D\uBD88\uD544\uC694' }}
            </span>
          </div>
          <div style="font-size:12px;color:#666;line-height:1.5;">
            <div>
              \u{1F3AF} {{ (e.targetProducts||[]).length }}\uAC1C \uC0C1\uD488
            </div>
            <div>
              \u{1F4C5} {{ e.startDate }} ~ {{ e.endDate }}
            </div>
            <div style="color:#999;margin-top:4px;">
              \uB4F1\uB85D {{ e.regDate }}
            </div>
          </div>
        </div>
        <div style="padding:10px 16px;background:#f9f9f9;display:flex;gap:6px;justify-content:center;align-items:center;">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction('events-cellClick', 'btn_row_edit', e, $event)" @auxclick.stop="handleGridCellAction('events-cellClick', 'btn_row_edit', e, $event)" style="font-size:11px;padding:4px 12px;">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction('events-cellClick', 'btn_row_delete', e)" style="font-size:11px;padding:4px 12px;">
            \uC0AD\uC81C
          </button>
          <span style="font-size:11px;color:#999;margin-left:auto;">
            #{{ e.eventId }}
          </span>
        </div>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC800 ================================================== -->
    <bo-pager v-if="baseGridPager.pageTotalCount > 0" :pager="baseGridPager" :on-set-page="n => handleBtnAction('events-pager-setPage', n)" :on-size-change="() => handleSelectAction('events-pager-sizeChange')" />
  </bo-container>
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138: EventDtl \uC784\uBCA0\uB4DC ===================================== -->
  <pm-event-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    />
  <bo-cm-popup-modal v-if="modals.isMdPick" popup-cmd="cmPopup-userMd-pick" popup-code="userMd" :on-callback="fnCallbackModal" @close="modals.isMdPick = false" />
  <bo-cm-popup-modal v-if="modals.isProdPick" popup-cmd="cmPopup-prod-pick" popup-code="prod" :on-callback="fnCallbackModal" @close="modals.isProdPick = false" />
  <bo-cm-popup-modal v-if="modals.isVendorPick" popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :on-callback="fnCallbackModal" @close="modals.isVendorPick = false" />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" :domain="cfExcelDomain"
    :area-nm="cfExcelAreaNm" :columns="cfExcelColumns" ui-nm="\uC774\uBCA4\uD2B8\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
