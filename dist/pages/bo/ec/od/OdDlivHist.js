window._ecDlivHistState=window._ecDlivHistState||{tab:"order",tabMode:"tab"},window.OdDlivHist={name:"OdDlivHist",props:{navigate:{type:Function,required:!0},orderId:{type:String,default:null}},setup(i){const{ref:M,computed:n,reactive:l,watch:h,onMounted:g}=Vue,d=window.boApp.showRefModal,o=l([]),m=l([]),y=l([]),a=l({loading:!1,botTab:window._ecDlivHistState.tab||"order",tabMode2:"tab"}),c=Vue.toRef(a,"botTab"),R=Vue.toRef(a,"tabMode2"),k=(e,t={})=>{if(e==="tab-change"){a.tabMode2==="tab"&&(a.botTab=t);return}else{if(e==="histList-memberRef")return d("member",t);if(e==="histList-orderEdit")return i.navigate("odOrderDtl",{id:t});console.warn("[handleBtnAction] unknown cmd:",e)}},r=(e,t={})=>{if(e==="histList-rowRefClick")return d(t.type,t.id);if(e==="histList-rowClaimEdit")return i.navigate("odClaimDtl",{id:t});console.warn("[handleSelectAction] unknown cmd:",e)},A=async(e="DEFAULT")=>{var t,u,f,w;a.loading=!0;try{const s=await boApiSvc.odDliv.getPage({pageNo:1,pageSize:1e4},"\uBC30\uC1A1\uAD00\uB9AC","\uC774\uB825\uC870\uD68C");o.splice(0,o.length,...((u=(t=s.data)==null?void 0:t.data)==null?void 0:u.pageList)||((w=(f=s.data)==null?void 0:f.data)==null?void 0:w.list)||[]),a.error=null}catch(s){console.error("[catch-info]",s),a.error=s.message}finally{a.loading=!1}};h(c,e=>{window._ecDlivHistState.tab=e});const D=e=>a.tabMode2!=="tab"||a.botTab===e,b=n(()=>window.safeArrayUtils.safeFind(y,e=>e.orderId===i.orderId)||null),v=n(()=>window.safeArrayUtils.safeFilter(m,e=>e.orderId===i.orderId)),O=l([{id:"order",label:"\uC5F0\uAD00 \uC8FC\uBB38",icon:"\u{1F6D2}",get count(){return b.value?1:0}},{id:"claims",label:"\uC5F0\uAD00 \uD074\uB808\uC784",icon:"\u21A9",get count(){return v.value.length}}]);g(async()=>{A()});const p={};return p.claimGrid=[{key:"claimId",label:"\uD074\uB808\uC784ID",style:"width:120px;",refLink:"claim"},{key:"type",label:"\uC720\uD615",style:"width:70px;"},{key:"statusCd",label:"\uC0C1\uD0DC",style:"width:90px;"},{key:"reasonCd",label:"\uC0AC\uC720"},{key:"requestDate",label:"\uC2E0\uCCAD\uC77C",style:"width:100px;",fmt:e=>(e||"").slice(0,10)},{type:"actions",actions:[{label:"\uC0C1\uC138",cls:"btn btn-blue btn-xs",onClick:e=>r("histList-rowClaimEdit",e.claimId)}]}],{columns:p,botTab:c,tabMode2:R,handleBtnAction:k,handleSelectAction:r,cfRelatedOrder:b,cfRelatedClaims:v,tabs:O,showTab:D,showRefModal:d}},template:`
<!-- ===== \u25A0. \uC774\uB825 \uC601\uC5ED (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container title="\uC774\uB825\uC815\uBCF4">
<!-- ===== \u25A0. \uD0ED \uC601\uC5ED ==================================================== -->
<bo-tab-bar :tabs="tabs" :tab="botTab" :tab-mode="tabMode2" :show-modes="false"
  @tab-select="id => handleBtnAction('tab-change', id)" />
<!-- ===== \u25A1. \uD0ED \uC601\uC5ED ==================================================== -->
<!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
<div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
  <!-- ===== \u25A0.\u25A0. \uC5F0\uAD00 \uC8FC\uBB38 ================================================= -->
  <div class="dtl-pane" v-show="showTab('order')">
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u{1F6D2} \uC5F0\uAD00 \uC8FC\uBB38
      <span class="tab-count">
        {{ cfRelatedOrder ? 1 : 0 }}
      </span>
    </div>
    <template v-if="cfRelatedOrder">
      <div class="detail-row">
        <span class="detail-label">
          \uC8FC\uBB38ID
        </span>
        <span class="detail-value">
          {{ cfRelatedOrder.orderId }}
        </span>
      </div>
      <div class="detail-row">
        <span class="detail-label">
          \uD68C\uC6D0
        </span>
        <span class="detail-value">
          <span class="ref-link" @click="handleBtnAction('histList-memberRef', cfRelatedOrder.userId)">
            {{ cfRelatedOrder.userNm }}
          </span>
        </span>
      </div>
      <div class="detail-row">
        <span class="detail-label">
          \uC0C1\uD488
        </span>
        <span class="detail-value">
          {{ cfRelatedOrder.prodNm }}
        </span>
      </div>
      <div class="detail-row">
        <span class="detail-label">
          \uAE08\uC561
        </span>
        <span class="detail-value">
          {{ (cfRelatedOrder.totalPrice||0).toLocaleString() }}\uC6D0
        </span>
      </div>
      <div class="detail-row">
        <span class="detail-label">
          \uC0C1\uD0DC
        </span>
        <span class="detail-value">
          {{ cfRelatedOrder.statusCd }}
        </span>
      </div>
      <div style="margin-top:14px;">
        <button class="btn btn-blue btn-sm" @click="handleBtnAction('histList-orderEdit', cfRelatedOrder.orderId)">
          \uC8FC\uBB38 \uC0C1\uC138 \uC218\uC815
        </button>
      </div>
    </template>
    <div v-else style="text-align:center;color:#aaa;padding:30px;font-size:13px;">
      \uC5F0\uAD00 \uC8FC\uBB38 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC5F0\uAD00 \uC8FC\uBB38 ================================================= -->
  <!-- ===== \u25A0.\u25A0. \uC5F0\uAD00 \uD074\uB808\uC784 ================================================ -->
  <div class="dtl-pane" v-show="showTab('claims')">
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u21A9 \uC5F0\uAD00 \uD074\uB808\uC784
      <span class="tab-count">
        {{ cfRelatedClaims.length }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
    <bo-grid bare :columns="columns.claimGrid" :rows="cfRelatedClaims" row-key="claimId"
      empty-text="\uC5F0\uAD00 \uD074\uB808\uC784\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." @ref-click="({type,id}) => handleSelectAction('histList-rowRefClick', {type, id})" />
  </div>
  <!-- ===== \u25A1.\u25A1. \uC5F0\uAD00 \uD074\uB808\uC784 ================================================ -->
</div>
<!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
</bo-container>
<!-- ===== \u25A1. \uC774\uB825 \uC601\uC5ED ================================================== -->
`};
