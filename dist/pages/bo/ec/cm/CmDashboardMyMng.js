window.CmDashboardMyMng={name:"CmDashboardMyMng",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null}},setup(S){const{ref:P,reactive:g,computed:f,onMounted:ge,watch:q}=Vue,{showToast:l,showConfirm:B}=window.boApp,O=window.cmDashWidgetUtil,he=[{value:"PRIVATE",label:"\uBE44\uACF5\uAC1C",icon:"\u{1F512}",desc:"\uB098\uC640 \uC544\uB798 \uACF5\uC720\uB300\uC0C1\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uC0C1\uC774 \uC5C6\uC73C\uBA74 \uB098\uB9CC \uBD05\uB2C8\uB2E4."},{value:"PUBLIC",label:"\uC804\uCCB4\uACF5\uAC1C",icon:"\u{1F310}",desc:"\uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uAC00 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."}],L=e=>e==="PUBLIC"||e==="ALL"?"PUBLIC":"PRIVATE",be=e=>L(e)==="PUBLIC"?"\uC804\uCCB4\uACF5\uAC1C":"\uBE44\uACF5\uAC1C",xe=e=>L(e)==="PUBLIC"?"\u{1F310}":"\u{1F512}",H=e=>(e||"").split("^").filter(Boolean),V=e=>e.length?"^"+e.join("^")+"^":"",w=g([]),E=g([]),c=g([]),k=g([]),z=g([]),N=g([]),r=g({loading:!1,settingOpen:!0,saving:!1,dirty:!1,catalogOpen:!0,tab:"mine"}),ve=g({}),u=P(""),i=g({type:null,idx:null,overIdx:null,canvasOver:!1}),C=g({loading:!1,widgets:{}}),d=g({dashboardNm:"",shareScopeCd:"PRIVATE",targets:[]}),I=g({user:!1,dept:!1,vendor:!1}),m=f(()=>{var e;return((e=window.boCommonFilter)==null?void 0:e.siteId)||""}),b=f(()=>{const e=window.sfGetBoAuthStore?window.sfGetBoAuthStore():null;return e&&e.svAuthUser&&e.svAuthUser.authId||""}),h=f(()=>w.find(e=>e.dashboardId===u.value)||E.find(e=>e.dashboardId===u.value)||null),y=f(()=>!!(h.value&&h.value.ownerUserId===b.value)),Q=f(()=>!!S.dtlId),_=f(()=>y.value&&!Q.value),Z=f(()=>r.tab==="mine"?w:E),me=(e,t)=>{if(e==="tab-set")return r.tab=t,ee();if(e==="dash-select")return T(t);if(e==="dash-create")return ye();if(e==="dash-rename")return we();if(e==="dash-delete")return Ie();if(e==="setting-toggle"){r.settingOpen=!r.settingOpen;return}if(e==="setting-reset")return W(),l("\uC800\uC7A5 \uC804 \uAC12\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4.","success");if(e==="setting-save")return Oe();if(e==="setting-pickUser"){I.user=!0;return}if(e==="setting-pickDept"){I.dept=!0;return}if(e==="setting-pickVendor"){I.vendor=!0;return}if(e==="setting-removeTarget")return Ee(t);if(e==="layout-save")return Re();if(e==="layout-reload")return R();if(e==="catalog-toggle"){r.catalogOpen=!r.catalogOpen;return}if(e==="catalog-add")return G(k[t]);if(e==="card-remove")return We(c[t]);if(e==="card-widthDec")return M(t,"panelWidth",-1);if(e==="card-widthInc")return M(t,"panelWidth",1);if(e==="card-heightDec")return M(t,"panelHeight",-1);if(e==="card-heightInc")return M(t,"panelHeight",1);console.warn("[handleBtnAction] unknown cmd:",e)};ge(async()=>{await A(),await Ne(),Te(),ue(),window.addEventListener("resize",U)}),Vue.onUnmounted(()=>window.removeEventListener("resize",U)),q(()=>S.dtlId,e=>{e&&e!==u.value&&A()});const A=async()=>{var e;r.loading=!0;try{const a=(((e=(await boApiSvc.cmDashboard.getList({siteId:m.value,scope:"accessible"},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uC870\uD68C")).data)==null?void 0:e.data)||[]).filter(s=>s.ownerUserId||S.dtlId&&s.dashboardId===S.dtlId),o=a.filter(s=>s.ownerUserId===b.value),n=a.filter(s=>s.ownerUserId!==b.value);w.splice(0,w.length,...o),E.splice(0,E.length,...n);const v=S.dtlId||u.value,p=a.find(s=>s.dashboardId===v);p?(r.tab=p.ownerUserId===b.value?"mine":"shared",await T(p.dashboardId)):await ee()}catch(t){l(coUtil.cofErrMsg(t,"\uC870\uD68C \uC624\uB958"),"error",0)}finally{r.loading=!1}},ee=async()=>{const e=Z.value;if(e.length)return T(e[0].dashboardId);u.value="",c.splice(0,c.length)},T=async e=>{u.value=e,W(),await R()},ye=async()=>{var t;if(!b.value)return l("\uB85C\uADF8\uC778 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");const e="\uB0B4 \uB300\uC2DC\uBCF4\uB4DC "+(w.length+1);try{const o=((t=(await boApiSvc.cmDashboard.create({siteId:m.value,dashboardNm:e,uiCompNm:"MY:"+b.value,ownerUserId:b.value,shareScopeCd:"ME",layoutCols:4,sortOrd:900+w.length,useYn:"Y",remark:"\uAC1C\uC778\uD654 \uB300\uC2DC\uBCF4\uB4DC ("+b.value+")"},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uC0DD\uC131")).data)==null?void 0:t.data)||{};l("["+e+"]\uC774(\uAC00) \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD56D\uBAA9\uC744 \uCD94\uAC00\uD574\uBCF4\uC138\uC694.","success"),r.tab="mine",await A(),o.dashboardId&&await T(o.dashboardId),r.catalogOpen=!0,j()}catch(a){l(coUtil.cofErrMsg(a,"\uC0DD\uC131 \uC624\uB958"),"error",0)}},we=()=>{r.settingOpen=!0,W()},Ie=async()=>{const e=h.value;if(!(!e||!y.value)&&await B("\uC0AD\uC81C",`[${e.dashboardNm}] \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uD3EC\uD568\uB41C \uD56D\uBAA9\uB3C4 \uD568\uAED8 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4.`))try{await boApiSvc.cmDashboard.remove(e.dashboardId,"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uC0AD\uC81C"),l("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),u.value="",await A(),W(),j()}catch(t){l(coUtil.cofErrMsg(t,"\uC0AD\uC81C \uC624\uB958"),"error",0)}},W=()=>{const e=h.value;if(!e)return;d.dashboardNm=e.dashboardNm||"",d.shareScopeCd=L(e.shareScopeCd);const t=[];H(e.shareDeptId).forEach(a=>t.push({type:"DEPT",id:a,nm:oe(a)})),H(e.shareUserIds).forEach(a=>t.push({type:"USER",id:a,nm:ie(a)})),H(e.shareVendorIds).forEach(a=>t.push({type:"VENDOR",id:a,nm:Ve(a)})),d.targets=t},at=(e,t,a)=>{t&&(d.targets.some(o=>o.type===e&&o.id===t)||d.targets.push({type:e,id:t,nm:a||(e==="DEPT"?oe(t):ie(t))}))},Se=e=>{I.user=!1,Y("USER",e)},ke=e=>{I.dept=!1,Y("DEPT",e)},Ce=e=>{I.vendor=!1,Y("VENDOR",e)},Y=(e,t)=>{const a=d.targets.filter(n=>n.type!==e),o=De(t).map(n=>({type:e,id:(e==="DEPT"?n.deptId:e==="VENDOR"?n.vendorId:n.userId)||n.id,nm:e==="DEPT"?n.deptNm||n.nm:e==="VENDOR"?n.vendorNm||n.nm:n.userNm||n.nm})).filter(n=>n.id);e==="VENDOR"&&o.forEach(n=>{n.nm&&(se[n.id]=n.nm)}),d.targets=a.concat(o)},De=e=>e==null?[]:Array.isArray(e)?e:[e],Ee=e=>{const t=d.targets.findIndex(a=>a.type===e.type&&a.id===e.id);t>=0&&d.targets.splice(t,1)},te=f(()=>d.targets.filter(e=>e.type==="USER")),ae=f(()=>d.targets.filter(e=>e.type==="DEPT")),ne=f(()=>d.targets.filter(e=>e.type==="VENDOR")),F=5,J=e=>({rows:e,shown:e.slice(0,F),moreCnt:Math.max(0,e.length-F),moreNms:e.slice(F).map(t=>t.nm).join(", ")}),Ae=f(()=>[{type:"USER",label:"\uACF5\uC720\uB300\uC0C1(\uC0AC\uC6A9\uC790)",btn:"\uC0AC\uC6A9\uC790 \uCD94\uAC00",icon:"\u{1F464}",cmd:"setting-pickUser",bg:"#eef2ff",fg:"#4338ca",bd:"#c7d2fe",...J(te.value),empty:"\uACF5\uC720\uD560 \uC0AC\uC6A9\uC790\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."},{type:"DEPT",label:"\uACF5\uC720\uB300\uC0C1(\uBD80\uC11C)",btn:"\uBD80\uC11C \uCD94\uAC00",icon:"\u{1F3E2}",cmd:"setting-pickDept",bg:"#ecfdf5",fg:"#047857",bd:"#a7f3d0",...J(ae.value),empty:"\uACF5\uC720\uD560 \uBD80\uC11C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."},{type:"VENDOR",label:"\uACF5\uC720\uB300\uC0C1(\uC5C5\uCCB4)",btn:"\uC5C5\uCCB4 \uCD94\uAC00",icon:"\u{1F3ED}",cmd:"setting-pickVendor",bg:"#fff7ed",fg:"#c2410c",bd:"#fed7aa",...J(ne.value),empty:"\uACF5\uC720\uD560 \uC5C5\uCCB4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."}]),Oe=async()=>{const e=h.value;if(!(!e||!y.value)){if(!d.dashboardNm)return l("\uB300\uC2DC\uBCF4\uB4DC\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694.","error");if(await B("\uC800\uC7A5","\uACF5\uC720 \uC124\uC815\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const t=d.targets.filter(n=>n.type==="DEPT").map(n=>n.id),a=d.targets.filter(n=>n.type==="USER").map(n=>n.id),o=d.targets.filter(n=>n.type==="VENDOR").map(n=>n.id);await boApiSvc.cmDashboard.update(e.dashboardId,{dashboardNm:d.dashboardNm,shareScopeCd:d.shareScopeCd,shareDeptId:V(t),shareUserIds:V(a),shareVendorIds:V(o)},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uACF5\uC720\uC124\uC815\uC800\uC7A5"),l("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await A(),j()}catch(t){l(coUtil.cofErrMsg(t,"\uC800\uC7A5 \uC624\uB958"),"error",0)}}},R=async()=>{var a;if(!u.value){c.splice(0,c.length);return}const t=(((a=(await boApiSvc.cmDashboard.getItemList({siteId:m.value,dashboardId:u.value},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uD56D\uBAA9\uC870\uD68C")).data)==null?void 0:a.data)||[]).filter(o=>o.dashboardId===u.value);t.sort((o,n)=>(o.sortOrd||0)-(n.sortOrd||0)),c.splice(0,c.length,...t.map(o=>({dashboardItemId:o.dashboardItemId,itemKey:o.itemKey,itemNm:o.itemNm,itemTypeCd:O.itemTypeOf(o),chartTypeCd:o.chartTypeCd||"bar",sortOrd:o.sortOrd||0,panelWidth:o.panelWidth||1,panelHeight:o.panelHeight||1,useYn:o.useYn||"Y",realtimeYn:o.realtimeYn||"N",series:o.series||[],optionJson:o.optionJson||null}))),r.dirty=!1,await ze()},ze=async()=>{C.loading=!0;try{await Promise.all(c.map(async e=>{var o;if(e.realtimeYn==="Y"){C.widgets[e.dashboardItemId]={kind:"realtime"};return}let t=e.dashboardItemId;try{const n=e.optionJson?JSON.parse(e.optionJson):null;n&&n._srcItemId&&(t=n._srcItemId)}catch{}const a=await boApiSvc.cmDashboard.getItemDataList({siteId:m.value,dashboardItemId:t},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uB370\uC774\uD130\uC870\uD68C");C.widgets[e.dashboardItemId]=O.buildWidget(e,((o=a.data)==null?void 0:o.data)||[])}))}catch(e){l(coUtil.cofErrMsg(e,"\uB370\uC774\uD130 \uC870\uD68C \uC624\uB958"),"error",0)}finally{C.loading=!1}},Ne=async()=>{var e,t;try{const o=(((e=(await boApiSvc.cmDashboard.getList({siteId:m.value},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uCE74\uD0C8\uB85C\uADF8\uC870\uD68C")).data)==null?void 0:e.data)||[]).filter(s=>!s.ownerUserId),n={};o.forEach(s=>{n[s.dashboardId]=s.dashboardNm});const p=(((t=(await boApiSvc.cmDashboard.getItemList({siteId:m.value},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uCE74\uD0C8\uB85C\uADF8\uD56D\uBAA9\uC870\uD68C")).data)==null?void 0:t.data)||[]).filter(s=>n[s.dashboardId]);p.sort((s,et)=>(s.sortOrd||0)-(et.sortOrd||0)),k.splice(0,k.length,...p.map(s=>({...s,dashboardNm:n[s.dashboardId]})))}catch(a){console.warn("[\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC] \uCE74\uD0C8\uB85C\uADF8 \uC870\uD68C \uC624\uB958",a)}},Te=async()=>{var e,t;try{const a=await boApiSvc.syDept.getList({siteId:m.value},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uBD80\uC11C\uC870\uD68C");z.splice(0,z.length,...((e=a.data)==null?void 0:e.data)||[])}catch(a){console.warn("[\uBD80\uC11C \uC870\uD68C \uC624\uB958]",a)}try{const o=((t=(await boApiSvc.syUser.getPage({siteId:m.value,pageNo:1,pageSize:1e3},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uC0AC\uC6A9\uC790\uC870\uD68C")).data)==null?void 0:t.data)||{};N.splice(0,N.length,...(o.pageList||[]).filter(n=>n.userId!==b.value))}catch(a){console.warn("[\uC0AC\uC6A9\uC790 \uC870\uD68C \uC624\uB958]",a)}},G=async e=>{if(e){if(!u.value)return l("\uBA3C\uC800 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uB9CC\uB4E4\uC5B4\uC8FC\uC138\uC694.","error");if(!y.value)return l("\uACF5\uC720\uBC1B\uC740 \uB300\uC2DC\uBCF4\uB4DC\uB294 \uC218\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error");try{let t={};try{t=e.optionJson?JSON.parse(e.optionJson):{}}catch{t={}}t._srcItemId=e.dashboardItemId;const a=c.reduce((o,n)=>Math.max(o,n.sortOrd||0),0);await boApiSvc.cmDashboard.itemSave("base",{rowStatus:"I",siteId:m.value,dashboardId:u.value,itemKey:null,itemNm:e.itemNm,itemTypeCd:"chart",widgetTypeCd:O.itemTypeOf(e),axisTypeCd:e.axisTypeCd||"CATEGORY",chartTypeCd:e.chartTypeCd,sortOrd:a+10,panelWidth:e.panelWidth||1,panelHeight:e.panelHeight||1,realtimeYn:e.realtimeYn||"N",useYn:"Y",optionJson:JSON.stringify(t)},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uD56D\uBAA9\uCD94\uAC00"),l("["+e.itemNm+"] \uD56D\uBAA9\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await R()}catch(t){l(coUtil.cofErrMsg(t,"\uD56D\uBAA9 \uCD94\uAC00 \uC624\uB958"),"error",0)}}},We=async e=>{if(e){if(!y.value)return l("\uACF5\uC720\uBC1B\uC740 \uB300\uC2DC\uBCF4\uB4DC\uB294 \uC218\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error");if(await B("\uC81C\uAC70","["+e.itemNm+"] \uD56D\uBAA9\uC744 \uC81C\uAC70\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{await boApiSvc.cmDashboard.itemSave("base",{dashboardItemId:e.dashboardItemId,rowStatus:"D"},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uD56D\uBAA9\uC81C\uAC70"),l("\uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await R()}catch(t){l(coUtil.cofErrMsg(t,"\uC81C\uAC70 \uC624\uB958"),"error",0)}}},Re=async()=>{if(!(!u.value||!c.length)){if(!y.value)return l("\uACF5\uC720\uBC1B\uC740 \uB300\uC2DC\uBCF4\uB4DC\uB294 \uC218\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error");r.saving=!0;try{const e=c.map((t,a)=>({dashboardItemId:t.dashboardItemId,rowStatus:"U",sortOrd:(a+1)*10,panelWidth:t.panelWidth,panelHeight:t.panelHeight,useYn:t.useYn}));await boApiSvc.cmDashboard.itemSaveList("base",e,"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uBC30\uCE58\uC800\uC7A5"),l("\uBC30\uCE58\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),r.dirty=!1}catch(e){l(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC624\uB958"),"error",0)}finally{r.saving=!1}}},Me=(e,t)=>{if(y.value){i.type="card",i.idx=e,t.dataTransfer.effectAllowed="move";try{t.dataTransfer.setData("text/plain","card:"+e)}catch{}}},Ue=(e,t)=>{i.type="catalog",i.idx=e,t.dataTransfer.effectAllowed="copy";try{t.dataTransfer.setData("text/plain","catalog:"+e)}catch{}},Pe=e=>{i.overIdx=i.type==="card"&&e!==i.idx?e:null},Be=e=>{if(i.type==="card"&&i.idx!==null&&e!==i.idx){const t=c.splice(i.idx,1)[0];c.splice(e,0,t),r.dirty=!0,D();return}if(i.type==="catalog"&&i.idx!==null){const t=k[i.idx];return D(),G(t)}D()},Le=()=>{i.canvasOver=i.type==="catalog"},He=()=>{if(i.type==="catalog"&&i.idx!==null){const e=k[i.idx];return D(),G(e)}D()},D=()=>{i.type=null,i.idx=null,i.overIdx=null,i.canvasOver=!1},j=()=>{try{window.dispatchEvent(new CustomEvent("user-dashboard-changed"))}catch{}},oe=e=>(z.find(t=>t.deptId===e)||{}).deptNm||e,ie=e=>(N.find(t=>t.userId===e)||{}).userNm||e,se=g({}),Ve=e=>se[e]||e,_e=f(()=>d.targets.filter(e=>e.type==="USER").map(e=>e.id).filter(Boolean)),Ye=f(()=>d.targets.filter(e=>e.type==="DEPT").map(e=>e.id).filter(Boolean)),Fe=f(()=>d.targets.filter(e=>e.type==="VENDOR").map(e=>e.id).filter(Boolean)),Je=f(()=>[b.value].filter(Boolean)),K=12,Ge=150,je=56,X=g({idx:null});let x=null;const $=e=>{const t=ce(e);return!!(t&&t.kind==="kpi")},re=e=>$(e)?je:Ge,Ke=e=>$(e)?_.value:!0,Xe=(e,t)=>{if(!_.value)return;const a=c[e];if(!a)return;t.preventDefault(),t.stopPropagation();const o=t.currentTarget.closest("[data-card]"),n=o?o.getBoundingClientRect():{width:0},v=(h.value?h.value.layoutCols:4)||4,p=Math.min(a.panelWidth||1,v),s=p>0?(n.width-(p-1)*K)/p:n.width;x={idx:e,x0:t.clientX,y0:t.clientY,w0:p,h0:a.panelHeight||1,cellW:s,cols:v,rowH:re(a)},X.idx=e,window.addEventListener("mousemove",de),window.addEventListener("mouseup",le),document.body.style.userSelect="none"},de=e=>{if(!x)return;const t=c[x.idx];if(!t)return;const a=x.cellW+K,o=x.rowH+K,n=a>0?Math.round((e.clientX-x.x0)/a):0,v=o>0?Math.round((e.clientY-x.y0)/o):0,p=Math.min(x.cols,Math.max(1,x.w0+n)),s=Math.min(3,Math.max(1,x.h0+v));t.panelWidth!==p&&(t.panelWidth=p,r.dirty=!0),t.panelHeight!==s&&(t.panelHeight=s,r.dirty=!0)},le=()=>{x=null,X.idx=null,window.removeEventListener("mousemove",de),window.removeEventListener("mouseup",le),document.body.style.userSelect=""},M=(e,t,a)=>{if(!y.value)return;const o=c[e];if(!o)return;const n=(h.value?h.value.layoutCols:4)||4,p=Math.min(t==="panelWidth"?n:3,Math.max(1,(o[t]||1)+a));p!==o[t]&&(o[t]=p,r.dirty=!0)},$e=(e,t)=>{const a=(h.value?h.value.layoutCols:4)||4,o=Math.min(e.panelWidth||1,a),n=e.panelHeight||1,v=re(e);return{gridColumn:"span "+o,gridRow:"span "+n,minHeight:n*v+(n-1)*12+"px",outline:i.overIdx===t?"2px dashed #e8587a":i.type==="card"&&i.idx===t?"2px solid #c7d2fe":"none"}},qe=e=>(e.panelHeight||1)*150+((e.panelHeight||1)-1)*12-44+"px",ce=e=>C.widgets[e.dashboardItemId]||null,Qe=()=>"repeat("+((h.value?h.value.layoutCols:4)||4)+", 1fr)",pe=P(null),fe=P(640),Ze=360,U=()=>{const e=pe.value;if(!e)return;const t=e.closest(".bo-main"),a=t?t.getBoundingClientRect().bottom:window.innerHeight,o=e.getBoundingClientRect().top;fe.value=Math.max(Ze,Math.round(a-o-16))},ue=()=>{Vue.nextTick(U),setTimeout(U,300)};return q(()=>[r.settingOpen,r.tab,u.value,c.length,S.dtlId],ue),{myDashes:w,sharedDashes:E,cards:c,catalog:k,deptList:z,userList:N,uiState:r,codes:ve,curId:u,dragState:i,simState:C,shareForm:d,util:O,SHARE_SCOPES:he,fnScopeLabel:be,fnScopeIcon:xe,pickModal:I,onPickUser:Se,onPickDept:ke,onPickVendor:Ce,cfExcludeUserIds:Je,cfPickedUserIds:_e,cfPickedDeptIds:Ye,cfPickedVendorIds:Fe,cfUserTargets:te,cfDeptTargets:ae,cfVendorTargets:ne,cfShareGroups:Ae,cfCur:h,cfIsMine:y,cfCurTabList:Z,cfAuthId:b,cfViewMode:Q,cfCanEdit:_,canvasRef:pe,canvasH:fe,handleBtnAction:me,onCardDragStart:Me,onCatalogDragStart:Ue,onCardDragOver:Pe,onCardDrop:Be,onCanvasDragOver:Le,onCanvasDrop:He,fnDragReset:D,fnCardStyle:$e,fnChartHeight:qe,fnWidget:ce,fnGridCols:Qe,fnIsKpi:$,fnShowHead:Ke,resizeState:X,onResizeStart:Xe}},template:`
<bo-page :title="cfViewMode ? ((cfCur ? cfCur.dashboardNm : '\uB300\uC2DC\uBCF4\uB4DC')) : '\uC0AC\uC6A9\uC790 \uB300\uC2DC\uBCF4\uB4DC'"
  :desc-summary="cfViewMode ? '' : '\uB098\uB9CC\uC758 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC5EC\uB7EC \uAC1C \uB9CC\uB4E4\uACE0, \uACF5\uAC1C\uC5EC\uBD80(\uBE44\uACF5\uAC1C\xB7\uC804\uCCB4\uACF5\uAC1C)\uC640 \uACF5\uC720\uB300\uC0C1(\uC0AC\uC6A9\uC790\xB7\uBD80\uC11C\xB7\uC5C5\uCCB4)\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.'">
  <!-- ===== \u25A0. \uB300\uC2DC\uBCF4\uB4DC \uD0ED/\uD234\uBC14 (\uBCF4\uAE30 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uC228\uAE40) ====================== -->
  <bo-container v-if="!cfViewMode">
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:10px 12px;border-bottom:1px solid #f0f0f0;">
      <div style="display:flex;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
        <button @click="handleBtnAction('tab-set','mine')"
          :style="{ padding:'4px 12px', fontSize:'11.5px', fontWeight:700, border:'none', cursor:'pointer',
            background: uiState.tab==='mine' ? '#e8587a' : '#fafbfc', color: uiState.tab==='mine' ? '#fff' : '#666' }">
          \u{1F464} \uB0B4 \uB300\uC2DC\uBCF4\uB4DC ({{ myDashes.length }})</button>
        <button @click="handleBtnAction('tab-set','shared')"
          :style="{ padding:'4px 12px', fontSize:'11.5px', fontWeight:700, border:'none', cursor:'pointer',
            background: uiState.tab==='shared' ? '#e8587a' : '#fafbfc', color: uiState.tab==='shared' ? '#fff' : '#666' }">
          \u{1F517} \uACF5\uC720\uBC1B\uC740 \uB300\uC2DC\uBCF4\uB4DC ({{ sharedDashes.length }})</button>
      </div>
      <span style="flex:1;"></span>
      <button v-if="uiState.tab==='mine'" class="btn btn_new" @click="handleBtnAction('dash-create')">+ \uC0C8 \uB300\uC2DC\uBCF4\uB4DC</button>
    </div>
    <!-- \uB300\uC2DC\uBCF4\uB4DC \uC120\uD0DD \uCE69 -->
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:10px 12px;">
      <template v-if="cfCurTabList.length">
        <button v-for="d in cfCurTabList" :key="d.dashboardId"
          @click="handleBtnAction('dash-select', d.dashboardId)"
          :style="{ padding:'5px 12px', fontSize:'11.5px', fontWeight:700, borderRadius:'14px', cursor:'pointer',
            border: curId===d.dashboardId ? '1px solid #6366f1' : '1px solid #e5e7eb',
            background: curId===d.dashboardId ? '#eef2ff' : '#fafbfc',
            color: curId===d.dashboardId ? '#4338ca' : '#666' }">
          {{ fnScopeIcon(d.shareScopeCd) }} {{ d.dashboardNm }}
        </button>
      </template>
      <span v-else style="font-size:11.5px;color:#aaa;padding:4px;">
        {{ uiState.tab==='mine' ? '\uB9CC\uB4E0 \uB300\uC2DC\uBCF4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. [+ \uC0C8 \uB300\uC2DC\uBCF4\uB4DC]\uB85C \uC2DC\uC791\uD558\uC138\uC694.' : '\uB098\uC5D0\uAC8C \uACF5\uC720\uB41C \uB300\uC2DC\uBCF4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' }}
      </span>
    </div>
  </bo-container>

  <!-- ===== \u25A0. \uC120\uD0DD\uB41C \uB300\uC2DC\uBCF4\uB4DC ============================================= -->
  <template v-if="cfCur">
    <bo-container v-if="!cfViewMode">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px 12px;">
        <span style="font-size:13px;font-weight:800;color:#444;">{{ fnScopeIcon(cfCur.shareScopeCd) }} {{ cfCur.dashboardNm }}</span>
        <span style="font-size:10.5px;color:#4338ca;background:#eef2ff;padding:2px 8px;border-radius:10px;">
          {{ fnScopeLabel(cfCur.shareScopeCd) }}</span>
        <span v-if="!cfIsMine" style="font-size:10.5px;color:#b45309;background:#fffbeb;padding:2px 8px;border-radius:10px;">\uC77D\uAE30 \uC804\uC6A9(\uACF5\uC720\uBC1B\uC74C)</span>
        <span style="font-size:11px;color:#999;">\uD56D\uBAA9 {{ cards.length }}\uAC1C{{ simState.loading ? ' \xB7 \uB370\uC774\uD130 \uC870\uD68C\uC911\u2026' : '' }}</span>
        <span style="flex:1;"></span>
        <template v-if="cfCanEdit">
          <!-- \uC774\uB984\xB7\uACF5\uC720\uC124\uC815 \uD1A0\uAE00 (\uAE30\uBCF8 \uC5F4\uB9BC) -->
          <button class="btn" @click="handleBtnAction('setting-toggle')"
            :style="{ background: uiState.settingOpen ? '#4338ca' : '#fff',
                      color: uiState.settingOpen ? '#fff' : '#4338ca',
                      border: '1px solid #4338ca', fontWeight: 700 }">
            {{ uiState.settingOpen ? '\u25B2' : '\u25BC' }} \u2699 \uC774\uB984\xB7\uACF5\uC720\uC124\uC815</button>
          <button class="btn btn_reset" @click="handleBtnAction('layout-reload')">\u21BA \uB418\uB3CC\uB9AC\uAE30</button>
          <button class="btn btn_save" :disabled="uiState.saving" @click="handleBtnAction('layout-save')">
            {{ uiState.dirty ? '\u{1F4BE} \uBC30\uCE58 \uC800\uC7A5 *' : '\u{1F4BE} \uBC30\uCE58 \uC800\uC7A5' }}</button>
          <button class="btn btn_delete" @click="handleBtnAction('dash-delete')">\u{1F5D1} \uC0AD\uC81C</button>
        </template>
      </div>

      <!-- \uC774\uB984\xB7\uACF5\uC720\uC124\uC815 (\uD3BC\uCE68 \uC0C1\uD0DC \uAC15\uC870: \uC88C\uCE21 \uCEEC\uB7EC\uBC14 + \uBC30\uACBD) -->
      <div v-if="cfCanEdit && uiState.settingOpen"
        style="border-top:1px solid #f0f0f0;border-left:3px solid #4338ca;padding:14px;background:#f8f9ff;">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
          <span style="font-size:11.5px;font-weight:700;color:#555;width:76px;">\uB300\uC2DC\uBCF4\uB4DC\uBA85</span>
          <input v-model="shareForm.dashboardNm" class="form-control" style="width:260px;font-size:12px;height:28px;" />
        </div>
        <!-- \uACF5\uAC1C\uC5EC\uBD80 (private / public) -->
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
          <span style="font-size:11.5px;font-weight:700;color:#555;width:76px;">\uACF5\uAC1C\uC5EC\uBD80</span>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button v-for="s in SHARE_SCOPES" :key="s.value" @click="shareForm.shareScopeCd = s.value"
              :title="s.desc"
              :style="{ padding:'5px 14px', fontSize:'11.5px', fontWeight:700, borderRadius:'6px', cursor:'pointer',
                border: shareForm.shareScopeCd===s.value ? '1px solid #6366f1' : '1px solid #e5e7eb',
                background: shareForm.shareScopeCd===s.value ? '#eef2ff' : '#fff',
                color: shareForm.shareScopeCd===s.value ? '#4338ca' : '#666' }">
              {{ s.icon }} {{ s.label }}</button>
          </div>
          <span style="font-size:10.5px;color:#888;">
            {{ shareForm.shareScopeCd === 'PUBLIC'
              ? '\uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uAC00 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.'
              : (shareForm.targets.length ? '\uB098\uC640 \uC544\uB798 \uACF5\uC720\uB300\uC0C1\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.' : '\uC9C0\uAE08\uC740 \uB098\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.') }}
          </span>
        </div>
        <!-- \uACF5\uC720\uB300\uC0C1 \u2014 \uC0AC\uC6A9\uC790\uB780 / \uBD80\uC11C\uB780 \uBD84\uB9AC. \uBC84\uD2BC \uC6B0\uCE21\uC5D0 \uC120\uD0DD\uCE69\uC744 \uD55C \uC904\uB85C \uB450\uACE0 \uB118\uCE58\uBA74 +N (PRIVATE \uC77C \uB54C\uB9CC) -->
        <template v-if="shareForm.shareScopeCd === 'PRIVATE'">
          <div v-for="g in cfShareGroups" :key="g.type"
            style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <span style="font-size:11.5px;font-weight:700;color:#555;width:96px;flex-shrink:0;">{{ g.label }}</span>
            <button class="btn" style="height:28px;font-size:11.5px;font-weight:700;flex-shrink:0;"
              :style="{ background: g.bg, color: g.fg, border: '1px solid ' + g.bd }"
              @click="handleBtnAction(g.cmd)">{{ g.icon }} {{ g.btn }}</button>
            <span style="font-size:10.5px;color:#4338ca;background:#eef2ff;padding:2px 8px;border-radius:10px;flex-shrink:0;">{{ g.rows.length }}\uAC74</span>
            <!-- \uC120\uD0DD\uCE69: \uD55C \uC904 \uACE0\uC815. \uCD08\uACFC\uBD84\uC740 +N \uC73C\uB85C \uC811\uACE0 \uD074\uB9AD\uD558\uBA74 \uD31D\uC5C5\uC5D0\uC11C \uC804\uCCB4 \uD655\uC778\xB7\uC815\uB9AC -->
            <div style="flex:1;min-width:0;min-height:32px;border:1px solid #e5e7eb;border-radius:6px;padding:4px 7px;background:#fff;
                        display:flex;align-items:center;gap:6px;flex-wrap:nowrap;overflow:hidden;">
              <span v-for="t in g.shown" :key="t.type + t.id"
                :title="t.nm"
                :style="{ display:'inline-flex', alignItems:'center', gap:'5px', padding:'3px 8px 3px 10px', flexShrink:0,
                  maxWidth:'160px', fontSize:'11px', borderRadius:'12px', fontWeight:700,
                  background: g.bg, color: g.fg, border: '1px solid ' + g.bd }">
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ g.icon }} {{ t.nm }}</span>
                <button title="\uC81C\uAC70" style="border:none;background:none;cursor:pointer;font-size:12px;color:#dc2626;padding:0 2px;flex-shrink:0;"
                  @click="handleBtnAction('setting-removeTarget', t)">\u2715</button>
              </span>
              <button v-if="g.moreCnt" :title="g.moreNms"
                @click="handleBtnAction(g.cmd)"
                style="flex-shrink:0;padding:3px 10px;font-size:11px;font-weight:700;border-radius:12px;cursor:pointer;
                       background:#f3f4f6;color:#555;border:1px solid #d1d5db;">\uFF0B{{ g.moreCnt }}</button>
              <span v-if="!g.rows.length" style="font-size:11px;color:#aaa;padding:2px;">{{ g.empty }}</span>
            </div>
          </div>
          <div style="font-size:10.5px;color:#aaa;margin:-2px 0 10px 104px;">\uC774\uBBF8 \uB2F4\uC740 \uB300\uC0C1\uC740 \uD31D\uC5C5\uC5D0 \uCCB4\uD06C\uB41C \uC0C1\uD0DC\uB85C \uC5F4\uB9BD\uB2C8\uB2E4. \uFF0BN \uC744 \uB204\uB974\uBA74 \uC804\uCCB4\uB97C \uD655\uC778\xB7\uC815\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</div>
        </template>
        <div class="form-actions">
          <button class="btn btn_save" @click="handleBtnAction('setting-save')">\uC800\uC7A5</button>
          <button class="btn btn_reset" @click="handleBtnAction('setting-reset')">\uB418\uB3CC\uB9AC\uAE30</button>
        </div>
      </div>

    </bo-container>

    <!-- \uCE94\uBC84\uC2A4 -->
    <bo-container title="\uB300\uC2DC\uBCF4\uB4DC \uCE94\uBC84\uC2A4">
      <!-- \uC88C: \uD56D\uBAA9 \uCE74\uD0C8\uB85C\uADF8(\uC5F4\uAE30/\uB2EB\uAE30 \xB7 \uC790\uCCB4 \uC2A4\uD06C\uB864) / \uC6B0: \uCE94\uBC84\uC2A4 -->
      <div style="display:flex;align-items:flex-start;gap:0;">
        <!-- \uCE74\uD0C8\uB85C\uADF8 \uD56D\uBAA9 -->
        <div v-if="cfCanEdit" :style="{ width: uiState.catalogOpen ? '260px' : '34px', height: canvasH + 'px' }"
          style="flex-shrink:0;border-right:1px solid #eee;background:#f4fafe;display:flex;flex-direction:column;transition:width .12s;">
          <!-- \uD5E4\uB354(\uC5F4\uAE30/\uB2EB\uAE30) -->
          <div style="flex-shrink:0;display:flex;align-items:center;gap:6px;padding:8px;border-bottom:1px solid #e3eef6;">
            <button :title="uiState.catalogOpen ? '\uCE74\uD0C8\uB85C\uADF8 \uB2EB\uAE30' : '\uCE74\uD0C8\uB85C\uADF8 \uC5F4\uAE30'"
              @click="handleBtnAction('catalog-toggle')"
              style="flex-shrink:0;width:22px;height:22px;border:1px solid #0369a1;background:#fff;color:#0369a1;
                     border-radius:5px;cursor:pointer;font-size:11px;font-weight:800;line-height:1;">
              {{ uiState.catalogOpen ? '\u25C0' : '\u25B6' }}</button>
            <span v-if="uiState.catalogOpen" style="font-size:11.5px;font-weight:800;color:#0369a1;white-space:nowrap;">
              \u{1F9E9} \uD56D\uBAA9 \uCE74\uD0C8\uB85C\uADF8 ({{ catalog.length }})</span>
          </div>
          <!-- \uC811\uD798: \uC138\uB85C \uB77C\uBCA8\uB9CC -->
          <div v-if="!uiState.catalogOpen" @click="handleBtnAction('catalog-toggle')"
            style="flex:1;display:flex;align-items:center;justify-content:center;cursor:pointer;">
            <span style="writing-mode:vertical-rl;font-size:11px;font-weight:800;color:#0369a1;letter-spacing:1px;">
              \u{1F9E9} \uD56D\uBAA9 \uCE74\uD0C8\uB85C\uADF8 {{ catalog.length }}</span>
          </div>
          <!-- \uD3BC\uCE68: \uBAA9\uB85D(\uB0A8\uC740 \uB192\uC774\uB9CC \uC4F0\uACE0 \uB118\uCE58\uBA74 \uC2A4\uD06C\uB864) -->
          <template v-else>
            <div style="flex-shrink:0;padding:6px 8px;font-size:10.5px;color:#888;">\uCE94\uBC84\uC2A4\uB85C \uB4DC\uB798\uADF8\uD558\uAC70\uB098 [\uFF0B]\uB85C \uCD94\uAC00</div>
            <div style="flex:1;min-height:0;overflow-y:auto;padding:0 8px 8px;">
              <div v-for="(w, idx) in catalog" :key="w.dashboardItemId"
                draggable="true" @dragstart="onCatalogDragStart(idx, )" @dragend="fnDragReset"
                style="display:flex;align-items:center;gap:5px;background:#fff;border:1px solid #e5e7eb;border-radius:7px;
                       padding:5px 7px;cursor:grab;margin-bottom:5px;">
                <span style="font-size:13px;flex-shrink:0;">{{ util.itemTypeIcon(util.itemTypeOf(w)) }}</span>
                <span style="flex:1;min-width:0;">
                  <span style="display:block;font-size:11px;font-weight:700;color:#444;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                    :title="w.itemNm">{{ w.itemNm }}</span>
                  <span style="display:block;font-size:9.5px;color:#aaa;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ w.dashboardNm }}</span>
                </span>
                <button title="\uC774 \uB300\uC2DC\uBCF4\uB4DC\uC5D0 \uCD94\uAC00" @click="handleBtnAction('catalog-add', idx)"
                  style="flex-shrink:0;border:none;background:#eef2ff;color:#4338ca;border-radius:5px;font-size:11px;font-weight:800;cursor:pointer;padding:2px 6px;">\uFF0B</button>
              </div>
              <div v-if="!catalog.length" style="font-size:11px;color:#aaa;padding:6px;">\uCE74\uD0C8\uB85C\uADF8\uC5D0 \uD45C\uC2DC\uD560 \uACF5\uC6A9 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
            </div>
          </template>
        </div>
        <!-- \uCE94\uBC84\uC2A4 (\uB0A8\uC740 \uD3ED \xB7 \uCE74\uD0C8\uB85C\uADF8\uC640 \uAC19\uC740 \uB192\uC774\uC5D0\uC11C \uC2A4\uD06C\uB864) -->
        <div ref="canvasRef" :style="{ height: canvasH + 'px' }" style="flex:1;min-width:0;overflow-y:auto;">
      <div v-if="!cards.length"
        :style="{ outline: dragState.canvasOver ? '2px dashed #e8587a' : 'none' }"
        style="padding:48px;text-align:center;color:#aaa;border-radius:8px;margin:12px;"
        @dragover.prevent="onCanvasDragOver" @drop.prevent="onCanvasDrop">
        \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.{{ cfCanEdit ? ' \uD56D\uBAA9 \uCE74\uD0C8\uB85C\uADF8\uC5D0\uC11C \uCD94\uAC00\uD558\uAC70\uB098 \uC774 \uC601\uC5ED\uC73C\uB85C \uB4DC\uB798\uADF8\uD558\uC138\uC694.' : '' }}
      </div>
      <div v-else
        :style="{ display:'grid', gridTemplateColumns: fnGridCols(), gap:'12px', padding:'12px',
          outline: dragState.canvasOver ? '2px dashed #e8587a' : 'none' }"
        @dragover.prevent="onCanvasDragOver" @drop.prevent="onCanvasDrop">
        <div v-for="(c, idx) in cards" :key="c.dashboardItemId" data-card
          :style="fnCardStyle(c, idx)"
          style="position:relative;background:#fff;border:1px solid #eee;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,.05);display:flex;flex-direction:column;overflow:hidden;"
          @dragover.prevent.stop="onCardDragOver(idx)" @drop.prevent.stop="onCardDrop(idx)">
          <div v-if="fnShowHead(c)" :draggable="cfCanEdit" @dragstart="onCardDragStart(idx, $event)" @dragend="fnDragReset"
            :style="{ cursor: cfCanEdit ? 'grab' : 'default' }"
            style="flex-shrink:0;display:flex;align-items:center;gap:6px;padding:8px 10px;background:#fafbfc;border-bottom:1px solid #f0f0f0;">
            <span v-if="cfCanEdit" style="color:#bbb;font-size:12px;">\u283F</span>
            <!-- KPI \uCE74\uB4DC\uB294 \uBCF8\uBB38\uC774 \uC544\uC774\uCF58+\uB77C\uBCA8\uC744 \uC774\uBBF8 \uBCF4\uC5EC\uC918 \uD5E4\uB354 \uC81C\uBAA9\uC774 \uC911\uBCF5 \u2192 \uC0DD\uB7B5 -->
            <template v-if="!fnIsKpi(c)">
              <span style="font-size:12px;">{{ util.itemTypeIcon(util.itemTypeOf(c)) }}</span>
              <span style="font-size:12px;font-weight:700;color:#444;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ c.itemNm }}</span>
            </template>
            <span style="flex:1;"></span>
            <span style="font-size:10px;color:#aaa;font-family:monospace;">{{ c.panelWidth }}\xD7{{ c.panelHeight }}</span>
            <template v-if="cfCanEdit">
              <button title="\uD3ED \uC904\uC774\uAE30"   style="border:none;background:none;cursor:pointer;font-size:11px;color:#888;padding:1px 3px;" @click="handleBtnAction('card-widthDec', idx)">\u25C0</button>
              <button title="\uD3ED \uB298\uB9AC\uAE30"   style="border:none;background:none;cursor:pointer;font-size:11px;color:#888;padding:1px 3px;" @click="handleBtnAction('card-widthInc', idx)">\u25B6</button>
              <button title="\uB192\uC774 \uC904\uC774\uAE30" style="border:none;background:none;cursor:pointer;font-size:11px;color:#888;padding:1px 3px;" @click="handleBtnAction('card-heightDec', idx)">\u25B2</button>
              <button title="\uB192\uC774 \uB298\uB9AC\uAE30" style="border:none;background:none;cursor:pointer;font-size:11px;color:#888;padding:1px 3px;" @click="handleBtnAction('card-heightInc', idx)">\u25BC</button>
              <button title="\uD56D\uBAA9 \uC81C\uAC70" style="border:none;background:none;cursor:pointer;font-size:12px;color:#dc2626;padding:1px 3px;"
                @click="handleBtnAction('card-remove', idx)">\u2715</button>
            </template>
          </div>
          <!-- \uC6B0\uD558\uB2E8 \uB9AC\uC0AC\uC774\uC988 \uD578\uB4E4 (\uB4DC\uB798\uADF8\uB85C \uD3ED/\uB192\uC774 \uC870\uC808) -->
          <div v-if="cfCanEdit" :title="'\uD06C\uAE30 \uC870\uC808 (' + c.panelWidth + '\xD7' + c.panelHeight + ')'"
            @mousedown="onResizeStart(idx, $event)"
            :style="{ background: resizeState.idx === idx ? '#e8587a' : 'transparent' }"
            style="position:absolute;right:0;bottom:0;width:18px;height:18px;cursor:nwse-resize;z-index:2;
                   border-bottom-right-radius:10px;display:flex;align-items:flex-end;justify-content:flex-end;padding:2px;">
            <span :style="{ color: resizeState.idx === idx ? '#fff' : '#c7c7c7' }"
              style="font-size:10px;line-height:1;user-select:none;">\u25E2</span>
          </div>
          <div style="flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden;">
            <template v-if="fnWidget(c)">
              <div v-if="fnWidget(c).kind === 'kpi'"
                :style="{ background: util.kpiColorOf(idx).bg }"
                style="display:flex;align-items:center;gap:8px;width:100%;height:100%;padding:10px 12px;box-sizing:border-box;">
                <div style="font-size:18px;width:32px;height:32px;border-radius:7px;background:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  {{ util.itemTypeIcon(util.itemTypeOf(c)) }}
                </div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:10px;color:#666;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ fnWidget(c).label }}</div>
                  <div :style="{ color: util.kpiColorOf(idx).color }" style="font-size:14px;font-weight:800;margin-top:2px;">
                    {{ fnWidget(c).value }}
                    <span v-if="fnWidget(c).delta !== null" :style="{ fontSize:'10px', marginLeft:'4px', fontWeight:700, color: fnWidget(c).delta >= 0 ? '#10b981' : '#ef4444' }">
                      {{ fnWidget(c).delta >= 0 ? '\u25B2' : '\u25BC' }} {{ Math.abs(fnWidget(c).delta).toLocaleString() }}
                    </span>
                  </div>
                </div>
              </div>
              <div v-else-if="fnWidget(c).kind === 'realtime'" style="text-align:center;color:#aaa;font-size:11px;">
                \u{1F534} \uC2E4\uC2DC\uAC04 \uD56D\uBAA9<br/>\uBBF8\uB9AC\uBCF4\uAE30 \uBBF8\uC9C0\uC6D0
              </div>
              <div v-else-if="fnWidget(c).kind === 'empty'" style="text-align:center;color:#ccc;font-size:11px;">\uB370\uC774\uD130 \uC5C6\uC74C</div>
              <div v-else-if="fnWidget(c).kind === 'table'"
                style="width:100%;height:100%;overflow:auto;align-self:stretch;">
                <table class="bo-table bo-table-narrow" style="font-size:11px;">
                  <thead><tr>
                    <th v-for="col in fnWidget(c).columns" :key="col.key"
                      :style="{ textAlign: col.align }" style="padding:4px 6px;">{{ col.label }}</th>
                  </tr></thead>
                  <tbody>
                    <tr v-for="(r, ri) in fnWidget(c).rows" :key="ri">
                      <td v-for="(cell, ci) in r" :key="ci"
                        :style="{ textAlign: fnWidget(c).columns[ci].align }"
                        style="padding:3px 6px;white-space:nowrap;">{{ cell }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <co-echart v-else-if="fnWidget(c).kind === 'chart'" :option="fnWidget(c).option" :height="fnChartHeight(c)" style="width:100%;" />
            </template>
            <div v-else style="color:#ccc;font-size:11px;">\u2026</div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </bo-container>
  </template>

  <!-- ===== \u25A0. \uBBF8\uC120\uD0DD/\uBBF8\uC0DD\uC131 \uC548\uB0B4 ========================================== -->
  <bo-container v-else>
    <div style="padding:56px;text-align:center;">
      <div style="font-size:40px;">{{ uiState.tab==='mine' ? '\u{1F464}' : '\u{1F517}' }}</div>
      <div style="font-size:15px;font-weight:800;color:#444;margin-top:10px;">
        {{ uiState.tab==='mine' ? '\uC544\uC9C1 \uB9CC\uB4E0 \uB300\uC2DC\uBCF4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4' : '\uB098\uC5D0\uAC8C \uACF5\uC720\uB41C \uB300\uC2DC\uBCF4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4' }}</div>
      <div style="font-size:12px;color:#888;margin-top:6px;">
        {{ uiState.tab==='mine' ? '\uB300\uC2DC\uBCF4\uB4DC\uB97C \uB9CC\uB4E4\uACE0 \uC6D0\uD558\uB294 \uD56D\uBAA9\uC744 \uACE8\uB77C \uB098\uB9CC\uC758 \uD654\uBA74\uC744 \uAD6C\uC131\uD574\uBCF4\uC138\uC694.' : '\uB2E4\uB978 \uC0AC\uC6A9\uC790\uAC00 \uACF5\uC720\uD558\uBA74 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.' }}</div>
      <button v-if="uiState.tab==='mine'" class="btn btn_new" style="margin-top:16px;" @click="handleBtnAction('dash-create')">+ \uC0C8 \uB300\uC2DC\uBCF4\uB4DC \uB9CC\uB4E4\uAE30</button>
    </div>
  </bo-container>

  <!-- ===== \u25A0. \uACF5\uC720\uB300\uC0C1 \uC120\uD0DD \uBAA8\uB2EC (\uAE30\uC874 \uACF5\uD1B5 \uBAA8\uB2EC \uC7AC\uC0AC\uC6A9) ==================== -->
  <bo-cm-popup-modal v-if="pickModal.user" popup-code="user" title="\uACF5\uC720\uD560 \uC0AC\uC6A9\uC790 \uC120\uD0DD"
    :multi="true" result-type="array" :exclude-ids="cfExcludeUserIds" :init-selected-ids="cfPickedUserIds"
    @select="onPickUser" @close="pickModal.user = false" />
  <bo-cm-popup-modal v-if="pickModal.vendor" popup-code="vendor" title="\uACF5\uC720\uD560 \uC5C5\uCCB4 \uC120\uD0DD"
    :multi="true" result-type="array" :init-selected-ids="cfPickedVendorIds"
    @select="onPickVendor" @close="pickModal.vendor = false" />
  <bo-cm-popup-modal v-if="pickModal.dept" popup-code="dept" title="\uACF5\uC720\uD560 \uBD80\uC11C \uC120\uD0DD"
    :multi="true" result-type="array" :init-selected-ids="cfPickedDeptIds"
    @select="onPickDept" @close="pickModal.dept = false" />
</bo-page>
`};
