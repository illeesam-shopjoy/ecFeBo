window.SyBbsDtl={name:"SyBbsDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(n){const{reactive:f,computed:i,onMounted:I,ref:d,watch:_}=Vue,c=window.boApp.showToast,C=window.boApp.showConfirm,l=f({loading:!1,showBbmDetail:!1,error:null,selectedBbm:null,showBbmModal:!1}),w=f({bbs_post_statuses:[]}),o=f({bbsId:null,bbmId:null,bbsTitle:"",authorNm:"",bbsStatusCd:"",contentHtml:"",viewCount:"",commentCount:""}),M=()=>{Object.assign(o,{bbsStatusCd:"PUBLISH",viewCount:0,commentCount:0})},b=f({}),T=yup.object({bbmId:yup.number().required("\uAC8C\uC2DC\uD310\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.").min(1,"\uAC8C\uC2DC\uD310\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."),bbsTitle:yup.string().required("\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),r=i(()=>n.dtlId===null||n.dtlId===void 0),N=i(()=>boUtil.bofGetSiteNm()),E=i(()=>n.dtlMode==="view"),y=i(()=>{var e;return((e=l.selectedBbm)==null?void 0:e.contentTypeCd)||"textarea"}),v=i(()=>{var e;return((e=l.selectedBbm)==null?void 0:e.allowAttach)||"\uBD88\uAC00"}),P=i(()=>{var t;return(t={\uBD88\uAC00:0,"1\uAC1C":1,"2\uAC1C":2,"3\uAC1C":3,\uBAA9\uB85D:10}[v.value])!=null?t:0}),U=i(()=>l.selectedBbm),H=i(()=>n.dtlId),B=d(null),g=d(""),L=async()=>{var t;const e=await coUtil.cofGetAttachRefTableOptions();g.value=((t=e.find(a=>a.key==="BBS"))==null?void 0:t.value)||""},z=Vue.toRef(l,"showBbmDetail"),m=d(!1),F=(e,t={})=>{if(e==="form-save")return j();if(e==="form-cancel")return n.navigate("__cancelEdit__");if(e==="form-close")return n.navigate("__closeDtl__");if(e==="form-edit")return n.navigate("__switchToEdit__");if(e==="bbmModal-open"){m.value=!0;return}else if(e==="bbmModal-close"){m.value=!1;return}else if(e==="bbmDetail-open"){l.showBbmDetail=!0;return}else if(e==="bbmDetail-close"){l.showBbmDetail=!1;return}else console.warn("[handleBtnAction] unknown cmd:",e)},G=(e,t={})=>{if(e==="bbmModal-select")return k(t);console.warn("[handleSelectAction] unknown cmd:",e)},R=(e,t,a)=>{if(e==="cmPopup-bbm-select"){if(a==null){m.value=!1;return}return k(a)}else if(e==="bbm-detail"){if(a==null){l.showBbmDetail=!1;return}return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},k=e=>{m.value=!1,!(l.selectedBbm&&l.selectedBbm.bbmId===e.selId)&&(l.selectedBbm=e,o.bbmId=e.selId,o.bbsTitle="",o.authorNm="",o.bbsStatusCd="PUBLISH",o.contentHtml="")},x=async()=>{var e;if(!r.value){l.loading=!0;try{const a=(e=(await boApiSvc.syBbs.getById(n.dtlId,"\uAC8C\uC2DC\uD310\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:e.data;a&&(Object.assign(o,a),l.selectedBbm=null),l.error=null}catch(t){console.error("[catch-info]",t),l.error=t.message}finally{l.loading=!1}}},j=async()=>{var t,a,D;Object.keys(b).forEach(s=>delete b[s]);try{await T.validate(o,{abortEarly:!1})}catch(s){console.error("[catch-info]",s),s.inner.forEach(u=>{b[u.path]=u.message}),coUtil.cofValidationToast(b,c);return}if(await C(r.value?"\uB4F1\uB85D":"\uC800\uC7A5",r.value?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const s=((t=B.value)==null?void 0:t.pendingChanges)||[];await(r.value?boApiSvc.syBbs.create({...o,attachFiles:s},"\uAC8C\uC2DC\uD310\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.syBbs.update(o.bbsId,{...o,attachFiles:s},"\uAC8C\uC2DC\uD310\uAD00\uB9AC","\uC800\uC7A5")),c&&c(r.value?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),n.navigate&&n.navigate("syBbsMng",{reload:!0})}catch(s){console.error("[catch-info]",s);const u=((D=(a=s.response)==null?void 0:a.data)==null?void 0:D.message)||s.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";c&&c(u,"error",0)}},O=async()=>{try{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["BBS_POST_STATUS"],{compNm:"SyBbsDtl"}),w.bbs_post_statuses=e.sgGetGrpCodes("BBS_POST_STATUS")}catch(e){console.error("[fnLoadCodes]",e)}};I(async()=>{await O(),await L(),r.value||await x(),n.active&&r.value&&M()}),_(()=>n.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(b).forEach(a=>delete b[a])}catch{}await x()}});const p={};p.baseForm=[{key:"_siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",type:"readonly",fmt:()=>N.value},{key:"bbsTitle",label:"\uC81C\uBAA9",type:"text",required:!0,colSpan:2,placeholder:"\uAC8C\uC2DC\uAE00 \uC81C\uBAA9"},{key:"_bbmPick",label:"\uAC8C\uC2DC\uD310",type:"slot",name:"bbmPick",colSpan:3},{key:"authorNm",label:"\uC791\uC131\uC790",type:"text",placeholder:"\uC791\uC131\uC790\uBA85"},{key:"bbsStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>w.bbs_post_statuses}],p.contentForm=[{key:"_noBbm",label:"\uB0B4\uC6A9",type:"slot",name:"contentNoBbm",colSpan:3,visible:()=>!l.selectedBbm},{key:"_notAllow",label:"\uB0B4\uC6A9",type:"slot",name:"contentNotAllow",colSpan:3,visible:()=>l.selectedBbm&&y.value==="\uBD88\uAC00"},{key:"contentHtml",label:"\uB0B4\uC6A9",type:"textarea",placeholder:"\uAC8C\uC2DC\uAE00 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694.",colSpan:3,rows:8,visible:()=>l.selectedBbm&&y.value==="textarea"},{key:"_htmlEditor",label:"\uB0B4\uC6A9",type:"slot",name:"contentHtmlEditor",colSpan:3,visible:()=>l.selectedBbm&&y.value==="htmleditor"},{key:"_attach",label:"\uCCA8\uBD80\uD30C\uC77C",type:"slot",name:"attachGrp",colSpan:3,visible:()=>!!l.selectedBbm}],p.bbmDetail=[{key:"bbmId",label:"\uAC8C\uC2DC\uD310ID",type:"readonly"},{key:"bbmCode",label:"\uAC8C\uC2DC\uD310\uCF54\uB4DC",type:"readonly",mono:!0},{key:"bbmNm",label:"\uAC8C\uC2DC\uD310\uBA85",type:"readonly"},{key:"bbmTypeCd",label:"\uC720\uD615",type:"readonly"},{key:"allowComment",label:"\uB313\uAE00\uD5C8\uC6A9",type:"readonly"},{key:"allowAttach",label:"\uCCA8\uBD80\uD5C8\uC6A9",type:"readonly"},{key:"contentTypeCd",label:"\uB0B4\uC6A9\uC785\uB825",type:"readonly"},{key:"scopeTypeCd",label:"\uACF5\uAC1C\uBC94\uC704",type:"readonly"},{key:"allowLike",label:"\uC88B\uC544\uC694\uD5C8\uC6A9",type:"readonly",fmt:e=>e==="Y"?"\uD5C8\uC6A9":"\uBD88\uAC00"},{key:"useYn",label:"\uC0AC\uC6A9\uC5EC\uBD80",type:"readonly",fmt:e=>e==="Y"?"\uC0AC\uC6A9":"\uBBF8\uC0AC\uC6A9"}];const S=()=>{const e=new URLSearchParams;return e.set("page","syBbsDtl"),e.set("id",o.bbsId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},q=()=>{try{window.coExtSdk.shareKakao({title:`\uAC8C\uC2DC\uAE00 ${o.bbsId} - ShopJoy BO`,description:o.bbsTitle||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:S()})}catch(e){c(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},V=async()=>{try{await navigator.clipboard.writeText(S()),c("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){c(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},A=d(null),h=d(!1);return{columns:p,handleShareKakao:q,handleCopyLink:V,pdfAreaRef:A,pdfExporting:h,handleExportPdf:async()=>{h.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uAC8C\uC2DC\uAE00\uC0C1\uC138_${o.bbsId}.pdf`);await window.boUtil.bofExportPdf(A.value,e,c)}finally{h.value=!1}},form:o,errors:b,showBbmModal:m,dtlId:H,attachGrpRef:B,refTableNm:g,handleBtnAction:F,handleSelectAction:G,fnCallbackModal:R,cfIsNew:r,cfDtlMode:E,cfAllowAttach:v,cfAttachMaxCount:P,selectedBbm:U,showBbmDetail:z,showToast:c,coUtil}},template:`
<div ref="pdfAreaRef">
<bo-container :title="!active ? '\uAC8C\uC2DC\uAE00 \uC0C1\uC138' : (cfIsNew ? '\uAC8C\uC2DC\uAE00 \uB4F1\uB85D' : (cfDtlMode ? '\uAC8C\uC2DC\uAE00 \uC0C1\uC138' : '\uAC8C\uC2DC\uAE00 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.bbsId)">
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
  <!-- ===== \u25A0.\u25A0. \uAE30\uBCF8 \uC815\uBCF4 + \uAC8C\uC2DC\uD310 \uC120\uD0DD ===================================== -->
  <bo-form-area plain-readonly :columns="columns.baseForm" :form="form" :errors="errors"
    :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
    <template #bbmPick>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <template v-if="cfIsNew ? (!cfDtlMode) : false">
          <button class="btn btn-secondary btn-sm" type="button" @click="handleBtnAction('bbmModal-open')">\u{1F4CB} \uAC8C\uC2DC\uD310 \uC120\uD0DD</button>
          <button v-if="selectedBbm" class="btn btn-blue btn-sm" type="button" @click="handleBtnAction('bbmDetail-open')" title="\uAC8C\uC2DC\uD310 \uC0C1\uC138\uBCF4\uAE30">\u{1F50D}</button>
        </template>
        <template v-else>
          <button class="btn btn-secondary btn-sm" type="button" disabled style="opacity:.5;cursor:not-allowed;">\u{1F4CB} \uAC8C\uC2DC\uD310 \uC120\uD0DD</button>
          <button v-if="selectedBbm" class="btn btn-blue btn-sm" type="button" @click="handleBtnAction('bbmDetail-open')" title="\uAC8C\uC2DC\uD310 \uC0C1\uC138\uBCF4\uAE30">\u{1F50D}</button>
        </template>
        <span v-if="selectedBbm" style="display:flex;align-items:center;gap:6px;font-size:13px;">
          <b style="color:#1a1a2e;">{{ selectedBbm.bbmNm }}</b>
          <code style="font-size:11px;color:#888;background:#f5f5f5;padding:1px 6px;border-radius:4px;">{{ selectedBbm.bbmCode }}</code>
          <span style="font-size:11px;color:#bbb;">ID: {{ selectedBbm.bbmId }}</span>
        </span>
        <span v-else style="font-size:12px;color:#bbb;">\uAC8C\uC2DC\uD310\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.</span>
      </div>
      <span v-if="errors.bbmId" class="field-error">{{ errors.bbmId }}</span>
    </template>
  </bo-form-area>
  <!-- ===== \u25A0.\u25A0. \uB0B4\uC6A9 \uC785\uB825 (contentType \uC5D0 \uB530\uB77C \uB80C\uB354\uB9C1) ========================== -->
  <bo-form-area plain-readonly :columns="columns.contentForm" :form="form" :errors="errors"
    :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
    <template #contentNoBbm>
      <div style="color:#bbb;font-size:13px;padding:12px 0;">\uAC8C\uC2DC\uD310\uC744 \uBA3C\uC800 \uC120\uD0DD\uD558\uC138\uC694.</div>
    </template>
    <template #contentNotAllow>
      <div style="color:#bbb;font-size:13px;padding:12px 0;">\uC774 \uAC8C\uC2DC\uD310\uC740 \uB0B4\uC6A9 \uC785\uB825\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</div>
    </template>
    <template #contentHtmlEditor>
      <div v-if="cfDtlMode" class="readonly-field-plain"
        style="min-height:300px;line-height:1.6;"
        v-html="form.contentHtml || '-'"></div>
      <base-html-editor v-else v-model="form.contentHtml" height="320px" />
    </template>
    <template #attachGrp>
      <div v-if="cfAttachMaxCount > 0">
        <span style="font-size:11px;color:#bbb;margin-bottom:6px;display:block;">({{ cfAllowAttach }})</span>
        <base-attach-grp
          ref="attachGrpRef" :ref-table-nm="refTableNm" :ref-key-id="dtlId"
          :ref-id="dtlId ? 'BBS-'+dtlId : ''" :show-toast="showToast" :readonly="cfDtlMode"
          grp-code="BBS_ATTACH" grp-nm="\uAC8C\uC2DC\uAE00 \uCCA8\uBD80\uD30C\uC77C"
          :max-count="cfAttachMaxCount" :max-size-mb="10" allow-ext="*" />
      </div>
      <div v-else style="color:#bbb;font-size:13px;padding:4px 0;">\uC774 \uAC8C\uC2DC\uD310\uC740 \uCCA8\uBD80\uD30C\uC77C\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</div>
    </template>
  </bo-form-area>
  <!-- ===== \u25A0.\u25A0. \uD3FC \uC561\uC158 (\uBCF4\uAE30\uBAA8\uB4DC: \uC218\uC815/\uB2EB\uAE30 \xB7 \uC218\uC815\uBAA8\uB4DC: \uC800\uC7A5/\uCDE8\uC18C) ================== -->
  <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false" :show-cancel="!cfIsNew"
    :edit-click="() => handleBtnAction('form-edit')"
    :save-click="() => handleBtnAction('form-save')"
    :delete-click="() => handleBtnAction('form-delete')"
    :cancel-click="() => handleBtnAction('form-cancel')"
    :close-click="() => handleBtnAction('form-close')" />
  <!-- ===== \u25A1. \uCE74\uB4DC \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uAC8C\uC2DC\uD310 \uC120\uD0DD \uD31D\uC5C5 =============================================== -->
  <bo-cm-popup-modal v-if="showBbmModal" popup-cmd="cmPopup-bbm-select" popup-code="bbm" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uAC8C\uC2DC\uD310 \uC120\uD0DD \uD31D\uC5C5 =============================================== -->
  <!-- ===== \u25A0. \uAC8C\uC2DC\uD310 \uC0C1\uC138\uBCF4\uAE30 \uD31D\uC5C5 ============================================= -->
  <bo-modal :show="coUtil.cofAnd(showBbmDetail, selectedBbm)" title="\uAC8C\uC2DC\uD310 \uC0C1\uC138"
    width="420px" modal-name="bbm-detail" :on-callback="fnCallbackModal" @close="showBbmDetail = false">
    <bo-form-area plain-readonly v-if="selectedBbm" :columns="columns.bbmDetail" :form="selectedBbm" :errors="{}"
      :cols="1" compact readonly :show-actions="false" />
    <template #footer>
      <button class="btn btn_close" @click="handleBtnAction('bbmDetail-close')">\uB2EB\uAE30</button>
    </template>
  </bo-modal>
  <!-- ===== \u25A1. \uAC8C\uC2DC\uD310 \uC0C1\uC138\uBCF4\uAE30 \uD31D\uC5C5 ============================================= -->
</bo-container>
</div>
`};
