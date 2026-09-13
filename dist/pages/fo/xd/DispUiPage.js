window.DispUiPage={name:"DispUiPage",components:{DispX01Ui:window.DispX01Ui},setup(){var o,d,p,c;const{reactive:a,computed:r,onMounted:x,watch:D}=Vue,l=a({loading:!1,error:null}),g=a({}),u=(t,s={})=>{console.warn("[handleBtnAction] unknown cmd:",t)},w=(t,s={})=>{console.warn("[handleSelectAction] unknown cmd:",t)},e=new URLSearchParams(location.search),n={areas:(e.get("areas")||"").split(",").filter(Boolean),date:e.get("date")||"",time:e.get("time")||"",status:e.get("status")||"",condition:e.get("condition")||"",authRequired:e.get("authRequired")||"",authGrade:e.get("authGrade")||"",siteId:e.get("siteId")||"",memberId:e.get("memberId")||"",viewOpts:e.get("viewOpts")||"",isLoggedIn:e.get("isLoggedIn")==="true"||((d=(o=window.foAuth)==null?void 0:o.isLoggedIn)!=null?d:!1),userGrade:e.get("userGrade")||((c=(p=window.foAuth)==null?void 0:p.userGrade)!=null?c:"")},i=window.dispDataset||{displays:[],codes:[]},f={layout:"auto",showHeader:!0,showBadges:!0},h=r(()=>{const t=i.displays||[];return n.areas.reduce((s,m)=>s+t.filter(y=>y.area===m).length,0)});return{params:n,dispDataset:i,dispOpt:f,cfTotalPanels:h,uiState:l,codes:g,handleBtnAction:u,handleSelectAction:w}},template:`
<fo-page bare>
  <!-- ===== \u25A0. \uD398\uC774\uC9C0 \uD5E4\uB354 ================================================== -->
  <div style="background:linear-gradient(135deg,#6a1b9a,#4a148c);color:#fff;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;box-shadow:0 2px 12px rgba(0,0,0,0.2);">
    <div>
      <span style="font-size:16px;font-weight:700;">
        \u{1F5A5} DispUi\uBBF8\uB9AC\uBCF4\uAE30
      </span>
      <span style="font-size:11px;opacity:.7;margin-left:12px;">
        \uC804\uB2EC \uD30C\uB77C\uBBF8\uD130 \uAE30\uC900 \uB80C\uB354\uB9C1
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
