window.Login={name:"Login",props:{showToast:{type:Function,default:()=>{}}},emits:["close"],setup(l,{emit:x}){const{ref:P,reactive:f,watch:z,onMounted:A}=Vue,o=f({snsPhoneVerified:!1,loading:!1,error:null,step:"login",snsProvider:null,loginErr:"",signupErr:"",_ec:"",_pc:"",snsNickname:"",snsPhoneCode:"",snsPhoneCodeSent:!1,_spc:"",snsErr:""}),E=(e,t={})=>{if(e==="page-close")return x("close");if(e==="form-login")return h();if(e==="form-socialLogin")return _(t);if(e==="form-startSnsSignup")return D(t);if(e==="memberPickModal-open")return B();if(e==="memberPickModal-close"){n.show=!1;return}else{if(e==="memberPickModal-search")return T();if(e==="memberPickModal-page")return V(t);if(e==="tab-step"){o.snsProvider=null,o.step=t;return}else{if(e==="tab-nextFromTerms")return F();if(e==="tab-backToTerms"){o.step="terms";return}else{if(e==="form-sendEmailCode")return G();if(e==="form-verifyEmail")return H();if(e==="form-sendPhoneCode")return j();if(e==="form-verifyPhone")return q();if(e==="form-signup")return $();if(e==="form-openAddr"){g.target="email",g.show=!0;return}else if(e==="form-openAddrSns"){g.target="sns",g.show=!0;return}else{if(e==="form-sendSnsPhoneCode")return Y();if(e==="form-verifySnsPhone")return Z();if(e==="form-snsSignup")return Q();if(e==="form-selectGender"){t.type==="sns"?m.gender=t.value:r.gender=t.value;return}else{if(e==="form-toggleAllTerms")return L();console.warn("[handleBtnAction] unknown cmd:",e)}}}}}},y=(e,t={})=>{if(e==="members-rowPick")return M(t);console.warn("[handleSelectAction] unknown cmd:",e)},u=f({email:"user1@demo.com",password:"demo1234"}),p=f({list:[],selected:"",loading:!1}),N=async()=>{var e;p.loading=!0;try{const t=await coApiSvc.foAuth.siteOptions("\uB85C\uADF8\uC778","\uC0AC\uC774\uD2B8\uBAA9\uB85D\uC870\uD68C");p.list=((e=t.data)==null?void 0:e.data)||[],p.list.length===1&&(p.selected=p.list[0].siteId)}catch(t){console.warn("[Login] siteOptions load failed:",t),p.list=[]}finally{p.loading=!1}};A(()=>{N()});const h=async()=>{var t,d,a;if(o.loginErr="",!u.email||!u.password){o.loginErr="\uC774\uBA54\uC77C\uACFC \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.";return}if(p.list.length>0&&!p.selected){o.loginErr="\uC0AC\uC774\uD2B8\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.";return}const e=await window.foAuth.login(u.email,u.password,p.selected||void 0);if(e.ok){const c=((t=window.foAuth.state.user)==null?void 0:t.authNm)||((d=window.foAuth.state.user)==null?void 0:d.memberNm)||"\uC0AC\uC6A9\uC790";l.showToast(c+"\uB2D8, \uD658\uC601\uD569\uB2C8\uB2E4!","success");try{const i=(a=window.useFoAppInitStore)==null?void 0:a.call(window);i&&await i.saFetchFoAppInitData()}catch(i){console.warn("[Login] fetchFoAppInitData error:",i)}x("close")}else o.loginErr=e.msg},n=f({show:!1,searchType:"",searchValue:"",loading:!1,rows:[],total:0,pageNo:1,pageSize:20,totalPage:1}),C=20,k={};k.memberPickGrid=[{key:"memberNm",label:"\uC774\uB984",fmt:(e,t)=>`${(t.memberNm||"?").charAt(0)} ${t.memberNm||"-"}`,cellInnerStyle:"font-weight:700;color:var(--text-primary);white-space:nowrap;"},{key:"loginId",label:"\uB85C\uADF8\uC778ID",mono:!0,fmt:e=>e||"-"},{key:"memberEmail",label:"\uC774\uBA54\uC77C",mono:!0,fmt:e=>e||"-"},{key:"gradeCdNm",label:"\uB4F1\uAE09",fmt:e=>e||"\u2014",cellInnerStyle:e=>e?"display:inline-block;padding:1px 7px;border-radius:9px;background:#ede9fe;color:#7c3aed;font-size:10px;font-weight:700;white-space:nowrap;":"color:var(--text-muted);"},{key:"memberStatusCd",label:"\uC0C1\uD0DC",align:"center",fmt:(e,t)=>e==="ACTIVE"?"\uD65C\uC131":t.memberStatusCdNm||"\uBE44\uD65C\uC131",cellInnerStyle:e=>e==="ACTIVE"?"display:inline-block;padding:1px 8px;border-radius:9px;background:#dcfce7;color:#16a34a;font-size:10px;font-weight:700;":"display:inline-block;padding:1px 8px;border-radius:9px;background:#fee2e2;color:#dc2626;font-size:10px;font-weight:700;"},{key:"memberPhone",label:"\uC5F0\uB77D\uCC98",fmt:e=>e||"-"},{key:"joinDate",label:"\uAC00\uC785\uC77C",fmt:e=>e?e.substring(0,10):"-"},{type:"actions",actions:[{label:"\uC120\uD0DD",style:"background:linear-gradient(135deg,#f9a8c9,#e8587a);color:#fff;border:none;border-radius:6px;padding:3px 10px;font-size:10px;font-weight:700;cursor:pointer;white-space:nowrap;display:inline-block;",onClick:e=>y("members-rowPick",e)}]}];const v=async()=>{var e;n.loading=!0;try{const t={searchValue:n.searchValue,searchType:n.searchType,pageNo:n.pageNo,pageSize:C};t.searchValue&&!t.searchType&&(t.searchType="memberNm,loginId,memberPhone");const a=((e=(await coApiSvc.mbMember.getPage(t,"\uB85C\uADF8\uC778","\uD68C\uC6D0\uC120\uD0DD")).data)==null?void 0:e.data)||{};n.rows=a.pageList||[],n.total=a.pageTotalCount||0,n.totalPage=a.pageTotalPage||1}catch{n.rows=[]}finally{n.loading=!1}},B=()=>{n.show=!0,n.searchType="",n.searchValue="",n.pageNo=1,v()},T=()=>{n.pageNo=1,v()},V=e=>{n.pageNo=e,v()},M=async e=>{n.show=!1,u.email=e.loginId||e.memberEmail||"",u.password="1111",e.siteId&&(p.selected=e.siteId),await h()},w=(e,t)=>{l.showToast("[\uAC1C\uBC1C] "+e+`
`+window.coExtSdk._fmtParams(t),"info",0)},I=e=>{const t=e.charAt(0).toUpperCase()+e.slice(1);return!window.coExtSdk||typeof window.coExtSdk["login"+t]!="function"?Promise.reject(new Error("\uC18C\uC15C SDK \uBAA8\uB4C8(coExtSdk)\uC774 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uAC70\uB098 \uC54C \uC218 \uC5C6\uB294 provider \uC785\uB2C8\uB2E4: "+e)):(window.coExtSdk.setDebugHook&&window.coExtSdk.setDebugHook(w),window.coExtSdk["login"+t]())},_=async e=>{var t,d,a,c;o.loginErr="";try{if(!window.coAuth)throw new Error("coAuth \uBAA8\uB4C8\uC774 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");const i=await window.coAuth.socialLogin("fo",e,{onDebug:w});if(!i.ok)throw new Error(i.msg||e+" \uB85C\uADF8\uC778 \uC2E4\uD328");const b=((a=(d=(t=window.foAuth)==null?void 0:t.state)==null?void 0:d.user)==null?void 0:a.memberNm)||((c=i.user)==null?void 0:c.memberNm)||e;l.showToast(b+"\uB2D8, \uD658\uC601\uD569\uB2C8\uB2E4!","success"),x("close")}catch(i){console.error("[doSocial] error:",i),o.loginErr=i.message||e+" \uB85C\uADF8\uC778 \uC2E4\uD328";const b=window.coExtHelp&&window.coExtHelp.toastAction({kind:"social",provider:e,error:i});l.showToast(o.loginErr,"error",0,"",b)}},D=async e=>{var t,d,a;o.snsErr="";try{const c=await I(e);o.snsProvider=e;const i=c.profile||{},b=i.name||i.nickname||((d=(t=i.kakao_account)==null?void 0:t.profile)==null?void 0:d.nickname)||((a=i.properties)==null?void 0:a.nickname)||"";b&&(o.snsNickname=b),o.step="terms"}catch(c){console.error("[startSnsSignup] error:",c),o.snsErr=c.message||e+" \uC778\uC99D \uC2E4\uD328";const i=window.coExtHelp&&window.coExtHelp.toastAction({kind:"social",provider:e,error:c});l.showToast(o.snsErr,"error",0,"",i)}},s=f({all:!1,t1:!1,t2:!1,t3:!1,t4:!1}),L=()=>{s.t1=s.t2=s.t3=s.t4=s.all};z(()=>[s.t1,s.t2,s.t3,s.t4],()=>{s.all=s.t1&&s.t2&&s.t3&&s.t4});const F=()=>{o.step=o.snsProvider?"sns-signup":"signup"},r=f({memberNm:"",email:"",emailCode:"",emailSent:!1,emailVerified:!1,phone:"",phoneCode:"",phoneSent:!1,phoneVerified:!1,password:"",password2:"",postcode:"",address:"",addressDetail:"",birthdate:"",gender:""}),g=f({show:!1,target:"email"}),O=(e,t,d)=>{if(e==="addr-search"){if(g.show=!1,d==null)return;const a=g.target==="sns"?m:r;a.postcode=d.zonecode,a.address=d.address;return}},G=()=>{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)){o.signupErr="\uC62C\uBC14\uB978 \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694.";return}o._ec=String(Math.floor(1e5+Math.random()*9e5)),r.emailSent=!0,r.emailVerified=!1,o.signupErr="",l.showToast("\uC778\uC99D\uCF54\uB4DC: "+o._ec+"  (\uB370\uBAA8\uC6A9)","info")},H=()=>{r.emailCode===o._ec?(r.emailVerified=!0,o.signupErr="",l.showToast("\uC774\uBA54\uC77C \uC778\uC99D \uC644\uB8CC!","success")):o.signupErr="\uC778\uC99D\uCF54\uB4DC\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."},j=()=>{if(!/^010[-]?\d{4}[-]?\d{4}$/.test(r.phone.replace(/\s/g,""))){o.signupErr="\uC62C\uBC14\uB978 \uD734\uB300\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694. (010-0000-0000)";return}o._pc=String(Math.floor(1e5+Math.random()*9e5)),r.phoneSent=!0,r.phoneVerified=!1,o.signupErr="",l.showToast("\uC778\uC99D\uCF54\uB4DC: "+o._pc+"  (\uB370\uBAA8\uC6A9)","info")},q=()=>{r.phoneCode===o._pc?(r.phoneVerified=!0,o.signupErr="",l.showToast("\uD734\uB300\uD3F0 \uC778\uC99D \uC644\uB8CC!","success")):o.signupErr="\uC778\uC99D\uCF54\uB4DC\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."},$=async()=>{if(o.signupErr="",!r.memberNm.trim()){o.signupErr="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";return}if(!r.emailVerified){o.signupErr="\uC774\uBA54\uC77C \uC778\uC99D\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.";return}if(!r.phoneVerified){o.signupErr="\uD734\uB300\uD3F0 \uC778\uC99D\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.";return}if(r.password.length<6){o.signupErr="\uBE44\uBC00\uBC88\uD638\uB294 6\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.";return}if(r.password!==r.password2){o.signupErr="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";return}const e=window.CryptoJS?CryptoJS.SHA256(r.password).toString():r.password,t=await window.foAuth.signup(r.memberNm,r.email,r.phone,{password:e,postcode:r.postcode,address:r.address,addressDetail:r.addressDetail,birthdate:r.birthdate,gender:r.gender});t.ok?(l.showToast("\uD68C\uC6D0\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!","success"),x("close")):o.signupErr=t.msg||"\uD68C\uC6D0\uAC00\uC785 \uC2E4\uD328"},S=P(""),K=e=>({google:"Google",kakao:"\uCE74\uCE74\uC624",naver:"\uB124\uC774\uBC84"})[e]||e,J=e=>({google:"#fff",kakao:"#FEE500",naver:"#03C75A"})[e]||"#fff",U=e=>({google:"#333",kakao:"#3C1E1E",naver:"#fff"})[e]||"#333",Y=()=>{if(!/^010[-]?\d{4}[-]?\d{4}$/.test(S.value.replace(/\s/g,""))){o.snsErr="\uC62C\uBC14\uB978 \uD734\uB300\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.";return}o._spc=String(Math.floor(1e5+Math.random()*9e5)),o.snsPhoneCodeSent=!0,o.snsPhoneVerified=!1,o.snsErr="",l.showToast("\uC778\uC99D\uCF54\uB4DC: "+o._spc+"  (\uB370\uBAA8\uC6A9)","info")},Z=()=>{o.snsPhoneCode===o._spc?(o.snsPhoneVerified=!0,o.snsErr="",l.showToast("\uD734\uB300\uD3F0 \uC778\uC99D \uC644\uB8CC!","success")):o.snsErr="\uC778\uC99D\uCF54\uB4DC\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."},m=f({postcode:"",address:"",addressDetail:"",birthdate:"",gender:""}),Q=async()=>{if(o.snsErr="",!o.snsNickname.trim()){o.snsErr="\uC774\uB984/\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD558\uC138\uC694.";return}if(!o.snsPhoneVerified){o.snsErr="\uD734\uB300\uD3F0 \uC778\uC99D\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.";return}const e={google:"google.sns@gmail.com",kakao:"kakao.sns@kakao.com",naver:"naver.sns@naver.com"},t=await window.foAuth.signup(o.snsNickname,e[o.snsProvider]||"sns@demo.com",o.snsPhone,{provider:o.snsProvider,postcode:m.postcode,address:m.address,addressDetail:m.addressDetail,birthdate:m.birthdate,gender:m.gender});t.ok?(l.showToast(o.snsNickname+"\uB2D8, \uD658\uC601\uD569\uB2C8\uB2E4!","success"),x("close")):o.snsErr=t.msg||"\uD68C\uC6D0\uAC00\uC785 \uC2E4\uD328"};return{columns:k,uiState:o,addrSearchModal:g,siteOptions:p,handleBtnAction:E,handleSelectAction:y,fnCallbackModal:O,form:u,sf:r,snsSf:m,snsPhone:S,terms:s,IS:"width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.9rem;outline:none;",providerLabel:K,providerColor:J,providerTextColor:U,foAuth:window.foAuth,memberPick:n}},template:`
<fo-page bare>
<div class="modal-overlay" @click.self="handleBtnAction('page-close')" style="z-index:200;">
  <!-- ===== \u25A0. \uB85C\uADF8\uC778 \uD654\uBA74 ================================================== -->
  <div class="modal-box" style="max-width:460px;width:92%;padding:clamp(16px,4vw,32px) clamp(14px,3vw,28px);position:relative;max-height:92vh;overflow-y:auto;">
    <button @click="handleBtnAction('page-close')" style="position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--text-muted);">
      \u2715
    </button>
    <!-- ===== \u25A0.\u25A0. \u2550\u2550\u2550\u2550 \uB85C\uADF8\uC778 \u2550\u2550\u2550\u2550 ========================================= -->
    <template v-if="uiState.step==='login'">
      <div style="text-align:center;margin-bottom:24px;">
        <div style="font-size:2rem;">
          \u{1F457}
        </div>
        <div style="font-size:1.3rem;font-weight:800;color:var(--text-primary);margin-top:6px;">
          \uB85C\uADF8\uC778
        </div>
        <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;">
          \uAE30\uBCF8 \uACC4\uC815: user1@demo.com / demo1234
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <select v-if="siteOptions.list.length > 0" v-model="siteOptions.selected" :style="IS">
          <option value="" disabled>\uC0AC\uC774\uD2B8 \uC120\uD0DD</option>
          <option v-for="s in siteOptions.list" :key="s.siteId" :value="s.siteId">
            {{ s.siteNm }}
          </option>
        </select>
        <input v-model="form.email" type="email" placeholder="\uC774\uBA54\uC77C" @keyup.enter="handleBtnAction('form-login')" :style="IS">
        <input v-model="form.password" type="password" placeholder="\uBE44\uBC00\uBC88\uD638" @keyup.enter="handleBtnAction('form-login')" :style="IS">
        <div v-if="uiState.loginErr" style="color:#e8587a;font-size:0.82rem;text-align:center;">
          {{ uiState.loginErr }}
        </div>
        <button @click="handleBtnAction('form-login')" :disabled="foAuth.state.loading" class="btn-blue" style="width:100%;padding:12px;">
          {{ foAuth.state.loading ? '\uB85C\uADF8\uC778 \uC911...' : '\uB85C\uADF8\uC778' }}
        </button>
      </div>
      <div style="display:flex;align-items:center;gap:10px;margin:20px 0;color:var(--text-muted);font-size:0.8rem;">
        <div style="flex:1;height:1px;background:var(--border);">
        </div>
        \uC18C\uC15C \uB85C\uADF8\uC778
        <div style="flex:1;height:1px;background:var(--border);">
        </div>
      </div>
      <!-- 2026-09-06(\uC694\uCCAD\uC0AC\uD56D: "3\uD589\uC744 1\uD589 3\uC5F4\uB85C \uBC30\uCE58") \u2014 \uC138\uB85C 3\uD589\uC774 \uBAA8\uB2EC \uB192\uC774\uB97C \uBC00\uC5B4 \uD558\uB2E8\uC774
           \uAC00\uB824\uC9C0\uB358 \uBB38\uC81C\uB77C 1\uD589 3\uC5F4 \uADF8\uB9AC\uB4DC\uB85C \uC555\uCD95. \uC5F4 \uD3ED\uC774 \uC881\uC544\uC838 \uB77C\uBCA8\uC744 "OO\uB85C \uB85C\uADF8\uC778"\u2192"OO"\uB85C
           \uC904\uC774\uACE0(\uC704 "\uC18C\uC15C \uB85C\uADF8\uC778" \uAD6C\uBD84\uC120\uC774 \uC774\uBBF8 \uBB38\uB9E5\uC744 \uC54C\uB824\uC90C), \uC544\uC774\uCF58+\uB77C\uBCA8\uC744 \uC138\uB85C \uBC30\uCE58. -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        <button @click="handleBtnAction('form-socialLogin', 'google')"
          style="padding:10px 4px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:0.78rem;color:var(--text-primary);font-weight:600;">
          <span style="font-size:1.1rem;">
            \u{1F310}
          </span>
          Google
        </button>
        <button @click="handleBtnAction('form-socialLogin', 'kakao')"
          style="padding:10px 4px;border:none;border-radius:8px;background:#FEE500;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:0.78rem;color:#3C1E1E;font-weight:700;">
          <span style="font-size:1.1rem;">
            \u{1F4AC}
          </span>
          \uCE74\uCE74\uC624
        </button>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC84\uD2BC \uC601\uC5ED ============================================= -->
        <button @click="handleBtnAction('form-socialLogin', 'naver')"
          style="padding:10px 4px;border:none;border-radius:8px;background:#03C75A;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:0.78rem;color:#fff;font-weight:700;">
          <span style="font-size:1.1rem;font-weight:900;">
            N
          </span>
          \uB124\uC774\uBC84
        </button>
      </div>
      <div style="text-align:center;margin-top:22px;">
        <span style="font-size:0.85rem;color:var(--text-muted);">
          \uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?
        </span>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px;">
        <button @click="handleBtnAction('tab-step', 'terms')" class="btn-outline" style="width:100%;padding:10px;font-size:0.85rem;font-weight:700;">
          \u{1F4E7} \uC774\uBA54\uC77C\uB85C \uD68C\uC6D0\uAC00\uC785
        </button>
        <div style="display:flex;gap:8px;">
          <button @click="handleBtnAction('form-startSnsSignup', 'google')"
            style="flex:1;padding:9px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);cursor:pointer;font-size:0.8rem;font-weight:600;color:var(--text-secondary);">
            \u{1F310} Google
          </button>
          <button @click="handleBtnAction('form-startSnsSignup', 'kakao')"
            style="flex:1;padding:9px;border:none;border-radius:8px;background:#FEE500;cursor:pointer;font-size:0.8rem;font-weight:700;color:#3C1E1E;">
            \u{1F4AC} \uCE74\uCE74\uC624
          </button>
          <button @click="handleBtnAction('form-startSnsSignup', 'naver')"
            style="flex:1;padding:9px;border:none;border-radius:8px;background:#03C75A;cursor:pointer;font-size:0.8rem;font-weight:700;color:#fff;">
            N \uB124\uC774\uBC84
          </button>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD68C\uC6D0\uC120\uD0DD \uBC14\uB85C \uB85C\uADF8\uC778 (\uAC1C\uBC1C\uC6A9) =================================== -->
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================== -->
      <div style="text-align:center;margin-top:18px;">
        <button @click="handleBtnAction('memberPickModal-open')"
          style="background:none;border:none;cursor:pointer;font-size:0.72rem;color:var(--text-muted);text-decoration:underline;padding:0;">
          \uD68C\uC6D0 \uC120\uD0DD\uD558\uC5EC \uB85C\uADF8\uC778 (\uAC1C\uBC1C)
        </button>
      </div>
    </template>
    <!-- ===== \u25A1.\u25A1. \u2550\u2550\u2550\u2550 \uB85C\uADF8\uC778 \u2550\u2550\u2550\u2550 ========================================= -->
    <!-- ===== \u25A0.\u25A0. \u2550\u2550\u2550\u2550 \uD68C\uC6D0\uC120\uD0DD \uBAA8\uB2EC \u2550\u2550\u2550\u2550 ===================================== -->
    <div v-if="memberPick.show" class="modal-overlay" @click.self="handleBtnAction('memberPickModal-close')" style="z-index:300;">
      <div style="background:#fff;border-radius:16px;overflow:hidden;max-width:820px;width:96%;display:flex;flex-direction:column;max-height:90vh;box-shadow:0 20px 60px rgba(0,0,0,.18);">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD5E4\uB354 ================================================ -->
        <div style="background:linear-gradient(135deg,#fff0f4,#ffe4ec,#ffd5e1);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ffc8d6;flex-shrink:0;">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-size:18px;">
              \u{1F465}
            </span>
            <div>
              <div style="font-size:14px;font-weight:800;color:#1a1a2e;">
                \uD68C\uC6D0 \uC120\uD0DD
              </div>
              <div style="font-size:10px;color:#e8587a;margin-top:1px;">
                \uC120\uD0DD \uC2DC \uB9C8\uC2A4\uD130 \uD328\uC2A4\uC6CC\uB4DC(1111)\uB85C \uC790\uB3D9 \uB85C\uADF8\uC778
              </div>
            </div>
          </div>
          <button @click="handleBtnAction('memberPickModal-close')" style="background:none;border:none;cursor:pointer;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;color:#e8587a;" onmouseover="this.style.background='#ffd5e1'" onmouseout="this.style.background='none'">
            \u2715
          </button>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBCF8\uBB38 (\uC2A4\uD06C\uB864) ========================================== -->
        <div style="padding:14px 18px;overflow-y:auto;flex:1;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAC80\uC0C9\uBC14 ============================================= -->
          <div style="display:flex;gap:6px;margin-bottom:10px;">
            <div style="position:relative;flex:1;">
              <span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#ccc;font-size:13px;">
                \u{1F50D}
              </span>
              <bo-multi-check-select
                v-model="memberPick.searchType"
                :options="[
                { value: 'memberNm',    label: '\uC774\uB984' },
                { value: 'loginId',     label: '\uB85C\uADF8\uC778ID' },
                { value: 'memberPhone', label: '\uC5F0\uB77D\uCC98' },
                ]"
                placeholder="\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4"
                all-label="\uC804\uCCB4 \uC120\uD0DD"
                min-width="140px" />
              <input v-model="memberPick.searchValue" type="text" placeholder="\uAC80\uC0C9\uC5B4 \uC785\uB825..."
                @keyup.enter="handleBtnAction('memberPickModal-search')"
                style="width:100%;padding:7px 10px 7px 32px;border:1.5px solid #f0c8d8;border-radius:8px;font-size:12px;outline:none;box-sizing:border-box;">
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC84\uD2BC \uC601\uC5ED ========================================= -->
            <button @click="handleBtnAction('memberPickModal-search')"
              style="padding:0 16px;border:none;border-radius:8px;background:linear-gradient(135deg,#f9a8c9,#e8587a);color:#fff;cursor:pointer;font-size:12px;font-weight:700;">
              \uC870\uD68C
            </button>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAC74\uC218 ============================================== -->
          <div style="font-size:11px;color:#aaa;margin-bottom:8px;text-align:left;">
            \uCD1D
            <b style="color:#e8587a;">
              {{ memberPick.total }}
            </b>
            \uBA85
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 ============================================= -->
          <div style="border-radius:8px;border:1px solid #f0e0e8;overflow:hidden;">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ========================================= -->
            <fo-grid bare show-row-no :columns="columns.memberPickGrid" :rows="memberPick.rows" :pager="memberPick"
              row-key="memberId"
              :empty-text="memberPick.loading ? '\u23F3 \uC870\uD68C \uC911...' : '\u{1F50D} \uC870\uD68C \uACB0\uACFC \uC5C6\uC74C'"
              :row-click="(row) => handleSelectAction('members-rowPick', row)" />
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD398\uC774\uC9C0\uB124\uC774\uC158 (\uACE0\uC815) ======================================= -->
        <div v-if="memberPick.totalPage > 1" style="display:flex;justify-content:center;align-items:center;gap:4px;padding:10px 18px;border-top:1px solid #f5eef2;flex-shrink:0;flex-wrap:wrap;">
          <button @click="handleBtnAction('memberPickModal-page', 1)" :disabled="memberPick.pageNo===1"
            style="border:1px solid #f0c0d0;background:#fff;color:#e8587a;border-radius:6px;padding:3px 8px;font-size:11px;cursor:pointer;" :style="memberPick.pageNo===1?'opacity:.35;cursor:default;':''">
            \xAB
          </button>
          <button @click="handleBtnAction('memberPickModal-page', memberPick.pageNo-1)" :disabled="memberPick.pageNo===1"
            style="border:1px solid #f0c0d0;background:#fff;color:#e8587a;border-radius:6px;padding:3px 8px;font-size:11px;cursor:pointer;" :style="memberPick.pageNo===1?'opacity:.35;cursor:default;':''">
            \u2039
          </button>
          <template v-for="p in memberPick.totalPage" :key="p">
            <button v-if="Math.abs(p-memberPick.pageNo)<=2||p===1||p===memberPick.totalPage"
              @click="handleBtnAction('memberPickModal-page', p)"
              :style="memberPick.pageNo===p
              ? 'background:linear-gradient(135deg,#f9a8c9,#e8587a);color:#fff;border:none;font-weight:700;'
              : 'background:#fff;color:#888;border:1px solid #eee;'"
              style="min-width:28px;height:28px;border-radius:6px;font-size:11px;cursor:pointer;">
              {{ p }}
            </button>
          </template>
          <button @click="handleBtnAction('memberPickModal-page', memberPick.pageNo+1)" :disabled="memberPick.pageNo===memberPick.totalPage"
            style="border:1px solid #f0c0d0;background:#fff;color:#e8587a;border-radius:6px;padding:3px 8px;font-size:11px;cursor:pointer;" :style="memberPick.pageNo===memberPick.totalPage?'opacity:.35;cursor:default;':''">
            \u203A
          </button>
          <button @click="handleBtnAction('memberPickModal-page', memberPick.totalPage)" :disabled="memberPick.pageNo===memberPick.totalPage"
            style="border:1px solid #f0c0d0;background:#fff;color:#e8587a;border-radius:6px;padding:3px 8px;font-size:11px;cursor:pointer;" :style="memberPick.pageNo===memberPick.totalPage?'opacity:.35;cursor:default;':''">
            \xBB
          </button>
        </div>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \u2550\u2550\u2550\u2550 \uD68C\uC6D0\uC120\uD0DD \uBAA8\uB2EC \u2550\u2550\u2550\u2550 ===================================== -->
    <!-- ===== \u25A0.\u25A0. \u2550\u2550\u2550\u2550 \uC57D\uAD00 \u2550\u2550\u2550\u2550 ========================================== -->
    <template v-else-if="uiState.step==='terms'">
      <div style="text-align:center;margin-bottom:20px;">
        <div v-if="uiState.snsProvider" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:20px;margin-bottom:10px;"
          :style="'background:'+providerColor(uiState.snsProvider)+';color:'+providerTextColor(uiState.snsProvider)+';font-size:0.82rem;font-weight:700;'">
          {{ providerLabel(uiState.snsProvider) }}\uB85C \uAC00\uC785
        </div>
        <div style="font-size:1.3rem;font-weight:800;color:var(--text-primary);">
          \uC774\uC6A9\uC57D\uAD00 \uB3D9\uC758
        </div>
        <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;">
          \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574 \uC8FC\uC138\uC694
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:0;">
        <label style="display:flex;align-items:center;gap:10px;padding:14px;background:var(--blue-dim);border-radius:8px;cursor:pointer;margin-bottom:10px;">
          <input type="checkbox" v-model="terms.all" @change="handleBtnAction('form-toggleAllTerms')" style="width:16px;height:16px;accent-color:var(--blue);">
          <span style="font-weight:700;color:var(--text-primary);">
            \uC804\uCCB4 \uB3D9\uC758
          </span>
        </label>
        <label v-for="(t,i) in [
          {key:'t1',req:true, text:'\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00'},
          {key:'t2',req:true, text:'\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9 \uB3D9\uC758'},
          {key:'t3',req:true, text:'\uB9CC 14\uC138 \uC774\uC0C1 \uD655\uC778'},
          {key:'t4',req:false,text:'\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758 (\uC120\uD0DD)'},
          ]" :key="i" style="display:flex;align-items:center;gap:10px;padding:12px 4px;border-bottom:1px solid var(--border);cursor:pointer;">
          <input type="checkbox" v-model="terms[t.key]" style="width:15px;height:15px;accent-color:var(--blue);">
          <span style="font-size:0.88rem;color:var(--text-secondary);">
            <span v-if="t.req" style="color:var(--blue);font-weight:700;">
              [\uD544\uC218]
            </span>
            <span v-else style="color:var(--text-muted);">
              [\uC120\uD0DD]
            </span>
            {{ t.text }}
          </span>
        </label>
      </div>
      <div style="display:flex;gap:10px;margin-top:24px;">
        <button @click="handleBtnAction('tab-step', 'login')" class="btn-outline" style="flex:1;padding:12px;">
          \uC774\uC804
        </button>
        <button @click="handleBtnAction('tab-nextFromTerms')" :disabled="!([terms.t1,terms.t2,terms.t3].every(Boolean))" class="btn-blue" style="flex:2;padding:12px;" :style="!([terms.t1,terms.t2,terms.t3].every(Boolean))?'opacity:0.5;cursor:not-allowed;':''">
        \uB2E4\uC74C
      </button>
    </div>
  </template>
  <!-- ===== \u25A1.\u25A1. \u2550\u2550\u2550\u2550 \uC57D\uAD00 \u2550\u2550\u2550\u2550 ========================================== -->
  <!-- ===== \u25A0.\u25A0. \u2550\u2550\u2550\u2550 \uC774\uBA54\uC77C \uD68C\uC6D0\uAC00\uC785 \u2550\u2550\u2550\u2550 ==================================== -->
  <template v-else-if="uiState.step==='signup'">
    <div style="text-align:center;margin-bottom:16px;">
      <div style="font-size:1.3rem;font-weight:800;color:var(--text-primary);">
        \uD68C\uC6D0\uAC00\uC785
      </div>
      <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;">
        \uC815\uBCF4\uB97C \uC785\uB825\uD558\uACE0 \uC778\uC99D\uC744 \uC644\uB8CC\uD574 \uC8FC\uC138\uC694
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uD544\uC218 ================================================== -->
    <div style="font-size:0.78rem;font-weight:700;color:var(--blue);margin-bottom:8px;padding:6px 10px;background:var(--blue-dim);border-radius:6px;">
      \uD544\uC218 \uC815\uBCF4
    </div>
    <div style="display:flex;flex-direction:column;gap:11px;margin-bottom:16px;">
      <input v-model="sf.memberNm" type="text" placeholder="\uC774\uB984 *" :style="IS">
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC774\uBA54\uC77C \uC778\uC99D ============================================ -->
      <div>
        <div style="display:flex;gap:8px;">
          <input v-model="sf.email" type="email" placeholder="\uC774\uBA54\uC77C *" :disabled="sf.emailVerified"
              style="flex:1;padding:11px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.9rem;outline:none;">
          <button @click="handleBtnAction('form-sendEmailCode')" :disabled="sf.emailVerified"
              style="padding:11px 14px;border:1.5px solid var(--blue);border-radius:8px;background:transparent;color:var(--blue);cursor:pointer;font-size:0.82rem;font-weight:600;white-space:nowrap;"
              :style="sf.emailVerified?'opacity:0.4;cursor:not-allowed;':''">
            {{ sf.emailVerified ? '\u2713 \uC778\uC99D\uB428' : '\uCF54\uB4DC \uBC1C\uC1A1' }}
          </button>
        </div>
        <div v-if="sf.emailSent ? !sf.emailVerified : false" style="display:flex;gap:8px;margin-top:8px;">
        <input v-model="sf.emailCode" type="text" placeholder="\uC778\uC99D\uCF54\uB4DC 6\uC790\uB9AC"
              style="flex:1;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.9rem;outline:none;">
        <button @click="handleBtnAction('form-verifyEmail')" style="padding:10px 14px;border:none;border-radius:8px;background:var(--blue);color:#fff;cursor:pointer;font-size:0.82rem;font-weight:600;">
          \uD655\uC778
        </button>
      </div>
      <div v-if="sf.emailVerified" style="font-size:0.8rem;color:#22c55e;margin-top:4px;">
        \u2713 \uC774\uBA54\uC77C \uC778\uC99D \uC644\uB8CC
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD734\uB300\uD3F0 \uC778\uC99D ============================================ -->
    <div>
      <div style="display:flex;gap:8px;">
        <input v-model="sf.phone" type="tel" placeholder="\uD734\uB300\uD3F0 \uBC88\uD638 (010-0000-0000) *" :disabled="sf.phoneVerified"
              style="flex:1;padding:11px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.9rem;outline:none;">
        <button @click="handleBtnAction('form-sendPhoneCode')" :disabled="sf.phoneVerified"
              style="padding:11px 14px;border:1.5px solid var(--blue);border-radius:8px;background:transparent;color:var(--blue);cursor:pointer;font-size:0.82rem;font-weight:600;white-space:nowrap;"
              :style="sf.phoneVerified?'opacity:0.4;cursor:not-allowed;':''">
          {{ sf.phoneVerified ? '\u2713 \uC778\uC99D\uB428' : '\uCF54\uB4DC \uBC1C\uC1A1' }}
        </button>
      </div>
      <div v-if="sf.phoneSent ? !sf.phoneVerified : false" style="display:flex;gap:8px;margin-top:8px;">
      <input v-model="sf.phoneCode" type="text" placeholder="\uC778\uC99D\uCF54\uB4DC 6\uC790\uB9AC"
              style="flex:1;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.9rem;outline:none;">
      <button @click="handleBtnAction('form-verifyPhone')" style="padding:10px 14px;border:none;border-radius:8px;background:var(--blue);color:#fff;cursor:pointer;font-size:0.82rem;font-weight:600;">
        \uD655\uC778
      </button>
    </div>
    <div v-if="sf.phoneVerified" style="font-size:0.8rem;color:#22c55e;margin-top:4px;">
      \u2713 \uD734\uB300\uD3F0 \uC778\uC99D \uC644\uB8CC
    </div>
  </div>
  <input v-model="sf.password"  type="password" placeholder="\uBE44\uBC00\uBC88\uD638 (6\uC790 \uC774\uC0C1) *" :style="IS">
  <input v-model="sf.password2" type="password" placeholder="\uBE44\uBC00\uBC88\uD638 \uD655\uC778 *" :style="IS">
</div>
<!-- ===== \u25A0.\u25A0.\u25A0. \uC120\uD0DD ================================================== -->
<div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:8px;padding:6px 10px;background:var(--bg-base);border-radius:6px;">
  \uC120\uD0DD \uC815\uBCF4 (\uC785\uB825\uD558\uBA74 \uC8FC\uBB38 \uC2DC \uC790\uB3D9 \uC644\uC131)
</div>
<div style="display:flex;flex-direction:column;gap:11px;margin-bottom:16px;">
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC8FC\uC18C ================================================ -->
  <div>
    <div style="display:flex;gap:8px;margin-bottom:6px;">
      <input v-model="sf.postcode" placeholder="\uC6B0\uD3B8\uBC88\uD638" readonly
              style="width:100px;flex-shrink:0;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.88rem;cursor:default;outline:none;">
      <button @click="handleBtnAction('form-openAddr')" type="button"
              style="padding:0 14px;border:1.5px solid var(--blue);border-radius:8px;background:var(--blue-dim);color:var(--blue);font-size:0.82rem;font-weight:700;cursor:pointer;white-space:nowrap;">
        \u{1F4EE} \uC8FC\uC18C \uAC80\uC0C9
      </button>
    </div>
    <input v-model="sf.address" placeholder="\uB3C4\uB85C\uBA85 \uC8FC\uC18C" readonly
            style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.88rem;cursor:default;outline:none;margin-bottom:6px;">
    <input v-model="sf.addressDetail" placeholder="\uC0C1\uC138 \uC8FC\uC18C (\uB3D9/\uD638\uC218 \uB4F1)" :style="IS.replace('0.9rem','0.88rem')">
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0DD\uB144\uC6D4\uC77C + \uC131\uBCC4 ========================================= -->
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;">
    <div>
      <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">
        \uC0DD\uB144\uC6D4\uC77C
      </div>
      <input v-model="sf.birthdate" type="date"
              style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.85rem;outline:none;">
    </div>
    <div>
      <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">
        \uC131\uBCC4
      </div>
      <div style="display:flex;gap:6px;">
        <button v-for="g in [{v:'M',l:'\uB0A8\uC131'},{v:'F',l:'\uC5EC\uC131'},{v:'',l:'\uC120\uD0DD\uC548\uD568'}]" :key="g.v"
                @click="handleBtnAction('form-selectGender', { type:'email', value: g.v })" type="button"
                style="flex:1;padding:9px 4px;border-radius:8px;font-size:0.78rem;font-weight:600;cursor:pointer;transition:all 0.15s;"
                :style="sf.gender===g.v ? 'background:var(--blue);color:#fff;border:1.5px solid var(--blue);' : 'background:var(--bg-card);color:var(--text-secondary);border:1.5px solid var(--border);'">
          {{ g.l }}
        </button>
      </div>
    </div>
  </div>
</div>
<div v-if="uiState.signupErr" style="color:#e8587a;font-size:0.82rem;text-align:center;margin-bottom:10px;">
  {{ uiState.signupErr }}
</div>
<div style="display:flex;gap:10px;">
  <button @click="handleBtnAction('tab-backToTerms')" class="btn-outline" style="flex:1;padding:12px;">
    \uC774\uC804
  </button>
  <button @click="handleBtnAction('form-signup')" class="btn-blue" style="flex:2;padding:12px;">
    \uAC00\uC785 \uC644\uB8CC
  </button>
</div>
</template>
<!-- ===== \u25A1.\u25A1. \u2550\u2550\u2550\u2550 \uC774\uBA54\uC77C \uD68C\uC6D0\uAC00\uC785 \u2550\u2550\u2550\u2550 ==================================== -->
<!-- ===== \u25A0.\u25A0. \u2550\u2550\u2550\u2550 SNS \uD68C\uC6D0\uAC00\uC785 \uCD94\uAC00 \uC815\uBCF4 \u2550\u2550\u2550\u2550 ============================== -->
<template v-else-if="uiState.step==='sns-signup'">
  <div style="text-align:center;margin-bottom:16px;">
    <div style="display:inline-flex;align-items:center;gap:6px;padding:6px 16px;border-radius:20px;margin-bottom:10px;"
          :style="'background:'+providerColor(uiState.snsProvider)+';color:'+providerTextColor(uiState.snsProvider)+';font-size:0.85rem;font-weight:700;'">
      {{ providerLabel(uiState.snsProvider) }}\uB85C \uAC00\uC785
    </div>
    <div style="font-size:1.2rem;font-weight:800;color:var(--text-primary);">
      \uCD94\uAC00 \uC815\uBCF4 \uC785\uB825
    </div>
    <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;">
      \uAC00\uC785 \uC644\uB8CC\uB97C \uC704\uD574 \uCD94\uAC00 \uC815\uBCF4\uB97C \uC785\uB825\uD558\uC138\uC694
    </div>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0. \uD544\uC218 ================================================== -->
  <div style="font-size:0.78rem;font-weight:700;color:var(--blue);margin-bottom:8px;padding:6px 10px;background:var(--blue-dim);border-radius:6px;">
    \uD544\uC218 \uC815\uBCF4
  </div>
  <div style="display:flex;flex-direction:column;gap:11px;margin-bottom:16px;">
    <input v-model="uiState.snsNickname" type="text" placeholder="\uC774\uB984 / \uB2C9\uB124\uC784 *" :style="IS">
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD734\uB300\uD3F0 \uC778\uC99D ============================================ -->
    <div>
      <div style="display:flex;gap:8px;">
        <input v-model="snsPhone" type="tel" placeholder="\uD734\uB300\uD3F0 \uBC88\uD638 (010-0000-0000) *" :disabled="uiState.snsPhoneVerified"
              style="flex:1;padding:11px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.9rem;outline:none;">
        <button @click="handleBtnAction('form-sendSnsPhoneCode')" :disabled="uiState.snsPhoneVerified"
              style="padding:11px 14px;border:1.5px solid var(--blue);border-radius:8px;background:transparent;color:var(--blue);cursor:pointer;font-size:0.82rem;font-weight:600;white-space:nowrap;"
              :style="uiState.snsPhoneVerified?'opacity:0.4;cursor:not-allowed;':''">
          {{ uiState.snsPhoneVerified ? '\u2713 \uC778\uC99D\uB428' : '\uCF54\uB4DC \uBC1C\uC1A1' }}
        </button>
      </div>
      <div v-if="uiState.snsPhoneCodeSent ? !uiState.snsPhoneVerified : false" style="display:flex;gap:8px;margin-top:8px;">
      <input v-model="uiState.snsPhoneCode" type="text" placeholder="\uC778\uC99D\uCF54\uB4DC 6\uC790\uB9AC"
              style="flex:1;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.9rem;outline:none;">
      <button @click="handleBtnAction('form-verifySnsPhone')" style="padding:10px 14px;border:none;border-radius:8px;background:var(--blue);color:#fff;cursor:pointer;font-size:0.82rem;font-weight:600;">
        \uD655\uC778
      </button>
    </div>
    <div v-if="uiState.snsPhoneVerified" style="font-size:0.8rem;color:#22c55e;margin-top:4px;">
      \u2713 \uD734\uB300\uD3F0 \uC778\uC99D \uC644\uB8CC
    </div>
  </div>
</div>
<!-- ===== \u25A0.\u25A0.\u25A0. \uC120\uD0DD ================================================== -->
<div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);margin-bottom:8px;padding:6px 10px;background:var(--bg-base);border-radius:6px;">
  \uC120\uD0DD \uC815\uBCF4
</div>
<div style="display:flex;flex-direction:column;gap:11px;margin-bottom:16px;">
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC8FC\uC18C ================================================ -->
  <div>
    <div style="display:flex;gap:8px;margin-bottom:6px;">
      <input v-model="snsSf.postcode" placeholder="\uC6B0\uD3B8\uBC88\uD638" readonly
              style="width:100px;flex-shrink:0;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.88rem;cursor:default;outline:none;">
      <button @click="handleBtnAction('form-openAddrSns')" type="button"
              style="padding:0 14px;border:1.5px solid var(--blue);border-radius:8px;background:var(--blue-dim);color:var(--blue);font-size:0.82rem;font-weight:700;cursor:pointer;white-space:nowrap;">
        \u{1F4EE} \uC8FC\uC18C \uAC80\uC0C9
      </button>
    </div>
    <input v-model="snsSf.address" placeholder="\uB3C4\uB85C\uBA85 \uC8FC\uC18C" readonly
            style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-base);color:var(--text-primary);font-size:0.88rem;cursor:default;outline:none;margin-bottom:6px;">
    <input v-model="snsSf.addressDetail" placeholder="\uC0C1\uC138 \uC8FC\uC18C (\uB3D9/\uD638\uC218 \uB4F1)" :style="IS.replace('0.9rem','0.88rem')">
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0DD\uB144\uC6D4\uC77C + \uC131\uBCC4 ========================================= -->
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;">
    <div>
      <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">
        \uC0DD\uB144\uC6D4\uC77C
      </div>
      <input v-model="snsSf.birthdate" type="date"
              style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:0.85rem;outline:none;">
    </div>
    <div>
      <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">
        \uC131\uBCC4
      </div>
      <div style="display:flex;gap:6px;">
        <button v-for="g in [{v:'M',l:'\uB0A8\uC131'},{v:'F',l:'\uC5EC\uC131'},{v:'',l:'\uC120\uD0DD\uC548\uD568'}]" :key="g.v"
                @click="handleBtnAction('form-selectGender', { type:'sns', value: g.v })" type="button"
                style="flex:1;padding:9px 4px;border-radius:8px;font-size:0.78rem;font-weight:600;cursor:pointer;transition:all 0.15s;"
                :style="snsSf.gender===g.v ? 'background:var(--blue);color:#fff;border:1.5px solid var(--blue);' : 'background:var(--bg-card);color:var(--text-secondary);border:1.5px solid var(--border);'">
          {{ g.l }}
        </button>
      </div>
    </div>
  </div>
</div>
<div v-if="uiState.snsErr" style="color:#e8587a;font-size:0.82rem;text-align:center;margin-bottom:10px;">
  {{ uiState.snsErr }}
</div>
<div style="display:flex;gap:10px;">
  <button @click="handleBtnAction('tab-backToTerms')" class="btn-outline" style="flex:1;padding:12px;">
    \uC774\uC804
  </button>
  <button @click="handleBtnAction('form-snsSignup')" class="btn-blue" style="flex:2;padding:12px;">
    \uAC00\uC785 \uC644\uB8CC
  </button>
</div>
</template>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \u2550\u2550\u2550\u2550 SNS \uD68C\uC6D0\uAC00\uC785 \uCD94\uAC00 \uC815\uBCF4 \u2550\u2550\u2550\u2550 ============================== -->
<!-- ===== \u25A1. \uB85C\uADF8\uC778 \uD654\uBA74 ================================================== -->
<!-- ===== \u25A0. \uC8FC\uC18C \uAC80\uC0C9 \uBAA8\uB2EC (\uCE74\uCE74\uC624 \uC6B0\uD3B8\uBC88\uD638, \uC778\uB77C\uC778 \uB808\uC774\uC5B4) ============================ -->
<fo-addr-search-modal v-if="addrSearchModal.show" modal-name="addr-search" :on-callback="fnCallbackModal" />
</fo-page>
`};
