window._pmSaveDtlState=window._pmSaveDtlState||{tab:"info",tabMode:"tab"},window.PmSaveDtl={name:"PmSaveDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(c){const{ref:D,reactive:m,computed:f,onMounted:R,watch:k}=Vue,l=window.boApp.showToast,x=window.boApp.showConfirm,b=m([]),s=m({loading:!1,showVendorModal:!1,showTargetPicker:!1,error:null,tab:window._pmSaveDtlState.tab||"info",tabMode2:window._pmSaveDtlState.tabMode||"tab"}),L=Vue.toRef(s,"tab"),z=Vue.toRef(s,"tabMode2"),d=m({save_types:[],save_issue_types:[],save_units:[],promo_statuses:[],pm_prod_targets:[],pm_issue_grades:[]}),S=(e,t={})=>{if(["info-form-save","target-form-save","visibility-form-save"].includes(e))return se();if(["info-form-cancel","target-form-cancel","visibility-form-cancel"].includes(e))return c.navigate("__cancelEdit__");if(["info-form-close","target-form-close","visibility-form-close"].includes(e))return c.navigate("__closeDtl__");if(["info-form-edit","target-form-edit","visibility-form-edit"].includes(e))return c.navigate("__switchToEdit__");if(e==="tab-select"){s.tab=t;return}else if(e==="tab-mode"){s.tabMode2=t;return}else if(e==="vendorModal-open"){s.showVendorModal=!0;return}else if(e==="vendorModal-close"){s.showVendorModal=!1;return}else if(e==="form-vendorClear"){o.vendorId="",o.chargeStaff="";return}else{if(e==="form-visibilityToggle")return te(t);if(e==="form-previewConfirm"){l("\uC801\uB9BD\uAE08\uC744 \uD655\uC778\uD558\uC600\uC2B5\uB2C8\uB2E4.","success");return}else if(e==="target-add"){s.showTargetPicker=!0;return}else{if(e==="target-remove")return $(t);if(e==="target-close"){s.showTargetPicker=!1;return}else console.warn("[handleBtnAction] unknown cmd:",e)}}},F=(e,t={})=>{if(e==="vendorModal-select")return P(t.vendorId,t.vendorNm);console.warn("[handleSelectAction] unknown cmd:",e)},j=(e,t,a,i={})=>{if(t==="_del")return S("target-remove",i.rowIndex)},u=async e=>{var a;if(s.showTargetPicker=!1,!e)return;const t=String(e.selId||"");if(t){if(o.issueTargets.some(i=>i.targetId===t&&i.targetTypeCd===o.targetTypeCd)){l("\uC774\uBBF8 \uCD94\uAC00\uB41C \uB300\uC0C1\uC785\uB2C8\uB2E4.","error");return}try{const i=await boApiSvc.pmSaveItem.create({saveId:h.value,targetTypeCd:o.targetTypeCd,targetId:t},"\uC801\uB9BD\uAE08\uAD00\uB9AC","\uBC1C\uAE09\uB300\uC0C1\uCD94\uAC00"),r=((a=i.data)==null?void 0:a.data)||i.data;o.issueTargets.push({saveItemId:r.saveItemId,targetId:t,targetNm:e.selName||t,targetTypeCd:o.targetTypeCd})}catch(i){l(coUtil.cofErrMsg(i),"error",0)}}},$=async e=>{const t=o.issueTargets[e];if(t)try{await boApiSvc.pmSaveItem.remove(t.saveItemId,"\uC801\uB9BD\uAE08\uAD00\uB9AC","\uBC1C\uAE09\uB300\uC0C1\uC0AD\uC81C"),o.issueTargets.splice(e,1)}catch(a){l(coUtil.cofErrMsg(a),"error",0)}},Y=(e,t,a)=>{if(e==="cmPopup-vendor-pick"){if(a==null){s.showVendorModal=!1;return}return P(a.selId,a.selName)}else{if(e==="cmPopup-target-prod-pick")return u(a);if(e==="cmPopup-target-brand-pick")return u(a);if(e==="cmPopup-target-category-pick")return u(a);if(e==="cmPopup-vendor-target-pick")return u(a);console.warn("[fnCallbackModal] unknown popCmd:",e)}},q=async()=>{var e,t,a,i;try{const r=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"\uAD00\uB9AC","\uC870\uD68C");b.splice(0,b.length,...((t=(e=r.data)==null?void 0:e.data)==null?void 0:t.pageList)||((i=(a=r.data)==null?void 0:a.data)==null?void 0:i.list)||[])}catch(r){console.warn("[PmSaveDtl.js] vendor load failed",r)}},M=async()=>{var e,t;if(await q(),!_.value){s.loading=!0;try{const a=await boApiSvc.pmSave.getById(c.dtlId,"\uC801\uB9BD\uAE08\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),i=((e=a.data)==null?void 0:e.data)||a.data;i&&Object.assign(o,i);try{const r=await boApiSvc.pmSaveItem.getList({saveId:c.dtlId},"\uC801\uB9BD\uAE08\uAD00\uB9AC","\uBC1C\uAE09\uB300\uC0C1\uC870\uD68C"),w=((t=r.data)==null?void 0:t.data)||r.data||[];o.issueTargets=w.map(n=>({saveItemId:n.saveItemId,targetId:n.targetId,targetNm:n.targetId,targetTypeCd:n.targetTypeCd}))}catch(r){console.warn("[PmSaveDtl.js] save-item load failed",r)}s.error=null}catch(a){console.error("[catch-info]",a),s.error=a.message}finally{s.loading=!1}}},_=f(()=>!c.dtlId);k(()=>s.tab,e=>{window._pmSaveDtlState.tab=e}),k(()=>s.tabMode2,e=>{window._pmSaveDtlState.tabMode=e});const H=e=>s.tabMode2!=="tab"||s.tab===e,K=m([{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"target",label:"\uBC1C\uAE09\uB300\uC0C1",icon:"\u{1F3AF}"},{id:"visibility",label:"\uACF5\uAC1C\uB300\uC0C1",icon:"\u{1F512}"},{id:"preview",label:"\uBBF8\uB9AC\uBCF4\uAE30",icon:"\u{1F441}"}]),Z=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["SAVE_TYPE_CD","SAVE_ISSUE_TYPE_CD","SAVE_UNIT","PROMO_STATUS","PM_PROD_TARGET","PM_ISSUE_GRADE"],{compNm:"PmSaveDtl"}),d.save_types=e.sgGetGrpCodes("SAVE_TYPE_CD"),d.save_issue_types=e.sgGetGrpCodes("SAVE_ISSUE_TYPE_CD"),d.save_units=e.sgGetGrpCodes("SAVE_UNIT"),d.promo_statuses=e.sgGetGrpCodes("PROMO_STATUS"),d.pm_prod_targets=e.sgGetGrpCodes("PM_PROD_TARGET"),d.pm_issue_grades=e.sgGetGrpCodes("PM_ISSUE_GRADE")},y=new Date,C=e=>String(e).padStart(2,"0"),J=`${y.getFullYear()}-${C(y.getMonth()+1)}-${C(y.getDate())}`,Q=`${y.getFullYear()+1}-12-31`,o=m({saveId:null,saveNm:"",saveTypeCd:"",saveType:"",saveVal:"",saveUnit:"",saveStatus:"",startDate:"",endDate:"",expireDay:"",minOrderAmt:"",remark:"",visibilityTargets:"^PUBLIC^",vendorId:"",chargeStaff:"",targetTypeCd:"PRODUCT",issueTargets:[],issueGrades:[]}),W=()=>{Object.assign(o,{saveTypeCd:"EARN",saveType:"\uAD6C\uB9E4\uC801\uB9BD",saveVal:0,saveUnit:"\uC6D0",saveStatus:"\uD65C\uC131",startDate:J,endDate:Q,expireDay:365,minOrderAmt:0})},v=m({}),X=yup.object({saveNm:yup.string().required("\uC801\uB9BD\uAE08\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),saveVal:yup.number().min(0,"\uC801\uB9BD\uAC12\uC740 0 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.").required("\uC801\uB9BD\uAC12\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")});R(async()=>{await Z(),c.active&&_.value&&W(),await M()}),k(()=>c.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(v).forEach(a=>delete v[a])}catch{}await M()}});const ee=f(()=>window.visibilityUtil.allOptions()),te=e=>{const t=window.visibilityUtil.parse(o.visibilityTargets),a=t.indexOf(e);a>=0?t.splice(a,1):t.push(e),o.visibilityTargets=window.visibilityUtil.serialize(t)},ae=f(()=>{if(!o.vendorId)return"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD";const e=b.find(t=>t.vendorId===o.vendorId);return e?e.vendorNm:"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD"}),P=(e,t)=>{o.vendorId=e;const a=b.find(i=>i.vendorId===e);a&&(o.chargeStaff=a.chargeStaff||a.ceoNm||a.vendorNm||""),s.showVendorModal=!1},h=f(()=>c.dtlId||o.saveId||null),T=f(()=>!!h.value),oe=f(()=>s.tab!=="info"&&!T.value),E=(e,t)=>{l&&l(t,"success")},N=e=>{var a,i;console.error("[handleSave]",e);const t=((i=(a=e.response)==null?void 0:a.data)==null?void 0:i.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(t,"error",0)},se=async()=>{var i,r,w;const e=s.tab;if(!T.value&&e!=="info"){l("\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e==="info"){Object.keys(v).forEach(p=>delete v[p]);try{await X.validate(o,{abortEarly:!1})}catch(p){p.inner.forEach(g=>{v[g.path]=g.message}),coUtil.cofValidationToast(v,l);return}const n=!T.value;if(!await x(n?"\uB4F1\uB85D":"\uC800\uC7A5",n?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;try{const p={...o},g=n?await boApiSvc.pmSave.create(p,"\uC801\uB9BD\uAE08\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.pmSave.update(h.value,p,"\uC801\uB9BD\uAE08\uAD00\uB9AC","\uAE30\uBCF8\uC815\uBCF4\uC800\uC7A5");if(n){const G=((r=(i=g.data)==null?void 0:i.data)==null?void 0:r.saveId)||((w=g.data)==null?void 0:w.saveId)||null;G&&(o.saveId=G)}E(g,n?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0ED\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(p){N(p)}return}if(!await x("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;let a=null;e==="visibility"?a={visibilityTargets:o.visibilityTargets}:a={};try{const n=await boApiSvc.pmSave.update(h.value,a,"\uC801\uB9BD\uAE08\uAD00\uB9AC",`${e}\uC800\uC7A5`);E(n,"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(n){N(n)}},V=Vue.toRef(s,"showVendorModal"),ie=Vue.toRef(s,"showTargetPicker"),U=f(()=>c.dtlMode==="view"),B=()=>{const e=new URLSearchParams;return e.set("page","pmSaveDtl"),e.set("id",o.saveId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},le=()=>{try{window.coExtSdk.shareKakao({title:`\uC801\uB9BD\uAE08 ${o.saveId} - ShopJoy BO`,description:o.saveNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:B()})}catch(e){l(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},re=async()=>{try{await navigator.clipboard.writeText(B()),l("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){l(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},O=D(null),I=D(!1),ne=async()=>{I.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC801\uB9BD\uAE08\uC0C1\uC138_${o.saveId}.pdf`);await window.boUtil.bofExportPdf(O.value,e,l)}finally{I.value=!1}},de=f(()=>[{key:"targetTypeCd",label:"\uAD6C\uBD84",style:"width:70px;",align:"center",fmt:e=>(d.pm_prod_targets.find(t=>t.codeValue===e)||{}).codeLabel||e||"-"},{key:"targetId",label:"\uB300\uC0C1 ID",mono:!0,cellStyle:"font-size:11px;"},{key:"targetNm",label:"\uB300\uC0C1\uBA85",fmt:e=>e||"-"},...U.value?[]:[{key:"_del",label:"\uC0AD\uC81C",style:"width:60px;",align:"center",fmt:()=>"\u2715",link:!0,cellStyle:"color:#e8587a;cursor:pointer;font-weight:700;"}]]),A={};return A.targetForm=[{key:"targetTypeCd",label:"\uB300\uC0C1 \uAD6C\uBD84",type:"select",options:()=>d.pm_prod_targets,nullLabel:null},{key:"issueGrades",label:"\uC801\uC6A9 \uD68C\uC6D0 \uB4F1\uAE09",type:"slot",name:"issueGrades",colSpan:2}],A.infoForm=[{type:"group",label:"\uC801\uB9BD\uAE08\uC815\uBCF4"},{key:"saveNm",label:"\uC801\uB9BD\uAE08\uBA85",type:"text",required:!0,placeholder:"\uC801\uB9BD\uAE08\uBA85 \uC785\uB825"},{key:"saveTypeCd",label:"\uC801\uB9BD\uAE08 \uC720\uD615",type:"select",options:()=>d.save_types},{key:"saveType",label:"\uC801\uB9BD\uC720\uD615",type:"select",options:()=>d.save_issue_types},{key:"saveVal",label:"\uC801\uB9BD\uAC12",type:"number",required:!0,placeholder:"\uC801\uB9BD\uAC12 \uC785\uB825"},{key:"saveUnit",label:"\uC801\uB9BD\uB2E8\uC704",type:"select",options:()=>d.save_units},{key:"expireDay",label:"\uC720\uD6A8\uAE30\uAC04 (\uC77C)",type:"number",placeholder:"365"},{key:"minOrderAmt",label:"\uCD5C\uC18C\uC8FC\uBB38\uAE08\uC561 (\uC6D0)",type:"number",placeholder:"0"},{key:"saveStatus",label:"\uC0C1\uD0DC",type:"select",options:()=>d.promo_statuses},{key:"startDate",label:"\uC2DC\uC791\uC77C",type:"date"},{key:"endDate",label:"\uC885\uB8CC\uC77C",type:"date"},{key:"remark",label:"\uBE44\uACE0",type:"textarea",rows:2,placeholder:"\uBE44\uACE0 \uC785\uB825"},{key:"vendorId",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"pick",placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",display:e=>{const t=b.find(a=>a.vendorId===e.vendorId);return t?t.vendorNm:""},onOpen:()=>S("vendorModal-open"),onClear:()=>{o.chargeStaff=""}},{key:"chargeStaff",label:"\uD310\uB9E4\uB2F4\uB2F9\uC790",type:"text",placeholder:"\uB2F4\uB2F9\uC790\uBA85 \uC785\uB825"}],{coUtil,codes:d,columns:A,vendors:b,showVendorModal:V,form:o,errors:v,handleBtnAction:S,handleSelectAction:F,handleGridCellAction:j,fnCallbackModal:Y,cfIsNew:_,cfSaveDisabled:oe,cfDtlMode:U,cfVisibilityOptions:ee,cfSelectedVendorNm:ae,cfIssueTargetsColumns:de,tabs:K,tab:L,tabMode2:z,showVendorModal:V,showTargetPicker:ie,showTab:H,coUtil,handleShareKakao:le,handleCopyLink:re,pdfAreaRef:O,pdfExporting:I,handleExportPdf:ne}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uC801\uB9BD\uAE08 \uC0C1\uC138' : (cfIsNew ? '\uC801\uB9BD\uAE08 \uB4F1\uB85D' : (cfDtlMode ? '\uC801\uB9BD\uAE08 \uC0C1\uC138' : '\uC801\uB9BD\uAE08 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.saveId)">
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
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uAE30\uBCF8\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <bo-form-area plain-readonly :columns="columns.infoForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="false" :show-cancel="!cfIsNew" />
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
      <bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="showVendorModal" :on-callback="fnCallbackModal" />
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
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
        :show-actions="false" :readonly="cfDtlMode" :show-cancel="!cfIsNew">
        <template #issueGrades>
          <bo-multi-check-select
            v-model="form.issueGrades"
            :options="codes.pm_issue_grades"
            placeholder="\uC804\uCCB4 \uB4F1\uAE09 (\uBBF8\uC120\uD0DD \uC2DC \uC804\uCCB4)"
            :disabled="cfDtlMode" />
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
          <button v-if="!cfDtlMode" class="btn btn-sm" style="background:#e8587a;color:#fff;border:none;padding:3px 10px;border-radius:4px;font-size:12px;"
            @click="handleBtnAction('target-add')">+ \uB300\uC0C1 \uCD94\uAC00</button>
        </div>
        <bo-grid bare :columns="cfIssueTargetsColumns" :rows="form.issueTargets" row-key="targetId"
          empty-text="[+ \uB300\uC0C1 \uCD94\uAC00] \uBC84\uD2BC\uC73C\uB85C \uB300\uC0C1\uC744 \uC120\uD0DD\uD558\uC138\uC694."
          @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
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
        :disabled="cfDtlMode" min-width="320px" />
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
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
        <div style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1a1a2e;">{{ form.saveNm || '\uC801\uB9BD\uAE08\uBA85' }}</div>
        <div style="font-size:12px;color:#aaa;margin-bottom:16px;">{{ form.startDate }} ~ {{ form.endDate }}</div>
        <div style="background:#fff;padding:12px;border-radius:6px;margin-bottom:12px;border-left:4px solid #10b981;">
          <div style="font-size:13px;color:#666;margin-bottom:4px;">
            \uC801\uB9BD\uC720\uD615:
            <span style="font-weight:700;color:#10b981;">{{ form.saveType }}</span>
          </div>
          <div style="font-size:13px;color:#666;margin-bottom:4px;">
            \uC801\uB9BD\uAC12:
            <span style="font-weight:700;color:#10b981;">{{ (form.saveVal||0).toLocaleString() }} {{ form.saveUnit || '\uC6D0' }}</span>
          </div>
          <div style="font-size:13px;color:#666;margin-bottom:4px;">
            \uC720\uD6A8\uAE30\uAC04:
            <span style="font-weight:700;">{{ form.expireDay || 365 }}\uC77C</span>
          </div>
          <div style="font-size:13px;color:#666;">
            \uCD5C\uC18C\uC8FC\uBB38\uAE08\uC561:
            <span style="font-weight:700;">{{ (form.minOrderAmt||0).toLocaleString() }}\uC6D0</span>
          </div>
        </div>
        <button class="btn btn-primary" @click="handleBtnAction('form-previewConfirm')">\uC801\uB9BD\uAE08 \uD655\uC778</button>
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
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
</div>
`};
