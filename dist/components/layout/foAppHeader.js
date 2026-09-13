window.foAppHeader={name:"FoAppHeader",props:["page","theme","appSidebarOpen","appMobileOpen","config","navigate","toggleTheme","appCartCount","appLikeCount","appAuth","onAppShowLogin","onAppLogout","appShowSettings","appShowApiLog","appApiLogs","appApiToast","isPageLoaded"],emits:["modu-fo-toggle-sidebar","modu-fo-toggle-mobile","modu-fo-toggle-settings","modu-fo-toggle-api-log","modu-fo-toggle-api-toast"],setup(r,{emit:c}){const{ref:g,reactive:l,computed:d,watch:M,onUnmounted:L,nextTick:C}=Vue,a=l({userMenuOpen:!1,profileOpen:!1,pwOpen:!1,loading:!1,error:""}),O=l({}),k=g(null),v=l({show:!1}),x=g(!1),U=d(()=>{var e,t;return((t=(e=window.foApp)==null?void 0:e.compareList)==null?void 0:t.length)||0}),A={home:"home",prodList:"prodList",contact:"contact",faq:"faq",event:"event",blog:"blog"},b=()=>{const e=new URLSearchParams(window.location.search);return r.page==="prodView"&&e.get("prodid")?window.seoUrl("/foui/prodDtl/"+encodeURIComponent(e.get("prodid"))):r.page==="eventView"&&e.get("eventId")?window.seoUrl("/foui/eventDtl/"+encodeURIComponent(e.get("eventId"))):r.page==="blogView"&&e.get("dtlId")?window.seoUrl("/foui/blogDtl/"+encodeURIComponent(e.get("dtlId"))):A[r.page]?window.seoUrl("/foui/"+A[r.page]):window.location.href},F=()=>{var e,t;try{window.coExtSdk.shareKakao({title:document.title||"ShopJoy - \uC1FC\uD551\uC758 \uC990\uAC70\uC6C0",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:b()})}catch(o){(t=(e=window.foApp)==null?void 0:e.showToast)==null||t.call(e,o.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},I=async()=>{var e,t,o,u;try{await navigator.clipboard.writeText(b()),(t=(e=window.foApp)==null?void 0:e.showToast)==null||t.call(e,"\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(te){(u=(o=window.foApp)==null?void 0:o.showToast)==null||u.call(o,te.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},p=l({kind:null,title:"",url:"",imageUrl:""}),N=e=>{p.kind=e,p.url=b(),e==="kakao"&&(p.title=document.title||"ShopJoy - \uC1FC\uD551\uC758 \uC990\uAC70\uC6C0",p.imageUrl=window.location.origin+"/assets/img/shopjoy-share-og.png")},P=()=>{p.kind=null},h=g(null),m=l({top:0,left:0}),S={name:"\uC774\uB984",tel:"\uC5F0\uB77D\uCC98",email:"\uC774\uBA54\uC77C",postcode:"\uC6B0\uD3B8\uBC88\uD638",address:"\uC8FC\uC18C",addressDetail:"\uC0C1\uC138\uC8FC\uC18C"},E=e=>{const t=coUtil.cofDevTestPresets[(e||1)-1]||{};return Object.keys(S).filter(o=>t[o]!=null&&t[o]!=="").map(o=>({label:S[o],value:t[o]}))},D=(e,t)=>{const o=t.currentTarget.getBoundingClientRect();m.top=o.top,m.left=Math.min(Math.max(o.left+o.width/2,130),window.innerWidth-130),h.value=e},$=()=>{h.value=null},j=async()=>{var e;x.value=!0;try{const t=coUtil.cofBuildExportFilename((document.title||"\uD654\uBA74")+".pdf"),o=(window.sfGetFoAuthUser?window.sfGetFoAuthUser():null)||{};await coUtil.cofExportPdf(document.body,t,(e=window.foApp)==null?void 0:e.showToast,o)}finally{x.value=!1}},n=l({memberNm:"",email:"",phone:"",birthdate:"",gender:"",postcode:"",address:"",addressDetail:""}),i=l({current:"",next:"",next2:"",err:"",ok:!1}),z=(e,t={})=>{if(e==="sidebar-toggle-mobile")return c("modu-fo-toggle-mobile");if(e==="sidebar-toggle-desktop")return c("modu-fo-toggle-sidebar");if(e==="settings-toggle")return c("modu-fo-toggle-settings");if(e==="settings-toggle-api-log")return c("modu-fo-toggle-api-log");if(e==="settings-toggle-api-toast")return c("modu-fo-toggle-api-toast");if(e==="settings-copy-link")return I();if(e==="settings-share-kakao")return F();if(e==="settings-export-pdf")return j();if(e==="dev-apply-values")return coUtil.cofDispatchDevAutofill(t);if(e==="userMenu-toggle")return H();if(e==="userMenu-close")return s();if(e==="nav-show-login")return r.onAppShowLogin();if(e==="userMenu-logout")return Q();if(e==="nav-go-home")return r.navigate("home");if(e==="nav-go-like")return r.navigate("like"),s();if(e==="nav-go-prodList")return r.navigate("prodList"),z("settings-toggle");if(e==="cart-go")return r.navigate("cart"),s();if(e==="theme-toggle")return r.toggleTheme();if(e==="siteSwitch-open-quick-menu")return window.dispatchEvent(new CustomEvent("open-quick-menu"));if(e==="profile-open")return T();if(e==="profile-close"){a.profileOpen=!1;return}else{if(e==="profile-save")return V();if(e==="profile-search-addr"){v.show=!0;return}else{if(e==="pw-open")return B();if(e==="pw-close"){a.pwOpen=!1;return}else{if(e==="pw-save")return G();console.warn("[handleBtnAction] unknown cmd:",e)}}}},_=(e,t={})=>{if(e==="nav-select-menu")return r.navigate(t);if(e==="userMenu-select-item")return t.action&&t.action();if(e==="profile-select-gender"){n.gender=t;return}else console.warn("[handleSelectAction] unknown cmd:",e)},H=()=>{a.userMenuOpen=!a.userMenuOpen},s=()=>{a.userMenuOpen=!1},R=()=>{s(),r.navigate("myOrder")},Q=()=>{s(),r.onAppLogout()},T=()=>{s();const e=r.appAuth.user||{};n.memberNm=e.memberNm||"",n.email=e.email||"",n.phone=e.phone||"",n.birthdate=e.birthdate||"",n.gender=e.gender||"",n.postcode=e.postcode||"",n.address=e.address||"",n.addressDetail=e.addressDetail||"",a.profileOpen=!0},V=()=>{if(!n.memberNm.trim())return;const e=r.appAuth.user;if(e){Object.assign(e,{memberNm:n.memberNm,phone:n.phone,birthdate:n.birthdate,gender:n.gender,postcode:n.postcode,address:n.address,addressDetail:n.addressDetail});try{const t=window.useFoAuthStore(Pinia.getActivePinia());t.svAuthUser={...e},localStorage.setItem("modu-fo-auth-authUser",JSON.stringify(t.svAuthUser))}catch{}}a.profileOpen=!1},q=(e,t,o)=>{if(e==="addr-search"){if(v.show=!1,o==null)return;n.postcode=o.zonecode,n.address=o.address;return}},W=e=>{var t;return(t={M:"\uB0A8\uC131",F:"\uC5EC\uC131","":"\uC120\uD0DD\uC548\uD568"}[e])!=null?t:"\uC120\uD0DD\uC548\uD568"},B=()=>{s(),i.current="",i.next="",i.next2="",i.err="",i.ok=!1,a.pwOpen=!0},G=async()=>{var e,t;if(i.err="",i.ok=!1,!i.current){i.err="\uD604\uC7AC \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.";return}if(i.next.length<6){i.err="\uC0C8 \uBE44\uBC00\uBC88\uD638\uB294 6\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.";return}if(i.next!==i.next2){i.err="\uC0C8 \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";return}try{await coApiSvc.foAuth.changePassword({currentPassword:i.current,newPassword:i.next},"\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD","\uBCC0\uACBD"),i.ok=!0,setTimeout(()=>{a.pwOpen=!1},1400)}catch(o){i.err=((t=(e=o.response)==null?void 0:e.data)==null?void 0:t.message)||"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD \uC2E4\uD328"}},y=d(()=>{var e;return((e=r==null?void 0:r.appAuth)==null?void 0:e.user)||{authNm:"",memberNm:"",email:""}}),J=d(()=>{var e,t;return(((e=y.value)==null?void 0:e.authNm)||((t=y.value)==null?void 0:t.memberNm)||"").charAt(0)||"?"}),Z=d(()=>{var e,t;return!!((t=(e=r==null?void 0:r.appAuth)==null?void 0:e.user)!=null&&t.authId)}),K="width:100%;padding:10px 13px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.88rem;outline:none;",Y=[{icon:"\u{1F464}",label:"\uB9C8\uC774\uD398\uC774\uC9C0",action:R,color:"var(--text-primary)"},{icon:"\u270F\uFE0F",label:"\uD504\uB85C\uD544 \uC218\uC815",action:T,color:"var(--text-primary)"},{icon:"\u{1F511}",label:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD",action:B,color:"var(--text-primary)"}];let f=null;function w(){f&&(f(),f=null)}function X(){w();const e=t=>{if(!a.userMenuOpen)return;const o=k.value;o&&!o.contains(t.target)&&s()};document.addEventListener("pointerdown",e,!0),f=()=>document.removeEventListener("pointerdown",e,!0)}M(()=>a.userMenuOpen,e=>{e?C(()=>X()):w()}),L(()=>w());const ee=d(()=>{var e,t;return((t=(e=window.sfGetFoMenuStore)==null?void 0:e.call(window))==null?void 0:t.svTopMenu)||[]});return{uiState:a,codes:O,userMenuRoot:k,addrSearchModal:v,handleBtnAction:z,handleSelectAction:_,fnCallbackModal:q,pdfExporting:x,cfCompareCount:U,shareTip:p,showShareTip:N,hideShareTip:P,devTip:h,devTipPos:m,fnDevPresetEntries:E,showDevTip:D,hideDevTip:$,pf:n,pw:i,IS:K,cfMenuItems:Y,genderLabel:W,cfAuthUser:y,cfUserFirstChar:J,cfIsLogin:Z,cfTopMenu:ee,fnIsLoaded:e=>r.isPageLoaded?r.isPageLoaded(e):!0,foSiteNo:window.FO_SITE_NO||"01",boSiteNo:"01",cfFoActive:d(()=>{var e,t;return((t=(e=window.useFoAppStore)==null?void 0:e.call(window))==null?void 0:t.svActive)||"-"}),cfEnvHosts:d(()=>{const e=window.envFoConsts||{},t=(o,u)=>o?o+(u?":"+u:""):"(\uC0C1\uB300\uACBD\uB85C)";return{api:t(e.baseApiHost,e.baseApiPort),cdn:t(e.cdnApiHost,e.cdnApiPort)}})}},template:`
<header class="glass" style="height:var(--header-h,60px);min-height:60px;flex-shrink:0;display:flex;align-items:center;padding:0 20px;gap:14px;position:sticky;top:0;z-index:50;border-left:none;border-right:none;border-top:none;">

  <!-- ===== \u25A0. Hamburger (mobile) ====================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <button @click="handleBtnAction('sidebar-toggle-mobile')"
    style="background:none;border:none;cursor:pointer;padding:6px;display:flex;flex-direction:column;gap:4px;flex-shrink:0;"
    class="lg:hidden" aria-label="\uBA54\uB274">
    <span style="display:block;width:20px;height:2px;background:var(--text-primary);border-radius:2px;transition:all 0.25s;"></span>
    <span style="display:block;width:20px;height:2px;background:var(--text-primary);border-radius:2px;transition:all 0.25s;"></span>
    <span style="display:block;width:14px;height:2px;background:var(--text-primary);border-radius:2px;transition:all 0.25s;"></span>
  </button>

  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
  <!-- ===== \u25A0. Collapse toggle (desktop) =============================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <button @click="handleBtnAction('sidebar-toggle-desktop')"
    style="background:none;border:none;cursor:pointer;padding:6px;display:none;align-items:center;color:var(--text-secondary);flex-shrink:0;"
    class="hidden-sm" aria-label="\uC0AC\uC774\uB4DC\uBC14 \uD1A0\uAE00">
    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
  </button>

  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
  <!-- ===== \u25A0. Logo ==================================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <button @click="handleBtnAction('nav-go-home')" style="background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:8px;flex-shrink:0;padding:0;">
    <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA8\uB798 ================================================== -->
      <ellipse cx="30" cy="92" rx="22" ry="6" fill="#d4a017"/>
      <ellipse cx="30" cy="92" rx="18" ry="4" fill="#e6b422"/>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC904\uAE30 ================================================== -->
      <path d="M30 90 Q25 60 35 30" stroke="#b8860b" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M30 90 Q25 60 35 30" stroke="#d4a017" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC78E =================================================== -->
      <path d="M35 30 Q55 10 75 18" stroke="#228B22" stroke-width="2.5" fill="none"/>
      <path d="M35 30 Q60 15 78 25" stroke="#2d8f2d" stroke-width="2" fill="none"/>
      <path d="M35 30 Q50 5 70 8" stroke="#1a7a1a" stroke-width="2.5" fill="none"/>
      <path d="M35 30 Q20 8 5 15" stroke="#228B22" stroke-width="2.5" fill="none"/>
      <path d="M35 30 Q15 12 3 22" stroke="#2d8f2d" stroke-width="2" fill="none"/>
      <path d="M35 30 Q25 5 10 5" stroke="#1a7a1a" stroke-width="2.5" fill="none"/>
      <path d="M35 30 Q35 8 40 3" stroke="#228B22" stroke-width="2" fill="none"/>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC5F4\uB9E4 ================================================== -->
      <circle cx="40" cy="34" r="5" fill="#8B008B"/>
      <circle cx="48" cy="38" r="5" fill="#dc2626"/>
      <circle cx="44" cy="44" r="5" fill="#2563eb"/>
      <circle cx="35" cy="40" r="4.5" fill="#7c3aed"/>
      <circle cx="52" cy="32" r="4" fill="#dc2626"/>
      <circle cx="50" cy="46" r="4" fill="#2563eb"/>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD558\uC774\uB77C\uC774\uD2B8 =============================================== -->
      <circle cx="38" cy="32" r="1.5" fill="rgba(255,255,255,0.4)"/>
      <circle cx="46" cy="36" r="1.5" fill="rgba(255,255,255,0.4)"/>
      <circle cx="42" cy="42" r="1.5" fill="rgba(255,255,255,0.4)"/>
    </svg>
    <div style="display:flex;flex-direction:column;line-height:1.1;text-align:left;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================== -->
      <span style="font-size:0.95rem;font-weight:800;color:var(--text-primary);letter-spacing:-0.3px;">{{ config.name }}</span>
      <span style="font-size:0.6rem;color:var(--text-muted);font-weight:500;letter-spacing:0.08em;display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
        {{ config.tagline }}
        <span class="fo-site-badge"
          :title="'FO_SITE_NO=' + (foSiteNo || '-') + ' BO_SITE_NO=' + (boSiteNo || '-') + ' \u2014 \uD074\uB9AD: \uBA54\uB274 \uBC14\uB85C\uAC00\uAE30'"
          :data-tip="'FO_SITE_NO=' + (foSiteNo || '-') + ' BO_SITE_NO=' + (boSiteNo || '-')"
          style="cursor:pointer;"
          @click.stop="handleBtnAction('siteSwitch-open-quick-menu')">
          <span :style="{fontWeight:800,marginLeft:'4px',color: foSiteNo==='03' ? '#7b1fa2' : foSiteNo==='02' ? '#2e7d6b' : foSiteNo==='9999' ? '#888' : '#9f2946'}">{{ foSiteNo || '-' }}</span>
          <span :style="{fontWeight:800,marginLeft:'3px',color: boSiteNo==='03' ? '#7b1fa2' : boSiteNo==='02' ? '#2e7d6b' : boSiteNo==='9999' ? '#888' : '#9f2946'}">{{ boSiteNo || '-' }}</span>
        </span>
        <span
          :title="'active=' + cfFoActive"
          :style="{
            fontFamily:'monospace', fontSize:'9px', fontWeight:700, padding:'0px 5px',
            borderRadius:'3px', border:'1px solid',
            color: cfFoActive==='prod'?'#fff':cfFoActive==='dev'?'#1565c0':cfFoActive==='local'?'#7a5800':'#555',
            background: cfFoActive==='prod'?'#e53935':cfFoActive==='dev'?'#e3f0fb':cfFoActive==='local'?'#fff59d':'#f0f0f0',
            borderColor: cfFoActive==='prod'?'#c62828':cfFoActive==='dev'?'#90caf9':cfFoActive==='local'?'#f9a825':'#ccc',
          }">{{ cfFoActive }}</span>
      </span>
      <!-- 2026-09-14(\uC694\uCCAD\uC0AC\uD56D: "ShopJoy \uB77C\uBCA8 \uC544\uB798\uC5D0\uB3C4 local, dev, prod / api url / cdn url
           \uD45C\uC2DC\uD574\uC918") \u2014 \uC704 \uD0DC\uADF8\uB77C\uC778 \uC904(prod/dev/local \uBC30\uC9C0)\uC5D0 \uC774\uC5B4 api/cdn \uD638\uC2A4\uD2B8\uB97C \uD55C \uC904 \uB354. -->
      <span style="font-size:0.58rem;color:var(--text-muted);font-weight:400;opacity:0.75;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:45vw;">
        api {{ cfEnvHosts.api }} \xB7 cdn {{ cfEnvHosts.cdn }}
      </span>
    </div>
  </button>

  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
  <!-- ===== \u25A0. Top nav ================================================= -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <nav style="flex:1;display:flex;align-items:center;gap:2px;overflow-x:auto;padding:0 8px;scrollbar-width:none;">
    <template v-for="m in cfTopMenu" :key="m.menuId">
      <!-- ===== \u25A0.\u25A0.\u25A0. Site 01\uC740 disp UI \uC0D8\uD50C \uBA54\uB274 \uC228\uAE40 (samples\uB294 01 \uC5D0\uC11C \uC81C\uC678) ======= -->
      <template v-if="foSiteNo==='01' ? ((m.menuId ? ((m.menuId.startsWith('dispUi') || m.menuId==='divider-disp')) : false)) : false"></template>
      <span v-else-if="m.type==='divider'" style="color:var(--border);padding:0 6px;font-size:1rem;user-select:none;">|</span>
      <button v-else @click="handleSelectAction('nav-select-menu', m.menuId)" class="nav-link" :class="{active: page===m.menuId, 'nav-link-not-loaded': !fnIsLoaded(m.menuId)}">
        <span>{{ m.menuNm }}</span>
      </button>
    </template>
  </nav>

  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
  <!-- ===== \u25A0. \uC6B0\uCE21: \uB85C\uADF8\uC778/\uC720\uC800 \u2192 \uD14C\uB9C8 \uC21C ======================================= -->
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- 2026-09-06 \uBC84\uADF8\uC218\uC815(\uC694\uCCAD\uC0AC\uD56D: "\uBAA8\uBC14\uC77C \uBAA8\uB4DC\uB85C \uBCF4\uBA74 fo \uD654\uBA74 \uC774\uC0C1\uD574... \uC0C1\uB2E8\uC5D0 \uBC84\uD2BC\uB4E4
       \uC090\uC838\uB098\uC654\uACE0") \u2014 \uC774 \uD074\uB7EC\uC2A4\uD130\uC5D0 hidden-sm/lg:hidden \uB958 \uBC18\uC751\uD615 \uCC98\uB9AC\uAC00 \uC804\uD600 \uC5C6\uC5B4\uC11C \uBAA8\uBC14\uC77C
       \uD3ED\uC5D0\uC11C \uC544\uC774\uCF58 7~8\uAC1C\uAC00 \uD55C \uC904\uC5D0 \uADF8\uB300\uB85C \uB2E4 \uADF8\uB824\uC9C0\uBA70 \uD654\uBA74 \uBC16\uC73C\uB85C \uB118\uCCE4\uB2E4. \uADF8\uC911 \uC6B0\uC120\uC21C\uC704\uAC00
       \uB0AE\uC740 4\uAC1C(\uD14C\uB9C8\uD1A0\uAE00/\uB9C1\uD06C\uACF5\uC720/\uCE74\uCE74\uC624\uACF5\uC720/PDF)\uB294 .fo-header-actions \uC2A4\uCF54\uD504\uB85C \uBAA8\uBC14\uC77C\uC5D0\uC11C\uB9CC
       \uC228\uAE30\uACE0(fo-global-style0N.css @media max-width:767px), \uB300\uC2E0 \uC544\uB798 \uC124\uC815(\u2699) \uB4DC\uB86D\uB2E4\uC6B4
       \uC548\uC5D0 \uD56D\uBAA9\uC73C\uB85C \uCD94\uAC00\uD574\uC11C \uAE30\uB2A5 \uC790\uCCB4\uB294 \uADF8\uB300\uB85C \uC720\uC9C0\uD55C\uB2E4. -->
  <div class="fo-header-actions" style="display:flex;align-items:center;gap:5px;flex-shrink:0;">

    <!-- ===== \u25A0.\u25A0. \u{1F514} \uC54C\uB9BC \uC885 (\uD68C\uC6D0\uC5D0\uAC8C \uC628 \uC54C\uB9BC + \uC624\uB958\uC815\uBCF4 \uB204\uC801) \u2014 \uB85C\uADF8\uC778 \uC2DC\uC5D0\uB9CC ==== -->
    <co-noti-bell v-if="cfIsLogin" ctx="fo" :navigate="navigate" />

    <!-- ===== \u25A0.\u25A0. \uBE44\uB85C\uADF8\uC778 ================================================== -->
    <button v-if="!cfIsLogin" @click="handleBtnAction('nav-show-login')"
      style="padding:7px 16px;border:1.5px solid var(--blue);border-radius:20px;background:transparent;color:var(--blue);cursor:pointer;font-size:0.82rem;font-weight:700;white-space:nowrap;transition:all 0.2s;"
      @mouseenter="$event.target.style.background='var(--blue)';$event.target.style.color='#fff';"
      @mouseleave="$event.target.style.background='transparent';$event.target.style.color='var(--blue)';">
      \uB85C\uADF8\uC778
    </button>

    <!-- ===== \u25A1.\u25A1. \uBE44\uB85C\uADF8\uC778 ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uB85C\uADF8\uC778 \uC0C1\uD0DC ================================================ -->
    <div v-else ref="userMenuRoot" style="position:relative;">
      <button type="button" @click="handleBtnAction('userMenu-toggle')"
        style="display:flex;align-items:center;gap:8px;padding:6px 12px;border:1.5px solid var(--border);border-radius:20px;background:var(--bg-card);cursor:pointer;font-size:0.82rem;color:var(--text-primary);font-weight:600;">
        <span style="width:24px;height:24px;border-radius:50%;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;flex-shrink:0;">
          {{ cfUserFirstChar }}
        </span>
        <span class="hidden-sm" style="max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ cfAuthUser.authNm || cfAuthUser.memberNm }}</span>
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
          :style="uiState.userMenuOpen?'transform:rotate(180deg);transition:0.2s;':'transition:0.2s;'"><path d="M6 9l6 6 6-6"/></svg>
      </button>

      <!-- ===== \u25A0.\u25A0.\u25A0. \uB4DC\uB86D\uB2E4\uC6B4 ================================================ -->
      <div v-if="uiState.userMenuOpen" @click.stop
        style="position:absolute;right:0;top:calc(100% + 8px);width:196px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);box-shadow:0 8px 28px rgba(0,0,0,0.13);z-index:100;overflow:hidden;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0AC\uC6A9\uC790 \uC815\uBCF4 ============================================ -->
        <div style="padding:14px 16px;border-bottom:1px solid var(--border);">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--green));color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;flex-shrink:0;">
              {{ cfUserFirstChar }}
            </span>
            <div style="min-width:0;">
              <div style="font-size:0.88rem;font-weight:700;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ cfAuthUser.authNm || cfAuthUser.memberNm }}</div>
              <div style="font-size:0.72rem;color:var(--text-muted);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ cfAuthUser.email }}</div>
            </div>
          </div>
        </div>

        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBA54\uB274 \uD56D\uBAA9 ============================================= -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
        <div style="padding:4px 0;">
          <button v-for="item in cfMenuItems" :key="item.label" @click="handleSelectAction('userMenu-select-item', item)"
            style="width:100%;padding:10px 16px;border:none;background:none;cursor:pointer;text-align:left;font-size:0.86rem;display:flex;align-items:center;gap:9px;transition:background 0.15s;"
            :style="'color:'+item.color"
            @mouseenter="$event.currentTarget.style.background='var(--blue-dim)'"
            @mouseleave="$event.currentTarget.style.background='transparent'">
            <span style="font-size:1rem;width:18px;text-align:center;">{{ item.icon }}</span>
            {{ item.label }}
          </button>
        </div>

        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB85C\uADF8\uC544\uC6C3 ============================================== -->
        <div style="border-top:1px solid var(--border);padding:4px 0;">
          <button @click="handleBtnAction('userMenu-logout')"
            style="width:100%;padding:10px 16px;border:none;background:none;cursor:pointer;text-align:left;font-size:0.86rem;color:#ef4444;display:flex;align-items:center;gap:9px;transition:background 0.15s;"
            @mouseenter="$event.currentTarget.style.background='#fef2f2'"
            @mouseleave="$event.currentTarget.style.background='transparent'">
            <span style="font-size:1rem;width:18px;text-align:center;">\u{1F6AA}</span> \uB85C\uADF8\uC544\uC6C3
          </button>
        </div>
      </div>
    </div>

    <!-- ===== \u25A1.\u25A1. \uB85C\uADF8\uC778 \uC0C1\uD0DC ================================================ -->
    <!-- ===== \u25A0.\u25A0. \uC88B\uC544\uC694(\uC704\uC2DC\uB9AC\uC2A4\uD2B8) \uC544\uC774\uCF58 ======================================== -->
    <!-- ===== \u25A0.\u25A0. \uBC84\uD2BC \uC601\uC5ED ================================================= -->
    <button type="button" @click="handleBtnAction('nav-go-like')"
      style="position:relative;display:flex;align-items:center;justify-content:center;width:36px;height:36px;padding:0;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);cursor:pointer;flex-shrink:0;transition:border-color 0.2s,background 0.2s;"
      title="\uC704\uC2DC\uB9AC\uC2A4\uD2B8"
      @mouseenter="$event.currentTarget.style.borderColor='var(--blue)';$event.currentTarget.style.background='var(--blue-dim)'"
      @mouseleave="$event.currentTarget.style.borderColor='var(--border)';$event.currentTarget.style.background='var(--bg-card)'">
      <span style="position:relative;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--text-secondary);">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span v-if="appLikeCount > 0" class="header-cart-badge">{{ appLikeCount > 99 ? '99+' : appLikeCount }}</span>
      </span>
    </button>

    <!-- ===== \u25A1.\u25A1. \uBC84\uD2BC \uC601\uC5ED ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uC7A5\uBC14\uAD6C\uB2C8: \uC544\uC774\uCF58 + \uBC43\uC9C0(\uAC1C\uC218) ==================================== -->
    <button type="button" @click="handleBtnAction('cart-go')"
      class="header-cart-link"
      style="position:relative;display:flex;align-items:center;justify-content:center;width:36px;height:36px;padding:0;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);cursor:pointer;flex-shrink:0;transition:border-color 0.2s,background 0.2s;"
      :aria-label="appCartCount > 0 ? ('\uC7A5\uBC14\uAD6C\uB2C8, ' + (appCartCount > 99 ? '99\uAC1C \uC774\uC0C1' : appCartCount + '\uAC1C') + ' \uC0C1\uD488') : '\uC7A5\uBC14\uAD6C\uB2C8, \uBE44\uC5B4 \uC788\uC74C'"
      title="\uC7A5\uBC14\uAD6C\uB2C8">
      <span class="header-cart-icon-wrap" style="position:relative;display:flex;align-items:center;justify-content:center;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="color:var(--blue);">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <span v-if="appCartCount > 0" class="header-cart-badge">{{ appCartCount > 99 ? '99+' : appCartCount }}</span>
      </span>
    </button>

    <!-- ===== \u25A1.\u25A1. \uC7A5\uBC14\uAD6C\uB2C8: \uC544\uC774\uCF58 + \uBC43\uC9C0(\uAC1C\uC218) ==================================== -->
    <!-- ===== \u25A0.\u25A0. \uD14C\uB9C8 \uD1A0\uAE00 (\uC7A5\uBC14\uAD6C\uB2C8 \uC624\uB978\uCABD) ====================================== -->
    <!-- ===== \u25A0.\u25A0. \uBC84\uD2BC \uC601\uC5ED ================================================= -->
    <button class="theme-toggle" @click="handleBtnAction('theme-toggle')" :title="theme==='light'?'\uB2E4\uD06C \uBAA8\uB4DC\uB85C \uC804\uD658':'\uB77C\uC774\uD2B8 \uBAA8\uB4DC\uB85C \uC804\uD658'">
      <span v-if="theme==='light'">\u{1F319}</span>
      <span v-else>\u2600\uFE0F</span>
    </button>

    <!-- ===== \u25A1.\u25A1. \uBC84\uD2BC \uC601\uC5ED ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uC124\uC815 \uC544\uC774\uCF58 ================================================ -->
    <div data-fo-settings style="position:relative;flex-shrink:0;">
      <button @click="handleBtnAction('settings-toggle')"
        style="display:flex;align-items:center;justify-content:center;width:32px;height:32px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);cursor:pointer;font-size:14px;color:var(--text-secondary);transition:all 0.2s;"
        :style="appShowSettings?'border-color:var(--accent,#c9a96e);background:var(--accent-dim,#fdf8f1);color:var(--accent,#c9a96e);':''"
        title="\uC124\uC815">\u2699</button>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC124\uC815 \uB4DC\uB86D\uB2E4\uC6B4 ============================================= -->
      <div v-if="appShowSettings"
        style="position:absolute;right:0;top:calc(100% + 8px);width:220px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.13);z-index:200;overflow:hidden;padding:4px 0;">
        <button @click="handleBtnAction('nav-go-prodList')"
          style="width:100%;padding:10px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:var(--text-primary);transition:background 0.15s;"
          @mouseenter="$event.currentTarget.style.background='var(--blue-dim,#f0f4ff)'"
          @mouseleave="$event.currentTarget.style.background='transparent'">
          <span style="font-size:13px;">\u2696\uFE0F</span>
          <span>\uC0C1\uD488\uBE44\uAD50</span>
          <span v-if="cfCompareCount" style="margin-left:auto;font-size:10px;background:#e8e8e8;border-radius:8px;padding:1px 5px;color:#666;">{{ cfCompareCount }}</span>
        </button>
        <button @click="handleBtnAction('settings-toggle-api-log')"
          style="width:100%;padding:10px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:var(--text-primary);transition:background 0.15s;"
          :style="appShowApiLog?'background:var(--accent-dim,#fdf8f1);color:var(--accent,#c9a96e);font-weight:700;':''"
          @mouseenter="$event.currentTarget.style.background='var(--blue-dim,#f0f4ff)'"
          @mouseleave="$event.currentTarget.style.background=appShowApiLog?'var(--accent-dim,#fdf8f1)':'transparent'">
          <span style="font-size:13px;">\u{1F310}</span>
          <span>API \uB85C\uADF8 \uBCF4\uAE30</span>
          <span v-if="appApiLogs ? (appApiLogs.length) : false" style="margin-left:auto;font-size:10px;background:#e8e8e8;border-radius:8px;padding:1px 5px;color:#666;">{{ appApiLogs.length }}</span>
        </button>
        <button @click="handleBtnAction('settings-toggle-api-toast')"
          style="width:100%;padding:10px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:var(--text-primary);transition:background 0.15s;"
          :style="appApiToast?'background:var(--accent-dim,#fdf8f1);color:var(--accent,#c9a96e);font-weight:700;':''"
          @mouseenter="$event.currentTarget.style.background='var(--blue-dim,#f0f4ff)'"
          @mouseleave="$event.currentTarget.style.background=appApiToast?'var(--accent-dim,#fdf8f1)':'transparent'">
          <span style="font-size:13px;">\u{1F514}</span>
          <span>API \uD1A0\uC2A4\uD2B8 \uCD9C\uB825</span>
          <span style="margin-left:auto;font-size:10px;border-radius:8px;padding:1px 6px;font-weight:700;" :style="appApiToast?'background:var(--accent,#c9a96e);color:#fff;':'background:#e8e8e8;color:#888;'">{{ appApiToast ? 'ON' : 'OFF' }}</span>
        </button>
        <!-- 2026-09-06(\uC694\uCCAD\uC0AC\uD56D: "\uB9C1\uD06C\uACF5\uC720 pdf \uC800\uC7A5 \uC774\uB7F0\uAC70\uB85C \uC778\uD574 \uB514\uC790\uC778 \uBD80\uC790\uC5F0\uC2A4\uB7EC\uC6B0\uBA74 \uC124\uC815
             \uC548\uC73C\uB85C \uB123\uC5B4\uB3C4 \uB3FC") \u2014 \uBAA8\uBC14\uC77C\uC5D0\uC11C \uC228\uAE34 \uD14C\uB9C8\uD1A0\uAE00/\uB9C1\uD06C\uACF5\uC720/\uCE74\uCE74\uC624\uACF5\uC720/PDF \uB97C \uC5EC\uAE30\uC11C\uB3C4
             \uADF8\uB300\uB85C \uC2E4\uD589 \uAC00\uB2A5\uD558\uAC8C \uD568(\uB370\uC2A4\uD06C\uD0D1\uC5D0\uC11C\uB294 \uC0C1\uB2E8 \uC544\uC774\uCF58\uACFC \uC911\uBCF5\uB418\uC9C0\uB9CC \uBB34\uD574). -->
        <div style="border-top:1px solid var(--border);margin:4px 0;"></div>
        <button @click="handleBtnAction('theme-toggle')"
          style="width:100%;padding:10px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:var(--text-primary);transition:background 0.15s;"
          @mouseenter="$event.currentTarget.style.background='var(--blue-dim,#f0f4ff)'"
          @mouseleave="$event.currentTarget.style.background='transparent'">
          <span style="font-size:13px;">{{ theme==='light' ? '\u{1F319}' : '\u2600\uFE0F' }}</span>
          <span>{{ theme==='light' ? '\uB2E4\uD06C \uBAA8\uB4DC\uB85C \uC804\uD658' : '\uB77C\uC774\uD2B8 \uBAA8\uB4DC\uB85C \uC804\uD658' }}</span>
        </button>
        <!-- 2026-09-06(\uC694\uCCAD\uC0AC\uD56D: "\uB9C1\uD06C\uACF5\uC720\uD558\uAE30 \uC0C1\uB2E8\uC5D0 \uAD6C\uBD84\uC120 \uB123\uC5B4\uC8FC\uACE0") -->
        <div style="border-top:1px solid var(--border);margin:4px 0;"></div>
        <button @click="handleBtnAction('settings-copy-link')"
          style="width:100%;padding:10px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:var(--text-primary);transition:background 0.15s;"
          @mouseenter="$event.currentTarget.style.background='var(--blue-dim,#f0f4ff)'"
          @mouseleave="$event.currentTarget.style.background='transparent'">
          <span style="font-size:13px;">\u{1F517}</span>
          <span>\uB9C1\uD06C \uACF5\uC720(URL \uBCF5\uC0AC)</span>
        </button>
        <button @click="handleBtnAction('settings-share-kakao')"
          style="width:100%;padding:10px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:var(--text-primary);transition:background 0.15s;"
          @mouseenter="$event.currentTarget.style.background='var(--blue-dim,#f0f4ff)'"
          @mouseleave="$event.currentTarget.style.background='transparent'">
          <span style="font-size:13px;">\u{1F4AC}</span>
          <span>\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720</span>
        </button>
        <button @click="handleBtnAction('settings-export-pdf')" :disabled="pdfExporting"
          style="width:100%;padding:10px 14px;border:none;background:none;cursor:pointer;text-align:left;font-size:13px;display:flex;align-items:center;gap:8px;color:var(--text-primary);transition:background 0.15s;"
          @mouseenter="$event.currentTarget.style.background='var(--blue-dim,#f0f4ff)'"
          @mouseleave="$event.currentTarget.style.background='transparent'">
          <span style="font-size:13px;">{{ pdfExporting ? '\u23F3' : '\u{1F4C4}' }}</span>
          <span>PDF \uB2E4\uC6B4\uB85C\uB4DC</span>
        </button>
        <!-- 2026-09-06(\uC694\uCCAD\uC0AC\uD56D: "\uC81C\uC77C \uC544\uB798\uC5D0 \uAD6C\uBD84\uC120 \uB193\uACE0 \uC544\uB798\uC5D0 (\uAC1C\uBC1C) \uAC12\uC801\uC6A9 [1][2][3] \uBC84\uD2BC
             \uCD94\uAC00\uD574\uC918 / \uC774\uB984 \uC5F0\uB77D\uCC98 \uC774\uBA54\uC77C \uC8FC\uC18C \uB4F1\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uAC8C \uD574\uC918 / \uD654\uBA74\uB9C8\uB2E4
             \uAC12\uC801\uC6A9 \uD3B8\uD558\uAC8C \uD560\uAC70\uC57C / \uBB38\uC758\uC0C1\uB2F4\uC758 \uACBD\uC6B0\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC9C0 / \uBC88\uD638\uC5D0 \uB9C8\uC6B0\uC2A4 \uC624\uBC84\uD558\uBA74
             \uC124\uC815\uB41C \uD56D\uBAA9\uBA85:\uD56D\uBAA9\uAC12 \uC815\uBCF4 \uBCF4\uC5EC\uC918") \u2014 \uD074\uB9AD\uD558\uBA74 \uC804\uC5ED 'fo-dev-autofill' \uC774\uBCA4\uD2B8\uB97C
             \uC3D8\uACE0(coUtil.cofDispatchDevAutofill), \uC8FC\uBB38\uC11C(Order.js)\xB7\uBB38\uC758\uC0C1\uB2F4(Contact.js) \uB4F1
             \uD3FC\uC774 \uC788\uB294 \uD654\uBA74\uC774 \uAC01\uC790 \uAD6C\uB3C5\uD574\uC11C \uC790\uAE30 \uD3FC \uD544\uB4DC(name/tel/email/postcode/address/
             addressDetail)\uB97C \uCC44\uC6B4\uB2E4 \u2014 \uD5E4\uB354\uB294 \uD654\uBA74\uBCC4 \uD3FC \uAD6C\uC870\uB97C \uBAB0\uB77C\uB3C4 \uB428.
             \u26A0 \uD504\uB9AC\uC14B\uC5D0 \uC2E4\uC81C \uAC1C\uC778\uC815\uBCF4(coUtil.js \uCC38\uC870)\uAC00 \uB4E4\uC5B4\uC788\uC5B4 \uC6B4\uC601(prod)\uC5D0\uC11C\uB294 \uC774 UI \uC790\uCCB4\uB97C
             \uC228\uAE34\uB2E4(cfFoActive!=='prod') \u2014 \uB85C\uADF8\uC778 \uC5C6\uC774\uB3C4 \uBCF4\uC774\uB294 \uACF5\uAC1C \uD5E4\uB354\uB77C \uC6B4\uC601 \uB178\uCD9C\uC740 \uB9C9\uC544\uC57C \uD568. -->
        <template v-if="cfFoActive !== 'prod'">
          <div style="border-top:1px solid var(--border);margin:4px 0;"></div>
          <div style="padding:8px 14px 4px;font-size:11px;color:var(--text-muted);font-weight:700;">(\uAC1C\uBC1C) \uAC12\uC801\uC6A9</div>
          <div style="display:flex;gap:6px;padding:2px 14px 10px;">
            <button v-for="n in [1,2,3]" :key="n" type="button" @click="handleBtnAction('dev-apply-values', n)"
              @mouseenter="showDevTip(n, $event)" @mouseleave="hideDevTip"
              style="flex:1;padding:6px 0;border:1.5px solid var(--border);border-radius:6px;background:var(--bg-base);color:var(--text-secondary);cursor:pointer;font-size:12px;font-weight:700;transition:all 0.15s;"
              :style="devTip===n?'border-color:var(--blue);color:var(--blue);':''">
              {{ n }}
            </button>
          </div>
        </template>
        <!-- 2026-09-14(\uC694\uCCAD\uC0AC\uD56D: "\uC124\uC815 \uC544\uB798\uCABD\uC5D0 local, dev, prod \uC5EC\uBD80 / api url / cdn url 3\uC904
             \uD45C\uC2DC\uD574\uC918 / \uC5EC\uAE30 \uC124\uC815\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC57C") \u2014 BO \uC124\uC815 \uB4DC\uB86D\uB2E4\uC6B4\uACFC \uB3D9\uC77C\uD558\uAC8C \uD558\uB2E8\uC5D0 \uD45C\uC2DC.
             cfFoActive/cfEnvHosts\uB294 \uC704 \uD5E4\uB354 \uB85C\uACE0 \uC544\uB798 \uBC30\uC9C0\uC640 \uAC19\uC740 \uAC12(\uADF8\uB300\uB85C \uC7AC\uC0AC\uC6A9). -->
        <div style="border-top:1px solid var(--border);margin:4px 0;"></div>
        <div style="padding:6px 14px 8px;font-size:10px;color:var(--text-muted);line-height:1.5;">
          <div>{{ cfFoActive }}</div>
          <div>api {{ cfEnvHosts.api }}</div>
          <div>cdn {{ cfEnvHosts.cdn }}</div>
        </div>
        <!-- devTip \uBBF8\uB9AC\uBCF4\uAE30 \uB808\uC774\uC5B4\uB294 \uC774 dropdown(overflow:hidden) \uBC16\uC73C\uB85C Teleport \u2014 \uC548\uC5D0 \uB450\uBA74
             \uB465\uADFC \uBAA8\uC11C\uB9AC \uD074\uB9AC\uD551\uC5D0 \uC798\uB824\uC11C \uC798 \uC548 \uBCF4\uC600\uB2E4(\uC694\uCCAD\uC0AC\uD56D: "\uAC12\uC801\uC6A9 \uC774 \uAC00\uB824\uBCF4\uC774\uB124"). -->
        <Teleport to="body">
          <div v-if="devTip"
            :style="{ position:'fixed', top: devTipPos.top+'px', left: devTipPos.left+'px', transform:'translate(-50%,-100%) translateY(-6px)' }"
            style="z-index:9999;min-width:220px;max-width:280px;padding:10px 12px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);box-shadow:0 6px 20px rgba(0,0,0,0.14);font-size:12px;line-height:1.7;color:var(--text-secondary);text-align:left;white-space:normal;pointer-events:none;">
            <div v-for="f in fnDevPresetEntries(devTip)" :key="f.label" style="word-break:break-all;"><b style="color:var(--text-primary);">{{ f.label }}</b>: {{ f.value }}</div>
          </div>
        </Teleport>
      </div>
    </div>

    <!-- ===== \u25A1.\u25A1. \uC124\uC815 \uC544\uC774\uCF58 ================================================ -->
    <!-- ===== \u25A0.\u25A0. \uB9C1\uD06C\uBCF5\uC0AC / \uCE74\uCE74\uC624\uACF5\uC720 / PDF (\uCD5C\uC0C1\uB2E8 \uC6B0\uCE21 \uACE0\uC815 \uC544\uC774\uCF58) ============================ -->
    <!-- 2026-08-30: \uB9C8\uC6B0\uC2A4\uC624\uBC84 \uC2DC \uC2E4\uC81C \uC804\uB2EC\uAC12(shareTip) \uBBF8\uB9AC\uBCF4\uAE30 \uB808\uC774\uC5B4 \uCD94\uAC00 \u2014 position:relative \uB85C
         \uAC10\uC2F8\uC11C \uC790\uC2DD \uB808\uC774\uC5B4\uB97C \uC774 \uBC84\uD2BC \uAE30\uC900\uC73C\uB85C \uC808\uB300\uBC30\uCE58\uD55C\uB2E4. -->
    <div style="position:relative;">
      <!-- 2026-08-30: BO(boAppBase.js)\uC640 \uB3D9\uC77C\uD558\uAC8C \uACF5\uC6A9 \uD074\uB798\uC2A4(.btn_link, bo/fo-global-style0N.css)
           \uC0AC\uC6A9 \u2014 \uC0C9\uC744 \uC778\uB77C\uC778\uC73C\uB85C \uB530\uB85C \uC815\uD558\uC9C0 \uC54A\uACE0 BO/FO \uACF5\uD1B5 CSS \uD55C \uACF3\uC5D0\uC11C\uB9CC \uAD00\uB9AC\uD55C\uB2E4. -->
      <button type="button" class="btn_link" @click="handleBtnAction('settings-copy-link')"
        @mouseenter="showShareTip('link')" @mouseleave="hideShareTip" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)">\u{1F517}</button>
      <div v-if="shareTip.kind==='link'"
        style="position:absolute;top:calc(100% + 6px);right:0;z-index:200;min-width:260px;max-width:360px;padding:10px 12px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);box-shadow:0 6px 20px rgba(0,0,0,0.14);font-size:12px;line-height:1.6;color:var(--text-secondary);">
        <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">\u{1F517} \uC804\uB2EC\uAC12(\uD074\uB9AD \uC2DC \uD074\uB9BD\uBCF4\uB4DC\uB85C \uBCF5\uC0AC)</div>
        <div style="word-break:break-all;"><b>url</b> = {{ shareTip.url }}</div>
      </div>
    </div>
    <div style="position:relative;">
      <button type="button" class="btn_kakao" @click="handleBtnAction('settings-share-kakao')"
        @mouseenter="showShareTip('kakao')" @mouseleave="hideShareTip" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720">\u{1F4AC}</button>
      <div v-if="shareTip.kind==='kakao'"
        style="position:absolute;top:calc(100% + 6px);right:0;z-index:200;min-width:260px;max-width:360px;padding:10px 12px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);box-shadow:0 6px 20px rgba(0,0,0,0.14);font-size:12px;line-height:1.6;color:var(--text-secondary);">
        <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">\u{1F4AC} \uC804\uB2EC\uAC12(window.coExtSdk.shareKakao \uC778\uC790)</div>
        <div style="word-break:break-all;"><b>title</b> = {{ shareTip.title }}</div>
        <div style="word-break:break-all;"><b>url</b> = {{ shareTip.url }}</div>
        <div style="word-break:break-all;"><b>imageUrl</b> = {{ shareTip.imageUrl }}</div>
      </div>
    </div>
    <!-- 2026-08-30: BO \uC640 \uB3D9\uC77C\uD558\uAC8C .btn_pdf \uACF5\uC6A9 \uD074\uB798\uC2A4 \uC0AC\uC6A9(\uC0C9/\uD06C\uAE30 \uC778\uB77C\uC778 \uC9C0\uC815 \uC81C\uAC70) -->
    <button type="button" class="btn_pdf" @click="handleBtnAction('settings-export-pdf')" title="PDF \uB2E4\uC6B4\uB85C\uB4DC" :disabled="pdfExporting">
      <span v-if="pdfExporting">\u23F3</span>
      <svg v-else width="18" height="20" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2 H20 L28 10 V34 H4 Z" fill="#fff" stroke="#c2410c" stroke-width="1.5"/>
        <path d="M20 2 V10 H28 Z" fill="#f3d4c0"/>
        <rect x="2" y="20" width="28" height="12" rx="2" fill="#e2372c"/>
        <text x="16" y="29" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">PDF</text>
      </svg>
    </button>
  </div>

  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \u2550\u2550 Profile \uBAA8\uB2EC \u2550\u2550 ======================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <Teleport to="body">
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <div v-if="uiState.profileOpen" style="position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:200;display:flex;align-items:center;justify-content:center;padding:16px;" @click.self="handleBtnAction('profile-close')">
    <div style="background:var(--bg-card);border-radius:var(--radius);width:100%;max-width:440px;max-height:88vh;overflow-y:auto;padding:28px;position:relative;box-shadow:0 20px 60px rgba(0,0,0,0.2);">
      <button @click="handleBtnAction('profile-close')" style="position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);">\u2715</button>

      <div style="margin-bottom:22px;">
        <div style="font-size:1.2rem;font-weight:800;color:var(--text-primary);">\u270F\uFE0F \uD504\uB85C\uD544 \uC218\uC815</div>
        <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;">\uD68C\uC6D0 \uC815\uBCF4\uB97C \uC218\uC815\uD558\uC138\uC694</div>
      </div>

      <div style="display:flex;flex-direction:column;gap:12px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC774\uB984 ================================================ -->
        <div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">\uC774\uB984 <span style="color:var(--blue);">*</span></div>
          <input v-model="pf.memberNm" :style="IS" placeholder="\uC774\uB984">
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC774\uBA54\uC77C (\uC77D\uAE30\uC804\uC6A9) ======================================== -->
        <div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">\uC774\uBA54\uC77C</div>
          <input v-model="pf.email" :style="IS.replace('var(--bg-card)','var(--bg-base)')" readonly style="cursor:default;">
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD734\uB300\uD3F0 =============================================== -->
        <div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">\uD734\uB300\uD3F0</div>
          <input v-model="pf.phone" :style="IS" placeholder="010-0000-0000">
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC8FC\uC18C ================================================ -->
        <div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">\uC8FC\uC18C</div>
          <div style="display:flex;gap:8px;margin-bottom:6px;">
            <input v-model="pf.postcode" placeholder="\uC6B0\uD3B8\uBC88\uD638" readonly
              style="width:100px;flex-shrink:0;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.85rem;cursor:default;outline:none;">
            <button @click="handleBtnAction('profile-search-addr')" type="button"
              style="padding:0 14px;border:1.5px solid var(--blue);border-radius:8px;background:var(--blue-dim);color:var(--blue);font-size:0.82rem;font-weight:700;cursor:pointer;white-space:nowrap;">
              \u{1F4EE} \uC8FC\uC18C \uAC80\uC0C9
            </button>
          </div>
          <input v-model="pf.address" placeholder="\uB3C4\uB85C\uBA85 \uC8FC\uC18C" readonly
            style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.85rem;cursor:default;outline:none;margin-bottom:6px;">
          <input v-model="pf.addressDetail" :style="IS" placeholder="\uC0C1\uC138 \uC8FC\uC18C (\uB3D9/\uD638\uC218 \uB4F1)">
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0DD\uB144\uC6D4\uC77C + \uC131\uBCC4 ========================================= -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div>
            <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">\uC0DD\uB144\uC6D4\uC77C</div>
            <input v-model="pf.birthdate" type="date"
              style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.85rem;outline:none;">
          </div>
          <div>
            <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">\uC131\uBCC4</div>
            <div style="display:flex;gap:5px;">
              <button v-for="g in [{v:'M',l:'\uB0A8'},{v:'F',l:'\uC5EC'},{v:'',l:'\uBBF8\uC815'}]" :key="g.v"
                @click="handleSelectAction('profile-select-gender', g.v)" type="button"
                style="flex:1;padding:9px 2px;border-radius:8px;font-size:0.78rem;font-weight:600;cursor:pointer;transition:all 0.15s;"
                :style="pf.gender===g.v?'background:var(--blue);color:#fff;border:1.5px solid var(--blue);':'background:var(--bg-base);color:var(--text-secondary);border:1.5px solid var(--border);'">
                {{ g.l }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style="display:flex;gap:10px;margin-top:22px;">
        <button @click="handleBtnAction('profile-close')"
          style="flex:1;padding:12px;border:1.5px solid var(--border);border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer;font-size:0.88rem;font-weight:600;">\uCDE8\uC18C</button>
        <button @click="handleBtnAction('profile-save')" :disabled="!pf.memberNm.trim()"
          style="flex:2;padding:12px;border:none;border-radius:8px;background:var(--blue);color:#fff;cursor:pointer;font-size:0.88rem;font-weight:700;"
          :style="!pf.memberNm.trim()?'opacity:0.5;cursor:not-allowed;':''">\uC800\uC7A5</button>
      </div>
    </div>
  </div>
  </Teleport>
  <!-- ===== \u25A0. \uC8FC\uC18C \uAC80\uC0C9 \uBAA8\uB2EC (\uCE74\uCE74\uC624 \uC6B0\uD3B8\uBC88\uD638, \uC778\uB77C\uC778 \uB808\uC774\uC5B4) ============================ -->
  <fo-addr-search-modal v-if="addrSearchModal.show" modal-name="addr-search" :on-callback="fnCallbackModal" />

  <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <!-- ===== \u25A0. \u2550\u2550 \uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD \uBAA8\uB2EC \u2550\u2550 ======================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <Teleport to="body">
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <div v-if="uiState.pwOpen" style="position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:200;display:flex;align-items:center;justify-content:center;padding:16px;" @click.self="handleBtnAction('pw-close')">
    <div style="background:var(--bg-card);border-radius:var(--radius);width:100%;max-width:400px;padding:28px;position:relative;box-shadow:0 20px 60px rgba(0,0,0,0.2);">
      <button @click="handleBtnAction('pw-close')" style="position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);">\u2715</button>

      <div style="margin-bottom:22px;">
        <div style="font-size:1.2rem;font-weight:800;color:var(--text-primary);">\u{1F511} \uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD</div>
        <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;">\uD604\uC7AC \uBE44\uBC00\uBC88\uD638 \uD655\uC778 \uD6C4 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4</div>
      </div>

      <!-- ===== \u25A0.\u25A0.\u25A0. \uC131\uACF5 \uC0C1\uD0DC =============================================== -->
      <div v-if="pw.ok" style="text-align:center;padding:20px 0;">
        <div style="font-size:2.5rem;margin-bottom:12px;">\u2705</div>
        <div style="font-size:1rem;font-weight:700;color:#22c55e;">\uBE44\uBC00\uBC88\uD638\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4!</div>
      </div>

      <div v-else style="display:flex;flex-direction:column;gap:12px;">
        <div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">\uD604\uC7AC \uBE44\uBC00\uBC88\uD638</div>
          <input v-model="pw.current" type="password" :style="IS" placeholder="\uD604\uC7AC \uBE44\uBC00\uBC88\uD638 \uC785\uB825">
        </div>
        <div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">\uC0C8 \uBE44\uBC00\uBC88\uD638 <span style="font-size:0.72rem;">(6\uC790 \uC774\uC0C1)</span></div>
          <input v-model="pw.next" type="password" :style="IS" placeholder="\uC0C8 \uBE44\uBC00\uBC88\uD638 \uC785\uB825">
        </div>
        <div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">\uC0C8 \uBE44\uBC00\uBC88\uD638 \uD655\uC778</div>
          <input v-model="pw.next2" type="password" :style="IS" placeholder="\uC0C8 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC785\uB825" @keyup.enter="handleBtnAction('pw-save')">
        </div>

        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBE44\uBC88 \uAC15\uB3C4 \uD45C\uC2DC ========================================== -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ============================================ -->
        <div v-if="pw.next" style="display:flex;gap:4px;align-items:center;">
          <div v-for="i in 4" :key="i" style="flex:1;height:3px;border-radius:2px;transition:background 0.2s;"
            :style="i <= (pw.next.length<6?1:pw.next.length<8?2:pw.next.match(/[^a-zA-Z0-9]/)?4:3) ? 'background:var(--blue);' : 'background:var(--border);'"></div>
          <span style="font-size:0.72rem;color:var(--text-muted);margin-left:6px;white-space:nowrap;">
            {{ pw.next.length<6?'\uC57D\uD568':pw.next.length<8?'\uBCF4\uD1B5':pw.next.match(/[^a-zA-Z0-9]/)?'\uAC15\uD568':'\uC591\uD638' }}
          </span>
        </div>

        <div v-if="pw.err" style="color:#ef4444;font-size:0.82rem;padding:8px 12px;background:#fef2f2;border-radius:6px;">{{ pw.err }}</div>

        <div style="display:flex;gap:10px;margin-top:8px;">
          <button @click="handleBtnAction('pw-close')"
            style="flex:1;padding:12px;border:1.5px solid var(--border);border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer;font-size:0.88rem;font-weight:600;">\uCDE8\uC18C</button>
          <button @click="handleBtnAction('pw-save')"
            style="flex:2;padding:12px;border:none;border-radius:8px;background:var(--blue);color:#fff;cursor:pointer;font-size:0.88rem;font-weight:700;">\uBCC0\uACBD\uD558\uAE30</button>
        </div>
      </div>
    </div>
  </div>
  </Teleport>

</header>

  <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->`};
