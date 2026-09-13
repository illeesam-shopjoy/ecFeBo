window.SyDashboardMng={name:"SyDashboardMng",props:{navigate:{type:Function,required:!0}},setup(n){const{computed:i,reactive:t,ref:h,watch:S,onMounted:d}=Vue,m=t({}),f=t({}),e=t({members:0,products:0,orders:0,claims:0,deliveries:0,coupons:0,sites:0,boUsers:0}),r=[{id:"ecMemberMng",label:"\uD68C\uC6D0\uAD00\uB9AC",icon:"\u{1F465}",color:"#e8587a"},{id:"ecProdMng",label:"\uC0C1\uD488\uAD00\uB9AC",icon:"\u{1F4E6}",color:"#1677ff"},{id:"ecOrderMng",label:"\uC8FC\uBB38\uAD00\uB9AC",icon:"\u{1F6D2}",color:"#52c41a"},{id:"ecClaimMng",label:"\uD074\uB808\uC784\uAD00\uB9AC",icon:"\u26A0\uFE0F",color:"#ff4d4f"},{id:"ecDlivMng",label:"\uBC30\uC1A1\uAD00\uB9AC",icon:"\u{1F69A}",color:"#389e0d"},{id:"ecCouponMng",label:"\uCFE0\uD3F0\uAD00\uB9AC",icon:"\u{1F3AB}",color:"#722ed1"},{id:"ecEventMng",label:"\uC774\uBCA4\uD2B8\uAD00\uB9AC",icon:"\u{1F389}",color:"#d46b08"},{id:"syContactMng",label:"\uBB38\uC758\uAD00\uB9AC",icon:"\u{1F4AC}",color:"#13c2c2"},{id:"sySiteMng",label:"\uC0AC\uC774\uD2B8\uAD00\uB9AC",icon:"\u{1F310}",color:"#2563eb"},{id:"syUserMng",label:"\uC0AC\uC6A9\uC790\uAD00\uB9AC",icon:"\u{1F511}",color:"#c41d7f"}],b=(o,a={})=>{o!=="stats-cardClick"&&console.warn("[handleBtnAction] unknown cmd:",o)},u=(o,a={})=>{if(o==="shortcuts-select")return n.navigate(a);console.warn("[handleSelectAction] unknown cmd:",o)},v=async()=>{const o={pageNo:1,pageSize:1},a=s=>{var c,l;return((l=(c=s==null?void 0:s.data)==null?void 0:c.data)==null?void 0:l.pageTotalCount)||0},p=[["members",()=>boApiSvc.mbMember.getPage(o,"\uB300\uC2DC\uBCF4\uB4DC","\uD68C\uC6D0\uC218")],["products",()=>boApiSvc.pdProd.getPage(o,"\uB300\uC2DC\uBCF4\uB4DC","\uC0C1\uD488\uC218")],["orders",()=>boApiSvc.odOrder.getPage(o,"\uB300\uC2DC\uBCF4\uB4DC","\uC8FC\uBB38\uC218")],["claims",()=>boApiSvc.odClaim.getPage(o,"\uB300\uC2DC\uBCF4\uB4DC","\uD074\uB808\uC784\uC218")],["deliveries",()=>boApiSvc.odDliv.getPage(o,"\uB300\uC2DC\uBCF4\uB4DC","\uBC30\uC1A1\uC218")],["coupons",()=>boApiSvc.pmCoupon.getPage(o,"\uB300\uC2DC\uBCF4\uB4DC","\uCFE0\uD3F0\uC218")],["sites",()=>boApiSvc.sySite.getPage(o,"\uB300\uC2DC\uBCF4\uB4DC","\uC0AC\uC774\uD2B8\uC218")],["boUsers",()=>boApiSvc.syUser.getPage(o,"\uB300\uC2DC\uBCF4\uB4DC","\uAD00\uB9AC\uC790\uC218")]];await Promise.all(p.map(async([s,c])=>{try{e[s]=a(await c())}catch(l){console.error("[fnLoadStats]",s,l),e[s]=0}}))};d(async()=>{v()});const g=i(()=>[{label:"\uC804\uCCB4 \uD68C\uC6D0",value:e.members,color:"#e8587a",icon:"\u{1F465}",sub:"\uBA85"},{label:"\uC804\uCCB4 \uC0C1\uD488",value:e.products,color:"#1677ff",icon:"\u{1F4E6}",sub:"\uAC1C"},{label:"\uC804\uCCB4 \uC8FC\uBB38",value:e.orders,color:"#52c41a",icon:"\u{1F6D2}",sub:"\uAC74"},{label:"\uD074\uB808\uC784",value:e.claims,color:"#ff4d4f",icon:"\u26A0\uFE0F",sub:"\uAC74"},{label:"\uBC30\uC1A1",value:e.deliveries,color:"#389e0d",icon:"\u{1F69A}",sub:"\uAC74"},{label:"\uCFE0\uD3F0",value:e.coupons,color:"#722ed1",icon:"\u{1F3AB}",sub:"\uAC1C"},{label:"\uC0AC\uC774\uD2B8",value:e.sites,color:"#d46b08",icon:"\u{1F310}",sub:"\uAC1C"},{label:"\uAD00\uB9AC\uC790",value:e.boUsers,color:"#13c2c2",icon:"\u{1F464}",sub:"\uBA85"}]);return{shortcuts:r,handleBtnAction:b,handleSelectAction:u,cfStats:g}},template:`
<bo-page title="\uB300\uC2DC\uBCF4\uB4DC">
  <!-- ===== \u25A0. \uD1B5\uACC4 \uCE74\uB4DC =================================================== -->
  <!-- ===== \u25A0. \uB300\uC2DC\uBCF4\uB4DC \uC601\uC5ED ================================================= -->
  <div class="dash-stats">
    <div v-for="s in cfStats" :key="s.label" class="dash-stat-card" :style="{'--accent': s.color}">
      <div class="dash-stat-icon">
        {{ s.icon }}
      </div>
      <div class="dash-stat-body">
        <div class="dash-stat-value">
          {{ s.value.toLocaleString() }}
        </div>
        <div class="dash-stat-label">
          {{ s.label }}
        </div>
        <div class="dash-stat-sub">
          {{ s.sub }}
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uB300\uC2DC\uBCF4\uB4DC \uC601\uC5ED ================================================= -->
  <!-- ===== \u25A0. \uBC14\uB85C\uAC00\uAE30 ==================================================== -->
  <bo-container title="\uBC14\uB85C\uAC00\uAE30">
    <div class="dash-shortcuts">
      <div v-for="m in shortcuts" :key="m.id" class="dash-shortcut" @click="handleSelectAction('shortcuts-select', m.id)">
        <span class="dash-sc-icon" :style="{background: m.color}">
          {{ m.icon }}
        </span>
        <span class="dash-sc-label">
          {{ m.label }}
        </span>
        <span class="dash-sc-arrow">
          \u203A
        </span>
      </div>
    </div>
  </bo-container>
</bo-page>
`};
