window.OdOrderPromoPop={name:"OdOrderPromoPop",props:{orderId:{type:String,default:null},showToast:{type:Function,default:()=>{}}},setup(d){const{reactive:i,onMounted:y}=Vue,g=i({loading:!1}),c=i([]),m=i([]),p=i([]),h=i([]),x=()=>{let t=0,o=0,s=0,n=0,a=0,l=0,r=0;for(const e of c)t+=Number(e.itemOrderAmt)||0,o+=Number(e.orgDiscountAmt)||0,s+=Number(e.itemCancelAmt)||0,n+=Number(e.itemCompletedAmt)||0,a+=Number(e.discntUsageAmt)||0,l+=Number(e.couponUsageAmt)||0,r+=Number(e.saveSchdAmt)||0;return{orderAmt:t,discountAmt:o,cancelAmt:s,completedAmt:n,discntUsage:a,couponUsage:l,saveSchd:r}},b=t=>t?String(t).substring(0,16).replace("T"," "):"-",u=t=>Number(t||0).toLocaleString()+"\uC6D0";return y(async()=>{var t,o,s,n,a,l,r,e,f;if(d.orderId){g.loading=!0;try{const[v,I,A,z]=await Promise.all([boApiSvc.odOrderItem.getList({orderId:d.orderId}),boApiSvc.pmDiscntUsage.getPage({orderId:d.orderId,pageSize:200}),boApiSvc.pmCouponUsage.getPage({orderId:d.orderId,pageSize:200}),boApiSvc.pmSaveUsage.getPage({orderId:d.orderId,pageSize:200})]);c.splice(0,c.length,...((t=v.data)==null?void 0:t.data)||[]),m.splice(0,m.length,...((s=(o=I.data)==null?void 0:o.data)==null?void 0:s.pageList)||[]),p.splice(0,p.length,...((a=(n=A.data)==null?void 0:n.data)==null?void 0:a.pageList)||[]),h.splice(0,h.length,...((r=(l=z.data)==null?void 0:l.data)==null?void 0:r.pageList)||[])}catch(v){d.showToast(((f=(e=v.response)==null?void 0:e.data)==null?void 0:f.message)||"\uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0)}finally{g.loading=!1}}}),{uiState:g,items:c,discounts:m,coupons:p,saves:h,cfTotal:x,fnDate:b,fnWon:u}},template:`
<div style="padding:18px;max-width:1080px;margin:0 auto;">
  <div class="page-title">\uC8FC\uBB38 \uD504\uB85C\uBAA8\uC158 \uC0C1\uC138 <span style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">#{{ orderId }}</span></div>

  <div v-if="uiState.loading" style="text-align:center;padding:40px;color:#999;">\uBD88\uB7EC\uC624\uB294 \uC911...</div>

  <template v-else>
    <div class="card" style="padding:12px 16px;margin-bottom:14px;">
      <div style="font-size:13px;font-weight:700;color:#555;margin-bottom:8px;">\uC8FC\uBB38 \uC804\uCCB4 \uAE08\uC561\uACC4\uC0B0 ({{ items.length }}\uAC1C \uD56D\uBAA9)</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;font-size:12px;">
        <div><div style="color:#999;">\uC8FC\uBB38\uAE08\uC561</div><div style="font-weight:700;color:#1565c0;">{{ fnWon(cfTotal().orderAmt) }}</div></div>
        <div><div style="color:#999;">\uD560\uC778 \uC801\uC6A9\uC561</div><div style="font-weight:700;color:#c2410c;">-{{ fnWon(cfTotal().discntUsage) }}</div></div>
        <div><div style="color:#999;">\uCFE0\uD3F0 \uD560\uC778\uC561</div><div style="font-weight:700;color:#c2410c;">-{{ fnWon(cfTotal().couponUsage) }}</div></div>
        <div><div style="color:#999;">\uD655\uC815\uAE08\uC561</div><div style="font-weight:700;color:#15803d;">{{ fnWon(cfTotal().completedAmt) }}</div></div>
        <div><div style="color:#999;">\uC801\uB9BD \uC608\uC815(\uC644\uB8CC\uD6C4)</div><div style="font-weight:700;color:#6a1b9a;">+{{ fnWon(cfTotal().saveSchd) }}</div></div>
      </div>
    </div>

    <div class="card" style="padding:0;margin-bottom:14px;overflow:hidden;">
      <div style="padding:10px 16px;font-size:13px;font-weight:700;color:#555;border-bottom:1px solid #eee;">\uD56D\uBAA9\uBCC4 \uB0B4\uC5ED</div>
      <table class="admin-table" style="font-size:11px;">
        <thead><tr>
          <th>\uC0C1\uD488\uBA85</th><th>\uC8FC\uBB38\uAE08\uC561</th><th>\uD560\uC778</th><th>\uCFE0\uD3F0</th><th>\uC801\uB9BD\uC608\uC815</th><th>\uC0AC\uC740\uD488</th><th>\uD655\uC815\uAE08\uC561</th>
        </tr></thead>
        <tbody>
          <tr v-for="it in items" :key="it.orderItemId">
            <td style="text-align:left;">{{ it.prodNm || '-' }}</td>
            <td style="text-align:right;">{{ fnWon(it.itemOrderAmt) }}</td>
            <td style="text-align:right;color:#c2410c;">{{ it.discntUsageAmt ? '-' + fnWon(it.discntUsageAmt) : '-' }}</td>
            <td style="text-align:right;color:#c2410c;">{{ it.couponUsageAmt ? '-' + fnWon(it.couponUsageAmt) : '-' }}</td>
            <td style="text-align:right;color:#6a1b9a;">{{ it.saveSchdAmt ? '+' + fnWon(it.saveSchdAmt) : '-' }}</td>
            <td style="text-align:center;">{{ it.giftNm || (it.giftId ? it.giftId : '-') }}</td>
            <td style="text-align:right;font-weight:700;color:#15803d;">{{ fnWon(it.itemCompletedAmt) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card" style="padding:12px 16px;margin-bottom:14px;">
      <div style="font-size:12px;font-weight:700;color:#e65100;margin-bottom:6px;">\uD560\uC778 ({{ discounts.length }}\uAC74)</div>
      <table v-if="discounts.length" class="admin-table" style="font-size:11px;">
        <thead><tr><th>\uD560\uC778\uBA85</th><th>\uB300\uC0C1\uD56D\uBAA9</th><th>\uC720\uD615</th><th>\uAC12</th><th>\uD560\uC778\uAE08\uC561</th><th>\uC801\uC6A9\uC77C\uC2DC</th></tr></thead>
        <tbody>
          <tr v-for="d in discounts" :key="d.discntUsageId">
            <td>{{ d.discntNm || d.discntId }}</td>
            <td style="font-family:monospace;font-size:10px;">{{ d.orderItemId ? d.orderItemId.substring(0, 12) + '..' : '\uC8FC\uBB38\uC804\uCCB4' }}</td>
            <td style="text-align:center;">{{ d.discntTypeCd || '-' }}</td>
            <td style="text-align:right;">{{ d.discntValue != null ? d.discntValue : '-' }}</td>
            <td style="text-align:right;">{{ fnWon(d.discntAmt) }}</td>
            <td style="text-align:center;">{{ fnDate(d.usedDate) }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else style="color:#bbb;font-size:11px;">\uC801\uC6A9\uB41C \uD560\uC778 \uC5C6\uC74C</div>
    </div>

    <div class="card" style="padding:12px 16px;margin-bottom:14px;">
      <div style="font-size:12px;font-weight:700;color:#e65100;margin-bottom:6px;">\uCFE0\uD3F0 ({{ coupons.length }}\uAC74)</div>
      <table v-if="coupons.length" class="admin-table" style="font-size:11px;">
        <thead><tr><th>\uCFE0\uD3F0\uBA85</th><th>\uB300\uC0C1\uD56D\uBAA9</th><th>\uCF54\uB4DC</th><th>\uD560\uC778\uAE08\uC561</th><th>\uC0AC\uC6A9\uC77C\uC2DC</th></tr></thead>
        <tbody>
          <tr v-for="c in coupons" :key="c.couponUsageId">
            <td>{{ c.couponNm || c.couponId }}</td>
            <td style="font-family:monospace;font-size:10px;">{{ c.orderItemId ? c.orderItemId.substring(0, 12) + '..' : '\uC8FC\uBB38\uC804\uCCB4' }}</td>
            <td style="font-family:monospace;">{{ c.couponCode || '-' }}</td>
            <td style="text-align:right;">{{ fnWon(c.discountAmt) }}</td>
            <td style="text-align:center;">{{ fnDate(c.usedDate) }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else style="color:#bbb;font-size:11px;">\uC801\uC6A9\uB41C \uCFE0\uD3F0 \uC5C6\uC74C</div>
    </div>

    <div class="card" style="padding:12px 16px;">
      <div style="font-size:12px;font-weight:700;color:#e65100;margin-bottom:6px;">\uC801\uB9BD\uAE08 \uC0AC\uC6A9 ({{ saves.length }}\uAC74)</div>
      <table v-if="saves.length" class="admin-table" style="font-size:11px;">
        <thead><tr><th>\uB300\uC0C1\uD56D\uBAA9</th><th>\uC0AC\uC6A9\uAE08\uC561</th><th>\uC0AC\uC6A9 \uD6C4 \uC794\uC561</th><th>\uC0AC\uC6A9\uC77C\uC2DC</th></tr></thead>
        <tbody>
          <tr v-for="s in saves" :key="s.saveUsageId">
            <td style="font-family:monospace;font-size:10px;">{{ s.orderItemId ? s.orderItemId.substring(0, 12) + '..' : '\uC8FC\uBB38\uC804\uCCB4' }}</td>
            <td style="text-align:right;">{{ fnWon(s.useAmt) }}</td>
            <td style="text-align:right;">{{ fnWon(s.balanceAmt) }}</td>
            <td style="text-align:center;">{{ fnDate(s.usedDate) }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else style="color:#bbb;font-size:11px;">\uC801\uB9BD\uAE08 \uC0AC\uC6A9 \uB0B4\uC5ED \uC5C6\uC74C</div>
    </div>
  </template>
</div>
`};
