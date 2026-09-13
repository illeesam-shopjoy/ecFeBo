window.SyTemplateDtl={name:"SyTemplateDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(r){const{reactive:f,computed:p,onMounted:C,ref:y,onBeforeUnmount:U,watch:w,nextTick:L}=Vue,o=window.boApp.showToast,m=window.boApp.showConfirm,s=f({previewOpen:!1,sendOpen:!1,error:null,loading:!1}),u=f({use_yn:[],template_types:["\uBA54\uC77C\uD15C\uD50C\uB9BF","\uBB38\uC790\uD15C\uD50C\uB9BF","MMS\uD15C\uD50C\uB9BF","kakao\uD1A1\uD15C\uD50C\uB9BF","kakao\uC54C\uB9BC\uD1A1\uD15C\uD50C\uB9BF","\uC2DC\uC2A4\uD15C\uC54C\uB9BC","\uD68C\uC6D0\uC54C\uB9BC"]}),t=f({templateId:null,templateTypeCd:"",templateCode:"",templateNm:"",templateSubject:"",templateContent:"",useYn:"",sampleParams:""}),S=()=>{Object.assign(t,{templateTypeCd:"\uBA54\uC77C\uD15C\uD50C\uB9BF",useYn:"Y",sampleParams:"{}"})},i=f({}),M=yup.object({templateCode:yup.string().required("\uD15C\uD50C\uB9BF\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),templateNm:yup.string().required("\uD15C\uD50C\uB9BF\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),templateContent:yup.string().required("\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")});w(()=>t.templateContent,e=>{i.templateContent&&e&&delete i.templateContent});const c=p(()=>r.dtlId===null||r.dtlId===void 0),x=p(()=>boUtil.bofGetSiteNm()),_=p(()=>r.dtlMode==="view"),T=p(()=>{if(["\uBA54\uC77C\uD15C\uD50C\uB9BF","\uC2DC\uC2A4\uD15C\uC54C\uB9BC"].includes(t.templateTypeCd))return!0;const e=t.templateContent||"";return/<\s*\w+[^>]*>/.test(e)}),I=p(()=>["MMS\uD15C\uD50C\uB9BF"].includes(t.templateTypeCd)),N=(e,a={})=>{if(e==="form-save")return A();if(e==="form-cancel")return r.navigate("__cancelEdit__");if(e==="form-edit")return r.navigate("__switchToEdit__");if(e==="form-close")return r.navigate("__closeDtl__");if(e==="form-delete")return O();if(e==="previewModal-open"){s.previewOpen=!0;return}else if(e==="previewModal-close"){s.previewOpen=!1;return}else if(e==="sendModal-open"){s.sendOpen=!0;return}else if(e==="sendModal-close"){s.sendOpen=!1;return}else console.warn("[handleBtnAction] unknown cmd:",e)},D=(e,a,l)=>{if(e==="template-preview"){if(l==null){s.previewOpen=!1;return}return}else if(e==="template-send"){if(l==null){s.sendOpen=!1;return}return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},v=async()=>{var e;if(!c.value){s.loading=!0;try{const l=(e=(await boApiSvc.syTemplate.getById(r.dtlId,"\uD15C\uD50C\uB9BF\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:e.data;l&&Object.assign(t,{sampleParams:"{}",...l}),s.error=null}catch(a){console.error("[catch-info]",a),s.error=a.message}finally{s.loading=!1}}},A=async()=>{var a,l;Object.keys(i).forEach(n=>delete i[n]);try{await M.validate(t,{abortEarly:!1})}catch(n){console.error("[catch-info]",n),n.inner.forEach(d=>{i[d.path]=d.message}),coUtil.cofValidationToast(i,o);return}if(t.sampleParams)try{JSON.parse(t.sampleParams)}catch{o("\uD30C\uB77C\uBBF8\uD130 \uC0D8\uD50C JSON \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","error");return}if(await m(c.value?"\uB4F1\uB85D":"\uC800\uC7A5",c.value?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const n=await(c.value?boApiSvc.syTemplate.create({...t},"\uD15C\uD50C\uB9BF\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.syTemplate.update(t.templateId,{...t},"\uD15C\uD50C\uB9BF\uAD00\uB9AC","\uC800\uC7A5"));o&&o(c.value?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),r.navigate&&r.navigate("syTemplateMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const d=((l=(a=n.response)==null?void 0:a.data)==null?void 0:l.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";o&&o(d,"error",0)}},O=async()=>{var a,l;if(!(c.value||!t.templateId||!await m("\uC0AD\uC81C",`[${t.templateNm}] \uD15C\uD50C\uB9BF\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.syTemplate.remove(t.templateId,"\uD15C\uD50C\uB9BF\uAD00\uB9AC","\uC0AD\uC81C"),o("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),r.navigate("syTemplateMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const d=((l=(a=n.response)==null?void 0:a.data)==null?void 0:l.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";o&&o(d,"error",0)}},E=async()=>{try{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["USE_YN"],{compNm:"SyTemplateDtl"}),u.use_yn=e.sgGetGrpCodes("USE_YN")}catch(e){console.error("[fnLoadCodes]",e)}};C(async()=>{await E(),c.value||await v(),r.active&&c.value&&S()}),w(()=>r.reloadTrigger,async(e,a)=>{if(!(e===a||e===0)){try{Object.keys(i).forEach(l=>delete i[l])}catch{}await v()}});const b={};b.baseForm=[{key:"_siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",type:"readonly",fmt:()=>x.value,colSpan:3},{key:"templateTypeCd",label:"\uD15C\uD50C\uB9BF\uC720\uD615",type:"select",nullable:!1,required:!0,options:()=>u.template_types},{key:"templateCode",label:"\uD15C\uD50C\uB9BF\uCF54\uB4DC",type:"text",required:!0,placeholder:"\uC608) ORDER_CONFIRM_MAIL",mono:!0,onChange:(e,a)=>{a.templateCode=(a.templateCode||"").toUpperCase().replace(/[^A-Z0-9_]/g,"")}},{key:"templateNm",label:"\uD15C\uD50C\uB9BF\uBA85",type:"text",required:!0,placeholder:"\uD15C\uD50C\uB9BF\uBA85 \uC785\uB825"},{key:"templateSubject",label:"\uC81C\uBAA9 (Subject)",type:"text",colSpan:3,placeholder:"\uBA54\uC77C/MMS/\uC2DC\uC2A4\uD15C \uC81C\uBAA9"},{key:"templateContent",label:"\uB0B4\uC6A9",required:!0,type:"slot",name:"content",colSpan:3,hint:"\uC0AC\uC6A9 \uAC00\uB2A5 \uBCC0\uC218: {{username}}, {{orderId}}, {{prodNm}}, {{trackingNo}} \uB4F1"},{key:"sampleParams",label:"\uD30C\uB77C\uBBF8\uD130 \uC0D8\uD50C (JSON)",type:"textarea",rows:3,mono:!0,colSpan:3,placeholder:'{"username":"\uD64D\uAE38\uB3D9","orderId":"ORD-20260410-001"}',hint:"\uBBF8\uB9AC\uBCF4\uAE30\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uC0D8\uD50C \uBCC0\uC218\uAC12"},{key:"useYn",label:"\uC0AC\uC6A9\uC5EC\uBD80",type:"select",options:()=>u.use_yn}];const g=()=>{const e=new URLSearchParams;return e.set("page","syTemplateDtl"),e.set("id",t.templateId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},B=()=>{try{window.coExtSdk.shareKakao({title:`\uD15C\uD50C\uB9BF ${t.templateId} - ShopJoy BO`,description:t.templateNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:g()})}catch(e){o(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},P=async()=>{try{await navigator.clipboard.writeText(g()),o("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){o(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},k=y(null),h=y(!1);return{columns:b,handleShareKakao:B,handleCopyLink:P,pdfAreaRef:k,pdfExporting:h,handleExportPdf:async()=>{h.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uD15C\uD50C\uB9BF\uC0C1\uC138_${t.templateId}.pdf`);await window.boUtil.bofExportPdf(k.value,e,o)}finally{h.value=!1}},uiState:s,form:t,errors:i,handleBtnAction:N,fnCallbackModal:D,cfIsNew:c,cfDtlMode:_,cfUseHtmlEditor:T,cfIsLongContent:I,showToast:o,showConfirm:m}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uCE74\uB4DC \uC601\uC5ED (\uC81C\uBAA9/\uB77C\uBCA8/\uD3FC \uBAA8\uB450 \uCEE8\uD14C\uC774\uB108 \uC548\uC5D0) =============================== -->
<bo-container :title="!active ? '\uD15C\uD50C\uB9BF \uC0C1\uC138' : (cfIsNew ? '\uD15C\uD50C\uB9BF \uB4F1\uB85D' : (cfDtlMode ? '\uD15C\uD50C\uB9BF \uC0C1\uC138' : '\uD15C\uD50C\uB9BF \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.templateId)">
  <template #toolbar-actions>
    <button v-if="active ? (cfDtlMode ? !cfIsNew : false) : false" class="btn btn_link" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)" @click="handleCopyLink">\u{1F517}</button>
    <button v-if="active ? (cfDtlMode ? !cfIsNew : false) : false" class="btn btn_kakao" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720" @click="handleShareKakao">\u{1F4AC}</button>
    <button class="btn btn_pdf" title="PDF \uB2E4\uC6B4\uB85C\uB4DC" :disabled="pdfExporting" @click="handleExportPdf">
      <span v-if="pdfExporting">\u23F3</span>
      <svg v-else width="18" height="20" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2 H20 L28 10 V34 H4 Z" fill="#fff" stroke="#c2410c" stroke-width="1.5"/>
        <path d="M20 2 V10 H28 Z" fill="#f3d4c0"/>
        <rect x="2" y="20" width="28" height="12" rx="2" fill="#e2372c"/>
        <text x="16" y="29" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">PDF</text>
      </svg>
    </button>
  </template>
  <!-- ===== \u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================== -->
  <bo-form-area plain-readonly :columns="columns.baseForm" :form="form" :errors="errors"
    :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
    <!-- ===== \u25A0.\u25A0.\u25A0. \uB0B4\uC6A9 (Quill \uC5D0\uB514\uD130 \uB610\uB294 textarea, view \uBAA8\uB4DC\uB294 HTML) =========== -->
    <template #content>
      <template v-if="cfUseHtmlEditor">
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:260px;line-height:1.6;overflow:auto;" v-html="form.templateContent || '-'"></div>
        <base-html-editor v-else v-model="form.templateContent" height="320px" />
      </template>
      <template v-else>
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:90px;line-height:1.6;white-space:pre-wrap;">{{ form.templateContent || '-' }}</div>
        <textarea v-else class="form-control" v-model="form.templateContent"
          :rows="cfIsLongContent ? 10 : 5"
          placeholder="\uD15C\uD50C\uB9BF \uB0B4\uC6A9 \uC785\uB825"
          :class="errors.templateContent ? 'is-invalid' : ''"></textarea>
      </template>
      <span v-if="errors.templateContent" class="field-error">{{ errors.templateContent }}</span>
    </template>
  </bo-form-area>
  <!-- ===== \u25A1.\u25A1. \uD3FC \uC601\uC5ED ================================================== -->
  <!-- ===== \u25A0.\u25A0. \uD3FC \uC561\uC158 \uBC84\uD2BC (\uBBF8\uB9AC\uBCF4\uAE30/\uBC1C\uC1A1\uD558\uAE30 \uD3EC\uD568 \uCEE4\uC2A4\uD140) ============================ -->
  <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
    :edit-click="() => handleBtnAction('form-edit')"
    :save-click="() => handleBtnAction('form-save')"
    :delete-click="() => handleBtnAction('form-delete')"
    :cancel-click="() => handleBtnAction('form-cancel')"
    :close-click="() => handleBtnAction('form-close')">
    <template #actions-before>
      <template v-if="!cfDtlMode">
        <button class="btn btn-secondary" @click="handleBtnAction('previewModal-open')">\u{1F4C4} \uBBF8\uB9AC\uBCF4\uAE30</button>
        <button class="btn btn-primary" style="background:#52c41a;border-color:#52c41a;" @click="handleBtnAction('sendModal-open')">
          \u{1F4E8} \uBC1C\uC1A1\uD558\uAE30
        </button>
      </template>
    </template>
  </bo-form-actions>
  <!-- ===== \u25A1.\u25A1. \uD3FC \uC561\uC158 \uBC84\uD2BC (\uBBF8\uB9AC\uBCF4\uAE30/\uBC1C\uC1A1\uD558\uAE30 \uD3EC\uD568 \uCEE4\uC2A4\uD140) ============================ -->
  <!-- ===== \u25A1. \uCE74\uB4DC \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uBBF8\uB9AC\uBCF4\uAE30 \uBAA8\uB2EC ================================================= -->
  <template-preview-modal v-if="uiState.previewOpen"
    :tmpl="form" :sample-params="form.sampleParams" modal-name="template-preview" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uBBF8\uB9AC\uBCF4\uAE30 \uBAA8\uB2EC ================================================= -->
  <!-- ===== \u25A0. \uBC1C\uC1A1\uD558\uAE30 \uBAA8\uB2EC ================================================= -->
  <template-send-modal v-if="uiState.sendOpen"
    :tmpl="form" :show-toast="showToast" :show-confirm="showConfirm" modal-name="template-send" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uBC1C\uC1A1\uD558\uAE30 \uBAA8\uB2EC ================================================= -->
</bo-container>
</div>
`};
