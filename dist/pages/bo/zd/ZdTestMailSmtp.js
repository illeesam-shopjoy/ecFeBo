window.ZdTestMailSmtp={name:"ZdTestMailSmtp",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(v){var g;const{reactive:n,onMounted:x}=Vue,m=v.showToast||((g=window.boApp)==null?void 0:g.showToast)||(()=>{}),l=n({smtpHost:"",smtpPort:"",username:"",password:"",from:"",fromNm:""}),o=n({toEmail:"illeesam@gmail.com",toName:"\uC1A1\uC131\uC77C",subject:"[ShopJoy] SMTP \uD14C\uC2A4\uD2B8 \uBA54\uC77C ["+new Date().toISOString().replace("T"," ").slice(0,19)+"]",body:`SMTP \uC5F0\uB3D9\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uD14C\uC2A4\uD2B8 \uBA54\uC77C\uC785\uB2C8\uB2E4.

\uBC1C\uC1A1 \uC2DC\uAC01: `+new Date().toISOString().replace("T"," ").slice(0,19)}),e=n({status:"",response:null,error:"",logs:[]}),f=n({loading:!1}),h=[{key:"smtpHost",label:"SMTP Host",type:"text",mono:!0,hint:"site.email.smtp.host"},{key:"smtpPort",label:"SMTP Port",type:"text",mono:!0,hint:"site.email.smtp.port"},{key:"username",label:"Username",type:"text",mono:!0,hint:"username"},{key:"from",label:"\uBC1C\uC2E0 \uC774\uBA54\uC77C",type:"text",mono:!0,hint:"app.mail.from"},{key:"fromNm",label:"\uBC1C\uC2E0\uC790\uBA85",type:"text",hint:"app.mail.from-nm"}],S=[{key:"toEmail",label:"\uC218\uC2E0\uC790 \uC774\uBA54\uC77C",type:"text",required:!0,hint:"toEmail"},{key:"toName",label:"\uC218\uC2E0\uC790 \uC774\uB984",type:"text",hint:"toName"},{key:"subject",label:"\uC81C\uBAA9",type:"text",colSpan:3,hint:"subject"},{key:"body",label:"\uBCF8\uBB38 (plain text)",type:"textarea",colSpan:3,hint:"body"}];x(async()=>{var s,a,r,i;try{const t=await((a=(s=boApiSvc.syProp)==null?void 0:s.getList)==null?void 0:a.call(s,{propKeys:"site.email.smtp.host,site.email.smtp.port,app.mail.from,app.mail.from-nm"},"SMTP \uBA54\uC77C \uBC1C\uC1A1 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),p=((r=t==null?void 0:t.data)==null?void 0:r.data)||[],d=T=>{const b=p.filter(c=>c.propKey===T&&c.propValue),y=b.find(c=>/local|dev/.test(c.propProfile||""))||b[0];return(y==null?void 0:y.propValue)||""};l.smtpHost=d("site.email.smtp.host"),l.smtpPort=d("site.email.smtp.port"),l.from=d("app.mail.from"),l.fromNm=d("app.mail.from-nm")}catch(t){e.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(t.message||t)}try{const t=await boApi.get("/bo/sy/app-config/mail",coUtil.cofApiHdr("SMTP \uD14C\uC2A4\uD2B8","\uC124\uC815 \uC870\uD68C")),p=((i=t==null?void 0:t.data)==null?void 0:i.data)||{};p.username&&(l.username=p.username)}catch{}});const u=(s,a="info")=>{e.logs.unshift({msg:s,type:a,time:new Date().toLocaleTimeString()}),e.logs.length>20&&e.logs.pop()},w=async()=>{var s,a,r;if(!o.toEmail){m("\uC218\uC2E0\uC790 \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694.","error");return}f.loading=!0,e.status="\u23F3 \uBA54\uC77C \uBC1C\uC1A1 \uC911\u2026",e.error="",e.response=null,u("\uBA54\uC77C \uBC1C\uC1A1 \uC694\uCCAD: "+o.toEmail);try{const i=await boApi.post("/co/ext/mail-send/send",{toEmail:o.toEmail,toName:o.toName,subject:o.subject,body:o.body},coUtil.cofApiHdr("SMTP \uD14C\uC2A4\uD2B8","\uBA54\uC77C \uBC1C\uC1A1"));e.response=((s=i.data)==null?void 0:s.data)||i.data;const t=((a=e.response)==null?void 0:a.success)!==!1;e.status=t?"success":"fail",u((t?"\u2705":"\u26A0\uFE0F")+" \uBC1C\uC1A1 "+(t?"\uC644\uB8CC":"\uC2E4\uD328(\uC11C\uBC84\uC751\uB2F5)")+" \u2192 "+o.toEmail,t?"success":"error"),m("\uD14C\uC2A4\uD2B8 \uBA54\uC77C "+(t?"\uBC1C\uC1A1 \uC644\uB8CC":"\uBC1C\uC1A1 \uC2E4\uD328: "+(((r=e.response)==null?void 0:r.failReason)||"")),t?"success":"error",t?void 0:0)}catch(i){e.error=coUtil.cofErrMsg(i,"\uC54C \uC218 \uC5C6\uB294 \uC624\uB958"),e.status="error",u("\u274C \uC2E4\uD328: "+e.error,"error"),m("\uBA54\uC77C \uBC1C\uC1A1 \uC2E4\uD328: "+e.error,"error",0)}f.loading=!1};return{cfg:l,form:o,result:e,uiState:f,cfgFormColumns:h,mailFormColumns:S,handleBtnAction:s=>{if(s==="mail-send")return w()}}},template:`
<div>
  <div class="page-title">SMTP \uBA54\uC77C \uBC1C\uC1A1 \uD14C\uC2A4\uD2B8</div>

  <!-- \uBC1C\uC1A1 \uD3FC -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uD14C\uC2A4\uD2B8 \uBA54\uC77C \uBC1C\uC1A1</span>
      <div style="margin-left:auto">
        <button class="btn btn_send btn-sm" :disabled="uiState.loading" @click="handleBtnAction('mail-send')">
          {{ uiState.loading ? '\u23F3 \uBC1C\uC1A1 \uC911\u2026' : '\u{1F4E7} \uD14C\uC2A4\uD2B8 \uBA54\uC77C \uBC1C\uC1A1' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="mailFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />

      <!-- \uACB0\uACFC -->
      <div v-if="uiState.loading" style="margin-top:12px;font-size:13px;font-weight:600;color:#6b7280;">\u23F3 \uBA54\uC77C \uBC1C\uC1A1 \uC911\u2026</div>
      <div v-if="result.response || result.error" style="margin-top:12px;border-radius:6px;overflow:hidden;border:1px solid;"
        :style="result.status==='success' ? 'border-color:#86efac;' : 'border-color:#fca5a5;'">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;font-size:13px;font-weight:600;"
          :style="result.status==='success' ? 'background:#f0fdf4;color:#15803d;' : 'background:#fff5f5;color:#b91c1c;'">
          <span>\uBA54\uC77C \uBC1C\uC1A1 \uACB0\uACFC</span>
          <span style="font-size:18px;">{{ result.status==='success' ? '\u2705' : result.status==='fail' ? '\u26A0\uFE0F' : '\u274C' }}</span>
        </div>
        <div v-if="result.error" style="padding:8px 12px;font-size:12px;color:#b91c1c;white-space:pre-wrap;background:#fff5f5;">{{ result.error }}</div>
        <div v-if="result.response" style="padding:8px 12px;font-size:12px;"
          :style="result.status==='success' ? 'background:#f0fdf4;' : 'background:#fff5f5;'">
          <pre style="margin:0;">{{ JSON.stringify(result.response, null, 2) }}</pre>
        </div>
      </div>
    </div>
  </div>

  <!-- \uBC1C\uC1A1 \uB85C\uADF8 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uBC1C\uC1A1 \uC774\uB825 (\uCD5C\uADFC 20\uAC74)</span></div>
    <div style="padding:12px">
      <div v-if="!result.logs.length" style="color:#999;font-size:12px;text-align:center;padding:16px">\uBC1C\uC1A1 \uC774\uB825 \uC5C6\uC74C</div>
      <div v-for="log in result.logs" :key="log.time" style="display:flex;gap:8px;font-size:12px;padding:4px 0;border-bottom:1px solid #f0f0f0">
        <span style="color:#999;white-space:nowrap">{{ log.time }}</span>
        <span :style="log.type==='error'?'color:#b91c1c':log.type==='success'?'color:#15803d':''">{{ log.msg }}</span>
      </div>
    </div>
  </div>

  <!-- SMTP \uC124\uC815 \uD604\uD669 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">SMTP \uC124\uC815 \uD604\uD669 (sy_prop)</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="true" compact />
    </div>
  </div>

  <!-- \uC548\uB0B4 -->
  <div class="card">
    <div class="toolbar"><span class="list-title">SMTP \uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>Gmail \uAE30\uC900:</b><br>
      Host: <code>smtp.gmail.com</code> / Port: <code>587</code> (TLS)<br>
      \uAD6C\uAE00 \uACC4\uC815 \u2192 \uBCF4\uC548 \u2192 2\uB2E8\uACC4 \uC778\uC99D \uD65C\uC131\uD654 \u2192 \uC571 \uBE44\uBC00\uBC88\uD638 \uC0DD\uC131 \u2192 application-local.yml \uC5D0 \uC124\uC815<br><br>
      <b>\uBC31\uC5D4\uB4DC API:</b> <code>POST /api/co/ext/mail-send/send</code> \u2192 <code>CoExtMailSendController \u2192 CmMailSendService.sendMail()</code>
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.mail.,spring.mail." default-prop-key-filter="app.mail;spring.mail" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/mail" default-key-filter="app.mail;spring.mail" />
</div>`};
