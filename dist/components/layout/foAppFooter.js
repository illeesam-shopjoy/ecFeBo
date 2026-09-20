window.foAppFooter={name:"FoAppFooter",props:["config","navigate","hideFooter"],emits:[],setup(){const{ref:m,reactive:f,onUnmounted:v}=Vue,s=f({menuOpen:!1,loading:!1,error:""}),w=f({}),e=f({open:!1,roomId:null,msgs:[],inputText:"",sending:!1,loading:!1,unread:0,status:null,needAuth:!1,tooltipId:null});let l=null;const x=m(null),h=()=>{try{return window.sfGetFoAuthUser?window.sfGetFoAuthUser():null}catch{return null}},S=()=>{var t;try{const o=window.sfGetFoAuthStore?window.sfGetFoAuthStore():null;return o?!!o.sgIsLoggedIn:!!((t=h())!=null&&t.authId)}catch{return!1}},k=()=>{const t=h(),o=[];return o.push({id:"_admin",type:"ADMIN",icon:"\u{1F481}",name:"\uC0C1\uB2F4\uC0AC",email:"cs@shopjoy.com",userType:"\uC0C1\uB2F4 \uC9C1\uC6D0",dept:"\uACE0\uAC1D\uC13C\uD130",phone:""}),t&&t.authId&&o.push({id:t.memberId||t.authId,type:"MEMBER",icon:"\u{1F464}",name:t.memberNm||t.authNm||"\uD68C\uC6D0",email:t.email||t.loginId||"",userType:"\uD68C\uC6D0",dept:t.orgNm||"",phone:t.phone||t.mobile||""}),o},I=(t,o={})=>{if(t==="linksModal-toggle")return _();if(t==="linksModal-close")return N();if(t==="chat-toggle")return B();if(t==="chat-close")return M();if(t==="chat-send")return u();if(t==="chat-end")return A();if(t==="chat-goLogin"){e.open=!1,typeof window.navigate=="function"?window.navigate("login"):window.location.href=window.location.pathname+"?page=login";return}else if(t==="chat-tooltip"){e.tooltipId=e.tooltipId===o?null:o;return}else if(t==="chat-tooltip-hide"){e.tooltipId=null;return}else console.warn("[handleBtnAction] unknown cmd:",t)},O=(t,o={})=>{if(t==="linksModal-go-item")return T(o.root,o.target);console.warn("[handleSelectAction] unknown cmd:",t)},_=()=>{s.menuOpen=!s.menuOpen},N=()=>{s.menuOpen=!1},d=()=>{Vue.nextTick(()=>{const o=document.getElementById("fo-chat-msgbox");o&&(o.scrollTop=o.scrollHeight)})},z=()=>{l||(l=setInterval(async()=>{var t;if(!(!e.roomId||e.roomId==="_local"||!e.open))try{const o=e.msgs.length>0?e.msgs[e.msgs.length-1].chattMsgId:null,a=((t=(await foApiSvc.myChat.getMessages(e.roomId,{afterMsgId:o},"\uCC44\uD305\uC0C1\uB2F4","\uD3F4\uB9C1")).data)==null?void 0:t.data)||[];a.length>0&&(e.msgs.push(...a),d())}catch(o){console.warn("[chatPoll]",o.message)}},3e3))},p=()=>{l&&(clearInterval(l),l=null)},E=async()=>{var t,o,n;e.loading=!0;try{const g=(((t=(await foApiSvc.myChat.getList({activeOnly:"Y"},"\uCC44\uD305\uC0C1\uB2F4","\uBC29\uC870\uD68C")).data)==null?void 0:t.data)||[]).find(r=>r.chattStatusCd==="PENDING"||r.chattStatusCd==="OPEN");if(g){e.roomId=g.chattRoomId,e.status=g.chattStatusCd;const r=await foApiSvc.myChat.getMessages(e.roomId,{},"\uCC44\uD305\uC0C1\uB2F4","\uBA54\uC2DC\uC9C0\uC870\uD68C");e.msgs=((o=r.data)==null?void 0:o.data)||[]}else{const y=(n=(await foApiSvc.myChat.createRoom({subject:"\uCC44\uD305 \uC0C1\uB2F4 \uBB38\uC758"},"\uCC44\uD305\uC0C1\uB2F4","\uBC29\uC0DD\uC131")).data)==null?void 0:n.data;y&&(e.roomId=y.chattRoomId,e.status="PENDING",e.msgs=[],e.msgs.push({chattMsgId:"_welcome",senderCd:"SYSTEM",msgText:"\uC548\uB155\uD558\uC138\uC694! \uCC44\uD305 \uC0C1\uB2F4\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4. \uB2F4\uB2F9\uC790\uAC00 \uACE7 \uC5F0\uACB0\uB429\uB2C8\uB2E4.",sendDate:new Date().toISOString()}))}}catch(a){console.warn("[fnLoadOrCreateRoom]",a.message),e.roomId="_local",e.status="PENDING",e.msgs=[{chattMsgId:"_welcome",senderCd:"SYSTEM",msgText:"\uCC44\uD305 \uC0C1\uB2F4\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4. \uB85C\uADF8\uC778 \uD6C4 \uC0C1\uB2F4\uC744 \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",sendDate:new Date().toISOString()}]}finally{e.loading=!1,d()}},B=async()=>{if(e.open=!e.open,e.unread=0,e.needAuth=!1,e.open){if(!S()){e.needAuth=!0;return}e.roomId||await E(),e.roomId&&e.roomId!=="_local"&&z(),Vue.nextTick(()=>{x.value&&x.value.focus()})}else p()},M=()=>{e.open=!1,p()},u=async()=>{const t=e.inputText.trim();if(!t||e.sending)return;e.sending=!0;const o={chattMsgId:"_tmp_"+Date.now(),senderCd:"MEMBER",msgText:t,sendDate:new Date().toISOString(),_pending:!0};e.msgs.push(o),e.inputText="",d();try{e.roomId&&e.roomId!=="_local"&&(await foApiSvc.myChat.sendMsg(e.roomId,{msgText:t},"\uCC44\uD305\uC0C1\uB2F4","\uBA54\uC2DC\uC9C0\uC804\uC1A1"),o._pending=!1)}catch(n){console.warn("[sendChatMsg]",n.message),o._error=!0,o._pending=!1}finally{e.sending=!1}},A=async()=>{if(e.roomId&&e.roomId!=="_local")try{await foApiSvc.myChat.sendMsg(e.roomId,{msgText:"[\uCC44\uD305 \uC885\uB8CC \uC694\uCCAD]",senderCd:"MEMBER"},"\uCC44\uD305\uC0C1\uB2F4","\uC885\uB8CC\uC694\uCCAD")}catch{}e.msgs.push({chattMsgId:"_end",senderCd:"SYSTEM",msgText:"\uCC44\uD305\uC744 \uC885\uB8CC\uD588\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.",sendDate:new Date().toISOString()}),e.status="CLOSED",e.roomId=null,p(),d()},C=t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),u())};v(()=>{p()}),window.addEventListener("open-quick-menu",()=>{s.menuOpen=!0});const T=(t,o)=>{if(t==="dispFoUi")window.open((window.pageUrl?window.pageUrl("fo-disp-ui-pop.html"):"fo-disp-ui-pop.html")+(o?"#page="+o:""),"_blank");else if(t==="dispBoUi")window.open((window.pageUrl?window.pageUrl("bo-disp-ui-pop.html"):"bo-disp-ui-pop.html")+(o?"#page="+o:""),"_blank");else if(t==="foSite")window.location.href=(window.pageUrl?window.pageUrl("index.html"):"index.html")+"?SITE_NO="+o;else if(t==="foOnly"){const n="SITE"+String(o).padStart(6,"0");try{localStorage.setItem("modu-fo-sy-siteNo",o),localStorage.setItem("modu-fo-sy-siteId",n)}catch{}window.location.href=(window.pageUrl?window.pageUrl("index.html"):"index.html")+"?SITE_NO="+o}else if(t==="boOnly"){const n="SITE"+String(o).padStart(6,"0");try{localStorage.setItem("modu-bo-sy-siteNo",o),localStorage.setItem("modu-bo-sy-siteId",n)}catch{}window.open((window.pageUrl?window.pageUrl("bo.html"):"bo.html")+"?SITE_NO="+o,"_blank")}s.menuOpen=!1},U=window.FO_SITE_NO||"01",D="01",F=[{id:"dispUiPage",label:"\uD1B5\uD569 \uD398\uC774\uC9C0",icon:"\u{1F310}"},{id:"dispUi01",label:"UI \uC0D8\uD50C 01",icon:"1\uFE0F\u20E3"},{id:"dispUi02",label:"UI \uC0D8\uD50C 02",icon:"2\uFE0F\u20E3"},{id:"dispUi03",label:"UI \uC0D8\uD50C 03",icon:"3\uFE0F\u20E3"},{id:"dispUi04",label:"UI \uC0D8\uD50C 04",icon:"4\uFE0F\u20E3"},{id:"dispUi05",label:"UI \uC0D8\uD50C 05",icon:"5\uFE0F\u20E3"},{id:"dispUi06",label:"UI \uC0D8\uD50C 06",icon:"6\uFE0F\u20E3"}],L=[{id:"01",label:"FO_SITE_NO=01"},{id:"02",label:"FO_SITE_NO=02"},{id:"03",label:"FO_SITE_NO=03"},{id:"9999",label:"FO_SITE_NO=9999"}],c=t=>"SITE"+String(t).padStart(6,"0"),R=[{fo:"01",bo:"01",siteId:c("01")},{fo:"02",bo:"02",siteId:c("02")},{fo:"03",bo:"03",siteId:c("03")},{fo:"9999",bo:"9999",siteId:c("9999")}],i="illeesam.synology.me",b={fo:{port:`http://${i}:22000`,sub:`https://22000.${i}`,gw:`http://${i}:22099`},bo:{port:`http://${i}:22000/bo.html`,sub:`https://22000.${i}/bo.html`,gw:`http://${i}:22099/bo.html`},ecBeBo:{port:`http://${i}:22300/home`,sub:`https://22300.${i}/home`,gw:`http://${i}:22099/admin-tools`},ecBeCdn:{port:`http://${i}:22400/home`,sub:`https://22400.${i}/home`,gw:`http://${i}:22099/cdn-admin`}};return{uiState:s,codes:w,handleBtnAction:I,handleSelectAction:O,currentFoSiteNo:U,currentBoSiteNo:D,DISP_MENU:F,SITE_MENU:L,SITE_PAIR_MENU:R,DEPLOY_LINKS:b,DEPLOY_COLS:[{key:"fo",label:"FO"},{key:"bo",label:"BO"},{key:"ecBeBo",label:"ecBeBo"},{key:"ecBeCdn",label:"ecBeCdn"}],DEPLOY_ROWS:[{key:"port",label:"\uD3EC\uD2B8"},{key:"sub",label:"\uC11C\uBE0C\uB3C4\uBA54\uC778"},{key:"gw",label:"gateway"}],goDeployLink:(t,o)=>{window.open(b[t][o],"_blank")},chatState:e,chatInputRef:x,onChatKeydown:C,fnChatParticipants:k}},template:`
<footer v-if="!hideFooter" style="padding:28px 32px;">
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
    <div style="display:flex;align-items:center;gap:10px;">
      <svg width="28" height="28" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="92" rx="22" ry="6" fill="#d4a017"/>
        <ellipse cx="30" cy="92" rx="18" ry="4" fill="#e6b422"/>
        <path d="M30 90 Q25 60 35 30" stroke="#b8860b" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M30 90 Q25 60 35 30" stroke="#d4a017" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M35 30 Q55 10 75 18" stroke="#228B22" stroke-width="2.5" fill="none"/>
        <path d="M35 30 Q60 15 78 25" stroke="#2d8f2d" stroke-width="2" fill="none"/>
        <path d="M35 30 Q50 5 70 8" stroke="#1a7a1a" stroke-width="2.5" fill="none"/>
        <path d="M35 30 Q20 8 5 15" stroke="#228B22" stroke-width="2.5" fill="none"/>
        <path d="M35 30 Q15 12 3 22" stroke="#2d8f2d" stroke-width="2" fill="none"/>
        <path d="M35 30 Q25 5 10 5" stroke="#1a7a1a" stroke-width="2.5" fill="none"/>
        <path d="M35 30 Q35 8 40 3" stroke="#228B22" stroke-width="2" fill="none"/>
        <circle cx="40" cy="34" r="5" fill="#8B008B"/>
        <circle cx="48" cy="38" r="5" fill="#dc2626"/>
        <circle cx="44" cy="44" r="5" fill="#2563eb"/>
        <circle cx="35" cy="40" r="4.5" fill="#7c3aed"/>
        <circle cx="52" cy="32" r="4" fill="#dc2626"/>
        <circle cx="50" cy="46" r="4" fill="#2563eb"/>
        <circle cx="38" cy="32" r="1.5" fill="rgba(255,255,255,0.4)"/>
        <circle cx="46" cy="36" r="1.5" fill="rgba(255,255,255,0.4)"/>
        <circle cx="42" cy="42" r="1.5" fill="rgba(255,255,255,0.4)"/>
      </svg>
      <span style="font-weight:700;color:var(--text-secondary);font-size:0.85rem;">
        {{ config.name }}
      </span>
      <span style="color:var(--text-muted);font-size:0.75rem;">
        |
      </span>
      <span style="color:var(--text-muted);font-size:0.8rem;">
        {{ config.address }}
      </span>
    </div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;position:relative;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBC84\uD2BC \uC601\uC5ED =============================================== -->
      <button type="button" @click="handleBtnAction('linksModal-toggle')"
        style="font-size:0.75rem;padding:5px 12px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-secondary);cursor:pointer;font-weight:600;display:inline-flex;align-items:center;gap:6px;">
        \u{1F310} \uBA54\uB274 \uBC14\uB85C\uAC00\uAE30
        <span :style="{fontWeight:800,color: currentFoSiteNo==='03' ? '#7b1fa2' : currentFoSiteNo==='02' ? '#2e7d6b' : currentFoSiteNo==='9999' ? '#888' : '#9f2946'}">
          {{ currentFoSiteNo || '-' }}
        </span>
        <span :style="{fontWeight:800,color: currentBoSiteNo==='03' ? '#7b1fa2' : currentBoSiteNo==='02' ? '#2e7d6b' : currentBoSiteNo==='9999' ? '#888' : '#9f2946'}">
          {{ currentBoSiteNo || '-' }}
        </span>
        <span style="font-size:9px;">
          \u25BE
        </span>
      </button>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBA54\uB274 \uB808\uC774\uC5B4 ============================================== -->
      <div v-if="uiState.menuOpen"
        style="position:fixed;inset:0;background:rgba(0,0,0,0.35);z-index:9998;backdrop-filter:blur(2px);"
        @click="handleBtnAction('linksModal-close')">
      </div>
      <!-- 2026-09-06(\uC694\uCCAD\uC0AC\uD56D: "\uC815\uBCF4 2\uBC88\uC774\uBBF8\uC9C0\uC815\uB3C4\uB9CC \uC788\uC73C\uBA74 \uB418") \u2014 foOffice/boOffice \uBA54\uB274
           \uBAA9\uB85D 2\uC5F4\uC740 \uC81C\uAC70(\uAC01\uAC01 \uD5E4\uB354 \uD584\uBC84\uAC70/BO \uC0AC\uC774\uB4DC\uBC14\uB85C \uC774\uBBF8 \uAC08 \uC218 \uC788\uC5B4 \uC911\uBCF5) \u2014 _SITE_NO +
           dispUi \uC0D8\uD50C + NAS \uBC30\uD3EC URL \uD45C\uB9CC \uB0A8\uAE30\uB294 \uB2E8\uC77C \uCEEC\uB7FC \uB808\uC774\uC544\uC6C3\uC73C\uB85C \uCD95\uC18C, \uADF8\uB9CC\uD07C \uBAA8\uB2EC \uD3ED\uB3C4
           \uC904\uC784(920px \u2192 460px). -->
      <div v-if="uiState.menuOpen"
        style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:9999;background:#fff;border-radius:14px;box-shadow:0 24px 60px rgba(0,0,0,0.28);width:460px;max-width:95vw;max-height:88vh;overflow:hidden;display:flex;flex-direction:column;border:1px solid #ffe4ec;"
        @click.stop>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD5E4\uB354 ================================================ -->
        <div style="padding:14px 18px;border-bottom:1px solid #ffc9d6;background:linear-gradient(135deg,#fff0f4 0%,#ffe4ec 60%,#ffd5e1 100%);display:flex;align-items:center;justify-content:space-between;">
          <div style="font-size:15px;font-weight:800;color:#9f2946;">
            <span style="color:#e8587a;font-size:9px;margin-right:8px;">
              \u25CF
            </span>
            \u{1F310} \uBA54\uB274 \uBC14\uB85C\uAC00\uAE30
          </div>
          <button type="button" @click="handleBtnAction('linksModal-close')"
            style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.6);border:none;color:#9f2946;font-size:13px;cursor:pointer;transition:all .15s;display:inline-flex;align-items:center;justify-content:center;"
            onmouseover="this.style.background='#e8587a';this.style.color='#fff';this.style.transform='rotate(90deg)';"
            onmouseout="this.style.background='rgba(255,255,255,0.6)';this.style.color='#9f2946';this.style.transform='';">
            \u2715
          </button>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB2E8\uC77C \uCEEC\uB7FC \uBCF8\uBB38(_SITE_NO + dispUi + \uBC30\uD3EC URL) ================= -->
        <div style="display:grid;grid-template-columns:1fr;gap:14px;padding:18px;overflow:auto;">
          <div style="display:flex;flex-direction:column;gap:14px;">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. _SITE_NO (FO / BO \uBD84\uB9AC \uB9C1\uD06C) ====================== -->
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================ -->
            <div style="background:#fafbfc;border:1px solid #eef0f3;border-radius:10px;padding:12px;">
              <div style="font-size:13px;font-weight:800;color:#2e7d6b;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #def0e8;">
                \u{1F308} _SITE_NO
                <span style="font-size:11px;color:#888;font-weight:600;">
                  (FO: {{ currentFoSiteNo }}, BO: {{ currentBoSiteNo }})
                </span>
              </div>
              <div style="display:flex;flex-direction:column;gap:4px;">
                <div v-for="p in SITE_PAIR_MENU" :key="p.fo+'_'+p.bo"
                  style="display:flex;gap:6px;align-items:center;">
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. site_id \uD45C\uC2DC(2026-09-06: \uBAA8\uBC14\uC77C \uD3ED\uC5D0\uC11C \uBC00\uB9BC \uBC29\uC9C0 \u2014
                       \uC694\uCCAD\uC0AC\uD56D: "\uC606\uC73C\uB85C \uB118\uC5B4\uAC00\uB294\uB370 site_id \uC815\uBCF4\uB97C \uC904\uC5EC\uC918" \u2014 "site_id=SITE000001"
                       \uCC98\uB7FC \uD480 \uD14D\uC2A4\uD2B8 \uB300\uC2E0 "SITE" \uC811\uB450\uC5B4\uB97C \uB5C0 \uBC88\uD638\uB9CC \uC9E7\uAC8C, \uC804\uCCB4 \uAC12\uC740 title \uD234\uD301\uC73C\uB85C) -->
                  <span :style="{flexShrink:0,minWidth:'40px',fontSize:'11px',fontFamily:'monospace',fontWeight:700,color: (currentFoSiteNo===p.fo||currentBoSiteNo===p.bo)?'#2e7d6b':'#999'}"
                    :title="'\uC801\uC6A9 site_id: '+p.siteId">
                    #{{ p.siteId.replace('SITE','') }}
                  </span>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. FO \uB9C1\uD06C =================================== -->
                  <button type="button" @click="handleSelectAction('linksModal-go-item', { root: 'foOnly', target: p.fo })"
                    :style="{flex:1,display:'inline-flex',alignItems:'center',gap:'6px',padding:'6px 10px',background: currentFoSiteNo===p.fo?'#e0f2ec':'transparent',border:'1px solid '+(currentFoSiteNo===p.fo?'#a3d4be':'#e5eaea'),borderRadius:'6px',cursor:'pointer',fontSize:'12px',fontFamily:'monospace',color: currentFoSiteNo===p.fo?'#2e7d6b':'#444',fontWeight: currentFoSiteNo===p.fo?700:500,transition:'all .12s'}"
                    onmouseover="this.style.background='#e0f2ec';this.style.color='#2e7d6b';"
                    onmouseout="if(this.dataset.active!=='1'){this.style.background='transparent';this.style.color='#444';}"
                    :data-active="currentFoSiteNo===p.fo?'1':'0'"
                    title="index.html\uB85C \uC774\uB3D9 (\uAC19\uC740 \uCC3D)">
                    <span>
                      {{ currentFoSiteNo===p.fo?'\u25CF':'\u25CB' }}
                    </span>
                    <span>
                      FO={{ p.fo }}
                    </span>
                  </button>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. BO \uB9C1\uD06C (bo.html \uC0C8\uCC3D) ====================== -->
                  <button type="button" @click="handleSelectAction('linksModal-go-item', { root: 'boOnly', target: p.bo })"
                    :style="{flex:1,display:'inline-flex',alignItems:'center',gap:'6px',padding:'6px 10px',background: currentBoSiteNo===p.bo?'#f3e5f5':'transparent',border:'1px solid '+(currentBoSiteNo===p.bo?'#ce93d8':'#e5eaea'),borderRadius:'6px',cursor:'pointer',fontSize:'12px',fontFamily:'monospace',color: currentBoSiteNo===p.bo?'#7b1fa2':'#444',fontWeight: currentBoSiteNo===p.bo?700:500,transition:'all .12s'}"
                    onmouseover="this.style.background='#f3e5f5';this.style.color='#7b1fa2';"
                    onmouseout="if(this.dataset.active!=='1'){this.style.background='transparent';this.style.color='#444';}"
                    :data-active="currentBoSiteNo===p.bo?'1':'0'"
                    title="bo.html \uC0C8\uCC3D \uC624\uD508">
                    <span>
                      {{ currentBoSiteNo===p.bo?'\u25CF':'\u25CB' }}
                    </span>
                    <span>
                      BO={{ p.bo }}
                    </span>
                    <span style="margin-left:auto;font-size:10px;color:#aaa;">
                      \u2197
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. dispUi ======================================== -->
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================ -->
            <div style="background:#fafbfc;border:1px solid #eef0f3;border-radius:10px;padding:12px;">
              <div style="font-size:13px;font-weight:800;color:#c2410c;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #f5e8de;">
                \u{1F5A5} dispUi (\uC0D8\uD50C)
              </div>
              <div style="display:flex;flex-direction:column;gap:2px;">
                <div v-for="m in DISP_MENU" :key="m.id"
                  style="display:flex;align-items:center;gap:6px;padding:4px 6px;">
                  <span style="font-size:14px;width:18px;text-align:center;">
                    {{ m.icon }}
                  </span>
                  <span style="flex:1;font-size:12.5px;color:#333;">
                    {{ m.label }}
                  </span>
                  <button type="button" @click="handleSelectAction('linksModal-go-item', { root: 'dispFoUi', target: m.id })"
                    style="padding:3px 9px;font-size:11px;font-weight:600;background:#e0f2fe;color:#0369a1;border:1px solid #bae6fd;border-radius:5px;cursor:pointer;"
                    title="\uC0AC\uC6A9\uC790 \uBBF8\uB9AC\uBCF4\uAE30">
                    \uC0AC\uC6A9\uC790 \u2197
                  </button>
                  <button type="button" @click="handleSelectAction('linksModal-go-item', { root: 'dispBoUi', target: m.id })"
                    style="padding:3px 9px;font-size:11px;font-weight:600;background:#fef3eb;color:#c2410c;border:1px solid #f5e8de;border-radius:5px;cursor:pointer;"
                    title="\uAD00\uB9AC\uC790 \uBBF8\uB9AC\uBCF4\uAE30">
                    \uAD00\uB9AC\uC790 \u2197
                  </button>
                </div>
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. NAS \uBC30\uD3EC URL(\uD3EC\uD2B8/\uC11C\uBE0C\uB3C4\uBA54\uC778/gateway) ================== -->
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================ -->
            <!-- 2026-09-06(\uC694\uCCAD\uC0AC\uD56D: "\uD558\uB2E8\uBCC4\uB3C4\uB780\uC5D0 \uC2DC\uB180\uB85C\uC9C0\uC5D0 \uBC30\uD3EC\uB41C ecBeBo, ecBeCdn \uB3C4 \uB9C1\uD06C
                 \uCD94\uAC00\uD574\uC918 \u2014 \uD3EC\uD2B8\uBC29\uC2DD, \uC11C\uBE0C\uB3C4\uBA54\uC778\uBC29\uC2DD, gateway \uBC29\uC2DD ... \uB9C8\uC6B0\uC2A4\uC624\uBC84\uD558\uBA74 url
                 \uC815\uBCF4 \uBCF4\uC5EC\uC8FC\uACE0") \u2014 \uAC01 \uC140 title \uC18D\uC131\uC774 hover \uC2DC \uBE0C\uB77C\uC6B0\uC800 \uAE30\uBCF8 \uD234\uD301\uC73C\uB85C \uC2E4\uC81C
                 URL\uC744 \uBCF4\uC5EC\uC900\uB2E4. -->
            <div style="background:#fafbfc;border:1px solid #eef0f3;border-radius:10px;padding:12px;">
              <div style="font-size:13px;font-weight:800;color:#1a1a2e;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #e5e5ea;">
                \u{1F517} NAS \uBC30\uD3EC URL
              </div>
              <table style="width:100%;border-collapse:collapse;font-size:11px;">
                <thead>
                  <tr>
                    <th style="text-align:left;padding:4px 6px;color:#999;font-weight:600;"></th>
                    <th v-for="col in DEPLOY_COLS" :key="col.key" style="text-align:center;padding:4px 6px;color:#555;font-weight:700;">
                      {{ col.label }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in DEPLOY_ROWS" :key="row.key">
                    <td style="padding:4px 6px;color:#666;font-weight:600;white-space:nowrap;">
                      {{ row.label }}
                    </td>
                    <td v-for="col in DEPLOY_COLS" :key="col.key" style="padding:3px 4px;text-align:center;">
                      <button type="button" @click="goDeployLink(col.key, row.key)"
                        :title="DEPLOY_LINKS[col.key][row.key]"
                        style="width:100%;padding:5px 4px;font-size:11px;font-weight:600;background:#eef6ff;color:#1565c0;border:1px solid #d3e6fb;border-radius:5px;cursor:pointer;transition:all .12s;"
                        onmouseover="this.style.background='#dbeafe';this.style.borderColor='#93c5fd';"
                        onmouseout="this.style.background='#eef6ff';this.style.borderColor='#d3e6fb';">
                        \uC5F4\uAE30
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <span style="color:var(--text-muted);font-size:0.75rem;">
        {{ config.tel }}
      </span>
      <span style="color:var(--text-muted);font-size:0.75rem;">
        {{ config.email }}
      </span>
      <span style="color:var(--text-muted);font-size:0.75rem;">
        \xA9 2026 {{ config.name }}
      </span>
    </div>
  </div>
</footer>
<!-- ===== \u25A1. \uCC44\uD305 \uC0C1\uB2F4 \uD50C\uB85C\uD305 \uBC84\uD2BC + \uD328\uB110 ============================== -->

<!-- \uCC44\uD305 \uD328\uB110 -->
<!-- width:340px \uACE0\uC815\uC774\uB77C \uBDF0\uD3EC\uD2B8\uAC00 364px(340+\uC591\uCABD24px) \uBCF4\uB2E4 \uC881\uC740 \uD3F0(\uAC24\uB7ED\uC2DC S8=360px \uB4F1 \uD754\uD55C
     \uD654\uBA74\uD3ED)\uC5D0\uC11C\uB294 \uD328\uB110\uC774 \uC67C\uCABD \uD654\uBA74 \uBC16\uC73C\uB85C \uBC00\uB824\uB098\uAC00 \uBE44\uB300\uCE6D\uC73C\uB85C \uC798\uB824 \uBCF4\uC774\uB358 \uBC84\uADF8(2026-09-06,
     "\uCC44\uD305 \uC0C1\uB2F4\uB780 \uC2A4\uD0C0\uC77C\uC774 \uC774\uC0C1\uD558\uB2E4"). width:min() \uC73C\uB85C \uBDF0\uD3EC\uD2B8 \uD3ED\uC5D0 \uB9DE\uCDB0 \uC790\uB3D9\uC73C\uB85C \uC904\uC5B4\uB4E4\uAC8C \uD574\uC11C
     \uC88C\uC6B0 24px \uC5EC\uBC31\uC744 \uD56D\uC0C1 \uC720\uC9C0\uD55C\uB2E4. -->
<div v-if="chatState.open"
  style="position:fixed;right:24px;bottom:calc(110px + var(--fab-lift, 0px));transition:bottom .2s ease;z-index:8800;width:min(340px, calc(100vw - 48px));height:480px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.22);display:flex;flex-direction:column;overflow:hidden;border:1px solid #ffe4ec;">
  <!-- \uD328\uB110 \uD5E4\uB354 -->
  <div style="background:linear-gradient(135deg,#fff0f4 0%,#ffe4ec 60%,#ffd5e1 100%);border-bottom:1px solid #ffc9d6;">
    <!-- \uC81C\uBAA9 \uD589 -->
    <div style="padding:12px 14px 8px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">\u{1F4AC}</span>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:800;color:#9f2946;">\uCC44\uD305 \uC0C1\uB2F4</div>
        <div style="font-size:11px;margin-top:1px;">
          <span v-if="chatState.status==='OPEN'" style="color:#15803d;">\u25CF \uC0C1\uB2F4 \uC911</span>
          <span v-else-if="chatState.status==='PENDING'" style="color:#b45309;">\u25CF \uB300\uAE30 \uC911</span>
          <span v-else-if="chatState.status==='CLOSED'" style="color:#888;">\u25CB \uC885\uB8CC\uB428</span>
          <span v-else-if="chatState.needAuth" style="color:#6366f1;">\u25CF \uB85C\uADF8\uC778 \uD544\uC694</span>
          <span v-else style="color:#aaa;">\uC5F0\uACB0 \uC911...</span>
        </div>
      </div>
      <button type="button" @click="handleBtnAction('chat-end')"
        v-if="chatState.status !== 'CLOSED' &amp;&amp; !chatState.needAuth"
        style="font-size:11px;padding:3px 8px;background:rgba(255,255,255,0.6);border:1px solid #ffc9d6;border-radius:5px;color:#9f2946;cursor:pointer;">
        \uC885\uB8CC
      </button>
      <button type="button" @click="handleBtnAction('chat-close')"
        style="width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,0.6);border:none;color:#9f2946;font-size:12px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;"
        onmouseover="this.style.background='#e8587a';this.style.color='#fff';"
        onmouseout="this.style.background='rgba(255,255,255,0.6)';this.style.color='#9f2946';">
        \u2715
      </button>
    </div>
    <!-- \uCC38\uC5EC\uC790 \uBC43\uC9C0 \uD589 (\uB85C\uADF8\uC778 \uC0C1\uD0DC\uC77C \uB54C\uB9CC) -->
    <div v-if="!chatState.needAuth" style="padding:0 14px 10px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
      <span style="font-size:10px;color:#b06070;font-weight:600;margin-right:2px;">\uCC38\uC5EC\uC790</span>
      <div v-for="p in fnChatParticipants()" :key="p.id"
        style="position:relative;display:inline-flex;">
        <!-- \uBC43\uC9C0 \uBC84\uD2BC -->
        <button type="button"
          @click="handleBtnAction('chat-tooltip', p.id)"
          style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;background:rgba(255,255,255,0.75);border:1px solid #ffc9d6;border-radius:20px;font-size:11px;color:#9f2946;cursor:pointer;font-weight:600;white-space:nowrap;transition:all .12s;"
          onmouseover="this.style.background='#fff';this.style.borderColor='#e8587a';"
          onmouseout="this.style.background='rgba(255,255,255,0.75)';this.style.borderColor='#ffc9d6';">
          <span>{{ p.icon }}</span>
          <span>{{ p.name }}</span>
        </button>
        <!-- \uD234\uD301 -->
        <div v-if="chatState.tooltipId === p.id"
          style="position:absolute;bottom:calc(100% + 6px);left:0;z-index:9900;background:#fff;border:1px solid #ffe4ec;border-radius:10px;box-shadow:0 6px 24px rgba(0,0,0,0.16);padding:10px 13px;min-width:190px;white-space:nowrap;">
          <!-- \uD234\uD301 \uB2EB\uAE30 \uC624\uBC84\uB808\uC774 -->
          <div style="position:fixed;inset:0;" @click="handleBtnAction('chat-tooltip-hide')"></div>
          <div style="position:relative;z-index:1;">
            <div style="font-size:12px;font-weight:800;color:#9f2946;margin-bottom:7px;padding-bottom:6px;border-bottom:1px solid #ffe4ec;">
              {{ p.icon }} {{ p.name }}
            </div>
            <table style="border-collapse:collapse;width:100%;">
              <tr>
                <td style="font-size:10px;color:#999;padding:2px 6px 2px 0;white-space:nowrap;vertical-align:top;">\uC0AC\uC6A9\uC790\uC720\uD615</td>
                <td style="font-size:11px;color:#333;font-weight:600;padding:2px 0;">{{ p.userType || '-' }}</td>
              </tr>
              <tr>
                <td style="font-size:10px;color:#999;padding:2px 6px 2px 0;white-space:nowrap;vertical-align:top;">\uC774\uBA54\uC77C</td>
                <td style="font-size:11px;color:#333;padding:2px 0;word-break:break-all;white-space:normal;">{{ p.email || '-' }}</td>
              </tr>
              <tr>
                <td style="font-size:10px;color:#999;padding:2px 6px 2px 0;white-space:nowrap;vertical-align:top;">\uC18C\uC18D</td>
                <td style="font-size:11px;color:#333;padding:2px 0;">{{ p.dept || '-' }}</td>
              </tr>
              <tr>
                <td style="font-size:10px;color:#999;padding:2px 6px 2px 0;white-space:nowrap;vertical-align:top;">\uC804\uD654\uBC88\uD638</td>
                <td style="font-size:11px;color:#333;padding:2px 0;">{{ p.phone || '-' }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- needAuth: \uB85C\uADF8\uC778 \uC720\uB3C4 \uD654\uBA74 -->
  <div v-if="chatState.needAuth"
    style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px 24px;gap:16px;background:#fafafa;text-align:center;">
    <div style="font-size:44px;line-height:1;">\u{1F510}</div>
    <div style="font-size:14px;font-weight:700;color:#333;line-height:1.5;">
      \uCC44\uD305 \uC0C1\uB2F4\uC740 \uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
    </div>
    <div style="font-size:12px;color:#888;line-height:1.6;">
      \uD68C\uC6D0\uC774 \uC544\uB2CC \uACBD\uC6B0<br>
      <strong style="color:#6366f1;">\uD734\uB300\uD3F0 \uBCF8\uC778\uC778\uC99D</strong> \uD6C4 \uC774\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;width:100%;max-width:200px;">
      <button type="button" @click="handleBtnAction('chat-goLogin')"
        style="padding:10px 0;background:linear-gradient(135deg,#ff8fab,#e8587a);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;width:100%;transition:opacity .15s;"
        onmouseover="this.style.opacity='0.85';"
        onmouseout="this.style.opacity='1';">
        \u{1F511} \uB85C\uADF8\uC778\uD558\uAE30
      </button>
      <button type="button"
        style="padding:10px 0;background:#fff;color:#6366f1;border:1px solid #a5b4fc;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;width:100%;transition:all .15s;"
        onmouseover="this.style.background='#eef2ff';"
        onmouseout="this.style.background='#fff';"
        title="\uD734\uB300\uD3F0 \uBCF8\uC778\uC778\uC99D\uC740 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.">
        \u{1F4F1} \uBCF8\uC778\uC778\uC99D (\uC900\uBE44 \uC911)
      </button>
    </div>
  </div>

  <!-- \uBA54\uC2DC\uC9C0 \uC601\uC5ED (\uB85C\uADF8\uC778 \uD6C4) -->
  <div v-if="!chatState.needAuth" id="fo-chat-msgbox"
    style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;background:#fafafa;">
    <!-- \uB85C\uB529 -->
    <div v-if="chatState.loading" style="text-align:center;color:#aaa;font-size:12px;padding:20px 0;">
      \u23F3 \uC5F0\uACB0 \uC911...
    </div>
    <!-- \uBA54\uC2DC\uC9C0 \uBAA9\uB85D -->
    <template v-for="m in chatState.msgs" :key="m.chattMsgId">
      <!-- SYSTEM \uBA54\uC2DC\uC9C0 -->
      <div v-if="m.senderCd==='SYSTEM'"
        style="text-align:center;font-size:11px;color:#888;background:#f0f0f0;border-radius:8px;padding:5px 10px;margin:0 20px;">
        {{ m.msgText }}
      </div>
      <!-- ADMIN \uBA54\uC2DC\uC9C0 (\uC88C\uCE21) -->
      <div v-else-if="m.senderCd==='ADMIN'" style="display:flex;align-items:flex-end;gap:6px;">
        <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#ff8fab,#e8587a);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">
          \u{1F481}
        </div>
        <div style="max-width:75%;">
          <div style="font-size:10px;color:#888;margin-bottom:3px;">\uC0C1\uB2F4\uC0AC</div>
          <div style="background:#fff;border:1px solid #ffe4ec;border-radius:0 10px 10px 10px;padding:8px 10px;font-size:13px;line-height:1.5;color:#333;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
            {{ m.msgText }}
          </div>
          <div style="font-size:10px;color:#bbb;margin-top:2px;">
            {{ m.sendDate ? String(m.sendDate).slice(11,16) : '' }}
          </div>
        </div>
      </div>
      <!-- MEMBER \uBA54\uC2DC\uC9C0 (\uC6B0\uCE21) -->
      <div v-else style="display:flex;flex-direction:row-reverse;align-items:flex-end;gap:6px;">
        <div style="max-width:75%;">
          <div style="background:linear-gradient(135deg,#ff8fab,#e8587a);border-radius:10px 0 10px 10px;padding:8px 10px;font-size:13px;line-height:1.5;color:#fff;"
            :style="m._error ? 'opacity:0.6;' : ''">
            {{ m.msgText }}
          </div>
          <div style="font-size:10px;color:#bbb;margin-top:2px;text-align:right;">
            <span v-if="m._pending" style="color:#aaa;">\uC804\uC1A1 \uC911...</span>
            <span v-else-if="m._error" style="color:#f87171;">\uC804\uC1A1 \uC2E4\uD328</span>
            <span v-else>{{ m.sendDate ? String(m.sendDate).slice(11,16) : '' }}</span>
          </div>
        </div>
      </div>
    </template>
    <!-- \uBE48 \uC0C1\uD0DC -->
    <div v-if="!chatState.loading &amp;&amp; chatState.msgs.length===0"
      style="text-align:center;color:#aaa;font-size:12px;padding:30px 0;">
      \uBA54\uC2DC\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.<br>\uC544\uB798 \uC785\uB825\uCC3D\uC73C\uB85C \uBB38\uC758\uD558\uC138\uC694.
    </div>
  </div>

  <!-- \uC785\uB825 \uC601\uC5ED (\uB85C\uADF8\uC778 \uD6C4) -->
  <div v-if="!chatState.needAuth"
    style="padding:10px;border-top:1px solid #ffe4ec;background:#fff;display:flex;gap:6px;align-items:flex-end;">
    <textarea
      ref="chatInputRef"
      v-model="chatState.inputText"
      @keydown="onChatKeydown"
      placeholder="\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694 (Enter: \uC804\uC1A1)"
      :disabled="chatState.sending || chatState.status==='CLOSED'"
      rows="2"
      style="flex:1;resize:none;border:1px solid #ffd5e1;border-radius:8px;padding:8px 10px;font-size:13px;outline:none;line-height:1.4;font-family:inherit;background:#fffafb;"
      onfocus="this.style.borderColor='#e8587a';"
      onblur="this.style.borderColor='#ffd5e1';"></textarea>
    <button type="button"
      @click="handleBtnAction('chat-send')"
      :disabled="!chatState.inputText.trim() || chatState.sending || chatState.status==='CLOSED'"
      style="width:38px;height:38px;border-radius:50%;border:none;background:linear-gradient(135deg,#ff8fab,#e8587a);color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity .15s;"
      :style="(!chatState.inputText.trim() || chatState.sending || chatState.status==='CLOSED') ? 'opacity:0.4;cursor:not-allowed;' : ''">
      \u27A4
    </button>
  </div>
</div>

<!-- \uCC44\uD305 \uD50C\uB85C\uD305 \uBC84\uD2BC -->
<button type="button"
  @click="handleBtnAction('chat-toggle')"
  style="position:fixed;right:24px;bottom:calc(48px + var(--fab-lift, 0px));transition:bottom .2s ease;z-index:8801;width:54px;height:54px;border-radius:50%;border:none;background:linear-gradient(135deg,#ff8fab,#e8587a);color:#fff;font-size:24px;cursor:pointer;box-shadow:0 4px 20px rgba(232,88,122,0.45);display:flex;align-items:center;justify-content:center;transition:transform .15s,box-shadow .15s;"
  onmouseover="this.style.transform='scale(1.1)';this.style.boxShadow='0 6px 28px rgba(232,88,122,0.6)';"
  onmouseout="this.style.transform='';this.style.boxShadow='0 4px 20px rgba(232,88,122,0.45)';"
  :title="chatState.open ? '\uCC44\uD305 \uB2EB\uAE30' : '\uCC44\uD305 \uC0C1\uB2F4 \uC5F4\uAE30'">
  <!-- \uBBF8\uC77D\uC74C \uBC43\uC9C0 -->
  <span v-if="chatState.unread > 0 &amp;&amp; !chatState.open"
    style="position:absolute;top:-4px;right:-4px;background:#ef4444;color:#fff;font-size:10px;font-weight:700;min-width:18px;height:18px;border-radius:9px;display:flex;align-items:center;justify-content:center;padding:0 4px;border:2px solid #fff;">
    {{ chatState.unread > 9 ? '9+' : chatState.unread }}
  </span>
  <span v-if="chatState.open">\u2715</span>
  <span v-else>\u{1F4AC}</span>
</button>
<!-- ===== \u25A1. \uCC44\uD305 \uC0C1\uB2F4 =================================================== -->
`};
