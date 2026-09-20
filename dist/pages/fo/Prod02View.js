window.Prod02View={name:"Prod02View",props:{navigate:{type:Function,required:!0}},setup(S){const{ref:x,reactive:g,computed:f,onMounted:fe,onBeforeUnmount:V,watch:C}=Vue,j=window.foApp.selectedProd,X=window.foApp.addToCart,ge=(e,t={})=>{if(e==="page-goHome")return S.navigate("home");if(e==="page-goProdList")return S.navigate("prodList");if(e==="page-goContact")return S.navigate("contact");if(e==="cart-add")return De();if(e==="order-buyNow")return Ne();if(e==="cart-addFromDrawer")return Ue();if(e==="quickBuy-openBuy")return We();if(e==="quickBuy-openCart")return He();if(e==="quickBuy-close"){o.quickBuyOpen=!1;return}else{if(e==="prod-toggleLike")return J(t);if(e==="qty-inc"){o.qty++;return}else if(e==="qty-dec"){o.qty>1&&o.qty--;return}else if(e==="sizeGuideModal-open"){o.showSizeGuide=!0;return}else if(e==="sizeGuideModal-close"){o.showSizeGuide=!1;return}else if(e==="zoomModal-open"){o.zoomOpen=!0;return}else if(e==="zoomModal-close"){o.zoomOpen=!1;return}else if(e==="gallery-prev"){o.selectedImg=(o.selectedImg-1+B.value.length)%B.value.length;return}else if(e==="gallery-next"){o.selectedImg=(o.selectedImg+1)%B.value.length;return}else if(e==="photoModal-open"){o.photoPopupOpen=!0;return}else if(e==="photoModal-close"){o.photoPopupOpen=!1;return}else{if(e==="photoGrid-prev")return Je();if(e==="photoGrid-next")return Ze();if(e==="photoDetail-close")return _e();if(e==="photoDetail-prev")return Ke();if(e==="photoDetail-next")return $e();console.warn("[handleBtnAction] unknown cmd:",e)}}},ve=(e,t={})=>{if(e==="options-colorSelect")return Te(t);if(e==="options-sizeSelect")return Oe(t);if(e==="tab-go")return Le(t);if(e==="gallery-rowSelect"){o.selectedImg=t;return}else if(e==="reviews-filterSelect"){o.reviewFilter=t;return}else if(e==="photoGrid-rowGo"){o.photoGridPage=t;return}else{if(e==="reviews-photoGridRowSelect")return Ye(t);if(e==="reviews-photoListRowSelect")return Qe(t);console.warn("[handleSelectAction] unknown cmd:",e)}},ue=(e,t,i)=>{if(e==="size-guide"){if(i==null){o.showSizeGuide=!1;return}return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},J=e=>window.foApp.toggleLike(e),xe=e=>{var t,i,r;return(r=(i=(t=window.foApp).isLiked)==null?void 0:i.call(t,e))!=null?r:!1},o=g({loading:!1,error:null,selectedImg:0,selectedColor:null,selectedSize:null,qty:1,colorError:"",sizeError:"",activeTab:"detail",reviewFilter:"\uCD5C\uC2E0\uC21C",selectedReview:null,photoGridPage:1,tabFixed:!1,tabFixedTop:0,tabFixedLeft:0,tabFixedW:0,tabPlaceholderH:0,drawerMode:"buy",photoFromGrid:!1,showSizeGuide:!1,photoPopupOpen:!1,zoomOpen:!1,showBottomBar:!1,quickBuyOpen:!1,prodApiLoaded:!1});C(()=>o.showBottomBar,e=>{document.documentElement.style.setProperty("--fab-lift",e?"72px":"0px")}),V(()=>{document.documentElement.style.setProperty("--fab-lift","0px")});const be=g({}),d=g({}),L=e=>{Object.keys(d).forEach(t=>delete d[t]),e&&Object.assign(d,e)},me=(e,t,i,r)=>coUtil.cofMergeProdOpts(e,t,i,r);j&&L(j);const q=g([]),M=g([]),z=g([]),v=g({}),m=g([]),E=g([]),R=g({}),he=()=>coUtil.cofProdIdFromUrl(),k=e=>{var t,i,r;return(r=(i=(t=e==null?void 0:e.data)==null?void 0:t.data)!=null?i:e==null?void 0:e.data)!=null?r:null},F=e=>{const t=k(e);return Array.isArray(t)?t:(t==null?void 0:t.pageList)||(t==null?void 0:t.list)||[]},ye=async(e="DEFAULT")=>{var r,a;const t=he()||d.prodId;if(!t)return;try{const n=await foApiSvc.pdProd.getById(t,"\uC0C1\uD488\uC0C1\uC138","\uC0C1\uC138\uC870\uD68C"),s=k(n)||{},p=s.prod||s;if(p&&p.prodId){const c=me(p,{groups:s.prodOptTypes||[],items:s.prodOpts||[]},s.prodSkus||[],s.prodImgs||[]);L(c),foUtil.fofSetPageMeta({title:c.prodNm?c.prodNm+" | ShopJoy":void 0,description:c.advrtStmt||(c.prodNm?c.prodNm+" - ShopJoy\uC5D0\uC11C \uB9CC\uB098\uBCF4\uC138\uC694.":void 0)})}o.prodApiLoaded=!0}catch(n){console.error("[handleSearchList:getById]",n),o.prodApiLoaded=!0}const i=await Promise.allSettled([foApiSvc.pdProd.getContents(t,"\uC0C1\uD488\uC0C1\uC138","\uC0C1\uC138\uC124\uBA85\uC870\uD68C"),foApiSvc.pdProd.getRels(t,"\uC0C1\uD488\uC0C1\uC138","\uC5F0\uAD00\uC0C1\uD488\uC870\uD68C"),foApiSvc.pdProd.getReviews(t,{pageNo:1,pageSize:20},"\uC0C1\uD488\uC0C1\uC138","\uB9AC\uBDF0\uC870\uD68C"),foApiSvc.pdProd.getReviewImages(t,"\uC0C1\uD488\uC0C1\uC138","\uB9AC\uBDF0\uC774\uBBF8\uC9C0\uC870\uD68C"),foApiSvc.pdProd.getQna(t,{pageNo:1,pageSize:20},"\uC0C1\uD488\uC0C1\uC138","Q&A\uC870\uD68C")]);if(i[0].status==="fulfilled"&&q.splice(0,q.length,...F(i[0].value)),i[1].status==="fulfilled"&&M.splice(0,M.length,...F(i[1].value)),i[2].status==="fulfilled"){const n=k(i[2].value)||{},s=((r=n.reviewPage)==null?void 0:r.pageList)||[];z.splice(0,z.length,...s),Object.keys(v).forEach(c=>delete v[c]),Object.assign(v,n.summary||{});const p=n.attachImages||[];m.splice(0,m.length,...p)}if(i[3].status==="fulfilled"){const n=F(i[3].value);m.splice(0,m.length,...n)}if(i[4].status==="fulfilled"){const n=k(i[4].value)||{};E.splice(0,E.length,...((a=n.qnaPage)==null?void 0:a.pageList)||n.pageList||(Array.isArray(n)?n:[]))}try{const n=await foApiSvc.pdProd.getPromotions(t,"\uC0C1\uD488\uC0C1\uC138","\uD504\uB85C\uBAA8\uC158\uC870\uD68C");Object.keys(R).forEach(s=>delete R[s]),Object.assign(R,k(n)||{})}catch(n){console.error("[handleSearchList:getPromotions]",n)}},we=[{id:"detail",label:"\uC0C1\uC138\uC815\uBCF4"},{id:"size",label:"\uC0AC\uC774\uC988"},{id:"review",label:"\uC0C1\uD488\uD3C9"},{id:"qna",label:"Q&A"},{id:"style",label:"\uC2A4\uD0C0\uC77C"}],G=x(null),Z=x(null),T=x(null),O=x(null),D=x(null),N=x(null),U=x(null),W=12,ke=[["XS","36","82","60"],["S","38","86","62"],["M","40","90","64"],["L","42","96","66"],["XL","44","102","68"],["XXL","46","108","70"]],ee={};ee.sizeGuideGrid=[{key:"s0",label:"\uC0AC\uC774\uC988",align:"center",fmt:(e,t)=>t[0]},{key:"s1",label:"\uC5B4\uAE68 (cm)",align:"center",fmt:(e,t)=>t[1]},{key:"s2",label:"\uAC00\uC2B4 (cm)",align:"center",fmt:(e,t)=>t[2]},{key:"s3",label:"\uCD1D\uC7A5 (cm)",align:"center",fmt:(e,t)=>t[3]}];const Se=[{key:"s0",label:"\uC0AC\uC774\uC988",align:"center",fmt:(e,t)=>t[0]},{key:"s1",label:"\uC5B4\uAE68",align:"center",fmt:(e,t)=>t[1]},{key:"s2",label:"\uAC00\uC2B4",align:"center",fmt:(e,t)=>t[2]},{key:"s3",label:"\uCD1D\uC7A5",align:"center",fmt:(e,t)=>t[3]}],ze=[{emoji:"\u{1F456}",label:"\uCE90\uC8FC\uC5BC \uB8E9",desc:"\uB370\uB2D8 \uD32C\uCE20 + \uC2A4\uB2C8\uCEE4\uC988"},{emoji:"\u{1F457}",label:"\uD398\uBBF8\uB2CC \uB8E9",desc:"\uD50C\uB85C\uB7F4 \uC2A4\uCEE4\uD2B8\uC640 \uB9E4\uCE58"},{emoji:"\u{1F9E5}",label:"\uB808\uC774\uC5B4\uB4DC \uB8E9",desc:"\uC624\uBC84\uD54F \uC790\uCF13\uACFC \uD568\uAED8"},{emoji:"\u{1F45F}",label:"\uC2A4\uD3EC\uD2F0 \uB8E9",desc:"\uD2B8\uB799 \uD32C\uCE20 + \uC2A4\uB2C8\uCEE4\uC988"}],te="assets/cdn/prod/img/shop/product",Re=(e,t)=>{const i=e.prodId||1;if((i<=12?"fashion":"prod")==="fashion"){const n=((i-1)*3+t*3)%12+1;return[1,2,3].map(s=>{const p=(n-1+s-1)%12+1;return{src:`${te}/fashion/fashion-${p}.webp`,label:"\uC774\uBBF8\uC9C0 "+s}})}const a=((i-1)*3+t*2)%23+1;return[0,1,2].map(n=>{const s=(a-1+n)%23+1;return{src:`${te}/prod_${s}.png`,label:"\uC774\uBBF8\uC9C0 "+(n+1)}})},B=f(()=>{const e=d;if(!e)return[];const t=Array.isArray(e.images)?e.images:[];if(t.length){const a=o.selectedColor||null,n=new Set;a&&(a.optId&&n.add(String(a.optId)),a.val&&n.add(String(a.val)),a.name&&n.add(String(a.name)));const s=new Map;(e.opt1s||[]).forEach(l=>{l.optId&&s.set(String(l.optId),l),l.val&&s.set(String(l.val),l),l.name&&s.set(String(l.name),l)});const p=new Map;(e.opt2sAll||[]).forEach(l=>{l.optId&&p.set(String(l.optId),l),l.val&&p.set(String(l.val),l),l.name&&p.set(String(l.name),l)});const c=l=>!l.prodOpt1Id||String(l.prodOpt1Id).trim()==="",u=l=>n.has(String(l.prodOpt1Id));return(n.size&&t.some(u)?t.filter(l=>c(l)||u(l)):t).slice().sort((l,P)=>(P.isThumb==="Y")-(l.isThumb==="Y")||(l.sortOrd||0)-(P.sortOrd||0)).map((l,P)=>{const pe=l.prodOpt1Id!=null?s.get(String(l.prodOpt1Id)):null,ce=l.prodOpt2Id!=null?p.get(String(l.prodOpt2Id)):null,A=[];return pe&&A.push((e.opt1Nm||"\uC0C9\uC0C1")+": "+pe.name),ce&&A.push((e.opt2Nm||"\uC0AC\uC774\uC988")+": "+ce.name),l.isThumb==="Y"&&A.push("\u2605 \uB300\uD45C"),{src:coUtil.cofImgSrc(l.cdnImgUrl||l.cdnThumbUrl||l.previewUrl||""),label:"\uC774\uBBF8\uC9C0 "+(P+1),optTip:A.join(" / "),isMain:l.isThumb==="Y"}}).filter(l=>l.src)}if(!o.prodApiLoaded)return[];const r=(e.opt1s||[]).findIndex(a=>{var n;return a.name===((n=o.selectedColor)==null?void 0:n.name)});return Re(e,Math.max(0,r))}),Be=e=>{var p,c;const t=Number(e.rating)||0,i=e.reviewDate||e.regDate||"",r=i?coUtil.cofYmdDot(i):"",a=e.memberId||"",n=a.length>=3?a[0]+"*".repeat(a.length-2)+a.slice(-1):a.length===2?a[0]+"*":a||"***",s=m.filter(u=>u.reviewId===e.reviewId);return{id:e.reviewId,maskedName:n,rating:t,date:r,sizeInfo:e.prodOptNm2||e.sizeInfo||"",colorInfo:e.prodOptNm1||e.colorInfo||"",text:e.reviewContent||e.reviewTitle||"",hasPhoto:s.length>0,photoImg:coUtil.cofImgSrc(((p=s[0])==null?void 0:p.thumbUrl)||((c=s[0])==null?void 0:c.cdnImgUrl)||""),helpful:Number(e.helpfulCnt)||0}},b=f(()=>z.map(Be)),h=f(()=>b.value.filter(e=>e.hasPhoto)),Ie=f(()=>{const e=[...b.value];return o.reviewFilter==="\uBCC4\uC810\uB192\uC740\uC21C"?e.sort((t,i)=>i.rating-t.rating):o.reviewFilter==="\uBCC4\uC810\uB0AE\uC740\uC21C"?e.sort((t,i)=>t.rating-i.rating):o.reviewFilter==="\uB3C4\uC6C0\uC21C"?e.sort((t,i)=>i.helpful-t.helpful):e}),Pe=f(()=>{const e=Number(v.avgRating||v.avg_rating);if(e)return e.toFixed(1);const t=b.value;return t.length?(t.reduce((i,r)=>i+r.rating,0)/t.length).toFixed(1):"0.0"}),Ae=f(()=>[5,4,3,2,1].map(e=>({star:e,count:Number(v["rate"+e])||b.value.filter(t=>t.rating===e).length,pct:(()=>{const t=Number(v.total)||b.value.length,i=Number(v["rate"+e])||b.value.filter(r=>r.rating===e).length;return t?Math.round(i/t*100):0})()}))),Ce=e=>{const t=Math.max(0,Math.min(5,Number(e)||0)),i=Math.floor(t),r=t-i,a=r>=.25&&r<.75?1:0,n=r>=.75?i+1:i,s=5-n-a;return'<span style="color:#f59e0b;">\u2605</span>'.repeat(n)+(a?'<span style="position:relative;display:inline-block;color:#e5e7eb;">\u2605<span style="position:absolute;left:0;top:0;width:50%;overflow:hidden;color:#f59e0b;">\u2605</span></span>':"")+'<span style="color:#e5e7eb;">\u2605</span>'.repeat(s)};let oe=null;const y=()=>oe||(oe=document.querySelector(".layout-main"))||window;let ie=0;const je=()=>{const e=y();if(!e.getBoundingClientRect)return;const t=e.getBoundingClientRect();o.tabFixedTop=t.top,o.tabFixedLeft=t.left,o.tabFixedW=t.width},Le=e=>{var u,$;const i=(u={detail:T,size:O,review:D,qna:N,style:U}[e])==null?void 0:u.value;if(!i)return;const r=y(),a=r.getBoundingClientRect?r.getBoundingClientRect():{top:0},n=(($=G.value)==null?void 0:$.offsetHeight)||44,s=(o.tabFixed,n+8),p=i.getBoundingClientRect().top-a.top,c=r.scrollTop+p-s;r.scrollTo({top:c,behavior:"smooth"}),o.activeTab=e},re=()=>{const e=y(),t=G.value;if(!t||!e.getBoundingClientRect)return;const i=e.getBoundingClientRect().top;o.tabFixed?e.scrollTop<ie&&(o.tabFixed=!1):t.getBoundingClientRect().top<=i&&(o.tabPlaceholderH=t.offsetHeight,ie=e.scrollTop,je(),o.tabFixed=!0);const r=Z.value;o.showBottomBar=r?r.getBoundingClientRect().bottom<i:!1;const a=document.querySelector("footer");a&&a.getBoundingClientRect().top<e.getBoundingClientRect().bottom&&(o.showBottomBar=!1);const n=t.offsetHeight||44,s=o.tabFixed?o.tabFixedTop+n+20:t.getBoundingClientRect().bottom+10,p=[{id:"style",ref:U},{id:"qna",ref:N},{id:"review",ref:D},{id:"size",ref:O},{id:"detail",ref:T}];for(const c of p)if(c.ref.value&&c.ref.value.getBoundingClientRect().top<=s){o.activeTab=c.id;break}},H=()=>o.zoomOpen||o.photoPopupOpen||!!o.selectedReview||o.showSizeGuide||o.quickBuyOpen,ne=()=>{o.zoomOpen=!1,o.photoPopupOpen=!1,o.selectedReview=null,o.showSizeGuide=!1,o.quickBuyOpen=!1},ae=e=>{e.key==="Escape"&&H()&&(e.preventDefault(),ne())},se=()=>{H()&&ne()};C(H,(e,t)=>{if(e&&!t)try{history.pushState({modal:!0},"")}catch{}}),fe(async()=>{y().addEventListener("scroll",re,{passive:!0}),window.addEventListener("keydown",ae),window.addEventListener("popstate",se);const t=(d.opt1s||[]).find(i=>I(i)==="ok");t&&(o.selectedColor=t),ye()}),V(()=>{y().removeEventListener("scroll",re),window.removeEventListener("keydown",ae),window.removeEventListener("popstate",se)}),C(()=>j,e=>{L(e),o.selectedColor=((e==null?void 0:e.opt1s)||[]).find(t=>I(t)==="ok")||null,o.selectedSize=null,o.qty=1,o.selectedImg=0,o.activeTab="detail",o.quickBuyOpen=!1,o.tabFixed=!1,y().scrollTo(0,0)});const qe=e=>{var t,i;return e&&(((i=(((t=window.SITE_CONFIG)==null?void 0:t.categorys)||[]).find(r=>r.categoryId===e.categoryId))==null?void 0:i.categoryNm)||e.categoryId)||""},Me=f(()=>{const e=d;if(!e)return{};const t=e.opt1s||[],i=e.prodId||1,r={};return t.forEach((a,n)=>{const s=(i*11+n*17)%25;s===0?r[a.name]="stop":s===1?r[a.name]="soldout":r[a.name]="ok"}),r}),I=e=>Me.value[e==null?void 0:e.name]||"ok",Ee=f(()=>{const e=d;if(!e)return{};const t=e.opt2s||[],i=e.prodId||1,r={};return t.forEach((a,n)=>{const s=(i*7+n*13)%20;s===0?r[a]="stop":s===1?r[a]="soldout":r[a]="ok"}),r}),le=e=>Ee.value[e]||"ok",w=f(()=>{const e=String(d.price||"").replace(/[^0-9]/g,"");return Number(e)||0}),Y=e=>(d.opt2Prices||{})[e]||0,de=f(()=>{var i;const e=((i=o.selectedColor)==null?void 0:i.priceDelta)||0,t=Y(o.selectedSize);return w.value+e+t}),Q=f(()=>{const e=d;if(!e||!w.value)return null;const t=(e.opt1s||[]).map(s=>s.priceDelta||0),i=Object.values(e.opt2Prices||{}).concat([0]),r=[];t.forEach(s=>i.forEach(p=>r.push(w.value+s+p)));const a=Math.min(...r),n=Math.max(...r);return a===n?null:{min:a,max:n}}),Fe=f(()=>{var a;const e=d;if(!e||!w.value)return(e==null?void 0:e.price)||"";const t=((a=o.selectedColor)==null?void 0:a.priceDelta)||0,i=Y(o.selectedSize),r=Object.keys(e.opt2Prices||{}).length>0;if(o.selectedColor&&o.selectedSize)return(w.value+t+i).toLocaleString("ko-KR")+"\uC6D0";if(o.selectedColor){const n=w.value+t;if(r){const s=Math.max(...Object.values(e.opt2Prices));return n.toLocaleString("ko-KR")+"\uC6D0 ~ "+(n+s).toLocaleString("ko-KR")+"\uC6D0"}return n.toLocaleString("ko-KR")+"\uC6D0"}return Q.value?Q.value.min.toLocaleString("ko-KR")+"\uC6D0 ~ "+Q.value.max.toLocaleString("ko-KR")+"\uC6D0":e.price}),Ge=f(()=>d.prodId?de.value?(de.value*o.qty).toLocaleString("ko-KR")+"\uC6D0":d.price:""),Te=e=>{const t=I(e);t==="stop"||t==="soldout"||(o.selectedColor=e,o.colorError="",o.selectedImg=0)},Oe=e=>{const t=le(e);t==="stop"||t==="soldout"||(o.selectedSize=e,o.sizeError="")},_=()=>{let e=!0;o.selectedColor||((d.opt1s||[]).length>0?(o.colorError="\uC0C9\uC0C1\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",e=!1):d.prodTypeCd==="OPTION"?(o.colorError="\uC635\uC158 \uC815\uBCF4\uAC00 \uC5C6\uB294 \uC0C1\uD488\uC785\uB2C8\uB2E4. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD574 \uC8FC\uC138\uC694.",e=!1):o.selectedColor={name:"FREE",hex:"#e5e7eb",priceDelta:0});const t=d.opt2s||[];return o.selectedSize||(t.length===1&&t[0]==="FREE"||t.length===0?o.selectedSize="FREE":(o.sizeError="\uC0AC\uC774\uC988\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",e=!1)),e},De=()=>{var e;_()&&(X(d,o.selectedColor,o.selectedSize,o.qty),o.selectedColor=((e=d.opt1s)==null?void 0:e[0])||null,o.selectedSize=null,o.qty=1)},Ne=()=>{_()&&(o.quickBuyOpen=!1,S.navigate("order",{instantOrder:{prod:d,color:o.selectedColor,size:o.selectedSize,qty:o.qty}}))},Ue=()=>{var e;_()&&(X(d,o.selectedColor,o.selectedSize,o.qty),o.quickBuyOpen=!1,o.selectedColor=((e=d.opt1s)==null?void 0:e[0])||null,o.selectedSize=null,o.qty=1)},We=()=>{o.drawerMode="buy",o.quickBuyOpen=!0},He=()=>{o.drawerMode="cart",o.quickBuyOpen=!0},Ye=e=>{o.selectedReview=e,o.photoFromGrid=!0,o.photoPopupOpen=!1},Qe=e=>{o.selectedReview=e,o.photoFromGrid=!1},_e=()=>{o.selectedReview=null,o.photoFromGrid&&(o.photoPopupOpen=!0),o.photoFromGrid=!1},Ke=()=>{const e=h.value;if(!e.length)return;const t=e.findIndex(i=>{var r;return i.id===((r=o.selectedReview)==null?void 0:r.id)});o.selectedReview=e[(t-1+e.length)%e.length]},$e=()=>{const e=h.value;if(!e.length)return;const t=e.findIndex(i=>{var r;return i.id===((r=o.selectedReview)==null?void 0:r.id)});o.selectedReview=e[(t+1)%e.length]},Ve=f(()=>h.value.findIndex(t=>{var i;return t.id===((i=o.selectedReview)==null?void 0:i.id)})),K=f(()=>Math.max(1,Math.ceil(h.value.length/W))),Xe=f(()=>{const e=(o.photoGridPage-1)*W;return h.value.slice(e,e+W)}),Je=()=>{o.photoGridPage=o.photoGridPage>1?o.photoGridPage-1:K.value},Ze=()=>{o.photoGridPage=o.photoGridPage<K.value?o.photoGridPage+1:1};return{columns:ee,uiState:o,codes:be,prod:d,svContents:q,svRels:M,svReviews:z,svReviewSummary:v,svReviewImages:m,svQnas:E,svPromotions:R,handleBtnAction:ge,handleSelectAction:ve,fnCallbackModal:ue,cfMockImages:B,cfMockReviews:b,cfReviewsWithPhoto:h,cfFilteredReviews:Ie,cfAvgRating:Pe,cfRatingDist:Ae,cfQuickBuyTotal:Ge,cfDisplayPrice:Fe,cfPhotoNavIdx:Ve,cfPhotoGridPageCount:K,cfPhotoGridItems:Xe,sizeGuideRows:ke,sizeGuideColsShort:Se,styleItems:ze,TABS:we,tabBarRef:G,detailSecRef:T,sizeSecRef:O,reviewSecRef:D,qnaSecRef:N,styleSecRef:U,buyBtnRef:Z,getSizeDelta:Y,fnCategoryLabel:qe,stars:Ce,colorStatus:I,sizeStatus:le,isLiked:xe,toggleLike:J}},template:`
<fo-page wrap-class="page-wrap" title="\uC0C1\uD488 \uC0C1\uC138" eyebrow="Prod"
  banner-img="assets/cdn/prod/img/page-title/page-title-2.jpg"
  banner-align="center 40%"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'\uC0C1\uD488\uBAA9\uB85D', page:'prodList' }, { label:'\uC0C1\uD488 \uC0C1\uC138' }]"
  @nav="p => p === 'home' ? handleBtnAction('page-goHome') : handleBtnAction('page-goProdList')">
  <!-- ===== \u25A0. \uBC30\uB108(\uB9AC\uBCF8+\uD0C0\uC774\uD2C0) \uC2AC\uB86F \u2014 Site 02 \uB9AC\uBCF8\uC744 \uBC30\uB108 \uC704\uC5D0 \uC720\uC9C0 ============= -->
  <template #banner>
  <!-- ===== \u25A0. Site 02 Edition Ribbon ================================== -->
  <div style="background:linear-gradient(135deg,#2e7d6b 0%,#4a9b7e 50%,#5b9279 100%);color:#fff;padding:10px 24px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;font-size:12px;">
    <span style="letter-spacing:2.5px;padding:2px 8px;border:1px solid rgba(255,255,255,0.4);">
      MINT
    </span>
    <span>
      \u{1F33F} \uC790\uC5F0 \uC18C\uC7AC \xB7 \uCE5C\uD658\uACBD \uD328\uD0A4\uC9C0
    </span>
    <span style="margin-left:auto;opacity:0.85;">
      SITE 02
    </span>
  </div>
  <!-- ===== \u25A1. Site 02 Edition Ribbon ================================== -->
  <!-- ===== \u25A0. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 \uBC30\uB108 ============================================== -->
  <div class="page-banner-full" style="position:relative;overflow:hidden;height:220px;margin-bottom:36px;display:flex;align-items:center;justify-content:center;">
    <img src="assets/cdn/prod/img/page-title/page-title-2.jpg" alt="\uC0C1\uD488\uC0C1\uC138"
      style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 40%;" />
    <div style="position:absolute;inset:0;background:linear-gradient(120deg,rgba(255,255,255,0.72) 0%,rgba(240,245,255,0.55) 45%,rgba(220,232,255,0.38) 100%);">
    </div>
    <div style="position:relative;z-index:1;text-align:center;">
      <div style="font-size:0.75rem;color:rgba(0,0,0,0.55);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">
        Prod
      </div>
      <h1 style="font-size:2.2rem;font-weight:700;color:#111;letter-spacing:-0.5px;margin-bottom:8px;">
        \uC0C1\uD488 \uC0C1\uC138
      </h1>
      <div style="display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.8rem;color:rgba(0,0,0,0.55);">
        <span style="cursor:pointer;" @click="handleBtnAction('page-goHome')">
          \uD648
        </span>
        <span>
          /
        </span>
        <span style="cursor:pointer;" @click="handleBtnAction('page-goProdList')">
          \uC0C1\uD488\uBAA9\uB85D
        </span>
        <span>
          /
        </span>
        <span style="color:#333;">
          \uC0C1\uD488 \uC0C1\uC138
        </span>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 \uBC30\uB108 ============================================== -->
  </template>
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <template v-if="prod">
    <!-- ===== \u25A0.\u25A0. \u2550\u2550 \uC0C1\uB2E8: \uAC24\uB7EC\uB9AC + \uAD6C\uB9E4 \uC635\uC158 \u2550\u2550 ================================= -->
    <div class="prod-top-wrap" style="max-width:1100px;margin:0 auto;">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(16px,3vw,32px);align-items:start;" class="detail-grid">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC88C: \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC ======================================== -->
        <div style="display:flex;flex-direction:column;gap:10px;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBA54\uC778 \uC774\uBBF8\uC9C0 ========================================== -->
          <div style="position:relative;"
            @mouseenter="$event.currentTarget.querySelector('.img-nav').style.opacity='1'"
            @mouseleave="$event.currentTarget.querySelector('.img-nav').style.opacity='0'">
            <div style="border-radius:12px;border:1px solid var(--border);overflow:hidden;aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;position:relative;background:var(--bg-base);cursor:pointer;"
              @click="handleBtnAction('zoomModal-open')">
              <img v-if="cfMockImages[uiState.selectedImg]?.src" :src="cfMockImages[uiState.selectedImg].src" :alt="prod.prodNm"
                style="width:100%;height:100%;object-fit:cover;" />
              <div v-if="prod.badge" style="position:absolute;top:14px;left:14px;">
                <span v-if="prod.badge==='NEW'"
                  style="background:var(--blue);color:#fff;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">
                  NEW
                </span>
                <span v-else-if="prod.badge==='\uC778\uAE30'"
                  style="background:#ff6b35;color:#fff;font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;">
                  \uC778\uAE30
                </span>
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD655\uB300 \uC544\uC774\uCF58 (\uC6B0\uC0C1\uB2E8) ================================== -->
            <button @click="handleBtnAction('zoomModal-open')"
              style="position:absolute;top:14px;right:14px;width:36px;height:36px;border:1px solid var(--border);border-radius:6px;background:var(--bg-card);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 4px rgba(0,0,0,0.08);z-index:2;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--text-secondary);">
                <polyline points="15 3 21 3 21 9">
                </polyline>
                <polyline points="9 21 3 21 3 15">
                </polyline>
                <line x1="21" y1="3" x2="14" y2="10">
                </line>
                <line x1="3" y1="21" x2="10" y2="14">
                </line>
              </svg>
            </button>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC88C/\uC6B0 \uD654\uC0B4\uD45C ======================================= -->
            <div class="img-nav" style="opacity:0;transition:opacity .2s;">
              <button @click="handleBtnAction('gallery-prev')"
                style="position:absolute;left:10px;top:50%;transform:translateY(-50%);width:36px;height:36px;border-radius:50%;border:none;background:rgba(255,255,255,0.85);box-shadow:0 2px 8px rgba(0,0,0,0.15);cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2.5">
                  <polyline points="15 18 9 12 15 6">
                  </polyline>
                </svg>
              </button>
              <button @click="handleBtnAction('gallery-next')"
                style="position:absolute;right:10px;top:50%;transform:translateY(-50%);width:36px;height:36px;border-radius:50%;border:none;background:rgba(255,255,255,0.85);box-shadow:0 2px 8px rgba(0,0,0,0.15);cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2.5">
                  <polyline points="9 18 15 12 9 6">
                  </polyline>
                </svg>
              </button>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC378\uB124\uC77C \uAC00\uB85C \uBAA9\uB85D (\uD558\uB2E8) ================================== -->
          <div style="display:flex;flex-direction:row;gap:8px;overflow-x:auto;scrollbar-width:none;">
            <div v-for="(img,i) in cfMockImages" :key="i"
              @click="handleSelectAction('gallery-rowSelect', i)"
              :style="{
              width:'72px',height:'72px',borderRadius:'8px',overflow:'hidden',
              cursor:'pointer',flexShrink:0,
              border:uiState.selectedImg===i?'2px solid var(--blue)':'2px solid var(--border)',
              transition:'border-color .15s',
              background:'var(--bg-base)',
              }">
              <img v-if="img.src" :src="img.src" :alt="img.label" style="width:100%;height:100%;object-fit:cover;" />
            </div>
          </div>
        </div>
        <!-- ===== /gallery =================================================== -->
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC6B0: \uAD6C\uB9E4 \uC635\uC158 ========================================== -->
        <div>
          <fo-container card-style="padding:clamp(16px,3vw,28px);position:sticky;top:20px;">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uD488\uBA85 + \uCE74\uD14C\uACE0\uB9AC ==================================== -->
            <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:4px;flex-wrap:wrap;">
              <h1 style="font-size:1.25rem;font-weight:800;color:var(--text-primary);flex:1;min-width:0;line-height:1.3;">
                {{ prod.prodNm }}
              </h1>
              <span style="font-size:0.72rem;font-weight:600;padding:3px 10px;border-radius:20px;background:var(--blue-dim);color:var(--blue);flex-shrink:0;white-space:nowrap;">
                {{ fnCategoryLabel(prod) }}
              </span>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBCC4\uC810 \uBBF8\uB9AC\uBCF4\uAE30 ======================================= -->
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:14px;">
              <span style="font-size:0.82rem;" v-html="stars(cfAvgRating)">
              </span>
              <span style="font-size:0.8rem;font-weight:700;color:var(--text-primary);">
                {{ cfAvgRating }}
              </span>
              <span style="font-size:0.78rem;color:var(--text-muted);">
                ({{ svReviewSummary.total || cfMockReviews.length }})
              </span>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAC00\uACA9 ============================================ -->
            <div style="font-size:1.7rem;font-weight:900;color:var(--blue);margin-bottom:24px;">
              {{ cfDisplayPrice }}
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0C9\uC0C1 \uC120\uD0DD ========================================= -->
            <div style="margin-bottom:20px;">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <label style="font-size:0.82rem;font-weight:600;color:var(--text-secondary);">
                  {{ prod.opt1Nm || '\uC0C9\uC0C1' }} \uC120\uD0DD
                  <span style="color:var(--blue);margin-left:2px;">
                    *
                  </span>
                </label>
                <span v-if="uiState.selectedColor" style="font-size:0.8rem;font-weight:600;color:var(--text-primary);">
                  {{ uiState.selectedColor.name }}
                </span>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:10px;">
                <div v-for="c in prod.opt1s" :key="c.name"
                  style="position:relative;display:flex;flex-direction:column;align-items:center;">
                  <button @click="handleSelectAction('options-colorSelect', c)" :title="c.name + (colorStatus(c)==='soldout' ? ' (\uD488\uC808)' : colorStatus(c)==='stop' ? ' (\uD310\uB9E4\uC911\uC9C0)' : '')" :style="{ width:'34px',height:'34px',borderRadius:'50%',position:'relative', cursor: colorStatus(c)==='ok' ? 'pointer' : 'not-allowed', background:c.hex || '#e5e7eb', border: uiState.selectedColor?.name===c.name ? '3px solid #fff' : '1px solid rgba(0,0,0,0.18)', boxShadow: uiState.selectedColor?.name===c.name ? '0 0 0 2px var(--blue), 0 2px 8px rgba(22,119,255,0.35)' : '0 1px 2px rgba(0,0,0,0.08)', boxSizing:'border-box',transition:'all .15s', opacity: colorStatus(c)!=='ok' ? '0.4' : '1', }">
                  <svg v-if="uiState.selectedColor?.name===c.name" width="16" height="16" viewBox="0 0 24 24" fill="none" :stroke="(c.hex ? /^#(f|e|d)/i.test(c.hex) : false) ? '#222' : '#fff'" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;">
                  <polyline points="20 6 9 17 4 12">
                  </polyline>
                </svg>
              </button>
              <span v-if="uiState.selectedColor?.name===c.name" style="font-size:0.62rem;font-weight:700;color:var(--blue);line-height:1;white-space:nowrap;">
              {{ c.name }}
            </span>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB300\uAC01\uC120 \uCDE8\uC18C\uC120 (\uD488\uC808/\uC911\uC9C0) ========================= -->
            <svg v-if="colorStatus(c)!=='ok'" style="position:absolute;top:0;left:0;width:30px;height:30px;pointer-events:none;" viewBox="0 0 30 30">
              <line x1="4" y1="4" x2="26" y2="26" stroke="#ef4444" stroke-width="2" />
            </svg>
            <span v-if="colorStatus(c)==='soldout'" style="position:absolute;top:-8px;right:-10px;font-size:0.5rem;background:#ef4444;color:#fff;padding:1px 3px;border-radius:3px;font-weight:700;line-height:1.2;">
              \uD488\uC808
            </span>
            <span v-else-if="colorStatus(c)==='stop'" style="position:absolute;top:-8px;right:-10px;font-size:0.5rem;background:#9ca3af;color:#fff;padding:1px 3px;border-radius:3px;font-weight:700;line-height:1.2;">
              \uC911\uC9C0
            </span>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC635\uC158 \uAC00\uACA9 delta ============================= -->
            <span v-if="c.priceDelta" style="font-size:0.58rem;font-weight:700;color:var(--blue);white-space:nowrap;line-height:1;">
              +{{ c.priceDelta.toLocaleString('ko-KR') }}
            </span>
          </div>
        </div>
        <div v-if="uiState.colorError" style="margin-top:6px;font-size:0.78rem;color:#ef4444;">
          {{ uiState.colorError }}
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC0AC\uC774\uC988 \uC120\uD0DD (FREE \uB610\uB294 \uBBF8\uC124\uC815\uC774\uBA74 \uC228\uAE40) ===================== -->
      <div v-if="prod.opt2s?.length ? !(prod.opt2s.length===1 ? prod.opt2s[0]==='FREE' : false) : false" style="margin-bottom:20px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <label style="font-size:0.82rem;font-weight:600;color:var(--text-secondary);">
          {{ prod.opt2Nm || '\uC0AC\uC774\uC988' }} \uC120\uD0DD
          <span style="color:var(--blue);margin-left:2px;">
            *
          </span>
        </label>
        <button @click="handleBtnAction('sizeGuideModal-open')"
                  style="background:none;border:none;cursor:pointer;color:var(--blue);font-size:0.75rem;font-weight:600;padding:0;text-decoration:underline;">
          \uC0AC\uC774\uC988 \uAC00\uC774\uB4DC
        </button>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        <button v-for="s in prod.opt2s" :key="s" @click="handleSelectAction('options-sizeSelect', s)"
                  :style="{
                  padding:'7px 14px',borderRadius:'6px',fontSize:'0.82rem',position:'relative',
                  cursor: sizeStatus(s)==='ok' ? 'pointer' : 'not-allowed',
                  border: uiState.selectedSize===s ? '2px solid var(--blue)' : sizeStatus(s)==='ok' ? '2px solid var(--border)' : '2px solid #e0e0e0',
                  background: uiState.selectedSize===s ? 'var(--blue-dim)' : sizeStatus(s)==='ok' ? 'var(--bg-card)' : '#f5f5f5',
                  color: uiState.selectedSize===s ? 'var(--blue)' : sizeStatus(s)==='ok' ? 'var(--text-secondary)' : '#bbb',
                  fontWeight: uiState.selectedSize===s ? '700' : '500',
                  textDecoration: sizeStatus(s)!=='ok' ? 'line-through' : 'none',
                  opacity: sizeStatus(s)!=='ok' ? '0.7' : '1',
                  transition:'all .15s',
                  }">
          {{ s }}
          <span v-if="getSizeDelta(s)" style="font-size:0.62rem;font-weight:700;color:var(--blue);margin-left:2px;">
            (+{{ getSizeDelta(s).toLocaleString('ko-KR') }})
          </span>
          <span v-if="sizeStatus(s)==='soldout'" style="position:absolute;top:-7px;right:-4px;font-size:0.55rem;background:#ef4444;color:#fff;padding:1px 4px;border-radius:3px;font-weight:700;line-height:1.2;">
            \uD488\uC808
          </span>
          <span v-else-if="sizeStatus(s)==='stop'" style="position:absolute;top:-7px;right:-4px;font-size:0.55rem;background:#9ca3af;color:#fff;padding:1px 4px;border-radius:3px;font-weight:700;line-height:1.2;">
            \uC911\uC9C0
          </span>
        </button>
      </div>
      <div v-if="uiState.sizeError" style="margin-top:6px;font-size:0.78rem;color:#ef4444;">
        {{ uiState.sizeError }}
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC218\uB7C9 ============================================ -->
    <div style="margin-bottom:20px;">
      <label style="font-size:0.82rem;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:10px;">
        \uC218\uB7C9
      </label>
      <div style="display:flex;align-items:center;border:1.5px solid var(--border);border-radius:8px;overflow:hidden;width:fit-content;">
        <button @click="handleBtnAction('qty-dec')" style="width:36px;height:36px;border:none;background:var(--bg-base);cursor:pointer;font-size:1.1rem;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;">
          \u2212
        </button>
        <span style="min-width:44px;text-align:center;font-size:0.9rem;font-weight:700;color:var(--text-primary);">
          {{ uiState.qty }}
        </span>
        <button @click="handleBtnAction('qty-inc')" style="width:36px;height:36px;border:none;background:var(--bg-base);cursor:pointer;font-size:1.1rem;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;">
          +
        </button>
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC120\uD0DD \uC694\uC57D ========================================= -->
    <div v-if="uiState.selectedColor||uiState.selectedSize"
              style="background:var(--bg-base);border-radius:8px;padding:10px 14px;margin-bottom:16px;font-size:0.82rem;color:var(--text-secondary);line-height:1.9;">
      <div v-if="uiState.selectedColor">
        <span style="font-weight:600;color:var(--text-primary);">
          \uC0C9\uC0C1:
        </span>
        {{ uiState.selectedColor.name }}
      </div>
      <div v-if="uiState.selectedSize">
        <span style="font-weight:600;color:var(--text-primary);">
          \uC0AC\uC774\uC988:
        </span>
        {{ uiState.selectedSize }}
      </div>
      <div>
        <span style="font-weight:600;color:var(--text-primary);">
          \uC218\uB7C9:
        </span>
        {{ uiState.qty }}\uAC1C
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC84\uD2BC ============================================ -->
    <div ref="buyBtnRef" style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
      <div style="display:flex;gap:8px;">
        <button class="btn btn_cart" style="flex:1;padding:13px;font-size:0.95rem;" @click="handleBtnAction('cart-add')">
          \u{1F6D2} \uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30
        </button>
        <button @click="handleBtnAction('prod-toggleLike', prod.prodId)" :title="isLiked?.(prod.prodId) ? '\uCC1C \uD574\uC81C' : '\uCC1C\uD558\uAE30'" :style="{ width:'52px',flexShrink:0,border:'1.5px solid var(--border)',borderRadius:'10px', background: isLiked?.(prod.prodId) ? '#fee2e2' : 'var(--bg-card)', cursor:'pointer',fontSize:'1.3rem',display:'flex',alignItems:'center',justifyContent:'center', transition:'all .15s', }">
        <span :style="{ color: isLiked?.(prod.prodId) ? '#ef4444' : '#9ca3af' }">
        {{ isLiked?.(prod.prodId) ? '\u2665' : '\u2661' }}
      </span>
    </button>
  </div>
  <button class="btn btn_buy" style="width:100%;padding:13px;font-size:0.95rem;" @click="handleBtnAction('order-buyNow')">
    \u26A1 \uBC14\uB85C\uAD6C\uB9E4
  </button>
  <button @click="handleBtnAction('page-goContact')"
                style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:0.8rem;text-decoration:underline;padding:4px 0;text-align:center;">
    \uC0C1\uD488 \uBB38\uC758\uD558\uAE30
  </button>
</div>
<!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBC30\uC1A1 \uC548\uB0B4 ========================================= -->
<div style="padding-top:14px;border-top:1px solid var(--border);font-size:0.8rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:5px;">
  <div style="display:flex;gap:8px;">
    <span>
      \u{1F69A}
    </span>
    <span>
      \uACB0\uC81C \uD655\uC778 \uD6C4
      <strong>
        1~2 \uC601\uC5C5\uC77C
      </strong>
      \uB0B4 \uCD9C\uACE0
    </span>
  </div>
  <div style="display:flex;gap:8px;">
    <span>
      \u21A9\uFE0F
    </span>
    <span>
      \uC218\uB839 \uD6C4
      <strong>
        7\uC77C \uC774\uB0B4
      </strong>
      \uAD50\uD658\xB7\uBC18\uD488 \uAC00\uB2A5
    </span>
  </div>
  <div style="display:flex;gap:8px;">
    <span>
      \u{1F4B3}
    </span>
    <span>
      \uACB0\uC81C:
      <strong>
        \uACC4\uC88C\uC774\uCCB4
      </strong>
    </span>
  </div>
</div>
</fo-container>
</div>
<!-- ===== /purchase ================================================== -->
</div>
</div>
<!-- ===== /page-wrap top ============================================= -->
<!-- ===== \u25A1.\u25A1. \u2550\u2550 \uC0C1\uB2E8: \uAC24\uB7EC\uB9AC + \uAD6C\uB9E4 \uC635\uC158 \u2550\u2550 ================================= -->
<!-- ===== \u25A0.\u25A0. \u2550\u2550 \uD0ED \uBC14 (\uC2A4\uD06C\uB864 \uC2DC \uD5E4\uB354 \uC544\uB798 \uACE0\uC815) \u2550\u2550 ============================ -->
<div v-if="uiState.tabFixed" :style="{ height: uiState.tabPlaceholderH + 'px', marginTop:'24px' }">
</div>
<div ref="tabBarRef"
      :style="uiState.tabFixed ? {
      position:'fixed', top:uiState.tabFixedTop+'px', left:uiState.tabFixedLeft+'px', width:uiState.tabFixedW+'px',
      zIndex:55,
      background:'linear-gradient(to bottom, rgba(245,248,253,0.98) 0%, var(--bg-card) 100%)',
      backdropFilter:'blur(10px)',
      WebkitBackdropFilter:'blur(10px)',
      borderBottom:'1px solid var(--border)',
      boxShadow:'0 4px 16px rgba(0,0,0,0.06)',
      } : {
      position:'relative',
      zIndex:50,
      background:'linear-gradient(to bottom, rgba(245,248,253,0.98) 0%, var(--bg-card) 100%)',
      borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)',
      marginTop:'24px',
      }">
  <div class="page-wrap" style="padding-top:0;padding-bottom:0;display:flex;justify-content:center;">
    <button v-for="tab in TABS" :key="tab.id" @click="handleSelectAction('tab-go', tab.id)"
          :style="{
          padding:'13px 22px',background:'none',cursor:'pointer',
          border:'none',
          borderBottom:uiState.activeTab===tab.id?'2px solid var(--blue)':'2px solid transparent',
          color:uiState.activeTab===tab.id?'var(--blue)':'var(--text-secondary)',
          fontWeight:uiState.activeTab===tab.id?'700':'500',
          fontSize:'0.88rem',transition:'all .15s',whiteSpace:'nowrap',
          marginBottom:'-2px',
          }">
      {{ tab.label }}
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ========================================== -->
      <span v-if="tab.id==='review' ? (svReviewSummary.total || cfMockReviews.length) : false" :style="{ display:'inline-flex',alignItems:'center',justifyContent:'center', minWidth:'18px',height:'18px',borderRadius:'9px', background:uiState.activeTab==='review'?'var(--blue)':'var(--text-muted)', color:'#fff',fontSize:'0.68rem',fontWeight:'700', marginLeft:'4px',padding:'0 4px',verticalAlign:'middle', }">
      {{ svReviewSummary.total || cfMockReviews.length }}
    </span>
    <span v-if="tab.id==='qna' ? svQnas.length : false" :style="{ display:'inline-flex',alignItems:'center',justifyContent:'center', minWidth:'18px',height:'18px',borderRadius:'9px', background:uiState.activeTab==='qna'?'var(--blue)':'var(--text-muted)', color:'#fff',fontSize:'0.68rem',fontWeight:'700', marginLeft:'4px',padding:'0 4px',verticalAlign:'middle', }">
    {{ svQnas.length }}
  </span>
</button>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \u2550\u2550 \uD0ED \uBC14 (\uC2A4\uD06C\uB864 \uC2DC \uD5E4\uB354 \uC544\uB798 \uACE0\uC815) \u2550\u2550 ============================ -->
<!-- ===== \u25A0.\u25A0. \u2550\u2550 \uD0ED \uC139\uC158\uB4E4 \u2550\u2550 =========================================== -->
<div style="padding-top:0;">
  <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uC138\uC815\uBCF4 ================================================ -->
  <div ref="detailSecRef" style="padding-top:32px;">
    <div style="font-size:1rem;font-weight:800;color:var(--text-primary);margin-bottom:20px;padding-bottom:12px;border-bottom:1.5px solid var(--border);">
      \uC0C1\uC138\uC815\uBCF4
    </div>
    <fo-container card-style="padding:clamp(16px,3vw,28px);margin-bottom:14px;">
      <h2 style="font-size:0.95rem;font-weight:700;margin-bottom:14px;color:var(--text-primary);">
        \u{1F4CB} \uC0C1\uD488 \uC124\uBA85
      </h2>
      <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.9;margin-bottom:16px;">
        {{ prod.desc }}
      </p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        <span v-for="t in prod.tags" :key="t"
              style="padding:4px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:20px;font-size:0.78rem;color:var(--text-secondary);">
          # {{ t }}
        </span>
      </div>
    </fo-container>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. BO \uB4F1\uB85D \uC0C1\uD488\uC124\uBA85 \uBE14\uB85D ===================================== -->
    <fo-container v-if="svContents.length" card-style="padding:clamp(16px,3vw,28px);margin-bottom:14px;">
      <h2 style="font-size:0.95rem;font-weight:700;margin-bottom:14px;color:var(--text-primary);">
        \u{1F4DD} \uC0C1\uC138 \uC124\uBA85
      </h2>
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div v-for="(blk, bi) in svContents" :key="blk?.prodContentId || bi">
          <div v-if="(blk.contentTypeCd||'').toUpperCase()==='HTML'"
                style="font-size:0.9rem;line-height:1.8;color:var(--text-primary);"
                v-html="blk.contentHtml">
          </div>
          <img v-else-if="['IMAGE','FILE'].includes((blk.contentTypeCd||'').toUpperCase())"
                :src="blk.contentHtml" alt="\uC0C1\uD488\uC124\uBA85 \uC774\uBBF8\uC9C0"
                style="max-width:100%;height:auto;border-radius:8px;display:block;" />
          <div v-else-if="(blk.contentTypeCd||'').toUpperCase()==='URL'">
            <img v-if="/.(jpe?g|png|gif|webp|svg)$/i.test(blk.contentHtml||'')"
                  :src="blk.contentHtml" alt="\uC0C1\uD488\uC124\uBA85 \uC774\uBBF8\uC9C0"
                  style="max-width:100%;height:auto;border-radius:8px;display:block;" />
            <a v-else :href="blk.contentHtml" target="_blank"
                  style="color:var(--blue);text-decoration:underline;">
              {{ blk.contentHtml }}
            </a>
          </div>
          <div v-else style="font-size:0.9rem;line-height:1.8;color:var(--text-primary);" v-html="blk.contentHtml">
          </div>
        </div>
      </div>
    </fo-container>
    <fo-container card-style="padding:28px;">
      <h2 style="font-size:0.95rem;font-weight:700;margin-bottom:14px;color:var(--text-primary);">
        \u{1F9FA} \uC138\uD0C1 \uBC0F \uAD00\uB9AC
      </h2>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div v-for="item in [
              {icon:'\u{1F4A7}',label:'\uC138\uD0C1 \uBC29\uBC95',val:'\uCC2C\uBB3C \uC190\uC138\uD0C1 \uB610\uB294 \uC138\uD0C1\uAE30 \uC57D\uC138\uD0C1 \uAD8C\uC7A5'},
              {icon:'\u{1F321}\uFE0F',label:'\uAC74\uC870 \uBC29\uBC95',val:'\uADF8\uB298\uC5D0\uC11C \uC790\uC5F0 \uAC74\uC870 (\uB4DC\uB77C\uC774\uAE30 \uAE08\uC9C0)'},
              {icon:'\u{1F455}',label:'\uB2E4\uB9BC\uC9C8',val:'\uB0AE\uC740 \uC628\uB3C4\uB85C \uB4A4\uC9D1\uC5B4 \uB2E4\uB9BC\uC9C8'},
              {icon:'\u{1F6AB}',label:'\uC8FC\uC758\uC0AC\uD56D',val:'\uD45C\uBC31\uC81C \uC0AC\uC6A9 \uAE08\uC9C0, \uB4DC\uB77C\uC774\uD074\uB9AC\uB2DD \uAD8C\uC7A5 \uC548\uD568'},
              ]" :key="item.label" style="display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:1.05rem;flex-shrink:0;width:26px;text-align:center;">
            {{ item.icon }}
          </span>
          <div>
            <div style="font-size:0.76rem;color:var(--text-muted);margin-bottom:2px;">
              {{ item.label }}
            </div>
            <div style="font-size:0.87rem;color:var(--text-secondary);">
              {{ item.val }}
            </div>
          </div>
        </div>
      </div>
    </fo-container>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0. \uC0AC\uC774\uC988 ================================================= -->
  <div ref="sizeSecRef" style="padding-top:40px;">
    <div style="font-size:1rem;font-weight:800;color:var(--text-primary);margin-bottom:20px;padding-bottom:12px;border-bottom:1.5px solid var(--border);">
      \uC0AC\uC774\uC988
    </div>
    <fo-container card-style="padding:28px;">
      <div style="font-size:0.9rem;font-weight:700;color:var(--text-primary);margin-bottom:16px;">
        \u{1F4CF} \uC0AC\uC774\uC988 \uAC00\uC774\uB4DC
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =========================================== -->
      <fo-grid bare :columns="columns.sizeGuideGrid" :rows="sizeGuideRows"
            :show-row-no="false" min-width="320px" />
      <p style="margin-top:12px;font-size:0.75rem;color:var(--text-muted);">
        * \uCE21\uC815 \uBC29\uBC95\uC5D0 \uB530\uB77C 1~2cm \uC624\uCC28\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
      </p>
    </fo-container>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0. \uC0C1\uD488\uD3C9 ================================================= -->
  <div ref="reviewSecRef" style="padding-top:40px;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;padding-bottom:12px;border-bottom:1.5px solid var(--border);">
      <span style="font-size:1rem;font-weight:800;color:var(--text-primary);">
        \uC0C1\uD488\uD3C9
      </span>
      <span style="font-size:0.85rem;color:var(--text-muted);font-weight:400;">
        {{ svReviewSummary.total || cfMockReviews.length }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3C9\uC810 \uC694\uC57D ============================================= -->
    <fo-container card-style="padding:24px;margin-bottom:14px;display:flex;gap:32px;align-items:center;flex-wrap:wrap;">
      <div style="text-align:center;flex-shrink:0;min-width:90px;">
        <div style="font-size:3.2rem;font-weight:900;color:var(--text-primary);line-height:1;">
          {{ cfAvgRating }}
        </div>
        <div style="font-size:1rem;margin:6px 0;" v-html="stars(cfAvgRating)">
        </div>
        <div style="font-size:0.76rem;color:var(--text-muted);">
          {{ svReviewSummary.total || cfMockReviews.length }}\uAC1C \uB9AC\uBDF0
        </div>
      </div>
      <div style="flex:1;min-width:180px;">
        <div v-for="d in cfRatingDist" :key="d.star" style="display:flex;align-items:center;gap:8px;margin-bottom:7px;">
          <span style="font-size:0.76rem;color:var(--text-muted);width:28px;text-align:right;flex-shrink:0;">
            {{ d.star }}
            <span style="color:#f59e0b;">
              \u2605
            </span>
          </span>
          <div style="flex:1;height:7px;background:var(--bg-base);border-radius:4px;overflow:hidden;">
            <div :style="{width:d.pct+'%',height:'100%',background:'#f59e0b',borderRadius:'4px'}">
            </div>
          </div>
          <span style="font-size:0.76rem;color:var(--text-muted);width:36px;flex-shrink:0;">
            {{ d.pct }}%
          </span>
        </div>
      </div>
    </fo-container>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3EC\uD1A0 \uB9AC\uBDF0 \uBAA9\uB85D ========================================== -->
    <fo-container v-if="cfReviewsWithPhoto.length" card-style="padding:20px;margin-bottom:14px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <span style="font-size:0.88rem;font-weight:700;color:var(--text-primary);">
          \uD3EC\uD1A0&\uB3D9\uC601\uC0C1 \uC0C1\uD488\uD3C9
          <span style="color:var(--blue);">
            {{ cfReviewsWithPhoto.length }}
          </span>
        </span>
        <button @click="handleBtnAction('photoModal-open')"
              style="background:none;border:1px solid var(--border);border-radius:6px;padding:5px 12px;cursor:pointer;font-size:0.78rem;color:var(--text-secondary);display:flex;align-items:center;gap:4px;">
          \uBAA8\uC544\uBCF4\uAE30
        </button>
      </div>
      <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;">
        <div v-for="r in cfReviewsWithPhoto" :key="r.id"
              @click="handleSelectAction('reviews-photoListRowSelect', r)"
              style="width:80px;height:80px;flex-shrink:0;border-radius:8px;cursor:pointer;overflow:hidden;border:1px solid var(--border);transition:opacity .15s;"
              @mouseenter="$event.currentTarget.style.opacity='.75'"
              @mouseleave="$event.currentTarget.style.opacity='1'">
          <img :src="r.photoImg" style="width:100%;height:100%;object-fit:cover;" />
        </div>
      </div>
    </fo-container>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC815\uB82C ================================================ -->
    <div style="display:flex;gap:7px;margin-bottom:14px;flex-wrap:wrap;">
      <button v-for="f in ['\uCD5C\uC2E0\uC21C','\uBCC4\uC810\uB192\uC740\uC21C','\uBCC4\uC810\uB0AE\uC740\uC21C','\uB3C4\uC6C0\uC21C']" :key="f"
            @click="handleSelectAction('reviews-filterSelect', f)"
            :style="{
            padding:'5px 14px',border:uiState.reviewFilter===f?'1.5px solid var(--blue)':'1.5px solid var(--border)',
            borderRadius:'20px',cursor:'pointer',fontSize:'0.8rem',
            background:uiState.reviewFilter===f?'var(--blue-dim)':'var(--bg-card)',
            color:uiState.reviewFilter===f?'var(--blue)':'var(--text-secondary)',
            fontWeight:uiState.reviewFilter===f?'700':'400',
            }">
        {{ f }}
      </button>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uB9AC\uBDF0 \uBAA9\uB85D ============================================= -->
    <div style="border:1px solid var(--border);border-radius:12px;overflow:hidden;">
      <div v-for="(r,i) in cfFilteredReviews" :key="r.id"
            :style="{padding:'20px',borderTop:i===0?'none':'1px solid var(--border)',background:'var(--bg-card)'}">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;flex-wrap:wrap;">
          <span style="font-size:0.85rem;font-weight:700;color:var(--text-primary);">
            {{ r.maskedName }}
          </span>
          <span style="font-size:0.82rem;" v-html="stars(r.rating)">
          </span>
          <span style="font-size:0.75rem;color:var(--text-muted);margin-left:auto;">
            {{ r.date }}
          </span>
        </div>
        <div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;">
          <span style="font-size:0.74rem;color:var(--text-muted);background:var(--bg-base);padding:2px 8px;border-radius:4px;">
            \uC0AC\uC774\uC988: {{ r.sizeInfo }}
          </span>
          <span style="font-size:0.74rem;color:var(--text-muted);background:var(--bg-base);padding:2px 8px;border-radius:4px;">
            \uC0C9\uC0C1: {{ r.colorInfo }}
          </span>
        </div>
        <div v-if="r.hasPhoto" style="margin-bottom:10px;">
          <div @click="handleSelectAction('reviews-photoListRowSelect', r)"
                style="width:72px;height:72px;border-radius:8px;cursor:pointer;overflow:hidden;border:1px solid var(--border);display:inline-block;">
            <img :src="r.photoImg" style="width:100%;height:100%;object-fit:cover;" />
          </div>
        </div>
        <p style="font-size:0.87rem;color:var(--text-secondary);line-height:1.75;margin-bottom:10px;">
          {{ r.text }}
        </p>
        <div style="font-size:0.75rem;color:var(--text-muted);">
          \uB3C4\uC6C0\uC774 \uB3FC\uC694
          <span style="font-weight:700;color:var(--text-secondary);">
            ({{ r.helpful }})
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0. Q&A ================================================= -->
  <div ref="qnaSecRef" style="padding-top:40px;padding-bottom:20px;">
    <div style="font-size:1rem;font-weight:800;color:var(--text-primary);margin-bottom:20px;padding-bottom:12px;border-bottom:1.5px solid var(--border);">
      Q&A
      <span style="font-size:0.85rem;font-weight:400;color:var(--text-muted);margin-left:8px;">
        ({{ svQnas.length }})
      </span>
    </div>
    <fo-container v-if="!svQnas.length" card-style="padding:40px;text-align:center;color:var(--text-muted);">
      \uB4F1\uB85D\uB41C Q&A\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
    </fo-container>
    <div v-else style="display:flex;flex-direction:column;gap:12px;">
      <fo-container v-for="q in svQnas" :key="q.qnaId"
            card-style="padding:20px;">
        <div style="display:flex;align-items:flex-start;gap:12px;">
          <div style="min-width:32px;height:32px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:700;color:#fff;flex-shrink:0;">
            Q
          </div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <span style="font-size:0.82rem;font-weight:600;color:var(--text-primary);">
                {{ q.memberId ? q.memberId[0]+'**' : '\uBE44\uD68C\uC6D0' }}
              </span>
              <span style="font-size:0.76rem;color:var(--text-muted);">
                {{ coUtil.cofYmdDot(q.regDate) }}
              </span>
            </div>
            <div style="font-size:0.88rem;color:var(--text-primary);line-height:1.6;white-space:pre-wrap;">
              {{ q.qnaTitle || q.qnaContent }}
            </div>
            <div v-if="q.answYn === 'Y' ? q.answContent : false" style="margin-top:12px;padding:12px;background:var(--bg-base);border-radius:8px;display:flex;gap:10px;">
            <div style="min-width:28px;height:28px;border-radius:50%;background:var(--text-muted);display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;color:#fff;flex-shrink:0;">
              A
            </div>
            <div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.6;white-space:pre-wrap;">
              {{ q.answContent }}
            </div>
          </div>
          <div v-else style="margin-top:8px;">
            <span style="font-size:0.76rem;color:var(--text-muted);background:var(--bg-base);padding:3px 8px;border-radius:4px;">
              \uB2F5\uBCC0 \uB300\uAE30\uC911
            </span>
          </div>
        </div>
      </div>
    </fo-container>
  </div>
</div>
<!-- ===== \u25A0.\u25A0.\u25A0. \uC2A4\uD0C0\uC77C ================================================= -->
<div ref="styleSecRef" style="padding-top:40px;padding-bottom:20px;">
  <div style="font-size:1rem;font-weight:800;color:var(--text-primary);margin-bottom:20px;padding-bottom:12px;border-bottom:1.5px solid var(--border);">
    \uC2A4\uD0C0\uC77C
  </div>
  <fo-container card-style="padding:28px;">
    <div style="font-size:0.9rem;font-weight:700;color:var(--text-primary);margin-bottom:16px;">
      \u{1F3A8} \uC774\uB7F0 \uCF54\uB514 \uC5B4\uB54C\uC694?
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;">
      <div v-for="s in styleItems" :key="s.label"
              style="background:var(--bg-base);border-radius:10px;padding:18px;text-align:center;">
        <div style="font-size:2rem;margin-bottom:8px;">
          {{ s.emoji }}
        </div>
        <div style="font-size:0.85rem;font-weight:700;color:var(--text-primary);margin-bottom:4px;">
          {{ s.label }}
        </div>
        <div style="font-size:0.77rem;color:var(--text-muted);">
          {{ s.desc }}
        </div>
      </div>
    </div>
  </fo-container>
</div>
</div>
<!-- ===== /page-wrap sections ======================================== -->
</template>
<!-- ===== \u25A1.\u25A1. \u2550\u2550 \uD0ED \uC139\uC158\uB4E4 \u2550\u2550 =========================================== -->
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uC774\uBBF8\uC9C0 \uD655\uB300 \uBAA8\uB2EC \u2550\u2550 ========================================= -->
<teleport to="body">
  <div v-if="uiState.zoomOpen ? prod : false" @click="handleBtnAction('zoomModal-close')" style="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;">
  <!-- ===== \u25A0.\u25A0.\u25A0. \uB2EB\uAE30 ================================================== -->
  <button @click.stop="handleBtnAction('zoomModal-close')"
        style="position:fixed;top:20px;right:20px;background:rgba(0,0,0,0.6);border:2px solid rgba(255,255,255,0.8);color:#fff;font-size:1.4rem;width:48px;height:48px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:1510;">
    \u2715
  </button>
  <!-- ===== \u25A0.\u25A0.\u25A0. \uBA54\uC778 \uD655\uB300 \uC774\uBBF8\uC9C0 =========================================== -->
  <div @click.stop style="position:relative;width:95vw;height:85vh;border-radius:12px;display:flex;align-items:center;justify-content:center;">
    <img v-if="cfMockImages[uiState.selectedImg]?.src" :src="cfMockImages[uiState.selectedImg].src" :alt="prod.prodNm"
          style="max-width:95vw;max-height:85vh;object-fit:contain;display:block;" />
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC88C/\uC6B0 \uD654\uC0B4\uD45C =========================================== -->
    <button @click.stop="handleBtnAction('gallery-prev')"
          style="position:absolute;left:12px;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;border:none;background:rgba(255,255,255,0.85);box-shadow:0 2px 8px rgba(0,0,0,0.2);cursor:pointer;display:flex;align-items:center;justify-content:center;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2.5">
        <polyline points="15 18 9 12 15 6">
        </polyline>
      </svg>
    </button>
    <button @click.stop="handleBtnAction('gallery-next')"
          style="position:absolute;right:12px;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;border:none;background:rgba(255,255,255,0.85);box-shadow:0 2px 8px rgba(0,0,0,0.2);cursor:pointer;display:flex;align-items:center;justify-content:center;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2.5">
        <polyline points="9 18 15 12 9 6">
        </polyline>
      </svg>
    </button>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0. \uD558\uB2E8 \uC378\uB124\uC77C ============================================== -->
  <div @click.stop style="position:absolute;bottom:20px;left:50%;transform:translateX(-50%);display:flex;gap:8px;z-index:2;">
    <div v-for="(img,i) in cfMockImages" :key="i" @click.stop="handleSelectAction('gallery-rowSelect', i)"
          :style="{ width:'56px', height:'56px', borderRadius:'8px', overflow:'hidden', cursor:'pointer',
          border: uiState.selectedImg===i ? '2px solid #fff' : '2px solid rgba(255,255,255,0.3)' }">
      <img :src="img.src" style="width:100%;height:100%;object-fit:cover;" />
    </div>
  </div>
</div>
</teleport>
<!-- ===== \u25A1. \u2550\u2550 \uC774\uBBF8\uC9C0 \uD655\uB300 \uBAA8\uB2EC \u2550\u2550 ========================================= -->
<!-- ===== \u25A0. \u2550\u2550 \uD3EC\uD1A0 \uC804\uCCB4 \uD31D\uC5C5 \u2550\u2550 ========================================== -->
<teleport to="body">
  <div v-if="uiState.photoPopupOpen ? prod : false" @click.self="handleBtnAction('photoModal-close')" style="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:1500;display:flex;align-items:center;justify-content:center;padding:20px;">
  <!-- ===== \u25A0.\u25A0.\u25A0. \uC88C \uD654\uC0B4\uD45C =============================================== -->
  <button v-if="cfPhotoGridPageCount > 1" @click="handleBtnAction('photoGrid-prev')"
        style="position:fixed;left:clamp(8px,3vw,36px);top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;border:none;background:rgba(255,255,255,0.92);box-shadow:0 2px 10px rgba(0,0,0,0.2);cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:1502;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2.5">
      <polyline points="15 18 9 12 15 6">
      </polyline>
    </svg>
  </button>
  <div @click.stop style="background:var(--bg-card);border-radius:16px;width:100%;max-width:720px;max-height:85vh;overflow-y:auto;padding:24px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <span style="font-size:0.95rem;font-weight:800;color:var(--text-primary);">
        \uD3EC\uD1A0&\uB3D9\uC601\uC0C1 \uC0C1\uD488\uD3C9 {{ cfReviewsWithPhoto.length }}
      </span>
      <button @click="handleBtnAction('photoModal-close')" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--text-muted);">
        \u2715
      </button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
      <div v-for="r in cfPhotoGridItems" :key="r.id"
            @click="handleSelectAction('reviews-photoGridRowSelect', r)"
            style="aspect-ratio:1;border-radius:8px;cursor:pointer;overflow:hidden;border:1px solid var(--border);transition:opacity .15s;"
            @mouseenter="$event.currentTarget.style.opacity='.75'"
            @mouseleave="$event.currentTarget.style.opacity='1'">
        <img :src="r.photoImg" style="width:100%;height:100%;object-fit:cover;" />
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD398\uC774\uC9C0\uB124\uC774\uC158 ============================================ -->
    <div v-if="cfPhotoGridPageCount > 1" style="display:flex;justify-content:center;align-items:center;gap:6px;margin-top:20px;">
      <button v-for="p in cfPhotoGridPageCount" :key="p" @click="handleSelectAction('photoGrid-rowGo', p)"
            :style="{ width:'32px', height:'32px', borderRadius:'6px', border:'1px solid var(--border)', background: uiState.photoGridPage===p ? 'var(--text-primary)' : 'var(--bg-card)', color: uiState.photoGridPage===p ? '#fff' : 'var(--text-secondary)', cursor:'pointer', fontSize:'0.85rem', fontWeight: uiState.photoGridPage===p ? 700 : 400 }">
        {{ p }}
      </button>
    </div>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0. \uC6B0 \uD654\uC0B4\uD45C =============================================== -->
  <button v-if="cfPhotoGridPageCount > 1" @click="handleBtnAction('photoGrid-next')"
        style="position:fixed;right:clamp(8px,3vw,36px);top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;border:none;background:rgba(255,255,255,0.92);box-shadow:0 2px 10px rgba(0,0,0,0.2);cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:1502;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2.5">
      <polyline points="9 18 15 12 9 6">
      </polyline>
    </svg>
  </button>
</div>
</teleport>
<!-- ===== \u25A1. \u2550\u2550 \uD3EC\uD1A0 \uC804\uCCB4 \uD31D\uC5C5 \u2550\u2550 ========================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uD3EC\uD1A0 \uB9AC\uBDF0 \uAC1C\uBCC4 \uD31D\uC5C5 \u2550\u2550 ======================================= -->
<teleport to="body">
  <div v-if="uiState.selectedReview ? prod : false" @click.self="handleBtnAction('photoDetail-close')" style="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:1501;display:flex;align-items:center;justify-content:center;padding:20px;">
  <!-- ===== \u25A0.\u25A0.\u25A0. \uC88C \uD654\uC0B4\uD45C =============================================== -->
  <button @click="handleBtnAction('photoDetail-prev')"
        style="position:fixed;left:clamp(8px,3vw,36px);top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;border:none;background:rgba(255,255,255,0.92);box-shadow:0 2px 10px rgba(0,0,0,0.2);cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:1502;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2.5">
      <polyline points="15 18 9 12 15 6">
      </polyline>
    </svg>
  </button>
  <!-- ===== \u25A0.\u25A0.\u25A0. \uBCF8\uBB38 ================================================== -->
  <div style="background:var(--bg-card);border-radius:16px;width:100%;max-width:640px;max-height:92vh;overflow-y:auto;padding:24px;position:relative;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <span style="font-size:0.88rem;font-weight:700;color:var(--text-primary);">
        \uD3EC\uD1A0&\uB3D9\uC601\uC0C1 \uC0C1\uD488\uD3C9
        <span style="font-size:0.75rem;color:var(--text-muted);font-weight:400;margin-left:6px;">
          {{ cfPhotoNavIdx + 1 }} / {{ cfReviewsWithPhoto.length }}
        </span>
      </span>
      <button @click="handleBtnAction('photoDetail-close')"
            style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--text-muted);">
        \u2715
      </button>
    </div>
    <div style="border-radius:12px;overflow:hidden;border:1px solid var(--border);aspect-ratio:1/1;margin-bottom:20px;background:var(--bg-base);">
      <img :src="uiState.selectedReview.photoImg" style="width:100%;height:100%;object-fit:contain;" />
    </div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
      <span style="font-size:0.88rem;font-weight:700;color:var(--text-primary);">
        {{ uiState.selectedReview.maskedName }}
      </span>
      <span style="font-size:0.85rem;" v-html="stars(uiState.selectedReview.rating)">
      </span>
      <span style="font-size:0.75rem;color:var(--text-muted);margin-left:auto;">
        {{ uiState.selectedReview.date }}
      </span>
    </div>
    <div style="display:flex;gap:6px;margin-bottom:14px;">
      <span style="font-size:0.74rem;color:var(--text-muted);background:var(--bg-base);padding:2px 8px;border-radius:4px;">
        \uC0AC\uC774\uC988: {{ uiState.selectedReview.sizeInfo }}
      </span>
      <span style="font-size:0.74rem;color:var(--text-muted);background:var(--bg-base);padding:2px 8px;border-radius:4px;">
        \uC0C9\uC0C1: {{ uiState.selectedReview.colorInfo }}
      </span>
    </div>
    <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.8;margin-bottom:16px;">
      {{ uiState.selectedReview.text }}
    </p>
    <div style="font-size:0.78rem;color:var(--text-muted);">
      \uB3C4\uC6C0\uC774 \uB3FC\uC694
      <span style="font-weight:700;color:var(--text-secondary);">
        ({{ uiState.selectedReview.helpful }})
      </span>
    </div>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0. \uC6B0 \uD654\uC0B4\uD45C =============================================== -->
  <button @click="handleBtnAction('photoDetail-next')"
        style="position:fixed;right:clamp(8px,3vw,36px);top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;border:none;background:rgba(255,255,255,0.92);box-shadow:0 2px 10px rgba(0,0,0,0.2);cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:1502;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2.5">
      <polyline points="9 18 15 12 9 6">
      </polyline>
    </svg>
  </button>
</div>
</teleport>
<!-- ===== \u25A1. \u2550\u2550 \uD3EC\uD1A0 \uB9AC\uBDF0 \uAC1C\uBCC4 \uD31D\uC5C5 \u2550\u2550 ======================================= -->
<!-- ===== \u25A0. \u2550\u2550 \uC0AC\uC774\uC988 \uAC00\uC774\uB4DC \uBAA8\uB2EC \u2550\u2550 ======================================== -->
<fo-modal :show="uiState.showSizeGuide" title="\u{1F4CF} \uC0AC\uC774\uC988 \uAC00\uC774\uB4DC" width="480px" modal-name="size-guide" :on-callback="fnCallbackModal">
  <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
  <fo-grid bare :columns="sizeGuideColsShort" :rows="sizeGuideRows" :show-row-no="false" />
  <p style="margin-top:14px;font-size:0.75rem;color:var(--text-muted);">
    * \uCE21\uC815 \uBC29\uBC95\uC5D0 \uB530\uB77C 1~2cm \uC624\uCC28\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
  </p>
  <button class="btn btn_confirm" @click="handleBtnAction('sizeGuideModal-close')" style="width:100%;margin-top:16px;padding:10px;">
    \uD655\uC778
  </button>
</fo-modal>
<!-- ===== \u25A1.\u25A1. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
<!-- ===== \u25A1. \u2550\u2550 \uC0AC\uC774\uC988 \uAC00\uC774\uB4DC \uBAA8\uB2EC \u2550\u2550 ======================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uACE0\uC815 \uD558\uB2E8 \uBC14 \u2550\u2550 =========================================== -->
<div v-if="prod ? uiState.showBottomBar : false" style="position:fixed;bottom:0;left:0;right:0;z-index:100;padding:10px 24px;display:flex;justify-content:center;align-items:center;background:linear-gradient(to top, var(--bg-card) 0%, rgba(245,248,255,0.98) 100%);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-top:1px solid var(--border);box-shadow:0 -4px 18px rgba(80,100,160,0.08);">
<div style="display:flex;align-items:center;gap:10px;max-width:760px;width:100%;">
  <div style="flex:1;min-width:0;overflow:hidden;">
    <div style="font-size:0.8rem;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
      {{ prod.prodNm }}
    </div>
    <div style="font-size:1.05rem;font-weight:900;color:var(--blue);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
      {{ cfDisplayPrice }}
    </div>
  </div>
  <div style="display:flex;gap:4px;flex-shrink:0;">
    <button class="btn btn_cart" style="padding:10px 16px;font-size:0.88rem;white-space:nowrap;" @click="handleBtnAction('quickBuy-openCart')">
      \uB2F4\uAE30
    </button>
    <button class="btn btn_buy"    style="padding:10px 16px;font-size:0.88rem;white-space:nowrap;" @click="handleBtnAction('quickBuy-openBuy')">
      \uAD6C\uB9E4\uD558\uAE30
    </button>
  </div>
</div>
</div>
<!-- ===== \u25A1. \u2550\u2550 \uACE0\uC815 \uD558\uB2E8 \uBC14 \u2550\u2550 =========================================== -->
<!-- ===== \u25A0. \u2550\u2550 \uBC14\uB85C\uAD6C\uB9E4 \uB4DC\uB85C\uC5B4 (\uC6B0\uCE21) \u2550\u2550 ===================================== -->
<template v-if="uiState.quickBuyOpen ? prod : false">
<!-- ===== \u25A0.\u25A0. \uB524 \uC624\uBC84\uB808\uC774 ================================================ -->
<div @click="handleBtnAction('quickBuy-close')"
      style="position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:150;transition:opacity .25s;">
</div>
<!-- ===== \u25A0.\u25A0. \uB4DC\uB85C\uC5B4 \uD328\uB110 ================================================ -->
<div style="position:fixed;top:0;right:0;bottom:0;width:360px;max-width:92vw;z-index:151;background:var(--bg-card);box-shadow:-8px 0 32px rgba(0,0,0,0.14);display:flex;flex-direction:column;overflow:hidden;">
  <!-- ===== \u25A0.\u25A0.\u25A0. \uD5E4\uB354 ================================================== -->
  <div style="display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid var(--border);flex-shrink:0;">
    <span style="font-size:0.9rem;font-weight:800;color:var(--text-primary);">
      {{ uiState.drawerMode==='cart' ? '\u{1F6D2} \uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30' : '\u26A1 \uBC14\uB85C\uAD6C\uB9E4' }}
    </span>
    <button @click="handleBtnAction('quickBuy-close')" style="background:none;border:none;cursor:pointer;font-size:1.3rem;color:var(--text-muted);line-height:1;padding:0;">
      \u2715
    </button>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0. \uC2A4\uD06C\uB864 \uC601\uC5ED ============================================== -->
  <div style="flex:1;overflow-y:auto;padding:20px;">
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0C9\uC0C1 ================================================ -->
    <div style="margin-bottom:20px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <span style="font-size:0.82rem;font-weight:600;color:var(--text-secondary);">
          {{ prod.opt1Nm || '\uC0C9\uC0C1' }}
          <span style="color:var(--blue);margin-left:2px;">
            *
          </span>
        </span>
        <span v-if="uiState.selectedColor" style="font-size:0.8rem;font-weight:600;color:var(--text-primary);">
          {{ uiState.selectedColor.name }}
        </span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <div v-for="c in prod.opt1s" :key="c.name"
              style="position:relative;display:flex;flex-direction:column;align-items:center;">
          <button @click="handleSelectAction('options-colorSelect', c)" :title="c.name" :style="{ width:'34px',height:'34px',borderRadius:'50%',position:'relative', cursor: colorStatus(c)==='ok' ? 'pointer' : 'not-allowed', background:c.hex || '#e5e7eb', border: uiState.selectedColor?.name===c.name ? '3px solid #fff' : '1px solid rgba(0,0,0,0.18)', boxShadow: uiState.selectedColor?.name===c.name ? '0 0 0 2px var(--blue), 0 2px 8px rgba(22,119,255,0.35)' : '0 1px 2px rgba(0,0,0,0.08)', boxSizing:'border-box',transition:'all .15s', opacity: colorStatus(c)!=='ok' ? '0.4' : '1', }">
          <svg v-if="uiState.selectedColor?.name===c.name" width="16" height="16" viewBox="0 0 24 24" fill="none" :stroke="(c.hex ? /^#(f|e|d)/i.test(c.hex) : false) ? '#222' : '#fff'" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;">
          <polyline points="20 6 9 17 4 12">
          </polyline>
        </svg>
      </button>
      <svg v-if="colorStatus(c)!=='ok'" style="position:absolute;top:4px;left:4px;width:34px;height:34px;pointer-events:none;" viewBox="0 0 34 34">
        <line x1="5" y1="5" x2="29" y2="29" stroke="#ef4444" stroke-width="2" />
      </svg>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC635\uC158 \uAC00\uACA9 delta ================================= -->
      <span v-if="c.priceDelta" style="font-size:0.58rem;font-weight:700;color:var(--blue);white-space:nowrap;line-height:1;">
        +{{ c.priceDelta.toLocaleString('ko-KR') }}
      </span>
    </div>
  </div>
  <div v-if="uiState.colorError" style="margin-top:6px;font-size:0.78rem;color:#ef4444;">
    {{ uiState.colorError }}
  </div>
</div>
<!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0AC\uC774\uC988 (FREE\uBA74 \uC228\uAE40) ==================================== -->
<div v-if="prod.opt2s?.length ? !(prod.opt2s.length===1 ? prod.opt2s[0]==='FREE' : false) : false" style="margin-bottom:20px;">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
  <div style="display:flex;align-items:center;gap:6px;">
    <span :style="{ fontSize:'0.82rem', fontWeight:'600', color: uiState.sizeError ? '#ef4444' : 'var(--text-secondary)' }">
      {{ prod.opt2Nm || '\uC0AC\uC774\uC988' }}
      <span style="margin-left:2px;">
        *
      </span>
    </span>
    <span v-if="uiState.sizeError" style="font-size:0.75rem;color:#ef4444;font-weight:500;">
      \uD544\uC218 \uC120\uD0DD
    </span>
  </div>
  <button @click="handleBtnAction('sizeGuideModal-open')" style="background:none;border:none;cursor:pointer;color:var(--blue);font-size:0.75rem;font-weight:600;padding:0;text-decoration:underline;">
    \uC0AC\uC774\uC988 \uC548\uB0B4
  </button>
</div>
<div :style="{
            display:'flex', flexWrap:'wrap', gap:'6px', padding:'8px',
            border: uiState.sizeError ? '1px solid #ef4444' : '1px solid transparent',
            borderRadius:'6px', transition:'border-color .2s',
            }">
  <button v-for="s in prod.opt2s" :key="s" @click="handleSelectAction('options-sizeSelect', s)"
              :style="{
              padding:'7px 16px',borderRadius:'6px',fontSize:'0.82rem',position:'relative',
              cursor: sizeStatus(s)==='ok' ? 'pointer' : 'not-allowed',
              border: uiState.selectedSize===s ? '2px solid var(--blue)' : sizeStatus(s)==='ok' ? '2px solid var(--border)' : '2px solid #e0e0e0',
              background: uiState.selectedSize===s ? 'var(--blue-dim)' : sizeStatus(s)==='ok' ? 'var(--bg-base)' : '#f5f5f5',
              color: uiState.selectedSize===s ? 'var(--blue)' : sizeStatus(s)==='ok' ? 'var(--text-secondary)' : '#bbb',
              fontWeight: uiState.selectedSize===s ? '700' : '500',
              textDecoration: sizeStatus(s)!=='ok' ? 'line-through' : 'none',
              opacity: sizeStatus(s)!=='ok' ? '0.7' : '1',
              }">
    {{ s }}
    <span v-if="getSizeDelta(s)" style="font-size:0.62rem;font-weight:700;color:var(--blue);margin-left:2px;">
      (+{{ getSizeDelta(s).toLocaleString('ko-KR') }})
    </span>
    <span v-if="sizeStatus(s)==='soldout'" style="position:absolute;top:-7px;right:-4px;font-size:0.55rem;background:#ef4444;color:#fff;padding:1px 4px;border-radius:3px;font-weight:700;line-height:1.2;">
      \uD488\uC808
    </span>
    <span v-else-if="sizeStatus(s)==='stop'" style="position:absolute;top:-7px;right:-4px;font-size:0.55rem;background:#9ca3af;color:#fff;padding:1px 4px;border-radius:3px;font-weight:700;line-height:1.2;">
      \uC911\uC9C0
    </span>
  </button>
</div>
</div>
<!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC218\uB7C9 ================================================ -->
<div style="margin-bottom:24px;">
  <span style="font-size:0.82rem;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:10px;">
    \uC218\uB7C9
  </span>
  <div style="display:flex;align-items:center;border:1.5px solid var(--border);border-radius:8px;overflow:hidden;width:fit-content;">
    <button @click="handleBtnAction('qty-dec')" style="width:36px;height:36px;border:none;background:var(--bg-base);cursor:pointer;font-size:1.1rem;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;">
      \u2212
    </button>
    <span style="min-width:44px;text-align:center;font-size:0.9rem;font-weight:700;color:var(--text-primary);">
      {{ uiState.qty }}
    </span>
    <button @click="handleBtnAction('qty-inc')" style="width:36px;height:36px;border:none;background:var(--bg-base);cursor:pointer;font-size:1.1rem;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;">
      +
    </button>
  </div>
</div>
<!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC120\uD0DD \uC694\uC57D ============================================= -->
<div v-if="uiState.selectedColor||uiState.selectedSize"
          style="background:var(--bg-base);border-radius:8px;padding:12px 14px;font-size:0.82rem;color:var(--text-secondary);line-height:1.9;border:1px solid var(--border);">
  <div v-if="uiState.selectedColor">
    <span style="font-weight:600;color:var(--text-primary);">
      \uC0C9\uC0C1:
    </span>
    {{ uiState.selectedColor.name }}
  </div>
  <div v-if="uiState.selectedSize">
    <span style="font-weight:600;color:var(--text-primary);">
      \uC0AC\uC774\uC988:
    </span>
    {{ uiState.selectedSize }}
  </div>
  <div>
    <span style="font-weight:600;color:var(--text-primary);">
      \uC218\uB7C9:
    </span>
    {{ uiState.qty }}\uAC1C
  </div>
</div>
</div>
<!-- ===== \u25A0.\u25A0.\u25A0. \uD558\uB2E8: \uCD1D\uC561 + \uBC84\uD2BC ========================================= -->
<div style="flex-shrink:0;padding:16px 20px;border-top:1px solid var(--border);">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
    <span style="font-size:0.85rem;color:var(--text-muted);">
      \uCD1D \uC8FC\uBB38\uAE08\uC561
    </span>
    <span style="font-size:1.2rem;font-weight:900;color:var(--blue);">
      {{ cfQuickBuyTotal }}
    </span>
  </div>
  <button v-if="uiState.drawerMode==='cart'" class="btn btn_cart" style="width:100%;padding:14px;font-size:0.95rem;font-weight:700;" @click="handleBtnAction('cart-addFromDrawer')">
    \u{1F6D2} \uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30
  </button>
  <button v-else class="btn btn_buy" style="width:100%;padding:14px;font-size:0.95rem;font-weight:700;" @click="handleBtnAction('order-buyNow')">
    \u26A1 \uBC14\uB85C\uAD6C\uB9E4
  </button>
</div>
</div>
</template>
</fo-page>
<!-- ===== \u25A1.\u25A1. \uB4DC\uB85C\uC5B4 \uD328\uB110 ================================================ -->
<!-- ===== \u25A1. \u2550\u2550 \uBC14\uB85C\uAD6C\uB9E4 \uB4DC\uB85C\uC5B4 (\uC6B0\uCE21) \u2550\u2550 ===================================== -->
`};
