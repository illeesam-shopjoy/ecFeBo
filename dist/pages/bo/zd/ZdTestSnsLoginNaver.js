window.ZdTestSnsLoginNaver={name:"ZdTestSnsLoginNaver",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(m){var b;const{reactive:c,onMounted:y,onUnmounted:k}=Vue,a=m.showToast||((b=window.boApp)==null?void 0:b.showToast)||(()=>{}),n=c({clientId:"",clientSecret:"",callbackUrl:"http://127.0.0.1:5501/oauth/callback/naver"}),o=c({sdkStatus:"",sdkUrl:"",initDetail:"",loginResult:null,profile:null,error:"",tokenRaw:""}),l=c({sdkLoaded:!1,loggedIn:!1,loading:!1}),U="naver_oauth_state_"+Math.random().toString(36).slice(2),g=e=>{var t;((t=e.data)==null?void 0:t.type)==="NAVER_TOKEN"&&e.data.access_token&&(o.tokenRaw=e.data.access_token,a("Access Token \uC790\uB3D9 \uC218\uC2E0 \uC644\uB8CC \u2014 [\uD504\uB85C\uD544 \uC870\uD68C] \uD074\uB9AD","success"))};window.addEventListener("message",g),y(async()=>{var e,t,s;try{const r=await((t=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:t.call(e,{propKeys:"app.auth.social.naver-client-id,app.auth.social.naver-client-secret"},"\uB124\uC774\uBC84 \uC18C\uC15C \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),p=((s=r==null?void 0:r.data)==null?void 0:s.data)||[],u=A=>{const v=p.filter(i=>i.propKey===A&&i.propValue),f=v.find(i=>/local|dev/.test(i.propProfile||""))||v[0];return(f==null?void 0:f.propValue)||""};n.clientId=u("app.auth.social.naver-client-id"),n.clientSecret=u("app.auth.social.naver-client-secret")}catch(r){o.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(r.message||r)}d()});const d=()=>{var t;const e=!!((t=window.naver)!=null&&t.LoginWithNaverId);l.sdkLoaded=e,o.sdkUrl="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js",o.sdkStatus=e?"\u2705 \uB124\uC774\uBC84 \uB85C\uADF8\uC778 SDK \uB85C\uB4DC\uB428":"\u274C SDK \uC5C6\uC74C \u2014 [SDK \uB85C\uB4DC] \uD074\uB9AD"},h=()=>{var t;if((t=window.naver)!=null&&t.LoginWithNaverId){d();return}const e=document.createElement("script");e.src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js",e.onload=()=>{d(),a("\uB124\uC774\uBC84 \uB85C\uADF8\uC778 SDK \uB85C\uB4DC \uC644\uB8CC","success")},e.onerror=()=>{o.sdkStatus="\u274C SDK \uB85C\uB4DC \uC2E4\uD328",a("SDK \uB85C\uB4DC \uC2E4\uD328","error",0)},document.head.appendChild(e)},x=()=>{var e;if(!n.clientId){a("Client ID \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if(!((e=window.naver)!=null&&e.LoginWithNaverId)){a("SDK \uB97C \uBA3C\uC800 \uB85C\uB4DC\uD558\uC138\uC694.","error");return}l.loading=!0,o.error="",o.profile=null,o.tokenRaw="";try{const t=new naver.LoginWithNaverId({clientId:n.clientId,callbackUrl:n.callbackUrl,isPopup:!0});t.init();const s=t.generateState&&t.getLoginURL?t.getLoginURL():null,r=Math.random().toString(36).slice(2),p="https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id="+encodeURIComponent(n.clientId)+"&redirect_uri="+encodeURIComponent(n.callbackUrl)+"&state="+r;if(!window.open(s||p,"naverLogin","width=500,height=600,left=200,top=100,scrollbars=yes")){a("\uD31D\uC5C5\uC774 \uCC28\uB2E8\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD31D\uC5C5 \uD5C8\uC6A9 \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.","error",0),l.loading=!1;return}o.initDetail="Client ID: "+n.clientId,l.loading=!1,a("\uB124\uC774\uBC84 \uB85C\uADF8\uC778 \uD31D\uC5C5 \uC5F4\uB9BC \u2014 \uC644\uB8CC \uD6C4 \uBC1C\uAE09\uB41C Access Token\uC744 \uC544\uB798\uC5D0 \uBD99\uC5EC\uB123\uACE0 [\uD504\uB85C\uD544 \uC870\uD68C] \uD074\uB9AD","success")}catch(t){l.loading=!1,o.error=t.message||"\uB85C\uADF8\uC778 \uCD08\uAE30\uD654 \uC624\uB958",a(o.error,"error",0)}},w=async()=>{var e;if(!o.tokenRaw){a("Access Token \uC744 \uC785\uB825\uD558\uC138\uC694.","error");return}l.loading=!0,o.error="";try{const t=await boApi.post("/co/ext/sns-naver/profile",{accessToken:o.tokenRaw},coUtil.cofApiHdr("\uB124\uC774\uBC84 \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8","\uD504\uB85C\uD544 \uC870\uD68C"));o.profile=((e=t.data)==null?void 0:e.data)||t.data,l.loggedIn=!0,a("\uD504\uB85C\uD544 \uC870\uD68C \uC131\uACF5","success")}catch(t){o.error=coUtil.cofErrMsg(t,"\uD504\uB85C\uD544 \uC870\uD68C \uC2E4\uD328"),a(o.error,"error",0)}l.loading=!1},S=async()=>{if(!n.clientId){a("Client ID \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}try{await boApi.put("/bo/sy/prop/bulk",[{propKey:"app.auth.social.naver-client-id",propValue:n.clientId},{propKey:"app.auth.social.naver-client-secret",propValue:n.clientSecret}],coUtil.cofApiHdr("\uB124\uC774\uBC84 \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),a("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){a(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}},_=()=>{o.profile=null,o.tokenRaw="",o.loginResult=null,l.loggedIn=!1,a("\uB85C\uADF8\uC544\uC6C3 (\uB85C\uCEEC \uC0C1\uD0DC \uCD08\uAE30\uD654)","success")},I=e=>{if(e==="sdk-load")return h();if(e==="login")return x();if(e==="profile-fetch")return w();if(e==="key-save")return S();if(e==="logout")return _()};return k(()=>window.removeEventListener("message",g)),{cfg:n,result:o,uiState:l,handleBtnAction:I,cfgFormColumns:[{key:"clientId",label:"Client ID",type:"text",hint:"app.auth.social.naver-client-id",mono:!0,required:!0,placeholder:"sy_prop: app.auth.social.naver-client-id"},{key:"clientSecret",label:"Client Secret",type:"text",hint:"app.auth.social.naver-client-secret",placeholder:"sy_prop: app.auth.social.naver-client-secret"},{key:"callbackUrl",label:"Callback URL",type:"readonly",hint:"callbackUrl",mono:!0,colSpan:3,fmt:()=>n.callbackUrl}],tokenFormColumns:[{key:"tokenRaw",label:"Access Token (\uD31D\uC5C5 \uC644\uB8CC \uD6C4 \uBD99\uC5EC\uB123\uAE30)",type:"slot",name:"tokenRawSlot",colSpan:3}],profileGridColumns:[{key:"nickname",label:"\uB2C9\uB124\uC784"},{key:"name",label:"\uC774\uB984"},{key:"email",label:"\uC774\uBA54\uC77C"},{key:"id",label:"ID",mono:!0},{key:"gender",label:"\uC131\uBCC4"},{key:"birthday",label:"\uC0DD\uC77C"},{key:"age",label:"\uC5F0\uB839\uB300"}]}},template:`
<div>
  <div class="page-title">\uB124\uC774\uBC84 \uC18C\uC15C \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8</div>

  <!-- \uD0A4 \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">API \uD0A4 \uC124\uC815</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div style="display:flex;gap:6px;margin-top:8px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('key-save')">sy_prop \uC800\uC7A5</button>
        <button class="btn btn_apply btn-sm" @click="handleBtnAction('sdk-load')">SDK \uB85C\uB4DC</button>
      </div>
      <div style="font-size:12px;color:#666;padding:6px 8px;background:#f8f9fa;border-radius:4px;margin-top:8px;line-height:2">
        <div>SDK \uC0C1\uD0DC: <strong>{{ result.sdkStatus || '\uD655\uC778 \uC911\u2026' }}</strong><span v-if="result.sdkUrl" style="margin-left:8px;color:#aaa;font-family:monospace;font-size:11px;">{{ result.sdkUrl }}</span></div>
        <div>\uCD08\uAE30\uD654 \uC0C1\uD0DC: <strong>{{ result.initDetail || (uiState.sdkLoaded ? '\uCD08\uAE30\uD654 \uC644\uB8CC' : '\uBBF8\uCD08\uAE30\uD654') }}</strong></div>
      </div>
    </div>
  </div>

  <!-- \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8</span>
      <div style="margin-left:auto;display:flex;gap:6px">
        <button class="btn btn_apply btn-sm" :disabled="uiState.loading" @click="handleBtnAction('login')">\u{1F7E2} \uB124\uC774\uBC84 \uB85C\uADF8\uC778 \uD31D\uC5C5</button>
        <button v-if="uiState.loggedIn" class="btn btn_cancel btn-sm" @click="handleBtnAction('logout')">\uB85C\uADF8\uC544\uC6C3</button>
      </div>
    </div>
    <div style="padding:12px">
      <!-- \uD31D\uC5C5 \uD750\uB984 \uC548\uB0B4 + \uC9C1\uC811 \uD1A0\uD070 \uC785\uB825 -->
      <div style="font-size:12px;color:#666;margin-bottom:8px;padding:8px;background:#f0f4ff;border-radius:4px;line-height:1.6">
        \u24D8 \uB124\uC774\uBC84 \uB85C\uADF8\uC778\uC740 \uD31D\uC5C5 \u2192 \uB9AC\uB2E4\uC774\uB809\uD2B8 \uAD6C\uC870\uC785\uB2C8\uB2E4. \uD31D\uC5C5 \uB85C\uADF8\uC778 \uC644\uB8CC \uD6C4 \uBC1C\uAE09\uB41C <b>Access Token</b>\uC744 \uC544\uB798\uC5D0 \uBD99\uC5EC\uB123\uACE0 [\uD504\uB85C\uD544 \uC870\uD68C] \uD558\uC138\uC694.
      </div>
      <bo-form-area plain-readonly :columns="tokenFormColumns" :form="result" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact>
        <template #tokenRawSlot>
          <div style="display:flex;gap:8px;align-items:flex-end">
            <input class="form-control" v-model="result.tokenRaw" placeholder="AAAAxxxxx\u2026" style="font-family:monospace;font-size:12px;flex:1" />
            <button class="btn btn_search btn-sm" :disabled="uiState.loading" @click="handleBtnAction('profile-fetch')">
              {{ uiState.loading ? '\u23F3' : '\uD504\uB85C\uD544 \uC870\uD68C' }}
            </button>
          </div>
        </template>
      </bo-form-area>
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-top:8px">{{ result.error }}</div>
    </div>
  </div>

  <!-- \uD504\uB85C\uD544 \uACB0\uACFC -->
  <div v-if="result.profile" class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\u2705 \uB85C\uADF8\uC778 \uACB0\uACFC \u2014 \uD504\uB85C\uD544</span></div>
    <div style="padding:12px;display:flex;gap:16px;align-items:flex-start">
      <img v-if="result.profile.profile_image" :src="result.profile.profile_image"
        style="width:64px;height:64px;border-radius:50%;border:2px solid #03c75a;object-fit:cover" />
      <div style="flex:1">
        <bo-grid :columns="profileGridColumns" :rows="result.profile ? [result.profile] : []" :show-row-num="false" />
      </div>
    </div>
    <div style="padding:0 12px 12px">
      <details style="font-size:11px">
        <summary style="cursor:pointer;color:#888">\uC804\uCCB4 \uC751\uB2F5 JSON \uBCF4\uAE30</summary>
        <pre style="background:#f8f9fa;padding:8px;border-radius:4px;margin-top:6px;overflow-x:auto">{{ JSON.stringify(result.profile, null, 2) }}</pre>
      </details>
    </div>
  </div>

  <!-- \uC548\uB0B4 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>1.</b> <a href="https://developers.naver.com/apps" target="_blank">\uB124\uC774\uBC84 \uAC1C\uBC1C\uC790\uC13C\uD130</a> \u2192 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB4F1\uB85D<br>
      <b>2.</b> \uB124\uC774\uBC84 \uB85C\uADF8\uC778 \uC0AC\uC6A9 API \uCD94\uAC00 \u2192 \uAD8C\uD55C: \uC774\uB984/\uC774\uBA54\uC77C/\uB2C9\uB124\uC784/\uD504\uB85C\uD544\uC0AC\uC9C4<br>
      <b>3.</b> \uC11C\uBE44\uC2A4 URL: <code>http://127.0.0.1:3000</code><br>
      <b>4.</b> Callback URL: <code>{{ cfg.callbackUrl }}</code><br>
      <b>5.</b> sy_prop <code>app.auth.social.naver-client-id</code> / <code>app.auth.social.naver-client-secret</code> \uB4F1\uB85D<br><br>
      <b>\uBC31\uC5D4\uB4DC API:</b> <code>POST /api/co/ext/sns-naver/profile</code> \u2192 \uB124\uC774\uBC84 userinfo \uD504\uB85D\uC2DC \uD638\uCD9C
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.auth.social." default-prop-key-filter="app.auth.social.naver" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/social" default-key-filter="app.auth.social.naver" />
</div>`};
