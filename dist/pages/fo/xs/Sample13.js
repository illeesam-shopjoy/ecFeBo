window.XsSample13={name:"XsSample13",components:{"category-select-modal":window.CategorySelectModal},setup(){const{reactive:c,computed:l,onMounted:Y,watch:F}=Vue,d=c({loading:!1,error:null,previewDate:coUtil.cofToYmd(new Date),copiedPanel:null,previewTime:new Date().toTimeString().slice(0,5),showAreaDrop:!1,showCatModal:!1,copied:!1}),y=c({active_status_opts:[{value:"\uD65C\uC131",label:"\uD65C\uC131"},{value:"\uBE44\uD65C\uC131",label:"\uBE44\uD65C\uC131"}],need_yn_opts:[{value:"Y",label:"\uD544\uC694"},{value:"N",label:"\uBD88\uD544\uC694"}],condition_opts:["\uD56D\uC0C1 \uD45C\uC2DC","\uB85C\uADF8\uC778 \uD544\uC694","\uB85C\uADF8\uC778+VIP","\uB85C\uADF8\uC778+\uC6B0\uC218","\uBE44\uB85C\uADF8\uC778 \uC804\uC6A9"],auth_grade_opts:["\uC77C\uBC18","\uC6B0\uC218","VIP"]}),k=coUtil.cofToYmd(new Date),a=c(new Set),p=c(new Set),x=c(new Map),s=window.useFoAuthStore?window.useFoAuthStore():null,b=s?s.sgIsLoggedIn:!1,f=s&&s.svAuthUser?s.svAuthUser.grade||"\uC77C\uBC18":"",z=s&&s.svAuthUser&&(s.svAuthUser.authNm||s.svAuthUser.memberNm||s.svAuthUser.email)||"",r=c({status:"",condition:"",authrequired:"",authgrade:""}),A={image_banner:"\uC774\uBBF8\uC9C0 \uBC30\uB108",product_slider:"\uC0C1\uD488 \uC2AC\uB77C\uC774\uB354",product:"\uC0C1\uD488",cond_product:"\uC870\uAC74\uC0C1\uD488",chart_bar:"\uCC28\uD2B8(Bar)",chart_line:"\uCC28\uD2B8(Line)",chart_pie:"\uCC28\uD2B8(Pie)",text_banner:"\uD14D\uC2A4\uD2B8 \uBC30\uB108",info_card:"\uC815\uBCF4\uCE74\uB4DC",popup:"\uD31D\uC5C5",file:"\uD30C\uC77C",file_list:"\uD30C\uC77C\uBAA9\uB85D",coupon:"\uCFE0\uD3F0",html_editor:"HTML \uC5D0\uB514\uD130",event_banner:"\uC774\uBCA4\uD2B8",cache_banner:"\uCE90\uC2DC",widget_embed:"\uC704\uC82F"},_={image_banner:"\u{1F5BC}",product_slider:"\u{1F6CD}",product:"\u{1F4E6}",cond_product:"\u{1F50D}",chart_bar:"\u{1F4CA}",chart_line:"\u{1F4C8}",chart_pie:"\u{1F967}",text_banner:"\u{1F4DD}",info_card:"\u2139",popup:"\u{1F4AC}",file:"\u{1F4CE}",file_list:"\u{1F4C1}",coupon:"\u{1F39F}",html_editor:"</>",event_banner:"\u{1F389}",cache_banner:"\u{1F4B0}",widget_embed:"\u{1F9E9}"},S=(e,i={})=>{if(e==="filter-resetDate")return q();if(e==="filter-toggleAreaDrop")d.showAreaDrop=!d.showAreaDrop;else if(e==="filter-closeAreaDrop")d.showAreaDrop=!1;else{if(e==="filter-selectAllAreas")return U();if(e==="filter-clearAllAreas")return W();if(e==="categoryModal-open")d.showCatModal=!0;else if(e==="categoryModal-close")d.showCatModal=!1;else{if(e==="source-copyAll")return M();if(e==="source-copyPanel")return V(i);console.warn("[handleBtnAction] unknown cmd:",e)}}},T=(e,i={})=>{if(e==="areas-toggle")return G(i);if(e==="categoryModal-apply")return h(i);console.warn("[handleSelectAction] unknown cmd:",e)},D=(e,i,t)=>{if(e==="cmPopup-category-pick"){if(t==null){d.showCatModal=!1;return}return h(t)}else console.warn("[fnCallbackModal] unknown popCmd:",e)},g=l(()=>[...p].map(e=>x.get(e)||"").filter(Boolean)),P=l(()=>p.size===0?"\uCE74\uD14C\uACE0\uB9AC":p.size<=2?g.value.join(", "):`${p.size}\uAC1C`),h=e=>{p.clear(),x.clear(),(e||[]).forEach(i=>{const t=coUtil.cofAnd(i,typeof i=="object"),o=t?i.id:i;o!=null&&(p.add(o),coUtil.cofAnd(t,i.nm)&&x.set(o,i.nm))})},I=l(()=>{const e=["\uD56D\uC0C1 \uD45C\uC2DC"];return b?(e.push("\uB85C\uADF8\uC778 \uD544\uC694"),(f==="\uC6B0\uC218"||f==="VIP")&&e.push("\uB85C\uADF8\uC778+\uC6B0\uC218"),f==="VIP"&&e.push("\uB85C\uADF8\uC778+VIP"),e):(e.push("\uBE44\uB85C\uADF8\uC778 \uC804\uC6A9"),e)}),u=l(()=>{var e;return(((e=window.useFoCodeStore)==null?void 0:e.call(window).svCodes)||[]).filter(i=>i.codeGrp==="DISP_AREA"&&i.useYn==="Y").sort((i,t)=>i.sortOrd-t.sortOrd)}),B=e=>{const i=d.previewDate;if(!i)return!0;const t=`${i}T${d.previewTime||"00:00"}`,o=n=>String(n||"").replace(" ","T").slice(0,16);return!(e.dispStartDt&&t<o(e.dispStartDt)||e.dispEndDt&&t>o(e.dispEndDt))},C=e=>{if(r.status&&e.status!==r.status||!B(e)||r.condition&&(e.condition||"\uD56D\uC0C1 \uD45C\uC2DC")!==r.condition||r.authrequired==="Y"&&!e.authRequired||r.authrequired==="N"&&e.authRequired||r.authgrade&&e.authGrade!==r.authgrade)return!1;if(p.size>0){const i=g.value;if(!(i.some(o=>e.name.includes(o))||(e.rows||[]).some(o=>i.some(n=>(o.widgetNm||"").includes(n)))))return!1}return!0},w=e=>A[e]||e||"-",N=e=>_[e]||"\u25FB",$=l(()=>u.value.filter(e=>a.size===0||a.has(e.codeValue))),m=l(()=>$.value.map(e=>{const i=[].filter(t=>t.area===e.codeValue&&C(t)).sort((t,o)=>(t.sortOrder||0)-(o.sortOrder||0));return{area:e,panels:i,uiState:d,codes:y}})),v=e=>{const i=e.rows||[],t=[`  area="${e.area}"`,`  panelId="${String(e.dispId).padStart(4,"0")}"`,`  status="${e.status}"`,`  condition="${e.condition||"\uD56D\uC0C1 \uD45C\uC2DC"}"`,e.authRequired?"  authRequired":null,e.authGrade?`  authGrade="${e.authGrade}"`:null].filter(Boolean).join(`
`);if(i.length===0)return`<DispPanel
${t}>

  <!-- \uC704\uC82F \uC5C6\uC74C -->

</DispPanel>`;const o=i.map((n,R)=>`  // \uC704\uC82F${R+1}: ${w(n.widgetType)}${n.widgetNm?` (${n.widgetNm})`:""}
  <DispWidget widgetType="${n.widgetType}" />`).join(`

`);return`<DispPanel
${t}>

${o}

</DispPanel>`},L=l(()=>{const e=[];return m.value.forEach(({area:i,panels:t})=>{e.push(`<!-- ===== ${i.codeValue} ${i.codeLabel} (${t.length}\uAC1C) ===== -->`),t.forEach(o=>{e.push(v(o))}),e.push("")}),e.join(`

`)}),M=()=>{var e;(e=navigator.clipboard)==null||e.writeText(L.value).then(()=>{d.copied=!0,setTimeout(()=>{d.copied=!1},2e3)})},V=e=>{var i;(i=navigator.clipboard)==null||i.writeText(v(e)).then(()=>{d.copiedPanel=e.dispId,setTimeout(()=>{d.copiedPanel=null},2e3)})},j=e=>{const i=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return v(e).split(`
`).map(t=>{const o=i(t);let n="#e6edf3";return/^(&lt;DispPanel|&lt;\/DispPanel)/.test(o)?n="#79c0ff":/^\s+\/\//.test(t)?n="#8b949e":o.includes("&lt;DispWidget")?n="#f6ad55":o.includes("&lt;!--")?n="#8b949e":/^  [a-z]/.test(t)&&(n="#d2a8ff"),`<span style="color:${n};">${o}</span>`}).join(`
`)},E=l(()=>a.size===0?"\uC804\uCCB4 \uC601\uC5ED":`${a.size}\uAC1C \uC120\uD0DD`),G=e=>{a.has(e)?a.delete(e):a.add(e)},U=()=>{u.value.forEach(e=>a.add(e.codeValue))},W=()=>{a.clear()},q=()=>{d.previewDate=k,d.previewTime=new Date().toTimeString().slice(0,5)};return{uiState:d,codes:y,searchParam:r,handleBtnAction:S,handleSelectAction:T,fnCallbackModal:D,selectedAreas:a,cfAllAreas:u,cfAreaBtnLabel:E,selectedCatIds:p,cfCatBtnLabel:P,cfSelectedCatNames:g,isLoggedIn:b,userGrade:f,userNm:z,cfAccessibleConds:I,cfPanelsByArea:m,panelSourceHtml:j,fnWLabel:w,fnWIcon:N}},template:`
<fo-page bare>
<div style="padding:clamp(12px,3vw,24px);">
  <!-- ===== \u25A0. \uC81C\uBAA9 ====================================================== -->
  <div style="display:flex;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
    <div style="font-size:16px;font-weight:700;">
      13. \uC804\uC2DC\uC601\uC5ED \uC18C\uC2A4 \uBCF4\uAE30
      <span style="font-size:12px;font-weight:400;color:#888;margin-left:8px;">
        \uD328\uB110\uBCC4 DispPanel \uC18C\uC2A4 \uCF54\uB4DC
      </span>
    </div>
    <button @click="handleBtnAction('source-copyAll')" style="margin-left:auto;font-size:12px;padding:4px 14px;border:1px solid #ddd;border-radius:6px;cursor:pointer;"
      :style="uiState.copied?'background:#e8f5e9;border-color:#a5d6a7;color:#2e7d32;font-weight:600;':'background:#fff;color:#555;'">
      {{ uiState.copied ? '\u2713 \uC804\uCCB4 \uBCF5\uC0AC\uB428' : '\u{1F4CB} \uC804\uCCB4 \uC18C\uC2A4 \uBCF5\uC0AC' }}
    </button>
  </div>
  <!-- ===== \u25A1. \uC81C\uBAA9 ====================================================== -->
  <!-- ===== \u25A0. \uD544\uD130 \uBC14 ==================================================== -->
  <div style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:12px 16px;margin-bottom:12px;">
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
        style="font-size:12px;padding:4px 12px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;"
        :style="selectedCatIds.size>0?'border-color:#8e44ad;color:#8e44ad;font-weight:600;':''">
        \u{1F4C2} {{ cfCatBtnLabel }}
      </button>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD654\uBA74\uC601\uC5ED \uBA40\uD2F0\uC120\uD0DD =========================================== -->
      <div style="position:relative;">
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
        <div v-if="uiState.showAreaDrop" style="position:absolute;left:0;top:calc(100% + 4px);z-index:100;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12);min-width:220px;max-height:300px;overflow-y:auto;padding:8px 0;">
          <div style="display:flex;gap:6px;padding:6px 12px;border-bottom:1px solid #f0f0f0;">
            <button @click.stop="handleBtnAction('filter-selectAllAreas')" style="font-size:11px;padding:2px 8px;border:1px solid #1565c0;border-radius:6px;background:#e3f2fd;color:#1565c0;cursor:pointer;">
              \uC804\uCCB4\uC120\uD0DD
            </button>
            <button @click.stop="handleBtnAction('filter-clearAllAreas')"  style="font-size:11px;padding:2px 8px;border:1px solid #ddd;border-radius:6px;background:#fff;color:#888;cursor:pointer;">
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
      <!-- ===== \u25A0.\u25A0. \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uD604\uD669 ============================================ -->
      <div v-if="selectedCatIds.size>0" style="margin-top:6px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
        <span style="font-size:11px;color:#8e44ad;font-weight:600;">
          \u{1F4C2} \uCE74\uD14C\uACE0\uB9AC \uD544\uD130:
        </span>
        <span v-for="nm in cfSelectedCatNames" :key="nm"
        style="font-size:11px;background:#f3e5f5;color:#8e44ad;border-radius:8px;padding:2px 8px;">
          {{ nm }}
        </span>
      </div>
      <!-- ===== \u25A1.\u25A1. \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uD604\uD669 ============================================ -->
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
  <!-- ===== \u25A0. \uC601\uC5ED\uBCC4 \uD328\uB110+\uC18C\uC2A4 \uBAA9\uB85D ============================================ -->
  <div v-if="cfPanelsByArea.length===0" style="text-align:center;padding:48px;color:#ccc;font-size:13px;">
    \uC870\uAC74\uC5D0 \uB9DE\uB294 \uC601\uC5ED/\uD328\uB110\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
  </div>
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div v-for="{ area, panels } in cfPanelsByArea" :key="area.codeValue" style="margin-bottom:14px;">
    <!-- ===== \u25A0.\u25A0. \uC601\uC5ED \uD5E4\uB354 ================================================= -->
    <div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:#1e3a5f;color:#fff;border-radius:6px 6px 0 0;">
      <span style="font-size:10px;background:rgba(255,255,255,.18);border-radius:4px;padding:2px 8px;font-family:monospace;letter-spacing:.5px;">
        {{ area.codeValue }}
      </span>
      <span style="font-size:13px;font-weight:700;">
        {{ area.codeLabel }}
      </span>
      <span style="margin-left:auto;font-size:11px;background:rgba(255,255,255,.15);border-radius:8px;padding:2px 9px;">
        \uD328\uB110 {{ panels.length }}\uAC1C
      </span>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC601\uC5ED \uD5E4\uB354 ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uD328\uB110 \uC5C6\uC74C ================================================= -->
    <div v-if="panels.length===0"
      style="padding:18px;text-align:center;font-size:12px;color:#bbb;background:#f9f9f9;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 6px 6px;">
      \uD574\uB2F9 \uC870\uAC74\uC758 \uD328\uB110\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
    <!-- ===== \u25A1.\u25A1. \uD328\uB110 \uC5C6\uC74C ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uD328\uB110\uBCC4 \uCE74\uB4DC (\uC88C: \uD328\uB110\uC815\uBCF4 | \uC911\uC559: \uC704\uC82F \uCF58\uD150\uCE20 | \uC6B0: \uC18C\uC2A4) ================= -->
    <div v-for="(panel, pi) in panels" :key="panel.dispId"
      style="display:flex;flex-wrap:wrap;border:1px solid #e0e0e0;border-top:none;"
      :style="pi===panels.length-1?'border-radius:0 0 6px 6px;overflow:hidden;':''">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC88C: \uD328\uB110 \uC815\uBCF4 ============================================ -->
      <div style="width:155px;flex-shrink:0;padding:10px 12px;background:#fafafa;border-right:1px solid #e8e8e8;">
        <div style="font-size:9px;background:#e8f0fe;color:#1a73e8;border-radius:3px;padding:1px 5px;display:inline-block;margin-bottom:5px;font-weight:600;">
          DispPanel
        </div>
        <code style="display:block;font-size:10px;color:#888;margin-bottom:4px;">#{{ String(panel.dispId).padStart(4,'0') }}</code>
          <div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:6px;line-height:1.4;word-break:keep-all;">
            {{ panel.name }}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:3px;margin-bottom:4px;">
            <span style="font-size:9px;border-radius:6px;padding:1px 6px;"
            :style="panel.status==='\uD65C\uC131'?'background:#e8f5e9;color:#2e7d32;':'background:#f5f5f5;color:#999;'">
              {{ panel.status }}
            </span>
            <span style="font-size:9px;background:#e3f2fd;color:#1565c0;border-radius:6px;padding:1px 6px;">
              {{ panel.condition || '\uD56D\uC0C1 \uD45C\uC2DC' }}
            </span>
            <span v-if="panel.authRequired" style="font-size:9px;background:#fce4ec;color:#c62828;border-radius:6px;padding:1px 6px;">
              \uC778\uC99D
            </span>
            <span v-if="panel.authGrade" style="font-size:9px;background:#f3e5f5;color:#6a1b9a;border-radius:6px;padding:1px 6px;">
              {{ panel.authGrade }}\u2191
            </span>
          </div>
          <div v-if="panel.dispStartDt||panel.dispEndDt" style="font-size:9px;color:#aaa;margin-top:4px;">
            \u{1F4C5} {{ panel.dispStartDt||'\u221E' }} ~ {{ panel.dispEndDt||'\u221E' }}
          </div>
          <div style="font-size:9px;color:#bbb;margin-top:6px;">
            \uC704\uC82F {{ (panel.rows||[]).length }}\uAC1C
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0. \uC911\uC559: \uC704\uC82F \uCF58\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30 ===================================== -->
        <div style="flex:1;min-width:0;background:#fff;border-right:1px solid #e8e8e8;">
          <div v-if="!panel.rows||panel.rows.length===0"
          style="padding:24px;text-align:center;font-size:12px;color:#ccc;">
            (\uC704\uC82F \uC5C6\uC74C)
          </div>
          <div v-for="(w, wi) in (panel.rows||[])" :key="wi"
          style="border-bottom:1px solid #f0f0f0;padding:10px 14px;">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F \uD5E4\uB354 =========================================== -->
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
              <span style="font-size:10px;color:#bbb;">
                \uC704\uC82F{{ wi+1 }}
              </span>
              <span style="font-size:10px;background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:3px;padding:1px 5px;white-space:nowrap;">
                {{ fnWIcon(w.widgetType) }} {{ fnWLabel(w.widgetType) }}
              </span>
              <span v-if="w.widgetNm" style="font-size:11px;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                {{ w.widgetNm }}
              </span>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F \uCF58\uD150\uCE20 \uB80C\uB354\uB9C1 ====================================== -->
            <div v-if="w.widgetType==='image_banner'"
            style="background:linear-gradient(135deg,#667eea,#764ba2);border-radius:8px;padding:22px 14px;text-align:center;color:#fff;">
              <div style="font-size:26px;">
                \u{1F5BC}
              </div>
              <div style="font-size:13px;font-weight:700;margin-top:5px;">
                {{ w.widgetNm }}
              </div>
              <div v-if="w.clickTarget" style="font-size:10px;opacity:.8;margin-top:3px;">
                \u2192 {{ w.clickTarget }}
              </div>
            </div>
            <div v-else-if="w.widgetType==='product_slider'">
              <div style="display:flex;gap:6px;overflow:hidden;">
                <div v-for="n in 4" :key="n" style="flex:0 0 90px;border:1px solid #ececec;border-radius:6px;overflow:hidden;">
                  <div style="height:60px;background:linear-gradient(135deg,#f0f0f0,#e4e4e4);display:flex;align-items:center;justify-content:center;font-size:20px;">
                    \u{1F4E6}
                  </div>
                  <div style="padding:5px 6px;">
                    <div style="font-size:9px;color:#555;">
                      \uC0C1\uD488\uBA85
                    </div>
                    <div style="font-size:11px;font-weight:700;color:#e8587a;">
                      \u20A900,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="w.widgetType==='product'" style="display:flex;gap:10px;align-items:center;">
              <div style="width:70px;height:70px;background:linear-gradient(135deg,#f0f0f0,#e4e4e4);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;">
                \u{1F4E6}
              </div>
              <div>
                <div style="font-size:10px;color:#aaa;">
                  \uB2E8\uD488 \uC0C1\uD488
                </div>
                <div style="font-size:13px;font-weight:700;">
                  \uC0C1\uD488\uBA85
                </div>
                <div style="font-size:14px;font-weight:800;color:#e8587a;">
                  \u20A900,000
                </div>
              </div>
            </div>
            <div v-else-if="w.widgetType==='cond_product'">
              <div v-for="n in 2" :key="n" style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid #f5f5f5;">
                <div style="width:36px;height:36px;background:#f0f0f0;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;">
                  \u{1F4E6}
                </div>
                <div>
                  <div style="font-size:11px;color:#444;">
                    \uC0C1\uD488\uBA85 {{ n }}
                  </div>
                  <div style="font-size:11px;font-weight:700;color:#e8587a;">
                    \u20A900,000
                  </div>
                </div>
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================== -->
            <div v-else-if="w.widgetType==='chart_bar'">
              <div style="display:flex;align-items:flex-end;gap:4px;height:70px;border-bottom:1px solid #eee;">
                <div v-for="(h,ci) in [55,78,42,88,65,92,70]" :key="ci" style="flex:1;border-radius:3px 3px 0 0;" :style="'height:'+h+'%;background:linear-gradient(180deg,#667eea,#764ba2);'">
                </div>
              </div>
              <div style="display:flex;justify-content:space-around;margin-top:3px;">
                <span v-for="d in ['\uC6D4','\uD654','\uC218','\uBAA9','\uAE08','\uD1A0','\uC77C']" :key="d" style="font-size:9px;color:#aaa;">
                  {{ d }}
                </span>
              </div>
            </div>
            <div v-else-if="w.widgetType==='chart_line'">
              <svg viewBox="0 0 240 70" style="width:100%;height:70px;">
                <polyline points="0,55 34,38 68,48 102,16 136,28 170,10 204,20 240,14" fill="none" stroke="#667eea" stroke-width="2.5" stroke-linejoin="round"/>
                <polyline points="0,55 34,38 68,48 102,16 136,28 170,10 204,20 240,14 240,70 0,70" fill="#667eea" opacity=".1"/>
              </svg>
            </div>
            <div v-else-if="w.widgetType==='chart_pie'" style="display:flex;align-items:center;gap:12px;">
              <svg viewBox="0 0 100 100" style="width:70px;height:70px;flex-shrink:0;">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#667eea" stroke-width="24" stroke-dasharray="72 28" stroke-dashoffset="25"/>
                <circle cx="50" cy="50" r="38" fill="none" stroke="#f6ad55" stroke-width="24" stroke-dasharray="17 83" stroke-dashoffset="-47"/>
                <circle cx="50" cy="50" r="38" fill="none" stroke="#68d391" stroke-width="24" stroke-dasharray="11 89" stroke-dashoffset="-64"/>
              </svg>
              <div style="font-size:10px;">
                <div style="margin-bottom:3px;">
                  <span style="display:inline-block;width:7px;height:7px;background:#667eea;border-radius:50%;margin-right:4px;">
                  </span>
                  \uCE74\uD14C\uACE0\uB9ACA 72%
                </div>
                <div style="margin-bottom:3px;">
                  <span style="display:inline-block;width:7px;height:7px;background:#f6ad55;border-radius:50%;margin-right:4px;">
                  </span>
                  \uCE74\uD14C\uACE0\uB9ACB 17%
                </div>
                <div>
                  <span style="display:inline-block;width:7px;height:7px;background:#68d391;border-radius:50%;margin-right:4px;">
                  </span>
                  \uAE30\uD0C0 11%
                </div>
              </div>
            </div>
            <div v-else-if="w.widgetType==='text_banner'"
            style="background:#f8f9fa;border-left:4px solid #667eea;border-radius:0 8px 8px 0;padding:12px 14px;">
              <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:4px;">
                {{ w.widgetNm }}
              </div>
              <div style="font-size:11px;color:#666;line-height:1.7;">
                \uD14D\uC2A4\uD2B8 \uBC30\uB108 \uCEE8\uD150\uCE20\uAC00 \uC774 \uC601\uC5ED\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================== -->
            <div v-else-if="w.widgetType==='info_card'"
            style="background:linear-gradient(135deg,#e3f2fd,#bbdefb);border-radius:8px;padding:14px;display:flex;align-items:center;gap:12px;">
              <div style="font-size:28px;">
                \u2139
              </div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#1565c0;">
                  {{ w.widgetNm }}
                </div>
                <div style="font-size:11px;color:#1976d2;">
                  \uC815\uBCF4 \uCE74\uB4DC \uCEE8\uD150\uCE20 \uC601\uC5ED\uC785\uB2C8\uB2E4.
                </div>
              </div>
            </div>
            <div v-else-if="w.widgetType==='popup'"
            style="border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
              <div style="background:#f5f5f5;padding:6px 10px;border-bottom:1px solid #e0e0e0;display:flex;justify-content:space-between;">
                <span style="font-size:10px;font-weight:700;color:#555;">
                  \uD31D\uC5C5
                </span>
                <span style="color:#aaa;">
                  \xD7
                </span>
              </div>
              <div style="padding:16px;text-align:center;">
                <div style="font-size:22px;margin-bottom:5px;">
                  \u{1F4AC}
                </div>
                <div style="font-size:12px;font-weight:700;">
                  {{ w.widgetNm }}
                </div>
              </div>
            </div>
            <div v-else-if="w.widgetType==='file'"
            style="display:flex;align-items:center;gap:10px;background:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;padding:12px;">
              <span style="font-size:24px;">
                \u{1F4CE}
              </span>
              <div>
                <div style="font-size:12px;font-weight:700;">
                  {{ w.widgetNm }}
                </div>
                <div style="font-size:10px;color:#999;">
                  \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC
                </div>
              </div>
            </div>
            <div v-else-if="w.widgetType==='file_list'">
              <div v-for="n in 3" :key="n" style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid #f0f0f0;">
                <span style="font-size:16px;">
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
            <div v-else-if="w.widgetType==='coupon'"
            style="border:2px dashed #e8587a;border-radius:8px;padding:14px;display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#fff5f7,#fce4ec);">
              <div style="font-size:28px;">
                \u{1F39F}
              </div>
              <div style="flex:1;">
                <div style="font-size:13px;font-weight:800;color:#c2185b;">
                  {{ w.widgetNm }}
                </div>
                <div style="font-size:10px;color:#e8587a;">
                  \uCFE0\uD3F0 \uBC1C\uAE09 \uC774\uBCA4\uD2B8
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD5E4\uB354 \uC601\uC5ED ========================================= -->
              <div style="background:#e8587a;color:#fff;border-radius:6px;padding:8px 12px;font-size:11px;font-weight:700;white-space:nowrap;">
                \uCFE0\uD3F0 \uBC1B\uAE30
              </div>
            </div>
            <div v-else-if="w.widgetType==='html_editor'"
            style="background:#1e1e2e;border-radius:8px;padding:12px;font-family:monospace;font-size:11px;color:#a9b7c6;line-height:1.8;">
              <span style="color:#cc7832;">
                &lt;div&gt;
              </span>
              <br>
              <span style="padding-left:14px;">
                &nbsp;&nbsp;HTML \uCEE8\uD150\uCE20 \uC601\uC5ED ({{ w.widgetNm }})
              </span>
              <br>
              <span style="color:#cc7832;">
                &lt;/div&gt;
              </span>
            </div>
            <div v-else-if="w.widgetType==='event_banner'"
            style="background:linear-gradient(135deg,#f093fb,#f5576c);border-radius:8px;padding:18px;text-align:center;color:#fff;">
              <div style="font-size:22px;margin-bottom:6px;">
                \u{1F389}
              </div>
              <div style="font-size:14px;font-weight:800;">
                {{ w.widgetNm }}
              </div>
            </div>
            <div v-else-if="w.widgetType==='cache_banner'"
            style="background:linear-gradient(135deg,#f6d365,#fda085);border-radius:8px;padding:14px;display:flex;align-items:center;gap:12px;color:#fff;">
              <div style="font-size:28px;">
                \u{1F4B0}
              </div>
              <div>
                <div style="font-size:11px;opacity:.85;">
                  \uC801\uB9BD\uAE08 / \uCE90\uC2DC
                </div>
                <div style="font-size:18px;font-weight:800;">
                  +0,000P
                </div>
              </div>
            </div>
            <div v-else-if="w.widgetType==='widget_embed'"
            style="border:2px dashed #a0aec0;border-radius:8px;padding:18px;text-align:center;background:#f7fafc;">
              <div style="font-size:22px;margin-bottom:5px;">
                \u{1F9E9}
              </div>
              <div style="font-size:12px;font-weight:700;color:#4a5568;">
                {{ w.widgetNm }}
              </div>
              <div style="font-size:10px;color:#a0aec0;">
                \uC678\uBD80 \uC704\uC82F \uC784\uBCA0\uB4DC
              </div>
            </div>
            <div v-else style="background:#f5f5f5;border-radius:8px;padding:14px;text-align:center;color:#888;">
              <div style="font-size:20px;margin-bottom:4px;">
                {{ fnWIcon(w.widgetType) }}
              </div>
              <div style="font-size:11px;">
                {{ fnWLabel(w.widgetType) }}
              </div>
            </div>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0. \uC6B0: \uC18C\uC2A4 \uCF54\uB4DC ============================================ -->
        <div style="width:260px;flex-shrink:0;background:#161b22;position:relative;display:flex;flex-direction:column;">
          <button @click="handleBtnAction('source-copyPanel', panel)"
          style="position:absolute;top:6px;right:8px;font-size:10px;padding:2px 8px;border-radius:4px;border:1px solid;cursor:pointer;z-index:1;"
          :style="uiState.copiedPanel===panel.dispId?'background:rgba(46,125,50,.35);color:#81c784;border-color:rgba(129,199,132,.4);':'background:rgba(255,255,255,.06);color:#888;border-color:rgba(255,255,255,.12);'">
            {{ uiState.copiedPanel===panel.dispId ? '\u2713 \uBCF5\uC0AC\uB428' : '\u{1F4CB}' }}
          </button>
          <pre style="margin:0;padding:12px 12px 12px 14px;font-family:'Consolas','Menlo',monospace;font-size:11px;line-height:1.75;overflow-x:auto;white-space:pre;flex:1;"
          v-html="panelSourceHtml(panel)"></pre>
          </div>
        </div>
      </div>
    </div>
    <fo-cm-popup-modal popup-cmd="cmPopup-category-pick" popup-code="category" :multi="true" result-type="array" :show="uiState.showCatModal" :init-selected-ids="[...selectedCatIds]" :on-callback="fnCallbackModal" />
    <!-- ===== \u25A1.\u25A1. \uD328\uB110\uBCC4 \uCE74\uB4DC (\uC88C: \uD328\uB110\uC815\uBCF4 | \uC911\uC559: \uC704\uC82F \uCF58\uD150\uCE20 | \uC6B0: \uC18C\uC2A4) ================= -->
    <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
</fo-page>
`};
