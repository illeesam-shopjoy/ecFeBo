window.DpDispWidgetDtl={name:"DpDispWidgetDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},emits:["close"],setup(b,{emit:Ge}){const{reactive:y,computed:l,ref:S,onMounted:oe,watch:A,nextTick:Ke}=Vue,p=window.boApp.showToast,W=window.boApp.showConfirm,C=y({isPathPickModal:!1}),m=y({disp_widget_types:[],active_statuses:[],click_action_opts:[{value:"none",label:"\uC5C6\uC74C"},{value:"navigate",label:"\uD398\uC774\uC9C0 \uC774\uB3D9"},{value:"event",label:"\uC774\uBCA4\uD2B8 \uC2E4\uD589"},{value:"modal",label:"\uBAA8\uB2EC \uC5F4\uAE30"}]}),d=y({loading:!1,error:null,previewMode:"default",previewPaneWidth:460,libPickMode:"copy",libPickOpen:!1,showComponentTooltip:!1,jsonCopied:!1}),U=Vue.toRef(d,"previewMode"),ie=(e,o={})=>{if(e==="form-save")return Ue();if(e==="form-delete")return Ne();if(e==="form-cancel")return b.navigate("__cancelEdit__");if(e==="form-close")return b.navigate("__closeDtl__");if(e==="form-edit")return b.navigate("__switchToEdit__");if(e==="libPickModal-open")return ze(o);if(e==="libPickModal-close"){d.libPickOpen=!1;return}else{if(e==="pathModal-open")return re();if(e==="pathModal-close")return N();if(e==="form-pathClear"){t.pathId=null;return}else if(e==="form-refClear"){t.refLibId=null,t.refLibCode="",t.refLibName="";return}else{if(e==="fileList-add")return Le();if(e==="fileList-remove")return Te(o);if(e==="jsonView-copy")return Me();console.warn("[handleBtnAction] unknown cmd:",e)}}},le=(e,o={})=>{if(e==="preview-mode"){d.previewMode=o;return}else{if(e==="preview-split")return Ee(o);if(e==="libPickModal-select")return X(o);if(e==="pathModal-pick")return z(o);if(e==="dispEnv-toggle")return Ye(o);console.warn("[handleSelectAction] unknown cmd:",e)}},ne=(e,o,i)=>{if(e==="cmPopup-widget-lib-pick"){if(i==null){d.libPickOpen=!1;return}return X(i)}else{if(e==="cmPopup-path-pick")return i==null?N():z(i);console.warn("[fnCallbackModal] unknown popCmd:",e)}},ae=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["WIDGET_TYPE_CD"],{compNm:"DpDispWidgetDtl"}),m.disp_widget_types=e.sgGetGrpCodes("WIDGET_TYPE_CD"),m.active_statuses=[{codeValue:"\uD65C\uC131",codeLabel:"\uD65C\uC131"},{codeValue:"\uBE44\uD65C\uC131",codeLabel:"\uBE44\uD65C\uC131"}]},re=()=>{C.isPathPickModal=!0},N=()=>{C.isPathPickModal=!1},z=e=>{t.pathId=e},se=e=>boUtil.bofGetPathLabel(e)||(e==null?"":"#"+e),v=l(()=>!b.dtlId),de=e=>{var o;return((o=m.disp_widget_types.find(i=>i.codeValue===e))==null?void 0:o.codeLabel)||e||"-"},I=()=>({widgetLibId:null,widgetCode:"",widgetNm:"",widgetTypeCd:"image_banner",widgetLibDesc:"",siteId:null,useYn:"Y",sortOrd:0,thumbnailUrl:"",widgetConfigJson:"",libId:null,libCode:"",name:"",widgetType:"image_banner",desc:"",tags:"",status:"\uD65C\uC131",dispEnv:"^DEV^",titleYn:"N",title:"",pathId:null,regDate:coUtil.cofToYmd(new Date),clickAction:"none",clickTarget:"",imageUrl:"",altText:"",linkUrl:"",productIds:"",chartTitle:"",chartLabels:"",chartValues:"",textContent:"",bgColor:"#ffffff",textColor:"#222222",infoTitle:"",infoBody:"",popupWidth:600,popupHeight:400,fileUrl:"",fileLabel:"",fileListJson:"[]",couponCode:"",couponDesc:"",htmlContent:"",textareaContent:"",markdownContent:"",codeValue:"",codeFormat:"CODE128",codeWidth:2,codeHeight:60,showCodeLabel:!0,qrSize:120,qrErrorLevel:"M",videoUrl:"",videoType:"youtube",videoAutoplay:!1,videoControls:!0,countdownTarget:"",countdownTitle:"\uC774\uBCA4\uD2B8 \uC885\uB8CC\uAE4C\uC9C0",countdownExpiredMsg:"\uC774\uBCA4\uD2B8\uAC00 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",countdownBgColor:"#1a237e",countdownTextColor:"#ffffff",payAmount:0,payCurrency:"KRW",payMethods:"card,kakao,naver,toss",payButtonLabel:"\uACB0\uC81C\uD558\uAE30",payButtonColor:"#1677ff",approvalDocType:"\uAD6C\uB9E4\uC2B9\uC778",approvalTitle:"",approvalLine:'[{"role":"\uB2F4\uB2F9\uC790","name":""},{"role":"\uD300\uC7A5","name":""},{"role":"\uBD80\uC11C\uC7A5","name":""}]',mapType:"google",mapAddress:"",mapLat:"",mapLng:"",mapZoom:14,mapMarkerLabel:"",eventId:"",cacheDesc:"",cacheAmount:0,embedCode:"",condSite:"",condUser:"",condCategory:"",condBrand:"",condSort:"newest",condLimit:8}),t=y(I()),g=y({}),O=async()=>{var e,o,i,n,a,f,P;if(!v.value){d.loading=!0;try{const u=(e=(await boApiSvc.dpWidget.getById(b.dtlId,"\uC804\uC2DC\uC704\uC82F\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:e.data;if(u){Object.assign(t,I(),u),t.libId=(o=u.widgetId)!=null?o:t.libId,t.name=(i=u.widgetNm)!=null?i:t.name,t.widgetType=(n=u.widgetTypeCd)!=null?n:t.widgetType,t.desc=(a=u.widgetDesc)!=null?a:t.desc,t.title=(f=u.widgetTitle)!=null?f:t.title,t.titleYn=(P=u.titleShowYn)!=null?P:t.titleYn,t.status=u.useYn==="Y"?"\uD65C\uC131":u.useYn==="N"?"\uBE44\uD65C\uC131":t.status;let c=null;try{c=JSON.parse(u.widgetConfigJson||"{}")||{}}catch{c={}}if(c){const s=(k,h)=>c[k]!=null?c[k]:h!=null?c[h]:void 0,r=(k,h)=>{h!==void 0&&(t[k]=h)};r("imageUrl",s("img_url","imageUrl")),r("linkUrl",s("link_url","linkUrl")),r("altText",s("alt")),r("textContent",s("text")),r("bgColor",s("bg_color","bgColor")),r("textColor",s("text_color","textColor")),r("infoTitle",s("title")),r("infoBody",s("content")),r("couponCode",s("coupon_id")),r("couponDesc",s("btn_label")),r("htmlContent",s("html")),r("textareaContent",s("text")),r("markdownContent",s("markdown")),r("codeValue",s("value")),r("videoUrl",s("video_url","videoUrl")),r("countdownTitle",s("label")),r("countdownTarget",s("target_datetime","targetDatetime")),r("fileUrl",s("file_url")),r("fileLabel",s("btn_label")),r("chartTitle",s("title")),r("chartLabels",Array.isArray(c.labels)?c.labels.join(","):void 0),r("chartValues",Array.isArray(c.values)?c.values.join(","):void 0),r("payAmount",s("amount"))}if(t.widgetType==="html_editor"){const s=u.widgetContent||"",r=c&&typeof c.html=="string"?c.html:"";t.htmlContent=s||r||t.htmlContent||""}}d.error=null}catch(E){console.error("[catch-info]",E),d.error=E.message}finally{d.loading=!1}}},B=()=>{const e=new Date,o=i=>String(i).padStart(2,"0");return`DW_${String(e.getFullYear()).slice(2)}${o(e.getMonth()+1)}${o(e.getDate())}_${o(e.getHours())}${o(e.getMinutes())}${o(e.getSeconds())}`},Y=()=>{v.value&&(t.libCode=B())};oe(async()=>{await ae(),Q(),await O(),Y()}),A(()=>b.reloadTrigger,async(e,o)=>{e===o||e===0||(Object.keys(g).forEach(i=>delete g[i]),Object.assign(t,I()),await O(),Y())});const F=l(()=>t.widgetType==="image_banner"),R=l(()=>["product_slider","product"].includes(t.widgetType)),V=l(()=>t.widgetType==="cond_product"),j=l(()=>t.widgetType.startsWith("chart_")),H=l(()=>t.widgetType==="text_banner"),J=l(()=>t.widgetType==="info_card"),pe=l(()=>t.widgetType==="popup"),ce=l(()=>t.widgetType==="file"),fe=l(()=>t.widgetType==="file_list"),ue=l(()=>t.widgetType==="coupon"),be=l(()=>t.widgetType==="html_editor"),ge=l(()=>t.widgetType==="textarea"),ye=l(()=>t.widgetType==="markdown"),$=l(()=>t.widgetType==="barcode"),q=l(()=>t.widgetType==="qrcode"),L=l(()=>t.widgetType==="barcode_qrcode"),me=l(()=>$.value||q.value||L.value),ve=l(()=>t.widgetType==="video_player"),he=l(()=>t.widgetType==="countdown"),we=l(()=>t.widgetType==="payment_widget"),xe=l(()=>t.widgetType==="approval_widget"),ke=l(()=>t.widgetType==="map_widget"),Ce=l(()=>t.widgetType==="event_banner"),Ie=l(()=>t.widgetType==="cache_banner"),G=l(()=>t.widgetType==="widget_embed"),w=l(()=>{try{return JSON.parse(t.fileListJson||"[]")}catch{return[]}}),T=e=>{t.fileListJson=JSON.stringify(e)},Le=()=>T([...w.value,{name:"",url:""}]),Te=e=>T(window.safeArrayUtils.safeFilter(w,(o,i)=>i!==e)),De=(e,o,i)=>T(w.value.map((n,a)=>a===e?{...n,[o]:i}:n)),_e=l(()=>{if(F.value)return[{key:"imageUrl",label:"\uC774\uBBF8\uC9C0 URL",type:"input",ph:"https://..."},{key:"altText",label:"Alt \uD14D\uC2A4\uD2B8",type:"input",ph:""},{key:"linkUrl",label:"\uB9C1\uD06C URL",type:"input",ph:"https://..."}];if(R.value)return[{key:"productIds",label:"\uC0C1\uD488 ID \uBAA9\uB85D",type:"input",ph:"1, 2, 3, ..."}];if(j.value)return[{key:"chartTitle",label:"\uCC28\uD2B8 \uC81C\uBAA9",type:"input",ph:""},{key:"chartLabels",label:"\uB77C\uBCA8 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"1\uC6D4, 2\uC6D4, 3\uC6D4"},{key:"chartValues",label:"\uAC12 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"100, 200, 150"}];if(H.value)return[{key:"textContent",label:"\uD14D\uC2A4\uD2B8 \uB0B4\uC6A9",type:"textarea",ph:""},{key:"bgColor",label:"\uBC30\uACBD\uC0C9",type:"color"},{key:"textColor",label:"\uAE00\uC790\uC0C9",type:"color"}];if(J.value)return[{key:"infoTitle",label:"\uCE74\uB4DC \uC81C\uBAA9",type:"input",ph:""},{key:"infoBody",label:"\uCE74\uB4DC \uB0B4\uC6A9",type:"textarea",ph:""}];if(pe.value)return[{key:"popupWidth",label:"\uD31D\uC5C5 \uB108\uBE44 (px)",type:"number",ph:""},{key:"popupHeight",label:"\uD31D\uC5C5 \uB192\uC774 (px)",type:"number",ph:""},{key:"imageUrl",label:"\uD31D\uC5C5 \uC774\uBBF8\uC9C0 URL",type:"input",ph:"https://..."},{key:"linkUrl",label:"\uB9C1\uD06C URL",type:"input",ph:""}];if(ce.value)return[{key:"fileUrl",label:"\uD30C\uC77C URL",type:"input",ph:""},{key:"fileLabel",label:"\uD45C\uC2DC \uB808\uC774\uBE14",type:"input",ph:"\uB2E4\uC6B4\uB85C\uB4DC"}];if(ue.value)return[{key:"couponCode",label:"\uCFE0\uD3F0 \uCF54\uB4DC",type:"input",ph:"COUPON_CODE"},{key:"couponDesc",label:"\uCFE0\uD3F0 \uC124\uBA85",type:"input",ph:""}];if(ge.value)return[{key:"textareaContent",label:"\uD14D\uC2A4\uD2B8 \uB0B4\uC6A9",type:"textarea",ph:"\uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694..."}];if(ye.value)return[{key:"markdownContent",label:"Markdown \uB0B4\uC6A9",type:"code",ph:`# \uC81C\uBAA9

\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694...`}];if(me.value){const e=[{key:"codeValue",label:"\uCF54\uB4DC \uAC12",type:"input",ph:"COUPON-2026-001234"}];return($.value||L.value)&&e.push({key:"codeFormat",label:"\uBC14\uCF54\uB4DC \uD615\uC2DD",type:"select",options:[{v:"CODE128",l:"CODE128 (\uBC94\uC6A9)"},{v:"EAN13",l:"EAN-13"},{v:"EAN8",l:"EAN-8"},{v:"UPC",l:"UPC-A"},{v:"CODE39",l:"CODE39"},{v:"ITF14",l:"ITF-14"}]},{key:"codeHeight",label:"\uBC14\uCF54\uB4DC \uB192\uC774 (px)",type:"number",ph:"60"},{key:"showCodeLabel",label:"\uCF54\uB4DC\uAC12 \uD14D\uC2A4\uD2B8",type:"select",options:[{v:!0,l:"\uD45C\uC2DC"},{v:!1,l:"\uC228\uAE40"}]}),(q.value||L.value)&&e.push({key:"qrSize",label:"QR \uD06C\uAE30 (px)",type:"number",ph:"120"},{key:"qrErrorLevel",label:"\uC624\uB958 \uC815\uC815 \uC218\uC900",type:"select",options:[{v:"L",l:"L \u2013 7%"},{v:"M",l:"M \u2013 15%"},{v:"Q",l:"Q \u2013 25%"},{v:"H",l:"H \u2013 30%"}]}),e}return ve.value?[{key:"videoUrl",label:"\uB3D9\uC601\uC0C1 URL",type:"input",ph:"https://youtube.com/watch?v=..."},{key:"videoType",label:"\uB3D9\uC601\uC0C1 \uC720\uD615",type:"select",options:[{v:"youtube",l:"YouTube"},{v:"vimeo",l:"Vimeo"},{v:"direct",l:"\uC9C1\uC811 URL (mp4)"}]},{key:"videoAutoplay",label:"\uC790\uB3D9\uC7AC\uC0DD",type:"select",options:[{v:!1,l:"\uC0AC\uC6A9 \uC548 \uD568"},{v:!0,l:"\uC0AC\uC6A9 (\uC74C\uC18C\uAC70 \uD544\uC694)"}]},{key:"videoControls",label:"\uCEE8\uD2B8\uB864\uBC14",type:"select",options:[{v:!0,l:"\uD45C\uC2DC"},{v:!1,l:"\uC228\uAE40"}]}]:he.value?[{key:"countdownTarget",label:"\uBAA9\uD45C \uC77C\uC2DC",type:"input",ph:"2026-12-31 23:59:59"},{key:"countdownTitle",label:"\uD0C0\uC774\uD2C0",type:"input",ph:"\uC774\uBCA4\uD2B8 \uC885\uB8CC\uAE4C\uC9C0"},{key:"countdownExpiredMsg",label:"\uC885\uB8CC \uBA54\uC2DC\uC9C0",type:"input",ph:"\uC774\uBCA4\uD2B8\uAC00 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."},{key:"countdownBgColor",label:"\uBC30\uACBD\uC0C9",type:"color"},{key:"countdownTextColor",label:"\uAE00\uC790\uC0C9",type:"color"}]:we.value?[{key:"payAmount",label:"\uACB0\uC81C \uAE08\uC561",type:"number",ph:"0"},{key:"payCurrency",label:"\uD1B5\uD654",type:"select",options:[{v:"KRW",l:"\uC6D0 (KRW)"},{v:"USD",l:"\uB2EC\uB7EC (USD)"}]},{key:"payMethods",label:"\uACB0\uC81C\uC218\uB2E8 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"card,kakao,naver,toss,bank"},{key:"payButtonLabel",label:"\uBC84\uD2BC \uD14D\uC2A4\uD2B8",type:"input",ph:"\uACB0\uC81C\uD558\uAE30"},{key:"payButtonColor",label:"\uBC84\uD2BC \uC0C9\uC0C1",type:"color"}]:xe.value?[{key:"approvalDocType",label:"\uBB38\uC11C \uC720\uD615",type:"select",options:[{v:"\uAD6C\uB9E4\uC2B9\uC778",l:"\uAD6C\uB9E4\uC2B9\uC778"},{v:"\uC9C0\uCD9C\uACB0\uC758",l:"\uC9C0\uCD9C\uACB0\uC758"},{v:"\uD734\uAC00\uC2E0\uCCAD",l:"\uD734\uAC00\uC2E0\uCCAD"},{v:"\uAE30\uC548",l:"\uAE30\uC548"},{v:"\uD488\uC758\uC11C",l:"\uD488\uC758\uC11C"}]},{key:"approvalTitle",label:"\uACB0\uC7AC \uC81C\uBAA9",type:"input",ph:""},{key:"approvalLine",label:"\uACB0\uC7AC\uC120 (JSON)",type:"code",ph:'[{"role":"\uB2F4\uB2F9\uC790","name":"\uD64D\uAE38\uB3D9"},{"role":"\uD300\uC7A5","name":""}]'}]:ke.value?[{key:"mapType",label:"\uC9C0\uB3C4 \uC720\uD615",type:"select",options:[{v:"google",l:"Google Maps"},{v:"kakao",l:"\uCE74\uCE74\uC624\uB9F5"},{v:"naver",l:"\uB124\uC774\uBC84\uC9C0\uB3C4"}]},{key:"mapAddress",label:"\uC8FC\uC18C",type:"input",ph:"\uC11C\uC6B8\uC2DC \uAC15\uB0A8\uAD6C \uD14C\uD5E4\uB780\uB85C 123"},{key:"mapLat",label:"\uC704\uB3C4 (lat)",type:"input",ph:"37.5005"},{key:"mapLng",label:"\uACBD\uB3C4 (lng)",type:"input",ph:"127.0356"},{key:"mapZoom",label:"\uC90C \uB808\uBCA8",type:"number",ph:"14"},{key:"mapMarkerLabel",label:"\uB9C8\uCEE4 \uB77C\uBCA8",type:"input",ph:"\uC6B0\uB9AC \uB9E4\uC7A5"}]:Ce.value?[{key:"eventId",label:"\uC774\uBCA4\uD2B8 ID",type:"input",ph:""}]:Ie.value?[{key:"cacheDesc",label:"\uCE90\uC2DC \uC124\uBA85",type:"input",ph:""},{key:"cacheAmount",label:"\uCE90\uC2DC \uAE08\uC561",type:"number",ph:"0"}]:G.value?[{key:"embedCode",label:"\uC784\uBCA0\uB4DC \uCF54\uB4DC",type:"textarea",ph:"<script>...<\/script>"}]:V.value?[{key:"condCategory",label:"\uCE74\uD14C\uACE0\uB9AC \uC870\uAC74",type:"input",ph:""},{key:"condBrand",label:"\uBE0C\uB79C\uB4DC \uC870\uAC74",type:"input",ph:""},{key:"condSort",label:"\uC815\uB82C \uAE30\uC900",type:"select",options:[{v:"newest",l:"\uCD5C\uC2E0\uC21C"},{v:"popular",l:"\uC778\uAE30\uC21C"},{v:"price_asc",l:"\uAC00\uACA9\uB0AE\uC740\uC21C"},{v:"price_desc",l:"\uAC00\uACA9\uB192\uC740\uC21C"}]},{key:"condLimit",label:"\uD45C\uC2DC \uAC1C\uC218",type:"number",ph:"8"}]:[]}),K=l(()=>{const e={...t};return Object.keys(e).forEach(o=>{(e[o]===""||e[o]===null)&&delete e[o]}),JSON.stringify(e,null,2)}),Me=()=>{var e;(e=navigator.clipboard)==null||e.writeText(K.value).then(()=>{d.jsonCopied=!0,setTimeout(()=>{d.jsonCopied=!1},1500)})},D=[{value:"default",label:"\uAE30\uBCF8",width:420},{value:"pc",label:"PC",width:1200},{value:"tablet",label:"\uD0DC\uBE14\uB9BF",width:768},{value:"mobile",label:"\uBAA8\uBC14\uC77C",width:375}],Pe=l(()=>{const e=window.safeArrayUtils.safeFind(D,o=>o.value===d.previewMode);return((e==null?void 0:e.width)||420)+"px"});A(U,e=>{const o=window.safeArrayUtils.safeFind(D,i=>i.value===e);d.previewPaneWidth=((o==null?void 0:o.width)||420)+40});const Ee=e=>{e.preventDefault();const o=e.clientX,i=d.previewPaneWidth,n=f=>{d.previewPaneWidth=Math.max(260,Math.min(1600,i+(o-f.clientX)))},a=()=>{window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a)};window.addEventListener("mousemove",n),window.addEventListener("mouseup",a)},Se=l(()=>({...t,dispId:t.widgetLibId||0,name:t.name||"\uBBF8\uB9AC\uBCF4\uAE30",area:"PREVIEW",status:"\uD65C\uC131",useYn:"Y",dispYn:"Y",condition:"\uD56D\uC0C1 \uD45C\uC2DC",authRequired:!1,authGrade:""})),Ae=window.yup.object({libCode:window.yup.string().required("\uC704\uC82F\uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694."),name:window.yup.string().required("\uB77C\uC774\uBE0C\uB7EC\uB9AC\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694."),widgetType:window.yup.string().required("\uC704\uC82F \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694.")}),We=()=>{const e={...t};return e.widgetId=t.widgetId||t.libId,e.widgetLibId=t.widgetLibId||null,e.widgetNm=t.widgetNm||t.name,e.widgetTypeCd=t.widgetTypeCd||t.widgetType,e.widgetDesc=t.widgetDesc||t.desc,e.widgetTitle=t.widgetTitle||t.title,e.titleShowYn=t.titleShowYn||t.titleYn||"N",e.useYn=t.status==="\uD65C\uC131"?"Y":t.status==="\uBE44\uD65C\uC131"?"N":t.useYn||"Y",(t.widgetType==="html_editor"||t.widgetTypeCd==="html_editor")&&(e.widgetContent=t.htmlContent||""),e},Ue=async()=>{var i,n;Object.keys(g).forEach(a=>delete g[a]),(!t.libCode||t.libCode.trim()===""||t.libCode==="DW_YYMMDD_HHMMSS")&&(t.libCode=B());try{await Ae.validate(t,{abortEarly:!1})}catch(a){a.inner.forEach(f=>{g[f.path]=f.message}),coUtil.cofValidationToast(g,p);return}const e=v.value;if(await W("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const a=We(),f=a.widgetId,P=await(e?boApiSvc.dpWidget.create(a,"\uC804\uC2DC\uC704\uC82F\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.dpWidget.update(f,a,"\uC804\uC2DC\uC704\uC82F\uAD00\uB9AC","\uC800\uC7A5"));p&&p("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),b.navigate&&b.navigate("dpDispWidgetMng",{reload:!0})}catch(a){console.error("[catch-info]",a);const f=((n=(i=a.response)==null?void 0:i.data)==null?void 0:n.message)||a.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";p&&p(f,"error",0)}},Ne=async()=>{var o,i;if(!(v.value||!await W("\uC0AD\uC81C","\uC774 \uC704\uC82F\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")))try{const n=await boApiSvc.dpWidget.remove(t.widgetId||t.libId,"\uC804\uC2DC\uC704\uC82F\uAD00\uB9AC","\uC0AD\uC81C");p&&p("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),b.navigate("dpDispWidgetMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const a=((i=(o=n.response)==null?void 0:o.data)==null?void 0:i.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";p&&p(a,"error",0)}},x=y([]),Q=async()=>{var e,o;if(!x.length)try{const i=await boApiSvc.dpWidgetLib.getPage({pageNo:1,pageSize:1e4},"\uC804\uC2DC\uC704\uC82F\uAD00\uB9AC","\uC704\uC82FLib\uC870\uD68C");x.splice(0,x.length,...(((o=(e=i.data)==null?void 0:e.data)==null?void 0:o.pageList)||[]).map(n=>{let a={};try{a=JSON.parse(n.widgetConfigJson||"{}")}catch{}return{...a,libId:n.widgetLibId,libCode:n.widgetCode,name:n.widgetNm,widgetType:n.widgetTypeCd,desc:n.widgetLibDesc,tags:a.tags||"",status:n.useYn==="Y"?"\uD65C\uC131":"\uBE44\uD65C\uC131",thumbnailUrl:n.thumbnailUrl}}))}catch(i){console.error("[fnLoadPickLibs]",i)}},ze=e=>{Q(),d.libPickMode=e,d.libPickOpen=!0},X=e=>{if(d.libPickOpen=!1,d.libPickMode==="copy"){const o={libId:t.widgetLibId,libCode:t.libCode,regDate:t.regDate};Object.assign(t,{...e,...o}),p&&p(`[${e.name}] \uB0B4\uC6A9\uC744 \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.`,"info")}else t.refLibId=e.libId,t.refLibCode=e.libCode||"",t.refLibName=e.name||"",p&&p(`[${e.name}] \uCC38\uC870\uB85C \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"info")},Oe=[{code:"PLAN",label:"\uC900\uBE44/\uACC4\uD68D"},{code:"DEV",label:"DEV"},{code:"TEST",label:"TEST"},{code:"PROD",label:"PROD"}].map(e=>({value:e.code,label:e.label})),Be=e=>t.dispEnv.includes("^"+e+"^"),Ye=e=>{const o=t.dispEnv.split("^").filter(n=>n&&n!=="NONE"),i=o.indexOf(e);i>=0?o.splice(i,1):o.push(e),t.dispEnv=o.length>0?"^"+o.join("^")+"^":"^NONE^"},Fe=Vue.toRef(d,"libPickMode"),Re=Vue.toRef(d,"libPickOpen"),Ve=Vue.toRef(d,"showComponentTooltip"),je=Vue.toRef(d,"jsonCopied"),He=Vue.toRef(d,"previewPaneWidth"),Z=l(()=>b.dtlMode==="view"),Je=l(()=>b.active&&!Z.value),_={};_.baseWidgetForm=[{key:"libCode",label:"\uC704\uC82F\uCF54\uB4DC",type:"text",required:!0,placeholder:"\uBE44\uC6CC\uB450\uBA74 \uC790\uB3D9 \uC0DD\uC131 (\uC608: DW_260508_191415)",mono:!0},{key:"name",label:"\uB77C\uC774\uBE0C\uB7EC\uB9AC\uBA85",type:"text",required:!0,placeholder:"\uC704\uC82F \uC774\uB984"},{key:"status",label:"\uC0C1\uD0DC",type:"select",options:()=>m.active_statuses},{key:"desc",label:"\uC124\uBA85",type:"text",placeholder:"\uC704\uC82F \uC6A9\uB3C4\xB7\uC124\uBA85 \uBA54\uBAA8",colSpan:2},{key:"tags",label:"\uD0DC\uADF8",type:"text",placeholder:"\uBD04,\uBC30\uB108,\uC2DC\uC98C",hint:"\uC27C\uD45C \uAD6C\uBD84",colSpan:2}],_.clickActionForm=[{key:"clickAction",label:"\uD074\uB9AD \uB3D9\uC791",type:"select",options:()=>m.click_action_opts},{key:"clickTarget",label:"\uD074\uB9AD \uB300\uC0C1",type:"text",placeholder:"/products \uB610\uB294 \uC774\uBCA4\uD2B8\uBA85"}];const ee=()=>{const e=new URLSearchParams;return e.set("page","dpDispWidgetDtl"),e.set("id",t.widgetId||t.libId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},$e=()=>{try{window.coExtSdk.shareKakao({title:`\uC804\uC2DC\uC704\uC82F ${t.widgetId||t.libId} - ShopJoy BO`,description:t.desc||t.name||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:ee()})}catch(e){p(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},qe=async()=>{try{await navigator.clipboard.writeText(ee()),p("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){p(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},te=S(null),M=S(!1);return{modals:C,columns:_,handleShareKakao:$e,handleCopyLink:qe,pdfAreaRef:te,pdfExporting:M,handleExportPdf:async()=>{M.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC804\uC2DC\uC704\uC82F\uC0C1\uC138_${t.widgetId||t.libId}.pdf`);await window.boUtil.bofExportPdf(te.value,e,p)}finally{M.value=!1}},codes:m,form:t,errors:g,pickLibs:x,handleBtnAction:ie,handleSelectAction:le,fnCallbackModal:ne,cfDtlMode:Z,cfIsNew:v,cfShowActions:Je,cfDisplayRows:_e,cfFileListItems:w,cfPreviewWidget:Se,cfSampleJson:K,cfPreviewFrameWidth:Pe,cfIsImage:F,cfIsProduct:R,cfIsCondProduct:V,cfIsChart:j,cfIsText:H,cfIsInfo:J,cfIsFileList:fe,cfIsHtmlEditor:be,cfIsEmbed:G,previewMode:U,libPickMode:Fe,libPickOpen:Re,showComponentTooltip:Ve,jsonCopied:je,previewPaneWidth:He,PREVIEW_MODES:D,cfDispEnvMcsOptions:Oe,pathLabel:se,fnWLabel:de,hasDispEnv:Be,updateFileItem:De}},template:`
<div ref="pdfAreaRef">
<bo-container card-style="padding:0;">
  <!-- ===== \u25A0. \uD5E4\uB354 (bo-container \uD45C\uC900 toolbar) ============================== -->
  <template #title>
    {{ !active ? '\uC704\uC82F \uC0C1\uC138' : (cfIsNew ? '\uC704\uC82F \uC2E0\uADDC\uB4F1\uB85D' : (cfDtlMode ? '\uC704\uC82F \uC0C1\uC138' : '\uC704\uC82F \uC218\uC815')) }}
    <span v-if="active ? (!cfIsNew) : false" style="font-size:11px;background:#eee;color:#666;border-radius:4px;padding:1px 7px;margin-left:6px;">
      #{{ String(form.widgetLibId).padStart(4,'0') }}
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
    <template v-if="cfShowActions">
      <button @click="handleBtnAction('libPickModal-open', 'copy')" class="btn btn-outline" style="font-size:12px;background:#e3f2fd;color:#1565c0;border-color:#90caf9;">
        \u{1F4CB} \uC804\uC2DC\uC704\uC82FLib \uB0B4\uC6A9\uBCF5\uC0AC
      </button>
      <button @click="handleBtnAction('libPickModal-open', 'ref')"  class="btn btn-outline" style="font-size:12px;background:#f3e5f5;color:#6a1b9a;border-color:#ce93d8;">
        \u{1F517} \uC804\uC2DC\uC704\uC82FLib \uCC38\uC870
      </button>
      <button @click="handleBtnAction('form-save')"   class="btn btn_save" style="font-size:13px;">\uC800\uC7A5</button>
      <!-- 2026-08-30: \uD328\uD134 A \u2014 \uD3B8\uC9D1\uBAA8\uB4DC [\uC0AD\uC81C] \uC81C\uAC70(\uBCF4\uAE30\uBAA8\uB4DC\uC5D0\uB9CC \uC720\uC9C0) -->
      <button v-if="!cfIsNew" @click="handleBtnAction('form-cancel')" class="btn btn_cancel" style="font-size:13px;">\uCDE8\uC18C</button>
      <button @click="handleBtnAction('form-close')" class="btn btn_close" style="font-size:13px;">\uB2EB\uAE30</button>
    </template>
    <template v-if="active ? (cfDtlMode) : false">
      <button @click="handleBtnAction('form-edit')" class="btn btn_edit" style="font-size:13px;">\uC218\uC815</button>
      <button v-if="!cfIsNew" @click="handleBtnAction('form-delete')" class="btn btn_delete" style="font-size:13px;color:#e8587a;border-color:#e8587a;">
        \uC0AD\uC81C
      </button>
      <button @click="handleBtnAction('form-close')" class="btn btn_close" style="font-size:13px;">\uB2EB\uAE30</button>
    </template>
  </template>
  <!-- ===== \u25A0.\u25A0. \uC704\uC82FLib \uC120\uD0DD \uD31D\uC5C5 =========================================== -->
  <bo-cm-popup-modal v-if="libPickOpen" popup-cmd="cmPopup-widget-lib-pick" popup-code="widgetLib" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uD5E4\uB354 ====================================================== -->
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="display:flex;gap:0;">
    <!-- ===== \u25A0.\u25A0. \uC67C\uCABD: \uD3FC ================================================= -->
    <div style="flex:1;padding:20px;min-width:0;overflow-y:auto;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \u{1F517} \uCC38\uC870 \uC815\uBCF4 ============================================ -->
      <div v-if="form.refLibId"
        style="background:linear-gradient(135deg,#f3e5f5 0%,#fff 100%);border:1px dashed #ce93d8;border-radius:10px;padding:12px 14px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span style="font-size:12px;font-weight:700;color:#6a1b9a;">\u{1F517} \uC804\uC2DC\uC704\uC82FLib \uCC38\uC870 \uC911</span>
          <button @click="handleBtnAction('form-refClear')"
            style="font-size:10px;padding:2px 8px;border:1px solid #ce93d8;background:#fff;color:#6a1b9a;border-radius:4px;">
            \uCC38\uC870 \uD574\uC81C
          </button>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px 14px;font-size:11px;color:#555;line-height:1.6;margin-bottom:10px;">
          <span>
            <b style="color:#888;">\uCC38\uC870\uAD6C\uBD84:</b>
            <span style="background:#f3e5f5;color:#6a1b9a;border-radius:8px;padding:1px 7px;margin-left:3px;font-weight:700;">\uC704\uC82FLib</span>
          </span>
          <span v-if="form.refLibCode">
            <b style="color:#888;">\uCC38\uC870\uD56D\uBAA9Code:</b>
            <code style="background:#fff;color:#6a1b9a;padding:1px 6px;border-radius:3px;margin-left:3px;border:1px solid #e1bee7;">
              {{ form.refLibCode }}
            </code>
          </span>
          <span>
            <b style="color:#888;">\uCC38\uC870\uD56D\uBAA9ID:</b>
            <code style="background:#fff;color:#6a1b9a;padding:1px 6px;border-radius:3px;margin-left:3px;border:1px solid #e1bee7;">
              #{{ String(form.refLibId).padStart(4,'0') }}
            </code>
          </span>
          <span v-if="form.refLibName"><b style="color:#888;"> \uCC38\uC870\uBA85: </b> {{ form.refLibName }}</span>
        </div>
        <div style="background:#fff;border:1px solid #e1bee7;border-radius:8px;padding:10px;">
          <div style="font-size:10px;color:#888;font-weight:600;margin-bottom:6px;letter-spacing:.3px;">\u25B8 \uCC38\uC870 \uB0B4\uC6A9 \uBBF8\uB9AC\uBCF4\uAE30</div>
          <disp-x04-widget
            :params="{ }"
            :disp-opt="{ showBadges: true, interactive: true }"
            :widget-item="pickLibs.find(l => l.libId===form.refLibId) || {}" />
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC124\uC815 ================================================== -->
      <div class="bo-form-compact" style="margin-bottom:14px;padding:14px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
        <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;display:flex;align-items:center;gap:6px;">
          <span style="display:inline-block;width:4px;height:16px;background:#1d4ed8;border-radius:2px;"></span>
          \uC124\uC815
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F\uCF54\uB4DC/\uB77C\uC774\uBE0C\uB7EC\uB9AC\uBA85/\uC0C1\uD0DC/\uC124\uBA85/\uD0DC\uADF8 (BoFormArea \uC790\uB3D9 \uB80C\uB354) =========== -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area plain-readonly :columns="columns.baseWidgetForm" :form="form" :errors="errors"
          :readonly="cfDtlMode" :cols="2" compact :show-actions="false" />
        <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin:10px 0 6px;">\u{1F30D} \uC804\uC2DC\uD658\uACBD</div>
        <div style="margin-bottom:12px;">
          <bo-multi-check-select v-model="form.dispEnv" :options="cfDispEnvMcsOptions"
            separator="^" wrap empty-value="^NONE^" placeholder="\uC804\uCCB4 \uD658\uACBD" all-label="\uC804\uCCB4 \uD658\uACBD"
            :plain="cfDtlMode" min-width="280px" />
        </div>
        <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:6px;">
          \uD45C\uC2DC\uACBD\uB85C
          <span style="font-size:10px;font-weight:400;color:#aaa;">\uC774 \uC704\uC82F\uC774 \uB178\uCD9C\uB418\uB294 \uACBD\uB85C</span>
        </div>
        <div v-if="cfDtlMode" class="readonly-field-plain">
          {{ pathLabel(form.pathId) || '-' }}
        </div>
        <div v-else :style="{padding:'7px 10px',border:'1px solid #e5e7eb',borderRadius:'6px',fontSize:'12px',background:'#f5f5f7',color:form.pathId!=null?'#374151':'#9ca3af',fontWeight:form.pathId!=null?600:400,display:'flex',alignItems:'flex-end',gap:'6px',fontFamily:'monospace'}">
          <span style="flex:1;">{{ pathLabel(form.pathId) || '\uACBD\uB85C \uC120\uD0DD...' }}</span>
          <button v-if="form.pathId != null" type="button" title="\uC120\uD0DD \uD574\uC81C" @click="handleBtnAction('form-pathClear')"
            style="background:none;border:none;padding:0 2px 2px;color:#999;cursor:pointer;font-size:13px;line-height:1;flex-shrink:0;">
            x
          </button>
          <button type="button" @click="handleBtnAction('pathModal-open')" title="\uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD"
            :style="{cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',width:'24px',height:'24px',background:'#fff',border:'1px solid #d1d5db',borderRadius:'4px',fontSize:'12px',color:'#6b7280',padding:'0'}"
            @mouseover="$event.currentTarget.style.background='#eef2ff'"
            @mouseout="$event.currentTarget.style.background='#fff'">
            \u{1F50D}
          </button>
        </div>
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
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD074\uB9AD \uC561\uC158 (html_editor\xB7file_list\xB7embed \uC81C\uC678) - BoFormArea \uC790\uB3D9 \uB80C\uB354 ===== -->
        <div v-if="!cfIsHtmlEditor ? (!cfIsFileList ? (!cfIsEmbed) : false) : false" style="margin-bottom:12px;">
          <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:8px;">\u{1F446} \uD074\uB9AD\uB3D9\uC791</div>
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
    <!-- ===== \u25A0.\u25A0. \uC624\uB978\uCABD: \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 =========================================== -->
    <div :style="{ width: previewPaneWidth + 'px', flexShrink:0, padding:'20px', background:'#f8f8f8', overflowX:'auto', transition:'width .2s' }">
      <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:10px;cursor:help;position:relative;"
        @mouseenter="showComponentTooltip=true" @mouseleave="showComponentTooltip=false">
        \u{1F441} \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30
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
        <div v-if="!cfIsNew">ID: #{{ String(form.widgetLibId).padStart(4,'0') }}</div>
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
  <!-- ===== \u25A1.\u25A1. \uC624\uB978\uCABD: \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 =========================================== -->
  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <bo-cm-popup-modal v-if="modals.isPathPickModal" popup-cmd="cmPopup-path-pick" popup-code="path" result-type="id" :init-param="{ bizCd: 'ec_disp_widget' }" title="\uC704\uC82F \uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
</bo-container>
</div>
`};
