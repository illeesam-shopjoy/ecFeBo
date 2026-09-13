window.DispX04Widget={name:"DispX04Widget",props:{params:{type:Object,required:!0},dispDataset:{type:Object,default:()=>({displays:[],codes:[]})},dispOpt:{type:Object,default:()=>({showBadges:!0})},widgetItem:{type:Object,required:!0}},emits:["click-action"],setup(a,{emit:c}){const{computed:l,reactive:s}=Vue,x=s({loading:!1,error:""}),v=s({}),w=(e,t={})=>{if(e==="widget-click")return y();console.warn("[handleBtnAction] unknown cmd:",e)},m=(e,t={})=>{console.warn("[handleSelectAction] unknown cmd:",e)},u=l(()=>{const e=a.widgetItem,t=a.params;if(!e||e.status!=="\uD65C\uC131")return!1;if(e.widgetLibRefYn==="Y"){if(e.useYn!=="Y")return!1}else{if(e.useYn!=="Y"||e.dispYn!=="Y")return!1;if(t.date){const n=t.time||"00:00",r=`${t.date} ${n}`;if(e.useStartDate&&r<`${e.useStartDate} 00:00`||e.useEndDate&&r>`${e.useEndDate}   23:59`)return!1}if(t.date){const n=t.time||"00:00",r=`${t.date}T${n}`;if(e.dispStartDt&&r<coUtil.cofDatetimeNorm(e.dispStartDt)||e.dispEndDt&&r>coUtil.cofDatetimeNorm(e.dispEndDt))return!1}if(e.dispEnv&&t.dispEnv&&!e.dispEnv.includes("^"+t.dispEnv+"^"))return!1}const d=e.condition;if(d==="\uD56D\uC0C1 \uD45C\uC2DC")return!0;const i=(t==null?void 0:t.isLoggedIn)||!1,o=(t==null?void 0:t.userGrade)||"";return d==="\uB85C\uADF8\uC778 \uD544\uC694"?i:d==="\uBE44\uB85C\uADF8\uC778"?!i:d==="\uB85C\uADF8\uC778+VIP"?i&&o==="VIP":d==="\uB85C\uADF8\uC778+\uC6B0\uC218"?i&&(o==="\uC6B0\uC218"||o==="VIP"):!0}),g=l(()=>{const e=p.value;if(e.clickAction&&e.clickAction!=="none")return{action:e.clickAction,target:e.clickTarget||""};const t=e.linkUrl||e.fileUrl||e.eventUrl||"";return t?{action:"url",target:t}:null}),y=()=>{const e=g.value;if(!e)return;const t=p.value;if(c("click-action",{...e,widget:t}),a.dispOpt&&a.dispOpt.interactive){const d=(e.target||"").trim();if(e.action==="url"&&d){const i=/^https?:\/\//i.test(d)?d:"https://"+d;window.open(i,"_blank","noopener")}else if(e.action==="navigate"&&d){const i=d.startsWith("#")?d:"#"+d.replace(/^\//,"");window.open("index.html"+i,"_blank")}}},f=["linear-gradient(135deg,#667eea 0%,#764ba2 100%)","linear-gradient(135deg,#1a237e 0%,#3949ab 100%)","linear-gradient(135deg,#00acc1 0%,#0097a7 100%)","linear-gradient(135deg,#43a047 0%,#2e7d32 100%)","linear-gradient(135deg,#f57c00 0%,#e65100 100%)","linear-gradient(135deg,#5e35b1 0%,#4527a0 100%)","linear-gradient(135deg,#1565c0 0%,#0d47a1 100%)"],b=e=>{const t=(e||"").split("").reduce((d,i)=>d+i.charCodeAt(0),0);return f[t%f.length]},h=coUtil.cofChartColors(),k=l(()=>coUtil.cofChartBars(a.widgetItem.chartValues,a.widgetItem.chartLabels)),z=e=>window.marked?window.marked.parse(e||""):e||"",T=e=>{const t=(e.videoUrl||"").trim();if(!t)return null;if(e.videoType==="youtube"||t.includes("youtube")||t.includes("youtu.be")){const d=t.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&\?\/\s]+)/);if(!d)return null;const i=`controls=${e.videoControls!==!1?1:0}&mute=1`;return`https://www.youtube.com/embed/${d[1]}?${i}`}if(e.videoType==="vimeo"||t.includes("vimeo")){const d=t.match(/vimeo\.com\/(\d+)/);return d?`https://player.vimeo.com/video/${d[1]}`:null}return t},C=e=>!e.mapAddress&&!e.mapLat?null:`https://maps.google.com/maps?q=${e.mapLat&&e.mapLng?`${e.mapLat},${e.mapLng}`:encodeURIComponent(e.mapAddress||"")}&z=${e.mapZoom||14}&output=embed&hl=ko`,U=e=>{try{return JSON.parse(e||"[]")}catch{return[{role:"\uB2F4\uB2F9\uC790",name:""},{role:"\uD300\uC7A5",name:""},{role:"\uBD80\uC11C\uC7A5",name:""}]}},p=l(()=>{const e=a.widgetItem||{},t=o=>{try{return JSON.parse(o)}catch{return null}},d=t(e.widgetConfigJson)||t(e.widgetConfigJson)||{},i=(o,n)=>d[o]!=null?d[o]:n!=null&&d[n]!=null?d[n]:void 0;return{...e,widgetType:e.widgetType||e.widgetTypeCd||"",name:e.name||e.widgetNm||e.widgetTitle||"",status:e.status||(e.useYn==="Y"?"\uD65C\uC131":e.useYn==="N"?"\uBE44\uD65C\uC131":"\uD65C\uC131"),title:e.title||e.widgetTitle||"",titleYn:e.titleYn||e.titleShowYn||"N",widgetLibRefYn:e.widgetLibRefYn||"N",useYn:e.useYn||"Y",imageUrl:e.imageUrl||i("img_url","imageUrl")||e.thumbnailUrl||"",altText:e.altText||i("alt")||"",linkUrl:e.linkUrl||i("link_url","linkUrl")||"",textContent:e.textContent||i("text")||e.widgetContent||"",bgColor:e.bgColor||i("bg_color","bgColor")||"",textColor:e.textColor||i("text_color","textColor")||"",infoTitle:e.infoTitle||i("title")||e.widgetTitle||"",infoBody:e.infoBody||i("content")||e.widgetContent||"",couponCode:e.couponCode||i("coupon_id","couponCode")||"",couponDesc:e.couponDesc||i("btn_label","desc")||"",htmlContent:e.htmlContent||i("html")||e.widgetContent||"",textareaContent:e.textareaContent||i("text")||e.widgetContent||"",markdownContent:e.markdownContent||i("markdown")||e.widgetContent||"",codeValue:e.codeValue||i("value")||"",videoUrl:e.videoUrl||i("video_url","videoUrl")||"",countdownTitle:e.countdownTitle||i("label")||"",countdownTarget:e.countdownTarget||i("target_datetime","targetDatetime")||"",embedCode:e.embedCode||i("embed_widget_id")||"",fileUrl:e.fileUrl||i("file_url")||"",fileLabel:e.fileLabel||i("btn_label")||"",chartTitle:e.chartTitle||i("title")||"",chartLabels:e.chartLabels||(Array.isArray(d.labels)?d.labels.join(","):""),chartValues:e.chartValues||(Array.isArray(d.values)?d.values.join(","):""),payAmount:e.payAmount||i("amount")||0,approvalDocType:e.approvalDocType||i("doc_type")||"",approvalLine:e.approvalLine||i("approval_line")||""}});return{uiState:x,codes:v,coUtil,handleBtnAction:w,handleSelectAction:m,widget:p,cfVisible:u,cfChartBars:k,chartColors:h,cfClickInfo:g,nameGrad:b,parseMarkdown:z,getVideoEmbed:T,getMapEmbed:C,parseApprovalLine:U}},template:`
<div v-if="cfVisible" class="disp-widget" :style="{ cursor: cfClickInfo ? 'pointer' : 'default' }" @click="handleBtnAction('widget-click')">
<!-- ===== \u25A0. \uC704\uC82F \uD0C0\uC774\uD2C0 ================================================== -->
<div v-if="coUtil.cofAnd(widget.titleYn==='Y', widget.title)" style="font-size:14px;font-weight:700;color:var(--text-primary,#222);margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid var(--blue,#1677ff);">
{{ widget.title }}
</div>
<!-- ===== \u25A1. \uC704\uC82F \uD0C0\uC774\uD2C0 ================================================== -->
<!-- ===== \u25A0. \uC774\uBBF8\uC9C0 \uBC30\uB108 ================================================== -->
<template v-if="widget.widgetType==='image_banner'">
  <div v-if="widget.imageUrl" style="border-radius:10px;overflow:hidden;">
    <img :src="coUtil.cofImgSrc(widget.imageUrl)" :alt="widget.altText||'\uBC30\uB108'" style="width:100%;display:block;max-height:220px;object-fit:cover;" />
  </div>
  <div v-else :style="'border-radius:10px;overflow:hidden;background:'+nameGrad(widget.name)+';padding:36px 20px;text-align:center;color:#fff;'"  >
    <div style="font-size:32px;margin-bottom:10px;">
      \u{1F4E6}
    </div>
    <div style="font-size:17px;font-weight:700;letter-spacing:.3px;text-shadow:0 1px 4px rgba(0,0,0,.3);">
      {{ widget.name }}
    </div>
    <div v-if="widget.linkUrl" style="font-size:12px;opacity:.7;margin-top:6px;">
      \u2192 {{ widget.linkUrl }}
    </div>
    <div v-else-if="widget.altText" style="font-size:12px;opacity:.7;margin-top:6px;">
      {{ widget.altText }}
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uC774\uBBF8\uC9C0 \uBC30\uB108 ================================================== -->
<!-- ===== \u25A0. \uC0C1\uD488 \uC2AC\uB77C\uC774\uB354 ================================================= -->
<template v-else-if="widget.widgetType==='product_slider'">
  <div style="background:#fff;border-radius:10px;padding:16px;border:1px solid #e8e8e8;">
    <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:12px;">
      \u{1F6D2} {{ widget.name }}
    </div>
    <div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:4px;">
      <div v-for="n in 4" :key="n" style="flex-shrink:0;width:110px;text-align:center;">
        <div style="height:90px;background:linear-gradient(135deg,#f5f5f5,#ebebeb);border-radius:8px;margin-bottom:6px;display:flex;align-items:center;justify-content:center;font-size:24px;">
          \u{1F457}
        </div>
        <div style="font-size:11px;color:#555;font-weight:600;">
          \uC0C1\uD488 {{ n }}
        </div>
        <div style="font-size:11px;color:#e8587a;font-weight:700;margin-top:2px;">
          \u20A90,000
        </div>
      </div>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uC0C1\uD488 \uC2AC\uB77C\uC774\uB354 ================================================= -->
<!-- ===== \u25A0. \uC0C1\uD488 ====================================================== -->
<template v-else-if="widget.widgetType==='product'">
  <div style="background:#fff;border-radius:10px;padding:16px;border:1px solid #e8e8e8;">
    <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:10px;">
      \u{1F4E6} {{ widget.name }}
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <div v-for="n in 3" :key="n" style="width:90px;text-align:center;border:1px solid #f0f0f0;border-radius:8px;padding:8px;">
        <div style="height:64px;background:#f9f9f9;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:4px;">
          \u{1F4E6}
        </div>
        <div style="font-size:10px;color:#888;">
          \uC0C1\uD488 {{ n }}
        </div>
      </div>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uC0C1\uD488 ====================================================== -->
<!-- ===== \u25A0. \uC870\uAC74 \uC0C1\uD488 =================================================== -->
<template v-else-if="widget.widgetType==='cond_product'">
  <div style="background:#fff;border-radius:10px;padding:16px;border:1px solid #e8e8e8;">
    <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:8px;">
      \u{1F50D} {{ widget.name }}
    </div>
    <div style="font-size:11px;color:#888;background:#f9f9f9;border-radius:6px;padding:8px;">
      <span v-if="widget.condSort">
        \uC815\uB82C: {{ widget.condSort }}
      </span>
      <span v-if="widget.condLimit">
        \uC218\uB7C9: {{ widget.condLimit }}
      </span>
      <span v-if="widget.condCategory">
        \uCE74\uD14C: {{ widget.condCategory }}
      </span>
      <span v-if="widget.condBrand">
        \uBE0C\uB79C\uB4DC: {{ widget.condBrand }}
      </span>
      <span v-if="coUtil.cofAnd(!widget.condSort, !widget.condLimit)">
      \uC870\uAC74\uC0C1\uD488 \uB80C\uB354\uB9C1
    </span>
  </div>
</div>
</template>
<!-- ===== \u25A1. \uC870\uAC74 \uC0C1\uD488 =================================================== -->
<!-- ===== \u25A0. \uCC28\uD2B8 ====================================================== -->
<template v-else-if="coUtil.cofAnd(widget.widgetType, widget.widgetType.startsWith('chart_'))">
<div style="background:#fff;border-radius:10px;padding:16px;border:1px solid #e8e8e8;">
  <div style="font-size:14px;font-weight:700;color:#222;margin-bottom:14px;">
    {{ widget.widgetType==='chart_bar'?'\u{1F4CA}':widget.widgetType==='chart_line'?'\u{1F4C8}':'\u{1F967}' }} {{ widget.chartTitle || widget.name }}
  </div>
  <div v-if="cfChartBars.length" style="display:flex;align-items:flex-end;gap:5px;height:90px;">
    <div v-for="(bar, i) in cfChartBars" :key="i" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;">
      <div :style="{ height: bar.pct+'%', background: bar.color, borderRadius:'4px 4px 0 0', width:'100%', minHeight:'4px', transition:'height .3s' }">
      </div>
      <div style="font-size:10px;color:#888;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;">
        {{ bar.label }}
      </div>
    </div>
  </div>
  <div v-else style="height:60px;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:12px;">
    \uCC28\uD2B8 \uB370\uC774\uD130 \uC5C6\uC74C
  </div>
</div>
</template>
<!-- ===== \u25A1. \uCC28\uD2B8 ====================================================== -->
<!-- ===== \u25A0. \uD14D\uC2A4\uD2B8 \uBC30\uB108 ================================================== -->
<template v-else-if="widget.widgetType==='text_banner'">
  <div :style="{ background: widget.bgColor||'#f5f5f5', color: widget.textColor||'#333', borderRadius:'10px', padding:'18px 20px', fontSize: (widget.fontSize||'14')+'px', lineHeight:'1.7' }">
    <span v-if="widget.textContent" v-html="widget.textContent">
    </span>
    <span v-else style="opacity:.6;">
      {{ widget.name }}
    </span>
  </div>
</template>
<!-- ===== \u25A1. \uD14D\uC2A4\uD2B8 \uBC30\uB108 ================================================== -->
<!-- ===== \u25A0. \uC815\uBCF4 \uCE74\uB4DC =================================================== -->
<template v-else-if="widget.widgetType==='info_card'">
  <div style="background:#fff;border-radius:10px;padding:18px 20px;border:1px solid #e8e8e8;box-shadow:0 1px 6px rgba(0,0,0,.06);">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
      <span v-if="widget.infoIcon" style="font-size:20px;">
        {{ widget.infoIcon }}
      </span>
      <span style="font-size:15px;font-weight:700;color:#222;">
        {{ widget.infoTitle || widget.name }}
      </span>
    </div>
    <div style="font-size:13px;color:#555;white-space:pre-line;line-height:1.6;">
      {{ widget.infoBody || '\uB0B4\uC6A9 \uC5C6\uC74C' }}
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uC815\uBCF4 \uCE74\uB4DC =================================================== -->
<!-- ===== \u25A0. \uD31D\uC5C5 ====================================================== -->
<template v-else-if="widget.widgetType==='popup'">
  <div style="background:#fff;border-radius:10px;padding:16px 20px;border:2px dashed #e8587a;text-align:center;">
    <div style="font-size:22px;margin-bottom:6px;">
      \u{1F4AC}
    </div>
    <div style="font-size:13px;font-weight:700;color:#e8587a;margin-bottom:4px;">
      \uD31D\uC5C5
    </div>
    <div style="font-size:12px;color:#555;">
      {{ widget.name }}
    </div>
    <div v-if="widget.popupWidth" style="font-size:11px;color:#aaa;margin-top:4px;">
      {{ widget.popupWidth }}\xD7{{ widget.popupHeight }}
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uD31D\uC5C5 ====================================================== -->
<!-- ===== \u25A0. \uD30C\uC77C ====================================================== -->
<template v-else-if="widget.widgetType==='file'">
  <div style="display:flex;align-items:center;gap:12px;background:#f8f9ff;border-radius:10px;padding:14px 18px;border:1px solid #dce3f8;">
    <span style="font-size:24px;flex-shrink:0;">
      \u{1F4CE}
    </span>
    <div>
      <div style="font-size:13px;font-weight:600;color:#1565c0;">
        {{ widget.fileLabel || widget.name }}
      </div>
      <div v-if="widget.fileSize" style="font-size:11px;color:#aaa;margin-top:2px;">
        {{ widget.fileSize }}
      </div>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uD30C\uC77C ====================================================== -->
<!-- ===== \u25A0. \uD30C\uC77C \uBAA9\uB85D =================================================== -->
<template v-else-if="widget.widgetType==='file_list'">
  <div style="background:#fff;border-radius:10px;padding:14px;border:1px solid #e8e8e8;">
    <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:8px;">
      \u{1F4C1} {{ widget.name }}
    </div>
    <div v-for="n in 3" :key="n" style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #f5f5f5;">
      <span style="font-size:16px;">
        \u{1F4C4}
      </span>
      <span style="font-size:12px;color:#555;">
        \uD30C\uC77C {{ n }}.pdf
      </span>
      <span style="margin-left:auto;font-size:11px;color:#1565c0;text-decoration:underline;cursor:pointer;">
        \uB2E4\uC6B4\uB85C\uB4DC
      </span>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uD30C\uC77C \uBAA9\uB85D =================================================== -->
<!-- ===== \u25A0. \uCFE0\uD3F0 ====================================================== -->
<template v-else-if="widget.widgetType==='coupon'">
  <div style="border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#f06292,#e91e63);color:#fff;display:flex;align-items:center;padding:20px 24px;gap:18px;position:relative;">
    <div style="width:48px;height:48px;background:rgba(255,255,255,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:22px;">
      \u270F\uFE0F
    </div>
    <div style="flex:1;">
      <div v-if="widget.couponCode" style="font-size:11px;opacity:.75;letter-spacing:.5px;margin-bottom:3px;">
        {{ widget.couponCode }}
      </div>
      <div style="font-size:16px;font-weight:700;text-shadow:0 1px 3px rgba(0,0,0,.2);">
        {{ widget.couponDesc || widget.name }}
      </div>
      <div v-if="widget.discountRate" style="font-size:12px;opacity:.8;margin-top:3px;">
        \uD560\uC778\uC728: {{ widget.discountRate }}%
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC810\uC120 \uACBD\uACC4 =============================================== -->
    <div style="position:absolute;top:0;bottom:0;right:70px;width:1px;border-left:2px dashed rgba(255,255,255,.4);">
    </div>
    <div style="font-size:13px;font-weight:700;width:60px;text-align:center;flex-shrink:0;">
      \uBC1B\uAE30
    </div>
  </div>
</template>
<!-- ===== \u25A1. \uCFE0\uD3F0 ====================================================== -->
<!-- ===== \u25A0. HTML \uC5D0\uB514\uD130 ================================================ -->
<template v-else-if="widget.widgetType==='html_editor'">
  <div style="border-radius:10px;overflow:hidden;border:1px solid #e8e8e8;">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;background:#f5f5f5;border-bottom:1px solid #e8e8e8;">
      <span style="font-size:11px;color:#888;">
        \u{1F4C4} {{ widget.name }}
      </span>
    </div>
    <div v-if="widget.htmlContent" style="padding:14px 16px;font-size:13px;line-height:1.7;min-height:40px;" v-html="widget.htmlContent">
    </div>
    <div v-else style="padding:14px 16px;font-size:12px;color:#bbb;text-align:center;">
      HTML \uB0B4\uC6A9 \uC5C6\uC74C
    </div>
  </div>
</template>
<!-- ===== \u25A1. HTML \uC5D0\uB514\uD130 ================================================ -->
<!-- ===== \u25A0. \uD14D\uC2A4\uD2B8 \uC601\uC5ED ================================================== -->
<template v-else-if="widget.widgetType==='textarea'">
  <div style="border-radius:10px;border:1px solid #e8e8e8;overflow:hidden;">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;background:#f5f5f5;border-bottom:1px solid #e8e8e8;">
      <span style="font-size:11px;color:#888;">
        \u{1F4CB} {{ widget.name }}
      </span>
    </div>
    <pre v-if="widget.textareaContent" style="margin:0;padding:14px 16px;font-size:13px;line-height:1.7;white-space:pre-wrap;word-break:break-word;font-family:inherit;background:#fff;">{{ widget.textareaContent }}</pre>
      <div v-else style="padding:14px 16px;font-size:12px;color:#bbb;text-align:center;">
        \uB0B4\uC6A9 \uC5C6\uC74C
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uD14D\uC2A4\uD2B8 \uC601\uC5ED ================================================== -->
  <!-- ===== \u25A0. Markdown ================================================ -->
  <template v-else-if="widget.widgetType==='markdown'">
    <div style="border-radius:10px;border:1px solid #e8e8e8;overflow:hidden;">
      <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;background:#f5f5f5;border-bottom:1px solid #e8e8e8;">
        <span style="font-size:11px;color:#888;">
          \u{1F4D1} {{ widget.name }}
        </span>
      </div>
      <div v-if="widget.markdownContent" style="padding:14px 16px;font-size:13px;line-height:1.7;" v-html="parseMarkdown(widget.markdownContent)">
      </div>
      <div v-else style="padding:14px 16px;font-size:12px;color:#bbb;text-align:center;">
        Markdown \uB0B4\uC6A9 \uC5C6\uC74C
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. Markdown ================================================ -->
  <!-- ===== \u25A0. \uBC14\uCF54\uB4DC / QR\uCF54\uB4DC ============================================== -->
  <template v-else-if="widget.widgetType==='barcode'||widget.widgetType==='qrcode'||widget.widgetType==='barcode_qrcode'">
    <co-barcode-widget :widget="widget" />
  </template>
  <!-- ===== \u25A1. \uBC14\uCF54\uB4DC / QR\uCF54\uB4DC ============================================== -->
  <!-- ===== \u25A0. \uB3D9\uC601\uC0C1 \uD50C\uB808\uC774\uC5B4 ================================================ -->
  <template v-else-if="widget.widgetType==='video_player'">
    <div style="border-radius:10px;overflow:hidden;border:1px solid #e8e8e8;">
      <div v-if="getVideoEmbed(widget)" style="position:relative;padding-top:56.25%;background:#000;">
        <iframe :src="getVideoEmbed(widget)"
          style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"
          allowfullscreen allow="accelerometer;clipboard-write;encrypted-media;gyroscope;picture-in-picture">
        </iframe>
      </div>
      <div v-else style="background:#1a1a2e;padding:40px 20px;text-align:center;color:#fff;">
        <div style="font-size:40px;margin-bottom:8px;">
          \u25B6
        </div>
        <div style="font-size:12px;opacity:.6;">
          \uB3D9\uC601\uC0C1 URL\uC744 \uC785\uB825\uD558\uC138\uC694
        </div>
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uB3D9\uC601\uC0C1 \uD50C\uB808\uC774\uC5B4 ================================================ -->
  <!-- ===== \u25A0. \uCE74\uC6B4\uD2B8\uB2E4\uC6B4 \uD0C0\uC774\uBA38 =============================================== -->
  <template v-else-if="widget.widgetType==='countdown'">
    <co-countdown-widget :widget="widget" />
  </template>
  <!-- ===== \u25A1. \uCE74\uC6B4\uD2B8\uB2E4\uC6B4 \uD0C0\uC774\uBA38 =============================================== -->
  <!-- ===== \u25A0. \uACB0\uC81C\uC704\uC82F ==================================================== -->
  <template v-else-if="widget.widgetType==='payment_widget'">
    <div style="background:#fff;border-radius:10px;border:1px solid #e8e8e8;padding:20px;">
      <div style="font-size:22px;font-weight:900;color:#1a1a2e;margin-bottom:4px;letter-spacing:-.5px;">
        {{ Number(widget.payAmount||0).toLocaleString() }}
        <span style="font-size:14px;font-weight:600;margin-left:2px;">
          {{ widget.payCurrency==='USD' ? 'USD' : '\uC6D0' }}
        </span>
      </div>
      <div style="font-size:11px;color:#aaa;margin-bottom:14px;">
        {{ widget.name }}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;">
        <div v-for="m in (widget.payMethods||'card').split(',')" :key="m"
          style="padding:5px 10px;border:1px solid #e8e8e8;border-radius:16px;font-size:11px;background:#fafafa;color:#555;">
          {{ {'card':'\u{1F4B3} \uCE74\uB4DC','kakao':'\u{1F49B} \uCE74\uCE74\uC624\uD398\uC774','naver':'\u{1F7E2} \uB124\uC774\uBC84\uD398\uC774','toss':'\u{1F535} \uD1A0\uC2A4','bank':'\u{1F3E6} \uACC4\uC88C\uC774\uCCB4'}[m.trim()] || m.trim() }}
        </div>
      </div>
      <button :style="'width:100%;padding:11px;background:'+(widget.payButtonColor||'#1677ff')+';color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;'">
        {{ widget.payButtonLabel || '\uACB0\uC81C\uD558\uAE30' }}
      </button>
    </div>
  </template>
  <!-- ===== \u25A1. \uACB0\uC81C\uC704\uC82F ==================================================== -->
  <!-- ===== \u25A0. \uC804\uC790\uACB0\uC7AC ==================================================== -->
  <template v-else-if="widget.widgetType==='approval_widget'">
    <div style="background:#fff;border-radius:10px;border:1px solid #e8e8e8;overflow:hidden;">
      <div style="background:#1a237e;color:#fff;padding:10px 16px;font-size:13px;font-weight:700;">
        \u2705 {{ widget.approvalDocType || '\uC804\uC790\uACB0\uC7AC' }}
        <span v-if="widget.approvalTitle">
          \u2013 {{ widget.approvalTitle }}
        </span>
      </div>
      <div style="display:flex;border-bottom:1px solid #e8e8e8;overflow-x:auto;">
        <div v-for="(ap, i) in parseApprovalLine(widget.approvalLine)" :key="i"
          style="flex:1;min-width:72px;text-align:center;padding:10px 6px;border-right:1px solid #f0f0f0;">
          <div style="font-size:10px;color:#aaa;margin-bottom:6px;">
            {{ ap.role }}
          </div>
          <div style="width:36px;height:36px;border-radius:50%;background:#f5f5f5;border:1px solid #e0e0e0;margin:0 auto 5px;display:flex;align-items:center;justify-content:center;font-size:16px;">
            {{ ap.status==='approved'?'\u2705':ap.status==='rejected'?'\u274C':'\u{1F464}' }}
          </div>
          <div style="font-size:11px;color:#333;font-weight:600;">
            {{ ap.name || '(\uBBF8\uC815)' }}
          </div>
        </div>
      </div>
      <div style="padding:10px 14px;font-size:12px;color:#888;">
        \uACB0\uC7AC\uB97C \uC9C4\uD589\uD569\uB2C8\uB2E4.
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uC804\uC790\uACB0\uC7AC ==================================================== -->
  <!-- ===== \u25A0. \uC9C0\uB3C4\uB9F5 ===================================================== -->
  <template v-else-if="widget.widgetType==='map_widget'">
    <div style="border-radius:10px;overflow:hidden;border:1px solid #e8e8e8;">
      <iframe v-if="getMapEmbed(widget)" :src="getMapEmbed(widget)"
        style="width:100%;height:220px;border:none;display:block;"
        allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <div v-else style="height:120px;background:#f5f5f5;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;">
        <span style="font-size:28px;">
          \u{1F5FA}
        </span>
        <span style="font-size:12px;color:#aaa;">
          \uC8FC\uC18C \uB610\uB294 \uC704\uB3C4/\uACBD\uB3C4\uB97C \uC785\uB825\uD558\uC138\uC694
        </span>
      </div>
      <div v-if="widget.mapAddress||widget.mapMarkerLabel"
        style="padding:8px 12px;font-size:12px;color:#555;border-top:1px solid #f0f0f0;background:#fafafa;">
        \u{1F4CD} {{ widget.mapMarkerLabel || widget.mapAddress }}
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uC9C0\uB3C4\uB9F5 ===================================================== -->
  <!-- ===== \u25A0. \uC774\uBCA4\uD2B8 \uBC30\uB108 ================================================== -->
  <template v-else-if="widget.widgetType==='event_banner'">
    <div style="border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#f50057,#c51162);padding:28px 24px;text-align:center;color:#fff;">
      <div style="font-size:28px;margin-bottom:10px;">
        \u{1F389}
      </div>
      <div style="font-size:17px;font-weight:700;text-shadow:0 1px 4px rgba(0,0,0,.3);">
        {{ widget.eventTitle || widget.name }}
      </div>
      <div v-if="widget.eventUrl" style="font-size:12px;opacity:.7;margin-top:6px;">
        \u2192 {{ widget.eventUrl }}
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uC774\uBCA4\uD2B8 \uBC30\uB108 ================================================== -->
  <!-- ===== \u25A0. \uCE90\uC2DC \uBC30\uB108 =================================================== -->
  <template v-else-if="widget.widgetType==='cache_banner'">
    <div style="border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#ff8f00,#f57f17);padding:22px 24px;color:#fff;display:flex;align-items:center;gap:18px;">
      <div style="width:52px;height:52px;background:rgba(255,255,255,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;">
        \u{1F4B0}
      </div>
      <div>
        <div style="font-size:22px;font-weight:900;letter-spacing:.5px;text-shadow:0 1px 4px rgba(0,0,0,.3);">
          +{{ widget.cacheAmount ? widget.cacheAmount.toLocaleString() : '0' }}P
        </div>
        <div v-if="widget.cacheDesc" style="font-size:12px;opacity:.8;margin-top:3px;">
          {{ widget.cacheDesc }}
        </div>
        <div v-if="widget.cacheExpire" style="font-size:11px;opacity:.6;margin-top:2px;">
          \uB9CC\uB8CC: {{ widget.cacheExpire }}
        </div>
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uCE90\uC2DC \uBC30\uB108 =================================================== -->
  <!-- ===== \u25A0. \uC704\uC82F \uC784\uBCA0\uB4DC ================================================== -->
  <template v-else-if="widget.widgetType==='widget_embed'">
    <div style="background:#f8f8f8;border-radius:10px;padding:16px;border:1px dashed #ccc;text-align:center;">
      <div style="font-size:20px;margin-bottom:6px;">
        \u{1F9E9}
      </div>
      <div style="font-size:12px;color:#888;">
        \uC704\uC82F \uC784\uBCA0\uB4DC: {{ widget.name }}
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \uC704\uC82F \uC784\uBCA0\uB4DC ================================================== -->
  <!-- ===== \u25A0. \uAE30\uD0C0 ====================================================== -->
  <template v-else>
    <div :style="'border-radius:10px;overflow:hidden;background:'+nameGrad(widget.name)+';padding:24px 20px;text-align:center;color:#fff;'">
      <div style="font-size:24px;margin-bottom:8px;">
        \u25AA
      </div>
      <div style="font-size:14px;font-weight:600;">
        {{ widget.name }}
      </div>
      <div style="font-size:11px;opacity:.6;margin-top:4px;">
        {{ widget.widgetType }}
      </div>
    </div>
  </template>
</div>
<!-- ===== \u25A1. \uAE30\uD0C0 ====================================================== -->
`};
