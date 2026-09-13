window._ecOrderHistState=window._ecOrderHistState||{tab:"products",tabMode:"tab"},window.OdOrderHist={name:"OdOrderHist",props:{navigate:{type:Function,required:!0},orderId:{type:String,default:null}},setup(i){const{ref:F,reactive:l,computed:c,watch:M,onMounted:L}=Vue,p=window.boApp.showRefModal,s=l([]),b=l([]),u=l([]),n=l([]),a=l({loading:!1,botTab:window._ecOrderHistState.tab||"products",tabMode2:"tab"}),m=Vue.toRef(a,"botTab"),O=Vue.toRef(a,"tabMode2"),y=(t,e={})=>{if(t==="tab-change"){a.tabMode2==="tab"&&(a.botTab=e);return}else{if(t==="histList-orderRef")return p("order",i.orderId);if(t==="histList-dlivEdit")return i.navigate("odDlivDtl",{id:e});console.warn("[handleBtnAction] unknown cmd:",t)}},f=(t,e={})=>{if(t==="histList-rowRefClick")return p(e.type,e.id);if(t==="histList-rowClaimEdit")return i.navigate("odClaimDtl",{id:e});console.warn("[handleSelectAction] unknown cmd:",t)},H=async(t="DEFAULT")=>{var e,v,h,w,x,k,C,S,D,A,I,R;a.loading=!0;try{const[o,N,T]=await Promise.all([boApiSvc.odOrder.getPage({pageNo:1,pageSize:1e4},"\uC8FC\uBB38\uAD00\uB9AC","\uC774\uB825\uC870\uD68C"),boApiSvc.odClaim.getPage({pageNo:1,pageSize:1e4},"\uD074\uB808\uC784\uAD00\uB9AC","\uC774\uB825\uC870\uD68C"),boApiSvc.odDliv.getPage({pageNo:1,pageSize:1e4},"\uBC30\uC1A1\uAD00\uB9AC","\uC774\uB825\uC870\uD68C")]);s.splice(0,s.length,...((v=(e=o.data)==null?void 0:e.data)==null?void 0:v.pageList)||((w=(h=o.data)==null?void 0:h.data)==null?void 0:w.list)||[]),b.splice(0,b.length,...((k=(x=N.data)==null?void 0:x.data)==null?void 0:k.pageList)||((S=(C=N.data)==null?void 0:C.data)==null?void 0:S.list)||[]),u.splice(0,u.length,...((A=(D=T.data)==null?void 0:D.data)==null?void 0:A.pageList)||((R=(I=T.data)==null?void 0:I.data)==null?void 0:R.list)||[]),a.error=null}catch(o){console.error("[catch-info]",o),a.error=o.message}finally{a.loading=!1}};M(m,t=>{window._ecOrderHistState.tab=t});const P=t=>a.tabMode2!=="tab"||a.botTab===t;L(async()=>{const t=window.safeArrayUtils.safeFind(s,e=>e.orderId===i.orderId);t&&n.splice(0,n.length,{no:1,prodNm:t.prodNm||"-",optionNm:"-",qty:1,unitPrice:t.payAmt,totalPrice:t.payAmt,statusCd:t.orderStatusCdNm||t.orderStatusCd}),H()});const d=c(()=>window.safeArrayUtils.safeFind(u||[],t=>t.orderId===i.orderId)||null),g=c(()=>window.safeArrayUtils.safeFilter(b||[],t=>t.orderId===i.orderId)),z=l([{id:"products",label:"\uAD6C\uC131 \uC0C1\uD488",icon:"\u{1F4E6}",get count(){return n.length}},{id:"dliv",label:"\uBC30\uC1A1 \uC774\uB825",icon:"\u{1F69A}",get count(){return d.value?1:0}},{id:"claims",label:"\uC5F0\uAD00 \uD074\uB808\uC784",icon:"\u21A9",get count(){return g.value.length}}]),U=c(()=>{if(!d.value)return[];const t=window.safeArrayUtils.safeFind(s,e=>e.orderId===i.orderId);return[{date:t&&t.orderDate?t.orderDate.slice(0,10):"-",status:"\uC0C1\uD488\uC900\uBE44\uC911",location:"\uBB3C\uB958\uC13C\uD130",memo:"\uC0C1\uD488 \uD3EC\uC7A5 \uC644\uB8CC"},{date:d.value.dlivShipDate||"-",status:"\uBC30\uC1A1\uC911",location:d.value.outboundCourierCd||"-",memo:"\uCD9C\uACE0 \uC644\uB8CC"}].filter(e=>e.date!=="-")}),r={};return r.itemGrid=[{key:"no",label:"No",style:"width:40px;text-align:center;"},{key:"prodNm",label:"\uC0C1\uD488\uBA85"},{key:"optionNm",label:"\uC635\uC158"},{key:"qty",label:"\uC218\uB7C9",style:"width:56px;text-align:center;"},{key:"unitPrice",label:"\uB2E8\uAC00",style:"width:90px;text-align:right;",fmt:t=>coUtil.cofWon(t)},{key:"totalPrice",label:"\uAE08\uC561",style:"width:100px;text-align:right;",align:"right",cellStyle:"font-weight:600",fmt:t=>coUtil.cofWon(t)},{key:"statusCd",label:"\uC0C1\uD0DC",style:"width:90px;"},{type:"actions",actions:[{label:"\uBCF4\uAE30",cls:"btn btn-secondary btn-xs",onClick:()=>y("histList-orderRef")}]}],r.dlivHistGrid=[{key:"date",label:"\uC77C\uC2DC",style:"width:120px;"},{key:"status",label:"\uC0C1\uD0DC",style:"width:90px;",badge:()=>"badge-blue"},{key:"location",label:"\uC704\uCE58"},{key:"memo",label:"\uBA54\uBAA8"}],r.claimGrid=[{key:"claimId",label:"\uD074\uB808\uC784ID",style:"width:120px;",refLink:"claim"},{key:"memberNm",label:"\uD68C\uC6D0",refLink:"member",refKey:"memberId"},{key:"claimTypeCd",label:"\uC720\uD615",fmt:(t,e)=>e.claimTypeCdNm||e.claimTypeCd},{key:"claimStatusCd",label:"\uC0C1\uD0DC",fmt:(t,e)=>e.claimStatusCdNm||e.claimStatusCd},{key:"reasonCd",label:"\uC0AC\uC720"},{key:"requestDate",label:"\uC2E0\uCCAD\uC77C",style:"width:100px;",fmt:t=>(t||"").slice(0,10)},{type:"actions",actions:[{label:"\uC0C1\uC138",cls:"btn btn-blue btn-xs",onClick:t=>f("histList-rowClaimEdit",t.claimId)}]}],{columns:r,orderItems:n,botTab:m,tabMode2:O,handleBtnAction:y,handleSelectAction:f,cfRelatedDliv:d,cfRelatedClaims:g,cfDlivHistory:U,tabs:z,showTab:P,orderId:i.orderId}},template:`
<div>
  <!-- ===== \u25A0. \uC774\uB825 \uD654\uBA74 =================================================== -->
  <div style="font-size:13px;font-weight:700;color:#555;padding:0 0 12px;">
    <span style="color:#e8587a;font-size:8px;margin-right:5px;vertical-align:middle;">
      \u25CF
    </span>
    \uC774\uB825\uC815\uBCF4
  </div>
  <!-- ===== \u25A1. \uC774\uB825 \uD654\uBA74 =================================================== -->
  <!-- ===== \u25A0. \uD0ED \uC601\uC5ED ==================================================== -->
  <bo-tab-bar :tabs="tabs" :tab="botTab" :tab-mode="tabMode2" :show-modes="false"
    @tab-select="id => handleBtnAction('tab-change', id)" />
  <!-- ===== \u25A1. \uD0ED \uC601\uC5ED ==================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <!-- ===== \u25A0.\u25A0. \uAD6C\uC131 \uC0C1\uD488 ================================================= -->
    <div class="card" v-show="showTab('products')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
        \u{1F4E6} \uAD6C\uC131 \uC0C1\uD488
        <span class="tab-count">
          {{ orderItems.length }}
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare :columns="columns.itemGrid" :rows="orderItems" row-key="no"
        empty-text="\uAD6C\uC131 \uC0C1\uD488 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." />
    </div>
    <!-- ===== \u25A1.\u25A1. \uAD6C\uC131 \uC0C1\uD488 ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uBC30\uC1A1 \uC774\uB825 ================================================= -->
    <div class="card" v-show="showTab('dliv')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
        \u{1F69A} \uBC30\uC1A1 \uC774\uB825
        <span class="tab-count">
          {{ cfRelatedDliv ? 1 : 0 }}
        </span>
      </div>
      <template v-if="cfRelatedDliv">
        <div style="margin-bottom:14px;padding:12px 16px;background:#f9f9f9;border-radius:8px;border:1px solid #e8e8e8;display:flex;justify-content:space-between;align-items:center;">
          <div style="font-size:13px;">
            <span style="color:#888;">
              \uC218\uB839\uC778
            </span>
            <b>
              {{ cfRelatedDliv.recvNm }}
            </b>
            &nbsp;\xB7&nbsp;
            <span style="color:#888;">
              \uD0DD\uBC30\uC0AC
            </span>
            <b>
              {{ cfRelatedDliv.outboundCourierCdNm || cfRelatedDliv.outboundCourierCd }}
            </b>
            &nbsp;\xB7&nbsp;
            <span style="color:#888;">
              \uC6B4\uC1A1\uC7A5
            </span>
            <b>
              {{ cfRelatedDliv.outboundTrackingNo || '-' }}
            </b>
          </div>
          <button class="btn btn-blue btn-sm" @click="handleBtnAction('histList-dlivEdit', cfRelatedDliv.dlivId)">
            \uBC30\uC1A1 \uC218\uC815
          </button>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ============================================= -->
        <bo-grid bare :columns="columns.dlivHistGrid" :rows="cfDlivHistory"
          empty-text="\uBC30\uC1A1 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.">
        </bo-grid>
      </template>
      <div v-else style="text-align:center;color:#aaa;padding:30px;font-size:13px;">
        \uBC30\uC1A1 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uBC30\uC1A1 \uC774\uB825 ================================================= -->
    <!-- ===== \u25A0.\u25A0. \uC5F0\uAD00 \uD074\uB808\uC784 ================================================ -->
    <div class="card" v-show="showTab('claims')" style="margin:0;">
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
  </div>
</div>
<!-- ===== \u25A1.\u25A1. \uC5F0\uAD00 \uD074\uB808\uC784 ================================================ -->
<!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
`};
