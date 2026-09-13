(function(){var Mt,Tt;const{createApp:ia,ref:h,reactive:m,computed:j,watch:F,onMounted:sa,onBeforeUnmount:St}=Vue,{TOP_MENUS:$e,HOME_FALLBACK_DASH:la,LEFT_MENUS:Ce,LEFT_MENUS_TAIL:da,LEFT_MENUS_ALL:ra,PAGE_TO_TOP:he,PAGE_LABELS:kt,ALL_PAGES:pa,MULTI_TAB_PAGES:Dn,toTabId:Ke,toPageFromTabId:te,toIdFromTabId:de,AUTH_METHODS:ca}=window.boMenuData,It=ia({setup(){var Qt,qt,ea,ta,aa;const D=h("dashboard"),He=h(!1),ga="DashboardBoEc"+(window.BO_SITE_NO||"01"),Lt=h(""),Pt="modu-bo-recent-server-errors",Dt=20,re=m((()=>{try{return JSON.parse(sessionStorage.getItem(Pt)||"[]").map(t=>({...t,time:new Date(t.time)}))}catch{return[]}})());let va=re.reduce((e,t)=>Math.max(e,t._rid||0),0);const fa=()=>{try{sessionStorage.setItem(Pt,JSON.stringify(re))}catch{}},At=window.boAppFunc.fmtXHeaders;window.addEventListener("api-response-success",e=>{if(!ke.value)return;const t=e.detail||{};u(`${t.method} ${t.url} ${t.status}`,"info",1e4)}),window.addEventListener("api-response-error",e=>{var l,s,n,r,c;const t=e.detail||{},a=t.status;let o="";t.method&&(t.fullUrl||t.url)&&(o=`${t.method} ${t.fullUrl||t.url} ${a}`,t.uiLabel&&(o+=`  [${t.uiLabel}]`));let i=o?`${o}
${t.message||""}`:t.message||"";if(a===0||a>=400){try{(s=(l=window.boNotiStore)==null?void 0:l.fnAddError)==null||s.call(l,t)}catch{}re.unshift({_rid:++va,status:a,method:t.method||"",url:t.fullUrl||t.url||"",uiLabel:t.uiLabel||"",message:t.message||"",time:new Date}),re.length>Dt&&(re.length=Dt),fa()}if(a!==401&&!(a>=500||a===0)){let v=t.errorDetails||"";const d=At(t.reqHeaders),f=At(t.resHeaders);if(d||f){let y="";const x=new Date,q=x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0")+" "+String(x.getHours()).padStart(2,"0")+":"+String(x.getMinutes()).padStart(2,"0")+":"+String(x.getSeconds()).padStart(2,"0");d&&(y+="\u2501\u2501 \uC694\uCCAD \uD5E4\uB354 \u2501\u2501  "+q+`
`+d),f&&(y+=(y?`

`:"")+`\u2501\u2501 \uC751\uB2F5 \uD5E4\uB354 \u2501\u2501
`+f),v=v?y+`

`+v:y}u(i,"error",0,v);return}if(a===401){try{(c=(r=(n=window.useBoAuthStore)==null?void 0:n.call(window))==null?void 0:r.saReset)==null||c.call(r)}catch{}R==null||R(),Q.show||(u("\uC138\uC158\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.","error"),Pe("login","modal"))}else if(a>=500||a===0){Lt.value=i,D.value="error500";try{window.history.replaceState(null,"",window.location.pathname+"?page=error500")}catch{}}});const ae=h(null),je=h(null),Nt=h(null),g=m([]),G=j(()=>Ke(D.value,ae.value)),Ge=m({}),A=m(new Set),ua=e=>{A.has(e)?A.delete(e):A.add(e)},W=h(10),pe=m(new Set(["dashboard"])),ma=j(()=>new Set([...A,...pe]));F(()=>g.length,()=>{const e=new Set(g.map(t=>t.id));Array.from(A).forEach(t=>{e.has(t)||A.delete(t)}),Array.from(pe).forEach(t=>{e.has(t)||pe.delete(t)})});const Xe=window.BO_APP_COMP_PAGE,we=m({}),Ee=window.BO_LAZY_CLASS_FILES||{},Je=e=>e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),ha=e=>import(new URL(e,document.baseURI).href),ye={},Ct=(e,t)=>{if(t.has(e))return Promise.resolve();t.add(e);const a=Ee[e];return a?(ye[e]||(ye[e]=(async()=>{var s;if(window[e]||await ha(a),!window[e])throw new Error(`[lazy] ${a} \uB97C \uB85C\uB4DC\uD588\uC9C0\uB9CC window.${e} \uAC00 \uC815\uC758\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4 \u2014 \uC555\uCD95 \uC2DC property mangling \uC774 \uCF1C\uC838\uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694(\uBC18\uB4DC\uC2DC \uAEBC\uC57C \uD569\uB2C8\uB2E4).`);It.component(e,window[e]);const o=String(((s=window[e])==null?void 0:s.template)||""),l=[...new Set([...o.matchAll(/<([a-z][a-z0-9]*(?:-[a-z0-9]+)+)\b/g)].map(n=>n[1]))].map(Je).filter(n=>Ee[n]);await Promise.all(l.map(n=>Ct(n,t)))})().catch(o=>{throw delete ye[e],o})),ye[e]):Promise.resolve()},Et=async e=>{if(we[e])return;const t=Xe[e],a=e==="dashboard"?"DashboardBoEc"+(window.BO_SITE_NO||"01"):Je(t||"");if(!Ee[a]){we[e]=!0;return}await Ct(a,new Set),we[e]=!0},ba=e=>{const t=Xe[e],a=e==="dashboard"?null:Je(t||"");return!a||!Ee[a]||!!we[e]},Ye=(e,t)=>{if(!g.find(a=>a.id===e))try{const a=te(e),o=de(e),i=kt[a]||a,l=t||(o?i+" \xB7 "+String(o).slice(-4):i),s=!ne.value&&pe.size<W.value;g.push({id:e,label:l}),s&&pe.add(e)}catch(a){console.error("[addTab] \uD0ED \uC0DD\uC131 \uC911 \uC624\uB958 \u2014 \uAE30\uBCF8 \uB77C\uBCA8\uB85C \uB300\uCCB4:",a),g.find(o=>o.id===e)||g.push({id:e,label:t||e})}},wa=(e,t)=>{if(!t)return;const a=g.find(o=>o.id===e);a&&(a.label=t),G.value===e&&(document.title=t+" - ShopJoy BO")},Ot=(e,t)=>{t&&t.stopPropagation();const a=g.findIndex(o=>o.id===e);if(a!==-1&&(A.delete(e),pe.delete(e),g.splice(a,1),G.value===e)){const o=g[Math.min(a,g.length-1)];if(o){const i=te(o.id),l=de(o.id);E(i,l?{id:l}:{})}else D.value="dashboard",ae.value=null}},N=m({show:!1,x:0,y:0,tabId:null}),ya=(e,t)=>{e.preventDefault(),N.show=!0,N.x=e.clientX,N.y=e.clientY,N.tabId=t},X=()=>{N.show=!1},xa=()=>{Ot(N.tabId),X()},Sa=()=>{var t;const e=g.findIndex(a=>a.id===N.tabId);e>0&&(g.splice(0,e),!g.find(a=>a.id===G.value)&&g.length>0&&E((t=g[0])==null?void 0:t.id)),X()},ka=()=>{const e=g.findIndex(t=>t.id===N.tabId);e<g.length-1&&(g.splice(e+1),g.find(t=>t.id===G.value)||E(g[e].id)),X()},Ia=()=>{const e=g.find(t=>t.id===N.tabId);A.clear(),g.splice(0),e&&(g.push(e),E(e.id)),X()},Ma=()=>{const e=g.find(t=>t.id===N.tabId);g.forEach(t=>{t.id!==N.tabId&&A.delete(t.id)}),g.splice(0),e&&(g.push(e),E(e.id)),X()},Ta=()=>{const e=new URLSearchParams(location.search),t=N.tabId,a=de(t);e.set("page",a?te(t):t),a?e.set("id",a):e.delete("id"),e.set("embed","1"),window.open(`${location.pathname}?${e.toString()}`,"_blank"),X()},La=()=>{const e=N.tabId;X(),A.has(e)?(A.delete(e),Vue.nextTick(()=>A.add(e))):(Ge[e]=(Ge[e]||0)+1,D.value!==e&&E(e))},zt=(e,t,a)=>{if(t==null){const i=de(e);i&&(t=i,e=te(e))}const o=new URLSearchParams(location.search);o.set("page",e),t!=null?o.set("id",t):o.delete("id"),a?o.set("dtlMode",a):o.delete("dtlMode"),o.set("embed","1"),window.open(`${location.pathname}?${o.toString()}`,"_blank")},Pa=j(()=>[...g].map(e=>{var i;const t=te(e.id),a=he[t],o=((i=$e.find(l=>l.id===a))==null?void 0:i.label)||(e.id==="dashboard"?"\uD648":"");return{...e,topLabel:o}}).sort((e,t)=>e.label.localeCompare(t.label,"ko")));let Ze=!1;const I={leftMenuOpen:"ui.left_menu_open",tabBarOpen:"ui.tab_bar_open",rightPanelOpen:"ui.right_panel_open",fontZoom:"ui.font_zoom",tabAutoKeepLimit:"ui.tab_auto_keep_limit"},xe=(e,t)=>{var o,i,l;if(Ze)return;const a=String(t);localStorage.setItem("modu-bo-"+e.replace(/\./g,"-"),a),(l=(i=(o=window.sfGetBoUserPrefStore)==null?void 0:o.call(window))==null?void 0:i.saSetPref)==null||l.call(i,e,a)},Qe=async()=>{var t;const e=(t=window.sfGetBoUserPrefStore)==null?void 0:t.call(window);if(e){await e.saLoadPrefs(),Ze=!0;try{const a=e.prefs;a[I.leftMenuOpen]!==void 0&&(Oe.value=a[I.leftMenuOpen]==="true"),a[I.tabBarOpen]!==void 0&&(et.value=a[I.tabBarOpen]==="true"),a[I.rightPanelOpen]!==void 0&&(it.value=a[I.rightPanelOpen]==="true"),a[I.fontZoom]!==void 0&&(Y.value=Number(a[I.fontZoom])||100),a[I.tabAutoKeepLimit]!==void 0&&(W.value=Number(a[I.tabAutoKeepLimit])||10)}finally{Ze=!1}}},qe=(e,t)=>{const a=localStorage.getItem("modu-bo-"+e.replace(/\./g,"-"));return a!==null?a==="true":t},_t=(e,t)=>{const a=localStorage.getItem("modu-bo-"+e.replace(/\./g,"-")),o=a!==null?Number(a):NaN;return Number.isFinite(o)?o:t},oe=h("home"),Oe=h(qe(I.leftMenuOpen,!0));F(Oe,e=>xe(I.leftMenuOpen,e));const et=h(qe(I.tabBarOpen,!0));F(et,e=>xe(I.tabBarOpen,e));const ce=h(null);let ze=null;const An=e=>{const t=Ce[e]||[],a=[];let o=null;for(const i of t)i.group?(o={group:i.group,items:[]},a.push(o)):o?o.items.push(i):(o={group:null,items:[i]},a.push(o));return a},Da=e=>{clearTimeout(ze),e==="home"||Ce[e]&&Ce[e].length?ce.value=e:ce.value=null},Aa=()=>{ze=setTimeout(()=>{ce.value=null},180)},Na=()=>{clearTimeout(ze)},ne=h(!1),Ca=j(()=>ne.value),Ea=(e,t=!1)=>{var o,i;const a=e==="home"?"dashboard":(i=(o=ra[e])==null?void 0:o.find(l=>l.id))==null?void 0:i.id;if(t){a&&zt(a);return}oe.value=e,ce.value=null,clearTimeout(ze),a&&E(a),e==="home"&&We()},Bt=(e=!1)=>{const t=String(window.location.search||"").replace(/^\?/,""),a=new URLSearchParams(t),o=a.get("embed"),i=o==="1"||o==="true";ne.value!==i&&(ne.value=i);const l=a.get("page"),n=a.get("orderId")||a.get("id"),r=n!==null?isNaN(n)?n:Number(n):null,c=a.get("claimId")||null;let v=!1;if(l&&pa.includes(l)){if(!!!localStorage.getItem("modu-bo-auth-accessToken")&&l!=="dashboard")return e&&u("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.","error"),D.value!=="dashboard"&&(D.value="dashboard"),v;v=!0;const y=he[l];y&&oe.value!==y&&(oe.value=y),Et(l).then(()=>{D.value!==l&&(D.value=l),Ye(Ke(l,r),l==="dashboard"?"EC\uB300\uC2DC\uBCF4\uB4DC":void 0)}).catch(x=>{u(x.message||"\uD654\uBA74\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","error",0)})}ae.value!==r&&(ae.value=r),je.value!==c&&(je.value=c);const d=a.get("searchValue");if(d){Nt.value=d,a.delete("searchValue");const f=a.toString();String(window.location.search||"").replace(/^\?/,"")!==f&&history.replaceState(null,"",window.location.pathname+"?"+f)}return v},Oa=Bt(!1);!g.length&&!Oa&&Ye("dashboard","EC\uB300\uC2DC\uBCF4\uB4DC");const Ft=new URLSearchParams(String(window.location.search||"").replace(/^\?/,"")).get("dtlMode"),Se=h(Ft==="new"||Ft==="edit"||D.value&&D.value.endsWith("Dtl")&&!ae.value?"edit":"view"),E=async(e,t={})=>{var c,v,d;if(typeof e=="string"&&/^__.+__$/.test(e)){if(e==="__switchToEdit__"){Se.value="edit";return}if(e==="__closeDtl__"){if(ne.value)try{window.close()}catch{}return}if(Se.value==="edit"){Se.value="view";return}if(ne.value)try{window.close()}catch{}return}const a=de(e);if(a&&(t=Object.assign({},t,{id:a}),e=te(e)),Se.value="view",!!!localStorage.getItem("modu-bo-auth-accessToken")&&e!=="dashboard"){u("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.","error");return}He.value=!0;try{await Et(e)}catch(f){u(f.message||"\uD654\uBA74\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","error",0);return}finally{He.value=!1}D.value=e;const i=(v=(c=t.orderId)!=null?c:t.id)!=null?v:null;ae.value=i,je.value=(d=t.claimId)!=null?d:null,he[e]&&(oe.value=he[e]);const l=Ke(e,i);Ye(l,t.tabLabel),le.has(l)&&A.add(l);const s=new URLSearchParams;s.set("page",e),t.orderId!=null?s.set("orderId",t.orderId):t.id!=null&&s.set("id",t.id),t.claimId!=null&&s.set("claimId",t.claimId),ne.value&&s.set("embed","1");const n=s.toString();if(String(window.location.search||"").replace(/^\?/,"")!==n)try{history.pushState(null,"",window.location.pathname+"?"+n)}catch{}window.scrollTo(0,0),Vue.nextTick(lt)},Rt=()=>{Bt(!0),oe.value==="home"&&We()};window.addEventListener("popstate",Rt),St(()=>window.removeEventListener("popstate",Rt));const J=m([]),_e=Vue.ref(!1),ke=Vue.ref(localStorage.getItem("modu-bo-sy-apiToastOpen")==="true");Vue.watch(ke,e=>{try{localStorage.setItem("modu-bo-sy-apiToastOpen",e?"true":"false")}catch{}});const za=()=>{ke.value=!ke.value},_a=()=>{_e.value=!_e.value},Ba=Vue.computed(()=>{const e=window.envBoConsts||{},t=(a,o)=>a?a+(o?":"+o:""):"(\uC0C1\uB300\uACBD\uB85C)";return{mode:e.runMode||"local",api:t(e.baseApiHost,e.baseApiPort),cdn:t(e.cdnApiHost,e.cdnApiPort)}}),Ut=h(null),tt=h(!1),Fa=()=>{var e,t;try{window.coExtSdk.shareKakao({title:(document.title||"ShopJoy \uAD00\uB9AC\uC790")+" - ShopJoy BO",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:window.location.href})}catch(a){(t=(e=window.boApp)==null?void 0:e.showToast)==null||t.call(e,a.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},Ra=async()=>{var e,t,a,o;try{await navigator.clipboard.writeText(window.location.href),(t=(e=window.boApp)==null?void 0:e.showToast)==null||t.call(e,"\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(i){(o=(a=window.boApp)==null?void 0:a.showToast)==null||o.call(a,i.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},Ua=async()=>{var e;tt.value=!0;try{const t=coUtil.cofBuildExportFilename((document.title||"\uD654\uBA74")+".pdf");await window.boUtil.bofExportPdf(Ut.value,t,(e=window.boApp)==null?void 0:e.showToast)}finally{tt.value=!1}},Wa=80,$a=150,Y=h(_t(I.fontZoom,100));F(Y,e=>{document.documentElement.style.zoom=e/100,xe(I.fontZoom,e)},{immediate:!0});const Ka=()=>{Y.value=Math.max(Wa,Y.value-1)},Va=()=>{Y.value=Math.min($a,Y.value+1)},Ha=()=>{Y.value=100},ja=3,Ga=30;W.value=_t(I.tabAutoKeepLimit,10),F(W,e=>xe(I.tabAutoKeepLimit,e));const Xa=()=>{W.value=Math.max(ja,W.value-1)},Ja=()=>{W.value=Math.min(Ga,W.value+1)},Ya=()=>{W.value=10},Be=Vue.ref(!1),Wt=Vue.ref("\uCC98\uB9AC\uC911\uC785\uB2C8\uB2E4...");let Fe=0,ie=null,$t=0;const Za=300,Qa=50;window._showProgress=(e,t)=>{if(e&&t&&(Wt.value=t),Fe=Math.max(0,Fe+(e?1:-1)),Fe>0)ie&&(clearTimeout(ie),ie=null),Be.value||($t=Date.now()),Be.value=!0;else{const a=Date.now()-$t,o=Math.max(0,Za-a)+Qa;ie&&clearTimeout(ie),ie=setTimeout(()=>{Fe===0&&(Be.value=!1),ie=null},o)}};let qa=0;const eo=3500,to={400:"\uC798\uBABB\uB41C \uC694\uCCAD \u2014 \uD30C\uB77C\uBBF8\uD130\uB97C \uD655\uC778\uD558\uC138\uC694.",401:"\uC778\uC99D \uB9CC\uB8CC \u2014 \uB2E4\uC2DC \uB85C\uADF8\uC778\uD558\uC138\uC694.",403:"\uC811\uADFC \uAC70\uBD80 \u2014 \uAD8C\uD55C\uC774 \uC5C6\uAC70\uB098 \uB77C\uC774\uC120\uC2A4\uAC00 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",404:"\uB9AC\uC18C\uC2A4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",405:"\uD5C8\uC6A9\uB418\uC9C0 \uC54A\uB294 HTTP \uBA54\uC11C\uB4DC\uC785\uB2C8\uB2E4.",409:"\uB370\uC774\uD130 \uCDA9\uB3CC \u2014 \uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uD56D\uBAA9\uC785\uB2C8\uB2E4.",422:"\uC785\uB825\uAC12 \uAC80\uC99D \uC2E4\uD328 \u2014 \uD544\uB4DC\uB97C \uD655\uC778\uD558\uC138\uC694.",429:"\uC694\uCCAD\uC774 \uB108\uBB34 \uB9CE\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.",500:"\uC11C\uBC84 \uB0B4\uBD80 \uC624\uB958 \u2014 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694.",502:"\uAC8C\uC774\uD2B8\uC6E8\uC774 \uC624\uB958 \u2014 \uC11C\uBC84\uAC00 \uC751\uB2F5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",503:"\uC11C\uBE44\uC2A4 \uC77C\uC2DC \uC911\uB2E8 \u2014 \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."},u=(e,t="success",a=eo,o="",i=null)=>{t==="error"&&(a=0);const l=++qa;let s=e,n="",r="";if(t==="error"&&e.includes(`
`)){const c=e.split(`
`);n=c[0],s=c.slice(1).join(`
`);const v=n.match(/\b([45]\d{2})\b/);v&&(r=to[parseInt(v[1])]||"HTTP "+v[1]+" \uC624\uB958")}J.push({id:l,msgTitle:s,msgDetail:n,statusHint:r,msg:e,type:t,action:i,persistent:a===0,errorDetails:o,expanded:t==="error"&&ge.value}),a!==0&&setTimeout(()=>{const c=J.findIndex(v=>v.id===l);c!==-1&&J.splice(c,1)},a)},ao=e=>{e.action&&typeof e.action.onClick=="function"&&e.action.onClick()};window.boToast=u;const oo=e=>{const t=J.findIndex(a=>a.id===e);t!==-1&&J.splice(t,1)},no=()=>{J.splice(0,J.length)},ge=h(localStorage.getItem("modu-bo-sy-toast-isShowDetail")!=="false"),io=()=>{ge.value=!ge.value,localStorage.setItem("modu-bo-sy-toast-isShowDetail",ge.value),J.forEach(e=>{e.expanded=ge.value})},at=m({show:!1,res:null}),Re=e=>{at.res=e};window.addEventListener("api-response-success",e=>{const t=e.detail||{};Re({ok:!0,status:t.status,data:t.data,url:t.url,method:t.method})}),window.addEventListener("api-response-error",e=>{const t=e.detail||{};Re({ok:!1,status:t.status,message:t.message,data:t.data,url:t.url,method:t.method})});const so=()=>{at.show=!1},ve=m({show:!1,title:"",msg:"",details:null,btnOk:"\uD655\uC778",btnCancel:"\uCDE8\uC18C",resolve:null}),ot=(e,t,a={})=>new Promise(o=>Object.assign(ve,{show:!0,title:e,msg:t,details:a.details||null,btnOk:a.btnOk||"\uD655\uC778",btnCancel:a.btnCancel||"\uCDE8\uC18C",resolve:o}));window.boConfirm=ot;const lo=e=>{var t;ve.show=!1,(t=ve.resolve)==null||t.call(ve,e)},Ie=m({show:!1,type:"",id:null}),Kt=(e,t)=>{Ie.type=e,Ie.id=t,Ie.show=!0},ro=()=>{Ie.show=!1};window.boApp={navigate:E,showToast:u,showConfirm:ot,showRefModal:Kt,setApiRes:Re};const nt=m({show:!1,topic:""}),Vt=(e="")=>{nt.topic=e,nt.show=!0};window.showBoHelp=Vt;const it=h(qe(I.rightPanelOpen,!0));F(it,e=>xe(I.rightPanelOpen,e));const M=boCommonFilter;if(!M.siteId){const e=(Qt=window.sfGetBoAppStore)==null?void 0:Qt.call(window);M.siteId=(e==null?void 0:e.svBoSiteId)||"2604010000000001"}const fe=m({type:"",show:!1}),po=e=>{fe.type=e,fe.show=!0},co=()=>{fe.show=!1,fe.type=""},go=(e,t)=>{var a,o,i,l,s,n,r,c,v;if(e==="site"){M.siteId=(a=t==null?void 0:t.siteId)!=null?a:null;const d=(o=window.useBoAppStore)==null?void 0:o.call(window);d&&t&&((i=d.saSetBoSiteId)==null||i.call(d,t.siteId),(l=d.saSetBoSiteNm)==null||l.call(d,t.siteNm))}else e==="vendor"?M.vendorId=(s=t==null?void 0:t.vendorId)!=null?s:null:e==="dlivVendor"?M.dlivVendorId=(n=t==null?void 0:t.vendorId)!=null?n:null:e==="boUser"?M.userId=(r=t==null?void 0:t.boUserId)!=null?r:null:e==="member"?M.memberId=(c=t==null?void 0:t.memberId)!=null?c:null:e==="order"&&(M.orderId=(v=t==null?void 0:t.orderId)!=null?v:null);fe.show=!1},vo=e=>{e==="site"?M.siteId=null:e==="vendor"?M.vendorId=null:e==="dlivVendor"?M.dlivVendorId=null:e==="boUser"?M.userId=null:e==="member"?M.memberId=null:e==="order"&&(M.orderId=null)},fo=j(()=>{var o;if(!M.siteId)return null;const t=(window._boCmSites||[]).find(i=>i.siteId===M.siteId);if(t)return t;const a=(o=window.sfGetBoAppStore)==null?void 0:o.call(window);return a&&M.siteId===a.svBoSiteId?{siteId:a.svBoSiteId,siteNm:a.svBoSiteNm,siteCode:""}:{siteId:M.siteId,siteNm:"",siteCode:""}}),uo=null,mo=null,ho=null,bo=null,wo=null,Z=m([]),Me=h(null),Te=h(null),yo=15,xo=()=>{try{const e=localStorage.getItem("modu-bo-sy-apiLog");if(e){const t=JSON.parse(e);Array.isArray(t)&&(t.forEach(a=>{a._isRecent=window.boAppFunc.isWithin60Seconds(a.time)}),Z.push(...t))}}catch{}},So=()=>{try{localStorage.setItem("modu-bo-sy-apiLog",JSON.stringify(Z.slice(0,10)))}catch{}},Ht=(e,t,a,o,i=!1,l=null,s=null,n=null)=>{const r=new Date,c=String(r.getHours()).padStart(2,"0"),v=String(r.getMinutes()).padStart(2,"0"),d=String(r.getSeconds()).padStart(2,"0"),f=`${c}:${v}:${d}s`;let y="",x="",q="",Ne="";try{if(l&&(y=JSON.stringify(typeof l=="string"?JSON.parse(l):l,null,2)),s&&(x=JSON.stringify(typeof s=="string"?JSON.parse(s):s,null,2)),n){const S=C=>{try{return C?decodeURIComponent(C):""}catch{return C||""}},k=(C,ee)=>C[ee]||C[ee.toLowerCase()]||"",me=S(k(n,"X-UI-Nm")),yt=S(k(n,"X-Cmd-Nm"));(me||yt)&&(Ne=yt?me+" > "+yt:me);const xt=(C,ee=60)=>C&&C.length>ee?C.slice(0,8)+"..."+C.slice(-6):C||"",oa=(...C)=>C.map(ee=>{const na=S(k(n,ee));return na?ee.toLowerCase()+": "+na:""}).filter(Boolean).join(" | ");q=[oa("x-site-type","X-UI-Nm","X-Cmd-Nm"),oa("X-File-Nm","X-Func-Nm","X-Line-No"),[S(k(n,"X-Trace-Id"))?"x-trace-id: "+S(k(n,"X-Trace-Id")):"",S(k(n,"X-Site-Id"))?"x-site-id: "+S(k(n,"X-Site-Id")):"",S(k(n,"X-Buyer-Id"))?"x-buyer-id: "+S(k(n,"X-Buyer-Id")):"",S(k(n,"X-License-Code"))?"x-license-code: "+xt(S(k(n,"X-License-Code")),16):"",S(k(n,"X-User-Agent"))?"x-user-agent: "+xt(S(k(n,"X-User-Agent")),18):"",k(n,"Authorization")?"authorization: "+xt(k(n,"Authorization"),20):""].filter(Boolean).join(" | ")].filter(Boolean).join(`
`)}}catch{y=String(l||""),x=String(s||"")}Z.unshift({method:e,url:t,status:a,duration:o,time:f,hasError:i,uiLabel:Ne,reqData:y,resData:x,headers:q,_isRecent:!0}),Z.length>yo&&Z.pop(),So();const H=Z[0];setTimeout(()=>{H&&(H._isRecent=!1)},6e4)},ko=()=>{Z.length=0;try{localStorage.removeItem("modu-bo-sy-apiLog")}catch{}u("API \uB85C\uADF8\uAC00 \uCD08\uAE30\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")},Io=e=>{Te.value===e?Te.value=null:Te.value=e};let $=null;const Mo=e=>{$&&(clearTimeout($),$=null),Me.value=e},jt=e=>{$&&clearTimeout($),$=setTimeout(()=>{Te.value!==Me.value&&(Me.value=null),$=null},200)},To=()=>{$&&(clearTimeout($),$=null)},Lo=()=>{jt(Me.value)},Po=window.boAppFunc.fmtJson,Do=window.boAppFunc.isWithin60Seconds,Ao=window.boAppFunc.fmtSec,No=window.boAppFunc.shortUrl,Co=window.boAppFunc.hmsToMs,Eo=window.boAppFunc.relativeTime,Oo=window.boAppFunc.apiStatusColor,zo=window.boAppFunc.apiMethodColor,Gt=h(window.innerWidth<920),st=()=>{Gt.value=window.innerWidth<920};St(()=>window.removeEventListener("resize",st));const _o=j(()=>Oe.value&&!Gt.value),Ue=h(null),Bo=e=>{Ue.value&&Ue.value.scrollBy({left:e*180,behavior:"smooth"})},lt=()=>{const e=Ue.value;if(!e)return;const t=Array.from(e.children).find(l=>l.dataset&&l.dataset.tabId===G.value);if(!t)return;const a=12,o=e.getBoundingClientRect(),i=t.getBoundingClientRect();i.left<o.left+a?e.scrollBy({left:i.left-o.left-a,behavior:"smooth"}):i.right>o.right-a&&e.scrollBy({left:i.right-o.right+a,behavior:"smooth"})};F(()=>[G.value,g.length],()=>Vue.nextTick(lt)),F(()=>G.value,()=>{const e=g.find(t=>t.id===G.value);document.title=e?e.label+" - ShopJoy BO":"ShopJoy BO"},{immediate:!0});const Nn=()=>{try{return localStorage.getItem("modu-bo-auth-accessToken")?JSON.parse(localStorage.getItem("modu-bo-auth-authUser")||"null")||{userId:"",name:"",email:"",role:"",phone:"",dept:""}:{userId:"",name:"",email:"",role:"",phone:"",dept:""}}catch{return{userId:"",name:"",email:"",role:"",phone:"",dept:""}}},dt=()=>({authId:"",authNm:"",userId:"",name:"",email:"",role:"",phone:"",dept:"",AppTypeCd:"",roleId:"",siteId:"",profileAttachId:null}),p=m(dt()),w=(qt=window.useBoAuthStore)==null?void 0:qt.call(window),R=()=>{try{const e=w==null?void 0:w.svAuthUser,t=e&&e.authId?e:dt();for(const a in t)p[a]!==t[a]&&(p[a]=t[a])}catch{}};try{localStorage.getItem("modu-bo-auth-accessToken")?(ta=w==null?void 0:w.saSyncFromStorage)==null||ta.call(w):(ea=w==null?void 0:w.saReset)==null||ea.call(w)}catch{}R();const rt=h(!1);window.boInitReady=!1,(async()=>{var t,a,o,i,l;const e=w;if(e!=null&&e.svAccessToken)try{await((o=(a=(t=window.useBoAppInitStore)==null?void 0:t.call(window))==null?void 0:a.saFetchBoAppInitData)==null?void 0:o.call(a)),R(),await Qe()}catch(s){((i=s==null?void 0:s.response)==null?void 0:i.status)===401?(console.warn("[boApp] token invalid (401), reset session"),e.saReset(),R()):console.warn("[boApp] fetchBoAppInitData error:",((l=s==null?void 0:s.response)==null?void 0:l.status)||s.message)}rt.value=!0,window.boInitReady=!0})();const K=h(localStorage.getItem("modu-bo-active-role-id")||null),Xt=j(()=>!!(p!=null&&p.authId)),O=m([]),Fo=(e,t)=>{var a,o;if(!e||!t||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(((a=e[i])==null?void 0:a.roleId)!==((o=t[i])==null?void 0:o.roleId))return!1;return!0},pt=()=>{var e,t,a,o;try{if(!(p!=null&&p.authId)){O.length&&O.splice(0,O.length);return}const i=((t=(e=window.sfGetBoRoleStore)==null?void 0:e.call(window))==null?void 0:t.svRoles)||[],s=(((o=(a=window.useBoAuthStore)==null?void 0:a.call(window))==null?void 0:o.svTempAuthInfo)||{})["authUser-roles"]||[],n=Object.fromEntries(i.map(c=>[c==null?void 0:c.roleId,c])),r=s.map(c=>n[c==null?void 0:c.roleId]).filter(Boolean);Fo(O,r)||O.splice(0,O.length,...r)}catch(i){console.error("currentAuthUserRoles error:",i),O.length&&O.splice(0,O.length)}};pt(),F(()=>(p==null?void 0:p.authId)||"",pt),F(rt,e=>{e&&pt()});const Ro=(e,t)=>{var a,o;try{if(!e)return"";const i=((o=(a=window.sfGetBoRoleStore)==null?void 0:a.call(window))==null?void 0:o.svRoles)||[],l=Object.fromEntries((i||[]).map(c=>[c==null?void 0:c.roleId,c])),s=[];let n=e,r=e;for(;n;)s.unshift((n==null?void 0:n.roleNm)||""),r=n,n=n!=null&&n.parentRoleId&&l[n.parentRoleId]?l[n.parentRoleId]:null;return s.join(" > ")}catch(i){return console.error("rolePath error:",i),""}},Uo=()=>{try{localStorage.setItem("modu-bo-active-role-id",K.value||"")}catch{}location.reload()},Wo=e=>{var t,a;try{const o=((a=(t=window.sfGetBoRoleStore)==null?void 0:t.call(window))==null?void 0:a.svRoles)||[],i=Object.fromEntries((o||[]).map(n=>[n==null?void 0:n.roleId,n]));return((O||[]).filter(n=>(n==null?void 0:n.userId)===e||!e)||[]).map(n=>i[n==null?void 0:n.roleId]).filter(Boolean)||[]}catch(o){return console.error("rolesOfUser error:",o),[]}};sa(()=>{var t;Vue.nextTick(lt),setTimeout(()=>{var a,o,i;(i=(o=(a=window.useBoAppInitStore)==null?void 0:a.call(window))==null?void 0:o.saRestoreFromStorage)==null||i.call(o)},0),oe.value==="home"&&setTimeout(()=>{We()},300),xo(),setTimeout(()=>{if(typeof boApi!="undefined"&&boApi.raw){const a=boApi.raw,o={},i={},l={};a.interceptors.request.use(s=>{const n=s.url+s.method;return o[n]=Date.now(),i[n]=s.data||s.params||null,l[n]=s.headers||{},s}),a.interceptors.response.use(s=>{const n=s.config.url+s.config.method,r=Date.now()-(o[n]||0);return Ht(s.config.method.toUpperCase(),s.config.url,s.status,r,!1,i[n],s.data,l[n]),delete o[n],delete i[n],delete l[n],s},s=>{var v,d;const n=s.config||{},r=n.url+n.method,c=Date.now()-(o[r]||0);return Ht(n.method.toUpperCase(),n.url,((v=s.response)==null?void 0:v.status)||0,c,!0,i[r],(d=s.response)==null?void 0:d.data,l[r]),delete o[r],delete i[r],delete l[r],Promise.reject(s)})}},100),st(),window.addEventListener("resize",st);const e=(t=window.sfGetBoCodeStore)==null?void 0:t.call(window);if(e!=null&&e.sgGetGrpCodes){const a=e.sgGetGrpCodes("USER_ROLE")||[];ft.splice(0,ft.length,...a)}setTimeout(()=>{localStorage.getItem("modu-bo-auth-accessToken")||Pe("login","page")},50)}),F(()=>(p==null?void 0:p.userId)||"",e=>{var t;try{if(e){const a=O||[];if(!a.find(o=>(o==null?void 0:o.roleId)===K.value)){const o=a&&a.length?(t=a[0])==null?void 0:t.roleId:null;K.value!==o&&(K.value=o)}}else K.value!==null&&(K.value=null)}catch(a){console.error("watch currentAuthUser error:",a),K.value!==null&&(K.value=null)}},{immediate:!0});const Q=m({show:!1,tab:"login",mode:"modal"}),z=m({loginId:"",loginPwd:"",authMethod:"\uBA54\uC778"}),ct=[{loginId:"super_admin",loginPwd:"demo1234",label:"\uC288\uD37C\uAD00\uB9AC\uC790",userNm:"\uC288\uD37C\uAD00\uB9AC\uC790",role:"SUPER",icon:"\u{1F451}"},{loginId:"admin1",loginPwd:"demo1234",label:"\uC6B4\uC601\uAD00\uB9AC\uC790",userNm:"\uAD00\uB9AC\uC7901",role:"ADMIN",icon:"\u{1F6E1}"},{loginId:"admin2",loginPwd:"demo1234",label:"\uC77C\uBC18\uAD00\uB9AC\uC790",userNm:"\uAD00\uB9AC\uC7902",role:"ADMIN",icon:"\u{1F464}"},{loginId:"operator1",loginPwd:"demo1234",label:"\uC6B4\uC601\uC790",userNm:"\uC6B4\uC601\uC7901",role:"OPR",icon:"\u2699\uFE0F"},{loginId:"cs_agent1",loginPwd:"demo1234",label:"CS\uC0C1\uB2F4\uC6D0",userNm:"CS\uC0C1\uB2F4\uC6D01",role:"CS",icon:"\u{1F3A7}"},{loginId:"vendor1",loginPwd:"demo1234",label:"\uD310\uB9E4\uC5C5\uCCB4",userNm:"\uD310\uB9E4\uC5C5\uCCB41",role:"VENDOR",icon:"\u{1F3EA}"}],$o=e=>{z.loginId=e.loginId,z.loginPwd=e.loginPwd,ht()},Le=20,b=m({show:!1,searchValue:"",pageNo:1,loading:!1,rows:[],total:0,totalPage:1,isApiMode:!1}),gt=async()=>{var e,t,a,o,i;b.loading=!0;try{const l={pageNo:b.pageNo,pageSize:Le};b.searchValue&&(l.searchValue=b.searchValue);const n=(e=(await window.coApiSvc.syUser.getPage(l,"\uC0AC\uC6A9\uC790\uC120\uD0DD","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:e.data;b.rows=(n==null?void 0:n.pageList)||(n==null?void 0:n.list)||[],b.total=(a=(t=n==null?void 0:n.pageTotalCount)!=null?t:n==null?void 0:n.total)!=null?a:0,b.totalPage=(i=(o=n==null?void 0:n.pageTotalPage)!=null?o:n==null?void 0:n.totalPage)!=null?i:Math.max(1,Math.ceil(b.total/Le))}catch(l){console.warn("[userPickModal] load error:",l),b.rows=[],b.total=0,b.totalPage=1}finally{b.loading=!1}},vt=Vue.computed(()=>{const e=(b.searchValue||"").toLowerCase();return e?ct.filter(t=>t.label.toLowerCase().includes(e)||t.loginId.toLowerCase().includes(e)||(t.userNm||"").toLowerCase().includes(e)):ct}),Ko=Vue.computed(()=>{const e=(b.pageNo-1)*Le;return vt.value.slice(e,e+Le)}),Vo=Vue.computed(()=>Math.max(1,Math.ceil(vt.value.length/Le))),Ho=Vue.computed(()=>b.isApiMode?b.rows:Ko.value),jo=Vue.computed(()=>b.isApiMode?b.total:vt.value.length),Go=Vue.computed(()=>b.isApiMode?b.totalPage:Vo.value),Xo=()=>{b.searchValue="",b.pageNo=1,b.isApiMode=!0,b.show=!0,gt()},Jo=()=>{b.pageNo=1,gt()},Yo=e=>{b.pageNo=e,gt()},Zo=e=>{b.show=!1,z.loginId=e.loginId||e.userId||"",z.loginPwd="1111",ht()},_=m({name:"",email:"",password:"",confirmPw:"",phone:"",role:"\uC6B4\uC601\uC790"}),ft=m([]),L=h(""),T=m({userMenuShow:!1,profileModalShow:!1,pwModalShow:!1,relatedSiteOpen:!1,sitemapShow:!1,favPanelShow:!1,roleSwitchShow:!1}),U=m({name:"",phone:"",dept:"",email:"",profileAttachId:null}),P=m({attachId:null,cdnImgUrl:""}),ut=h(!1),Qo=async e=>{var t;if(!e){P.attachId=null,P.cdnImgUrl="";return}try{const o=(t=(await window.coApiSvc.cmAttach.getById(e)).data)==null?void 0:t.data;P.attachId=(o==null?void 0:o.attachId)||null,P.cdnImgUrl=(o==null?void 0:o.cdnImgUrl)||""}catch{P.attachId=null,P.cdnImgUrl=""}},qo=()=>{!p||!p.userId||(Object.assign(U,{name:p.name||"",phone:p.phone||"",dept:p.dept||"",email:p.email||"",profileAttachId:p.profileAttachId||null}),Qo(U.profileAttachId),T.profileModalShow=!0,T.userMenuShow=!1)},en=()=>{if(!U.name){u("\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.","error");return}p||Object.assign(p,dt()),p.name=U.name||"",p.phone=U.phone||"",p.dept=U.dept||"",p.profileAttachId=U.profileAttachId||null,T.profileModalShow=!1,u("\uD504\uB85C\uD544\uC774 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")},tn=async e=>{var a,o,i,l;const t=(a=e.target.files)==null?void 0:a[0];if(e.target.value="",!!t){ut.value=!0;try{P.attachId&&(await window.coApiSvc.cmAttach.deleteFile(P.attachId),P.attachId=null,P.cdnImgUrl="");const s=new FormData;s.append("files",t),s.append("businessCode","USER_PROFILE");const r=(o=(await window.boApi.post("co/cm/upload/multi",s,window.coUtil.cofApiHdr("\uD504\uB85C\uD544","\uC0AC\uC9C4\uBCC0\uACBD"))).data)==null?void 0:o.data,c=((r==null?void 0:r.files)||[])[0];c&&(P.attachId=c.attachId,P.cdnImgUrl=c.cdnImgUrl||"",U.profileAttachId=c.attachId),u("\uC0AC\uC9C4\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(s){u(((l=(i=s.response)==null?void 0:i.data)==null?void 0:l.message)||"\uC5C5\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error")}finally{ut.value=!1}}},an=async()=>{var e,t;if(!P.attachId){U.profileAttachId=null,P.cdnImgUrl="";return}try{await window.coApiSvc.cmAttach.deleteFile(P.attachId),P.attachId=null,P.cdnImgUrl="",U.profileAttachId=null,u("\uC0AC\uC9C4\uC774 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(a){u(((t=(e=a.response)==null?void 0:e.data)==null?void 0:t.message)||"\uC0AD\uC81C \uC624\uB958","error",0)}},V=m({current:"",next:"",confirm:""}),se=h(""),on=()=>{Object.assign(V,{current:"",next:"",confirm:""}),se.value="",T.pwModalShow=!0,T.userMenuShow=!1},nn=async()=>{var e,t;if(se.value="",!V.current||!V.next||!V.confirm){se.value="\uBAA8\uB4E0 \uD56D\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694.";return}if(V.next.length<6){se.value="\uC0C8 \uBE44\uBC00\uBC88\uD638\uB294 6\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.";return}if(V.next!==V.confirm){se.value="\uC0C8 \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";return}try{const a=await coUtil.cofSha256(V.current),o=await coUtil.cofSha256(V.next);await coApiSvc.boAuth.changePassword({currentPassword:a,newPassword:o},"\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD","\uBCC0\uACBD"),T.pwModalShow=!1,u("\uBE44\uBC00\uBC88\uD638\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(a){se.value=((t=(e=a.response)==null?void 0:e.data)==null?void 0:t.message)||"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD \uC2E4\uD328"}},Pe=(e="login",t="modal")=>{Q.tab=e,Q.mode=t,Q.show=!0,L.value=""},sn=()=>{Xt.value?E("dashboard"):Pe("login","page")},mt=()=>{Q.show=!1,Q.mode="modal",L.value=""},ht=async()=>{var e,t;if(L.value="",!z.loginId||!z.loginPwd){L.value="\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.";return}try{if(!w){L.value="\uC2A4\uD1A0\uC5B4 \uCD08\uAE30\uD654 \uC2E4\uD328";return}await w.saLogin(z.loginId,z.loginPwd,z.authMethod),R(),Qe(),g.splice(0),z.loginId="",z.loginPwd="",mt(),E("dashboard"),We(),u(`${(p==null?void 0:p.authNm)||(p==null?void 0:p.name)||"\uC0AC\uC6A9\uC790"}\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4.`)}catch(a){console.error("[catch-info]",a),L.value=((t=(e=a==null?void 0:a.response)==null?void 0:e.data)==null?void 0:t.message)||(a==null?void 0:a.message)||"\uB85C\uADF8\uC778 \uC2E4\uD328"}},ln=async e=>{L.value="";try{if(!window.coAuth){L.value="coAuth \uBAA8\uB4C8\uC774 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.";return}const t=await window.coAuth.socialLogin("bo",e,{onDebug:(a,o)=>u("[\uAC1C\uBC1C] "+a+`
`+window.coExtSdk._fmtParams(o),"info",0)});if(!(t!=null&&t.ok)){L.value=(t==null?void 0:t.msg)||e+" \uB85C\uADF8\uC778 \uC2E4\uD328",u(L.value,"error",0);return}R(),Qe(),g.splice(0),mt(),E("dashboard"),u(`${(p==null?void 0:p.authNm)||(p==null?void 0:p.name)||"\uC0AC\uC6A9\uC790"}\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4.`)}catch(t){console.error("[doSocial]",t),L.value=(t==null?void 0:t.message)||e+" \uB85C\uADF8\uC778 \uC2E4\uD328";const a=window.coExtHelp&&window.coExtHelp.toastAction({kind:"social",provider:e,error:t});u(L.value,"error",0,"",a)}},dn=async()=>{var e;T.userMenuShow=!1;try{const t=localStorage.getItem("modu-bo-auth-accessToken")||"";if(!t){u("accessToken \uC774 \uC5C6\uC2B5\uB2C8\uB2E4. (\uB85C\uADF8\uC778 \uD6C4 \uC2DC\uB3C4)","error");return}const a=t+"__EXPIRED__";localStorage.setItem("modu-bo-auth-accessToken",a);const o=(e=window.useBoAuthStore)==null?void 0:e.call(window);o&&(o.svAccessToken=a),u("\u{1F504} accessToken \uC744 \uAC15\uC81C \uB9CC\uB8CC\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C API\uC5D0\uC11C \uC790\uB3D9 \uC7AC\uAC31\uC2E0\uC744 \uC2DC\uB3C4\uD569\uB2C8\uB2E4.","info");try{await boApiSvc.mbMember.getPage({pageNo:1,pageSize:1},"\uD1A0\uD070\uD14C\uC2A4\uD2B8","\uAC15\uC81C\uB9CC\uB8CC");const i=localStorage.getItem("modu-bo-auth-accessToken")||"";o&&i&&i!==a&&(o.svAccessToken=i),u("\u2705 \uD1A0\uD070 \uC790\uB3D9 \uC7AC\uAC31\uC2E0 \uC131\uACF5 (refresh \uD750\uB984 \uC815\uC0C1). \uD654\uBA74 \uC720\uC9C0\uB428.","success")}catch{u("\u26A0\uFE0F \uC7AC\uAC31\uC2E0 \uC2E4\uD328 \u2014 refreshToken \uB9CC\uB8CC/\uC7AC\uC0AC\uC6A9 \uB4F1\uC73C\uB85C \uC7AC\uC778\uC99D \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","error",0)}}catch(t){console.error("[doExpireToken] error:",t),u("\uD1A0\uD070 \uAC15\uC81C \uB9CC\uB8CC \uCC98\uB9AC \uC911 \uC624\uB958: "+((t==null?void 0:t.message)||""),"error",0)}},rn=async()=>{var e;try{const t=(e=window.useBoAuthStore)==null?void 0:e.call(window);t&&await t.saLogout();try{localStorage.removeItem("modu-bo-active-role-id")}catch{}K.value=null,T.userMenuShow=!1,g.splice(0),R(),D.value="dashboard",Pe("login","page"),u("\uB85C\uADF8\uC544\uC6C3\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(t){console.error("doLogout error:",t),T.userMenuShow=!1}};window.addEventListener("storage",e=>{var t;if(e.key==="modu-bo-auth-accessToken"||e.key==="modu-bo-auth-authUser"){const a=(p==null?void 0:p.authId)||"";(t=w==null?void 0:w.saSyncFromStorage)==null||t.call(w),R();const o=(p==null?void 0:p.authId)||"";if(a!==o){const i=new URLSearchParams((location.search||"").replace(/^\?/,"")).get("page")||"";if(i&&i!=="dashboard")try{history.replaceState(null,"",location.pathname+"?page=dashboard")}catch{}location.reload()}}}),window._boAuthSyncTimer||(window._boAuthSyncTimer=setInterval(()=>{var e;(e=w==null?void 0:w.saSyncFromStorage)==null||e.call(w),R()},3e3));const pn=async()=>{if(L.value="",!_.name||!_.email||!_.password){L.value="\uD544\uC218 \uD56D\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694.";return}if(_.password!==_.confirmPw){L.value="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";return}try{await boApiSvc.syUser.create({name:_.name,email:_.email,password:_.password,phone:_.phone,role:_.role},"\uC0AC\uC6A9\uC790\uB4F1\uB85D","\uC800\uC7A5"),Object.assign(_,{name:"",email:"",password:"",confirmPw:"",phone:"",role:"\uC6B4\uC601\uC790"}),Q.tab="login",L.value="",u("\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694.")}catch(e){console.error("[catch-info]",e),L.value=coUtil.cofErrMsg(e,"\uAC00\uC785 \uC2E4\uD328")}},cn=()=>{T.relatedSiteOpen=!T.relatedSiteOpen},gn=e=>{window.open(e,"_blank","noopener,noreferrer"),T.relatedSiteOpen=!1},vn=e=>{try{localStorage.setItem("modu-fo-sy-siteNo",e)}catch{}window.open("index.html?SITE_NO="+e,"_blank"),T.relatedSiteOpen=!1},fn=e=>{try{localStorage.setItem("modu-bo-sy-siteNo",e)}catch{}window.open("bo.html?SITE_NO="+e,"_blank"),T.relatedSiteOpen=!1},un=typeof localStorage!="undefined"&&localStorage.getItem("modu-fo-sy-siteNo")||"01",mn=window.BO_SITE_NO||"01",bt=(aa=window.useBoAppStore)==null?void 0:aa.call(window),hn=j(()=>(bt==null?void 0:bt.svActive)||"-"),bn=[{fo:"01",bo:"01"},{fo:"02",bo:"02"},{fo:"03",bo:"03"},{fo:"9999",bo:"9999"}],B="illeesam.synology.me",Jt={fo:{port:`http://${B}:22000`,sub:`https://22000.${B}`,gw:`http://${B}:22099`},bo:{port:`http://${B}:22000/bo.html`,sub:`https://22000.${B}/bo.html`,gw:`http://${B}:22099/bo.html`},ecBeBo:{port:`http://${B}:22300/home`,sub:`https://22300.${B}/home`,gw:`http://${B}:22099/admin-tools`},ecBeCdn:{port:`http://${B}:22400/home`,sub:`https://22400.${B}/home`,gw:`http://${B}:22099/cdn-admin`}},wn=[{key:"fo",label:"FO"},{key:"bo",label:"BO"},{key:"ecBeBo",label:"ecBeBo"},{key:"ecBeCdn",label:"ecBeCdn"}],yn=[{key:"port",label:"\uD3EC\uD2B8"},{key:"sub",label:"\uC11C\uBE0C\uB3C4\uBA54\uC778"},{key:"gw",label:"gateway"}],xn=(e,t)=>{window.open(Jt[e][t],"_blank")},Sn=[{label:"\uD1B5\uD569 \uD398\uC774\uC9C0",hash:"#page=dispUiPage",icon:"\u{1F310}"},{label:"UI \uC0D8\uD50C 01",hash:"#page=dispUi01",icon:"1\uFE0F\u20E3"},{label:"UI \uC0D8\uD50C 02",hash:"#page=dispUi02",icon:"2\uFE0F\u20E3"},{label:"UI \uC0D8\uD50C 03",hash:"#page=dispUi03",icon:"3\uFE0F\u20E3"},{label:"UI \uC0D8\uD50C 04",hash:"#page=dispUi04",icon:"4\uFE0F\u20E3"},{label:"UI \uC0D8\uD50C 05",hash:"#page=dispUi05",icon:"5\uFE0F\u20E3"},{label:"UI \uC0D8\uD50C 06",hash:"#page=dispUi06",icon:"6\uFE0F\u20E3"}],ue=m([]),le=m(new Set),kn=h("open"),In=e=>ue.includes(e),Mn=e=>{const t=ue.indexOf(e);t===-1?ue.push(e):(ue.splice(t,1),le.delete(e))},Tn=e=>{le.has(e)?le.delete(e):le.add(e),g.find(t=>t.id===e)&&(le.has(e)?A.add(e):A.delete(e))},Ln=j(()=>ue.map(e=>{var o;const t=he[e],a=((o=$e.find(i=>i.id===t))==null?void 0:o.label)||"";return{id:e,label:kt[e]||e,topLabel:a}})),De=m([]),Pn=e=>e==="DashboardBoAppMonitor"?"appMonitorDashboard":e==="DashboardBoEc"+(window.BO_SITE_NO||"01")?"dashboard":null,wt=async()=>{var e,t,a;try{if(!localStorage.getItem("modu-bo-auth-accessToken"))return;const o=((e=window.boCommonFilter)==null?void 0:e.siteId)||"",[i,l]=await Promise.all([boApiSvc.cmDashboard.getList({siteId:o,scope:"accessible"},"\uB300\uC2DC\uBCF4\uB4DC\uBA54\uB274","\uBA54\uB274\uC870\uD68C"),boApiSvc.cmDashboard.getMenuTree({siteId:o,scope:"SYS"},"\uB300\uC2DC\uBCF4\uB4DC\uBA54\uB274","\uBA54\uB274\uD2B8\uB9AC\uC870\uD68C")]),s={};(((t=i.data)==null?void 0:t.data)||[]).filter(d=>!d.ownerUserId&&(d.uiCompNm||"").indexOf("MY:")!==0).forEach(d=>{s[d.dashboardId]=d});const n=((a=l.data)==null?void 0:a.data)||[];if(!n.length){De.splice(0,De.length);return}const r={};n.forEach(d=>{const f=d.parentNodeId||"";(r[f]=r[f]||[]).push(d)});const c=[],v=(d,f)=>(r[d]||[]).forEach(y=>{if(y.nodeTypeCd==="FOLDER")c.push({key:"F:"+y.dashboardMenuId,label:y.nodeNm||"\uD3F4\uB354",folder:!0,depth:f});else{const x=s[y.dashboardId];x&&c.push({key:y.dashboardMenuId,label:x.dashboardNm,depth:f,pageId:Pn(x.uiCompNm),dashboardId:x.dashboardId})}v(y.dashboardMenuId,f+1)});v("",0),De.splice(0,De.length,...c)}catch(o){console.warn("[\uB300\uC2DC\uBCF4\uB4DC \uBA54\uB274 \uC870\uD68C \uC624\uB958]",o)}};window.addEventListener("sys-dashboard-changed",wt);const Ae=m([]),Yt=async()=>{var e,t,a,o;try{if(!localStorage.getItem("modu-bo-auth-accessToken"))return;const i=((e=window.boCommonFilter)==null?void 0:e.siteId)||"",l=await boApiSvc.cmDashboard.getList({siteId:i,scope:"accessible"},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uBA54\uB274\uC870\uD68C"),s=window.sfGetBoAuthStore?window.sfGetBoAuthStore():null,n=((t=s==null?void 0:s.svAuthUser)==null?void 0:t.authId)||"",r=(((a=l.data)==null?void 0:a.data)||[]).filter(d=>d.ownerUserId).map(d=>({dashboardId:d.dashboardId,dashboardNm:d.dashboardNm,sortOrd:d.sortOrd==null?9999:d.sortOrd,mine:d.ownerUserId===n}));r.sort((d,f)=>f.mine-d.mine||d.sortOrd-f.sortOrd||d.dashboardNm.localeCompare(f.dashboardNm,"ko"));const c=new Set(r.map(d=>d.dashboardId)),v=[];r.forEach(d=>{d.parentId&&c.has(d.parentId)||(v.push(Object.assign({depth:0},d)),r.filter(f=>f.parentId===d.dashboardId).forEach(f=>v.push(Object.assign({depth:1},f))))}),r.splice(0,r.length,...v);try{const f=((o=(await boApiSvc.cmDashboard.getMenuTree({siteId:i},"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC","\uBA54\uB274\uD2B8\uB9AC\uC870\uD68C")).data)==null?void 0:o.data)||[];if(f.length){const y={};r.forEach(H=>{y[H.dashboardId]=H});const x={};f.forEach(H=>{const S=H.parentNodeId||"";(x[S]=x[S]||[]).push(H)});const q=[],Ne=(H,S)=>(x[H]||[]).forEach(k=>{if(k.nodeTypeCd==="FOLDER")q.push({dashboardId:"F:"+k.dashboardMenuId,dashboardNm:k.nodeNm||"\uD3F4\uB354",folder:!0,depth:S,mine:!0});else{const me=y[k.dashboardId];me&&q.push(Object.assign({},me,{depth:S}))}Ne(k.dashboardMenuId,S+1)});Ne("",0),Ae.splice(0,Ae.length,...q);return}}catch(d){console.warn("[\uBA54\uB274\uD2B8\uB9AC \uC870\uD68C \uC624\uB958]",d)}Ae.splice(0,Ae.length,...r)}catch(i){console.warn("[\uC0AC\uC6A9\uC790 \uB300\uC2DC\uBCF4\uB4DC \uBA54\uB274 \uC870\uD68C \uC624\uB958]",i)}};window.addEventListener("user-dashboard-changed",Yt);let Zt=!1;const We=()=>{Zt||(Zt=!0,wt(),Yt())};return{isApiLoading:Be,apiProgressLabel:Wt,page:D,navLoading:He,dtlId:ae,initSearchValue:Nt,navigate:E,setTabLabel:wa,standaloneDtlMode:Se,errorMessage:Lt,recentServerErrors:re,cfDashboardComp:ga,TOP_MENUS:$e,LEFT_MENUS:Ce,LEFT_MENUS_TAIL:da,sysDashMenus:De,HOME_FALLBACK_DASH:la,fnLoadSysDashMenus:wt,userDashMenus:Ae,AUTH_METHODS:ca,openTabs:g,closeTab:Ot,cfActiveTabId:G,toPageFromTabId:te,toIdFromTabId:de,refreshKeys:Ge,keptTabIds:A,cfEffectiveKeptIds:ma,toggleKeep:ua,PAGE_COMP_MAP:Xe,loadedPages:we,cfIsPageLoaded:ba,ctxMenu:N,showCtxMenu:ya,closeCtxMenu:X,ctxClose:xa,ctxCloseLeft:Sa,ctxCloseRight:ka,ctxCloseOthers:Ma,ctxCloseAll:Ia,ctxNewWindow:Ta,ctxRefresh:La,openNewWindow:zt,cfOpenTabsWithGroup:Pa,activeTop:oe,leftMenuOpen:Oe,cfLeftMenuOpen:_o,tabBarOpen:et,cfEmbed:Ca,setTopMenu:Ea,hoveredTop:ce,onTopMenuEnter:Da,onTopMenuLeave:Aa,onDropdownEnter:Na,toasts:J,showToast:u,onToastAction:ao,closeToast:oo,closeAllToasts:no,toastShowDetail:ge,toggleToastDetail:io,confirmState:ve,showConfirm:ot,closeConfirm:lo,refModal:Ie,showRefModal:Kt,closeRefModal:ro,helpModal:nt,showHelp:Vt,rightPanelOpen:it,commonFilter:M,selectModal:fe,openSelectModal:po,closeSelectModal:co,onSelectItem:go,clearFilter:vo,filterSite:fo,filterVendor:uo,cfFilterDlivVendor:mo,cfFilterBoUser:ho,filterMember:bo,filterOrder:wo,apiLogs:Z,apiLogHoverDetail:Me,apiLogLockedDetail:Te,clearApiLogs:ko,toggleApiLogLock:Io,onApiLogEnter:Mo,onApiLogLeave:jt,onApiLogDetailEnter:To,onApiLogDetailLeave:Lo,getApiStatusColor:Oo,getApiMethodColor:zo,formatJsonData:Po,isWithin60Seconds:Do,getRelativeTime:Eo,fnFmtSec:Ao,fnHmsToMs:Co,fnShortUrl:No,tabBarRef:Ue,scrollTabs:Bo,boInitReady:rt,cfIsLoggedIn:Xt,currentAuthUser:p,currentAuthUserRoles:O,activeRoleId:K,rolePath:Ro,onRoleChange:Uo,rolesOfUser:Wo,loginModal:Q,loginForm:z,regForm:_,loginError:L,uiState:T,userRoles:ft,openLogin:Pe,onLogoClick:sn,closeLogin:mt,doLogin:ht,doSocial:ln,doLogout:rn,doExpireToken:dn,doRegister:pn,QUICK_USERS:ct,quickLogin:$o,userPickModal:b,openUserPick:Xo,onUserPick:Zo,cfPickRows:Ho,cfPickTotal:jo,cfPickTotalPage:Go,onUserPickSearch:Jo,onUserPickPage:Yo,profileForm:U,profileImg:P,profileImgUploading:ut,openProfile:qo,saveProfile:en,onProfileImgChange:tn,onProfileImgRemove:an,pwForm:V,pwError:se,openPwChange:on,savePwChange:nn,favorites:ue,favKeepSet:le,sidebarTab:kn,isFav:In,toggleFav:Mn,cfFavList:Ln,toggleFavKeep:Tn,apiResPanel:at,setApiRes:Re,closeApiResPanel:so,boSettingShow:_e,apiToastEnabled:ke,onToggleApiToast:za,onToggleBoSetting:_a,envBadgeBo:Ba,boMainRef:Ut,boPdfExporting:tt,handleShareKakao:Fa,handleCopyLink:Ra,handleExportPdf:Ua,fontZoom:Y,onFontZoomDown:Ka,onFontZoomUp:Va,onFontZoomReset:Ha,tabAutoKeepLimit:W,onTabAutoKeepDown:Xa,onTabAutoKeepUp:Ja,onTabAutoKeepReset:Ya,onRootClick:()=>{X(),T.userMenuShow=!1,T.roleSwitchShow=!1,_e.value=!1,ce.value=null,T.sitemapShow=!1,T.favPanelShow=!1},toggleRelatedSite:cn,openRelatedLink:gn,goFoSite:vn,goBoSite:fn,currentFoSiteNo:un,currentBoSiteNo:mn,cfBoActive:hn,SITE_PAIR_MENU:bn,DISP_LINKS:Sn,DEPLOY_LINKS:Jt,DEPLOY_COLS:wn,DEPLOY_ROWS:yn,goDeployLink:xn,safe:window.safeUtil}},template:`
<div @click="onRootClick">
  <!-- lazy \uB85C\uB4DC \uC9C4\uD589\uBC14 \u2014 \uBA54\uB274 \uD074\uB9AD \uD6C4 \uD654\uBA74 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uBC1B\uC544\uC624\uB294 \uB3D9\uC548(\uB290\uB9B0 \uB124\uD2B8\uC6CC\uD06C\uC5D0\uC11C \uCC98\uC74C
       \uC5EC\uB294 \uD654\uBA74\uC77C \uB54C\uB9CC \uB208\uC5D0 \uB754) \uC0AC\uC6A9\uC790\uC5D0\uAC8C "\uC9C0\uAE08 \uBC1B\uC544\uC624\uB294 \uC911" \uC744 \uC54C\uB824\uC900\uB2E4. \uC774\uBBF8 \uB85C\uB4DC\uB41C
       \uD654\uBA74\uC740 fnEnsurePageLoaded \uAC00 \uC989\uC2DC resolve \uB418\uC5B4 \uAC70\uC758 \uC548 \uBCF4\uC778\uB2E4. 2026-08-30 \uCD94\uAC00. -->
  <div id="_nav_loading_bar" :class="{ active: navLoading }"></div>
  <!-- \u2460 TOP NAV -->
  <nav class="bo-top-nav" v-if="!cfEmbed">
    <button class="sidebar-toggle-btn" @click.stop="leftMenuOpen=!leftMenuOpen" :title="cfLeftMenuOpen ? '\uC0AC\uC774\uB4DC\uBC14 \uC811\uAE30' : '\uC0AC\uC774\uB4DC\uBC14 \uD3BC\uCE58\uAE30'">{{ cfLeftMenuOpen ? '\u2039' : '\u203A' }}</button>
    <button class="sidebar-toggle-btn tab-bar-toggle-btn" @click.stop="tabBarOpen=!tabBarOpen" :title="tabBarOpen ? '\uD0ED\uBC14 \uC811\uAE30' : '\uD0ED\uBC14 \uD3BC\uCE58\uAE30'">{{ tabBarOpen ? '\u25B2' : '\u25BC' }}</button>
    <span class="brand" @click="onLogoClick" style="display:inline-flex;align-items:center;gap:8px;cursor:pointer;">
      ShopJoy
      <span class="fo-site-badge"
        :title="'FO_SITE_NO=' + (currentFoSiteNo || '-') + ' BO_SITE_NO=' + (currentBoSiteNo || '-') + ' \u2014 \uD074\uB9AD: \uC5F0\uAD00\uC0AC\uC774\uD2B8'"
        :data-tip="'FO_SITE_NO=' + (currentFoSiteNo || '-') + ' BO_SITE_NO=' + (currentBoSiteNo || '-')"
        style="display:inline-flex;gap:4px;font-family:monospace;font-size:11px;cursor:pointer;"
        @click.stop="toggleRelatedSite">
        <span :style="{fontWeight:800,color: currentFoSiteNo==='03'?'#7b1fa2':currentFoSiteNo==='02'?'#2e7d6b':currentFoSiteNo==='9999'?'#bbb':'#ff8aa5'}">{{ currentFoSiteNo || '-' }}</span>
        <span :style="{fontWeight:800,color: currentBoSiteNo==='03'?'#7b1fa2':currentBoSiteNo==='02'?'#2e7d6b':currentBoSiteNo==='9999'?'#bbb':'#ff8aa5'}">{{ currentBoSiteNo || '-' }}</span>
      </span>
      <span
        :title="'active=' + cfBoActive"
        :style="{
        fontFamily:'monospace', fontSize:'10px', fontWeight:700, padding:'1px 6px',
        borderRadius:'4px', border:'1px solid',
        color: cfBoActive==='prod'?'#fff':cfBoActive==='dev'?'#1565c0':cfBoActive==='local'?'#7a5800':'#555',
        background: cfBoActive==='prod'?'#e53935':cfBoActive==='dev'?'#e3f0fb':cfBoActive==='local'?'#fff59d':'#f0f0f0',
        borderColor: cfBoActive==='prod'?'#c62828':cfBoActive==='dev'?'#90caf9':cfBoActive==='local'?'#f9a825':'#ccc',
        }">{{ cfBoActive }}</span>
    </span>
    <div class="top-nav-menus"
      @mouseleave="onTopMenuLeave">
      <span v-for="tm in TOP_MENUS" :key="tm.id"
        class="top-nav-item" :class="{active: activeTop===tm.id}"
        @click="setTopMenu(tm.id, $event.ctrlKey || $event.metaKey)"
        @auxclick="$event.button===1 ? setTopMenu(tm.id, true) : null"
        @mouseenter="onTopMenuEnter(tm.id)" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D">{{ tm.label }}</span>
    </div>

    <!-- \uB85C\uADF8\uC778/\uC720\uC800 \uC601\uC5ED -->
    <div class="top-nav-user" @click.stop>
      <template v-if="cfIsLoggedIn">
        <!-- \u{1F514} \uC54C\uB9BC \uC885 (\uB204\uC801 \uC54C\uB9BC + \uBBF8\uC77D\uC74C \uCE74\uC6B4\uD2B8) \u2014 \uC774\uB984 \uC88C\uCE21 -->
        <co-noti-bell ctx="bo" :navigate="navigate" />
        <!-- \uC774\uB984 + \uC5ED\uD560\uBA85 \uC138\uB85C \uC2A4\uD0DD -->
        <div style="display:flex;flex-direction:column;align-items:flex-end;justify-content:center;margin-right:4px;gap:1px;" @click.stop>
          <span style="font-size:12px;font-weight:600;color:#fff;white-space:nowrap;line-height:1.3;">{{ currentAuthUser?.authNm || currentAuthUser?.name || '' }}</span>
          <div v-if="currentAuthUserRoles.length > 1" style="position:relative;">
            <button @click="uiState.roleSwitchShow=!uiState.roleSwitchShow; uiState.userMenuShow=false; boSettingShow=false"
              style="display:inline-flex;align-items:center;gap:3px;padding:0;border:none;background:none;font-size:10px;font-weight:500;color:#cdb4ff;cursor:pointer;white-space:nowrap;line-height:1.3;"
              :title="'\uC5ED\uD560 ' + currentAuthUserRoles.length + '\uAC1C \uBCF4\uC720'">
              {{ rolePath(currentAuthUserRoles.find(r => r.roleId === activeRoleId) || currentAuthUserRoles[0]) || '\uC5ED\uD560 \uC120\uD0DD' }}
              <span style="font-size:8px;opacity:.7;">\u25BE</span>
            </button>
            <div v-if="uiState.roleSwitchShow"
              style="position:absolute;right:0;top:calc(100% + 4px);min-width:200px;background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.18);z-index:9100;padding:4px 0;">
              <button v-for="r in currentAuthUserRoles" :key="r.roleId"
                @click="activeRoleId=r.roleId; onRoleChange(); uiState.roleSwitchShow=false"
                style="width:100%;padding:9px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:12px;display:flex;align-items:center;gap:8px;"
                :style="r.roleId === activeRoleId ? 'background:rgba(232,88,122,0.08);color:#e8587a;font-weight:700;' : 'color:#374151;'"
                @mouseenter="$event.currentTarget.style.background='#f5f5f5'"
                @mouseleave="$event.currentTarget.style.background=r.roleId===activeRoleId?'rgba(232,88,122,0.08)':'transparent'">
                <span v-if="r.roleId === activeRoleId" style="flex-shrink:0;font-size:11px;">\u2713</span>
                <span v-else style="flex-shrink:0;width:14px;display:inline-block;"></span>
                {{ rolePath(r) }}
              </button>
            </div>
          </div>
          <span v-else-if="currentAuthUserRoles.length === 1" style="font-size:10px;font-weight:500;color:#cdb4ff;white-space:nowrap;line-height:1.3;">
            {{ rolePath(currentAuthUserRoles[0]) }}
          </span>
        </div>
        <button class="user-avatar-btn" @click="uiState.userMenuShow=!uiState.userMenuShow; boSettingShow=false; uiState.roleSwitchShow=false" :title="currentAuthUser?.email || ''">
          {{ ((currentAuthUser?.authNm || currentAuthUser?.name || '').charAt(0)) || '?' }}
        </button>
        <div v-if="uiState.userMenuShow" class="user-dropdown">
          <div class="user-dropdown-header">
            <div class="user-dropdown-name">{{ currentAuthUser?.authNm || currentAuthUser?.name || '' }}</div>
            <div class="user-dropdown-role">{{ currentAuthUser?.role || '' }}</div>
            <div class="user-dropdown-email">{{ currentAuthUser?.email || '' }}</div>
          </div>
          <div class="user-dropdown-sep"></div>
          <div class="user-dropdown-item" @click="openProfile">\u{1F64D} \uD504\uB85C\uD544</div>
          <div class="user-dropdown-item" @click="openPwChange">\u{1F511} \uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD</div>
          <div class="user-dropdown-sep"></div>
          <div class="user-dropdown-item danger" @click="doLogout">\u21A9 \uB85C\uADF8\uC544\uC6C3</div>
          <div class="user-dropdown-sep"></div>
          <div class="user-dropdown-item" @click="doExpireToken" title="accessToken\uC744 \uAC15\uC81C \uB9CC\uB8CC\uC2DC\uCF1C refresh \uC790\uB3D9 \uC7AC\uAC31\uC2E0 \uD750\uB984\uC744 \uD14C\uC2A4\uD2B8\uD569\uB2C8\uB2E4 (\uAC1C\uBC1C\uC6A9)">\u{1F504} \uD1A0\uD070 \uAC15\uC81C\uB9CC\uB8CC (refresh \uD14C\uC2A4\uD2B8)</div>
        </div>
        <!-- \u2699 \uC124\uC815 \uB4DC\uB86D\uB2E4\uC6B4 \u2014 \uC544\uBC14\uD0C0 \uC6B0\uCE21 -->
        <div style="position:relative;flex-shrink:0;margin-left:4px;" @click.stop>
          <button @click="boSettingShow=!boSettingShow; uiState.userMenuShow=false; uiState.roleSwitchShow=false" title="\uC124\uC815"
            style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;transition:all .15s;"
            :style="boSettingShow ? 'background:rgba(232,88,122,0.18);border:1px solid rgba(232,88,122,0.45);color:#e8587a;' : 'background:rgba(232,88,122,0.08);border:1px solid rgba(232,88,122,0.25);color:#e8587a;'">\u2699</button>
          <div v-if="boSettingShow"
            style="position:absolute;right:0;top:calc(100% + 6px);width:250px;background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.14);z-index:9000;overflow:hidden;padding:4px 0;">
            <div style="display:flex;gap:6px;align-items:center;justify-content:center;padding:6px 14px 10px;border-bottom:1px solid #f0f0f0;margin-bottom:4px;">
              <button class="btn btn_link" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)" @click="handleCopyLink">\u{1F517}</button>
              <button class="btn btn_kakao" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720" @click="handleShareKakao">\u{1F4AC}</button>
              <button class="btn btn_pdf" title="PDF \uB2E4\uC6B4\uB85C\uB4DC" :disabled="boPdfExporting" @click="handleExportPdf">
                <span v-if="boPdfExporting">\u23F3</span>
                <svg v-else width="18" height="20" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2 H20 L28 10 V34 H4 Z" fill="#fff" stroke="#c2410c" stroke-width="1.5"/>
                  <path d="M20 2 V10 H28 Z" fill="#f3d4c0"/>
                  <rect x="2" y="20" width="28" height="12" rx="2" fill="#e2372c"/>
                  <text x="16" y="29" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">PDF</text>
                </svg>
              </button>
            </div>
            <button @click="boSettingShow=false; uiState.sitemapShow=true; uiState.favPanelShow=false; hoveredTop=null"
              style="width:100%;padding:9px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:#374151;"
              :style="uiState.sitemapShow ? 'background:rgba(232,88,122,0.08);color:#e8587a;font-weight:600;' : ''"
              @mouseenter="$event.currentTarget.style.background='#f5f5f5'"
              @mouseleave="$event.currentTarget.style.background=uiState.sitemapShow?'rgba(232,88,122,0.08)':'transparent'">
              <span>\u{1F5FA}</span> \uC0AC\uC774\uD2B8\uB9F5
            </button>
            <button @click="boSettingShow=false; uiState.favPanelShow=true; uiState.sitemapShow=false; hoveredTop=null"
              style="width:100%;padding:9px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:#374151;"
              :style="uiState.favPanelShow ? 'background:rgba(232,88,122,0.08);color:#e8587a;font-weight:600;' : ''"
              @mouseenter="$event.currentTarget.style.background='#f5f5f5'"
              @mouseleave="$event.currentTarget.style.background=uiState.favPanelShow?'rgba(232,88,122,0.08)':'transparent'">
              <span>\u2605</span> \uC990\uACA8\uCC3E\uAE30
              <span v-if="cfFavList.length" style="margin-left:auto;font-size:10px;font-weight:700;background:#e8587a;color:#fff;border-radius:8px;padding:1px 6px;">{{ cfFavList.length }}</span>
            </button>
            <button @click="boSettingShow=false; showHelp()"
              style="width:100%;padding:9px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:#374151;"
              @mouseenter="$event.currentTarget.style.background='#f5f5f5'"
              @mouseleave="$event.currentTarget.style.background='transparent'">
              <span>\u2753</span> \uB3C4\uC6C0\uB9D0
            </button>
            <div style="height:1px;background:#f0f0f0;margin:4px 0;"></div>
            <button @click="onToggleApiToast"
              style="width:100%;padding:9px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:#374151;"
              :style="apiToastEnabled ? 'background:rgba(232,88,122,0.08);color:#e8587a;font-weight:600;' : ''"
              @mouseenter="$event.currentTarget.style.background='#f5f5f5'"
              @mouseleave="$event.currentTarget.style.background=apiToastEnabled?'rgba(232,88,122,0.08)':'transparent'">
              <span>\u{1F514}</span>
              <span>API \uD1A0\uC2A4\uD2B8</span>
              <span style="margin-left:auto;font-size:10px;border-radius:8px;padding:1px 6px;font-weight:700;" :style="apiToastEnabled?'background:#e8587a;color:#fff;':'background:#e8e8e8;color:#888;'">{{ apiToastEnabled ? 'ON' : 'OFF' }}</span>
            </button>
            <div style="width:100%;padding:9px 14px;display:flex;align-items:center;gap:8px;color:#374151;font-size:13px;">
              <span>\u{1F50D}</span>
              <span>\uD654\uBA74 \uD06C\uAE30</span>
              <span style="margin-left:auto;display:flex;align-items:center;gap:4px;">
                <button @click.stop="onFontZoomDown" title="\uCD95\uC18C"
                  style="width:22px;height:22px;border:1px solid #e5e7eb;border-radius:5px;background:#fff;cursor:pointer;font-size:12px;line-height:1;color:#555;">\uFF0D</button>
                <span @click.stop="onFontZoomReset" title="100%\uB85C \uCD08\uAE30\uD654" style="min-width:36px;text-align:center;font-size:11px;font-weight:600;color:#888;cursor:pointer;">{{ fontZoom }}%</span>
                <button @click.stop="onFontZoomUp" title="\uD655\uB300"
                  style="width:22px;height:22px;border:1px solid #e5e7eb;border-radius:5px;background:#fff;cursor:pointer;font-size:12px;line-height:1;color:#555;">\uFF0B</button>
              </span>
            </div>
            <div style="width:100%;padding:9px 14px;display:flex;align-items:center;gap:8px;color:#374151;font-size:13px;">
              <span>\u{1F4CC}</span>
              <span>\uC5F4\uB9B0\uD0ED \uC790\uB3D9\uACE0\uC815</span>
              <span style="margin-left:auto;display:flex;align-items:center;gap:4px;">
                <button @click.stop="onTabAutoKeepDown" title="\uC904\uC774\uAE30"
                  style="width:22px;height:22px;border:1px solid #e5e7eb;border-radius:5px;background:#fff;cursor:pointer;font-size:12px;line-height:1;color:#555;">\uFF0D</button>
                <span @click.stop="onTabAutoKeepReset" title="\uAE30\uBCF8\uAC12(10\uAC1C)\uC73C\uB85C \uCD08\uAE30\uD654" style="min-width:24px;text-align:center;font-size:11px;font-weight:600;color:#888;cursor:pointer;">{{ tabAutoKeepLimit }}</span>
                <button @click.stop="onTabAutoKeepUp" title="\uB298\uB9AC\uAE30"
                  style="width:22px;height:22px;border:1px solid #e5e7eb;border-radius:5px;background:#fff;cursor:pointer;font-size:12px;line-height:1;color:#555;">\uFF0B</button>
              </span>
            </div>
            <div style="height:1px;background:#f0f0f0;margin:4px 0;"></div>
            <div style="padding:6px 14px 8px;font-size:10px;color:#9ca3af;line-height:1.5;">
              <div>{{ envBadgeBo.mode }}</div>
              <div>api {{ envBadgeBo.api }}</div>
              <div>cdn {{ envBadgeBo.cdn }}</div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <button class="login-btn" @click="openLogin('login')">\u{1F510} \uB85C\uADF8\uC778</button>
      </template>
    </div>
    <!-- \uACF5\uD1B5\uD544\uD130 \uD1A0\uAE00 \u2014 nav \uCD5C\uC6B0\uCE21 \uB05D, \uD328\uB529 \uC5C6\uC774 \uBC00\uCC29 -->
    <button class="right-panel-nav-btn" @click="rightPanelOpen=!rightPanelOpen"
      :title="rightPanelOpen ? '\uACF5\uD1B5\uD544\uD130 \uC811\uAE30' : '\uACF5\uD1B5\uD544\uD130 \uD3BC\uCE58\uAE30'">
      {{ rightPanelOpen ? '\u203A' : '\u2039' }}
    </button>
  </nav>

  <!-- \uB300\uBA54\uB274 hover \uB4DC\uB86D\uB2E4\uC6B4 (\uC804\uCCB4 \uC0AC\uC774\uD2B8\uB9F5) -->
  <div v-if="!cfEmbed && hoveredTop"
    class="top-nav-mega-dd"
    @mouseenter="onDropdownEnter"
    @mouseleave="onTopMenuLeave"
    @click.stop>
    <div v-for="tm in TOP_MENUS" :key="tm.id"
      class="mega-dd-col" :class="{highlighted: hoveredTop===tm.id}">
      <div class="mega-dd-top-lbl" @click="setTopMenu(tm.id, $event.ctrlKey || $event.metaKey)"
        @auxclick="$event.button===1 ? setTopMenu(tm.id, true) : null" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D">{{ tm.label }}</div>
      <template v-for="item in (LEFT_MENUS[tm.id] || [])" :key="item.group || item.id">
        <div v-if="item.group" class="mega-dd-group">{{ item.group }}</div>
        <div v-else class="mega-dd-item" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D (\uB808\uC774\uC5B4 \uC720\uC9C0)"
          @click="($event.ctrlKey || $event.metaKey) ? openNewWindow(item.id) : (navigate(item.id), hoveredTop=null)"
          @auxclick="$event.button===1 ? openNewWindow(item.id) : null">{{ item.label }}</div>
      </template>
    </div>
  </div>

  <!-- \uC0AC\uC774\uD2B8\uB9F5 \uD328\uB110 -->
  <div v-if="!cfEmbed && uiState.sitemapShow" class="nav-sitemap-panel" @click.stop>
    <div class="nav-panel-hd">
      <span class="nav-panel-hd-title">\u{1F5FA} \uC0AC\uC774\uD2B8\uB9F5</span>
      <button class="nav-panel-close" @click="uiState.sitemapShow=false">\u2715</button>
    </div>
    <div class="sitemap-body">
      <div v-for="tm in TOP_MENUS" :key="tm.id" class="sitemap-col">
        <div class="sitemap-top-lbl" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D (\uB808\uC774\uC5B4 \uC720\uC9C0)"
          @click="($event.ctrlKey || $event.metaKey) ? setTopMenu(tm.id, true) : (setTopMenu(tm.id), uiState.sitemapShow=false)"
          @auxclick="$event.button===1 ? setTopMenu(tm.id, true) : null">{{ tm.label }}</div>
        <template v-for="item in (LEFT_MENUS[tm.id] || [])" :key="item.group || item.id">
          <div v-if="item.group" class="sitemap-grp">{{ item.group }}</div>
          <div v-else class="sitemap-lnk" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D (\uB808\uC774\uC5B4 \uC720\uC9C0)"
            @click="($event.ctrlKey || $event.metaKey) ? openNewWindow(item.id) : (navigate(item.id), uiState.sitemapShow=false)"
            @auxclick="$event.button===1 ? openNewWindow(item.id) : null">{{ item.label }}</div>
        </template>
      </div>
    </div>
  </div>

  <!-- \uC990\uACA8\uCC3E\uAE30 \uD328\uB110 -->
  <div v-if="!cfEmbed && uiState.favPanelShow" class="nav-fav-panel" @click.stop>
    <div class="nav-panel-hd">
      <span class="nav-panel-hd-title">\u2605 \uC990\uACA8\uCC3E\uAE30 <span v-if="cfFavList.length" style="font-size:11px;font-weight:400;opacity:.7;">({{ cfFavList.length }})</span></span>
      <button class="nav-panel-close" @click="uiState.favPanelShow=false">\u2715</button>
    </div>
    <div class="nav-fav-body">
      <div v-if="cfFavList.length===0" class="nav-fav-empty">\uC990\uACA8\uCC3E\uAE30\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.<br>\uC88C\uCE21 \uBA54\uB274\uC758 \u2605 \uB97C \uD074\uB9AD\uD574 \uCD94\uAC00\uD558\uC138\uC694.</div>
      <div v-for="fav in cfFavList" :key="fav.id" class="nav-fav-item" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D (\uB808\uC774\uC5B4 \uC720\uC9C0)"
        @click="($event.ctrlKey || $event.metaKey) ? openNewWindow(fav.id) : (navigate(fav.id), uiState.favPanelShow=false)"
        @auxclick="$event.button===1 ? openNewWindow(fav.id) : null">
        <span class="nav-fav-top">{{ fav.topLabel }}</span>
        <span class="nav-fav-sep">\u203A</span>
        <span class="nav-fav-lbl">{{ fav.label }}</span>
        <button class="nav-fav-del" @click.stop="toggleFav(fav.id)" title="\uC0AD\uC81C">\u2715</button>
      </div>
    </div>
  </div>

  <!-- \u2462 BODY -->
  <div class="bo-body" :style="cfEmbed ? 'min-height:100vh;' : ''">

    <!-- Left Sidebar -->
    <nav class="bo-left-nav" v-if="!cfEmbed" :class="{closed: !cfLeftMenuOpen}">
      <div class="left-nav-top">
        <div class="left-nav-group-title">{{ TOP_MENUS.find(t=>t.id===activeTop)?.label }}</div>
        <template v-for="item in (activeTop === 'home' ? [] : (LEFT_MENUS[activeTop] || []))" :key="item?.group || item?.id">
          <div v-if="item.group" class="left-nav-group-header">{{ item.group }}</div>
          <!-- 2026-08-30 lazy \uB85C\uB4DC \uC2E4\uD5D8: \uC544\uC9C1 \uC548 \uC5F4\uC5B4\uBCF8(\uC2A4\uD06C\uB9BD\uD2B8 \uBBF8\uB85C\uB4DC) \uBA54\uB274\uB294 \uD750\uB9AC\uAC8C \uD45C\uC2DC -->
          <div v-else class="left-nav-item left-nav-sub-item"
            :class="{active: cfActiveTabId===item.id, 'left-nav-not-loaded': !cfIsPageLoaded(item.id)}"
            @click="($event.ctrlKey || $event.metaKey) ? openNewWindow(item.id) : navigate(item.id)"
            @auxclick="$event.button===1 ? openNewWindow(item.id) : null"
            :title="'Ctrl+\uD074\uB9AD: \uC0C8\uCC3D'">
            {{ item.label }}
            <span class="left-fav-star" :class="{active: isFav(item.id)}"
              @click.stop="toggleFav(item.id)" :title="isFav(item.id)?'\uC990\uACA8\uCC3E\uAE30 \uD574\uC81C':'\uC990\uACA8\uCC3E\uAE30 \uCD94\uAC00'">\u2605</span>
          </div>
        </template>
        <!-- \u2500\u2500 \uB300\uC2DC\uBCF4\uB4DC \uC88C\uCE21\uBA54\uB274 (\uC804\uBD80 \uB3D9\uC801) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
             \uB300\uC2DC\uBCF4\uB4DC      : SYS \uD2B8\uB9AC(\uC5C6\uC73C\uBA74 HOME_FALLBACK_DASH)
             \uC0AC\uC6A9\uC790 \uB300\uC2DC\uBCF4\uB4DC : USER \uD2B8\uB9AC(\uC5C6\uC73C\uBA74 \uBCFC \uC218 \uC788\uB294 \uAC1C\uC778 \uB300\uC2DC\uBCF4\uB4DC \uC804\uCCB4) -->
        <template v-if="activeTop==='home'">
          <div class="left-nav-group-header">\uB300\uC2DC\uBCF4\uB4DC</div>
          <!-- SYS \uD2B8\uB9AC \uBBF8\uC124\uC815 \u2192 \uAE30\uC874 \uD558\uB4DC\uCF54\uB529 \uD56D\uBAA9 \uADF8\uB300\uB85C -->
          <template v-if="!sysDashMenus.length">
            <div v-for="item in HOME_FALLBACK_DASH" :key="item.id"
              class="left-nav-item left-nav-sub-item" :class="{active: cfActiveTabId===item.id}"
              @click="($event.ctrlKey || $event.metaKey) ? openNewWindow(item.id) : navigate(item.id)"
            @auxclick="$event.button===1 ? openNewWindow(item.id) : null"
              :title="'Ctrl+\uD074\uB9AD: \uC0C8\uCC3D'">
              {{ item.label }}
              <span class="left-fav-star" :class="{active: isFav(item.id)}"
                @click.stop="toggleFav(item.id)" :title="isFav(item.id)?'\uC990\uACA8\uCC3E\uAE30 \uD574\uC81C':'\uC990\uACA8\uCC3E\uAE30 \uCD94\uAC00'">\u2605</span>
            </div>
          </template>
          <template v-for="d in sysDashMenus" :key="d.key">
            <!-- \uD3F4\uB354 \uB178\uB4DC: \uC774\uB3D9 \uB300\uC0C1\uC774 \uC544\uB2C8\uB77C \uBB36\uC74C \uB77C\uBCA8 -->
            <div v-if="d.folder" class="left-nav-item left-nav-sub-item"
              :style="{ paddingLeft: (24 + (d.depth || 0) * 14) + 'px', cursor: 'default', opacity: 0.75 }">
              <span style="margin-right:4px;">\u{1F4C1}</span>{{ d.label }}
            </div>
            <!-- \uC804\uC6A9 \uD654\uBA74\uC774 \uC788\uC73C\uBA74 \uADF8 \uD398\uC774\uC9C0\uB85C, \uC5C6\uC73C\uBA74 \uB300\uC2DC\uBCF4\uB4DC \uBDF0\uC5B4\uB85C -->
            <div v-else class="left-nav-item left-nav-sub-item"
              :class="{active: d.pageId ? cfActiveTabId===d.pageId : cfActiveTabId===('cmDashboardMyMng__'+d.dashboardId)}"
              :style="{ paddingLeft: (24 + (d.depth || 0) * 14) + 'px' }"
              @click="($event.ctrlKey || $event.metaKey) ? (d.pageId ? openNewWindow(d.pageId) : openNewWindow('cmDashboardMyMng', d.dashboardId)) : (d.pageId ? navigate(d.pageId) : navigate('cmDashboardMyMng', { id: d.dashboardId, tabLabel: d.label }))"
              @auxclick="$event.button===1 ? (d.pageId ? openNewWindow(d.pageId) : openNewWindow('cmDashboardMyMng', d.dashboardId)) : null"
              title="\uACF5\uC6A9 \uB300\uC2DC\uBCF4\uB4DC (Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D)">
              <span style="margin-right:4px;">\u{1F4CA}</span>{{ d.label }}
            </div>
          </template>
          <div class="left-nav-group-header">\uC0AC\uC6A9\uC790 \uB300\uC2DC\uBCF4\uB4DC</div>
          <template v-for="d in userDashMenus" :key="d.dashboardId">
            <!-- \uD3F4\uB354 \uB178\uB4DC: \uC774\uB3D9 \uB300\uC0C1\uC774 \uC544\uB2C8\uB77C \uBB36\uC74C \uB77C\uBCA8 -->
            <div v-if="d.folder" class="left-nav-item left-nav-sub-item"
              :style="{ paddingLeft: (24 + (d.depth || 0) * 14) + 'px', cursor: 'default', opacity: 0.75 }">
              <span style="margin-right:4px;">\u{1F4C1}</span>{{ d.dashboardNm }}
            </div>
            <div v-else class="left-nav-item left-nav-sub-item"
              :style="{ paddingLeft: (24 + (d.depth || 0) * 14) + 'px' }"
              @click="($event.ctrlKey || $event.metaKey) ? openNewWindow('cmDashboardMyMng', d.dashboardId) : navigate('cmDashboardMyMng', { id: d.dashboardId, tabLabel: d.dashboardNm })"
              @auxclick="$event.button===1 ? openNewWindow('cmDashboardMyMng', d.dashboardId) : null"
              :title="(d.mine ? '\uB0B4 \uB300\uC2DC\uBCF4\uB4DC' : '\uACF5\uC720\uBC1B\uC740 \uB300\uC2DC\uBCF4\uB4DC') + ' (Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D)'">
              <span style="margin-right:4px;">{{ d.mine ? '\u{1F464}' : '\u{1F517}' }}</span>{{ d.dashboardNm }}
            </div>
          </template>
        </template>
        <!-- \uB3D9\uC801 \uB300\uC2DC\uBCF4\uB4DC \uC544\uB798\uC5D0 \uBD99\uB294 \uBA54\uB274 (\uB300\uC2DC\uBCF4\uB4DC \uAD00\uB9AC \uADF8\uB8F9) -->
        <template v-for="item in (LEFT_MENUS_TAIL[activeTop] || [])" :key="item?.group || item?.id">
          <div v-if="item.group" class="left-nav-group-header">{{ item.group }}</div>
          <!-- 2026-08-30 lazy \uB85C\uB4DC \uC2E4\uD5D8: \uC544\uC9C1 \uC548 \uC5F4\uC5B4\uBCF8(\uC2A4\uD06C\uB9BD\uD2B8 \uBBF8\uB85C\uB4DC) \uBA54\uB274\uB294 \uD750\uB9AC\uAC8C \uD45C\uC2DC -->
          <div v-else class="left-nav-item left-nav-sub-item"
            :class="{active: cfActiveTabId===item.id, 'left-nav-not-loaded': !cfIsPageLoaded(item.id)}"
            @click="($event.ctrlKey || $event.metaKey) ? openNewWindow(item.id) : navigate(item.id)"
            @auxclick="$event.button===1 ? openNewWindow(item.id) : null"
            :title="'Ctrl+\uD074\uB9AD: \uC0C8\uCC3D'">
            {{ item.label }}
            <span class="left-fav-star" :class="{active: isFav(item.id)}"
              @click.stop="toggleFav(item.id)" :title="isFav(item.id)?'\uC990\uACA8\uCC3E\uAE30 \uD574\uC81C':'\uC990\uACA8\uCC3E\uAE30 \uCD94\uAC00'">\u2605</span>
          </div>
        </template>
      </div>

      <!-- \uC5F4\uB9B0\uD654\uBA74 / \uC990\uACA8\uCC3E\uAE30 (\uD558\uB2E8 \uACE0\uC815) -->
      <div class="left-nav-open-section">
        <!-- \uBAA9\uB85D (\uC704) -->
        <div class="left-nav-open-list">
          <!-- \uC990\uACA8\uCC3E\uAE30 \uBAA9\uB85D -->
          <template v-if="sidebarTab==='fav'">
            <div v-if="cfFavList.length===0" class="left-nav-open-empty">\uC990\uACA8\uCC3E\uAE30\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
            <div v-for="fav in cfFavList" :key="fav.id"
              class="left-nav-open-item" :class="{active: cfActiveTabId===fav.id}" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
              @click="($event.ctrlKey || $event.metaKey) ? openNewWindow(fav.id) : navigate(fav.id)"
              @auxclick="$event.button===1 ? openNewWindow(fav.id) : null">
              <span @click.stop="toggleFavKeep(fav.id)"
                :title="favKeepSet.has(fav.id) ? '\uACE0\uC815 \uD574\uC81C' : '\uACE0\uC815 (\uC5F4 \uB54C \uC0C1\uD0DC \uC720\uC9C0)'"
                style="font-size:9px;cursor:pointer;margin-right:4px;flex-shrink:0;transition:all .15s;"
                :style="favKeepSet.has(fav.id) ? 'opacity:1;color:#1565c0;' : 'opacity:.22;color:#999;'">\u{1F4CC}</span>
              <span class="left-nav-open-path">
                <span class="left-nav-open-group">{{ fav.topLabel }}</span>
                <span class="left-nav-open-sep"> \u203A </span>
                <span class="left-nav-open-label">{{ fav.label }}</span>
              </span>
              <span class="left-fav-star active" @click.stop="toggleFav(fav.id)" title="\uC990\uACA8\uCC3E\uAE30 \uD574\uC81C">\u2605</span>
            </div>
          </template>
          <!-- \uC5F4\uB9B0\uD654\uBA74 \uBAA9\uB85D -->
          <template v-if="sidebarTab==='open'">
            <div v-if="cfOpenTabsWithGroup.length===0" class="left-nav-open-empty">\uC5F4\uB9B0 \uD654\uBA74\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
            <div v-for="tab in cfOpenTabsWithGroup" :key="tab.id"
              class="left-nav-open-item" :class="{active: cfActiveTabId===tab.id}" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
              @click="($event.ctrlKey || $event.metaKey) ? openNewWindow(tab.id) : navigate(tab.id)"
              @auxclick="$event.button===1 ? openNewWindow(tab.id) : null">
              <span class="left-nav-open-path">
                <span class="left-nav-open-group">{{ tab.topLabel }}</span>
                <span class="left-nav-open-sep"> \u203A </span>
                <span class="left-nav-open-label">{{ tab.label }}</span>
              </span>
              <span class="left-fav-star" :class="{active: isFav(tab.id)}"
                @click.stop="toggleFav(tab.id)" :title="isFav(tab.id)?'\uC990\uACA8\uCC3E\uAE30 \uD574\uC81C':'\uC990\uACA8\uCC3E\uAE30 \uCD94\uAC00'">\u2605</span>
              <span class="left-nav-open-close" @click.stop="closeTab(tab.id, $event)">\u2715</span>
            </div>
          </template>
        </div>
        <!-- \uD0ED \uBC84\uD2BC (\uCD5C\uD558\uB2E8 \uACE0\uC815) -->
        <div class="left-nav-section-tabs">
          <button class="left-nav-section-tab" :class="{active: sidebarTab==='fav'}"
            @click="sidebarTab='fav'">\u2605 \uC990\uACA8\uCC3E\uAE30</button>
          <button class="left-nav-section-tab" :class="{active: sidebarTab==='open'}"
            @click="sidebarTab='open'">\uC5F4\uB9B0\uD654\uBA74</button>
        </div>
        <!-- \uC5F0\uAD00\uC0AC\uC774\uD2B8 (\uBCC4\uB3C4 \uD589) -->
        <div style="padding:6px 10px;border-top:1px solid #eef0f3;background:#fafbfc;">
          <button @click.stop="toggleRelatedSite"
            style="width:100%;display:flex;align-items:center;gap:6px;padding:6px 10px;background:#fff;border:1px solid #eee;border-radius:6px;cursor:pointer;font-size:12px;color:#555;"
            title="\uC5F0\uAD00\uC0AC\uC774\uD2B8 \uC5F4\uAE30">
            <span>\u{1F517} \uC5F0\uAD00\uC0AC\uC774\uD2B8</span>
            <span style="margin-left:auto;display:inline-flex;gap:5px;font-family:monospace;">
              <span :style="{fontWeight:800,color: currentFoSiteNo==='03'?'#7b1fa2':currentFoSiteNo==='02'?'#2e7d6b':currentFoSiteNo==='9999'?'#888':'#9f2946'}">{{ currentFoSiteNo || '-' }}</span>
              <span :style="{fontWeight:800,color: currentBoSiteNo==='03'?'#7b1fa2':currentBoSiteNo==='02'?'#2e7d6b':currentBoSiteNo==='9999'?'#888':'#9f2946'}">{{ currentBoSiteNo || '-' }}</span>
            </span>
            <span style="font-size:9px;color:#bbb;">\u25BE</span>
          </button>
        </div>

        <!-- \uC5F0\uAD00\uC0AC\uC774\uD2B8 \uD31D\uC5C5 \uB808\uC774\uC5B4 -->
        <div v-if="uiState.relatedSiteOpen"
          @click="uiState.relatedSiteOpen=false"
          style="position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,0.25);"></div>
        <div v-if="uiState.relatedSiteOpen"
          @click.stop
          style="position:fixed;left:12px;bottom:56px;z-index:9999;width:360px;max-height:75vh;overflow:auto;background:#fff;border:1px solid #ffc9d6;border-radius:12px;box-shadow:0 20px 50px rgba(0,0,0,0.3);">
          <div style="padding:12px 14px;border-bottom:1px solid #ffc9d6;background:linear-gradient(135deg,#fff0f4,#ffe4ec);display:flex;align-items:center;justify-content:space-between;">
            <span style="font-weight:800;font-size:13px;color:#9f2946;"><span style="color:#e8587a;font-size:9px;margin-right:6px;">\u25CF</span>\u{1F517} \uC5F0\uAD00\uC0AC\uC774\uD2B8</span>
            <button @click="uiState.relatedSiteOpen=false" style="background:none;border:none;font-size:13px;color:#9f2946;cursor:pointer;padding:2px 6px;border-radius:4px;">\u2715</button>
          </div>
          <div style="padding:12px;">
            <!-- _SITE_NO (FO / BO \uBD84\uB9AC \uB9C1\uD06C) -->
            <div style="background:#fafbfc;border:1px solid #eef0f3;border-radius:10px;padding:12px;margin-bottom:12px;">
              <div style="font-size:12px;font-weight:800;color:#2e7d6b;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #def0e8;">\u{1F308} _SITE_NO <span style="font-size:10.5px;color:#888;font-weight:600;">(FO: {{ currentFoSiteNo || '-' }}, BO: {{ currentBoSiteNo || '-' }})</span></div>
              <div style="display:flex;flex-direction:column;gap:4px;">
                <div v-for="p in SITE_PAIR_MENU" :key="p.fo+'_'+p.bo"
                  style="display:flex;gap:6px;align-items:center;">
                  <button type="button" @click="goFoSite(p.fo)"
                    :style="{flex:1,display:'inline-flex',alignItems:'center',gap:'6px',padding:'6px 10px',background: currentFoSiteNo===p.fo?'#e0f2ec':'transparent',border:'1px solid '+(currentFoSiteNo===p.fo?'#a3d4be':'#e5eaea'),borderRadius:'6px',cursor:'pointer',fontSize:'11.5px',fontFamily:'monospace',color: currentFoSiteNo===p.fo?'#2e7d6b':'#444',fontWeight: currentFoSiteNo===p.fo?700:500,transition:'all .12s'}"
                    onmouseover="this.style.background='#e0f2ec';this.style.color='#2e7d6b';"
                    onmouseout="if(this.dataset.active!=='1'){this.style.background='transparent';this.style.color='#444';}"
                    :data-active="currentFoSiteNo===p.fo?'1':'0'"
                    title="index.html \uC0C8\uCC3D \uC624\uD508">
                    <span>{{ currentFoSiteNo===p.fo?'\u25CF':'\u25CB' }}</span>
                    <span>FO={{ p.fo }}</span>
                    <span style="margin-left:auto;font-size:10px;color:#aaa;">\u2197</span>
                  </button>
                  <button type="button" @click="goBoSite(p.bo)"
                    :style="{flex:1,display:'inline-flex',alignItems:'center',gap:'6px',padding:'6px 10px',background: currentBoSiteNo===p.bo?'#f3e5f5':'transparent',border:'1px solid '+(currentBoSiteNo===p.bo?'#ce93d8':'#e5eaea'),borderRadius:'6px',cursor:'pointer',fontSize:'11.5px',fontFamily:'monospace',color: currentBoSiteNo===p.bo?'#7b1fa2':'#444',fontWeight: currentBoSiteNo===p.bo?700:500,transition:'all .12s'}"
                    onmouseover="this.style.background='#f3e5f5';this.style.color='#7b1fa2';"
                    onmouseout="if(this.dataset.active!=='1'){this.style.background='transparent';this.style.color='#444';}"
                    :data-active="currentBoSiteNo===p.bo?'1':'0'"
                    title="bo.html \uC0C8\uCC3D \uC624\uD508">
                    <span>{{ currentBoSiteNo===p.bo?'\u25CF':'\u25CB' }}</span>
                    <span>BO={{ p.bo }}</span>
                    <span style="margin-left:auto;font-size:10px;color:#aaa;">\u2197</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- dispUi -->
            <div style="background:#fafbfc;border:1px solid #eef0f3;border-radius:10px;padding:12px;">
              <div style="font-size:12px;font-weight:800;color:#c2410c;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #f5e8de;">\u{1F5A5} dispUi (\uC0D8\uD50C)</div>
              <div style="display:flex;flex-direction:column;gap:2px;">
                <div v-for="it in DISP_LINKS" :key="it.hash"
                  style="display:flex;align-items:center;gap:6px;padding:4px 6px;">
                  <span style="width:18px;text-align:center;font-size:12.5px;">{{ it.icon }}</span>
                  <span style="flex:1;font-size:12.5px;color:#333;">{{ it.label }}</span>
                  <button @click="openRelatedLink('fo-disp-ui-pop.html' + it.hash)"
                    style="padding:3px 9px;font-size:11px;font-weight:600;background:#e0f2fe;color:#0369a1;border:1px solid #bae6fd;border-radius:5px;cursor:pointer;"
                    title="\uC0AC\uC6A9\uC790 \uBBF8\uB9AC\uBCF4\uAE30">\uC0AC\uC6A9\uC790 \u2197</button>
                  <button @click="openRelatedLink('bo-disp-ui-pop.html' + it.hash)"
                    style="padding:3px 9px;font-size:11px;font-weight:600;background:#fef3eb;color:#c2410c;border:1px solid #f5e8de;border-radius:5px;cursor:pointer;"
                    title="\uAD00\uB9AC\uC790 \uBBF8\uB9AC\uBCF4\uAE30">\uAD00\uB9AC\uC790 \u2197</button>
                </div>
              </div>
            </div>

            <!-- NAS \uBC30\uD3EC URL(\uD3EC\uD2B8/\uC11C\uBE0C\uB3C4\uBA54\uC778/gateway) \u2014 2026-09-06(\uC694\uCCAD\uC0AC\uD56D) -->
            <div style="background:#fafbfc;border:1px solid #eef0f3;border-radius:10px;padding:12px;margin-top:12px;">
              <div style="font-size:12px;font-weight:800;color:#1a1a2e;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #e5e5ea;">\u{1F517} NAS \uBC30\uD3EC URL</div>
              <table style="width:100%;border-collapse:collapse;font-size:11px;">
                <thead>
                  <tr>
                    <th style="text-align:left;padding:4px 6px;color:#999;font-weight:600;"></th>
                    <th v-for="col in DEPLOY_COLS" :key="col.key" style="text-align:center;padding:4px 6px;color:#555;font-weight:700;">{{ col.label }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in DEPLOY_ROWS" :key="row.key">
                    <td style="padding:4px 6px;color:#666;font-weight:600;white-space:nowrap;">{{ row.label }}</td>
                    <td v-for="col in DEPLOY_COLS" :key="col.key" style="padding:3px 4px;text-align:center;">
                      <button type="button" @click="goDeployLink(col.key, row.key)"
                        :title="DEPLOY_LINKS[col.key][row.key]"
                        style="width:100%;padding:5px 4px;font-size:11px;font-weight:600;background:#eef6ff;color:#1565c0;border:1px solid #d3e6fb;border-radius:5px;cursor:pointer;transition:all .12s;"
                        onmouseover="this.style.background='#dbeafe';this.style.borderColor='#93c5fd';"
                        onmouseout="this.style.background='#eef6ff';this.style.borderColor='#d3e6fb';">\uC5F4\uAE30</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="bo-main" ref="boMainRef">
      <!-- \u2461 TAB BAR -->
      <div class="bo-tab-bar-wrap" v-if="!cfEmbed && tabBarOpen">
        <button class="tab-scroll-btn" @click="scrollTabs(-1)" title="\uC67C\uCABD">\u2039</button>
        <div class="bo-tab-bar" ref="tabBarRef">
          <div v-for="tab in openTabs" :key="tab.id" :data-tab-id="tab.id"
            class="bo-tab" :class="{active: cfActiveTabId===tab.id}"
            @click="navigate(tab.id)"
            @contextmenu.prevent="showCtxMenu($event, tab.id)">
            <span @click.stop="toggleKeep(tab.id)"
              :title="keptTabIds.has(tab.id) ? '\uACE0\uC815 \uD574\uC81C' : (cfEffectiveKeptIds.has(tab.id) ? '\uC790\uB3D9 \uACE0\uC815\uB428 (\uC5F4\uB9B0 \uD0ED 10\uAC1C \uBBF8\uB9CC) \xB7 \uD074\uB9AD \uC2DC \uC218\uB3D9 \uACE0\uC815' : '\uACE0\uC815 (\uD0ED \uC804\uD658 \uC2DC \uC0C1\uD0DC \uC720\uC9C0)')"
              style="font-size:9px;cursor:pointer;margin-right:1px;transition:all .15s;flex-shrink:0;line-height:1;"
              :style="cfEffectiveKeptIds.has(tab.id) ? 'opacity:1;color:#1565c0;' : 'opacity:.2;color:#999;'">\u{1F4CC}</span>
            <span class="tab-label" :class="{'tab-label-lg': tab.label.length > 10}">{{ tab.label }}</span>
            <span class="tab-close-btn" @click.stop="closeTab(tab.id, $event)">\u2715</span>
          </div>
        </div>
        <button class="tab-scroll-btn" @click="scrollTabs(1)" title="\uC624\uB978\uCABD">\u203A</button>
      </div>
      <div class="bo-wrap">
        <!-- \uCD08\uAE30\uD654 \uC911 \uB85C\uB529 \uD45C\uC2DC -->
        <div v-if="!boInitReady" style="display:flex;align-items:center;justify-content:center;height:200px;color:#aaa;font-size:14px;">
          <span>\uCD08\uAE30\uD654 \uC911...</span>
        </div>
        <!-- \uBE44\uB85C\uADF8\uC778 \uC2DC \uBCF8\uBB38(\uB370\uC774\uD130) \uBBF8\uB80C\uB354 \u2014 \uC804\uC6A9 \uB85C\uADF8\uC778 \uD654\uBA74(page \uBAA8\uB4DC)\uC774 \uC790\uB3D9 \uD45C\uC2DC\uB428 -->
        <div v-else-if="!cfIsLoggedIn" style="display:flex;align-items:center;justify-content:center;height:60vh;color:#bbb;font-size:14px;">
          <span>\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.</span>
        </div>
        <template v-else>
          <!-- \uACE0\uC815\uB41C \uD0ED(\uC218\uB3D9 \u{1F4CC} + \uD0ED 10\uAC1C \uBBF8\uB9CC \uC790\uB3D9\uACE0\uC815): v-show\uB85C \uD56D\uC0C1 \uB9C8\uC6B4\uD2B8 \uC720\uC9C0, \uC804\uD658 \uC2DC \uC0C1\uD0DC \uBCF4\uC874.
               v-show\uB97C \uB3D9\uC801 <component :is> \uC5D0 \uC9C1\uC811 \uAC78\uBA74(\uD2B9\uD788 \uC5EC\uB7EC \uAC1C\uAC00 \uAC19\uC740 \uCEF4\uD3EC\uB10C\uD2B8 \uD0C0\uC785\uC744 \uACF5\uC720\uD558\uAC70\uB098
               \uB0B4\uBD80\uC801\uC73C\uB85C \uC7AC\uC0AC\uC6A9\uB420 \uB54C) \uC228\uAE40\uC774 \uC548 \uBA39\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5B4(2026-08-22 \uBC1C\uACAC \u2014 \uBE44\uD65C\uC131 \uD0ED \uB0B4\uC6A9\uC774
               \uD654\uBA74\uC5D0 \uAC19\uC774 \uACB9\uCCD0 \uBCF4\uC784), \uC21C\uC218 <div> \uB798\uD37C\uC5D0 v-show\uB97C \uAC78\uACE0 \uADF8 \uC548\uC5D0\uC11C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB80C\uB354\uD55C\uB2E4. -->
          <div v-for="keptId in cfEffectiveKeptIds" :key="'kept_' + keptId" v-show="cfActiveTabId === keptId" style="display:contents;">
            <!-- \uD654\uBA74\uB9C8\uB2E4 \uAC1C\uBCC4 v-if \uBD84\uAE30\uB97C \uB298\uB9AC\uB294 \uB300\uC2E0(2026-08-22 pdProdMng/Dtl/Hist 3\uAC1C\uB9CC \uC784\uC2DC\uB85C
                 \uADF8\uB807\uAC8C \uD558\uB2E4 \uD655\uC7A5\uC131 \uBB38\uC81C\uB85C \uD3D0\uAE30) \uACF5\uD1B5\uC73C\uB85C \uC4F0\uC77C \uBC95\uD55C prop\uC744 \uC804\uBD80 \uD55C \uBC88\uC5D0 \uB0B4\uB824\uC900\uB2E4.
                 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC120\uC5B8 \uC548 \uD55C prop\uC740 Vue\uAC00 \uC870\uC6A9\uD788 \uBB34\uC2DC(\uB610\uB294 \uB8E8\uD2B8\uC5D0 \uBBF8\uC0AC\uC6A9 \uC18D\uC131\uC73C\uB85C\uB9CC \uB0A8\uC74C)\uD558\uBBC0\uB85C
                 \uC548\uC804 \u2014 \uD654\uBA74\uC774 \uD544\uC694\uD55C prop\uB9CC \uC120\uC5B8\uD574 \uACE8\uB77C \uC4F0\uBA74 \uB41C\uB2E4(\uC0C8 \uD654\uBA74 \uCD94\uAC00\uB3FC\uB3C4 \uC5EC\uAE30 \uC218\uC815 \uBD88\uD544\uC694). -->
            <component
              :is="PAGE_COMP_MAP[toPageFromTabId(keptId)]"
              :navigate="navigate"
              :dtl-id="toIdFromTabId(keptId)"
              :prod-id="toIdFromTabId(keptId)"
              :dtl-mode="standaloneDtlMode"
              :init-search-value="initSearchValue"
              :open-new-window="openNewWindow"
              :set-tab-label="(label) => setTabLabel(keptId, label)"
              />
          </div>
          <!-- \uBE44\uACE0\uC815 \uD604\uC7AC \uD0ED: \uC804\uD658 \uC2DC \uC7AC\uB9C8\uC6B4\uD2B8 -->
          <div v-if="!cfEffectiveKeptIds.has(cfActiveTabId)" :key="cfActiveTabId + '_' + (refreshKeys[cfActiveTabId] || 0)" style="display:contents;">
            <component v-if="page==='dashboard'" :is="cfDashboardComp" :navigate="navigate" />
            <dashboard-bo-app-monitor v-else-if="page==='appMonitorDashboard'" :navigate="navigate" :show-toast="showToast" />
            <mb-member-mng  v-else-if="page==='mbMemberMng'"  :navigate="navigate" :init-search-value="initSearchValue" :open-new-window="openNewWindow" />
            <mb-member-dtl  v-else-if="page==='mbMemberDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <pd-prod-mng  v-else-if="page==='pdProdMng'"  :navigate="navigate" :init-search-value="initSearchValue" :open-new-window="openNewWindow" />
            <pd-prod-dtl  v-else-if="page==='pdProdDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode"
              :set-tab-label="(label) => setTabLabel(cfActiveTabId, label)" />
            <pd-prod-hist v-else-if="page==='pdProdHist'" :navigate="navigate" :prod-id="dtlId" />
            <od-order-kanban v-else-if="page==='odOrderKanban'" :key="'kanban_' + dtlId" :order-id="dtlId" :claim-id="kanbanClaimId" mode="bo" :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <od-order-mng  v-else-if="page==='odOrderMng'"  :navigate="navigate" :init-search-value="initSearchValue" :open-new-window="openNewWindow" />
            <od-order-item-mng  v-else-if="page==='odOrderItemMng'"  :navigate="navigate" />
            <od-order-dtl  v-else-if="page==='odOrderDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <od-order-item-dtl  v-else-if="page==='odOrderItemDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" :active="true" />
            <od-claim-mng  v-else-if="page==='odClaimMng'"  :navigate="navigate" :init-search-value="initSearchValue" :open-new-window="openNewWindow" />
            <od-claim-dtl  v-else-if="page==='odClaimDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <od-dliv-mng  v-else-if="page==='odDlivMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <od-dliv-dtl  v-else-if="page==='odDlivDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <od-cart-mng  v-else-if="page==='odCartMng'"  :navigate="navigate" />
            <pm-coupon-mng  v-else-if="page==='pmCouponMng'"  :navigate="navigate" :init-search-value="initSearchValue" :open-new-window="openNewWindow" />
            <pm-coupon-dtl  v-else-if="page==='pmCouponDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <pm-cache-mng  v-else-if="page==='pmCacheMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <pm-discnt-mng v-else-if="page==='pmDiscntMng'" :navigate="navigate" :open-new-window="openNewWindow" />
            <pm-discnt-dtl v-else-if="page==='pmDiscntDtl'" :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <pm-save-mng  v-else-if="page==='pmSaveMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <pm-save-dtl  v-else-if="page==='pmSaveDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <pm-gift-mng  v-else-if="page==='pmGiftMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <pm-gift-dtl  v-else-if="page==='pmGiftDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <pm-voucher-mng v-else-if="page==='pmVoucherMng'" :navigate="navigate" :open-new-window="openNewWindow" />
            <pm-voucher-dtl  v-else-if="page==='pmVoucherDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <pm-cache-dtl  v-else-if="page==='pmCacheDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <dp-disp-panel-mng  v-else-if="page==='dpDispPanelMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <dp-disp-area-preview  v-else-if="page==='dpDispAreaPreview'"  :navigate="navigate" />
            <dp-disp-ui-preview  v-else-if="page==='dpDispUiPreview'"  :navigate="navigate" />
            <dp-disp-panel-preview v-else-if="page==='dpDispPanelPreview'" :navigate="navigate" />
            <dp-disp-widget-preview v-else-if="page==='dpDispWidgetPreview'" :navigate="navigate" />
            <dp-disp-area-mng  v-else-if="page==='dpDispAreaMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <dp-disp-area-dtl  v-else-if="page==='dpDispAreaDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <dp-disp-ui-mng  v-else-if="page==='dpDispUiMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <dp-disp-ui-dtl  v-else-if="page==='dpDispUiDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <dp-disp-widget-mng  v-else-if="page==='dpDispWidgetMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <dp-disp-widget-dtl  v-else-if="page==='dpDispWidgetDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <dp-disp-panel-dtl  v-else-if="page==='dpDispPanelDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <dp-disp-widget-lib-mng  v-else-if="page==='dpDispWidgetLibMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <dp-disp-widget-lib-dtl  v-else-if="page==='dpDispWidgetLibDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <dp-disp-widget-lib-preview v-else-if="page==='dpDispWidgetLibPreview'" :navigate="navigate" />
            <pm-event-mng  v-else-if="page==='pmEventMng'"  :navigate="navigate" :init-search-value="initSearchValue" :open-new-window="openNewWindow" />
            <pm-event-dtl  v-else-if="page==='pmEventDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <pm-plan-mng  v-else-if="page==='pmPlanMng'"  :navigate="navigate" :init-search-value="initSearchValue" :open-new-window="openNewWindow" />
            <pm-plan-dtl  v-else-if="page==='pmPlanDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <mb-cust-info-mng v-else-if="page==='mbCustInfoMng'" :navigate="navigate" />
            <sy-contact-mng v-else-if="page==='syContactMng'" :navigate="navigate" :open-new-window="openNewWindow" />
            <sy-contact-dtl v-else-if="page==='syContactDtl'" :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <cm-chatt-mng     v-else-if="page==='cmChattMng'"     :navigate="navigate" :open-new-window="openNewWindow" />
            <cm-chatt-dtl     v-else-if="page==='cmChattDtl'"     :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <cm-chatt-kanban  v-else-if="page==='cmChattKanban'"  :navigate="navigate" />
            <sy-site-mng  v-else-if="page==='sySiteMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <sy-site-dtl  v-else-if="page==='sySiteDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <sy-code-mng  v-else-if="page==='syCodeMng'"  :navigate="navigate" />
            <sy-code-dtl  v-else-if="page==='syCodeDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <sy-brand-mng  v-else-if="page==='syBrandMng'"  :navigate="navigate" />
            <md-cb-symbol-mng  v-else-if="page==='mdCbSymbolMng'"  :navigate="navigate" />
            <md-cb-yarn-mng  v-else-if="page==='mdCbYarnMng'"  :navigate="navigate" />
            <md-cb-pattern-mng  v-else-if="page==='mdCbPatternMng'"  :navigate="navigate" />
            <md-sg-project-mng  v-else-if="page==='mdSgProjectMng'"  :navigate="navigate" />
            <md-sg-gen-hist-mng  v-else-if="page==='mdSgGenHistMng'"  :navigate="navigate"  :project-id="dtlId" />
            <md-sg-download-hist-mng  v-else-if="page==='mdSgDownloadHistMng'"  :navigate="navigate" />
            <md-sg-stack-mng  v-else-if="page==='mdSgStackMng'"  :navigate="navigate" />
            <sy-attach-mng  v-else-if="page==='syAttachMng'"  :navigate="navigate" />
            <sy-template-mng v-else-if="page==='syTemplateMng'" :navigate="navigate" :open-new-window="openNewWindow" />
            <sy-template-dtl v-else-if="page==='syTemplateDtl'" :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <sy-vendor-mng  v-else-if="page==='syVendorMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <sy-vendor-user-mng v-else-if="page==='syVendorUserMng'" :navigate="navigate" />
            <sy-vendor-info-mng v-else-if="page==='syVendorInfoMng'" :navigate="navigate" />
            <sy-vendor-dtl  v-else-if="page==='syVendorDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <pd-category-mng v-else-if="page==='pdCategoryMng'" :navigate="navigate" />
            <pd-category-dtl v-else-if="page==='pdCategoryDtl'" :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <pd-category-prod-mng v-else-if="page==='pdCategoryProdMng'" :navigate="navigate" />
            <pd-opt-code-mng-page v-else-if="page==='pdOptCodeMng'" :navigate="navigate" />
            <sy-user-mng  v-else-if="page==='syUserMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <sy-user-dtl  v-else-if="page==='syUserDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <sy-batch-mng  v-else-if="page==='syBatchMng'"  :navigate="navigate" />
            <sy-batch-dtl  v-else-if="page==='syBatchDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <sy-dept-mng  v-else-if="page==='syDeptMng'"  :navigate="navigate" />
            <sy-menu-mng  v-else-if="page==='syMenuMng'"  :navigate="navigate" />
            <sy-role-mng  v-else-if="page==='syRoleMng'"  :navigate="navigate" />
            <cm-notice-mng  v-else-if="page==='cmNoticeMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <cm-notice-dtl  v-else-if="page==='cmNoticeDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <cm-faq-mng  v-else-if="page==='cmFaqMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <cm-faq-dtl  v-else-if="page==='cmFaqDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <cm-blog-mng  v-else-if="page==='cmBlogMng'"  :navigate="navigate" />
            <cm-dashboard-mng  v-else-if="page==='cmDashboardMng'"  :navigate="navigate" />
            <cm-dashboard-item-mng  v-else-if="page==='cmDashboardItemMng'"  :navigate="navigate" />
            <cm-dashboard-data-mng  v-else-if="page==='cmDashboardDataMng'"  :navigate="navigate" />
            <cm-dashboard-layout-mng  v-else-if="page==='cmDashboardLayoutMng'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <cm-dashboard-my-mng  v-else-if="page==='cmDashboardMyMng'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <cm-dashboard-menu-mng  v-else-if="page==='cmDashboardMenuMng'"  :navigate="navigate" />
            <cm-dashboard-sys-menu-mng v-else-if="page==='cmDashboardSysMenuMng'" :navigate="navigate" />
            <cm-popup-mng  v-else-if="page==='cmPopupMng'"  :navigate="navigate" />
            <sy-alarm-mng  v-else-if="page==='syAlarmMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <sy-alarm-dtl  v-else-if="page==='syAlarmDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <sy-prop-mng  v-else-if="page==='syPropMng'"  :navigate="navigate" />
            <sy-path-mng  v-else-if="page==='syPathMng'"  :navigate="navigate" />
            <sy-bbm-mng  v-else-if="page==='syBbmMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <sy-bbm-dtl  v-else-if="page==='syBbmDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <sy-bbs-mng  v-else-if="page==='syBbsMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <sy-bbs-dtl  v-else-if="page==='syBbsDtl'"  :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <sy-i18n-mng  v-else-if="page==='syI18nMng'"  :navigate="navigate" />
            <!-- \u2500\u2500 \uD68C\uC6D0 \uCD94\uAC00 \u2500\u2500 -->
            <mb-mem-grade-mng  v-else-if="page==='mbMemGradeMng'"  :navigate="navigate" />
            <mb-mem-group-mng  v-else-if="page==='mbMemGroupMng'"  :navigate="navigate" />
            <!-- \u2500\u2500 \uC0C1\uD488 \uCD94\uAC00 \u2500\u2500 -->
            <pd-dliv-tmplt-mng  v-else-if="page==='pdDlivTmpltMng'"  :navigate="navigate" />
            <pd-single-prod-mng  v-else-if="page==='pdSingleProdMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <pd-option-prod-mng  v-else-if="page==='pdOptionProdMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <pd-group-prod-mng  v-else-if="page==='pdGroupProdMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <pd-set-prod-mng  v-else-if="page==='pdSetProdMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <pd-gift-prod-mng  v-else-if="page==='pdGiftProdMng'"  :navigate="navigate" :open-new-window="openNewWindow" />
            <pd-review-mng  v-else-if="page==='pdReviewMng'"  :navigate="navigate" />
            <pd-qna-mng  v-else-if="page==='pdQnaMng'"  :navigate="navigate" />
            <pd-restock-noti-mng v-else-if="page==='pdRestockNotiMng'" :navigate="navigate" />
            <pd-tag-mng  v-else-if="page==='pdTagMng'"  :navigate="navigate" />
            <!-- \u2500\u2500 \uC815\uC0B0 \u2500\u2500 -->
            <st-config-mng  v-else-if="page==='stConfigMng'"  :navigate="navigate" />
            <st-dliv-fee-policy-mng v-else-if="page==='stDlivFeePolicyMng'" :navigate="navigate" />
            <st-raw-mng  v-else-if="page==='stRawMng'"  :navigate="navigate" />
            <st-settle-adj-mng  v-else-if="page==='stSettleAdjMng'"  :navigate="navigate" />
            <st-settle-etc-adj-mng v-else-if="page==='stSettleEtcAdjMng'" :navigate="navigate" />
            <st-settle-close-mng v-else-if="page==='stSettleCloseMng'"  :navigate="navigate" :init-search-value="initSearchValue" />
            <st-settle-pay-mng  v-else-if="page==='stSettlePayMng'"  :navigate="navigate" />
            <st-status-mng  v-else-if="page==='stStatusMng'"  :navigate="navigate" />
            <st-recon-order-mng  v-else-if="page==='stReconOrderMng'"  :navigate="navigate" />
            <st-recon-pay-mng  v-else-if="page==='stReconPayMng'"  :navigate="navigate" />
            <st-recon-claim-mng  v-else-if="page==='stReconClaimMng'"  :navigate="navigate" />
            <st-recon-vendor-mng v-else-if="page==='stReconVendorMng'"  :navigate="navigate" />
            <st-erp-gen-mng  v-else-if="page==='stErpGenMng'"  :navigate="navigate" />
            <st-erp-view-mng  v-else-if="page==='stErpViewMng'"  :navigate="navigate" />
            <st-erp-recon-mng  v-else-if="page==='stErpReconMng'"  :navigate="navigate" />
            <sy-member-login-hist v-else-if="page==='syMemberLoginHist'" :navigate="navigate" />
            <sy-user-login-hist  v-else-if="page==='syUserLoginHist'"  :navigate="navigate" />
            <sy-exceldown-mng    v-else-if="page==='syExceldownMng'"    :navigate="navigate" :dtl-id="dtlId" :dtl-mode="standaloneDtlMode" />
            <sy-api-log-mng      v-else-if="page==='syApiLogMng'"      :navigate="navigate" />
            <sy-send-msg-log-mng v-else-if="page==='sySendMsgLog'"     :navigate="navigate" />
            <sy-postman  v-else-if="page==='syPostman'"  :navigate="navigate" />
            <zd-inf-dashboard v-else-if="page==='zdInfDashboard'" :navigate="navigate" :show-toast="showToast" />
            <zd-store  v-else-if="page==='zdStore'"  :navigate="navigate" />
            <zd-local-storage  v-else-if="page==='zdLocalStorage'"  :navigate="navigate" />
            <zd-test-sns-login-kakao  v-else-if="page==='zdTestSnsLoginKakao'"  :navigate="navigate" :show-toast="showToast" />
            <zd-test-sns-login-google v-else-if="page==='zdTestSnsLoginGoogle'" :navigate="navigate" :show-toast="showToast" />
            <zd-test-pay-toss-widget  v-else-if="page==='zdTestPayTossWidget'"  :navigate="navigate" :show-toast="showToast" />
            <zd-test-pay-toss-brandpay v-else-if="page==='zdTestPayTossBrandpay'" :navigate="navigate" :show-toast="showToast" />
            <zd-test-pay-kakaopay     v-else-if="page==='zdTestPayKakaopay'"    :navigate="navigate" :show-toast="showToast" />
            <zd-test-pay-naverpay     v-else-if="page==='zdTestPayNaverpay'"    :navigate="navigate" :show-toast="showToast" />
            <zd-test-map-kakao        v-else-if="page==='zdTestMapKakao'"       :navigate="navigate" :show-toast="showToast" />
            <zd-test-map-naver        v-else-if="page==='zdTestMapNaver'"       :navigate="navigate" :show-toast="showToast" />
            <zd-test-map-google       v-else-if="page==='zdTestMapGoogle'"      :navigate="navigate" :show-toast="showToast" />
            <zd-test-mail-smtp        v-else-if="page==='zdTestMailSmtp'"       :navigate="navigate" :show-toast="showToast" />
            <zd-test-sms              v-else-if="page==='zdTestSms'"            :navigate="navigate" :show-toast="showToast" />
            <zd-test-push-alim-fcm          v-else-if="page==='zdTestPushAlimFcm'"          :navigate="navigate" :show-toast="showToast" />
            <zd-test-push-alim-apns         v-else-if="page==='zdTestPushAlimApns'"         :navigate="navigate" :show-toast="showToast" />
            <zd-test-sns-login-naver        v-else-if="page==='zdTestSnsLoginNaver'"        :navigate="navigate" :show-toast="showToast" />
            <zd-test-ai-chatbot             v-else-if="page==='zdTestAiChatbot'"            :navigate="navigate" :show-toast="showToast" />
            <zd-test-chatting-kakao-channel v-else-if="page==='zdTestChattingKakaoChannel'" :navigate="navigate" :show-toast="showToast" />
            <zd-test-share-kakao            v-else-if="page==='zdTestShareKakao'"            :navigate="navigate" :show-toast="showToast" />
            <zd-test-chatting-web-socket    v-else-if="page==='zdTestChattingWebSocket'"    :navigate="navigate" :show-toast="showToast" />
            <zd-test-app-msg-send-receiv    v-else-if="page==='zdTestAppMsgSendReceiv'"    :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-member-mng  v-else-if="page==='zdSimulMemberMng'"  :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-coupon-mng  v-else-if="page==='zdSimulCouponMng'"  :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-discnt-mng  v-else-if="page==='zdSimulDiscntMng'"  :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-save-mng    v-else-if="page==='zdSimulSaveMng'"    :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-plan-mng    v-else-if="page==='zdSimulPlanMng'"    :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-event-mng   v-else-if="page==='zdSimulEventMng'"   :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-prod-mng    v-else-if="page==='zdSimulProdMng'"    :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-order-mng   v-else-if="page==='zdSimulOrderMng'"   :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-claim-mng   v-else-if="page==='zdSimulClaimMng'"   :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-kanban-mng  v-else-if="page==='zdSimulKanbanMng'"  :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-settle-mng  v-else-if="page==='zdSimulSettleMng'"  :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-user-mng    v-else-if="page==='zdSimulUserMng'"    :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-vendor-mng  v-else-if="page==='zdSimulVendorMng'"  :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-voucher-mng v-else-if="page==='zdSimulVoucherMng'" :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-log-mng     v-else-if="page==='zdSimulLogMng'"     :navigate="navigate" :show-toast="showToast" />
            <zd-simul-noti-mng v-else-if="page==='zdSimulNotiKakao'"  mode="kakao"  :key="page" :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-noti-mng v-else-if="page==='zdSimulNotiSms'"    mode="sms"    :key="page" :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-noti-mng v-else-if="page==='zdSimulNotiMail'"   mode="mail"   :key="page" :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-noti-mng v-else-if="page==='zdSimulNotiChat'"   mode="chat"   :key="page" :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-noti-mng v-else-if="page==='zdSimulNotiNotice'" mode="notice" :key="page" :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <zd-simul-noti-mng v-else-if="page==='zdSimulNotiError'"  mode="error"  :key="page" :navigate="navigate" :show-toast="showToast" :show-confirm="showConfirm" />
            <bo-error-401 v-else-if="page==='error401'" :navigate="navigate" />
            <bo-error-500 v-else-if="page==='error500'" :navigate="navigate" :message="errorMessage" :errors="recentServerErrors" />
            <bo-error-404 v-else :navigate="navigate" :page-id="page" />
          </div><!-- /\uBE44\uACE0\uC815 \uD0ED \uB798\uD37C -->
        </template>
      </div>
    </div>

    <!-- Right Panel: \uACF5\uD1B5 \uD544\uD130 -->
    <div class="bo-right-panel" :class="{collapsed: !rightPanelOpen}">
      <div v-show="rightPanelOpen" class="right-panel-body">
        <div class="right-panel-title">\uACF5\uD1B5 \uD544\uD130</div>
        <div class="popup-sel">
          <div class="popup-sel-label">\uC0AC\uC774\uD2B8 <span style="color:#e8587a;font-size:10px;">\uD544\uC218</span>
            <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:#e5e7eb;color:#555;font-size:10px;text-align:center;line-height:14px;margin-left:4px;cursor:help;font-weight:700;"
              :title="['\uC0AC\uC774\uD2B8\uBC88\uD638 : \uD504\uB85C\uADF8\uB7A8 \uC791\uC5C5\uCF54\uB4DC (01, 02, 03\u2026)','\uC0AC\uC774\uD2B8\uCF54\uB4DC : \uB77C\uC774\uC120\uC2A4\uCF54\uB4DC (ST0001 \uD615\uC2DD)'].join(String.fromCharCode(10))">?</span>
          </div>
          <div class="popup-sel-row" @click="openSelectModal('site')">
            <span v-if="filterSite" style="font-family:monospace;font-size:11px;color:#e8587a;font-weight:700;margin-right:6px;">{{ filterSite.siteNo || String(filterSite.siteId).slice(-2) }}</span>
            <span v-if="filterSite" class="popup-sel-name">{{ filterSite.siteNm || '-' }}</span>
            <span v-else class="popup-sel-placeholder">\uC120\uD0DD\uD558\uC138\uC694</span>
            <span v-if="filterSite" class="popup-sel-id">{{ filterSite.siteCode || '' }}</span>
            <span class="popup-sel-btn">\u{1F50D}</span>
          </div>
        </div>
        <div class="popup-sel">
          <div class="popup-sel-label">\uD310\uB9E4\uC5C5\uCCB4</div>
          <div class="popup-sel-row" @click="openSelectModal('vendor')">
            <span v-if="filterVendor" class="popup-sel-name">{{ filterVendor.vendorNm }}</span>
            <span v-else class="popup-sel-placeholder">\uC120\uD0DD\uD558\uC138\uC694</span>
            <span v-if="filterVendor" class="popup-sel-id">{{ filterVendor.vendorId }}</span>
            <span v-if="commonFilter.vendorId" class="popup-sel-clear" @click.stop="clearFilter('vendor')" title="\uC120\uD0DD \uD574\uC81C">\u2715</span>
            <span class="popup-sel-btn">\u{1F50D}</span>
          </div>
        </div>
        <div class="popup-sel">
          <div class="popup-sel-label">\uD310\uB9E4\uC0AC\uC6A9\uC790</div>
          <div class="popup-sel-row" @click="openSelectModal('boUser')">
            <span v-if="cfFilterBoUser" class="popup-sel-name">{{ cfFilterBoUser.name }}</span>
            <span v-else class="popup-sel-placeholder">\uC120\uD0DD\uD558\uC138\uC694</span>
            <span v-if="cfFilterBoUser" class="popup-sel-id">{{ cfFilterBoUser.boUserId }}</span>
            <span v-if="commonFilter.userId" class="popup-sel-clear" @click.stop="clearFilter('boUser')" title="\uC120\uD0DD \uD574\uC81C">\u2715</span>
            <span class="popup-sel-btn">\u{1F50D}</span>
          </div>
        </div>
        <div class="popup-sel">
          <div class="popup-sel-label">\uBC30\uC1A1\uC5C5\uCCB4</div>
          <div class="popup-sel-row" @click="openSelectModal('dlivVendor')">
            <span v-if="cfFilterDlivVendor" class="popup-sel-name">{{ cfFilterDlivVendor.vendorNm }}</span>
            <span v-else class="popup-sel-placeholder">\uC120\uD0DD\uD558\uC138\uC694</span>
            <span v-if="cfFilterDlivVendor" class="popup-sel-id">{{ cfFilterDlivVendor.vendorId }}</span>
            <span v-if="commonFilter.dlivVendorId" class="popup-sel-clear" @click.stop="clearFilter('dlivVendor')" title="\uC120\uD0DD \uD574\uC81C">\u2715</span>
            <span class="popup-sel-btn">\u{1F50D}</span>
          </div>
        </div>
        <div class="popup-sel">
          <div class="popup-sel-label">\uD68C\uC6D0</div>
          <div class="popup-sel-row" @click="openSelectModal('member')">
            <span v-if="filterMember" class="popup-sel-name">{{ filterMember.memberNm }}</span>
            <span v-else class="popup-sel-placeholder">\uC120\uD0DD\uD558\uC138\uC694</span>
            <span v-if="filterMember" class="popup-sel-id">{{ filterMember.memberId }}</span>
            <span v-if="commonFilter.memberId" class="popup-sel-clear" @click.stop="clearFilter('member')" title="\uC120\uD0DD \uD574\uC81C">\u2715</span>
            <span class="popup-sel-btn">\u{1F50D}</span>
          </div>
        </div>
        <div class="popup-sel">
          <div class="popup-sel-label">\uC8FC\uBB38</div>
          <div class="popup-sel-row" @click="openSelectModal('order')">
            <span v-if="filterOrder" class="popup-sel-name">{{ filterOrder.orderId }}</span>
            <span v-else class="popup-sel-placeholder">\uC120\uD0DD\uD558\uC138\uC694</span>
            <span v-if="filterOrder" class="popup-sel-id">{{ filterOrder.userNm }}</span>
            <span v-if="commonFilter.orderId" class="popup-sel-clear" @click.stop="clearFilter('order')" title="\uC120\uD0DD \uD574\uC81C">\u2715</span>
            <span class="popup-sel-btn">\u{1F50D}</span>
          </div>
        </div>

        <!-- API \uB85C\uADF8 \uC139\uC158 -->
        <div style="padding: 12px 0; border-top: 1px solid #e5e7eb; margin-top: 12px;">
          <div style="font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
            <span>\u{1F4E1} API \uB85C\uADF8 (BO)</span>
            <button v-if="apiLogs.length" @click="clearApiLogs" style="font-size: 10px; padding: 2px 6px; background: #ef4444; color: white; border: none; border-radius: 2px; cursor: pointer; font-weight: 600;">Clear</button>
          </div>
          <div v-if="apiLogs.length === 0" style="font-size: 11px; color: #9ca3af; padding: 8px; text-align: center;">\uB85C\uADF8 \uC5C6\uC74C</div>
          <div v-else style="max-height: 525px; overflow-y: auto; border: 1px solid #e5e7eb; border-radius: 3px; background: white;">
            <div v-for="(log, idx) in apiLogs" :key="idx"
              @mouseenter="onApiLogEnter(log)"
              @mouseleave="onApiLogLeave(log)"
              style="padding: 3px 0; border-bottom: 1px solid #d1d5db; font-size: 10px; font-family: monospace; cursor: pointer; position: relative;"
              :style="{ background: (apiLogHoverDetail === log || apiLogLockedDetail === log) ? '#f9fafb' : 'white' }">
              <!-- 1\uC904: \uBA54\uC11C\uB4DC(\uCCAB\uAE00\uC790) + URL(/api.. \uCD95\uC57D) + status(200 \uC228\uAE40) \u2014 FO \uB3D9\uC77C \uD615\uD0DC, \uC88C\uC6B0 \uACF5\uBC31 \uD65C\uC6A9 -->
              <div style="display:flex;align-items:center;gap:4px;">
                <span :style="{ color: getApiMethodColor(log.method), fontWeight:'700' }" style="flex-shrink:0;" :title="log.method">{{ (log.method || '-').charAt(0) }}</span>
                <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :style="{ color: log.hasError ? '#ef4444' : getApiMethodColor(log.method) }" :title="log.url">{{ fnShortUrl(log.url) }}</span>
                <span v-if="log.status ? (Number(log.status) !== 200) : false" :style="{ color: getApiStatusColor(log.status), fontWeight:'700' }" style="flex-shrink:0;" :title="log.status">{{ log.status }}</span>
              </div>
              <!-- 2\uC904: uiLabel + duration(\uCD08) + \uC2DC\uAC01(\uBD84:\uCD08) -->
              <div style="display:flex;align-items:center;gap:6px;margin-top:1px;">
                <span v-if="log.uiLabel" :style="{ fontWeight: log._isRecent ? '700' : '400', color: getApiMethodColor(log.method) }" style="font-size:9px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:-0.2px;">{{ log.uiLabel }}</span>
                <span v-else style="flex:1;"></span>
                <span v-if="log.duration" style="font-size:9px;color:#aaa;flex-shrink:0;" :title="log.duration + 'ms'">{{ fnFmtSec(log.duration) }}</span>
                <span style="font-size:9px;color:#ccc;flex-shrink:0;" :title="log.time">{{ fnHmsToMs(log.time) }}</span>
              </div>
              <!-- \uC751\uB2F5 \uB370\uC774\uD130 \uBBF8\uB9AC\uBCF4\uAE30(\u25B6)\uB294 \uBAA9\uB85D\uC5D0\uC11C \uC228\uAE40 \u2014 \uC804\uCCB4 req/res \uB294 hover \uC0C1\uC138 \uB808\uC774\uC5B4\uC5D0\uC11C \uD655\uC778 -->
            </div>
          </div>
        </div>

        <!-- API \uB85C\uADF8 \uD638\uBC84 \uC0C1\uC138 \uB808\uC774\uC5B4 -->
        <div v-if="apiLogHoverDetail || apiLogLockedDetail" @mouseenter="onApiLogDetailEnter" @mouseleave="onApiLogDetailLeave" style="position: fixed; top: 200px; right: 220px; width: 650px; max-height: 858px; background: white; border: 2px solid #8b5cf6; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1001; font-size: 11px; font-family: monospace; overflow: hidden; display: flex; flex-direction: column;">
          <!-- \uD5E4\uB354 -->
          <div style="padding: 12px; background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); border-bottom: 1px solid #d1d5db; flex-shrink: 0;">
            <div style="font-weight: 700; color: #374151; font-size: 12px; margin-bottom: 6px;">\u{1F4E1} API \uC694\uCCAD/\uC751\uB2F5 \uC0C1\uC138 <span style="color: #ef4444; margin-left: 4px;">#{{ apiLogs.findIndex(l => l === (apiLogLockedDetail || apiLogHoverDetail)) >= 0 ? apiLogs.length - apiLogs.findIndex(l => l === (apiLogLockedDetail || apiLogHoverDetail)) : '-' }}</span></div>
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
              <div style="flex: 1; overflow: hidden;">
                <div style="color: #374151; font-size: 11px; word-break: break-all; line-height: 1.5;">
                  <span :style="{ color: getApiMethodColor((apiLogLockedDetail || apiLogHoverDetail).method), fontWeight: '700' }">{{ (apiLogLockedDetail || apiLogHoverDetail).method }}</span>
                  <span style="color: #6b7280; margin: 0 4px;">:</span>
                  <span style="color: #374151;">{{ (apiLogLockedDetail || apiLogHoverDetail).url }}</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                <span style="color: #6b7280; font-size: 10px; white-space: nowrap;">{{ (apiLogLockedDetail || apiLogHoverDetail).time }}</span>
                <button v-if="apiLogLockedDetail" @click="toggleApiLogLock(apiLogLockedDetail)" style="background: none; border: none; cursor: pointer; font-size: 14px; color: #6b7280; padding: 0; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">\u2715</button>
              </div>
            </div>
          </div>

          <!-- \uC0C1\uD0DC \uC815\uBCF4 -->
          <div style="padding: 8px 12px; background: #fafbfc; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; gap: 16px; flex-shrink: 0;">
            <div>
              <span style="color: #6b7280; font-size: 10px; font-weight: 600;">\uC0C1\uD0DC:</span>
              <div :style="{ display: 'inline-block', background: ((apiLogLockedDetail || apiLogHoverDetail).status >= 200 ? (apiLogLockedDetail || apiLogHoverDetail).status < 300 : false) ? '#ecfdf5' : '#fef2f2', color: ((apiLogLockedDetail || apiLogHoverDetail).status >= 200 ? (apiLogLockedDetail || apiLogHoverDetail).status < 300 : false) ? '#10b981' : '#ef4444', padding: '4px 8px', borderRadius: '2px', fontWeight: '700', border: '1px solid ' + (((apiLogLockedDetail || apiLogHoverDetail).status >= 200 ? (apiLogLockedDetail || apiLogHoverDetail).status < 300 : false) ? '#10b981' : '#ef4444'), fontSize: '11px', marginLeft: '4px' }">{{ (apiLogLockedDetail || apiLogHoverDetail).status }}</div>
            </div>
            <div>
              <span style="color: #6b7280; font-size: 10px; font-weight: 600;">\uC18C\uC694\uC2DC\uAC04:</span>
              <span style="color: #374151; font-size: 10px; margin-left: 4px;">{{ (apiLogLockedDetail || apiLogHoverDetail).duration }}ms</span>
            </div>
          </div>

          <!-- \uC694\uCCAD/\uC751\uB2F5 \uB370\uC774\uD130 -->
          <div style="flex: 1; overflow: hidden; display: grid; grid-template-rows: 130px 1fr 2fr; gap: 8px; padding: 8px; background: white;">
            <!-- Headers -->
            <div style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid #8b5cf6; border-radius: 2px;">
              <div style="padding: 4px 6px; background: #ede9fe; border-bottom: 1px solid #8b5cf6; font-weight: 600; color: #5b21b6; font-size: 10px; display: flex; align-items: center; justify-content: space-between;">
                <span>\u{1F4CB} Headers</span>
                <span v-if="(apiLogLockedDetail || apiLogHoverDetail).uiLabel" style="color: #7c3aed; font-size: 11px; font-weight: 700;">{{ (apiLogLockedDetail || apiLogHoverDetail).uiLabel }}</span>
              </div>
              <div style="flex: 1; overflow-y: auto; padding: 6px 8px; background: #fafbfc; color: #374151; white-space: pre-wrap; word-break: break-word; line-height: 1.8; font-size: 10px; font-family: 'Courier New', monospace;">{{ (apiLogLockedDetail || apiLogHoverDetail).headers || '-' }}</div>
            </div>

            <!-- Request -->
            <div style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid #e5e7eb; border-radius: 2px;">
              <div style="padding: 4px 6px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #6b7280; font-size: 10px;">\u{1F4E4} Request</div>
              <div style="flex: 1; overflow-y: auto; padding: 6px; background: #fafbfc; color: #374151; white-space: pre-wrap; word-break: break-word; line-height: 1.4; font-size: 10px;">{{ formatJsonData((apiLogLockedDetail || apiLogHoverDetail).reqData) }}</div>
            </div>

            <!-- Response -->
            <div style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid #e5e7eb; border-radius: 2px;">
              <div style="padding: 4px 6px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #6b7280; font-size: 10px;">\u{1F4E5} Response</div>
              <div style="flex: 1; overflow-y: auto; padding: 6px; background: #fafbfc; color: #374151; white-space: pre-wrap; word-break: break-word; line-height: 1.4; font-size: 10px;">{{ formatJsonData((apiLogLockedDetail || apiLogHoverDetail).resData) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div><!-- /bo-body -->

  <!-- \uC120\uD0DD \uBAA8\uB2EC\uB4E4 -->
  <bo-cm-popup-modal v-if="selectModal.show ? (selectModal.type==='site') : false" popup-cmd="cmPopup-site-select" popup-code="site" @select="onSelectItem('site', $event)" @close="closeSelectModal" />
  <bo-cm-popup-modal v-if="selectModal.show ? (selectModal.type==='vendor') : false" popup-cmd="cmPopup-vendor-select" popup-code="vendor" @select="onSelectItem('vendor', $event)" @close="closeSelectModal" />
  <bo-cm-popup-modal v-if="selectModal.show ? (selectModal.type==='dlivVendor') : false" popup-cmd="cmPopup-dliv-vendor-select" popup-code="vendor" @select="onSelectItem('dlivVendor', $event)" @close="closeSelectModal" />
  <bo-cm-popup-modal v-if="selectModal.show ? (selectModal.type==='boUser') : false" popup-cmd="cmPopup-bo-user-select" popup-code="userByDept" result-type="array" @select="onSelectItem('boUser', $event)" @close="closeSelectModal" />
  <bo-cm-popup-modal v-if="selectModal.show ? (selectModal.type==='member') : false" popup-cmd="cmPopup-member-select" popup-code="member" @select="onSelectItem('member', $event)" @close="closeSelectModal" />
  <bo-cm-popup-modal v-if="selectModal.show ? (selectModal.type==='order') : false" popup-cmd="cmPopup-order-select" popup-code="order" @select="onSelectItem('order', $event)" @close="closeSelectModal" />

  <!-- \uCC38\uC870 \uBAA8\uB2EC -->
  <bo-ref-modal v-if="refModal ? (refModal.show) : false" :state="refModal" modal-name="bo-ref"  @close="closeRefModal" />

  <!-- \uB3C4\uC6C0\uB9D0 \uBAA8\uB2EC -->
  <help-bo-modal v-if="helpModal.show" :show="helpModal.show" :topic="helpModal.topic" modal-name="help-bo" @close="helpModal.show=false" />

  <!-- Confirm \u2014 BoModal(z-index 9000) \uC704\uC5D0 \uD56D\uC0C1 \uB178\uCD9C\uB418\uB3C4\uB85D z-index 10000 -->
  <div v-if="confirmState ? (confirmState.show) : false" class="modal-overlay" style="z-index:10000;" @click.self="closeConfirm(false)">
    <div class="confirm-box">
      <div class="confirm-icon">\u{1F4BE}</div>
      <div class="confirm-title">{{ confirmState.title }}</div>
      <div class="confirm-msg">{{ confirmState.msg }}</div>
      <!-- \uC0C1\uC138 \uBC30\uC9C0 (details \uC788\uC744 \uB54C\uB9CC) -->
      <div v-if="confirmState.details ? (confirmState.details.length) : false" class="confirm-details">
        <span v-for="d in confirmState.details" :key="d.label"
          class="badge confirm-detail-badge" :class="d.cls">{{ d.label }}</span>
      </div>
      <div class="confirm-actions">
        <button class="btn btn-secondary" @click="closeConfirm(false)">{{ confirmState.btnCancel }}</button>
        <button class="btn btn-primary" @click="closeConfirm(true)">{{ confirmState.btnOk }}</button>
      </div>
    </div>
  </div>

  <!-- API Progress Overlay -->
  <div v-if="isApiLoading" class="api-progress-overlay">
    <div class="api-progress-card">
      <div class="api-progress-dots">
        <div class="bo-dot"></div>
        <div class="bo-dot"></div>
        <div class="bo-dot"></div>
        <div class="bo-dot"></div>
      </div>
      <div class="api-progress-label">{{ apiProgressLabel }}</div>
    </div>
  </div>

  <!-- Toast \uB204\uC801 \uC2A4\uD0DD -->
  <div class="toast-container">
    <div v-if="toasts.length > 1" class="toast-close-all">
      <span class="toast-close-all-btn" @click="closeAllToasts">\u2715 \uC804\uCCB4\uB2EB\uAE30 ({{ toasts.length }})</span>
      <span class="toast-close-all-sep">|</span>
      <span class="toast-close-all-btn" @click="toggleToastDetail">{{ toastShowDetail ? '\u25B2 \uC804\uCCB4\uC811\uAE30' : '\u25BC \uC804\uCCB4\uD3BC\uCE58\uAE30' }}</span>
    </div>
    <div v-for="t in toasts" :key="t.id"
      class="toast-item" :class="['toast-'+t.type, { 'toast-expanded': t.expanded }]">
      <!-- \uD5E4\uB354 \uD589: \uC81C\uBAA9 + \u25BC/\u25B2 + \u2715 -->
      <div class="toast-header-row">
        <div class="toast-msg-title"><span style="color:#aaa;font-weight:700;margin-right:4px;">#{{ t.id }}</span>{{ (t.msgTitle || t.msg).split(String.fromCharCode(10))[0] }}</div>
        <span v-if="t.type === 'error'" class="toast-expand-icon"
          @click.stop="t.expanded = !t.expanded" :title="t.expanded ? '\uC811\uAE30' : '\uB354\uBCF4\uAE30'">{{ t.expanded ? '\u25B2' : '\u25BC' }}</span>
        <span class="toast-close-x" @click.stop="closeToast(t.id)">\u2715</span>
      </div>
      <!-- \uC11C\uBE0C \uC815\uBCF4: URL/status \uC904 -->
      <div v-if="t.msgDetail" class="toast-msg-detail">{{ t.msgDetail }}</div>
      <!-- \uC0C1\uD0DC\uCF54\uB4DC \uD55C\uAE00 \uC548\uB0B4 -->
      <div v-if="t.statusHint" class="toast-status-hint">\u{1F4A1} {{ t.statusHint }}</div>
      <!-- \uC561\uC158 \uBC84\uD2BC (\uC608: \uC124\uC815 \uB3C4\uC6C0\uB9D0 \uC5F4\uAE30) -->
      <button v-if="t.action" @click.stop="onToastAction(t)"
        style="margin-top:7px;padding:5px 12px;font-size:12px;font-weight:700;border:1px solid #1d4ed8;border-radius:6px;background:#eef4ff;color:#1d4ed8;cursor:pointer;">
        {{ t.action.label }}
      </button>
      <!-- \uD3BC\uCCD0\uC9C4 \uC0C1\uC138 \uB0B4\uC6A9 -->
      <div v-if="t.expanded" class="toast-error-details">
        <pre class="toast-error-content">{{ t.errorDetails || (t.msgTitle || t.msg) }}</pre>
      </div>
      <div v-if="!t.persistent" class="toast-progress"></div>
    </div>
  </div>

  <!-- API \uC751\uB2F5 \uD328\uB110 -->
  <div v-if="apiResPanel ? (apiResPanel.show) : false" style="position:fixed;bottom:20px;right:20px;z-index:8900;width:440px;max-height:55vh;background:#1e1e2e;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.4);display:flex;flex-direction:column;overflow:hidden;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#2a2a3e;flex-shrink:0;">
      <span style="font-size:12px;font-weight:700;color:#fff;display:flex;align-items:center;gap:8px;">
        API \uC751\uB2F5
        <span v-if="apiResPanel.res" :style="{padding:'2px 8px',borderRadius:'10px',fontSize:'11px',fontWeight:'600',background:apiResPanel.res.ok?'#166534':'#7f1d1d',color:apiResPanel.res.ok?'#4ade80':'#f87171'}">
          {{ apiResPanel.res.ok ? '\u2713 \uC131\uACF5' : '\u2715 \uC624\uB958' }}
          <template v-if="apiResPanel.res.status"> \xB7 HTTP {{ apiResPanel.res.status }}</template>
        </span>
      </span>
      <button @click="closeApiResPanel" style="background:none;border:none;color:#888;cursor:pointer;font-size:16px;line-height:1;padding:2px 4px;" title="\uB2EB\uAE30">\u2715</button>
    </div>
    <div style="overflow-y:auto;padding:12px 14px;flex:1;">
      <pre style="margin:0;font-size:11px;color:#e2e8f0;white-space:pre-wrap;word-break:break-all;line-height:1.6;">{{ JSON.stringify(apiResPanel.res, null, 2) }}</pre>
    </div>
  </div>

  <!-- \uD0ED \uCEE8\uD14D\uC2A4\uD2B8 \uBA54\uB274 -->
  <div v-if="ctxMenu ? (ctxMenu.show) : false"
    class="tab-ctx-menu"
    :style="{left: ctxMenu.x+'px', top: ctxMenu.y+'px'}"
    @click.stop>
    <div class="tab-ctx-item" @click="ctxClose">\uD604\uC7AC \uB2EB\uAE30</div>
    <div class="tab-ctx-item" @click="ctxCloseLeft">\uC67C\uCABD \uB2EB\uAE30</div>
    <div class="tab-ctx-item" @click="ctxCloseRight">\uC624\uB978\uCABD \uB2EB\uAE30</div>
    <div class="tab-ctx-item" @click="ctxCloseOthers">\uAE30\uD0C0 \uB2EB\uAE30</div>
    <div class="tab-ctx-sep"></div>
    <div class="tab-ctx-item" @click="ctxCloseAll">\uC804\uCCB4 \uB2EB\uAE30</div>
    <div class="tab-ctx-sep"></div>
    <div class="tab-ctx-item" @click="ctxNewWindow">\u2197 \uC0C8\uCC3D</div>
    <div class="tab-ctx-item" @click="ctxRefresh">\u21BA \uC0C8\uB85C\uACE0\uCE68</div>
  </div>

  <!-- \uD504\uB85C\uD544 \uBAA8\uB2EC (BoModals.js: AuthProfileModal) -->
  <auth-profile-modal
    modal-name="auth-profile"
    :show="uiState.profileModalShow"
    :form="profileForm"
    :img="profileImg"
    :uploading="profileImgUploading"
    :auth-user="currentAuthUser"
    @save="saveProfile"
    @img-change="onProfileImgChange"
    @img-remove="onProfileImgRemove"
    @close="uiState.profileModalShow=false" />

  <!-- \uC0AC\uC6A9\uC790 \uC120\uD0DD \uBAA8\uB2EC (BoModals.js: AuthUserPickModal) -->
  <auth-user-pick-modal
    modal-name="auth-user-pick"
    :modal="userPickModal"
    :rows="cfPickRows"
    :total="cfPickTotal"
    :total-page="cfPickTotalPage"
    :login-id="loginForm.loginId"
    @search="onUserPickSearch"
    @go-page="onUserPickPage"
    @pick="onUserPick"
    @close="userPickModal.show=false" />

  <!-- \uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD \uBAA8\uB2EC (BoModals.js: AuthPwChangeModal) -->
  <auth-pw-change-modal
    modal-name="auth-pw-change"
    :show="uiState.pwModalShow"
    :form="pwForm"
    :error="pwError"
    @save="savePwChange"
    @close="uiState.pwModalShow=false" />

  <!-- \uB85C\uADF8\uC778 / \uD68C\uC6D0\uAC00\uC785 \uBAA8\uB2EC (BoModals.js: AuthLoginModal) -->
  <auth-login-modal
    modal-name="auth-login"
    :modal="loginModal"
    :mode="loginModal.mode"
    :login-form="loginForm"
    :reg-form="regForm"
    :error="loginError"
    :auth-methods="AUTH_METHODS"
    :user-roles="userRoles"
    @do-login="doLogin"
    @do-register="doRegister"
    @do-social="doSocial"
    @open-user-pick="openUserPick"
    @clear-error="loginError=''"
    @close="closeLogin" />

  <!-- \uC678\uBD80 \uC5F0\uB3D9 \uC124\uC815 \uB3C4\uC6C0\uB9D0 (SNS \uB85C\uADF8\uC778/\uD1A0\uC2A4 \uACB0\uC81C \uC2E4\uD328 \uC2DC \uC790\uB3D9 \uC624\uD508 \u2014 window.coExtHelp) -->
  <co-ext-help-modal />
</div>
`});window.boRegisterComponents(It).use(Pinia.createPinia()).mount("#app"),(Mt=window.perfUtil)==null||Mt.start("BO \uC571 \uC2DC\uC791");const Ve=(Tt=window.perfUtil)==null?void 0:Tt.recordVueMount();setTimeout(()=>{var D;Ve==null||Ve(),(D=window.perfUtil)==null||D.end("BO \uC571 \uC2DC\uC791")},100);const be=document.getElementById("_boot_loading");be&&(be.classList.add("done"),setTimeout(()=>{be.parentNode&&be.parentNode.removeChild(be)},350))})();
