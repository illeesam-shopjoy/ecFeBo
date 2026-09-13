window.PmCouponMng={name:"PmCouponMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}},initSearchValue:{type:String,default:null}},setup(m){const{ref:X,reactive:i,computed:h,watch:Z,onMounted:A}=Vue,C=window.boApp.showToast,T=window.boApp.showConfirm,ee=window.boApp.showRefModal,g=i([]),l=i({loading:!1,error:null,tabMode:"list",sortKey:"",sortDir:"asc"}),y=i({coupon_types:[],coupon_statuses:[],date_range_opts:[]}),w=i([]),r=(e,t={})=>{if(e==="searchParam-list")return d.pageNo=1,u("SEARCH");if(e==="searchParam-reset")return Object.assign(n,_),l.sortKey="",l.sortDir="asc",d.pageNo=1,b(),u("SEARCH");if(e==="searchParam-dateRange")return P();if(e==="coupons-add")return t&&(t.ctrlKey||t.metaKey||t.button===1)?m.openNewWindow("pmCouponDtl",null,"new"):K();if(e==="coupons-excel"){N.show=!0;return}else if(e==="tab-mode"){l.tabMode=t;return}else{if(e==="detailPanel-close")return z();if(e==="coupons-sort")return R(t);if(e==="coupons-pager-setPage")return j(t);e==="memberModal-open"?p.isMemberPick=!0:e==="searchParam-memberClear"?(n.memberId="",n.memberNm=""):e==="mdModal-open"?p.isMdPick=!0:e==="searchParam-mdClear"?(n.mdUserId="",n.mdUserNm=""):e==="prodModal-open"?p.isProdPick=!0:e==="searchParam-prodClear"?(n.prodId="",n.prodNm=""):e==="vendorModal-open"?p.isVendorPick=!0:e==="searchParam-vendorClear"?(n.vendorId="",n.vendorNm=""):console.warn("[handleBtnAction] unknown cmd:",e)}},D=(e,t={})=>{if(e==="coupons-pager-sizeChange")return F();if(e==="coupons-rowView")return I(t);console.warn("[handleSelectAction] unknown cmd:",e)},E=(e,t,o,s={})=>{if(e==="coupons-cellClick"){if(t==="btn_row_edit")return s&&(s.ctrlKey||s.metaKey||s.button===1)?m.openNewWindow("pmCouponDtl",o.couponId,"edit"):U(o.couponId);if(t==="btn_row_delete")return q(o);const c=["__no__"];if(s.col&&s.col.link||c.includes(t))return s.ctrlKey||s.metaKey||s.button===1?m.openNewWindow("pmCouponDtl",o.couponId):I(o.couponId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},G=(e,t,o)=>{e==="cmPopup-member-pick"?(n.memberId=(o==null?void 0:o.selId)||"",n.memberNm=(o==null?void 0:o.selName)||"",p.isMemberPick=!1):e==="cmPopup-userMd-pick"?(n.mdUserId=(o==null?void 0:o.selId)||"",n.mdUserNm=(o==null?void 0:o.selName)||"",p.isMdPick=!1):e==="cmPopup-prod-pick"?(n.prodId=(o==null?void 0:o.selId)||"",n.prodNm=(o==null?void 0:o.selName)||"",p.isProdPick=!1):e==="cmPopup-vendor-pick"&&(n.vendorId=(o==null?void 0:o.selId)||"",n.vendorNm=(o==null?void 0:o.selName)||"",p.isVendorPick=!1)},O=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["COUPON_TYPE_CD","COUPON_STATUS_KR","DATE_RANGE_OPT"],{compNm:"PmCouponMng"});try{y.coupon_types=e.sgGetGrpCodes("COUPON_TYPE_CD"),y.coupon_statuses=e.sgGetGrpCodes("COUPON_STATUS_KR"),y.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")}catch(t){console.error("[fnLoadCodes]",t)}w.splice(0,w.length,...await window.boUtil.bofLoadSiteOptions())},d=i({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),a=i({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),n=i({searchType:"",searchValue:"",dateRange:"",dateRangeType:"",dateRangeStart:"",dateRangeEnd:"",couponStatusCd:"",memberId:"",memberNm:"",mdUserId:"",mdUserNm:"",prodId:"",prodNm:"",vendorId:"",vendorNm:""}),_={},p=i({isMemberPick:!1,isMdPick:!1,isProdPick:!1,isVendorPick:!1}),P=()=>{boUtil.bofApplyDateRange(n),d.pageNo=1},v={nm:{asc:"couponNm asc",desc:"couponNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},x=()=>{const{sortKey:e,sortDir:t}=l;return!e||!v[e]?{}:{sort:v[e][t]}},R=e=>{l.sortKey===e?l.sortDir==="asc"?l.sortDir="desc":(l.sortKey="",l.sortDir="asc"):(l.sortKey=e,l.sortDir="asc"),d.pageNo=1,u()},u=async(e="DEFAULT")=>{var t;l.loading=!0;try{const o={pageNo:d.pageNo,pageSize:d.pageSize,...x(),...coUtil.cofOmitEmpty(n)};o.searchValue&&!o.searchType&&(o.searchType="couponId,couponNm,couponCd");const c=(t=(await boApiSvc.pmCoupon.getPage(o,"\uCFE0\uD3F0\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data;g.splice(0,g.length,...(c==null?void 0:c.pageList)||[]),d.pageTotalCount=(c==null?void 0:c.pageTotalCount)||0,d.pageTotalPage=(c==null?void 0:c.pageTotalPage)||coUtil.cofTotalPage(d),coUtil.cofBuildPagerNums(d),Object.assign(d.pageCond,(c==null?void 0:c.pageCond)||d.pageCond),l.error=null}catch(o){console.error("[catch-info]",o),l.error=o.message}finally{l.loading=!1}};A(async()=>{const t=new Date().getFullYear();Object.assign(n,{dateRangeType:"reg_date",dateRangeStart:`${t-3}-01-01`,dateRangeEnd:`${t}-12-31`}),await O(),m.initSearchValue&&(n.searchValue=m.initSearchValue,n.dateRangeStart="",n.dateRangeEnd="");const o=new URLSearchParams(window.location.search),s=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(n).forEach(c=>{!s.includes(c)&&o.has(c)&&(n[c]=o.get(c))}),await u("DEFAULT"),Object.assign(_,n)});const I=e=>{a.selectedId=e,a.openMode="view",a.active=!0,a.reloadTrigger++},b=()=>{a.selectedId="__new__",a.openMode="view",a.active=!1,a.resetSeq++},U=e=>{a.selectedId=e,a.openMode="edit",a.active=!0,a.reloadTrigger++},K=()=>{a.selectedId="__new__",a.openMode="edit",a.active=!0,a.resetSeq++,a.reloadTrigger++},z=()=>{b()},L=(e,t={})=>{if(e==="pmCouponMng"){t.reload&&u("RELOAD"),b();return}if(e==="__cancelEdit__"){if(a.selectedId&&a.selectedId!=="__new__"){a.openMode="view";return}b();return}if(e==="__closeDtl__"){b();return}if(e==="__switchToEdit__"){a.openMode="edit";return}m.navigate(e,t)},V=h(()=>a.selectedId==="__new__"?null:a.selectedId),B=h(()=>`${a.selectedId}_${a.openMode}_${a.resetSeq}`),S=e=>e.discountRate?(e.discountRate||0)+"%":coUtil.cofWon(e.discountAmt),$={\uD65C\uC131:"badge-green",\uB9CC\uB8CC:"badge-red",\uBE44\uD65C\uC131:"badge-gray"},M=e=>coUtil.cofCodeBadge("PROMO_STATUS",e,$[e]||"badge-gray"),j=async e=>{e>=1&&e<=d.pageTotalPage&&(d.pageNo=e,await u("PAGE_CLICK"))},F=()=>{d.pageNo=1,u("DEFAULT")},q=async e=>{var s,c;if(!await T("\uC0AD\uC81C",`[${e.couponNm}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)||!Array.isArray(g))return;const o=g.findIndex(f=>f.couponId===e.couponId);o!==-1&&g.splice(o,1),a.selectedId===e.couponId&&b();try{const f=await boApiSvc.pmCoupon.remove(e.couponId,"\uCFE0\uD3F0\uAD00\uB9AC","\uC0AD\uC81C");C&&C("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(f){console.error("[catch-info]",f);const Q=((c=(s=f.response)==null?void 0:s.data)==null?void 0:c.message)||f.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";C&&C(Q,"error",0)}},N=i({show:!1}),W=h(()=>"pmCoupon"),Y=h(()=>"\uCFE0\uD3F0"),H=h(()=>k.baseGrid),J=()=>{const e={...x(),...coUtil.cofOmitEmpty(n)};return e.searchValue&&!e.searchType&&(e.searchType="couponId,couponNm,couponCd"),e},te=Vue.toRef(l,"tabMode"),k={};return k.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"couponId",label:"ID"},{value:"couponNm",label:"\uCFE0\uD3F0\uBA85"},{value:"couponCd",label:"\uCF54\uB4DC"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"couponStatusCd",type:"select",label:"\uC0C1\uD0DC",options:()=>y.coupon_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"memberId",label:"\uD68C\uC6D0",type:"pick",nameKey:"memberNm",display:e=>e.memberNm,placeholder:"\uD68C\uC6D0 \uC120\uD0DD",onOpen:()=>r("memberModal-open"),onClear:()=>r("searchParam-memberClear")},{key:"mdUserId",label:"\uB2F4\uB2F9MD",type:"pick",nameKey:"mdUserNm",display:e=>e.mdUserNm,placeholder:"MD \uC120\uD0DD",onOpen:()=>r("mdModal-open"),onClear:()=>r("searchParam-mdClear")},{key:"prodId",label:"\uC0C1\uD488",type:"pick",nameKey:"prodNm",display:e=>e.prodNm,placeholder:"\uC0C1\uD488 \uC120\uD0DD",onOpen:()=>r("prodModal-open"),onClear:()=>r("searchParam-prodClear")},{key:"vendorId",label:"\uC5C5\uCCB4",type:"pick",nameKey:"vendorNm",display:e=>e.vendorNm,placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",onOpen:()=>r("vendorModal-open"),onClear:()=>r("searchParam-vendorClear")},{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>y.date_range_opts,onRangeChange:()=>P()},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>w,nullLabel:"\uC804\uCCB4"}],k.baseGrid=[{key:"couponNm",label:"\uCFE0\uD3F0\uBA85",sortKey:"nm",link:!0,cellInnerStyle:e=>a.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"couponCd",label:"\uCF54\uB4DC",cellInnerStyle:"background:#f5f5f5;padding:2px 6px;border-radius:4px;font-size:12px;font-family:monospace;"},{key:"discount",label:"\uD560\uC778",fmt:(e,t)=>S(t)},{key:"minOrderAmt",label:"\uCD5C\uC18C\uC8FC\uBB38",fmt:e=>e?e.toLocaleString()+"\uC6D0\u2191":"-"},{key:"targetTypeCdNm",label:"\uBC1C\uAE09\uB300\uC0C1",fmt:e=>e||"-"},{key:"issue",label:"\uBC1C\uAE09/\uC0AC\uC6A9",fmt:(e,t)=>(t.issueCnt||0)+" / "+(t.issueLimit||0)},{key:"validTo",label:"\uB9CC\uB8CC\uC77C",sortKey:"reg"},{key:"couponStatusCd",label:"\uC0C1\uD0DC",badge:e=>M(e.couponStatusCdNm||e.couponStatusCd),fmt:(e,t)=>t.couponStatusCdNm||t.couponStatusCd},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb"}],{columns:k,modals:p,coupons:g,uiState:l,searchParam:n,baseGridPager:d,uiStateDetail:a,handleBtnAction:r,handleSelectAction:D,handleGridCellAction:E,cfDetailEditId:V,cfDetailKey:B,discountLabel:S,fnStatusBadge:M,inlineNavigate:L,fnCallbackModal:G,get tabMode(){return l.tabMode},set tabMode(e){l.tabMode=e},get selectedId(){return a.selectedId},excelModal:N,cfExcelDomain:W,cfExcelAreaNm:Y,cfExcelColumns:H,buildExcelParams:J}},template:`
<bo-page title="\uCFE0\uD3F0\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uCFE0\uD3F0\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
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
      <button class="btn btn_excel" @click="handleBtnAction('coupons-excel')">
        \u{1F4E5} \uC5D1\uC140
      </button>
      <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
        @click="handleBtnAction('coupons-add', $event)"
        @auxclick="handleBtnAction('coupons-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
    <bo-grid v-if="tabMode==='list'" :bare="true"
      :columns="columns.baseGrid" :rows="coupons" row-key="couponId" :selected-key="selectedId"
      :row-actions="true"
      :sort-state="{ sortKey: uiState.sortKey, sortDir: uiState.sortDir }"
      :row-style="(c) => selectedId===c.couponId ? 'background:#fff8f9;' : ''"
      @sort="key => handleBtnAction('coupons-sort', key)"
      grid-id="coupons-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
      <template #head-actions>
        \uAD00\uB9AC
      </template>
      <template #row-actions="{ row: c, gridId }">
        <div class="actions">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', c, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', c, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', c)">
            \uC0AD\uC81C
          </button>
        </div>
      </template>
    </bo-grid>
    <bo-pager v-if="tabMode==='list' ? (baseGridPager.pageTotalCount > 0) : false" :pager="baseGridPager" :on-set-page="n => handleBtnAction('coupons-pager-setPage', n)" :on-size-change="() => handleSelectAction('coupons-pager-sizeChange')" />
    <!-- ===== \u25A1.\u25A1. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uBDF0 ================================================== -->
    <div v-else style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:14px;margin-bottom:16px;">
      <div v-if="coupons.length===0" style="grid-column:1/-1;text-align:center;color:#999;padding:60px 20px;">
        \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <div v-for="(c, idx) in coupons" :key="c?.couponId" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.05);transition:all .15s;"
        :style="selectedId===c.couponId?{borderColor:'#e8587a',boxShadow:'0 2px 8px rgba(232,88,122,0.15)'}:{}"
        @click="handleSelectAction('coupons-rowView', c.couponId)">
        <div style="padding:16px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:12px;color:#999;margin-bottom:6px;">
            <span style="display:inline-block;min-width:20px;font-weight:700;color:#e8587a;">{{ (baseGridPager.pageNo-1)*baseGridPager.pageSize + idx + 1 }}</span>
            \uCFE0\uD3F0 #{{ c.couponId }}
          </div>
          <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:8px;" @click="handleSelectAction('coupons-rowView', c.couponId)" :style="selectedId===c.couponId?{color:'#e8587a'}:{}">
            {{ c.couponNm }}
            <span v-if="selectedId===c.couponId" style="font-size:10px;margin-left:4px;">
              \u25BC
            </span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            <span class="badge" :class="fnStatusBadge(c.couponStatusCdNm || c.couponStatusCd)" style="font-size:11px;">
              {{ c.couponStatusCdNm || c.couponStatusCd }}
            </span>
          </div>
          <div style="font-size:12px;color:#666;line-height:1.5;">
            <div>
              \u{1F4B0} {{ discountLabel(c) }}
            </div>
            <div>
              \u{1F4C5} {{ c.validFrom }} ~ {{ c.validTo }}
            </div>
            <div style="color:#999;margin-top:4px;">
              \uB9CC\uB8CC {{ c.validTo }}
            </div>
          </div>
        </div>
        <div style="padding:10px 16px;background:#f9f9f9;display:flex;gap:6px;justify-content:center;align-items:center;">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction('coupons-cellClick', 'btn_row_edit', c, $event)" @auxclick.stop="handleGridCellAction('coupons-cellClick', 'btn_row_edit', c, $event)" style="font-size:11px;padding:4px 12px;">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction('coupons-cellClick', 'btn_row_delete', c)" style="font-size:11px;padding:4px 12px;">
            \uC0AD\uC81C
          </button>
        </div>
      </div>
    </div>
    <bo-pager v-if="tabMode!=='list' ? (baseGridPager.pageTotalCount > 0) : false" :pager="baseGridPager" :on-set-page="n => handleBtnAction('coupons-pager-setPage', n)" :on-size-change="() => handleSelectAction('coupons-pager-sizeChange')" />
    <!-- ===== \u25A1.\u25A1. \uCE74\uB4DC \uBDF0 ================================================== -->
  </bo-container>
  <!-- ===== \u25A0. \uC120\uD0DD \uD31D\uC5C5 \uBAA8\uB2EC ================================================== -->
  <bo-cm-popup-modal v-if="modals.isMemberPick" popup-cmd="cmPopup-member-pick" popup-code="member" :on-callback="fnCallbackModal" @close="modals.isMemberPick = false" />
  <bo-cm-popup-modal v-if="modals.isMdPick" popup-cmd="cmPopup-userMd-pick" popup-code="userMd" :on-callback="fnCallbackModal" @close="modals.isMdPick = false" />
  <bo-cm-popup-modal v-if="modals.isProdPick" popup-cmd="cmPopup-prod-pick" popup-code="prod" :on-callback="fnCallbackModal" @close="modals.isProdPick = false" />
  <bo-cm-popup-modal v-if="modals.isVendorPick" popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :on-callback="fnCallbackModal" @close="modals.isVendorPick = false" />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" :domain="cfExcelDomain"
    :area-nm="cfExcelAreaNm" :columns="cfExcelColumns" ui-nm="\uCFE0\uD3F0\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138: CouponDtl \uC784\uBCA0\uB4DC (\uD56D\uC0C1 \uD45C\uC2DC, \uC9C4\uC785 \uC2DC \uBE48 \uC2E0\uADDC \uD3FC) ============= -->
  <pm-coupon-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="uiStateDetail.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="uiStateDetail.active"
    :reload-trigger="uiStateDetail.reloadTrigger"
    />
  <!-- ===== \u25A1. \uD558\uB2E8 \uC0C1\uC138: CouponDtl \uC784\uBCA0\uB4DC ==================================== -->
</bo-page>
`};
