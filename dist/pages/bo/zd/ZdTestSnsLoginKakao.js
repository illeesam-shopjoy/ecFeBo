window.ZdTestSnsLoginKakao={name:"ZdTestSnsLoginKakao",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(f){var u;const{reactive:c,onMounted:g}=Vue,t=f.showToast||((u=window.boApp)==null?void 0:u.showToast)||(()=>{}),s=c({kakaoJsKey:"",naverClientId:"",naverCallbackUrl:""}),o=c({sdkStatus:"",sdkUrl:"",initDetail:"",loginStatus:"",userInfo:null,rawResponse:"",tokenRaw:"",error:""}),i=c({loading:!1,sdkLoaded:!1,loggedIn:!1});g(async()=>{var a,e,r;try{const n=await((e=(a=boApiSvc.syProp)==null?void 0:a.getList)==null?void 0:e.call(a,{propKeys:"app.auth.social.kakao-js-key,app.auth.social.naver-client-id,app.auth.social.naver-callback-url"},"\uCE74\uCE74\uC624 \uC18C\uC15C \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),x=((r=n==null?void 0:n.data)==null?void 0:r.data)||[],d=K=>{const k=x.filter(l=>l.propKey===K&&l.propValue),p=k.find(l=>/local|dev/.test(l.propProfile||""))||k[0];return(p==null?void 0:p.propValue)||""};s.kakaoJsKey=d("app.auth.social.kakao-js-key"),s.naverClientId=d("app.auth.social.naver-client-id"),s.naverCallbackUrl=d("app.auth.social.naver-callback-url")}catch(n){o.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(n.message||n)}b()});const b=()=>{var e,r,n;const a=!!(window.Kakao&&((r=(e=window.Kakao).isInitialized)!=null&&r.call(e)));i.sdkLoaded=a,o.sdkUrl="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js",o.sdkStatus=a?"\u2705 Kakao SDK \uB85C\uB4DC\uB428 (\uCD08\uAE30\uD654 \uC644\uB8CC)":window.Kakao?"\u26A0 Kakao SDK \uB85C\uB4DC\uB428 (\uBBF8\uCD08\uAE30\uD654)":"\u274C Kakao SDK \uC5C6\uC74C",o.initDetail=(n=window.Kakao)!=null&&n.isInitialized()?"\uC571\uD0A4: "+(s.kakaoJsKey||"(\uD0A4 \uBBF8\uC785\uB825)"):""},y=()=>{if(!s.kakaoJsKey){t("JS Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}try{if(!window.Kakao)throw new Error("Kakao SDK \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");window.Kakao.isInitialized()||window.Kakao.init(s.kakaoJsKey),i.sdkLoaded=!0,o.sdkStatus="\u2705 Kakao SDK \uCD08\uAE30\uD654 \uC644\uB8CC",o.initDetail="\uC571\uD0A4: "+s.kakaoJsKey,t("Kakao SDK \uCD08\uAE30\uD654 \uC644\uB8CC","success")}catch(a){o.initDetail="\u274C "+a.message,o.error=a.message,t("\uCD08\uAE30\uD654 \uC2E4\uD328: "+a.message,"error",0)}},m=()=>{if(!s.kakaoJsKey){t("JS Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}o.loginStatus="",o.error="",o.userInfo=null;const a=window.location.origin+"/oauth/callback/kakao",e="https://kauth.kakao.com/oauth/authorize?client_id="+encodeURIComponent(s.kakaoJsKey)+"&redirect_uri="+encodeURIComponent(a)+"&response_type=token&scope=profile_nickname,profile_image,account_email";window.open(e,"kakaoLogin","width=500,height=700,left=200,top=100"),o.loginStatus="\u23F3 \uCE74\uCE74\uC624 \uC778\uC99D \uD0ED \uC5F4\uB9BC \u2014 \uB85C\uADF8\uC778 \uC644\uB8CC \uD6C4 \uBC1C\uAE09\uB41C Access Token\uC744 \uC544\uB798\uC5D0 \uBD99\uC5EC\uB123\uC73C\uC138\uC694.",t("\uC0C8 \uD0ED\uC5D0\uC11C \uB85C\uADF8\uC778 \uD6C4 Access Token\uC744 \uBCF5\uC0AC\uD574 \uBD99\uC5EC\uB123\uC73C\uC138\uC694.","success")},v=async()=>{var a;if(!o.tokenRaw){t("Access Token \uC744 \uC785\uB825\uD558\uC138\uC694.","error");return}i.loading=!0,o.error="";try{const e=await boApi.post("/co/ext/sns-kakao/profile",{accessToken:o.tokenRaw},coUtil.cofApiHdr("\uCE74\uCE74\uC624 \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8","\uD504\uB85C\uD544 \uC870\uD68C"));o.userInfo=((a=e.data)==null?void 0:a.data)||e.data,o.loginStatus="\u2705 \uB85C\uADF8\uC778 \uC131\uACF5",i.loggedIn=!0,t("\uCE74\uCE74\uC624 \uD504\uB85C\uD544 \uC870\uD68C \uC131\uACF5","success")}catch(e){o.error=coUtil.cofErrMsg(e,"\uD504\uB85C\uD544 \uC870\uD68C \uC2E4\uD328"),o.loginStatus="\u274C \uD504\uB85C\uD544 \uC870\uD68C \uC2E4\uD328",t(o.error,"error",0)}i.loading=!1},h=()=>{if(!i.loggedIn){t("\uB85C\uADF8\uC778 \uC0C1\uD0DC\uAC00 \uC544\uB2D9\uB2C8\uB2E4.","error");return}window.Kakao.Auth.logout(()=>{o.loginStatus="\u2298 \uB85C\uADF8\uC544\uC6C3 \uC644\uB8CC",o.userInfo=null,i.loggedIn=!1,t("\uCE74\uCE74\uC624 \uB85C\uADF8\uC544\uC6C3 \uC644\uB8CC","success")})},w=async()=>{if(!s.kakaoJsKey){t("JS Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}try{await boApi.put("/bo/sy/prop/bulk",[{propKey:"app.auth.social.kakao-js-key",propValue:s.kakaoJsKey}],coUtil.cofApiHdr("\uCE74\uCE74\uC624 SDK \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),t("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(a){t(coUtil.cofErrMsg(a,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:s,result:o,uiState:i,handleBtnAction:a=>{if(a==="sdk-init")return y();if(a==="login-test")return m();if(a==="profile-fetch")return v();if(a==="logout-test")return h();if(a==="key-save")return w()},cfgFormColumns:[{key:"kakaoJsKey",label:"Kakao JS Key",type:"text",hint:"app.auth.social.kakao-js-key",mono:!0,colSpan:3,required:!0,placeholder:"sy_prop: app.auth.social.kakao-js-key"}],tokenFormColumns:[{key:"tokenRaw",label:"Access Token (\uC778\uC99D \uC644\uB8CC \uD6C4 \uBD99\uC5EC\uB123\uAE30)",type:"slot",name:"tokenRawSlot",colSpan:3}],userInfoGridColumns:[{key:"_label",label:"\uD56D\uBAA9",cellStyle:"color:#555;width:120px"},{key:"_value",label:"\uAC12",type:"slot",name:"userInfoValue"}],cfUserInfoRows:()=>{var a,e,r;return o.userInfo?[{_label:"ID",_value:o.userInfo.id,_key:"id"},{_label:"\uB2C9\uB124\uC784",_value:(a=o.userInfo.properties)==null?void 0:a.nickname,_key:"nickname"},{_label:"\uC774\uBA54\uC77C",_value:(e=o.userInfo.kakao_account)==null?void 0:e.email,_key:"email"},{_label:"\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",_value:(r=o.userInfo.properties)==null?void 0:r.profile_image,_key:"profile_image"}]:[]}}},template:`
<div>
  <div class="page-title">\uCE74\uCE74\uC624 \uC18C\uC15C \uB85C\uADF8\uC778 \uD14C\uC2A4\uD2B8</div>

  <!-- \uC124\uC815 \uC815\uBCF4 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uC124\uC815 / \uD0A4 \uD655\uC778</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div style="display:flex;gap:6px;margin-top:8px;margin-bottom:8px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('key-save')">sy_prop \uC800\uC7A5</button>
        <button class="btn btn_apply btn-sm" @click="handleBtnAction('sdk-init')">SDK \uCD08\uAE30\uD654</button>
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
      <span class="list-title">\uB85C\uADF8\uC778 / \uB85C\uADF8\uC544\uC6C3 \uD14C\uC2A4\uD2B8</span>
      <div style="margin-left:auto;display:flex;gap:6px">
        <button class="btn btn_confirm btn-sm" @click="handleBtnAction('login-test')">\u{1F7E1} \uCE74\uCE74\uC624 \uC778\uC99D \uC5F4\uAE30</button>
        <button class="btn btn_cancel btn-sm" :disabled="!uiState.loggedIn" @click="handleBtnAction('logout-test')">\uB85C\uADF8\uC544\uC6C3</button>
      </div>
    </div>
    <div style="padding:12px">
      <div style="font-size:12px;color:#666;margin-bottom:10px;padding:8px;background:#fffbeb;border-radius:4px;line-height:1.6">
        \u24D8 \uCE74\uCE74\uC624 OAuth \uC778\uC99D \uCC3D\uC774 \uC5F4\uB9BD\uB2C8\uB2E4. \uB85C\uADF8\uC778 \uC644\uB8CC \uD6C4 \uB9AC\uB2E4\uC774\uB809\uD2B8 URL\uC758 <b>#access_token=\u2026</b> \uAC12\uC744 \uBCF5\uC0AC\uD574 \uC544\uB798\uC5D0 \uBD99\uC5EC\uB123\uACE0 [\uD504\uB85C\uD544 \uC870\uD68C] \uD558\uC138\uC694.
      </div>
      <bo-form-area plain-readonly :columns="tokenFormColumns" :form="result" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact>
        <template #tokenRawSlot>
          <div style="display:flex;gap:8px;align-items:flex-end">
            <input class="form-control" v-model="result.tokenRaw" placeholder="\uC608: AAABxxxxx\u2026" style="font-family:monospace;font-size:12px;flex:1" />
            <button class="btn btn_search btn-sm" :disabled="uiState.loading" @click="handleBtnAction('profile-fetch')">
              {{ uiState.loading ? '\u23F3' : '\uD504\uB85C\uD544 \uC870\uD68C' }}
            </button>
          </div>
        </template>
      </bo-form-area>
      <div v-if="result.loginStatus" style="margin-top:8px;margin-bottom:8px;font-size:13px;font-weight:600">{{ result.loginStatus }}</div>
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;white-space:pre-wrap;margin-bottom:8px">{{ result.error }}</div>
      <!-- \uC0AC\uC6A9\uC790 \uC815\uBCF4 -->
      <div v-if="result.userInfo" style="background:#f0fdf4;border:1px solid #86efac;border-radius:6px;padding:10px">
        <div style="font-weight:600;margin-bottom:6px;color:#15803d">\u2705 \uC0AC\uC6A9\uC790 \uC815\uBCF4</div>
        <bo-grid :columns="userInfoGridColumns" :rows="cfUserInfoRows()" :show-row-num="false">
          <template #userInfoValue="{ row }">
            <span v-if="row._key === 'profile_image'">
              <img v-if="row._value" :src="row._value" style="width:40px;height:40px;border-radius:50%;vertical-align:middle;margin-right:6px" />
              <span v-if="!row._value">(\uC5C6\uC74C)</span>
            </span>
            <span v-else>{{ row._value }}</span>
          </template>
        </bo-grid>
      </div>
    </div>
  </div>

  <!-- \uC5F0\uB3D9 \uD750\uB984 \uC548\uB0B4 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uC5F0\uB3D9 \uD750\uB984</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>1.</b> sy_prop <code>app.auth.social.kakao-js-key</code> \uC5D0 \uCE74\uCE74\uC624 \uC571 JS \uD0A4 \uB4F1\uB85D<br>
      <b>2.</b> \uCE74\uCE74\uC624 \uAC1C\uBC1C\uC790 \uCF58\uC194 \u2192 \uC571 \u2192 \uD50C\uB7AB\uD3FC \u2192 Web \uC0AC\uC774\uD2B8 \uB3C4\uBA54\uC778 \uB4F1\uB85D (<code>http://127.0.0.1:5501</code>)<br>
      <b>3.</b> \uB3D9\uC758 \uD56D\uBAA9 \u2192 profile, account_email \uD65C\uC131\uD654<br>
      <b>4.</b> SDK \uCD08\uAE30\uD654 \u2192 \uB85C\uADF8\uC778 \uD31D\uC5C5 \u2192 \uC0AC\uC6A9\uC790 \uC815\uBCF4 \uD655\uC778<br>
      <b>5.</b> \uC2E4\uC81C \uB85C\uADF8\uC778\uC740 <code>POST /api/co/fo-auth/social-login</code> (\uBC31\uC5D4\uB4DC \uD1A0\uD070 \uAC80\uC99D) \uB85C \uC5F0\uACB0
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.auth.social." default-prop-key-filter="app.auth.social.kakao" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/social" default-key-filter="app.auth.social.kakao" />
</div>`};
