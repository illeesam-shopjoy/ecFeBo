window.CmDashboardDataMng={name:"CmDashboardDataMng",props:{navigate:{type:Function,required:!0}},setup(me){const{ref:fe,reactive:x,computed:P,onMounted:ue}=Vue,{showToast:y,showConfirm:B}=window.boApp,E=window.cmDashWidgetUtil,T=9,W=x({}),X=e=>W[e.dashboardItemId]||(W[e.dashboardItemId]={chartTypeCd:e.chartTypeCd||"bar",colorPaletteCd:"DASH_WIDGET_COLORS_01",colorPaletteCd2:"DASH_WIDGET_COLORS_02"}),z=x([]),k=x([]),G=x({}),C=x({pageNo:1,pageSize:30,pageTotalPage:1,pageTotalCount:0,pageSizes:[10,20,30,50,100]}),w=x([]),j=x([]),Y=x([]),v=x({loading:!1,itemLoading:!1,saving:!1,selectedItemIds:[],pdfExporting:!1}),J=fe(null),ge=async()=>{var e,t;v.pdfExporting=!0;try{const o=((e=re.value)==null?void 0:e.dashboardNm)||"\uB300\uC2DC\uBCF4\uB4DC",a=coUtil.cofBuildExportFilename(`${o}_\uC704\uC82F\uB370\uC774\uD0C0.pdf`);await window.boUtil.bofExportPdf((t=J.value)==null?void 0:t.$el,a,y)}finally{v.pdfExporting=!1}},F=x({}),he=e=>{F[e]=F[e]===!1},ye=(e,t)=>{e.charts.filter(o=>!o._notLoaded).forEach(o=>{F[o.dashboardItemId]=t})},Z=x({}),Q=coUtil.cofToYmd(new Date),g=x({dashboardId:"",siteId:"",searchValue:"",useYn:"",itemNm:""}),O="site_id,yyyymm",ee=e=>{const t={dateTypeCd:"m",hasSiteId:!1,hasProdId:!1,hasVendorId:!1};return String(e||O).split(",").map(o=>o.trim()).filter(Boolean).forEach(o=>{o==="yyyymmdd"?t.dateTypeCd="d":o==="yyyymm"?t.dateTypeCd="m":o==="yyyy"?t.dateTypeCd="y":o==="site_id"?t.hasSiteId=!0:o==="prod_id"?t.hasProdId=!0:o==="vendor_id"&&(t.hasVendorId=!0)}),t},te=e=>e==="y"?4:e==="m"?6:8,S=x({}),I=x({}),be=(e,t)=>{S[e]||(S[e]={dateTypeCd:t.dateTypeCd,ymd:Q,ym:String(Q).slice(0,7),yyyy:String(Q).slice(0,4),siteId:g.siteId,prodId:"",prodNm:"",vendorId:""}),I[e]||(I[e]={searched:!1,loading:!1,saving:!1})},ve=e=>{const t=S[e];return!!t&&!!t.siteId&&ae(e).length===te(t.dateTypeCd)},oe=e=>{e.forEach(t=>{const o=t.inputOpts||O;be(o,ee(o))})},ae=e=>{const t=S[e];return t?t.dateTypeCd==="y"?String(t.yyyy||"").trim():t.dateTypeCd==="m"?String(t.ym||"").replace("-",""):String(t.ymd||"").replace(/-/g,""):""},_=x({isProdPick:!1,prodPickGroupKey:null}),xe=e=>!!e.ownerUserId||(e.uiCompNm||"").indexOf("MY:")===0,we=e=>v.selectedItemIds.includes(e),se=P(()=>k.length>0&&v.selectedItemIds.length===k.length),Ie=e=>{const t=v.selectedItemIds.indexOf(e);t>=0?v.selectedItemIds.splice(t,1):v.selectedItemIds.push(e)},Ce=()=>{v.selectedItemIds=se.value?[]:k.map(e=>e.dashboardItemId)},Se=P(()=>{const e=(C.pageNo-1)*C.pageSize;return k.slice(e,e+C.pageSize)}),ke=e=>{C.pageNo=e},Ae=()=>{C.pageNo=1,C.pageTotalPage=Math.max(1,Math.ceil(k.length/C.pageSize))},re=P(()=>z.find(e=>e.dashboardId===g.dashboardId)||null),le=e=>(z.find(t=>t.dashboardId===e)||{}).dashboardNm||"-",Ne=e=>{if(!e)return"-";const t=k.find(o=>o.itemKey===e);return t&&t.itemNm?t.itemNm:e},Ee=P(()=>w.length>0),De=P(()=>w.filter(e=>v.selectedItemIds.includes(e.dashboardItemId))),D=P(()=>{const e={};return k.forEach(t=>{if(!v.selectedItemIds.includes(t.dashboardItemId))return;const o=t.inputOpts||O;e[o]||(e[o]={key:o,dims:ee(o),charts:[]});const a=w.find(i=>i.dashboardItemId===t.dashboardItemId);e[o].charts.push(a||{dashboardItemId:t.dashboardItemId,itemNm:t.itemNm,itemKey:t.itemKey,_notLoaded:!0})}),Object.values(e).sort((t,o)=>t.key.localeCompare(o.key))}),Pe=P(()=>Object.values(I).some(e=>e.loading)),_e=P(()=>Object.values(I).some(e=>e.saving)),Le=(e,t)=>{if(e==="searchParam-list")return q();if(e==="searchParam-reset")return g.searchValue="",g.useYn="",g.itemNm="",g.dashboardId="",w.splice(0,w.length),q();if(e==="group-search")return M(t);if(e==="group-save")return Fe(t);if(e==="group-clearValues")return Ue(t);if(e==="group-simulateEmpty")return ie(t,!0);if(e==="group-simulateAll")return ie(t,!1);if(e==="groups-searchAll")return ne();if(e==="groups-simulateAll")return Re();if(e==="groups-saveAll")return Ve();if(e==="groups-reset")return Me();if(e==="prodModal-open"){_.prodPickGroupKey=t,_.isProdPick=!0;return}if(e==="group-prodClear"){const o=S[t];o&&(o.prodId="",o.prodNm="");return}if(e==="siteChange")return Ke();if(e==="goItemMng")return me.navigate("cmDashboardItemMng");console.warn("[handleBtnAction] unknown cmd:",e)},Oe=(e,t,o,a={})=>{if(e==="dashboards-cellClick")return a.col&&a.col.link||t==="__no__"?Qe(o):void 0;console.warn("[handleGridCellAction] unknown cmd:",e)},Te=(e,t,o)=>{if(e==="cmPopup-prod-pick"){const a=S[_.prodPickGroupKey];if(o==null||!a){_.isProdPick=!1,_.prodPickGroupKey=null;return}a.prodId=o.selId||"",a.prodNm=o.selName||"",_.isProdPick=!1,_.prodPickGroupKey=null;return}console.warn("[fnCallbackModal] unknown popCmd:",e)},H=e=>{const t=S[e];if(!t||!t.siteId)return y("\uC0AC\uC774\uD2B8\uB294 \uD544\uC218 \uC870\uAC74\uC785\uB2C8\uB2E4.","error"),null;const o=ae(e);if(!o||o.length!==te(t.dateTypeCd)){const n=t.dateTypeCd==="y"?"\uC5F0\uB3C4\uB294 \uD544\uC218 \uC870\uAC74\uC785\uB2C8\uB2E4.":t.dateTypeCd==="m"?"\uC6D4\uC740 \uD544\uC218 \uC870\uAC74\uC785\uB2C8\uB2E4.":"\uC77C\uC790\uB294 \uD544\uC218 \uC870\uAC74\uC785\uB2C8\uB2E4.";return y(n,"error"),null}const a=D.value.find(n=>n.key===e),i=(a?a.charts:[]).map(n=>n.dashboardItemId).filter(Boolean);return i.length?{chartIds:i.join(","),siteId:t.siteId,yyyymmdd:o,dateTypeCd:t.dateTypeCd,...coUtil.cofOmitEmpty({prodId:t.prodId,vendorId:t.vendorId})}:(y("\uC774 \uADF8\uB8F9\uC5D0 \uD45C\uC2DC\uD560 \uC704\uC82F\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","error"),null)},ze=e=>{const t=o=>Array.from({length:T},(a,i)=>o&&o[i]!=null?o[i]:"");return{...e,colNms:t(e.colNms),rows:(e.rows||[]).map(o=>({...o,vals:t(o.vals),cellAutoCollect:t(o.cellAutoCollect),cellEditable:Array.from({length:T},(a,i)=>o.cellEditable&&o.cellEditable[i]!=null?o.cellEditable[i]!==!1:!0)}))}},Ge=(e,t)=>{(t||[]).filter(o=>(o.inputOpts||O)===e).map(ze).forEach(o=>{const a=w.findIndex(i=>i.dashboardItemId===o.dashboardItemId);a>=0?w.splice(a,1,o):w.push(o)})},M=async e=>{var o,a;const t=H(e);if(t){I[e].loading=!0;try{const i=await boApiSvc.cmDashboard.getDataGrid(t,"\uB300\uC2DC\uBCF4\uB4DC\uB370\uC774\uD0C0\uAD00\uB9AC","\uC870\uD68C");Ge(e,(a=(o=i.data)==null?void 0:o.data)==null?void 0:a.charts),I[e].searched=!0}catch(i){y(coUtil.cofErrMsg(i,"\uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{I[e].loading=!1}}},ne=async()=>{for(const e of D.value)await M(e.key)},Me=()=>{Object.keys(S).forEach(e=>delete S[e]),Object.keys(I).forEach(e=>delete I[e]),w.splice(0,w.length),oe(k)},ie=(e,t)=>{const o=D.value.find(i=>i.key===e),a=o?o.charts.filter(i=>!i._notLoaded):[];if(!a.length){y("\uBA3C\uC800 [\uC870\uD68C]\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694.","error");return}a.forEach(i=>$(i,t)),y("\uAC12\uC744 \uC790\uB3D9 \uC0DD\uC131\uD588\uC2B5\uB2C8\uB2E4. \uD655\uC778 \uD6C4 [\uC800\uC7A5]\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694.","success")},Ue=async e=>{const t=D.value.find(i=>i.key===e),o=t?t.charts.filter(i=>!i._notLoaded):[];if(!o.length){y("\uCD08\uAE30\uD654\uD560 \uAC12\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uC870\uD68C\uD574\uC8FC\uC138\uC694.","error");return}await B("\uAC12 \uCD08\uAE30\uD654",`\uC774 \uADF8\uB8F9\uC758 \uC785\uB825\uAC12\uC744 \uBAA8\uB450 \uC9C0\uC6C1\uB2C8\uB2E4(\uC800\uC7A5 \uC804 \uD654\uBA74 \uAC12\uB9CC \uC9C0\uC6CC\uC9C0\uBA70, \uC800\uC7A5\uB41C \uB370\uC774\uD130\uB294 \uADF8\uB300\uB85C\uC785\uB2C8\uB2E4).
\uC9C4\uD589\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)&&(o.forEach(i=>{(i.rows||[]).forEach(n=>{n.vals=n.vals.map(()=>"")})}),y("\uAC12\uC744 \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4.","success"))},Re=()=>{if(!D.value.length){y("\uCCB4\uD06C\uB41C \uC704\uC82F\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}let e=!1;if(D.value.forEach(t=>{const o=t.charts.filter(a=>!a._notLoaded);o.length&&(e=!0,o.forEach(a=>$(a,!1)))}),!e){y("\uBA3C\uC800 [\uC870\uD68C]\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694.","error");return}y("\uC804\uCCB4 \uD56D\uBAA9 \uAC12\uC744 \uC790\uB3D9 \uC0DD\uC131\uD588\uC2B5\uB2C8\uB2E4. \uD655\uC778 \uD6C4 \uADF8\uB8F9\uBCC4 [\uC800\uC7A5]\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694.","success")},Be=e=>{$(e,!1),y("["+e.itemNm+"] \uAC12\uC744 \uC790\uB3D9 \uC0DD\uC131\uD588\uC2B5\uB2C8\uB2E4. \uD655\uC778 \uD6C4 [\uC800\uC7A5]\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694.","success")},Ye=async e=>{if(await B("\uC2DC\uB9AC\uC988\uD45C\uC2DC\uBC29\uBC95 \uC800\uC7A5","["+e.itemNm+`] \uC758 \uC2DC\uB9AC\uC988\uD45C\uC2DC\uBC29\uBC95\uC744 \uC800\uC7A5\uD569\uB2C8\uB2E4.
\uBC29\uD5A5\uC774 \uBC14\uB00C\uBA74 \uD654\uBA74\uC744 \uB2E4\uC2DC \uC870\uD68C\uD558\uBA70, \uC774 \uD56D\uBAA9\uC774 \uC18D\uD55C \uADF8\uB8F9\uC758 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC740 \uC785\uB825\uAC12\uC740 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4.
\uC9C4\uD589\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{await boApiSvc.cmDashboard.itemSave("base",{dashboardItemId:e.dashboardItemId,seriesOrientCd:e.seriesOrientCd},"\uB300\uC2DC\uBCF4\uB4DC\uB370\uC774\uD0C0\uAD00\uB9AC","\uC2DC\uB9AC\uC988\uD45C\uC2DC\uBC29\uBC95\uC800\uC7A5"),y("\uC2DC\uB9AC\uC988\uD45C\uC2DC\uBC29\uBC95\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.","success"),await V(),await M(e.inputOpts||O)}catch(o){y(coUtil.cofErrMsg(o,"\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},Fe=async e=>{var n;const t=H(e);if(!t)return;const o=D.value.find(c=>c.key===e),a=o?o.charts.filter(c=>!c._notLoaded):[];if(!a.length){y("\uC800\uC7A5\uD560 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uC870\uD68C\uD574\uC8FC\uC138\uC694.","error");return}if(await B("\uC800\uC7A5","\uC785\uB825\uD55C \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")){I[e].saving=!0;try{const c=a.map(f=>({dashboardItemId:f.dashboardItemId,colNms:f.colNms,rows:(f.rows||[]).map(h=>({dashboardItemId:h.dashboardItemId,cellItemIds:h.cellItemIds,vals:h.vals}))})),d=await boApiSvc.cmDashboard.saveDataGrid(c,t,"\uB300\uC2DC\uBCF4\uB4DC\uB370\uC774\uD0C0\uAD00\uB9AC","\uC800\uC7A5");y(((n=d.data)==null?void 0:n.message)||"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await M(e)}catch(c){y(coUtil.cofErrMsg(c,"\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{I[e].saving=!1}}},Ve=async()=>{const e=D.value.filter(o=>o.charts.some(a=>!a._notLoaded));if(!e.length){y("\uC800\uC7A5\uD560 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 \uC870\uD68C\uD574\uC8FC\uC138\uC694.","error");return}if(await B("\uC804\uCCB4 \uC800\uC7A5","\uCCB4\uD06C\uB41C \uBAA8\uB4E0 \uC704\uC82F\uC758 \uC785\uB825\uAC12\uC744 \uADF8\uB8F9\uBCC4 \uC870\uAC74\uC73C\uB85C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")){for(const o of e){const a=H(o.key);if(!a)continue;const i=o.charts.filter(n=>!n._notLoaded);if(i.length){I[o.key].saving=!0;try{const n=i.map(c=>({dashboardItemId:c.dashboardItemId,colNms:c.colNms,rows:(c.rows||[]).map(d=>({dashboardItemId:d.dashboardItemId,cellItemIds:d.cellItemIds,vals:d.vals}))}));await boApiSvc.cmDashboard.saveDataGrid(n,a,"\uB300\uC2DC\uBCF4\uB4DC\uB370\uC774\uD0C0\uAD00\uB9AC","\uC804\uCCB4\uC800\uC7A5"),await M(o.key)}catch(n){y(coUtil.cofErrMsg(n,"\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")+" ("+o.key+")","error",0)}finally{I[o.key].saving=!1}}}y("\uC804\uCCB4 \uC800\uC7A5\uC744 \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4.","success")}},Ke=()=>{de(),g.dashboardId&&V()},We=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["USE_YN"],{compNm:"CmDashboardDataMng"}),Z.use_yn=e.sgGetGrpCodes("USE_YN")},q=async()=>{var e;v.itemLoading=!0;try{let o=((e=(await boApiSvc.cmDashboard.getList({},"\uB300\uC2DC\uBCF4\uB4DC\uB370\uC774\uD0C0\uAD00\uB9AC","\uB300\uC2DC\uBCF4\uB4DC\uBAA9\uB85D")).data)==null?void 0:e.data)||[];const a=(g.searchValue||"").trim().toLowerCase();a&&(o=o.filter(i=>(i.dashboardNm||"").toLowerCase().includes(a)||(i.uiCompNm||"").toLowerCase().includes(a))),g.useYn&&(o=o.filter(i=>(i.useYn||"Y")===g.useYn)),o.sort((i,n)=>(i.sortOrd||0)-(n.sortOrd||0)),z.splice(0,z.length,...o),await de(),g.dashboardId&&!o.some(i=>i.dashboardId===g.dashboardId)&&(g.dashboardId="",w.splice(0,w.length))}catch(t){y(coUtil.cofErrMsg(t,"\uC870\uD68C \uC624\uB958"),"error",0)}finally{v.itemLoading=!1}await V()},je=async()=>{var e,t,o;try{const a=await window.boUtil.bofLoadSiteOptions();j.splice(0,j.length,...a),g.siteId=((e=window.boCommonFilter)==null?void 0:e.siteId)||(a[0]?a[0].value:"")}catch(a){console.error("[catch-info]",a)}await q();try{const a=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:500},"\uB300\uC2DC\uBCF4\uB4DC\uB370\uC774\uD0C0\uAD00\uB9AC","\uC5C5\uCCB4\uBAA9\uB85D");Y.splice(0,Y.length,...((o=(t=a.data)==null?void 0:t.data)==null?void 0:o.pageList)||[])}catch(a){console.error("[catch-info]",a)}},de=async()=>{var e;try{const t=await boApiSvc.cmDashboard.getItemList({siteId:g.siteId},"\uB300\uC2DC\uBCF4\uB4DC\uB370\uC774\uD0C0\uAD00\uB9AC","\uC704\uC82F\uD56D\uBAA9\uC218\uC870\uD68C"),o={};(((e=t.data)==null?void 0:e.data)||[]).forEach(a=>{o[a.dashboardId]=(o[a.dashboardId]||0)+1}),Object.keys(G).forEach(a=>delete G[a]),Object.assign(G,o)}catch(t){console.warn("[\uC704\uC82F\uD56D\uBAA9 \uC218 \uC870\uD68C \uC624\uB958]",t)}},V=async()=>{var e,t;v.itemLoading=!0;try{const o={siteId:g.siteId,keyLevel:0};g.dashboardId&&(o.dashboardId=g.dashboardId);const a=await boApiSvc.cmDashboard.getItemList(o,"\uB300\uC2DC\uBCF4\uB4DC\uB370\uC774\uD0C0\uAD00\uB9AC","\uC704\uC82F\uD56D\uBAA9\uC870\uD68C"),i=g.dashboardId?(((e=a.data)==null?void 0:e.data)||[]).filter(f=>f.dashboardId===g.dashboardId):((t=a.data)==null?void 0:t.data)||[],n={};i.forEach(f=>{f.parentDashboardItemId&&(n[f.parentDashboardItemId]=n[f.parentDashboardItemId]||[]).push(f)});let c=i.filter(f=>f.keyLevel===1);c.forEach(f=>{const h=n[f.dashboardItemId]||[];f._seriesCnt=h.length,f._colCnt=h.length?(n[h[0].dashboardItemId]||[]).length:0});const d=(g.itemNm||"").trim().toLowerCase();if(d){const f=new Set(i.filter(h=>(h.itemNm||"").toLowerCase().includes(d)).map(h=>h.item1Key));c=c.filter(h=>f.has(h.itemKey))}c.sort((f,h)=>(f.sortOrd||0)-(h.sortOrd||0)),k.splice(0,k.length,...c),C.pageNo=1,C.pageTotalCount=c.length,C.pageTotalPage=Math.max(1,Math.ceil(c.length/C.pageSize)),oe(c),v.selectedItemIds=c.map(f=>f.dashboardItemId)}catch(o){y(coUtil.cofErrMsg(o,"\uC704\uC82F\uD56D\uBAA9 \uC870\uD68C \uC624\uB958"),"error",0)}finally{v.itemLoading=!1}},Qe=async e=>{g.dashboardId=e.dashboardId,w.splice(0,w.length),await V(),await ne()};ue(async()=>{await We(),await je();const e=new URLSearchParams(window.location.search),t=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(g).forEach(o=>{!t.includes(o)&&e.has(o)&&(g[o]=e.get(o))})});const U=e=>{let t=-1;return e.colNms.forEach((o,a)=>{o!=null&&String(o).trim()!==""&&(t=a)}),e.colsFixed?t+1:Math.min(t+2,T)},He=e=>{const t=50+Math.floor(Math.random()*451),o=[];for(let a=0;a<e;a++)o.push(Math.round(t*(.6+Math.random()*.8)));return o},$=(e,t)=>{const o=U(e);(e.rows||[]).forEach(a=>{const i=He(o);for(let n=0;n<o;n++)if(!(a.cellAutoCollect&&a.cellAutoCollect[n])&&!(a.cellEditable&&a.cellEditable[n]===!1)){if(t){const c=a.vals[n];if(c!==""&&c!=null)continue}a.vals[n]=i[n]}})},qe=e=>{let t=-1;return e.colNms.forEach((o,a)=>{o!=null&&String(o).trim()!==""&&(t=a)}),t+1},ce={series:"#ffe8cf",item:"#eaf2ff"},$e=(e,t)=>{const o=e.seriesOrientCd!=="COL";return(t==="row"?o:!o)?ce.series:ce.item},Xe=()=>"#94a3b8",Je=e=>e.widgetGenTypeCd==="QUERY",Ze=(e,t)=>{if(t===e.seriesOrientCd)return;const o=qe(e),a=d=>Array.from({length:T},(f,h)=>d[h]!=null?d[h]:""),i=a(e.rows.map(d=>d.seriesNm||"")),n=a(e.rows.map(d=>d.seriesCd||"")),c=[];for(let d=0;d<o;d++)c.push({seriesNm:e.colNms[d]||"",seriesCd:e.colCds&&e.colCds[d]||"",cellItemIds:e.rows.map(f=>f.cellItemIds[d]),vals:e.rows.map(f=>f.vals[d]),cellAutoCollect:e.rows.map(f=>(f.cellAutoCollect?f.cellAutoCollect[d]:!1)||!1),cellEditable:e.rows.map(f=>(f.cellEditable?f.cellEditable[d]:!0)!==!1)});e.colNms=i,e.colCds=n,e.rows=c,e.seriesOrientCd=t},et=(e,t)=>{let o=0;for(let a=0;a<U(e);a++){const i=Number(t.vals[a]);Number.isNaN(i)||(o+=i)}return coUtil.cofFmt(o)},tt=(e,t)=>{let o=0;return(e.rows||[]).forEach(a=>{const i=Number(a.vals[t]);Number.isNaN(i)||(o+=i)}),coUtil.cofFmt(o)},ot=e=>{let t=0;return(e.rows||[]).forEach(o=>{for(let a=0;a<U(e);a++){const i=Number(o.vals[a]);Number.isNaN(i)||(t+=i)}}),coUtil.cofFmt(t)},at=e=>{const t=(e.colNms||[]).slice(0,U(e));if(!t.length)return{};const o=(l,s)=>{const p=Number(e.rows[l].vals[s]);return Number.isNaN(p)?0:p},a=X(e),i=["#e8587a","#3b82f6","#16a34a","#f59e0b","#8b5cf6"],n=E&&E.DASH_WIDGET_COLOR_SETS[a.colorPaletteCd]||E&&E.PALETTE||i,c=E&&E.DASH_WIDGET_COLOR_SETS[a.colorPaletteCd2]||E&&E.PALETTE||i,d=a.chartTypeCd||"bar";if(d==="pie"||d==="doughnut"||d==="rose")return{tooltip:{trigger:"item"},legend:{bottom:0,type:"plain"},color:t.map((l,s)=>c[s%c.length]),series:[{type:"pie",radius:d==="doughnut"?["20%","65%"]:d==="rose"?["10%","65%"]:"60%",center:["50%","45%"],roseType:d==="rose"?"radius":void 0,label:{show:!0,formatter:l=>l.name+`
`+coUtil.cofFmt(l.value)},data:t.map((l,s)=>({name:l,value:o(0,s),itemStyle:{color:c[s%c.length]}}))}]};if(d==="funnel")return{tooltip:{trigger:"item"},legend:{bottom:0,type:"plain"},series:[{type:"funnel",left:"10%",width:"80%",top:16,bottom:36,sort:"descending",label:{show:!0,formatter:l=>l.name+`
`+coUtil.cofFmt(l.value)},data:t.map((l,s)=>({name:l,value:o(0,s),itemStyle:{color:c[s%c.length]}}))}]};if(d==="treemap")return{tooltip:{trigger:"item",formatter:l=>l.name+": "+coUtil.cofFmt(l.value)},series:[{type:"treemap",roam:!1,breadcrumb:{show:!1},label:{show:!0,formatter:l=>l.name+`
`+coUtil.cofFmt(l.value)},data:(e.rows||[]).map((l,s)=>({name:l.seriesNm||"(\uB2E8\uC77C)",itemStyle:{color:n[s%n.length]},children:t.map((p,r)=>({name:p,value:o(s,r),itemStyle:{color:c[r%c.length]}}))}))}]};if(d==="sunburst")return{tooltip:{trigger:"item",formatter:l=>l.name+": "+coUtil.cofFmt(l.value)},series:[{type:"sunburst",radius:[0,"90%"],label:{rotate:"radial"},data:(e.rows||[]).map((l,s)=>({name:l.seriesNm||"(\uB2E8\uC77C)",itemStyle:{color:n[s%n.length]},children:t.map((p,r)=>({name:p,value:o(s,r),itemStyle:{color:c[r%c.length]}}))}))}]};if(d==="heatmap"){const l=(e.rows||[]).map(r=>r.seriesNm||"(\uB2E8\uC77C)"),s=[];(e.rows||[]).forEach((r,m)=>t.forEach((b,u)=>s.push([u,m,o(m,u)])));const p=s.map(r=>r[2]);return{tooltip:{trigger:"item",formatter:r=>t[r.data[0]]+" / "+l[r.data[1]]+": "+coUtil.cofFmt(r.data[2])},grid:{left:90,right:16,top:20,bottom:60},xAxis:{type:"category",data:t,splitArea:{show:!0}},yAxis:{type:"category",data:l,splitArea:{show:!0}},visualMap:{min:Math.min(0,...p),max:Math.max(1,...p),calculable:!0,orient:"horizontal",bottom:0,inRange:{color:["#eef2ff",n[0]]}},series:[{type:"heatmap",data:s,label:{show:!0,fontSize:10,formatter:r=>coUtil.cofFmt(r.data[2])}}]}}if(d==="polarBar")return{tooltip:{trigger:"axis"},legend:{bottom:0,type:"plain"},polar:{radius:"65%"},angleAxis:{type:"category",data:t},radiusAxis:{type:"value"},series:(e.rows||[]).map((l,s)=>({name:l.seriesNm||"(\uB2E8\uC77C)",type:"bar",coordinateSystem:"polar",itemStyle:{color:n[s%n.length]},data:t.map((p,r)=>o(s,r))}))};if(d==="bar3D"){const l=(e.rows||[]).map(r=>r.seriesNm||"(\uB2E8\uC77C)"),s=[];(e.rows||[]).forEach((r,m)=>t.forEach((b,u)=>s.push([u,m,o(m,u)])));const p=s.map(r=>r[2]);return{tooltip:{},visualMap:{min:0,max:Math.max(1,...p),calculable:!0,dimension:2,inRange:{color:["#313695","#4575b4","#74add1","#e0f3f8","#fee090","#f46d43","#a50026"]}},xAxis3D:{type:"category",data:t},yAxis3D:{type:"category",data:l},zAxis3D:{type:"value"},grid3D:{boxWidth:100,boxDepth:55,viewControl:{autoRotate:!1,alpha:22},light:{main:{intensity:1.2}}},series:[{type:"bar3D",data:s,shading:"lambert",bevelSize:.2}]}}if(d==="scatter3D"){const l=(e.rows||[]).map(r=>r.seriesNm||"(\uB2E8\uC77C)"),s=[];(e.rows||[]).forEach((r,m)=>t.forEach((b,u)=>s.push([u,m,o(m,u)])));const p=s.map(r=>r[2]);return{tooltip:{},visualMap:{min:0,max:Math.max(1,...p),calculable:!0,dimension:2,inRange:{color:["#313695","#4575b4","#74add1","#e0f3f8","#fee090","#f46d43","#a50026"],symbolSize:[8,28]}},xAxis3D:{type:"category",data:t},yAxis3D:{type:"category",data:l},zAxis3D:{type:"value"},grid3D:{boxWidth:100,boxDepth:55,viewControl:{autoRotate:!1,alpha:22}},series:[{type:"scatter3D",data:s,symbolSize:12}]}}if(d==="surface"){const l=(e.rows||[]).map(r=>r.seriesNm||"(\uB2E8\uC77C)"),s=[];(e.rows||[]).forEach((r,m)=>t.forEach((b,u)=>s.push([u,m,o(m,u)])));const p=s.map(r=>r[2]);return{tooltip:{},visualMap:{min:0,max:Math.max(1,...p),calculable:!0,inRange:{color:["#313695","#4575b4","#74add1","#e0f3f8","#fee090","#f46d43","#a50026"]}},xAxis3D:{type:"category",data:t},yAxis3D:{type:"category",data:l},zAxis3D:{type:"value"},grid3D:{boxWidth:100,boxDepth:55,viewControl:{autoRotate:!1,alpha:22}},series:[{type:"surface",data:s,shading:"color",wireframe:{show:!0}}]}}if(d==="line3D")return{tooltip:{},xAxis3D:{type:"category",data:t},yAxis3D:{type:"category",data:(e.rows||[]).map(l=>l.seriesNm||"(\uB2E8\uC77C)")},zAxis3D:{type:"value"},grid3D:{boxWidth:100,boxDepth:55,viewControl:{autoRotate:!1,alpha:22}},series:(e.rows||[]).map((l,s)=>({type:"line3D",lineStyle:{color:n[s%n.length],width:4},data:t.map((p,r)=>[r,s,o(s,r)])}))};if(d==="polarLine")return{tooltip:{trigger:"axis"},legend:{bottom:0,type:"plain"},polar:{radius:"65%"},angleAxis:{type:"category",data:t},radiusAxis:{type:"value"},series:(e.rows||[]).map((l,s)=>({name:l.seriesNm||"(\uB2E8\uC77C)",type:"line",coordinateSystem:"polar",smooth:!0,itemStyle:{color:n[s%n.length]},data:t.map((p,r)=>o(s,r))}))};if(d==="themeRiver"){const l=(e.rows||[]).map(p=>p.seriesNm||"(\uB2E8\uC77C)"),s=[];return(e.rows||[]).forEach((p,r)=>t.forEach((m,b)=>s.push([m,o(r,b),p.seriesNm||"(\uB2E8\uC77C)"]))),{tooltip:{trigger:"axis"},legend:{bottom:0,type:"plain",data:l},singleAxis:{type:"category",data:t,top:20,bottom:50},color:(e.rows||[]).map((p,r)=>n[r%n.length]),series:[{type:"themeRiver",data:s,label:{show:!1}}]}}if(d==="parallel"){const l=(e.rows||[]).map(s=>s.seriesNm||"(\uB2E8\uC77C)");return{tooltip:{},parallelAxis:l.map((s,p)=>({dim:p,name:s})),parallel:{left:70,right:70,top:30,bottom:40},series:[{type:"parallel",lineStyle:{width:2},data:t.map((s,p)=>({name:s,value:(e.rows||[]).map((r,m)=>o(m,p)),lineStyle:{color:c[p%c.length]}}))}]}}if(d==="boxplot"){const l=t.map((s,p)=>{const r=(e.rows||[]).map((u,A)=>o(A,p)).sort((u,A)=>u-A),m=r.length,b=u=>{if(m===1)return r[0];const A=(m-1)*u,N=Math.floor(A),R=Math.ceil(A);return r[N]+(r[R]-r[N])*(A-N)};return{value:[r[0],b(.25),b(.5),b(.75),r[m-1]],itemStyle:{color:c[p%c.length],borderColor:c[p%c.length]}}});return{tooltip:{trigger:"item"},xAxis:{type:"category",data:t,boundaryGap:!0},yAxis:{type:"value"},series:[{type:"boxplot",data:l}]}}if(d==="sankey"){const s=[...(e.rows||[]).map((m,b)=>({name:(m.seriesNm||"(\uB2E8\uC77C)")+"\u200B",itemStyle:{color:n[b%n.length]}})),...t.map((m,b)=>({name:m,itemStyle:{color:c[b%c.length]}}))],p=[];(e.rows||[]).forEach((m,b)=>t.forEach((u,A)=>{const N=o(b,A);N>0&&p.push({source:(m.seriesNm||"(\uB2E8\uC77C)")+"\u200B",target:u,value:N})}));const r=m=>String(m||"").replace(/​$/,"");return{tooltip:{trigger:"item",formatter:m=>m.dataType==="edge"?r(m.data.source)+" \u2192 "+m.data.target+": "+coUtil.cofFmt(m.data.value):r(m.name)},series:[{type:"sankey",emphasis:{focus:"adjacency"},data:s,links:p,label:{fontSize:10,formatter:m=>r(m.name)},lineStyle:{color:"gradient",curveness:.5}}]}}if(d==="graph"||d==="graphCircular"){const l=d==="graphCircular",s=[];(e.rows||[]).forEach((b,u)=>t.forEach((A,N)=>s.push(o(u,N))));const p=Math.max(1,...s),r=[...(e.rows||[]).map((b,u)=>({id:"s"+u,name:b.seriesNm||"(\uB2E8\uC77C)",symbolSize:22,itemStyle:{color:n[u%n.length]},category:0})),...t.map((b,u)=>({id:"i"+u,name:b,symbolSize:14,itemStyle:{color:c[u%c.length]},category:1}))],m=[];return(e.rows||[]).forEach((b,u)=>t.forEach((A,N)=>{const R=o(u,N);R>0&&m.push({source:"s"+u,target:"i"+N,value:R,lineStyle:{width:1+5*(R/p)}})})),{tooltip:{},legend:[{data:["\uC2DC\uB9AC\uC988","\uD56D\uBAA9"],bottom:0,textStyle:{fontSize:10}}],series:[{type:"graph",layout:l?"circular":"force",roam:!0,draggable:!l,circular:l?{rotateLabel:!0}:void 0,categories:[{name:"\uC2DC\uB9AC\uC988"},{name:"\uD56D\uBAA9"}],force:l?void 0:{repulsion:150,edgeLength:90},label:{show:!0,fontSize:9},lineStyle:{color:"source",curveness:l?.3:.1,opacity:.6},data:r,links:m}]}}if(d==="tree")return{tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",orient:"LR",top:"4%",left:"9%",bottom:"4%",right:"18%",symbolSize:9,expandAndCollapse:!1,initialTreeDepth:-1,label:{fontSize:10,position:"left",verticalAlign:"middle",align:"right"},leaves:{label:{position:"right",verticalAlign:"middle",align:"left"}},data:[{name:e.itemNm||"\uC804\uCCB4",itemStyle:{color:"#94a3b8"},children:(e.rows||[]).map((l,s)=>({name:l.seriesNm||"(\uB2E8\uC77C)",itemStyle:{color:n[s%n.length]},children:t.map((p,r)=>({name:p+" ("+coUtil.cofFmt(o(s,r))+")",value:o(s,r),itemStyle:{color:c[r%c.length]}}))}))}]}]};if(d==="pictorialBar")return{tooltip:{trigger:"axis"},legend:{bottom:0,type:"plain"},grid:{left:48,right:16,top:20,bottom:48},xAxis:{type:"category",data:t},yAxis:{type:"value"},series:(e.rows||[]).map((l,s)=>({name:l.seriesNm||"(\uB2E8\uC77C)",type:"pictorialBar",symbol:"roundRect",symbolRepeat:!0,symbolSize:["60%","12%"],symbolMargin:"20%",itemStyle:{color:n[s%n.length]},data:t.map((p,r)=>o(s,r))}))};if(d==="gauge"){let l=0;return(e.rows||[]).forEach((p,r)=>t.forEach((m,b)=>{l+=o(r,b)})),{series:[{type:"gauge",min:0,max:Math.max(10,Math.ceil((l*1.25||10)/10)*10),progress:{show:!0,itemStyle:{color:n[0]}},itemStyle:{color:n[0]},detail:{valueAnimation:!0,formatter:p=>coUtil.cofFmt(p),fontSize:20,offsetCenter:[0,"70%"]},data:[{value:l,name:"\uD569\uACC4"}]}]}}const f=d==="area"||d==="stackedArea",h=d==="stackedBar"||d==="stackedLine"||d==="stackedArea",L=d==="stackedBar"?"bar":f||d==="line"||d==="stackedLine"||d==="radar"?"line":d,lt=L==="bar"&&!h,pe=(e.rows||[]).map((l,s)=>{const p=l.seriesNm||"(\uB2E8\uC77C)";return{name:p,type:L==="scatter"?"scatter":L,stack:h?"total":void 0,itemStyle:lt?{color:n[s%n.length],borderRadius:[6,6,0,0],shadowBlur:6,shadowColor:"rgba(0,0,0,0.10)",shadowOffsetY:3}:{color:n[s%n.length]},areaStyle:f?{opacity:.75}:void 0,smooth:L==="line",symbol:L==="line"?"circle":void 0,symbolSize:L==="line"?6:void 0,lineStyle:L==="line"?{width:3}:void 0,label:h&&L==="bar"?{show:!0,position:"inside",fontSize:10,color:"#fff",fontWeight:700,formatter:r=>p+`
`+coUtil.cofFmt(r.value)}:{show:!0,position:"top",fontSize:10,color:"#334155",formatter:r=>coUtil.cofFmt(r.value)},data:t.map((r,m)=>o(s,m))}});if(h){const l=s=>(e.rows||[]).reduce((p,r,m)=>p+o(m,s),0);pe.push({name:"\uD569\uACC4",type:"scatter",z:10,symbolSize:9,tooltip:{show:!1},label:{show:!0,position:"top",fontWeight:700,color:"#334155",formatter:s=>coUtil.cofFmt(s.value)},data:t.map((s,p)=>({value:l(p),itemStyle:{color:c[p%c.length]}}))})}return{tooltip:{trigger:"axis"},legend:{bottom:0,type:"plain",data:h?(e.rows||[]).map(l=>l.seriesNm||"(\uB2E8\uC77C)"):void 0,icon:"circle",itemWidth:8,itemHeight:8,textStyle:{color:"#64748b",fontSize:11}},grid:{left:48,right:16,top:40,bottom:64},xAxis:{type:"category",data:t,axisLine:{lineStyle:{color:"#dde3ea"}},axisTick:{show:!1},axisLabel:{color:"#64748b"}},yAxis:{type:"value",axisLine:{show:!1},axisLabel:{color:"#94a3b8"},splitLine:{lineStyle:{color:"#eef1f5",type:"dashed"}}},series:pe}},st=e=>{const t=S[e];if(!t||!t.vendorId)return"\uC804\uCCB4";const o=Y.find(a=>a.vendorId===t.vendorId);return o?o.vendorNm:t.vendorId},rt=e=>{const t=S[e];return t?t.dateTypeCd==="y"?(t.yyyy||"-")+" (\uC5F0\uB3C4)":t.dateTypeCd==="m"?(t.ym||"-")+" (\uC6D4)":(t.ymd||"-")+" (\uC77C\uC790)":"-"},K={};return K.baseSearch=[{key:"searchValue",type:"text",placeholder:"\uB300\uC2DC\uBCF4\uB4DC\uBA85/\uCEF4\uD3EC\uB10C\uD2B8\uBA85 \uAC80\uC0C9",label:"\uB300\uC2DC\uBCF4\uB4DC\uBA85"},{key:"itemNm",type:"text",placeholder:"\uC704\uC82F\uD56D\uBAA9\uBA85 \uAC80\uC0C9(\uCC28\uD2B8\xB7\uC2DC\uB9AC\uC988\xB7\uD56D\uBAA9)",label:"\uC704\uC82F\uD56D\uBAA9\uBA85"},{key:"useYn",type:"select",label:"\uC0AC\uC6A9\uC5EC\uBD80",nullLabel:"\uC0AC\uC6A9\uC5EC\uBD80 \uC804\uCCB4",options:()=>[{value:"Y",label:"\uC0AC\uC6A9"},{value:"N",label:"\uBBF8\uC0AC\uC6A9"}]}],K.dashboards=[{key:"dashboardNm",label:"\uB300\uC2DC\uBCF4\uB4DC\uBA85",link:!0,fmt:(e,t)=>(xe(t)?"\u{1F464} ":"")+(e||"")+(t.useYn==="N"?" (\uBBF8\uC0AC\uC6A9)":""),cellInnerStyle:(e,t)=>g.dashboardId===t.dashboardId?"color:#e8587a;font-weight:700;":""},{key:"_itemCnt",label:"\uC704\uC82F\uD56D\uBAA9",style:"width:64px;",align:"center",fmt:(e,t)=>(G[t.dashboardId]||0)+"\uAC1C"}],K.dashItems=[{key:"dashboardId",label:"\uB300\uC2DC\uBCF4\uB4DC\uBA85",style:"width:110px;",cellStyle:"color:#666;",fmt:e=>le(e)},{key:"_lvl",label:"\uB808\uBCA8",style:"width:56px;",align:"center",badge:()=>"badge-red",fmt:()=>"\u25CF \uCC28\uD2B8"},{key:"itemNm",label:"\uD56D\uBAA9\uBA85 (\uCC28\uD2B8)"},{key:"widgetGenTypeCd",label:"\uC0DD\uC131\uBC29\uC2DD",style:"width:110px;"},{key:"_seriesCnt",label:"\uC2DC\uB9AC\uC988\uAC1C\uC218",style:"width:84px;",align:"center",fmt:(e,t)=>(t._seriesCnt||0)+"\uAC1C"},{key:"seriesOrientCd",label:"\uC2DC\uB9AC\uC988\uD45C\uC2DC\uBC29\uBC95",style:"width:96px;",align:"center",badge:e=>e.seriesOrientCd==="COL"?"badge-purple":"badge-blue",fmt:e=>e==="COL"?"\uC5F4 (\uD56D\uBAA9=\uD589)":"\uD589 (\uC2DC\uB9AC\uC988=\uD589)"},{key:"_colCnt",label:"\uB370\uC774\uD0C0\uC5F4\uAC1C\uC218",style:"width:90px;",align:"center",fmt:(e,t)=>(t._colCnt||0)+"\uAC1C"},{key:"keyNm",label:"\uCF54\uB4DC",style:"width:110px;",cellStyle:"font-family:monospace;font-size:11px;color:#2563eb;"},{key:"inputOpts",label:"\uC870\uD68C\uC870\uAC74(input_opts)",style:"width:170px;",cellStyle:"font-family:monospace;font-size:10.5px;color:#94a3b8;",fmt:e=>e||O}],{dashboards:z,dashItems:k,dashItemCnt:G,charts:w,siteOptions:j,vendors:Y,uiState:v,codes:Z,dashItemsPager:C,cfPagedDashItems:Se,onDashItemsSetPage:ke,onDashItemsSizeChange:Ae,pdfAreaRef:J,handleExportPdf:ge,searchParam:g,groupParams:S,groupState:I,modals:_,columns:K,MAX_COLS:T,cfCurDash:re,fnDashNm:le,fnRefItemNm:Ne,cfHasData:Ee,cfVisibleCharts:De,cfGroups:D,cfAnyGroupLoading:Pe,cfAnyGroupSaving:_e,isDashItemChecked:we,cfAllDashItemsChecked:se,onToggleDashItemCheck:Ie,onToggleDashItemCheckAll:Ce,fnColCount:U,fnRowSum:et,fnColSum:tt,fnGrandTotal:ot,fnBuildChartOption:at,previewOpen:F,fnTogglePreview:he,fnGroupPreviewSetAll:ye,util:E,chartPreviewSel:W,fnPreviewSel:X,fnGroupPeriodLabel:rt,fnGroupVendorNm:st,fnGroupReady:ve,onOrientChange:Ze,fnAxisBg:$e,fnAxisCodeColor:Xe,fnIsQueryChart:Je,handleBtnAction:Le,handleGridCellAction:Oe,handleSimulateOne:Be,handleSaveOrient:Ye,fnCallbackModal:Te}},template:`
<bo-page title="\uB300\uC2DC\uBCF4\uB4DC \uB370\uC774\uD0C0\uAD00\uB9AC" :share-query="searchParam"
  desc-summary="\uC88C\uCE21 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC120\uD0DD\uD558\uBA74 \uC6B0\uCE21\uC5D0 \uC704\uC82F\uD56D\uBAA9\uBAA9\uB85D\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uCCB4\uD06C\uD55C \uD56D\uBAA9\uB9CC \uC544\uB798 \uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uB370\uC774\uD0C0\uC5D0 input_opts(\uC870\uD68C\uC870\uAC74 \uAD6C\uC131) \uBCC4\uB85C \uBB36\uC5EC \uB098\uD0C0\uB098\uBA70, \uADF8\uB8F9\uB9C8\uB2E4 \uAE30\uAC04\xB7\uC0C1\uD488\xB7\uC5C5\uCCB4 \uC870\uAC74\uC744 \uB530\uB85C \uC870\uD68C\xB7\uC800\uC7A5\uD569\uB2C8\uB2E4. \uC2DC\uB9AC\uC988(\uD589) \xD7 \uD56D\uBAA9(\uC5F4) \uB9E4\uD2B8\uB9AD\uC2A4\uC5D0 \uAC12\uC744 \uC9C1\uC811 \uC785\uB825\uD569\uB2C8\uB2E4.">
  <bo-container>
    <bo-search-area :loading="uiState.itemLoading" :columns="columns.baseSearch" :param="searchParam"
      @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
  </bo-container>

  <div class="bo-2col">
    <!-- ===== \u25A0. \uB300\uC2DC\uBCF4\uB4DC \uBAA9\uB85D (\uC120\uD0DD) ======================================= -->
    <bo-container title="\uB300\uC2DC\uBCF4\uB4DC \uBAA9\uB85D" :count-text="'\uCD1D ' + dashboards.length + '\uAC74'">
      <bo-grid bare narrow :columns="columns.dashboards" :rows="dashboards" row-key="dashboardId"
        :loading="uiState.itemLoading" :selected-key="searchParam.dashboardId"
        :row-class="row => searchParam.dashboardId === row.dashboardId ? 'active' : ''"
        empty-text="\uB300\uC2DC\uBCF4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
        grid-id="dashboards-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
    </bo-container>

    <!-- ===== \u25A0. \uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uD56D\uBAA9\uBAA9\uB85D (1\uB808\uBCA8=\uCC28\uD2B8\uB9CC, \uD3BC\uCE58\uAE30 \uC5C6\uC74C) =============== -->
    <bo-container title="\uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uD56D\uBAA9\uBAA9\uB85D" :count-text="'\uCD1D ' + dashItems.length + '\uAC1C'">
      <template #toolbar-actions>
        <button class="btn btn_search" :disabled="!dashItems.length || cfAnyGroupLoading"
          @click="handleBtnAction('groups-simulateAll')">\u{1F3B2} \uC804\uCCB4\uC2DC\uBBAC\uB808\uC774\uC158</button>
      </template>
      <div style="padding:8px 12px;font-size:11.5px;color:#666;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <template v-if="searchParam.dashboardId">
          <b>{{ cfCurDash ? cfCurDash.dashboardNm : '' }}</b>
          <span style="color:#aaa;font-family:monospace;font-size:11px;">{{ cfCurDash ? cfCurDash.uiCompNm : '' }}</span>
        </template>
        <span v-else style="color:#aaa;">\uC804\uCCB4 \uB300\uC2DC\uBCF4\uB4DC \u2014 \uC88C\uCE21\uC5D0\uC11C \uD558\uB098\uB97C \uC120\uD0DD\uD558\uBA74 \uADF8 \uB300\uC2DC\uBCF4\uB4DC\uC758 \uAC12 \uC785\uB825 \uADF8\uB9AC\uB4DC\uAC00 \uC544\uB798 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</span>
        <span style="margin-left:auto;display:flex;align-items:center;gap:6px;">
          \uC0AC\uC774\uD2B8
          <select class="form-control" v-model="searchParam.siteId"
            @change="handleBtnAction('siteChange')" style="width:150px;">
            <option v-for="o in siteOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
          </select>
        </span>
      </div>
      <bo-grid bare selectable :columns="columns.dashItems" :rows="cfPagedDashItems" row-key="dashboardItemId"
        :loading="uiState.itemLoading" :pager="dashItemsPager" table-max-height="540px" fixed-height
        :is-checked="isDashItemChecked" :all-checked="cfAllDashItemsChecked"
        @toggle-check="onToggleDashItemCheck" @toggle-check-all="onToggleDashItemCheckAll"
        empty-text="\uC704\uC82F\uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.">
        <template #cell-widgetGenTypeCd="{ row }">
          <td style="font-size:12px;">
            <span class="badge" :class="row.widgetGenTypeCd === 'QUERY' ? 'badge-purple' : 'badge-gray'">
              {{ row.widgetGenTypeCd === 'QUERY' ? '\u{1F517} \uCFFC\uB9AC' : '\uB9E4\uB274\uC5BC' }}</span>
            <div v-if="row.widgetGenTypeCd === 'QUERY'" style="font-size:10px;color:#7c3aed;margin-top:2px;"
              title="SQL \uC2E4\uD589 \uACB0\uACFC\uB85C \uC790\uB3D9 \uC0DD\uC131\uB428">\uCC38\uC870: {{ fnRefItemNm(row.refItemKey) }}</div>
          </td>
        </template>
      </bo-grid>
      <bo-pager :pager="dashItemsPager" :on-set-page="onDashItemsSetPage" :on-size-change="onDashItemsSizeChange" />
    </bo-container>
  </div>

  <!-- ===== \u25A0. \uCC28\uD2B8\uBCC4 \uB370\uC774\uD130 \uADF8\uB9AC\uB4DC \u2014 input_opts \uBCC4\uB85C \uBB36\uC5B4 \uADF8\uB8F9\uB9C8\uB2E4 \uC870\uD68C\uC870\uAC74\uC744 \uB530\uB85C \uBC1B\uB294\uB2E4 ===== -->
  <bo-container ref="pdfAreaRef" title="\uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uB370\uC774\uD0C0"
    :count-text="cfHasData ? ('\uCCB4\uD06C ' + cfVisibleCharts.length + ' / \uC804\uCCB4 ' + charts.length + '\uAC1C') : ''">
    <template #toolbar-actions>
      <button class="btn btn_reset" :disabled="cfAnyGroupLoading"
        @click="handleBtnAction('groups-reset')">\uCD08\uAE30\uD654</button>
      <button class="btn btn_save" :disabled="!cfHasData || cfAnyGroupSaving"
        @click="handleBtnAction('groups-saveAll')">\uC804\uCCB4 \uC800\uC7A5</button>
      <button class="btn btn_excel"
        :disabled="!cfHasData || uiState.pdfExporting" @click="handleExportPdf">
        {{ uiState.pdfExporting ? 'PDF \uC0DD\uC131 \uC911...' : '\u{1F4C4} PDF \uB2E4\uC6B4\uB85C\uB4DC' }}</button>
    </template>

    <div style="padding:8px 12px;font-size:11.5px;color:#aaa;border-bottom:1px solid #f0f0f0;">
      \uC704\uC82F\uB9C8\uB2E4 \uC870\uD68C\uC870\uAC74(\uAE30\uAC04\uAD6C\uBD84\xB7\uC0C1\uD488\xB7\uC5C5\uCCB4)\uC774 \uB2E4\uB97C \uC218 \uC788\uC5B4(cm_dashboard_item.input_opts) \uC544\uB798 \uADF8\uB8F9\uBCC4\uB85C \uB530\uB85C \uC870\uD68C\xB7\uC800\uC7A5\uD569\uB2C8\uB2E4.
    </div>

    <div v-if="cfGroups.length" style="padding:12px;display:flex;flex-direction:column;gap:20px;">
      <!-- \uADF8\uB8F9 \uD558\uB098 = \uAC19\uC740 input_opts \uB97C \uC4F0\uB294 \uC704\uC82F \uBB36\uC74C -->
      <div v-for="group in cfGroups" :key="group.key"
        style="border:1px solid #2d4a75;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px rgba(30,58,95,.15);">
        <!-- \uADF8\uB8F9 \uC870\uD68C\uC870\uAC74 \u2014 1\uD589: input_opts \uC6D0\uBB38(\uC9D9\uC740 \uBC30\uACBD) / 2\uD589: \uC2E4\uC81C \uC870\uAC74 \uCEF4\uD3EC\uB10C\uD2B8 -->
        <div style="padding:7px 12px;background:linear-gradient(135deg,#1c2e4a,#2d4a75);display:flex;align-items:center;gap:6px;">
          <span style="font-size:11px;">\u2699\uFE0F</span>
          <span style="font-family:monospace;font-size:11px;color:#dce6f7;letter-spacing:.3px;">{{ group.key }}</span>
        </div>
        <div style="padding:8px 10px;background:#f0f6ff;border-bottom:1px solid #dbeafe;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <span style="font-size:11px;color:#64748b;">
            {{ group.dims.dateTypeCd === 'y' ? '\uC5F0\uB3C4\uBCC4' : (group.dims.dateTypeCd === 'm' ? '\uC6D4\uBCC4' : '\uC77C\uBCC4') }}</span>
          <select v-if="group.dims.hasSiteId" class="form-control" v-model="groupParams[group.key].siteId" style="width:150px;">
            <option v-for="o in siteOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
          </select>
          <input v-if="group.dims.dateTypeCd === 'd'" type="date" class="form-control"
            v-model="groupParams[group.key].ymd" style="width:140px;" />
          <input v-else-if="group.dims.dateTypeCd === 'm'" type="month" class="form-control"
            v-model="groupParams[group.key].ym" style="width:130px;" />
          <input v-else type="number" class="form-control" min="2000" max="2999"
            v-model="groupParams[group.key].yyyy" placeholder="\uC5F0\uB3C4(YYYY)" style="width:100px;" />
          <span v-if="group.dims.hasProdId" style="display:flex;align-items:center;gap:4px;">
            <input type="text" class="form-control" readonly :value="groupParams[group.key].prodNm"
              placeholder="\uC0C1\uD488 \uC120\uD0DD(\uC120\uD0DD)" style="width:130px;cursor:pointer;"
              @click="handleBtnAction('prodModal-open', group.key)" />
            <button v-if="groupParams[group.key].prodId" class="btn btn-sm"
              @click="handleBtnAction('group-prodClear', group.key)">\u2715</button>
          </span>
          <select v-if="group.dims.hasVendorId" class="form-control" v-model="groupParams[group.key].vendorId" style="width:140px;">
            <option value="">\uC5C5\uCCB4 \uC804\uCCB4(\uC120\uD0DD)</option>
            <option v-for="v in vendors" :key="v.vendorId" :value="v.vendorId">{{ v.vendorNm }}</option>
          </select>
          <button class="btn btn-sm" style="background:#ecfeff;color:#0e7490;border:1px solid #a5f3fc;font-weight:700;"
            :disabled="!fnGroupReady(group.key) || groupState[group.key].loading"
            @click="handleBtnAction('group-search', group.key)">\uC870\uD68C</button>
        </div>
        <!-- 2\uD589: [\uC870\uD68C] \uC774\uD6C4 \uC561\uC158 \uBC84\uD2BC\uB4E4 \u2014 \uC870\uAC74 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC904\uC744 \uBD84\uB9AC\uD574 \uB113\uC5B4\uC838\uB3C4 \uC548 \uBC00\uB9AC\uAC8C -->
        <div style="padding:6px 10px;background:#f0f6ff;border-bottom:1px solid #dbeafe;display:flex;align-items:center;justify-content:flex-end;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-sm" style="background:#f8fafc;color:#64748b;border:1px solid #cbd5e1;font-weight:700;"
            :disabled="groupState[group.key].loading"
            @click="handleBtnAction('group-clearValues', group.key)">\uAC12\uCD08\uAE30\uD654</button>
          <button class="btn btn-sm" style="background:#fffbeb;color:#b45309;border:1px solid #fde68a;font-weight:700;"
            :disabled="groupState[group.key].loading"
            @click="handleBtnAction('group-simulateEmpty', group.key)">\u{1F3B2} \uBE48\uAC12 \uC2DC\uBBAC</button>
          <button class="btn btn-sm" style="background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;font-weight:700;"
            :disabled="groupState[group.key].loading"
            @click="handleBtnAction('group-simulateAll', group.key)">\u{1F3B2} \uBAA8\uB4E0\uAC12 \uC2DC\uBBAC</button>
          <button class="btn btn_save btn-sm" :disabled="groupState[group.key].saving"
            @click="handleBtnAction('group-save', group.key)">\uADF8\uB8F9 \uC800\uC7A5</button>
          <button class="btn btn_expand_all btn-sm" @click="fnGroupPreviewSetAll(group, true)">\uBBF8\uB9AC\uBCF4\uAE30 \uD3BC\uCE58\uAE30</button>
          <button class="btn btn_collapse_all btn-sm" @click="fnGroupPreviewSetAll(group, false)">\uBBF8\uB9AC\uBCF4\uAE30 \uC811\uAE30</button>
        </div>
        <div v-if="groupState[group.key].searched" style="padding:4px 10px;font-size:11px;color:#94a3b8;background:#fafbfc;">
          \uAE30\uC900: {{ fnGroupPeriodLabel(group.key) }}
          <span v-if="group.dims.hasProdId || group.dims.hasVendorId" style="margin-left:6px;">
            \uC0C1\uD488 {{ groupParams[group.key].prodNm || '\uC804\uCCB4' }} \xB7 \uC5C5\uCCB4 {{ fnGroupVendorNm(group.key) }}
          </span>
        </div>

        <!-- \uADF8\uB8F9\uC5D0 \uC18D\uD55C \uCC28\uD2B8\uB9C8\uB2E4 \uADF8\uB9AC\uB4DC 1\uAC1C: \uD589=\uC2DC\uB9AC\uC988(2\uB808\uBCA8) / \uC5F4=\uD56D\uBAA9\uBA85(3\uB808\uBCA8) -->
        <div style="padding:12px;display:flex;flex-direction:column;gap:16px;">
          <div v-for="chart in group.charts.filter(c => !c._notLoaded)" :key="chart.dashboardItemId"
            style="position:relative;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
            <!-- \uC790\uB3D9\uC218\uC9D1 \uC704\uC82F \u2014 \uCE74\uB4DC \uC0C1\uB2E8 \uBAA8\uC11C\uB9AC \uBC43\uC9C0(\uBC30\uCE58\uAC00 \uCC44\uC6B0\uB294 \uAC12\uC774\uB77C\uB294 \uD45C\uC2DC) -->
            <span v-if="chart.autoCollectYn === 'Y'"
              style="position:absolute;top:0;left:0;background:#16a34a;color:#fff;font-size:10px;font-weight:700;padding:2px 8px 3px 6px;border-radius:8px 0 8px 0;z-index:1;line-height:1.3;"
              title="\uBC30\uCE58\uAC00 \uC2E4 \uB370\uC774\uD130\uB97C \uC9D1\uACC4\uD574 \uCC44\uC6B4\uB2E4 \u2014 \uC774 \uD654\uBA74\uC5D0\uC11C \uC218\uC815 \uBD88\uAC00">\u{1F916} \uC790\uB3D9\uC218\uC9D1</span>
            <div style="padding:6px 10px;background:#f8fafc;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;gap:8px;">
              <span :style="'font-weight:700;font-size:12.5px;color:#1f4a73;white-space:nowrap;' + (chart.autoCollectYn === 'Y' ? 'margin-left:76px;' : '')">
                {{ chart.itemNm }}
                <span style="font-family:monospace;font-size:11px;color:#94a3b8;font-weight:400;">{{ chart.itemKey }}</span>
                <!-- \uCFFC\uB9AC\uBC29\uC2DD(QUERY) \uC704\uC82F \u2014 \uCC38\uC870\uD56D\uBAA9\uBA85\uC744 \uC548\uB0B4(2026-08-21). \uC774 \uD654\uBA74\uC5D0\uC11C \uAC12\uC740 \uC190\uC73C\uB85C
                     \uBABB \uACE0\uCE58\uACE0(\uC140\uC774 \uC774\uBBF8 \uC790\uB3D9\uC218\uC9D1\xB7\uC218\uC815\uBD88\uAC00\uB85C \uB0B4\uB824\uC628\uB2E4) \uD56D\uBAA9\uAD00\uB9AC\uC5D0\uC11C \uCFFC\uB9AC \uC7AC\uC2E4\uD589\uC73C\uB85C \uAC31\uC2E0 -->
                <span v-if="chart.widgetGenTypeCd === 'QUERY'" class="badge badge-purple" style="margin-left:4px;"
                  title="SQL \uC2E4\uD589 \uACB0\uACFC\uB85C \uC790\uB3D9 \uC0DD\uC131\uB428 \u2014 \uAC12 \uC7AC\uC0DD\uC131\uC740 [\uB300\uC2DC\uBCF4\uB4DC \uD56D\uBAA9\uAD00\uB9AC]\uC5D0\uC11C">\u{1F517} \uCC38\uC870: {{ chart.refItemKey || '-' }}</span>
              </span>
              <!-- \uC2DC\uBBAC\uB808\uC774\uC158\uBD80\uD130 \uC6B0\uCE21 \uC815\uB82C -->
              <span style="margin-left:auto;display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end;">
                <!-- \uBBF8\uB9AC\uBCF4\uAE30 \uC804\uC6A9 \uC624\uBC84\uB77C\uC774\uB4DC \u2014 \uC800\uC7A5\uB418\uB294 \uAC12(chart.chartTypeCd)\uACFC \uBB34\uAD00, \uD654\uBA74\uC5D0\uC11C\uB9CC \uBC14\uAFD4\uBCF8\uB2E4 -->
                <select v-model="fnPreviewSel(chart).chartTypeCd" class="form-control"
                  style="width:auto;padding:2px 6px;font-size:11px;min-height:24px;" title="\uBBF8\uB9AC\uBCF4\uAE30 \uCC28\uD2B8\uC720\uD615(\uC800\uC7A5 \uC548 \uB428)">
                  <optgroup v-for="g in util.CHART_TYPE_GROUPS" :key="g.key" :label="g.label">
                    <option v-for="c in g.items" :key="c.value" :value="c.value">{{ c.icon }} {{ c.label }}</option>
                  </optgroup>
                </select>
                <select v-model="fnPreviewSel(chart).colorPaletteCd" class="form-control"
                  style="width:auto;padding:2px 6px;font-size:11px;min-height:24px;" title="\uBBF8\uB9AC\uBCF4\uAE30 \uC0C9\uC0C1 1=\uC2DC\uB9AC\uC988\uC6A9(\uC800\uC7A5 \uC548 \uB428)">
                  <option v-for="c in util.DASH_WIDGET_COLOR_OPTIONS" :key="c.value" :value="c.value">{{ c.label }}</option>
                </select>
                <select v-model="fnPreviewSel(chart).colorPaletteCd2" class="form-control"
                  style="width:auto;padding:2px 6px;font-size:11px;min-height:24px;" title="\uBBF8\uB9AC\uBCF4\uAE30 \uC0C9\uC0C1 2=\uD56D\uBAA9\uC6A9(\uD30C\uC774 \uC870\uAC01/\uB204\uC801\uB9C9\uB300 \uD569\uACC4, \uC800\uC7A5 \uC548 \uB428)">
                  <option v-for="c in util.DASH_WIDGET_COLOR_OPTIONS" :key="c.value" :value="c.value">{{ c.label }}</option>
                </select>
                <button class="btn btn-sm" :disabled="groupState[group.key].loading"
                  style="background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;font-weight:700;"
                  @click="handleSimulateOne(chart)">\u{1F3B2} \uC2DC\uBBAC\uB808\uC774\uC158</button>
                <span style="display:flex;align-items:center;gap:4px;font-size:11px;color:#64748b;">
                  \uC2DC\uB9AC\uC988\uD45C\uC2DC\uBC29\uBC95
                  <select class="form-control" :value="chart.seriesOrientCd"
                    @change="onOrientChange(chart, $event.target.value)"
                    style="width:auto;padding:2px 6px;font-size:11px;min-height:24px;">
                    <option value="ROW">\uD589 (\uC2DC\uB9AC\uC988=\uD589 \xB7 \uD56D\uBAA9=\uC5F4)</option>
                    <option value="COL">\uC5F4 (\uD56D\uBAA9=\uD589 \xB7 \uC2DC\uB9AC\uC988=\uC5F4)</option>
                  </select>
                  <button class="btn" style="background:#f5f3ff;color:#6d28d9;border:1px solid #ddd6fe;font-weight:700;padding:2px 6px;font-size:10.5px;min-height:24px;"
                    @click="handleSaveOrient(chart)">\uD45C\uC2DC\uBC29\uBC95\uC800\uC7A5</button>
                </span>
              </span>
            </div>
            <div style="overflow-x:auto;">
              <table class="bo-table bo-table-narrow">
                <thead>
                  <tr>
                    <!-- \uCD95 \uB77C\uBCA8 \uD5E4\uB354 \u2014 \uB370\uC774\uD130\uC5F4 \uD5E4\uB354\uC640 \uBC30\uACBD\uC744 \uAD6C\uBD84(\uD68C\uC0C9) -->
                    <th style="width:140px;background:#eef1f5;color:#475569;">
                      {{ chart.seriesOrientCd === 'COL' ? '\uD56D\uBAA9 \\\\ \uC2DC\uB9AC\uC988' : '\uC2DC\uB9AC\uC988 \\\\ \uD56D\uBAA9' }}</th>
                    <th v-for="i in fnColCount(chart)" :key="i" :style="'min-width:96px;background:' + fnAxisBg(chart, 'col') + ';'">
                      <!-- \uD56D\uBAA9\uAD00\uB9AC\uC5D0 3\uB808\uBCA8 \uC815\uC758(cols_json)\uAC00 \uC788\uC73C\uBA74 \uADF8\uAC83\uC774 \uAE30\uC900 \u2014 \uC5EC\uAE30\uC11C \uACE0\uCE58\uC9C0 \uC54A\uB294\uB2E4 -->
                      <template v-if="chart.colsFixed">
                        {{ chart.colNms[i-1] }}
                        <span :style="'font-family:monospace;font-size:10px;font-weight:400;color:' + fnAxisCodeColor(chart, 'col') + ';'">
                          {{ chart.colCds ? chart.colCds[i-1] : '' }}</span>
                      </template>
                      <input v-else type="text" class="form-control" v-model="chart.colNms[i-1]"
                        :placeholder="'\uD56D\uBAA9' + i" style="text-align:center;font-weight:700;" />
                    </th>
                    <th style="width:80px;background:#eef1f5;color:#475569;">\uD569\uACC4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, ri) in chart.rows" :key="ri">
                    <!-- \uCD95 \uB77C\uBCA8(\uC2DC\uB9AC\uC988/\uD56D\uBAA9) \uBC30\uACBD \u2014 \uC2DC\uB9AC\uC988\xB7\uD56D\uBAA9\xB7\uB370\uC774\uD130\uC5F4\uC774 \uC11C\uB85C \uB2E4\uB978 \uC0C9\uC73C\uB85C \uAD6C\uBD84 -->
                    <td :style="'font-weight:600;background:' + fnAxisBg(chart, 'row') + ';'">
                      {{ row.seriesNm || '(\uB2E8\uC77C)' }}
                      <span v-if="row.seriesCd" :style="'font-family:monospace;font-size:10px;font-weight:400;color:' + fnAxisCodeColor(chart, 'row') + ';'">
                        {{ row.seriesCd }}</span>
                    </td>
                    <td v-for="i in fnColCount(chart)" :key="i"
                      :style="'position:relative;background:' + (fnIsQueryChart(chart) ? '#f5f3ff' : (row.cellEditable[i-1] ? '#fff' : '#f1f5f9')) + ';'">
                      <!-- \uC140 \uB2E8\uC704 \uC790\uB3D9\uC218\uC9D1 \uD45C\uC2DC(\uC88C\uC0C1\uB2E8 \uB179\uC0C9 \uCF54\uB108 \uC0BC\uAC01\uD615) \u2014 1\uB808\uBCA8(\uCE74\uB4DC)\uC758 \uC790\uB3D9\uC218\uC9D1
                           \uBC30\uC9C0\uB294 \uADF8 \uCC28\uD2B8\uC5D0 \uC790\uB3D9\uC218\uC9D1 \uC140\uC774 \uC788\uB2E4\uB294 \uC548\uB0B4\uC77C \uBFD0, \uCE74\uB4DC \uC804\uCCB4\uB97C \uC7A0\uADF8\uC9C0
                           \uC54A\uB294\uB2E4. \uC785\uB825 \uC7A0\uAE08\uC740 \uC624\uC9C1 \uC774 \uC140(3\uB808\uBCA8 \uD56D\uBAA9)\uC758 editable_yn='N' \uC5EC\uBD80\uB85C\uB9CC
                           \uACB0\uC815\uD55C\uB2E4(cellEditable) \u2014 chart.editableYn \uC740 \uB354 \uC774\uC0C1 disabled \uC870\uAC74\uC5D0 \uC548 \uC500.
                           \uC218\uC815\uBD88\uAC00 \uC140\uC740 \uD074\uB9AD\uD574\uBD10\uC57C \uC54C \uC218 \uC788\uB358 \uAC78 \uD68C\uC0C9 \uBC30\uACBD\uC73C\uB85C \uBBF8\uB9AC \uBCF4\uC774\uAC8C \uD55C\uB2E4.
                           \uCFFC\uB9AC\uBC29\uC2DD(QUERY) \uCC28\uD2B8\uB294 \uD68C\uC0C9 \uB300\uC2E0 \uBCF4\uB77C\uC0C9 \uACC4\uC5F4\uB85C \u2014 "\u{1F517} \uCFFC\uB9AC" \uBC30\uC9C0\uC640 \uAC19\uC740
                           \uD1A4\uC774\uB77C SQL \uB85C \uC790\uB3D9 \uCC44\uC6CC\uC9C0\uB294 \uAC12\uC784\uC744 \uADF8\uB9AC\uB4DC\uC5D0\uC11C\uB3C4 \uBC14\uB85C \uC54C\uC544\uBCF8\uB2E4. -->
                      <span v-if="row.cellAutoCollect[i-1]"
                        style="position:absolute;top:0;left:0;width:0;height:0;border-top:9px solid #16a34a;border-right:9px solid transparent;z-index:1;"
                        title="\uC774 \uD56D\uBAA9\uC740 \uBC30\uCE58\uAC00 \uC790\uB3D9\uC218\uC9D1\uD55C\uB2E4 \u2014 \uC9C1\uC811 \uC218\uC815 \uBD88\uAC00"></span>
                      <input type="number" class="form-control" v-model="row.vals[i-1]"
                        :disabled="!row.cellEditable[i-1]"
                        :style="'text-align:right;padding:4px 6px;font-size:12px;min-height:26px;' + (fnIsQueryChart(chart) ? 'background:#ede9fe;color:#6d28d9;' : (row.cellEditable[i-1] ? '' : 'background:#e2e8f0;color:#64748b;'))" />
                    </td>
                    <td style="text-align:right;font-weight:700;color:#475569;background:#e9edf3;">
                      {{ fnRowSum(chart, row) }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <!-- \uADF8\uB9AC\uB4DC \uB9E8 \uC544\uB798 \uD569\uACC4 \uD589 \u2014 \uC5F4(\uD56D\uBAA9)\uBCC4 \uD569\uACC4 + \uC6B0\uD558\uB2E8 \uCD1D\uD569 -->
                  <tr>
                    <td style="font-weight:700;background:#eef1f5;color:#475569;">\uD569\uACC4</td>
                    <td v-for="i in fnColCount(chart)" :key="i"
                      style="text-align:right;font-weight:700;background:#eef1f5;color:#475569;">
                      {{ fnColSum(chart, i-1) }}
                    </td>
                    <td style="text-align:right;font-weight:700;background:#e9edf3;color:#1f4a73;">
                      {{ fnGrandTotal(chart) }}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- \uBBF8\uB9AC\uBCF4\uAE30 \u2014 \uAE30\uBCF8 \uD3BC\uCE68, \uC811\uC73C\uBA74 \uC228\uAE34\uB2E4(2026-08-21) -->
            <div style="border-top:1px solid #e5e7eb;">
              <div style="padding:5px 10px;background:#fafbfc;cursor:pointer;display:flex;align-items:center;gap:6px;font-size:11.5px;color:#64748b;"
                @click="fnTogglePreview(chart.dashboardItemId)">
                <span style="width:10px;font-size:10px;">{{ previewOpen[chart.dashboardItemId] !== false ? '\u25BC' : '\u25B6' }}</span>
                \uBBF8\uB9AC\uBCF4\uAE30
              </div>
              <div v-if="previewOpen[chart.dashboardItemId] !== false" style="padding:8px;">
                <co-echart :option="fnBuildChartOption(chart)" height="220px" not-merge />
              </div>
            </div>
          </div>
          <div v-if="!group.charts.some(c => !c._notLoaded)" style="padding:16px;text-align:center;color:#aaa;font-size:12px;">
            [\uC870\uD68C]\uB97C \uB20C\uB7EC \uC774 \uADF8\uB8F9\uC758 \uAC12\uC744 \uBD88\uB7EC\uC624\uC138\uC694.
          </div>
        </div>
      </div>
    </div>

    <div v-else style="padding:32px;text-align:center;color:#aaa;">
      <template v-if="dashItems.length && !uiState.selectedItemIds.length">
        \uC704\uC82F\uD56D\uBAA9\uBAA9\uB85D\uC5D0\uC11C \uD45C\uC2DC\uD560 \uD56D\uBAA9\uC744 \uCCB4\uD06C\uD574\uC8FC\uC138\uC694.
      </template>
      <template v-else-if="searchParam.dashboardId && !dashItems.length && !uiState.itemLoading">
        \uC120\uD0DD\uD55C \uB300\uC2DC\uBCF4\uB4DC\uC5D0 \uCC28\uD2B8 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
        <button class="btn btn-sm" @click="handleBtnAction('goItemMng')" style="margin-left:8px;">\uD56D\uBAA9\uAD00\uB9AC\uB85C \uC774\uB3D9</button>
      </template>
      <template v-else>\uC88C\uCE21\uC5D0\uC11C \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC120\uD0DD\uD558\uBA74 \uAC12 \uC785\uB825 \uADF8\uB9AC\uB4DC\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</template>
    </div>
  </bo-container>

  <!-- ===== \u25A0. \uC0C1\uD488 \uC120\uD0DD \uD31D\uC5C5 (\uACF5\uD1B5\uD31D\uC5C5 prod) ================================= -->
  <bo-cm-popup-modal v-if="modals.isProdPick"
    popup-cmd="cmPopup-prod-pick" popup-code="prod" clearable
    :on-callback="fnCallbackModal" @close="modals.isProdPick = false; modals.prodPickGroupKey = null" />
</bo-page>
`};
