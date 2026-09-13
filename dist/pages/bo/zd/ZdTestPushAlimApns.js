window.ZdTestPushAlimApns={name:"ZdTestPushAlimApns",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(f){var b;const{reactive:r,onMounted:v}=Vue,l=f.showToast||((b=window.boApp)==null?void 0:b.showToast)||(()=>{}),a=r({keyId:"",teamId:"",keyFile:"",bundleId:"",production:!1}),n=r({deviceToken:"",title:"[ShopJoy] APNs \uD14C\uC2A4\uD2B8 ["+new Date().toISOString().replace("T"," ").slice(0,19)+"]",body:"APNs \uC5F0\uB3D9\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uD14C\uC2A4\uD2B8 \uD478\uC2DC\uC785\uB2C8\uB2E4.",badge:1,sound:"default",data:'{"type":"test","url":"/"}'}),t=r({status:"",response:null,error:"",logs:[],tokenLogs:[]}),p=r({loading:!1,loadingTokens:!1}),h=[{key:"keyId",label:"Key ID (10\uC790\uB9AC)",type:"text",hint:"keyId",placeholder:"ABCD1234EF",mono:!0},{key:"teamId",label:"Team ID (10\uC790\uB9AC)",type:"text",hint:"teamId",placeholder:"AB12CD34EF",mono:!0},{key:"bundleId",label:"Bundle ID",type:"text",hint:"bundleId",placeholder:"com.shopjoy.app",mono:!0},{key:"keyFile",label:".p8 Key \uD30C\uC77C \uACBD\uB85C",type:"text",hint:"keyFile",placeholder:"/etc/shopjoy/AuthKey_ABCD1234EF.p8",mono:!0,colSpan:2},{key:"production",label:"\uD658\uACBD",type:"select",hint:"production",options:[{value:!1,label:"Sandbox (\uAC1C\uBC1C)"},{value:!0,label:"Production (\uC6B4\uC601)"}]}],k=[{key:"label",label:"\uD56D\uBAA9",width:"160px",cellStyle:"color:#555"},{key:"value",label:"\uAC12",cellType:"slot",name:"cfg-value"}],x=[{label:"Key ID",cfgKey:"keyId"},{label:"Team ID",cfgKey:"teamId"},{label:"Bundle ID",cfgKey:"bundleId"},{label:"\uD658\uACBD",cfgKey:"production",isBadge:!0}],A=[{key:"deviceToken",label:"iOS Device Token",type:"text",hint:"deviceToken",placeholder:"a1b2c3d4e5f6\u2026(64\uC790 hex)",mono:!0,colSpan:3,required:!0},{key:"title",label:"\uC81C\uBAA9",type:"text",hint:"title",colSpan:2},{key:"badge",label:"Badge",type:"number",hint:"badge"},{key:"body",label:"\uBCF8\uBB38",type:"textarea",hint:"body",colSpan:2},{key:"sound",label:"Sound",type:"text",hint:"sound",placeholder:"default"},{key:"data",label:"Custom Data (JSON)",type:"textarea",hint:"data",colSpan:3,mono:!0}],w=[{key:"memberId",label:"\uD68C\uC6D0 ID"},{key:"_token",label:"\uD1A0\uD070 (\uC55E 20\uC790)",mono:!0,fmt:(e,o)=>(o.fcmToken||o.apnsToken||"").substring(0,20)+"\u2026"},{key:"regDate",label:"\uB4F1\uB85D\uC77C"},{key:"_action",label:"\uC0AC\uC6A9",width:"60px",align:"center",cellType:"slot",name:"token-action"}];v(async()=>{var e,o,i;try{const s=await((o=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:o.call(e,{propKeys:"app.push.apns.key-id,app.push.apns.team-id,app.push.apns.key-file,app.push.apns.bundle-id,app.push.apns.production"},"APNs \uD478\uC2DC \uC54C\uB9BC \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),N=((i=s==null?void 0:s.data)==null?void 0:i.data)||[],d=D=>{const m=N.filter(c=>c.propKey===D&&c.propValue),y=m.find(c=>/local|dev/.test(c.propProfile||""))||m[0];return(y==null?void 0:y.propValue)||""};a.keyId=d("app.push.apns.key-id"),a.teamId=d("app.push.apns.team-id"),a.keyFile=d("app.push.apns.key-file"),a.bundleId=d("app.push.apns.bundle-id");const g=d("app.push.apns.production");g&&(a.production=g==="true")}catch(s){t.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(s.message||s)}});const u=(e,o="info")=>{t.logs.unshift({msg:e,type:o,time:new Date().toLocaleTimeString()}),t.logs.length>30&&t.logs.pop()},S=async()=>{var o,i;if(!n.deviceToken){l("Device Token \uC744 \uC785\uB825\uD558\uC138\uC694.","error");return}p.loading=!0,t.status="\u23F3 APNs \uD478\uC2DC \uBC1C\uC1A1 \uC911\u2026",t.error="",t.response=null,u("APNs \uBC1C\uC1A1 \uC694\uCCAD \u2192 "+n.deviceToken.substring(0,20)+"\u2026");let e={};try{e=JSON.parse(n.data||"{}")}catch{}try{const s=await boApi.post("/co/ext/push-apns-send/send",{deviceToken:n.deviceToken,title:n.title,body:n.body,badge:n.badge,sound:n.sound,data:e},coUtil.cofApiHdr("APNs \uD14C\uC2A4\uD2B8","\uD478\uC2DC \uBC1C\uC1A1"));t.response=((o=s.data)==null?void 0:o.data)||s.data,t.status="\u2705 APNs \uBC1C\uC1A1 \uC644\uB8CC",u("\u2705 \uBC1C\uC1A1 \uC644\uB8CC (apnsId: "+(((i=t.response)==null?void 0:i.apnsId)||"-")+")","success"),l("APNs \uD478\uC2DC \uBC1C\uC1A1 \uC644\uB8CC","success")}catch(s){t.error=coUtil.cofErrMsg(s,"\uC54C \uC218 \uC5C6\uB294 \uC624\uB958"),t.status="\u274C \uBC1C\uC1A1 \uC2E4\uD328",u("\u274C "+t.error,"error"),l("APNs \uBC1C\uC1A1 \uC2E4\uD328: "+t.error,"error",0)}p.loading=!1},T=async()=>{var e;p.loadingTokens=!0;try{const o=await boApi.get("/co/ext/push-apns-send/tokens",coUtil.cofApiHdr("APNs \uD14C\uC2A4\uD2B8","iOS \uD1A0\uD070 \uBAA9\uB85D"));t.tokenLogs=((e=o.data)==null?void 0:e.data)||[]}catch(o){l("\uD1A0\uD070 \uBAA9\uB85D \uC870\uD68C \uC2E4\uD328: "+coUtil.cofErrMsg(o),"error",0)}p.loadingTokens=!1},I=e=>{n.deviceToken=e,l("\uD1A0\uD070\uC774 \uC785\uB825\uB780\uC5D0 \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")},P=async()=>{try{await boApi.put("/bo/sy/prop/bulk",[{propKey:"app.push.apns.key-id",propValue:a.keyId},{propKey:"app.push.apns.team-id",propValue:a.teamId},{propKey:"app.push.apns.key-file",propValue:a.keyFile},{propKey:"app.push.apns.bundle-id",propValue:a.bundleId},{propKey:"app.push.apns.production",propValue:String(a.production)}],coUtil.cofApiHdr("APNs \uD14C\uC2A4\uD2B8","\uC124\uC815 \uC800\uC7A5")),l("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){l(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:a,form:n,result:t,uiState:p,handleBtnAction:(e,o)=>{if(e==="push-send")return S();if(e==="tokens-load")return T();if(e==="token-use")return I(o);if(e==="key-save")return P()},cfgFormColumns:h,baseFormColumns:A,deviceGridColumns:w,configSummaryGridColumns:k,configSummaryRows:x}},template:`
<div>
  <div class="page-title">APNs (iOS \uD478\uC2DC \uC54C\uB9BC) \uD14C\uC2A4\uD2B8</div>

  <!-- \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">APNs \uC124\uC815</span>
      <div style="margin-left:auto">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('key-save')">sy_prop \uC800\uC7A5</button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div style="margin-top:12px">
        <bo-grid :columns="configSummaryGridColumns" :rows="configSummaryRows" :show-row-num="false">
          <template #cfg-value="{ row }">
            <template v-if="row.isBadge">
              <span :class="cfg.production ? 'badge badge-red' : 'badge badge-blue'">{{ cfg.production ? 'Production' : 'Sandbox' }}</span>
            </template>
            <template v-else>
              <code>{{ cfg[row.cfgKey] || '(not set)' }}</code>
            </template>
          </template>
        </bo-grid>
      </div>
    </div>
  </div>

  <!-- \uBC1C\uC1A1 \uD3FC -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uD478\uC2DC \uBC1C\uC1A1</span>
      <div style="margin-left:auto">
        <button class="btn btn_send btn-sm" :disabled="uiState.loading" @click="handleBtnAction('push-send')">
          {{ uiState.loading ? '\u23F3 \uBC1C\uC1A1 \uC911\u2026' : '\u{1F34E} \uD14C\uC2A4\uD2B8 APNs \uBC1C\uC1A1' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="baseFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div v-if="result.status" style="margin-top:8px;font-size:13px;font-weight:600">{{ result.status }}</div>
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-top:8px;white-space:pre-wrap">{{ result.error }}</div>
      <div v-if="result.response" style="padding:8px;background:#f0fdf4;border:1px solid #86efac;border-radius:4px;font-size:12px;margin-top:8px">
        <pre style="margin:0">{{ JSON.stringify(result.response, null, 2) }}</pre>
      </div>
    </div>
  </div>

  <!-- iOS \uB514\uBC14\uC774\uC2A4 \uD1A0\uD070 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uB4F1\uB85D\uB41C iOS \uB514\uBC14\uC774\uC2A4 \uD1A0\uD070 (mb_device_token)</span>
      <div style="margin-left:auto">
        <button class="btn btn_search btn-sm" :disabled="uiState.loadingTokens" @click="handleBtnAction('tokens-load')">
          {{ uiState.loadingTokens ? '\u23F3' : 'iOS \uD1A0\uD070 \uBAA9\uB85D \uC870\uD68C' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <div v-if="!result.tokenLogs.length" style="color:#999;font-size:12px;text-align:center;padding:16px">
        [iOS \uD1A0\uD070 \uBAA9\uB85D \uC870\uD68C] \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694
      </div>
      <div v-else style="max-height:280px;overflow-y:auto">
        <bo-grid :columns="deviceGridColumns" :rows="result.tokenLogs" :show-row-num="true">
          <template #token-action="{ row }">
            <button class="btn btn_row_edit" @click="handleBtnAction('token-use', row.fcmToken || row.apnsToken)">\uC120\uD0DD</button>
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
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">APNs \uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>1.</b> Apple Developer \u2192 Certificates \u2192 Keys \u2192 New Key \u2192 APNs \uCCB4\uD06C \u2192 \uB2E4\uC6B4\uB85C\uB4DC (.p8)<br>
      <b>2.</b> Key ID (10\uC790\uB9AC), Team ID (10\uC790\uB9AC) \uD655\uC778<br>
      <b>3.</b> .p8 \uD30C\uC77C\uC744 \uC11C\uBC84\uC5D0 \uC800\uC7A5 \u2192 sy_prop <code>app.push.apns.key-file</code> \uC5D0 \uACBD\uB85C \uB4F1\uB85D<br>
      <b>4.</b> Bundle ID = Xcode \uC571 Bundle Identifier<br>
      <b>5.</b> Sandbox(\uAC1C\uBC1C\uAE30\uAE30) vs Production(App Store \uBC30\uD3EC) \uAD6C\uBD84<br><br>
      <b>\uBC31\uC5D4\uB4DC API:</b> <code>POST /api/co/ext/push-apns-send/send</code> \u2192 <code>CoExtPushApnsSendController</code> (APNs \uC2DC\uBBAC\uB808\uC774\uC158)<br>
      <code>GET /api/co/ext/push-apns-send/tokens</code> \u2192 iOS <code>mb_device_token</code> \uC870\uD68C<br>
      \uB77C\uC774\uBE0C\uB7EC\uB9AC: <code>com.eatthepath:pushy</code> (Netty \uAE30\uBC18 HTTP/2 APNs \uD074\uB77C\uC774\uC5B8\uD2B8) \uAD8C\uC7A5
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.push.apns." default-prop-key-filter="app.push.apns" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/all" default-key-filter="app.push.apns" />
</div>`};
