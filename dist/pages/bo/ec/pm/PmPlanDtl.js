window._ecPlanDtlState=window._ecPlanDtlState||{tab:"info",tabMode:"tab"},window.PmPlanDtl={name:"PmPlanDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(p){const{ref:E,reactive:c,computed:f,onMounted:Q,watch:B}=Vue,i=window.boApp.showToast,T=window.boApp.showConfirm,u=c([]),y=c([]),n=c({loading:!1,showProdPopup:!1,showVendorModal:!1,showTimedealProdPopup:!1,showTimedealForm:!1,error:null,tab:window._ecPlanDtlState.tab||"info",tabMode2:window._ecPlanDtlState.tabMode||"tab",activeContentTab:1,prodSearch:""}),Y=window.nextId||{value:(e,t)=>((e||[]).reduce((o,l)=>Math.max(o,Number(l==null?void 0:l[t])||0),0)||0)+1},m=c([]),P=c([]),r=c({planItemId:"",prodId:"",prodSkuId:"",dealPrice:null,totalQty:null,startDate:"",endDate:""}),H=Vue.toRef(n,"tab"),K=Vue.toRef(n,"tabMode2"),A=c({PLAN_CATEGORY:[],PLAN_DISP_STATUS:[]}),D=new Date,F=e=>String(e).padStart(2,"0"),q=`${D.getFullYear()}-${F(D.getMonth()+1)}-${F(D.getDate())}`,Z=`${D.getFullYear()+1}-12-31`,J=[{value:"PUBLIC",label:"\uC804\uCCB4\uACF5\uAC1C"},{value:"MEMBER",label:"\uD68C\uC6D0\uACF5\uAC1C"},{value:"VERIFIED",label:"\uC778\uC99D\uD68C\uC6D0"},{value:"PREMIUM",label:"\uC6B0\uC218\uD68C\uC6D0\u2191"},{value:"VIP",label:"VIP \uC804\uC6A9"},{value:"INVITED",label:"\uCD08\uB300\uD68C\uC6D0"},{value:"STAFF",label:"\uC9C1\uC6D0"},{value:"EXECUTIVE",label:"\uC784\uC9C1\uC6D0"}],a=c({planNm:"",category:"FASHION",theme:"",status:"ACTIVE",startDate:q,endDate:Z,productIds:[],visibilityTargets:"^PUBLIC^",desc:"",bannerImage:"",content1:"",content2:"",content3:"",vendorId:"",chargeStaff:""}),h=c({}),W=yup.object({planNm:yup.string().required("\uAE30\uD68D\uC804\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),category:yup.string().required("\uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.")}),S=f(()=>!p.dtlId),w=f(()=>p.dtlId||a.planId||null),_=f(()=>!!w.value),X=f(()=>n.tab!=="info"&&!_.value),V=(e,t={})=>{const o=["banner","info","content","products","preview"];if(o.map(l=>l+"-form-save").includes(e))return be();if(o.map(l=>l+"-form-delete").includes(e))return ue();if(o.map(l=>l+"-form-cancel").includes(e))return p.navigate("__cancelEdit__");if(o.map(l=>l+"-form-close").includes(e))return p.navigate("__closeDtl__");if(o.map(l=>l+"-form-edit").includes(e))return p.navigate("__switchToEdit__");if(e==="tab-select")return ie(t);if(e==="tab-mode"){n.tabMode2=t;return}else if(e==="content-tab"){n.activeContentTab=t;return}else{if(e==="form-visibilityToggle")return me(t);if(e==="prodPickModal-open"){n.showProdPopup=!0;return}else if(e==="prodPickModal-close"){n.showProdPopup=!1;return}else if(e==="vendorModal-open"){n.showVendorModal=!0;return}else if(e==="vendorModal-close"){n.showVendorModal=!1;return}else if(e==="form-vendorClear"){a.vendorId="",a.chargeStaff="";return}else if(e==="prodPickTimedealModal-open"){n.showTimedealProdPopup=!0;return}else if(e==="prodPickTimedealModal-close"){n.showTimedealProdPopup=!1;return}else if(e==="timedeal-form-close"){n.showTimedealForm=!1;return}else{if(e==="timedeal-form-submit")return se();console.warn("[handleBtnAction] unknown cmd:",e)}}},M=(e,t={})=>{if(e==="prodPickModal-toggle")return O(t);if(e==="items-rowDelete")return fe(t);if(e==="vendorModal-select")return R(t.vendorId,t.vendorNm);if(e==="timedeal-openForm")return re(t);if(e==="timedeal-cancel")return ce(t);if(e==="timedeal-removeTarget")return z(t.prodId);console.warn("[handleSelectAction] unknown cmd:",e)},ee=(e,t,o)=>{if(e==="cmPopup-vendor-pick"){if(o==null){n.showVendorModal=!1;return}return R(o.selId,o.selName)}else if(e==="cmPopup-prod-pick"){if(o==null){n.showProdPopup=!1;return}return O(o)}else if(e==="cmPopup-prod-pick-timedeal"){if(o==null){n.showTimedealProdPopup=!1;return}return z(o)}else console.warn("[fnCallbackModal] unknown popCmd:",e)},te=async()=>{var e,t,o,l;try{const s=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"\uAD00\uB9AC","\uC870\uD68C");y.splice(0,y.length,...((t=(e=s.data)==null?void 0:e.data)==null?void 0:t.pageList)||((l=(o=s.data)==null?void 0:o.data)==null?void 0:l.list)||[])}catch(s){console.warn("[PmPlanDtl.js] vendor load failed",s)}},L=async()=>{var e,t,o,l,s;await te(),n.loading=!0;try{const v=[boApiSvc.pdProd.getPage({pageNo:1,pageSize:1e4},"\uC694\uAE08\uC81C\uAD00\uB9AC","\uC870\uD68C")];S.value||v.unshift(boApiSvc.pmPlan.getById(p.dtlId,"\uC694\uAE08\uC81C\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"));const g=await Promise.all(v);if(S.value)u.splice(0,u.length,...((s=(l=g[0].data)==null?void 0:l.data)==null?void 0:s.list)||[]);else{const d=((e=g[0].data)==null?void 0:e.data)||g[0].data;d&&(Object.assign(a,{...d,productIds:[...d.productIds||[]]}),a.visibilityTargets||(a.visibilityTargets="^PUBLIC^")),u.splice(0,u.length,...((o=(t=g[1].data)==null?void 0:t.data)==null?void 0:o.list)||[])}n.error=null}catch(v){console.error("[catch-info]",v),n.error=v.message}finally{n.loading=!1}};B(()=>n.tab,e=>{window._ecPlanDtlState.tab=e}),B(()=>n.tabMode2,e=>{window._ecPlanDtlState.tabMode=e});const oe=e=>n.tabMode2!=="tab"||n.tab===e,ae=c([{id:"banner",label:"\uBC30\uB108\uC774\uBBF8\uC9C0",icon:"\u{1F3A8}"},{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"content",label:"\uB0B4\uC6A9\uC785\uB825",icon:"\u{1F4DD}"},{id:"timedeal",label:"\uD0C0\uC784\uB51C",icon:"\u26A1"},{id:"preview",label:"\uBBF8\uB9AC\uBCF4\uAE30",icon:"\u{1F441}"}]),le=[{id:1,label:"\uC8FC\uC694\uB0B4\uC6A9",icon:"\u{1F3AF}"},{id:2,label:"\uD2B9\uC9D5",icon:"\u2728"},{id:3,label:"\uD61C\uD0DD",icon:"\u{1F381}"}],ne=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["PLAN_CATEGORY","PLAN_DISP_STATUS"],{compNm:"PmPlanDtl"}),A.PLAN_CATEGORY=e.sgGetGrpCodes("PLAN_CATEGORY"),A.PLAN_DISP_STATUS=e.sgGetGrpCodes("PLAN_DISP_STATUS")},ie=e=>{n.tab=e};Q(async()=>{await ne(),await L(),await x()}),B(()=>p.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(h).forEach(o=>delete h[o])}catch{}await L(),await x()}});const x=async()=>{var e;if(S.value){m.splice(0,m.length);return}try{const t=await boApiSvc.pmPlanItem.getList({planId:w.value},"\uAE30\uD68D\uC804\uAD00\uB9AC","\uD0C0\uC784\uB51C\uBAA9\uB85D\uC870\uD68C");m.splice(0,m.length,...((e=t.data)==null?void 0:e.data)||[])}catch(t){console.warn("[PmPlanDtl.js] timedeal items load failed",t)}},de=f(()=>m.map(e=>{const t=u.find(o=>o.productId===e.prodId||o.prodId===e.prodId);return{...e,prodNm:t?t.prodNm||t.productNm:e.prodId}})),z=async e=>{const t=m.find(o=>o.prodId===e);if(t){if(t.dealPoolId){i("\uD0C0\uC784\uB51C\uC774 \uB4F1\uB85D\uB41C \uC0C1\uD488\uC740 \uBA3C\uC800 \uD0C0\uC784\uB51C\uC744 \uCDE8\uC18C\uD574\uC8FC\uC138\uC694.","error");return}try{await boApiSvc.pmPlanItem.remove(t.planItemId,"\uAE30\uD68D\uC804\uAD00\uB9AC","\uD0C0\uC784\uB51C\uB300\uC0C1\uC81C\uAC70"),await x()}catch(o){I(o)}return}try{await boApiSvc.pmPlanItem.create({siteId:a.siteId,planId:w.value,prodId:e,sortOrd:Y.value(m,"sortOrd")},"\uAE30\uD68D\uC804\uAD00\uB9AC","\uD0C0\uC784\uB51C\uB300\uC0C1\uCD94\uAC00"),await x()}catch(o){I(o)}},re=async e=>{var t;Object.assign(r,{planItemId:e.planItemId,prodId:e.prodId,prodSkuId:"",dealPrice:null,totalQty:null,startDate:"",endDate:""}),P.splice(0,P.length);try{const o=await boApiSvc.pdProd.getSkus(e.prodId,"\uAE30\uD68D\uC804\uAD00\uB9AC","\uD0C0\uC784\uB51CSKU\uC870\uD68C");P.splice(0,P.length,...((t=o.data)==null?void 0:t.data)||[])}catch(o){console.warn("[PmPlanDtl.js] sku load failed",o)}n.showTimedealForm=!0},se=async()=>{if(!r.prodSkuId||!r.dealPrice||!r.totalQty||!r.endDate){i("SKU / \uD2B9\uAC00 / \uD55C\uC815\uC218\uB7C9 / \uC885\uB8CC\uC77C\uC2DC\uB97C \uBAA8\uB450 \uC785\uB825\uD574\uC8FC\uC138\uC694.","error");return}try{await boApiSvc.pmPlanItem.createTimedeal(w.value,r.planItemId,{prodSkuId:r.prodSkuId,dealPrice:Number(r.dealPrice),totalQty:Number(r.totalQty),startDate:r.startDate||null,endDate:r.endDate},"\uAE30\uD68D\uC804\uAD00\uB9AC","\uD0C0\uC784\uB51C\uB4F1\uB85D"),i("\uD0C0\uC784\uB51C\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),n.showTimedealForm=!1,await x()}catch(e){I(e)}},ce=async e=>{if(await T("\uD0C0\uC784\uB51C \uCDE8\uC18C",`[${e.prodNm||e.prodId}] \uD0C0\uC784\uB51C\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? (\uC774\uBBF8 \uD310\uB9E4\uB41C \uC218\uB7C9\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4)`))try{await boApiSvc.pmPlanItem.cancelTimedeal(e.planItemId,"\uAE30\uD68D\uC804\uAD00\uB9AC","\uD0C0\uC784\uB51C\uCDE8\uC18C"),i("\uD0C0\uC784\uB51C\uC774 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await x()}catch(o){I(o)}},O=e=>{const t=a.productIds.indexOf(e);t===-1?a.productIds.push(e):a.productIds.splice(t,1)},pe=f(()=>a.productIds.map(e=>u.find(t=>t.productId===e)).filter(Boolean)),fe=e=>{const t=a.productIds.indexOf(e);t!==-1&&a.productIds.splice(t,1)},me=e=>{const t=(a.visibilityTargets||"").split("^").filter(Boolean),o=t.indexOf(e);o===-1?t.push(e):t.splice(o,1),a.visibilityTargets="^"+t.join("^")+"^"},ve=f(()=>{if(!a.vendorId)return"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD";const e=y.find(t=>t.vendorId===a.vendorId);return e?e.vendorNm:"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD"}),R=(e,t)=>{a.vendorId=e;const o=y.find(l=>l.vendorId===e);o&&(a.chargeStaff=o.chargeStaff||o.ceoNm||o.vendorNm||""),n.showVendorModal=!1},U=(e,t)=>{i&&i(t,"success")},I=e=>{var o,l;console.error("[handleSave]",e);const t=((l=(o=e.response)==null?void 0:o.data)==null?void 0:l.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";i&&i(t,"error",0)},be=async()=>{var s,v,g;const e=n.tab;if(!_.value&&e!=="info"){i("\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e==="info"){Object.keys(h).forEach(b=>delete h[b]);try{await W.validate(a,{abortEarly:!1})}catch(b){b.inner.forEach(k=>{h[k.path]=k.message}),coUtil.cofValidationToast(h,i);return}const d=!_.value;if(!await T(d?"\uB4F1\uB85D":"\uC800\uC7A5",d?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;try{const b={...a},k=d?await boApiSvc.pmPlan.create(b,"\uC694\uAE08\uC81C\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.pmPlan.update(w.value,b,"\uC694\uAE08\uC81C\uAD00\uB9AC","\uAE30\uBCF8\uC815\uBCF4\uC800\uC7A5");if(d){const G=((v=(s=k.data)==null?void 0:s.data)==null?void 0:v.planId)||((g=k.data)==null?void 0:g.planId)||null;G&&(a.planId=G)}U(k,d?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0ED\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(b){I(b)}return}if(!await T("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;const o={banner:"\uBC30\uB108\uC774\uBBF8\uC9C0",content:"\uB0B4\uC6A9\uC785\uB825",products:"\uB300\uC0C1\uC0C1\uD488"};let l=null;switch(e){case"banner":l={bannerImage:a.bannerImage};break;case"content":l={content1:a.content1,content2:a.content2,content3:a.content3};break;case"products":l={productIds:a.productIds,visibilityTargets:a.visibilityTargets};break;default:l={};break}try{const d=await boApiSvc.pmPlan.update(w.value,l,"\uC694\uAE08\uC81C\uAD00\uB9AC",`${o[e]||e}\uC800\uC7A5`);U(d,`${o[e]||""} \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)}catch(d){I(d)}},ue=async()=>{var t,o;if(!(S.value||!a.planId||!await T("\uC0AD\uC81C",`[${a.planNm}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.pmPlan.remove(a.planId,"\uAE30\uD68D\uC804\uAD00\uB9AC","\uC0AD\uC81C"),i("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),p.navigate("pmPlanMng",{reload:!0})}catch(l){console.error("[catch-info]",l);const s=((o=(t=l.response)==null?void 0:t.data)==null?void 0:o.message)||l.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";i&&i(s,"error",0)}},he=Vue.toRef(n,"activeContentTab"),Se=Vue.toRef(n,"prodSearch"),ge=Vue.toRef(n,"showProdPopup"),ye=Vue.toRef(n,"showVendorModal"),we=f(()=>p.dtlMode==="view"),$=()=>{const e=new URLSearchParams;return e.set("page","pmPlanDtl"),e.set("id",a.planId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},xe=()=>{try{window.coExtSdk.shareKakao({title:`\uAE30\uD68D\uC804 ${a.planId} - ShopJoy BO`,description:a.desc||a.theme||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:$()})}catch(e){i(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},Ie=async()=>{try{await navigator.clipboard.writeText($()),i("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){i(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},j=E(null),C=E(!1),ke=async()=>{C.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uAE30\uD68D\uC804\uC0C1\uC138_${a.planId}.pdf`);await window.boUtil.bofExportPdf(j.value,e,i)}finally{C.value=!1}},N={};return N.timedealGrid=[{key:"prodNm",label:"\uC0C1\uD488\uBA85"},{key:"dealPoolId",label:"\uC0C1\uD0DC",fmt:e=>e?"\u26A1 \uC9C4\uD589\uC911":"\uBBF8\uB4F1\uB85D"},{key:"dealPrice",label:"\uD2B9\uAC00",fmt:e=>e?coUtil.cofWon(e):"-"},{key:"dealRemainQty",label:"\uC794\uC5EC/\uCD1D",fmt:(e,t)=>{var o,l;return t.dealPoolId?`${(o=t.dealRemainQty)!=null?o:0} / ${(l=t.dealTotalQty)!=null?l:0}`:"-"}},{key:"dealEndDate",label:"\uC885\uB8CC\uC77C\uC2DC",fmt:e=>e||"-"},{type:"actions",actions:[{label:"\uD0C0\uC784\uB51C\uB4F1\uB85D",cls:"btn btn-primary btn-xs",visible:e=>!e.dealPoolId,onClick:e=>M("timedeal-openForm",e)},{label:"\uD0C0\uC784\uB51C\uCDE8\uC18C",cls:"btn btn-warning btn-xs",visible:e=>!!e.dealPoolId,onClick:e=>M("timedeal-cancel",e)},{label:"\uC81C\uAC70",cls:"btn btn-danger btn-xs",visible:e=>!e.dealPoolId,onClick:e=>M("timedeal-removeTarget",e)}]}],N.infoForm=[{key:"planNm",label:"\uAE30\uD68D\uC804\uBA85",type:"text",required:!0,placeholder:"\uAE30\uD68D\uC804\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",colSpan:2},{key:"category",label:"\uCE74\uD14C\uACE0\uB9AC",type:"select",required:!0,options:()=>A.PLAN_CATEGORY},{key:"theme",label:"\uD14C\uB9C8",type:"text",placeholder:"\uC608: \uBD04\uB9DE\uC774, \uC138\uC77C"},{key:"status",label:"\uC0C1\uD0DC",type:"select",options:()=>A.PLAN_DISP_STATUS},{key:"_visibility",label:"\uACF5\uAC1C\uB300\uC0C1",type:"slot",name:"visibility"},{key:"startDate",label:"\uC2DC\uC791\uC77C",type:"date"},{key:"endDate",label:"\uC885\uB8CC\uC77C",type:"date"},{key:"desc",label:"\uAC04\uB2E8\uC124\uBA85",type:"textarea",rows:3,placeholder:"\uAE30\uD68D\uC804 \uC124\uBA85"}],N.vendorForm=[{key:"vendorId",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"pick",placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",display:e=>{const t=y.find(o=>o.vendorId===e.vendorId);return t?t.vendorNm:""},onOpen:()=>V("vendorModal-open"),onClear:()=>{a.chargeStaff=""}},{key:"chargeStaff",label:"\uD310\uB9E4\uB2F4\uB2F9\uC790",type:"text",placeholder:"\uB2F4\uB2F9\uC790\uBA85 \uC785\uB825"}],{coUtil,columns:N,vendors:y,products:u,form:a,errors:h,VISIBILITY_OPTIONS:J,tabs:ae,contentTabs:le,timedealItems:m,timedealSkus:P,timedealForm:r,handleShareKakao:xe,handleCopyLink:Ie,pdfAreaRef:j,pdfExporting:C,handleExportPdf:ke,handleBtnAction:V,handleSelectAction:M,fnCallbackModal:ee,cfIsNew:S,cfSaveDisabled:X,cfDtlMode:we,cfSelectedProducts:pe,cfSelectedVendorNm:ve,cfTimedealRows:de,tab:H,tabMode2:K,activeContentTab:he,showProdPopup:ge,showVendorModal:ye,showTimedealProdPopup:Vue.toRef(n,"showTimedealProdPopup"),showTimedealForm:Vue.toRef(n,"showTimedealForm"),showTab:oe}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uAE30\uD68D\uC804 \uC0C1\uC138' : (cfIsNew ? '\uAE30\uD68D\uC804 \uB4F1\uB85D' : (cfDtlMode ? '\uAE30\uD68D\uC804 \uC0C1\uC138' : '\uAE30\uD68D\uC804 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.planId)">
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
    <!-- ===== \u25A0.\u25A0. \uBC30\uB108\uC774\uBBF8\uC9C0 ================================================= -->
    <div class="dtl-pane" v-show="showTab('banner')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F3A8} \uBC30\uB108\uC774\uBBF8\uC9C0</div>
      <div style="margin-bottom:12px;">
        <div style="font-size:12px;color:#888;margin-bottom:6px;">\u{1F4A1} \uD301: \uC774\uBBF8\uC9C0 \uC0BD\uC785 \uD6C4 \uD06C\uAE30 \uC870\uC808 \uBC0F \uBC30\uCE58\uB97C \uC790\uC720\uB86D\uAC8C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</div>
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;" v-html="form.bannerImage || '-'"></div>
        <base-html-editor v-else v-model="form.bannerImage" height="320px" />
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        save-label="\u{1F4BE} \uC800\uC7A5"
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
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 \uD3FC (BoFormArea \uC790\uB3D9 \uB80C\uB354) =========================== -->
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <bo-form-area plain-readonly :columns="columns.infoForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uACF5\uAC1C\uB300\uC0C1 \uCCB4\uD06C\uBC15\uC2A4 \uADF8\uB9AC\uB4DC ===================================== -->
        <template #visibility>
          <bo-multi-check-select v-model="form.visibilityTargets" :options="VISIBILITY_OPTIONS"
            separator="^" wrap empty-value="^NONE^" placeholder="\uC804\uCCB4 \uACF5\uAC1C" all-label="\uC804\uCCB4 \uACF5\uAC1C"
            :disabled="cfDtlMode" min-width="320px" />
        </template>
      </bo-form-area>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4/\uD310\uB9E4\uB2F4\uB2F9\uC790 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ======================= -->
      <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e8e8e8;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area plain-readonly :columns="columns.vendorForm" :form="form" :errors="errors"
          :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
      <bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="showVendorModal" :on-callback="fnCallbackModal" />
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        save-label="\u{1F4BE} \uC800\uC7A5"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('info-form-edit')"
        :save-click="() => handleBtnAction('info-form-save')"
        :delete-click="() => handleBtnAction('info-form-delete')"
        :cancel-click="() => handleBtnAction('info-form-cancel')"
        :close-click="() => handleBtnAction('info-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uAE30\uBCF8\uC815\uBCF4 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uB0B4\uC6A9\uC785\uB825 (HTML \uC5D0\uB514\uD130) ======================================= -->
    <div class="dtl-pane" v-show="showTab('content')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4DD} \uB0B4\uC6A9\uC785\uB825</div>
      <div style="margin-bottom:12px;">
        <bo-tab-bar :tabs="contentTabs" :tab="activeContentTab" :show-modes="false" bg="#f0fdf4"
          @tab-select="i => handleBtnAction('content-tab', i)" />
      </div>
      <template v-if="activeContentTab===1">
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;overflow:auto;" v-html="form.content1 || '-'"></div>
        <base-html-editor v-else v-model="form.content1" height="420px" />
      </template>
      <template v-if="activeContentTab===2">
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;overflow:auto;" v-html="form.content2 || '-'"></div>
        <base-html-editor v-else v-model="form.content2" height="420px" />
      </template>
      <template v-if="activeContentTab===3">
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;overflow:auto;" v-html="form.content3 || '-'"></div>
        <base-html-editor v-else v-model="form.content3" height="420px" />
      </template>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        save-label="\u{1F4BE} \uC800\uC7A5"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('content-form-edit')"
        :save-click="() => handleBtnAction('content-form-save')"
        :delete-click="() => handleBtnAction('content-form-delete')"
        :cancel-click="() => handleBtnAction('content-form-cancel')"
        :close-click="() => handleBtnAction('content-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uB0B4\uC6A9\uC785\uB825 (HTML \uC5D0\uB514\uD130) ======================================= -->
    <!-- ===== \u25A0.\u25A0. \uD0C0\uC784\uB51C ===================================================== -->
    <div class="dtl-pane" v-show="showTab('timedeal')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
        \u26A1 \uD0C0\uC784\uB51C
        <span class="tab-count">{{ timedealItems.length }}</span>
      </div>
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px;">
        <button v-if="!cfDtlMode" class="btn btn-secondary" @click="handleBtnAction('prodPickTimedealModal-open')">+ \uB300\uC0C1\uC0C1\uD488 \uCD94\uAC00</button>
        <span style="font-size:13px;color:#888;">{{ timedealItems.length }}\uAC1C \uC0C1\uD488 \xB7 \uD0C0\uC784\uB51C \uB4F1\uB85D/\uCDE8\uC18C\uB294 \uC0C1\uD488\uBCC4\uB85C \uAD00\uB9AC\uB429\uB2C8\uB2E4.</span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.timedealGrid" :rows="cfTimedealRows" row-key="planItemId"
        empty-text="\uB300\uC0C1\uC0C1\uD488\uC744 \uBA3C\uC800 \uCD94\uAC00\uD574\uC8FC\uC138\uC694." />
    </div>
    <!-- ===== \u25A1.\u25A1. \uD0C0\uC784\uB51C ===================================================== -->
    <!-- ===== \u25A0.\u25A0. \uB300\uC0C1\uC0C1\uD488 ================================================== -->
    <div class="dtl-pane" v-show="showTab('products')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F6CD} \uB300\uC0C1 \uC0C1\uD488</div>
      <div style="margin-bottom:16px;">
        <button class="btn btn-primary btn-sm" @click="handleBtnAction('prodPickModal-open')" style="float:right;">+ \uC0C1\uD488\uC120\uD0DD</button>
        <div style="clear:both;"></div>
      </div>
      <div v-if="cfSelectedProducts.length > 0" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;">
        <div v-for="p in cfSelectedProducts" :key="p?.productId" style="border:1px solid #e0e0e0;border-radius:6px;overflow:hidden;background:#fff;">
          <div style="height:100px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;font-size:32px;border-bottom:1px solid #e8e8e8;">
            \u{1F4E6}
          </div>
          <div style="padding:8px;font-size:11px;">
            <div style="font-weight:600;color:#222;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
              {{ p.prodNm }}
            </div>
            <div style="color:#e8587a;font-weight:700;margin-bottom:6px;">{{ (p.price||0).toLocaleString() }}\uC6D0</div>
            <button style="width:100%;padding:4px;background:#fff;border:1px solid #ddd;border-radius:4px;font-size:10px;color:#666;" @click="handleSelectAction('items-rowDelete', p.productId)">
              \uC81C\uAC70
            </button>
          </div>
        </div>
      </div>
      <div v-else style="text-align:center;color:#999;padding:40px;background:#f9f9f9;border-radius:6px;">\uC120\uD0DD\uB41C \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        save-label="\u{1F4BE} \uC800\uC7A5"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('products-form-edit')"
        :save-click="() => handleBtnAction('products-form-save')"
        :delete-click="() => handleBtnAction('products-form-delete')"
        :cancel-click="() => handleBtnAction('products-form-cancel')"
        :close-click="() => handleBtnAction('products-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uB300\uC0C1\uC0C1\uD488 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <div class="dtl-pane" v-show="showTab('preview')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F441} \uBBF8\uB9AC\uBCF4\uAE30</div>
      <div style="background:#f9f9f9;border-radius:6px;padding:20px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uB108 \uBBF8\uB9AC\uBCF4\uAE30 =========================================== -->
        <div v-if="form.bannerImage" style="margin-bottom:20px;padding:16px;background:#fff;border-radius:6px;border:1px solid #e0e0e0;overflow:hidden;" v-html="form.bannerImage"></div>
        <div style="background:#fff;border-radius:6px;padding:20px;border:1px solid #e0e0e0;">
          <div style="font-size:18px;font-weight:700;color:#222;margin-bottom:12px;">{{ form.planNm }}</div>
          <div style="display:flex;gap:8px;margin-bottom:12px;">
            <span style="display:inline-block;font-size:11px;background:#e8f0fe;color:#1577db;border-radius:4px;padding:4px 8px;font-weight:600;">
              {{ form.category }}
            </span>
            <span style="display:inline-block;font-size:11px;background:#fff3e0;color:#f57c00;border-radius:4px;padding:4px 8px;font-weight:600;">
              {{ form.theme }}
            </span>
            <span style="display:inline-block;font-size:11px;background:#e8f5e9;color:#2e7d32;border-radius:4px;padding:4px 8px;font-weight:600;">
              {{ form.status }}
            </span>
          </div>
          <div style="color:#666;font-size:12px;line-height:1.6;margin-bottom:16px;">
            <div>\u{1F4C5} \uAE30\uAC04: {{ form.startDate }} ~ {{ form.endDate }}</div>
            <div style="margin-top:4px;">{{ form.desc }}</div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCEE8\uD150\uCE20 \uBBF8\uB9AC\uBCF4\uAE30 ======================================== -->
          <template v-if="form.content1 || form.content2 || form.content3">
            <div style="border-top:1px solid #e0e0e0;padding-top:16px;margin-top:16px;">
              <div v-if="form.content1" style="margin-bottom:20px;">
                <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:8px;">\u{1F3AF} \uC8FC\uC694\uB0B4\uC6A9</div>
                <div style="font-size:12px;line-height:1.8;color:#555;" v-html="form.content1"></div>
              </div>
              <div v-if="form.content2" style="margin-bottom:20px;">
                <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:8px;">\u2728 \uD2B9\uC9D5</div>
                <div style="font-size:12px;line-height:1.8;color:#555;" v-html="form.content2"></div>
              </div>
              <div v-if="form.content3">
                <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:8px;">\u{1F381} \uD61C\uD0DD</div>
                <div style="font-size:12px;line-height:1.8;color:#555;" v-html="form.content3"></div>
              </div>
            </div>
          </template>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB300\uC0C1\uC0C1\uD488 \uBBF8\uB9AC\uBCF4\uAE30 ======================================= -->
          <div v-if="cfSelectedProducts.length > 0" style="border-top:1px solid #e0e0e0;padding-top:16px;margin-top:16px;">
            <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:12px;">\u{1F6CD} \uB300\uC0C1\uC0C1\uD488 ({{ cfSelectedProducts.length }}\uAC1C)</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;">
              <div v-for="p in cfSelectedProducts" :key="p?.productId" style="text-align:center;padding:10px;background:#f9f9f9;border-radius:6px;">
                <div style="font-size:32px;margin-bottom:4px;">\u{1F4E6}</div>
                <div style="font-size:11px;font-weight:600;color:#222;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                  {{ p.prodNm }}
                </div>
                <div style="font-size:12px;color:#e8587a;font-weight:700;margin-top:4px;">{{ (p.price||0).toLocaleString() }}\uC6D0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        save-label="\u{1F4BE} \uC800\uC7A5"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('preview-form-edit')"
        :save-click="() => handleBtnAction('preview-form-save')"
        :delete-click="() => handleBtnAction('preview-form-delete')"
        :cancel-click="() => handleBtnAction('preview-form-cancel')"
        :close-click="() => handleBtnAction('preview-form-close')" />
    </div>
  </div>
  <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
</bo-container>
</div>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<!-- ===== \u25A1.\u25A1. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
<!-- ===== \u25A0. \uC0C1\uD488\uC120\uD0DD \uBAA8\uB2EC ================================================= -->
<bo-cm-popup-modal popup-cmd="cmPopup-prod-pick" popup-code="prod" result-type="id" :show="showProdPopup" :selected-ids="form.productIds" title="\uC0C1\uD488\uC120\uD0DD" :on-callback="fnCallbackModal" />
<!-- ===== \u25A1. \uC0C1\uD488\uC120\uD0DD \uBAA8\uB2EC ================================================= -->
<!-- ===== \u25A0. \uD0C0\uC784\uB51C \uB300\uC0C1\uC0C1\uD488 \uC120\uD0DD \uD31D\uC5C5 ======================================= -->
<bo-cm-popup-modal popup-cmd="cmPopup-prod-pick-timedeal" popup-code="prod" result-type="id" :show="showTimedealProdPopup" :selected-ids="timedealItems.map(it => it.prodId)" title="\uD0C0\uC784\uB51C \uB300\uC0C1\uC0C1\uD488 \uC120\uD0DD" :on-callback="fnCallbackModal" />
<!-- ===== \u25A1. \uD0C0\uC784\uB51C \uB300\uC0C1\uC0C1\uD488 \uC120\uD0DD \uD31D\uC5C5 ======================================= -->
<!-- ===== \u25A0. \uD0C0\uC784\uB51C \uB4F1\uB85D \uD3FC \uBAA8\uB2EC ============================================ -->
<bo-modal :show="showTimedealForm" title="\u26A1 \uD0C0\uC784\uB51C \uB4F1\uB85D" width="480px" @close="handleBtnAction('timedeal-form-close')">
  <template #body>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div>
        <label style="display:block;font-size:12px;font-weight:700;color:#666;margin-bottom:4px;">\uB300\uC0C1 SKU</label>
        <select v-model="timedealForm.prodSkuId" class="form-control" style="width:100%;">
          <option value="" disabled>SKU\uB97C \uC120\uD0DD\uD558\uC138\uC694</option>
          <option v-for="s in timedealSkus" :key="s.prodSkuId" :value="s.prodSkuId">
            {{ s.skuCode || s.prodSkuId }}{{ (s.prodOptNm1 || s.prodOptNm2) ? (' - ' + [s.prodOptNm1, s.prodOptNm2].filter(Boolean).join('/')) : '' }} (\uC7AC\uACE0 {{ s.stockQty ?? 0 }})
          </option>
        </select>
      </div>
      <div>
        <label style="display:block;font-size:12px;font-weight:700;color:#666;margin-bottom:4px;">\uD0C0\uC784\uB51C \uD2B9\uAC00</label>
        <input v-model="timedealForm.dealPrice" type="number" min="0" class="form-control" style="width:100%;" placeholder="\uD2B9\uAC00 \uC785\uB825" />
      </div>
      <div>
        <label style="display:block;font-size:12px;font-weight:700;color:#666;margin-bottom:4px;">\uD55C\uC815 \uC218\uB7C9</label>
        <input v-model="timedealForm.totalQty" type="number" min="1" class="form-control" style="width:100%;" placeholder="\uD55C\uC815 \uC218\uB7C9 \uC785\uB825" />
      </div>
      <div style="display:flex;gap:8px;">
        <div style="flex:1;">
          <label style="display:block;font-size:12px;font-weight:700;color:#666;margin-bottom:4px;">\uC2DC\uC791\uC77C\uC2DC</label>
          <input v-model="timedealForm.startDate" type="datetime-local" class="form-control" style="width:100%;" />
        </div>
        <div style="flex:1;">
          <label style="display:block;font-size:12px;font-weight:700;color:#666;margin-bottom:4px;">\uC885\uB8CC\uC77C\uC2DC</label>
          <input v-model="timedealForm.endDate" type="datetime-local" class="form-control" style="width:100%;" />
        </div>
      </div>
    </div>
  </template>
  <template #footer>
    <button class="btn btn-secondary" @click="handleBtnAction('timedeal-form-close')">\uCDE8\uC18C</button>
    <button class="btn btn-primary" @click="handleBtnAction('timedeal-form-submit')">\uB4F1\uB85D</button>
  </template>
</bo-modal>
<!-- ===== \u25A1. \uD0C0\uC784\uB51C \uB4F1\uB85D \uD3FC \uBAA8\uB2EC ============================================ -->
`};
