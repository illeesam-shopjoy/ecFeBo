window._ecMemberHistState=window._ecMemberHistState||{tab:"orders",tabMode:"tab"},window.MbMemberHist={name:"MbMemberHist",props:{navigate:{type:Function,default:()=>{}},memberId:{type:String,default:null},onClose:{type:Function,default:null}},setup(o){const{computed:i,reactive:s,watch:l,onMounted:w}=Vue,b=window.boApp.showRefModal,a=s({loading:!1,tab:window._ecMemberHistState.tab||"orders",tabMode2:window._ecMemberHistState.tabMode||"tab"}),m=(e,t={})=>{console.warn("[handleBtnAction] unknown cmd:",e)},r=(e,t={})=>{if(e==="tab-select"){a.tab=t;return}else if(e==="tab-mode"){a.tabMode2=t;return}else{if(e==="orders-rowView")return o.navigate("odOrderDtl",{id:t});if(e==="claims-rowView")return o.navigate("odClaimDtl",{id:t});if(e==="row-ref")return b(t.type,t.id);console.warn("[handleSelectAction] unknown cmd:",e)}};l(()=>o.memberId,()=>{}),l(()=>a.tab,e=>{window._ecMemberHistState.tab=e}),l(()=>a.tabMode2,e=>{window._ecMemberHistState.tabMode=e});const u=e=>a.tabMode2!=="tab"||a.tab===e,d=i(()=>({MB000001:[{orderId:"ORD001",orderDate:"2026-04-20 10:00",prodNm:"\uC0C1\uD488A",totalPrice:5e4,statusCd:"PAID"}],MB000002:[{orderId:"ORD002",orderDate:"2026-04-19 14:00",prodNm:"\uC0C1\uD488B",totalPrice:3e4,statusCd:"SHIPPED"}]})[o.memberId]||[]),c=i(()=>({MB000001:[{claimId:"CLAIM001",orderId:"ORD001",type:"\uBC18\uD488",statusCd:"PENDING",reasonCd:"\uC0C1\uD488\uC624\uB958",requestDate:"2026-04-20"}]})[o.memberId]||[]),f=s([{id:"orders",label:"\uC5F0\uAD00 \uC8FC\uBB38",icon:"\u{1F6D2}",get count(){return d.value.length}},{id:"claims",label:"\uC5F0\uAD00 \uD074\uB808\uC784",icon:"\u21A9",get count(){return c.value.length}}]),n={};return n.orderGrid=[{key:"orderId",label:"\uC8FC\uBB38ID",refLink:"order"},{key:"orderDate",label:"\uC8FC\uBB38\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"prodNm",label:"\uC0C1\uD488"},{key:"totalPrice",label:"\uAE08\uC561",fmt:e=>coUtil.cofWon(e)},{key:"statusCd",label:"\uC0C1\uD0DC"},{type:"actions",actions:[{label:"\uC0C1\uC138",cls:"btn btn_detail",onClick:e=>r("orders-rowView",e.orderId)}]}],n.claimGrid=[{key:"claimId",label:"\uD074\uB808\uC784ID",refLink:"claim"},{key:"orderId",label:"\uC8FC\uBB38ID",refLink:"order"},{key:"type",label:"\uC720\uD615"},{key:"statusCd",label:"\uC0C1\uD0DC"},{key:"reasonCd",label:"\uC0AC\uC720"},{key:"requestDate",label:"\uC2E0\uCCAD\uC77C",fmt:e=>e?e.slice(0,10):""},{type:"actions",actions:[{label:"\uC0C1\uC138",cls:"btn btn_detail",onClick:e=>r("claims-rowView",e.claimId)}]}],{columns:n,uiState:a,handleBtnAction:m,handleSelectAction:r,cfMemberOrders:d,cfMemberClaims:c,tabs:f,showTab:u}},template:`
<div>
  <!-- ===== \u25A0. \uC774\uB825 \uD0C0\uC774\uD2C0 (\uBAA9\uB85D [\uC774\uB825] \uB85C \uC5F0 \uACBD\uC6B0\uC5D0\uB9CC \uC6B0\uCE21 \uB2EB\uAE30 \uC81C\uACF5) ================= -->
  <div style="font-size:13px;font-weight:700;color:#555;padding:0 0 12px;display:flex;align-items:center;">
    <span style="color:#e8587a;font-size:8px;margin-right:5px;vertical-align:middle;">
      \u25CF
    </span>
    \uC774\uB825\uC815\uBCF4
    <span v-if="memberId" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">
      #{{ memberId }}
    </span>
    <button v-if="onClose" class="btn btn_close" style="margin-left:auto;" @click="onClose()">\uB2EB\uAE30</button>
  </div>
  <!-- ===== \u25A1. \uC774\uB825 \uD0C0\uC774\uD2C0 ================================================== -->
  <!-- ===== \u25A0. \uD0ED \uC601\uC5ED ==================================================== -->
  <bo-tab-bar :tabs="tabs" :tab="uiState.tab" :tab-mode="uiState.tabMode2"
    @tab-select="id => handleSelectAction('tab-select', id)"
    @mode-select="m => handleSelectAction('tab-mode', m)" />
  <!-- ===== \u25A1. \uD0ED \uC601\uC5ED ==================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="uiState.tabMode2!=='tab' ? 'dtl-tab-grid cols-'+uiState.tabMode2.charAt(0) : ''">
    <!-- ===== \u25A0.\u25A0. \uC5F0\uAD00 \uC8FC\uBB38 ================================================= -->
    <bo-container v-show="showTab('orders')" card-style="margin:0;">
      <template #top>
        <div v-if="uiState.tabMode2!=='tab'" class="dtl-tab-card-title">
          \u{1F6D2} \uC5F0\uAD00 \uC8FC\uBB38
          <span class="tab-count">
            {{ cfMemberOrders.length }}
          </span>
        </div>
      </template>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.orderGrid" :rows="cfMemberOrders" row-key="orderId" empty-text="\uC8FC\uBB38 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." @ref-click="ref => handleSelectAction('row-ref', ref)" />
    </bo-container>
    <!-- ===== \u25A1.\u25A0. \uC5F0\uAD00 \uC8FC\uBB38 ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uC5F0\uAD00 \uD074\uB808\uC784 ================================================ -->
    <bo-container v-show="showTab('claims')" card-style="margin:0;">
      <template #top>
        <div v-if="uiState.tabMode2!=='tab'" class="dtl-tab-card-title">
          \u21A9 \uC5F0\uAD00 \uD074\uB808\uC784
          <span class="tab-count">
            {{ cfMemberClaims.length }}
          </span>
        </div>
      </template>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.claimGrid" :rows="cfMemberClaims" row-key="claimId" empty-text="\uD074\uB808\uC784 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." @ref-click="ref => handleSelectAction('row-ref', ref)" />
    </bo-container>
    <!-- ===== \u25A1.\u25A0. \uC5F0\uAD00 \uD074\uB808\uC784 ================================================ -->
  </div>
  <!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
</div>
`};
