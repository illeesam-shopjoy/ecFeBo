window._pmCacheDtlState=window._pmCacheDtlState||{tab:"info",tabMode:"tab"},window.PmCacheDtl={name:"PmCacheDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(n){const C=(e,t={})=>{if(e==="form-save")return U();if(e==="form-cancel")return n.navigate("pmCacheMng");if(e==="form-close")return n.navigate("pmCacheMng");if(e==="form-edit")return n.navigate("__switchToEdit__");if(e==="tab-select"){o.tab=t;return}else if(e==="tab-mode"){o.tabMode2=t;return}else{if(e==="form-memberChange")return H();if(e==="form-memberRef")return D("member",Number(a.memberId));console.warn("[handleBtnAction] unknown cmd:",e)}},k=(e,t={})=>{console.warn("[handleSelectAction] unknown cmd:",e)},G=window.nextId||{value:(e,t)=>((e||[]).reduce((l,c)=>Math.max(l,Number(c==null?void 0:c[t])||0),0)||0)+1},{ref:g,reactive:d,computed:m,onMounted:I,watch:b}=Vue,r=window.boApp.showToast,M=window.boApp.showConfirm,D=window.boApp.showRefModal,o=d({loading:!1,error:null,tab:window._pmCacheDtlState.tab||"info",tabMode2:window._pmCacheDtlState.tabMode||"tab"}),S=Vue.toRef(o,"tab"),_=Vue.toRef(o,"tabMode2"),h=d({cache_trans_types:[]}),w=async()=>{var e;if(!s.value){o.loading=!0;try{const t=await boApiSvc.pmCache.getById(n.dtlId,"\uCE90\uC2DC\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),l=((e=t.data)==null?void 0:e.data)||t.data;l&&Object.assign(a,{...l}),o.error=null}catch(t){console.error("[catch-info]",t),o.error=t.message}finally{o.loading=!1}}},s=m(()=>!n.dtlId);b(()=>o.tab,e=>{window._pmCacheDtlState.tab=e}),b(()=>o.tabMode2,e=>{window._pmCacheDtlState.tabMode=e});const x=e=>o.tabMode2!=="tab"||o.tab===e,B=d([{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"}]),T=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["CACHE_TRANS_TYPE"],{compNm:"PmCacheDtl"}),h.cache_trans_types=e.sgGetGrpCodes("CACHE_TRANS_TYPE")},a=d({cacheId:null,memberId:"",memberNm:"",cacheDate:"",cacheTypeCd:"",cacheAmt:"",balanceAmt:"",cacheDesc:"",refId:"",procUserId:""}),E=()=>{Object.assign(a,{cacheTypeCd:"\uCDA9\uC804",cacheAmt:0,balanceAmt:0})},i=d({}),N=yup.object({memberId:yup.string().required("\uD68C\uC6D0ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),cacheDesc:yup.string().required("\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")});I(async()=>{await T(),n.active&&s.value&&E(),await w()}),b(()=>n.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(i).forEach(l=>delete i[l])}catch{}await w()}});const P=m(()=>a.memberCacheHistory||[]),R=m(()=>a.balanceAmt||0),U=async()=>{var t,l;Object.keys(i).forEach(c=>delete i[c]);try{await N.validate(a,{abortEarly:!1})}catch(c){console.error("[catch-info]",c),c.inner.forEach(f=>{i[f.path]=f.message}),coUtil.cofValidationToast(i,r);return}if(await M(s.value?"\uB4F1\uB85D":"\uC800\uC7A5",s.value?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const c=await(s.value?boApiSvc.pmCache.create({...a},"\uCE90\uC2DC\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.pmCache.update(a.cacheId,{...a},"\uCE90\uC2DC\uAD00\uB9AC","\uC800\uC7A5"));r&&r(s.value?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),n.navigate&&n.navigate("pmCacheMng",{reload:!0})}catch(c){console.error("[catch-info]",c);const f=((l=(t=c.response)==null?void 0:t.data)==null?void 0:l.message)||c.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";r&&r(f,"error",0)}},H=()=>{const e=getMember.value(Number(a.memberId));e&&(a.memberNm=e.memberNm)},j={\uCDA9\uC804:"badge-green",\uC0AC\uC6A9:"badge-orange",\uD658\uBD88:"badge-blue",\uC18C\uBA78:"badge-red"},y=e=>coUtil.cofCodeBadge("CACHE_TRANS_TYPE",e,j[e]||"badge-gray"),F=m(()=>n.dtlMode==="view"),v=()=>{const e=new URLSearchParams;return e.set("page","pmCacheDtl"),e.set("id",a.cacheId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},L=()=>{try{window.coExtSdk.shareKakao({title:`\uCE90\uC26C ${a.cacheId} - ShopJoy BO`,description:a.cacheDesc||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:v()})}catch(e){r(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},q=async()=>{try{await navigator.clipboard.writeText(v()),r("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){r(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},A=g(null),p=g(!1),V=async()=>{p.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uCE90\uC26C\uC0C1\uC138_${a.cacheId}.pdf`);await window.boUtil.bofExportPdf(A.value,e,r)}finally{p.value=!1}},u={};return u.cacheHistGrid=[{key:"cacheDate",label:"\uC77C\uC2DC",fmt:e=>e?String(e).slice(0,16):"-"},{key:"cacheTypeCd",label:"\uC720\uD615",badge:e=>y(e.cacheTypeCd)},{key:"cacheAmt",label:"\uAE08\uC561",cellStyle:(e,t)=>t.cacheAmt>0?"color:#389e0d;font-weight:600":"color:#cf1322;font-weight:600",fmt:(e,t)=>(t.cacheAmt>0?"+":"")+coUtil.cofWon(t.cacheAmt)},{key:"balanceAmt",label:"\uC794\uC561",fmt:e=>coUtil.cofWon(e)},{key:"cacheDesc",label:"\uB0B4\uC6A9"}],u.baseForm=[{key:"memberId",label:"\uD68C\uC6D0ID",type:"slot",name:"memberId",required:!0},{key:"memberNm",label:"\uD68C\uC6D0\uBA85",type:"readonly"},{key:"cacheTypeCd",label:"\uC720\uD615",type:"select",options:()=>h.cache_trans_types},{key:"cacheDate",label:"\uC77C\uC2DC",type:"text",placeholder:"2026-04-08 10:00"},{key:"cacheAmt",label:"\uAE08\uC561",type:"number",required:!0,hint:"\uC0AC\uC6A9/\uC18C\uBA78\uC740 \uC74C\uC218"},{key:"balanceAmt",label:"\uCC98\uB9AC \uD6C4 \uC794\uC561",type:"number"},{key:"cacheDesc",label:"\uB0B4\uC6A9",type:"text",required:!0,placeholder:"\uB0B4\uC6A9 \uC785\uB825",colSpan:2}],{coUtil,columns:u,uiState:o,codes:h,form:a,errors:i,handleBtnAction:C,handleSelectAction:k,cfIsNew:s,cfDtlMode:F,cfMemberCacheHistory:P,cfTotalBalance:R,tabs:B,tab:S,tabMode2:_,showTab:x,fnTypeBadge:y,coUtil,handleShareKakao:L,handleCopyLink:q,pdfAreaRef:A,pdfExporting:p,handleExportPdf:V}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container>
  <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uD5E4\uB354 (\uC81C\uBAA9 = list-title, page-title \uC544\uB2D8 \u2192 \uD3F0\uD2B8 \uCD95\uC18C) ========= -->
  <template #title>
    {{ cfIsNew ? '\uCE90\uC26C \uB4F1\uB85D' : (cfDtlMode ? '\uCE90\uC26C \uC0C1\uC138' : '\uCE90\uC26C \uC218\uC815') }}
    <span v-if="!cfIsNew" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">
      #{{ form.cacheId }}
    </span>
  </template>
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
  <!-- ===== \u25A0.\u25A0. \uD0ED\uBC14 ==================================================== -->
  <bo-tab-bar :tabs="tabs" :tab="tab" :tab-mode="tabMode2"
    @tab-select="id => handleBtnAction('tab-select', id)"
    @mode-select="m => handleBtnAction('tab-mode', m)" />
  <!-- ===== \u25A1. \uD0ED\uBC14 ====================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
<div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
  <!-- ===== \u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
  <div class="dtl-pane" v-show="showTab('info')" style="margin:0;">
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u{1F4CB} \uAE30\uBCF8\uC815\uBCF4
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
    <bo-form-area plain-readonly :columns="columns.baseForm" :form="form" :errors="errors"
      :readonly="cfDtlMode" :cols="3" compact :show-actions="false" :show-cancel="!cfIsNew">
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD68C\uC6D0ID + \uBCF4\uAE30 ========================================= -->
      <template #memberId>
        <div style="display:flex;gap:8px;align-items:center;">
          <input class="form-control" v-model="form.memberId" placeholder="\uD68C\uC6D0 ID" @change="handleBtnAction('form-memberChange')" :readonly="cfDtlMode" :class="errors.memberId ? 'is-invalid' : ''"
            @input="form.memberId && errors.memberId ? delete errors.memberId : null" />
          <span v-if="form.memberId" class="ref-link" @click="handleBtnAction('form-memberRef')">
            \uBCF4\uAE30
          </span>
        </div>
        <span v-if="errors.memberId" class="field-error">{{ errors.memberId }}</span>
      </template>
    </bo-form-area>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC561\uC158 \uBC84\uD2BC (\uBCF4\uAE30\uBAA8\uB4DC: \uC218\uC815/\uB2EB\uAE30) =============================== -->
    <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
      :edit-click="() => handleBtnAction('form-edit')"
      :save-click="() => handleBtnAction('form-save')"
      :delete-click="() => handleBtnAction('form-delete')"
      :cancel-click="() => handleBtnAction('form-cancel')"
      :close-click="() => handleBtnAction('form-close')" />
  </div>
  <!-- ===== \u25A1.\u25A1. \uAE30\uBCF8\uC815\uBCF4 \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
  <!-- ===== \u25A0.\u25A0. \uD68C\uC6D0 \uCE90\uC26C \uB0B4\uC5ED \uD0ED ============================================ -->
  <div class="dtl-pane" v-show="showTab('history')" style="margin:0;">
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ============================================== -->
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u{1F552} \uD68C\uC6D0 \uCE90\uC26C \uB0B4\uC5ED
      <span class="tab-count">
        {{ cfMemberCacheHistory.length }}
      </span>
    </div>
    <div style="margin-bottom:12px;padding:12px;background:#f9f9f9;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:13px;color:#555;">
        <span class="ref-link" @click="handleBtnAction('form-memberRef')">
          {{ form.memberNm }}
        </span>
        \uD604\uC7AC \uC794\uC561
      </span>
      <span style="font-size:20px;font-weight:700;color:#e8587a;">
        {{ cfTotalBalance.toLocaleString() }}\uC6D0
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
    <bo-grid bare :columns="columns.cacheHistGrid" :rows="cfMemberCacheHistory" row-key="cacheId"
      empty-text="\uCE90\uC26C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.">
    </bo-grid>
  </div>
</div>
<!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
</bo-container>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20) =============================== -->
</div>
`};
