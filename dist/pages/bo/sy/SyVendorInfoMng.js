window.SyVendorInfoMng={name:"SyVendorInfoMng",props:{navigate:{type:Function,required:!0}},setup(W){const{ref:H,reactive:o,computed:J,watch:Q,onMounted:V}=Vue,X=window.boApp.showToast,Z=window.boApp.showConfirm,d=o([]),l=o({loading:!1,error:null,selectedVendorId:null,tab:"brand"}),p=o({vendor_status:[],vendor_type_kr:[]}),i=o({searchType:"",searchValue:"",vendorTypeCd:"",status:""}),T={},r=o({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),P=o([]),C=o([]),N=o([]),f=o([]),v=o({brand:!1,price:!1,dliv:!1,extra:!1}),S=()=>o({pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageNums:[1],pageSizes:[5,10,20,30,50,100],pageCond:{}}),b=S(),u=S(),h=S(),w={brand:{api:()=>boApiSvc.syBrand,rows:P,pager:b,loadKey:"brand",cmdNm:"\uBE0C\uB79C\uB4DC\uC870\uD68C"},price:{api:()=>boApiSvc.pmDiscnt,rows:C,pager:u,loadKey:"price",cmdNm:"\uAC00\uACA9\uC815\uCC45\uC870\uD68C"},dliv:{api:()=>boApiSvc.pdDlivTmplt,rows:N,pager:h,loadKey:"dliv",cmdNm:"\uBC30\uC1A1\uD15C\uD50C\uB9BF\uC870\uD68C"}},G=(e,a={})=>{if(e==="searchParam-list")return z();if(e==="searchParam-reset")return _();if(e==="vendors-pager-setPage")return B(a);if(e==="tabGrid-pager-setPage")return M(a.tab,a.n);console.warn("[handleBtnAction] unknown cmd:",e)},k=(e,a={})=>{if(e==="vendors-rowSelect")return A(a);if(e==="vendors-pager-sizeChange")return E();if(e==="tab-select")return L(a);if(e==="tabGrid-pager-sizeChange")return R(a.tab);console.warn("[handleSelectAction] unknown cmd:",e)},I=(e,a,t,n={})=>{if(e==="vendors-cellClick")return A(t);console.warn("[handleGridCellAction] unknown cmd:",e)},g=async()=>{var e;l.loading=!0;try{const a={pageNo:r.pageNo,pageSize:r.pageSize,...coUtil.cofOmitEmpty(i)};a.searchValue&&!a.searchType&&(a.searchType="vendorNm,corpNo,vendorId");const n=(e=(await boApiSvc.syVendor.getPage(a,"\uC5C5\uCCB4\uC815\uBCF4","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:e.data;d.splice(0,d.length,...(n==null?void 0:n.pageList)||[]),r.pageTotalCount=(n==null?void 0:n.pageTotalCount)||d.length,r.pageTotalPage=(n==null?void 0:n.pageTotalPage)||coUtil.cofTotalPage(r),x(r),l.error=null}catch(a){console.error("[catch-info]",a),l.error=a.message}finally{l.loading=!1}},z=()=>{r.pageNo=1,g()},_=()=>{Object.assign(i,T),r.pageNo=1,g()},B=e=>{e>=1&&e<=r.pageTotalPage&&(r.pageNo=e,g())},E=()=>{r.pageNo=1,g()},x=e=>{const a=e.pageNo,t=e.pageTotalPage,n=Math.max(1,a-2),m=Math.min(t,n+4);e.pageNums=Array.from({length:m-n+1},(s,Y)=>n+Y)},A=e=>{l.selectedVendorId=e.vendorId,b.pageNo=1,u.pageNo=1,h.pageNo=1,y(l.tab)},L=e=>{l.tab=e,l.selectedVendorId!=null&&y(e)},M=(e,a)=>{const t=w[e];t&&a>=1&&a<=t.pager.pageTotalPage&&(t.pager.pageNo=a,y(e))},R=e=>{const a=w[e];a&&(a.pager.pageNo=1,y(e))},y=async e=>{var n;const a=l.selectedVendorId;if(a==null)return;if(e==="extra"){f.splice(0,f.length);return}const t=w[e];if(t){v[t.loadKey]=!0;try{const s=(n=(await t.api().getPage({vendorId:a,pageNo:t.pager.pageNo,pageSize:t.pager.pageSize},"\uC5C5\uCCB4\uC815\uBCF4",t.cmdNm)).data)==null?void 0:n.data;t.rows.splice(0,t.rows.length,...(s==null?void 0:s.pageList)||[]),t.pager.pageTotalCount=(s==null?void 0:s.pageTotalCount)||t.rows.length,t.pager.pageTotalPage=(s==null?void 0:s.pageTotalPage)||coUtil.cofTotalPage(t.pager),x(t.pager)}catch(m){console.error("[loadTabData]",e,m)}finally{v[t.loadKey]=!1}}},D=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["VENDOR_STATUS_CD","VENDOR_TYPE_KR"],{compNm:"SyVendorInfoMng"}),p.vendor_status=e.sgGetGrpCodes("VENDOR_STATUS_CD"),p.vendor_type_kr=e.sgGetGrpCodes("VENDOR_TYPE_KR")};V(async()=>{await D();const e=new URLSearchParams(window.location.search),a=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(i).forEach(t=>{!a.includes(t)&&e.has(t)&&(i[t]=e.get(t))}),await g(),Object.assign(T,i)});const O=boUtil.bofVendorTypeBadge,U=boUtil.bofVendorStatusBadge,K=e=>"",j=()=>{const e=d.find(a=>a.vendorId===l.selectedVendorId);return e?e.vendorNm:""},q=o([{id:"brand",label:"\uBE0C\uB79C\uB4DC",icon:"\u{1F3F7}",get count(){return b.pageTotalCount}},{id:"price",label:"\uAC00\uACA9\uC815\uCC45",icon:"\u{1F4B0}",get count(){return u.pageTotalCount}},{id:"dliv",label:"\uBC30\uC1A1\uD15C\uD50C\uB9BF",icon:"\u{1F69A}",get count(){return h.pageTotalCount}},{id:"extra",label:"\uBD80\uAC00\uC11C\uBE44\uC2A4",icon:"\u2728",get count(){return f.length}}]),c={};c.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"vendorNm",label:"\uC5C5\uCCB4\uBA85"},{value:"corpNo",label:"\uC0AC\uC5C5\uC790\uBC88\uD638"},{value:"vendorId",label:"\uC5C5\uCCB4ID"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"vendorTypeCd",type:"select",label:"\uC720\uD615",options:()=>p.vendor_type_kr,nullLabel:"\uC720\uD615 \uC804\uCCB4"},{key:"status",type:"select",label:"\uC0C1\uD0DC",options:()=>p.vendor_status,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"}],c.baseGrid=[{key:"vendorTypeCd",label:"\uC5C5\uCCB4\uC720\uD615",align:"center",badge:e=>O(e.vendorTypeCd)},{key:"vendorNm",label:"\uC5C5\uCCB4\uBA85",cellStyle:"font-weight:600"},{key:"ceoNm",label:"\uB300\uD45C\uC790"},{key:"vendorNo",label:"\uC0AC\uC5C5\uC790\uBC88\uD638",cellInnerStyle:"font-size:11px;background:#f0f4ff;padding:2px 6px;border-radius:3px;color:#2563eb;font-family:monospace;"},{key:"vendorPhone",label:"\uC804\uD654\uBC88\uD638",cellStyle:"font-size:11.5px"},{key:"vendorStatusCd",label:"\uC0C1\uD0DC",align:"center",badge:e=>U(e.vendorStatusCd)},{type:"actions",actions:[{label:e=>l.selectedVendorId===e.vendorId?"\uC120\uD0DD\uB428":"\uC120\uD0DD",cls:"btn btn-primary btn-xs",onClick:e=>k("vendors-rowSelect",e)}]}],c.brandGrid=[{key:"brandNm",label:"\uBE0C\uB79C\uB4DC\uBA85",cellStyle:"font-weight:600"},{key:"brandCode",label:"\uBE0C\uB79C\uB4DC\uCF54\uB4DC"},{key:"brandRemark",label:"\uBE44\uACE0",cellStyle:"color:#666"}],c.priceGrid=[{key:"discntNm",label:"\uC815\uCC45\uBA85",cellStyle:"font-weight:600"},{key:"discntTypeCd",label:"\uD560\uC778\uC720\uD615",align:"center"},{key:"discntVal",label:"\uD560\uC778\uAC12",align:"right"},{key:"discntStatusCd",label:"\uC0C1\uD0DC",align:"center"}],c.dlivGrid=[{key:"dlivTmpltNm",label:"\uD15C\uD50C\uB9BF\uBA85",cellStyle:"font-weight:600"},{key:"dlivTypeCd",label:"\uBC30\uC1A1\uC720\uD615",align:"center"},{key:"dlivFee",label:"\uAE30\uBCF8\uBC30\uC1A1\uBE44",align:"right",fmt:e=>e!=null?Number(e).toLocaleString()+"\uC6D0":"-"},{key:"freeCondAmt",label:"\uBB34\uB8CC\uC870\uAC74",align:"right",fmt:e=>e!=null?Number(e).toLocaleString()+"\uC6D0":"-"}];const F=o({show:!1});return{columns:c,tabs:q,vendors:d,uiState:l,searchParam:i,baseGridPager:r,excelModal:F,buildExcelParams:()=>{const e={...coUtil.cofOmitEmpty(i)};return e.searchValue&&!e.searchType&&(e.searchType="vendorNm,corpNo,vendorId"),e},brands:P,discnts:C,dlivTmplts:N,tabLoading:v,brandPager:b,pricePager:u,dlivPager:h,handleBtnAction:G,handleSelectAction:k,handleGridCellAction:I,fnRowStyle:K,fnSelectedVendorNm:j}},template:`
<bo-page title="\uC5C5\uCCB4\uC815\uBCF4" :share-query="searchParam">
  <!-- ===== \u25A0. 1\uB2E8: \uC870\uD68C \uC601\uC5ED =============================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. 1\uB2E8: \uC870\uD68C \uC601\uC5ED =============================================== -->
  <!-- ===== \u25A0. 2\uB2E8: \uC5C5\uCCB4\uBAA9\uB85D =============================================== -->
  <bo-container title="\uC5C5\uCCB4\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
    </template>
    <bo-grid bare
      :columns="columns.baseGrid" :rows="vendors" row-key="vendorId"
      :loading="uiState.loading" :row-style="fnRowStyle" :selected-key="uiState.selectedVendorId"
      grid-id="vendors-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('vendors-pager-setPage', n)" :on-size-change="() => handleSelectAction('vendors-pager-sizeChange')" />
    <bo-excel-down-modal :show="excelModal.show" domain="syVendor" area-nm="\uC5C5\uCCB4"
      :columns="columns.baseGrid" ui-nm="\uC5C5\uCCB4\uC815\uBCF4" :params="buildExcelParams()"
      @close="excelModal.show = false" />
  </bo-container>
  <!-- ===== \u25A1. 2\uB2E8: \uC5C5\uCCB4\uBAA9\uB85D =============================================== -->
  <!-- ===== \u25A0. 3\uB2E8: \uD0ED \uC601\uC5ED (\uBE0C\uB79C\uB4DC | \uAC00\uACA9\uC815\uCC45 | \uBC30\uC1A1\uD15C\uD50C\uB9BF | \uBD80\uAC00\uC11C\uBE44\uC2A4) ============ -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uD0ED \uD5E4\uB354 + \uC120\uD0DD \uC5C5\uCCB4 \uD45C\uC2DC ===================================== -->
    <template #title>
      \uC5C5\uCCB4\uC815\uBCF4 \uC0C1\uC138
      <span v-if="uiState.selectedVendorId != null" style="margin-left:8px;font-size:12px;color:#e8587a;font-weight:600;">
        {{ fnSelectedVendorNm() }}
      </span>
    </template>
    <bo-tab-bar :tabs="tabs" :tab="uiState.tab" :show-modes="false"
      @tab-select="id => handleSelectAction('tab-select', id)" />
    <!-- ===== \u25A0.\u25A0. \uC5C5\uCCB4 \uBBF8\uC120\uD0DD \uC548\uB0B4 ============================================ -->
    <div v-if="uiState.selectedVendorId == null" style="text-align:center;color:#aaa;padding:32px 16px;font-size:13px;">
      \uC704 \uC5C5\uCCB4\uBAA9\uB85D\uC5D0\uC11C \uC5C5\uCCB4\uB97C \uC120\uD0DD\uD558\uBA74 \uBE0C\uB79C\uB4DC / \uAC00\uACA9\uC815\uCC45 / \uBC30\uC1A1\uD15C\uD50C\uB9BF / \uBD80\uAC00\uC11C\uBE44\uC2A4 \uC815\uBCF4\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
    </div>
    <!-- ===== \u25A0.\u25A0. \uD0ED \uCEE8\uD150\uCE20 ================================================= -->
    <div v-else>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBE0C\uB79C\uB4DC \uD0ED ============================================= -->
      <template v-if="uiState.tab==='brand'">
        <bo-grid bare :columns="columns.brandGrid" :rows="brands" row-key="brandId"
          :pager="brandPager" :loading="tabLoading.brand" empty-text="\uB4F1\uB85D\uB41C \uBE0C\uB79C\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." />
        <bo-pager :pager="brandPager" :on-set-page="n => handleBtnAction('tabGrid-pager-setPage', { tab: 'brand', n })" :on-size-change="() => handleSelectAction('tabGrid-pager-sizeChange', { tab: 'brand' })" />
      </template>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAC00\uACA9\uC815\uCC45 \uD0ED =========================================== -->
      <template v-else-if="uiState.tab==='price'">
        <bo-grid bare :columns="columns.priceGrid" :rows="discnts" row-key="discntId"
          :pager="pricePager" :loading="tabLoading.price" empty-text="\uB4F1\uB85D\uB41C \uAC00\uACA9\uC815\uCC45\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." />
        <bo-pager :pager="pricePager" :on-set-page="n => handleBtnAction('tabGrid-pager-setPage', { tab: 'price', n })" :on-size-change="() => handleSelectAction('tabGrid-pager-sizeChange', { tab: 'price' })" />
      </template>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBC30\uC1A1\uD15C\uD50C\uB9BF \uD0ED ========================================= -->
      <template v-else-if="uiState.tab==='dliv'">
        <bo-grid bare :columns="columns.dlivGrid" :rows="dlivTmplts" row-key="dlivTmpltId"
          :pager="dlivPager" :loading="tabLoading.dliv" empty-text="\uB4F1\uB85D\uB41C \uBC30\uC1A1\uD15C\uD50C\uB9BF\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." />
        <bo-pager :pager="dlivPager" :on-set-page="n => handleBtnAction('tabGrid-pager-setPage', { tab: 'dliv', n })" :on-size-change="() => handleSelectAction('tabGrid-pager-sizeChange', { tab: 'dliv' })" />
      </template>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBD80\uAC00\uC11C\uBE44\uC2A4 \uD0ED ========================================= -->
      <div v-else-if="uiState.tab==='extra'" style="text-align:center;color:#aaa;padding:32px 16px;font-size:13px;">
        \uBD80\uAC00\uC11C\uBE44\uC2A4 \uC815\uBCF4\uB294 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uD0ED \uCEE8\uD150\uCE20 ================================================= -->
  </bo-container>
  <!-- ===== \u25A1. 3\uB2E8: \uD0ED \uC601\uC5ED =============================================== -->
</bo-page>
`};
