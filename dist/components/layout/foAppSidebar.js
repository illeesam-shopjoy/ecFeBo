window.foAppSidebar={name:"FoAppSidebar",props:["page","appSidebarOpen","appMobileOpen","config","navigate","appCartCount","appAuth","isPageLoaded"],emits:["modu-fo-toggle-sidebar","modu-fo-close-mobile"],setup(i,{emit:s}){const{ref:w,reactive:a,computed:f,watch:b}=Vue,g=["myOrder","myClaim","myCoupon","myCache","myContact","myChatt"],n=a({sample0Open:!1,sample1Open:!1,sample2Open:!1,dispUiOpen:!1,devToolsOpen:!1,moduleOpen:{cb:!0,sg:!0},loading:!1,error:""}),v=a({}),o=[{menuId:"sample01",menuNm:"01.gridCrud"},{menuId:"sample02",menuNm:"02.infinity_scroll"},{menuId:"sample03",menuNm:"03.comps"},{menuId:"sample04",menuNm:"04.modals"},{menuId:"sample05",menuNm:"05.store"},{menuId:"sample06",menuNm:"06.login_token"},{menuId:"sample07",menuNm:"07.postman"},{menuId:"sample08",menuNm:"08"},{menuId:"sample09",menuNm:"09"}],p=[{menuId:"sample10",menuNm:"10"},{menuId:"sample11",menuNm:"11.dispArea"},{menuId:"sample12",menuNm:"12.dispArea2"},{menuId:"sample13",menuNm:"13.dispPanel"},{menuId:"sample14",menuNm:"14.dispWidget"}],l=[{menuId:"sample21",menuNm:"21.snsLogin"},{menuId:"sample22",menuNm:"22.payment"},{menuId:"sample23",menuNm:"23.sms_email"}],m=[{menuId:"dispUi01",menuNm:"\uC804\uC2DCui01"},{menuId:"dispUi02",menuNm:"\uC804\uC2DCui02"},{menuId:"dispUi03",menuNm:"\uC804\uC2DCui03"},{menuId:"dispUi04",menuNm:"\uC804\uC2DCui04"},{menuId:"dispUi05",menuNm:"\uC804\uC2DCui05"},{menuId:"dispUi06",menuNm:"\uC804\uC2DCui06"}],d=[{groupId:"cb",groupNm:"\uCF54\uBC14\uB298 \uB3C4\uC548",icon:"\u{1F9F6}",items:[{menuId:"cobanul",menuNm:"\uCF54\uBC14\uB298 \uB3C4\uC548",href:"fo-md-cb-cobanul.html"},{menuId:"myCobanul",menuNm:"\uB0B4 \uCF54\uBC14\uB298 \uB3C4\uC548",href:"fo-md-cb-cobanul.html?mine=1"}]},{groupId:"sg",groupNm:"\uC18C\uC2A4\uC820",icon:"\u2699\uFE0F",items:[{menuId:"sourcegen",menuNm:"\uC18C\uC2A4\uC820",href:"fo-md-sg-sourcegen.html"},{menuId:"mySourcegen",menuNm:"\uB0B4 \uC18C\uC2A4\uC820",href:"fo-md-sg-sourcegen.html?mine=1"}]}],x=d.flatMap(e=>e.items),r=[{menuId:"xsStore",menuNm:"Store \uC815\uBCF4\uAD00\uB9AC"},{menuId:"xsLocalStorage",menuNm:"localStorage \uC815\uBCF4\uAD00\uB9AC"},{siteNo:"01",siteNm:"FO=01"},{siteNo:"02",siteNm:"FO=02"},{siteNo:"03",siteNm:"FO=03"},{siteNo:"9999",siteNm:"FO=9999"}],I=(e,t={})=>{if(e==="sidebar-toggle")return s("modu-fo-toggle-sidebar");if(e==="nav-toggle-module"){n.moduleOpen[t]=!n.moduleOpen[t];return}else if(e==="nav-toggle-devTools"){n.devToolsOpen=!n.devToolsOpen;return}else if(e==="nav-toggle-sample0"){n.sample0Open=!n.sample0Open;return}else if(e==="nav-toggle-sample1"){n.sample1Open=!n.sample1Open;return}else if(e==="nav-toggle-sample2"){n.sample2Open=!n.sample2Open;return}else if(e==="nav-toggle-dispUi"){n.dispUiOpen=!n.dispUiOpen;return}else console.warn("[handleBtnAction] unknown cmd:",e)},y=(e,t={})=>{if(e==="nav-select-menu")return u(t);if(e==="nav-select-devTools")return t.menuId?u(t.menuId):t.siteNo?S(t.siteNo):void 0;if(e==="nav-select-module"){location.href=t.href;return}else console.warn("[handleSelectAction] unknown cmd:",e)},S=e=>{try{localStorage.setItem("modu-fo-sy-siteNo",e)}catch{}window.location.href=(window.pageUrl?window.pageUrl("index.html"):"index.html")+"?FO_SITE_NO="+e};b(()=>i.page,e=>{o.some(t=>t.menuId===e)&&(n.sample0Open=!0),p.some(t=>t.menuId===e)&&(n.sample1Open=!0),l.some(t=>t.menuId===e)&&(n.sample2Open=!0),m.some(t=>t.menuId===e)&&(n.dispUiOpen=!0),r.some(t=>t.menuId===e)&&(n.devToolsOpen=!0)},{immediate:!0});const u=e=>{i.navigate(e,{replace:!0}),s("modu-fo-close-mobile")},h=(e,t)=>t==="myOrder"?g.includes(e):e===t,O=e=>i.isPageLoaded?i.isPageLoaded(e):!0,c=window.FO_SITE_NO||"01",N=c!=="01",k=f(()=>{var e,t;return((t=(e=window.sfGetFoMenuStore)==null?void 0:e.call(window))==null?void 0:t.svSidebarMenu)||[]});return{uiState:n,codes:v,handleBtnAction:I,handleSelectAction:y,isMenuActive:h,fnIsLoaded:O,showSamples:N,foSiteNo:c,cfSidebarMenu:k,SAMPLE0_ITEMS:o,SAMPLE1_ITEMS:p,SAMPLE2_ITEMS:l,DISP_UI_ITEMS:m,DEV_TOOLS_ITEMS:r,MODULE_ITEMS:x,MODULE_GROUPS:d}},template:`
<div id="sidebar" :class="[appSidebarOpen?'':'collapsed', appMobileOpen?'open':'']" @click.stop>
  <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
  <div class="sidebar-inner" style="padding:16px 10px;overflow-y:auto;height:100%;display:flex;flex-direction:column;gap:6px;">

    <!-- ===== \u25A0.\u25A0. \uAE30\uC874 sidebarMenu \uC139\uC158 (\uC0D8\uD50C \uC804\uC2DC \uC81C\uC678) ========================== -->
    <template v-for="section in cfSidebarMenu" :key="section.section">
      <template v-if="section.section !== '\uC0D8\uD50C \uC804\uC2DC'">
        <div v-if="appSidebarOpen" style="padding:12px 8px 4px;font-size:0.65rem;font-weight:700;color:var(--text-muted);letter-spacing:0.1em;text-transform:uppercase;">
          {{ section.section }}
        </div>
        <template v-for="item in section.items" :key="item.menuId">
          <button v-if="!item.authRequired || (appAuth ? (appAuth.user) : false)" type="button"
            @click.stop="handleSelectAction('nav-select-menu', item.menuId)"
            class="sidebar-link" :class="{active: isMenuActive(page, item.menuId), 'sidebar-link-not-loaded': !fnIsLoaded(item.menuId)}"
            :data-tip="item.menuNm" :aria-label="item.menuNm">
            <span class="sidebar-link-icon" style="font-size:1rem;flex-shrink:0;">{{ item.icon }}</span>
            <span v-if="appSidebarOpen" style="flex:1;overflow:hidden;text-overflow:ellipsis;">
              {{ item.menuNm }}
              <span v-if="item.menuId==='cart' ? (appCartCount>0) : false"
                style="display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;border-radius:9px;background:var(--blue);color:#fff;font-size:0.6rem;font-weight:800;padding:0 4px;margin-left:4px;">
                {{ appCartCount > 99 ? '99+' : appCartCount }}
              </span>
            </span>
          </button>
        </template>
      </template>
    </template>

    <!-- ===== \u25A1.\u25A1. \uAE30\uC874 sidebarMenu \uC139\uC158 (\uC0D8\uD50C \uC804\uC2DC \uC81C\uC678) ========================== -->
    <!-- ===== \u25A0.\u25A0. \uBAA8\uB4C8 \uC139\uC158 (\uB3C5\uB9BD FO \uBAA8\uB4C8 \uBC14\uB85C\uAC00\uAE30) =============================== -->
    <div v-if="appSidebarOpen" style="padding:12px 8px 4px;font-size:0.65rem;font-weight:700;color:var(--text-muted);letter-spacing:0.1em;text-transform:uppercase;">
      \uBAA8\uB4C8
    </div>
    <template v-for="grp in MODULE_GROUPS" :key="grp.groupId">
      <!-- \uADF8\uB8F9 \uD5E4\uB354 (\uC0AC\uC774\uB4DC\uBC14 \uC811\uD798 \uC0C1\uD0DC\uC5D0\uC120 \uC544\uC774\uCF58\uB9CC \uB098\uC624\uB294 \uD56D\uBAA9\uB4E4\uC774 \uACE7 \uADF8\uB8F9 \uB300\uD45C\uB77C \uD5E4\uB354\uB294 \uC228\uAE34\uB2E4) -->
      <button v-if="appSidebarOpen" type="button" @click.stop="handleBtnAction('nav-toggle-module', grp.groupId)"
        style="width:100%;display:flex;align-items:center;gap:8px;padding:6px 10px;background:none;border:none;cursor:pointer;text-align:left;">
        <span style="font-size:0.95rem;flex-shrink:0;">{{ grp.icon }}</span>
        <span style="flex:1;font-size:0.78rem;font-weight:700;color:var(--text-secondary);overflow:hidden;text-overflow:ellipsis;">{{ grp.groupNm }}</span>
        <span style="font-size:0.6rem;color:var(--text-muted);">{{ uiState.moduleOpen[grp.groupId] ? '\u25B2' : '\u25BC' }}</span>
      </button>
      <template v-if="uiState.moduleOpen[grp.groupId] || !appSidebarOpen">
        <button v-for="item in grp.items" :key="item.menuId" type="button"
          @click.stop="handleSelectAction('nav-select-module', item)"
          class="sidebar-link" :data-tip="item.menuNm" :aria-label="item.menuNm">
          <span class="sidebar-link-icon" style="font-size:1rem;flex-shrink:0;">{{ grp.icon }}</span>
          <span v-if="appSidebarOpen" style="flex:1;overflow:hidden;text-overflow:ellipsis;padding-left:12px;">{{ item.menuNm }}</span>
        </button>
      </template>
    </template>

    <!-- ===== \u25A1.\u25A1. \uBAA8\uB4C8 \uC139\uC158 (\uB3C5\uB9BD FO \uBAA8\uB4C8 \uBC14\uB85C\uAC00\uAE30) =============================== -->
    <!-- ===== \u25A0.\u25A0. \uAC1C\uBC1C\uB3C4\uAD6C \uC139\uC158 =============================================== -->
    <div v-if="appSidebarOpen" style="padding:12px 8px 0;">
      <button type="button" @click.stop="handleBtnAction('nav-toggle-devTools')"
        style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:4px 0;background:none;border:none;cursor:pointer;font-size:0.65rem;font-weight:700;color:var(--text-muted);letter-spacing:0.1em;text-transform:uppercase;">
        <span>\uAC1C\uBC1C\uB3C4\uAD6C</span>
        <span style="font-size:0.6rem;">{{ uiState.devToolsOpen ? '\u25B2' : '\u25BC' }}</span>
      </button>
    </div>
    <template v-if="uiState.devToolsOpen">
      <button v-for="item in DEV_TOOLS_ITEMS" :key="item.menuId || item.siteNo" type="button"
        @click.stop="handleSelectAction('nav-select-devTools', item)"
        class="sidebar-link" :class="{active: item.menuId ? page === item.menuId : false, 'sidebar-link-not-loaded': item.menuId ? !fnIsLoaded(item.menuId) : false}"
        :data-tip="item.menuNm || item.siteNm" :aria-label="item.menuNm || item.siteNm">
        <span class="sidebar-link-icon" style="font-size:0.9rem;flex-shrink:0;">{{ item.menuId ? '\u{1F527}' : '\u{1F310}' }}</span>
        <span v-if="appSidebarOpen" style="flex:1;overflow:hidden;text-overflow:ellipsis;font-size:0.85rem;">{{ item.menuNm || item.siteNm }}</span>
      </button>
    </template>

    <!-- ===== \u25A1.\u25A1. \uAC1C\uBC1C\uB3C4\uAD6C \uC139\uC158 =============================================== -->
    <!-- ===== \u25A0.\u25A0. \uC0D8\uD50C \uC139\uC158 \u2014 Site 01\uC740 \uC804\uCCB4 \uC228\uAE40 ================================ -->
    <!-- ===== \u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================ -->
    <template v-if="showSamples">
    <!-- ===== \u25A0.\u25A0. \uC0D8\uD50C0 (01~06) =========================================== -->
    <div v-if="appSidebarOpen" style="padding:12px 8px 0;">
      <button type="button" @click.stop="handleBtnAction('nav-toggle-sample0')"
        style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:4px 0;background:none;border:none;cursor:pointer;font-size:0.65rem;font-weight:700;color:var(--text-muted);letter-spacing:0.1em;text-transform:uppercase;">
        <span>\uC0D8\uD50C0</span>
        <span style="font-size:0.6rem;">{{ uiState.sample0Open ? '\u25B2' : '\u25BC' }}</span>
      </button>
    </div>
    <template v-if="uiState.sample0Open">
      <button v-for="item in SAMPLE0_ITEMS" :key="item.menuId" type="button"
        @click.stop="handleSelectAction('nav-select-menu', item.menuId)"
        class="sidebar-link" :class="{active: page === item.menuId, 'sidebar-link-not-loaded': !fnIsLoaded(item.menuId)}"
        :data-tip="item.menuNm" :aria-label="item.menuNm">
        <span class="sidebar-link-icon" style="font-size:0.9rem;flex-shrink:0;">\u{1F4C4}</span>
        <span v-if="appSidebarOpen" style="flex:1;overflow:hidden;text-overflow:ellipsis;font-size:0.85rem;">{{ item.menuNm }}</span>
      </button>
    </template>

    <!-- ===== \u25A1.\u25A1. \uC0D8\uD50C0 (01~06) =========================================== -->
    <!-- ===== \u25A0.\u25A0. \uC0D8\uD50C1 (07~14) =========================================== -->
    <div v-if="appSidebarOpen" style="padding:12px 8px 0;">
      <button type="button" @click.stop="handleBtnAction('nav-toggle-sample1')"
        style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:4px 0;background:none;border:none;cursor:pointer;font-size:0.65rem;font-weight:700;color:var(--text-muted);letter-spacing:0.1em;text-transform:uppercase;">
        <span>\uC0D8\uD50C1</span>
        <span style="font-size:0.6rem;">{{ uiState.sample1Open ? '\u25B2' : '\u25BC' }}</span>
      </button>
    </div>
    <template v-if="uiState.sample1Open">
      <button v-for="item in SAMPLE1_ITEMS" :key="item.menuId" type="button"
        @click.stop="handleSelectAction('nav-select-menu', item.menuId)"
        class="sidebar-link" :class="{active: page === item.menuId, 'sidebar-link-not-loaded': !fnIsLoaded(item.menuId)}"
        :data-tip="item.menuNm" :aria-label="item.menuNm">
        <span class="sidebar-link-icon" style="font-size:0.9rem;flex-shrink:0;">\u{1F4C4}</span>
        <span v-if="appSidebarOpen" style="flex:1;overflow:hidden;text-overflow:ellipsis;font-size:0.85rem;">{{ item.menuNm }}</span>
      </button>
    </template>

    <!-- ===== \u25A1.\u25A1. \uC0D8\uD50C1 (07~14) =========================================== -->
    <!-- ===== \u25A0.\u25A0. \uC0D8\uD50C2 (21~23) =========================================== -->
    <div v-if="appSidebarOpen" style="padding:12px 8px 0;">
      <button type="button" @click.stop="handleBtnAction('nav-toggle-sample2')"
        style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:4px 0;background:none;border:none;cursor:pointer;font-size:0.65rem;font-weight:700;color:var(--text-muted);letter-spacing:0.1em;text-transform:uppercase;">
        <span>\uC0D8\uD50C2</span>
        <span style="font-size:0.6rem;">{{ uiState.sample2Open ? '\u25B2' : '\u25BC' }}</span>
      </button>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC0D8\uD50C2 (21~23) =========================================== -->
    <!-- ===== \u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================ -->
    <template v-if="uiState.sample2Open">
      <button v-for="item in SAMPLE2_ITEMS" :key="item.menuId" type="button"
        @click.stop="handleSelectAction('nav-select-menu', item.menuId)"
        class="sidebar-link" :class="{active: page === item.menuId, 'sidebar-link-not-loaded': !fnIsLoaded(item.menuId)}"
        :data-tip="item.menuNm" :aria-label="item.menuNm">
        <span class="sidebar-link-icon" style="font-size:0.9rem;flex-shrink:0;">\u{1F4C4}</span>
        <span v-if="appSidebarOpen" style="flex:1;overflow:hidden;text-overflow:ellipsis;font-size:0.85rem;">{{ item.menuNm }}</span>
      </button>
    </template>

    <!-- ===== \u25A1.\u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================ -->
    <!-- ===== \u25A0.\u25A0. \uC0D8\uD50C \uC804\uC2DC (\uD1A0\uAE00) ============================================ -->
    <div v-if="appSidebarOpen" style="padding:12px 8px 0;">
      <button type="button" @click.stop="handleBtnAction('nav-toggle-dispUi')"
        style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:4px 0;background:none;border:none;cursor:pointer;font-size:0.65rem;font-weight:700;color:var(--text-muted);letter-spacing:0.1em;text-transform:uppercase;">
        <span>\uC0D8\uD50C \uC804\uC2DC</span>
        <span style="font-size:0.6rem;">{{ uiState.dispUiOpen ? '\u25B2' : '\u25BC' }}</span>
      </button>
    </div>
    <template v-if="uiState.dispUiOpen">
      <button v-for="item in DISP_UI_ITEMS" :key="item.menuId" type="button"
        @click.stop="handleSelectAction('nav-select-menu', item.menuId)"
        class="sidebar-link" :class="{active: page === item.menuId, 'sidebar-link-not-loaded': !fnIsLoaded(item.menuId)}"
        :data-tip="item.menuNm" :aria-label="item.menuNm">
        <span class="sidebar-link-icon" style="font-size:1rem;flex-shrink:0;">\u{1F5BC}</span>
        <span v-if="appSidebarOpen" style="flex:1;overflow:hidden;text-overflow:ellipsis;">{{ item.menuNm }}</span>
      </button>
    </template>
    </template>  <!-- /showSamples -->

    <div style="flex:1;"></div>
    <button type="button" @click.stop="handleBtnAction('sidebar-toggle')"
      style="display:flex;align-items:center;justify-content:center;gap:8px;padding:8px;border-radius:8px;background:none;border:1px solid var(--border);color:var(--text-muted);cursor:pointer;font-size:0.75rem;transition:all 0.2s;"
      class="hidden-sm sidebar-collapse-toggle"
      :title="!appMobileOpen ? (appSidebarOpen ? '\uC0AC\uC774\uB4DC\uBC14 \uC811\uAE30' : '\uC0AC\uC774\uB4DC\uBC14 \uD3BC\uCE58\uAE30') : ''"
      :aria-label="appSidebarOpen ? '\uC0AC\uC774\uB4DC\uBC14 \uC811\uAE30' : '\uC0AC\uC774\uB4DC\uBC14 \uD3BC\uCE58\uAE30'">
      <span>{{ appSidebarOpen ? '\u25C0' : '\u25B6' }}</span>
      <span v-if="appSidebarOpen">\uC811\uAE30</span>
    </button>
  </div>
</div>

    <!-- ===== \u25A1.\u25A1. \uC0D8\uD50C \uC804\uC2DC (\uD1A0\uAE00) ============================================ -->
  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->`};
