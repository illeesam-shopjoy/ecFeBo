window.CmFaqDtl={name:"CmFaqDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(n){const{reactive:f,computed:h,watch:I,onMounted:S,ref:u}=Vue,l=window.boApp.showToast,g=window.boApp.showConfirm,r=f({isPathPickModal:!1}),p=f({loading:!1,error:null}),b=f({use_yn:[]}),s=h(()=>n.dtlId===null||n.dtlId===void 0),_=h(()=>boUtil.bofGetSiteNm()),x=h(()=>n.dtlMode==="view"),P=h(()=>n.dtlId?"FAQ-"+n.dtlId:""),v=u(null),y=u(""),C=async()=>{var t;const e=await coUtil.cofGetAttachRefTableOptions();y.value=((t=e.find(a=>a.key==="FAQ"))==null?void 0:t.value)||""},o=f({faqId:null,pathId:null,faqQuestion:"",faqAnswer:"",sortOrd:"",useYn:""}),D=()=>{Object.assign(o,{sortOrd:1,useYn:"Y"})},i=f({}),Q=yup.object({faqQuestion:yup.string().required("\uC9C8\uBB38\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),k=(e,t={})=>{if(e==="form-save")return L();if(e==="form-cancel")return n.navigate("__cancelEdit__");if(e==="form-edit")return n.navigate("__switchToEdit__");if(e==="form-close")return n.navigate("__closeDtl__");if(e==="form-delete")return U();if(e==="pathModal-open"){r.isPathPickModal=!0;return}else if(e==="pathModal-close"){r.isPathPickModal=!1;return}else console.warn("[handleBtnAction] unknown cmd:",e)},E=(e,t={})=>{if(e==="pathModal-pick"){o.pathId=t,r.isPathPickModal=!1;return}else console.warn("[handleSelectAction] unknown cmd:",e)},N=(e,t,a)=>{if(e==="cmPopup-path-pick"){if(a==null){r.isPathPickModal=!1;return}o.pathId=a,r.isPathPickModal=!1;return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},T=e=>boUtil.bofGetPathLabel(e)||(e==null?"":"#"+e),B=async()=>{try{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["USE_YN"],{compNm:"CmFaqDtl"}),b.use_yn=e.sgGetGrpCodes("USE_YN")}catch(e){console.error("[fnLoadCodes]",e)}},A=async()=>{var e;if(!s.value){p.loading=!0;try{const a=(e=(await boApiSvc.cmFaq.getById(n.dtlId,"FAQ\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:e.data;a&&Object.assign(o,a),p.error=null}catch(t){console.error("[catch-info]",t),p.error=t.message}finally{p.loading=!1}}};S(async()=>{await B(),await C(),s.value||await A(),n.active&&s.value&&D()}),I(()=>n.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(i).forEach(a=>delete i[a])}catch{}await A()}});const L=async()=>{var t,a,d;Object.keys(i).forEach(c=>delete i[c]);try{await Q.validate(o,{abortEarly:!1})}catch(c){console.error("[catch-info]",c),c.inner.forEach(m=>{i[m.path]=m.message}),coUtil.cofValidationToast(i,l);return}if(await g(s.value?"\uB4F1\uB85D":"\uC800\uC7A5",s.value?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const c=((t=v.value)==null?void 0:t.pendingChanges)||[];await(s.value?boApiSvc.cmFaq.create({...o,attachFiles:c},"FAQ\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.cmFaq.update(o.faqId,{...o,attachFiles:c},"FAQ\uAD00\uB9AC","\uC800\uC7A5")),l&&l(s.value?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),n.navigate&&n.navigate("cmFaqMng",{reload:!0})}catch(c){console.error("[catch-info]",c);const m=((d=(a=c.response)==null?void 0:a.data)==null?void 0:d.message)||c.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(m,"error",0)}},U=async()=>{var t,a;if(!(s.value||!o.faqId||!await g("\uC0AD\uC81C",`[${o.faqQuestion}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.cmFaq.remove(o.faqId,"FAQ\uAD00\uB9AC","\uC0AD\uC81C"),l("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),n.navigate("cmFaqMng",{reload:!0})}catch(d){console.error("[catch-info]",d);const c=((a=(t=d.response)==null?void 0:t.data)==null?void 0:a.message)||d.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(c,"error",0)}},F=()=>{const e=new URLSearchParams;return e.set("page","cmFaqDtl"),e.set("id",o.faqId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},R=()=>{try{window.coExtSdk.shareKakao({title:`FAQ ${o.faqId} - ShopJoy BO`,description:o.faqQuestion||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:F()})}catch(e){l(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},G=async()=>{try{await navigator.clipboard.writeText(F()),l("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){l(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},q=u(null),w=u(!1),O=async()=>{w.value=!0;try{const e=coUtil.cofBuildExportFilename(`FAQ\uC0C1\uC138_${o.faqId}.pdf`);await window.boUtil.bofExportPdf(q.value,e,l)}finally{w.value=!1}},M={};return M.baseForm=[{key:"_siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",type:"readonly",fmt:()=>_.value},{key:"pathId",label:"\uBD84\uB958(\uD45C\uC2DC\uACBD\uB85C)",type:"pathPick",pathLabel:e=>T(e),onOpen:()=>k("pathModal-open")},{key:"useYn",label:"\uB178\uCD9C\uC5EC\uBD80",type:"select",options:()=>b.use_yn},{key:"faqQuestion",label:"\uC9C8\uBB38",type:"text",required:!0,colSpan:3,placeholder:"\uC9C8\uBB38\uC744 \uC785\uB825\uD558\uC138\uC694"},{key:"faqAnswer",label:"\uB2F5\uBCC0",type:"slot",name:"answer",colSpan:3},{key:"answerAttachFiles",label:"\uB2F5\uBCC0 \uCCA8\uBD80\uD30C\uC77C",type:"slot",name:"attachGrp",colSpan:3},{key:"sortOrd",label:"\uC815\uB82C\uC21C\uC11C",type:"number",min:1}],{modals:r,columns:M,form:o,errors:i,handleBtnAction:k,handleSelectAction:E,fnCallbackModal:N,cfIsNew:s,cfDtlMode:x,cfAttachRefId:P,attachGrpRef:v,refTableNm:y,showToast:l,handleShareKakao:R,handleCopyLink:G,pdfAreaRef:q,pdfExporting:w,handleExportPdf:O}},template:`
<div ref="pdfAreaRef">
<bo-container :title="!active ? 'FAQ \uC0C1\uC138' : (cfIsNew ? 'FAQ \uB4F1\uB85D' : (cfDtlMode ? 'FAQ \uC0C1\uC138' : 'FAQ \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.faqId)">
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
    <!-- \uB2F5\uBCC0 (HtmlEditor \uB610\uB294 view \uBAA8\uB4DC HTML) -->
    <template #answer>
      <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:160px;line-height:1.6;overflow:auto;">
        <div v-if="form.faqAnswer" v-html="form.faqAnswer"></div>
        <span v-else>-</span>
      </div>
      <base-html-editor v-else v-model="form.faqAnswer" height="260px" />
    </template>
    <template #attachGrp>
      <base-attach-grp ref="attachGrpRef" :ref-table-nm="refTableNm" :ref-key-id="dtlId"
        :ref-id="cfAttachRefId" :show-toast="showToast" :readonly="cfDtlMode"
        grp-code="FAQ_ANSWER_ATTACH" grp-nm="FAQ \uB2F5\uBCC0 \uCCA8\uBD80\uD30C\uC77C"
        :max-count="5" :max-size-mb="10" allow-ext="jpg,png,gif,pdf,xlsx,docx" />
    </template>
  </bo-form-area>
  <!-- ===== \u25A0.\u25A0. \uD3FC \uC561\uC158 (\uD589 \uC120\uD0DD/\uC2E0\uADDC \uC2DC\uC5D0\uB9CC \uB178\uCD9C) ============================ -->
  <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
    :edit-click="() => handleBtnAction('form-edit')"
    :save-click="() => handleBtnAction('form-save')"
    :delete-click="() => handleBtnAction('form-delete')"
    :cancel-click="() => handleBtnAction('form-cancel')"
    :close-click="() => handleBtnAction('form-close')" />
  <!-- ===== \u25A0. \uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD \uBAA8\uB2EC ============================================== -->
  <bo-cm-popup-modal v-if="modals.isPathPickModal" popup-cmd="cmPopup-path-pick" popup-code="path" result-type="id" :init-param="{ bizCd: 'cm_faq' }" title="FAQ \uBD84\uB958(\uD45C\uC2DC\uACBD\uB85C) \uC120\uD0DD" :on-callback="fnCallbackModal" />
</bo-container>
</div>
`};
