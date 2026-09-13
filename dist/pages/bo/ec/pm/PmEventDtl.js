window._ecEventDtlState=window._ecEventDtlState||{tab:"info",tabMode:"tab"},window.PmEventDtl={name:"PmEventDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(s){const me=window.nextId||{value:(e,t)=>((e||[]).reduce((n,i)=>Math.max(n,Number(i==null?void 0:i[t])||0),0)||0)+1},{ref:I,reactive:p,computed:c,onMounted:F,watch:k}=Vue,l=window.boApp.showToast,M=window.boApp.showConfirm,O=window.boApp.showRefModal,m=p([]),h=p([]),a=p({loading:!1,showProdPopup:!1,showVendorModal:!1,error:null,tab:window._ecEventDtlState.tab||"info",tabMode2:window._ecEventDtlState.tabMode||"tab",activeContentTab:1,prodSearch:""}),$=Vue.toRef(a,"tab"),q=Vue.toRef(a,"tabMode2"),A=p({event_statuses:[]}),y=new Date,T=e=>String(e).padStart(2,"0"),j=`${y.getFullYear()}-${T(y.getMonth()+1)}-${T(y.getDate())}`,H=`${y.getFullYear()+3}-12-31`,o=p({eventTitle:"",eventStatusCd:"",startDate:"",endDate:"",authRequired:!1,targetProducts:[],visibilityTargets:"^PUBLIC^",bannerImage:"",content1:"",content2:"",content3:"",content4:"",content5:"",vendorId:"",chargeStaff:""}),K=()=>{Object.assign(o,{eventStatusCd:"\uC9C4\uD589\uC911",startDate:j,endDate:H})},b=p({}),G=yup.object({eventTitle:yup.string().required("\uC774\uBCA4\uD2B8 \uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),w=c(()=>!s.dtlId),S=c(()=>s.dtlId||o.eventId||null),P=c(()=>!!S.value),Y=c(()=>a.tab!=="info"&&!P.value),E=(e,t={})=>{if(["banner-form-save","info-form-save","content-form-save","products-form-save"].includes(e))return ae();if(["banner-form-delete","info-form-delete","content-form-delete","products-form-delete"].includes(e))return de();if(["banner-form-cancel","info-form-cancel","content-form-cancel","products-form-cancel"].includes(e))return s.navigate("__cancelEdit__");if(["banner-form-close","info-form-close","content-form-close","products-form-close"].includes(e))return s.navigate("__closeDtl__");if(["banner-form-edit","info-form-edit","content-form-edit","products-form-edit"].includes(e))return s.navigate("__switchToEdit__");if(e==="tab-select")return ee(t);if(e==="tab-mode"){a.tabMode2=t;return}else if(e==="content-tab"){a.activeContentTab=t;return}else{if(e==="form-visibilityToggle")return le(t);if(e==="prodPickModal-open"){a.showProdPopup=!0;return}else if(e==="prodPickModal-close"){a.showProdPopup=!1;return}else if(e==="vendorModal-open"){a.showVendorModal=!0;return}else if(e==="vendorModal-close"){a.showVendorModal=!1;return}else if(e==="form-vendorClear"){o.vendorId="",o.chargeStaff="";return}else{if(e==="preview-eventConfirm")return ne();console.warn("[handleBtnAction] unknown cmd:",e)}}},B=(e,t={})=>{if(e==="prodPickModal-toggle")return C(t);if(e==="items-rowDelete")return oe(t);if(e==="items-ref")return O(t.type,t.id);if(e==="vendorModal-select")return R(t.vendorId,t.vendorNm);console.warn("[handleSelectAction] unknown cmd:",e)},Z=(e,t,n)=>{if(e==="cmPopup-vendor-pick"){if(n==null){a.showVendorModal=!1;return}return R(n.selId,n.selName)}else if(e==="cmPopup-prod-pick"){if(n==null){a.showProdPopup=!1;return}return C(n)}else console.warn("[fnCallbackModal] unknown popCmd:",e)},J=async()=>{var e,t,n,i;try{const d=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"\uAD00\uB9AC","\uC870\uD68C");h.splice(0,h.length,...((t=(e=d.data)==null?void 0:e.data)==null?void 0:t.pageList)||((i=(n=d.data)==null?void 0:n.data)==null?void 0:i.list)||[])}catch(d){console.warn("[PmEventDtl.js] vendor load failed",d)}},_=async()=>{var e,t,n,i,d;await J(),a.loading=!0;try{const f=[boApiSvc.pdProd.getPage({pageNo:1,pageSize:1e4},"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uC870\uD68C")];w.value||f.unshift(boApiSvc.pmEvent.getById(s.dtlId,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"));const u=await Promise.all(f);if(w.value)m.splice(0,m.length,...((d=(i=u[0].data)==null?void 0:i.data)==null?void 0:d.list)||[]);else{const r=((e=u[0].data)==null?void 0:e.data)||u[0].data;r&&(Object.assign(o,{...r,targetProducts:[...r.targetProducts||[]]}),o.visibilityTargets||(o.visibilityTargets=window.visibilityUtil.fromLegacy("\uD56D\uC0C1 \uD45C\uC2DC",r.authRequired,""),o.visibilityTargets||(o.visibilityTargets="^PUBLIC^"))),m.splice(0,m.length,...((n=(t=u[1].data)==null?void 0:t.data)==null?void 0:n.list)||[])}a.error=null}catch(f){console.error("[catch-info]",f),a.error=f.message}finally{a.loading=!1}};k(()=>a.tab,e=>{window._ecEventDtlState.tab=e}),k(()=>a.tabMode2,e=>{window._ecEventDtlState.tabMode=e});const W=e=>a.tabMode2!=="tab"||a.tab===e,Q=p([{id:"banner",label:"\uBC30\uB108\uC774\uBBF8\uC9C0",icon:"\u{1F3A8}"},{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"content",label:"\uC774\uBCA4\uD2B8 \uB0B4\uC6A9",icon:"\u{1F4DD}"},{id:"preview",label:"\uBBF8\uB9AC\uBCF4\uAE30",icon:"\u{1F441}"}]),X=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["EVENT_STATUS_KR"],{compNm:"PmEventDtl"}),A.event_statuses=e.sgGetGrpCodes("EVENT_STATUS_KR")},ee=e=>{a.tab=e};F(async()=>{await X(),s.active&&w.value&&K(),await _()}),k(()=>s.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(b).forEach(n=>delete b[n])}catch{}await _()}});const C=e=>{const t=o.targetProducts.indexOf(e);t===-1?o.targetProducts.push(e):o.targetProducts.splice(t,1)},te=c(()=>o.targetProducts.map(e=>m.find(t=>t.productId===e||t.prodId===e)).filter(Boolean)),oe=e=>{const t=o.targetProducts.indexOf(e);t!==-1&&o.targetProducts.splice(t,1)},ne=()=>{l("\uC774\uBCA4\uD2B8 \uCC38\uC5EC\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uAC10\uC0AC\uD569\uB2C8\uB2E4.","success")},N=(e,t)=>{l&&l(t,"success")},V=e=>{var n,i;console.error("[handleSave]",e);const t=((i=(n=e.response)==null?void 0:n.data)==null?void 0:i.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(t,"error",0)},ae=async()=>{var d,f,u;const e=a.tab;if(!P.value&&e!=="info"){l("\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e==="info"){Object.keys(b).forEach(v=>delete b[v]);try{await G.validate(o,{abortEarly:!1})}catch(v){v.inner.forEach(g=>{b[g.path]=g.message}),coUtil.cofValidationToast(b,l);return}const r=!P.value;if(!await M(r?"\uB4F1\uB85D":"\uC800\uC7A5",r?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;try{const v={...o},g=r?await boApiSvc.pmEvent.create(v,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.pmEvent.update(S.value,v,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uAE30\uBCF8\uC815\uBCF4\uC800\uC7A5");if(r){const U=((f=(d=g.data)==null?void 0:d.data)==null?void 0:f.eventId)||((u=g.data)==null?void 0:u.eventId)||null;U&&(o.eventId=U)}N(g,r?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0ED\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(v){V(v)}return}if(!await M("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;const n={banner:"\uBC30\uB108\uC774\uBBF8\uC9C0",content:"\uC774\uBCA4\uD2B8\uB0B4\uC6A9",products:"\uB300\uC0C1\uC0C1\uD488"};let i=null;switch(e){case"banner":i={bannerImage:o.bannerImage};break;case"content":i={content1:o.content1,content2:o.content2,content3:o.content3,content4:o.content4,content5:o.content5};break;case"products":i={targetProducts:o.targetProducts,visibilityTargets:o.visibilityTargets};break;default:i={};break}try{const r=await boApiSvc.pmEvent.update(S.value,i,"\uC774\uBCA4\uD2B8\uAD00\uB9AC",`${n[e]||e}\uC800\uC7A5`);N(r,`${n[e]||""} \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)}catch(r){V(r)}},ie=c(()=>window.visibilityUtil.allOptions()),le=e=>{const t=window.visibilityUtil.parse(o.visibilityTargets),n=t.indexOf(e);n>=0?t.splice(n,1):t.push(e),o.visibilityTargets=window.visibilityUtil.serialize(t)},re=c(()=>{if(!o.vendorId)return"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD";const e=h.find(t=>t.vendorId===o.vendorId);return e?e.vendorNm:"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD"}),R=(e,t)=>{o.vendorId=e;const n=h.find(i=>i.vendorId===e);n&&(o.chargeStaff=n.chargeStaff||n.ceoNm||n.vendorNm||""),a.showVendorModal=!1},de=async()=>{var t,n;if(!(w.value||!o.eventId||!await M("\uC0AD\uC81C",`[${o.eventTitle}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.pmEvent.remove(o.eventId,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uC0AD\uC81C"),l("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),s.navigate("pmEventMng",{reload:!0})}catch(i){console.error("[catch-info]",i);const d=((n=(t=i.response)==null?void 0:t.data)==null?void 0:n.message)||i.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(d,"error",0)}},se=Vue.toRef(a,"activeContentTab"),ge=Vue.toRef(a,"prodSearch"),ce=Vue.toRef(a,"showProdPopup"),fe=Vue.toRef(a,"showVendorModal"),ve=c(()=>s.dtlMode==="view"),L=()=>{const e=new URLSearchParams;return e.set("page","pmEventDtl"),e.set("id",o.eventId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},pe=()=>{try{window.coExtSdk.shareKakao({title:`\uC774\uBCA4\uD2B8 ${o.eventId} - ShopJoy BO`,description:o.eventTitle||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:L()})}catch(e){l(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},be=async()=>{try{await navigator.clipboard.writeText(L()),l("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){l(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},z=I(null),D=I(!1),ue=async()=>{D.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC774\uBCA4\uD2B8\uC0C1\uC138_${o.eventId}.pdf`);await window.boUtil.bofExportPdf(z.value,e,l)}finally{D.value=!1}},x={};return x.productGrid=[{key:"productId",label:"ID"},{key:"prodNm",label:"\uC0C1\uD488\uBA85",refLink:"product",refKey:"productId"},{key:"category",label:"\uCE74\uD14C\uACE0\uB9AC"},{key:"price",label:"\uAC00\uACA9",fmt:e=>coUtil.cofWon(e)},{key:"stock",label:"\uC7AC\uACE0",fmt:e=>e+"\uAC1C"},{key:"status",label:"\uC0C1\uD0DC"},{type:"actions",actions:[{label:"\uC81C\uAC70",cls:"btn btn-danger btn-xs",onClick:e=>B("items-rowDelete",e.productId)}]}],x.infoForm=[{key:"eventTitle",label:"\uC774\uBCA4\uD2B8 \uC81C\uBAA9",type:"text",required:!0,placeholder:"\uC774\uBCA4\uD2B8 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694"},{key:"startDate",label:"\uC2DC\uC791\uC77C",type:"date"},{key:"endDate",label:"\uC885\uB8CC\uC77C",type:"date"},{key:"eventStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>A.event_statuses},{key:"authRequired",label:"\uB85C\uADF8\uC778 \uC778\uC99D \uD544\uC694",type:"checkbox",checkboxLabel:"\uB85C\uADF8\uC778 \uC778\uC99D \uD544\uC694",hideLabel:!0,checkedValue:!0,uncheckedValue:!1}],x.vendorForm=[{key:"vendorId",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"pick",placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",display:e=>{const t=h.find(n=>n.vendorId===e.vendorId);return t?t.vendorNm:""},onOpen:()=>E("vendorModal-open"),onClear:()=>{o.chargeStaff=""}},{key:"chargeStaff",label:"\uD310\uB9E4\uB2F4\uB2F9\uC790",type:"text",placeholder:"\uB2F4\uB2F9\uC790\uBA85 \uC785\uB825"}],{coUtil,columns:x,vendors:h,products:m,form:o,errors:b,tabs:Q,handleShareKakao:pe,handleCopyLink:be,pdfAreaRef:z,pdfExporting:D,handleExportPdf:ue,handleBtnAction:E,handleSelectAction:B,fnCallbackModal:Z,cfIsNew:w,cfSaveDisabled:Y,cfDtlMode:ve,cfSelectedProducts:te,cfVisibilityOptions:ie,cfSelectedVendorNm:re,tab:$,tabMode2:q,activeContentTab:se,showProdPopup:ce,showVendorModal:fe,showTab:W}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uC774\uBCA4\uD2B8 \uC0C1\uC138' : (cfIsNew ? '\uC774\uBCA4\uD2B8 \uB4F1\uB85D' : (cfDtlMode ? '\uC774\uBCA4\uD2B8 \uC0C1\uC138' : '\uC774\uBCA4\uD2B8 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.eventId)">
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
  <!-- ===== \u25A1.\u25A0. \uD0ED\uBC14 ==================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <!-- ===== \u25A0.\u25A0. \uBC30\uB108\uC774\uBBF8\uC9C0 ================================================= -->
    <div class="dtl-pane" v-show="showTab('banner')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F3A8} \uBC30\uB108\uC774\uBBF8\uC9C0</div>
      <div style="margin-bottom:12px;">
        <div v-if="!cfDtlMode" style="font-size:12px;color:#888;margin-bottom:6px;">\u{1F4A1} \uD301: \uC774\uBBF8\uC9C0 \uC0BD\uC785 \uD6C4 \uD06C\uAE30 \uC870\uC808 \uBC0F \uBC30\uCE58\uB97C \uC790\uC720\uB86D\uAC8C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</div>
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;overflow:auto;" v-html="form.bannerImage || '-'"></div>
        <base-html-editor v-else v-model="form.bannerImage" height="320px" />
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
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
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC774\uBCA4\uD2B8 \uC81C\uBAA9/\uAE30\uAC04/\uC0C1\uD0DC (BoFormArea \uC790\uB3D9 \uB80C\uB354) ===================== -->
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <bo-form-area plain-readonly :columns="columns.infoForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
      <div v-if="form.authRequired" style="padding:10px 14px;background:#fff7e6;border-radius:6px;border:1px solid #ffd591;font-size:12px;color:#d46b08;">
        \u26A0\uFE0F \uC778\uC99D \uD544\uC694 \uC124\uC815 \uC2DC, \uC774\uBCA4\uD2B8 \uB0B4\uC6A9 3~5\uB294 \uB85C\uADF8\uC778 \uD68C\uC6D0\uC5D0\uAC8C\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4.
      </div>
      <div style="margin-top:14px;">
        <div style="font-size:12px;font-weight:700;color:#888;margin-bottom:8px;">\u{1F512} \uACF5\uAC1C \uB300\uC0C1 (\uD558\uB098\uB77C\uB3C4 \uD574\uB2F9\uD558\uBA74 \uB178\uCD9C)</div>
        <bo-multi-check-select v-model="form.visibilityTargets" :options="cfVisibilityOptions"
          separator="^" wrap empty-value="^NONE^" placeholder="\uC804\uCCB4 \uACF5\uAC1C" all-label="\uC804\uCCB4 \uACF5\uAC1C"
          :disabled="cfDtlMode" min-width="320px" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4/\uD310\uB9E4\uB2F4\uB2F9\uC790 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ======================= -->
      <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e8e8e8;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area plain-readonly :columns="columns.vendorForm" :form="form" :errors="errors"
          :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
      <bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="showVendorModal" :on-callback="fnCallbackModal" />
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('info-form-edit')"
        :save-click="() => handleBtnAction('info-form-save')"
        :delete-click="() => handleBtnAction('info-form-delete')"
        :cancel-click="() => handleBtnAction('info-form-cancel')"
        :close-click="() => handleBtnAction('info-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uAE30\uBCF8\uC815\uBCF4 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uC774\uBCA4\uD2B8 \uB0B4\uC6A9 (HTML \uC5D0\uB514\uD130) ===================================== -->
    <div class="dtl-pane" v-show="showTab('content')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4DD} \uC774\uBCA4\uD2B8 \uB0B4\uC6A9</div>
      <div style="display:flex;gap:4px;margin-bottom:12px;flex-wrap:wrap;">
        <button v-for="n in 5" :key="Math.random()" class="btn btn-sm"
          :class="activeContentTab===n ? 'btn-primary' : 'btn-secondary'"
          @click="handleBtnAction('content-tab', n)">
          \uB0B4\uC6A9 {{ n }}
          <span v-if="form.authRequired ? (n >= 3) : false" class="tab-count" style="background:#fde8ee;color:#e8587a;">
            \uC778\uC99D
          </span>
        </button>
      </div>
      <div v-for="n in 5" :key="Math.random()" v-show="activeContentTab===n">
        <div v-if="form.authRequired ? (n >= 3) : false" style="display:flex;align-items:center;gap:8px;margin-bottom:8px;padding:8px 12px;background:#fff7e6;border-radius:6px;border:1px solid #ffd591;">
          <span class="badge badge-orange">\uC778\uC99D \uD6C4 \uD45C\uC2DC</span>
          <span style="font-size:12px;color:#888;">\uB85C\uADF8\uC778 \uD68C\uC6D0\uC5D0\uAC8C\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4</span>
        </div>
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:160px;line-height:1.6;" v-html="form['content'+n] || '-'"></div>
        <base-html-editor v-else :model-value="form['content'+n]" @update:model-value="v => form['content'+n] = v" height="220px" />
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('content-form-edit')"
        :save-click="() => handleBtnAction('content-form-save')"
        :delete-click="() => handleBtnAction('content-form-delete')"
        :cancel-click="() => handleBtnAction('content-form-cancel')"
        :close-click="() => handleBtnAction('content-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uC774\uBCA4\uD2B8 \uB0B4\uC6A9 (HTML \uC5D0\uB514\uD130) ===================================== -->
    <!-- ===== \u25A0.\u25A0. \uB300\uC0C1 \uC0C1\uD488 ================================================= -->
    <div class="dtl-pane" v-show="showTab('products')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
        \u{1F6CD} \uB300\uC0C1 \uC0C1\uD488
        <span class="tab-count">{{ form.targetProducts.length }}</span>
      </div>
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px;">
        <button v-if="!cfDtlMode" class="btn btn-secondary" @click="handleBtnAction('prodPickModal-open')">+ \uC0C1\uD488 \uCD94\uAC00</button>
        <span style="font-size:13px;color:#888;">{{ form.targetProducts.length }}\uAC1C \uC120\uD0DD\uB428</span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.productGrid" :rows="cfSelectedProducts" row-key="productId"
        empty-text="\uC120\uD0DD\uB41C \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." @ref-click="({type,id}) => handleSelectAction('items-ref', {type, id})" />
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('products-form-edit')"
        :save-click="() => handleBtnAction('products-form-save')"
        :delete-click="() => handleBtnAction('products-form-delete')"
        :cancel-click="() => handleBtnAction('products-form-cancel')"
        :close-click="() => handleBtnAction('products-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uB300\uC0C1 \uC0C1\uD488 ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <div class="dtl-pane" v-show="showTab('preview')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F441} \uBBF8\uB9AC\uBCF4\uAE30</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:20px;border:1px solid #e8e8e8;max-width:600px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uB108 \uBBF8\uB9AC\uBCF4\uAE30 =========================================== -->
        <div v-if="form.bannerImage" style="margin-bottom:20px;padding:12px;background:#fff;border-radius:6px;border:1px solid #e0e0e0;overflow:hidden;" v-html="form.bannerImage"></div>
        <div style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1a1a2e;">{{ form.eventTitle || '\uC774\uBCA4\uD2B8 \uC81C\uBAA9' }}</div>
        <div style="font-size:12px;color:#aaa;margin-bottom:16px;">{{ form.startDate }} ~ {{ form.endDate }}</div>
        <div style="font-size:13px;color:#444;margin-bottom:12px;" v-html="form.content1 || '<p style=color:#aaa>\uC774\uBCA4\uD2B8 \uB0B4\uC6A9 1\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p>'"></div>
        <div style="font-size:13px;color:#444;margin-bottom:12px;" v-html="form.content2"></div>
        <template v-if="!form.authRequired">
          <div style="font-size:13px;color:#444;margin-bottom:12px;" v-html="form.content3"></div>
          <div style="font-size:13px;color:#444;margin-bottom:12px;" v-html="form.content4"></div>
          <div style="font-size:13px;color:#444;margin-bottom:16px;" v-html="form.content5"></div>
        </template>
        <div v-else style="padding:12px;background:#f0f0f0;border-radius:6px;font-size:12px;color:#888;margin-bottom:16px;">
          \u{1F512} \uB0B4\uC6A9 3~5\uB294 \uB85C\uADF8\uC778 \uD6C4 \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
        </div>
        <div v-if="cfSelectedProducts.length > 0" style="margin-top:20px;padding-top:20px;border-top:1px solid #e0e0e0;">
          <div style="font-size:14px;font-weight:700;color:#333;margin-bottom:12px;">\u{1F3AF} \uB300\uC0C1 \uC0C1\uD488 ({{ cfSelectedProducts.length }}\uAC1C)</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;">
            <div v-for="p in cfSelectedProducts" :key="p?.productId" style="border:1px solid #e0e0e0;border-radius:6px;overflow:hidden;background:#fff;">
              <div style="height:100px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;font-size:32px;border-bottom:1px solid #e8e8e8;">
                \u{1F4E6}
              </div>
              <div style="padding:8px;font-size:11px;">
                <div style="font-weight:600;color:#222;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                  {{ p.prodNm }}
                </div>
                <div style="color:#e8587a;font-weight:700;">{{ (p.price||0).toLocaleString() }}\uC6D0</div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-primary" @click="handleBtnAction('preview-eventConfirm')" style="margin-top:16px;">\uC774\uBCA4\uD2B8 \uD655\uC778</button>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  </div>
</bo-container>
</div>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<!-- ===== \u25A0. \uC0C1\uD488 \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
<bo-cm-popup-modal popup-cmd="cmPopup-prod-pick" popup-code="prod" result-type="id" :show="showProdPopup" :selected-ids="form.targetProducts" title="\uB300\uC0C1 \uC0C1\uD488 \uC120\uD0DD" :on-callback="fnCallbackModal" />
<!-- ===== \u25A1. \uC0C1\uD488 \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
`};
