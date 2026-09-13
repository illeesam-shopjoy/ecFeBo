window.DpDispWidgetLibMng={name:"DpDispWidgetLibMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(u){const{ref:Z,reactive:d,computed:h,onMounted:I,watch:ee}=Vue,f=window.boApp.showToast,S=window.boApp.showConfirm,te=window.boApp.showRefModal,b=d([]),y=d({}),o=d({loading:!1,selectedPath:null,sortKey:"",sortDir:"asc"}),w=d({disp_widget_types:[],active_statuses:[]}),_=d([]),k=(e,t={})=>{if(e==="searchParam-list")return l.pageNo=1,r("DEFAULT");if(e==="searchParam-reset")return Object.assign(n,L),o.sortKey="",o.sortDir="asc",o.selectedPath=null,l.pageNo=1,p(),r("DEFAULT");if(e==="widgetLibs-add")return t&&(t.ctrlKey||t.metaKey||t.button===1)?u.openNewWindow("dpDispWidgetLibDtl",null,"new"):B();if(e==="detailPanel-close")return K();if(e==="pathTree-all")return o.selectedPath=null,l.pageNo=1,r("DEFAULT");if(e==="widgetLibs-sort")return W(t);if(e==="widgetLibs-pager-setPage")return $(t);console.warn("[handleBtnAction] unknown cmd:",e)},A=(e,t={},s)=>{if(e==="widgetLibs-pager-sizeChange")return q();if(e==="widgetLibs-rowDelete")return J(t);if(e==="widgetLibs-rowEdit")return s&&(s.ctrlKey||s.metaKey||s.button===1)?u.openNewWindow("dpDispWidgetLibDtl",t,"edit"):T(t);if(e==="pathTree-select")return z(t);console.warn("[handleSelectAction] unknown cmd:",e)},N=(e,t,s,i={})=>{if(e==="widgetLibs-cellClick"){if(t==="btn_row_preview")return C("widgetLib",s.widgetLibId);const x=["__no__"];if(i.col&&i.col.link||x.includes(t))return i.ctrlKey||i.metaKey||i.button===1?u.openNewWindow("dpDispWidgetLibDtl",s.widgetLibId):T(s.widgetLibId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},n=d({searchType:"",searchValue:"",widgetTypeCd:"",useYn:""}),L={},c=d({widgetTypeCd:"",useYn:""}),E=h(()=>n.searchValue!==c.searchValue||n.widgetTypeCd!==c.widgetTypeCd||n.useYn!==c.useYn),v={nm:{asc:"widgetNm asc",desc:"widgetNm desc"},reg:{asc:"regDate asc",desc:"regDate desc"}},l=d({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),a=d({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),M=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["WIDGET_TYPE_CD"],{compNm:"DpDispWidgetLibMng"}),w.disp_widget_types=e.sgGetGrpCodes("WIDGET_TYPE_CD"),w.active_statuses=[{codeValue:"Y",codeLabel:"\uD65C\uC131"},{codeValue:"N",codeLabel:"\uBE44\uD65C\uC131"}],_.splice(0,_.length,...await window.boUtil.bofLoadSiteOptions())},D=()=>{const{sortKey:e,sortDir:t}=o;return!e||!v[e]?{}:{sort:v[e][t]}},W=e=>{o.sortKey===e?o.sortDir==="asc"?o.sortDir="desc":(o.sortKey="",o.sortDir="asc"):(o.sortKey=e,o.sortDir="asc"),l.pageNo=1,r()},V=async()=>{var e;try{const{pathId:t,...s}=n,i=coUtil.cofOmitEmpty(s),X=((e=(await boApiSvc.dpWidgetLib.getPathTreeNodeCounts(i,"\uACBD\uB85C\uBCC4\uCE74\uC6B4\uD2B8","\uC870\uD68C")).data)==null?void 0:e.data)||[];Object.keys(y).forEach(g=>{delete y[g]});for(const g of X)g&&g.pathId!=null&&(y[g.pathId]=g.cnt)}catch(t){console.error("[handleLoadPathTreeNodeCounts]",t)}},r=async()=>{var e;o.loading=!0;try{const t={pageNo:l.pageNo,pageSize:l.pageSize,...D(),...coUtil.cofOmitEmpty({...n,searchValue:(n.searchValue||"").trim(),pathId:o.selectedPath})};t.searchValue&&!t.searchType&&(t.searchType="widgetNm,widgetLibDesc,tag");const i=(e=(await boApiSvc.dpWidgetLib.getPage(t,"\uC804\uC2DC\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC","\uC870\uD68C")).data)==null?void 0:e.data;b.splice(0,b.length,...(i==null?void 0:i.pageList)||(i==null?void 0:i.list)||[]),l.pageTotalCount=(i==null?void 0:i.pageTotalCount)||0,l.pageTotalPage=(i==null?void 0:i.pageTotalPage)||1,coUtil.cofBuildPagerNums(l),c.searchValue=n.searchValue,c.widgetTypeCd=n.widgetTypeCd,c.useYn=n.useYn,o.error=null,V()}catch(t){console.error("[catch-info]",t),o.error=t.message}finally{o.loading=!1}};I(async()=>{await M();const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(n).forEach(s=>{!t.includes(s)&&e.has(s)&&(n[s]=e.get(s))}),await r("DEFAULT"),Object.assign(L,n)});const G={image_banner:"\u{1F5BC}",product_slider:"\u{1F6D2}",product:"\u{1F4E6}",cond_product:"\u{1F50D}",chart_bar:"\u{1F4CA}",chart_line:"\u{1F4C8}",chart_pie:"\u{1F967}",text_banner:"\u{1F4DD}",info_card:"\u2139\uFE0F",popup:"\u{1F4AC}",file:"\u{1F4CE}",file_list:"\u{1F4C1}",coupon:"\u{1F39F}",html_editor:"\u{1F4C4}",event_banner:"\u{1F389}",cache_banner:"\u{1F4B0}",widget_embed:"\u{1F9E9}",textarea:"\u{1F4CB}",markdown:"\u{1F4D1}",barcode:"\u{1F516}",qrcode:"\u{1F4F1}",barcode_qrcode:"\u{1F516}",video_player:"\u25B6\uFE0F",countdown:"\u23F1",payment_widget:"\u{1F4B3}",approval_widget:"\u2705",map_widget:"\u{1F5FA}"},P=e=>{var t;return((t=window.safeArrayUtils.safeFind(w.disp_widget_types,s=>s.codeValue===e))==null?void 0:t.codeLabel)||e},Y=e=>G[e]||"\u25AA",z=e=>{o.selectedPath=e,l.pageNo=1,p(),r("DEFAULT")},p=()=>{a.selectedId="__new__",a.openMode="view",a.active=!1,a.resetSeq++},T=e=>{a.selectedId=e,a.openMode="edit",a.active=!0,a.reloadTrigger++},B=()=>{a.selectedId="__new__",a.openMode="edit",a.active=!0,a.resetSeq++,a.reloadTrigger++},K=()=>{p()},O=(e,t={})=>{if(e==="dpDispWidgetLibMng"){t.reload&&r("RELOAD"),p();return}if(e==="__cancelEdit__"){if(a.selectedId&&a.selectedId!=="__new__"){a.openMode="view";return}p();return}if(e==="__closeDtl__"){p();return}u.navigate(e,t)},U=h(()=>a.selectedId==="__new__"?null:a.selectedId),F=h(()=>`${a.selectedId}_${a.openMode}_${a.resetSeq}`),$=e=>{e>=1&&e<=l.pageTotalPage&&(l.pageNo=e,r())},q=()=>{l.pageNo=1,r()},j=e=>e==="Y"?"badge-green":"badge-gray",R=e=>e==="Y"?"\uD65C\uC131":"\uBE44\uD65C\uC131",H=h(()=>!c.searchValue&&!c.widgetTypeCd&&!c.useYn),C=(e,t)=>{window.open(window.pageUrl("bo-disp-ui-pop.html")+"?mode="+e+"&id="+t,"_blank","width=1440,height=900,scrollbars=yes,resizable=yes")},J=async e=>{if(!await S("\uC0AD\uC81C",`[${e.widgetNm}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const s=b.findIndex(i=>i.widgetLibId===e.widgetLibId);s!==-1&&b.splice(s,1),a.selectedId===e.widgetLibId&&p();try{const i=await boApiSvc.dpWidgetLib.remove(e.widgetLibId,"\uC804\uC2DC\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC","\uC0AD\uC81C");f&&f("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(i){console.error("[catch-info]",i),f&&f(coUtil.cofErrMsg(i),"error",0)}},m={};m.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"widgetNm",label:"\uC774\uB984"},{value:"widgetLibDesc",label:"\uC124\uBA85"},{value:"tag",label:"\uD0DC\uADF8"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"130px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825",width:"200px"},{key:"widgetTypeCd",type:"select",label:"\uC704\uC82F \uC720\uD615",options:()=>w.disp_widget_types,nullLabel:"\uC804\uCCB4"},{key:"useYn",type:"select",label:"\uC0C1\uD0DC",options:()=>w.active_statuses,nullLabel:"\uC804\uCCB4"},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>_,nullLabel:"\uC804\uCCB4"}],m.listGrid=[{key:"widgetNm",label:"\uC774\uB984",sortKey:"nm",link:!0,cellInnerClass:"title-link",fmt:(e,t)=>`${Y(t.widgetTypeCd)} ${t.widgetNm||""}`},{key:"widgetTypeCd",label:"\uD0C0\uC785",fmt:e=>P(e)},{key:"useYn",label:"\uC0C1\uD0DC",badge:e=>j(e.useYn),fmt:e=>R(e)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8"}];const Q=d({show:!1});return{columns:m,widgetLibs:b,uiState:o,widgetLibCounts:y,searchParam:n,applied:c,listGridPager:l,detailPanel:a,excelModal:Q,buildExcelParams:()=>{const e={...D(),...coUtil.cofOmitEmpty({...n,searchValue:(n.searchValue||"").trim(),pathId:o.selectedPath})};return e.searchValue&&!e.searchType&&(e.searchType="widgetNm,widgetLibDesc,tag"),e},handleBtnAction:k,handleSelectAction:A,handleGridCellAction:N,handleOpenPreview:C,cfFilterDirty:E,cfDetailEditId:U,cfDetailKey:F,cfNoFilter:H,wTypeLabel:P,inlineNavigate:O}},template:`
<bo-page title="\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC\uAD00\uB9AC" :share-query="searchParam">
  <style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:.55}}</style>
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" :show-actions="false"
    :columns="columns.baseSearch" :param="searchParam"
    @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')">
      <div class="search-actions">
        <span v-if="cfFilterDirty" style="font-size:11px;color:#e8587a;font-weight:600;animation:pulse 1.2s ease-in-out infinite;">
          \uBCC0\uACBD\uB428 \u2192
        </span>
        <button class="btn btn_search" @click="handleBtnAction('searchParam-list')"
        :style="cfFilterDirty ? 'box-shadow:0 0 0 3px rgba(232,88,122,0.35);animation:pulse 1.2s ease-in-out infinite;' : ''">
          \uC870\uD68C
        </button>
        <button class="btn btn_reset" @click="handleBtnAction('searchParam-reset')">
          \uCD08\uAE30\uD654
        </button>
      </div>
    </bo-search-area>
  </bo-container>
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED (\uD2B8\uB9AC + \uBAA9\uB85D) ===================================== -->
  <div class="bo-2col">
    <bo-container title="\u{1F4C2} \uD45C\uC2DC\uACBD\uB85C">
      <template #toolbar-actions>
        <span style="font-size:10px;color:#aaa;font-family:monospace;font-weight:400;">
          #ec_disp_widget_lib
        </span>
        <span v-if="uiState.selectedPath != null" @click="handleBtnAction('pathTree-all')" style="font-size:11px;color:#1677ff;">
          \uC804\uCCB4\uBCF4\uAE30
        </span>
      </template>
      <div style="max-height:65vh;overflow:auto;">
        <bo-path-tree biz-cd="ec_disp_widget_lib" :counts="widgetLibCounts" :selected="uiState.selectedPath" @select="path => handleSelectAction('pathTree-select', path)" />
      </div>
    </bo-container>
    <bo-container title="\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC" :count-text="listGridPager.pageTotalCount + '\uAC74'">
      <template #toolbar-actions>
        <span v-if="uiState.selectedPath != null" style="color:#e8587a;font-family:monospace;font-size:12px;align-self:center;">
          #{{ uiState.selectedPath }}
        </span>
        <div style="display:flex;gap:5px;flex-wrap:wrap;align-items:center;font-size:11px;">
          <span v-if="cfNoFilter" style="color:#999;">
            \uD544\uD130 \uC5C6\uC74C
          </span>
          <span v-if="applied.searchValue" style="background:#fef3c7;color:#92400e;border:1px solid #fde68a;border-radius:10px;padding:1px 8px;">
            \uAC80\uC0C9: {{ applied.searchValue }}
          </span>
          <span v-if="applied.widgetTypeCd" style="background:#dbeafe;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:10px;padding:1px 8px;">
            \uC720\uD615: {{ wTypeLabel(applied.widgetTypeCd) }}
          </span>
          <span v-if="applied.useYn" style="background:#dcfce7;color:#166534;border:1px solid #bbf7d0;border-radius:10px;padding:1px 8px;">
            \uC0C1\uD0DC: {{ applied.useYn === 'Y' ? '\uD65C\uC131' : '\uBE44\uD65C\uC131' }}
          </span>
        </div>
        <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
        <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
          @click="handleBtnAction('widgetLibs-add', $event)"
          @auxclick="handleBtnAction('widgetLibs-add', $event)">
          + \uC2E0\uADDC
        </button>
      </template>
      <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================ -->
      <bo-grid bare :columns="columns.listGrid" :rows="widgetLibs" row-key="widgetLibId" :selected-key="detailPanel.selectedId" :pager="listGridPager"
      :sort-state="uiState"
      empty-text="\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
      @sort="key => handleBtnAction('widgetLibs-sort', key)"
      grid-id="widgetLibs-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" row-actions
            table-max-height="540px">
        <template #row-actions="{ row, gridId }">
          <div class="actions">
            <button class="btn btn_preview btn-icon" title="\uBBF8\uB9AC\uBCF4\uAE30" @click.stop="handleGridCellAction(gridId, 'btn_row_preview', row)">\u{1F441}</button>
            <button class="btn btn_row_edit"
              @click.stop="handleSelectAction('widgetLibs-rowEdit', row.widgetLibId, $event)"
              @auxclick.stop="handleSelectAction('widgetLibs-rowEdit', row.widgetLibId, $event)">
              \uC218\uC815
            </button>
            <button class="btn btn_row_delete" @click.stop="handleSelectAction('widgetLibs-rowDelete', row)">
              \uC0AD\uC81C
            </button>
          </div>
        </template>
      </bo-grid>
      <bo-pager :pager="listGridPager" :on-set-page="n => handleBtnAction('widgetLibs-pager-setPage', n)" :on-size-change="() => handleSelectAction('widgetLibs-pager-sizeChange')" />
      <bo-excel-down-modal :show="excelModal.show" domain="dpWidgetLib" area-nm="\uC704\uC82F \uB77C\uC774\uBE0C\uB7EC\uB9AC"
        :columns="columns.listGrid" ui-nm="\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC\uAD00\uB9AC" :params="buildExcelParams()"
        @close="excelModal.show = false" />
    </bo-container>
  </div>
  <!-- ===== \u25A0. \uC0C1\uC138 \uD328\uB110 (\uC778\uB77C\uC778 \uC784\uBCA0\uB4DC \u2014 \uD56D\uC0C1 \uD45C\uC2DC, \uC804\uCCB4 \uD3ED) ============== -->
  <dp-disp-widget-lib-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
  />
</bo-page>
`};
