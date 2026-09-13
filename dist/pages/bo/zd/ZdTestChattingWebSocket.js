window.ZdTestChattingWebSocket={name:"ZdTestChattingWebSocket",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(b){var m;const{reactive:d,onMounted:u,onUnmounted:f,nextTick:y}=Vue,l=b.showToast||((m=window.boApp)==null?void 0:m.showToast)||(()=>{}),o=d({wsUrl:(window.location.protocol==="https:"?"wss":"ws")+"://"+window.location.hostname+":8080/ws/chat",roomId:"TEST_ROOM_001",senderId:"admin-dev-test"}),a=d({msg:""}),t=d({connected:!1,messages:[],status:"\uBBF8\uC5F0\uACB0",error:"",pingTime:null,pingMs:null}),c=d({connecting:!1});let n=null;u(async()=>{o.wsUrl=(window.location.protocol==="https:"?"wss":"ws")+"://"+window.location.hostname+":8080/ws/chat"}),f(()=>{p()});const s=(e,r="info")=>{t.messages.unshift({msg:e,type:r,time:new Date().toLocaleTimeString()}),t.messages.length>100&&t.messages.pop()},i=()=>{y(()=>{const e=document.getElementById("zd-ws-messages");e&&(e.scrollTop=e.scrollHeight)})},v=()=>{if((n==null?void 0:n.readyState)===WebSocket.OPEN){l("\uC774\uBBF8 \uC5F0\uACB0\uB428","success");return}c.connecting=!0,t.status="\u23F3 \uC5F0\uACB0 \uC911\u2026",t.error="",s("\u{1F50C} WebSocket \uC5F0\uACB0 \uC2DC\uB3C4: "+o.wsUrl);try{n=new WebSocket(o.wsUrl),n.onopen=()=>{t.connected=!0,t.status="\u2705 \uC5F0\uACB0\uB428",c.connecting=!1,s("\u2705 \uC5F0\uACB0 \uC131\uACF5 (roomId: "+o.roomId+")","success"),n.send(JSON.stringify({type:"JOIN",roomId:o.roomId,senderId:o.senderId})),l("WebSocket \uC5F0\uACB0 \uC131\uACF5","success"),i()},n.onmessage=e=>{let r=e.data;try{r=JSON.parse(e.data)}catch{}(r==null?void 0:r.type)==="PONG"&&t.pingTime?(t.pingMs=Date.now()-t.pingTime,t.pingTime=null,s("\u{1F3D3} PONG \u2014 RTT: "+t.pingMs+"ms","success")):s("\u{1F4E9} \uC218\uC2E0: "+(typeof r=="string"?r:JSON.stringify(r))),i()},n.onerror=e=>{t.error="WebSocket \uC624\uB958 \uBC1C\uC0DD",t.status="\u274C \uC624\uB958",c.connecting=!1,s("\u274C \uC624\uB958: "+(e.message||"connection error"),"error"),i()},n.onclose=e=>{t.connected=!1,t.status="\uBBF8\uC5F0\uACB0 (code: "+e.code+")",c.connecting=!1,s("\u{1F534} \uC5F0\uACB0 \uC885\uB8CC (code: "+e.code+", reason: "+(e.reason||"-")+")","error"),n=null,i()}}catch(e){t.error=e.message,t.status="\u274C \uC5F0\uACB0 \uC2E4\uD328",c.connecting=!1,s("\u274C \uC5F0\uACB0 \uC2E4\uD328: "+e.message,"error")}},p=()=>{n&&(n.close(1e3,"\uD14C\uC2A4\uD2B8 \uC885\uB8CC"),n=null)},g=()=>{if(!n||n.readyState!==WebSocket.OPEN){l("\uBA3C\uC800 \uC5F0\uACB0\uD558\uC138\uC694.","error");return}if(!a.msg.trim())return;const e=JSON.stringify({type:"CHAT",roomId:o.roomId,senderId:o.senderId,content:a.msg.trim()});n.send(e),s("\u{1F4E4} \uC804\uC1A1: "+a.msg.trim(),"sent"),a.msg="",i()},w=()=>{if(!n||n.readyState!==WebSocket.OPEN){l("\uBA3C\uC800 \uC5F0\uACB0\uD558\uC138\uC694.","error");return}t.pingTime=Date.now(),n.send(JSON.stringify({type:"PING",senderId:o.senderId})),s("\u{1F3D3} PING \uC804\uC1A1\u2026")},h=()=>{t.messages=[]};return{cfg:o,form:a,result:t,uiState:c,handleBtnAction:e=>{if(e==="connect")return v();if(e==="disconnect")return p();if(e==="send")return g();if(e==="ping")return w();if(e==="clear")return h()},onKeydown:e=>{e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),g())},cfgFormColumns:[{key:"wsUrl",label:"WebSocket URL",type:"text",colSpan:3,mono:!0,placeholder:"ws://localhost:8080/ws/chat",hint:"wsUrl",readonly:e=>!!t.connected},{key:"roomId",label:"Room ID",type:"text",placeholder:"ROOM001",hint:"roomId",readonly:e=>!!t.connected},{key:"senderId",label:"Sender ID",type:"text",placeholder:"admin-test",hint:"senderId",readonly:e=>!!t.connected}]}},template:`
<div>
  <div class="page-title">WebSocket \uCC44\uD305 \uC5F0\uACB0 \uD14C\uC2A4\uD2B8</div>

  <!-- \uC5F0\uACB0 \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uC5F0\uACB0 \uC124\uC815</span>
      <div style="margin-left:auto;display:flex;align-items:center;gap:6px">
        <span class="badge" :class="result.connected?'badge-green':'badge-gray'">
          {{ result.connected ? '\u25CF \uC5F0\uACB0\uB428' : '\u25CB \uBBF8\uC5F0\uACB0' }}
        </span>
        <button v-if="!result.connected" class="btn btn_apply btn-sm" :disabled="uiState.connecting" @click="handleBtnAction('connect')">
          {{ uiState.connecting ? '\u23F3 \uC5F0\uACB0 \uC911\u2026' : '\u{1F50C} \uC5F0\uACB0' }}
        </button>
        <button v-else class="btn btn_cancel btn-sm" @click="handleBtnAction('disconnect')">\uC5F0\uACB0 \uD574\uC81C</button>
        <button class="btn btn_confirm btn-sm" :disabled="!result.connected" @click="handleBtnAction('ping')">\u{1F3D3} Ping</button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div style="font-size:12px;color:#666;padding:6px 8px;background:#f8f9fa;border-radius:4px;margin-top:8px">
        \uC0C1\uD0DC: <strong>{{ result.status }}</strong>
        <span v-if="result.pingMs" style="margin-left:12px;color:#15803d">RTT: {{ result.pingMs }}ms</span>
      </div>
    </div>
  </div>

  <!-- \uBA54\uC2DC\uC9C0 \uB85C\uADF8 + \uC785\uB825 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uBA54\uC2DC\uC9C0 \uB85C\uADF8</span>
      <div style="margin-left:auto">
        <button class="btn btn_reset btn-sm" @click="handleBtnAction('clear')">\uB85C\uADF8 \uC9C0\uC6B0\uAE30</button>
      </div>
    </div>
    <div style="padding:12px">
      <div id="zd-ws-messages" style="height:300px;overflow-y:auto;border:1px solid #e5e7eb;border-radius:6px;padding:10px;background:#111;font-family:monospace;font-size:12px;display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
        <div v-if="!result.messages.length" style="color:#666;text-align:center;margin:auto">\uC5F0\uACB0 \uD6C4 \uBA54\uC2DC\uC9C0\uAC00 \uC5EC\uAE30 \uD45C\uC2DC\uB429\uB2C8\uB2E4</div>
        <div v-for="(m, idx) in [...result.messages].reverse()" :key="idx"
          :style="m.type==='error'?'color:#f87171':m.type==='success'?'color:#4ade80':m.type==='sent'?'color:#60a5fa':'color:#d1d5db'">
          <span style="color:#6b7280">[{{ m.time }}]</span> {{ m.msg }}
        </div>
      </div>
      <div style="display:flex;gap:6px">
        <input class="form-control" v-model="form.msg"
          placeholder="\uBA54\uC2DC\uC9C0 \uC785\uB825 (Enter: \uC804\uC1A1)"
          :disabled="!result.connected"
          @keydown="onKeydown" />
        <button class="btn btn_send btn-sm" :disabled="!result.connected || !form.msg.trim()" @click="handleBtnAction('send')">\uC804\uC1A1</button>
      </div>
    </div>
  </div>

  <!-- \uC548\uB0B4 -->
  <div class="card">
    <div class="toolbar"><span class="list-title">\uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>\uBC31\uC5D4\uB4DC WebSocket \uC5D4\uB4DC\uD3EC\uC778\uD2B8:</b> <code>ws://localhost:8080/ws/chat</code><br>
      Spring Boot WebSocket \uC124\uC815: <code>@EnableWebSocket</code> + <code>WebSocketConfigurer</code><br>
      \uB610\uB294 STOMP: <code>@EnableWebSocketMessageBroker</code> + SockJS \uACBD\uB85C <code>/ws</code><br><br>
      <b>\uBA54\uC2DC\uC9C0 \uD615\uC2DD:</b>
      <pre style="background:#f8f9fa;padding:8px;border-radius:4px;font-size:11px;margin-top:4px">{ "type": "JOIN|CHAT|PING|LEAVE", "roomId": "...", "senderId": "...", "content": "..." }</pre>
      <b>\uCC44\uD305 \uC11C\uBE44\uC2A4 \uD655\uC778:</b> BO \u2192 \uACE0\uAC1D\uC13C\uD130 \u2192 \uCC44\uD305\uAD00\uB9AC (CmChattMng) \uC5D0\uC11C \uC2E4 \uCC44\uD305 \uB370\uC774\uD130 \uD655\uC778
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.websocket.,app.chat." default-prop-key-filter="app.websocket" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/all" default-key-filter="app.websocket" />
</div>`};
