window._ecEventDtlState=window._ecEventDtlState||{tab:"info",tabMode:"tab"},window.PmEventDtl={name:"PmEventDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(c){const K=window.nextId||{value:(e,t)=>((e||[]).reduce((o,l)=>Math.max(o,Number(l==null?void 0:l[t])||0),0)||0)+1},{ref:_,reactive:f,computed:p,onMounted:Q,watch:E}=Vue,i=window.boApp.showToast,M=window.boApp.showConfirm,G=window.boApp.showRefModal,u=f([]),y=f([]),n=f({loading:!1,showProdPopup:!1,showVendorModal:!1,showTimedealProdPopup:!1,showTimedealForm:!1,error:null,tab:window._ecEventDtlState.tab||"info",tabMode2:window._ecEventDtlState.tabMode||"tab",activeContentTab:1,prodSearch:""}),m=f([]),S=f([]),r=f({eventItemId:"",prodId:"",prodSkuId:"",dealPrice:null,totalQty:null,startDate:"",endDate:""}),H=Vue.toRef(n,"tab"),W=Vue.toRef(n,"tabMode2"),C=f({event_statuses:[]}),A=new Date,F=e=>String(e).padStart(2,"0"),Y=`${A.getFullYear()}-${F(A.getMonth()+1)}-${F(A.getDate())}`,Z=`${A.getFullYear()+3}-12-31`,a=f({eventTitle:"",eventStatusCd:"",startDate:"",endDate:"",authRequired:!1,targetProducts:[],visibilityTargets:"^PUBLIC^",bannerImage:"",content1:"",content2:"",content3:"",content4:"",content5:"",vendorId:"",chargeStaff:""}),J=()=>{Object.assign(a,{eventStatusCd:"\uC9C4\uD589\uC911",startDate:Y,endDate:Z})},h=f({}),X=yup.object({eventTitle:yup.string().required("\uC774\uBCA4\uD2B8 \uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),w=p(()=>!c.dtlId),k=p(()=>c.dtlId||a.eventId||null),B=p(()=>!!k.value),ee=p(()=>n.tab!=="info"&&!B.value),V=(e,t={})=>{if(["banner-form-save","info-form-save","content-form-save","products-form-save"].includes(e))return ve();if(["banner-form-delete","info-form-delete","content-form-delete","products-form-delete"].includes(e))return ge();if(["banner-form-cancel","info-form-cancel","content-form-cancel","products-form-cancel"].includes(e))return c.navigate("__cancelEdit__");if(["banner-form-close","info-form-close","content-form-close","products-form-close"].includes(e))return c.navigate("__closeDtl__");if(["banner-form-edit","info-form-edit","content-form-edit","products-form-edit"].includes(e))return c.navigate("__switchToEdit__");if(e==="tab-select")return ie(t);if(e==="tab-mode"){n.tabMode2=t;return}else if(e==="content-tab"){n.activeContentTab=t;return}else{if(e==="form-visibilityToggle")return ue(t);if(e==="prodPickModal-open"){n.showProdPopup=!0;return}else if(e==="prodPickModal-close"){n.showProdPopup=!1;return}else if(e==="vendorModal-open"){n.showVendorModal=!0;return}else if(e==="vendorModal-close"){n.showVendorModal=!1;return}else if(e==="form-vendorClear"){a.vendorId="",a.chargeStaff="";return}else{if(e==="preview-eventConfirm")return me();if(e==="prodPickTimedealModal-open"){n.showTimedealProdPopup=!0;return}else if(e==="prodPickTimedealModal-close"){n.showTimedealProdPopup=!1;return}else if(e==="timedeal-form-close"){n.showTimedealForm=!1;return}else{if(e==="timedeal-form-submit")return se();console.warn("[handleBtnAction] unknown cmd:",e)}}}},T=(e,t={})=>{if(e==="prodPickModal-toggle")return U(t);if(e==="items-rowDelete")return pe(t);if(e==="items-ref")return G(t.type,t.id);if(e==="vendorModal-select")return O(t.vendorId,t.vendorNm);if(e==="timedeal-openForm")return re(t);if(e==="timedeal-cancel")return ce(t);if(e==="timedeal-removeTarget")return z(t.targetId);console.warn("[handleSelectAction] unknown cmd:",e)},te=(e,t,o)=>{if(e==="cmPopup-vendor-pick"){if(o==null){n.showVendorModal=!1;return}return O(o.selId,o.selName)}else if(e==="cmPopup-prod-pick"){if(o==null){n.showProdPopup=!1;return}return U(o)}else if(e==="cmPopup-prod-pick-timedeal"){if(o==null){n.showTimedealProdPopup=!1;return}return z(o)}else console.warn("[fnCallbackModal] unknown popCmd:",e)},oe=async()=>{var e,t,o,l;try{const s=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"\uAD00\uB9AC","\uC870\uD68C");y.splice(0,y.length,...((t=(e=s.data)==null?void 0:e.data)==null?void 0:t.pageList)||((l=(o=s.data)==null?void 0:o.data)==null?void 0:l.list)||[])}catch(s){console.warn("[PmEventDtl.js] vendor load failed",s)}},R=async()=>{var e,t,o,l,s;await oe(),n.loading=!0;try{const v=[boApiSvc.pdProd.getPage({pageNo:1,pageSize:1e4},"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uC870\uD68C")];w.value||v.unshift(boApiSvc.pmEvent.getById(c.dtlId,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"));const g=await Promise.all(v);if(w.value)u.splice(0,u.length,...((s=(l=g[0].data)==null?void 0:l.data)==null?void 0:s.list)||[]);else{const d=((e=g[0].data)==null?void 0:e.data)||g[0].data;d&&(Object.assign(a,{...d,targetProducts:[...d.targetProducts||[]]}),a.visibilityTargets||(a.visibilityTargets=window.visibilityUtil.fromLegacy("\uD56D\uC0C1 \uD45C\uC2DC",d.authRequired,""),a.visibilityTargets||(a.visibilityTargets="^PUBLIC^"))),u.splice(0,u.length,...((o=(t=g[1].data)==null?void 0:t.data)==null?void 0:o.list)||[])}n.error=null}catch(v){console.error("[catch-info]",v),n.error=v.message}finally{n.loading=!1}};E(()=>n.tab,e=>{window._ecEventDtlState.tab=e}),E(()=>n.tabMode2,e=>{window._ecEventDtlState.tabMode=e});const ae=e=>n.tabMode2!=="tab"||n.tab===e,ne=f([{id:"banner",label:"\uBC30\uB108\uC774\uBBF8\uC9C0",icon:"\u{1F3A8}"},{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"content",label:"\uC774\uBCA4\uD2B8 \uB0B4\uC6A9",icon:"\u{1F4DD}"},{id:"timedeal",label:"\uD0C0\uC784\uB51C",icon:"\u26A1"},{id:"preview",label:"\uBBF8\uB9AC\uBCF4\uAE30",icon:"\u{1F441}"}]),le=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["EVENT_STATUS_KR"],{compNm:"PmEventDtl"}),C.event_statuses=e.sgGetGrpCodes("EVENT_STATUS_KR")},ie=e=>{n.tab=e};Q(async()=>{await le(),c.active&&w.value&&J(),await R(),await x()}),E(()=>c.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys(h).forEach(o=>delete h[o])}catch{}await R(),await x()}});const x=async()=>{var e;if(w.value){m.splice(0,m.length);return}try{const t=await boApiSvc.pmEventItem.getList({eventId:k.value},"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uD0C0\uC784\uB51C\uBAA9\uB85D\uC870\uD68C");m.splice(0,m.length,...((e=t.data)==null?void 0:e.data)||[])}catch(t){console.warn("[PmEventDtl.js] timedeal items load failed",t)}},de=p(()=>m.map(e=>{const t=u.find(o=>o.productId===e.targetId||o.prodId===e.targetId);return{...e,prodNm:t?t.prodNm||t.productNm:e.targetId}})),z=async e=>{const t=m.find(o=>o.targetId===e);if(t){if(t.dealPoolId){i("\uD0C0\uC784\uB51C\uC774 \uB4F1\uB85D\uB41C \uC0C1\uD488\uC740 \uBA3C\uC800 \uD0C0\uC784\uB51C\uC744 \uCDE8\uC18C\uD574\uC8FC\uC138\uC694.","error");return}try{await boApiSvc.pmEventItem.remove(t.eventItemId,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uD0C0\uC784\uB51C\uB300\uC0C1\uC81C\uAC70"),await x()}catch(o){I(o)}return}try{await boApiSvc.pmEventItem.create({siteId:a.siteId,eventId:k.value,targetTypeCd:"PRODUCT",targetId:e,sortNo:K.value(m,"sortNo")},"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uD0C0\uC784\uB51C\uB300\uC0C1\uCD94\uAC00"),await x()}catch(o){I(o)}},re=async e=>{var t;Object.assign(r,{eventItemId:e.eventItemId,prodId:e.targetId,prodSkuId:"",dealPrice:null,totalQty:null,startDate:"",endDate:""}),S.splice(0,S.length);try{const o=await boApiSvc.pdProd.getSkus(e.targetId,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uD0C0\uC784\uB51CSKU\uC870\uD68C");S.splice(0,S.length,...((t=o.data)==null?void 0:t.data)||[])}catch(o){console.warn("[PmEventDtl.js] sku load failed",o)}n.showTimedealForm=!0},se=async()=>{if(!r.prodSkuId||!r.dealPrice||!r.totalQty||!r.endDate){i("SKU / \uD2B9\uAC00 / \uD55C\uC815\uC218\uB7C9 / \uC885\uB8CC\uC77C\uC2DC\uB97C \uBAA8\uB450 \uC785\uB825\uD574\uC8FC\uC138\uC694.","error");return}try{await boApiSvc.pmEventItem.createTimedeal(k.value,r.eventItemId,{prodSkuId:r.prodSkuId,dealPrice:Number(r.dealPrice),totalQty:Number(r.totalQty),startDate:r.startDate||null,endDate:r.endDate},"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uD0C0\uC784\uB51C\uB4F1\uB85D"),i("\uD0C0\uC784\uB51C\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),n.showTimedealForm=!1,await x()}catch(e){I(e)}},ce=async e=>{if(await M("\uD0C0\uC784\uB51C \uCDE8\uC18C",`[${e.prodNm||e.targetId}] \uD0C0\uC784\uB51C\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? (\uC774\uBBF8 \uD310\uB9E4\uB41C \uC218\uB7C9\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4)`))try{await boApiSvc.pmEventItem.cancelTimedeal(e.eventItemId,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uD0C0\uC784\uB51C\uCDE8\uC18C"),i("\uD0C0\uC784\uB51C\uC774 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await x()}catch(o){I(o)}},U=e=>{const t=a.targetProducts.indexOf(e);t===-1?a.targetProducts.push(e):a.targetProducts.splice(t,1)},fe=p(()=>a.targetProducts.map(e=>u.find(t=>t.productId===e||t.prodId===e)).filter(Boolean)),pe=e=>{const t=a.targetProducts.indexOf(e);t!==-1&&a.targetProducts.splice(t,1)},me=()=>{i("\uC774\uBCA4\uD2B8 \uCC38\uC5EC\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uAC10\uC0AC\uD569\uB2C8\uB2E4.","success")},L=(e,t)=>{i&&i(t,"success")},I=e=>{var o,l;console.error("[handleSave]",e);const t=((l=(o=e.response)==null?void 0:o.data)==null?void 0:l.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";i&&i(t,"error",0)},ve=async()=>{var s,v,g;const e=n.tab;if(!B.value&&e!=="info"){i("\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e==="info"){Object.keys(h).forEach(b=>delete h[b]);try{await X.validate(a,{abortEarly:!1})}catch(b){b.inner.forEach(P=>{h[P.path]=P.message}),coUtil.cofValidationToast(h,i);return}const d=!B.value;if(!await M(d?"\uB4F1\uB85D":"\uC800\uC7A5",d?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;try{const b={...a},P=d?await boApiSvc.pmEvent.create(b,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.pmEvent.update(k.value,b,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uAE30\uBCF8\uC815\uBCF4\uC800\uC7A5");if(d){const q=((v=(s=P.data)==null?void 0:s.data)==null?void 0:v.eventId)||((g=P.data)==null?void 0:g.eventId)||null;q&&(a.eventId=q)}L(P,d?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0ED\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(b){I(b)}return}if(!await M("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;const o={banner:"\uBC30\uB108\uC774\uBBF8\uC9C0",content:"\uC774\uBCA4\uD2B8\uB0B4\uC6A9",products:"\uB300\uC0C1\uC0C1\uD488"};let l=null;switch(e){case"banner":l={bannerImage:a.bannerImage};break;case"content":l={content1:a.content1,content2:a.content2,content3:a.content3,content4:a.content4,content5:a.content5};break;case"products":l={targetProducts:a.targetProducts,visibilityTargets:a.visibilityTargets};break;default:l={};break}try{const d=await boApiSvc.pmEvent.update(k.value,l,"\uC774\uBCA4\uD2B8\uAD00\uB9AC",`${o[e]||e}\uC800\uC7A5`);L(d,`${o[e]||""} \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)}catch(d){I(d)}},be=p(()=>window.visibilityUtil.allOptions()),ue=e=>{const t=window.visibilityUtil.parse(a.visibilityTargets),o=t.indexOf(e);o>=0?t.splice(o,1):t.push(e),a.visibilityTargets=window.visibilityUtil.serialize(t)},he=p(()=>{if(!a.vendorId)return"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD";const e=y.find(t=>t.vendorId===a.vendorId);return e?e.vendorNm:"\uC18C\uC18D\uC5C5\uCCB4 \uC120\uD0DD"}),O=(e,t)=>{a.vendorId=e;const o=y.find(l=>l.vendorId===e);o&&(a.chargeStaff=o.chargeStaff||o.ceoNm||o.vendorNm||""),n.showVendorModal=!1},ge=async()=>{var t,o;if(!(w.value||!a.eventId||!await M("\uC0AD\uC81C",`[${a.eventTitle}]\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.pmEvent.remove(a.eventId,"\uC774\uBCA4\uD2B8\uAD00\uB9AC","\uC0AD\uC81C"),i("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),c.navigate("pmEventMng",{reload:!0})}catch(l){console.error("[catch-info]",l);const s=((o=(t=l.response)==null?void 0:t.data)==null?void 0:o.message)||l.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";i&&i(s,"error",0)}},ye=Vue.toRef(n,"activeContentTab"),De=Vue.toRef(n,"prodSearch"),we=Vue.toRef(n,"showProdPopup"),ke=Vue.toRef(n,"showVendorModal"),xe=p(()=>c.dtlMode==="view"),$=()=>{const e=new URLSearchParams;return e.set("page","pmEventDtl"),e.set("id",a.eventId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},Ie=()=>{try{window.coExtSdk.shareKakao({title:`\uC774\uBCA4\uD2B8 ${a.eventId} - ShopJoy BO`,description:a.eventTitle||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:$()})}catch(e){i(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},Pe=async()=>{try{await navigator.clipboard.writeText($()),i("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){i(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},j=_(null),N=_(!1),Se=async()=>{N.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC774\uBCA4\uD2B8\uC0C1\uC138_${a.eventId}.pdf`);await window.boUtil.bofExportPdf(j.value,e,i)}finally{N.value=!1}},D={};return D.productGrid=[{key:"productId",label:"ID"},{key:"prodNm",label:"\uC0C1\uD488\uBA85",refLink:"product",refKey:"productId"},{key:"category",label:"\uCE74\uD14C\uACE0\uB9AC"},{key:"price",label:"\uAC00\uACA9",fmt:e=>coUtil.cofWon(e)},{key:"stock",label:"\uC7AC\uACE0",fmt:e=>e+"\uAC1C"},{key:"status",label:"\uC0C1\uD0DC"},{type:"actions",actions:[{label:"\uC81C\uAC70",cls:"btn btn-danger btn-xs",onClick:e=>T("items-rowDelete",e.productId)}]}],D.timedealGrid=[{key:"prodNm",label:"\uC0C1\uD488\uBA85"},{key:"dealPoolId",label:"\uC0C1\uD0DC",fmt:e=>e?"\u26A1 \uC9C4\uD589\uC911":"\uBBF8\uB4F1\uB85D"},{key:"dealPrice",label:"\uD2B9\uAC00",fmt:e=>e?coUtil.cofWon(e):"-"},{key:"dealRemainQty",label:"\uC794\uC5EC/\uCD1D",fmt:(e,t)=>{var o,l;return t.dealPoolId?`${(o=t.dealRemainQty)!=null?o:0} / ${(l=t.dealTotalQty)!=null?l:0}`:"-"}},{key:"dealEndDate",label:"\uC885\uB8CC\uC77C\uC2DC",fmt:e=>e||"-"},{type:"actions",actions:[{label:"\uD0C0\uC784\uB51C\uB4F1\uB85D",cls:"btn btn-primary btn-xs",visible:e=>!e.dealPoolId,onClick:e=>T("timedeal-openForm",e)},{label:"\uD0C0\uC784\uB51C\uCDE8\uC18C",cls:"btn btn-warning btn-xs",visible:e=>!!e.dealPoolId,onClick:e=>T("timedeal-cancel",e)},{label:"\uC81C\uAC70",cls:"btn btn-danger btn-xs",visible:e=>!e.dealPoolId,onClick:e=>T("timedeal-removeTarget",e)}]}],D.infoForm=[{key:"eventTitle",label:"\uC774\uBCA4\uD2B8 \uC81C\uBAA9",type:"text",required:!0,placeholder:"\uC774\uBCA4\uD2B8 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694"},{key:"startDate",label:"\uC2DC\uC791\uC77C",type:"date"},{key:"endDate",label:"\uC885\uB8CC\uC77C",type:"date"},{key:"eventStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>C.event_statuses},{key:"authRequired",label:"\uB85C\uADF8\uC778 \uC778\uC99D \uD544\uC694",type:"checkbox",checkboxLabel:"\uB85C\uADF8\uC778 \uC778\uC99D \uD544\uC694",hideLabel:!0,checkedValue:!0,uncheckedValue:!1}],D.vendorForm=[{key:"vendorId",label:"\uD310\uB9E4\uC5C5\uCCB4",type:"pick",placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",display:e=>{const t=y.find(o=>o.vendorId===e.vendorId);return t?t.vendorNm:""},onOpen:()=>V("vendorModal-open"),onClear:()=>{a.chargeStaff=""}},{key:"chargeStaff",label:"\uD310\uB9E4\uB2F4\uB2F9\uC790",type:"text",placeholder:"\uB2F4\uB2F9\uC790\uBA85 \uC785\uB825"}],{coUtil,columns:D,vendors:y,products:u,form:a,errors:h,tabs:ne,timedealItems:m,timedealSkus:S,timedealForm:r,handleShareKakao:Ie,handleCopyLink:Pe,pdfAreaRef:j,pdfExporting:N,handleExportPdf:Se,handleBtnAction:V,handleSelectAction:T,fnCallbackModal:te,cfIsNew:w,cfSaveDisabled:ee,cfDtlMode:xe,cfSelectedProducts:fe,cfVisibilityOptions:be,cfSelectedVendorNm:he,cfTimedealRows:de,tab:H,tabMode2:W,activeContentTab:ye,showProdPopup:we,showVendorModal:ke,showTimedealProdPopup:Vue.toRef(n,"showTimedealProdPopup"),showTimedealForm:Vue.toRef(n,"showTimedealForm"),showTab:ae}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uC774\uBCA4\uD2B8 \uC0C1\uC138' : (cfIsNew ? '\uC774\uBCA4\uD2B8 \uB4F1\uB85D' : (cfDtlMode ? '\uC774\uBCA4\uD2B8 \uC0C1\uC138' : '\uC774\uBCA4\uD2B8 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.eventId)">
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
  <!-- ===== \u25A1.\u25A0. \uD0ED\uBC14 ==================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <!-- ===== \u25A0.\u25A0. \uBC30\uB108\uC774\uBBF8\uC9C0 ================================================= -->
    <div class="dtl-pane" v-show="showTab('banner')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F3A8} \uBC30\uB108\uC774\uBBF8\uC9C0</div>
      <div style="margin-bottom:12px;">
        <div v-if="!cfDtlMode" style="font-size:12px;color:#888;margin-bottom:6px;">\u{1F4A1} \uD301: \uC774\uBBF8\uC9C0 \uC0BD\uC785 \uD6C4 \uD06C\uAE30 \uC870\uC808 \uBC0F \uBC30\uCE58\uB97C \uC790\uC720\uB86D\uAC8C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</div>
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;overflow:auto;" v-html="form.bannerImage || '-'"></div>
        <base-html-editor v-else v-model="form.bannerImage" height="320px" />
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
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
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC774\uBCA4\uD2B8 \uC81C\uBAA9/\uAE30\uAC04/\uC0C1\uD0DC (BoFormArea \uC790\uB3D9 \uB80C\uB354) ===================== -->
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
      <bo-form-area plain-readonly :columns="columns.infoForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
      <div v-if="form.authRequired" style="padding:10px 14px;background:#fff7e6;border-radius:6px;border:1px solid #ffd591;font-size:12px;color:#d46b08;">
        \u26A0\uFE0F \uC778\uC99D \uD544\uC694 \uC124\uC815 \uC2DC, \uC774\uBCA4\uD2B8 \uB0B4\uC6A9 3~5\uB294 \uB85C\uADF8\uC778 \uD68C\uC6D0\uC5D0\uAC8C\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4.
      </div>
      <div style="margin-top:14px;">
        <div style="font-size:12px;font-weight:700;color:#888;margin-bottom:8px;">\u{1F512} \uACF5\uAC1C \uB300\uC0C1 (\uD558\uB098\uB77C\uB3C4 \uD574\uB2F9\uD558\uBA74 \uB178\uCD9C)</div>
        <bo-multi-check-select v-model="form.visibilityTargets" :options="cfVisibilityOptions"
          separator="^" wrap empty-value="^NONE^" placeholder="\uC804\uCCB4 \uACF5\uAC1C" all-label="\uC804\uCCB4 \uACF5\uAC1C"
          :disabled="cfDtlMode" min-width="320px" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4/\uD310\uB9E4\uB2F4\uB2F9\uC790 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ======================= -->
      <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e8e8e8;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area plain-readonly :columns="columns.vendorForm" :form="form" :errors="errors"
          :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
      <bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="showVendorModal" :on-callback="fnCallbackModal" />
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('info-form-edit')"
        :save-click="() => handleBtnAction('info-form-save')"
        :delete-click="() => handleBtnAction('info-form-delete')"
        :cancel-click="() => handleBtnAction('info-form-cancel')"
        :close-click="() => handleBtnAction('info-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uAE30\uBCF8\uC815\uBCF4 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uC774\uBCA4\uD2B8 \uB0B4\uC6A9 (HTML \uC5D0\uB514\uD130) ===================================== -->
    <div class="dtl-pane" v-show="showTab('content')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4DD} \uC774\uBCA4\uD2B8 \uB0B4\uC6A9</div>
      <div style="display:flex;gap:4px;margin-bottom:12px;flex-wrap:wrap;">
        <button v-for="n in 5" :key="Math.random()" class="btn btn-sm"
          :class="activeContentTab===n ? 'btn-primary' : 'btn-secondary'"
          @click="handleBtnAction('content-tab', n)">
          \uB0B4\uC6A9 {{ n }}
          <span v-if="form.authRequired ? (n >= 3) : false" class="tab-count" style="background:#fde8ee;color:#e8587a;">
            \uC778\uC99D
          </span>
        </button>
      </div>
      <div v-for="n in 5" :key="Math.random()" v-show="activeContentTab===n">
        <div v-if="form.authRequired ? (n >= 3) : false" style="display:flex;align-items:center;gap:8px;margin-bottom:8px;padding:8px 12px;background:#fff7e6;border-radius:6px;border:1px solid #ffd591;">
          <span class="badge badge-orange">\uC778\uC99D \uD6C4 \uD45C\uC2DC</span>
          <span style="font-size:12px;color:#888;">\uB85C\uADF8\uC778 \uD68C\uC6D0\uC5D0\uAC8C\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4</span>
        </div>
        <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:160px;line-height:1.6;" v-html="form['content'+n] || '-'"></div>
        <base-html-editor v-else :model-value="form['content'+n]" @update:model-value="v => form['content'+n] = v" height="220px" />
      </div>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('content-form-edit')"
        :save-click="() => handleBtnAction('content-form-save')"
        :delete-click="() => handleBtnAction('content-form-delete')"
        :cancel-click="() => handleBtnAction('content-form-cancel')"
        :close-click="() => handleBtnAction('content-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uC774\uBCA4\uD2B8 \uB0B4\uC6A9 (HTML \uC5D0\uB514\uD130) ===================================== -->
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
      <bo-grid bare :columns="columns.timedealGrid" :rows="cfTimedealRows" row-key="eventItemId"
        empty-text="\uB300\uC0C1\uC0C1\uD488\uC744 \uBA3C\uC800 \uCD94\uAC00\uD574\uC8FC\uC138\uC694." />
    </div>
    <!-- ===== \u25A1.\u25A1. \uD0C0\uC784\uB51C ===================================================== -->
    <!-- ===== \u25A0.\u25A0. \uB300\uC0C1 \uC0C1\uD488 ================================================= -->
    <div class="dtl-pane" v-show="showTab('products')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
        \u{1F6CD} \uB300\uC0C1 \uC0C1\uD488
        <span class="tab-count">{{ form.targetProducts.length }}</span>
      </div>
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px;">
        <button v-if="!cfDtlMode" class="btn btn-secondary" @click="handleBtnAction('prodPickModal-open')">+ \uC0C1\uD488 \uCD94\uAC00</button>
        <span style="font-size:13px;color:#888;">{{ form.targetProducts.length }}\uAC1C \uC120\uD0DD\uB428</span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.productGrid" :rows="cfSelectedProducts" row-key="productId"
        empty-text="\uC120\uD0DD\uB41C \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." @ref-click="({type,id}) => handleSelectAction('items-ref', {type, id})" />
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('products-form-edit')"
        :save-click="() => handleBtnAction('products-form-save')"
        :delete-click="() => handleBtnAction('products-form-delete')"
        :cancel-click="() => handleBtnAction('products-form-cancel')"
        :close-click="() => handleBtnAction('products-form-close')" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uB300\uC0C1 \uC0C1\uD488 ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <div class="dtl-pane" v-show="showTab('preview')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F441} \uBBF8\uB9AC\uBCF4\uAE30</div>
      <div style="background:#f9f9f9;border-radius:10px;padding:20px;border:1px solid #e8e8e8;max-width:600px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uB108 \uBBF8\uB9AC\uBCF4\uAE30 =========================================== -->
        <div v-if="form.bannerImage" style="margin-bottom:20px;padding:12px;background:#fff;border-radius:6px;border:1px solid #e0e0e0;overflow:hidden;" v-html="form.bannerImage"></div>
        <div style="font-size:18px;font-weight:700;margin-bottom:12px;color:#1a1a2e;">{{ form.eventTitle || '\uC774\uBCA4\uD2B8 \uC81C\uBAA9' }}</div>
        <div style="font-size:12px;color:#aaa;margin-bottom:16px;">{{ form.startDate }} ~ {{ form.endDate }}</div>
        <div style="font-size:13px;color:#444;margin-bottom:12px;" v-html="form.content1 || '<p style=color:#aaa>\uC774\uBCA4\uD2B8 \uB0B4\uC6A9 1\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p>'"></div>
        <div style="font-size:13px;color:#444;margin-bottom:12px;" v-html="form.content2"></div>
        <template v-if="!form.authRequired">
          <div style="font-size:13px;color:#444;margin-bottom:12px;" v-html="form.content3"></div>
          <div style="font-size:13px;color:#444;margin-bottom:12px;" v-html="form.content4"></div>
          <div style="font-size:13px;color:#444;margin-bottom:16px;" v-html="form.content5"></div>
        </template>
        <div v-else style="padding:12px;background:#f0f0f0;border-radius:6px;font-size:12px;color:#888;margin-bottom:16px;">
          \u{1F512} \uB0B4\uC6A9 3~5\uB294 \uB85C\uADF8\uC778 \uD6C4 \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
        </div>
        <div v-if="cfSelectedProducts.length > 0" style="margin-top:20px;padding-top:20px;border-top:1px solid #e0e0e0;">
          <div style="font-size:14px;font-weight:700;color:#333;margin-bottom:12px;">\u{1F3AF} \uB300\uC0C1 \uC0C1\uD488 ({{ cfSelectedProducts.length }}\uAC1C)</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;">
            <div v-for="p in cfSelectedProducts" :key="p?.productId" style="border:1px solid #e0e0e0;border-radius:6px;overflow:hidden;background:#fff;">
              <div style="height:100px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;font-size:32px;border-bottom:1px solid #e8e8e8;">
                \u{1F4E6}
              </div>
              <div style="padding:8px;font-size:11px;">
                <div style="font-weight:600;color:#222;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                  {{ p.prodNm }}
                </div>
                <div style="color:#e8587a;font-weight:700;">{{ (p.price||0).toLocaleString() }}\uC6D0</div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-primary" @click="handleBtnAction('preview-eventConfirm')" style="margin-top:16px;">\uC774\uBCA4\uD2B8 \uD655\uC778</button>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  </div>
</bo-container>
</div>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<!-- ===== \u25A0. \uC0C1\uD488 \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
<bo-cm-popup-modal popup-cmd="cmPopup-prod-pick" popup-code="prod" result-type="id" :show="showProdPopup" :selected-ids="form.targetProducts" title="\uB300\uC0C1 \uC0C1\uD488 \uC120\uD0DD" :on-callback="fnCallbackModal" />
<!-- ===== \u25A1. \uC0C1\uD488 \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
<!-- ===== \u25A0. \uD0C0\uC784\uB51C \uB300\uC0C1\uC0C1\uD488 \uC120\uD0DD \uD31D\uC5C5 ======================================= -->
<bo-cm-popup-modal popup-cmd="cmPopup-prod-pick-timedeal" popup-code="prod" result-type="id" :show="showTimedealProdPopup" :selected-ids="timedealItems.map(it => it.targetId)" title="\uD0C0\uC784\uB51C \uB300\uC0C1\uC0C1\uD488 \uC120\uD0DD" :on-callback="fnCallbackModal" />
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
