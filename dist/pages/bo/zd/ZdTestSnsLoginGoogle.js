window.ZdTestSnsLoginGoogle={name:"ZdTestSnsLoginGoogle",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(g){var p;const{reactive:d,onMounted:f}=Vue,a=g.showToast||((p=window.boApp)==null?void 0:p.showToast)||(()=>{}),r=d({googleClientId:""}),e=d({sdkStatus:"",sdkUrl:"",initDetail:"",loginStatus:"",userInfo:null,rawToken:"",error:""}),l=d({loading:!1,sdkLoaded:!1});f(async()=>{var o,i,t;try{const s=await((i=(o=boApiSvc.syProp)==null?void 0:o.getList)==null?void 0:i.call(o,{propKeys:"app.auth.social.google-client-id"},"\uAD6C\uAE00 \uC18C\uC15C \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),k=((t=s==null?void 0:s.data)==null?void 0:t.data)||[],w=I=>{const u=k.filter(n=>n.propKey===I&&n.propValue),c=u.find(n=>/local|dev/.test(n.propProfile||""))||u[0];return(c==null?void 0:c.propValue)||""};r.googleClientId=w("app.auth.social.google-client-id")}catch(s){e.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(s.message||s)}v()});const v=()=>{var i,t;const o=!!((t=(i=window.google)==null?void 0:i.accounts)!=null&&t.id);l.sdkLoaded=o,e.sdkUrl="https://accounts.google.com/gsi/client",e.sdkStatus=o?"\u2705 Google Identity Services SDK \uB85C\uB4DC\uB428":"\u274C Google Identity Services SDK \uC5C6\uC74C (GSI \uC2A4\uD06C\uB9BD\uD2B8 \uBBF8\uB85C\uB4DC)"},b=()=>{var o,i;if(!r.googleClientId){a("Client ID \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if(!((i=(o=window.google)==null?void 0:o.accounts)!=null&&i.id)){a("Google GSI \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error",0);return}try{window.google.accounts.id.initialize({client_id:r.googleClientId,callback:m,auto_select:!1}),l.sdkLoaded=!0,e.sdkStatus="\u2705 Google GSI \uCD08\uAE30\uD654 \uC644\uB8CC",e.initDetail="Client ID: "+r.googleClientId,a("Google GSI \uCD08\uAE30\uD654 \uC644\uB8CC","success")}catch(t){e.initDetail="\u274C "+t.message,e.error=t.message,a("\uCD08\uAE30\uD654 \uC2E4\uD328: "+t.message,"error",0)}},m=o=>{if(l.loading=!1,!o.credential){e.error="\uC790\uACA9 \uC99D\uBA85\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",e.loginStatus="\u274C \uB85C\uADF8\uC778 \uC2E4\uD328";return}try{const i=JSON.parse(atob(o.credential.split(".")[1]));e.userInfo=i,e.rawToken=o.credential,e.loginStatus="\u2705 \uB85C\uADF8\uC778 \uC131\uACF5 (ID Token \uC218\uC2E0)",a("\uAD6C\uAE00 \uB85C\uADF8\uC778 \uC131\uACF5","success")}catch(i){e.error="JWT \uB514\uCF54\uB529 \uC2E4\uD328: "+i.message,e.loginStatus="\u26A0 \uD1A0\uD070 \uC218\uC2E0 \uC131\uACF5 / \uD30C\uC2F1 \uC2E4\uD328"}},y=()=>{if(!l.sdkLoaded){a("SDK \uCD08\uAE30\uD654 \uBA3C\uC800 \uD558\uC138\uC694.","error");return}l.loading=!0,e.loginStatus="\u23F3 Google \uB85C\uADF8\uC778 \uD31D\uC5C5 \uC694\uCCAD \uC911\u2026",e.error="",e.userInfo=null;try{window.google.accounts.id.prompt(o=>{(o.isNotDisplayed()||o.isSkippedMoment())&&window.google.accounts.oauth2.initTokenClient({client_id:r.googleClientId,scope:"openid email profile",callback:t=>{if(t.error){e.error=t.error,e.loginStatus="\u274C OAuth \uD31D\uC5C5 \uC2E4\uD328",l.loading=!1;return}fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:"Bearer "+t.access_token}}).then(s=>s.json()).then(s=>{e.userInfo=s,e.rawToken=JSON.stringify(t,null,2),e.loginStatus="\u2705 \uB85C\uADF8\uC778 \uC131\uACF5 (OAuth)",l.loading=!1,a("\uAD6C\uAE00 \uB85C\uADF8\uC778 \uC131\uACF5","success")}).catch(s=>{e.error=s.message,l.loading=!1})}}).requestAccessToken({prompt:"select_account"})})}catch(o){e.error=o.message,l.loading=!1,a("\uB85C\uADF8\uC778 \uD31D\uC5C5 \uC2E4\uD328: "+o.message,"error",0)}},h=async()=>{if(!r.googleClientId){a("Client ID \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}try{await boApi.put("/bo/sy/prop/bulk",[{propKey:"app.auth.social.google-client-id",propValue:r.googleClientId}],coUtil.cofApiHdr("\uAD6C\uAE00 SDK \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),a("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(o){a(coUtil.cofErrMsg(o,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:r,result:e,uiState:l,handleBtnAction:o=>{if(o==="sdk-init")return b();if(o==="login-test")return y();if(o==="key-save")return h()},cfgFormColumns:[{key:"googleClientId",label:"Google Client ID",type:"text",hint:"app.auth.social.google-client-id",mono:!0,colSpan:3,required:!0,placeholder:"sy_prop: app.auth.social.google-client-id"}],userInfoGridColumns:[{key:"_label",label:"\uD56D\uBAA9",cellStyle:"color:#555;width:120px"},{key:"_value",label:"\uAC12",type:"slot",name:"userInfoValue"}],cfUserInfoRows:()=>e.userInfo?[{_label:"Sub (ID)",_value:e.userInfo.sub,_key:"sub"},{_label:"\uC774\uB984",_value:e.userInfo.name,_key:"name"},{_label:"\uC774\uBA54\uC77C",_value:e.userInfo.email,_key:"email"},{_label:"\uC774\uBA54\uC77C \uC778\uC99D",_value:e.userInfo.email_verified,_key:"email_verified"},{_label:"\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",_value:e.userInfo.picture,_key:"picture"}]:[]}},template:`
<div>
  <div class="page-title">\uAD6C\uAE00 \uC18C\uC15C \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8</div>

  <!-- \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uC124\uC815 / \uD0A4 \uD655\uC778</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div style="display:flex;gap:6px;margin-top:8px;margin-bottom:8px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('key-save')">sy_prop \uC800\uC7A5</button>
        <button class="btn btn_apply btn-sm" @click="handleBtnAction('sdk-init')">GSI \uCD08\uAE30\uD654</button>
      </div>
      <div style="font-size:12px;color:#666;padding:6px 8px;background:#f8f9fa;border-radius:4px;line-height:2">
        <div>SDK \uC0C1\uD0DC: <strong>{{ result.sdkStatus || '\uD655\uC778 \uC911\u2026' }}</strong><span v-if="result.sdkUrl" style="margin-left:8px;color:#aaa;font-family:monospace;font-size:11px;">{{ result.sdkUrl }}</span></div>
        <div>\uCD08\uAE30\uD654 \uC0C1\uD0DC: <strong>{{ result.initDetail || (uiState.sdkLoaded ? '\uCD08\uAE30\uD654 \uC644\uB8CC' : '\uBBF8\uCD08\uAE30\uD654') }}</strong></div>
      </div>
    </div>
  </div>

  <!-- \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8</span>
      <div style="margin-left:auto">
        <button class="btn btn_confirm btn-sm" :disabled="uiState.loading || !uiState.sdkLoaded" @click="handleBtnAction('login-test')">
          {{ uiState.loading ? '\u23F3 \uCC98\uB9AC \uC911\u2026' : '\uAD6C\uAE00 \uB85C\uADF8\uC778 \uD31D\uC5C5' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <div v-if="result.loginStatus" style="margin-bottom:8px;font-size:13px;font-weight:600">{{ result.loginStatus }}</div>
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;white-space:pre-wrap;margin-bottom:8px">{{ result.error }}</div>
      <div v-if="result.userInfo" style="background:#f0fdf4;border:1px solid #86efac;border-radius:6px;padding:10px">
        <div style="font-weight:600;margin-bottom:6px;color:#15803d">\u2705 \uC0AC\uC6A9\uC790 \uC815\uBCF4 (JWT Payload)</div>
        <bo-grid :columns="userInfoGridColumns" :rows="cfUserInfoRows()" :show-row-num="false">
          <template #userInfoValue="{ row }">
            <span v-if="row._key === 'email_verified'">{{ row._value ? '\u2705 \uC778\uC99D\uB428' : '\u274C \uBBF8\uC778\uC99D' }}</span>
            <span v-else-if="row._key === 'picture'">
              <img v-if="row._value" :src="row._value" style="width:40px;height:40px;border-radius:50%;vertical-align:middle;margin-right:6px" />
              <span v-if="!row._value">(\uC5C6\uC74C)</span>
            </span>
            <span v-else>{{ row._value }}</span>
          </template>
        </bo-grid>
      </div>
      <div v-if="result.rawToken" style="margin-top:8px">
        <div style="font-size:11px;color:#888;margin-bottom:4px">Raw Token</div>
        <pre style="background:#1e1e1e;color:#d4d4d4;padding:10px;border-radius:6px;font-size:11px;overflow:auto;max-height:120px;word-break:break-all;white-space:pre-wrap">{{ result.rawToken }}</pre>
      </div>
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.auth.social." default-prop-key-filter="app.auth.social.google" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/social" default-key-filter="app.auth.social.google" />

  <!-- \uD750\uB984 \uC548\uB0B4 -->
  <div class="card">
    <div class="toolbar"><span class="list-title">\uC5F0\uB3D9 \uD750\uB984</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>1.</b> Google Cloud Console \u2192 OAuth 2.0 \uD074\uB77C\uC774\uC5B8\uD2B8 ID \uBC1C\uAE09 (Web \uC720\uD615)<br>
      <b>2.</b> \uC2B9\uC778\uB41C JavaScript \uC6D0\uBCF8\uC5D0 <code>http://127.0.0.1:5501</code>, <code>http://localhost:3000</code> \uCD94\uAC00<br>
      <b>3.</b> sy_prop <code>app.auth.social.google-client-id</code> \uC5D0 Client ID \uB4F1\uB85D<br>
      <b>4.</b> \uB85C\uADF8\uC778 \uD31D\uC5C5 \u2192 ID Token(JWT) \uC218\uC2E0 \u2192 \uBC31\uC5D4\uB4DC <code>POST /api/co/fo-auth/social-login</code> \uB85C \uC804\uB2EC<br>
      <b>5.</b> \uBC31\uC5D4\uB4DC: Google tokeninfo \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB85C \uD1A0\uD070 \uAC80\uC99D \uD6C4 JWT \uBC1C\uAE09
    </div>
  </div>
</div>`};
