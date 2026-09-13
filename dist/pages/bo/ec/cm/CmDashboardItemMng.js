window.CmDashboardItemMng={name:"CmDashboardItemMng",props:{navigate:{type:Function,required:!0}},setup(Ke){const{ref:j,reactive:x,computed:S,onMounted:ve,onUnmounted:We}=Vue,{showToast:k,showConfirm:le}=window.boApp,C=window.cmDashWidgetUtil,R=x([]),_=x([]),W=x({}),N=x({pageNo:1,pageSize:30,pageTotalPage:1,pageTotalCount:0,pageSizes:[10,20,30,50,100]}),z=x({loading:!1,panelLoading:!1,viewMode:"tree",pdfExporting:!1}),xe=j(null),Je=async()=>{z.pdfExporting=!0;try{const e=n.itemNm||n.itemKey||"\uB300\uC2DC\uBCF4\uB4DC\uC704\uC82F\uD56D\uBAA9",t=coUtil.cofBuildExportFilename(`${e}.pdf`);await window.boUtil.bofExportPdf(xe.value,t,k)}finally{z.pdfExporting=!1}},Qe=x({}),v=x([]),M=x({collapsed:{}}),y=x([]),b=x([]),J=x({}),O=x({searchValue:"",useYn:"",itemNm:""}),T=x({selectedId:null}),h=x({selectedId:null,isNew:!1,show:!1,dtlMode:"view"}),oe=S(()=>h.dtlMode==="view"),Se=()=>({dashboardItemId:null,dashboardId:"",itemKey:"",itemNm:"",widgetTypeCd:"CHART",axisTypeCd:"CATEGORY",seriesOrientCd:"ROW",chartTypeCd:"bar",sortOrd:10,autoCollectYn:"N",editableYn:"Y",inputOpts:"",panelWidth:1,panelHeight:1,realtimeYn:"N",useYn:"Y",optionJson:"",lvl1CodeGrp:"",lvl2CodeGrp:"",simJson:"",lvl2PaletteCd:"DASH_WIDGET_COLORS_01",lvl3PaletteCd:"DASH_WIDGET_COLORS_02",widgetGenTypeCd:"MANUAL",genQuery:"",refItemKey:""}),n=x(Se()),ne=j((()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}`})()),F=x({}),$=S(()=>{var e;return((e=window.boCommonFilter)==null?void 0:e.siteId)||""}),Be=e=>!!e.ownerUserId||(e.uiCompNm||"").indexOf("MY:")===0,Ve=S(()=>R.find(e=>e.dashboardId===T.selectedId)||null),je=(e,t)=>{if(e==="searchParam-list")return se();if(e==="searchParam-reset")return O.searchValue="",O.useYn="",O.itemNm="",T.selectedId=null,P(),se();if(e==="panels-add")return et();if(e==="panelForm-save")return ot();if(e==="panelForm-close")return P();if(e==="panelForm-edit")return at();if(e==="panelForm-cancel")return lt();if(e==="dash-layout")return Ke.navigate("cmDashboardLayoutMng",{dtlId:T.selectedId});console.warn("[handleBtnAction] unknown cmd:",e)},$e=(e,t,a,l={})=>{if(e==="dashboards-cellClick")return l.col&&l.col.link||t==="__no__"?Ze(a):void 0;if(e==="panels-cellClick")return t==="btn_row_edit"?tt(a):t==="btn_row_delete"?st(a):l.col&&l.col.link||t==="__no__"?Ce(a):void 0;console.warn("[handleGridCellAction] unknown cmd:",e)};ve(async()=>{const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(O).forEach(a=>{!t.includes(a)&&e.has(a)&&(O[a]=e.get(a))}),await se()});const se=async()=>{var e;z.loading=!0;try{let a=((e=(await boApiSvc.cmDashboard.getList({siteId:$.value},"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uAD00\uB9AC","\uB300\uC2DC\uBCF4\uB4DC\uC870\uD68C")).data)==null?void 0:e.data)||[];const l=(O.searchValue||"").trim().toLowerCase();l&&(a=a.filter(d=>(d.dashboardNm||"").toLowerCase().includes(l)||(d.uiCompNm||"").toLowerCase().includes(l))),O.useYn&&(a=a.filter(d=>(d.useYn||"Y")===O.useYn)),a.sort((d,r)=>(d.sortOrd||0)-(r.sortOrd||0)),R.splice(0,R.length,...a),await q(),T.selectedId&&!a.some(d=>d.dashboardId===T.selectedId)&&(T.selectedId=null,_.splice(0,_.length),P()),N.pageNo=1,await U()}catch(t){k(coUtil.cofErrMsg(t,"\uC870\uD68C \uC624\uB958"),"error",0)}finally{z.loading=!1}},q=async()=>{var e;try{const t=await boApiSvc.cmDashboard.getItemList({siteId:$.value},"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uAD00\uB9AC","\uD56D\uBAA9\uC218\uC870\uD68C"),a={};(((e=t.data)==null?void 0:e.data)||[]).forEach(l=>{a[l.dashboardId]=(a[l.dashboardId]||0)+1}),Object.keys(W).forEach(l=>delete W[l]),Object.assign(W,a)}catch(t){console.warn("[\uD56D\uBAA9 \uC218 \uC870\uD68C \uC624\uB958]",t)}},U=async()=>{var e;if(!T.selectedId&&!R.length){_.splice(0,_.length),v.splice(0,v.length),N.pageTotalCount=0,N.pageTotalPage=1;return}z.panelLoading=!0;try{const t={pageNo:N.pageNo,pageSize:N.pageSize};O.useYn&&(t.useYn=O.useYn),O.itemNm&&(t.itemNm=O.itemNm),T.selectedId?t.dashboardId=T.selectedId:t.dashboardIds=R.map(m=>m.dashboardId).join(",");const l=((e=(await boApiSvc.cmDashboard.getItemPageWithTree(t,"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uAD00\uB9AC","\uD56D\uBAA9\uC870\uD68C")).data)==null?void 0:e.data)||{};_.splice(0,_.length,...l.pageList||[]),N.pageTotalCount=l.pageTotalCount||0,N.pageTotalPage=l.pageTotalPage||1;const d=new Map(R.map(m=>[m.dashboardId,m.dashboardNm])),r=(l.treeRows||[]).map(m=>({...m,_dashboardNm:m.lvl===1&&d.get(m.dashboardId)||""}));v.splice(0,v.length,...r),ge(),Xe()}catch(t){k(coUtil.cofErrMsg(t,"\uD56D\uBAA9 \uC870\uD68C \uC624\uB958"),"error",0)}finally{z.panelLoading=!1}},qe=async()=>{var e;try{const t=_.map(r=>r.dashboardItemId).filter(Boolean);if(!t.length){v.splice(0,v.length);return}const a=await boApiSvc.cmDashboard.getItemTree({chartIds:t.join(",")},"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uAD00\uB9AC","\uD56D\uBAA9\uD2B8\uB9AC\uC870\uD68C"),l=new Map(R.map(r=>[r.dashboardId,r.dashboardNm])),d=(((e=a.data)==null?void 0:e.data)||[]).map(r=>({...r,_dashboardNm:r.lvl===1&&l.get(r.dashboardId)||""}));v.splice(0,v.length,...d),ge()}catch(t){v.splice(0,v.length),console.warn("[\uD56D\uBAA9 \uD2B8\uB9AC \uC870\uD68C \uC624\uB958]",t)}},Xe=()=>{const e={};v.forEach(t=>{t.parentDashboardItemId&&(e[t.parentDashboardItemId]=e[t.parentDashboardItemId]||[]).push(t)}),_.forEach(t=>{const a=e[t.dashboardItemId]||[];t._seriesCnt=a.length,t._colCnt=a.length?(e[a[0].dashboardItemId]||[]).length:0}),v.forEach(t=>{if(t.lvl!==1)return;const a=e[t.dashboardItemId]||[];t._seriesCnt=a.length,t._colCnt=a.length?(e[a[0].dashboardItemId]||[]).length:0})},Ze=e=>{T.selectedId=e.dashboardId,P(),N.pageNo=1,U()},P=()=>{h.show=!1,h.selectedId=null,h.isNew=!1,h.dtlMode="view"},et=()=>{if(!T.selectedId)return k("\uB300\uC2DC\uBCF4\uB4DC\uB97C \uBA3C\uC800 \uC120\uD0DD\uD558\uC138\uC694.","error");h.selectedId=null,h.isNew=!0,h.show=!0,h.dtlMode="edit";const e=_.reduce((t,a)=>Math.max(t,a.sortOrd||0),0);Object.assign(n,Se(),{sortOrd:e+10,dashboardId:T.selectedId}),we()},re=(e,t)=>{h.selectedId=e.dashboardItemId,h.isNew=!1,h.show=!0,h.dtlMode=t,Object.assign(n,{dashboardItemId:e.dashboardItemId,dashboardId:e.dashboardId||T.selectedId||"",itemKey:e.itemKey||"",itemNm:e.itemNm,widgetTypeCd:e.widgetTypeCd||C.itemTypeOf(e),axisTypeCd:e.axisTypeCd||"CATEGORY",seriesOrientCd:e.seriesOrientCd||"ROW",autoCollectYn:e.autoCollectYn||"N",editableYn:e.editableYn||"Y",inputOpts:e.inputOpts||"",chartTypeCd:e.chartTypeCd||"bar",sortOrd:e.sortOrd||10,panelWidth:e.panelWidth||1,panelHeight:e.panelHeight||1,realtimeYn:e.realtimeYn||"N",useYn:e.useYn||"Y",optionJson:e.optionJson||"",lvl1CodeGrp:e.lvl1CodeGrp||"",lvl2CodeGrp:e.lvl2CodeGrp||"",simJson:e.simJson||"",lvl2PaletteCd:e.lvl2PaletteCd||"DASH_WIDGET_COLORS_01",lvl3PaletteCd:e.lvl3PaletteCd||"DASH_WIDGET_COLORS_02",widgetGenTypeCd:e.widgetGenTypeCd||"MANUAL",genQuery:e.genQuery||"",refItemKey:e.refItemKey||""}),we(),X()},Ce=e=>re(e,"view"),tt=e=>re(e,"edit"),at=()=>{h.dtlMode="edit"},lt=()=>{if(h.isNew)return P();const e=_.find(t=>t.dashboardItemId===h.selectedId);return e?Ce(e):P()},ot=async()=>{var e,t,a;if(Object.keys(F).forEach(l=>delete F[l]),!n.dashboardId)return F.dashboardId="\uB300\uC2DC\uBCF4\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694.",k("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");if(!n.itemKey)return F.itemKey="\uD56D\uBAA9 \uD0A4\uB97C \uC785\uB825\uD558\uC138\uC694.",k("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");if(!n.itemNm)return F.itemNm="\uD56D\uBAA9\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694.",k("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");if(await le("\uC800\uC7A5","\uD56D\uBAA9\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")){wt();try{const l={dashboardItemId:h.isNew?null:n.dashboardItemId,rowStatus:h.isNew?"I":"U",siteId:$.value,dashboardId:n.dashboardId||T.selectedId,itemKey:n.itemKey||null,itemNm:n.itemNm,itemTypeCd:"chart",widgetTypeCd:n.widgetTypeCd,axisTypeCd:n.axisTypeCd||"CATEGORY",seriesOrientCd:n.seriesOrientCd||"ROW",autoCollectYn:n.autoCollectYn||"N",editableYn:n.editableYn||"Y",inputOpts:n.inputOpts||null,chartTypeCd:n.widgetTypeCd==="CHART"?n.chartTypeCd:null,sortOrd:Number(n.sortOrd)||10,panelWidth:Number(n.panelWidth)||1,panelHeight:Number(n.panelHeight)||1,realtimeYn:n.realtimeYn,useYn:n.useYn,optionJson:n.optionJson||null,simJson:n.simJson||null,lvl1CodeGrp:n.lvl1CodeGrp||null,lvl2CodeGrp:n.lvl2CodeGrp||null,lvl2PaletteCd:n.lvl2PaletteCd||null,lvl3PaletteCd:n.lvl3PaletteCd||null,widgetGenTypeCd:n.widgetGenTypeCd||"MANUAL",genQuery:n.widgetGenTypeCd==="QUERY"&&n.genQuery||null,refItemKey:n.widgetGenTypeCd==="QUERY"&&n.refItemKey||null},r=((t=(e=(await boApiSvc.cmDashboard.itemSave("base",l,"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uAD00\uB9AC","\uD56D\uBAA9\uC800\uC7A5")).data)==null?void 0:e.data)==null?void 0:t.dashboardItemId)||n.dashboardItemId;let m="";if(r&&n.widgetGenTypeCd!=="QUERY"){const w=((a=(await boApiSvc.cmDashboard.syncItemChildren(r,{series:y.map(E=>({dashboardItemId:E.dashboardItemId,cd:E.cd,name:E.name,color:E.color,autoCollectYn:E.autoCollectYn||"N",editableYn:E.editableYn||"Y"})),cols:b.map(E=>({dashboardItemId:E.dashboardItemId,cd:E.cd,name:E.name,color:E.color,autoCollectYn:E.autoCollectYn||"N",editableYn:E.editableYn||"Y"})),cellOverrides:{...A}},"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uAD00\uB9AC","\uD558\uC704\uD589\uB3D9\uAE30\uD654")).data)==null?void 0:a.data)||{};w.deletedRows&&(m=` (\uC0AD\uC81C ${w.deletedRows}\uD589, \uAC12 ${w.deletedData||0}\uAC74 \uC815\uB9AC)`)}k("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4."+m,"success"),P(),await U(),await q()}catch(l){k(coUtil.cofErrMsg(l,"\uC800\uC7A5 \uC624\uB958"),"error",0)}}},nt=async()=>{var t;if(!n.genQuery||!n.genQuery.trim()){k("\uC0DD\uC131 \uCFFC\uB9AC(SQL)\uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if(h.isNew||!n.dashboardItemId){k("\uBA3C\uC800 [\uC800\uC7A5]\uC73C\uB85C \uC704\uC82F\uC744 \uB4F1\uB85D\uD55C \uB4A4 \uCFFC\uB9AC\uB97C \uC2E4\uD589\uD558\uC138\uC694.","error");return}if(!/^\d{8}$/.test(ne.value||"")){k("\uAE30\uC900\uC77C\uC790\uB294 8\uC790\uB9AC \uC22B\uC790(YYYYMMDD)\uB85C \uC785\uB825\uD558\uC138\uC694.","error");return}if(await le("\uCFFC\uB9AC \uC2E4\uD589",`\uC800\uC7A5\uB41C \uC0DD\uC131 \uCFFC\uB9AC\uB97C \uC2E4\uD589\uD574 \uC2DC\uB9AC\uC988\xB7\uD56D\uBAA9\xB7\uAC12\uC744 \uC790\uB3D9\uC73C\uB85C \uCC44\uC6C1\uB2C8\uB2E4.
(\uBA3C\uC800 [\uC800\uC7A5]\uC744 \uB20C\uB7EC \uC9C0\uAE08 \uD654\uBA74\uC758 SQL\uC774 \uBC18\uC601\uB3FC \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4)
\uC9C4\uD589\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{const l=((t=(await boApiSvc.cmDashboard.generateFromQuery(n.dashboardItemId,{siteId:$.value,yyyymmdd:ne.value},"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uAD00\uB9AC","\uCFFC\uB9AC\uC2E4\uD589\uC0DD\uC131")).data)==null?void 0:t.data)||{},d=l.deletedRows?`, \uC61B \uD56D\uBAA9 ${l.deletedRows}\uAC1C \uC815\uB9AC`:"";k(`\uCFFC\uB9AC \uC2E4\uD589 \uC644\uB8CC \u2014 \uC2DC\uB9AC\uC988 ${l.series||0}\uAC1C, \uD56D\uBAA9 ${l.items||0}\uAC1C, \uAC12 ${l.values||0}\uAC74 \uBC18\uC601${d}`,"success"),await qe(),re(n,h.dtlMode),await q()}catch(a){k(coUtil.cofErrMsg(a,"\uCFFC\uB9AC \uC2E4\uD589 \uC624\uB958"),"error",0)}},st=async e=>{if(await le("\uC0AD\uC81C","["+e.itemNm+"] \uD56D\uBAA9\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{await boApiSvc.cmDashboard.itemSave("base",{dashboardItemId:e.dashboardItemId,rowStatus:"D"},"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uAD00\uB9AC","\uD56D\uBAA9\uC0AD\uC81C"),k("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),h.selectedId===e.dashboardItemId&&P(),await U(),await q()}catch(t){k(coUtil.cofErrMsg(t,"\uC0AD\uC81C \uC624\uB958"),"error",0)}},rt=e=>_.find(t=>t.dashboardItemId===e)||{dashboardItemId:e},it=e=>v.filter(t=>t.lvl===2&&t.parentDashboardItemId===e).map(t=>({dashboardItemId:t.dashboardItemId,cd:t.itemCd||"",name:t.itemNm||"",color:t.lvl2Color||"",autoCollectYn:t.autoCollectYn||"N",editableYn:t.editableYn||"Y"})),dt=e=>{const t=v.find(a=>a.lvl===2&&a.parentDashboardItemId===e);return t?v.filter(a=>a.lvl===3&&a.parentDashboardItemId===t.dashboardItemId).map(a=>({dashboardItemId:a.dashboardItemId,cd:a.itemCd||"",name:a.itemNm||"",color:a.lvl3Color||"",autoCollectYn:a.autoCollectYn||"N",editableYn:a.editableYn||"Y"})):[]},we=()=>{const e=n.dashboardItemId;let t=e?it(e):[],a=e?dt(e):[];y.splice(0,y.length,...t),b.splice(0,b.length,...a),Ct(),p.scriptManual=!1,It(),!g.some(d=>d.some(r=>r!==null&&r!==""&&r!==void 0))&&b.length&&_e(),K()},Ie=async e=>{const t=String(e||"").trim();if(!(!t||J[t]))try{const a=window.sfGetBoCodeStore();await a.saLoadCodes([t],{compNm:"CmDashboardItemMng"}),J[t]=a.sgGetGrpCodes(t)}catch(a){console.warn("[\uCF54\uB4DC\uADF8\uB8F9 \uC870\uD68C \uC2E4\uD328]",t,a),J[t]=[]}},ke=e=>J[String(e||"").trim()]||[],X=async()=>{await Promise.all([Ie(n.lvl1CodeGrp),Ie(n.lvl2CodeGrp)])},ct=(e,t)=>{const a=ke(t).find(l=>l.codeValue===e.cd);a&&!String(e.name||"").trim()&&(e.name=a.codeLabel)},pt=()=>y.push({cd:"",name:"",color:"",autoCollectYn:"N",editableYn:"Y"}),mt=()=>b.push({cd:"",name:"",color:"",autoCollectYn:"N",editableYn:"Y"}),Te=e=>y.splice(e,1),Ee=e=>b.splice(e,1),Z=(e,t)=>{const a=[n.itemKey||"\uD56D\uBAA9\uD0A4"];return String(e||"").trim()&&a.push(String(e).trim()),String(t||"").trim()&&a.push(String(t).trim()),a.join("-")},g=x([]),ft=j("ROW"),Q=()=>{const e=Math.max(y.length,1),t=b.length;for(;g.length>e;)g.pop();for(;g.length<e;)g.push([]);g.forEach(a=>{for(;a.length>t;)a.pop();for(;a.length<t;)a.push(null)})},_e=()=>{Q(),g.forEach(e=>{const t=Math.floor(Math.random()*450)+50;for(let a=0;a<e.length;a++)e[a]=Math.round(t*(.6+Math.random()*.8))}),K()},ut=()=>{Q(),g.forEach(e=>e.fill(null)),K()},bt=e=>{let t=0;return(g[e]||[]).forEach(a=>{const l=Number(a);Number.isNaN(l)||(t+=l)}),coUtil.cofFmt(t)},yt=e=>{let t=0;return g.forEach(a=>{const l=Number(a[e]);Number.isNaN(l)||(t+=l)}),coUtil.cofFmt(t)},ht=()=>{let e=0;return g.forEach(t=>t.forEach(a=>{const l=Number(a);Number.isNaN(l)||(e+=l)})),coUtil.cofFmt(e)},A=x({}),H=(e,t)=>{const a=y[e],l=b[t];return!a||!l?null:Z(a.cd||a.name,l.cd||l.name)},ie=(e,t)=>{const a=H(e,t),l=a?A[a]:null;return l&&l.autoCollectYn!=null?l.autoCollectYn==="Y":!!(b[t]&&b[t].autoCollectYn==="Y")},de=(e,t)=>{const a=H(e,t),l=a?A[a]:null;return l&&l.editableYn!=null?l.editableYn==="N":!!(b[t]&&b[t].editableYn==="N")},gt=(e,t)=>{const a=H(e,t);if(!a)return;const l=ie(e,t);A[a]={...A[a]||{},autoCollectYn:l?"N":"Y"}},vt=(e,t)=>{const a=H(e,t);if(!a)return;const l=de(e,t);A[a]={...A[a]||{},editableYn:l?"Y":"N"}},xt=()=>{const e=y.every((t,a)=>b.every((l,d)=>ie(a,d)));y.forEach((t,a)=>b.forEach((l,d)=>{const r=H(a,d);r&&(A[r]={...A[r]||{},autoCollectYn:e?"N":"Y"})}))},St=()=>{const e=y.every((t,a)=>b.every((l,d)=>de(a,d)));y.forEach((t,a)=>b.forEach((l,d)=>{const r=H(a,d);r&&(A[r]={...A[r]||{},editableYn:e?"Y":"N"})}))},Ct=()=>{Object.keys(A).forEach(t=>delete A[t]);const e=(n.itemKey||"")+"-";v.filter(t=>t.lvl===3&&t.itemKey&&t.itemKey.indexOf(e)===0).forEach(t=>{A[t.itemKey]={autoCollectYn:t.autoCollectYn||"N",editableYn:t.editableYn||"Y"}})},wt=()=>{const e=g.some(a=>a.some(l=>l!==null&&l!==""&&l!==void 0)),t=String(p.styleSrc||"").trim();if(!e&&!t){n.simJson="";return}n.simJson=JSON.stringify({values:g.map(a=>a.map(l=>l===""||l===void 0?null:l)),style:t||void 0})},It=()=>{Q(),p.styleSrc="";const e=n.simJson;if(!e||!String(e).trim()){ye("");return}try{const t=JSON.parse(e);Array.isArray(t.values)&&t.values.forEach((a,l)=>{!g[l]||!Array.isArray(a)||a.forEach((d,r)=>{r<g[l].length&&(g[l][r]=d)})}),t.style&&(p.styleSrc=String(t.style))}catch(t){console.warn("[\uC2DC\uBBAC\uB808\uC774\uC158 \uAC12 \uBCF5\uC6D0 \uC2E4\uD328]",t)}ye(p.styleSrc)},Ae=S(()=>y.length?y.map((e,t)=>e.name||e.cd||"\uC2DC\uB9AC\uC988"+(t+1)):["(\uB2E8\uC77C)"]),Ne=S(()=>b.map((e,t)=>e.name||e.cd||"\uD56D\uBAA9"+(t+1))),Oe=S({get(){return n.lvl2PaletteCd||"DASH_WIDGET_COLORS_01"},set(e){n.lvl2PaletteCd=e;const t=C.DASH_WIDGET_COLOR_SETS[e]||C.PALETTE;y.forEach((a,l)=>{a.color=t[l%t.length]})}}),ce=S(()=>C.DASH_WIDGET_COLOR_SETS[Oe.value]||C.PALETTE),De=S({get(){return n.lvl3PaletteCd||"DASH_WIDGET_COLORS_02"},set(e){n.lvl3PaletteCd=e;const t=C.DASH_WIDGET_COLOR_SETS[e]||C.PALETTE;b.forEach((a,l)=>{a.color=t[l%t.length]})}}),pe=S(()=>C.DASH_WIDGET_COLOR_SETS[De.value]||C.PALETTE),Ye=e=>{const t=Ne.value,a=Ae.value,l=o=>y[o]&&y[o].color||ce.value[o%ce.value.length],d=o=>b[o]&&b[o].color||pe.value[o%pe.value.length],r=(o,s)=>{const i=g[o]?g[o][s]:null;return i===null||i===""||i===void 0?0:Number(i)||0};if(!t.length)return{};if(e==="pie"||e==="doughnut"||e==="rose")return{tooltip:{trigger:"item"},legend:{bottom:0,type:"plain"},color:t.map((o,s)=>d(s)),series:[{type:"pie",radius:e==="doughnut"?["20%","65%"]:e==="rose"?["10%","65%"]:"60%",center:["50%","45%"],roseType:e==="rose"?"radius":void 0,label:{show:!0,formatter:o=>o.name+`
`+coUtil.cofFmt(o.value)},data:t.map((o,s)=>({name:o,value:r(0,s),itemStyle:{color:d(s)}}))}]};if(e==="funnel")return{tooltip:{trigger:"item"},legend:{bottom:0,type:"plain"},series:[{type:"funnel",left:"10%",width:"80%",top:16,bottom:36,sort:"descending",label:{show:!0,formatter:o=>o.name+`
`+coUtil.cofFmt(o.value)},data:t.map((o,s)=>({name:o,value:r(0,s),itemStyle:{color:d(s)}}))}]};if(e==="treemap")return{tooltip:{trigger:"item",formatter:o=>o.name+": "+coUtil.cofFmt(o.value)},series:[{type:"treemap",roam:!1,breadcrumb:{show:!1},label:{show:!0,formatter:o=>o.name+`
`+coUtil.cofFmt(o.value)},data:a.map((o,s)=>({name:o,itemStyle:{color:l(s)},children:t.map((i,c)=>({name:i,value:r(s,c),itemStyle:{color:d(c)}}))}))}]};if(e==="sunburst")return{tooltip:{trigger:"item",formatter:o=>o.name+": "+coUtil.cofFmt(o.value)},series:[{type:"sunburst",radius:[0,"90%"],label:{rotate:"radial"},data:a.map((o,s)=>({name:o,itemStyle:{color:l(s)},children:t.map((i,c)=>({name:i,value:r(s,c),itemStyle:{color:d(c)}}))}))}]};if(e==="gauge"){let o=0;return a.forEach((i,c)=>t.forEach((f,u)=>{o+=r(c,u)})),{series:[{type:"gauge",min:0,max:Math.max(10,Math.ceil((o*1.25||10)/10)*10),progress:{show:!0,itemStyle:{color:l(0)}},itemStyle:{color:l(0)},detail:{valueAnimation:!0,formatter:i=>coUtil.cofFmt(i),fontSize:20,offsetCenter:[0,"70%"]},data:[{value:o,name:"\uD569\uACC4"}]}]}}if(e==="heatmap"){const o=[];a.forEach((i,c)=>t.forEach((f,u)=>o.push([u,c,r(c,u)])));const s=o.map(i=>i[2]);return{tooltip:{trigger:"item",formatter:i=>t[i.data[0]]+" / "+a[i.data[1]]+": "+coUtil.cofFmt(i.data[2])},grid:{left:90,right:16,top:20,bottom:60},xAxis:{type:"category",data:t,splitArea:{show:!0}},yAxis:{type:"category",data:a,splitArea:{show:!0}},visualMap:{min:Math.min(0,...s),max:Math.max(1,...s),calculable:!0,orient:"horizontal",bottom:0,inRange:{color:["#eef2ff",l(0)]}},series:[{type:"heatmap",data:o,label:{show:!0,fontSize:10,formatter:i=>coUtil.cofFmt(i.data[2])}}]}}if(e==="polarBar")return{tooltip:{trigger:"axis"},legend:{bottom:0,type:"plain"},polar:{radius:"65%"},angleAxis:{type:"category",data:t},radiusAxis:{type:"value"},series:a.map((o,s)=>({name:o,type:"bar",coordinateSystem:"polar",itemStyle:{color:l(s)},data:t.map((i,c)=>r(s,c))}))};if(e==="bar3D"){const o=[];a.forEach((i,c)=>t.forEach((f,u)=>o.push([u,c,r(c,u)])));const s=o.map(i=>i[2]);return{tooltip:{},visualMap:{min:0,max:Math.max(1,...s),calculable:!0,dimension:2,inRange:{color:["#313695","#4575b4","#74add1","#e0f3f8","#fee090","#f46d43","#a50026"]}},xAxis3D:{type:"category",data:t},yAxis3D:{type:"category",data:a},zAxis3D:{type:"value"},grid3D:{boxWidth:100,boxDepth:55,viewControl:{autoRotate:!1,alpha:22},light:{main:{intensity:1.2}}},series:[{type:"bar3D",data:o,shading:"lambert",bevelSize:.2}]}}if(e==="scatter3D"){const o=[];a.forEach((i,c)=>t.forEach((f,u)=>o.push([u,c,r(c,u)])));const s=o.map(i=>i[2]);return{tooltip:{},visualMap:{min:0,max:Math.max(1,...s),calculable:!0,dimension:2,inRange:{color:["#313695","#4575b4","#74add1","#e0f3f8","#fee090","#f46d43","#a50026"],symbolSize:[8,28]}},xAxis3D:{type:"category",data:t},yAxis3D:{type:"category",data:a},zAxis3D:{type:"value"},grid3D:{boxWidth:100,boxDepth:55,viewControl:{autoRotate:!1,alpha:22}},series:[{type:"scatter3D",data:o,symbolSize:12}]}}if(e==="surface"){const o=[];a.forEach((i,c)=>t.forEach((f,u)=>o.push([u,c,r(c,u)])));const s=o.map(i=>i[2]);return{tooltip:{},visualMap:{min:0,max:Math.max(1,...s),calculable:!0,inRange:{color:["#313695","#4575b4","#74add1","#e0f3f8","#fee090","#f46d43","#a50026"]}},xAxis3D:{type:"category",data:t},yAxis3D:{type:"category",data:a},zAxis3D:{type:"value"},grid3D:{boxWidth:100,boxDepth:55,viewControl:{autoRotate:!1,alpha:22}},series:[{type:"surface",data:o,shading:"color",wireframe:{show:!0}}]}}if(e==="line3D")return{tooltip:{},xAxis3D:{type:"category",data:t},yAxis3D:{type:"category",data:a},zAxis3D:{type:"value"},grid3D:{boxWidth:100,boxDepth:55,viewControl:{autoRotate:!1,alpha:22}},series:a.map((o,s)=>({type:"line3D",lineStyle:{color:l(s),width:4},data:t.map((i,c)=>[c,s,r(s,c)])}))};if(e==="polarLine")return{tooltip:{trigger:"axis"},legend:{bottom:0,type:"plain"},polar:{radius:"65%"},angleAxis:{type:"category",data:t},radiusAxis:{type:"value"},series:a.map((o,s)=>({name:o,type:"line",coordinateSystem:"polar",smooth:!0,itemStyle:{color:l(s)},data:t.map((i,c)=>r(s,c))}))};if(e==="themeRiver"){const o=[];return a.forEach((s,i)=>t.forEach((c,f)=>o.push([c,r(i,f),s]))),{tooltip:{trigger:"axis"},legend:{bottom:0,type:"plain",data:a},singleAxis:{type:"category",data:t,top:20,bottom:50},color:a.map((s,i)=>l(i)),series:[{type:"themeRiver",data:o,label:{show:!1}}]}}if(e==="parallel")return{tooltip:{},parallelAxis:a.map((o,s)=>({dim:s,name:o})),parallel:{left:70,right:70,top:30,bottom:40},series:[{type:"parallel",lineStyle:{width:2},data:t.map((o,s)=>({name:o,value:a.map((i,c)=>r(c,s)),lineStyle:{color:d(s)}}))}]};if(e==="boxplot"){const o=t.map((s,i)=>{const c=a.map((I,D)=>r(D,i)).sort((I,D)=>I-D),f=c.length,u=I=>{if(f===1)return c[0];const D=(f-1)*I,Y=Math.floor(D),V=Math.ceil(D);return c[Y]+(c[V]-c[Y])*(D-Y)};return{value:[c[0],u(.25),u(.5),u(.75),c[f-1]],itemStyle:{color:d(i),borderColor:d(i)}}});return{tooltip:{trigger:"item"},xAxis:{type:"category",data:t,boundaryGap:!0},yAxis:{type:"value"},series:[{type:"boxplot",data:o}]}}if(e==="sankey"){const s=[...a.map((f,u)=>({name:f+"\u200B",itemStyle:{color:l(u)}})),...t.map((f,u)=>({name:f,itemStyle:{color:d(u)}}))],i=[];a.forEach((f,u)=>t.forEach((I,D)=>{const Y=r(u,D);Y>0&&i.push({source:f+"\u200B",target:I,value:Y})}));const c=f=>String(f||"").replace(/​$/,"");return{tooltip:{trigger:"item",formatter:f=>f.dataType==="edge"?c(f.data.source)+" \u2192 "+f.data.target+": "+coUtil.cofFmt(f.data.value):c(f.name)},series:[{type:"sankey",emphasis:{focus:"adjacency"},data:s,links:i,label:{fontSize:10,formatter:f=>c(f.name)},lineStyle:{color:"gradient",curveness:.5}}]}}if(e==="graph"||e==="graphCircular"){const o=e==="graphCircular",s=[];a.forEach((u,I)=>t.forEach((D,Y)=>s.push(r(I,Y))));const i=Math.max(1,...s),c=[...a.map((u,I)=>({id:"s"+I,name:u,symbolSize:22,itemStyle:{color:l(I)},category:0})),...t.map((u,I)=>({id:"i"+I,name:u,symbolSize:14,itemStyle:{color:d(I)},category:1}))],f=[];return a.forEach((u,I)=>t.forEach((D,Y)=>{const V=r(I,Y);V>0&&f.push({source:"s"+I,target:"i"+Y,value:V,lineStyle:{width:1+5*(V/i)}})})),{tooltip:{},legend:[{data:["\uC2DC\uB9AC\uC988","\uD56D\uBAA9"],bottom:0,textStyle:{fontSize:10}}],series:[{type:"graph",layout:o?"circular":"force",roam:!0,draggable:!o,circular:o?{rotateLabel:!0}:void 0,categories:[{name:"\uC2DC\uB9AC\uC988"},{name:"\uD56D\uBAA9"}],force:o?void 0:{repulsion:150,edgeLength:90},label:{show:!0,fontSize:9},lineStyle:{color:"source",curveness:o?.3:.1,opacity:.6},data:c,links:f}]}}if(e==="tree")return{tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",orient:"LR",top:"4%",left:"9%",bottom:"4%",right:"18%",symbolSize:9,expandAndCollapse:!1,initialTreeDepth:-1,label:{fontSize:10,position:"left",verticalAlign:"middle",align:"right"},leaves:{label:{position:"right",verticalAlign:"middle",align:"left"}},data:[{name:n.itemNm||"\uC804\uCCB4",itemStyle:{color:"#94a3b8"},children:a.map((o,s)=>({name:o,itemStyle:{color:l(s)},children:t.map((i,c)=>({name:i+" ("+coUtil.cofFmt(r(s,c))+")",value:r(s,c),itemStyle:{color:d(c)}}))}))}]}]};if(e==="pictorialBar")return{tooltip:{trigger:"axis"},legend:{bottom:0,type:"plain"},grid:{left:48,right:16,top:20,bottom:48},xAxis:{type:"category",data:t},yAxis:{type:"value"},series:a.map((o,s)=>({name:o,type:"pictorialBar",symbol:"roundRect",symbolRepeat:!0,symbolSize:["60%","12%"],symbolMargin:"20%",itemStyle:{color:l(s)},data:t.map((i,c)=>r(s,c))}))};const m=e==="area"||e==="stackedArea",G=e==="stackedBar"||e==="stackedLine"||e==="stackedArea",w=e==="stackedBar"?"bar":m||e==="line"||e==="stackedLine"||e==="radar"?"line":e,E=w==="bar"&&!G,ae=a.map((o,s)=>({name:o,type:w==="scatter"?"scatter":w,stack:G?"total":void 0,itemStyle:E?{color:l(s),borderRadius:[6,6,0,0],shadowBlur:6,shadowColor:"rgba(0,0,0,0.10)",shadowOffsetY:3}:{color:l(s)},areaStyle:m?{opacity:.75}:void 0,smooth:w==="line",symbol:w==="line"?"circle":void 0,symbolSize:w==="line"?6:void 0,lineStyle:w==="line"?{width:3}:void 0,label:G&&w==="bar"?{show:!0,position:"inside",fontSize:10,color:"#fff",fontWeight:700,formatter:i=>o+`
`+coUtil.cofFmt(i.value)}:{show:!0,position:"top",fontSize:10,color:"#334155",formatter:i=>coUtil.cofFmt(i.value)},data:t.map((i,c)=>r(s,c))}));if(G){const o=s=>a.reduce((i,c,f)=>i+r(f,s),0);ae.push({name:"\uD569\uACC4",type:"scatter",z:10,symbolSize:9,tooltip:{show:!1},label:{show:!0,position:"top",fontWeight:700,color:"#334155",formatter:s=>coUtil.cofFmt(s.value)},data:t.map((s,i)=>({value:o(i),itemStyle:{color:d(i)}}))})}return{tooltip:{trigger:"axis"},legend:{bottom:0,type:"plain",data:G?a:void 0,icon:"circle",itemWidth:8,itemHeight:8,textStyle:{color:"#64748b",fontSize:11}},grid:{left:48,right:16,top:40,bottom:64},xAxis:{type:"category",data:t,axisLine:{lineStyle:{color:"#dde3ea"}},axisTick:{show:!1},axisLabel:{color:"#64748b"}},yAxis:{type:"value",axisLine:{show:!1},axisLabel:{color:"#94a3b8"},splitLine:{lineStyle:{color:"#eef1f5",type:"dashed"}}},series:ae}},Re=S(()=>Ye(n.chartTypeCd||"bar")),Me=x({chartTypeCd:"line"}),kt=S(()=>Ye(Me.chartTypeCd)),me="cm-dash-src-style",Tt="cm-dash-src-preview",p=x({tab:"component",componentSrc:"",scriptSrc:"",dataSrc:"",styleSrc:"",scriptManual:!1,scriptErr:"",dataErr:"",componentErr:"",appliedMsg:"",previewHeight:"260px",autoApply:!0,autoPending:!1}),Et=400;let ee=null;const _t=()=>{if(!p.autoApply){p.autoPending=!1;return}p.autoPending=!0,clearTimeout(ee),ee=setTimeout(()=>{p.autoPending=!1,be(!0)},Et)},At=()=>{clearTimeout(ee),p.autoPending=!1,p.autoApply&&be(!0)},te=j(null),Nt=e=>String(e==null?"":e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|(-?\b\d+\.?\d*(?:[eE][+-]?\d+)?\b)/g,(a,l,d,r,m)=>l?d?'<span class="cmd-tk-key">'+l+'</span><span class="cmd-tk-p">'+d+"</span>":'<span class="cmd-tk-str">'+l+"</span>":r?'<span class="cmd-tk-kw">'+r+"</span>":m?'<span class="cmd-tk-num">'+m+"</span>":a),Ot=e=>{const t=w=>String(w==null?"":w).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a=String(e==null?"":e),l=w=>w.replace(/([\w-]+)(\s*:\s*)([^;]*)(;?)/g,(E,ae,o,s,i)=>'<span class="cmd-tk-key">'+t(ae)+'</span><span class="cmd-tk-p">'+t(o)+'</span><span class="cmd-tk-str">'+t(s)+'</span><span class="cmd-tk-p">'+t(i)+"</span>");let d="",r=0,m;const G=/([^{]*)\{([^}]*)\}/g;for(;(m=G.exec(a))!==null;)d+=t(a.slice(r,m.index))+'<span class="cmd-tk-sel">'+t(m[1])+'</span><span class="cmd-tk-p">{</span>'+l(m[2])+'<span class="cmd-tk-p">}</span>',r=m.index+m[0].length;return d+t(a.slice(r))},Dt={component:"componentSrc",script:"scriptSrc",data:"dataSrc",style:"styleSrc"},Pe=S(()=>Dt[p.tab]||"componentSrc"),fe=S({get:()=>p[Pe.value],set:e=>{p[Pe.value]=e}}),Yt=S(()=>(p.tab==="style"?Ot(fe.value):Nt(fe.value))+`
`),Rt=e=>{te.value&&(te.value.scrollTop=e.target.scrollTop,te.value.scrollLeft=e.target.scrollLeft)},ue="cm-dash-code-style",Mt=[".cmd-code-wrap{position:relative;border-radius:6px;overflow:hidden;background:#0f172a;border:1px solid #1e293b;}",'.cmd-code-hl,.cmd-code-ta{margin:0;padding:10px 12px;font-family:Consolas,Monaco,"Courier New",monospace;',"  font-size:12px;line-height:1.55;white-space:pre;tab-size:2;border:0;}",".cmd-code-hl{position:absolute;inset:0;overflow:auto;color:#e2e8f0;pointer-events:none;}",".cmd-code-ta{position:relative;width:100%;display:block;background:transparent;color:transparent;","  caret-color:#f8fafc;resize:vertical;overflow:auto;outline:none;}",".cmd-code-ta::selection{background:rgba(96,165,250,.35);}",".cmd-tk-key{color:#7dd3fc;}",".cmd-tk-str{color:#86efac;}",".cmd-tk-num{color:#fca5a5;}",".cmd-tk-kw{color:#c4b5fd;}",".cmd-tk-p{color:#94a3b8;}",".cmd-tk-sel{color:#fbbf24;}"].join(`
`);ve(()=>{if(!document.getElementById(ue)){const e=document.createElement("style");e.id=ue,e.textContent=Mt,document.head.appendChild(e)}});const Pt=[{id:"component",label:"\uCEF4\uD3EC\uB10C\uD2B8"},{id:"script",label:"\uC2A4\uD06C\uB9BD\uD2B8"},{id:"data",label:"\uB370\uC774\uD0C0"},{id:"style",label:"\uC2A4\uD0C0\uC77C"}],K=()=>{p.componentSrc=JSON.stringify({itemKey:n.itemKey||"",widgetTypeCd:n.widgetTypeCd,chartTypeCd:n.chartTypeCd,panelWidth:Number(n.panelWidth)||1,panelHeight:Number(n.panelHeight)||1,height:p.previewHeight||"260px"},null,2),p.scriptManual||(p.scriptSrc=JSON.stringify(Re.value,null,2)),p.dataSrc=JSON.stringify({series:y.map(e=>({cd:e.cd,name:e.name,color:e.color})),cols:b.map(e=>({cd:e.cd,name:e.name})),values:g.map(e=>e.slice())},null,2)},be=e=>{const t=a=>(e?"\uC2E4\uC2DC\uAC04 \uBC18\uC601\uB428 \xB7 ":"")+a;if(p.appliedMsg="",p.tab==="component"){p.componentErr="";try{const a=JSON.parse(p.componentSrc||"{}");a.itemKey!==void 0&&(n.itemKey=String(a.itemKey)),a.widgetTypeCd&&(n.widgetTypeCd=a.widgetTypeCd),a.chartTypeCd&&(n.chartTypeCd=a.chartTypeCd),a.panelWidth!==void 0&&(n.panelWidth=Number(a.panelWidth)||1),a.panelHeight!==void 0&&(n.panelHeight=Number(a.panelHeight)||1),a.height&&(p.previewHeight=String(a.height)),p.appliedMsg=t("\uCEF4\uD3EC\uB10C\uD2B8 \uC124\uC815\uC744 \uBC18\uC601\uD588\uC2B5\uB2C8\uB2E4."),p.scriptManual||K()}catch(a){p.componentErr="JSON \uC624\uB958: "+a.message}return}if(p.tab==="script"){p.scriptErr="";try{JSON.parse(p.scriptSrc||"{}"),p.scriptManual=!0,p.appliedMsg=t("\uC2A4\uD06C\uB9BD\uD2B8\uB97C \uBBF8\uB9AC\uBCF4\uAE30\uC5D0 \uBC18\uC601\uD588\uC2B5\uB2C8\uB2E4. (\uC218\uB3D9 \uBAA8\uB4DC)")}catch(a){p.scriptErr="JSON \uC624\uB958: "+a.message}return}if(p.tab==="data"){p.dataErr="";try{const a=JSON.parse(p.dataSrc||"{}");Array.isArray(a.series)&&y.splice(0,y.length,...a.series.map(l=>({cd:l&&l.cd?String(l.cd):"",name:l&&l.name?String(l.name):"",color:l&&l.color?String(l.color):""}))),Array.isArray(a.cols)&&b.splice(0,b.length,...a.cols.map(l=>({cd:l&&l.cd?String(l.cd):"",name:l&&l.name?String(l.name):"",color:""}))),Q(),Array.isArray(a.values)&&a.values.forEach((l,d)=>{!g[d]||!Array.isArray(l)||l.forEach((r,m)=>{m<g[d].length&&(g[d][m]=r)})}),p.appliedMsg=t("\uB370\uC774\uD0C0\uB97C \uADF8\uB9AC\uB4DC\xB7\uBBF8\uB9AC\uBCF4\uAE30\uC5D0 \uBC18\uC601\uD588\uC2B5\uB2C8\uB2E4."),p.scriptManual||K()}catch(a){p.dataErr="JSON \uC624\uB958: "+a.message}return}ye(p.styleSrc),p.appliedMsg=t("\uC2A4\uD0C0\uC77C\uC744 \uBBF8\uB9AC\uBCF4\uAE30\uC5D0 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4.")},Lt=()=>{p.scriptManual=!1,p.scriptErr="",p.dataErr="",p.componentErr="",p.appliedMsg="\uC790\uB3D9\uC0DD\uC131 \uB0B4\uC6A9\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4.",K()},Gt=e=>{const t=String(e||"");return t.trim()?t.replace(/(^|\})\s*([^{}@]+)\{/g,(a,l,d)=>{const r=d.split(",").map(m=>m.trim()).filter(Boolean).map(m=>"#"+Tt+" "+m).join(", ");return(l||"")+`
`+r+" {"}):""},ye=e=>{let t=document.getElementById(me);t||(t=document.createElement("style"),t.id=me,document.head.appendChild(t)),t.textContent=Gt(e)};We(()=>{clearTimeout(ee),[me,ue].forEach(e=>{const t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)})});const zt=S(()=>{if(p.scriptManual)try{return JSON.parse(p.scriptSrc||"{}")}catch{}return Re.value}),B=e=>{const t=String(e||"").lastIndexOf("-");return t<0?"":String(e).slice(0,t)},Le=S(()=>{const e=new Set,t=new Set;return v.forEach(a=>{if(a.lvl!==2)return;const l=B(a.itemKey);e.has(l)||(e.add(l),t.add(a.itemKey))}),t}),Ge=e=>Le.value.has(e.itemKey),Ft=S(()=>_),Ut=S(()=>new Set(_.map(e=>e.itemKey))),ze=S(()=>v.filter(e=>{if(!Ut.value.has(e.item1Key))return!1;if(e.lvl===1)return!0;if(e.lvl===3&&!Le.value.has(B(e.itemKey)))return!1;let t=B(e.itemKey);for(;t;){if(M.collapsed[t])return!1;t=B(t)}return!0})),Fe=S(()=>{const e=new Map,t=[0,(N.pageNo-1)*N.pageSize,0,0];return ze.value.forEach(a=>{t[a.lvl]=(t[a.lvl]||0)+1;for(let l=a.lvl+1;l<t.length;l++)t[l]=0;e.set(a.itemKey,Array.from({length:a.lvl},(l,d)=>t[d+1]).join("."))}),e}),Ue=e=>Fe.value.get(e.itemKey)||"",Ht=e=>{N.pageNo=e,U()},Kt=()=>{N.pageNo=1,U()},he=e=>e.lvl===2&&!Ge(e)?!1:v.some(t=>B(t.itemKey)===e.itemKey),Wt=e=>{he(e)&&(M.collapsed[e.itemKey]?delete M.collapsed[e.itemKey]:M.collapsed[e.itemKey]=!0)},Jt=()=>{Object.keys(M.collapsed).forEach(e=>delete M.collapsed[e])},ge=()=>{v.forEach(e=>{he(e)&&(M.collapsed[e.itemKey]=!0)})},Qt=e=>e===1?"\u25CF":e===2?"\u25AA":"\xB7",Bt=e=>e===1?"#e8587a":e===2?"#2563eb":"#94a3b8",He=e=>e===1?"\uCC28\uD2B8":e===2?"\uC2DC\uB9AC\uC988":"\uD56D\uBAA9",Vt=e=>{if(!e)return"-";const t=v.find(a=>a.lvl===1&&a.itemKey===e)||_.find(a=>a.itemKey===e);return t&&t.itemNm?t.itemNm:e},L={};return L.dashTreeGrid=[{key:"_no",label:"\uBC88\uD638",width:"64px",align:"left",cellStyle:"color:#94a3b8;",fmt:(e,t)=>Ue(t)},{key:"_dashboardNm",label:"\uB300\uC2DC\uBCF4\uB4DC\uBA85",width:"120px",cellStyle:"color:#64748b;",fmt:(e,t)=>t.lvl===1?t._dashboardNm||"-":""},{key:"lvl",label:"\uB808\uBCA8",width:"56px",align:"center",badge:e=>e.lvl===1?"badge-red":e.lvl===2?"badge-blue":"badge-gray",fmt:(e,t)=>He(t.lvl)},{key:"itemNm",label:"\uD56D\uBAA9\uBA85 (\uCC28\uD2B8 \xB7 \uC2DC\uB9AC\uC988 \xB7 \uD56D\uBAA9)",width:"220px"},{key:"widgetGenTypeCd",label:"\uC0DD\uC131\uBC29\uC2DD",width:"150px"},{key:"itemCd",label:"\uCF54\uB4DC",width:"120px",mono:!0,cellStyle:"color:#2563eb;"},{key:"itemKey",label:"\uACE0\uC720 item_key",width:"210px",mono:!0,cellStyle:"color:#64748b;"},{key:"_seriesCnt",label:"\uD589\uAC1C\uC218",width:"64px",align:"center",fmt:(e,t)=>t.lvl===1?(t._seriesCnt||0)+"\uAC1C":""},{key:"_colCnt",label:"\uC5F4\uAC1C\uC218",width:"64px",align:"center",fmt:(e,t)=>t.lvl===1?(t._colCnt||0)+"\uAC1C":""},{key:"inputOpts",label:"\uC870\uD68C\uC870\uAC74(input_opts)",width:"150px",cellStyle:"color:#94a3b8;",fmt:(e,t)=>t.lvl===1?t.inputOpts||"site_id,yyyymm":""},{key:"_mgmt",label:"\uAD00\uB9AC",width:"96px",align:"center"}],L.seriesRowGrid=[{key:"cd",label:"\uCF54\uB4DC (cd)",width:"260px"},{key:"name",label:"\uC2DC\uB9AC\uC988\uBA85 (name)"},{key:"color",label:"\uC0C9\uC0C1 (color)",width:"150px"},{key:"_preview",label:"\uACE0\uC720 item_key \uBBF8\uB9AC\uBCF4\uAE30",width:"230px",fmt:(e,t)=>Z(t.cd||t.name,"")},{type:"actions",actions:[{label:"\uC0AD\uC81C",cls:"btn btn_row_delete",disabled:()=>oe.value,onClick:(e,t)=>Te(t)}]}],L.colRowGrid=[{key:"cd",label:"\uCF54\uB4DC (cd)",width:"260px"},{key:"name",label:"\uD56D\uBAA9\uBA85 (name)"},{key:"color",label:"\uC0C9\uC0C1 (color, \uD30C\uC774\uC6A9)",width:"150px"},{key:"_preview",label:"\uACE0\uC720 item_key \uBBF8\uB9AC\uBCF4\uAE30",width:"230px",fmt:(e,t)=>Z(y.length?y[0].cd||y[0].name:"",t.cd||t.name)},{type:"actions",actions:[{label:"\uC0AD\uC81C",cls:"btn btn_row_delete",disabled:()=>oe.value,onClick:(e,t)=>Ee(t)}]}],L.baseSearch=[{key:"searchValue",type:"text",placeholder:"\uB300\uC2DC\uBCF4\uB4DC\uBA85/\uCEF4\uD3EC\uB10C\uD2B8\uBA85 \uAC80\uC0C9",label:"\uB300\uC2DC\uBCF4\uB4DC\uBA85"},{key:"itemNm",type:"text",placeholder:"\uC704\uC82F\uD56D\uBAA9\uBA85 \uAC80\uC0C9(\uCC28\uD2B8\xB7\uC2DC\uB9AC\uC988\xB7\uD56D\uBAA9)",label:"\uC704\uC82F\uD56D\uBAA9\uBA85"},{key:"useYn",type:"select",label:"\uC0AC\uC6A9\uC5EC\uBD80",nullLabel:"\uC0AC\uC6A9\uC5EC\uBD80 \uC804\uCCB4",options:()=>[{value:"Y",label:"\uC0AC\uC6A9"},{value:"N",label:"\uBBF8\uC0AC\uC6A9"}]}],L.dashboards=[{key:"dashboardNm",label:"\uB300\uC2DC\uBCF4\uB4DC\uBA85",link:!0,fmt:(e,t)=>(Be(t)?"\u{1F464} ":"")+(e||"")+(t.useYn==="N"?" (\uBBF8\uC0AC\uC6A9)":""),cellInnerStyle:(e,t)=>T.selectedId===t.dashboardId?"color:#e8587a;font-weight:700;":""},{key:"_panelCnt",label:"\uD56D\uBAA9",style:"width:52px;",align:"center",fmt:(e,t)=>(W[t.dashboardId]||0)+"\uAC1C"}],L.panels=[{key:"itemKey",label:"\uD56D\uBAA9\uD0A4",style:"width:110px;",cellStyle:"font-family:monospace;font-size:11px;",link:!0},{key:"itemNm",label:"\uD56D\uBAA9\uBA85",cellInnerStyle:(e,t)=>h.selectedId===t.dashboardItemId?"color:#e8587a;font-weight:700;":""},{key:"widgetTypeCd",label:"\uC720\uD615",style:"width:88px;",fmt:(e,t)=>C.itemTypeIcon(C.itemTypeOf(t))+" "+C.itemTypeLabel(C.itemTypeOf(t))},{key:"chartTypeCd",label:"\uCC28\uD2B8\uC885\uB958",style:"width:96px;",fmt:(e,t)=>C.itemTypeOf(t)==="CHART"?C.chartTypeIcon(e)+" "+C.chartTypeLabel(e):"-"},{key:"_seriesCnt",label:"\uC2DC\uB9AC\uC988\uAC1C\uC218",style:"width:84px;",align:"center",fmt:(e,t)=>(t._seriesCnt||0)+"\uAC1C"},{key:"_colCnt",label:"\uB370\uC774\uD0C0\uC5F4\uAC1C\uC218",style:"width:90px;",align:"center",fmt:(e,t)=>(t._colCnt||0)+"\uAC1C"},{key:"panelWidth",label:"\uD3ED",style:"width:50px;",align:"center",fmt:e=>e||1},{key:"panelHeight",label:"\uB192\uC774",style:"width:50px;",align:"center",fmt:e=>e||1},{key:"sortOrd",label:"\uC815\uB82C",style:"width:60px;",align:"center"},{key:"realtimeYn",label:"\uC2E4\uC2DC\uAC04",style:"width:70px;",badge:e=>e.realtimeYn==="Y"?"badge-red":"badge-gray",fmt:e=>e==="Y"?"\uC2E4\uC2DC\uAC04":"-"},{key:"useYn",label:"\uC0AC\uC6A9",style:"width:70px;",badge:e=>e.useYn==="Y"?"badge-green":"badge-gray",fmt:e=>e==="Y"?"\uC0AC\uC6A9":"\uBBF8\uC0AC\uC6A9"}],L.panelForm=[{type:"group",label:"\uAE30\uBCF8 \xB7 \uBC30\uCE58\uC124\uC815"},{key:"dashboardId",label:"\uB300\uC2DC\uBCF4\uB4DC",type:"select",required:!0,colSpan:2,options:()=>R.map(e=>({value:e.dashboardId,label:e.dashboardNm})),hint:"\uB2E4\uB978 \uB300\uC2DC\uBCF4\uB4DC\uB85C \uBC14\uAFB8\uBA74 \uC800\uC7A5 \uC2DC \uC774 \uD56D\uBAA9\uACFC \uD558\uC704 \uC2DC\uB9AC\uC988\xB7\uD56D\uBAA9\uC774 \uD1B5\uC9F8\uB85C \uADF8 \uB300\uC2DC\uBCF4\uB4DC\uB85C \uC62E\uACA8\uAC04\uB2E4"},{key:"itemKey",label:"\uD56D\uBAA9 \uD0A4",type:"text",required:!0,mono:!0,placeholder:"COMP0101"},{key:"itemNm",label:"\uD56D\uBAA9\uBA85",type:"text",required:!0,colSpan:2},{key:"widgetTypeCd",label:"\uD56D\uBAA9\uC720\uD615",type:"select",options:()=>C.ITEM_TYPES.map(e=>({value:e.value,label:e.icon+" "+e.label}))},{key:"_chartTypeCd",label:"\uCC28\uD2B8\uC885\uB958",type:"slot",name:"chartTypeCd",visible:e=>e.widgetTypeCd==="CHART"},{key:"_colorPaletteCd",label:"\uC0C9\uC0C1 \uD314\uB808\uD2B8 (1\uC2DC\uB9AC\uC988/2\uD56D\uBAA9)",type:"slot",name:"colorPaletteCd",visible:e=>e.widgetTypeCd==="CHART",hint:"1=\uB9C9\uB300\xB7\uAEBE\uC740\uC120 \uB4F1 \uC2DC\uB9AC\uC988 \uC0C9\uC0C1 \uC21C\uC11C(\uAE30\uBCF8\uAC12 01. \uAE30\uBCF8), 2=\uD30C\uC774\xB7\uB3C4\uB11B \uB4F1 \uD56D\uBAA9 \uC0C9\uC0C1 \uC21C\uC11C(\uAE30\uBCF8\uAC12 02. \uBE44\uBE44\uB4DC)"},{key:"widgetGenTypeCd",label:"\uC704\uC82F\uC0DD\uC131\uD0C0\uC785",type:"select",options:()=>[{value:"MANUAL",label:"\uB9E4\uB274\uC5BC \uBC29\uC2DD (\uD654\uBA74\uC5D0\uC11C \uC2DC\uB9AC\uC988\xB7\uD56D\uBAA9 \uC9C1\uC811 \uC815\uC758)"},{value:"QUERY",label:"\uCFFC\uB9AC \uBC29\uC2DD (SQL \uC2E4\uD589 \uACB0\uACFC\uB85C \uC790\uB3D9 \uC0DD\uC131)"}]},{key:"refItemKey",label:"\uCC38\uC870\uD56D\uBAA9(item_key)",type:"text",mono:!0,placeholder:"\uC608: chart036 (\uC815\uBCF4 \uD45C\uC2DC\uC6A9 \u2014 \uC2E4\uC81C \uB370\uC774\uD130 \uC870\uD68C\uC640\uB294 \uBB34\uAD00)",visible:e=>e.widgetGenTypeCd==="QUERY"},{key:"_genQuery",label:"\uC0DD\uC131 \uCFFC\uB9AC(SQL)",type:"slot",name:"genQuery",colSpan:3,visible:e=>e.widgetGenTypeCd==="QUERY",hint:"SELECT \uB2E8\uBB38\uB9CC \uD5C8\uC6A9. \uACB0\uACFC \uCEEC\uB7FC 5\uAC1C\uB97C \uC774 \uC21C\uC11C\uB85C: series_cd, series_nm, item_cd, item_nm, val_num. :siteId \uC790\uB9AC\uD45C\uC2DC\uC790 \uC9C0\uC6D0"},{key:"seriesOrientCd",label:"\uC2DC\uB9AC\uC988 \uBC30\uCE58 \uBC29\uD5A5",type:"select",options:()=>[{value:"ROW",label:"\uD589 (\uC2DC\uB9AC\uC988=\uD589 \xB7 \uD56D\uBAA9=\uC5F4, \uAE30\uBCF8)"},{value:"COL",label:"\uC5F4 (\uD56D\uBAA9=\uD589 \xB7 \uC2DC\uB9AC\uC988=\uC5F4)"}],hint:"\uB370\uC774\uD130\uAD00\uB9AC \uADF8\uB9AC\uB4DC\uC5D0\uC11C \uC2DC\uB9AC\uC988\uB97C \uD589\uC5D0 \uB458\uC9C0 \uC5F4\uC5D0 \uB458\uC9C0 \u2014 \uD56D\uBAA9\uC774 \uB9CE\uACE0 \uC2DC\uB9AC\uC988\uAC00 \uC801\uC73C\uBA74 \uC5F4\uB85C \uBC14\uAFB8\uBA74 \uD3B8\uD568"},{key:"autoCollectYn",label:"\uC790\uB3D9\uC218\uC9D1\uC5EC\uBD80",type:"select",options:()=>[{value:"N",label:"\uC544\uB2C8\uC624 (\uC9C1\uC811\uC785\uB825, \uAE30\uBCF8)"},{value:"Y",label:"\uC608 (\uBC30\uCE58\uAC00 \uCC44\uC6C0)"}],onChange:e=>{e==="Y"&&(n.editableYn="N")},hint:"\uC608\uB85C \uB450\uBA74 SyStatsDashboardJob \uBC30\uCE58\uAC00 \uB9E4\uC77C \uC2E4 EC \uB370\uC774\uD130\uB97C \uC9D1\uACC4\uD574 \uCC44\uC6B4\uB2E4"},{key:"editableYn",label:"\uB370\uC774\uD130\uAD00\uB9AC \uD3B8\uC9D1\uC5EC\uBD80",type:"select",options:()=>[{value:"Y",label:"\uAC00\uB2A5 (\uAE30\uBCF8)"},{value:"N",label:"\uBD88\uAC00 (\uC790\uB3D9\uC218\uC9D1 \uAC12 \uBCF4\uD638)"}],hint:"\uC544\uB2C8\uC624\uBA74 \uB370\uC774\uD130\uAD00\uB9AC \uADF8\uB9AC\uB4DC\uC5D0\uC11C \uC774 \uCC28\uD2B8\uC758 \uAC12 \uC785\uB825\uCE78\uC774 \uBE44\uD65C\uC131\uD654\uB41C\uB2E4"},{key:"inputOpts",label:"\uC785\uB825 \uAE30\uC900\uC870\uAC74 \uD0A4",type:"text",mono:!0,colSpan:2,placeholder:"\uC608: site_id,yyyymm (\uBE44\uC6B0\uBA74 \uC774 \uAE30\uBCF8\uAC12 \uC801\uC6A9)",hint:"\uCF64\uB9C8\uB85C \uB098\uB208 \uC870\uD68C\uC870\uAC74 \uD1A0\uD070 \uBAA9\uB85D \u2014 \uB0A0\uC9DC \uD1A0\uD070\uBA85\uC774 \uAE30\uAC04\uAD6C\uBD84\uC744 \uACB8\uD568: yyyymmdd(\uC77C\uBCC4) / yyyymm(\uC6D4\uBCC4) / yyyy(\uC5F0\uB3C4\uBCC4). \uD544\uC694\uC2DC prod_id\xB7vendor_id \uCD94\uAC00"},{key:"panelWidth",label:"\uD56D\uBAA9 \uD3ED(\uC5F4 span)",type:"select",options:()=>[1,2,3,4,5,6].map(e=>({value:e,label:e}))},{key:"panelHeight",label:"\uD56D\uBAA9 \uB192\uC774(\uD589 span)",type:"select",options:()=>[1,2,3].map(e=>({value:e,label:e}))},{key:"sortOrd",label:"\uC815\uB82C\uC21C\uC11C",type:"number"},{key:"realtimeYn",label:"\uC2E4\uC2DC\uAC04 \uC5EC\uBD80",type:"select",options:()=>[{value:"N",label:"\uC77C\uBC18"},{value:"Y",label:"\uC2E4\uC2DC\uAC04"}]},{key:"useYn",label:"\uC0AC\uC6A9\uC5EC\uBD80",type:"select",options:()=>[{value:"Y",label:"\uC0AC\uC6A9"},{value:"N",label:"\uBBF8\uC0AC\uC6A9"}]},{type:"group",label:"3\uB808\uBCA8 \uAD6C\uC870 \uC815\uC758 (\uC2DC\uB9AC\uC988 \xB7 \uD56D\uBAA9)"},{key:"lvl1CodeGrp",label:"2\uB808\uBCA8(\uC2DC\uB9AC\uC988) \uCF54\uB4DC\uADF8\uB8F9",type:"text",mono:!0,placeholder:"\uC608: SALE_CHANNEL (\uBE44\uC6B0\uBA74 \uC9C1\uC811\uC785\uB825)",hint:"\uC9C0\uC815\uD558\uBA74 \uC544\uB798 \uC2DC\uB9AC\uC988\uC758 \uCF54\uB4DC \uCE78\uC774 \uACF5\uD1B5\uCF54\uB4DC \uC120\uD0DD\uC73C\uB85C \uBC14\uB010\uB2E4",onChange:()=>X()},{key:"lvl2CodeGrp",label:"3\uB808\uBCA8(\uD56D\uBAA9) \uCF54\uB4DC\uADF8\uB8F9",type:"text",mono:!0,placeholder:"\uC608: MONTH (\uBE44\uC6B0\uBA74 \uC9C1\uC811\uC785\uB825)",hint:"\uC9C0\uC815\uD558\uBA74 \uC544\uB798 \uD56D\uBAA9\uC758 \uCF54\uB4DC \uCE78\uC774 \uACF5\uD1B5\uCF54\uB4DC \uC120\uD0DD\uC73C\uB85C \uBC14\uB010\uB2E4",onChange:()=>X()},{key:"_itemCodeSample",label:"\uACE0\uC720 item_key \uD615\uC2DD",type:"readonly",fmt:()=>(n.itemKey||"\uD56D\uBAA9\uD0A4")+"-\uC2DC\uB9AC\uC988cd-\uD56D\uBAA9cd"},{key:"_seriesColsGrid",label:null,type:"slot",name:"seriesColsGrid",hideLabel:!0,colSpan:3},{type:"group",label:"\uC2DC\uBBAC\uB808\uC774\uC158 \uAC12 \uC785\uB825 \xB7 \uBBF8\uB9AC\uBCF4\uAE30"},{key:"_simGrid",label:"\uC2DC\uBBAC\uB808\uC774\uC158 \uAC12 (\uBBF8\uC800\uC7A5)",type:"slot",name:"simGrid",colSpan:3},{key:"_simPreview",label:"\uBBF8\uB9AC\uBCF4\uAE30",type:"slot",name:"simPreview",colSpan:3},{key:"_srcView",label:"\uC18C\uC2A4\uBCF4\uAE30",type:"slot",name:"srcView",colSpan:3},{key:"optionJson",label:"ECharts \uC635\uC158 \uC624\uBC84\uB77C\uC774\uB4DC JSON",type:"textarea",colSpan:3,mono:!0,placeholder:'{"legend":{"show":false}}'}],{dashboards:R,panels:_,panelCnt:W,uiState:z,codes:Qe,searchParam:O,itemPdfAreaRef:xe,handleExportItemPdf:Je,dashState:T,panelDetail:h,panelForm:n,panelErrors:F,columns:L,util:C,cfCurDash:Ve,cfDtlMode:oe,treeRows:v,treeState:M,cfTreeVisible:ze,cfTreeNoMap:Fe,fnTreeNo:Ue,panelsPager:N,cfPagedPanels:Ft,onPanelsSetPage:Ht,onPanelsSizeChange:Kt,fnHasChild:he,fnToggleNode:Wt,fnTreeExpandAll:Jt,fnTreeCollapseAll:ge,fnIsFirstSeries:Ge,fnLvlBullet:Qt,fnLvlColor:Bt,fnLvlLabel:He,fnRefItemNm:Vt,seriesRows:y,colRows:b,grpCodes:J,fnGrpOptions:ke,onGrpChange:X,onPickCode:ct,fnPreviewCode:Z,fnAddSeriesRow:pt,fnAddColRow:mt,fnDelSeriesRow:Te,fnDelColRow:Ee,simVals:g,simOrient:ft,fnSimFit:Q,fnSimRandom:_e,fnSimClear:ut,fnSimRowTotal:bt,fnSimColTotal:yt,fnSimGrandTotal:ht,fnToggleColAuto:gt,fnToggleColEditable:vt,fnColAuto:ie,fnColLocked:de,fnPanelOf:rt,fnToggleAllAuto:xt,fnToggleAllEditable:St,cfSimSeriesNms:Ae,cfSimColNms:Ne,cfPreviewOption:zt,cfColorPaletteCd:Oe,cfActivePalette:ce,cfColorPaletteCd2:De,cfActivePalette2:pe,compareState:Me,cfCompareOption:kt,srcState:p,SRC_TABS:Pt,fnSrcApply:be,fnSrcReset:Lt,fnSrcTouch:_t,onAutoApplyToggle:At,cfHlCode:Yt,cfSrcCode:fe,onCodeScroll:Rt,hlRef:te,handleBtnAction:je,handleGridCellAction:$e,handleGenerateFromQuery:nt,genRefYmd:ne}},template:`
<bo-page title="\uB300\uC2DC\uBCF4\uB4DC \uD56D\uBAA9\uAD00\uB9AC" :share-query="searchParam"
  desc-summary="\uB300\uC2DC\uBCF4\uB4DC\uC5D0 \uC18D\uD55C \uD56D\uBAA9\uC744 \uB4F1\uB85D\xB7\uC218\uC815\uD569\uB2C8\uB2E4. \uB300\uC2DC\uBCF4\uB4DC \uC815\uC758\uB294 \uB300\uC2DC\uBCF4\uB4DC \uAD00\uB9AC, \uBC30\uCE58\xB7\uD06C\uAE30\uB294 \uB300\uC2DC\uBCF4\uB4DC \uD56D\uBAA9\uBC30\uCE58 \uD654\uBA74\uC744 \uC774\uC6A9\uD558\uC138\uC694.">
  <bo-container>
    <bo-search-area :loading="uiState.loading" :columns="columns.baseSearch" :param="searchParam"
      @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
  </bo-container>

  <div class="bo-2col">
    <!-- ===== \u25A0. \uB300\uC2DC\uBCF4\uB4DC \uBAA9\uB85D (\uC120\uD0DD) ======================================= -->
    <bo-container title="\uB300\uC2DC\uBCF4\uB4DC \uBAA9\uB85D" :count-text="'\uCD1D ' + dashboards.length + '\uAC74'">
      <bo-grid bare narrow :columns="columns.dashboards" :rows="dashboards" row-key="dashboardId"
        :loading="uiState.loading" :selected-key="dashState.selectedId"
        :row-class="row => dashState.selectedId === row.dashboardId ? 'active' : ''"
        empty-text="\uB300\uC2DC\uBCF4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
        grid-id="dashboards-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
    </bo-container>

    <!-- ===== \u25A0. \uD56D\uBAA9 \uBAA9\uB85D + \uC778\uB77C\uC778 \uD3FC (\uD56D\uC0C1 \uD45C\uC2DC \u2014 \uBBF8\uC120\uD0DD \uC2DC \uBE48 \uADF8\uB9AC\uB4DC + \uC548\uB0B4) ===== -->
    <bo-container title="\uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uD56D\uBAA9 \uBAA9\uB85D"
      :count-text="'\uCD1D ' + panels.length + '\uAC1C'">
      <template #toolbar-actions>
        <!-- \uC601\uC5ED\uC744 \uC228\uAE30\uC9C0 \uC54A\uACE0 \uBC84\uD2BC\uB9CC \uC7A0\uADFC\uB2E4 (\uBBF8\uC120\uD0DD \uC0C1\uD0DC\uC5D0\uC11C\uB3C4 \uBB34\uC5C7\uC744 \uD560 \uC218 \uC788\uB294\uC9C0 \uBCF4\uC5EC\uC57C \uD55C\uB2E4) -->
        <button class="btn" :class="uiState.viewMode === 'tree' ? 'btn-primary' : ''"
          @click="uiState.viewMode = 'tree'">\u{1F333} \uD2B8\uB9AC</button>
        <button class="btn" :class="uiState.viewMode === 'grid' ? 'btn-primary' : ''"
          @click="uiState.viewMode = 'grid'">\u25A4 \uBAA9\uB85D</button>
        <button class="btn" :disabled="!dashState.selectedId" @click="handleBtnAction('dash-layout')"
          style="background:#eef2ff;color:#4338ca;border:1px solid #c7d2fe;font-weight:700;">\u{1F9E9} \uD56D\uBAA9\uBC30\uCE58 \uC5F4\uAE30</button>
        <button class="btn btn_new" :disabled="!dashState.selectedId" @click="handleBtnAction('panels-add')">+ \uD56D\uBAA9 \uCD94\uAC00</button>
      </template>
      <div style="padding:8px 12px;font-size:11.5px;color:#666;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:8px;">
        <template v-if="dashState.selectedId">
          <b>{{ cfCurDash ? cfCurDash.dashboardNm : '' }}</b>
          <span style="color:#aaa;font-family:monospace;font-size:11px;">{{ cfCurDash ? cfCurDash.uiCompNm : '' }}</span>
        </template>
        <span v-else style="color:#aaa;">\uB300\uC2DC\uBCF4\uB4DC \uBBF8\uC120\uD0DD</span>
        <template v-if="uiState.viewMode === 'tree' ? !!dashState.selectedId : false">
          <span style="margin-left:auto;display:flex;gap:4px;">
            <button class="btn btn_expand_all" @click="fnTreeExpandAll()">\uC804\uCCB4\uD3BC\uCE58\uAE30</button>
            <button class="btn btn_collapse_all" @click="fnTreeCollapseAll()">\uC804\uCCB4\uB2EB\uAE30</button>
          </span>
        </template>
      </div>

      <!-- ===== \u25A0. 3\uB808\uBCA8 \uD2B8\uB9AC (1:\uCC28\uD2B8 / 2:\uC2DC\uB9AC\uC988 / 3:\uD56D\uBAA9) ===================== -->
      <!-- bo-grid \uC804\uD658(2026-08-25). \uB4DC\uB798\uADF8\xB7\uD398\uC774\uC9D5\xB7rowspan \uC774 \uC5C6\uB294 \uB2E8\uC21C \uD3C9\uD0C4\uD654 \uD2B8\uB9AC\uB77C
           \uC704\uD5D8\uB3C4\uAC00 \uB0AE\uC558\uB2E4. "\uD56D\uBAA9\uBA85"/"\uC0DD\uC131\uBC29\uC2DD"/"\uAD00\uB9AC" \uB294 \uC870\uAC74 \uBD84\uAE30\uAC00 \uB9CE\uC544 \uC6D0\uBCF8 \uB9C8\uD06C\uC5C5\uC744 \uADF8\uB300\uB85C
           \uC2AC\uB86F\uC5D0 \uC62E\uACBC\uACE0, \uB098\uBA38\uC9C0\uB294 fmt/badge \uB85C \uD45C\uD604\uD588\uB2E4. -->
      <div v-if="uiState.viewMode === 'tree'">
        <bo-grid bare narrow :columns="columns.dashTreeGrid" :rows="cfTreeVisible" row-key="itemKey"
          :row-class="(node) => node.lvl === 1 ? (panelDetail.selectedId === node.dashboardItemId ? 'bo-row-selected' : '') : ''"
          table-max-height="540px" :show-row-no="false"
          :empty-text="dashState.selectedId ? '\uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. [+ \uD56D\uBAA9 \uCD94\uAC00]\uB85C \uB4F1\uB85D\uD558\uC138\uC694.' : '\uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C1\uB2E8 [\uC870\uD68C]\uB97C \uB20C\uB7EC\uBCF4\uAC70\uB098 \uC88C\uCE21\uC5D0\uC11C \uD2B9\uC815 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694.'">
          <template #cell-itemNm="{ row: node }">
            <span style="display:inline-flex;align-items:center;gap:4px;"
              :style="{ marginLeft:((node.lvl - 1) * 18) + 'px' }">
              <span @click.stop="fnToggleNode(node)"
                :style="{ cursor: fnHasChild(node) ? 'pointer' : 'default', width:'12px',
                          color:'#94a3b8', fontSize:'10px', userSelect:'none' }">
                {{ fnHasChild(node) ? (treeState.collapsed[node.itemKey] ? '\u25B6' : '\u25BC') : '' }}
              </span>
              <span :style="{ color: fnLvlColor(node.lvl), fontSize: node.lvl === 1 ? '9px' : '11px' }">
                {{ fnLvlBullet(node.lvl) }}</span>
              <span :style="{ fontWeight: node.lvl === 1 ? 700 : (node.lvl === 2 ? 600 : 400),
                              color: node.lvl === 3 ? '#475569' : '' }">{{ node.itemNm }}</span>
              <span v-if="node.lvl === 1" class="badge badge-gray" style="margin-left:4px;">
                {{ node.widgetTypeCd === 'CHART' ? (node.chartTypeCd || 'chart') : node.widgetTypeCd }}</span>
              <span v-if="node.lvl === 2 ? !fnIsFirstSeries(node) : false"
                style="font-size:10px;color:#c2410c;margin-left:2px;">(\uD56D\uBAA9\uC740 1\uBC88\uC9F8 \uC2DC\uB9AC\uC988 \uCC38\uACE0)</span>
            </span>
          </template>
          <!-- \uC704\uC82F\uC0DD\uC131\uD0C0\uC785 \u2014 \uAE30\uC874(MANUAL) / \uCFFC\uB9AC(QUERY, SQL \uC2E4\uD589 \uACB0\uACFC\uB85C \uC790\uB3D9 \uC0DD\uC131) + \uCC38\uC870\uD56D\uBAA9\uBA85(2026-08-21) -->
          <template #cell-widgetGenTypeCd="{ row: node }">
            <template v-if="node.lvl === 1">
              <span class="badge" :class="node.widgetGenTypeCd === 'QUERY' ? 'badge-purple' : 'badge-gray'">
                {{ node.widgetGenTypeCd === 'QUERY' ? '\u{1F517} \uCFFC\uB9AC' : '\uB9E4\uB274\uC5BC' }}</span>
              <div v-if="node.widgetGenTypeCd === 'QUERY'" style="font-size:10px;color:#7c3aed;margin-top:2px;"
                title="SQL \uC2E4\uD589 \uACB0\uACFC\uB85C \uC790\uB3D9 \uC0DD\uC131\uB428">\uCC38\uC870: {{ fnRefItemNm(node.refItemKey) }}</div>
            </template>
          </template>
          <template #cell-_mgmt="{ row: node }">
            <!-- \uC2DC\uB9AC\uC988\xB7\uD56D\uBAA9\uC740 \uCC28\uD2B8 \uC815\uC758(JSON)\uC758 \uC77C\uBD80\uB77C \uAC1C\uBCC4 \uC0AD\uC81C\uAC00 \uC544\uB2C8\uB77C \uCC28\uD2B8 \uC218\uC815\uC5D0\uC11C \uB2E4\uB8EC\uB2E4 -->
            <!-- \uC2E4\uC81C \uD56D\uBAA9 \uD589\uC744 \uB118\uACA8\uC57C \uD55C\uB2E4 \u2014 id \uB9CC \uB118\uAE30\uBA74 \uD3FC\uC774 \uBE48 \uAC12\uC73C\uB85C \uC5F4\uB9B0\uB2E4 -->
            <button v-if="node.lvl === 1" class="btn btn_row_edit"
              @click.stop="handleGridCellAction('panels-cellClick', 'btn_row_edit', fnPanelOf(node.dashboardItemId))">\uC218\uC815</button>
          </template>
        </bo-grid>
        <!-- 2\xB73\uB808\uBCA8 \uC548\uB0B4 \uAC01\uC8FC \u2014 \uD2B8\uB9AC\uC5D0 \uD56D\uBAA9\uC774 \uC788\uC744 \uB54C\uB9CC (\uC6D0\uBCF8\uACFC \uB3D9\uC77C \uC870\uAC74 \uC720\uC9C0) -->
        <div v-if="cfTreeVisible.length" style="padding:6px 12px;font-size:11px;color:#94a3b8;border-top:1px solid #f0f0f0;">
          2\xB73\uB808\uBCA8\uC740 \uCC28\uD2B8\uC758 <b>\uC2DC\uB9AC\uC988 \uC815\uC758 JSON</b> / <b>\uD56D\uBAA9 \uC815\uC758 JSON</b> \uC5D0\uC11C \uC635\uB2C8\uB2E4 \u2014 \uCC28\uD2B8 \uD589\uC758 [\uC218\uC815]\uC5D0\uC11C \uD3B8\uC9D1\uD558\uC138\uC694.
        </div>
      </div>

      <!-- ===== \u25A0. \uD3C9\uBA74 \uBAA9\uB85D (\uAE30\uC874 \uADF8\uB9AC\uB4DC) =================================== -->
      <bo-grid v-if="uiState.viewMode === 'grid'"
        bare :columns="columns.panels" :rows="cfPagedPanels" row-key="dashboardItemId"
        :loading="uiState.panelLoading" :selected-key="panelDetail.selectedId" table-max-height="540px" fixed-height
        :row-class="row => panelDetail.selectedId === row.dashboardItemId ? 'active' : ''"
        :empty-text="dashState.selectedId ? '\uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. [+ \uD56D\uBAA9 \uCD94\uAC00]\uB85C \uB4F1\uB85D\uD558\uC138\uC694.' : '\uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C1\uB2E8 [\uC870\uD68C]\uB97C \uB20C\uB7EC\uBCF4\uAC70\uB098 \uC88C\uCE21\uC5D0\uC11C \uD2B9\uC815 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694.'"
        grid-id="panels-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" row-actions>
        <template #row-actions="{ row, gridId }">
          <div class="actions" style="white-space:nowrap;flex-wrap:nowrap;">
            <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', row)">\uC218\uC815</button>
            <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', row)">\uC0AD\uC81C</button>
          </div>
        </template>
      </bo-grid>
      <bo-pager :pager="panelsPager" :on-set-page="onPanelsSetPage" :on-size-change="onPanelsSizeChange" />
    </bo-container>
  </div>

  <!-- ===== \u25A0. \uD56D\uBAA9 \uC0C1\uC138 \uD3FC (\uC804\uCCB4 \uD3ED \xB7 \uD56D\uC0C1 \uD45C\uC2DC \u2014 \uBBF8\uC120\uD0DD \uC2DC \uC548\uB0B4) ============ -->
  <bo-container :title="!panelDetail.show ? '\uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uD56D\uBAA9 \uC0C1\uC138' : (panelDetail.isNew ? '\uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uD56D\uBAA9 \uC2E0\uADDC' : (cfDtlMode ? '\uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uD56D\uBAA9 \uC0C1\uC138' : '\uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uD56D\uBAA9 \uC218\uC815'))"
    :title-id="panelDetail.selectedId ? panelForm.dashboardItemId : ''">
    <template v-if="panelDetail.show" #toolbar-actions>
      <button class="btn btn_excel"
        :disabled="uiState.pdfExporting" @click="handleExportItemPdf">
        {{ uiState.pdfExporting ? 'PDF \uC0DD\uC131 \uC911...' : '\u{1F4C4} PDF \uB2E4\uC6B4\uB85C\uB4DC' }}</button>
      <!-- \uC800\uC7A5/\uCDE8\uC18C(\uC218\uC815/\uB2EB\uAE30)\uB97C PDF \uB2E4\uC6B4\uB85C\uB4DC \uC6B0\uCE21\uC73C\uB85C \uC774\uB3D9(2026-08-21, \uC608\uC804\uC5D4 \uD3FC \uD558\uB2E8 form-actions) -->
      <template v-if="cfDtlMode">
        <button class="btn btn_edit" @click="handleBtnAction('panelForm-edit')">\uC218\uC815</button>
        <button class="btn btn_close" @click="handleBtnAction('panelForm-close')">\uB2EB\uAE30</button>
      </template>
      <template v-else>
        <button class="btn btn_save" @click="handleBtnAction('panelForm-save')">\uC800\uC7A5</button>
        <button class="btn btn_cancel" @click="handleBtnAction('panelForm-cancel')">\uCDE8\uC18C</button>
      </template>
    </template>
    <div v-if="panelDetail.show" ref="itemPdfAreaRef" style="padding:12px;">
      <!-- compact: \uC0C1\uD488\uC218\uC815(PdProdDtl) \uACFC \uAC19\uC740 \uD3FC \uB192\uC774\xB7\uAC04\uACA9 \uAE30\uC900 -->
      <bo-form-area :columns="columns.panelForm" :form="panelForm" :errors="panelErrors"
        :cols="3" :show-actions="false" :readonly="cfDtlMode" compact plain-readonly>

        <!-- ===== \u25A0. \uCC28\uD2B8\uC885\uB958 \u2014 \uAE30\uBCF8/\uC751\uC6A9/\uC785\uCCB4(3D) \uAD6C\uBD84\uC744 <optgroup> \uC73C\uB85C \uBCF4\uC5EC\uC900\uB2E4 =========== -->
        <template #chartTypeCd>
          <select class="form-control" v-model="panelForm.chartTypeCd" :disabled="cfDtlMode">
            <optgroup v-for="g in util.CHART_TYPE_GROUPS" :key="g.key" :label="g.label">
              <option v-for="c in g.items" :key="c.value" :value="c.value">{{ c.icon }} {{ c.label }}</option>
            </optgroup>
          </select>
        </template>

        <!-- ===== \u25A0. \uC0C9\uC0C1 \uD314\uB808\uD2B8 1(\uC2DC\uB9AC\uC988) + 2(\uD56D\uBAA9) \u2014 optionJson.colorPaletteCd/colorPaletteCd2 -->
        <template #colorPaletteCd>
          <div style="display:flex;align-items:center;gap:6px;">
            <select class="form-control" v-model="cfColorPaletteCd" :disabled="cfDtlMode" style="flex:1;min-width:0;">
              <option v-for="o in util.DASH_WIDGET_COLOR_OPTIONS" :key="o.value" :value="o.value">{{ o.label }}</option>
            </select>
            <span style="font-size:11px;color:#94a3b8;white-space:nowrap;">2</span>
            <select class="form-control" v-model="cfColorPaletteCd2" :disabled="cfDtlMode" style="flex:1;min-width:0;">
              <option v-for="o in util.DASH_WIDGET_COLOR_OPTIONS" :key="o.value" :value="o.value">{{ o.label }}</option>
            </select>
          </div>
        </template>

        <!-- ===== \u25A0. \uC0DD\uC131 \uCFFC\uB9AC(SQL, \uC704\uC82F\uC0DD\uC131\uD0C0\uC785=QUERY \uC77C \uB54C\uB9CC) ============= -->
        <template #genQuery>
          <div>
            <textarea class="form-control" v-model="panelForm.genQuery" :disabled="cfDtlMode" rows="5"
              style="font-family:monospace;font-size:12px;"
              placeholder="SELECT series_cd, series_nm, item_cd, item_nm, val_num FROM ... WHERE site_id = :siteId AND ... = :yyyymmdd ..."></textarea>
            <div style="margin-top:6px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
              <span style="display:flex;align-items:center;gap:4px;font-size:11px;color:#64748b;">
                \uAE30\uC900\uC77C\uC790
                <input type="text" class="form-control" v-model="genRefYmd" :disabled="cfDtlMode"
                  placeholder="YYYYMMDD" maxlength="8" style="width:100px;font-family:monospace;" />
              </span>
              <button class="btn" style="background:#f5f3ff;color:#6d28d9;border:1px solid #ddd6fe;font-weight:700;"
                :disabled="cfDtlMode" @click="handleGenerateFromQuery">\u{1F517} \uCFFC\uB9AC \uC2E4\uD589 \u2192 \uC790\uB3D9\uC0DD\uC131</button>
              <span style="font-size:11px;color:#94a3b8;">\uC800\uC7A5 \uD6C4 \uC2E4\uD589\uD558\uC138\uC694 \u2014 :siteId/:yyyymmdd/:yyyymm \uC790\uB9AC\uD45C\uC2DC\uC790\uC5D0 \uAE30\uC900\uC77C\uC790(8\uC790\uB9AC)\uAC00 \uC2E4\uB824 \uB098\uAC11\uB2C8\uB2E4. \uC2E4\uD589 \uACB0\uACFC\uB85C \uC2DC\uB9AC\uC988\xB7\uD56D\uBAA9\xB7\uAC12\uC774 \uC790\uB3D9\uC218\uC9D1(\uC218\uC815\uBD88\uAC00)\uC73C\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4.</span>
            </div>
          </div>
        </template>

        <!-- ===== \u25A0. 2\uB808\uBCA8 \uC2DC\uB9AC\uC988 \uC815\uC758 + 3\uB808\uBCA8 \uD56D\uBAA9 \uC815\uC758 (\uC88C\uC6B0 \uBC30\uCE58, 2026-08-27) ========= -->
        <template #seriesColsGrid>
          <div style="display:flex;gap:14px;align-items:flex-start;">
            <!-- \uC88C: \uC2DC\uB9AC\uC988 \uC815\uC758 -->
            <div style="flex:1;min-width:0;">
              <div class="form-label" style="margin-bottom:6px;">2\uB808\uBCA8 \xB7 \uC2DC\uB9AC\uC988 \uC815\uC758</div>
              <div style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                <div style="padding:6px;background:#fafafa;border-bottom:1px solid #f0f0f0;">
                  <button class="btn btn_new" :disabled="cfDtlMode" @click="fnAddSeriesRow()">+ \uC2DC\uB9AC\uC988 \uCD94\uAC00</button>
                </div>
                <!-- bo-grid \uC804\uD658(2026-08-25) \u2014 \uC140 \uB0B4\uBD80 \uC785\uB825/select/color \uB9C8\uD06C\uC5C5\uC740 \uC6D0\uBCF8\uACFC \uB3D9\uC77C, \uD45C \uD2C0\uB9CC \uAD50\uCCB4.
                     draggable \uC774 \u2630 \uB4DC\uB798\uADF8 \uC5F4\uC744 \uC790\uB3D9 \uB80C\uB354\uD558\uBBC0\uB85C \uC218\uAE30 "\uC21C\uC11C" \uC5F4\uC740 \uBE90\uB2E4(show-row-no \uAC00 \uAC19\uC740 \uAC12). -->
                <bo-grid bare :columns="columns.seriesRowGrid" :rows="seriesRows" :draggable="!cfDtlMode"
                  empty-text="\uC2DC\uB9AC\uC988\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. [+ \uC2DC\uB9AC\uC988 \uCD94\uAC00]\uB85C \uB4F1\uB85D\uD558\uC138\uC694. (\uC5C6\uC73C\uBA74 \uB2E8\uC77C \uC2DC\uB9AC\uC988\uB85C \uB3D9\uC791)">
                  <template #cell-cd="{ row: r }">
                    <!-- \uCF54\uB4DC\uADF8\uB8F9\uC774 \uC9C0\uC815\uB418\uBA74 \uC120\uD0DD, \uC544\uB2C8\uBA74 \uC9C1\uC811\uC785\uB825 -->
                    <select v-if="fnGrpOptions(panelForm.lvl1CodeGrp).length" class="form-control"
                      v-model="r.cd" :disabled="cfDtlMode" @change="onPickCode(r, panelForm.lvl1CodeGrp)">
                      <option value="">-- \uC120\uD0DD --</option>
                      <option v-for="o in fnGrpOptions(panelForm.lvl1CodeGrp)" :key="o.codeValue" :value="o.codeValue">
                        {{ o.codeLabel }} ({{ o.codeValue }})</option>
                    </select>
                    <input v-else type="text" class="form-control" v-model="r.cd" :disabled="cfDtlMode"
                      placeholder="\uC608: CH_COUPANG (\uBE44\uC6B0\uBA74 \uC774\uB984\uC774 \uCF54\uB4DC)" style="font-family:monospace;font-size:11px;" />
                  </template>
                  <template #cell-name="{ row: r }">
                    <input type="text" class="form-control" v-model="r.name" :disabled="cfDtlMode" placeholder="\uC608: \uCFE0\uD321" />
                  </template>
                  <template #cell-color="{ row: r }">
                    <div style="display:flex;align-items:center;gap:4px;">
                      <input type="color" v-model="r.color" :disabled="cfDtlMode"
                        style="width:32px;height:26px;padding:0;border:1px solid #d1d5db;border-radius:4px;" />
                      <input type="text" class="form-control" v-model="r.color" :disabled="cfDtlMode"
                        placeholder="#6366f1" style="font-family:monospace;font-size:11px;" />
                    </div>
                  </template>
                </bo-grid>
              </div>
            </div>
            <!-- \uC6B0: \uD56D\uBAA9 \uC815\uC758 -->
            <div style="flex:1;min-width:0;">
              <div class="form-label" style="margin-bottom:6px;">3\uB808\uBCA8 \xB7 \uD56D\uBAA9 \uC815\uC758</div>
              <div style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                <div style="padding:6px;background:#fafafa;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                  <button class="btn btn_new" :disabled="cfDtlMode" @click="fnAddColRow()">+ \uD56D\uBAA9 \uCD94\uAC00</button>
                  <span style="font-size:11px;color:#94a3b8;">
                    \uC2DC\uB9AC\uC988 {{ seriesRows.length || 1 }}\uAC1C \xD7 \uD56D\uBAA9 {{ colRows.length }}\uAC1C =
                    <b>{{ (seriesRows.length || 1) * colRows.length }}</b>\uAC1C \uD589\uC774 \uD2B8\uB9AC 3\uB808\uBCA8\uC5D0 \uC0DD\uC131\uB429\uB2C8\uB2E4.</span>
                </div>
                <!-- bo-grid \uC804\uD658(2026-08-25). \uC6D0\uBCF8 colspan="6"(\uC2DC\uB9AC\uC988 \uD45C\uB294 7)\uC774\uB358 \uC774\uC720\uB294 \uC774 \uD45C\uC5D0
                     \uC21C\uC11C \uC5F4\uB9CC \uC788\uACE0 \uAD00\uB9AC \uC5F4\uC774 \uD558\uB098 \uB354 \uC788\uC5C8\uB358 \uACC4\uC0B0 \uCC28\uC774\uC778\uB370, bo-grid \uB294 \uCF5C\uC2A4\uD32C\uC744
                     \uC790\uB3D9 \uACC4\uC0B0\uD558\uBBC0\uB85C \uB354 \uC774\uC0C1 \uC190\uC73C\uB85C \uB9DE\uCD9C \uD544\uC694\uAC00 \uC5C6\uB2E4. -->
                <bo-grid bare :columns="columns.colRowGrid" :rows="colRows" :draggable="!cfDtlMode"
                  empty-text="\uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uBE44\uC6CC\uB450\uBA74 \uB370\uC774\uD130\uAD00\uB9AC \uD654\uBA74\uC5D0\uC11C \uC5F4 \uC81C\uBAA9\uC744 \uC9C1\uC811 \uC785\uB825\uD569\uB2C8\uB2E4.">
                  <template #cell-cd="{ row: r }">
                    <select v-if="fnGrpOptions(panelForm.lvl2CodeGrp).length" class="form-control"
                      v-model="r.cd" :disabled="cfDtlMode" @change="onPickCode(r, panelForm.lvl2CodeGrp)">
                      <option value="">-- \uC120\uD0DD --</option>
                      <option v-for="o in fnGrpOptions(panelForm.lvl2CodeGrp)" :key="o.codeValue" :value="o.codeValue">
                        {{ o.codeLabel }} ({{ o.codeValue }})</option>
                    </select>
                    <input v-else type="text" class="form-control" v-model="r.cd" :disabled="cfDtlMode"
                      placeholder="\uC608: M01 (\uBE44\uC6B0\uBA74 \uC774\uB984\uC774 \uCF54\uB4DC)" style="font-family:monospace;font-size:11px;" />
                  </template>
                  <template #cell-name="{ row: r }">
                    <input type="text" class="form-control" v-model="r.name" :disabled="cfDtlMode" placeholder="\uC608: 1\uC6D4" />
                  </template>
                  <template #cell-color="{ row: r }">
                    <div style="display:flex;align-items:center;gap:4px;">
                      <input type="color" v-model="r.color" :disabled="cfDtlMode"
                    style="width:32px;height:26px;padding:0;border:1px solid #d1d5db;border-radius:4px;" />
                  <input type="text" class="form-control" v-model="r.color" :disabled="cfDtlMode"
                    placeholder="#6366f1" style="font-family:monospace;font-size:11px;" />
                </div>
              </template>
            </bo-grid>
          </div>
            </div>
            <!-- /\uC6B0: \uD56D\uBAA9 \uC815\uC758 -->
          </div>
        </template>

        <!-- ===== \u25A0. \uC2DC\uBBAC\uB808\uC774\uC158 \uAC12 \uC785\uB825 (\uBBF8\uC800\uC7A5 \xB7 \uBBF8\uB9AC\uBCF4\uAE30 \uC804\uC6A9) ============ -->
        <template #simGrid>
          <div style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
            <div style="padding:6px 8px;background:#fff7ed;border-bottom:1px solid #fed7aa;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
              <span style="font-size:11.5px;color:#c2410c;">
                \uC5EC\uAE30 \uAC12\uC740 <b>\uBBF8\uB9AC\uBCF4\uAE30 \uC804\uC6A9</b>\uC785\uB2C8\uB2E4 \u2014 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C \uAC12 \uC785\uB825\uC740 [\uB300\uC2DC\uBCF4\uB4DC \uB370\uC774\uD0C0\uAD00\uB9AC].</span>
              <span style="margin-left:auto;display:flex;align-items:center;gap:8px;">
                <span style="display:flex;align-items:center;gap:4px;font-size:11px;color:#92400e;">
                  \uC2DC\uB9AC\uC988\uD45C\uC2DC\uBC29\uBC95
                  <select class="form-control" v-model="simOrient"
                    style="width:auto;padding:2px 6px;font-size:11px;min-height:24px;">
                    <option value="ROW">\uD589 (\uC2DC\uB9AC\uC988=\uD589 \xB7 \uD56D\uBAA9=\uC5F4)</option>
                    <option value="COL">\uC5F4 (\uD56D\uBAA9=\uD589 \xB7 \uC2DC\uB9AC\uC988=\uC5F4)</option>
                  </select>
                </span>
                <button class="btn" @click="fnSimRandom()"
                  style="background:#fff;color:#c2410c;border:1px solid #fed7aa;font-weight:700;">\u{1F3B2} \uB370\uC774\uD0C0\uC790\uB3D9\uC0DD\uC131</button>
                <button class="btn btn_reset" @click="fnSimClear()">\uBE44\uC6B0\uAE30</button>
              </span>
            </div>
            <div v-if="colRows.length" style="overflow-x:auto;">
              <!-- ROW: \uC2DC\uB9AC\uC988=\uD589 \xB7 \uD56D\uBAA9=\uC5F4 (\uAE30\uBCF8) -->
              <!-- \uC2DC\uB9AC\uC988 \xD7 \uD56D\uBAA9 \uAD50\uCC28\uD45C. simOrient='COL' \uC774\uBA74 \uCD95\uC744 \uC804\uCE58\uD574 \uBCF4\uC5EC\uC900\uB2E4.
                   \uC608\uC804\uC5D4 \uC804\uCE58\uC6A9 \uD45C\uB97C \uD1B5\uC9F8\uB85C \uBCF5\uBD99\uD574 \uB450 \uBC8C \uC720\uC9C0\uD588\uB294\uB370, bo-matrix \uC758 orient \uB85C \uD55C \uBC8C\uC774 \uB410\uB2E4.
                   simVals \uB294 [\uC2DC\uB9AC\uC988][\uD56D\uBAA9] 2\uCC28\uC6D0\uC774\uB77C \uC140\uC5D0\uC11C \uC6D0\uBCF8 \uCD95 \uC778\uB371\uC2A4(srcRowIdx/srcColIdx)\uB97C \uC4F4\uB2E4. -->
              <bo-matrix
                :rows="cfSimSeriesNms" :cols="cfSimColNms"
                :orient="simOrient === 'COL' ? 'col' : 'row'"
                :row-label="v => v" :col-label="v => v"
                cell-type="slot" tone="plain" cell-width="96px" max-height="none"
                :row-total="(nm, si) => fnSimRowTotal(si)"
                :col-total="(c, ci) => fnSimColTotal(ci)"
                :grand-total="fnSimGrandTotal">
                <template #corner>
                  {{ simOrient === 'COL' ? '\uD56D\uBAA9 \\ \uC2DC\uB9AC\uC988' : '\uC2DC\uB9AC\uC988 \\ \uD56D\uBAA9' }}
                  <span style="display:inline-flex;gap:4px;margin-left:4px;">
                    <span @click.stop="fnToggleAllAuto()" title="\uC804\uCCB4 \uC790\uB3D9\uC218\uC9D1 \uCF1C\uAE30/\uB044\uAE30" style="cursor:pointer;font-size:10px;">\u{1F916}</span>
                    <span @click.stop="fnToggleAllEditable()" title="\uC804\uCCB4 \uC218\uC815\uBD88\uAC00 \uCF1C\uAE30/\uB044\uAE30" style="cursor:pointer;font-size:10px;">\u{1F512}</span>
                  </span>
                </template>
                <template #cell="{ srcRowIdx, srcColIdx }">
                  <div style="position:relative;">
                    <!-- \uC790\uB3D9\uC218\uC9D1 \uD45C\uC2DC(\uC67C\uCABD \uC704 \uB179\uC0C9 \uC0BC\uAC01\uD615) + \uC790\uB3D9\uC218\uC9D1/\uC218\uC815\uAC00\uB2A5 \uD1A0\uAE00(\uC624\uB978\uCABD \uC704) -->
                    <span v-if="fnColAuto(srcRowIdx, srcColIdx)"
                      style="position:absolute;top:0;left:0;width:0;height:0;border-top:9px solid #16a34a;border-right:9px solid transparent;z-index:1;"
                      title="\uC790\uB3D9\uC218\uC9D1 \uD56D\uBAA9"></span>
                    <span style="position:absolute;top:1px;right:2px;display:flex;gap:2px;z-index:2;line-height:1;">
                      <span @click="fnToggleColAuto(srcRowIdx, srcColIdx)" title="\uC790\uB3D9\uC218\uC9D1\uC5EC\uBD80(\uD074\uB9AD\uC73C\uB85C \uC804\uD658)"
                        :style="'cursor:pointer;font-size:8px;' + (fnColAuto(srcRowIdx, srcColIdx) ? 'opacity:1;' : 'opacity:.2;')">\u{1F916}</span>
                      <span @click="fnToggleColEditable(srcRowIdx, srcColIdx)" title="\uC218\uC815\uAC00\uB2A5\uC5EC\uBD80(\uD074\uB9AD\uC73C\uB85C \uC804\uD658 \xB7 \uCF1C\uBA74 \uC7A0\uAE08)"
                        :style="'cursor:pointer;font-size:8px;' + (fnColLocked(srcRowIdx, srcColIdx) ? 'opacity:1;' : 'opacity:.2;')">\u{1F512}</span>
                    </span>
                    <input type="number" class="form-control"
                      :disabled="fnColLocked(srcRowIdx, srcColIdx)"
                      :style="'text-align:right;padding-right:26px;' + (fnColLocked(srcRowIdx, srcColIdx) ? 'background:#e2e8f0;color:#64748b;' : '')"
                      :value="simVals[srcRowIdx] ? simVals[srcRowIdx][srcColIdx] : null"
                      @input="e => { fnSimFit(); simVals[srcRowIdx][srcColIdx] = e.target.value; }" />
                  </div>
                </template>
              </bo-matrix>
            </div>
            <div v-else style="padding:18px;text-align:center;color:#aaa;font-size:12px;">
              \uBA3C\uC800 \uC704\uC5D0\uC11C <b>3\uB808\uBCA8 \uD56D\uBAA9</b>\uC744 \uCD94\uAC00\uD558\uBA74 \uAC12 \uC785\uB825\uCE78\uC774 \uC0DD\uAE41\uB2C8\uB2E4.</div>
          </div>
        </template>

        <!-- ===== \u25A0. \uBBF8\uB9AC\uBCF4\uAE30 (\uC88C: \uC800\uC7A5\uB420 \uCC28\uD2B8\uC720\uD615 / \uC6B0: \uB2E4\uB978 \uC720\uD615\uC73C\uB85C \uBE44\uAD50) === -->
        <template #simPreview>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <!-- \uC88C\uCE21 \u2014 \uC2E4\uC81C \uC800\uC7A5\uB418\uB294 chartTypeCd \uADF8\uB300\uB85C -->
            <div style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
              <div style="padding:6px 10px;background:#f8fafc;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;gap:8px;">
                <span style="font-weight:700;font-size:12.5px;color:#1f4a73;">{{ panelForm.itemNm || '(\uD56D\uBAA9\uBA85 \uBBF8\uC785\uB825)' }}</span>
                <span class="badge badge-blue">{{ panelForm.chartTypeCd || '-' }}</span>
                <span style="margin-left:auto;font-size:11px;color:#94a3b8;">\uC800\uC7A5\uB420 \uC720\uD615</span>
              </div>
              <!-- id \uB294 \uC2A4\uD0C0\uC77C \uD0ED\uC758 CSS \uC801\uC6A9 \uBC94\uC704\uB97C \uAC00\uB450\uB294 \uAE30\uC900\uC810 -->
              <div v-if="colRows.length" id="cm-dash-src-preview" style="padding:8px;">
                <co-echart :option="cfPreviewOption" :height="srcState.previewHeight || '260px'" not-merge />
              </div>
              <div v-else style="padding:28px;text-align:center;color:#aaa;font-size:12px;">
                \uD56D\uBAA9(3\uB808\uBCA8)\uACFC \uC2DC\uBBAC\uB808\uC774\uC158 \uAC12\uC744 \uC785\uB825\uD558\uBA74 \uCC28\uD2B8\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</div>
            </div>
            <!-- \uC6B0\uCE21 \u2014 \uB2E4\uB978 \uCC28\uD2B8\uC720\uD615\uC774\uB77C\uBA74? \uC800\uC7A5\uAC12\uACFC \uBB34\uAD00\uD55C \uBE44\uAD50 \uC804\uC6A9 -->
            <div style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
              <div style="padding:6px 10px;background:#f8fafc;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;gap:8px;">
                <span style="font-size:11px;color:#64748b;">\uBE44\uAD50</span>
                <select v-model="compareState.chartTypeCd" class="form-control" style="width:auto;padding:2px 6px;font-size:12px;">
                  <optgroup v-for="g in util.CHART_TYPE_GROUPS" :key="g.key" :label="g.label">
                    <option v-for="c in g.items" :key="c.value" :value="c.value">{{ c.icon }} {{ c.label }}</option>
                  </optgroup>
                </select>
                <span style="margin-left:auto;font-size:11px;color:#94a3b8;">\uC800\uC7A5\uC5D0 \uC601\uD5A5 \uC5C6\uC74C</span>
              </div>
              <div v-if="colRows.length" style="padding:8px;">
                <co-echart :option="cfCompareOption" :height="srcState.previewHeight || '260px'" not-merge />
              </div>
              <div v-else style="padding:28px;text-align:center;color:#aaa;font-size:12px;">
                \uD56D\uBAA9(3\uB808\uBCA8)\uACFC \uC2DC\uBBAC\uB808\uC774\uC158 \uAC12\uC744 \uC785\uB825\uD558\uBA74 \uCC28\uD2B8\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</div>
            </div>
          </div>
        </template>

        <!-- ===== \u25A0. \uC18C\uC2A4\uBCF4\uAE30 (\uCEF4\uD3EC\uB10C\uD2B8 / \uC2A4\uD06C\uB9BD\uD2B8 / \uB370\uC774\uD0C0 / \uC2A4\uD0C0\uC77C) ======== -->
        <template #srcView>
          <div style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
            <!-- \uD0ED -->
            <div style="display:flex;align-items:center;gap:4px;padding:6px 8px;background:#f8fafc;border-bottom:1px solid #e5e7eb;">
              <button v-for="t in SRC_TABS" :key="t.id" class="btn"
                :class="srcState.tab === t.id ? 'btn-primary' : ''"
                @click="srcState.tab = t.id">{{ t.label }}</button>
              <span v-if="srcState.scriptManual" class="badge badge-orange" style="margin-left:4px;">\uC2A4\uD06C\uB9BD\uD2B8 \uC218\uB3D9</span>
              <span style="margin-left:auto;display:flex;align-items:center;gap:8px;">
                <!-- \uC2E4\uC2DC\uAC04 \uC801\uC6A9 \uD1A0\uAE00 \u2014 \uCF1C\uBA74 \uC785\uB825\uC774 \uBA4E\uACE0 1\uCD08 \uB4A4 \uC790\uB3D9 \uBC18\uC601 -->
                <label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:11.5px;color:#475569;white-space:nowrap;">
                  <input type="checkbox" v-model="srcState.autoApply" @change="onAutoApplyToggle()" />
                  \uC2E4\uC2DC\uAC04 \uC801\uC6A9
                  <span v-if="srcState.autoPending" style="color:#c2410c;">\u20261\uCD08 \uD6C4 \uBC18\uC601</span>
                </label>
                <button class="btn btn_apply" @click="fnSrcApply(false)">\uC801\uC6A9</button>
                <button class="btn btn_reset" @click="fnSrcReset()">\uB418\uB3CC\uB9AC\uAE30</button>
              </span>
            </div>

            <!-- \uC548\uB0B4 + \uC624\uB958 -->
            <div style="padding:5px 10px;font-size:11px;border-bottom:1px solid #f0f0f0;"
              :style="{ background: (srcState.scriptErr || srcState.dataErr || srcState.componentErr) ? '#fef2f2' : '#fff' }">
              <template v-if="srcState.tab === 'component'">
                <span style="color:#64748b;">\uC704\uC82F \uC124\uC815(JSON). \uACE0\uCE58\uACE0 [\uC801\uC6A9]\uD558\uBA74 \uD3FC\uACFC \uBBF8\uB9AC\uBCF4\uAE30\uC5D0 \uBC18\uC601\uB429\uB2C8\uB2E4.</span>
                <span v-if="srcState.componentErr" style="color:#dc2626;margin-left:8px;">{{ srcState.componentErr }}</span>
              </template>
              <template v-else-if="srcState.tab === 'script'">
                <span style="color:#64748b;">ECharts \uC635\uC158(JSON). [\uC801\uC6A9]\uD558\uBA74 <b>\uC218\uB3D9 \uBAA8\uB4DC</b>\uAC00 \uB418\uC5B4 \uADF8\uB9AC\uB4DC \uBCC0\uACBD\uC774 \uC774 \uB0B4\uC6A9\uC744 \uB36E\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</span>
                <span v-if="srcState.scriptErr" style="color:#dc2626;margin-left:8px;">{{ srcState.scriptErr }}</span>
              </template>
              <template v-else-if="srcState.tab === 'data'">
                <span style="color:#64748b;">\uC2DC\uB9AC\uC988\xB7\uD56D\uBAA9\xB7\uAC12(JSON). [\uC801\uC6A9]\uD558\uBA74 \uC704 \uD3B8\uC9D1 \uADF8\uB9AC\uB4DC\uC640 \uBBF8\uB9AC\uBCF4\uAE30\uC5D0 \uBC18\uC601\uB429\uB2C8\uB2E4.</span>
                <span v-if="srcState.dataErr" style="color:#dc2626;margin-left:8px;">{{ srcState.dataErr }}</span>
              </template>
              <template v-else>
                <span style="color:#64748b;">CSS. \uC120\uD0DD\uC790\uC5D0 \uBBF8\uB9AC\uBCF4\uAE30 \uCEE8\uD14C\uC774\uB108\uAC00 \uC790\uB3D9\uC73C\uB85C \uBD99\uC5B4 <b>\uBBF8\uB9AC\uBCF4\uAE30 \uC601\uC5ED\uC5D0\uB9CC</b> \uC801\uC6A9\uB429\uB2C8\uB2E4.</span>
              </template>
              <span v-if="srcState.appliedMsg" style="color:#059669;margin-left:8px;">\u2713 {{ srcState.appliedMsg }}</span>
            </div>

            <!-- \uD3B8\uC9D1 \uC601\uC5ED \u2014 \uB124 \uD0ED \uBAA8\uB450 \uAC19\uC740 \uCF54\uB4DC \uD3B8\uC9D1\uAE30(\uB2E4\uD06C+\uD558\uC774\uB77C\uC774\uD305)\uB97C \uB3CC\uB824 \uC4F4\uB2E4 -->
            <div style="padding:8px;">
              <!-- \uCEF4\uD3EC\uB10C\uD2B8 \uD0ED: \uC2E4\uC81C \uB80C\uB354 \uB9C8\uD06C\uC5C5\uACFC \uB370\uC774\uD130\uAC00 \uC5B4\uB514\uC11C \uC624\uB294\uC9C0 \uBA3C\uC800 \uBCF4\uC5EC\uC900\uB2E4 -->
              <div v-if="srcState.tab === 'component'" class="cmd-code-wrap"
                style="margin-bottom:8px;padding:10px 12px;">
                <div style="font-family:Consolas,Monaco,monospace;font-size:12px;line-height:1.7;color:#e2e8f0;">
                  <span style="color:#94a3b8;">&lt;</span><span style="color:#7dd3fc;">co-echart</span>
                  <span style="color:#fbbf24;">:option</span><span style="color:#94a3b8;">=</span><span style="color:#86efac;">"cfPreviewOption"</span>
                  <span style="color:#fbbf24;">height</span><span style="color:#94a3b8;">=</span><span style="color:#86efac;">"{{ srcState.previewHeight || '260px' }}"</span>
                  <span style="color:#fbbf24;">not-merge</span>
                  <span style="color:#94a3b8;">/&gt;</span>
                </div>
                <div style="margin-top:8px;padding-top:8px;border-top:1px solid #1e293b;
                            font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.8;color:#94a3b8;">
                  <div><span style="color:#c4b5fd;">cfPreviewOption</span> \u2190 <b style="color:#e2e8f0;">\uC2A4\uD06C\uB9BD\uD2B8</b> \uD0ED (ECharts \uC635\uC158)</div>
                  <div>\u251C <span style="color:#7dd3fc;">xAxis.data</span> \u2190 <b style="color:#e2e8f0;">\uB370\uC774\uD0C0</b>.cols[].name
                    <span style="color:#64748b;">(3\uB808\uBCA8 \uD56D\uBAA9 {{ colRows.length }}\uAC1C)</span></div>
                  <div>\u251C <span style="color:#7dd3fc;">series[].name</span> \u2190 <b style="color:#e2e8f0;">\uB370\uC774\uD0C0</b>.series[].name
                    <span style="color:#64748b;">(2\uB808\uBCA8 \uC2DC\uB9AC\uC988 {{ seriesRows.length || 1 }}\uAC1C)</span></div>
                  <div>\u2514 <span style="color:#7dd3fc;">series[].data</span> \u2190 <b style="color:#e2e8f0;">\uB370\uC774\uD0C0</b>.values[\uC2DC\uB9AC\uC988][\uD56D\uBAA9]
                    <span style="color:#64748b;">(\uC2DC\uBBAC\uB808\uC774\uC158 \uAC12)</span></div>
                </div>
              </div>

              <!-- \uC0C9\uCE60\uD55C <pre> \uC704\uC5D0 \uAE00\uC790 \uD22C\uBA85 textarea \uB97C \uACB9\uCCD0 \uD3B8\uC9D1 (\uCE90\uB7FF\xB7\uC120\uD0DD\uC740 textarea \uB2F4\uB2F9) -->
              <div class="cmd-code-wrap">
                <pre ref="hlRef" class="cmd-code-hl" v-html="cfHlCode"></pre>
                <textarea class="cmd-code-ta" v-model="cfSrcCode" spellcheck="false"
                  :rows="srcState.tab === 'component' ? 9 : (srcState.tab === 'style' ? 10 : 16)"
                  :placeholder="srcState.tab === 'style' ? '.echart-box { border: 1px solid #ddd; border-radius: 8px; }' : ''"
                  @input="fnSrcTouch()" @scroll="onCodeScroll"></textarea>
              </div>
            </div>
          </div>
        </template>
      </bo-form-area>
    </div>
    <div v-else style="padding:32px;text-align:center;color:#aaa;">
      \uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uD56D\uBAA9 \uBAA9\uB85D\uC5D0\uC11C \uD56D\uBAA9\uC744 \uC120\uD0DD\uD558\uAC70\uB098 [+ \uD56D\uBAA9 \uCD94\uAC00]\uB97C \uD074\uB9AD\uD558\uC138\uC694.</div>
  </bo-container>
</bo-page>
`};
