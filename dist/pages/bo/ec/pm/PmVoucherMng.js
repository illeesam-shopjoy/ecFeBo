window.PmVoucherMng={name:"PmVoucherMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(m){const{ref:re,reactive:i,computed:h,watch:le,onMounted:G}=Vue,y=window.boApp.showToast,V=window.boApp.showConfirm,se=window.boApp.showRefModal,b=i([]),n=i({loading:!1,error:null,tabMode:"list",sortKey:"",sortDir:"asc"}),v=i({voucher_statuses:[],promo_statuses:[],date_range_opts:[]}),P=i([]),l=i({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),o=i({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),_=(e,t={})=>{if(e==="searchParam-list")return l.pageNo=1,u("SEARCH");if(e==="searchParam-reset")return Object.assign(s,k),n.sortKey="",n.sortDir="asc",l.pageNo=1,p(),u("SEARCH");if(e==="searchParam-dateRange")return K();if(e==="vouchers-add")return t&&(t.ctrlKey||t.metaKey||t.button===1)?m.openNewWindow("pmVoucherDtl",null,"new"):j();if(e==="vouchers-excel"){M.show=!0;return}else if(e==="tab-mode"){n.tabMode=t;return}else{if(e==="detailPanel-close")return W();if(e==="vouchers-sort")return z(t);if(e==="vouchers-pager-setPage")return Y(t);if(e==="vouchers-card-view")return S(t);e==="memberModal-open"?C.isMemberPick=!0:e==="searchParam-memberClear"?(s.memberId="",s.memberNm=""):console.warn("[handleBtnAction] unknown cmd:",e)}},O=(e,t={})=>{if(e==="vouchers-pager-sizeChange")return J();console.warn("[handleSelectAction] unknown cmd:",e)},L=(e,t,a,r={})=>{if(e==="vouchers-cellClick"){if(t==="btn_row_edit")return r&&(r.ctrlKey||r.metaKey||r.button===1)?m.openNewWindow("pmVoucherDtl",a.voucherId,"edit"):$(a.voucherId);if(t==="btn_row_delete")return X(a);const c=["__no__"];if(r.col&&r.col.link||c.includes(t))return r.ctrlKey||r.metaKey||r.button===1?m.openNewWindow("pmVoucherDtl",a.voucherId):S(a.voucherId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},U=(e,t,a)=>{e==="cmPopup-member-pick"&&(s.memberId=(a==null?void 0:a.selId)||"",s.memberNm=(a==null?void 0:a.selName)||"",C.isMemberPick=!1)},s=i({searchType:"",searchValue:"",dateRange:"",dateRangeType:"",dateRangeStart:"",dateRangeEnd:"",voucherStatusCd:"",memberId:"",memberNm:""}),k={},C=i({isMemberPick:!1}),B=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["VOUCHER_STATUS_CD","PROMO_STATUS","DATE_RANGE_OPT"],{compNm:"PmVoucherMng"});try{v.voucher_statuses=e.sgGetGrpCodes("VOUCHER_STATUS_CD"),v.promo_statuses=e.sgGetGrpCodes("PROMO_STATUS"),v.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")}catch(t){console.error("[fnLoadCodes]",t)}P.splice(0,P.length,...await window.boUtil.bofLoadSiteOptions())},I={nm:{asc:"voucherNm asc",desc:"voucherNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},A=()=>{const{sortKey:e,sortDir:t}=n;return!e||!I[e]?{}:{sort:I[e][t]}},z=e=>{n.sortKey===e?n.sortDir==="asc"?n.sortDir="desc":(n.sortKey="",n.sortDir="asc"):(n.sortKey=e,n.sortDir="asc"),l.pageNo=1,u()},u=async(e="DEFAULT")=>{var t,a,r,c,d,x,D,N,E,R;n.loading=!0;try{const g={pageNo:l.pageNo,pageSize:l.pageSize,...A(),...coUtil.cofOmitEmpty(s)};g.searchValue&&!g.searchType&&(g.searchType="voucherNm,voucherId");const f=await boApiSvc.pmVoucher.getPage(g,"\uBC14\uC6B0\uCC98\uAD00\uB9AC","\uC870\uD68C"),ne=((a=(t=f.data)==null?void 0:t.data)==null?void 0:a.pageList)||((c=(r=f.data)==null?void 0:r.data)==null?void 0:c.list)||[];b.splice(0,b.length,...ne),l.pageTotalCount=((x=(d=f.data)==null?void 0:d.data)==null?void 0:x.pageTotalCount)||0,l.pageTotalPage=((N=(D=f.data)==null?void 0:D.data)==null?void 0:N.pageTotalPage)||coUtil.cofTotalPage(l),coUtil.cofBuildPagerNums(l),Object.assign(l.pageCond,((R=(E=f.data)==null?void 0:E.data)==null?void 0:R.pageCond)||l.pageCond),n.error=null}catch(g){console.error("[catch-info]",g),n.error=g.message}finally{n.loading=!1}};G(async()=>{const t=new Date().getFullYear();Object.assign(s,{dateRangeType:"reg_date",dateRangeStart:`${t-3}-01-01`,dateRangeEnd:`${t}-12-31`}),await B();const a=new URLSearchParams(window.location.search),r=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(s).forEach(c=>{!r.includes(c)&&a.has(c)&&(s[c]=a.get(c))}),await u("DEFAULT"),Object.assign(k,s)});const K=()=>{boUtil.bofApplyDateRange(s),l.pageNo=1},S=e=>{o.selectedId=e,o.openMode="view",o.active=!0,o.reloadTrigger++},$=e=>{o.selectedId=e,o.openMode="edit",o.active=!0,o.reloadTrigger++},j=()=>{o.selectedId="__new__",o.openMode="edit",o.active=!0,o.resetSeq++,o.reloadTrigger++},p=()=>{o.selectedId="__new__",o.openMode="view",o.active=!1,o.resetSeq++},W=()=>{p()},q=(e,t={})=>{if(e==="pmVoucherMng"){t.reload&&u("RELOAD"),p();return}if(e==="__cancelEdit__"){if(o.selectedId&&o.selectedId!=="__new__"){o.openMode="view";return}p();return}if(e==="__closeDtl__"){p();return}if(e==="__switchToEdit__"){o.openMode="edit";return}m.navigate(e,t)},F=h(()=>o.selectedId==="__new__"?null:o.selectedId),Q=h(()=>`${o.selectedId}_${o.openMode}_${o.resetSeq}`),H={\uD65C\uC131:"badge-green",\uBE44\uD65C\uC131:"badge-gray",\uC885\uB8CC:"badge-red"},T=e=>coUtil.cofCodeBadge("PROMO_STATUS",e,H[e]||"badge-gray"),Y=async e=>{e>=1&&e<=l.pageTotalPage&&(l.pageNo=e,await u("PAGE_CLICK"))},J=()=>{l.pageNo=1,u("DEFAULT")},X=async e=>{var r,c;if(!await V("\uC0AD\uC81C",`[${e.voucherNm}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const a=(b||[]).findIndex(d=>d.voucherId===e.voucherId);a!==-1&&b.splice(a,1),o.selectedId===e.voucherId&&p();try{const d=await boApiSvc.pmVoucher.remove(e.voucherId,"\uBC14\uC6B0\uCC98\uAD00\uB9AC","\uC0AD\uC81C");y&&y("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(d){console.error("[catch-info]",d);const x=((c=(r=d.response)==null?void 0:r.data)==null?void 0:c.message)||d.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";y&&y(x,"error",0)}},M=i({show:!1}),Z=h(()=>"pmVoucher"),ee=h(()=>"\uC0C1\uD488\uAD8C"),te=h(()=>w.baseGrid),oe=()=>{const e={...A(),...coUtil.cofOmitEmpty(s)};return e.searchValue&&!e.searchType&&(e.searchType="voucherNm,voucherId"),e},ae=Vue.toRef(n,"tabMode"),w={};return w.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"voucherNm",label:"\uC0C1\uD488\uAD8C\uBA85"},{value:"voucherId",label:"ID"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"voucherStatusCd",type:"select",label:"\uC0C1\uD0DC",options:()=>v.voucher_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"memberId",label:"\uD68C\uC6D0",type:"pick",nameKey:"memberNm",display:e=>e.memberNm,placeholder:"\uD68C\uC6D0 \uC120\uD0DD",onOpen:()=>_("memberModal-open"),onClear:()=>_("searchParam-memberClear")},{key:"dateRange",type:"dateRange",label:"\uD310\uB9E4\uAE30\uAC04",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>v.date_range_opts,onRangeChange:()=>_("searchParam-dateRange")},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>P,nullLabel:"\uC804\uCCB4"}],w.baseGrid=[{key:"voucherNm",label:"\uC0C1\uD488\uAD8C\uBA85",sortKey:"nm",link:!0,cellInnerStyle:e=>o.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"voucherValue",label:"\uC561\uBA74\uAC00",align:"right",fmt:e=>coUtil.cofWon(e)},{key:"salePrice",label:"\uD310\uB9E4\uAC00",align:"right",fmt:e=>coUtil.cofWon(e)},{key:"issueQty",label:"\uBC1C\uD589\uB9E4\uC218",align:"center",fmt:e=>(e||0).toLocaleString()+"\uAC1C"},{key:"soldQty",label:"\uD310\uB9E4\uB9E4\uC218",align:"center",fmt:e=>(e||0).toLocaleString()+"\uAC1C"},{key:"remain",label:"\uC794\uC5EC",align:"center",fmt:(e,t)=>((t.issueQty||0)-(t.soldQty||0)).toLocaleString()+"\uAC1C"},{key:"startDate",label:"\uC2DC\uC791\uC77C",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"endDate",label:"\uC885\uB8CC\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"voucherStatusCd",label:"\uC0C1\uD0DC",badge:e=>T(e.voucherStatusCd)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8",cellStyle:"color:#2563eb"}],{columns:w,vouchers:b,uiState:n,searchParam:s,baseGridPager:l,detailPanel:o,handleBtnAction:_,handleSelectAction:O,handleGridCellAction:L,cfDetailEditId:F,cfDetailKey:Q,tabMode:ae,fnStatusBadge:T,loadView:S,inlineNavigate:q,modals:C,fnCallbackModal:U,excelModal:M,cfExcelDomain:Z,cfExcelAreaNm:ee,cfExcelColumns:te,buildExcelParams:oe}},template:`
<bo-page title="\uC0C1\uD488\uAD8C\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uC0C1\uD488\uAD8C\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
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
      <button class="btn btn_excel" @click="handleBtnAction('vouchers-excel')">
        \u{1F4E5} \uC5D1\uC140
      </button>
      <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
        @click="handleBtnAction('vouchers-add', $event)"
        @auxclick="handleBtnAction('vouchers-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
    <bo-grid v-if="tabMode==='list'" :bare="true"
      :columns="columns.baseGrid" :rows="vouchers" row-key="voucherId" :selected-key="detailPanel.selectedId"
      :row-actions="true"
      :sort-state="{ sortKey: uiState.sortKey, sortDir: uiState.sortDir }"
      :row-style="(v) => detailPanel.selectedId===v.voucherId ? 'background:#fff8f9;' : ''" @sort="key => handleBtnAction('vouchers-sort', key)" grid-id="vouchers-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
      <template #head-actions>
        \uAD00\uB9AC
      </template>
      <template #row-actions="{ row: v, gridId }">
        <div class="actions">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', v, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', v, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', v)">
            \uC0AD\uC81C
          </button>
        </div>
      </template>
    </bo-grid>
    <bo-pager v-if="tabMode==='list' ? (baseGridPager.pageTotalCount > 0) : false" :pager="baseGridPager" :on-set-page="n => handleBtnAction('vouchers-pager-setPage', n)" :on-size-change="() => handleSelectAction('vouchers-pager-sizeChange')" />
    <!-- ===== \u25A1.\u25A1. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uBDF0 ================================================== -->
    <div v-else style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:14px;margin-bottom:16px;">
      <div v-if="vouchers.length===0" style="grid-column:1/-1;text-align:center;color:#999;padding:60px 20px;">
        \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <div v-for="(v, idx) in vouchers" :key="v?.voucherId" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.05);transition:all .15s;"
        :style="detailPanel.selectedId===v.voucherId?{borderColor:'#e8587a',boxShadow:'0 2px 8px rgba(232,88,122,0.15)'}:{}"
        @click="handleBtnAction('vouchers-card-view', v.voucherId)">
        <div style="padding:16px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:12px;color:#999;margin-bottom:6px;">
            \uC0C1\uD488\uAD8C #{{ v.voucherId }}
          </div>
          <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:8px;" @click="handleBtnAction('vouchers-card-view', v.voucherId)" :style="detailPanel.selectedId===v.voucherId?{color:'#e8587a'}:{}">
            {{ v.voucherNm }}
            <span v-if="detailPanel.selectedId===v.voucherId" style="font-size:10px;margin-left:4px;">
              \u25BC
            </span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            <span class="badge" :class="fnStatusBadge(v.voucherStatusCd)" style="font-size:11px;">
              {{ v.voucherStatusCd }}
            </span>
          </div>
          <div style="font-size:12px;color:#666;line-height:1.5;">
            <div>
              \u{1F4B0} \uC561\uBA74 {{ (v.voucherValue||0).toLocaleString() }}\uC6D0 / \uD310\uB9E4 {{ (v.salePrice||0).toLocaleString() }}\uC6D0
            </div>
            <div>
              \u{1F4C5} {{ v.startDate }} ~ {{ v.endDate }}
            </div>
            <div style="color:#999;margin-top:4px;">
              \uBC1C\uD589 {{ (v.issueQty||0).toLocaleString() }}\uAC1C / \uD310\uB9E4 {{ (v.soldQty||0).toLocaleString() }}\uAC1C
            </div>
          </div>
        </div>
        <div style="padding:10px 16px;background:#f9f9f9;display:flex;gap:6px;justify-content:center;align-items:center;">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction('vouchers-cellClick', 'btn_row_edit', v, $event)" @auxclick.stop="handleGridCellAction('vouchers-cellClick', 'btn_row_edit', v, $event)" style="font-size:11px;padding:4px 12px;">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction('vouchers-cellClick', 'btn_row_delete', v)" style="font-size:11px;padding:4px 12px;">
            \uC0AD\uC81C
          </button>
          <span style="font-size:11px;color:#999;margin-left:auto;">
            #{{ v.voucherId }}
          </span>
        </div>
      </div>
    </div>
    <bo-pager v-if="tabMode!=='list' ? (baseGridPager.pageTotalCount > 0) : false" :pager="baseGridPager" :on-set-page="n => handleBtnAction('vouchers-pager-setPage', n)" :on-size-change="() => handleSelectAction('vouchers-pager-sizeChange')" />
    <!-- ===== \u25A1.\u25A1. \uCE74\uB4DC \uBDF0 ================================================== -->
  </bo-container>
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138: VoucherDtl \uC784\uBCA0\uB4DC (\uD56D\uC0C1 \uD45C\uC2DC, \uC9C4\uC785 \uC2DC \uBE48 \uC2E0\uADDC \uD3FC) ============= -->
  <pm-voucher-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    />
  <bo-cm-popup-modal v-if="modals.isMemberPick" popup-cmd="cmPopup-member-pick" popup-code="member" :on-callback="fnCallbackModal" @close="modals.isMemberPick = false" />
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" :domain="cfExcelDomain"
    :area-nm="cfExcelAreaNm" :columns="cfExcelColumns" ui-nm="\uC0C1\uD488\uAD8C\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
