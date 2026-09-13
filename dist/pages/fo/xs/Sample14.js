window.XsSample14={name:"XsSample14",components:{"category-select-modal":window.CategorySelectModal},setup(){const{reactive:p,computed:v,onMounted:Ne,watch:Le}=Vue,d=p({loading:!1,error:null,previewDate:coUtil.cofToYmd(new Date),activeTab:"grid1",dragSrc:null,dragSrcList:null,dropZoneIdx:-1,spanPopupIdx:-1,popoverKey:null,popoverWidget:null,popoverArea:null,popoverPanel:null,viewportMode:"desktop",previewTime:new Date().toTimeString().slice(0,5),showAreaDrop:!1,showCatModal:!1}),C=p({active_status_opts:[{value:"\uD65C\uC131",label:"\uD65C\uC131"},{value:"\uBE44\uD65C\uC131",label:"\uBE44\uD65C\uC131"}],need_yn_opts:[{value:"Y",label:"\uD544\uC694"},{value:"N",label:"\uBD88\uD544\uC694"}],condition_opts:["\uD56D\uC0C1 \uD45C\uC2DC","\uB85C\uADF8\uC778 \uD544\uC694","\uB85C\uADF8\uC778+VIP","\uB85C\uADF8\uC778+\uC6B0\uC218","\uBE44\uB85C\uADF8\uC778 \uC804\uC6A9"],auth_grade_opts:["\uC77C\uBC18","\uC6B0\uC218","VIP"]}),V=coUtil.cofToYmd(new Date),f=p(new Set),k=p(new Set),g=p(new Set),c=p(new Set),b=p(new Set),S=p(new Map),x=window.useFoAuthStore?window.useFoAuthStore():null,W=x?x.sgIsLoggedIn:!1,_=x&&x.svAuthUser?x.svAuthUser.grade||"\uC77C\uBC18":"",$=x&&x.svAuthUser&&(x.svAuthUser.authNm||x.svAuthUser.memberNm||x.svAuthUser.email)||"",y=p({status:"",condition:"",authrequired:"",authgrade:""}),E={image_banner:"\uC774\uBBF8\uC9C0 \uBC30\uB108",product_slider:"\uC0C1\uD488 \uC2AC\uB77C\uC774\uB354",product:"\uC0C1\uD488",cond_product:"\uC870\uAC74\uC0C1\uD488",chart_bar:"\uCC28\uD2B8(Bar)",chart_line:"\uCC28\uD2B8(Line)",chart_pie:"\uCC28\uD2B8(Pie)",text_banner:"\uD14D\uC2A4\uD2B8 \uBC30\uB108",info_card:"\uC815\uBCF4\uCE74\uB4DC",popup:"\uD31D\uC5C5",file:"\uD30C\uC77C",file_list:"\uD30C\uC77C\uBAA9\uB85D",coupon:"\uCFE0\uD3F0",html_editor:"HTML \uC5D0\uB514\uD130",event_banner:"\uC774\uBCA4\uD2B8",cache_banner:"\uCE90\uC2DC",widget_embed:"\uC704\uC82F"},G={image_banner:"\u{1F5BC}",product_slider:"\u{1F6D2}",product:"\u{1F4E6}",cond_product:"\u{1F50D}",chart_bar:"\u{1F4CA}",chart_line:"\u{1F4C8}",chart_pie:"\u{1F967}",text_banner:"\u{1F4DD}",info_card:"\u2139",popup:"\u{1F4AC}",file:"\u{1F4CE}",file_list:"\u{1F4C1}",coupon:"\u{1F39F}",html_editor:"\u{1F4C4}",event_banner:"\u{1F389}",cache_banner:"\u{1F4B0}",widget_embed:"\u{1F9E9}"},O=["grid1","grid2","grid3","grid4","dashboard"],z={grid1:1,grid2:2,grid3:3,grid4:4},T=e=>Array.from({length:e*2},()=>({widget:null})),m=p({grid1:T(1),grid2:T(2),grid3:T(3),grid4:T(4)}),l=p([]),I=20,s=p({on:!1,idx:-1,sx:0,sy:0,ox:0,oy:0}),a=p({on:!1,idx:-1,sx:0,sy:0,ow:0,oh:0}),Y={image_banner:"#667eea",product_slider:"#e8587a",product:"#e8587a",cond_product:"#1565c0",chart_bar:"#667eea",chart_line:"#667eea",chart_pie:"#667eea",text_banner:"#546e7a",info_card:"#1565c0",popup:"#546e7a",file:"#607d8b",file_list:"#607d8b",coupon:"#e8587a",html_editor:"#263238",event_banner:"#f5576c",cache_banner:"#ef6c00",widget_embed:"#718096"},D=p({top:0,left:0}),Z=(e,i={})=>{if(e==="filter-resetDate")return ce();if(e==="filter-toggleAreaDrop")d.showAreaDrop=!d.showAreaDrop;else if(e==="filter-closeAreaDrop")d.showAreaDrop=!1;else{if(e==="filter-selectAllAreas")return le();if(e==="filter-clearAllAreas")return pe();if(e==="categoryModal-open")d.showCatModal=!0;else if(e==="categoryModal-close")d.showCatModal=!1;else{if(e==="tree-checkAll")return oe();if(e==="tree-clearAll")return de();if(e==="tree-initExpand")return L();if(e==="preview-clear")return De();if(e==="preview-setTab")d.activeTab=i;else if(e==="preview-setViewport")d.viewportMode=i;else{if(e==="popover-close")return We();if(e==="span-popupClose")return he();console.warn("[handleBtnAction] unknown cmd:",e)}}}},X=(e,i={})=>{if(e==="areas-toggle")return ae(i);if(e==="tree-areaToggleExpand")return ee(i);if(e==="tree-areaCheckAll")return re(i);if(e==="tree-panelToggle")return ie(i);if(e==="tree-widgetToggle")return te(i.dispId,i.wi,i.e);if(e==="categoryModal-apply")return P(i);if(e==="preview-cellRemove")return ke(i.tab,i.ci);if(e==="preview-spanToggle")return ue(i.e,i.tab,i.ci);if(e==="preview-spanSet")return we(i.tab,i.ci,i.axis,i.delta);if(e==="preview-dashRemove")return Ie(i);console.warn("[handleSelectAction] unknown cmd:",e)},U=(e,i,t)=>{if(e==="cmPopup-category-pick"){if(t==null){d.showCatModal=!1;return}return P(t)}else console.warn("[fnCallbackModal] unknown popCmd:",e)},M=v(()=>[...b].map(e=>S.get(e)||"").filter(Boolean)),K=v(()=>b.size===0?"\uCE74\uD14C\uACE0\uB9AC":b.size<=2?M.value.join(", "):`${b.size}\uAC1C`),P=e=>{b.clear(),S.clear(),(e||[]).forEach(i=>{const t=coUtil.cofAnd(i,typeof i=="object"),o=t?i.id:i;o!=null&&(b.add(o),coUtil.cofAnd(t,i.nm)&&S.set(o,i.nm))})},q=v(()=>{const e=["\uD56D\uC0C1 \uD45C\uC2DC"];return W?(e.push("\uB85C\uADF8\uC778 \uD544\uC694"),(_==="\uC6B0\uC218"||_==="VIP")&&e.push("\uB85C\uADF8\uC778+\uC6B0\uC218"),_==="VIP"&&e.push("\uB85C\uADF8\uC778+VIP"),e):(e.push("\uBE44\uB85C\uADF8\uC778 \uC804\uC6A9"),e)}),F=e=>E[e]||e||"-",H=e=>G[e]||"\u25AA",A=v(()=>{var e;return(((e=window.useFoCodeStore)==null?void 0:e.call(window).svCodes)||[]).filter(i=>i.codeGrp==="DISP_AREA"&&i.useYn==="Y").sort((i,t)=>i.sortOrd-t.sortOrd)}),J=e=>{const i=d.previewDate;if(!i)return!0;const t=`${i}T${d.previewTime||"00:00"}`,o=r=>String(r||"").replace(" ","T").slice(0,16);return!(e.dispStartDt&&t<o(e.dispStartDt)||e.dispEndDt&&t>o(e.dispEndDt))},Q=e=>{if(y.status&&e.status!==y.status||!J(e)||y.condition&&(e.condition||"\uD56D\uC0C1 \uD45C\uC2DC")!==y.condition||y.authrequired==="Y"&&!e.authRequired||y.authrequired==="N"&&e.authRequired||y.authgrade&&e.authGrade!==y.authgrade)return!1;if(b.size>0){const i=M.value;if(!(i.some(o=>e.name.includes(o))||(e.rows||[]).some(o=>i.some(r=>(o.widgetNm||"").includes(r)))))return!1}return!0},N=v(()=>A.value.filter(e=>f.size===0||f.has(e.codeValue)).map(e=>{const i=[].filter(t=>t.area===e.codeValue&&Q(t)).sort((t,o)=>(t.sortOrder||0)-(o.sortOrder||0));return{...e,panels:i,uiState:d,codes:C}})),L=()=>A.value.forEach(e=>k.add(e.codeValue)),ee=e=>{k.has(e)?k.delete(e):k.add(e)},ie=e=>{const i=e.dispId,t=e.rows||[];g.has(i)?(g.delete(i),t.forEach((o,r)=>c.delete(`${i}_${r}`))):(g.add(i),t.forEach((o,r)=>c.add(`${i}_${r}`)))},te=(e,i,t)=>{t&&t.stopPropagation();const o=`${e}_${i}`;c.has(o)?c.delete(o):c.add(o)},oe=()=>{N.value.forEach(e=>e.panels.forEach(i=>{g.add(i.dispId),(i.rows||[]).forEach((t,o)=>c.add(`${i.dispId}_${o}`))}))},de=()=>{g.clear(),c.clear()},B=e=>e.panels.length>0&&e.panels.every(i=>g.has(i.dispId))&&e.panels.every(i=>(i.rows||[]).every((t,o)=>c.has(`${i.dispId}_${o}`))),re=e=>{B(e)?e.panels.forEach(i=>{g.delete(i.dispId),(i.rows||[]).forEach((t,o)=>c.delete(`${i.dispId}_${o}`))}):e.panels.forEach(i=>{g.add(i.dispId),(i.rows||[]).forEach((t,o)=>c.add(`${i.dispId}_${o}`))})},ne=e=>g.has(e.dispId)&&((e.rows||[]).length===0||(e.rows||[]).every((i,t)=>c.has(`${e.dispId}_${t}`))),se=v(()=>f.size===0?"\uC804\uCCB4 \uC601\uC5ED":`${f.size}\uAC1C \uC120\uD0DD`),ae=e=>{f.has(e)?f.delete(e):f.add(e)},le=()=>{A.value.forEach(e=>f.add(e.codeValue))},pe=()=>{f.clear()},ce=()=>{d.previewDate=V,d.previewTime=new Date().toTimeString().slice(0,5)},fe=e=>Y[e]||"#888",ge=v(()=>d.activeTab==="dashboard"?l:(m[d.activeTab]||[]).filter(e=>e.widget)),xe=(e,i,t,o)=>{d.dragSrc={...e,_dispId:i.dispId,_panelNm:i.name,_area:t.codeLabel},d.dragSrcList=null,o.dataTransfer.effectAllowed="copy"},ve=(e,i)=>{const t=(e.panels||[]).flatMap(o=>(o.rows||[]).map(r=>({...r,_dispId:o.dispId,_panelNm:o.name,_area:e.codeLabel})));d.dragSrcList=t,d.dragSrc=null,i.dataTransfer.effectAllowed="copy",i.dataTransfer.setData("text/plain","area:"+t.length)},ye=(e,i,t)=>{const o=(e.rows||[]).map(r=>({...r,_dispId:e.dispId,_panelNm:e.name,_area:i.codeLabel}));d.dragSrcList=o,d.dragSrc=null,t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("text/plain","panel:"+o.length)},be=()=>{d.dragSrc=null,d.dragSrcList=null,d.dropZoneIdx=-1},ue=(e,i,t)=>{e.stopPropagation();const o=i+"_"+t;d.spanPopupIdx=d.spanPopupIdx===o?null:o},he=()=>{d.spanPopupIdx=null},we=(e,i,t,o)=>{const r=m[e][i];if(!r||!r.widget)return;const n=z[e]||1;t==="col"&&(r.colSpan=Math.max(1,Math.min(n,(r.colSpan||1)+o))),t==="row"&&(r.rowSpan=Math.max(1,Math.min(4,(r.rowSpan||1)+o)))},j=(e,i)=>{let t=0;const o=Math.ceil(e.length/i);for(let r=o-1;r>=0&&e.slice(r*i,(r+1)*i).every(n=>!n.widget);r--)t++;for(;t<2;){for(let r=0;r<i;r++)e.push({widget:null});t++}},me=(e,i,t)=>{t.preventDefault();const o=z[e],r=m[e];if(d.dragSrcList){const n=d.dragSrcList;if(n.length>40){window.alert(`\uC704\uC82F\uC774 ${n.length}\uAC1C\uC785\uB2C8\uB2E4. \uD55C \uBC88\uC5D0 \uCD5C\uB300 40\uAC1C\uAE4C\uC9C0\uB9CC \uBC30\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),d.dragSrcList=null,d.dropZoneIdx=-1;return}let w=0;for(let u=i;u<r.length&&w<n.length;u++)r[u].widget||(r[u]={widget:{...n[w++]},colSpan:1,rowSpan:1});for(;w<n.length;){const u=r.length;for(let h=0;h<o;h++)r.push({widget:null});for(let h=0;h<o&&w<n.length;h++)r[u+h]={widget:{...n[w++]},colSpan:1,rowSpan:1}}j(r,o),d.dragSrcList=null,d.dropZoneIdx=-1;return}d.dragSrc&&(r[i]={widget:{...d.dragSrc},colSpan:1,rowSpan:1},j(r,o),d.dragSrc=null,d.dropZoneIdx=-1)},ke=(e,i)=>{m[e][i]={widget:null}},ze=e=>{e.preventDefault();const i=e.currentTarget.getBoundingClientRect(),t=I;if(d.dragSrcList){const n=d.dragSrcList;if(n.length>40){window.alert(`\uC704\uC82F\uC774 ${n.length}\uAC1C\uC785\uB2C8\uB2E4. \uD55C \uBC88\uC5D0 \uCD5C\uB300 40\uAC1C\uAE4C\uC9C0\uB9CC \uBC30\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`),d.dragSrcList=null,d.dropZoneIdx=-1;return}let w=Math.max(0,Math.round((e.clientX-i.left-80)/t)*t),u=Math.max(0,Math.round((e.clientY-i.top-14)/t)*t);n.forEach((h,R)=>{l.push({widget:{...h},x:w+R%4*220,y:u+Math.floor(R/4)*180,w:200,h:160})}),d.dragSrcList=null,d.dropZoneIdx=-1;return}if(!d.dragSrc)return;const o=Math.max(0,Math.round((e.clientX-i.left-80)/t)*t),r=Math.max(0,Math.round((e.clientY-i.top-14)/t)*t);l.push({widget:{...d.dragSrc},x:o,y:r,w:200,h:160}),d.dragSrc=null,d.dropZoneIdx=-1},_e=(e,i)=>{s.on=!0,s.idx=e,s.sx=i.clientX,s.sy=i.clientY,s.ox=l[e].x,s.oy=l[e].y,i.preventDefault()},Te=(e,i)=>{a.on=!0,a.idx=e,a.sx=i.clientX,a.sy=i.clientY,a.ow=l[e].w,a.oh=l[e].h,i.preventDefault(),i.stopPropagation()},Ae=e=>{if(s.on&&s.idx>=0){const i=I,t=e.clientX-s.sx,o=e.clientY-s.sy;l[s.idx].x=Math.max(0,Math.round((s.ox+t)/i)*i),l[s.idx].y=Math.max(0,Math.round((s.oy+o)/i)*i)}if(a.on&&a.idx>=0){const i=I,t=e.clientX-a.sx,o=e.clientY-a.sy;l[a.idx].w=Math.max(120,Math.round((a.ow+t)/i)*i),l[a.idx].h=Math.max(80,Math.round((a.oh+o)/i)*i)}},Se=()=>{s.on=!1,s.idx=-1,a.on=!1,a.idx=-1},Ie=e=>{l.splice(e,1)},De=()=>{const e=d.activeTab;if(z[e]){const i=m[e],t=z[e];i.splice(0,i.length);for(let o=0;o<t*2;o++)i.push({widget:null})}else e==="dashboard"&&l.splice(0,l.length)},Ce=(e,i,t,o,r)=>{if(r.stopPropagation(),d.popoverKey===o){d.popoverKey=null;return}const n=r.currentTarget.getBoundingClientRect();D.top=n.bottom+6,D.left=Math.min(n.left,window.innerWidth-316),d.popoverWidget=e,d.popoverArea=t,d.popoverPanel=i,d.popoverKey=o},We=()=>{d.popoverKey=null},Me=v(()=>({grid1:"repeat(1,1fr)",grid2:"repeat(auto-fill,minmax(max(calc(50% - 5px),260px),1fr))",grid3:"repeat(auto-fill,minmax(max(calc(33.333% - 6px),190px),1fr))",grid4:"repeat(auto-fill,minmax(max(calc(25% - 6px),220px),1fr))"})[d.activeTab]||"repeat(1,1fr)"),Pe=v(()=>d.viewportMode==="mobile"?"375px":d.viewportMode==="tablet"?"768px":null);return L(),{uiState:d,codes:C,searchParam:y,handleBtnAction:Z,handleSelectAction:X,fnCallbackModal:U,selectedAreas:f,cfAllAreas:A,cfAreaBtnLabel:se,selectedCatIds:b,cfCatBtnLabel:K,isLoggedIn:W,userGrade:_,userNm:$,cfAccessibleConds:q,cfStructAreaList:N,expandedAreas:k,checkedPanels:g,checkedWidgets:c,isAreaAllChecked:B,isPanelAllChecked:ne,TABS:O,GRID_COLS:z,gridCells:m,wColor:fe,cfPreviewWidgets:ge,onWidgetDragStart:xe,onAreaNodeDragStart:ve,onPanelNodeDragStart:ye,onDragEnd:be,onCellDrop:me,dashItems:l,dashDrag:s,dashResize:a,onDashDrop:ze,onDashItemMd:_e,onDashResizeMd:Te,onDashMm:Ae,onDashMu:Se,popoverPos:D,showWidgetInfo:Ce,cfAutoGridColumns:Me,cfViewportWidth:Pe,wLabel:F,wIcon:H}},template:`
<fo-page bare>
<div style="padding:clamp(12px,3vw,24px);">
  <!-- ===== \u25A0. \uC81C\uBAA9 ====================================================== -->
  <div style="font-size:16px;font-weight:700;margin-bottom:12px;">
    14. \uC804\uC2DC\uC601\uC5ED \uAD6C\uC870 \uD2B8\uB9AC \uBCF4\uAE30
    <span style="font-size:12px;font-weight:400;color:#888;margin-left:8px;">
      \uC601\uC5ED &gt; \uD328\uB110 &gt; \uC704\uC82F \uAD6C\uC870 \uC120\uD0DD
    </span>
  </div>
  <!-- ===== \u25A1. \uC81C\uBAA9 ====================================================== -->
  <!-- ===== \u25A0. \uD544\uD130 \uBC14 ==================================================== -->
  <div style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:12px 16px;margin-bottom:8px;">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">
          \u{1F4C5} \uC804\uC2DC\uC77C\uC2DC
        </span>
        <input type="date" v-model="uiState.previewDate" style="font-size:12px;padding:3px 6px;border:1px solid #ddd;border-radius:4px;" />
        <input type="time" v-model="uiState.previewTime" style="font-size:12px;padding:3px 6px;border:1px solid #ddd;border-radius:4px;" />
        <button @click="handleBtnAction('filter-resetDate')" style="font-size:11px;padding:3px 8px;border:1px solid #ccc;border-radius:8px;background:#fff;cursor:pointer;color:#555;">
          \uD604\uC7AC
        </button>
      </div>
      <div style="width:1px;height:24px;background:#e0e0e0;">
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uD0DC ================================================== -->
      <div style="display:flex;align-items:center;gap:4px;">
        <span style="font-size:12px;font-weight:600;color:#555;">
          \uC0C1\uD0DC
        </span>
        <select v-model="searchParam.status" style="font-size:12px;padding:3px 5px;border:1px solid #ddd;border-radius:4px;width:76px;">
          <option value="">\uC804\uCCB4</option>
          <option v-for="o in codes.active_status_opts" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uB178\uCD9C\uC870\uAC74 ================================================ -->
      <div style="display:flex;align-items:center;gap:4px;">
        <span style="font-size:12px;font-weight:600;color:#555;">
          \uB178\uCD9C\uC870\uAC74
        </span>
        <select v-model="searchParam.condition" style="font-size:12px;padding:3px 5px;border:1px solid #ddd;border-radius:4px;width:112px;">
          <option value="">\uC804\uCCB4</option>
          <option v-for="c in codes.condition_opts" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC778\uC99D\uD544\uC694 ================================================ -->
      <div style="display:flex;align-items:center;gap:4px;">
        <span style="font-size:12px;font-weight:600;color:#555;">
          \uC778\uC99D\uD544\uC694
        </span>
        <select v-model="searchParam.authrequired" style="font-size:12px;padding:3px 5px;border:1px solid #ddd;border-radius:4px;width:72px;">
          <option value="">\uC804\uCCB4</option>
          <option v-for="o in codes.need_yn_opts" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uB4F1\uAE09\uC81C\uD55C ================================================ -->
      <div style="display:flex;align-items:center;gap:4px;">
        <span style="font-size:12px;font-weight:600;color:#555;">
          \uB4F1\uAE09\uC81C\uD55C
        </span>
        <select v-model="searchParam.authgrade" style="font-size:12px;padding:3px 5px;border:1px solid #ddd;border-radius:4px;width:72px;">
          <option value="">\uC804\uCCB4</option>
          <option v-for="g in codes.auth_grade_opts" :key="g" :value="g">{{ g }}\u2191</option>
        </select>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCE74\uD14C\uACE0\uB9AC ================================================ -->
      <button @click="handleBtnAction('categoryModal-open')"
        style="font-size:12px;padding:3px 10px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;display:flex;align-items:center;gap:4px;"
        :style="selectedCatIds.size>0?'border-color:#e8587a;color:#e8587a;font-weight:600;':''">
        \u{1F4C2} {{ cfCatBtnLabel }}
      </button>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD654\uBA74\uC601\uC5ED \uBA40\uD2F0\uC120\uD0DD =========================================== -->
      <div style="margin-left:auto;position:relative;">
        <button @click="handleBtnAction('filter-toggleAreaDrop')"
          style="font-size:12px;padding:4px 12px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;display:flex;align-items:center;gap:6px;"
          :style="selectedAreas.size>0?'border-color:#e8587a;color:#e8587a;font-weight:600;':''">
          <span>
            \u{1F5C2} {{ cfAreaBtnLabel }}
          </span>
          <span style="font-size:10px;">
            {{ uiState.showAreaDrop ? '\u25B2' : '\u25BC' }}
          </span>
        </button>
        <div v-if="uiState.showAreaDrop" @click="handleBtnAction('filter-closeAreaDrop')" style="position:fixed;inset:0;z-index:99;">
        </div>
        <div v-if="uiState.showAreaDrop" style="position:absolute;right:0;top:calc(100% + 4px);z-index:100;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12);min-width:220px;max-height:300px;overflow-y:auto;padding:8px 0;">
          <div style="display:flex;gap:6px;padding:6px 12px;border-bottom:1px solid #f0f0f0;">
            <button @click.stop="handleBtnAction('filter-selectAllAreas')" style="font-size:11px;padding:2px 8px;border:1px solid #1565c0;border-radius:6px;background:#e3f2fd;color:#1565c0;cursor:pointer;">
              \uC804\uCCB4\uC120\uD0DD
            </button>
            <button @click.stop="handleBtnAction('filter-clearAllAreas')" style="font-size:11px;padding:2px 8px;border:1px solid #ddd;border-radius:6px;background:#fff;color:#888;cursor:pointer;">
              \uC804\uCCB4\uD574\uC81C
            </button>
          </div>
          <div v-for="a in cfAllAreas" :key="a.codeValue" @click.stop="handleSelectAction('areas-toggle', a.codeValue)"
            style="display:flex;align-items:center;gap:8px;padding:6px 12px;cursor:pointer;"
            :style="selectedAreas.has(a.codeValue)?'background:#fff8f8;':''">
            <div style="width:14px;height:14px;border-radius:3px;border:2px solid;flex-shrink:0;display:flex;align-items:center;justify-content:center;"
              :style="selectedAreas.has(a.codeValue)?'border-color:#e8587a;background:#e8587a;':'border-color:#ccc;background:#fff;'">
              <span v-if="selectedAreas.has(a.codeValue)" style="color:#fff;font-size:9px;">
                \u2713
              </span>
            </div>
            <code style="font-size:10px;background:#f5f5f5;padding:1px 4px;border-radius:3px;">{{ a.codeValue }}</code>
              <span style="font-size:12px;">
                {{ a.codeLabel }}
              </span>
            </div>
            <div style="border-top:1px solid #f0f0f0;padding:6px 12px;">
              <button @click.stop="handleBtnAction('filter-closeAreaDrop')" style="font-size:11px;width:100%;padding:4px;border:1px solid #e0e0e0;border-radius:5px;background:#f8f8f8;color:#666;cursor:pointer;">
                \uB2EB\uAE30
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0. \uD604\uC7AC \uC0AC\uC6A9\uC790 \uC815\uBCF4 ============================================= -->
      <div style="margin-top:8px;padding:7px 12px;background:#f8f9fa;border-radius:6px;border-left:3px solid #aaa;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <span style="font-size:11px;color:#888;font-weight:600;">
          \uD604\uC7AC \uC0AC\uC6A9\uC790
        </span>
        <span v-if="isLoggedIn" style="font-size:11px;background:#e8f5e9;color:#2e7d32;border-radius:6px;padding:1px 7px;font-weight:600;">
          \uB85C\uADF8\uC778
        </span>
        <span v-else style="font-size:11px;background:#f5f5f5;color:#999;border-radius:6px;padding:1px 7px;">
          \uBE44\uB85C\uADF8\uC778
        </span>
        <span v-if="userNm" style="font-size:11px;color:#555;">
          {{ userNm }}
        </span>
        <span v-if="isLoggedIn ? userGrade : false" style="font-size:11px;background:#e3f2fd;color:#1565c0;border-radius:6px;padding:1px 7px;">
        \uB4F1\uAE09: {{ userGrade }}
      </span>
      <span style="font-size:11px;color:#aaa;">
        \uC811\uADFC \uAC00\uB2A5 \uC870\uAC74:
      </span>
      <span v-for="c in cfAccessibleConds" :key="c" style="font-size:11px;background:#fff8e1;color:#f57c00;border-radius:6px;padding:1px 7px;">
        {{ c }}
      </span>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uD604\uC7AC \uC0AC\uC6A9\uC790 \uC815\uBCF4 ============================================= -->
  <!-- ===== \u25A1. \uD544\uD130 \uBC14 ==================================================== -->
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap;">
    <!-- ===== \u25A0.\u25A0. \uC88C: \uAD6C\uC870 \uD2B8\uB9AC ============================================== -->
    <div style="flex:3;min-width:280px;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC870\uC791 \uBC14 ================================================ -->
      <div style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:8px 12px;margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <span style="font-size:12px;font-weight:600;color:#555;">
          \uD328\uB110
        </span>
        <button @click="handleBtnAction('tree-checkAll')" style="font-size:11px;padding:2px 8px;border:1px solid #1565c0;border-radius:6px;background:#e3f2fd;color:#1565c0;cursor:pointer;">
          \uC804\uCCB4\uC120\uD0DD
        </button>
        <button @click="handleBtnAction('tree-clearAll')" style="font-size:11px;padding:2px 8px;border:1px solid #ddd;border-radius:6px;background:#fff;color:#888;cursor:pointer;">
          \uC804\uCCB4\uD574\uC81C
        </button>
        <span style="font-size:11px;color:#aaa;">
          {{ checkedPanels.size }}\uAC1C \uC120\uD0DD\uB428
        </span>
        <span style="width:1px;height:18px;background:#e0e0e0;display:inline-block;">
        </span>
        <span style="font-size:12px;font-weight:600;color:#555;">
          \uC704\uC82F
        </span>
        <span style="font-size:11px;color:#aaa;">
          {{ checkedWidgets.size }}\uAC1C \uC120\uD0DD\uB428
        </span>
        <button @click="handleBtnAction('tree-initExpand')" style="font-size:11px;padding:2px 8px;border:1px solid #ddd;border-radius:6px;background:#fff;color:#666;cursor:pointer;margin-left:auto;">
          \uC804\uCCB4 \uD3BC\uCE58\uAE30
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD2B8\uB9AC ================================================== -->
      <div v-if="cfStructAreaList.length===0" style="text-align:center;padding:40px;color:#ccc;font-size:13px;">
        \uB4F1\uB85D\uB41C \uC601\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <div v-for="area in cfStructAreaList" :key="area.codeValue" style="background:#fff;border:1px solid #e0e0e0;border-radius:6px;margin-bottom:8px;overflow:hidden;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED \uD5E4\uB354 ============================================= -->
        <div style="display:flex;align-items:center;gap:8px;padding:9px 14px;background:linear-gradient(90deg,#2d2d2d,#444);color:#fff;cursor:grab;user-select:none;"
          draggable="true"
          @dragstart="onAreaNodeDragStart(area, $event)"
          @dragend="onDragEnd"
          @click="handleSelectAction('tree-areaToggleExpand', area.codeValue)">
          <div @click.stop="handleSelectAction('tree-areaCheckAll', area)" style="width:15px;height:15px;border-radius:3px;border:2px solid;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:pointer;"
            :style="isAreaAllChecked(area)?'border-color:#f6ad55;background:#f6ad55;':'border-color:rgba(255,255,255,.4);background:transparent;'">
            <span v-if="isAreaAllChecked(area)" style="color:#333;font-size:9px;">
              \u2713
            </span>
          </div>
          <span style="font-size:9px;background:rgba(99,179,237,.35);color:#bee3f8;border:1px solid rgba(99,179,237,.4);border-radius:3px;padding:1px 5px;">
            \uC601\uC5ED
          </span>
          <code style="font-size:11px;background:rgba(255,255,255,.15);padding:2px 7px;border-radius:4px;">{{ area.codeValue }}</code>
            <span style="font-size:13px;font-weight:700;">
              {{ area.codeLabel }}
            </span>
            <span style="margin-left:auto;font-size:11px;opacity:.6;">
              \uD328\uB110 {{ area.panels.length }}\uAC1C
            </span>
            <span style="font-size:11px;opacity:.5;">
              {{ expandedAreas.has(area.codeValue) ? '\u25B2' : '\u25BC' }}
            </span>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD328\uB110 \uBAA9\uB85D ============================================= -->
          <div v-show="expandedAreas.has(area.codeValue)">
            <div v-if="area.panels.length===0" style="padding:12px 18px;font-size:12px;color:#bbb;">
              \uD574\uB2F9 \uB0A0\uC9DC \uD65C\uC131 \uD328\uB110 \uC5C6\uC74C
            </div>
            <div v-for="(p, pi) in area.panels" :key="p.dispId" @click="handleSelectAction('tree-panelToggle', p)"
            draggable="true"
            @dragstart.stop="onPanelNodeDragStart(p, area, $event)"
            @dragend="onDragEnd"
            style="display:flex;align-items:flex-start;gap:8px;padding:8px 14px;cursor:grab;user-select:none;border-top:1px solid #f0f0f0;transition:background .1s;"
            :style="checkedPanels.has(p.dispId)?'background:#fff8e1;':''">
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD328\uB110 \uCCB4\uD06C\uBC15\uC2A4 ======================================= -->
              <div style="margin-top:2px;width:14px;height:14px;border-radius:3px;border:2px solid;flex-shrink:0;display:flex;align-items:center;justify-content:center;"
              :style="isPanelAllChecked(p)?'border-color:#f59e0b;background:#f59e0b;':checkedPanels.has(p.dispId)?'border-color:#f59e0b;background:#fde68a;':'border-color:#ccc;background:#fff;'">
                <span v-if="isPanelAllChecked(p)" style="color:#fff;font-size:9px;">
                  \u2713
                </span>
                <span v-else-if="checkedPanels.has(p.dispId)" style="color:#f59e0b;font-size:9px;font-weight:900;">
                  \u2212
                </span>
              </div>
              <div style="flex:1;min-width:0;">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD328\uB110 \uC815\uBCF4 ======================================= -->
                <div style="display:flex;align-items:center;gap:5px;margin-bottom:4px;flex-wrap:wrap;">
                  <span style="font-size:9px;background:#e8f5e9;color:#2e7d32;border:1px solid #a5d6a7;border-radius:3px;padding:0 4px;">
                    \uD328\uB110
                  </span>
                  <code style="font-size:9px;background:#f5f5f5;padding:1px 4px;border-radius:3px;color:#666;">
                  #{{ String(p.dispId).padStart(4,'0') }}
                </code>
                    <span style="font-size:12px;font-weight:700;color:#222;">
                      {{ p.name }}
                    </span>
                    <span style="font-size:10px;background:#e3f2fd;color:#1565c0;border-radius:8px;padding:1px 6px;">
                      {{ p.condition || '\uD56D\uC0C1 \uD45C\uC2DC' }}
                    </span>
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F \uBAA9\uB85D ======================================= -->
                  <div style="display:flex;flex-direction:column;gap:2px;padding-left:2px;">
                    <span v-if="!p.rows || p.rows.length===0" style="font-size:11px;color:#ccc;">
                      (\uC704\uC82F \uC5C6\uC74C)
                    </span>
                    <div v-for="(w, wi) in (p.rows||[])" :key="wi" @click.stop="handleSelectAction('tree-widgetToggle', { dispId: p.dispId, wi, e: $event })"
                  draggable="true"
                  @dragstart="onWidgetDragStart(w, p, area, $event)"
                  @dragend="onDragEnd"
                  style="display:flex;align-items:center;gap:5px;padding:2px 5px;border-radius:4px;cursor:grab;transition:background .1s;"
                  :style="checkedWidgets.has(p.dispId + '_' + wi)?'background:#fff3e0;':'background:transparent;'">
                      <div style="width:12px;height:12px;border-radius:3px;border:1.5px solid;flex-shrink:0;display:flex;align-items:center;justify-content:center;"
                    :style="checkedWidgets.has(p.dispId + '_' + wi)?'border-color:#f59e0b;background:#f59e0b;':'border-color:#ccc;background:#fff;'">
                        <span v-if="checkedWidgets.has(p.dispId + '_' + wi)" style="color:#fff;font-size:8px;">
                          \u2713
                        </span>
                      </div>
                      <span style="font-size:9px;background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:3px;padding:0 3px;flex-shrink:0;">
                        \uC704\uC82F
                      </span>
                      <span style="font-size:10px;">
                        {{ wIcon(w.widgetType) }}
                      </span>
                      <span style="font-size:11px;color:#e65100;">
                        {{ wLabel(w.widgetType) }}
                      </span>
                      <span v-if="w.widgetNm" style="font-size:10px;color:#777;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                        {{ w.widgetNm }}
                      </span>
                      <button @click.stop="showWidgetInfo(w, p, area, p.dispId+'_'+wi, $event)"
                    style="border:none;background:none;cursor:pointer;font-size:13px;padding:0 2px;line-height:1;margin-left:auto;flex-shrink:0;transition:color .1s;"
                    :style="popoverKey===p.dispId+'_'+wi?'color:#1a73e8;opacity:1;':'color:#aaa;opacity:.6;'"
                    title="\uC704\uC82F \uC815\uBCF4 \uBCF4\uAE30">
                        \u24D8
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ===== \u25A1.\u25A1. \uC88C: \uAD6C\uC870 \uD2B8\uB9AC ============================================== -->
        <!-- ===== \u25A0.\u25A0. \uC6B0: \uC704\uC82F \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30 (\uB4DC\uB798\uADF8&\uB4DC\uB86D) =============================== -->
        <div style="flex:6;min-width:280px;max-height:80vh;overflow-y:auto;">
          <div style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;margin-bottom:8px;position:sticky;top:0;z-index:10;overflow:hidden;">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD0C0\uC774\uD2C0 + \uCD08\uAE30\uD654 ========================================= -->
            <div style="display:flex;align-items:center;padding:10px 14px 6px;">
              <span style="font-size:13px;font-weight:700;color:#333;">
                \u{1F9E9} \uC704\uC82F \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30
              </span>
              <div style="margin-left:auto;display:flex;align-items:center;gap:8px;">
                <span style="font-size:11px;color:#aaa;">
                  {{ cfPreviewWidgets.length }}\uAC1C
                </span>
                <button @click="handleBtnAction('preview-clear')"
              style="font-size:11px;padding:2px 10px;border:1px solid #ddd;border-radius:6px;background:#fff;color:#888;cursor:pointer;">
                  \uCD08\uAE30\uD654
                </button>
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD0ED + \uBDF0\uD3EC\uD2B8 \uD1A0\uAE00 ======================================== -->
            <div style="display:flex;align-items:center;border-top:1px solid #f0f0f0;padding:0 10px;">
              <div style="display:flex;flex:1;">
                <button v-for="tab in TABS" :key="tab" @click="handleBtnAction('preview-setTab', tab)"
              style="font-size:12px;padding:7px 14px;border:none;border-bottom:2px solid transparent;background:none;cursor:pointer;margin-bottom:-1px;transition:color .15s,border-color .15s;white-space:nowrap;"
              :style="activeTab===tab?'color:#1a73e8;border-bottom-color:#1a73e8;font-weight:700;':'color:#999;'">
                  {{ tab }}
                </button>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2E4\uC81C\uCEE8\uD150\uCE20 \uD1A0\uAE00 + \uBDF0\uD3EC\uD2B8 \uD1A0\uAE00 (dashboard \uC81C\uC678) ================ -->
              <div v-if="activeTab!=='dashboard'" style="display:flex;gap:3px;padding:4px 0 4px 10px;border-left:1px solid #f0f0f0;margin-left:4px;flex-shrink:0;align-items:center;">
                <button @click="showRealContent=!showRealContent"
              style="font-size:11px;padding:2px 8px;border-radius:5px;border:1px solid #d1d5db;cursor:pointer;white-space:nowrap;transition:all .15s;margin-right:6px;"
              :style="showRealContent?'background:#059669;color:#fff;border-color:#059669;':'background:#fff;color:#6b7280;'">
                  {{ showRealContent ? '\u2705 \uC2E4\uC81C\uCEE8\uD150\uCE20' : '\u{1F441} \uC2E4\uC81C\uCEE8\uD150\uCE20' }}
                </button>
                <div style="width:1px;height:18px;background:#e5e7eb;margin-right:3px;">
                </div>
                <button @click="handleBtnAction('preview-setViewport', 'desktop')"
              style="font-size:11px;padding:2px 7px;border-radius:5px;border:1px solid #d1d5db;cursor:pointer;white-space:nowrap;transition:all .15s;"
              :style="viewportMode==='desktop'?'background:#1a73e8;color:#fff;border-color:#1a73e8;':'background:#fff;color:#6b7280;'">
                  \u{1F5A5} PC
                </button>
                <button @click="handleBtnAction('preview-setViewport', 'tablet')"
              style="font-size:11px;padding:2px 7px;border-radius:5px;border:1px solid #d1d5db;cursor:pointer;white-space:nowrap;transition:all .15s;"
              :style="viewportMode==='tablet'?'background:#1a73e8;color:#fff;border-color:#1a73e8;':'background:#fff;color:#6b7280;'">
                  \u{1F4DF} \uD0DC\uBE14\uB9BF
                </button>
                <button @click="handleBtnAction('preview-setViewport', 'mobile')"
              style="font-size:11px;padding:2px 7px;border-radius:5px;border:1px solid #d1d5db;cursor:pointer;white-space:nowrap;transition:all .15s;"
              :style="viewportMode==='mobile'?'background:#1a73e8;color:#fff;border-color:#1a73e8;':'background:#fff;color:#6b7280;'">
                  \u{1F4F1} \uBAA8\uBC14\uC77C
                </button>
              </div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0. \uBDF0\uD3EC\uD2B8 \uB798\uD37C (dashboard \uC81C\uC678) =============================== -->
          <template v-if="activeTab!=='dashboard'">
            <div :style="{
          width: cfViewportWidth || '100%',
          maxWidth: cfViewportWidth || '100%',
          margin: '0 auto',
          transition: 'width .3s, max-width .3s',
          }">
              <div v-if="cfViewportWidth" style="text-align:center;margin-bottom:6px;font-size:11px;color:#9ca3af;font-weight:600;padding-top:8px;">
                {{ viewportMode==='mobile' ? '\u{1F4F1} 375px' : '\u{1F4DF} 768px' }}
              </div>
              <div :style="{
            border: cfViewportWidth ? '2px solid #d1d5db' : 'none',
            borderRadius: cfViewportWidth ? '10px' : '0',
            padding: cfViewportWidth ? '10px' : '0',
            background: '#fff',
            boxShadow: cfViewportWidth ? '0 4px 16px rgba(0,0,0,.1)' : 'none',
            }">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. ===== grid1 / grid2 / grid3 / grid4 ===== ===== -->
                <template v-if="GRID_COLS[activeTab]">
                  <div @click="closeSpanPopup" :style="{ display:'grid', gridTemplateColumns: cfAutoGridColumns, gap: '8px' }">
                    <template v-for="(cell, ci) in gridCells[activeTab]" :key="ci">
                      <div v-if="!showRealContent || cell.widget" @dragover.prevent="dropZoneIdx=ci" @dragleave="dropZoneIdx=-1" @drop="onCellDrop(activeTab, ci, $event)" :style="[ cell.widget ? (showRealContent ? 'border:none;background:transparent;min-height:0;' : 'border:1px solid #e0e0e0;background:#fff;min-height:130px;') : dropZoneIdx===ci ? 'border:2px dashed #1a73e8;background:#e8f0fe;min-height:60px;' : 'border:2px dashed #e0e0e0;background:#fafafa;min-height:60px;', (cell.widget ? (cell.colSpan||1) > 1 : false) ? { gridColumn: 'span ' + (cell.colSpan||1) } : {}, (cell.widget ? (cell.rowSpan||1) > 1 : false) ? { gridRow: 'span ' + (cell.rowSpan||1) } : {}, ]" style="border-radius:8px;overflow:hidden;transition:border .15s,background .15s;position:relative;">
                      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F \uC788\uC74C ================================= -->
                      <template v-if="cell.widget">
                        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAD00\uB9AC\uC790 \uD5E4\uB354 (\uC2E4\uC81C\uCEE8\uD150\uCE20 OFF \uC2DC) ================ -->
                        <template v-if="!showRealContent">
                          <div :style="'height:4px;background:'+wColor(cell.widget.widgetType)+';'">
                          </div>
                          <div style="display:flex;align-items:center;gap:4px;padding:5px 8px 0;margin-bottom:4px;">
                            <span style="font-size:9px;background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:3px;padding:1px 4px;white-space:nowrap;flex-shrink:0;">
                              {{ wIcon(cell.widget.widgetType) }} {{ wLabel(cell.widget.widgetType) }}
                            </span>
                            <span style="font-size:10px;font-weight:600;color:#222;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                              {{ cell.widget.widgetNm }}
                            </span>
                            <button @click="toggleSpanPopup($event, activeTab, ci)"
                            :title="'\uC5F4 ' + (cell.colSpan||1) + ' \xD7 \uD589 ' + (cell.rowSpan||1)"
                            style="flex-shrink:0;width:20px;height:20px;border-radius:4px;border:1px solid #e0e0e0;cursor:pointer;font-size:12px;display:flex;align-items:center;justify-content:center;padding:0;transition:all .15s;"
                            :style="spanPopupIdx===activeTab+'_'+ci ? 'background:#1a73e8;color:#fff;border-color:#1a73e8;' : 'background:#f9fafb;color:#888;'">
                              \u2699
                            </button>
                            <button @click="removeCellWidget(activeTab, ci)" style="border:none;background:none;color:#ccc;cursor:pointer;font-size:15px;padding:0;line-height:1;flex-shrink:0;">
                              \xD7
                            </button>
                          </div>
                          <div style="font-size:9px;color:#bbb;margin-bottom:4px;padding:0 8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                            {{ cell.widget._area }} \xB7 {{ cell.widget._panelNm }}
                          </div>
                          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. span \uC124\uC815 \uD31D\uC5C5 ======================== -->
                          <div v-if="spanPopupIdx===activeTab+'_'+ci" @click.stop
                          style="position:absolute;top:34px;right:6px;z-index:20;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12);padding:12px 14px;min-width:170px;">
                            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                              <span style="font-size:11px;font-weight:700;color:#374151;">
                                \uADF8\uB9AC\uB4DC \uC2A4\uD32C \uC124\uC815
                              </span>
                              <button @click="closeSpanPopup" style="border:none;background:none;cursor:pointer;font-size:13px;color:#9ca3af;padding:0;line-height:1;">
                                \u2715
                              </button>
                            </div>
                            <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
                              <span style="font-size:11px;color:#6b7280;width:36px;">
                                \uC5F4 span
                              </span>
                              <button @click="setSpan(activeTab,ci,'col',-1)" :disabled="(cell.colSpan||1)<=1"
                              style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                              :style="(cell.colSpan||1)<=1?'opacity:.3;cursor:default;':''">
                                \u2212
                              </button>
                              <span style="min-width:28px;text-align:center;font-size:14px;font-weight:700;color:#1a73e8;">
                                {{ cell.colSpan||1 }}
                              </span>
                              <button @click="setSpan(activeTab,ci,'col',+1)" :disabled="(cell.colSpan||1)>=(GRID_COLS[activeTab]||1)"
                              style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                              :style="(cell.colSpan||1)>=(GRID_COLS[activeTab]||1)?'opacity:.3;cursor:default;':''">
                                +
                              </button>
                              <span style="font-size:10px;color:#9ca3af;">
                                / {{ GRID_COLS[activeTab]||1 }}
                              </span>
                            </div>
                            <div style="display:flex;align-items:center;gap:6px;">
                              <span style="font-size:11px;color:#6b7280;width:36px;">
                                \uD589 span
                              </span>
                              <button @click="setSpan(activeTab,ci,'row',-1)" :disabled="(cell.rowSpan||1)<=1"
                              style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                              :style="(cell.rowSpan||1)<=1?'opacity:.3;cursor:default;':''">
                                \u2212
                              </button>
                              <span style="min-width:28px;text-align:center;font-size:14px;font-weight:700;color:#1a73e8;">
                                {{ cell.rowSpan||1 }}
                              </span>
                              <button @click="setSpan(activeTab,ci,'row',+1)" :disabled="(cell.rowSpan||1)>=4"
                              style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                              :style="(cell.rowSpan||1)>=4?'opacity:.3;cursor:default;':''">
                                +
                              </button>
                              <span style="font-size:10px;color:#9ca3af;">
                                / 4
                              </span>
                            </div>
                          </div>
                        </template>
                        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2E4\uC81C\uCEE8\uD150\uCE20 ON \uC2DC \xD7\uBC84\uD2BC\uB9CC ===================== -->
                        <template v-else>
                          <div style="position:relative;">
                            <button @click="removeCellWidget(activeTab, ci)"
                            style="position:absolute;top:4px;right:4px;z-index:5;width:18px;height:18px;border-radius:50%;border:none;background:rgba(0,0,0,.3);color:#fff;cursor:pointer;font-size:11px;line-height:1;display:flex;align-items:center;justify-content:center;padding:0;">
                              \xD7
                            </button>
                          </div>
                        </template>
                        <div :style="showRealContent?'padding:0':'padding:0 8px 8px'" style="overflow:hidden;">
                          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCEE8\uD150\uCE20 =============================== -->
                          <div v-if="cell.widget.widgetType==='image_banner'" style="background:linear-gradient(135deg,#667eea,#764ba2);border-radius:6px;padding:14px 10px;text-align:center;color:#fff;">
                            <div style="font-size:20px;">
                              \u{1F5BC}
                            </div>
                            <div style="font-size:10px;font-weight:700;margin-top:4px;">
                              {{ cell.widget.widgetNm }}
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='product_slider'">
                            <div style="display:flex;gap:4px;overflow:hidden;">
                              <div v-for="n in 3" :key="n" style="flex:0 0 58px;border:1px solid #ececec;border-radius:5px;overflow:hidden;">
                                <div style="height:40px;background:linear-gradient(135deg,#f0f0f0,#e4e4e4);display:flex;align-items:center;justify-content:center;font-size:14px;">
                                  \u{1F4E6}
                                </div>
                                <div style="padding:3px 4px;">
                                  <div style="font-size:8px;color:#555;">
                                    \uC0C1\uD488
                                  </div>
                                  <div style="font-size:9px;font-weight:700;color:#e8587a;">
                                    \u20A900,000
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='product'" style="display:flex;gap:7px;align-items:flex-start;">
                            <div style="width:46px;height:46px;background:linear-gradient(135deg,#f0f0f0,#e4e4e4);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">
                              \u{1F4E6}
                            </div>
                            <div>
                              <div style="font-size:8px;color:#aaa;">
                                \uB2E8\uD488
                              </div>
                              <div style="font-size:10px;font-weight:700;">
                                \uC0C1\uD488\uBA85
                              </div>
                              <div style="font-size:11px;font-weight:800;color:#e8587a;">
                                \u20A900,000
                              </div>
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='cond_product'">
                            <div v-for="n in 2" :key="n" style="display:flex;align-items:center;gap:5px;padding:3px 0;border-bottom:1px solid #f5f5f5;">
                              <div style="width:26px;height:26px;background:#f0f0f0;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;">
                                \u{1F4E6}
                              </div>
                              <div>
                                <div style="font-size:9px;color:#444;">
                                  \uC0C1\uD488\uBA85 {{ n }}
                                </div>
                                <div style="font-size:10px;font-weight:700;color:#e8587a;">
                                  \u20A900,000
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='chart_bar'">
                            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================== -->
                            <div style="display:flex;align-items:flex-end;gap:2px;height:50px;border-bottom:1px solid #eee;">
                              <div v-for="(h,ci2) in [55,78,42,88,65,92,70]" :key="ci2" style="flex:1;border-radius:2px 2px 0 0;" :style="'height:'+h+'%;background:linear-gradient(180deg,#667eea,#764ba2);'">
                              </div>
                            </div>
                            <div style="display:flex;justify-content:space-around;margin-top:2px;">
                              <span v-for="d in ['\uC6D4','\uD654','\uC218','\uBAA9','\uAE08','\uD1A0','\uC77C']" :key="d" style="font-size:7px;color:#aaa;">
                                {{ d }}
                              </span>
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='chart_line'">
                            <svg viewBox="0 0 240 55" style="width:100%;height:50px;">
                              <polyline points="0,44 34,30 68,38 102,12 136,22 170,6 204,14 240,10" fill="none" stroke="#667eea" stroke-width="2.5" stroke-linejoin="round"/>
                              <polyline points="0,44 34,30 68,38 102,12 136,22 170,6 204,14 240,10 240,55 0,55" fill="#667eea" opacity=".1"/>
                            </svg>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='chart_pie'" style="display:flex;align-items:center;gap:6px;">
                            <svg viewBox="0 0 100 100" style="width:50px;height:50px;flex-shrink:0;">
                              <circle cx="50" cy="50" r="38" fill="none" stroke="#667eea" stroke-width="24" stroke-dasharray="72 28" stroke-dashoffset="25"/>
                              <circle cx="50" cy="50" r="38" fill="none" stroke="#f6ad55" stroke-width="24" stroke-dasharray="17 83" stroke-dashoffset="-47"/>
                              <circle cx="50" cy="50" r="38" fill="none" stroke="#68d391" stroke-width="24" stroke-dasharray="11 89" stroke-dashoffset="-64"/>
                            </svg>
                            <div style="font-size:8px;">
                              <div v-for="(g,gi) in [['A','#667eea','72%'],['B','#f6ad55','17%'],['\uAE30\uD0C0','#68d391','11%']]" :key="gi" style="display:flex;align-items:center;gap:3px;margin-bottom:3px;">
                                <div style="width:6px;height:6px;border-radius:50%;" :style="'background:'+g[1]+';'">
                                </div>
                                <span style="color:#555;">
                                  {{ g[0] }}
                                </span>
                                <span style="font-weight:700;margin-left:2px;">
                                  {{ g[2] }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='text_banner'" style="background:#f8f9fa;border-left:3px solid #667eea;border-radius:0 5px 5px 0;padding:7px 8px;">
                            <div style="font-size:10px;font-weight:700;color:#222;margin-bottom:2px;">
                              {{ cell.widget.widgetNm }}
                            </div>
                            <div style="font-size:9px;color:#666;">
                              \uD14D\uC2A4\uD2B8 \uBC30\uB108 \uCEE8\uD150\uCE20
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='info_card'" style="background:linear-gradient(135deg,#e3f2fd,#bbdefb);border-radius:5px;padding:8px;display:flex;align-items:center;gap:6px;">
                            <div style="font-size:20px;">
                              \u2139
                            </div>
                            <div>
                              <div style="font-size:9px;font-weight:700;color:#1565c0;">
                                {{ cell.widget.widgetNm }}
                              </div>
                              <div style="font-size:8px;color:#1976d2;">
                                \uC815\uBCF4 \uCE74\uB4DC
                              </div>
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='popup'" style="border:1px solid #e0e0e0;border-radius:5px;overflow:hidden;">
                            <div style="background:#f5f5f5;padding:3px 7px;display:flex;justify-content:space-between;border-bottom:1px solid #e0e0e0;">
                              <span style="font-size:8px;font-weight:700;color:#555;">
                                \uD31D\uC5C5
                              </span>
                              <span style="color:#aaa;font-size:11px;">
                                \xD7
                              </span>
                            </div>
                            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================== -->
                            <div style="padding:8px;text-align:center;">
                              <div style="font-size:16px;">
                                \u{1F4AC}
                              </div>
                              <div style="font-size:9px;font-weight:700;margin-top:2px;">
                                {{ cell.widget.widgetNm }}
                              </div>
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='file'" style="display:flex;align-items:center;gap:7px;background:#f8f9fa;border:1px solid #e0e0e0;border-radius:5px;padding:6px 8px;">
                            <span style="font-size:18px;">
                              \u{1F4CE}
                            </span>
                            <div>
                              <div style="font-size:9px;font-weight:700;">
                                {{ cell.widget.widgetNm }}
                              </div>
                              <div style="font-size:8px;color:#999;">
                                \uB2E4\uC6B4\uB85C\uB4DC
                              </div>
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='file_list'">
                            <div v-for="n in 2" :key="n" style="display:flex;align-items:center;gap:4px;padding:4px 0;border-bottom:1px solid #f0f0f0;">
                              <span style="font-size:12px;">
                                \u{1F4C1}
                              </span>
                              <span style="font-size:9px;flex:1;">
                                \uD30C\uC77C_{{ n }}.pdf
                              </span>
                              <span style="font-size:8px;color:#aaa;">
                                1.{{ n }}MB
                              </span>
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='coupon'" style="border:2px dashed #e8587a;border-radius:5px;padding:7px 8px;display:flex;align-items:center;gap:7px;background:linear-gradient(135deg,#fff5f7,#fce4ec);">
                            <div style="font-size:20px;">
                              \u{1F39F}
                            </div>
                            <div style="flex:1;">
                              <div style="font-size:10px;font-weight:800;color:#c2185b;">
                                {{ cell.widget.widgetNm }}
                              </div>
                              <div style="font-size:8px;color:#e8587a;">
                                \uCFE0\uD3F0 \uBC1C\uAE09
                              </div>
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='html_editor'" style="background:#1e1e2e;border-radius:5px;padding:7px;font-family:monospace;font-size:8px;color:#a9b7c6;line-height:1.5;">
                            <span style="color:#cc7832;">
                              &lt;div&gt;
                            </span>
                            HTML {{ cell.widget.widgetNm }}
                            <span style="color:#cc7832;">
                              &lt;/div&gt;
                            </span>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='event_banner'" style="background:linear-gradient(135deg,#f093fb,#f5576c);border-radius:5px;padding:12px;text-align:center;color:#fff;">
                            <div style="font-size:16px;margin-bottom:3px;">
                              \u{1F389}
                            </div>
                            <div style="font-size:10px;font-weight:800;">
                              {{ cell.widget.widgetNm }}
                            </div>
                          </div>
                          <div v-else-if="cell.widget.widgetType==='cache_banner'" style="background:linear-gradient(135deg,#f6d365,#fda085);border-radius:5px;padding:8px;display:flex;align-items:center;gap:7px;color:#fff;">
                            <div style="font-size:20px;">
                              \u{1F4B0}
                            </div>
                            <div>
                              <div style="font-size:8px;opacity:.85;">
                                \uC801\uB9BD\uAE08
                              </div>
                              <div style="font-size:13px;font-weight:800;">
                                +0,000P
                              </div>
                            </div>
                          </div>
                          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================ -->
                          <div v-else-if="cell.widget.widgetType==='widget_embed'" style="border:2px dashed #a0aec0;border-radius:5px;padding:10px;text-align:center;background:#f7fafc;">
                            <div style="font-size:16px;margin-bottom:2px;">
                              \u{1F9E9}
                            </div>
                            <div style="font-size:9px;font-weight:700;color:#4a5568;">
                              {{ cell.widget.widgetNm }}
                            </div>
                          </div>
                          <div v-else style="background:#f5f5f5;border-radius:5px;padding:8px;text-align:center;color:#888;">
                            <div style="font-size:16px;margin-bottom:2px;">
                              {{ wIcon(cell.widget.widgetType) }}
                            </div>
                            <div style="font-size:9px;">
                              {{ wLabel(cell.widget.widgetType) }}
                            </div>
                          </div>
                        </div>
                      </template>
                      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBE48 \uC140 =================================== -->
                      <div v-else style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;min-height:60px;">
                        <div style="font-size:22px;margin-bottom:5px;opacity:.25;">
                          {{ dropZoneIdx===ci ? '\u{1F4E5}' : '+' }}
                        </div>
                        <div style="font-size:10px;color:#ccc;">
                          {{ dropZoneIdx===ci ? '\uC5EC\uAE30\uC5D0 \uB193\uAE30' : '\uB4DC\uB798\uADF8\uD558\uC5EC \uCD94\uAC00' }}
                        </div>
                      </div>
                    </div>
                  </template>
                  <!-- ===== /cell ====================================================== -->
                </div>
              </template>
              <!-- ===== /grid1~4 =================================================== -->
            </div>
            <!-- ===== /device frame ============================================== -->
          </div>
          <!-- ===== /viewport wrapper ========================================== -->
        </template>
        <!-- ===== /\uBDF0\uD3EC\uD2B8 \uB798\uD37C ==================================================== -->
        <!-- ===== \u25A0.\u25A0.\u25A0. ===== dashboard ===== =============================== -->
        <template v-else-if="activeTab==='dashboard'">
          <div style="position:relative;width:100%;height:640px;border:2px dashed #ddd;border-radius:8px;overflow:hidden;background-color:#f8f9fa;background-image:radial-gradient(circle,#d0d0d0 1px,transparent 1px);background-size:20px 20px;"
          @mousemove="onDashMm" @mouseup="onDashMu" @mouseleave="onDashMu"
          @dragover.prevent @drop="onDashDrop">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBE48 \uC0C1\uD0DC \uD78C\uD2B8 ========================================= -->
            <div v-if="dashItems.length===0"
            style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none;color:#bbb;">
              <div style="font-size:36px;margin-bottom:12px;">
                \u{1F4D0}
              </div>
              <div style="font-size:13px;">
                \uC88C\uCE21 \uC704\uC82F\uC744 \uB4DC\uB798\uADF8\uD558\uC5EC \uBC30\uCE58\uD558\uC138\uC694
              </div>
              <div style="font-size:11px;margin-top:5px;opacity:.7;">
                \uC774\uB3D9 \xB7 \uD06C\uAE30 \uC870\uC808 \uAC00\uB2A5
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F \uC544\uC774\uD15C ========================================== -->
            <div v-for="(item, idx) in dashItems" :key="idx" style="position:absolute;background:#fff;border-radius:8px;overflow:hidden;user-select:none;box-shadow:0 2px 10px rgba(0,0,0,.1);" :style="{ left:item.x+'px', top:item.y+'px', width:item.w+'px', height:item.h+'px', border:(dashDrag.on?dashDrag.idx===idx:false)||(dashResize.on?dashResize.idx===idx:false)?'2px solid #1a73e8':'1px solid #e0e0e0', zIndex:(dashDrag.on?dashDrag.idx===idx:false)||(dashResize.on?dashResize.idx===idx:false)?10:1, cursor:(dashDrag.on?dashDrag.idx===idx:false)?'grabbing':'grab' }" @mousedown="onDashItemMd(idx, $event)">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD0C0\uC774\uD2C0 \uBC14 ========================================= -->
            <div :style="'height:28px;background:'+wColor(item.widget.widgetType)+';display:flex;align-items:center;padding:0 8px;gap:6px;cursor:grab;'">
              <span style="font-size:12px;">
                {{ wIcon(item.widget.widgetType) }}
              </span>
              <span style="font-size:11px;font-weight:600;color:#fff;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                {{ item.widget.widgetNm }}
              </span>
              <button @mousedown.stop @click.stop="removeDashItem(idx)"
                style="background:rgba(255,255,255,.25);border:none;color:#fff;cursor:pointer;border-radius:3px;width:16px;height:16px;padding:0;font-size:13px;line-height:1;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                \xD7
              </button>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB0B4\uC6A9 ============================================ -->
            <div style="padding:8px 10px;overflow-y:auto;height:calc(100% - 28px);">
              <div v-if="item.widget.widgetType==='image_banner'" style="background:linear-gradient(135deg,#667eea,#764ba2);border-radius:8px;padding:18px 12px;text-align:center;color:#fff;">
                <div style="font-size:26px;">
                  \u{1F5BC}
                </div>
                <div style="font-size:12px;font-weight:700;margin-top:5px;">
                  {{ item.widget.widgetNm }}
                </div>
                <div v-if="item.widget.clickTarget" style="font-size:10px;opacity:.8;margin-top:3px;">
                  \u2192 {{ item.widget.clickTarget }}
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='product_slider'">
                <div style="display:flex;gap:5px;overflow:hidden;">
                  <div v-for="n in 3" :key="n" style="flex:0 0 72px;border:1px solid #ececec;border-radius:6px;overflow:hidden;">
                    <div style="height:52px;background:linear-gradient(135deg,#f0f0f0,#e4e4e4);display:flex;align-items:center;justify-content:center;font-size:18px;">
                      \u{1F4E6}
                    </div>
                    <div style="padding:4px 5px;">
                      <div style="font-size:9px;color:#555;">
                        \uC0C1\uD488\uBA85
                      </div>
                      <div style="font-size:10px;font-weight:700;color:#e8587a;">
                        \u20A900,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='product'" style="display:flex;gap:9px;align-items:flex-start;">
                <div style="width:60px;height:60px;background:linear-gradient(135deg,#f0f0f0,#e4e4e4);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">
                  \u{1F4E6}
                </div>
                <div>
                  <div style="font-size:10px;color:#aaa;">
                    \uB2E8\uD488 \uC0C1\uD488
                  </div>
                  <div style="font-size:11px;font-weight:700;color:#222;">
                    \uC0C1\uD488\uBA85
                  </div>
                  <div style="font-size:13px;font-weight:800;color:#e8587a;">
                    \u20A900,000
                  </div>
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='cond_product'">
                <div v-for="n in 3" :key="n" style="display:flex;align-items:center;gap:7px;padding:5px 0;border-bottom:1px solid #f5f5f5;">
                  <div style="width:34px;height:34px;background:#f0f0f0;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">
                    \u{1F4E6}
                  </div>
                  <div>
                    <div style="font-size:10px;color:#444;">
                      \uC0C1\uD488\uBA85 {{ n }}
                    </div>
                    <div style="font-size:11px;font-weight:700;color:#e8587a;">
                      \u20A900,000
                    </div>
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ========================================== -->
              <div v-else-if="item.widget.widgetType==='chart_bar'">
                <div style="display:flex;align-items:flex-end;gap:3px;height:66px;border-bottom:1px solid #eee;">
                  <div v-for="(h,ci) in [55,78,42,88,65,92,70]" :key="ci" style="flex:1;border-radius:3px 3px 0 0;" :style="'height:'+h+'%;background:linear-gradient(180deg,#667eea,#764ba2);'">
                  </div>
                </div>
                <div style="display:flex;justify-content:space-around;margin-top:3px;">
                  <span v-for="d in ['\uC6D4','\uD654','\uC218','\uBAA9','\uAE08','\uD1A0','\uC77C']" :key="d" style="font-size:8px;color:#aaa;">
                    {{ d }}
                  </span>
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='chart_line'">
                <svg viewBox="0 0 240 70" style="width:100%;height:66px;">
                  <polyline points="0,54 34,38 68,46 102,16 136,28 170,10 204,20 240,14" fill="none" stroke="#667eea" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
                  <polyline points="0,54 34,38 68,46 102,16 136,28 170,10 204,20 240,14 240,70 0,70" fill="#667eea" opacity=".1"/>
                </svg>
              </div>
              <div v-else-if="item.widget.widgetType==='chart_pie'" style="display:flex;align-items:center;gap:10px;">
                <svg viewBox="0 0 100 100" style="width:72px;height:72px;flex-shrink:0;">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#667eea" stroke-width="24" stroke-dasharray="72 28" stroke-dashoffset="25"/>
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#f6ad55" stroke-width="24" stroke-dasharray="17 83" stroke-dashoffset="-47"/>
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#68d391" stroke-width="24" stroke-dasharray="11 89" stroke-dashoffset="-64"/>
                </svg>
                <div style="font-size:9px;">
                  <div v-for="(leg,li) in [['\uCE74\uD14C\uACE0\uB9ACA','#667eea','72%'],['\uCE74\uD14C\uACE0\uB9ACB','#f6ad55','17%'],['\uAE30\uD0C0','#68d391','11%']]" :key="li" style="display:flex;align-items:center;gap:4px;margin-bottom:4px;">
                    <div style="width:7px;height:7px;border-radius:50%;flex-shrink:0;" :style="'background:'+leg[1]+';'">
                    </div>
                    <span style="color:#555;">
                      {{ leg[0] }}
                    </span>
                    <span style="font-weight:700;margin-left:auto;">
                      {{ leg[2] }}
                    </span>
                  </div>
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='text_banner'" style="background:#f8f9fa;border-left:4px solid #667eea;border-radius:0 6px 6px 0;padding:10px 12px;">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD5E4\uB354 \uC601\uC5ED ===================================== -->
                <div style="font-size:11px;font-weight:700;color:#222;margin-bottom:3px;">
                  {{ item.widget.widgetNm }}
                </div>
                <div style="font-size:10px;color:#666;line-height:1.5;">
                  \uD14D\uC2A4\uD2B8 \uBC30\uB108 \uCEE8\uD150\uCE20
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='info_card'" style="background:linear-gradient(135deg,#e3f2fd,#bbdefb);border-radius:6px;padding:12px;display:flex;align-items:center;gap:10px;">
                <div style="font-size:26px;">
                  \u2139
                </div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#1565c0;margin-bottom:3px;">
                    {{ item.widget.widgetNm }}
                  </div>
                  <div style="font-size:10px;color:#1976d2;">
                    \uC815\uBCF4 \uCE74\uB4DC
                  </div>
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='popup'" style="border:1px solid #e0e0e0;border-radius:6px;overflow:hidden;">
                <div style="background:#f5f5f5;padding:6px 10px;display:flex;justify-content:space-between;border-bottom:1px solid #e0e0e0;">
                  <span style="font-size:10px;font-weight:700;color:#555;">
                    \uD31D\uC5C5
                  </span>
                  <span style="color:#aaa;">
                    \xD7
                  </span>
                </div>
                <div style="padding:14px;text-align:center;">
                  <div style="font-size:22px;margin-bottom:4px;">
                    \u{1F4AC}
                  </div>
                  <div style="font-size:11px;font-weight:700;">
                    {{ item.widget.widgetNm }}
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ========================================== -->
              <div v-else-if="item.widget.widgetType==='file'" style="display:flex;align-items:center;gap:10px;background:#f8f9fa;border:1px solid #e0e0e0;border-radius:6px;padding:10px 12px;">
                <span style="font-size:24px;">
                  \u{1F4CE}
                </span>
                <div>
                  <div style="font-size:11px;font-weight:700;">
                    {{ item.widget.widgetNm }}
                  </div>
                  <div style="font-size:9px;color:#999;margin-top:2px;">
                    \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC
                  </div>
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='file_list'">
                <div v-for="n in 3" :key="n" style="display:flex;align-items:center;gap:6px;padding:5px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="font-size:14px;">
                    \u{1F4C1}
                  </span>
                  <span style="font-size:10px;flex:1;">
                    \uD30C\uC77C\uBA85_{{ n }}.pdf
                  </span>
                  <span style="font-size:9px;color:#aaa;">
                    1.{{ n }}MB
                  </span>
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='coupon'" style="border:2px dashed #e8587a;border-radius:6px;padding:10px;display:flex;align-items:center;gap:8px;background:linear-gradient(135deg,#fff5f7,#fce4ec);">
                <div style="font-size:26px;">
                  \u{1F39F}
                </div>
                <div style="flex:1;">
                  <div style="font-size:12px;font-weight:800;color:#c2185b;margin-bottom:2px;">
                    {{ item.widget.widgetNm }}
                  </div>
                  <div style="font-size:9px;color:#e8587a;">
                    \uCFE0\uD3F0 \uBC1C\uAE09
                  </div>
                </div>
                <div style="background:#e8587a;color:#fff;border-radius:5px;padding:5px 9px;font-size:10px;font-weight:700;white-space:nowrap;">
                  \uBC1B\uAE30
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='html_editor'" style="background:#1e1e2e;border-radius:6px;padding:10px;font-family:monospace;font-size:10px;color:#a9b7c6;line-height:1.6;">
                <span style="color:#cc7832;">
                  &lt;div&gt;
                </span>
                <br>
                &nbsp;&nbsp;HTML ({{ item.widget.widgetNm }})
                <br>
                <span style="color:#cc7832;">
                  &lt;/div&gt;
                </span>
              </div>
              <div v-else-if="item.widget.widgetType==='event_banner'" style="background:linear-gradient(135deg,#f093fb,#f5576c);border-radius:6px;padding:16px;text-align:center;color:#fff;">
                <div style="font-size:22px;margin-bottom:5px;">
                  \u{1F389}
                </div>
                <div style="font-size:12px;font-weight:800;">
                  {{ item.widget.widgetNm }}
                </div>
              </div>
              <div v-else-if="item.widget.widgetType==='cache_banner'" style="background:linear-gradient(135deg,#f6d365,#fda085);border-radius:6px;padding:12px;display:flex;align-items:center;gap:10px;color:#fff;">
                <div style="font-size:26px;">
                  \u{1F4B0}
                </div>
                <div>
                  <div style="font-size:10px;opacity:.85;">
                    \uC801\uB9BD\uAE08
                  </div>
                  <div style="font-size:15px;font-weight:800;">
                    +0,000P
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ========================================== -->
              <div v-else-if="item.widget.widgetType==='widget_embed'" style="border:2px dashed #a0aec0;border-radius:6px;padding:16px;text-align:center;background:#f7fafc;">
                <div style="font-size:20px;margin-bottom:4px;">
                  \u{1F9E9}
                </div>
                <div style="font-size:11px;font-weight:700;color:#4a5568;">
                  {{ item.widget.widgetNm }}
                </div>
                <div style="font-size:9px;color:#a0aec0;">
                  \uC678\uBD80 \uC704\uC82F \uC784\uBCA0\uB4DC
                </div>
              </div>
              <div v-else style="background:#f5f5f5;border-radius:6px;padding:14px;text-align:center;color:#888;">
                <div style="font-size:20px;margin-bottom:3px;">
                  {{ wIcon(item.widget.widgetType) }}
                </div>
                <div style="font-size:10px;">
                  {{ wLabel(item.widget.widgetType) }}
                </div>
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB9AC\uC0AC\uC774\uC988 \uD578\uB4E4 ======================================= -->
            <div @mousedown.stop="onDashResizeMd(idx, $event)"
              style="position:absolute;right:0;bottom:0;width:16px;height:16px;cursor:se-resize;display:flex;align-items:center;justify-content:center;opacity:.4;">
              <svg width="10" height="10" viewBox="0 0 10 10" style="pointer-events:none;">
                <line x1="2" y1="9" x2="9" y2="2" stroke="#555" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="5" y1="9" x2="9" y2="5" stroke="#555" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="8" y1="9" x2="9" y2="8" stroke="#555" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </template>
      <!-- ===== /dashboard ================================================= -->
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC6B0: \uC704\uC82F \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30 (\uB4DC\uB798\uADF8&\uB4DC\uB86D) =============================== -->
  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uC704\uC82F \uC815\uBCF4 \uD31D\uC624\uBC84 backdrop ====================================== -->
  <div v-if="popoverKey" @click="closePopover" style="position:fixed;inset:0;z-index:199;">
  </div>
  <!-- ===== \u25A0. \uC704\uC82F \uC815\uBCF4 \uD31D\uC624\uBC84 =============================================== -->
  <div v-if="popoverKey ? popoverWidget : false" style="position:fixed;z-index:200;background:#fff;border:1px solid #e0e0e0;border-radius:10px;box-shadow:0 8px 32px rgba(0,0,0,.16);width:300px;max-height:460px;overflow-y:auto;" :style="{ top: popoverPos.top + 'px', left: popoverPos.left + 'px' }">
  <!-- ===== \u25A0.\u25A0. \uD31D\uC624\uBC84 \uD5E4\uB354 ================================================ -->
  <div :style="'padding:10px 14px;background:'+wColor(popoverWidget.widgetType)+';border-radius:10px 10px 0 0;display:flex;align-items:center;gap:8px;'">
    <span style="font-size:18px;">
      {{ wIcon(popoverWidget.widgetType) }}
    </span>
    <div style="flex:1;overflow:hidden;">
      <div style="font-size:12px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
        {{ wLabel(popoverWidget.widgetType) }}
      </div>
      <div style="font-size:10px;color:rgba(255,255,255,.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
        {{ popoverWidget.widgetNm }}
      </div>
    </div>
    <button @click="closePopover" style="background:rgba(255,255,255,.2);border:none;color:#fff;cursor:pointer;border-radius:4px;width:20px;height:20px;padding:0;font-size:15px;line-height:1;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      \xD7
    </button>
  </div>
  <!-- ===== \u25A1.\u25A1. \uD31D\uC624\uBC84 \uD5E4\uB354 ================================================ -->
  <!-- ===== \u25A0.\u25A0. \uBA54\uD0C0 \uC815\uBCF4 ================================================= -->
  <div style="padding:7px 14px;border-bottom:1px solid #f0f0f0;display:flex;flex-direction:column;gap:2px;">
    <div style="font-size:10px;color:#888;">
      \uC601\uC5ED:
      <span style="color:#333;font-weight:600;">
        {{ popoverArea ? popoverArea.codeLabel : '' }}
      </span>
    </div>
    <div style="font-size:10px;color:#888;">
      \uD328\uB110:
      <span style="color:#333;font-weight:600;">
        {{ popoverPanel ? popoverPanel.name : '' }}
      </span>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uBA54\uD0C0 \uC815\uBCF4 ================================================= -->
  <!-- ===== \u25A0.\u25A0. \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30 ============================================== -->
  <div style="padding:12px 14px;">
    <div v-if="popoverWidget.widgetType==='image_banner'" style="background:linear-gradient(135deg,#667eea,#764ba2);border-radius:8px;padding:24px 16px;text-align:center;color:#fff;">
      <div style="font-size:28px;">
        \u{1F5BC}
      </div>
      <div style="font-size:13px;font-weight:700;margin-top:6px;">
        {{ popoverWidget.widgetNm }}
      </div>
      <div v-if="popoverWidget.clickTarget" style="font-size:10px;opacity:.8;margin-top:4px;background:rgba(255,255,255,.2);border-radius:10px;padding:2px 10px;display:inline-block;">
        \u2192 {{ popoverWidget.clickTarget }}
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='product_slider'">
      <div style="display:flex;gap:6px;overflow:hidden;">
        <div v-for="n in 3" :key="n" style="flex:0 0 80px;border:1px solid #ececec;border-radius:6px;overflow:hidden;">
          <div style="height:60px;background:linear-gradient(135deg,#f0f0f0,#e4e4e4);display:flex;align-items:center;justify-content:center;font-size:20px;">
            \u{1F4E6}
          </div>
          <div style="padding:5px 6px;">
            <div style="font-size:9px;color:#555;">
              \uC0C1\uD488\uBA85
            </div>
            <div style="font-size:10px;font-weight:700;color:#e8587a;">
              \u20A900,000
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='product'" style="display:flex;gap:10px;align-items:flex-start;">
      <div style="width:72px;height:72px;background:linear-gradient(135deg,#f0f0f0,#e4e4e4);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;">
        \u{1F4E6}
      </div>
      <div>
        <div style="font-size:10px;color:#aaa;margin-bottom:2px;">
          \uB2E8\uD488 \uC0C1\uD488
        </div>
        <div style="font-size:12px;font-weight:700;color:#222;margin-bottom:3px;">
          \uC0C1\uD488\uBA85
        </div>
        <div style="font-size:14px;font-weight:800;color:#e8587a;">
          \u20A900,000
        </div>
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='cond_product'">
      <div v-for="n in 3" :key="n" style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #f5f5f5;">
        <div style="width:36px;height:36px;background:#f0f0f0;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">
          \u{1F4E6}
        </div>
        <div>
          <div style="font-size:10px;color:#444;">
            \uC0C1\uD488\uBA85 {{ n }}
          </div>
          <div style="font-size:11px;font-weight:700;color:#e8587a;">
            \u20A900,000
          </div>
        </div>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================== -->
    <div v-else-if="popoverWidget.widgetType==='chart_bar'">
      <div style="display:flex;align-items:flex-end;gap:4px;height:80px;border-bottom:1px solid #eee;">
        <div v-for="(h,ci) in [55,78,42,88,65,92,70]" :key="ci" style="flex:1;border-radius:3px 3px 0 0;" :style="'height:'+h+'%;background:linear-gradient(180deg,#667eea,#764ba2);'">
        </div>
      </div>
      <div style="display:flex;justify-content:space-around;margin-top:4px;">
        <span v-for="d in ['\uC6D4','\uD654','\uC218','\uBAA9','\uAE08','\uD1A0','\uC77C']" :key="d" style="font-size:9px;color:#aaa;">
          {{ d }}
        </span>
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='chart_line'">
      <svg viewBox="0 0 240 80" style="width:100%;height:80px;">
        <polyline points="0,64 34,46 68,56 102,18 136,32 170,10 204,22 240,16" fill="none" stroke="#667eea" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
        <polyline points="0,64 34,46 68,56 102,18 136,32 170,10 204,22 240,16 240,80 0,80" fill="#667eea" opacity=".1"/>
      </svg>
    </div>
    <div v-else-if="popoverWidget.widgetType==='chart_pie'" style="display:flex;align-items:center;gap:14px;">
      <svg viewBox="0 0 100 100" style="width:80px;height:80px;flex-shrink:0;">
        <circle cx="50" cy="50" r="38" fill="none" stroke="#667eea" stroke-width="24" stroke-dasharray="72 28" stroke-dashoffset="25"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#f6ad55" stroke-width="24" stroke-dasharray="17 83" stroke-dashoffset="-47"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#68d391" stroke-width="24" stroke-dasharray="11 89" stroke-dashoffset="-64"/>
      </svg>
      <div>
        <div v-for="(item,idx) in [['\uCE74\uD14C\uACE0\uB9ACA','#667eea','72%'],['\uCE74\uD14C\uACE0\uB9ACB','#f6ad55','17%'],['\uAE30\uD0C0','#68d391','11%']]" :key="idx" style="display:flex;align-items:center;gap:5px;margin-bottom:4px;">
          <div style="width:8px;height:8px;border-radius:50%;flex-shrink:0;" :style="'background:'+item[1]+';'">
          </div>
          <span style="font-size:10px;color:#555;">
            {{ item[0] }}
          </span>
          <span style="font-size:10px;font-weight:700;margin-left:4px;">
            {{ item[2] }}
          </span>
        </div>
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='text_banner'" style="background:#f8f9fa;border-left:4px solid #667eea;border-radius:0 7px 7px 0;padding:12px 14px;">
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD5E4\uB354 \uC601\uC5ED ============================================= -->
      <div style="font-size:12px;font-weight:700;color:#222;margin-bottom:4px;">
        {{ popoverWidget.widgetNm }}
      </div>
      <div style="font-size:11px;color:#666;line-height:1.6;">
        \uD14D\uC2A4\uD2B8 \uBC30\uB108 \uCEE8\uD150\uCE20\uAC00 \uC774 \uC601\uC5ED\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='info_card'" style="background:linear-gradient(135deg,#e3f2fd,#bbdefb);border-radius:7px;padding:16px;display:flex;align-items:center;gap:12px;">
      <div style="font-size:30px;">
        \u2139
      </div>
      <div>
        <div style="font-size:11px;font-weight:700;color:#1565c0;margin-bottom:3px;">
          {{ popoverWidget.widgetNm }}
        </div>
        <div style="font-size:10px;color:#1976d2;line-height:1.5;">
          \uC815\uBCF4 \uCE74\uB4DC \uCEE8\uD150\uCE20 \uC601\uC5ED\uC785\uB2C8\uB2E4.
        </div>
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='popup'" style="border:1px solid #e0e0e0;border-radius:7px;overflow:hidden;">
      <div style="background:#f5f5f5;padding:7px 12px;display:flex;justify-content:space-between;border-bottom:1px solid #e0e0e0;">
        <span style="font-size:10px;font-weight:700;color:#555;">
          \uD31D\uC5C5
        </span>
        <span style="color:#aaa;">
          \xD7
        </span>
      </div>
      <div style="padding:18px;text-align:center;">
        <div style="font-size:24px;margin-bottom:6px;">
          \u{1F4AC}
        </div>
        <div style="font-size:12px;font-weight:700;color:#333;">
          {{ popoverWidget.widgetNm }}
        </div>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================== -->
    <div v-else-if="popoverWidget.widgetType==='file'" style="display:flex;align-items:center;gap:10px;background:#f8f9fa;border:1px solid #e0e0e0;border-radius:7px;padding:12px 14px;">
      <span style="font-size:26px;">
        \u{1F4CE}
      </span>
      <div>
        <div style="font-size:11px;font-weight:700;color:#333;">
          {{ popoverWidget.widgetNm }}
        </div>
        <div style="font-size:10px;color:#999;margin-top:2px;">
          \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC
        </div>
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='file_list'">
      <div v-for="n in 3" :key="n" style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #f0f0f0;">
        <span style="font-size:16px;">
          \u{1F4C1}
        </span>
        <span style="font-size:10px;color:#555;flex:1;">
          \uD30C\uC77C\uBA85_{{ n }}.pdf
        </span>
        <span style="font-size:9px;color:#aaa;">
          1.{{ n }}MB
        </span>
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='coupon'" style="border:2px dashed #e8587a;border-radius:7px;padding:14px;display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#fff5f7,#fce4ec);">
      <div style="font-size:30px;">
        \u{1F39F}
      </div>
      <div style="flex:1;">
        <div style="font-size:12px;font-weight:800;color:#c2185b;margin-bottom:2px;">
          {{ popoverWidget.widgetNm }}
        </div>
        <div style="font-size:10px;color:#e8587a;">
          \uCFE0\uD3F0 \uBC1C\uAE09 \uC774\uBCA4\uD2B8
        </div>
      </div>
      <div style="background:#e8587a;color:#fff;border-radius:6px;padding:7px 11px;font-size:11px;font-weight:700;white-space:nowrap;">
        \uCFE0\uD3F0 \uBC1B\uAE30
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='html_editor'" style="background:#1e1e2e;border-radius:7px;padding:12px;font-family:monospace;font-size:10px;color:#a9b7c6;line-height:1.7;">
      <span style="color:#cc7832;">
        &lt;div&gt;
      </span>
      <br>
      &nbsp;&nbsp;HTML \uCEE8\uD150\uCE20 ({{ popoverWidget.widgetNm }})
      <br>
      <span style="color:#cc7832;">
        &lt;/div&gt;
      </span>
    </div>
    <div v-else-if="popoverWidget.widgetType==='event_banner'" style="background:linear-gradient(135deg,#f093fb,#f5576c);border-radius:7px;padding:20px;text-align:center;color:#fff;">
      <div style="font-size:22px;margin-bottom:6px;">
        \u{1F389}
      </div>
      <div style="font-size:13px;font-weight:800;letter-spacing:.5px;">
        {{ popoverWidget.widgetNm }}
      </div>
    </div>
    <div v-else-if="popoverWidget.widgetType==='cache_banner'" style="background:linear-gradient(135deg,#f6d365,#fda085);border-radius:7px;padding:16px;display:flex;align-items:center;gap:12px;color:#fff;">
      <div style="font-size:30px;">
        \u{1F4B0}
      </div>
      <div>
        <div style="font-size:11px;opacity:.85;margin-bottom:2px;">
          \uC801\uB9BD\uAE08 / \uCE90\uC2DC
        </div>
        <div style="font-size:18px;font-weight:800;">
          +0,000P
        </div>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================== -->
    <div v-else-if="popoverWidget.widgetType==='widget_embed'" style="border:2px dashed #a0aec0;border-radius:7px;padding:20px;text-align:center;background:#f7fafc;">
      <div style="font-size:24px;margin-bottom:6px;">
        \u{1F9E9}
      </div>
      <div style="font-size:12px;font-weight:700;color:#4a5568;margin-bottom:2px;">
        {{ popoverWidget.widgetNm }}
      </div>
      <div style="font-size:10px;color:#a0aec0;">
        \uC678\uBD80 \uC704\uC82F \uC784\uBCA0\uB4DC \uC601\uC5ED
      </div>
    </div>
    <div v-else style="background:#f5f5f5;border-radius:7px;padding:16px;text-align:center;color:#888;">
      <div style="font-size:22px;margin-bottom:4px;">
        {{ wIcon(popoverWidget.widgetType) }}
      </div>
      <div style="font-size:11px;">
        {{ wLabel(popoverWidget.widgetType) }}
      </div>
    </div>
  </div>
</div>
<!-- ===== \u25A1.\u25A1. \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30 ============================================== -->
<!-- ===== \u25A1. \uC704\uC82F \uC815\uBCF4 \uD31D\uC624\uBC84 =============================================== -->
<!-- ===== \u25A0. \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC ============================================== -->
<fo-cm-popup-modal popup-cmd="cmPopup-category-pick" popup-code="category" :multi="true" result-type="array" :show="uiState.showCatModal" :init-selected-ids="[...selectedCatIds]" :on-callback="fnCallbackModal" />
</div>
<!-- ===== \u25A1. \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC ============================================== -->
</fo-page>
`};
