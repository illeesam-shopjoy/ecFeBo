const _WP_DispPanelPreview={name:"WidgetPreview",props:{lib:Object,compact:{type:Boolean,default:!1}},setup(L){const{ref:R,reactive:p,computed:x,watchEffect:$,watch:M,onMounted:G}=Vue,C=window.boApp.showToast,F=window.boApp.showConfirm,H=window.boApp.showRefModal,S=Vue.computed(()=>window.sfGetBoCodeStore().svCodes),u=x(()=>coUtil.cofChartBars((L.lib||{}).chartValues,(L.lib||{}).chartLabels)),I=Vue.toRef(uiState,"selectedLibId");return{codes:S,cfChartBars:u,coUtil}},template:`
<div style="padding:10px;">
  <!-- ===== \u25A0. \uC774\uBBF8\uC9C0 \uBC30\uB108 ================================================== -->
  <template v-if="lib.widgetType==='image_banner'">
    <div style="border-radius:6px;overflow:hidden;background:#f0f0f0;">
      <img v-if="lib.imageUrl" :src="coUtil.cofImgSrc(lib.imageUrl)" style="width:100%;display:block;max-height:130px;object-fit:cover;" />
      <div v-else style="height:80px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px;">
        \u{1F5BC} \uC774\uBBF8\uC9C0 \uBC30\uB108
      </div>
    </div>
    <div v-if="lib.linkUrl" style="font-size:10px;color:#aaa;margin-top:4px;">
      \u{1F517} {{ lib.linkUrl }}
    </div>
  </template>
  <!-- ===== \u25A1. \uC774\uBBF8\uC9C0 \uBC30\uB108 ================================================== -->
  <!-- ===== \u25A0. \uC0C1\uD488 \uC2AC\uB77C\uC774\uB354 / \uC0C1\uD488 ============================================ -->
  <template v-else-if="lib.widgetType==='product_slider'||lib.widgetType==='product'">
    <div style="font-size:12px;font-weight:700;color:#222;margin-bottom:7px;">
      {{ lib.name }}
    </div>
    <div style="display:flex;gap:6px;overflow-x:auto;">
      <div v-for="i in 4" :key="i" style="flex-shrink:0;width:64px;text-align:center;">
        <div style="height:56px;background:#f5f5f5;border-radius:5px;margin-bottom:4px;display:flex;align-items:center;justify-content:center;font-size:16px;">
          \u{1F457}
        </div>
        <div style="font-size:10px;color:#888;">
          \uC0C1\uD488{{ i }}
        </div>
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uC0C1\uD488 \uC2AC\uB77C\uC774\uB354 / \uC0C1\uD488 ============================================ -->
  <!-- ===== \u25A0. \uCC28\uD2B8 ====================================================== -->
  <template v-else-if="lib.widgetType ? (lib.widgetType.startsWith('chart_')) : false">
  <div style="font-size:12px;font-weight:700;color:#222;margin-bottom:8px;">
    {{ lib.chartTitle||lib.name }}
  </div>
  <div v-if="cfChartBars.length" style="display:flex;align-items:flex-end;gap:4px;height:60px;">
    <div v-for="(bar,i) in cfChartBars" :key="i" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;">
      <div :style="{height:bar.pct+'%',background:bar.color,borderRadius:'3px 3px 0 0',width:'100%',minHeight:'3px'}">
      </div>
      <div style="font-size:9px;color:#aaa;">
        {{ bar.label }}
      </div>
    </div>
  </div>
  <div v-else style="height:50px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:11px;">
    \uB370\uC774\uD130 \uC5C6\uC74C
  </div>
</template>
<!-- ===== \u25A1. \uCC28\uD2B8 ====================================================== -->
<!-- ===== \u25A0. \uD14D\uC2A4\uD2B8 \uBC30\uB108 ================================================== -->
<template v-else-if="lib.widgetType==='text_banner'">
  <div :style="{background:lib.bgColor||'#fff',color:lib.textColor||'#222',padding:'10px',borderRadius:'5px',border:'1px solid #eee',fontSize:'12px'}">
    <span v-if="lib.textContent" v-html="lib.textContent">
    </span>
    <span v-else style="color:#ccc;">
      \uD14D\uC2A4\uD2B8 \uBC30\uB108
    </span>
  </div>
</template>
<!-- ===== \u25A1. \uD14D\uC2A4\uD2B8 \uBC30\uB108 ================================================== -->
<!-- ===== \u25A0. \uC815\uBCF4 \uCE74\uB4DC =================================================== -->
<template v-else-if="lib.widgetType==='info_card'">
  <div style="background:#f8f9fa;border-radius:5px;padding:10px;border:1px solid #eee;">
    <div style="font-size:12px;font-weight:700;margin-bottom:4px;">
      {{ lib.infoTitle||'\uCE74\uB4DC \uC81C\uBAA9' }}
    </div>
    <div style="font-size:11px;color:#666;white-space:pre-line;">
      {{ (lib.infoBody||'\uCE74\uB4DC \uB0B4\uC6A9').slice(0,100) }}
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uC815\uBCF4 \uCE74\uB4DC =================================================== -->
<!-- ===== \u25A0. \uCFE0\uD3F0 ====================================================== -->
<template v-else-if="lib.widgetType==='coupon'">
  <div style="background:linear-gradient(135deg,#e8587a,#f97316);border-radius:6px;padding:12px;color:#fff;display:flex;align-items:center;justify-content:space-between;gap:8px;">
    <div>
      <div style="font-size:10px;opacity:.8;">
        \uCFE0\uD3F0
      </div>
      <div style="font-size:14px;font-weight:700;">
        {{ lib.couponCode||'CODE' }}
      </div>
      <div v-if="lib.couponDesc" style="font-size:10px;opacity:.8;">
        {{ lib.couponDesc }}
      </div>
    </div>
    <span style="font-size:22px;">
      \u{1F39F}
    </span>
    <div style="border:2px dashed rgba(255,255,255,.5);border-radius:6px;padding:5px 12px;font-size:11px;font-weight:700;white-space:nowrap;">
      \uCFE0\uD3F0 \uBC1C\uAE30
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uCFE0\uD3F0 ====================================================== -->
<!-- ===== \u25A0. \uCE90\uC2DC \uBC30\uB108 =================================================== -->
<template v-else-if="lib.widgetType==='cache_banner'">
  <div style="background:linear-gradient(135deg,#f59e0b,#d97706);border-radius:6px;padding:12px;color:#fff;display:flex;align-items:center;gap:10px;">
    <span style="font-size:22px;">
      \u{1F4B0}
    </span>
    <div>
      <div style="font-size:10px;opacity:.8;">
        \uC801\uB9BD \uCE90\uC2DC
      </div>
      <div style="font-size:16px;font-weight:800;">
        {{ lib.cacheAmount ? lib.cacheAmount.toLocaleString()+'\uC6D0' : '-' }}
      </div>
      <div v-if="lib.cacheDesc" style="font-size:10px;opacity:.8;">
        {{ lib.cacheDesc }}
      </div>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uCE90\uC2DC \uBC30\uB108 =================================================== -->
<!-- ===== \u25A0. HTML \uC5D0\uB514\uD130 ================================================ -->
<template v-else-if="lib.widgetType==='html_editor'">
  <div v-if="lib.htmlContent" v-html="lib.htmlContent" style="font-size:12px;overflow:hidden;max-height:120px;">
  </div>
  <div v-else style="color:#ccc;font-size:11px;padding:8px 0;">
    HTML \uBBF8\uB9AC\uBCF4\uAE30
  </div>
</template>
<!-- ===== \u25A1. HTML \uC5D0\uB514\uD130 ================================================ -->
<!-- ===== \u25A0. \uC704\uC82F \uC784\uBCA0\uB4DC ================================================== -->
<template v-else-if="lib.widgetType==='widget_embed'">
  <div v-if="lib.embedCode" v-html="lib.embedCode" style="overflow:hidden;max-height:140px;">
  </div>
  <div v-else style="color:#ccc;font-size:11px;padding:8px 0;">
    \uC784\uBCA0\uB4DC \uBBF8\uB9AC\uBCF4\uAE30
  </div>
</template>
<!-- ===== \u25A1. \uC704\uC82F \uC784\uBCA0\uB4DC ================================================== -->
<!-- ===== \u25A0. \uD31D\uC5C5 ====================================================== -->
<template v-else-if="lib.widgetType==='popup'">
  <div style="border:2px solid #e0e0e0;border-radius:6px;overflow:hidden;">
    <div style="background:#444;color:#fff;padding:5px 10px;font-size:11px;display:flex;justify-content:space-between;">
      <span>
        \uD31D\uC5C5
      </span>
      <span>
        \u2715
      </span>
    </div>
    <div style="height:60px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:11px;">
      {{ lib.popupWidth||600 }}\xD7{{ lib.popupHeight||400 }}
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uD31D\uC5C5 ====================================================== -->
<!-- ===== \u25A0. \uD30C\uC77C ====================================================== -->
<template v-else-if="lib.widgetType==='file'">
  <div style="display:flex;align-items:center;gap:8px;padding:10px;border:1px solid #e5e7eb;border-radius:6px;background:#f9fafb;">
    <span style="font-size:20px;">
      \u{1F4CE}
    </span>
    <div>
      <div style="font-size:12px;font-weight:600;color:#222;">
        {{ lib.fileLabel||'\uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC' }}
      </div>
      <div v-if="lib.fileUrl" style="font-size:10px;color:#aaa;">
        {{ lib.fileUrl.split('/').pop() }}
      </div>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uD30C\uC77C ====================================================== -->
<!-- ===== \u25A0. \uAE30\uD0C0 ====================================================== -->
<template v-else>
  <div style="background:#f5f5f5;border-radius:6px;padding:16px;text-align:center;color:#bbb;">
    <div style="font-size:24px;margin-bottom:4px;">
      \u25AA
    </div>
    <div style="font-size:11px;">
      {{ lib.name }}
    </div>
  </div>
</template>
</div>
<!-- ===== \u25A1. \uAE30\uD0C0 ====================================================== -->
`};window.DpDispPanelPreview={name:"DpDispPanelPreview",props:{navigate:{type:Function,required:!0}},setup(L){const{ref:R,reactive:p,computed:x,watch:$,watchEffect:M,onMounted:G}=Vue,C=window.boApp.showToast,F=window.boApp.showConfirm,H=window.boApp.showRefModal,S=p({disp_widget_types:[],active_statuses:[{codeValue:"\uD65C\uC131",codeLabel:"\uB178\uCD9C"},{codeValue:"\uBE44\uD65C\uC131",codeLabel:"\uC228\uAE40"}],visibility_opts:[{value:"",label:"\uC804\uCCB4"},{value:"PUBLIC",label:"\uC804\uCCB4\uACF5\uAC1C"},{value:"MEMBER",label:"\uD68C\uC6D0\uACF5\uAC1C"},{value:"VERIFIED",label:"\uC778\uC99D\uD68C\uC6D0"},{value:"PREMIUM",label:"\uC6B0\uC218\uD68C\uC6D0\u2191"},{value:"VIP",label:"VIP\uC804\uC6A9"},{value:"INVITED",label:"\uCD08\uB300\uD68C\uC6D0"},{value:"STAFF",label:"\uC9C1\uC6D0"},{value:"EXECUTIVE",label:"\uC784\uC9C1\uC6D0"}]}),u=p([]),I=p({selectedLibId:null}),Re=Vue.toRef(I,"tab"),X=x(()=>boUtil.bofGetSiteNm()),q=(e,t={})=>{if(e==="searchParam-apply")return ae();if(e==="searchParam-reset")return oe();if(e==="pathTree-expand-all")return pe();if(e==="pathTree-collapse-all")return ce();if(e==="preview-reset")return Y();if(e==="preview-toggle-real"){o.showRealContent=!o.showRealContent;return}else{if(e==="preview-close-span")return De();console.warn("[handleBtnAction] unknown cmd:",e)}},J=(e,t={})=>{if(e==="pathTree-toggle")return le(t);if(e==="pathTree-select")return ne(t);if(e==="preview-grid"){o.previewGrid=t;return}else if(e==="preview-viewport"){o.viewportMode=t;return}else{if(e==="preview-span-popup")return _e(t.e,t.idx);if(e==="preview-span-set")return ze(t.idx,t.axis,t.delta);if(e==="preview-slot-remove")return Se(t);if(e==="preview-dash-remove")return Le(t);console.warn("[handleSelectAction] unknown cmd:",e)}},K=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["WIDGET_TYPE_CD"],{compNm:"DpDispPanelPreview"}),S.disp_widget_types=e.sgGetGrpCodes("WIDGET_TYPE_CD")},Q=async()=>{var e,t,i,a,n,r;try{const[d,v,c]=await Promise.all([boApiSvc.dpUi.getPage({pageNo:1,pageSize:1e4},"\uC804\uC2DC\uD328\uB110\uBBF8\uB9AC\uBCF4\uAE30","UI\uC870\uD68C"),boApiSvc.dpArea.getPage({pageNo:1,pageSize:1e4},"\uC804\uC2DC\uD328\uB110\uBBF8\uB9AC\uBCF4\uAE30","\uC601\uC5ED\uC870\uD68C"),boApiSvc.dpPanel.getPage({pageNo:1,pageSize:1e4},"\uC804\uC2DC\uD328\uB110\uBBF8\uB9AC\uBCF4\uAE30","\uC870\uD68C")]),g=((t=(e=d.data)==null?void 0:e.data)==null?void 0:t.pageList)||[],w=((a=(i=v.data)==null?void 0:i.data)==null?void 0:a.pageList)||[],P=((r=(n=c.data)==null?void 0:n.data)==null?void 0:r.pageList)||[],O=Object.fromEntries(g.map(s=>[s.uiId,(s.uiCd?"["+s.uiCd+"] ":"")+(s.uiNm||"")])),D=Object.fromEntries(w.map(s=>[s.areaId,s]));u.splice(0,u.length,...P.map((s,E)=>{const Ee=coUtil.cofParsePanelRows(s.contentJson),y=D[s.areaId];return{dispId:s.panelId,name:s.panelNm,rows:Ee,area:y?y.areaCd:"(\uBBF8\uB4F1\uB85D)",areaLabel:y?`[${y.areaCd}] ${y.areaNm||""}`:"(\uBBF8\uB4F1\uB85D)",uiLabel:y&&O[y.uiId]||"(\uBBF8\uC9C0\uC815 UI)",status:coUtil.cofPanelStatusLabel(s.dispPanelStatusCd),sortOrder:E+1,dispYn:"Y",useYn:s.useYn,useStartDate:coUtil.cofYmd(s.useStartDate),useEndDate:coUtil.cofYmd(s.useEndDate),dispStartDt:"",dispEndDt:"",dispEnv:"",visibilityTargets:s.visibilityTargets||"",layoutType:"grid",gridCols:1,titleYn:"N",title:""}}))}catch(d){console.error("[handleSearchData]",d)}};G(async()=>{await K(),await Q(),Object.assign(B,f)});const j=coUtil.cofToYmd(new Date),Z=new Date().toTimeString().slice(0,5),ee={image_banner:"\u{1F5BC}",product_slider:"\u{1F6D2}",product:"\u{1F4E6}",cond_product:"\u{1F50D}",chart_bar:"\u{1F4CA}",chart_line:"\u{1F4C8}",chart_pie:"\u{1F967}",text_banner:"\u{1F4DD}",info_card:"\u2139\uFE0F",popup:"\u{1F4AC}",file:"\u{1F4CE}",file_list:"\u{1F4C1}",coupon:"\u{1F39F}",html_editor:"\u{1F4C4}",event_banner:"\u{1F389}",cache_banner:"\u{1F4B0}",widget_embed:"\u{1F9E9}",textarea:"\u{1F4CB}",markdown:"\u{1F4D1}",barcode:"\u{1F516}",qrcode:"\u{1F4F1}",barcode_qrcode:"\u{1F516}",video_player:"\u25B6\uFE0F",countdown:"\u23F1",payment_widget:"\u{1F4B3}",approval_widget:"\u2705",map_widget:"\u{1F5FA}"},te=e=>ee[e]||"\u25AA",ie=e=>{var t;return((t=S.disp_widget_types.find(i=>i.codeValue===e))==null?void 0:t.codeLabel)||e},f=p({previewDate:j,previewTime:Z,filterType:"",filterStatus:"\uD65C\uC131",filterVisibility:"",filterDispEnv:"PROD",searchType:"",searchValue:""}),B={},m=p({type:"",status:"\uD65C\uC131",dispEnv:"PROD",visibility:"",searchType:"",searchValue:""}),ae=()=>{Object.assign(m,{type:f.filterType,status:f.filterStatus,dispEnv:f.filterDispEnv,searchType:f.searchType,searchValue:(f.searchValue||"").trim().toLowerCase(),visibility:f.filterVisibility})},oe=()=>{Object.assign(f,B),Object.assign(m,{type:"",status:"\uD65C\uC131",dispEnv:"PROD",visibility:"",searchType:"",searchValue:""}),Y()},V=x(()=>{const e=m.searchValue;return u.filter(t=>!(m.status&&t.status!==m.status||e&&!(t.name||"").toLowerCase().includes(e))).map(t=>({libId:t.dispId,name:t.name,widgetType:"-",panelId:t.dispId,areaCode:t.area,areaLabel:t.areaLabel,uiLabel:t.uiLabel}))}),ne=e=>{I.selectedLibId=e.libId},T=x(()=>{const e={};return V.value.forEach(t=>{const i=t.uiLabel||"(\uBBF8\uC9C0\uC815 UI)",a=t.areaLabel||"(\uBBF8\uB4F1\uB85D)";e[i]||(e[i]={}),e[i][a]||(e[i][a]=[]),e[i][a].push(t)}),Object.keys(e).sort().map(t=>({label:t,children:Object.keys(e[t]).sort().map(i=>({label:i,libs:e[t][i]}))}))}),se=e=>u.find(t=>t.dispId===e)||{},l=p(new Set),le=e=>{l.has(e)?l.delete(e):l.add(e)},de=e=>l.has(e),U=e=>e.children.every(t=>l.has(e.label+"_"+t.label)),re=(e,t)=>{e.stopPropagation();const i=!U(t);window.safeArrayUtils.safeForEach(t.children,a=>{const n=t.label+"_"+a.label;i?l.add(n):l.delete(n)}),i&&l.add(t.label)};M(()=>{l.has("__root__")||l.add("__root__");const e=Array.isArray(T.value)?T.value:[];if(e.length&&l.size===1){const t=e[0];t&&t.label&&l.add(t.label)}});const pe=()=>{window.safeArrayUtils.safeForEach(T.value,e=>l.add(e.label)),l.add("__root__")},ce=()=>{l.clear(),l.add("__root__")},fe=(e,t)=>{window._dragWidgetLib=t,window._dragWidgetLibs=null,e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain",t.libId)},ge=()=>{window._dragWidgetLib=null},xe=e=>{const t=new Set;return window.safeArrayUtils.safeFilter(e,i=>t.has(i.libId)?!1:(t.add(i.libId),!0))},be=(e,t)=>{const i=xe(t);window._dragWidgetLib=null,window._dragWidgetLibs=i,e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain","node:"+i.length)},ve=()=>{window._dragWidgetLibs=null},o=p({previewGrid:"grid1",viewportMode:"desktop",showRealContent:!1,spanPopupIdx:-1,dashDragOver:!1}),ue=[{id:"grid1",label:"grid1",cols:1},{id:"grid2",label:"grid2",cols:2},{id:"grid3",label:"grid3",cols:3},{id:"grid4",label:"grid4",cols:4},{id:"dashboard",label:"dashboard",cols:null}],z={grid1:1,grid2:2,grid3:3,grid4:4},he={desktop:{label:"\u{1F5A5} PC",width:null},tablet:{label:"\u{1F4DF} \uD0DC\uBE14\uB9BF",width:"768px"},mobile:{label:"\u{1F4F1} \uBAA8\uBC14\uC77C",width:"375px"}},we=x(()=>({grid1:"repeat(1,1fr)",grid2:"repeat(auto-fill,minmax(max(calc(50% - 5px),260px),1fr))",grid3:"repeat(auto-fill,minmax(max(calc(33.333% - 6px),190px),1fr))",grid4:"repeat(auto-fill,minmax(max(calc(25% - 6px),220px),1fr))"})[o.previewGrid]||"repeat(1,1fr)"),_=e=>Array(e*2).fill(null),b=p({grid1:_(1),grid2:_(2),grid3:_(3),grid4:_(4)}),W=x(()=>b[o.previewGrid]||[]),N=e=>{const t=z[e];if(!t)return;const i=b[e],a=i.length-t;if(i.slice(a).some(Boolean))for(let n=0;n<t;n++)i.push(null)},k=p({dragOverIdx:-1}),ye=(e,t)=>{e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),k.dragOverIdx!==t&&(k.dragOverIdx=t)},me=(e,t)=>{const i=e&&e.relatedTarget;i&&e.currentTarget&&e.currentTarget.contains(i)||k.dragOverIdx===t&&(k.dragOverIdx=-1)},ke=(e,t)=>{e.preventDefault(),k.dragOverIdx=-1;const i=window._dragWidgetLibs;if(i){if(window._dragWidgetLibs=null,i.length>40){C(`\uB178\uB4DC \uD558\uC704 \uC704\uC82F\uC774 ${i.length}\uAC1C\uB85C 40\uAC1C\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4. \uBC30\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`,"error");return}const r=o.previewGrid,d=b[r],v=z[r]||1;let c=0,g=t;for(;c<i.length;){if(g>=d.length)for(let w=0;w<v;w++)d.push(null);d[g]||(d.splice(g,1,{...i[c],colSpan:1,rowSpan:1}),c++),g++}N(r);return}const a=window._dragWidgetLib;if(!a)return;const n=o.previewGrid;b[n].splice(t,1,{...a,colSpan:1,rowSpan:1}),N(n)},Se=e=>{b[o.previewGrid].splice(e,1,null)},ze=(e,t,i)=>{const a=b[o.previewGrid][e];if(!a)return;const n=z[o.previewGrid]||1;t==="col"&&(a.colSpan=Math.max(1,Math.min(n,(a.colSpan||1)+i))),t==="row"&&(a.rowSpan=Math.max(1,Math.min(4,(a.rowSpan||1)+i)))},_e=(e,t)=>{e.stopPropagation(),o.spanPopupIdx=o.spanPopupIdx===t?-1:t},De=()=>{o.spanPopupIdx=-1},A=R(null),h=p([]),Ie=e=>{e.preventDefault(),o.dashDragOver=!0},Te=()=>{o.dashDragOver=!1},Pe=e=>{if(e.preventDefault(),o.dashDragOver=!1,!A.value)return;const t=A.value.getBoundingClientRect(),i=window._dragWidgetLibs;if(i){if(window._dragWidgetLibs=null,i.length>40){C(`\uB178\uB4DC \uD558\uC704 \uC704\uC82F\uC774 ${i.length}\uAC1C\uB85C 40\uAC1C\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4. \uBC30\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`,"error");return}const d=Math.max(0,e.clientX-t.left-120),v=Math.max(0,e.clientY-t.top-20),c=3,g=260,w=200,P=10;window.safeArrayUtils.safeForEach(i,(O,D)=>{const s=D%c,E=Math.floor(D/c);h.push({id:Date.now()+D,lib:{...O},x:d+s*(g+P),y:v+E*(w+P),w:g,h:w})});return}const a=window._dragWidgetLib;if(!a)return;const n=Math.max(0,e.clientX-t.left-110),r=Math.max(0,e.clientY-t.top-20);h.push({id:Date.now(),lib:{...a},x:n,y:r,w:240,h:180})},Le=e=>{const t=h.findIndex(i=>i.id===e);t>=0&&h.splice(t,1)},Ce=(e,t)=>{e.preventDefault();const i=e.clientX-t.x,a=e.clientY-t.y,n=d=>{t.x=Math.max(0,d.clientX-i),t.y=Math.max(0,d.clientY-a)},r=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",r)},Ae=(e,t)=>{e.preventDefault(),e.stopPropagation();const i=e.clientX,a=e.clientY,n=t.w,r=t.h,d=c=>{t.w=Math.max(160,n+(c.clientX-i)),t.h=Math.max(120,r+(c.clientY-a))},v=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",v)},Oe=x(()=>o.previewGrid==="dashboard"?h.length:(W.value||[]).filter(Boolean).length),Y=()=>{if(o.previewGrid==="dashboard")h.splice(0);else{const e=z[o.previewGrid],t=b[o.previewGrid];t.splice(0,t.length,..._(e))}};return{codes:S,searchParam:f,applied:m,displays:u,uiState:I,gridState:o,tabSlots:b,dashCanvas:A,dashItems:h,openNodes:l,dragState:k,handleBtnAction:q,handleSelectAction:J,cfSiteNm:X,cfFilteredLibs:V,cfTree:T,cfAutoGridColumns:we,cfCurrentSlots:W,cfPlacedCount:Oe,GRID_TABS:ue,GRID_COLS:z,VIEWPORT:he,today:j,wIcon:te,wTypeLabel:ie,isOpen:de,allChildrenOpen:U,fnPanel:se,toggleAllChildren:re,onItemDragStart:fe,onItemDragEnd:ge,onNodeDragStart:be,onNodeDragEnd:ve,onDragOver:ye,onDragLeave:me,onDrop:ke,onDashDragOver:Ie,onDashDragLeave:Te,onDashDrop:Pe,startItemMove:Ce,startItemResize:Ae}},template:`
<div>
  <!-- ===== \u25A0. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
  <div class="page-title" style="display:flex;align-items:center;justify-content:space-between;">
    <div>
      \uC804\uC2DC\uD328\uB110\uBBF8\uB9AC\uBCF4\uAE30
      <span style="font-size:13px;font-weight:400;color:#888;">
        \uD328\uB110 \uD2B8\uB9AC & \uB4DC\uB798\uADF8\uD558\uC5EC \uBC30\uCE58
      </span>
    </div>
    <span style="font-size:12px;background:#e8f0fe;color:#1565c0;border:1px solid #bbdefb;border-radius:10px;padding:3px 12px;font-weight:600;">
      \u{1F310} {{ cfSiteNm }}
    </span>
  </div>
  <!-- ===== \u25A1. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
  <!-- ===== \u25A0. \uC870\uD68C \uC870\uAC74 =================================================== -->
  <div class="card" style="padding:14px 18px;margin-bottom:12px;">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">
          \u{1F4C5} \uC804\uC2DC\uC77C\uC2DC
        </span>
        <bo-date-time-picker v-model:date="searchParam.previewDate" v-model:time="searchParam.previewTime"
          :show-clear="false" date-width="136px" time-width="90px" />
      </div>
      <div style="width:1px;height:24px;background:#e0e0e0;">
      </div>
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">
          \uC0C1\uD0DC
        </span>
        <select v-model="searchParam.filterStatus" class="form-control" style="width:76px;margin:0;font-size:12px;">
          <option value="">\uC804\uCCB4</option>
          <option v-for="c in codes.active_statuses" :key="c.codeValue" :value="c.codeValue">
            {{ c.codeLabel }}
          </option>
        </select>
      </div>
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">
          \uACF5\uAC1C\uB300\uC0C1
        </span>
        <select v-model="searchParam.filterVisibility" class="form-control" style="width:100px;margin:0;font-size:12px;">
          <option v-for="o in codes.visibility_opts" :key="o?.value" :value="o.value">
            {{ o.label }}
          </option>
        </select>
      </div>
      <div style="width:1px;height:24px;background:#e0e0e0;">
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD328\uB110 \uAC80\uC0C9 =============================================== -->
      <input v-model="searchParam.searchValue" class="form-control" placeholder="\uD328\uB110\uBA85 \uAC80\uC0C9" style="margin:0;width:150px;font-size:12px;" @keyup.enter="handleBtnAction('searchParam-apply')" />
      <span style="font-size:12px;color:#888;">
        \uCD1D
        <b>
          {{ cfFilteredLibs.length }}
        </b>
        \uAC74
      </span>
      <div style="display:flex;align-items:center;gap:6px;margin-left:auto;">
        <button @click="handleBtnAction('searchParam-reset')" class="btn btn_reset"
          style="padding:0;width:26px;height:26px;font-size:13px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;" title="\uCD08\uAE30\uD654">\u{1F504}</button>
        <button @click="handleBtnAction('searchParam-apply')" class="btn btn_search">
          \uAC80\uC0C9
        </button>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uC870\uD68C \uC870\uAC74 =================================================== -->
  <!-- ===== \u25A0. 2\uB2E8 \uB808\uC774\uC544\uC6C3 ================================================= -->
  <div style="display:flex;gap:12px;height:calc(100vh - 240px);min-height:500px;align-items:stretch;">
    <!-- ===== \u25A0.\u25A0. \uC67C\uCABD: \uD2B8\uB9AC (\uCE74\uB4DC) =========================================== -->
    <div class="card" style="width:340px;flex-shrink:0;display:flex;flex-direction:column;padding:0;overflow:hidden;">
      <div style="padding:7px 12px;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:700;color:#555;background:#fafafa;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;">
        <span class="list-title">
          \uD45C\uC2DC\uACBD\uB85C
          <span style="font-size:10px;color:#aaa;font-family:monospace;font-weight:400;margin-left:4px;">#ec_disp_panel</span>
        </span>
        <span style="font-size:10px;color:#aaa;font-weight:400;">
          \u283F \uB4DC\uB798\uADF8\uD558\uC5EC \uBC30\uCE58
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC804\uCCB4\uD3BC\uCE58\uAE30 / \uC804\uCCB4\uB2EB\uAE30 ======================================== -->
      <div style="padding:6px 12px;display:flex;gap:4px;border-bottom:1px solid #f0f0f0;background:#fff;flex-shrink:0;">
        <button @click="handleBtnAction('pathTree-expand-all')"
          style="flex:1;padding:4px 6px;font-size:10px;border:1px solid #d0d7de;border-radius:4px;background:#fff;color:#555;">
          \u25BC \uC804\uCCB4\uD3BC\uCE58\uAE30
        </button>
        <button @click="handleBtnAction('pathTree-collapse-all')"
          style="flex:1;padding:4px 6px;font-size:10px;border:1px solid #d0d7de;border-radius:4px;background:#fff;color:#555;">
          \u25B6 \uC804\uCCB4\uB2EB\uAE30
        </button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:4px 0;border-bottom:1px solid #ececec;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB8E8\uD2B8 \uB178\uB4DC ============================================= -->
        <div @click="handleSelectAction('pathTree-toggle', '__root__')"
          style="display:flex;align-items:center;gap:6px;padding:7px 12px;font-size:12px;font-weight:700;color:#222;user-select:none;background:#f8f9fb;border-radius:4px;margin:1px 4px;"
          :style="isOpen('__root__') ? 'background:#f0f4ff;' : ''">
          <span style="font-size:10px;color:#9ca3af;transition:transform .2s;"
            :style="isOpen('__root__') ? 'transform:rotate(90deg);' : ''">
            \u25B6
          </span>
          <span>
            \u{1F4C2} \uC804\uCCB4
          </span>
          <span style="margin-left:auto;font-size:10px;background:#fff;color:#555;border:1px solid #ddd;border-radius:8px;padding:0 6px;">
            {{ cfTree.reduce((acc,n)=>acc+n.children.reduce((a,c)=>a+c.libs.length,0),0) }}
          </span>
        </div>
        <div v-if="isOpen('__root__')" style="padding-left:8px;">
          <div v-for="node in cfTree" :key="node?.label">
            <div @click="handleSelectAction('pathTree-toggle', node.label)"
              draggable="true"
              @dragstart="onNodeDragStart($event, node.children.flatMap(c => c.libs))"
              @dragend="onNodeDragEnd"
              style="display:flex;align-items:center;gap:6px;padding:6px 12px;cursor:grab;font-size:12px;font-weight:700;color:#374151;user-select:none;border-radius:4px;margin:1px 4px;"
              :style="isOpen(node.label) ? 'background:#f0f4ff;' : ''">
              <span style="font-size:10px;color:#9ca3af;transition:transform .2s;"
                :style="isOpen(node.label) ? 'transform:rotate(90deg);' : ''">
                \u25B6
              </span>
              <span>
                {{ node.label }}
              </span>
              <span style="margin-left:auto;font-size:10px;background:#e5e7eb;color:#6b7280;border-radius:8px;padding:0 6px;">
                {{ node.children.reduce((acc,c)=>acc+c.libs.length,0) }}
              </span>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ======================================== -->
            <template v-if="isOpen(node.label)">
              <div v-for="sub in node.children" :key="node.label+'_'+sub.label">
                <div @click="handleSelectAction('pathTree-toggle', node.label+'_'+sub.label)"
                  draggable="true"
                  @dragstart="onNodeDragStart($event, sub.libs)"
                  @dragend="onNodeDragEnd"
                  style="display:flex;align-items:center;gap:6px;padding:5px 12px 5px 26px;cursor:grab;font-size:11px;font-weight:600;color:#4b5563;border-radius:4px;margin:1px 4px;"
                  :style="isOpen(node.label+'_'+sub.label) ? 'background:#f9fafb;' : ''">
                  <span style="font-size:9px;color:#9ca3af;transition:transform .2s;"
                    :style="isOpen(node.label+'_'+sub.label) ? 'transform:rotate(90deg);' : ''">
                    \u25B6
                  </span>
                  <span>
                    {{ sub.label }}
                  </span>
                  <span style="margin-left:auto;font-size:10px;background:#e5e7eb;color:#6b7280;border-radius:8px;padding:0 5px;">
                    {{ sub.libs.length }}
                  </span>
                </div>
                <template v-if="isOpen(node.label+'_'+sub.label)">
                  <div v-for="lib in sub.libs" :key="lib?.libId"
                    draggable="true"
                    @dragstart="onItemDragStart($event, lib)"
                    @dragend="onItemDragEnd"
                    @click="handleSelectAction('pathTree-select', lib)"
                    style="display:flex;align-items:center;gap:7px;padding:5px 10px 5px 42px;cursor:grab;font-size:11px;border-radius:4px;margin:1px 4px;transition:background .15s;"
                    :style="uiState.selectedLibId===lib.libId ? 'background:#dbeafe;color:#1d4ed8;font-weight:700;' : 'color:#374151;'">
                    <span style="font-size:9px;color:#c4c4c4;flex-shrink:0;">
                      \u283F
                    </span>
                    <span style="font-size:9px;background:#fff3e0;color:#e65100;border-radius:4px;padding:1px 6px;font-weight:600;flex-shrink:0;white-space:nowrap;">
                      (\uD328\uB110)
                    </span>
                    <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                      {{ lib.name }}
                    </span>
                    <span style="font-size:9px;color:#9ca3af;flex-shrink:0;">
                      #{{ String(lib.libId).padStart(4,'0') }}
                    </span>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
        <!-- ===== /root children ============================================= -->
        <div v-if="!cfTree.length" style="padding:24px;text-align:center;color:#ccc;font-size:12px;">
          \uC704\uC82F\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
        </div>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC67C\uCABD: \uD2B8\uB9AC (\uCE74\uB4DC) =========================================== -->
    <!-- ===== \u25A0.\u25A0. \uC624\uB978\uCABD (\uCE74\uB4DC) ============================================== -->
    <div class="card" style="flex:1;display:flex;flex-direction:column;overflow:hidden;background:#f0f2f5;min-width:0;padding:0;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC601\uC5ED \uC81C\uBAA9 ================================================ -->
      <div style="padding:7px 12px;border-bottom:1px solid #f0f0f0;background:#fafafa;flex-shrink:0;">
        <span class="list-title">\uBBF8\uB9AC\uBCF4\uAE30</span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD0ED\uBC14 + \uBDF0\uD3EC\uD2B8 \uD1A0\uAE00 + \uBC30\uCE58\uC218 =================================== -->
      <div style="display:flex;align-items:stretch;background:#f8f9fa;border-bottom:1px solid #e8e8e8;flex-shrink:0;padding:0 12px;">
        <div style="display:flex;gap:2px;align-items:flex-end;padding-top:8px;flex:1;">
          <button v-for="tab in GRID_TABS" :key="tab?.id" @click="handleSelectAction('preview-grid', tab.id)"
            style="padding:5px 14px;border:1px solid transparent;border-bottom:none;border-radius:6px 6px 0 0;font-size:12px;font-weight:600;transition:all .15s;margin-bottom:-1px;"
            :style="gridState.previewGrid===tab.id
            ? 'background:#fff;border-color:#e8e8e8;border-bottom-color:#fff;color:#1d4ed8;z-index:1;'
            : 'background:transparent;color:#9ca3af;'">
            {{ tab.label }}
          </button>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC2E4\uC81C\uCEE8\uD150\uCE20 + \uBDF0\uD3EC\uD2B8 \uD1A0\uAE00 (dashboard \uC81C\uC678) ===================== -->
        <div v-if="gridState.previewGrid!=='dashboard'" style="display:flex;align-items:center;gap:4px;padding:6px 0 6px 12px;border-left:1px solid #e5e7eb;margin-left:8px;">
          <button @click="handleBtnAction('preview-toggle-real')"
            style="font-size:11px;padding:3px 9px;border-radius:6px;border:1px solid #d1d5db;white-space:nowrap;transition:all .15s;margin-right:4px;"
            :style="gridState.showRealContent?'background:#059669;color:#fff;border-color:#059669;':'background:#fff;color:#6b7280;'">
            {{ gridState.showRealContent ? '\u2705 \uC2E4\uC81C\uCEE8\uD150\uCE20' : '\u{1F441} \uC2E4\uC81C\uCEE8\uD150\uCE20' }}
          </button>
          <div style="width:1px;height:18px;background:#e5e7eb;margin-right:2px;">
          </div>
          <button v-for="(vp, key) in VIEWPORT" :key="key" @click="handleSelectAction('preview-viewport', key)"
            style="font-size:11px;padding:3px 8px;border-radius:6px;border:1px solid #d1d5db;white-space:nowrap;transition:all .15s;"
            :style="gridState.viewportMode===key
            ? 'background:#1d4ed8;color:#fff;border-color:#1d4ed8;'
            : 'background:#fff;color:#6b7280;'">
            {{ vp.label }}
          </button>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:0 0 0 12px;">
          <span style="font-size:12px;color:#555;font-weight:600;">
            {{ cfPlacedCount }}\uAC1C
          </span>
          <button @click="handleBtnAction('preview-reset')"
            style="font-size:11px;padding:3px 10px;border:1px solid #d0d0d0;border-radius:6px;background:#fff;color:#666;white-space:nowrap;">
            \uCD08\uAE30\uD654
          </button>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uADF8\uB9AC\uB4DC \uCE94\uBC84\uC2A4 (grid1~4) =================================== -->
      <div v-if="gridState.previewGrid!=='dashboard'" @click="handleBtnAction('preview-close-span')" style="flex:1;overflow-y:auto;overflow-x:auto;padding:16px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBDF0\uD3EC\uD2B8 \uB798\uD37C ============================================ -->
        <div :style="{
          width: VIEWPORT[gridState.viewportMode].width || '100%',
          maxWidth: VIEWPORT[gridState.viewportMode].width || '100%',
          margin: '0 auto',
          transition: 'width .3s',
          }">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB514\uBC14\uC774\uC2A4 \uD504\uB808\uC784 \uD45C\uC2DC ===================================== -->
          <div v-if="gridState.viewportMode!=='desktop'"
            style="text-align:center;margin-bottom:8px;font-size:11px;color:#9ca3af;font-weight:600;">
            {{ gridState.viewportMode==='mobile' ? '\u{1F4F1} 375px' : '\u{1F4DF} 768px' }}
          </div>
          <div :style="{
            border: gridState.viewportMode!=='desktop' ? '2px solid #d1d5db' : 'none',
            borderRadius: gridState.viewportMode!=='desktop' ? '12px' : '0',
            padding: gridState.viewportMode!=='desktop' ? '12px' : '0',
            background: '#fff',
            boxShadow: gridState.viewportMode!=='desktop' ? '0 4px 20px rgba(0,0,0,.12)' : 'none',
            }">
            <div :style="{
              display: 'grid',
              gridTemplateColumns: cfAutoGridColumns,
              gap: '10px',
              }">
              <template v-for="(slot, idx) in cfCurrentSlots" :key="idx">
                <div v-if="!gridState.showRealContent || slot" @dragover="onDragOver($event, idx)" @dragleave="onDragLeave($event, idx)" @drop="onDrop($event, idx)" style="border-radius:8px;transition:all .15s;position:relative;" :style="[ dragState.dragOverIdx===idx ? 'border:2px dashed #1d4ed8;background:#eff6ff;min-height:110px;' : slot ? (gridState.showRealContent ? 'border:none;background:transparent;min-height:0;' : 'border:1px solid #e5e7eb;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.07);min-height:110px;') : 'border:2px dashed #d1d5db;background:#f9fafb;min-height:60px;', (slot ? (slot.colSpan||1) > 1 : false) ? { gridColumn: 'span ' + slot.colSpan } : {}, (slot ? (slot.rowSpan||1) > 1 : false) ? { gridRow: 'span ' + slot.rowSpan } : {}, ]">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBE44\uC5B4\uC788\uC74C ==================================== -->
                <div v-if="!slot ? (dragState.dragOverIdx!==idx) : false" style="height:100%;min-height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;color:#d1d5db;padding:10px;">
                <span style="font-size:20px;">
                  +
                </span>
                <span style="font-size:11px;">
                  \uB4DC\uB798\uADF8\uD558\uC5EC \uCD94\uAC00
                </span>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB4DC\uB86D \uC624\uBC84 =================================== -->
              <div v-else-if="!slot ? (dragState.dragOverIdx===idx) : false" style="min-height:60px;display:flex;align-items:center;justify-content:center;color:#1d4ed8;font-size:12px;font-weight:700;padding:10px;">
              \u25BC \uC5EC\uAE30\uC5D0 \uCD94\uAC00
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uCE58\uB428 ===================================== -->
            <template v-else-if="slot">
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2AC\uB86F \uD5E4\uB354 (\uC2E4\uC81C\uCEE8\uD150\uCE20 OFF) ===================== -->
              <div v-if="!gridState.showRealContent" style="display:flex;align-items:center;gap:5px;padding:6px 10px 5px;border-bottom:1px solid #f0f0f0;background:#fafafa;border-radius:8px 8px 0 0;">
                <span style="font-size:12px;">
                  {{ wIcon(slot.widgetType) }}
                </span>
                <span style="font-size:10px;background:#f0f4ff;color:#1d4ed8;border:1px solid #dbeafe;border-radius:4px;padding:0 5px;white-space:nowrap;">
                  {{ wTypeLabel(slot.widgetType) }}
                </span>
                <span style="font-size:11px;font-weight:600;color:#333;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                  {{ slot.name }}
                </span>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. span \uC124\uC815 \uC544\uC774\uCF58 ========================= -->
                <button @click="handleSelectAction('preview-span-popup', { e: $event, idx })"
                        :title="'\uC5F4 ' + (slot.colSpan||1) + ' \xD7 \uD589 ' + (slot.rowSpan||1)"
                        style="flex-shrink:0;width:22px;height:22px;border-radius:4px;border:1px solid #e5e7eb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;transition:all .15s;"
                        :style="gridState.spanPopupIdx===idx ? 'background:#1d4ed8;color:#fff;border-color:#1d4ed8;' : 'background:#f9fafb;color:#6b7280;'">
                  \u2699
                </button>
                <button @click="handleSelectAction('preview-slot-remove', idx)"
                        style="flex-shrink:0;width:17px;height:17px;border-radius:50%;border:none;background:#e5e7eb;color:#6b7280;font-size:10px;display:flex;align-items:center;justify-content:center;padding:0;">
                  \u2715
                </button>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. span \uC124\uC815 \uB808\uC774\uC5B4 \uD31D\uC5C5 ======================== -->
              <div v-if="gridState.spanPopupIdx===idx" @click.stop
                      style="position:absolute;top:36px;right:6px;z-index:20;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12);padding:12px 14px;min-width:170px;">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB2EB\uAE30 ================================== -->
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                  <span style="font-size:11px;font-weight:700;color:#374151;">
                    \uADF8\uB9AC\uB4DC \uC2A4\uD32C \uC124\uC815
                  </span>
                  <button @click="handleBtnAction('preview-close-span')" style="border:none;background:none;font-size:13px;color:#9ca3af;padding:0;line-height:1;">
                    \u2715
                  </button>
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC5F4(colspan) ========================== -->
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
                  <span style="font-size:11px;color:#6b7280;width:36px;">
                    \uC5F4 span
                  </span>
                  <button @click="handleSelectAction('preview-span-set', { idx, axis: 'col', delta: -1 })" :disabled="(slot.colSpan||1)<=1"
                          style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                          :style="(slot.colSpan||1)<=1?'opacity:.3;cursor:default;':''">
                    \u2212
                  </button>
                  <span style="min-width:28px;text-align:center;font-size:14px;font-weight:700;color:#1d4ed8;">
                    {{ slot.colSpan||1 }}
                  </span>
                  <button @click="handleSelectAction('preview-span-set', { idx, axis: 'col', delta: +1 })" :disabled="(slot.colSpan||1)>=(GRID_COLS[gridState.previewGrid]||1)"
                          style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                          :style="(slot.colSpan||1)>=(GRID_COLS[gridState.previewGrid]||1)?'opacity:.3;cursor:default;':''">
                    +
                  </button>
                  <span style="font-size:10px;color:#9ca3af;">
                    / {{ GRID_COLS[gridState.previewGrid]||1 }}
                  </span>
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD589(rowspan) ========================== -->
                <div style="display:flex;align-items:center;gap:6px;">
                  <span style="font-size:11px;color:#6b7280;width:36px;">
                    \uD589 span
                  </span>
                  <button @click="handleSelectAction('preview-span-set', { idx, axis: 'row', delta: -1 })" :disabled="(slot.rowSpan||1)<=1"
                          style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                          :style="(slot.rowSpan||1)<=1?'opacity:.3;cursor:default;':''">
                    \u2212
                  </button>
                  <span style="min-width:28px;text-align:center;font-size:14px;font-weight:700;color:#1d4ed8;">
                    {{ slot.rowSpan||1 }}
                  </span>
                  <button @click="handleSelectAction('preview-span-set', { idx, axis: 'row', delta: +1 })" :disabled="(slot.rowSpan||1)>=4"
                          style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                          :style="(slot.rowSpan||1)>=4?'opacity:.3;cursor:default;':''">
                    +
                  </button>
                  <span style="font-size:10px;color:#9ca3af;">
                    / 4
                  </span>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2E4\uC81C\uCEE8\uD150\uCE20 ON: \xD7\uBC84\uD2BC\uB9CC ======================== -->
              <div v-else style="position:relative;">
                <button @click="handleSelectAction('preview-slot-remove', idx)"
                        style="position:absolute;top:4px;right:4px;z-index:5;width:18px;height:18px;border-radius:50%;border:none;background:rgba(0,0,0,.3);color:#fff;font-size:11px;line-height:1;display:flex;align-items:center;justify-content:center;padding:0;">
                  \u2715
                </button>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 ================================ -->
              <disp-x03-panel v-if="slot.panelId"
                      :params="{ date: searchParam.previewDate, time: searchParam.previewTime, status: applied.status, visibilityTargets: applied.visibility ? '^' + applied.visibility + '^' : '' }"
                      :disp-opt="{ layout:'vertical', showBadges:false, interactive:true }"
                      :panel-item="fnPanel(slot.panelId)"
                      :show-header="true" />
              <widget-preview v-else :lib="slot" />
            </template>
          </div>
          <!-- ===== /slot ====================================================== -->
        </template>
      </div>
      <!-- ===== /grid ====================================================== -->
    </div>
    <!-- ===== /device frame ============================================== -->
  </div>
  <!-- ===== /viewport wrapper ========================================== -->
</div>
<!-- ===== /grid canvas =============================================== -->
<!-- ===== \u25A0.\u25A0.\u25A0. \uB300\uC2DC\uBCF4\uB4DC \uCE94\uBC84\uC2A4 (\uC790\uC720 \uBC30\uCE58) ==================================== -->
<div v-else style="flex:1;overflow:auto;padding:16px;">
  <div
          ref="dashCanvas"
          @dragover="onDashDragOver"
          @dragleave="onDashDragLeave"
          @drop="onDashDrop"
          style="position:relative;min-height:560px;min-width:600px;background:#fff;border-radius:8px;border:2px dashed #e5e7eb;transition:border-color .15s;"
          :style="gridState.dashDragOver ? 'border-color:#1d4ed8;background:#eff6ff;' : ''">
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBE48 \uC0C1\uD0DC ============================================ -->
    <div v-if="!dashItems.length ? (!gridState.dashDragOver) : false" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#d1d5db;pointer-events:none;">
    <span style="font-size:48px;">
      \u{1F9E9}
    </span>
    <span style="font-size:13px;">
      \uC67C\uCABD \uD2B8\uB9AC\uC5D0\uC11C \uC704\uC82F\uC744 \uB4DC\uB798\uADF8\uD558\uC5EC \uBC30\uCE58\uD558\uC138\uC694
    </span>
  </div>
  <div v-if="gridState.dashDragOver ? (!dashItems.length) : false" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#1d4ed8;font-size:14px;font-weight:700;pointer-events:none;">
  \u25BC \uC5EC\uAE30\uC5D0 \uBC30\uCE58
</div>
<!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uCE58\uB41C \uC544\uC774\uD15C ========================================= -->
<div v-for="item in dashItems" :key="item?.id"
            :style="{
            position:'absolute',
            left: item.x+'px',
            top:  item.y+'px',
            width: item.w+'px',
            minHeight: item.h+'px',
            border:'1px solid #e5e7eb',
            borderRadius:'8px',
            background:'#fff',
            boxShadow:'0 2px 10px rgba(0,0,0,.1)',
            userSelect:'none',
            zIndex: 1,
            }">
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC774\uB3D9 \uD578\uB4E4 \uD5E4\uB354 ====================================== -->
  <div
              @mousedown="startItemMove($event, item)"
              style="display:flex;align-items:center;gap:5px;padding:6px 10px;background:#f8f9fa;border-bottom:1px solid #f0f0f0;border-radius:8px 8px 0 0;cursor:move;">
    <span style="font-size:10px;color:#c4c4c4;letter-spacing:1px;">
      \u283F\u283F
    </span>
    <span style="font-size:12px;">
      {{ wIcon(item.lib.widgetType) }}
    </span>
    <span style="font-size:11px;background:#f0f4ff;color:#1d4ed8;border:1px solid #dbeafe;border-radius:4px;padding:0 5px;white-space:nowrap;flex-shrink:0;">
      {{ wTypeLabel(item.lib.widgetType) }}
    </span>
    <span style="font-size:11px;font-weight:600;color:#333;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">
      {{ item.lib.name }}
    </span>
    <button @mousedown.stop @click="handleSelectAction('preview-dash-remove', item.id)"
                style="flex-shrink:0;width:18px;height:18px;border-radius:50%;border:none;background:#e5e7eb;color:#6b7280;font-size:10px;display:flex;align-items:center;justify-content:center;padding:0;">
      \u2715
    </button>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 ======================================== -->
  <div style="overflow:hidden;" :style="{maxHeight:(item.h-40)+'px'}">
    <disp-x03-panel v-if="item.lib.panelId"
                :params="{ date: searchParam.previewDate, time: searchParam.previewTime, status: applied.status, visibilityTargets: applied.visibility ? '^' + applied.visibility + '^' : '' }"
                :disp-opt="{ layout:'vertical', showBadges:false, interactive:true }"
                :panel-item="fnPanel(item.lib.panelId)"
                :show-header="true" />
    <widget-preview v-else :lib="item.lib" />
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD06C\uAE30 \uC870\uC808 \uD578\uB4E4 ====================================== -->
  <div
              @mousedown="startItemResize($event, item)"
              style="position:absolute;right:0;bottom:0;width:18px;height:18px;cursor:se-resize;border-radius:0 0 8px 0;overflow:hidden;">
    <div style="width:0;height:0;border-style:solid;border-width:0 0 18px 18px;border-color:transparent transparent #d1d5db transparent;position:absolute;right:0;bottom:0;">
    </div>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD06C\uAE30 \uD45C\uC2DC ========================================= -->
  <div style="position:absolute;right:22px;bottom:3px;font-size:9px;color:#c4c4c4;pointer-events:none;user-select:none;">
    {{ Math.round(item.w) }}\xD7{{ Math.round(item.h) }}
  </div>
</div>
</div>
<!-- ===== /dashCanvas ================================================ -->
</div>
<!-- ===== /dashboard ================================================= -->
</div>
<!-- ===== /\uC624\uB978\uCABD ======================================================= -->
</div>
<!-- ===== /2\uB2E8 ======================================================== -->
</div>
<!-- ===== \u25A1.\u25A1. \uC624\uB978\uCABD (\uCE74\uB4DC) ============================================== -->
<!-- ===== \u25A1. 2\uB2E8 \uB808\uC774\uC544\uC6C3 ================================================= -->
`,components:{WidgetPreview:_WP_DispPanelPreview}};
