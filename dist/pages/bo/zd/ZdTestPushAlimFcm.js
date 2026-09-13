window.ZdTestPushAlimFcm={name:"ZdTestPushAlimFcm",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(y){var b;const{reactive:i,onMounted:v}=Vue,l=y.showToast||((b=window.boApp)==null?void 0:b.showToast)||(()=>{}),d=i({fcmProjectId:"",fcmKeyFile:"",apnsEnabled:!1}),a=i({targetType:"token",targetValue:"",title:"[ShopJoy] \uD14C\uC2A4\uD2B8 \uD478\uC2DC ["+new Date().toISOString().replace("T"," ").slice(0,19)+"]",body:"FCM \uC5F0\uB3D9\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uD14C\uC2A4\uD2B8 \uD478\uC2DC\uC785\uB2C8\uB2E4.",imageUrl:"",data:'{"type":"test","url":"/"}'}),t=i({status:"",response:null,error:"",logs:[],tokenLogs:[]}),r=i({loading:!1,loadingTokens:!1}),h=[{key:"targetType",label:"\uB300\uC0C1 \uC720\uD615",type:"select",hint:"targetType",options:[{value:"token",label:"FCM Token (\uB2E8\uAC74)"},{value:"topic",label:"Topic (\uAD6C\uB3C5\uC790)"},{value:"member",label:"\uD68C\uC6D0 ID"}]},{key:"targetValue",label:"\uBC1C\uC1A1 \uB300\uC0C1",hint:"targetValue",type:"slot",name:"target-value",colSpan:2,required:!0},{key:"title",label:"\uC81C\uBAA9",type:"text",hint:"title",colSpan:2},{key:"imageUrl",label:"\uC774\uBBF8\uC9C0 URL (\uC120\uD0DD)",type:"text",hint:"imageUrl",placeholder:"https://\u2026/image.png"},{key:"body",label:"\uBCF8\uBB38",type:"textarea",hint:"body",colSpan:2},{key:"data",label:"Data Payload (JSON)",type:"textarea",hint:"data",colSpan:3,mono:!0}],k=[{key:"memberId",label:"\uD68C\uC6D0 ID"},{key:"platform",label:"\uD50C\uB7AB\uD3FC",align:"center",badge:e=>e.platform==="ANDROID"?"badge badge-green":e.platform==="IOS"?"badge badge-blue":"badge badge-gray"},{key:"_token",label:"\uD1A0\uD070 (\uC55E 30\uC790)",mono:!0,fmt:(e,o)=>(o.fcmToken||"").substring(0,30)+"\u2026"},{key:"regDate",label:"\uB4F1\uB85D\uC77C"},{key:"_action",label:"\uC0AC\uC6A9",width:"60px",align:"center",cellType:"slot",name:"token-action"}];v(async()=>{var e,o,n;try{const s=await((o=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:o.call(e,{propKeys:"app.push.fcm.project-id,app.push.fcm.key-file,app.push.apns.enabled"},"FCM \uD478\uC2DC \uC54C\uB9BC \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),S=((n=s==null?void 0:s.data)==null?void 0:n.data)||[],u=F=>{const m=S.filter(p=>p.propKey===F&&p.propValue),g=m.find(p=>/local|dev/.test(p.propProfile||""))||m[0];return(g==null?void 0:g.propValue)||""};d.fcmProjectId=u("app.push.fcm.project-id"),d.fcmKeyFile=u("app.push.fcm.key-file");const f=u("app.push.apns.enabled");f&&(d.apnsEnabled=f==="true")}catch(s){t.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(s.message||s)}});const c=(e,o="info")=>{t.logs.unshift({msg:e,type:o,time:new Date().toLocaleTimeString()}),t.logs.length>30&&t.logs.pop()},x=async()=>{var o,n;if(!a.targetValue){l("\uD478\uC2DC \uB300\uC0C1\uC744 \uC785\uB825\uD558\uC138\uC694.","error");return}if(!a.title){l("\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694.","error");return}r.loading=!0,t.status="\u23F3 \uD478\uC2DC \uBC1C\uC1A1 \uC911\u2026",t.error="",t.response=null,c("\uD478\uC2DC \uBC1C\uC1A1 \uC694\uCCAD ["+a.targetType+"]: "+a.targetValue.substring(0,30)+"\u2026");let e={};try{e=JSON.parse(a.data||"{}")}catch{}try{const s=await boApi.post("/co/ext/push-fcm-send/send",{targetType:a.targetType,targetValue:a.targetValue,title:a.title,body:a.body,imageUrl:a.imageUrl||void 0,data:e},coUtil.cofApiHdr("FCM \uD478\uC2DC \uD14C\uC2A4\uD2B8","\uD478\uC2DC \uBC1C\uC1A1"));t.response=((o=s.data)==null?void 0:o.data)||s.data,t.status="\u2705 \uD478\uC2DC \uBC1C\uC1A1 \uC644\uB8CC",c("\u2705 \uBC1C\uC1A1 \uC644\uB8CC (messageId: "+(((n=t.response)==null?void 0:n.messageId)||"-")+")","success"),l("FCM \uD478\uC2DC \uBC1C\uC1A1 \uC644\uB8CC","success")}catch(s){t.error=coUtil.cofErrMsg(s,"\uC54C \uC218 \uC5C6\uB294 \uC624\uB958"),t.status="\u274C \uD478\uC2DC \uBC1C\uC1A1 \uC2E4\uD328",c("\u274C \uC2E4\uD328: "+t.error,"error"),l("\uD478\uC2DC \uBC1C\uC1A1 \uC2E4\uD328: "+t.error,"error",0)}r.loading=!1},T=async()=>{var e;r.loadingTokens=!0;try{const o=await boApi.get("/co/ext/push-fcm-send/tokens",coUtil.cofApiHdr("FCM \uD478\uC2DC \uD14C\uC2A4\uD2B8","\uD1A0\uD070 \uBAA9\uB85D"));t.tokenLogs=((e=o.data)==null?void 0:e.data)||[]}catch(o){l("\uD1A0\uD070 \uBAA9\uB85D \uC870\uD68C \uC2E4\uD328: "+coUtil.cofErrMsg(o),"error",0)}r.loadingTokens=!1},w=e=>{a.targetType="token",a.targetValue=e,l("\uD1A0\uD070\uC774 \uC785\uB825\uB780\uC5D0 \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")};return{cfg:d,form:a,result:t,uiState:r,handleBtnAction:(e,o)=>{if(e==="push-send")return x();if(e==="tokens-load")return T();if(e==="token-use")return w(o)},baseFormColumns:h,deviceGridColumns:k}},template:`
<div>
  <div class="page-title">FCM \uD478\uC2DC \uC54C\uB9BC \uD14C\uC2A4\uD2B8</div>

  <!-- \uBC1C\uC1A1 \uD3FC -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uD478\uC2DC \uBC1C\uC1A1</span>
      <div style="margin-left:auto">
        <button class="btn btn_send btn-sm" :disabled="uiState.loading" @click="handleBtnAction('push-send')">
          {{ uiState.loading ? '\u23F3 \uBC1C\uC1A1 \uC911\u2026' : '\u{1F514} \uD14C\uC2A4\uD2B8 FCM \uD478\uC2DC \uBC1C\uC1A1' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="baseFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact>
        <template #target-value>
          <input class="form-control" v-model="form.targetValue"
            :placeholder="form.targetType==='token'?'eXxxxxxx\u2026':form.targetType==='topic'?'all_members':'MB000001'"
            style="font-family:monospace;font-size:12px" />
        </template>
      </bo-form-area>
      <div v-if="result.status" style="margin-top:8px;font-size:13px;font-weight:600">{{ result.status }}</div>
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-top:8px;white-space:pre-wrap">{{ result.error }}</div>
      <div v-if="result.response" style="padding:8px;background:#f0fdf4;border:1px solid #86efac;border-radius:4px;font-size:12px;margin-top:8px">
        <pre style="margin:0">{{ JSON.stringify(result.response, null, 2) }}</pre>
      </div>
    </div>
  </div>

  <!-- \uB514\uBC14\uC774\uC2A4 \uD1A0\uD070 \uBAA9\uB85D -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uB4F1\uB85D\uB41C \uB514\uBC14\uC774\uC2A4 \uD1A0\uD070 (mb_device_token)</span>
      <div style="margin-left:auto">
        <button class="btn btn_search btn-sm" :disabled="uiState.loadingTokens" @click="handleBtnAction('tokens-load')">
          {{ uiState.loadingTokens ? '\u23F3 \uC870\uD68C \uC911\u2026' : '\uD1A0\uD070 \uBAA9\uB85D \uC870\uD68C' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <div v-if="!result.tokenLogs.length" style="color:#999;font-size:12px;text-align:center;padding:16px">
        [\uD1A0\uD070 \uBAA9\uB85D \uC870\uD68C] \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694
      </div>
      <div v-else style="max-height:300px;overflow-y:auto">
        <bo-grid :columns="deviceGridColumns" :rows="result.tokenLogs" :show-row-num="true">
          <template #token-action="{ row }">
            <button class="btn btn_row_edit" @click="handleBtnAction('token-use', row.fcmToken)">\uC120\uD0DD</button>
          </template>
        </bo-grid>
      </div>
    </div>
  </div>

  <!-- \uC774\uB825 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uBC1C\uC1A1 \uC774\uB825 (\uCD5C\uADFC 30\uAC74)</span></div>
    <div style="padding:12px">
      <div v-if="!result.logs.length" style="color:#999;font-size:12px;text-align:center;padding:16px">\uBC1C\uC1A1 \uC774\uB825 \uC5C6\uC74C</div>
      <div v-for="log in result.logs" :key="log.time" style="display:flex;gap:8px;font-size:12px;padding:4px 0;border-bottom:1px solid #f0f0f0">
        <span style="color:#999;white-space:nowrap">{{ log.time }}</span>
        <span :style="log.type==='error'?'color:#b91c1c':log.type==='success'?'color:#15803d':''">{{ log.msg }}</span>
      </div>
    </div>
  </div>

  <!-- \uC548\uB0B4 -->
  <div class="card">
    <div class="toolbar"><span class="list-title">FCM \uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>1.</b> Firebase Console \u2192 \uD504\uB85C\uC81D\uD2B8 \uC124\uC815 \u2192 \uC11C\uBE44\uC2A4 \uACC4\uC815 \u2192 \uC0C8 \uBE44\uACF5\uAC1C \uD0A4 \uC0DD\uC131 (JSON \uB2E4\uC6B4\uB85C\uB4DC)<br>
      <b>2.</b> JSON \uD30C\uC77C\uC744 \uC11C\uBC84\uC5D0 \uC800\uC7A5 (\uC608: <code>/etc/shopjoy/fcm-service-account.json</code>)<br>
      <b>3.</b> sy_prop <code>app.push.fcm.project-id</code> = Firebase \uD504\uB85C\uC81D\uD2B8 ID<br>
      <b>4.</b> sy_prop <code>app.push.fcm.key-file</code> = \uC11C\uBE44\uC2A4 \uACC4\uC815 JSON \uD30C\uC77C \uACBD\uB85C<br>
      <b>5.</b> \uC571\uC5D0\uC11C FCM \uD1A0\uD070 \uBC1C\uAE09 \u2192 <code>mb_device_token</code> \uC800\uC7A5 \u2192 \uC704 \uD1A0\uD070 \uBAA9\uB85D \uC870\uD68C<br><br>
      <b>\uBC31\uC5D4\uB4DC API:</b> <code>POST /api/co/ext/push-fcm-send/send</code> \u2192 <code>CoExtPushFcmSendController</code> (FCM \uC2DC\uBBAC\uB808\uC774\uC158)<br>
      <code>GET /api/co/ext/push-fcm-send/tokens</code> \u2192 <code>mb_device_token</code> \uC870\uD68C
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.push.fcm." default-prop-key-filter="app.push.fcm" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/all" default-key-filter="app.push.fcm" />
</div>`};
