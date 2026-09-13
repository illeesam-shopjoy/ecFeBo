window.XsSample22={name:"XsSample22",setup(n){const{reactive:t,watch:c,onMounted:s}=Vue,a=t({loading:!1,error:null}),l=t({});return{uiState:a,codes:l,handleBtnAction:(e,o={})=>{if(e==="page-goHome")return n&&n.navigate&&n.navigate("home");console.warn("[handleBtnAction] unknown cmd:",e)},handleSelectAction:(e,o={})=>{console.warn("[handleSelectAction] unknown cmd:",e)}}},template:`
<fo-page bare>
  <div style="padding:40px;">
    pages/fo/xs/Sample22.js
  </div>
</fo-page>
`};
