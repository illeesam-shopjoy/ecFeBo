window.ZdTestPayTossWidget={name:"ZdTestPayTossWidget",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(E){var h;const{reactive:c,computed:A,onMounted:z,onUnmounted:P}=Vue,r=E.showToast||((h=window.boApp)==null?void 0:h.showToast)||(()=>{}),y=(()=>{const e=window.location.port,t=window.location.hostname,a=window.location.protocol;return["5500","5501","4000","3000"].includes(e)?{name:"local",backendOrigin:a+"//"+t+":8080"}:e==="8080"||/^(localhost|127\.0\.0\.1|192\.168\.|10\.)/.test(t)?{name:"dev",backendOrigin:window.location.origin}:{name:"prod",backendOrigin:window.location.origin}})(),f={name:y.name,backendOrigin:y.backendOrigin,currentOrigin:window.location.origin},g=f.currentOrigin+"/bo.html?callback_pay_toss_succ=1",v=f.currentOrigin+"/bo.html?callback_pay_toss_fail=1",s=c({clientKey:"test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm",secretKey:""}),o=c({amount:1e3,orderId:"PAY-"+Date.now(),orderName:"\uD14C\uC2A4\uD2B8 \uC0C1\uD488",customerName:"\uC1A1\uC131\uC77C",customerEmail:"illeesam@gmail.com",customerMobilePhone:"",successUrl:g,failUrl:v,taxFreeAmount:0,taxExemptionAmount:0,cultureExpense:!1,useEscrow:!1,escrowProducts:"",addCardBenefits:!1,appScheme:"",windowTarget:"",currency:"KRW",country:"KR"}),d=c({sdkStatus:"",sdkUrl:"",initDetail:"",preResult:null,confirmResult:null,cancelResult:null,error:"",phase:"idle",callbackParams:null}),n=c({sdkLoaded:!1,loading:!1,widgetMounted:!1,diagramOpen:!1,erdOpen:!1,apiPanel1Open:!1,apiPanel2Open:!1,apiPanel3Open:!1,apiPanel4Open:!1,apiPanel5Open:!1}),m="toss-widget-container-"+Math.random().toString(36).slice(2);let l=null;const I=()=>{const e={};new URLSearchParams(window.location.search).forEach((a,i)=>{e[i]=a});const t=f.currentOrigin+window.location.pathname+window.location.hash;e.callback_pay_toss_succ==="1"&&e.paymentKey&&e.orderId&&e.amount?(d.callbackParams={paymentKey:e.paymentKey,orderId:e.orderId,amount:Number(e.amount)},d.phase="callback_received",history.replaceState(null,"",t),history.pushState(null,"",t),r("\uD1A0\uC2A4 \uACB0\uC81C \uC131\uACF5 \uCF5C\uBC31 \uC218\uC2E0 \u2014 \uC544\uB798 \uBC30\uB108\uC5D0\uC11C \uC2B9\uC778 \uC694\uCCAD\uD558\uC138\uC694.","success")):e.callback_pay_toss_fail==="1"&&(d.error="\uACB0\uC81C \uC2E4\uD328 \uB610\uB294 \uC0AC\uC6A9\uC790 \uCDE8\uC18C (\uD1A0\uC2A4 failUrl \uCF5C\uBC31)",d.phase="idle",history.replaceState(null,"",t),history.pushState(null,"",t),r(d.error,"error",0))};z(async()=>{var e,t,a;I();try{const i=await((t=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:t.call(e,{propKeys:"app.pay.toss.widget-client-key,app.pay.toss.secret-key"},"\uD1A0\uC2A4 \uACB0\uC81C\uC704\uC82F \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),p=((a=i==null?void 0:i.data)==null?void 0:a.data)||[],_=B=>{const k=p.filter(x=>x.propKey===B&&x.propValue),b=k.find(x=>/local|dev/.test(x.propProfile||""))||k[0];return(b==null?void 0:b.propValue)||""},w=_("app.pay.toss.widget-client-key");w&&(s.clientKey=w),s.secretKey=_("app.pay.toss.secret-key")}catch{}N()}),P(()=>{l=null});const N=()=>{const e=typeof window.TossPayments=="function";n.sdkLoaded=e,d.sdkUrl="https://js.tosspayments.com/v2/standard",d.sdkStatus=e?"\u2705 TossPayments SDK \uB85C\uB4DC\uB428":"\u274C TossPayments SDK \uC5C6\uC74C",d.initDetail=e?"Widget Client Key: "+(s.clientKey||"(\uBBF8\uC124\uC815)"):""},S=()=>{o.orderId="PAY-"+Date.now()},D=async()=>{if(!s.clientKey){r("Widget Client Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if(!n.sdkLoaded){r("TossPayments SDK \uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error",0);return}d.error="";try{l=(await TossPayments(s.clientKey)).widgets({customerKey:"ANONYMOUS_"+o.orderId}),await l.setAmount({currency:o.currency||"KRW",value:Number(o.amount)}),await l.renderPaymentMethods({selector:"#"+m,variantKey:"DEFAULT"}),n.widgetMounted=!0,r("\uACB0\uC81C\uC704\uC82F\uC774 \uB80C\uB354\uB9C1\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){d.error=e.message||String(e),r("\uC704\uC82F \uB80C\uB354\uB9C1 \uC624\uB958: "+(e.message||e),"error",0)}},R=async()=>{var e,t,a;if(!l){r("\uBA3C\uC800 \uC704\uC82F\uC744 \uB80C\uB354\uB9C1\uD558\uC138\uC694.","error");return}n.loading=!0,d.error="",d.preResult=null,d.phase="pre_saving";try{const i={orderId:o.orderId,orderName:o.orderName,amount:Number(o.amount),currency:o.currency||"KRW",customerName:o.customerName,customerEmail:o.customerEmail,pgProvider:"toss_widget",status:"PENDING",paymentKey:null},p=await boApi.post("/bo/zd/pay-test/pre-save",i,coUtil.cofApiHdr("\uD1A0\uC2A4 \uACB0\uC81C\uC704\uC82F \uD14C\uC2A4\uD2B8","\uACB0\uC81C\uC804\uC784\uC2DC\uC800\uC7A5"));d.preResult=((e=p.data)==null?void 0:e.data)||p.data,d.phase="pre_saved",r("\uC8FC\uBB38 \uC784\uC2DC\uC800\uC7A5 \uC644\uB8CC (PENDING) \u2014 \uACB0\uC81C\uCC3D\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.","success")}catch(i){if(((t=i.response)==null?void 0:t.status)===404||((a=i.response)==null?void 0:a.status)===405)d.preResult={orderId:o.orderId,status:"PENDING",note:"\uBC31\uC5D4\uB4DC \uBBF8\uAD6C\uD604 (\uD14C\uC2A4\uD2B8 \uC2DC\uBBAC)"},d.phase="pre_saved",r("pre-save API \uBBF8\uAD6C\uD604 \u2014 \uC2DC\uBBAC\uB808\uC774\uC158\uC73C\uB85C \uACC4\uC18D \uC9C4\uD589\uD569\uB2C8\uB2E4.","success");else{d.error="[\uC784\uC2DC\uC800\uC7A5 \uC2E4\uD328] "+coUtil.cofErrMsg(i),d.phase="idle",n.loading=!1,r(d.error,"error",0);return}}d.phase="paying";try{const i={orderId:o.orderId,orderName:o.orderName,customerName:o.customerName,customerEmail:o.customerEmail,successUrl:o.successUrl,failUrl:o.failUrl};if(o.customerMobilePhone&&(i.customerMobilePhone=o.customerMobilePhone),o.taxFreeAmount&&(i.taxFreeAmount=Number(o.taxFreeAmount)),o.taxExemptionAmount&&(i.taxExemptionAmount=Number(o.taxExemptionAmount)),o.cultureExpense&&(i.cultureExpense=!0),o.useEscrow&&(i.useEscrow=!0,o.escrowProducts))try{i.escrowProducts=JSON.parse(o.escrowProducts)}catch{}o.addCardBenefits&&(i.addCardBenefits=!0),o.appScheme&&(i.appScheme=o.appScheme),o.windowTarget&&(i.windowTarget=o.windowTarget),o.country!=="KR"&&(i.country=o.country),o.currency!=="KRW"&&(i.currency=o.currency),await l.requestPayment(i)}catch(i){d.error=i.message||String(i),d.phase="pre_saved",n.loading=!1,r("\uACB0\uC81C \uC624\uB958: "+(i.message||i),"error",0)}},C=async()=>{if(!d.callbackParams)return;const{paymentKey:e,orderId:t,amount:a}=d.callbackParams;await u(e,t,a)},T=async()=>{const e=prompt("paymentKey \uB97C \uC785\uB825\uD558\uC138\uC694:");if(!e)return;const t=prompt("orderId:")||o.orderId,a=parseInt(prompt("amount (\uC6D0):")||String(o.amount));await u(e,t,a)},u=async(e,t,a)=>{var i;n.loading=!0,d.error="",d.phase="confirming";try{const p=await boApi.post("/co/cm/toss/confirm",{paymentKey:e,orderId:t,amount:a},coUtil.cofApiHdr("\uD1A0\uC2A4 \uACB0\uC81C\uC704\uC82F \uD14C\uC2A4\uD2B8","\uC2B9\uC778"));d.confirmResult=((i=p.data)==null?void 0:i.data)||p.data,d.callbackParams=null,d.phase="done",r("\uACB0\uC81C \uC2B9\uC778 + \uCD5C\uC885\uC800\uC7A5 \uC644\uB8CC (DONE)","success")}catch(p){d.error=coUtil.cofErrMsg(p,"\uC2B9\uC778 \uC2E4\uD328"),d.phase=d.callbackParams?"callback_received":"idle",r("\uACB0\uC81C \uC2B9\uC778 \uC2E4\uD328: "+d.error,"error",0)}n.loading=!1},K=async()=>{var t,a,i;if(!((t=d.confirmResult)!=null&&t.paymentKey)){r("\uBA3C\uC800 \uACB0\uC81C \uC2B9\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.","error");return}if(await(((a=window.boApp)==null?void 0:a.showConfirm)||(()=>Promise.resolve(!0)))("\uACB0\uC81C \uCDE8\uC18C","\uACB0\uC81C\uB97C \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")){n.loading=!0;try{const p=await boApi.post("/co/cm/toss/cancel",{paymentKey:d.confirmResult.paymentKey,cancelReason:"\uAC1C\uBC1C\uC790 \uD14C\uC2A4\uD2B8 \uCDE8\uC18C"},coUtil.cofApiHdr("\uD1A0\uC2A4 \uACB0\uC81C\uC704\uC82F \uD14C\uC2A4\uD2B8","\uCDE8\uC18C"));d.cancelResult=((i=p.data)==null?void 0:i.data)||p.data,r("\uACB0\uC81C \uCDE8\uC18C \uC644\uB8CC","success")}catch(p){r("\uCDE8\uC18C \uC2E4\uD328: "+coUtil.cofErrMsg(p),"error",0)}n.loading=!1}},O=async()=>{try{const e=[];if(s.clientKey&&e.push({propKey:"app.pay.toss.widget-client-key",propValue:s.clientKey}),s.secretKey&&e.push({propKey:"app.pay.toss.secret-key",propValue:s.secretKey}),!e.length){r("\uC800\uC7A5\uD560 \uD0A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}await boApi.put("/bo/sy/prop/bulk",e,coUtil.cofApiHdr("\uD1A0\uC2A4 \uACB0\uC81C\uC704\uC82F \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),r("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){r(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}},U=(e,t={})=>{if(e==="widget-mount")return D();if(e==="pay-test")return R();if(e==="confirm-auto")return C();if(e==="confirm-manual")return T();if(e==="cancel-test")return K();if(e==="keys-save")return O();if(e==="orderid-refresh")return S();if(e==="panel-toggle"){n[t]=!n[t];return}if(e==="receipt-open"){t&&window.open(t,"_blank");return}},L=A(()=>{const e=[{_label:"\uC8FC\uBB38ID",_param:"orderId",_val:o.orderId,_mono:!0,_color:"#1e40af"},{_label:"\uC0C1\uD488\uBA85",_param:"orderName",_val:o.orderName,_mono:!1,_color:""},{_label:"\uAE08\uC561(setAmount)",_param:"amount",_val:o.amount.toLocaleString()+" "+o.currency,_mono:!1,_color:""},{_label:"\uAD6C\uB9E4\uC790\uBA85",_param:"customerName",_val:o.customerName,_mono:!1,_color:""},{_label:"\uAD6C\uB9E4\uC790 \uC774\uBA54\uC77C",_param:"customerEmail",_val:o.customerEmail,_mono:!1,_color:""},{_label:"\uC131\uACF5 URL",_param:"successUrl",_val:o.successUrl,_mono:!0,_color:"#1e40af"},{_label:"\uC2E4\uD328 URL",_param:"failUrl",_val:o.failUrl,_mono:!0,_color:"#6b7280"}];return o.customerMobilePhone&&e.push({_label:"\uAD6C\uB9E4\uC790 \uD734\uB300\uD3F0",_param:"customerMobilePhone",_val:o.customerMobilePhone,_mono:!1,_color:""}),o.taxFreeAmount&&e.push({_label:"\uBE44\uACFC\uC138 \uAE08\uC561",_param:"taxFreeAmount",_val:o.taxFreeAmount,_mono:!1,_color:""}),o.taxExemptionAmount&&e.push({_label:"\uBA74\uC138 \uAE08\uC561",_param:"taxExemptionAmount",_val:o.taxExemptionAmount,_mono:!1,_color:""}),o.cultureExpense&&e.push({_label:"\uBB38\uD654\uBE44 \uC18C\uB4DD\uACF5\uC81C",_param:"cultureExpense",_val:"true",_mono:!1,_color:"#15803d",_badge:"badge-green"}),o.useEscrow&&e.push({_label:"\uC5D0\uC2A4\uD06C\uB85C \uC0AC\uC6A9",_param:"useEscrow",_val:"true",_mono:!1,_color:"#1d4ed8",_badge:"badge-blue"}),o.useEscrow&&o.escrowProducts&&e.push({_label:"\uC5D0\uC2A4\uD06C\uB85C \uC0C1\uD488",_param:"escrowProducts",_val:o.escrowProducts,_mono:!0,_color:""}),o.addCardBenefits&&e.push({_label:"\uCE74\uB4DC \uC989\uC2DC\uD560\uC778",_param:"addCardBenefits",_val:"true",_mono:!1,_color:"#c2410c",_badge:"badge-orange"}),o.appScheme&&e.push({_label:"\uC571 \uBCF5\uADC0 \uC2A4\uD0B4",_param:"appScheme",_val:o.appScheme,_mono:!0,_color:""}),o.windowTarget&&e.push({_label:"\uD31D\uC5C5 \uCC3D \uD0C0\uAC9F",_param:"windowTarget",_val:o.windowTarget,_mono:!1,_color:""}),o.currency!=="KRW"&&e.push({_label:"\uD1B5\uD654",_param:"currency",_val:o.currency,_mono:!1,_color:""}),o.country!=="KR"&&e.push({_label:"\uAD6D\uAC00\uCF54\uB4DC",_param:"country",_val:o.country,_mono:!1,_color:""}),e});return{cfg:s,form:o,result:d,uiState:n,widgetContainerId:m,handleBtnAction:U,cfgFormColumns:[{key:"clientKey",label:"Widget Client Key (\uD074\uB77C\uC774\uC5B8\uD2B8)",type:"text",colSpan:2,mono:!0,placeholder:"test_gck_\u2026 or live_gck_\u2026",hint:"clientKey"},{key:"secretKey",label:"Secret Key (\uC11C\uBC84)",type:"text",mono:!0,placeholder:"test_gsk_\u2026 or live_gsk_\u2026",hint:"secretKey"}],baseFormColumns:[{key:"amount",label:"\uAE08\uC561(\uC6D0)",type:"number",hint:"amount"},{key:"orderId",label:"\uC8FC\uBB38ID",type:"slot",name:"orderIdSlot",hint:"orderId"},{key:"orderName",label:"\uC0C1\uD488\uBA85",type:"text",hint:"orderName"},{key:"customerName",label:"\uAD6C\uB9E4\uC790\uBA85",type:"text",hint:"customerName"},{key:"customerEmail",label:"\uAD6C\uB9E4\uC790 \uC774\uBA54\uC77C",type:"text",hint:"customerEmail"},{key:"customerMobilePhone",label:"\uAD6C\uB9E4\uC790 \uD734\uB300\uD3F0",type:"text",placeholder:"01012345678 (\uC120\uD0DD)",hint:"customerMobilePhone"},{key:"successUrl",label:"\uACB0\uC81C \uC131\uACF5 \uCF5C\uBC31",type:"slot",name:"successUrlSlot",colSpan:3,hint:"successUrl"},{key:"failUrl",label:"\uACB0\uC81C \uC2E4\uD328 \uCF5C\uBC31",type:"slot",name:"failUrlSlot",colSpan:3,hint:"failUrl"}],hiddenFormColumns:[{type:"group",label:"\u{1F4B0} \uAE08\uC561 \uC138\uBD80"},{key:"taxFreeAmount",label:"\uBE44\uACFC\uC138 \uAE08\uC561",type:"number",hint:"taxFreeAmount"},{key:"taxExemptionAmount",label:"\uBA74\uC138 \uAE08\uC561",type:"number",hint:"taxExemptionAmount"},{key:"cultureExpense",label:"\uBB38\uD654\uBE44 \uC18C\uB4DD\uACF5\uC81C",type:"slot",name:"cultureExpenseSlot",hint:"cultureExpense"},{type:"group",label:"\u{1F6E1} \uC5D0\uC2A4\uD06C\uB85C"},{key:"useEscrow",label:"\uC5D0\uC2A4\uD06C\uB85C \uC0AC\uC6A9",type:"slot",name:"useEscrowSlot",hint:"useEscrow"},{key:"escrowProducts",label:"\uC5D0\uC2A4\uD06C\uB85C \uC0C1\uD488 (JSON)",type:"textarea",colSpan:2,placeholder:'[{"id":"PROD-1","name":"\uC0C1\uD488","unitPrice":1000,"quantity":1}]',hint:"escrowProducts \u2014 \uD544\uB4DC: id/name/code/unitPrice/quantity/category"},{type:"group",label:"\u{1F4F1} \uC571/\uBE0C\uB77C\uC6B0\uC800"},{key:"appScheme",label:"\uC571 \uBCF5\uADC0 \uC2A4\uD0B4",type:"text",placeholder:"shopjoy:// (\uC120\uD0DD)",mono:!0,hint:"appScheme"},{key:"windowTarget",label:"\uD31D\uC5C5 \uCC3D \uD0C0\uAC9F",type:"select",options:[{value:"",label:"\uAE30\uBCF8 (_self)"},{value:"_blank",label:"_blank (\uC0C8 \uD0ED)"},{value:"_top",label:"_top"}],hint:"windowTarget"},{key:"addCardBenefits",label:"\uCE74\uB4DC \uC989\uC2DC \uD560\uC778",type:"slot",name:"addCardBenefitsSlot",hint:"addCardBenefits"},{type:"group",label:"\u{1F30D} \uAD6D\uAC00/\uD1B5\uD654 (\uD574\uC678\uACB0\uC81C)"},{key:"currency",label:"\uD1B5\uD654",type:"select",options:[{value:"KRW",label:"KRW (\uAE30\uBCF8)"},{value:"USD",label:"USD"},{value:"JPY",label:"JPY"},{value:"EUR",label:"EUR"}],hint:"currency"},{key:"country",label:"\uAD6D\uAC00\uCF54\uB4DC",type:"select",options:[{value:"KR",label:"KR (\uAE30\uBCF8)"},{value:"US",label:"US"},{value:"JP",label:"JP"}],hint:"country"},{key:"_currencyNote",label:"",type:"slot",name:"currencyNote"}],cfPayParams:L,previewGridColumns:[{key:"_label",label:"\uD56D\uBAA9\uBA85",cellStyle:"color:#555;font-size:11px;white-space:nowrap"},{key:"_param",label:"param\uBA85",cellStyle:"color:#8b5cf6;font-size:10px;font-family:monospace"},{key:"_val",label:"\uAC12",fmt:e=>e,cellStyle:(e,t)=>(t._mono?"font-family:monospace;font-size:10px;word-break:break-all;":"font-size:11px;")+(t._color?"color:"+t._color+";":"")}],confirmGridColumns:[{key:"paymentKey",label:"paymentKey",cellStyle:"font-family:monospace;font-size:10px;word-break:break-all;color:#1e40af"},{key:"orderId",label:"orderId",cellStyle:"font-family:monospace;font-size:11px"},{key:"orderName",label:"orderName"},{key:"totalAmount",label:"totalAmount",fmt:e=>(e||0).toLocaleString()+" \uC6D0",align:"right"},{key:"status",label:"status",badge:()=>"badge-green"},{key:"method",label:"method"},{key:"approvedAt",label:"approvedAt",cellStyle:"font-family:monospace;font-size:10px;color:#6b7280"},{key:"transactionKey",label:"transactionKey",cellStyle:"font-family:monospace;font-size:10px;color:#7c3aed"},{key:"receiptUrl",label:"receiptUrl",fmt:e=>e?"\u{1F9FE} \uB9C1\uD06C":"-",cellStyle:e=>e?"color:#1d4ed8;cursor:pointer;text-decoration:underline":"color:#aaa"}],cancelSummaryGridColumns:[{key:"paymentKey",label:"paymentKey",cellStyle:"font-family:monospace;font-size:10px;word-break:break-all;color:#1e40af"},{key:"status",label:"status",badge:e=>e.status==="CANCELED"?"badge-red":"badge-orange"},{key:"totalAmount",label:"totalAmount",fmt:e=>(e||0).toLocaleString()+" \uC6D0",align:"right"},{key:"balanceAmount",label:"balanceAmount",fmt:e=>(e||0).toLocaleString()+" \uC6D0",align:"right",cellStyle:e=>e===0?"color:#dc2626;font-weight:700":"color:#d97706;font-weight:700"},{key:"isPartialCancelable",label:"isPartialCancelable",fmt:e=>e?"\u2705 \uAC00\uB2A5":"\u274C \uBD88\uAC00",cellStyle:e=>e?"color:#15803d":"color:#b91c1c"}],cancelHistGridColumns:[{key:"cancelAmount",label:"cancelAmount",fmt:e=>(e||0).toLocaleString()+" \uC6D0",align:"right",cellStyle:"color:#dc2626;font-weight:600"},{key:"canceledAt",label:"canceledAt",cellStyle:"font-family:monospace;font-size:10px;color:#6b7280"},{key:"cancelReason",label:"cancelReason"},{key:"transactionKey",label:"transactionKey",cellStyle:"font-family:monospace;font-size:10px;color:#7c3aed"},{key:"refundableAmount",label:"refundableAmount",fmt:e=>e!=null?e.toLocaleString()+" \uC6D0":"-",align:"right"},{key:"taxFreeAmount",label:"taxFreeAmount",fmt:e=>e!=null?e.toLocaleString()+" \uC6D0":"-",align:"right"}],ENV:f,TOSS_SUCCESS_URL:g,TOSS_FAIL_URL:v}},template:`
<div>
  <div class="page-title">\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uACB0\uC81C\uC704\uC82F \uD14C\uC2A4\uD2B8</div>

  <!-- \uD504\uB85C\uC138\uC2A4 \uB2E4\uC774\uC5B4\uADF8\uB7A8 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar" style="cursor:pointer" @click="handleBtnAction('panel-toggle', 'diagramOpen')">
      <span class="list-title">\uBC84\uD2BC\uBCC4 \uD504\uB85C\uC138\uC2A4 \uB2E4\uC774\uC5B4\uADF8\uB7A8</span>
      <span style="font-size:11px;color:#888;margin-left:8px">\uC704\uC82F\uB80C\uB354\uB9C1 \xB7 \uACB0\uC81C\uD558\uAE30 \xB7 \uC218\uB3D9\uC2B9\uC778 \xB7 \uACB0\uC81C\uCDE8\uC18C \u2014 \uD074\uB9AD\uD558\uC5EC {{ uiState.diagramOpen ? '\uC811\uAE30' : '\uD3BC\uCE58\uAE30' }}</span>
      <span style="margin-left:auto;font-size:16px;color:#aaa">{{ uiState.diagramOpen ? '\u25B2' : '\u25BC' }}</span>
    </div>
    <div v-if="uiState.diagramOpen" style="padding:16px 12px;display:flex;flex-direction:column;gap:20px">

      <!-- \uACF5\uD1B5 \uC2A4\uD0C0\uC77C \uC124\uBA85 -->
      <div style="display:flex;gap:12px;font-size:11px;color:#555;flex-wrap:wrap;padding:6px 10px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0">
        <span><span style="display:inline-block;width:10px;height:10px;background:#dbeafe;border:1px solid #93c5fd;border-radius:2px;margin-right:4px"></span>Frontend (\uBE0C\uB77C\uC6B0\uC800)</span>
        <span><span style="display:inline-block;width:10px;height:10px;background:#dcfce7;border:1px solid #86efac;border-radius:2px;margin-right:4px"></span>Backend (Spring Boot :8080)</span>
        <span><span style="display:inline-block;width:10px;height:10px;background:#fef9c3;border:1px solid #fde047;border-radius:2px;margin-right:4px"></span>\uC678\uBD80 (\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uC11C\uBC84)</span>
        <span><span style="display:inline-block;width:10px;height:10px;background:#fee2e2;border:1px solid #fca5a5;border-radius:2px;margin-right:4px"></span>\uC624\uB958 / \uC0AC\uC6A9\uC790 \uCDE8\uC18C</span>
      </div>

      <!-- \u{1F5C2} ERD \u2014 \uC8FC\uBB38/\uACB0\uC81C/\uD074\uB808\uC784/\uBC30\uC1A1 \uD14C\uC774\uBE14 \uAD00\uACC4\uB3C4 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#374151;margin-bottom:10px;display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none"
          @click="handleBtnAction('panel-toggle', 'erdOpen')">
          <span style="background:#374151;color:#fff;border-radius:4px;padding:2px 8px;font-size:11px">\u{1F5C2}</span>
          \uC8FC\uBB38 \xB7 \uACB0\uC81C \xB7 \uD074\uB808\uC784 \xB7 \uBC30\uC1A1 ERD (\uC811\uAE30/\uD3BC\uCE58\uAE30)
          <span style="margin-left:auto;font-size:12px;color:#64748b">{{ uiState.erdOpen ? '\u25B2' : '\u25BC' }}</span>
        </div>
        <div v-if="uiState.erdOpen">

          <!-- \uB77C\uC774\uD504\uC0AC\uC774\uD074 \uAD00\uB9AC \uC6D0\uCE59 -->
          <div style="background:#f0f7ff;border:1px solid #93c5fd;border-radius:8px;padding:12px 14px;margin-bottom:10px;font-size:11px;line-height:1.75">
            <div style="font-weight:700;color:#1d4ed8;margin-bottom:8px;font-size:12px">\u{1F4D0} \uB77C\uC774\uD504\uC0AC\uC774\uD074 \uAD00\uB9AC \uC6D0\uCE59 \u2014 \uC774\uC911 \uB808\uBCA8 \uAD6C\uC870</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
              <div style="background:#fff;border:1px solid #bfdbfe;border-radius:6px;padding:8px 10px">
                <div style="font-weight:700;color:#6366f1;margin-bottom:4px">od_order_item <span style="font-weight:400;font-size:10px;color:#888">Source of Truth</span></div>
                <div style="color:#333">order_item_status_cd \uAC00 \uC0C1\uD488\uBCC4 \uC2E4\uC81C \uCC98\uB9AC \uC0C1\uD0DC. \uBD80\uBD84\uBC30\uC1A1\xB7\uBD80\uBD84\uD074\uB808\uC784 \uBAA8\uB450 item \uB2E8\uC704\uB85C \uB3C5\uB9BD \uCC98\uB9AC.</div>
              </div>
              <div style="background:#fff;border:1px solid #bfdbfe;border-radius:6px;padding:8px 10px">
                <div style="font-weight:700;color:#3b82f6;margin-bottom:4px">od_order <span style="font-weight:400;font-size:10px;color:#888">\uC9D1\uACC4 \uC694\uC57D</span></div>
                <div style="color:#333">order_status_cd \uB294 \uD65C\uC131 item \uC0C1\uD0DC\uC758 \uC9D1\uACC4\uAC12. \uBAA9\uB85D \uC870\uD68C\xB7\uD544\uD130\xB7\uD1B5\uACC4 \uC804\uC6A9. item \uBCC0\uB3D9 \uC2DC \uC7AC\uC0B0\uC815.</div>
              </div>
              <div style="background:#fff;border:1px solid #bfdbfe;border-radius:6px;padding:8px 10px">
                <div style="font-weight:700;color:#f97316;margin-bottom:4px">od_claim_item <span style="font-weight:400;font-size:10px;color:#888">\uB3C5\uB9BD \uACF5\uC874</span></div>
                <div style="color:#333">\uD074\uB808\uC784 \uC9C4\uD589 \uC911\uC5D0\uB3C4 order_item_status_cd \uB294 \uC720\uC9C0. claim_item_status_cd \uAC00 \uCDE8\uC18C\xB7\uBC18\uD488\xB7\uAD50\uD658 \uD750\uB984\uB9CC \uCD94\uC801.</div>
              </div>
            </div>
          </div>

          <!-- \uC0C1\uD0DC \uBC94\uB840 -->
          <div style="display:flex;gap:8px;flex-wrap:wrap;font-size:10px;margin-bottom:10px;padding:7px 10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px">
            <b style="color:#374151;margin-right:4px">\uC0C1\uD0DC \uCF54\uB4DC \uBC94\uB840:</b>
            <span style="background:#fef9c3;border:1px solid #fde047;border-radius:3px;padding:1px 6px;color:#92400e">PENDING \uB300\uAE30</span>
            <span style="background:#dbeafe;border:1px solid #93c5fd;border-radius:3px;padding:1px 6px;color:#1d4ed8">PAID \uACB0\uC81C\uC644\uB8CC</span>
            <span style="background:#dcfce7;border:1px solid #86efac;border-radius:3px;padding:1px 6px;color:#166534">DONE \uC2B9\uC778\uC644\uB8CC</span>
            <span style="background:#f3e8ff;border:1px solid #d8b4fe;border-radius:3px;padding:1px 6px;color:#5b21b6">PREPARING \uC900\uBE44\uC911</span>
            <span style="background:#e0f2fe;border:1px solid #7dd3fc;border-radius:3px;padding:1px 6px;color:#0369a1">SHIPPED \uBC30\uC1A1\uC911</span>
            <span style="background:#ecfdf5;border:1px solid #6ee7b7;border-radius:3px;padding:1px 6px;color:#065f46">COMPLT \uC644\uB8CC</span>
            <span style="background:#fee2e2;border:1px solid #fca5a5;border-radius:3px;padding:1px 6px;color:#b91c1c">CANCELED \uCDE8\uC18C</span>
            <span style="background:#fff7ed;border:1px solid #fdba74;border-radius:3px;padding:1px 6px;color:#c2410c">PARTIAL_CANCELED \uBD80\uBD84\uCDE8\uC18C</span>
            <span style="background:#fdf2f8;border:1px solid #f0abfc;border-radius:3px;padding:1px 6px;color:#86198f">CLAIM \uD074\uB808\uC784\uC911</span>
          </div>

          <!-- ERD \uD14C\uC774\uBE14 \uADF8\uB9AC\uB4DC -->
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;font-size:10px;margin-bottom:10px">

            <!-- od_order -->
            <div style="background:#fff;border:2px solid #3b82f6;border-radius:8px;overflow:hidden">
              <div style="background:#3b82f6;color:#fff;font-weight:700;padding:5px 10px;font-size:11px">\u{1F4E6} od_order <span style="font-weight:400;font-size:9px;opacity:.85">\uC8FC\uBB38</span></div>
              <div style="padding:6px 10px;display:flex;flex-direction:column;gap:2px;font-family:monospace">
                <div><span style="color:#f59e0b;font-weight:700">PK</span> order_id VARCHAR</div>
                <div style="color:#64748b">order_status_cd <span style="color:#1d4ed8">ORDER_STATUS</span></div>
                <div style="color:#64748b">order_amt NUMERIC \u2014 \uC6D0 \uC8FC\uBB38\uAE08\uC561</div>
                <div style="color:#64748b">add_pay_amt NUMERIC \u2014 \uCD94\uAC00\uACB0\uC81C \uD569\uACC4</div>
                <div style="color:#64748b">customer_nm / customer_email</div>
                <div style="color:#64748b">site_id / reg_date / upd_date</div>
              </div>
              <div style="background:#eff6ff;padding:4px 10px;font-size:9px;color:#1d4ed8;line-height:1.8">
                <b>ORDER_STATUS</b><br>
                <span style="color:#92400e">PENDING</span> \uACB0\uC81C \uC804 \uC784\uC2DC\uC800\uC7A5<br>
                <span style="color:#1d4ed8">PAID</span> \uACB0\uC81C \uC644\uB8CC<br>
                <span style="color:#5b21b6">PREPARING</span> \uCD9C\uACE0 \uC900\uBE44\uC911<br>
                <span style="color:#0369a1">SHIPPED</span> \uBC30\uC1A1\uC911 (\uC1A1\uC7A5 \uB4F1\uB85D)<br>
                <span style="color:#065f46">COMPLT</span> \uBC30\uC1A1\uC644\uB8CC\xB7\uAD6C\uB9E4\uD655\uC815<br>
                <span style="color:#b91c1c">CANCELED</span> \uC804\uCCB4 \uCDE8\uC18C<br>
                <span style="color:#86198f">CLAIM</span> \uD074\uB808\uC784 \uCC98\uB9AC\uC911
              </div>
            </div>

            <!-- od_order_item -->
            <div style="background:#fff;border:2px solid #6366f1;border-radius:8px;overflow:hidden">
              <div style="background:#6366f1;color:#fff;font-weight:700;padding:5px 10px;font-size:11px">\u{1F4CB} od_order_item <span style="font-weight:400;font-size:9px;opacity:.85">\uC8FC\uBB38\uD56D\uBAA9</span></div>
              <div style="padding:6px 10px;display:flex;flex-direction:column;gap:2px;font-family:monospace">
                <div><span style="color:#f59e0b;font-weight:700">PK</span> order_item_id VARCHAR</div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> order_id \u2192 od_order</div>
                <div style="color:#64748b">item_status_cd <span style="color:#5b21b6">ORDER_ITEM_STATUS</span></div>
                <div style="color:#64748b">prod_id / prod_sku_id / prod_nm</div>
                <div style="color:#64748b">qty / unit_price / item_amt</div>
                <div style="color:#64748b">dliv_tmplt_id / dliv_fee</div>
              </div>
              <div style="background:#eef2ff;padding:4px 10px;font-size:9px;color:#4338ca;line-height:1.8">
                <b>ORDER_ITEM_STATUS</b><br>
                <span style="color:#92400e">PENDING</span> \uACB0\uC81C \uC804<br>
                <span style="color:#1d4ed8">PAID</span> \uACB0\uC81C \uC644\uB8CC<br>
                <span style="color:#5b21b6">PREPARING</span> \uCD9C\uACE0 \uC900\uBE44\uC911<br>
                <span style="color:#0369a1">SHIPPED</span> \uBC30\uC1A1\uC911<br>
                <span style="color:#065f46">COMPLT</span> \uAD6C\uB9E4\uD655\uC815<br>
                <span style="color:#b91c1c">CANCELED</span> \uD56D\uBAA9 \uCDE8\uC18C<br>
                <span style="color:#86198f">CLAIM</span> \uD074\uB808\uC784 \uCC98\uB9AC\uC911
              </div>
            </div>

            <!-- od_pay -->
            <div style="background:#fff;border:2px solid #7c3aed;border-radius:8px;overflow:hidden">
              <div style="background:#7c3aed;color:#fff;font-weight:700;padding:5px 10px;font-size:11px">\u{1F4B3} od_pay <span style="font-weight:400;font-size:9px;opacity:.85">\uACB0\uC81C</span></div>
              <div style="padding:6px 10px;display:flex;flex-direction:column;gap:2px;font-family:monospace">
                <div><span style="color:#f59e0b;font-weight:700">PK</span> pay_id VARCHAR <span style="color:#dc2626">= \uD1A0\uC2A4 orderId</span></div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> order_id \u2192 od_order</div>
                <div style="color:#64748b">pay_status_cd <span style="color:#7c3aed">PAY_STATUS</span></div>
                <div style="color:#64748b">pay_div_cd \u2014 ORDER / CLAIM</div>
                <div style="color:#64748b">pay_occur_type_cd \u2014 ORDER / CLAIM_EXTRA / EXCHANGE_EXTRA</div>
                <div style="color:#64748b">pay_amt / pay_method_cd</div>
                <div style="color:#15803d;font-weight:600">payment_key \u2190 \uD1A0\uC2A4 confirm \uD6C4 \uCC44\uC6C0</div>
                <div style="color:#64748b">approved_at / receipt_url</div>
              </div>
              <div style="background:#f5f3ff;padding:4px 10px;font-size:9px;color:#5b21b6;line-height:1.8">
                <b>PAY_STATUS</b><br>
                <span style="color:#92400e">PENDING</span> confirm \uC804 \uC784\uC2DC<br>
                <span style="color:#065f46">DONE</span> \uD1A0\uC2A4 \uC2B9\uC778 \uC644\uB8CC<br>
                <span style="color:#c2410c">PARTIAL_CANCELED</span> \uBD80\uBD84\uCDE8\uC18C\xB7\uC794\uC5EC \uC788\uC74C<br>
                <span style="color:#b91c1c">CANCELED</span> \uC804\uC561\uCDE8\uC18C \uC644\uB8CC
              </div>
            </div>

            <!-- od_dliv -->
            <div style="background:#fff;border:2px solid #0891b2;border-radius:8px;overflow:hidden">
              <div style="background:#0891b2;color:#fff;font-weight:700;padding:5px 10px;font-size:11px">\u{1F69A} od_dliv <span style="font-weight:400;font-size:9px;opacity:.85">\uBC30\uC1A1</span></div>
              <div style="padding:6px 10px;display:flex;flex-direction:column;gap:2px;font-family:monospace">
                <div><span style="color:#f59e0b;font-weight:700">PK</span> dliv_id VARCHAR</div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> order_id \u2192 od_order</div>
                <div style="color:#64748b">dliv_status_cd <span style="color:#0369a1">DLIV_STATUS</span></div>
                <div style="color:#64748b">dliv_div_cd \u2014 OUTBOUND / INBOUND</div>
                <div style="color:#64748b">courier_cd / invoice_no \u2014 \uD0DD\uBC30\uC0AC/\uC1A1\uC7A5</div>
                <div style="color:#64748b">rcvr_nm / rcvr_phone / rcvr_addr</div>
                <div style="color:#64748b">dliv_fee / dliv_start_date / dliv_end_date</div>
              </div>
              <div style="background:#ecfeff;padding:4px 10px;font-size:9px;color:#0e7490;line-height:1.8">
                <b>DLIV_STATUS</b><br>
                <span style="color:#5b21b6">READY</span> \uCD9C\uACE0 \uC900\uBE44<br>
                <span style="color:#0369a1">SHIPPING</span> \uBC30\uC1A1\uC911 (\uC1A1\uC7A5 \uB4F1\uB85D)<br>
                <span style="color:#065f46">DELIVERED</span> \uBC30\uC1A1 \uC644\uB8CC<br>
                <span style="color:#92400e">RETURN_REQ</span> \uBC18\uD488 \uC218\uAC70 \uC694\uCCAD<br>
                <span style="color:#b91c1c">RETURN_DONE</span> \uBC18\uD488 \uC785\uACE0 \uC644\uB8CC<br>
                <span style="color:#64748b">\u203B INBOUND: \uBC18\uD488 \uC218\uAC70 \uD750\uB984</span>
              </div>
            </div>

            <!-- od_dliv_item -->
            <div style="background:#fff;border:2px solid #0284c7;border-radius:8px;overflow:hidden">
              <div style="background:#0284c7;color:#fff;font-weight:700;padding:5px 10px;font-size:11px">\u{1F4EC} od_dliv_item <span style="font-weight:400;font-size:9px;opacity:.85">\uBC30\uC1A1\uD56D\uBAA9</span></div>
              <div style="padding:6px 10px;display:flex;flex-direction:column;gap:2px;font-family:monospace">
                <div><span style="color:#f59e0b;font-weight:700">PK</span> dliv_item_id VARCHAR</div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> dliv_id \u2192 od_dliv</div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> order_item_id \u2192 od_order_item</div>
                <div style="color:#64748b">qty / dliv_status_cd</div>
              </div>
              <div style="background:#f0f9ff;padding:4px 10px;font-size:9px;color:#0369a1;line-height:1.7">
                od_order_item \u2194 od_dliv \uC758<br>N:M \uB9E4\uD551 (\uBD80\uBD84\uCD9C\uACE0 \uB300\uC751)
              </div>
            </div>

            <!-- od_claim -->
            <div style="background:#fff;border:2px solid #dc2626;border-radius:8px;overflow:hidden">
              <div style="background:#dc2626;color:#fff;font-weight:700;padding:5px 10px;font-size:11px">\u26A0 od_claim <span style="font-weight:400;font-size:9px;opacity:.85">\uD074\uB808\uC784(\uCDE8\uC18C/\uBC18\uD488/\uAD50\uD658)</span></div>
              <div style="padding:6px 10px;display:flex;flex-direction:column;gap:2px;font-family:monospace">
                <div><span style="color:#f59e0b;font-weight:700">PK</span> claim_id VARCHAR</div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> order_id \u2192 od_order</div>
                <div style="color:#64748b">claim_status_cd <span style="color:#b91c1c">CLAIM_STATUS</span></div>
                <div style="color:#64748b">claim_type_cd \u2014 CANCEL / RETURN / EXCHANGE</div>
                <div style="color:#64748b">claim_reason_cd / claim_reason_detail</div>
                <div style="color:#64748b">req_date / proc_date</div>
              </div>
              <div style="background:#fff5f5;padding:4px 10px;font-size:9px;color:#b91c1c;line-height:1.8">
                <b>CLAIM_STATUS</b><br>
                <span style="color:#92400e">REQ</span> \uACE0\uAC1D \uC811\uC218<br>
                <span style="color:#1d4ed8">APPROVED</span> \uAD00\uB9AC\uC790 \uC2B9\uC778<br>
                <span style="color:#5b21b6">IN_PROC</span> \uCC98\uB9AC\uC911 (\uC218\uAC70\xB7\uD658\uBD88 \uC9C4\uD589)<br>
                <span style="color:#065f46">DONE</span> \uCC98\uB9AC \uC644\uB8CC<br>
                <span style="color:#b91c1c">REJECTED</span> \uBC18\uB824 (\uC0AC\uC720 \uD3EC\uD568)<br>
                <span style="color:#64748b">\u203B claim_type\uBCC4 \uD6C4\uC18D \uBD84\uAE30</span>
              </div>
            </div>

            <!-- od_claim_item -->
            <div style="background:#fff;border:2px solid #ef4444;border-radius:8px;overflow:hidden">
              <div style="background:#ef4444;color:#fff;font-weight:700;padding:5px 10px;font-size:11px">\u{1F4CB} od_claim_item <span style="font-weight:400;font-size:9px;opacity:.85">\uD074\uB808\uC784 \uD56D\uBAA9</span></div>
              <div style="padding:6px 10px;display:flex;flex-direction:column;gap:2px;font-family:monospace">
                <div><span style="color:#f59e0b;font-weight:700">PK</span> claim_item_id VARCHAR</div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> claim_id \u2192 od_claim</div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> order_item_id \u2192 od_order_item</div>
                <div style="color:#64748b">claim_item_status_cd</div>
                <div style="color:#64748b">qty / reason_cd</div>
              </div>
              <div style="background:#fff5f5;padding:4px 10px;font-size:9px;color:#b91c1c;line-height:1.7">
                \uD074\uB808\uC784 \uB300\uC0C1 \uC8FC\uBB38\uD56D\uBAA9 \uC5F0\uACB0<br>
                \uBD80\uBD84 \uCDE8\uC18C/\uBC18\uD488 \uC9C0\uC6D0 (qty \uAE30\uC900)
              </div>
            </div>

            <!-- od_refund -->
            <div style="background:#fff;border:2px solid #ea580c;border-radius:8px;overflow:hidden">
              <div style="background:#ea580c;color:#fff;font-weight:700;padding:5px 10px;font-size:11px">\u{1F4B8} od_refund <span style="font-weight:400;font-size:9px;opacity:.85">\uD658\uBD88</span></div>
              <div style="padding:6px 10px;display:flex;flex-direction:column;gap:2px;font-family:monospace">
                <div><span style="color:#f59e0b;font-weight:700">PK</span> refund_id VARCHAR</div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> claim_id \u2192 od_claim</div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> pay_id \u2192 od_pay</div>
                <div style="color:#64748b">refund_status_cd \u2014 REQ / DONE</div>
                <div style="color:#64748b">refund_amt / refund_method_cd</div>
                <div style="color:#64748b">toss_cancel_key \u2190 \uD1A0\uC2A4 \uCDE8\uC18C transactionKey</div>
                <div style="color:#64748b">refund_date</div>
              </div>
              <div style="background:#fff7ed;padding:4px 10px;font-size:9px;color:#c2410c;line-height:1.7">
                \uCDE8\uC18C/\uBC18\uD488 \uD655\uC815 \uC2DC \uC0DD\uC131<br>
                \uD1A0\uC2A4 cancel API \uD638\uCD9C \uD6C4<br>
                transactionKey \uC800\uC7A5
              </div>
            </div>

            <!-- od_pay_method -->
            <div style="background:#fff;border:2px solid #9333ea;border-radius:8px;overflow:hidden">
              <div style="background:#9333ea;color:#fff;font-weight:700;padding:5px 10px;font-size:11px">\u{1F511} od_pay_method <span style="font-weight:400;font-size:9px;opacity:.85">\uACB0\uC81C\uC218\uB2E8 \uC0C1\uC138</span></div>
              <div style="padding:6px 10px;display:flex;flex-direction:column;gap:2px;font-family:monospace">
                <div><span style="color:#f59e0b;font-weight:700">PK</span> pay_method_id VARCHAR</div>
                <div><span style="color:#3b82f6;font-weight:700">FK</span> pay_id \u2192 od_pay</div>
                <div style="color:#64748b">method_type_cd \u2014 CARD/TRANSFER/EASY</div>
                <div style="color:#64748b">card_no(masked) / card_company</div>
                <div style="color:#64748b">install_months / approve_no</div>
                <div style="color:#64748b">bank_cd / account_no(masked)</div>
              </div>
              <div style="background:#faf5ff;padding:4px 10px;font-size:9px;color:#6b21a8;line-height:1.7">
                \uD1A0\uC2A4 Payment \uAC1D\uCCB4\uC758<br>card/transfer/easyPay \uD544\uB4DC\uB97C<br>\uAD00\uACC4\uD615\uC73C\uB85C \uC815\uADDC\uD654
              </div>
            </div>

          </div>

          <!-- \uAD00\uACC4\uB3C4 ASCII -->
          <div style="background:#1e293b;border-radius:8px;padding:12px 14px;font-family:monospace;font-size:10px;color:#e2e8f0;line-height:1.8;overflow-x:auto">
            <div style="color:#94a3b8;margin-bottom:6px;font-size:9px">\u2500\u2500 \uD14C\uC774\uBE14 \uAD00\uACC4\uB3C4 (1:N \uBC29\uD5A5) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500</div>
            <pre style="margin:0;color:#e2e8f0;white-space:pre">od_order (1)
  \u251C\u2500\u2500\u2500 od_order_item (N)   \u2190 \uC8FC\uBB38\uD56D\uBAA9 (\uC0C1\uD488/SKU\uBCC4)
  \u2502      \u2514\u2500\u2500 od_dliv_item (N) \u2190 \uBC30\uC1A1\uD56D\uBAA9 \uB9E4\uD551
  \u251C\u2500\u2500\u2500 od_pay (N)          \u2190 \uACB0\uC81C (pay_id = \uD1A0\uC2A4 orderId)
  \u2502      \u251C\u2500\u2500 od_pay_method (1) \u2190 \uCE74\uB4DC/\uACC4\uC88C \uC0C1\uC138
  \u2502      \u2514\u2500\u2500 od_refund (N) \u2190 \uD658\uBD88 (\uD074\uB808\uC784 \uD655\uC815 \uC2DC)
  \u251C\u2500\u2500\u2500 od_dliv (N)         \u2190 \uBC30\uC1A1 (OUTBOUND/INBOUND)
  \u2502      \u2514\u2500\u2500 od_dliv_item (N) \u2190 \uBC30\uC1A1\uD56D\uBAA9 \uB9E4\uD551
  \u2514\u2500\u2500\u2500 od_claim (N)        \u2190 \uD074\uB808\uC784 (CANCEL/RETURN/EXCHANGE)
         \u251C\u2500\u2500 od_claim_item (N) \u2190 \uD074\uB808\uC784 \uD56D\uBAA9 (\uBD80\uBD84\uCC98\uB9AC)
         \u2514\u2500\u2500 od_refund (N) \u2190 \uD658\uBD88 \uC5F0\uACB0</pre>
          </div>

          <!-- \uACB0\uC81C \uCDE8\uC18C \uD50C\uB85C\uC6B0 \uC0C1\uC138 -->
          <div style="margin-top:10px;background:#fff5f5;border:1px solid #fca5a5;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#b91c1c;margin-bottom:8px;font-size:11px">\u{1F4B3} \uACB0\uC81C \uCDE8\uC18C (cancel) \uD50C\uB85C\uC6B0 \uC0C1\uC138</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:10px">
              <div>
                <div style="font-weight:600;color:#374151;margin-bottom:4px">\u2460 \uC804\uC561 \uCDE8\uC18C (cancelAmount \uC0DD\uB7B5)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #fca5a5;border-radius:4px;padding:7px;font-size:10px;line-height:1.6;white-space:pre">POST /api/co/cm/toss/cancel
{
  "paymentKey":   "tgen_...",
  "cancelReason": "\uACE0\uAC1D \uC694\uCCAD"
  // cancelAmount \uC0DD\uB7B5 \u2192 \uC804\uC561
}

\uC751\uB2F5 (\uC131\uACF5):
{
  "status":        "CANCELED",
  "balanceAmount": 0,         // \uCDE8\uC18C \uAC00\uB2A5\uC561 = 0
  "cancels": [{
    "cancelAmount":   1000,
    "canceledAt":     "2026-06-28T...",
    "cancelReason":   "\uACE0\uAC1D \uC694\uCCAD",
    "transactionKey": "..."   // \uC774 \uCDE8\uC18C\uC758 \uAC70\uB798\uD0A4
  }]
}

\uC751\uB2F5 (\uC2E4\uD328):
{
  "code":    "ALREADY_CANCELED_PAYMENT",
  "message": "\uC774\uBBF8 \uCDE8\uC18C\uB41C \uACB0\uC81C\uC785\uB2C8\uB2E4."
}</pre>
              </div>
              <div>
                <div style="font-weight:600;color:#374151;margin-bottom:4px">\u2461 \uBD80\uBD84 \uCDE8\uC18C (cancelAmount \uC9C0\uC815)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #fca5a5;border-radius:4px;padding:7px;font-size:10px;line-height:1.6;white-space:pre">POST /api/co/cm/toss/cancel
{
  "paymentKey":   "tgen_...",
  "cancelReason": "\uBC30\uC1A1\uBE44 \uD658\uBD88",
  "cancelAmount": 500        // \uBD80\uBD84 \uAE08\uC561
}

\uC751\uB2F5 (\uC131\uACF5):
{
  "status":        "DONE",   // \uC794\uC5EC \uC788\uC73C\uBA74 DONE
  "totalAmount":   1000,     // \uC6D0 \uACB0\uC81C\uAE08\uC561 (\uBD88\uBCC0)
  "balanceAmount": 500,      // \uB0A8\uC740 \uCDE8\uC18C \uAC00\uB2A5\uC561
  "cancels": [
    { "cancelAmount": 500, "canceledAt": "..." }
  ]
}

// \uBD80\uBD84\uCDE8\uC18C 2\uD68C \u2192 cancels[] \uC5D0 2\uAC74 \uB204\uC801
// balanceAmount = 0 \u2192 status = CANCELED</pre>
              </div>
            </div>
            <div style="margin-top:8px;font-size:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px">
              <div style="background:#fff7ed;border-radius:4px;padding:6px 8px;color:#c2410c;line-height:1.7">
                \u26A0 <b>od_refund \uC0DD\uC131 \uC2DC\uC810:</b><br>
                \uD1A0\uC2A4 cancel \uC131\uACF5 \uD6C4 \u2192 od_refund INSERT<br>
                (toss_cancel_key = transactionKey \uC800\uC7A5)<br>
                od_pay.pay_status_cd \uC5C5\uB370\uC774\uD2B8<br>
                od_order.order_status_cd \u2192 CANCELED
              </div>
              <div style="background:#f0fdf4;border-radius:4px;padding:6px 8px;color:#166534;line-height:1.7">
                \u2705 <b>\uCDE8\uC18C \uAC00\uB2A5 \uC870\uAC74:</b><br>
                pay_status_cd = DONE \uC774\uC5B4\uC57C \uD568<br>
                balanceAmount &gt; 0 \uC774\uC5B4\uC57C \uD568<br>
                \uD074\uB808\uC784(CLAIM_TYPE) \uD655\uC815 \uD6C4 \uC790\uB3D9 \uD638\uCD9C<br>
                \uC6B4\uC601: od_claim \u2192 od_refund \u2192 toss cancel
              </div>
            </div>
          </div>

          <!-- \uC0C1\uD0DC \uC804\uC774 \uC694\uC57D -->
          <div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:10px">
            <div style="background:#eff6ff;border:1px solid #93c5fd;border-radius:6px;padding:8px 10px">
              <div style="font-weight:700;color:#1d4ed8;margin-bottom:5px">\u{1F4E6} \uC8FC\uBB38 \uC0C1\uD0DC \uD750\uB984</div>
              <pre style="margin:0;font-size:9px;color:#374151;white-space:pre;line-height:1.8">PENDING   \uACB0\uC81C \uC804 \uC784\uC2DC\uC800\uC7A5
  \u2193
PAID      \uACB0\uC81C \uC644\uB8CC (confirm \uD6C4)
  \u2193
PREPARING \uCD9C\uACE0 \uC900\uBE44\uC911
  \u2193
SHIPPED   \uBC30\uC1A1\uC911 (\uC1A1\uC7A5 \uB4F1\uB85D)
  \u2193
COMPLT    \uBC30\uC1A1 \uC644\uB8CC / \uAD6C\uB9E4\uD655\uC815
  \u2193
CANCELED  \uC804\uCCB4 \uCDE8\uC18C
CLAIM     \uD074\uB808\uC784 \uCC98\uB9AC\uC911</pre>
            </div>
            <div style="background:#f5f3ff;border:1px solid #d8b4fe;border-radius:6px;padding:8px 10px">
              <div style="font-weight:700;color:#5b21b6;margin-bottom:5px">\u{1F4B3} \uACB0\uC81C \uC0C1\uD0DC \uD750\uB984</div>
              <pre style="margin:0;font-size:9px;color:#374151;white-space:pre;line-height:1.8">PENDING          \uC784\uC2DC\uC800\uC7A5 (confirm \uC804)
  \u2193
DONE             \uD1A0\uC2A4 confirm \uC131\uACF5
  \u2193
PARTIAL_CANCELED \uBD80\uBD84\uCDE8\uC18C (\uC794\uC5EC \uC788\uC74C)
  \u2193
CANCELED         \uC804\uC561\uCDE8\uC18C \uC644\uB8CC

pay_occur_type_cd:
  ORDER          \uC815\uC0C1 \uACB0\uC81C
  CLAIM_EXTRA    \uD074\uB808\uC784 \uCD94\uAC00\uACB0\uC81C
  EXCHANGE_EXTRA \uAD50\uD658 \uCD94\uAC00\uACB0\uC81C</pre>
            </div>
            <div style="background:#fff5f5;border:1px solid #fca5a5;border-radius:6px;padding:8px 10px">
              <div style="font-weight:700;color:#b91c1c;margin-bottom:5px">\u26A0 \uD074\uB808\uC784 \uC0C1\uD0DC \uD750\uB984</div>
              <pre style="margin:0;font-size:9px;color:#374151;white-space:pre;line-height:1.8">REQ     \uACE0\uAC1D \uD074\uB808\uC784 \uC811\uC218
  \u2193
APPROVED \uAD00\uB9AC\uC790 \uC2B9\uC778
  \u2193
IN_PROC  \uCC98\uB9AC\uC911
  \u2193
DONE    \uCC98\uB9AC \uC644\uB8CC
REJECTED \uBC18\uB824 (\uC0AC\uC720 \uD3EC\uD568)

claim_type_cd:
  CANCEL   \uC8FC\uBB38 \uCDE8\uC18C
  RETURN   \uBC18\uD488
  EXCHANGE \uAD50\uD658</pre>
            </div>
          </div>

        </div>
      </div>

      <hr style="border:none;border-top:1px solid #e5e7eb" />

      <!-- \u2460 \uC704\uC82F \uB80C\uB354\uB9C1 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#1e40af;margin-bottom:10px;display:flex;align-items:center;gap:6px">
          <span style="background:#1e40af;color:#fff;border-radius:4px;padding:2px 8px;font-size:11px">\u2460</span> \uC704\uC82F \uB80C\uB354\uB9C1 \u2014 [\uC704\uC82F \uB80C\uB354\uB9C1] \uBC84\uD2BC
        </div>
        <div style="display:flex;align-items:flex-start;gap:12px;font-size:12px">
        <div style="flex:1;display:flex;align-items:flex-start;gap:0;overflow-x:auto">
          <!-- FE -->
          <div style="min-width:220px;background:#dbeafe;border:1px solid #93c5fd;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#1d4ed8;margin-bottom:8px;font-size:11px">\u{1F5A5} Frontend</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #3b82f6">
                <div style="font-weight:600;color:#1e40af">TossPayments(clientKey)</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">SDK \uCD08\uAE30\uD654 (CDN \uB85C\uB4DC \uD655\uC778)</div>
              </div>
              <div style="text-align:center;color:#3b82f6;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #3b82f6">
                <div style="font-weight:600;color:#1e40af">toss.widgets({customerKey})</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">widgetsInstance \uC0DD\uC131</div>
              </div>
              <div style="text-align:center;color:#3b82f6;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #3b82f6">
                <div style="font-weight:600;color:#1e40af">widgets.setAmount({currency, value})</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">\uACB0\uC81C \uAE08\uC561 \uC124\uC815</div>
              </div>
              <div style="text-align:center;color:#3b82f6;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">widgets.renderPaymentMethods({selector})</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">#toss-widget-container\uC5D0 \uACB0\uC81C UI \uC0BD\uC785</div>
              </div>
            </div>
          </div>
          <!-- \u2460 FE \u2192 \uD1A0\uC2A4CDN \uD654\uC0B4\uD45C -->
          <div style="display:flex;flex-direction:column;align-items:center;padding:0 4px;margin-top:55px;gap:2px">
            <div style="font-size:10px;font-weight:700;color:#fbbf24;white-space:nowrap;background:#fff;border:1px solid #fde047;border-radius:3px;padding:1px 5px">(1)</div>
            <div style="font-size:14px;color:#fbbf24">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#fbbf24;white-space:nowrap;background:#fff;border:1px solid #fde047;border-radius:3px;padding:1px 5px">(1.1)</div>
            <div style="font-size:14px;color:#fbbf24">\u27F5</div>
          </div>
          <!-- \uC678\uBD80 -->
          <div style="min-width:200px;background:#fef9c3;border:1px solid #fde047;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#92400e;margin-bottom:8px;font-size:11px">\u2601 \uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 CDN</div>
            <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #fbbf24">
                <div style="font-weight:600;color:#92400e">js.tosspayments.com</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">\uACB0\uC81C UI \uC5D0\uC14B(CSS/iframe) \uB85C\uB4DC</div>
              </div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #fbbf24">
                <div style="font-weight:600;color:#92400e">\uACB0\uC81C\uC218\uB2E8 \uC815\uBCF4 \uC870\uD68C</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">\uCE74\uB4DC/\uACC4\uC88C/\uAC04\uD3B8\uACB0\uC81C \uBAA9\uB85D \uB80C\uB354</div>
              </div>
            </div>
          </div>
          <div style="min-width:140px;background:#dcfce7;border:1px solid #86efac;border-radius:8px;padding:10px 12px;margin-left:6px;margin-top:8px;align-self:flex-start">
            <div style="font-weight:700;color:#166534;font-size:11px;margin-bottom:6px">\u2699 Backend \uD638\uCD9C</div>
            <div style="color:#64748b;font-size:11px;background:#fff;border-radius:4px;padding:6px 8px">
              <span style="color:#dc2626">\uC5C6\uC74C</span><br>\uC704\uC82F \uB80C\uB354\uB9C1\uC740 \uC804\uC801\uC73C\uB85C<br>\uBE0C\uB77C\uC6B0\uC800 \u2194 \uD1A0\uC2A4 CDN<br>\uC0AC\uC774\uC5D0\uC11C \uCC98\uB9AC\uB428
            </div>
          </div>
        </div>
        <!-- \u2460 API \uC0C1\uC138 \uD328\uB110 -->
        <div style="width:320px;flex-shrink:0">
          <div style="background:#eff6ff;border:1px solid #93c5fd;border-radius:6px;overflow:hidden">
            <div style="padding:6px 10px;background:#dbeafe;display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none"
              @click="handleBtnAction('panel-toggle', 'apiPanel1Open')">
              <span style="font-size:11px;font-weight:700;color:#1e40af">\u{1F4E1} API \uC0C1\uC138 (\uC811\uAE30/\uD3BC\uCE58\uAE30)</span>
              <span style="margin-left:auto;font-size:12px;color:#64748b">{{ uiState.apiPanel1Open ? '\u25B2' : '\u25BC' }}</span>
            </div>
            <div v-if="uiState.apiPanel1Open" style="padding:10px;font-size:11px;display:flex;flex-direction:column;gap:10px">

              <div>
                <div style="font-weight:700;color:#1e40af;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">CDN \uB85C\uB4DC (SDK \uB0B4\uBD80 \uC790\uB3D9)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #cbd5e1;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">// \uC694\uCCAD
GET js.tosspayments.com/v2/esm/
  \u2192 \uC778\uC99D \uC5C6\uC74C (public CDN)
  \u2192 \uC694\uCCAD \uBC14\uB514 \uC5C6\uC74C

// \uC751\uB2F5
SDK JS + CSS + iframe \uC5D0\uC14B
  (clientKey \uACF5\uAC1C\uD0A4 \u2014 \uC18C\uC2A4 \uB178\uCD9C \uBB34\uD574)
  (secretKey \uC808\uB300 FE \uB178\uCD9C \uAE08\uC9C0)</pre>
              </div>

              <div>
                <div style="font-weight:700;color:#1e40af;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">\uACB0\uC81C\uC218\uB2E8 \uC870\uD68C (SDK \uB0B4\uBD80 \uC790\uB3D9)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #cbd5e1;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">// SDK \uB0B4\uBD80 \uD638\uCD9C \u2014 \uCF54\uB4DC \uBD88\uD544\uC694
GET api.tosspayments.com/v1/...

// \uC694\uCCAD \uD30C\uB77C\uBBF8\uD130 (SDK \uC790\uB3D9 \uC804\uB2EC)
clientKey: "test_gck_..."
customerKey: "ANONYMOUS"  // \uBE44\uD68C\uC6D0 \uACE0\uC815

// \uC751\uB2F5 (\uC131\uACF5)
[
  { method: "\uCE74\uB4DC", ... },
  { method: "\uAC04\uD3B8\uACB0\uC81C", ... },
  { method: "\uACC4\uC88C\uC774\uCCB4", ... }
]

// \uC751\uB2F5 (\uC2E4\uD328 \u2014 \uD1A0\uC2A4 \uC5D0\uB7EC \uAC1D\uCCB4)
{
  "code":    "INVALID_CLIENT_KEY",  // \uC5D0\uB7EC \uCF54\uB4DC
  "message": "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uD074\uB77C\uC774\uC5B8\uD2B8 \uD0A4\uC785\uB2C8\uB2E4."
}</pre>
              </div>

              <div>
                <div style="font-weight:700;color:#15803d;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">widgets.renderPaymentMethods() \uC751\uB2F5</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #86efac;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">// \uC131\uACF5 \u2014 \uBC18\uD658\uAC12 \uC5C6\uC74C (void)
// #toss-widget-container DOM \uC5D0 \uACB0\uC81C UI iframe \uC0BD\uC785 \uC644\uB8CC

// \uC2E4\uD328 \u2014 Promise reject (try/catch \uB85C \uC7A1\uC544\uC57C \uD568)
{
  "code":    "WIDGET_RENDER_FAILED",
  "message": "\uACB0\uC81C\uCC3D\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."
}
// \u2192 \uC6D0\uC778: clientKey \uC624\uB958 / CDN \uCC28\uB2E8 / DOM \uC140\uB809\uD130 \uC5C6\uC74C</pre>
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>

      <hr style="border:none;border-top:1px solid #e5e7eb" />

      <!-- \u2461 \uACB0\uC81C\uD558\uAE30 -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#7c3aed;margin-bottom:10px;display:flex;align-items:center;gap:6px">
          <span style="background:#7c3aed;color:#fff;border-radius:4px;padding:2px 8px;font-size:11px">\u2461</span> \uACB0\uC81C\uD558\uAE30 \u2014 [\uACB0\uC81C\uD558\uAE30] \uBC84\uD2BC
        </div>
        <div style="display:flex;align-items:flex-start;gap:12px;font-size:12px">
        <div style="flex:1;display:flex;align-items:flex-start;gap:0;overflow-x:auto">

          <!-- FE -->
          <div style="min-width:250px;background:#dbeafe;border:1px solid #93c5fd;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#1d4ed8;margin-bottom:8px;font-size:11px">\u{1F5A5} Frontend</div>
            <div style="display:flex;flex-direction:column;gap:5px">

              <!-- STEP1 \uB77C\uBCA8 -->
              <div style="font-size:10px;font-weight:700;color:#1d4ed8;background:#dbeafe;border-radius:3px;padding:2px 6px;letter-spacing:0.5px">\u25B6 STEP 1 \xB7 \uACB0\uC81C \uC804 \uC784\uC2DC\uC800\uC7A5</div>

              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #3b82f6">
                <div style="font-weight:600;color:#1e40af">POST /bo/zd/pay-test/pre-save</div>
                <div style="color:#64748b;font-size:10px;margin-top:4px;line-height:1.7">
                  <span style="color:#374151;font-weight:600">payId</span> <span style="color:#7c3aed;font-weight:700">PAY-1782\u2026</span> <span style="color:#94a3b8">\u2190 \uC6B0\uB9AC BE\uAC00 \uBC1C\uAE09 (od_pay PK)</span><br>
                  <span style="color:#374151;font-weight:600">orderId</span> <span style="color:#64748b">= payId</span> <span style="color:#94a3b8">\u2190 \uD1A0\uC2A4\uC5D0 \uB118\uAE38 \uD0A4 (payId \uC7AC\uC0AC\uC6A9)</span><br>
                  <span style="color:#374151;font-weight:600">orderName</span> \uD14C\uC2A4\uD2B8 \uC0C1\uD488<br>
                  <span style="color:#374151;font-weight:600">amount</span> 1,000<br>
                  <span style="color:#374151;font-weight:600">customerName</span> \uC1A1\uC131\uC77C<br>
                  <span style="color:#374151;font-weight:600">pgProvider</span> toss_widget<br>
                  <span style="color:#374151;font-weight:600">status</span> <span style="color:#f59e0b;font-weight:700">PENDING</span><br>
                  <span style="color:#374151;font-weight:600">paymentKey</span> <span style="color:#94a3b8">null \u2190 \uC544\uC9C1 \uBBF8\uBC1C\uAE09</span>
                </div>
              </div>
              <div style="text-align:center;color:#3b82f6;font-size:14px;line-height:1">\u2193 \uC784\uC2DC\uC800\uC7A5 \uC644\uB8CC \uD6C4</div>

              <!-- STEP2 \uB77C\uBCA8 -->
              <div style="font-size:10px;font-weight:700;color:#7c3aed;background:#f3e8ff;border-radius:3px;padding:2px 6px;letter-spacing:0.5px">\u25B6 STEP 2 \xB7 \uD1A0\uC2A4 \uACB0\uC81C\uCC3D \uD638\uCD9C</div>

              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #7c3aed">
                <div style="font-weight:600;color:#7c3aed">widgets.requestPayment(params)</div>
                <div style="color:#64748b;font-size:10px;margin-top:4px;line-height:1.7">
                  <span style="color:#374151;font-weight:600">orderId</span> PAY-1782\u2026 <span style="color:#94a3b8">(= payId, STEP1\uACFC \uB3D9\uC77C)</span><br>
                  <span style="color:#374151;font-weight:600">orderName</span> \uD14C\uC2A4\uD2B8 \uC0C1\uD488<br>
                  <span style="color:#374151;font-weight:600">amount</span> 1,000 (setAmount\uC640 \uC77C\uCE58)<br>
                  <span style="color:#374151;font-weight:600">successUrl</span> bo.html?callback_pay_toss_succ=1<br>
                  <span style="color:#374151;font-weight:600">failUrl</span> bo.html?callback_pay_toss_fail=1
                </div>
              </div>
              <div style="text-align:center;color:#7c3aed;font-size:14px;line-height:1">\u2193</div>

              <div style="background:#faf5ff;border-radius:4px;padding:6px 8px;border:1px dashed #a855f7">
                <div style="font-weight:600;color:#7c3aed">\u26A0 \uD398\uC774\uC9C0 \uC774\uD0C8</div>
                <div style="color:#64748b;font-size:10px;margin-top:2px">\uBE0C\uB77C\uC6B0\uC800 \u2192 \uD1A0\uC2A4 \uACB0\uC81C\uCC3D\uC73C\uB85C \uC774\uB3D9<br>\uC774\uD6C4 JS \uC2E4\uD589 \uC911\uB2E8</div>
              </div>
              <div style="text-align:center;color:#64748b;font-size:11px;line-height:1.8">\u2193 \uACB0\uC81C \uC644\uB8CC \uD6C4 GET redirect</div>

              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">\u2705 \uC131\uACF5 \uBCF5\uADC0</div>
                <div style="color:#64748b;font-size:10px;margin-top:4px;line-height:1.7">
                  <span style="color:#374151;font-weight:600">callback_pay_toss_succ</span> 1<br>
                  <span style="color:#374151;font-weight:600">paymentKey</span> <span style="color:#15803d;font-weight:700">tgen_20260628\u2026 \u2190 \uD1A0\uC2A4 \uBC1C\uAE09</span><br>
                  <span style="color:#374151;font-weight:600">orderId</span> PAY-1782\u2026 (= payId, STEP1\uACFC \uB3D9\uC77C)<br>
                  <span style="color:#374151;font-weight:600">amount</span> 1000 (\uC704\uBCC0\uC870 \uAC80\uC99D\uC6A9)
                </div>
              </div>
              <div style="text-align:center;color:#64748b;font-size:10px">\uB610\uB294</div>
              <div style="background:#fee2e2;border-radius:4px;padding:6px 8px;border-left:3px solid #ef4444">
                <div style="font-weight:600;color:#b91c1c">\u274C \uC2E4\uD328 \uBCF5\uADC0</div>
                <div style="color:#64748b;font-size:10px;margin-top:2px">callback_pay_toss_fail=1<br>\uC5D0\uB7EC \uD1A0\uC2A4\uD2B8 \uD45C\uC2DC</div>
              </div>
            </div>
          </div>

          <!-- \u2461 FE \u2192 BE \uD654\uC0B4\uD45C (STEP1) -->
          <div style="display:flex;flex-direction:column;align-items:center;padding:0 4px;margin-top:38px;gap:2px">
            <div style="font-size:10px;font-weight:700;color:#3b82f6;white-space:nowrap;background:#fff;border:1px solid #93c5fd;border-radius:3px;padding:1px 5px">(2)</div>
            <div style="font-size:11px;color:#3b82f6;white-space:nowrap">STEP1 \u2192</div>
            <div style="font-size:14px;color:#3b82f6">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#3b82f6;white-space:nowrap;background:#fff;border:1px solid #93c5fd;border-radius:3px;padding:1px 5px">(2.1)</div>
            <div style="font-size:11px;color:#3b82f6;white-space:nowrap">\u2190 \uC751\uB2F5</div>
            <div style="font-size:14px;color:#3b82f6">\u27F5</div>
          </div>

          <!-- BE -->
          <div style="min-width:230px;background:#dcfce7;border:1px solid #86efac;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#166534;margin-bottom:8px;font-size:11px">\u2699 Backend (Spring Boot)</div>
            <div style="display:flex;flex-direction:column;gap:5px">

              <div style="font-size:10px;font-weight:700;color:#166534;background:#dcfce7;border-radius:3px;padding:2px 6px;letter-spacing:0.5px">\u25B6 STEP 1 \xB7 \uC784\uC2DC\uC800\uC7A5 \uCC98\uB9AC</div>

              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#166534">ZdPayTestController</div>
                <div style="color:#64748b;font-size:10px;margin-top:2px">POST /bo/zd/pay-test/pre-save</div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:14px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #7c3aed">
                <div style="font-weight:600;color:#7c3aed">\u2460 od_pay \uBA3C\uC800 \uC0DD\uC131 \u2192 payId \uACB0\uC815</div>
                <div style="color:#64748b;font-size:10px;margin-top:4px;line-height:1.7">
                  <span style="color:#7c3aed;font-weight:700">pay_id</span> PAY-1782\u2026 <span style="color:#94a3b8">\u2190 \uC774\uAC8C \uD1A0\uC2A4 orderId</span><br>
                  <span style="color:#374151;font-weight:600">pay_status_cd</span> <span style="color:#f59e0b;font-weight:700">PENDING</span><br>
                  <span style="color:#374151;font-weight:600">pay_amt</span> 1,000<br>
                  <span style="color:#374151;font-weight:600">pay_method_cd</span> toss_widget<br>
                  <span style="color:#374151;font-weight:600">pay_occur_type_cd</span> ORDER<br>
                  <span style="color:#374151;font-weight:600">payment_key</span> <span style="color:#94a3b8">null \u2190 confirm \uD6C4 \uCC44\uC6CC\uC9D0</span>
                </div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:14px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#166534">\u2461 od_order \uC784\uC2DC \uC0DD\uC131</div>
                <div style="color:#64748b;font-size:10px;margin-top:4px;line-height:1.7">
                  <span style="color:#374151;font-weight:600">order_id</span> ORD-1782\u2026 (\uBCC4\uB3C4 PK)<br>
                  <span style="color:#374151;font-weight:600">order_status_cd</span> <span style="color:#f59e0b;font-weight:700">PENDING</span><br>
                  <span style="color:#374151;font-weight:600">order_amt</span> 1,000<br>
                  <span style="color:#374151;font-weight:600">customer_nm</span> \uC1A1\uC131\uC77C
                </div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:14px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#166534">\uC784\uC2DC\uC800\uC7A5 \uC644\uB8CC \uC751\uB2F5</div>
                <div style="color:#64748b;font-size:10px;margin-top:2px">orderId \uBC18\uD658 \u2192 FE \uACB0\uC81C\uCC3D \uC9C4\uD589</div>
              </div>

              <div style="margin-top:4px;padding:6px 8px;background:#f0fdf4;border-radius:4px;border:1px solid #bbf7d0;font-size:10px;color:#64748b;line-height:1.7">
                \u{1F4A1} \uACB0\uC81C\uCC3D \uC774\uD0C8 \uD6C4 \uCF5C\uBC31 \uBBF8\uC218\uC2E0 \uC2DC<br>
                orderId \uAE30\uC900\uC73C\uB85C PENDING \uC8FC\uBB38 \uC870\uD68C \uAC00\uB2A5<br>
                \u2192 \uBC30\uCE58\uB85C \uBBF8\uC644 \uC8FC\uBB38 \uC815\uB9AC \uAC00\uB2A5
              </div>
            </div>
          </div>

          <!-- \u2461 FE \u2192 \uD1A0\uC2A4\uACB0\uC81C\uCC3D \uD654\uC0B4\uD45C (STEP2: \uD398\uC774\uC9C0\uC774\uD0C8) -->
          <div style="display:flex;flex-direction:column;align-items:center;padding:0 4px;margin-top:180px;gap:2px">
            <div style="font-size:10px;font-weight:700;color:#a855f7;white-space:nowrap;background:#fff;border:1px solid #d8b4fe;border-radius:3px;padding:1px 5px">(3)</div>
            <div style="font-size:11px;color:#a855f7;white-space:nowrap">STEP2 \u2192</div>
            <div style="font-size:14px;color:#a855f7">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#a855f7;white-space:nowrap;background:#fff;border:1px solid #d8b4fe;border-radius:3px;padding:1px 5px">(3.1)</div>
            <div style="font-size:11px;color:#a855f7;white-space:nowrap">GET redirect \u2190</div>
            <div style="font-size:14px;color:#a855f7">\u27F5</div>
          </div>

          <!-- \uD1A0\uC2A4 -->
          <div style="min-width:210px;background:#fef9c3;border:1px solid #fde047;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#92400e;margin-bottom:8px;font-size:11px">\u2601 \uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uACB0\uC81C\uCC3D</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #fbbf24">
                <div style="font-weight:600;color:#92400e">\uACB0\uC81C\uC218\uB2E8 \uC120\uD0DD UI</div>
                <div style="color:#64748b;font-size:10px;margin-top:2px">\uCE74\uB4DC \xB7 \uACC4\uC88C\uC774\uCCB4 \xB7 \uAC04\uD3B8\uACB0\uC81C</div>
              </div>
              <div style="text-align:center;color:#fbbf24;font-size:14px">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #fbbf24">
                <div style="font-weight:600;color:#92400e">\uACB0\uC81C \uC778\uC99D \uCC98\uB9AC</div>
                <div style="color:#64748b;font-size:10px;margin-top:2px">\uCE74\uB4DC\uC0AC / \uAC04\uD3B8\uACB0\uC81C \uC571 \uC5F0\uB3D9</div>
              </div>
              <div style="text-align:center;color:#fbbf24;font-size:14px">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #15803d">
                <div style="font-weight:600;color:#15803d">\u{1F511} paymentKey \uBC1C\uAE09</div>
                <div style="color:#64748b;font-size:10px;margin-top:4px;line-height:1.7">
                  <span style="color:#15803d;font-weight:700">paymentKey</span> tgen_20260628\u2026<br>
                  <span style="color:#374151;font-weight:600">orderId</span> PAY-1782\u2026 (= payId, echo)<br>
                  <span style="color:#374151;font-weight:600">amount</span> 1000
                </div>
              </div>
              <div style="text-align:center;color:#fbbf24;font-size:14px">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">GET redirect \u2192 successUrl</div>
                <div style="color:#64748b;font-size:10px;margin-top:2px">\uCFFC\uB9AC\uC2A4\uD2B8\uB9C1\uC73C\uB85C \uC804\uB2EC<br>\u2192 FE\uAC00 \uC218\uC2E0 \uD6C4 \uBC30\uB108 \uD45C\uC2DC</div>
              </div>
            </div>
          </div>

        </div>
        <!-- \u2461 API \uC0C1\uC138 \uD328\uB110 -->
        <div style="width:320px;flex-shrink:0">
          <div style="background:#faf5ff;border:1px solid #d8b4fe;border-radius:6px;overflow:hidden">
            <div style="padding:6px 10px;background:#f3e8ff;display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none"
              @click="handleBtnAction('panel-toggle', 'apiPanel2Open')">
              <span style="font-size:11px;font-weight:700;color:#7c3aed">\u{1F4E1} API \uC0C1\uC138 (\uC811\uAE30/\uD3BC\uCE58\uAE30)</span>
              <span style="margin-left:auto;font-size:12px;color:#64748b">{{ uiState.apiPanel2Open ? '\u25B2' : '\u25BC' }}</span>
            </div>
            <div v-if="uiState.apiPanel2Open" style="padding:10px;font-size:11px;display:flex;flex-direction:column;gap:10px">
              <div>
                <div style="font-weight:700;color:#7c3aed;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">STEP1 \xB7 \uC784\uC2DC\uC800\uC7A5 (\uC6B0\uB9AC BE)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #d8b4fe;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">// \uC694\uCCAD
POST /api/bo/zd/pay-test/pre-save
Authorization: BO \uC138\uC158 (X-UI-Nm \uD5E4\uB354)

{
  "orderName":     "\uD14C\uC2A4\uD2B8 \uC0C1\uD488",
  "amount":        1000,
  "customerName":  "\uD64D\uAE38\uB3D9",
  "customerEmail": "test@example.com",
  "pgProvider":    "toss_widget",
  "status":        "PENDING",
  "paymentKey":    null                   // \uC544\uC9C1 \uBBF8\uBC1C\uAE09
}

// BE \uCC98\uB9AC: od_pay \uBA3C\uC800 INSERT \u2192 pay_id \uBC1C\uAE09
//          \u2192 pay_id \uB97C \uD1A0\uC2A4 orderId \uB85C \uC0AC\uC6A9

// \uC751\uB2F5 (\uC131\uACF5)
{
  "payId":   "PAY-1782601234567",  // \u2190 \uC774\uAC78 \uD1A0\uC2A4 orderId \uB85C \uC0AC\uC6A9
  "status":  "PENDING"
}

// \uC751\uB2F5 (\uC2E4\uD328 \u2014 ApiResponse \uC5D0\uB7EC \uAD6C\uC870)
HTTP 400 / 500
{
  "code":    "INVALID_AMOUNT",
  "message": "\uACB0\uC81C \uAE08\uC561\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
}
// \uB610\uB294 \uC778\uC99D \uC2E4\uD328 \uC2DC:
HTTP 401
{ "code": "UNAUTHORIZED", "message": "\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4." }</pre>
              </div>
              <div>
                <div style="font-weight:700;color:#7c3aed;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">STEP2 \xB7 \uACB0\uC81C\uCC3D \uD638\uCD9C (SDK \u2014 BE \uC5C6\uC74C)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #d8b4fe;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">// SDK \uD638\uCD9C (FE only)
widgets.requestPayment({
  orderId:       "PAY-1782601234567",  // \u2190 BE\uAC00 \uBC18\uD658\uD55C payId
  orderName:     "\uD14C\uC2A4\uD2B8 \uC0C1\uD488",
  successUrl:    window.location.origin + "/bo.html?bo_callback=toss_success",
  failUrl:       window.location.origin + "/bo.html?bo_callback=toss_fail",
  customerName:  "\uD64D\uAE38\uB3D9",
  customerEmail: "test@example.com",
})
// BE \uD638\uCD9C \uC5C6\uC74C \u2014 SDK\uAC00 \uD1A0\uC2A4 \uC11C\uBC84 \uC9C1\uC811 \uD1B5\uC2E0
// \uC0AC\uC6A9\uC790 \uC778\uC99D \uC644\uB8CC \uC2DC successUrl\uB85C GET redirect</pre>
              </div>
              <div>
                <div style="font-weight:700;color:#7c3aed;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">STEP2 \xB7 \uC131\uACF5 \uCF5C\uBC31 \uD30C\uB77C\uBBF8\uD130</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #d8b4fe;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">// GET redirect \u2192 successUrl?
paymentKey=tgen_20260628...  // \uD1A0\uC2A4 \uBC1C\uAE09 \uACB0\uC81C \uC2DD\uBCC4\uC790
orderId=PAY-1782601234567    // = payId (echo, \uAC80\uC99D\uC6A9)
amount=1000                  // \u26A0 \uC704\uBCC0\uC870 \uAC00\uB2A5 \u2014 \uC11C\uBC84\uC5D0\uC11C od_pay.pay_amt \uC640 \uBC18\uB4DC\uC2DC \uBE44\uAD50</pre>
              </div>
              <div style="background:#f0f9ff;border-radius:4px;padding:7px 9px;font-size:10px;color:#374151;line-height:1.8;border:1px solid #bae6fd">
                \u{1F4A1} <b>orderId (\uD1A0\uC2A4)</b> = <b>payId (\uC6B0\uB9AC)</b> \u2014 od_pay.pay_id \uB97C \uD1A0\uC2A4 orderId \uB85C \uADF8\uB300\uB85C \uC0AC\uC6A9. \uCD94\uAC00\uACB0\uC81C\uB3C4 \uC0C8 payId \uBC1C\uAE09\uC73C\uB85C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uBD84\uB9AC<br>
                \u{1F4A1} <b>paymentKey</b> \u2014 \uD1A0\uC2A4\uAC00 \uC778\uC99D \uC644\uB8CC \uD6C4 \uBC1C\uAE09 (STEP3 confirm \uC2DC od_pay.payment_key \uC5D0 \uC800\uC7A5)<br>
                \u{1F4A1} <b>\uB4A4\uB85C\uAC00\uAE30 \uC644\uCDA9:</b> \uBCF5\uADC0 \uD6C4 history.replaceState(\uD30C\uB77C\uBBF8\uD130 \uC81C\uAC70) + history.pushState(\uB3D9\uC77C URL) \u2192 \uB4A4\uB85C\uAC00\uAE30 1\uD68C bo.html \uC720\uC9C0
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <hr style="border:none;border-top:1px solid #e5e7eb" />

      <!-- \u2462 \uC2B9\uC778 \uC694\uCCAD (bo_callback \uBC30\uB108 / \uC218\uB3D9 \uC2B9\uC778) -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#0f766e;margin-bottom:10px;display:flex;align-items:center;gap:6px">
          <span style="background:#0f766e;color:#fff;border-radius:4px;padding:2px 8px;font-size:11px">\u2462</span> \uC2B9\uC778 \uC694\uCCAD \u2014 [\uC2B9\uC778 \uC694\uCCAD] \uBC30\uB108 \uB610\uB294 [\uC218\uB3D9 \uC2B9\uC778] \uBC84\uD2BC
        </div>
        <div style="display:flex;align-items:flex-start;gap:12px;font-size:12px">
        <div style="flex:1;display:flex;align-items:flex-start;gap:0;overflow-x:auto">
          <!-- FE -->
          <div style="min-width:230px;background:#dbeafe;border:1px solid #93c5fd;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#1d4ed8;margin-bottom:8px;font-size:11px">\u{1F5A5} Frontend</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #0f766e">
                <div style="font-weight:600;color:#0f766e">\uBC30\uB108 [\uC2B9\uC778 \uC694\uCCAD] \uD074\uB9AD</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">callbackParams\uC5D0\uC11C paymentKey / orderId / amount \uCD94\uCD9C</div>
              </div>
              <div style="text-align:center;color:#0f766e;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #0f766e">
                <div style="font-weight:600;color:#0f766e">POST /api/co/cm/toss/confirm</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px;font-family:monospace">{ paymentKey, orderId, amount }</div>
              </div>
              <div style="text-align:center;color:#0f766e;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">\uC2B9\uC778 \uACB0\uACFC \uD45C\uC2DC</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">confirmResult \uADF8\uB9AC\uB4DC \uB178\uCD9C<br>(paymentKey \xB7 status \xB7 method \xB7 amount)</div>
              </div>
            </div>
          </div>
          <!-- \u2462 FE \u2192 BE \uD654\uC0B4\uD45C -->
          <div style="display:flex;flex-direction:column;align-items:center;padding:0 4px;margin-top:40px;gap:2px">
            <div style="font-size:10px;font-weight:700;color:#0f766e;white-space:nowrap;background:#fff;border:1px solid #5eead4;border-radius:3px;padding:1px 5px">(4)</div>
            <div style="font-size:11px;color:#0f766e;white-space:nowrap">POST confirm \u2192</div>
            <div style="font-size:14px;color:#0f766e">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#0f766e;white-space:nowrap;background:#fff;border:1px solid #5eead4;border-radius:3px;padding:1px 5px">(6)</div>
            <div style="font-size:11px;color:#0f766e;white-space:nowrap">\u2190 \uACB0\uACFC \uBC18\uD658</div>
            <div style="font-size:14px;color:#0f766e">\u27F5</div>
          </div>
          <!-- BE -->
          <div style="min-width:230px;background:#dcfce7;border:1px solid #86efac;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#166534;margin-bottom:8px;font-size:11px">\u2699 Backend (Spring Boot)</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#166534">CmPayTossController</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">POST /api/co/cm/toss/confirm<br>\uC694\uCCAD \uD5E4\uB354\xB7\uBC14\uB514 \uAC80\uC99D</div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#166534">CmPayTossService.confirm()</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">secretKey \u2192 Base64 \uC778\uCF54\uB529<br>Authorization: Basic \uD5E4\uB354 \uC0DD\uC131</div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #fbbf24">
                <div style="font-weight:600;color:#92400e">POST \u2192 \uD1A0\uC2A4 \uC11C\uBC84</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px;font-family:monospace">api.tosspayments.com<br>/v1/payments/confirm</div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">\uC2B9\uC778 \uC751\uB2F5 \uBC18\uD658</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">payment \uAC1D\uCCB4 \u2192 ApiResponse.ok(result)</div>
              </div>
            </div>
          </div>
          <!-- \u2462 BE \u2192 \uD1A0\uC2A4\uC11C\uBC84 \uD654\uC0B4\uD45C -->
          <div style="display:flex;flex-direction:column;align-items:center;padding:0 4px;margin-top:70px;gap:2px">
            <div style="font-size:10px;font-weight:700;color:#fbbf24;white-space:nowrap;background:#fff;border:1px solid #fde047;border-radius:3px;padding:1px 5px">(5)</div>
            <div style="font-size:11px;color:#fbbf24;white-space:nowrap">\u2192 \uD1A0\uC2A4API</div>
            <div style="font-size:14px;color:#fbbf24">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#fbbf24;white-space:nowrap;background:#fff;border:1px solid #fde047;border-radius:3px;padding:1px 5px">(5.1)</div>
            <div style="font-size:11px;color:#fbbf24;white-space:nowrap">\u2190 \uC2B9\uC778\uACB0\uACFC</div>
            <div style="font-size:14px;color:#fbbf24">\u27F5</div>
          </div>
          <!-- \uD1A0\uC2A4 -->
          <div style="min-width:180px;background:#fef9c3;border:1px solid #fde047;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#92400e;margin-bottom:8px;font-size:11px">\u2601 \uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uC11C\uBC84</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #fbbf24">
                <div style="font-weight:600;color:#92400e">\uACB0\uC81C \uC2B9\uC778 \uCC98\uB9AC</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">\uCE74\uB4DC\uC0AC \uB9E4\uC785 \uC694\uCCAD<br>\uACB0\uC81C \uC0C1\uD0DC DONE \uC804\uD658</div>
              </div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">\uC2B9\uC778 \uACB0\uACFC \uC751\uB2F5</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">paymentKey \xB7 status \xB7 method<br>totalAmount \xB7 approvedAt</div>
              </div>
            </div>
          </div>
        </div>
        <!-- \u2462 API \uC0C1\uC138 \uD328\uB110 -->
        <div style="width:320px;flex-shrink:0">
          <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:6px;overflow:hidden">
            <div style="padding:6px 10px;background:#dcfce7;display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none"
              @click="handleBtnAction('panel-toggle', 'apiPanel3Open')">
              <span style="font-size:11px;font-weight:700;color:#0f766e">\u{1F4E1} API \uC0C1\uC138 (\uC811\uAE30/\uD3BC\uCE58\uAE30)</span>
              <span style="margin-left:auto;font-size:12px;color:#64748b">{{ uiState.apiPanel3Open ? '\u25B2' : '\u25BC' }}</span>
            </div>
            <div v-if="uiState.apiPanel3Open" style="padding:10px;font-size:11px;display:flex;flex-direction:column;gap:10px">
              <div>
                <div style="font-weight:700;color:#0f766e;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">\uC2B9\uC778 \uC694\uCCAD (\uC6B0\uB9AC BE \u2192 \uD1A0\uC2A4 \uC11C\uBC84)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #86efac;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">// FE \u2192 \uC6B0\uB9AC BE
POST /api/co/cm/toss/confirm
{
  "paymentKey": "tgen_20260628...",  // \uD1A0\uC2A4 \uBC1C\uAE09
  "orderId":    "PAY-1782601234",    // = payId (\uAC80\uC99D\uC6A9)
  "amount":     1000                 // \u26A0 \uC704\uBCC0\uC870 \u2014 BE\uC5D0\uC11C od_pay.pay_amt \uC640 \uBE44\uAD50
}

// \uC6B0\uB9AC BE \u2192 \uD1A0\uC2A4 \uC11C\uBC84
POST api.tosspayments.com/v1/payments/confirm
Authorization: Basic {Base64(secretKey:)}  // secretKey + \uCF5C\uB860 \uC778\uCF54\uB529
Content-Type: application/json
{
  "paymentKey": "tgen_...",
  "orderId":    "PAY-...",           // payId \uADF8\uB300\uB85C \uC804\uB2EC
  "amount":     1000
}</pre>
              </div>
              <div>
                <div style="font-weight:700;color:#0f766e;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">\uD1A0\uC2A4 \uC751\uB2F5 \u2014 Payment \uAC1D\uCCB4 (\uC131\uACF5)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #86efac;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">HTTP 200
{
  "paymentKey":    "tgen_...",         // \uD1A0\uC2A4 \uACB0\uC81C \uC2DD\uBCC4\uC790 \u2192 od_pay.payment_key
  "orderId":       "PAY-...",          // = payId (echo)
  "status":        "DONE",            // \uC2B9\uC778 \uC644\uB8CC
  "method":        "\uCE74\uB4DC",             // \uCE74\uB4DC/\uAC04\uD3B8\uACB0\uC81C/\uACC4\uC88C\uC774\uCCB4 \uB4F1
  "totalAmount":   1000,              // \uC2B9\uC778 \uAE08\uC561 \u26A0 DB \uAE08\uC561\uACFC \uBC18\uB4DC\uC2DC \uC77C\uCE58 \uAC80\uC99D
  "balanceAmount": 1000,              // \uCDE8\uC18C \uAC00\uB2A5 \uC794\uC5EC \uAE08\uC561 (\uCD5C\uCD08 = totalAmount)
  "approvedAt":    "2026-06-28T...",  // \uCE74\uB4DC\uC0AC \uC2E4\uC81C \uC2B9\uC778 \uC77C\uC2DC \u2192 od_pay.approved_at
  "transactionKey":"...",             // \uC774 \uACB0\uC81C \uAC74 \uAC70\uB798 \uC2DD\uBCC4\uC790
  "receiptUrl":    "https://...",     // \uD1A0\uC2A4 \uC804\uC790\uC601\uC218\uC99D URL \u2192 od_pay.receipt_url
  "isPartialCancelable": true,        // \uBD80\uBD84\uCDE8\uC18C \uAC00\uB2A5 \uC5EC\uBD80
  "suppliedAmount": 909,              // \uACF5\uAE09\uAC00\uC561 (\uBD80\uAC00\uC138 \uBCC4\uB3C4)
  "vat":           91,                // \uBD80\uAC00\uC138
  "taxFreeAmount": 0,                 // \uBA74\uC138 \uAE08\uC561
  "card": {
    "number":                "****-****-****-1234",  // \uB9C8\uC2A4\uD0B9 \uCE74\uB4DC\uBC88\uD638
    "installmentPlanMonths": 0,                      // \uD560\uBD80 \uAC1C\uC6D4 (0=\uC77C\uC2DC\uBD88)
    "approveNo":             "00000000"              // \uCE74\uB4DC\uC0AC \uC2B9\uC778\uBC88\uD638
  }
}</pre>
              </div>
              <div>
                <div style="font-weight:700;color:#dc2626;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">\uD1A0\uC2A4 \uC751\uB2F5 \u2014 \uC2E4\uD328 (\uC5D0\uB7EC \uAC1D\uCCB4)</div>
                <pre style="margin:0;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">HTTP 400 / 403 / 500
{
  "code":    "PAY_PROCESS_ABORTED",        // \uACB0\uC81C \uC911\uB2E8 (\uC0AC\uC6A9\uC790 \uCDE8\uC18C)
  "message": "\uACB0\uC81C\uAC00 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
}
// \uC8FC\uC694 \uC2E4\uD328 \uCF54\uB4DC:
// ALREADY_PROCESSED_PAYMENT \u2014 \uC774\uBBF8 \uCC98\uB9AC\uB41C \uACB0\uC81C
// PROVIDER_ERROR             \u2014 \uCE74\uB4DC\uC0AC/PG \uC624\uB958
// INVALID_AUTHORIZE_AUTH     \u2014 \uC778\uC99D \uBD88\uC77C\uCE58 (\uC704\uBCC0\uC870 \uC758\uC2EC)
// EXCEED_MAX_DAILY_PAYMENT_COUNT \u2014 \uC77C \uCD5C\uB300 \uACB0\uC81C \uD69F\uC218 \uCD08\uACFC
// INVALID_STOPPED_CARD       \u2014 \uC774\uC6A9 \uC815\uC9C0 \uCE74\uB4DC

// \u26A0 BE \uC5D0\uC11C amount \uC704\uBCC0\uC870 \uAC10\uC9C0 \uC2DC \uC989\uC2DC cancel \uD6C4 \uC5D0\uB7EC:
{
  "code":    "AMOUNT_MISMATCH",
  "message": "\uACB0\uC81C \uAE08\uC561 \uBD88\uC77C\uCE58. \uC989\uC2DC \uCDE8\uC18C \uCC98\uB9AC\uB428."
}</pre>
              </div>
              <div style="background:#fef3c7;border-radius:4px;padding:6px 8px;color:#92400e;font-size:10px;line-height:1.6">
                \u{1F4A1} amount \uC704\uBCC0\uC870 \uBC29\uC9C0: BE\uC5D0\uC11C DB \uC800\uC7A5 \uAE08\uC561\uACFC \uD1A0\uC2A4 \uC751\uB2F5 totalAmount \uB97C \uBC18\uB4DC\uC2DC \uBE44\uAD50. \uBD88\uC77C\uCE58 \uC2DC \uC989\uC2DC \uCDE8\uC18C \uD6C4 \uC5D0\uB7EC \uBC18\uD658.<br>
                \u{1F4A1} <b>\uC218\uB3D9 \uC2B9\uC778:</b> [\uC218\uB3D9 \uC2B9\uC778] \uBC84\uD2BC \u2192 prompt\uB85C paymentKey \xB7 orderId \xB7 amount \uC9C1\uC811 \uC785\uB825 \u2192 \uB3D9\uC77C confirm \uD750\uB984 (URL \uD30C\uB77C\uBBF8\uD130 \uC720\uC2E4 \uB300\uC751\uC6A9).
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <hr style="border:none;border-top:1px solid #e5e7eb" />

      <!-- \u2463 \uACB0\uC81C \uCDE8\uC18C -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#dc2626;margin-bottom:10px;display:flex;align-items:center;gap:6px">
          <span style="background:#dc2626;color:#fff;border-radius:4px;padding:2px 8px;font-size:11px">\u2463</span> \uACB0\uC81C \uCDE8\uC18C \u2014 [\uACB0\uC81C \uCDE8\uC18C] \uBC84\uD2BC
        </div>
        <div style="display:flex;align-items:flex-start;gap:12px;font-size:12px">
        <div style="flex:1;display:flex;align-items:flex-start;gap:0;overflow-x:auto">
          <!-- FE -->
          <div style="min-width:230px;background:#dbeafe;border:1px solid #93c5fd;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#1d4ed8;margin-bottom:8px;font-size:11px">\u{1F5A5} Frontend</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #dc2626">
                <div style="font-weight:600;color:#dc2626">showConfirm('\uACB0\uC81C \uCDE8\uC18C')</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">\uC0AC\uC6A9\uC790 \uCD5C\uC885 \uD655\uC778 \uBAA8\uB2EC</div>
              </div>
              <div style="text-align:center;color:#dc2626;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #dc2626">
                <div style="font-weight:600;color:#dc2626">POST /api/co/cm/toss/cancel</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px;font-family:monospace">{ paymentKey, cancelReason }<br>cancelAmount \uC0DD\uB7B5 = \uC804\uC561</div>
              </div>
              <div style="text-align:center;color:#dc2626;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">\uCDE8\uC18C \uACB0\uACFC \uD45C\uC2DC</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">cancelResult JSON \uB178\uCD9C</div>
              </div>
            </div>
          </div>
          <!-- \u2463 FE \u2192 BE \uD654\uC0B4\uD45C -->
          <div style="display:flex;flex-direction:column;align-items:center;padding:0 4px;margin-top:40px;gap:2px">
            <div style="font-size:10px;font-weight:700;color:#dc2626;white-space:nowrap;background:#fff;border:1px solid #fca5a5;border-radius:3px;padding:1px 5px">(7)</div>
            <div style="font-size:11px;color:#dc2626;white-space:nowrap">POST cancel \u2192</div>
            <div style="font-size:14px;color:#dc2626">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#dc2626;white-space:nowrap;background:#fff;border:1px solid #fca5a5;border-radius:3px;padding:1px 5px">(9)</div>
            <div style="font-size:11px;color:#dc2626;white-space:nowrap">\u2190 \uACB0\uACFC \uBC18\uD658</div>
            <div style="font-size:14px;color:#dc2626">\u27F5</div>
          </div>
          <!-- BE -->
          <div style="min-width:230px;background:#dcfce7;border:1px solid #86efac;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#166534;margin-bottom:8px;font-size:11px">\u2699 Backend (Spring Boot)</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #ef4444">
                <div style="font-weight:600;color:#dc2626">CmPayTossController</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">POST /api/co/cm/toss/cancel</div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #ef4444">
                <div style="font-weight:600;color:#dc2626">CmPayTossService.cancel()</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">cancelAmount null \u2192 \uC804\uC561 \uCDE8\uC18C<br>cancelAmount \uC9C0\uC815 \u2192 \uBD80\uBD84 \uCDE8\uC18C</div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #fbbf24">
                <div style="font-weight:600;color:#92400e">POST \u2192 \uD1A0\uC2A4 \uC11C\uBC84</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px;font-family:monospace">api.tosspayments.com<br>/v1/payments/{paymentKey}/cancel</div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">\uCDE8\uC18C \uC751\uB2F5 \uBC18\uD658</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">cancels \uBC30\uC5F4 \uD3EC\uD568 payment \uAC1D\uCCB4</div>
              </div>
            </div>
          </div>
          <!-- \u2463 BE \u2192 \uD1A0\uC2A4\uC11C\uBC84 \uD654\uC0B4\uD45C -->
          <div style="display:flex;flex-direction:column;align-items:center;padding:0 4px;margin-top:70px;gap:2px">
            <div style="font-size:10px;font-weight:700;color:#fbbf24;white-space:nowrap;background:#fff;border:1px solid #fde047;border-radius:3px;padding:1px 5px">(8)</div>
            <div style="font-size:11px;color:#fbbf24;white-space:nowrap">\u2192 \uD1A0\uC2A4API</div>
            <div style="font-size:14px;color:#fbbf24">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#fbbf24;white-space:nowrap;background:#fff;border:1px solid #fde047;border-radius:3px;padding:1px 5px">(8.1)</div>
            <div style="font-size:11px;color:#fbbf24;white-space:nowrap">\u2190 \uCDE8\uC18C\uACB0\uACFC</div>
            <div style="font-size:14px;color:#fbbf24">\u27F5</div>
          </div>
          <!-- \uD1A0\uC2A4 -->
          <div style="min-width:180px;background:#fef9c3;border:1px solid #fde047;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#92400e;margin-bottom:8px;font-size:11px">\u2601 \uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uC11C\uBC84</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #fbbf24">
                <div style="font-weight:600;color:#92400e">\uCDE8\uC18C \uCC98\uB9AC</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">\uCE74\uB4DC\uC0AC \uCDE8\uC18C \uB9E4\uC785<br>\uC804\uC561 / \uBD80\uBD84 \uBD84\uAE30</div>
              </div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #fbbf24">
                <div style="font-weight:600;color:#92400e">CANCELED \uC0C1\uD0DC \uC804\uD658</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">cancels[].cancelAmount<br>cancels[].canceledAt \uBC18\uD658</div>
              </div>
            </div>
          </div>
        </div>
        <!-- \u2463 API \uC0C1\uC138 \uD328\uB110 -->
        <div style="width:320px;flex-shrink:0">
          <div style="background:#fff5f5;border:1px solid #fca5a5;border-radius:6px;overflow:hidden">
            <div style="padding:6px 10px;background:#fee2e2;display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none"
              @click="handleBtnAction('panel-toggle', 'apiPanel4Open')">
              <span style="font-size:11px;font-weight:700;color:#dc2626">\u{1F4E1} API \uC0C1\uC138 (\uC811\uAE30/\uD3BC\uCE58\uAE30)</span>
              <span style="margin-left:auto;font-size:12px;color:#64748b">{{ uiState.apiPanel4Open ? '\u25B2' : '\u25BC' }}</span>
            </div>
            <div v-if="uiState.apiPanel4Open" style="padding:10px;font-size:11px;display:flex;flex-direction:column;gap:10px">
              <div>
                <div style="font-weight:700;color:#dc2626;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">\uCDE8\uC18C \uC694\uCCAD (\uC6B0\uB9AC BE \u2192 \uD1A0\uC2A4 \uC11C\uBC84)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #fca5a5;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">// FE \u2192 \uC6B0\uB9AC BE
POST /api/co/cm/toss/cancel
{
  "paymentKey":   "tgen_20260628...",  // \uD1A0\uC2A4 \uBC1C\uAE09 \uACB0\uC81C \uC2DD\uBCC4\uC790
  "cancelReason": "\uACE0\uAC1D \uC694\uCCAD",
  "cancelAmount": 500                  // \uBD80\uBD84\uCDE8\uC18C \uAE08\uC561 (\uC0DD\uB7B5 \uC2DC \uC804\uC561 \uCDE8\uC18C)
}

// \uC6B0\uB9AC BE \u2192 \uD1A0\uC2A4 \uC11C\uBC84
POST api.tosspayments.com
     /v1/payments/{paymentKey}/cancel
Authorization: Basic {Base64(secretKey:)}
{
  "cancelReason": "\uACE0\uAC1D \uC694\uCCAD",
  "cancelAmount": 500                  // null \uC774\uBA74 \uC804\uC561 \uCDE8\uC18C
}</pre>
              </div>
              <div>
                <div style="font-weight:700;color:#dc2626;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">\uD1A0\uC2A4 \uC751\uB2F5 \u2014 Payment \uAC1D\uCCB4 (\uCDE8\uC18C \uD6C4)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #fca5a5;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">{
  "status":              "DONE",       // \uBD80\uBD84\uCDE8\uC18C=DONE / \uC804\uC561\uCDE8\uC18C=CANCELED
  "totalAmount":         1000,         // \uC6D0 \uACB0\uC81C\uAE08\uC561 (\uCDE8\uC18C\uD574\uB3C4 \uBD88\uBCC0)
  "balanceAmount":       500,          // \uB0A8\uC740 \uCDE8\uC18C \uAC00\uB2A5 \uAE08\uC561 (0\uC774\uBA74 \uC885\uB8CC)
  "isPartialCancelable": true,         // \uCD94\uAC00 \uBD80\uBD84\uCDE8\uC18C \uAC00\uB2A5 \uC5EC\uBD80
  "cancels": [                         // \uB204\uC801 \uCDE8\uC18C \uC774\uB825 \uBC30\uC5F4
    {
      "cancelAmount":    500,          // \uC774\uBC88 \uCC28\uAC10 \uAE08\uC561
      "canceledAt":      "2026-06-28T12:34:56+09:00",  // \uCDE8\uC18C \uC644\uB8CC \uC77C\uC2DC
      "cancelReason":    "\uACE0\uAC1D \uC694\uCCAD",
      "transactionKey":  "...",        // \uC774\uBC88 \uCDE8\uC18C\uC758 \uAC70\uB798 \uC2DD\uBCC4\uC790 (\uB9E4 \uCDE8\uC18C\uB9C8\uB2E4 \uC0C8\uB85C \uBC1C\uAE09)
      "refundableAmount": 500,         // \uC2E4\uC81C \uD658\uAE09 \uAC00\uB2A5\uC561 (\uBA74\uC138 \uBD84\uB9AC \uD6C4)
      "taxFreeAmount":   0             // \uBA74\uC138 \uCDE8\uC18C \uAE08\uC561
    }
    // \uBD80\uBD84\uCDE8\uC18C 2\uD68C\uBA74 cancels[] 2\uAC74 \uB204\uC801
  ]
}</pre>
              </div>
              <div style="background:#fef3c7;border-radius:4px;padding:6px 8px;color:#92400e;font-size:10px;line-height:1.6">
                \u{1F4A1} \uCDE8\uC18C \uD6C4 \uBCC4\uB3C4 \uC870\uD68C \uC5C6\uC774 \uC751\uB2F5 \uADF8\uB300\uB85C \uC0AC\uC6A9 \uAC00\uB2A5.<br>
                balanceAmount = 0 \uC774\uBA74 status = CANCELED \uB85C \uC804\uD658.<br>
                paymentKey \uB294 \uBD88\uBCC0, transactionKey \uB294 \uCDE8\uC18C\uB9C8\uB2E4 \uC0C8\uB85C \uBC1C\uAE09.
              </div>
              <div style="background:#fff5f5;border-radius:4px;padding:6px 8px;color:#b91c1c;font-size:10px;line-height:1.6;border:1px solid #fca5a5">
                \u26A0 <b>\uC774 \uD654\uBA74\uC740 \uAC1C\uBC1C \uD14C\uC2A4\uD2B8\uC6A9</b> \u2014 od_order / od_pay \uB3C4\uBA54\uC778 \uD6C4\uCC98\uB9AC(DB \uBC18\uC601, \uC7AC\uACE0 \uBCF5\uAD6C \uB4F1)\uB294 \uC2E4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br>
                \uC6B4\uC601 \uCDE8\uC18C\uB294 \uC8FC\uBB38\uAD00\uB9AC \u2192 \uD074\uB808\uC784 \uCC98\uB9AC \u2192 OdRefund \uC5D4\uD2F0\uD2F0 \uC5F0\uB3D9\uC73C\uB85C \uBCC4\uB3C4 \uAD6C\uD604.
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <hr style="border:none;border-top:1px solid #e5e7eb" />

      <!-- \u2464 \uBC30\uC1A1\uBE44 \uCD94\uAC00\uACB0\uC81C -->
      <div>
        <div style="font-size:13px;font-weight:700;color:#0369a1;margin-bottom:10px;display:flex;align-items:center;gap:6px">
          <span style="background:#0369a1;color:#fff;border-radius:4px;padding:2px 8px;font-size:11px">\u2464</span> \uBC30\uC1A1\uBE44 \uCD94\uAC00\uACB0\uC81C \u2014 \uAC19\uC740 \uC8FC\uBB38\uC5D0 \uBCC4\uB3C4 \uACB0\uC81C \uAC74 \uCD94\uAC00
        </div>

        <!-- \uD575\uC2EC \uC81C\uC57D \uC124\uBA85 -->
        <div style="background:#f0f9ff;border:1px solid #7dd3fc;border-radius:6px;padding:9px 12px;margin-bottom:12px;font-size:11px;color:#0c4a6e;line-height:1.8">
          \u2705 <b>\uD1A0\uC2A4 orderId = od_pay.pay_id \uC815\uCC45 \uC801\uC6A9:</b> \uACB0\uC81C \uAC74\uB9C8\uB2E4 \uC0C8 od_pay \uD589\uC744 \uC0DD\uC131\uD558\uBA74 \uC0C8 pay_id \uAC00 \uBC1C\uAE09\uB418\uACE0,
          \uADF8\uAC83\uC774 \uACE7 \uC0C8 \uD1A0\uC2A4 orderId\uAC00 \uB429\uB2C8\uB2E4. orderId \uCDA9\uB3CC \uC5C6\uC774 \uCD94\uAC00\uACB0\uC81C\uAC00 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uBD84\uB9AC\uB429\uB2C8\uB2E4.<br>
          \uC608) \uC6D0 \uACB0\uC81C <code style="background:#fff;padding:1px 5px;border-radius:3px">pay_id = PAY-001</code> (pay_occur_type_cd = ORDER)
          \u2192 \uCD94\uAC00\uACB0\uC81C <code style="background:#fff;padding:1px 5px;border-radius:3px">pay_id = PAY-002</code> (pay_occur_type_cd = CLAIM_EXTRA)
          \u2192 \uB458 \uB2E4 <code style="background:#fff;padding:1px 5px;border-radius:3px">order_id = ORD-001</code> FK\uB85C \uAC19\uC740 \uC8FC\uBB38\uC5D0 \uC5F0\uACB0
        </div>

        <div style="display:flex;align-items:flex-start;gap:12px;font-size:12px">
        <div style="flex:1;display:flex;align-items:flex-start;gap:0;overflow-x:auto">

          <!-- FE -->
          <div style="min-width:250px;background:#dbeafe;border:1px solid #93c5fd;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#1d4ed8;margin-bottom:8px;font-size:11px">\u{1F5A5} Frontend (\uAD00\uB9AC\uC790 \uD654\uBA74)</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #0369a1">
                <div style="font-weight:600;color:#0369a1">\uCD94\uAC00\uACB0\uC81C \uAE08\uC561 \uC785\uB825</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">\uBC30\uC1A1\uBE44 \uAE08\uC561 + \uC0AC\uC720 \uC785\uB825<br>(\uAD00\uB9AC\uC790\uAC00 \uC9C1\uC811 \uC9C0\uC815)</div>
              </div>
              <div style="text-align:center;color:#0369a1;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #3b82f6">
                <div style="font-weight:600;color:#1e40af">STEP1 \xB7 \uCD94\uAC00\uACB0\uC81C pre-save</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px;font-family:monospace">pay_occur_type_cd = "CLAIM_EXTRA"<br>pay_div_cd = "CLAIM"<br>ref_order_id = "ORD-001"<br>amount = \uBC30\uC1A1\uBE44</div>
              </div>
              <div style="text-align:center;color:#3b82f6;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#faf5ff;border-radius:4px;padding:6px 8px;border-left:3px solid #7c3aed">
                <div style="font-weight:600;color:#7c3aed">STEP2 \xB7 \uACB0\uC81C\uCC3D \uD638\uCD9C</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">\uC0C8 orderId\uB85C widgets.requestPayment()<br>\uACE0\uAC1D\uC774 \uACB0\uC81C \uC644\uB8CC \u2192 GET redirect</div>
              </div>
              <div style="text-align:center;color:#0369a1;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #0f766e">
                <div style="font-weight:600;color:#0f766e">STEP3 \xB7 confirm</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px;font-family:monospace">POST /co/cm/toss/confirm<br>{ paymentKey, orderId, amount }</div>
              </div>
              <div style="text-align:center;color:#0f766e;font-size:16px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">\uCD94\uAC00\uACB0\uC81C \uC644\uB8CC \uD45C\uC2DC</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">od_pay 2\uBC88\uC9F8 \uD589 \uC0DD\uC131<br>\uC6D0 \uC8FC\uBB38\uACFC ref_order_id \uC5F0\uACB0</div>
              </div>
            </div>
          </div>

          <!-- FE \u2192 BE \uD654\uC0B4\uD45C -->
          <div style="display:flex;flex-direction:column;align-items:center;padding:0 4px;margin-top:60px;gap:2px">
            <div style="font-size:10px;font-weight:700;color:#0369a1;white-space:nowrap;background:#fff;border:1px solid #7dd3fc;border-radius:3px;padding:1px 5px">(A1)</div>
            <div style="font-size:11px;color:#0369a1;white-space:nowrap">pre-save \u2192</div>
            <div style="font-size:14px;color:#0369a1">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#0369a1;white-space:nowrap;background:#fff;border:1px solid #7dd3fc;border-radius:3px;padding:1px 5px">(A3)</div>
            <div style="font-size:11px;color:#0369a1;white-space:nowrap">confirm \u2192</div>
            <div style="font-size:14px;color:#0369a1">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#0369a1;white-space:nowrap;background:#fff;border:1px solid #7dd3fc;border-radius:3px;padding:1px 5px">(A4)</div>
            <div style="font-size:11px;color:#0369a1;white-space:nowrap">\u2190 \uACB0\uACFC</div>
            <div style="font-size:14px;color:#0369a1">\u27F5</div>
          </div>

          <!-- BE -->
          <div style="min-width:240px;background:#dcfce7;border:1px solid #86efac;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#166534;margin-bottom:8px;font-size:11px">\u2699 Backend (Spring Boot)</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#166534">ZdPayTestController (\uB610\uB294 OdPayController)</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">POST /bo/zd/pay-test/pre-save</div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:14px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#166534">od_pay \uCD94\uAC00 \uD589 \uC0DD\uC131</div>
                <div style="color:#64748b;font-size:11px;margin-top:4px;line-height:1.7">
                  <span style="color:#7c3aed;font-weight:700">pay_id</span> PAY-002 \u2190 \uC790\uB3D9 \uBC1C\uAE09 = \uD1A0\uC2A4 orderId<br>
                  <span style="color:#374151;font-weight:600">order_id</span> ORD-001 (\uC6D0 \uC8FC\uBB38 FK \uC720\uC9C0)<br>
                  <span style="color:#374151;font-weight:600">pay_occur_type_cd</span> <span style="color:#7c3aed;font-weight:700">CLAIM_EXTRA</span><br>
                  <span style="color:#374151;font-weight:600">pay_status_cd</span> PENDING<br>
                  <span style="color:#374151;font-weight:600">pay_amt</span> \uBC30\uC1A1\uBE44 \uAE08\uC561
                </div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:14px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #0f766e">
                <div style="font-weight:600;color:#166534">CmPayTossService.confirm()</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">\uD1A0\uC2A4 confirm \uD638\uCD9C<br>od_pay.payment_key \uC800\uC7A5<br>pay_status_cd = DONE</div>
              </div>
              <div style="text-align:center;color:#22c55e;font-size:14px;line-height:1">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">od_order.add_pay_amt \uAC31\uC2E0</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">\uC6D0 \uC8FC\uBB38 \uD569\uACC4\uC5D0 \uBC30\uC1A1\uBE44 \uBC18\uC601<br>(order_amt\uB294 \uBD88\uBCC0 \xB7 add_pay_amt \uBCC4\uB3C4 \uAD00\uB9AC)</div>
              </div>
            </div>
          </div>

          <!-- BE \u2192 \uD1A0\uC2A4 \uD654\uC0B4\uD45C -->
          <div style="display:flex;flex-direction:column;align-items:center;padding:0 4px;margin-top:140px;gap:2px">
            <div style="font-size:10px;font-weight:700;color:#fbbf24;white-space:nowrap;background:#fff;border:1px solid #fde047;border-radius:3px;padding:1px 5px">(A2)</div>
            <div style="font-size:11px;color:#fbbf24;white-space:nowrap">STEP2 \u2192</div>
            <div style="font-size:14px;color:#fbbf24">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#fbbf24;white-space:nowrap;background:#fff;border:1px solid #fde047;border-radius:3px;padding:1px 5px">(A2.1)</div>
            <div style="font-size:11px;color:#fbbf24;white-space:nowrap">\u2190 redirect</div>
            <div style="font-size:14px;color:#fbbf24">\u27F5</div>
            <div style="margin-top:12px;font-size:10px;font-weight:700;color:#fbbf24;white-space:nowrap;background:#fff;border:1px solid #fde047;border-radius:3px;padding:1px 5px">(A3.1)</div>
            <div style="font-size:11px;color:#fbbf24;white-space:nowrap">confirm \u2192</div>
            <div style="font-size:14px;color:#fbbf24">\u27F6</div>
            <div style="font-size:10px;font-weight:700;color:#fbbf24;white-space:nowrap;background:#fff;border:1px solid #fde047;border-radius:3px;padding:1px 5px">(A3.2)</div>
            <div style="font-size:11px;color:#fbbf24;white-space:nowrap">\u2190 \uC2B9\uC778\uACB0\uACFC</div>
            <div style="font-size:14px;color:#fbbf24">\u27F5</div>
          </div>

          <!-- \uD1A0\uC2A4 -->
          <div style="min-width:180px;background:#fef9c3;border:1px solid #fde047;border-radius:8px;padding:10px 12px">
            <div style="font-weight:700;color:#92400e;margin-bottom:8px;font-size:11px">\u2601 \uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uC11C\uBC84</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #a855f7">
                <div style="font-weight:600;color:#7c3aed">\uACB0\uC81C\uCC3D (STEP2)</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">orderId = PAY-002 (\uC0C8 pay_id)<br>\uD1A0\uC2A4\uAC00 \uACB0\uC81C \uC778\uC99D \uCC98\uB9AC</div>
              </div>
              <div style="text-align:center;color:#fbbf24;font-size:14px">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #fbbf24">
                <div style="font-weight:600;color:#92400e">\uACB0\uC81C \uC2B9\uC778 (STEP3)</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">POST /v1/payments/confirm<br>\uBCC4\uB3C4 paymentKey \uBC1C\uAE09</div>
              </div>
              <div style="text-align:center;color:#fbbf24;font-size:14px">\u2193</div>
              <div style="background:#fff;border-radius:4px;padding:6px 8px;border-left:3px solid #22c55e">
                <div style="font-weight:600;color:#15803d">Payment \uAC1D\uCCB4 \uBC18\uD658</div>
                <div style="color:#64748b;font-size:11px;margin-top:2px">status: DONE<br>\uC0C8 paymentKey \uD3EC\uD568</div>
              </div>
            </div>
          </div>

        </div>
        <!-- \u2464 API \uC0C1\uC138 \uD328\uB110 -->
        <div style="width:320px;flex-shrink:0">
          <div style="background:#f0f9ff;border:1px solid #7dd3fc;border-radius:6px;overflow:hidden">
            <div style="padding:6px 10px;background:#e0f2fe;display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none"
              @click="handleBtnAction('panel-toggle', 'apiPanel5Open')">
              <span style="font-size:11px;font-weight:700;color:#0369a1">\u{1F4E1} API \uC0C1\uC138 (\uC811\uAE30/\uD3BC\uCE58\uAE30)</span>
              <span style="margin-left:auto;font-size:12px;color:#64748b">{{ uiState.apiPanel5Open ? '\u25B2' : '\u25BC' }}</span>
            </div>
            <div v-if="uiState.apiPanel5Open" style="padding:10px;font-size:11px;display:flex;flex-direction:column;gap:10px">
              <div>
                <div style="font-weight:700;color:#0369a1;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">STEP1 \xB7 \uCD94\uAC00\uACB0\uC81C pre-save</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #7dd3fc;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">// FE \u2192 \uC6B0\uB9AC BE
POST /api/bo/zd/pay-test/pre-save
{
  "orderName":      "\uBC30\uC1A1\uBE44 \uCD94\uAC00\uACB0\uC81C",
  "amount":         3000,             // \uBC30\uC1A1\uBE44 \uAE08\uC561
  "pgProvider":     "toss_widget",
  "payOccurTypeCd": "CLAIM_EXTRA",   // \uCD94\uAC00\uACB0\uC81C \uAD6C\uBD84 (\uC2E4 DB \uCEEC\uB7FC)
  "payDivCd":       "CLAIM",
  "refOrderId":     "ORD-001",       // \uC6D0 \uC8FC\uBB38 \uC5F0\uACB0
  "status":         "PENDING",
  "paymentKey":     null
}

// BE \uCC98\uB9AC: \uC0C8 od_pay INSERT \u2192 \uC0C8 pay_id \uC790\uB3D9 \uBC1C\uAE09
//          \u2192 \uC774 pay_id \uAC00 \uD1A0\uC2A4 orderId (suffix \uBD88\uD544\uC694!)
pay_id           = "PAY-002"         // \u2190 \uC0C8\uB85C \uBC1C\uAE09\uB41C PK = \uD1A0\uC2A4 orderId
order_id         = "ORD-001"         // \uC6D0 \uC8FC\uBB38 FK
pay_occur_type_cd= "CLAIM_EXTRA"
pay_div_cd       = "CLAIM"
pay_amt          = 3000
pay_status_cd    = "PENDING"</pre>
              </div>
              <div>
                <div style="font-weight:700;color:#0369a1;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">STEP2~3 \xB7 \uACB0\uC81C\uCC3D\u2192\uC2B9\uC778 (\u2461\u2462\uACFC \uB3D9\uC77C \uD750\uB984)</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #7dd3fc;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">// STEP2: SDK (FE only)
widgets.requestPayment({
  orderId:    "PAY-002",             // \u2190 BE\uAC00 \uBC18\uD658\uD55C \uC0C8 payId
  orderName:  "\uBC30\uC1A1\uBE44 \uCD94\uAC00\uACB0\uC81C",
  amount:     3000,
  successUrl: ".../bo.html?bo_callback=toss_success",
  failUrl:    ".../bo.html?bo_callback=toss_fail",
})

// STEP3: confirm (\u2461\u2462\uACFC \uC644\uC804 \uB3D9\uC77C)
POST /api/co/cm/toss/confirm
{
  "paymentKey": "tgen_NEW...",       // \uC0C8 paymentKey (\uD1A0\uC2A4 \uBC1C\uAE09)
  "orderId":    "PAY-002",           // = \uC0C8 payId
  "amount":     3000
}

// BE \uCC98\uB9AC \uD6C4 od_pay \uAC31\uC2E0
payment_key      = "tgen_NEW..."
pay_status_cd    = "DONE"
pay_occur_type_cd= "CLAIM_EXTRA"

od_order:
  // \uD544\uC694 \uC2DC add_pay_amt += 3000 \uAC31\uC2E0</pre>
              </div>
              <div>
                <div style="font-weight:700;color:#0369a1;margin-bottom:4px;font-size:10px;letter-spacing:0.5px">DB \uACB0\uACFC \u2014 \uD55C \uC8FC\uBB38\uC5D0 od_pay 2\uD589</div>
                <pre style="margin:0;background:#f8fafc;border:1px solid #7dd3fc;border-radius:4px;padding:8px;font-size:10px;line-height:1.6;overflow-x:auto;white-space:pre">od_pay \uD14C\uC774\uBE14 (\uAC19\uC740 order_id \uC5D0 2\uD589)
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 pay_id   : PAY-001  \u2190 \uD1A0\uC2A4 orderId      \u2502
\u2502 order_id : ORD-001  \u2190 \uC8FC\uBB38 FK           \u2502
\u2502 pay_occur_type_cd: ORDER  (\uC6D0 \uACB0\uC81C)      \u2502
\u2502 pay_amt  : 10,000   pay_status_cd: DONE  \u2502
\u2502 payment_key: tgen_ORIGINAL...            \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 pay_id   : PAY-002  \u2190 \uD1A0\uC2A4 orderId      \u2502 \u2190 \uC0C8 PK
\u2502 order_id : ORD-001  \u2190 \uAC19\uC740 \uC8FC\uBB38 FK      \u2502
\u2502 pay_occur_type_cd: CLAIM_EXTRA (\uBC30\uC1A1\uBE44)  \u2502
\u2502 pay_amt  : 3,000    pay_status_cd: DONE  \u2502
\u2502 payment_key: tgen_NEW...                 \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518</pre>
              </div>
              <div style="background:#eff6ff;border-radius:4px;padding:6px 8px;color:#1e40af;font-size:10px;line-height:1.7">
                \u2705 <b>payId = \uD1A0\uC2A4 orderId \uC815\uCC45:</b> \uC0C8 od_pay \uD589\uC744 INSERT \uD558\uBA74 \uC0C8 pay_id \uAC00 \uC790\uB3D9 \uBC1C\uAE09 \u2192 suffix \uADDC\uCE59 \uBD88\uD544\uC694.<br>
                \uCD94\uAC00\uACB0\uC81C\uAC00 \uC5EC\uB7EC \uBC88\uC774\uC5B4\uB3C4 pay_id \uAC00 \uC790\uB3D9\uC73C\uB85C \uB2EC\uB77C\uC9C0\uBBC0\uB85C \uD1A0\uC2A4 orderId \uC911\uBCF5 \uC5C6\uC74C.<br>
                \u{1F4A1} <b>\uCDE8\uC18C \uC2DC:</b> \uAC01 pay_id(= orderId) \uC758 paymentKey\uB85C \uB3C5\uB9BD\uC801\uC73C\uB85C cancel \uD638\uCD9C.
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <!-- \uC804\uCCB4 \uD750\uB984 \uC694\uC57D -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px 14px">
        <div style="font-size:12px;font-weight:700;color:#374151;margin-bottom:10px">\u{1F4CB} \uC804\uCCB4 \uD750\uB984 \uC694\uC57D (\uBC88\uD638 = \uD654\uC0B4\uD45C \uD750\uB984 \uC21C\uC11C)</div>
        <div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;font-size:11px;line-height:2">
          <span style="background:#dbeafe;border:1px solid #93c5fd;border-radius:4px;padding:3px 8px;color:#1d4ed8">\u2460 \uC704\uC82F \uB80C\uB354\uB9C1</span>
          <span style="color:#94a3b8;font-family:monospace">(1)\u2192</span>
          <span style="background:#fef9c3;border:1px solid #fde047;border-radius:4px;padding:3px 8px;color:#92400e">\uD1A0\uC2A4 CDN</span>
          <span style="color:#94a3b8;font-family:monospace">\u2190(1.1)</span>
          <span style="color:#94a3b8">/ BE \uC5C6\uC74C</span>
          <br style="width:100%" />
          <span style="background:#dbeafe;border:1px solid #93c5fd;border-radius:4px;padding:3px 8px;color:#7c3aed">\u2461 \uACB0\uC81C\uD558\uAE30</span>
          <span style="color:#94a3b8;font-family:monospace">(2)\u2192</span>
          <span style="background:#dcfce7;border:1px solid #86efac;border-radius:4px;padding:3px 8px;color:#166534">BE pre-save</span>
          <span style="color:#94a3b8;font-family:monospace">\u2190(2.1)</span>
          <span style="color:#94a3b8;font-family:monospace">(3)\u2192</span>
          <span style="background:#fef9c3;border:1px solid #fde047;border-radius:4px;padding:3px 8px;color:#92400e">\uD1A0\uC2A4 \uACB0\uC81C\uCC3D</span>
          <span style="color:#94a3b8;font-family:monospace">\u2190(3.1)</span>
          <span style="color:#94a3b8">GET redirect bo.html \uBCF5\uADC0</span>
          <br style="width:100%" />
          <span style="background:#dcfce7;border:1px solid #86efac;border-radius:4px;padding:3px 8px;color:#0f766e">\u2462 \uBC30\uB108\u2192\uC2B9\uC778 \uC694\uCCAD</span>
          <span style="color:#94a3b8;font-family:monospace">(4)\u2192</span>
          <span style="background:#dcfce7;border:1px solid #86efac;border-radius:4px;padding:3px 8px;color:#166534">BE confirm</span>
          <span style="color:#94a3b8;font-family:monospace">(5)\u2192</span>
          <span style="background:#fef9c3;border:1px solid #fde047;border-radius:4px;padding:3px 8px;color:#92400e">\uD1A0\uC2A4 API</span>
          <span style="color:#94a3b8;font-family:monospace">\u2190(5.1)</span>
          <span style="color:#94a3b8;font-family:monospace">\u2190(6)</span>
          <span style="color:#94a3b8">FE \uACB0\uACFC \uD45C\uC2DC</span>
          <br style="width:100%" />
          <span style="background:#fee2e2;border:1px solid #fca5a5;border-radius:4px;padding:3px 8px;color:#dc2626">\u2463 \uACB0\uC81C \uCDE8\uC18C (\uC120\uD0DD)</span>
          <span style="color:#94a3b8;font-family:monospace">(7)\u2192</span>
          <span style="background:#dcfce7;border:1px solid #86efac;border-radius:4px;padding:3px 8px;color:#166534">BE cancel</span>
          <span style="color:#94a3b8;font-family:monospace">(8)\u2192</span>
          <span style="background:#fef9c3;border:1px solid #fde047;border-radius:4px;padding:3px 8px;color:#92400e">\uD1A0\uC2A4 API</span>
          <span style="color:#94a3b8;font-family:monospace">\u2190(8.1)</span>
          <span style="color:#94a3b8;font-family:monospace">\u2190(9)</span>
          <span style="color:#94a3b8">FE \uACB0\uACFC \uD45C\uC2DC</span>
          <br style="width:100%" />
          <span style="background:#e0f2fe;border:1px solid #7dd3fc;border-radius:4px;padding:3px 8px;color:#0369a1">\u2464 \uBC30\uC1A1\uBE44 \uCD94\uAC00\uACB0\uC81C</span>
          <span style="color:#94a3b8;font-family:monospace">(A1)\u2192</span>
          <span style="background:#dcfce7;border:1px solid #86efac;border-radius:4px;padding:3px 8px;color:#166534">BE pre-save (\uC0C8 orderId)</span>
          <span style="color:#94a3b8;font-family:monospace">(A2)\u2192</span>
          <span style="background:#fef9c3;border:1px solid #fde047;border-radius:4px;padding:3px 8px;color:#92400e">\uD1A0\uC2A4 \uACB0\uC81C\uCC3D</span>
          <span style="color:#94a3b8;font-family:monospace">\u2190(A2.1)</span>
          <span style="color:#94a3b8;font-family:monospace">(A3)\u2192</span>
          <span style="background:#dcfce7;border:1px solid #86efac;border-radius:4px;padding:3px 8px;color:#166534">BE confirm</span>
          <span style="color:#94a3b8;font-family:monospace">(A3.1)\u2192</span>
          <span style="background:#fef9c3;border:1px solid #fde047;border-radius:4px;padding:3px 8px;color:#92400e">\uD1A0\uC2A4 API</span>
          <span style="color:#94a3b8;font-family:monospace">\u2190(A3.2)\u2190(A4)</span>
          <span style="color:#94a3b8">od_pay 2\uD589\uC9F8 \uC0DD\uC131</span>
        </div>
      </div>

      <!-- Q&A -->
      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:14px 16px">
        <div style="font-size:13px;font-weight:700;color:#374151;margin-bottom:14px;display:flex;align-items:center;gap:8px">
          <span style="background:#7c3aed;color:#fff;border-radius:4px;padding:2px 8px;font-size:11px">Q&amp;A</span>
          \uC790\uC8FC \uBC1C\uC0DD\uD558\uB294 \uC0C1\uD669\uBCC4 \uC6D0\uC778 &amp; \uB300\uCC98\uBC95
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;font-size:12px">

          <!-- Q1 -->
          <div style="border:1px solid #e0e7ff;border-radius:6px;overflow:hidden">
            <div style="background:#e0e7ff;padding:7px 12px;font-weight:700;color:#3730a3;display:flex;align-items:center;gap:6px">
              <span style="color:#7c3aed">Q1</span> \uACB0\uC81C \uC644\uB8CC \uD6C4 bo.html\uB85C \uBCF5\uADC0\uAC00 \uC548 \uB429\uB2C8\uB2E4 (\uC131\uACF5 \uCF5C\uBC31 \uC218\uC2E0 \uC5C6\uC74C)
            </div>
            <div style="padding:10px 12px;background:#fafafe;display:flex;flex-direction:column;gap:6px">
              <div style="color:#374151;font-weight:600">\u25B6 \uC6D0\uC778 \uCCB4\uD06C</div>
              <div style="display:flex;flex-direction:column;gap:4px;color:#64748b;line-height:1.7">
                <span>\u2460 <code style="background:#f1f5f9;padding:1px 4px;border-radius:3px">successUrl</code> \uC774 \uD604\uC7AC \uBE0C\uB77C\uC6B0\uC800 origin \uACFC \uB2E4\uB984 \u2014 local \uC5D0\uC11C <code>:5501</code> \uC774 \uC544\uB2CC <code>:8080</code> \uC73C\uB85C \uC124\uC815\uB41C \uACBD\uC6B0 \uBC31\uC5D4\uB4DC\uAC00 bo.html \uC744 \uC11C\uBE59\uD558\uC9C0 \uC54A\uC544 404</span>
                <span>\u2461 \uD31D\uC5C5 \uCC28\uB2E8 \uB610\uB294 redirects \uCC28\uB2E8 \uBE0C\uB77C\uC6B0\uC800 \uC815\uCC45 (\uBAA8\uBC14\uC77C WebView \uB4F1)</span>
                <span>\u2462 \uACB0\uC81C\uCC3D\uC5D0\uC11C [\uCDE8\uC18C] \uD074\uB9AD \u2192 failUrl \uB85C \uBCF5\uADC0 (\uC131\uACF5 \uC544\uB2D8)</span>
                <span>\u2463 \uB124\uD2B8\uC6CC\uD06C \uC624\uB958\uB85C \uD1A0\uC2A4 \uC11C\uBC84 \uC751\uB2F5 \uBBF8\uC218\uC2E0 \u2192 \uACB0\uC81C\uCC3D \uD0C0\uC784\uC544\uC6C3</span>
              </div>
              <div style="color:#374151;font-weight:600;margin-top:4px">\u25B6 \uD655\uC778 \uBC29\uBC95</div>
              <div style="color:#64748b;line-height:1.7">
                \uBE0C\uB77C\uC6B0\uC800 \uAC1C\uBC1C\uC790\uB3C4\uAD6C \u2192 Network \uD0ED \u2192 \uACB0\uC81C\uD558\uAE30 \uD074\uB9AD \uD6C4 \uB9C8\uC9C0\uB9C9 request URL \uD655\uC778.
                <br>\uD658\uACBD\uC815\uBCF4 \uCE74\uB4DC\uC5D0\uC11C <code>successUrl</code> \uAC12\uC774 <code>http://127.0.0.1:5501/bo.html?...</code> \uC778\uC9C0 \uD655\uC778.
              </div>
              <div style="color:#374151;font-weight:600;margin-top:4px">\u25B6 \uC870\uCE58</div>
              <div style="color:#64748b;line-height:1.7">
                successUrl \uC774 \uC798\uBABB\uB418\uC5B4 \uC788\uC73C\uBA74 \u2192 Live Server \uC7AC\uC2DC\uC791 \uD6C4 \uC0C8\uB85C\uACE0\uCE68 (ENV \uC7AC\uAC10\uC9C0).
                <br>\uBCF5\uADC0\uB294 \uB410\uC9C0\uB9CC \uBC30\uB108\uAC00 \uC548 \uB728\uBA74 \u2192 URL\uC5D0 <code>callback_pay_toss_succ=1</code> \uD30C\uB77C\uBBF8\uD130 \uC788\uB294\uC9C0 \uD655\uC778.
                <br>\uCF5C\uBC31 \uC218\uC2E0 \uBD88\uAC00 \uC0C1\uD669\uC774\uBA74 \u2192 [\uC218\uB3D9 \uC2B9\uC778] \uBC84\uD2BC\uC73C\uB85C paymentKey \uC9C1\uC811 \uC785\uB825\uD574 confirm \uC9C4\uD589.
              </div>
            </div>
          </div>

          <!-- Q2 -->
          <div style="border:1px solid #d1fae5;border-radius:6px;overflow:hidden">
            <div style="background:#d1fae5;padding:7px 12px;font-weight:700;color:#065f46;display:flex;align-items:center;gap:6px">
              <span style="color:#059669">Q2</span> \uC131\uACF5 \uBCF5\uADC0\uD588\uB294\uB370 \uBC30\uB108([\uC2B9\uC778 \uC694\uCCAD])\uAC00 \uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4
            </div>
            <div style="padding:10px 12px;background:#fafffe;display:flex;flex-direction:column;gap:6px">
              <div style="color:#374151;font-weight:600">\u25B6 \uC6D0\uC778</div>
              <div style="color:#64748b;line-height:1.7">
                <span>\u2460 \uD398\uC774\uC9C0 \uC0C8\uB85C\uACE0\uCE68\uC73C\uB85C <code>result.callbackParams</code> \uCD08\uAE30\uD654 (reactive \uCD08\uAE30\uD654)</span><br>
                <span>\u2461 URL \uD30C\uB77C\uBBF8\uD130 \uC911 <code>paymentKey</code> / <code>orderId</code> / <code>amount</code> \uC911 \uD558\uB098\uB77C\uB3C4 \uB204\uB77D</span><br>
                <span>\u2462 fnCheckCallbackParams \uC2E4\uD589 \uC804 DOM \uC900\uBE44 \uC548 \uB428 (onMounted \uC774\uC804)</span>
              </div>
              <div style="color:#374151;font-weight:600;margin-top:4px">\u25B6 \uC870\uCE58</div>
              <div style="color:#64748b;line-height:1.7">
                \uBE0C\uB77C\uC6B0\uC800 \uC8FC\uC18C\uCC3D\uC5D0\uC11C URL \uD30C\uB77C\uBBF8\uD130 3\uAC1C \uBAA8\uB450 \uC788\uB294\uC9C0 \uD655\uC778.
                <br>\uD30C\uB77C\uBBF8\uD130\uAC00 \uC788\uB294\uB370\uB3C4 \uC548 \uB728\uBA74 \u2192 [\uC218\uB3D9 \uC2B9\uC778] \uBC84\uD2BC \u2192 paymentKey \uC9C1\uC811 \uC785\uB825.
                <br>\uD30C\uB77C\uBBF8\uD130 \uC5C6\uC73C\uBA74 \u2192 \uD1A0\uC2A4 \uB300\uC2DC\uBCF4\uB4DC\uC5D0\uC11C paymentKey \uC870\uD68C \uD6C4 \uC218\uB3D9 \uC2B9\uC778.
              </div>
            </div>
          </div>

          <!-- Q3 -->
          <div style="border:1px solid #fef3c7;border-radius:6px;overflow:hidden">
            <div style="background:#fef3c7;padding:7px 12px;font-weight:700;color:#92400e;display:flex;align-items:center;gap:6px">
              <span style="color:#d97706">Q3</span> PENDING \uC0C1\uD0DC \uC8FC\uBB38\uC744 \uC7AC\uACB0\uC81C\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4 (\uC774\uC804 \uC2DC\uB3C4 \uC2E4\uD328 \uD6C4 \uC7AC\uC9C4\uD589)
            </div>
            <div style="padding:10px 12px;background:#fffdf0;display:flex;flex-direction:column;gap:6px">
              <div style="color:#374151;font-weight:600">\u25B6 \uC0C1\uD669</div>
              <div style="color:#64748b;line-height:1.7">
                \uACB0\uC81C\uD558\uAE30 \uD074\uB9AD \u2192 STEP1 pre-save \uC644\uB8CC(PENDING) \u2192 \uACB0\uC81C\uCC3D\uC5D0\uC11C \uCDE8\uC18C \uB610\uB294 \uBE0C\uB77C\uC6B0\uC800 \uB2EB\uC74C
                <br>\u2192 od_order/od_pay \uB294 PENDING \uC73C\uB85C DB\uC5D0 \uB0A8\uC544\uC788\uC74C
              </div>
              <div style="color:#374151;font-weight:600;margin-top:4px">\u25B6 \uC7AC\uACB0\uC81C \uC9C4\uD589 \uBC29\uBC95</div>
              <div style="color:#64748b;line-height:1.7">
                <span style="color:#d97706;font-weight:600">\uBC29\uBC95 A (\uC0C8 orderId)</span>: [orderId \uC0C8\uB85C\uACE0\uCE68] \uBC84\uD2BC \u2192 \uC0C8 orderId \uC0DD\uC131 \u2192 [\uACB0\uC81C\uD558\uAE30] \uD074\uB9AD
                <br>\u2192 STEP1 \uC5D0\uC11C \uC0C8 od_order(\uC0C8 orderId) \uC0DD\uC131 \u2192 \uC815\uC0C1 \uC9C4\uD589
                <br><span style="color:#94a3b8;font-size:11px">\uC774\uC804 PENDING \uC8FC\uBB38\uC740 \uBC30\uCE58\uB85C \uC790\uB3D9 \uB9CC\uB8CC \uCC98\uB9AC \uC608\uC815</span>
              </div>
              <div style="color:#64748b;line-height:1.7;margin-top:4px">
                <span style="color:#d97706;font-weight:600">\uBC29\uBC95 B (\uB3D9\uC77C orderId \uC7AC\uC2DC\uB3C4)</span>: \uB3D9\uC77C orderId \uB85C [\uACB0\uC81C\uD558\uAE30] \uC7AC\uD074\uB9AD
                <br>\u2192 STEP1 pre-save API \uC5D0\uC11C \uAE30\uC874 PENDING \uC8FC\uBB38 UPDATE (\u5E42\u7B49 \uCC98\uB9AC \uD544\uC694 \u2014 \uBC31\uC5D4\uB4DC \uAD6C\uD604 \uC2DC orderId \uC874\uC7AC\uD558\uBA74 UPDATE)
                <br>\u2192 \uC774\uD6C4 \uACB0\uC81C\uCC3D \u2192 paymentKey \uC2E0\uADDC \uBC1C\uAE09 \u2192 confirm \uC815\uC0C1 \uC9C4\uD589
                <br><span style="color:#dc2626;font-size:11px">\u26A0 \uD604\uC7AC \uD14C\uC2A4\uD2B8 pre-save API \uBBF8\uAD6C\uD604 \uC2DC \uC2DC\uBBAC \uBAA8\uB4DC\uB85C \uACC4\uC18D \uC9C4\uD589\uB428</span>
              </div>
            </div>
          </div>

          <!-- Q4 -->
          <div style="border:1px solid #fef3c7;border-radius:6px;overflow:hidden">
            <div style="background:#fef3c7;padding:7px 12px;font-weight:700;color:#92400e;display:flex;align-items:center;gap:6px">
              <span style="color:#d97706">Q4</span> [\uACB0\uC81C\uD558\uAE30]\uB97C \uB2E4\uC2DC \uD074\uB9AD\uD558\uBA74 orderId \uAC00 \uC911\uBCF5\uB429\uB2C8\uB2E4. \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?
            </div>
            <div style="padding:10px 12px;background:#fffdf0;display:flex;flex-direction:column;gap:6px">
              <div style="color:#64748b;line-height:1.7">
                \uD1A0\uC2A4\uB294 \uB3D9\uC77C <code>orderId</code> \uB85C <b>\uACB0\uC81C\uCC3D\uC744 2\uBC88 \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</b> \uB2E8 <b>confirm \uC740 1\uD68C\uB9CC</b> \uD5C8\uC6A9.
                <br>\u2192 \uB3D9\uC77C orderId \uB85C \uACB0\uC81C\uCC3D \uC7AC\uC9C4\uC785 \u2192 \uD1A0\uC2A4\uAC00 \uC0C8 <code>paymentKey</code> \uBC1C\uAE09 \u2192 \uB450 \uBC88\uC9F8 confirm \uC2DC \uCCAB paymentKey \uB294 \uB9CC\uB8CC
              </div>
              <div style="color:#374151;font-weight:600;margin-top:4px">\u25B6 \uAD8C\uC7A5 \uCC98\uB9AC</div>
              <div style="color:#64748b;line-height:1.7">
                \uC7AC\uACB0\uC81C \uD074\uB9AD \uC2DC \uD56D\uC0C1 <b>[orderId \uC0C8\uB85C\uACE0\uCE68]</b> \uBC84\uD2BC\uC73C\uB85C \uC0C8 orderId \uC0DD\uC131 \uD6C4 \uC9C4\uD589.
                <br>\uC6B4\uC601 \uC2DC\uC2A4\uD15C\uC5D0\uC11C\uB294 \uACB0\uC81C\uD558\uAE30 \uD074\uB9AD \uC2DC \uC11C\uBC84\uC5D0\uC11C \uC2E0\uADDC orderId \uC790\uB3D9 \uC0DD\uC131 \uAD8C\uC7A5.
              </div>
            </div>
          </div>

          <!-- Q5 -->
          <div style="border:1px solid #fee2e2;border-radius:6px;overflow:hidden">
            <div style="background:#fee2e2;padding:7px 12px;font-weight:700;color:#991b1b;display:flex;align-items:center;gap:6px">
              <span style="color:#dc2626">Q5</span> confirm(\uC2B9\uC778) \uD6C4 \uC2E4\uC81C DB(od_order/od_pay) \uC5D0 \uBC18\uC601\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4
            </div>
            <div style="padding:10px 12px;background:#fff8f8;display:flex;flex-direction:column;gap:6px">
              <div style="color:#374151;font-weight:600">\u25B6 \uC6D0\uC778</div>
              <div style="color:#64748b;line-height:1.7">
                \uD604\uC7AC <code>/co/cm/toss/confirm</code> \uB294 \uD1A0\uC2A4 \uC11C\uBC84 confirm \uB9CC \uC218\uD589 (\uACB0\uC81C \uC2B9\uC778 API \uD638\uCD9C + \uC751\uB2F5 \uBC18\uD658).
                <br>\u2192 <code>od_pay.payment_key</code> \uC5C5\uB370\uC774\uD2B8 / <code>od_order.status = PAID</code> \uC804\uD658\uC740 <b>\uBCC4\uB3C4 \uB3C4\uBA54\uC778 \uD6C4\uCC98\uB9AC</b> \uD544\uC694
              </div>
              <div style="color:#374151;font-weight:600;margin-top:4px">\u25B6 \uC6B4\uC601 \uAD6C\uD604 \uC2DC \uCD94\uAC00 \uD544\uC694</div>
              <div style="color:#64748b;line-height:1.7">
                confirm \uC131\uACF5 \uC751\uB2F5 \u2192 <code>OdOrderService.completePayment(orderId, paymentKey)</code> \uD638\uCD9C
                <br>\u2192 od_pay.payment_key = paymentKey, pay_status_cd = DONE
                <br>\u2192 od_order.order_status_cd = PAID
                <br>\u2192 \uC7AC\uACE0 \uCC28\uAC10, \uD3EC\uC778\uD2B8 \uC801\uB9BD \uB4F1 \uD6C4\uCC98\uB9AC \uD2B8\uB79C\uC7AD\uC158 \uBB36\uC74C
              </div>
            </div>
          </div>

          <!-- Q6 -->
          <div style="border:1px solid #fee2e2;border-radius:6px;overflow:hidden">
            <div style="background:#fee2e2;padding:7px 12px;font-weight:700;color:#991b1b;display:flex;align-items:center;gap:6px">
              <span style="color:#dc2626">Q6</span> confirm \uD6C4 \uAE08\uC561 \uC704\uBCC0\uC870 \uC758\uC2EC \u2014 amount \uAC00 \uB2E4\uB985\uB2C8\uB2E4
            </div>
            <div style="padding:10px 12px;background:#fff8f8;display:flex;flex-direction:column;gap:6px">
              <div style="color:#64748b;line-height:1.7">
                \uD1A0\uC2A4 confirm API \uB294 \uB0B4\uBD80\uC801\uC73C\uB85C <b>\uC11C\uBC84\uCE21 amount \uC640 \uCF5C\uBC31 amount \uB97C \uBE44\uAD50</b>\uD569\uB2C8\uB2E4.
                <br>\uBD88\uC77C\uCE58 \uC2DC \uD1A0\uC2A4\uAC00 \uC2B9\uC778 \uAC70\uBD80 \u2192 confirm \uC751\uB2F5\uC774 4xx \uC5D0\uB7EC.
              </div>
              <div style="color:#374151;font-weight:600;margin-top:4px">\u25B6 \uC6B4\uC601 \uC2DC \uCD94\uAC00 \uAC80\uC99D</div>
              <div style="color:#64748b;line-height:1.7">
                confirm \uC694\uCCAD \uC804: <code>od_pay.pay_amt</code>(STEP1 \uC800\uC7A5\uAC12) vs \uCF5C\uBC31 <code>amount</code> \uBE44\uAD50
                <br>\u2192 \uBD88\uC77C\uCE58 \uC2DC confirm \uD638\uCD9C \uCC28\uB2E8 + \uACBD\uBCF4 \uBC1C\uC1A1
                <br>\uD604\uC7AC \uD14C\uC2A4\uD2B8 \uD654\uBA74\uC740 callbackParams.amount \uB97C \uADF8\uB300\uB85C confirm \uC5D0 \uC804\uB2EC (\uAC1C\uBC1C\uC6A9)
              </div>
            </div>
          </div>

          <!-- Q7 -->
          <div style="border:1px solid #e0e7ff;border-radius:6px;overflow:hidden">
            <div style="background:#e0e7ff;padding:7px 12px;font-weight:700;color:#3730a3;display:flex;align-items:center;gap:6px">
              <span style="color:#7c3aed">Q7</span> \uACB0\uC81C \uD6C4 \uB4A4\uB85C\uAC00\uAE30\uB97C \uB20C\uB800\uB354\uB2C8 \uB610 bo.html \uC774 \uB098\uC635\uB2C8\uB2E4. \uC774\uC0C1\uD55C\uAC00\uC694?
            </div>
            <div style="padding:10px 12px;background:#fafafe;display:flex;flex-direction:column;gap:6px">
              <div style="color:#64748b;line-height:1.7">
                \uC815\uC0C1 \uB3D9\uC791\uC785\uB2C8\uB2E4. <b>\uB4A4\uB85C\uAC00\uAE30 \uC644\uCDA9 \uB85C\uC9C1</b> \uC758\uB3C4\uC801 \uC124\uACC4\uC785\uB2C8\uB2E4.
                <br><code>history.replaceState</code> (\uD30C\uB77C\uBBF8\uD130 \uC81C\uAC70) + <code>history.pushState</code> (\uB3D9\uC77C URL \uCD94\uAC00) \u2192 \uD788\uC2A4\uD1A0\uB9AC \uC2A4\uD0DD\uC5D0 bo.html 2\uAC1C
                <br>\uB4A4\uB85C\uAC00\uAE30 1\uD68C \u2192 \uC774\uC804 bo.html (\uACB0\uC81C \uC804 \uC0C1\uD0DC)
                <br>\uB4A4\uB85C\uAC00\uAE30 2\uD68C \u2192 \uD1A0\uC2A4 \uACB0\uC81C\uCC3D (\uC774\uBBF8 \uCC98\uB9AC\uB41C \uC0C1\uD0DC\uC774\uBBC0\uB85C \uC2E4\uC81C\uB860 \uD1A0\uC2A4\uAC00 \uC644\uB8CC \uD398\uC774\uC9C0 \uD45C\uC2DC)
              </div>
            </div>
          </div>

          <!-- Q8 -->
          <div style="border:1px solid #d1fae5;border-radius:6px;overflow:hidden">
            <div style="background:#d1fae5;padding:7px 12px;font-weight:700;color:#065f46;display:flex;align-items:center;gap:6px">
              <span style="color:#059669">Q8</span> \uACB0\uC81C \uCDE8\uC18C \uD6C4 \uD658\uBD88 \uCC98\uB9AC\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uC774 \uD654\uBA74\uC5D0\uC11C \uAC00\uB2A5\uD55C\uAC00\uC694?
            </div>
            <div style="padding:10px 12px;background:#fafffe;display:flex;flex-direction:column;gap:6px">
              <div style="color:#64748b;line-height:1.7">
                \uC774 \uD654\uBA74\uC758 [\uACB0\uC81C \uCDE8\uC18C]\uB294 \uD1A0\uC2A4 API <code>/v1/payments/{paymentKey}/cancel</code> \uD638\uCD9C\uB9CC \uC218\uD589\uD569\uB2C8\uB2E4.
                <br>\u2192 \uD1A0\uC2A4 \uC11C\uBC84\uC5D0\uC11C \uACB0\uC81C \uCDE8\uC18C(CANCELED) \uC804\uD658\uC740 \uB418\uC9C0\uB9CC
                <br>\u2192 <code>od_refund</code> / <code>od_refund_method</code> \uD14C\uC774\uBE14 \uBC18\uC601, \uC7AC\uACE0 \uBCF5\uAD6C, \uC801\uB9BD\uAE08 \uD68C\uC218 \uB4F1 \uB3C4\uBA54\uC778 \uD6C4\uCC98\uB9AC\uB294 <b>\uBBF8\uC5F0\uB3D9</b>
              </div>
              <div style="color:#374151;font-weight:600;margin-top:4px">\u25B6 \uC6B4\uC601 \uD658\uBD88 \uD750\uB984</div>
              <div style="color:#64748b;line-height:1.7">
                BO \uC8FC\uBB38\uAD00\uB9AC \u2192 \uD074\uB808\uC784(\uBC18\uD488/\uCDE8\uC18C) \uB4F1\uB85D \u2192 OdClaimService \u2192 \uD1A0\uC2A4 cancel API \uD638\uCD9C \u2192 OdRefund \uC800\uC7A5 \u2192 \uD658\uBD88 \uC644\uB8CC \uCC98\uB9AC
              </div>
            </div>
          </div>

          <!-- Q9 -->
          <div style="border:1px solid #fef3c7;border-radius:6px;overflow:hidden">
            <div style="background:#fef3c7;padding:7px 12px;font-weight:700;color:#92400e;display:flex;align-items:center;gap:6px">
              <span style="color:#d97706">Q9</span> pre-save API(STEP1) \uAC00 404 / \uBBF8\uAD6C\uD604\uC778\uB370 \uACB0\uC81C\uAC00 \uC9C4\uD589\uB429\uB2C8\uB2E4. \uC6B4\uC601\uC5D0\uC120 \uAD1C\uCC2E\uB098\uC694?
            </div>
            <div style="padding:10px 12px;background:#fffdf0;display:flex;flex-direction:column;gap:6px">
              <div style="color:#64748b;line-height:1.7">
                \uC774 \uD14C\uC2A4\uD2B8 \uD654\uBA74\uC740 pre-save 404/405 \uC2DC <b>\uC2DC\uBBAC\uB808\uC774\uC158 \uBAA8\uB4DC</b>\uB85C \uACC4\uC18D \uC9C4\uD589\uD569\uB2C8\uB2E4. (\uAC1C\uBC1C \uD3B8\uC758)
                <br>\u2192 PENDING \uC8FC\uBB38\uC774 \uC2E4\uC81C DB\uC5D0 \uC5C6\uB294 \uC0C1\uD0DC\uB85C \uACB0\uC81C\uCC3D \uC9C4\uC785 \u2192 confirm \uC131\uACF5\uD574\uB3C4 \uB9E4\uCE6D \uC8FC\uBB38 \uC5C6\uC74C
              </div>
              <div style="color:#dc2626;font-weight:600;margin-top:4px">\u25B6 \uC6B4\uC601 \uD544\uC218 \uAD6C\uD604</div>
              <div style="color:#64748b;line-height:1.7">
                \uC6B4\uC601 \uC2DC\uC2A4\uD15C\uC5D0\uC11C\uB294 pre-save API \uC2E4\uD328 \uC2DC <b>\uACB0\uC81C\uCC3D \uC9C4\uC785 \uCC28\uB2E8</b> \uD544\uC694.
                <br><code>ZdPayTestController.preSave()</code> \u2192 <code>OdOrderService.createPendingOrder()</code> \uC5F0\uB3D9 \uAD6C\uD604 \uD6C4 \uD14C\uC2A4\uD2B8 \uBAA8\uB4DC \uC81C\uAC70.
              </div>
            </div>
          </div>

          <!-- Q10 -->
          <div style="border:1px solid #f3e8ff;border-radius:6px;overflow:hidden">
            <div style="background:#f3e8ff;padding:7px 12px;font-weight:700;color:#581c87;display:flex;align-items:center;gap:6px">
              <span style="color:#7c3aed">Q10</span> \uD14C\uC2A4\uD2B8 \uD0A4(test_gck_)\uB85C\uB294 \uC2E4\uC81C \uCE74\uB4DC\uAC00 \uACB0\uC81C\uB418\uB098\uC694?
            </div>
            <div style="padding:10px 12px;background:#fdfaff;display:flex;flex-direction:column;gap:6px">
              <div style="color:#64748b;line-height:1.7">
                <b>\uC544\uB2D9\uB2C8\uB2E4.</b> \uD14C\uC2A4\uD2B8 \uD0A4(<code>test_gck_</code> / <code>test_sk_</code>)\uB294 \uD1A0\uC2A4 \uD14C\uC2A4\uD2B8 \uD658\uACBD \uC804\uC6A9\uC785\uB2C8\uB2E4.
                <br>\u2192 \uC2E4\uC81C \uCE74\uB4DC \uCCAD\uAD6C \uC5C6\uC74C / \uC2E4\uC81C \uD658\uBD88 \uC5C6\uC74C / \uD1A0\uC2A4 \uD14C\uC2A4\uD2B8 \uB300\uC2DC\uBCF4\uB4DC\uC5D0\uC11C\uB9CC \uC870\uD68C \uAC00\uB2A5
                <br>\u2192 confirm \uACB0\uACFC\uC758 <code>status: DONE</code> \uB3C4 \uD14C\uC2A4\uD2B8 \uAC00\uC0C1 \uC2B9\uC778
              </div>
              <div style="color:#374151;font-weight:600;margin-top:4px">\u25B6 \uC6B4\uC601 \uC804\uD658 \uC2DC</div>
              <div style="color:#64748b;line-height:1.7">
                sy_prop <code>app.toss.client-key</code> / <code>app.toss.secret-key</code> \uB97C <code>live_gck_</code> / <code>live_sk_</code> \uB85C \uAD50\uCCB4.
                <br>\uC774 \uD654\uBA74\uC758 clientKey \uC785\uB825\uB780\uB3C4 live \uD0A4\uB85C \uBCC0\uACBD\uD558\uAC70\uB098 sy_prop \uC5D0\uC11C \uC790\uB3D9 \uB85C\uB4DC.
              </div>
            </div>
          </div>

          <!-- Q11 -->
          <div style="border:1px solid #fee2e2;border-radius:6px;overflow:hidden">
            <div style="background:#fee2e2;padding:7px 12px;font-weight:700;color:#991b1b;display:flex;align-items:center;gap:6px">
              <span style="color:#dc2626">Q11</span> \uBD80\uBD84\uCDE8\uC18C\uB294 \uC5B4\uB5BB\uAC8C \uD558\uB098\uC694? \uC804\uC561\uCDE8\uC18C\uC640 \uBB34\uC5C7\uC774 \uB2E4\uB978\uAC00\uC694?
            </div>

            <div style="padding:10px 12px;background:#fff8f8;display:flex;flex-direction:column;gap:8px">
              <div>
                <div style="color:#374151;font-weight:600;margin-bottom:4px">\u25B6 \uC804\uC561\uCDE8\uC18C vs \uBD80\uBD84\uCDE8\uC18C \uCC28\uC774</div>
                <table style="width:100%;font-size:11px;border-collapse:collapse">
                  <thead>
                    <tr style="background:#f8fafc">
                      <th style="padding:5px 8px;border:1px solid #e2e8f0;text-align:left;color:#374151">\uAD6C\uBD84</th>
                      <th style="padding:5px 8px;border:1px solid #e2e8f0;text-align:left;color:#374151">\uC804\uC561\uCDE8\uC18C</th>
                      <th style="padding:5px 8px;border:1px solid #e2e8f0;text-align:left;color:#374151">\uBD80\uBD84\uCDE8\uC18C</th>
                    </tr>
                  </thead>
                  <tbody style="color:#64748b">
                    <tr>
                      <td style="padding:5px 8px;border:1px solid #e2e8f0">cancelAmount</td>
                      <td style="padding:5px 8px;border:1px solid #e2e8f0"><code>null</code> (\uC0DD\uB7B5)</td>
                      <td style="padding:5px 8px;border:1px solid #e2e8f0"><code>500</code> (\uCDE8\uC18C\uD560 \uAE08\uC561 \uBA85\uC2DC)</td>
                    </tr>
                    <tr style="background:#fafafa">
                      <td style="padding:5px 8px;border:1px solid #e2e8f0">\uACB0\uC81C \uD6C4 \uC0C1\uD0DC</td>
                      <td style="padding:5px 8px;border:1px solid #e2e8f0">CANCELED (\uC804\uCCB4 \uCDE8\uC18C)</td>
                      <td style="padding:5px 8px;border:1px solid #e2e8f0">DONE (\uC794\uC5EC \uAE08\uC561 \uC720\uC9C0)</td>
                    </tr>
                    <tr>
                      <td style="padding:5px 8px;border:1px solid #e2e8f0">\uC7AC\uCDE8\uC18C \uAC00\uB2A5</td>
                      <td style="padding:5px 8px;border:1px solid #e2e8f0">\uBD88\uAC00 (\uC774\uBBF8 CANCELED)</td>
                      <td style="padding:5px 8px;border:1px solid #e2e8f0">\uC794\uC5EC \uAE08\uC561 \uBC94\uC704 \uB0B4 \uCD94\uAC00 \uCDE8\uC18C \uAC00\uB2A5</td>
                    </tr>
                    <tr style="background:#fafafa">
                      <td style="padding:5px 8px;border:1px solid #e2e8f0">\uD1A0\uC2A4 \uC751\uB2F5</td>
                      <td style="padding:5px 8px;border:1px solid #e2e8f0">cancels[0].cancelAmount = \uC804\uC561</td>
                      <td style="padding:5px 8px;border:1px solid #e2e8f0">cancels[] \uBC30\uC5F4\uC5D0 \uCDE8\uC18C \uAC74\uBCC4 \uB204\uC801</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div style="color:#374151;font-weight:600;margin-bottom:4px">\u25B6 \uC774 \uD654\uBA74\uC5D0\uC11C \uBD80\uBD84\uCDE8\uC18C \uD558\uB294 \uBC95</div>
                <div style="color:#64748b;line-height:1.8">
                  \uD604\uC7AC [\uACB0\uC81C \uCDE8\uC18C] \uBC84\uD2BC\uC740 <code>cancelAmount</code> \uB97C <b>null(\uC804\uC561\uCDE8\uC18C)</b>\uB85C \uACE0\uC815 \uC804\uC1A1\uD569\uB2C8\uB2E4.
                  <br>\uBD80\uBD84\uCDE8\uC18C\uB97C \uD14C\uC2A4\uD2B8\uD558\uB824\uBA74 \uC544\uB798 \uBC29\uBC95 \uC911 \uD558\uB098\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.
                </div>
                <div style="display:flex;flex-direction:column;gap:6px;margin-top:6px">
                  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:5px;padding:8px 10px;font-size:11px">
                    <div style="font-weight:600;color:#374151;margin-bottom:3px">\uBC29\uBC95 A \u2014 \uCF58\uC194 \uC9C1\uC811 \uD638\uCD9C (\uC989\uC2DC \uD14C\uC2A4\uD2B8)</div>
                    <div style="color:#64748b">\uBE0C\uB77C\uC6B0\uC800 \uAC1C\uBC1C\uC790\uB3C4\uAD6C \uCF58\uC194\uC5D0\uC11C:</div>
                    <pre style="margin:4px 0 0;font-size:10px;background:#1e293b;color:#e2e8f0;padding:8px;border-radius:4px;overflow-x:auto">boApi.post('/api/co/cm/toss/cancel',
  { paymentKey: 'tgen_...', cancelReason: '\uBD80\uBD84\uCDE8\uC18C \uD14C\uC2A4\uD2B8', cancelAmount: 500 },
  coUtil.cofApiHdr('\uBD80\uBD84\uCDE8\uC18C', '\uD14C\uC2A4\uD2B8')
).then(r => console.log(r.data))</pre>
                  </div>
                  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:5px;padding:8px 10px;font-size:11px">
                    <div style="font-weight:600;color:#374151;margin-bottom:3px">\uBC29\uBC95 B \u2014 \uACB0\uC81C \uCDE8\uC18C \uCE74\uB4DC \uB0B4 cancelAmount \uC785\uB825\uB780 \uCD94\uAC00 (\uBBF8\uAD6C\uD604)</div>
                    <div style="color:#64748b;line-height:1.7">
                      \uC544\uB798 \uACB0\uC81C \uCDE8\uC18C \uCE74\uB4DC\uC5D0 <code>cancelAmount</code> \uC785\uB825 \uD544\uB4DC\uB97C \uCD94\uAC00\uD558\uBA74 \uBD80\uBD84\uCDE8\uC18C \uC9C1\uC811 \uD14C\uC2A4\uD2B8 \uAC00\uB2A5.
                      <br>\uBE44\uC6CC\uB450\uBA74 \uC804\uC561, \uC22B\uC790 \uC785\uB825 \uC2DC \uD574\uB2F9 \uAE08\uC561\uB9CC \uCDE8\uC18C.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div style="color:#374151;font-weight:600;margin-bottom:4px">\u25B6 \uBD80\uBD84\uCDE8\uC18C \uC751\uB2F5 \uAD6C\uC870</div>
                <pre style="margin:0;font-size:10px;background:#1e293b;color:#e2e8f0;padding:8px;border-radius:4px;overflow-x:auto">{
  "status": "DONE",          // \uC794\uC5EC \uAE08\uC561 \uC788\uC73C\uBA74 DONE \uC720\uC9C0
  "totalAmount": 1000,
  "balanceAmount": 500,      // \uC794\uC5EC(\uD658\uBD88 \uAC00\uB2A5) \uAE08\uC561
  "cancels": [
    {
      "cancelAmount": 500,
      "cancelReason": "\uBD80\uBD84\uCDE8\uC18C \uD14C\uC2A4\uD2B8",
      "canceledAt": "2026-06-28T12:00:00+09:00",
      "transactionKey": "..."
    }
  ]
}</pre>
                <div style="color:#64748b;font-size:11px;margin-top:6px;line-height:1.7">
                  <b>balanceAmount</b>: \uB0A8\uC740 \uCDE8\uC18C \uAC00\uB2A5 \uAE08\uC561 (500\uC6D0 \u2192 \uCD94\uAC00\uB85C \uCD5C\uB300 500\uC6D0 \uB354 \uCDE8\uC18C \uAC00\uB2A5)
                  <br><b>cancels[]</b>: \uCDE8\uC18C \uC774\uB825 \uB204\uC801 \uBC30\uC5F4 (2\uD68C \uBD80\uBD84\uCDE8\uC18C \uC2DC 2\uAC74)
                </div>
              </div>

              <div>
                <div style="color:#374151;font-weight:600;margin-bottom:4px">\u25B6 \uC6B4\uC601 \uBD80\uBD84\uCDE8\uC18C \uC2DC \uC8FC\uC758\uC0AC\uD56D</div>
                <div style="color:#64748b;line-height:1.8">
                  \u2460 <b>\uCDE8\uC18C \uAE08\uC561 \u2264 balanceAmount</b> \uAC80\uC99D \uD544\uC218 \u2014 \uCD08\uACFC \uC2DC \uD1A0\uC2A4 400 \uC5D0\uB7EC
                  <br>\u2461 \uBD80\uBD84\uCDE8\uC18C \uB9C8\uB2E4 <code>od_refund</code> \uB808\uCF54\uB4DC 1\uAC74 INSERT + <code>od_refund_method.refund_amt</code> \uC5C5\uB370\uC774\uD2B8
                  <br>\u2462 \uCFE0\uD3F0/\uC801\uB9BD\uAE08 \uBCD1\uC6A9 \uACB0\uC81C \uC2DC \uCDE8\uC18C \uC6B0\uC120\uC21C\uC704: <span style="color:#d97706;font-weight:600">\uD604\uAE08\uC131(\uCE74\uB4DC) \uBA3C\uC800 \u2192 \uCFE0\uD3F0/\uD3EC\uC778\uD2B8 \uB098\uC911</span> (\uD1A0\uC2A4 \uC815\uCC45)
                  <br>\u2463 <code>cancelAmount</code> \uB204\uB77D(null) \uC2DC \uD1A0\uC2A4\uAC00 \uC790\uB3D9\uC73C\uB85C <b>\uC804\uC561\uCDE8\uC18C</b> \uCC98\uB9AC \u2014 \uC758\uB3C4\uCE58 \uC54A\uC740 \uC804\uC561\uCDE8\uC18C \uC8FC\uC758
                  <br>\u2464 \uBC30\uC1A1 \uC2DC\uC791 \uD6C4 \uBD80\uBD84\uCDE8\uC18C: \uC77C\uBD80 PG \uB294 \uCDE8\uC18C \uBD88\uAC00 \u2192 \uD1A0\uC2A4 \uC751\uB2F5 <code>400 ALREADY_PROCESSED_PAYMENT</code>
                </div>
              </div>

              <div>
                <div style="color:#374151;font-weight:600;margin-bottom:4px">\u25B6 \uBD80\uBD84\uCDE8\uC18C \uAC00\uB2A5 \uC0C1\uD0DC\uD45C</div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;font-size:11px">
                  <span style="background:#dcfce7;border:1px solid #86efac;border-radius:4px;padding:3px 8px;color:#166534">DONE \u2192 \uBD80\uBD84\uCDE8\uC18C \u2705</span>
                  <span style="background:#dcfce7;border:1px solid #86efac;border-radius:4px;padding:3px 8px;color:#166534">DONE \u2192 \uCD94\uAC00 \uBD80\uBD84\uCDE8\uC18C \u2705 (balanceAmount \uBC94\uC704 \uB0B4)</span>
                  <span style="background:#fee2e2;border:1px solid #fca5a5;border-radius:4px;padding:3px 8px;color:#b91c1c">CANCELED \u2192 \uCD94\uAC00\uCDE8\uC18C \u274C</span>
                  <span style="background:#fee2e2;border:1px solid #fca5a5;border-radius:4px;padding:3px 8px;color:#b91c1c">PENDING \u2192 \uCDE8\uC18C \u274C (confirm \uC804)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Q12 -->
          <div style="border:1px solid #fee2e2;border-radius:6px;overflow:hidden">
            <div style="background:#fee2e2;padding:7px 12px;font-weight:700;color:#991b1b;display:flex;align-items:center;gap:6px">
              <span style="color:#dc2626">Q12</span> \uBD80\uBD84\uCDE8\uC18C 2\uD68C\uB85C \uC644\uC804\uCDE8\uC18C \u2014 \uC2DC\uBBAC\uB808\uC774\uC158
            </div>
            <div style="padding:10px 12px;background:#fff8f8;display:flex;flex-direction:column;gap:8px">
              <div style="color:#374151;font-weight:600;margin-bottom:2px">\u25B6 \uC2DC\uB098\uB9AC\uC624: 30,000\uC6D0 \uACB0\uC81C \u2192 10,000\uC6D0 \uBD80\uBD84\uCDE8\uC18C \u2192 \uB098\uBA38\uC9C0 20,000\uC6D0 \uCDE8\uC18C</div>
              <div style="display:flex;flex-direction:column;gap:6px">

                <!-- \uC6D0 \uACB0\uC81C -->
                <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:5px;padding:8px 10px;font-size:11px">
                  <div style="font-weight:600;color:#166534;margin-bottom:4px">\uC6D0 \uACB0\uC81C (DONE)</div>
                  <div style="display:grid;grid-template-columns:130px 1fr;gap:2px 8px;color:#374151;font-family:monospace">
                    <span style="color:#6b7280">od_order.order_id</span><span>ORD-2026-001</span>
                    <span style="color:#6b7280">od_pay.payment_key</span><span style="color:#1e40af">tgen_ABC</span>
                    <span style="color:#6b7280">od_pay.pay_amt</span><span>30,000\uC6D0</span>
                    <span style="color:#6b7280">od_pay.pay_status_cd</span><span style="color:#15803d;font-weight:700">DONE</span>
                  </div>
                </div>

                <!-- 1\uCC28 \uBD80\uBD84\uCDE8\uC18C -->
                <div style="background:#fff7ed;border:1px solid #fdba74;border-radius:5px;padding:8px 10px;font-size:11px">
                  <div style="font-weight:600;color:#c2410c;margin-bottom:4px">1\uCC28 \uBD80\uBD84\uCDE8\uC18C \u2014 cancelAmount: 10,000</div>
                  <pre style="margin:0 0 4px;font-size:10px;background:#1e293b;color:#e2e8f0;padding:7px;border-radius:4px;overflow-x:auto">boApi.post('/api/co/cm/toss/cancel', {
  paymentKey: 'tgen_ABC',
  cancelReason: '\uC0C1\uD488 A \uBC18\uD488',
  cancelAmount: 10000   // \u2190 \uBD80\uBD84\uCDE8\uC18C \uAE08\uC561 \uBA85\uC2DC
}, coUtil.cofApiHdr('\uBD80\uBD84\uCDE8\uC18C 1\uCC28', '\uD14C\uC2A4\uD2B8'))</pre>
                  <div style="margin-top:4px;display:grid;grid-template-columns:130px 1fr;gap:2px 8px;color:#374151;font-family:monospace">
                    <span style="color:#6b7280">\uC751\uB2F5 status</span><span style="color:#15803d;font-weight:700">DONE</span>
                    <span style="color:#6b7280">balanceAmount</span><span>20,000\uC6D0 (\uC794\uC5EC)</span>
                    <span style="color:#6b7280">cancels[0].cancelAmount</span><span>10,000\uC6D0</span>
                    <span style="color:#6b7280">cancels[0].transactionKey</span><span style="color:#7c3aed">tx_ABC_002 \u2190 \uC0C8 \uBC1C\uAE09</span>
                    <span style="color:#6b7280">od_pay.pay_status_cd</span><span style="color:#f59e0b;font-weight:700">PARTIAL_CANCELED</span>
                  </div>
                </div>

                <!-- 2\uCC28 \uBD80\uBD84\uCDE8\uC18C -->
                <div style="background:#fff7ed;border:1px solid #fdba74;border-radius:5px;padding:8px 10px;font-size:11px">
                  <div style="font-weight:600;color:#c2410c;margin-bottom:4px">2\uCC28 \uBD80\uBD84\uCDE8\uC18C \u2014 cancelAmount: 20,000 (\uC794\uC5EC \uC804\uBD80)</div>
                  <pre style="margin:0 0 4px;font-size:10px;background:#1e293b;color:#e2e8f0;padding:7px;border-radius:4px;overflow-x:auto">boApi.post('/api/co/cm/toss/cancel', {
  paymentKey: 'tgen_ABC',   // \u2190 \uB3D9\uC77C paymentKey \uC7AC\uC0AC\uC6A9
  cancelReason: '\uB098\uBA38\uC9C0 \uC804\uCCB4 \uCDE8\uC18C',
  cancelAmount: 20000       // \u2190 refundableAmount \uC804\uC561
}, coUtil.cofApiHdr('\uBD80\uBD84\uCDE8\uC18C 2\uCC28', '\uD14C\uC2A4\uD2B8'))</pre>
                  <div style="margin-top:4px;display:grid;grid-template-columns:130px 1fr;gap:2px 8px;color:#374151;font-family:monospace">
                    <span style="color:#6b7280">\uC751\uB2F5 status</span><span style="color:#b91c1c;font-weight:700">CANCELED \u2190 \uC804\uC561 \uCDE8\uC18C \uC644\uB8CC</span>
                    <span style="color:#6b7280">balanceAmount</span><span>0\uC6D0</span>
                    <span style="color:#6b7280">cancels[0].transactionKey</span><span style="color:#7c3aed">tx_ABC_002 (1\uCC28)</span>
                    <span style="color:#6b7280">cancels[1].transactionKey</span><span style="color:#7c3aed">tx_ABC_003 \u2190 \uC0C8 \uBC1C\uAE09</span>
                    <span style="color:#6b7280">od_pay.pay_status_cd</span><span style="color:#b91c1c;font-weight:700">CANCELED</span>
                  </div>
                </div>

              </div>
              <div style="font-size:11px;color:#64748b;background:#fafafa;border-radius:4px;padding:7px 10px;line-height:1.8">
                <b>\uD3EC\uC778\uD2B8:</b> paymentKey(tgen_ABC)\uB294 1\xB72\uCC28 \uBAA8\uB450 \uB3D9\uC77C \u2014 \uCDE8\uC18C \uD68C\uCC28\uB9C8\uB2E4 <code>transactionKey</code> \uB9CC \uC0C8\uB85C \uBC1C\uAE09<br>
                <b>\uC6B4\uC601 \uC8FC\uC758:</b> 2\uCC28 cancelAmount = balanceAmount \uC815\uD655\uD788 \uC77C\uCE58\uD574\uC57C \uD568 \u2014 \uCD08\uACFC \uC2DC \uD1A0\uC2A4 400 \uC5D0\uB7EC(<code>EXCEED_CANCEL_AMOUNT</code>)
              </div>
            </div>
          </div>

          <!-- Q13 -->
          <div style="border:1px solid #ddd6fe;border-radius:6px;overflow:hidden">
            <div style="background:#ede9fe;padding:7px 12px;font-weight:700;color:#4c1d95;display:flex;align-items:center;gap:6px">
              <span style="color:#7c3aed">Q13</span> \uCD94\uAC00\uACB0\uC81C\uB294 \uC5B4\uB5BB\uAC8C \uD558\uB098\uC694? \uAC19\uC740 orderId \uB85C \uD558\uBA74 \uB418\uB098\uC694?
            </div>
            <div style="padding:10px 12px;background:#fdfaff;display:flex;flex-direction:column;gap:8px;font-size:12px">

              <div>
                <div style="color:#dc2626;font-weight:600;margin-bottom:4px">\u274C \uAC19\uC740 orderId \uC0AC\uC6A9 \uBD88\uAC00</div>
                <div style="color:#64748b;line-height:1.8">
                  \uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20\uC5D0\uC11C <code>orderId</code>\uB294 \uACB0\uC81C \uAC74\uB2F9 \uC720\uC77C\uD569\uB2C8\uB2E4.<br>
                  \uB3D9\uC77C orderId\uB85C \uACB0\uC81C\uCC3D\uC744 \uC5F4\uBA74 \uD1A0\uC2A4\uAC00 <b>"\uC774\uBBF8 \uC0AC\uC6A9\uB41C orderId"</b>\uB85C \uAC70\uBD80\uD569\uB2C8\uB2E4.
                </div>
              </div>

              <div>
                <div style="color:#374151;font-weight:600;margin-bottom:6px">\u2705 \uC62C\uBC14\uB978 \uCD94\uAC00\uACB0\uC81C \uC124\uACC4</div>
                <div style="display:flex;gap:8px">
                  <div style="flex:1;background:#f0fdf4;border:1px solid #86efac;border-radius:5px;padding:8px 10px;font-size:11px">
                    <div style="font-weight:600;color:#166534;margin-bottom:4px">\uC6D0 \uC8FC\uBB38</div>
                    <div style="font-family:monospace;display:flex;flex-direction:column;gap:2px;color:#374151">
                      <span>order_id = <b>ORD-001</b></span>
                      <span>order_type_cd = NORMAL</span>
                      <span>order_amt = 30,000\uC6D0</span>
                      <span>paymentKey = <span style="color:#1e40af">tgen_ABC</span></span>
                      <span>pay_status_cd = DONE</span>
                    </div>
                  </div>
                  <div style="display:flex;align-items:center;font-size:18px;color:#94a3b8;padding:0 4px">+</div>
                  <div style="flex:1;background:#ede9fe;border:1px solid #c4b5fd;border-radius:5px;padding:8px 10px;font-size:11px">
                    <div style="font-weight:600;color:#5b21b6;margin-bottom:4px">\uCD94\uAC00\uACB0\uC81C (\uC0C8 od_pay \uD589)</div>
                    <div style="font-family:monospace;display:flex;flex-direction:column;gap:2px;color:#374151">
                      <span>pay_id = <b>PAY-002</b> \u2190 \uD1A0\uC2A4 orderId</span>
                      <span>order_id = ORD-001 \u2190 \uC6D0 \uC8FC\uBB38 FK</span>
                      <span>pay_occur_type_cd = CLAIM_EXTRA</span>
                      <span>pay_amt = 5,000\uC6D0</span>
                      <span>paymentKey = <span style="color:#1e40af">tgen_XYZ \u2190 \uC0C8 \uBC1C\uAE09</span></span>
                      <span>pay_status_cd = DONE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div style="color:#374151;font-weight:600;margin-bottom:4px">\u25B6 \uC774 \uD14C\uC2A4\uD2B8 \uD654\uBA74\uC5D0\uC11C \uCD94\uAC00\uACB0\uC81C \uC9C4\uD589\uD558\uB294 \uBC95</div>
                <div style="display:flex;flex-direction:column;gap:4px;color:#64748b;line-height:1.8;font-size:11px">
                  <span>\u2460 [orderId \uC0C8\uB85C\uACE0\uCE68] \u2192 \uC0C8 <code>PAY-{timestamp}</code> \uAC00 \uC790\uB3D9 \uC0DD\uC131\uB428 (\uC218\uB3D9 \uC785\uB825 \uBD88\uD544\uC694)</span>
                  <span>\u2461 amount \uB97C \uCD94\uAC00\uACB0\uC81C \uAE08\uC561(5,000)\uC73C\uB85C \uBCC0\uACBD</span>
                  <span>\u2462 [\uC704\uC82F \uB80C\uB354\uB9C1] \u2192 [\uACB0\uC81C\uD558\uAE30] \u2192 \uD1A0\uC2A4 \uACB0\uC81C\uCC3D \u2192 [\uC2B9\uC778 \uC694\uCCAD]</span>
                  <span>\u2463 \uC6D0 \uACB0\uC81C(PAY-001)\uC640 \uCD94\uAC00\uACB0\uC81C(PAY-002)\uB294 \uAC01\uAC01 \uB3C5\uB9BD\uB41C paymentKey \uB85C \uAD00\uB9AC</span>
                </div>
              </div>

              <div>
                <div style="color:#374151;font-weight:600;margin-bottom:6px">\u25B6 \uCD94\uAC00\uACB0\uC81C \uCDE8\uC18C\uB294?</div>
                <div style="font-size:11px;display:flex;gap:6px;flex-wrap:wrap">
                  <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:4px;padding:6px 8px;flex:1">
                    <div style="font-weight:600;color:#166534;margin-bottom:2px">\uC6D0 \uC8FC\uBB38 \uCDE8\uC18C</div>
                    <div style="font-family:monospace;font-size:10px;color:#374151">paymentKey: tgen_ABC<br>cancelAmount: 30,000</div>
                  </div>
                  <div style="background:#ede9fe;border:1px solid #c4b5fd;border-radius:4px;padding:6px 8px;flex:1">
                    <div style="font-weight:600;color:#5b21b6;margin-bottom:2px">\uCD94\uAC00\uACB0\uC81C \uB3C5\uB9BD \uCDE8\uC18C</div>
                    <div style="font-family:monospace;font-size:10px;color:#374151">paymentKey: tgen_XYZ<br>cancelAmount: 5,000</div>
                  </div>
                </div>
                <div style="font-size:11px;color:#94a3b8;margin-top:4px">\uAC01\uAC01 \uB3C5\uB9BD \uCDE8\uC18C \xB7 od_claim\uC5D0 parent_order_id \uAE30\uC900\uC73C\uB85C \uBB36\uC5B4\uC11C \uD654\uBA74 \uD45C\uC2DC</div>
              </div>

              <div style="background:#fefce8;border:1px solid #fde047;border-radius:5px;padding:8px 10px;font-size:11px;color:#64748b;line-height:1.8">
                <b style="color:#92400e">\uC694\uC57D:</b>
                \uCD94\uAC00\uACB0\uC81C = \uC0C8 od_pay \uD589 INSERT \u2192 \uC0C8 pay_id \uC790\uB3D9 \uBC1C\uAE09 \u2192 \uC774 pay_id \uB97C \uD1A0\uC2A4 orderId \uB85C \uC0AC\uC6A9<br>
                \uAC19\uC740 \uC8FC\uBB38\uC758 \uCD94\uAC00\uACB0\uC81C\uC784\uC740 od_pay.order_id (FK) \uB85C \uC6D0 \uC8FC\uBB38 ORD-001 \uC5D0 \uC5F0\uACB0
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

  <!-- \uD0A4 \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">API \uD0A4 \uC124\uC815</span>
      <span style="font-size:11px;color:#888;margin-left:8px">\uACB0\uC81C\uC704\uC82F \uC804\uC6A9 \uD0A4 (test_gck_ / live_gck_ \uC811\uB450\uC5B4)</span>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div class="form-actions" style="justify-content:flex-start;margin-top:8px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('keys-save')">sy_prop \uC800\uC7A5</button>
      </div>
      <div style="font-size:12px;color:#666;padding:6px 8px;background:#f8f9fa;border-radius:4px;line-height:2;margin-top:8px">
        <div>SDK \uC0C1\uD0DC: <strong>{{ result.sdkStatus || '\uD655\uC778 \uC911\u2026' }}</strong><span v-if="result.sdkUrl" style="margin-left:8px;color:#aaa;font-family:monospace;font-size:11px">{{ result.sdkUrl }}</span></div>
        <div>\uCD08\uAE30\uD654 \uC0C1\uD0DC: <strong>{{ result.initDetail || (uiState.sdkLoaded ? '\uCD08\uAE30\uD654 \uC644\uB8CC' : '\uBBF8\uCD08\uAE30\uD654') }}</strong></div>
      </div>
    </div>
  </div>

  <!-- \uACB0\uC81C \uD30C\uB77C\uBBF8\uD130 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uACB0\uC81C \uD30C\uB77C\uBBF8\uD130</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="baseFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact>
        <template #orderIdSlot>
          <div style="display:flex;gap:4px">
            <input class="form-control" v-model="form.orderId" style="flex:1;font-family:monospace;font-size:12px" />
            <button class="btn btn_reset btn-sm" @click="handleBtnAction('orderid-refresh')" style="white-space:nowrap">\uC0C8\uB85C\uACE0\uCE68</button>
          </div>
        </template>
        <template #successUrlSlot>
          <input class="form-control" :value="TOSS_SUCCESS_URL" readonly
            style="font-family:monospace;font-size:11px;background:#f8fafc;color:#374151" />
          <div style="font-size:11px;color:#94a3b8;margin-top:4px;line-height:1.6">
            \uD1A0\uC2A4 \uACB0\uC81C \uC644\uB8CC \u2192 \uC774 \uD654\uBA74(bo.html)\uC73C\uB85C \uBCF5\uADC0 \u2192 \uC544\uB798 \uBC30\uB108\uC5D0\uC11C [\uC2B9\uC778 \uC694\uCCAD] \uD074\uB9AD \u2192 \uBC31\uC5D4\uB4DC POST confirm
            <span v-if="ENV.name==='local'" style="color:#f59e0b"> \xB7 local \uD658\uACBD: \uC2B9\uC778\uC740 :8080 \uBC31\uC5D4\uB4DC\uB85C \uC804\uC1A1</span>
          </div>
        </template>
        <template #failUrlSlot>
          <input class="form-control" :value="TOSS_FAIL_URL" readonly
            style="font-family:monospace;font-size:11px;background:#f8fafc;color:#374151" />
          <div style="font-size:11px;color:#94a3b8;margin-top:4px">
            \uACB0\uC81C \uC2E4\uD328/\uCDE8\uC18C \u2192 \uC774 \uD654\uBA74\uC73C\uB85C \uBCF5\uADC0 \u2192 \uC5D0\uB7EC \uD1A0\uC2A4\uD2B8 \uD45C\uC2DC (failUrl\uC740 \uD56D\uC0C1 \uD504\uB860\uD2B8 URL)
          </div>
        </template>
      </bo-form-area>
    </div>
  </div>

  <!-- \uD788\uB4E0 \uC804\uC1A1 \uD56D\uBAA9 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uD788\uB4E0 \uC804\uC1A1 \uD56D\uBAA9</span>
      <span style="font-size:11px;color:#888;margin-left:8px">requestPayment() \uCD94\uAC00 \uD30C\uB77C\uBBF8\uD130 \u2014 \uAC12 \uC785\uB825/\uCCB4\uD06C \uC2DC \uC804\uC1A1\uB428</span>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="hiddenFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact>
        <template #cultureExpenseSlot>
          <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;margin-top:6px">
            <input type="checkbox" v-model="form.cultureExpense" /> \uD65C\uC131\uD654 (\uB3C4\uC11C/\uACF5\uC5F0/\uBC15\uBB3C\uAD00 \uB4F1)
          </label>
        </template>
        <template #useEscrowSlot>
          <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;margin-top:6px">
            <input type="checkbox" v-model="form.useEscrow" /> \uC5D0\uC2A4\uD06C\uB85C \uC801\uC6A9
          </label>
        </template>
        <template #addCardBenefitsSlot>
          <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;margin-top:6px">
            <input type="checkbox" v-model="form.addCardBenefits" /> \uC989\uC2DC \uD560\uC778 \uD61C\uD0DD \uD45C\uC2DC
          </label>
        </template>
        <template #currencyNote>
          <div style="font-size:11px;color:#9ca3af;line-height:1.7;padding-top:4px">
            currency/country \uB294 KRW/KR \uC678 \uAC12 \uC124\uC815 \uC2DC\uC5D0\uB9CC \uC804\uC1A1\uB429\uB2C8\uB2E4.<br>
            setAmount() \uC758 currency \uB3C4 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.
          </div>
        </template>
      </bo-form-area>

      <!-- \uC804\uC1A1 \uD30C\uB77C\uBBF8\uD130 \uBBF8\uB9AC\uBCF4\uAE30 -->
      <div style="margin-top:14px;padding:10px 12px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0">
        <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:6px">\u{1F4CB} requestPayment() \uC804\uC1A1 \uD30C\uB77C\uBBF8\uD130 \uBBF8\uB9AC\uBCF4\uAE30</div>
        <bo-grid :columns="previewGridColumns" :rows="cfPayParams" :show-row-num="false" style="font-size:11px" />
      </div>
    </div>
  </div>

  <!-- \uACB0\uC81C \uC131\uACF5 \uCF5C\uBC31 \uC218\uC2E0 \uBC30\uB108 -->
  <div v-if="result.callbackParams" style="margin-bottom:12px;padding:14px 16px;background:#eff6ff;border:2px solid #3b82f6;border-radius:8px">
    <div style="font-size:13px;font-weight:700;color:#1d4ed8;margin-bottom:8px">
      \u{1F514} \uD1A0\uC2A4 \uACB0\uC81C \uC131\uACF5 \uCF5C\uBC31 \uC218\uC2E0 \u2014 \uC2B9\uC778 \uC694\uCCAD\uC774 \uD544\uC694\uD569\uB2C8\uB2E4
    </div>
    <div style="display:grid;grid-template-columns:90px 1fr;gap:4px 12px;font-size:12px;margin-bottom:12px">
      <span style="color:#64748b">paymentKey</span>
      <span style="font-family:monospace;color:#1e40af;word-break:break-all">{{ result.callbackParams.paymentKey }}</span>
      <span style="color:#64748b">orderId</span>
      <span style="font-family:monospace">{{ result.callbackParams.orderId }}</span>
      <span style="color:#64748b">amount</span>
      <span style="font-family:monospace">{{ result.callbackParams.amount.toLocaleString() }} \uC6D0</span>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn_confirm btn-sm" :disabled="uiState.loading" @click="handleBtnAction('confirm-auto')">
        {{ uiState.loading ? '\u23F3 \uC2B9\uC778 \uC911\u2026' : '\u2705 \uC2B9\uC778 \uC694\uCCAD' }}
      </button>
    </div>
  </div>

  <!-- \uC704\uC82F \uB80C\uB354\uB9C1 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uACB0\uC81C\uC704\uC82F</span>
      <div style="margin-left:auto;display:flex;gap:6px">
        <button class="btn btn_preview btn-sm" :disabled="uiState.loading" @click="handleBtnAction('widget-mount')">\uC704\uC82F \uB80C\uB354\uB9C1</button>
        <button class="btn btn_confirm btn-sm" :disabled="uiState.loading || !uiState.widgetMounted" @click="handleBtnAction('pay-test')">
          {{ uiState.loading ? '\u23F3 \uCC98\uB9AC \uC911\u2026' : '\uACB0\uC81C\uD558\uAE30' }}
        </button>
        <button class="btn btn_apply btn-sm" :disabled="uiState.loading" @click="handleBtnAction('confirm-manual')" title="paymentKey \uC9C1\uC811 \uC785\uB825\uC73C\uB85C \uC2B9\uC778 (\uC608\uC678 \uB300\uC751)">\uC218\uB3D9 \uC2B9\uC778</button>
        <button class="btn btn_delete btn-sm" :disabled="!result.confirmResult" @click="handleBtnAction('cancel-test')">\uACB0\uC81C \uCDE8\uC18C</button>
      </div>
    </div>
    <div style="padding:12px">
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-bottom:8px">{{ result.error }}</div>
      <div :id="widgetContainerId" style="min-height:200px;border:1px dashed #ddd;border-radius:6px;padding:8px;margin-bottom:8px">
        <div v-if="!uiState.widgetMounted" style="display:flex;align-items:center;justify-content:center;height:160px;color:#aaa;font-size:13px">
          \uC704\uC82F \uB80C\uB354\uB9C1 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC5EC\uAE30\uC5D0 \uACB0\uC81C UI\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4
        </div>
      </div>
      <!-- \uACB0\uC81C \uC804 \uC784\uC2DC\uC800\uC7A5 \uACB0\uACFC (PENDING) -->
      <div v-if="result.preResult" style="background:#eff6ff;border:1px solid #93c5fd;border-radius:6px;padding:10px;margin-bottom:8px">
        <div style="font-weight:600;margin-bottom:6px;color:#1d4ed8;font-size:12px">
          \u{1F4CB} STEP 1 \u2014 \uACB0\uC81C \uC804 \uC784\uC2DC\uC800\uC7A5
          <span class="badge badge-blue" style="margin-left:6px;font-size:10px">PENDING</span>
          <span v-if="result.preResult.note" style="font-size:10px;color:#94a3b8;margin-left:6px">{{ result.preResult.note }}</span>
        </div>
        <div style="display:grid;grid-template-columns:90px 1fr;gap:3px 8px;font-size:12px">
          <span style="color:#64748b">orderId</span>
          <span style="font-family:monospace;color:#1e40af">{{ result.preResult.orderId || form.orderId }}</span>
          <span style="color:#64748b">status</span>
          <span style="font-family:monospace">{{ result.preResult.status || 'PENDING' }}</span>
          <span style="color:#64748b">paymentKey</span>
          <span style="color:#94a3b8;font-size:11px">null \u2014 \uD1A0\uC2A4 confirm \uD6C4 \uCC44\uC6CC\uC9D0</span>
        </div>
        <div style="font-size:11px;color:#64748b;margin-top:6px;padding-top:6px;border-top:1px solid #dbeafe">
          orderId \uAE30\uC900\uC73C\uB85C \uBBF8\uC644 \uC8FC\uBB38 \uBCF5\uAD6C \uAC00\uB2A5 \xB7 \uCF5C\uBC31 \uBBF8\uC218\uC2E0 \uC2DC \uBC30\uCE58\uB85C PENDING \uC8FC\uBB38 \uC815\uB9AC \uAC00\uB2A5
        </div>
      </div>

      <!-- \uACB0\uC81C \uC2B9\uC778 \uCD5C\uC885\uACB0\uACFC (DONE) -->
      <div v-if="result.confirmResult" style="background:#f0fdf4;border:1px solid #86efac;border-radius:6px;padding:10px;margin-bottom:8px">
        <div style="font-weight:600;margin-bottom:6px;color:#15803d;font-size:12px">
          \u2705 STEP 3 \u2014 \uACB0\uC81C \uC2B9\uC778 + \uCD5C\uC885\uC800\uC7A5
          <span class="badge badge-green" style="margin-left:6px;font-size:10px">DONE</span>
        </div>
        <bo-grid :columns="confirmGridColumns" :rows="[result.confirmResult]" :show-row-num="false"
          @cell-click="e => handleBtnAction('receipt-open', e.colKey==='receiptUrl' ? result.confirmResult.receiptUrl : null)" />
        <!-- \uC2B9\uC778 \uC751\uB2F5 \uD575\uC2EC 3\uD544\uB4DC \uC124\uBA85 -->
        <div style="margin-top:8px;display:flex;flex-direction:column;gap:4px;font-size:11px;padding:8px 10px;background:#ecfdf5;border-radius:5px;border:1px solid #a7f3d0">
          <div style="display:flex;gap:8px;align-items:baseline">
            <code style="background:#d1fae5;padding:1px 5px;border-radius:3px;color:#065f46;white-space:nowrap">approvedAt</code>
            <span style="color:#374151">\uCE74\uB4DC\uC0AC \uC2E4\uC81C \uC2B9\uC778 \uC77C\uC2DC (ISO8601, \uD0C0\uC784\uC874 \uD3EC\uD568) \u2014 od_pay.approved_at(TIMESTAMP)\uC5D0 \uC800\uC7A5</span>
          </div>
          <div style="display:flex;gap:8px;align-items:baseline">
            <code style="background:#ede9fe;padding:1px 5px;border-radius:3px;color:#5b21b6;white-space:nowrap">transactionKey</code>
            <span style="color:#374151">\uC774 \uACB0\uC81C \uAC74\uC758 \uAC70\uB798 \uC2DD\uBCC4\uC790 \u2014 \uBD80\uBD84\uCDE8\uC18C 2\uD68C\uCC28 \uB4F1 \uCDE8\uC18C \uC774\uB825\uBCC4\uB85C \uC0C8 \uAC12 \uBC1C\uAE09 (cancels[].transactionKey)</span>
          </div>
          <div style="display:flex;gap:8px;align-items:baseline">
            <code style="background:#dbeafe;padding:1px 5px;border-radius:3px;color:#1e40af;white-space:nowrap">receiptUrl</code>
            <span style="color:#374151">\uD1A0\uC2A4 \uBC1C\uD589 \uACF5\uC2DD \uC804\uC790\uC601\uC218\uC99D URL \u2014 \uD074\uB9AD\uD558\uBA74 \uC0C8 \uD0ED\uC73C\uB85C \uC624\uD508 \xB7 od_pay.receipt_url \uC5D0 \uC800\uC7A5 \uAD8C\uC7A5</span>
          </div>
        </div>
        <div style="font-size:11px;color:#64748b;margin-top:6px;padding-top:6px;border-top:1px solid #bbf7d0">
          paymentKey \uB85C od_pay \uC5C5\uB370\uC774\uD2B8 \xB7 orderId \uB85C od_order.status \u2192 PAID
        </div>
      </div>

      <!-- \uACB0\uC81C \uCDE8\uC18C \uACB0\uACFC -->
      <div v-if="result.cancelResult" style="background:#fff7ed;border:1px solid #fdba74;border-radius:6px;padding:10px">
        <div style="font-weight:600;margin-bottom:8px;color:#c2410c;font-size:12px">
          \u2298 \uACB0\uC81C \uCDE8\uC18C \uACB0\uACFC
          <span class="badge badge-red" style="margin-left:6px;font-size:10px">{{ result.cancelResult.status }}</span>
        </div>

        <!-- \uC88C\uC6B0 2\uB2E8: \uC67C\uCABD=\uC694\uC57D\uADF8\uB9AC\uB4DC+\uC774\uB825, \uC624\uB978\uCABD=\uD544\uB4DC \uCF54\uBA58\uD2B8 -->
        <div style="display:grid;grid-template-columns:1fr 280px;gap:10px;align-items:start">
          <!-- \uC67C\uCABD: \uC0C1\uD0DC \uC694\uC57D + \uCDE8\uC18C \uC774\uB825 -->
          <div>
            <!-- \uC0C1\uD0DC \uC694\uC57D -->
            <div style="font-size:11px;font-weight:600;color:#92400e;margin-bottom:4px">\u{1F4CA} \uACB0\uC81C \uC0C1\uD0DC \uC694\uC57D</div>
            <bo-grid :columns="cancelSummaryGridColumns" :rows="[result.cancelResult]" :show-row-num="false" />

            <!-- cancels[] \uC774\uB825 -->
            <div style="font-size:11px;font-weight:600;color:#92400e;margin-top:10px;margin-bottom:4px">
              \u{1F4CB} \uCDE8\uC18C \uC774\uB825 (cancels[])
              <span style="font-family:monospace;font-weight:400;color:#b45309;margin-left:4px">{{ (result.cancelResult.cancels || []).length }}\uAC74</span>
            </div>
            <div v-if="!(result.cancelResult.cancels || []).length" style="font-size:11px;color:#aaa;padding:6px">\uC774\uB825 \uC5C6\uC74C</div>
            <bo-grid v-else :columns="cancelHistGridColumns" :rows="result.cancelResult.cancels || []" :show-row-num="true" />

            <!-- paymentKey \uC548\uB0B4 -->
            <div style="font-size:11px;color:#78716c;margin-top:6px;padding-top:6px;border-top:1px solid #fde68a">
              paymentKey \uB3D9\uC77C \u2014 \uC804\uCCB4 \uCDE8\uC18C\uAC00 \uB420 \uB54C\uAE4C\uC9C0 \uAC19\uC740 \uD0A4\uB85C \uBC18\uBCF5 \uCDE8\uC18C \uAC00\uB2A5
            </div>
          </div>

          <!-- \uC624\uB978\uCABD: \uD544\uB4DC\uBCC4 \uCF54\uBA58\uD2B8 -->
          <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:5px;padding:10px;font-size:11px;display:flex;flex-direction:column;gap:6px">
            <div style="font-weight:700;color:#92400e;margin-bottom:2px">\u{1F4CC} \uC751\uB2F5 \uD544\uB4DC \uC124\uBA85</div>

            <div>
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;color:#78350f">status</code>
              <div style="color:#44403c;margin-top:2px;line-height:1.5">
                \uBD80\uBD84\uCDE8\uC18C \u2192 <code style="background:#fff7ed;color:#c2410c">DONE</code><br>
                \uC804\uC561\uCDE8\uC18C \u2192 <code style="background:#fff1f2;color:#be123c">CANCELED</code>
              </div>
            </div>

            <div>
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;color:#78350f">totalAmount</code>
              <div style="color:#44403c;margin-top:2px;line-height:1.5">
                \uC6D0 \uACB0\uC81C\uAE08\uC561. \uCDE8\uC18C\uD574\uB3C4 \uBCC0\uD558\uC9C0 \uC54A\uC74C
              </div>
            </div>

            <div>
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;color:#78350f">balanceAmount</code>
              <div style="color:#44403c;margin-top:2px;line-height:1.5">
                \uC9C0\uAE08 \uCD94\uAC00\uB85C \uCDE8\uC18C \uAC00\uB2A5\uD55C \uC794\uC5EC \uAE08\uC561<br>
                <span style="color:#dc2626">0\uC774\uBA74 \uB354 \uC774\uC0C1 \uCDE8\uC18C \uBD88\uAC00</span>
              </div>
            </div>

            <div>
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;color:#78350f">isPartialCancelable</code>
              <div style="color:#44403c;margin-top:2px;line-height:1.5">
                \uBD80\uBD84\uCDE8\uC18C \uAC00\uB2A5 \uC5EC\uBD80<br>
                \uAC00\uC0C1\uACC4\uC88C \uBBF8\uC785\uAE08 \uC0C1\uD0DC \uB4F1\uC740 false
              </div>
            </div>

            <div>
              <code style="background:#ede9fe;padding:1px 5px;border-radius:3px;color:#5b21b6">cancels[].transactionKey</code>
              <div style="color:#44403c;margin-top:2px;line-height:1.5">
                \uCDE8\uC18C 1\uAC74\uB2F9 \uC0C8\uB85C \uBC1C\uAE09\uB418\uB294 \uAC70\uB798 \uC2DD\uBCC4\uC790<br>
                \uBD80\uBD84\uCDE8\uC18C 2\uD68C = transactionKey 2\uAC1C \uB204\uC801
              </div>
            </div>

            <div>
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;color:#78350f">cancels[].cancelAmount</code>
              <div style="color:#44403c;margin-top:2px;line-height:1.5">
                \uC774\uBC88 \uCDE8\uC18C\uC5D0\uC11C \uCC28\uAC10\uB41C \uAE08\uC561<br>
                cancelAmount \uC5C6\uC774 \uC694\uCCAD = \uC804\uC561
              </div>
            </div>

            <div>
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;color:#78350f">cancels[].refundableAmount</code>
              <div style="color:#44403c;margin-top:2px;line-height:1.5">
                \uC774 \uCDE8\uC18C \uAC74\uC5D0\uC11C \uD658\uAE09 \uAC00\uB2A5\uD55C \uAE08\uC561<br>
                (\uBA74\uC138\xB7\uBD80\uAC00\uC138 \uBD84\uB9AC \uC801\uC6A9 \uD6C4 \uC21C\uC561)
              </div>
            </div>

            <div>
              <code style="background:#fef3c7;padding:1px 5px;border-radius:3px;color:#78350f">cancels[].canceledAt</code>
              <div style="color:#44403c;margin-top:2px;line-height:1.5">
                \uCDE8\uC18C \uCC98\uB9AC \uC644\uB8CC \uC77C\uC2DC (ISO8601)<br>
                od_pay.canceled_at \uC5D0 \uC800\uC7A5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- \uD658\uACBD \uC815\uBCF4 + \uC5F0\uB3D9 \uD750\uB984 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uD658\uACBD \uC815\uBCF4 &amp; \uC5F0\uB3D9 \uD750\uB984</span></div>
    <div style="padding:12px">
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 12px;margin-bottom:12px;font-size:12px">
        <div style="font-weight:600;color:#475569;margin-bottom:6px">\u{1F5A5} \uD604\uC7AC \uC2E4\uD589 \uD658\uACBD</div>
        <div style="display:grid;grid-template-columns:110px 1fr;gap:3px 8px;color:#374151">
          <span style="color:#64748b">\uD658\uACBD</span>
          <span>
            <span class="badge" :class="ENV.name==='prod'?'badge-green':ENV.name==='dev'?'badge-blue':'badge-orange'">{{ ENV.name }}</span>
          </span>
          <span style="color:#64748b">\uD604\uC7AC Origin</span>
          <span style="font-family:monospace">{{ ENV.currentOrigin }}</span>
          <span style="color:#64748b">\uBC31\uC5D4\uB4DC Origin</span>
          <span style="font-family:monospace">{{ ENV.backendOrigin }}
            <span v-if="ENV.name==='local'" style="color:#f59e0b;font-family:sans-serif"> \u2190 Live Server \uAC10\uC9C0 \u2192 :8080 \uC790\uB3D9 \uC804\uD658</span>
          </span>
          <span style="color:#64748b">successUrl</span>
          <span style="font-family:monospace;font-size:11px;color:#1e40af">{{ TOSS_SUCCESS_URL }}</span>
          <span style="color:#64748b">failUrl</span>
          <span style="font-family:monospace;font-size:11px;color:#6b7280">{{ TOSS_FAIL_URL }}</span>
        </div>
      </div>
      <!-- 3\uB2E8\uACC4 \uC800\uC7A5 \uD750\uB984 -->
      <div style="margin-bottom:14px">
        <div style="font-size:12px;font-weight:700;color:#374151;margin-bottom:8px">\u{1F4BE} \uACB0\uC81C \uB370\uC774\uD130 \uC800\uC7A5 3\uB2E8\uACC4</div>
        <div style="display:flex;align-items:stretch;gap:0;font-size:11px">
          <div style="flex:1;background:#eff6ff;border:1px solid #93c5fd;border-radius:6px 0 0 6px;padding:10px 12px">
            <div style="font-weight:700;color:#1d4ed8;margin-bottom:6px">STEP 1 \xB7 \uACB0\uC81C\uD558\uAE30 \uD074\uB9AD</div>
            <div style="color:#374151;line-height:1.8">
              <div>\u{1F4CC} <b>orderId \uBC1C\uAE09</b> (\uC6B0\uB9AC \uC2DC\uC2A4\uD15C)</div>
              <div>\u{1F4CC} \uC8FC\uBB38\uC815\uBCF4 \uBC31\uC5D4\uB4DC \uC784\uC2DC\uC800\uC7A5</div>
              <div style="font-family:monospace;font-size:10px;color:#6b7280;margin-top:4px">od_order.status = PENDING<br>od_pay.payment_key = null</div>
              <div style="margin-top:6px;color:#94a3b8;font-size:10px">\u2192 \uACB0\uC81C\uCC3D \uC774\uD0C8 \uD6C4 \uC138\uC158 \uC720\uC2E4 \uC2DC\uC5D0\uB3C4<br>&nbsp;&nbsp;orderId \uB85C \uBBF8\uC644 \uC8FC\uBB38 \uBCF5\uAD6C \uAC00\uB2A5</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;padding:0 6px;background:#f8fafc;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0">
            <div style="font-size:18px;color:#fbbf24">\u2192</div>
          </div>
          <div style="flex:1;background:#fef9c3;border:1px solid #fde047;border:1px solid #fde047;padding:10px 12px">
            <div style="font-weight:700;color:#92400e;margin-bottom:6px">STEP 2 \xB7 \uD1A0\uC2A4 \uACB0\uC81C\uCC3D</div>
            <div style="color:#374151;line-height:1.8">
              <div>\u{1F4B3} \uCE74\uB4DC/\uAC04\uD3B8\uACB0\uC81C \uC778\uC99D</div>
              <div>\u{1F511} <b>paymentKey \uBC1C\uAE09</b> (\uD1A0\uC2A4 \uC11C\uBC84)</div>
              <div style="font-family:monospace;font-size:10px;color:#6b7280;margin-top:4px">GET redirect \u2192<br>bo.html?callback_pay_toss_succ=1<br>&amp;paymentKey=tgen_\u2026<br>&amp;orderId=TEST-\u2026<br>&amp;amount=1000</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;padding:0 6px;background:#f8fafc;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0">
            <div style="font-size:18px;color:#fbbf24">\u2192</div>
          </div>
          <div style="flex:1;background:#f0fdf4;border:1px solid #86efac;border-radius:0 6px 6px 0;padding:10px 12px">
            <div style="font-weight:700;color:#166534;margin-bottom:6px">STEP 3 \xB7 \uC2B9\uC778 \uC694\uCCAD</div>
            <div style="color:#374151;line-height:1.8">
              <div>\u2705 <b>paymentKey</b> \uB85C \uD1A0\uC2A4 confirm</div>
              <div>\u2705 \uAE08\uC561 \uC704\uBCC0\uC870 \uAC80\uC99D</div>
              <div style="font-family:monospace;font-size:10px;color:#6b7280;margin-top:4px">od_pay.payment_key = tgen_\u2026<br>od_pay.status = DONE<br>od_order.status = PAID</div>
              <div style="margin-top:6px;color:#94a3b8;font-size:10px">\u2192 orderId \u2194 paymentKey \uC5F0\uACB0 \uC644\uC131<br>&nbsp;&nbsp;\uC774\uD6C4 \uCDE8\uC18C \uC2DC paymentKey \uB85C \uC694\uCCAD</div>
            </div>
          </div>
        </div>
        <!-- \uD575\uC2EC \uD0A4 \uC124\uBA85 -->
        <div style="margin-top:10px;padding:8px 12px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;font-size:11px;line-height:2">
          <b>\uD575\uC2EC \uC2DD\uBCC4 \uD0A4:</b>
          &nbsp;
          <code style="background:#dbeafe;padding:2px 6px;border-radius:3px;color:#1e40af">orderId</code>
          <span style="color:#64748b"> \uC6B0\uB9AC \uC2DC\uC2A4\uD15C \uBC1C\uAE09 \xB7 \uACB0\uC81C \uC804\uBD80\uD130 \uC874\uC7AC \xB7 od_order PK</span>
          &nbsp;&nbsp;
          <code style="background:#dcfce7;padding:2px 6px;border-radius:3px;color:#166534">paymentKey</code>
          <span style="color:#64748b"> \uD1A0\uC2A4 \uBC1C\uAE09 \xB7 \uACB0\uC81C \uC778\uC99D \uD6C4 \uC218\uC2E0 \xB7 od_pay FK \xB7 \uCDE8\uC18C/\uC870\uD68C \uC2DC \uC0AC\uC6A9</span>
        </div>
      </div>

      <div style="font-size:12px;line-height:2;color:#444">
        <b>\uCF5C\uBC31 URL \uD30C\uB77C\uBBF8\uD130:</b><br>
        &nbsp;&nbsp;\uC131\uACF5: <code>bo.html?callback_pay_toss_succ=1&amp;paymentKey=tgen_\u2026&amp;orderId=TEST-\u2026&amp;amount=1000</code><br>
        &nbsp;&nbsp;\uC2E4\uD328: <code>bo.html?callback_pay_toss_fail=1</code> \u2192 \uC5D0\uB7EC \uD1A0\uC2A4\uD2B8 \uD45C\uC2DC<br><br>
        <b>\uB4A4\uB85C\uAC00\uAE30 \uC644\uCDA9:</b> \uBCF5\uADC0 \uC2DC replaceState(URL \uC815\uB9AC) + pushState(\uB3D9\uC77C URL 1\uD68C \uCD94\uAC00) \u2192 \uB4A4\uB85C\uAC00\uAE30 1\uD68C\uB294 bo.html \uC720\uC9C0<br><br>
        <b>\uD14C\uC2A4\uD2B8 \uC21C\uC11C:</b><br>
        &nbsp;&nbsp;\u2460 \uD0A4 \uC124\uC815 (test_gck_ / test_gsk_) \u2192 sy_prop \uC800\uC7A5<br>
        &nbsp;&nbsp;\u2461 [\uC704\uC82F \uB80C\uB354\uB9C1] \u2192 \uACB0\uC81C UI \uD655\uC778<br>
        &nbsp;&nbsp;\u2462 [\uACB0\uC81C\uD558\uAE30] \u2192 STEP 1 \uC784\uC2DC\uC800\uC7A5(PENDING) \u2192 \uD1A0\uC2A4 \uACB0\uC81C\uCC3D \u2192 \uCE74\uB4DC \uC785\uB825 \u2192 bo.html \uBCF5\uADC0<br>
        &nbsp;&nbsp;\u2463 \uD30C\uB780 \uBC30\uB108 [\uC2B9\uC778 \uC694\uCCAD] \u2192 STEP 3 \uCD5C\uC885\uC800\uC7A5(DONE) \uD655\uC778<br>
        &nbsp;&nbsp;\u2464 (\uC120\uD0DD) [\uACB0\uC81C \uCDE8\uC18C] \u2192 \uC804\uC561\uCDE8\uC18C (paymentKey \uAE30\uC900, status \u2192 CANCELED)<br>
        &nbsp;&nbsp;\u2464-A (\uBD80\uBD84\uCDE8\uC18C) \u2192 \uCF58\uC194\uC5D0\uC11C cancelAmount \uC9C0\uC815 \uC9C1\uC811 \uD638\uCD9C (\uC544\uB798 \uCC38\uC870)<br><br>
        <b>API \uC5D4\uB4DC\uD3EC\uC778\uD2B8:</b><br>
        &nbsp;&nbsp;\uC784\uC2DC\uC800\uC7A5: <code>POST {{ ENV.backendOrigin }}/api/bo/zd/pay-test/pre-save</code> (\uBBF8\uAD6C\uD604 \uC2DC \uC2DC\uBBAC)<br>
        &nbsp;&nbsp;\uC2B9\uC778: <code>POST {{ ENV.backendOrigin }}/api/co/cm/toss/confirm</code><br>
        &nbsp;&nbsp;\uC804\uC561\uCDE8\uC18C: <code>POST {{ ENV.backendOrigin }}/api/co/cm/toss/cancel</code> <span style="color:#94a3b8">\u2014 cancelAmount \uC0DD\uB7B5</span><br>
        &nbsp;&nbsp;\uBD80\uBD84\uCDE8\uC18C: <code>POST {{ ENV.backendOrigin }}/api/co/cm/toss/cancel</code> <span style="color:#d97706">\u2014 cancelAmount: 500 \uBA85\uC2DC</span>
      </div>

      <!-- \uBD80\uBD84\uCDE8\uC18C \uC0C1\uC138 \uAC00\uC774\uB4DC -->
      <div style="margin-top:14px;border:1px solid #fca5a5;border-radius:8px;overflow:hidden">
        <div style="background:#fee2e2;padding:8px 14px;font-size:12px;font-weight:700;color:#991b1b;display:flex;align-items:center;gap:6px">
          <span style="background:#dc2626;color:#fff;border-radius:3px;padding:1px 7px;font-size:10px">\uBD80\uBD84\uCDE8\uC18C</span>
          \uBD80\uBD84\uCDE8\uC18C (Partial Cancel) \uAC00\uC774\uB4DC
        </div>
        <div style="padding:12px 14px;font-size:12px;display:flex;flex-direction:column;gap:10px">

          <!-- \uC804\uC561 vs \uBD80\uBD84 \uBE44\uAD50 -->
          <div>
            <div style="font-weight:600;color:#374151;margin-bottom:6px">\uC804\uC561\uCDE8\uC18C vs \uBD80\uBD84\uCDE8\uC18C API \uCC28\uC774</div>
            <div style="display:flex;gap:8px">
              <div style="flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:5px;padding:8px 10px">
                <div style="font-weight:600;color:#374151;font-size:11px;margin-bottom:4px">\uC804\uC561\uCDE8\uC18C \u2014 cancelAmount \uC0DD\uB7B5</div>
                <pre style="margin:0;font-size:10px;background:#1e293b;color:#e2e8f0;padding:7px;border-radius:4px;overflow-x:auto">{
  "paymentKey": "tgen_...",
  "cancelReason": "\uC804\uC561\uCDE8\uC18C"
  // cancelAmount \uC5C6\uC73C\uBA74 \u2192 \uC790\uB3D9 \uC804\uC561
}</pre>
                <div style="font-size:11px;color:#64748b;margin-top:4px">\uACB0\uACFC: status \u2192 <b>CANCELED</b></div>
              </div>
              <div style="flex:1;background:#fff8f8;border:1px solid #fca5a5;border-radius:5px;padding:8px 10px">
                <div style="font-weight:600;color:#dc2626;font-size:11px;margin-bottom:4px">\uBD80\uBD84\uCDE8\uC18C \u2014 cancelAmount \uBA85\uC2DC</div>
                <pre style="margin:0;font-size:10px;background:#1e293b;color:#e2e8f0;padding:7px;border-radius:4px;overflow-x:auto">{
  "paymentKey": "tgen_...",
  "cancelReason": "\uBD80\uBD84\uCDE8\uC18C",
  "cancelAmount": 500   // \u2190 \uCDE8\uC18C\uD560 \uAE08\uC561
}</pre>
                <div style="font-size:11px;color:#64748b;margin-top:4px">\uACB0\uACFC: status \u2192 <b>DONE</b> (\uC794\uC5EC\uBD84 \uC720\uC9C0)</div>
              </div>
            </div>
          </div>

          <!-- \uBD80\uBD84\uCDE8\uC18C \uCF58\uC194 \uD14C\uC2A4\uD2B8 -->
          <div>
            <div style="font-weight:600;color:#374151;margin-bottom:4px">\uBD80\uBD84\uCDE8\uC18C \uCF58\uC194 \uC9C1\uC811 \uD14C\uC2A4\uD2B8</div>
            <div style="color:#64748b;font-size:11px;margin-bottom:4px">\uC2B9\uC778 \uC644\uB8CC \uD6C4 confirmResult \uC5D0\uC11C paymentKey \uBCF5\uC0AC \u2192 \uC544\uB798 \uCF58\uC194 \uC2E4\uD589</div>
            <pre style="margin:0;font-size:10px;background:#1e293b;color:#e2e8f0;padding:8px;border-radius:4px;overflow-x:auto">// 500\uC6D0\uB9CC \uCDE8\uC18C (1,000\uC6D0 \uACB0\uC81C \uAE30\uC900)
boApi.post('/api/co/cm/toss/cancel',
  {
    paymentKey: 'tgen_20260628_...',  // confirmResult \uC5D0\uC11C \uBCF5\uC0AC
    cancelReason: '\uBD80\uBD84\uCDE8\uC18C \uD14C\uC2A4\uD2B8',
    cancelAmount: 500
  },
  coUtil.cofApiHdr('\uBD80\uBD84\uCDE8\uC18C \uD14C\uC2A4\uD2B8', '\uBD80\uBD84\uCDE8\uC18C')
).then(r => console.log(JSON.stringify(r.data, null, 2)))</pre>
          </div>

          <!-- \uC751\uB2F5 \uAD6C\uC870 -->
          <div>
            <div style="font-weight:600;color:#374151;margin-bottom:4px">\uBD80\uBD84\uCDE8\uC18C \uC751\uB2F5 \uD575\uC2EC \uD544\uB4DC</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              <pre style="margin:0;font-size:10px;background:#1e293b;color:#e2e8f0;padding:8px;border-radius:4px;overflow-x:auto">{
  "status": "DONE",
  "totalAmount": 1000,
  "balanceAmount": 500,
  "cancels": [{
    "cancelAmount": 500,
    "canceledAt": "...",
    "transactionKey": "..."
  }]
}</pre>
              <div style="font-size:11px;color:#64748b;line-height:2;align-self:center">
                <b>status</b>: DONE (\uC794\uC5EC \uC788\uC73C\uBA74 \uC720\uC9C0)<br>
                <b>totalAmount</b>: \uC6D0\uB798 \uACB0\uC81C\uAE08\uC561<br>
                <b>balanceAmount</b>: \uCD94\uAC00 \uCDE8\uC18C \uAC00\uB2A5 \uC794\uC5EC\uC561<br>
                <b>cancels[]</b>: \uCDE8\uC18C \uC774\uB825 \uB204\uC801 \uBC30\uC5F4<br>
                <b>2\uCC28 \uBD80\uBD84\uCDE8\uC18C</b>: balanceAmount \uBC94\uC704 \uB0B4 \uC7AC\uD638\uCD9C
              </div>
            </div>
          </div>

          <!-- \uC0C1\uD0DC \uD750\uB984 -->
          <div>
            <div style="font-weight:600;color:#374151;margin-bottom:6px">\uBD80\uBD84\uCDE8\uC18C \uC0C1\uD0DC \uD750\uB984 \uC608\uC2DC (1,000\uC6D0 \uACB0\uC81C)</div>
            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;font-size:11px">
              <span style="background:#dcfce7;border:1px solid #86efac;border-radius:4px;padding:3px 8px;color:#166534">DONE<br>1,000\uC6D0</span>
              <span style="color:#94a3b8;font-size:16px">\u2192</span>
              <span style="background:#fff7ed;border:1px solid #fdba74;border-radius:4px;padding:3px 8px;color:#c2410c">1\uCC28 \uBD80\uBD84\uCDE8\uC18C<br>300\uC6D0</span>
              <span style="color:#94a3b8;font-size:16px">\u2192</span>
              <span style="background:#dcfce7;border:1px solid #86efac;border-radius:4px;padding:3px 8px;color:#166534">DONE<br>\uC794\uC5EC 700\uC6D0</span>
              <span style="color:#94a3b8;font-size:16px">\u2192</span>
              <span style="background:#fff7ed;border:1px solid #fdba74;border-radius:4px;padding:3px 8px;color:#c2410c">2\uCC28 \uBD80\uBD84\uCDE8\uC18C<br>700\uC6D0</span>
              <span style="color:#94a3b8;font-size:16px">\u2192</span>
              <span style="background:#fee2e2;border:1px solid #fca5a5;border-radius:4px;padding:3px 8px;color:#b91c1c">CANCELED<br>\uC794\uC5EC 0\uC6D0</span>
            </div>
            <div style="font-size:11px;color:#94a3b8;margin-top:4px">* \uC794\uC5EC \uAE08\uC561\uC744 \uBAA8\uB450 \uCDE8\uC18C\uD558\uBA74 \uC790\uB3D9\uC73C\uB85C CANCELED \uC804\uD658</div>
          </div>

          <!-- \uC8FC\uC758\uC0AC\uD56D -->
          <div style="background:#fff8f8;border:1px solid #fca5a5;border-radius:5px;padding:8px 10px;font-size:11px;color:#64748b;line-height:1.9">
            <span style="color:#dc2626;font-weight:600">\u26A0 \uC6B4\uC601 \uC8FC\uC758\uC0AC\uD56D</span><br>
            \u2022 <code>cancelAmount</code> \uC0DD\uB7B5 = <b>\uC804\uC561\uCDE8\uC18C</b> \u2014 \uBD80\uBD84\uCDE8\uC18C \uC2DC \uBC18\uB4DC\uC2DC \uAE08\uC561 \uBA85\uC2DC<br>
            \u2022 \uCDE8\uC18C \uAE08\uC561 &gt; balanceAmount \uC2DC \uD1A0\uC2A4 400 \uC5D0\uB7EC (<code>EXCEED_CANCEL_AMOUNT</code>)<br>
            \u2022 \uCFE0\uD3F0/\uD3EC\uC778\uD2B8 \uBCD1\uC6A9 \uACB0\uC81C \uC2DC \uCDE8\uC18C \uC6B0\uC120\uC21C\uC704: \uD604\uAE08(\uCE74\uB4DC) \uBA3C\uC800 \u2192 \uBB34\uC0C1\uC9C0\uAE09 \uB098\uC911 (\uD1A0\uC2A4 \uC815\uCC45)<br>
            \u2022 \uBD80\uBD84\uCDE8\uC18C\uB9C8\uB2E4 <code>od_refund</code> 1\uAC74 INSERT + <code>od_refund_method.refund_amt</code> \uAC31\uC2E0 \uD544\uC694 (\uC6B4\uC601 \uAD6C\uD604 \uC2DC)<br>
            \u2022 \uC774 \uD14C\uC2A4\uD2B8 \uD654\uBA74\uC740 <b>\uD1A0\uC2A4 API \uD638\uCD9C\uB9CC</b> \uC218\uD589 \u2014 DB \uB3C4\uBA54\uC778 \uD6C4\uCC98\uB9AC \uBBF8\uC5F0\uB3D9
          </div>

        </div>
      </div>
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.pay.toss." default-prop-key-filter="app.pay.toss" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/toss" default-key-filter="app.pay.toss" />
</div>`};
