window.DpDispPanelDtl={name:"DpDispPanelDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(u){const{ref:X,reactive:b,computed:r,onMounted:Ce,watch:Q,nextTick:Le}=Vue,c=window.boApp.showToast,Z=window.boApp.showConfirm,k=window.boApp.showRefModal,O=b({isCardPreview:!1}),s=b({libPickOpen:!1,loading:!1,rowCopyOpen:!1,showComponentTooltip:!1,viewAll:!1,error:null,tab:"info",previewMode:"default",previewPaneWidth:520,libPickMode:"copy"}),Te=Vue.toRef(s,"tab"),ee=Vue.toRef(s,"previewMode"),m=b({layout_types:[],disp_widget_types:[],active_statuses:[],click_action_opts:[{value:"none",label:"\uC5C6\uC74C"},{value:"navigate",label:"\uD398\uC774\uC9C0 \uC774\uB3D9"},{value:"event",label:"\uC774\uBCA4\uD2B8 \uD638\uCD9C"},{value:"modal",label:"\uBAA8\uB2EC \uC624\uD508"},{value:"url",label:"\uC678\uBD80 URL"}]}),I=b([]),w=b([]),U=(e,t={})=>{if(["form-save","panel-form-save","row-form-save"].includes(e))return at();if(["panel-form-delete","row-form-delete"].includes(e))return nt();if(["form-edit","panel-form-edit","row-form-edit"].includes(e))return u.navigate("__switchToEdit__");if(["form-cancel","panel-form-cancel","row-form-cancel"].includes(e))return u.navigate("__cancelEdit__");if(["form-close","panel-form-close","row-form-close"].includes(e))return u.navigate("__closeDtl__");if(e==="form-toggleViewAll"){J.value=!J.value;return}else if(e==="rowCopyModal-open"){if(x.value)return;zt(),s.rowCopyOpen=!0;return}else{if(e==="panelItems-add")return x.value?void 0:It();if(e==="pathModal-open")return oe(t);if(e==="libPick-open")return x.value?void 0:Et(t);if(e==="libPick-refClear"){a.value&&(a.value.refLibId=null,a.value.refLibCode="",a.value.refLibName="");return}else{if(e==="preview-open")return rt(t.tabKey,t.tabLabel);if(e==="preview-close")return W();if(e==="cardPreview-open")return pt();if(e==="cardPreview-close")return G();if(e==="refModal-open")return k(t.type,t.id);if(e==="pathPick-open")return oe(t||"form");if(e==="path-clear"){l.pathId=null;return}else if(e==="layout-setType"){j.value||(l.layoutType=t);return}else if(e==="layout-setGridCols"){j.value||(l.gridCols=t);return}else{if(e==="fileList-add")return ye();if(e==="fileList-remove")return ge(t);if(e==="fileListRow-remove")return H(t.row,t.idx);if(e==="fileListRow-add")return $(t);if(e==="cardPreview-close")return G();console.warn("[handleBtnAction] unknown cmd:",e)}}}},Pe=(e,t={})=>{if(e==="tab-select"){s.tab=t;return}else{if(e==="tab-move")return Be(t);if(e==="panelItems-remove")return At(t);if(e==="preview-mode"){s.previewMode=t;return}else{if(e==="preview-split")return Ne(t);if(e==="dispEnv-toggle")return Tt(t);if(e==="panelDispEnv-toggle")return Pt(t);if(e==="visibility-toggle")return Rt(t);if(e==="panelVisibility-toggle")return Mt(t);if(e==="libPick-select")return ke(t);if(e==="rowCopyModal-copy")return he(t);if(e==="pathModal-pick")return ie(t);if(e==="section-toggle")return vt(t);console.warn("[handleSelectAction] unknown cmd:",e)}}},Me=(e,t,o)=>{if(e==="cmPopup-widget-lib-pick"){if(o==null){s.libPickOpen=!1;return}return ke(o)}else if(e==="row-pick"){if(o==null){s.rowCopyOpen=!1;return}return he(o)}else if(e==="cmPopup-path-pick"){if(o==null){L.show=!1;return}return ie(o)}else{if(e==="disp-preview")return o==null?W():void 0;console.warn("[fnCallbackModal] unknown popCmd:",e)}},ze=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["LAYOUT_TYPE","WIDGET_TYPE_CD","DISP_PANEL_STATUS_CD"],{compNm:"DpDispPanelDtl"}),m.layout_types=e.sgGetGrpCodes("LAYOUT_TYPE"),m.disp_widget_types=e.sgGetGrpCodes("WIDGET_TYPE_CD"),m.active_statuses=e.sgGetGrpCodes("DISP_PANEL_STATUS_CD")},te=async()=>{var e,t,o,i,n,p,v,C,De,Re;if(!x.value){s.loading=!0;try{const f=(e=(await boApiSvc.dpPanel.getById(u.dtlId,"\uC804\uC2DC\uD328\uB110\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C")).data)==null?void 0:e.data;if(f){if(Object.assign(l,f),l.dispId=(t=f.panelId)!=null?t:l.dispId,l.name=(o=f.panelNm)!=null?o:l.name,l.layoutType=(i=f.panelTypeCd)!=null?i:l.layoutType,l.status=(n=f.dispPanelStatusCd)!=null?n:l.status,l.panelVisibilityTargets=(p=f.visibilityTargets)!=null?p:l.panelVisibilityTargets,l.useStartDate=(v=f.useStartDate)!=null?v:l.useStartDate,l.useEndDate=(C=f.useEndDate)!=null?C:l.useEndDate,l.pathId=(De=f.pathId)!=null?De:l.pathId,l.areaId=(Re=f.areaId)!=null?Re:l.areaId,Array.isArray(f.panelItems)&&f.panelItems.length){const h=f.panelItems.slice().sort((y,N)=>(y.sortOrd||0)-(N.sortOrd||0)).map(y=>{let N={};try{N=JSON.parse(y.widgetConfigJson||"{}")}catch{}return M({...N,widgetType:y.widgetTypeCd,widgetTitle:y.widgetTitle,title:y.widgetTitle,titleYn:y.titleShowYn||"N",contentTypeCd:y.contentTypeCd,sortOrder:y.sortOrd,dispYn:y.dispYn||"Y"})});d.splice(0,d.length,...h)}else if(f.contentJson)try{const h=JSON.parse(f.contentJson);Array.isArray(h==null?void 0:h.rows)&&d.splice(0,d.length,...h.rows)}catch{}}s.error=null}catch(K){console.error("[catch-info]",K),s.error=K.message}finally{s.loading=!1}}},Ee=async()=>{var e,t,o,i,n,p;s.loading=!0;try{const[v,C]=await Promise.all([boApiSvc.pmEvent.getPage({pageNo:1,pageSize:1e4},"\uC804\uC2DC\uD328\uB110\uAD00\uB9AC","\uC870\uD68C"),boApiSvc.dpArea.getPage({pageNo:1,pageSize:1e3},"\uC804\uC2DC\uD328\uB110\uAD00\uB9AC","\uC601\uC5ED\uC870\uD68C")]);I.splice(0,I.length,...((t=(e=v.data)==null?void 0:e.data)==null?void 0:t.pageList)||((i=(o=v.data)==null?void 0:o.data)==null?void 0:i.list)||[]),w.splice(0,w.length,...((p=(n=C.data)==null?void 0:n.data)==null?void 0:p.pageList)||[]),s.error=null}catch(v){console.error("[catch-info]",v),s.error=v.message}finally{s.loading=!1}},L=b({show:!1,target:null}),oe=e=>{L.target=e,L.show=!0},ie=e=>{L.target==="form"&&(l.pathId=e)},_e=e=>boUtil.bofGetPathLabel(e)||(e==null?"":"#"+e),x=r(()=>!u.dtlId),B=[{value:"default",label:"\uAE30\uBCF8",width:480},{value:"pc",label:"PC",width:1200},{value:"tablet",label:"\uD0DC\uBE14\uB9BF",width:768},{value:"mobile",label:"\uBAA8\uBC14\uC77C",width:375}],Se=r(()=>{const e=window.safeArrayUtils.safeFind(B,t=>t.value===s.previewMode);return((e==null?void 0:e.width)||480)+"px"});Q(ee,e=>{const t=window.safeArrayUtils.safeFind(B,o=>o.value===e);s.previewPaneWidth=((t==null?void 0:t.width)||480)+40});const Ne=e=>{e.preventDefault();const t=e.clientX,o=s.previewPaneWidth,i=p=>{s.previewPaneWidth=Math.max(260,Math.min(1600,o+(t-p.clientX)))},n=()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",n)};window.addEventListener("mousemove",i),window.addEventListener("mouseup",n)},P=new Date,le=e=>String(e).padStart(2,"0"),ae=`${P.getFullYear()}-${le(P.getMonth()+1)}-${le(P.getDate())}`,ne=`${P.getFullYear()+10}-12-31`,g=b({}),l=b({dispId:null,dispCode:"",areaId:"",area:"",name:"",status:"SHOW",layoutType:"grid",gridCols:1,titleYn:"N",title:"",htmlDesc:"",useStartDate:"",useEndDate:"",condition:"\uD56D\uC0C1 \uD45C\uC2DC",authRequired:!1,authGrade:"",displayPath:"",pathId:null,panelDispYn:"Y",panelDispStartDate:"",panelDispEndDate:"",panelDispEnv:"^PROD^",panelVisibilityTargets:"^PUBLIC^"}),M=(e={})=>({widgetType:"image_banner",clickAction:"none",clickTarget:"",sortOrder:1,titleYn:"N",title:"",imageUrl:"",linkUrl:"",altText:"",productIds:"",condSite:"",condUser:"",condCategory:"",condBrand:"",condSort:"newest",condLimit:8,fileListJson:"[]",chartTitle:"",chartType:"bar",chartLabels:"",chartValues:"",textContent:"",bgColor:"#ffffff",textColor:"#222222",infoTitle:"",infoBody:"",popupWidth:600,popupHeight:400,fileUrl:"",fileLabel:"",couponCode:"",couponDesc:"",htmlContent:"",textareaContent:"",markdownContent:"",codeValue:"",codeFormat:"CODE128",codeWidth:2,codeHeight:60,showCodeLabel:!0,qrSize:120,qrErrorLevel:"M",videoUrl:"",videoType:"youtube",videoAutoplay:!1,videoControls:!0,countdownTarget:"",countdownTitle:"\uC774\uBCA4\uD2B8 \uC885\uB8CC\uAE4C\uC9C0",countdownExpiredMsg:"\uC774\uBCA4\uD2B8\uAC00 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",countdownBgColor:"#1a237e",countdownTextColor:"#ffffff",payAmount:0,payCurrency:"KRW",payMethods:"card,kakao,naver,toss",payButtonLabel:"\uACB0\uC81C\uD558\uAE30",payButtonColor:"#1677ff",approvalDocType:"\uAD6C\uB9E4\uC2B9\uC778",approvalTitle:"",approvalLine:'[{"role":"\uB2F4\uB2F9\uC790","name":""},{"role":"\uD300\uC7A5","name":""},{"role":"\uBD80\uC11C\uC7A5","name":""}]',mapType:"google",mapAddress:"",mapLat:"",mapLng:"",mapZoom:14,mapMarkerLabel:"",eventId:"",cacheDesc:"",cacheAmount:0,embedCode:"",visibilityTargets:"^PUBLIC^",useYn:"Y",useStartDate:ae,useEndDate:ne,dispYn:"Y",dispStartDt:ae+"T00:00",dispEndDt:ne+"T23:59",dispEnv:"^DEV^",...e}),d=b([M({sortOrder:1})]),z=10,re=r(()=>[{key:"info",label:"\uD328\uB110\uAE30\uBCF8\uC815\uBCF4"},...d.map((e,t)=>({key:"tab"+(t+1),label:"\uC804\uC2DC\uD56D\uBAA9 "+(t+1)}))]),se=r(()=>{const e={};return window.safeArrayUtils.safeForEach(d,(t,o)=>{e["tab"+(o+1)]=o}),e}),Oe=r(()=>d.map((e,t)=>"tab"+(t+1))),A=r(()=>{const e=se.value[s.tab];return e!==void 0?e:null}),a=r(()=>A.value!==null&&A.value!==void 0?d[A.value]:null),Ue=r(()=>(re.value.find(e=>e.key===s.tab)||{}).label||""),Be=e=>{const t=A.value;if(t===null)return;const o=t+e;if(o<0||o>=d.length)return;const i={...d[t]},n={...d[o]};Object.assign(d[t],n),Object.assign(d[o],i),window.safeArrayUtils.safeForEach(d,(p,v)=>{p.sortOrder=v+1}),s.tab=Oe.value[o]},Fe=r(()=>{var e,t;return(t=(e=a.value)==null?void 0:e.widgetType)==null?void 0:t.startsWith("chart_")}),de=r(()=>{var e;return["product_slider","product"].includes((e=a.value)==null?void 0:e.widgetType)}),pe=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="image_banner"}),ce=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="text_banner"}),Ye=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="info_card"}),Ve=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="popup"}),We=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="file"}),fe=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="file_list"}),Ge=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="coupon"}),ve=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="html_editor"}),$e=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="textarea"}),He=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="markdown"}),be=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="barcode"}),ue=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="qrcode"}),F=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="barcode_qrcode"}),Je=r(()=>be.value||ue.value||F.value),je=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="video_player"}),qe=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="countdown"}),Ke=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="payment_widget"}),Xe=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="approval_widget"}),Qe=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="map_widget"}),Ze=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="event_banner"}),et=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="cache_banner"}),tt=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="widget_embed"}),ot=r(()=>{var e;return((e=a.value)==null?void 0:e.widgetType)==="cond_product"}),E=r(()=>{var e;try{return JSON.parse(((e=a.value)==null?void 0:e.fileListJson)||"[]")}catch{return[]}}),Y=e=>{a.value&&(a.value.fileListJson=JSON.stringify(e))},ye=()=>Y([...E.value,{name:"",url:""}]),ge=e=>Y(window.safeArrayUtils.safeFilter(E,(t,o)=>o!==e)),V=(e,t,o)=>Y(E.value.map((i,n)=>n===e?{...i,[t]:o}:i)),it=r(()=>{if(!a.value)return[];if(pe.value)return[{key:"imageUrl",label:"\uC774\uBBF8\uC9C0 URL",type:"input",ph:"https://..."},{key:"altText",label:"Alt \uD14D\uC2A4\uD2B8",type:"input",ph:""},{key:"linkUrl",label:"\uB9C1\uD06C URL",type:"input",ph:"https://..."}];if(de.value)return[{key:"productIds",label:"\uC0C1\uD488 ID \uBAA9\uB85D",type:"input",ph:"1, 2, 3, ..."}];if(Fe.value)return[{key:"chartTitle",label:"\uCC28\uD2B8 \uC81C\uBAA9",type:"input",ph:""},{key:"chartType",label:"\uCC28\uD2B8 \uC720\uD615",type:"select",options:[{v:"bar",l:"Bar"},{v:"line",l:"Line"},{v:"pie",l:"Pie"}]},{key:"chartLabels",label:"\uB77C\uBCA8 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"1\uC6D4, 2\uC6D4, 3\uC6D4"},{key:"chartValues",label:"\uAC12 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"100, 200, 150"}];if(ce.value)return[{key:"textContent",label:"\uD14D\uC2A4\uD2B8 \uB0B4\uC6A9",type:"textarea",ph:""},{key:"bgColor",label:"\uBC30\uACBD\uC0C9",type:"color",ph:""},{key:"textColor",label:"\uAE00\uC790\uC0C9",type:"color",ph:""}];if(Ye.value)return[{key:"infoTitle",label:"\uCE74\uB4DC \uC81C\uBAA9",type:"input",ph:""},{key:"infoBody",label:"\uCE74\uB4DC \uB0B4\uC6A9",type:"textarea",ph:""}];if(Ve.value)return[{key:"popupWidth",label:"\uD31D\uC5C5 \uB108\uBE44 (px)",type:"number",ph:""},{key:"popupHeight",label:"\uD31D\uC5C5 \uB192\uC774 (px)",type:"number",ph:""},{key:"imageUrl",label:"\uD31D\uC5C5 \uC774\uBBF8\uC9C0 URL",type:"input",ph:"https://..."},{key:"linkUrl",label:"\uB9C1\uD06C URL",type:"input",ph:""}];if(We.value)return[{key:"fileUrl",label:"\uD30C\uC77C URL",type:"input",ph:"https://... \uB610\uB294 /files/..."},{key:"fileLabel",label:"\uD45C\uC2DC \uB808\uC774\uBE14",type:"input",ph:"\uB2E4\uC6B4\uB85C\uB4DC"}];if(Ge.value)return[{key:"couponCode",label:"\uCFE0\uD3F0 \uCF54\uB4DC",type:"input",ph:"COUPON_CODE"},{key:"couponDesc",label:"\uCFE0\uD3F0 \uC124\uBA85",type:"input",ph:"\uCFE0\uD3F0 \uC548\uB0B4 \uBB38\uAD6C"}];if(ve.value)return[];if($e.value)return[{key:"textareaContent",label:"\uD14D\uC2A4\uD2B8 \uB0B4\uC6A9",type:"textarea",ph:"\uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694..."}];if(He.value)return[{key:"markdownContent",label:"Markdown \uB0B4\uC6A9",type:"code",ph:`# \uC81C\uBAA9

\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694...`}];if(Je.value){const e=[{key:"codeValue",label:"\uCF54\uB4DC \uAC12",type:"input",ph:"COUPON-2026-001234"}];return(be.value||F.value)&&e.push({key:"codeFormat",label:"\uBC14\uCF54\uB4DC \uD615\uC2DD",type:"select",options:[{v:"CODE128",l:"CODE128 (\uBC94\uC6A9)"},{v:"EAN13",l:"EAN-13"},{v:"EAN8",l:"EAN-8"},{v:"UPC",l:"UPC-A"},{v:"CODE39",l:"CODE39"},{v:"ITF14",l:"ITF-14"}]},{key:"codeHeight",label:"\uBC14\uCF54\uB4DC \uB192\uC774 (px)",type:"number",ph:"60"},{key:"showCodeLabel",label:"\uCF54\uB4DC\uAC12 \uD14D\uC2A4\uD2B8",type:"select",options:[{v:!0,l:"\uD45C\uC2DC"},{v:!1,l:"\uC228\uAE40"}]}),(ue.value||F.value)&&e.push({key:"qrSize",label:"QR \uD06C\uAE30 (px)",type:"number",ph:"120"},{key:"qrErrorLevel",label:"\uC624\uB958 \uC815\uC815 \uC218\uC900",type:"select",options:[{v:"L",l:"L \u2013 7%"},{v:"M",l:"M \u2013 15%"},{v:"Q",l:"Q \u2013 25%"},{v:"H",l:"H \u2013 30%"}]}),e}return fe.value?[]:ot.value?[{key:"condSite",label:"\uC0AC\uC774\uD2B8 \uC870\uAC74",type:"input",ph:"\uC0AC\uC774\uD2B8 \uCF54\uB4DC (\uBE44\uC6CC\uB450\uBA74 \uC804\uCCB4)"},{key:"condUser",label:"\uC0AC\uC6A9\uC790 \uC870\uAC74",type:"select",options:[{v:"",l:"\uC804\uCCB4"},{v:"login",l:"\uB85C\uADF8\uC778"},{v:"nologin",l:"\uBE44\uB85C\uADF8\uC778"},{v:"VIP",l:"VIP"},{v:"\uC6B0\uC218",l:"\uC6B0\uC218"},{v:"\uC77C\uBC18",l:"\uC77C\uBC18"}]},{key:"condCategory",label:"\uCE74\uD14C\uACE0\uB9AC \uC870\uAC74",type:"input",ph:"\uCE74\uD14C\uACE0\uB9AC ID (\uC27C\uD45C \uAD6C\uBD84)"},{key:"condBrand",label:"\uBE0C\uB79C\uB4DC \uC870\uAC74",type:"input",ph:"\uBE0C\uB79C\uB4DC\uBA85 (\uC27C\uD45C \uAD6C\uBD84)"},{key:"condSort",label:"\uC815\uB82C \uAE30\uC900",type:"select",options:[{v:"newest",l:"\uCD5C\uC2E0\uC21C"},{v:"popular",l:"\uC778\uAE30\uC21C"},{v:"price_asc",l:"\uAC00\uACA9 \uB0AE\uC740\uC21C"},{v:"price_desc",l:"\uAC00\uACA9 \uB192\uC740\uC21C"},{v:"discount",l:"\uD560\uC778\uC728\uC21C"}]},{key:"condLimit",label:"\uD45C\uC2DC \uAC1C\uC218",type:"number",ph:"8"}]:je.value?[{key:"videoUrl",label:"\uB3D9\uC601\uC0C1 URL",type:"input",ph:"https://youtube.com/watch?v=..."},{key:"videoType",label:"\uB3D9\uC601\uC0C1 \uC720\uD615",type:"select",options:[{v:"youtube",l:"YouTube"},{v:"vimeo",l:"Vimeo"},{v:"direct",l:"\uC9C1\uC811 URL (mp4)"}]},{key:"videoAutoplay",label:"\uC790\uB3D9\uC7AC\uC0DD",type:"select",options:[{v:!1,l:"\uC0AC\uC6A9 \uC548 \uD568"},{v:!0,l:"\uC0AC\uC6A9 (\uC74C\uC18C\uAC70 \uD544\uC694)"}]},{key:"videoControls",label:"\uCEE8\uD2B8\uB864\uBC14",type:"select",options:[{v:!0,l:"\uD45C\uC2DC"},{v:!1,l:"\uC228\uAE40"}]}]:qe.value?[{key:"countdownTarget",label:"\uBAA9\uD45C \uC77C\uC2DC",type:"input",ph:"2026-12-31 23:59:59"},{key:"countdownTitle",label:"\uD0C0\uC774\uD2C0",type:"input",ph:"\uC774\uBCA4\uD2B8 \uC885\uB8CC\uAE4C\uC9C0"},{key:"countdownExpiredMsg",label:"\uC885\uB8CC \uBA54\uC2DC\uC9C0",type:"input",ph:"\uC774\uBCA4\uD2B8\uAC00 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."},{key:"countdownBgColor",label:"\uBC30\uACBD\uC0C9",type:"color"},{key:"countdownTextColor",label:"\uAE00\uC790\uC0C9",type:"color"}]:Ke.value?[{key:"payAmount",label:"\uACB0\uC81C \uAE08\uC561",type:"number",ph:"0"},{key:"payCurrency",label:"\uD1B5\uD654",type:"select",options:[{v:"KRW",l:"\uC6D0 (KRW)"},{v:"USD",l:"\uB2EC\uB7EC (USD)"}]},{key:"payMethods",label:"\uACB0\uC81C\uC218\uB2E8 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"card,kakao,naver,toss,bank"},{key:"payButtonLabel",label:"\uBC84\uD2BC \uD14D\uC2A4\uD2B8",type:"input",ph:"\uACB0\uC81C\uD558\uAE30"},{key:"payButtonColor",label:"\uBC84\uD2BC \uC0C9\uC0C1",type:"color"}]:Xe.value?[{key:"approvalDocType",label:"\uBB38\uC11C \uC720\uD615",type:"select",options:[{v:"\uAD6C\uB9E4\uC2B9\uC778",l:"\uAD6C\uB9E4\uC2B9\uC778"},{v:"\uC9C0\uCD9C\uACB0\uC758",l:"\uC9C0\uCD9C\uACB0\uC758"},{v:"\uD734\uAC00\uC2E0\uCCAD",l:"\uD734\uAC00\uC2E0\uCCAD"},{v:"\uAE30\uC548",l:"\uAE30\uC548"},{v:"\uD488\uC758\uC11C",l:"\uD488\uC758\uC11C"}]},{key:"approvalTitle",label:"\uACB0\uC7AC \uC81C\uBAA9",type:"input",ph:""},{key:"approvalLine",label:"\uACB0\uC7AC\uC120 (JSON)",type:"code",ph:'[{"role":"\uB2F4\uB2F9\uC790","name":"\uD64D\uAE38\uB3D9"},{"role":"\uD300\uC7A5","name":""}]'}]:Qe.value?[{key:"mapType",label:"\uC9C0\uB3C4 \uC720\uD615",type:"select",options:[{v:"google",l:"Google Maps"},{v:"kakao",l:"\uCE74\uCE74\uC624\uB9F5"},{v:"naver",l:"\uB124\uC774\uBC84\uC9C0\uB3C4"}]},{key:"mapAddress",label:"\uC8FC\uC18C",type:"input",ph:"\uC11C\uC6B8\uC2DC \uAC15\uB0A8\uAD6C \uD14C\uD5E4\uB780\uB85C 123"},{key:"mapLat",label:"\uC704\uB3C4 (lat)",type:"input",ph:"37.5005"},{key:"mapLng",label:"\uACBD\uB3C4 (lng)",type:"input",ph:"127.0356"},{key:"mapZoom",label:"\uC90C \uB808\uBCA8",type:"number",ph:"14"},{key:"mapMarkerLabel",label:"\uB9C8\uCEE4 \uB77C\uBCA8",type:"input",ph:"\uC6B0\uB9AC \uB9E4\uC7A5"}]:Ze.value?[{key:"eventId",label:"\uC774\uBCA4\uD2B8 ID",type:"event",ph:""}]:et.value?[{key:"cacheDesc",label:"\uC548\uB0B4 \uBB38\uAD6C",type:"input",ph:"\uC9C0\uAE08 \uCDA9\uC804\uD558\uBA74 10% \uBCF4\uB108\uC2A4!"},{key:"cacheAmount",label:"\uAE30\uBCF8 \uCDA9\uC804 \uAE08\uC561(\uC6D0)",type:"number",ph:""}]:tt.value?[{key:"embedCode",label:"\uC784\uBCA0\uB4DC \uCF54\uB4DC",type:"code",ph:"<iframe ...></iframe>"}]:[]}),lt=r(()=>{var t;const e=(t=a.value)==null?void 0:t.eventId;return e&&(Array.isArray(I)?I:[]).find(o=>String(o.eventId)===String(e))||null}),xe=async()=>{if(await Le(),x.value){const e=new Date,t=o=>String(o).padStart(2,"0");l.dispCode=`DP_${String(e.getFullYear()).slice(2)}${t(e.getMonth()+1)}${t(e.getDate())}_${t(e.getHours())}${t(e.getMinutes())}${t(e.getSeconds())}`}Object.keys(g).forEach(e=>delete g[e])};Ce(async()=>{await ze(),we(),await te(),await Ee(),xe()}),Q(()=>u.reloadTrigger,async(e,t)=>{e===t||e===0||(await te(),xe())});const at=async()=>{var o,i;if(Object.keys(g).forEach(n=>delete g[n]),l.dispCode||(g.dispCode="\uD328\uB110\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),l.name||(g.name="\uD328\uB110\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),l.areaId||(g.areaId="\uC18C\uC18D \uC601\uC5ED\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."),Object.keys(g).length){c("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}const e=x.value;if(await Z(e?"\uB4F1\uB85D":"\uC800\uC7A5",e?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const n=d.map(C=>({...C})),p={...l,rows:n};p.panelId=l.dispId||l.panelId||null,p.panelNm=l.name||l.panelNm,p.panelTypeCd=l.layoutType||l.panelTypeCd,p.dispPanelStatusCd=l.status||l.dispPanelStatusCd,p.visibilityTargets=l.panelVisibilityTargets||l.visibilityTargets,p.useStartDate=l.useStartDate,p.useEndDate=l.useEndDate,p.pathId=l.pathId,p.areaId=l.areaId||null,p.contentJson=JSON.stringify({rows:n});const v=await(e?boApiSvc.dpPanel.create(p,"\uC804\uC2DC\uD328\uB110\uAD00\uB9AC","\uB4F1\uB85D"):boApiSvc.dpPanel.update(p.panelId,p,"\uC804\uC2DC\uD328\uB110\uAD00\uB9AC","\uC800\uC7A5"));c&&c(e?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),u.navigate&&u.navigate("dpDispPanelMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const p=((i=(o=n.response)==null?void 0:o.data)==null?void 0:i.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";c&&c(p,"error",0)}},nt=async()=>{var t,o;if(!(x.value||!await Z("\uC0AD\uC81C","\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")))try{await boApiSvc.dpPanel.remove(l.dispId||l.panelId,"\uC804\uC2DC\uD328\uB110\uAD00\uB9AC","\uC0AD\uC81C"),c("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),u.navigate("dpDispPanelMng",{reload:!0})}catch(i){console.error("[catch-info]",i);const n=((o=(t=i.response)==null?void 0:t.data)==null?void 0:o.message)||i.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";c&&c(n,"error",0)}},_=b({show:!1,tabLabel:""}),rt=(e,t)=>{_.tabLabel=t,_.show=!0},W=()=>{_.show=!1},st=e=>{const t=e==null?void 0:e.action,o=((e==null?void 0:e.target)||"").trim(),i=(e==null?void 0:e.widget)||{};if(!(!t||t==="none")){if(t==="navigate"){if(!o){c&&c("\uC774\uB3D9 \uB300\uC0C1(\uACBD\uB85C)\uC774 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error");return}const p="?"+o.replace(/^[#?]/,"").replace(/^\//,"");window.open("index.html"+p,"_blank");return}if(t==="url"){if(!o){c&&c("\uB9C1\uD06C URL\uC774 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error");return}const n=/^https?:\/\//i.test(o)?o:"https://"+o;window.open(n,"_blank","noopener");return}if(t==="event"||t==="modal"){if(i.eventId){k&&k("event",Number(i.eventId));return}if(i.productIds){const n=String(i.productIds).split(",").map(p=>p.trim()).filter(Boolean)[0];if(n){k&&k("product",Number(n));return}}c&&c(`\uD074\uB9AD \uB3D9\uC791: ${t}${o?" \u2192 "+o:""}`,"info");return}c&&c(`\uD074\uB9AD \uB3D9\uC791: ${t}${o?" \u2192 "+o:""}`,"info")}},dt=r(()=>({...l,...a.value?{...a.value}:{},status:"\uD65C\uC131"})),pt=()=>{O.isCardPreview=!0},G=()=>{O.isCardPreview=!1},ct=r(()=>{const e=w.find(t=>t.areaId===l.areaId);return e?e.areaNm:l.areaId||""}),ft=e=>{var t;return((t=m.disp_widget_types.find(o=>o.codeValue===e))==null?void 0:t.codeLabel)||e||"-"},D=b(new Set(["info","tab1"])),vt=e=>{D.has(e)?D.delete(e):D.add(e)},bt=e=>D.has(e),ut=e=>(e==null?void 0:e.widgetType)==="html_editor",yt=e=>(e==null?void 0:e.widgetType)==="file_list",gt=e=>(e==null?void 0:e.widgetType)==="image_banner",xt=e=>(e==null?void 0:e.widgetType)==="text_banner",mt=e=>["product_slider","product"].includes(e==null?void 0:e.widgetType),wt=e=>{if(!e)return[];const t=e.widgetType;return t==="image_banner"?[{key:"imageUrl",label:"\uC774\uBBF8\uC9C0 URL",type:"input",ph:"https://..."},{key:"altText",label:"Alt \uD14D\uC2A4\uD2B8",type:"input",ph:""},{key:"linkUrl",label:"\uB9C1\uD06C URL",type:"input",ph:"https://..."}]:["product_slider","product"].includes(t)?[{key:"productIds",label:"\uC0C1\uD488 ID \uBAA9\uB85D",type:"input",ph:"1, 2, 3, ..."}]:t!=null&&t.startsWith("chart_")?[{key:"chartTitle",label:"\uCC28\uD2B8 \uC81C\uBAA9",type:"input",ph:""},{key:"chartType",label:"\uCC28\uD2B8 \uC720\uD615",type:"select",options:[{v:"bar",l:"Bar"},{v:"line",l:"Line"},{v:"pie",l:"Pie"}]},{key:"chartLabels",label:"\uB77C\uBCA8 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"1\uC6D4, 2\uC6D4, 3\uC6D4"},{key:"chartValues",label:"\uAC12 (\uC27C\uD45C \uAD6C\uBD84)",type:"input",ph:"100, 200, 150"}]:t==="text_banner"?[{key:"textContent",label:"\uD14D\uC2A4\uD2B8 \uB0B4\uC6A9",type:"textarea",ph:""},{key:"bgColor",label:"\uBC30\uACBD\uC0C9",type:"color",ph:""},{key:"textColor",label:"\uAE00\uC790\uC0C9",type:"color",ph:""}]:t==="info_card"?[{key:"infoTitle",label:"\uCE74\uB4DC \uC81C\uBAA9",type:"input",ph:""},{key:"infoBody",label:"\uCE74\uB4DC \uB0B4\uC6A9",type:"textarea",ph:""}]:t==="popup"?[{key:"popupWidth",label:"\uD31D\uC5C5 \uB108\uBE44(px)",type:"number",ph:""},{key:"popupHeight",label:"\uD31D\uC5C5 \uB192\uC774(px)",type:"number",ph:""},{key:"imageUrl",label:"\uD31D\uC5C5 \uC774\uBBF8\uC9C0 URL",type:"input",ph:"https://..."},{key:"linkUrl",label:"\uB9C1\uD06C URL",type:"input",ph:""}]:t==="file"?[{key:"fileUrl",label:"\uD30C\uC77C URL",type:"input",ph:"https://..."},{key:"fileLabel",label:"\uD45C\uC2DC \uB808\uC774\uBE14",type:"input",ph:"\uB2E4\uC6B4\uB85C\uB4DC"}]:t==="coupon"?[{key:"couponCode",label:"\uCFE0\uD3F0 \uCF54\uB4DC",type:"input",ph:"COUPON_CODE"},{key:"couponDesc",label:"\uCFE0\uD3F0 \uC124\uBA85",type:"input",ph:"\uCFE0\uD3F0 \uC548\uB0B4 \uBB38\uAD6C"}]:t==="html_editor"||t==="file_list"?[]:t==="cond_product"?[{key:"condSite",label:"\uC0AC\uC774\uD2B8 \uC870\uAC74",type:"input",ph:"\uC0AC\uC774\uD2B8 \uCF54\uB4DC (\uBE44\uC6CC\uB450\uBA74 \uC804\uCCB4)"},{key:"condUser",label:"\uC0AC\uC6A9\uC790 \uC870\uAC74",type:"select",options:[{v:"",l:"\uC804\uCCB4"},{v:"login",l:"\uB85C\uADF8\uC778"},{v:"nologin",l:"\uBE44\uB85C\uADF8\uC778"},{v:"VIP",l:"VIP"},{v:"\uC6B0\uC218",l:"\uC6B0\uC218"},{v:"\uC77C\uBC18",l:"\uC77C\uBC18"}]},{key:"condCategory",label:"\uCE74\uD14C\uACE0\uB9AC \uC870\uAC74",type:"input",ph:"\uCE74\uD14C\uACE0\uB9AC ID (\uC27C\uD45C \uAD6C\uBD84)"},{key:"condBrand",label:"\uBE0C\uB79C\uB4DC \uC870\uAC74",type:"input",ph:"\uBE0C\uB79C\uB4DC\uBA85 (\uC27C\uD45C \uAD6C\uBD84)"},{key:"condSort",label:"\uC815\uB82C \uAE30\uC900",type:"select",options:[{v:"newest",l:"\uCD5C\uC2E0\uC21C"},{v:"popular",l:"\uC778\uAE30\uC21C"},{v:"price_asc",l:"\uAC00\uACA9 \uB0AE\uC740\uC21C"},{v:"price_desc",l:"\uAC00\uACA9 \uB192\uC740\uC21C"},{v:"discount",l:"\uD560\uC778\uC728\uC21C"}]},{key:"condLimit",label:"\uD45C\uC2DC \uAC1C\uC218",type:"number",ph:"8"}]:t==="event_banner"?[{key:"eventId",label:"\uC774\uBCA4\uD2B8 ID",type:"event",ph:""}]:t==="cache_banner"?[{key:"cacheDesc",label:"\uC548\uB0B4 \uBB38\uAD6C",type:"input",ph:"\uC9C0\uAE08 \uCDA9\uC804\uD558\uBA74 10% \uBCF4\uB108\uC2A4!"},{key:"cacheAmount",label:"\uAE30\uBCF8 \uCDA9\uC804 \uAE08\uC561(\uC6D0)",type:"number",ph:""}]:t==="widget_embed"?[{key:"embedCode",label:"\uC784\uBCA0\uB4DC \uCF54\uB4DC",type:"code",ph:"<iframe ...></iframe>"}]:[]},ht=e=>{const t=e==null?void 0:e.eventId;return t&&(Array.isArray(I)?I:[]).find(o=>String(o.eventId)===String(t))||null},S=e=>{try{return JSON.parse((e==null?void 0:e.fileListJson)||"[]")}catch{return[]}},$=e=>{e.fileListJson=JSON.stringify([...S(e),{name:"",url:""}])},H=(e,t)=>{e.fileListJson=JSON.stringify(S(e).filter((o,i)=>i!==t))},me=(e,t,o,i)=>{const n=S(e);n[t]={...n[t],[o]:i},e.fileListJson=JSON.stringify(n)},kt=(e,t)=>{const o=e+t;if(o<0||o>=d.length)return;const i={...d[e]},n={...d[o]};Object.assign(d[e],n),Object.assign(d[o],i),window.safeArrayUtils.safeForEach(d,(p,v)=>{p.sortOrder=v+1})},It=()=>{if(d.length>=z){c(`\uC704\uC82F\uC740 \uCD5C\uB300 ${z}\uAC1C\uAE4C\uC9C0 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`,"error");return}d.push(M({sortOrder:d.length+1}));const e="tab"+d.length;s.tab=e,D.add(e)},At=e=>{if(e===0||d.length<=1)return;const t=A.value;d.splice(e,1),window.safeArrayUtils.safeForEach(d,(o,i)=>{o.sortOrder=i+1}),D.delete("tab"+(d.length+1)),t!==null&&t>=d.length&&(s.tab="tab"+d.length)},Dt=r(()=>window.visibilityUtil.allOptions()),Rt=e=>{if(!a.value)return;const t=window.visibilityUtil.parse(a.value.visibilityTargets),o=t.indexOf(e);if(o>=0?t.splice(o,1):t.push(e),e==="PUBLIC"&&o<0){a.value.visibilityTargets="^PUBLIC^";return}const i=window.safeArrayUtils.safeFilter(t,n=>n!=="PUBLIC"||e==="PUBLIC");a.value.visibilityTargets=window.visibilityUtil.serialize(i)},Ct=[{code:"PLAN",label:"\uC900\uBE44/\uACC4\uD68D"},{code:"DEV",label:"DEV"},{code:"TEST",label:"TEST"},{code:"PROD",label:"PROD"}],Lt=r(()=>Ct.map(e=>({value:e.code,label:e.label}))),Tt=e=>{if(!a.value)return;const t=a.value.dispEnv.split("^").filter(i=>i&&i!=="NONE"),o=t.indexOf(e);o>=0?t.splice(o,1):t.push(e),a.value.dispEnv=t.length>0?"^"+t.join("^")+"^":"^NONE^"},Pt=e=>{const t=l.panelDispEnv.split("^").filter(i=>i&&i!=="NONE"),o=t.indexOf(e);o>=0?t.splice(o,1):t.push(e),l.panelDispEnv=t.length>0?"^"+t.join("^")+"^":"^NONE^"},Mt=e=>{const t=window.visibilityUtil.parse(l.panelVisibilityTargets),o=t.indexOf(e);if(o>=0?t.splice(o,1):t.push(e),e==="PUBLIC"&&o<0){l.panelVisibilityTargets="^PUBLIC^";return}const i=window.safeArrayUtils.safeFilter(t,n=>n!=="PUBLIC"||e==="PUBLIC");l.panelVisibilityTargets=window.visibilityUtil.serialize(i)},T=b({libs:[],displays:[],areaCodes:[]}),we=async()=>{var e,t;if(!T.libs.length)try{const o=await boApiSvc.dpWidgetLib.getPage({pageNo:1,pageSize:1e4},"\uC804\uC2DC\uD328\uB110\uAD00\uB9AC","\uC704\uC82FLib\uC870\uD68C");T.libs=(((t=(e=o.data)==null?void 0:e.data)==null?void 0:t.pageList)||[]).map(i=>{let n={};try{n=JSON.parse(i.widgetConfigJson||"{}")}catch{}return{...n,libId:i.widgetLibId,libCode:i.widgetCode,name:i.widgetNm,widgetType:i.widgetTypeCd,desc:i.widgetLibDesc,tags:n.tags||"",status:i.useYn==="Y"?"\uD65C\uC131":"\uBE44\uD65C\uC131",thumbnailUrl:i.thumbnailUrl}})}catch(o){console.error("[fnLoadPickLibs]",o)}},zt=async()=>{var e,t;try{const o=await boApiSvc.dpPanel.getPage({pageNo:1,pageSize:1e4},"\uC804\uC2DC\uD328\uB110\uAD00\uB9AC","\uD328\uB110\uC870\uD68C");T.displays=(((t=(e=o.data)==null?void 0:e.data)==null?void 0:t.pageList)||[]).map(i=>{const n=coUtil.cofParsePanelRows(i.contentJson),p=w.find(v=>v.areaId===i.areaId);return{dispId:i.panelId,name:i.panelNm,area:p?p.areaCd:"",status:coUtil.cofPanelStatusLabel(i.dispPanelStatusCd),rows:n}}),T.areaCodes=w.map(i=>({codeValue:i.areaCd,codeLabel:i.areaNm}))}catch(o){console.error("[fnLoadPickPanels]",o)}},he=e=>{!Array.isArray(e)||!e.length||(window.safeArrayUtils.safeForEach(e,t=>{d.length>=z||d.push({...M(),...t,sortOrder:d.length+1})}),c&&c(`${e.length}\uAC1C \uC804\uC2DC\uD56D\uBAA9\uC744 \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.`,"info"),s.rowCopyOpen=!1)},Et=e=>{a.value&&(we(),s.libPickMode=e,s.libPickOpen=!0)},ke=e=>{if(s.libPickOpen=!1,!!a.value)if(s.libPickMode==="copy"){const t=a.value,o={widgetNm:t.widgetNm,sortOrder:t.sortOrder};Object.assign(t,{...e,...o}),c&&c(`[${e.name}] \uB0B4\uC6A9\uC744 \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.`,"info")}else a.value.refLibId=e.libId,a.value.refLibCode=e.libCode||"",a.value.refLibName=e.name||"",c&&c(`[${e.name}] \uCC38\uC870\uB85C \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"info")},_t=Vue.toRef(s,"libPickMode"),St=Vue.toRef(s,"libPickOpen"),Nt=Vue.toRef(s,"previewPaneWidth"),Ot=Vue.toRef(s,"rowCopyOpen"),Ut=Vue.toRef(s,"showComponentTooltip"),J=Vue.toRef(s,"viewAll"),j=r(()=>u.dtlMode==="view"),Ie=()=>{const e=new URLSearchParams;return e.set("page","dpDispPanelDtl"),e.set("id",l.dispId||l.panelId),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},Bt=()=>{try{window.coExtSdk.shareKakao({title:`\uC804\uC2DC\uD328\uB110 ${l.dispId||l.panelId} - ShopJoy BO`,description:l.name||l.panelNm||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:Ie()})}catch(e){c(e.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},Ft=async()=>{try{await navigator.clipboard.writeText(Ie()),c("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){c(e.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},Ae=X(null),q=X(!1),Yt=async()=>{q.value=!0;try{const e=coUtil.cofBuildExportFilename(`\uC804\uC2DC\uD328\uB110\uC0C1\uC138_${l.dispId||l.panelId||"new"}.pdf`);await window.boUtil.bofExportPdf(Ae.value,e,c)}finally{q.value=!1}},R={};R.fileListGrid=[{key:"name",label:"\uD30C\uC77C\uBA85",style:"width:200px;",editIntercept:{placeholder:"\uD30C\uC77C\uBA85.pdf",onInput:(e,t,o)=>V(o,"name",t)}},{key:"url",label:"URL / \uACBD\uB85C",editIntercept:{placeholder:"https://... \uB610\uB294 /files/sample.pdf",onInput:(e,t,o)=>V(o,"url",t)}},{type:"actions",actions:[{label:"\u2715",style:"background:none;border:1px solid #fca5a5;border-radius:4px;color:#ef4444;padding:2px 7px;font-size:12px;line-height:1.4;",onClick:(e,t)=>U("fileList-remove",t)}]}];const Vt=e=>[{key:"name",label:"\uD30C\uC77C\uBA85",style:"width:200px;",editIntercept:{placeholder:"\uD30C\uC77C\uBA85.pdf",onInput:(t,o,i)=>me(e,i,"name",o)}},{key:"url",label:"URL / \uACBD\uB85C",editIntercept:{placeholder:"https://...",onInput:(t,o,i)=>me(e,i,"url",o)}},{type:"actions",actions:[{label:"\u2715",style:"background:none;border:1px solid #fca5a5;border-radius:4px;color:#ef4444;padding:2px 7px;font-size:12px;line-height:1.4;",onClick:(t,o)=>U("fileListRow-remove",{row:e,idx:o})}]}];return R.basePanelForm=[{key:"dispCode",label:"\uD328\uB110\uCF54\uB4DC",type:"text",required:!0,placeholder:"DP_YYMMDD_HHMMSS",mono:!0},{key:"name",label:"\uD328\uB110\uBA85",type:"text",required:!0,placeholder:"\uD328\uB110 \uC774\uB984"},{key:"status",label:"\uC0C1\uD0DC",type:"select",options:()=>m.active_statuses}],R.pathAreaForm=[{key:"pathId",label:"\uD45C\uC2DC\uACBD\uB85C",type:"slot",name:"pathPick",hint:"\uC608: FO.\uBAA8\uBC14\uC77C\uBA54\uC778"},{key:"areaId",label:"\uC18C\uC18D \uC601\uC5ED",type:"select",required:!0,options:()=>w.map(e=>({value:e.areaId,label:e.areaNm+" ("+e.areaCd+")"})),nullLabel:"\uC120\uD0DD",hint:"\uD328\uB110\uC774 \uD45C\uC2DC\uB420 \uC804\uC2DC\uC601\uC5ED (dp_area)"}],R.widgetRowForm=[{key:"widgetType",label:"\uC704\uC82F \uC720\uD615",type:"select",options:()=>m.disp_widget_types},{key:"sortOrder",label:"\uB178\uCD9C \uC21C\uC11C",type:"number",min:1}],R.sectionInfoForm=[{key:"dispCode",label:"\uD328\uB110\uCF54\uB4DC",type:"text",required:!0,placeholder:"DP_YYMMDD_HHMMSS",mono:!0},{key:"name",label:"\uD328\uB110\uBA85",type:"text",required:!0,placeholder:"\uD328\uB110 \uC774\uB984"},{key:"pathId",label:"\uD45C\uC2DC\uACBD\uB85C",type:"slot",name:"pathPick2",hint:"\uC608: FO.\uBAA8\uBC14\uC77C\uBA54\uC778"},{key:"areaId",label:"\uC18C\uC18D \uC601\uC5ED",type:"select",required:!0,options:()=>w.map(e=>({value:e.areaId,label:e.areaNm+" ("+e.areaCd+")"})),nullLabel:"\uC120\uD0DD",hint:"\uD328\uB110\uC774 \uD45C\uC2DC\uB420 \uC804\uC2DC\uC601\uC5ED (dp_area)"}],{modals:O,columns:R,pathPickModal:L,form:l,errors:g,rows:d,codes:m,preview:_,pickData:T,handleBtnAction:U,handleSelectAction:Pe,fnCallbackModal:Me,cfIsNew:x,cfTabLabels:re,cfTabRowMap:se,cfActiveRowIdx:A,cfActiveRow:a,cfActiveTabLabel:Ue,cfDisplayRows:it,cfRelatedEvent:lt,cfFileListItems:E,cfPreviewWidget:dt,cfCurrentAreaLabel:ct,cfDtlMode:j,cfPreviewFrameWidth:Se,cfVisibilityOptions:Dt,cfDispEnvMcsOptions:Lt,tab:Te,previewMode:ee,libPickMode:_t,libPickOpen:St,previewPaneWidth:Nt,rowCopyOpen:Ot,viewAll:J,showComponentTooltip:Ut,MAX_WIDGETS:z,PREVIEW_MODES:B,fnPathLabel:_e,fnWLabel:ft,fnRowIsHtmlEditor:ut,fnRowIsFileList:yt,fnRowIsImage:gt,fnRowIsText:xt,fnRowIsProduct:mt,fnGetDisplayRows:wt,fnGetRelatedEvent:ht,fnGetFileListItems:S,fnFileListColsForRow:Vt,fnAddFileItemAt:$,fnRemoveFileItemAt:H,isSectionExpanded:bt,cfIsProduct:de,cfIsImage:pe,cfIsText:ce,cfIsFileList:fe,cfIsHtmlEditor:ve,addFileItem:ye,removeFileItem:ge,updateFileItem:V,moveRowAt:kt,fnAddFileItemAt:$,fnRemoveFileItemAt:H,closePreview:W,closeCardPreview:G,onPreviewClick:st,showRefModal:k,handleShareKakao:Bt,handleCopyLink:Ft,pdfAreaRef:Ae,pdfExporting:q,handleExportPdf:Yt}},template:`
<div ref="pdfAreaRef">
<bo-container :title="!active ? '\uC804\uC2DC\uD328\uB110 \uC0C1\uC138' : (cfIsNew ? '\uC804\uC2DC\uD328\uB110 \uB4F1\uB85D' : (cfDtlMode ? '\uC804\uC2DC\uD328\uB110 \uC0C1\uC138' : '\uC804\uC2DC\uD328\uB110 \uC218\uC815'))"
  :title-id="!active ? '' : (cfIsNew ? '' : form.dispId)">
  <!-- ===== \u25A0. \uC601\uC5ED \uD0C0\uC774\uD2C0 (list-title) ====================================== -->
  <template #toolbar-actions>
    <div style="display:flex;align-items:center;gap:6px;">
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
      <button @click="handleBtnAction('form-toggleViewAll')"
        style="font-size:11px;padding:4px 12px;border:1px solid #d0d0d0;border-radius:14px;background:#fff;color:#666;display:flex;align-items:center;gap:5px;transition:all .15s;"
        :style="viewAll ? 'background:#f5f0ff;border-color:#b39ddb;color:#6a1b9a;' : ''"
        title="\uD0ED \uBCF4\uAE30 / \uC804\uCCB4 \uD3BC\uCE58\uAE30 \uC804\uD658">
        <span>{{ viewAll ? '\u2630' : '\u229E' }}</span>
        {{ viewAll ? '\uD0ED \uBCF4\uAE30' : '\uD3BC\uCE58\uAE30' }}
      </button>
      <button v-if="!cfDtlMode" class="btn btn-sm" :disabled="cfIsNew"
        :style="cfIsNew ? 'background:#f5f5f5;border:1px solid #ddd;color:#bbb;cursor:not-allowed;' : 'background:#e3f2fd;border:1px solid #90caf9;color:#1565c0;font-weight:600;'"
        :title="cfIsNew ? '\uC800\uC7A5 \uD6C4 \uC804\uC2DC\uD56D\uBAA9\uC744 \uBCF5\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.' : ''"
        @click="handleBtnAction('rowCopyModal-open')">
        \u{1F4C4} \uC804\uC2DC\uD56D\uBAA9 \uBCF5\uC0AC
      </button>
      <button v-if="active ? (!cfDtlMode) : false" class="btn btn_save" @click="handleBtnAction('form-save')" style="font-weight:700;">
        \u{1F4BE} \uC800\uC7A5
      </button>
    </div>
  </template>
  <!-- ===== \u25A1. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
  <!-- ===== \u25A0. \uCE74\uB4DC \uC601\uC5ED =================================================== -->
  <div class="card">
    <!-- ===== \u25A0.\u25A0. \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \uD0ED \uBAA8\uB4DC \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ========== -->
    <div v-if="!viewAll" style="display:flex;gap:0;flex-direction:column;min-height:400px;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC548\uB0B4 \uBC30\uB108 =============================================== -->
      <div style="background:linear-gradient(135deg,#e3f2fd 0%,#f3e5f5 100%);border-bottom:1px solid #90caf9;padding:12px 14px;font-size:11px;color:#444;line-height:1.6;">
        <div style="font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:6px;"><span> \u2139\uFE0F \uC5EC\uBD80 \uBC0F \uAE30\uAC04 \uAD00\uB9AC \uC548\uB0B4 </span></div>
        <ul style="margin:0;padding-left:18px;">
          <li>\uBC30\uCE58\uB85C \uB9E4\uC2DC 55\uBD84\uC5D0 <b> \uC804\uC2DC\uC5EC\uBD80, \uC0AC\uC6A9\uC5EC\uBD80 </b> \uC815\uBCF4\uAC00 \uC790\uB3D9 \uBC18\uC601\uB429\uB2C8\uB2E4</li>
          <li>\uC804\uC2DC\uAD00\uB9AC\uC815\uBCF4 \uC218\uC815 \uD6C4 \uC800\uC7A5\uD558\uBA74 <b> \uC804\uC2DC\uC5EC\uBD80, \uC0AC\uC6A9\uC5EC\uBD80 </b> \uC815\uBCF4\uAC00 \uC989\uC2DC \uBC18\uC601\uB429\uB2C8\uB2E4</li>
        </ul>
      </div>
      <div style="display:flex;gap:0;flex:1;overflow:hidden;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC88C\uCE21 \uD0ED \uBA54\uB274 (UI \uC2A4\uD0C0\uC77C) ================================== -->
        <div style="width:160px;min-width:160px;background:#f4f5f8;border-right:1px solid #e8ebef;padding:12px 8px;flex-shrink:0;">
          <div v-for="(t, tIdx) in cfTabLabels" :key="t?.key"
            @click="handleSelectAction('tab-select', t.key)"
            :style="{
            display:'flex',alignItems:'center',justifyContent:'space-between',
            padding:'9px 12px',borderRadius:'8px',cursor:'pointer',marginBottom:'6px',
            fontSize:'12px',fontWeight: tab===t.key ? 700 : 500,
            background: tab===t.key ? '#fff' : 'transparent',
            color: tab===t.key ? '#e8587a' : '#555',
            border: '1px solid '+(tab===t.key ? '#e8587a' : 'transparent'),
            transition:'all .15s',
            }">
            <span v-if="t.key==='info'">\u{1F4CB} <b> \uD328\uB110\uAE30\uBCF8\uC815\uBCF4 </b></span>
            <span v-else>{{ t.label }}</span>
            <span v-if="t.key !== 'info' ? (tab===t.key) : false" style="display:flex;gap:2px;">
              <button @click.stop="handleSelectAction('tab-move', -1)" :disabled="cfActiveRowIdx===0" title="\uC704\uB85C"
                style="font-size:9px;border:1px solid #e0e0e0;border-radius:3px;background:#fff;padding:1px 4px;line-height:1.2;color:#888;"
                :style="cfActiveRowIdx===0?'opacity:0.3;cursor:default;':''">
                \u25B2
              </button>
              <button @click.stop="handleSelectAction('tab-move', 1)" :disabled="cfActiveRowIdx===rows.length-1" title="\uC544\uB798\uB85C"
                style="font-size:9px;border:1px solid #e0e0e0;border-radius:3px;background:#fff;padding:1px 4px;line-height:1.2;color:#888;"
                :style="cfActiveRowIdx===rows.length-1?'opacity:0.3;cursor:default;':''">
                \u25BC
              </button>
            </span>
            <button v-if="tIdx >= 2 ? (tab!==t.key) : false" @click.stop="handleSelectAction('panelItems-remove', tIdx-1)" title="\uC804\uC2DC\uD56D\uBAA9 \uC0AD\uC81C" style="font-size:11px;border:none;background:none;color:#bbb;line-height:1;padding:0 2px;" @mouseenter="$event.currentTarget.style.color='#e8587a'" @mouseleave="$event.currentTarget.style.color='#bbb'">
              \u2715
            </button>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCD94\uAC00 \uBC84\uD2BC (\uC544\uC8FC \uC791\uC740 \uBC84\uD2BC) =============================== -->
          <div v-if="rows.length < MAX_WIDGETS" style="margin-top:8px;display:flex;justify-content:center;">
            <button @click="handleBtnAction('panelItems-add')" :disabled="cfIsNew"
              :title="cfIsNew ? '\uC800\uC7A5 \uD6C4 \uC804\uC2DC\uD56D\uBAA9\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.' : ''"
              :style="cfIsNew ? 'padding:2px 8px;border:1px solid #e0e0e0;background:#f5f5f5;color:#bbb;border-radius:6px;font-size:10px;font-weight:600;line-height:1.4;cursor:not-allowed;' : 'padding:2px 8px;border:1px solid #90caf9;background:#e3f2fd;color:#1565c0;border-radius:6px;font-size:10px;font-weight:600;line-height:1.4;'">
              \u271A \uC804\uC2DC\uD56D\uBAA9 \uCD94\uAC00
            </button>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC6B0\uCE21 \uCF58\uD150\uCE20 + \uBBF8\uB9AC\uBCF4\uAE30 ===================================== -->
        <div style="flex:1;display:flex;overflow:hidden;min-width:0;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED (75%) ====================================== -->
          <div style="flex:3;padding-left:20px;padding-top:4px;overflow-y:auto;min-width:0;">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAE30\uBCF8\uC815\uBCF4 ========================================== -->
            <div v-show="tab==='info'">
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC124\uC815 ========================================== -->
              <div class="bo-form-compact" style="margin-bottom:14px;padding:14px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
                <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;display:flex;align-items:center;gap:6px;">
                  <span style="display:inline-block;width:4px;height:16px;background:#1d4ed8;border-radius:2px;"></span>
                  \uC124\uC815
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD328\uB110\uCF54\uB4DC/\uD328\uB110\uBA85/\uC0C1\uD0DC (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============ -->
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ====================================== -->
                <bo-form-area plain-readonly :columns="columns.basePanelForm" :form="form" :errors="errors"
                  :readonly="cfDtlMode" :cols="2" compact :show-actions="false" />
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD45C\uC2DC\uACBD\uB85C + \uD3EC\uD568\uB41C \uD654\uBA74\uC601\uC5ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ======== -->
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ====================================== -->
                <bo-form-area plain-readonly :columns="columns.pathAreaForm" :form="form" :errors="errors"
                  :readonly="cfDtlMode" :cols="2" compact :show-actions="false">
                  <template #pathPick>
                    <div v-if="cfDtlMode" class="readonly-field-plain">
                      {{ fnPathLabel(form.pathId) || '-' }}
                    </div>
                    <div v-else :style="{padding:'7px 10px',border:'1px solid #e5e7eb',borderRadius:'6px',fontSize:'12px',background:'#f5f5f7',color:form.pathId!=null?'#374151':'#9ca3af',fontWeight:form.pathId!=null?600:400,display:'flex',alignItems:'flex-end',gap:'6px',fontFamily:'monospace'}">
                      <span style="flex:1;">{{ fnPathLabel(form.pathId) || '\uACBD\uB85C \uC120\uD0DD...' }}</span>
                      <button v-if="form.pathId != null" type="button" title="\uC120\uD0DD \uD574\uC81C" @click="handleBtnAction('path-clear')"
                        style="background:none;border:none;padding:0 2px 2px;color:#999;cursor:pointer;font-size:13px;line-height:1;flex-shrink:0;">
                        x
                      </button>
                      <button type="button" @click="handleBtnAction('pathModal-open', 'form')" title="\uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD"
                        :style="{cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',width:'24px',height:'24px',background:'#fff',border:'1px solid #d1d5db',borderRadius:'4px',fontSize:'12px',color:'#6b7280',padding:'0'}"
                        @mouseover="$event.currentTarget.style.background='#eef2ff'"
                        @mouseout="$event.currentTarget.style.background='#fff'">
                        \u{1F50D}
                      </button>
                    </div>
                  </template>
                </bo-form-area>
                <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:6px;">\u{1F532} \uC704\uC82F \uB808\uC774\uC544\uC6C3</div>
                <div v-if="cfDtlMode" class="readonly-field-plain" style="margin-bottom:8px;">
                  {{ form.layoutType==='grid' ? ('\uADF8\uB9AC\uB4DC \xB7 ' + form.gridCols + '\uC5F4') : '\uC790\uC720 \uBC30\uCE58' }}
                </div>
                <div v-else style="display:flex;align-items:flex-end;gap:16px;margin-bottom:8px;">
                  <div style="flex:0 0 auto;">
                    <label class="form-label">\uD45C\uC2DC\uBC29\uC2DD</label>
                    <div style="display:flex;border:1px solid #d1d5db;border-radius:6px;overflow:hidden;max-width:200px;">
                      <button v-for="o in codes.layout_types" :key="o?.codeValue"
                        @click="handleBtnAction('layout-setType', o.codeValue)"
                        type="button"
                        style="flex:1;padding:6px 0;font-size:12px;border:none;border-left:1px solid #d1d5db;transition:all .15s;"
                        :style="[o.codeValue==='grid'?'border-left:none;':'', form.layoutType===o.codeValue ? 'background:#1d4ed8;color:#fff;font-weight:700;' : 'background:#fff;color:#6b7280;']">
                        {{ o.codeValue==='grid' ? '\u{1F532} ' : '\u{1F9E9} ' }}{{ o.codeLabel }}
                      </button>
                    </div>
                  </div>
                  <div style="flex:0 0 auto;" v-if="form.layoutType==='grid'">
                    <label class="form-label">\uC5F4\uC218 <span style="font-size:10px;color:#aaa;"> (\uC704\uC82F \uBC30\uCE58 \uC5F4 \uAC1C\uC218) </span></label>
                    <div style="display:flex;align-items:center;gap:6px;">
                      <div style="display:flex;border:1px solid #d1d5db;border-radius:6px;overflow:hidden;">
                        <button v-for="n in [1,2,3,4]" :key="n" type="button"
                          @click="handleBtnAction('layout-setGridCols', n)"
                          style="padding:6px 12px;font-size:12px;border:none;border-left:1px solid #d1d5db;transition:all .15s;"
                          :style="[n===1?'border-left:none;':'', form.gridCols===n ? 'background:#1d4ed8;color:#fff;font-weight:700;' : 'background:#fff;color:#6b7280;']">
                          {{ n }}
                        </button>
                      </div>
                      <input type="number" v-model.number="form.gridCols" min="1" max="32"
                        style="width:64px;font-size:13px;padding:5px 8px;border:1px solid #d1d5db;border-radius:6px;text-align:center;" />
                      <span style="font-size:12px;color:#aaa;">\uC5F4</span>
                    </div>
                  </div>
                  <div style="flex:0 0 auto;" v-else>
                    <label class="form-label">\uBC30\uCE58</label>
                    <span style="font-size:12px;color:#6b7280;padding:6px 0;display:block;">\uC790\uC720 \uBC30\uCE58 (\uC5F4\uC218 \uC5C6\uC74C)</span>
                  </div>
                </div>
                <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:6px;">\u{1F4C5} \uC0AC\uC6A9\uAE30\uAC04</div>
                <div v-if="cfDtlMode" class="readonly-field-plain">
                  {{ form.useStartDate || '-' }} ~ {{ form.useEndDate || '-' }}
                </div>
                <div v-else style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                  <input type="date" class="form-control" v-model="form.useStartDate" style="width:150px;margin:0;" />
                  <span style="color:#aaa;font-size:13px;padding:0 4px;">~</span>
                  <input type="date" class="form-control" v-model="form.useEndDate" style="width:150px;margin:0;" />
                </div>
              </div>
              <!-- ===== /\uC124\uC815 ======================================================== -->
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC81C\uBAA9 ========================================== -->
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
                  <input v-model="form.title" type="text" placeholder="\uD0C0\uC774\uD2C0 \uD14D\uC2A4\uD2B8 \uC785\uB825"
                    style="flex:1;padding:6px 10px;border:1px solid #d0d0d0;border-radius:6px;font-size:13px;" />
                </div>
              </div>
              <!-- ===== /\uC81C\uBAA9 ======================================================== -->
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB0B4\uC6A9 (HTML \uC124\uBA85) ================================ -->
              <div style="margin-bottom:14px;padding:14px;background:#fff8fa;border:1px solid #fce4ec;border-radius:8px;">
                <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:10px;display:flex;align-items:center;gap:6px;">
                  <span style="display:inline-block;width:4px;height:16px;background:#e8587a;border-radius:2px;"></span>
                  \uB0B4\uC6A9
                </div>
                <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:6px;">\u{1F4DD} \uD328\uB110\uCF54\uBA58\uD2B8</div>
                <div v-if="cfDtlMode"
                  style="padding:12px 14px;background:#f9f9f9;border:1px solid #e8e8e8;border-radius:6px;font-size:13px;line-height:1.7;min-height:80px;">
                  <span v-if="form.htmlDesc" v-html="form.htmlDesc"></span>
                  <span v-else style="color:#bbb;">\uB0B4\uC6A9 \uC5C6\uC74C</span>
                </div>
                <base-html-editor v-else v-model="form.htmlDesc" height="280px" />
              </div>
              <!-- ===== /\uB0B4\uC6A9 ======================================================== -->
              <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
                :edit-click="() => handleBtnAction('panel-form-edit')"
                :save-click="() => handleBtnAction('panel-form-save')"
                :delete-click="() => handleBtnAction('panel-form-delete')"
                :cancel-click="() => handleBtnAction('panel-form-cancel')"
                :close-click="() => handleBtnAction('panel-form-close')" />
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 1~5\uD589 \uCF58\uD150\uCE20 ====================================== -->
            <div v-if="cfActiveRow">
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC139\uC158 1: \uC124\uC815 ==================================== -->
              <div class="bo-form-compact" style="margin-bottom:14px;padding:14px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
                <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;display:flex;align-items:center;gap:6px;">
                  <span style="display:inline-block;width:4px;height:16px;background:#1d4ed8;border-radius:2px;"></span>
                  \uC124\uC815
                  <span v-if="!cfDtlMode" style="margin-left:auto;display:flex;gap:6px;">
                    <button @click="handleBtnAction('libPick-open', 'copy')" :disabled="cfIsNew"
                      :title="cfIsNew ? '\uC800\uC7A5 \uD6C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.' : ''"
                      :style="cfIsNew ? 'font-size:11px;padding:4px 10px;border:1px solid #e0e0e0;background:#f5f5f5;color:#bbb;border-radius:6px;cursor:not-allowed;font-weight:600;' : 'font-size:11px;padding:4px 10px;border:1px solid #90caf9;background:#e3f2fd;color:#1565c0;border-radius:6px;font-weight:600;'">
                      \u{1F4CB} \uC704\uC82FLib\uB0B4\uC6A9\uBCF5\uC0AC
                    </button>
                    <button @click="handleBtnAction('libPick-open', 'ref')" :disabled="cfIsNew"
                      :title="cfIsNew ? '\uC800\uC7A5 \uD6C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.' : ''"
                      :style="cfIsNew ? 'font-size:11px;padding:4px 10px;border:1px solid #e0e0e0;background:#f5f5f5;color:#bbb;border-radius:6px;cursor:not-allowed;font-weight:600;' : 'font-size:11px;padding:4px 10px;border:1px solid #ce93d8;background:#f3e5f5;color:#6a1b9a;border-radius:6px;font-weight:600;'">
                      \u{1F517} \uC704\uC82FLib\uCC38\uC870
                    </button>
                  </span>
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \u{1F517} \uCC38\uC870 \uC815\uBCF4 ================================== -->
                <div v-if="cfActiveRow.refLibId"
                  style="background:linear-gradient(135deg,#f3e5f5 0%,#fff 100%);border:1px dashed #ce93d8;border-radius:10px;padding:12px 14px;margin-bottom:14px;">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                    <span style="font-size:12px;font-weight:700;color:#6a1b9a;">\u{1F517} \uC804\uC2DC\uC704\uC82FLib \uCC38\uC870 \uC911</span>
                    <button v-if="!cfDtlMode" @click="handleBtnAction('libPick-refClear')"
                      style="font-size:10px;padding:2px 8px;border:1px solid #ce93d8;background:#fff;color:#6a1b9a;border-radius:4px;">
                      \uCC38\uC870 \uD574\uC81C
                    </button>
                  </div>
                  <div style="display:flex;flex-wrap:wrap;gap:6px 14px;font-size:11px;color:#555;line-height:1.6;margin-bottom:10px;">
                    <span>
                      <b style="color:#888;">\uCC38\uC870\uAD6C\uBD84:</b>
                      <span style="background:#f3e5f5;color:#6a1b9a;border-radius:8px;padding:1px 7px;margin-left:3px;font-weight:700;">
                        \uC704\uC82FLib
                      </span>
                    </span>
                    <span v-if="cfActiveRow.refLibCode">
                      <b style="color:#888;">\uCC38\uC870\uD56D\uBAA9Code:</b>
                      <code style="background:#fff;color:#6a1b9a;padding:1px 6px;border-radius:3px;margin-left:3px;border:1px solid #e1bee7;">
                        {{ cfActiveRow.refLibCode }}
                      </code>
                    </span>
                    <span>
                      <b style="color:#888;">\uCC38\uC870\uD56D\uBAA9ID:</b>
                      <code style="background:#fff;color:#6a1b9a;padding:1px 6px;border-radius:3px;margin-left:3px;border:1px solid #e1bee7;">
                        #{{ String(cfActiveRow.refLibId).padStart(4,'0') }}
                      </code>
                    </span>
                    <span v-if="cfActiveRow.refLibName"><b style="color:#888;"> \uCC38\uC870\uBA85: </b> {{ cfActiveRow.refLibName }}</span>
                  </div>
                  <div style="background:#fff;border:1px solid #e1bee7;border-radius:8px;padding:10px;">
                    <div style="font-size:10px;color:#888;font-weight:600;margin-bottom:6px;letter-spacing:.3px;">\u25B8 \uCC38\uC870 \uB0B4\uC6A9 \uBBF8\uB9AC\uBCF4\uAE30</div>
                    <disp-x04-widget
                      :params="{ }"
                      :disp-opt="{ showBadges: true }"
                      :widget-item="pickData.libs.find(l => l.libId===cfActiveRow.refLibId) || {}" />
                  </div>
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 2\uC5F4 \uBC30\uC5F4 (\uC88C\u2192\uC6B0 \uC21C\uC11C) ========================== -->
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px 16px;align-items:start;">
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 1. \uB178\uCD9C\uC21C\uC11C + \uC804\uC2DC\uC5EC\uBD80 ======================= -->
                  <div>
                    <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:6px;">\u{1F522} \uB178\uCD9C\uC21C\uC11C / \uC804\uC2DC\uC5EC\uBD80</div>
                    <div v-if="cfDtlMode" class="readonly-field-plain">
                      {{ cfActiveRow.sortOrder }} \xB7 {{ cfActiveRow.dispYn === 'Y' ? '\uC804\uC2DC' : '\uC228\uAE40' }}
                    </div>
                    <div v-else style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
                      <input class="form-control" type="number" v-model.number="cfActiveRow.sortOrder" min="1"
                        style="width:80px;margin:0;" />
                      <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:#555;padding:5px 10px;background:#f0f0f0;border-radius:6px;">
                        <span>\uC804\uC2DC\uC5EC\uBD80</span>
                        <input type="checkbox" v-model="cfActiveRow.dispYn" :true-value="'Y'" :false-value="'N'" style="accent-color:#e8587a;" />
                        <span>{{ cfActiveRow.dispYn === 'Y' ? '\uC804\uC2DC' : '\uC228\uAE40' }}</span>
                      </label>
                      <span style="font-size:10px;color:#aaa;">(\uBC30\uCE58\uB85C \uC790\uB3D9 \uAD00\uB9AC\uB428)</span>
                    </div>
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 2. \uC804\uC2DC\uAE30\uAC04 ================================ -->
                  <div>
                    <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:6px;">
                      \u{1F4C5} \uC804\uC2DC\uAE30\uAC04
                      <span style="font-size:10px;color:#aaa;font-weight:400;">(\uBBF8\uC124\uC815 \uC2DC \uD328\uB110 \uAE30\uAC04 \uC0AC\uC6A9)</span>
                    </div>
                    <div v-if="cfDtlMode" class="readonly-field-plain">
                      {{ cfActiveRow.dispStartDt ? cfActiveRow.dispStartDt.replace('T',' ') : '\uC989\uC2DC' }} ~ {{ cfActiveRow.dispEndDt ? cfActiveRow.dispEndDt.replace('T',' ') : '\uBB34\uAE30\uD55C' }}
                    </div>
                    <div v-else style="display:flex;flex-direction:column;gap:8px;background:#f9fafb;padding:10px 12px;border-radius:6px;border:1px solid #e5e7eb;">
                      <div style="display:flex;align-items:center;gap:8px;">
                        <span style="font-size:11px;color:#888;white-space:nowrap;width:28px;">\uC2DC\uC791</span>
                        <bo-date-time-picker v-model="cfActiveRow.dispStartDt" />
                      </div>
                      <div style="display:flex;align-items:center;gap:8px;">
                        <span style="font-size:11px;color:#888;white-space:nowrap;width:28px;">\uC885\uB8CC</span>
                        <bo-date-time-picker v-model="cfActiveRow.dispEndDt" />
                      </div>
                    </div>
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 3. \uC804\uC2DC\uD658\uACBD ================================ -->
                  <div>
                    <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:6px;">\u{1F30D} \uC804\uC2DC\uD658\uACBD</div>
                    <bo-multi-check-select v-model="cfActiveRow.dispEnv" :options="cfDispEnvMcsOptions"
                      separator="^" wrap empty-value="^NONE^" placeholder="\uC804\uCCB4 \uD658\uACBD" all-label="\uC804\uCCB4 \uD658\uACBD"
                      :plain="cfDtlMode" min-width="280px" />
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 4. \uACF5\uAC1C\uB300\uC0C1 ================================ -->
                  <div>
                    <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:6px;">\u{1F512} \uACF5\uAC1C\uB300\uC0C1 (\uD558\uB098\uB77C\uB3C4 \uD574\uB2F9\uD558\uBA74 \uB178\uCD9C)</div>
                    <bo-multi-check-select v-model="cfActiveRow.visibilityTargets" :options="cfVisibilityOptions"
                      separator="^" wrap empty-value="^NONE^" placeholder="\uC804\uCCB4 \uACF5\uAC1C" all-label="\uC804\uCCB4 \uACF5\uAC1C"
                      :plain="cfDtlMode" min-width="320px" />
                    <div v-if="!cfActiveRow.visibilityTargets" style="font-size:11px;color:#d32f2f;margin-top:4px;">
                      \u26A0 \uC120\uD0DD \uC5C6\uC74C \u2014 \uC544\uBB34\uC5D0\uAC8C\uB3C4 \uB178\uCD9C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
                    </div>
                  </div>
                </div>
              </div>
              <!-- ===== /\uC124\uC815 \uC601\uC5ED ===================================================== -->
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC139\uC158 2: \uC81C\uBAA9 (2\uC5F4) ============================== -->
              <div class="bo-form-compact" style="margin-bottom:14px;padding:14px;background:#faf8ff;border:1px solid #e9d5ff;border-radius:8px;">
                <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;display:flex;align-items:center;gap:6px;">
                  <span style="display:inline-block;width:4px;height:16px;background:#7c3aed;border-radius:2px;"></span>
                  \uC81C\uBAA9
                </div>
                <div v-if="cfDtlMode" class="readonly-field-plain">
                  {{ cfActiveRow.titleYn === 'Y' ? (cfActiveRow.title || '-') : '\uBBF8\uD45C\uC2DC' }}
                </div>
                <div v-else style="display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;align-items:start;">
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 1. \uD0C0\uC774\uD2C0 \uD45C\uC2DC \uC5EC\uBD80 ========================== -->
                  <div>
                    <div style="font-size:12px;font-weight:500;color:#555;margin-bottom:4px;">\uD0C0\uC774\uD2C0 \uD45C\uC2DC</div>
                    <div style="display:flex;align-items:center;gap:12px;height:34px;">
                      <label style="display:flex;align-items:center;gap:4px;font-size:12px;font-weight:500;color:#444;">
                        <input type="radio" v-model="cfActiveRow.titleYn" value="Y" />
                        \uD45C\uC2DC
                      </label>
                      <label style="display:flex;align-items:center;gap:4px;font-size:12px;font-weight:500;color:#444;">
                        <input type="radio" v-model="cfActiveRow.titleYn" value="N" />
                        \uBBF8\uD45C\uC2DC
                      </label>
                    </div>
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 2. \uD0C0\uC774\uD2C0 \uD14D\uC2A4\uD2B8 (\uD45C\uC2DC\uC77C \uB54C\uB9CC) ================== -->
                  <div v-if="cfActiveRow.titleYn==='Y'">
                    <div style="font-size:12px;font-weight:500;color:#555;margin-bottom:4px;">\uD0C0\uC774\uD2C0</div>
                    <input v-model="cfActiveRow.title" type="text" placeholder="\uD0C0\uC774\uD2C0 \uD14D\uC2A4\uD2B8 \uC785\uB825"
                      class="form-control" style="margin:0;" />
                  </div>
                </div>
              </div>
              <!-- ===== /\uC81C\uBAA9 \uC601\uC5ED ===================================================== -->
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC139\uC158 3: \uB0B4\uC6A9 ==================================== -->
              <div style="margin-bottom:14px;padding:14px;background:#fff8fa;border:1px solid #fce4ec;border-radius:8px;">
                <div style="font-size:13px;font-weight:700;color:#222;margin-bottom:12px;display:flex;align-items:center;gap:6px;">
                  <span style="display:inline-block;width:4px;height:16px;background:#e8587a;border-radius:2px;flex-shrink:0;"></span>
                  \uB0B4\uC6A9
                  <span style="margin-left:auto;display:inline-flex;align-items:center;gap:6px;flex-shrink:0;">
                    <span style="font-size:11px;font-weight:600;color:#888;white-space:nowrap;">\uC704\uC82F\uC720\uD615</span>
                    <span v-if="cfDtlMode" style="font-size:13px;font-weight:600;color:#374151;">{{ fnWLabel(cfActiveRow.widgetType) }}</span>
                    <select v-else class="form-control" v-model="cfActiveRow.widgetType"
                      style="margin:0;font-size:13px;padding:4px 10px;min-height:28px;border-radius:5px;min-width:160px;">
                      <option v-for="w in codes.disp_widget_types" :key="w?.codeValue" :value="w.codeValue">{{ w.codeLabel }}</option>
                    </select>
                  </span>
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. HTML \uC5D0\uB514\uD130 (Toast UI) ======================= -->
                <div v-if="cfIsHtmlEditor" style="margin-bottom:20px;">
                  <div v-if="cfDtlMode"
                    style="padding:12px 14px;background:#f9f9f9;border:1px solid #e8e8e8;border-radius:6px;font-size:13px;line-height:1.7;min-height:80px;">
                    <span v-if="cfActiveRow.htmlContent" v-html="cfActiveRow.htmlContent"></span>
                    <span v-else style="color:#bbb;">\uB0B4\uC6A9 \uC5C6\uC74C</span>
                  </div>
                  <base-html-editor v-else v-model="cfActiveRow.htmlContent" height="280px" />
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD30C\uC77C\uBAA9\uB85D ====================================== -->
                <div v-else-if="cfIsFileList" style="margin-bottom:20px;">
                  <div v-if="cfDtlMode">
                    <div v-if="cfFileListItems.length===0" style="color:#bbb;padding:12px 0;font-size:13px;">\uCCA8\uBD80\uD30C\uC77C \uC5C6\uC74C</div>
                    <div v-for="(f, i) in cfFileListItems" :key="i"
                      style="display:flex;align-items:center;gap:8px;padding:7px 10px;border:1px solid #e8e8e8;border-radius:6px;margin-bottom:6px;background:#fafafa;">
                      <span style="font-size:16px;">\u{1F4CE}</span>
                      <a v-if="f.url" :href="f.url" target="_blank"
                        style="font-size:13px;color:#2563eb;text-decoration:none;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                        {{ f.name || f.url }}
                      </a>
                      <span v-else style="font-size:13px;color:#555;flex:1;">{{ f.name }}</span>
                    </div>
                  </div>
                  <div v-else>
                    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================= -->
                    <bo-grid bare :columns="columns.fileListGrid" :rows="cfFileListItems"
                      empty-text="\uCCA8\uBD80\uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC544\uB798 [+ \uD30C\uC77C \uCD94\uAC00] \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694."
                      style="margin-bottom:8px;" />
                    <button @click="handleBtnAction('fileList-add')"
                      style="font-size:12px;padding:5px 12px;border:1px dashed #aaa;border-radius:5px;background:#fafafa;color:#555;">
                      + \uD30C\uC77C \uCD94\uAC00
                    </button>
                  </div>
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC77C\uBC18 \uD45C\uD604 \uC124\uC815 (2\uC5F4 \uADF8\uB9AC\uB4DC, \uC870\uAC74\uC0C1\uD488 \uD3EC\uD568) ============== -->
                <div v-else-if="cfDisplayRows.length===0" style="color:#bbb;text-align:center;padding:20px 0 24px;font-size:13px;">
                  \uC704\uC82F \uC720\uD615\uC744 \uC120\uD0DD\uD558\uBA74 \uD45C\uD604 \uC124\uC815 \uD56D\uBAA9\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. 2\uC5F4 \uD544\uB4DC \uADF8\uB9AC\uB4DC (\uC88C\u2192\uC6B0 \uC21C\uC11C, \uAE34 \uC785\uB825\uC740 \uC804\uCCB4 \uD3ED) ========= -->
                <div v-else style="display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;align-items:start;margin-bottom:20px;">
                  <div v-for="row in cfDisplayRows" :key="row?.key"
                    :style="{ gridColumn: (row.type==='textarea'||row.type==='code') ? '1 / -1' : 'auto' }">
                    <div style="font-size:12px;font-weight:500;color:#555;margin-bottom:4px;">{{ row.label }}</div>
                    <!-- ===== \uBCF4\uAE30\uBAA8\uB4DC: \uAC12 \uC885\uB958 \uBD88\uBB38 \uD50C\uB808\uC778 \uD14D\uC2A4\uD2B8 ===== -->
                    <div v-if="cfDtlMode" class="readonly-field-plain" :style="(row.type==='textarea'||row.type==='code') ? 'white-space:pre-wrap;' : ''">
                      <template v-if="row.type==='select'">{{ (row.options.find(o => o.v === cfActiveRow[row.key]) || {}).l || '-' }}</template>
                      <template v-else-if="row.type==='color'">
                        <span style="display:inline-flex;align-items:center;gap:6px;">
                          <span style="display:inline-block;width:14px;height:14px;border-radius:3px;border:1px solid #e8e8e8;vertical-align:middle;" :style="{background:cfActiveRow[row.key]}"></span>
                          {{ cfActiveRow[row.key] || '-' }}
                        </span>
                      </template>
                      <template v-else-if="row.type==='event'">
                        {{ cfActiveRow.eventId || '-' }}
                        <span v-if="cfActiveRow.eventId" class="ref-link" style="margin-left:6px;" @click="handleBtnAction('refModal-open', {type:'event', id:Number(cfActiveRow.eventId)})">\uBCF4\uAE30</span>
                        <div v-if="cfRelatedEvent" style="margin-top:6px;padding:8px 12px;background:#e6f4ff;border-radius:6px;font-size:12px;display:flex;align-items:center;gap:8px;">
                          <b>{{ cfRelatedEvent.title }}</b>
                          <span class="badge badge-green">{{ cfRelatedEvent.status }}</span>
                          <span style="color:#888;">{{ cfRelatedEvent.startDate }} ~ {{ cfRelatedEvent.endDate }}</span>
                        </div>
                      </template>
                      <template v-else>{{ cfActiveRow[row.key] || '-' }}</template>
                    </div>
                    <!-- ===== \uC218\uC815\uBAA8\uB4DC: \uAE30\uC874 \uC785\uB825 \uCEE8\uD2B8\uB864 ===== -->
                    <template v-else>
                      <input v-if="row.type==='input'" class="form-control" v-model="cfActiveRow[row.key]" :placeholder="row.ph" style="margin:0;" />
                      <input v-else-if="row.type==='number'" class="form-control" type="number" v-model.number="cfActiveRow[row.key]" style="margin:0;max-width:200px;" />
                      <select v-else-if="row.type==='select'" class="form-control" v-model="cfActiveRow[row.key]" style="margin:0;max-width:200px;">
                        <option v-for="o in row.options" :key="o?.v" :value="o.v">{{ o.l }}</option>
                      </select>
                      <textarea v-else-if="row.type==='textarea'" class="form-control" v-model="cfActiveRow[row.key]" rows="3" style="margin:0;"></textarea>
                      <textarea v-else-if="row.type==='code'" class="form-control" v-model="cfActiveRow[row.key]" rows="6" style="margin:0;font-family:monospace;font-size:12px;background:#1e1e2e;color:#cdd3de;border-color:#444;line-height:1.6;"></textarea>
                      <div v-else-if="row.type==='color'" style="display:flex;gap:8px;align-items:center;">
                        <input type="color" v-model="cfActiveRow[row.key]" style="width:40px;height:34px;border:1px solid #ddd;border-radius:4px;padding:2px;" />
                        <input class="form-control" v-model="cfActiveRow[row.key]" style="margin:0;max-width:140px;" />
                        <span style="display:inline-block;width:60px;height:28px;border-radius:4px;border:1px solid #e8e8e8;" :style="{background:cfActiveRow[row.key]}"></span>
                      </div>
                      <div v-else-if="row.type==='event'">
                        <div style="display:flex;gap:8px;align-items:center;">
                          <input class="form-control" v-model="cfActiveRow.eventId" placeholder="\uC774\uBCA4\uD2B8 ID" style="margin:0;max-width:160px;" />
                          <span v-if="cfActiveRow.eventId" class="ref-link" @click="handleBtnAction('refModal-open', {type:'event', id:Number(cfActiveRow.eventId)})">
                            \uBCF4\uAE30
                          </span>
                        </div>
                        <div v-if="cfRelatedEvent" style="margin-top:6px;padding:8px 12px;background:#e6f4ff;border-radius:6px;font-size:12px;display:flex;align-items:center;gap:8px;">
                          <b>{{ cfRelatedEvent.title }}</b>
                          <span class="badge badge-green">{{ cfRelatedEvent.status }}</span>
                          <span style="color:#888;">{{ cfRelatedEvent.startDate }} ~ {{ cfRelatedEvent.endDate }}</span>
                        </div>
                        <div v-else-if="cfActiveRow.eventId" style="margin-top:6px;font-size:12px;color:#aaa;">\uD574\uB2F9 \uC774\uBCA4\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
                      </div>
                    </template>
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uBBF8\uB9AC\uBCF4\uAE30 (\uC804\uCCB4 \uD3ED) ====================== -->
                  <div v-if="cfIsText ? (cfActiveRow.textContent) : false" style="grid-column:1 / -1;">
                    <div style="font-size:12px;font-weight:500;color:#555;margin-bottom:4px;">\uBBF8\uB9AC\uBCF4\uAE30</div>
                    <div style="padding:14px;border-radius:6px;font-size:13px;" :style="{background:cfActiveRow.bgColor,color:cfActiveRow.textColor}">
                      {{ cfActiveRow.textContent }}
                    </div>
                  </div>
                  <div v-if="cfIsImage ? (cfActiveRow.imageUrl) : false" style="grid-column:1 / -1;">
                    <div style="font-size:12px;font-weight:500;color:#555;margin-bottom:4px;">\uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30</div>
                    <img :src="cfActiveRow.imageUrl" style="max-height:120px;border-radius:6px;border:1px solid #e8e8e8;" @error="$event.target.style.display='none'" />
                  </div>
                  <div v-if="cfIsProduct ? (cfActiveRow.productIds) : false" style="grid-column:1 / -1;">
                    <div style="font-size:12px;font-weight:500;color:#555;margin-bottom:4px;">\uC0C1\uD488 \uB9C1\uD06C</div>
                    <div style="display:flex;flex-wrap:wrap;gap:6px;">
                      <span v-for="pid in cfActiveRow.productIds.split(',').map(s=>s.trim()).filter(Boolean)" :key="pid"
                        class="ref-link" @click="handleBtnAction('refModal-open', {type:'product', id:Number(pid)})"
                        style="padding:2px 10px;background:#e6f4ff;border-radius:12px;font-size:12px;">
                        \uC0C1\uD488 #{{ pid }}
                      </span>
                    </div>
                  </div>
                </div>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD074\uB9AD\uB3D9\uC791 (2\uC5F4) ================================ -->
                <div style="font-size:11px;font-weight:700;color:#888;letter-spacing:.3px;margin-bottom:8px;">\u{1F446} \uD074\uB9AD\uB3D9\uC791</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;align-items:start;margin-bottom:8px;">
                  <div>
                    <div style="font-size:12px;font-weight:500;color:#555;margin-bottom:4px;">\uD074\uB9AD \uC2DC \uB3D9\uC791</div>
                    <div v-if="cfDtlMode" class="readonly-field-plain">
                      {{ (codes.click_action_opts.find(o => o.value === cfActiveRow.clickAction) || {}).label || '-' }}
                    </div>
                    <select v-else class="form-control" v-model="cfActiveRow.clickAction" style="margin:0;max-width:220px;">
                      <option v-for="o in codes.click_action_opts" :key="o.value" :value="o.value">{{ o.label }}</option>
                    </select>
                  </div>
                  <div v-if="cfActiveRow.clickAction !== 'none'">
                    <div style="font-size:12px;font-weight:500;color:#555;margin-bottom:4px;">\uB300\uC0C1</div>
                    <div v-if="cfDtlMode" class="readonly-field-plain">{{ cfActiveRow.clickTarget || '-' }}</div>
                    <template v-else>
                      <input class="form-control" v-model="cfActiveRow.clickTarget" placeholder="/products, showCoupon, https://..." style="margin:0;" />
                      <div style="margin-top:6px;font-size:12px;color:#888;">
                        <span v-if="cfActiveRow.clickAction==='navigate'">
                          \u{1F4A1}
                          <code>/home</code>
                          ,
                          <code>/products</code>
                          ,
                          <code>/detail?pid=1</code>
                          \uD615\uC2DD
                        </span>
                        <span v-if="cfActiveRow.clickAction==='event'">\u{1F4A1} <code>showCoupon</code> , <code>openEvent</code> \uB4F1 \uC774\uBCA4\uD2B8\uBA85</span>
                        <span v-if="cfActiveRow.clickAction==='url'">\u{1F4A1} \uC678\uBD80 URL (http:// \uD3EC\uD568)</span>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <!-- ===== /\uB0B4\uC6A9 \uC601\uC5ED ===================================================== -->
              <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
                :edit-click="() => handleBtnAction('row-form-edit')"
                :save-click="() => handleBtnAction('row-form-save')"
                :delete-click="() => handleBtnAction('row-form-delete')"
                :cancel-click="() => handleBtnAction('row-form-cancel')"
                :close-click="() => handleBtnAction('row-form-close')" />
            </div>
          </div>
          <!-- ===== /\uD3FC \uC601\uC5ED ====================================================== -->
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2A4\uD50C\uB9AC\uD130 ============================================ -->
          <div @mousedown="e => handleSelectAction('preview-split', e)"
            style="width:6px;cursor:col-resize;background:#e8e8e8;flex-shrink:0;position:relative;"
            title="\uB4DC\uB798\uADF8\uB85C \uD3ED \uC870\uC808">
            <div style="position:absolute;top:50%;left:1px;transform:translateY(-50%);width:4px;height:32px;background:#bbb;border-radius:2px;"></div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 \uD328\uB110 ======================================= -->
          <div :style="{
            width: previewPaneWidth + 'px', flexShrink:0,
            borderLeft:'1px solid #e8e8e8', background:'#f7f8fb',
            display:'flex', flexDirection:'column', overflow:'hidden',
            }">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 \uD0C0\uC774\uD2C0 ==================================== -->
            <div style="padding:10px 14px;border-bottom:1px solid #e0e0e0;background:#f0f2f7;flex-shrink:0;display:flex;align-items:center;gap:6px;">
              <span style="font-size:11px;font-weight:700;color:#555;letter-spacing:.5px;cursor:help;position:relative;"
                @mouseenter="showComponentTooltip=true" @mouseleave="showComponentTooltip=false">
                \u{1F441} {{ tab==='info' ? '\uD328\uB110' : '\uC804\uC2DC\uD56D\uBAA9' }}\uBBF8\uB9AC\uBCF4\uAE30
                <span style="position:absolute;bottom:-28px;left:0;background:#333;color:#fff;padding:4px 8px;border-radius:4px;font-size:9px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s;z-index:1000;" :style="{opacity: showComponentTooltip ? 1 : 0}">
                  {{ tab==='info' ? '&lt;disp-x03-panel /&gt;' : '&lt;disp-x04-widget /&gt;' }}
                </span>
              </span>
              <span style="font-size:10px;color:#aaa;margin-left:auto;">
                {{ tab==='info' ? '\uC804\uCCB4 \uC804\uC2DC\uD56D\uBAA9' : cfActiveTabLabel }}
              </span>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB514\uBC14\uC774\uC2A4 \uBAA8\uB4DC \uBC84\uD2BC ==================================== -->
            <div style="padding:8px 10px 0;">
              <div style="display:flex;gap:4px;padding:3px;background:#eef0f3;border-radius:6px;">
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
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 \uB0B4\uC6A9 (\uB514\uBC14\uC774\uC2A4 \uD504\uB808\uC784) ========================== -->
            <div style="flex:1;overflow:auto;padding:10px;">
              <div :style="{
                width: cfPreviewFrameWidth, margin:'0 auto', border:'1px solid #d0d7de', borderRadius:'8px',
                background:'#fff', padding:'8px', transition:'width .2s',
                display:'flex', flexDirection:'column', gap:'10px',
                }">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD328\uB110\uAE30\uBCF8\uC815\uBCF4: \uD328\uB110 \uC804\uCCB4 \uB80C\uB354 ========================== -->
                <template v-if="tab==='info'">
                  <disp-x03-panel
                    :params="{ }"
                    :disp-opt="{ layout:'vertical', showBadges:true }"
                    :panel-item="{...form, rows: rows, status:'\uD65C\uC131', condition: form.condition||'\uD56D\uC0C1 \uD45C\uC2DC'}"
                    :show-header="true"
                    @widget-action="onPreviewClick"
                    />
                </template>
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F1~5: \uD574\uB2F9 \uC704\uC82F\uB9CC ============================= -->
                <template v-else-if="cfActiveRow">
                  <disp-x04-widget
                    :params="{ }"
                    :disp-opt="{ showBadges: true }"
                    :widget-item="{...cfActiveRow, widgetNm: cfActiveRow.widgetNm||cfActiveTabLabel||'\uC704\uC82F', status:'\uD65C\uC131', condition:'\uD56D\uC0C1 \uD45C\uC2DC'}"
                    @click-action="onPreviewClick"
                    />
                </template>
              </div>
              <!-- ===== /device frame ============================================== -->
            </div>
          </div>
          <!-- ===== /\uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 \uD328\uB110 ================================================= -->
        </div>
        <!-- ===== /\uC6B0\uCE21 \uCF58\uD150\uCE20 ==================================================== -->
      </div>
      <!-- ===== /\uD0ED \uBAA8\uB4DC flex ================================================= -->
    </div>
    <!-- ===== /\uB0B4\uBD80 flex =================================================== -->
    <!-- ===== \u25A1.\u25A1. \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \uD0ED \uBAA8\uB4DC \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ========== -->
    <!-- ===== \u25A0.\u25A0. \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \uD3BC\uCE58\uAE30(\uC544\uCF54\uB514\uC5B8) \uBAA8\uB4DC \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ===== -->
    <div v-else>
      <div v-for="(t, tIdx) in cfTabLabels" :key="'va_'+t.key" style="margin-bottom:4px;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC139\uC158 \uD5E4\uB354 ============================================= -->
        <div @click="handleSelectAction('section-toggle', t.key)"
          style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;user-select:none;transition:background .15s;"
          :style="isSectionExpanded(t.key) ? 'background:#fff0f4;' : 'background:#f2f2f2;'">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-size:13px;font-weight:700;" :style="isSectionExpanded(t.key) ? 'color:#e8587a;' : 'color:#555;'">
              {{ t.label }}
            </span>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F \uC774\uB3D9 \uBC84\uD2BC: \uC704\uC82F \uC139\uC158\uC774 \uC5F4\uB824 \uC788\uC744 \uB54C\uB9CC \uD45C\uC2DC ================== -->
            <template v-if="t.key !== 'info' ? (isSectionExpanded(t.key)) : false">
              <button @click.stop="moveRowAt(cfTabRowMap[t.key], -1)" :disabled="cfTabRowMap[t.key]===0"
                style="font-size:10px;border:1px solid #e0e0e0;border-radius:3px;background:#fff;padding:1px 6px;color:#888;"
                :style="cfTabRowMap[t.key]===0?'opacity:0.3;cursor:default;':''">
                \u25B2
              </button>
              <button @click.stop="moveRowAt(cfTabRowMap[t.key], 1)" :disabled="cfTabRowMap[t.key]===rows.length-1"
                style="font-size:10px;border:1px solid #e0e0e0;border-radius:3px;background:#fff;padding:1px 6px;color:#888;"
                :style="cfTabRowMap[t.key]===rows.length-1?'opacity:0.3;cursor:default;':''">
                \u25BC
              </button>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0AD\uC81C \uBC84\uD2BC (\uC704\uC82F2\uBD80\uD130) =============================== -->
              <button v-if="tIdx >= 2" @click.stop="removeWidget(cfTabRowMap[t.key])"
                style="font-size:11px;padding:1px 7px;border:1px solid #fca5a5;border-radius:4px;background:#fff0f0;color:#dc2626;">
                \u2715
              </button>
            </template>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <button v-if="t.key === 'info'" @click.stop="openCardPreview()"
              style="font-size:11px;padding:2px 8px;border:1px solid #b39ddb;border-radius:10px;background:#f5f0ff;color:#6a1b9a;">
              \u{1F5BC} \uCE74\uB4DC
            </button>
            <button v-else @click.stop="openPreview(t.key, t.label)"
              style="font-size:12px;border:none;background:none;opacity:0.5;">
              \u{1F441}
            </button>
            <span style="font-size:12px;font-weight:700;" :style="isSectionExpanded(t.key) ? 'color:#e8587a;' : 'color:#bbb;'">
              {{ isSectionExpanded(t.key) ? '\u25B2' : '\u25BC' }}
            </span>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC139\uC158 \uCF58\uD150\uCE20 ============================================ -->
        <div v-show="isSectionExpanded(t.key)" style="padding:20px 24px;background:#fff;border-top:1px solid #f0f0f0;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD328\uB110\uC815\uBCF4 ============================================ -->
          <div v-if="t.key === 'info'">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD328\uB110\uCF54\uB4DC/\uD328\uB110\uBA85/\uD45C\uC2DC\uACBD\uB85C/\uD3EC\uD568\uC601\uC5ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ========= -->
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ========================================== -->
            <bo-form-area plain-readonly :columns="columns.sectionInfoForm" :form="form" :errors="errors"
              :readonly="cfDtlMode" :cols="3" compact :show-actions="false">
              <template #pathPick2>
                <div v-if="cfDtlMode" class="readonly-field-plain">
                  {{ fnPathLabel(form.pathId) || '-' }}
                </div>
                <div v-else :style="{padding:'7px 10px',border:'1px solid #e5e7eb',borderRadius:'6px',fontSize:'12px',background:'#f5f5f7',color:form.pathId!=null?'#374151':'#9ca3af',fontWeight:form.pathId!=null?600:400,display:'flex',alignItems:'center',gap:'8px',fontFamily:'monospace'}">
                  <span style="flex:1;">{{ fnPathLabel(form.pathId) || '\uACBD\uB85C \uC120\uD0DD...' }}</span>
                  <button type="button" @click="handleBtnAction('pathPick-open', 'form')" title="\uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD"
                    :style="{cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',width:'24px',height:'24px',background:'#fff',border:'1px solid #d1d5db',borderRadius:'4px',fontSize:'12px',color:'#6b7280',padding:'0'}"
                    @mouseover="$event.currentTarget.style.background='#eef2ff'"
                    @mouseout="$event.currentTarget.style.background='#fff'">
                    \u{1F50D}
                  </button>
                  <button v-if="form.pathId != null" type="button" title="\uC120\uD0DD \uD574\uC81C"
                    style="background:none;border:none;padding:0 4px;color:#bbb;cursor:pointer;font-size:11px;line-height:1;"
                    @click="form.pathId = null">x</button>
                </div>
              </template>
            </bo-form-area>
            <div style="margin-bottom:12px;">
              <label class="form-label">\uC0C1\uD0DC</label>
              <select class="form-control" style="max-width:200px;" v-model="form.status" :disabled="cfDtlMode">
                <option v-for="c in codes.active_statuses" :key="c.codeValue" :value="c.codeValue">{{ c.codeLabel }}</option>
              </select>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD0C0\uC774\uD2C0 \uC124\uC815 ======================================== -->
            <div style="font-size:12px;font-weight:700;color:#888;letter-spacing:.5px;margin:16px 0 8px;padding-bottom:6px;border-bottom:1px solid #f0f0f0;">
              \u{1F3F7} \uD0C0\uC774\uD2C0 \uC124\uC815
            </div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <label style="font-size:12px;font-weight:600;color:#555;width:90px;flex-shrink:0;">\uD0C0\uC774\uD2C0 \uD45C\uC2DC</label>
              <label style="display:flex;align-items:center;gap:5px;font-size:13px;">
                <input type="radio" v-model="form.titleYn" value="Y" :disabled="cfDtlMode" />
                \uD45C\uC2DC
              </label>
              <label style="display:flex;align-items:center;gap:5px;font-size:13px;">
                <input type="radio" v-model="form.titleYn" value="N" :disabled="cfDtlMode" />
                \uBBF8\uD45C\uC2DC
              </label>
            </div>
            <div v-if="form.titleYn==='Y'" style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <label style="font-size:12px;font-weight:600;color:#555;width:90px;flex-shrink:0;">\uD0C0\uC774\uD2C0</label>
              <input v-model="form.title" type="text" placeholder="\uD0C0\uC774\uD2C0 \uD14D\uC2A4\uD2B8 \uC785\uB825" :readonly="cfDtlMode"
                style="flex:1;padding:6px 10px;border:1px solid #d0d0d0;border-radius:6px;font-size:13px;" />
            </div>
            <div style="font-size:12px;font-weight:700;color:#888;letter-spacing:.5px;margin:16px 0 8px;padding-bottom:6px;border-bottom:1px solid #f0f0f0;">
              \u{1F4DD} HTML \uC124\uBA85
            </div>
            <div v-if="cfDtlMode" style="padding:12px 14px;background:#f9f9f9;border:1px solid #e8e8e8;border-radius:6px;font-size:13px;line-height:1.7;min-height:80px;margin-bottom:16px;">
              <span v-if="form.htmlDesc" v-html="form.htmlDesc"></span>
              <span v-else style="color:#bbb;">\uB0B4\uC6A9 \uC5C6\uC74C</span>
            </div>
            <div v-else style="margin-bottom:16px;">
              <base-html-editor v-model="form.htmlDesc" height="280px" />
            </div>
            <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
              :edit-click="() => handleBtnAction('panel-form-edit')"
              :save-click="() => handleBtnAction('panel-form-save')"
              :delete-click="() => handleBtnAction('panel-form-delete')"
              :cancel-click="() => handleBtnAction('panel-form-cancel')"
              :close-click="() => handleBtnAction('panel-form-close')" />
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F 1~5: \uAC01 \uC139\uC158\uC774 \uB3C5\uB9BD row \uBC14\uC778\uB529 ======================== -->
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. v-else-if \uC640 v-for \uB97C \uBD84\uB9AC (\uAC19\uC740 \uC5D8\uB9AC\uBA3C\uD2B8 \uB3D9\uC2DC \uC0AC\uC6A9 \uAE08\uC9C0 \u2192 _vei \uD06C\uB798\uC2DC) === -->
          <template v-else-if="t.key !== 'info'">
            <template v-for="r in [rows[cfTabRowMap[t.key]]]" :key="'r_'+t.key">
              <div style="font-size:12px;font-weight:700;color:#888;letter-spacing:.5px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid #f0f0f0;">
                \u{1F4D0} \uC704\uC82F \uC124\uC815
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F \uC720\uD615/\uB178\uCD9C \uC21C\uC11C (BoFormArea \uC790\uB3D9 \uB80C\uB354, r \uB85C\uCEEC \uBCC0\uC218\uC5D0 \uBC14\uC778\uB529) ===== -->
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ========================================== -->
              <bo-form-area plain-readonly :columns="columns.widgetRowForm" :form="r" :errors="{}"
                :readonly="cfDtlMode" :cols="3" compact :show-actions="false" />
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
                <label style="font-size:12px;font-weight:600;color:#555;width:90px;flex-shrink:0;">\uD0C0\uC774\uD2C0 \uD45C\uC2DC</label>
                <label style="display:flex;align-items:center;gap:5px;font-size:13px;">
                  <input type="radio" v-model="r.titleYn" value="Y" :disabled="cfDtlMode" />
                  \uD45C\uC2DC
                </label>
                <label style="display:flex;align-items:center;gap:5px;font-size:13px;">
                  <input type="radio" v-model="r.titleYn" value="N" :disabled="cfDtlMode" />
                  \uBBF8\uD45C\uC2DC
                </label>
              </div>
              <div v-if="r.titleYn==='Y'" style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
                <label style="font-size:12px;font-weight:600;color:#555;width:90px;flex-shrink:0;">\uD0C0\uC774\uD2C0</label>
                <input v-model="r.title" type="text" placeholder="\uD0C0\uC774\uD2C0 \uD14D\uC2A4\uD2B8 \uC785\uB825" :readonly="cfDtlMode"
                  style="flex:1;padding:6px 10px;border:1px solid #d0d0d0;border-radius:6px;font-size:13px;" />
              </div>
              <div style="font-size:12px;font-weight:700;color:#888;letter-spacing:.5px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid #f0f0f0;">
                \u{1F3A8} \uD45C\uD604 \uC124\uC815
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. HTML \uC5D0\uB514\uD130: \uD3BC\uCE58\uAE30 \uBAA8\uB4DC\uC5D0\uC11C\uB294 textarea\uB85C \uD45C\uC2DC ============== -->
              <div v-if="fnRowIsHtmlEditor(r)" style="margin-bottom:20px;">
                <div v-if="cfDtlMode" style="padding:12px 14px;background:#f9f9f9;border:1px solid #e8e8e8;border-radius:6px;font-size:13px;line-height:1.7;min-height:80px;">
                  <span v-if="r.htmlContent" v-html="r.htmlContent"></span>
                  <span v-else style="color:#bbb;">\uB0B4\uC6A9 \uC5C6\uC74C</span>
                </div>
                <textarea v-else class="form-control" v-model="r.htmlContent" rows="6" style="font-family:monospace;font-size:12px;" placeholder="HTML \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694 (\uD0ED \uBAA8\uB4DC\uC5D0\uC11C HTML \uC5D0\uB514\uD130 \uC0AC\uC6A9 \uAC00\uB2A5)"></textarea>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD30C\uC77C\uBAA9\uB85D ========================================== -->
              <div v-else-if="fnRowIsFileList(r)" style="margin-bottom:20px;">
                <div v-if="cfDtlMode">
                  <div v-if="fnGetFileListItems(r).length===0" style="color:#bbb;padding:12px 0;font-size:13px;">\uCCA8\uBD80\uD30C\uC77C \uC5C6\uC74C</div>
                  <div v-for="(f, fi) in fnGetFileListItems(r)" :key="fi" style="display:flex;align-items:center;gap:8px;padding:7px 10px;border:1px solid #e8e8e8;border-radius:6px;margin-bottom:6px;background:#fafafa;">
                    <span>\u{1F4CE}</span>
                    <a v-if="f.url" :href="f.url" target="_blank" style="font-size:13px;color:#2563eb;text-decoration:none;flex:1;">
                      {{ f.name || f.url }}
                    </a>
                    <span v-else style="font-size:13px;color:#555;flex:1;">{{ f.name }}</span>
                  </div>
                </div>
                <div v-else>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ===================================== -->
                  <bo-grid bare :columns="fnFileListColsForRow(r)" :rows="fnGetFileListItems(r)"
                    empty-text="\uCCA8\uBD80\uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." style="margin-bottom:8px;" />
                  <button @click="handleBtnAction('fileListRow-add', r)" style="font-size:12px;padding:5px 12px;border:1px dashed #aaa;border-radius:5px;background:#fafafa;color:#555;">
                    + \uD30C\uC77C \uCD94\uAC00
                  </button>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC77C\uBC18 \uD45C\uD604 \uC124\uC815 ====================================== -->
              <div v-else-if="fnGetDisplayRows(r).length===0" style="color:#bbb;text-align:center;padding:20px 0 24px;font-size:13px;">
                \uC704\uC82F \uC720\uD615\uC744 \uC120\uD0DD\uD558\uBA74 \uD45C\uD604 \uC124\uC815 \uD56D\uBAA9\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 =========================================== -->
              <table v-else class="bo-table" style="margin-bottom:20px;">
                <thead>
                  <tr>
                    <th style="width:180px;">\uD56D\uBAA9</th>
                    <th>\uAC12</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="drow in fnGetDisplayRows(r)" :key="drow?.key">
                    <td style="font-weight:500;color:#555;vertical-align:middle;">{{ drow.label }}</td>
                    <td style="padding:6px 8px;">
                      <input v-if="drow.type==='input'" class="form-control" v-model="r[drow.key]" :placeholder="drow.ph" style="margin:0;" :readonly="cfDtlMode" />
                      <input v-else-if="drow.type==='number'" class="form-control" type="number" v-model.number="r[drow.key]" style="margin:0;max-width:200px;" :readonly="cfDtlMode" />
                      <select v-else-if="drow.type==='select'" class="form-control" v-model="r[drow.key]" style="margin:0;max-width:200px;" :disabled="cfDtlMode">
                        <option v-for="o in drow.options" :key="o?.v" :value="o.v">{{ o.l }}</option>
                      </select>
                      <textarea v-else-if="drow.type==='textarea'" class="form-control" v-model="r[drow.key]" rows="3" style="margin:0;" :readonly="cfDtlMode"></textarea>
                      <textarea v-else-if="drow.type==='code'" class="form-control" v-model="r[drow.key]" rows="6" style="margin:0;font-family:monospace;font-size:12px;background:#1e1e2e;color:#cdd3de;border-color:#444;line-height:1.6;" :readonly="cfDtlMode"></textarea>
                      <div v-else-if="drow.type==='color'" style="display:flex;gap:8px;align-items:center;">
                        <input type="color" v-model="r[drow.key]" style="width:40px;height:34px;border:1px solid #ddd;border-radius:4px;padding:2px;" :disabled="cfDtlMode" />
                        <input class="form-control" v-model="r[drow.key]" style="margin:0;max-width:140px;" :readonly="cfDtlMode" />
                        <span style="display:inline-block;width:60px;height:28px;border-radius:4px;border:1px solid #e8e8e8;" :style="{background:r[drow.key]}"></span>
                      </div>
                      <textarea v-else-if="drow.type==='code'" class="form-control" v-model="r[drow.key]" rows="5" style="margin:0;font-family:monospace;font-size:12px;" :placeholder="drow.ph" :readonly="cfDtlMode"></textarea>
                      <div v-else-if="drow.type==='event'">
                        <div style="display:flex;gap:8px;align-items:center;">
                          <input class="form-control" v-model="r.eventId" placeholder="\uC774\uBCA4\uD2B8 ID" style="margin:0;max-width:160px;" :readonly="cfDtlMode" />
                          <span v-if="r.eventId" class="ref-link" @click="handleBtnAction('refModal-open', {type:'event', id:Number(r.eventId)})">\uBCF4\uAE30</span>
                        </div>
                        <div v-if="fnGetRelatedEvent(r)" style="margin-top:6px;padding:8px 12px;background:#e6f4ff;border-radius:6px;font-size:12px;display:flex;align-items:center;gap:8px;">
                          <b>{{ fnGetRelatedEvent(r).title }}</b>
                          <span class="badge badge-green">{{ fnGetRelatedEvent(r).status }}</span>
                          <span style="color:#888;">{{ fnGetRelatedEvent(r).startDate }} ~ {{ fnGetRelatedEvent(r).endDate }}</span>
                        </div>
                        <div v-else-if="r.eventId" style="margin-top:6px;font-size:12px;color:#aaa;">\uD574\uB2F9 \uC774\uBCA4\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
                      </div>
                    </td>
                  </tr>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ==================================== -->
                  <tr v-if="fnRowIsText(r) ? (r.textContent) : false">
                    <td style="font-weight:500;color:#555;">\uBBF8\uB9AC\uBCF4\uAE30</td>
                    <td style="padding:6px 8px;">
                      <div style="padding:14px;border-radius:6px;font-size:13px;" :style="{background:r.bgColor,color:r.textColor}">
                        {{ r.textContent }}
                      </div>
                    </td>
                  </tr>
                  <tr v-if="fnRowIsImage(r) ? (r.imageUrl) : false">
                    <td style="font-weight:500;color:#555;">\uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30</td>
                    <td style="padding:6px 8px;">
                      <img :src="r.imageUrl" style="max-height:120px;border-radius:6px;border:1px solid #e8e8e8;" @error="$event.target.style.display='none'" />
                    </td>
                  </tr>
                  <tr v-if="fnRowIsProduct(r) ? (r.productIds) : false">
                    <td style="font-weight:500;color:#555;">\uC0C1\uD488 \uB9C1\uD06C</td>
                    <td style="padding:6px 8px;">
                      <div style="display:flex;flex-wrap:wrap;gap:6px;">
                        <span v-for="pid in r.productIds.split(',').map(s=>s.trim()).filter(Boolean)" :key="pid"
                          class="ref-link" @click="handleBtnAction('refModal-open', {type:'product', id:Number(pid)})"
                          style="padding:2px 10px;background:#e6f4ff;border-radius:12px;font-size:12px;">
                          \uC0C1\uD488 #{{ pid }}
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style="font-size:12px;font-weight:700;color:#888;letter-spacing:.5px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid #f0f0f0;">
                \u{1F446} \uD074\uB9AD \uB3D9\uC791
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 =========================================== -->
              <table class="bo-table" style="margin-bottom:20px;">
                <thead>
                  <tr>
                    <th style="width:180px;">\uD56D\uBAA9</th>
                    <th>\uAC12</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight:500;color:#555;vertical-align:middle;">\uD074\uB9AD \uC2DC \uB3D9\uC791</td>
                    <td style="padding:6px 8px;">
                      <select class="form-control" v-model="r.clickAction" style="margin:0;max-width:220px;" :disabled="cfDtlMode">
                        <option v-for="o in codes.click_action_opts" :key="o.value" :value="o.value">{{ o.label }}</option>
                      </select>
                    </td>
                  </tr>
                  <tr v-if="r.clickAction !== 'none'">
                    <td style="font-weight:500;color:#555;vertical-align:middle;">\uB300\uC0C1</td>
                    <td style="padding:6px 8px;">
                      <input class="form-control" v-model="r.clickTarget" placeholder="/products, showCoupon, https://..." style="margin:0;" :readonly="cfDtlMode" />
                      <div style="margin-top:6px;font-size:12px;color:#888;">
                        <span v-if="r.clickAction==='navigate'">\u{1F4A1} <code>/home</code> , <code>/products</code> \uD615\uC2DD</span>
                        <span v-if="r.clickAction==='event'">\u{1F4A1} <code>showCoupon</code> , <code>openEvent</code> \uB4F1</span>
                        <span v-if="r.clickAction==='url'">\u{1F4A1} \uC678\uBD80 URL (http:// \uD3EC\uD568)</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <bo-form-actions v-if="active" :readonly="cfDtlMode" :is-new="cfIsNew"
                :edit-click="() => handleBtnAction('row-form-edit')"
                :save-click="() => handleBtnAction('row-form-save')"
                :delete-click="() => handleBtnAction('row-form-delete')"
                :cancel-click="() => handleBtnAction('row-form-cancel')"
                :close-click="() => handleBtnAction('row-form-close')" />
            </template>
          </template>
        </div>
        <!-- ===== /\uC139\uC158 \uCF58\uD150\uCE20 ==================================================== -->
      </div>
      <!-- ===== /v-for \uC139\uC158 ================================================== -->
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC704\uC82F \uCD94\uAC00 \uBC84\uD2BC (\uD3BC\uCE58\uAE30 \uBAA8\uB4DC) =================================== -->
      <div v-if="rows.length < MAX_WIDGETS" style="margin-top:6px;">
        <button @click="handleBtnAction('panelItems-add')" :disabled="cfIsNew" :title="cfIsNew ? '\uC800\uC7A5 \uD6C4 \uC804\uC2DC\uD56D\uBAA9\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.' : ''" :style="cfIsNew ? 'width:100%;padding:9px 0;border:1.5px dashed #e0e0e0;border-radius:8px;background:#f5f5f5;cursor:not-allowed;font-size:13px;color:#bbb;' : 'width:100%;padding:9px 0;border:1.5px dashed #d0d0d0;border-radius:8px;background:#fafafa;font-size:13px;color:#888;'">
          + \uC704\uC82F \uCD94\uAC00
        </button>
      </div>
    </div>
    <!-- ===== /\uD3BC\uCE58\uAE30 \uC544\uCF54\uB514\uC5B8 \uBAA8\uB4DC =============================================== -->
  </div>
  <!-- ===== \u25A1.\u25A1. \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \uD3BC\uCE58\uAE30(\uC544\uCF54\uB514\uC5B8) \uBAA8\uB4DC \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ===== -->
  <!-- ===== \u25A1. \uCE74\uB4DC \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 \uBAA8\uB2EC =============================================== -->
  <disp-preview-modal
    :show="preview.show"
    mode="single"
    :tab-label="preview.tabLabel"
    :area="cfCurrentAreaLabel"
    :widgets="[]"
    :widget="cfPreviewWidget" modal-name="disp-preview" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30 \uBAA8\uB2EC =============================================== -->
  <!-- ===== \u25A0. \uD328\uB110\uBBF8\uB9AC\uBCF4\uAE30 \uC624\uBC84\uB808\uC774 ============================================= -->
  <bo-modal :show="cardPreview ? modals.isCardPreview : false" title="\u{1F5BC} \uD328\uB110\uBBF8\uB9AC\uBCF4\uAE30" width="520px" box-pad="0" @close="closeCardPreview">
    <div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uCE74\uB4DC \uBCF8\uBB38 =============================================== -->
      <div style="padding:24px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED + \uC0C1\uD0DC \uBC30\uC9C0 ======================================== -->
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;align-items:center;">
          <code style="font-size:11px;background:#f0f2f5;color:#555;padding:3px 8px;border-radius:4px;letter-spacing:.3px;">
            {{ form.areaId || '-' }}
          </code>
          <span style="font-size:12px;background:#e8f4fd;color:#1565c0;border-radius:10px;padding:2px 10px;">{{ cfCurrentAreaLabel }}</span>
          <span class="badge" :class="form.status==='SHOW'?'badge-green':'badge-gray'" style="font-size:12px;">{{ form.status }}</span>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD328\uB110\uBA85 =============================================== -->
        <div style="font-size:22px;font-weight:800;color:#222;margin-bottom:16px;line-height:1.3;">{{ form.name || '(\uD328\uB110\uBA85 \uC5C6\uC74C)' }}</div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC704\uC82F \uAD6C\uC131 ============================================= -->
        <div style="border-top:1px solid #f0f0f0;padding-top:14px;">
          <div style="font-size:12px;font-weight:700;color:#888;letter-spacing:.5px;margin-bottom:10px;">\u{1F4D0} \uC704\uC82F \uAD6C\uC131</div>
          <div v-for="(r, i) in rows" :key="i"
            style="display:flex;align-items:center;gap:10px;padding:9px 14px;border:1px solid #f0f0f0;border-radius:8px;margin-bottom:6px;background:#fafafa;">
            <span style="font-size:11px;color:#bbb;font-weight:700;min-width:16px;text-align:center;">{{ i+1 }}</span>
            <span style="font-size:13px;font-weight:600;color:#333;flex:1;">{{ fnWLabel(r.widgetType) }}</span>
            <span style="font-size:10px;background:#e8f0fe;color:#1a73e8;border-radius:8px;padding:2px 8px;">\uC21C\uC11C {{ r.sortOrder }}</span>
            <span v-if="r.clickAction ? (r.clickAction !== 'none') : false" style="font-size:10px;color:#888;background:#f0f0f0;border-radius:8px;padding:2px 8px;">
              {{ r.clickAction }}
            </span>
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD478\uD130 ================================================== -->
      <div style="padding:12px 20px;border-top:1px solid #f0f0f0;text-align:right;">
        <button @click="handleBtnAction('cardPreview-close')" class="btn btn_close">\uB2EB\uAE30</button>
      </div>
    </div>
  </bo-modal>
  <!-- ===== \u25A1. \uD328\uB110\uBBF8\uB9AC\uBCF4\uAE30 \uC624\uBC84\uB808\uC774 ============================================= -->
  <!-- ===== \u25A0. \uC804\uC2DC\uC704\uC82FLib \uC120\uD0DD \uD31D\uC5C5 =========================================== -->
  <bo-cm-popup-modal v-if="libPickOpen" popup-cmd="cmPopup-widget-lib-pick" popup-code="widgetLib" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uC804\uC2DC\uC704\uC82FLib \uC120\uD0DD \uD31D\uC5C5 =========================================== -->
  <!-- ===== \u25A0. \uC804\uC2DC\uD56D\uBAA9 \uBCF5\uC0AC \uD31D\uC5C5 ============================================== -->
  <row-pick-modal v-if="rowCopyOpen"
    :title="'\uC804\uC2DC\uD56D\uBAA9 \uBCF5\uC0AC [' + (form.name || '\uD604\uC7AC \uD328\uB110') + ']'"
    :displays="pickData.displays"
    :areas="pickData.areaCodes"
    :exclude-panel-id="form.dispId" modal-name="row-pick" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uC804\uC2DC\uD56D\uBAA9 \uBCF5\uC0AC \uD31D\uC5C5 ============================================== -->
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <bo-cm-popup-modal v-if="pathPickModal ? (pathPickModal.show) : false" popup-cmd="cmPopup-path-pick" popup-code="path" result-type="id" :init-param="{ bizCd: 'ec_disp_panel' }" title="\uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
</bo-container>
</div>
`};
