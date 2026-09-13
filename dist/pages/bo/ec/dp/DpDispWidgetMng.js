window.DpDispWidgetMng={name:"DpDispWidgetMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(h){const{ref:A,reactive:p,computed:f,onMounted:P,watch:pe}=Vue,v=window.boApp.showToast,E=window.boApp.showConfirm,ge=window.boApp.showRefModal,b=p({disp_widget_types:[],active_statuses:[]}),_=p([]),N=p({}),i=p({loading:!1,selectedType:null,sortKey:"",sortDir:"asc"}),m=p([]),z={image_banner:"Image > Banner",popup:"Image > Popup",product_slider:"Product > Slider",product:"Product > Grid",cond_product:"Product > CondGrid",chart_bar:"Etc > Chart",chart_line:"Etc > Chart",chart_pie:"Etc > Chart",text_banner:"Text > RichText",html_editor:"Text > RichText",textarea:"Text > Title",markdown:"Text > Markdown",info_card:"Etc > InfoCard",file:"Etc > File",file_list:"Etc > FileList",barcode:"Etc > Code",qrcode:"Etc > Code",barcode_qrcode:"Etc > Code",video_player:"Etc > Video",payment_widget:"Etc > Widget",approval_widget:"Etc > Widget",widget_embed:"Etc > Widget",map_widget:"Etc > Map",coupon:"Promo > Coupon",cache_banner:"Promo > Cache",countdown:"Promo > Countdown",event_banner:"Promo > EventBanner"},y=p({}),C=A(0),L=f(()=>{const e={};for(const[t,o]of Object.entries(y)){if(!o)continue;const d=(z[t]||"Etc > "+t).split(">").map(ce=>ce.trim()),r=d[0]||"Etc",c=d[1]||"\uAE30\uD0C0";e[r]||(e[r]={}),e[r][c]||(e[r][c]={types:[],count:0}),e[r][c].types.includes(t)||e[r][c].types.push(t),e[r][c].count+=o}return Object.keys(e).sort().map(t=>({label:t,count:Object.values(e[t]).reduce((o,a)=>o+a.count,0),children:Object.keys(e[t]).sort().map(o=>({label:o,types:e[t][o].types,count:e[t][o].count}))}))}),x=p(new Set(["Image","Product","Text","Promo","Etc"])),G=(e,t={})=>{if(e==="searchParam-list")return l.pageNo=1,w("DEFAULT");if(e==="searchParam-reset")return Object.assign(s,k),i.sortKey="",i.sortDir="asc",i.selectedType=null,l.pageNo=1,u(),w("DEFAULT");if(e==="widgets-add")return t&&(t.ctrlKey||t.metaKey||t.button===1)?h.openNewWindow("dpDispWidgetDtl",null,"new"):$();if(e==="detailPanel-close")return H();if(e==="pathTree-all")return i.selectedType=null,s.widgetTypeCd="",l.pageNo=1,w("DEFAULT");if(e==="widgets-sort")return B(t);if(e==="widgets-pager-setPage")return ie(t);e==="treeNode-toggle"?x.has(t)?x.delete(t):x.add(t):console.warn("[handleBtnAction] unknown cmd:",e)},M=(e,t={})=>{if(e==="widgets-pager-sizeChange")return se();if(e==="pathTree-select")return le(t);console.warn("[handleSelectAction] unknown cmd:",e)},V=(e,t,o,a={})=>{if(e==="widgets-cellClick"){if(t==="btn_row_edit")return a&&(a.ctrlKey||a.metaKey||a.button===1)?h.openNewWindow("dpDispWidgetDtl",o.widgetId,"edit"):R(o.widgetId);if(t==="btn_row_delete")return re(o);if(t==="btn_row_preview")return I("widget",o.widgetId);const d=["__no__","widgetInfo"];if(a.col&&a.col.link||d.includes(t))return a.ctrlKey||a.metaKey||a.button===1?h.openNewWindow("dpDispWidgetDtl",o.widgetId):q(o.widgetId)}else console.warn("[handleGridCellAction] unknown cmd:",e)},s=p({searchType:"",searchValue:"",widgetTypeCd:"",useYn:""}),k={},g=p({widgetTypeCd:"",useYn:""}),W=f(()=>s.searchValue!==g.searchValue||s.widgetTypeCd!==g.widgetTypeCd||s.useYn!==g.useYn),D={reg:{asc:"regDate asc",desc:"regDate desc"}},l=p({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),n=p({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),Y=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["WIDGET_TYPE_CD"],{compNm:"DpDispWidgetMng"}),b.disp_widget_types=e.sgGetGrpCodes("WIDGET_TYPE_CD"),b.active_statuses=[{codeValue:"Y",codeLabel:"\uD65C\uC131"},{codeValue:"N",codeLabel:"\uBE44\uD65C\uC131"}],_.splice(0,_.length,...await window.boUtil.bofLoadSiteOptions())},S=()=>{const{sortKey:e,sortDir:t}=i;return!e||!D[e]?{}:{sort:D[e][t]}},B=e=>{i.sortKey===e?i.sortDir==="asc"?i.sortDir="desc":(i.sortKey="",i.sortDir="asc"):(i.sortKey=e,i.sortDir="asc"),l.pageNo=1,w("DEFAULT")},O=async()=>{var e,t,o,a;try{const d=await boApiSvc.dpWidget.getPage({pageNo:1,pageSize:1e4},"\uC804\uC2DC\uC704\uC82F\uAD00\uB9AC","\uC804\uCCB4\uCE74\uC6B4\uD2B8"),r=((t=(e=d.data)==null?void 0:e.data)==null?void 0:t.pageList)||((a=(o=d.data)==null?void 0:o.data)==null?void 0:a.list)||[];Object.keys(y).forEach(c=>{delete y[c]});for(const c of r)c.widgetTypeCd&&(y[c.widgetTypeCd]=(y[c.widgetTypeCd]||0)+1);C.value=r.length}catch(d){console.error("[fnLoadAllTypeCounts]",d)}},w=async()=>{var e;i.loading=!0;try{const t={pageNo:l.pageNo,pageSize:l.pageSize,...S(),...coUtil.cofOmitEmpty({...s,searchValue:(s.searchValue||"").trim()})};t.searchValue&&!t.searchType&&(t.searchType="widgetNm,widgetDesc,tag");const a=(e=(await boApiSvc.dpWidget.getPage(t,"\uC804\uC2DC\uC704\uC82F\uAD00\uB9AC","\uC870\uD68C")).data)==null?void 0:e.data;let d=(a==null?void 0:a.pageList)||(a==null?void 0:a.list)||[];const r=i.selectedType;Array.isArray(r)&&r.length>1&&!s.widgetTypeCd&&(d=d.filter(c=>r.includes(c.widgetTypeCd))),m.splice(0,m.length,...d),l.pageTotalCount=(a==null?void 0:a.pageTotalCount)||0,l.pageTotalPage=(a==null?void 0:a.pageTotalPage)||1,coUtil.cofBuildPagerNums(l),g.searchValue=s.searchValue,g.widgetTypeCd=s.widgetTypeCd,g.useYn=s.useYn,i.error=null}catch(t){console.error("[catch-info]",t),i.error=t.message}finally{i.loading=!1}};P(async()=>{await Y(),O();const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(s).forEach(o=>{!t.includes(o)&&e.has(o)&&(s[o]=e.get(o))}),await w("DEFAULT"),Object.assign(k,s)});const j=f(()=>boUtil.bofGetSiteNm()),F={image_banner:"\u{1F5BC}",product_slider:"\u{1F6D2}",product:"\u{1F4E6}",cond_product:"\u{1F50D}",chart_bar:"\u{1F4CA}",chart_line:"\u{1F4C8}",chart_pie:"\u{1F967}",text_banner:"\u{1F4DD}",info_card:"\u2139\uFE0F",popup:"\u{1F4AC}",file:"\u{1F4CE}",file_list:"\u{1F4C1}",coupon:"\u{1F39F}",html_editor:"\u{1F4C4}",event_banner:"\u{1F389}",cache_banner:"\u{1F4B0}",widget_embed:"\u{1F9E9}",textarea:"\u{1F4CB}",markdown:"\u{1F4D1}",barcode:"\u{1F516}",qrcode:"\u{1F4F1}",barcode_qrcode:"\u{1F516}",video_player:"\u25B6\uFE0F",countdown:"\u23F1",payment_widget:"\u{1F4B3}",approval_widget:"\u2705",map_widget:"\u{1F5FA}"},U=e=>{var t;return((t=b.disp_widget_types.find(o=>o.codeValue===e))==null?void 0:t.codeLabel)||e},K=e=>F[e]||"\u25AA",u=()=>{n.selectedId="__new__",n.openMode="view",n.active=!1,n.resetSeq++},q=e=>{n.selectedId=e,n.openMode="view",n.active=!0,n.reloadTrigger++},R=e=>{n.selectedId=e,n.openMode="edit",n.active=!0,n.reloadTrigger++},$=()=>{n.selectedId="__new__",n.openMode="edit",n.active=!0,n.resetSeq++},H=()=>{u()},J=(e,t={})=>{if(e==="dpDispWidgetMng"){t.reload&&w("RELOAD"),u();return}if(e==="__cancelEdit__"){if(n.selectedId&&n.selectedId!=="__new__"){n.openMode="view";return}u();return}if(e==="__closeDtl__"){u();return}if(e==="__switchToEdit__"){n.openMode="edit";return}h.navigate(e,t)},Q=f(()=>n.selectedId==="__new__"?null:n.selectedId),X=f(()=>`open_${n.resetSeq}`),Z=e=>e==="Y"?"badge-green":"badge-gray",ee=e=>e==="Y"?"\uD65C\uC131":"\uBE44\uD65C\uC131",te=e=>e?e.split("^").filter(t=>t.trim()).join(", ")||e:"-",oe=e=>{const t=i.selectedType;return"display:flex;align-items:center;gap:6px;padding:3px 10px 3px 28px;cursor:pointer;border-radius:6px;font-size:12px;"+(Array.isArray(t)&&t.join(",")===(Array.isArray(e)?e.join(","):"")?"background:#fff0f4;font-weight:700;color:#c0254b;":"color:#666;")},ae=f(()=>!g.searchValue&&!g.widgetTypeCd&&!g.useYn),ne=e=>(n.selectedId===e.widgetId?"background:#fff8f8;":"")+"height:74px;",ie=e=>{e>=1&&e<=l.pageTotalPage&&(l.pageNo=e,w())},se=()=>{l.pageNo=1,w()},I=(e,t)=>{window.open(window.pageUrl("bo-disp-ui-pop.html")+"?mode="+e+"&id="+t,"_blank","width=1440,height=900,scrollbars=yes,resizable=yes")},le=e=>{i.selectedType=e,Array.isArray(e)&&e.length===1?s.widgetTypeCd=e[0]:s.widgetTypeCd="",l.pageNo=1,u(),w()},re=async e=>{if(await E("\uC0AD\uC81C",`[${e.widgetNm||e.widgetId}] \uC704\uC82F\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{await boApiSvc.dpWidget.remove(e.widgetId,"\uC804\uC2DC\uC704\uC82F\uAD00\uB9AC","\uC0AD\uC81C"),v("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),n.selectedId===e.widgetId&&u(),w()}catch(o){v(coUtil.cofErrMsg(o),"error",0)}},T={};T.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"widgetNm",label:"\uC774\uB984"},{value:"widgetDesc",label:"\uC124\uBA85"},{value:"tag",label:"\uD0DC\uADF8"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"130px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825",width:"200px"},{key:"widgetTypeCd",type:"select",label:"\uC704\uC82F \uC720\uD615",options:()=>b.disp_widget_types,nullLabel:"\uC804\uCCB4"},{key:"useYn",type:"select",label:"\uC0C1\uD0DC",options:()=>b.active_statuses,nullLabel:"\uC804\uCCB4"},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>_,nullLabel:"\uC804\uCCB4"}],T.listGrid=[{key:"widgetId",label:"ID",style:"width:56px;",link:!0,cellStyle:"color:#aaa;font-size:11px;vertical-align:top;padding-top:12px;font-family:monospace;",fmt:e=>e?"#"+String(e).slice(-6):"-"},{key:"widgetInfo",label:"\uC704\uC82F \uC815\uBCF4",sortKey:"reg"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8"}];const de=p({show:!1});return{columns:T,widgets:m,uiState:i,widgetCounts:N,codes:b,searchParam:s,applied:g,listGridPager:l,detailPanel:n,excelModal:de,buildExcelParams:()=>{const e={...S(),...coUtil.cofOmitEmpty({...s,searchValue:(s.searchValue||"").trim()})};return e.searchValue&&!e.searchType&&(e.searchType="widgetNm,widgetDesc,tag"),e},cfWidgetTree:L,openTopNodes:x,allTotalCount:C,handleBtnAction:G,handleSelectAction:M,handleGridCellAction:V,handleOpenPreview:I,cfFilterDirty:W,cfSiteNm:j,cfDetailEditId:Q,cfDetailKey:X,cfNoFilter:ae,selectedId:f(()=>n.selectedId),wTypeLabel:U,wIcon:K,fnStatusCls:Z,fnStatusLabel:ee,fnDispEnv:te,fnSubNodeStyle:oe,fnRowStyle:ne,inlineNavigate:J}},template:`
<bo-page :share-query="searchParam">
  <!-- ===== \u25A0. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
  <template #title>
    <span style="font-size:14px;font-weight:600;color:#333;">
      \uC804\uC2DC\uC704\uC82F\uAD00\uB9AC
    </span>
    <span style="font-size:13px;font-weight:400;color:#999;margin:0 8px;">
      &gt;
    </span>
    <span style="font-size:14px;font-weight:600;color:#666;">
      \uC804\uC2DC\uC704\uC82F\uAD00\uB9AC
    </span>
    <span style="font-size:13px;font-weight:400;color:#888;display:block;margin-top:4px;">
      \uC704\uC82F \uC720\uD615\uBCC4 \uB9AC\uC18C\uC2A4 \uB4F1\uB85D\xB7\uC7AC\uD65C\uC6A9
    </span>
  </template>
  <!-- ===== \u25A1. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
  <!-- ===== \u25A0. \uAC80\uC0C9 \uD544\uD130 (\uC804\uC2DC\uD328\uB110\uAD00\uB9AC \uAC80\uC0C9\uBC14\uC640 \uB3D9\uC77C \u2014 bo-search-area :columns) ====== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" :show-actions="false"
      :columns="columns.baseSearch" :param="searchParam"
      @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')">
      <div class="search-actions">
        <span v-if="cfFilterDirty" style="font-size:11px;color:#e8587a;font-weight:600;align-self:center;">
          \uBCC0\uACBD\uB428 \u2192
        </span>
        <button @click="handleBtnAction('searchParam-list')" class="btn btn_search"
          :style="cfFilterDirty ? 'box-shadow:0 0 0 3px rgba(232,88,122,0.35);' : ''">
          \uC870\uD68C
        </button>
        <button @click="handleBtnAction('searchParam-reset')" class="btn btn_reset">
          \uCD08\uAE30\uD654
        </button>
      </div>
    </bo-search-area>
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 \uD544\uD130 =================================================== -->
  <!-- ===== \u25A0. \uBCF8\uBB38: \uC88C\uCE21 \uD2B8\uB9AC + \uC6B0\uCE21 \uBAA9\uB85D ======================================= -->
  <div class="bo-2col">
    <!-- ===== \u25A0.\u25A0. \uC88C\uCE21 \uC704\uC82F\uC720\uD615 \uD2B8\uB9AC =========================================== -->
    <bo-container title="\u{1F4C2} \uC704\uC82F\uC720\uD615">
      <template #toolbar-actions>
        <span style="font-size:10px;color:#aaa;font-family:monospace;font-weight:400;">
          #ec_disp_widget
        </span>
        <span v-if="uiState.selectedType != null" @click="handleBtnAction('pathTree-all')" style="font-size:11px;color:#1677ff;cursor:pointer;">
          \uC804\uCCB4\uBCF4\uAE30
        </span>
      </template>
      <div style="max-height:65vh;overflow:auto;padding:6px 0;">
        <!-- \uC804\uCCB4 \uD56D\uBAA9 -->
        <div @click="handleBtnAction('pathTree-all')"
          :style="'display:flex;align-items:center;gap:6px;padding:4px 10px;cursor:pointer;border-radius:6px;'+(uiState.selectedType==null?'background:#fff0f4;font-weight:700;color:#c0254b;':'')"
        >
          <span style="font-size:13px;">\u{1F4E6}</span>
          <span style="font-size:13px;">\uC804\uCCB4</span>
          <span style="margin-left:auto;font-size:11px;color:#aaa;">{{ allTotalCount }}</span>
        </div>
        <!-- \uCE74\uD14C\uACE0\uB9AC \uD2B8\uB9AC -->
        <div v-for="top in cfWidgetTree" :key="top.label" style="margin-top:2px;">
          <div @click="handleBtnAction('treeNode-toggle', top.label)"
            style="display:flex;align-items:center;gap:4px;padding:4px 10px;cursor:pointer;font-weight:600;font-size:13px;color:#555;user-select:none;">
            <span>{{ openTopNodes.has(top.label) ? '\u25BC' : '\u25B6' }}</span>
            <span>{{ top.label }}</span>
            <span style="margin-left:auto;font-size:11px;color:#aaa;">{{ top.count }}</span>
          </div>
          <div v-if="openTopNodes.has(top.label)">
            <div v-for="sub in top.children" :key="sub.label"
              @click="handleSelectAction('pathTree-select', sub.types)"
              :style="fnSubNodeStyle(sub.types)"
            >
              <span>{{ sub.label }}</span>
              <span style="margin-left:auto;font-size:11px;color:#aaa;">{{ sub.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </bo-container>
    <!-- ===== \u25A1.\u25A1. \uC88C\uCE21 \uC704\uC82F\uC720\uD615 \uD2B8\uB9AC =========================================== -->
    <!-- ===== \u25A0.\u25A0. \uC6B0\uCE21 \uBAA9\uB85D ================================================= -->
    <bo-container title="\uC804\uC2DC\uC704\uC82F" :count-text="listGridPager.pageTotalCount + '\uAC74'">
      <template #toolbar-actions>
        <span v-if="uiState.selectedType != null" style="color:#e8587a;font-family:monospace;font-size:12px;align-self:center;">
          {{ Array.isArray(uiState.selectedType) ? uiState.selectedType.join(', ') : uiState.selectedType }}
        </span>
        <span v-if="cfNoFilter" style="color:#bbb;font-size:11px;">\uD544\uD130 \uC5C6\uC74C</span>
        <span v-if="applied.searchValue" style="font-size:11px;background:#fef3c7;color:#92400e;border:1px solid #fde68a;border-radius:10px;padding:1px 8px;">
          \uAC80\uC0C9: {{ applied.searchValue }}
        </span>
        <span v-if="applied.widgetTypeCd" style="font-size:11px;background:#dbeafe;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:10px;padding:1px 8px;">
          \uC720\uD615: {{ wTypeLabel(applied.widgetTypeCd) }}
        </span>
        <span v-if="applied.useYn" style="font-size:11px;background:#dcfce7;color:#166534;border:1px solid #bbf7d0;border-radius:10px;padding:1px 8px;">
          \uC0C1\uD0DC: {{ applied.useYn === 'Y' ? '\uD65C\uC131' : '\uBE44\uD65C\uC131' }}
        </span>
        <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
        <button @click="handleBtnAction('widgets-add', $event)" @auxclick="handleBtnAction('widgets-add', $event)"
          class="btn btn_new" style="margin-left:auto;" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D">
          + \uC2E0\uADDC\uB4F1\uB85D
        </button>
      </template>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D ================================================== -->
      <bo-grid bare :columns="columns.listGrid" :rows="widgets" row-key="widgetId" :selected-key="detailPanel.selectedId" :pager="listGridPager"
        :sort-state="uiState" :row-style="fnRowStyle"
        empty-text="\uB4F1\uB85D\uB41C \uC704\uC82F\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
        @sort="key => handleBtnAction('widgets-sort', key)"
        grid-id="widgets-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" row-actions
            table-max-height="540px">
        <template #cell-widgetInfo="{ row }">
          <td style="padding:10px 12px;vertical-align:top;">
            <div style="margin-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
              <span style="font-size:15px;margin-right:4px;">
                {{ wIcon(row.widgetTypeCd) }}
              </span>
              <span style="background:#f5f5f5;border:1px solid #e8e8e8;border-radius:6px;padding:1px 7px;font-size:11px;color:#555;">
                {{ wTypeLabel(row.widgetTypeCd) }}
              </span>
              <span class="title-link" @click="handleGridCellAction('widgets-cellClick', 'widgetInfo', row, $event)"
                @auxclick="handleGridCellAction('widgets-cellClick', 'widgetInfo', row, $event)"
                :style="'font-size:14px;font-weight:700;margin-left:8px;'+(selectedId===row.widgetId?'color:#e8587a;':'color:#222;')">
                {{ row.widgetNm }}
              </span>
              <span class="badge" :class="fnStatusCls(row.useYn)" style="font-size:11px;margin-left:8px;">
                {{ fnStatusLabel(row.useYn) }}
              </span>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================ -->
            <div style="display:flex;flex-wrap:nowrap;gap:14px;font-size:11px;color:#555;line-height:1.6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
              <span style="flex-shrink:0;overflow:hidden;text-overflow:ellipsis;max-width:240px;">
                <b style="color:#888;">
                  \uD0C0\uC774\uD2C0:
                </b>
                {{ row.widgetTitle || '-' }}
              </span>
              <span style="flex-shrink:0;overflow:hidden;text-overflow:ellipsis;max-width:280px;">
                <b style="color:#888;">
                  \uC124\uBA85:
                </b>
                {{ row.widgetDesc || '-' }}
              </span>
              <span style="flex-shrink:0;">
                <b style="color:#888;">
                  \uB77C\uC774\uBE0C\uB7EC\uB9AC:
                </b>
                <span v-if="row.widgetLibRefYn === 'Y'" style="display:inline-block;background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:8px;padding:1px 7px;margin-left:3px;font-family:monospace;">
                  {{ row.widgetLibNm || ('#'+String(row.widgetLibId||'').slice(-6)) }}
                </span>
                <span v-else style="color:#999;font-size:11px;">
                  \uC9C1\uC811 \uC791\uC131
                </span>
              </span>
              <span style="flex-shrink:0;">
                <b style="color:#888;">
                  \uC815\uB82C:
                </b>
                <span style="background:#dbeafe;color:#1d4ed8;border-radius:10px;padding:1px 8px;font-weight:700;margin-left:3px;">
                  {{ row.sortOrd || 0 }}
                </span>
              </span>
              <span style="flex-shrink:0;">
                <b style="color:#888;">
                  \uD658\uACBD:
                </b>
                <span style="font-family:monospace;font-size:10px;color:#666;">
                  {{ fnDispEnv(row.dispEnv) }}
                </span>
              </span>
              <span style="flex-shrink:0;">
                <b style="color:#888;">
                  \uB4F1\uB85D\uC77C:
                </b>
                {{ row.regDate ? String(row.regDate).slice(0,10) : '-' }}
              </span>
              <span style="flex-shrink:0;">
                <b style="color:#888;">
                  \uC0AC\uC774\uD2B8:
                </b>
                <span style="background:#e8f0fe;color:#1565c0;border:1px solid #bbdefb;border-radius:8px;padding:0 6px;margin-left:3px;">
                  {{ cfSiteNm }}
                </span>
              </span>
            </div>
          </td>
        </template>
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
      <bo-pager :pager="listGridPager" :on-set-page="n => handleBtnAction('widgets-pager-setPage', n)" :on-size-change="() => handleSelectAction('widgets-pager-sizeChange')" />
      <bo-excel-down-modal :show="excelModal.show" domain="dpWidget" area-nm="\uC804\uC2DC\uC704\uC82F"
        :columns="columns.listGrid" ui-nm="\uC804\uC2DC\uC704\uC82F\uAD00\uB9AC" :params="buildExcelParams()"
        @close="excelModal.show = false" />
    </bo-container>
    <!-- ===== /\uC6B0\uCE21 \uBAA9\uB85D ===================================================== -->
  </div>
  <!-- ===== \u25A1. \uBCF8\uBB38: \uC88C\uCE21 \uD2B8\uB9AC + \uC6B0\uCE21 \uBAA9\uB85D ======================================= -->
  <!-- ===== \u25A0. \uC778\uB77C\uC778 \uC0C1\uC138 (\uD56D\uC0C1 \uD45C\uC2DC / \uC9C4\uC785 \uC2DC \uBE48 \uC2E0\uADDC \uD3FC, \uC804\uCCB4 \uD3ED) ============== -->
  <dp-disp-widget-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    @close="handleBtnAction('detailPanel-close')"
    />
</bo-page>
<!-- ===== \u25A1. \uC778\uB77C\uC778 \uC0C1\uC138 ================================================== -->
`};
