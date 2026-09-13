(function(){const{reactive:S,ref:eo,computed:re,onMounted:se}=Vue,{useSimulSetup:le,makeLogCols:ce,makeBaseCfgColumns:fe,makeRangeCol:U,makeRangeHandlers:me,rangeSlotTemplate:Y}=window.ZdSimulBase,I=["PENDING","PAID","PREPARING","SHIPPED","COMPLT"],T={PENDING:"\uACB0\uC81C\uB300\uAE30",PAID:"\uACB0\uC81C\uC644\uB8CC",PREPARING:"\uC900\uBE44\uC911",SHIPPED:"\uBC30\uC1A1\uC911",COMPLT:"\uC644\uB8CC"},ge=[{value:"none",label:"\uC5C6\uC74C"},{value:"random",label:"\uB79C\uB364 \uC120\uD0DD"},{value:"fixed",label:"\uC9C1\uC811 \uC9C0\uC815"}],D=[{value:"CARD",label:"\uC2E0\uC6A9\uCE74\uB4DC",color:"#2563eb"},{value:"TOSS_PAY",label:"\uD1A0\uC2A4\uD398\uC774",color:"#3b82f6"},{value:"KAKAO_PAY",label:"\uCE74\uCE74\uC624\uD398\uC774",color:"#f59e0b"},{value:"NAVER_PAY",label:"\uB124\uC774\uBC84\uD398\uC774",color:"#22c55e"},{value:"BANK",label:"\uBB34\uD1B5\uC7A5\uC785\uAE08",color:"#6366f1"},{value:"VBANK",label:"\uAC00\uC0C1\uACC4\uC88C",color:"#94a3b8"}],q=[{zipCode:"06236",addr:"\uC11C\uC6B8 \uAC15\uB0A8\uAD6C \uD14C\uD5E4\uB780\uB85C 152",addrDtl:"GS\uD0C0\uC6CC 15\uCE35"},{zipCode:"03721",addr:"\uC11C\uC6B8 \uC11C\uB300\uBB38\uAD6C \uC5F0\uC138\uB85C 50",addrDtl:"\uC5F0\uC138\uB300\uD559\uAD50 \uC815\uBB38"},{zipCode:"14068",addr:"\uACBD\uAE30 \uC548\uC591\uC2DC \uB9CC\uC548\uAD6C \uC548\uC591\uB85C 123",addrDtl:"\uC548\uC591\uC5ED \uC778\uADFC"},{zipCode:"21565",addr:"\uC778\uCC9C \uB0A8\uB3D9\uAD6C \uC815\uAC01\uB85C 29",addrDtl:"\uC778\uCC9C\uC2DC\uCCAD \uC55E"},{zipCode:"61452",addr:"\uAD11\uC8FC \uBD81\uAD6C \uC6A9\uBD09\uB85C 77",addrDtl:"\uC804\uB0A8\uB300\uD559\uAD50 \uC815\uBB38"}],xe=["\uD64D\uAE38\uB3D9","\uC774\uBBFC\uC9C0","\uBC15\uC11C\uC5F0","\uAE40\uC8FC\uD601","\uCD5C\uC724\uC544","\uC815\uB2E4\uC740","\uAC15\uBBFC\uC900","\uC870\uD604\uC6B0"],ue=[{value:"advance",label:"\uC0C1\uD0DC \uC9C4\uD589"},{value:"cancel",label:"\uAC15\uC81C \uCDE8\uC18C"},{value:"memo",label:"\uBA54\uBAA8 \uCD94\uAC00"}];window.ZdSimulOrderMng={name:"ZdSimulOrderMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(v){const o=S({itemCountMin:1,itemCountMax:4,amtMin:1e4,amtMax:3e5,payMethods:["CARD","TOSS_PAY"],createStatus:"PENDING",advanceSteps:1,randomAddr:!0,addDlivFee:!0,dlivFeeAmt:3e3,updateAction:"advance",fromStatus:"PENDING",fixedMemberId:"",fixedMemberNm:"",fixedProds:[],fixedOrderId:"",fixedPayMethod:"__weighted__",payMethodWeights:{CARD:45,TOSS_PAY:20,KAKAO_PAY:15,NAVER_PAY:10,BANK:7,VBANK:3},promoOpen:!0,couponMode:"random",fixedCouponId:"",fixedCouponNm:"",couponApplyRate:40,discntMode:"none",fixedDiscntId:"",fixedDiscntNm:"",discntApplyRate:30,saveMode:"none",saveApplyRate:20,saveDeductMin:10,saveDeductMax:50,giftApplyRate:0}),s=S({show:!1,searchValue:"",rows:[],loading:!1,pageNo:1,pageSize:10,pageSizes:[10,20,30],pageTotalCount:0,pageTotalPage:1}),x=S({show:!1,searchValue:"",rows:[],loading:!1}),l=S({show:!1,searchValue:"",rows:[],loading:!1,pageNo:1,pageSize:10,pageSizes:[10,20,30],pageTotalCount:0,pageTotalPage:1}),u=S({show:!1,searchValue:"",rows:[],loading:!1}),b=S({show:!1,searchValue:"",rows:[],loading:!1}),be=async()=>{s.show=!0,s.pageNo=1,s.searchValue="",await L()},he=async()=>{x.show=!0,x.searchValue="",await W()},ye=async()=>{l.show=!0,l.pageNo=1,l.searchValue="",await E()},ve=async()=>{u.show=!0,u.searchValue="",await Z()},Pe=async()=>{b.show=!0,b.searchValue="",await j()},L=async()=>{var e;s.loading=!0;try{const t=((e=(await boApiSvc.mbMember.getPage({pageNo:s.pageNo,pageSize:s.pageSize,memberStatusCd:"ACTIVE",...s.searchValue?{searchValue:s.searchValue,searchType:"memberId,memberNm,loginId"}:{}})).data)==null?void 0:e.data)||{};s.rows=t.pageList||[],s.pageTotalCount=t.pageTotalCount||0,s.pageTotalPage=t.pageTotalPage||1}catch{s.rows=[]}s.loading=!1},W=async()=>{var e,d,t,a;x.loading=!0;try{const f=await boApiSvc.pdProd.getPage({pageNo:1,pageSize:30,...x.searchValue?{searchValue:x.searchValue,searchType:"prodId,prodNm"}:{}});x.rows=((d=(e=f.data)==null?void 0:e.data)==null?void 0:d.pageList)||[]}catch(f){x.rows=[],v.showToast("\uC0C1\uD488 \uC870\uD68C \uC2E4\uD328: "+(((a=(t=f==null?void 0:f.response)==null?void 0:t.data)==null?void 0:a.message)||(f==null?void 0:f.message)||""),"error",0)}x.loading=!1},E=async()=>{var e;l.loading=!0;try{const t=((e=(await boApiSvc.odOrder.getPage({pageNo:l.pageNo,pageSize:l.pageSize,...l.searchValue?{searchValue:l.searchValue,searchType:"orderId"}:{}})).data)==null?void 0:e.data)||{};l.rows=t.pageList||[],l.pageTotalCount=t.pageTotalCount||0,l.pageTotalPage=t.pageTotalPage||1}catch{l.rows=[]}l.loading=!1},Z=async()=>{var e,d;u.loading=!0;try{const t=await boApiSvc.pmCoupon.getPage({pageNo:1,pageSize:30,...u.searchValue?{searchValue:u.searchValue}:{}});u.rows=((d=(e=t.data)==null?void 0:e.data)==null?void 0:d.pageList)||[]}catch{u.rows=[]}u.loading=!1},j=async()=>{var e,d;b.loading=!0;try{const t=await boApiSvc.pmDiscnt.getPage({pageNo:1,pageSize:30,...b.searchValue?{searchValue:b.searchValue}:{}});b.rows=((d=(e=t.data)==null?void 0:e.data)==null?void 0:d.pageList)||[]}catch{b.rows=[]}b.loading=!1},V=e=>{var t;o.fixedMemberId=e.memberId;const d=e.memberNm||e.loginId||e.memberId;o.fixedMemberNm=(t=window.ZdSimulBase)!=null&&t._sanitize?window.ZdSimulBase._sanitize(d):d,s.show=!1},Q=e=>{const d=e.prodOpts||[],t=[];return e.prodOpt1TypeCd&&t.push({typeNm:e.prodOpt1TypeCd,choices:d.filter(a=>a.prodOptTypeLevel===1||a.prodOptTypeLevel==="1").map(a=>({id:a.prodOptId,nm:a.prodOptNm||a.prodOptVal||""})),selectedId:""}),e.prodOpt2TypeCd&&t.push({typeNm:e.prodOpt2TypeCd,choices:d.filter(a=>a.prodOptTypeLevel===2||a.prodOptTypeLevel==="2").map(a=>({id:a.prodOptId,nm:a.prodOptNm||a.prodOptVal||""})),selectedId:""}),{prodId:e.prodId,prodNm:e.prodNm||e.prodId,prodTypeCd:e.prodTypeCd||"SINGLE",salePrice:e.salePrice||0,qty:1,optTypeNms:[e.prodOpt1TypeCd,e.prodOpt2TypeCd].filter(Boolean),optSelects:t}},$=e=>{o.fixedProds.find(t=>t.prodId===e.prodId)||o.fixedProds.push(Q(e)),x.show=!1},we=e=>{o.fixedProds.splice(e,1)},G=e=>{o.fixedOrderId=e.orderId,l.show=!1},Ce=async()=>{var e,d;try{const t=((d=(e=(await boApiSvc.mbMember.getPage({pageNo:1,pageSize:50,memberStatusCd:"ACTIVE"})).data)==null?void 0:e.data)==null?void 0:d.pageList)||[];if(!t.length)return v.showToast("\uC870\uD68C\uB41C \uD68C\uC6D0 \uC5C6\uC74C","error");const a=t[Math.floor(Math.random()*t.length)];V(a)}catch{v.showToast("\uD68C\uC6D0 \uB79C\uB364 \uC870\uD68C \uC2E4\uD328","error")}},ke=async e=>{var d,t,a,f;try{const m={pageNo:1,pageSize:100};e==="SET"?m.prodTypeCd="SET":e==="GROUP"?m.prodTypeCd="GROUP":m.prodTypeCd="SINGLE";const A=((t=(d=(await boApiSvc.pdProd.getPage(m)).data)==null?void 0:d.data)==null?void 0:t.pageList)||[];let w=A;if(e==="SINGLE_NO_OPT"?w=A.filter(h=>!h.prodOpt1TypeCd):e==="SINGLE_OPT"&&(w=A.filter(h=>!!h.prodOpt1TypeCd)),!w.length){const h=e==="SINGLE_NO_OPT"?"\uB2E8\uD488":e==="SINGLE_OPT"?"\uC635\uC158\uC0C1\uD488":e==="SET"?"\uC138\uD2B8":e==="GROUP"?"\uBB36\uC74C":"";return v.showToast(h?h+" \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.":"\uC870\uD68C\uB41C \uC0C1\uD488 \uC5C6\uC74C","error")}const k=w[Math.floor(Math.random()*w.length)];o.fixedProds.find(h=>h.prodId===k.prodId)?v.showToast("\uC774\uBBF8 \uCD94\uAC00\uB41C \uC0C1\uD488\uC785\uB2C8\uB2E4: "+(k.prodNm||k.prodId),"error"):o.fixedProds.push(Q(k))}catch(m){v.showToast("\uC0C1\uD488 \uB79C\uB364 \uC870\uD68C \uC2E4\uD328: "+(((f=(a=m==null?void 0:m.response)==null?void 0:a.data)==null?void 0:f.message)||(m==null?void 0:m.message)||""),"error",0)}},Me=async()=>{var e,d;try{const t=((d=(e=(await boApiSvc.odOrder.getPage({pageNo:1,pageSize:50})).data)==null?void 0:e.data)==null?void 0:d.pageList)||[];if(!t.length)return v.showToast("\uC870\uD68C\uB41C \uC8FC\uBB38 \uC5C6\uC74C","error");const a=t[Math.floor(Math.random()*t.length)];G(a)}catch{v.showToast("\uC8FC\uBB38 \uB79C\uB364 \uC870\uD68C \uC2E4\uD328","error")}},J=e=>{o.fixedCouponId=e.couponId,o.fixedCouponNm=e.couponNm||e.couponId,u.show=!1},X=e=>{o.fixedDiscntId=e.discntId,o.fixedDiscntNm=e.discntNm||e.discntId,b.show=!1},Se=()=>{if(o.fixedPayMethod&&o.fixedPayMethod!=="__weighted__")return o.fixedPayMethod;const e=o.payMethodWeights,d=Object.values(e).reduce((a,f)=>a+Number(f),0)||1;let t=Math.random()*d;for(const a of D)if(t-=Number(e[a.value]||0),t<=0)return a.value;return D[0].value},Ie=le({domain:"\uC8FC\uBB38",uiNm:"\uC8FC\uBB38 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uC8FC\uBB38",showToast:v.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:e,simulYn:d,randInt:t,pick:a,previewOnly:f})=>{var m,A,w,k,F,h,ee,oe,te,de,ae,ie,ne,pe;if(e==="create"){let c=[];if(o.fixedProds&&o.fixedProds.length)c=o.fixedProds.map(n=>({prodId:n.prodId,prodNm:n.prodNm,salePrice:n.salePrice||o.amtMin,_fixedQty:n.qty,selectedOpts:(n.optSelects||[]).filter(p=>p.selectedId).map(p=>({prodOptTypeId:p.typeId,prodOptTypeNm:p.typeNm,prodOptId:p.selectedId,prodOptNm:(p.choices.find(r=>r.id===p.selectedId)||{}).nm||""}))}));else{const n=t(o.itemCountMin,o.itemCountMax),r=await(window._zdRealBoApi||window.boApi).post("/bo/zd/simul/order/rand-prod",{count:Math.max(n,5)},coUtil.cofApiHdr("\uC8FC\uBB38\uC2DC\uBBAC","\uC0C1\uD488\uC870\uD68C"));c=((A=(m=r==null?void 0:r.data)==null?void 0:m.data)==null?void 0:A.prods)||[]}let P;if(o.fixedMemberId)P={memberId:o.fixedMemberId,memberNm:o.fixedMemberNm};else{const n=((k=(w=(await boApiSvc.mbMember.getPage({pageNo:1,pageSize:50,memberStatusCd:"ACTIVE"})).data)==null?void 0:w.data)==null?void 0:k.pageList)||[];if(!n.length)return{ok:!1,reason:"ACTIVE \uD68C\uC6D0 \uC5C6\uC74C"};P=a(n)}if(!c.length)return{ok:!1,reason:"\uD310\uB9E4\uC911 \uC0C1\uD488 \uC5C6\uC74C"};const y=[];let g=0;if(!!(o.fixedProds&&o.fixedProds.length))for(const n of c){const p=n._fixedQty||1,r=n.salePrice||o.amtMin,z={prodId:n.prodId,qty:p,unitPrice:Math.round(r),rowAmt:Math.round(r)*p};n.selectedOpts&&n.selectedOpts.length&&(z.selectedOpts=n.selectedOpts),y.push(z),g+=Math.round(r)*p}else{const n=t(o.itemCountMin,o.itemCountMax);for(let p=0;p<n;p++){const r=a(c),z=t(1,3),H=Math.min(Math.max(o.amtMin/n,r.salePrice||t(o.amtMin,o.amtMax)),o.amtMax/n);y.push({prodId:r.prodId,qty:z,unitPrice:Math.round(H),rowAmt:Math.round(H)*z}),g+=Math.round(H)*z}}const N=o.addDlivFee&&g<5e4?o.dlivFeeAmt:0,M=Se(),O=o.randomAddr?a(q):q[0],i={couponId:null,couponNm:null,couponDiscntAmt:0,discntId:null,discntNm:null,discntAmt:0,saveDeductAmt:0,giftProdId:null};if(o.promoOpen){if(o.couponMode==="fixed"&&o.fixedCouponId)i.couponId=o.fixedCouponId,i.couponNm=o.fixedCouponNm;else if(o.couponMode==="random"&&Math.random()*100<o.couponApplyRate)try{const p=((h=(F=(await boApiSvc.pmCoupon.getPage({pageNo:1,pageSize:30})).data)==null?void 0:F.data)==null?void 0:h.pageList)||[];if(p.length){const r=a(p);i.couponId=r.couponId,i.couponNm=r.couponNm||r.couponId}}catch{}if(i.couponId&&(i.couponDiscntAmt=Math.round(g*(t(10,20)/100)/100)*100),o.discntMode==="fixed"&&o.fixedDiscntId)i.discntId=o.fixedDiscntId,i.discntNm=o.fixedDiscntNm;else if(o.discntMode==="random"&&Math.random()*100<o.discntApplyRate)try{const p=((oe=(ee=(await boApiSvc.pmDiscnt.getPage({pageNo:1,pageSize:30})).data)==null?void 0:ee.data)==null?void 0:oe.pageList)||[];if(p.length){const r=a(p);i.discntId=r.discntId,i.discntNm=r.discntNm||r.discntId}}catch{}if(i.discntId&&(i.discntAmt=Math.round(g*(t(5,15)/100)/100)*100),o.saveMode!=="none"&&Math.random()*100<o.saveApplyRate){const n=t(o.saveDeductMin,o.saveDeductMax)/100;i.saveDeductAmt=Math.round(g*n/100)*100}if(o.giftApplyRate>0&&Math.random()*100<o.giftApplyRate)try{const p=((de=(te=(await boApiSvc.pdProd.getPage({pageNo:1,pageSize:20,prodTypeCd:"GIFT"})).data)==null?void 0:te.data)==null?void 0:de.pageList)||[];p.length&&(i.giftProdId=a(p).prodId)}catch{}}const C=i.couponDiscntAmt+i.discntAmt+i.saveDeductAmt,_=Math.max(g+N-C,0),R={memberId:P.memberId,memberNm:P.memberNm,orderStatusCd:o.createStatus,payMethodCd:M,orderAmt:g,dlivFee:N,discntAmt:C,totalPayAmt:_,receiverNm:a(xe),receiverPhone:"010-"+String(t(1e3,9999))+"-"+String(t(1e3,9999)),zipCode:O.zipCode,dlivAddr:O.addr,dlivAddrDtl:O.addrDtl,orderItems:y,promos:i,simulYn:d||"Y"};R["_preview_[orderItems]("+y.length+"\uAC1C)"]=y.map(n=>({prodId:n.prodId,qty:n.qty,unitPrice:n.unitPrice,rowAmt:n.rowAmt})),(i.couponId||i.discntId||i.saveDeductAmt||i.giftProdId)&&(R["_preview_[promos]"]={\uCFE0\uD3F0:i.couponNm||"\uC5C6\uC74C",\uCFE0\uD3F0\uD560\uC778:i.couponDiscntAmt?i.couponDiscntAmt.toLocaleString("ko-KR")+"\uC6D0":"-",\uD560\uC778:i.discntNm||"\uC5C6\uC74C",\uD560\uC778\uAE08\uC561:i.discntAmt?i.discntAmt.toLocaleString("ko-KR")+"\uC6D0":"-",\uC801\uB9BD\uAE08\uCC28\uAC10:i.saveDeductAmt?i.saveDeductAmt.toLocaleString("ko-KR")+"\uC6D0":"-",\uC0AC\uC740\uD488:i.giftProdId||"\uC5C6\uC74C",\uCD1D\uD560\uC778:C.toLocaleString("ko-KR")+"\uC6D0",\uCD5C\uC885\uACB0\uC81C:_.toLocaleString("ko-KR")+"\uC6D0"});const B=await boApi.post("/bo/zd/simul/order/create",R,coUtil.cofApiHdr("\uC8FC\uBB38\uC2DC\uBBAC","\uC0DD\uC131")),Xe=((ie=(ae=B==null?void 0:B.data)==null?void 0:ae.data)==null?void 0:ie.orderId)||"-";return{ok:!0,desc:P.memberNm+" | "+cnt+"\uAC1C \uC0C1\uD488 | "+_.toLocaleString("ko-KR")+"\uC6D0"+(C>0?" (\uD560\uC778 "+C.toLocaleString("ko-KR")+"\uC6D0)":""),meta:{id:Xe,payMethod:M,totalAmt:g,dlivFee:N,totalDiscnt:C,finalPayAmt:_,memberId:P.memberId,params:R}}}else{let c;if(o.fixedOrderId)c={orderId:o.fixedOrderId,orderStatusCd:o.fromStatus||"PENDING"};else{const M=o.updateAction==="cancel"?[]:["COMPLT"],O={pageNo:1,pageSize:50};o.fromStatus&&(O.orderStatusCd=o.fromStatus);const i=((pe=(ne=(await boApiSvc.odOrder.getPage(O)).data)==null?void 0:ne.data)==null?void 0:pe.pageList)||[];if(!i.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uC8FC\uBB38 \uC5C6\uC74C"};if(c=a(i.filter(C=>!M.includes(C.orderStatusCd))),!c)return{ok:!1,reason:"\uC870\uAC74\uC5D0 \uB9DE\uB294 \uC8FC\uBB38 \uC5C6\uC74C"}}const P=o.updateAction;let y={},g="";if(P==="advance"){const N=I.indexOf(c.orderStatusCd),M=I[Math.min(N+(o.advanceSteps||1),I.length-1)];y.orderStatusCd=M,g=(T[c.orderStatusCd]||c.orderStatusCd)+" \u2192 "+T[M]}else P==="cancel"?(y.orderStatusCd="CANCEL",g="\uAC15\uC81C \uCDE8\uC18C"):(y.orderMemo="[\uC2DC\uBBAC] "+new Date().toLocaleTimeString("ko-KR"),g="\uBA54\uBAA8 \uCD94\uAC00");const K={orderId:c.orderId,...y};return await boApi.post("/bo/zd/simul/order/update",K,coUtil.cofApiHdr("\uC8FC\uBB38\uC2DC\uBBAC","\uC218\uC815")),{ok:!0,desc:c.orderId+" "+g,meta:{id:c.orderId,params:K}}}}}),{cfg:Ae,state:Ne,logs:Oe,logPager:ze,logSearch:Te,cfIsRunning:_e,cfSuccessRate:Re,onStart:De,onStop:Le,onRunOnce:Ee,onPreview:Ve,onPreviewCreate:Ge,onClearLog:Fe,onSetLogPage:Ke,onSearchLog:Be}=Ie,He=re(()=>Object.values(o.payMethodWeights).reduce((e,d)=>e+Number(d),0)||1),Ue=ce(),Ye=fe(),qe=[U("itemCountMin","itemCountMax","\uC544\uC774\uD15C \uC218 \uBC94\uC704",1,20,"\uAC1C"),U("amtMin","amtMax","\uC8FC\uBB38 \uAE08\uC561 \uBC94\uC704",1e4,3e5,"\uC6D0"),{key:"createStatus",label:"\uCD08\uAE30 \uC0C1\uD0DC",type:"select",options:I.map(e=>({value:e,label:T[e]}))},{key:"addDlivFee",label:"\uBC30\uC1A1\uBE44 \uC801\uC6A9",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]},{key:"dlivFeeAmt",label:"\uBC30\uC1A1\uBE44",type:"number",hint:"\uC6D0",visible:e=>!!e.addDlivFee},{key:"randomAddr",label:"\uC8FC\uC18C \uB79C\uB364",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]}],We=[{key:"updateAction",label:"\uC218\uC815 \uC561\uC158",type:"select",options:ue},{key:"fromStatus",label:"\uB300\uC0C1 \uC0C1\uD0DC",type:"select",options:I.map(e=>({value:e,label:T[e]})),visible:e=>e.updateAction==="advance"},{key:"advanceSteps",label:"\uC9C4\uD589 \uB2E8\uACC4",type:"select",options:[{value:1,label:"1\uB2E8\uACC4"},{value:2,label:"2\uB2E8\uACC4"},{value:3,label:"3\uB2E8\uACC4"}],visible:e=>e.updateAction==="advance"}],Ze=me(o,[{minKey:"itemCountMin",maxKey:"itemCountMax"},{minKey:"amtMin",maxKey:"amtMax"}]),je=e=>{const d=e.prodTypeCd,t=e.optTypeNms&&e.optTypeNms.length>0;return d==="SET"?"display:inline-block;padding:1px 5px;border-radius:3px;font-size:10px;font-weight:600;white-space:nowrap;background:#fdf4ff;color:#9333ea;border:1px solid #e9d5ff;":d==="GROUP"?"display:inline-block;padding:1px 5px;border-radius:3px;font-size:10px;font-weight:600;white-space:nowrap;background:#fffbeb;color:#b45309;border:1px solid #fde68a;":d==="GIFT"?"display:inline-block;padding:1px 5px;border-radius:3px;font-size:10px;font-weight:600;white-space:nowrap;background:#fdf2f8;color:#ec4899;border:1px solid #fbcfe8;":t?"display:inline-block;padding:1px 5px;border-radius:3px;font-size:10px;font-weight:600;white-space:nowrap;background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;":"display:inline-block;padding:1px 5px;border-radius:3px;font-size:10px;font-weight:600;white-space:nowrap;background:#f0f9ff;color:#0369a1;border:1px solid #bae6fd;"},Qe=e=>{const d=e.prodTypeCd,t=e.optTypeNms&&e.optTypeNms.length>0;return d==="SET"?"\uC138\uD2B8":d==="GROUP"?"\uBB36\uC74C":d==="GIFT"?"\uC0AC\uC740\uD488":t?"\uC635\uC158":"\uB2E8\uD488"},$e=e=>!!(e.optTypeNms&&e.optTypeNms.length),Je=(e,d,t)=>{if(e==="cmPopup-member-pick"){s.show=!1,t!=null&&V(t);return}if(e==="cmPopup-prod-pick"){x.show=!1,t!=null&&$(t);return}if(e==="cmPopup-coupon-pick"){u.show=!1,t!=null&&J(t);return}if(e==="cmPopup-discnt-pick"){b.show=!1,t!=null&&X(t);return}if(e==="cmPopup-order-pick"){l.show=!1,t!=null&&G(t);return}};return se(()=>{window.ZdSimulBase.fnSeedFixedMember(o)}),{fnCmPopupCallback:Je,cfg:Ae,domCfg:o,state:Ne,logs:Oe,logPager:ze,cfIsRunning:_e,cfSuccessRate:Re,cfPayMethodTotal:He,logCols:Ue,baseCfgColumns:Ye,createCfgColumns:qe,updateCfgColumns:We,onStart:De,onStop:Le,onRunOnce:Ee,onPreview:Ve,onPreviewCreate:Ge,onClearLog:Fe,onSetLogPage:Ke,onSearchLog:Be,logSearch:Te,...Ze,STATUS_FLOW:I,STATUS_LABELS:T,PAY_METHODS:D,PROMO_MODES:ge,memberPicker:s,prodPicker:x,orderPicker:l,couponPicker:u,discntPicker:b,onOpenMemberPicker:be,onOpenProdPicker:he,onOpenOrderPicker:ye,onOpenCouponPicker:ve,onOpenDiscntPicker:Pe,onPickRandomMember:Ce,onPickRandomProd:ke,onPickRandomOrder:Me,onSelectMember:V,onSelectProd:$,onSelectOrder:G,onSelectCoupon:J,onSelectDiscnt:X,onRemoveFixedProd:we,_loadMemberPicker:L,_loadProdPicker:W,_loadOrderPicker:E,_loadCouponPicker:Z,_loadDiscntPicker:j,onMemberPickerPage:async e=>{s.pageNo=e,await L()},onOrderPickerPage:async e=>{l.pageNo=e,await E()},fnProdBadgeStyle:je,fnProdBadgeLabel:Qe,fnProdHasOpt:$e}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F6D2} \uC8FC\uBB38 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <!-- \uC2E4\uD589 \uC81C\uC5B4 -->
  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#2563eb,#60a5fa)"
    accent-active="background:#eff6ff;border:1.5px solid #2563eb;color:#1d4ed8;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uC2DC\uBBAC \uB300\uC0C1 \uACE0\uC815 \uC9C0\uC815 -->
  <div class="card" style="padding:12px 16px;margin-top:12px;">
    <div class="list-title">\u{1F3AF} \uC2DC\uBBAC \uB300\uC0C1 \uC9C0\uC815</div>
    <div style="display:grid;grid-template-columns:1fr 2fr;gap:10px;margin-top:10px;">
      <!-- \uD68C\uC6D0/\uC8FC\uBB38 \uC9C0\uC815 (\uC67C\uCABD \uC5F4) -->
      <div>
        <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:5px;">\u{1F464} \uC8FC\uBB38 \uD68C\uC6D0 \uC9C0\uC815</div>
        <div style="display:flex;gap:5px;align-items:center;">
          <input type="text" :value="domCfg.fixedMemberNm || domCfg.fixedMemberId || ''" readonly
            style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;" />
          <button v-if="domCfg.fixedMemberId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
            @click="domCfg.fixedMemberId='';domCfg.fixedMemberNm=''">\u2715</button>
          <button class="btn" style="height:28px;padding:0 8px;font-size:11px;background:#f0f9ff;color:#0369a1;border:1px solid #bae6fd;"
            @click="onPickRandomMember">\uB79C\uB364</button>
          <button class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenMemberPicker">\uC120\uD0DD</button>
        </div>
        <div v-if="domCfg.fixedMemberId" style="font-size:10px;color:#6366f1;margin-top:3px;font-family:monospace;">{{ domCfg.fixedMemberId }}</div>
        <div v-else style="font-size:10px;color:#94a3b8;margin-top:3px;">\uBBF8\uC9C0\uC815 \uC2DC ACTIVE \uD68C\uC6D0 \uB79C\uB364</div>
        <!-- \uC218\uC815 \uBAA8\uB4DC: \uB300\uC0C1 \uC8FC\uBB38 \uC9C0\uC815 -->
        <div v-if="cfg.mode==='update'" style="margin-top:10px;">
          <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:5px;">\u{1F6D2} \uC218\uC815 \uB300\uC0C1 \uC8FC\uBB38 \uC9C0\uC815</div>
          <div style="display:flex;gap:5px;align-items:center;">
            <input type="text" :value="domCfg.fixedOrderId || ''" readonly
              style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;font-family:monospace;" />
            <button v-if="domCfg.fixedOrderId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
              @click="domCfg.fixedOrderId=''">\u2715</button>
            <button class="btn" style="height:28px;padding:0 8px;font-size:11px;background:#f0f9ff;color:#0369a1;border:1px solid #bae6fd;"
              @click="onPickRandomOrder">\uB79C\uB364</button>
            <button class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenOrderPicker">\uC120\uD0DD</button>
          </div>
          <div v-if="!domCfg.fixedOrderId" style="font-size:10px;color:#94a3b8;margin-top:3px;">\uBBF8\uC9C0\uC815 \uC2DC \uC870\uAC74\uC5D0 \uB9DE\uB294 \uC8FC\uBB38 \uB79C\uB364</div>
        </div>
      </div>
      <!-- \uC0C1\uD488 \uC9C0\uC815 (N\uAC1C, \uADF8\uB9AC\uB4DC) -->
      <div>
        <div style="display:flex;align-items:center;gap:4px;margin-bottom:5px;flex-wrap:wrap;">
          <span style="font-size:11px;font-weight:600;color:#475569;">\u{1F4E6} \uC8FC\uBB38 \uC0C1\uD488 \uC9C0\uC815</span>
          <span style="font-size:10px;color:#64748b;margin-left:2px;">\uB79C\uB364 \uCD94\uAC00</span>
          <button class="btn" style="height:22px;padding:0 7px;font-size:10px;background:#f0f9ff;color:#0369a1;border:1px solid #bae6fd;border-radius:4px;"
            @click="onPickRandomProd('SINGLE_NO_OPT')">\uB2E8\uD488</button>
          <button class="btn" style="height:22px;padding:0 7px;font-size:10px;background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:4px;"
            @click="onPickRandomProd('SINGLE_OPT')">\uC635\uC158</button>
          <button class="btn" style="height:22px;padding:0 7px;font-size:10px;background:#fdf4ff;color:#9333ea;border:1px solid #e9d5ff;border-radius:4px;"
            @click="onPickRandomProd('SET')">\uC138\uD2B8</button>
          <button class="btn" style="height:22px;padding:0 7px;font-size:10px;background:#fffbeb;color:#b45309;border:1px solid #fde68a;border-radius:4px;"
            @click="onPickRandomProd('GROUP')">\uBB36\uC74C</button>
          <span style="font-size:10px;color:#cbd5e1;margin:0 2px;">|</span>
          <button class="btn btn_detail" style="height:22px;padding:0 8px;font-size:10px;" @click="onOpenProdPicker">\uC120\uD0DD \uCD94\uAC00</button>
          <button v-if="domCfg.fixedProds.length" class="btn" style="height:22px;padding:0 8px;font-size:10px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:4px;margin-left:auto;"
            @click="domCfg.fixedProds=[]">\uC804\uCCB4 \uC0AD\uC81C</button>
        </div>
        <table v-if="domCfg.fixedProds.length" style="width:100%;border-collapse:collapse;font-size:11px;">
          <thead>
            <tr style="background:#f1f5f9;">
              <th style="width:26px;padding:4px 6px;border:1px solid #e2e8f0;text-align:center;font-weight:600;color:#475569;">No</th>
              <th style="width:46px;padding:4px 5px;border:1px solid #e2e8f0;text-align:center;font-weight:600;color:#475569;">\uC720\uD615</th>
              <th style="padding:4px 8px;border:1px solid #e2e8f0;text-align:left;font-weight:600;color:#475569;">\uC0C1\uD488\uBA85</th>
              <th style="width:80px;padding:4px 6px;border:1px solid #e2e8f0;text-align:right;font-weight:600;color:#475569;">\uD310\uB9E4\uAC00</th>
              <th style="width:70px;padding:4px 6px;border:1px solid #e2e8f0;text-align:center;font-weight:600;color:#475569;">\uC218\uB7C9</th>
              <th style="width:28px;padding:4px 6px;border:1px solid #e2e8f0;text-align:center;"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, i) in domCfg.fixedProds" :key="p.prodId">
              <td style="padding:3px 6px;border:1px solid #e2e8f0;text-align:center;color:#94a3b8;">{{ i+1 }}</td>
              <td style="padding:3px 5px;border:1px solid #e2e8f0;text-align:center;">
                <span :style="fnProdBadgeStyle(p)">{{ fnProdBadgeLabel(p) }}</span>
              </td>
              <td style="padding:3px 8px;border:1px solid #e2e8f0;min-width:0;">
                <div style="display:flex;align-items:center;gap:5px;min-width:0;">
                  <div style="flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" :title="p.prodNm + ' (' + p.prodId + ')'">{{ p.prodNm }}</div>
                  <!-- \uC635\uC158 \uB4DC\uB86D\uB2E4\uC6B4 (\uC635\uC158\uC0C1\uD488\uB9CC, \uD55C \uC904) -->
                  <div v-if="fnProdHasOpt(p)" style="display:flex;align-items:center;gap:3px;flex-shrink:0;">
                    <template v-for="(os, oi) in p.optSelects" :key="os.typeId">
                      <span v-if="oi > 0" style="font-size:10px;color:#cbd5e1;">/</span>
                      <select v-model="os.selectedId"
                        style="height:20px;font-size:10px;border:1px solid #c4b5fd;border-radius:3px;padding:0 3px;background:#faf5ff;color:#6d28d9;max-width:80px;">
                        <option value="">{{ os.typeNm }}</option>
                        <option v-for="c in os.choices" :key="c.id" :value="c.id">{{ c.nm }}</option>
                      </select>
                    </template>
                  </div>
                </div>
              </td>
              <td style="padding:3px 6px;border:1px solid #e2e8f0;text-align:right;color:#334155;">{{ (p.salePrice||0).toLocaleString() }}\uC6D0</td>
              <td style="padding:2px 4px;border:1px solid #e2e8f0;text-align:center;">
                <input type="number" min="1" max="99" v-model.number="p.qty"
                  style="width:52px;height:22px;text-align:center;border:1px solid #cbd5e1;border-radius:3px;font-size:11px;padding:0 4px;" />
              </td>
              <td style="padding:2px 4px;border:1px solid #e2e8f0;text-align:center;">
                <button class="btn" style="height:20px;width:20px;padding:0;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:3px;line-height:1;"
                  @click="onRemoveFixedProd(i)">\u2715</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else style="font-size:10px;color:#94a3b8;padding:4px 0;">\uBBF8\uC9C0\uC815 \uC2DC \uD310\uB9E4\uC911 \uC0C1\uD488 \uB79C\uB364 \uC120\uD0DD</div>
      </div>
    </div>

    <!-- \uD504\uB85C\uBAA8\uC158 \uC801\uC6A9 \uC139\uC158 -->
    <div v-if="cfg.mode==='create'" style="margin-top:12px;border-top:1px solid #e2e8f0;padding-top:10px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <span style="font-size:11px;font-weight:600;color:#475569;">\u{1F381} \uD504\uB85C\uBAA8\uC158 \uC801\uC6A9</span>
        <button class="btn" style="height:20px;padding:0 8px;font-size:10px;background:#f1f5f9;color:#64748b;border:1px solid #e2e8f0;border-radius:10px;"
          @click="domCfg.promoOpen=!domCfg.promoOpen">{{ domCfg.promoOpen ? '\u25B2 \uC811\uAE30' : '\u25BC \uD3BC\uCE58\uAE30' }}</button>
      </div>
      <div v-show="domCfg.promoOpen" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;">

        <!-- \uCFE0\uD3F0 -->
        <div style="background:#fafafa;border:1px solid #e2e8f0;border-radius:6px;padding:8px 10px;">
          <div style="font-size:10px;font-weight:600;color:#6366f1;margin-bottom:5px;">\u{1F39F} \uCFE0\uD3F0</div>
          <select v-model="domCfg.couponMode" style="width:100%;border:1px solid #e2e8f0;border-radius:4px;padding:2px 4px;font-size:11px;margin-bottom:5px;">
            <option v-for="m in PROMO_MODES" :key="m.value" :value="m.value">{{ m.label }}</option>
          </select>
          <div v-if="domCfg.couponMode==='fixed'" style="display:flex;gap:4px;align-items:center;margin-bottom:5px;">
            <input type="text" :value="domCfg.fixedCouponNm || domCfg.fixedCouponId || ''" readonly placeholder="\uCFE0\uD3F0 \uC120\uD0DD"
              style="flex:1;height:24px;padding:0 6px;font-size:10px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;cursor:pointer;"
              @click="onOpenCouponPicker" />
            <button v-if="domCfg.fixedCouponId" class="btn" style="height:24px;padding:0 5px;font-size:10px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
              @click="domCfg.fixedCouponId='';domCfg.fixedCouponNm=''">\u2715</button>
            <button v-else class="btn" style="height:24px;padding:0 6px;font-size:10px;background:#ede9fe;color:#6366f1;border:1px solid #c4b5fd;"
              @click="onOpenCouponPicker">\uC120\uD0DD</button>
          </div>
          <div v-if="domCfg.couponMode==='random'" style="display:flex;align-items:center;gap:4px;">
            <span style="font-size:10px;color:#64748b;white-space:nowrap;">\uC801\uC6A9\uD655\uB960</span>
            <input type="range" min="0" max="100" v-model.number="domCfg.couponApplyRate" style="flex:1;accent-color:#6366f1;" />
            <span style="font-size:10px;font-weight:600;color:#6366f1;min-width:28px;">{{ domCfg.couponApplyRate }}%</span>
          </div>
        </div>

        <!-- \uD560\uC778 -->
        <div style="background:#fafafa;border:1px solid #e2e8f0;border-radius:6px;padding:8px 10px;">
          <div style="font-size:10px;font-weight:600;color:#f59e0b;margin-bottom:5px;">\u{1F4B8} \uD560\uC778</div>
          <select v-model="domCfg.discntMode" style="width:100%;border:1px solid #e2e8f0;border-radius:4px;padding:2px 4px;font-size:11px;margin-bottom:5px;">
            <option v-for="m in PROMO_MODES" :key="m.value" :value="m.value">{{ m.label }}</option>
          </select>
          <div v-if="domCfg.discntMode==='fixed'" style="display:flex;gap:4px;align-items:center;margin-bottom:5px;">
            <input type="text" :value="domCfg.fixedDiscntNm || domCfg.fixedDiscntId || ''" readonly placeholder="\uD560\uC778 \uC120\uD0DD"
              style="flex:1;height:24px;padding:0 6px;font-size:10px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;cursor:pointer;"
              @click="onOpenDiscntPicker" />
            <button v-if="domCfg.fixedDiscntId" class="btn" style="height:24px;padding:0 5px;font-size:10px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
              @click="domCfg.fixedDiscntId='';domCfg.fixedDiscntNm=''">\u2715</button>
            <button v-else class="btn" style="height:24px;padding:0 6px;font-size:10px;background:#fef3c7;color:#b45309;border:1px solid #fcd34d;"
              @click="onOpenDiscntPicker">\uC120\uD0DD</button>
          </div>
          <div v-if="domCfg.discntMode==='random'" style="display:flex;align-items:center;gap:4px;">
            <span style="font-size:10px;color:#64748b;white-space:nowrap;">\uC801\uC6A9\uD655\uB960</span>
            <input type="range" min="0" max="100" v-model.number="domCfg.discntApplyRate" style="flex:1;accent-color:#f59e0b;" />
            <span style="font-size:10px;font-weight:600;color:#f59e0b;min-width:28px;">{{ domCfg.discntApplyRate }}%</span>
          </div>
        </div>

        <!-- \uC801\uB9BD\uAE08 -->
        <div style="background:#fafafa;border:1px solid #e2e8f0;border-radius:6px;padding:8px 10px;">
          <div style="font-size:10px;font-weight:600;color:#22c55e;margin-bottom:5px;">\u{1F4B0} \uC801\uB9BD\uAE08 \uCC28\uAC10</div>
          <select v-model="domCfg.saveMode" style="width:100%;border:1px solid #e2e8f0;border-radius:4px;padding:2px 4px;font-size:11px;margin-bottom:5px;">
            <option value="none">\uC5C6\uC74C</option>
            <option value="random">\uB79C\uB364 \uC801\uC6A9</option>
          </select>
          <div v-if="domCfg.saveMode==='random'">
            <div style="display:flex;align-items:center;gap:4px;margin-bottom:3px;">
              <span style="font-size:10px;color:#64748b;white-space:nowrap;">\uC0AC\uC6A9\uD655\uB960</span>
              <input type="range" min="0" max="100" v-model.number="domCfg.saveApplyRate" style="flex:1;accent-color:#22c55e;" />
              <span style="font-size:10px;font-weight:600;color:#22c55e;min-width:28px;">{{ domCfg.saveApplyRate }}%</span>
            </div>
            <div style="display:flex;align-items:center;gap:4px;">
              <span style="font-size:10px;color:#64748b;white-space:nowrap;">\uCC28\uAC10\uBC94\uC704</span>
              <input type="number" min="0" max="100" v-model.number="domCfg.saveDeductMin" style="width:36px;text-align:center;border:1px solid #e2e8f0;border-radius:3px;font-size:10px;padding:1px;" />
              <span style="font-size:10px;color:#94a3b8;">~</span>
              <input type="number" min="0" max="100" v-model.number="domCfg.saveDeductMax" style="width:36px;text-align:center;border:1px solid #e2e8f0;border-radius:3px;font-size:10px;padding:1px;" />
              <span style="font-size:10px;color:#94a3b8;">%</span>
            </div>
          </div>
        </div>

        <!-- \uC0AC\uC740\uD488 -->
        <div style="background:#fafafa;border:1px solid #e2e8f0;border-radius:6px;padding:8px 10px;">
          <div style="font-size:10px;font-weight:600;color:#ec4899;margin-bottom:5px;">\u{1F380} \uC0AC\uC740\uD488</div>
          <div style="font-size:10px;color:#94a3b8;margin-bottom:5px;">GIFT \uD0C0\uC785 \uC0C1\uD488 \uC911 \uB79C\uB364</div>
          <div style="display:flex;align-items:center;gap:4px;">
            <span style="font-size:10px;color:#64748b;white-space:nowrap;">\uD3EC\uD568\uD655\uB960</span>
            <input type="range" min="0" max="100" v-model.number="domCfg.giftApplyRate" style="flex:1;accent-color:#ec4899;" />
            <span style="font-size:10px;font-weight:600;color:#ec4899;min-width:28px;">{{ domCfg.giftApplyRate }}%</span>
          </div>
          <div v-if="domCfg.giftApplyRate===0" style="font-size:10px;color:#94a3b8;margin-top:3px;">0% = \uBBF8\uD3EC\uD568</div>
        </div>

      </div>
    </div>
  </div>

  <!-- \uC0DD\uC131 \uC635\uC158 (\uC804\uCCB4 \uD3ED) -->
  <div v-if="cfg.mode==='create'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F6D2} \uC8FC\uBB38 \uC0DD\uC131 \uC635\uC158</div>
    <bo-form-area :columns="createCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
      ${Y("itemCountMin","itemCountMax",1,20,"\uAC1C")}
      ${Y("amtMin","amtMax",1e4,3e5,"\uC6D0")}
    </bo-form-area>
  </div>

  <!-- \uAC00\uC911\uCE58 \uD328\uB110 -->
  <div v-if="cfg.mode==='create'" style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4B3} \uACB0\uC81C\uC218\uB2E8 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedPayMethod" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="">-- \uC5C6\uC74C --</option>
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="p in PAY_METHODS" :key="p.value" :value="p.value">{{ p.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedPayMethod === '__weighted__'">
        <div v-for="p in PAY_METHODS" :key="p.value" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+p.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#475569;min-width:68px;white-space:nowrap;">{{ p.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.payMethodWeights[p.value]" :style="'flex:1;accent-color:'+p.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.payMethodWeights[p.value]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.payMethodWeights[p.value]/cfPayMethodTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="p in PAY_METHODS" :key="p.value" :style="'flex:'+domCfg.payMethodWeights[p.value]+';transition:flex .2s;background:'+p.color"></div>
        </div>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>

  <!-- \uC218\uC815 \uC635\uC158 (\uC804\uCCB4 \uD3ED) -->
  <div v-if="cfg.mode==='update'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u270F \uC8FC\uBB38 \uC218\uC815 \uC635\uC158</div>
    <bo-form-area :columns="updateCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
  </div>

  <!-- \uC2E4\uD589 \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch" @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- \uD68C\uC6D0 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="memberPicker.show" popup-cmd="cmPopup-member-pick" popup-code="member"
    title="\uC2DC\uBBAC \uD68C\uC6D0 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="memberPicker.show = false" />

  <!-- \uC0C1\uD488 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="prodPicker.show" popup-cmd="cmPopup-prod-pick" popup-code="prod"
    title="\uC0C1\uD488 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="prodPicker.show = false" />

  <!-- \uCFE0\uD3F0 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="couponPicker.show" popup-cmd="cmPopup-coupon-pick" popup-code="coupon"
    title="\uCFE0\uD3F0 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="couponPicker.show = false" />

  <!-- \uD560\uC778 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="discntPicker.show" popup-cmd="cmPopup-discnt-pick" popup-code="discnt"
    title="\uD560\uC778 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="discntPicker.show = false" />

  <!-- \uC8FC\uBB38 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="orderPicker.show" popup-cmd="cmPopup-order-pick" popup-code="order"
    title="\uC2DC\uBBAC \uC8FC\uBB38 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="orderPicker.show = false" />

</div>`}})();
