const _WidgetPreview={name:"WidgetPreview",props:{lib:Object,compact:{type:Boolean,default:!1}},setup(_){const{ref:D,reactive:r,computed:p,watchEffect:B,onMounted:L}=Vue,I=window.boApp.showToast,z=window.boApp.showConfirm,A=window.boApp.showRefModal;return{cfChartBars:p(()=>coUtil.cofChartBars((_.lib||{}).chartValues,(_.lib||{}).chartLabels)),coUtil}},template:`
<div style="padding:10px;">
  <!-- ===== \u25A0. \uC774\uBBF8\uC9C0 \uBC30\uB108 ================================================== -->
  <template v-if="lib.widgetType==='image_banner'">
    <div style="border-radius:6px;overflow:hidden;background:#f0f0f0;">
      <img v-if="lib.imageUrl" :src="coUtil.cofImgSrc(lib.imageUrl)" style="width:100%;display:block;max-height:130px;object-fit:cover;" />
      <div v-else style="height:80px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px;">\u{1F5BC} \uC774\uBBF8\uC9C0 \uBC30\uB108</div>
    </div>
    <div v-if="lib.linkUrl" style="font-size:10px;color:#aaa;margin-top:4px;">\u{1F517} {{ lib.linkUrl }}</div>
  </template>
  <!-- ===== \u25A1. \uC774\uBBF8\uC9C0 \uBC30\uB108 ================================================== -->
  <!-- ===== \u25A0. \uC0C1\uD488 \uC2AC\uB77C\uC774\uB354 / \uC0C1\uD488 ============================================ -->
  <template v-else-if="lib.widgetType==='product_slider'||lib.widgetType==='product'">
    <div style="font-size:12px;font-weight:700;color:#222;margin-bottom:7px;">{{ lib.name }}</div>
    <div style="display:flex;gap:6px;overflow-x:auto;">
      <div v-for="i in 4" :key="i" style="flex-shrink:0;width:64px;text-align:center;">
        <div style="height:56px;background:#f5f5f5;border-radius:5px;margin-bottom:4px;display:flex;align-items:center;justify-content:center;font-size:16px;">
          \u{1F457}
        </div>
        <div style="font-size:10px;color:#888;">\uC0C1\uD488{{ i }}</div>
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uC0C1\uD488 \uC2AC\uB77C\uC774\uB354 / \uC0C1\uD488 ============================================ -->
  <!-- ===== \u25A0. \uCC28\uD2B8 ====================================================== -->
  <template v-else-if="lib.widgetType ? (lib.widgetType.startsWith('chart_')) : false">
    <div style="font-size:12px;font-weight:700;color:#222;margin-bottom:8px;">{{ lib.chartTitle||lib.name }}</div>
    <div v-if="cfChartBars.length" style="display:flex;align-items:flex-end;gap:4px;height:60px;">
      <div v-for="(bar,i) in cfChartBars" :key="i" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;">
        <div :style="{height:bar.pct+'%',background:bar.color,borderRadius:'3px 3px 0 0',width:'100%',minHeight:'3px'}"></div>
        <div style="font-size:9px;color:#aaa;">{{ bar.label }}</div>
      </div>
    </div>
    <div v-else style="height:50px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:11px;">\uB370\uC774\uD130 \uC5C6\uC74C</div>
  </template>
  <!-- ===== \u25A1. \uCC28\uD2B8 ====================================================== -->
  <!-- ===== \u25A0. \uD14D\uC2A4\uD2B8 \uBC30\uB108 ================================================== -->
  <template v-else-if="lib.widgetType==='text_banner'">
    <div :style="{background:lib.bgColor||'#fff',color:lib.textColor||'#222',padding:'10px',borderRadius:'5px',border:'1px solid #eee',fontSize:'12px'}">
      <span v-if="lib.textContent" v-html="lib.textContent"></span>
      <span v-else style="color:#ccc;">\uD14D\uC2A4\uD2B8 \uBC30\uB108</span>
    </div>
  </template>
  <!-- ===== \u25A1. \uD14D\uC2A4\uD2B8 \uBC30\uB108 ================================================== -->
  <!-- ===== \u25A0. \uC815\uBCF4 \uCE74\uB4DC =================================================== -->
  <template v-else-if="lib.widgetType==='info_card'">
    <div style="background:#f8f9fa;border-radius:5px;padding:10px;border:1px solid #eee;">
      <div style="font-size:12px;font-weight:700;margin-bottom:4px;">{{ lib.infoTitle||'\uCE74\uB4DC \uC81C\uBAA9' }}</div>
      <div style="font-size:11px;color:#666;white-space:pre-line;">{{ (lib.infoBody||'\uCE74\uB4DC \uB0B4\uC6A9').slice(0,100) }}</div>
    </div>
  </template>
  <!-- ===== \u25A1. \uC815\uBCF4 \uCE74\uB4DC =================================================== -->
  <!-- ===== \u25A0. \uCFE0\uD3F0 ====================================================== -->
  <template v-else-if="lib.widgetType==='coupon'">
    <div style="background:linear-gradient(135deg,#e8587a,#f97316);border-radius:6px;padding:12px;color:#fff;display:flex;align-items:center;justify-content:space-between;gap:8px;">
      <div>
        <div style="font-size:10px;opacity:.8;">\uCFE0\uD3F0</div>
        <div style="font-size:14px;font-weight:700;">{{ lib.couponCode||'CODE' }}</div>
        <div v-if="lib.couponDesc" style="font-size:10px;opacity:.8;">{{ lib.couponDesc }}</div>
      </div>
      <span style="font-size:22px;">\u{1F39F}</span>
      <div style="border:2px dashed rgba(255,255,255,.5);border-radius:6px;padding:5px 12px;font-size:11px;font-weight:700;white-space:nowrap;">
        \uCFE0\uD3F0 \uBC1C\uAE30
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uCFE0\uD3F0 ====================================================== -->
  <!-- ===== \u25A0. \uCE90\uC2DC \uBC30\uB108 =================================================== -->
  <template v-else-if="lib.widgetType==='cache_banner'">
    <div style="background:linear-gradient(135deg,#f59e0b,#d97706);border-radius:6px;padding:12px;color:#fff;display:flex;align-items:center;gap:10px;">
      <span style="font-size:22px;">\u{1F4B0}</span>
      <div>
        <div style="font-size:10px;opacity:.8;">\uC801\uB9BD \uCE90\uC2DC</div>
        <div style="font-size:16px;font-weight:800;">{{ lib.cacheAmount ? lib.cacheAmount.toLocaleString()+'\uC6D0' : '-' }}</div>
        <div v-if="lib.cacheDesc" style="font-size:10px;opacity:.8;">{{ lib.cacheDesc }}</div>
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uCE90\uC2DC \uBC30\uB108 =================================================== -->
  <!-- ===== \u25A0. HTML \uC5D0\uB514\uD130 ================================================ -->
  <template v-else-if="lib.widgetType==='html_editor'">
    <div v-if="lib.htmlContent" v-html="lib.htmlContent" style="font-size:12px;overflow:hidden;max-height:120px;"></div>
    <div v-else style="color:#ccc;font-size:11px;padding:8px 0;">HTML \uBBF8\uB9AC\uBCF4\uAE30</div>
  </template>
  <!-- ===== \u25A1. HTML \uC5D0\uB514\uD130 ================================================ -->
  <!-- ===== \u25A0. \uC704\uC82F \uC784\uBCA0\uB4DC ================================================== -->
  <template v-else-if="lib.widgetType==='widget_embed'">
    <div v-if="lib.embedCode" v-html="lib.embedCode" style="overflow:hidden;max-height:140px;"></div>
    <div v-else style="color:#ccc;font-size:11px;padding:8px 0;">\uC784\uBCA0\uB4DC \uBBF8\uB9AC\uBCF4\uAE30</div>
  </template>
  <!-- ===== \u25A1. \uC704\uC82F \uC784\uBCA0\uB4DC ================================================== -->
  <!-- ===== \u25A0. \uD31D\uC5C5 ====================================================== -->
  <template v-else-if="lib.widgetType==='popup'">
    <div style="border:2px solid #e0e0e0;border-radius:6px;overflow:hidden;">
      <div style="background:#444;color:#fff;padding:5px 10px;font-size:11px;display:flex;justify-content:space-between;">
        <span>\uD31D\uC5C5</span>
        <span>\u2715</span>
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
      <span style="font-size:20px;">\u{1F4CE}</span>
      <div>
        <div style="font-size:12px;font-weight:600;color:#222;">{{ lib.fileLabel||'\uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC' }}</div>
        <div v-if="lib.fileUrl" style="font-size:10px;color:#aaa;">{{ lib.fileUrl.split('/').pop() }}</div>
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uD30C\uC77C ====================================================== -->
  <!-- ===== \u25A0. \uAE30\uD0C0 ====================================================== -->
  <template v-else>
    <div style="background:#f5f5f5;border-radius:6px;padding:16px;text-align:center;color:#bbb;">
      <div style="font-size:24px;margin-bottom:4px;">\u25AA</div>
      <div style="font-size:11px;">{{ lib.name }}</div>
    </div>
  </template>
</div>

  <!-- ===== \u25A1. \uAE30\uD0C0 ====================================================== -->`};window.DpDispWidgetLibPreview={name:"DpDispWidgetLibPreview",props:{navigate:{type:Function,required:!0}},setup(_){const{ref:D,reactive:r,computed:p,watch:B,watchEffect:L,onMounted:I}=Vue,z=window.boApp.showToast,A=r({widget_status_opts:[{value:"\uD65C\uC131",label:"\uD65C\uC131"},{value:"\uBE44\uD65C\uC131",label:"\uBE44\uD65C\uC131"}],need_yn_opts:[{codeValue:"Y",codeLabel:"\uD544\uC694"},{codeValue:"N",codeLabel:"\uBD88\uD544\uC694"}],condition_opts:["\uD56D\uC0C1 \uD45C\uC2DC","\uB85C\uADF8\uC778 \uD544\uC694","\uB85C\uADF8\uC778+VIP","\uB85C\uADF8\uC778+\uC6B0\uC218","\uBE44\uB85C\uADF8\uC778 \uC804\uC6A9"],auth_grade_opts:["\uC77C\uBC18","\uC6B0\uC218","VIP"]}),S=p(()=>{var t;const e=window.sfGetBoCodeStore();return((t=e==null?void 0:e.sgGetGrpCodes)==null?void 0:t.call(e,"WIDGET_TYPE_CD"))||[]}),w=r([]),V=p(()=>boUtil.bofGetSiteNm()),U=(e,t={})=>{if(e==="searchParam-list")return X();if(e==="searchParam-reset")return J();if(e==="pathTree-expand-all")return ie();if(e==="pathTree-collapse-all")return oe();if(e==="preview-toggle-real"){n.showRealContent=!n.showRealContent;return}else{if(e==="preview-reset")return R();if(e==="spanPopup-close")return ve();if(e==="slot-remove")return be(t);if(e==="dashItem-remove")return ke(t);console.warn("[handleBtnAction] unknown cmd:",e)}},N=(e,t={})=>{if(e==="pathTree-toggle")return Z(t);if(e==="pathTree-toggle-children")return te(t.e,t.node);if(e==="pathTree-select")return K(t);if(e==="preview-tab"){n.previewGrid=t;return}else if(e==="preview-viewport"){n.viewportMode=t;return}else{if(e==="slot-span-set")return ue(t.idx,t.axis,t.delta);if(e==="slot-span-popup")return he(t.e,t.idx);console.warn("[handleSelectAction] unknown cmd:",e)}},Y=async()=>{var e,t;try{const a=(((t=(e=(await boApiSvc.dpWidgetLib.getPage({pageNo:1,pageSize:1e4},"\uC804\uC2DC\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC","\uC870\uD68C")).data)==null?void 0:e.data)==null?void 0:t.pageList)||[]).map(o=>{let s={};try{s=JSON.parse(o.widgetConfigJson||"{}")}catch{}return{...s,libId:o.widgetLibId,libCode:o.widgetCode,name:o.widgetNm,widgetType:o.widgetTypeCd,desc:o.widgetLibDesc,tags:s.tags||"",status:o.useYn==="Y"?"\uD65C\uC131":"\uBE44\uD65C\uC131",thumbnailUrl:o.thumbnailUrl,sortOrd:o.sortOrd||0}});w.splice(0,w.length,...a)}catch(i){console.error("[handleSearchList]",i)}};I(async()=>{Y(),Object.assign(O,x)});const P=coUtil.cofToYmd(new Date),F=new Date().toTimeString().slice(0,5),$={image_banner:"\u{1F5BC}",product_slider:"\u{1F6D2}",product:"\u{1F4E6}",cond_product:"\u{1F50D}",chart_bar:"\u{1F4CA}",chart_line:"\u{1F4C8}",chart_pie:"\u{1F967}",text_banner:"\u{1F4DD}",info_card:"\u2139\uFE0F",popup:"\u{1F4AC}",file:"\u{1F4CE}",file_list:"\u{1F4C1}",coupon:"\u{1F39F}",html_editor:"\u{1F4C4}",event_banner:"\u{1F389}",cache_banner:"\u{1F4B0}",widget_embed:"\u{1F9E9}",textarea:"\u{1F4CB}",markdown:"\u{1F4D1}",barcode:"\u{1F516}",qrcode:"\u{1F4F1}",barcode_qrcode:"\u{1F516}",video_player:"\u25B6\uFE0F",countdown:"\u23F1",payment_widget:"\u{1F4B3}",approval_widget:"\u2705",map_widget:"\u{1F5FA}"},H=e=>$[e]||"\u25AA",q=e=>{var t;return((t=S.value.find(i=>i.codeValue===e))==null?void 0:t.codeLabel)||e},x=r({previewDate:P,previewTime:F,filterType:"",filterStatus:"\uD65C\uC131",filterCondition:"",filterAuthReq:"",filterAuthGrade:"",searchType:"",searchValue:""}),O={},c=r({type:"",status:"\uD65C\uC131",searchType:"",searchValue:""}),X=()=>{Object.assign(c,{type:x.filterType,status:x.filterStatus,searchType:x.searchType,searchValue:(x.searchValue||"").trim().toLowerCase()})},J=()=>{Object.assign(x,O),Object.assign(c,{type:"",status:"\uD65C\uC131",searchType:"",searchValue:""}),R()},M=p(()=>{const e=c.searchValue,t=c.searchType||"widgetNm,tag,widgetLibDesc";return(Array.isArray(w)?w:[]).filter(i=>{if(c.type&&i.widgetType!==c.type||c.status&&i.status!==c.status)return!1;if(e){const a=[];if(t.includes("widgetNm")&&a.push((i.name||"").toLowerCase().includes(e)),t.includes("tag")&&a.push((i.tags||"").toLowerCase().includes(e)),t.includes("widgetLibDesc")&&a.push((i.desc||"").toLowerCase().includes(e)),!a.some(Boolean))return!1}return!0})}),K=e=>{n.selectedLibId=e.libId},Q={image_banner:"Common > Banner",popup:"Common > Popup",text_banner:"Common > Text",html_editor:"Common > HTML",textarea:"Common > Textarea",markdown:"Common > Markdown",info_card:"Common > InfoCard",file:"Common > File",file_list:"Common > FileList",barcode:"Common > Code",qrcode:"Common > Code",barcode_qrcode:"Common > Code",chart_bar:"Common > Chart",chart_line:"Common > Chart",chart_pie:"Common > Chart",video_player:"Common > Media",payment_widget:"Common > Widget",approval_widget:"Common > Widget",widget_embed:"Common > Widget",map_widget:"Common > Map",product_slider:"Product > Slider",product:"Product > Grid",cond_product:"Product > CondGrid",coupon:"Promotion > Coupon",cache_banner:"Promotion > Cache",countdown:"Promotion > Countdown",event_banner:"Promotion > Event"},k=p(()=>{const e={};return window.safeArrayUtils.safeForEach(M.value,t=>{const a=(Q[t.widgetType]||"\uAE30\uD0C0 > "+(t.widgetType||"\uBBF8\uBD84\uB958")).split(">").map(d=>d.trim()),o=a[0]||"\uAE30\uD0C0",s=a[1]||"\uAE30\uD0C0";e[o]||(e[o]={}),e[o][s]||(e[o][s]=[]),e[o][s].push(t)}),Object.keys(e).sort().map(t=>({label:t,children:Object.keys(e[t]).sort().map(i=>({label:i,libs:e[t][i]}))}))}),l=r(new Set),Z=e=>{l.has(e)?l.delete(e):l.add(e)},ee=e=>l.has(e),G=e=>window.safeArrayUtils.safeEvery(e.children,t=>l.has(e.label+"_"+t.label)),te=(e,t)=>{e.stopPropagation();const i=!G(t);window.safeArrayUtils.safeForEach(t.children,a=>{const o=t.label+"_"+a.label;i?l.add(o):l.delete(o)}),i&&l.add(t.label)};L(()=>{l.has("__root__")||l.add("__root__");const e=Array.isArray(k.value)?k.value:[];e.length&&l.size===1&&e.forEach(t=>{t&&t.label&&l.add(t.label)})});const ie=()=>{window.safeArrayUtils.safeForEach(k.value,e=>l.add(e.label)),l.add("__root__")},oe=()=>{l.clear(),l.add("__root__")},ne=(e,t)=>{window._dragWidgetLib=t,window._dragWidgetLibs=null,e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain",t.libId)},ae=()=>{window._dragWidgetLib=null},se=e=>{const t=new Set;return window.safeArrayUtils.safeFilter(e,i=>t.has(i.libId)?!1:(t.add(i.libId),!0))},le=(e,t)=>{const i=se(t);window._dragWidgetLib=null,window._dragWidgetLibs=i,e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain","node:"+i.length)},de=()=>{window._dragWidgetLibs=null},re=[{id:"grid1",label:"grid1",cols:1},{id:"grid2",label:"grid2",cols:2},{id:"grid3",label:"grid3",cols:3},{id:"grid4",label:"grid4",cols:4},{id:"dashboard",label:"dashboard",cols:null}],v={grid1:1,grid2:2,grid3:3,grid4:4},pe={desktop:{label:"\u{1F5A5} PC",width:null},tablet:{label:"\u{1F4DF} \uD0DC\uBE14\uB9BF",width:"768px"},mobile:{label:"\u{1F4F1} \uBAA8\uBC14\uC77C",width:"375px"}},n=r({dashDragOver:!1,showRealContent:!1,selectedLibId:null,previewGrid:"grid1",viewportMode:"desktop",dragOverIdx:-1,spanPopupIdx:-1}),Ie=Vue.toRef(n,"tab"),ce=p(()=>({grid1:"repeat(1,1fr)",grid2:"repeat(auto-fill,minmax(max(calc(50% - 5px),260px),1fr))",grid3:"repeat(auto-fill,minmax(max(calc(33.333% - 6px),190px),1fr))",grid4:"repeat(auto-fill,minmax(max(calc(25% - 6px),220px),1fr))"})[n.previewGrid]||"repeat(1,1fr)"),m=e=>Array(e*2).fill(null),g=r({grid1:m(1),grid2:m(2),grid3:m(3),grid4:m(4)}),W=p(()=>g[n.previewGrid]||[]),E=e=>{const t=v[e];if(!t)return;const i=g[e],a=i.length-t;if(i.slice(a).some(Boolean))for(let o=0;o<t;o++)i.push(null)},fe=(e,t)=>{e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),n.dragOverIdx!==t&&(n.dragOverIdx=t)},ge=(e,t)=>{const i=e&&e.relatedTarget;i&&e.currentTarget&&e.currentTarget.contains(i)||n.dragOverIdx===t&&(n.dragOverIdx=-1)},xe=(e,t)=>{e.preventDefault(),n.dragOverIdx=-1;const i=window._dragWidgetLibs;if(i){if(window._dragWidgetLibs=null,i.length>40){z(`\uB178\uB4DC \uD558\uC704 \uC704\uC82F\uC774 ${i.length}\uAC1C\uB85C 40\uAC1C\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4. \uBC30\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`,"error");return}const s=n.previewGrid,d=g[s],h=v[s]||1;let f=0,u=t;for(;f<i.length;){if(u>=d.length)for(let y=0;y<h;y++)d.push(null);d[u]||(d.splice(u,1,{...i[f],colSpan:1,rowSpan:1}),f++),u++}E(s);return}const a=window._dragWidgetLib;if(!a)return;const o=n.previewGrid;g[o].splice(t,1,{...a,colSpan:1,rowSpan:1}),E(o)},be=e=>{g[n.previewGrid].splice(e,1,null)},ue=(e,t,i)=>{const a=g[n.previewGrid][e];if(!a)return;const o=v[n.previewGrid]||1;t==="col"&&(a.colSpan=Math.max(1,Math.min(o,(a.colSpan||1)+i))),t==="row"&&(a.rowSpan=Math.max(1,Math.min(4,(a.rowSpan||1)+i)))},he=(e,t)=>{e.stopPropagation(),n.spanPopupIdx=n.spanPopupIdx===t?-1:t},ve=()=>{n.spanPopupIdx=-1},C=D(null),b=r([]),me=e=>{e.preventDefault(),n.dashDragOver=!0},ye=()=>{n.dashDragOver=!1},we=e=>{if(e.preventDefault(),n.dashDragOver=!1,!C.value)return;const t=C.value.getBoundingClientRect(),i=window._dragWidgetLibs;if(i){if(window._dragWidgetLibs=null,i.length>40){z(`\uB178\uB4DC \uD558\uC704 \uC704\uC82F\uC774 ${i.length}\uAC1C\uB85C 40\uAC1C\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4. \uBC30\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`,"error");return}const d=Math.max(0,e.clientX-t.left-120),h=Math.max(0,e.clientY-t.top-20),f=3,u=260,y=200,j=10;window.safeArrayUtils.safeForEach(i,(Ce,T)=>{const Te=T%f,De=Math.floor(T/f);b.push({id:Date.now()+T,lib:{...Ce},x:d+Te*(u+j),y:h+De*(y+j),w:u,h:y})});return}const a=window._dragWidgetLib;if(!a)return;const o=Math.max(0,e.clientX-t.left-110),s=Math.max(0,e.clientY-t.top-20);b.push({id:Date.now(),lib:{...a},x:o,y:s,w:240,h:180})},ke=e=>{const t=b.findIndex(i=>i.id===e);t>=0&&b.splice(t,1)},_e=(e,t)=>{e.preventDefault();const i=e.clientX-t.x,a=e.clientY-t.y,o=d=>{t.x=Math.max(0,d.clientX-i),t.y=Math.max(0,d.clientY-a)},s=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",s)},ze=(e,t)=>{e.preventDefault(),e.stopPropagation();const i=e.clientX,a=e.clientY,o=t.w,s=t.h,d=f=>{t.w=Math.max(160,o+(f.clientX-i)),t.h=Math.max(120,s+(f.clientY-a))},h=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",h)},Se=p(()=>n.previewGrid==="dashboard"?b.length:(W.value||[]).filter(Boolean).length),R=()=>{if(n.previewGrid==="dashboard")b.splice(0);else{const e=v[n.previewGrid],t=g[n.previewGrid];t.splice(0,t.length,...m(e))}};return{uiState:n,codes:A,searchParam:x,applied:c,tabSlots:g,dashItems:b,dashCanvas:C,handleBtnAction:U,handleSelectAction:N,cfSiteNm:V,cfFilteredLibs:M,cfTree:k,cfAutoGridColumns:ce,cfCurrentSlots:W,cfPlacedCount:Se,cfDispWidgetTypes:S,VIEWPORT:pe,GRID_TABS:re,GRID_COLS:v,today:P,wIcon:H,wTypeLabel:q,isOpen:ee,allChildrenOpen:G,onItemDragStart:ne,onItemDragEnd:ae,onNodeDragStart:le,onNodeDragEnd:de,onDragOver:fe,onDragLeave:ge,onDrop:xe,onDashDragOver:me,onDashDragLeave:ye,onDashDrop:we,startItemMove:_e,startItemResize:ze}},template:`
<div>
  <!-- ===== \u25A0. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
  <div class="page-title" style="display:flex;align-items:center;justify-content:space-between;">
    <div>\uC804\uC2DC\uC704\uC82FLib \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 <span style="font-size:13px;font-weight:400;color:#888;">\uD45C\uC2DC\uACBD\uB85C \uD2B8\uB9AC &amp; \uB4DC\uB798\uADF8\uD558\uC5EC \uBC30\uCE58</span></div>
    <span style="font-size:12px;background:#e8f0fe;color:#1565c0;border:1px solid #bbdefb;border-radius:10px;padding:3px 12px;font-weight:600;">
      \u{1F310} {{ cfSiteNm }}
    </span>
  </div>
  <!-- ===== \u25A1. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
  <!-- ===== \u25A0. \uC870\uD68C \uC870\uAC74 =================================================== -->
  <div class="card" style="padding:14px 18px;margin-bottom:12px;">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">\u{1F4C5} \uC804\uC2DC\uC77C\uC2DC</span>
        <bo-date-time-picker v-model:date="searchParam.previewDate" v-model:time="searchParam.previewTime"
          :show-clear="false" date-width="136px" time-width="90px" />
      </div>
      <div style="width:1px;height:24px;background:#e0e0e0;"></div>
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">\uC0C1\uD0DC</span>
        <select v-model="searchParam.filterStatus" class="form-control" style="width:76px;margin:0;font-size:12px;">
          <option value="">\uC804\uCCB4</option>
          <option v-for="o in codes.widget_status_opts" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">\uB178\uCD9C\uC870\uAC74</span>
        <select v-model="searchParam.filterCondition" class="form-control" style="width:105px;margin:0;font-size:12px;">
          <option value="">\uC804\uCCB4</option>
          <option v-for="c in codes.condition_opts" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">\uC778\uC99D\uD544\uC694</span>
        <select v-model="searchParam.filterAuthReq" class="form-control" style="width:70px;margin:0;font-size:12px;">
          <option value="">\uC804\uCCB4</option>
          <option v-for="o in codes.need_yn_opts" :key="o.codeValue" :value="o.codeValue">{{ o.codeLabel }}</option>
        </select>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================== -->
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">\uB4F1\uAE09\uC81C\uD55C</span>
        <select v-model="searchParam.filterAuthGrade" class="form-control" style="width:72px;margin:0;font-size:12px;">
          <option value="">\uC804\uCCB4</option>
          <option v-for="g in codes.auth_grade_opts" :key="g" :value="g">{{ g }}\u2191</option>
        </select>
      </div>
      <div style="width:1px;height:24px;background:#e0e0e0;"></div>
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">\uC704\uC82F\uC720\uD615</span>
        <select v-model="searchParam.filterType" class="form-control" style="width:114px;margin:0;font-size:12px;">
          <option v-for="t in cfDispWidgetTypes" :key="t?.value" :value="t.codeValue">{{ t.codeLabel }}</option>
        </select>
      </div>
      <bo-multi-check-select
        v-model="searchParam.searchType"
        :options="[
        { value: 'widgetNm',   label: '\uC774\uB984' },
        { value: 'tag',  label: '\uD0DC\uADF8' },
        { value: 'widgetLibDesc', label: '\uC124\uBA85' },
        ]"
        placeholder="\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4"
        all-label="\uC804\uCCB4 \uC120\uD0DD"
        min-width="130px" />
      <input v-model="searchParam.searchValue" class="form-control" placeholder="\uAC80\uC0C9\uC5B4 \uC785\uB825" style="margin:0;width:130px;font-size:12px;" @keyup.enter="handleBtnAction('searchParam-list')" />
      <span style="font-size:12px;color:#888;">\uCD1D <b>{{ cfFilteredLibs.length }}</b>\uAC74</span>
      <button @click="handleBtnAction('searchParam-reset')" class="btn btn_reset"
        style="padding:0;width:26px;height:26px;font-size:13px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;" title="\uCD08\uAE30\uD654">\u{1F504}</button>
      <button @click="handleBtnAction('searchParam-list')" class="btn btn_search">\uAC80\uC0C9</button>
    </div>
  </div>
  <!-- ===== \u25A1. \uC870\uD68C \uC870\uAC74 =================================================== -->
  <!-- ===== \u25A0. 2\uB2E8 \uB808\uC774\uC544\uC6C3 ================================================= -->
  <div style="display:flex;gap:12px;height:calc(100vh - 240px);min-height:500px;align-items:stretch;">
    <!-- ===== \u25A0.\u25A0. \uC67C\uCABD: \uD2B8\uB9AC (\uCE74\uB4DC) =========================================== -->
    <div class="card" style="width:340px;flex-shrink:0;display:flex;flex-direction:column;padding:0;overflow:hidden;">
      <div style="padding:7px 12px;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:700;color:#555;background:#fafafa;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;">
        <span class="list-title">\uD45C\uC2DC\uACBD\uB85C
          <span style="font-size:10px;color:#aaa;font-family:monospace;font-weight:400;margin-left:4px;">#ec_disp_widget_lib</span>
        </span>
        <span style="font-size:10px;color:#aaa;font-weight:400;">\u283F \uB4DC\uB798\uADF8\uD558\uC5EC \uBC30\uCE58</span>
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
          <span>\u{1F4C2} \uC804\uCCB4</span>
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
              <span>{{ node.label }}</span>
              <span style="margin-left:auto;font-size:10px;background:#e5e7eb;color:#6b7280;border-radius:8px;padding:0 6px;">
                {{ node.children.reduce((acc,c)=>acc+c.libs.length,0) }}
              </span>
              <span v-if="isOpen(node.label)" @click="handleSelectAction('pathTree-toggle-children', { e: $event, node })"
                :title="allChildrenOpen(node) ? '\uD558\uC704 \uBAA8\uB450 \uB2EB\uAE30' : '\uD558\uC704 \uBAA8\uB450 \uC5F4\uAE30'"
                style="font-size:10px;color:#9ca3af;padding:1px 4px;border-radius:3px;flex-shrink:0;"
                :style="allChildrenOpen(node) ? 'color:#1d4ed8;' : ''"
                >
                {{ allChildrenOpen(node) ? '\u229F' : '\u229E' }}
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
                  <span>{{ sub.label }}</span>
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
                    <span style="font-size:9px;color:#c4c4c4;flex-shrink:0;">\u283F</span>
                    <span style="font-size:13px;flex-shrink:0;">{{ wIcon(lib.widgetType) }}</span>
                    <span style="font-size:9px;background:#f0f4ff;color:#1d4ed8;border:1px solid #dbeafe;border-radius:3px;padding:0 4px;white-space:nowrap;flex-shrink:0;">
                      {{ lib.widgetType ? lib.widgetType.replace('_',' ') : '-' }}
                    </span>
                    <span style="font-size:9px;background:#f3e5f5;color:#6a1b9a;border-radius:4px;padding:1px 6px;font-weight:600;flex-shrink:0;white-space:nowrap;">
                      (\uC704\uC82F)
                    </span>
                    <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ lib.name }}</span>
                    <span style="font-size:9px;color:#9ca3af;flex-shrink:0;">#{{ String(lib.libId).padStart(4,'0') }}</span>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
        <!-- ===== /root children ============================================= -->
        <div v-if="!cfTree.length" style="padding:24px;text-align:center;color:#ccc;font-size:12px;">\uC704\uC82F\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
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
          <button v-for="tab in GRID_TABS" :key="tab?.id" @click="handleSelectAction('preview-tab', tab.id)"
            style="padding:5px 14px;border:1px solid transparent;border-bottom:none;border-radius:6px 6px 0 0;font-size:12px;font-weight:600;transition:all .15s;margin-bottom:-1px;"
            :style="uiState.previewGrid===tab.id
            ? 'background:#fff;border-color:#e8e8e8;border-bottom-color:#fff;color:#1d4ed8;z-index:1;'
            : 'background:transparent;color:#9ca3af;'">
            {{ tab.label }}
          </button>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC2E4\uC81C\uCEE8\uD150\uCE20 + \uBDF0\uD3EC\uD2B8 \uD1A0\uAE00 (dashboard \uC81C\uC678) ===================== -->
        <div v-if="uiState.previewGrid!=='dashboard'" style="display:flex;align-items:center;gap:4px;padding:6px 0 6px 12px;border-left:1px solid #e5e7eb;margin-left:8px;">
          <button @click="handleBtnAction('preview-toggle-real')"
            style="font-size:11px;padding:3px 9px;border-radius:6px;border:1px solid #d1d5db;white-space:nowrap;transition:all .15s;margin-right:4px;"
            :style="uiState.showRealContent?'background:#059669;color:#fff;border-color:#059669;':'background:#fff;color:#6b7280;'">
            {{ uiState.showRealContent ? '\u2705 \uC2E4\uC81C\uCEE8\uD150\uCE20' : '\u{1F441} \uC2E4\uC81C\uCEE8\uD150\uCE20' }}
          </button>
          <div style="width:1px;height:18px;background:#e5e7eb;margin-right:2px;"></div>
          <button v-for="(vp, key) in VIEWPORT" :key="key" @click="handleSelectAction('preview-viewport', key)"
            style="font-size:11px;padding:3px 8px;border-radius:6px;border:1px solid #d1d5db;white-space:nowrap;transition:all .15s;"
            :style="uiState.viewportMode===key
            ? 'background:#1d4ed8;color:#fff;border-color:#1d4ed8;'
            : 'background:#fff;color:#6b7280;'">
            {{ vp.label }}
          </button>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:0 0 0 12px;">
          <span style="font-size:12px;color:#555;font-weight:600;">{{ cfPlacedCount }}\uAC1C</span>
          <button @click="handleBtnAction('preview-reset')"
            style="font-size:11px;padding:3px 10px;border:1px solid #d0d0d0;border-radius:6px;background:#fff;color:#666;white-space:nowrap;">
            \uCD08\uAE30\uD654
          </button>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uADF8\uB9AC\uB4DC \uCE94\uBC84\uC2A4 (grid1~4) =================================== -->
      <div v-if="uiState.previewGrid!=='dashboard'" @click="handleBtnAction('spanPopup-close')" style="flex:1;overflow-y:auto;overflow-x:auto;padding:16px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBDF0\uD3EC\uD2B8 \uB798\uD37C ============================================ -->
        <div :style="{
          width: VIEWPORT[uiState.viewportMode].width || '100%',
          maxWidth: VIEWPORT[uiState.viewportMode].width || '100%',
          margin: '0 auto',
          transition: 'width .3s',
          }">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB514\uBC14\uC774\uC2A4 \uD504\uB808\uC784 \uD45C\uC2DC ===================================== -->
          <div v-if="uiState.viewportMode!=='desktop'"
            style="text-align:center;margin-bottom:8px;font-size:11px;color:#9ca3af;font-weight:600;">
            {{ uiState.viewportMode==='mobile' ? '\u{1F4F1} 375px' : '\u{1F4DF} 768px' }}
          </div>
          <div :style="{
            border: uiState.viewportMode!=='desktop' ? '2px solid #d1d5db' : 'none',
            borderRadius: uiState.viewportMode!=='desktop' ? '12px' : '0',
            padding: uiState.viewportMode!=='desktop' ? '12px' : '0',
            background: '#fff',
            boxShadow: uiState.viewportMode!=='desktop' ? '0 4px 20px rgba(0,0,0,.12)' : 'none',
            }">
            <div :style="{
              display: 'grid',
              gridTemplateColumns: cfAutoGridColumns,
              gap: '10px',
              }">
              <template v-for="(slot, idx) in cfCurrentSlots" :key="idx">
                <div v-if="!uiState.showRealContent || slot"
                  @dragover="onDragOver($event, idx)"
                  @dragleave="onDragLeave($event, idx)"
                  @drop="onDrop($event, idx)"
                  style="border-radius:8px;transition:all .15s;position:relative;"
                  :style="[
                  uiState.dragOverIdx===idx
                  ? 'border:2px dashed #1d4ed8;background:#eff6ff;min-height:110px;'
                  : slot
                  ? (uiState.showRealContent ? 'border:none;background:transparent;min-height:0;' : 'border:1px solid #e5e7eb;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.07);min-height:110px;')
                  : 'border:2px dashed #d1d5db;background:#f9fafb;min-height:60px;',
                  (slot?.colSpan||1) > 1 ? { gridColumn: 'span ' + slot.colSpan } : {},
                  (slot?.rowSpan||1) > 1 ? { gridRow:    'span ' + slot.rowSpan } : {},
                  ]">
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBE44\uC5B4\uC788\uC74C ==================================== -->
                  <div v-if="!slot ? (uiState.dragOverIdx!==idx) : false"
                    style="height:100%;min-height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;color:#d1d5db;padding:10px;">
                    <span style="font-size:20px;">+</span>
                    <span style="font-size:11px;">\uB4DC\uB798\uADF8\uD558\uC5EC \uCD94\uAC00</span>
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB4DC\uB86D \uC624\uBC84 =================================== -->
                  <div v-else-if="!slot ? (uiState.dragOverIdx===idx) : false"
                    style="min-height:60px;display:flex;align-items:center;justify-content:center;color:#1d4ed8;font-size:12px;font-weight:700;padding:10px;">
                    \u25BC \uC5EC\uAE30\uC5D0 \uCD94\uAC00
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uCE58\uB428 ===================================== -->
                  <template v-else-if="slot">
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2AC\uB86F \uD5E4\uB354 (\uC2E4\uC81C\uCEE8\uD150\uCE20 OFF) ===================== -->
                    <div v-if="!uiState.showRealContent" style="display:flex;align-items:center;gap:5px;padding:6px 10px 5px;border-bottom:1px solid #f0f0f0;background:#fafafa;border-radius:8px 8px 0 0;">
                      <span style="font-size:12px;">{{ wIcon(slot.widgetType) }}</span>
                      <span style="font-size:10px;background:#f0f4ff;color:#1d4ed8;border:1px solid #dbeafe;border-radius:4px;padding:0 5px;white-space:nowrap;">
                        {{ wTypeLabel(slot.widgetType) }}
                      </span>
                      <span style="font-size:11px;font-weight:600;color:#333;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                        {{ slot.name }}
                      </span>
                      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. span \uC124\uC815 \uC544\uC774\uCF58 ========================= -->
                      <button @click="handleSelectAction('slot-span-popup', { e: $event, idx })"
                        :title="'\uC5F4 ' + (slot.colSpan||1) + ' \xD7 \uD589 ' + (slot.rowSpan||1)"
                        style="flex-shrink:0;width:22px;height:22px;border-radius:4px;border:1px solid #e5e7eb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;transition:all .15s;"
                        :style="uiState.spanPopupIdx===idx ? 'background:#1d4ed8;color:#fff;border-color:#1d4ed8;' : 'background:#f9fafb;color:#6b7280;'">
                        \u2699
                      </button>
                      <button @click="handleBtnAction('slot-remove', idx)"
                        style="flex-shrink:0;width:17px;height:17px;border-radius:50%;border:none;background:#e5e7eb;color:#6b7280;font-size:10px;display:flex;align-items:center;justify-content:center;padding:0;">
                        \u2715
                      </button>
                    </div>
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. span \uC124\uC815 \uB808\uC774\uC5B4 \uD31D\uC5C5 ======================== -->
                    <div v-if="uiState.spanPopupIdx===idx" @click.stop
                      style="position:absolute;top:36px;right:6px;z-index:20;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12);padding:12px 14px;min-width:170px;">
                      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB2EB\uAE30 ================================== -->
                      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                        <span style="font-size:11px;font-weight:700;color:#374151;">\uADF8\uB9AC\uB4DC \uC2A4\uD32C \uC124\uC815</span>
                        <button @click="handleBtnAction('spanPopup-close')" style="border:none;background:none;font-size:13px;color:#9ca3af;padding:0;line-height:1;">
                          \u2715
                        </button>
                      </div>
                      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC5F4(colspan) ========================== -->
                      <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
                        <span style="font-size:11px;color:#6b7280;width:36px;">\uC5F4 span</span>
                        <button @click="handleSelectAction('slot-span-set', { idx, axis:'col', delta:-1 })" :disabled="(slot.colSpan||1)<=1"
                          style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                          :style="(slot.colSpan||1)<=1?'opacity:.3;cursor:default;':''">
                          \u2212
                        </button>
                        <span style="min-width:28px;text-align:center;font-size:14px;font-weight:700;color:#1d4ed8;">
                          {{ slot.colSpan||1 }}
                        </span>
                        <button @click="handleSelectAction('slot-span-set', { idx, axis:'col', delta:+1 })" :disabled="(slot.colSpan||1)>=(GRID_COLS[uiState.previewGrid]||1)"
                          style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                          :style="(slot.colSpan||1)>=(GRID_COLS[uiState.previewGrid]||1)?'opacity:.3;cursor:default;':''">
                          +
                        </button>
                        <span style="font-size:10px;color:#9ca3af;">/ {{ GRID_COLS[uiState.previewGrid]||1 }}</span>
                      </div>
                      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD589(rowspan) ========================== -->
                      <div style="display:flex;align-items:center;gap:6px;">
                        <span style="font-size:11px;color:#6b7280;width:36px;">\uD589 span</span>
                        <button @click="handleSelectAction('slot-span-set', { idx, axis:'row', delta:-1 })" :disabled="(slot.rowSpan||1)<=1"
                          style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                          :style="(slot.rowSpan||1)<=1?'opacity:.3;cursor:default;':''">
                          \u2212
                        </button>
                        <span style="min-width:28px;text-align:center;font-size:14px;font-weight:700;color:#1d4ed8;">
                          {{ slot.rowSpan||1 }}
                        </span>
                        <button @click="handleSelectAction('slot-span-set', { idx, axis:'row', delta:+1 })" :disabled="(slot.rowSpan||1)>=4"
                          style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                          :style="(slot.rowSpan||1)>=4?'opacity:.3;cursor:default;':''">
                          +
                        </button>
                        <span style="font-size:10px;color:#9ca3af;">/ 4</span>
                      </div>
                    </div>
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2E4\uC81C\uCEE8\uD150\uCE20 ON: \xD7\uBC84\uD2BC\uB9CC ======================== -->
                    <div v-else style="position:relative;">
                      <button @click="handleBtnAction('slot-remove', idx)"
                        style="position:absolute;top:4px;right:4px;z-index:5;width:18px;height:18px;border-radius:50%;border:none;background:rgba(0,0,0,.3);color:#fff;font-size:11px;line-height:1;display:flex;align-items:center;justify-content:center;padding:0;">
                        \u2715
                      </button>
                    </div>
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 ================================ -->
                    <widget-preview :lib="slot" />
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
          :style="uiState.dashDragOver ? 'border-color:#1d4ed8;background:#eff6ff;' : ''">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBE48 \uC0C1\uD0DC ============================================ -->
          <div v-if="!dashItems.length ? (!uiState.dashDragOver) : false"
            style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#d1d5db;pointer-events:none;">
            <span style="font-size:48px;">\u{1F9E9}</span>
            <span style="font-size:13px;">\uC67C\uCABD \uD2B8\uB9AC\uC5D0\uC11C \uC704\uC82F\uC744 \uB4DC\uB798\uADF8\uD558\uC5EC \uBC30\uCE58\uD558\uC138\uC694</span>
          </div>
          <div v-if="uiState.dashDragOver ? (!dashItems.length) : false"
            style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#1d4ed8;font-size:14px;font-weight:700;pointer-events:none;">
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
              <span style="font-size:10px;color:#c4c4c4;letter-spacing:1px;">\u283F\u283F</span>
              <span style="font-size:12px;">{{ wIcon(item.lib.widgetType) }}</span>
              <span style="font-size:11px;background:#f0f4ff;color:#1d4ed8;border:1px solid #dbeafe;border-radius:4px;padding:0 5px;white-space:nowrap;flex-shrink:0;">
                {{ wTypeLabel(item.lib.widgetType) }}
              </span>
              <span style="font-size:11px;font-weight:600;color:#333;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">
                {{ item.lib.name }}
              </span>
              <button @mousedown.stop @click="handleBtnAction('dashItem-remove', item.id)"
                style="flex-shrink:0;width:18px;height:18px;border-radius:50%;border:none;background:#e5e7eb;color:#6b7280;font-size:10px;display:flex;align-items:center;justify-content:center;padding:0;">
                \u2715
              </button>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 ======================================== -->
            <div style="overflow:hidden;" :style="{maxHeight:(item.h-40)+'px'}">
              <widget-preview :lib="item.lib" />
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD06C\uAE30 \uC870\uC808 \uD578\uB4E4 ====================================== -->
            <div
              @mousedown="startItemResize($event, item)"
              style="position:absolute;right:0;bottom:0;width:18px;height:18px;cursor:se-resize;border-radius:0 0 8px 0;overflow:hidden;">
              <div style="width:0;height:0;border-style:solid;border-width:0 0 18px 18px;border-color:transparent transparent #d1d5db transparent;position:absolute;right:0;bottom:0;"></div>
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
  <!-- ===== \u25A1. 2\uB2E8 \uB808\uC774\uC544\uC6C3 ================================================= -->`,components:{WidgetPreview:_WidgetPreview}};
