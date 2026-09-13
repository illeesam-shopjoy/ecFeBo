window._odClaimDtlState=window._odClaimDtlState||{activeTab:"info",tabMode:"tab"},window.OdClaimDtl={name:"OdClaimDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(p){const{ref:O,reactive:f,computed:u,onMounted:K,watch:S}=Vue,m=window.boApp.showToast,Z=window.boApp.showConfirm,N=window.boApp.showRefModal,c=f({loading:!1,error:null,activeTab:window._odClaimDtlState.activeTab||"info",tabMode2:window._odClaimDtlState.tabMode||"tab"}),ee=Vue.toRef(c,"activeTab"),te=Vue.toRef(c,"tabMode2"),P=f({claim_statuses:[],claim_types:[]}),y=f([]),b=f(new Set),M=f({open:!1}),T=f({open:!1}),k=u(()=>!p.dtlId),a=f({claimId:"",memberId:"",memberNm:"",orderId:"",prodNm:"",claimTypeCd:"",claimStatusCd:"",reasonCd:"",reasonDetail:"",refundAmt:"",refundMethodCd:"",requestDate:"",memo:""}),ae=()=>{Object.assign(a,{claimTypeCd:"\uCDE8\uC18C",claimStatusCd:"\uC2E0\uCCAD",refundAmt:0,refundMethodCd:"\uACC4\uC88C\uD658\uBD88"})},x=f({}),oe=yup.object({claimId:yup.string().required("\uD074\uB808\uC784ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),orderId:yup.string().required("\uC8FC\uBB38ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),le=(e,t={})=>{if(e==="form-save")return se();if(e==="form-cancel")return p.navigate("__cancelEdit__");if(e==="form-edit")return p.navigate("__switchToEdit__");if(e==="form-close")return p.navigate("__closeDtl__");if(e==="orderPickModal-open"){M.open=!0;return}else if(e==="orderPickModal-close"){M.open=!1;return}else if(e==="memberPickModal-open"){T.open=!0;return}else if(e==="memberPickModal-close"){T.open=!1;return}else if(e==="orderId-clear"){a.orderId="";return}else if(e==="memberId-clear"){a.memberId="",a.memberNm="";return}else{if(e==="form-orderRef")return N("order",a.orderId);if(e==="form-memberRef")return N("member",a.memberId);if(e==="tab-change"){c.tabMode2==="tab"&&(c.activeTab=t);return}else if(e==="viewMode-change"){c.tabMode2=t;return}else if(e==="claimItems-toggleExpandAll"){z.value?b.clear():(b.clear(),y.forEach((o,l)=>b.add(l)));return}else{if(e==="tracking-open")return G(t.courier,t.trackingNo);if(e==="calc-open")return V();if(e==="calc-close"){r.show=!1;return}else console.warn("[handleBtnAction] unknown cmd:",e)}}},ne=(e,t={})=>{if(e==="claimItems-rowToggleExpand"){b.has(t)?b.delete(t):b.add(t);return}else console.warn("[handleSelectAction] unknown cmd:",e)},re=(e,t,o)=>{if(e==="cmPopup-order-pick"){M.open=!1,o&&(a.orderId=o.selId||"",(o.memberNm||o.userNm)&&(a.memberNm=o.memberNm||o.userNm||""));return}else if(e==="cmPopup-member-pick"){T.open=!1,o&&(a.memberId=o.selId||"",a.memberNm=o.selName||o.loginId||o.selId||"");return}},ie=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["CLAIM_STATUS_CD","CLAIM_TYPE_CD"],{compNm:"OdClaimDtl"}),P.claim_statuses=e.sgGetGrpCodes("CLAIM_STATUS_CD"),P.claim_types=e.sgGetGrpCodes("CLAIM_TYPE_CD")},E=u(()=>{const e=coConsts.CLAIM_TYPE_CD_MAP[a.claimTypeCd]||a.claimTypeCd||"CANCEL";return coConsts.CLAIM_STEP_MAP[e]||coConsts.CLAIM_STEP_MAP.CANCEL}),de=u(()=>(P.claim_statuses||[]).filter(e=>e.useYn==="Y").sort((e,t)=>e.sortOrd-t.sortOrd)),ce=u(()=>E.value.indexOf(a.claimStatusCd)),B=u(()=>E.value),R=async()=>{var e;if(!k.value){c.loading=!0;try{const t=await boApiSvc.odClaim.getById(p.dtlId,"\uD074\uB808\uC784\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),o=((e=t.data)==null?void 0:e.data)||t.data||{};Object.assign(a,{...o}),a.claimId||(a.claimId=p.dtlId),y.splice(0,y.length,...(o.claimItems||[]).map(l=>({...l,prodNm:l.prodNm,color:l.prodOption||"",size:"",qty:l.claimQty||1,salePrice:l.unitPrice||0,price:l.itemAmt||0,discAmount:l.discAmount||0,discInfo:l.discInfo||"",newProdId:l.newProdId||null,newProdSkuId:l.newProdSkuId||null,newProdOpt1Id:l.newProdOpt1Id||null,newProdOpt2Id:l.newProdOpt2Id||null,newProdNm:l.newProdNm||null,newProdOption:l.newProdOption||null,newQty:l.newQty||null,newUnitPrice:l.newUnitPrice||null}))),c.error=null}catch(t){console.error("[catch-info]",t),c.error=t.message}finally{c.loading=!1}}};K(async()=>{await ie(),await R(),p.active&&k.value&&ae()}),S(()=>p.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){c.activeTab="items";try{Object.keys(x).forEach(o=>delete x[o])}catch{}await R()}});const se=async()=>{var o,l;Object.keys(x).forEach(n=>delete x[n]);try{await oe.validate(a,{abortEarly:!1})}catch(n){console.error("[catch-info]",n),n.inner.forEach(i=>{x[i.path]=i.message}),coUtil.cofValidationToast(x,m);return}const e=k.value;if(await Z(e?"\uB4F1\uB85D":"\uC800\uC7A5",e?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const n=await(e?boApiSvc.odClaim.create({...a,refundAmt:Number(a.refundAmt)},"\uD074\uB808\uC784\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.odClaim.update(a.claimId,{...a,refundAmt:Number(a.refundAmt)},"\uD074\uB808\uC784\uAD00\uB9AC","\uC800\uC7A5"));m&&m(e?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),p.navigate&&p.navigate("odClaimMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const i=((l=(o=n.response)==null?void 0:o.data)==null?void 0:l.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";m&&m(i,"error",0)}};S(()=>c.activeTab,e=>{window._odClaimDtlState.activeTab=e}),S(()=>c.tabMode2,e=>{window._odClaimDtlState.tabMode=e});const me=e=>c.tabMode2!=="tab"||c.activeTab===e,w=e=>NumbercoUtil.cofWon(e),q=coConsts.CLAIM_TYPE_COLOR,U=e=>b.has(e),pe=(e,t)=>U(t)&&a.claimTypeCd==="EXCHANGE",z=u(()=>y.length>0&&window.safeArrayUtils.safeEvery(y,(e,t)=>b.has(t)));S(y,e=>{b.clear(),e.forEach((t,o)=>b.add(o))});const g=e=>a.claimTypeCd!=="EXCHANGE"?{}:{prodNm:e.newProdNm||"-",prodOption:e.newProdOption||"-",qty:e.newQty!=null?e.newQty:"-",unitPrice:e.newUnitPrice!=null?e.newUnitPrice:null,prodId:e.newProdId||null,prodSkuId:e.newProdSkuId||null,prodOpt1Id:e.newProdOpt1Id||null,prodOpt2Id:e.newProdOpt2Id||null,courier:a.exchangeCourierCd||null,trackingNo:a.exchangeTrackingNo||null},fe=(e,t)=>t?e==="CJ\uB300\uD55C\uD1B5\uC6B4"?"https://trace.cjlogistics.com/next/tracking.html?wblNo="+t:e==="\uB86F\uB370\uD0DD\uBC30"?"https://www.lotteglogis.com/open/tracking?invno="+t:e==="\uD55C\uC9C4\uD0DD\uBC30"?"https://www.hanjin.com/kor/CMS/DeliveryMgr/WaybillResult.do?mCode=MN038&wblnumText2="+t:e==="\uC6B0\uCCB4\uAD6D\uD0DD\uBC30"?"https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?sid1="+t:e==="\uB85C\uC820\uD0DD\uBC30"?"https://www.ilogen.com/web/personal/trace/"+t:"":"",G=(e,t)=>{const o=fe(e,t);if(!o){m&&m("\uC6B4\uC1A1\uC7A5 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}window.open(o,"dlivTrack","width=900,height=760,menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes")},H=u(()=>a.refundAmt||a.claimId?[{method:a.refundMethodCd||"-",status:a.claimStatusCd||"-",amount:a.refundAmt||0,payDate:a.requestDate||"-",account:a.refundAccount||"-",apprNo:a.apprNo||"-"}]:[]),Y=u(()=>{if(!a.claimId)return[];const e=coUtil.cofYmd(a.requestDate)||"-";return[{date:e+" 09:10",user:"\uD68C\uC6D0",from:"-",to:a.claimTypeCd+"\uC694\uCCAD",memo:a.claimTypeCd+" \uC811\uC218"},{date:e+" 11:30",user:"bo",from:a.claimTypeCd+"\uC694\uCCAD",to:"\uCC98\uB9AC\uC911",memo:"\uAC80\uD1A0 \uD6C4 \uCC98\uB9AC \uC2DC\uC791"},{date:e+" 15:00",user:"bo",from:"\uCC98\uB9AC\uC911",to:a.claimStatusCd,memo:"\uC0C1\uD0DC \uAC31\uC2E0"}]}),Q=u(()=>a.claimId?[{date:coUtil.cofYmd(a.requestDate)+" 10:00",user:"bo",field:"\uC0AC\uC720",before:"-",after:a.reasonCd||"-"},{date:coUtil.cofYmd(a.requestDate)+" 12:20",user:"bo",field:"\uD658\uBD88\uAE08\uC561",before:"0",after:(a.refundAmt||0).toLocaleString()}]:[]),ue=f([{id:"info",label:"\uC0C1\uC138\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"items",label:"\uD074\uB808\uC784\uD56D\uBAA9",icon:"\u21A9",get count(){return y.length}},{id:"payment",label:"\uACB0\uC81C\uC815\uBCF4",icon:"\u{1F4B3}",get count(){return H.value.length}},{id:"hist",label:"\uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825",icon:"\u{1F552}",get count(){return Y.value.length}},{id:"editHist",label:"\uC815\uBCF4\uC218\uC815\uC774\uB825",icon:"\u{1F4DD}",get count(){return Q.value.length}}]),be=u(()=>p.dtlMode==="view"),$=()=>{const e=new URLSearchParams;return e.set("page","odClaimDtl"),e.set("id",a.claimId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},ge=()=>{try{window.coExtSdk.shareKakao({title:`\uD074\uB808\uC784 ${a.claimId} - ShopJoy BO`,description:a.reasonDetail||a.claimTypeCd||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:$()})}catch(e){m(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},ye=async()=>{try{await navigator.clipboard.writeText($()),m("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){m(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},j=O(null),D=O(!1),he=async()=>{D.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uD074\uB808\uC784\uC0C1\uC138_${a.claimId}.pdf`);await window.boUtil.bofExportPdf(j.value,e,m)}finally{D.value=!1}},I={};I.paymentGrid=[{key:"method",label:"\uD658\uBD88\uC218\uB2E8"},{key:"status",label:"\uD658\uBD88\uC0C1\uD0DC",badge:()=>"badge-orange"},{key:"amount",label:"\uD658\uBD88\uAE08\uC561",style:"text-align:right;",fmt:e=>w(e),align:"right",cellStyle:"font-weight:700;"},{key:"payDate",label:"\uCC98\uB9AC\uC77C\uC2DC",fmt:e=>e?String(e).slice(0,16):"-"},{key:"account",label:"\uACC4\uC88C/\uCE74\uB4DC"},{key:"apprNo",label:"\uC2B9\uC778\uBC88\uD638"}],I.editHistGrid=[{key:"date",label:"\uC218\uC815\uC77C\uC2DC",style:"width:140px;"},{key:"user",label:"\uC218\uC815\uC790",style:"width:100px;"},{key:"field",label:"\uD56D\uBAA9",style:"width:120px;"},{key:"before",label:"\uBCC0\uACBD \uC804",cellStyle:"color:#888;"},{key:"after",label:"\uBCC0\uACBD \uD6C4",cellStyle:"color:#e8587a;font-weight:600;"}],I.claimItemGrid=[{key:"prodNm",label:"\uC0C1\uD488\uBA85"},{key:"color",label:"\uC0C9\uC0C1",style:"width:60px;",fmt:e=>e||"-"},{key:"size",label:"\uC0AC\uC774\uC988",style:"width:50px;",fmt:e=>e||"-"},{key:"qty",label:"\uC218\uB7C9",style:"width:44px;text-align:center;",align:"center",fmt:e=>e||1,cellStyle:"font-weight:600;"},{key:"salePrice",label:"\uD310\uB9E4\uAE08\uC561",style:"width:90px;text-align:right;",align:"right",fmt:(e,t)=>w(t.salePrice||t.price||0),cellStyle:"color:#666;"},{key:"discInfo",label:"\uD560\uC778\uC815\uBCF4",style:"width:80px;",cellStyle:"font-size:12px;",fmt:e=>e||"-",cellInnerStyle:e=>e?"font-size:11px;padding:2px 7px;border-radius:8px;background:#fff3e0;color:#e65100;font-weight:600;":"color:#bbb;"},{key:"discAmount",label:"\uD560\uC778\uAE08\uC561",style:"width:90px;text-align:right;",align:"right",fmt:e=>e?"-"+w(e):"-",cellStyle:"color:#d84315;font-weight:600;"},{key:"price",label:"\uACB0\uC81C\uAE08\uC561",style:"width:100px;text-align:right;",align:"right",fmt:e=>w(e||0),cellStyle:"font-weight:700;color:#1a1a1a;"},{key:"orderStatus",label:"\uC8FC\uBB38\uC0C1\uD0DC",style:"width:90px;text-align:center;",align:"center",fmt:()=>a.orderStatusCd||"-",cellInnerStyle:()=>a.orderStatusCd?"font-size:10.5px;padding:2px 7px;border-radius:8px;background:#eef4ff;color:#1e40af;font-weight:600;":"color:#ccc;"},{key:"claimStatus",label:"\uD074\uB808\uC784\uC0C1\uD0DC",style:"width:110px;text-align:center;",align:"center",fmt:()=>`${a.claimTypeCd||""} \xB7 ${a.claimStatusCd||""}`,cellInnerStyle:()=>`font-size:10px;padding:2px 8px;border-radius:8px;color:#fff;font-weight:700;background:${q[a.claimTypeCd]||"#9ca3af"};`},{key:"exchInfo",label:"\uAD50\uD658\uC815\uBCF4",style:"width:140px;",cellStyle:"font-size:12px;",trackBoxes:{items:()=>a.claimTypeCd!=="EXCHANGE"?[]:[...a.exchangeCourierCd?[{label:"\uBC1C\uC1A1",courier:a.exchangeCourierCd,trackingNo:a.exchangeTrackingNo,colorVariant:"blue"}]:[],...a.returnCourierCd?[{label:"\uC218\uAC70",courier:a.returnCourierCd,trackingNo:a.returnTrackingNo,colorVariant:"orange"}]:[]],onTrack:G}}],I.baseForm=[{key:"claimId",label:"\uD074\uB808\uC784ID",type:"text",required:!0,placeholder:"CLM-2026-XXX",readonly:!k.value},{key:"orderId",label:"\uC8FC\uBB38ID",type:"slot",name:"orderId",required:!0},{key:"memberId",label:"\uD68C\uC6D0ID",type:"slot",name:"memberId"},{key:"memberNm",label:"\uD68C\uC6D0\uBA85",type:"text"},{key:"claimTypeCd",label:"\uD074\uB808\uC784 \uC720\uD615",type:"select",options:()=>P.claim_types},{key:"claimStatusCd",label:"\uCC98\uB9AC \uC0C1\uD0DC",type:"select",nullLabel:"\uC0C1\uD0DC \uC120\uD0DD",options:()=>B.value.length?B.value:de.value.map(e=>e.codeLabel)},{key:"prodNm",label:"\uC0C1\uD488\uBA85",type:"text"},{key:"reasonCd",label:"\uC0AC\uC720",type:"text"},{key:"requestDate",label:"\uC2E0\uCCAD\uC77C",type:"text",placeholder:"2026-04-08 10:00"},{key:"reasonDetail",label:"\uC0C1\uC138 \uC0AC\uC720",type:"textarea",rows:3,colSpan:3}];const r=f({show:!1,loading:!1,claimId:"",data:null,orderClaims:[],switchLoading:!1}),F=async function(e,t){var o=await boApiSvc.odClaim.getById(e,"\uD074\uB808\uC784\uC0C1\uC138","\uACC4\uC0B0\uC870\uD68C"),l=o.data&&o.data.data||o.data||{},n=t||l.orderId||"",i={};if(n){var s=await boApiSvc.odOrder.getById(n,"\uD074\uB808\uC784\uC0C1\uC138","\uC8FC\uBB38\uC870\uD68C");i=s.data&&s.data.data||s.data||{}}var h=await boApiSvc.odClaim.getStatusHist(e,"\uD074\uB808\uC784\uC0C1\uC138","\uC0C1\uD0DC\uC774\uB825"),v=h.data&&h.data.data||[];return{claimData:l,orderData:i,statusHist:v,resolvedOrderId:n}},X=function(e,t){var o=e.claimItems||[],l=o.reduce(function(C,d){return C+(d.itemAmt||d.item_amt||(d.unitPrice||0)*(d.claimQty||1))},0),n=(t.orderItems||[]).reduce(function(C,d){return C+(d.itemOrderAmt||d.item_order_amt||(d.unitPrice||d.unit_price||d.salePrice||0)*(d.orderQty||d.order_qty||1))},0),i=t.payAmt||t.pay_amt||t.totalAmt||0,s=n>0?Math.min(1,l/n):i>0?Math.min(1,l/i):0,h=Math.round((t.couponDiscntAmt||t.couponDiscAmt||0)*s),v=Math.round((t.saveUseAmt||t.saveUsedAmt||0)*s),A=Math.round((t.cacheUsedAmt||0)*s),_=o.reduce(function(C,d){return C+(d.claimQty||1)},0),L=(t.orderItems||[]).reduce(function(C,d){return C+(d.orderQty||d.order_qty||1)},0),W=L>0&&_>=L,J=W&&(t.shippingFee||t.dlivFee)||0,we=Math.max(0,l-h-v-A+J);return{itemAmt:l,couponDiscAmt:h,saveUsedAmt:v,cacheUsedAmt:A,dlivFeeRefund:J,refundBase:we,isFullCancel:W,ratio:s,orderTotalAmt:i,couponNm:t.couponNm||"",saveGradePct:t.saveGradePct||0}},V=async function(){var h,v,A,_;var e=a.claimId||p.dtlId;r.claimId=e,r.data=null,r.orderClaims=[],r.loading=!0,r.show=!0;try{var{claimData:t,orderData:o,statusHist:l,resolvedOrderId:n}=await F(e,a.orderId||"");if(r.data={claim:t,order:o,calc:X(t,o),statusHist:l},n){var i=await boApiSvc.odClaim.getPage({orderId:n,pageNo:1,pageSize:100},"\uD074\uB808\uC784\uC0C1\uC138","\uC8FC\uBB38\uD074\uB808\uC784\uBAA9\uB85D").catch(function(){return null}),s=i&&(((v=(h=i.data)==null?void 0:h.data)==null?void 0:v.pageList)||((_=(A=i.data)==null?void 0:A.data)==null?void 0:_.list)||[])||[];r.orderClaims=s.length?s:[t]}}catch{m("\uACC4\uC0B0 \uC815\uBCF4 \uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0),r.show=!1}finally{r.loading=!1}},xe=async function(e){if(!(!e||!r.data)){var t=r.data.claim.claimId||r.data.claimId;if(e!==t){r.switchLoading=!0;try{var o=r.orderClaims.find(function(s){return s.claimId===e})||{},{claimData:l,orderData:n,statusHist:i}=await F(e,o.orderId||r.data.claim.orderId||a.orderId||"");r.data={claim:l,order:n,calc:X(l,n),statusHist:i}}catch{m("\uD074\uB808\uC784 \uC804\uD658 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0)}finally{r.switchLoading=!1}}}};return I.claimItemGridRowDetail=[{key:"_exchLabel",label:"\uAD50\uD658\uD488",type:"readonly",html:!0,fmt:()=>'<span style="font-size:11px;padding:2px 8px;border-radius:10px;background:#3b82f6;color:#fff;font-weight:800;">\u2194 \uAD50\uD658 \uC694\uCCAD</span>'},{key:"_exchProd",label:"\uAD50\uD658 \uC0C1\uD488\uBA85",type:"readonly",html:!0,fmt:(e,t)=>`<b style="color:#1e40af;">${g(t).prodNm||"-"}</b>`},{key:"_exchOption",label:"\uAD50\uD658 \uC635\uC158",type:"readonly",fmt:(e,t)=>g(t).prodOption||"-"},{key:"_exchQty",label:"\uAD50\uD658 \uC218\uB7C9",type:"readonly",fmt:(e,t)=>g(t).qty!=null?g(t).qty:"-"},{key:"_exchPrice",label:"\uAD50\uD658 \uB2E8\uAC00",type:"readonly",fmt:(e,t)=>g(t).unitPrice!=null?w(g(t).unitPrice):"-"},{key:"_priceDiff",label:"\uC815\uC0B0 \uCC28\uC561",type:"readonly",html:!0,fmt:(e,t)=>{const o=g(t);if(o.unitPrice==null||o.qty==null)return'<span style="color:#bbb;">-</span>';const l=o.unitPrice*o.qty-(t.unitPrice||0)*(t.qty||1);return`<b style="color:${l>0?"#d84315":l<0?"#059669":"#555"};">${l>=0?"+":""}${w(l)}</b>`}},{key:"_tracking",label:"\uBC1C\uC1A1\uCD94\uC801",type:"slot",name:"tracking",visible:e=>!!g(e).courier}],{columns:I,handleShareKakao:ge,handleCopyLink:ye,pdfAreaRef:j,pdfExporting:D,handleExportPdf:he,form:a,errors:x,claimItems:y,activeTab:ee,tabMode2:te,orderPick:M,memberPick:T,handleBtnAction:le,handleSelectAction:ne,fnCallbackModal:re,cfIsNew:k,cfDtlMode:be,cfClaimSteps:E,cfCurrentStepIdx:ce,tabs:ue,cfEditHistList:Q,cfPaymentList:H,cfStatusHistList:Y,cfAllExpanded:z,CLAIM_TYPE_COLOR:q,fmt:w,showTab:me,isExpanded:U,fnItemExpanded:pe,getExchangedItem:g,showRefModal:N,dtlCalcDialog:r,handleOpenDtlCalc:V,handleDtlCalcSwitch:xe}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uD074\uB808\uC784 \uC0C1\uC138' : (cfIsNew ? '\uD074\uB808\uC784 \uB4F1\uB85D' : (cfDtlMode ? '\uD074\uB808\uC784 \uC0C1\uC138' : '\uD074\uB808\uC784 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.claimId)">
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
  <bo-tab-bar :tabs="tabs" :tab="activeTab" :tab-mode="tabMode2"
    @tab-select="id => handleBtnAction('tab-change', id)"
    @mode-select="m => handleBtnAction('viewMode-change', m)" />
  <!-- ===== \u25A1. \uD0ED\uBC14 ====================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <div v-if="showTab('info')" class="dtl-pane">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uC0C1\uC138\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD074\uB808\uC784 \uC9C4\uD589 \uC0C1\uD0DC \uD750\uB984 ======================================== -->
      <div style="margin-bottom:20px;padding:16px 18px;background:#f6f6f6;border-radius:10px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;">
          <span :style="{
            fontSize:'11px',padding:'3px 10px',borderRadius:'10px',color:'#fff',fontWeight:800,
            background: CLAIM_TYPE_COLOR[form.claimTypeCd] || '#9ca3af',
            }">
            \u21A9 {{ form.claimTypeCd || (cfIsNew ? '\uC2E0\uADDC \uD074\uB808\uC784' : '') }}
          </span>
          <span style="font-size:13px;font-weight:700;color:#222;">{{ form.claimId }}</span>
          <span v-if="form.requestDate" style="font-size:11px;color:#888;">\uC2E0\uCCAD\uC77C: {{ form.requestDate }}</span>
          <span v-if="form.reasonDetail" style="font-size:11px;color:#888;">\uC0AC\uC720: {{ form.reasonDetail }}</span>
          <button v-if="!cfIsNew" class="btn btn-xs" style="margin-left:auto;background:#059669;color:#fff;border:none;padding:2px 8px;" @click="handleBtnAction('calc-open')">\u{1F4B0} \uACC4\uC0B0</button>
        </div>
        <div style="display:flex;align-items:flex-start;overflow-x:auto;">
          <template v-for="(step, idx) in cfClaimSteps" :key="step">
            <div style="display:flex;flex-direction:column;align-items:center;min-width:80px;flex:1;">
              <div :style="{
                width: idx === cfCurrentStepIdx ? '14px' : '10px',
                height: idx === cfCurrentStepIdx ? '14px' : '10px',
                borderRadius:'50%', marginBottom:'6px', flexShrink:0, transition:'all .15s',
                boxShadow: idx === cfCurrentStepIdx ? '0 0 0 3px '+(CLAIM_TYPE_COLOR[form.claimTypeCd]||'#9ca3af')+'40' : 'none',
                background: idx <= cfCurrentStepIdx ? (CLAIM_TYPE_COLOR[form.claimTypeCd]||'#9ca3af') : '#bbb',
                }"></div>
              <div :style="{
                fontSize:'11.5px', fontWeight: idx === cfCurrentStepIdx ? 800 : 600,
                color: idx === cfCurrentStepIdx ? (CLAIM_TYPE_COLOR[form.claimTypeCd]||'#9ca3af') : (idx < cfCurrentStepIdx ? '#444' : '#bbb'),
                whiteSpace:'nowrap', textAlign:'center',
                }">
                {{ step }}
              </div>
              <span v-if="step==='\uC218\uAC70\uC911' ? (form.returnTrackingNo) : false" @click="handleBtnAction('tracking-open', { courier: form.returnCourierCd, trackingNo: form.returnTrackingNo })" title="\uC218\uAC70 \uBC30\uC1A1\uC870\uD68C" style="margin-top:4px;padding:1px 7px;border:1px solid #fed7aa;background:#fff7ed;color:#c2410c;border-radius:4px;font-size:0.7rem;font-weight:700;user-select:none;">
                {{ (form.returnCourierCd||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','') || 'CJ' }}\uC218\uAC70 \u{1F50D}
              </span>
              <span v-if="step==='\uC644\uB8CC' ? (form.exchangeTrackingNo) : false" @click="handleBtnAction('tracking-open', { courier: form.exchangeCourierCd, trackingNo: form.exchangeTrackingNo })" title="\uBC1C\uC1A1 \uBC30\uC1A1\uC870\uD68C" style="margin-top:4px;padding:1px 7px;border:1px solid #93c5fd;background:#dbeafe;color:#1d4ed8;border-radius:4px;font-size:0.7rem;font-weight:700;user-select:none;">
                {{ (form.exchangeCourierCd||'').replace('\uB300\uD55C\uD1B5\uC6B4','').replace('\uD0DD\uBC30','') || 'CJ' }}\uBC1C\uC1A1 \u{1F50D}
              </span>
            </div>
            <div v-if="idx < cfClaimSteps.length - 1"
              :style="{flex:'1', height:'2px', minWidth:'12px', marginTop:'6px',
              background: idx < cfCurrentStepIdx ? (CLAIM_TYPE_COLOR[form.claimTypeCd]||'#9ca3af') : '#bbb'}"></div>
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
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC8FC\uBB38ID + \uC120\uD0DD/\uCD08\uAE30\uD654/\uBCF4\uAE30 ===================================== -->
        <template #orderId>
          <div style="display:flex;gap:6px;align-items:center;">
            <input class="form-control" v-model="form.orderId" placeholder="ORD-2026-XXX" :readonly="cfDtlMode" :class="errors.orderId ? 'is-invalid' : ''" style="flex:1;"
              @input="form.orderId && errors.orderId ? delete errors.orderId : null" />
            <span v-if="!cfDtlMode" style="display:inline-flex;align-items:center;">
              <button class="btn btn-sm btn-secondary" style="padding:2px 7px;" @click="handleBtnAction('orderPickModal-open')" title="\uC120\uD0DD">\u{1F50D}</button>
              <button v-if="form.orderId" type="button" style="background:none;border:none;padding:0 4px;color:#bbb;cursor:pointer;font-size:11px;line-height:1;" @click="handleBtnAction('orderId-clear')" title="\uCD08\uAE30\uD654">x</button>
            </span>
            <span v-if="form.orderId" class="ref-link" @click="handleBtnAction('form-orderRef')">\uBCF4\uAE30</span>
          </div>
          <span v-if="errors.orderId" class="field-error">{{ errors.orderId }}</span>
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD68C\uC6D0ID + \uC120\uD0DD/\uCD08\uAE30\uD654/\uBCF4\uAE30 ===================================== -->
        <template #memberId>
          <div style="display:flex;gap:6px;align-items:center;">
            <input class="form-control" v-model="form.memberId" placeholder="\uD68C\uC6D0 ID" :readonly="cfDtlMode" style="flex:1;" />
            <span v-if="!cfDtlMode" style="display:inline-flex;align-items:center;">
              <button class="btn btn-sm btn-secondary" style="padding:2px 7px;" @click="handleBtnAction('memberPickModal-open')" title="\uC120\uD0DD">\u{1F50D}</button>
              <button v-if="form.memberId" type="button" style="background:none;border:none;padding:0 4px;color:#bbb;cursor:pointer;font-size:11px;line-height:1;" @click="handleBtnAction('memberId-clear')" title="\uCD08\uAE30\uD654">x</button>
            </span>
            <span v-if="form.memberId" class="ref-link" @click="handleBtnAction('form-memberRef')">\uBCF4\uAE30</span>
          </div>
        </template>
      </bo-form-area>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD074\uB808\uC784\uD56D\uBAA9\uBAA9\uB85D \uD0ED ============================================= -->
    <div v-if="showTab('items')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u21A9 \uD074\uB808\uC784\uD56D\uBAA9 <span class="tab-count"> {{ claimItems.length }} </span></div>
      <div v-if="form.claimTypeCd==='EXCHANGE'" style="display:flex;justify-content:flex-end;margin-bottom:10px;">
        <button class="btn btn-secondary btn-sm" @click="handleBtnAction('claimItems-toggleExpandAll')">
          {{ cfAllExpanded ? '\u25B2 \uAD50\uD658\uD488 \uBAA8\uB450\uC811\uAE30' : '\u25BC \uAD50\uD658\uD488 \uBAA8\uB450\uD3BC\uCE58\uAE30' }}
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.claimItemGrid" :rows="claimItems"
        :is-expanded="fnItemExpanded"
        empty-text="\uD074\uB808\uC784 \uD56D\uBAA9 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.">
        <template #cell-prodNm="{ row, idx }">
          <td style="font-size:12px;">
            <span v-if="form.claimTypeCd==='EXCHANGE'" @click="handleSelectAction('claimItems-rowToggleExpand', idx)" style="font-size:11px;color:#3b82f6;font-weight:800;user-select:none;margin-right:6px;" :title="isExpanded(idx)?'\uAD50\uD658\uD488 \uC228\uAE30\uAE30':'\uAD50\uD658\uD488 \uBCF4\uAE30'">
              {{ isExpanded(idx) ? '\u25BC' : '\u25B6' }}
            </span>
            {{ row.prodNm }}
          </td>
        </template>
        <template #row-expand="{ row, colspan }">
          <td :colspan="colspan" style="padding:10px 14px;background:#f0f7ff;">
            <bo-form-area plain-readonly :columns="columns.claimItemGridRowDetail" :form="row" :cols="3" compact readonly label-left :show-actions="false">
              <template #tracking>
                <div class="readonly-field" @click="handleBtnAction('tracking-open', { courier: getExchangedItem(row).courier, trackingNo: getExchangedItem(row).trackingNo })" style="padding:2px 8px;border:1px solid #93c5fd;background:#dbeafe;color:#1d4ed8;border-radius:4px;font-size:11px;font-weight:700;display:inline-block;cursor:pointer;">
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
            <td style="width:90px;text-align:right;color:#666;">{{ fmt(claimItems.reduce((s,x)=>s+(x.salePrice||x.price||0),0)) }}</td>
            <td style="width:80px;"></td>
            <td style="width:90px;text-align:right;color:#d84315;">-{{ fmt(claimItems.reduce((s,x)=>s+(x.discAmount||0),0)) }}</td>
            <td style="width:100px;text-align:right;color:#1a1a1a;">{{ fmt(claimItems.reduce((s,x)=>s+(x.price||0),0)) }}</td>
            <td colspan="3"></td>
          </tr>
        </template>
      </bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uD074\uB808\uC784\uD56D\uBAA9\uBAA9\uB85D \uD0ED ============================================= -->
    <!-- ===== \u25A0.\u25A0. \uACB0\uC81C\uC815\uBCF4 \uD0ED ================================================ -->
    <div v-if="showTab('payment')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4B3} \uACB0\uC81C\uC815\uBCF4 <span class="tab-count"> {{ cfPaymentList.length }} </span></div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.paymentGrid" :rows="cfPaymentList" empty-text="\uACB0\uC81C\xB7\uD658\uBD88 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."></bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uACB0\uC81C\uC815\uBCF4 \uD0ED ================================================ -->
    <!-- ===== \u25A0.\u25A0. \uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825 \uD0ED ============================================== -->
    <div v-if="showTab('hist')" class="dtl-pane">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title" style="margin-bottom:10px;padding:0 0 10px 0;">
        \u{1F552} \uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825
        <span class="tab-count">{{ cfStatusHistList.length }}</span>
      </div>
      <od-claim-hist :claim-id="form.claimId" :navigate="navigate" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uC0C1\uD0DC\uBCC0\uACBD\uC774\uB825 \uD0ED ============================================== -->
    <!-- ===== \u25A0.\u25A0. \uC815\uBCF4\uC218\uC815\uC774\uB825 \uD0ED ============================================== -->
    <div v-if="showTab('editHist')" class="dtl-pane" style="padding:20px;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4DD} \uC815\uBCF4\uC218\uC815\uC774\uB825 <span class="tab-count"> {{ cfEditHistList.length }} </span></div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.editHistGrid" :rows="cfEditHistList" empty-text="\uC815\uBCF4 \uC218\uC815 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."></bo-grid>
    </div>
  </div>
  <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
</bo-container>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
</div>
<!-- ===== \u25A1.\u25A1. \uC815\uBCF4\uC218\uC815\uC774\uB825 \uD0ED ============================================== -->
<!-- ===== \u25A0. \uC8FC\uBB38 \uC120\uD0DD \uBAA8\uB2EC ================================================= -->
<div v-if="orderPick.open">
  <bo-cm-popup-modal popup-cmd="cmPopup-order-pick" popup-code="order" :on-callback="fnCallbackModal" @close="handleBtnAction('orderPickModal-close')" />
</div>
<!-- ===== \u25A0. \uD68C\uC6D0 \uC120\uD0DD \uBAA8\uB2EC ================================================= -->
<bo-cm-popup-modal popup-cmd="cmPopup-member-pick" popup-code="member" :show="memberPick.open" :on-callback="fnCallbackModal" @close="handleBtnAction('memberPickModal-close')" />
<!-- ===== \u25A0. \uD658\uBD88 \uACC4\uC0B0 \uBAA8\uB2EC ================================================= -->
<od-claim-calc-modal :show="dtlCalcDialog.show" :claim-id="dtlCalcDialog.claimId" @close="handleBtnAction('calc-close')" />
`};
