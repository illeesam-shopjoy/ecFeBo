window._syContactDtlState=window._syContactDtlState||{tab:"content",tabMode:"tab"},window.SyContactDtl={name:"SyContactDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(r){const{reactive:w,computed:i,onMounted:F,ref:f,onBeforeUnmount:ae,nextTick:oe,watch:h}=Vue,n=window.boApp.showToast,T=window.boApp.showConfirm,U=window.boApp.showRefModal,s=w({loading:!1,error:null,tab:window._syContactDtlState.tab||"content",tabMode2:window._syContactDtlState.tabMode||"tab"}),j=Vue.toRef(s,"tab"),H=Vue.toRef(s,"tabMode2"),y=w({contact_categories:[],contact_statuses:[]}),m=i(()=>!r.dtlId),I=i(()=>boUtil.bofGetSiteNm()),z=i(()=>r.dtlMode==="view"),g=f(null),A=f(null),k=f(""),_=f(""),L=async()=>{var t,o;const e=await coUtil.cofGetAttachRefTableOptions();k.value=((t=e.find(c=>c.key==="CONTACT_CONTENT"))==null?void 0:t.value)||"",_.value=((o=e.find(c=>c.key==="CONTACT_ANSWER"))==null?void 0:o.value)||""};h(()=>s.tab,e=>{window._syContactDtlState.tab=e}),h(()=>s.tabMode2,e=>{window._syContactDtlState.tabMode=e});const G=(e,t={})=>{if(e==="form-save")return Q();if(e==="form-saveAnswer")return R();if(e==="form-cancel")return r.navigate("__cancelEdit__");if(e==="form-edit")return r.navigate("__switchToEdit__");if(e==="form-close")return r.navigate("__closeDtl__");if(e==="form-delete")return X();if(e==="member-ref")return U("member",Number(a.memberId));console.warn("[handleBtnAction] unknown cmd:",e)},P=(e,t={})=>{if(e==="tabs-select"){s.tab=t;return}else if(e==="tabMode-select"){s.tabMode2=t;return}else{if(e==="form-memberIdChange")return J();console.warn("[handleSelectAction] unknown cmd:",e)}},K=e=>s.tabMode2!=="tab"||s.tab===e,a=w({contactId:null,memberId:"",memberNm:"",contactDate:"",categoryCd:"\uBC30\uC1A1 \uBB38\uC758",contactTitle:"",contactContent:"",contactStatusCd:"\uC694\uCCAD",contactAnswer:""}),V=i(()=>a.contactId),q=i(()=>a.contactId),l=w({}),$=yup.object({contactTitle:yup.string().required("\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),contactContent:yup.string().required("\uBB38\uC758 \uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")});h(()=>a.contactContent,e=>{l.contactContent&&e&&delete l.contactContent}),h(()=>a.contactAnswer,e=>{l.contactAnswer&&e&&delete l.contactAnswer});const b=i(()=>r.dtlId||a.contactId||null),v=i(()=>!!b.value),W=i(()=>s.tab!=="content"&&!v.value),Y=w([{id:"content",label:"\uBB38\uC758 \uB0B4\uC6A9",icon:"\u{1F4CB}"},{id:"answer",label:"\uB2F5\uBCC0",icon:"\u{1F4AC}"}]),Z=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["CONTACT_CATEGORY_KR","CONTACT_STATUS_KR"],{compNm:"SyContactDtl"}),y.contact_categories=e.sgGetGrpCodes("CONTACT_CATEGORY_KR"),y.contact_statuses=e.sgGetGrpCodes("CONTACT_STATUS_KR")},N=async()=>{var e;if(!m.value){s.loading=!0;try{const o=(e=(await boApiSvc.syContact.getById(r.dtlId,"\uBB38\uC758\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:e.data;o&&Object.assign(a,o),s.error=null}catch(t){console.error("[catch-info]",t),s.error=t.message}finally{s.loading=!1}}};F(async()=>{await Z(),await L(),m.value||await N()}),h(()=>r.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(l).forEach(o=>delete l[o])}catch{}await N()}});const J=async()=>{var e;if(!a.memberId){a.memberNm="";return}try{const o=((e=(await boApiSvc.mbMember.getById(Number(a.memberId),"\uBB38\uC758\uAD00\uB9AC","\uD68C\uC6D0\uC870\uD68C")).data)==null?void 0:e.data)||null;a.memberNm=o&&o.memberNm||""}catch(t){console.error("[onUserIdChange]",t),a.memberNm=""}},M=(e,t)=>{n&&n(t,"success")},D=e=>{var o,c;console.error("[handleSave]",e);const t=((c=(o=e.response)==null?void 0:o.data)==null?void 0:c.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";n&&n(t,"error",0)},Q=async()=>{var t,o,c,S;const e=s.tab;if(!v.value&&e!=="content"){n("\uBA3C\uC800 \uBB38\uC758 \uB0B4\uC6A9 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e==="content"){Object.keys(l).forEach(d=>delete l[d]);try{await $.validate(a,{abortEarly:!1})}catch(d){d.inner.forEach(p=>{l[p.path]=p.message}),coUtil.cofValidationToast(l,n);return}const u=!v.value;if(!await T(u?"\uB4F1\uB85D":"\uC800\uC7A5",u?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;try{const d={...a,attachFiles:((t=g.value)==null?void 0:t.pendingChanges)||[]},p=u?await boApiSvc.syContact.create(d,"\uBB38\uC758\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.syContact.update(b.value,d,"\uBB38\uC758\uAD00\uB9AC","\uBB38\uC758\uB0B4\uC6A9\uC800\uC7A5");if(u){const O=((c=(o=p.data)==null?void 0:o.data)==null?void 0:c.contactId)||((S=p.data)==null?void 0:S.contactId)||null;O&&(a.contactId=O)}g.value&&await g.value.reload(),M(p,u?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2F5\uBCC0 \uD0ED\uC5D0\uC11C \uB2F5\uBCC0\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(d){D(d)}return}if(e==="answer"){await R();return}},R=async()=>{var t;if(!v.value){n("\uBA3C\uC800 \uBB38\uC758 \uB0B4\uC6A9 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(delete l.contactAnswer,!a.contactAnswer||!a.contactAnswer.trim()){l.contactAnswer="\uB2F5\uBCC0 \uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",coUtil.cofValidationToast(l,n);return}if(await T("\uB2F5\uBCC0 \uC800\uC7A5","\uB2F5\uBCC0\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const o=((t=A.value)==null?void 0:t.pendingChanges)||[],c=await boApiSvc.syContact.update(b.value,{contactAnswer:a.contactAnswer,contactStatusCd:a.contactStatusCd,attach2Files:o},"\uBB38\uC758\uAD00\uB9AC","\uB2F5\uBCC0\uC800\uC7A5");A.value&&await A.value.reload(),M(c,"\uB2F5\uBCC0\uC774 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(o){D(o)}},X=async()=>{var t,o;if(!(m.value||!b.value||!await T("\uC0AD\uC81C",`[${a.contactTitle}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.syContact.remove(b.value,"\uBB38\uC758\uAD00\uB9AC","\uC0AD\uC81C"),n("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),r.navigate("syContactMng",{reload:!0})}catch(c){console.error("[catch-info]",c);const S=((o=(t=c.response)==null?void 0:t.data)==null?void 0:o.message)||c.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";n&&n(S,"error",0)}},C={};C.siteForm=[{key:"_siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",type:"readonly",fmt:()=>I.value,colSpan:4}],C.contentForm=[{key:"memberId",label:"\uD68C\uC6D0ID",type:"slot",name:"memberId"},{key:"memberNm",label:"\uD68C\uC6D0\uBA85",type:"readonly"},{key:"categoryCd",label:"\uCE74\uD14C\uACE0\uB9AC",type:"select",options:()=>y.contact_categories},{key:"contactStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>y.contact_statuses},{key:"contactTitle",label:"\uC81C\uBAA9",type:"text",required:!0,colSpan:2},{key:"contactContent",label:"\uBB38\uC758 \uB0B4\uC6A9",type:"slot",name:"contactContent",colSpan:3},{key:"contentAttachFiles",label:"\uCCA8\uBD80\uD30C\uC77C",type:"slot",name:"contentAttach",colSpan:3,visible:()=>!m.value}],C.answerForm=[{key:"contactAnswer",label:"\uB2F5\uBCC0 \uB0B4\uC6A9",type:"slot",name:"answerContent",colSpan:3,required:!0},{key:"answerAttachFiles",label:"\uCCA8\uBD80\uD30C\uC77C",type:"slot",name:"answerAttach",colSpan:3,visible:()=>!m.value}];const B=()=>{const e=new URLSearchParams;return e.set("page","syContactDtl"),e.set("id",a.contactId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},ee=()=>{try{window.coExtSdk.shareKakao({title:`\uACE0\uAC1D\uBB38\uC758 ${a.contactId} - ShopJoy BO`,description:a.contactTitle||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:B()})}catch(e){n(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},te=async()=>{try{await navigator.clipboard.writeText(B()),n("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){n(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},E=f(null),x=f(!1);return{columns:C,handleShareKakao:ee,handleCopyLink:te,pdfAreaRef:E,pdfExporting:x,handleExportPdf:async()=>{x.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uBB38\uC758\uC0C1\uC138_${a.contactId}.pdf`);await window.boUtil.bofExportPdf(E.value,e,n)}finally{x.value=!1}},form:a,errors:l,tab:j,tabMode2:H,handleBtnAction:G,handleSelectAction:P,cfIsNew:m,cfHasId:v,cfSaveDisabled:W,cfSiteNm:I,cfDtlMode:z,tabs:Y,cfCurId:b,cfContentAttachRefId:V,cfAnswerAttachRefId:q,contentAttachRef:g,answerAttachRef:A,contentRefTableNm:k,answerRefTableNm:_,showTab:K}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uBB38\uC758 \uC0C1\uC138' : (cfIsNew ? '\uBB38\uC758 \uB4F1\uB85D' : (cfDtlMode ? '\uBB38\uC758 \uC0C1\uC138' : '\uBB38\uC758 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.contactId)">
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
  <!-- ===== \u25A0.\u25A0. \uC0AC\uC774\uD2B8\uBA85 (BoFormArea \uC790\uB3D9 \uB80C\uB354) =============================== -->
  <!-- ===== \u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================== -->
  <bo-form-area :columns="columns.siteForm" :form="form" :errors="{}"
    :cols="3" :show-actions="false" />
  <bo-tab-bar :tabs="tabs" :tab="tab" :tab-mode="tabMode2"
    @tab-select="id => handleSelectAction('tabs-select', id)"
    @mode-select="m => handleSelectAction('tabMode-select', m)" />
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBB38\uC758 \uB0B4\uC6A9 \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ========================== -->
    <div class="dtl-pane" v-show="showTab('content')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uBB38\uC758 \uB0B4\uC6A9</div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
      <bo-form-area plain-readonly :columns="columns.contentForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD68C\uC6D0ID + \uBCF4\uAE30 \uBC84\uD2BC ==================================== -->
        <template #memberId>
          <div v-if="cfDtlMode" class="readonly-field-plain" style="display:flex;gap:8px;align-items:center;">
            <span>{{ form.memberId || '-' }}</span>
            <span v-if="form.memberNm" style="white-space:nowrap;font-size:13px;color:#1a1a2e;font-weight:600;">{{ form.memberNm }}</span>
            <span v-if="form.memberId" class="ref-link" @click="handleBtnAction('member-ref')" style="white-space:nowrap;">\uBCF4\uAE30</span>
          </div>
          <div v-else style="display:flex;gap:8px;align-items:center;">
            <input class="form-control" v-model="form.memberId" placeholder="\uD68C\uC6D0 ID" @change="handleSelectAction('form-memberIdChange')" style="flex:1;min-width:0;" />
            <span v-if="form.memberNm" style="white-space:nowrap;font-size:13px;color:#1a1a2e;font-weight:600;">{{ form.memberNm }}</span>
            <span v-if="form.memberId" class="ref-link" @click="handleBtnAction('member-ref')" style="white-space:nowrap;">\uBCF4\uAE30</span>
          </div>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBB38\uC758 \uB0B4\uC6A9: Quill \uB610\uB294 view \uBAA8\uB4DC HTML ==================== -->
        <template #contactContent>
          <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:150px;line-height:1.6;" v-html="form.contactContent || '-'"></div>
          <base-html-editor v-else v-model="form.contactContent" height="220px" />
          <span v-if="errors.contactContent" class="field-error">{{ errors.contactContent }}</span>
        </template>
        <template #contentAttach>
          <base-attach-grp ref="contentAttachRef" :ref-table-nm="contentRefTableNm" :ref-key-id="cfCurId"
            :ref-id="cfContentAttachRefId" :show-toast="showToast" :readonly="cfDtlMode"
            grp-code="CONTACT_CONTENT_ATTACH" grp-nm="\uBB38\uC758 \uB0B4\uC6A9 \uCCA8\uBD80\uD30C\uC77C"
            :max-count="5" :max-size-mb="10" allow-ext="jpg,jpeg,png,gif,pdf,xlsx,docx,zip" />
        </template>
      </bo-form-area>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="cfHasId" :show-cancel="cfHasId"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uBB38\uC758 \uB0B4\uC6A9 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('form-edit')"
        :save-click="() => handleBtnAction('form-save')"
        :delete-click="() => handleBtnAction('form-delete')"
        :cancel-click="() => handleBtnAction('form-cancel')"
        :close-click="() => handleBtnAction('form-close')" />
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uB2F5\uBCC0 ================================================== -->
    <div class="dtl-pane" v-show="showTab('answer')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4AC} \uB2F5\uBCC0</div>
      <div v-if="!cfIsNew" style="margin-bottom:16px;padding:14px;background:#f9f9f9;border-radius:8px;border:1px solid #e8e8e8;">
        <div style="font-size:12px;color:#888;margin-bottom:6px;">{{ form.categoryCd }} \xB7 {{ form.contactDate }}</div>
        <div style="font-size:14px;font-weight:600;margin-bottom:8px;">{{ form.contactTitle }}</div>
        <div style="font-size:13px;color:#555;white-space:pre-line;">{{ form.contactContent }}</div>
      </div>
      <bo-form-area plain-readonly :columns="columns.answerForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
        <template #answerContent>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span v-if="!form.contactAnswer" class="badge badge-orange">\uBBF8\uB2F5\uBCC0</span>
          </div>
          <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:180px;line-height:1.6;" v-html="form.contactAnswer || '-'"></div>
          <base-html-editor v-else v-model="form.contactAnswer" height="240px" />
          <span v-if="errors.contactAnswer" class="field-error">{{ errors.contactAnswer }}</span>
        </template>
        <template #answerAttach>
          <base-attach-grp ref="answerAttachRef" :ref-table-nm="answerRefTableNm" :ref-key-id="cfCurId"
            :ref-id="cfAnswerAttachRefId" :show-toast="showToast" :readonly="cfDtlMode"
            grp-code="CONTACT_ANSWER_ATTACH" grp-nm="\uBB38\uC758 \uB2F5\uBCC0 \uCCA8\uBD80\uD30C\uC77C"
            :max-count="5" :max-size-mb="10" allow-ext="jpg,jpeg,png,gif,pdf,xlsx,docx,zip" />
        </template>
      </bo-form-area>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="cfHasId" :show-cancel="cfHasId"
        save-label="\uB2F5\uBCC0 \uC800\uC7A5" :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uBB38\uC758 \uB0B4\uC6A9 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        @save="handleBtnAction('form-saveAnswer')" @cancel="handleBtnAction('form-cancel')"
        @edit="handleBtnAction('form-edit')" @close="handleBtnAction('form-close')" @delete="handleBtnAction('form-delete')" />
    </div>
  </div>
</bo-container>
<!-- ===== \u25A1.\u25A1. \uD3FC \uC601\uC5ED ================================================== -->
<!-- ===== \u25A1. \uCE74\uB4DC \uC601\uC5ED =================================================== -->
</div>
`};
