window.XsStore={name:"XsStore",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(n){const{computed:h,reactive:f,onMounted:w,watch:j}=Vue,o=f({loading:!1,error:null,storeInfo:"",selectedStore:null,tabMode:"col5"}),y=(e,t={})=>{if(e==="stores-reloadAll")return u();if(e==="tab-modeChange"){o.tabMode=t;return}else{if(e==="stores-refresh")return F(t);if(e==="stores-save")return o.selectedStore=t,k();if(e==="stores-copy")return m();if(e==="stores-clear")return A();console.warn("[handleBtnAction] unknown cmd:",e)}},v=(e,t={})=>{if(e==="stores-rowSelect")return p(t);if(e==="stores-rowClose")return M(t);console.warn("[handleSelectAction] unknown cmd:",e)},s=f([]),i=f({}),l=h(()=>{const e=[];return window.useFoAppInitStore&&e.push({name:"useFoAppInitStore",label:"foAppInitStore.js",api:null,hasLocalStorage:!1}),window.useFoAppStore&&e.push({name:"useFoAppStore",label:"foAppStore.js",api:null,hasLocalStorage:!1}),window.useFoAuthStore&&e.push({name:"useFoAuthStore",label:"foAuthStore.js \u{1F4BE}",api:"getAuth",hasLocalStorage:!0}),window.useFoCodeStore&&e.push({name:"useFoCodeStore",label:"foCodeStore.js",api:"getCodes",hasLocalStorage:!1}),window.useFoDispStore&&e.push({name:"useFoDispStore",label:"foDispStore.js",api:"getDisp",hasLocalStorage:!1}),window.useFoMenuStore&&e.push({name:"useFoMenuStore",label:"foMenuStore.js",api:"getMenus",hasLocalStorage:!1}),window.useFoMyStore&&e.push({name:"useFoMyStore",label:"foMyStore.js",api:null,hasLocalStorage:!1}),window.useFoPropStore&&e.push({name:"useFoPropStore",label:"foPropStore.js",api:"getProps",hasLocalStorage:!1}),window.useFoRoleStore&&e.push({name:"useFoRoleStore",label:"foRoleStore.js",api:"getRoles",hasLocalStorage:!1}),e}),p=e=>{o.selectedStore=e,s.find(t=>t===e)||s.push(e),d(e)},u=()=>{l.value.forEach(e=>{d(e.name)})},d=e=>{try{const t=window[e];if(t){const r=t(),a=JSON.stringify(r.$state,null,2);o.storeInfo=a,i[e]=a}}catch(t){o.storeInfo=`Error: ${t.message}`}},M=e=>{const t=s.indexOf(e);t!==-1&&s.splice(t,1),o.selectedStore===e&&(o.selectedStore=s[Math.max(0,t-1)]||null,o.selectedStore&&d(o.selectedStore))},m=()=>{try{navigator.clipboard.writeText(o.storeInfo),n.showToast("\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){n.showToast("\uBCF5\uC0AC \uC2E4\uD328: "+e.message,"error")}},A=()=>{if(o.selectedStore)try{const e=window[o.selectedStore];e&&e().clear&&(e().clear(),n.showToast("\uC2A4\uD1A0\uC5B4\uAC00 \uCD08\uAE30\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),p(o.selectedStore))}catch(e){n.showToast("\uCD08\uAE30\uD654 \uC2E4\uD328: "+e.message,"error")}},k=()=>{if(o.selectedStore)try{const e=i[o.selectedStore],t=JSON.parse(e),r=window[o.selectedStore];if(r){const a=r();Object.assign(a.$state,t),n.showToast("\uC2A4\uD1A0\uC5B4\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),d(o.selectedStore)}}catch(e){n.showToast("\uC800\uC7A5 \uC2E4\uD328: "+e.message,"error")}},F=async e=>{var r;if(!e)return;const t=l.value.find(a=>a.name===e);if(!t||!t.api){n.showToast("\uC870\uD68C \uBD88\uAC00\uB2A5\uD55C \uC2A4\uD1A0\uC5B4\uC785\uB2C8\uB2E4.","info");return}try{const a=foApi;if(!a||typeof foApi=="undefined"){n.showToast("API \uD074\uB77C\uC774\uC5B8\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}const c=await a.get(`/co/cm/fo-app-store/${t.api}`);if((r=c==null?void 0:c.data)!=null&&r.data){const b=window[e];if(b){const S=b(),x=c.data.data;if(x){Object.assign(S.$state,Object.values(x)[0]);const g=JSON.stringify(S.$state,null,2);i[e]=g,o.selectedStore=e,o.storeInfo=g,n.showToast("\uC870\uD68C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}}}}catch(a){n.showToast("\uC870\uD68C \uC2E4\uD328: "+a.message,"error")}};return w(async()=>{await u(),p(l.value[0].name)}),{uiState:o,handleBtnAction:y,handleSelectAction:v,cfStoreList:l,editedStoreInfo:i}},template:`
<div style="padding: 20px;">
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
    <div>
      <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #1a1a1a;">
        Store \uC815\uBCF4 \uAD00\uB9AC
      </h1>
      <p style="margin: 0; font-size: 13px; color: #666;">
        Pinia \uC2A4\uD1A0\uC5B4 \uC0C1\uD0DC \uC870\uD68C \uBC0F \uD3B8\uC9D1
      </p>
    </div>
    <button @click="handleBtnAction('stores-reloadAll')" style="padding: 8px 16px; font-size: 13px; font-weight: 600; border: none; background: linear-gradient(135deg, #ff6b9d, #c44569); color: white; cursor: pointer; border-radius: 4px; transition: all 0.2s; white-space: nowrap;">
      \u{1F504} \uC7AC\uB85C\uB4DC
    </button>
  </div>
  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. Store \uC120\uD0DD \uD0ED + \uBDF0\uBAA8\uB4DC \uBC84\uD2BC ===================================== -->
  <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 20px; overflow: hidden;">
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid #e5e7eb;">
      <div style="display: flex; gap: 4px; overflow-x: auto; flex: 1; min-width: 0;">
        <button v-for="store in cfStoreList" :key="store.name"
          @click="handleSelectAction('stores-rowSelect', store.name)"
          :style="{
          padding: '8px 14px',
          background: uiState.selectedStore === store.name ? '#fff0f4' : 'transparent',
          border: 'none',
          borderBottom: uiState.selectedStore === store.name ? '3px solid #ff6b9d' : '3px solid transparent',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: uiState.selectedStore === store.name ? '600' : '500',
          color: uiState.selectedStore === store.name ? '#ff6b9d' : '#666',
          whiteSpace: 'nowrap',
          transition: 'all 0.2s'
          }">
          {{ store.label }}
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBDF0\uBAA8\uB4DC \uBC84\uD2BC (\uD0ED\uBC14 \uC6B0\uCE21) ====================================== -->
      <div style="display: flex; gap: 4px; padding-left: 16px; flex-shrink: 0;">
        <button
          @click="handleBtnAction('tab-modeChange', 'tab')"
          :style="{
          padding: '6px 10px',
          fontSize: '13px',
          border: uiState.tabMode === 'tab' ? '1.5px solid #ff6b9d' : '1px solid #ddd',
          background: uiState.tabMode === 'tab' ? '#fff0f4' : 'white',
          color: uiState.tabMode === 'tab' ? '#ff6b9d' : '#666',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: uiState.tabMode === 'tab' ? '600' : '500',
          transition: 'all 0.2s'
          }"
          title="\uD0ED \uBDF0">
          \u{1F4D1}
        </button>
        <button
          @click="handleBtnAction('tab-modeChange', 'col1')"
          :style="{
          padding: '6px 10px',
          fontSize: '13px',
          border: uiState.tabMode === 'col1' ? '1.5px solid #ff6b9d' : '1px solid #ddd',
          background: uiState.tabMode === 'col1' ? '#fff0f4' : 'white',
          color: uiState.tabMode === 'col1' ? '#ff6b9d' : '#666',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: uiState.tabMode === 'col1' ? '600' : '500',
          transition: 'all 0.2s'
          }"
          title="1\uC5F4 \uBCF4\uAE30">
          1
        </button>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC84\uD2BC \uC601\uC5ED ============================================= -->
        <button
          @click="handleBtnAction('tab-modeChange', 'col2')"
          :style="{
          padding: '6px 10px',
          fontSize: '13px',
          border: uiState.tabMode === 'col2' ? '1.5px solid #ff6b9d' : '1px solid #ddd',
          background: uiState.tabMode === 'col2' ? '#fff0f4' : 'white',
          color: uiState.tabMode === 'col2' ? '#ff6b9d' : '#666',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: uiState.tabMode === 'col2' ? '600' : '500',
          transition: 'all 0.2s'
          }"
          title="2\uC5F4 \uBCF4\uAE30">
          2
        </button>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC84\uD2BC \uC601\uC5ED ============================================= -->
        <button
          @click="handleBtnAction('tab-modeChange', 'col3')"
          :style="{
          padding: '6px 10px',
          fontSize: '13px',
          border: uiState.tabMode === 'col3' ? '1.5px solid #ff6b9d' : '1px solid #ddd',
          background: uiState.tabMode === 'col3' ? '#fff0f4' : 'white',
          color: uiState.tabMode === 'col3' ? '#ff6b9d' : '#666',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: uiState.tabMode === 'col3' ? '600' : '500',
          transition: 'all 0.2s'
          }"
          title="3\uC5F4 \uBCF4\uAE30">
          3
        </button>
        <button
          @click="handleBtnAction('tab-modeChange', 'col4')"
          :style="{
          padding: '6px 10px',
          fontSize: '13px',
          border: uiState.tabMode === 'col4' ? '1.5px solid #ff6b9d' : '1px solid #ddd',
          background: uiState.tabMode === 'col4' ? '#fff0f4' : 'white',
          color: uiState.tabMode === 'col4' ? '#ff6b9d' : '#666',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: uiState.tabMode === 'col4' ? '600' : '500',
          transition: 'all 0.2s'
          }"
          title="4\uC5F4 \uBCF4\uAE30">
          4
        </button>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC84\uD2BC \uC601\uC5ED ============================================= -->
        <button
          @click="handleBtnAction('tab-modeChange', 'col5')"
          :style="{
          padding: '6px 10px',
          fontSize: '13px',
          border: uiState.tabMode === 'col5' ? '1.5px solid #ff6b9d' : '1px solid #ddd',
          background: uiState.tabMode === 'col5' ? '#fff0f4' : 'white',
          color: uiState.tabMode === 'col5' ? '#ff6b9d' : '#666',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: uiState.tabMode === 'col5' ? '600' : '500',
          transition: 'all 0.2s'
          }"
          title="5\uC5F4 \uBCF4\uAE30">
          5
        </button>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. Store \uC120\uD0DD \uD0ED + \uBDF0\uBAA8\uB4DC \uBC84\uD2BC ===================================== -->
  <!-- ===== \u25A0. \uD0ED \uCF58\uD150\uCE20 \uC601\uC5ED (\uBDF0\uBAA8\uB4DC\uBCC4 \uADF8\uB9AC\uB4DC \uB808\uC774\uC544\uC6C3) ================================ -->
  <div :style="{
    display: 'grid',
    gridTemplateColumns: uiState.tabMode === 'col1' ? '1fr' : uiState.tabMode === 'col2' ? 'repeat(2, 1fr)' : uiState.tabMode === 'col3' ? 'repeat(3, 1fr)' : uiState.tabMode === 'col4' ? 'repeat(4, 1fr)' : uiState.tabMode === 'col5' ? 'repeat(5, 1fr)' : '1fr',
    gap: '4px',
    padding: '0',
    marginTop: '0'
    }">
    <div v-for="store in cfStoreList" :key="store.name"
      v-show="uiState.tabMode === 'tab' ? uiState.selectedStore === store.name : true"
      style="display: flex; flex-direction: column; height: 100%; background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
      <div v-if="uiState.tabMode !== 'tab'" style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; background: #fafafa; font-weight: 600; font-size: 12px; color: #333;">
        {{ store.label }}
      </div>
      <div style="flex: 1; overflow: hidden; display: flex; flex-direction: column; min-height: 320px;">
        <label style="display: block; padding: 8px 12px 4px; font-weight: 600; font-size: 11px; color: #666;">
          Store State (JSON)
        </label>
        <textarea
          :value="editedStoreInfo[store.name] || ''"
          @input="editedStoreInfo[store.name] = $event.target.value"
          style="flex: 1; margin: 0 8px 8px; padding: 8px; border: 1px solid #e5e7eb; border-radius: 4px; font-family: 'Monaco', 'Menlo', monospace; font-size: 10px; background: #f9f9f9; resize: none; color: #333; line-height: 1.6;">
        </textarea>
        </div>
        <div style="display: flex; gap: 4px; padding: 8px 12px; border-top: 1px solid #e5e7eb; background: #fafafa;">
          <button v-if="store.api" @click="handleBtnAction('stores-refresh', store.name)" style="flex: 1; padding: 6px 10px; font-size: 11px; border: 1px solid #d0e8f2; background: #f0f8fc; color: #0369a1; cursor: pointer; border-radius: 4px; font-weight: 500; transition: all 0.2s;">
            \uC870\uD68C
          </button>
          <button @click="handleBtnAction('stores-save', store.name)" style="flex: 1; padding: 6px 10px; font-size: 11px; border: none; background: linear-gradient(135deg, #ff6b9d, #c44569); color: white; cursor: pointer; border-radius: 4px; font-weight: 600; transition: all 0.2s;">
            \uC800\uC7A5
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uD0ED \uCF58\uD150\uCE20 \uC601\uC5ED (\uBDF0\uBAA8\uB4DC\uBCC4 \uADF8\uB9AC\uB4DC \uB808\uC774\uC544\uC6C3) ================================ -->
`};
