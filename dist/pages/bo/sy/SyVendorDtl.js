window.SyVendorDtl={name:"SyVendorDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(l){const{reactive:c,computed:u,watch:A,onMounted:S,ref:m,onBeforeUnmount:P,nextTick:R}=Vue,r=window.boApp.showToast,b=window.boApp.showConfirm,p=c({isAddrSearchModal:!1}),f=c({loading:!1,error:null}),v=c({active_statuses:[],vendor_type_kr:[]}),t=c({vendorId:null,vendorTypeCd:"\uD310\uB9E4\uC5C5\uCCB4",vendorNm:"",ceoNm:"",vendorNo:"",vendorPhone:"",vendorEmail:"",vendorZipCode:"",vendorAddr:"",vendorAddrDetail:"",contractDate:"",vendorStatusCd:"\uD65C\uC131",vendorRemark:""}),i=c({}),h=m(null),_=yup.object({vendorNm:yup.string().required("\uC5C5\uCCB4\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),vendorNo:yup.string().required("\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),vendorPhone:yup.string().matches(coUtil.REGEX_PHONE,"\uC62C\uBC14\uB978 \uC804\uD654\uBC88\uD638 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 02-1234-5678)"),vendorEmail:yup.string().matches(coUtil.REGEX_EMAIL,"\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.")}),d=u(()=>l.dtlId===null||l.dtlId===void 0),E=u(()=>boUtil.bofGetSiteNm()),D=u(()=>l.dtlMode==="view"),M=(e,a={})=>{if(e==="form-save")return I();if(e==="form-cancel")return l.navigate("__cancelEdit__");if(e==="form-edit")return l.navigate("__switchToEdit__");if(e==="form-close")return l.navigate("__closeDtl__");if(e==="form-delete")return N();if(e==="addr-search"){p.isAddrSearchModal=!0;return}else if(e==="addr-clear"){t.vendorZipCode="",t.vendorAddr="";return}else console.warn("[handleBtnAction] unknown cmd:",e)},C=(e,a,o)=>{if(e==="addr-search"){if(p.isAddrSearchModal=!1,o==null)return;t.vendorZipCode=o.zonecode,t.vendorAddr=o.address,h.value&&h.value.focus();return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},g=async()=>{var e;if(!d.value){f.loading=!0;try{const o=(e=(await boApiSvc.syVendor.getById(l.dtlId,"\uD310\uB9E4\uC790\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:e.data;o&&Object.assign(t,o),f.error=null}catch(a){console.error("[catch-info]",a),f.error=a.message}finally{f.loading=!1}}},I=async()=>{var a,o;Object.keys(i).forEach(n=>delete i[n]);try{await _.validate(t,{abortEarly:!1})}catch(n){console.error("[catch-info]",n),n.inner.forEach(s=>{i[s.path]=s.message}),coUtil.cofValidationToast(i,r);return}if(await b(d.value?"\uB4F1\uB85D":"\uC800\uC7A5",d.value?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const n=await(d.value?boApiSvc.syVendor.create({...t},"\uD310\uB9E4\uC790\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.syVendor.update(t.vendorId,{...t},"\uD310\uB9E4\uC790\uAD00\uB9AC","\uC800\uC7A5"));r&&r(d.value?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),l.navigate&&l.navigate("syVendorMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const s=((o=(a=n.response)==null?void 0:a.data)==null?void 0:o.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";r&&r(s,"error",0)}},N=async()=>{var a,o;if(!(d.value||!t.vendorId||!await b("\uC0AD\uC81C",`[${t.vendorNm}] \uC5C5\uCCB4\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.syVendor.remove(t.vendorId,"\uD310\uB9E4\uC790\uAD00\uB9AC","\uC0AD\uC81C"),r("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),l.navigate("syVendorMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const s=((o=(a=n.response)==null?void 0:a.data)==null?void 0:o.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";r&&r(s,"error",0)}},V=async()=>{try{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["ACTIVE_STATUS","VENDOR_TYPE_KR"],{compNm:"SyVendorDtl"}),v.active_statuses=e.sgGetGrpCodes("ACTIVE_STATUS"),v.vendor_type_kr=e.sgGetGrpCodes("VENDOR_TYPE_KR")}catch(e){console.error("[fnLoadCodes]",e)}};S(async()=>{await V(),d.value||await g()}),A(()=>l.reloadTrigger,async(e,a)=>{if(!(e===a||e===0)){try{Object.keys(i).forEach(o=>delete i[o])}catch{}await g()}});const w={};w.baseForm=[{type:"group",label:"\uC5C5\uCCB4\uC815\uBCF4"},{key:"_siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",type:"readonly",fmt:()=>E.value,colSpan:2},{key:"vendorTypeCd",label:"\uC5C5\uCCB4\uC720\uD615",type:"select",nullable:!1,required:!0,options:()=>v.vendor_type_kr},{key:"vendorNm",label:"\uC5C5\uCCB4\uBA85",type:"text",required:!0,placeholder:"\uC5C5\uCCB4\uBA85"},{key:"vendorNo",label:"\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638",type:"text",required:!0,placeholder:"000-00-00000"},{key:"ceoNm",label:"\uB300\uD45C\uC790\uBA85",type:"text"},{key:"vendorPhone",label:"\uC804\uD654\uBC88\uD638",type:"text",validate:e=>coUtil.cofIsValidPhone(e)?null:"\uC62C\uBC14\uB978 \uC804\uD654\uBC88\uD638 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 02-1234-5678)"},{key:"vendorEmail",label:"\uC774\uBA54\uC77C",type:"text",validate:e=>coUtil.cofIsValidEmail(e)?null:"\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4."},{key:"contractDate",label:"\uACC4\uC57D\uC77C",type:"date"},{key:"_addr",label:"\uC8FC\uC18C",type:"slot",name:"addr",colSpan:2},{key:"vendorStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>v.active_statuses},{key:"vendorRemark",label:"\uBA54\uBAA8",type:"slot",name:"remark",colSpan:3}];const k=()=>{const e=new URLSearchParams;return e.set("page","syVendorDtl"),e.set("id",t.vendorId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},T=()=>{try{window.coExtSdk.shareKakao({title:`\uC5C5\uCCB4 ${t.vendorId} - ShopJoy BO`,description:t.vendorNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:k()})}catch(e){r(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},B=async()=>{try{await navigator.clipboard.writeText(k()),r("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){r(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},x=m(null),y=m(!1);return{modals:p,columns:w,handleShareKakao:T,handleCopyLink:B,pdfAreaRef:x,pdfExporting:y,handleExportPdf:async()=>{y.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC5C5\uCCB4\uC0C1\uC138_${t.vendorId}.pdf`);await window.boUtil.bofExportPdf(x.value,e,r)}finally{y.value=!1}},form:t,errors:i,addrDetailRef:h,handleBtnAction:M,fnCallbackModal:C,cfIsNew:d,cfDtlMode:D}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uC601\uC5ED (\uC81C\uBAA9/\uB77C\uBCA8/\uD3FC \uBAA8\uB450 \uCEE8\uD14C\uC774\uB108 \uC548\uC5D0) ============================= -->
<bo-container :title="!active ? '\uC5C5\uCCB4 \uC0C1\uC138' : (cfIsNew ? '\uC5C5\uCCB4 \uB4F1\uB85D' : (cfDtlMode ? '\uC5C5\uCCB4 \uC0C1\uC138' : '\uC5C5\uCCB4 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.vendorId)">
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
  <!-- ===== \u25A0.\u25A0. \uD5E4\uB354 (\uC81C\uBAA9 = list-title, \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 \uC544\uB2D8 \u2192 \uD3F0\uD2B8 \uCD95\uC18C) ========= -->
  <!-- ===== \u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================== -->
  <bo-form-area plain-readonly :columns="columns.baseForm" :form="form" :errors="errors"
    :readonly="cfDtlMode" :cols="3" compact :show-actions="active" :show-cancel="!cfIsNew" :show-delete="!cfIsNew"
    @save="handleBtnAction('form-save')"
    @cancel="handleBtnAction('form-cancel')"
    @edit="handleBtnAction('form-edit')"
    @close="handleBtnAction('form-close')"
    @delete="handleBtnAction('form-delete')">
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC8FC\uC18C: \uC6B0\uD3B8\uBC88\uD638+\uAC80\uC0C9\uBC84\uD2BC+\uAE30\uBCF8\uC8FC\uC18C+\uC0C1\uC138\uC8FC\uC18C ============================= -->
    <template #addr>
      <div v-if="cfDtlMode" class="readonly-field-plain">
        {{ [form.vendorZipCode, form.vendorAddr, form.vendorAddrDetail].filter(Boolean).join(' ') || '-' }}
      </div>
      <template v-else>
        <div style="display:flex;gap:8px;align-items:flex-end;margin-bottom:6px;">
          <input class="form-control" v-model="form.vendorZipCode" placeholder="\uC6B0\uD3B8\uBC88\uD638"
            style="width:110px;flex-shrink:0;" readonly />
          <button type="button" class="btn btn-blue btn-sm" @click="handleBtnAction('addr-search')"
            style="white-space:nowrap;">
            \u{1F50D} \uC8FC\uC18C \uAC80\uC0C9
          </button>
          <button v-if="form.vendorZipCode || form.vendorAddr" type="button" title="\uC8FC\uC18C \uCD08\uAE30\uD654"
            @click="handleBtnAction('addr-clear')"
            style="background:none;border:none;padding:0 2px 2px;margin-left:-4px;color:#999;cursor:pointer;font-size:13px;line-height:1;flex-shrink:0;">
            x
          </button>
        </div>
        <input class="form-control" v-model="form.vendorAddr" placeholder="\uAE30\uBCF8\uC8FC\uC18C (\uC8FC\uC18C \uAC80\uC0C9 \uD6C4 \uC790\uB3D9 \uC785\uB825)"
          style="margin-bottom:6px;" readonly />
        <input class="form-control" v-model="form.vendorAddrDetail" ref="addrDetailRef"
          placeholder="\uC0C1\uC138\uC8FC\uC18C (\uB3D9/\uD638\uC218 \uB4F1)" />
      </template>
    </template>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBA54\uBAA8: Quill \uB610\uB294 view \uBAA8\uB4DC HTML =========================== -->
    <template #remark>
      <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:90px;line-height:1.6;" v-html="form.vendorRemark || '-'"></div>
      <base-html-editor v-else v-model="form.vendorRemark" height="180px" />
    </template>
  </bo-form-area>
  <!-- ===== \u25A1.\u25A1. \uD3FC \uC601\uC5ED ================================================== -->
</bo-container>
</div>
<!-- ===== \u25A0. \uC8FC\uC18C \uAC80\uC0C9 \uBAA8\uB2EC (\uCE74\uCE74\uC624 \uC6B0\uD3B8\uBC88\uD638, \uC778\uB77C\uC778 \uB808\uC774\uC5B4) ============================ -->
<bo-addr-search-modal v-if="modals.isAddrSearchModal" modal-name="addr-search" :on-callback="fnCallbackModal" />
<!-- ===== \u25A1. \uCEE8\uD14C\uC774\uB108 \uC601\uC5ED =================================================== -->
`};
