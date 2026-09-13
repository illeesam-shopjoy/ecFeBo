window._ecProdHistState=window._ecProdHistState||{tab:"qna",tabMode:"tab"},window.PdProdHist={name:"PdProdHist",props:{navigate:{type:Function,required:!0},prodId:{type:String,default:null},onClose:{type:Function,default:null}},setup(c){const{computed:$,onMounted:E,reactive:i,watch:h}=Vue,P=window.boApp.showRefModal,a=i({loading:!1,botTab:window._ecProdHistState.tab||"orders",tabMode2:window._ecProdHistState.tabMode||"tab",loadedTabs:new Set}),N=Vue.toRef(a,"botTab"),M=Vue.toRef(a,"tabMode2"),f=i(new Set),o=(t,e)=>{var l,b,y,d;return`${t}:${(d=(y=(b=(l=e.qnaId)!=null?l:e.reviewId)!=null?b:e.orderId)!=null?y:e.histId)!=null?d:""}`},p=t=>{f.has(t)?f.delete(t):f.add(t)},n=t=>f.has(t),G=(t,e={})=>{if(t==="tab-change"){a.botTab=e;return}else if(t==="tabMode-change"){a.tabMode2=e;return}else console.warn("[handleBtnAction] unknown cmd:",t)},A=(t,e={})=>{if(t==="orders-rowDetail")return c.navigate("odOrderDtl",{id:e.orderId});if(t==="orders-refClick")return P(e.type,e.id);console.warn("[handleSelectAction] unknown cmd:",t)};h(N,t=>{window._ecProdHistState.tab=t,g(t)}),h(()=>a.tabMode2,t=>{window._ecProdHistState.tabMode=t});const z=t=>a.tabMode2!=="tab"||a.botTab===t,m=i([]),u=i([]),v=i([]),w=i([]),k=i([]),x=i([]),S=i([]),R=i([{id:"qna",label:"\uC0C1\uD488 Q&A",icon:"\u{1F4AC}",get count(){return m.length}},{id:"review",label:"\uB9AC\uBDF0",icon:"\u2B50",get count(){return u.length}},{id:"orders",label:"\uC5F0\uAD00 \uC8FC\uBB38",icon:"\u{1F6D2}",get count(){return v.length}},{id:"stock",label:"\uC7AC\uACE0 \uC774\uB825",icon:"\u{1F4E6}",get count(){return w.length}},{id:"price",label:"\uAC00\uACA9\uBCC0\uACBD\uC774\uB825",icon:"\u{1F4B0}",get count(){return k.length}},{id:"status",label:"\uC0C1\uD488\uC0C1\uD0DC \uC774\uB825",icon:"\u{1F3F7}",get count(){return x.length}},{id:"changes",label:"\uC0C1\uD488\uC815\uBCF4 \uBCC0\uACBD\uC774\uB825",icon:"\u{1F4DD}",get count(){return S.length}}]),Q=t=>`/bo/ec/pd/prod/${c.prodId}/hist/${t}`,L=t=>coUtil.cofApiHdr("\uC0C1\uD488\uAD00\uB9AC",t),B=t=>{var l;const e=(l=t==null?void 0:t.data)==null?void 0:l.data;return(e==null?void 0:e.pageList)||(e==null?void 0:e.list)||(Array.isArray(e)?e:[])},_=["qna","review","orders","stock","price","status","changes"],C=50,T=i({stock:{pageNo:1,pageSize:C,pageTotalCount:0},price:{pageNo:1,pageSize:C,pageTotalCount:0},status:{pageNo:1,pageSize:C,pageTotalCount:0},changes:{pageNo:1,pageSize:C,pageTotalCount:0}}),q={stock:w,price:k,status:x,changes:S},F={stock:"\uC7AC\uACE0\uC774\uB825",price:"\uAC00\uACA9\uBCC0\uACBD\uC774\uB825",status:"\uC0C1\uD0DC\uC774\uB825",changes:"\uC815\uBCF4\uBCC0\uACBD\uC774\uB825"},H=async(t,e)=>{var b;if(!c.prodId)return;const l=T[t];e||(l.pageNo=1),a.loading=!0;try{const d=((b=(await boApi.get(Q(t),{params:{pageNo:l.pageNo,pageSize:l.pageSize},...L(F[t])})).data)==null?void 0:b.data)||{},D=d.pageList||[];l.pageTotalCount=d.pageTotalCount||0;const I=q[t];e?I.push(...D):I.splice(0,I.length,...D),D.length>=l.pageSize&&I.length<l.pageTotalCount&&(l.pageNo+=1),a.loadedTabs.add(t)}catch(y){console.error("[PdProdHist]",t,y)}finally{a.loading=!1}},K=t=>{const e=q[t],l=T[t];!e||e.length>=l.pageTotalCount||H(t,!0)},g=async t=>{var e,l,b,y;if(!(!c.prodId||a.loadedTabs.has(t))){if(["stock","price","status","changes"].includes(t))return H(t,!1);a.loading=!0;try{if(t==="qna"){const d=await boApiSvc.pdQna.getPage({prodId:c.prodId,pageNo:1,pageSize:200},"\uC0C1\uD488\uAD00\uB9AC","Q&A\uC870\uD68C");m.splice(0,m.length,...B(d))}else if(t==="review"){const d=await boApiSvc.pdReview.getPage({prodId:c.prodId,pageNo:1,pageSize:200},"\uC0C1\uD488\uAD00\uB9AC","\uB9AC\uBDF0\uC870\uD68C");u.splice(0,u.length,...B(d))}else if(t==="orders"){const d=await boApiSvc.odOrder.getPage({prodId:c.prodId,pageNo:1,pageSize:200},"\uC0C1\uD488\uAD00\uB9AC","\uC5F0\uAD00\uC8FC\uBB38");v.splice(0,v.length,...((l=(e=d.data)==null?void 0:e.data)==null?void 0:l.pageList)||((y=(b=d.data)==null?void 0:b.data)==null?void 0:y.list)||[])}a.loadedTabs.add(t)}catch(d){console.error("[PdProdHist]",t,d)}finally{a.loading=!1}}},r=t=>t?String(t).slice(0,16).replace("T"," "):"-",Y=t=>{if(!t)return"badge-gray";const e=String(t).toUpperCase();return e.includes("IN")||e.includes("\uC785\uACE0")||e.includes("ADD")?"badge-green":e.includes("OUT")||e.includes("\uCD9C\uACE0")||e.includes("SALE")?"badge-orange":"badge-gray"},O=()=>"",s={};return s.qnaGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:t=>n(o("qna",t)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:t=>p(o("qna",t)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(t,e)=>n(o("qna",e))?"\u25B2":"\u25BC"},{key:"qnaTitle",label:"\uC9C8\uBB38",style:"max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",cellStyle:"max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",fmt:(t,e)=>e.qnaTitle||e.qnaContent},{key:"memberNm",label:"\uC791\uC131\uC790",fmt:(t,e)=>e.memberNm||e.memberId},{key:"regDate",label:"\uC791\uC131\uC77C",fmt:(t,e)=>r(e.regDate)},{key:"qnaStatusCd",label:"\uC0C1\uD0DC",badge:t=>t.qnaStatusCd==="ACTIVE"?"badge-green":"badge-gray",fmt:(t,e)=>e.qnaStatusCdNm||e.qnaStatusCd},{key:"answerYn",label:"\uB2F5\uBCC0\uC5EC\uBD80",badge:t=>t.answerYn==="Y"?"badge-blue":"badge-orange",fmt:(t,e)=>e.answerYn==="Y"?"\uB2F5\uBCC0\uC644\uB8CC":"\uBBF8\uB2F5\uBCC0"}],s.reviewGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:t=>n(o("review",t)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:t=>p(o("review",t)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(t,e)=>n(o("review",e))?"\u25B2":"\u25BC"},{key:"rating",label:"\uD3C9\uC810",style:"white-space:nowrap;",cellInnerStyle:"color:#faad14;font-weight:700;",fmt:t=>`${t} \u2605`},{key:"reviewContent",label:"\uB0B4\uC6A9",style:"max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",cellStyle:"max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",fmt:(t,e)=>e.reviewContent||e.reviewTitle},{key:"memberNm",label:"\uC791\uC131\uC790",fmt:(t,e)=>e.memberNm||e.memberId},{key:"reviewDate",label:"\uC791\uC131\uC77C",fmt:(t,e)=>r(e.reviewDate||e.regDate)},{key:"reviewStatusCd",label:"\uC0C1\uD0DC",badge:t=>t.reviewStatusCd==="ACTIVE"?"badge-green":"badge-gray",fmt:(t,e)=>e.reviewStatusCdNm||e.reviewStatusCd}],s.orderGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:t=>n(o("orders",t)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:t=>p(o("orders",t)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(t,e)=>n(o("orders",e))?"\u25B2":"\u25BC"},{key:"orderId",label:"\uC8FC\uBB38ID",refLink:"order"},{key:"memberNm",label:"\uD68C\uC6D0",refLink:"member",refKey:"memberId",fmt:(t,e)=>e.memberNm||e.memberId},{key:"orderDate",label:"\uC8FC\uBB38\uC77C",fmt:t=>r(t)},{key:"totalAmt",label:"\uAE08\uC561",fmt:t=>coUtil.cofWon(t)},{key:"orderQty",label:"\uC218\uB7C9"},{key:"orderStatusCd",label:"\uC0C1\uD0DC",badge:()=>"badge-blue",fmt:(t,e)=>e.orderStatusCdNm||e.orderStatusCd},{type:"actions",actions:[{label:"\uC0C1\uC138",cls:"btn btn-blue btn-xs",onClick:t=>A("orders-rowDetail",t)}]}],s.stockGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:t=>n(o("stock",t)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:t=>p(o("stock",t)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(t,e)=>n(o("stock",e))?"\u25B2":"\u25BC"},{key:"histDate",label:"\uC77C\uC2DC",fmt:t=>r(t)},{key:"stockTypeCd",label:"\uC720\uD615",badge:t=>Y(t.stockTypeCd),fmt:(t,e)=>e.stockTypeCdNm||e.stockTypeCd},{key:"stockQty",label:"\uC218\uB7C9",cellStyle:t=>(t||0)>0?"color:#389e0d;font-weight:600":"color:#cf1322;font-weight:600",fmt:t=>((t||0)>0?"+":"")+t},{key:"stockBalance",label:"\uCC98\uB9AC \uD6C4 \uC7AC\uACE0",fmt:t=>t==null?"":t+"\uAC1C"},{key:"regByNm",label:"\uCC98\uB9AC\uC790",fmt:(t,e)=>e.regByNm||e.regBy},{key:"stockMemo",label:"\uBA54\uBAA8"}],s.priceGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:t=>n(o("price",t)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:t=>p(o("price",t)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(t,e)=>n(o("price",e))?"\u25B2":"\u25BC"},{key:"histDate",label:"\uC77C\uC2DC",fmt:t=>r(t)},{key:"priceField",label:"\uD56D\uBAA9(\uBCC0\uACBD\uC0AC\uC720)",cellInnerClass:"tag"},{key:"priceBefore",label:"\uBCC0\uACBD \uC804",style:"color:#888;"},{key:"priceAfter",label:"\uBCC0\uACBD \uD6C4",style:"font-weight:600;color:#e8587a;"},{key:"regByNm",label:"\uCC98\uB9AC\uC790",fmt:(t,e)=>e.regByNm||e.regBy}],s.statusGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:t=>n(o("status",t)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:t=>p(o("status",t)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(t,e)=>n(o("status",e))?"\u25B2":"\u25BC"},{key:"histDate",label:"\uC77C\uC2DC",fmt:t=>r(t)},{key:"statusCdBefore",label:"\uBCC0\uACBD \uC804",badge:()=>"badge-gray",fmt:(t,e)=>e.statusCdBeforeNm||e.statusCdBefore||"-"},{key:"statusCdAfter",label:"\uBCC0\uACBD \uD6C4",badge:()=>"badge-blue",fmt:(t,e)=>e.statusCdAfterNm||e.statusCdAfter},{key:"regByNm",label:"\uCC98\uB9AC\uC790",fmt:(t,e)=>e.regByNm||e.regBy}],s.changeGrid=[{key:"_exp",label:"",style:"width:24px",align:"center",linkToggle:{active:t=>n(o("changes",t)),title:"\uD3BC\uCE58\uAE30/\uB2EB\uAE30",onClick:t=>p(o("changes",t)),activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(t,e)=>n(o("changes",e))?"\u25B2":"\u25BC"},{key:"histDate",label:"\uC77C\uC2DC",fmt:t=>r(t)},{key:"changeField",label:"\uD56D\uBAA9",cellInnerClass:"tag"},{key:"changeBefore",label:"\uBCC0\uACBD \uC804",style:"color:#888;"},{key:"changeAfter",label:"\uBCC0\uACBD \uD6C4",style:"font-weight:500;"},{key:"regByNm",label:"\uCC98\uB9AC\uC790",fmt:(t,e)=>e.regByNm||e.regBy}],s.qnaGridRowDetail=[{key:"_qnaTitle",label:"\uC9C8\uBB38\uC81C\uBAA9",type:"readonly",fmt:(t,e)=>e.qnaTitle||"-"},{key:"_member",label:"\uC791\uC131\uC790",type:"readonly",fmt:(t,e)=>e.memberNm||e.memberId||"-"},{key:"_regDate",label:"\uC791\uC131\uC77C",type:"readonly",fmt:(t,e)=>r(e.regDate)},{key:"_qnaStatus",label:"\uC0C1\uD0DC",type:"readonly",fmt:(t,e)=>e.qnaStatusCdNm||e.qnaStatusCd||"-"},{key:"_answerYn",label:"\uB2F5\uBCC0\uC5EC\uBD80",type:"readonly",fmt:(t,e)=>e.answerYn==="Y"?"\uB2F5\uBCC0\uC644\uB8CC":"\uBBF8\uB2F5\uBCC0"},{key:"_qnaId",label:"\uBB38\uC758ID",type:"readonly",fmt:(t,e)=>e.qnaId||"-"},{key:"_qnaContent",label:"\uB0B4\uC6A9",type:"readonly",colSpan:3,fmt:(t,e)=>e.qnaContent||"-"}],s.reviewGridRowDetail=[{key:"_rating",label:"\uD3C9\uC810",type:"readonly",fmt:(t,e)=>e.rating!=null?`${e.rating} \u2605`:"-"},{key:"_reviewTitle",label:"\uC81C\uBAA9",type:"readonly",fmt:(t,e)=>e.reviewTitle||"-"},{key:"_member",label:"\uC791\uC131\uC790",type:"readonly",fmt:(t,e)=>e.memberNm||e.memberId||"-"},{key:"_reviewDate",label:"\uC791\uC131\uC77C",type:"readonly",fmt:(t,e)=>r(e.reviewDate||e.regDate)},{key:"_reviewStatus",label:"\uC0C1\uD0DC",type:"readonly",fmt:(t,e)=>e.reviewStatusCdNm||e.reviewStatusCd||"-"},{key:"_reviewId",label:"\uB9AC\uBDF0ID",type:"readonly",fmt:(t,e)=>e.reviewId||"-"},{key:"_reviewContent",label:"\uB0B4\uC6A9",type:"readonly",colSpan:3,fmt:(t,e)=>e.reviewContent||"-"}],s.orderGridRowDetail=[{key:"_orderId",label:"\uC8FC\uBB38ID",type:"readonly",fmt:(t,e)=>e.orderId||"-"},{key:"_member",label:"\uD68C\uC6D0",type:"readonly",fmt:(t,e)=>e.memberNm||e.memberId||"-"},{key:"_orderDate",label:"\uC8FC\uBB38\uC77C",type:"readonly",fmt:(t,e)=>r(e.orderDate)},{key:"_totalAmt",label:"\uAE08\uC561",type:"readonly",fmt:(t,e)=>coUtil.cofWon(e.totalAmt)},{key:"_orderQty",label:"\uC218\uB7C9",type:"readonly",fmt:(t,e)=>e.orderQty!=null?e.orderQty:"-"},{key:"_orderStatus",label:"\uC0C1\uD0DC",type:"readonly",fmt:(t,e)=>e.orderStatusCdNm||e.orderStatusCd||"-"}],s.stockGridRowDetail=[{key:"_histDate",label:"\uC77C\uC2DC",type:"readonly",fmt:(t,e)=>r(e.histDate)},{key:"_stockType",label:"\uC720\uD615",type:"readonly",fmt:(t,e)=>e.stockTypeCdNm||e.stockTypeCd||"-"},{key:"_stockQty",label:"\uC218\uB7C9",type:"readonly",fmt:(t,e)=>((e.stockQty||0)>0?"+":"")+(e.stockQty!=null?e.stockQty:0)},{key:"_stockBalance",label:"\uCC98\uB9AC \uD6C4 \uC7AC\uACE0",type:"readonly",fmt:(t,e)=>e.stockBalance==null?"-":e.stockBalance+"\uAC1C"},{key:"_regBy",label:"\uCC98\uB9AC\uC790",type:"readonly",fmt:(t,e)=>e.regByNm||e.regBy||"-"},{key:"_histId",label:"\uC774\uB825ID",type:"readonly",fmt:(t,e)=>e.histId||"-"},{key:"_prodId",label:"\uC0C1\uD488ID",type:"readonly",fmt:(t,e)=>e.prodId||"-"},{key:"_stockMemo",label:"\uBA54\uBAA8",type:"readonly",colSpan:3,fmt:(t,e)=>e.stockMemo||"-"}],s.priceGridRowDetail=[{key:"_histDate",label:"\uC77C\uC2DC",type:"readonly",fmt:(t,e)=>r(e.histDate)},{key:"_priceField",label:"\uD56D\uBAA9(\uBCC0\uACBD\uC0AC\uC720)",type:"readonly",fmt:(t,e)=>e.priceField||"-"},{key:"_priceBefore",label:"\uBCC0\uACBD \uC804",type:"readonly",fmt:(t,e)=>e.priceBefore!=null?e.priceBefore:"-"},{key:"_priceAfter",label:"\uBCC0\uACBD \uD6C4",type:"readonly",fmt:(t,e)=>e.priceAfter!=null?e.priceAfter:"-"},{key:"_regBy",label:"\uCC98\uB9AC\uC790",type:"readonly",fmt:(t,e)=>e.regByNm||e.regBy||"-"},{key:"_histId",label:"\uC774\uB825ID",type:"readonly",fmt:(t,e)=>e.histId||"-"}],s.statusGridRowDetail=[{key:"_histDate",label:"\uC77C\uC2DC",type:"readonly",fmt:(t,e)=>r(e.histDate)},{key:"_statusBefore",label:"\uBCC0\uACBD \uC804",type:"readonly",fmt:(t,e)=>e.statusCdBeforeNm||e.statusCdBefore||"-"},{key:"_statusAfter",label:"\uBCC0\uACBD \uD6C4",type:"readonly",fmt:(t,e)=>e.statusCdAfterNm||e.statusCdAfter||"-"},{key:"_regBy",label:"\uCC98\uB9AC\uC790",type:"readonly",fmt:(t,e)=>e.regByNm||e.regBy||"-"},{key:"_histId",label:"\uC774\uB825ID",type:"readonly",fmt:(t,e)=>e.histId||"-"}],s.changeGridRowDetail=[{key:"_histDate",label:"\uC77C\uC2DC",type:"readonly",fmt:(t,e)=>r(e.histDate)},{key:"_changeField",label:"\uD56D\uBAA9",type:"readonly",fmt:(t,e)=>e.changeField||"-"},{key:"_changeBefore",label:"\uBCC0\uACBD \uC804",type:"readonly",fmt:(t,e)=>e.changeBefore!=null?e.changeBefore:"-"},{key:"_regBy",label:"\uCC98\uB9AC\uC790",type:"readonly",fmt:(t,e)=>e.regByNm||e.regBy||"-"},{key:"_histId",label:"\uC774\uB825ID",type:"readonly",fmt:(t,e)=>e.histId||"-"},{key:"_changeAfter",label:"\uBCC0\uACBD \uD6C4",type:"readonly",colSpan:3,fmt:(t,e)=>e.changeAfter!=null?e.changeAfter:"-"}],E(async()=>{g(a.botTab),a.tabMode2!=="tab"&&_.forEach(t=>t!==a.botTab&&g(t))}),h(()=>c.prodId,()=>{a.loadedTabs=new Set,f.clear(),m.splice(0),u.splice(0),v.splice(0),w.splice(0),k.splice(0),x.splice(0),S.splice(0),Object.values(T).forEach(t=>{t.pageNo=1,t.pageTotalCount=0}),g(a.botTab),a.tabMode2!=="tab"&&_.forEach(t=>t!==a.botTab&&g(t))}),h(()=>a.tabMode2,t=>{t!=="tab"&&_.forEach(e=>g(e))}),{columns:s,uiState:a,botTab:N,tabMode2:M,tabs:R,qnas:m,reviews:u,relatedOrders:v,stockHistories:w,priceHistories:k,statusHistories:x,changeHistories:S,handleBtnAction:G,handleSelectAction:A,showTab:z,fnNoCursor:O,toggleRow:p,isExpanded:n,fnExpKey:o,histPagers:T,onScrollEnd:K}},template:`
<!-- ===== \u25A0. \uC774\uB825 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20\uB97C \uD55C \uC601\uC5ED\uC73C\uB85C) ===================== -->
<bo-container>
  <!-- ===== \u25A0.\u25A0. \uCE74\uB4DC \uD5E4\uB354 (\uC774\uB825\uC815\uBCF4 \uC81C\uBAA9 = list-title) ========================= -->
  <template #title>
    \uC774\uB825\uC815\uBCF4
    <span v-if="prodId" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">
      #{{ prodId }}
    </span>
    <span v-if="uiState.loading" style="margin-left:8px;font-size:11px;color:#aaa;font-weight:400;">
      \uC870\uD68C \uC911...
    </span>
  </template>
  <!-- ===== \u25A0.\u25A0. \uD5E4\uB354 \uC6B0\uCE21 \uC561\uC158 (\uBAA9\uB85D [\uC774\uB825] \uB85C \uC5F0 \uACBD\uC6B0\uC5D0\uB9CC \uB2EB\uAE30 \uC81C\uACF5) ================ -->
  <template v-if="onClose" #toolbar-actions>
    <button class="btn btn_close" @click="onClose()">\uB2EB\uAE30</button>
  </template>
  <!-- ===== \u25A0.\u25A0. \uD0ED \uC601\uC5ED ================================================== -->
  <bo-tab-bar :tabs="tabs" :tab="botTab" :tab-mode="tabMode2"
    @tab-select="id => handleBtnAction('tab-change', id)"
    @mode-select="m => handleBtnAction('tabMode-change', m)" />
  <!-- ===== \u25A1. \uD0ED \uC601\uC5ED ==================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
<div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
  <!-- ===== \u25A0.\u25A0. \uC0C1\uD488 Q&A ================================================ -->
  <div class="dtl-pane" v-show="showTab('qna')" style="margin:0;">
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u{1F4AC} \uC0C1\uD488 Q&amp;A
      <span class="tab-count">
        {{ qnas.length }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
    <bo-grid bare :columns="columns.qnaGrid" :rows="qnas" row-key="qnaId" :row-style="fnNoCursor" empty-text="Q&amp;A\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." :is-expanded="(row) => isExpanded(fnExpKey('qna', row))">
      <template #row-expand="{ row, colspan }">
        <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
          <bo-form-area plain-readonly :columns="columns.qnaGridRowDetail" :form="row" :cols="3" readonly label-left compact :show-actions="false" />
        </td>
      </template>
    </bo-grid>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC0C1\uD488 Q&A ================================================ -->
  <!-- ===== \u25A0.\u25A0. \uB9AC\uBDF0 ==================================================== -->
  <div class="dtl-pane" v-show="showTab('review')" style="margin:0;">
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u2B50 \uB9AC\uBDF0
      <span class="tab-count">
        {{ reviews.length }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
    <bo-grid bare :columns="columns.reviewGrid" :rows="reviews" row-key="reviewId" :row-style="fnNoCursor" empty-text="\uB9AC\uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." :is-expanded="(row) => isExpanded(fnExpKey('review', row))">
      <template #row-expand="{ row, colspan }">
        <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
          <bo-form-area plain-readonly :columns="columns.reviewGridRowDetail" :form="row" :cols="3" readonly label-left compact :show-actions="false" />
        </td>
      </template>
    </bo-grid>
  </div>
  <!-- ===== \u25A1.\u25A1. \uB9AC\uBDF0 ==================================================== -->
  <!-- ===== \u25A0.\u25A0. \uC5F0\uAD00 \uC8FC\uBB38 ================================================= -->
  <div class="dtl-pane" v-show="showTab('orders')" style="margin:0;">
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u{1F6D2} \uC5F0\uAD00 \uC8FC\uBB38
      <span class="tab-count">
        {{ relatedOrders.length }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
    <bo-grid bare :columns="columns.orderGrid" :rows="relatedOrders" row-key="orderId" :row-style="fnNoCursor" empty-text="\uC5F0\uAD00 \uC8FC\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." @ref-click="({type,id}) => handleSelectAction('orders-refClick', { type, id })" :is-expanded="(row) => isExpanded(fnExpKey('orders', row))">
      <template #row-expand="{ row, colspan }">
        <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
          <bo-form-area plain-readonly :columns="columns.orderGridRowDetail" :form="row" :cols="3" readonly label-left compact :show-actions="false" />
        </td>
      </template>
    </bo-grid>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC5F0\uAD00 \uC8FC\uBB38 ================================================= -->
  <!-- ===== \u25A0.\u25A0. \uC7AC\uACE0 \uC774\uB825 ================================================= -->
  <div class="dtl-pane" v-show="showTab('stock')" style="margin:0;">
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u{1F4E6} \uC7AC\uACE0 \uC774\uB825
      <span class="tab-count">
        {{ stockHistories.length }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
    <bo-grid bare fit-bottom @scroll-end="onScrollEnd('stock')" :columns="columns.stockGrid" :rows="stockHistories" row-key="histId" :row-style="fnNoCursor" empty-text="\uC7AC\uACE0 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." :is-expanded="(row) => isExpanded(fnExpKey('stock', row))">
      <template #row-expand="{ row, colspan }">
        <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
          <bo-form-area plain-readonly :columns="columns.stockGridRowDetail" :form="row" :cols="3" readonly label-left compact :show-actions="false" />
        </td>
      </template>
    </bo-grid>
    <bo-pager :pager="{ pageTotalCount: histPagers.stock.pageTotalCount }" :show-pages="false" :loaded-count="stockHistories.length" />
  </div>
  <!-- ===== \u25A1.\u25A1. \uC7AC\uACE0 \uC774\uB825 ================================================= -->
  <!-- ===== \u25A0.\u25A0. \uAC00\uACA9\uBCC0\uACBD\uC774\uB825 ================================================ -->
  <div class="dtl-pane" v-show="showTab('price')" style="margin:0;">
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u{1F4B0} \uAC00\uACA9\uBCC0\uACBD\uC774\uB825
      <span class="tab-count">
        {{ priceHistories.length }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
    <bo-grid bare fit-bottom @scroll-end="onScrollEnd('price')" :columns="columns.priceGrid" :rows="priceHistories" row-key="histId" :row-style="fnNoCursor" empty-text="\uAC00\uACA9 \uBCC0\uACBD \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." :is-expanded="(row) => isExpanded(fnExpKey('price', row))">
      <template #row-expand="{ row, colspan }">
        <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
          <bo-form-area plain-readonly :columns="columns.priceGridRowDetail" :form="row" :cols="3" readonly label-left compact :show-actions="false" />
        </td>
      </template>
    </bo-grid>
    <bo-pager :pager="{ pageTotalCount: histPagers.price.pageTotalCount }" :show-pages="false" :loaded-count="priceHistories.length" />
  </div>
  <!-- ===== \u25A1.\u25A1. \uAC00\uACA9\uBCC0\uACBD\uC774\uB825 ================================================ -->
  <!-- ===== \u25A0.\u25A0. \uC0C1\uD488\uC0C1\uD0DC \uC774\uB825 =============================================== -->
  <div class="dtl-pane" v-show="showTab('status')" style="margin:0;">
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u{1F3F7} \uC0C1\uD488\uC0C1\uD0DC \uC774\uB825
      <span class="tab-count">
        {{ statusHistories.length }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
    <bo-grid bare fit-bottom @scroll-end="onScrollEnd('status')" :columns="columns.statusGrid" :rows="statusHistories" row-key="histId" :row-style="fnNoCursor" empty-text="\uC0C1\uD0DC \uBCC0\uACBD \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." :is-expanded="(row) => isExpanded(fnExpKey('status', row))">
      <template #row-expand="{ row, colspan }">
        <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
          <bo-form-area plain-readonly :columns="columns.statusGridRowDetail" :form="row" :cols="3" readonly label-left compact :show-actions="false" />
        </td>
      </template>
    </bo-grid>
    <bo-pager :pager="{ pageTotalCount: histPagers.status.pageTotalCount }" :show-pages="false" :loaded-count="statusHistories.length" />
  </div>
  <!-- ===== \u25A1.\u25A1. \uC0C1\uD488\uC0C1\uD0DC \uC774\uB825 =============================================== -->
  <!-- ===== \u25A0.\u25A0. \uC0C1\uD488\uC815\uBCF4 \uBCC0\uACBD\uC774\uB825 ============================================= -->
  <div class="dtl-pane" v-show="showTab('changes')" style="margin:0;">
    <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
      \u{1F4DD} \uC0C1\uD488\uC815\uBCF4 \uBCC0\uACBD\uC774\uB825
      <span class="tab-count">
        {{ changeHistories.length }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
    <bo-grid bare fit-bottom @scroll-end="onScrollEnd('changes')" :columns="columns.changeGrid" :rows="changeHistories" row-key="histId" :row-style="fnNoCursor" empty-text="\uBCC0\uACBD \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." :is-expanded="(row) => isExpanded(fnExpKey('changes', row))">
      <template #row-expand="{ row, colspan }">
        <td :colspan="colspan" style="background:#eef2fb;padding:10px 14px;border-top:none;border-left:3px solid #2563eb;box-shadow:inset 0 1px 0 #d6deef">
          <bo-form-area plain-readonly :columns="columns.changeGridRowDetail" :form="row" :cols="3" readonly label-left compact :show-actions="false" />
        </td>
      </template>
    </bo-grid>
    <bo-pager :pager="{ pageTotalCount: histPagers.changes.pageTotalCount }" :show-pages="false" :loaded-count="changeHistories.length" />
  </div>
</div>
<!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
</bo-container>
<!-- ===== \u25A1. \uC774\uB825 \uCE74\uB4DC (\uC81C\uBAA9 + \uD0ED\uBC14 + \uD0ED\uCEE8\uD150\uCE20) =============================== -->
<!-- ===== \u25A1.\u25A1. \uC0C1\uD488\uC815\uBCF4 \uBCC0\uACBD\uC774\uB825 ============================================= -->
`};
