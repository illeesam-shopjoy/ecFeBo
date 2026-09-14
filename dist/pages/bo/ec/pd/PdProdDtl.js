window._pdProdDtlState=window._pdProdDtlState||{tab:"info",tabMode:"tab"};const PROD_FLAG_OPTIONS=[{value:"isNew",label:"\uC2E0\uC0C1\uD488"},{value:"isBest",label:"\uBCA0\uC2A4\uD2B8"},{value:"adltYn",label:"\uC131\uC778\uC0C1\uD488"},{value:"sameDayDlivYn",label:"\uB2F9\uC77C\uBC30\uC1A1"},{value:"soldOutYn",label:"\uAC15\uC81C\uD488\uC808"}];window.PdProdDtl={name:"PdProdDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},onListReload:{type:Function,default:()=>{}},reloadTrigger:{type:Number,default:0},fixedProdTypeCd:{type:String,default:null},setTabLabel:{type:Function,default:()=>{}}},setup(y){const ln=window.nextId||{value:(e,t)=>((e||[]).reduce((o,n)=>Math.max(o,Number(n==null?void 0:n[t])||0),0)||0)+1},{ref:M,reactive:k,computed:v,onMounted:eo,watch:Z,onBeforeUnmount:to,nextTick:oo}=Vue,c=window.boApp.showToast,L=window.boApp.showConfirm,nn=window.boApp.showRefModal,{safeFirst:de,safeGet:an,safeFind:lo,safeFilter:ee}=window.safeArrayUtils,ie=k([]),Te=k([]),se=k([]),re=k([]),l=k({isDraggingDivider:!1,loading:!1,mdModalOpen:!1,error:null,topTab:window._pdProdDtlState.tab||"info",tabMode2:window._pdProdDtlState.tabMode||"tab",prodOptCategoryTypeCd:"",dragOptGrpId:null,dragOptItemIdx:null,dragoverOptItemIdx:null,skuFilter1:"",skuFilter2:"",skuFilterStock:"",dragImgIdx:null,dragoverImgIdx:null,dragBlockIdx:null,dragoverBlockIdx:null,splitPct:65,previewDevice:"pc",prodPickerOpen:"",prodPickerSearch:"",dragRelIdx:null,dragoverRelIdx:null,dragCodeIdx:null,dragoverCodeIdx:null,catPickerOpen:!1,catPickerSearch:"",catDragIdx:null,catDragoverIdx:null,mdSearchType:"",mdSearch:"",prodPickerSearchType:"",promoPicker:null,uploadOpt1:"",skuView:"list",skuMxField:"addPrice",skuMxBulk:"",dropOpt1:null,dragImgId:null}),dn=Vue.toRef(l,"tab"),j=k([]),P=k({PROD_STATUS_CD:[],PROD_TYPE:[],PROD_PLAN_STATUS:[],OPT_STOCK_STATUS:[],STOCK_FILTER:[],DLIV_METHOD:[]}),no=()=>(P.PROD_TYPE.find(e=>e.codeValue===r.prodTypeCd)||{}).codeLabel||"",U=(e,t={})=>{const o=["info","option","content","detail","promo","image","related","price","bundle","setitems"];if(o.map(n=>n+"-form-save").includes(e))return wl();if(o.map(n=>n+"-form-cancel").includes(e))return y.navigate("__cancelEdit__");if(o.map(n=>n+"-form-close").includes(e))return y.navigate("__closeDtl__");if(o.map(n=>n+"-form-edit").includes(e))return y.navigate("__switchToEdit__");if(e==="tab-select"){G.value=t;return}else if(e==="tab-mode"){fe.value=t;return}else{if(e==="form-preview")return $l();if(e==="form-seo-test")return ql();if(e==="promo-coupon-reload"){if(!b.value)return;boApiSvc.pmCouponItem.getList({targetId:b.value,targetTypeCd:"PRODUCT"},"\uC0C1\uD488\uAD00\uB9AC","\uCFE0\uD3F0\uC7AC\uC870\uD68C").then(n=>{var a;return p.promoCoupons.splice(0,p.promoCoupons.length,...((a=n.data)==null?void 0:a.data)||[])}).catch(()=>{});return}else if(e==="promo-save-reload"){if(!b.value)return;boApiSvc.pmSaveItem.getList({targetId:b.value,targetTypeCd:"PRODUCT"},"\uC0C1\uD488\uAD00\uB9AC","\uC801\uB9BD\uAE08\uC7AC\uC870\uD68C").then(n=>{var a;return p.promoSaves.splice(0,p.promoSaves.length,...((a=n.data)==null?void 0:a.data)||[])}).catch(()=>{});return}else if(e==="promo-discnt-reload"){if(!b.value)return;boApiSvc.pmDiscntItem.getList({targetId:b.value,targetTypeCd:"PRODUCT"},"\uC0C1\uD488\uAD00\uB9AC","\uD560\uC778\uC7AC\uC870\uD68C").then(n=>{var a;return p.promoDiscnts.splice(0,p.promoDiscnts.length,...((a=n.data)==null?void 0:a.data)||[])}).catch(()=>{});return}else if(e==="promo-coupon-delete"){if(!t)return;L("\uC0AD\uC81C","\uC774 \uC0C1\uD488\uC744 \uCFE0\uD3F0 \uB300\uC0C1\uC5D0\uC11C \uC81C\uAC70\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?").then(n=>{n&&boApiSvc.pmCouponItem.remove(t,"\uC0C1\uD488\uAD00\uB9AC","\uCFE0\uD3F0\uC0AD\uC81C").then(()=>{c("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),U("promo-coupon-reload")}).catch(a=>{var s,d;return c(((d=(s=a.response)==null?void 0:s.data)==null?void 0:d.message)||"\uC0AD\uC81C \uC2E4\uD328","error",0)})});return}else if(e==="promo-save-delete"){if(!t)return;L("\uC0AD\uC81C","\uC774 \uC0C1\uD488\uC744 \uC801\uB9BD\uAE08 \uB300\uC0C1\uC5D0\uC11C \uC81C\uAC70\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?").then(n=>{n&&boApiSvc.pmSaveItem.remove(t,"\uC0C1\uD488\uAD00\uB9AC","\uC801\uB9BD\uAE08\uC0AD\uC81C").then(()=>{c("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),U("promo-save-reload")}).catch(a=>{var s,d;return c(((d=(s=a.response)==null?void 0:s.data)==null?void 0:d.message)||"\uC0AD\uC81C \uC2E4\uD328","error",0)})});return}else if(e==="promo-discnt-delete"){if(!t)return;L("\uC0AD\uC81C","\uC774 \uC0C1\uD488\uC744 \uD560\uC778 \uB300\uC0C1\uC5D0\uC11C \uC81C\uAC70\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?").then(n=>{n&&boApiSvc.pmDiscntItem.remove(t,"\uC0C1\uD488\uAD00\uB9AC","\uD560\uC778\uC0AD\uC81C").then(()=>{c("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),U("promo-discnt-reload")}).catch(a=>{var s,d;return c(((d=(s=a.response)==null?void 0:s.data)==null?void 0:d.message)||"\uC0AD\uC81C \uC2E4\uD328","error",0)})});return}else if(e==="promo-coupon-add"){l.promoPicker="coupon";return}else if(e==="promo-save-add"){l.promoPicker="save";return}else if(e==="promo-discnt-add"){l.promoPicker="discnt";return}else if(e==="promo-coupon-pick"){if(!(t!=null&&t.couponId)||!b.value)return;boApiSvc.pmCouponItem.create({couponId:t.couponId,targetTypeCd:"PRODUCT",targetId:b.value},"\uC0C1\uD488\uAD00\uB9AC","\uCFE0\uD3F0\uCD94\uAC00").then(()=>{l.promoPicker=null,c("\uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),U("promo-coupon-reload")}).catch(n=>{var a,s;return c(((s=(a=n.response)==null?void 0:a.data)==null?void 0:s.message)||"\uCD94\uAC00 \uC2E4\uD328","error",0)});return}else if(e==="promo-save-pick"){if(!(t!=null&&t.saveId)||!b.value)return;boApiSvc.pmSaveItem.create({saveId:t.saveId,targetTypeCd:"PRODUCT",targetId:b.value},"\uC0C1\uD488\uAD00\uB9AC","\uC801\uB9BD\uAE08\uCD94\uAC00").then(()=>{l.promoPicker=null,c("\uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),U("promo-save-reload")}).catch(n=>{var a,s;return c(((s=(a=n.response)==null?void 0:a.data)==null?void 0:s.message)||"\uCD94\uAC00 \uC2E4\uD328","error",0)});return}else if(e==="promo-discnt-pick"){if(!(t!=null&&t.discntId)||!b.value)return;boApiSvc.pmDiscntItem.create({discntId:t.discntId,targetTypeCd:"PRODUCT",targetId:b.value},"\uC0C1\uD488\uAD00\uB9AC","\uD560\uC778\uCD94\uAC00").then(()=>{l.promoPicker=null,c("\uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),U("promo-discnt-reload")}).catch(n=>{var a,s;return c(((s=(a=n.response)==null?void 0:a.data)==null?void 0:s.message)||"\uCD94\uAC00 \uC2E4\uD328","error",0)});return}else if(e==="promo-gift-reload"){if(!b.value)return;boApiSvc.pmGiftCond.getList({targetId:b.value,targetTypeCd:"PRODUCT"},"\uC0C1\uD488\uAD00\uB9AC","\uC0AC\uC740\uD488\uC7AC\uC870\uD68C").then(n=>{var a;return p.promoGifts.splice(0,p.promoGifts.length,...((a=n.data)==null?void 0:a.data)||[])}).catch(()=>{});return}else if(e==="promo-gift-delete"){if(!t)return;L("\uC0AD\uC81C","\uC774 \uC0C1\uD488\uC744 \uC0AC\uC740\uD488 \uB300\uC0C1\uC5D0\uC11C \uC81C\uAC70\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?").then(n=>{n&&boApiSvc.pmGiftCond.remove(t,"\uC0C1\uD488\uAD00\uB9AC","\uC0AC\uC740\uD488\uC0AD\uC81C").then(()=>{c("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),U("promo-gift-reload")}).catch(a=>{var s,d;return c(((d=(s=a.response)==null?void 0:s.data)==null?void 0:d.message)||"\uC0AD\uC81C \uC2E4\uD328","error",0)})});return}else if(e==="promo-gift-add"){l.promoPicker="gift";return}else if(e==="promo-gift-pick"){if(!(t!=null&&t.giftId)||!b.value)return;boApiSvc.pmGiftCond.create({giftId:t.giftId,targetTypeCd:"PRODUCT",targetId:b.value},"\uC0C1\uD488\uAD00\uB9AC","\uC0AC\uC740\uD488\uCD94\uAC00").then(()=>{l.promoPicker=null,c("\uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),U("promo-gift-reload")}).catch(n=>{var a,s;return c(((s=(a=n.response)==null?void 0:a.data)==null?void 0:s.message)||"\uCD94\uAC00 \uC2E4\uD328","error",0)});return}else if(e==="catPicker-open"){l.catPickerOpen=!0;return}else{if(e==="category-remove")return Pt(t);if(e==="mdModal-open")return Mt();if(e==="md-clear"){r.mdUserId="";return}else{if(e==="md-select")return At(t);if(e==="catPicker-close"){l.catPickerOpen=!1;return}else if(e==="mdModal-close"){l.mdModalOpen=!1;return}else{if(e==="help-open")return Bt(t);if(e==="codeGrpModal-open")return Vt(t.codeGrp,t.title);if(e==="optGroup-remove")return Re(t);if(e==="optItem-add")return it(t);if(e==="optItem-remove")return st(t.grp,t.ii);if(e==="contentBlock-add")return It(t);if(e==="contentBlock-remove")return wt(t);if(e==="contentBlock-clearFile"){Ve(t),t.content="",t.fileName="",t.attachId=null,t._persisted=!1;return}else if(e==="preview-setDevice"){l.previewDevice=t;return}else{if(e==="plan-deleteChecked")return Tt();if(e==="plan-addRow")return Ot();if(e==="img-triggerFile")return yt(t);if(e==="img-addByUrl")return vt(t);if(e==="img-setMain")return ht(t);if(e==="img-replaceFile")return Yo(t);if(e==="img-remove")return kt(t);if(e==="prodPicker-open")return St(t);if(e==="rel-remove")return Ct(t);if(e==="codeProd-remove")return _t(t);if(e==="sku-filterReset")l.skuFilter1="",l.skuFilter2="",l.skuFilterStock="";else{if(e==="sku-generate")return Y();if(e==="sku-move")return ft(t.sku,t.dir);if(e==="tabPage-change")return Je(t.key,t.pageNo);if(e==="bundlePicker-open")Se.value=!0;else{if(e==="bundleItem-remove")return zt(t);if(e==="setPicker-open")Ce.value=!0;else{if(e==="setItem-addEmpty")return Qe(null);if(e==="setItem-remove")return Ft(t);console.warn("[handleBtnAction] unknown cmd:",e)}}}}}}}}},sn=(e,t={})=>{console.warn("[handleSelectAction] unknown cmd:",e)},ao=(e,t,o)=>{if(e==="cmPopup-category-pick"){if(o==null){l.catPickerOpen=!1;return}return fl(o)}else if(e==="cmPopup-bundle-pick"){if(o==null){Se.value=!1;return}return Ut(o)}else if(e==="cmPopup-set-pick"){if(o==null){Ce.value=!1;return}return Qe(o)}else if(e==="cmPopup-md-pick"){if(o==null){l.mdModalOpen=!1;return}return U("md-select",o)}else if(e==="cmPopup-code-grp"){if(o==null){le.show=!1;return}return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},io=async()=>{try{const e=window.sfGetBoCodeStore();if(await e.saLoadCodes(["PROD_STATUS_CD","PROD_TYPE_CD","PROD_PLAN_STATUS","OPT_STOCK_STATUS","STOCK_FILTER","DLIV_METHOD_CD","PROD_OPT_CATEGORY"],{compNm:"PdProdDtl"}),!(e!=null&&e.svCodes))return;j.length=0,j.push(...e.svCodes),e.sgGetGrpCodes&&(P.PROD_STATUS_CD=e.sgGetGrpCodes("PROD_STATUS_CD"),P.PROD_TYPE=e.sgGetGrpCodes("PROD_TYPE_CD"),P.PROD_PLAN_STATUS=e.sgGetGrpCodes("PROD_PLAN_STATUS"),P.OPT_STOCK_STATUS=e.sgGetGrpCodes("OPT_STOCK_STATUS"),P.STOCK_FILTER=e.sgGetGrpCodes("STOCK_FILTER"),P.DLIV_METHOD=e.sgGetGrpCodes("DLIV_METHOD_CD"))}catch(e){console.error("[fnLoadCodes]",e)}},pe=k({images:{pageNo:1,pageSize:10,totalCount:0},opts:{pageNo:1,pageSize:10,totalCount:0},skus:{pageNo:1,pageSize:10,totalCount:0},content:{pageNo:1,pageSize:10,totalCount:0},rels:{pageNo:1,pageSize:10,totalCount:0}}),p=k({images:[],opts:{groups:[],items:[]},skus:[],content:[],rels:[],bundleItems:[],setItems:[],promoCoupons:[],promoSaves:[],promoDiscnts:[],promoGifts:[]}),Je=(e,t)=>{pe[e].pageNo=t},Ze=e=>Math.ceil(p[e].length/pe[e].pageSize)||1,so=e=>{const t=Ze(e),o=pe[e].pageNo,n=Math.max(1,o-2),a=Math.min(t,n+4);return Array.from({length:a-n+1},(s,d)=>n+d)},ce=async()=>{var e,t,o,n,a,s,d,i,f,I,A,F,w,ne,_e,Q,C,Pe,Kt,$t,qt,Ht,Qt,jt;l.loading=!0;try{const ae=!y.dtlId,Wt=[boApiSvc.syUser.getPage({pageNo:1,pageSize:1e3},"\uC0C1\uD488\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C"),boApiSvc.pdCategory.getPage({pageNo:1,pageSize:1e3},"\uC0C1\uD488\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C")];ae||Wt.push(boApiSvc.pdProd.getById(y.dtlId,"\uC0C1\uD488\uAD00\uB9AC","\uAE30\uBCF8\uC815\uBCF4\uC870\uD68C"),boApiSvc.pdProd.getImages(y.dtlId,"\uC0C1\uD488\uAD00\uB9AC","\uC774\uBBF8\uC9C0\uC870\uD68C"),boApiSvc.pdProd.getOpts(y.dtlId,"\uC0C1\uD488\uAD00\uB9AC","\uC635\uC158\uC870\uD68C"),boApiSvc.pdProd.getSkus(y.dtlId,"\uC0C1\uD488\uAD00\uB9AC","SKU\uC870\uD68C"),boApiSvc.pdProd.getContents(y.dtlId,"\uC0C1\uD488\uAD00\uB9AC","\uC0C1\uD488\uC124\uBA85\uC870\uD68C"),boApiSvc.pdProd.getRels(y.dtlId,"\uC0C1\uD488\uAD00\uB9AC","\uC5F0\uAD00\uC0C1\uD488\uC870\uD68C"),boApiSvc.pdCategory.getProds({prodId:y.dtlId,pageNo:1,pageSize:1e3},"\uC0C1\uD488\uAD00\uB9AC","\uCE74\uD14C\uACE0\uB9AC\uB9E4\uD551\uC870\uD68C"));const E=await Promise.all(Wt);if(Te.splice(0,Te.length,...((t=(e=E[0].data)==null?void 0:e.data)==null?void 0:t.pageList)||((n=(o=E[0].data)==null?void 0:o.data)==null?void 0:n.list)||[]),se.splice(0,se.length,...((s=(a=E[1].data)==null?void 0:a.data)==null?void 0:s.pageList)||((i=(d=E[1].data)==null?void 0:d.data)==null?void 0:i.list)||[]),!ae){const X=E[8];re.splice(0,re.length,...((I=(f=X==null?void 0:X.data)==null?void 0:f.data)==null?void 0:I.pageList)||((F=(A=X==null?void 0:X.data)==null?void 0:A.data)==null?void 0:F.list)||[]);const J=((w=E[2].data)==null?void 0:w.data)||E[2].data;J&&ie.splice(0,ie.length,J);const Zl=J.prodImgs||[];p.images.splice(0,p.images.length,...Zl.map(g=>({...g,id:he++,previewUrl:g.cdnImgUrl||g.cdnThumbUrl||"",isMain:g.isThumb==="Y",prodOpt1Id:g.prodOpt1Id||"",prodOpt2Id:g.prodOpt2Id||"",_persisted:!0})));const Xt=((_e=(ne=E[4])==null?void 0:ne.data)==null?void 0:_e.data)||{},We=Xt.optTypes||[],Jt=Xt.opts||[];if(p.opts.groups.splice(0,p.opts.groups.length,...We),p.opts.items.splice(0,p.opts.items.length,...Jt),We.length){const g=We.map(T=>{const h=Number(T.optTypeLevel)||1,K=new Set,Xe=[];return Jt.filter(_=>Number(_.prodOptTypeLevel)===h).sort((_,Oe)=>(Number(_.sortOrd)||0)-(Number(Oe.sortOrd)||0)).forEach(_=>{const Oe=(_.prodOptNm||"")+"||"+(_.prodOptVal||"");h===2&&K.has(Oe)||(K.add(Oe),Xe.push({_id:_.prodOptId,nm:_.prodOptNm||"",val:_.prodOptVal||"",stdCd:_.prodOptStdCd||"",prodOptStyle:_.prodOptStyle||"",parentOptId:"",sortOrd:Number(_.sortOrd||0),useYn:_.useYn||"Y"}))}),{_id:Ae++,grpNm:T.optTypeCd||"",level1Cd:J.prodOptStdCd||"",level2Cd:T.optTypeCd||"",level:h,items:Xe}});g.sort((T,h)=>T.level-h.level),m.splice(0,m.length,...g)}const en=J.prodSkus||[];p.skus.splice(0,p.skus.length,...en.map(g=>({...g,_id:"sku_"+g.prodSkuId,_optKey:g.prodOpt2Id?g.prodOpt1Id+"_"+g.prodOpt2Id:String(g.prodOpt1Id||""),_nm1:g.prodOptNm1||"",_nm2:g.prodOptNm2||"",stock:g.stockQty||0})));const tn=((Q=E[6].data)==null?void 0:Q.data)||[];p.content.splice(0,p.content.length,...tn);const on=((C=E[7].data)==null?void 0:C.data)||[];p.rels.splice(0,p.rels.length,...on.map(g=>({...g,_id:Dt++,prodNm:g.relProdNm||g.prodNm||""})));const Zt=(J.prodTypeCd||"").toUpperCase();if(Zt==="GROUP")try{const T=((Pe=(await boApiSvc.pdBundle.getItems(y.dtlId,"\uC0C1\uD488\uAD00\uB9AC","\uBB36\uC74C\uAD6C\uC131\uC870\uD68C")).data)==null?void 0:Pe.data)||[];p.bundleItems.splice(0,p.bundleItems.length,...T.map((h,K)=>({...h,_id:K+1})))}catch{p.bundleItems.splice(0)}if(Zt==="SET")try{const T=((Kt=(await boApiSvc.pdSet.getItems(y.dtlId,"\uC0C1\uD488\uAD00\uB9AC","\uC138\uD2B8\uAD6C\uC131\uC870\uD68C")).data)==null?void 0:Kt.data)||[];p.setItems.splice(0,p.setItems.length,...T.map((h,K)=>({...h,_id:K+1})))}catch{p.setItems.splice(0)}try{const[g,T,h,K,Xe,_]=await Promise.all([boApiSvc.pmCouponItem.getList({targetId:y.dtlId,targetTypeCd:"PRODUCT"},"\uC0C1\uD488\uAD00\uB9AC","\uCFE0\uD3F0\uC870\uD68C"),boApiSvc.pmSaveItem.getList({targetId:y.dtlId,targetTypeCd:"PRODUCT"},"\uC0C1\uD488\uAD00\uB9AC","\uC801\uB9BD\uAE08\uC870\uD68C"),boApiSvc.pmDiscntItem.getList({targetId:y.dtlId,targetTypeCd:"PRODUCT"},"\uC0C1\uD488\uAD00\uB9AC","\uD560\uC778\uC870\uD68C"),boApiSvc.pmGiftCond.getList({targetId:y.dtlId,targetTypeCd:"PRODUCT"},"\uC0C1\uD488\uAD00\uB9AC","\uC0AC\uC740\uD488\uC870\uD68C")]);p.promoCoupons.splice(0,p.promoCoupons.length,...(($t=g.data)==null?void 0:$t.data)||[]),p.promoSaves.splice(0,p.promoSaves.length,...((qt=T.data)==null?void 0:qt.data)||[]),p.promoDiscnts.splice(0,p.promoDiscnts.length,...((Ht=h.data)==null?void 0:Ht.data)||[]),p.promoGifts.splice(0,p.promoGifts.length,...((Qt=K.data)==null?void 0:Qt.data)||[])}catch{p.promoCoupons.splice(0),p.promoSaves.splice(0),p.promoDiscnts.splice(0),p.promoGifts.splice(0)}try{const T=((jt=(await boApiSvc.pdProd.getPlans(y.dtlId,"\uC0C1\uD488\uAD00\uB9AC","\uD310\uB9E4\uACC4\uD68D\uC870\uD68C")).data)==null?void 0:jt.data)||[];B.splice(0,B.length,...T.map(h=>({...h,_id:$e++,_row_status:"N",_checked:!1,startDate:h.startDatetime?String(h.startDatetime).slice(0,10):"",startTime:h.startDatetime?String(h.startDatetime).slice(11,16):"00:00",endDate:h.endDatetime?String(h.endDatetime).slice(0,10):"",endTime:h.endDatetime?String(h.endDatetime).slice(11,16):"23:59",planStatus:h.planStatusCd||"SCHEDULED"})))}catch{B.splice(0)}}l.error=null}catch(ae){console.error("[catch-info]",ae),l.error=ae.message}finally{l.loading=!1}},Me=v(()=>!y.dtlId),G=M(l.topTab),fe=M(l.tabMode2);Z(G,e=>{l.topTab=e,window._pdProdDtlState.tab=e}),Z(()=>y.dtlId,()=>{u.splice(0),m.splice(0),x.splice(0),S.splice(0),z.splice(0),p.images.splice(0),p.skus.splice(0),p.content.splice(0),p.rels.splice(0),p.opts.groups.splice(0),p.opts.items.splice(0),p.bundleItems.splice(0),p.setItems.splice(0),p.promoCoupons.splice(0),p.promoSaves.splice(0),p.promoDiscnts.splice(0),p.promoGifts.splice(0)}),Z(fe,e=>{l.tabMode2=e,window._pdProdDtlState.tabMode=e});const ro=e=>fe.value!=="tab"||G.value===e,et=k([{id:"info",label:"\uAE30\uBCF8\uC815\uBCF4",icon:"\u{1F4CB}"},{id:"detail",label:"\uC0C1\uC138\uC124\uC815",icon:"\u{1F4DD}"},{id:"promo",label:"\uD504\uB85C\uBAA8\uC158",icon:"\u{1F3AF}"},{id:"content",label:"\uC0C1\uD488\uC124\uBA85",icon:"\u{1F4C4}",get count(){return p.content.length}},{id:"option",label:"\uC635\uC158\uC124\uC815",icon:"\u2699",get visible(){return r.prodTypeCd==="OPTION"},get count(){return p.opts.groups.length}},{id:"price",label:"\uC635\uC158(\uAC00\uACA9/\uC7AC\uACE0)",icon:"\u{1F4B0}",get visible(){return r.prodTypeCd==="OPTION"},get count(){return p.skus.length}},{id:"bundle",label:"\uBB36\uC74C\uAD6C\uC131",icon:"\u{1F4E6}",get visible(){return r.prodTypeCd==="GROUP"}},{id:"setitems",label:"\uC138\uD2B8\uAD6C\uC131",icon:"\u{1F381}",get visible(){return r.prodTypeCd==="SET"}},{id:"image",label:"\uC774\uBBF8\uC9C0",icon:"\u{1F5BC}",get count(){return u.length}},{id:"related",label:"\uC5F0\uAD00\uC0C1\uD488",icon:"\u{1F517}",get count(){return p.rels.length}}]),r=k({prodId:null,prodNm:"",prodCode:"",categoryId:"",brandId:"",brandNm:"",vendorId:"",vendorNm:"",mdUserId:"",prodTypeCd:"OPTION",prodStatusCd:"DRAFT",unsaleMsg:"",dlivTmpltId:"",dlivMethodCd:"",stdPrice:0,salePrice:0,currCd:"KRW",saleDiscntRate:null,saleDiscntAmt:null,purchasePrice:null,marginRate:null,platformFeeRate:null,platformFeeAmount:null,saleStartDate:"",saleEndDate:"",dispStartDate:"",dispEndDate:"",minBuyQty:1,maxBuyQty:null,dayMaxBuyQty:null,idMaxBuyQty:null,adltYn:"N",sameDayDlivYn:"N",soldOutYn:"N",couponUseYn:"Y",saveUseYn:"Y",discntUseYn:"Y",advrtStmt:"",advrtStartDate:"",advrtEndDate:"",weight:null,sizeInfoCd:"",isNew:"N",isBest:"N",contentHtml:""}),$=k({}),po=yup.object({prodNm:yup.string().required("\uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),prodTypeCd:yup.string().required("\uC0C1\uD488\uC720\uD615\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."),dlivTmpltId:yup.string().required("\uBC30\uC1A1\uD15C\uD50C\uB9BF\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."),stdPrice:yup.number().typeError("\uC22B\uC790 \uC785\uB825").min(0).required("\uC815\uAC00\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),salePrice:yup.number().typeError("\uC22B\uC790 \uC785\uB825").min(0).required("\uD310\uB9E4\uAC00\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.")});Z(()=>r.prodTypeCd,()=>{const e=et.find(t=>t.id===G.value);e&&e.visible===!1&&(G.value="info")});let Ae=1,tt=100;const m=k([]),x=k([]),ue="PROD_OPT_CATEGORY",ge=e=>{var t,o,n,a,s,d,i,f,I,A,F,w;return{codeId:e.codeId,codeValue:(o=(t=e.codeVal)!=null?t:e.codeValue)!=null?o:"",codeLabel:(s=(a=(n=e.codeNm)!=null?n:e.codeLabel)!=null?a:e.codeVal)!=null?s:"",codeLevel:Number((d=e.codeLevel)!=null?d:1),parentCodeValue:(i=e.parentCodeValue)!=null?i:null,sortOrd:Number((I=(f=e.codeSortOrd)!=null?f:e.sortOrd)!=null?I:0),codeRemark:(A=e.codeRemark)!=null?A:"",codeOpt1:(F=e.codeOpt1)!=null?F:"",useYn:(w=e.useYn)!=null?w:"Y"}},me=(e,t)=>(e.sortOrd||0)-(t.sortOrd||0),co=e=>e?String(e).substring(0,16).replace("T"," "):"-",be=e=>{if(!e)return"\uBB34\uAE30\uD55C";const o=new Date(String(e).slice(0,10)+"T23:59:59").getTime()-Date.now();if(o<=0)return"\uB9CC\uB8CC";let n=Math.floor(o/36e5);const a=Math.floor(n/(24*365));n-=a*24*365;const s=Math.floor(n/720);n-=s*24*30;const d=Math.floor(n/24);n-=d*24;const i=[];return a&&i.push(a+"\uB144"),s&&i.push(s+"\uAC1C\uC6D4"),d&&i.push(d+"\uC77C"),i.push(n+"\uC2DC\uAC04"),i.join(" ")},ot=v(()=>(j||[]).filter(e=>e.codeGrp===ue&&e.useYn==="Y"&&Number(e.codeLevel||1)===1).map(ge).sort(me)),ye=e=>e?(j||[]).filter(t=>t.codeGrp===ue&&t.useYn==="Y"&&Number(t.codeLevel||0)===2&&t.parentCodeValue===e).map(ge).sort(me):[],lt=v(()=>ye(l.prodOptCategoryTypeCd)),Ne=e=>e?(j||[]).filter(t=>t.codeGrp===ue&&t.useYn==="Y"&&Number(t.codeLevel||0)===3&&t.parentCodeValue===e).map(ge).sort(me):[],fo=v(()=>(j||[]).filter(e=>e.codeGrp===ue&&e.useYn==="Y"&&Number(e.codeLevel||0)===2).map(ge).sort(me)),nt=(e,t,o)=>({_id:tt++,nm:e&&(e.codeLabel||e.codeValue)||"",val:e&&e.codeValue||"",stdCd:e&&e.codeValue||"",prodOptStyle:e&&e.codeOpt1||"",parentOptId:o||"",sortOrd:t,useYn:"Y"}),ve=e=>{const t=e?Ne(e):[];return t.length&&!t[0].codeId&&console.warn("[PdProdDtl] \uD504\uB9AC\uC14B\uC5D0 codeId \uAC00 \uC5C6\uC2B5\uB2C8\uB2E4 \u2014 \uBC31\uC5D4\uB4DC \uC7AC\uAE30\uB3D9/\uC7AC\uB85C\uADF8\uC778 \uD544\uC694",t[0]),t.map((o,n)=>nt(o,n+1,""))},xe=e=>(e?Ne(e):[]).map((o,n)=>nt(o,n+1,""));let Be=l.prodOptCategoryTypeCd||"";const at=e=>{if(!e)return"(\uBBF8\uC120\uD0DD)";const t=ot.value.find(o=>o.codeValue===e);return t?`${t.codeLabel} (${e})`:e},uo=()=>{ye(l.prodOptCategoryTypeCd).slice(0,2).forEach((o,n)=>{const a=n+1,s=a===1?ve(o.codeValue):xe(o.codeValue);m.push({_id:Ae++,grpNm:o.codeLabel||o.codeValue,level1Cd:l.prodOptCategoryTypeCd||"",level2Cd:o.codeValue,level:a,items:s})}),Y(),Be=l.prodOptCategoryTypeCd},go=async()=>{const e=l.prodOptCategoryTypeCd,t=Be,o=m.some(s=>(s.items||[]).length>0),n=x.length>0,a=u.length>0;if(t&&t!==e&&(o||n||a)&&!await L("\uC635\uC158 \uCE74\uD14C\uACE0\uB9AC \uBCC0\uACBD",`\uC635\uC158 \uCE74\uD14C\uACE0\uB9AC\uAC00 ${at(t)} \uC5D0\uC11C ${at(e)} \uC73C\uB85C \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.
\uAC12\uC774 \uBCC0\uACBD\uB418\uBA74 \uC635\uC158\uD56D\uBAA9 / \uC635\uC158(\uAC00\uACA9\xB7\uC7AC\uACE0) / \uC774\uBBF8\uC9C0 \uAC00 \uBAA8\uB450 \uC0AD\uC81C\uB429\uB2C8\uB2E4.
\uADF8\uB798\uB3C4 \uBCC0\uACBD\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)){l.prodOptCategoryTypeCd=t;return}m.length=0,x.length=0,u.length=0,uo()},dt=()=>{if(!l.prodOptCategoryTypeCd){c("\uC635\uC158 \uCE74\uD14C\uACE0\uB9AC\uB97C \uBA3C\uC800 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}if(m.length>=2){c("\uC635\uC158\uC740 \uCD5C\uB300 2\uB2E8\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4.","error");return}const e=ye(l.prodOptCategoryTypeCd),t=new Set(m.map(s=>s.level2Cd).filter(Boolean)),o=e.find(s=>!t.has(s.codeValue))||e[m.length]||null,n=m.length+1,a=n===1?ve(o?o.codeValue:""):xe(o?o.codeValue:"");m.push({_id:Ae++,grpNm:o?o.codeLabel||o.codeValue:"\uC635\uC158",level1Cd:l.prodOptCategoryTypeCd||"",level2Cd:o?o.codeValue:"",level:n,items:a}),Y()},te=e=>m[e-1]&&m[e-1].level2Cd||"",mo=e=>{const t=te(e);if(!t)return"-";const o=lt.value.find(n=>n.codeValue===t);return o&&o.codeLabel||t},bo=(e,t)=>{if(!t){e===2&&m[1]&&Re(1);return}if(!l.prodOptCategoryTypeCd){c("\uC635\uC158 \uCE74\uD14C\uACE0\uB9AC\uB97C \uBA3C\uC800 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}for(;m.length<e;)dt();const o=m[e-1];if(!o)return;const n=(ye(l.prodOptCategoryTypeCd)||[]).find(s=>s.codeValue===t);o.level2Cd=t,o.grpNm=n&&n.codeLabel||t;const a=e===1?ve(t):xe(t);o.items.splice(0,o.items.length,...a),Y()},Re=e=>{m.splice(e,1),window.safeArrayUtils.safeForEach(m,(t,o)=>{t.level=o+1}),Y()},it=e=>{e.items.push({_id:tt++,nm:"",val:"",stdCd:"",prodOptStyle:"",parentOptId:"",sortOrd:e.items.length+1,useYn:"Y"})},st=(e,t)=>{e.items.splice(t,1),Y()},yo=(e,t)=>{l.dragOptGrpId=e._id,l.dragOptItemIdx=t},vo=(e,t)=>{l.dragOptGrpId===e._id&&(l.dragoverOptItemIdx=t)},xo=e=>{if(l.dragOptItemIdx===null||l.dragOptItemIdx===l.dragoverOptItemIdx){l.dragOptGrpId=null,l.dragOptItemIdx=null,l.dragoverOptItemIdx=null;return}const t=[...e.items],[o]=t.splice(l.dragOptItemIdx,1);t.splice(l.dragoverOptItemIdx,0,o),e.items=t,l.dragOptGrpId=null,l.dragOptItemIdx=null,l.dragoverOptItemIdx=null,Y()},ho=v({get:()=>PROD_FLAG_OPTIONS.filter(e=>r[e.value]==="Y").map(e=>e.value).join(","),set:e=>{const t=new Set((e||"").split(",").filter(Boolean));PROD_FLAG_OPTIONS.forEach(o=>{r[o.value]=t.has(o.value)?"Y":"N"})}}),Ue=()=>{x.length&&(x[0].addPrice=0)},ko=v(()=>{var e;return((e=x[0])==null?void 0:e._id)||null}),Y=()=>{var a,s;if(m.length===0){x.length=0;return}const e=((a=de(m))==null?void 0:a.items.filter(d=>d.useYn==="Y"&&d.nm.trim()))||[],t=((s=m[1])==null?void 0:s.items.filter(d=>d.useYn==="Y"&&d.nm.trim()))||[],o={};window.safeArrayUtils.safeForEach(x,d=>{o[d._optKey]=d});const n=[];t.length===0?window.safeArrayUtils.safeForEach(e,d=>{const i=String(d._id);n.push(o[i]?{...o[i],_nm1:d.nm,_nm2:""}:{_id:"sku_"+d._id,_optKey:i,_nm1:d.nm,_nm2:"",skuCode:"",addPrice:0,stock:0,useYn:"Y",statusCd:"ON_SALE",saleCnt:0})}):window.safeArrayUtils.safeForEach(e,d=>window.safeArrayUtils.safeForEach(t,i=>{const f=d._id+"_"+i._id;n.push(o[f]?{...o[f],_nm1:d.nm,_nm2:i.nm}:{_id:"sku_"+f,_optKey:f,_nm1:d.nm,_nm2:i.nm,skuCode:"",addPrice:0,stock:0,useYn:"Y",statusCd:"ON_SALE",saleCnt:0})})),x.splice(0,x.length,...n),Ue()},Io=v(()=>ee(x,e=>e.useYn==="Y").reduce((e,t)=>e+(Number(t.stock)||0),0)),ze=[{key:"addPrice",label:"\uCD94\uAC00\uAE08\uC561",type:"number",unit:"\uC6D0"},{key:"stock",label:"\uC7AC\uACE0\uC218\uB7C9",type:"number",unit:"\uAC1C"},{key:"statusCd",label:"\uD310\uB9E4\uC0C1\uD0DC",type:"select"},{key:"skuCode",label:"SKU\uCF54\uB4DC",type:"text",unique:!0}],V=()=>ze.find(e=>e.key===l.skuMxField)||ze[0],q=e=>{var t;return ee(((t=m[e-1])==null?void 0:t.items)||[],o=>o&&o.useYn==="Y"?!!String(o.nm||"").trim():!1)},N=(e,t)=>x.find(o=>o?o._optKey===e+"_"+t:!1)||null,rt=(e,t)=>{const o=N(e,t);return o?o.useYn==="Y":!1},wo=(e,t)=>{const o=N(e._id,t._id);return o?o.useYn==="Y":!1},Do=(e,t,o)=>{const n=N(e._id,t._id);n&&(n.useYn=o?"Y":"N")},pt=(e,t,o)=>{const n=t.map(s=>N(...o(e,s))),a=n.every(s=>s?s.useYn==="Y":!1);n.forEach(s=>{s&&(s.useYn=a?"N":"Y")})},So=e=>{R.value||pt(e,q(2),(t,o)=>[t._id,o._id])},Co=e=>{R.value||pt(e,q(1),(t,o)=>[o._id,t._id])},_o=(e,t)=>{const o=N(e._id,t._id);return o?o[V().key]:""},Po=(e,t)=>ct(e._id,t._id),Oo=(e,t)=>rt(e._id,t._id)?"":"\uBE44\uD65C\uC131 \uC870\uD569 \u2014 \uC635\uC158\uC124\uC815 \uD0ED\uC758 \uC870\uD569 \uC124\uC815\uC5D0\uC11C \uCF1C\uC57C \uD569\uB2C8\uB2E4",To=(e,t,o)=>{const n=N(e._id,t._id);n&&(n[V().key]=o)},ct=(e,t)=>{const o=N(e,t);if(!o)return"background:#fafafa;";if(o.useYn!=="Y")return"background:#f5f5f5;opacity:0.45;";const n=V();return n.key==="stock"?(Number(o.stock)||0)===0?"background:#fff1f0;":"":n.key==="addPrice"?(Number(o.addPrice)||0)===0?"":"background:#f6ffed;":n.key==="statusCd"?o.statusCd==="SOLD_OUT"?"background:#fffbe6;":o.statusCd==="SUSPENDED"?"background:#fff1f0;":"":""},Ee=e=>{const t=V(),o=l.skuMxBulk,n=t.type==="number"?Number(o)||0:o;let a=0;return e.forEach(s=>{s&&s.useYn==="Y"&&(s[t.key]=n,a++)}),a},Le=()=>V().unique?(c(`${V().label} \uC740(\uB294) SKU\uB9C8\uB2E4 \uB2EC\uB77C\uC57C \uD574\uC11C \uC77C\uAD04 \uCC44\uC6B0\uAE30\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC140\uC744 \uD558\uB098\uC529 \uC785\uB825\uD574\uC8FC\uC138\uC694.`,"error"),!1):String(l.skuMxBulk||"").trim()===""?(c("\uBA3C\uC800 [\uC77C\uAD04\uAC12] \uC744 \uC785\uB825\uD55C \uB4A4 \uD589/\uC5F4 \uD5E4\uB354\uB97C \uD074\uB9AD\uD558\uC138\uC694.","error"),!1):!0,Mo=e=>{if(R.value||!Le())return;const t=Ee(q(2).map(o=>N(e._id,o._id)));c(`${e.nm} \uD589 ${t}\uAC1C \uC870\uD569\uC5D0 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4.`,"success")},Ao=e=>{if(R.value||!Le())return;const t=Ee(q(1).map(o=>N(o._id,e._id)));c(`${e.nm} \uC5F4 ${t}\uAC1C \uC870\uD569\uC5D0 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4.`,"success")},No=async()=>{if(R.value||!Le())return;const e=V(),t=[];q(1).forEach(a=>q(2).forEach(s=>t.push(N(a._id,s._id))));const o=t.filter(a=>a?a.useYn==="Y":!1).length;await L("\uC804\uCCB4 \uC801\uC6A9",`\uD65C\uC131 \uC870\uD569 ${o}\uAC1C\uC758 [${e.label}] \uC744(\uB97C) "${l.skuMxBulk}" \uB85C \uBAA8\uB450 \uB36E\uC5B4\uC501\uB2C8\uB2E4.
\uACC4\uC18D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)&&c(`${Ee(t)}\uAC1C \uC870\uD569\uC5D0 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4.`,"success")},ft=(e,t)=>{const o=x.findIndex(s=>s._id===e._id);if(o===-1)return;const n=o+(t==="up"?-1:1);if(n<0||n>=x.length)return;const[a]=x.splice(o,1);x.splice(n,0,a),Ue()},Bo=v(()=>[...new Set(x.map(e=>e._nm1).filter(Boolean))]),Ro=v(()=>{const e=l.skuFilter1?x.filter(t=>t._nm1===l.skuFilter1):x;return[...new Set(e.map(t=>t._nm2).filter(Boolean))]}),Uo=v(()=>ee(x,e=>!(l.skuFilter1&&e._nm1!==l.skuFilter1||l.skuFilter2&&e._nm2!==l.skuFilter2||l.skuFilterStock==="in"&&(e.stock||0)<=0||l.skuFilterStock==="out"&&(e.stock||0)>0))),u=k([]);let he=1;const ut=M(null),gt=M(null),Fe=M(null),zo=e=>e?e.val||String(e._id):"",ke=e=>e==="__etc__"||!e?"":e,mt=v(()=>{var s;const e=((s=m[0])==null?void 0:s.items)||[],o=[{key:"",label:e.length>0?"\uACF5\uD1B5 (\uC635\uC158 \uBB34\uAD00)":"\uC774\uBBF8\uC9C0",isEtc:!1,items:[]}];e.forEach(d=>{d&&o.push({key:zo(d),label:(d.nm||"(\uC774\uB984 \uC5C6\uC74C)")+(d.val?" ("+d.val+")":""),isEtc:!1,items:[]})});const n=new Map(o.map(d=>[d.key,d])),a={key:"__etc__",label:"\uC635\uC158\uAC12 \uC5C6\uC74C",isEtc:!0,items:[]};return u.forEach((d,i)=>{if(!d)return;(n.get(d.prodOpt1Id||"")||a).items.push({img:d,idx:i})}),a.items.length&&o.push(a),o}),bt=async(e,t)=>{var a,s;const o=Array.from(e||[]);if(!o.length)return;const n=new FormData;o.forEach(d=>n.append("files",d)),n.append("businessCode","PROD_IMG");try{(((s=(a=(await window.coApiSvc.cmUpload.uploadMulti(n,"\uC0C1\uD488\uAD00\uB9AC","\uC774\uBBF8\uC9C0\uC5C5\uB85C\uB4DC")).data)==null?void 0:a.data)==null?void 0:s.files)||[]).forEach(f=>{u.push({id:he++,attachId:f.attachId,_persisted:!1,previewUrl:f.cdnImgUrl||"",prodOpt1Id:ke(t),prodOpt2Id:"",isMain:u.length===0})})}catch(d){c(coUtil.cofErrMsg(d,"\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},yt=e=>{var t;R.value||(l.uploadOpt1=ke(e),(t=ut.value)==null||t.click())},vt=e=>{R.value||u.push({id:he++,previewUrl:"",isMain:u.length===0,prodOpt1Id:ke(e),prodOpt2Id:""})},Eo=async e=>{const t=Array.from(e.target.files||[]);e.target.value="",await bt(t,l.uploadOpt1)},xt=e=>{var t;return Array.from(((t=e==null?void 0:e.dataTransfer)==null?void 0:t.types)||[]).includes("Files")},Lo=(e,t)=>{R.value||xt(e)&&(l.dropOpt1=t)},Fo=e=>{l.dropOpt1===e&&(l.dropOpt1=null)},Go=async(e,t)=>{var a,s;if(l.dropOpt1=null,R.value)return;if(xt(e)){await bt((a=e.dataTransfer)==null?void 0:a.files,t);return}const o=l.dragImgId!=null?u.find(d=>d?d.id===l.dragImgId:!1):null;if(!o)return;const n=ke(t);(o.prodOpt1Id||"")!==n&&(o.prodOpt1Id=n,o.prodOpt2Id="",c('\uC635\uC1581 \uC744 "'+(((s=mt.value.find(d=>d.key===t))==null?void 0:s.label)||"\uACF5\uD1B5")+'" \uC73C\uB85C \uBCC0\uACBD\uD588\uC2B5\uB2C8\uB2E4.',"success"))},Yo=e=>{var t;R.value||(Fe.value=e,(t=gt.value)==null||t.click())},Vo=async e=>{var a,s;const t=(e.target.files||[])[0];e.target.value="";const o=Fe.value;if(Fe.value=null,!t||o==null)return;const n=u.find(d=>d&&d.id===o);if(n)try{const d=new FormData;d.append("files",t),d.append("businessCode","PROD_IMG");const f=(((s=(a=(await window.coApiSvc.cmUpload.uploadMulti(d,"\uC0C1\uD488\uAD00\uB9AC","\uC774\uBBF8\uC9C0\uAD50\uCCB4")).data)==null?void 0:a.data)==null?void 0:s.files)||[])[0];if(!f)throw new Error("\uC5C5\uB85C\uB4DC \uACB0\uACFC\uB97C \uBC1B\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");n.previewUrl=f.cdnImgUrl||"",n.attachId=f.attachId||null,c("\uD30C\uC77C\uC774 \uAD50\uCCB4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. [\uC800\uC7A5] \uC744 \uB20C\uB7EC\uC57C \uBC18\uC601\uB429\uB2C8\uB2E4.","success")}catch(d){c(coUtil.cofErrMsg(d,"\uC774\uBBF8\uC9C0 \uAD50\uCCB4 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},Ge=()=>{const e=u.filter(t=>t&&t._persisted===!1);if(p.images.length)u.splice(0,u.length,...p.images,...e);else{const t=ie[0]||null;e.length?u.splice(0,u.length,...e):t!=null&&t.mainImage?u.splice(0,u.length,{id:he++,previewUrl:t.mainImage,isMain:!0,prodOpt1Id:"",prodOpt2Id:"",_persisted:!0}):u.splice(0,u.length)}u.length&&!u.some(t=>t.isMain)&&(de(u).isMain=!0)},ht=e=>window.safeArrayUtils.safeForEach(u,t=>{t.isMain=t.id===e}),kt=e=>{const t=u.findIndex(a=>a.id===e);if(t===-1)return;const o=u[t],n=o.isMain;u.splice(t,1),n&&u.length&&(de(u).isMain=!0),o.attachId&&!o._persisted&&window.coApiSvc.cmAttach.deleteFile(o.attachId).catch(a=>console.error("[PdProdDtl] \uC774\uBBF8\uC9C0 \uD30C\uC77C \uC0AD\uC81C \uC2E4\uD328",a))},Ko=e=>{var d;if(!e)return"";const t=(e.nm||"")+(e.val?" ("+e.val+")":""),o=e.parentOptId;if(!o)return t;const a=(((d=m[0])==null?void 0:d.items)||[]).find(i=>String(i._id)===String(o)||i.val===o);return a?(a.nm||"")+(a.val?" ("+a.val+")":"")+" > "+t:t},$o=e=>{var t,o;l.dragImgIdx=e,l.dragImgId=(o=(t=u[e])==null?void 0:t.id)!=null?o:null},qo=e=>{l.dragoverImgIdx=e},Ho=()=>{if(l.dragImgIdx===null||l.dragImgIdx===l.dragoverImgIdx){l.dragImgIdx=null,l.dragoverImgIdx=null;return}const e=[...u],[t]=e.splice(l.dragImgIdx,1);e.splice(l.dragoverImgIdx,0,t),u.splice(0,u.length,...e),l.dragImgIdx=null,l.dragoverImgIdx=null},S=k([]);let Ye=1;const It=e=>{S.push({_id:Ye++,type:e,content:"",fileName:"",attachId:null,_persisted:!1})},Ve=e=>{e!=null&&e.attachId&&!e._persisted&&window.coApiSvc.cmAttach.deleteFile(e.attachId).catch(t=>console.error("[PdProdDtl] \uCCA8\uBD80 \uD30C\uC77C \uC0AD\uC81C \uC2E4\uD328",t))},wt=e=>{Ve(S[e]),S.splice(e,1)},Qo=async(e,t)=>{var a,s;const o=t.target.files[0];if(t.target.value="",!o)return;Ve(e);const n=new FormData;n.append("files",o),n.append("businessCode","PROD_CONTENT");try{const i=(((s=(a=(await window.coApiSvc.cmUpload.uploadMulti(n,"\uC0C1\uD488\uAD00\uB9AC","\uC0C1\uD488\uC124\uBA85\uD30C\uC77C\uC5C5\uB85C\uB4DC")).data)==null?void 0:a.data)==null?void 0:s.files)||[])[0];if(!i)return;e.attachId=i.attachId,e.content=i.cdnImgUrl||"",e.fileName=i.originalName||o.name,e._persisted=!1}catch(d){c(coUtil.cofErrMsg(d,"\uD30C\uC77C \uC5C5\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},jo=e=>{l.dragBlockIdx=e},Wo=e=>{l.dragoverBlockIdx=e},Xo=async()=>{if(l.dragBlockIdx===null||l.dragBlockIdx===l.dragoverBlockIdx){l.dragBlockIdx=null,l.dragoverBlockIdx=null;return}const e=[...S],[t]=e.splice(l.dragBlockIdx,1);e.splice(l.dragoverBlockIdx,0,t),S.splice(0,S.length,...e),l.dragBlockIdx=null,l.dragoverBlockIdx=null;const o=b.value;if(!o)return;let n=0;const a=[];if(S.forEach(s=>{n++,(s==null?void 0:s.prodContentId)!=null&&s.prodContentId!==""&&a.push({id:s.prodContentId,sortOrd:n})}),a.length!==0)try{await boApiSvc.pdProd.updateSortOrds(o,a,"\uC0C1\uD488\uAD00\uB9AC","\uC0C1\uD488\uC124\uBA85\uC21C\uC11C\uBCC0\uACBD"),c&&c("\uC21C\uC11C\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(s){He(s)}},Ke=M(null),Jo=e=>{l.isDraggingDivider=!0,e.preventDefault()};let Ie=null,we=null;const Zo=e=>{const t=Number(e.stdPrice||0);if(e.saleDiscntRate==null||e.saleDiscntRate===""){e.saleDiscntAmt=null;return}const o=Math.round(t*Number(e.saleDiscntRate)/100);e.saleDiscntAmt=o,e.salePrice=Math.max(0,t-o)},el=e=>{const t=Number(e.stdPrice||0);if(e.saleDiscntAmt==null||e.saleDiscntAmt===""){e.saleDiscntRate=null;return}const o=Number(e.saleDiscntAmt);e.salePrice=Math.max(0,t-o),e.saleDiscntRate=t>0?Math.round(o/t*1e4)/100:null},tl=e=>{const t=Number(e.stdPrice||0);if(t<=0){e.saleDiscntAmt=null,e.saleDiscntRate=null;return}const o=t-Number(e.salePrice||0);e.saleDiscntAmt=o,e.saleDiscntRate=Math.round(o/t*1e4)/100},ol=e=>{const t=Number(e.stdPrice||0);if(e.saleDiscntRate!=null&&e.saleDiscntRate!==""){const o=Math.round(t*Number(e.saleDiscntRate)/100);e.saleDiscntAmt=o,e.salePrice=Math.max(0,t-o)}else e.saleDiscntAmt!=null&&e.saleDiscntAmt!==""&&(e.salePrice=Math.max(0,t-Number(e.saleDiscntAmt)),e.saleDiscntRate=t>0?Math.round(Number(e.saleDiscntAmt)/t*1e4)/100:null)},ll=v(()=>!r.salePrice||!r.purchasePrice?null:((r.salePrice-r.purchasePrice)/r.salePrice*100).toFixed(2));let Dt=1;const z=k([]),H=k([]),nl=Vue.toRef(l,"prodPickerOpen"),St=e=>{l.prodPickerOpen=e},al=e=>{const t={_id:Dt++,prodId:e.prodId,prodNm:e.prodNm,cateNm:e.cateNm||e.categoryNm||"",stdPrice:e.stdPrice||e.price||0,prodStatusCd:e.prodStatusCd||""};l.prodPickerOpen==="rel"?z.push(t):H.push(t),l.prodPickerOpen=""},dl=(e,t,o)=>{if(e==="cmPopup-prod-cate-pick"){if(o==null){l.prodPickerOpen="";return}al(o)}},Ct=e=>z.splice(e,1),_t=e=>H.splice(e,1),il=()=>{if(l.dragRelIdx===null||l.dragRelIdx===l.dragoverRelIdx){l.dragRelIdx=null,l.dragoverRelIdx=null;return}const e=[...z],[t]=e.splice(l.dragRelIdx,1);e.splice(l.dragoverRelIdx,0,t),z.splice(0,z.length,...e),l.dragRelIdx=null,l.dragoverRelIdx=null},sl=()=>{if(l.dragCodeIdx===null||l.dragCodeIdx===l.dragoverCodeIdx){l.dragCodeIdx=null,l.dragoverCodeIdx=null;return}const e=[...H],[t]=e.splice(l.dragCodeIdx,1);e.splice(l.dragoverCodeIdx,0,t),H.splice(0,H.length,...e),l.dragCodeIdx=null,l.dragoverCodeIdx=null},O=k([]),rl=v(()=>new Set(O.map(e=>String(e.categoryId)))),pl=e=>{const t=(se||[]).find(o=>String(o.categoryId||o.id)===String(e));return t&&(t.categoryNm||t.nm)||String(e)},cl=e=>{const t=(se||[]).find(o=>String(o.categoryId||o.id)===String(e));return t&&(t.depth||t.level)||1},fl=e=>{const t=e.selId||e.id;window.safeArrayUtils.safeSome(O,o=>String(o.categoryId)===String(t))||(O.push({categoryId:t,categoryNm:e.selName||e.nm||String(t),depth:e.depth||e.categoryDepth||e.level||1}),l.catPickerOpen=!1)},Pt=e=>{O.splice(e,1)},ul=e=>{l.catDragIdx=e},gl=e=>{l.catDragoverIdx=e},ml=()=>{if(l.catDragIdx===null||l.catDragIdx===l.catDragoverIdx){l.catDragIdx=null,l.catDragoverIdx=null;return}const e=[...O],[t]=e.splice(l.catDragIdx,1);e.splice(l.catDragoverIdx,0,t),O.splice(0,O.length,...e),l.catDragIdx=null,l.catDragoverIdx=null},B=k([]);let $e=1;const W=v(()=>ee(B,e=>e._row_status!=="D")),qe=v({get:()=>W.value.length>0&&window.safeArrayUtils.safeEvery(W.value,e=>e._checked),set:e=>window.safeArrayUtils.safeForEach(W.value,t=>{t._checked=e})}),Ot=()=>B.unshift({_id:$e++,_row_status:"I",_checked:!1,startDate:"",startTime:"00:00",endDate:"",endTime:"23:59",planStatus:"\uC900\uBE44\uC911",stdPrice:r.stdPrice||0,salePrice:r.salePrice||0,purchasePrice:r.purchasePrice||0}),bl=e=>{e._row_status==="N"&&(e._row_status="U")},Tt=()=>{for(let e=B.length-1;e>=0;e--){const t=B[e];t._checked&&(t._row_status==="I"?B.splice(e,1):t._row_status="D")}},yl=e=>({I:"background:#f6ffed;",U:"background:#fffbe6;",D:"background:#fff1f0;opacity:0.6;"})[e]||"",vl=M(""),rn=M(""),De=v(()=>(Te||[]).filter(e=>e.userStatusCd!=="SUSPENDED"&&e.userStatusCd!=="DELETED")),xl=v(()=>{const e=(l.mdSearch||"").trim().toLowerCase();if(!e)return De.value;const t=l.mdSearchType||vl.value||"userNm,deptId,roleId";return De.value.filter(o=>{const n=[];return t.includes("userNm")&&n.push((o.userNm||"").toLowerCase().includes(e)),t.includes("deptId")&&n.push((o.deptId||"").toLowerCase().includes(e)),t.includes("roleId")&&n.push((o.roleId||"").toLowerCase().includes(e)),n.some(Boolean)})}),hl=v(()=>{const e=De.value.find(t=>t.userId===r.mdUserId);return e?`${e.userNm} (${e.deptId||""})`:""}),Mt=()=>{l.mdSearch="",l.mdModalOpen=!0},At=e=>{r.mdUserId=e.selId,l.mdModalOpen=!1},kl=async()=>{var e,t;if(Me.value&&(r.mdUserId=((e=De.value[0])==null?void 0:e.userId)||"",y.fixedProdTypeCd&&(r.prodTypeCd=y.fixedProdTypeCd)),!Me.value){const o=ie[0]||null;if(o){r.prodId=o.prodId,r.prodNm=o.prodNm||"",y.setTabLabel(r.prodNm),r.prodCode=o.prodCode||"",r.categoryId=o.categoryId||"",r.brandId=o.brandId||"",r.brandNm=o.brandNm||"",r.vendorId=o.vendorId||"",r.vendorNm=o.vendorNm||"",r.mdUserId=o.mdUserId||"",r.prodTypeCd=o.prodTypeCd||"SINGLE",r.prodStatusCd=o.prodStatusCd||"DRAFT",r.unsaleMsg=o.unsaleMsg||"",r.dlivTmpltId=o.dlivTmpltId||"",r.dlivMethodCd=o.dlivMethodCd||"",r.stdPrice=o.stdPrice||0,r.salePrice=o.salePrice||0,r.currCd=o.currCd||"KRW",r.saleDiscntRate=o.saleDiscntRate!=null?o.saleDiscntRate:null,r.saleDiscntAmt=o.saleDiscntAmt!=null?o.saleDiscntAmt:null,r.purchasePrice=o.purchasePrice||null,r.platformFeeRate=o.platformFeeRate!=null?o.platformFeeRate:null,r.platformFeeAmount=o.platformFeeAmount!=null?o.platformFeeAmount:null,r.saleStartDate=o.saleStartDate||"",r.saleEndDate=o.saleEndDate||"",r.dispStartDate=o.dispStartDate||"",r.dispEndDate=o.dispEndDate||"",r.minBuyQty=o.minBuyQty||1,r.maxBuyQty=o.maxBuyQty||null,r.dayMaxBuyQty=o.dayMaxBuyQty||null,r.idMaxBuyQty=o.idMaxBuyQty||null,r.adltYn=o.adltYn||"N",r.sameDayDlivYn=o.sameDayDlivYn||"N",r.soldOutYn=o.soldOutYn||"N",r.couponUseYn=o.couponUseYn||"Y",r.saveUseYn=o.saveUseYn||"Y",r.discntUseYn=o.discntUseYn||"Y",r.advrtStmt=o.advrtStmt||"",r.advrtStartDate=o.advrtStartDate||"",r.advrtEndDate=o.advrtEndDate||"",r.weight=o.weight||null,r.sizeInfoCd=o.sizeInfoCd||"",r.isNew=o.isNew||"N",r.isBest=o.isBest||"N",r.contentHtml=o.contentHtml||o.description||"",Ge();const n=d=>{const i=String(d||"HTML").toUpperCase();return i==="FILE"?"file":i==="URL"?"url":i==="IMAGE"?"file":"html"};if(p.content.length?S.splice(0,S.length,...p.content.map(d=>({_id:Ye++,type:n(d.contentTypeCd),content:d.contentHtml||"",fileName:d.fileName||"",attachId:null,prodContentId:d.prodContentId,_persisted:!0}))):r.contentHtml&&S.splice(0,S.length,{_id:Ye++,type:"html",content:r.contentHtml,fileName:"",attachId:null,_persisted:!0}),p.rels.length&&z.splice(0,z.length,...p.rels),p.skus.length&&(x.splice(0,x.length,...p.skus),Ue()),!l.prodOptCategoryTypeCd){if(o.prodOptStdCd)l.prodOptCategoryTypeCd=o.prodOptStdCd;else if(m.length){const d=m.map(i=>i.level1Cd||"").filter(Boolean);d.length&&(l.prodOptCategoryTypeCd=d[0])}}Be=l.prodOptCategoryTypeCd||"",(t=o.salePlans)!=null&&t.length&&B.splice(0,B.length,...o.salePlans.map(d=>({...d,_id:$e++,_checked:!1})));const a=String(o.prodId),s=(re||[]).filter(d=>String(d.prodId)===a).sort((d,i)=>(d.sortOrd||0)-(i.sortOrd||0));O.splice(0,O.length,...s.map(d=>({categoryId:d.categoryId,categoryNm:pl(d.categoryId),depth:cl(d.categoryId)})))}}await oo(),Ie=o=>{if(!l.isDraggingDivider||!Ke.value)return;const n=Ke.value.getBoundingClientRect(),a=(o.clientX-n.left)/n.width*100;l.splitPct=Math.max(25,Math.min(78,a))},we=()=>{l.isDraggingDivider=!1},document.addEventListener("mousemove",Ie),document.addEventListener("mouseup",we)};eo(async()=>{await io(),await ce(),await kl()}),Z(()=>y.reloadTrigger,async(e,t)=>{if(!(e===t||e===0)){try{Object.keys($).forEach(o=>delete $[o])}catch{}await ce(),Ge()}}),to(()=>{Ie&&document.removeEventListener("mousemove",Ie),we&&document.removeEventListener("mouseup",we)});const b=v(()=>y.dtlId||r.prodId||null),oe=v(()=>!!b.value),Il=v(()=>G.value!=="info"&&!oe.value),Nt=(e,t)=>{c&&c(t,"success")},He=e=>{var o,n;console.error("[handleSave]",e);const t=((n=(o=e.response)==null?void 0:o.data)==null?void 0:n.message)||e.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";c&&c(t,"error",0)},wl=async()=>{var a,s,d;const e=G.value;if(!oe.value&&e!=="info"){c("\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.","error");return}if(e==="info"||e==="detail"){Object.keys($).forEach(I=>delete $[I]);try{await po.validate(r,{abortEarly:!1})}catch(I){I.inner.forEach(A=>{$[A.path]=A.message}),coUtil.cofValidationToast($,c);return}if(e==="info"&&!O.length){c("\uCE74\uD14C\uACE0\uB9AC\uB97C 1\uAC1C \uC774\uC0C1 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}if(e==="info"&&r.prodTypeCd==="OPTION"){if(!l.prodOptCategoryTypeCd){c("\uC635\uC158 \uD45C\uC900\uCF54\uB4DC\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}if(!te(1)){c("\uC635\uC1581\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}}const i=!oe.value;if(!await L(i?"\uB4F1\uB85D":"\uC800\uC7A5",i?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;try{const I={...r};if(e==="info"){const w=r.prodTypeCd==="OPTION";I.prodOptStdCd=w&&l.prodOptCategoryTypeCd||"",I.prodOpt1TypeCd=w&&te(1)||"",I.prodOpt2TypeCd=w&&te(2)||""}const A=i?await boApiSvc.pdProd.create(I,"\uC0C1\uD488\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.pdProd.update(b.value,I,"\uC0C1\uD488\uAD00\uB9AC",e==="info"?"\uAE30\uBCF8\uC815\uBCF4\uC800\uC7A5":"\uC0C1\uC138\uC124\uC815\uC800\uC7A5");if(i){const w=((s=(a=A.data)==null?void 0:a.data)==null?void 0:s.prodId)||((d=A.data)==null?void 0:d.prodId)||null;w&&(r.prodId=w)}const F=b.value||r.prodId;if(F&&e==="info")try{const w=new Set(O.map(C=>String(C.categoryId))),ne=(re||[]).filter(C=>String(C.prodId)===String(F)),_e=new Set(ne.map(C=>String(C.categoryId))),Q=[];ne.forEach(C=>{w.has(String(C.categoryId))||Q.push({rowStatus:"D",categoryProdId:C.categoryProdId})}),O.forEach((C,Pe)=>{_e.has(String(C.categoryId))||Q.push({rowStatus:"I",prodId:F,categoryId:C.categoryId,typeCd:"NORMAL",sortOrd:Pe+1,dispYn:"Y"})}),Q.length>0&&await boApiSvc.pdCategory.updateProds({categoryProds:Q},"\uC0C1\uD488\uAD00\uB9AC","\uCE74\uD14C\uACE0\uB9AC\uC800\uC7A5")}catch(w){console.error("[handleSave:category]",w)}if(await ce(),e==="info")try{await y.onListReload()}catch{}Nt(A,i?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0ED\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(I){He(I)}return}if(!await L("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;const o={content:"\uC0C1\uD488\uC124\uBA85",option:"\uC635\uC158\uC124\uC815",price:"\uC635\uC158(\uAC00\uACA9/\uC7AC\uACE0)",bundle:"\uBB36\uC74C\uAD6C\uC131",setitems:"\uC138\uD2B8\uAD6C\uC131",promo:"\uD504\uB85C\uBAA8\uC158",image:"\uC774\uBBF8\uC9C0",related:"\uC5F0\uAD00\uC0C1\uD488",plan:"\uD310\uB9E4\uACC4\uD68D"};let n=null;switch(e){case"plan":{n={plans:B.filter(i=>i._row_status!=="D").map(i=>({startDate:i.startDate||"",startTime:i.startTime||"00:00",endDate:i.endDate||"",endTime:i.endTime||"23:59",planStatus:i.planStatus||"SCHEDULED",stdPrice:i.stdPrice||null,salePrice:i.salePrice||null,purchasePrice:i.purchasePrice||null}))};break}case"content":n={contentBlocks:[...S]};break;case"option":{m.forEach((i,f)=>{(!i.grpNm||!String(i.grpNm).trim())&&(i.grpNm=i.level2Cd||i.level1Cd||"\uC635\uC158"+(f+1))}),n={optTypes:m.map(i=>({_id:i._id,optTypeNm:i.grpNm,optTypeCd:i.level2Cd||i.level1Cd||"",level1Cd:i.level1Cd,level2Cd:i.level2Cd,optTypeLevel:i.level,optVals:(i.items||[]).map(f=>({_id:f._id,nm:f.nm,val:f.val,stdCd:f.stdCd||null,prodOptStyle:f.prodOptStyle,parentOptId:f.parentOptId,sortOrd:f.sortOrd,useYn:f.useYn}))}))};break}case"price":n={skus:x.map(i=>{var f;return{...i,stockQty:(f=i.stock)!=null?f:0,skuCode:i.skuCode||""}})};break;case"bundle":n={items:p.bundleItems.map(i=>({prodId:i.itemProdId||i.prodId||null,qty:i.itemQty||1,priceRate:i.priceRate||0,sortOrd:i.sortOrd||0}))};break;case"setitems":n={items:p.setItems.map(i=>({prodId:i.itemProdId||i.prodId||null,qty:i.itemQty||1,itemDesc:i.itemDesc||"",sortOrd:i.sortOrd||0}))};break;case"image":{const i=u.map(({id:f,...I})=>I);if(!i.length&&p.images.length&&!await L("\uC774\uBBF8\uC9C0 \uC804\uCCB4 \uC0AD\uC81C",`\uB4F1\uB85D\uB41C \uC774\uBBF8\uC9C0 ${p.images.length}\uAC74\uC774 \uBAA8\uB450 \uC0AD\uC81C\uB429\uB2C8\uB2E4. \uACC4\uC18D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;n={images:i};break}case"related":n={relProds:z,codeProds:H};break;default:n={};break}try{let i;e==="content"?i=await boApiSvc.pdProd.saveContents(b.value,n,"\uC0C1\uD488\uAD00\uB9AC","\uC0C1\uD488\uC124\uBA85\uC800\uC7A5"):e==="option"?i=await boApiSvc.pdProd.saveOpts(b.value,n,"\uC0C1\uD488\uAD00\uB9AC","\uC635\uC158\uC124\uC815\uC800\uC7A5"):e==="image"?i=await boApiSvc.pdProd.saveImages(b.value,n,"\uC0C1\uD488\uAD00\uB9AC","\uC774\uBBF8\uC9C0\uC800\uC7A5"):e==="bundle"?i=await boApiSvc.pdBundle.updateItems(b.value,n,"\uC0C1\uD488\uAD00\uB9AC","\uBB36\uC74C\uAD6C\uC131\uC800\uC7A5"):e==="setitems"?i=await boApiSvc.pdSet.updateItems(b.value,n,"\uC0C1\uD488\uAD00\uB9AC","\uC138\uD2B8\uAD6C\uC131\uC800\uC7A5"):e==="plan"?i=await boApiSvc.pdProd.savePlans(b.value,n,"\uC0C1\uD488\uAD00\uB9AC","\uD310\uB9E4\uACC4\uD68D\uC800\uC7A5"):i=await boApiSvc.pdProd.update(b.value,n,"\uC0C1\uD488\uAD00\uB9AC",`${o[e]||e}\uC800\uC7A5`),await ce(),e==="image"&&(u.forEach(f=>{f&&(f._persisted=!0)}),Ge()),Nt(i,`${o[e]||""} \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`)}catch(i){He(i)}},Dl=Vue.toRef(l,"catDragoverIdx"),Sl=Vue.toRef(l,"catPickerOpen"),Cl=Vue.toRef(l,"dragBlockIdx"),cn=Vue.toRef(l,"dragCodeIdx"),_l=Vue.toRef(l,"dragImgIdx"),Pl=Vue.toRef(l,"dragOptGrpId"),Ol=Vue.toRef(l,"dragOptItemIdx"),fn=Vue.toRef(l,"dragRelIdx"),Tl=Vue.toRef(l,"dragoverBlockIdx"),un=Vue.toRef(l,"dragoverCodeIdx"),Ml=Vue.toRef(l,"dragoverImgIdx"),Al=Vue.toRef(l,"dragoverOptItemIdx"),gn=Vue.toRef(l,"dragoverRelIdx"),Nl=Vue.toRef(l,"isDraggingDivider"),Bl=Vue.toRef(l,"mdModalOpen"),Rl=Vue.toRef(l,"previewDevice"),Ul=Vue.toRef(l,"prodOptCategoryTypeCd"),Bt=e=>{window.showBoHelp&&window.showBoHelp(e)},mn=Vue.toRef(l,"prodPickerSearch"),bn=Vue.toRef(l,"prodPickerSearchType"),zl=Vue.toRef(l,"skuFilter1"),El=Vue.toRef(l,"skuFilter2"),Ll=Vue.toRef(l,"skuFilterStock"),Fl=Vue.toRef(l,"splitPct");let Rt=1;const Se=M(!1),Ut=e=>{if(!e)p.bundleItems.push({_id:Rt++,itemProdId:null,itemProdNm:"",itemQty:1,priceRate:0,sortOrd:p.bundleItems.length+1});else{if(p.bundleItems.some(o=>o.itemProdId===e.selId)){c("\uC774\uBBF8 \uCD94\uAC00\uB41C \uC0C1\uD488\uC785\uB2C8\uB2E4.","error");return}p.bundleItems.push({_id:Rt++,itemProdId:e.selId,itemProdNm:e.selName||"",itemQty:1,priceRate:0,sortOrd:p.bundleItems.length+1})}Se.value=!1},zt=e=>p.bundleItems.splice(e,1),Et=v(()=>p.bundleItems.reduce((e,t)=>e+(Number(t.priceRate)||0),0)),Gl=v(()=>Et.value===100||p.bundleItems.length===0);let Lt=1;const Ce=M(!1),Qe=e=>{e?p.setItems.push({_id:Lt++,itemProdId:e.selId,itemProdNm:e.selName||"",itemQty:1,itemDesc:"",sortOrd:p.setItems.length+1}):p.setItems.push({_id:Lt++,itemProdId:null,itemProdNm:"",itemQty:1,itemDesc:"",sortOrd:p.setItems.length+1}),Ce.value=!1},Ft=e=>p.setItems.splice(e,1),R=v(()=>y.dtlMode==="view"),Gt=()=>{const e=new URLSearchParams;return e.set("page","pdProdDtl"),e.set("id",r.prodId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},Yl=()=>{try{window.coExtSdk.shareKakao({title:`\uC0C1\uD488 ${r.prodNm||r.prodId} - ShopJoy BO`,description:r.prodNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:Gt()})}catch(e){c(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},Vl=async()=>{try{await navigator.clipboard.writeText(Gt()),c("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){c(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},Yt=M(null),je=M(!1),Kl=async()=>{je.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC0C1\uD488\uC0C1\uC138_${r.prodId||"new"}.pdf`);await window.boUtil.bofExportPdf(Yt.value,e,c)}finally{je.value=!1}},$l=()=>{if(!oe.value){c("\uC0C1\uD488 \uB4F1\uB85D \uD6C4 \uBBF8\uB9AC\uBCF4\uAE30 \uAC00\uB2A5\uD569\uB2C8\uB2E4.","error");return}window.open(`${window.pageUrl("index.html")}?page=prodView&prodid=${b.value}`,"_blank","width=1200,height=800,scrollbars=yes")},ql=()=>{if(!oe.value){c("\uC0C1\uD488 \uB4F1\uB85D \uD6C4 \uD14C\uC2A4\uD2B8 \uAC00\uB2A5\uD569\uB2C8\uB2E4.","error");return}window.open(window.seoUrl("/foui/prodDtl/"+b.value),"_blank","width=900,height=700,scrollbars=yes")},le=k({show:!1,codeGrp:"",title:""}),Vt=(e,t)=>{le.codeGrp=e,le.title=t||"",le.show=!0},D={};D.mdUserGrid=[{key:"userNm",label:"\uC774\uB984",fmt:(e,t)=>r.mdUserId===t.userId?`\u2714 ${t.userNm||""}`:t.userNm||"",cellStyle:(e,t)=>r.mdUserId===t.userId?"color:#e8587a;":""},{key:"deptId",label:"\uBD80\uC11C"},{key:"roleId",label:"\uC5ED\uD560",badge:()=>"badge-gray",cellStyle:"font-size:11px;"}];const Hl=e=>r.mdUserId===e.userId?"font-weight:700;":"";D.bundleGrid=[{key:"sortOrd",label:"\uC21C\uC11C",style:"width:46px;",align:"center",cellStyle:"color:#888;"},{key:"itemProdNm",label:"\uAD6C\uC131\uC0C1\uD488\uBA85",cellStyle:"font-weight:600;",fmt:(e,t)=>t.itemProdNm||"(\uC9C1\uC811\uC785\uB825)"},{key:"itemQty",label:"\uC218\uB7C9",style:"width:70px;",align:"right",edit:"number"},{key:"priceRate",label:"\uC548\uBD84\uC728(%)",style:"width:90px;",align:"right",edit:"number",cellStyle:e=>Number(e)===0?"color:#f5222d;":""}],D.setGrid=[{key:"sortOrd",label:"\uC21C\uC11C",style:"width:46px;",align:"center",cellStyle:"color:#888;"},{key:"itemProdNm",label:"\uAD6C\uC131\uD488\uBA85",cellStyle:"font-weight:600;",fmt:(e,t)=>t.itemProdNm||"(\uBE44\uC0C1\uD488 \uAD6C\uC131\uD488)"},{key:"itemQty",label:"\uC218\uB7C9",style:"width:70px;",align:"right",edit:"number"},{key:"itemDesc",label:"\uAD6C\uC131\uD488 \uC124\uBA85",edit:"text",placeholder:"\uC608: \uC120\uBB3C\uBC15\uC2A4, \uC5FD\uC11C"}],D.prodPickerGrid=[{key:"productId",label:"ID",style:"width:46px;",align:"center",cellStyle:"color:#888;"},{key:"prodNm",label:"\uC0C1\uD488\uBA85",cellStyle:"font-weight:600;"},{key:"category",label:"\uCE74\uD14C\uACE0\uB9AC",style:"width:80px;"},{key:"price",label:"\uAC00\uACA9",style:"width:90px;text-align:right;",align:"right",fmt:(e,t)=>coUtil.cofWon(t.price)},{key:"stock",label:"\uC7AC\uACE0",style:"width:60px;text-align:right;",align:"right",fmt:(e,t)=>t.stock+"\uAC1C"},{key:"status",label:"\uC0C1\uD0DC",style:"width:60px;",badge:e=>e.status==="\uD310\uB9E4\uC911"?"badge-green":"badge-gray",cellStyle:"font-size:10px;"}],D.remainSkuGrid=[{key:"_nm1",label:"1\uB2E8 \uC635\uC158",badge:()=>"badge-gray",fmt:(e,t)=>t._nm1||"-"},{key:"_nm2",label:"2\uB2E8 \uC635\uC158",badge:()=>"badge-blue",fmt:(e,t)=>t._nm2||"-"},{key:"skuCode",label:"SKU\uCF54\uB4DC",style:"color:#888;"},{key:"addPrice",label:"\uCD94\uAC00\uAE08\uC561",style:"width:100px;",align:"right",cellStyle:"color:#888;",fmt:e=>coUtil.cofWon(e)},{key:"stock",label:"\uC7AC\uACE0",style:"width:80px;",align:"right",cellStyle:e=>(e||0)===0?"color:#f5222d;font-weight:700;":"",fmt:e=>e||0},{key:"statusCd",label:"\uD310\uB9E4\uC0C1\uD0DC",style:"width:110px;",badge:()=>"badge-gray"},{key:"saleCnt",label:"\uD310\uB9E4\uC218\uB7C9",style:"width:68px;",align:"right",cellStyle:"color:#888;",fmt:e=>(e||0).toLocaleString()},{key:"useYn",label:"\uC0AC\uC6A9",style:"width:42px;",align:"center",badge:e=>e.useYn==="Y"?"badge-green":"badge-gray"}];const Ql=()=>"opacity:0.6;background:#f9f9f9;";D.relProdGrid=[{key:"_id2",label:"ID",style:"width:46px;text-align:center;",align:"center",cellStyle:"color:#888;",fmt:(e,t)=>t.relProdId||t.prodId},{key:"prodNm",label:"\uC0C1\uD488\uBA85",refLink:"prod",refKey:"relProdId"},{key:"_relType",label:"\uC720\uD615",style:"width:80px;",fmt:(e,t)=>t.prodRelTypeCdNm||t.prodRelTypeCd}],D.codeProdGrid=[{key:"productId",label:"ID",style:"width:46px;text-align:center;",align:"center",cellStyle:"color:#888;"},{key:"prodNm",label:"\uC0C1\uD488\uBA85",refLink:"prod",refKey:"productId"},{key:"category",label:"\uCE74\uD14C\uACE0\uB9AC",style:"width:80px;"},{key:"_price",label:"\uAC00\uACA9",style:"width:90px;text-align:right;",align:"right",fmt:(e,t)=>coUtil.cofWon(t.price)},{key:"_stock",label:"\uC7AC\uACE0",style:"width:60px;text-align:right;",align:"right",fmt:(e,t)=>t.stock+"\uAC1C"},{key:"_status",label:"\uC0C1\uD0DC",style:"width:60px;",badge:e=>e.status==="\uD310\uB9E4\uC911"?"badge-green":"badge-gray",fmt:(e,t)=>t.status},{key:"_act",label:"\uAD00\uB9AC",style:"width:54px;text-align:center;"}],D.planGrid=[{key:"_start",label:"\uC2DC\uC791\uC77C\uC2DC",style:"width:196px;",dateTimePick:{dateKey:"startDate",timeKey:"startTime",showNow:!1,showClear:!1,dateWidth:"116px",timeWidth:"72px"}},{key:"_end",label:"\uC885\uB8CC\uC77C\uC2DC",style:"width:196px;",dateTimePick:{dateKey:"endDate",timeKey:"endTime",showNow:!1,showClear:!1,dateWidth:"116px",timeWidth:"72px"}},{key:"planStatus",label:"\uC0C1\uD0DC",style:"width:80px;",edit:"select",options:()=>P.PROD_PLAN_STATUS},{key:"stdPrice",label:"\uC815\uAC00",style:"width:90px;",edit:"number",align:"right"},{key:"salePrice",label:"\uD310\uB9E4\uAC00",style:"width:90px;",edit:"number",align:"right"},{key:"purchasePrice",label:"\uB9E4\uC785\uAC00",style:"width:80px;",edit:"number",align:"right"}];const jl=e=>{const t=window.safeArrayUtils.safeFind(W.value,o=>String(o._id)===String(e));return!!(t&&t._checked)},Wl=e=>{const t=window.safeArrayUtils.safeFind(W.value,o=>String(o._id)===String(e));t&&(t._checked=!t._checked)},Xl=()=>{qe.value=!qe.value},Jl=e=>yl(e._row_status);return D.infoForm=[{type:"group",label:"\uAE30\uBCF8\uC815\uBCF4"},{key:"prodNm",label:"\uC0C1\uD488\uBA85",type:"text",required:!0,placeholder:"\uC0C1\uD488\uBA85"},{key:"prodCode",label:"\uC0C1\uD488\uCF54\uB4DC",type:"text",placeholder:"\uC608: SKU-20260419-001"},{key:"prodTypeCd",label:"\uC0C1\uD488\uC720\uD615",type:"select",nullable:!1,required:!0,options:()=>P.PROD_TYPE},{key:"prodStatusCd",label:"\uC0C1\uD488\uC0C1\uD0DC",type:"select",options:()=>P.PROD_STATUS_CD,helpText:'DRAFT(\uC784\uC2DC\uC800\uC7A5)/ACTIVE(\uC804\uC2DC\uC911)/INACTIVE(\uD310\uB9E4\uC911\uC9C0)/ENDED(\uD310\uB9E4\uC885\uB8CC) 4\uC885. "\uC9C0\uAE08 \uD310\uB9E4\uC911/\uD310\uB9E4\uC608\uC815/\uD488\uC808"\uC778\uC9C0\uB294 \uC774 \uC0C1\uD0DC\uAC00 \uC544\uB2C8\uB77C \uD310\uB9E4\uAE30\uAC04\xB7\uC7AC\uACE0\uB85C FO\uAC00 \uADF8\uB54C\uADF8\uB54C \uD310\uB2E8 \u2014 ACTIVE(\uC804\uC2DC\uC911)\uB294 \uB178\uCD9C \uC5EC\uBD80\uB9CC \uB73B\uD568. ACTIVE\u2194INACTIVE\uB294 \uD310\uB9E4\uAE30\uAC04 \uBC97\uC5B4\uB098\uBA74(\uB610\uB294 \uB2E4\uC2DC \uB4E4\uC5B4\uC624\uBA74) \uB9E4\uC2DC\uAC04 \uBC30\uCE58\uAC00 \uC790\uB3D9 \uC804\uD658\uD558\uACE0, DRAFT\xB7ENDED\uB294 \uBC30\uCE58\uAC00 \uC808\uB300 \uAC74\uB4DC\uB9AC\uC9C0 \uC54A\uC74C(\uAD00\uB9AC\uC790\uB9CC \uC804\uD658).'},{type:"group",label:"\uC635\uC158\uC0C1\uD488",visible:e=>e.prodTypeCd==="OPTION"},{key:"_optCategory",label:"\uC635\uC158 \uD45C\uC900\uCF54\uB4DC",colNm:"prod_opt_std_cd",type:"slot",name:"optCategory",required:!0,visible:e=>e.prodTypeCd==="OPTION"},{key:"_optType1",label:"\uC635\uC1581",colNm:"prod_opt1_type_cd",type:"slot",name:"optType1",required:!0,visible:e=>e.prodTypeCd==="OPTION"},{key:"_optType2",label:"\uC635\uC1582",colNm:"prod_opt2_type_cd",type:"slot",name:"optType2",visible:e=>e.prodTypeCd==="OPTION"},{type:"group",label:"\uADF8\uB8F9"},{key:"_categories",label:"\uCE74\uD14C\uACE0\uB9AC",colNm:"pd_category_prod",type:"slot",name:"categories",required:!0},{key:"brandId",label:"\uBE0C\uB79C\uB4DC",type:"slot",name:"brand"},{key:"vendorId",label:"\uC5C5\uCCB4",type:"slot",name:"vendor"},{key:"mdUserId",label:"\uB2F4\uB2F9MD",type:"slot",name:"mdUser"},{type:"group",label:"\uAC00\uACA9",desc:'\uC815\uAC00\xB7\uD310\uB9E4\uAC00\xB7\uD310\uB9E4\uD560\uC778\uC728\xB7\uD310\uB9E4\uD560\uC778\uAE08\uC561\uC740 \uC11C\uB85C \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4 \u2014 \uB137 \uC911 \uC5B4\uB290 \uAC83\uC744 \uACE0\uCCD0\uB3C4 \uB098\uBA38\uC9C0\uAC00 \uC790\uB3D9 \uC7AC\uACC4\uC0B0\uB429\uB2C8\uB2E4. \uD310\uB9E4\uD560\uC778\uAE08\uC561\uC774 \uD56D\uC0C1 "\uC815\uAC00-\uD310\uB9E4\uAC00" \uAE30\uC900\uC758 \uCD5C\uC885 \uC800\uC7A5\uAC12\uC785\uB2C8\uB2E4. (pd_prod)'},{key:"stdPrice",label:"\uC815\uAC00",type:"number",required:!0,min:0,placeholder:"0",onChange:(e,t)=>ol(t)},{key:"salePrice",label:"\uD310\uB9E4\uAC00",type:"number",required:!0,min:0,placeholder:"0",onChange:(e,t)=>tl(t)},{key:"currCd",label:"\uD1B5\uD654",type:"select",options:()=>[{value:"KRW",label:"\uC6D0 (KRW)"},{value:"USD",label:"\uB2EC\uB7EC (USD)"},{value:"CNY",label:"\uC704\uC548\uD654 (CNY)"},{value:"JPY",label:"\uC5D4\uD654 (JPY)"}],helpText:"\uAE08\uC561 \uD544\uB4DC(\uC815\uAC00/\uD310\uB9E4\uAC00 \uB4F1)\uC758 \uD45C\uC2DC \uAE30\uC900 \uD1B5\uD654\uB9CC \uC9C0\uC815 \u2014 \uD658\uC728 \uC790\uB3D9 \uBCC0\uD658\uC740 \uD558\uC9C0 \uC54A\uC74C."},{key:"saleDiscntRate",label:"\uD310\uB9E4\uD560\uC778\uC728",type:"number",min:0,max:100,placeholder:"(\uC608: 20)",hint:"% \u2014 \uC785\uB825 \uC2DC \uD310\uB9E4\uAC00 \uC790\uB3D9\uACC4\uC0B0",onChange:(e,t)=>Zo(t)},{key:"saleDiscntAmt",label:"\uD310\uB9E4\uD560\uC778\uAE08\uC561",type:"number",min:0,placeholder:"(\uC6D0)",hint:"\uC6D0 \u2014 \uD310\uB9E4\uAC00\xB7\uD560\uC778\uC728\uC5D0 \uD56D\uC0C1 \uB3D9\uAE30\uD654\uB418\uB294 \uCD5C\uC885 \uAE30\uC900\uAC12",onChange:(e,t)=>el(t)},{type:"group",label:"\uC6D0\uAC00 \xB7 \uB9C8\uC9C4 \xB7 \uC218\uC218\uB8CC"},{key:"purchasePrice",label:"\uB9E4\uC785\uAC00 / \uC6D0\uAC00",type:"number",placeholder:"(\uC120\uD0DD)",hint:"\uB0B4\uBD80\uAD00\uB9AC\uC6A9"},{key:"_marginRate",label:"\uB9C8\uC9C4\uC728",colNm:"margin_rate",type:"slot",name:"marginRate"},{key:"platformFeeRate",label:"\uD50C\uB7AB\uD3FC\uC218\uC218\uB8CC \uC728",type:"number",placeholder:"(\uC608: 5.5)",hint:"% \u2014 \uB0B4\uBD80\uAD00\uB9AC\uC6A9"},{key:"platformFeeAmount",label:"\uD50C\uB7AB\uD3FC\uC218\uC218\uB8CC \uAE08\uC561",type:"number",min:0,placeholder:"(\uC694\uC728\uACFC \uB458 \uC911 \uD558\uB098\uB9CC \uC785\uB825)",hint:"\uC6D0 \u2014 \uB0B4\uBD80\uAD00\uB9AC\uC6A9"},{type:"group",label:"\uD310\uB9E4\uC124\uC815",desc:'\uC0C1\uD488\uC0C1\uD0DC(PROD_STATUS_CD)\uB294 DRAFT(\uC784\uC2DC\uC800\uC7A5)/ACTIVE(\uC804\uC2DC\uC911)/INACTIVE(\uD310\uB9E4\uC911\uC9C0)/ENDED(\uD310\uB9E4\uC885\uB8CC) 4\uC885\uBFD0\uC774\uB2E4. \uC608\uC804\uC5D4 \uD310\uB9E4\uC608\uC815\xB7\uD310\uB9E4\uC911\xB7\uD488\uC808\uC744 \uAC01\uAC01 \uB2E4\uB978 \uC0C1\uD0DC\uB85C \uB480\uC9C0\uB9CC, \uC774 \uC14B\uC740 \uB178\uCD9C(\uC804\uC2DC\uC911) \uC5EC\uBD80\uC640 \uBB34\uAD00\uD558\uAC8C "\uC9C0\uAE08 \uC9C4\uC9DC \uC0B4 \uC218 \uC788\uB294\uAC00"\uB9CC \uB2E4\uB978 \uAC83\uC774\uB77C \uC0C1\uD0DC\uB97C \uB298\uB9AC\uB294 \uB300\uC2E0 FO\uAC00 \uC751\uB2F5 \uC2DC\uC810\uC5D0 \uD310\uB9E4\uAE30\uAC04(sale_start_date~sale_end_date)\uACFC \uC7AC\uACE0(sold_out_yn)\uB97C \uC9C1\uC811 \uACC4\uC0B0\uD574\uC11C \uD310\uB9E4\uC608\uC815/\uD310\uB9E4\uC911/\uD488\uC808 \uBC30\uC9C0\uB97C \uB9E4\uAE34\uB2E4 \u2014 ACTIVE(\uC804\uC2DC\uC911)\uB294 "\uB178\uCD9C\uB41C\uB2E4"\uB9CC \uB73B\uD558\uACE0 \uC2E4\uC81C \uAD6C\uB9E4 \uAC00\uB2A5 \uC5EC\uBD80\uC640\uB294 \uBCC4\uAC1C\uB2E4. ACTIVE\u2194INACTIVE\uB294 \uD310\uB9E4\uAE30\uAC04\uC744 \uBC97\uC5B4\uB098\uBA74(\uB610\uB294 \uAD00\uB9AC\uC790\uAC00 \uC885\uB8CC\uC77C\uC744 \uB298\uB824 \uB2E4\uC2DC \uAE30\uAC04 \uC548\uC73C\uB85C \uB4E4\uC5B4\uC624\uBA74) \uB9E4\uC2DC\uAC04 \uBC30\uCE58\uAC00 \uC790\uB3D9\uC73C\uB85C \uC804\uD658\uD55C\uB2E4. DRAFT(\uC791\uC131 \uC911)\uC640 ENDED(\uAD00\uB9AC\uC790\uAC00 \uBA85\uC2DC\uC801\uC73C\uB85C \uB05D\uB0B8 \uD310\uB9E4\uC885\uB8CC)\uB294 \uBC30\uCE58\uAC00 \uC808\uB300 \uAC74\uB4DC\uB9AC\uC9C0 \uC54A\uB294\uB2E4 \u2014 DRAFT\uB294 \uBBF8\uC644\uC131 \uCD08\uC548\uC774 \uB0A0\uC9DC\uB9CC\uC73C\uB85C \uC2E4\uC218 \uACF5\uAC1C\uB418\uB294 \uAC78 \uB9C9\uAE30 \uC704\uD568\uC774\uACE0, ENDED\uB294 \uAD00\uB9AC\uC790\uC758 \uCD5C\uC885 \uACB0\uC815\uC774\uB77C \uB0A0\uC9DC\uAC00 \uBC14\uB010\uB2E4\uACE0 \uB418\uC0B4\uC544\uB098\uBA74 \uC548 \uB418\uAE30 \uB54C\uBB38(\uB418\uC0B4\uB9AC\uB824\uBA74 \uAD00\uB9AC\uC790\uAC00 \uC9C1\uC811 ACTIVE\uB85C \uC804\uD658). \uC804\uC2DC\uAE30\uAC04\uC740 \uC0C1\uD488\uD398\uC774\uC9C0 \uB178\uCD9C \uAD6C\uAC04(disp_start_date~disp_end_date) \u2014 \uC774 \uAE30\uAC04 \uBC16\uC774\uBA74 \uC0C1\uD0DC\uAC00 ACTIVE\uC5EC\uB3C4 FO\uC5D0 \uC548 \uBCF4\uC778\uB2E4. \uD310\uB9E4\xB7\uC804\uC2DC \uC2DC\uC791\uC77C\uC740 NOT NULL(\uBBF8\uC785\uB825 \uC2DC \uB4F1\uB85D\uC2DC\uAC01 \uC790\uB3D9\uAE30\uC785), \uC885\uB8CC\uC77C\uC740 NULL=\uBB34\uAE30\uD55C.'},{key:"prodStatusCd",label:"\uD310\uB9E4\uC0C1\uD0DC",type:"select",options:()=>P.PROD_STATUS_CD,helpText:"ACTIVE(\uC804\uC2DC\uC911)\u2194INACTIVE(\uD310\uB9E4\uC911\uC9C0)\uB294 \uD310\uB9E4\uAE30\uAC04(\uC704 \uC2DC\uC791/\uC885\uB8CC\uC77C)\uC744 \uBC97\uC5B4\uB098\uAC70\uB098 \uB2E4\uC2DC \uB4E4\uC5B4\uC624\uBA74 \uB9E4\uC2DC\uAC04 \uBC30\uCE58\uAC00 \uC790\uB3D9 \uC804\uD658. \uD310\uB9E4\uC608\uC815/\uD488\uC808 \uAD6C\uBD84\uC740 \uC774 \uAC12\uC774 \uC544\uB2C8\uB77C FO\uAC00 \uD310\uB9E4\uAE30\uAC04\xB7\uC7AC\uACE0\uB85C \uADF8\uB54C\uADF8\uB54C \uACC4\uC0B0. DRAFT\xB7ENDED\uB294 \uBC30\uCE58\uAC00 \uC190\uB300\uC9C0 \uC54A\uB294 \uAD00\uB9AC\uC790 \uC804\uC6A9 \uC0C1\uD0DC."},{key:"unsaleMsg",label:"\uBBF8\uD310\uB9E4\uBA54\uC2DC\uC9C0",type:"text",placeholder:"\uC608: \uD604\uC7AC \uD310\uB9E4 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.",hint:"\uD310\uB9E4\uBD88\uAC00 \uC2DC \uACE0\uAC1D \uB178\uCD9C"},{key:"weight",label:"\uBB34\uAC8C",hint:"kg",type:"number",min:0,placeholder:"\uC608: 0.35"},{key:"sizeInfoCd",label:"\uC0AC\uC774\uC988",type:"select",options:()=>["FREE","XS","S","M","L","XL","XXL"]},{key:"saleStartDate",label:"\uD310\uB9E4 \uC2DC\uC791\uC77C\uC2DC",type:"slot",name:"saleStart",hint:"NULL=\uC989\uC2DC"},{key:"saleEndDate",label:"\uD310\uB9E4 \uC885\uB8CC\uC77C\uC2DC",type:"slot",name:"saleEnd",hint:"NULL=\uBB34\uAE30\uD55C"},{key:"dispStartDate",label:"\uC804\uC2DC \uC2DC\uC791\uC77C\uC2DC",type:"slot",name:"dispStart",hint:"NULL=\uC989\uC2DC. \uD310\uB9E4\uC2DC\uC791\uC77C \uC774\uC804\uC774\uBA74 \uCD9C\uC2DC\uC608\uC815 \uD45C\uC2DC"},{key:"dispEndDate",label:"\uC804\uC2DC \uC885\uB8CC\uC77C\uC2DC",type:"slot",name:"dispEnd",hint:"NULL=\uBB34\uAE30\uD55C"},{key:"_prodFlags",label:"\uC0C1\uD488 \uC18D\uC131",colNm:"is_new / is_best / adlt_yn / same_day_dliv_yn / sold_out_yn",type:"slot",name:"prodFlags"},{type:"group",label:"\uBC30\uC1A1"},{key:"dlivTmpltId",label:"\uBC30\uC1A1\uD15C\uD50C\uB9BF",type:"slot",name:"dlivTmplt",required:!0},{key:"dlivMethodCd",label:"\uBC30\uC1A1\uBC29\uBC95 override",type:"select",options:()=>P.DLIV_METHOD,nullLabel:"\uBC30\uC1A1\uD15C\uD50C\uB9BF \uAE30\uBCF8\uAC12 \uC0AC\uC6A9",hint:"\uAE34\uAE09 \uBC1C\uC1A1 \uB4F1 \uC774 \uC0C1\uD488\uB9CC \uB2E4\uB978 \uBC30\uC1A1\uBC29\uBC95\uC744 \uC368\uC57C \uD560 \uB54C\uB9CC \uC9C0\uC815 (\uC218\uC218\uB8CC\uB294 \uBC30\uC1A1\uC218\uC218\uB8CC\uC815\uCC45\uC5D0 \uB530\uB984)"}],D.detailForm=[{key:"advrtStmt",label:"\uD64D\uBCF4\uBB38\uAD6C",type:"slot",name:"advrtStmt",colSpan:3},{key:"advrtStartDate",label:"\uAD11\uACE0 \uB178\uCD9C \uC2DC\uC791",type:"slot",name:"advrtStart"},{key:"advrtEndDate",label:"\uAD11\uACE0 \uB178\uCD9C \uC885\uB8CC",type:"slot",name:"advrtEnd"},{key:"minBuyQty",label:"\uCD5C\uC18C\uAD6C\uB9E4\uC218\uB7C9 (min_buy_qty)",type:"number",min:1,placeholder:"1"},{key:"maxBuyQty",label:"1\uD68C \uCD5C\uB300\uAD6C\uB9E4\uC218\uB7C9 (max_buy_qty)",type:"number",min:1,placeholder:"\uBB34\uC81C\uD55C"},{key:"dayMaxBuyQty",label:"1\uC77C \uCD5C\uB300\uAD6C\uB9E4\uC218\uB7C9 (day_max_buy_qty)",type:"number",min:1,placeholder:"\uBB34\uC81C\uD55C"},{key:"idMaxBuyQty",label:"ID\uB2F9 \uB204\uC801 \uCD5C\uB300 (id_max_buy_qty)",type:"number",min:1,placeholder:"\uBB34\uC81C\uD55C"}],D.singleStockForm=[],D.promoCouponGrid=[{key:"couponId",label:"\uCFE0\uD3F0 ID",style:"width:180px;",cellStyle:"font-family:monospace;font-size:11px;color:#555;"},{key:"targetTypeCd",label:"\uB300\uC0C1\uC720\uD615",style:"width:90px;",align:"center",badge:()=>"badge-blue",fmt:e=>e||"PRODUCT"},{key:"applyStartDate",label:"\uC801\uC6A9\uC2DC\uC791\uC77C",align:"center",fmt:e=>e?String(e).slice(0,10):"\uC989\uC2DC"},{key:"applyEndDate",label:"\uC801\uC6A9\uC885\uB8CC\uC77C",align:"center",fmt:e=>e?String(e).slice(0,10):"\uBB34\uAE30\uD55C"},{key:"_remainTime",label:"\uB0A8\uC740\uAE30\uAC04",align:"center",fmt:(e,t)=>be(t.applyEndDate)}],D.promoSaveGrid=[{key:"saveId",label:"\uC801\uB9BD\uAE08 ID",style:"width:180px;",cellStyle:"font-family:monospace;font-size:11px;color:#555;"},{key:"targetTypeCd",label:"\uB300\uC0C1\uC720\uD615",style:"width:90px;",align:"center",badge:()=>"badge-blue",fmt:e=>e||"PRODUCT"},{key:"regDate",label:"\uC5F0\uACB0\uC77C\uC2DC",align:"center",fmt:e=>e?String(e).slice(0,16):""}],D.promoDiscntGrid=[{key:"discntId",label:"\uD560\uC778 ID",style:"width:180px;",cellStyle:"font-family:monospace;font-size:11px;color:#555;"},{key:"targetTypeCd",label:"\uB300\uC0C1\uC720\uD615",style:"width:90px;",align:"center",badge:()=>"badge-blue",fmt:e=>e||"PRODUCT"},{key:"applyStartDate",label:"\uC801\uC6A9\uC2DC\uC791\uC77C",align:"center",fmt:e=>e?String(e).slice(0,10):"\uC989\uC2DC"},{key:"applyEndDate",label:"\uC801\uC6A9\uC885\uB8CC\uC77C",align:"center",fmt:e=>e?String(e).slice(0,10):"\uBB34\uAE30\uD55C"},{key:"_remainTime",label:"\uB0A8\uC740\uAE30\uAC04",align:"center",fmt:(e,t)=>be(t.applyEndDate)}],D.promoGiftGrid=[{key:"giftId",label:"\uC0AC\uC740\uD488 ID",style:"width:180px;",cellStyle:"font-family:monospace;font-size:11px;color:#555;"},{key:"targetTypeCd",label:"\uB300\uC0C1\uC720\uD615",style:"width:90px;",align:"center",badge:()=>"badge-green",fmt:e=>e||"PRODUCT"},{key:"condTypeCd",label:"\uC870\uAC74\uC720\uD615",style:"width:100px;",align:"center",fmt:e=>e||"-"},{key:"applyStartDate",label:"\uC801\uC6A9\uC2DC\uC791\uC77C",align:"center",fmt:e=>e?String(e).slice(0,10):"\uC989\uC2DC"},{key:"applyEndDate",label:"\uC801\uC6A9\uC885\uB8CC\uC77C",align:"center",fmt:e=>e?String(e).slice(0,10):"\uBB34\uAE30\uD55C"},{key:"_remainTime",label:"\uB0A8\uC740\uAE30\uAC04",align:"center",fmt:(e,t)=>be(t.applyEndDate)}],{columns:D,handleBtnAction:U,fnCallbackModal:ao,handleShareKakao:Yl,handleCopyLink:Vl,pdfAreaRef:Yt,pdfExporting:je,handleExportPdf:Kl,cfIsNew:Me,cfSaveDisabled:Il,showTab:ro,topTab:G,cfDtlMode:R,tabMode2:fe,tabs:et,form:r,errors:$,codeGrpModal:le,openCodeGrpModal:Vt,tabPage:pe,tabData:p,onTabPageChange:Je,cfTabTotalPages:Ze,fnTabPageNos:so,uiState:l,mdModalOpen:Bl,cfMdUserListFiltered:xl,cfMdSelectedNm:hl,openMdModal:Mt,selectMdUser:At,optGroups:m,skus:x,cfTotalStock:Io,generateSkus:Y,moveSku:ft,cfSkuFilter1Options:Bo,cfSkuFilter2Options:Ro,cfSkusFiltered:Uo,cfBaseSkuId:ko,cfProdFlags:ho,PROD_FLAG_OPTIONS,cfOptTypeAllCodes:fo,cfOptTypeLevel1Codes:ot,cfOptTypeCodes:lt,getOptValCodes:Ne,fnBuildLevel1Items:ve,fnBuildLevel2Items:xe,onCategoryChange:go,addOptGroup:dt,removeOptGroup:Re,addOptItem:it,removeOptItem:st,fnOptGrpType:te,fnOptGrpTypeLabel:mo,onOptGrpTypeChange:bo,onOptItemDragStart:yo,onOptItemDragOver:vo,onOptItemDrop:xo,images:u,addImageByUrl:vt,onFileChange:Eo,setMain:ht,removeImage:kt,fileInputRef:ut,triggerFileInput:yt,fnOptItem2Label:Ko,cfImgGroups:mt,onImgGroupDragOver:Lo,onImgGroupDragLeave:Fo,onImgGroupDrop:Go,replaceInputRef:gt,onReplaceFileChange:Vo,onImgDragStart:$o,onImgDragOver:qo,onImgDrop:Ho,prodCategories:O,cfCatExcludeSet:rl,catPickerOpen:Sl,removeCategory:Pt,onCatDragStart:ul,onCatDragOver:gl,onCatDrop:ml,relProds:z,codeProds:H,prodPickerOpen:nl,openProdPicker:St,fnProdPickerCallback:dl,removeRelProd:Ct,removeCodeProd:_t,onRelDrop:il,onCodeDrop:sl,bundlePickerOpen:Se,addBundleItem:Ut,removeBundleItem:zt,cfBundleRateSum:Et,cfBundleRateOk:Gl,setPickerOpen:Ce,addSetItem:Qe,removeSetItem:Ft,cfPlanVisible:W,cfPlanAllChecked:qe,addPlanRow:Ot,onPlanChange:bl,deletePlanChecked:Tt,cfMarginRateCalc:ll,SKU_MX_FIELDS:ze,fnMxField:V,fnMxItems:q,fnMxSku:N,fnMxOn:rt,fnMxCellStyle:ct,onMxFillRow:Mo,onMxFillCol:Ao,onMxFillAll:No,fnMxCell:_o,fnMxStyle:Po,fnMxTitle:Oo,onMxCellChange:To,fnCombOn:wo,onCombChange:Do,onCombRow:So,onCombCol:Co,contentBlocks:S,addContentBlock:It,removeContentBlock:wt,onBlockFileChange:Qo,onBlockDragStart:jo,onBlockDragOver:Wo,onBlockDrop:Xo,contentSplitRef:Ke,onDividerMousedown:Jo,prodOptCategoryTypeCd:Ul,openHelp:Bt,safeFirst:de,safeFind:lo,safeFilter:ee,grpCodes:P,fnProdTypeLabel:no,fnMdRowStyle:Hl,fnRemainSkuRowStyle:Ql,fnDateTime:co,fnRemainingTime:be,fnPlanRowChecked:jl,onPlanToggleCheck:Wl,onPlanToggleCheckAll:Xl,fnPlanRowStyle2:Jl,dtlId:Vue.computed(()=>y.dtlId),showToast:c,catDragoverIdx:Dl,dragBlockIdx:Cl,dragImgIdx:_l,dragOptGrpId:Pl,dragOptItemIdx:Ol,dragoverBlockIdx:Tl,dragoverImgIdx:Ml,dragoverOptItemIdx:Al,isDraggingDivider:Nl,previewDevice:Rl,skuFilter1:zl,skuFilter2:El,skuFilterStock:Ll,splitPct:Fl}},template:`
<div ref="pdfAreaRef">
<!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container :title="!active ? '\uC0C1\uD488 \uC0C1\uC138' : (cfIsNew ? (fnProdTypeLabel() ? fnProdTypeLabel() + ' \uC0C1\uD488 \uB4F1\uB85D' : '\uC0C1\uD488 \uB4F1\uB85D') : (cfDtlMode ? (fnProdTypeLabel() ? fnProdTypeLabel() + ' \uC0C1\uD488 \uC0C1\uC138' : '\uC0C1\uD488 \uC0C1\uC138') : (fnProdTypeLabel() ? fnProdTypeLabel() + ' \uC0C1\uD488\uC218\uC815' : '\uC0C1\uD488 \uC218\uC815')))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.prodId)">
  <template #toolbar-actions>
    <button v-if="active ? (!cfIsNew) : false" class="btn btn-sm" style="background:#fff;border:1px solid #d9d9d9;color:#555;font-weight:500;"
      title="\uC0AC\uC6A9\uC790 \uD398\uC774\uC2A4\uC5D0\uC11C \uC0C1\uD488 \uC0C1\uC138 \uBBF8\uB9AC\uBCF4\uAE30" @click="handleBtnAction('form-preview')">
      \u{1F441} \uBBF8\uB9AC\uBCF4\uAE30
    </button>
    <!-- SEO \uD14C\uC2A4\uD2B8 \u2014 SEO \uBA54\uD0C0\uD0DC\uADF8 \uC11C\uBC84\uC0AC\uC774\uB4DC \uC8FC\uC785(/foui/prodDtl/{prodId}) \uC751\uB2F5 \uD655\uC778\uC6A9. \uD14C\uC2A4\uD2B8 \uAE30\uAC04 \uB3D9\uC548 \uC720\uC9C0 -->
    <button v-if="active ? (!cfIsNew) : false" class="btn btn-sm" style="background:#fff;border:1px solid #d9d9d9;color:#555;font-weight:500;"
      title="SEO \uBA54\uD0C0\uD0DC\uADF8 \uC11C\uBC84\uC0AC\uC774\uB4DC \uC8FC\uC785 \uC751\uB2F5(raw HTML) \uD655\uC778" @click="handleBtnAction('form-seo-test')">
      \u{1F9EA} SEO \uD14C\uC2A4\uD2B8
    </button>
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
  <bo-tab-bar :tabs="tabs" :tab="topTab" :tab-mode="tabMode2"
    @tab-select="id => handleBtnAction('tab-select', id)"
    @mode-select="m => handleBtnAction('tab-mode', m)" />
  <!-- ===== \u25A1. \uD0ED\uBC14 ====================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     \u{1F4CB} \uAE30\uBCF8\uC815\uBCF4  (pd_prod \uC8FC\uC694 \uD544\uB4DC)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="dtl-pane" v-show="showTab('info')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4CB} \uAE30\uBCF8\uC815\uBCF4</div>
      <!-- \uBCF4\uAE30\uBAA8\uB4DC: fieldset disabled \uB85C \uC2AC\uB86F(\uCE74\uD14C\uACE0\uB9AC/MD/\uB0A0\uC9DC\uD53D\uCEE4/select)\xB7\uCCB4\uD06C\uBC15\uC2A4 \uC790\uB3D9 \uBE44\uD65C\uC131. \uBAA8\uB2EC\uC740 teleport \uB85C fieldset \uBC16\uC774\uB77C \uC601\uD5A5 \uC5C6\uC74C -->
      <fieldset :disabled="cfDtlMode" style="border:none;padding:0;margin:0;min-width:0;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 \uD1B5\uD569 \uD3FC (BoFormArea \uC790\uB3D9 \uB80C\uB354, cols=3 \uD55C \uC904 3\uD544\uB4DC) ======== -->
      <bo-form-area :columns="columns.infoForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact plain-readonly :show-actions="false">
        <!-- \uC635\uC158 \uCE74\uD14C\uACE0\uB9AC \u2014 \uC635\uC158\uC124\uC815 \uD0ED\uC5D0\uC11C \uC774\uB3D9\uD574 \uC628 \uD56D\uBAA9. \uAC12\uC774 \uBC14\uB00C\uBA74 onCategoryChange \uAC00
             \uAE30\uC874 \uC635\uC158 \uAD6C\uC131 \uCD08\uAE30\uD654 \uC5EC\uBD80\uB97C confirm \uD55C \uB4A4 1\uB2E8/2\uB2E8 \uC720\uD615 \uD6C4\uBCF4\uB97C \uAC08\uC544\uB07C\uC6B4\uB2E4. -->
        <template #optCategory>
          <div v-if="cfDtlMode" class="readonly-field-plain">
            {{ cfOptTypeLevel1Codes.find(c => c.codeValue === prodOptCategoryTypeCd)?.codeLabel || '-' }}
          </div>
          <template v-else>
            <select class="form-control" v-model="prodOptCategoryTypeCd" @change="onCategoryChange">
              <option value="">-- \uC120\uD0DD --</option>
              <option v-for="c in cfOptTypeLevel1Codes" :key="c?.codeValue" :value="c.codeValue">{{ c.codeLabel }}</option>
            </select>
            <div v-if="!prodOptCategoryTypeCd" style="font-size:11px;color:#f5a623;margin-top:3px;">
              \uC635\uC158 \uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD574\uC57C \uC635\uC1581 \xB7 \uC635\uC1582\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
            </div>
          </template>
        </template>
        <!-- \uC635\uC1581 / \uC635\uC1582 \u2014 \uC635\uC158\uC124\uC815 \uD0ED\uC758 "1\uB2E8/2\uB2E8 \uC720\uD615" select \uB97C \uC62E\uACA8\uC628 \uAC83.
             optGroups \uBC30\uC5F4(0~2\uAC1C)\uACFC \uD3FC\uC758 \uACE0\uC815 2\uCE78 \uC0AC\uC774 \uAC04\uADF9\uC740 onOptGrpTypeChange \uAC00 \uD761\uC218\uD55C\uB2E4. -->
        <template #optType1>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ fnOptGrpTypeLabel(1) }}</div>
          <template v-else>
            <select class="form-control" :value="fnOptGrpType(1)" :disabled="!prodOptCategoryTypeCd"
              @change="onOptGrpTypeChange(1, $event.target.value)">
              <option value="">-- \uC120\uD0DD --</option>
              <option v-for="c in cfOptTypeCodes" :key="c?.codeId" :value="c.codeValue">{{ c.codeLabel }}</option>
            </select>
            <div v-if="optGroups[0] ? optGroups[0].items.length > 0 : false" style="font-size:11px;color:#1677ff;margin-top:3px;">
              \uAC12 {{ optGroups[0].items.length }}\uAC1C \u2014 \uC635\uC158\uC124\uC815 \uD0ED\uC5D0\uC11C \uD3B8\uC9D1
            </div>
          </template>
        </template>
        <template #optType2>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ fnOptGrpTypeLabel(2) }}</div>
          <template v-else>
            <select class="form-control" :value="fnOptGrpType(2)" :disabled="!prodOptCategoryTypeCd"
              @change="onOptGrpTypeChange(2, $event.target.value)">
              <option value="">-- \uBBF8\uC0AC\uC6A9 (1\uCC28\uC6D0 \uC635\uC158) --</option>
              <option v-for="c in cfOptTypeCodes" :key="'t2-'+c?.codeId" :value="c.codeValue">{{ c.codeLabel }}</option>
            </select>
            <div v-if="optGroups[1] ? optGroups[1].items.length > 0 : false" style="font-size:11px;color:#1677ff;margin-top:3px;">
              \uAC12 {{ optGroups[1].items.length }}\uAC1C \u2014 \uC635\uC158\uC124\uC815 \uD0ED\uC5D0\uC11C \uD3B8\uC9D1
            </div>
          </template>
        </template>
        <template #categories>
          <div v-if="cfDtlMode" class="readonly-field-plain">
            {{ prodCategories.length ? prodCategories.map(c => c.categoryNm).join(' , ') : '-' }}
          </div>
          <div v-else style="border:1px solid #e2e8f0;border-radius:6px;background:#fff;min-height:38px;padding:4px 6px;">
            <div v-if="prodCategories.length===0" style="color:#aaa;font-size:12px;padding:4px 2px;">\uCE74\uD14C\uACE0\uB9AC\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694</div>
            <div v-for="(cat,idx) in prodCategories" :key="cat?.categoryId"
              draggable="true" @dragstart="onCatDragStart(idx)" @dragover.prevent="onCatDragOver(idx)" @drop.prevent="onCatDrop()"
              :style="catDragoverIdx===idx?'opacity:0.5;':''"
              style="display:flex;align-items:center;gap:4px;padding:2px 0;">
              <span style="cursor:grab;color:#bbb;font-size:14px;flex-shrink:0;">\u2261</span>
              <span v-if="idx===0" style="font-size:10px;background:#f9a8d4;color:#9d174d;padding:1px 5px;border-radius:10px;flex-shrink:0;">
                \uB300\uD45C
              </span>
              <span style="font-size:12px;color:#64748b;flex-shrink:0;">
                <span v-if="cat.depth>=1" style="font-size:10px;">{{ ['','\uB300','\uC911','\uC18C'][cat.depth]||cat.depth }}\u25B8</span>
              </span>
              <span style="font-size:13px;flex:1;">{{ cat.categoryNm }}</span>
              <button type="button" @click="handleBtnAction('category-remove', idx)" style="border:none;background:none;color:#f87171;font-size:13px;padding:0 2px;flex-shrink:0;">
                \u2715
              </button>
            </div>
            <button type="button" @click="handleBtnAction('catPicker-open')"
              style="margin-top:4px;font-size:12px;color:#6366f1;border:1px dashed #a5b4fc;background:none;border-radius:4px;padding:2px 8px;width:100%;">
              + \uCE74\uD14C\uACE0\uB9AC \uCD94\uAC00
            </button>
          </div>
        </template>
        <template #brand>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.brandNm || '-' }}</div>
          <select v-else class="form-control" v-model="form.brandId">
            <option value="">-- \uC120\uD0DD --</option>
            <option v-for="b in ([]||[])" :key="b.brandId||b.id" :value="b.brandId||b.id">{{ b.brandNm||b.name }}</option>
          </select>
        </template>
        <template #vendor>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.vendorNm || '-' }}</div>
          <select v-else class="form-control" v-model="form.vendorId">
            <option value="">-- \uC120\uD0DD --</option>
            <option v-for="v in ([]||[])" :key="v.vendorId||v.id" :value="v.vendorId||v.id">{{ v.vendorNm||v.name }}</option>
          </select>
        </template>
        <template #mdUser>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ cfMdSelectedNm || '-' }}</div>
          <div v-else style="display:flex;gap:6px;align-items:flex-end;">
            <input class="form-control" :value="cfMdSelectedNm||''" readonly placeholder="\uB2F4\uB2F9MD\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694"
              style="flex:1;background:#fafafa;" @click="handleBtnAction('mdModal-open')" />
            <span style="display:inline-flex;align-items:center;flex-shrink:0;">
              <button class="btn btn-secondary btn-sm" type="button" @click="handleBtnAction('mdModal-open')" style="padding:2px 7px;" title="\uC120\uD0DD">\u{1F50D}</button>
              <button v-if="form.mdUserId" type="button" title="\uC120\uD0DD \uD574\uC81C" @click="handleBtnAction('md-clear')" style="background:none;border:none;padding:0 4px;color:#bbb;cursor:pointer;font-size:11px;line-height:1;">x</button>
            </span>
          </div>
        </template>
        <template #dlivTmplt>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.dlivTmpltId || '-' }}</div>
          <select v-else class="form-control" v-model="form.dlivTmpltId">
            <option value="">-- \uC120\uD0DD --</option>
            <option v-for="t in ([]||[])" :key="t?.dlivTmpltId" :value="t.dlivTmpltId">{{ t.dlivTmpltNm }}</option>
          </select>
        </template>
        <template #saleStart>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.saleStartDate ? fnDateTime(form.saleStartDate) : '\uC989\uC2DC' }}</div>
          <bo-date-time-picker v-else v-model="form.saleStartDate" placeholder-date="\uC989\uC2DC" />
        </template>
        <template #saleEnd>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.saleEndDate ? fnDateTime(form.saleEndDate) : '\uBB34\uAE30\uD55C' }}</div>
          <bo-date-time-picker v-else v-model="form.saleEndDate" placeholder-date="\uBB34\uAE30\uD55C" />
        </template>
        <template #dispStart>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.dispStartDate ? fnDateTime(form.dispStartDate) : '\uC989\uC2DC' }}</div>
          <bo-date-time-picker v-else v-model="form.dispStartDate" placeholder-date="\uC989\uC2DC" />
        </template>
        <!-- \uB9C8\uC9C4\uC728 \u2014 \uBCC4\uB3C4 \uAC00\uACA9 \uD3FC\uC5D0\uC11C \uC774\uAD00 (\uC77D\uAE30 \uC804\uC6A9 \uC790\uB3D9 \uACC4\uC0B0\uAC12) -->
        <template #marginRate>
          <div v-if="cfDtlMode" class="readonly-field-plain" :style="{ color: cfMarginRateCalc ? '#389e0d' : '#bbb' }">
            {{ cfMarginRateCalc ? cfMarginRateCalc + '%' : '-' }}
          </div>
          <div v-else class="form-control" :style="{ background:'#f5f5f5', color: cfMarginRateCalc ? '#389e0d' : '#bbb' }">
            {{ cfMarginRateCalc ? cfMarginRateCalc + '%' : '(\uB9E4\uC785\uAC00 \uC785\uB825 \uC2DC \uC790\uB3D9 \uACC4\uC0B0)' }}
          </div>
        </template>
        <!-- \uC0C1\uD488 \uC18D\uC131 \u2014 \uD3FC \uBC16 33% \uD3ED div \uC5D0\uC11C \uC774\uAD00. \uC774\uC81C \uD310\uB9E4\uC124\uC815 \uADF8\uB8F9\uC758 \uD55C \uCE78\uC744 \uCC28\uC9C0\uD55C\uB2E4 -->
        <template #prodFlags>
          <bo-multi-check-select v-model="cfProdFlags" :options="PROD_FLAG_OPTIONS" :show-all="false" wrap list-all
            placeholder="\uC120\uD0DD \uC548 \uD568" :plain="cfDtlMode" :disabled="cfDtlMode" min-width="100%" />
        </template>
        <template #dispEnd>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.dispEndDate ? fnDateTime(form.dispEndDate) : '\uBB34\uAE30\uD55C' }}</div>
          <bo-date-time-picker v-else v-model="form.dispEndDate" placeholder-date="\uBB34\uAE30\uD55C" />
        </template>
      </bo-form-area>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCE74\uD14C\uACE0\uB9AC \uD53C\uCEE4 \uBAA8\uB2EC ========================================== -->
      <bo-cm-popup-modal v-if="catPickerOpen" popup-cmd="cmPopup-category-pick" popup-code="category"
        :init-selected-ids="[...cfCatExcludeSet]" :on-callback="fnCallbackModal"
        @close="handleBtnAction('catPicker-close')" />
      <!-- ===== \u25A0.\u25A0.\u25A0. \uB2F4\uB2F9MD \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
      <bo-cm-popup-modal v-if="mdModalOpen" popup-cmd="cmPopup-md-pick" popup-code="user"
        title="\uB2F4\uB2F9MD \uC120\uD0DD" :on-callback="fnCallbackModal"
        @close="handleBtnAction('mdModal-close')" />
      </fieldset>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('info-form-edit')"
        :save-click="() => handleBtnAction('info-form-save')"
        :delete-click="() => handleBtnAction('info-form-delete')"
        :cancel-click="() => handleBtnAction('info-form-cancel')"
        :close-click="() => handleBtnAction('info-form-close')" />
    </div>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     \u2699 \uC635\uC158\uC124\uC815  (pd_prod_opt / pd_prod_opt_item / pd_prod_sku)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="dtl-pane" v-show="showTab('option')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u2699 \uC635\uC158\uC124\uC815</div>
      <!-- \uBCF4\uAE30\uBAA8\uB4DC: fieldset disabled \uB85C \uBAA8\uB4E0 \uC785\uB825/\uBC84\uD2BC/select \uC790\uB3D9 \uBE44\uD65C\uC131 (\uD3B8\uC9D1 \uC7A0\uAE08) -->
      <fieldset :disabled="cfDtlMode" style="border:none;padding:0;margin:0;min-width:0;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC635\uC158 \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD \uBC14 ======================================== -->
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap;padding:10px 14px;background:#f9f9f9;border-radius:8px;border:1px solid #eee;">
        <!-- \uC635\uC158 \uCE74\uD14C\uACE0\uB9AC select \uB294 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC73C\uB85C \uC774\uB3D9\uD588\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uC120\uD0DD\uB41C \uAC12\uC744 \uC77D\uAE30 \uC804\uC6A9\uC73C\uB85C\uB9CC \uBCF4\uC5EC\uC900\uB2E4
             (1\uB2E8/2\uB2E8 \uC720\uD615\uC774 \uC774 \uAC12\uC5D0 \uC885\uC18D\uB418\uBBC0\uB85C \uBB34\uC5C7\uC774 \uC120\uD0DD\uB3FC \uC788\uB294\uC9C0\uB294 \uACC4\uC18D \uBCF4\uC5EC\uC57C \uD55C\uB2E4) -->
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="font-size:12px;color:#555;font-weight:600;flex-shrink:0;">\uC635\uC158 \uCE74\uD14C\uACE0\uB9AC</span>
          <span v-if="prodOptCategoryTypeCd" class="badge badge-purple" style="font-size:11px;">
            {{ cfOptTypeLevel1Codes.find(c => c.codeValue === prodOptCategoryTypeCd)?.codeLabel || prodOptCategoryTypeCd }}
          </span>
          <span v-else style="font-size:11px;color:#aaa;">\uBBF8\uC120\uD0DD</span>
        </div>
        <!-- 1\uB2E8/2\uB2E8 \uC720\uD615 select \uB3C4 \uAE30\uBCF8\uC815\uBCF4 [\uC635\uC158\uC0C1\uD488] \uADF8\uB8F9\uC73C\uB85C \uC774\uB3D9\uD588\uB2E4.
             \uC774 \uD0ED\uC740 \uC774\uC81C "\uAC12(\uD56D\uBAA9) \uD3B8\uC9D1 + SKU \uC0DD\uC131" \uB9CC \uB2F4\uB2F9\uD558\uACE0, \uC5B4\uB5A4 \uC720\uD615\uC778\uC9C0\uB294 \uC77D\uAE30 \uC804\uC6A9\uC73C\uB85C \uBCF4\uC5EC\uC900\uB2E4. -->
        <template v-if="prodOptCategoryTypeCd ? (optGroups.length>0) : false">
          <span style="font-size:11px;color:#ddd;">\u2502</span>
          <div v-for="(grp, gi) in optGroups" :key="'typeSel-'+grp._id" style="display:flex;align-items:center;gap:6px;">
            <span class="badge badge-blue" style="font-size:11px;">\uC635\uC158{{ gi+1 }}</span>
            <span v-if="grp.level2Cd" style="font-size:12px;color:#333;font-weight:600;">{{ fnOptGrpTypeLabel(gi+1) }}</span>
            <span v-else style="font-size:11px;color:#aaa;">\uC720\uD615 \uBBF8\uC9C0\uC815</span>
            <span v-if="grp.level2Cd" style="font-size:11px;color:#1677ff;">{{ grp.items.length }}\uAC1C</span>
          </div>
        </template>
        <span v-if="!prodOptCategoryTypeCd" style="font-size:11px;color:#f5a623;">\u2190 [\uAE30\uBCF8\uC815\uBCF4] \uD0ED\uC5D0\uC11C \uC635\uC158 \uCE74\uD14C\uACE0\uB9AC\uB97C \uBA3C\uC800 \uC120\uD0DD\uD558\uC138\uC694</span>
        <span v-else style="font-size:11px;color:#aaa;margin-left:auto;">\uC635\uC158 \uCE74\uD14C\uACE0\uB9AC \xB7 \uC635\uC1581 \xB7 \uC635\uC1582 \uBCC0\uACBD\uC740 [\uAE30\uBCF8\uC815\uBCF4] \uD0ED\uC5D0\uC11C</span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBBF8\uC0AC\uC6A9 \uC548\uB0B4 ============================================== -->
      <template v-if="!prodOptCategoryTypeCd">
        <div style="padding:10px 14px;background:#f9f0ff;border-radius:8px;border:1px solid #d3adf7;font-size:12px;color:#531dab;margin-bottom:8px;">
          \u{1F4A1} [\uAE30\uBCF8\uC815\uBCF4] \uD0ED\uC758 <b>\uC635\uC158 \uCE74\uD14C\uACE0\uB9AC</b>\uB97C \uC120\uD0DD\uD558\uBA74 \uC635\uC158 \uC124\uC815\uC774 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.
        </div>
      </template>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC635\uC158 \uAC12 \uC785\uB825 (1\uB2E8 / 2\uB2E8 \uB098\uB780\uD788) ============================= -->
      <template v-else>
        <div :style="optGroups.length===2 ? 'display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;' : 'margin-bottom:12px;'">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uCC28\uC6D0\uBCC4 \uBE14\uB85D ========================================== -->
          <div v-for="(grp, gi) in optGroups" :key="grp?._id"
            style="border:1px solid #e0e0e0;border-radius:8px;padding:12px;background:#fafafa;">
            <!-- \uCC28\uC6D0 \uD5E4\uB354 -->
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span class="badge badge-blue" style="font-size:11px;flex-shrink:0;">{{ grp.level }}\uB2E8 \uC635\uC158</span>
              <input class="form-control" v-model="grp.grpNm" placeholder="\uC635\uC158\uBA85 (\uC608: \uC0C9\uC0C1)"
                style="flex:1;min-width:80px;font-size:12px;" />
              <button v-if="!cfDtlMode" class="btn btn-xs btn-danger" style="flex-shrink:0;" @click="handleBtnAction('optGroup-remove', gi)">\uC0AD\uC81C</button>
            </div>
            <!-- \uC635\uC158\uAC12 \uD14C\uC774\uBE14 -->
            <div style="max-height:220px;overflow-y:auto;border:1px solid #f0f0f0;border-radius:6px;background:#fff;">
              <table style="width:100%;border-collapse:collapse;font-size:12px;">
                <thead style="position:sticky;top:0;background:#f5f5f5;z-index:1;">
                  <tr style="border-bottom:1px solid #e0e0e0;">
                    <th style="width:18px;padding:3px 2px;"></th>
                    <th style="width:22px;padding:3px 4px;text-align:center;color:#888;font-size:11px;">#</th>
                    <th style="padding:3px 6px;text-align:left;font-weight:600;color:#555;font-size:11px;">\uD45C\uC2DC\uBA85</th>
                    <th style="width:120px;padding:3px 6px;text-align:left;font-weight:600;color:#555;font-size:11px;">\uC800\uC7A5\uAC12</th>
                    <th style="width:80px;padding:3px 6px;text-align:left;font-weight:600;color:#555;font-size:11px;">\uC2A4\uD0C0\uC77C</th>
                    <th style="width:30px;padding:3px 4px;text-align:center;color:#555;font-size:11px;">\uC0AC\uC6A9</th>
                    <th style="width:22px;padding:3px 2px;"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, ii) in grp.items" :key="item?._id"
                    draggable="true"
                    @dragstart="onOptItemDragStart(grp, ii)"
                    @dragover.prevent="onOptItemDragOver(grp, ii)"
                    @drop.prevent="onOptItemDrop(grp)"
                    @dragend="dragOptGrpId=null;dragOptItemIdx=null;dragoverOptItemIdx=null"
                    style="border-bottom:1px solid #f0f0f0;transition:background 0.1s;"
                    :style="(dragOptGrpId===grp._id ? (dragoverOptItemIdx===ii ? dragOptItemIdx!==ii : false) : false) ? 'background:#dbeafe;' : (ii%2===1 ? 'background:#fafafa;' : '')">
                    <td style="padding:2px;text-align:center;cursor:grab;color:#ccc;font-size:13px;user-select:none;">\u2261</td>
                    <td style="padding:2px 4px;text-align:center;color:#bbb;font-size:11px;">{{ ii+1 }}</td>
                    <td style="padding:2px 4px;">
                      <input v-model="item.nm" placeholder="\uC608: \uBE14\uB799"
                        style="width:100%;font-size:12px;border:1px solid #ddd;border-radius:4px;padding:2px 5px;height:22px;"
                        @blur="generateSkus" />
                    </td>
                    <td style="padding:2px 4px;">
                      <input v-model="item.val" placeholder="BLACK"
                        style="width:100%;font-size:11px;border:1px solid #ddd;border-radius:4px;padding:2px 5px;height:22px;font-family:monospace;"
                        @blur="generateSkus" />
                    </td>
                    <td style="padding:2px 4px;">
                      <div style="display:flex;gap:3px;align-items:center;">
                        <span v-if="item.prodOptStyle ? (item.prodOptStyle.startsWith('#')) : false"
                          :style="'flex-shrink:0;width:14px;height:14px;border-radius:2px;border:1px solid #ddd;background:'+item.prodOptStyle+';'"></span>
                        <input v-model="item.prodOptStyle" placeholder="#hex"
                          style="flex:1;min-width:0;font-size:11px;border:1px solid #ddd;border-radius:4px;padding:2px 4px;height:22px;font-family:monospace;" />
                      </div>
                    </td>
                    <td style="padding:2px 4px;text-align:center;">
                      <input type="checkbox" :checked="item.useYn==='Y'"
                        @change="item.useYn=$event.target.checked?'Y':'N'; generateSkus()"
                        style="width:13px;height:13px;" />
                    </td>
                    <td style="padding:2px 3px;text-align:center;">
                      <button v-if="!cfDtlMode" style="background:#ff4d4f;color:#fff;border:none;border-radius:3px;width:18px;height:18px;font-size:10px;line-height:1;padding:0;cursor:pointer;"
                        @click="handleBtnAction('optItem-remove', {grp:grp, ii:ii})">\u2715</button>
                    </td>
                  </tr>
                  <tr v-if="grp.items.length===0">
                    <td colspan="7" style="text-align:center;color:#bbb;padding:10px;font-size:12px;">\uAC12\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button v-if="!cfDtlMode" class="btn btn-xs btn-secondary" style="margin-top:6px;" @click="handleBtnAction('optItem-add', grp)">+ \uAC12 \uCD94\uAC00</button>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0. N\xD7M \uC870\uD569 \uC124\uC815 (\uCCB4\uD06C/\uC5B8\uCCB4\uD06C\uB85C SKU useYn \uD1A0\uAE00) ==================
         bo-matrix \uB85C \uAD50\uCCB4(2026-08-25). \uC774\uC804\uC5D4 \uC140\xB7\uD5E4\uB354 \uB85C\uC9C1\uC774 \uC804\uBD80 \uC18D\uC131\uAC12 \uC548 IIFE \uC600\uB2E4. -->
        <div v-if="optGroups.length===2" style="border:1px solid #bae0ff;border-radius:8px;padding:12px;background:#f0f8ff;margin-bottom:12px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap;">
            <span style="font-size:12px;font-weight:700;color:#0958d9;">\u{1F4CA} N\xD7M \uC870\uD569 \uC124\uC815</span>
            <span style="font-size:11px;color:#555;">
              {{ fnMxItems(1).length }} \xD7 {{ fnMxItems(2).length }}
              = <strong>{{ skus.filter(s=>s.useYn==='Y').length }}</strong> / {{ skus.length }} \uD65C\uC131 SKU
            </span>
          </div>
          <bo-matrix
            :rows="fnMxItems(1)" :cols="fnMxItems(2)"
            row-key="_id" col-key="_id" row-label="nm" col-label="nm"
            row-style-key="prodOptStyle" col-style-key="prodOptStyle"
            :corner="((optGroups[0]?.grpNm)||'1\uB2E8') + ' / ' + ((optGroups[1]?.grpNm)||'2\uB2E8')"
            cell-type="checkbox" header-toggle :cell="fnCombOn" :readonly="cfDtlMode"
            max-height="none" cell-width="52px"
            @cell-change="onCombChange" @row-header="onCombRow" @col-header="onCombCol" />
          <div style="margin-top:6px;font-size:11px;color:#888;">\u{1F4A1} \uD589/\uC5F4 \uD5E4\uB354\uC758 \uCCB4\uD06C\uBC15\uC2A4 \uB610\uB294 \uD5E4\uB354 \uC140 \uD074\uB9AD \uC2DC \uD574\uB2F9 \uD589/\uC5F4 \uC804\uCCB4 \uD1A0\uAE00</div>
        </div>
        <div style="padding:8px 12px;background:#e6f4ff;border-radius:8px;border:1px solid #bae0ff;font-size:12px;color:#0958d9;">
          \u{1F4A1} SKU\uBCC4 \uAC00\uACA9\xB7\uC7AC\uACE0\uB294 <strong>\u{1F4B0} \uC635\uC158(\uAC00\uACA9/\uC7AC\uACE0)</strong> \uD0ED\uC5D0\uC11C \uAD00\uB9AC\uD569\uB2C8\uB2E4.
        </div>
      </template>
      </fieldset>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('option-form-edit')"
        :save-click="() => handleBtnAction('option-form-save')"
        :delete-click="() => handleBtnAction('option-form-delete')"
        :cancel-click="() => handleBtnAction('option-form-cancel')"
        :close-click="() => handleBtnAction('option-form-close')" />
    </div>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     \u{1F4C4} \uC0C1\uD488\uC124\uBA85  (contentBlocks \u2014 \uCCA8\uBD80/URL/HTML \uBE14\uB85D)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="dtl-pane" v-show="showTab('content')" style="margin:0;padding:0;overflow:hidden;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title" style="padding:14px 20px;">\u{1F4C4} \uC0C1\uD488\uC124\uBA85</div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uB2E8 \uD234\uBC14: \uBE14\uB85D \uCD94\uAC00 \uBC84\uD2BC (\uC218\uC815\uBAA8\uB4DC \uC804\uC6A9) ========================= -->
      <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid #f0f0f0;background:#fafafa;flex-wrap:wrap;">
        <span style="font-size:13px;font-weight:700;color:#333;margin-right:4px;">\uC0C1\uD488\uC124\uBA85 \uBE14\uB85D</span>
        <button v-if="!cfDtlMode" class="btn btn-secondary btn-sm" @click="handleBtnAction('contentBlock-add', 'file')">+ \uCCA8\uBD80 \uC774\uBBF8\uC9C0</button>
        <button v-if="!cfDtlMode" class="btn btn-secondary btn-sm" @click="handleBtnAction('contentBlock-add', 'url')">+ URL \uC774\uBBF8\uC9C0</button>
        <button v-if="!cfDtlMode" class="btn btn-secondary btn-sm" @click="handleBtnAction('contentBlock-add', 'html')">+ HTML \uC5D0\uB514\uD130</button>
        <span style="font-size:12px;color:#aaa;margin-left:4px;">{{ contentBlocks.length }}\uAC1C \uBE14\uB85D<span v-if="!cfDtlMode"> \xB7 \uC88C\uCE21 \u2261 \uB4DC\uB798\uADF8\uB85C \uC21C\uC11C \uBCC0\uACBD</span></span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC2A4\uD50C\uB9BF \uD328\uB110 (\uD3B8\uC9D1 \uC88C + \uBBF8\uB9AC\uBCF4\uAE30 \uC6B0) ============================== -->
      <div ref="contentSplitRef" style="display:flex;height:520px;overflow:hidden;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC88C: \uBE14\uB85D \uD3B8\uC9D1 \uC601\uC5ED ======================================= -->
        <div :style="{ width: splitPct + '%', overflowY: 'auto', padding: '12px 14px', flexShrink: 0 }">
          <div v-if="contentBlocks.length === 0"
            style="border:2px dashed #e0e0e0;border-radius:10px;padding:40px 20px;text-align:center;color:#bbb;font-size:13px;">
            \uC704 \uBC84\uD2BC\uC73C\uB85C \uBE14\uB85D\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694.
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBE14\uB85D \uB9AC\uC2A4\uD2B8 ========================================== -->
          <div v-for="(block, bi) in contentBlocks" :key="block?._id" :draggable="!cfDtlMode" @dragstart="cfDtlMode ? null : onBlockDragStart(bi)" @dragover.prevent="cfDtlMode ? null : onBlockDragOver(bi)" @drop.prevent="cfDtlMode ? null : onBlockDrop()" @dragend="dragBlockIdx=null;dragoverBlockIdx=null" style="border:1px solid #e8e8e8;border-radius:10px;margin-bottom:10px;background:#fff;transition:border-color 0.15s,background 0.15s;overflow:hidden;" :style="(dragoverBlockIdx===bi ? dragBlockIdx!==bi : false) ? 'border-color:#1677ff;background:#e6f4ff;' : ''">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBE14\uB85D \uD5E4\uB354 ========================================= -->
            <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#f9f9f9;border-bottom:1px solid #f0f0f0;">
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD584\uBC84\uAC70 \uD578\uB4E4 (\uC218\uC815\uBAA8\uB4DC \uC804\uC6A9) ========================= -->
              <span v-if="!cfDtlMode" style="cursor:grab;color:#ccc;font-size:16px;user-select:none;letter-spacing:-2px;flex-shrink:0;" title="\uB4DC\uB798\uADF8\uB85C \uC21C\uC11C \uBCC0\uACBD">
                \u2261
              </span>
              <span class="badge" :class="block.type==='file'?'badge-green':block.type==='url'?'badge-blue':'badge-orange'" style="font-size:11px;flex-shrink:0;">
                {{ block.type==='file' ? '\u{1F4CE} \uCCA8\uBD80' : block.type==='url' ? '\u{1F517} URL' : '\u270F HTML' }}
              </span>
              <span style="font-size:12px;color:#888;flex:1;">\uBE14\uB85D {{ bi+1 }}</span>
              <button v-if="!cfDtlMode" class="btn btn-xs btn-danger" @click="handleBtnAction('contentBlock-remove', bi)" title="\uC0AD\uC81C">\u2715</button>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCCA8\uBD80 \uBC29\uC2DD ========================================= -->
            <div v-if="block.type==='file'" style="padding:12px;">
              <div v-if="block.content" style="margin-bottom:8px;">
                <img :src="block.content" style="max-width:100%;max-height:200px;border-radius:6px;border:1px solid #e0e0e0;" />
                <div style="font-size:11px;color:#888;margin-top:4px;">{{ block.fileName }}</div>
              </div>
              <label v-if="!cfDtlMode" class="btn btn-secondary btn-sm" style="display:inline-block;">
                \u{1F4CE} \uD30C\uC77C \uC120\uD0DD
                <input type="file" accept="image/*" style="display:none;" @change="onBlockFileChange(block, $event)" />
              </label>
              <button v-if="!cfDtlMode ? (block.content) : false" class="btn btn-xs btn-danger" @click="handleBtnAction('contentBlock-clearFile', block)" style="margin-left:6px;">
                \uC0AD\uC81C
              </button>
              <span v-if="cfDtlMode ? (!block.content) : false" style="font-size:12px;color:#bbb;">\uC774\uBBF8\uC9C0 \uC5C6\uC74C</span>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. URL \uBC29\uC2DD ======================================== -->
            <div v-else-if="block.type==='url'" style="padding:12px;">
              <input v-if="!cfDtlMode" class="form-control" v-model="block.content" placeholder="\uC774\uBBF8\uC9C0 URL (https://...)" style="font-size:13px;margin-bottom:8px;" />
              <div v-if="block.content" style="margin-top:4px;">
                <img :src="block.content" style="max-width:100%;max-height:200px;border-radius:6px;border:1px solid #e0e0e0;"
                  @error="$event.target.style.display='none'" @load="$event.target.style.display=''" />
              </div>
              <span v-else-if="cfDtlMode" style="font-size:12px;color:#bbb;">\uC774\uBBF8\uC9C0 \uC5C6\uC74C</span>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. HTML \uC5D0\uB514\uD130 \uBC29\uC2DD (Toast UI) \u2014 \uBCF4\uAE30\uBAA8\uB4DC\uB294 \uB80C\uB354\uB9CC ========= -->
            <div v-else-if="block.type==='html'" style="padding:12px;">
              <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:120px;line-height:1.6;overflow:auto;" v-html="block.content || '-'"></div>
              <base-html-editor v-else v-model="block.content" height="240px" />
            </div>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB4DC\uB798\uADF8 \uAD6C\uBD84\uC120 =========================================== -->
        <div @mousedown="onDividerMousedown"
          style="width:5px;flex-shrink:0;background:#e8e8e8;cursor:col-resize;transition:background 0.15s;position:relative;z-index:1;"
          :style="isDraggingDivider ? 'background:#1677ff;' : ''"
          title="\uB4DC\uB798\uADF8\uB85C \uC88C\uC6B0 \uB108\uBE44 \uC870\uC808">
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#ccc;font-size:11px;writing-mode:vertical-rl;user-select:none;">
            \u22EE
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC6B0: \uBBF8\uB9AC\uBCF4\uAE30 \uC601\uC5ED ======================================== -->
        <div :style="{ width: (100 - splitPct) + '%', flexShrink: 0, display: 'flex', flexDirection: 'column', borderLeft: '1px solid #f0f0f0' }">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB514\uBC14\uC774\uC2A4 \uD0ED ========================================== -->
          <div style="display:flex;align-items:center;gap:4px;padding:8px 12px;border-bottom:1px solid #f0f0f0;background:#fafafa;flex-shrink:0;">
            <span style="font-size:11px;color:#aaa;margin-right:4px;">\uBBF8\uB9AC\uBCF4\uAE30</span>
            <button class="btn btn-xs" :class="previewDevice==='pc'?'btn-primary':'btn-secondary'" @click="handleBtnAction('preview-setDevice', 'pc')" style="font-size:11px;padding:2px 8px;">
              \u{1F5A5} PC
            </button>
            <button class="btn btn-xs" :class="previewDevice==='tablet'?'btn-primary':'btn-secondary'" @click="handleBtnAction('preview-setDevice', 'tablet')" style="font-size:11px;padding:2px 8px;">
              \u{1F4F1} \uD0DC\uBE14\uB9BF
            </button>
            <button class="btn btn-xs" :class="previewDevice==='mobile'?'btn-primary':'btn-secondary'" @click="handleBtnAction('preview-setDevice', 'mobile')" style="font-size:11px;padding:2px 8px;">
              \u{1F4F2} \uBAA8\uBC14\uC77C
            </button>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBBF8\uB9AC\uBCF4\uAE30 \uBDF0 ========================================== -->
          <div style="flex:1;overflow-y:auto;padding:12px;background:#f5f5f5;display:flex;justify-content:center;">
            <div :style="{
              width: previewDevice==='pc' ? '100%' : previewDevice==='tablet' ? '768px' : '375px',
              maxWidth: '100%',
              background: '#fff',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              padding: '16px',
              minHeight: '200px',
              fontSize: '14px',
              lineHeight: '1.7',
              overflowX: 'hidden',
              }">
              <div v-if="contentBlocks.length===0" style="color:#bbb;text-align:center;padding:40px;font-size:13px;">
                \uBE14\uB85D\uC744 \uCD94\uAC00\uD558\uBA74 \uC5EC\uAE30\uC5D0 \uBBF8\uB9AC\uBCF4\uAE30\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
              </div>
              <div style="display:flex;flex-direction:column;gap:12px;">
                <template v-for="block in contentBlocks" :key="block?._id">
                  <img v-if="(block.type==='file'||block.type==='url') ? block.content : false" :src="block.content" style="max-width:100%;height:auto;display:block;border-radius:4px;" />
                  <div v-else-if="block.type==='html'" v-html="block.content||''"></div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="active" style="padding:8px 16px;border-top:1px solid #f0f0f0;">
        <bo-form-actions :readonly="cfDtlMode" :show-delete="false"
          :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
          :edit-click="() => handleBtnAction('content-form-edit')"
          :save-click="() => handleBtnAction('content-form-save')"
          :delete-click="() => handleBtnAction('content-form-delete')"
          :cancel-click="() => handleBtnAction('content-form-cancel')"
          :close-click="() => handleBtnAction('content-form-close')" />
      </div>
    </div>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     \u{1F4DD} \uC0C1\uC138\uC124\uC815  (advrt / \uAD6C\uB9E4\uC81C\uD55C / \uD61C\uD0DD)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="dtl-pane" v-show="showTab('detail')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4DD} \uC0C1\uC138\uC124\uC815</div>
      <!-- \uBCF4\uAE30\uBAA8\uB4DC: fieldset disabled \uB85C \uD64D\uBCF4\uBB38\uAD6C\xB7\uB0A0\uC9DC\uD53D\uCEE4\xB7\uD61C\uD0DD \uCCB4\uD06C\uBC15\uC2A4 \uC790\uB3D9 \uBE44\uD65C\uC131 (\uD3B8\uC9D1 \uC7A0\uAE08) -->
      <fieldset :disabled="cfDtlMode" style="border:none;padding:0;margin:0;min-width:0;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uC138\uC124\uC815 \uD1B5\uD569 \uD3FC (\uD64D\uBCF4\uBB38\uAD6C + \uAD11\uACE0 \uB178\uCD9C + \uAD6C\uB9E4 \uC81C\uD55C, cols=3 \uD55C \uC904 3\uD544\uB4DC) ===== -->
      <bo-form-area :columns="columns.detailForm" :form="form" :errors="errors"
        :readonly="cfDtlMode" :cols="3" compact plain-readonly :show-actions="false">
        <template #advrtStmt>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.advrtStmt || '-' }}</div>
          <template v-else>
            <input class="form-control" v-model="form.advrtStmt" placeholder="\uC608: \uC774\uBC88 \uC8FC \uD55C\uC815 20% \uD560\uC778!" maxlength="500" />
            <div style="font-size:11px;color:#aaa;text-align:right;margin-top:2px;">{{ (form.advrtStmt||'').length }} / 500</div>
          </template>
        </template>
        <template #advrtStart>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.advrtStartDate ? fnDateTime(form.advrtStartDate) : '-' }}</div>
          <bo-date-time-picker v-else v-model="form.advrtStartDate" />
        </template>
        <template #advrtEnd>
          <div v-if="cfDtlMode" class="readonly-field-plain">{{ form.advrtEndDate ? fnDateTime(form.advrtEndDate) : '-' }}</div>
          <bo-date-time-picker v-else v-model="form.advrtEndDate" />
        </template>
      </bo-form-area>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD310\uB9E4\uACC4\uD68D ================================================= -->
      <hr style="border:none;border-top:1px solid #f0f0f0;margin:20px 0 16px;" />
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:13px;font-weight:700;">
          \uD310\uB9E4\uACC4\uD68D
          <span style="font-size:12px;font-weight:400;color:#888;">{{ cfPlanVisible.length }}\uAC74</span>
        </div>
        <div v-if="!cfDtlMode" style="display:flex;gap:6px;">
          <button class="btn btn-sm btn-danger"    @click="handleBtnAction('plan-deleteChecked')">\uCCB4\uD06C\uC0AD\uC81C</button>
          <button class="btn btn-sm btn-secondary" @click="handleBtnAction('plan-addRow')">\uD589\uCD94\uAC00</button>
        </div>
      </div>
      <div style="overflow-x:auto;">
        <bo-grid bare :columns="columns.planGrid" :rows="cfPlanVisible" row-key="_id"
          selectable checked-key="_id"
          :all-checked="cfPlanAllChecked" :is-checked="fnPlanRowChecked"
          :row-style="fnPlanRowStyle2"
          empty-text="[\uD589\uCD94\uAC00]\uB85C \uD310\uB9E4\uACC4\uD68D\uC744 \uCD94\uAC00\uD558\uC138\uC694."
          @toggle-check="onPlanToggleCheck" @toggle-check-all="onPlanToggleCheckAll"
          @cell-change="e => onPlanChange(e.row)"></bo-grid>
      </div>
      <div style="margin-top:8px;display:flex;gap:8px;font-size:11px;color:#aaa;align-items:center;">
        <span style="background:#f6ffed;border:1px solid #b7eb8f;border-radius:3px;padding:1px 6px;color:#389e0d;">I \uC2E0\uADDC</span>
        <span style="background:#fffbe6;border:1px solid #ffe58f;border-radius:3px;padding:1px 6px;color:#d46b08;">U \uC218\uC815</span>
        <span style="background:#fff1f0;border:1px solid #ffa39e;border-radius:3px;padding:1px 6px;color:#cf1322;">D \uC0AD\uC81C\uC608\uC815</span>
      </div>
      </fieldset>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('detail-form-edit')"
        :save-click="() => handleBtnAction('detail-form-save')"
        :delete-click="() => handleBtnAction('detail-form-delete')"
        :cancel-click="() => handleBtnAction('detail-form-cancel')"
        :close-click="() => handleBtnAction('detail-form-close')" />
    </div>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     \u{1F3AF} \uD504\uB85C\uBAA8\uC158  (\uCFE0\uD3F0 / \uC801\uB9BD\uAE08 / \uD560\uC778 / \uD504\uB85C\uBAA8\uC158 \uC801\uC6A9 \uC5EC\uBD80)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="dtl-pane" v-show="showTab('promo')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F3AF} \uD504\uB85C\uBAA8\uC158</div>
      <fieldset :disabled="cfDtlMode" style="border:none;padding:0;margin:0;min-width:0;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD504\uB85C\uBAA8\uC158 \uC801\uC6A9 \uC5EC\uBD80 ======================================= -->
      <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:10px;">\uD504\uB85C\uBAA8\uC158 \uC801\uC6A9 \uC5EC\uBD80</div>
      <div style="display:flex;gap:24px;padding:14px;background:#f9f9f9;border-radius:8px;border:1px solid #eee;flex-wrap:wrap;margin-bottom:24px;">
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;">
          <input type="checkbox" :checked="form.couponUseYn==='Y'" @change="form.couponUseYn=$event.target.checked?'Y':'N'" />
          \uCFE0\uD3F0 \uC0AC\uC6A9 \uAC00\uB2A5 (coupon_use_yn)
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;">
          <input type="checkbox" :checked="form.saveUseYn==='Y'" @change="form.saveUseYn=$event.target.checked?'Y':'N'" />
          \uC801\uB9BD\uAE08 \uC0AC\uC6A9 \uAC00\uB2A5 (save_use_yn)
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;">
          <input type="checkbox" :checked="form.discntUseYn==='Y'" @change="form.discntUseYn=$event.target.checked?'Y':'N'" />
          \uD560\uC778 \uC801\uC6A9 \uAC00\uB2A5 (discnt_use_yn)
        </label>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uD488 \uD504\uB85C\uBAA8\uC158 \uC815\uBCF4 (\uD560\uC778/\uCFE0\uD3F0/\uC801\uB9BD\uAE08/\uC0AC\uC740\uD488, 2\uC5F4 \uADF8\uB9AC\uB4DC) =========================================== -->
      <div class="section-title" style="margin-top:0;">\uC0C1\uD488 \uD504\uB85C\uBAA8\uC158 \uC815\uBCF4</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
      <!-- \uC0C1\uD488 \uD560\uC778 \uBAA9\uB85D (\uD61C\uD0DD \uD070 \uC21C 1\uC704 \u2014 \uC815\uAC00 \uC790\uCCB4\uB97C \uB0AE\uCD94\uB294 \uC9C1\uC811\uD560\uC778) -->
      <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:13px;font-weight:700;">
          \uC0C1\uD488 \uD560\uC778 \uBAA9\uB85D
          <span style="font-size:12px;font-weight:400;color:#888;">{{ tabData.promoDiscnts.length }}\uAC74</span>
          <span v-if="!form.discntUseYn || form.discntUseYn==='N'" class="badge badge-gray" style="margin-left:6px;font-size:11px;">\uC0AC\uC6A9 \uBBF8\uD5C8\uC6A9</span>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-sm btn-secondary" @click="handleBtnAction('promo-discnt-reload')">\u{1F504} \uC7AC\uC870\uD68C</button>
          <button v-if="!cfDtlMode" class="btn btn-sm btn-primary" @click="handleBtnAction('promo-discnt-add')">+ \uD560\uC778 \uCD94\uAC00</button>
        </div>
      </div>
      <bo-grid bare :columns="columns.promoDiscntGrid" :rows="tabData.promoDiscnts"
        row-key="discntItemId"
        empty-text="\uC774 \uC0C1\uD488\uC5D0 \uC5F0\uACB0\uB41C \uD560\uC778\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.">
        <template v-if="!cfDtlMode" #row-actions="{ row: r }">
          <button class="btn btn_row_delete" @click="handleBtnAction('promo-discnt-delete', r.discntItemId)">\uC0AD\uC81C</button>
        </template>
      </bo-grid>
      </div>
      <!-- \uC0C1\uD488 \uCFE0\uD3F0 \uBAA9\uB85D -->
      <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:13px;font-weight:700;">
          \uC0C1\uD488 \uCFE0\uD3F0 \uBAA9\uB85D
          <span style="font-size:12px;font-weight:400;color:#888;">{{ tabData.promoCoupons.length }}\uAC74</span>
          <span v-if="!form.couponUseYn || form.couponUseYn==='N'" class="badge badge-gray" style="margin-left:6px;font-size:11px;">\uC0AC\uC6A9 \uBBF8\uD5C8\uC6A9</span>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-sm btn-secondary" @click="handleBtnAction('promo-coupon-reload')">\u{1F504} \uC7AC\uC870\uD68C</button>
          <button v-if="!cfDtlMode" class="btn btn-sm btn-primary" @click="handleBtnAction('promo-coupon-add')">+ \uCFE0\uD3F0 \uCD94\uAC00</button>
        </div>
      </div>
      <bo-grid bare :columns="columns.promoCouponGrid" :rows="tabData.promoCoupons"
        row-key="couponItemId"
        empty-text="\uC774 \uC0C1\uD488\uC5D0 \uC5F0\uACB0\uB41C \uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.">
        <template v-if="!cfDtlMode" #row-actions="{ row: r }">
          <button class="btn btn_row_delete" @click="handleBtnAction('promo-coupon-delete', r.couponItemId)">\uC0AD\uC81C</button>
        </template>
      </bo-grid>
      </div>
      <!-- \uC0C1\uD488 \uC801\uB9BD\uAE08 \uBAA9\uB85D -->
      <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:13px;font-weight:700;">
          \uC0C1\uD488 \uC801\uB9BD\uAE08 \uBAA9\uB85D
          <span style="font-size:12px;font-weight:400;color:#888;">{{ tabData.promoSaves.length }}\uAC74</span>
          <span v-if="!form.saveUseYn || form.saveUseYn==='N'" class="badge badge-gray" style="margin-left:6px;font-size:11px;">\uC0AC\uC6A9 \uBBF8\uD5C8\uC6A9</span>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-sm btn-secondary" @click="handleBtnAction('promo-save-reload')">\u{1F504} \uC7AC\uC870\uD68C</button>
          <button v-if="!cfDtlMode" class="btn btn-sm btn-primary" @click="handleBtnAction('promo-save-add')">+ \uC801\uB9BD\uAE08 \uCD94\uAC00</button>
        </div>
      </div>
      <bo-grid bare :columns="columns.promoSaveGrid" :rows="tabData.promoSaves"
        row-key="saveItemId"
        empty-text="\uC774 \uC0C1\uD488\uC5D0 \uC5F0\uACB0\uB41C \uC801\uB9BD\uAE08\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.">
        <template v-if="!cfDtlMode" #row-actions="{ row: r }">
          <button class="btn btn_row_delete" @click="handleBtnAction('promo-save-delete', r.saveItemId)">\uC0AD\uC81C</button>
        </template>
      </bo-grid>
      </div>
      <!-- \uC0C1\uD488 \uC0AC\uC740\uD488 \uBAA9\uB85D -->
      <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:13px;font-weight:700;">
          \uC0C1\uD488 \uC0AC\uC740\uD488 \uBAA9\uB85D
          <span style="font-size:12px;font-weight:400;color:#888;">{{ tabData.promoGifts.length }}\uAC74</span>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-sm btn-secondary" @click="handleBtnAction('promo-gift-reload')">\u{1F504} \uC7AC\uC870\uD68C</button>
          <button v-if="!cfDtlMode" class="btn btn-sm btn-primary" @click="handleBtnAction('promo-gift-add')">+ \uC0AC\uC740\uD488 \uCD94\uAC00</button>
        </div>
      </div>
      <bo-grid bare :columns="columns.promoGiftGrid" :rows="tabData.promoGifts"
        row-key="giftCondId"
        empty-text="\uC774 \uC0C1\uD488\uC5D0 \uC5F0\uACB0\uB41C \uC0AC\uC740\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.">
        <template v-if="!cfDtlMode" #row-actions="{ row: r }">
          <button class="btn btn_row_delete" @click="handleBtnAction('promo-gift-delete', r.giftCondId)">\uC0AD\uC81C</button>
        </template>
      </bo-grid>
      </div>
      </div>
      </fieldset>
      <!-- \uD504\uB85C\uBAA8\uC158 \uD53C\uCEE4 \uBAA8\uB2EC 4\uAC1C \u2014 fieldset \uBC16\uC5D0 \uBC30\uCE58 (fieldset disabled \uC601\uD5A5 \uCC28\uB2E8) -->
      <bo-cm-popup-modal v-if="uiState.promoPicker === 'coupon'" popup-code="coupon" @select="r => handleBtnAction('promo-coupon-pick', r)" @close="uiState.promoPicker = null" />
      </pm-coupon-pick-modal>
      <bo-cm-popup-modal v-if="uiState.promoPicker === 'save'" popup-code="save" @select="r => handleBtnAction('promo-save-pick', r)" @close="uiState.promoPicker = null" />
      </pm-save-pick-modal>
      <bo-cm-popup-modal v-if="uiState.promoPicker === 'discnt'" popup-code="discnt" @select="r => handleBtnAction('promo-discnt-pick', r)" @close="uiState.promoPicker = null" />
      </pm-discnt-pick-modal>
      <bo-cm-popup-modal v-if="uiState.promoPicker === 'gift'" popup-code="gift" @select="r => handleBtnAction('promo-gift-pick', r)" @close="uiState.promoPicker = null" />
      </pm-gift-pick-modal>
      <!-- \uC0C1\uD488 \uD504\uB85C\uBAA8\uC158 \uC815\uBCF4 \uADF8\uB8F9\uC758 \uC800\uC7A5/\uCDE8\uC18C/\uB2EB\uAE30 -->
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('promo-form-edit')"
        :save-click="() => handleBtnAction('promo-form-save')"
        :delete-click="() => handleBtnAction('promo-form-delete')"
        :cancel-click="() => handleBtnAction('promo-form-cancel')"
        :close-click="() => handleBtnAction('promo-form-close')" />
    </div>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     \u{1F5BC} \uC774\uBBF8\uC9C0  (pd_prod_img)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="dtl-pane" v-show="showTab('image')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F5BC} \uC774\uBBF8\uC9C0</div>
      <input type="file" ref="fileInputRef" multiple accept="image/*" style="display:none" @change="onFileChange" />
      <input type="file" ref="replaceInputRef" accept="image/*" style="display:none" @change="onReplaceFileChange" />
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;">
        <span style="font-size:12px;color:#888;">\uCD1D {{ images.length }}\uAC1C</span>
        <span style="font-size:11px;color:#bbb;">\xB7 \uC635\uC1581 \uADF8\uB8F9\uBCC4\uB85C \uB4F1\uB85D\uD569\uB2C8\uB2E4. \uD30C\uC77C\uC744 \uADF8\uB8F9 \uC704\uC5D0 \uB04C\uC5B4\uB2E4 \uB193\uC544\uB3C4 \uB429\uB2C8\uB2E4.</span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC635\uC1581 \uADF8\uB8F9 \uBAA9\uB85D =============================================
       \uC635\uC158\uC0C1\uD488 \uC774\uBBF8\uC9C0\uB294 "\uC0C9\uC0C1(\uC635\uC1581) \uB2E8\uC704\uB85C \uC5EC\uB7EC \uC7A5" \uC774 \uC2E4\uBB34 \uAE30\uBCF8\uC774\uB77C \uADF8\uB8F9\uC73C\uB85C \uBB36\uC5B4 \uBCF4\uC5EC\uC900\uB2E4.
       \uADF8\uB8F9 \uC21C\uC11C\uB294 \uC635\uC158\uC124\uC815 \uD0ED\uC758 \uC635\uC1581 \uD56D\uBAA9 \uC21C\uC11C(= \uC815\uB82C\uC21C\uC11C), \uACF5\uD1B5(NULL)\uC774 \uB9E8 \uC55E.
       \uADF8\uB8F9 \uCE74\uB4DC \uC804\uCCB4\uAC00 \uD30C\uC77C \uB4DC\uB86D \uC874\uC774\uBA70, \uD589\uC744 \uB2E4\uB978 \uADF8\uB8F9\uC73C\uB85C \uB04C\uC5B4\uB2E4 \uB193\uC73C\uBA74 \uC635\uC1581 \uC774 \uBC14\uB010\uB2E4. -->
      <div style="max-height:620px;overflow-y:auto;padding:2px;">
        <div v-for="g in cfImgGroups" :key="g.key"
          @dragover.prevent="onImgGroupDragOver($event, g.key)"
          @dragleave.self="onImgGroupDragLeave(g.key)"
          @drop.prevent="onImgGroupDrop($event, g.key)"
          style="border:1px solid #e8e8e8;border-radius:10px;margin-bottom:12px;background:#fff;transition:border-color 0.15s,background 0.15s;"
          :style="uiState.dropOpt1===g.key ? 'border-color:#1677ff;background:#e6f4ff;' : (g.isEtc ? 'border-color:#f0c0c2;' : '')">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uADF8\uB8F9 \uD5E4\uB354 (\uADF8\uB8F9\uBCC4 \uC5C5\uB85C\uB4DC \uBC84\uD2BC) ======================== -->
          <div style="display:flex;gap:8px;align-items:center;padding:10px 12px;border-bottom:1px solid #f0f0f0;background:#fafbfc;border-radius:10px 10px 0 0;">
            <span style="font-size:12px;font-weight:700;color:#333;">{{ g.label }}</span>
            <span style="font-size:11px;color:#aaa;">{{ g.items.length }}\uAC1C</span>
            <span v-if="g.isEtc" style="font-size:11px;color:#d9363e;">\uC635\uC158\uC124\uC815\uC5D0 \uC5C6\uB294 \uC635\uC158\uAC12\uC785\uB2C8\uB2E4. \uAC01 \uD589\uC758 opt_id_1 \uC744 \uB2E4\uC2DC \uC9C0\uC815\uD558\uC138\uC694.</span>
            <div style="margin-left:auto;display:flex;gap:6px;">
              <button v-if="!cfDtlMode" class="btn btn-xs btn-secondary" @click="handleBtnAction('img-triggerFile', g.key)" style="font-size:11px;">+ \uD30C\uC77C \uC120\uD0DD</button>
              <button v-if="!cfDtlMode" class="btn btn-xs btn-secondary" @click="handleBtnAction('img-addByUrl', g.key)" style="font-size:11px;">+ URL \uC785\uB825</button>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uADF8\uB8F9 \uBCF8\uBB38 ============================================ -->
          <div style="padding:8px;background:#fafafa;border-radius:0 0 10px 10px;">
            <div v-if="g.items.length===0"
              :style="'border:2px dashed #e4e4e4;border-radius:8px;padding:16px;text-align:center;color:#bbb;font-size:12px;' + (cfDtlMode ? '' : 'cursor:pointer;')"
              @click="cfDtlMode ? null : handleBtnAction('img-triggerFile', g.key)">
              {{ cfDtlMode ? '\uB4F1\uB85D\uB41C \uC774\uBBF8\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' : '\uD074\uB9AD\uD558\uAC70\uB098 \uD30C\uC77C\uC744 \uB04C\uC5B4\uB2E4 \uB193\uC73C\uC138\uC694' }}
            </div>
            <div v-for="{ img, idx } in g.items" :key="img?.id" :draggable="!cfDtlMode" @dragstart="cfDtlMode ? null : onImgDragStart(idx)" @dragover.prevent="cfDtlMode ? null : onImgDragOver(idx)" @drop.prevent="cfDtlMode ? null : onImgDrop()" @dragend="dragImgIdx=null;dragoverImgIdx=null;uiState.dragImgId=null" style="display:flex;gap:10px;align-items:flex-start;padding:12px;border:1px solid #e8e8e8;border-radius:10px;margin-bottom:10px;background:#fff;transition:border-color 0.15s,background 0.15s;" :style="img.isMain ? 'border-color:#e8587a;background:#fff8f9;' : ((dragoverImgIdx===idx ? dragImgIdx!==idx : false) ? 'border-color:#1677ff;background:#e6f4ff;' : '')">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB4DC\uB798\uADF8 \uD578\uB4E4 (\uC218\uC815\uBAA8\uB4DC \uC804\uC6A9) ============================= -->
          <div v-if="!cfDtlMode" style="flex-shrink:0;display:flex;align-items:center;justify-content:center;width:20px;height:90px;cursor:grab;color:#ccc;font-size:15px;user-select:none;letter-spacing:-2px;" title="\uB4DC\uB798\uADF8\uB85C \uC21C\uC11C \uBCC0\uACBD">
            \u22EE\u22EE
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC378\uB124\uC77C ============================================= -->
          <div style="flex-shrink:0;width:90px;height:90px;border-radius:8px;overflow:hidden;background:#f5f5f5;border:1px solid #e0e0e0;display:flex;align-items:center;justify-content:center;">
            <img v-if="img.previewUrl" :src="img.previewUrl" style="width:100%;height:100%;object-fit:cover;" />
            <span v-else style="font-size:11px;color:#bbb;text-align:center;">\uBBF8\uB9AC\uBCF4\uAE30 \uC5C6\uC74C</span>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC785\uB825 \uC601\uC5ED =========================================== -->
          <div style="flex:1;min-width:0;">
            <div v-if="!img.previewUrl||img.previewUrl.startsWith('http')" style="margin-bottom:4px;">
              <label class="form-label" style="font-size:11px;">\uC774\uBBF8\uC9C0 URL</label>
              <input class="form-control" v-model="img.previewUrl" placeholder="https://..." style="font-size:12px;" :readonly="cfDtlMode" />
            </div>
            <div v-if="img.previewUrl" style="font-size:9px;color:#bbb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:6px;" :title="img.previewUrl">
              {{ img.previewUrl }}
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. opt_id_1: \uC635\uC158 1\uB2E8 select ================= -->
              <div style="flex:1;min-width:140px;margin-bottom:4px;">
                <label class="form-label" style="font-size:11px;">opt_id_1 <span style="color:#aaa;"> (NULL=\uACF5\uD1B5) </span></label>
                <select class="form-control" v-model="img.prodOpt1Id" style="font-size:12px;" @change="img.prodOpt2Id=''" :disabled="cfDtlMode">
                  <option value="">-- \uACF5\uD1B5 (NULL) --</option>
                  <option v-if="!safeFirst(optGroups)||safeFirst(optGroups).items.length===0" disabled value="">
                    \uC635\uC158\uC124\uC815 \uD0ED\uC5D0\uC11C 1\uB2E8 \uC635\uC158\uC744 \uBA3C\uC800 \uCD94\uAC00\uD558\uC138\uC694
                  </option>
                  <option v-for="item in (optGroups[0]?.items||[])" :key="item?._id" :value="item.val||String(item._id)">
                    {{ item.nm + (item.val ? ' (' + item.val + ')' : '') }}
                  </option>
                </select>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. opt_id_2: \uC635\uC158 2\uB2E8 select (1\uB2E8 \uC120\uD0DD \uD6C4 \uC5F0\uB3D9) ===== -->
              <div style="flex:1;min-width:140px;margin-bottom:4px;">
                <label class="form-label" style="font-size:11px;">opt_id_2 <span style="color:#aaa;"> (NULL=\uC635\uC1581 \uACF5\uD1B5) </span></label>
                <select class="form-control" v-model="img.prodOpt2Id" style="font-size:12px;" :disabled="cfDtlMode || (!img.prodOpt1Id ? optGroups.length<2 : false)">
                  <option value="">-- \uACF5\uD1B5 (NULL) --</option>
                  <option v-if="!optGroups[1]||optGroups[1].items.length===0" disabled value="">2\uB2E8 \uC635\uC158 \uC5C6\uC74C</option>
                  <option v-for="item in (optGroups[1]?.items||[])" :key="item?._id" :value="item.val||String(item._id)">
                    {{ fnOptItem2Label(item) }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC6B0\uCE21 \uBC84\uD2BC =========================================== -->
          <div style="flex-shrink:0;display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
            <button v-if="!cfDtlMode ? (!img.isMain) : false" class="btn btn-sm btn-secondary" @click="handleBtnAction('img-setMain', img.id)" style="font-size:11px;">\uB300\uD45C \uC124\uC815</button>
            <span v-if="img.isMain" style="font-size:11px;font-weight:700;color:#e8587a;padding:4px 8px;background:#fde8ee;border-radius:4px;">
              \u2605 \uB300\uD45C
            </span>
            <button v-if="!cfDtlMode" class="btn btn-sm btn-secondary" @click="handleBtnAction('img-replaceFile', img.id)" style="font-size:11px;" title="\uC774 \uD589\uC758 \uD30C\uC77C\uB9CC \uAD50\uCCB4 \u2014 \uC21C\uC11C\xB7\uB300\uD45C\xB7\uC635\uC158 \uC9C0\uC815\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4">\uD30C\uC77C \uAD50\uCCB4</button>
            <button v-if="!cfDtlMode" class="btn btn-sm btn-danger" @click="handleBtnAction('img-remove', img.id)" style="font-size:11px;">\uC0AD\uC81C</button>
            <span style="font-size:11px;color:#bbb;" title="\uC804\uCCB4 \uC815\uB82C\uC21C\uC11C(sort_ord) \u2014 \uADF8\uB8F9\uACFC \uBB34\uAD00\uD55C \uD1B5\uD569 \uC21C\uBC88\uC785\uB2C8\uB2E4">{{ idx+1 }}/{{ images.length }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. /\uC635\uC1581 \uADF8\uB8F9 \uBAA9\uB85D ============================================= -->
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('image-form-edit')"
        :save-click="() => handleBtnAction('image-form-save')"
        :delete-click="() => handleBtnAction('image-form-delete')"
        :cancel-click="() => handleBtnAction('image-form-cancel')"
        :close-click="() => handleBtnAction('image-form-close')" />
    </div>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     \u{1F517} \uC5F0\uAD00\uC0C1\uD488
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="dtl-pane" v-show="showTab('related')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F517} \uC5F0\uAD00\uC0C1\uD488</div>
      <!-- \uBCF4\uAE30\uBAA8\uB4DC: fieldset disabled \uB85C \uCD94\uAC00/\uC0AD\uC81C/\uC120\uD0DD \uBC84\uD2BC\xB7input \uC790\uB3D9 \uBE44\uD65C\uC131 (\uD3B8\uC9D1 \uC7A0\uAE08) -->
      <fieldset :disabled="cfDtlMode" style="border:none;padding:0;margin:0;min-width:0;display:flex;flex-direction:column;gap:24px;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC139\uC1581: \uC5F0\uAD00\uC0C1\uD488 =========================================== -->
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <div style="font-size:13px;font-weight:700;">
            \uC5F0\uAD00\uC0C1\uD488
            <span style="font-size:11px;font-weight:400;color:#888;">
              (pd_prod_rel \xB7 prod_rel_type_cd =
              <strong style="color:#1677ff;">REL_PROD</strong>
              )
            </span>
            <span class="badge badge-blue" style="margin-left:6px;">{{ relProds.length }}\uAC74</span>
          </div>
          <button v-if="!cfDtlMode" class="btn btn-sm btn-secondary" @click="handleBtnAction('prodPicker-open', 'rel')">+ \uCD94\uAC00</button>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ============================================= -->
        <bo-grid bare :columns="columns.relProdGrid" :rows="relProds" row-key="_id"
          :draggable="!cfDtlMode" row-actions empty-text="+ \uCD94\uAC00 \uBC84\uD2BC\uC73C\uB85C \uC5F0\uAD00\uC0C1\uD488\uC744 \uB4F1\uB85D\uD558\uC138\uC694."
          @reorder="onRelDrop"
          @ref-click="({id}) => navigate('pdProdDtl', { id })">
          <template v-if="!cfDtlMode" #row-actions="{ idx }">
            <button class="btn btn-xs btn-danger" @click="handleBtnAction('rel-remove', idx)">\uC0AD\uC81C</button>
          </template>
        </bo-grid>
      </div>
      <hr style="border:none;border-top:1px solid #f0f0f0;margin:0;" />
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC139\uC1582: \uCF54\uB514\uC0C1\uD488 =========================================== -->
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <div style="font-size:13px;font-weight:700;">
            \uCF54\uB514\uC0C1\uD488
            <span style="font-size:11px;font-weight:400;color:#888;">
              (pd_prod_rel \xB7 prod_rel_type_cd =
              <strong style="color:#722ed1;">CODY_PROD</strong>
              )
            </span>
            <span class="badge badge-purple" style="margin-left:6px;">{{ codeProds.length }}\uAC74</span>
          </div>
          <button v-if="!cfDtlMode" class="btn btn-sm btn-secondary" @click="handleBtnAction('prodPicker-open', 'code')">+ \uCD94\uAC00</button>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ============================================= -->
        <bo-grid bare :columns="columns.codeProdGrid" :rows="codeProds" row-key="_id"
          :draggable="!cfDtlMode" row-actions empty-text="+ \uCD94\uAC00 \uBC84\uD2BC\uC73C\uB85C \uCF54\uB514\uC0C1\uD488\uC744 \uB4F1\uB85D\uD558\uC138\uC694."
          @reorder="onCodeDrop"
          @ref-click="({id}) => navigate('pdProdDtl', { id })">
          <template v-if="!cfDtlMode" #row-actions="{ idx }">
            <td style="text-align:center;;white-space:nowrap;">
              <button class="btn btn-xs btn-danger" @click="handleBtnAction('codeProd-remove', idx)">\uC0AD\uC81C</button>
            </td>
          </template>
        </bo-grid>
      </div>
      </fieldset>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('related-form-edit')"
        :save-click="() => handleBtnAction('related-form-save')"
        :delete-click="() => handleBtnAction('related-form-delete')"
        :cancel-click="() => handleBtnAction('related-form-cancel')"
        :close-click="() => handleBtnAction('related-form-close')" />
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uD488 \uCD94\uAC00 \uD53C\uCEE4 \uBAA8\uB2EC (\uC88C:\uCE74\uD14C\uACE0\uB9AC\uD2B8\uB9AC / \uC6B0:\uC0C1\uD488\uBAA9\uB85D) ===================== -->
      <bo-cm-popup-modal v-if="prodPickerOpen" popup-cmd="cmPopup-prod-cate-pick" popup-code="prodByCategory" :title="prodPickerOpen==='rel' ? '\uC5F0\uAD00\uC0C1\uD488 \uCD94\uAC00' : '\uCF54\uB514\uC0C1\uD488 \uCD94\uAC00'" :init-selected-ids="(prodPickerOpen==='rel' ? relProds : codeProds).map(r => r.prodId)" :on-callback="fnProdPickerCallback" />
    </div>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     \u{1F4B0} \uC635\uC158(\uAC00\uACA9/\uC7AC\uACE0)  (SKU\uBCC4 \uAC00\uACA9\xB7\uC7AC\uACE0)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="dtl-pane" v-show="showTab('price')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4B0} \uC635\uC158(\uAC00\uACA9/\uC7AC\uACE0)</div>
      <!-- \uBCF4\uAE30\uBAA8\uB4DC: fieldset disabled \uB85C SKU \uC7AC\uC0DD\uC131\xB7\uC778\uB77C\uC778 \uC785\uB825\xB7\uD398\uC774\uC800 \uC790\uB3D9 \uBE44\uD65C\uC131 (\uD3B8\uC9D1 \uC7A0\uAE08) -->
      <fieldset :disabled="cfDtlMode" style="border:none;padding:0;margin:0;min-width:0;">
      <!-- ===== \u25A0.\u25A0.\u25A0. SKU\uBCC4 \uAC00\uACA9\xB7\uC7AC\uACE0 (\uC635\uC158 \uCE74\uD14C\uACE0\uB9AC \uC124\uC815 \uC2DC) ========================= -->
      <template v-if="prodOptCategoryTypeCd">
        <hr style="border:none;border-top:1px solid #f0f0f0;margin:24px 0 20px;" />
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD5E4\uB354 \uD589 ============================================== -->
        <div style="display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
          <div style="font-size:13px;font-weight:700;flex-shrink:0;">
            SKU\uBCC4 \uAC00\uACA9\xB7\uC7AC\uACE0
            <span style="color:#888;font-weight:400;font-size:11px;">(pd_prod_sku)</span>
            <span class="badge badge-blue" style="margin-left:6px;">{{ safeFilter(cfSkusFiltered, s=>s.useYn==='Y').length }}\uAC1C \uD65C\uC131</span>
            <span v-if="cfSkusFiltered.length < skus.length" class="badge badge-orange" style="margin-left:4px;font-size:10px;">
              \uD544\uD130 {{ cfSkusFiltered.length }}/{{ skus.length }}
            </span>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD544\uD130 \uC601\uC5ED =========================================== -->
          <div style="display:flex;align-items:center;gap:6px;flex:1;justify-content:flex-end;flex-wrap:wrap;">
            <div style="display:flex;align-items:center;gap:4px;">
              <span class="badge badge-gray" style="font-size:11px;flex-shrink:0;">{{ optGroups[0]?.grpNm||'1\uB2E8' }}</span>
              <select v-model="skuFilter1" style="font-size:11px;border:1px solid #ddd;border-radius:4px;padding:3px 6px;min-width:80px;"
                @change="skuFilter2=''">
                <option value="">\uC804\uCCB4</option>
                <option v-for="v in cfSkuFilter1Options" :key="Math.random()" :value="v">{{ v }}</option>
              </select>
            </div>
            <div v-if="optGroups.length>1" style="display:flex;align-items:center;gap:4px;">
              <span class="badge badge-blue" style="font-size:11px;flex-shrink:0;">{{ optGroups[1]?.grpNm||'2\uB2E8' }}</span>
              <select v-model="skuFilter2" style="font-size:11px;border:1px solid #ddd;border-radius:4px;padding:3px 6px;min-width:80px;">
                <option value="">\uC804\uCCB4</option>
                <option v-for="v in cfSkuFilter2Options" :key="Math.random()" :value="v">{{ v }}</option>
              </select>
            </div>
            <div style="display:flex;align-items:center;gap:4px;">
              <span style="font-size:11px;color:#555;flex-shrink:0;">\uC7AC\uACE0</span>
              <select v-model="skuFilterStock" style="font-size:11px;border:1px solid #ddd;border-radius:4px;padding:3px 6px;min-width:80px;">
                <option value="">\uC804\uCCB4</option>
                <option v-for="o in grpCodes.STOCK_FILTER" :key="o.value" :value="o.value">{{ o.label }}</option>
              </select>
            </div>
            <button v-if="skuFilter1||skuFilter2||skuFilterStock" class="btn btn-xs btn-secondary"
              @click="handleBtnAction('sku-filterReset')">
              \u2715 \uCD08\uAE30\uD654
            </button>
            <span style="font-size:12px;color:#555;margin-left:4px;">\uCD1D \uC7AC\uACE0: <strong> {{ cfTotalStock }} </strong> \uAC1C</span>
            <button v-if="!cfDtlMode" class="btn btn-sm btn-secondary" @click="handleBtnAction('sku-generate')">\u{1F504} SKU \uC7AC\uC0DD\uC131</button>
            <!-- \uBDF0 \uC804\uD658 \u2014 2\uB2E8 \uC635\uC158\uC77C \uB54C\uB9CC. 1\uCC28\uC6D0 \uC635\uC158\uC740 \uD589\uC774 \uD558\uB098\uB77C \uACA9\uC790\uB85C \uC5BB\uC744 \uAC8C \uC5C6\uB2E4 -->
            <div v-if="optGroups.length===2" style="display:flex;border:1px solid #d0d0d0;border-radius:6px;overflow:hidden;">
              <button class="btn btn-xs" :class="uiState.skuView==='list' ? 'btn-blue' : 'btn-secondary'"
                style="font-size:11px;border:none;border-radius:0;" @click="uiState.skuView='list'"
                title="SKU \uD55C \uAC74\uC758 \uBAA8\uB4E0 \uAC12\uC744 \uD3B8\uC9D1 \u2014 SKU\uCF54\uB4DC\xB7\uC7AC\uACE0\uCF54\uB4DC \uD3EC\uD568">\u{1F4CB} \uBAA9\uB85D</button>
              <button class="btn btn-xs" :class="uiState.skuView==='matrix' ? 'btn-blue' : 'btn-secondary'"
                style="font-size:11px;border:none;border-radius:0;" @click="uiState.skuView='matrix'"
                title="\uD55C \uAC12\uC744 \uBAA8\uB4E0 \uC870\uD569\uC5D0 \uAC78\uCCD0 \uD3B8\uC9D1 \u2014 \uD328\uD134\xB7\uB204\uB77D\uC774 \uD55C\uB208\uC5D0">\u25A6 \uB9E4\uD2B8\uB9AD\uC2A4</button>
            </div>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB9E4\uD2B8\uB9AD\uC2A4 \uBDF0 (\uD55C \uD544\uB4DC \xD7 \uC804\uCCB4 \uC870\uD569) ========================
         \uBAA9\uB85D\uACFC \uAC19\uC740 skus \uBC30\uC5F4\uC744 \uC9C1\uC811 \uD3B8\uC9D1\uD55C\uB2E4. \uD589/\uC5F4 \uD5E4\uB354 \uD074\uB9AD = \uADF8 \uC904\uC5D0 \uC77C\uAD04\uAC12 \uCC44\uC6B0\uAE30. -->
        <div v-if="optGroups.length===2 ? uiState.skuView==='matrix' : false"
          style="border:1px solid #bae0ff;border-radius:8px;padding:12px;background:#f0f8ff;margin-bottom:8px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
            <span style="font-size:12px;font-weight:700;color:#0958d9;">\u25A6 {{ fnMxField().label }} \uB9E4\uD2B8\uB9AD\uC2A4</span>
            <select v-model="uiState.skuMxField" style="font-size:11px;border:1px solid #91caff;border-radius:4px;padding:3px 6px;">
              <option v-for="f in SKU_MX_FIELDS" :key="f.key" :value="f.key">{{ f.label }}</option>
            </select>
            <span style="color:#c0d8f0;">\u2502</span>
            <!-- SKU\uCF54\uB4DC/\uC7AC\uACE0\uCF54\uB4DC\uB294 SKU\uB9C8\uB2E4 \uB2EC\uB77C\uC57C \uD558\uB294 \uC2DD\uBCC4\uC790\uB77C \uC77C\uAD04 \uCC44\uC6B0\uAE30 UI \uC790\uCCB4\uB97C \uC228\uAE34\uB2E4
                 (fnMxBulkGuard \uAC00 \uB85C\uC9C1\uC0C1\uC73C\uB85C\uB3C4 \uB9C9\uC9C0\uB9CC, \uC560\uCD08\uC5D0 \uC548 \uB418\uB294 \uC870\uC791\uC744 \uBCF4\uC5EC\uC8FC\uC9C0 \uC54A\uB294 \uAC8C \uB0AB\uB2E4). -->
            <template v-if="!fnMxField().unique">
              <span style="font-size:11px;color:#555;flex-shrink:0;">\uC77C\uAD04\uAC12</span>
              <input v-if="fnMxField().type==='number'" type="number" v-model="uiState.skuMxBulk" placeholder="0"
                style="width:90px;font-size:11px;border:1px solid #91caff;border-radius:4px;padding:3px 6px;text-align:right;" />
              <select v-else v-model="uiState.skuMxBulk" style="font-size:11px;border:1px solid #91caff;border-radius:4px;padding:3px 6px;">
                <option value="">-- \uC120\uD0DD --</option>
                <option v-for="c in grpCodes.OPT_STOCK_STATUS" :key="'mxb-'+c.codeValue" :value="c.codeValue">{{ c.codeLabel }}</option>
              </select>
              <button v-if="!cfDtlMode" class="btn btn-xs btn-secondary" style="font-size:11px;" @click="onMxFillAll()">\uC804\uCCB4 \uC801\uC6A9</button>
            </template>
            <span v-else style="font-size:11px;color:#c2410c;">SKU\uB9C8\uB2E4 \uACE0\uC720\uD574\uC57C \uD558\uB294 \uAC12\uC774\uB77C \uC140\uC744 \uD558\uB098\uC529 \uC785\uB825\uD569\uB2C8\uB2E4(\uC77C\uAD04 \uCC44\uC6B0\uAE30 \uBD88\uAC00)</span>
            <span style="font-size:11px;color:#888;margin-left:auto;">
              {{ fnMxField().unique ? '' : '\uD589/\uC5F4 \uD5E4\uB354 \uD074\uB9AD = \uADF8 \uC904\uC5D0 \uC77C\uAD04\uAC12 \uCC44\uC6B0\uAE30 \xB7 ' }}\uBE44\uD65C\uC131 \uC870\uD569\uC740 \uC81C\uC678
            </span>
          </div>
          <bo-matrix
            :rows="fnMxItems(1)" :cols="fnMxItems(2)"
            row-key="_id" col-key="_id" row-label="nm" col-label="nm"
            row-style-key="prodOptStyle" col-style-key="prodOptStyle"
            :corner="((optGroups[0]?.grpNm)||'1\uB2E8') + ' / ' + ((optGroups[1]?.grpNm)||'2\uB2E8')"
            :cell-type="fnMxField().type" :options="grpCodes.OPT_STOCK_STATUS"
            :cell="fnMxCell" :cell-style="fnMxStyle" :cell-title="fnMxTitle"
            :readonly="cfDtlMode" max-height="420px" cell-width="70px"
            @cell-change="onMxCellChange" @row-header="onMxFillRow" @col-header="onMxFillCol" />
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. SKU \uD14C\uC774\uBE14 (\uAC00\uACA9 \uC139\uC158 + \uC7AC\uACE0 \uC139\uC158 \uCEEC\uB7FC \uBD84\uB9AC) ===============
         \uB9E4\uD2B8\uB9AD\uC2A4 \uBDF0\uC77C \uB54C\uB9CC \uC228\uAE34\uB2E4. 2\uB2E8 \uC635\uC158\uC774 \uC544\uB2C8\uBA74 \uBDF0 \uC804\uD658 \uBC84\uD2BC \uC790\uCCB4\uAC00 \uC5C6\uC73C\uBBC0\uB85C \uD56D\uC0C1 \uBAA9\uB85D. -->
        <div v-if="optGroups.length===2 ? uiState.skuView==='list' : true"
          style="overflow:auto;max-height:320px;border:1px solid #e0e0e0;border-radius:6px;margin-bottom:8px;">
          <table style="width:100%;border-collapse:collapse;font-size:12px;min-width:900px;">
            <thead style="position:sticky;top:0;z-index:2;">
              <!-- ===== \uADF8\uB8F9 \uD5E4\uB354 \uD589 ================================================= -->
              <tr>
                <th colspan="4" style="padding:3px 6px;background:#f5f5f5;border-bottom:1px solid #e0e0e0;border-right:2px solid #c7d2fe;"></th>
                <!-- 2026-09-14: \uB450 \uC139\uC158 \uB2E4 \uAC19\uC740 pd_prod_sku \uD14C\uC774\uBE14\uC774\uB77C \uD14C\uC774\uBE14\uBA85 \uD45C\uAE30\uB294
                     \uAD6C\uBD84 \uC758\uBBF8\uAC00 \uC5C6\uC5B4\uC9D0(\uC694\uCCAD\uC0AC\uD56D: "pd_prod_sku \uD14C\uC774\uBE14\uC740 \uC5C6\uC73C\uB2C8" \u2014 \uBCD1\uD569 \uC804
                     \uBCC4\uB3C4 pd_prod_stock \uD14C\uC774\uBE14\uC744 \uAC00\uB9AC\uD0A4\uB358 \uB77C\uBCA8\uC774\uC5C8\uC74C) \u2014 \uC81C\uAC70. -->
                <th colspan="3" style="padding:3px 8px;background:#fffbe6;border-bottom:1px solid #e0e0e0;border-right:2px solid #c7d2fe;text-align:center;font-size:11px;font-weight:700;color:#b45309;">
                  \u{1F4B0} \uAC00\uACA9 \uC124\uC815
                </th>
                <th colspan="2" style="padding:3px 8px;background:#f0fdf4;border-bottom:1px solid #e0e0e0;border-right:2px solid #c7d2fe;text-align:center;font-size:11px;font-weight:700;color:#166534;">
                  \u{1F4E6} \uC7AC\uACE0 \uC124\uC815
                </th>
                <th colspan="2" style="padding:3px 6px;background:#f5f5f5;border-bottom:1px solid #e0e0e0;text-align:center;font-size:11px;font-weight:600;color:#888;"></th>
              </tr>
              <!-- ===== \uCEEC\uB7FC \uD5E4\uB354 \uD589 ================================================= -->
              <tr style="background:#f5f5f5;border-bottom:2px solid #d0d0d0;">
                <th style="width:24px;padding:3px 4px;text-align:center;color:#888;font-size:11px;">#</th>
                <th style="width:38px;padding:3px 4px;text-align:center;color:#555;font-size:11px;">\uC774\uB3D9</th>
                <th style="width:80px;padding:3px 6px;text-align:left;font-weight:600;color:#555;font-size:11px;">
                  1\uB2E8<span v-if="safeFirst(optGroups)?.grpNm" style="color:#aaa;font-weight:400;"> ({{ safeFirst(optGroups).grpNm }})</span>
                </th>
                <th v-if="optGroups.length>1" style="width:80px;padding:3px 6px;text-align:left;font-weight:600;color:#555;font-size:11px;border-right:2px solid #c7d2fe;">
                  2\uB2E8<span v-if="optGroups[1]?.grpNm" style="color:#aaa;font-weight:400;"> ({{ optGroups[1].grpNm }})</span>
                </th>
                <th v-else style="width:0;border-right:2px solid #c7d2fe;"></th>
                <!-- \uAC00\uACA9 \uC139\uC158 -->
                <th style="width:130px;padding:3px 6px;text-align:left;font-weight:600;color:#b45309;font-size:11px;background:#fffde7;">SKU\uCF54\uB4DC<span style="color:#c7ae7a;font-weight:400;"> (sku_code)</span></th>
                <th style="width:120px;padding:3px 6px;text-align:right;font-weight:600;color:#b45309;font-size:11px;background:#fffde7;" title="\uC0C1\uD488 \uD310\uB9E4\uAC00(salePrice) + \uC774 SKU\uC758 \uCD94\uAC00\uAE08\uC561(add_price) \u2014 \uC800\uC7A5\uB418\uB294 \uCEEC\uB7FC\uC774 \uC544\uB2C8\uB77C \uD654\uBA74 \uACC4\uC0B0\uAC12">\uAE30\uBCF8\uAC00<span style="color:#c7ae7a;font-weight:400;"> (\uACC4\uC0B0\uAC12)</span></th>
                <th style="width:100px;padding:3px 6px;text-align:right;font-weight:600;color:#b45309;font-size:11px;background:#fffde7;border-right:2px solid #c7d2fe;">\uCD94\uAC00\uAE08\uC561<span style="color:#c7ae7a;font-weight:400;"> (add_price)</span></th>
                <!-- \uC7AC\uACE0 \uC139\uC158 -->
                <!-- 2026-09-14: \uC7AC\uACE0\uCF54\uB4DC(stock_code) \uCEEC\uB7FC \uC81C\uAC70 \u2014 pd_prod_stock\uC744 pd_prod_sku\uB85C
                     \uBCD1\uD569\uD558\uBA70 stock_code \uC790\uCCB4\uAC00 \uC5C6\uC5B4\uC9D0(\uC6D0\uB798\uB3C4 \uC11C\uBC84\uAC00 \uD56D\uC0C1 sku_code\uB85C\uB9CC \uB36E\uC5B4\uC368\uC11C
                     \uC2E4\uC9C8\uC801\uC73C\uB85C \uC8FD\uC740 \uD544\uB4DC\uC600\uC74C). -->
                <th style="width:90px;padding:3px 6px;text-align:right;font-weight:600;color:#166534;font-size:11px;background:#f0fdf4;">\uC7AC\uACE0\uC218\uB7C9<span style="color:#8fc9a0;font-weight:400;"> (stock_qty)</span></th>
                <!-- 2026-09-14(\uC694\uCCAD\uC0AC\uD56D: "\uADF8 \uC678 \uD56D\uBAA9\uC740 \uCEEC\uB7FC\uC601\uBB38\uBA85 \uD45C\uC2DC\uD574\uC918") \uD655\uC778 \uC911 \uBC1C\uACAC \u2014
                     \uD310\uB9E4\uC0C1\uD0DC(statusCd)\uB294 pd_prod_sku \uC5D0 \uC2E4\uC81C \uC800\uC7A5 \uCEEC\uB7FC\uC774 \uC5C6\uB2E4(\uD654\uBA74 \uC0C1\uD0DC\uB9CC
                     \uC788\uACE0 \uC800\uC7A5 API \uD398\uC774\uB85C\uB4DC\uC5D0\uB3C4 \uBE60\uC838\uC788\uC74C) \u2014 \uCEEC\uB7FC\uBA85 \uB300\uC2E0 \uBBF8\uC800\uC7A5\uC784\uC744 \uD45C\uC2DC\uD574\uB454\uB2E4. -->
                <th style="width:100px;padding:3px 6px;text-align:left;font-weight:600;color:#166534;font-size:11px;background:#f0fdf4;border-right:2px solid #c7d2fe;" title="\uC544\uC9C1 \uC800\uC7A5\uB418\uB294 \uCEEC\uB7FC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4(\uD654\uBA74\uC5D0\uB9CC \uC788\uB294 \uC0C1\uD0DC\uAC12) \u2014 \uC800\uC7A5 \uC2DC \uBC18\uC601\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4">\uD310\uB9E4\uC0C1\uD0DC<span style="color:#cf1322;font-weight:400;"> (\uBBF8\uC800\uC7A5)</span></th>
                <!-- \uAE30\uD0C0 -->
                <th style="width:58px;padding:3px 6px;text-align:right;color:#555;font-size:11px;">\uD310\uB9E4\uC218\uB7C9<span style="color:#aaa;font-weight:400;"> (sale_count)</span></th>
                <th style="width:36px;padding:3px 4px;text-align:center;color:#555;font-size:11px;">\uC0AC\uC6A9<span style="color:#aaa;font-weight:400;"> (use_yn)</span></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(sku, ii) in cfSkusFiltered" :key="sku?._id"
                :style="(sku.useYn==='N' ? 'opacity:0.45;background:#f5f5f5;' : (sku.statusCd==='SOLD_OUT'||sku.stock===0 ? 'background:#fffbe6;' : sku.statusCd==='SUSPENDED'?'background:#fff1f0;':(ii%2===1?'background:#fafafa;':'')))+'border-bottom:1px solid #f0f0f0;'">
                <td style="padding:2px 4px;text-align:center;color:#bbb;font-size:11px;">{{ ii+1 }}</td>
                <td style="padding:2px 2px;text-align:center;white-space:nowrap;">
                  <button type="button" @click="handleBtnAction('sku-move',{sku,dir:'up'})" :disabled="ii===0"
                    style="border:1px solid #ddd;background:#fff;border-radius:3px;width:18px;height:18px;font-size:10px;padding:0;color:#666;margin-right:1px;" title="\uC704\uB85C">\u25B2</button>
                  <button type="button" @click="handleBtnAction('sku-move',{sku,dir:'down'})" :disabled="ii===cfSkusFiltered.length-1"
                    style="border:1px solid #ddd;background:#fff;border-radius:3px;width:18px;height:18px;font-size:10px;padding:0;color:#666;" title="\uC544\uB798\uB85C">\u25BC</button>
                </td>
                <td style="padding:2px 6px;">
                  <span class="badge badge-gray" style="font-size:11px;">{{ sku._nm1 }}</span>
                  <span v-if="sku._id===cfBaseSkuId" class="badge badge-blue" style="font-size:10px;margin-left:3px;" title="\uCCAB \uBC88\uC9F8 \uC635\uC158\uC870\uD569 \u2014 \uC0C1\uD488\uBAA9\uB85D/\uD648 \uB300\uD45C\uAC00\uB85C \uB178\uCD9C\uB418\uB294 \uAE30\uC900\uC0C1\uD488. \uCD94\uAC00\uAE08\uC561 0\uC6D0 \uACE0\uC815">\uAE30\uC900\uC0C1\uD488</span>
                </td>
                <td v-if="optGroups.length>1" style="padding:2px 6px;border-right:2px solid #e0e8ff;">
                  <span class="badge badge-blue" style="font-size:11px;">{{ sku._nm2 }}</span>
                </td>
                <td v-else style="border-right:2px solid #e0e8ff;"></td>
                <!-- ===== \uAC00\uACA9 \uC139\uC158 (\uB178\uB780 \uBC30\uACBD) ======================================= -->
                <td style="padding:2px 4px;background:#fffff8;">
                  <input v-model="sku.skuCode" placeholder="SKU-XXX"
                    style="width:100%;font-size:11px;border:1px solid #e8d49a;border-radius:4px;padding:2px 5px;height:22px;font-family:monospace;" />
                </td>
                <td style="padding:2px 4px;background:#fffff8;">
                  <div style="width:100%;font-size:12px;background:#faf7ee;color:#555;border:1px solid #e8d49a;border-radius:4px;padding:2px 6px;height:22px;line-height:18px;text-align:right;">
                    {{ ((form.salePrice||0)+(sku.addPrice||0)).toLocaleString() }}\uC6D0
                  </div>
                </td>
                <td style="padding:2px 4px;background:#fffff8;border-right:2px solid #e0e8ff;">
                  <input type="number" v-model.number="sku.addPrice" placeholder="0"
                    :disabled="sku._id===cfBaseSkuId" :title="sku._id===cfBaseSkuId ? '\uAE30\uC900\uC0C1\uD488\uC740 \uCD94\uAC00\uAE08\uC561 0\uC6D0 \uACE0\uC815' : ''"
                    style="width:100%;font-size:12px;border:1px solid #e8d49a;border-radius:4px;padding:2px 5px;height:22px;text-align:right;"
                    :style="sku._id===cfBaseSkuId ? 'background:#f5f5f5;color:#999;cursor:not-allowed;' : ''" />
                </td>
                <!-- ===== \uC7AC\uACE0 \uC139\uC158 (\uB179\uC0C9 \uBC30\uACBD) ======================================= -->
                <td style="padding:2px 4px;background:#f8fff8;">
                  <input type="number" v-model.number="sku.stock" placeholder="0" min="0"
                    :style="'width:100%;font-size:12px;border:1px solid #86efac;border-radius:4px;padding:2px 5px;height:22px;text-align:right;'+((sku.stock||0)===0?'color:#f5222d;font-weight:700;':'')" />
                </td>
                <td style="padding:2px 4px;background:#f8fff8;border-right:2px solid #e0e8ff;">
                  <select v-model="sku.statusCd"
                    :style="'width:100%;font-size:11px;border:1px solid #86efac;border-radius:4px;padding:2px 4px;height:22px;'+(sku.statusCd==='ON_SALE'?'color:#166534;':sku.statusCd==='SOLD_OUT'?'color:#f5a623;':sku.statusCd==='SUSPENDED'?'color:#cf1322;':'color:#555;')">
                    <option v-for="c in grpCodes.OPT_STOCK_STATUS" :key="c.codeValue" :value="c.codeValue">{{ c.codeLabel }}</option>
                  </select>
                </td>
                <!-- ===== \uAE30\uD0C0 ===================================================== -->
                <td style="padding:2px 6px;text-align:right;font-size:11px;color:#888;">{{ (sku.saleCnt||0).toLocaleString() }}</td>
                <td style="padding:2px 4px;text-align:center;">
                  <input type="checkbox" :checked="sku.useYn==='Y'" @change="sku.useYn=$event.target.checked?'Y':'N'" style="width:14px;height:14px;" />
                </td>
              </tr>
              <tr v-if="skus.length===0">
                <td :colspan="optGroups.length>1?12:11" style="text-align:center;color:#bbb;padding:16px;font-size:12px;">
                  \uC635\uC158\uC124\uC815 \uD0ED\uC5D0\uC11C \uC635\uC158 \uAC12 \uC785\uB825 \uD6C4 [\u{1F504} SKU \uC7AC\uC0DD\uC131]\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694.
                </td>
              </tr>
              <tr v-else-if="cfSkusFiltered.length===0">
                <td :colspan="optGroups.length>1?12:11" style="text-align:center;color:#f5a623;padding:12px;font-size:12px;">
                  \uD544\uD130 \uC870\uAC74\uC5D0 \uB9DE\uB294 SKU\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
                  <button class="btn btn-xs btn-secondary" @click="handleBtnAction('sku-filterReset')">\uD544\uD130 \uCD08\uAE30\uD654</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#888;margin-bottom:16px;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================== -->
          <span>
            \uCD1D
            <strong style="color:#333;">{{ cfSkusFiltered.length }}</strong>
            \uAC74
            <span v-if="cfSkusFiltered.length<skus.length">/ \uC804\uCCB4 {{ skus.length }}\uAC74</span>
          </span>
          <span>
            \uD65C\uC131
            <strong style="color:#1677ff;">{{ safeFilter(skus, s=>s.useYn==='Y').length }}</strong>
            \uAC74 \xB7 \uCD1D \uC7AC\uACE0
            <strong style="color:#52c41a;">{{ cfTotalStock }}</strong>
            \uAC1C
          </span>
        </div>
      </template>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC139\uC1584: \uB2E8\uC77C \uC7AC\uACE0 (\uC635\uC158 \uCE74\uD14C\uACE0\uB9AC \uBBF8\uC124\uC815 \uC2DC) ========================== -->
      <template v-if="!prodOptCategoryTypeCd">
        <hr style="border:none;border-top:1px solid #f0f0f0;margin:24px 0 20px;" />
        <div style="font-size:13px;font-weight:700;color:#333;margin-bottom:12px;">
          \uB2E8\uC77C \uC7AC\uACE0
          <span style="font-weight:400;font-size:11px;color:#888;">(\uC635\uC158 \uBBF8\uC0AC\uC6A9 \u2014 pd_prod.prod_stock)</span>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC7AC\uACE0\uC218\uB7C9 (BoFormArea \uC790\uB3D9 \uB80C\uB354) =========================== -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area :columns="columns.singleStockForm" :form="form" :errors="errors"
          :readonly="cfDtlMode" :cols="3" compact plain-readonly :show-actions="false" />
        <template v-if="tabData.skus.length">
          <div style="font-size:12px;font-weight:600;color:#888;margin-bottom:8px;">
            \uC794\uC874 SKU \uB370\uC774\uD130
            <span class="badge badge-orange" style="margin-left:4px;">{{ tabData.skus.length }}\uAC74</span>
            <span style="font-weight:400;font-size:11px;margin-left:6px;">\uC635\uC158 \uBBF8\uC0AC\uC6A9 \uC804\uD658 \uD6C4 \uB0A8\uC544\uC788\uB294 SKU \uC774\uB825 (\uC77D\uAE30 \uC804\uC6A9)</span>
          </div>
          <div style="overflow-x:auto;margin-bottom:16px;">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ========================================= -->
            <bo-grid bare :columns="columns.remainSkuGrid"
              :rows="tabData.skus.slice((tabPage.skus.pageNo-1)*tabPage.skus.pageSize, tabPage.skus.pageNo*tabPage.skus.pageSize)"
              row-key="prodSkuId" :row-style="fnRemainSkuRowStyle" empty-text="\uC794\uC874 SKU \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."></bo-grid>
          </div>
          <div v-if="tabData.skus.length > tabPage.skus.pageSize" class="pagination" style="margin:8px 0 16px;">
            <button class="pager" @click="handleBtnAction('tabPage-change', {key:'skus', pageNo:1})" :disabled="tabPage.skus.pageNo===1">\xAB</button>
            <button class="pager" @click="handleBtnAction('tabPage-change', {key:'skus', pageNo:tabPage.skus.pageNo-1})" :disabled="tabPage.skus.pageNo===1">\u2039</button>
            <button v-for="n in fnTabPageNos('skus')" :key="n" class="pager" :class="{active:tabPage.skus.pageNo===n}" @click="handleBtnAction('tabPage-change', {key:'skus', pageNo:n})">
              {{ n }}
            </button>
            <button class="pager" @click="handleBtnAction('tabPage-change', {key:'skus', pageNo:tabPage.skus.pageNo+1})" :disabled="tabPage.skus.pageNo===cfTabTotalPages('skus')">
              \u203A
            </button>
            <button class="pager" @click="handleBtnAction('tabPage-change', {key:'skus', pageNo:cfTabTotalPages('skus')})" :disabled="tabPage.skus.pageNo===cfTabTotalPages('skus')">
              \xBB
            </button>
            <span class="pager-right">{{ tabData.skus.length }}\uAC74 / {{ tabPage.skus.pageSize }}\uAC1C\uC529</span>
          </div>
        </template>
      </template>
      </fieldset>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC800\uC7A5/\uCDE8\uC18C \uBC84\uD2BC (\uB9E8 \uC544\uB798) ===================================== -->
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('price-form-edit')"
        :save-click="() => handleBtnAction('price-form-save')"
        :delete-click="() => handleBtnAction('price-form-delete')"
        :cancel-click="() => handleBtnAction('price-form-cancel')"
        :close-click="() => handleBtnAction('price-form-close')" />
    </div>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     \u{1F4E6} \uBB36\uC74C\uAD6C\uC131  (pd_prod_bundle_item)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="dtl-pane" v-show="showTab('bundle')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4E6} \uBB36\uC74C\uAD6C\uC131</div>
      <fieldset :disabled="cfDtlMode" style="border:none;padding:0;margin:0;min-width:0;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC548\uB0B4 + \uC548\uBD84\uC728 \uC694\uC57D =========================================== -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding:10px 14px;background:#f9f9f9;border-radius:8px;border:1px solid #eee;flex-wrap:wrap;gap:8px;">
        <div style="font-size:13px;color:#555;">
          \uBB36\uC74C\uC0C1\uD488\uC744 \uAD6C\uC131\uD558\uB294 \uAC1C\uBCC4 \uC0C1\uD488\uC744 \uCD94\uAC00\uD558\uACE0 <strong>\uC548\uBD84\uC728(%)</strong>\uC744 \uC124\uC815\uD558\uC138\uC694.
          <br><span style="font-size:11px;color:#888;">\uC548\uBD84\uC728 \uD569\uACC4\uAC00 100%\uC5EC\uC57C \uC800\uC7A5\uB429\uB2C8\uB2E4.</span>
        </div>
        <div style="font-size:14px;font-weight:700;" :style="cfBundleRateOk ? 'color:#389e0d;' : 'color:#f5222d;'">
          \uC548\uBD84\uC728 \uD569\uACC4: {{ cfBundleRateSum }}%
          <span v-if="!cfBundleRateOk" style="font-size:11px;font-weight:400;margin-left:4px;">(100% \uAC00 \uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4)</span>
        </div>
        <div v-if="!cfDtlMode" style="display:flex;gap:6px;flex-shrink:0;">
          <button class="btn btn-sm btn-secondary" @click="handleBtnAction('bundlePicker-open')">+ \uC0C1\uD488 \uCD94\uAC00</button>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAD6C\uC131 \uBAA9\uB85D ================================================ -->
      <bo-grid bare :columns="columns.bundleGrid" :rows="tabData.bundleItems" row-key="_id"
        empty-text="+ \uC0C1\uD488 \uCD94\uAC00 \uBC84\uD2BC\uC73C\uB85C \uBB36\uC74C \uAD6C\uC131\uD488\uC744 \uB4F1\uB85D\uD558\uC138\uC694."
        @cell-change="e => { e.row[e.col.key] = e.value; }">
        <template v-if="!cfDtlMode" #row-actions="{ row, idx, pinStyle }">
          <td :style="'text-align:center;white-space:nowrap;' + pinStyle">
            <button class="btn btn-xs btn-danger" @click="handleBtnAction('bundleItem-remove', idx)">\uC0AD\uC81C</button>
          </td>
        </template>
      </bo-grid>
      </fieldset>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
        :save-disabled="cfSaveDisabled || !cfBundleRateOk"
        :save-title="!cfBundleRateOk ? '\uC548\uBD84\uC728 \uD569\uACC4\uAC00 100%\uC5EC\uC57C \uD569\uB2C8\uB2E4.' : (cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : '')"
        :edit-click="() => handleBtnAction('bundle-form-edit')"
        :save-click="() => handleBtnAction('bundle-form-save')"
        :delete-click="() => handleBtnAction('bundle-form-delete')"
        :cancel-click="() => handleBtnAction('bundle-form-cancel')"
        :close-click="() => handleBtnAction('bundle-form-close')" />
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uD488 \uD53C\uCEE4 \uBAA8\uB2EC ============================================= -->
      <bo-cm-popup-modal v-if="bundlePickerOpen" popup-cmd="cmPopup-bundle-pick" popup-code="prod"
        title="\uBB36\uC74C \uC0C1\uD488 \uC120\uD0DD" :init-selected-ids="tabData.bundleItems.map(r => r.prodId)"
        :on-callback="fnCallbackModal" @close="bundlePickerOpen = false" />
    </div>
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     \u{1F381} \uC138\uD2B8\uAD6C\uC131  (pd_prod_set_item)
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="dtl-pane" v-show="showTab('setitems')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F381} \uC138\uD2B8\uAD6C\uC131</div>
      <fieldset :disabled="cfDtlMode" style="border:none;padding:0;margin:0;min-width:0;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC548\uB0B4 + \uBC84\uD2BC ================================================ -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding:10px 14px;background:#f9f9f9;border-radius:8px;border:1px solid #eee;flex-wrap:wrap;gap:8px;">
        <div style="font-size:13px;color:#555;">
          \uC138\uD2B8\uB97C \uAD6C\uC131\uD558\uB294 \uC0C1\uD488 \uB610\uB294 \uBE44\uC0C1\uD488 \uAD6C\uC131\uD488(\uBC15\uC2A4, \uC5FD\uC11C \uB4F1)\uC744 \uCD94\uAC00\uD558\uC138\uC694.
          <br><span style="font-size:11px;color:#888;">\uBE44\uC0C1\uD488 \uAD6C\uC131\uD488\uC740 [\uBE48 \uD589 \uCD94\uAC00] \uD6C4 \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694.</span>
        </div>
        <div v-if="!cfDtlMode" style="display:flex;gap:6px;flex-shrink:0;">
          <button class="btn btn-sm btn-secondary" @click="handleBtnAction('setItem-addEmpty')">+ \uBE48 \uD589 \uCD94\uAC00</button>
          <button class="btn btn-sm btn-secondary" @click="handleBtnAction('setPicker-open')">+ \uC0C1\uD488 \uCD94\uAC00</button>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAD6C\uC131 \uBAA9\uB85D ================================================ -->
      <bo-grid bare :columns="columns.setGrid" :rows="tabData.setItems" row-key="_id"
        empty-text="+ \uC0C1\uD488 \uCD94\uAC00 \uB610\uB294 \uBE48 \uD589 \uCD94\uAC00\uB85C \uC138\uD2B8 \uAD6C\uC131\uD488\uC744 \uB4F1\uB85D\uD558\uC138\uC694."
        @cell-change="e => { e.row[e.col.key] = e.value; }">
        <template v-if="!cfDtlMode" #row-actions="{ row, idx }">
          <td style="text-align:center;white-space:nowrap;">
            <button class="btn btn-xs btn-danger" @click="handleBtnAction('setItem-remove', idx)">\uC0AD\uC81C</button>
          </td>
        </template>
      </bo-grid>
      </fieldset>
      <bo-form-actions v-if="active" :readonly="cfDtlMode" :show-delete="false"
        :save-disabled="cfSaveDisabled" :save-title="cfSaveDisabled ? '\uBA3C\uC800 \uAE30\uBCF8\uC815\uBCF4 \uD0ED\uC5D0\uC11C \uC0C1\uD488\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694.' : ''"
        :edit-click="() => handleBtnAction('setitems-form-edit')"
        :save-click="() => handleBtnAction('setitems-form-save')"
        :delete-click="() => handleBtnAction('setitems-form-delete')"
        :cancel-click="() => handleBtnAction('setitems-form-cancel')"
        :close-click="() => handleBtnAction('setitems-form-close')" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uD488 \uD53C\uCEE4 \uBAA8\uB2EC ============================================= -->
      <bo-cm-popup-modal v-if="setPickerOpen" popup-cmd="cmPopup-set-pick" popup-code="prod"
        title="\uC138\uD2B8 \uAD6C\uC131 \uC0C1\uD488 \uC120\uD0DD" :init-selected-ids="tabData.setItems.map(r => r.prodId)"
        :on-callback="fnCallbackModal" @close="setPickerOpen = false" />
    </div>
  </div>
  <!-- ===== /dtl-tab-grid ============================================== -->
  <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <!-- 2026-09-14: \uC7AC\uACE0\uCF54\uB4DC \uC120\uD0DD \uBAA8\uB2EC \uC81C\uAC70 \u2014 pd_prod_stock\u2192pd_prod_sku \uBCD1\uD569\uC73C\uB85C stock_code
       \uC790\uCCB4\uAC00 \uC5C6\uC5B4\uC9D0(\uC694\uCCAD\uC0AC\uD56D: "pd_prod_sku pd_prod_stock \uB294 \uD544\uC694\uC5C6\uC9C0 \uC54A\uC5B4?"). -->
</bo-container>
</div>
<!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<!-- \uC774\uB825\uC815\uBCF4\uB294 \uBAA9\uB85D(PdProdMng) \uAD00\uB9AC\uCEEC\uB7FC\uC758 [\uC774\uB825] \uBC84\uD2BC\uC73C\uB85C\uB9CC \uB178\uCD9C\uB41C\uB2E4 \u2014 \uC0C1\uC138 \uD558\uB2E8 \uC0C1\uC2DC \uB80C\uB354 \uD3D0\uC9C0(2026-08-16) -->
<!-- ===== \u25A0. \uACF5\uD1B5\uCF54\uB4DC \uADF8\uB8F9 \uBBF8\uB9AC\uBCF4\uAE30 \uBAA8\uB2EC (BoModals.js / window.BoCodeGrpModal) ===== -->
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<bo-cm-popup-modal popup-cmd="cmPopup-code-grp" popup-code="code" :init-param="{ codeGrp: codeGrpModal.codeGrp }" :show="codeGrpModal.show" :title="codeGrpModal.title" :on-callback="fnCallbackModal" />
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
`};
