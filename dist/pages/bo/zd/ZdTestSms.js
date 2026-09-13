window.ZdTestSms={name:"ZdTestSms",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(S){var m;const{reactive:a,onMounted:y}=Vue,i=S.showToast||((m=window.boApp)==null?void 0:m.showToast)||(()=>{}),p=a({enabled:!1,provider:"",apiKey:"",apiSecret:"",from:""}),t=a({toPhone:"01038050206",message:"[ShopJoy] SMS \uC5F0\uB3D9 \uD14C\uC2A4\uD2B8 \uBA54\uC2DC\uC9C0\uC785\uB2C8\uB2E4. ["+new Date().toISOString().replace("T"," ").slice(0,19)+"]"}),e=a({status:"",response:null,error:"",logs:[]}),l=a({loading:!1}),v={aligo:"Aligo \uC54C\uB9AC\uACE0",coolsms:"CoolSMS \uCFE8SMS",ncp:"Naver Cloud Platform SMS",twilio:"Twilio"},b=[{key:"provider",label:"Provider",type:"text",mono:!0,hint:"app.sms.provider"},{key:"from",label:"\uBC1C\uC2E0 \uBC88\uD638",type:"text",mono:!0,hint:"app.sms.from"},{key:"apiKey",label:"API Key",type:"text",mono:!0,hint:"app.sms.api-key"},{key:"apiSecret",label:"API Secret",type:"text",mono:!0,hint:"app.sms.api-secret"}],x=[{key:"toPhone",label:"\uC218\uC2E0 \uBC88\uD638",type:"text",required:!0,placeholder:"01012345678 (\uD558\uC774\uD508 \uC81C\uC678)",hint:"toPhone"},{key:"message",label:"\uBA54\uC2DC\uC9C0 (90\uC790 \uC774\uB0B4 = SMS, \uCD08\uACFC = LMS)",type:"textarea",colSpan:3,hint:"message"}];y(async()=>{var s,o,f;try{const r=await((o=(s=boApiSvc.syProp)==null?void 0:s.getList)==null?void 0:o.call(s,{propKeys:"app.sms.provider,app.sms.from"},"SMS \uBB38\uC790 \uBC1C\uC1A1 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),P=((f=r==null?void 0:r.data)==null?void 0:f.data)||[],g=w=>{const u=P.filter(n=>n.propKey===w&&n.propValue),c=u.find(n=>/local|dev/.test(n.propProfile||""))||u[0];return(c==null?void 0:c.propValue)||""};p.provider=g("app.sms.provider"),p.from=g("app.sms.from")}catch(r){e.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(r.message||r)}});const d=(s,o="info")=>{e.logs.unshift({msg:s,type:o,time:new Date().toLocaleTimeString()}),e.logs.length>20&&e.logs.pop()},h=async()=>{var s;if(!t.toPhone){i("\uC218\uC2E0 \uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if(!t.message){i("\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}l.loading=!0,e.status="\u23F3 SMS \uBC1C\uC1A1 \uC911\u2026",e.error="",e.response=null,d("SMS \uBC1C\uC1A1 \uC694\uCCAD: "+t.toPhone);try{const o=await boApi.post("/co/ext/sms-send/send",{toPhone:t.toPhone,message:t.message},coUtil.cofApiHdr("SMS \uD14C\uC2A4\uD2B8","\uBC1C\uC1A1"));e.response=((s=o.data)==null?void 0:s.data)||o.data,e.status="\u2705 SMS \uBC1C\uC1A1 \uC131\uACF5",d("\u2705 \uBC1C\uC1A1 \uC644\uB8CC \u2192 "+t.toPhone,"success"),i("SMS \uBC1C\uC1A1 \uC644\uB8CC","success")}catch(o){e.error=coUtil.cofErrMsg(o,"\uC54C \uC218 \uC5C6\uB294 \uC624\uB958"),e.status="\u274C SMS \uBC1C\uC1A1 \uC2E4\uD328",d("\u274C \uC2E4\uD328: "+e.error,"error"),i("SMS \uBC1C\uC1A1 \uC2E4\uD328: "+e.error,"error",0)}l.loading=!1};return{cfg:p,form:t,result:e,uiState:l,cfgFormColumns:b,smsFormColumns:x,handleBtnAction:s=>{if(s==="sms-send")return h()},fnProviderLabel:s=>v[s]||s||"(not configured)"}},template:`
<div>
  <div class="page-title">SMS \uBB38\uC790 \uBC1C\uC1A1 \uD14C\uC2A4\uD2B8</div>

  <!-- \uBC1C\uC1A1 \uD3FC -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uD14C\uC2A4\uD2B8 SMS \uBC1C\uC1A1</span>
      <div style="margin-left:auto">
        <button class="btn btn_send btn-sm" :disabled="uiState.loading" @click="handleBtnAction('sms-send')">
          {{ uiState.loading ? '\u23F3 \uBC1C\uC1A1 \uC911\u2026' : '\u{1F4F1} \uD14C\uC2A4\uD2B8 SMS \uBC1C\uC1A1' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="smsFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />

      <!-- \uACB0\uACFC -->
      <div v-if="result.status" style="margin-top:8px;font-size:13px;font-weight:600">{{ result.status }}</div>
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-top:8px;white-space:pre-wrap">{{ result.error }}</div>
      <div v-if="result.response" style="padding:8px;background:#f0fdf4;border:1px solid #86efac;border-radius:4px;font-size:12px;margin-top:8px">
        <pre style="margin:0">{{ JSON.stringify(result.response, null, 2) }}</pre>
      </div>
    </div>
  </div>

  <!-- \uBC1C\uC1A1 \uC774\uB825 -->
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

  <!-- SMS \uC124\uC815 \uD604\uD669 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">SMS \uC124\uC815 \uD604\uD669 (sy_prop)</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="true" compact />
    </div>
  </div>

  <!-- \uC548\uB0B4 -->
  <div class="card">
    <div class="toolbar"><span class="list-title">Provider \uBCC4 \uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>Aligo</b>: \uC54C\uB9AC\uACE0 API \u2192 sy_prop <code>app.sms.api-key</code> (userId), <code>app.sms.api-secret</code> (key)<br>
      <b>CoolSMS</b>: \uC194\uB77CAPI \u2192 sy_prop <code>app.sms.api-key</code>, <code>app.sms.api-secret</code><br>
      <b>NCP</b>: Naver Cloud \u2192 Access Key/Secret \u2192 SMS \uC11C\uBE44\uC2A4 ID \uD544\uC694<br>
      <b>Twilio</b>: AccountSID(api-key), AuthToken(api-secret)<br><br>
      <b>\uBC31\uC5D4\uB4DC API:</b> <code>POST /api/co/ext/sms-send/send</code> \u2192 <code>CoExtSmsSendController \u2192 CmSmsSendService.sendSms()</code>
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.sms." default-prop-key-filter="app.sms" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/all" default-key-filter="app.sms" />
</div>`};
