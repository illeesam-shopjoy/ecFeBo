window.PmGiftMng={name:"PmGiftMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(P){const r=(e,a={})=>{if(e==="searchParam-list")return l.pageNo=1,m("SEARCH");if(e==="searchParam-reset")return Object.assign(i,I),n.sortKey="",n.sortDir="asc",l.pageNo=1,y(),m("SEARCH");if(e==="searchParam-dateRange")return F();if(e==="gifts-add")return a&&(a.ctrlKey||a.metaKey||a.button===1)?P.openNewWindow("pmGiftDtl",null,"new"):j();if(e==="gifts-excel"){A.show=!0;return}else if(e==="tab-mode"){n.tabMode=a;return}else{if(e==="detailPanel-close")return Y();if(e==="gifts-sort")return V(a);if(e==="gifts-pager-setPage")return X(a);e==="memberModal-open"?g.isMemberPick=!0:e==="searchParam-memberClear"?(i.memberId="",i.memberNm=""):e==="mdModal-open"?g.isMdPick=!0:e==="searchParam-mdClear"?(i.mdUserId="",i.mdUserNm=""):e==="prodModal-open"?g.isProdPick=!0:e==="searchParam-prodClear"?(i.prodId="",i.prodNm=""):e==="vendorModal-open"?g.isVendorPick=!0:e==="searchParam-vendorClear"?(i.vendorId="",i.vendorNm=""):console.warn("[handleBtnAction] unknown cmd:",e)}},R=(e,a={})=>{if(e==="gifts-pager-sizeChange")return Z();if(e==="gifts-rowView")return M(a);console.warn("[handleSelectAction] unknown cmd:",e)},U=(e,a,t,d={})=>{if(e==="gifts-cellClick"){if(a==="btn_row_edit")return d&&(d.ctrlKey||d.metaKey||d.button===1)?P.openNewWindow("pmGiftDtl",t.giftId,"edit"):$(t.giftId);if(a==="btn_row_delete")return ee(t);const s=["__no__"];if(d.col&&d.col.link||s.includes(a))return d.ctrlKey||d.metaKey||d.button===1?P.openNewWindow("pmGiftDtl",t.giftId):M(t.giftId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},K=(e,a,t)=>{e==="cmPopup-member-pick"?(i.memberId=(t==null?void 0:t.selId)||"",i.memberNm=(t==null?void 0:t.selName)||"",g.isMemberPick=!1):e==="cmPopup-userMd-pick"?(i.mdUserId=(t==null?void 0:t.selId)||"",i.mdUserNm=(t==null?void 0:t.selName)||"",g.isMdPick=!1):e==="cmPopup-prod-pick"?(i.prodId=(t==null?void 0:t.selId)||"",i.prodNm=(t==null?void 0:t.selName)||"",g.isProdPick=!1):e==="cmPopup-vendor-pick"&&(i.vendorId=(t==null?void 0:t.selId)||"",i.vendorNm=(t==null?void 0:t.selName)||"",g.isVendorPick=!1)},{ref:le,reactive:c,computed:u,watch:se,onMounted:B}=Vue,k=window.boApp.showToast,L=window.boApp.showConfirm,re=window.boApp.showRefModal,h=c([]),n=c({loading:!1,error:null,giftList:[],tabMode:"list",sortKey:"",sortDir:"asc"}),f=c({gift_statuses:[],gift_cond_types:[],date_range_opts:[],gift_date_types:[{value:"reg_date",label:"\uB4F1\uB85D\uC77C"},{value:"upd_date",label:"\uC218\uC815\uC77C"}]}),C=c([]),l=c({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),o=c({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),i=c({searchType:"",searchValue:"",dateRangeType:"",dateRange:"",dateRangeStart:"",dateRangeEnd:"",giftTypeCd:"",giftStatusCd:"",memberId:"",memberNm:"",mdUserId:"",mdUserNm:"",prodId:"",prodNm:"",vendorId:"",vendorNm:""}),I={},g=c({isMemberPick:!1,isMdPick:!1,isProdPick:!1,isVendorPick:!1}),z=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["GIFT_STATUS_CD","GIFT_COND_KR","DATE_RANGE_OPT"],{compNm:"PmGiftMng"});try{f.gift_statuses=e.sgGetGrpCodes("GIFT_STATUS_CD"),f.gift_cond_types=e.sgGetGrpCodes("GIFT_COND_KR"),f.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")}catch(a){console.error("[fnLoadCodes]",a)}C.splice(0,C.length,...await window.boUtil.bofLoadSiteOptions())},x={nm:{asc:"giftNm asc",desc:"giftNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},T=()=>{const{sortKey:e,sortDir:a}=n;return!e||!x[e]?{}:{sort:x[e][a]}},V=e=>{n.sortKey===e?n.sortDir==="asc"?n.sortDir="desc":(n.sortKey="",n.sortDir="asc"):(n.sortKey=e,n.sortDir="asc"),l.pageNo=1,m()},m=async(e="DEFAULT")=>{var a,t,d,s,p,v,G,D,E,O;n.loading=!0;try{const b={pageNo:l.pageNo,pageSize:l.pageSize,...T(),...coUtil.cofOmitEmpty(i)};b.searchValue&&!b.searchType&&(b.searchType="giftNm,giftId");const _=await boApiSvc.pmGift.getPage(b,"\uC120\uBB3C\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C"),de=((t=(a=_.data)==null?void 0:a.data)==null?void 0:t.pageList)||((s=(d=_.data)==null?void 0:d.data)==null?void 0:s.list)||[];h.splice(0,h.length,...de),l.pageTotalCount=((v=(p=_.data)==null?void 0:p.data)==null?void 0:v.pageTotalCount)||0,l.pageTotalPage=((D=(G=_.data)==null?void 0:G.data)==null?void 0:D.pageTotalPage)||coUtil.cofTotalPage(l),coUtil.cofBuildPagerNums(l),Object.assign(l.pageCond,((O=(E=_.data)==null?void 0:E.data)==null?void 0:O.pageCond)||l.pageCond),n.error=null}catch(b){console.error("[catch-info]",b),n.error=b.message}finally{n.loading=!1}};B(async()=>{const a=new Date().getFullYear();Object.assign(i,{dateRangeType:"reg_date",dateRangeStart:`${a-3}-01-01`,dateRangeEnd:`${a}-12-31`}),await z();const t=new URLSearchParams(window.location.search),d=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(i).forEach(s=>{!d.includes(s)&&t.has(s)&&(i[s]=t.get(s))}),await m("DEFAULT"),Object.assign(I,i)});const F=()=>{boUtil.bofApplyDateRange(i),l.pageNo=1},M=e=>{o.selectedId=e,o.openMode="view",o.active=!0,o.reloadTrigger++},y=()=>{o.selectedId="__new__",o.openMode="view",o.active=!1,o.resetSeq++},$=e=>{o.selectedId=e,o.openMode="edit",o.active=!0,o.reloadTrigger++},j=()=>{o.selectedId="__new__",o.openMode="edit",o.active=!0,o.resetSeq++},Y=()=>{y()},q=(e,a={})=>{if(e==="pmGiftMng"){a.reload&&m("RELOAD"),y();return}if(e==="__cancelEdit__"){if(o.selectedId&&o.selectedId!=="__new__"){o.openMode="view";return}y();return}if(e==="__closeDtl__"){y();return}if(e==="__switchToEdit__"){o.openMode="edit";return}P.navigate(e,a)},W=u(()=>o.selectedId==="__new__"?null:o.selectedId),Q=u(()=>`${o.selectedId}_${o.openMode}_${o.resetSeq}`),H={\uAD6C\uB9E4\uC870\uAC74:"badge-blue",\uAE08\uC561\uC870\uAC74:"badge-green",\uC218\uB7C9\uC870\uAC74:"badge-orange",\uBB34\uC870\uAC74:"badge-purple"},S=e=>coUtil.cofCodeBadge("GIFT_COND_TYPE_KR",e,H[e]||"badge-gray"),J={\uD65C\uC131:"badge-green",\uBE44\uD65C\uC131:"badge-gray",\uC885\uB8CC:"badge-red",\uD488\uC808:"badge-orange"},N=e=>coUtil.cofCodeBadge("PROMO_STATUS",e,J[e]||"badge-gray"),X=async e=>{e>=1&&e<=l.pageTotalPage&&(l.pageNo=e,await m("PAGE_CLICK"))},Z=()=>{l.pageNo=1,m("DEFAULT")},ee=async e=>{var d,s;if(!await L("\uC0AD\uC81C",`[${e.giftNm}] \uC0AC\uC740\uD488\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const t=(h||[]).findIndex(p=>p.giftId===e.giftId);t!==-1&&h.splice(t,1),o.selectedId===e.giftId&&y();try{const p=await boApiSvc.pmGift.remove(e.giftId,"\uC0AC\uC740\uD488\uAD00\uB9AC","\uC0AD\uC81C");k&&k("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(p){console.error("[catch-info]",p);const v=((s=(d=p.response)==null?void 0:d.data)==null?void 0:s.message)||p.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";k&&k(v,"error",0)}},A=c({show:!1}),te=u(()=>"pmGift"),ae=u(()=>"\uC0AC\uC740\uD488"),oe=u(()=>w.baseGrid),ie=()=>{const e={...T(),...coUtil.cofOmitEmpty(i)};return e.searchValue&&!e.searchType&&(e.searchType="giftNm,giftId"),e},ne=Vue.toRef(n,"tabMode"),w={};return w.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"giftNm",label:"\uC0AC\uC740\uD488\uBA85"},{value:"giftId",label:"ID"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"giftTypeCd",type:"select",label:"\uC720\uD615",options:()=>f.gift_cond_types,nullLabel:"\uC720\uD615 \uC804\uCCB4"},{key:"giftStatusCd",type:"select",label:"\uC0C1\uD0DC",options:()=>f.gift_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"memberId",label:"\uD68C\uC6D0",type:"pick",nameKey:"memberNm",display:e=>e.memberNm,placeholder:"\uD68C\uC6D0 \uC120\uD0DD",onOpen:()=>r("memberModal-open"),onClear:()=>r("searchParam-memberClear")},{key:"mdUserId",label:"\uB2F4\uB2F9MD",type:"pick",nameKey:"mdUserNm",display:e=>e.mdUserNm,placeholder:"MD \uC120\uD0DD",onOpen:()=>r("mdModal-open"),onClear:()=>r("searchParam-mdClear")},{key:"prodId",label:"\uC0C1\uD488",type:"pick",nameKey:"prodNm",display:e=>e.prodNm,placeholder:"\uC0C1\uD488 \uC120\uD0DD",onOpen:()=>r("prodModal-open"),onClear:()=>r("searchParam-prodClear")},{key:"vendorId",label:"\uC5C5\uCCB4",type:"pick",nameKey:"vendorNm",display:e=>e.vendorNm,placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",onOpen:()=>r("vendorModal-open"),onClear:()=>r("searchParam-vendorClear")},{key:"dateRange",type:"dateRange",label:"\uC2DC\uC791\uC77C",typeKey:"dateRangeType",startKey:"dateRangeStart",endKey:"dateRangeEnd",typeOptions:()=>f.gift_date_types,rangeOptions:()=>f.date_range_opts,onRangeChange:()=>r("searchParam-dateRange")},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>C,nullLabel:"\uC804\uCCB4"}],w.baseGrid=[{key:"giftNm",label:"\uC0AC\uC740\uD488\uBA85",sortKey:"nm",link:!0,cellInnerStyle:e=>o.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"giftTypeCd",label:"\uC870\uAC74\uC720\uD615",badge:e=>S(e.giftTypeCd)},{key:"condVal",label:"\uC870\uAC74\uAC12",fmt:(e,a)=>a.giftTypeCd==="AMOUNT"?(a.minOrderAmt||0).toLocaleString()+"\uC6D0\u2191":a.giftTypeCd==="QTY"?(a.minOrderQty||0)+"\uAC1C\u2191":"-"},{key:"giftStock",label:"\uC7AC\uACE0",fmt:e=>(e||0).toLocaleString()+"\uAC1C"},{key:"startDate",label:"\uC2DC\uC791\uC77C",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"endDate",label:"\uC885\uB8CC\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"giftStatusCd",label:"\uC0C1\uD0DC",badge:e=>N(e.giftStatusCd)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8",cellStyle:"color:#2563eb"}],{columns:w,gifts:h,uiState:n,searchParam:i,baseGridPager:l,detailPanel:o,handleBtnAction:r,handleSelectAction:R,handleGridCellAction:U,cfDetailEditId:W,cfDetailKey:Q,tabMode:ne,fnTypeBadge:S,fnStatusBadge:N,inlineNavigate:q,modals:g,fnCallbackModal:K,excelModal:A,cfExcelDomain:te,cfExcelAreaNm:ae,cfExcelColumns:oe,buildExcelParams:ie}},template:`
<bo-page title="\uC0AC\uC740\uD488\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9\uC601\uC5ED ==================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D\uC601\uC5ED (\uB9AC\uC2A4\uD2B8/\uCE74\uB4DC \uD1A0\uAE00) ======================================== -->
  <bo-container title="\uC0AC\uC740\uD488\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uD234\uBC14: \uD0ED\uBAA8\uB4DC \uD1A0\uAE00 + \uC5D1\uC140/\uC2E0\uADDC ============================ -->
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
      <button class="btn btn_excel" @click="handleBtnAction('gifts-excel')">
        \u{1F4E5} \uC5D1\uC140
      </button>
      <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
        @click="handleBtnAction('gifts-add', $event)"
        @auxclick="handleBtnAction('gifts-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uB9AC\uC2A4\uD2B8 \uBDF0 (BoGrid) ======================================== -->
    <bo-grid v-if="tabMode==='list'" :bare="true"
      :columns="columns.baseGrid" :rows="gifts" row-key="giftId" :selected-key="detailPanel.selectedId"
      :row-actions="true"
      :sort-state="{ sortKey: uiState.sortKey, sortDir: uiState.sortDir }"
      :row-style="(g) => detailPanel.selectedId===g.giftId ? 'background:#fff8f9;' : ''" @sort="key => handleBtnAction('gifts-sort', key)" grid-id="gifts-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
      <template #head-actions>
        \uAD00\uB9AC
      </template>
      <template #row-actions="{ row: g, gridId }">
        <div class="actions">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', g, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', g, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', g)">
            \uC0AD\uC81C
          </button>
        </div>
      </template>
    </bo-grid>
    <bo-pager v-if="tabMode==='list' ? (baseGridPager.pageTotalCount > 0) : false" :pager="baseGridPager" :on-set-page="n => handleBtnAction('gifts-pager-setPage', n)" :on-size-change="() => handleSelectAction('gifts-pager-sizeChange')" />
    <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uBDF0 ================================================== -->
    <div v-else style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:14px;margin-bottom:16px;">
      <div v-if="gifts.length===0" style="grid-column:1/-1;text-align:center;color:#999;padding:60px 20px;">
        \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <div v-for="(g, idx) in gifts" :key="g?.giftId" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.05);transition:all .15s;"
        :style="detailPanel.selectedId===g.giftId?{borderColor:'#e8587a',boxShadow:'0 2px 8px rgba(232,88,122,0.15)'}:{}"
        @click="handleSelectAction('gifts-rowView', g.giftId)">
        <div style="padding:16px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:12px;color:#999;margin-bottom:6px;">
            <span style="display:inline-block;min-width:20px;font-weight:700;color:#e8587a;">{{ (baseGridPager.pageNo-1)*baseGridPager.pageSize + idx + 1 }}</span> \uC0AC\uC740\uD488 #{{ g.giftId }}
          </div>
          <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:8px;" @click="handleSelectAction('gifts-rowView', g.giftId)" :style="detailPanel.selectedId===g.giftId?{color:'#e8587a'}:{}">
            {{ g.giftNm }}
            <span v-if="detailPanel.selectedId===g.giftId" style="font-size:10px;margin-left:4px;">
              \u25BC
            </span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            <span class="badge" :class="fnTypeBadge(g.giftTypeCd)" style="font-size:11px;">
              {{ g.giftTypeCd }}
            </span>
            <span class="badge" :class="fnStatusBadge(g.giftStatusCd)" style="font-size:11px;">
              {{ g.giftStatusCd }}
            </span>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================== -->
          <div style="font-size:12px;color:#666;line-height:1.5;">
            <div>
              \u{1F3AF} {{ g.giftTypeCd === 'AMOUNT' ? (g.minOrderAmt||0).toLocaleString() + '\uC6D0\u2191' : g.giftTypeCd === 'QTY' ? (g.minOrderQty||0) + '\uAC1C\u2191' : '-' }}
            </div>
            <div>
              \u{1F4C5} {{ g.startDate }} ~ {{ g.endDate }}
            </div>
            <div style="color:#999;margin-top:4px;">
              \uC7AC\uACE0 {{ (g.giftStock||0).toLocaleString() }}\uAC1C
            </div>
          </div>
        </div>
        <div style="padding:10px 16px;background:#f9f9f9;display:flex;gap:6px;justify-content:center;align-items:center;">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction('gifts-cellClick', 'btn_row_edit', g, $event)" @auxclick.stop="handleGridCellAction('gifts-cellClick', 'btn_row_edit', g, $event)" style="font-size:11px;padding:4px 12px;">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction('gifts-cellClick', 'btn_row_delete', g)" style="font-size:11px;padding:4px 12px;">
            \uC0AD\uC81C
          </button>
          <span style="font-size:11px;color:#999;margin-left:auto;">
            #{{ g.giftId }}
          </span>
        </div>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC9C0\uB124\uC774\uC158 ================================================ -->
    <bo-pager v-if="tabMode!=='list' ? (baseGridPager.pageTotalCount > 0) : false" :pager="baseGridPager" :on-set-page="n => handleBtnAction('gifts-pager-setPage', n)" :on-size-change="() => handleSelectAction('gifts-pager-sizeChange')" />
  </bo-container>
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138\uC601\uC5ED: PmGiftDtl \uC778\uB77C\uC778 \uC784\uBCA0\uB4DC ============================== -->
  <pm-gift-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    />
  <bo-cm-popup-modal v-if="modals.isMemberPick" popup-cmd="cmPopup-member-pick" popup-code="member" :on-callback="fnCallbackModal" @close="modals.isMemberPick = false" />
  <bo-cm-popup-modal v-if="modals.isMdPick" popup-cmd="cmPopup-userMd-pick" popup-code="userMd" :on-callback="fnCallbackModal" @close="modals.isMdPick = false" />
  <bo-cm-popup-modal v-if="modals.isProdPick" popup-cmd="cmPopup-prod-pick" popup-code="prod" :on-callback="fnCallbackModal" @close="modals.isProdPick = false" />
  <bo-cm-popup-modal v-if="modals.isVendorPick" popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :on-callback="fnCallbackModal" @close="modals.isVendorPick = false" />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" :domain="cfExcelDomain"
    :area-nm="cfExcelAreaNm" :columns="cfExcelColumns" ui-nm="\uC0AC\uC740\uD488\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
