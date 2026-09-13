window.SyI18nMng={name:"SyI18nMng",props:{navigate:{type:Function,required:!0}},setup(j){const{ref:V,reactive:c,computed:w,onMounted:x,watch:Y}=Vue,i=window.boApp.showToast,A=window.boApp.showConfirm,r=c([]),a=c({selectedKey:null,dtlMode:"view"}),K=w(()=>a.dtlMode==="view"),u=c({lang_code:[],use_yn:[],i18n_scopes:["COMMON","FO","BO"]}),P=(e,n={})=>{if(e==="searchParam-list")return s.pageNo=1,g();if(e==="searchParam-reset")return Object.assign(l,M),s.pageNo=1,g();if(e==="msgForm-save")return F();if(e==="msgForm-close")return f();if(e==="msgForm-edit")return T();if(e==="msgForm-cancel")return B();console.warn("[handleBtnAction] unknown cmd:",e)},E=(e,n={})=>{if(e==="i18ns-pager-setPage"){n>=1&&n<=s.pageTotalPage&&(s.pageNo=n,g());return}else{if(e==="i18ns-pager-sizeChange")return s.pageNo=1,g();console.warn("[handleSelectAction] unknown cmd:",e)}},S=(e,n,o,t={})=>{if(e==="i18ns-cellClick"){if(n==="btn_row_edit")return O(o);const m=["__no__"];if(t.col&&t.col.link||m.includes(n))return a.selectedKey===o.i18nKey&&a.dtlMode==="view"?f():_(o)}else console.warn("[handleGridCellAction] unknown cmd:",e)},l=c({searchType:"",searchValue:"",i18nScopeCd:"",useYn:""}),M={},s=c({pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),k=["ko","en","cn","ja"],v={ko:"\uD55C\uAD6D\uC5B4",en:"English",cn:"\u4E2D\u6587",ja:"\u65E5\u672C\u8A9E"},p=c({}),d=c({}),y=w(()=>(r||[]).find(e=>e.i18nKey===a.selectedKey)||null),g=async()=>{var e;try{const n={pageNo:s.pageNo,pageSize:s.pageSize,...coUtil.cofOmitEmpty({...l,searchValue:(l.searchValue||"").trim()})};n.searchValue&&!n.searchType&&(n.searchType="i18nKey,i18nDesc,i18nMsgKo,i18nMsgEn,i18nMsgCn,i18nMsgJa");const t=(e=(await boApiSvc.syI18n.getPage(n,"\uB2E4\uAD6D\uC5B4\uAD00\uB9AC","\uC870\uD68C")).data)==null?void 0:e.data;r.splice(0,r.length,...(t==null?void 0:t.pageList)||[]),s.pageTotalCount=(t==null?void 0:t.pageTotalCount)||0,s.pageTotalPage=(t==null?void 0:t.pageTotalPage)||1,coUtil.cofBuildPagerNums(s)}catch(n){console.error("[handleSearchData]",n),r.splice(0,r.length)}},G=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["LANG_CODE","USE_YN"],{compNm:"SyI18nMng"}),u.lang_code=e.sgGetGrpCodes("LANG_CODE"),u.use_yn=e.sgGetGrpCodes("USE_YN")},C=(e,n)=>{a.selectedKey=e.i18nKey,a.dtlMode=n;const o={};k.forEach(t=>{o[t]=b(e,t)}),Object.assign(p,o),Object.keys(d).forEach(t=>delete d[t])},_=e=>C(e,"view"),O=e=>C(e,"edit"),T=()=>{a.dtlMode="edit"},f=()=>{a.selectedKey=null,a.dtlMode="view"},B=()=>{const e=y.value;return e?_(e):f()},F=async()=>{var n,o;if(!y.value)return;if(Object.keys(d).forEach(t=>delete d[t]),!p.ko||!p.ko.trim()){d.ko="\uD55C\uAD6D\uC5B4(ko) \uBC88\uC5ED\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",i&&i("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}if(await A("\uC800\uC7A5","\uBC88\uC5ED \uBA54\uC2DC\uC9C0\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{await boApiSvc.syI18n.updateMsgs(y.value.i18nId,{msgs:{...p}},"\uB2E4\uAD6D\uC5B4\uAD00\uB9AC","\uC800\uC7A5"),await g(),a.dtlMode="view",i&&i("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(t){console.error("[catch-info]",t);const m=((o=(n=t.response)==null?void 0:n.data)==null?void 0:o.message)||t.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";i&&i(m,"error",0)}};x(async()=>{await G();const e=new URLSearchParams(window.location.search),n=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(l).forEach(o=>{!n.includes(o)&&e.has(o)&&(l[o]=e.get(o))}),await g(),Object.assign(M,l)});const N=e=>({COMMON:"badge-blue",FO:"badge-green",BO:"badge-orange"})[e]||"badge-gray",z=e=>e==="Y"?"badge-green":"badge-gray",b=(e,n)=>!e||!n?"":e["i18nMsg"+n.charAt(0).toUpperCase()+n.slice(1)]||"",D=e=>a.selectedKey===e.i18nKey?"background:#fff8f9;":"",h={};h.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"i18nKey",label:"\uD0A4"},{value:"i18nDesc",label:"\uC124\uBA85"},{value:"i18nMsgKo",label:"\uD55C\uAD6D\uC5B4"},{value:"i18nMsgEn",label:"English"},{value:"i18nMsgCn",label:"\u4E2D\u6587"},{value:"i18nMsgJa",label:"\u65E5\u672C\u8A9E"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"i18nScopeCd",type:"select",label:"\uBC94\uC704",options:()=>u.i18n_scopes,nullLabel:"\uC804\uCCB4"},{key:"useYn",type:"select",label:"\uC0AC\uC6A9\uC5EC\uBD80",options:()=>u.use_yn,nullLabel:"\uC804\uCCB4"}],h.baseGrid=[{key:"i18nKey",label:"\uD0A4 (i18n_key)",cellInnerStyle:"font-size:12px;color:#7c3aed;font-family:monospace;"},{key:"i18nDesc",label:"\uC124\uBA85",cellStyle:"color:#666;font-size:12px"},{key:"i18nScopeCd",label:"\uBC94\uC704",align:"center",badge:e=>N(e.i18nScopeCd)},{key:"i18nCategory",label:"\uCE74\uD14C\uACE0\uB9AC",cellStyle:"font-size:12px;color:#888"},{key:"i18nMsgKo",label:"ko",align:"center",cellStyle:"font-size:11px;color:#555",fmt:(e,n)=>b(n,"ko")},{key:"i18nMsgEn",label:"en",align:"center",cellStyle:"font-size:11px;color:#555",fmt:(e,n)=>b(n,"en")},{key:"i18nMsgCn",label:"cn",align:"center",cellStyle:"font-size:11px;color:#555",fmt:(e,n)=>b(n,"cn")},{key:"i18nMsgJa",label:"ja",align:"center",cellStyle:"font-size:11px;color:#555",fmt:(e,n)=>b(n,"ja")},{key:"useYn",label:"\uC0AC\uC6A9",align:"center",badge:e=>z(e.useYn)},{type:"actions",actions:[{label:"\uC218\uC815",cls:"btn btn_row_edit btn-sm",onClick:e=>S("i18ns-cellClick","btn_row_edit",e)}]}];const I=k.map(e=>({key:e,label:v[e]+" ("+e+")",type:"text",placeholder:v[e]+" \uBC88\uC5ED \uC785\uB825",required:e==="ko"})),L=c({show:!1});return{columns:h,uiState:a,cfDtlMode:K,searchParam:l,baseGridPager:s,i18ns:r,msgForm:p,errors:d,excelModal:L,buildExcelParams:()=>{const e={...coUtil.cofOmitEmpty({...l,searchValue:(l.searchValue||"").trim()})};return e.searchValue&&!e.searchType&&(e.searchType="i18nKey,i18nDesc,i18nMsgKo,i18nMsgEn,i18nMsgCn,i18nMsgJa"),e},msgFormColumns:I,handleBtnAction:P,handleSelectAction:E,handleGridCellAction:S,cfSelectedKey:y,fnRowStyle:D}},template:`
<bo-page title="\uB2E4\uAD6D\uC5B4\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uB2E4\uAD6D\uC5B4 \uD0A4 \uBAA9\uB85D" :count-text="'\uCD1D ' + baseGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
    </template>
    <bo-grid bare
      :columns="columns.baseGrid" :rows="i18ns" row-key="i18nKey" :selected-key="uiState.selectedKey"
      :row-style="fnRowStyle"
      grid-id="i18ns-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleSelectAction('i18ns-pager-setPage', n)" :on-size-change="() => handleSelectAction('i18ns-pager-sizeChange')" />
    <bo-excel-down-modal :show="excelModal.show" domain="syI18n" area-nm="\uB2E4\uAD6D\uC5B4"
      :columns="columns.baseGrid" ui-nm="\uB2E4\uAD6D\uC5B4\uAD00\uB9AC" :params="buildExcelParams()"
      @close="excelModal.show = false" />
  </bo-container>
  <!-- ===== \u25A0. \uBC88\uC5ED \uD3B8\uC9D1 \uD328\uB110 (\uD56D\uC0C1 \uD45C\uC2DC) ====================================== -->
  <bo-container>
    <div class="toolbar">
      <span class="list-title">
        {{ !cfSelectedKey ? '\uB2E4\uAD6D\uC5B4 \uC0C1\uC138' : (cfDtlMode ? '\uB2E4\uAD6D\uC5B4 \uC0C1\uC138' : '\uB2E4\uAD6D\uC5B4 \uC218\uC815') }}
        <span v-if="cfSelectedKey ? (cfSelectedKey.i18nKey) : false" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">
          #{{ cfSelectedKey.i18nKey }}
        </span>
        <span v-else style="font-size:12px;color:#bbb;margin-left:8px;font-weight:400;">
          \uBAA9\uB85D\uC5D0\uC11C \uB2E4\uAD6D\uC5B4 \uD0A4\uB97C \uC120\uD0DD\uD558\uC138\uC694
        </span>
      </span>
      <div v-if="cfSelectedKey" style="margin-left:auto;display:flex;gap:6px;">
        <template v-if="cfDtlMode">
          <button class="btn btn_edit" @click="handleBtnAction('msgForm-edit')">
            \uC218\uC815
          </button>
          <button class="btn btn_close" @click="handleBtnAction('msgForm-close')">
            \uB2EB\uAE30
          </button>
        </template>
        <template v-else>
          <button class="btn btn_save" @click="handleBtnAction('msgForm-save')">
            \uC800\uC7A5
          </button>
          <button class="btn btn_cancel" @click="handleBtnAction('msgForm-cancel')">
            \uCDE8\uC18C
          </button>
          <button class="btn btn_close" @click="handleBtnAction('msgForm-close')">
            \uB2EB\uAE30
          </button>
        </template>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0. \uC5B8\uC5B4\uBCC4 \uBC88\uC5ED \uC785\uB825 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ========================== -->
    <div style="padding:12px">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <bo-form-area v-if="cfSelectedKey" :columns="msgFormColumns" :form="msgForm" :errors="errors"
        :cols="3" :show-actions="false" :readonly="cfDtlMode" plain-readonly />
      <div v-else style="text-align:center;color:#bbb;padding:28px 12px;font-size:13px;">
        \uBAA9\uB85D\uC5D0\uC11C \uB2E4\uAD6D\uC5B4 \uD0A4\uB97C \uC120\uD0DD\uD558\uBA74 \uC5B8\uC5B4\uBCC4 \uBC88\uC5ED\uC744 \uD3B8\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
      </div>
    </div>
  </bo-container>
</bo-page>
`};
