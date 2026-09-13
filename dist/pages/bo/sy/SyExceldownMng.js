window.SyExceldownMng={name:"SyExceldownMng",props:{navigate:{type:Function,required:!0},showRefModal:{type:Function,default:()=>{}},dtlId:{type:String,default:null}},setup(u){const{ref:q,reactive:r,computed:p,onMounted:I,onUnmounted:A,watch:H}=Vue,s=window.boApp.showToast,f=window.boApp.showConfirm,g=()=>{const e=window.sfGetBoAuthStore?window.sfGetBoAuthStore():null;return e&&e.svAuthUser&&e.svAuthUser.authId||""},m=()=>{const e=window.sfGetBoAuthStore?window.sfGetBoAuthStore():null;return e&&e.svAuthUser&&e.svAuthUser.userNm||""},S=r({}),o=r({loading:!1,selectedId:null,autoTimer:null}),n=r({regBy:"",regByNm:"",exceldownStatusCd:"",runTypeCd:"",searchValue:"",dateRangeType:"reg_date",dateRangeStart:"",dateRangeEnd:"",dateRange:"1week"});boUtil.bofApplyDateRange(n,"1week");const i=r({user:!1,member:!1}),v=r({show:!1}),b=r([]),l=r({pageType:"PAGE",pageNo:1,pageSize:20,pageTotalCount:0,pageTotalPage:1,pageSizes:[10,20,50,100],pageCond:{}}),B=(e,a)=>{if(e==="search-list")return l.pageNo=1,c();if(e==="search-reset")return G();if(e==="search-mine")return n.regBy=g(),n.regByNm=m(),c();if(e==="grid-pager-page")return l.pageNo=a,c();if(e==="row-cancel")return D(a);if(e==="row-detail")return h(a);if(e==="row-download")return _(a);if(e==="pick-user-open"){i.user=!0;return}if(e==="pick-member-open"){i.member=!0;return}if(e==="pick-clear"){n.regBy="",n.regByNm="";return}console.warn("[handleBtnAction] unknown cmd:",e)},T=(e,a,t)=>{if(t==null){i.user=i.member=!1;return}e==="cmPopup-user-pick"?(n.regBy=(t==null?void 0:t.selId)||"",n.regByNm=(t==null?void 0:t.selName)||(t==null?void 0:t.userNm)||(t==null?void 0:t.loginId)||"",i.user=!1):e==="cmPopup-member-pick"&&(n.regBy=(t==null?void 0:t.selId)||"",n.regByNm=(t==null?void 0:t.selName)||(t==null?void 0:t.memberNm)||(t==null?void 0:t.loginId)||"",i.member=!1)},E=(e,a)=>{if(e==="grid-pager-size")return l.pageNo=1,c();if(e==="search-dateRange"){boUtil.bofApplyDateRange(n,n.dateRange);return}console.warn("[handleSelectAction] unknown cmd:",e)},P=(e,a,t)=>{if(e==="exceldown-cellClick")return h(t.exceldownId)},w=r({baseGrid:[{key:"domainNm",label:"\uB300\uC0C1",width:"150px",fmt:(e,a)=>e||a.domainCd},{key:"uiNm",label:"\uC694\uCCAD\uD654\uBA74",width:"110px",fmt:e=>e||"-"},{key:"runTypeCd",label:"\uBC29\uC2DD",width:"64px",align:"center",badge:e=>e.runTypeCd==="ASYNC"?"badge-purple":"badge-blue",fmt:e=>e==="ASYNC"?"\uC608\uC57D":"\uC989\uC2DC"},{key:"exceldownStatusCd",label:"\uC0C1\uD0DC",width:"82px",align:"center",badge:e=>x(e.exceldownStatusCd),fmt:e=>y(e)},{key:"totalCount",label:"\uAC74\uC218(\uC608\uC0C1)",width:"90px",align:"right",cellTitle:(e,a)=>`\uC608\uC0C1 ${Number(e||0).toLocaleString()}\uAC74 / \uC2E4\uC81C ${Number(a.doneCount||0).toLocaleString()}\uAC74`,fmt:e=>Number(e||0).toLocaleString()},{key:"_progress",label:"\uC9C4\uD589",width:"90px",align:"center",fmt:(e,a)=>N(a)},{key:"fileCount",label:"\uD30C\uC77C",width:"60px",align:"center",fmt:e=>e==null||e===0?"-":e+"\uAC1C"},{key:"downloadCount",label:"\uB2E4\uC6B4\uB85C\uB4DC",width:"70px",align:"center",fmt:e=>(e==null?0:e)+"\uD68C"},{key:"regUserNm",label:"\uC694\uCCAD\uC790",width:"90px",fmt:(e,a)=>e||a.regBy||"-"},{key:"regDate",label:"\uC694\uCCAD\uC77C\uC2DC",width:"140px",align:"center",fmt:e=>k(e)},{key:"elapsedMs",label:"\uC18C\uC694",width:"70px",align:"right",fmt:e=>e==null?"-":e<1e3?e+"ms":(e/1e3).toFixed(1)+"s"}]}),y=e=>({WAITING:"\uB300\uAE30",RUNNING:"\uC9C4\uD589\uC911",DONE:"\uC644\uB8CC",FAIL:"\uC2E4\uD328",TIMEOUT:"\uC2DC\uAC04\uCD08\uACFC",CANCELED:"\uCDE8\uC18C"})[e]||e||"-",x=e=>({WAITING:"badge-orange",RUNNING:"badge-blue",DONE:"badge-green",FAIL:"badge-red",TIMEOUT:"badge-red",CANCELED:"badge-gray"})[e]||"badge-gray",N=e=>{const a=Number(e.totalCount||0),t=Number(e.doneCount||0);return e.exceldownStatusCd!=="RUNNING"?a>0&&t>0?"100%":"-":a<=0?"-":Math.min(100,Math.floor(t*100/a))+"%"},k=e=>e?String(e).replace("T"," ").substring(0,19):"-",U=e=>["RUNNING","WAITING"].includes(e.exceldownStatusCd),M=e=>e.exceldownStatusCd==="DONE"&&(e.fileCount||0)>0,G=()=>{Object.assign(n,{regBy:g(),regByNm:m(),exceldownStatusCd:"",runTypeCd:"",searchValue:"",dateRange:"1week"}),boUtil.bofApplyDateRange(n,"1week"),l.pageNo=1,c()},c=async()=>{var e;o.loading=!0;try{const a={pageNo:l.pageNo,pageSize:l.pageSize,...coUtil.cofOmitEmpty(n)};delete a.dateRange,delete a.regByNm;const d=((e=(await boApiSvc.syExceldown.getPage(a,"\uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:e.data)||{};b.splice(0,b.length,...d.pageList||[]),l.pageTotalCount=d.pageTotalCount||0,l.pageTotalPage=d.pageTotalPage||coUtil.cofTotalPage(l),coUtil.cofBuildPagerNums(l)}catch(a){s(coUtil.cofErrMsg(a,"\uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{o.loading=!1}},R=()=>{const e={...coUtil.cofOmitEmpty(n)};return delete e.dateRange,delete e.regByNm,e},h=e=>{o.selectedId=o.selectedId===e?null:e},D=async e=>{if(await f("\uAC15\uC81C\uCDE8\uC18C",`[${e.domainNm||e.domainCd}] \uC694\uCCAD\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
\uC0DD\uC131 \uC911\uC778 \uD30C\uC77C\uC740 \uC0AD\uC81C\uB429\uB2C8\uB2E4.`))try{await boApiSvc.syExceldown.cancel(e.exceldownId,"\uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC","\uAC15\uC81C\uCDE8\uC18C"),s("\uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),c()}catch(t){s(coUtil.cofErrMsg(t,"\uCDE8\uC18C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},L=e=>{const a=e.attachUrl||e.cdnImgUrl;if(!a)return s(`${e.fileNm||"\uD30C\uC77C"} \uACBD\uB85C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.`,"error"),!1;const t=document.createElement("a");return t.href=window.cdnUrl?window.cdnUrl(a):a,t.download=e.fileNm||"",t.target="_blank",t.click(),!0},O=async(e,a)=>{try{if(!L(e))return;const t=a||o.selectedId;t&&(await boApiSvc.syExceldown.markDownloaded(t,"\uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC","\uB2E4\uC6B4\uB85C\uB4DC"),c())}catch(t){s(coUtil.cofErrMsg(t,"\uB2E4\uC6B4\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},_=async e=>{var a;try{const d=(((a=(await boApiSvc.syExceldown.getById(e.exceldownId,"\uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC","\uB2E4\uC6B4\uB85C\uB4DC")).data)==null?void 0:a.data)||{}).attachFiles||[];if(d.length===0){s("\uC0DD\uC131\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. (\uBCF4\uAD00\uAE30\uAC04\uC774 \uC9C0\uB0AC\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4)","error");return}if(d.length===1){await O(d[0],e.exceldownId);return}o.selectedId=e.exceldownId}catch(t){s(coUtil.cofErrMsg(t,"\uB2E4\uC6B4\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},z=async()=>{},C=p(()=>b.some(e=>["RUNNING","WAITING"].includes(e.exceldownStatusCd))),F=p(()=>!!n.regBy&&n.regBy===g()),W=p(()=>"syExceldown"),V=p(()=>"\uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC"),Y=p(()=>w.baseGrid.filter(e=>!String(e.key).startsWith("_"))),$=[{value:"",label:"\uC0C1\uD0DC \uC804\uCCB4"},{value:"WAITING",label:"\uB300\uAE30"},{value:"RUNNING",label:"\uC9C4\uD589\uC911"},{value:"DONE",label:"\uC644\uB8CC"},{value:"FAIL",label:"\uC2E4\uD328"},{value:"TIMEOUT",label:"\uC2DC\uAC04\uCD08\uACFC"},{value:"CANCELED",label:"\uCDE8\uC18C"}],j=[{value:"",label:"\uBC29\uC2DD \uC804\uCCB4"},{value:"SYNC",label:"\uC989\uC2DC"},{value:"ASYNC",label:"\uC608\uC57D"}];return I(async()=>{await z(),n.regBy=u.dtlId?"":g(),n.regByNm=u.dtlId?"":m();const e=new URLSearchParams(window.location.search),a=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(n).forEach(t=>{!a.includes(t)&&e.has(t)&&(n[t]=e.get(t))}),await c(),u.dtlId&&await h(u.dtlId),o.autoTimer=setInterval(()=>{C.value&&!o.loading&&c()},5e3)}),A(()=>{o.autoTimer&&(clearInterval(o.autoTimer),o.autoTimer=null)}),{codes:S,uiState:o,searchParam:n,rows:b,baseGridPager:l,columns:w,picks:i,excelModal:v,showToast:s,showConfirm:f,handleBtnAction:B,handleSelectAction:E,handleGridCellAction:P,fnCallbackModal:T,fnStatusLabel:y,fnStatusBadge:x,fnProgress:N,fnDateTime:k,fnCanCancel:U,fnCanDownload:M,cfHasActive:C,cfIsMine:F,statusOptions:$,runTypeOptions:j,cfExcelDomain:W,cfExcelAreaNm:V,cfExcelColumns:Y,buildExcelParams:R,cofCountText:coUtil.cofCountText}},template:`
<bo-page title="\uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC" :share-query="searchParam"
  desc-summary="\uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC \uB294 \uC989\uC2DC\xB7\uC608\uC57D \uB2E4\uC6B4\uB85C\uB4DC \uC694\uCCAD\uC758 \uC9C4\uD589\uC0C1\uD0DC\uC640 \uC0DD\uC131 \uD30C\uC77C\uC744 \uAD00\uB9AC\uD569\uB2C8\uB2E4."
  :desc-detail="['\u2714 \uC608\uC57D \uC694\uCCAD\uC740 \uB300\uAE30\uC5F4\uC5D0 \uC313\uC600\uB2E4\uAC00 \uC21C\uC11C\uB300\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4.','\u2714 \uC9C4\uD589\uC911/\uB300\uAE30 \uAC74\uC740 \uAC15\uC81C\uCDE8\uC18C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.','\u2714 \uC644\uB8CC \uD30C\uC77C\uC740 \uBCF4\uAD00\uAE30\uAC04\uC774 \uC9C0\uB098\uBA74 \uC790\uB3D9 \uC0AD\uC81C\uB429\uB2C8\uB2E4(\uC774\uB825\uC740 \uC720\uC9C0).'].join(String.fromCharCode(10))">
  <!-- ===== \u25A0. \uAC80\uC0C9 ======================================================== -->
  <bo-container>
    <div class="search-bar">
      <span class="search-label">\uC694\uCCAD\uC790</span>
      <span style="display:inline-flex;align-items:center;gap:4px;">
        <input class="form-control" readonly
          :value="searchParam.regBy ? (searchParam.regByNm ? searchParam.regByNm + ' (' + searchParam.regBy + ')' : searchParam.regBy) : ''"
          placeholder="\uC0AC\uC6A9\uC790/\uD68C\uC6D0 \uC120\uD0DD" style="width:170px;background:#f7f7f7;" />
        <button type="button" class="btn btn-secondary btn-sm" @click="handleBtnAction('pick-user-open')">\uC0AC\uC6A9\uC790\uC120\uD0DD</button>
        <button type="button" class="btn btn-secondary btn-sm" @click="handleBtnAction('pick-member-open')">\uD68C\uC6D0\uC120\uD0DD</button>
        <button v-if="searchParam.regBy" type="button" title="\uC120\uD0DD \uD574\uC81C"
          style="background:none;border:none;padding:0 2px;color:#bbb;cursor:pointer;font-size:12px;"
          @click="handleBtnAction('pick-clear')">x</button>
      </span>
      <button class="btn btn-secondary btn-sm" :disabled="cfIsMine" @click="handleBtnAction('search-mine')">\uB0B4 \uC694\uCCAD</button>
      <span class="search-label">\uC0C1\uD0DC</span>
      <select class="form-control" v-model="searchParam.exceldownStatusCd" style="width:120px;">
        <option v-for="o in statusOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <span class="search-label">\uBC29\uC2DD</span>
      <select class="form-control" v-model="searchParam.runTypeCd" style="width:110px;">
        <option v-for="o in runTypeOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <span class="search-label">\uC694\uCCAD\uC77C</span>
      <input type="date" class="form-control" v-model="searchParam.dateRangeStart" style="width:150px;" />
      <span>~</span>
      <input type="date" class="form-control" v-model="searchParam.dateRangeEnd" style="width:150px;" />
      <span class="search-label">\uAC80\uC0C9\uC5B4</span>
      <input class="form-control" v-model="searchParam.searchValue" placeholder="\uB300\uC0C1/\uD654\uBA74/\uD30C\uC77C\uBA85" style="width:180px;" @keyup.enter="handleBtnAction('search-list')" />
      <div class="search-actions">
        <button class="btn btn_reset" @click="handleBtnAction('search-reset')">\uCD08\uAE30\uD654</button>
        <button class="btn btn_search" :disabled="uiState.loading" @click="handleBtnAction('search-list')">\uC870\uD68C</button>
      </div>
    </div>
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ======================================================== -->
  <!-- ===== \u25A0. \uBAA9\uB85D ======================================================== -->
  <bo-container title="\uB2E4\uC6B4\uB85C\uB4DC \uC694\uCCAD \uBAA9\uB85D" :count-text="cofCountText(baseGridPager.pageTotalCount, rows.length)">
    <template #toolbar-actions>
      <span v-if="cfHasActive" style="font-size:11px;color:#1677ff;">\uC9C4\uD589\uC911 \u2014 5\uCD08\uB9C8\uB2E4 \uC790\uB3D9 \uAC31\uC2E0</span>
      <span style="font-size:11px;color:#aaa;">\uD589 \uD074\uB9AD \uC2DC \uC0DD\uC131 \uD30C\uC77C \uD45C\uC2DC</span>
      <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
    </template>
    <bo-grid bare :columns="columns.baseGrid" :rows="rows" row-key="exceldownId"
      :selected-key="uiState.selectedId" :row-actions="true"
      :row-style="(r) => uiState.selectedId===r.exceldownId ? 'background:#fff8f9;' : ''"
      grid-id="exceldown-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row)"
      table-max-height="480px">
      <template #head-actions>
        \uAD00\uB9AC
      </template>
      <template #row-actions="{ row }">
        <div class="actions">
          <button v-if="fnCanCancel(row)" class="btn btn_row_delete" @click.stop="handleBtnAction('row-cancel', row)">
            \uAC15\uC81C\uCDE8\uC18C
          </button>
          <button v-if="fnCanDownload(row)" class="btn btn_row_download" @click.stop="handleBtnAction('row-download', row)">
            \uB2E4\uC6B4\uB85C\uB4DC
          </button>
          <button class="btn btn_row_hist" @click.stop="handleBtnAction('row-detail', row.exceldownId)">
            \uD30C\uC77C
          </button>
        </div>
      </template>
    </bo-grid>
    <bo-pager :pager="baseGridPager"
      :on-set-page="n => handleBtnAction('grid-pager-page', n)"
      :on-size-change="() => handleSelectAction('grid-pager-size')" />
  </bo-container>
  <!-- ===== \u25A1. \uBAA9\uB85D ======================================================== -->
  <bo-excel-down-modal :show="excelModal.show" domain="syExceldown"
    area-nm="\uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC" :columns="cfExcelColumns" ui-nm="\uC5D1\uC140\uB2E4\uC6B4\uB85C\uB4DC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
  <!-- ===== \u25A0. \uC0C1\uC138 (\uC0DD\uC131 \uD30C\uC77C \uBAA9\uB85D) ========================================== -->
  <bo-container v-if="uiState.selectedId" title="\uC0DD\uC131 \uD30C\uC77C">
    <sy-exceldown-dtl :key="uiState.selectedId" :navigate="navigate" :show-ref-modal="showRefModal"
      :show-toast="showToast" :show-confirm="showConfirm" :dtl-id="uiState.selectedId"
      @downloaded="handleSearchList" />
  </bo-container>
  <!-- ===== \u25A1. \uC0C1\uC138 ======================================================== -->
  <!-- ===== \u25A0. \uC694\uCCAD\uC790 \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
  <bo-cm-popup-modal popup-cmd="cmPopup-user-pick"   popup-code="user"   :show="picks.user"   :on-callback="fnCallbackModal" />
  <bo-cm-popup-modal popup-cmd="cmPopup-member-pick" popup-code="member" :show="picks.member" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uC694\uCCAD\uC790 \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
</bo-page>
`};
