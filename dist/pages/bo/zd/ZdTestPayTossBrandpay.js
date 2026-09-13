window.ZdTestPayTossBrandpay={name:"ZdTestPayTossBrandpay",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(b){var y;const{reactive:d,onMounted:g}=Vue,o=b.showToast||((y=window.boApp)==null?void 0:y.showToast)||(()=>{}),a=d({clientKey:"",secretKey:""}),s=d({amount:1e3,orderId:"BP-"+Date.now(),orderName:"\uBE0C\uB79C\uB4DC\uD398\uC774 \uD14C\uC2A4\uD2B8",customerKey:"MEMBER_TEST_001",customerName:"\uC1A1\uC131\uC77C",customerEmail:"illeesam@gmail.com",successUrl:window.location.origin+"/api/co/cm/toss/confirm",failUrl:window.location.origin+"/?toss_fail=1"}),t=d({sdkStatus:"",sdkUrl:"",initDetail:"",confirmResult:null,cancelResult:null,error:"",phase:"idle"}),i=d({sdkLoaded:!1,loading:!1});g(async()=>{var e,l,c;try{const r=await((l=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:l.call(e,{propKeys:"app.pay.toss.client-key,app.pay.toss.secret-key"},"\uBE0C\uB79C\uB4DC\uD398\uC774 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),n=((c=r==null?void 0:r.data)==null?void 0:c.data)||[],u=_=>{const f=n.filter(p=>p.propKey===_&&p.propValue),m=f.find(p=>/local|dev/.test(p.propProfile||""))||f[0];return(m==null?void 0:m.propValue)||""};a.clientKey=u("app.pay.toss.client-key"),a.secretKey=u("app.pay.toss.secret-key")}catch(r){t.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(r.message||r)}v()});const v=()=>{const e=typeof window.TossPayments=="function";i.sdkLoaded=e,t.sdkUrl="https://js.tosspayments.com/v2/standard",t.sdkStatus=e?"\u2705 TossPayments SDK \uB85C\uB4DC\uB428":"\u274C TossPayments SDK \uC5C6\uC74C",t.initDetail=e?"Client Key: "+(a.clientKey||"(\uBBF8\uC124\uC815)"):""},k=()=>{s.orderId="BP-"+Date.now()},h=async()=>{if(!a.clientKey){o("Client Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if(!s.customerKey){o("\uBE0C\uB79C\uB4DC\uD398\uC774\uB294 customerKey(\uD68C\uC6D0 \uACE0\uC720 \uD0A4)\uAC00 \uD544\uC218\uC785\uB2C8\uB2E4.","error",0);return}if(!i.sdkLoaded){o("TossPayments SDK \uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error",0);return}i.loading=!0,t.phase="paying",t.error="";try{await(await TossPayments(a.clientKey)).payment({customerKey:s.customerKey}).requestPayment({amount:{currency:"KRW",value:Number(s.amount)},orderId:s.orderId,orderName:s.orderName,customerName:s.customerName,customerEmail:s.customerEmail,successUrl:s.successUrl,failUrl:s.failUrl})}catch(e){t.error=e.message||String(e),t.phase="idle",i.loading=!1,o("\uACB0\uC81C \uC624\uB958: "+(e.message||e),"error",0)}},x=async()=>{var r;if(!a.secretKey){o("Secret Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}const e=prompt("paymentKey \uB97C \uC785\uB825\uD558\uC138\uC694 (\uD1A0\uC2A4 \uB9AC\uB2E4\uC774\uB809\uD2B8 URL \uD30C\uB77C\uBBF8\uD130):");if(!e)return;const l=parseInt(prompt("amount:")||s.amount),c=prompt("orderId:")||s.orderId;i.loading=!0,t.phase="confirming";try{const n=await boApi.post("/co/cm/toss/confirm",{paymentKey:e,amount:l,orderId:c},coUtil.cofApiHdr("\uBE0C\uB79C\uB4DC\uD398\uC774 \uD14C\uC2A4\uD2B8","\uC2B9\uC778"));t.confirmResult=((r=n.data)==null?void 0:r.data)||n.data,t.phase="done",o("\uACB0\uC81C \uC2B9\uC778 \uC131\uACF5","success")}catch(n){t.error=coUtil.cofErrMsg(n),t.phase="idle",o("\uACB0\uC81C \uC2B9\uC778 \uC2E4\uD328: "+t.error,"error",0)}i.loading=!1},K=async()=>{var l,c,r;if(!((l=t.confirmResult)!=null&&l.paymentKey)){o("\uBA3C\uC800 \uACB0\uC81C \uC2B9\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.","error");return}if(await(((c=window.boApp)==null?void 0:c.showConfirm)||(()=>Promise.resolve(!0)))("\uACB0\uC81C \uCDE8\uC18C","\uACB0\uC81C\uB97C \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")){i.loading=!0;try{const n=await boApi.post("/co/cm/toss/cancel",{paymentKey:t.confirmResult.paymentKey,cancelReason:"\uAC1C\uBC1C\uC790 \uD14C\uC2A4\uD2B8 \uCDE8\uC18C"},coUtil.cofApiHdr("\uBE0C\uB79C\uB4DC\uD398\uC774 \uD14C\uC2A4\uD2B8","\uCDE8\uC18C"));t.cancelResult=((r=n.data)==null?void 0:r.data)||n.data,o("\uACB0\uC81C \uCDE8\uC18C \uC644\uB8CC","success")}catch(n){o("\uCDE8\uC18C \uC2E4\uD328: "+coUtil.cofErrMsg(n),"error",0)}i.loading=!1}},w=async()=>{try{const e=[];if(a.clientKey&&e.push({propKey:"app.pay.toss.client-key",propValue:a.clientKey}),a.secretKey&&e.push({propKey:"app.pay.toss.secret-key",propValue:a.secretKey}),!e.length){o("\uC800\uC7A5\uD560 \uD0A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}await boApi.put("/bo/sy/prop/bulk",e,coUtil.cofApiHdr("\uBE0C\uB79C\uB4DC\uD398\uC774 \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),o("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){o(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:a,form:s,result:t,uiState:i,handleBtnAction:e=>{if(e==="pay-test")return h();if(e==="confirm-manual")return x();if(e==="cancel-test")return K();if(e==="keys-save")return w();if(e==="orderid-refresh")return k()},cfgFormColumns:[{key:"clientKey",label:"Client Key (\uD074\uB77C\uC774\uC5B8\uD2B8)",type:"text",hint:"clientKey",mono:!0,placeholder:"test_ck_\u2026 or live_ck_\u2026",colSpan:2},{key:"secretKey",label:"Secret Key (\uC11C\uBC84)",type:"text",hint:"secretKey",mono:!0,placeholder:"test_sk_\u2026 or live_sk_\u2026"}],payFormColumns:[{key:"customerKey",label:"customerKey",type:"text",hint:"customerKey",mono:!0,placeholder:"\uD68C\uC6D0 \uACE0\uC720 \uC2DD\uBCC4\uC790 (\uC601\uC22B\uC790/-/_)",required:!0},{key:"amount",label:"\uAE08\uC561",type:"number",hint:"amount"},{key:"_orderId",label:"\uC8FC\uBB38 ID",type:"slot",name:"orderIdSlot",hint:"orderId"},{key:"orderName",label:"\uC0C1\uD488\uBA85",type:"text",hint:"orderName"},{key:"customerName",label:"\uAD6C\uB9E4\uC790\uBA85",type:"text",hint:"customerName"},{key:"customerEmail",label:"\uAD6C\uB9E4\uC790 \uC774\uBA54\uC77C",type:"text",hint:"customerEmail"}],confirmGridColumns:[{key:"paymentKey",label:"paymentKey",mono:!0,cellStyle:"font-size:11px;word-break:break-all"},{key:"orderId",label:"orderId"},{key:"orderName",label:"orderName"},{key:"totalAmount",label:"totalAmount",align:"right",fmt:e=>(e||0).toLocaleString()+" \uC6D0"},{key:"status",label:"status",badge:()=>"badge-green"},{key:"method",label:"method"}]}},template:`
<div>
  <div class="page-title">\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uBE0C\uB79C\uB4DC\uD398\uC774 \uD14C\uC2A4\uD2B8</div>

  <!-- \uBE0C\uB79C\uB4DC\uD398\uC774 \uC548\uB0B4 -->
  <div style="margin-bottom:12px;padding:10px 14px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;font-size:12px;color:#1e40af;line-height:1.7">
    <strong>\uBE0C\uB79C\uB4DC\uD398\uC774(\uD1A0\uC2A4\uD398\uC774)</strong>\uB294 \uD1A0\uC2A4 \uC571\uC73C\uB85C \uACB0\uC81C\uD558\uB294 \uAC04\uD3B8\uACB0\uC81C\uC785\uB2C8\uB2E4.<br>
    \uACB0\uC81C\uCC3D API\uC640 \uB3D9\uC77C\uD55C <code>test_ck_</code> \uD0A4\uB97C \uC0AC\uC6A9\uD558\uBA70, <strong>\uD68C\uC6D0 \uC2DD\uBCC4\uC744 \uC704\uD55C customerKey\uAC00 \uD544\uC218</strong>\uC785\uB2C8\uB2E4.<br>
    \uD14C\uC2A4\uD2B8 \uD658\uACBD\uC5D0\uC11C\uB294 \uD1A0\uC2A4 \uC571 \uC5C6\uC774\uB3C4 \uD14C\uC2A4\uD2B8 \uACB0\uC81C\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
  </div>

  <!-- \uD0A4 \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">API \uD0A4 \uC124\uC815</span>
      <span style="font-size:11px;color:#888;margin-left:8px">\uACB0\uC81C\uCC3D \uC804\uC6A9 \uD0A4 (test_ck_ / live_ck_ \uC811\uB450\uC5B4) \u2014 \uACB0\uC81C\uC704\uC82F \uD0A4(gck) \uC0AC\uC6A9 \uBD88\uAC00</span>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div style="display:flex;justify-content:flex-end;margin-top:8px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('keys-save')">sy_prop \uC800\uC7A5</button>
      </div>
      <div style="font-size:12px;color:#666;padding:6px 8px;background:#f8f9fa;border-radius:4px;line-height:2;margin-top:8px">
        <div>SDK \uC0C1\uD0DC: <strong>{{ result.sdkStatus || '\uD655\uC778 \uC911\u2026' }}</strong><span v-if="result.sdkUrl" style="margin-left:8px;color:#aaa;font-family:monospace;font-size:11px;">{{ result.sdkUrl }}</span></div>
        <div>\uCD08\uAE30\uD654 \uC0C1\uD0DC: <strong>{{ result.initDetail || (uiState.sdkLoaded ? '\uCD08\uAE30\uD654 \uC644\uB8CC' : '\uBBF8\uCD08\uAE30\uD654') }}</strong></div>
      </div>
    </div>
  </div>

  <!-- \uACB0\uC81C \uD30C\uB77C\uBBF8\uD130 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uACB0\uC81C \uD30C\uB77C\uBBF8\uD130</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="payFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact>
        <template #orderIdSlot>
          <div style="display:flex;gap:4px">
            <input class="form-control" v-model="form.orderId" style="flex:1;font-family:monospace;font-size:12px" />
            <button class="btn btn_reset btn-sm" @click="handleBtnAction('orderid-refresh')" style="white-space:nowrap">\uC0C8\uB85C\uACE0\uCE68</button>
          </div>
        </template>
      </bo-form-area>
    </div>
  </div>

  <!-- \uD14C\uC2A4\uD2B8 \uC561\uC158 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uD14C\uC2A4\uD2B8 \uC2E4\uD589</span>
      <div style="margin-left:auto;display:flex;gap:6px">
        <button class="btn btn_confirm btn-sm" :disabled="uiState.loading" @click="handleBtnAction('pay-test')">
          {{ uiState.loading ? '\u23F3 \uCC98\uB9AC \uC911\u2026' : '\uBE0C\uB79C\uB4DC\uD398\uC774 \uACB0\uC81C\uCC3D \uC5F4\uAE30' }}
        </button>
        <button class="btn btn_apply btn-sm" :disabled="uiState.loading" @click="handleBtnAction('confirm-manual')">\uC218\uB3D9 \uC2B9\uC778 (paymentKey \uC785\uB825)</button>
        <button class="btn btn_delete btn-sm" :disabled="!result.confirmResult" @click="handleBtnAction('cancel-test')">\uACB0\uC81C \uCDE8\uC18C</button>
      </div>
    </div>
    <div style="padding:12px">
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-bottom:8px">{{ result.error }}</div>
      <!-- \uC2B9\uC778 \uACB0\uACFC -->
      <div v-if="result.confirmResult" style="background:#f0fdf4;border:1px solid #86efac;border-radius:6px;padding:10px;margin-bottom:8px">
        <div style="font-weight:600;margin-bottom:6px;color:#15803d">\u2705 \uACB0\uC81C \uC2B9\uC778 \uACB0\uACFC</div>
        <bo-grid :columns="confirmGridColumns" :rows="result.confirmResult ? [result.confirmResult] : []" :show-row-num="false" />
      </div>
      <!-- \uCDE8\uC18C \uACB0\uACFC -->
      <div v-if="result.cancelResult" style="background:#fff7ed;border:1px solid #fdba74;border-radius:6px;padding:10px">
        <div style="font-weight:600;margin-bottom:6px;color:#c2410c">\u2298 \uACB0\uC81C \uCDE8\uC18C \uACB0\uACFC</div>
        <pre style="font-size:11px;overflow:auto;max-height:120px">{{ JSON.stringify(result.cancelResult, null, 2) }}</pre>
      </div>
    </div>
  </div>

  <!-- \uD750\uB984 \uC548\uB0B4 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uC5F0\uB3D9 \uD750\uB984</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>1.</b> \uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uAC1C\uBC1C\uC790\uC13C\uD130 \u2192 \uACB0\uC81C\uCC3D \uC571 \uC0DD\uC131 \u2192 \uD14C\uC2A4\uD2B8 \uD0A4 \uBC1C\uAE09 (test_ck_/test_sk_)<br>
      <b>2.</b> sy_prop <code>app.pay.toss.client-key</code> / <code>app.pay.toss.secret-key</code> \uB4F1\uB85D<br>
      <b>3.</b> customerKey = \uC11C\uBE44\uC2A4 \uB0B4 \uD68C\uC6D0 \uACE0\uC720\uAC12 (\uC601\uC22B\uC790/\uD558\uC774\uD508/\uC5B8\uB354\uBC14, \uCD5C\uB300 300\uC790)<br>
      <b>4.</b> \uBE0C\uB79C\uB4DC\uD398\uC774 \uACB0\uC81C\uCC3D \uC5F4\uAE30 \u2192 \uD1A0\uC2A4 \uC571 \uB610\uB294 \uC6F9 \u2192 successUrl \uB9AC\uB2E4\uC774\uB809\uD2B8<br>
      <b>5.</b> \uBC31\uC5D4\uB4DC <code>POST /api/co/cm/toss/confirm</code> \uC73C\uB85C \uC2B9\uC778 \uC694\uCCAD<br>
      <b>6.</b> \uCDE8\uC18C: <code>POST /api/co/cm/toss/cancel</code> (cancelAmount \uC5C6\uC73C\uBA74 \uC804\uCCB4 \uCDE8\uC18C)
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.pay.toss." default-prop-key-filter="app.pay.toss" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/toss" default-key-filter="app.pay.toss" />
</div>`};
