window._pmCouponDtlState=window._pmCouponDtlState||{tab:"info",tabMode:"tab"},window._pmCouponDtlState.tabMode||(window._pmCouponDtlState.tabMode="tab"),window.PmCouponDtl={name:"PmCouponDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(c){const{ref:O,reactive:u,computed:p,onMounted:Y,watch:C,onBeforeUnmount:xe,nextTick:we}=Vue,l=window.boApp.showToast,U=window.boApp.showConfirm,m=u([]),a=u({loading:!1,showVendorModal:!1,showMdModal:!1,showTargetPicker:!1,error:null,tab:window._pmCouponDtlState.tab||"info",tabMode2:window._pmCouponDtlState.tabMode||"tab",previewTab:"barcode",barcodeContainer:null,qrcodeContainer:null}),j=Vue.toRef(a,"tab"),J=Vue.toRef(a,"tabMode2"),r=u({COUPON_STATUS_DTL:[],COUPON_TYPE:[],PM_PROD_TARGET:[],PM_ISSUE_GRADE:[],COUPON_USE_LIMIT:[],COUPON_ISSUE_DISP:[],COUPON_TARGET:[],COUPON_APPLY:[],COUPON_DISC_TYPE:[],COUPON_APPLY_SCOPE_CD:[]}),o=u({couponId:null,couponTypeCd:"",couponCd:"",couponNm:"",applyScopeCd:"",discountType:"",discountVal:"",discountRate:null,discountAmt:null,minOrderAmt:"",maxDiscountAmt:"",couponStatusCd:"",validFrom:"",validTo:"",issueLimit:"",useLimit:"",targetTypeCd:"PRODUCT",issueTargets:[],issueMethods:"",issueCondition:"",memGradeCd:"",issueGrades:[],useScope:"",useExclude:"",useRemark:"",memo:"",vendorId:"",chargeStaff:"",mdUserId:"",mdUserNm:""}),q=()=>{Object.assign(o,{couponTypeCd:"\uC0C1\uD488\uD560\uC778\uCFE0\uD3F0",discountType:"amount",discountVal:0,minOrderAmt:0,maxDiscountAmt:0,couponStatusCd:"\uD65C\uC131",validFrom:T,validTo:P,issueLimit:0,useLimit:"unlimited",targetTypeCd:"PRODUCT",issueMethods:"auto",issueCondition:"all",useScope:"all"})},f=u({}),y=new Date,A=e=>String(e).padStart(2,"0"),T=`${y.getFullYear()}-${A(y.getMonth()+1)}-${A(y.getDate())}`,P=`${y.getFullYear()+1}-12-31`,$=yup.object({couponNm:yup.string().required("\uCFE0\uD3F0\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),couponCd:yup.string().required("\uCFE0\uD3F0\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),discountVal:yup.number().min(0).required("\uD560\uC778\uAC12\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),validTo:yup.string().required("\uB9CC\uB8CC\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),b=p(()=>!c.dtlId),D=p(()=>c.dtlMode==="view"),H=p(()=>[{key:"targetTypeCd",label:"\uAD6C\uBD84",style:"width:70px;",align:"center",fmt:e=>(r.PM_PROD_TARGET.find(t=>t.codeValue===e)||{}).codeLabel||e||"-"},{key:"targetId",label:"\uB300\uC0C1 ID",mono:!0,cellStyle:"font-size:11px;"},{key:"targetNm",label:"\uB300\uC0C1\uBA85",fmt:e=>e||"-"},...D.value?[]:[{key:"_del",label:"\uC0AD\uC81C",style:"width:60px;",align:"center",fmt:()=>"\u2715",link:!0,cellStyle:"color:#e8587a;cursor:pointer;font-weight:700;"}]]),k=p(()=>c.dtlId||o.couponId||null),h=p(()=>!!k.value),N=p(()=>{const e=a.tab;return e==="info"?!1:h.value?e!=="detail":!0}),S=(e,t={})=>{if(e==="form-save")return ce();if(e==="form-cancel")return c.navigate("__cancelEdit__");if(e==="form-close")return c.navigate("__closeDtl__");if(e==="form-edit")return c.navigate("__switchToEdit__");if(e==="form-delete")return pe();if(e==="tab-select")return de(t);if(e==="tab-mode"){a.tabMode2=t;return}else{if(e==="previewTab-change")return ae(t);if(e==="vendorModal-open"){a.showVendorModal=!0;return}else if(e==="vendorModal-close"){a.showVendorModal=!1;return}else if(e==="form-vendorClear"){o.vendorId="",o.chargeStaff="";return}else if(e==="mdModal-open"){a.showMdModal=!0;return}else if(e==="form-mdClear"){o.mdUserId="",o.mdUserNm="";return}else if(e==="target-add"){a.showTargetPicker=!0;return}else{if(e==="target-remove")return K(t);if(e==="target-close"){a.showTargetPicker=!1;return}else console.warn("[handleBtnAction] unknown cmd:",e)}}},Q=(e,t={})=>{if(e==="vendorModal-select")return L(t.vendorId,t.vendorNm);console.warn("[handleSelectAction] unknown cmd:",e)},W=(e,t,i,n={})=>{if(t==="_del")return S("target-remove",n.rowIndex)},x=async e=>{var i;if(a.showTargetPicker=!1,!e)return;const t=String(e.selId||"");if(t){if(o.issueTargets.some(n=>n.targetId===t&&n.targetTypeCd===o.targetTypeCd)){l("\uC774\uBBF8 \uCD94\uAC00\uB41C \uB300\uC0C1\uC785\uB2C8\uB2E4.","error");return}try{const n=await boApiSvc.pmCouponItem.create({couponId:k.value,targetTypeCd:o.targetTypeCd,targetId:t},"\uCFE0\uD3F0\uAD00\uB9AC","\uBC1C\uAE09\uB300\uC0C1\uCD94\uAC00"),s=((i=n.data)==null?void 0:i.data)||n.data;o.issueTargets.push({couponItemId:s.couponItemId,targetId:t,targetNm:e.selName||t,targetTypeCd:o.targetTypeCd})}catch(n){l(coUtil.cofErrMsg(n),"error",0)}}},K=async e=>{const t=o.issueTargets[e];if(t)try{await boApiSvc.pmCouponItem.remove(t.couponItemId,"\uCFE0\uD3F0\uAD00\uB9AC","\uBC1C\uAE09\uB300\uC0C1\uC0AD\uC81C"),o.issueTargets.splice(e,1)}catch(i){l(coUtil.cofErrMsg(i),"error",0)}},Z=(e,t,i)=>{if(e==="cmPopup-vendor-pick"){if(i==null){a.showVendorModal=!1;return}return L(i.selId,i.selName)}else if(e==="cmPopup-userMd-pick"){if(i==null){a.showMdModal=!1;return}o.mdUserId=i.selId||"",o.mdUserNm=i.selName||"",a.showMdModal=!1;return}else{if(e==="cmPopup-target-prod-pick")return x(i);if(e==="cmPopup-target-brand-pick")return x(i);if(e==="cmPopup-target-category-pick")return x(i);if(e==="cmPopup-vendor-target-pick")return x(i);console.warn("[fnCallbackModal] unknown popCmd:",e)}},X=async()=>{var e,t,i,n;try{const s=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"\uCFE0\uD3F0\uAD00\uB9AC","\uC870\uD68C");m.splice(0,m.length,...((t=(e=s.data)==null?void 0:e.data)==null?void 0:t.pageList)||((n=(i=s.data)==null?void 0:i.data)==null?void 0:n.list)||[])}catch(s){console.warn("[PmCouponDtl] vendor load failed",s)}},E=async()=>{var e,t;if(await X(),!b.value){a.loading=!0;try{const i=await boApiSvc.pmCoupon.getById(c.dtlId,"\uCFE0\uD3F0\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),n=((e=i.data)==null?void 0:e.data)||i.data;n&&Object.assign(o,{...n}),n&&(n.discountRate!=null&&n.discountRate!==""?(o.discountType="percent",o.discountVal=Number(n.discountRate)||0):(o.discountType="amount",o.discountVal=Number(n.discountAmt)||0)),o.validFrom||(o.validFrom=T),o.validTo||(o.validTo=P);try{const s=await boApiSvc.pmCouponItem.getList({couponId:c.dtlId},"\uCFE0\uD3F0\uAD00\uB9AC","\uBC1C\uAE09\uB300\uC0C1\uC870\uD68C"),w=((t=s.data)==null?void 0:t.data)||s.data||[];o.issueTargets=w.map(d=>({couponItemId:d.couponItemId,targetId:d.targetId,targetNm:d.targetId,targetTypeCd:d.targetTypeCd}))}catch(s){console.warn("[PmCouponDtl.js] coupon-item load failed",s)}a.error=null}catch(i){console.error("[catch-info]",i),a.error=i.message}finally{a.loading=!1}}};C(()=>a.tab,e=>{window._pmCouponDtlState.tab=e}),C(()=>a.tabMode2,e=>{window._pmCouponDtlState.tabMode=e});const ee=e=>a.tabMode2!=="tab"||a.tab===e,oe=u([{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"detail",label:"\uC0C1\uC138\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"issued",label:"\uBC1C\uAE09\uBAA9\uB85D",icon:"\u{1F4CA}"},{id:"used",label:"\uC0AC\uC6A9\uBAA9\uB85D",icon:"\u2705"},{id:"preview",label:"\uBBF8\uB9AC\uBCF4\uAE30",icon:"\u{1F441}"}]),te=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["COUPON_STATUS_DTL","COUPON_TYPE_CD","PM_PROD_TARGET","PM_ISSUE_GRADE","COUPON_USE_LIMIT","COUPON_ISSUE_DISP","COUPON_TARGET","COUPON_APPLY","COUPON_DISC_TYPE","COUPON_APPLY_SCOPE_CD"],{compNm:"PmCouponDtl"}),r.COUPON_STATUS_DTL=e.sgGetGrpCodes("COUPON_STATUS_DTL"),r.COUPON_TYPE=e.sgGetGrpCodes("COUPON_TYPE_CD"),r.PM_PROD_TARGET=e.sgGetGrpCodes("PM_PROD_TARGET"),r.PM_ISSUE_GRADE=e.sgGetGrpCodes("PM_ISSUE_GRADE"),r.COUPON_USE_LIMIT=e.sgGetGrpCodes("COUPON_USE_LIMIT"),r.COUPON_ISSUE_DISP=e.sgGetGrpCodes("COUPON_ISSUE_DISP"),r.COUPON_TARGET=e.sgGetGrpCodes("COUPON_TARGET"),r.COUPON_APPLY=e.sgGetGrpCodes("COUPON_APPLY"),r.COUPON_DISC_TYPE=e.sgGetGrpCodes("COUPON_DISC_TYPE"),r.COUPON_APPLY_SCOPE_CD=e.sgGetGrpCodes("COUPON_APPLY_SCOPE_CD")},z=()=>{c.active&&b.value&&(o.validFrom||(o.validFrom=T),o.validTo||(o.validTo=P))};Y(async()=>{await te(),await E(),c.active&&b.value&&q(),z()}),C(()=>c.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(f).forEach(i=>delete f[i])}catch{}await E(),z()}});const ie=p(()=>{if(!o.vendorId)return"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD";const e=m.find(t=>t.vendorId===o.vendorId);return e?e.vendorNm:"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD"}),L=(e,t)=>{o.vendorId=e;const i=m.find(n=>n.vendorId===e);i&&(o.chargeStaff=i.chargeStaff||i.ceoNm||i.vendorNm||""),a.showVendorModal=!1},R=p(()=>o.issuedList||[]),G=p(()=>o.usedList||[]),ae=e=>{a.previewTab=e,Vue.nextTick(()=>{if(e==="barcode"&&a.barcodeContainer&&typeof JsBarcode!="undefined")try{_.value.innerHTML="",JsBarcode(a.barcodeContainer,o.couponCd||"SAMPLE",{format:"CODE128",width:2,height:60,displayValue:!0})}catch{}if(e==="qrcode"&&a.qrcodeContainer&&typeof QRCode!="undefined"){I.value.innerHTML="";try{new QRCode(a.qrcodeContainer,{text:o.couponCd?`https://shopjoy.com/coupon/${o.couponCd}`:"https://shopjoy.com/coupon/sample",width:150,height:150,colorDark:"#222222",colorLight:"#ffffff"})}catch{}}})},ne=()=>{if(a.barcodeContainer&&typeof JsBarcode!="undefined")try{_.value.innerHTML="",JsBarcode(a.barcodeContainer,o.couponCd||"SAMPLE",{format:"CODE128",width:2,height:60,displayValue:!0})}catch{}},re=()=>{if(a.qrcodeContainer&&typeof QRCode!="undefined")try{I.value.innerHTML="",new QRCode(a.qrcodeContainer,{text:o.couponCd?`https://shopjoy.com/coupon/${o.couponCd}`:"https://shopjoy.com/coupon/sample",width:150,height:150,colorDark:"#222222",colorLight:"#ffffff"})}catch{}},de=e=>{a.tab=e,e==="preview"&&Vue.nextTick(()=>{ne(),re()})},le=(e,t)=>{l&&l(t,"success")},se=e=>{var i,n;console.error("[handleSave]",e);const t=((n=(i=e.response)==null?void 0:i.data)==null?void 0:n.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(t,"error",0)},ce=async()=>{var n,s,w;const e=a.tab;if(N.value){!h.value&&e!=="info"&&l("\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e!=="info"&&e!=="detail")return;Object.keys(f).forEach(d=>delete f[d]);try{await $.validate(o,{abortEarly:!1})}catch(d){d.inner.forEach(v=>{f[v.path]=v.message}),coUtil.cofValidationToast(f,l);return}const t=!h.value;if(await U(t?"\uB4F1\uB85D":"\uC800\uC7A5",t?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const d={...o};o.discountType==="percent"?(d.discountRate=o.discountVal,d.discountAmt=null):(d.discountAmt=o.discountVal,d.discountRate=null);const v=t?await boApiSvc.pmCoupon.create(d,"\uCFE0\uD3F0\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.pmCoupon.update(k.value,d,"\uCFE0\uD3F0\uAD00\uB9AC",e==="info"?"\uAE30\uBCF8\uC815\uBCF4\uC800\uC7A5":"\uC0C1\uC138\uC815\uBCF4\uC800\uC7A5");if(t){const F=((s=(n=v.data)==null?void 0:n.data)==null?void 0:s.couponId)||((w=v.data)==null?void 0:w.couponId)||null;F&&(o.couponId=F)}le(v,t?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0ED\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(d){se(d)}},pe=async()=>{var t,i;if(!(b.value||!o.couponId||!await U("\uC0AD\uC81C",`[${o.couponNm}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.pmCoupon.remove(o.couponId,"\uCFE0\uD3F0\uAD00\uB9AC","\uC0AD\uC81C"),l("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),c.navigate("pmCouponMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const s=((i=(t=n.response)==null?void 0:t.data)==null?void 0:i.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(s,"error",0)}},_=Vue.toRef(a,"barcodeContainer"),Te=Vue.toRef(a,"previewTab"),I=Vue.toRef(a,"qrcodeContainer"),fe=Vue.toRef(a,"showVendorModal"),ue=Vue.toRef(a,"showMdModal"),me=Vue.toRef(a,"showTargetPicker"),g={};g.issuedGrid=[{key:"code",label:"\uCFE0\uD3F0\uCF54\uB4DC",fmt:e=>e||"-"},{key:"target",label:"\uBC1C\uAE09\uB300\uC0C1",fmt:e=>e||"-"},{key:"issuedDate",label:"\uBC1C\uAE09\uC77C\uC2DC",fmt:e=>e||"-"},{key:"expiryDate",label:"\uC720\uD6A8\uAE30\uAC04",fmt:e=>e||"-"},{key:"status",label:"\uC0C1\uD0DC",badge:e=>e.status==="\uC0AC\uC6A9"?"badge-blue":"badge-green",fmt:e=>e||"\uBBF8\uC0AC\uC6A9"}],g.usedGrid=[{key:"code",label:"\uCFE0\uD3F0\uCF54\uB4DC",fmt:e=>e||"-"},{key:"userId",label:"\uC0AC\uC6A9\uC790",fmt:e=>e||"-"},{key:"orderId",label:"\uC8FC\uBB38ID",fmt:e=>e||"-"},{key:"orderAmt",label:"\uC8FC\uBB38\uAE08\uC561",fmt:e=>coUtil.cofWon(e)},{key:"discountAmt",label:"\uD560\uC778\uC561",cellStyle:"color:#e8587a;font-weight:600",fmt:e=>"-"+coUtil.cofWon(e)},{key:"usedDate",label:"\uC0AC\uC6A9\uC77C\uC2DC",fmt:e=>e||"-"}];const ge=p(()=>R.value.slice(0,10)),ve=p(()=>G.value.slice(0,10)),V=()=>{const e=new URLSearchParams;return e.set("page","pmCouponDtl"),e.set("id",o.couponId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},be=()=>{try{window.coExtSdk.shareKakao({title:`\uCFE0\uD3F0 ${o.couponId} - ShopJoy BO`,description:o.couponNm||o.couponCd||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:V()})}catch(e){l(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},ye=async()=>{try{await navigator.clipboard.writeText(V()),l("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){l(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},B=O(null),M=O(!1),he=async()=>{M.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uCFE0\uD3F0\uC0C1\uC138_${o.couponId}.pdf`);await window.boUtil.bofExportPdf(B.value,e,l)}finally{M.value=!1}};return g.infoForm=[{type:"group",label:"\uAE30\uBCF8\uC815\uBCF4 \xB7 \uD560\uC778\uC870\uAC74"},{key:"couponTypeCd",label:"\uCFE0\uD3F0 \uD0C0\uC785",type:"select",nullable:!1,options:()=>r.COUPON_TYPE},{key:"applyScopeCd",label:"\uC801\uC6A9\uBC94\uC704",type:"select",nullable:!1,options:()=>r.COUPON_APPLY_SCOPE_CD,hint:'\uC8FC\uBB38\uD560\uC778/\uC0C1\uD488\uD560\uC778/\uBC30\uC1A1\uBE44\uD560\uC778 \u2014 \uC0C1\uD488\uC0C1\uC138 \uD504\uB85C\uBAA8\uC158\uD0ED\uC758 "\uD68C\uC6D0 \uC801\uC6A9\uAC00\uB2A5 \uCFE0\uD3F0" \uBD84\uB958 \uAE30\uC900'},{key:"couponNm",label:"\uCFE0\uD3F0\uBA85",type:"text",required:!0,placeholder:"\uCFE0\uD3F0\uBA85 \uC785\uB825"},{key:"couponCd",label:"\uCFE0\uD3F0\uCF54\uB4DC",type:"text",required:!0,placeholder:"\uCF54\uB4DC \uC790\uB3D9\uC0DD\uC131/\uC9C1\uC811\uC785\uB825",mono:!0},{key:"couponStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>r.COUPON_STATUS_DTL},{key:"discountType",label:"\uD560\uC778 \uC720\uD615",type:"select",options:()=>r.COUPON_DISC_TYPE},{key:"discountVal",label:"\uD560\uC778\uAC12",type:"number",required:!0},{key:"minOrderAmt",label:"\uCD5C\uC18C\uC8FC\uBB38\uAE08\uC561 (\uC6D0)",type:"number",placeholder:"0"},{key:"maxDiscountAmt",label:"\uCD5C\uB300\uD560\uC778\uAE08\uC561 (\uC6D0)",type:"number",placeholder:"0 = \uBB34\uC81C\uD55C"},{type:"group",label:"\uBC1C\uAE09 \xB7 \uB2F4\uB2F9\uC815\uBCF4"},{key:"validFrom",label:"\uC2DC\uC791\uC77C",type:"date"},{key:"validTo",label:"\uB9CC\uB8CC\uC77C",type:"date",required:!0},{key:"issueLimit",label:"\uCD1D \uBC1C\uAE09\uC218\uB7C9",type:"number",placeholder:"0 = \uBB34\uC81C\uD55C"},{key:"useLimit",label:"\uC0AC\uC6A9 \uC81C\uD55C",type:"select",nullable:!1,options:()=>r.COUPON_USE_LIMIT},{key:"memo",label:"\uBA54\uBAA8",type:"slot",name:"memo",colSpan:2},{key:"vendorId",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"pick",placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",display:e=>{const t=m.find(i=>i.vendorId===e.vendorId);return t?t.vendorNm:""},onOpen:()=>S("vendorModal-open"),onClear:()=>{o.chargeStaff=""}},{key:"chargeStaff",label:"\uD310\uB9E4\uB2F4\uB2F9\uC790",type:"text",placeholder:"\uB2F4\uB2F9\uC790\uBA85 \uC785\uB825"},{key:"mdUserId",label:"\uB2F4\uB2F9MD",type:"slot",name:"mdUser"}],g.detailIssueForm=[{key:"targetTypeCd",label:"\uBC1C\uAE09 \uB300\uC0C1 \uC885\uB958",type:"select",options:()=>r.PM_PROD_TARGET},{key:"issueMethods",label:"\uC9C0\uAE09 \uBC29\uBC95",type:"select",nullable:!1,options:()=>r.COUPON_ISSUE_DISP},{key:"issueCondition",label:"\uC9C0\uAE09 \uC870\uAC74",type:"select",nullable:!1,options:()=>r.COUPON_TARGET},{key:"issueGrades",label:"\uC801\uC6A9 \uD68C\uC6D0 \uB4F1\uAE09",type:"slot",name:"issueGrades",colSpan:3}],g.detailUseForm=[{key:"useScope",label:"\uC0AC\uC6A9 \uBC94\uC704",type:"select",nullable:!1,colSpan:2,options:()=>r.COUPON_APPLY},{key:"useExclude",label:"\uC81C\uC678 \uC0C1\uD488/\uCE74\uD14C\uACE0\uB9AC",type:"textarea",rows:3,placeholder:"\uC27C\uD45C\uB85C \uAD6C\uBD84\uD558\uC5EC \uC785\uB825 (\uC608: \uC0C1\uD488ID1, \uC0C1\uD488ID2, \uCE74\uD14C\uACE0\uB9ACID3)"},{key:"useRemark",label:"\uC0AC\uC6A9 \uC81C\uC57D\uC0AC\uD56D",type:"textarea",rows:3,placeholder:"\uC608: \uB2E4\uB978 \uCFE0\uD3F0\uACFC \uC911\uBCF5 \uC0AC\uC6A9 \uBD88\uAC00, \uBC30\uC1A1\uB8CC \uD560\uC778 \uCFE0\uD3F0\uC740 \uD2B9\uC815 \uBC30\uC1A1\uC0AC\uB9CC \uC801\uC6A9 \uB4F1"}],{coUtil,columns:g,codes:r,form:o,errors:f,vendors:m,handleShareKakao:be,handleCopyLink:ye,pdfAreaRef:B,pdfExporting:M,handleExportPdf:he,handleBtnAction:S,handleSelectAction:Q,handleGridCellAction:W,fnCallbackModal:Z,cfIsNew:b,cfDtlMode:D,cfHasId:h,cfSaveDisabled:N,cfIssuedList:R,cfUsedList:G,cfIssuedTop:ge,cfUsedTop:ve,cfSelectedVendorNm:ie,cfIssueTargetsColumns:H,tabs:oe,tab:j,tabMode2:J,barcodeContainer:_,qrcodeContainer:I,showVendorModal:fe,showMdModal:ue,showTargetPicker:me,showTab:ee,coUtil}},template:`
<div ref="pdfAreaRef">
<bo-container :title="!active ? '\uCFE0\uD3F0 \uC0C1\uC138' : (cfIsNew ? '\uCFE0\uD3F0 \uB4F1\uB85D' : (cfDtlMode ? '\uCFE0\uD3F0 \uC0C1\uC138' : '\uCFE0\uD3F0 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.couponId)">
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
  <!-- ===== \u25A0. \uC601\uC5ED \uD0C0\uC774\uD2C0 (list-title) ====================================== -->
  <!-- ===== \u25A1. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
  <!-- ===== \u25A0. \uD0ED \uC601\uC5ED ==================================================== -->
  <bo-tab-bar :tabs="tabs" :tab="tab" :tab-mode="tabMode2"
    @tab-select="id => handleBtnAction('tab-select', id)"
    @mode-select="m => handleBtnAction('tab-mode', m)" />
  <!-- ===== \u25A1. \uD0ED \uC601\uC5ED ==================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <!-- ===== \u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
    <div class="card" v-show="showTab('info')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uAE30\uBCF8\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <bo-form-area plain-readonly :columns="columns.infoForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBA54\uBAA8: Quill \uC5D0\uB514\uD130 (\uBCF4\uAE30\uBAA8\uB4DC\uB294 \uB80C\uB354\uB9CC) ==================== -->
        <template #memo>
          <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:180px;line-height:1.6;overflow:auto;" v-html="form.memo || '-'"></div>
          <base-html-editor v-else v-model="form.memo" height="200px" />
        </template>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB2F4\uB2F9MD picker ========================================= -->
        <template #mdUser>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.mdUserNm || '-' }}</div>
          <div v-else style="display:flex;align-items:center;gap:6px;">
            <input :value="form.mdUserNm || ''" readonly placeholder="MD \uC120\uD0DD" class="form-control"
              style="background:#f9f9f9;cursor:pointer;" @click="handleBtnAction('mdModal-open')" />
            <span style="display:inline-flex;align-items:center;flex-shrink:0;">
              <button type="button" class="btn btn-secondary btn-sm" title="\uC120\uD0DD"
                style="padding:0;width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;"
                @click="handleBtnAction('mdModal-open')">\u{1F50D}</button>
              <button v-if="form.mdUserId" type="button" title="\uC120\uD0DD \uD574\uC81C"
                style="background:none;border:none;padding:0 4px;color:#bbb;cursor:pointer;font-size:11px;line-height:1;"
                @click="handleBtnAction('form-mdClear')">x</button>
            </span>
          </div>
        </template>
      </bo-form-area>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
      <bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="showVendorModal" :on-callback="fnCallbackModal" />
      <bo-cm-popup-modal popup-cmd="cmPopup-userMd-pick" popup-code="userMd" :show="showMdModal" :on-callback="fnCallbackModal" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uAE30\uBCF8\uC815\uBCF4 \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
    <!-- ===== \u25A0.\u25A0. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <div class="card" v-show="showTab('preview')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F441} \uBBF8\uB9AC\uBCF4\uAE30</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:20px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC88C\uCE21 \uCEEC\uB7FC ============================================= -->
        <div style="display:flex;flex-direction:column;gap:16px;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC14\uCF54\uB4DC ============================================= -->
          <div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px;position:relative;background:linear-gradient(to right, #fff 0%, rgba(232,88,122,0.02) 100%);">
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-25deg);font-size:80px;font-weight:900;color:#e8587a;opacity:0.08;pointer-events:none;white-space:nowrap;letter-spacing:8px;">
              ShopJoy
            </div>
            <div style="position:absolute;top:-20px;right:-20px;font-size:60px;opacity:0.04;transform:rotate(-15deg);pointer-events:none;">
              \u{1F39F}\uFE0F
            </div>
            <div style="font-size:12px;font-weight:600;color:#333;background:#f5f5f5;padding:8px;border-radius:4px;width:100%;text-align:center;position:relative;z-index:1;">
              \u{1F4CA} \uBC14\uCF54\uB4DC
            </div>
            <div style="text-align:center;font-size:10px;color:#666;line-height:1.5;width:100%;position:relative;z-index:1;">
              <div style="font-weight:600;margin-bottom:4px;color:#222;">{{ form.couponNm }}</div>
              <div style="font-size:9px;">\u{1F3F7}\uFE0F {{ form.couponCd || 'SAMPLE' }}</div>
              <div style="font-weight:600;color:#e8587a;margin:4px 0;">
                {{ form.discountType==='amount' ? coUtil.cofWon(form.discountVal) : (form.discountVal||0)+'%' }}
              </div>
              <div style="font-size:9px;color:#999;">\u{1F4C5} {{ form.validFrom }} ~ {{ form.validTo }}</div>
              <div style="font-size:9px;color:#999;">\u{1F4B3} \uCD5C\uC18C\uC8FC\uBB38: {{ (form.minOrderAmt||0).toLocaleString() }}\uC6D0</div>
            </div>
            <div ref="barcodeContainer" style="display:flex;align-items:center;justify-content:center;background:#fff;padding:8px;border:1px solid #ddd;border-radius:4px;width:100%;position:relative;z-index:1;">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:45px;font-weight:900;color:#e8587a;opacity:0.05;pointer-events:none;white-space:nowrap;letter-spacing:3px;">
                ShopJoy
              </div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. SNS\uC804\uC1A1\uD615\uD0DC ========================================= -->
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
              <div style="font-weight:600;margin-bottom:6px;">\u{1F381} {{ form.couponNm }}</div>
              <div style="color:#666;margin:3px 0;">\uCFE0\uD3F0\uBC88\uD638: {{ form.couponCd || 'SAMPLE' }}</div>
              <div style="color:#666;margin:3px 0;">
                \uD560\uC778: {{ form.discountType==='amount' ? coUtil.cofWon(form.discountVal) : (form.discountVal||0)+'%' }}
              </div>
              <div style="color:#666;margin:3px 0;">\uC720\uD6A8\uAE30\uAC04: {{ form.validFrom }} ~ {{ form.validTo }}</div>
              <div style="color:#666;margin:3px 0;">\uCD5C\uC18C\uC8FC\uBB38: {{ (form.minOrderAmt||0).toLocaleString() }}\uC6D0</div>
              <div style="color:#999;font-size:9px;margin-top:6px;">ShopJoy\uC5D0\uC11C \uD655\uC778\uD558\uAE30 &gt;</div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC774\uBA54\uC77C \uB0B4\uC6A9 ========================================== -->
          <div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px;">
            <div style="font-size:12px;font-weight:600;color:#333;background:#f5f5f5;padding:8px;border-radius:4px;width:100%;text-align:center;">
              \u{1F4E7} \uC774\uBA54\uC77C \uB0B4\uC6A9
            </div>
            <div style="background:linear-gradient(180deg, #f9f9f9 0%, #fafbfc 100%);padding:12px;border:1px solid #e8e8e8;border-radius:6px;text-align:left;font-size:9px;line-height:1.6;color:#333;width:100%;position:relative;overflow:hidden;">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-25deg);font-size:70px;font-weight:900;color:#e8587a;opacity:0.07;pointer-events:none;white-space:nowrap;letter-spacing:6px;">
                ShopJoy
              </div>
              <div style="position:absolute;top:-10px;right:-10px;font-size:50px;opacity:0.03;transform:rotate(20deg);">\u{1F4E7}</div>
              <div style="background:linear-gradient(135deg, #e8587a 0%, #ff7a9a 100%);color:#fff;padding:8px;border-radius:4px;margin:-12px -12px 8px -12px;text-align:center;position:relative;z-index:1;">
                <div style="font-weight:600;font-size:10px;">\u{1F6CD}\uFE0F ShopJoy \uCFE0\uD3F0 \uC54C\uB9BC</div>
              </div>
              <div style="position:relative;z-index:1;">
                <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:40px;font-weight:900;color:#e8587a;opacity:0.05;pointer-events:none;white-space:nowrap;letter-spacing:3px;">
                  ShopJoy
                </div>
                <div style="font-weight:600;margin-bottom:8px;">\uC81C\uBAA9: {{ form.couponNm }}</div>
                <div style="color:#666;margin:4px 0;">\uBCF4\uB0B8 \uC0AC\uB78C: ShopJoy (noreply@shopjoy.com)</div>
                <div style="color:#666;margin:6px 0;">\uC548\uB155\uD558\uC138\uC694, \uC1A1\uC9C0\uC120 \uD68C\uC6D0\uB2D8!</div>
                <div style="color:#666;margin:6px 0;">ShopJoy\uC5D0\uC11C \uD2B9\uBCC4\uD55C \uCFE0\uD3F0\uC744 \uC900\uBE44\uD588\uC2B5\uB2C8\uB2E4.</div>
                <div style="background:#fff;padding:8px;border:2px solid #e8587a;border-radius:4px;margin:8px 0;">
                  <div style="font-weight:600;color:#e8587a;margin-bottom:4px;">\u{1F381} {{ form.couponNm }}</div>
                  <div style="color:#666;font-size:8px;margin:3px 0;">\uCFE0\uD3F0\uBC88\uD638: {{ form.couponCd || 'SAMPLE' }}</div>
                  <div style="color:#666;font-size:8px;margin:3px 0;">
                    \uD560\uC778: {{ form.discountType==='amount' ? coUtil.cofWon(form.discountVal) : (form.discountVal||0)+'%' }}
                  </div>
                  <div style="color:#666;font-size:8px;margin:3px 0;">\uC720\uD6A8\uAE30\uAC04: {{ form.validFrom }} ~ {{ form.validTo }}</div>
                  <div style="color:#666;font-size:8px;margin:3px 0;">\uCD5C\uC18C\uC8FC\uBB38: {{ (form.minOrderAmt||0).toLocaleString() }}\uC6D0</div>
                  <div style="color:#666;font-size:8px;margin:3px 0;">\uCFE0\uD3F0\uD0C0\uC785: {{ form.couponTypeCd }}</div>
                </div>
                <div style="color:#666;margin:6px 0;">\uC9C0\uAE08 \uBC14\uB85C ShopJoy\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694!</div>
                <div style="color:#999;font-size:8px;margin-top:8px;text-align:center;padding-top:8px;border-top:1px solid #e8e8e8;">
                  \xA9 2026 ShopJoy | \uBB38\uC758: 010-1234-5678 | demo@mail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC6B0\uCE21 \uCEEC\uB7FC ============================================= -->
        <div style="display:flex;flex-direction:column;gap:16px;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. QR\uCF54\uB4DC ============================================ -->
          <div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px;position:relative;background:linear-gradient(135deg, #fff 0%, rgba(232,88,122,0.01) 100%);">
            <div style="position:absolute;bottom:-15px;left:-15px;font-size:50px;opacity:0.05;transform:rotate(-20deg);">\u{1F4F1}</div>
            <div style="font-size:12px;font-weight:600;color:#333;background:#f5f5f5;padding:8px;border-radius:4px;width:100%;text-align:center;position:relative;z-index:1;">
              \u{1F4F1} QR\uCF54\uB4DC
            </div>
            <div style="text-align:center;font-size:10px;color:#666;line-height:1.5;width:100%;position:relative;z-index:1;">
              <div style="font-weight:600;margin-bottom:4px;color:#222;">{{ form.couponNm }}</div>
              <div style="font-family:monospace;font-size:9px;background:#f5f5f5;padding:4px;border-radius:3px;margin:4px 0;">
                {{ form.couponCd || '---' }}
              </div>
              <div style="font-size:9px;">\u{1F3F7}\uFE0F {{ form.couponTypeCd }}</div>
              <div style="font-size:9px;color:#999;">\u23F1\uFE0F {{ form.useLimit }}</div>
            </div>
            <div ref="qrcodeContainer" style="display:flex;align-items:center;justify-content:center;background:#fff;padding:8px;border:2px solid #e8587a;border-radius:4px;position:relative;z-index:1;">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:40px;font-weight:900;color:#e8587a;opacity:0.05;pointer-events:none;white-space:nowrap;letter-spacing:3px;">
                ShopJoy
              </div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC885\uC774\uD615\uD0DC ============================================ -->
          <div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px;">
            <div style="font-size:12px;font-weight:600;color:#333;background:#f5f5f5;padding:8px;border-radius:4px;width:100%;text-align:center;">
              \u{1F39F} \uC885\uC774\uD615\uD0DC
            </div>
            <div style="width:100%;aspect-ratio:2/1.2;background:linear-gradient(135deg, #fff8f9 0%, #fff0f4 100%);border:2px solid #e8587a;border-radius:8px;padding:12px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 2px 8px rgba(232,88,122,0.1);position:relative;overflow:hidden;">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:35px;font-weight:900;color:#e8587a;opacity:0.06;pointer-events:none;white-space:nowrap;letter-spacing:3px;">
                ShopJoy
              </div>
              <div style="position:absolute;top:6px;right:6px;font-size:8px;color:#e8587a;opacity:0.3;font-weight:700;letter-spacing:2px;">
                COUPON
              </div>
              <div>
                <div style="font-size:9px;color:#999;">\u{1F6CD}\uFE0F ShopJoy</div>
                <div style="font-size:11px;font-weight:700;color:#e8587a;margin:2px 0;">{{ form.couponNm }}</div>
              </div>
              <div style="text-align:center;background:rgba(255,255,255,0.5);padding:4px;border-radius:4px;">
                <div style="font-size:13px;color:#333;font-weight:700;">
                  {{ form.discountType==='amount' ? coUtil.cofWon(form.discountVal) : (form.discountVal||0)+'%' }}
                </div>
                <div style="font-size:8px;color:#666;">{{ form.validFrom }} ~ {{ form.validTo }}</div>
                <div style="font-size:7px;color:#999;margin-top:2px;">\uCFE0\uD3F0\uBC88\uD638: {{ form.couponCd || 'SAMPLE' }}</div>
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
    <!-- ===== \u25A1.\u25A1. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uC0C1\uC138\uC815\uBCF4 ================================================== -->
    <div class="card" v-show="showTab('detail')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uC0C1\uC138\uC815\uBCF4</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBC1C\uAE09\uB300\uC0C1 ================================================ -->
      <div style="margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid #e8e8e8;">
        <h3 style="font-size:13px;font-weight:700;color:#222;margin-bottom:16px;">\u{1F381} \uBC1C\uAE09\uB300\uC0C1</h3>
        <!-- \uB300\uC0C1 \uBAA9\uB85D \uCD94\uAC00/\uC0AD\uC81C -->
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
            empty-text="\uB300\uC0C1\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694."
            @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC9C0\uAE09\uBC29\uBC95/\uC870\uAC74 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ========================== -->
      <div style="margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid #e8e8e8;">
        <h3 style="font-size:13px;font-weight:700;color:#222;margin-bottom:16px;">\u{1F4E4} \uC9C0\uAE09\uBC29\uBC95/\uC870\uAC74</h3>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area plain-readonly :columns="columns.detailIssueForm" :form="form" :errors="errors"
          :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
          <template #issueGrades>
            <bo-multi-check-select
              v-model="form.issueGrades"
              :options="codes.PM_ISSUE_GRADE"
              placeholder="\uC804\uCCB4 \uB4F1\uAE09 (\uBBF8\uC120\uD0DD \uC2DC \uC804\uCCB4)"
              :disabled="cfDtlMode" />
            <span style="font-size:12px;color:#aaa;margin-top:4px;display:block;">\uC120\uD0DD\uD558\uC9C0 \uC54A\uC73C\uBA74 \uC804\uCCB4 \uB4F1\uAE09\uC5D0 \uC801\uC6A9</span>
          </template>
        </bo-form-area>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0AC\uC6A9\uBC29\uBC95 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================= -->
      <div>
        <h3 style="font-size:13px;font-weight:700;color:#222;margin-bottom:16px;">\u{1F50D} \uC0AC\uC6A9\uBC29\uBC95</h3>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area plain-readonly :columns="columns.detailUseForm" :form="form" :errors="errors"
          :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC0C1\uC138\uC815\uBCF4 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uBC1C\uAE09\uBAA9\uB85D ================================================== -->
    <div class="card" v-show="showTab('issued')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CA} \uBC1C\uAE09\uBAA9\uB85D <span class="tab-count"> {{ cfIssuedList.length }} </span></div>
      <div v-if="cfIssuedList.length === 0" style="text-align:center;color:#aaa;padding:30px;font-size:13px;">\uBC1C\uAE09\uB41C \uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid v-else bare :columns="columns.issuedGrid" :rows="cfIssuedTop"></bo-grid>
    </div>
    <!-- ===== \u25A1.\u25A1. \uBC1C\uAE09\uBAA9\uB85D ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uC0AC\uC6A9\uBAA9\uB85D ================================================== -->
    <div class="card" v-show="showTab('used')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u2705 \uC0AC\uC6A9\uBAA9\uB85D <span class="tab-count"> {{ cfUsedList.length }} </span></div>
      <div v-if="cfUsedList.length === 0" style="text-align:center;color:#aaa;padding:30px;font-size:13px;">\uC0AC\uC6A9\uB41C \uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid v-else bare :columns="columns.usedGrid" :rows="cfUsedTop"></bo-grid>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC0AC\uC6A9\uBAA9\uB85D ================================================== -->
  <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
    btn-style="min-width:120px;"
    :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694. (\uBC1C\uAE09/\uC0AC\uC6A9/\uBBF8\uB9AC\uBCF4\uAE30 \uD0ED\uC740 \uC870\uD68C \uC804\uC6A9)' : ''"
    :edit-click="() => handleBtnAction('form-edit')"
    :save-click="() => handleBtnAction('form-save')"
    :delete-click="() => handleBtnAction('form-delete')"
    :cancel-click="() => handleBtnAction('form-cancel')"
    :close-click="() => handleBtnAction('form-close')" />
<!-- \uBC1C\uAE09\uB300\uC0C1 \uD53C\uCEE4 \uBAA8\uB2EC -->
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.targetTypeCd==='PRODUCT')" popup-cmd="cmPopup-target-prod-pick" popup-code="prodByCategory" :init-selected-ids="form.issueTargets.map(t => t.targetId)" :on-callback="fnCallbackModal" />
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.targetTypeCd==='VENDOR')" popup-cmd="cmPopup-vendor-target-pick" popup-code="vendor" :show="true" :on-callback="fnCallbackModal" />
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.targetTypeCd==='BRAND')" popup-cmd="cmPopup-target-brand-pick" popup-code="brand" :on-callback="fnCallbackModal" />
<bo-cm-popup-modal v-if="coUtil.cofAnd(showTargetPicker, form.targetTypeCd==='CATEGORY')" popup-cmd="cmPopup-target-category-pick" popup-code="category" :on-callback="fnCallbackModal" />
</bo-container>
</div>
<!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
`};
