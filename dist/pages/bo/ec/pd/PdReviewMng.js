window.PdReviewMng={name:"PdReviewMng",props:{navigate:{type:Function,required:!0}},setup(pe){const{ref:A,reactive:n,computed:R,watch:ge,onMounted:U}=Vue,f=window.boApp.showToast,L=n([]),V=n([]),S=n([]),s=n({loading:!1,error:null,selectedId:null,sortKey:"",sortDir:"asc"}),g=n({REVIEW_STATUS:[],REVIEW_RATING:[]}),P=n([]),B=(e,t={})=>{if(e==="searchParam-list")return ae();if(e==="searchParam-reset")return oe();if(e==="detailPanel-close"){c.value=null;return}else{if(e==="prodReviews-close")return D(d.value);if(e==="statusModal-close")return z();if(e==="reviews-sort")return O(t);if(e==="reviews-pager-setPage")return se(t);if(e==="prodReviews-pager-setPage")return H(t);console.warn("[handleBtnAction] unknown cmd:",e)}},h=(e,t={})=>{if(e==="reviews-pager-sizeChange")return le();if(e==="prodReviews-pager-sizeChange")return Y();if(e==="reviews-rowPreview")return $(t);if(e==="reviews-rowStatusChange")return Q(t.row,t.evt);if(e==="reviews-rowProdClick")return D(t);console.warn("[handleSelectAction] unknown cmd:",e)},W=(e,t,a,o={})=>{if(e==="reviews-cellClick"||e==="prodReviews-cellClick"){const b=["__no__"];if(o.col&&o.col.link||b.includes(t))return j(a)}else console.warn("[handleGridCellAction] unknown cmd:",e)},K=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["REVIEW_STATUS_CD","REVIEW_RATING"],{compNm:"PdReviewMng"});try{g.REVIEW_STATUS=e.sgGetGrpCodes("REVIEW_STATUS_CD"),g.REVIEW_RATING=e.sgGetGrpCodes("REVIEW_RATING")}catch(t){console.error("[fnLoadCodes]",t)}P.splice(0,P.length,...await window.boUtil.bofLoadSiteOptions())},k={reg:{asc:"regDate asc",desc:"regDate desc"}},N=()=>{const{sortKey:e,sortDir:t}=s;return!e||!k[e]?{}:{sort:k[e][t]}},O=e=>{s.sortKey===e?s.sortDir==="asc"?s.sortDir="desc":(s.sortKey="",s.sortDir="asc"):(s.sortKey=e,s.sortDir="asc"),l.pageNo=1,u()},u=async(e="DEFAULT")=>{var t;s.loading=!0;try{const o=(t=(await boApiSvc.pdReview.getPage({pageNo:l.pageNo,pageSize:l.pageSize,...N(),...coUtil.cofOmitEmpty(w)},"\uC0C1\uD488\uB9AC\uBDF0\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data;S.splice(0,S.length,...(o==null?void 0:o.pageList)||[]),l.pageTotalCount=(o==null?void 0:o.pageTotalCount)||0,l.pageTotalPage=(o==null?void 0:o.pageTotalPage)||coUtil.cofTotalPage(l),coUtil.cofBuildPagerNums(l),Object.assign(l.pageCond,(o==null?void 0:o.pageCond)||l.pageCond),s.error=null}catch(a){console.error("[catch-info]",a),s.error=a.message}finally{s.loading=!1}};U(async()=>{await K();const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(w).forEach(a=>{!t.includes(a)&&e.has(a)&&(w[a]=e.get(a))}),await u("DEFAULT"),Object.assign(_,w)});const l=n({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),c=A(null),w=n({reviewStatusCd:"",rating:""}),_={},y={ACTIVE:"\uACF5\uAC1C",HIDDEN:"\uC228\uAE40",DELETED:"\uC0AD\uC81C"},F={ACTIVE:"badge-green",HIDDEN:"badge-orange",DELETED:"badge-red"},I=e=>coUtil.cofCodeBadge("REVIEW_STATUS_CD",e,F[e]||"badge-gray"),M=e=>{const t=(L||[]).find(a=>a.productId===e||a.prodId===e);return t?t.prodNm||t.productName:""},T=e=>{const t=(V||[]).find(a=>a.userId===e||a.memberId===e);return t?t.memberNm||t.name:e},m=R(()=>S.find(e=>e.reviewId===c.value)||p.find(e=>e.reviewId===c.value)||null),j=e=>{c.value=c.value===e.reviewId?null:e.reviewId},$=e=>{e&&window.open(`${window.pageUrl("index.html")}?page=prodView&prodid=${e}`,"_blank","width=1200,height=800,scrollbars=yes")},p=n([]),i=n({pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,50],pageCond:{},pageNums:[1]}),d=A(null),q=()=>{const e=i.pageNo,t=i.pageTotalPage,a=Math.max(1,e-2),o=Math.min(t,a+4);i.pageNums=Array.from({length:o-a+1},(b,v)=>a+v)},E=async()=>{var e;if(!d.value){p.splice(0);return}try{const a=(e=(await boApiSvc.pdReview.getPage({pageNo:i.pageNo,pageSize:i.pageSize,prodId:d.value},"\uC0C1\uD488\uB9AC\uBDF0\uAD00\uB9AC","\uC0C1\uD488\uBCC4\uB9AC\uBDF0\uC870\uD68C")).data)==null?void 0:e.data;p.splice(0,p.length,...(a==null?void 0:a.pageList)||[]),i.pageTotalCount=(a==null?void 0:a.pageTotalCount)||0,i.pageTotalPage=(a==null?void 0:a.pageTotalPage)||1,q()}catch(t){console.error("[handleSearchProdReviews]",t)}},D=async e=>{if(e){if(c.value=null,d.value===e){d.value=null,p.splice(0);return}d.value=e,i.pageNo=1,await E()}},H=async e=>{e>=1&&e<=i.pageTotalPage&&(i.pageNo=e,await E())},Y=()=>{i.pageNo=1,E()},r=n({show:!1,row:null,newStatus:""}),J=(e,t)=>{!t||t===e.reviewStatusCd||(r.row=e,r.newStatus=t,r.show=!0)},Q=(e,t)=>{const a=t&&t.target?t.target.value:"";J(e,a),t&&t.target&&e&&(t.target.value=e.reviewStatusCd)},X=R(()=>r.row&&r.row.reviewTitle||""),Z=R(()=>r.row&&r.row.reviewStatusCd||""),z=()=>{r.show=!1,r.row=null,r.newStatus=""},ee=(e,t,a)=>{if(e==="review-status")return a?te(a.reason):z()},te=async e=>{var o,b;const t=r.row,a=r.newStatus;if(t){if(!(e||"").trim()){f("\uBCC0\uACBD \uC0AC\uC720\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.","error");return}try{const v=await boApiSvc.pdReview.updateStatus(t.reviewId,{reviewStatusCd:a,statusChgReason:e},"\uB9AC\uBDF0\uAD00\uB9AC","\uC0C1\uD0DC\uBCC0\uACBD");t.reviewStatusCd=a;const x=ce=>{const G=ce.find(de=>de.reviewId===t.reviewId);G&&(G.reviewStatusCd=a)};x(S),x(p),m.value&&m.value.reviewId===t.reviewId&&(m.value.reviewStatusCd=a),f&&f(`\uC0C1\uD0DC\uAC00 [${y[a]}] \uB85C \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success"),r.show=!1}catch(v){console.error("[confirmStatusChange]",v);const x=((b=(o=v.response)==null?void 0:o.data)==null?void 0:b.message)||v.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";f&&f(x,"error",0)}}},ae=async()=>{l.pageNo=1,await u("DEFAULT")},oe=async()=>{Object.assign(w,_),s.sortKey="",s.sortDir="asc",l.pageNo=1,c.value=null,d.value=null,p.splice(0),await u()},se=async e=>{e>=1&&e<=l.pageTotalPage&&(l.pageNo=e,await u("PAGE_CLICK"))},le=()=>{l.pageNo=1,u("DEFAULT")},C={};C.baseSearch=[{key:"searchValue",label:"\uB9AC\uBDF0\uC81C\uBAA9",type:"text",placeholder:"\uB9AC\uBDF0 \uC81C\uBAA9 \uAC80\uC0C9"},{key:"reviewStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>g.REVIEW_STATUS,nullLabel:"\uC804\uCCB4"},{key:"rating",label:"\uD3C9\uC810",type:"select",options:()=>g.REVIEW_RATING,nullLabel:"\uC804\uCCB4"},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>P,nullLabel:"\uC804\uCCB4"}],C.listGrid=[{key:"reviewTitle",label:"\uB9AC\uBDF0 \uC81C\uBAA9",link:!0,cellInnerClass:"title-link"},{key:"prodId",label:"\uC0C1\uD488ID",style:"width:110px",cellStyle:"font-size:12px;",linkToggle:{active:e=>d.value===e.prodId,activeStyle:"color:#e8587a;font-weight:700;",baseStyle:"color:#1e88e5;font-weight:500;",title:"\uD574\uB2F9 \uC0C1\uD488\uC758 \uB9AC\uBDF0\uB9CC \uD558\uB2E8\uC5D0 \uD45C\uC2DC",onClick:e=>h("reviews-rowProdClick",e.prodId)}},{key:"prodNm",label:"\uC0C1\uD488\uBA85",cellStyle:"color:#444;",fmt:(e,t)=>M(t.prodId)||t.prodNm||""},{key:"memberId",label:"\uC791\uC131\uC790",style:"width:80px",fmt:(e,t)=>T(t.memberId)},{key:"rating",label:"\uD3C9\uC810",style:"width:90px;text-align:center",align:"center",cellStyle:"color:#f59e0b;font-size:13px",fmt:(e,t)=>Number(t.rating||0).toFixed(1)+" \u2605"},{key:"helpfulCnt",label:"\uB3C4\uC6C0",style:"width:60px;text-align:right",align:"right"},{key:"reviewStatusCd",label:"\uC0C1\uD0DC",style:"width:80px;text-align:center",align:"center",badge:e=>I(e.reviewStatusCd),fmt:(e,t)=>y[t.reviewStatusCd]||t.reviewStatusCd},{key:"reviewDate",label:"\uC791\uC131\uC77C",style:"width:140px",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"_statusChg",label:"\uC0C1\uD0DC\uBCC0\uACBD",style:"width:90px;text-align:center",align:"center",selectIntercept:{valueKey:"reviewStatusCd",options:()=>g.REVIEW_STATUS,onChange:(e,t,a)=>h("reviews-rowStatusChange",{row:e,evt:a})}},{key:"siteNm",label:"\uC0AC\uC774\uD2B8"},{type:"actions",actions:[{label:"\u{1F441}",cls:"btn btn-xs",style:"background:#fff;border:1px solid #d9d9d9;color:#555;font-size:12px;padding:2px 6px;",title:"\uC0C1\uD488 \uBBF8\uB9AC\uBCF4\uAE30",onClick:e=>h("reviews-rowPreview",e.prodId)}]}];const re=e=>c.value===e.reviewId?"active":"";C.prodReviewGrid=[{key:"reviewTitle",label:"\uB9AC\uBDF0 \uC81C\uBAA9",link:!0,cellInnerClass:"title-link"},{key:"memberId",label:"\uC791\uC131\uC790",style:"width:80px",fmt:(e,t)=>T(t.memberId)},{key:"rating",label:"\uD3C9\uC810",style:"width:90px;text-align:center",align:"center",cellStyle:"color:#f59e0b;font-size:13px",fmt:(e,t)=>Number(t.rating||0).toFixed(1)+" \u2605"},{key:"helpfulCnt",label:"\uB3C4\uC6C0",style:"width:60px;text-align:right",align:"right"},{key:"reviewStatusCd",label:"\uC0C1\uD0DC",style:"width:80px;text-align:center",align:"center",badge:e=>I(e.reviewStatusCd),fmt:(e,t)=>y[t.reviewStatusCd]||t.reviewStatusCd},{key:"reviewDate",label:"\uC791\uC131\uC77C",style:"width:140px",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"_statusChg",label:"\uC0C1\uD0DC\uBCC0\uACBD",style:"width:90px;text-align:center",align:"center",selectIntercept:{valueKey:"reviewStatusCd",options:()=>g.REVIEW_STATUS,onChange:(e,t,a)=>h("reviews-rowStatusChange",{row:e,evt:a})}}];const ne=e=>c.value===e.reviewId?"active":"",ie=n({show:!1});return{columns:C,reviews:S,uiState:s,searchParam:w,listGridPager:l,codes:g,excelModal:ie,buildExcelParams:()=>({...N(),...coUtil.cofOmitEmpty(w)}),prodReviews:p,prodReviewPager:i,statusModal:r,handleBtnAction:B,handleSelectAction:h,handleGridCellAction:W,cfSelectedRow:m,cfStatusModalRowTitle:X,cfStatusModalCurrentCd:Z,fnCallbackModal:ee,fnStatusBadge:I,STATUS_LABEL:y,getProdNm:M,getMemNm:T,fnGridRowClass:re,fnProdReviewRowClass:ne,selectedId:c,selectedProdId:d}},template:`
<bo-page title="\uC0C1\uD488\uB9AC\uBDF0\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uC0C1\uD488\uB9AC\uBDF0 \uBAA9\uB85D" :count-text="'\uCD1D ' + listGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
    </template>
    <bo-grid bare :columns="columns.listGrid" :rows="reviews" :pager="listGridPager" row-key="reviewId" :selected-key="selectedId"
      :sort-state="uiState"
      :row-class="fnGridRowClass" empty-text="\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
      @sort="key => handleBtnAction('reviews-sort', key)" grid-id="reviews-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px" />
    <bo-pager :pager="listGridPager" :on-set-page="n => handleBtnAction('reviews-pager-setPage', n)" :on-size-change="() => handleSelectAction('reviews-pager-sizeChange')" />
    <bo-excel-down-modal :show="excelModal.show" domain="pdReview" area-nm="\uB9AC\uBDF0"
      :columns="columns.listGrid" ui-nm="\uC0C1\uD488\uB9AC\uBDF0\uAD00\uB9AC" :params="buildExcelParams()"
      @close="excelModal.show = false" />
  </bo-container>
  <!-- ===== \u25A1. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uC0C1\uD488ID \uD074\uB9AD \uC2DC: \uD574\uB2F9 \uC0C1\uD488\uC758 \uB9AC\uBDF0 \uD398\uC774\uC9D5 \uBAA9\uB85D ============================= -->
  <bo-container v-if="selectedProdId" :title="'\u{1F4E6} \uC0C1\uD488\uC758 \uB9AC\uBDF0 \uBAA9\uB85D [' + selectedProdId + ']'" :count-text="'\uCD1D ' + prodReviewPager.pageTotalCount + '\uAC74'">
    <!-- ===== \u25A0.\u25A0. \uADF8\uB9AC\uB4DC (\uC57D 10\uD589 \uB192\uC774 + \uCD08\uACFC \uC2DC \uB0B4\uBD80 \uC2A4\uD06C\uB864) =========== -->
    <div style="max-height:360px;overflow-y:auto;border:1px solid #eef0f3;border-radius:6px;background:#fff;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.prodReviewGrid" :rows="prodReviews" :pager="prodReviewPager"
        row-key="reviewId" :row-class="fnProdReviewRowClass"
        empty-text="\uD574\uB2F9 \uC0C1\uD488\uC758 \uB9AC\uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
        grid-id="prodReviews-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)">
      </bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uADF8\uB9AC\uB4DC (\uAE30\uBCF8 10\uAC1C \uC601\uC5ED + \uD654\uBA74 \uB192\uC774 \uBC18\uC751\uD615 \uD655\uC7A5, \uCD08\uACFC \uC2DC \uB0B4\uBD80 \uC2A4\uD06C\uB864) =========== -->
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC800: \uD55C \uC904 \uD45C\uC2DC + \uCE74\uB4DC \uD558\uB2E8 \uAE54\uB054 \uB9C8\uAC10 ============================= -->
    <div style="margin-top:6px;white-space:nowrap;overflow-x:auto;">
      <bo-pager :pager="prodReviewPager" :on-set-page="n => handleBtnAction('prodReviews-pager-setPage', n)" :on-size-change="() => handleSelectAction('prodReviews-pager-sizeChange')"
        style="margin-top:0;min-height:34px;" />
    </div>
  </bo-container>
  <!-- ===== \u25A1. \uC0C1\uD488ID \uD074\uB9AD \uC2DC: \uD574\uB2F9 \uC0C1\uD488\uC758 \uB9AC\uBDF0 \uD398\uC774\uC9D5 \uBAA9\uB85D ============================= -->
  <!-- ===== \u25A0. \uC0C1\uC138 \uD328\uB110 (\uD56D\uC0C1 \uD45C\uC2DC, \uB9AC\uBDF0 \uC120\uD0DD \uC2DC\uC5D0\uB9CC \uC561\uC158 \uB178\uCD9C) ============================ -->
  <bo-container bare>
    <div class="card">
    <div class="toolbar">
      <span class="list-title">
        \uB9AC\uBDF0 \uB0B4\uC6A9
        <span v-if="!cfSelectedRow" style="font-size:12px;color:#bbb;margin-left:8px;font-weight:400;">
          \uBAA9\uB85D\uC5D0\uC11C \uB9AC\uBDF0\uB97C \uC120\uD0DD\uD558\uC138\uC694
        </span>
      </span>
      <span v-if="cfSelectedRow" style="margin-left:auto;display:flex;align-items:center;gap:8px;">
        <span style="font-size:12px;color:#888;">
          \uD604\uC7AC \uC0C1\uD0DC:
        </span>
        <span :class="['badge', fnStatusBadge(cfSelectedRow.reviewStatusCd)]">
          {{ STATUS_LABEL[cfSelectedRow.reviewStatusCd] || cfSelectedRow.reviewStatusCd }}
        </span>
        <span style="font-size:12px;color:#888;margin-left:8px;">
          \uBCC0\uACBD:
        </span>
        <select class="form-control" style="font-size:12px;padding:3px 6px;width:auto;height:28px;"
          :value="cfSelectedRow.reviewStatusCd"
          @change="handleSelectAction('reviews-rowStatusChange', { row: cfSelectedRow, evt: $event })">
          <option v-for="s in codes.REVIEW_STATUS" :key="s.value" :value="s.value">
            {{ s.label }}
          </option>
        </select>
      </span>
    </div>
    <div style="padding:16px">
      <div v-if="!cfSelectedRow" style="padding:24px 8px;color:#aaa;font-size:13px;text-align:center;">
        \uBAA9\uB85D\uC5D0\uC11C \uB9AC\uBDF0\uB97C \uC120\uD0DD\uD558\uBA74 \uC0C1\uC138 \uB0B4\uC6A9\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
      </div>
      <template v-else>
        <div style="display:flex;flex-wrap:wrap;gap:6px 14px;font-size:12px;color:#555;margin-bottom:10px;">
          <span>
            <b style="color:#888;">
              \uC0C1\uD488:
            </b>
            [{{ cfSelectedRow.prodId }}] {{ getProdNm(cfSelectedRow.prodId) || cfSelectedRow.prodNm || '' }}
          </span>
          <span>
            <b style="color:#888;">
              \uC791\uC131\uC790:
            </b>
            {{ getMemNm(cfSelectedRow.memberId) }}
          </span>
          <span>
            <b style="color:#888;">
              \uC791\uC131\uC77C:
            </b>
            {{ cfSelectedRow.reviewDate }}
          </span>
        </div>
        <div style="font-size:16px;font-weight:600;margin-bottom:8px">
          {{ cfSelectedRow.reviewTitle }}
        </div>
        <div style="color:#f59e0b;margin-bottom:8px">
          \uD3C9\uC810: {{ Number(cfSelectedRow.rating || 0).toFixed(1) }} / 5.0
        </div>
        <div style="background:#f9f9f9;padding:12px;border-radius:6px;white-space:pre-wrap;font-size:14px">
          {{ cfSelectedRow.reviewContent }}
        </div>
        <div style="margin-top:8px;font-size:12px;color:#888">
          \uB3C4\uC6C0\uC774 \uB410\uC5B4\uC694 {{ cfSelectedRow.helpfulCnt }} | \uB3C4\uC6C0\uC774 \uC548\uB410\uC5B4\uC694 {{ cfSelectedRow.unhelpfulCnt }}
        </div>
      </template>
    </div>
    </div>
  </bo-container>
  <!-- ===== \u25A1. \uC0C1\uC138 \uD328\uB110 =================================================== -->
  <!-- ===== \u25A0. \uC0C1\uD0DC\uBCC0\uACBD \uC0AC\uC720 \uC785\uB825 \uBAA8\uB2EC =========================================== -->
  <!-- ===== \u25A0. \uB9AC\uBDF0 \uC0C1\uD0DC \uBCC0\uACBD \uBAA8\uB2EC (BoModals.js / PdReviewStatusModal) ========== -->
  <pd-review-status-modal :show="statusModal.show"
    :review-title="cfStatusModalRowTitle"
    :current-status="cfStatusModalCurrentCd"
    :new-status="statusModal.newStatus"
    :status-label="STATUS_LABEL"
    :badge-fn="fnStatusBadge"
    modal-name="review-status" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uB9AC\uBDF0 \uC0C1\uD0DC \uBCC0\uACBD \uBAA8\uB2EC ============================================== -->
</bo-page>
`};
