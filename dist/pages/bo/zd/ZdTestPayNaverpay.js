window.ZdTestPayNaverpay={name:"ZdTestPayNaverpay",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(x){var f;const{reactive:y,onMounted:g}=Vue,n=x.showToast||((f=window.boApp)==null?void 0:f.showToast)||(()=>{}),p=y({clientId:"",clientSecret:"",apiUrl:""}),l=y({amount:1e3,taxScopeAmount:1e3,taxExScopeAmount:0,payKey:"NAVER-"+Date.now(),orderName:"\uB124\uC774\uBC84\uD398\uC774 \uD14C\uC2A4\uD2B8 \uC0C1\uD488",returnUrl:window.location.origin+"/?naverpay_return=1"}),o=y({reserveResult:null,approveResult:null,cancelResult:null,error:"",phase:"idle"}),s=y({loading:!1}),u=y({reserveId:"",paymentId:""});g(async()=>{var e,a,r;try{const t=await((a=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:a.call(e,{propKeys:"app.pay.naverpay.client-id,app.pay.naverpay.client-secret,app.pay.naverpay.api-url"},"\uB124\uC774\uBC84\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),i=((r=t==null?void 0:t.data)==null?void 0:r.data)||[],c=v=>{const d=i.filter(m=>m.propKey===v&&m.propValue),b=d.find(m=>/local|dev/.test(m.propProfile||""))||d[0];return(b==null?void 0:b.propValue)||""};p.clientId=c("app.pay.naverpay.client-id"),p.clientSecret=c("app.pay.naverpay.client-secret"),p.apiUrl=c("app.pay.naverpay.api-url")}catch(t){o.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(t.message||t)}});const h=()=>{l.payKey="NAVER-"+Date.now()},I=async()=>{var e,a,r;if(!p.clientId){n("Client ID \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if(!p.clientSecret){n("Client Secret \uC744 \uC785\uB825\uD558\uC138\uC694.","error");return}s.loading=!0,o.phase="reserved",o.error="",o.reserveResult=null;try{const t=await boApi.post("/co/cm/naverpay/reserve",{merchantPayKey:l.payKey,productName:l.orderName,totalPayAmount:Number(l.amount),taxScopeAmount:Number(l.taxScopeAmount),taxExScopeAmount:Number(l.taxExScopeAmount),returnUrl:l.returnUrl},coUtil.cofApiHdr("\uB124\uC774\uBC84\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8","\uACB0\uC81C\uC608\uC57D"));o.reserveResult=((e=t.data)==null?void 0:e.data)||t.data,(r=(a=o.reserveResult)==null?void 0:a.body)!=null&&r.reserveId&&(u.reserveId=o.reserveResult.body.reserveId),n("\uACB0\uC81C \uC608\uC57D \uC644\uB8CC. \uB124\uC774\uBC84\uD398\uC774 \uACB0\uC81C\uCC3D\uC744 \uC5F4\uC5B4\uC8FC\uC138\uC694.","success")}catch(t){o.error=coUtil.cofErrMsg(t),o.phase="idle",n("\uACB0\uC81C \uC608\uC57D \uC2E4\uD328: "+o.error,"error",0)}s.loading=!1},w=()=>{var r,t;const e=(t=(r=o.reserveResult)==null?void 0:r.body)==null?void 0:t.reserveId;if(!e){n("\uBA3C\uC800 \uACB0\uC81C \uC608\uC57D\uC744 \uC2E4\uD589\uD558\uC138\uC694.","error");return}const a="https://pay.naver.com/payments/new?reservationId="+e;window.open(a,"naverpay","width=480,height=700")},A=async()=>{var r;const e=u.reserveId,a=u.paymentId;if(!e){n("reserveId \uB97C \uC785\uB825\uD558\uC138\uC694 (\uC608\uC57D \uC751\uB2F5\uC758 body.reserveId).","error");return}if(!a){n("paymentId \uB97C \uC785\uB825\uD558\uC138\uC694 (returnUrl \uD30C\uB77C\uBBF8\uD130\uC758 paymentId).","error");return}s.loading=!0,o.phase="approving",o.error="";try{const t=await boApi.post("/co/cm/naverpay/approve",{reserveId:e,paymentId:a},coUtil.cofApiHdr("\uB124\uC774\uBC84\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8","\uACB0\uC81C\uC2B9\uC778"));o.approveResult=((r=t.data)==null?void 0:r.data)||t.data,o.phase="done",n("\uACB0\uC81C \uC2B9\uC778 \uC644\uB8CC","success")}catch(t){o.error=coUtil.cofErrMsg(t),o.phase="reserved",n("\uACB0\uC81C \uC2B9\uC778 \uC2E4\uD328: "+o.error,"error",0)}s.loading=!1},k=async()=>{var r,t,i,c,v;const e=((i=(t=(r=o.approveResult)==null?void 0:r.body)==null?void 0:t.detail)==null?void 0:i.paymentId)||u.paymentId;if(!e){n("\uBA3C\uC800 \uACB0\uC81C \uC2B9\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.","error");return}if(await(((c=window.boApp)==null?void 0:c.showConfirm)||(()=>Promise.resolve(!0)))("\uACB0\uC81C \uCDE8\uC18C","\uACB0\uC81C\uB97C \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")){s.loading=!0;try{const d=await boApi.post("/co/cm/naverpay/cancel",{paymentId:e,cancelAmount:Number(l.amount),cancelReason:"\uAC1C\uBC1C\uC790 \uD14C\uC2A4\uD2B8 \uCDE8\uC18C",taxScopeAmount:Number(l.taxScopeAmount),taxExScopeAmount:Number(l.taxExScopeAmount)},coUtil.cofApiHdr("\uB124\uC774\uBC84\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8","\uACB0\uC81C\uCDE8\uC18C"));o.cancelResult=((v=d.data)==null?void 0:v.data)||d.data,n("\uACB0\uC81C \uCDE8\uC18C \uC644\uB8CC","success")}catch(d){n("\uCDE8\uC18C \uC2E4\uD328: "+coUtil.cofErrMsg(d),"error",0)}s.loading=!1}},S=async()=>{try{const e=[];if(p.clientId&&e.push({propKey:"app.pay.naverpay.client-id",propValue:p.clientId}),p.clientSecret&&e.push({propKey:"app.pay.naverpay.client-secret",propValue:p.clientSecret}),p.apiUrl&&e.push({propKey:"app.pay.naverpay.api-url",propValue:p.apiUrl}),!e.length){n("\uC800\uC7A5\uD560 \uD0A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}await boApi.put("/bo/sy/prop/bulk",e,coUtil.cofApiHdr("\uB124\uC774\uBC84\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),n("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){n(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:p,form:l,result:o,uiState:s,manualApprove:u,handleBtnAction:e=>{if(e==="reserve-test")return I();if(e==="open-window")return w();if(e==="approve-test")return A();if(e==="cancel-test")return k();if(e==="keys-save")return S();if(e==="paykey-refresh")return h()},cfgFormColumns:[{key:"clientId",label:"Client ID",type:"text",hint:"client-id",mono:!0,placeholder:"\uB124\uC774\uBC84\uD398\uC774 \uD30C\uD2B8\uB108\uC13C\uD130 \u2192 Client ID"},{key:"clientSecret",label:"Client Secret",type:"text",hint:"client-secret",mono:!0,placeholder:"Client Secret"},{key:"apiUrl",label:"API URL",type:"text",hint:"api-url",mono:!0,placeholder:"https://dev.apis.naver.com/naverpay-partner/naverpay (\uD14C\uC2A4\uD2B8)",colSpan:3}],payFormColumns:[{key:"amount",label:"\uACB0\uC81C\uAE08\uC561",type:"number",hint:"amount"},{key:"taxScopeAmount",label:"\uACFC\uC138 \uAE08\uC561",type:"number",hint:"taxScopeAmount"},{key:"taxExScopeAmount",label:"\uBA74\uC138 \uAE08\uC561",type:"number",hint:"taxExScopeAmount"},{key:"_payKey",label:"merchantPayKey",type:"slot",name:"payKeySlot",hint:"merchantPayKey",mono:!0},{key:"orderName",label:"\uC0C1\uD488\uBA85",type:"text",hint:"productName"},{key:"returnUrl",label:"returnUrl",type:"text",hint:"returnUrl",mono:!0,colSpan:3}],approveFormColumns:[{key:"reserveId",label:"reserveId",type:"text",hint:"reserveId",mono:!0,placeholder:"\uC608\uC57D \uC751\uB2F5\uC758 body.reserveId"},{key:"paymentId",label:"paymentId",type:"text",hint:"paymentId",mono:!0,placeholder:"returnUrl \uD30C\uB77C\uBBF8\uD130\uC758 paymentId",colSpan:2}],reserveGridColumns:[{key:"code",label:"code",mono:!0,cellStyle:"font-size:11px"},{key:"_reserveId",label:"reserveId",mono:!0,cellStyle:"font-size:11px",fmt:(e,a)=>{var r;return((r=a.body)==null?void 0:r.reserveId)||""}},{key:"_payUrl",label:"\uACB0\uC81C URL",cellStyle:"font-size:11px;word-break:break-all",fmt:(e,a)=>{var r;return(r=a.body)!=null&&r.reserveId?"https://pay.naver.com/payments/new?reservationId="+a.body.reserveId:""}}],approveGridColumns:[{key:"code",label:"code",mono:!0,cellStyle:"font-size:11px"},{key:"_paymentId",label:"paymentId",fmt:(e,a)=>{var r,t;return((t=(r=a.body)==null?void 0:r.detail)==null?void 0:t.paymentId)||""}},{key:"_totalAmount",label:"totalPayAmount",align:"right",fmt:(e,a)=>{var r,t,i;return(((i=(t=(r=a.body)==null?void 0:r.detail)==null?void 0:t.totalPayAmount)==null?void 0:i.toLocaleString())||"")+" \uC6D0"}},{key:"_payMeans",label:"paymentMeans",badge:()=>"badge-green",fmt:(e,a)=>{var r,t;return((t=(r=a.body)==null?void 0:r.detail)==null?void 0:t.primaryPayMeans)||""}},{key:"_productName",label:"productName",fmt:(e,a)=>{var r,t;return((t=(r=a.body)==null?void 0:r.detail)==null?void 0:t.productName)||""}}]}},template:`
<div>
  <div class="page-title">\uB124\uC774\uBC84\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8</div>

  <!-- \uD0A4 \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">API \uD0A4 \uC124\uC815</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div style="display:flex;justify-content:flex-end;margin-top:8px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('keys-save')">sy_prop \uC800\uC7A5</button>
      </div>
      <div style="font-size:11px;color:#666;background:#e8f5e9;padding:6px 10px;border-radius:4px;margin-top:8px;line-height:1.8;border:1px solid #a5d6a7">
        \uD0A4 \uBC1C\uAE09: <a href="https://developer.pay.naver.com/app" target="_blank" style="color:#2e7d32">developer.pay.naver.com</a>
        \u2192 \uD30C\uD2B8\uB108 \uC2E0\uCCAD \uD6C4 \uD14C\uC2A4\uD2B8 Client ID/Secret \uBC1C\uAE09.
        \uD14C\uC2A4\uD2B8 API: <code>https://dev.apis.naver.com/naverpay-partner/naverpay</code>
      </div>
    </div>
  </div>

  <!-- \uACB0\uC81C \uD30C\uB77C\uBBF8\uD130 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uACB0\uC81C \uD30C\uB77C\uBBF8\uD130</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="payFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact>
        <template #payKeySlot>
          <div style="display:flex;gap:4px">
            <input class="form-control" v-model="form.payKey" style="flex:1;font-family:monospace;font-size:12px" />
            <button class="btn btn_reset btn-sm" @click="handleBtnAction('paykey-refresh')" style="white-space:nowrap">\uC0C8\uB85C\uACE0\uCE68</button>
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
        <button class="btn btn_confirm btn-sm" :disabled="uiState.loading" @click="handleBtnAction('reserve-test')">
          {{ uiState.loading ? '\u23F3 \uCC98\uB9AC \uC911\u2026' : '\uACB0\uC81C \uC608\uC57D (reserve)' }}
        </button>
        <button class="btn btn_preview btn-sm" :disabled="!result.reserveResult" @click="handleBtnAction('open-window')">\uB124\uC774\uBC84\uD398\uC774 \uCC3D \uC5F4\uAE30</button>
        <button class="btn btn_delete btn-sm" :disabled="!result.approveResult" @click="handleBtnAction('cancel-test')">\uACB0\uC81C \uCDE8\uC18C</button>
      </div>
    </div>
    <div style="padding:12px">
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-bottom:8px">{{ result.error }}</div>

      <!-- reserve \uACB0\uACFC -->
      <div v-if="result.reserveResult" style="background:#f1f8e9;border:1px solid #a5d6a7;border-radius:6px;padding:10px;margin-bottom:12px">
        <div style="font-weight:600;margin-bottom:6px;color:#2e7d32">\u{1F4CB} \uACB0\uC81C \uC608\uC57D \uACB0\uACFC</div>
        <bo-grid :columns="reserveGridColumns" :rows="result.reserveResult ? [result.reserveResult] : []" :show-row-num="false" />
      </div>

      <!-- \uC218\uB3D9 \uC2B9\uC778 \uC601\uC5ED -->
      <div style="background:#f0f4ff;border:1px solid #93c5fd;border-radius:6px;padding:10px;margin-bottom:8px">
        <div style="font-weight:600;margin-bottom:8px;color:#1d4ed8">\u{1F511} \uC218\uB3D9 \uC2B9\uC778 (\uB124\uC774\uBC84\uD398\uC774 \uACB0\uC81C \uC644\uB8CC \uD6C4)</div>
        <div style="font-size:11px;color:#555;margin-bottom:6px">
          \uB124\uC774\uBC84\uD398\uC774 \uC644\uB8CC \uD6C4 returnUrl \uC5D0 <code>paymentId</code> \uD30C\uB77C\uBBF8\uD130\uAC00 \uBD99\uC2B5\uB2C8\uB2E4. \uBCF5\uC0AC \uD6C4 \uC544\uB798 \uC785\uB825:
        </div>
        <bo-form-area plain-readonly :columns="approveFormColumns" :form="manualApprove" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
        <div style="display:flex;justify-content:flex-end;margin-top:8px">
          <button class="btn btn_apply btn-sm" :disabled="uiState.loading" @click="handleBtnAction('approve-test')">\uACB0\uC81C \uC2B9\uC778 (approve)</button>
        </div>
      </div>

      <!-- \uC2B9\uC778 \uACB0\uACFC -->
      <div v-if="result.approveResult" style="background:#f0fdf4;border:1px solid #86efac;border-radius:6px;padding:10px;margin-bottom:8px">
        <div style="font-weight:600;margin-bottom:6px;color:#15803d">\u2705 \uACB0\uC81C \uC2B9\uC778 \uACB0\uACFC</div>
        <bo-grid :columns="approveGridColumns" :rows="result.approveResult ? [result.approveResult] : []" :show-row-num="false" />
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
    <div style="padding:12px;font-size:12px;line-height:2;color:#444">
      <b>1.</b> [\uACB0\uC81C \uC608\uC57D] <code>POST /api/co/cm/naverpay/reserve</code> \u2192 reserveId \uBC18\uD658<br>
      <b>2.</b> [\uCC3D \uC5F4\uAE30] <code>https://pay.naver.com/payments/new?reservationId={reserveId}</code> \uD31D\uC5C5<br>
      <b>3.</b> [\uACB0\uC81C \uC644\uB8CC] returnUrl \uB85C \uB9AC\uB2E4\uC774\uB809\uD2B8 (URL \uD30C\uB77C\uBBF8\uD130: <code>paymentId</code>)<br>
      <b>4.</b> [\uACB0\uC81C \uC2B9\uC778] <code>POST /api/co/cm/naverpay/approve</code> (reserveId + paymentId) \u2192 \uCD5C\uC885 \uC2B9\uC778<br>
      <b>5.</b> [\uACB0\uC81C \uCDE8\uC18C] <code>POST /api/co/cm/naverpay/cancel</code> (paymentId + cancelAmount)<br>
      <br>
      sy_prop: <code>app.pay.naverpay.client-id</code> / <code>app.pay.naverpay.client-secret</code> / <code>app.pay.naverpay.api-url</code><br>
      \uD0A4 \uBC1C\uAE09: <b>developer.pay.naver.com</b> \u2192 \uD30C\uD2B8\uB108 \uC2E0\uCCAD \uD6C4 \uD14C\uC2A4\uD2B8 \uACC4\uC815 \uBC1C\uAE09 (\uD14C\uC2A4\uD2B8 API = dev.apis.naver.com/...)
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.pay.naverpay." default-prop-key-filter="app.pay.naverpay" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/naverpay" default-key-filter="app.pay.naverpay" />
</div>`};
