window.ZdTestPayKakaopay={name:"ZdTestPayKakaopay",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(v){var b;const{reactive:i,onMounted:k}=Vue,r=v.showToast||((b=window.boApp)==null?void 0:b.showToast)||(()=>{}),p=i({cid:"",secretKey:""}),l=i({amount:1e3,taxFreeAmount:0,orderId:"KAKAO-"+Date.now(),orderName:"\uCE74\uCE74\uC624\uD398\uC774 \uD14C\uC2A4\uD2B8 \uC0C1\uD488",userId:"test-user-001",approvalUrl:window.location.origin+"/?kakao_approve=1",cancelUrl:window.location.origin+"/?kakao_cancel=1",failUrl:window.location.origin+"/?kakao_fail=1"}),t=i({readyResult:null,approveResult:null,cancelResult:null,error:"",phase:"idle"}),s=i({loading:!1}),c=i({tid:"",pgToken:""});k(async()=>{var e,n,a;try{const o=await((n=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:n.call(e,{propKeys:"app.pay.kakaopay.cid,app.pay.kakaopay.secret-key"},"\uCE74\uCE74\uC624\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),u=((a=o==null?void 0:o.data)==null?void 0:a.data)||[],d=I=>{const f=u.filter(y=>y.propKey===I&&y.propValue),m=f.find(y=>/local|dev/.test(y.propProfile||""))||f[0];return(m==null?void 0:m.propValue)||""};p.cid=d("app.pay.kakaopay.cid"),p.secretKey=d("app.pay.kakaopay.secret-key")}catch(o){t.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(o.message||o)}});const g=()=>{l.orderId="KAKAO-"+Date.now()},x=async()=>{var e,n;if(!p.cid){r("CID \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if(!p.secretKey){r("Secret Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}s.loading=!0,t.phase="ready",t.error="",t.readyResult=null;try{const a=await boApi.post("/co/cm/kakaopay/ready",{partnerOrderId:l.orderId,partnerUserId:l.userId,itemName:l.orderName,totalAmount:Number(l.amount),taxFreeAmount:Number(l.taxFreeAmount),approvalUrl:l.approvalUrl,cancelUrl:l.cancelUrl,failUrl:l.failUrl},coUtil.cofApiHdr("\uCE74\uCE74\uC624\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8","\uACB0\uC81C\uC900\uBE44"));t.readyResult=((e=a.data)==null?void 0:e.data)||a.data,(n=t.readyResult)!=null&&n.tid&&(c.tid=t.readyResult.tid),r("\uACB0\uC81C \uC900\uBE44 \uC644\uB8CC. \uCE74\uCE74\uC624\uD398\uC774 \uACB0\uC81C\uCC3D\uC744 \uC5F4\uC5B4\uC8FC\uC138\uC694.","success")}catch(a){t.error=coUtil.cofErrMsg(a),t.phase="idle",r("\uACB0\uC81C \uC900\uBE44 \uC2E4\uD328: "+t.error,"error",0)}s.loading=!1},h=()=>{var e;if(!((e=t.readyResult)!=null&&e.next_redirect_pc_url)){r("\uBA3C\uC800 \uACB0\uC81C \uC900\uBE44\uB97C \uC2E4\uD589\uD558\uC138\uC694.","error");return}window.open(t.readyResult.next_redirect_pc_url,"kakaopay","width=480,height=700")},_=async()=>{var a;const e=c.tid,n=c.pgToken;if(!e){r("tid \uB97C \uC785\uB825\uD558\uC138\uC694 (\uACB0\uC81C \uC900\uBE44 \uC751\uB2F5 \uB610\uB294 approvalUrl \uD30C\uB77C\uBBF8\uD130).","error");return}if(!n){r("pg_token \uC744 \uC785\uB825\uD558\uC138\uC694 (approvalUrl \uB9AC\uB2E4\uC774\uB809\uD2B8 \uD30C\uB77C\uBBF8\uD130).","error");return}s.loading=!0,t.phase="approving",t.error="";try{const o=await boApi.post("/co/cm/kakaopay/approve",{tid:e,partnerOrderId:l.orderId,partnerUserId:l.userId,pgToken:n},coUtil.cofApiHdr("\uCE74\uCE74\uC624\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8","\uACB0\uC81C\uC2B9\uC778"));t.approveResult=((a=o.data)==null?void 0:a.data)||o.data,t.phase="done",r("\uACB0\uC81C \uC2B9\uC778 \uC644\uB8CC","success")}catch(o){t.error=coUtil.cofErrMsg(o),t.phase="ready",r("\uACB0\uC81C \uC2B9\uC778 \uC2E4\uD328: "+t.error,"error",0)}s.loading=!1},w=async()=>{var n,a,o,u;if(!((n=t.approveResult)!=null&&n.tid)){r("\uBA3C\uC800 \uACB0\uC81C \uC2B9\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.","error");return}if(await(((a=window.boApp)==null?void 0:a.showConfirm)||(()=>Promise.resolve(!0)))("\uACB0\uC81C \uCDE8\uC18C","\uACB0\uC81C\uB97C \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")){s.loading=!0;try{const d=await boApi.post("/co/cm/kakaopay/cancel",{tid:t.approveResult.tid,cancelAmount:Number(((o=t.approveResult.amount)==null?void 0:o.total)||l.amount),cancelTaxFreeAmount:0,cancelReason:"\uAC1C\uBC1C\uC790 \uD14C\uC2A4\uD2B8 \uCDE8\uC18C"},coUtil.cofApiHdr("\uCE74\uCE74\uC624\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8","\uACB0\uC81C\uCDE8\uC18C"));t.cancelResult=((u=d.data)==null?void 0:u.data)||d.data,r("\uACB0\uC81C \uCDE8\uC18C \uC644\uB8CC","success")}catch(d){r("\uCDE8\uC18C \uC2E4\uD328: "+coUtil.cofErrMsg(d),"error",0)}s.loading=!1}},A=async()=>{try{const e=[];if(p.cid&&e.push({propKey:"app.pay.kakaopay.cid",propValue:p.cid}),p.secretKey&&e.push({propKey:"app.pay.kakaopay.secret-key",propValue:p.secretKey}),!e.length){r("\uC800\uC7A5\uD560 \uD0A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}await boApi.put("/bo/sy/prop/bulk",e,coUtil.cofApiHdr("\uCE74\uCE74\uC624\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),r("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){r(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:p,form:l,result:t,uiState:s,manualApprove:c,handleBtnAction:e=>{if(e==="ready-test")return x();if(e==="open-window")return h();if(e==="approve-test")return _();if(e==="cancel-test")return w();if(e==="keys-save")return A();if(e==="orderid-refresh")return g()},cfgFormColumns:[{key:"cid",label:"CID (\uAC00\uB9F9\uC810\uCF54\uB4DC)",type:"text",hint:"cid",mono:!0,placeholder:"TC0ONETIME (\uD14C\uC2A4\uD2B8)"},{key:"secretKey",label:"Secret Key",type:"text",hint:"secretKey",colSpan:2,placeholder:"\uCE74\uCE74\uC624\uD398\uC774 \uD30C\uD2B8\uB108\uC13C\uD130 \u2192 Secret Key"}],payFormColumns:[{key:"amount",label:"\uAE08\uC561",type:"number",hint:"amount"},{key:"taxFreeAmount",label:"\uBE44\uACFC\uC138 \uAE08\uC561",type:"number",hint:"taxFreeAmount"},{key:"orderName",label:"\uC0C1\uD488\uBA85",type:"text",hint:"orderName"},{key:"orderId",label:"\uC8FC\uBB38 ID",type:"slot",name:"orderIdSlot",hint:"orderId",mono:!0},{key:"userId",label:"\uD30C\uD2B8\uB108 \uC0AC\uC6A9\uC790 ID",type:"text",hint:"userId",mono:!0},{key:"approvalUrl",label:"\uC2B9\uC778 \uCF5C\uBC31 URL",type:"text",hint:"approvalUrl",mono:!0,colSpan:2}],approveFormColumns:[{key:"tid",label:"TID",type:"text",hint:"tid",mono:!0,placeholder:"ready \uC751\uB2F5\uC758 tid"},{key:"pgToken",label:"pg_token",type:"text",hint:"pgToken",mono:!0,placeholder:"approvalUrl \uD30C\uB77C\uBBF8\uD130\uC758 pg_token",colSpan:2}],readyGridColumns:[{key:"tid",label:"tid",mono:!0,cellStyle:"font-size:11px"},{key:"next_redirect_pc_url",label:"next_redirect_pc_url",cellStyle:"font-size:11px;word-break:break-all",colSpan:2},{key:"created_at",label:"created_at"}],approveGridColumns:[{key:"tid",label:"tid",mono:!0,cellStyle:"font-size:11px"},{key:"partner_order_id",label:"partner_order_id"},{key:"amount_total",label:"amount.total",fmt:(e,n)=>{var a,o;return(((o=(a=n.amount)==null?void 0:a.total)==null?void 0:o.toLocaleString())||"")+" \uC6D0"}},{key:"payment_method_type",label:"payment_method_type",badge:()=>"badge-blue"},{key:"item_name",label:"item_name"},{key:"approved_at",label:"approved_at"}]}},template:`
<div>
  <div class="page-title">\uCE74\uCE74\uC624\uD398\uC774 \uACB0\uC81C \uD14C\uC2A4\uD2B8</div>

  <!-- \uD0A4 \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">API \uD0A4 \uC124\uC815</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('keys-save')">sy_prop \uC800\uC7A5</button>
      </div>
      <div style="font-size:11px;color:#666;background:#fff8e1;padding:6px 10px;border-radius:4px;line-height:1.8;border:1px solid #ffe082">
        \uD14C\uC2A4\uD2B8 CID <code>TC0ONETIME</code> \uC740 \uCE74\uCE74\uC624\uD398\uC774 \uACF5\uC2DD \uD14C\uC2A4\uD2B8\uC6A9 \uACE0\uC815 \uAC00\uB9F9\uC810\uCF54\uB4DC\uC785\uB2C8\uB2E4.
        \uC2E4\uC81C Secret Key \uC5C6\uC774\uB3C4 ready API \uB97C \uD638\uCD9C\uD574 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.
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
        <button class="btn btn_confirm btn-sm" :disabled="uiState.loading" @click="handleBtnAction('ready-test')">
          {{ uiState.loading ? '\u23F3 \uCC98\uB9AC \uC911\u2026' : '\uACB0\uC81C \uC900\uBE44 (ready)' }}
        </button>
        <button class="btn btn_preview btn-sm" :disabled="!result.readyResult" @click="handleBtnAction('open-window')">\uCE74\uCE74\uC624\uD398\uC774 \uCC3D \uC5F4\uAE30</button>
        <button class="btn btn_delete btn-sm" :disabled="!result.approveResult" @click="handleBtnAction('cancel-test')">\uACB0\uC81C \uCDE8\uC18C</button>
      </div>
    </div>
    <div style="padding:12px">
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-bottom:8px">{{ result.error }}</div>

      <!-- ready \uACB0\uACFC -->
      <div v-if="result.readyResult" style="background:#fffde7;border:1px solid #f9a825;border-radius:6px;padding:10px;margin-bottom:12px">
        <div style="font-weight:600;margin-bottom:6px;color:#f57f17">\u{1F4CB} \uACB0\uC81C \uC900\uBE44 \uACB0\uACFC (TID \uBCF5\uC0AC \uD6C4 \uCE74\uCE74\uC624\uD398\uC774 \uCC3D \uC5F4\uAE30)</div>
        <bo-grid :columns="readyGridColumns" :rows="result.readyResult ? [result.readyResult] : []" :show-row-num="false" />
      </div>

      <!-- \uC218\uB3D9 \uC2B9\uC778 \uC601\uC5ED -->
      <div style="background:#f0f4ff;border:1px solid #93c5fd;border-radius:6px;padding:10px;margin-bottom:8px">
        <div style="font-weight:600;margin-bottom:8px;color:#1d4ed8">\u{1F511} \uC218\uB3D9 \uC2B9\uC778 (\uCE74\uCE74\uC624\uD398\uC774 \uACB0\uC81C \uC644\uB8CC \uD6C4)</div>
        <div style="font-size:11px;color:#555;margin-bottom:6px">
          \uCE74\uCE74\uC624\uD398\uC774 \uACB0\uC81C\uCC3D \uC644\uB8CC \uD6C4 approval_url \uB85C \uB9AC\uB2E4\uC774\uB809\uD2B8 \uC2DC <code>pg_token</code> \uD30C\uB77C\uBBF8\uD130\uAC00 \uBD99\uC2B5\uB2C8\uB2E4. \uBCF5\uC0AC \uD6C4 \uC544\uB798 \uC785\uB825:
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
      <b>1.</b> [\uACB0\uC81C \uC900\uBE44] <code>POST /api/co/cm/kakaopay/ready</code> \u2192 tid + next_redirect_pc_url \uBC18\uD658<br>
      <b>2.</b> [\uCC3D \uC5F4\uAE30] next_redirect_pc_url \uB85C \uD31D\uC5C5 \uC624\uD508 \u2192 \uCE74\uCE74\uC624\uD398\uC774 \uACB0\uC81C UI \uD45C\uC2DC<br>
      <b>3.</b> [\uACB0\uC81C \uC644\uB8CC] approval_url \uB85C \uB9AC\uB2E4\uC774\uB809\uD2B8 (URL \uD30C\uB77C\uBBF8\uD130: <code>pg_token</code>)<br>
      <b>4.</b> [\uACB0\uC81C \uC2B9\uC778] <code>POST /api/co/cm/kakaopay/approve</code> (tid + pg_token) \u2192 \uCD5C\uC885 \uC2B9\uC778<br>
      <b>5.</b> [\uACB0\uC81C \uCDE8\uC18C] <code>POST /api/co/cm/kakaopay/cancel</code> (tid + cancelAmount)<br>
      <br>
      sy_prop: <code>app.pay.kakaopay.cid</code> / <code>app.pay.kakaopay.secret-key</code><br>
      \uD14C\uC2A4\uD2B8 CID: <code>TC0ONETIME</code> \u2014 \uCE74\uCE74\uC624\uD398\uC774 \uACF5\uC2DD \uD14C\uC2A4\uD2B8 \uAC00\uB9F9\uC810\uCF54\uB4DC (\uC6B4\uC601 \uC2DC \uBCC4\uB3C4 \uBC1C\uAE09)
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.pay.kakaopay." default-prop-key-filter="app.pay.kakaopay" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/kakaopay" default-key-filter="app.pay.kakaopay" />
</div>`};
