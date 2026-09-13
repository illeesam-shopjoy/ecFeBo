window.PdProdMng={name:"PdProdMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}},initSearchValue:{type:String,default:null},fixedProdTypeCd:{type:String,default:null}},setup(i){const{ref:ce,reactive:c,computed:_,watch:pe,onMounted:O}=Vue,m=window.boApp.showToast,E=window.boApp.showConfirm,ge=window.boApp.showRefModal,u=c({isCatModal:!1,isOptCodeModal:!1,isMdPick:!1}),P=c([]),C=c([]),s=c({loading:!1,error:null,sortKey:"",sortDir:"asc"}),p=c({product_statuses:[],option_types:[],category_depths:[],prod_date_types:[],date_range_opts:[],prod_types:[]}),T=c([]),k={nm:{asc:"prodNm asc",desc:"prodNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},y=(e,t={})=>{if(e==="searchParam-list"){if((l.dateRangeStart||l.dateRangeEnd)&&!l.dateRangeType){m("\uAE30\uAC04 \uAC80\uC0C9 \uC2DC \uAE30\uAC04\uC720\uD615\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}return r.pageNo=1,g("DEFAULT")}else{if(e==="searchParam-reset")return Object.assign(l,D),s.sortKey="",s.sortDir="asc",r.pageNo=1,h(),g();if(e==="searchParam-dateRange")return L();if(e==="catModal-open")return q();if(e==="catModal-close"){u.isCatModal=!1;return}else if(e==="searchParam-cateClear"){l.cate="",l.categoryId="";return}else{if(e==="prods-add")return t&&(t.ctrlKey||t.metaKey||t.button===1)?i.openNewWindow("pdProdDtl",null,"new"):V();if(e==="prods-reload")return g("RELOAD");if(e==="detailPanel-close")return B();if(e==="prods-sort")return G(t);if(e==="prods-pager-setPage")return F(t);if(e==="optCodeMng-open")return v();if(e==="mdModal-open"){u.isMdPick=!0;return}else if(e==="searchParam-mdClear"){l.mdUserId="",l.mdUserNm="";return}else console.warn("[handleBtnAction] unknown cmd:",e)}}},N=(e,t={})=>{if(e==="prods-pager-sizeChange")return Y();if(e==="prods-rowPreview")return j(t);if(e==="catModal-select")return M(t);console.warn("[handleSelectAction] unknown cmd:",e)},R=(e,t,o,d={})=>{if(e==="prods-cellClick"){if(t==="btn_row_edit")return d&&(d.ctrlKey||d.metaKey||d.button===1)?i.openNewWindow("pdProdDtl",o.prodId,"edit"):$(o.prodId);if(t==="btn_row_delete")return z(o);if(t==="btn_row_hist")return d.ctrlKey||d.metaKey||d.button===1?i.openNewWindow("pdProdHist",o.prodId):U(o.prodId);if(t==="btn_row_newtab")return d.ctrlKey||d.metaKey||d.button===1?i.openNewWindow("pdProdDtl",o.prodId):i.navigate("pdProdDtl",{id:o.prodId,tabLabel:o.prodNm});const n=["__no__"];if(d.col&&d.col.link||n.includes(t))return d.ctrlKey||d.metaKey||d.button===1?i.openNewWindow("pdProdDtl",o.prodId):K(o.prodId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},x=(e,t,o)=>{if(e==="cmPopup-category-pick"){if(o==null){u.isCatModal=!1;return}return M(o)}else if(e==="cmPopup-userMd-pick"){if(o==null){u.isMdPick=!1;return}l.mdUserId=o.selId||"",l.mdUserNm=o.selName||"",u.isMdPick=!1;return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},l=c({searchType:"",searchValue:"",dateRangeType:"",dateRange:"",dateRangeStart:"",dateRangeEnd:"",cate:"",categoryId:"",prodStatusCd:"",prodTypeCd:"",vendorId:"",mdUserId:"",mdUserNm:""}),D={},r=c({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),a=c({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),w=c({prodId:null}),U=e=>{w.prodId=e},f=()=>{w.prodId=null},S=()=>{const{sortKey:e,sortDir:t}=s;return!e||!k[e]?{}:{sort:k[e][t]}},G=e=>{s.sortKey===e?s.sortDir==="asc"?s.sortDir="desc":(s.sortKey="",s.sortDir="asc"):(s.sortKey=e,s.sortDir="asc"),r.pageNo=1,g()},g=async(e="DEFAULT")=>{var t;f(),s.loading=!0;try{const o={pageNo:r.pageNo,pageSize:r.pageSize,...S(),...coUtil.cofOmitEmpty(l)};o.searchValue&&!o.searchType&&(o.searchType="prodId,prodNm,prodCode");const n=(t=(await boApiSvc.pdProd.getPage(o,"\uC0C1\uD488\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:t.data;P.splice(0,P.length,...(n==null?void 0:n.pageList)||[]),r.pageTotalCount=(n==null?void 0:n.pageTotalCount)||0,r.pageTotalPage=(n==null?void 0:n.pageTotalPage)||coUtil.cofTotalPage(r),coUtil.cofBuildPagerNums(r),Object.assign(r.pageCond,(n==null?void 0:n.pageCond)||r.pageCond),s.error=null}catch(o){console.error("[catch-info]",o),s.error=o.message}finally{s.loading=!1}},L=()=>{boUtil.bofApplyDateRange(l),r.pageNo=1},h=()=>{a.selectedId="__new__",a.openMode="view",a.active=!1,a.resetSeq++,f()},K=e=>{f(),a.selectedId=e,a.openMode="view",a.active=!0,a.reloadTrigger++},$=e=>{f(),a.selectedId=e,a.openMode="edit",a.active=!0,a.reloadTrigger++},V=()=>{f(),a.selectedId="__new__",a.openMode="edit",a.active=!0,a.resetSeq++,a.reloadTrigger++},B=()=>{h()},W=(e,t={})=>{if(e==="pdProdMng"){t.reload&&g("RELOAD"),h();return}if(e==="__cancelEdit__"){if(a.selectedId&&a.selectedId!=="__new__"){a.openMode="view";return}h();return}if(e==="__closeDtl__"){h();return}if(e==="__switchToEdit__"){a.openMode="edit";return}i.navigate(e,t)},F=async e=>{e>=1&&e<=r.pageTotalPage&&(r.pageNo=e,await g("PAGE_CLICK"))},Y=()=>{r.pageNo=1,g("DEFAULT")},z=async e=>{var d,n;if(!await E("\uC0AD\uC81C",`[${e.prodNm}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const o=P.findIndex(b=>b.prodId===e.prodId);o!==-1&&P.splice(o,1),a.selectedId===e.prodId&&h(),w.prodId===e.prodId&&f();try{const b=await boApiSvc.pdProd.remove(e.prodId,"\uC0C1\uD488\uAD00\uB9AC","\uC0AD\uC81C");m&&m("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(b){console.error("[catch-info]",b);const ie=((n=(d=b.response)==null?void 0:d.data)==null?void 0:n.message)||b.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";m&&m(ie,"error",0)}},j=e=>{window.open(`${window.pageUrl("index.html")}?page=prodView&prodid=${e}`,"_blank","width=1200,height=800,scrollbars=yes")},q=async()=>{await g("DEFAULT"),u.isCatModal=!0},M=e=>{l.cate=(e?e.categoryNm:"")||"",l.categoryId=(e?e.categoryId:"")||"",u.isCatModal=!1},H=c({show:!1}),J=()=>{const e={...S(),...coUtil.cofOmitEmpty(l)};return e.searchValue&&!e.searchType&&(e.searchType="prodId,prodNm,prodCode"),e},Q={ACTIVE:"badge-green",INACTIVE:"badge-gray",ENDED:"badge-red",DRAFT:"badge-blue",SOLDOUT:"badge-red",SCHEDULED:"badge-blue"},X=e=>coUtil.cofCodeBadge("PROD_STATUS_CD",e,Q[e]||"badge-gray"),Z=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["PROD_STATUS_CD","OPT_TYPE","CATEGORY_DEPTH","PROD_DATE_TYPE","DATE_RANGE_OPT","PROD_TYPE_CD"],{compNm:"PdProdMng"}),p.product_statuses=e.sgGetGrpCodes("PROD_STATUS_CD"),p.option_types=e.sgGetGrpCodes("OPT_TYPE"),p.category_depths=e.sgGetGrpCodes("CATEGORY_DEPTH"),p.prod_date_types=e.sgGetGrpCodes("PROD_DATE_TYPE"),p.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT"),p.prod_types=e.sgGetGrpCodes("PROD_TYPE_CD"),T.splice(0,T.length,...await window.boUtil.bofLoadSiteOptions())},ee=async()=>{var e,t;try{const o=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:500},"\uC0C1\uD488\uAD00\uB9AC","\uC5C5\uCCB4\uBAA9\uB85D\uC870\uD68C");C.splice(0,C.length,...((t=(e=o.data)==null?void 0:e.data)==null?void 0:t.pageList)||[])}catch(o){console.error("[catch-info]",o)}},te=async()=>{var t,o,d;const e=(t=window.useBoAuthStore)==null?void 0:t.call(window).sgCurrentUser;if(e!=null&&e.authId)try{const b=((o=(await boApiSvc.syVendorUser.getList({userId:e.authId},"\uC0C1\uD488\uAD00\uB9AC","\uC18C\uC18D\uC5C5\uCCB4\uC870\uD68C")).data)==null?void 0:o.data)||[];(d=b[0])!=null&&d.vendorId&&(l.vendorId=b[0].vendorId)}catch(n){console.error("[catch-info]",n)}};O(async()=>{const t=new Date().getFullYear();Object.assign(l,{dateRangeType:"reg_date",dateRangeStart:`${t-3}-01-01`,dateRangeEnd:`${t}-12-31`,prodTypeCd:i.fixedProdTypeCd||""}),await Z(),i.initSearchValue&&(l.searchValue=i.initSearchValue,l.dateRangeStart="",l.dateRangeEnd="");const o=new URLSearchParams(window.location.search),d=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(l).forEach(n=>{!d.includes(n)&&o.has(n)&&(l[n]=o.get(n))}),await Promise.all([ee(),te()]),await g("DEFAULT"),Object.assign(D,l)});const oe=_(()=>a.selectedId==="__new__"?null:a.selectedId),ae={SINGLE:"\uB2E8\uD488\uC0C1\uD488\uB4F1\uB85D",OPTION:"\uC635\uC158\uC0C1\uD488\uB4F1\uB85D",GROUP:"\uBB36\uC74C\uC0C1\uD488\uB4F1\uB85D",SET:"\uC138\uD2B8\uC0C1\uD488\uB4F1\uB85D",GIFT:"\uC0AC\uC740\uC0C1\uD488\uB4F1\uB85D"},ne=_(()=>ae[i.fixedProdTypeCd]||"\uC0C1\uD488\uAD00\uB9AC"),de=_(()=>`${a.selectedId}_${a.openMode}_${a.resetSeq}`),I={};I.baseSearch=[{key:"searchType",label:"\uAC80\uC0C9\uB300\uC0C1",type:"multiCheck",options:[{value:"prodId",label:"\uC0C1\uD488ID"},{value:"prodNm",label:"\uC0C1\uD488\uBA85"},{value:"prodCode",label:"\uC0C1\uD488\uCF54\uB4DC"},{value:"brandNm",label:"\uBE0C\uB79C\uB4DC\uBA85"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",label:"\uAC80\uC0C9\uC5B4",type:"text",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"cate",label:"\uCE74\uD14C\uACE0\uB9AC",type:"pick",display:e=>e.cate,placeholder:"\uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD",width:"120px",openLabel:"\uC120\uD0DD",onOpen:()=>y("catModal-open"),onClear:()=>y("searchParam-cateClear")},{key:"prodTypeCd",label:"\uC0C1\uD488\uC720\uD615",type:"select",options:()=>p.prod_types,nullLabel:"\uC720\uD615 \uC804\uCCB4",nullable:!i.fixedProdTypeCd,disabled:()=>!!i.fixedProdTypeCd},{key:"vendorId",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"select",options:()=>C.map(e=>({value:e.vendorId,label:e.vendorNm})),nullLabel:"\uC5C5\uCCB4 \uC804\uCCB4"},{key:"mdUserId",label:"\uB2F4\uB2F9MD",type:"pick",display:e=>e.mdUserNm,placeholder:"MD \uC120\uD0DD",width:"120px",openLabel:"\uC120\uD0DD",onOpen:()=>y("mdModal-open"),onClear:()=>y("searchParam-mdClear")},{key:"prodStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>p.product_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"dateRange",label:"\uB4F1\uB85D\uC77C",type:"dateRange",typeKey:"dateRangeType",startKey:"dateRangeStart",endKey:"dateRangeEnd",typeOptions:()=>p.prod_date_types,rangeOptions:()=>p.date_range_opts,onRangeChange:()=>y("searchParam-dateRange")},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>T,nullLabel:"\uC804\uCCB4"}];const le=e=>(p.option_types.find(t=>t.codeValue===e)||{}).codeLabel||e,A=(e,t)=>{const o=t===1?e.prodOpt1TypeCd:e.prodOpt2TypeCd;if(!o)return"-";const d=(e.prodOpts||[]).filter(n=>n.prodOptTypeLevel===t).length;return`${le(o)}(${d})`},re=e=>e.discntPrice!=null?`${coUtil.cofWon(e.discntPrice)} (${e.discntRate}%\u2193)`:e.salePrice!=null?coUtil.cofWon(e.salePrice):coUtil.cofWon(e.stdPrice);I.baseGrid=[{key:"prodNm",label:"\uC0C1\uD488\uBA85",sortKey:"nm",link:!0,pin:"left",width:"220px",cellInnerStyle:e=>a.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"prodTypeCdNm",label:"\uC0C1\uD488\uC720\uD615",align:"center",pin:"left",width:"90px",fmt:(e,t)=>e||t.prodTypeCd||"-"},{key:"prodOptStdCd",label:"\uC635\uC158\uCE74\uD14C\uACE0\uB9AC",align:"center",fmt:e=>e||"-"},{key:"prodOpt1TypeCd",label:"\uC635\uC1581",align:"center",fmt:(e,t)=>A(t,1)},{key:"prodOpt2TypeCd",label:"\uC635\uC1582",align:"center",fmt:(e,t)=>A(t,2)},{key:"stdPrice",label:"\uC815\uAC00",align:"right",fmt:e=>coUtil.cofWon(e)},{key:"salePrice",label:"\uD310\uB9E4\uAC00",align:"right",fmt:(e,t)=>re(t)},{key:"saleDiscntRate",label:"\uD310\uB9E4\uD560\uC778\uC728",align:"right",fmt:e=>e!=null?e+"%":"-"},{key:"saleDiscntAmt",label:"\uD310\uB9E4\uD560\uC778\uAE08\uC561",align:"right",fmt:e=>e!=null?coUtil.cofWon(e):"-"},{key:"prodStock",label:"\uC7AC\uACE0",fmt:e=>e+"\uAC1C"},{key:"saleCount",label:"\uD310\uB9E4\uC218\uB7C9",align:"right",fmt:e=>(e||0).toLocaleString()+"\uAC1C"},{key:"cateNm",label:"\uCE74\uD14C\uACE0\uB9AC"},{key:"brandNm",label:"\uBE0C\uB79C\uB4DC"},{key:"prodStatusCd",label:"\uD310\uB9E4\uC0C1\uD0DC",badge:e=>X(e.prodStatusCd),fmt:(e,t)=>t.prodStatusCdNm||t.prodStatusCd},{key:"dispStartDate",label:"\uC804\uC2DC\uC2DC\uC791\uC77C\uC2DC",fmt:e=>e?String(e).slice(0,16).replace("T"," "):"-"},{key:"dispEndDate",label:"\uC804\uC2DC\uC885\uB8CC\uC77C\uC2DC",fmt:e=>e?String(e).slice(0,16).replace("T"," "):"-"},{key:"saleStartDate",label:"\uD310\uB9E4\uC2DC\uC791\uC77C\uC2DC",fmt:e=>e?String(e).slice(0,16).replace("T"," "):"-"},{key:"saleEndDate",label:"\uD310\uB9E4\uC885\uB8CC\uC77C\uC2DC",fmt:e=>e?String(e).slice(0,16).replace("T"," "):"-"},{key:"regDate",label:"\uB4F1\uB85D\uC77C",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;"}];const v=()=>{u.isOptCodeModal=!0},se=_(()=>window.pageUrl("bo-pd-opt-code-mng.html"));return{modals:u,columns:I,excelModal:H,buildExcelParams:J,products:P,uiState:s,searchParam:l,baseGridPager:r,detailPanel:a,histPanel:w,cfOptCodeMngUrl:se,handleBtnAction:y,handleSelectAction:N,handleGridCellAction:R,fnCallbackModal:x,cfDetailEditId:oe,cfDetailKey:de,inlineNavigate:W,closeHist:f,handleSearchList:g,fnOpenOptCodeMng:v,fixedProdTypeCd:i.fixedProdTypeCd,cfPageTitle:ne}},template:`
<bo-page :title="cfPageTitle" :share-query="searchParam"
  desc-summary="\uC0C1\uD488\uAD00\uB9AC \uB294 \uD310\uB9E4 \uC0C1\uD488\uC758 \uAE30\uBCF8\uC815\uBCF4\xB7\uAC00\uACA9\xB7\uC7AC\uACE0\xB7\uC635\uC158\uC744 \uB4F1\uB85D\uD558\uACE0 \uAD00\uB9AC\uD569\uB2C8\uB2E4."
  :desc-detail="['\u2714 \uB2E8\uD488/\uBB36\uC74C/\uC138\uD2B8 \uC0C1\uD488 \uC720\uD615\uBCC4 \uB4F1\uB85D\xB7\uC218\uC815\xB7\uC0AD\uC81C\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.','\u2714 \uC635\uC158(1\uB2E8/2\uB2E8) \uBC0F SKU\uBCC4 \uAC00\uACA9\xB7\uC7AC\uACE0\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.','\u2714 \uC0C1\uD488 \uC0C1\uD0DC(\uC784\uC2DC\uC800\uC7A5\u2192\uAC80\uC218\u2192\uD310\uB9E4\uC911\u2192\uD488\uC808\xB7\uC911\uB2E8)\uB97C \uAD00\uB9AC\uD569\uB2C8\uB2E4.','\uC608) \uB2E8\uD488 \uC758\uB958 \uB4F1\uB85D, \uC635\uC158(\uC0C9\uC0C1\xB7\uC0AC\uC774\uC988) \uC124\uC815, \uC7AC\uACE0 \uC774\uB825 \uD655\uC778'].join(String.fromCharCode(10))">
  <template #actions>
    <button class="btn btn-secondary btn-sm" style="font-size:12px;" @click="handleBtnAction('optCodeMng-open')">
      \u2699 \uC0C1\uD488\uC635\uC158\uCF54\uB4DC\uAD00\uB9AC
    </button>
  </template>
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" :columns="columns.baseSearch" :param="searchParam"
      @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D ====================================================== -->
  <bo-container title="\uC0C1\uD488\uBAA9\uB85D" :count-text="baseGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">
        \u{1F4E5} \uC5D1\uC140
      </button>
      <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
        @click="handleBtnAction('prods-add', $event)"
        @auxclick="handleBtnAction('prods-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <bo-grid bare
      :columns="columns.baseGrid" :rows="products" row-key="prodId" :selected-key="detailPanel.selectedId"
      :row-actions="true"
      :sort-state="{ sortKey: uiState.sortKey, sortDir: uiState.sortDir }"
      :row-style="(p) => detailPanel.selectedId===p.prodId ? 'background:#fff8f9;' : ''"
      @sort="key => handleBtnAction('prods-sort', key)"
      grid-id="prods-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
            table-max-height="540px">
      <template #head-actions>
        \uAD00\uB9AC
      </template>
      <template #row-actions="{ row: p, gridId }">
        <div class="actions">
          <button class="btn btn-xs" style="background:#fff;border:1px solid #d9d9d9;color:#555;" title="\uBBF8\uB9AC\uBCF4\uAE30"
            @click.stop="handleSelectAction('prods-rowPreview', p.prodId)">
            \u{1F441}
          </button>
          <button class="btn btn_row_edit"
            @click.stop="handleGridCellAction(gridId, 'btn_row_edit', p, $event)"
            @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', p, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', p)">
            \uC0AD\uC81C
          </button>
          <button class="btn btn_row_hist" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
            @click.stop="handleGridCellAction(gridId, 'btn_row_hist', p, $event)"
            @auxclick.stop="$event.button===1 ? handleGridCellAction(gridId, 'btn_row_hist', p, $event) : null">
            \uC774\uB825
          </button>
          <button class="btn btn-xs" style="background:#fff;border:1px solid #d9d9d9;color:#555;" title="\uC0C8 \uD0ED\uC73C\uB85C \uC0C1\uD488\uC0C1\uC138 \uC5F4\uAE30 (Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D)"
            @click.stop="handleGridCellAction(gridId, 'btn_row_newtab', p, $event)"
            @auxclick.stop="$event.button===1 ? handleGridCellAction(gridId, 'btn_row_newtab', p, $event) : null">
            \u{1F5D7}
          </button>
        </div>
      </template>
    </bo-grid>
    <bo-pager :pager="baseGridPager" :on-set-page="n => handleBtnAction('prods-pager-setPage', n)" :on-size-change="() => handleSelectAction('prods-pager-sizeChange')" />
  </bo-container>
  <!-- ===== \u25A1. \uBAA9\uB85D ======================================================= -->
  <!-- ===== \u25A0. \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC ============================================== -->
  <bo-cm-popup-modal v-if="modals.isCatModal"
    popup-cmd="cmPopup-category-pick" popup-code="category" clearable
    :on-callback="fnCallbackModal" @close="modals.isCatModal = false" />
  <!-- ===== \u25A1. \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC ============================================== -->
  <!-- ===== \u25A0. \uB2F4\uB2F9MD \uC120\uD0DD \uBAA8\uB2EC (\uACF5\uD1B5\uD31D\uC5C5 userMd \u2014 PROD_ADMIN \uC5ED\uD560 \uACE0\uC815 \uD544\uD130) ======== -->
  <bo-cm-popup-modal v-if="modals.isMdPick"
    popup-cmd="cmPopup-userMd-pick" popup-code="userMd"
    :on-callback="fnCallbackModal" @close="modals.isMdPick = false" />
  <!-- ===== \u25A1. \uB2F4\uB2F9MD \uC120\uD0DD \uBAA8\uB2EC =============================================== -->
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138: ProdDtl \uC784\uBCA0\uB4DC (\uD56D\uC0C1 \uD45C\uC2DC, \uC9C4\uC785 \uC2DC \uBE48 \uC2E0\uADDC \uD3FC) ============== -->
  <pd-prod-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    :on-list-reload="handleSearchList"
    :fixed-prod-type-cd="fixedProdTypeCd"
    />
  <!-- ===== \u25A1. \uD558\uB2E8 \uC0C1\uC138: ProdDtl \uC784\uBCA0\uB4DC ====================================== -->
  <!-- ===== \u25A0. \uD558\uB2E8 \uC774\uB825: \uAD00\uB9AC\uCEEC\uB7FC [\uC774\uB825] \uD074\uB9AD \uC2DC\uC5D0\uB9CC \uB178\uCD9C ========================= -->
  <div v-if="histPanel.prodId" style="margin-top:12px;">
    <pd-prod-hist :key="histPanel.prodId" :prod-id="histPanel.prodId"
      :navigate="inlineNavigate" :on-close="closeHist" />
  </div>
  <!-- ===== \u25A1. \uD558\uB2E8 \uC774\uB825 ==================================================== -->
  <!-- ===== \u25A0. \uC0C1\uD488\uC635\uC158\uCF54\uB4DC\uAD00\uB9AC \uBAA8\uB2EC (bo-pd-opt-code-mng.html iframe \uC778\uB77C\uC778) ============== -->
  <bo-modal v-if="modals.isOptCodeModal" :show="true" title="\u2699 \uC0C1\uD488\uC635\uC158\uCF54\uB4DC\uAD00\uB9AC" width="1100px" height="720px" body-pad="0"
    @close="modals.isOptCodeModal = false">
    <template #header-extra>
      <span style="font-size:11px;color:#bbb;">{{ cfOptCodeMngUrl }}</span>
    </template>
    <div style="position:relative;width:100%;height:660px;overflow:hidden;">
      <iframe src="bo-pd-opt-code-mng.html" style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
    </div>
  </bo-modal>
  <!-- ===== \u25A1. \uC0C1\uD488\uC635\uC158\uCF54\uB4DC\uAD00\uB9AC \uBAA8\uB2EC ============================================ -->
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="pdProd"
    area-nm="\uC0C1\uD488\uAD00\uB9AC" :columns="columns.baseGrid" ui-nm="\uC0C1\uD488\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
