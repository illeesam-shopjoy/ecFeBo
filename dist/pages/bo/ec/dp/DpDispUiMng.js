window.DpDispUiMng={name:"DpDispUiMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(p){const{reactive:l,onMounted:_}=Vue,{showToast:h,showConfirm:f}=window.boApp,g=l([]),d=l({loading:!1,error:null}),u=l({device_types:[],use_yn:[{value:"Y",label:"\uC0AC\uC6A9"},{value:"N",label:"\uBBF8\uC0AC\uC6A9"}]}),b=l([]),r=l({searchValue:"",deviceTypeCd:"",useYn:""}),y={},D={nm:{asc:"uiNm asc",desc:"uiNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},t=l({pager:{pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageNums:[],pageCond:{}},sortKey:"",sortDir:"asc",sortIcon:e=>t.sortKey!==e?"\u21C5":t.sortDir==="asc"?"\u2191":"\u2193",sortParam:()=>{const e=D[t.sortKey];return e?{sort:e[t.sortDir]}:{}},onSort:e=>{t.sortKey===e?t.sortDir==="asc"?t.sortDir="desc":(t.sortKey="",t.sortDir="asc"):(t.sortKey=e,t.sortDir="asc"),t.pager.pageNo=1,s()},setPage:e=>{e>=1&&e<=t.pager.pageTotalPage&&(t.pager.pageNo=e,s())},onSizeChange:()=>{t.pager.pageNo=1,s()},reset:()=>{t.sortKey="",t.sortDir="asc",t.pager.pageNo=1},applyPage:e=>(e=e||{},t.pager.pageTotalCount=e.pageTotalCount||0,t.pager.pageTotalPage=e.pageTotalPage||coUtil.cofTotalPage(t.pager),coUtil.cofBuildPagerNums(t.pager),e.pageList||[])}),i=coUtil.cofDetail();i.active=!1,i.resetSeq=0;const c=()=>{i.selectedId="__new__",i.openMode="view",i.active=!1,i.resetSeq++};c();const I=e=>{i.openEdit(e),i.active=!0},v=e=>{i.openView(e),i.active=!0},P=()=>{i.openNew(),i.active=!0,i.resetSeq++},U=(e,a)=>{if(e==="searchParam-list")return t.pager.pageNo=1,s();if(e==="searchParam-reset")return Object.assign(r,y),t.reset(),c(),s();if(e==="uis-add")return a&&(a.ctrlKey||a.metaKey||a.button===1)?p.openNewWindow("dpDispUiDtl",null,"new"):P();if(e==="baseDetail-close")return c();if(e==="uis-sort")return t.onSort(a);if(e==="uis-pager-setPage")return t.setPage(a);console.warn("[handleBtnAction] unknown cmd:",e)},C=e=>{if(e==="uis-pager-sizeChange")return t.onSizeChange();console.warn("[handleSelectAction] unknown cmd:",e)},k=(e,a,o,n={})=>{if(e==="uis-cellClick"){if(a==="btn_row_edit")return n&&(n.ctrlKey||n.metaKey||n.button===1)?p.openNewWindow("dpDispUiDtl",o.uiId,"edit"):I(o.uiId);if(a==="btn_row_delete")return N(o);if(a==="btn_row_preview")return m("ui",o.uiId);const G=["__no__"];if(n.col&&n.col.link||G.includes(a))return n.ctrlKey||n.metaKey||n.button===1?p.openNewWindow("dpDispUiDtl",o.uiId):v(o.uiId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},S=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["DEVICE_TYPE_CD"],{compNm:"DpDispUiMng"}),u.device_types=e.sgGetGrpCodes("DEVICE_TYPE_CD"),b.splice(0,b.length,...await window.boUtil.bofLoadSiteOptions())};_(async()=>{await S();const e=new URLSearchParams(window.location.search),a=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(r).forEach(o=>{!a.includes(o)&&e.has(o)&&(r[o]=e.get(o))}),await s(),Object.assign(y,r)});const s=async()=>{var e;d.loading=!0;try{const a={pageNo:t.pager.pageNo,pageSize:t.pager.pageSize,...t.sortParam(),...coUtil.cofOmitEmpty(r)},o=(e=(await boApiSvc.dpUi.getPage(a,"\uC804\uC2DCUI\uAD00\uB9AC","\uC870\uD68C")).data)==null?void 0:e.data;g.splice(0,g.length,...t.applyPage(o)),d.error=null}catch(a){d.error=a.message}finally{d.loading=!1}},N=async e=>{if(await f("\uC0AD\uC81C",`[${e.uiNm}] UI\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
\uD558\uC704 \uC601\uC5ED\uC774 \uC788\uC73C\uBA74 \uBA3C\uC800 \uC601\uC5ED\uC744 \uC0AD\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4.`))try{await boApiSvc.dpUi.remove(e.uiId,"\uC804\uC2DCUI\uAD00\uB9AC","\uC0AD\uC81C"),h("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),i.selectedId===e.uiId&&c(),await s()}catch(a){h(coUtil.cofErrMsg(a),"error",0)}},m=(e,a)=>{window.open(window.pageUrl("bo-disp-ui-pop.html")+"?mode="+e+"&id="+a,"_blank","width=1440,height=900,scrollbars=yes,resizable=yes")},x=(e,a={})=>{if(e==="dpDispUiMng"){a.reload&&s(),c();return}if(e==="__cancelEdit__"){if(i.selectedId&&i.selectedId!=="__new__"){i.openMode="view";return}c();return}if(e==="__closeDtl__"){c();return}if(e==="__switchToEdit__")return i.switchToEdit();p.navigate(e,a)},A=e=>boUtil.bofGetPathLabel(e)||(e==null?"":"#"+e),E={PC:"badge-blue",MOBILE:"badge-green",TABLET:"badge-purple",ALL:"badge-gray"},w={};w.baseSearch=[{key:"searchValue",label:"UI\uBA85",type:"text",placeholder:"UI\uBA85/\uCF54\uB4DC \uAC80\uC0C9"},{key:"deviceTypeCd",label:"\uB514\uBC14\uC774\uC2A4",type:"select",options:()=>u.device_types,nullLabel:"\uB514\uBC14\uC774\uC2A4 \uC804\uCCB4"},{key:"useYn",label:"\uC0AC\uC6A9\uC5EC\uBD80",type:"select",options:()=>u.use_yn,nullLabel:"\uC0AC\uC6A9\uC5EC\uBD80 \uC804\uCCB4"},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>b,nullLabel:"\uC804\uCCB4"}],w.baseGrid=[{key:"uiCd",label:"UI\uCF54\uB4DC",style:"width:120px;",mono:!0},{key:"uiNm",label:"UI\uBA85",sortKey:"nm",link:!0,cellInnerStyle:(e,a)=>i.selectedId===a.uiId?"color:#e8587a;font-weight:700;":""},{key:"deviceTypeCd",label:"\uB514\uBC14\uC774\uC2A4",style:"width:90px;",badge:e=>E[e.deviceTypeCd]||"badge-gray"},{key:"pathId",label:"\uD45C\uC2DC\uACBD\uB85C",style:"width:160px;",fmt:e=>A(e)||"-"},{key:"sortOrd",label:"\uC815\uB82C",style:"width:60px;",align:"center"},{key:"useStartDate",label:"\uC0AC\uC6A9\uAE30\uAC04",style:"width:170px;",fmt:(e,a)=>(coUtil.cofYmd(e)||"")+" ~ "+(coUtil.cofYmd(a.useEndDate)||"")},{key:"useYn",label:"\uC0AC\uC6A9",style:"width:70px;",badge:e=>e.useYn==="Y"?"badge-green":"badge-gray",fmt:e=>e==="Y"?"\uC0AC\uC6A9":"\uBBF8\uC0AC\uC6A9"},{key:"regDate",label:"\uB4F1\uB85D\uC77C",style:"width:110px;",sortKey:"reg",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8"}];const T=l({show:!1});return{uis:g,uiState:d,codes:u,searchParam:r,baseGrid:t,baseDetail:i,columns:w,excelModal:T,buildExcelParams:()=>({...t.sortParam(),...coUtil.cofOmitEmpty(r)}),handleBtnAction:U,handleSelectAction:C,handleGridCellAction:k,handleOpenPreview:m,inlineNavigate:x}},template:`
<bo-page title="\uC804\uC2DCUI\uAD00\uB9AC" desc="\uC804\uC2DC \uD654\uBA74(UI) \uC815\uC758 \u2014 \uACC4\uCE35: UI > \uC601\uC5ED > \uD328\uB110 > \uC704\uC82F" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" :columns="columns.baseSearch" :param="searchParam"
      @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED ===================================================== -->
  <bo-container title="\uC804\uC2DCUI\uBAA9\uB85D" :count-text="'\uCD1D ' + baseGrid.pager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
      <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
        @click="handleBtnAction('uis-add', $event)"
        @auxclick="handleBtnAction('uis-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <bo-grid bare :columns="columns.baseGrid" :rows="uis" :pager="baseGrid.pager" row-key="uiId" :selected-key="baseDetail.selectedId"
      :sort-state="baseGrid"
      :row-class="row => baseDetail.selectedId === row.uiId ? 'active' : ''" empty-text="\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
      @sort="key => handleBtnAction('uis-sort', key)"
      grid-id="uis-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" row-actions
            table-max-height="540px">
      <template #row-actions="{ row, gridId }">
        <div class="actions" style="white-space:nowrap;flex-wrap:nowrap;">
          <button class="btn btn_preview btn-icon" title="\uBBF8\uB9AC\uBCF4\uAE30" @click.stop="handleGridCellAction(gridId, 'btn_row_preview', row)">\u{1F441}</button>
          <button class="btn btn_row_edit" style="white-space:nowrap;"
            @click.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)"
            @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)">
            \uC218\uC815
          </button>
          <button class="btn btn_row_delete" style="white-space:nowrap;" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', row)">\uC0AD\uC81C</button>
        </div>
      </template>
    </bo-grid>
    <bo-pager :pager="baseGrid.pager" :on-set-page="n => handleBtnAction('uis-pager-setPage', n)" :on-size-change="() => handleSelectAction('uis-pager-sizeChange')" />
    <bo-excel-down-modal :show="excelModal.show" domain="dpUi" area-nm="\uC804\uC2DCUI"
      :columns="columns.baseGrid" ui-nm="\uC804\uC2DCUI\uAD00\uB9AC" :params="buildExcelParams()"
      @close="excelModal.show = false" />
  </bo-container>
  <!-- ===== \u25A0. \uC0C1\uC138 \uD328\uB110 (\uC778\uB77C\uC778 \uC784\uBCA0\uB4DC \u2014 \uD56D\uC0C1 \uD45C\uC2DC) ============================ -->
  <dp-disp-ui-dtl :key="baseDetail.panelKey + '_' + baseDetail.resetSeq" :navigate="inlineNavigate"
    :dtl-id="baseDetail.editId" :dtl-mode="baseDetail.dtlMode"
    :active="baseDetail.active"
    :reload-trigger="baseDetail.reloadTrigger" />
</bo-page>
`};
