window.OdClaimCalcModal={name:"OdClaimCalcModal",props:{show:{type:Boolean,default:!1},claimId:{type:String,default:""},orderId:{type:String,default:""},previewItems:{type:Array,default:()=>[]},previewClaimType:{type:String,default:""},previewOrderId:{type:String,default:""},zIndex:{type:Number,default:9e3}},emits:["close"],setup(s,{emit:A}){const{ref:U,reactive:C,watch:S,onMounted:I}=Vue,t=C({loading:!1,switchLoading:!1,claimId:"",claimType:"",isPreview:!1,data:null,orderClaims:[]}),g=function(a,e){var d=a.claimItems||[],n=d.reduce(function(m,i){return m+(i.itemAmt||i.item_amt||(i.unitPrice||i.unit_price||0)*(i.claimQty||i.claim_qty||1))},0),p=e.payAmt||e.pay_amt||e.totalAmt||e.total_amt||0,r=(e.orderItems||[]).reduce(function(m,i){return m+(i.itemOrderAmt||i.item_order_amt||(i.unitPrice||i.unit_price||i.salePrice||0)*(i.orderQty||i.order_qty||1))},0),o=r>0?n/r:p>0?n/p:0;o>1&&(o=1);var l=Math.round((e.couponDiscntAmt||e.couponDiscAmt||0)*o),c=Math.round((e.saveUseAmt||e.saveUsedAmt||0)*o),f=Math.round((e.cacheUsedAmt||0)*o),v=d.reduce(function(m,i){return m+(i.claimQty||i.claim_qty||1)},0),y=(e.orderItems||[]).reduce(function(m,i){return m+(i.orderQty||i.order_qty||1)},0),x=y>0&&v>=y,w=x&&(e.shippingFee||e.dlivFee)||0,T=Math.max(0,n-l-c-f+w);return{itemAmt:n,couponDiscAmt:l,saveUsedAmt:c,cacheUsedAmt:f,dlivFeeRefund:w,refundBase:T,isFullCancel:x,ratio:o,orderTotalAmt:p,couponNm:e.couponNm||"",saveGradePct:e.saveGradePct||0}},b=async function(a,e){var d=await boApiSvc.odClaim.getById(a,"\uD074\uB808\uC784\uACC4\uC0B0","\uC870\uD68C"),n=d.data&&d.data.data||d.data||{},p=e||n.orderId||"",r={};if(p){var o=await boApiSvc.odOrder.getById(p,"\uD074\uB808\uC784\uACC4\uC0B0","\uC8FC\uBB38\uC870\uD68C");r=o.data&&o.data.data||o.data||{}}var l=await boApiSvc.odClaim.getStatusHist(a,"\uD074\uB808\uC784\uACC4\uC0B0","\uC0C1\uD0DC\uC774\uB825"),c=l.data&&l.data.data||[];return{claimData:n,orderData:r,statusHist:c,resolvedOrderId:p}},u=async function(){var r,o,l,c;t.loading=!0,t.isPreview=!0,t.data=null,t.orderClaims=[],t.claimId="",t.claimType=s.previewClaimType||"";try{var a=s.previewOrderId||s.orderId||"",e={};if(a){var d=await boApiSvc.odOrder.getById(a,"\uD074\uB808\uC784\uACC4\uC0B0","\uC8FC\uBB38\uC870\uD68C").catch(function(){return null});e=d&&(d.data&&d.data.data||d.data)||{}}var n={claimItems:s.previewItems||[],claimTypeCd:s.previewClaimType||"",orderId:a},p=a?await boApiSvc.odClaim.getPage({orderId:a,pageNo:1,pageSize:100},"\uD074\uB808\uC784\uACC4\uC0B0","\uC8FC\uBB38\uD074\uB808\uC784\uBAA9\uB85D").catch(function(){return null}):null;t.orderClaims=p&&(((o=(r=p.data)==null?void 0:r.data)==null?void 0:o.pageList)||((c=(l=p.data)==null?void 0:l.data)==null?void 0:c.list)||[])||[],t.data={claim:n,order:e,calc:g(n,e),statusHist:[]}}catch(f){console.error("[OdClaimCalcModal] preview error",f)}finally{t.loading=!1}},h=async function(a,e){var c,f,v,y;if(a){t.loading=!0,t.isPreview=!1,t.data=null,t.orderClaims=[],t.claimId=a,t.claimType="";try{var{claimData:d,orderData:n,statusHist:p,resolvedOrderId:r}=await b(a,e||"");if(t.claimType=d.claimTypeCd||"",t.data={claim:d,order:n,calc:g(d,n),statusHist:p},r){var o=await boApiSvc.odClaim.getPage({orderId:r,pageNo:1,pageSize:100},"\uD074\uB808\uC784\uACC4\uC0B0","\uC8FC\uBB38\uD074\uB808\uC784\uBAA9\uB85D").catch(function(){return null}),l=o&&(((f=(c=o.data)==null?void 0:c.data)==null?void 0:f.pageList)||((y=(v=o.data)==null?void 0:v.data)==null?void 0:y.list)||[])||[];t.orderClaims=l.length?l:[d]}}catch(x){console.error("[OdClaimCalcModal] load error",x)}finally{t.loading=!1}}};S([()=>s.show,()=>s.claimId],async function([a,e]){a&&(e?await h(e,s.orderId):s.previewItems&&s.previewItems.length&&await u())},{immediate:!1}),I(function(){s.show&&(s.claimId?h(s.claimId,s.orderId):s.previewItems&&s.previewItems.length&&u())});const z=async function(a){if(!(!a||a===t.claimId)){t.switchLoading=!0;try{var e=t.orderClaims.find(function(r){return r.claimId===a})||{},{claimData:d,orderData:n,statusHist:p}=await b(a,e.orderId||t.data&&t.data.claim&&t.data.claim.orderId||"");t.claimId=a,t.claimType=d.claimTypeCd||"",t.data={claim:d,order:n,calc:g(d,n),statusHist:p}}catch(r){console.error("[OdClaimCalcModal] switch error",r)}finally{t.switchLoading=!1}}},k=function(){A("close")},L=Vue.ref(!1);return{state:t,handleSwitch:z,handleClose:k,debugOpen:L,orderItemsColumns:[{key:"prodNm",label:"\uC0C1\uD488\uBA85",fmt:(a,e)=>e.prodNm||e.prod_nm||"-"},{key:"orderQty",label:"\uC218\uB7C9",align:"center",fmt:(a,e)=>e.orderQty||e.order_qty||e.claimQty||1},{key:"itemAmt",label:"\uAE08\uC561",align:"right",fmt:(a,e)=>(e.itemAmt||e.item_amt||(e.salePrice||e.sale_price||0)*(e.orderQty||e.order_qty||1)||0).toLocaleString()+"\uC6D0"}],claimItemsColumns:[{key:"prodNm",label:"\uC0C1\uD488\uBA85",fmt:(a,e)=>e.prodNm||e.prod_nm||"-"},{key:"claimQty",label:"\uC218\uB7C9",align:"center",fmt:(a,e)=>e.claimQty||e.claim_qty||1},{key:"itemAmt",label:"\uD56D\uBAA9\uAE08\uC561",align:"right",fmt:(a,e)=>(e.itemAmt||e.item_amt||0).toLocaleString()+"\uC6D0"}]}},template:`
<bo-modal :show="show" :title="state.claimType==='CANCEL'?'\uCDE8\uC18C \uD074\uB808\uC784 \uACC4\uC0B0 (\uC608\uC815)':state.claimType==='RETURN'?'\uBC18\uD488 \uD074\uB808\uC784 \uACC4\uC0B0 (\uC608\uC815)':state.claimType==='EXCHANGE'?'\uAD50\uD658 \uD074\uB808\uC784 \uACC4\uC0B0 (\uC608\uC815)':'\uD074\uB808\uC784 \uACC4\uC0B0 (\uC608\uC815)'" width="680px" box-pad="12px" body-pad="12px" :z-index="zIndex" @close="handleClose">
  <template #default>
    <!-- \u2500\u2500 \uD30C\uB77C\uBBF8\uD130 \uB514\uBC84\uADF8 \uC139\uC158 (\uC811\uC774\uC2DD / \uB2E4\uD06C \uD1A4) \u2500\u2500 -->
    <div style="margin-bottom:10px;border-radius:8px;overflow:hidden;font-size:11px;border:1px solid #334155;">
      <div @click="debugOpen=!debugOpen" style="display:flex;align-items:center;gap:6px;padding:5px 10px;background:#1e293b;cursor:pointer;user-select:none;">
        <span style="color:#94a3b8;font-weight:600;font-family:monospace;">\u{1F4CB} \uC804\uB2EC\uB41C \uD30C\uB77C\uBBF8\uD130</span>
        <span style="margin-left:auto;color:#64748b;font-size:10px;">{{ debugOpen ? '\u25B2 \uC811\uAE30' : '\u25BC \uD3BC\uCE58\uAE30' }}</span>
      </div>
      <div v-if="debugOpen" style="padding:8px 10px;background:#0f172a;display:grid;grid-template-columns:auto 1fr;gap:3px 12px;font-family:monospace;">
        <span style="color:#64748b;">mode</span>
        <span :style="state.isPreview?'color:#fbbf24':'color:#60a5fa'">{{ state.isPreview ? 'preview (claimId \uC5C6\uC74C)' : 'claimId \uC9C1\uC811 \uC870\uD68C' }}</span>
        <span style="color:#64748b;">claimId</span>
        <span style="color:#f1f5f9;">{{ claimId || '\u2014' }}</span>
        <span style="color:#64748b;">orderId</span>
        <span style="color:#38bdf8;">{{ previewOrderId || orderId || '\u2014' }}</span>
        <span style="color:#64748b;">previewClaimType</span>
        <span :style="previewClaimType==='CANCEL'?'color:#f87171':previewClaimType==='RETURN'?'color:#fb923c':'color:#818cf8'">{{ previewClaimType || '\u2014' }}</span>
        <span style="color:#64748b;">state.claimType</span>
        <span :style="state.claimType==='CANCEL'?'color:#f87171':state.claimType==='RETURN'?'color:#fb923c':'color:#818cf8'">{{ state.claimType || '(\uBBF8\uACB0\uC815)' }}</span>
        <template v-if="state.isPreview">
          <span style="color:#64748b;">previewItems</span>
          <span style="color:#f1f5f9;">{{ previewItems ? previewItems.length + '\uAC74' : '\u2014' }}</span>
        </template>
        <!-- previewItems \uBAA9\uB85D -->
        <template v-if="state.isPreview &amp;&amp; previewItems &amp;&amp; previewItems.length">
          <div style="grid-column:1/-1;margin-top:4px;border-top:1px solid #1e293b;padding-top:6px;">
            <div v-for="(it, i) in previewItems" :key="i"
              style="display:grid;grid-template-columns:1fr auto auto auto;gap:0 10px;align-items:center;padding:3px 0;border-bottom:1px solid #1e293b;">
              <span style="color:#94a3b8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="it.orderItemId">
                {{ it.prodNm || it.orderItemId }}
              </span>
              <span style="color:#64748b;white-space:nowrap;">qty</span>
              <span style="color:#e2e8f0;text-align:right;">{{ it.claimQty }}</span>
              <span style="color:#34d399;text-align:right;min-width:72px;">{{ (it.itemAmt||0).toLocaleString() }}\uC6D0</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div v-if="state.loading" style="text-align:center;padding:40px;color:#94a3b8;">\u23F3 \uACC4\uC0B0 \uC911...</div>
    <template v-else-if="state.data">
      <!-- \u2460 \uBA54\uD0C0 \uBC14: \uD68C\uC6D0\xB7\uC8FC\uBB38\xB7\uD074\uB808\uC784\xB7\uC2E0\uCCAD\uC77C\xB7\uC0C1\uD0DC \uD55C \uC904 (preview \uBAA8\uB4DC\uB294 \uC8FC\uBB38\uBC88\uD638\uB9CC) -->
      <div v-if="state.isPreview" style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding:8px 14px;background:#f1f5f9;border-radius:10px;border:1px solid #e2e8f0;font-size:11px;">
        <span style="color:#94a3b8;">\uC8FC\uBB38\uBC88\uD638</span>
        <span style="font-weight:700;color:#1d4ed8;font-family:monospace;">{{ state.data.claim.orderId || '-' }}</span>
        <span style="padding:1px 8px;border-radius:8px;font-size:10px;font-weight:700;"
          :style="state.claimType==='CANCEL'?'background:#fee2e2;color:#b91c1c':state.claimType==='RETURN'?'background:#fff7ed;color:#9a3412':'background:#dbeafe;color:#1d4ed8'">
          {{ state.claimType==='CANCEL'?'\uCDE8\uC18C':state.claimType==='RETURN'?'\uBC18\uD488':'\uAD50\uD658' }} (\uC2E0\uCCAD \uC608\uC815)
        </span>
      </div>
      <div v-else style="display:grid;grid-template-columns:auto auto 1fr auto auto;gap:0;align-items:stretch;margin-bottom:14px;border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;font-size:11px;">
        <div style="padding:8px 14px;background:#f1f5f9;border-right:1px solid #e2e8f0;">
          <div style="color:#94a3b8;margin-bottom:2px;">\uD68C\uC6D0</div>
          <div style="font-weight:700;color:#111;white-space:nowrap;">{{ state.data.claim.memberNm || state.data.claim.member_nm || '-' }}</div>
        </div>
        <div style="padding:8px 14px;background:#f1f5f9;border-right:1px solid #e2e8f0;">
          <div style="color:#94a3b8;margin-bottom:2px;">\uC8FC\uBB38\uBC88\uD638</div>
          <div style="font-weight:700;color:#1d4ed8;font-family:monospace;white-space:nowrap;">{{ state.data.claim.orderId || state.data.order.orderId || '-' }}</div>
        </div>
        <div style="padding:8px 14px;background:#f1f5f9;border-right:1px solid #e2e8f0;">
          <div style="color:#94a3b8;margin-bottom:2px;">\uD074\uB808\uC784\uBC88\uD638</div>
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-weight:700;font-family:monospace;color:#111;">{{ state.claimId }}</span>
            <span style="padding:1px 8px;border-radius:8px;font-size:10px;font-weight:700;"
              :style="state.claimType==='CANCEL'?'background:#fee2e2;color:#b91c1c':state.claimType==='RETURN'?'background:#fff7ed;color:#9a3412':'background:#dbeafe;color:#1d4ed8'">
              {{ state.claimType==='CANCEL'?'\uCDE8\uC18C':state.claimType==='RETURN'?'\uBC18\uD488':'\uAD50\uD658' }}
            </span>
          </div>
        </div>
        <div style="padding:8px 14px;background:#f1f5f9;border-right:1px solid #e2e8f0;">
          <div style="color:#94a3b8;margin-bottom:2px;">\uC2E0\uCCAD\uC77C</div>
          <div style="font-weight:600;color:#111;white-space:nowrap;">{{ (state.data.claim.requestDate || state.data.claim.request_date || '').replace('T',' ').slice(0,10) || '-' }}</div>
        </div>
        <div style="padding:8px 14px;background:#f1f5f9;">
          <div style="color:#94a3b8;margin-bottom:2px;">\uC0C1\uD0DC</div>
          <div style="font-weight:700;">
            <span style="padding:2px 8px;border-radius:6px;font-size:10px;"
              :style="(state.data.claim.claimStatusCd||'').includes('COMPLT')?'background:#dcfce7;color:#15803d':(state.data.claim.claimStatusCd||'').includes('CANCEL')?'background:#fee2e2;color:#b91c1c':'background:#fef9c3;color:#92400e'">
              {{ {'REQUEST':'\uC811\uC218','PROCESS':'\uCC98\uB9AC\uC911','COMPLT':'\uC644\uB8CC','CANCEL':'\uCDE8\uC18C'}[state.data.claim.claimStatusCd] || state.data.claim.claimStatusCd || '-' }}
            </span>
          </div>
        </div>
      </div><!-- v-else \uBA54\uD0C0 \uBC14 \uB05D -->
      <!-- \u2461 \uD074\uB808\uC784 \uC804\uD658 \uC120\uD0DD\uBC14 -->
      <div v-if="state.orderClaims.length >= 1" style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding:8px 12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;font-size:11px;">
        <span style="color:#6b7280;white-space:nowrap;">\uC774 \uC8FC\uBB38\uC758 \uD074\uB808\uC784</span>
        <span style="font-weight:700;color:#1d4ed8;">{{ state.orderClaims.length }}\uAC74</span>
        <select :value="state.claimId" @change="handleSwitch($event.target.value)" :disabled="state.switchLoading"
          style="flex:1;padding:4px 8px;border:1px solid #d1d5db;border-radius:6px;font-size:11px;background:#fff;cursor:pointer;">
          <option v-for="c in state.orderClaims" :key="c.claimId" :value="c.claimId">
            {{ c.claimId }} \u2014 {{ c.claimTypeCd==='CANCEL'?'\uCDE8\uC18C':c.claimTypeCd==='RETURN'?'\uBC18\uD488':'\uAD50\uD658' }} / {{ c.claimStatusCd==='REQUEST'?'\uC811\uC218':c.claimStatusCd==='PROCESS'?'\uCC98\uB9AC\uC911':c.claimStatusCd==='COMPLT'?'\uC644\uB8CC':c.claimStatusCd==='CANCEL'?'\uCDE8\uC18C':c.claimStatusCd }}
          </option>
        </select>
        <span v-if="state.switchLoading" style="color:#94a3b8;">\u23F3</span>
      </div>
      <!-- \u2462 \uC0C1\uD488 \uC815\uBCF4 \uCE74\uB4DC (3\uC5F4) -->
      <div style="border-radius:10px;border:1px solid #e2e8f0;overflow:hidden;">
        <div style="padding:8px 12px;background:#f1f5f9;font-size:11px;font-weight:800;color:#374151;border-bottom:1px solid #e2e8f0;">\u{1F6CD} \uC0C1\uD488 \uC815\uBCF4</div>
        <div style="padding:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;align-items:start;">
          <!-- 1\uC5F4: \uD604\uC7AC \uC8FC\uBB38\uC0C1\uD488 \uC815\uBCF4 -->
          <div style="border-radius:8px;border:1px solid #e2e8f0;overflow:hidden;">
            <div style="padding:7px 10px;background:#f8fafc;font-size:11px;font-weight:700;color:#374151;border-bottom:1px solid #e2e8f0;">\u{1F6D2} \uD604\uC7AC \uC8FC\uBB38\uC0C1\uD488 \uC815\uBCF4</div>
            <div style="padding:10px 12px;">
              <bo-grid bare :columns="orderItemsColumns"
                :rows="state.data.order.orderItems || state.data.claim.claimItems || []"
                empty-text="-" style="margin-bottom:8px;font-size:11px;" />
              <div style="border-top:1px solid #e5e7eb;padding-top:6px;font-size:11px;">
                <div style="display:flex;justify-content:space-between;padding:2px 0;color:#6b7280;">
                  <span>\uC0C1\uD488 \uD569\uACC4</span><span style="font-family:monospace;">{{ (state.data.calc.orderTotalAmt || 0).toLocaleString() }}\uC6D0</span>
                </div>
                <div v-if="state.data.order.shippingFee || state.data.order.dlivFee" style="display:flex;justify-content:space-between;padding:2px 0;color:#6b7280;">
                  <span>\uBC30\uC1A1\uBE44</span><span style="font-family:monospace;">{{ (state.data.order.shippingFee || state.data.order.dlivFee || 0).toLocaleString() }}\uC6D0</span>
                </div>
                <div v-if="state.data.order.couponDiscntAmt || state.data.order.couponDiscAmt" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>\uCFE0\uD3F0 \uD560\uC778</span><span style="font-family:monospace;">- {{ (state.data.order.couponDiscntAmt || state.data.order.couponDiscAmt || 0).toLocaleString() }}\uC6D0</span>
                </div>
                <div v-if="state.data.order.saveUseAmt || state.data.order.saveUsedAmt" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>\uC801\uB9BD\uAE08 \uC0AC\uC6A9</span><span style="font-family:monospace;">- {{ (state.data.order.saveUseAmt || state.data.order.saveUsedAmt || 0).toLocaleString() }}\uC6D0</span>
                </div>
                <div v-if="state.data.order.cacheUsedAmt" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>\uCDA9\uC804\uAE08 \uC0AC\uC6A9</span><span style="font-family:monospace;">- {{ (state.data.order.cacheUsedAmt || 0).toLocaleString() }}\uC6D0</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:5px 0 1px;font-weight:800;border-top:1px solid #e2e8f0;margin-top:3px;">
                  <span>\uC2E4 \uACB0\uC81C\uC561</span>
                  <span style="font-family:monospace;color:#1d4ed8;">{{ (state.data.order.payAmt || state.data.calc.orderTotalAmt || 0).toLocaleString() }}\uC6D0</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 2\uC5F4: \uD074\uB808\uC784 \uC2E0\uCCAD \uD6C4 (\uD658\uBD88 \uC608\uC815) -->
          <div style="border-radius:8px;border:1px solid #bbf7d0;overflow:hidden;">
            <div style="padding:7px 10px;background:#f0fdf4;font-size:11px;font-weight:700;color:#14532d;border-bottom:1px solid #bbf7d0;">\u267B\uFE0F \uD074\uB808\uC784 \uC2E0\uCCAD \uD6C4 (\uD658\uBD88 \uC608\uC815)</div>
            <div style="padding:10px 12px;">
              <bo-grid bare :columns="claimItemsColumns"
                :rows="state.data.claim.claimItems || []"
                empty-text="\uD56D\uBAA9 \uC5C6\uC74C" style="margin-bottom:8px;font-size:11px;" />
              <div style="border-top:1px solid #bbf7d0;padding-top:6px;font-size:11px;">
                <div style="display:flex;justify-content:space-between;padding:2px 0;color:#6b7280;">
                  <span>\uD074\uB808\uC784 \uD56D\uBAA9 \uAE08\uC561</span><span style="font-family:monospace;">{{ (state.data.calc.itemAmt || 0).toLocaleString() }}\uC6D0</span>
                </div>
                <div v-if="state.data.calc.dlivFeeRefund > 0" style="display:flex;justify-content:space-between;padding:2px 0;color:#059669;">
                  <span>\uBC30\uC1A1\uBE44 \uD658\uBD88 (\uC804\uCCB4\uCDE8\uC18C)</span><span style="font-family:monospace;">+ {{ state.data.calc.dlivFeeRefund.toLocaleString() }}\uC6D0</span>
                </div>
                <div v-if="state.data.calc.couponDiscAmt > 0" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>\uCFE0\uD3F0 \uCC28\uAC10 (\uBE44\uB840)</span><span style="font-family:monospace;">- {{ state.data.calc.couponDiscAmt.toLocaleString() }}\uC6D0</span>
                </div>
                <div v-if="state.data.calc.saveUsedAmt > 0" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>\uC801\uB9BD\uAE08 \uCC28\uAC10 (\uBE44\uB840)</span><span style="font-family:monospace;">- {{ state.data.calc.saveUsedAmt.toLocaleString() }}\uC6D0</span>
                </div>
                <div v-if="state.data.calc.cacheUsedAmt > 0" style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>\uCDA9\uC804\uAE08 \uCC28\uAC10 (\uBE44\uB840)</span><span style="font-family:monospace;">- {{ state.data.calc.cacheUsedAmt.toLocaleString() }}\uC6D0</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:5px 0 1px;font-size:13px;font-weight:800;border-top:1px solid #bbf7d0;margin-top:3px;">
                  <span>\uD658\uBD88 \uC608\uC815\uC561</span>
                  <span style="font-family:monospace;color:#059669;">{{ (state.data.calc.refundBase || 0).toLocaleString() }}\uC6D0</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 3\uC5F4: \uCD5C\uC885 \uC815\uBCF4 -->
          <div style="border-radius:8px;border:1px solid #a5b4fc;overflow:hidden;">
            <div style="padding:7px 10px;background:#eef2ff;font-size:11px;font-weight:700;color:#3730a3;border-bottom:1px solid #a5b4fc;">\u2705 \uCD5C\uC885 \uC815\uBCF4</div>
            <div style="padding:10px 12px;font-size:11px;">
              <div style="font-size:10px;font-weight:700;color:#4f46e5;margin-bottom:4px;">\uC720\uC9C0\uB418\uB294 \uC8FC\uBB38\uC0C1\uD488</div>
              <div style="background:#f5f3ff;border-radius:6px;padding:6px 8px;margin-bottom:8px;">
                <template v-if="(state.data.order.orderItems || []).length > (state.data.claim.claimItems || []).length">
                  <div v-for="(it, i) in (state.data.order.orderItems || [])" :key="i"
                    style="display:flex;justify-content:space-between;padding:2px 0;color:#374151;">
                    <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px;" :title="it.prodNm || it.prod_nm">{{ it.prodNm || it.prod_nm || '-' }}</span>
                    <span style="font-family:monospace;white-space:nowrap;margin-left:4px;">{{ it.orderQty || it.order_qty || 1 }}\uAC1C</span>
                  </div>
                </template>
                <div v-else style="color:#94a3b8;font-size:11px;text-align:center;padding:4px 0;">\uC804\uB7C9 \uD074\uB808\uC784 \uCC98\uB9AC</div>
              </div>
              <div style="font-size:10px;font-weight:700;color:#4f46e5;margin-bottom:4px;">\uCD5C\uC885 \uAE08\uC561 \uC694\uC57D</div>
              <div style="display:flex;flex-direction:column;gap:3px;">
                <div style="display:flex;justify-content:space-between;padding:2px 0;color:#6b7280;">
                  <span>\uC6D0 \uACB0\uC81C\uC561</span>
                  <span style="font-family:monospace;">{{ (state.data.order.payAmt || state.data.calc.orderTotalAmt || 0).toLocaleString() }}\uC6D0</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:2px 0;color:#059669;">
                  <span>\uD658\uBD88 \uC608\uC815\uC561 (\uD604\uC7AC \uD074\uB808\uC784)</span>
                  <span style="font-family:monospace;font-weight:700;">- {{ (state.data.calc.refundBase || 0).toLocaleString() }}\uC6D0</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:2px 0;color:#dc2626;">
                  <span>\uD074\uB808\uC784 \uD658\uBD88\uD569\uACC4 (\uC804\uCCB4)</span>
                  <span style="font-family:monospace;">- {{ state.orderClaims.reduce(function(s,c){return s+(c.refundAmt||0);},0).toLocaleString() }}\uC6D0</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:5px 0 2px;font-weight:800;border-top:1px solid #a5b4fc;margin-top:2px;">
                  <span style="color:#3730a3;">\uCD5C\uC885 \uACB0\uC81C\uC794\uC561</span>
                  <span style="font-family:monospace;color:#1d4ed8;">{{ ((state.data.order.payAmt || state.data.calc.orderTotalAmt || 0) - state.orderClaims.reduce(function(s,c){return s+(c.refundAmt||0);},0)).toLocaleString() }}\uC6D0</span>
                </div>
                <div style="margin-top:6px;padding:5px 8px;background:#e0e7ff;border-radius:6px;text-align:center;font-size:10px;color:#4338ca;font-weight:700;">
                  \uBE44\uB840\uC728 {{ Math.round((state.data.calc.ratio || 0) * 100) }}% \uC801\uC6A9
                </div>
              </div>
            </div>
          </div>
        </div><!-- /grid -->
      </div><!-- /\uC0C1\uD488 \uC815\uBCF4 \uCE74\uB4DC -->
      <!-- \u2463 \uACB0\uC81C \uC815\uBCF4 \uCE74\uB4DC (3\uC5F4) -->
      <div style="margin-top:12px;border-radius:10px;border:1px solid #bfdbfe;overflow:hidden;">
        <div style="padding:8px 12px;background:#eff6ff;font-size:11px;font-weight:800;color:#1e40af;border-bottom:1px solid #bfdbfe;">\u{1F4B3} \uACB0\uC81C \uC815\uBCF4</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;">
          <div style="padding:10px 14px;border-right:1px solid #bfdbfe;">
            <div style="font-size:10px;font-weight:700;color:#1d4ed8;margin-bottom:6px;">\u{1F4CC} \uACB0\uC81C \uC0C1\uC138</div>
            <template v-if="(state.data.order.orderPays || []).length">
              <div v-for="(pay, pi) in (state.data.order.orderPays || [])" :key="pi"
                style="font-size:11px;padding:5px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #dbeafe;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="color:#374151;font-weight:700;">{{ pay.payMethodCdNm || pay.payMethodCd || '-' }}</span>
                  <span style="font-family:monospace;color:#1d4ed8;font-weight:700;">{{ (pay.payAmt || 0).toLocaleString() }}\uC6D0</span>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:3px;color:#94a3b8;font-size:10px;">
                  <span>{{ pay.payStatusCdNm || pay.payStatusCd || '' }}</span>
                  <span>{{ (pay.payDate || '').replace('T',' ').slice(0,16) }}</span>
                  <span v-if="pay.cardNo">\uCE74\uB4DC {{ pay.cardNo }}</span>
                  <span v-if="pay.pgTransactionId" style="font-family:monospace;">PG {{ pay.pgTransactionId }}</span>
                </div>
              </div>
            </template>
            <div v-else style="font-size:11px;color:#94a3b8;padding:6px 8px;background:#f8fafc;border-radius:6px;text-align:center;">\uACB0\uC81C \uB370\uC774\uD130 \uC5C6\uC74C</div>
          </div>
          <div style="padding:10px 14px;border-right:1px solid #bfdbfe;">
            <div style="font-size:10px;font-weight:700;color:#059669;margin-bottom:6px;">\u267B\uFE0F \uD658\uBD88 \uC608\uC815 \uACB0\uC81C\uC218\uB2E8</div>
            <template v-if="(state.data.order.orderPays || []).length">
              <div v-for="(pay, pi) in (state.data.order.orderPays || [])" :key="pi"
                style="font-size:11px;padding:5px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #bbf7d0;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="color:#374151;font-weight:700;">{{ pay.payMethodCdNm || pay.payMethodCd || '-' }}</span>
                  <span style="font-family:monospace;color:#059669;font-weight:700;">{{ Math.round((pay.payAmt || 0) * (state.data.calc.ratio || 0)).toLocaleString() }}\uC6D0 \uC608\uC815</span>
                </div>
                <div style="font-size:10px;color:#6b9b7a;margin-top:2px;">\uC6D0\uACB0\uC81C {{ (pay.payAmt || 0).toLocaleString() }}\uC6D0\uC758 {{ Math.round((state.data.calc.ratio || 0) * 100) }}%</div>
              </div>
            </template>
            <div v-else style="font-size:11px;color:#94a3b8;padding:6px 8px;background:#f0fdf4;border-radius:6px;text-align:center;">\uACB0\uC81C \uB370\uC774\uD130 \uC5C6\uC74C</div>
          </div>
          <div style="padding:10px 14px;background:#f8faff;">
            <div style="font-size:10px;font-weight:700;color:#6366f1;margin-bottom:6px;">\u2705 \uCD5C\uC885 \uACB0\uC81C \uC694\uC57D</div>
            <div style="font-size:11px;display:flex;flex-direction:column;gap:4px;">
              <div style="display:flex;justify-content:space-between;padding:3px 0;color:#6b7280;">
                <span>\uC6D0 \uACB0\uC81C\uC561</span>
                <span style="font-family:monospace;">{{ (state.data.order.payAmt || state.data.calc.orderTotalAmt || 0).toLocaleString() }}\uC6D0</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:3px 0;color:#059669;">
                <span>\uD658\uBD88 \uC608\uC815\uC561 (\uD604\uC7AC \uD074\uB808\uC784)</span>
                <span style="font-family:monospace;font-weight:700;">{{ (state.data.calc.refundBase || 0).toLocaleString() }}\uC6D0</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:3px 0;color:#dc2626;">
                <span>\uD074\uB808\uC784 \uD658\uBD88\uD569\uACC4 (\uC804\uCCB4)</span>
                <span style="font-family:monospace;">{{ state.orderClaims.reduce(function(s,c){return s+(c.refundAmt||0);},0).toLocaleString() }}\uC6D0</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:3px 0;border-top:1px solid #e2e8f0;margin-top:2px;font-weight:800;">
                <span style="color:#374151;">\uCD5C\uC885 \uACB0\uC81C\uC794\uC561</span>
                <span style="font-family:monospace;color:#1d4ed8;">{{ ((state.data.order.payAmt || state.data.calc.orderTotalAmt || 0) - state.orderClaims.reduce(function(s,c){return s+(c.refundAmt||0);},0)).toLocaleString() }}\uC6D0</span>
              </div>
              <div style="margin-top:6px;padding:5px 8px;background:#e0e7ff;border-radius:6px;text-align:center;font-size:10px;color:#4338ca;font-weight:700;">
                \uBE44\uB840\uC728 {{ Math.round((state.data.calc.ratio || 0) * 100) }}% \uC801\uC6A9
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- \u2464 \uD504\uB85C\uBAA8\uC158 \uC815\uBCF4 \uCE74\uB4DC (3\uC5F4) -->
      <div style="margin-top:12px;border-radius:10px;border:1px solid #e9d5ff;overflow:hidden;">
        <div style="padding:8px 12px;background:#f5f3ff;font-size:11px;font-weight:800;color:#6d28d9;border-bottom:1px solid #e9d5ff;">\u{1F381} \uD504\uB85C\uBAA8\uC158 \uC815\uBCF4 (\uD560\uC778, \uCFE0\uD3F0)</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;">
          <div style="padding:10px 14px;border-right:1px solid #e9d5ff;">
            <div style="font-size:10px;font-weight:700;color:#7c3aed;margin-bottom:8px;">\u{1F4CC} \uC0AC\uC6A9\uB41C \uD504\uB85C\uBAA8\uC158 (\uC8FC\uBB38 \uC2DC)</div>
            <div v-if="!(state.data.order.couponDiscntAmt || state.data.order.couponDiscAmt) &amp;&amp; !(state.data.order.saveUseAmt || state.data.order.saveUsedAmt) &amp;&amp; !state.data.order.cacheUsedAmt"
              style="font-size:11px;color:#94a3b8;padding:4px 0;">\uC0AC\uC6A9\uB41C \uD504\uB85C\uBAA8\uC158 \uC5C6\uC74C</div>
            <template v-else>
              <div v-if="state.data.order.couponDiscntAmt || state.data.order.couponDiscAmt"
                style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #e9d5ff;font-size:11px;">
                <div>
                  <span style="color:#7c3aed;font-weight:700;">\u{1F39F} \uCFE0\uD3F0 \uD560\uC778</span>
                  <span v-if="state.data.calc.couponNm" style="color:#94a3b8;font-size:10px;margin-left:4px;">{{ state.data.calc.couponNm }}</span>
                </div>
                <span style="font-family:monospace;color:#dc2626;font-weight:700;">-{{ (state.data.order.couponDiscntAmt || state.data.order.couponDiscAmt || 0).toLocaleString() }}\uC6D0</span>
              </div>
              <div v-if="state.data.order.saveUseAmt || state.data.order.saveUsedAmt"
                style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #e9d5ff;font-size:11px;">
                <span style="color:#7c3aed;font-weight:700;">\u2B50 \uC801\uB9BD\uAE08 \uC0AC\uC6A9</span>
                <span style="font-family:monospace;color:#dc2626;font-weight:700;">-{{ (state.data.order.saveUseAmt || state.data.order.saveUsedAmt || 0).toLocaleString() }}\uC6D0</span>
              </div>
              <div v-if="state.data.order.cacheUsedAmt"
                style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #e9d5ff;font-size:11px;">
                <span style="color:#7c3aed;font-weight:700;">\u{1F4B0} \uCDA9\uC804\uAE08 \uC0AC\uC6A9</span>
                <span style="font-family:monospace;color:#dc2626;font-weight:700;">-{{ (state.data.order.cacheUsedAmt || 0).toLocaleString() }}\uC6D0</span>
              </div>
            </template>
          </div>
          <div style="padding:10px 14px;border-right:1px solid #e9d5ff;">
            <div style="font-size:10px;font-weight:700;color:#059669;margin-bottom:8px;">\u267B\uFE0F \uBCF5\uAD6C\uB418\uB294 \uD504\uB85C\uBAA8\uC158 (\uD074\uB808\uC784 \uC644\uB8CC \uD6C4)</div>
            <div v-if="!(state.data.calc.couponDiscAmt > 0) &amp;&amp; !(state.data.calc.saveUsedAmt > 0) &amp;&amp; !(state.data.calc.cacheUsedAmt > 0)"
              style="font-size:11px;color:#94a3b8;padding:4px 0;">\uBCF5\uAD6C\uB418\uB294 \uD504\uB85C\uBAA8\uC158 \uC5C6\uC74C</div>
            <template v-else>
              <div v-if="state.data.calc.couponDiscAmt > 0"
                style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #bbf7d0;font-size:11px;">
                <div>
                  <span style="color:#059669;font-weight:700;">\u{1F39F} \uCFE0\uD3F0</span>
                  <span v-if="state.data.calc.couponNm" style="color:#94a3b8;font-size:10px;margin-left:4px;">{{ state.data.calc.couponNm }}</span>
                </div>
                <span style="background:#ffedd5;color:#c2410c;padding:1px 8px;border-radius:8px;font-size:10px;font-weight:700;">\uC7AC\uBC1C\uAE09 \uD544\uC694</span>
              </div>
              <div v-if="state.data.calc.saveUsedAmt > 0"
                style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #bbf7d0;font-size:11px;">
                <span style="color:#059669;font-weight:700;">\u2B50 \uC801\uB9BD\uAE08 \uBCF5\uAD6C</span>
                <span style="font-family:monospace;color:#059669;font-weight:700;">+{{ state.data.calc.saveUsedAmt.toLocaleString() }}\uC6D0</span>
              </div>
              <div v-if="state.data.calc.cacheUsedAmt > 0"
                style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;margin-bottom:4px;background:#fff;border-radius:6px;border:1px solid #bbf7d0;font-size:11px;">
                <span style="color:#059669;font-weight:700;">\u{1F4B0} \uCDA9\uC804\uAE08 \uBCF5\uAD6C</span>
                <span style="font-family:monospace;color:#1d4ed8;font-weight:700;">+{{ state.data.calc.cacheUsedAmt.toLocaleString() }}\uC6D0</span>
              </div>
            </template>
          </div>
          <div style="padding:10px 14px;background:#faf5ff;">
            <div style="font-size:10px;font-weight:700;color:#6d28d9;margin-bottom:8px;">\u2705 \uCD5C\uC885 \uD504\uB85C\uBAA8\uC158 \uD604\uD669</div>
            <div style="font-size:11px;display:flex;flex-direction:column;gap:4px;">
              <div v-if="state.data.order.couponDiscntAmt || state.data.order.couponDiscAmt"
                style="padding:4px 8px;background:#fff;border-radius:6px;border:1px solid #e9d5ff;font-size:11px;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="color:#6b7280;">\u{1F39F} \uCFE0\uD3F0 \uC794\uC5EC</span>
                  <span v-if="state.data.calc.couponDiscAmt > 0" style="background:#ffedd5;color:#c2410c;padding:1px 6px;border-radius:6px;font-size:10px;font-weight:700;">\uC7AC\uBC1C\uAE09 \uD544\uC694</span>
                  <span v-else style="color:#94a3b8;font-size:10px;">\uD574\uB2F9\uC5C6\uC74C</span>
                </div>
              </div>
              <div v-if="state.data.order.saveUseAmt || state.data.order.saveUsedAmt"
                style="padding:4px 8px;background:#fff;border-radius:6px;border:1px solid #e9d5ff;font-size:11px;">
                <div style="display:flex;justify-content:space-between;color:#6b7280;">
                  <span>\u2B50 \uC801\uB9BD\uAE08</span>
                  <div style="text-align:right;">
                    <div style="color:#dc2626;">\uC0AC\uC6A9 -{{ (state.data.order.saveUseAmt || state.data.order.saveUsedAmt || 0).toLocaleString() }}\uC6D0</div>
                    <div v-if="state.data.calc.saveUsedAmt > 0" style="color:#059669;">\uBCF5\uAD6C +{{ state.data.calc.saveUsedAmt.toLocaleString() }}\uC6D0</div>
                    <div style="font-weight:700;color:#374151;border-top:1px solid #e9d5ff;margin-top:2px;padding-top:2px;">
                      \uC21C\uCC28\uAC10 {{ ((state.data.order.saveUseAmt || state.data.order.saveUsedAmt || 0) - (state.data.calc.saveUsedAmt || 0)).toLocaleString() }}\uC6D0
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="state.data.order.cacheUsedAmt"
                style="padding:4px 8px;background:#fff;border-radius:6px;border:1px solid #e9d5ff;font-size:11px;">
                <div style="display:flex;justify-content:space-between;color:#6b7280;">
                  <span>\u{1F4B0} \uCDA9\uC804\uAE08</span>
                  <div style="text-align:right;">
                    <div style="color:#dc2626;">\uC0AC\uC6A9 -{{ (state.data.order.cacheUsedAmt || 0).toLocaleString() }}\uC6D0</div>
                    <div v-if="state.data.calc.cacheUsedAmt > 0" style="color:#059669;">\uBCF5\uAD6C +{{ state.data.calc.cacheUsedAmt.toLocaleString() }}\uC6D0</div>
                    <div style="font-weight:700;color:#374151;border-top:1px solid #e9d5ff;margin-top:2px;padding-top:2px;">
                      \uC21C\uCC28\uAC10 {{ ((state.data.order.cacheUsedAmt || 0) - (state.data.calc.cacheUsedAmt || 0)).toLocaleString() }}\uC6D0
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!(state.data.order.couponDiscntAmt || state.data.order.couponDiscAmt) &amp;&amp; !(state.data.order.saveUseAmt || state.data.order.saveUsedAmt) &amp;&amp; !state.data.order.cacheUsedAmt"
                style="font-size:11px;color:#94a3b8;padding:4px 0;">\uD504\uB85C\uBAA8\uC158 \uC5C6\uC74C</div>
            </div>
          </div>
        </div>
      </div>
      <!-- \u2465 \uC0C1\uC138 \uC0AC\uC720 -->
      <div v-if="state.data.claim.reasonDetail || state.data.claim.reason_detail"
        style="margin-top:10px;padding:8px 12px;background:#fafafa;border-radius:8px;border:1px solid #e5e7eb;font-size:11px;">
        <span style="color:#9ca3af;margin-right:8px;">\uC0C1\uC138 \uC0AC\uC720</span>
        <span style="color:#374151;">{{ state.data.claim.reasonDetail || state.data.claim.reason_detail }}</span>
      </div>
      <!-- \u2466 \uC9C4\uD589 \uC774\uB825 \uD0C0\uC784\uB77C\uC778 -->
      <div v-if="(state.data.statusHist || []).length"
        style="margin-top:10px;padding:10px 14px;background:#fafafa;border-radius:8px;border:1px solid #e5e7eb;">
        <div style="font-size:10px;color:#6b7280;font-weight:700;margin-bottom:10px;">\u{1F4CB} \uC9C4\uD589 \uC774\uB825</div>
        <div style="display:flex;align-items:flex-start;gap:0;overflow-x:auto;padding-bottom:4px;">
          <template v-for="(h, i) in (state.data.statusHist || [])" :key="i">
            <div style="display:flex;flex-direction:column;align-items:center;min-width:90px;max-width:110px;">
              <div style="padding:3px 10px;border-radius:12px;font-size:10px;font-weight:700;white-space:nowrap;margin-bottom:4px;"
                :style="(h.claimStatusCd||'').indexOf('COMPLT')>=0?'background:#dcfce7;color:#15803d':(h.claimStatusCd||'').indexOf('CANCEL')>=0?'background:#fee2e2;color:#b91c1c':'background:#dbeafe;color:#1d4ed8'">
                {{ {'REQUEST':'\uC811\uC218','RECEIPT':'\uC811\uC218','PROCESS':'\uCC98\uB9AC\uC911','INSPECT':'\uAC80\uC218\uC911','COMPLT':'\uC644\uB8CC','CANCEL':'\uCDE8\uC18C','REJECT':'\uBC18\uB824','HOLD':'\uBCF4\uB958'}[h.claimStatusCd] || h.claimStatusCd }}
              </div>
              <div style="font-size:9px;color:#9ca3af;text-align:center;">{{ (h.chgDate||'').replace('T',' ').slice(0,16) }}</div>
              <div v-if="h.chgUserId" style="font-size:9px;color:#cbd5e1;text-align:center;margin-top:1px;">{{ h.chgUserId }}</div>
            </div>
            <div v-if="i < (state.data.statusHist||[]).length - 1"
              style="flex-shrink:0;padding:0 4px;color:#d1d5db;font-size:14px;margin-top:6px;">\u203A</div>
          </template>
        </div>
      </div>
      <!-- \u2467 \uC548\uB0B4 -->
      <div style="margin-top:8px;font-size:10px;color:#9ca3af;padding:5px 10px;background:#f9fafb;border-radius:6px;border-left:3px solid #e5e7eb;">
        \u203B \uC2E4\uC81C \uD658\uBD88\uC561\uC740 \uACB0\uC81C \uC218\uB2E8\uBCC4 \uD658\uBD88 \uC815\uCC45\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBE44\uB840\uC728 {{ Math.round(state.data.calc.ratio * 100) }}% \uC801\uC6A9
      </div>
    </template>
  </template>
</bo-modal>
`};
