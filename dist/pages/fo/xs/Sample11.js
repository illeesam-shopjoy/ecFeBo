window.XsSample11={name:"XsSample11",components:{"category-select-modal":window.CategorySelectModal},setup(){const{reactive:l,computed:p,onMounted:E,watch:G}=Vue,t=l({loading:!1,error:null,previewDate:coUtil.cofToYmd(new Date),tabMode:"card",showDesc:!0,previewTime:new Date().toTimeString().slice(0,5),showAreaDrop:!1,showCatModal:!1}),w=l({active_status_opts:[{value:"\uD65C\uC131",label:"\uD65C\uC131"},{value:"\uBE44\uD65C\uC131",label:"\uBE44\uD65C\uC131"}],need_yn_opts:[{value:"Y",label:"\uD544\uC694"},{value:"N",label:"\uBD88\uD544\uC694"}],condition_opts:["\uD56D\uC0C1 \uD45C\uC2DC","\uB85C\uADF8\uC778 \uD544\uC694","\uB85C\uADF8\uC778+VIP","\uB85C\uADF8\uC778+\uC6B0\uC218","\uBE44\uB85C\uADF8\uC778 \uC804\uC6A9"],auth_grade_opts:["\uC77C\uBC18","\uC6B0\uC218","VIP"]}),m=coUtil.cofToYmd(new Date),r=l(new Set),n=l(new Set),x=l(new Map),s=window.useFoAuthStore?window.useFoAuthStore():null,b=s?s.sgIsLoggedIn:!1,c=s&&s.svAuthUser?s.svAuthUser.grade||"\uC77C\uBC18":"",k=s&&s.svAuthUser&&(s.svAuthUser.authNm||s.svAuthUser.memberNm||s.svAuthUser.email)||"",i=l({status:"",condition:"",authrequired:"",authgrade:""}),A={image_banner:"\uC774\uBBF8\uC9C0 \uBC30\uB108",product_slider:"\uC0C1\uD488 \uC2AC\uB77C\uC774\uB354",product:"\uC0C1\uD488",cond_product:"\uC870\uAC74\uC0C1\uD488",chart_bar:"\uCC28\uD2B8(Bar)",chart_line:"\uCC28\uD2B8(Line)",chart_pie:"\uCC28\uD2B8(Pie)",text_banner:"\uD14D\uC2A4\uD2B8 \uBC30\uB108",info_card:"\uC815\uBCF4\uCE74\uB4DC",popup:"\uD31D\uC5C5",file:"\uD30C\uC77C",file_list:"\uD30C\uC77C\uBAA9\uB85D",coupon:"\uCFE0\uD3F0",html_editor:"HTML \uC5D0\uB514\uD130",event_banner:"\uC774\uBCA4\uD2B8",cache_banner:"\uCE90\uC2DC",widget_embed:"\uC704\uC82F"},z={image_banner:"\u{1F5BC}",product_slider:"\u{1F6D2}",product:"\u{1F4E6}",cond_product:"\u{1F50D}",chart_bar:"\u{1F4CA}",chart_line:"\u{1F4C8}",chart_pie:"\u{1F967}",text_banner:"\u{1F4DD}",info_card:"\u2139",popup:"\u{1F4AC}",file:"\u{1F4CE}",file_list:"\u{1F4C1}",coupon:"\u{1F39F}",html_editor:"\u{1F4C4}",event_banner:"\u{1F389}",cache_banner:"\u{1F4B0}",widget_embed:"\u{1F9E9}"},S=(e,o={})=>{if(e==="filter-resetDate")return N();if(e==="filter-setTabMode")t.tabMode=o;else if(e==="filter-toggleDesc")t.showDesc=!t.showDesc;else if(e==="filter-toggleAreaDrop")t.showAreaDrop=!t.showAreaDrop;else if(e==="filter-closeAreaDrop")t.showAreaDrop=!1;else{if(e==="filter-selectAllAreas")return V();if(e==="filter-clearAllAreas")return B();e==="categoryModal-open"?t.showCatModal=!0:e==="categoryModal-close"?t.showCatModal=!1:console.warn("[handleBtnAction] unknown cmd:",e)}},_=(e,o={})=>{if(e==="areas-toggle")return T(o);if(e==="categoryModal-apply")return v(o);console.warn("[handleSelectAction] unknown cmd:",e)},D=(e,o,a)=>{if(e==="cmPopup-category-pick"){if(a==null){t.showCatModal=!1;return}return v(a)}else console.warn("[fnCallbackModal] unknown popCmd:",e)},u=p(()=>[...n].map(e=>x.get(e)||"").filter(Boolean)),M=p(()=>n.size===0?"\uCE74\uD14C\uACE0\uB9AC":n.size<=2?u.value.join(", "):`${n.size}\uAC1C`),v=e=>{n.clear(),x.clear(),(e||[]).forEach(o=>{const a=coUtil.cofAnd(o,typeof o=="object"),d=a?o.id:o;d!=null&&(n.add(d),coUtil.cofAnd(a,o.nm)&&x.set(d,o.nm))})},I=p(()=>{const e=["\uD56D\uC0C1 \uD45C\uC2DC"];return b?(e.push("\uB85C\uADF8\uC778 \uD544\uC694"),(c==="\uC6B0\uC218"||c==="VIP")&&e.push("\uB85C\uADF8\uC778+\uC6B0\uC218"),c==="VIP"&&e.push("\uB85C\uADF8\uC778+VIP"),e):(e.push("\uBE44\uB85C\uADF8\uC778 \uC804\uC6A9"),e)}),P=e=>A[e]||e||"-",C=e=>z[e]||"\u25AA",f=p(()=>{var e;return(((e=window.useFoCodeStore)==null?void 0:e.call(window).svCodes)||[]).filter(o=>o.codeGrp==="DISP_AREA"&&o.useYn==="Y").sort((o,a)=>o.sortOrd-a.sortOrd)}),y=p(()=>r.size===0?f.value:f.value.filter(e=>r.has(e.codeValue))),T=e=>{r.has(e)?r.delete(e):r.add(e)},V=()=>{f.value.forEach(e=>r.add(e.codeValue))},B=()=>{r.clear()},L=p(()=>r.size===0?"\uC804\uCCB4 \uC601\uC5ED":`${r.size}\uAC1C \uC120\uD0DD`),N=()=>{t.previewDate=m,t.previewTime=new Date().toTimeString().slice(0,5)},F=e=>{const o=t.previewDate;if(!o)return!0;const a=`${o}T${t.previewTime||"00:00"}`,d=g=>String(g||"").replace(" ","T").slice(0,16);return!(e.dispStartDt&&a<d(e.dispStartDt)||e.dispEndDt&&a>d(e.dispEndDt))},U=e=>{if(i.status&&e.status!==i.status||!F(e)||i.condition&&(e.condition||"\uD56D\uC0C1 \uD45C\uC2DC")!==i.condition||i.authrequired==="Y"&&!e.authRequired||i.authrequired==="N"&&e.authRequired||i.authgrade&&e.authGrade!==i.authgrade)return!1;if(n.size>0){const o=u.value;if(!(o.some(d=>e.name.includes(d))||(e.rows||[]).some(d=>o.some(g=>(d.widgetNm||"").includes(g)))))return!1}return!0},h=e=>[].filter(o=>o.area===e&&U(o)).sort((o,a)=>(o.sortOrder||0)-(a.sortOrder||0)),q=p(()=>y.value.reduce((e,o)=>e+h(o.codeValue).length,0));return{uiState:t,codes:w,searchParam:i,handleBtnAction:S,handleSelectAction:_,fnCallbackModal:D,selectedAreas:r,cfAllAreas:f,cfAreaList:y,cfAreaBtnLabel:L,selectedCatIds:n,cfCatBtnLabel:M,cfSelectedCatNames:u,isLoggedIn:b,userGrade:c,userNm:k,cfAccessibleConds:I,panelsForArea:h,cfTotalPanels:q,fnWLabel:P,fnWIcon:C}},template:`
<fo-page bare>
<div style="padding:clamp(12px,3vw,24px);">
  <!-- ===== \u25A0. \uC81C\uBAA9 ====================================================== -->
  <div style="font-size:16px;font-weight:700;margin-bottom:12px;">
    11. \uC804\uC2DC\uC601\uC5ED \uBBF8\uB9AC\uBCF4\uAE30
    <span style="font-size:12px;font-weight:400;color:#888;margin-left:8px;">
      \uD654\uBA74\uC601\uC5ED\uBCC4 \uD65C\uC131 \uD328\uB110 \uBAA9\uB85D
    </span>
  </div>
  <!-- ===== \u25A1. \uC81C\uBAA9 ====================================================== -->
  <!-- ===== \u25A0. \uD544\uD130 \uBC14 ==================================================== -->
  <div style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:12px 16px;margin-bottom:8px;">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC804\uC2DC\uC77C\uC2DC ================================================ -->
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
      <div style="width:1px;height:24px;background:#e0e0e0;">
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBCF4\uAE30 \uBAA8\uB4DC =============================================== -->
      <div style="display:flex;border:1px solid #ddd;border-radius:6px;overflow:hidden;">
        <button @click="handleBtnAction('filter-setTabMode', 'list')" style="font-size:11px;padding:3px 10px;border:none;cursor:pointer;" :style="uiState.tabMode==='list'?'background:#333;color:#fff;':'background:#fff;color:#666;'">
          \u2630 \uB9AC\uC2A4\uD2B8
        </button>
        <button @click="handleBtnAction('filter-setTabMode', 'card')" style="font-size:11px;padding:3px 10px;border:none;border-left:1px solid #ddd;cursor:pointer;" :style="uiState.tabMode==='card'?'background:#333;color:#fff;':'background:#fff;color:#666;'">
          \u{1F5BC} \uCE74\uB4DC
        </button>
        <button @click="handleBtnAction('filter-setTabMode', 'expand')" style="font-size:11px;padding:3px 10px;border:none;border-left:1px solid #ddd;cursor:pointer;" :style="uiState.tabMode==='expand'?'background:#333;color:#fff;':'background:#fff;color:#666;'">
          \u229E \uC0C1\uC138
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC124\uBA85 \uD1A0\uAE00 =============================================== -->
      <button @click="handleBtnAction('filter-toggleDesc')" style="font-size:11px;padding:3px 10px;border-radius:8px;border:1px solid #ddd;cursor:pointer;"
        :style="uiState.showDesc?'background:#e3f2fd;border-color:#90caf9;color:#1565c0;':'background:#fff;color:#999;'">
        {{ uiState.showDesc ? '\u{1F4CB} \uC124\uBA85 \uC228\uAE30\uAE30' : '\u{1F4CB} \uC124\uBA85 \uBCF4\uAE30' }}
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
          <div style="display:flex;gap:6px;padding:6px 12px 6px;border-bottom:1px solid #f0f0f0;">
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
      <!-- ===== \u25A0.\u25A0. \uC870\uD68C \uC870\uAC74 \uC694\uC57D ============================================== -->
      <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;align-items:center;">
        <span style="font-size:11px;color:#aaa;">
          \uC870\uD68C \uC870\uAC74:
        </span>
        <span style="font-size:11px;background:#fff8e1;color:#f57c00;border-radius:8px;padding:2px 8px;">
          \u{1F4C5} {{ uiState.previewDate }} {{ uiState.previewTime }}
        </span>
        <span v-if="searchParam.status" style="font-size:11px;background:#e8f5e9;color:#2e7d32;border-radius:8px;padding:2px 8px;">
          \uC0C1\uD0DC: {{ searchParam.status }}
        </span>
        <span v-if="searchParam.condition" style="font-size:11px;background:#f3e5f5;color:#6a1b9a;border-radius:8px;padding:2px 8px;">
          {{ searchParam.condition }}
        </span>
        <span v-if="searchParam.authrequired==='Y'" style="font-size:11px;background:#fff3e0;color:#e65100;border-radius:8px;padding:2px 8px;">
          \uC778\uC99D \uD544\uC694
        </span>
        <span v-if="searchParam.authrequired==='N'" style="font-size:11px;background:#fce4ec;color:#c62828;border-radius:8px;padding:2px 8px;">
          \uC778\uC99D \uBD88\uD544\uC694
        </span>
        <span v-if="searchParam.authgrade" style="font-size:11px;background:#f3e5f5;color:#6a1b9a;border-radius:8px;padding:2px 8px;">
          \uB4F1\uAE09: {{ searchParam.authgrade }}\u2191
        </span>
        <template v-for="nm in cfSelectedCatNames" :key="nm">
          <span style="font-size:11px;background:#e8f5e9;color:#2e7d32;border-radius:8px;padding:2px 8px;">
            \u{1F4C2} {{ nm }}
          </span>
        </template>
        <span style="font-size:11px;background:#e3f2fd;color:#1565c0;border-radius:8px;padding:2px 8px;margin-left:auto;">
          \uCD1D {{ cfTotalPanels }}\uAC1C \uD328\uB110
        </span>
      </div>
      <!-- ===== \u25A1.\u25A1. \uC870\uD68C \uC870\uAC74 \uC694\uC57D ============================================== -->
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
  <!-- ===== \u25A0. \uC601\uC5ED\uBCC4 \uD328\uB110 \uBAA9\uB85D =============================================== -->
  <div v-if="cfAreaList.length===0" style="text-align:center;padding:40px;color:#ccc;">
    \uB4F1\uB85D\uB41C \uD654\uBA74\uC601\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
  </div>
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div v-for="area in cfAreaList" :key="area.codeValue" style="margin-bottom:8px;">
    <!-- ===== \u25A0.\u25A0. \uC601\uC5ED \uD5E4\uB354 ================================================= -->
    <div style="background:linear-gradient(90deg,#2d2d2d,#444);color:#fff;padding:8px 14px;border-radius:6px 6px 0 0;display:flex;align-items:center;gap:8px;">
      <span style="font-size:10px;background:rgba(99,179,237,.35);color:#bee3f8;border:1px solid rgba(99,179,237,.4);border-radius:4px;padding:1px 6px;">
        \uC601\uC5ED
      </span>
      <code style="font-size:11px;background:rgba(255,255,255,.15);padding:2px 7px;border-radius:4px;">{{ area.codeValue }}</code>
        <span style="font-size:13px;font-weight:700;">
          {{ area.codeLabel }}
        </span>
        <span style="margin-left:auto;font-size:11px;opacity:.7;">
          \uD328\uB110 {{ panelsForArea(area.codeValue).length }}\uAC1C
        </span>
      </div>
      <!-- ===== \u25A1.\u25A1. \uC601\uC5ED \uD5E4\uB354 ================================================= -->
      <!-- ===== \u25A0.\u25A0. \uD328\uB110 \uC5C6\uC74C ================================================= -->
      <div v-if="panelsForArea(area.codeValue).length===0"
      style="background:#fafafa;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 6px 6px;padding:12px 16px;font-size:12px;color:#bbb;">
        \uD574\uB2F9 \uB0A0\uC9DC \uD65C\uC131 \uD328\uB110 \uC5C6\uC74C
      </div>
      <!-- ===== \u25A1.\u25A1. \uD328\uB110 \uC5C6\uC74C ================================================= -->
      <!-- ===== \u25A0.\u25A0. \uB9AC\uC2A4\uD2B8 \uBAA8\uB4DC ================================================ -->
      <div v-else-if="uiState.tabMode==='list'" style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 6px 6px;overflow:hidden;">
        <div v-for="p in panelsForArea(area.codeValue)" :key="p.dispId"
        style="display:flex;align-items:center;gap:8px;padding:8px 14px;border-bottom:1px solid #f0f0f0;font-size:12px;">
          <code style="font-size:10px;background:#f5f5f5;padding:1px 5px;border-radius:3px;color:#666;flex-shrink:0;">
          #{{ String(p.dispId).padStart(4,'0') }}
        </code>
            <span style="font-weight:600;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
              {{ p.name }}
            </span>
            <span style="font-size:10px;background:#e8f5e9;color:#2e7d32;border-radius:8px;padding:1px 7px;flex-shrink:0;">
              {{ p.status }}
            </span>
            <span style="font-size:10px;background:#e3f2fd;color:#1565c0;border-radius:8px;padding:1px 7px;flex-shrink:0;">
              {{ p.condition || '\uD56D\uC0C1 \uD45C\uC2DC' }}
            </span>
            <span style="font-size:10px;color:#999;flex-shrink:0;">
              \uC704\uC82F {{ (p.rows||[]).length }}\uAC1C
            </span>
          </div>
        </div>
        <!-- ===== \u25A1.\u25A1. \uB9AC\uC2A4\uD2B8 \uBAA8\uB4DC ================================================ -->
        <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uBAA8\uB4DC ================================================= -->
        <div v-else-if="uiState.tabMode==='card'" style="background:#f9f9f9;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 6px 6px;padding:10px;display:flex;flex-wrap:wrap;gap:8px;">
          <div v-for="p in panelsForArea(area.codeValue)" :key="p.dispId"
        style="background:#fff;border:1px solid #e0e0e0;border-radius:6px;padding:10px 12px;min-width:180px;flex:1;max-width:260px;">
            <div style="display:flex;align-items:center;gap:5px;margin-bottom:6px;">
              <code style="font-size:9px;background:#f0f0f0;padding:1px 4px;border-radius:3px;color:#777;">
            #{{ String(p.dispId).padStart(4,'0') }}
          </code>
                <span style="font-size:10px;background:#e8f5e9;color:#2e7d32;border-radius:6px;padding:1px 6px;">
                  {{ p.status }}
                </span>
              </div>
              <div style="font-size:13px;font-weight:700;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                {{ p.name }}
              </div>
              <div v-if="uiState.showDesc ? p.description : false" style="font-size:11px;color:#888;margin-bottom:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
              {{ p.description }}
            </div>
            <div style="font-size:10px;color:#999;">
              {{ p.condition || '\uD56D\uC0C1 \uD45C\uC2DC' }} \xB7 \uC704\uC82F {{ (p.rows||[]).length }}\uAC1C
            </div>
          </div>
        </div>
        <!-- ===== \u25A1.\u25A1. \uCE74\uB4DC \uBAA8\uB4DC ================================================= -->
        <!-- ===== \u25A0.\u25A0. \uC0C1\uC138(expand) \uBAA8\uB4DC ========================================= -->
        <div v-else-if="uiState.tabMode==='expand'" style="border:1px solid #e0e0e0;border-top:none;border-radius:0 0 6px 6px;overflow:hidden;">
          <div v-for="p in panelsForArea(area.codeValue)" :key="p.dispId" style="border-bottom:1px solid #f0f0f0;">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD328\uB110 \uD589 ============================================== -->
            <div style="display:flex;align-items:center;gap:8px;padding:8px 14px;background:#fafafa;">
              <code style="font-size:10px;background:#f0f0f0;padding:1px 5px;border-radius:3px;color:#666;">
            #{{ String(p.dispId).padStart(4,'0') }}
          </code>
                <span style="font-size:13px;font-weight:700;flex:1;">
                  {{ p.name }}
                </span>
                <span style="font-size:10px;background:#e8f5e9;color:#2e7d32;border-radius:8px;padding:1px 7px;">
                  {{ p.status }}
                </span>
                <span style="font-size:10px;background:#e3f2fd;color:#1565c0;border-radius:8px;padding:1px 7px;">
                  {{ p.condition || '\uD56D\uC0C1 \uD45C\uC2DC' }}
                </span>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC124\uBA85 ================================================ -->
              <div v-if="uiState.showDesc ? p.description : false" style="padding:4px 14px 4px 30px;font-size:11px;color:#888;">
              {{ p.description }}
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F \uBAA9\uB85D ============================================= -->
            <div style="padding:4px 14px 8px 30px;display:flex;flex-wrap:wrap;gap:4px;">
              <span v-if="!p.rows || p.rows.length===0" style="font-size:11px;color:#ccc;">
                (\uC704\uC82F \uC5C6\uC74C)
              </span>
              <span v-for="(w, wi) in (p.rows||[])" :key="wi"
            style="font-size:11px;background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:6px;padding:2px 8px;">
                {{ fnWIcon(w.widgetType) }} {{ fnWLabel(w.widgetType) }}
                <span v-if="w.widgetNm" style="color:#aaa;">
                  \xB7 {{ w.widgetNm }}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- ===== \u25A1.\u25A1. \uC0C1\uC138(expand) \uBAA8\uB4DC ========================================= -->
      <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
      <!-- ===== \u25A0. \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC ============================================== -->
      <fo-cm-popup-modal popup-cmd="cmPopup-category-pick" popup-code="category" :multi="true" result-type="array" :show="uiState.showCatModal" :init-selected-ids="[...selectedCatIds]" :on-callback="fnCallbackModal" />
    </div>
    <!-- ===== \u25A1. \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBAA8\uB2EC ============================================== -->
</fo-page>
`};
