window.DispX01Ui={name:"DispX01Ui",props:{params:{type:Object,required:!0},dispDataset:{type:Object,default:()=>window.dispDataset||{displays:[],codes:[]}},dispOpt:{type:Object,default:()=>({layout:"auto",showHeader:!0,showBadges:!0})}},setup(r){var v,m,k;const{ref:b,reactive:c,computed:p,watch:K}=Vue,D=c({loading:!1,error:""}),$=c({}),O=[{key:"content",label:"\u{1F5BC} \uB0B4\uC6A9\uBCF4\uAE30"},{key:"struct",label:"\u{1F332} \uAD6C\uC870\uBCF4\uAE30"},{key:"source",label:"</> \uC18C\uC2A4\uBCF4\uAE30"}],u=p(()=>{const e=(r.params.viewOpts||"").split(",").filter(Boolean);return e.length?O.filter(a=>e.includes(a.key)):[]}),f=b(""),S=(e,a={})=>{if(e==="struct-expand-all")return Y();if(e==="struct-collapse-all")return F();if(e==="struct-toggle-all-area")return U();if(e==="struct-toggle-all-panel")return X();if(e==="content-toggle-struct"){x.value=!x.value;return}else console.warn("[handleBtnAction] unknown cmd:",e)},E=(e,a={})=>{if(e==="tab-select"){f.value=a;return}else{if(e==="struct-area-toggle")return j(a);if(e==="struct-panel-toggle")return N(a);console.warn("[handleSelectAction] unknown cmd:",e)}};Vue.watchEffect(()=>{var a;const e=((a=u.value[0])==null?void 0:a.key)||"content";u.value.find(i=>i.key===f.value)||(f.value=e)});const x=b(!1),d=c(new Set),o=c(new Set),_={image_banner:"\uC774\uBBF8\uC9C0 \uBC30\uB108",product_slider:"\uC0C1\uD488 \uC2AC\uB77C\uC774\uB354",product:"\uC0C1\uD488",cond_product:"\uC870\uAC74\uC0C1\uD488",chart_bar:"\uCC28\uD2B8(Bar)",chart_line:"\uCC28\uD2B8(Line)",chart_pie:"\uCC28\uD2B8(Pie)",text_banner:"\uD14D\uC2A4\uD2B8 \uBC30\uB108",info_card:"\uC815\uBCF4\uCE74\uB4DC",popup:"\uD31D\uC5C5",file:"\uD30C\uC77C",file_list:"\uD30C\uC77C\uBAA9\uB85D",coupon:"\uCFE0\uD3F0",html_editor:"HTML \uC5D0\uB514\uD130",event_banner:"\uC774\uBCA4\uD2B8",cache_banner:"\uCE90\uC2DC",widget_embed:"\uC704\uC82F",textarea:"\uD14D\uC2A4\uD2B8 \uC601\uC5ED",markdown:"Markdown",barcode:"\uBC14\uCF54\uB4DC",qrcode:"QR\uCF54\uB4DC",barcode_qrcode:"\uBC14\uCF54\uB4DC+QR",video_player:"\uB3D9\uC601\uC0C1",countdown:"\uCE74\uC6B4\uD2B8\uB2E4\uC6B4",payment_widget:"\uACB0\uC81C\uC704\uC82F",approval_widget:"\uC804\uC790\uACB0\uC7AC",map_widget:"\uC9C0\uB3C4"},I=e=>_[e]||e||"-",L=e=>{const a=r.params;if(e.dispYn!=="Y"||e.useYn!=="Y"||a.status&&e.status!==a.status)return!1;if(a.date){const i=a.time||"00:00",n=`${a.date} ${i}`;if(e.useStartDate&&n<`${e.useStartDate} 00:00`||e.useEndDate&&n>`${e.useEndDate}   23:59`)return!1}if(a.date){const i=a.time||"00:00",n=`${a.date}T${i}`;if(e.dispStartDt&&n<coUtil.cofDatetimeNorm(e.dispStartDt)||e.dispEndDt&&n>coUtil.cofDatetimeNorm(e.dispEndDt))return!1}if(e.dispEnv&&a.dispEnv&&!e.dispEnv.includes("^"+a.dispEnv+"^"))return!1;if(a.visibilityTargets){const i=a.visibilityTargets.replace(/\^/g,"").trim();if(i&&!window.visibilityUtil.has(e.visibilityTargets,i))return!1}return!0},l=e=>(r.dispDataset.displays||[]).filter(a=>a.area===e&&L(a)).sort((a,i)=>(a.sortOrder||0)-(i.sortOrder||0)),g=e=>(r.dispDataset.codes||[]).find(a=>a.codeGrp==="DISP_AREA"&&a.codeValue===e),P=e=>{var a;return((a=g(e))==null?void 0:a.codeLabel)||e},B=p(()=>(r.params.areas||[]).reduce((e,a)=>e+l(a).length,0));Vue.watchEffect(()=>{(r.params.areas||[]).forEach(e=>d.add(e)),(r.params.areas||[]).forEach(e=>l(e).forEach(a=>o.add(a.dispId)))});const y=p(()=>(r.params.areas||[]).length>0&&(r.params.areas||[]).every(e=>d.has(e))),h=p(()=>(r.params.areas||[]).every(e=>l(e).every(a=>o.has(a.dispId)))),Y=()=>{(r.params.areas||[]).forEach(e=>d.add(e)),(r.params.areas||[]).forEach(e=>l(e).forEach(a=>o.add(a.dispId)))},F=()=>{d.clear(),o.clear()},U=()=>{y.value?(d.clear(),o.clear()):(r.params.areas||[]).forEach(e=>d.add(e))},X=()=>{h.value?o.clear():(r.params.areas||[]).forEach(e=>l(e).forEach(a=>o.add(a.dispId)))},j=e=>{d.has(e)?d.delete(e):d.add(e)},N=e=>{o.has(e)?o.delete(e):o.add(e)},V=p(()=>{const e=[],a=r.params,i=a.areas||[];return e.push({type:"header",sub:"entities",text:`<!-- \uC804\uC2DC\uAC1C\uCCB4 : \uC804\uC2DC\uC601\uC5EDs: ${i.join(", ")||"-"}, \uC804\uC2DC\uD328\uB110s: -, \uC804\uC2DC\uC704\uC82Fs: -, \uC704\uC82FLibs: - -->`}),e.push({type:"header",sub:"disp",text:`<!-- disp\uC870\uAC74 : \uC804\uC2DC\uC77C\uC2DC: ${a.date||"-"} ${a.time||""}  |  \uC0C1\uD0DC: ${a.status||"\uC804\uCCB4"}  |  \uACF5\uAC1C\uB300\uC0C1: ${a.visibilityTargets||"\uC804\uCCB4"} -->`}),e.push({type:"header",sub:"cond",text:"<!-- cond\uC870\uAC74 : \uC870\uD68C\uAE30\uAC04: -,  \uCE74\uD14C\uACE0\uB9AC: -,  \uC8FC\uBB38: - -->"}),e.push({type:"blank"}),e.push({type:"ui-open",text:"<DispX01Ui>"}),i.forEach((n,W)=>{var A;const t=g(n),w=l(n);W>0&&e.push({type:"blank"});const q=(t==null?void 0:t.layoutType)==="dashboard"?"dashboard":`${(t==null?void 0:t.layoutType)||"grid"}:${(t==null?void 0:t.gridCols)||1}`,R=(t==null?void 0:t.titleYn)==="Y"?(t==null?void 0:t.title)||"(\uC81C\uBAA9\uC5C6\uC74C)":"\uBBF8\uD45C\uC2DC";e.push({type:"area-meta",text:`  <!-- \uD45C\uC2DC\uD615\uC2DD:${q}, \uC815\uB82C:${(A=t==null?void 0:t.sortOrd)!=null?A:"-"}, \uD0C0\uC774\uD2C0:${R}, area="${n}" -->`}),e.push({type:"area-open",text:`  <DispX02Area area="${n}" areaLabel="${(t==null?void 0:t.codeLabel)||n}" layoutType="${(t==null?void 0:t.layoutType)||"grid"}" gridCols="${(t==null?void 0:t.gridCols)||1}">`}),w.length?(w.forEach(s=>{var C,z;e.push({type:"blank"});const G=s.dispStartDt||s.dispEndDt?`${s.dispStartDt||"\u221E"} ~ ${s.dispEndDt||"\u221E"}`:"\uAE30\uAC04\uC5C6\uC74C",M=s.layoutType==="dashboard"?"dashboard":`${s.layoutType||"grid"}:${s.gridCols||1}`,Q=s.titleYn==="Y"?s.title||"(\uC81C\uBAA9\uC5C6\uC74C)":"\uBBF8\uD45C\uC2DC",J=s.visibilityTargets?s.visibilityTargets.replace(/\^/g,"").trim():"\uC804\uCCB4";e.push({type:"panel-meta",text:`    <!-- \uD45C\uC2DC\uD615\uC2DD:${M}, \uC815\uB82C:${(C=s.sortOrder)!=null?C:"-"}, \uD0C0\uC774\uD2C0:${Q}, \uAE30\uAC04: ${G}  |  \uC0C1\uD0DC: ${s.status||"-"}  |  \uACF5\uAC1C\uB300\uC0C1: ${J} -->`}),e.push({type:"panel-open",text:`    <DispX03Panel id="#${String(s.dispId).padStart(4,"0")}" name="${s.name}" status="${s.status}" layoutType="${s.layoutType||"grid"}" gridCols="${s.gridCols||1}">`}),(z=s.rows)!=null&&z.length?(s.rows||[]).forEach(T=>{e.push({type:"widget",text:`      <DispX04Widget widgetType="${T.widgetType}" widgetNm="${T.widgetNm||""}" />`})}):e.push({type:"comment",text:"      <!-- (\uC704\uC82F \uC5C6\uC74C) -->"}),e.push({type:"panel-close",text:"    </DispX03Panel>"})}),e.push({type:"blank"})):e.push({type:"comment",text:"    <!-- \uD574\uB2F9 \uB0A0\uC9DC \uD65C\uC131 \uD328\uB110 \uC5C6\uC74C -->"}),e.push({type:"area-close",text:"  </DispX02Area>"})}),e.push({type:"ui-close",text:"</DispX01Ui>"}),e}),H=e=>{switch(e.type){case"header":return e.sub==="entities"?"#ffd700":e.sub==="disp"?"#ffab40":e.sub==="cond"?"#ff8a65":"#ffd700";case"ui-open":case"ui-close":return"#b794f4";case"area-meta":return"#808080";case"area-open":return"#63b3ed";case"area-close":return"#63b3ed";case"panel-meta":return"#6e7f9e";case"panel-open":return"#68d391";case"panel-close":return"#68d391";case"widget":return"#f6ad55";case"comment":return"#546e7a";case"blank":return"transparent";default:return"#cdd9e5"}};return{uiState:D,codes:$,coUtil,handleBtnAction:S,handleSelectAction:E,cfActiveTabs:u,activeTab:f,showContentStruct:x,structAreaOpen:d,structPanelOpen:o,allAreas1Open:y,allPanels2Open:h,cfSourceLines:V,cfTotalPanels:B,wLabel:I,areaLabel:P,areaInfo:g,panelsForArea:l,lineColor:H,layout:((v=r.dispOpt)==null?void 0:v.layout)||"auto",showHeader:((m=r.dispOpt)==null?void 0:m.showHeader)!==!1,showBadges:((k=r.dispOpt)==null?void 0:k.showBadges)!==!1}},template:`
<div>
  <!-- ===== \u25A0. \uBA54\uC778 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uD30C\uB77C\uBBF8\uD130 \uC694\uC57D \uBC14 (\uBCF4\uAE30\uC635\uC158\uC774 \uC788\uC744 \uB54C\uB9CC) ================================= -->
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <div v-if="params.viewOpts" style="background:#fff;border-bottom:1px solid #e8e0f8;padding:10px 24px;display:flex;flex-wrap:wrap;gap:6px;align-items:center;">
    <span style="font-size:11px;color:#888;margin-right:4px;">
      \uC804\uB2EC \uD30C\uB77C\uBBF8\uD130:
    </span>
    <span v-if="params.areas.length" style="font-size:11px;background:#ede7f6;color:#4a148c;border-radius:8px;padding:2px 10px;">
      \uC601\uC5ED: {{ params.areas.join(', ') }}
    </span>
    <span v-if="params.date" style="font-size:11px;background:#fff8e1;color:#f57c00;border-radius:8px;padding:2px 10px;">
      \u{1F4C5} {{ params.date }} {{ params.time }}
    </span>
    <span v-if="params.status" style="font-size:11px;background:#e8f5e9;color:#2e7d32;border-radius:8px;padding:2px 10px;">
      \uC0C1\uD0DC: {{ params.status }}
    </span>
    <span v-if="params.visibilityTargets" style="font-size:11px;background:#f3e5f5;color:#6a1b9a;border-radius:8px;padding:2px 10px;">
      \uACF5\uAC1C\uB300\uC0C1: {{ params.visibilityTargets.replace(/^/g,'') }}
    </span>
    <span v-if="params.siteId" style="font-size:11px;background:#e3f2fd;color:#1565c0;border-radius:8px;padding:2px 10px;">
      siteId: {{ params.siteId }}
    </span>
    <span v-if="params.memberId" style="font-size:11px;background:#e3f2fd;color:#1565c0;border-radius:8px;padding:2px 10px;">
      memberId: {{ params.memberId }}
    </span>
    <span v-if="params.viewOpts" style="font-size:11px;background:#f0f4ff;color:#4f46e5;border-radius:8px;padding:2px 10px;">
      \uBCF4\uAE30: {{ params.viewOpts }}
    </span>
  </div>
  <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <style>
    @keyframes skelShimmer {
      0%   { background-position: -400px 0; }
      100% { background-position:  400px 0; }
    }
    .skel-pulse {
      background: linear-gradient(90deg, #e8e8e8 25%, #f2f2f2 50%, #e8e8e8 75%) !important;
      background-size: 800px 100% !important;
      animation: skelShimmer 1.4s infinite linear;
    }
  </style>
    <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
    <!-- ===== \u25A0. \uD0ED \uBC14 ===================================================== -->
    <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
    <div style="display:flex;align-items:stretch;border-bottom:2px solid #e8e0f8;background:#faf8ff;">
      <template v-if="cfActiveTabs.length > 1">
        <template v-for="tab in cfActiveTabs" :key="tab.key">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB0B4\uC6A9\uBCF4\uAE30 \uD0ED: \uAD6C\uC870\uBCF4\uAE30 \uD1A0\uAE00 \uB0B4\uC7A5 ================================ -->
          <div v-if="tab.key==='content'"
          style="display:flex;align-items:center;border-bottom:3px solid transparent;margin-bottom:-2px;"
          :style="activeTab==='content' ? 'border-bottom-color:#6a1b9a;background:#fff;' : ''">
            <button @click="handleSelectAction('tab-select', 'content')"
            style="padding:9px 12px 9px 20px;font-size:13px;font-weight:600;border:none;cursor:pointer;background:transparent;transition:color .15s;"
            :style="activeTab==='content' ? 'color:#6a1b9a;' : 'color:#aaa;'">
              {{ tab.label }}
            </button>
            <span @click.stop="handleBtnAction('content-toggle-struct')"
            style="font-size:11px;padding:1px 7px;border-radius:8px;cursor:pointer;transition:all .15s;white-space:nowrap;margin-right:8px;border:1px solid;"
            :style="showContentStruct
            ? 'background:#ede7f6;color:#6a1b9a;border-color:#b39ddb;font-weight:600;'
            : 'background:#f5f5f5;color:#bbb;border-color:#e0e0e0;'"
            :title="showContentStruct?'\uAD6C\uC870 \uC228\uAE30\uAE30':'\uAD6C\uC870 \uBCF4\uAE30'">
              \uC0C1\uC138
            </span>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB098\uBA38\uC9C0 \uD0ED ============================================= -->
          <button v-else @click="handleSelectAction('tab-select', tab.key)"
          style="padding:9px 20px;font-size:13px;font-weight:600;border:none;cursor:pointer;transition:all .15s;border-bottom:3px solid transparent;margin-bottom:-2px;"
          :style="activeTab===tab.key
          ? 'background:#fff;color:#6a1b9a;border-bottom-color:#6a1b9a;'
          : 'background:transparent;color:#aaa;'">
            {{ tab.label }}
          </button>
        </template>
      </template>
      <!-- ===== \u25A0.\u25A0. \uD0ED\uC774 1\uAC1C\uC774\uAC70\uB098 \uC5C6\uC744 \uB54C (\uB0B4\uC6A9\uBCF4\uAE30\uB9CC): \uAD6C\uC870 \uD1A0\uAE00\uB9CC \uD45C\uC2DC ====================== -->
      <div v-else style="display:flex;align-items:center;padding:6px 14px;gap:8px;">
        <span style="font-size:13px;font-weight:600;color:#6a1b9a;">
          \u{1F5BC} \uB0B4\uC6A9\uBCF4\uAE30
        </span>
        <span @click="handleBtnAction('content-toggle-struct')"
        style="font-size:11px;padding:1px 7px;border-radius:8px;cursor:pointer;transition:all .15s;white-space:nowrap;border:1px solid;"
        :style="showContentStruct
        ? 'background:#ede7f6;color:#6a1b9a;border-color:#b39ddb;font-weight:600;'
        : 'background:#f5f5f5;color:#bbb;border-color:#e0e0e0;'">
          \uC0C1\uC138
        </span>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uD0ED\uC774 1\uAC1C\uC774\uAC70\uB098 \uC5C6\uC744 \uB54C (\uB0B4\uC6A9\uBCF4\uAE30\uB9CC): \uAD6C\uC870 \uD1A0\uAE00\uB9CC \uD45C\uC2DC ====================== -->
    <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
    <!-- ===== \u25A0. \uC601\uC5ED \uC5C6\uC74C =================================================== -->
    <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
    <div v-if="!coUtil.cofAnd(params.areas, params.areas.length)" style="text-align:center;padding:60px;color:#bbb;font-size:14px;">
    \uC804\uC2DC\uC601\uC5ED \uD30C\uB77C\uBBF8\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uAD00\uB9AC\uC790 \uD654\uBA74\uC5D0\uC11C \uC601\uC5ED\uC744 \uC120\uD0DD \uD6C4 \uB2E4\uC2DC \uC5F4\uC5B4\uC8FC\uC138\uC694.
  </div>
  <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <template v-else>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         \uB0B4\uC6A9\uBCF4\uAE30 \u2014 \uC704\uC82F \uC2DC\uAC01\uC801 \uB80C\uB354\uB9C1
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div v-if="activeTab==='' || activeTab==='content' || cfActiveTabs.length===0">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAD6C\uC870\uBCF4\uAE30 OFF: \uC21C\uC218 \uC704\uC82F\uB9CC ==================================== -->
      <div v-if="!showContentStruct" style="display:flex;flex-direction:column;gap:0;">
        <template v-for="areaCode in params.areas" :key="areaCode">
          <disp-x02-area v-if="panelsForArea(areaCode).length"
            :params="params"
            :disp-dataset="dispDataset"
            :disp-opt="{ ...dispOpt, mode: 'area_detail', showDesc: false }"
            :area-item="{ code: areaCode, label: areaLabel(areaCode), info: areaInfo(areaCode), panels: panelsForArea(areaCode) }"
            />
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2A4\uCF08\uB808\uD1A4 (\uD328\uB110 \uC5C6\uC744 \uB54C) ================================== -->
          <div v-else style="padding:12px 0 4px 0;">
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div v-for="sk in 2" :key="sk"
                style="border-radius:10px;overflow:hidden;background:#f5f5f7;padding:14px 16px;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                  <div class="skel-pulse" style="width:52px;height:14px;border-radius:4px;background:#e0e0e0;">
                  </div>
                  <div class="skel-pulse" style="width:110px;height:14px;border-radius:4px;background:#e0e0e0;">
                  </div>
                  <div class="skel-pulse" style="margin-left:auto;width:36px;height:14px;border-radius:4px;background:#e0e0e0;">
                  </div>
                </div>
                <div class="skel-pulse" style="width:100%;height:80px;border-radius:8px;background:#e0e0e0;">
                </div>
              </div>
              <div style="border-radius:10px;overflow:hidden;background:#f5f5f7;padding:14px 16px;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                  <div class="skel-pulse" style="width:52px;height:14px;border-radius:4px;background:#e0e0e0;">
                  </div>
                  <div class="skel-pulse" style="width:80px;height:14px;border-radius:4px;background:#e0e0e0;">
                  </div>
                  <div class="skel-pulse" style="margin-left:auto;width:36px;height:14px;border-radius:4px;background:#e0e0e0;">
                  </div>
                </div>
                <div style="display:flex;gap:8px;overflow:hidden;">
                  <div v-for="ci in 4" :key="ci" style="flex-shrink:0;width:90px;">
                    <div class="skel-pulse" style="width:90px;height:90px;border-radius:8px;background:#e0e0e0;margin-bottom:6px;">
                    </div>
                    <div class="skel-pulse" style="width:70px;height:10px;border-radius:4px;background:#e0e0e0;margin-bottom:4px;">
                    </div>
                    <div class="skel-pulse" style="width:50px;height:10px;border-radius:4px;background:#e8e0e0;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top:6px;text-align:center;font-size:10px;color:#ccc;letter-spacing:.3px;">
              \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD328\uB110\uC774 \uC5C6\uC2B5\uB2C8\uB2E4 \xB7 {{ areaCode }}
            </div>
          </div>
        </template>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAD6C\uC870\uBCF4\uAE30 ON: DispX02Area\uC5D0 \uC704\uC784 ============================ -->
      <div v-else style="padding:16px;background:#f0f0f0;display:flex;flex-direction:column;gap:4px;">
        <template v-for="areaCode in params.areas" :key="areaCode">
          <disp-x02-area
            :params="params"
            :disp-dataset="dispDataset"
            :disp-opt="{ ...dispOpt, mode: 'expand', showDesc: true }"
            :area-item="{ code: areaCode, label: areaLabel(areaCode), info: areaInfo(areaCode), panels: panelsForArea(areaCode) }"
            />
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2A4\uCF08\uB808\uD1A4 (\uD328\uB110 \uC5C6\uC744 \uB54C) ================================== -->
          <div v-if="!panelsForArea(areaCode).length"
            style="background:#fff;border-radius:0 0 8px 8px;border:1px solid #e0e0e0;border-top:none;padding:14px 16px;">
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div v-for="sk in 3" :key="sk"
                style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:#f9f9f9;border-radius:6px;border:1px solid #f0f0f0;">
                <div class="skel-pulse" style="width:56px;height:13px;border-radius:3px;background:#e8e8e8;">
                </div>
                <div class="skel-pulse" :style="'width:'+(60+sk*20)+'px;height:13px;border-radius:3px;background:#e8e8e8;'">
                </div>
                <div class="skel-pulse" style="margin-left:auto;width:44px;height:13px;border-radius:3px;background:#e8e8e8;">
                </div>
              </div>
            </div>
            <div style="margin-top:8px;text-align:center;font-size:10px;color:#ccc;">
              \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD328\uB110\uC774 \uC5C6\uC2B5\uB2C8\uB2E4
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         \uAD6C\uC870\uBCF4\uAE30 \u2014 \uC708\uB3C4\uC6B0 \uD2B8\uB9AC
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div v-else-if="activeTab==='struct'" style="padding:0;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD2B8\uB9AC \uCEE8\uD2B8\uB864 \uBC14 ============================================ -->
      <div style="display:flex;align-items:center;gap:6px;padding:8px 16px;background:#f5f5f5;border-bottom:1px solid #e0e0e0;flex-wrap:wrap;">
        <button @click="handleBtnAction('struct-expand-all')"
          style="font-size:11px;padding:3px 10px;border:1px solid #1565c0;border-radius:7px;background:#e3f2fd;color:#1565c0;cursor:pointer;font-weight:600;">
          \u25BC \uC804\uCCB4\uD3BC\uCE58\uAE30
        </button>
        <button @click="handleBtnAction('struct-collapse-all')"
          style="font-size:11px;padding:3px 10px;border:1px solid #ddd;border-radius:7px;background:#fff;color:#888;cursor:pointer;">
          \u25B6 \uC804\uCCB4\uC811\uAE30
        </button>
        <div style="width:1px;height:18px;background:#ddd;margin:0 2px;">
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC84\uD2BC \uC601\uC5ED ============================================= -->
        <button @click="handleBtnAction('struct-toggle-all-area')"
          style="font-size:11px;padding:3px 10px;border:1px solid #6a1b9a;border-radius:7px;cursor:pointer;font-weight:600;"
          :style="allAreas1Open?'background:#f3e5f5;color:#4a148c;':'background:#fff;color:#9c27b0;'">
          {{ allAreas1Open ? '\u25BC' : '\u25B6' }} 1\uB808\uBCA8 (\uC601\uC5ED)
        </button>
        <button @click="handleBtnAction('struct-toggle-all-panel')"
          style="font-size:11px;padding:3px 10px;border:1px solid #2e7d32;border-radius:7px;cursor:pointer;font-weight:600;"
          :style="allPanels2Open?'background:#e8f5e9;color:#1b5e20;':'background:#fff;color:#388e3c;'">
          {{ allPanels2Open ? '\u25BC' : '\u25B6' }} 2\uB808\uBCA8 (\uD328\uB110)
        </button>
        <span style="font-size:11px;color:#aaa;margin-left:auto;">
          \uC601\uC5ED {{ params.areas.length }}\uAC1C \xB7 \uD328\uB110 {{ cfTotalPanels }}\uAC1C
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD2B8\uB9AC \uBCF8\uBB38 =============================================== -->
      <div style="padding:10px 16px;background:#fff;font-family:monospace;">
        <div v-for="(areaCode, ai) in params.areas" :key="areaCode" style="margin-bottom:2px;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 1\uB808\uBCA8: Area \uD589 ===================================== -->
          <div @click="handleSelectAction('struct-area-toggle', areaCode)"
            style="display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:7px;cursor:pointer;user-select:none;border:1px solid #d1c4e9;background:linear-gradient(90deg,#ede7f6,#f8f5ff);"
            onmouseover="this.style.background='linear-gradient(90deg,#e1d5f0,#ede7f6)'"
            onmouseout="this.style.background='linear-gradient(90deg,#ede7f6,#f8f5ff)'">
            <span style="font-size:12px;color:#6a1b9a;width:14px;text-align:center;flex-shrink:0;">
              {{ structAreaOpen.has(areaCode) ? '\u25BC' : '\u25B6' }}
            </span>
            <span style="font-size:10px;font-weight:700;background:#6a1b9a;color:#fff;border-radius:4px;padding:1px 7px;flex-shrink:0;">
              Area
            </span>
            <code style="font-size:11px;color:#4a148c;font-weight:700;background:#e8d5f8;padding:1px 6px;border-radius:4px;">
              {{ areaCode }}
            </code>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================ -->
              <span style="font-size:12px;color:#4a148c;font-weight:600;">
                {{ areaLabel(areaCode) }}
              </span>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. Area \uC635\uC158 \uC815\uBCF4 ==================================== -->
              <span style="margin-left:auto;font-size:10px;color:#9c6fb5;font-family:monospace;white-space:nowrap;flex-shrink:0;">
                \uD45C\uC2DC\uD615\uC2DD:{{ (areaInfo(areaCode)||{}).layoutType||'grid' }}:{{ (areaInfo(areaCode)||{}).gridCols||1 }}, \uC815\uB82C:{{ (areaInfo(areaCode)||{}).sortOrd != null ? (areaInfo(areaCode)||{}).sortOrd : '-' }}, \uD0C0\uC774\uD2C0:{{ (areaInfo(areaCode)||{}).titleYn==='Y' ? ((areaInfo(areaCode)||{}).title||'(\uC81C\uBAA9\uC5C6\uC74C)') : '\uBBF8\uD45C\uC2DC' }}, area="{{ areaCode }}"
              </span>
              <span style="font-size:10px;color:#bbb;flex-shrink:0;margin-left:10px;">
                \uD328\uB110 {{ panelsForArea(areaCode).length }}\uAC1C
              </span>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 2\uB808\uBCA8: Panel \uBAA9\uB85D (\uC601\uC5ED \uD3BC\uCCD0\uC838 \uC788\uC744 \uB54C) ===================== -->
            <div v-if="structAreaOpen.has(areaCode)" style="margin-left:20px;border-left:2px solid #d1c4e9;padding-left:8px;margin-top:2px;">
              <div v-if="!panelsForArea(areaCode).length"
              style="padding:6px 10px;font-size:11px;color:#bbb;font-style:italic;">
                \u2500\u2500 \uD574\uB2F9 \uC870\uAC74 \uD328\uB110 \uC5C6\uC74C
              </div>
              <div v-for="(p, pi) in panelsForArea(areaCode)" :key="p.dispId" style="margin-bottom:2px;">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. Panel \uD589 ===================================== -->
                <div @click="handleSelectAction('struct-panel-toggle', p.dispId)"
                style="display:flex;align-items:center;gap:6px;padding:5px 10px;border-radius:6px;cursor:pointer;user-select:none;border:1px solid #c8e6c9;background:linear-gradient(90deg,#e8f5e9,#f9fdf9);flex-wrap:wrap;"
                onmouseover="this.style.background='linear-gradient(90deg,#dcedc8,#e8f5e9)'"
                onmouseout="this.style.background='linear-gradient(90deg,#e8f5e9,#f9fdf9)'">
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC88C\uCE21: \uD2B8\uB9AC + \uC774\uB984 =============================== -->
                  <span style="font-size:11px;color:#a5d6a7;margin-left:-2px;width:12px;flex-shrink:0;">
                    {{ pi === panelsForArea(areaCode).length - 1 ? '\u2514' : '\u251C' }}
                  </span>
                  <span style="font-size:11px;color:#2e7d32;width:14px;text-align:center;flex-shrink:0;">
                    {{ structPanelOpen.has(p.dispId) ? '\u25BC' : '\u25B6' }}
                  </span>
                  <span style="font-size:9px;font-weight:700;background:#2e7d32;color:#fff;border-radius:3px;padding:1px 6px;flex-shrink:0;">
                    Panel
                  </span>
                  <code style="font-size:10px;color:#888;flex-shrink:0;">#{{ String(p.dispId).padStart(4,'0') }}</code>
                    <span style="font-size:12px;font-weight:600;color:#1b5e20;">
                      {{ p.name }}
                    </span>
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. Panel \uC635\uC158 \uC815\uBCF4 (\uC6B0\uCE21) ========================== -->
                    <span style="margin-left:auto;font-size:10px;color:#5a8a6a;font-family:monospace;white-space:nowrap;flex-shrink:0;">
                      \uD45C\uC2DC\uD615\uC2DD:{{ p.layoutType||'grid' }}:{{ p.gridCols||1 }}, \uC815\uB82C:{{ p.sortOrder != null ? p.sortOrder : '-' }}, \uD0C0\uC774\uD2C0:{{ p.titleYn==='Y' ? (p.title||'(\uC81C\uBAA9\uC5C6\uC74C)') : '\uBBF8\uD45C\uC2DC' }}, \uAE30\uAC04: {{ (p.dispStartDt||p.dispEndDt) ? (p.dispStartDt||'\u221E')+' ~ '+(p.dispEndDt||'\u221E') : '\uAE30\uAC04\uC5C6\uC74C' }} &nbsp;|&nbsp;\uC0C1\uD0DC: {{ p.status||'-' }}
                    </span>
                    <span style="font-size:10px;color:#bbb;flex-shrink:0;margin-left:8px;">
                      \uC704\uC82F {{ (p.rows||[]).length }}\uAC1C
                    </span>
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 3\uB808\uBCA8: Widget \uBAA9\uB85D (\uD328\uB110 \uD3BC\uCCD0\uC838 \uC788\uC744 \uB54C) ================ -->
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ====================================== -->
                  <div v-if="structPanelOpen.has(p.dispId)"
                style="margin-left:28px;border-left:2px solid #c8e6c9;padding-left:8px;margin-top:2px;margin-bottom:2px;">
                    <div v-if="!coUtil.cofAnd(p.rows, p.rows.length)" style="padding:4px 10px;font-size:11px;color:#ccc;font-style:italic;">
                    \u2500\u2500 \uC704\uC82F \uC5C6\uC74C
                  </div>
                  <div v-for="(w, wi) in (p.rows||[])" :key="wi"
                  style="display:flex;align-items:center;gap:6px;padding:4px 10px;margin-bottom:1px;border-radius:5px;background:#f0f7ff;border:1px solid #dce7fb;">
                    <span style="font-size:11px;color:#82b1ff;margin-left:-2px;width:12px;flex-shrink:0;">
                      {{ wi === (p.rows||[]).length - 1 ? '\u2514' : '\u251C' }}
                    </span>
                    <span style="font-size:9px;font-weight:700;background:#1a73e8;color:#fff;border-radius:3px;padding:1px 5px;flex-shrink:0;">
                      Widget
                    </span>
                    <span style="font-size:10px;color:#90caf9;flex-shrink:0;">
                      {{ wi+1 }}.
                    </span>
                    <span style="font-size:11px;background:#e8f0fe;color:#1a73e8;border-radius:5px;padding:1px 7px;flex-shrink:0;">
                      {{ wLabel(w.widgetType) }}
                    </span>
                    <span v-if="w.widgetNm" style="font-size:11px;color:#555;">
                      {{ w.widgetNm }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         \uC18C\uC2A4\uBCF4\uAE30 \u2014 \uCEEC\uB7FC + \uD558\uC774\uB77C\uC774\uD305
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      <div v-else-if="activeTab==='source'" style="padding:0;">
        <div style="background:#1e1e2e;min-height:300px;overflow-x:auto;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 =============================================== -->
          <table style="width:100%;border-collapse:collapse;font-family:'Consolas','D2Coding',monospace;font-size:12px;line-height:1.9;">
            <tbody>
              <tr v-for="(line, idx) in cfSourceLines" :key="idx"
              style="vertical-align:top;"
              onmouseover="this.style.background='rgba(255,255,255,0.04)'"
              onmouseout="this.style.background=''">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB77C\uC778 \uBC88\uD638 ======================================= -->
                <td style="width:40px;padding:0 10px 0 12px;text-align:right;color:#4b5263;font-size:11px;user-select:none;border-right:1px solid #2d2d40;white-space:nowrap;vertical-align:top;">
                  <span v-if="line.type!=='blank'">
                    {{ idx+1 }}
                  </span>
                </td>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC18C\uC2A4 \uB0B4\uC6A9 ======================================= -->
                <td style="padding:0 16px 0 14px;white-space:pre;vertical-align:top;">
                  <span v-if="line.type==='blank'">
                    &nbsp;
                  </span>
                  <span v-else :style="'color:'+lineColor(line)">
                    {{ line.text }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
`};
