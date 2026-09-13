window.ZdTestAiChatbot={name:"ZdTestAiChatbot",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(h){var f;const{reactive:r,onMounted:A,nextTick:k}=Vue,c=h.showToast||((f=window.boApp)==null?void 0:f.showToast)||(()=>{}),o=r({provider:"openai",openaiApiKey:"",openaiModel:"gpt-4o-mini",claudeApiKey:"",claudeModel:"claude-sonnet-4-6",systemPrompt:"\uB2F9\uC2E0\uC740 ShopJoy \uC1FC\uD551\uBAB0\uC758 \uCE5C\uC808\uD55C AI \uACE0\uAC1D \uC0C1\uB2F4\uC6D0\uC785\uB2C8\uB2E4. \uC0C1\uD488, \uC8FC\uBB38, \uBC30\uC1A1, \uBC18\uD488\uC5D0 \uAD00\uD55C \uC9C8\uBB38\uC5D0 \uAC04\uACB0\uD558\uAC8C \uB2F5\uBCC0\uD558\uC138\uC694.",maxTokens:512,temperature:.7}),l=r({userMsg:""}),t=r({messages:[],status:"",error:"",usage:null}),u=r({loading:!1}),w=[{key:"provider",label:"Provider",type:"select",hint:"provider",options:[{value:"openai",label:"OpenAI (GPT)"},{value:"claude",label:"Anthropic (Claude)"}]},{key:"openaiApiKey",label:"OpenAI API Key",type:"text",hint:"openaiApiKey",placeholder:"sk-\u2026",visible:e=>e.provider==="openai"},{key:"openaiModel",label:"\uBAA8\uB378 (OpenAI)",type:"text",hint:"openaiModel",placeholder:"gpt-4o-mini",visible:e=>e.provider==="openai"},{key:"claudeApiKey",label:"Anthropic API Key",type:"text",hint:"claudeApiKey",placeholder:"sk-ant-\u2026",visible:e=>e.provider==="claude"},{key:"claudeModel",label:"\uBAA8\uB378 (Claude)",type:"text",hint:"claudeModel",placeholder:"claude-sonnet-4-6",visible:e=>e.provider==="claude"},{key:"systemPrompt",label:"System Prompt",type:"textarea",hint:"systemPrompt",colSpan:3},{key:"maxTokens",label:"Max Tokens",type:"number",hint:"maxTokens"},{key:"temperature",label:"Temperature",type:"number",hint:"temperature"}];A(async()=>{var e,i,p;try{const a=await((i=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:i.call(e,{propKeys:"app.ai.openai.api-key,app.ai.openai.model,app.ai.claude.api-key,app.ai.claude.model"},"AI \uCC57\uBD07 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),s=((p=a==null?void 0:a.data)==null?void 0:p.data)||[],n=I=>{const v=s.filter(d=>d.propKey===I&&d.propValue),m=v.find(d=>/local|dev/.test(d.propProfile||""))||v[0];return(m==null?void 0:m.propValue)||""};o.openaiApiKey=n("app.ai.openai.api-key"),o.claudeApiKey=n("app.ai.claude.api-key");const x=n("app.ai.openai.model");x&&(o.openaiModel=x);const b=n("app.ai.claude.model");b&&(o.claudeModel=b)}catch(a){t.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(a.message||a)}});const y=()=>{k(()=>{const e=document.getElementById("zd-chat-messages");e&&(e.scrollTop=e.scrollHeight)})},g=async()=>{var i;if(!l.userMsg.trim())return;const e=l.userMsg.trim();l.userMsg="",t.messages.push({role:"user",content:e,time:new Date().toLocaleTimeString()}),y(),u.loading=!0,t.status="\u23F3 AI \uC751\uB2F5 \uB300\uAE30 \uC911\u2026",t.error="";try{const a=((i=(await boApi.post("/co/ext/ai-chat/chat",{provider:o.provider,model:o.provider==="openai"?o.openaiModel:o.claudeModel,systemPrompt:o.systemPrompt,messages:t.messages.filter(s=>s.role!=="system").map(s=>({role:s.role,content:s.content})),maxTokens:o.maxTokens,temperature:o.temperature},coUtil.cofApiHdr("AI \uCC57\uBD07 \uD14C\uC2A4\uD2B8","\uBA54\uC2DC\uC9C0 \uC804\uC1A1"))).data)==null?void 0:i.data)||{};t.messages.push({role:"assistant",content:a.content||"(\uC751\uB2F5 \uC5C6\uC74C)",time:new Date().toLocaleTimeString()}),t.usage=a.usage||null,t.status="\u2705 \uC751\uB2F5 \uC644\uB8CC",y()}catch(p){t.error=coUtil.cofErrMsg(p,"\uC624\uB958 \uBC1C\uC0DD"),t.messages.push({role:"system",content:"\u274C "+t.error,time:new Date().toLocaleTimeString()}),t.status="\u274C \uC624\uB958",c(t.error,"error",0),y()}u.loading=!1},M=()=>{t.messages=[],t.usage=null,t.status="",t.error=""},K=async()=>{try{await boApi.put("/bo/sy/prop/bulk",[{propKey:"app.ai.openai.api-key",propValue:o.openaiApiKey},{propKey:"app.ai.openai.model",propValue:o.openaiModel},{propKey:"app.ai.claude.api-key",propValue:o.claudeApiKey},{propKey:"app.ai.claude.model",propValue:o.claudeModel}],coUtil.cofApiHdr("AI \uCC57\uBD07 \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),c("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){c(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:o,form:l,result:t,uiState:u,handleBtnAction:e=>{if(e==="send")return g();if(e==="clear")return M();if(e==="key-save")return K()},onKeydown:e=>{e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),g())},cfgFormColumns:w}},template:`
<div>
  <div class="page-title">AI \uCC57\uBD07 \uD14C\uC2A4\uD2B8</div>

  <!-- AI \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">AI \uC124\uC815</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div class="form-actions" style="justify-content:flex-start;margin-top:8px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('key-save')">sy_prop \uC800\uC7A5</button>
      </div>
    </div>
  </div>

  <!-- \uCC44\uD305 \uCC3D -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uCC44\uD305</span>
      <div style="margin-left:auto;display:flex;align-items:center;gap:8px">
        <span v-if="result.usage" style="font-size:11px;color:#888">
          \uD1A0\uD070: \uC785\uB825 {{ result.usage.promptTokens || result.usage.input_tokens || '-' }} / \uCD9C\uB825 {{ result.usage.completionTokens || result.usage.output_tokens || '-' }}
        </span>
        <button class="btn btn_reset btn-sm" @click="handleBtnAction('clear')">\uB300\uD654 \uCD08\uAE30\uD654</button>
      </div>
    </div>
    <div style="padding:12px">
      <!-- \uBA54\uC2DC\uC9C0 \uBAA9\uB85D -->
      <div id="zd-chat-messages" style="height:360px;overflow-y:auto;border:1px solid #e5e7eb;border-radius:6px;padding:12px;background:#fafafa;display:flex;flex-direction:column;gap:8px;margin-bottom:8px">
        <div v-if="!result.messages.length" style="color:#999;font-size:12px;text-align:center;margin:auto">
          \uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC5EC AI \uC640 \uB300\uD654\uB97C \uC2DC\uC791\uD558\uC138\uC694
        </div>
        <div v-for="(m, idx) in result.messages" :key="idx"
          :style="m.role==='user'?'align-self:flex-end':m.role==='system'?'align-self:center':'align-self:flex-start'">
          <div :style="m.role==='user'?'background:#2563eb;color:#fff;border-radius:12px 12px 2px 12px;padding:8px 12px;max-width:420px;font-size:13px;white-space:pre-wrap':m.role==='system'?'background:#fef9c3;color:#92400e;border-radius:6px;padding:6px 10px;font-size:11px':' background:#fff;border:1px solid #e5e7eb;border-radius:2px 12px 12px 12px;padding:8px 12px;max-width:480px;font-size:13px;white-space:pre-wrap'">
            {{ m.content }}
          </div>
          <div style="font-size:10px;color:#bbb;margin-top:2px;text-align:right">{{ m.time }}</div>
        </div>
        <div v-if="uiState.loading" style="align-self:flex-start">
          <div style="background:#fff;border:1px solid #e5e7eb;border-radius:2px 12px 12px 12px;padding:8px 12px;font-size:13px;color:#888">
            \u23F3 \uC0DD\uAC01 \uC911\u2026
          </div>
        </div>
      </div>
      <!-- \uC785\uB825\uCC3D -->
      <div style="display:flex;gap:6px">
        <textarea class="form-control" v-model="form.userMsg" rows="2"
          placeholder="\uBA54\uC2DC\uC9C0 \uC785\uB825 (Enter: \uC804\uC1A1 / Shift+Enter: \uC904\uBC14\uAFC8)"
          style="flex:1;font-size:13px;resize:none"
          @keydown="onKeydown" :disabled="uiState.loading"></textarea>
        <button class="btn btn_send btn-sm" style="align-self:flex-end" :disabled="uiState.loading || !form.userMsg.trim()" @click="handleBtnAction('send')">
          \uC804\uC1A1
        </button>
      </div>
    </div>
  </div>

  <!-- \uC548\uB0B4 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>OpenAI:</b> platform.openai.com \u2192 API Keys \u2192 sy_prop <code>app.ai.openai.api-key</code><br>
      <b>Claude:</b> console.anthropic.com \u2192 API Keys \u2192 sy_prop <code>app.ai.claude.api-key</code><br><br>
      <b>\uBC31\uC5D4\uB4DC API:</b> <code>POST /api/co/ext/ai-chat/chat</code><br>
      provider=openai \u2192 OpenAI Chat Completions API \uD504\uB85D\uC2DC<br>
      provider=claude \u2192 Anthropic Messages API \uD504\uB85D\uC2DC (API \uD0A4 \uC11C\uBC84 \uBCF4\uAD00, CORS \uC6B0\uD68C)
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.ai." default-prop-key-filter="app.ai" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/all" default-key-filter="app.ai" />
</div>`};
