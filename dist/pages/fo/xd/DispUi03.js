window.DispUi03={name:"DispUi03",components:{DispX01Ui:window.DispX01Ui},setup(){var o,d,p,c;const{reactive:a,computed:r,onMounted:U,watch:y}=Vue,l=a({loading:!1,error:null}),u=a({}),g=(t,s={})=>{console.warn("[handleBtnAction] unknown cmd:",t)},w=(t,s={})=>{console.warn("[handleSelectAction] unknown cmd:",t)},n=window.dispDataset||{displays:[],codes:[]},e=new URLSearchParams(location.search),i={areas:["PRODUCT_TOP","PRODUCT_BTM"],date:e.get("date")||"",time:e.get("time")||"",status:e.get("status")||"",condition:e.get("condition")||"",authRequired:e.get("authRequired")||"",authGrade:e.get("authGrade")||"",siteId:e.get("siteId")||"",memberId:e.get("memberId")||"",viewOpts:e.get("viewOpts")||"content,struct,source",isLoggedIn:e.get("isLoggedIn")==="true"||((d=(o=window.foAuth)==null?void 0:o.isLoggedIn)!=null?d:!1),userGrade:e.get("userGrade")||((c=(p=window.foAuth)==null?void 0:p.userGrade)!=null?c:"")},f={layout:"auto",showHeader:!0,showBadges:!0},h=r(()=>{const t=n.displays||[];return i.areas.reduce((s,D)=>s+t.filter(m=>m.area===D).length,0)});return{params:i,dispDataset:n,dispOpt:f,cfTotalPanels:h,uiState:l,codes:u,handleBtnAction:g,handleSelectAction:w}},template:`
<fo-page bare>
  <!-- ===== \u25A0. \uD398\uC774\uC9C0 \uD5E4\uB354 ================================================== -->
  <div style="background:linear-gradient(135deg,#7b1fa2,#6a1b9a);color:#fff;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;box-shadow:0 2px 12px rgba(0,0,0,0.2);">
    <div>
      <span style="font-size:16px;font-weight:700;">
        \u{1F6CD}\uFE0F DispUi03 - PRODUCT \uC601\uC5ED
      </span>
      <span style="font-size:11px;opacity:.7;margin-left:12px;">
        PRODUCT_TOP, PRODUCT_BTM
      </span>
    </div>
    <span style="font-size:13px;opacity:.8;">
      \uD328\uB110 {{ cfTotalPanels }}\uAC1C
    </span>
  </div>
  <!-- ===== \u25A1. \uD398\uC774\uC9C0 \uD5E4\uB354 ================================================== -->
  <!-- ===== \u25A0. \uBCF8\uBB38: DispUi \uCEF4\uD3EC\uB10C\uD2B8 ========================================= -->
  <disp-x01-ui :params="params" :disp-dataset="dispDataset" :disp-opt="dispOpt" />
</fo-page>
<!-- ===== \u25A1. \uBCF8\uBB38: DispUi \uCEF4\uD3EC\uB10C\uD2B8 ========================================= -->
`};
