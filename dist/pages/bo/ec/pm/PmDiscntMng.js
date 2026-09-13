window.PmDiscntMng={name:"PmDiscntMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(h){const l=(e,o={})=>{if(e==="searchParam-list")return i.pageNo=1,g("SEARCH");if(e==="searchParam-reset")return Object.assign(n,k),s.sortKey="",s.sortDir="asc",i.pageNo=1,y(),g("SEARCH");if(e==="searchParam-dateRange")return C();if(e==="discnts-add")return o&&(o.ctrlKey||o.metaKey||o.button===1)?h.openNewWindow("pmDiscntDtl",null,"new"):M();if(e==="discnts-excel"){U.show=!0;return}else if(e==="tab-mode"){s.tabMode=o;return}else{if(e==="detailPanel-close")return N();if(e==="discnts-pager-setPage")return R(o);if(e==="discnts-card-view")return v(o);if(e==="discnts-card-edit")return I(o);if(e==="discnts-card-delete")return x(o);e==="memberModal-open"?m.isMemberPick=!0:e==="searchParam-memberClear"?(n.memberId="",n.memberNm=""):e==="mdModal-open"?m.isMdPick=!0:e==="searchParam-mdClear"?(n.mdUserId="",n.mdUserNm=""):e==="prodModal-open"?m.isProdPick=!0:e==="searchParam-prodClear"?(n.prodId="",n.prodNm=""):e==="vendorModal-open"?m.isVendorPick=!0:e==="searchParam-vendorClear"?(n.vendorId="",n.vendorNm=""):console.warn("[handleBtnAction] unknown cmd:",e)}},O=(e,o={})=>{if(e==="discnts-sort")return D(o);if(e==="discnts-pager-sizeChange")return G();console.warn("[handleSelectAction] unknown cmd:",e)},K=(e,o,t,c={})=>{if(e==="discnts-cellClick"){if(o==="btn_row_edit")return c&&(c.ctrlKey||c.metaKey||c.button===1)?h.openNewWindow("pmDiscntDtl",t.discntId,"edit"):I(t.discntId);if(o==="btn_row_delete")return x(t);const d=["__no__"];if(c.col&&c.col.link||d.includes(o))return c.ctrlKey||c.metaKey||c.button===1?h.openNewWindow("pmDiscntDtl",t.discntId):v(t.discntId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},B=(e,o,t)=>{e==="cmPopup-member-pick"?(n.memberId=(t==null?void 0:t.selId)||"",n.memberNm=(t==null?void 0:t.selName)||"",m.isMemberPick=!1):e==="cmPopup-userMd-pick"?(n.mdUserId=(t==null?void 0:t.selId)||"",n.mdUserNm=(t==null?void 0:t.selName)||"",m.isMdPick=!1):e==="cmPopup-prod-pick"?(n.prodId=(t==null?void 0:t.selId)||"",n.prodNm=(t==null?void 0:t.selName)||"",m.isProdPick=!1):e==="cmPopup-vendor-pick"&&(n.vendorId=(t==null?void 0:t.selId)||"",n.vendorNm=(t==null?void 0:t.selName)||"",m.isVendorPick=!1)},{ref:ae,reactive:r,computed:b,watch:ne,onMounted:z}=Vue,_=window.boApp.showToast,V=window.boApp.showConfirm,se=window.boApp.showRefModal,u=r([]),s=r({loading:!1,error:null,tabMode:"list",sortKey:"",sortDir:"asc"}),p=r({discount_types:[],discount_statuses:[],discnt_types:[],promo_statuses:[],date_range_opts:[]}),w=r([]),L=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["DISCOUNT_TYPE","DISCNT_STATUS_CD","DISCNT_TYPE","PROMO_STATUS","DATE_RANGE_OPT"],{compNm:"PmDiscntMng"});try{p.discount_types=e.sgGetGrpCodes("DISCOUNT_TYPE"),p.discount_statuses=e.sgGetGrpCodes("DISCNT_STATUS_CD"),p.discnt_types=e.sgGetGrpCodes("DISCNT_TYPE"),p.promo_statuses=e.sgGetGrpCodes("PROMO_STATUS"),p.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")}catch(o){console.error("[fnLoadCodes]",o)}w.splice(0,w.length,...await window.boUtil.bofLoadSiteOptions())},T={nm:{asc:"discntNm asc",desc:"discntNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},S=()=>{const{sortKey:e,sortDir:o}=s;return!e||!T[e]?{}:{sort:T[e][o]}},D=e=>{s.sortKey===e?s.sortDir==="asc"?s.sortDir="desc":(s.sortKey="",s.sortDir="asc"):(s.sortKey=e,s.sortDir="asc"),i.pageNo=1,g()},F=e=>s.sortKey!==e?"\u21C5":s.sortDir==="asc"?"\u2191":"\u2193",g=async(e="DEFAULT")=>{var o;s.loading=!0;try{const t={pageNo:i.pageNo,pageSize:i.pageSize,...S(),...coUtil.cofOmitEmpty(n)};t.searchValue&&!t.searchType&&(t.searchType="discntNm,discntId");const d=(o=(await boApiSvc.pmDiscnt.getPage(t,"\uD560\uC778\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:o.data;u.splice(0,u.length,...(d==null?void 0:d.pageList)||[]),i.pageTotalCount=(d==null?void 0:d.pageTotalCount)||0,i.pageTotalPage=(d==null?void 0:d.pageTotalPage)||coUtil.cofTotalPage(i),coUtil.cofBuildPagerNums(i),Object.assign(i.pageCond,(d==null?void 0:d.pageCond)||i.pageCond),s.error=null}catch(t){console.error("[catch-info]",t),s.error=t.message}finally{s.loading=!1}};z(async()=>{const o=new Date().getFullYear();Object.assign(n,{dateRangeType:"reg_date",dateRangeStart:`${o-3}-01-01`,dateRangeEnd:`${o}-12-31`}),await L();const t=new URLSearchParams(window.location.search),c=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(n).forEach(d=>{!c.includes(d)&&t.has(d)&&(n[d]=t.get(d))}),await g("DEFAULT"),Object.assign(k,n)});const C=()=>{boUtil.bofApplyDateRange(n),i.pageNo=1},i=r({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),a=r({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),n=r({searchType:"",searchValue:"",dateRange:"",dateRangeType:"",dateRangeStart:"",dateRangeEnd:"",discntTypeCd:"",discntStatusCd:"",memberId:"",memberNm:"",mdUserId:"",mdUserNm:"",prodId:"",prodNm:"",vendorId:"",vendorNm:""}),k={},m=r({isMemberPick:!1,isMdPick:!1,isProdPick:!1,isVendorPick:!1}),v=e=>{a.selectedId=e,a.openMode="view",a.active=!0,a.reloadTrigger++},I=e=>{a.selectedId=e,a.openMode="edit",a.active=!0,a.reloadTrigger++},M=()=>{a.selectedId="__new__",a.openMode="edit",a.active=!0,a.resetSeq++,a.reloadTrigger++},y=()=>{a.selectedId="__new__",a.openMode="view",a.active=!1,a.resetSeq++},N=()=>{y()},$=(e,o={})=>{if(e==="pmDiscntMng"){o.reload&&g("RELOAD"),y();return}if(e==="__cancelEdit__"){if(a.selectedId&&a.selectedId!=="__new__"){a.openMode="view";return}y();return}if(e==="__closeDtl__"){y();return}if(e==="__switchToEdit__"){a.openMode="edit";return}h.navigate(e,o)},j=b(()=>a.selectedId==="__new__"?null:a.selectedId),Y=b(()=>a.openMode==="view"&&a.selectedId!=="__new__"),W=b(()=>`${a.selectedId}_${a.openMode}_${a.resetSeq}`),q={PROD:"badge-blue",ORDER:"badge-purple",SHIP:"badge-green",SHIP_FREE:"badge-orange"},A=e=>coUtil.cofCodeBadge("DISCNT_TYPE",e,q[e]||"badge-gray"),H={\uD65C\uC131:"badge-green",\uBE44\uD65C\uC131:"badge-gray",\uC885\uB8CC:"badge-red"},E=e=>coUtil.cofCodeBadge("PROMO_STATUS",e,H[e]||"badge-gray"),J=async()=>{i.pageNo=1,await g("DEFAULT")},Q=async()=>{Object.assign(n,k),s.sortKey="",s.sortDir="asc",i.pageNo=1,await g()},R=async e=>{e>=1&&e<=i.pageTotalPage&&(i.pageNo=e,await g("PAGE_CLICK"))},G=()=>{i.pageNo=1,g("DEFAULT")},x=async e=>{var c,d;if(!await V("\uC0AD\uC81C",`[${e.discntNm}] \uD560\uC778\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const t=(u||[]).findIndex(f=>f.discntId===e.discntId);t!==-1&&u.splice(t,1),a.selectedId===e.discntId&&(a.selectedId=null);try{const f=await boApiSvc.pmDiscnt.remove(e.discntId,"\uD560\uC778\uAD00\uB9AC","\uC0AD\uC81C");_&&_("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(f){console.error("[catch-info]",f);const oe=((d=(c=f.response)==null?void 0:c.data)==null?void 0:d.message)||f.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";_&&_(oe,"error",0)}},U=r({show:!1}),X=b(()=>"pmDiscnt"),Z=b(()=>"\uD560\uC778"),ee=b(()=>P.baseGrid),te=()=>{const e={...S(),...coUtil.cofOmitEmpty(n)};return e.searchValue&&!e.searchType&&(e.searchType="discntNm,discntId"),e},ie=Vue.toRef(s,"tabMode"),P={};return P.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"discntNm",label:"\uD560\uC778\uBA85"},{value:"discntId",label:"ID"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"discntTypeCd",type:"select",label:"\uC720\uD615",options:()=>p.discnt_types,nullLabel:"\uC720\uD615 \uC804\uCCB4"},{key:"discntStatusCd",type:"select",label:"\uC0C1\uD0DC",options:()=>p.promo_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"memberId",label:"\uD68C\uC6D0",type:"pick",nameKey:"memberNm",display:e=>e.memberNm,placeholder:"\uD68C\uC6D0 \uC120\uD0DD",onOpen:()=>l("memberModal-open"),onClear:()=>l("searchParam-memberClear")},{key:"mdUserId",label:"\uB2F4\uB2F9MD",type:"pick",nameKey:"mdUserNm",display:e=>e.mdUserNm,placeholder:"MD \uC120\uD0DD",onOpen:()=>l("mdModal-open"),onClear:()=>l("searchParam-mdClear")},{key:"prodId",label:"\uC0C1\uD488",type:"pick",nameKey:"prodNm",display:e=>e.prodNm,placeholder:"\uC0C1\uD488 \uC120\uD0DD",onOpen:()=>l("prodModal-open"),onClear:()=>l("searchParam-prodClear")},{key:"vendorId",label:"\uC5C5\uCCB4",type:"pick",nameKey:"vendorNm",display:e=>e.vendorNm,placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",onOpen:()=>l("vendorModal-open"),onClear:()=>l("searchParam-vendorClear")},{key:"dateRange",type:"dateRange",label:"\uC2DC\uC791\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>p.date_range_opts,onRangeChange:()=>C()},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>w,nullLabel:"\uC804\uCCB4"}],P.baseGrid=[{key:"discntNm",label:"\uD560\uC778\uBA85",sortKey:"nm",link:!0,cellInnerStyle:e=>a.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"discntTypeCd",label:"\uC720\uD615",badge:e=>A(e.discntTypeCd)},{key:"discntValue",label:"\uD560\uC778\uAC12",fmt:(e,o)=>o.discntTypeCd==="SHIP_FREE"?"\uBB34\uB8CC\uBC30\uC1A1":o.discntValTypeCd==="RATE"?o.discntValue+"%":coUtil.cofWon(o.discntValue)},{key:"discntTargetCd",label:"\uC801\uC6A9\uB300\uC0C1",cellStyle:"color:#555",fmt:e=>e||"\uC804\uCCB4\uC0C1\uD488"},{key:"startDate",label:"\uC2DC\uC791\uC77C",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"endDate",label:"\uC885\uB8CC\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"discntStatusCd",label:"\uC0C1\uD0DC",badge:e=>E(e.discntStatusCd)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8",cellStyle:"color:#2563eb"}],{columns:P,uiStateDetail:a,selectedId:b(()=>a.selectedId),discounts:u,uiState:s,codes:p,searchParam:n,onDateRangeChange:C,baseGridPager:i,fnTypeBadge:A,fnStatusBadge:E,onSearch:J,onReset:Q,setPage:R,onSizeChange:G,handleDelete:x,cfDetailEditId:j,loadView:v,handleLoadDetail:I,openNew:M,closeDetail:N,inlineNavigate:$,cfIsViewMode:Y,cfDetailKey:W,onSort:D,sortIcon:F,handleBtnAction:l,handleSelectAction:O,handleGridCellAction:K,modals:m,fnCallbackModal:B,excelModal:U,cfExcelDomain:X,cfExcelAreaNm:Z,cfExcelColumns:ee,buildExcelParams:te,get tabMode(){return s.tabMode},set tabMode(e){s.tabMode=e}}},template:`
<bo-page title="\uD560\uC778\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9\uC601\uC5ED ==================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="onSearch" @reset="onReset" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D\uC601\uC5ED (\uB9AC\uC2A4\uD2B8/\uCE74\uB4DC \uD1A0\uAE00) ======================================== -->
  <bo-container title="\uD560\uC778\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uD234\uBC14: \uD0ED\uBAA8\uB4DC \uD1A0\uAE00 + \uC5D1\uC140/\uC2E0\uADDC ============================ -->
    <template #toolbar-actions>
      <div style="display:flex;gap:6px;align-items:center;">
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
        <button class="btn btn_excel" @click="handleBtnAction('discnts-excel')">
          \u{1F4E5} \uC5D1\uC140
        </button>
        <button class="btn btn-primary btn-sm" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
          @click="handleBtnAction('discnts-add', $event)"
          @auxclick="handleBtnAction('discnts-add', $event)">
          + \uC2E0\uADDC
        </button>
      </div>
    </template>
    <!-- ===== \u25A0.\u25A0. \uB9AC\uC2A4\uD2B8 \uBDF0 (BoGrid) ======================================== -->
    <bo-grid v-if="tabMode==='list'" :bare="true"
      :columns="columns.baseGrid" :rows="discounts" row-key="discntId" :selected-key="selectedId"
      :row-actions="true"
      :sort-state="{ sortKey: uiState.sortKey, sortDir: uiState.sortDir }"
      :row-style="(d) => selectedId===d.discntId ? 'background:#fff8f9;' : ''"
      @sort="onSort"
      grid-id="discnts-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
      <template #head-actions>
        \uAD00\uB9AC
      </template>
      <template #row-actions="{ row: d, gridId }">
        <div class="actions">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', d, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', d, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleBtnAction('discnts-card-delete', d)">
            \uC0AD\uC81C
          </button>
        </div>
      </template>
    </bo-grid>
    <bo-pager v-if="tabMode==='list' ? (baseGridPager.pageTotalCount > 0) : false" :pager="baseGridPager" :on-set-page="n => handleBtnAction('discnts-pager-setPage', n)" :on-size-change="() => handleSelectAction('discnts-pager-sizeChange')" />
    <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uBDF0 ================================================== -->
    <div v-else style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:14px;margin-bottom:16px;">
      <div v-if="discounts.length===0" style="grid-column:1/-1;text-align:center;color:#999;padding:60px 20px;">
        \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <div v-for="(d, idx) in discounts" :key="d?.discntId" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.05);transition:all .15s;"
        :style="selectedId===d.discntId?{borderColor:'#e8587a',boxShadow:'0 2px 8px rgba(232,88,122,0.15)'}:{}"
        @click="handleBtnAction('discnts-card-view', d.discntId)">
        <div style="padding:16px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:12px;color:#999;margin-bottom:6px;">
            <span style="display:inline-block;min-width:20px;font-weight:700;color:#e8587a;">{{ (baseGridPager.pageNo-1)*baseGridPager.pageSize + idx + 1 }}</span> \uD560\uC778 #{{ d.discntId }}
          </div>
          <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:8px;" @click="handleBtnAction('discnts-card-view', d.discntId)" :style="selectedId===d.discntId?{color:'#e8587a'}:{}">
            {{ d.discntNm }}
            <span v-if="selectedId===d.discntId" style="font-size:10px;margin-left:4px;">
              \u25BC
            </span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            <span class="badge" :class="fnTypeBadge(d.discntTypeCd)" style="font-size:11px;">
              {{ d.discntTypeCd }}
            </span>
            <span class="badge" :class="fnStatusBadge(d.discntStatusCd)" style="font-size:11px;">
              {{ d.discntStatusCd }}
            </span>
          </div>
          <div style="font-size:12px;color:#666;line-height:1.5;">
            <div>
              \u{1F3AF} {{ d.discntTypeCd === 'SHIP_FREE' ? '\uBB34\uB8CC\uBC30\uC1A1' : d.discntValTypeCd === 'RATE' ? (d.discntValue + '%') : coUtil.cofWon(d.discntValue) }}
            </div>
            <div>
              \u{1F4C5} {{ d.startDate }} ~ {{ d.endDate }}
            </div>
            <div style="color:#999;margin-top:4px;">
              {{ d.discntTargetCd || '\uC804\uCCB4\uC0C1\uD488' }}
            </div>
          </div>
        </div>
        <div style="padding:10px 16px;background:#f9f9f9;display:flex;gap:6px;justify-content:center;align-items:center;">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction('discnts-cellClick', 'btn_row_edit', d, $event)" @auxclick.stop="handleGridCellAction('discnts-cellClick', 'btn_row_edit', d, $event)" style="font-size:11px;padding:4px 12px;">
            \uC218\uC815
          </button>
          <button class="btn btn_delete" @click.stop="handleBtnAction('discnts-card-delete', d)" style="font-size:11px;padding:4px 12px;">
            \uC0AD\uC81C
          </button>
          <span style="font-size:11px;color:#999;margin-left:auto;">
            #{{ d.discntId }}
          </span>
        </div>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uCE74\uB4DC \uBDF0 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC9C0\uB124\uC774\uC158 ================================================ -->
    <bo-pager v-if="tabMode!=='list' ? (baseGridPager.pageTotalCount > 0) : false" :pager="baseGridPager" :on-set-page="setPage" :on-size-change="onSizeChange" />
  </bo-container>
  <!-- ===== \u25A1. \uCE74\uB4DC \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138\uC601\uC5ED: PmDiscntDtl \uC778\uB77C\uC778 \uC784\uBCA0\uB4DC ============================ -->
  <!-- ===== \u25A0. \uC0C1\uC138 \uD328\uB110 (\uC778\uB77C\uC778 \uC784\uBCA0\uB4DC) ========================================= -->
  <pm-discnt-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="uiStateDetail.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="uiStateDetail.active"
    :reload-trigger="uiStateDetail.reloadTrigger"
    />
  <bo-cm-popup-modal v-if="modals.isMemberPick" popup-cmd="cmPopup-member-pick" popup-code="member" :on-callback="fnCallbackModal" @close="modals.isMemberPick = false" />
  <bo-cm-popup-modal v-if="modals.isMdPick" popup-cmd="cmPopup-userMd-pick" popup-code="userMd" :on-callback="fnCallbackModal" @close="modals.isMdPick = false" />
  <bo-cm-popup-modal v-if="modals.isProdPick" popup-cmd="cmPopup-prod-pick" popup-code="prod" :on-callback="fnCallbackModal" @close="modals.isProdPick = false" />
  <bo-cm-popup-modal v-if="modals.isVendorPick" popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :on-callback="fnCallbackModal" @close="modals.isVendorPick = false" />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" :domain="cfExcelDomain"
    :area-nm="cfExcelAreaNm" :columns="cfExcelColumns" ui-nm="\uD560\uC778\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
<!-- ===== \u25A1. \uC0C1\uC138 \uD328\uB110 (\uC778\uB77C\uC778 \uC784\uBCA0\uB4DC) ========================================= -->
`};
