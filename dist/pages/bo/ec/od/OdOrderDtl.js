window._odOrderDtlState=window._odOrderDtlState||{activeTab:"info",tabMode:"tab"},window.OdOrderDtl={name:"OdOrderDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(f){var ge;const{ref:oe,reactive:u,computed:m,onMounted:ve,watch:q,onBeforeUnmount:et,nextTick:tt}=Vue,r=window.boApp.showToast,G=window.boApp.showConfirm,$=window.boApp.showRefModal,j=u([]),W=u([]),X=u([]),d=u([]),A=u([]),y=u({loading:!1,error:null,activeTab:((ge=window._odOrderDtlState)==null?void 0:ge.activeTab)||"info",tabMode2:window._odOrderDtlState.tabMode||"tab"}),Ce=Vue.toRef(y,"activeTab"),we=Vue.toRef(y,"tabMode2"),g=u({claim_statuses:[],order_statuses:[],payment_methods:[],pay_statuses:[]}),w=m(()=>!f.dtlId),ae=boConsts.ORDER_STEPS.map(function(e){return e.codeLabel}),o=u({orderId:"",memberId:"",memberNm:"",orderDate:"",prodNm:"",totalAmt:"",payMethodCd:"",orderStatusCd:"",payStatusCd:"",payDate:"",apprNo:"",payIssuer:"",memo:"",dlivFee:0,extraReqAmt:0,extraReqReason:""}),x=u({member:!1,orderCopy:!1,prod:!1}),K=u({processing:!1}),Se=()=>{Object.assign(o,{totalAmt:0,payMethodCd:"\uBB34\uD1B5\uC7A5\uC785\uAE08",orderStatusCd:"\uC785\uAE08\uB300\uAE30",payStatusCd:"\uACB0\uC81C\uC644\uB8CC"})},S=u({}),Ie=yup.object({memberId:yup.string().required("\uD68C\uC6D0ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694. (\uD68C\uC6D0\uC120\uD0DD)")}),ke=yup.object({orderId:yup.string().required("\uC8FC\uBB38ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),memberId:yup.string().required("\uD68C\uC6D0ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),h=u(new Set),re=(e,t={})=>{if(e==="form-save")return Be();if(e==="form-cancel")return f.navigate("__cancelEdit__");if(e==="form-edit")return f.navigate("__switchToEdit__");if(e==="form-close")return f.navigate("__closeDtl__");if(e==="form-memberRef")return $("member",o.memberId);if(e==="form-vendorRef")return $("vendor",t);if(e==="tab-change"){y.tabMode2==="tab"&&(y.activeTab=t);return}else if(e==="viewMode-change"){y.tabMode2=t;return}else if(e==="orderItems-toggleExpandAll"){pe.value?h.clear():d.forEach((a,s)=>h.add(s));return}else{if(e==="tracking-open")return ie(t.courier,t.trackingNo);if(e==="memberModal-open"){x.member=!0;return}else if(e==="memberModal-close"){x.member=!1;return}else if(e==="orderCopyModal-open"){x.orderCopy=!0;return}else if(e==="orderCopyModal-close"){x.orderCopy=!1;return}else if(e==="prodModal-open"){x.prod=!0;return}else if(e==="prodModal-close"){x.prod=!1;return}else if(e==="orderItems-remove"){d.splice(t,1),H();return}else{if(e==="pay-request")return Ee();if(e==="extraPay-request")return Oe();console.warn("[handleBtnAction] unknown cmd:",e)}}},Ae=(e,t={})=>{if(e==="orderItems-rowToggleExpand"){h.has(t)?h.delete(t):h.add(t);return}else{if(e==="dlivFee-change")return H();console.warn("[handleSelectAction] unknown cmd:",e)}},Re=(e,t,a)=>{e==="cmPopup-member-pick"?(x.member=!1,a&&Me(a)):e==="cmPopup-order-copy"&&(x.orderCopy=!1,a&&Ne(a))},Me=e=>{o.memberId=e.selId||e.userId||"",o.memberNm=e.selName||e.memberName||e.name||"",r("\uD68C\uC6D0\uC774 \uC120\uD0DD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")},Ne=e=>{o.memberId=e.memberId||"",o.memberNm=e.memberNm||"",o.prodNm=e.prodNm||"",o.payMethodCd=e.payMethodCd||o.payMethodCd,o.dlivFee=Number(e.dlivFee||0);const t=e.orderItems||e.items||[];d.splice(0,d.length,...t.map(a=>({...a}))),H(),r(`\uC8FC\uBB38 ${e.orderId} \uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.`,"success")},_e=e=>{const t=e.id||e.prodId,a=d.findIndex(s=>s.productId===t);if(a!==-1)d.splice(a,1);else{const s=Number(e.salePrice||0);d.push({productId:t,prodNm:e.nm||e.prodNm,qty:1,salePrice:s,discAmount:0,price:s})}H()},H=()=>{if(!w.value)return;const e=d.reduce((t,a)=>t+(Number(a.price)||0),0);o.totalAmt=e+(Number(o.dlivFee)||0),!o.prodNm&&d.length&&(o.prodNm=d[0].prodNm+(d.length>1?` \uC678 ${d.length-1}\uAC74`:""))},Ee=async()=>{const e=Number(o.totalAmt)||0;if(e<=0){r("\uACB0\uC81C\uAE08\uC561\uC774 0\uC6D0\uC785\uB2C8\uB2E4. \uC8FC\uBB38\uD56D\uBAA9/\uBC30\uC1A1\uBE44\uB97C \uD655\uC778\uD558\uC138\uC694.","error");return}if(!o.memberId){r("\uD68C\uC6D0\uC744 \uBA3C\uC800 \uC120\uD0DD\uD558\uC138\uC694.","error");return}if(await G("\uACB0\uC81C \uC694\uCCAD",`${e.toLocaleString()}\uC6D0\uC744 \uD1A0\uC2A4 \uBE0C\uB79C\uB4DC\uD398\uC774\uB85C \uACB0\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)){K.processing=!0;try{if(!window.coAuth){r("\uACB0\uC81C \uBAA8\uB4C8(coAuth)\uC774 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error",0);return}await window.coAuth.pay("bo",{customerKey:o.memberId,amount:e,orderId:o.orderId||"ORD"+Date.now(),orderName:o.prodNm||"\uC8FC\uBB38\uACB0\uC81C",onDebug:(a,s)=>r("[\uAC1C\uBC1C] "+a+`
`+window.coExtSdk._fmtParams(s),"info",0)}),De(e)}catch(a){console.warn("[Toss \uBE0C\uB79C\uB4DC\uD398\uC774 \uC2E4\uD328]",a);const s=a&&a.message||"";if(/취소|cancel|USER_CANCEL/i.test(s))r("\uACB0\uC81C\uAC00 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","info");else{const l=window.coExtHelp&&window.coExtHelp.toastAction({kind:"pay",provider:"toss",error:a});r(`\uACB0\uC81C\uCC3D \uD638\uCD9C\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.
\u2192 \uD574\uACB0: \uD31D\uC5C5 \uCC28\uB2E8 \uD574\uC81C\xB7\uB124\uD2B8\uC6CC\uD06C \uC0C1\uD0DC\xB7\uD1A0\uC2A4 \uD0A4 \uC124\uC815\uC744 \uD655\uC778\uD55C \uB4A4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.`+(s?`
(`+s+")":""),"error",0,"",l)}}finally{K.processing=!1}}},De=e=>{o.payStatusCd="\uACB0\uC81C\uC644\uB8CC",o.payMethodCd=o.payMethodCd||"\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20",o.payIssuer="\uD1A0\uC2A4 \uBE0C\uB79C\uB4DC\uD398\uC774",o.apprNo="BP"+String(Date.now()).slice(-10),A.unshift({payMethod:"\uD1A0\uC2A4 \uBE0C\uB79C\uB4DC\uD398\uC774",payStatus:"\uACB0\uC81C\uC644\uB8CC",amount:e,payDate:o.payDate||"",apprNo:o.apprNo,issuer:"\uD1A0\uC2A4 \uBE0C\uB79C\uB4DC\uD398\uC774"}),r(`${e.toLocaleString()}\uC6D0 \uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")},Oe=async()=>{const e=Number(o.extraReqAmt)||0;if(e<=0){r("\uCD94\uAC00\uACB0\uC81C \uC694\uCCAD\uAE08\uC561\uC744 \uC785\uB825\uD558\uC138\uC694.","error");return}if(!o.orderId){r("\uC8FC\uBB38\uC744 \uBA3C\uC800 \uC800\uC7A5\uD55C \uB4A4 \uCD94\uAC00\uACB0\uC81C\uB97C \uC694\uCCAD\uD558\uC138\uC694.","error");return}if(await G("\uCD94\uAC00\uACB0\uC81C \uC694\uCCAD",`${e.toLocaleString()}\uC6D0 \uCD94\uAC00\uACB0\uC81C\uB97C \uC694\uCCAD\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{await boApiSvc.odOrder.requestExtraPay({orderId:o.orderId,memberId:o.memberId,amount:e,reason:o.extraReqReason},"\uC8FC\uBB38\uAD00\uB9AC","\uCD94\uAC00\uACB0\uC81C\uC694\uCCAD"),r("\uCD94\uAC00\uACB0\uC81C \uC694\uCCAD\uC774 \uC804\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),A.unshift({payMethod:"\uCD94\uAC00\uACB0\uC81C\uC694\uCCAD",payStatus:"\uBBF8\uACB0\uC81C",amount:e,payDate:"",apprNo:"-",issuer:o.extraReqReason||"-"})}catch(a){r(coUtil.cofErrMsg(a,"\uCD94\uAC00\uACB0\uC81C \uC694\uCCAD \uC2E4\uD328"),"error",0)}},le=async()=>{var e,t,a,s,l,p,n,k,E,D,O,T,P,L,z,B;if(!w.value){y.loading=!0;try{const[C,Y,F,U]=await Promise.all([boApiSvc.odOrder.getById(f.dtlId,"\uC8FC\uBB38\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"\uC8FC\uBB38\uAD00\uB9AC","\uC870\uD68C"),boApiSvc.odDliv.getPage({pageNo:1,pageSize:1e4},"\uC8FC\uBB38\uAD00\uB9AC","\uC870\uD68C"),boApiSvc.odClaim.getPage({pageNo:1,pageSize:1e4},"\uC8FC\uBB38\uAD00\uB9AC","\uC870\uD68C")]),c=((e=C.data)==null?void 0:e.data)||C.data||{};Object.assign(o,{...c}),o.dlivFee=Number((s=(a=(t=c.dlivFee)!=null?t:c.outboundShippingFee)!=null?a:c.shippingFee)!=null?s:0),o.orderId||(o.orderId=f.dtlId),c.orderStatusCd&&(o.orderStatusCd=c.orderStatusCd),c.payMethodCd&&(o.payMethodCd=c.payMethodCd),c.payStatus?o.payStatusCd=c.payStatus:["\uCDE8\uC18C","\uC790\uB3D9\uCDE8\uC18C"].includes(c.orderStatusCd)?o.payStatusCd="\uD658\uBD88\uC644\uB8CC":["\uC785\uAE08\uB300\uAE30"].includes(c.orderStatusCd)?o.payStatusCd="\uBBF8\uACB0\uC81C":o.payStatusCd="\uACB0\uC81C\uC644\uB8CC",o.payDate||(o.payDate=c.orderDate||""),o.apprNo||(o.apprNo="APR-"+String(c.orderId||"").slice(-6)+"01"),o.payIssuer||(o.payIssuer={\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20:"\uD1A0\uC2A4",\uCE74\uCE74\uC624\uD398\uC774:"\uCE74\uCE74\uC624",\uB124\uC774\uBC84\uD398\uC774:"\uB124\uC774\uBC84",\uBB34\uD1B5\uC7A5\uC785\uAE08:"\uC740\uD589",\uAC00\uC0C1\uACC4\uC88C:"\uC740\uD589"}[o.payMethodCd]||"-"),j.splice(0,j.length,...((p=(l=Y.data)==null?void 0:l.data)==null?void 0:p.pageList)||((k=(n=Y.data)==null?void 0:n.data)==null?void 0:k.list)||[]),W.splice(0,W.length,...((D=(E=F.data)==null?void 0:E.data)==null?void 0:D.pageList)||((T=(O=F.data)==null?void 0:O.data)==null?void 0:T.list)||[]),X.splice(0,X.length,...((L=(P=U.data)==null?void 0:P.data)==null?void 0:L.pageList)||((B=(z=U.data)==null?void 0:z.data)==null?void 0:B.list)||[]),A.splice(0,A.length,...(c.orderPays||[]).map(i=>({payMethod:i.payMethodCd||"-",payStatus:i.payStatusCd||"-",amount:i.payAmt||0,payDate:i.payDate||"-",apprNo:i.pgTransactionId||"-",issuer:i.refundAmt?"\uD658\uBD88 "+i.refundAmt:"-"}))),d.splice(0,d.length,...(c.orderItems||[]).map(i=>({...i,prodNm:i.prodNm,color:i.prodOpt1Id||"",size:i.prodOpt2Id||"",qty:i.orderQty||1,salePrice:i.normalPrice||i.unitPrice||0,price:i.itemOrderAmt||i.unitPrice*(i.orderQty||1)||0,discAmount:i.discAmount||0,discInfo:i.discInfo||""}))),y.error=null}catch(C){console.error("[catch-info]",C),y.error=C.message}finally{y.loading=!1}}},Te=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["CLAIM_STATUS_CD","ORDER_STATUS_CD","PAYMENT_METHOD","PAY_STATUS"],{compNm:"OdOrderDtl"}),g.claim_statuses=e.sgGetGrpCodes("CLAIM_STATUS_CD"),g.order_statuses=e.sgGetGrpCodes("ORDER_STATUS_CD"),g.payment_methods=e.sgGetGrpCodes("PAYMENT_METHOD"),g.pay_statuses=e.sgGetGrpCodes("PAY_STATUS")},Pe=e=>coUtil.cofCodeBadge("PAY_STATUS",e,boConsts.PAY_STATUS_FALLBACK_BADGE[e]||"badge-gray"),Le=m(()=>{const e=ae.indexOf(o.orderStatusCd);return e!==-1?e:-1}),ze=m(()=>o.orderStatusCd==="CANCELED"),Be=async()=>{var a,s;Object.keys(S).forEach(l=>delete S[l]);try{await(w.value?Ie:ke).validate(o,{abortEarly:!1})}catch(l){console.error("[catch-info]",l),l.inner.forEach(p=>{S[p.path]=p.message}),coUtil.cofValidationToast(S,r);return}const e=w.value;if(await G(e?"\uB4F1\uB85D":"\uC800\uC7A5",e?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{if(d.length){const l=d.reduce((n,k)=>n+(Number(k.price)||0),0),p={orderId:o.orderId||null,memberId:o.memberId,memberNm:o.memberNm,orderStatusCd:o.orderStatusCd,payMethodCd:o.payMethodCd,totalAmt:l,dlivFee:Number(o.dlivFee||0),payAmt:l+Number(o.dlivFee||0),memo:o.memo,orderItems:d.map(n=>({prodId:n.productId||n.prodId,prodSkuId:n.prodSkuId||null,prodNm:n.prodNm,unitPrice:Number(n.salePrice||n.unitPrice||n.price||0),orderQty:Number(n.qty||n.orderQty||1),itemOrderAmt:Number(n.price||n.itemOrderAmt||n.salePrice*(n.qty||1)||0)}))};await boApiSvc.odOrder.saveProxy(p,"\uC8FC\uBB38\uAD00\uB9AC",e?"\uB300\uB9AC\uC8FC\uBB38\uB4F1\uB85D":"\uB300\uB9AC\uC8FC\uBB38\uC218\uC815")}else{const l={...o,totalAmt:Number(o.totalAmt),dlivFee:Number(o.dlivFee||0)};["orderDate","payDate"].forEach(p=>{(!l[p]||!String(l[p]).trim())&&delete l[p]}),await(e?boApiSvc.odOrder.create(l,"\uC8FC\uBB38\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.odOrder.update(o.orderId,l,"\uC8FC\uBB38\uAD00\uB9AC","\uC800\uC7A5"))}r&&r(e?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),f.navigate&&f.navigate("odOrderMng",{reload:!0})}catch(l){console.error("[catch-info]",l);const p=((s=(a=l.response)==null?void 0:a.data)==null?void 0:s.message)||l.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";r&&r(p,"error",0)}};q(()=>y.activeTab,e=>{window._odOrderDtlState.activeTab=e}),ve(async()=>{await Te(),await le(),f.active&&w.value&&Se()}),q(()=>f.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(S).forEach(a=>delete S[a])}catch{}await le()}});const I=e=>NumbercoUtil.cofWon(e),Ye=e=>{const t=Number(e)||0;return t?t>=1e8?(t/1e8).toFixed(1).replace(/\.0$/,"")+"\uC5B5\uC6D0":t>=1e4?Math.round(t/1e4)+"\uB9CC\uC6D0":t.toLocaleString()+"\uC6D0":"-"},Fe=m(()=>o.vendorId&&j.find(e=>e.vendorId===o.vendorId)||null),Ue=m(()=>W.find(e=>e.orderId===f.dtlId)),de=coConsts.CLAIM_TYPE_COLOR,qe={\uCDE8\uC18C:coConsts.CLAIM_STEP_MAP.CANCEL,\uBC18\uD488:coConsts.CLAIM_STEP_MAP.RETURN,\uAD50\uD658:coConsts.CLAIM_STEP_MAP.EXCHANGE},Ge={CANCEL:"\uCDE8\uC18C",RETURN:"\uBC18\uD488",EXCHANGE:"\uAD50\uD658"},b=m(()=>{const e=X.find(t=>t.orderId===f.dtlId);return e?Object.assign({},e,{type:Ge[e.claimTypeCd]||e.claimTypeCd||e.type||"-",status:boConsts.CLAIM_STATUS_LABEL[e.claimStatusCd]||e.claimStatusCd||e.status||"-"}):null}),at=m(()=>(g.claim_statuses||[]).filter(e=>e.useYn==="Y").sort((e,t)=>e.sortOrd-t.sortOrd)),He=(e,t)=>t?e==="CJ\uB300\uD55C\uD1B5\uC6B4"?"https://trace.cjlogistics.com/next/tracking.html?wblNo="+t:e==="\uB86F\uB370\uD0DD\uBC30"?"https://www.lotteglogis.com/open/tracking?invno="+t:e==="\uD55C\uC9C4\uD0DD\uBC30"?"https://www.hanjin.com/kor/CMS/DeliveryMgr/WaybillResult.do?mCode=MN038&wblnumText2="+t:e==="\uC6B0\uCCB4\uAD6D\uD0DD\uBC30"?"https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?sid1="+t:e==="\uB85C\uC820\uD0DD\uBC30"?"https://www.ilogen.com/web/personal/trace/"+t:"":"",ie=(e,t)=>{const a=He(e,t);if(!a){r&&r("\uC6B4\uC1A1\uC7A5 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}window.open(a,"dlivTrack","width=900,height=760,menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes")},ne=m(()=>A.length?A:o.totalAmt?[{payMethod:o.payMethodCd||"-",payStatus:o.payStatusCd||"-",amount:o.totalAmt,payDate:o.payDate||o.orderDate||"-",apprNo:o.apprNo||"-",issuer:o.payIssuer||"-"}]:[]),se=m(()=>{if(!o.orderId)return[];const e=coUtil.cofYmd(o.orderDate)||"-",t=[{date:e+" 09:00",user:"\uC2DC\uC2A4\uD15C",from:"-",to:"\uC785\uAE08\uB300\uAE30",memo:"\uC8FC\uBB38 \uC811\uC218"},{date:e+" 10:15",user:"bo",from:"\uC785\uAE08\uB300\uAE30",to:"\uACB0\uC81C\uC644\uB8CC",memo:"\uACB0\uC81C \uC2B9\uC778"}];return o.orderStatusCd&&!["\uC785\uAE08\uB300\uAE30","\uACB0\uC81C\uC644\uB8CC"].includes(o.orderStatusCd)&&t.push({date:e+" 14:30",user:"bo",from:"\uACB0\uC81C\uC644\uB8CC",to:o.orderStatusCd,memo:"\uC0C1\uD0DC \uBCC0\uACBD"}),t});q(()=>y.tabMode2,e=>{window._odOrderDtlState.tabMode=e});const Ve=e=>y.tabMode2!=="tab"||y.activeTab===e,ce=e=>h.has(e),$e=(e,t)=>ce(t)&&!!b.value&&b.value.type==="\uAD50\uD658",pe=m(()=>d.length>0&&window.safeArrayUtils.safeEvery(d,(e,t)=>h.has(t))),J=["ORDERED","PAID","PREPARING","SHIPPING","WAIT_DEPOSIT"],Q=["DELIVERED","DLIV_COMPLT"],Z=["CONFIRMED","COMPLT","BUY_CONFIRMED"],_=["COMPLT","DONE","COMPLETE","REJECTED"],me={CANCEL:"\uCDE8\uC18C",RETURN:"\uBC18\uD488",EXCHANGE:"\uAD50\uD658"},je=m(()=>{const e=J,t=Q,a=Z,s=_,l=o.orderStatusCd||"";let p=0,n=0,k=0,E=0,D=0,O=0,T=0,P=0,L=0,z=0,B=0,C=0,Y=0,F=0,U=0,c=0,i=0,xe=0;for(const v of d){const te=v.orderItemStatusCd||l,V=Number(v.itemOrderAmt)||Number(v.price)||0,he=Number(v.itemCancelAmt)||0,Qe=Number(v.itemCompletedAmt)||0;if(e.includes(te)?(p++,Y+=V):t.includes(te)?(n++,F+=V):a.includes(te)&&(k++,U+=Qe||V),v.claimYn==="Y"){const Ze=s.includes(v.claimStatusCd||""),N=v.claimTypeCd||"";Ze?(L++,i+=he,N==="CANCEL"?z++:N==="RETURN"?B++:N==="EXCHANGE"&&C++):(D++,c+=V,N==="CANCEL"?O++:N==="RETURN"?T++:N==="EXCHANGE"&&P++)}v.refundCompltYn==="Y"&&(E++,xe+=he)}return{inProgress:p,delivered:n,confirmed:k,refund:E,amtProgress:Y,amtDelivered:F,amtConfirmed:U,amtClaimActive:c,amtClaimDone:i,amtRefund:xe,claimActive:{total:D,cancel:O,return:T,exchange:P},claimDone:{total:L,cancel:z,return:B,exchange:C}}});q(d,e=>{h.clear(),e.forEach((t,a)=>h.add(a))});const R=e=>{if(!b.value||b.value.type!=="\uAD50\uD658")return null;const t={\uBE14\uB799:"\uB124\uC774\uBE44",\uB124\uC774\uBE44:"\uCC28\uCF5C",\uD654\uC774\uD2B8:"\uC544\uC774\uBCF4\uB9AC"};return{prodNm:e.prodNm+" (\uAD50\uD658\uD488)",color:t[e.color]||"\uB124\uC774\uBE44",size:e.size,qty:e.qty,price:e.price,courier:b.value.exchangeCourier,trackingNo:b.value.exchangeTrackingNo}},fe=m(()=>o.orderId?[{date:coUtil.cofYmd(o.orderDate)+" 11:02",user:"bo",field:"\uC218\uB839\uC778 \uC5F0\uB77D\uCC98",before:"010-0000-0000",after:o.phone||"010-1234-5678"},{date:coUtil.cofYmd(o.orderDate)+" 13:45",user:"bo",field:"\uBA54\uBAA8",before:"-",after:"(\uC218\uC815\uB428)"}]:[]),We=u([{id:"info",label:"\uC0C1\uC138\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"items",label:"\uC8FC\uBB38\uD56D\uBAA9",icon:"\u{1F4E6}",get count(){return d.length}},{id:"payment",label:"\uACB0\uC81C\uC815\uBCF4",icon:"\u{1F4B3}",get count(){return ne.value.length}},{id:"hist",label:"\uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825",icon:"\u{1F552}",get count(){return se.value.length}},{id:"editHist",label:"\uC815\uBCF4\uC218\uC815\uC774\uB825",icon:"\u{1F4DD}",get count(){return fe.value.length}}]),ue=m(()=>f.dtlMode==="view"),M={};M.paymentGrid=[{key:"payMethod",label:"\uACB0\uC81C\uC218\uB2E8"},{key:"payStatus",label:"\uACB0\uC81C\uC0C1\uD0DC",badge:e=>Pe(e.payStatus)},{key:"amount",label:"\uACB0\uC81C\uAE08\uC561",style:"text-align:right;",align:"right",fmt:e=>I(e),cellStyle:"font-weight:700;"},{key:"payDate",label:"\uACB0\uC81C\uC77C\uC2DC",fmt:e=>e?String(e).slice(0,16):"-"},{key:"apprNo",label:"\uC2B9\uC778\uBC88\uD638"},{key:"issuer",label:"\uCE74\uB4DC\uC0AC/\uACC4\uC88C"}],M.editHistGrid=[{key:"date",label:"\uC218\uC815\uC77C\uC2DC",style:"width:140px;"},{key:"user",label:"\uC218\uC815\uC790",style:"width:100px;"},{key:"field",label:"\uD56D\uBAA9",style:"width:120px;"},{key:"before",label:"\uBCC0\uACBD \uC804",cellStyle:"color:#888;"},{key:"after",label:"\uBCC0\uACBD \uD6C4",cellStyle:"color:#e8587a;font-weight:600;"}],M.orderItemGrid=[{key:"prodNm",label:"\uC0C1\uD488\uBA85"},{key:"color",label:"\uC0C9\uC0C1",style:"width:60px;",fmt:e=>e||"-"},{key:"size",label:"\uC0AC\uC774\uC988",style:"width:50px;",fmt:e=>e||"-"},{key:"qty",label:"\uC218\uB7C9",style:"width:44px;text-align:center;",align:"center",fmt:e=>e||1,cellStyle:"font-weight:600;"},{key:"_sProg",label:"\uC8FC\uBB38\uC911",style:"width:44px;",align:"center",fmt:(e,t)=>J.includes(t.orderItemStatusCd||o.orderStatusCd)?"1":"",cellStyle:(e,t)=>J.includes(t.orderItemStatusCd||o.orderStatusCd)?"color:#3a6ecf;font-weight:700;":""},{key:"_sDliv",label:"\uBC30\uC1A1\uC644\uB8CC",style:"width:52px;",align:"center",fmt:(e,t)=>Q.includes(t.orderItemStatusCd||o.orderStatusCd)?"1":"",cellStyle:(e,t)=>Q.includes(t.orderItemStatusCd||o.orderStatusCd)?"color:#5a8080;font-weight:700;":""},{key:"_sConf",label:"\uC8FC\uBB38\uC644\uB8CC",style:"width:52px;",align:"center",fmt:(e,t)=>Z.includes(t.orderItemStatusCd||o.orderStatusCd)?"1":"",cellStyle:(e,t)=>Z.includes(t.orderItemStatusCd||o.orderStatusCd)?"color:#2a7d52;font-weight:700;":""},{key:"_sCa",label:"\uD074\uB808\uC784\uC911",style:"width:54px;",align:"center",fmt:(e,t)=>t.claimYn==="Y"&&!_.includes(t.claimStatusCd||"")?me[t.claimTypeCd]||"\uC9C4\uD589":"",cellStyle:(e,t)=>t.claimYn==="Y"&&!_.includes(t.claimStatusCd||"")?"color:#c07030;font-size:11px;font-weight:700;":""},{key:"_sCd",label:"\uD074\uB808\uC784\uC644\uB8CC",style:"width:58px;",align:"center",fmt:(e,t)=>t.claimYn==="Y"&&_.includes(t.claimStatusCd||"")?me[t.claimTypeCd]||"\uC644\uB8CC":"",cellStyle:(e,t)=>t.claimYn==="Y"&&_.includes(t.claimStatusCd||"")?"color:#888;font-size:11px;":""},{key:"_sRef",label:"\uD658\uBD88\uC644\uB8CC",style:"width:52px;",align:"center",fmt:(e,t)=>t.refundCompltYn==="Y"?"1":"",cellStyle:(e,t)=>t.refundCompltYn==="Y"?"color:#d95050;font-weight:700;":""},{key:"itemCancelAmt",label:"\uD658\uBD88\uAE08\uC561",style:"width:82px;",align:"right",fmt:e=>e?I(e):"-",cellStyle:e=>e?"color:#d95050;":"color:#d0d0d0;"},{key:"itemCompletedAmt",label:"\uD655\uC815\uAE08\uC561",style:"width:82px;",align:"right",fmt:e=>e?I(e):"-",cellStyle:e=>e?"color:#2a7d52;font-weight:600;":"color:#d0d0d0;"},{key:"salePrice",label:"\uD310\uB9E4\uAE08\uC561",style:"width:90px;text-align:right;",align:"right",fmt:(e,t)=>I(t.salePrice||t.price),cellStyle:"color:#666;"},{key:"discInfo",label:"\uD560\uC778\uC815\uBCF4",style:"width:80px;",cellStyle:"font-size:12px;",fmt:e=>e||"-",cellInnerStyle:e=>e?"font-size:11px;padding:2px 7px;border-radius:8px;background:#fff3e0;color:#e65100;font-weight:600;":"color:#bbb;"},{key:"discAmount",label:"\uD560\uC778\uAE08\uC561",style:"width:90px;text-align:right;",align:"right",fmt:e=>e?"-"+I(e):"-",cellStyle:"color:#d84315;font-weight:600;"},{key:"price",label:"\uACB0\uC81C\uAE08\uC561",style:"width:100px;text-align:right;",align:"right",fmt:e=>I(e),cellStyle:"font-weight:700;color:#1a1a1a;"},{key:"orderStatus",label:"\uC8FC\uBB38\uC0C1\uD0DC",style:"width:90px;text-align:center;",align:"center",fmt:()=>o.orderStatusCd||"-",cellInnerStyle:"font-size:10.5px;padding:2px 7px;border-radius:8px;background:#eef4ff;color:#1e40af;font-weight:600;"},{key:"claimStatus",label:"\uD074\uB808\uC784\uC0C1\uD0DC",style:"width:110px;text-align:center;",align:"center",fmt:()=>b.value?`${b.value.type} \xB7 ${b.value.status}`:"-",cellInnerStyle:()=>b.value?`font-size:10px;padding:2px 8px;border-radius:8px;color:#fff;font-weight:700;background:${de[b.value.type]||"#9ca3af"};`:"color:#ccc;"},{key:"exchInfo",label:"\uAD50\uD658\uC815\uBCF4",style:"width:140px;",cellStyle:"font-size:12px;",trackBoxes:{items:()=>{const e=b.value;return!e||e.type!=="\uAD50\uD658"?[]:[...e.exchangeCourier?[{courier:e.exchangeCourier,trackingNo:e.exchangeTrackingNo,colorVariant:"blue"}]:[],...e.courier?[{label:"\uC218\uAC70",courier:e.courier,trackingNo:e.trackingNo,colorVariant:"orange"}]:[]]},onTrack:ie}},{type:"actions",visible:()=>!ue.value,actions:[{label:"\uC0AD\uC81C",cls:"btn btn_row_delete",onClick:(e,t)=>re("orderItems-remove",t)}]}];const Xe=m(()=>g.pay_statuses&&g.pay_statuses.length?g.pay_statuses:boConsts.PAY_STATUS_FALLBACK.map(function(e){return{codeValue:e.codeValue,codeLabel:e.codeLabel}}));M.baseForm=[{key:"orderId",label:"\uC8FC\uBB38ID",type:"text",required:!0,placeholder:"ORD-2026-XXX",readonly:!w.value},{key:"memberId",label:"\uD68C\uC6D0ID",type:"slot",name:"memberId",required:!0},{key:"memberNm",label:"\uD68C\uC6D0\uBA85",type:"text"},{key:"orderDate",label:"\uC8FC\uBB38\uC77C\uC2DC",type:"text",placeholder:"2026-04-08 10:00"},{key:"prodNm",label:"\uC0C1\uD488",type:"text",placeholder:"\uC0C1\uD488\uBA85",colSpan:2},{key:"_vendor",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"slot",name:"vendor",colSpan:2},{key:"totalAmt",label:"\uACB0\uC81C\uAE08\uC561",type:"number"},{key:"payMethodCd",label:"\uACB0\uC81C\uC218\uB2E8",type:"select",options:()=>g.payment_methods},{key:"payStatusCd",label:"\uACB0\uC81C\uC0C1\uD0DC",type:"select",options:()=>Xe.value},{key:"payDate",label:"\uACB0\uC81C\uC77C\uC2DC",type:"text",placeholder:"2026-04-05 14:32"},{key:"orderStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>g.order_statuses},{key:"memo",label:"\uBA54\uBAA8",type:"slot",name:"memo",colSpan:2}],M.orderItemGridRowDetail=[{key:"_exchLabel",label:"\uAD50\uD658\uD488",type:"readonly",html:!0,fmt:()=>'<span style="font-size:11px;padding:2px 8px;border-radius:10px;background:#3b82f6;color:#fff;font-weight:800;">\u2194 \uAD50\uD658</span>'},{key:"_exchProd",label:"\uC0C1\uD488\uBA85",type:"readonly",html:!0,fmt:(e,t)=>`<b style="color:#1e40af;">${R(t).prodNm||"-"}</b>`},{key:"_exchColor",label:"\uC0C9\uC0C1",type:"readonly",html:!0,fmt:(e,t)=>`<b>${t.color||"-"}</b> \u2192 <b style="color:#1e40af;">${R(t).color||"-"}</b>`},{key:"_exchSize",label:"\uC0AC\uC774\uC988",type:"readonly",fmt:(e,t)=>R(t).size||"-"},{key:"_exchQty",label:"\uC218\uB7C9",type:"readonly",fmt:(e,t)=>R(t).qty||"-"},{key:"_tracking",label:"\uBC1C\uC1A1\uCD94\uC801",type:"slot",name:"tracking",visible:e=>!!R(e).courier}];const ye=()=>{const e=new URLSearchParams;return e.set("page","odOrderDtl"),e.set("id",o.orderId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},Ke=()=>{try{window.coExtSdk.shareKakao({title:`\uC8FC\uBB38 ${o.orderId} - ShopJoy BO`,description:o.prodNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:ye()})}catch(e){r(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},Je=async()=>{try{await navigator.clipboard.writeText(ye()),r("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){r(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},be=oe(null),ee=oe(!1);return{columns:M,handleShareKakao:Ke,handleCopyLink:Je,pdfAreaRef:be,pdfExporting:ee,handleExportPdf:async()=>{ee.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC8FC\uBB38\uC0C1\uC138_${o.orderId}.pdf`);await window.boUtil.bofExportPdf(be.value,e,r)}finally{ee.value=!1}},form:o,errors:S,orderItems:d,activeTab:Ce,tabMode2:we,odModal:x,payState:K,handleBtnAction:re,handleSelectAction:Ae,fnCallbackModal:Re,onProdToggled:_e,cfIsNew:w,cfDtlMode:ue,cfCurrentStepIdx:Le,cfIsCanceled:ze,cfRelatedVendor:Fe,cfRelatedDelivery:Ue,cfRelatedClaim:b,tabs:We,cfEditHistList:fe,cfPaymentList:ne,cfStatusHistList:se,cfAllExpanded:pe,cfOrderItemSummary:je,ORDER_STEPS:ae,CLAIM_FLOWS:qe,CLAIM_TYPE_COLOR:de,fmt:I,fnAmtShort:Ye,showTab:Ve,isExpanded:ce,fnItemExpanded:$e,getExchangedItem:R,showRefModal:$,showToast:r,showConfirm:G}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uC8FC\uBB38 \uC0C1\uC138' : (cfIsNew ? '\uC8FC\uBB38 \uB4F1\uB85D' : (cfDtlMode ? '\uC8FC\uBB38 \uC0C1\uC138' : '\uC8FC\uBB38 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.orderId)">
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
  <!-- ===== \u25A0.\u25A0. \uD0ED\uBC14 (\uCD08\uAE30/\uC2E0\uADDC\uC5D0\uB3C4 \uD56D\uC0C1 \uD45C\uC2DC \u2014 \uD654\uBA74 \uAD6C\uC131 \uB178\uCD9C) ==================== -->
  <bo-tab-bar :tabs="tabs" :tab="activeTab" :tab-mode="tabMode2"
    @tab-select="id => handleBtnAction('tab-change', id)"
    @mode-select="m => handleBtnAction('viewMode-change', m)" />
  <!-- ===== \u25A1.\u25A0. \uD0ED\uBC14 ==================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <div v-if="showTab('info')" class="dtl-pane">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uC0C1\uC138\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. MD \uB300\uB9AC\uC8FC\uBB38 \uD234\uBC14 (\uC8FC\uBB38 \uBCF5\uC0AC \u2014 \uD3B8\uC9D1 \uBAA8\uB4DC\uC5D0\uC11C\uB9CC) ==================== -->
      <div v-if="!cfDtlMode" style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding:10px 14px;background:#eef4ff;border:1px solid #c7d9f5;border-radius:8px;">
        <span style="font-size:12px;font-weight:700;color:#1e40af;">\u{1F9FE} MD \uB300\uB9AC\uC8FC\uBB38</span>
        <span style="font-size:11px;color:#5a6b8c;">\uACE0\uAC1D \uC694\uCCAD\uC73C\uB85C MD\uAC00 \uB300\uC2E0 \uC8FC\uBB38\uD569\uB2C8\uB2E4.</span>
        <button type="button" class="btn btn-secondary btn-sm" style="margin-left:auto;" @click="handleBtnAction('orderCopyModal-open')">\u{1F4CB} \uAE30\uC874 \uC8FC\uBB38 \uBCF5\uC0AC</button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC8FC\uBB38 \uC9C4\uD589 \uC0C1\uD0DC \uD750\uB984 (\uCD08\uAE30/\uC2E0\uADDC\uC5D0\uB3C4 \uD45C\uC2DC \u2014 \uBE48 \uC8FC\uBB38\uC740 \uD68C\uC0C9 \uC2A4\uD15D) ====== -->
      <div style="margin-bottom:20px;padding:16px 18px;background:#f6f6f6;border-radius:10px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <span style="font-size:11px;font-weight:800;padding:3px 10px;border-radius:10px;color:#fff;background:#16a34a;">\uC8FC\uBB38</span>
          <span style="font-size:13px;font-weight:700;color:#222;">{{ form.orderId || (cfIsNew ? '\uC2E0\uADDC \uC8FC\uBB38' : '') }}</span>
          <span v-if="form.orderDate" style="font-size:11px;color:#888;">{{ form.orderDate }}</span>
        </div>
        <div v-if="cfIsCanceled" style="text-align:center;padding:8px 0;">
          <span style="font-size:14px;font-weight:700;color:#cf1322;letter-spacing:1px;">\u2298 \uCDE8\uC18C\uB428</span>
        </div>
        <div v-else style="display:flex;align-items:flex-start;overflow-x:auto;">
          <template v-for="(step, idx) in ORDER_STEPS" :key="step">
            <div style="display:flex;flex-direction:column;align-items:center;min-width:80px;flex:1;">
              <div :style="{
                width: idx === cfCurrentStepIdx ? '14px' : '10px',
                height: idx === cfCurrentStepIdx ? '14px' : '10px',
                borderRadius:'50%', marginBottom:'6px', flexShrink:0, transition:'all .15s',
                boxShadow: idx === cfCurrentStepIdx ? '0 0 0 3px rgba(74,222,128,0.3)' : 'none',
                background: idx <= cfCurrentStepIdx ? '#4ade80' : '#bbb',
                }"></div>
              <div :style="{
                fontSize:'11.5px', fontWeight: idx === cfCurrentStepIdx ? 800 : 600,
                color: idx === cfCurrentStepIdx ? '#16a34a' : (idx < cfCurrentStepIdx ? '#444' : '#bbb'),
                whiteSpace:'nowrap',
                }">
                {{ step==='\uC644\uB8CC' ? '\uAD6C\uB9E4\uD655\uC815' : step }}
              </div>
              <span v-if="step==='\uBC30\uC1A1\uC644\uB8CC' ? (cfRelatedDelivery ? (cfRelatedDelivery.trackingNo) : false) : false" @click="handleBtnAction('tracking-open', { courier: cfRelatedDelivery.courier, trackingNo: cfRelatedDelivery.trackingNo })" title="\uBC30\uC1A1\uC870\uD68C \uCC3D \uC5F4\uAE30" style="margin-top:4px;padding:1px 7px;border:1px solid #86efac;background:#dcfce7;color:#15803d;border-radius:4px;font-size:0.7rem;font-weight:700;user-select:none;">
                {{ (cfRelatedDelivery.courier||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','') || 'CJ' }}\uBC30\uC1A1 \u{1F50D}
              </span>
            </div>
            <div v-if="idx < ORDER_STEPS.length - 1"
              :style="{flex:'1', height:'2px', minWidth:'12px', marginTop:'6px',
              background: idx < cfCurrentStepIdx ? '#4ade80' : '#bbb'}"></div>
          </template>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD074\uB808\uC784 \uC9C4\uD589 \uD750\uB984 (\uC788\uC744 \uB54C\uB9CC) =================================== -->
      <div v-if="!cfIsNew ? (cfRelatedClaim) : false" style="margin-bottom:20px;padding:16px;border-radius:10px;border:1px dashed #e8e8e8;" :style="{ background: 'linear-gradient(135deg,'+CLAIM_TYPE_COLOR[cfRelatedClaim.type]+'15 0%,#fff 70%)', }">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
          <span :style="{
            fontSize:'11px',padding:'3px 10px',borderRadius:'10px',color:'#fff',fontWeight:800,
            background: CLAIM_TYPE_COLOR[cfRelatedClaim.type],
            }">
            \u21A9 {{ cfRelatedClaim.type }}
          </span>
          <span style="font-size:13px;font-weight:700;color:#222;">{{ cfRelatedClaim.claimId }}</span>
          <span style="font-size:11px;color:#888;">\uC2E0\uCCAD\uC77C: {{ cfRelatedClaim.requestDate }}</span>
          <span v-if="cfRelatedClaim.reason" style="font-size:11px;color:#888;margin-left:auto;">\uC0AC\uC720: {{ cfRelatedClaim.reason }}</span>
        </div>
        <div style="display:flex;align-items:flex-start;overflow-x:auto;">
          <template v-for="(step, idx) in CLAIM_FLOWS[cfRelatedClaim.type]" :key="step">
            <div style="display:flex;flex-direction:column;align-items:center;min-width:64px;flex:1;">
              <div :style="{
                width: cfRelatedClaim.status===step ? '14px' : '10px',
                height: cfRelatedClaim.status===step ? '14px' : '10px',
                borderRadius:'50%', marginBottom:'6px',
                boxShadow: cfRelatedClaim.status===step ? '0 0 0 3px '+CLAIM_TYPE_COLOR[cfRelatedClaim.type]+'40' : 'none',
                background: CLAIM_FLOWS[cfRelatedClaim.type].indexOf(cfRelatedClaim.status) >= idx ? CLAIM_TYPE_COLOR[cfRelatedClaim.type] : '#bbb',
                }"></div>
              <div :style="{
                fontSize:'10.5px', fontWeight: cfRelatedClaim.status===step ? 800 : 500,
                color: cfRelatedClaim.status===step ? CLAIM_TYPE_COLOR[cfRelatedClaim.type] : (CLAIM_FLOWS[cfRelatedClaim.type].indexOf(cfRelatedClaim.status) > idx ? '#444' : '#bbb'),
                whiteSpace:'nowrap',
                }">
                {{ step }}
              </div>
              <span v-if="step==='\uC218\uAC70\uC911' ? (cfRelatedClaim.trackingNo) : false" @click="handleBtnAction('tracking-open', { courier: cfRelatedClaim.courier, trackingNo: cfRelatedClaim.trackingNo })" title="\uC218\uAC70 \uBC30\uC1A1\uC870\uD68C" style="margin-top:4px;padding:1px 7px;border:1px solid #fed7aa;background:#fff7ed;color:#c2410c;border-radius:4px;font-size:0.7rem;font-weight:700;user-select:none;">
                {{ (cfRelatedClaim.courier||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','') || 'CJ' }}\uC218\uAC70 \u{1F50D}
              </span>
              <span v-if="step==='\uC644\uB8CC' ? (cfRelatedClaim.exchangeTrackingNo) : false" @click="handleBtnAction('tracking-open', { courier: cfRelatedClaim.exchangeCourier, trackingNo: cfRelatedClaim.exchangeTrackingNo })" title="\uBC1C\uC1A1 \uBC30\uC1A1\uC870\uD68C" style="margin-top:4px;padding:1px 7px;border:1px solid #93c5fd;background:#dbeafe;color:#1d4ed8;border-radius:4px;font-size:0.7rem;font-weight:700;user-select:none;">
                {{ (cfRelatedClaim.exchangeCourier||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','') || 'CJ' }}\uBC1C\uC1A1 \u{1F50D}
              </span>
            </div>
            <div v-if="idx < CLAIM_FLOWS[cfRelatedClaim.type].length - 1"
              :style="{
              flex:1, height:'2px', minWidth:'8px', marginTop:'6px',
              background: CLAIM_FLOWS[cfRelatedClaim.type].indexOf(cfRelatedClaim.status) > idx ? CLAIM_TYPE_COLOR[cfRelatedClaim.type] : '#bbb',
              }"></div>
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
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD68C\uC6D0ID + \uC120\uD0DD/\uBCF4\uAE30 (MD \uB300\uB9AC\uC8FC\uBB38: \uD68C\uC6D0 \uBAA8\uB2EC \uC120\uD0DD) ============ -->
        <template #memberId>
          <div v-if="cfDtlMode" class="readonly-field-plain" style="display:flex;gap:6px;align-items:center;">
            <span>{{ form.memberId || '-' }}</span>
            <span v-if="form.memberId" class="ref-link" @click="handleBtnAction('form-memberRef')">\uBCF4\uAE30</span>
          </div>
          <template v-else>
            <div style="display:flex;gap:6px;align-items:center;">
              <input class="form-control" v-model="form.memberId" placeholder="\uD68C\uC6D0 ID" :class="errors.memberId ? 'is-invalid' : ''" style="flex:1;min-width:0;"
                @input="form.memberId && errors.memberId ? delete errors.memberId : null" />
              <span style="display:inline-flex;align-items:center;flex-shrink:0;">
                <button type="button" class="btn btn-blue btn-sm" @click="handleBtnAction('memberModal-open')">\u{1F50D} \uD68C\uC6D0\uC120\uD0DD</button>
                <button v-if="form.memberId" type="button" title="\uC120\uD0DD \uD574\uC81C" style="background:none;border:none;padding:0 4px;color:#bbb;cursor:pointer;font-size:11px;line-height:1;" @click="form.memberId = ''; form.memberNm = '';">x</button>
              </span>
              <span v-if="form.memberId" class="ref-link" @click="handleBtnAction('form-memberRef')">\uBCF4\uAE30</span>
            </div>
            <span v-if="errors.memberId" class="field-error">{{ errors.memberId }}</span>
          </template>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4 \uD45C\uC2DC =========================================== -->
        <template #vendor>
          <div v-if="cfRelatedVendor" style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:13px;font-weight:700;color:#222;">{{ cfRelatedVendor.vendorNm }}</span>
            <span style="font-size:11px;color:#888;">| {{ cfRelatedVendor.ceo }} | {{ cfRelatedVendor.phone }}</span>
            <span class="ref-link" @click="handleBtnAction('form-vendorRef', cfRelatedVendor.vendorId)">\uBCF4\uAE30</span>
          </div>
          <div v-else style="font-size:12px;color:#bbb;">-</div>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBA54\uBAA8: Quill \uB610\uB294 view \uBAA8\uB4DC HTML ========================= -->
        <template #memo>
          <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:90px;line-height:1.6;" v-html="form.memo || '-'"></div>
          <base-html-editor v-else v-model="form.memo" height="180px" />
        </template>
      </bo-form-area>
    </div>
    <!-- ===== \u25A0.\u25A0. \uC8FC\uBB38\uD56D\uBAA9\uBAA9\uB85D \uD0ED ============================================== -->
    <div v-if="showTab('items')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4E6} \uC8FC\uBB38\uD56D\uBAA9 <span class="tab-count"> {{ orderItems.length }} </span></div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uD488 \uC120\uD0DD \uD234\uBC14 (MD \uB300\uB9AC\uC8FC\uBB38 \u2014 \uD3B8\uC9D1 \uBAA8\uB4DC) ====================== -->
      <div v-if="!cfDtlMode" style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <button type="button" class="btn btn-blue btn-sm" @click="handleBtnAction('prodModal-open')">\u{1F6CD} \uC0C1\uD488 \uC120\uD0DD</button>
        <span style="font-size:11px;color:#888;">\uC0C1\uD488\uC744 \uC120\uD0DD\uD558\uC5EC \uC8FC\uBB38\uD56D\uBAA9\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.</span>
      </div>
      <div v-if="cfRelatedClaim ? (cfRelatedClaim.type==='\uAD50\uD658') : false" style="display:flex;justify-content:flex-end;margin-bottom:10px;">
        <button class="btn btn-secondary btn-sm" @click="handleBtnAction('orderItems-toggleExpandAll')">
          {{ cfAllExpanded ? '\u25B2 \uAD50\uD658\uD488 \uBAA8\uB450\uC811\uAE30' : '\u25BC \uAD50\uD658\uD488 \uBAA8\uB450\uD3BC\uCE58\uAE30' }}
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uD0DC \uC694\uC57D \uC5F4 ============================================ -->
      <div v-if="orderItems.length" style="display:grid;grid-template-columns:repeat(6,1fr);border:1px solid #ede6e6;border-radius:8px;overflow:hidden;margin-bottom:10px;">
        <div style="padding:9px 12px;text-align:center;background:#f4f8ff;border-right:1px solid #ede6e6;">
          <div style="font-size:10px;color:#8a9bbf;font-weight:600;margin-bottom:4px;">\uC8FC\uBB38\uC911</div>
          <div style="font-size:16px;font-weight:700;color:#3a6ecf;">{{ cfOrderItemSummary.inProgress }}<span style="font-size:11px;font-weight:400;">\uAC74</span></div>
          <div style="font-size:11px;color:#8ab0e0;margin-top:2px;">{{ fnAmtShort(cfOrderItemSummary.amtProgress) }}</div>
        </div>
        <div style="padding:9px 12px;text-align:center;background:#f4f8f7;border-right:1px solid #ede6e6;">
          <div style="font-size:10px;color:#7a9595;font-weight:600;margin-bottom:4px;">\uBC30\uC1A1\uC644\uB8CC</div>
          <div style="font-size:16px;font-weight:700;color:#5a8080;">{{ cfOrderItemSummary.delivered }}<span style="font-size:11px;font-weight:400;">\uAC74</span></div>
          <div style="font-size:11px;color:#7aa0a0;margin-top:2px;">{{ fnAmtShort(cfOrderItemSummary.amtDelivered) }}</div>
        </div>
        <div style="padding:9px 12px;text-align:center;background:#f4fbf7;border-right:1px solid #ede6e6;">
          <div style="font-size:10px;color:#6a9580;font-weight:600;margin-bottom:4px;">\uC8FC\uBB38\uC644\uB8CC</div>
          <div style="font-size:16px;font-weight:700;color:#2a7d52;">{{ cfOrderItemSummary.confirmed }}<span style="font-size:11px;font-weight:400;">\uAC74</span></div>
          <div style="font-size:11px;color:#6aaa80;margin-top:2px;">{{ fnAmtShort(cfOrderItemSummary.amtConfirmed) }}</div>
        </div>
        <div style="padding:9px 12px;text-align:center;background:#fff8f0;border-right:1px solid #ede6e6;">
          <div style="font-size:10px;color:#b08050;font-weight:600;margin-bottom:4px;">\uD074\uB808\uC784\uC9C4\uD589\uC911</div>
          <div style="font-size:16px;font-weight:700;color:#c07030;">{{ cfOrderItemSummary.claimActive.total }}<span style="font-size:11px;font-weight:400;">\uAC74</span></div>
          <div style="font-size:11px;color:#c0905a;margin-top:2px;">{{ fnAmtShort(cfOrderItemSummary.amtClaimActive) }}</div>
          <div style="font-size:10px;color:#c0a080;margin-top:2px;">\uCDE8\uC18C:{{ cfOrderItemSummary.claimActive.cancel }} \uBC18\uD488:{{ cfOrderItemSummary.claimActive.return }} \uAD50\uD658:{{ cfOrderItemSummary.claimActive.exchange }}</div>
        </div>
        <div style="padding:9px 12px;text-align:center;background:#f9f9f9;border-right:1px solid #ede6e6;">
          <div style="font-size:10px;color:#909090;font-weight:600;margin-bottom:4px;">\uD074\uB808\uC784\uC644\uB8CC</div>
          <div style="font-size:16px;font-weight:700;color:#808080;">{{ cfOrderItemSummary.claimDone.total }}<span style="font-size:11px;font-weight:400;">\uAC74</span></div>
          <div style="font-size:11px;color:#a0a0a0;margin-top:2px;">{{ fnAmtShort(cfOrderItemSummary.amtClaimDone) }}</div>
          <div style="font-size:10px;color:#b0b0b0;margin-top:2px;">\uCDE8\uC18C:{{ cfOrderItemSummary.claimDone.cancel }} \uBC18\uD488:{{ cfOrderItemSummary.claimDone.return }} \uAD50\uD658:{{ cfOrderItemSummary.claimDone.exchange }}</div>
        </div>
        <div style="padding:9px 12px;text-align:center;background:#fff5f5;">
          <div style="font-size:10px;color:#c08080;font-weight:600;margin-bottom:4px;">\uD658\uBD88\uC644\uB8CC</div>
          <div style="font-size:16px;font-weight:700;color:#d95050;">{{ cfOrderItemSummary.refund }}<span style="font-size:11px;font-weight:400;">\uAC74</span></div>
          <div style="font-size:11px;color:#e07070;margin-top:2px;">{{ fnAmtShort(cfOrderItemSummary.amtRefund) }}</div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.orderItemGrid" :rows="orderItems"
        :is-expanded="fnItemExpanded"
        empty-text="\uC8FC\uBB38 \uD56D\uBAA9 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.">
        <template #cell-prodNm="{ row, idx }">
          <td style="font-size:12px;">
            <span v-if="cfRelatedClaim ? (cfRelatedClaim.type==='\uAD50\uD658') : false" @click="handleSelectAction('orderItems-rowToggleExpand', idx)" style="font-size:11px;color:#3b82f6;font-weight:800;user-select:none;margin-right:6px;" :title="isExpanded(idx)?'\uAD50\uD658\uD488 \uC228\uAE30\uAE30':'\uAD50\uD658\uD488 \uBCF4\uAE30'">
              {{ isExpanded(idx) ? '\u25BC' : '\u25B6' }}
            </span>
            <span style="font-size:18px;margin-right:6px;">{{ row.emoji || '\u{1F6CD}' }}</span>
            {{ row.prodNm }}
          </td>
        </template>
        <template #row-expand="{ row, colspan }">
          <td :colspan="colspan" style="padding:10px 14px;background:#f0f7ff;">
            <bo-form-area plain-readonly :columns="columns.orderItemGridRowDetail" :form="row" :cols="3" compact readonly label-left :show-actions="false">
              <template #tracking>
                <div class="readonly-field" @click="handleBtnAction('tracking-open', { courier: getExchangedItem(row).courier, trackingNo: getExchangedItem(row).trackingNo })" style="padding:2px 8px;border:1px solid #93c5fd;background:#dbeafe;color:#1d4ed8;border-radius:4px;font-size:11px;font-weight:700;display:inline-block;">
                  {{ getExchangedItem(row).courier }} \xB7 {{ getExchangedItem(row).trackingNo || '-' }} \u{1F50D}
                </div>
              </template>
            </bo-form-area>
          </td>
        </template>
        <template #tfoot>
          <tr style="background:#fafafa;font-weight:700;">
            <td style="width:36px;"></td>
            <td colspan="4" style="text-align:right;color:#555;">\uD569\uACC4</td>
            <td style="width:90px;text-align:right;color:#666;">{{ fmt(orderItems.reduce((s,x)=>s+(x.salePrice||x.price||0),0)) }}</td>
            <td style="width:80px;"></td>
            <td style="width:90px;text-align:right;color:#d84315;">-{{ fmt(orderItems.reduce((s,x)=>s+(x.discAmount||0),0)) }}</td>
            <td style="width:100px;text-align:right;color:#1a1a1a;">{{ fmt(orderItems.reduce((s,x)=>s+(x.price||0),0)) }}</td>
            <td colspan="3"></td>
            <td v-if="!cfDtlMode"></td>
          </tr>
        </template>
      </bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC8FC\uBB38\uD56D\uBAA9\uBAA9\uB85D \uD0ED ============================================== -->
    <!-- ===== \u25A0.\u25A0. \uACB0\uC81C\uC815\uBCF4 \uD0ED ================================================ -->
    <div v-if="showTab('payment')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4B3} \uACB0\uC81C\uC815\uBCF4 <span class="tab-count"> {{ cfPaymentList.length }} </span></div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uACB0\uC81C \uC694\uC57D + \uD1A0\uC2A4 \uAC04\uD3B8\uC704\uC82F \uACB0\uC81C (\uD3B8\uC9D1 \uBAA8\uB4DC) ==================== -->
      <div v-if="!cfDtlMode" style="margin-bottom:18px;padding:16px 18px;background:#f9fafb;border:1px solid #e5e8ed;border-radius:10px;">
        <div style="display:flex;gap:24px;align-items:flex-start;">
          <!-- \uC88C: \uAE08\uC561 \uC694\uC57D -->
          <div style="display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap;flex:1;">
            <div style="margin:0;">
              <label class="form-label">\uC0C1\uD488 \uD569\uACC4</label>
              <div class="form-control" style="background:#fff;text-align:right;font-weight:700;min-width:120px;">{{ fmt(orderItems.reduce((s,x)=>s+(Number(x.price)||0),0)) }}</div>
            </div>
            <div style="font-size:18px;color:#bbb;padding-bottom:6px;">+</div>
            <div style="margin:0;">
              <label class="form-label">\uBC30\uC1A1\uBE44 <span style="font-size:10px;color:#e8587a;">(\uCD94\uAC00\uC694\uCCAD \uAC00\uB2A5)</span></label>
              <input class="form-control" type="number" v-model.number="form.dlivFee" style="text-align:right;min-width:120px;" @input="handleSelectAction('dlivFee-change')" />
            </div>
            <div style="font-size:18px;color:#bbb;padding-bottom:6px;">=</div>
            <div style="margin:0;">
              <label class="form-label">\uACB0\uC81C \uAE08\uC561</label>
              <div class="form-control" style="background:#fff8f9;border-color:#f3c6d4;text-align:right;font-weight:800;color:#e8587a;min-width:140px;">{{ fmt(form.totalAmt) }}</div>
            </div>
          </div>
          <!-- \uC6B0: \uAC04\uD3B8 \uC704\uC82F \uACB0\uC81C (\uACB0\uC81C\uC704\uC82F \uC5F0\uB3D9 \uD0A4 \uC0AC\uC6A9) -->
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:10px;flex-shrink:0;min-width:220px;">
            <base-toss-pay-widget :amount="Number(form.totalAmt)||0"
              :order-id="form.orderId" :order-name="form.prodNm || '\uC8FC\uBB38\uACB0\uC81C'"
              :customer-key="form.memberId" :customer-name="form.memberNm || '\uACE0\uAC1D'"
              success-page="odOrderMng" fail-page="odOrderMng"
              :show-toast="showToast" :show-confirm="showConfirm" />
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCD94\uAC00\uACB0\uC81C \uC694\uCCAD (\uD3B8\uC9D1 \uBAA8\uB4DC) ===================================== -->
      <div v-if="!cfDtlMode" style="margin-bottom:18px;padding:14px 18px;background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;">
        <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:8px;">\u2795 \uCD94\uAC00\uACB0\uC81C \uC694\uCCAD <span style="font-weight:400;color:#9a6a4a;">\u2014 \uBC30\uC1A1\uBE44 \uB4F1 \uCD94\uAC00 \uBE44\uC6A9\uC744 \uACE0\uAC1D\uC5D0\uAC8C \uC694\uCCAD</span></div>
        <div style="display:flex;align-items:flex-end;gap:10px;flex-wrap:wrap;">
          <div style="margin:0;">
            <label class="form-label">\uC694\uCCAD \uAE08\uC561</label>
            <input class="form-control" type="number" v-model.number="form.extraReqAmt" placeholder="0" style="text-align:right;min-width:120px;" />
          </div>
          <div style="margin:0;flex:1;min-width:200px;">
            <label class="form-label">\uC0AC\uC720</label>
            <input class="form-control" v-model="form.extraReqReason" placeholder="\uC608: \uB3C4\uC11C\uC0B0\uAC04 \uCD94\uAC00 \uBC30\uC1A1\uBE44" />
          </div>
          <button type="button" class="btn btn_send" style="flex-shrink:0;" @click="handleBtnAction('extraPay-request')">\uC804\uC1A1</button>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.paymentGrid" :rows="cfPaymentList" empty-text="\uACB0\uC81C\uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."></bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uACB0\uC81C\uC815\uBCF4 \uD0ED ================================================ -->
    <!-- ===== \u25A0.\u25A0. \uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825 \uD0ED ============================================== -->
    <div v-if="showTab('hist')" class="dtl-pane">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title" style="margin-bottom:10px;padding:0 0 10px 0;">
        \u{1F552} \uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825
        <span class="tab-count">{{ cfStatusHistList.length }}</span>
      </div>
      <od-order-hist :order-id="form.orderId" :navigate="navigate" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825 \uD0ED ============================================== -->
    <!-- ===== \u25A0.\u25A0. \uC815\uBCF4\uC218\uC815\uC774\uB825 \uD0ED ============================================== -->
    <div v-if="showTab('editHist')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4DD} \uC815\uBCF4\uC218\uC815\uC774\uB825 <span class="tab-count"> {{ cfEditHistList.length }} </span></div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.editHistGrid" :rows="cfEditHistList" empty-text="\uC815\uBCF4 \uC218\uC815 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."></bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC815\uBCF4\uC218\uC815\uC774\uB825 \uD0ED ============================================== -->
  </div>
  <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <!-- ===== \u25A0. MD \uB300\uB9AC\uC8FC\uBB38 \uBAA8\uB2EC (\uD68C\uC6D0 \uC120\uD0DD / \uC8FC\uBB38 \uBCF5\uC0AC / \uC0C1\uD488 \uC120\uD0DD) =================== -->
  <!-- v-if \uBBF8\uC0AC\uC6A9: :show false\u2192true \uC804\uD658\uC744 \uBAA8\uB2EC \uB0B4\uBD80 watch \uAC00 \uAD00\uCC30\uD574\uC57C \uCD5C\uCD08 \uBAA9\uB85D \uB85C\uB4DC\uB428 -->
  <bo-cm-popup-modal popup-cmd="cmPopup-member-pick" popup-code="member" :show="odModal.member" :on-callback="fnCallbackModal" @close="handleBtnAction('memberModal-close')" />
  <bo-cm-popup-modal v-if="odModal.orderCopy" popup-cmd="cmPopup-order-copy" popup-code="order" :on-callback="fnCallbackModal" @close="handleBtnAction('orderCopyModal-close')" />
  <bo-cm-popup-modal popup-code="prod" result-type="row" :show="odModal.prod" :selected-ids="orderItems.map(it => it.productId)" @toggle="onProdToggled" @close="handleBtnAction('prodModal-close')" />
  <!-- ===== \u25A1. MD \uB300\uB9AC\uC8FC\uBB38 \uBAA8\uB2EC ============================================== -->
</bo-container>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
</div>
`};
