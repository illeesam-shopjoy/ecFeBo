const _WP_DispWidgetPreview={name:"WidgetPreview",props:{lib:Object,compact:{type:Boolean,default:!1}},setup(b){const{reactive:x,computed:p}=Vue,V=x({disp_widget_types:[]}),q=x({}),E=coUtil.cofChartColors(),J=async()=>{var r;const a=(r=window.sfGetBoCodeStore)==null?void 0:r.call(window);a&&(await a.saLoadCodes(["WIDGET_TYPE_CD"],{compNm:"DpDispWidgetPreview"}),V.disp_widget_types=a.sgGetGrpCodes("WIDGET_TYPE_CD")||[])},M=p(()=>{const a=b.lib||{};return a.widgetTypeCd||a.widgetType||""}),z=p(()=>{const a=b.lib||{};return a.widgetNm||a.name||a.widgetTitle||""}),A=p(()=>{const a=b.lib||{};return a.widgetLibDesc||a.widgetDesc||a.desc||""}),D=p(()=>(b.lib||{}).widgetContent||""),S=p(()=>{const a=b.lib||{},g=(y=>{try{return JSON.parse(y)}catch{return null}})(a.widgetConfigJson);if(!g)return{};if(g.properties){const y={};return Object.keys(g.properties).forEach(c=>{const m=g.properties[c];m&&"default"in m&&(y[c]=m.default)}),y}return g}),R=p(()=>{const a=b.lib||{},r=S.value.img_url||S.value.imageUrl||a.thumbnailUrl||a.imageUrl||"";return coUtil.cofImgSrc(r)}),N=p(()=>{const a=S.value;let r=null,g=null;Array.isArray(a.values)?r=a.values.map(Number):typeof a.chartValues=="string"?r=a.chartValues.split(",").map(c=>Number(c.trim())||0):typeof(b.lib||{}).chartValues=="string"&&(r=(b.lib.chartValues||"").split(",").map(c=>Number(c.trim())||0)),(!r||!r.length)&&(r=[40,65,30,80,55,70,45]),Array.isArray(a.labels)?g=a.labels:typeof a.chartLabels=="string"?g=a.chartLabels.split(",").map(c=>c.trim()):typeof(b.lib||{}).chartLabels=="string"&&(g=(b.lib.chartLabels||"").split(",").map(c=>c.trim())),(!g||!g.length)&&(g=["\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0","\uC77C"]);const y=Math.max(...r,1);return r.map((c,m)=>({v:c,label:g[m]||"",pct:Math.round(c/y*100),color:E[m%E.length]}))}),O=p(()=>coUtil.cofChartPie(N.value)),W=p(()=>coUtil.cofChartPieGradient(O.value));return{cfType:M,cfName:z,cfDesc:A,cfContent:D,cfConfig:S,cfImg:R,cfChartBars:N,cfPie:O,cfPieGradient:W}},template:`
<div style="padding:10px;">
  <!-- ===== \u25A0. \uBBF8\uB9AC\uBCF4\uAE30 ==================================================== -->

  <!-- ===== \u25A0. 1) \uC774\uBBF8\uC9C0 \uBC30\uB108 =============================================== -->
  <template v-if="cfType==='image_banner'">
    <div style="border-radius:6px;overflow:hidden;background:#f0f0f0;">
      <img v-if="cfImg" :src="cfImg" style="width:100%;display:block;max-height:130px;object-fit:cover;" @error="$event.target.style.display='none'" />
      <div v-else style="height:80px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px;">\u{1F5BC} \uC774\uBBF8\uC9C0 \uBC30\uB108</div>
    </div>
    <div style="font-size:11px;color:#444;margin-top:6px;font-weight:600;">{{ cfName }}</div>
    <div v-if="cfConfig.alt" style="font-size:10px;color:#888;margin-top:2px;">{{ cfConfig.alt }}</div>
  </template>

  <!-- ===== \u25A1. 1) \uC774\uBBF8\uC9C0 \uBC30\uB108 =============================================== -->
  <!-- ===== \u25A0. 2) \uD14D\uC2A4\uD2B8 \uBC30\uB108 =============================================== -->
  <template v-else-if="cfType==='text_banner'">
    <div :style="{background:cfConfig.bg_color||cfConfig.bgColor||'#fff0f4',color:cfConfig.text_color||cfConfig.textColor||'#c0396a',padding:'14px',borderRadius:'6px',border:'1px solid #ffe4ec',fontSize:'13px',fontWeight:600,textAlign:'center'}">
      <span v-if="cfConfig.icon" style="margin-right:6px;">{{ cfConfig.icon }}</span>
      <span>{{ cfConfig.text || cfContent || cfName }}</span>
    </div>
  </template>

  <!-- ===== \u25A1. 2) \uD14D\uC2A4\uD2B8 \uBC30\uB108 =============================================== -->
  <!-- ===== \u25A0. 3) \uC815\uBCF4 \uCE74\uB4DC ================================================ -->
  <template v-else-if="cfType==='info_card'">
    <div style="background:#f0f9ff;border-radius:6px;padding:12px;border:1px solid #bae6fd;display:flex;gap:10px;align-items:flex-start;">
      <span style="font-size:24px;flex-shrink:0;">{{ cfConfig.icon || '\u{1F4E6}' }}</span>
      <div style="flex:1;min-width:0;">
        <div style="font-size:12px;font-weight:700;color:#0369a1;margin-bottom:3px;">{{ cfConfig.title || cfName || '\uCE74\uB4DC \uC81C\uBAA9' }}</div>
        <div style="font-size:11px;color:#0c4a6e;line-height:1.5;">{{ cfConfig.content || cfDesc || '\uCE74\uB4DC \uB0B4\uC6A9' }}</div>
      </div>
    </div>
  </template>

  <!-- ===== \u25A1. 3) \uC815\uBCF4 \uCE74\uB4DC ================================================ -->
  <!-- ===== \u25A0. 4) \uD14D\uC2A4\uD2B8 \uC601\uC5ED =============================================== -->
  <template v-else-if="cfType==='textarea'">
    <div style="font-size:11px;color:#374151;line-height:1.6;white-space:pre-wrap;background:#f9fafb;padding:10px;border-radius:5px;border:1px solid #e5e7eb;max-height:120px;overflow:hidden;">{{ cfConfig.text || cfContent || cfName }}</div>
  </template>

  <!-- ===== \u25A1. 4) \uD14D\uC2A4\uD2B8 \uC601\uC5ED =============================================== -->
  <!-- ===== \u25A0. 5) Markdown ============================================= -->
  <template v-else-if="cfType==='markdown'">
    <div style="font-size:11px;color:#374151;line-height:1.6;white-space:pre-wrap;font-family:monospace;background:#f3f4f6;padding:10px;border-radius:5px;border:1px solid #d1d5db;max-height:120px;overflow:hidden;">{{ cfConfig.markdown || cfContent || ('## ' + cfName + '\\n- \uD56D\uBAA91\\n- \uD56D\uBAA92') }}</div>
  </template>

  <!-- ===== \u25A1. 5) Markdown ============================================= -->
  <!-- ===== \u25A0. 6) HTML \uC5D0\uB514\uD130 ============================================= -->
  <template v-else-if="cfType==='html_editor'">
    <div v-if="cfContent || cfConfig.html" v-html="cfContent || cfConfig.html" style="font-size:12px;overflow:hidden;max-height:120px;border:1px solid #eee;border-radius:5px;padding:8px;background:#fff;"></div>
    <div v-else style="color:#bbb;font-size:11px;padding:14px;background:#fafafa;border-radius:5px;border:1px dashed #d1d5db;text-align:center;">HTML \uCF58\uD150\uCE20 \uC5C6\uC74C</div>
  </template>

  <!-- ===== \u25A1. 6) HTML \uC5D0\uB514\uD130 ============================================= -->
  <!-- ===== \u25A0. 7) \uD31D\uC5C5 =================================================== -->
  <template v-else-if="cfType==='popup'">
    <div style="border:2px solid #cbd5e1;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
      <div style="background:#1e293b;color:#fff;padding:6px 12px;font-size:11px;display:flex;justify-content:space-between;align-items:center;">
        <span>{{ cfConfig.title || cfName || '\uACF5\uC9C0 \uD31D\uC5C5' }}</span><span style="">\u2715</span>
      </div>
      <div style="padding:12px;text-align:center;">
        <img v-if="cfImg" :src="cfImg" style="max-width:100%;max-height:80px;border-radius:4px;" @error="$event.target.style.display='none'" />
        <div v-else style="height:60px;display:flex;align-items:center;justify-content:center;color:#bbb;font-size:11px;">\uD31D\uC5C5 \uC774\uBBF8\uC9C0</div>
        <div style="font-size:10px;color:#64748b;margin-top:6px;">\uC624\uB298 \uD558\uB8E8 \uC548 \uBCF4\uAE30</div>
      </div>
    </div>
  </template>

  <!-- ===== \u25A1. 7) \uD31D\uC5C5 =================================================== -->
  <!-- ===== \u25A0. 8) \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC ============================================== -->
  <template v-else-if="cfType==='file'">
    <div style="display:flex;align-items:center;gap:10px;padding:12px;border:1px solid #e5e7eb;border-radius:6px;background:#f9fafb;">
      <span style="font-size:24px;">\u{1F4CE}</span>
      <div style="flex:1;min-width:0;">
        <div style="font-size:12px;font-weight:600;color:#222;">{{ cfConfig.btn_label || cfName || '\uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC' }}</div>
        <div style="font-size:10px;color:#666;margin-top:2px;">{{ cfConfig.file_size || '1.2MB' }} \xB7 {{ (cfConfig.file_url || '').split('/').pop() || cfName + '.pdf' }}</div>
      </div>
      <button style="font-size:11px;padding:4px 10px;border-radius:4px;border:1px solid #1677ff;background:#fff;color:#1677ff;">\u2B07</button>
    </div>
  </template>

  <!-- ===== \u25A1. 8) \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC ============================================== -->
  <!-- ===== \u25A0. 9) \uD30C\uC77C \uBAA9\uB85D ================================================ -->
  <template v-else-if="cfType==='file_list'">
    <div style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
      <div v-for="(f,i) in ((Array.isArray(cfConfig.files) ? cfConfig.files.length : false) ? cfConfig.files : [{nm:'\uCE74\uD0C8\uB85C\uADF8.pdf'},{nm:'\uAC00\uACA9\uD45C.pdf'},{nm:'\uC0AC\uC6A9\uC790\uB9E4\uB274\uC5BC.pdf'}])" :key="i"
           style="display:flex;align-items:center;gap:8px;padding:7px 10px;font-size:11px;border-bottom:1px solid #f0f0f0;background:#fff;">
        <span>\u{1F4C4}</span><span style="flex:1;color:#374151;">{{ f.nm || f.name || ('\uD30C\uC77C ' + (i+1)) }}</span>
        <span style="color:#1677ff;font-size:10px;">\u2B07</span>
      </div>
    </div>
  </template>

  <!-- ===== \u25A1. 9) \uD30C\uC77C \uBAA9\uB85D ================================================ -->
  <!-- ===== \u25A0. 10) \uB3D9\uC601\uC0C1 \uD50C\uB808\uC774\uC5B4 ============================================ -->
  <template v-else-if="cfType==='video_player'">
    <div style="position:relative;background:#000;border-radius:6px;overflow:hidden;">
      <img v-if="cfImg || cfConfig.poster_url" :src="cfImg || cfConfig.poster_url" style="width:100%;display:block;height:120px;object-fit:cover;opacity:.85;" @error="$event.target.style.display='none'" />
      <div v-else style="height:120px;background:linear-gradient(135deg,#1e293b,#0f172a);"></div>
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
        <span style="font-size:36px;color:#fff;background:rgba(0,0,0,0.4);width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;">\u25B6</span>
      </div>
      <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,0.7),transparent);color:#fff;padding:14px 10px 6px;font-size:11px;font-weight:600;">{{ cfName }}</div>
    </div>
  </template>

  <!-- ===== \u25A1. 10) \uB3D9\uC601\uC0C1 \uD50C\uB808\uC774\uC5B4 ============================================ -->
  <!-- ===== \u25A0. 11~12) \uC0C1\uD488 \uC2AC\uB77C\uC774\uB354 / \uADF8\uB9AC\uB4DC ==================================== -->
  <template v-else-if="cfType==='product_slider' || cfType==='product'">
    <div style="font-size:11px;font-weight:700;color:#222;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
      <span>{{ cfType==='product_slider' ? '\u{1F6D2} \uC2AC\uB77C\uC774\uB354' : '\u{1F4E6} \uC0C1\uD488 \uADF8\uB9AC\uB4DC' }}</span>
      <span style="font-size:10px;color:#888;font-weight:400;">{{ cfConfig.category_id || cfName }}</span>
    </div>
    <div :style="{display:'grid',gridTemplateColumns: cfType==='product_slider' ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',gap:'5px'}">
      <div v-for="i in 4" :key="i" style="text-align:center;">
        <div style="aspect-ratio:1;background:linear-gradient(135deg,#fce7f3,#fbcfe8);border-radius:5px;margin-bottom:3px;display:flex;align-items:center;justify-content:center;font-size:18px;">{{ ['\u{1F457}','\u{1F454}','\u{1F45C}','\u{1F45F}'][i-1] }}</div>
        <div style="font-size:9px;color:#374151;">\uC0C1\uD488{{ i }}</div>
        <div style="font-size:9px;color:#e8587a;font-weight:700;">\u20A929,900</div>
      </div>
    </div>
  </template>

  <!-- ===== \u25A1. 11~12) \uC0C1\uD488 \uC2AC\uB77C\uC774\uB354 / \uADF8\uB9AC\uB4DC ==================================== -->
  <!-- ===== \u25A0. 13) \uC870\uAC74\uC0C1\uD488 ================================================ -->
  <template v-else-if="cfType==='cond_product'">
    <div style="font-size:11px;font-weight:700;color:#222;margin-bottom:6px;">\u{1F50D} {{ cfConfig.condition || 'BEST_SELLER' }}</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;">
      <div v-for="i in 3" :key="i" style="aspect-ratio:1;background:linear-gradient(135deg,#dcfce7,#bbf7d0);border-radius:5px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:9px;color:#15803d;font-weight:600;gap:2px;">
        <span style="font-size:18px;">{{ ['\u{1F947}','\u{1F948}','\u{1F949}'][i-1] }}</span><span>BEST {{ i }}</span>
      </div>
    </div>
  </template>

  <!-- ===== \u25A1. 13) \uC870\uAC74\uC0C1\uD488 ================================================ -->
  <!-- ===== \u25A0. 14) \uCFE0\uD3F0 ================================================== -->
  <template v-else-if="cfType==='coupon'">
    <div style="background:linear-gradient(135deg,#e8587a,#f97316);border-radius:8px;padding:14px;color:#fff;display:flex;align-items:center;gap:12px;">
      <span style="font-size:28px;">\u{1F39F}</span>
      <div style="flex:1;min-width:0;">
        <div style="font-size:10px;opacity:.9;">{{ cfConfig.coupon_id || '\uCFE0\uD3F0' }}</div>
        <div style="font-size:14px;font-weight:800;">{{ cfConfig.btn_label || cfName }}</div>
      </div>
      <div style="border:2px dashed rgba(255,255,255,.6);border-radius:6px;padding:6px 12px;font-size:11px;font-weight:700;white-space:nowrap;">\uBC1C\uAE09</div>
    </div>
  </template>

  <!-- ===== \u25A1. 14) \uCFE0\uD3F0 ================================================== -->
  <!-- ===== \u25A0. 15) \uCE74\uC6B4\uD2B8\uB2E4\uC6B4 =============================================== -->
  <template v-else-if="cfType==='countdown'">
    <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:8px;padding:12px;color:#fff;text-align:center;">
      <div style="font-size:11px;opacity:.8;margin-bottom:6px;">\u23F1 {{ cfConfig.label || cfName || '\uC774\uBCA4\uD2B8 \uC885\uB8CC\uAE4C\uC9C0' }}</div>
      <div style="display:flex;justify-content:center;gap:6px;">
        <div v-for="(v,i) in [12,23,45,30]" :key="i" style="background:rgba(255,255,255,0.15);border-radius:4px;padding:4px 8px;min-width:32px;">
          <div style="font-size:14px;font-weight:800;">{{ String(v).padStart(2,'0') }}</div>
          <div style="font-size:8px;opacity:.7;">{{ ['DAY','HR','MIN','SEC'][i] }}</div>
        </div>
      </div>
    </div>
  </template>

  <!-- ===== \u25A1. 15) \uCE74\uC6B4\uD2B8\uB2E4\uC6B4 =============================================== -->
  <!-- ===== \u25A0. 16) \uB9C9\uB300 \uCC28\uD2B8 =============================================== -->
  <template v-else-if="cfType==='chart_bar'">
    <div style="font-size:11px;font-weight:700;color:#222;margin-bottom:6px;">\u{1F4CA} {{ cfConfig.title || cfName }}</div>
    <div style="display:flex;align-items:flex-end;gap:3px;height:80px;background:#fafafa;border-radius:5px;padding:8px;">
      <div v-for="(bar,i) in cfChartBars" :key="i" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;">
        <div :style="{height:bar.pct+'%',background:bar.color,borderRadius:'2px 2px 0 0',width:'100%',minHeight:'4px'}"></div>
        <div style="font-size:8px;color:#888;">{{ bar.label }}</div>
      </div>
    </div>
  </template>

  <!-- ===== \u25A1. 16) \uB9C9\uB300 \uCC28\uD2B8 =============================================== -->
  <!-- ===== \u25A0. 17) \uB77C\uC778 \uCC28\uD2B8 =============================================== -->
  <template v-else-if="cfType==='chart_line'">
    <div style="font-size:11px;font-weight:700;color:#222;margin-bottom:6px;">\u{1F4C8} {{ cfConfig.title || cfName }}</div>
    <div style="position:relative;height:80px;background:#fafafa;border-radius:5px;padding:8px;">
      <svg viewBox="0 0 100 50" preserveAspectRatio="none" style="width:100%;height:100%;">
        <polyline :points="cfChartBars.map((b,i) => (i*(100/(cfChartBars.length-1||1))) + ',' + (50-b.pct/2)).join(' ')"
                  fill="none" stroke="#1677ff" stroke-width="1.5" />
        <circle v-for="(b,i) in cfChartBars" :key="i"
                :cx="i*(100/(cfChartBars.length-1||1))" :cy="50-b.pct/2" r="1.2" fill="#1677ff" />
      </svg>
    </div>
  </template>

  <!-- ===== \u25A1. 17) \uB77C\uC778 \uCC28\uD2B8 =============================================== -->
  <!-- ===== \u25A0. 18) \uD30C\uC774 \uCC28\uD2B8 =============================================== -->
  <template v-else-if="cfType==='chart_pie'">
    <div style="font-size:11px;font-weight:700;color:#222;margin-bottom:6px;">\u{1F967} {{ cfConfig.title || cfName }}</div>
    <div style="display:flex;align-items:center;gap:10px;">
      <div :style="{width:'70px',height:'70px',borderRadius:'50%',background:cfPieGradient,flexShrink:0}"></div>
      <div style="flex:1;display:flex;flex-direction:column;gap:3px;">
        <div v-for="(s,i) in cfPie.slice(0,5)" :key="i" style="display:flex;align-items:center;gap:5px;font-size:10px;">
          <span :style="{width:'10px',height:'10px',background:s.color,borderRadius:'2px'}"></span>
          <span style="flex:1;color:#555;">{{ s.label }}</span>
          <span style="color:#888;">{{ s.ratio }}%</span>
        </div>
      </div>
    </div>
  </template>

  <!-- ===== \u25A1. 18) \uD30C\uC774 \uCC28\uD2B8 =============================================== -->
  <!-- ===== \u25A0. 19) \uBC14\uCF54\uB4DC ================================================= -->
  <template v-else-if="cfType==='barcode'">
    <div style="background:#fff;border:1px solid #ddd;border-radius:6px;padding:14px;text-align:center;">
      <div style="font-family:monospace;font-size:36px;letter-spacing:-2px;color:#000;line-height:1;font-weight:900;">||\u2016|\u2016\u2016|||\u2016|\u2016|||\u2016||\u2016|||</div>
      <div style="font-family:monospace;font-size:10px;color:#666;margin-top:5px;letter-spacing:2px;">{{ cfConfig.value || cfName || 'BC-001' }}</div>
    </div>
  </template>

  <!-- ===== \u25A1. 19) \uBC14\uCF54\uB4DC ================================================= -->
  <!-- ===== \u25A0. 20) QR \uCF54\uB4DC =============================================== -->
  <template v-else-if="cfType==='qrcode'">
    <div style="background:#fff;border:1px solid #ddd;border-radius:6px;padding:12px;text-align:center;">
      <div style="display:inline-block;padding:6px;background:#fff;border:2px solid #000;font-family:monospace;font-size:7px;line-height:0.9;color:#000;font-weight:900;letter-spacing:0;white-space:pre;">{{
'\u25A0\u25A0\u25A0 \u25A0 \u25A0 \u25A0\u25A0\u25A0\\n\u25A0   \u25A0\u25A0\u25A0   \u25A0\\n\u25A0 \u25A0  \u25A0  \u25A0 \u25A0\\n  \u25A0 \u25A0\u25A0\u25A0 \u25A0  \\n\u25A0 \u25A0 \u25A0   \u25A0 \u25A0\\n  \u25A0\u25A0\u25A0 \u25A0\u25A0\u25A0  \\n\u25A0\u25A0\u25A0   \u25A0 \u25A0\u25A0\u25A0'
      }}</div>
      <div style="font-size:10px;color:#666;margin-top:5px;">{{ cfConfig.value || cfName }}</div>
    </div>
  </template>

  <!-- ===== \u25A1. 20) QR \uCF54\uB4DC =============================================== -->
  <!-- ===== \u25A0. 21) \uBC14\uCF54\uB4DC + QR ============================================ -->
  <template v-else-if="cfType==='barcode_qrcode'">
    <div style="display:flex;gap:10px;align-items:center;background:#fff;border:1px solid #ddd;border-radius:6px;padding:10px;">
      <div style="flex:1;text-align:center;">
        <div style="font-family:monospace;font-size:22px;letter-spacing:-2px;font-weight:900;">||\u2016|\u2016\u2016|||\u2016|\u2016||</div>
        <div style="font-family:monospace;font-size:9px;color:#666;margin-top:3px;">{{ cfConfig.barcode_value || 'BC-001' }}</div>
      </div>
      <div style="width:50px;height:50px;background:#000;border-radius:3px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;">QR</div>
    </div>
  </template>

  <!-- ===== \u25A1. 21) \uBC14\uCF54\uB4DC + QR ============================================ -->
  <!-- ===== \u25A0. 22) \uACB0\uC81C\uC704\uC82F ================================================ -->
  <template v-else-if="cfType==='payment_widget'">
    <div style="background:linear-gradient(135deg,#3b82f6,#1e40af);border-radius:8px;padding:14px;color:#fff;">
      <div style="font-size:10px;opacity:.8;">\u{1F4B3} \uACB0\uC81C \uAE08\uC561</div>
      <div style="font-size:20px;font-weight:800;margin:4px 0;">\u20A9{{ (cfConfig.amount || 29900).toLocaleString() }}</div>
      <div style="display:flex;gap:4px;margin-top:8px;">
        <div v-for="m in ['\uCE74\uB4DC','\uD1A0\uC2A4','\uCE74\uCE74\uC624']" :key="m" style="flex:1;background:rgba(255,255,255,0.2);border-radius:4px;padding:4px 0;text-align:center;font-size:10px;font-weight:600;">{{ m }}</div>
      </div>
    </div>
  </template>

  <!-- ===== \u25A1. 22) \uACB0\uC81C\uC704\uC82F ================================================ -->
  <!-- ===== \u25A0. 23) \uC804\uC790\uACB0\uC7AC ================================================ -->
  <template v-else-if="cfType==='approval_widget'">
    <div style="background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:12px;">
      <div style="font-size:11px;font-weight:700;color:#222;margin-bottom:8px;">\u2705 {{ cfName || '\uC804\uC790\uACB0\uC7AC' }}</div>
      <div style="display:flex;justify-content:space-between;font-size:10px;">
        <div v-for="(s,i) in ['\uB2F4\uB2F9\uC790','\uD300\uC7A5','\uBD80\uC11C\uC7A5']" :key="i" style="text-align:center;flex:1;">
          <div :style="{width:'34px',height:'34px',margin:'0 auto 4px',borderRadius:'50%',background:i<2?'#22c55e':'#e5e7eb',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px'}">{{ i<2 ? '\u2713' : '?' }}</div>
          <div style="color:#555;">{{ s }}</div>
        </div>
      </div>
    </div>
  </template>

  <!-- ===== \u25A1. 23) \uC804\uC790\uACB0\uC7AC ================================================ -->
  <!-- ===== \u25A0. \uAE30\uD0C0 ====================================================== -->
  <template v-else>
    <div style="background:#f5f5f5;border-radius:6px;padding:16px;text-align:center;color:#9ca3af;">
      <div style="font-size:24px;margin-bottom:4px;">\u25AA</div>
      <div style="font-size:11px;font-weight:600;">{{ cfName || '\uBBF8\uB9AC\uBCF4\uAE30' }}</div>
      <div v-if="cfType" style="font-size:10px;color:#bbb;margin-top:2px;">{{ cfType }}</div>
    </div>
  </template>
</div>
  
  <!-- ===== \u25A1. \uAE30\uD0C0 ====================================================== -->`};window.DpDispWidgetPreview={name:"DpDispWidgetPreview",props:{navigate:{type:Function,required:!0}},setup(b){const{reactive:x,computed:p,ref:V,watch:q,onMounted:E,nextTick:J,watchEffect:M}=Vue,z=x({disp_widget_types:[],disp_envs:[],active_statuses:[{codeValue:"\uD65C\uC131",codeLabel:"\uD65C\uC131"},{codeValue:"\uBE44\uD65C\uC131",codeLabel:"\uBE44\uD65C\uC131"}],visibility_opts:[{value:"",label:"\uC804\uCCB4"},{value:"PUBLIC",label:"\uC804\uCCB4\uACF5\uAC1C"},{value:"MEMBER",label:"\uD68C\uC6D0\uACF5\uAC1C"},{value:"VERIFIED",label:"\uC778\uC99D\uD68C\uC6D0"},{value:"PREMIUM",label:"\uC6B0\uC218\uD68C\uC6D0\u2191"},{value:"VIP",label:"VIP\uC804\uC6A9"},{value:"INVITED",label:"\uCD08\uB300\uD68C\uC6D0"},{value:"STAFF",label:"\uC9C1\uC6D0"},{value:"EXECUTIVE",label:"\uC784\uC9C1\uC6D0"}]}),A=x({selectedLibId:null}),D=x([]),S=(e,t={})=>{if(e==="searchParam-list")return Q();if(e==="searchParam-reset")return K();if(e==="pathTree-expand-all")return le();if(e==="pathTree-collapse-all")return pe();if(e==="preview-toggle-real"){s.showRealContent=!s.showRealContent;return}else{if(e==="preview-reset")return H();if(e==="spanPopup-close")return Se();if(e==="slot-remove")return ke(t);if(e==="dashItem-remove")return Ie(t);console.warn("[handleBtnAction] unknown cmd:",e)}},R=(e,t={})=>{if(e==="pathTree-toggle")return se(t);if(e==="pathTree-select")return ne(t);if(e==="preview-tab"){s.previewGrid=t;return}else if(e==="preview-viewport"){s.viewportMode=t;return}else{if(e==="slot-span-set")return _e(t.idx,t.axis,t.delta);if(e==="slot-span-popup")return ze(t.e,t.idx);console.warn("[handleSelectAction] unknown cmd:",e)}},N=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["WIDGET_TYPE_CD","DISP_ENV"],{compNm:"DpDispWidgetPreview"}),z.disp_widget_types=e.sgGetGrpCodes("WIDGET_TYPE_CD"),z.disp_envs=e.sgGetGrpCodes("DISP_ENV")},O=async()=>{var e,t;try{const o=(((t=(e=(await boApiSvc.dpWidget.getPage({pageNo:1,pageSize:1e4},"\uC804\uC2DC\uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30","\uC870\uD68C")).data)==null?void 0:e.data)==null?void 0:t.pageList)||[]).map(n=>{let d={};try{d=JSON.parse(n.widgetConfigJson||"{}")}catch{}return{...d,...n,name:n.widgetNm,widgetType:n.widgetTypeCd,desc:n.widgetDesc,libId:n.widgetId,tags:d.tags||"",pathId:n.widgetTypeCd}});D.splice(0,D.length,...o)}catch(i){console.error("[handleSearchList]",i)}};E(async()=>{await N(),await O("DEFAULT"),Object.assign(U,v)});const a=p(()=>boUtil.bofGetSiteNm()),r=coUtil.cofToYmd(new Date),g=new Date().toTimeString().slice(0,5),y={image_banner:"\u{1F5BC}",product_slider:"\u{1F6D2}",product:"\u{1F4E6}",cond_product:"\u{1F50D}",chart_bar:"\u{1F4CA}",chart_line:"\u{1F4C8}",chart_pie:"\u{1F967}",text_banner:"\u{1F4DD}",info_card:"\u2139\uFE0F",popup:"\u{1F4AC}",file:"\u{1F4CE}",file_list:"\u{1F4C1}",coupon:"\u{1F39F}",html_editor:"\u{1F4C4}",event_banner:"\u{1F389}",cache_banner:"\u{1F4B0}",widget_embed:"\u{1F9E9}",textarea:"\u{1F4CB}",markdown:"\u{1F4D1}",barcode:"\u{1F516}",qrcode:"\u{1F4F1}",barcode_qrcode:"\u{1F516}",video_player:"\u25B6\uFE0F",countdown:"\u23F1",payment_widget:"\u{1F4B3}",approval_widget:"\u2705",map_widget:"\u{1F5FA}"},c=e=>y[e]||"\u25AA",m=e=>{var t;return((t=z.disp_widget_types.find(i=>i.codeValue===e))==null?void 0:t.codeLabel)||e},v=x({previewDate:r,previewTime:g,filterType:"",filterStatus:"\uD65C\uC131",filterVisibility:"",filterDispEnv:"PROD",dashCanvas:null,searchType:"",searchValue:""}),U={},u=x({type:"",status:"\uD65C\uC131",dispEnv:"PROD",visibility:"",searchType:"",searchValue:""}),Q=()=>{Object.assign(u,{type:v.filterType,status:v.filterStatus,dispEnv:v.filterDispEnv,searchType:v.searchType,searchValue:(v.searchValue||"").trim().toLowerCase(),visibility:v.filterVisibility})},K=()=>{Object.assign(v,U),Object.assign(u,{type:"",status:"\uD65C\uC131",dispEnv:"PROD",visibility:"",searchType:"",searchValue:""}),H()},Z=e=>e.widgetTypeCd||e.widgetType||"",ee=e=>e.widgetNm||e.name||"",te=e=>e.widgetLibDesc||e.desc||"",ie=e=>e.useYn==="Y"?"\uD65C\uC131":e.useYn==="N"?"\uBE44\uD65C\uC131":e.status||"\uD65C\uC131",oe=e=>e.pathId||Array.isArray(e.usedPaths)&&e.usedPaths[0]||"",j=e=>e.widgetId||e.libId||e.widgetLibId||"",Y=p(()=>{const e=(u.searchValue||"").toLowerCase(),t=u.searchType||"widgetNm,tag,widgetLibDesc";return(D||[]).filter(i=>{if(u.type&&Z(i)!==u.type||u.status&&ie(i)!==u.status||u.dispEnv&&i.dispEnv&&!i.dispEnv.includes("^"+u.dispEnv+"^"))return!1;if(e){const o=[];if(t.includes("widgetNm")&&o.push(ee(i).toLowerCase().includes(e)),t.includes("tag")&&o.push((i.tags||"").toLowerCase().includes(e)),t.includes("widgetLibDesc")&&o.push(te(i).toLowerCase().includes(e)),!o.some(Boolean))return!1}return!0})}),ne=e=>{A.selectedLibId=j(e)},ae=e=>e?String(e).split(/[.\->]+/).map(t=>t.trim()).filter(Boolean):[],G=p(()=>{const e={},t=(i,o)=>{const n=ae(o);n.length?n.length===1&&n.push("(\uB8E8\uD2B8)"):n.push("(\uBBF8\uB4F1\uB85D)","(\uBBF8\uB4F1\uB85D)");const d=n[0],l=n.slice(1).join(" > ");e[d]||(e[d]={}),e[d][l]||(e[d][l]=[]),e[d][l].push(i)};return(Y.value||[]).forEach(i=>{const o=oe(i);Array.isArray(i.usedPaths)&&i.usedPaths.length?i.usedPaths.forEach(n=>t(i,n)):t(i,o)}),Object.keys(e).sort().map(i=>({label:i,children:Object.keys(e[i]).sort().map(o=>({label:o,libs:e[i][o]}))}))}),f=x(new Set),se=e=>{f.has(e)?f.delete(e):f.add(e)},de=e=>f.has(e),re=e=>e.children.every(t=>f.has(e.label+"_"+t.label)),Ge=(e,t)=>{e.stopPropagation();const i=!re(t);t.children.forEach(o=>{const n=t.label+"_"+o.label;i?f.add(n):f.delete(n)}),i&&f.add(t.label)};M(()=>{f.has("__root__")||f.add("__root__"),G.value.length&&f.size===1&&f.add(G.value[0].label)});const le=()=>{G.value.forEach(e=>f.add(e.label)),f.add("__root__")},pe=()=>{f.clear(),f.add("__root__")},ce=(e,t)=>{window._dragWidgetLib=t,window._dragWidgetLibs=null,e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain",j(t))},fe=()=>{window._dragWidgetLib=null},ge=e=>{const t=new Set;return(e||[]).filter(i=>{const o=j(i);return t.has(o)?!1:(t.add(o),!0)})},xe=(e,t)=>{const i=ge(t);window._dragWidgetLib=null,window._dragWidgetLibs=i,e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain","node:"+i.length)},be=()=>{window._dragWidgetLibs=null},s=x({previewGrid:"grid1",viewportMode:"desktop",showRealContent:!1,spanPopupIdx:-1,dashDragOver:!1}),ve=[{id:"grid1",label:"grid1",cols:1},{id:"grid2",label:"grid2",cols:2},{id:"grid3",label:"grid3",cols:3},{id:"grid4",label:"grid4",cols:4},{id:"dashboard",label:"dashboard",cols:null}],I={grid1:1,grid2:2,grid3:3,grid4:4},ue={desktop:{label:"\u{1F5A5} PC",width:null},tablet:{label:"\u{1F4DF} \uD0DC\uBE14\uB9BF",width:"768px"},mobile:{label:"\u{1F4F1} \uBAA8\uBC14\uC77C",width:"375px"}},he=p(()=>({grid1:"repeat(1,1fr)",grid2:"repeat(auto-fill,minmax(max(calc(50% - 5px),260px),1fr))",grid3:"repeat(auto-fill,minmax(max(calc(33.333% - 6px),190px),1fr))",grid4:"repeat(auto-fill,minmax(max(calc(25% - 6px),220px),1fr))"})[s.previewGrid]||"repeat(1,1fr)"),L=e=>Array(e*2).fill(null),w=x({grid1:L(1),grid2:L(2),grid3:L(3),grid4:L(4)}),$=p(()=>w[s.previewGrid]||[]),F=e=>{const t=I[e];if(!t)return;const i=w[e],o=i.length-t;if(i.slice(o).some(Boolean))for(let n=0;n<t;n++)i.push(null)},C=x({dragOverIdx:-1}),ye=(e,t)=>{e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),C.dragOverIdx!==t&&(C.dragOverIdx=t)},me=(e,t)=>{const i=e.relatedTarget;i&&e.currentTarget&&e.currentTarget.contains(i)||C.dragOverIdx===t&&(C.dragOverIdx=-1)},we=(e,t)=>{e.preventDefault(),C.dragOverIdx=-1;const i=window._dragWidgetLibs;if(i){if(window._dragWidgetLibs=null,i.length>40){showToast(`\uB178\uB4DC \uD558\uC704 \uC704\uC82F\uC774 ${i.length}\uAC1C\uB85C 40\uAC1C\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4. \uBC30\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`,"error");return}const d=s.previewGrid,l=w[d],T=I[d]||1;let h=0,_=t;for(;h<i.length;){if(_>=l.length)for(let P=0;P<T;P++)l.push(null);l[_]||(l.splice(_,1,{...i[h],colSpan:1,rowSpan:1}),h++),_++}F(d);return}const o=window._dragWidgetLib;if(!o)return;const n=s.previewGrid;w[n].splice(t,1,{...o,colSpan:1,rowSpan:1}),F(n)},ke=e=>{w[s.previewGrid].splice(e,1,null)},_e=(e,t,i)=>{const o=w[s.previewGrid][e];if(!o)return;const n=I[s.previewGrid]||1;t==="col"&&(o.colSpan=Math.max(1,Math.min(n,(o.colSpan||1)+i))),t==="row"&&(o.rowSpan=Math.max(1,Math.min(4,(o.rowSpan||1)+i)))},ze=(e,t)=>{e.stopPropagation(),s.spanPopupIdx=s.spanPopupIdx===t?-1:t},Se=()=>{s.spanPopupIdx=-1},k=x([]),Ce=e=>{e.preventDefault(),s.dashDragOver=!0},Te=()=>{s.dashDragOver=!1},De=e=>{if(e.preventDefault(),s.dashDragOver=!1,!v.dashCanvas)return;const t=v.dashCanvas.getBoundingClientRect(),i=window._dragWidgetLibs;if(i){if(window._dragWidgetLibs=null,i.length>40){showToast(`\uB178\uB4DC \uD558\uC704 \uC704\uC82F\uC774 ${i.length}\uAC1C\uB85C 40\uAC1C\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4. \uBC30\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`,"error");return}const l=Math.max(0,e.clientX-t.left-120),T=Math.max(0,e.clientY-t.top-20),h=3,_=260,P=200,X=10;window.safeArrayUtils.safeForEach(i,(Ae,B)=>{const Ne=B%h,Oe=Math.floor(B/h);k.push({id:Date.now()+B,lib:{...Ae},x:l+Ne*(_+X),y:T+Oe*(P+X),w:_,h:P})});return}const o=window._dragWidgetLib;if(!o)return;const n=Math.max(0,e.clientX-t.left-110),d=Math.max(0,e.clientY-t.top-20);k.push({id:Date.now(),lib:{...o},x:n,y:d,w:240,h:180})},Ie=e=>{const t=k.findIndex(i=>i.id===e);t>=0&&k.splice(t,1)},Le=(e,t)=>{e.preventDefault();const i=e.clientX-t.x,o=e.clientY-t.y,n=l=>{t.x=Math.max(0,l.clientX-i),t.y=Math.max(0,l.clientY-o)},d=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",d)},Pe=(e,t)=>{e.preventDefault(),e.stopPropagation();const i=e.clientX,o=e.clientY,n=t.w,d=t.h,l=h=>{t.w=Math.max(160,n+(h.clientX-i)),t.h=Math.max(120,d+(h.clientY-o))},T=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",T)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",T)},Ee=p(()=>s.previewGrid==="dashboard"?k.length:($.value||[]).filter(Boolean).length),H=()=>{if(s.previewGrid==="dashboard")k.splice(0);else{const e=I[s.previewGrid],t=w[s.previewGrid];t.splice(0,t.length,...L(e))}};return{uiState:A,codes:z,searchParam:v,applied:u,gridState:s,dragState:C,tabSlots:w,dashItems:k,handleBtnAction:S,handleSelectAction:R,cfSiteNm:a,cfFilteredLibs:Y,cfTree:G,cfAutoGridColumns:he,cfCurrentSlots:$,cfPlacedCount:Ee,VIEWPORT:ue,GRID_TABS:ve,GRID_COLS:I,today:r,wIcon:c,wTypeLabel:m,isOpen:de,onItemDragStart:ce,onItemDragEnd:fe,onNodeDragStart:xe,onNodeDragEnd:be,onDragOver:ye,onDragLeave:me,onDrop:we,onDashDragOver:Ce,onDashDragLeave:Te,onDashDrop:De,startItemMove:Le,startItemResize:Pe,coUtil}},template:`
