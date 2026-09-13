window.ZdStore={name:"ZdStore",props:{navigate:{type:Function,required:!0},adminData:{type:Object,default:()=>({})}},setup(k){const{ref:D,computed:S,reactive:u,watch:C,onMounted:A}=Vue,a=window.boApp.showToast,o=u({storeInfo:"",selectedStore:null,tabMode:"5col"}),r=u([]),l=u({}),i=S(()=>{const e=[];return window.useBoAppInitStore&&e.push({name:"useBoAppInitStore",label:"boAppInitStore.js",api:"getInitData",hasLocalStorage:!1}),window.useBoAppStore&&e.push({name:"useBoAppStore",label:"boAppStore.js",api:"getApp",hasLocalStorage:!1}),window.useBoAuthStore&&e.push({name:"useBoAuthStore",label:"boAuthStore.js \u{1F4BE}",api:"getAuth",hasLocalStorage:!0}),window.useBoCodeStore&&e.push({name:"useBoCodeStore",label:"boCodeStore.js",api:"getCodes",hasLocalStorage:!1}),window.useBoConfigStore&&e.push({name:"useBoConfigStore",label:"boConfigStore.js",api:"getProps",hasLocalStorage:!1}),window.useBoMenuStore&&e.push({name:"useBoMenuStore",label:"boMenuStore.js",api:"getMenus",hasLocalStorage:!1}),window.useBoPropStore&&e.push({name:"useBoPropStore",label:"boPropStore.js",api:"getProps",hasLocalStorage:!1}),window.useBoRoleStore&&e.push({name:"useBoRoleStore",label:"boRoleStore.js",api:"getRoles",hasLocalStorage:!1}),window.useFoAppInitStore&&e.push({name:"useFoAppInitStore",label:"foAppInitStore.js",api:"getInitData",hasLocalStorage:!1}),window.useFoAuthStore&&e.push({name:"useFoAuthStore",label:"foAuthStore.js \u{1F4BE}",api:"getAuth",hasLocalStorage:!0}),window.useFoRoleStore&&e.push({name:"useFoRoleStore",label:"foRoleStore.js",api:"getRoles",hasLocalStorage:!1}),window.useFoMenuStore&&e.push({name:"useFoMenuStore",label:"foMenuStore.js",api:"getMenus",hasLocalStorage:!1}),window.useFoCodeStore&&e.push({name:"useFoCodeStore",label:"foCodeStore.js",api:"getCodes",hasLocalStorage:!1}),window.useFoPropStore&&e.push({name:"useFoPropStore",label:"foPropStore.js",api:"getProps",hasLocalStorage:!1}),window.useFoDispStore&&e.push({name:"useFoDispStore",label:"foDispStore.js",api:"getDisp",hasLocalStorage:!1}),window.useFoAppStore&&e.push({name:"useFoAppStore",label:"foAppStore.js",api:"getApp",hasLocalStorage:!1}),window.useFoMyStore&&e.push({name:"useFoMyStore",label:"foMyStore.js",api:null,hasLocalStorage:!1}),e}),y=S(()=>i.value.map(e=>({id:e.name,label:e.label}))),v=(e,t={})=>{if(e==="stores-reloadAll")return b();if(e==="selectedStore-copy")return F();if(e==="selectedStore-clear")return t&&(o.selectedStore=t),B();if(e==="selectedStore-save")return t&&(o.selectedStore=t),M();if(e==="selectedStore-refresh")return L(t);if(e==="stores-closeTab")return j(t);console.warn("[handleBtnAction] unknown cmd:",e)},m=(e,t={})=>{if(e==="stores-select")return f(t);if(e==="tabMode-set"){o.tabMode=t;return}else console.warn("[handleSelectAction] unknown cmd:",e)},f=e=>{o.selectedStore=e,r.find(t=>t===e)||r.push(e),d(e)},b=()=>{i.value.forEach(e=>{d(e.name)})},d=e=>{try{const t=window[e];if(t){const n=t(),s=JSON.stringify(n.$state,null,2);o.storeInfo=s,l[e]=s}}catch(t){o.storeInfo=`Error: ${t.message}`}},j=e=>{const t=r.indexOf(e);t!==-1&&r.splice(t,1),o.selectedStore===e&&(o.selectedStore=r[Math.max(0,t-1)]||null,o.selectedStore&&d(o.selectedStore))},F=()=>{try{navigator.clipboard.writeText(o.storeInfo),a("\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){a("\uBCF5\uC0AC \uC2E4\uD328: "+e.message,"error")}},B=()=>{if(o.selectedStore)try{const e=window[o.selectedStore];e&&e().clear&&(e().clear(),a("\uC2A4\uD1A0\uC5B4\uAC00 \uCD08\uAE30\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),f(o.selectedStore))}catch(e){a("\uCD08\uAE30\uD654 \uC2E4\uD328: "+e.message,"error")}},M=()=>{if(o.selectedStore)try{const e=l[o.selectedStore],t=JSON.parse(e),n=window[o.selectedStore];if(n){const s=n();Object.assign(s.$state,t),a("\uC2A4\uD1A0\uC5B4\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),d(o.selectedStore)}}catch(e){a("\uC800\uC7A5 \uC2E4\uD328: "+e.message,"error")}},L=async e=>{var n;if(!e)return;const t=i.value.find(s=>s.name===e);if(!t||!t.api){a("\uC870\uD68C \uBD88\uAC00\uB2A5\uD55C \uC2A4\uD1A0\uC5B4\uC785\uB2C8\uB2E4.","info");return}try{const s=e.startsWith("useFo")?foApi:boApi;if(!s||e.startsWith("useFo")&&typeof foApi=="undefined"||!e.startsWith("useFo")&&typeof boApi=="undefined"){a("API \uD074\uB77C\uC774\uC5B8\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}const g=`/co/cm/${e.startsWith("useFo")?"fo":"bo"}-app-store/${t.api}`,I=t.api==="getInitData"?`${g}?names=ALL`:g,c=await s.get(I);if((n=c==null?void 0:c.data)!=null&&n.data){const p=c.data.data;if(p){const h=JSON.stringify(p,null,2);l[e]=h,o.selectedStore=e,o.storeInfo=h;const w=window[e];if(w){const x=w();t.api==="getInitData"?Object.assign(x.$state,p):Object.assign(x.$state,Object.values(p)[0])}a("\uC870\uD68C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}}}catch(s){a("\uC870\uD68C \uC2E4\uD328: "+s.message,"error")}};return A(async()=>{const e=i.value||[];e.length>0&&!o.selectedStore&&f(e[0].name),b()}),{uiState:o,editedStoreInfo:l,handleBtnAction:v,handleSelectAction:m,storeList:i,storeTabs:y}},template:`
<div>
  <!-- ===== \u25A0. \uBA54\uC778 \uC601\uC5ED =================================================== -->
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 =============================================== -->
    <div class="page-title" style="margin: 0;">
      Store \uC815\uBCF4 \uAD00\uB9AC
    </div>
    <button @click="handleBtnAction('stores-reloadAll')" style="padding: 8px 16px; font-size: 13px; font-weight: 600; border: none; background: linear-gradient(135deg, #ff6b9d, #c44569); color: white;  border-radius: 4px; transition: all 0.2s; white-space: nowrap;">
      \u{1F504} \uC7AC\uB85C\uB4DC
    </button>
  </div>
  <!-- ===== \u25A1.\u25A1. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 =============================================== -->
  <!-- ===== \u25A1. \uBA54\uC778 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. Store \uC120\uD0DD \uD0ED + \uBDF0\uBAA8\uB4DC \uBC84\uD2BC ===================================== -->
  <bo-tab-bar :tabs="storeTabs" :tab="uiState.selectedStore" :tab-mode="uiState.tabMode" :max-cols="5"
    @tab-select="name => handleSelectAction('stores-select', name)"
    @mode-select="m => handleSelectAction('tabMode-set', m)" />
  <!-- ===== \u25A1. Store \uC120\uD0DD \uD0ED + \uBDF0\uBAA8\uB4DC \uBC84\uD2BC ===================================== -->
  <!-- ===== \u25A0. \uD0ED \uCF58\uD150\uCE20 \uC601\uC5ED (\uBDF0\uBAA8\uB4DC\uBCC4 \uADF8\uB9AC\uB4DC \uB808\uC774\uC544\uC6C3) ================================ -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="['dtl-tab-grid', 'cols-' + (uiState.tabMode === 'tab' ? 'tab' : uiState.tabMode.charAt(0))]"
    style="display: grid; gap: 4px; padding: 0; auto-flow: row;">
    <div v-for="store in storeList" :key="store.name"
      v-show="uiState.tabMode === 'tab' ? uiState.selectedStore === store.name : true"
      class="card" style="display: flex; flex-direction: column; height: 100%; padding: 8px;">
      <div v-if="uiState.tabMode !== 'tab'" class="dtl-tab-card-title" style="margin-bottom: 6px; padding-bottom: 4px; border-bottom: 1px solid #e5e7eb; font-weight: 600; font-size: 12px;">
        {{ store.label }}
      </div>
      <div style="flex: 1; margin-bottom: 8px;">
        <label style="display: block; margin-bottom: 4px; font-weight: 600; font-size: 11px;">
          Store State (JSON)
        </label>
        <textarea
          :value="editedStoreInfo[store.name] || ''"
          @input="editedStoreInfo[store.name] = $event.target.value"
          style="width: 100%; height: 300px; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-family: monospace; font-size: 10px; background: #f5f5f5; resize: vertical;">
        </textarea>
        </div>
        <div style="display: flex; gap: 4px; justify-content: flex-end; padding-top: 6px; border-top: 1px solid #e5e7eb;">
          <button @click="handleBtnAction('selectedStore-clear', store.name)" style="padding: 6px 12px; font-size: 11px; background: #ef4444; border: none; color: white; border-radius: 4px;  font-weight: 600; transition: all 0.2s;">
            \uC9C0\uC6B0\uAE30
          </button>
          <button v-if="store.api" @click="handleBtnAction('selectedStore-refresh', store.name)" style="padding: 6px 12px; font-size: 11px; background: #3b82f6; border: none; color: white; border-radius: 4px;  font-weight: 600; transition: all 0.2s;">
            \uC870\uD68C
          </button>
          <button @click="handleBtnAction('selectedStore-save', store.name)" style="padding: 6px 12px; font-size: 11px; background: linear-gradient(135deg, #ff6b9d, #c44569); border: none; color: white; border-radius: 4px;  font-weight: 600; transition: all 0.2s;">
            \uC800\uC7A5
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
`};
