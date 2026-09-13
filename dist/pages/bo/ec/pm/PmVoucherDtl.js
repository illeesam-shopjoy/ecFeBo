window._pmVoucherDtlState=window._pmVoucherDtlState||{tab:"info",tabMode:"tab"},window.PmVoucherDtl={name:"PmVoucherDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(l){const{ref:M,reactive:p,computed:d,onMounted:U,watch:x}=Vue,n=window.boApp.showToast,w=window.boApp.showConfirm,u=p([]),a=p({loading:!1,showVendorModal:!1,error:null,tab:window._pmVoucherDtlState.tab||"info",tabMode2:window._pmVoucherDtlState.tabMode||"tab",previewTab:"barcode",barcodeContainer:null,qrcodeContainer:null,snsMsg:""}),$=Vue.toRef(a,"tab"),j=Vue.toRef(a,"tabMode2"),D=p({promo_statuses:[]}),A=(e,t={})=>{if(e==="form-save")return le();if(e==="form-cancel")return l.navigate("__cancelEdit__");if(e==="form-close")return l.navigate("__closeDtl__");if(e==="form-edit")return l.navigate("__switchToEdit__");if(e==="form-delete")return re();if(e==="tab-select")return ee(t);if(e==="tab-mode"){a.tabMode2=t;return}else{if(e==="previewTab-select")return te(t);if(e==="vendorModal-open"){a.showVendorModal=!0;return}else if(e==="vendorModal-close"){a.showVendorModal=!1;return}else if(e==="form-vendorClear"){o.vendorId="",o.chargeStaff="";return}else{if(e==="snsModal-open")return ie(t);if(e==="snsModal-close"){c.show=!1;return}else{if(e==="snsModal-send")return ae();console.warn("[handleBtnAction] unknown cmd:",e)}}}},J=(e,t={})=>{if(e==="vendorModal-select")return N(t.vendorId,t.vendorNm);console.warn("[handleSelectAction] unknown cmd:",e)},q=(e,t,i)=>{if(e==="cmPopup-vendor-pick"){if(i==null){a.showVendorModal=!1;return}return N(i.selId,i.selName)}else if(e==="sns"){if(i==null){c.show=!1;return}return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},Q=async()=>{var e,t,i,r;try{const s=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"\uAD00\uB9AC","\uC870\uD68C");u.splice(0,u.length,...((t=(e=s.data)==null?void 0:e.data)==null?void 0:t.pageList)||((r=(i=s.data)==null?void 0:i.data)==null?void 0:r.list)||[])}catch(s){console.warn("[PmVoucherDtl.js] vendor load failed",s)}},z=async()=>{var e;if(await Q(),!h.value){a.loading=!0;try{const t=await boApiSvc.pmVoucher.getById(l.dtlId,"\uBC14\uC6B0\uCC98\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),i=((e=t.data)==null?void 0:e.data)||t.data;i&&Object.assign(o,{...i}),o.startDate||(o.startDate=I),o.endDate||(o.endDate=V),a.error=null}catch(t){console.error("[catch-info]",t),a.error=t.message}finally{a.loading=!1}}},h=d(()=>!l.dtlId);x(()=>a.tab,e=>{window._pmVoucherDtlState.tab=e}),x(()=>a.tabMode2,e=>{window._pmVoucherDtlState.tabMode=e});const F=e=>a.tabMode2!=="tab"||a.tab===e,O=p([{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"detail",label:"\uC0C1\uC138\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"issueHist",label:"\uBC1C\uAE09\uB0B4\uC5ED",icon:"\u{1F4CA}"},{id:"useHist",label:"\uC0AC\uC6A9\uB0B4\uC5ED",icon:"\u2705"},{id:"preview",label:"\uBBF8\uB9AC\uBCF4\uAE30",icon:"\u{1F441}"}]),H=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["PROMO_STATUS"],{compNm:"PmVoucherDtl"}),D.promo_statuses=e.sgGetGrpCodes("PROMO_STATUS")},o=p({voucherId:null,voucherNm:"",voucherAmt:"",salePrice:"",issueQty:"",soldQty:"",voucherStatus:"",startDate:"",endDate:"",remark:"",vendorId:"",chargeStaff:""}),G=()=>{Object.assign(o,{voucherAmt:0,salePrice:0,issueQty:0,soldQty:0,voucherStatus:"\uD65C\uC131",startDate:I,endDate:V})},v=p({}),b=new Date,S=e=>String(e).padStart(2,"0"),I=`${b.getFullYear()}-${S(b.getMonth()+1)}-${S(b.getDate())}`,V=`${b.getFullYear()+1}-12-31`,Y=yup.object({voucherNm:yup.string().required("\uC0C1\uD488\uAD8C\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),voucherAmt:yup.number().min(1e3,"\uC561\uBA74\uAC00\uB294 1,000\uC6D0 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.").required("\uC561\uBA74\uAC00\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),salePrice:yup.number().min(0).required("\uD310\uB9E4\uAC00\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),issueQty:yup.number().min(1,"\uBC1C\uD589\uB9E4\uC218\uB294 1\uAC1C \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.").required("\uBC1C\uD589\uB9E4\uC218\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.")});U(async()=>{await H(),l.active&&h.value&&G(),await z()}),x(()=>l.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(v).forEach(i=>delete v[i])}catch{}await z()}});const K=d(()=>o.cfIssuedList||[]),W=d(()=>o.cfUsedList||[]),Z=()=>{if(a.barcodeContainer&&typeof JsBarcode!="undefined")try{P.value.innerHTML="",JsBarcode(a.barcodeContainer,o.voucherId?`V${o.voucherId}${S(o.soldQty||0)}`:"SAMPLE",{format:"CODE128",width:2,height:60,displayValue:!0})}catch{}},X=()=>{if(a.qrcodeContainer&&typeof QRCode!="undefined")try{C.value.innerHTML="",new QRCode(a.qrcodeContainer,{text:o.voucherId?`https://shopjoy.com/voucher/${o.voucherId}`:"https://shopjoy.com/voucher/sample",width:150,height:150,colorDark:"#222222",colorLight:"#ffffff"})}catch{}},ee=e=>{a.tab=e,e==="preview"&&Vue.nextTick(()=>{Z(),X()})},te=e=>{a.previewTab=e},oe=d(()=>{if(!o.vendorId)return"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD";const e=u.find(t=>t.vendorId===o.vendorId);return e?e.vendorNm:"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD"}),N=(e,t)=>{o.vendorId=e;const i=u.find(r=>r.vendorId===e);i&&(o.chargeStaff=i.chargeStaff||i.ceoNm||i.vendorNm||""),a.showVendorModal=!1},c=p({show:!1,channel:"kakao"}),ie=e=>{a.snsMsg=`${o.voucherNm}
\uC561\uBA74\uAC00: ${(o.voucherAmt||0).toLocaleString()}\uC6D0
\uD310\uB9E4\uAC00: ${(o.salePrice||0).toLocaleString()}\uC6D0`,c.show=!0,c.channel=e},ae=async()=>{var t,i;if(await w("SNS\uC804\uC1A1",`${o.voucherNm}\uC744 ${c.channel}\uB85C \uC804\uC1A1\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)){c.show=!1;try{const r=await boApiSvc.pmVoucher.sendSns(o.voucherId,{channel:c.channel,message:a.snsMsg},"\uBC14\uC6B0\uCC98\uAD00\uB9AC","\uC804\uC1A1");n&&n("SNS\uC804\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(r){console.error("[catch-info]",r);const s=((i=(t=r.response)==null?void 0:t.data)==null?void 0:i.message)||r.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";n&&n(s,"error",0)}}},re=async()=>{var t,i;if(!(h.value||!o.voucherId||!await w("\uC0AD\uC81C",`${o.voucherNm} \uC0C1\uD488\uAD8C\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.pmVoucher.remove(o.voucherId,"\uBC14\uC6B0\uCC98\uAD00\uB9AC","\uC0AD\uC81C"),n("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),l.navigate("pmVoucherMng",{reload:!0})}catch(r){console.error("[catch-info]",r);const s=((i=(t=r.response)==null?void 0:t.data)==null?void 0:i.message)||r.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";n&&n(s,"error",0)}},_=d(()=>l.dtlId||o.voucherId||null),m=d(()=>!!_.value),L=d(()=>{const e=a.tab;return e==="info"?!1:m.value?e!=="detail":!0}),ne=(e,t)=>{n&&n(t,"success")},se=e=>{var i,r;console.error("[handleSave]",e);const t=((r=(i=e.response)==null?void 0:i.data)==null?void 0:r.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";n&&n(t,"error",0)},le=async()=>{var r,s,B;const e=a.tab;if(L.value){!m.value&&e!=="info"&&n("\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e!=="info"&&e!=="detail")return;Object.keys(v).forEach(f=>delete v[f]);try{await Y.validate(o,{abortEarly:!1})}catch(f){f.inner.forEach(g=>{v[g.path]=g.message}),coUtil.cofValidationToast(v,n);return}const t=!m.value;if(await w(t?"\uB4F1\uB85D":"\uC800\uC7A5",t?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const f={...o},g=t?await boApiSvc.pmVoucher.create(f,"\uBC14\uC6B0\uCC98\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.pmVoucher.update(_.value,f,"\uBC14\uC6B0\uCC98\uAD00\uB9AC",e==="info"?"\uAE30\uBCF8\uC815\uBCF4\uC800\uC7A5":"\uC0C1\uC138\uC815\uBCF4\uC800\uC7A5");if(t){const R=((s=(r=g.data)==null?void 0:r.data)==null?void 0:s.voucherId)||((B=g.data)==null?void 0:B.voucherId)||null;R&&(o.voucherId=R)}ne(g,t?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0ED\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(f){se(f)}},P=Vue.toRef(a,"barcodeContainer"),he=Vue.toRef(a,"previewTab"),C=Vue.toRef(a,"qrcodeContainer"),de=Vue.toRef(a,"showVendorModal"),ce=Vue.toRef(a,"snsMsg"),fe=d(()=>l.dtlMode==="view"),T=()=>{const e=new URLSearchParams;return e.set("page","pmVoucherDtl"),e.set("id",o.voucherId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},pe=()=>{try{window.coExtSdk.shareKakao({title:`\uC0C1\uD488\uAD8C ${o.voucherId} - ShopJoy BO`,description:o.remark||o.voucherNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:T()})}catch(e){n(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},ve=async()=>{try{await navigator.clipboard.writeText(T()),n("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){n(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},E=M(null),k=M(!1),ue=async()=>{k.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC0C1\uD488\uAD8C\uC0C1\uC138_${o.voucherId}.pdf`);await window.boUtil.bofExportPdf(E.value,e,n)}finally{k.value=!1}},y={};return y.issueGrid=[{key:"issueNo",label:"\uBC1C\uAE09\uBC88\uD638"},{key:"memberNm",label:"\uD68C\uC6D0\uBA85"},{key:"issueDate",label:"\uBC1C\uAE09\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"issuePrice",label:"\uBC1C\uAE09\uAC00\uACA9",style:"text-align:right;",fmt:e=>coUtil.cofWon(e)},{key:"expiryDate",label:"\uB9CC\uB8CC\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"status",label:"\uC0C1\uD0DC",badge:e=>e.status==="\uC815\uC0C1"?"badge-green":e.status==="\uC0AC\uC6A9\uC644\uB8CC"?"badge-blue":(e.status==="\uB9CC\uB8CC\uB428","badge-gray")}],y.usageGrid=[{key:"usageNo",label:"\uC0AC\uC6A9\uBC88\uD638"},{key:"issueNo",label:"\uBC1C\uAE09\uBC88\uD638"},{key:"memberNm",label:"\uD68C\uC6D0\uBA85"},{key:"orderId",label:"\uC8FC\uBB38ID"},{key:"useAmount",label:"\uC0AC\uC6A9\uAE08\uC561",style:"text-align:right;",fmt:e=>coUtil.cofWon(e)},{key:"useDate",label:"\uC0AC\uC6A9\uC77C\uC2DC",fmt:e=>e?String(e).slice(0,16):"-"}],y.infoForm=[{type:"group",label:"\uC0C1\uD488\uAD8C\uC815\uBCF4"},{key:"voucherNm",label:"\uC0C1\uD488\uAD8C\uBA85",type:"text",required:!0,placeholder:"\uC608: ShopJoy 10,000\uC6D0 \uC0C1\uD488\uAD8C"},{key:"voucherAmt",label:"\uC561\uBA74\uAC00 (\uC6D0)",type:"number",required:!0,placeholder:"0"},{key:"salePrice",label:"\uD310\uB9E4\uAC00 (\uC6D0)",type:"number",required:!0,placeholder:"0"},{key:"issueQty",label:"\uBC1C\uD589\uB9E4\uC218 (\uAC1C)",type:"number",required:!0,placeholder:"0"},{key:"soldQty",label:"\uD310\uB9E4\uB9E4\uC218 (\uAC1C)",type:"number",placeholder:"0"},{key:"voucherStatus",label:"\uC0C1\uD0DC",type:"select",options:()=>D.promo_statuses},{key:"startDate",label:"\uD310\uB9E4 \uC2DC\uC791\uC77C",type:"date"},{key:"endDate",label:"\uD310\uB9E4 \uC885\uB8CC\uC77C",type:"date"},{key:"remark",label:"\uBE44\uACE0",type:"textarea",rows:4,placeholder:"\uC0C1\uD488\uAD8C \uC124\uBA85 \uB610\uB294 \uD2B9\uC774\uC0AC\uD56D \uC785\uB825"},{key:"vendorId",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"pick",placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",display:e=>{const t=u.find(i=>i.vendorId===e.vendorId);return t?t.vendorNm:""},onOpen:()=>A("vendorModal-open"),onClear:()=>{o.chargeStaff=""}},{key:"chargeStaff",label:"\uD310\uB9E4\uB2F4\uB2F9\uC790",type:"text",placeholder:"\uB2F4\uB2F9\uC790\uBA85 \uC785\uB825"}],{coUtil,columns:y,vendors:u,showVendorModal:de,form:o,errors:v,snsModal:c,snsMsg:ce,handleShareKakao:pe,handleCopyLink:ve,pdfAreaRef:E,pdfExporting:k,handleExportPdf:ue,handleBtnAction:A,handleSelectAction:J,fnCallbackModal:q,cfIsNew:h,cfHasId:m,cfSaveDisabled:L,cfDtlMode:fe,cfIssuedList:K,cfUsedList:W,cfSelectedVendorNm:oe,tabs:O,tab:$,tabMode2:j,barcodeContainer:P,qrcodeContainer:C,showTab:F}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uC601\uC5ED (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uCEE8\uD14C\uC774\uB108\uB85C) ===================== -->
<bo-container :title="!active ? '\uC0C1\uD488\uAD8C \uC0C1\uC138' : (cfIsNew ? '\uC0C1\uD488\uAD8C \uB4F1\uB85D' : (cfDtlMode ? '\uC0C1\uD488\uAD8C \uC0C1\uC138' : '\uC0C1\uD488\uAD8C \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.voucherId)">
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
  <!-- ===== \u25A0.\u25A0. \uCEE8\uD14C\uC774\uB108 \uD5E4\uB354 (\uC81C\uBAA9 = list-title, page-title \uC544\uB2D8 \u2192 \uD3F0\uD2B8 \uCD95\uC18C) ===== -->
  <!-- ===== \u25A0.\u25A0. \uD0ED\uBC14 ==================================================== -->
  <bo-tab-bar :tabs="tabs" :tab="tab" :tab-mode="tabMode2"
    @tab-select="id => handleBtnAction('tab-select', id)"
    @mode-select="m => handleBtnAction('tab-mode', m)" />
  <!-- ===== \u25A1.\u25A0. \uD0ED\uBC14 ==================================================== -->
  <!-- ===== \u25A0.\u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <!-- ===== \u25A0. \uAE30\uBCF8\uC815\uBCF4 \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) =============================== -->
    <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
    <div class="dtl-pane" v-if="showTab('info')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\uAE30\uBCF8\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================== -->
      <bo-form-area plain-readonly :columns="columns.infoForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
      <!-- ===== \u25A1.\u25A1. \uD3FC \uC601\uC5ED ================================================== -->
      <!-- ===== \u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD \uBAA8\uB2EC ============================================ -->
      <bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="showVendorModal" :on-callback="fnCallbackModal" />
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        :save-label="cfIsNew ? '\uB4F1\uB85D' : '\uC800\uC7A5'"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694. (\uBC1C\uAE09/\uC0AC\uC6A9/\uBBF8\uB9AC\uBCF4\uAE30 \uD0ED\uC740 \uC870\uD68C \uC804\uC6A9)' : ''"
        :edit-click="() => handleBtnAction('form-edit')"
        :save-click="() => handleBtnAction('form-save')"
        :delete-click="() => handleBtnAction('form-delete')"
        :cancel-click="() => handleBtnAction('form-cancel')"
        :close-click="() => handleBtnAction('form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD \uBAA8\uB2EC ============================================ -->
    <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
    <!-- ===== \u25A0. \uBBF8\uB9AC\uBCF4\uAE30 \uD0ED ================================================== -->
    <div class="dtl-pane" v-if="showTab('preview')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\uBBF8\uB9AC\uBCF4\uAE30</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:20px;">
        <!-- ===== \u25A0.\u25A0.\u25A0. \uC88C\uCE21 \uCEEC\uB7FC =============================================== -->
        <div style="display:flex;flex-direction:column;gap:16px;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC14\uCF54\uB4DC =============================================== -->
          <div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px;position:relative;background:linear-gradient(to right, #fff 0%, rgba(232,88,122,0.02) 100%);">
            <div style="position:absolute;top:-20px;right:-20px;font-size:60px;opacity:0.04;transform:rotate(-15deg);pointer-events:none;">
              \u{1F4B3}
            </div>
            <div style="font-size:12px;font-weight:600;color:#333;background:#f5f5f5;padding:8px;border-radius:4px;width:100%;text-align:center;position:relative;z-index:1;">
              \u{1F4CA} \uBC14\uCF54\uB4DC
            </div>
            <div style="text-align:center;font-size:10px;color:#666;line-height:1.5;width:100%;position:relative;z-index:1;">
              <div style="font-weight:600;margin-bottom:4px;color:#222;">{{ form.voucherNm }}</div>
              <div style="font-size:9px;">\u{1F4B3} V{{ form.voucherId || 'SAMPLE' }}</div>
              <div style="font-weight:600;color:#e8587a;margin:4px 0;">{{ (form.voucherAmt||0).toLocaleString() }}\uC6D0</div>
              <div style="font-size:9px;">\uD310\uB9E4\uAC00: {{ (form.salePrice||0).toLocaleString() }}\uC6D0</div>
              <div style="font-size:9px;color:#999;">\u{1F4C5} {{ form.startDate }} ~ {{ form.endDate }}</div>
            </div>
            <div ref="barcodeContainer" style="display:flex;align-items:center;justify-content:center;background:#fff;padding:8px;border:1px solid #ddd;border-radius:4px;width:100%;position:relative;z-index:1;">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:45px;font-weight:900;color:#e8587a;opacity:0.05;pointer-events:none;white-space:nowrap;letter-spacing:3px;">
                ShopJoy
              </div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. SNS\uC804\uC1A1\uD615\uD0DC =========================================== -->
          <div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px;position:relative;overflow:hidden;">
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-25deg);font-size:70px;font-weight:900;color:#e8587a;opacity:0.08;pointer-events:none;white-space:nowrap;letter-spacing:6px;z-index:0;">
              ShopJoy
            </div>
            <div style="font-size:12px;font-weight:600;color:#333;background:#f5f5f5;padding:8px;border-radius:4px;width:100%;text-align:center;position:relative;z-index:1;">
              \u{1F4AC} SNS\uC804\uC1A1\uD615\uD0DC (\uCE74\uD1A1)
            </div>
            <div style="background:#fff;padding:12px;border:1px solid #e0e0e0;border-radius:6px;text-align:left;font-size:10px;line-height:1.6;color:#333;width:100%;position:relative;z-index:1;">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:40px;font-weight:900;color:#e8587a;opacity:0.05;pointer-events:none;white-space:nowrap;letter-spacing:3px;">
                ShopJoy
              </div>
              <div style="font-weight:600;margin-bottom:6px;">\u{1F381} {{ form.voucherNm }}</div>
              <div style="color:#666;margin:3px 0;">\uC0C1\uD488\uAD8C\uBC88\uD638: V{{ form.voucherId || 'SAMPLE' }}</div>
              <div style="color:#666;margin:3px 0;">\uC561\uBA74\uAC00: {{ (form.voucherAmt||0).toLocaleString() }}\uC6D0</div>
              <div style="color:#666;margin:3px 0;">\uD310\uB9E4\uAC00: {{ (form.salePrice||0).toLocaleString() }}\uC6D0</div>
              <div style="color:#666;margin:3px 0;">\uC720\uD6A8\uAE30\uAC04: {{ form.startDate }} ~ {{ form.endDate }}</div>
              <div style="color:#999;font-size:9px;margin-top:6px;">ShopJoy\uC5D0\uC11C \uD655\uC778\uD558\uAE30 &gt;</div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC774\uBA54\uC77C \uB0B4\uC6A9 ============================================ -->
          <div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px;">
            <div style="font-size:12px;font-weight:600;color:#333;background:#f5f5f5;padding:8px;border-radius:4px;width:100%;text-align:center;">
              \u{1F4E7} \uC774\uBA54\uC77C \uB0B4\uC6A9
            </div>
            <div style="background:linear-gradient(180deg, #f9f9f9 0%, #fafbfc 100%);padding:12px;border:1px solid #e8e8e8;border-radius:6px;text-align:left;font-size:9px;line-height:1.6;color:#333;width:100%;position:relative;overflow:hidden;">
              <div style="position:absolute;top:-10px;right:-10px;font-size:50px;opacity:0.03;transform:rotate(20deg);">\u{1F4E7}</div>
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:40px;font-weight:900;color:#e8587a;opacity:0.05;pointer-events:none;white-space:nowrap;letter-spacing:3px;">
                ShopJoy
              </div>
              <div style="background:linear-gradient(135deg, #e8587a 0%, #ff7a9a 100%);color:#fff;padding:8px;border-radius:4px;margin:-12px -12px 8px -12px;text-align:center;position:relative;z-index:1;">
                <div style="font-weight:600;font-size:10px;">\u{1F6CD}\uFE0F ShopJoy \uC0C1\uD488\uAD8C \uC54C\uB9BC</div>
              </div>
              <div style="position:relative;z-index:1;">
                <div style="font-weight:600;margin-bottom:8px;">\uC81C\uBAA9: {{ form.voucherNm }}</div>
                <div style="color:#666;margin:4px 0;">\uBCF4\uB0B8 \uC0AC\uB78C: ShopJoy (noreply@shopjoy.com)</div>
                <div style="color:#666;margin:6px 0;">\uC548\uB155\uD558\uC138\uC694, \uC1A1\uC9C0\uC120 \uD68C\uC6D0\uB2D8!</div>
                <div style="color:#666;margin:6px 0;">ShopJoy\uC5D0\uC11C \uD2B9\uBCC4\uD55C \uC0C1\uD488\uAD8C\uC744 \uC900\uBE44\uD588\uC2B5\uB2C8\uB2E4.</div>
                <div style="background:#fff;padding:8px;border:2px solid #e8587a;border-radius:4px;margin:8px 0;">
                  <div style="font-weight:600;color:#e8587a;margin-bottom:4px;">\u{1F381} {{ form.voucherNm }}</div>
                  <div style="color:#666;font-size:8px;margin:3px 0;">\uC0C1\uD488\uAD8C\uBC88\uD638: V{{ form.voucherId || 'SAMPLE' }}</div>
                  <div style="color:#666;font-size:8px;margin:3px 0;">\uC561\uBA74\uAC00: {{ (form.voucherAmt||0).toLocaleString() }}\uC6D0</div>
                  <div style="color:#666;font-size:8px;margin:3px 0;">\uD310\uB9E4\uAC00: {{ (form.salePrice||0).toLocaleString() }}\uC6D0</div>
                  <div style="color:#666;font-size:8px;margin:3px 0;">\uC720\uD6A8\uAE30\uAC04: {{ form.startDate }} ~ {{ form.endDate }}</div>
                </div>
                <div style="color:#666;margin:6px 0;">\uC9C0\uAE08 \uBC14\uB85C ShopJoy\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694!</div>
                <div style="color:#999;font-size:8px;margin-top:8px;text-align:center;padding-top:8px;border-top:1px solid #e8e8e8;">
                  \xA9 2026 ShopJoy | \uBB38\uC758: 010-1234-5678 | demo@mail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0. \uC6B0\uCE21 \uCEEC\uB7FC =============================================== -->
        <div style="display:flex;flex-direction:column;gap:16px;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. QR\uCF54\uB4DC ============================================== -->
          <div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px;position:relative;background:linear-gradient(135deg, #fff 0%, rgba(232,88,122,0.01) 100%);">
            <div style="position:absolute;bottom:-15px;left:-15px;font-size:50px;opacity:0.05;transform:rotate(-20deg);">\u{1F4F1}</div>
            <div style="font-size:12px;font-weight:600;color:#333;background:#f5f5f5;padding:8px;border-radius:4px;width:100%;text-align:center;position:relative;z-index:1;">
              \u{1F4F1} QR\uCF54\uB4DC
            </div>
            <div style="text-align:center;font-size:10px;color:#666;line-height:1.5;width:100%;position:relative;z-index:1;">
              <div style="font-weight:600;margin-bottom:4px;color:#222;">{{ form.voucherNm }}</div>
              <div style="font-size:9px;">\u{1F4B3} V{{ form.voucherId || 'SAMPLE' }}</div>
              <div style="font-weight:600;color:#e8587a;margin:4px 0;">{{ (form.voucherAmt||0).toLocaleString() }}\uC6D0</div>
              <div style="font-size:9px;">\uD310\uB9E4\uAC00: {{ (form.salePrice||0).toLocaleString() }}\uC6D0</div>
              <div style="font-size:9px;color:#999;">\u{1F4E6} {{ (form.issueQty||0).toLocaleString() }}\uAC1C</div>
            </div>
            <div ref="qrcodeContainer" style="display:flex;align-items:center;justify-content:center;background:#fff;padding:8px;border:2px solid #e8587a;border-radius:4px;width:100%;position:relative;z-index:1;">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:40px;font-weight:900;color:#e8587a;opacity:0.05;pointer-events:none;white-space:nowrap;letter-spacing:3px;">
                ShopJoy
              </div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC885\uC774\uD615\uD0DC ============================================== -->
          <div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px;">
            <div style="font-size:12px;font-weight:600;color:#333;background:#f5f5f5;padding:8px;border-radius:4px;width:100%;text-align:center;">
              \u{1F39F} \uC885\uC774\uD615\uD0DC
            </div>
            <div style="width:100%;aspect-ratio:2/1.2;background:linear-gradient(135deg, #fff8f9 0%, #fff0f4 100%);border:2px solid #e8587a;border-radius:8px;padding:12px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 2px 8px rgba(232,88,122,0.1);position:relative;overflow:hidden;">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:35px;font-weight:900;color:#e8587a;opacity:0.06;pointer-events:none;white-space:nowrap;letter-spacing:3px;">
                ShopJoy
              </div>
              <div style="position:absolute;top:4px;right:4px;font-size:7px;color:#e8587a;opacity:0.3;font-weight:700;letter-spacing:1px;">
                VOUCHER
              </div>
              <div>
                <div style="font-size:8px;color:#999;">\u{1F4B3} ShopJoy</div>
                <div style="font-size:11px;font-weight:700;color:#e8587a;margin:2px 0;">{{ form.voucherNm }}</div>
              </div>
              <div style="text-align:center;background:rgba(255,255,255,0.5);padding:4px;border-radius:4px;">
                <div style="font-size:13px;font-weight:600;color:#222;">{{ (form.voucherAmt||0).toLocaleString() }}\uC6D0</div>
                <div style="font-size:8px;color:#666;">{{ form.startDate }} ~ {{ form.endDate }}</div>
                <div style="font-size:7px;color:#999;margin-top:2px;">\uBC88\uD638: V{{ form.voucherId || 'SAMPLE' }}</div>
              </div>
              <div style="display:flex;gap:6px;font-size:7px;color:#999;">
                <div style="flex:1;height:20px;background:#fff;border:1px solid #ddd;border-radius:2px;display:flex;align-items:center;justify-content:center;">
                  \uBC14\uCF54\uB4DC
                </div>
                <div style="flex:1;height:20px;background:#fff;border:1px solid #ddd;border-radius:2px;display:flex;align-items:center;justify-content:center;">
                  \uC77C\uB828\uBC88\uD638
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ===== \u25A1. \uBBF8\uB9AC\uBCF4\uAE30 \uD0ED ================================================== -->
    <!-- ===== \u25A0. \uBC1C\uAE09\uB0B4\uC5ED \uD0ED ================================================== -->
    <div class="dtl-pane" v-if="showTab('issueHist')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\uBC1C\uAE09\uB0B4\uC5ED</div>
      <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
      <bo-grid bare :columns="columns.issueGrid" :rows="cfIssuedList" row-key="issueNo"
        empty-text="\uBC1C\uAE09\uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."></bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
    <!-- ===== \u25A1. \uBC1C\uAE09\uB0B4\uC5ED \uD0ED ================================================== -->
    <!-- ===== \u25A0. \uC0AC\uC6A9\uB0B4\uC5ED \uD0ED ================================================== -->
    <div class="dtl-pane" v-if="showTab('useHist')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\uC0AC\uC6A9\uB0B4\uC5ED</div>
      <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
      <bo-grid bare :columns="columns.usageGrid" :rows="cfUsedList" row-key="usageNo"
        empty-text="\uC0AC\uC6A9\uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."></bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
    <!-- ===== \u25A1. \uC0AC\uC6A9\uB0B4\uC5ED \uD0ED ================================================== -->
    <!-- ===== \u25A0. \uC0C1\uC138\uC815\uBCF4 \uD0ED ================================================== -->
    <div class="dtl-pane" v-if="showTab('detail')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uC0C1\uC138\uC815\uBCF4</div>
      <div style="margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid #e8e8e8;">
        <h3 style="font-size:13px;font-weight:700;color:#222;">\u{1F4AC} SNS\uC804\uC1A1</h3>
      </div>
      <div style="padding:20px;">
        <div style="font-size:12px;color:#666;margin-bottom:16px;">\uC0C1\uD488\uAD8C \uC815\uBCF4\uB97C SNS \uCC44\uB110\uB85C \uACF5\uC720\uD569\uB2C8\uB2E4.</div>
        <div style="display:flex;gap:12px;margin-bottom:20px;">
          <button @click="handleBtnAction('snsModal-open', 'kakao')" class="btn btn-primary" style="background:#FFE812;color:#381818;border:none;">
            \u{1F4AC} \uCE74\uCE74\uC624\uD1A1
          </button>
          <button @click="handleBtnAction('snsModal-open', 'email')" class="btn btn-secondary">\u{1F4E7} \uC774\uBA54\uC77C</button>
        </div>
      </div>
    </div>
    <!-- ===== \u25A1. \uC0C1\uC138\uC815\uBCF4 \uD0ED ================================================== -->
  </div>
  <!-- ===== \u25A1.\u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
</bo-container>
</div>
<!-- ===== \u25A1. \uC0C1\uC138 \uC601\uC5ED (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uCEE8\uD14C\uC774\uB108\uB85C) ===================== -->
<!-- ===== \u25A0. SNS \uC804\uC1A1 \uBAA8\uB2EC =============================================== -->
<bo-modal :show="snsModal.show"
  :title="(snsModal.channel==='kakao' ? '\u{1F4AC} \uCE74\uCE74\uC624\uD1A1' : '\u{1F4E7} \uC774\uBA54\uC77C') + ' \uC804\uC1A1'"
  width="500px" modal-name="sns" :on-callback="fnCallbackModal" @close="snsModal.show = false">
  <div style="margin-bottom:12px;">
    <label class="form-label">\uC804\uC1A1 \uBA54\uC2DC\uC9C0</label>
    <textarea v-model="snsMsg" class="form-control" style="height:120px;"></textarea>
  </div>
  <template #footer>
    <button @click="handleBtnAction('snsModal-close')" class="btn btn_cancel">\uCDE8\uC18C</button>
    <button @click="handleBtnAction('snsModal-send')" class="btn btn_send">\uC804\uC1A1</button>
  </template>
</bo-modal>
<!-- ===== \u25A1. SNS \uC804\uC1A1 \uBAA8\uB2EC =============================================== -->
`};
