window.CoBarcodeWidget={name:"CoBarcodeWidget",props:{widget:{type:Object,required:!0}},setup(o){const{ref:s,onMounted:p,watch:g,nextTick:v,computed:f}=Vue,n=s(null),d=s(null),u=(e,t={})=>{console.warn("[handleBtnAction] unknown cmd:",e)},x=(e,t={})=>{console.warn("[handleSelectAction] unknown cmd:",e)};let a=null;const r=f(()=>["barcode","barcode_qrcode"].includes(o.widget.widgetType)),c=f(()=>["qrcode","barcode_qrcode"].includes(o.widget.widgetType)),w=()=>{if(!n.value||!window.JsBarcode)return;const e=o.widget,t=(e.codeValue||"").trim();if(t)try{JsBarcode(n.value,t,{format:e.codeFormat||"CODE128",width:Number(e.codeWidth)||2,height:Number(e.codeHeight)||60,displayValue:e.showCodeLabel!==!1&&e.showCodeLabel!=="false",fontSize:12,margin:10,lineColor:"#000000",background:"#ffffff"})}catch{try{JsBarcode(n.value,"000000000000",{format:"CODE128",width:2,height:40,displayValue:!0,fontSize:11,margin:8})}catch{}}},h=()=>{var b;if(!d.value||!window.QRCode)return;const e=o.widget,t=(e.codeValue||"").trim()||"000000",m=Number(e.qrSize)||120,y=(e.qrErrorLevel||"M").toUpperCase(),C=(b=QRCode.CorrectLevel[y])!=null?b:QRCode.CorrectLevel.M;a?(a.clear(),a.makeCode(t)):(d.value.innerHTML="",a=new QRCode(d.value,{text:t,width:m,height:m,colorDark:"#000000",colorLight:"#ffffff",correctLevel:C}))},i=async()=>{await v(),r.value&&w(),c.value&&h()};return p(i),["codeValue","codeFormat","codeWidth","codeHeight","qrSize","qrErrorLevel","showCodeLabel"].forEach(e=>{g(()=>o.widget[e],()=>{["qrSize","qrErrorLevel"].includes(e)&&a&&(a=null),i()})}),{barcodeEl:n,qrcodeEl:d,cfShowBarcode:r,showQr:c,handleBtnAction:u,handleSelectAction:x}},template:`
<div style="background:#fff;border-radius:10px;border:1px solid #e8e8e8;overflow:hidden;">
  <!-- \uD5E4\uB354 -->
  <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;background:#f5f5f5;border-bottom:1px solid #e8e8e8;">
    <span style="font-size:11px;color:#888;">
      {{ cfShowBarcode && showQr ? '\u{1F516} \uBC14\uCF54\uB4DC+QR' : cfShowBarcode ? '\u{1F516} \uBC14\uCF54\uB4DC' : '\u{1F4F1} QR\uCF54\uB4DC' }} {{ widget.name }}
    </span>
  </div>
  <!-- \uBCF8\uBB38 -->
  <div style="padding:16px 12px;display:flex;flex-direction:column;align-items:center;gap:14px;">
    <template v-if="!widget.codeValue || !widget.codeValue.trim()">
      <div style="font-size:12px;color:#bbb;padding:16px 0;">
        \uCF54\uB4DC \uAC12\uC744 \uC785\uB825\uD558\uC138\uC694
      </div>
    </template>
    <template v-else>
      <!-- \uBC14\uCF54\uB4DC -->
      <div v-if="cfShowBarcode" style="width:100%;display:flex;justify-content:center;overflow:hidden;">
        <svg ref="barcodeEl" style="max-width:100%;">
        </svg>
      </div>
      <!-- QR\uCF54\uB4DC -->
      <div v-if="showQr" style="display:flex;justify-content:center;">
        <div ref="qrcodeEl">
        </div>
      </div>
      <!-- \uCF54\uB4DC\uAC12 \uD45C\uC2DC -->
      <div style="font-size:11px;color:#888;letter-spacing:.5px;font-family:monospace;">
        {{ widget.codeValue }}
      </div>
    </template>
  </div>
</div>
`},window.CoCountdownWidget={name:"CoCountdownWidget",props:{widget:{type:Object,required:!0}},setup(o){const{reactive:s,computed:p,onMounted:g,onUnmounted:v,watch:f}=Vue,n=s({d:0,h:0,m:0,s:0,expired:!1,invalid:!1});let d=null;const u=(i,l={})=>{console.warn("[handleBtnAction] unknown cmd:",i)},x=(i,l={})=>{console.warn("[handleSelectAction] unknown cmd:",i)},a=i=>String(i).padStart(2,"0"),r=()=>{const i=(o.widget.countdownTarget||"").trim();if(!i){Object.assign(n,{d:0,h:0,m:0,s:0,expired:!1,invalid:!0});return}const l=new Date(i.replace(" ","T"));if(isNaN(l.getTime())){Object.assign(n,{d:0,h:0,m:0,s:0,expired:!1,invalid:!0});return}const e=l-Date.now();if(e<=0){Object.assign(n,{d:0,h:0,m:0,s:0,expired:!0,invalid:!1});return}const t=Math.floor(e/1e3);Object.assign(n,{d:Math.floor(t/86400),h:Math.floor(t%86400/3600),m:Math.floor(t%3600/60),s:t%60,expired:!1,invalid:!1})},c=()=>{d&&clearInterval(d),r(),d=setInterval(r,1e3)};g(c),v(()=>{d&&clearInterval(d)}),f(()=>o.widget.countdownTarget,c);const w=p(()=>o.widget.countdownBgColor||"#1a237e"),h=p(()=>o.widget.countdownTextColor||"#ffffff");return{remaining:n,bgColor:w,cfTextColor:h,handleBtnAction:u,handleSelectAction:x,pad:a}},template:`
<div :style="{ background: bgColor, borderRadius: '10px', overflow: 'hidden', padding: '20px 16px', textAlign: 'center', color: cfTextColor }">
  <!-- \uD0C0\uC774\uD2C0 -->
  <div style="font-size:13px;opacity:.8;margin-bottom:14px;letter-spacing:.3px;">
    \u23F1 {{ widget.countdownTitle || '\uC774\uBCA4\uD2B8 \uC885\uB8CC\uAE4C\uC9C0' }}
  </div>
  <!-- \uC885\uB8CC \uC0C1\uD0DC -->
  <div v-if="remaining.expired" style="font-size:15px;font-weight:700;opacity:.9;">
    {{ widget.countdownExpiredMsg || '\uC774\uBCA4\uD2B8\uAC00 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.' }}
  </div>
  <!-- \uBBF8\uC785\uB825 \uC0C1\uD0DC -->
  <div v-else-if="remaining.invalid" style="font-size:12px;opacity:.5;">
    \uBAA9\uD45C \uC77C\uC2DC\uB97C \uC785\uB825\uD558\uC138\uC694
    <br/>
    <span style="font-size:10px;">
      \uC608) 2026-12-31 23:59:59
    </span>
  </div>
  <!-- \uCE74\uC6B4\uD2B8\uB2E4\uC6B4 -->
  <div v-else style="display:flex;justify-content:center;gap:8px;align-items:flex-start;">
    <div v-if="remaining.d > 0" style="display:flex;flex-direction:column;align-items:center;">
      <div style="font-size:28px;font-weight:900;line-height:1;background:rgba(255,255,255,.15);border-radius:8px;padding:8px 12px;min-width:48px;">
        {{ remaining.d }}
      </div>
      <div style="font-size:10px;opacity:.7;margin-top:4px;">
        \uC77C
      </div>
    </div>
    <div v-if="remaining.d > 0" style="font-size:24px;font-weight:700;padding-top:4px;opacity:.6;">
      :
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;">
      <div style="font-size:28px;font-weight:900;line-height:1;background:rgba(255,255,255,.15);border-radius:8px;padding:8px 12px;min-width:48px;">
        {{ pad(remaining.h) }}
      </div>
      <div style="font-size:10px;opacity:.7;margin-top:4px;">
        \uC2DC
      </div>
    </div>
    <div style="font-size:24px;font-weight:700;padding-top:4px;opacity:.6;">
      :
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;">
      <div style="font-size:28px;font-weight:900;line-height:1;background:rgba(255,255,255,.15);border-radius:8px;padding:8px 12px;min-width:48px;">
        {{ pad(remaining.m) }}
      </div>
      <div style="font-size:10px;opacity:.7;margin-top:4px;">
        \uBD84
      </div>
    </div>
    <div style="font-size:24px;font-weight:700;padding-top:4px;opacity:.6;">
      :
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;">
      <div style="font-size:28px;font-weight:900;line-height:1;background:rgba(255,255,255,.15);border-radius:8px;padding:8px 12px;min-width:48px;">
        {{ pad(remaining.s) }}
      </div>
      <div style="font-size:10px;opacity:.7;margin-top:4px;">
        \uCD08
      </div>
    </div>
  </div>
</div>
`};
