window._odDlivDtlState=window._odDlivDtlState||{tab:"info",tabMode:"tab"},window.OdDlivDtl={name:"OdDlivDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(l){const{ref:S,reactive:c,computed:f,onMounted:B,watch:w,onBeforeUnmount:Q,nextTick:Z}=Vue,d=window.boApp.showToast,R=window.boApp.showConfirm,y=window.boApp.showRefModal,i=c({loading:!1,error:null,tab:window._odDlivDtlState.tab||"info",tabMode2:window._odDlivDtlState.tabMode||"tab"}),z=Vue.toRef(i,"tab"),O=Vue.toRef(i,"tabMode2"),C=c({dliv_statuses:[]}),k=c([]),x=c([]),b=f(()=>!l.dtlId),t=c({dlivId:"",orderId:"",memberId:"",memberNm:"",recvNm:"",recvAddr:"",recvPhone:"",outboundCourierCd:"",outboundTrackingNo:"",dlivStatusCd:"",regDate:"",dlivMemo:""}),U=()=>{Object.assign(t,{dlivStatusCd:"\uC900\uBE44\uC911"})},p=c({}),V=yup.object({dlivId:yup.string().required("\uBC30\uC1A1ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),orderId:yup.string().required("\uC8FC\uBB38ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),recvPhone:yup.string().matches(coUtil.REGEX_PHONE,"\uC62C\uBC14\uB978 \uC5F0\uB77D\uCC98 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)")}),H=(e,o={})=>{if(e==="form-save")return q();if(e==="form-cancel")return l.navigate("__cancelEdit__");if(e==="form-edit")return l.navigate("__switchToEdit__");if(e==="form-close")return l.navigate("__closeDtl__");if(e==="form-orderRef")return y("order",t.orderId);if(e==="form-memberRef")return y("member",t.memberId);if(e==="payment-refClick")return y(o.type,o.id);if(e==="tab-change"){i.tabMode2==="tab"&&(i.tab=o);return}else if(e==="viewMode-change"){i.tabMode2=o;return}else{if(e==="tracking-open")return T(o.courier,o.trackingNo);console.warn("[handleBtnAction] unknown cmd:",e)}},j=(e,o={})=>{console.warn("[handleSelectAction] unknown cmd:",e)},F=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["DLIV_STATUS"],{compNm:"OdDlivDtl"}),C.dliv_statuses=e.sgGetGrpCodes("DLIV_STATUS")};w(()=>i.tab,e=>{window._odDlivDtlState.tab=e}),w(()=>i.tabMode2,e=>{window._odDlivDtlState.tabMode=e});const G=e=>i.tabMode2!=="tab"||i.tab===e,D=async()=>{var e,o,n,h,r;if(!b.value){i.loading=!0;try{const s=await boApiSvc.odDliv.getById(l.dtlId,"\uBC30\uC1A1\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),m=((e=s.data)==null?void 0:e.data)||s.data||{};if(Object.assign(t,{...m}),t.dlivId||(t.dlivId=l.dtlId),m.dlivStatusCd&&(t.dlivStatusCd=m.dlivStatusCd),m.outboundCourierCd&&(t.outboundCourierCd=m.outboundCourierCd),x.splice(0,x.length,...(m.dlivItems||[]).map(a=>({...a,prodNm:a.prodNm||a.prodId||"",color:a.prodOpt1Id||"",size:a.prodOpt2Id||"",qty:a.dlivQty||1,salePrice:a.unitPrice||0,price:a.unitPrice*(a.dlivQty||1)||0,discAmount:a.discAmount||0,discInfo:a.discInfo||""}))),t.orderId)try{const a=await boApiSvc.odClaim.getPage({pageNo:1,pageSize:100,orderId:t.orderId},"\uBC30\uC1A1\uAD00\uB9AC","\uC870\uD68C");k.splice(0,k.length,...((n=(o=a.data)==null?void 0:o.data)==null?void 0:n.pageList)||((r=(h=a.data)==null?void 0:h.data)==null?void 0:r.list)||[])}catch{}i.error=null}catch(s){console.error("[catch-info]",s),i.error=s.message}finally{i.loading=!1}}},$=coConsts.CLAIM_TYPE_COLOR,M=boConsts.DLIV_STEPS.map(function(e){return e.codeLabel}),u=f(()=>k[0]||null),q=async()=>{var n,h;Object.keys(p).forEach(r=>delete p[r]);try{await V.validate(t,{abortEarly:!1})}catch(r){console.error("[catch-info]",r),r.inner.forEach(s=>{p[s.path]=s.message}),coUtil.cofValidationToast(p,d);return}const e=b.value;if(await R(e?"\uB4F1\uB85D":"\uC800\uC7A5",e?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const r=await(e?boApiSvc.odDliv.create({...t},"\uBC30\uC1A1\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.odDliv.update(t.dlivId,{...t},"\uBC30\uC1A1\uAD00\uB9AC","\uC800\uC7A5"));d&&d(e?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),l.navigate&&l.navigate("odDlivMng",{reload:!0})}catch(r){console.error("[catch-info]",r);const s=((h=(n=r.response)==null?void 0:n.data)==null?void 0:h.message)||r.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";d&&d(s,"error",0)}};B(async()=>{await F(),l.active&&b.value&&U(),await D()}),w(()=>l.reloadTrigger,async(e,o)=>{if(!(e===o||e===0)){try{Object.keys(p).forEach(n=>delete p[n])}catch{}await D()}});const g=e=>NumbercoUtil.cofWon(e),N=(e,o)=>o?e==="CJ\uB300\uD55C\uD1B5\uC6B4"?"https://trace.cjlogistics.com/next/tracking.html?wblNo="+o:e==="\uB86F\uB370\uD0DD\uBC30"?"https://www.lotteglogis.com/open/tracking?invno="+o:e==="\uD55C\uC9C4\uD0DD\uBC30"?"https://www.hanjin.com/kor/CMS/DeliveryMgr/WaybillResult.do?mCode=MN038&wblnumText2="+o:e==="\uC6B0\uCCB4\uAD6D\uD0DD\uBC30"?"https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?sid1="+o:e==="\uB85C\uC820\uD0DD\uBC30"?"https://www.ilogen.com/web/personal/trace/"+o:"":"",T=(e,o)=>{const n=N(e,o);if(!n){d&&d("\uC6B4\uC1A1\uC7A5 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}window.open(n,"dlivTrack","width=900,height=760,menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes")},X=f(()=>M.indexOf(t.dlivStatusCd)),A=f(()=>t.orderId?[{orderId:t.orderId,dlivFee:t.shippingFee||0,payMethod:t.payMethod||"-",payStatus:t.payStatus||"-",payDate:t.regDate||"-"}]:[]),_=f(()=>{if(!t.dlivId)return[];const e=coUtil.cofYmd(t.regDate)||"-",o=[{date:e+" 09:00",user:"\uC2DC\uC2A4\uD15C",from:"-",to:"\uC900\uBE44\uC911",memo:"\uBC30\uC1A1 \uB4F1\uB85D"}];return["\uCD9C\uACE0\uC644\uB8CC","\uBC30\uC1A1\uC911","\uBC30\uC1A1\uC644\uB8CC"].includes(t.dlivStatusCd)&&o.push({date:e+" 10:00",user:"bo",from:"\uC900\uBE44\uC911",to:"\uCD9C\uACE0\uC644\uB8CC",memo:(t.outboundCourierCd||"-")+" \uCD9C\uACE0"}),["\uBC30\uC1A1\uC911","\uBC30\uC1A1\uC644\uB8CC"].includes(t.dlivStatusCd)&&o.push({date:e+" 11:30",user:"\uC2DC\uC2A4\uD15C",from:"\uCD9C\uACE0\uC644\uB8CC",to:"\uBC30\uC1A1\uC911",memo:"\uBC30\uC1A1 \uC911"}),t.dlivStatusCd==="DELIVERED"&&o.push({date:e+" 15:20",user:"\uC2DC\uC2A4\uD15C",from:"\uBC30\uC1A1\uC911",to:"\uBC30\uC1A1\uC644\uB8CC",memo:"\uC218\uB839 \uC644\uB8CC"}),o}),L=f(()=>t.dlivId?[{date:coUtil.cofYmd(t.regDate)+" 10:05",user:"bo",field:"\uC6B4\uC1A1\uC7A5\uBC88\uD638",before:"-",after:t.outboundTrackingNo||"-"},{date:coUtil.cofYmd(t.regDate)+" 10:08",user:"bo",field:"\uD0DD\uBC30\uC0AC",before:"-",after:t.outboundCourierCd||"-"}]:[]),Y=c([{id:"info",label:"\uC0C1\uC138\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"items",label:"\uBC30\uC1A1\uD56D\uBAA9",icon:"\u{1F4E6}",get count(){return x.length}},{id:"payment",label:"\uACB0\uC81C\uC815\uBCF4",icon:"\u{1F4B3}",get count(){return A.value.length}},{id:"hist",label:"\uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825",icon:"\u{1F552}",get count(){return _.value.length}},{id:"editHist",label:"\uC815\uBCF4\uC218\uC815\uC774\uB825",icon:"\u{1F4DD}",get count(){return L.value.length}}]),J=f(()=>l.dtlMode==="view"),v={};v.paymentGrid=[{key:"orderId",label:"\uC8FC\uBB38ID",refLink:"order"},{key:"dlivFee",label:"\uBC30\uC1A1\uBE44",style:"text-align:right;",align:"right",cellStyle:"font-weight:700",fmt:e=>g(e)},{key:"payMethod",label:"\uACB0\uC81C\uC218\uB2E8"},{key:"payStatus",label:"\uACB0\uC81C\uC0C1\uD0DC",badge:()=>"badge-blue"},{key:"payDate",label:"\uACB0\uC81C\uC77C\uC2DC",fmt:e=>e?String(e).slice(0,16):"-"}],v.editHistGrid=[{key:"date",label:"\uC218\uC815\uC77C\uC2DC",style:"width:140px;"},{key:"user",label:"\uC218\uC815\uC790",style:"width:100px;"},{key:"field",label:"\uD56D\uBAA9",style:"width:120px;"},{key:"before",label:"\uBCC0\uACBD \uC804",cellStyle:"color:#888"},{key:"after",label:"\uBCC0\uACBD \uD6C4",cellStyle:"color:#e8587a;font-weight:600"}],v.dlivItemGrid=[{key:"prodNm",label:"\uC0C1\uD488\uBA85",cellStyle:"font-size:12px;",fmt:(e,o)=>`${o.emoji||"\u{1F6CD}"} ${o.prodNm||""}`},{key:"color",label:"\uC0C9\uC0C1",style:"width:60px;",fmt:e=>e||"-"},{key:"size",label:"\uC0AC\uC774\uC988",style:"width:50px;",fmt:e=>e||"-"},{key:"qty",label:"\uC218\uB7C9",style:"width:44px;text-align:center;",align:"center",cellStyle:"font-weight:600",fmt:e=>e||1},{key:"salePrice",label:"\uD310\uB9E4\uAE08\uC561",style:"width:90px;text-align:right;",align:"right",cellStyle:"color:#666",fmt:(e,o)=>g(o.salePrice||o.price)},{key:"discInfo",label:"\uD560\uC778\uC815\uBCF4",style:"width:80px;",cellStyle:"font-size:12px;",fmt:e=>e||"-",cellInnerStyle:e=>e?"font-size:11px;padding:2px 7px;border-radius:8px;background:#fff3e0;color:#e65100;font-weight:600;":"color:#bbb;"},{key:"discAmount",label:"\uD560\uC778\uAE08\uC561",style:"width:90px;text-align:right;",align:"right",cellStyle:"color:#d84315;font-weight:600",fmt:e=>e?"-"+g(e):"-"},{key:"price",label:"\uACB0\uC81C\uAE08\uC561",style:"width:100px;text-align:right;",align:"right",cellStyle:"font-weight:700;color:#1a1a1a",fmt:e=>g(e)},{key:"orderStatus",label:"\uC8FC\uBB38\uC0C1\uD0DC",style:"width:90px;text-align:center;",align:"center",fmt:()=>t.orderStatusCd||"-",cellInnerStyle:()=>t.orderStatusCd?"font-size:10.5px;padding:2px 7px;border-radius:8px;background:#eef4ff;color:#1e40af;font-weight:600;":"color:#ccc;"},{key:"claimStatus",label:"\uD074\uB808\uC784\uC0C1\uD0DC",style:"width:110px;text-align:center;",align:"center",fmt:()=>u.value?`${u.value.type} \xB7 ${u.value.status}`:"-",cellInnerStyle:()=>u.value?`font-size:10px;padding:2px 8px;border-radius:8px;color:#fff;font-weight:700;background:${$[u.value.type]||"#9ca3af"};`:"color:#ccc;"},{key:"exchInfo",label:"\uAD50\uD658\uC815\uBCF4",style:"width:140px;",cellStyle:"font-size:12px;",trackBoxes:{items:()=>{const e=u.value;return!e||e.type!=="\uAD50\uD658"?[]:[...e.exchangeCourier?[{label:"\uBC1C\uC1A1",courier:e.exchangeCourier,trackingNo:e.exchangeTrackingNo,colorVariant:"blue"}]:[],...e.courier?[{label:"\uC218\uAC70",courier:e.courier,trackingNo:e.trackingNo,colorVariant:"orange"}]:[]]},onTrack:T}}],v.baseForm=[{key:"dlivId",label:"\uBC30\uC1A1ID",type:"text",required:!0,placeholder:"DLIV-XXX",readonly:!b.value},{key:"orderId",label:"\uC8FC\uBB38ID",type:"slot",name:"orderId",required:!0},{key:"memberNm",label:"\uD68C\uC6D0\uBA85",type:"slot",name:"memberNm"},{key:"recvNm",label:"\uC218\uB839\uC778",type:"text"},{key:"recvAddr",label:"\uBC30\uC1A1\uC9C0 \uC8FC\uC18C",type:"text",placeholder:"\uC8FC\uC18C \uC785\uB825",colSpan:2},{key:"recvPhone",label:"\uC5F0\uB77D\uCC98",type:"text",placeholder:"010-0000-0000",validate:e=>coUtil.cofIsValidPhone(e)?null:"\uC62C\uBC14\uB978 \uC5F0\uB77D\uCC98 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)"},{key:"dlivStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>C.dliv_statuses},{key:"dlivMemo",label:"\uBA54\uBAA8",type:"slot",name:"memo",colSpan:2}];const E=()=>{const e=new URLSearchParams;return e.set("page","odDlivDtl"),e.set("id",t.dlivId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},W=()=>{try{window.coExtSdk.shareKakao({title:`\uBC30\uC1A1 ${t.dlivId} - ShopJoy BO`,description:t.recvNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:E()})}catch(e){d(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},K=async()=>{try{await navigator.clipboard.writeText(E()),d("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){d(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},P=S(null),I=S(!1);return{columns:v,handleShareKakao:W,handleCopyLink:K,pdfAreaRef:P,pdfExporting:I,handleExportPdf:async()=>{I.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uBC30\uC1A1\uC0C1\uC138_${t.dlivId}.pdf`);await window.boUtil.bofExportPdf(P.value,e,d)}finally{I.value=!1}},form:t,errors:p,dlivItems:x,tab:z,tabMode2:O,handleBtnAction:H,handleSelectAction:j,cfIsNew:b,cfDtlMode:J,cfCurrentStepIdx:X,tabs:Y,cfEditHistList:L,cfPaymentList:A,cfStatusHistList:_,DLIV_STEPS:M,fmt:g,showTab:G,trackingUrl:N,showRefModal:y}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uBC30\uC1A1 \uC0C1\uC138' : (cfIsNew ? '\uBC30\uC1A1 \uB4F1\uB85D' : (cfDtlMode ? '\uBC30\uC1A1 \uC0C1\uC138' : '\uBC30\uC1A1 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.dlivId)">
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
    @tab-select="id => handleBtnAction('tab-change', id)"
    @mode-select="m => handleBtnAction('viewMode-change', m)" />
  <!-- ===== \u25A1. \uD0ED\uBC14 ====================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <div v-if="showTab('info')" class="dtl-pane">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uC0C1\uC138\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBC30\uC1A1 \uC9C4\uD589 \uC0C1\uD0DC \uD750\uB984 ========================================= -->
      <div style="margin-bottom:20px;padding:16px 18px;background:#f6f6f6;border-radius:10px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;">
          <span style="font-size:11px;font-weight:800;padding:3px 10px;border-radius:10px;color:#fff;background:#0ea5e9;">\u{1F69A} \uBC30\uC1A1</span>
          <span style="font-size:13px;font-weight:700;color:#222;">{{ form.dlivId || (cfIsNew ? '\uC2E0\uADDC \uBC30\uC1A1' : '') }}</span>
          <span v-if="form.orderId" style="font-size:11px;color:#888;">\uC8FC\uBB38: {{ form.orderId }}</span>
          <span v-if="form.outboundCourierCd ? (form.outboundTrackingNo) : false" style="font-size:11px;color:#888;margin-left:auto;">
            {{ form.outboundCourierCd }} \xB7 {{ form.outboundTrackingNo }}
          </span>
        </div>
        <div style="display:flex;align-items:flex-start;overflow-x:auto;">
          <template v-for="(step, idx) in DLIV_STEPS" :key="step">
            <div style="display:flex;flex-direction:column;align-items:center;min-width:80px;flex:1;">
              <div :style="{
                width: idx === cfCurrentStepIdx ? '14px' : '10px',
                height: idx === cfCurrentStepIdx ? '14px' : '10px',
                borderRadius:'50%', marginBottom:'6px', flexShrink:0, transition:'all .15s',
                boxShadow: idx === cfCurrentStepIdx ? '0 0 0 3px rgba(14,165,233,0.3)' : 'none',
                background: idx <= cfCurrentStepIdx ? '#0ea5e9' : '#bbb'
                }"></div>
              <div :style="{
                fontSize:'11.5px', fontWeight: idx === cfCurrentStepIdx ? 800 : 600,
                color: idx === cfCurrentStepIdx ? '#0284c7' : (idx < cfCurrentStepIdx ? '#444' : '#bbb'),
                whiteSpace:'nowrap'
                }">
                {{ step }}
              </div>
              <span v-if="step==='\uBC30\uC1A1\uC644\uB8CC' ? (form.outboundTrackingNo) : false" @click="handleBtnAction('tracking-open', { courier: form.outboundCourierCd, trackingNo: form.outboundTrackingNo })" title="\uBC30\uC1A1\uC870\uD68C \uCC3D \uC5F4\uAE30" style="margin-top:4px;padding:1px 7px;border:1px solid #86efac;background:#dcfce7;color:#15803d;border-radius:4px;font-size:0.7rem;font-weight:700;user-select:none;">
                {{ (form.outboundCourierCd||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','') || 'CJ' }}\uBC30\uC1A1 \u{1F50D}
              </span>
              <span v-else-if="step==='\uBC30\uC1A1\uC911' ? (form.outboundTrackingNo ? (cfCurrentStepIdx < 2) : false) : false" @click="handleBtnAction('tracking-open', { courier: form.outboundCourierCd, trackingNo: form.outboundTrackingNo })" title="\uBC30\uC1A1\uC870\uD68C \uCC3D \uC5F4\uAE30" style="margin-top:4px;padding:1px 7px;border:1px solid #fed7aa;background:#fff7ed;color:#c2410c;border-radius:4px;font-size:0.7rem;font-weight:700;user-select:none;">
                {{ (form.outboundCourierCd||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','') || 'CJ' }}\uBC30\uC1A1\uC911 \u{1F50D}
              </span>
            </div>
            <div v-if="idx < DLIV_STEPS.length - 1"
              :style="{flex:'1', height:'2px', minWidth:'12px', marginTop:'6px',
              background: idx < cfCurrentStepIdx ? '#0ea5e9' : '#bbb'}"></div>
          </template>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 \uD3FC (BoFormArea \uC790\uB3D9 \uB80C\uB354) =========================== -->
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <bo-form-area plain-readonly :columns="columns.baseForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="active" :show-cancel="!cfIsNew" :show-delete="false"
        @save="handleBtnAction('form-save')"
        @cancel="handleBtnAction('form-cancel')"
        @edit="handleBtnAction('form-edit')"
        @close="handleBtnAction('form-close')">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC8FC\uBB38ID + \uBCF4\uAE30 ========================================= -->
        <template #orderId>
          <div v-if="cfDtlMode" class="readonly-field-plain" style="display:flex;gap:8px;align-items:center;">
            <span>{{ form.orderId || '-' }}</span>
            <span v-if="form.orderId" class="ref-link" @click="handleBtnAction('form-orderRef')">\uBCF4\uAE30</span>
          </div>
          <template v-else>
            <div style="display:flex;gap:8px;align-items:center;">
              <input class="form-control" v-model="form.orderId" placeholder="ORD-2026-XXX" :class="errors.orderId ? 'is-invalid' : ''"
                @input="form.orderId && errors.orderId ? delete errors.orderId : null" />
              <span v-if="form.orderId" class="ref-link" @click="handleBtnAction('form-orderRef')">\uBCF4\uAE30</span>
            </div>
            <span v-if="errors.orderId" class="field-error">{{ errors.orderId }}</span>
          </template>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD68C\uC6D0\uBA85 + \uBCF4\uAE30 ========================================== -->
        <template #memberNm>
          <div v-if="cfDtlMode" class="readonly-field-plain" style="display:flex;gap:8px;align-items:center;">
            <span>{{ form.memberNm || '-' }}</span>
            <span v-if="form.memberId" class="ref-link" @click="handleBtnAction('form-memberRef')">\uBCF4\uAE30</span>
          </div>
          <div v-else style="display:flex;gap:8px;align-items:center;">
            <input class="form-control" v-model="form.memberNm" />
            <span v-if="form.memberId" class="ref-link" @click="handleBtnAction('form-memberRef')">\uBCF4\uAE30</span>
          </div>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBA54\uBAA8: Quill \uB610\uB294 view \uBAA8\uB4DC HTML ========================= -->
        <template #memo>
          <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:90px;line-height:1.6;" v-html="form.dlivMemo || '-'"></div>
          <base-html-editor v-else v-model="form.dlivMemo" height="180px" />
        </template>
      </bo-form-area>
    </div>
    <!-- ===== \u25A0.\u25A0. \uBC30\uC1A1\uD56D\uBAA9\uBAA9\uB85D \uD0ED ============================================== -->
    <div v-if="showTab('items')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4E6} \uBC30\uC1A1\uD56D\uBAA9 <span class="tab-count"> {{ dlivItems.length }} </span></div>
      <div style="background:#f9fafb;padding:10px 14px;border-radius:8px;margin-bottom:12px;display:flex;flex-wrap:wrap;gap:14px;font-size:12px;">
        <span><b style="color:#888;"> \uD0DD\uBC30\uC0AC: </b> {{ form.outboundCourierCd || '\uBBF8\uC9C0\uC815' }}</span>
        <span><b style="color:#888;"> \uC6B4\uC1A1\uC7A5\uBC88\uD638: </b> {{ form.outboundTrackingNo || '-' }}</span>
        <a v-if="trackingUrl(form.outboundCourierCd, form.outboundTrackingNo)" :href="trackingUrl(form.outboundCourierCd, form.outboundTrackingNo)" target="_blank" style="color:#1565c0;">
          \uC870\uD68C \u2192
        </a>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.dlivItemGrid" :rows="dlivItems"
        empty-text="\uBC30\uC1A1 \uD56D\uBAA9 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.">
        <template #tfoot>
          <tr style="background:#fafafa;font-weight:700;">
            <td style="width:36px;"></td>
            <td colspan="4" style="text-align:right;color:#555;">\uD569\uACC4</td>
            <td style="width:90px;text-align:right;color:#666;">{{ fmt(dlivItems.reduce((s,x)=>s+(x.salePrice||x.price||0),0)) }}</td>
            <td style="width:80px;"></td>
            <td style="width:90px;text-align:right;color:#d84315;">-{{ fmt(dlivItems.reduce((s,x)=>s+(x.discAmount||0),0)) }}</td>
            <td style="width:100px;text-align:right;color:#1a1a1a;">{{ fmt(dlivItems.reduce((s,x)=>s+(x.price||0),0)) }}</td>
            <td colspan="3"></td>
          </tr>
        </template>
      </bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uBC30\uC1A1\uD56D\uBAA9\uBAA9\uB85D \uD0ED ============================================== -->
    <!-- ===== \u25A0.\u25A0. \uACB0\uC81C\uC815\uBCF4 \uD0ED ================================================ -->
    <div v-if="showTab('payment')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4B3} \uACB0\uC81C\uC815\uBCF4 <span class="tab-count"> {{ cfPaymentList.length }} </span></div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.paymentGrid" :rows="cfPaymentList" empty-text="\uACB0\uC81C\uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." @ref-click="({type,id}) => handleBtnAction('payment-refClick', {type, id})"></bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uACB0\uC81C\uC815\uBCF4 \uD0ED ================================================ -->
    <!-- ===== \u25A0.\u25A0. \uBC30\uC1A1\uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825 \uD0ED ============================================ -->
    <div v-if="showTab('hist')" class="dtl-pane">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title" style="margin-bottom:10px;padding:0 0 10px 0;">
        \u{1F552} \uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825
        <span class="tab-count">{{ cfStatusHistList.length }}</span>
      </div>
      <od-dliv-hist :order-id="form.orderId" :navigate="navigate" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uBC30\uC1A1\uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825 \uD0ED ============================================ -->
    <!-- ===== \u25A0.\u25A0. \uC815\uBCF4\uC218\uC815\uC774\uB825 \uD0ED ============================================== -->
    <div v-if="showTab('editHist')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4DD} \uC815\uBCF4\uC218\uC815\uC774\uB825 <span class="tab-count"> {{ cfEditHistList.length }} </span></div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.editHistGrid" :rows="cfEditHistList" empty-text="\uC815\uBCF4 \uC218\uC815 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."></bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC815\uBCF4\uC218\uC815\uC774\uB825 \uD0ED ============================================== -->
  </div>
  <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
</bo-container>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
</div>
`};
