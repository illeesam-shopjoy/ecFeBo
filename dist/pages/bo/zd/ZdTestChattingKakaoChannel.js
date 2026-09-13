window.ZdTestChattingKakaoChannel={name:"ZdTestChattingKakaoChannel",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(b){var k;const{reactive:p,onMounted:f}=Vue,l=b.showToast||((k=window.boApp)==null?void 0:k.showToast)||(()=>{}),t=p({channelId:"",bizMsgApiKey:"",senderKey:"",from:""}),o=p({msgType:"alimtalk",toPhone:"01038050206",templateCode:"",variables:'{"name":"\uC1A1\uC131\uC77C","orderNo":"ORD20260619001","amount":"150,000"}',content:""}),a=p({status:"",response:null,error:"",logs:[]}),c=p({loading:!1});f(async()=>{var e,n,s;try{const r=await((n=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:n.call(e,{propKeys:"app.kakao.channel-id,app.kakao.biz-msg-api-key,app.kakao.sender-key,app.kakao.from"},"\uCE74\uCE74\uC624 \uCC44\uB110 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),h=((s=r==null?void 0:r.data)==null?void 0:s.data)||[],i=x=>{const g=h.filter(d=>d.propKey===x&&d.propValue),m=g.find(d=>/local|dev/.test(d.propProfile||""))||g[0];return(m==null?void 0:m.propValue)||""};t.channelId=i("app.kakao.channel-id"),t.bizMsgApiKey=i("app.kakao.biz-msg-api-key"),t.senderKey=i("app.kakao.sender-key"),t.from=i("app.kakao.from")}catch(r){a.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(r.message||r)}});const y=(e,n="info")=>{a.logs.unshift({msg:e,type:n,time:new Date().toLocaleTimeString()}),a.logs.length>20&&a.logs.pop()},u=async()=>{var n;if(o.msgType!=="channel_add"&&!o.toPhone){l("\uC218\uC2E0 \uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}c.loading=!0,a.status="\u23F3 \uBC1C\uC1A1 \uC911\u2026",a.error="",a.response=null;let e={};try{e=JSON.parse(o.variables||"{}")}catch{}y("["+o.msgType+"] \uBC1C\uC1A1 \uC694\uCCAD \u2192 "+(o.toPhone||o.templateCode));try{const s=await boApi.post("/co/ext/kakao-send/send",{msgType:o.msgType,toPhone:o.toPhone,templateCode:o.templateCode,variables:e,content:o.content},coUtil.cofApiHdr("\uCE74\uCE74\uC624\uCC44\uB110 \uD14C\uC2A4\uD2B8","\uBC1C\uC1A1"));a.response=((n=s.data)==null?void 0:n.data)||s.data,a.status="\u2705 \uBC1C\uC1A1 \uC644\uB8CC",y("\u2705 \uC644\uB8CC","success"),l("\uBC1C\uC1A1 \uC644\uB8CC","success")}catch(s){a.error=coUtil.cofErrMsg(s,"\uBC1C\uC1A1 \uC2E4\uD328"),a.status="\u274C \uBC1C\uC1A1 \uC2E4\uD328",y("\u274C "+a.error,"error"),l(a.error,"error",0)}c.loading=!1},v=async()=>{try{await boApi.put("/bo/sy/prop/bulk",[{propKey:"app.kakao.channel-id",propValue:t.channelId},{propKey:"app.kakao.biz-msg-api-key",propValue:t.bizMsgApiKey},{propKey:"app.kakao.sender-key",propValue:t.senderKey},{propKey:"app.kakao.from",propValue:t.from}],coUtil.cofApiHdr("\uCE74\uCE74\uC624\uCC44\uB110 \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),l("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){l(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:t,form:o,result:a,uiState:c,handleBtnAction:e=>{if(e==="send")return u();if(e==="key-save")return v()},cfgFormColumns:[{key:"channelId",label:"\uCC44\uB110 \uACF5\uAC1C ID",type:"text",placeholder:"@shopjoy",hint:"app.kakao.channel-id",mono:!0},{key:"from",label:"\uBC1C\uC2E0 \uBC88\uD638 (\uC0AC\uC804 \uB4F1\uB85D)",type:"text",placeholder:"0212345678",hint:"app.kakao.from"},{key:"bizMsgApiKey",label:"\uBE44\uC988\uBA54\uC2DC\uC9C0 API Key",type:"text",placeholder:"sy_prop: app.kakao.biz-msg-api-key",hint:"app.kakao.biz-msg-api-key",mono:!0},{key:"senderKey",label:"\uBC1C\uC2E0 \uD504\uB85C\uD544 \uD0A4 (Sender Key)",type:"text",placeholder:"sy_prop: app.kakao.sender-key",hint:"app.kakao.sender-key",mono:!0}],msgFormColumns:[{key:"msgType",label:"\uBA54\uC2DC\uC9C0 \uC720\uD615",type:"select",options:[{value:"alimtalk",label:"\uC54C\uB9BC\uD1A1 (Alimtalk)"},{value:"friendtalk",label:"\uCE5C\uAD6C\uD1A1 (Friendtalk)"},{value:"channel_add",label:"\uCC44\uB110 \uCD94\uAC00 \uC694\uCCAD"}],hint:"msgType"},{key:"toPhone",label:"\uC218\uC2E0 \uBC88\uD638",type:"text",placeholder:"01012345678",hint:"toPhone"},{key:"templateCode",label:"\uD15C\uD50C\uB9BF \uCF54\uB4DC",type:"text",placeholder:"ORDER_CONFIRM_01",mono:!0,hint:"templateCode",visible:e=>e.msgType==="alimtalk"},{key:"variables",label:"\uBCC0\uC218 (JSON)",type:"text",placeholder:'{"name":"\uD64D\uAE38\uB3D9"}',mono:!0,hint:"variables",visible:e=>e.msgType==="alimtalk"},{key:"content",label:"\uBA54\uC2DC\uC9C0 \uB0B4\uC6A9",type:"textarea",colSpan:3,placeholder:"\uCE5C\uAD6C\uD1A1 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694. (\uCD5C\uB300 1000\uC790)",visible:e=>e.msgType==="friendtalk",hint:"content"}]}},template:`
<div>
  <div class="page-title">\uCE74\uCE74\uC624 \uCC44\uB110(\uC54C\uB9BC\uD1A1/\uCE5C\uAD6C\uD1A1) \uD14C\uC2A4\uD2B8</div>

  <!-- \uD0A4 \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uCE74\uCE74\uC624 \uBE44\uC988\uBA54\uC2DC\uC9C0 \uC124\uC815</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div class="form-actions" style="justify-content:flex-start;margin-top:8px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('key-save')">sy_prop \uC800\uC7A5</button>
      </div>
    </div>
  </div>

  <!-- \uBC1C\uC1A1 \uD3FC -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1</span>
      <div style="margin-left:auto">
        <button class="btn btn_send btn-sm" :disabled="uiState.loading" @click="handleBtnAction('send')">
          {{ uiState.loading ? '\u23F3 \uBC1C\uC1A1 \uC911\u2026' : '\u{1F4AC} \uBC1C\uC1A1' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="msgFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div v-if="form.msgType==='channel_add'" style="padding:8px;background:#f0f4ff;border-radius:4px;font-size:12px;color:#444;margin-top:8px">
        \uCC44\uB110 \uCD94\uAC00 \uC694\uCCAD \uBA54\uC2DC\uC9C0\uB97C \uBC1C\uC1A1\uD569\uB2C8\uB2E4. \uCC44\uB110 ID: <b>{{ cfg.channelId || '(\uBBF8\uC124\uC815)' }}</b>
      </div>
      <div v-if="result.status" style="margin-top:8px;font-size:13px;font-weight:600">{{ result.status }}</div>
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-top:8px">{{ result.error }}</div>
      <div v-if="result.response" style="padding:8px;background:#f0fdf4;border:1px solid #86efac;border-radius:4px;font-size:12px;margin-top:8px">
        <pre style="margin:0">{{ JSON.stringify(result.response, null, 2) }}</pre>
      </div>
    </div>
  </div>

  <!-- \uC774\uB825 -->
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

  <!-- \uC548\uB0B4 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>1.</b> \uCE74\uCE74\uC624 \uBE44\uC988\uB2C8\uC2A4 \uCC44\uB110 \uAC1C\uC124 \u2192 \uCE74\uCE74\uC624 \uBE44\uC988\uBA54\uC2DC\uC9C0 \uD30C\uD2B8\uB108\uC0AC \uB4F1\uB85D<br>
      <b>2.</b> \uC54C\uB9BC\uD1A1 \uBC1C\uC2E0 \uD504\uB85C\uD544 \uB4F1\uB85D \u2192 Sender Key \uBC1C\uAE09<br>
      <b>3.</b> \uC54C\uB9BC\uD1A1 \uD15C\uD50C\uB9BF \uB4F1\uB85D \u2192 \uAC80\uC218 \uC644\uB8CC \uD6C4 \uC0AC\uC6A9 \uAC00\uB2A5<br>
      <b>4.</b> \uBE44\uC988\uBA54\uC2DC\uC9C0 API Key \uBC1C\uAE09 (\uD30C\uD2B8\uB108\uC0AC \uD3EC\uD138)<br><br>
      <b>\uBC31\uC5D4\uB4DC API:</b> <code>POST /api/co/ext/kakao-send/send</code> \u2192 <code>CoExtKakaoSendController \u2192 CmKakaoSendService.sendKakao()</code><br>
      \u2192 <code>CmKakaoSendService</code> \uACBD\uC720 (\uC54C\uB9BC\uD1A1/\uCE5C\uAD6C\uD1A1/\uCC44\uB110\uCD94\uAC00 \uBD84\uAE30)
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.kakao." default-prop-key-filter="app.kakao" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/kakao" default-key-filter="app.kakao" />
</div>`};