<div>
  <!-- ===== \u25A0. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
  <div class="page-title" style="display:flex;align-items:center;justify-content:space-between;">
    <div>
      \uC804\uC2DC\uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30
      <span style="font-size:13px;font-weight:400;color:#888;">\uC704\uC82F \uD2B8\uB9AC & \uB4DC\uB798\uADF8\uD558\uC5EC \uBC30\uCE58</span>
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
        <span style="font-size:12px;font-weight:600;color:#555;">\u{1F4C5} \uC804\uC2DC\uC77C\uC2DC</span>
        <bo-date-time-picker v-model:date="searchParam.previewDate" v-model:time="searchParam.previewTime"
          :show-clear="false" date-width="136px" time-width="90px" />
      </div>
      <div style="width:1px;height:24px;background:#e0e0e0;"></div>
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">\uC0C1\uD0DC</span>
        <select v-model="searchParam.filterStatus" class="form-control" style="width:76px;margin:0;font-size:12px;">
          <option value="">\uC804\uCCB4</option><option v-for="c in codes.active_statuses" :key="c.codeValue" :value="c.codeValue">{{ c.codeLabel }}</option>
        </select>
      </div>
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">\uD658\uACBD</span>
        <select v-model="searchParam.filterDispEnv" class="form-control" style="width:76px;margin:0;font-size:12px;">
          <option value="">\uC804\uCCB4</option><option v-for="c in codes.disp_envs" :key="c.codeValue" :value="c.codeValue">{{ c.codeLabel }}</option>
        </select>
      </div>
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">\uACF5\uAC1C\uB300\uC0C1</span>
        <select v-model="searchParam.filterVisibility" class="form-control" style="width:100px;margin:0;font-size:12px;">
          <option v-for="o in codes.visibility_opts" :key="o?.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>
      <div style="width:1px;height:24px;background:#e0e0e0;"></div>
      <div style="display:flex;align-items:center;gap:5px;">
        <span style="font-size:12px;font-weight:600;color:#555;">\uC704\uC82F\uC720\uD615</span>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
        <select v-model="searchParam.filterType" class="form-control" style="width:114px;margin:0;font-size:12px;">
          <option v-for="t in codes.disp_widget_types" :key="t?.value" :value="t.codeValue">{{ t.codeLabel }}</option>
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
      <div style="display:flex;align-items:center;gap:6px;margin-left:auto;">
        <button @click="handleBtnAction('searchParam-reset')" class="btn btn_reset"
          style="padding:0;width:26px;height:26px;font-size:13px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;" title="\uCD08\uAE30\uD654">\u{1F504}</button>
        <button @click="handleBtnAction('searchParam-list')" class="btn btn_search">\uAC80\uC0C9</button>
      </div>
    </div>
  </div>

  <!-- ===== \u25A1. \uC870\uD68C \uC870\uAC74 =================================================== -->
  <!-- ===== \u25A0. 2\uB2E8 \uB808\uC774\uC544\uC6C3 ================================================= -->
  <div style="display:flex;gap:12px;height:calc(100vh - 240px);min-height:500px;align-items:stretch;">

    <!-- ===== \u25A0.\u25A0. \uC67C\uCABD: \uD2B8\uB9AC (\uCE74\uB4DC) =========================================== -->
    <div class="card" style="width:340px;flex-shrink:0;display:flex;flex-direction:column;padding:0;overflow:hidden;">
      <div style="padding:7px 12px;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:700;color:#555;background:#fafafa;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;">
        <span class="list-title">\uD45C\uC2DC\uACBD\uB85C
          <span style="font-size:10px;color:#aaa;font-family:monospace;font-weight:400;margin-left:4px;">#ec_disp_widget</span>
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
            :style="isOpen('__root__') ? 'transform:rotate(90deg);' : ''">\u25B6</span>
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
              :style="isOpen(node.label) ? 'transform:rotate(90deg);' : ''">\u25B6</span>
            <span>{{ node.label }}</span>
            <span style="margin-left:auto;font-size:10px;background:#e5e7eb;color:#6b7280;border-radius:8px;padding:0 6px;">
              {{ node.children.reduce((acc,c)=>acc+c.libs.length,0) }}
            </span>
          </div>
          <template v-if="isOpen(node.label)">
            <div v-for="sub in node.children" :key="node.label+'_'+sub.label">
              <div @click="handleSelectAction('pathTree-toggle', node.label+'_'+sub.label)"
                draggable="true"
                @dragstart="onNodeDragStart($event, sub.libs)"
                @dragend="onNodeDragEnd"
                style="display:flex;align-items:center;gap:6px;padding:5px 12px 5px 26px;cursor:grab;font-size:11px;font-weight:600;color:#4b5563;border-radius:4px;margin:1px 4px;"
                :style="isOpen(node.label+'_'+sub.label) ? 'background:#f9fafb;' : ''">
                <span style="font-size:9px;color:#9ca3af;transition:transform .2s;"
                  :style="isOpen(node.label+'_'+sub.label) ? 'transform:rotate(90deg);' : ''">\u25B6</span>
                <span>{{ sub.label }}</span>
                <span style="margin-left:auto;font-size:10px;background:#e5e7eb;color:#6b7280;border-radius:8px;padding:0 5px;">{{ sub.libs.length }}</span>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ====================================== -->
              <template v-if="isOpen(node.label+'_'+sub.label)">
                <div v-for="lib in sub.libs" :key="lib.widgetLibId || lib.libId"
                  draggable="true"
                  @dragstart="onItemDragStart($event, lib)"
                  @dragend="onItemDragEnd"
                  @click="handleSelectAction('pathTree-select', lib)"
                  style="display:flex;align-items:center;gap:7px;padding:5px 10px 5px 42px;cursor:grab;font-size:11px;border-radius:4px;margin:1px 4px;transition:background .15s;"
                  :style="uiState.selectedLibId===(lib.widgetLibId||lib.libId) ? 'background:#dbeafe;color:#1d4ed8;font-weight:700;' : 'color:#374151;'">
                  <span style="font-size:9px;color:#c4c4c4;flex-shrink:0;">\u283F</span>
                  <span style="font-size:13px;flex-shrink:0;">{{ wIcon(lib.widgetTypeCd || lib.widgetType) }}</span>
                  <span style="font-size:9px;background:#f0f4ff;color:#1d4ed8;border:1px solid #dbeafe;border-radius:3px;padding:0 4px;white-space:nowrap;flex-shrink:0;">{{ wTypeLabel(lib.widgetTypeCd || lib.widgetType) }}</span>
                  <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ lib.widgetNm || lib.name }}</span>
                </div>
              </template>
            </div>
          </template>
        </div>
        </div><!-- ===== /root children ===== -->
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
          <div style="width:1px;height:18px;background:#e5e7eb;margin-right:2px;"></div>
          <button v-for="(vp, key) in VIEWPORT" :key="key" @click="handleSelectAction('preview-viewport', key)"
            style="font-size:11px;padding:3px 8px;border-radius:6px;border:1px solid #d1d5db;white-space:nowrap;transition:all .15s;"
            :style="gridState.viewportMode===key
              ? 'background:#1d4ed8;color:#fff;border-color:#1d4ed8;'
              : 'background:#fff;color:#6b7280;'">
            {{ vp.label }}
          </button>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:0 0 0 12px;">
          <span style="font-size:12px;color:#555;font-weight:600;">{{ cfPlacedCount }}\uAC1C</span>
          <button @click="handleBtnAction('preview-reset')"
            style="font-size:11px;padding:3px 10px;border:1px solid #d0d0d0;border-radius:6px;background:#fff;color:#666;white-space:nowrap;">\uCD08\uAE30\uD654</button>
        </div>
      </div>

      <!-- ===== \u25A0.\u25A0.\u25A0. \uADF8\uB9AC\uB4DC \uCE94\uBC84\uC2A4 (grid1~4) =================================== -->
      <div v-if="gridState.previewGrid!=='dashboard'" @click="handleBtnAction('spanPopup-close')" style="flex:1;overflow-y:auto;overflow-x:auto;padding:16px;">
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
              <div v-if="!gridState.showRealContent || slot"
                @dragover="onDragOver($event, idx)"
                @dragleave="onDragLeave($event, idx)"
                @drop="onDrop($event, idx)"
                style="border-radius:8px;transition:all .15s;position:relative;"
                :style="[
                  dragState.dragOverIdx===idx
                    ? 'border:2px dashed #1d4ed8;background:#eff6ff;min-height:110px;'
                    : slot
                      ? (gridState.showRealContent ? 'border:none;background:transparent;min-height:0;' : 'border:1px solid #e5e7eb;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.07);min-height:110px;')
                      : 'border:2px dashed #d1d5db;background:#f9fafb;min-height:60px;',
                  (slot?.colSpan||1) > 1 ? { gridColumn: 'span ' + slot.colSpan } : {},
                  (slot?.rowSpan||1) > 1 ? { gridRow:    'span ' + slot.rowSpan } : {},
                ]">

                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBE44\uC5B4\uC788\uC74C ====================================== -->
                <div v-if="!slot ? (dragState.dragOverIdx!==idx) : false"
                  style="height:100%;min-height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;color:#d1d5db;padding:10px;">
                  <span style="font-size:20px;">+</span>
                  <span style="font-size:11px;">\uB4DC\uB798\uADF8\uD558\uC5EC \uCD94\uAC00</span>
                </div>

                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB4DC\uB86D \uC624\uBC84 ===================================== -->
                <div v-else-if="!slot ? (dragState.dragOverIdx===idx) : false"
                  style="min-height:60px;display:flex;align-items:center;justify-content:center;color:#1d4ed8;font-size:12px;font-weight:700;padding:10px;">
                  \u25BC \uC5EC\uAE30\uC5D0 \uCD94\uAC00
                </div>

                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uCE58\uB428 ======================================= -->
                <template v-else-if="slot">
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2AC\uB86F \uD5E4\uB354 (\uC2E4\uC81C\uCEE8\uD150\uCE20 OFF) ======================= -->
                  <div v-if="!gridState.showRealContent" style="display:flex;align-items:center;gap:5px;padding:6px 10px 5px;border-bottom:1px solid #f0f0f0;background:#fafafa;border-radius:8px 8px 0 0;">
                    <span style="font-size:12px;">{{ wIcon(slot.widgetTypeCd || slot.widgetType) }}</span>
                    <span style="font-size:10px;background:#f0f4ff;color:#1d4ed8;border:1px solid #dbeafe;border-radius:4px;padding:0 5px;white-space:nowrap;">{{ wTypeLabel(slot.widgetTypeCd || slot.widgetType) }}</span>
                    <span style="font-size:11px;font-weight:600;color:#333;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ slot.widgetNm || slot.name }}</span>
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. span \uC124\uC815 \uC544\uC774\uCF58 =========================== -->
                    <button @click="handleSelectAction('slot-span-popup', { e: $event, idx })"
                      :title="'\uC5F4 ' + (slot.colSpan||1) + ' \xD7 \uD589 ' + (slot.rowSpan||1)"
                      style="flex-shrink:0;width:22px;height:22px;border-radius:4px;border:1px solid #e5e7eb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;transition:all .15s;"
                      :style="gridState.spanPopupIdx===idx ? 'background:#1d4ed8;color:#fff;border-color:#1d4ed8;' : 'background:#f9fafb;color:#6b7280;'">\u2699</button>
                    <button @click="handleBtnAction('slot-remove', idx)"
                      style="flex-shrink:0;width:17px;height:17px;border-radius:50%;border:none;background:#e5e7eb;color:#6b7280;font-size:10px;display:flex;align-items:center;justify-content:center;padding:0;">\u2715</button>
                  </div>

                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. span \uC124\uC815 \uB808\uC774\uC5B4 \uD31D\uC5C5 ========================== -->
                  <div v-if="gridState.spanPopupIdx===idx" @click.stop
                    style="position:absolute;top:36px;right:6px;z-index:20;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12);padding:12px 14px;min-width:170px;">
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB2EB\uAE30 ==================================== -->
                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                      <span style="font-size:11px;font-weight:700;color:#374151;">\uADF8\uB9AC\uB4DC \uC2A4\uD32C \uC124\uC815</span>
                      <button @click="handleBtnAction('spanPopup-close')" style="border:none;background:none;font-size:13px;color:#9ca3af;padding:0;line-height:1;">\u2715</button>
                    </div>
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC5F4(colspan) ============================ -->
                    <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
                      <span style="font-size:11px;color:#6b7280;width:36px;">\uC5F4 span</span>
                      <button @click="handleSelectAction('slot-span-set', { idx, axis:'col', delta:-1 })" :disabled="(slot.colSpan||1)<=1"
                        style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                        :style="(slot.colSpan||1)<=1?'opacity:.3;cursor:default;':''">\u2212</button>
                      <span style="min-width:28px;text-align:center;font-size:14px;font-weight:700;color:#1d4ed8;">{{ slot.colSpan||1 }}</span>
                      <button @click="handleSelectAction('slot-span-set', { idx, axis:'col', delta:+1 })" :disabled="(slot.colSpan||1)>=(GRID_COLS[gridState.previewGrid]||1)"
                        style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                        :style="(slot.colSpan||1)>=(GRID_COLS[gridState.previewGrid]||1)?'opacity:.3;cursor:default;':''">+</button>
                      <span style="font-size:10px;color:#9ca3af;">/ {{ GRID_COLS[gridState.previewGrid]||1 }}</span>
                    </div>
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD589(rowspan) ============================ -->
                    <div style="display:flex;align-items:center;gap:6px;">
                      <span style="font-size:11px;color:#6b7280;width:36px;">\uD589 span</span>
                      <button @click="handleSelectAction('slot-span-set', { idx, axis:'row', delta:-1 })" :disabled="(slot.rowSpan||1)<=1"
                        style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                        :style="(slot.rowSpan||1)<=1?'opacity:.3;cursor:default;':''">\u2212</button>
                      <span style="min-width:28px;text-align:center;font-size:14px;font-weight:700;color:#1d4ed8;">{{ slot.rowSpan||1 }}</span>
                      <button @click="handleSelectAction('slot-span-set', { idx, axis:'row', delta:+1 })" :disabled="(slot.rowSpan||1)>=4"
                        style="width:24px;height:24px;border:1px solid #e5e7eb;border-radius:4px;background:#f9fafb;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0;"
                        :style="(slot.rowSpan||1)>=4?'opacity:.3;cursor:default;':''">+</button>
                      <span style="font-size:10px;color:#9ca3af;">/ 4</span>
                    </div>
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2E4\uC81C\uCEE8\uD150\uCE20 ON: \xD7\uBC84\uD2BC\uB9CC ========================== -->
                  <div v-else style="position:relative;">
                    <button @click="handleBtnAction('slot-remove', idx)"
                      style="position:absolute;top:4px;right:4px;z-index:5;width:18px;height:18px;border-radius:50%;border:none;background:rgba(0,0,0,.3);color:#fff;font-size:11px;line-height:1;display:flex;align-items:center;justify-content:center;padding:0;">\u2715</button>
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 ================================== -->
                  <widget-preview :lib="slot" />
                </template>

              </div><!-- ===== /slot ===== -->
              </template>
            </div><!-- ===== /grid ===== -->
          </div><!-- ===== /device frame ===== -->
        </div><!-- ===== /viewport wrapper ===== -->
      </div><!-- ===== /grid canvas ===== -->

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
          <div v-if="!dashItems.length ? (!gridState.dashDragOver) : false"
            style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#d1d5db;pointer-events:none;">
            <span style="font-size:48px;">\u{1F9E9}</span>
            <span style="font-size:13px;">\uC67C\uCABD \uD2B8\uB9AC\uC5D0\uC11C \uC704\uC82F\uC744 \uB4DC\uB798\uADF8\uD558\uC5EC \uBC30\uCE58\uD558\uC138\uC694</span>
          </div>
          <div v-if="gridState.dashDragOver ? (!dashItems.length) : false"
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
              <span style="font-size:12px;">{{ wIcon(item.lib.widgetTypeCd || item.lib.widgetType) }}</span>
              <span style="font-size:11px;background:#f0f4ff;color:#1d4ed8;border:1px solid #dbeafe;border-radius:4px;padding:0 5px;white-space:nowrap;flex-shrink:0;">{{ wTypeLabel(item.lib.widgetTypeCd || item.lib.widgetType) }}</span>
              <span style="font-size:11px;font-weight:600;color:#333;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">{{ item.lib.widgetNm || item.lib.name }}</span>
              <button @mousedown.stop @click="handleBtnAction('dashItem-remove', item.id)"
                style="flex-shrink:0;width:18px;height:18px;border-radius:50%;border:none;background:#e5e7eb;color:#6b7280;font-size:10px;display:flex;align-items:center;justify-content:center;padding:0;">\u2715</button>
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

        </div><!-- ===== /dashCanvas ===== -->
      </div><!-- ===== /dashboard ===== -->

    </div><!-- ===== /\uC624\uB978\uCABD ===== -->
  </div><!-- ===== /2\uB2E8 ===== -->
</div>
  
    <!-- ===== \u25A1.\u25A1. \uC624\uB978\uCABD (\uCE74\uB4DC) ============================================== -->
  <!-- ===== \u25A1. 2\uB2E8 \uB808\uC774\uC544\uC6C3 ================================================= -->`,components:{WidgetPreview:_WP_DispWidgetPreview}};
