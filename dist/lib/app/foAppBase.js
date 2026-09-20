(async function(){var ue,ve;await window.__SITE_CONFIG_READY__;const{createApp:Xe,ref:p,reactive:v,computed:E,watch:F,onMounted:Ze,onBeforeUnmount:Ke}=Vue,fe=Pinia.createPinia();window.foAuth.init(fe);const K=Xe({setup(){var Qe,Ye,We;const z=p(!1);window.foInitReady=!1,(async()=>{var t,o,a,n,s,d,i,l,u,y;const e=(t=window.useFoAuthStore)==null?void 0:t.call(window);if(e!=null&&e.svAccessToken)try{await((n=(a=(o=window.useFoAppInitStore)==null?void 0:o.call(window))==null?void 0:a.saFetchFoAppInitData)==null?void 0:n.call(a))}catch(c){((s=c==null?void 0:c.response)==null?void 0:s.status)===401?(console.warn("[foApp] token invalid (401), reset session"),(d=e.saClearSession)==null||d.call(e)):console.warn("[foApp] saFetchFoAppInitData error:",((i=c==null?void 0:c.response)==null?void 0:i.status)||c.message)}else(y=(u=(l=window.useFoAppInitStore)==null?void 0:l.call(window))==null?void 0:u.saRestoreFromStorage)==null||y.call(u);z.value=!0,window.foInitReady=!0})();const G=p(localStorage.getItem("modu-fo-sy-theme")||"light"),me=e=>{G.value=e,localStorage.setItem("modu-fo-sy-theme",e),document.documentElement.setAttribute("data-theme",e)};me(G.value);const et=()=>me(G.value==="light"?"dark":"light"),r=p("home"),te=p(!1),oe=p(""),tt={prodList:"\uC0C1\uD488 \uBAA9\uB85D",prodView:"\uC0C1\uD488 \uC0C1\uC138",cart:"\uC7A5\uBC14\uAD6C\uB2C8",order:"\uC8FC\uBB38 \xB7 \uACB0\uC81C",contact:"\uACE0\uAC1D\uC13C\uD130",faq:"FAQ",event:"\uC774\uBCA4\uD2B8",eventView:"\uC774\uBCA4\uD2B8 \uC0C1\uC138",blog:"\uBE14\uB85C\uADF8",blogView:"\uBE14\uB85C\uADF8 \uC0C1\uC138",blogEdit:"\uBE14\uB85C\uADF8 \uAE00\uC4F0\uAE30",like:"\uC704\uC2DC\uB9AC\uC2A4\uD2B8",location:"\uC704\uCE58\uC548\uB0B4",about:"\uD68C\uC0AC\uC18C\uAC1C",myOrder:"\uC8FC\uBB38\uB0B4\uC5ED",myClaim:"\uD074\uB808\uC784\uB0B4\uC5ED",myCoupon:"\uCFE0\uD3F0\uD568",myCache:"\uC801\uB9BD\uAE08 \xB7 \uCE90\uC2DC",myContact:"\uBB38\uC758\uB0B4\uC5ED",myChatt:"\uCC44\uD305\uC0C1\uB2F4",dispUi01:"\uC804\uC2DC UI 01",dispUi02:"\uC804\uC2DC UI 02",dispUi03:"\uC804\uC2DC UI 03",dispUi04:"\uC804\uC2DC UI 04",dispUi05:"\uC804\uC2DC UI 05",dispUi06:"\uC804\uC2DC UI 06",error401:"\uC811\uADFC \uC81C\uD55C",error404:"\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC74C",error500:"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4"};F(r,e=>{const t=tt[e];t?foUtil.fofSetPageMeta({title:t+" - ShopJoy"}):foUtil.fofResetPageMeta()});const he=window.foAppFunc.fmtXHeaders;window.addEventListener("api-response-success",e=>{if(!V.value)return;const t=e.detail||{};m(`${t.method} ${t.url} ${t.status}`,"info",1e4,t.detail||"")}),window.addEventListener("api-response-error",e=>{var s,d;const t=e.detail||{},o=t.status;let a="";t.method&&t.url&&(a=`${t.method} ${t.url} ${o}`,t.uiLabel&&(a+=` :: ${t.uiLabel}`));let n=a?`${a}
${t.message||""}`:t.message||"";if(o===0||o>=400)try{(d=(s=window.foNotiStore)==null?void 0:s.fnAddError)==null||d.call(s,t)}catch{}if(o!==401&&!(o>=500||o===0)){let i=t.errorDetails||"";const l=he(t.reqHeaders),u=he(t.resHeaders);if(l||u){let y="";const c=new Date,jt=c.getFullYear()+"-"+String(c.getMonth()+1).padStart(2,"0")+"-"+String(c.getDate()).padStart(2,"0")+" "+String(c.getHours()).padStart(2,"0")+":"+String(c.getMinutes()).padStart(2,"0")+":"+String(c.getSeconds()).padStart(2,"0");l&&(y+="\u2501\u2501 \uC694\uCCAD \uD5E4\uB354 \u2501\u2501  "+jt+`
`+l),u&&(y+=(y?`

`:"")+`\u2501\u2501 \uC751\uB2F5 \uD5E4\uB354 \u2501\u2501
`+u),i=i?y+`

`+i:y}m(n,"error",0,i);return}if(o===401){oe.value=n,r.value="error401";try{window.history.replaceState(null,"",window.location.pathname+"?page=error401")}catch{}}else if(o>=500||o===0){oe.value=n,r.value="error500";try{window.history.replaceState(null,"",window.location.pathname+"?page=error500")}catch{}}});const we=p(!0),S=v({mobileOpen:!1,showLogin:!1});let ae=!1;const ot=()=>{S.mobileOpen=!1},at=()=>{S.mobileOpen?S.mobileOpen=!1:(window.innerWidth<1024&&(we.value=!0),S.mobileOpen=!0)},L=p(null),g=v([]),f=p(null),it=window.foAppFunc.instantOrderToParams,ye=e=>{const t=e.get("prodId")||"";if(!t||!Array.isArray(b))return null;const o=b.find(i=>String(i.prodId)===t);if(!o)return null;const a=e.get("opt1Nm")||"",n=Array.isArray(o.opt1s)&&o.opt1s.find(i=>i.name===a)||null,s=e.get("opt2Id")||null,d=Math.max(1,Number(e.get("qty"))||1);return{prod:o,color:n,size:s,qty:d}},U=v({}),j=v({}),M={},B=window.FO_LAZY_CLASS_FILES||{},nt=window.FO_REG_TO_GLOBAL||{},xe=window.FO_PAGE_TO_CLASS||{},st=e=>e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),lt=e=>import(new URL(e,document.baseURI).href),H={},be=(e,t)=>{if(t.has(e))return Promise.resolve();t.add(e);const o=B[e];if(!o)return Promise.resolve();if(H[e])return H[e];const a=nt[e]||e;return H[e]=(async()=>{var i;if(window[a]||await lt(o),!window[a])throw new Error(`[lazy] ${o} \uB97C \uB85C\uB4DC\uD588\uC9C0\uB9CC window.${a} \uAC00 \uC815\uC758\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4 \u2014 \uC555\uCD95 \uC2DC property mangling \uC774 \uCF1C\uC838\uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694(\uBC18\uB4DC\uC2DC \uAEBC\uC57C \uD569\uB2C8\uB2E4).`);K.component(e,window[a]),j[e]=!0;const n=String(((i=window[a])==null?void 0:i.template)||""),d=[...new Set([...n.matchAll(/<([a-z][a-z0-9]*(?:-[a-z0-9]+)+)\b/g)].map(l=>l[1]))].map(st).filter(l=>B[l]);await Promise.all(d.map(l=>be(l,t)))})().catch(n=>{throw delete H[e],delete j[e],n}),H[e]},ie=async e=>{if(!(!e||j[e])){if(!B[e]){j[e]=!0;return}await be(e,new Set)}},N=async e=>{if(U[e])return;const t=xe[e];if(!t){U[e]=!0;return}await ie(t),M[e]&&window[t]&&(M[e].value=window[t]),U[e]=!0},rt=e=>{const t=xe[e];return!t||!B[t]||!!U[e]},ne=async(e,t={})=>{var o;if(t&&t.replace&&(ae=!0),t&&t.instantOrder!==void 0?L.value=t.instantOrder:e!=="order"&&(L.value=null),t&&t.cartIds!==void 0?g.splice(0,g.length,...Array.isArray(t.cartIds)?t.cartIds:[]):e!=="order"&&g.splice(0,g.length),t&&t.dtlId!==void 0?f.value=t.dtlId:t&&t.eventId!==void 0?f.value=t.eventId:f.value=null,S.mobileOpen&&(S.mobileOpen=!1),!!pe(e)){te.value=!0;try{await N(e)}catch(a){m("\uD654\uBA74\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+(a&&a.message||a),"error");return}finally{te.value=!1}r.value=e,window.scrollTo(0,0);try{(o=document.querySelector(".layout-main"))==null||o.scrollTo(0,0)}catch{}}};window.addEventListener("resize",()=>{window.innerWidth<1024&&(S.mobileOpen=!1)});const Se=15,x=v(JSON.parse(localStorage.getItem("modu-fo-sy-apiLog")||"[]")),R=p(localStorage.getItem("modu-fo-sy-apiLogOpen")==="true");F(R,e=>{try{localStorage.setItem("modu-fo-sy-apiLogOpen",e?"true":"false")}catch{}});const V=p(localStorage.getItem("modu-fo-sy-apiToastOpen")==="true");F(V,e=>{try{localStorage.setItem("modu-fo-sy-apiToastOpen",e?"true":"false")}catch{}});const $=p(!1),J=p(null),q=p(localStorage.getItem("modu-fo-sy-apiLogDock")==="true");F(q,e=>{try{localStorage.setItem("modu-fo-sy-apiLogDock",e?"true":"false")}catch{}});let dt=x.length?Math.max(...x.map(e=>e._seq||0))+1:1;const Le=e=>{const t=new Date,o=t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0")+" "+String(t.getHours()).padStart(2,"0")+":"+String(t.getMinutes()).padStart(2,"0")+":"+String(t.getSeconds()).padStart(2,"0"),a={_seq:dt++,ts:o,...e};x.unshift(a),x.length>Se&&x.splice(Se);try{const n=x.map(({data:s,reqData:d,...i})=>i);localStorage.setItem("modu-fo-sy-apiLog",JSON.stringify(n))}catch{}},pt=()=>{x.splice(0,x.length),J.value=null;try{localStorage.removeItem("modu-fo-sy-apiLog")}catch{}},ct=window.foAppFunc.logStatusClass,gt=window.foAppFunc.logIsRecent,ft=window.foAppFunc.fmtSec,ut=window.foAppFunc.logMethodStyle;let A=null;const vt=e=>{A&&(clearTimeout(A),A=null),J.value=e},mt=()=>{A&&clearTimeout(A),A=setTimeout(()=>{J.value=null,A=null},200)},ht=()=>{A&&(clearTimeout(A),A=null)},wt=()=>{q.value=!q.value},yt=E(()=>R.value&&q.value?"280px":"0px"),xt=window.foAppFunc.fmtJson,bt=e=>{const t=x.findIndex(o=>o===e);return t>=0?x.length-t:"-"},St=window.foAppFunc.logBadgeStyle;window.addEventListener("api-response-success",e=>{Le(e.detail||{})}),window.addEventListener("api-response-error",e=>{Le({...e.detail||{},_isErr:!0})}),document.addEventListener("pointerdown",e=>{$.value&&(e.target.closest("[data-fo-settings]")||($.value=!1))},!0);const C=v([]);let Lt=0;const P=p(localStorage.getItem("modu-fo-sy-toast-isShowDetail")!=="false"),m=(e,t="success",o=0,a="",n=null)=>{let s=e,d="";if(e&&e.includes(`
`)){const c=e.split(`
`);d=c[0],s=c.slice(1).join(`
`)}const i=++Lt,l=o===0?t==="error"?0:t==="info"?3e3:4e3:o,u=!!a&&P.value,y={id:i,msg:e,msgTitle:s,msgDetail:d,type:t,detail:a,action:n,expanded:u,persistent:l===0,duration:l};C.push(y),l>0&&setTimeout(()=>Ae(i),l)},At=e=>{e.action&&typeof e.action.onClick=="function"&&e.action.onClick()},Ae=e=>{const t=C.findIndex(o=>o.id===e);t!==-1&&C.splice(t,1)},It=()=>{C.splice(0,C.length)},kt=()=>{P.value=!P.value,localStorage.setItem("modu-fo-sy-toast-isShowDetail",P.value),C.forEach(e=>{e.detail&&(e.expanded=P.value)})},Ct=e=>{e.expanded=!e.expanded},Ot={show:!1},Q=p(!1),Ie=p("\uC870\uD68C\uC911\uC785\uB2C8\uB2E4...");let se=0,O=null,ke=0;const Et=300,Ft=50;window._showProgress=(e,t)=>{if(e&&t&&(Ie.value=t),se=Math.max(0,se+(e?1:-1)),se>0)O&&(clearTimeout(O),O=null),Q.value||(ke=Date.now()),Q.value=!0;else{const o=Date.now()-ke,a=Math.max(0,Et-o)+Ft;O&&clearTimeout(O),O=setTimeout(()=>{Q.value=!1,O=null},a)}};const _=v({show:!1,title:"",msg:"",type:"info",resolve:null}),Ce=(e,t,o="info")=>new Promise(a=>Object.assign(_,{show:!0,title:e,msg:t,type:o,resolve:a})),Pt=()=>{var e;_.show=!1,(e=_.resolve)==null||e.call(_)},T=v({show:!1,title:"",msg:"",type:"warning",resolve:null}),Oe=(e,t,o="warning")=>new Promise(a=>Object.assign(T,{show:!0,title:e,msg:t,type:o,resolve:a})),_t=e=>{var t;T.show=!1,(t=T.resolve)==null||t.call(T,e)},Ee=e=>coUtil.cofAssignProdImage(e),Y=((Qe=window.SITE_CONFIG)==null?void 0:Qe.prods)||[];Y.forEach(Ee);const b=v([...Y]),I=p(Y.length>0?Y[0]:null),Fe=e=>{I.value=e,ne("prodView")},Pe=(e,t)=>{const o=new URLSearchParams;o.set("page",e),t!=null&&(e==="prodView"?o.set("prodid",t):e==="eventView"?o.set("eventId",t):(e==="blogView"||e==="blogEdit")&&o.set("dtlId",t)),window.open(window.location.pathname+"?"+o.toString(),"_blank")},k=v(new Set);try{const e=localStorage.getItem("modu-fo-pd-like"),t=e?JSON.parse(e):null;Array.isArray(t)&&t.forEach(o=>k.add(o))}catch{}const Tt=()=>{try{localStorage.setItem("modu-fo-pd-like",JSON.stringify([...k]))}catch{}},_e=e=>{k.has(e)?k.delete(e):k.add(e),Tt()},Te=e=>k.has(e),Dt=E(()=>k.size),h=v([]),De=4;try{const e=localStorage.getItem("modu-fo-pd-compare"),t=e?JSON.parse(e):null;Array.isArray(t)&&t.forEach(o=>h.push(o))}catch{}const le=()=>{try{localStorage.setItem("modu-fo-pd-compare",JSON.stringify(h))}catch{}},ze=e=>h.some(t=>t.prodId===e),Ue=e=>{if(!e||!e.prodId)return!1;const t=h.findIndex(o=>o.prodId===e.prodId);return t>=0?(h.splice(t,1),le(),!0):h.length>=De?(m(`\uC0C1\uD488 \uBE44\uAD50\uB294 \uCD5C\uB300 ${De}\uAC1C\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`,"error"),!1):(h.push(e),le(),!0)},Me=()=>{h.splice(0,h.length),le()},zt=E(()=>h.length),w=v([]),He=()=>coUtil.cofGenId(),Ut=()=>{try{const e=localStorage.getItem("modu-fo-od-cart");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.forEach(o=>{const a=b.find(s=>s.prodId===o.prodId);if(!a)return;let n=o.color||{name:"\uAE30\uBCF8"};o.color&&Array.isArray(a.opt1s)&&a.opt1s.length&&(n=a.opt1s.find(s=>s.name===o.color.name)||o.color),w.push({cartId:o.cartId||He(),prod:a,color:n,size:o.size||"FREE",qty:o.qty||1})})}}catch{}try{const e=String(window.location.search||"").replace(/^\?/,"");if(e.includes("page=")){const t=new URLSearchParams(e).get("prodid")||"";if(t){const o=b.find(a=>String(a.prodId)===t);o&&(I.value=o)}}}catch{}!I.value&&b.length>0&&(I.value=b[0])},Mt=async()=>{var e,t;try{const a=((t=(e=(await foApiSvc.pdProd.getPage({pageNo:1,pageSize:200},"\uC0C1\uD488","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:e.data)==null?void 0:t.pageList)||[];a.forEach(Ee),b.splice(0,b.length,...a)}catch{}Ut()};Ze(()=>{Mt()});const W=()=>{try{localStorage.setItem("modu-fo-od-cart",JSON.stringify(w.map(e=>({cartId:e.cartId,prodId:e.prod.prodId,color:e.color,size:e.size,qty:e.qty}))))}catch{}},Ht=E(()=>w.reduce((e,t)=>e+t.qty,0)),Ne=(e,t,o,a=1)=>{const n=t||{name:"\uAE30\uBCF8"},s=o||"FREE",d=w.find(i=>i.prod.prodId===e.prodId&&i.color.name===n.name&&i.size===s);d?d.qty+=a:w.push({cartId:He(),prod:e,color:n,size:s,qty:a}),W(),m(`\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uC558\uC2B5\uB2C8\uB2E4! (${n.name} / ${s})`,"success")},Re=e=>{w.splice(e,1),W()},Ve=(e,t)=>{const o=w[e];if(!o)return;const a=o.qty+t;a<=0?w.splice(e,1):o.qty=a,W()},qe=()=>{w.splice(0,w.length),W()},re=window.foAuth.state,Nt=()=>{ie("Login").then(()=>{S.showLogin=!0}).catch(e=>m("\uB85C\uADF8\uC778 \uD654\uBA74\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+(e&&e.message||e),"error"))},de=["myOrder","myClaim","myCoupon","myCache","myContact","myChatt"],pe=e=>{var t;return!de.includes(e)||((t=window.foAuth)!=null&&t.isLoggedIn?window.foAuth.isLoggedIn():localStorage.getItem("modu-fo-auth-accessToken"))?!0:(m("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.","error"),S.showLogin=!0,!1)},Rt=()=>{window.foAuth.logout(),m("\uB85C\uADF8\uC544\uC6C3\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","info"),de.includes(r.value)&&(r.value="home")};F(()=>{var e;return((e=re.user)==null?void 0:e.authId)||""},e=>{!e&&de.includes(r.value)&&r.value!=="home"&&(r.value="home")});let Ge=!0;const X=["home","prodList","prodView","cart","order","contact","faq","event","eventView","blog","blogView","blogEdit","like","location","about","myOrder","myClaim","myCoupon","myCache","myContact","myChatt","dispUi01","dispUi02","dispUi03","dispUi04","dispUi05","dispUi06","sample01","sample02","sample03","sample04","sample05","sample06","sample07","sample08","sample09","sample10","sample11","sample12","sample13","sample14","sample21","sample22","sample23","xsStore","xsLocalStorage","error401","error404","error500"];let ce=Promise.resolve();try{const e=String(window.location.search||"").replace(/^\?/,""),t=e.includes("page="),o=t?new URLSearchParams(e):null;let a=null;if(t?(a=o.get("page"),a&&X.includes(a)&&pe(a)?ce=N(a).then(()=>{r.value=a}):a&&!X.includes(a)&&(r.value="notFound")):ce=N(r.value),a==="order"&&t){L.value=ye(o);const n=o.get("cartIds");n&&g.splice(0,g.length,...n.split(",").filter(Boolean))}if(t){const n=o.get("eventId"),s=o.get("dtlId");n?f.value=Number(n)||n:s&&(f.value=Number(s)||s)}}catch{}Ge=!1;let Z=!1;const je=()=>{if(!Z){Z=!0;try{const e=String(window.location.search||"").replace(/^\?/,""),t=new URLSearchParams(e),o=t.get("page");if(o&&X.includes(o)&&r.value!==o&&pe(o)?N(o).then(()=>{r.value=o}).catch(i=>{m("\uD654\uBA74\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+(i&&i.message||i),"error")}):o&&!X.includes(o)&&r.value!=="notFound"&&(r.value="notFound"),o==="order"){L.value=ye(t);const i=t.get("cartIds"),l=i?i.split(",").filter(Boolean):[];l.length===g.length&&l.every((y,c)=>y===g[c])||g.splice(0,g.length,...l)}else o&&o!=="order"&&(L.value!==null&&(L.value=null),g.length&&g.splice(0,g.length));const a=t.get("prodid")||"";if(a){const i=b.find(l=>String(l.prodId)===a);i&&I.value!==i&&(I.value=i)}const n=t.get("eventId"),s=t.get("dtlId"),d=n?Number(n)||n:s?Number(s)||s:f.value;d!==f.value&&(f.value=d)}catch{}setTimeout(()=>{Z=!1},0)}};window.addEventListener("popstate",je),F(r,e=>{var s,d;if(Ge||Z)return;const t=new URLSearchParams;if(t.set("page",r.value),e==="prodView"&&t.set("prodid",(d=(s=I.value)==null?void 0:s.prodId)!=null?d:""),e==="order"&&L.value){const i=it(L.value);Object.entries(i).forEach(([l,u])=>t.set(l,u))}e==="order"&&g.length&&t.set("cartIds",g.join(",")),e==="eventView"&&f.value!=null&&t.set("eventId",f.value),(e==="blogView"||e==="blogEdit")&&f.value!=null&&t.set("dtlId",f.value);const o=t.toString(),a=window.location.pathname+"?"+o;if(String(window.location.search||"").replace(/^\?/,"")!==o)if(ae){ae=!1;try{history.replaceState(null,"",a)}catch{}}else try{history.pushState(null,"",a)}catch{}});try{const e=String(window.location.search||"").replace(/^\?/,"");if(!e||!e.includes("page=")){const t=new URLSearchParams;t.set("page",r.value),r.value==="prodView"&&t.set("prodid",String((We=(Ye=I.value)==null?void 0:Ye.prodId)!=null?We:"")),history.replaceState(null,"",window.location.pathname+"?"+t.toString())}}catch{}Ke(()=>{window.removeEventListener("popstate",je)});const ge=window.FO_SITE_NO,Be=p(window["Home"+ge]||null),$e=p(window["Prod"+ge+"List"]||null),Je=p(window["Prod"+ge+"View"]||null);M.home=Be,M.prodList=$e,M.prodView=Je;const D=document.getElementById("_boot_loading")||document.getElementById("vue-app-loading"),Vt=()=>{D&&(D.classList.add("done"),D.classList.add("vue-app-loading--done"),setTimeout(()=>{D.parentNode&&D.parentNode.removeChild(D)},350))};ce.catch(e=>{m("\uD654\uBA74\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+(e&&e.message||e),"error")}).finally(Vt);const qt=new Set(["home","prodList","prodView","cart","order","myOrder","myClaim","myCoupon","myCache","myContact","myChatt","event","eventView","blog","blogView","blogEdit"]),Gt=E(()=>!qt.has(r.value));return window.foApp={get cart(){return w},get instantOrder(){return L.value},get cartIds(){return g},get config(){return window.SITE_CONFIG},get prods(){return b},get selectedProd(){return I.value},get auth(){return re},addToCart:Ne,removeFromCart:Re,updateCartQty:Ve,clearCart:qe,navigate:ne,showToast:m,showAlert:Ce,showConfirm:Oe,toggleLike:_e,isLiked:Te,selectProd:Fe,openNewWindow:Pe,get compareList(){return h},toggleCompare:Ue,isCompared:ze,clearCompare:Me},{theme:G,toggleTheme:et,page:r,navLoading:te,sidebarOpen:we,navigate:ne,closeMobileMenu:ot,toggleMobileMenu:at,toasts:C,showToast:m,removeToast:Ae,removeAllToasts:It,toggleToastDetail:Ct,toggleAllToastDetail:kt,toastShowDetail:P,toast:Ot,onToastAction:At,isApiLoading:Q,apiProgressLabel:Ie,alertState:_,showAlert:Ce,closeAlert:Pt,confirmState:T,showConfirm:Oe,closeConfirm:_t,prods:b,selectedProd:I,selectProd:Fe,openNewWindow:Pe,cart:w,cfCartCount:Ht,addToCart:Ne,removeFromCart:Re,updateCartQty:Ve,clearCart:qe,likes:k,toggleLike:_e,isLiked:Te,cfLikeCount:Dt,compareList:h,toggleCompare:Ue,isCompared:ze,clearCompare:Me,cfCompareCount:zt,instantOrder:L,cartIds:g,viewEditId:f,config:window.SITE_CONFIG,auth:re,uiState:S,onShowLogin:Nt,onLogout:Rt,foInitReady:z,loadedPages:U,cfIsPageLoaded:rt,fnEnsurePageLoaded:N,fnEnsureClassLoaded:ie,foHomeComp:Be,foProdListComp:$e,foProdViewComp:Je,foApiLogs:x,showApiLog:R,showSettings:$,apiLogHoverDetail:J,clearFoApiLogs:pt,foApiLogStatusClass:ct,foApiLogMethodStyle:ut,onFoApiLogEnter:vt,onFoApiLogLeave:mt,onFoApiLogDetailEnter:ht,formatJsonData:xt,fnFoApiLogIndex:bt,fnFoApiLogBadgeStyle:St,fnFoApiLogRecent:gt,fnFmtSec:ft,apiLogDock:q,onFoApiLogToggleDock:wt,cfApiLogDockPad:yt,apiToastEnabled:V,onToggleApiToast:()=>{V.value=!V.value},cfShowSidebar:Gt,onToggleApiLog:()=>{R.value=!R.value,$.value=!1},notFoundPageId:E(()=>{try{return new URLSearchParams(String(window.location.search||"").replace(/^\?/,"")).get("page")||""}catch{return""}}),errorMessage:oe,safe:window.safeUtil}},template:`
<div style="height:100%;min-height:100vh;display:flex;flex-direction:column;background:var(--bg-base);transition:padding-right .15s;" :style="{ paddingRight: cfApiLogDockPad }">

  <!-- lazy \uB85C\uB4DC \uC9C4\uD589\uBC14 \u2014 \uBA54\uB274/\uB9C1\uD06C \uD074\uB9AD \uD6C4 \uD654\uBA74 \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uBC1B\uC544\uC624\uB294 \uB3D9\uC548(\uB290\uB9B0 \uB124\uD2B8\uC6CC\uD06C\uC5D0\uC11C
       \uCC98\uC74C \uC5EC\uB294 \uD654\uBA74\uC77C \uB54C\uB9CC \uB208\uC5D0 \uB754) \uC0AC\uC6A9\uC790\uC5D0\uAC8C "\uC9C0\uAE08 \uBC1B\uC544\uC624\uB294 \uC911" \uC744 \uC54C\uB824\uC900\uB2E4. \uC774\uBBF8 \uB85C\uB4DC\uB41C
       \uD654\uBA74\uC740 fnEnsurePageLoaded \uAC00 \uC989\uC2DC resolve \uB418\uC5B4 \uAC70\uC758 \uC548 \uBCF4\uC778\uB2E4. 2026-08-30 \uCD94\uAC00. -->
  <div id="_nav_loading_bar" :class="{ active: navLoading }"></div>

  <!-- API Progress Bar + Dim + Loading Indicator -->
  <transition name="fo-dim">
    <div v-if="isApiLoading" style="position:fixed;inset:0;z-index:99998;background:rgba(0,0,0,0.18);pointer-events:none;display:flex;align-items:center;justify-content:center;">
      <div style="background:rgba(255,255,255,0.97);border-radius:18px;padding:28px 40px;box-shadow:0 8px 40px rgba(0,0,0,0.18);display:flex;flex-direction:column;align-items:center;gap:18px;min-width:160px;">
        <!-- \uD750\uB974\uB294 dot \uC6E8\uC774\uBE0C -->
        <div style="display:flex;align-items:center;gap:10px;height:36px;">
          <div class="fo-dot" style="animation-delay:0s;"></div>
          <div class="fo-dot" style="animation-delay:0.2s;"></div>
          <div class="fo-dot" style="animation-delay:0.4s;"></div>
          <div class="fo-dot" style="animation-delay:0.6s;"></div>
        </div>
        <div style="font-size:0.85rem;font-weight:700;color:var(--text-secondary,#666);letter-spacing:0.03em;">{{ apiProgressLabel }}</div>
      </div>
    </div>
  </transition>
  <div v-show="isApiLoading" style="position:fixed;top:0;left:0;right:0;height:3px;z-index:99999;overflow:hidden;">
    <div style="height:100%;background:linear-gradient(90deg,var(--accent,#c9a96e),#e74c3c,var(--accent,#c9a96e));background-size:200% 100%;animation:fo-progress-slide 1.2s linear infinite;"></div>
  </div>

  <fo-app-header
    :page="page" :theme="theme" :app-sidebar-open="sidebarOpen" :app-mobile-open="uiState.mobileOpen"
    :config="config" :navigate="navigate" :toggle-theme="toggleTheme" :app-cart-count="cfCartCount" :app-like-count="cfLikeCount"
    :app-auth="auth" :on-app-show-login="onShowLogin" :on-app-logout="onLogout"
    :app-show-settings="showSettings" :app-show-api-log="showApiLog"
    :app-api-logs="foApiLogs" :app-api-toast="apiToastEnabled"
    :is-page-loaded="cfIsPageLoaded"
    @modu-fo-toggle-sidebar="sidebarOpen=!sidebarOpen" @modu-fo-toggle-mobile="toggleMobileMenu"
    @modu-fo-toggle-settings="showSettings=!showSettings"
    @modu-fo-toggle-api-log="onToggleApiLog"
    @modu-fo-toggle-api-toast="onToggleApiToast"
  />

  <div style="flex:1;display:flex;overflow:hidden;position:relative;">
    <fo-app-sidebar
      v-show="cfShowSidebar || uiState.mobileOpen"
      :page="page" :app-sidebar-open="sidebarOpen" :app-mobile-open="uiState.mobileOpen"
      :config="config" :navigate="navigate" :app-cart-count="cfCartCount" :app-auth="auth"
      :is-page-loaded="cfIsPageLoaded"
      @modu-fo-toggle-sidebar="sidebarOpen=!sidebarOpen" @modu-fo-close-mobile="closeMobileMenu"
    />
    <div class="sidebar-overlay" :class="{show: uiState.mobileOpen}" @click="closeMobileMenu"></div>

    <main class="layout-main" style="flex:1;overflow-y:auto;min-width:0;">
      <div v-if="!foInitReady" style="display:flex;align-items:center;justify-content:center;height:200px;color:#aaa;font-size:14px;">\uCD08\uAE30\uD654 \uC911...</div>
      <template v-else>
        <component :is="foHomeComp"
          v-if="page === 'home'"
          :navigate="navigate"
        />
        <component :is="foProdListComp"
          v-else-if="page === 'prodList'"
          :navigate="navigate"
        />
        <component :is="foProdViewComp"
          v-else-if="page === 'prodView'"
          :navigate="navigate"
        />
        <cart
          v-else-if="page==='cart'"
          :navigate="navigate"
        />
        <order
          v-else-if="page==='order'"
          :navigate="navigate"
        />
        <contact
          v-else-if="page==='contact'"
          :navigate="navigate"
        />
        <faq
          v-else-if="page==='faq'"
          :navigate="navigate"
        />
        <event-page
          v-else-if="page==='event'"
          :navigate="navigate"
        />
        <event-view
          v-else-if="page==='eventView'"
          :navigate="navigate" :dtl-id="viewEditId"
        />
        <blog-page
          v-else-if="page==='blog'"
          :navigate="navigate" :dtl-id="viewEditId"
        />
        <blog-view
          v-else-if="page==='blogView'"
          :navigate="navigate" :dtl-id="viewEditId"
        />
        <blog-edit
          v-else-if="page==='blogEdit'"
          :navigate="navigate" :dtl-id="viewEditId"
        />
        <like-page
          v-else-if="page==='like'"
          :navigate="navigate"
        />
        <location-page
          v-else-if="page==='location'"
          :navigate="navigate"
        />
        <about-page
          v-else-if="page==='about'"
          :navigate="navigate"
        />
        <my-order
          v-else-if="page==='myOrder'"
          :navigate="navigate"
        />
        <my-claim
          v-else-if="page==='myClaim'"
          :navigate="navigate"
        />
        <my-coupon
          v-else-if="page==='myCoupon'"
          :navigate="navigate"
        />
        <my-cache
          v-else-if="page==='myCache'"
          :navigate="navigate"
        />
        <my-contact
          v-else-if="page==='myContact'"
          :navigate="navigate"
        />
        <my-chatt
          v-else-if="page==='myChatt'"
          :navigate="navigate"
        />
        <xd-disp-ui01 v-else-if="page==='dispUi01'" />
        <xd-disp-ui02 v-else-if="page==='dispUi02'" />
        <xd-disp-ui03 v-else-if="page==='dispUi03'" />
        <xd-disp-ui04 v-else-if="page==='dispUi04'" />
        <xd-disp-ui05 v-else-if="page==='dispUi05'" />
        <xd-disp-ui06 v-else-if="page==='dispUi06'" />
        <xs-sample01 v-else-if="page==='sample01'" />
        <xs-sample02 v-else-if="page==='sample02'" />
        <xs-sample03 v-else-if="page==='sample03'" />
        <xs-sample04 v-else-if="page==='sample04'" />
        <xs-sample05 v-else-if="page==='sample05'" />
        <xs-sample06 v-else-if="page==='sample06'" />
        <xs-sample07 v-else-if="page==='sample07'" />
        <xs-sample08 v-else-if="page==='sample08'" />
        <xs-sample09 v-else-if="page==='sample09'" />
        <xs-sample10 v-else-if="page==='sample10'" />
        <xs-sample11 v-else-if="page==='sample11'" />
        <xs-sample12 v-else-if="page==='sample12'" />
        <xs-sample13 v-else-if="page==='sample13'" />
        <xs-sample14 v-else-if="page==='sample14'" />
        <xs-sample21 v-else-if="page==='sample21'" />
        <xs-sample22 v-else-if="page==='sample22'" />
        <xs-sample23 v-else-if="page==='sample23'" />
        <xs-store
          v-else-if="page==='xsStore'"
          :navigate="navigate" :show-toast="showToast"
        />
        <xs-local-storage
          v-else-if="page==='xsLocalStorage'"
          :navigate="navigate" :show-toast="showToast"
        />
  
        <!-- Error Pages -->
        <fo-error-401 v-else-if="page==='error401'" :navigate="navigate" />
        <fo-error-500 v-else-if="page==='error500'" :navigate="navigate" :message="errorMessage" />
        <fo-error-404 v-else-if="page==='notFound' || page==='error404'" :navigate="navigate" :page-id="notFoundPageId" />
  
        <fo-app-footer :config="config" :navigate="navigate" :hide-footer="['prodView', 'eventView', 'planView', 'blogView'].includes(page)" />
      </template>
    </main>
  </div>

  <!-- LOGIN MODAL -->
  <login v-if="uiState.showLogin" :show-toast="showToast" @close="uiState.showLogin=false" />

  <!-- \uC678\uBD80 \uC5F0\uB3D9 \uC124\uC815 \uB3C4\uC6C0\uB9D0 (SNS \uB85C\uADF8\uC778/\uD1A0\uC2A4 \uACB0\uC81C \uC2E4\uD328 \uC2DC \uC790\uB3D9 \uC624\uD508 \u2014 window.coExtHelp) -->
  <co-ext-help-modal />

  <!-- TOAST STACK -->
  <div v-if="toasts.length"
    style="position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:6px;min-width:300px;transition:max-width 0.2s ease;"
    :style="toasts.some(t=>t.expanded)?'max-width:630px;':'max-width:420px;'">
    <!-- \uAC1C\uBCC4 toast \uCE74\uB4DC -->
    <div v-for="t in toasts" :key="t.id"
      style="border-radius:10px;box-shadow:0 4px 16px rgba(0,0,0,.18);overflow:hidden;background:#fff;border-left:4px solid;"
      :style="t.type==='error'?'border-color:#e74c3c;':t.type==='warning'?'border-color:#f39c12;':t.type==='info'?'border-color:#2980b9;':'border-color:#27ae60;'">
      <!-- \uD5E4\uB354 \uD589 -->
      <div style="display:flex;align-items:flex-start;gap:8px;padding:10px 12px;">
        <span style="font-size:16px;flex-shrink:0;margin-top:1px;">{{ t.type==='success'?'\u2705':t.type==='error'?'\u274C':t.type==='warning'?'\u26A0\uFE0F':'\u2139\uFE0F' }}</span>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;font-weight:600;line-height:1.4;word-break:break-all;"
            :style="t.type==='error'?'color:#c0392b;':t.type==='info'?'color:#1a5276;':'color:#222;'">
            <span style="color:#aaa;font-weight:700;margin-right:4px;">#{{ t.id }}</span>{{ t.msgTitle || t.msg }}
          </div>
          <div v-if="t.msgDetail" style="font-size:11px;color:#666;margin-top:2px;font-family:monospace;">{{ t.msgDetail }}</div>
          <!-- \uC561\uC158 \uBC84\uD2BC (\uC608: \uC124\uC815 \uB3C4\uC6C0\uB9D0 \uC5F4\uAE30) -->
          <button v-if="t.action" @click="onToastAction(t)"
            style="margin-top:7px;padding:5px 12px;font-size:12px;font-weight:700;border:1px solid #1d4ed8;border-radius:6px;background:#eef4ff;color:#1d4ed8;cursor:pointer;">
            {{ t.action.label }}
          </button>
          <!-- \uC0C1\uC138 \uD3BC\uCE58\uAE30 \uC601\uC5ED -->
          <div v-if="t.expanded ? (t.detail) : false"
            style="margin-top:6px;padding:6px 8px;background:#f8f9fa;border-radius:5px;font-size:11px;font-family:monospace;color:#444;white-space:pre-wrap;max-height:200px;overflow-y:auto;word-break:break-all;">{{ t.detail }}</div>
        </div>
        <!-- \uC0C1\uC138\uBCF4\uAE30 \uD1A0\uAE00 (detail \uC788\uC744 \uB54C\uB9CC) -->
        <span v-if="t.detail" @click="toggleToastDetail(t)"
          style="font-size:12px;cursor:pointer;color:#888;flex-shrink:0;padding:2px 4px;border-radius:4px;line-height:1.4;"
          :title="t.expanded?'\uC811\uAE30':'\uC0C1\uC138\uBCF4\uAE30'">{{ t.expanded ? '\u25B2' : '\u25BC' }}</span>
        <!-- \uB2EB\uAE30 -->
        <button @click="removeToast(t.id)"
          style="font-size:13px;width:20px;height:20px;border-radius:50%;border:none;background:rgba(0,0,0,.08);cursor:pointer;color:#888;display:flex;align-items:center;justify-content:center;line-height:1;flex-shrink:0;">\u2715</button>
      </div>
      <!-- progress bar (auto-dismiss toast) -->
      <div v-if="!t.persistent"
        :style="'height:3px;width:100%;animation:fo-toast-progress '+(t.duration/1000)+'s linear forwards;'+(t.type==='success'?'background:linear-gradient(to right,#27ae60,transparent);':t.type==='info'?'background:linear-gradient(to right,#2980b9,transparent);':t.type==='warning'?'background:linear-gradient(to right,#f39c12,transparent);':'background:linear-gradient(to right,#e74c3c,transparent);')">
      </div>
    </div>
    <!-- \uD558\uB2E8 \uACE0\uC815 \uBC14: 2\uAC1C \uC774\uC0C1\uC77C \uB54C -->
    <div v-if="toasts.length >= 2"
      style="display:flex;align-items:center;justify-content:center;gap:0;background:rgba(40,40,60,.85);border-radius:10px;backdrop-filter:blur(4px);overflow:hidden;">
      <button @click="removeAllToasts"
        style="flex:1;padding:7px 10px;font-size:12px;border:none;background:transparent;cursor:pointer;color:#fff;font-weight:600;">
        \u2715 \uC804\uCCB4\uB2EB\uAE30 ({{ toasts.length }})
      </button>
      <span style="width:1px;height:16px;background:rgba(255,255,255,.25);flex-shrink:0;"></span>
      <button @click="toggleAllToastDetail"
        style="flex:1;padding:7px 10px;font-size:12px;border:none;background:transparent;cursor:pointer;color:#ddd;">
        {{ toastShowDetail ? '\u25B2 \uC804\uCCB4\uC811\uAE30' : '\u25BC \uC804\uCCB4\uD3BC\uCE58\uAE30' }}
      </button>
    </div>
  </div>

  <!-- ALERT MODAL -->
  <div v-if="alertState.show" class="modal-overlay" @click.self="closeAlert">
    <div class="modal-box">
      <div class="modal-icon" :class="'icon-'+alertState.type">
        {{ alertState.type==='success'?'\u2705':alertState.type==='error'?'\u274C':'\u2139\uFE0F' }}
      </div>
      <div class="modal-title">{{ alertState.title }}</div>
      <div class="modal-msg">{{ alertState.msg }}</div>
      <div class="modal-actions">
        <button class="btn-blue" @click="closeAlert" style="padding:10px 28px;">\uD655\uC778</button>
      </div>
    </div>
  </div>

  <!-- FO API LOG PANEL -->
  <div v-if="showApiLog"
    style="position:fixed;top:0;right:0;bottom:0;width:280px;max-width:95vw;background:#fff;box-shadow:-4px 0 24px rgba(0,0,0,.18);z-index:9990;display:flex;flex-direction:column;border-left:3px solid var(--accent,#c9a96e);">
    <!-- \uD328\uB110 \uD5E4\uB354 -->
    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px 10px;background:linear-gradient(135deg,#fff8f0,#fff3e0);border-bottom:1px solid #eee;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:14px;">\u{1F310}</span>
        <span style="font-size:14px;font-weight:700;color:#333;">API \uB85C\uADF8 (FO)</span>
        <span style="font-size:11px;background:#f5f5f5;border-radius:10px;padding:1px 7px;color:#888;">{{ foApiLogs.length }}/15</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <button @click="clearFoApiLogs" style="font-size:11px;padding:3px 8px;border:1px solid #ddd;border-radius:4px;background:#fff;cursor:pointer;color:#999;">\uC9C0\uC6B0\uAE30</button>
        <button @click="onFoApiLogToggleDock" :title="apiLogDock ? '\uC601\uC5ED\uCC28\uC9C0 \uD574\uC81C(\uB808\uC774\uC5B4\uB85C)' : '\uC601\uC5ED\uCC28\uC9C0(\uBCF8\uBB38 \uBC00\uAE30)'"
          :style="'width:24px;height:24px;border-radius:50%;border:none;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;' + (apiLogDock ? 'background:var(--accent,#c9a96e);color:#fff;' : 'background:rgba(0,0,0,.08);color:#666;')">\u{1F4CC}</button>
        <button @click="showApiLog=false" style="width:24px;height:24px;border-radius:50%;border:none;background:rgba(0,0,0,.08);cursor:pointer;color:#666;font-size:14px;display:flex;align-items:center;justify-content:center;">\u2715</button>
      </div>
    </div>
    <!-- \uB85C\uADF8 \uBAA9\uB85D (\uD589 hover \uC2DC \uC88C\uCE21 \uC0C1\uC138\uCC3D \uD45C\uC2DC \u2014 \uC0C1\uB2E8 \uC778\uB77C\uC778 \uC0C1\uC138\uB294 \uD3D0\uAE30) -->
    <div style="flex:1;overflow-y:auto;padding:0;">
      <div v-if="!foApiLogs.length" style="padding:24px;text-align:center;color:#ccc;font-size:13px;">API \uD638\uCD9C \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4</div>
      <div v-for="log in foApiLogs" :key="log._seq"
        @mouseenter="onFoApiLogEnter(log)" @mouseleave="onFoApiLogLeave()"
        style="padding:3px 10px;border-bottom:1px solid #e5e7eb;cursor:pointer;transition:background .12s;"
        :style="(log._isErr ? 'background:#fff5f5;' : 'background:#fff;') + (fnFoApiLogRecent(log.ts) ? 'font-weight:700;' : 'font-weight:400;')">
        <div style="display:flex;align-items:center;gap:5px;">
          <span style="display:inline-block;padding:0 2px;border-radius:3px;font-size:10px;font-weight:700;flex-shrink:0;" :style="foApiLogMethodStyle(log.method)" :title="log.method">{{ (log.method || '-').charAt(0) }}</span>
          <span style="font-size:11px;color:#1a5276;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="log.url">{{ log.url }}</span>
          <span v-if="log.status ? (Number(log.status) !== 200) : false" style="font-size:11px;font-weight:700;flex-shrink:0;" :style="foApiLogStatusClass(log.status)">{{ log.status }}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span v-if="log.uiLabel" style="font-size:10px;color:#7d3c98;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;">{{ log.uiLabel }}</span>
          <span v-else style="flex:1;"></span>
          <span v-if="log.duration" style="font-size:10px;color:#aaa;flex-shrink:0;" :title="log.duration + 'ms'">{{ fnFmtSec(log.duration) }}</span>
          <span style="font-size:10px;color:#ccc;flex-shrink:0;" :title="log.ts ? log.ts.slice(11,19) : ''">{{ log.ts ? log.ts.slice(14,19) : '' }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- FO API LOG HOVER \uC0C1\uC138\uCC3D (\uD589 hover \uC2DC \uD328\uB110 \uC67C\uCABD\uC5D0 \uD45C\uC2DC. \uD074\uB9AD \uD3BC\uCE68 \uC5C6\uC774 hover \uC804\uC6A9 / BO \uB3D9\uC77C 3\uC139\uC158 \uAD6C\uC870) -->
  <div v-if="showApiLog ? (apiLogHoverDetail) : false" @mouseenter="onFoApiLogDetailEnter" @mouseleave="onFoApiLogLeave()"
    style="position:fixed;top:80px;right:290px;width:600px;max-height:80vh;background:#fff;border:2px solid #8b5cf6;border-radius:4px;box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:9991;font-size:11px;font-family:monospace;overflow:hidden;display:flex;flex-direction:column;">
    <!-- \uD5E4\uB354 -->
    <div style="padding:12px;background:linear-gradient(135deg,#f3f4f6 0%,#e5e7eb 100%);border-bottom:1px solid #d1d5db;flex-shrink:0;">
      <div style="font-weight:700;color:#374151;font-size:12px;margin-bottom:6px;">\u{1F4E1} API \uC694\uCCAD/\uC751\uB2F5 \uC0C1\uC138 <span style="color:#ef4444;margin-left:4px;">#{{ fnFoApiLogIndex(apiLogHoverDetail) }}</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <div style="flex:1;overflow:hidden;">
          <div style="color:#374151;font-size:11px;word-break:break-all;line-height:1.5;">
            <span style="color:#6b7280;font-weight:600;">{{ apiLogHoverDetail.method }}</span>
            <span style="color:#6b7280;margin:0 4px;">:</span>
            <span style="color:#374151;">{{ apiLogHoverDetail.url }}</span>
          </div>
        </div>
        <span style="color:#6b7280;font-size:10px;white-space:nowrap;flex-shrink:0;">{{ apiLogHoverDetail.ts ? apiLogHoverDetail.ts.slice(11,19) : '' }}</span>
      </div>
    </div>
    <!-- \uC0C1\uD0DC \uC815\uBCF4 -->
    <div style="padding:8px 12px;background:#fafbfc;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;gap:16px;flex-shrink:0;">
      <div>
        <span style="color:#6b7280;font-size:10px;font-weight:600;">\uC0C1\uD0DC:</span>
        <span :style="fnFoApiLogBadgeStyle(apiLogHoverDetail.status)">{{ apiLogHoverDetail.status }}</span>
      </div>
      <div v-if="apiLogHoverDetail.duration != null">
        <span style="color:#6b7280;font-size:10px;font-weight:600;">\uC18C\uC694\uC2DC\uAC04:</span>
        <span style="color:#374151;font-size:10px;margin-left:4px;">{{ apiLogHoverDetail.duration }}ms</span>
      </div>
    </div>
    <!-- \uC694\uCCAD/\uC751\uB2F5 \uB370\uC774\uD130 -->
    <div style="flex:1;overflow:hidden;display:grid;grid-template-rows:130px 1fr 2fr;gap:8px;padding:8px;background:#fff;">
      <!-- Headers -->
      <div style="display:flex;flex-direction:column;overflow:hidden;border:1px solid #8b5cf6;border-radius:2px;">
        <div style="padding:4px 6px;background:#ede9fe;border-bottom:1px solid #8b5cf6;font-weight:600;color:#5b21b6;font-size:10px;display:flex;align-items:center;justify-content:space-between;">
          <span>\u{1F4CB} Headers</span>
          <span v-if="apiLogHoverDetail.uiLabel" style="color:#7c3aed;font-size:11px;font-weight:700;">{{ apiLogHoverDetail.uiLabel }}</span>
        </div>
        <div style="flex:1;overflow-y:auto;padding:6px 8px;background:#fafbfc;color:#374151;white-space:pre-wrap;word-break:break-word;line-height:1.8;font-size:10px;font-family:'Courier New',monospace;">{{ [].concat(apiLogHoverDetail.reqHeaders||[], apiLogHoverDetail.resHeaders||[]).join(String.fromCharCode(10)) || '-' }}</div>
      </div>
      <!-- Request -->
      <div style="display:flex;flex-direction:column;overflow:hidden;border:1px solid #e5e7eb;border-radius:2px;">
        <div style="padding:4px 6px;background:#f9fafb;border-bottom:1px solid #e5e7eb;font-weight:600;color:#6b7280;font-size:10px;">\u{1F4E4} Request</div>
        <div style="flex:1;overflow-y:auto;padding:6px;background:#fafbfc;color:#374151;white-space:pre-wrap;word-break:break-word;line-height:1.4;font-size:10px;">{{ formatJsonData(apiLogHoverDetail.reqData) }}</div>
      </div>
      <!-- Response -->
      <div style="display:flex;flex-direction:column;overflow:hidden;border:1px solid #e5e7eb;border-radius:2px;">
        <div style="padding:4px 6px;background:#f9fafb;border-bottom:1px solid #e5e7eb;font-weight:600;color:#6b7280;font-size:10px;">\u{1F4E5} Response</div>
        <div style="flex:1;overflow-y:auto;padding:6px;background:#fafbfc;color:#374151;white-space:pre-wrap;word-break:break-word;line-height:1.4;font-size:10px;">{{ formatJsonData(apiLogHoverDetail.data) }}</div>
      </div>
    </div>
  </div>

  <!-- CONFIRM MODAL \u2014 FoModal(z-index 9000) \uC704\uC5D0 \uD56D\uC0C1 \uB178\uCD9C\uB418\uB3C4\uB85D z-index 10000 -->
  <div v-if="confirmState.show" class="modal-overlay" style="z-index:10000;" @click.self="closeConfirm(false)">
    <div class="modal-box">
      <div class="modal-icon icon-warning">\u26A0\uFE0F</div>
      <div class="modal-title">{{ confirmState.title }}</div>
      <div class="modal-msg">{{ confirmState.msg }}</div>
      <div class="modal-actions" style="gap:10px;">
        <button class="btn-outline" @click="closeConfirm(false)" style="padding:10px 20px;">\uCDE8\uC18C</button>
        <button class="btn-blue" @click="closeConfirm(true)" style="padding:10px 20px;">\uD655\uC778</button>
      </div>
    </div>
  </div>

</div>
`});window.foRegisterComponents(K),(ue=window.perfUtil)==null||ue.start("FO \uC571 \uC2DC\uC791");const ee=(ve=window.perfUtil)==null?void 0:ve.recordVueMount();K.use(fe).mount("#app"),setTimeout(()=>{var z;ee==null||ee(),(z=window.perfUtil)==null||z.end("FO \uC571 \uC2DC\uC791")},100)})();
