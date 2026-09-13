window.XsSample12={name:"XsSample12",components:{"category-select-modal":window.CategorySelectModal},setup(){const{reactive:p,computed:x,onMounted:K,watch:Q}=Vue,s=p({loading:!1,error:null,previewDate:coUtil.cofToYmd(new Date),previewTime:new Date().toTimeString().slice(0,5),showAreaDrop:!1,showCatModal:!1}),h=p({active_status_opts:[{value:"\uD65C\uC131",label:"\uD65C\uC131"},{value:"\uBE44\uD65C\uC131",label:"\uBE44\uD65C\uC131"}],need_yn_opts:[{value:"Y",label:"\uD544\uC694"},{value:"N",label:"\uBD88\uD544\uC694"}],condition_opts:["\uD56D\uC0C1 \uD45C\uC2DC","\uB85C\uADF8\uC778 \uD544\uC694","\uB85C\uADF8\uC778+VIP","\uB85C\uADF8\uC778+\uC6B0\uC218","\uBE44\uB85C\uADF8\uC778 \uC804\uC6A9"],auth_grade_opts:["\uC77C\uBC18","\uC6B0\uC218","VIP"]}),_=coUtil.cofToYmd(new Date),a=p(new Set),g=p(new Set),r=p(new Set),d=p(new Set),f=p(new Set),b=p(new Map),n=window.useFoAuthStore?window.useFoAuthStore():null,w=n?n.sgIsLoggedIn:!1,v=n&&n.svAuthUser?n.svAuthUser.grade||"\uC77C\uBC18":"",T=n&&n.svAuthUser&&(n.svAuthUser.authNm||n.svAuthUser.memberNm||n.svAuthUser.email)||"",c=p({status:"",condition:"",authrequired:"",authgrade:""}),I={image_banner:"\uC774\uBBF8\uC9C0 \uBC30\uB108",product_slider:"\uC0C1\uD488 \uC2AC\uB77C\uC774\uB354",product:"\uC0C1\uD488",cond_product:"\uC870\uAC74\uC0C1\uD488",chart_bar:"\uCC28\uD2B8(Bar)",chart_line:"\uCC28\uD2B8(Line)",chart_pie:"\uCC28\uD2B8(Pie)",text_banner:"\uD14D\uC2A4\uD2B8 \uBC30\uB108",info_card:"\uC815\uBCF4\uCE74\uB4DC",popup:"\uD31D\uC5C5",file:"\uD30C\uC77C",file_list:"\uD30C\uC77C\uBAA9\uB85D",coupon:"\uCFE0\uD3F0",html_editor:"HTML \uC5D0\uB514\uD130",event_banner:"\uC774\uBCA4\uD2B8",cache_banner:"\uCE90\uC2DC",widget_embed:"\uC704\uC82F"},S={image_banner:"\u{1F5BC}",product_slider:"\u{1F6D2}",product:"\u{1F4E6}",cond_product:"\u{1F50D}",chart_bar:"\u{1F4CA}",chart_line:"\u{1F4C8}",chart_pie:"\u{1F967}",text_banner:"\u{1F4DD}",info_card:"\u2139",popup:"\u{1F4AC}",file:"\u{1F4CE}",file_list:"\u{1F4C1}",coupon:"\u{1F39F}",html_editor:"\u{1F4C4}",event_banner:"\u{1F389}",cache_banner:"\u{1F4B0}",widget_embed:"\u{1F9E9}"},C=(e,i={})=>{if(e==="filter-resetDate")return J();if(e==="filter-toggleAreaDrop")s.showAreaDrop=!s.showAreaDrop;else if(e==="filter-closeAreaDrop")s.showAreaDrop=!1;else{if(e==="filter-selectAllAreas")return X();if(e==="filter-clearAllAreas")return H();if(e==="categoryModal-open")s.showCatModal=!0;else if(e==="categoryModal-close")s.showCatModal=!1;else{if(e==="tree-checkAll")return U();if(e==="tree-clearAll")return G();if(e==="tree-initExpand")return z();console.warn("[handleBtnAction] unknown cmd:",e)}}},D=(e,i={})=>{if(e==="areas-toggle")return F(i);if(e==="tree-areaToggleExpand")return W(i);if(e==="tree-areaCheckAll")return q(i);if(e==="tree-panelToggle")return M(i);if(e==="tree-widgetToggle")return j(i.dispId,i.wi,i.e);if(e==="categoryModal-apply")return k(i);console.warn("[handleSelectAction] unknown cmd:",e)},E=(e,i,t)=>{if(e==="cmPopup-category-pick"){if(t==null){s.showCatModal=!1;return}return k(t)}else console.warn("[fnCallbackModal] unknown popCmd:",e)},m=x(()=>[...f].map(e=>b.get(e)||"").filter(Boolean)),L=x(()=>f.size===0?"\uCE74\uD14C\uACE0\uB9AC":f.size<=2?m.value.join(", "):`${f.size}\uAC1C`),k=e=>{f.clear(),b.clear(),(e||[]).forEach(i=>{const t=coUtil.cofAnd(i,typeof i=="object"),o=t?i.id:i;o!=null&&(f.add(o),coUtil.cofAnd(t,i.nm)&&b.set(o,i.nm))})},N=x(()=>{const e=["\uD56D\uC0C1 \uD45C\uC2DC"];return w?(e.push("\uB85C\uADF8\uC778 \uD544\uC694"),(v==="\uC6B0\uC218"||v==="VIP")&&e.push("\uB85C\uADF8\uC778+\uC6B0\uC218"),v==="VIP"&&e.push("\uB85C\uADF8\uC778+VIP"),e):(e.push("\uBE44\uB85C\uADF8\uC778 \uC804\uC6A9"),e)}),P=e=>I[e]||e||"-",B=e=>S[e]||"\u25AA",u=x(()=>{var e;return(((e=window.useFoCodeStore)==null?void 0:e.call(window).svCodes)||[]).filter(i=>i.codeGrp==="DISP_AREA"&&i.useYn==="Y").sort((i,t)=>i.sortOrd-t.sortOrd)}),$=e=>{const i=s.previewDate;if(!i)return!0;const t=`${i}T${s.previewTime||"00:00"}`,o=l=>String(l||"").replace(" ","T").slice(0,16);return!(e.dispStartDt&&t<o(e.dispStartDt)||e.dispEndDt&&t>o(e.dispEndDt))},V=e=>{if(c.status&&e.status!==c.status||!$(e)||c.condition&&(e.condition||"\uD56D\uC0C1 \uD45C\uC2DC")!==c.condition||c.authrequired==="Y"&&!e.authRequired||c.authrequired==="N"&&e.authRequired||c.authgrade&&e.authGrade!==c.authgrade)return!1;if(f.size>0){const i=m.value;if(!(i.some(o=>e.name.includes(o))||(e.rows||[]).some(o=>i.some(l=>(o.widgetNm||"").includes(l)))))return!1}return!0},y=x(()=>u.value.filter(e=>a.size===0||a.has(e.codeValue)).map(e=>{const i=[].filter(t=>t.area===e.codeValue&&V(t)).sort((t,o)=>(t.sortOrder||0)-(o.sortOrder||0));return{...e,panels:i,uiState:s,codes:h}})),z=()=>u.value.forEach(e=>g.add(e.codeValue)),W=e=>{g.has(e)?g.delete(e):g.add(e)},M=e=>{const i=e.dispId,t=e.rows||[];r.has(i)?(r.delete(i),t.forEach((o,l)=>d.delete(`${i}_${l}`))):(r.add(i),t.forEach((o,l)=>d.add(`${i}_${l}`)))},j=(e,i,t)=>{t&&t.stopPropagation();const o=`${e}_${i}`;d.has(o)?d.delete(o):d.add(o)},U=()=>{y.value.forEach(e=>e.panels.forEach(i=>{r.add(i.dispId),(i.rows||[]).forEach((t,o)=>d.add(`${i.dispId}_${o}`))}))},G=()=>{r.clear(),d.clear()},A=e=>e.panels.length>0&&e.panels.every(i=>r.has(i.dispId))&&e.panels.every(i=>(i.rows||[]).every((t,o)=>d.has(`${i.dispId}_${o}`))),q=e=>{A(e)?e.panels.forEach(i=>{r.delete(i.dispId),(i.rows||[]).forEach((t,o)=>d.delete(`${i.dispId}_${o}`))}):e.panels.forEach(i=>{r.add(i.dispId),(i.rows||[]).forEach((t,o)=>d.add(`${i.dispId}_${o}`))})},Y=e=>r.has(e.dispId)&&((e.rows||[]).length===0||(e.rows||[]).every((i,t)=>d.has(`${e.dispId}_${t}`))),O=x(()=>{const e=[];return y.value.forEach(i=>i.panels.forEach(t=>(t.rows||[]).forEach((o,l)=>{d.has(`${t.dispId}_${l}`)&&e.push({...o,_dispId:t.dispId,_panelNm:t.name,_area:i.codeLabel,_wi:l})}))),e}),R=x(()=>a.size===0?"\uC804\uCCB4 \uC601\uC5ED":`${a.size}\uAC1C \uC120\uD0DD`),F=e=>{a.has(e)?a.delete(e):a.add(e)},X=()=>{u.value.forEach(e=>a.add(e.codeValue))},H=()=>{a.clear()},J=()=>{s.previewDate=_,s.previewTime=new Date().toTimeString().slice(0,5)};return z(),{uiState:s,codes:h,searchParam:c,handleBtnAction:C,handleSelectAction:D,fnCallbackModal:E,selectedAreas:a,cfAllAreas:u,cfAreaBtnLabel:R,selectedCatIds:f,cfCatBtnLabel:L,isLoggedIn:w,userGrade:v,userNm:T,cfAccessibleConds:N,cfStructAreaList:y,expandedAreas:g,checkedPanels:r,checkedWidgets:d,isAreaAllChecked:A,isPanelAllChecked:Y,cfCheckedWidgetList:O,fnWLabel:P,fnWIcon:B}},template:`
<fo-page bare>
<div style="padding:clamp(12px,3vw,24px);">
  <!-- ===== \u25A0. \uC81C\uBAA9 ====================================================== -->
  <div style="font-size:16px;font-weight:700;margin-bottom:12px;">
    12. \uC804\uC2DC\uC601\uC5ED \uAD6C\uC870 \uD2B8\uB9AC \uBCF4\uAE30
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
        <div style="display:flex;align-items:center;gap:8px;padding:9px 14px;background:linear-gradient(90deg,#2d2d2d,#444);color:#fff;cursor:pointer;"
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
            style="display:flex;align-items:flex-start;gap:8px;padding:8px 14px;cursor:pointer;border-top:1px solid #f0f0f0;transition:background .1s;"
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
                  style="display:flex;align-items:center;gap:5px;padding:2px 5px;border-radius:4px;cursor:pointer;transition:background .1s;"
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
                        {{ fnWIcon(w.widgetType) }}
                      </span>
                      <span style="font-size:11px;color:#e65100;">
                        {{ fnWLabel(w.widgetType) }}
                      </span>
                      <span v-if="w.widgetNm" style="font-size:10px;color:#777;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                        {{ w.widgetNm }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ===== \u25A1.\u25A1. \uC88C: \uAD6C\uC870 \uD2B8\uB9AC ============================================== -->
        <!-- ===== \u25A0.\u25A0. \uC6B0: \uC704\uC82F \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30 ======================================== -->
        <div style="flex:6;min-width:280px;max-height:80vh;overflow-y:auto;">
          <div style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:10px 14px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10;">
            <span style="font-size:13px;font-weight:700;color:#333;">
              \u{1F9E9} \uC704\uC82F \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30
            </span>
            <span style="font-size:11px;color:#aaa;">
              {{ cfCheckedWidgetList.length }}\uAC1C \uC120\uD0DD\uB428
            </span>
          </div>
          <div v-if="cfCheckedWidgetList.length===0"
        style="border:2px dashed #e0e0e0;border-radius:8px;padding:50px;text-align:center;color:#bbb;font-size:13px;">
            \uC88C\uCE21 \uD2B8\uB9AC\uC5D0\uC11C \uC704\uC82F\uC744 \uC120\uD0DD\uD558\uBA74
            <br>
            \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
          </div>
          <div v-else>
            <div v-for="(w, i) in cfCheckedWidgetList" :key="i"
          style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:12px 14px;margin-bottom:8px;overflow:hidden;">
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F \uD5E4\uB354 =========================================== -->
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #f5f5f5;flex-wrap:wrap;">
                <span style="font-size:10px;background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:3px;padding:1px 5px;white-space:nowrap;">
                  {{ fnWIcon(w.widgetType) }} {{ fnWLabel(w.widgetType) }}
                </span>
                <span style="font-size:12px;font-weight:700;color:#222;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                  {{ w.widgetNm }}
                </span>
                <span style="font-size:10px;color:#bbb;white-space:nowrap;">
                  {{ w._area }} \u203A {{ w._panelNm }}
                </span>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. image_banner ==================================== -->
              <div v-if="w.widgetType==='image_banner'"
            style="background:linear-gradient(135deg,#667eea,#764ba2);border-radius:8px;padding:28px 16px;text-align:center;color:#fff;display:flex;flex-direction:column;align-items:center;gap:8px;">
                <div style="font-size:32px;">
                  \u{1F5BC}
                </div>
                <div style="font-size:14px;font-weight:700;letter-spacing:.3px;">
                  {{ w.widgetNm }}
                </div>
                <div v-if="w.clickTarget" style="font-size:11px;opacity:.8;background:rgba(255,255,255,.2);border-radius:10px;padding:3px 12px;">
                  \u2192 {{ w.clickTarget }}
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. product_slider ================================== -->
              <div v-else-if="w.widgetType==='product_slider'">
                <div style="display:flex;gap:8px;overflow:hidden;">
                  <div v-for="n in 4" :key="n" style="flex:0 0 110px;border:1px solid #ececec;border-radius:8px;overflow:hidden;">
                    <div style="height:80px;background:linear-gradient(135deg,#f0f0f0,#e4e4e4);display:flex;align-items:center;justify-content:center;font-size:26px;">
                      \u{1F4E6}
                    </div>
                    <div style="padding:7px 8px;">
                      <div style="font-size:10px;color:#555;margin-bottom:2px;">
                        \uC0C1\uD488\uBA85
                      </div>
                      <div style="font-size:12px;font-weight:700;color:#e8587a;">
                        \u20A900,000
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="w.clickTarget" style="font-size:10px;color:#aaa;margin-top:6px;text-align:right;">
                  \uB354\uBCF4\uAE30 \u2192 {{ w.clickTarget }}
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. product ========================================= -->
              <div v-else-if="w.widgetType==='product'" style="display:flex;gap:12px;align-items:flex-start;padding:4px 0;">
                <div style="flex:0 0 88px;height:88px;background:linear-gradient(135deg,#f0f0f0,#e4e4e4);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:30px;">
                  \u{1F4E6}
                </div>
                <div style="flex:1;">
                  <div style="font-size:11px;color:#aaa;margin-bottom:3px;">
                    \uB2E8\uD488 \uC0C1\uD488
                  </div>
                  <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:5px;">
                    \uC0C1\uD488\uBA85
                  </div>
                  <div style="font-size:15px;font-weight:800;color:#e8587a;">
                    \u20A900,000
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. cond_product ==================================== -->
              <div v-else-if="w.widgetType==='cond_product'">
                <div style="font-size:10px;background:#e3f2fd;color:#1565c0;border-radius:8px;padding:2px 9px;margin-bottom:8px;display:inline-block;">
                  \u{1F50D} \uC870\uAC74 \uD544\uD130
                </div>
                <div v-for="n in 3" :key="n" style="display:flex;align-items:center;gap:9px;padding:6px 0;border-bottom:1px solid #f5f5f5;">
                  <div style="width:40px;height:40px;background:#f0f0f0;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">
                    \u{1F4E6}
                  </div>
                  <div style="flex:1;">
                    <div style="font-size:11px;color:#444;margin-bottom:2px;">
                      \uC0C1\uD488\uBA85 {{ n }}
                    </div>
                    <div style="font-size:12px;font-weight:700;color:#e8587a;">
                      \u20A900,000
                    </div>
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. chart_bar ======================================= -->
              <div v-else-if="w.widgetType==='chart_bar'">
                <div style="display:flex;align-items:flex-end;gap:5px;height:90px;padding:0 4px;border-bottom:1px solid #eee;">
                  <div v-for="(h, ci) in [55,78,42,88,65,92,70]" :key="ci"
                style="flex:1;border-radius:4px 4px 0 0;"
                :style="'height:' + h + '%;background:linear-gradient(180deg,#667eea,#764ba2);'">
                  </div>
                </div>
                <div style="display:flex;justify-content:space-around;margin-top:4px;">
                  <span v-for="d in ['\uC6D4','\uD654','\uC218','\uBAA9','\uAE08','\uD1A0','\uC77C']" :key="d" style="font-size:9px;color:#aaa;">
                    {{ d }}
                  </span>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. chart_line ====================================== -->
              <div v-else-if="w.widgetType==='chart_line'">
                <svg viewBox="0 0 240 90" style="width:100%;height:90px;overflow:visible;">
                  <polyline points="0,70 34,50 68,62 102,22 136,38 170,14 204,28 240,20"
                fill="none" stroke="#667eea" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
                  <polyline points="0,70 34,50 68,62 102,22 136,38 170,14 204,28 240,20 240,90 0,90"
                fill="#667eea" opacity=".1"/>
                </svg>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. chart_pie ======================================= -->
              <div v-else-if="w.widgetType==='chart_pie'" style="display:flex;align-items:center;gap:16px;">
                <svg viewBox="0 0 100 100" style="width:90px;height:90px;flex-shrink:0;">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#667eea" stroke-width="24" stroke-dasharray="72 28" stroke-dashoffset="25"/>
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#f6ad55" stroke-width="24" stroke-dasharray="17 83" stroke-dashoffset="-47"/>
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#68d391" stroke-width="24" stroke-dasharray="11 89" stroke-dashoffset="-64"/>
                </svg>
                <div>
                  <div v-for="(item,idx) in [['\uCE74\uD14C\uACE0\uB9ACA','#667eea','72%'],['\uCE74\uD14C\uACE0\uB9ACB','#f6ad55','17%'],['\uAE30\uD0C0','#68d391','11%']]" :key="idx"
                style="display:flex;align-items:center;gap:6px;margin-bottom:5px;">
                    <div style="width:9px;height:9px;border-radius:50%;flex-shrink:0;" :style="'background:' + item[1] + ';'">
                    </div>
                    <span style="font-size:11px;color:#555;">
                      {{ item[0] }}
                    </span>
                    <span style="font-size:11px;font-weight:700;color:#333;margin-left:auto;">
                      {{ item[2] }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. text_banner ===================================== -->
              <div v-else-if="w.widgetType==='text_banner'"
            style="background:#f8f9fa;border-left:4px solid #667eea;border-radius:0 8px 8px 0;padding:14px 16px;">
                <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:5px;">
                  {{ w.widgetNm }}
                </div>
                <div style="font-size:12px;color:#666;line-height:1.7;">
                  \uD14D\uC2A4\uD2B8 \uBC30\uB108 \uCEE8\uD150\uCE20\uAC00 \uC774 \uC601\uC5ED\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. info_card ======================================= -->
              <div v-else-if="w.widgetType==='info_card'"
            style="background:linear-gradient(135deg,#e3f2fd,#bbdefb);border-radius:8px;padding:18px;display:flex;align-items:center;gap:14px;">
                <div style="font-size:36px;">
                  \u2139
                </div>
                <div>
                  <div style="font-size:13px;font-weight:700;color:#1565c0;margin-bottom:4px;">
                    {{ w.widgetNm }}
                  </div>
                  <div style="font-size:11px;color:#1976d2;line-height:1.6;">
                    \uC815\uBCF4 \uCE74\uB4DC \uCEE8\uD150\uCE20 \uC601\uC5ED\uC785\uB2C8\uB2E4.
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. popup =========================================== -->
              <div v-else-if="w.widgetType==='popup'"
            style="border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
                <div style="background:#f5f5f5;padding:8px 12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e0e0e0;">
                  <span style="font-size:11px;font-weight:700;color:#555;">
                    \uD31D\uC5C5
                  </span>
                  <span style="font-size:16px;color:#aaa;">
                    \xD7
                  </span>
                </div>
                <div style="padding:22px;text-align:center;">
                  <div style="font-size:28px;margin-bottom:8px;">
                    \u{1F4AC}
                  </div>
                  <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:4px;">
                    {{ w.widgetNm }}
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. file ============================================ -->
              <div v-else-if="w.widgetType==='file'"
            style="display:flex;align-items:center;gap:12px;background:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;padding:14px 16px;">
                <span style="font-size:30px;">
                  \u{1F4CE}
                </span>
                <div>
                  <div style="font-size:12px;font-weight:700;color:#333;">
                    {{ w.widgetNm }}
                  </div>
                  <div style="font-size:10px;color:#999;margin-top:2px;">
                    \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. file_list ======================================= -->
              <div v-else-if="w.widgetType==='file_list'">
                <div v-for="n in 3" :key="n" style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="font-size:18px;">
                    \u{1F4C1}
                  </span>
                  <span style="font-size:11px;color:#555;flex:1;">
                    \uD30C\uC77C\uBA85_{{ n }}.pdf
                  </span>
                  <span style="font-size:10px;color:#aaa;">
                    1.{{ n }}MB
                  </span>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. coupon ========================================== -->
              <div v-else-if="w.widgetType==='coupon'"
            style="border:2px dashed #e8587a;border-radius:8px;padding:16px;display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#fff5f7,#fce4ec);">
                <div style="font-size:36px;">
                  \u{1F39F}
                </div>
                <div style="flex:1;">
                  <div style="font-size:14px;font-weight:800;color:#c2185b;margin-bottom:3px;">
                    {{ w.widgetNm }}
                  </div>
                  <div style="font-size:11px;color:#e8587a;">
                    \uCFE0\uD3F0 \uBC1C\uAE09 \uC774\uBCA4\uD2B8
                  </div>
                </div>
                <div style="background:#e8587a;color:#fff;border-radius:8px;padding:10px 14px;font-size:12px;font-weight:700;white-space:nowrap;">
                  \uCFE0\uD3F0 \uBC1B\uAE30
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. html_editor ===================================== -->
              <div v-else-if="w.widgetType==='html_editor'"
            style="background:#1e1e2e;border-radius:8px;padding:14px;font-family:monospace;font-size:11px;color:#a9b7c6;line-height:1.8;">
                <span style="color:#cc7832;">
                  &lt;div&gt;
                </span>
                <br>
                <span style="padding-left:14px;color:#a9b7c6;">
                  &nbsp;&nbsp;HTML \uCEE8\uD150\uCE20 \uC601\uC5ED ({{ w.widgetNm }})
                </span>
                <br>
                <span style="color:#cc7832;">
                  &lt;/div&gt;
                </span>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. event_banner ==================================== -->
              <div v-else-if="w.widgetType==='event_banner'"
            style="background:linear-gradient(135deg,#f093fb,#f5576c);border-radius:8px;padding:22px;text-align:center;color:#fff;">
                <div style="font-size:26px;margin-bottom:8px;">
                  \u{1F389}
                </div>
                <div style="font-size:15px;font-weight:800;letter-spacing:.5px;margin-bottom:5px;">
                  {{ w.widgetNm }}
                </div>
                <div v-if="w.clickTarget" style="font-size:11px;opacity:.85;background:rgba(255,255,255,.2);border-radius:10px;padding:3px 12px;display:inline-block;">
                  \u2192 {{ w.clickTarget }}
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. cache_banner ==================================== -->
              <div v-else-if="w.widgetType==='cache_banner'"
            style="background:linear-gradient(135deg,#f6d365,#fda085);border-radius:8px;padding:18px;display:flex;align-items:center;gap:14px;color:#fff;">
                <div style="font-size:36px;">
                  \u{1F4B0}
                </div>
                <div>
                  <div style="font-size:12px;opacity:.85;margin-bottom:3px;">
                    \uC801\uB9BD\uAE08 / \uCE90\uC2DC
                  </div>
                  <div style="font-size:20px;font-weight:800;">
                    +0,000P
                  </div>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. widget_embed ==================================== -->
              <div v-else-if="w.widgetType==='widget_embed'"
            style="border:2px dashed #a0aec0;border-radius:8px;padding:22px;text-align:center;background:#f7fafc;">
                <div style="font-size:28px;margin-bottom:8px;">
                  \u{1F9E9}
                </div>
                <div style="font-size:13px;font-weight:700;color:#4a5568;margin-bottom:3px;">
                  {{ w.widgetNm }}
                </div>
                <div style="font-size:10px;color:#a0aec0;">
                  \uC678\uBD80 \uC704\uC82F \uC784\uBCA0\uB4DC \uC601\uC5ED
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. fallback ======================================== -->
              <div v-else style="background:#f5f5f5;border-radius:8px;padding:18px;text-align:center;color:#888;">
                <div style="font-size:24px;margin-bottom:5px;">
                  {{ fnWIcon(w.widgetType) }}
                </div>
                <div style="font-size:12px;">
                  {{ fnWLabel(w.widgetType) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ===== \u25A1.\u25A1. \uC6B0: \uC704\uC82F \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30 ======================================== -->
      <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
      <!-- ===== \u25A0. \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC ============================================== -->
      <fo-cm-popup-modal popup-cmd="cmPopup-category-pick" popup-code="category" :multi="true" result-type="array" :show="uiState.showCatModal" :init-selected-ids="[...selectedCatIds]" :on-callback="fnCallbackModal" />
    </div>
    <!-- ===== \u25A1. \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC ============================================== -->
</fo-page>
`};
