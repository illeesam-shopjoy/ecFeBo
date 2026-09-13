window._pmGiftDtlState=window._pmGiftDtlState||{tab:"info",tabMode:"tab"},window.PmGiftDtl={name:"PmGiftDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(c){const{ref:x,reactive:b,computed:f,onMounted:U,watch:T}=Vue,l=window.boApp.showToast,I=window.boApp.showConfirm,m=b([]),r=b({loading:!1,showVendorModal:!1,showTargetPicker:!1,error:null,tab:window._pmGiftDtlState.tab||"info",tabMode2:window._pmGiftDtlState.tabMode||"tab"}),R=Vue.toRef(r,"tab"),F=Vue.toRef(r,"tabMode2"),p=b({gift_cond_types:[],gift_statuses:[],pm_prod_targets:[]}),u=new Date,D=e=>String(e).padStart(2,"0"),L=`${u.getFullYear()}-${D(u.getMonth()+1)}-${D(u.getDate())}`,z=`${u.getFullYear()+1}-12-31`,o=b({giftId:null,giftNm:"",giftTypeCd:"",condVal:"",giftStatusCd:"",giftStock:"",startDate:"",endDate:"",prodId:null,giftDesc:"",minOrderAmt:"",minOrderQty:"",visibilityTargets:"^PUBLIC^",vendorId:"",chargeStaff:"",targetTypeCd:"PRODUCT",issueTargets:[],issueGrades:[]}),$=()=>{Object.assign(o,{giftTypeCd:"\uAD6C\uB9E4\uC870\uAC74",condVal:0,giftStatusCd:"\uD65C\uC131",giftStock:0,startDate:L,endDate:z,minOrderAmt:0,minOrderQty:0})},g=b({}),j=yup.object({giftNm:yup.string().required("\uC0AC\uC740\uD488\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),giftStock:yup.number().min(0,"\uC7AC\uACE0\uB294 0 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.").required("\uC7AC\uACE0\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),y=f(()=>!c.dtlId),w=f(()=>c.dtlId||o.giftId||null),S=f(()=>!!w.value),Q=f(()=>r.tab!=="info"&&!S.value),C=(e,t={})=>{if(["info-form-save","target-form-save","visibility-form-save"].includes(e))return ie();if(["info-form-delete","target-form-delete","visibility-form-delete"].includes(e))return re();if(["info-form-cancel","target-form-cancel","visibility-form-cancel"].includes(e))return c.navigate("__cancelEdit__");if(["info-form-close","target-form-close","visibility-form-close"].includes(e))return c.navigate("__closeDtl__");if(["info-form-edit","target-form-edit","visibility-form-edit"].includes(e))return c.navigate("__switchToEdit__");if(e==="tab-select"){r.tab=t;return}else if(e==="tab-mode"){r.tabMode2=t;return}else{if(e==="form-visibilityToggle")return ae(t);if(e==="vendorModal-open"){r.showVendorModal=!0;return}else if(e==="vendorModal-close"){r.showVendorModal=!1;return}else if(e==="form-vendorClear"){o.vendorId="",o.chargeStaff="";return}else if(e==="preview-confirm"){l("\uC0AC\uC740\uD488\uC744 \uD655\uC778\uD558\uC600\uC2B5\uB2C8\uB2E4.","success");return}else if(e==="target-add"){r.showTargetPicker=!0;return}else{if(e==="target-remove")return Y(t);if(e==="target-close"){r.showTargetPicker=!1;return}else console.warn("[handleBtnAction] unknown cmd:",e)}}},q=(e,t={})=>{if(e==="vendorModal-select")return V(t.vendorId,t.vendorNm);console.warn("[handleSelectAction] unknown cmd:",e)},K=(e,t,a,i={})=>{if(t==="_del")return C("target-remove",i.rowIndex)},h=async e=>{var a;if(r.showTargetPicker=!1,!e)return;const t=String(e.selId||"");if(t){if(o.issueTargets.some(i=>i.targetId===t&&i.targetTypeCd===o.targetTypeCd)){l("\uC774\uBBF8 \uCD94\uAC00\uB41C \uB300\uC0C1\uC785\uB2C8\uB2E4.","error");return}try{const i=await boApiSvc.pmGiftCond.create({giftId:w.value,targetTypeCd:o.targetTypeCd,targetId:t},"\uC120\uBB3C\uAD00\uB9AC","\uBC1C\uAE09\uB300\uC0C1\uCD94\uAC00"),n=((a=i.data)==null?void 0:a.data)||i.data;o.issueTargets.push({giftCondId:n.giftCondId,targetId:t,targetNm:e.selName||t,targetTypeCd:o.targetTypeCd})}catch(i){l(coUtil.cofErrMsg(i),"error",0)}}},Y=async e=>{const t=o.issueTargets[e];if(t)try{await boApiSvc.pmGiftCond.remove(t.giftCondId,"\uC120\uBB3C\uAD00\uB9AC","\uBC1C\uAE09\uB300\uC0C1\uC0AD\uC81C"),o.issueTargets.splice(e,1)}catch(a){l(coUtil.cofErrMsg(a),"error",0)}},H=(e,t,a)=>{if(e==="cmPopup-vendor-pick"){if(a==null){r.showVendorModal=!1;return}return V(a.selId,a.selName)}else{if(e==="cmPopup-target-prod-pick")return h(a);if(e==="cmPopup-target-brand-pick")return h(a);if(e==="cmPopup-target-category-pick")return h(a);if(e==="cmPopup-vendor-target-pick")return h(a);console.warn("[fnCallbackModal] unknown popCmd:",e)}},Z=async()=>{var e,t,a,i;try{const n=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"\uAD00\uB9AC","\uC870\uD68C");m.splice(0,m.length,...((t=(e=n.data)==null?void 0:e.data)==null?void 0:t.pageList)||((i=(a=n.data)==null?void 0:a.data)==null?void 0:i.list)||[])}catch(n){console.warn("[PmGiftDtl.js] vendor load failed",n)}},M=async()=>{var e,t;if(await Z(),!y.value){r.loading=!0;try{const a=await boApiSvc.pmGift.getById(c.dtlId,"\uC120\uBB3C\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),i=((e=a.data)==null?void 0:e.data)||a.data;i&&Object.assign(o,i),i&&(i.giftTypeCd==="QTY"?o.condVal=Number(i.minOrderQty)||0:o.condVal=Number(i.minOrderAmt)||0);try{const n=await boApiSvc.pmGiftCond.getList({giftId:c.dtlId},"\uC120\uBB3C\uAD00\uB9AC","\uBC1C\uAE09\uB300\uC0C1\uC870\uD68C"),k=((t=n.data)==null?void 0:t.data)||n.data||[];o.issueTargets=k.map(s=>({giftCondId:s.giftCondId,targetId:s.targetId,targetNm:s.targetId,targetTypeCd:s.targetTypeCd}))}catch(n){console.warn("[PmGiftDtl.js] gift-cond load failed",n)}r.error=null}catch(a){console.error("[catch-info]",a),r.error=a.message}finally{r.loading=!1}}};T(()=>r.tab,e=>{window._pmGiftDtlState.tab=e}),T(()=>r.tabMode2,e=>{window._pmGiftDtlState.tabMode=e});const J=e=>r.tabMode2!=="tab"||r.tab===e,W=b([{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"target",label:"\uBC1C\uAE09\uB300\uC0C1",icon:"\u{1F3AF}"},{id:"visibility",label:"\uACF5\uAC1C\uB300\uC0C1",icon:"\u{1F512}"},{id:"preview",label:"\uBBF8\uB9AC\uBCF4\uAE30",icon:"\u{1F441}"}]),X=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["GIFT_COND_KR","GIFT_STATUS_CD","PM_PROD_TARGET"],{compNm:"PmGiftDtl"}),p.gift_cond_types=e.sgGetGrpCodes("GIFT_COND_KR"),p.gift_statuses=e.sgGetGrpCodes("GIFT_STATUS_CD"),p.pm_prod_targets=e.sgGetGrpCodes("PM_PROD_TARGET")};U(async()=>{await X(),c.active&&y.value&&$(),await M()}),T(()=>c.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(g).forEach(a=>delete g[a])}catch{}await M()}});const ee=f(()=>window.visibilityUtil.allOptions()),te=e=>window.visibilityUtil.has(o.visibilityTargets,e),ae=e=>{const t=window.visibilityUtil.parse(o.visibilityTargets),a=t.indexOf(e);a>=0?t.splice(a,1):t.push(e),o.visibilityTargets=window.visibilityUtil.serialize(t)},oe=f(()=>{if(!o.vendorId)return"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD";const e=m.find(t=>t.vendorId===o.vendorId);return e?e.vendorNm:"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD"}),V=(e,t)=>{o.vendorId=e;const a=m.find(i=>i.vendorId===e);a&&(o.chargeStaff=a.chargeStaff||a.ceoNm||a.vendorNm||""),r.showVendorModal=!1},P=(e,t)=>{l&&l(t,"success")},G=e=>{var a,i;console.error("[handleSave]",e);const t=((i=(a=e.response)==null?void 0:a.data)==null?void 0:i.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(t,"error",0)},ie=async()=>{var i,n,k;const e=r.tab;if(!S.value&&e!=="info"){l("\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e==="info"){Object.keys(g).forEach(d=>delete g[d]);try{await j.validate(o,{abortEarly:!1})}catch(d){d.inner.forEach(v=>{g[v.path]=v.message}),coUtil.cofValidationToast(g,l);return}const s=!S.value;if(!await I(s?"\uB4F1\uB85D":"\uC800\uC7A5",s?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;try{const d={...o};o.giftTypeCd==="QTY"?d.minOrderQty=o.condVal:d.minOrderAmt=o.condVal;const v=s?await boApiSvc.pmGift.create(d,"\uC120\uBB3C\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.pmGift.update(w.value,d,"\uC120\uBB3C\uAD00\uB9AC","\uAE30\uBCF8\uC815\uBCF4\uC800\uC7A5");if(s){const E=((n=(i=v.data)==null?void 0:i.data)==null?void 0:n.giftId)||((k=v.data)==null?void 0:k.giftId)||null;E&&(o.giftId=E)}P(v,s?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0ED\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(d){G(d)}return}if(!await I("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;let a=null;e==="visibility"?a={visibilityTargets:o.visibilityTargets}:a={};try{const s=await boApiSvc.pmGift.update(w.value,a,"\uC120\uBB3C\uAD00\uB9AC",`${e}\uC800\uC7A5`);P(s,"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(s){G(s)}},re=async()=>{var t,a;if(!(y.value||!o.giftId||!await I("\uC0AD\uC81C",`[${o.giftNm}] \uC0AC\uC740\uD488\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.pmGift.remove(o.giftId,"\uC0AC\uC740\uD488\uAD00\uB9AC","\uC0AD\uC81C"),l("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),c.navigate("pmGiftMng",{reload:!0})}catch(i){console.error("[catch-info]",i);const n=((a=(t=i.response)==null?void 0:t.data)==null?void 0:a.message)||i.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(n,"error",0)}},le=Vue.toRef(r,"showVendorModal"),ne=Vue.toRef(r,"showTargetPicker"),N=f(()=>c.dtlMode==="view"),se=f(()=>[{key:"targetTypeCd",label:"\uAD6C\uBD84",style:"width:70px;",align:"center",fmt:e=>(p.pm_prod_targets.find(t=>t.codeValue===e)||{}).codeLabel||e||"-"},{key:"targetId",label:"\uB300\uC0C1 ID",mono:!0,cellStyle:"font-size:11px;"},{key:"targetNm",label:"\uB300\uC0C1\uBA85",fmt:e=>e||"-"},...N.value?[]:[{key:"_del",label:"\uC0AD\uC81C",style:"width:60px;",align:"center",fmt:()=>"\u2715",link:!0,cellStyle:"color:#e8587a;cursor:pointer;font-weight:700;"}]]),B=()=>{const e=new URLSearchParams;return e.set("page","pmGiftDtl"),e.set("id",o.giftId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},ce=()=>{try{window.coExtSdk.shareKakao({title:`\uC0AC\uC740\uD488 ${o.giftId} - ShopJoy BO`,description:o.giftDesc||o.giftNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:B()})}catch(e){l(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},de=async()=>{try{await navigator.clipboard.writeText(B()),l("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){l(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},O=x(null),A=x(!1),fe=async()=>{A.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC0AC\uC740\uD488\uC0C1\uC138_${o.giftId}.pdf`);await window.boUtil.bofExportPdf(O.value,e,l)}finally{A.value=!1}},_={};return _.targetForm=[{key:"targetTypeCd",label:"\uB300\uC0C1 \uAD6C\uBD84",type:"select",options:()=>p.pm_prod_targets,nullLabel:null},{key:"issueGrades",label:"\uC801\uC6A9 \uD68C\uC6D0 \uB4F1\uAE09",type:"slot",name:"issueGrades",colSpan:2}],_.infoForm=[{key:"giftNm",label:"\uC0AC\uC740\uD488\uBA85",type:"text",required:!0,placeholder:"\uC0AC\uC740\uD488\uBA85 \uC785\uB825"},{key:"giftTypeCd",label:"\uC870\uAC74\uC720\uD615",type:"select",options:()=>p.gift_cond_types},{key:"condVal",label:"\uC870\uAC74\uAC12",type:"number",placeholder:"0",visible:e=>e.giftTypeCd!=="NONE",hint:"\uC870\uAC74\uC720\uD615\uC5D0 \uB530\uB77C \uB2E8\uC704(\uC218\uB7C9/\uAE08\uC561) \uC785\uB825"},{key:"giftStock",label:"\uC7AC\uACE0",type:"number",required:!0,placeholder:"0"},{key:"giftStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>p.gift_statuses},{key:"startDate",label:"\uC2DC\uC791\uC77C",type:"date"},{key:"endDate",label:"\uC885\uB8CC\uC77C",type:"date"},{key:"giftDesc",label:"\uBE44\uACE0",type:"textarea",rows:2,placeholder:"\uBE44\uACE0 \uC785\uB825"},{key:"vendorId",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"pick",placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",display:e=>{const t=m.find(a=>a.vendorId===e.vendorId);return t?t.vendorNm:""},onOpen:()=>C("vendorModal-open"),onClear:()=>{o.chargeStaff=""}},{key:"chargeStaff",label:"\uD310\uB9E4\uB2F4\uB2F9\uC790",type:"text",placeholder:"\uB2F4\uB2F9\uC790\uBA85 \uC785\uB825"}],{columns:_,vendors:m,form:o,errors:g,handleShareKakao:ce,handleCopyLink:de,pdfAreaRef:O,pdfExporting:A,handleExportPdf:fe,handleBtnAction:C,handleSelectAction:q,handleGridCellAction:K,fnCallbackModal:H,cfIsNew:y,cfSaveDisabled:Q,cfIsView:N,cfVisibilityOptions:ee,cfSelectedVendorNm:oe,cfIssueTargetsColumns:se,tabs:W,tab:R,tabMode2:F,showVendorModal:le,showTargetPicker:ne,showTab:J,hasVisibility:te,coUtil}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uC0AC\uC740\uD488 \uC0C1\uC138' : (cfIsNew ? '\uC0AC\uC740\uD488 \uB4F1\uB85D' : (cfIsView ? '\uC0AC\uC740\uD488 \uC0C1\uC138' : '\uC0AC\uC740\uD488 \uC218\uC815'))"
  :title-id="coUtil.cofAnd(active, !cfIsNew) ? form.giftId : ''">
  <template #toolbar-actions>
    <button v-if="active ? (cfIsView ? !cfIsNew : false) : false" class="btn btn_link" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)" @click="handleCopyLink">\u{1F517}</button>
    <button v-if="active ? (cfIsView ? !cfIsNew : false) : false" class="btn btn_kakao" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720" @click="handleShareKakao">\u{1F4AC}</button>
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
  <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uD5E4\uB354 (\uC81C\uBAA9 = list-title) ============================== -->
  <!-- ===== \u25A0.\u25A0. \uD0ED\uBC14 ==================================================== -->
  <bo-tab-bar :tabs="tabs" :tab="tab" :tab-mode="tabMode2"
    @tab-select="id => handleBtnAction('tab-select', id)"
    @mode-select="m => handleBtnAction('tab-mode', m)" />
  <!-- ===== \u25A1. \uD0ED\uBC14 ====================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <!-- ===== \u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
    <div class="dtl-pane" v-show="showTab('info')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uAE30\uBCF8\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <bo-form-area plain-readonly :columns="columns.infoForm" :form="form" :errors="errors"
        :readonly="cfIsView" :cols="3" compact :show-actions="false" />
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
      <bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="showVendorModal" :on-callback="fnCallbackModal" />
      <bo-form-actions v-if="active" :readonly="cfIsView" :is-new="cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('info-form-edit')"
        :save-click="() => handleBtnAction('info-form-save')"
        :delete-click="() => handleBtnAction('info-form-delete')"
        :cancel-click="() => handleBtnAction('info-form-cancel')"
        :close-click="() => handleBtnAction('info-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uAE30\uBCF8\uC815\uBCF4 \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
    <!-- ===== \u25A0.\u25A0. \uBC1C\uAE09\uB300\uC0C1 ================================================== -->
    <div class="dtl-pane" v-show="showTab('target')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F3AF} \uBC1C\uAE09\uB300\uC0C1</div>
      <bo-form-area plain-readonly :columns="columns.targetForm" :form="form" :errors="{}" :cols="3" compact
        :show-actions="false" :readonly="cfIsView">
        <template #issueGrades>
          <bo-multi-check-select
            v-model="form.issueGrades"
            :options="[{value:'\uC77C\uBC18',label:'\uC77C\uBC18'},{value:'\uC2E4\uBC84',label:'\uC2E4\uBC84'},{value:'\uACE8\uB4DC',label:'\uACE8\uB4DC'},{value:'VIP',label:'VIP'}]"
            placeholder="\uC804\uCCB4 \uB4F1\uAE09 (\uBBF8\uC120\uD0DD \uC2DC \uC804\uCCB4)"
            :disabled="cfIsView" />
          <span style="font-size:12px;color:#aaa;margin-top:4px;display:block;">\uC120\uD0DD\uD558\uC9C0 \uC54A\uC73C\uBA74 \uC804\uCCB4 \uB4F1\uAE09\uC5D0 \uC801\uC6A9</span>
        </template>
      </bo-form-area>
      <!-- \uBC1C\uAE09\uB300\uC0C1 \uBAA9\uB85D \uCD94\uAC00/\uC0AD\uC81C -->
      <div style="margin-top:12px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
          <span style="font-size:12px;font-weight:700;color:#555;">
            \uC120\uD0DD \uB300\uC0C1 \uBAA9\uB85D
            <span style="color:#e8587a;margin-left:4px;">{{ form.issueTargets.length }}\uAC74</span>
          </span>
          <button v-if="!cfIsView" class="btn btn-sm" style="background:#e8587a;color:#fff;border:none;padding:3px 10px;border-radius:4px;font-size:12px;"
            @click="handleBtnAction('target-add')">+ \uB300\uC0C1 \uCD94\uAC00</button>
        </div>
        <bo-grid bare :columns="cfIssueTargetsColumns" :rows="form.issueTargets" row-key="targetId"
          empty-text="[+ \uB300\uC0C1 \uCD94\uAC00] \uBC84\uD2BC\uC73C\uB85C \uB300\uC0C1\uC744 \uC120\uD0DD\uD558\uC138\uC694."
          @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
      </div>
      <bo-form-actions v-if="active" :readonly="cfIsView" :is-new="cfIsNew"
        :save-disabled="cfSaveDisabled"
        :edit-click="() => handleBtnAction('target-form-edit')"
        :save-click="() => handleBtnAction('target-form-save')"
        :delete-click="() => handleBtnAction('target-form-delete')"
        :cancel-click="() => handleBtnAction('target-form-cancel')"
        :close-click="() => handleBtnAction('target-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uBC1C\uAE09\uB300\uC0C1 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uACF5\uAC1C\uB300\uC0C1 ================================================== -->
    <div class="dtl-pane" v-show="showTab('visibility')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F512} \uACF5\uAC1C\uB300\uC0C1</div>
      <div style="font-size:12px;font-weight:700;color:#888;margin-bottom:8px;">\uD558\uB098\uB77C\uB3C4 \uD574\uB2F9\uD558\uBA74 \uB178\uCD9C</div>
      <bo-multi-check-select v-model="form.visibilityTargets" :options="cfVisibilityOptions"
        separator="^" wrap empty-value="^NONE^" placeholder="\uC804\uCCB4 \uACF5\uAC1C" all-label="\uC804\uCCB4 \uACF5\uAC1C"
        :disabled="cfIsView" min-width="320px" />
      <bo-form-actions v-if="active" :readonly="cfIsView" :is-new="cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('visibility-form-edit')"
        :save-click="() => handleBtnAction('visibility-form-save')"
        :delete-click="() => handleBtnAction('visibility-form-delete')"
        :cancel-click="() => handleBtnAction('visibility-form-cancel')"
        :close-click="() => handleBtnAction('visibility-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uACF5\uAC1C\uB300\uC0C1 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <div class="dtl-pane" v-show="showTab('preview')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F441} \uBBF8\uB9AC\uBCF4\uAE30</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:20px;border:1px solid #e8e8e8;max-width:600px;">
        <div style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1a1a2e;">\u{1F381} {{ form.giftNm || '\uC0AC\uC740\uD488\uBA85' }}</div>
        <div style="font-size:12px;color:#aaa;margin-bottom:16px;">{{ form.startDate }} ~ {{ form.endDate }}</div>
        <div style="background:#fff;padding:12px;border-radius:6px;margin-bottom:12px;border-left:4px solid #f59e0b;">
          <div style="font-size:13px;color:#666;margin-bottom:4px;">
            \uC870\uAC74:
            <span style="font-weight:700;color:#f59e0b;">{{ form.giftTypeCd }}</span>
          </div>
          <div v-if="form.giftTypeCd !== 'NONE'" style="font-size:13px;color:#666;margin-bottom:4px;">
            \uC870\uAC74\uAC12:
            <span style="font-weight:700;">
              {{ form.giftTypeCd === 'AMOUNT' ? (form.condVal||0).toLocaleString() + '\uC6D0\u2191' : form.giftTypeCd === 'QTY' ? (form.condVal||0) + '\uAC1C\u2191' : form.condVal||0 }}
            </span>
          </div>
          <div style="font-size:13px;color:#666;margin-bottom:4px;">
            \uC7AC\uACE0:
            <span style="font-weight:700;">{{ (form.giftStock||0).toLocaleString() }}\uAC1C</span>
          </div>
          <div style="font-size:13px;color:#666;">\uC0C1\uD0DC: <span style="font-weight:700;"> {{ form.giftStatusCd }} </span></div>
        </div>
        <button class="btn btn-primary" @click="handleBtnAction('preview-confirm')">\uC0AC\uC740\uD488 \uD655\uC778</button>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
  </div>
  <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
<!-- \uBC1C\uAE09\uB300\uC0C1 \uD53C\uCEE4 \uBAA8\uB2EC -->
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.targetTypeCd==='PRODUCT')" popup-cmd="cmPopup-target-prod-pick" popup-code="prodByCategory" :init-selected-ids="form.issueTargets.map(t => t.targetId)" :on-callback="fnCallbackModal" />
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.targetTypeCd==='CATEGORY')" popup-cmd="cmPopup-target-category-pick" popup-code="category" :on-callback="fnCallbackModal" />
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.targetTypeCd==='BRAND')" popup-cmd="cmPopup-target-brand-pick" popup-code="brand" :on-callback="fnCallbackModal" />
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.targetTypeCd==='VENDOR')" popup-cmd="cmPopup-vendor-target-pick" popup-code="vendor" :show="true" :on-callback="fnCallbackModal" />
</bo-container>
</div>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
`};
