window._ecPlanDtlState=window._ecPlanDtlState||{tab:"info",tabMode:"tab"},window.PmPlanDtl={name:"PmPlanDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(s){const{ref:D,reactive:p,computed:v,onMounted:R,watch:k}=Vue,i=window.boApp.showToast,I=window.boApp.showConfirm,h=p([]),u=p([]),l=p({loading:!1,showProdPopup:!1,showVendorModal:!1,error:null,tab:window._ecPlanDtlState.tab||"info",tabMode2:window._ecPlanDtlState.tabMode||"tab",activeContentTab:1,prodSearch:""}),U=Vue.toRef(l,"tab"),F=Vue.toRef(l,"tabMode2"),w=p({PLAN_CATEGORY:[],PLAN_DISP_STATUS:[]}),y=new Date,T=e=>String(e).padStart(2,"0"),$=`${y.getFullYear()}-${T(y.getMonth()+1)}-${T(y.getDate())}`,j=`${y.getFullYear()+1}-12-31`,G=[{value:"PUBLIC",label:"\uC804\uCCB4\uACF5\uAC1C"},{value:"MEMBER",label:"\uD68C\uC6D0\uACF5\uAC1C"},{value:"VERIFIED",label:"\uC778\uC99D\uD68C\uC6D0"},{value:"PREMIUM",label:"\uC6B0\uC218\uD68C\uC6D0\u2191"},{value:"VIP",label:"VIP \uC804\uC6A9"},{value:"INVITED",label:"\uCD08\uB300\uD68C\uC6D0"},{value:"STAFF",label:"\uC9C1\uC6D0"},{value:"EXECUTIVE",label:"\uC784\uC9C1\uC6D0"}],a=p({planNm:"",category:"FASHION",theme:"",status:"ACTIVE",startDate:$,endDate:j,productIds:[],visibilityTargets:"^PUBLIC^",desc:"",bannerImage:"",content1:"",content2:"",content3:"",vendorId:"",chargeStaff:""}),b=p({}),Y=yup.object({planNm:yup.string().required("\uAE30\uD68D\uC804\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),category:yup.string().required("\uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.")}),x=v(()=>!s.dtlId),P=v(()=>s.dtlId||a.planId||null),S=v(()=>!!P.value),H=v(()=>l.tab!=="info"&&!S.value),B=(e,t={})=>{const o=["banner","info","content","products","preview"];if(o.map(n=>n+"-form-save").includes(e))return le();if(o.map(n=>n+"-form-delete").includes(e))return ie();if(o.map(n=>n+"-form-cancel").includes(e))return s.navigate("__cancelEdit__");if(o.map(n=>n+"-form-close").includes(e))return s.navigate("__closeDtl__");if(o.map(n=>n+"-form-edit").includes(e))return s.navigate("__switchToEdit__");if(e==="tab-select")return ee(t);if(e==="tab-mode"){l.tabMode2=t;return}else if(e==="content-tab"){l.activeContentTab=t;return}else{if(e==="form-visibilityToggle")return ae(t);if(e==="prodPickModal-open"){l.showProdPopup=!0;return}else if(e==="prodPickModal-close"){l.showProdPopup=!1;return}else if(e==="vendorModal-open"){l.showVendorModal=!0;return}else if(e==="vendorModal-close"){l.showVendorModal=!1;return}else if(e==="form-vendorClear"){a.vendorId="",a.chargeStaff="";return}else console.warn("[handleBtnAction] unknown cmd:",e)}},q=(e,t={})=>{if(e==="prodPickModal-toggle")return N(t);if(e==="items-rowDelete")return oe(t);if(e==="vendorModal-select")return C(t.vendorId,t.vendorNm);console.warn("[handleSelectAction] unknown cmd:",e)},K=(e,t,o)=>{if(e==="cmPopup-vendor-pick"){if(o==null){l.showVendorModal=!1;return}return C(o.selId,o.selName)}else if(e==="cmPopup-prod-pick"){if(o==null){l.showProdPopup=!1;return}return N(o)}else console.warn("[fnCallbackModal] unknown popCmd:",e)},Z=async()=>{var e,t,o,n;try{const r=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"\uAD00\uB9AC","\uC870\uD68C");u.splice(0,u.length,...((t=(e=r.data)==null?void 0:e.data)==null?void 0:t.pageList)||((n=(o=r.data)==null?void 0:o.data)==null?void 0:n.list)||[])}catch(r){console.warn("[PmPlanDtl.js] vendor load failed",r)}},_=async()=>{var e,t,o,n,r;await Z(),l.loading=!0;try{const c=[boApiSvc.pdProd.getPage({pageNo:1,pageSize:1e4},"\uC694\uAE08\uC81C\uAD00\uB9AC","\uC870\uD68C")];x.value||c.unshift(boApiSvc.pmPlan.getById(s.dtlId,"\uC694\uAE08\uC81C\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"));const m=await Promise.all(c);if(x.value)h.splice(0,h.length,...((r=(n=m[0].data)==null?void 0:n.data)==null?void 0:r.list)||[]);else{const d=((e=m[0].data)==null?void 0:e.data)||m[0].data;d&&(Object.assign(a,{...d,productIds:[...d.productIds||[]]}),a.visibilityTargets||(a.visibilityTargets="^PUBLIC^")),h.splice(0,h.length,...((o=(t=m[1].data)==null?void 0:t.data)==null?void 0:o.list)||[])}l.error=null}catch(c){console.error("[catch-info]",c),l.error=c.message}finally{l.loading=!1}};k(()=>l.tab,e=>{window._ecPlanDtlState.tab=e}),k(()=>l.tabMode2,e=>{window._ecPlanDtlState.tabMode=e});const J=e=>l.tabMode2!=="tab"||l.tab===e,X=p([{id:"banner",label:"\uBC30\uB108\uC774\uBBF8\uC9C0",icon:"\u{1F3A8}"},{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"content",label:"\uB0B4\uC6A9\uC785\uB825",icon:"\u{1F4DD}"},{id:"preview",label:"\uBBF8\uB9AC\uBCF4\uAE30",icon:"\u{1F441}"}]),Q=[{id:1,label:"\uC8FC\uC694\uB0B4\uC6A9",icon:"\u{1F3AF}"},{id:2,label:"\uD2B9\uC9D5",icon:"\u2728"},{id:3,label:"\uD61C\uD0DD",icon:"\u{1F381}"}],W=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["PLAN_CATEGORY","PLAN_DISP_STATUS"],{compNm:"PmPlanDtl"}),w.PLAN_CATEGORY=e.sgGetGrpCodes("PLAN_CATEGORY"),w.PLAN_DISP_STATUS=e.sgGetGrpCodes("PLAN_DISP_STATUS")},ee=e=>{l.tab=e};R(async()=>{await W(),await _()}),k(()=>s.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(b).forEach(o=>delete b[o])}catch{}await _()}});const N=e=>{const t=a.productIds.indexOf(e);t===-1?a.productIds.push(e):a.productIds.splice(t,1)},te=v(()=>a.productIds.map(e=>h.find(t=>t.productId===e)).filter(Boolean)),oe=e=>{const t=a.productIds.indexOf(e);t!==-1&&a.productIds.splice(t,1)},ae=e=>{const t=(a.visibilityTargets||"").split("^").filter(Boolean),o=t.indexOf(e);o===-1?t.push(e):t.splice(o,1),a.visibilityTargets="^"+t.join("^")+"^"},ne=v(()=>{if(!a.vendorId)return"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD";const e=u.find(t=>t.vendorId===a.vendorId);return e?e.vendorNm:"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD"}),C=(e,t)=>{a.vendorId=e;const o=u.find(n=>n.vendorId===e);o&&(a.chargeStaff=o.chargeStaff||o.ceoNm||o.vendorNm||""),l.showVendorModal=!1},E=(e,t)=>{i&&i(t,"success")},L=e=>{var o,n;console.error("[handleSave]",e);const t=((n=(o=e.response)==null?void 0:o.data)==null?void 0:n.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";i&&i(t,"error",0)},le=async()=>{var r,c,m;const e=l.tab;if(!S.value&&e!=="info"){i("\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e==="info"){Object.keys(b).forEach(f=>delete b[f]);try{await Y.validate(a,{abortEarly:!1})}catch(f){f.inner.forEach(g=>{b[g.path]=g.message}),coUtil.cofValidationToast(b,i);return}const d=!S.value;if(!await I(d?"\uB4F1\uB85D":"\uC800\uC7A5",d?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;try{const f={...a},g=d?await boApiSvc.pmPlan.create(f,"\uC694\uAE08\uC81C\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.pmPlan.update(P.value,f,"\uC694\uAE08\uC81C\uAD00\uB9AC","\uAE30\uBCF8\uC815\uBCF4\uC800\uC7A5");if(d){const O=((c=(r=g.data)==null?void 0:r.data)==null?void 0:c.planId)||((m=g.data)==null?void 0:m.planId)||null;O&&(a.planId=O)}E(g,d?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0ED\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(f){L(f)}return}if(!await I("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;const o={banner:"\uBC30\uB108\uC774\uBBF8\uC9C0",content:"\uB0B4\uC6A9\uC785\uB825",products:"\uB300\uC0C1\uC0C1\uD488"};let n=null;switch(e){case"banner":n={bannerImage:a.bannerImage};break;case"content":n={content1:a.content1,content2:a.content2,content3:a.content3};break;case"products":n={productIds:a.productIds,visibilityTargets:a.visibilityTargets};break;default:n={};break}try{const d=await boApiSvc.pmPlan.update(P.value,n,"\uC694\uAE08\uC81C\uAD00\uB9AC",`${o[e]||e}\uC800\uC7A5`);E(d,`${o[e]||""} \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)}catch(d){L(d)}},ie=async()=>{var t,o;if(!(x.value||!a.planId||!await I("\uC0AD\uC81C",`[${a.planNm}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.pmPlan.remove(a.planId,"\uAE30\uD68D\uC804\uAD00\uB9AC","\uC0AD\uC81C"),i("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),s.navigate("pmPlanMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const r=((o=(t=n.response)==null?void 0:t.data)==null?void 0:o.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";i&&i(r,"error",0)}},de=Vue.toRef(l,"activeContentTab"),me=Vue.toRef(l,"prodSearch"),re=Vue.toRef(l,"showProdPopup"),se=Vue.toRef(l,"showVendorModal"),ce=v(()=>s.dtlMode==="view"),V=()=>{const e=new URLSearchParams;return e.set("page","pmPlanDtl"),e.set("id",a.planId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},fe=()=>{try{window.coExtSdk.shareKakao({title:`\uAE30\uD68D\uC804 ${a.planId} - ShopJoy BO`,description:a.desc||a.theme||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:V()})}catch(e){i(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},pe=async()=>{try{await navigator.clipboard.writeText(V()),i("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){i(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},z=D(null),A=D(!1),ve=async()=>{A.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uAE30\uD68D\uC804\uC0C1\uC138_${a.planId}.pdf`);await window.boUtil.bofExportPdf(z.value,e,i)}finally{A.value=!1}},M={};return M.infoForm=[{key:"planNm",label:"\uAE30\uD68D\uC804\uBA85",type:"text",required:!0,placeholder:"\uAE30\uD68D\uC804\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",colSpan:2},{key:"category",label:"\uCE74\uD14C\uACE0\uB9AC",type:"select",required:!0,options:()=>w.PLAN_CATEGORY},{key:"theme",label:"\uD14C\uB9C8",type:"text",placeholder:"\uC608: \uBD04\uB9DE\uC774, \uC138\uC77C"},{key:"status",label:"\uC0C1\uD0DC",type:"select",options:()=>w.PLAN_DISP_STATUS},{key:"_visibility",label:"\uACF5\uAC1C\uB300\uC0C1",type:"slot",name:"visibility"},{key:"startDate",label:"\uC2DC\uC791\uC77C",type:"date"},{key:"endDate",label:"\uC885\uB8CC\uC77C",type:"date"},{key:"desc",label:"\uAC04\uB2E8\uC124\uBA85",type:"textarea",rows:3,placeholder:"\uAE30\uD68D\uC804 \uC124\uBA85"}],M.vendorForm=[{key:"vendorId",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"pick",placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",display:e=>{const t=u.find(o=>o.vendorId===e.vendorId);return t?t.vendorNm:""},onOpen:()=>B("vendorModal-open"),onClear:()=>{a.chargeStaff=""}},{key:"chargeStaff",label:"\uD310\uB9E4\uB2F4\uB2F9\uC790",type:"text",placeholder:"\uB2F4\uB2F9\uC790\uBA85 \uC785\uB825"}],{columns:M,vendors:u,products:h,form:a,errors:b,VISIBILITY_OPTIONS:G,tabs:X,contentTabs:Q,handleShareKakao:fe,handleCopyLink:pe,pdfAreaRef:z,pdfExporting:A,handleExportPdf:ve,handleBtnAction:B,handleSelectAction:q,fnCallbackModal:K,cfIsNew:x,cfSaveDisabled:H,cfDtlMode:ce,cfSelectedProducts:te,cfSelectedVendorNm:ne,tab:U,tabMode2:F,activeContentTab:de,showProdPopup:re,showVendorModal:se,showTab:J}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uAE30\uD68D\uC804 \uC0C1\uC138' : (cfIsNew ? '\uAE30\uD68D\uC804 \uB4F1\uB85D' : (cfDtlMode ? '\uAE30\uD68D\uC804 \uC0C1\uC138' : '\uAE30\uD68D\uC804 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.planId)">
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
    <!-- ===== \u25A0.\u25A0. \uBC30\uB108\uC774\uBBF8\uC9C0 ================================================= -->
    <div class="dtl-pane" v-show="showTab('banner')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F3A8} \uBC30\uB108\uC774\uBBF8\uC9C0</div>
      <div style="margin-bottom:12px;">
        <div style="font-size:12px;color:#888;margin-bottom:6px;">\u{1F4A1} \uD301: \uC774\uBBF8\uC9C0 \uC0BD\uC785 \uD6C4 \uD06C\uAE30 \uC870\uC808 \uBC0F \uBC30\uCE58\uB97C \uC790\uC720\uB86D\uAC8C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</div>
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;" v-html="form.bannerImage || '-'"></div>
        <base-html-editor v-else v-model="form.bannerImage" height="320px" />
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        save-label="\u{1F4BE} \uC800\uC7A5"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('banner-form-edit')"
        :save-click="() => handleBtnAction('banner-form-save')"
        :delete-click="() => handleBtnAction('banner-form-delete')"
        :cancel-click="() => handleBtnAction('banner-form-cancel')"
        :close-click="() => handleBtnAction('banner-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uBC30\uB108\uC774\uBBF8\uC9C0 ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 ================================================== -->
    <div class="dtl-pane" v-show="showTab('info')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uAE30\uBCF8\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 \uD3FC (BoFormArea \uC790\uB3D9 \uB80C\uB354) =========================== -->
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <bo-form-area plain-readonly :columns="columns.infoForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uACF5\uAC1C\uB300\uC0C1 \uCCB4\uD06C\uBC15\uC2A4 \uADF8\uB9AC\uB4DC ===================================== -->
        <template #visibility>
          <bo-multi-check-select v-model="form.visibilityTargets" :options="VISIBILITY_OPTIONS"
            separator="^" wrap empty-value="^NONE^" placeholder="\uC804\uCCB4 \uACF5\uAC1C" all-label="\uC804\uCCB4 \uACF5\uAC1C"
            :disabled="cfDtlMode" min-width="320px" />
        </template>
      </bo-form-area>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4/\uD310\uB9E4\uB2F4\uB2F9\uC790 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ======================= -->
      <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e8e8e8;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area plain-readonly :columns="columns.vendorForm" :form="form" :errors="errors"
          :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
      <bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="showVendorModal" :on-callback="fnCallbackModal" />
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        save-label="\u{1F4BE} \uC800\uC7A5"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('info-form-edit')"
        :save-click="() => handleBtnAction('info-form-save')"
        :delete-click="() => handleBtnAction('info-form-delete')"
        :cancel-click="() => handleBtnAction('info-form-cancel')"
        :close-click="() => handleBtnAction('info-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uAE30\uBCF8\uC815\uBCF4 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uB0B4\uC6A9\uC785\uB825 (HTML \uC5D0\uB514\uD130) ======================================= -->
    <div class="dtl-pane" v-show="showTab('content')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4DD} \uB0B4\uC6A9\uC785\uB825</div>
      <div style="margin-bottom:12px;">
        <bo-tab-bar :tabs="contentTabs" :tab="activeContentTab" :show-modes="false" bg="#f0fdf4"
          @tab-select="i => handleBtnAction('content-tab', i)" />
      </div>
      <template v-if="activeContentTab===1">
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;overflow:auto;" v-html="form.content1 || '-'"></div>
        <base-html-editor v-else v-model="form.content1" height="420px" />
      </template>
      <template v-if="activeContentTab===2">
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;overflow:auto;" v-html="form.content2 || '-'"></div>
        <base-html-editor v-else v-model="form.content2" height="420px" />
      </template>
      <template v-if="activeContentTab===3">
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;overflow:auto;" v-html="form.content3 || '-'"></div>
        <base-html-editor v-else v-model="form.content3" height="420px" />
      </template>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        save-label="\u{1F4BE} \uC800\uC7A5"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('content-form-edit')"
        :save-click="() => handleBtnAction('content-form-save')"
        :delete-click="() => handleBtnAction('content-form-delete')"
        :cancel-click="() => handleBtnAction('content-form-cancel')"
        :close-click="() => handleBtnAction('content-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uB0B4\uC6A9\uC785\uB825 (HTML \uC5D0\uB514\uD130) ======================================= -->
    <!-- ===== \u25A0.\u25A0. \uB300\uC0C1\uC0C1\uD488 ================================================== -->
    <div class="dtl-pane" v-show="showTab('products')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F6CD} \uB300\uC0C1 \uC0C1\uD488</div>
      <div style="margin-bottom:16px;">
        <button class="btn btn-primary btn-sm" @click="handleBtnAction('prodPickModal-open')" style="float:right;">+ \uC0C1\uD488\uC120\uD0DD</button>
        <div style="clear:both;"></div>
      </div>
      <div v-if="cfSelectedProducts.length > 0" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;">
        <div v-for="p in cfSelectedProducts" :key="p?.productId" style="border:1px solid #e0e0e0;border-radius:6px;overflow:hidden;background:#fff;">
          <div style="height:100px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;font-size:32px;border-bottom:1px solid #e8e8e8;">
            \u{1F4E6}
          </div>
          <div style="padding:8px;font-size:11px;">
            <div style="font-weight:600;color:#222;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
              {{ p.prodNm }}
            </div>
            <div style="color:#e8587a;font-weight:700;margin-bottom:6px;">{{ (p.price||0).toLocaleString() }}\uC6D0</div>
            <button style="width:100%;padding:4px;background:#fff;border:1px solid #ddd;border-radius:4px;font-size:10px;color:#666;" @click="handleSelectAction('items-rowDelete', p.productId)">
              \uC81C\uAC70
            </button>
          </div>
        </div>
      </div>
      <div v-else style="text-align:center;color:#999;padding:40px;background:#f9f9f9;border-radius:6px;">\uC120\uD0DD\uB41C \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        save-label="\u{1F4BE} \uC800\uC7A5"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('products-form-edit')"
        :save-click="() => handleBtnAction('products-form-save')"
        :delete-click="() => handleBtnAction('products-form-delete')"
        :cancel-click="() => handleBtnAction('products-form-cancel')"
        :close-click="() => handleBtnAction('products-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uB300\uC0C1\uC0C1\uD488 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <div class="dtl-pane" v-show="showTab('preview')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F441} \uBBF8\uB9AC\uBCF4\uAE30</div>
      <div style="background:#f9f9f9;border-radius:6px;padding:20px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uB108 \uBBF8\uB9AC\uBCF4\uAE30 =========================================== -->
        <div v-if="form.bannerImage" style="margin-bottom:20px;padding:16px;background:#fff;border-radius:6px;border:1px solid #e0e0e0;overflow:hidden;" v-html="form.bannerImage"></div>
        <div style="background:#fff;border-radius:6px;padding:20px;border:1px solid #e0e0e0;">
          <div style="font-size:18px;font-weight:700;color:#222;margin-bottom:12px;">{{ form.planNm }}</div>
          <div style="display:flex;gap:8px;margin-bottom:12px;">
            <span style="display:inline-block;font-size:11px;background:#e8f0fe;color:#1577db;border-radius:4px;padding:4px 8px;font-weight:600;">
              {{ form.category }}
            </span>
            <span style="display:inline-block;font-size:11px;background:#fff3e0;color:#f57c00;border-radius:4px;padding:4px 8px;font-weight:600;">
              {{ form.theme }}
            </span>
            <span style="display:inline-block;font-size:11px;background:#e8f5e9;color:#2e7d32;border-radius:4px;padding:4px 8px;font-weight:600;">
              {{ form.status }}
            </span>
          </div>
          <div style="color:#666;font-size:12px;line-height:1.6;margin-bottom:16px;">
            <div>\u{1F4C5} \uAE30\uAC04: {{ form.startDate }} ~ {{ form.endDate }}</div>
            <div style="margin-top:4px;">{{ form.desc }}</div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30 ======================================== -->
          <template v-if="form.content1 || form.content2 || form.content3">
            <div style="border-top:1px solid #e0e0e0;padding-top:16px;margin-top:16px;">
              <div v-if="form.content1" style="margin-bottom:20px;">
                <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:8px;">\u{1F3AF} \uC8FC\uC694\uB0B4\uC6A9</div>
                <div style="font-size:12px;line-height:1.8;color:#555;" v-html="form.content1"></div>
              </div>
              <div v-if="form.content2" style="margin-bottom:20px;">
                <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:8px;">\u2728 \uD2B9\uC9D5</div>
                <div style="font-size:12px;line-height:1.8;color:#555;" v-html="form.content2"></div>
              </div>
              <div v-if="form.content3">
                <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:8px;">\u{1F381} \uD61C\uD0DD</div>
                <div style="font-size:12px;line-height:1.8;color:#555;" v-html="form.content3"></div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB300\uC0C1\uC0C1\uD488 \uBBF8\uB9AC\uBCF4\uAE30 ======================================= -->
          <div v-if="cfSelectedProducts.length > 0" style="border-top:1px solid #e0e0e0;padding-top:16px;margin-top:16px;">
            <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:12px;">\u{1F6CD} \uB300\uC0C1\uC0C1\uD488 ({{ cfSelectedProducts.length }}\uAC1C)</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;">
              <div v-for="p in cfSelectedProducts" :key="p?.productId" style="text-align:center;padding:10px;background:#f9f9f9;border-radius:6px;">
                <div style="font-size:32px;margin-bottom:4px;">\u{1F4E6}</div>
                <div style="font-size:11px;font-weight:600;color:#222;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                  {{ p.prodNm }}
                </div>
                <div style="font-size:12px;color:#e8587a;font-weight:700;margin-top:4px;">{{ (p.price||0).toLocaleString() }}\uC6D0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        save-label="\u{1F4BE} \uC800\uC7A5"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('preview-form-edit')"
        :save-click="() => handleBtnAction('preview-form-save')"
        :delete-click="() => handleBtnAction('preview-form-delete')"
        :cancel-click="() => handleBtnAction('preview-form-cancel')"
        :close-click="() => handleBtnAction('preview-form-close')" />
    </div>
  </div>
  <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
</bo-container>
</div>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<!-- ===== \u25A1.\u25A1. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
<!-- ===== \u25A0. \uC0C1\uD488\uC120\uD0DD \uBAA8\uB2EC ================================================= -->
<bo-cm-popup-modal popup-cmd="cmPopup-prod-pick" popup-code="prod" result-type="id" :show="showProdPopup" :selected-ids="form.productIds" title="\uC0C1\uD488\uC120\uD0DD" :on-callback="fnCallbackModal" />
<!-- ===== \u25A1. \uC0C1\uD488\uC120\uD0DD \uBAA8\uB2EC ================================================= -->
`};
