window.DpDispWidgetLibDtl={name:"DpDispWidgetLibDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},emits:["close"],setup(c,{emit:Ve}){const{reactive:h,computed:i,ref:M,onMounted:te,watch:A,nextTick:Ye}=Vue,p=window.boApp.showToast,S=window.boApp.showConfirm,C=h({isPathPickModal:!1}),v=h({disp_widget_types:[],active_statuses:[],click_action_opts:[{value:"none",label:"\uC5C6\uC74C"},{value:"navigate",label:"\uD398\uC774\uC9C0 \uC774\uB3D9"},{value:"event",label:"\uC774\uBCA4\uD2B8 \uC2E4\uD589"},{value:"modal",label:"\uBAA8\uB2EC \uC5F4\uAE30"}]}),s=h({loading:!1,error:null,previewMode:"default",previewPaneWidth:460,libPickOpen:!1,showComponentTooltip:!1,jsonCopied:!1}),E=Vue.toRef(s,"previewMode"),oe=(e,o={})=>{if(e==="form-save")return Ee();if(e==="form-delete")return Ue();if(e==="form-close")return c.navigate("__closeDtl__");if(e==="form-cancel")return c.navigate("__cancelEdit__");if(e==="form-edit")return c.navigate("__switchToEdit__");if(e==="libPickModal-open")return We();if(e==="libPickModal-close"){s.libPickOpen=!1;return}else{if(e==="pathModal-open")return U(o);if(e==="pathModal-close")return W();if(e==="usedPaths-add")return(t.usedPathIds=t.usedPathIds||[]).push(null),U(t.usedPathIds.length-1);if(e==="usedPaths-remove"){t.usedPathIds.splice(o,1);return}else{if(e==="fileList-add")return Ce();if(e==="fileList-remove")return Le(o);if(e==="jsonView-copy")return _e();console.warn("[handleBtnAction] unknown cmd:",e)}}},ie=(e,o={})=>{if(e==="preview-mode"){s.previewMode=o;return}else{if(e==="preview-split")return Pe(o);if(e==="libPickModal-select")return Q(o);if(e==="pathModal-pick")return z(o);console.warn("[handleSelectAction] unknown cmd:",e)}},le=(e,o,l)=>{if(e==="cmPopup-widget-lib-pick"){if(l==null){s.libPickOpen=!1;return}return Q(l)}else{if(e==="cmPopup-path-pick")return l==null?W():z(l);console.warn("[fnCallbackModal] unknown popCmd:",e)}},ne=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["WIDGET_TYPE_CD"],{compNm:"DpDispWidgetLibDtl"}),v.disp_widget_types=e.sgGetGrpCodes("WIDGET_TYPE_CD"),v.active_statuses=[{codeValue:"\uD65C\uC131",codeLabel:"\uD65C\uC131"},{codeValue:"\uBE44\uD65C\uC131",codeLabel:"\uBE44\uD65C\uC131"}]},U=e=>{pathPickModal.target=e,C.isPathPickModal=!0},W=()=>{C.isPathPickModal=!1},z=e=>{const o=pathPickModal.target;typeof o=="number"?(t.usedPathIds||(t.usedPathIds=[]),t.usedPathIds[o]=e):t.pathId=e},ae=e=>boUtil.bofGetPathLabel(e)||(e==null?"":"#"+e),g=i(()=>!c.dtlId),re=e=>{var o;return((o=v.disp_widget_types.find(l=>l.codeValue===e))==null?void 0:o.codeLabel)||e||"-"},L=()=>({libId:null,libCode:"",name:"",widgetType:"",desc:"",tags:"",status:"",titleYn:"",title:"",pathId:null,regDate:"",clickAction:"",clickTarget:"",imageUrl:"",altText:"",linkUrl:"",productIds:"",chartTitle:"",chartLabels:"",chartValues:"",textContent:"",bgColor:"",textColor:"",infoTitle:"",infoBody:"",popupWidth:"",popupHeight:"",fileUrl:"",fileLabel:"",fileListJson:"[]",couponCode:"",couponDesc:"",htmlContent:"",textareaContent:"",markdownContent:"",codeValue:"",codeFormat:"",codeWidth:"",codeHeight:"",showCodeLabel:"",qrSize:"",qrErrorLevel:"",videoUrl:"",videoType:"",videoAutoplay:!1,videoControls:"",countdownTarget:"",countdownTitle:"",countdownExpiredMsg:"",countdownBgColor:"",countdownTextColor:"",payAmount:"",payCurrency:"",payMethods:"",payButtonLabel:"",payButtonColor:"",approvalDocType:"",approvalTitle:"",approvalLine:"",mapType:"",mapAddress:"",mapLat:"",mapLng:"",mapZoom:"",mapMarkerLabel:"",eventId:"",cacheDesc:"",cacheAmount:"",embedCode:"",condSite:"",condUser:"",condCategory:"",condBrand:"",condSort:"",condLimit:""}),t=h(L()),m=h({}),B=()=>{Object.assign(t,{widgetType:"image_banner",status:"\uD65C\uC131",titleYn:"N",regDate:coUtil.cofToYmd(new Date),clickAction:"none",bgColor:"#ffffff",textColor:"#222222",popupWidth:600,popupHeight:400,codeFormat:"CODE128",codeWidth:2,codeHeight:60,showCodeLabel:!0,qrSize:120,qrErrorLevel:"M",videoType:"youtube",videoControls:!0,countdownTitle:"\uC774\uBCA4\uD2B8 \uC885\uB8CC\uAE4C\uC9C0",countdownExpiredMsg:"\uC774\uBCA4\uD2B8\uAC00 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",countdownBgColor:"#1a237e",countdownTextColor:"#ffffff",payAmount:0,payCurrency:"KRW",payMethods:"card,kakao,naver,toss",payButtonLabel:"\uACB0\uC81C\uD558\uAE30",payButtonColor:"#1677ff",approvalDocType:"\uAD6C\uB9E4\uC2B9\uC778",approvalLine:'[{"role":"\uB2F4\uB2F9\uC790","name":""},{"role":"\uD300\uC7A5","name":""},{"role":"\uBD80\uC11C\uC7A5","name":""}]',mapType:"google",mapZoom:14,cacheAmount:0,condSort:"newest",condLimit:8})},O=async()=>{var e,o,l,d,r,u;if(!g.value){s.loading=!0;try{const b=(e=(await boApiSvc.dpWidgetLib.getById(c.dtlId,"\uC804\uC2DC\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:e.data;if(b){Object.assign(t,L(),b),t.libId=(o=b.widgetLibId)!=null?o:t.libId,t.libCode=(l=b.widgetCode)!=null?l:t.libCode,t.name=(d=b.widgetNm)!=null?d:t.name,t.widgetType=(r=b.widgetTypeCd)!=null?r:t.widgetType,t.desc=(u=b.widgetLibDesc)!=null?u:t.desc,t.status=b.useYn==="Y"?"\uD65C\uC131":b.useYn==="N"?"\uBE44\uD65C\uC131":t.status;let f=null;try{const n=JSON.parse(b.widgetConfigJson||"{}");f=n.properties?Object.fromEntries(Object.entries(n.properties).map(([a,y])=>[a,y==null?void 0:y.default])):n}catch{f={}}if(f){const n=(y,w)=>f[y]!=null?f[y]:w!=null?f[w]:void 0,a=(y,w)=>{w!==void 0&&(t[y]=w)};a("imageUrl",n("img_url","imageUrl")),a("linkUrl",n("link_url","linkUrl")),a("altText",n("alt")),a("textContent",n("text")),a("bgColor",n("bg_color","bgColor")),a("textColor",n("text_color","textColor")),a("infoTitle",n("title")),a("infoBody",n("content")),a("couponCode",n("coupon_id")),a("couponDesc",n("btn_label")),a("htmlContent",n("html")),a("textareaContent",n("text")),a("markdownContent",n("markdown")),a("codeValue",n("value")),a("videoUrl",n("video_url","videoUrl")),a("countdownTitle",n("label")),a("countdownTarget",n("target_datetime","targetDatetime")),a("fileUrl",n("file_url")),a("fileLabel",n("btn_label")),a("chartTitle",n("title")),a("chartLabels",Array.isArray(f.labels)?f.labels.join(","):void 0),a("chartValues",Array.isArray(f.values)?f.values.join(","):void 0),a("payAmount",n("amount"))}if(t.widgetType==="html_editor"){const n=b.widgetContent||"",a=f&&typeof f.html=="string"?f.html:"";t.htmlContent=n||a||t.htmlContent||""}}s.error=null}catch(k){console.error("[catch-info]",k),s.error=k.message}finally{s.loading=!1}}},F=()=>{const e=new Date,o=l=>String(l).padStart(2,"0");return`DL_${String(e.getFullYear()).slice(2)}${o(e.getMonth()+1)}${o(e.getDate())}_${o(e.getHours())}${o(e.getMinutes())}${o(e.getSeconds())}`},N=()=>{g.value&&(t.libCode=F())};te(async()=>{await ne(),await O(),N(),c.active&&g.value&&B()}),A(()=>c.reloadTrigger,async(e,o)=>{e===o||e===0||(Object.keys(m).forEach(l=>delete m[l]),Object.assign(t,L()),await O(),N(),c.active&&g.value&&B())});const R=i(()=>t.widgetType==="image_banner"),j=i(()=>["product_slider","product"].includes(t.widgetType)),V=i(()=>t.widgetType==="cond_product"),Y=i(()=>t.widgetType.startsWith("chart_")),H=i(()=>t.widgetType==="text_banner"),J=i(()=>t.widgetType==="info_card"),se=i(()=>t.widgetType==="popup"),de=i(()=>t.widgetType==="file"),pe=i(()=>t.widgetType==="file_list"),ce=i(()=>t.widgetType==="coupon"),fe=i(()=>t.widgetType==="html_editor"),ue=i(()=>t.widgetType==="textarea"),be=i(()=>t.widgetType==="markdown"),q=i(()=>t.widgetType==="barcode"),$=i(()=>t.widgetType==="qrcode"),T=i(()=>t.widgetType==="barcode_qrcode"),ye=i(()=>q.value||$.value||T.value),ge=i(()=>t.widgetType==="video_player"),me=i(()=>t.widgetType==="countdown"),ve=i(()=>t.widgetType==="payment_widget"),he=i(()=>t.widgetType==="approval_widget"),we=i(()=>t.widgetType==="map_widget"),xe=i(()=>t.widgetType==="event_banner"),ke=i(()=>t.widgetType==="cache_banner"),G=i(()=>t.widgetType==="widget_embed"),x=i(()=>{try{return JSON.parse(t.fileListJson||"[]")}catch{return[]}}),I=e=>{t.fileListJson=JSON.stringify(e)},Ce=()=>I([...x.value,{name:"",url:""}]),Le=e=>I(window.safeArrayUtils.safeFilter(x,(o,l)=>l!==e)),Te=(e,o,l)=>I(x.value.map((d,r)=>r===e?{...d,[o]:l}:d)),Ie=i(()=>{if(R.value)return[{key:"imageUrl",label:"\uC774\uBBF8\uC9C0 URL",type:"input",ph:"https://..."},{key:"altText",label:"Alt \uD14D\uC2A4\uD2B8",type:"input",ph:""},{key:"linkUrl",label:"\uB9C1\uD06C URL",type:"input",ph:"https://..."}];if(j.value)return[{key:"productIds",label:"\uC0C1\uD488 ID \uBAA9\uB85D",type:"input",ph:"1, 2, 3, ..."}];if(Y.value)return[{key:"chartTitle",label:"\uCC28\uD2B8 \uC81C\uBAA9",type:"input",ph:""},{key:"chartLabels",label:"\uB77C\uBCA8 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"1\uC6D4, 2\uC6D4, 3\uC6D4"},{key:"chartValues",label:"\uAC12 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"100, 200, 150"}];if(H.value)return[{key:"textContent",label:"\uD14D\uC2A4\uD2B8 \uB0B4\uC6A9",type:"textarea",ph:""},{key:"bgColor",label:"\uBC30\uACBD\uC0C9",type:"color"},{key:"textColor",label:"\uAE00\uC790\uC0C9",type:"color"}];if(J.value)return[{key:"infoTitle",label:"\uCE74\uB4DC \uC81C\uBAA9",type:"input",ph:""},{key:"infoBody",label:"\uCE74\uB4DC \uB0B4\uC6A9",type:"textarea",ph:""}];if(se.value)return[{key:"popupWidth",label:"\uD31D\uC5C5 \uB108\uBE44 (px)",type:"number",ph:""},{key:"popupHeight",label:"\uD31D\uC5C5 \uB192\uC774 (px)",type:"number",ph:""},{key:"imageUrl",label:"\uD31D\uC5C5 \uC774\uBBF8\uC9C0 URL",type:"input",ph:"https://..."},{key:"linkUrl",label:"\uB9C1\uD06C URL",type:"input",ph:""}];if(de.value)return[{key:"fileUrl",label:"\uD30C\uC77C URL",type:"input",ph:""},{key:"fileLabel",label:"\uD45C\uC2DC \uB808\uC774\uBE14",type:"input",ph:"\uB2E4\uC6B4\uB85C\uB4DC"}];if(ce.value)return[{key:"couponCode",label:"\uCFE0\uD3F0 \uCF54\uB4DC",type:"input",ph:"COUPON_CODE"},{key:"couponDesc",label:"\uCFE0\uD3F0 \uC124\uBA85",type:"input",ph:""}];if(ue.value)return[{key:"textareaContent",label:"\uD14D\uC2A4\uD2B8 \uB0B4\uC6A9",type:"textarea",ph:"\uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694..."}];if(be.value)return[{key:"markdownContent",label:"Markdown \uB0B4\uC6A9",type:"code",ph:`# \uC81C\uBAA9

\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694...`}];if(ye.value){const e=[{key:"codeValue",label:"\uCF54\uB4DC \uAC12",type:"input",ph:"COUPON-2026-001234"}];return(q.value||T.value)&&e.push({key:"codeFormat",label:"\uBC14\uCF54\uB4DC \uD615\uC2DD",type:"select",options:[{v:"CODE128",l:"CODE128 (\uBC94\uC6A9)"},{v:"EAN13",l:"EAN-13"},{v:"EAN8",l:"EAN-8"},{v:"UPC",l:"UPC-A"},{v:"CODE39",l:"CODE39"},{v:"ITF14",l:"ITF-14"}]},{key:"codeHeight",label:"\uBC14\uCF54\uB4DC \uB192\uC774 (px)",type:"number",ph:"60"},{key:"showCodeLabel",label:"\uCF54\uB4DC\uAC12 \uD14D\uC2A4\uD2B8",type:"select",options:[{v:!0,l:"\uD45C\uC2DC"},{v:!1,l:"\uC228\uAE40"}]}),($.value||T.value)&&e.push({key:"qrSize",label:"QR \uD06C\uAE30 (px)",type:"number",ph:"120"},{key:"qrErrorLevel",label:"\uC624\uB958 \uC815\uC815 \uC218\uC900",type:"select",options:[{v:"L",l:"L \u2013 7%"},{v:"M",l:"M \u2013 15%"},{v:"Q",l:"Q \u2013 25%"},{v:"H",l:"H \u2013 30%"}]}),e}return ge.value?[{key:"videoUrl",label:"\uB3D9\uC601\uC0C1 URL",type:"input",ph:"https://youtube.com/watch?v=..."},{key:"videoType",label:"\uB3D9\uC601\uC0C1 \uC720\uD615",type:"select",options:[{v:"youtube",l:"YouTube"},{v:"vimeo",l:"Vimeo"},{v:"direct",l:"\uC9C1\uC811 URL (mp4)"}]},{key:"videoAutoplay",label:"\uC790\uB3D9\uC7AC\uC0DD",type:"select",options:[{v:!1,l:"\uC0AC\uC6A9 \uC548 \uD568"},{v:!0,l:"\uC0AC\uC6A9 (\uC74C\uC18C\uAC70 \uD544\uC694)"}]},{key:"videoControls",label:"\uCEE8\uD2B8\uB864\uBC14",type:"select",options:[{v:!0,l:"\uD45C\uC2DC"},{v:!1,l:"\uC228\uAE40"}]}]:me.value?[{key:"countdownTarget",label:"\uBAA9\uD45C \uC77C\uC2DC",type:"input",ph:"2026-12-31 23:59:59"},{key:"countdownTitle",label:"\uD0C0\uC774\uD2C0",type:"input",ph:"\uC774\uBCA4\uD2B8 \uC885\uB8CC\uAE4C\uC9C0"},{key:"countdownExpiredMsg",label:"\uC885\uB8CC \uBA54\uC2DC\uC9C0",type:"input",ph:"\uC774\uBCA4\uD2B8\uAC00 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."},{key:"countdownBgColor",label:"\uBC30\uACBD\uC0C9",type:"color"},{key:"countdownTextColor",label:"\uAE00\uC790\uC0C9",type:"color"}]:ve.value?[{key:"payAmount",label:"\uACB0\uC81C \uAE08\uC561",type:"number",ph:"0"},{key:"payCurrency",label:"\uD1B5\uD654",type:"select",options:[{v:"KRW",l:"\uC6D0 (KRW)"},{v:"USD",l:"\uB2EC\uB7EC (USD)"}]},{key:"payMethods",label:"\uACB0\uC81C\uC218\uB2E8 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"card,kakao,naver,toss,bank"},{key:"payButtonLabel",label:"\uBC84\uD2BC \uD14D\uC2A4\uD2B8",type:"input",ph:"\uACB0\uC81C\uD558\uAE30"},{key:"payButtonColor",label:"\uBC84\uD2BC \uC0C9\uC0C1",type:"color"}]:he.value?[{key:"approvalDocType",label:"\uBB38\uC11C \uC720\uD615",type:"select",options:[{v:"\uAD6C\uB9E4\uC2B9\uC778",l:"\uAD6C\uB9E4\uC2B9\uC778"},{v:"\uC9C0\uCD9C\uACB0\uC758",l:"\uC9C0\uCD9C\uACB0\uC758"},{v:"\uD734\uAC00\uC2E0\uCCAD",l:"\uD734\uAC00\uC2E0\uCCAD"},{v:"\uAE30\uC548",l:"\uAE30\uC548"},{v:"\uD488\uC758\uC11C",l:"\uD488\uC758\uC11C"}]},{key:"approvalTitle",label:"\uACB0\uC7AC \uC81C\uBAA9",type:"input",ph:""},{key:"approvalLine",label:"\uACB0\uC7AC\uC120 (JSON)",type:"code",ph:'[{"role":"\uB2F4\uB2F9\uC790","name":"\uD64D\uAE38\uB3D9"},{"role":"\uD300\uC7A5","name":""}]'}]:we.value?[{key:"mapType",label:"\uC9C0\uB3C4 \uC720\uD615",type:"select",options:[{v:"google",l:"Google Maps"},{v:"kakao",l:"\uCE74\uCE74\uC624\uB9F5"},{v:"naver",l:"\uB124\uC774\uBC84\uC9C0\uB3C4"}]},{key:"mapAddress",label:"\uC8FC\uC18C",type:"input",ph:"\uC11C\uC6B8\uC2DC \uAC15\uB0A8\uAD6C \uD14C\uD5E4\uB780\uB85C 123"},{key:"mapLat",label:"\uC704\uB3C4 (lat)",type:"input",ph:"37.5005"},{key:"mapLng",label:"\uACBD\uB3C4 (lng)",type:"input",ph:"127.0356"},{key:"mapZoom",label:"\uC90C \uB808\uBCA8",type:"number",ph:"14"},{key:"mapMarkerLabel",label:"\uB9C8\uCEE4 \uB77C\uBCA8",type:"input",ph:"\uC6B0\uB9AC \uB9E4\uC7A5"}]:xe.value?[{key:"eventId",label:"\uC774\uBCA4\uD2B8 ID",type:"input",ph:""}]:ke.value?[{key:"cacheDesc",label:"\uCE90\uC2DC \uC124\uBA85",type:"input",ph:""},{key:"cacheAmount",label:"\uCE90\uC2DC \uAE08\uC561",type:"number",ph:"0"}]:G.value?[{key:"embedCode",label:"\uC784\uBCA0\uB4DC \uCF54\uB4DC",type:"textarea",ph:"<script>...<\/script>"}]:V.value?[{key:"condCategory",label:"\uCE74\uD14C\uACE0\uB9AC \uC870\uAC74",type:"input",ph:""},{key:"condBrand",label:"\uBE0C\uB79C\uB4DC \uC870\uAC74",type:"input",ph:""},{key:"condSort",label:"\uC815\uB82C \uAE30\uC900",type:"select",options:[{v:"newest",l:"\uCD5C\uC2E0\uC21C"},{v:"popular",l:"\uC778\uAE30\uC21C"},{v:"price_asc",l:"\uAC00\uACA9\uB0AE\uC740\uC21C"},{v:"price_desc",l:"\uAC00\uACA9\uB192\uC740\uC21C"}]},{key:"condLimit",label:"\uD45C\uC2DC \uAC1C\uC218",type:"number",ph:"8"}]:[]}),K=i(()=>{const e={...t};return Object.keys(e).forEach(o=>{(e[o]===""||e[o]===null)&&delete e[o]}),JSON.stringify(e,null,2)}),_e=()=>{var e;(e=navigator.clipboard)==null||e.writeText(K.value).then(()=>{s.jsonCopied=!0,setTimeout(()=>{s.jsonCopied=!1},1500)})},_=[{value:"default",label:"\uAE30\uBCF8",width:420},{value:"pc",label:"PC",width:1200},{value:"tablet",label:"\uD0DC\uBE14\uB9BF",width:768},{value:"mobile",label:"\uBAA8\uBC14\uC77C",width:375}],De=i(()=>{const e=window.safeArrayUtils.safeFind(_,o=>o.value===s.previewMode);return((e==null?void 0:e.width)||420)+"px"});A(E,e=>{const o=window.safeArrayUtils.safeFind(_,l=>l.value===e);s.previewPaneWidth=((o==null?void 0:o.width)||420)+40});const Pe=e=>{e.preventDefault();const o=e.clientX,l=s.previewPaneWidth,d=u=>{s.previewPaneWidth=Math.max(260,Math.min(1600,l+(o-u.clientX)))},r=()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",r)};window.addEventListener("mousemove",d),window.addEventListener("mouseup",r)},Me=i(()=>({...t,dispId:t.libId||0,name:t.name||"\uBBF8\uB9AC\uBCF4\uAE30",area:"PREVIEW",status:"\uD65C\uC131",useYn:"Y",dispYn:"Y",condition:"\uD56D\uC0C1 \uD45C\uC2DC",authRequired:!1,authGrade:""})),Ae=window.yup.object({libCode:window.yup.string().required("Lib\uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694."),name:window.yup.string().required("\uB77C\uC774\uBE0C\uB7EC\uB9AC\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694."),widgetType:window.yup.string().required("\uC704\uC82F \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694.")}),Se=()=>{const e={...t};if(e.widgetLibId=t.widgetLibId||t.libId,e.widgetCode=t.widgetCode||t.libCode,e.widgetNm=t.widgetNm||t.name,e.widgetTypeCd=t.widgetTypeCd||t.widgetType,e.widgetLibDesc=t.widgetLibDesc||t.desc,e.useYn=t.status==="\uD65C\uC131"?"Y":t.status==="\uBE44\uD65C\uC131"?"N":t.useYn||"Y",t.widgetType==="html_editor"||t.widgetTypeCd==="html_editor"){e.widgetContent=t.htmlContent||"";try{const o=JSON.parse(t.widgetConfigJson||"{}");o.properties||(o.properties={}),o.properties.html||(o.properties.html={type:"string"}),o.properties.html.default=t.htmlContent||"",e.widgetConfigJson=JSON.stringify(o)}catch{e.widgetConfigJson=JSON.stringify({type:"object",properties:{html:{type:"string",default:t.htmlContent||""}}})}}return e},Ee=async()=>{var l,d;Object.keys(m).forEach(r=>delete m[r]),(!t.libCode||t.libCode.trim()===""||t.libCode==="DL_YYMMDD_HHMMSS")&&(t.libCode=F());try{await Ae.validate(t,{abortEarly:!1})}catch(r){r.inner.forEach(u=>{m[u.path]=u.message}),coUtil.cofValidationToast(m,p);return}const e=g.value;if(await S("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const r=Se(),u=r.widgetLibId,k=await(e?boApiSvc.dpWidgetLib.create(r,"\uC804\uC2DC\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC","\uB4F1\uB85D"):boApiSvc.dpWidgetLib.update(u,r,"\uC804\uC2DC\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC","\uC800\uC7A5"));p&&p("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),c.navigate&&c.navigate("dpDispWidgetLibMng",{reload:!0})}catch(r){console.error("[catch-info]",r);const u=((d=(l=r.response)==null?void 0:l.data)==null?void 0:d.message)||r.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";p&&p(u,"error",0)}},Ue=async()=>{var o,l;if(!(g.value||!await S("\uC0AD\uC81C","\uC774 \uC704\uC82F Lib\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")))try{const d=await boApiSvc.dpWidgetLib.remove(t.libId,"\uC804\uC2DC\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC","\uC0AD\uC81C");p&&p("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),c.navigate("dpDispWidgetLibMng",{reload:!0})}catch(d){console.error("[catch-info]",d);const r=((l=(o=d.response)==null?void 0:o.data)==null?void 0:l.message)||d.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";p&&p(r,"error",0)}},We=()=>{s.libPickOpen=!0},Q=e=>{s.libPickOpen=!1;const o={libId:t.libId,libCode:t.libCode,regDate:t.regDate};Object.assign(t,{...e,...o}),p&&p(`[${e.name}] \uB0B4\uC6A9\uC744 \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.`,"info")},ze=Vue.toRef(s,"previewPaneWidth"),Be=Vue.toRef(s,"libPickOpen"),Oe=Vue.toRef(s,"showComponentTooltip"),Fe=Vue.toRef(s,"jsonCopied"),Z=i(()=>c.dtlMode==="view"),Ne=i(()=>c.active&&!Z.value),D={};D.baseLibForm=[{key:"libCode",label:"Lib\uCF54\uB4DC",type:"text",required:!0,placeholder:"\uBE44\uC6CC\uB450\uBA74 \uC790\uB3D9 \uC0DD\uC131 (\uC608: DL_260508_191415)",mono:!0},{key:"name",label:"\uB77C\uC774\uBE0C\uB7EC\uB9AC\uBA85",type:"text",required:!0,placeholder:"\uC704\uC82F Lib \uC774\uB984"},{key:"status",label:"\uC0C1\uD0DC",type:"select",options:()=>v.active_statuses},{key:"desc",label:"\uC124\uBA85",type:"text",placeholder:"\uC704\uC82F \uC6A9\uB3C4\xB7\uC124\uBA85 \uBA54\uBAA8"},{key:"tags",label:"\uD0DC\uADF8",type:"text",placeholder:"\uBD04,\uBC30\uB108,\uC2DC\uC98C",hint:"\uC27C\uD45C \uAD6C\uBD84"}],D.clickActionForm=[{key:"clickAction",label:"\uD074\uB9AD \uB3D9\uC791",type:"select",options:()=>v.click_action_opts},{key:"clickTarget",label:"\uD074\uB9AD \uB300\uC0C1",type:"text",placeholder:"/products \uB610\uB294 \uC774\uBCA4\uD2B8\uBA85"}];const X=()=>{const e=new URLSearchParams;return e.set("page","dpDispWidgetLibDtl"),e.set("id",t.libId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},Re=()=>{try{window.coExtSdk.shareKakao({title:`\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC ${t.libId} - ShopJoy BO`,description:t.desc||t.name||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:X()})}catch(e){p(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},je=async()=>{try{await navigator.clipboard.writeText(X()),p("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){p(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},ee=M(null),P=M(!1);return{modals:C,columns:D,handleShareKakao:Re,handleCopyLink:je,pdfAreaRef:ee,pdfExporting:P,handleExportPdf:async()=>{P.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC704\uC82F\uB77C\uC774\uBE0C\uB7EC\uB9AC\uC0C1\uC138_${t.libId}.pdf`);await window.boUtil.bofExportPdf(ee.value,e,p)}finally{P.value=!1}},codes:v,form:t,errors:m,handleBtnAction:oe,handleSelectAction:ie,fnCallbackModal:le,cfDtlMode:Z,cfShowActions:Ne,cfIsNew:g,cfDisplayRows:Ie,cfFileListItems:x,cfPreviewWidget:Me,cfSampleJson:K,cfPreviewFrameWidth:De,cfIsImage:R,cfIsProduct:j,cfIsCondProduct:V,cfIsChart:Y,cfIsText:H,cfIsInfo:J,cfIsFileList:pe,cfIsHtmlEditor:fe,cfIsEmbed:G,previewMode:E,libPickOpen:Be,showComponentTooltip:Oe,jsonCopied:Fe,previewPaneWidth:ze,PREVIEW_MODES:_,pathLabel:ae,fnWLabel:re,updateFileItem:Te}},template:`
<div ref="pdfAreaRef">
<bo-container card-style="padding:0;">
  <!-- ===== \u25A0. \uD5E4\uB354 (bo-container title + toolbar-actions) ================= -->
  <template #title>
    <span style="font-size:14px;">{{ !active ? '\uC704\uC82F Lib \uC0C1\uC138' : (cfIsNew ? '\uC704\uC82F Lib \uC2E0\uADDC\uB4F1\uB85D' : (cfDtlMode ? '\uC704\uC82F Lib \uC0C1\uC138' : '\uC704\uC82F Lib \uC218\uC815')) }}</span>
    <span v-if="!cfIsNew" style="font-size:11px;background:#eee;color:#666;border-radius:4px;padding:1px 7px;margin-left:8px;font-weight:400;">
      #{{ String(form.libId).padStart(4,'0') }}
    </span>
  </template>
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
    <div class="form-actions" v-if="cfShowActions" style="margin:0;gap:8px;">
      <button @click="handleBtnAction('libPickModal-open')" class="btn btn-outline" style="font-size:12px;background:#e3f2fd;color:#1565c0;border-color:#90caf9;">
        \u{1F4CB} \uC804\uC2DC\uC704\uC82FLib \uB0B4\uC6A9\uBCF5\uC0AC
      </button>
      <button @click="handleBtnAction('form-save')"   class="btn btn_save" style="font-size:13px;">\uC800\uC7A5</button>
      <!-- 2026-08-30: \uD328\uD134 A \u2014 \uD3B8\uC9D1\uBAA8\uB4DC [\uC0AD\uC81C] \uC81C\uAC70(\uBCF4\uAE30\uBAA8\uB4DC\uC5D0\uB9CC \uC720\uC9C0) -->
      <button v-if="!cfIsNew" @click="handleBtnAction('form-cancel')" class="btn btn_cancel" style="font-size:13px;">\uCDE8\uC18C</button>
      <button @click="handleBtnAction('form-close')" class="btn btn_close" style="font-size:13px;">\uB2EB\uAE30</button>
    </div>
    <div class="form-actions" v-if="active ? (cfDtlMode) : false" style="margin:0;gap:8px;">
      <button @click="handleBtnAction('form-edit')" class="btn btn_edit" style="font-size:13px;">\uC218\uC815</button>
      <button v-if="!cfIsNew" @click="handleBtnAction('form-delete')" class="btn btn_delete" style="font-size:13px;color:#e8587a;border-color:#e8587a;">
        \uC0AD\uC81C
      </button>
      <button @click="handleBtnAction('form-close')" class="btn btn_close" style="font-size:13px;">\uB2EB\uAE30</button>
    </div>
    <bo-cm-popup-modal v-if="libPickOpen" popup-cmd="cmPopup-widget-lib-pick" popup-code="widgetLib" :on-callback="fnCallbackModal" />
  </template>
  <!-- ===== \u25A1. \uD5E4\uB354 ====================================================== -->
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="display:flex;gap:0;">
    <!-- ===== \u25A0.\u25A0. \uC67C\uCABD: \uD3FC ================================================= -->
    <div style="flex:1;padding:20px;min-width:0;overflow-y:auto;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC124\uC815 ================================================== -->
      <div class="bo-form-compact" style="margin-bottom:14px;padding:14px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
        <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;display:flex;align-items:center;gap:6px;">
          <span style="display:inline-block;width:4px;height:16px;background:#1d4ed8;border-radius:2px;"></span>
          \uC124\uC815
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. Lib\uCF54\uB4DC/\uB77C\uC774\uBE0C\uB7EC\uB9AC\uBA85/\uC0C1\uD0DC/\uC124\uBA85/\uD0DC\uADF8 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ========== -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area plain-readonly :columns="columns.baseLibForm" :form="form" :errors="errors"
          :readonly="cfDtlMode" :cols="2" compact :show-actions="false" />
        <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:6px;">
          \uD45C\uC2DC\uACBD\uB85C
          <span style="font-size:10px;font-weight:400;color:#aaa;">\uC774 \uC704\uC82F\uC774 \uB178\uCD9C\uB418\uB294 \uACBD\uB85C (\uC608: FO.\uBAA8\uBC14\uC77C\uBA54\uC778)</span>
        </div>
        <div v-if="cfDtlMode" class="readonly-field-plain">
          {{ (form.usedPathIds || []).length ? (form.usedPathIds || []).map(pid => pathLabel(pid) || '-').join(', ') : '-' }}
        </div>
        <template v-else>
          <div v-for="(_id, pi) in (form.usedPathIds || [])" :key="pi"
            style="display:flex;gap:6px;align-items:center;margin-bottom:6px;">
            <div :style="{flex:1,padding:'6px 10px',border:'1px solid #e5e7eb',borderRadius:'6px',fontSize:'12px',background:'#f5f5f7',color:_id!=null?'#374151':'#9ca3af',fontWeight:_id!=null?600:400,display:'flex',alignItems:'center',gap:'8px',fontFamily:'monospace'}">
              <span style="flex:1;">{{ pathLabel(_id) || '\uACBD\uB85C \uC120\uD0DD...' }}</span>
              <button type="button" @click="handleBtnAction('pathModal-open', pi)" title="\uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD"
                :style="{cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',width:'22px',height:'22px',background:'#fff',border:'1px solid #d1d5db',borderRadius:'4px',fontSize:'11px',color:'#6b7280',padding:'0'}">
                \u{1F50D}
              </button>
            </div>
            <button @click="handleBtnAction('usedPaths-remove', pi)"
              style="padding:4px 8px;border:1px solid #fca5a5;background:#fff0f0;color:#dc2626;border-radius:4px;font-size:12px;flex-shrink:0;">
              \u2715
            </button>
          </div>
          <button @click="handleBtnAction('usedPaths-add')"
            style="padding:4px 12px;border:1px solid #d1d5db;background:#fff;color:#555;border-radius:4px;font-size:12px;">
            + \uACBD\uB85C \uCD94\uAC00
          </button>
        </template>
      </div>
      <!-- ===== /\uC124\uC815 ======================================================== -->
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC81C\uBAA9 ================================================== -->
      <div class="bo-form-compact" style="margin-bottom:14px;padding:14px;background:#faf8ff;border:1px solid #e9d5ff;border-radius:8px;">
        <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:10px;display:flex;align-items:center;gap:6px;">
          <span style="display:inline-block;width:4px;height:16px;background:#7c3aed;border-radius:2px;"></span>
          \uC81C\uBAA9
          <span v-if="!cfDtlMode" style="margin-left:auto;display:flex;align-items:center;gap:8px;">
            <span style="font-size:11px;font-weight:600;color:#888;">\uD0C0\uC774\uD2C0 \uD45C\uC2DC</span>
            <label style="display:flex;align-items:center;gap:4px;font-size:12px;font-weight:500;color:#444;">
              <input type="radio" v-model="form.titleYn" value="Y" />
              \uD45C\uC2DC
            </label>
            <label style="display:flex;align-items:center;gap:4px;font-size:12px;font-weight:500;color:#444;">
              <input type="radio" v-model="form.titleYn" value="N" />
              \uBBF8\uD45C\uC2DC
            </label>
          </span>
        </div>
        <div v-if="cfDtlMode" class="readonly-field-plain">
          {{ form.titleYn === 'Y' ? (form.title || '-') : '\uBBF8\uD45C\uC2DC' }}
        </div>
        <div v-else-if="form.titleYn==='Y'" style="display:flex;align-items:center;gap:10px;">
          <label style="font-size:12px;font-weight:600;color:#555;width:50px;flex-shrink:0;">\uD0C0\uC774\uD2C0</label>
          <input v-model="form.title" type="text" placeholder="\uD0C0\uC774\uD2C0 \uD14D\uC2A4\uD2B8 \uC785\uB825" class="form-control" style="margin:0;flex:1;" />
        </div>
      </div>
      <!-- ===== /\uC81C\uBAA9 ======================================================== -->
      <!-- ===== \u25A0.\u25A0.\u25A0. \uB0B4\uC6A9 ================================================== -->
      <div class="bo-form-compact" style="margin-bottom:14px;padding:14px;background:#fff8fa;border:1px solid #fce4ec;border-radius:8px;">
        <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;display:flex;align-items:center;gap:6px;">
          <span style="display:inline-block;width:4px;height:16px;background:#e8587a;border-radius:2px;flex-shrink:0;"></span>
          \uB0B4\uC6A9
          <span style="margin-left:auto;display:inline-flex;align-items:center;gap:6px;flex-shrink:0;">
            <span style="font-size:11px;font-weight:600;color:#888;white-space:nowrap;">\uC704\uC82F\uC720\uD615</span>
            <span v-if="cfDtlMode" style="font-size:13px;font-weight:600;color:#374151;">{{ fnWLabel(form.widgetType) }}</span>
            <select v-else v-model="form.widgetType" class="form-control" :class="{'is-invalid':errors.widgetType}"
              style="margin:0;border-radius:5px;min-width:160px;">
              <option v-for="t in codes.disp_widget_types" :key="t?.codeValue" :value="t.codeValue">{{ t.codeLabel }}</option>
            </select>
          </span>
        </div>
        <div v-if="errors.widgetType" class="field-error" style="margin-bottom:8px;">{{ errors.widgetType }}</div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD074\uB9AD\uB3D9\uC791 (BoFormArea \uC790\uB3D9 \uB80C\uB354) =========================== -->
        <div v-if="!cfIsHtmlEditor ? (!cfIsFileList ? (!cfIsEmbed) : false) : false" style="margin-bottom:14px;">
          <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:6px;">\u{1F446} \uD074\uB9AD\uB3D9\uC791</div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================ -->
          <bo-form-area plain-readonly :columns="columns.clickActionForm" :form="form" :errors="errors"
            :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uACF5\uD1B5 \uB3D9\uC801 \uD589 =========================================== -->
        <div v-if="cfDisplayRows.length" style="display:flex;flex-direction:column;gap:10px;">
          <div v-for="row in cfDisplayRows" :key="row?.key" style="margin:0;">
            <label class="form-label">{{ row.label }}</label>
            <input  v-if="row.type==='input'"    v-model="form[row.key]" class="form-control" :placeholder="row.ph||''" style="margin:0;" />
            <input  v-else-if="row.type==='number'"  v-model.number="form[row.key]" type="number" class="form-control" :placeholder="row.ph||''" style="margin:0;" />
            <input  v-else-if="row.type==='color'"   v-model="form[row.key]" type="color" class="form-control" style="margin:0;height:36px;padding:2px 6px;" />
            <textarea v-else-if="row.type==='textarea'" v-model="form[row.key]" class="form-control" :placeholder="row.ph||''" rows="3" style="margin:0;"></textarea>
            <textarea v-else-if="row.type==='code'" v-model="form[row.key]" class="form-control" :placeholder="row.ph||''" rows="6" style="margin:0;font-family:monospace;font-size:12px;background:#1e1e2e;color:#cdd3de;border-color:#444;line-height:1.6;"></textarea>
            <select v-else-if="row.type==='select'" v-model="form[row.key]" class="form-control" style="margin:0;">
              <option v-for="o in row.options" :key="o?.v" :value="o.v">{{ o.l }}</option>
            </select>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. HTML \uC5D0\uB514\uD130 (\uACF5\uD1B5 BaseHtmlEditor \u2014 Toast UI Editor) ===== -->
        <div v-else-if="cfIsHtmlEditor" style="margin:0;">
          <div v-if="cfDtlMode" class="readonly-field-plain" style="min-height:300px;line-height:1.6;overflow:auto;" v-html="form.htmlContent || '-'"></div>
          <base-html-editor v-else v-model="form.htmlContent" height="320px" />
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD30C\uC77C\uBAA9\uB85D ============================================== -->
        <div v-else-if="cfIsFileList">
          <div v-for="(item, idx) in cfFileListItems" :key="Math.random()"
            style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
            <input :value="item.name" @input="updateFileItem(idx,'name',$event.target.value)"
              class="form-control" placeholder="\uD30C\uC77C\uBA85" style="margin:0;flex:1;" />
            <input :value="item.url" @input="updateFileItem(idx,'url',$event.target.value)"
              class="form-control" placeholder="\uD30C\uC77C URL" style="margin:0;flex:2;" />
            <button @click="handleBtnAction('fileList-remove', idx)" style="flex-shrink:0;background:none;border:none;color:#e8587a;font-size:16px;">
              \xD7
            </button>
          </div>
          <button @click="handleBtnAction('fileList-add')" class="btn btn-outline" style="font-size:12px;padding:4px 14px;">+ \uD30C\uC77C \uCD94\uAC00</button>
        </div>
        <div v-else style="font-size:12px;color:#aaa;text-align:center;padding:10px;">\uC704\uC82F \uC720\uD615\uC744 \uC120\uD0DD\uD558\uBA74 \uC785\uB825 \uD544\uB4DC\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</div>
      </div>
      <!-- ===== /\uB0B4\uC6A9 ======================================================== -->
    </div>
    <!-- ===== \u25A1.\u25A1. \uC67C\uCABD: \uD3FC ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uC2A4\uD50C\uB9AC\uD130 ================================================== -->
    <div @mousedown="e => handleSelectAction('preview-split', e)"
      style="width:6px;cursor:col-resize;background:#e8e8e8;flex-shrink:0;position:relative;"
      title="\uB4DC\uB798\uADF8\uB85C \uD3ED \uC870\uC808">
      <div style="position:absolute;top:50%;left:1px;transform:translateY(-50%);width:4px;height:32px;background:#bbb;border-radius:2px;"></div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC2A4\uD50C\uB9AC\uD130 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uC624\uB978\uCABD: \uC704\uC82FLib\uBBF8\uB9AC\uBCF4\uAE30 ======================================== -->
    <div :style="{ width: previewPaneWidth + 'px', flexShrink:0, padding:'20px', background:'#f8f8f8', overflowX:'auto', transition:'width .2s' }">
      <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:10px;cursor:help;position:relative;"
        @mouseenter="showComponentTooltip=true" @mouseleave="showComponentTooltip=false">
        \u{1F441} \uC704\uC82FLib\uBBF8\uB9AC\uBCF4\uAE30
        <span style="position:absolute;bottom:-28px;left:0;background:#333;color:#fff;padding:4px 8px;border-radius:4px;font-size:9px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s;z-index:1000;" :style="{opacity: showComponentTooltip ? 1 : 0}">
          &lt;disp-x04-widget /&gt;
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uB514\uBC14\uC774\uC2A4 \uBAA8\uB4DC \uBC84\uD2BC ========================================== -->
      <div style="display:flex;gap:4px;margin-bottom:10px;padding:3px;background:#eef0f3;border-radius:6px;">
        <button v-for="m in PREVIEW_MODES" :key="m?.value"
          @click="handleSelectAction('preview-mode', m.value)"
          :style="{
          flex:'1',padding:'5px 0',fontSize:'11px',border:'none',borderRadius:'4px',cursor:'pointer',
          background: previewMode===m.value ? '#fff' : 'transparent',
          color: previewMode===m.value ? '#1565c0' : '#666',
          fontWeight: previewMode===m.value ? 700 : 500,
          boxShadow: previewMode===m.value ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
          }">
          {{ m.label }}
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uB514\uBC14\uC774\uC2A4 \uD504\uB808\uC784 ============================================ -->
      <div :style="{ width: cfPreviewFrameWidth, margin:'0 auto', background:'#fff', border:'1px solid #e4e4e4', borderRadius:'8px', padding:'12px', minHeight:'100px', transition:'width .2s' }">
        <disp-x04-widget
          :params="{ }"
          :disp-opt="{ showBadges: true, interactive: true }"
          :widget-item="cfPreviewWidget"
          />
      </div>
      <div style="margin-top:12px;font-size:11px;color:#aaa;line-height:1.6;">
        <div>\uC720\uD615: <b> {{ form.widgetType }} </b></div>
        <div v-if="form.tags">\uD0DC\uADF8: {{ form.tags }}</div>
        <div v-if="!cfIsNew">ID: #{{ String(form.libId).padStart(4,'0') }}</div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0D8\uD50C JSON ============================================= -->
      <div style="margin-top:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
          <span style="font-size:12px;font-weight:700;color:#555;">\u{1F4CB} \uC0D8\uD50C JSON</span>
          <button @click="handleBtnAction('jsonView-copy')"
            style="font-size:10px;padding:2px 8px;border:1px solid #d0d0d0;border-radius:6px;background:#fff;color:#666;transition:all .15s;"
            :style="jsonCopied ? 'background:#e8f5e9;color:#2e7d32;border-color:#a5d6a7;' : ''">
            {{ jsonCopied ? '\u2713 \uBCF5\uC0AC\uB428' : '\uBCF5\uC0AC' }}
          </button>
        </div>
        <pre style="background:#1e1e2e;color:#cdd9e5;border-radius:8px;padding:10px 12px;font-size:10px;line-height:1.55;overflow:auto;max-height:320px;margin:0;white-space:pre-wrap;word-break:break-all;">{{ cfSampleJson }}</pre>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC624\uB978\uCABD: \uC704\uC82FLib\uBBF8\uB9AC\uBCF4\uAE30 ======================================== -->
  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <bo-cm-popup-modal v-if="modals.isPathPickModal" popup-cmd="cmPopup-path-pick" popup-code="path" result-type="id" :init-param="{ bizCd: 'ec_disp_widget_lib' }" title="\uC704\uC82F \uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
</bo-container>
</div>
`};
