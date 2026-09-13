window._pmDiscntDtlState=window._pmDiscntDtlState||{tab:"info",tabMode:"tab"},window.PmDiscntDtl={name:"PmDiscntDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(l){const{ref:M,reactive:b,computed:f,onMounted:O,watch:T}=Vue,s=window.boApp.showToast,x=window.boApp.showConfirm,u=b([]),i=b({loading:!1,showVendorModal:!1,showMdModal:!1,showTargetPicker:!1,error:null,tab:window._pmDiscntDtlState.tab||"info",tabMode2:window._pmDiscntDtlState.tabMode||"tab"}),F=Vue.toRef(i,"tab"),G=Vue.toRef(i,"tabMode2"),L=Vue.toRef(i,"showTargetPicker"),r=b({discnt_types:[],discnt_val_types:[],promo_statuses:[],discnt_apply_targets:[],discnt_prod_targets:[]}),w=new Date,S=e=>String(e).padStart(2,"0"),z=`${w.getFullYear()}-${S(w.getMonth()+1)}-${S(w.getDate())}`,$=`${w.getFullYear()+1}-12-31`,a=b({discntId:null,discntNm:"",discntTypeCd:"",discntValTypeCd:"",discntValue:"",discntStatusCd:"",startDate:"",endDate:"",discntTargetCd:"",minOrderAmt:"",maxDiscntAmt:"",discntDesc:"",visibilityTargets:"^PUBLIC^",vendorId:"",chargeStaff:"",mdUserId:"",mdUserNm:"",issueTargets:[],issueGrades:[]}),j=()=>{Object.assign(a,{discntTypeCd:"PROD",discntValTypeCd:"RATE",discntValue:0,discntStatusCd:"\uD65C\uC131",startDate:z,endDate:$,discntTargetCd:"\uC804\uCCB4\uC0C1\uD488",minOrderAmt:0,maxDiscntAmt:0})},m=b({}),Y=yup.object({discntNm:yup.string().required("\uD560\uC778\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),discntValue:yup.number().min(0,"\uD560\uC778\uAC12\uC740 0 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.").required("\uD560\uC778\uAC12\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),k=f(()=>!l.dtlId),g=f(()=>l.dtlId||a.discntId||null),A=f(()=>!!g.value),H=f(()=>i.tab!=="info"&&!A.value),h=(e,o={})=>{const t=["info","detail","target","preview"];if(t.map(n=>n+"-form-save").includes(e))return oe();if(t.map(n=>n+"-form-delete").includes(e))return ae();if(t.map(n=>n+"-form-cancel").includes(e))return l.navigate("__cancelEdit__");if(t.map(n=>n+"-form-close").includes(e))return l.navigate("__closeDtl__");if(t.map(n=>n+"-form-edit").includes(e))return l.navigate("__switchToEdit__");if(e==="tab-select"){i.tab=o;return}else if(e==="tab-mode"){i.tabMode2=o;return}else{if(e==="form-visibilityToggle")return te(o);if(e==="vendorModal-open"){i.showVendorModal=!0;return}else if(e==="vendorModal-close"){i.showVendorModal=!1;return}else if(e==="form-vendorClear"){a.vendorId="",a.chargeStaff="";return}else if(e==="mdModal-open"){i.showMdModal=!0;return}else if(e==="form-mdClear"){a.mdUserId="",a.mdUserNm="";return}else if(e==="preview-confirm"){s("\uD560\uC778\uC744 \uD655\uC778\uD558\uC600\uC2B5\uB2C8\uB2E4.","success");return}else if(e==="target-add"){i.showTargetPicker=!0;return}else if(e==="target-remove"){a.issueTargets.splice(o,1);return}else if(e==="target-close"){i.showTargetPicker=!1;return}else console.warn("[handleBtnAction] unknown cmd:",e)}},q=(e,o={})=>{if(e==="vendorModal-select")return N(o.vendorId,o.vendorNm);console.warn("[handleSelectAction] unknown cmd:",e)},K=(e,o,t,n={})=>{if(o==="_del")return h("target-remove",n.rowIndex)},D=e=>{if(i.showTargetPicker=!1,!e)return;const o=String(e.selId||"");if(o){if(a.issueTargets.some(t=>t.targetId===o)){s("\uC774\uBBF8 \uCD94\uAC00\uB41C \uB300\uC0C1\uC785\uB2C8\uB2E4.","error");return}a.issueTargets.push({targetId:o,targetNm:e.selName||o})}},Z=(e,o,t)=>{if(e==="cmPopup-vendor-pick"){if(t==null){i.showVendorModal=!1;return}return N(t.selId,t.selName)}else if(e==="cmPopup-userMd-pick"){if(t==null){i.showMdModal=!1;return}a.mdUserId=t.selId||"",a.mdUserNm=t.selName||"",i.showMdModal=!1;return}else{if(e==="cmPopup-target-prod-pick")return D(t);if(e==="cmPopup-target-brand-pick")return D(t);if(e==="cmPopup-target-category-pick")return D(t);if(e==="cmPopup-vendor-target-pick")return D(t);console.warn("[fnCallbackModal] unknown popCmd:",e)}},J=async()=>{var e,o,t,n;try{const d=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"\uAD00\uB9AC","\uC870\uD68C");u.splice(0,u.length,...((o=(e=d.data)==null?void 0:e.data)==null?void 0:o.pageList)||((n=(t=d.data)==null?void 0:t.data)==null?void 0:n.list)||[])}catch(d){console.warn("[PmDiscntDtl.js] vendor load failed",d)}},I=async()=>{var e;if(await J(),!k.value){i.loading=!0;try{const o=await boApiSvc.pmDiscnt.getById(l.dtlId,"\uD560\uC778\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),t=((e=o.data)==null?void 0:e.data)||o.data;t&&Object.assign(a,t),i.error=null}catch(o){console.error("[catch-info]",o),i.error=o.message}finally{i.loading=!1}}};T(()=>i.tab,e=>{window._pmDiscntDtlState.tab=e}),T(()=>i.tabMode2,e=>{window._pmDiscntDtlState.tabMode=e});const W=e=>i.tabMode2!=="tab"||i.tab===e,Q=b([{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"detail",label:"\uC0C1\uC138\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"target",label:"\uC801\uC6A9\uB300\uC0C1",icon:"\u{1F3AF}"},{id:"preview",label:"\uBBF8\uB9AC\uBCF4\uAE30",icon:"\u{1F441}"}]),X=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["DISCNT_TYPE","DISCNT_VAL_TYPE_CD","PROMO_STATUS","DISCNT_APPLY_TARGET","DISCNT_PROD_TARGET"],{compNm:"PmDiscntDtl"}),r.discnt_types=e.sgGetGrpCodes("DISCNT_TYPE"),r.discnt_val_types=e.sgGetGrpCodes("DISCNT_VAL_TYPE_CD"),r.promo_statuses=e.sgGetGrpCodes("PROMO_STATUS"),r.discnt_apply_targets=e.sgGetGrpCodes("DISCNT_APPLY_TARGET"),r.discnt_prod_targets=e.sgGetGrpCodes("DISCNT_PROD_TARGET")};O(async()=>{await X(),l.active&&k.value&&j(),await I()}),T(()=>l.reloadTrigger,async(e,o)=>{if(!(e===o||e===0)){try{Object.keys(m).forEach(t=>delete m[t])}catch{}await I()}});const ee=f(()=>window.visibilityUtil.allOptions()),te=e=>{const o=window.visibilityUtil.parse(a.visibilityTargets),t=o.indexOf(e);t>=0?o.splice(t,1):o.push(e),a.visibilityTargets=window.visibilityUtil.serialize(o)},C=(e,o)=>{s&&s(o,"success")},P=e=>{var t,n;console.error("[handleSave]",e);const o=((n=(t=e.response)==null?void 0:t.data)==null?void 0:n.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";s&&s(o,"error",0)},oe=async()=>{var n,d,U;const e=i.tab;if(!A.value&&e!=="info"){s("\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e==="info"||e==="detail"){Object.keys(m).forEach(p=>delete m[p]);try{await Y.validate(a,{abortEarly:!1})}catch(p){p.inner.forEach(v=>{m[v.path]=v.message}),coUtil.cofValidationToast(m,s);return}const c=!A.value;if(!await x(c?"\uB4F1\uB85D":"\uC800\uC7A5",c?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;try{const p={...a},v=c?await boApiSvc.pmDiscnt.create(p,"\uD560\uC778\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.pmDiscnt.update(g.value,p,"\uD560\uC778\uAD00\uB9AC",e==="info"?"\uAE30\uBCF8\uC815\uBCF4\uC800\uC7A5":"\uC0C1\uC138\uC815\uBCF4\uC800\uC7A5");if(c){const R=((d=(n=v.data)==null?void 0:n.data)==null?void 0:d.discntId)||((U=v.data)==null?void 0:U.discntId)||null;R&&(a.discntId=R)}C(v,c?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0ED\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(p){P(p)}return}if(!await x("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;let t=null;e==="target"?t={discntTargetCd:a.discntTargetCd,visibilityTargets:a.visibilityTargets}:t={};try{const c=await boApiSvc.pmDiscnt.update(g.value,t,"\uD560\uC778\uAD00\uB9AC",`${e}\uC800\uC7A5`);C(c,"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(c){P(c)}},ae=async()=>{var o,t;if(!(k.value||!g.value||!await x("\uC0AD\uC81C",`[${a.discntNm}] \uD560\uC778\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.pmDiscnt.remove(g.value,"\uD560\uC778\uAD00\uB9AC","\uC0AD\uC81C"),s("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),l.navigate("pmDiscntMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const d=((t=(o=n.response)==null?void 0:o.data)==null?void 0:t.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";s&&s(d,"error",0)}},ie=f(()=>{if(!a.vendorId)return"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD";const e=u.find(o=>o.vendorId===a.vendorId);return e?e.vendorNm:"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD"}),N=(e,o)=>{a.vendorId=e;const t=u.find(n=>n.vendorId===e);t&&(a.chargeStaff=t.chargeStaff||t.ceoNm||t.vendorNm||""),i.showVendorModal=!1},ne=Vue.toRef(i,"showVendorModal"),se=Vue.toRef(i,"showMdModal"),B=f(()=>l.dtlMode==="view"),V=()=>{const e=new URLSearchParams;return e.set("page","pmDiscntDtl"),e.set("id",a.discntId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},le=()=>{try{window.coExtSdk.shareKakao({title:`\uD560\uC778 ${a.discntId} - ShopJoy BO`,description:a.discntNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:V()})}catch(e){s(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},re=async()=>{try{await navigator.clipboard.writeText(V()),s("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){s(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},E=M(null),_=M(!1),de=async()=>{_.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uD560\uC778\uC0C1\uC138_${a.discntId}.pdf`);await window.boUtil.bofExportPdf(E.value,e,s)}finally{_.value=!1}},ce=f(()=>[{key:"targetId",label:"\uB300\uC0C1 ID",mono:!0,cellStyle:"font-size:11px;"},{key:"targetNm",label:"\uB300\uC0C1\uBA85",fmt:e=>e||"-"},...B.value?[]:[{key:"_del",label:"\uC0AD\uC81C",style:"width:60px;",align:"center",fmt:()=>"\u2715",link:!0,cellStyle:"color:#e8587a;cursor:pointer;font-weight:700;"}]]),y={};return y.infoForm=[{key:"discntNm",label:"\uD560\uC778\uBA85",type:"text",required:!0,colSpan:2,placeholder:"\uD560\uC778\uBA85 \uC785\uB825"},{key:"discntTypeCd",label:"\uD560\uC778\uC720\uD615",type:"select",options:()=>r.discnt_types},{key:"discntValTypeCd",label:"\uD560\uC778\uBC29\uC2DD",type:"select",options:()=>r.discnt_val_types,visible:e=>e.discntTypeCd!=="SHIP_FREE"},{key:"discntValue",label:"\uD560\uC778\uAC12",type:"number",required:!0,visible:e=>e.discntTypeCd!=="SHIP_FREE"},{key:"vendorId",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"pick",placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",display:e=>{const o=u.find(t=>t.vendorId===e.vendorId);return o?o.vendorNm:""},onOpen:()=>h("vendorModal-open"),onClear:()=>{a.chargeStaff=""}},{key:"chargeStaff",label:"\uD310\uB9E4\uB2F4\uB2F9\uC790",type:"text",placeholder:"\uB2F4\uB2F9\uC790\uBA85 \uC785\uB825"},{key:"mdUserId",label:"\uB2F4\uB2F9MD",type:"pick",display:e=>e.mdUserNm,placeholder:"MD \uC120\uD0DD",nameKey:"mdUserNm",onOpen:()=>h("mdModal-open"),onClear:()=>h("form-mdClear")}],y.discntApplyForm=[{key:"minOrderAmt",label:"\uCD5C\uC18C\uC8FC\uBB38\uAE08\uC561 (\uC6D0)",type:"number",placeholder:"0"},{key:"maxDiscntAmt",label:"\uCD5C\uB300\uD560\uC778\uAE08\uC561 (\uC6D0)",type:"number",placeholder:"0 = \uBB34\uC81C\uD55C"},{key:"discntTargetCd",label:"\uBC1C\uAE09\uB300\uC0C1 \uC885\uB958",type:"select",options:()=>r.discnt_prod_targets,nullLabel:null},{key:"issueGrades",label:"\uC801\uC6A9 \uD68C\uC6D0 \uB4F1\uAE09",type:"slot",name:"issueGrades",colSpan:3}],y.discntPeriodForm=[{key:"startDate",label:"\uC2DC\uC791\uC77C",type:"date"},{key:"endDate",label:"\uC885\uB8CC\uC77C",type:"date"}],y.discntStatusForm=[{key:"discntStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>r.promo_statuses},{key:"discntDesc",label:"\uBE44\uACE0",type:"textarea",rows:2,placeholder:"\uBE44\uACE0 \uC785\uB825"}],{coUtil,columns:y,vendors:u,codes:r,form:a,errors:m,handleBtnAction:h,handleSelectAction:q,handleGridCellAction:K,fnCallbackModal:Z,cfIsNew:k,cfSaveDisabled:H,cfDtlMode:B,cfVisibilityOptions:ee,cfSelectedVendorNm:ie,cfIssueTargetsColumns:ce,tabs:Q,tab:F,tabMode2:G,showVendorModal:ne,showMdModal:se,showTargetPicker:L,showTab:W,coUtil,handleShareKakao:le,handleCopyLink:re,pdfAreaRef:E,pdfExporting:_,handleExportPdf:de}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uD560\uC778 \uC0C1\uC138' : (cfIsNew ? '\uD560\uC778 \uB4F1\uB85D' : (cfDtlMode ? '\uD560\uC778 \uC0C1\uC138' : '\uD560\uC778 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.discntId)">
  <!-- ===== \u25A0.\u25A0. \uCEE8\uD14C\uC774\uB108 \uD5E4\uB354 (\uC81C\uBAA9 = list-title) ============================= -->
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
  <!-- ===== \u25A0.\u25A0. \uD0ED \uC601\uC5ED ==================================================== -->
  <bo-tab-bar :tabs="tabs" :tab="tab" :tab-mode="tabMode2"
    @tab-select="id => handleBtnAction('tab-select', id)"
    @mode-select="m => handleBtnAction('tab-mode', m)" />
  <!-- ===== \u25A1.\u25A0. \uD0ED \uC601\uC5ED ==================================================== -->
  <!-- ===== \u25A0.\u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <!-- ===== \u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
    <div class="dtl-pane" v-show="showTab('info')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uAE30\uBCF8\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <bo-form-area plain-readonly :columns="columns.infoForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
      <bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="showVendorModal" :on-callback="fnCallbackModal" />
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="!cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('info-form-edit')"
        :save-click="() => handleBtnAction('info-form-save')"
        :delete-click="() => handleBtnAction('info-form-delete')"
        :cancel-click="() => handleBtnAction('info-form-cancel')"
        :close-click="() => handleBtnAction('info-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uAE30\uBCF8\uC815\uBCF4 \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
    <!-- ===== \u25A0.\u25A0. \uC0C1\uC138\uC815\uBCF4 ================================================== -->
    <div class="dtl-pane" v-show="showTab('detail')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uC0C1\uC138\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uACF5\uAC1C\uB300\uC0C1 ================================================ -->
      <div style="margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid #e8e8e8;">
        <h3 style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;">\u{1F512} \uACF5\uAC1C\uB300\uC0C1</h3>
        <div style="font-size:12px;font-weight:700;color:#888;margin-bottom:8px;">\uD558\uB098\uB77C\uB3C4 \uD574\uB2F9\uD558\uBA74 \uB178\uCD9C</div>
        <bo-multi-check-select v-model="form.visibilityTargets" :options="cfVisibilityOptions"
          separator="^" wrap empty-value="^NONE^" placeholder="\uC804\uCCB4 \uACF5\uAC1C" all-label="\uC804\uCCB4 \uACF5\uAC1C"
          :disabled="cfDtlMode" min-width="320px" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD560\uC778\uC801\uC6A9 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
      <div style="margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid #e8e8e8;">
        <h3 style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;">\u{1F4B0} \uD560\uC778\uC801\uC6A9</h3>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area :columns="columns.discntApplyForm" :form="form" :errors="errors"
          :cols="3" compact :show-actions="false" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAE30\uAC04\uC124\uC815 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
      <div style="margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid #e8e8e8;">
        <h3 style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;">\u{1F4C5} \uAE30\uAC04\uC124\uC815</h3>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area :columns="columns.discntPeriodForm" :form="form" :errors="errors"
          :cols="3" compact :show-actions="false" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uD0DC \uBC0F \uBE44\uACE0 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ========================== -->
      <div>
        <h3 style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;">\u2699\uFE0F \uC0C1\uD0DC \uBC0F \uBE44\uACE0</h3>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area :columns="columns.discntStatusForm" :form="form" :errors="errors"
          :cols="3" compact :show-actions="false" />
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="!cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('detail-form-edit')"
        :save-click="() => handleBtnAction('detail-form-save')"
        :delete-click="() => handleBtnAction('detail-form-delete')"
        :cancel-click="() => handleBtnAction('detail-form-cancel')"
        :close-click="() => handleBtnAction('detail-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uC0C1\uC138\uC815\uBCF4 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uC801\uC6A9\uB300\uC0C1 ================================================== -->
    <div class="dtl-pane" v-show="showTab('target')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F3AF} \uC801\uC6A9\uB300\uC0C1</div>
      <bo-form-area plain-readonly :columns="columns.discntApplyForm" :form="form" :errors="errors" :cols="3" compact
        :show-actions="false" :readonly="cfDtlMode">
        <template #issueGrades>
          <bo-multi-check-select
            v-model="form.issueGrades"
            :options="[{value:'\uC77C\uBC18',label:'\uC77C\uBC18'},{value:'\uC2E4\uBC84',label:'\uC2E4\uBC84'},{value:'\uACE8\uB4DC',label:'\uACE8\uB4DC'},{value:'VIP',label:'VIP'}]"
            placeholder="\uC804\uCCB4 \uB4F1\uAE09 (\uBBF8\uC120\uD0DD \uC2DC \uC804\uCCB4)"
            :disabled="cfDtlMode" />
          <span style="font-size:12px;color:#aaa;margin-top:4px;display:block;">\uC120\uD0DD\uD558\uC9C0 \uC54A\uC73C\uBA74 \uC804\uCCB4 \uB4F1\uAE09\uC5D0 \uC801\uC6A9</span>
        </template>
      </bo-form-area>
      <!-- \uBC1C\uAE09\uB300\uC0C1 \uBAA9\uB85D \uCD94\uAC00/\uC0AD\uC81C -->
      <div style="margin-top:12px;" v-if="form.discntTargetCd !== 'ALL_PROD'">
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
      <div v-else style="margin-top:12px;padding:10px 14px;background:#f0f7ff;border:1px solid #c5d9f1;border-radius:6px;font-size:12px;color:#1565c0;">
        \u2713 \uC804\uCCB4 \uC0C1\uD488\uC5D0 \uC774 \uD560\uC778\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="!cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('target-form-edit')"
        :save-click="() => handleBtnAction('target-form-save')"
        :delete-click="() => handleBtnAction('target-form-delete')"
        :cancel-click="() => handleBtnAction('target-form-cancel')"
        :close-click="() => handleBtnAction('target-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uC801\uC6A9\uB300\uC0C1 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <div class="dtl-pane" v-show="showTab('preview')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F441} \uBBF8\uB9AC\uBCF4\uAE30</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:20px;border:1px solid #e8e8e8;max-width:600px;">
        <div style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1a1a2e;">{{ form.discntNm || '\uD560\uC778\uBA85' }}</div>
        <div style="font-size:12px;color:#aaa;margin-bottom:16px;">{{ form.startDate }} ~ {{ form.endDate }}</div>
        <div style="background:#fff;padding:12px;border-radius:6px;margin-bottom:12px;border-left:4px solid #e8587a;">
          <div style="font-size:13px;color:#666;margin-bottom:4px;">
            \uD560\uC778\uC720\uD615:
            <span style="font-weight:700;color:#e8587a;">{{ form.discntTypeCd }}</span>
            <span v-if="form.discntValTypeCd" style="font-weight:700;color:#e8587a;margin-left:4px;">({{ form.discntValTypeCd }})</span>
          </div>
          <div v-if="form.discntTypeCd !== 'SHIP_FREE'" style="font-size:13px;color:#666;margin-bottom:4px;">
            \uD560\uC778\uAC12:
            <span style="font-weight:700;color:#e8587a;">
              {{ form.discntValTypeCd === 'RATE' ? (form.discntValue + '%') : coUtil.cofWon(form.discntValue) }}
            </span>
          </div>
          <div style="font-size:13px;color:#666;">
            \uCD5C\uC18C\uC8FC\uBB38\uAE08\uC561:
            <span style="font-weight:700;">{{ (form.minOrderAmt||0).toLocaleString() }}\uC6D0</span>
          </div>
        </div>
        <div v-if="form.maxDiscntAmt > 0" style="font-size:12px;color:#888;padding:8px;background:#fff7e6;border-radius:6px;margin-bottom:12px;">
          \u26A0\uFE0F \uCD5C\uB300\uD560\uC778\uAE08\uC561: {{ (form.maxDiscntAmt||0).toLocaleString() }}\uC6D0
        </div>
        <button class="btn btn-primary" @click="handleBtnAction('preview-confirm')">\uD560\uC778 \uD655\uC778</button>
      </div>
      <bo-form-actions v-if="active && cfDtlMode" :readonly="true" :show-delete="!cfIsNew"
        :edit-click="() => handleBtnAction('preview-form-edit')"
        :save-click="() => handleBtnAction('preview-form-save')"
        :delete-click="() => handleBtnAction('preview-form-delete')"
        :cancel-click="() => handleBtnAction('preview-form-cancel')"
        :close-click="() => handleBtnAction('preview-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
  </div>
  <!-- ===== \u25A1.\u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
<!-- \uBC1C\uAE09\uB300\uC0C1 \uD53C\uCEE4 \uBAA8\uB2EC -->
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.discntTargetCd==='SELECTED_PROD')" popup-cmd="cmPopup-target-prod-pick" popup-code="prodByCategory" :init-selected-ids="form.issueTargets.map(t => t.targetId)" :on-callback="fnCallbackModal" />
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.discntTargetCd==='CATEGORY')" popup-cmd="cmPopup-target-category-pick" popup-code="category" :on-callback="fnCallbackModal" />
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.discntTargetCd==='BRAND')" popup-cmd="cmPopup-target-brand-pick" popup-code="brand" :on-callback="fnCallbackModal" />
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.discntTargetCd==='VENDOR')" popup-cmd="cmPopup-vendor-target-pick" popup-code="vendor" :show="true" :on-callback="fnCallbackModal" />
</bo-container>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20) =============================== -->
</div>
`};
