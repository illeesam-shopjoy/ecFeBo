window.OdOrderItemMng={name:"OdOrderItemMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(ie){var W;const{reactive:h,computed:G,onMounted:se,onBeforeUnmount:ce}=Vue,O=((W=window.boApp)==null?void 0:W.showToast)||ie.showToast;let P=null,E=null;const v=e=>{P=window.boUtil.bofOpenKanbanPopup(e.orderId,null,O,e.orderItemId),P&&(p.selectedOrderItemId=e.orderItemId,p.selectedOrderId=e.orderId,p.openMode="view",p.active=!0,E&&clearInterval(E),E=setInterval(()=>{(!P||P.closed)&&(clearInterval(E),E=null,p.reloadTrigger++,k())},600))};ce(()=>{E&&clearInterval(E)});const g=h({show:!1,loading:!1,row:null,discounts:[],coupons:[],saves:[]}),pe=async e=>{var a,t,l,s,n,m,I,b;g.row=e,g.show=!0,g.loading=!0,g.discounts=[],g.coupons=[],g.saves=[];try{const[y,C,w]=await Promise.all([boApiSvc.pmDiscntUsage.getPage({orderItemId:e.orderItemId,pageSize:50}),boApiSvc.pmCouponUsage.getPage({orderItemId:e.orderItemId,pageSize:50}),boApiSvc.pmSaveUsage.getPage({orderItemId:e.orderItemId,pageSize:50})]);g.discounts=((t=(a=y.data)==null?void 0:a.data)==null?void 0:t.pageList)||[],g.coupons=((s=(l=C.data)==null?void 0:l.data)==null?void 0:s.pageList)||[],g.saves=((m=(n=w.data)==null?void 0:n.data)==null?void 0:m.pageList)||[]}catch(y){O(((b=(I=y.response)==null?void 0:I.data)==null?void 0:b.message)||"\uD504\uB85C\uBAA8\uC158 \uC815\uBCF4 \uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0)}finally{g.loading=!1}},me=()=>{g.show=!1},ge=e=>{if(!e)return;const a=window.pageUrl("bo.html")+"?page=odOrderDtl&id="+encodeURIComponent(e);window.open(a,"_blank","width=1400,height=900,scrollbars=yes,resizable=yes")},fe=e=>{if(!e)return;const a=window.pageUrl("bo-od-order-promo-pop.html")+"?orderId="+encodeURIComponent(e);window.open(a,"_blank","width=1200,height=860,scrollbars=yes,resizable=yes")},V=e=>{if(!e)return;const a=window.pageUrl("bo.html")+"?page=odOrderItemDtl&id="+encodeURIComponent(e);window.open(a,"_blank","width=1300,height=880,scrollbars=yes,resizable=yes")},ue=h({show:!1}),be=()=>K(),S=h([]),c=h({pageNo:1,pageSize:50,pageTotalCount:0,pageTotalPage:1,pageNums:[1],pageSizes:[20,50,100,200]}),B=h({loading:!1}),f=h({order_item_statuses:[],od_date_types:[],couriers:[],claim_types:[],claim_statuses:[]}),L=h([]),o=h({orderId:"",memberId:"",memberNm:"",vendorId:"",vendorNm:"",brandId:"",brandNm:"",mdUserId:"",mdUserNm:"",dlivCourierCd:"",orderItemStatusCds:"",claimCombos:"",searchType:"",searchValue:"",dateRangeType:"reg_date",dateRangeStart:"",dateRangeEnd:"",_dateRange:""}),d=h({member:!1,order:!1,vendor:!1,brand:!1,md:!1}),F={},p=h({selectedOrderItemId:null,selectedOrderId:null,openMode:"view",reloadTrigger:0,active:!0,resetSeq:0}),u=(e,a={})=>{if(e==="searchParam-list")return c.pageNo=1,k();if(e==="searchParam-reset")return Object.assign(o,F),c.pageNo=1,Y(),k();if(e==="searchParam-dateRange")return window.boUtil.bofApplyDateRange(o,void 0,"dateRangeStart","dateRangeEnd","_dateRange");if(e==="items-pager-setPage"){a>=1&&a<=c.pageTotalPage&&(c.pageNo=a,k());return}else if(e==="pick-member-open"){d.member=!0;return}else if(e==="pick-order-open"){d.order=!0;return}else if(e==="pick-vendor-open"){d.vendor=!0;return}else if(e==="pick-brand-open"){d.brand=!0;return}else if(e==="pick-md-open"){d.md=!0;return}else if(e==="pick-member-clear"){o.memberId="",o.memberNm="";return}else if(e==="pick-order-clear"){o.orderId="";return}else if(e==="pick-vendor-clear"){o.vendorId="",o.vendorNm="";return}else if(e==="pick-brand-clear"){o.brandId="",o.brandNm="";return}else if(e==="pick-md-clear"){o.mdUserId="",o.mdUserNm="";return}else console.warn("[OdOrderItemMng] unknown cmd:",e)},he=(e,a,t)=>{if(t==null){d.member=d.order=d.vendor=d.brand=d.md=!1;return}e==="cmPopup-member-pick"?(o.memberId=(t==null?void 0:t.selId)||"",o.memberNm=(t==null?void 0:t.selName)||(t==null?void 0:t.loginId)||(t==null?void 0:t.selId)||"",d.member=!1):e==="cmPopup-order-pick"?(o.orderId=(t==null?void 0:t.selId)||"",d.order=!1):e==="cmPopup-vendor-pick"?(o.vendorId=(t==null?void 0:t.selId)||"",o.vendorNm=(t==null?void 0:t.selName)||(t==null?void 0:t.selId)||"",d.vendor=!1):e==="cmPopup-brand-pick"?(o.brandId=(t==null?void 0:t.selId)||"",o.brandNm=(t==null?void 0:t.selName)||(t==null?void 0:t.selId)||"",d.brand=!1):e==="cmPopup-md-pick"&&(o.mdUserId=(t==null?void 0:t.selId)||"",o.mdUserNm=(t==null?void 0:t.selName)||(t==null?void 0:t.loginId)||(t==null?void 0:t.selId)||"",d.md=!1)},ye=e=>{if(e==="items-pager-sizeChange")return c.pageNo=1,k()},Ce=e=>V(e.orderItemId),xe=e=>V(e.orderItemId),Y=()=>{p.selectedOrderItemId=null,p.selectedOrderId=null,p.openMode="view",p.active=!0,p.resetSeq++},R=h(new Set),ve=e=>{R.has(e)?R.delete(e):R.add(e)},Ie=G(()=>{const e=new Map;for(const l of S)e.has(l.orderId)||e.set(l.orderId,[]),e.get(l.orderId).push(l);const a=[];let t=0;for(const[l,s]of e){const n=R.has(l);a.push({_groupHeader:!0,orderItemId:"_grp_"+l,orderId:l,memberNm:s[0].memberNm,itemCount:s.length,collapsed:n});for(const m of s)m._displayIdx=t++,n||a.push(m)}return a}),we=["ORDERED","PAID","PREPARING","SHIPPING","WAIT_DEPOSIT"],Q=["DELIVERED","DLIV_COMPLT"],M=["CONFIRMED","COMPLT","BUY_CONFIRMED"],A=["COMPLT","DONE","COMPLETE","REJECTED"],H=e=>(f.claim_types.find(a=>a.codeValue===e)||{}).codeLabel||e,Ne={REQUESTED:["CANCEL","RETURN","EXCHANGE"],APPROVED:["CANCEL","RETURN","EXCHANGE"],PROCESSING:["CANCEL","RETURN","EXCHANGE"],COMPLT:["CANCEL","RETURN","EXCHANGE"],REJECTED:["CANCEL","RETURN","EXCHANGE"],CANCELLED:["CANCEL","RETURN","EXCHANGE"],IN_PICKUP:["RETURN","EXCHANGE"],IN_TRANSIT:["EXCHANGE"]},Se=(e,a)=>(Ne[e]||[]).includes(a),Ee=()=>f.claim_statuses.map(e=>({value:e.codeValue,label:e.codeLabel})),Ae=()=>f.claim_types.map(e=>({value:e.codeValue,label:e.codeLabel})),Me=e=>({ORDERED:"badge-blue",WAIT_DEPOSIT:"badge-blue",PAID:"badge-green",PREPARING:"badge-orange",SHIPPING:"badge-purple",DELIVERED:"badge-blue",DLIV_COMPLT:"badge-blue",CONFIRMED:"badge-green",COMPLT:"badge-green",BUY_CONFIRMED:"badge-green",CANCELLED:"badge-red"})[e]||"badge-gray",Ue=e=>e==="Y"?"badge-green":"badge-gray",q=G(()=>{let e=0,a=0,t=0,l=0,s=0,n=0,m=0,I=0,b=0,y=0,C=0,w=0,_=0,i=0,r=0,J=0,Z=0,$=0,ee=0,te=0,oe=0,ae=0,le=0,de=0,re=0;for(const x of S){const D=Number(x.orderQty)||1,N=x.orderItemStatusCd||"",z=Number(x.itemOrderAmt)||0,ne=Number(x.itemCancelAmt)||0,Be=Number(x.itemCompletedAmt)||0;if(e+=D,we.includes(N)&&(t+=D,de+=z),M.includes(N)&&(l+=D,re+=Be||z),N==="ORDERED"||N==="WAIT_DEPOSIT"?s++:N==="PAID"?n++:N==="PREPARING"?m++:N==="SHIPPING"?I++:Q.includes(N)?b++:M.includes(N)?y++:N==="CANCELLED"&&C++,x.claimYn==="Y"){const Le=A.includes(x.claimStatusCd||""),T=x.claimTypeCd||"";Le?(Z++,oe+=ne,a+=D,T==="CANCEL"?$++:T==="RETURN"?ee++:T==="EXCHANGE"&&te++):(w++,J+=z,T==="CANCEL"?_++:T==="RETURN"?i++:T==="EXCHANGE"&&r++)}x.cancelQty&&(a=Math.max(a,Number(x.cancelQty))),x.refundCompltYn==="Y"&&(ae++,le+=ne)}return{qty:{order:e,cancel:a,progress:t,confirmed:l},status:{ordered:s,paid:n,prep:m,ship:I,dliv:b,buyConf:y,cancelled:C},claimActive:{total:w,cancel:_,return:i,exchange:r,amt:J},claimDone:{total:Z,cancel:$,return:ee,exchange:te,amt:oe},refund:{count:ae,amt:le},amtProgress:de,amtConfirmed:re}}),ke=G(()=>{if(!S.length)return null;let e=0,a=0,t=0,l=0,s=0,n=0,m=0,I=0,b=0,y=0,C=0,w=0,_=0;for(const r of S)n+=Number(r.orderQty)||0,m+=Number(r.cancelQty)||0,e+=Number(r.itemOrderAmt)||0,a+=Number(r.orgDiscountAmt)||0,t+=Number(r.itemCancelAmt)||0,l+=Number(r.itemCompletedAmt)||0,s+=Number(r.outboundShippingFee)||0,I+=Number(r.settleSaleAmt)||0,b+=Number(r.settleCommissionAmt)||0,y+=Number(r.settleVendorAmt)||0,C+=Number(r.saveSchdAmt)||0,w+=Number(r.discntUsageAmt)||0,_+=Number(r.couponUsageAmt)||0;const i=q.value;return{orderQty:n,cancelQty:m,_progress:i.qty.progress,_qtyConf:i.qty.confirmed,_stOrdered:i.status.ordered,_stPaid:i.status.paid,_stPrep:i.status.prep,_stShip:i.status.ship,_stDliv:i.status.dliv,_stBuyConf:i.status.buyConf,_stCancelled:i.status.cancelled,_claimActive:i.claimActive.total,_claimDone:i.claimDone.total,_refund:i.refund.count,discntUsageNm:w?"-"+w.toLocaleString()+"\uC6D0":"",couponUsageNm:_?"-"+_.toLocaleString()+"\uC6D0":"",saveSchdAmt:C?"+"+C.toLocaleString():"",itemOrderAmt:e,orgDiscountAmt:a,itemCancelAmt:t,itemCompletedAmt:l,outboundShippingFee:s,settleSaleAmt:I,settleCommissionAmt:b,settleVendorAmt:y,_settleShipFee:s,_settleStatus:"",settleDate:""}}),K=()=>{const e={...o.memberId&&{memberId:o.memberId},...o.memberNm&&{memberNm:o.memberNm},...o.orderId&&{orderId:o.orderId},...o.vendorId&&{vendorId:o.vendorId},...o.vendorNm&&{vendorNm:o.vendorNm},...o.brandId&&{brandId:o.brandId},...o.brandNm&&{brandNm:o.brandNm},...o.mdUserId&&{mdUserId:o.mdUserId},...o.mdUserNm&&{mdUserNm:o.mdUserNm},...o.dlivCourierCd&&{dlivCourierCd:o.dlivCourierCd},...(()=>{const a=o.orderItemStatusCds?o.orderItemStatusCds.split(",").filter(Boolean):[];return a.length?{orderItemStatusCds:a}:{}})(),...(()=>{const a=o.claimCombos;if(!a)return{};if(a==="__NONE__")return{claimCombos:["__NONE__"]};const t=a.split(",").filter(Boolean);return t.length?{claimCombos:t}:{}})(),...o.searchType&&{searchType:o.searchType},...o.searchValue&&{searchValue:o.searchValue},...o.dateRangeType&&{dateRangeType:o.dateRangeType},...o.dateRangeStart&&{dateRangeStart:o.dateRangeStart},...o.dateRangeEnd&&{dateRangeEnd:o.dateRangeEnd}};return e.searchValue&&!e.searchType&&(e.searchType="prodNm,brandNm"),e},k=async()=>{var e,a,t;B.loading=!0;try{const l={pageNo:c.pageNo,pageSize:c.pageSize,...K()},n=((e=(await boApiSvc.odOrderItem.getPage(l,"\uC8FC\uBB38\uD56D\uBAA9\uAD00\uB9AC","\uC870\uD68C")).data)==null?void 0:e.data)||{};S.splice(0,S.length,...n.pageList||[]),c.pageTotalCount=n.pageTotalCount||0,c.pageTotalPage=n.pageTotalPage||1;const m=c.pageTotalPage,I=c.pageNo,b=Math.max(1,I-4),y=Math.min(m,b+9);c.pageNums=Array.from({length:y-b+1},(C,w)=>b+w),p.selectedOrderItemId&&!S.some(C=>C.orderItemId===p.selectedOrderItemId)&&Y()}catch(l){O(((t=(a=l.response)==null?void 0:a.data)==null?void 0:t.message)||"\uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0)}finally{B.loading=!1}},_e=async()=>{try{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["ORDER_ITEM_STATUS_CD","ORDER_ITEM_DATE_TYPE","COURIER","CLAIM_TYPE_CD","CLAIM_ITEM_STATUS_CD"],{compNm:"OdOrderItemMng"}),f.order_item_statuses=e.sgGetGrpCodes("ORDER_ITEM_STATUS_CD"),f.od_date_types=e.sgGetGrpCodes("ORDER_ITEM_DATE_TYPE"),f.couriers=e.sgGetGrpCodes("COURIER"),f.claim_types=e.sgGetGrpCodes("CLAIM_TYPE_CD"),f.claim_statuses=e.sgGetGrpCodes("CLAIM_ITEM_STATUS_CD")}catch{}L.splice(0,L.length,...await window.boUtil.bofLoadSiteOptions())},Te=async()=>{await _e();const e=new URLSearchParams(window.location.search),a=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(o).forEach(t=>{!a.includes(t)&&e.has(t)&&(o[t]=e.get(t))}),Object.assign(F,o),await k()};se(()=>{Te()});const ze=e=>e.claimYn==="Y"&&!A.includes(e.claimStatusCd||"")?"color:#c07030;font-weight:700;":"color:#e0e0e0;",Ve=e=>e.claimYn==="Y"&&A.includes(e.claimStatusCd||"")?"color:#757575;font-weight:700;":"color:#e0e0e0;",Fe=e=>e.claimYn==="Y"&&!A.includes(e.claimStatusCd||"")?e.claimTypeCd?H(e.claimTypeCd):"\uC9C4\uD589":"\xB7",Ye=e=>e.claimYn==="Y"&&A.includes(e.claimStatusCd||"")?e.claimTypeCd?H(e.claimTypeCd):"\uC644\uB8CC":"\xB7",X=e=>e.settleYn==="Y"?"badge-green":e.settleYn==="P"?"badge-blue":"badge-gray",j=e=>e.settleYn==="Y"?"\uC644\uB8CC":e.settleYn==="P"?"\uBD80\uBD84\uC644\uB8CC":"\uB300\uAE30",Pe=e=>({ISSUED:"badge-green",PENDING:"badge-orange",CANCELLED:"badge-red"})[e]||"badge-gray",Re=e=>({ISSUED:"\uBC1C\uD589\uC644\uB8CC",PENDING:"\uB300\uAE30",CANCELLED:"\uCDE8\uC18C"})[e]||e||"-",De=e=>({DRAFT:"badge-gray",CONFIRMED:"badge-blue",SENT:"badge-green",MATCHED:"badge-green",MISMATCH:"badge-orange",ERROR:"badge-red"})[e]||"badge-gray",Ge=e=>({DRAFT:"\uC784\uC2DC",CONFIRMED:"\uD655\uC815",SENT:"\uBC1C\uC1A1",MATCHED:"\uB9E4\uCE6D",MISMATCH:"\uBD88\uC77C\uCE58",ERROR:"\uC624\uB958"})[e]||e||"-",Oe=e=>({SETTLE:"\uC815\uC0B0",RETURN:"\uBC18\uD488",ADJ:"\uC870\uC815",PAY:"\uACB0\uC81C"})[e]||e||"\uC804\uD45C",U={};return U.listGrid=[{key:"_rowNum",label:"\uBC88\uD638",width:34,slot:!0,pin:"left"},{key:"orderItemId",label:"\uD56D\uBAA9ID/\uC8FC\uBB38ID",width:108,pin:"left",slot:!0,titleFmt:e=>(e.orderItemId||"-")+" / "+(e.orderId||"-")},{key:"memberNm",label:"\uD68C\uC6D0\uBA85",width:84,pin:"left",tdStyle:()=>"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:4px 6px;text-align:left;",fmt:e=>e.memberNm||"-"},{key:"prodNm",label:"\uC0C1\uD488\uBA85",width:150,pin:"left",slot:!0,tdStyle:()=>"overflow:hidden;"},{key:"orderQty",label:"\uC8FC\uBB38",colGroup:"\u{1F4E6} \uC218\uB7C9",pin:"left",colGroupBg:"#e8f5e9",colGroupColor:"#2e7d32",colGroupBorderColor:"#a5d6a7",thBg:"#daf5da",thColor:"#2e7d32",width:42,tdStyle:()=>"text-align:center;padding:1px 2px;font-size:11px;color:#2e7d32;",fmt:e=>e.orderQty||""},{key:"cancelQty",label:"\uCDE8\uC18C",colGroup:"\u{1F4E6} \uC218\uB7C9",pin:"left",thBg:"#daf5da",thColor:"#c62828",width:42,tdStyle:()=>"text-align:center;padding:1px 2px;font-size:11px;color:#c62828;",fmt:e=>e.cancelQty||""},{key:"categoryNm",label:"\uCE74\uD14C\uACE0\uB9AC",colGroup:"\u{1F9FE} \uC0C1\uD488\uAE30\uBCF8\uC815\uBCF4",colGroupBg:"#e3f2fd",colGroupColor:"#1565c0",colGroupBorderColor:"#90caf9",thBg:"#deeefb",width:84,tdStyle:()=>"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:4px 6px;font-size:11px;color:#666;text-align:left;",fmt:e=>e.categoryNm||"-"},{key:"brandNm",label:"\uBE0C\uB79C\uB4DC",colGroup:"\u{1F9FE} \uC0C1\uD488\uAE30\uBCF8\uC815\uBCF4",thBg:"#deeefb",width:76,tdStyle:()=>"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:4px 6px;font-size:11px;text-align:left;",fmt:e=>e.brandNm||"-"},{key:"vendorNm",label:"\uD310\uB9E4\uC5C5\uCCB4",colGroup:"\u{1F9FE} \uC0C1\uD488\uAE30\uBCF8\uC815\uBCF4",thBg:"#deeefb",width:84,tdStyle:()=>"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:4px 6px;font-size:11px;text-align:left;",fmt:e=>e.vendorNm||"-"},{key:"mdUserNm",label:"MD",colGroup:"\u{1F9FE} \uC0C1\uD488\uAE30\uBCF8\uC815\uBCF4",thBg:"#deeefb",width:64,align:"center",fmt:e=>e.mdUserNm||"-"},{key:"_stOrdered",label:"\uC8FC\uBB38\uC644\uB8CC",colGroup:"\u{1F4CA} \uC8FC\uBB38\uD56D\uBAA9\uC9C4\uD589\uC0C1\uD0DC",colGroupBg:"#fff8e1",colGroupColor:"#e65100",colGroupBorderColor:"#ffca28",thBg:"#fffde7",width:50,headerTip:"\uC8FC\uBB38 \uC811\uC218 \uC644\uB8CC \xB7 \uBB34\uD1B5\uC7A5 \uC785\uAE08\uB300\uAE30 \uC0C1\uD0DC (ORDERED / WAIT_DEPOSIT)",tdStyle:()=>"text-align:center;padding:1px 2px;",iconBadge:e=>e.orderItemStatusCd==="ORDERED"||e.orderItemStatusCd==="WAIT_DEPOSIT"?{bg:"#2563eb",color:"#fff",value:e.orderQty||1}:null,onBadgeClick:e=>v(e),excelKeys:[{key:"orderItemStatusCdNm",label:"\uC9C4\uD589\uC0C1\uD0DC"}]},{key:"_stPaid",label:"\uACB0\uC81C\uC644\uB8CC",colGroup:"\u{1F4CA} \uC8FC\uBB38\uD56D\uBAA9\uC9C4\uD589\uC0C1\uD0DC",thBg:"#fffde7",width:44,headerTip:"\uACB0\uC81C \uC644\uB8CC \uC0C1\uD0DC (PAID)",tdStyle:()=>"text-align:center;padding:1px 2px;",iconBadge:e=>e.orderItemStatusCd==="PAID"?{bg:"#15803d",color:"#fff",value:e.orderQty||1}:null,onBadgeClick:e=>v(e)},{key:"_stPrep",label:"\uC900\uBE44\uC911",colGroup:"\u{1F4CA} \uC8FC\uBB38\uD56D\uBAA9\uC9C4\uD589\uC0C1\uD0DC",thBg:"#fffde7",width:44,headerTip:"\uC0C1\uD488 \uC900\uBE44\uC911 \uC0C1\uD0DC (PREPARING)",tdStyle:()=>"text-align:center;padding:1px 2px;",iconBadge:e=>e.orderItemStatusCd==="PREPARING"?{bg:"#c2410c",color:"#fff",value:e.orderQty||1}:null,onBadgeClick:e=>v(e)},{key:"_stShip",label:"\uBC30\uC1A1\uC911",colGroup:"\u{1F4CA} \uC8FC\uBB38\uD56D\uBAA9\uC9C4\uD589\uC0C1\uD0DC",thBg:"#fffde7",width:44,headerTip:"\uBC30\uC1A1 \uC911 \uC0C1\uD0DC (SHIPPING)",tdStyle:()=>"text-align:center;padding:1px 2px;",iconBadge:e=>e.orderItemStatusCd==="SHIPPING"?{bg:"#1d4ed8",color:"#fff",value:e.orderQty||1}:null,onBadgeClick:e=>v(e)},{key:"_stDliv",label:"\uBC30\uC1A1\uC644\uB8CC",colGroup:"\u{1F4CA} \uC8FC\uBB38\uD56D\uBAA9\uC9C4\uD589\uC0C1\uD0DC",thBg:"#fffde7",width:50,headerTip:"\uBC30\uC1A1 \uC644\uB8CC \uC0C1\uD0DC (DELIVERED)",tdStyle:()=>"text-align:center;padding:1px 2px;",iconBadge:e=>Q.includes(e.orderItemStatusCd)?{bg:"#0f766e",color:"#fff",value:e.orderQty||1}:null,onBadgeClick:e=>v(e)},{key:"_stBuyConf",label:"\uAD6C\uB9E4\uD655\uC815",colGroup:"\u{1F4CA} \uC8FC\uBB38\uD56D\uBAA9\uC9C4\uD589\uC0C1\uD0DC",thBg:"#fffde7",width:50,headerTip:"\uAD6C\uB9E4\uD655\uC815 \uC644\uB8CC \uC0C1\uD0DC (CONFIRMED)",tdStyle:()=>"text-align:center;padding:1px 2px;",iconBadge:e=>M.includes(e.orderItemStatusCd)?{bg:"#15803d",color:"#fff",value:e.orderQty||1}:null,onBadgeClick:e=>v(e)},{key:"_stCancelled",label:"\uCDE8\uC18C",colGroup:"\u{1F4CA} \uC8FC\uBB38\uD56D\uBAA9\uC9C4\uD589\uC0C1\uD0DC",thBg:"#fffde7",width:44,headerTip:"\uC8FC\uBB38 \uCDE8\uC18C \uC0C1\uD0DC (CANCELLED)",tdStyle:()=>"text-align:center;padding:1px 2px;",iconBadge:e=>e.orderItemStatusCd==="CANCELLED"?{bg:"#dc2626",color:"#fff",value:e.orderQty||1}:null,onBadgeClick:e=>v(e)},{key:"_claimActive",label:"\uD074\uB808\uC784\uC911",colGroup:"\u26A0\uFE0F \uD074\uB808\uC784",colGroupBg:"#fce4ec",colGroupColor:"#c62828",colGroupBorderColor:"#f48fb1",thBg:"#fce4ec",width:54,tdStyle:()=>"text-align:center;padding:1px 2px;",iconBadge:e=>e.claimYn==="Y"&&!A.includes(e.claimStatusCd||"")?{bg:"#c07030",color:"#fff",value:e.orderQty||1}:null,onBadgeClick:e=>v(e)},{key:"_claimDone",label:"\uD074\uB808\uC784\uC644\uB8CC",colGroup:"\u26A0\uFE0F \uD074\uB808\uC784",thBg:"#fce4ec",width:54,tdStyle:()=>"text-align:center;padding:1px 2px;",iconBadge:e=>e.claimYn==="Y"&&A.includes(e.claimStatusCd||"")?{bg:"#757575",color:"#fff",value:e.orderQty||1}:null,onBadgeClick:e=>v(e)},{key:"_refund",label:"\uD658\uBD88\uC644\uB8CC",colGroup:"\u26A0\uFE0F \uD074\uB808\uC784",thBg:"#fce4ec",width:44,tdStyle:()=>"text-align:center;padding:1px 2px;",iconBadge:e=>e.refundCompltYn==="Y"?{bg:"#dc2626",color:"#fff",value:e.orderQty||1}:null,onBadgeClick:e=>v(e)},{key:"discntUsageNm",label:"\uD560\uC778",colGroup:"\u{1F381} \uD504\uB85C\uBAA8\uC158",colGroupBg:"#fff3e0",colGroupColor:"#e65100",colGroupBorderColor:"#ffcc80",thBg:"#fff8ee",thColor:"#e65100",width:92,headerTip:"\uC801\uC6A9\uB41C \uD560\uC778(\uC8FC\uBB38\uD560\uC778/\uC0C1\uD488\uD560\uC778) \u2014 pm_discnt_usage",slot:!0},{key:"couponUsageNm",label:"\uCFE0\uD3F0",colGroup:"\u{1F381} \uD504\uB85C\uBAA8\uC158",thBg:"#fff8ee",thColor:"#e65100",width:92,headerTip:"\uC801\uC6A9\uB41C \uCFE0\uD3F0 \u2014 pm_coupon_usage",slot:!0},{key:"saveSchdAmt",label:"\uC801\uB9BD\uAE08",colGroup:"\u{1F381} \uD504\uB85C\uBAA8\uC158",thBg:"#fff8ee",thColor:"#e65100",width:78,headerTip:"\uAD6C\uB9E4\uD655\uC815 \uD6C4 \uC801\uB9BD \uC608\uC815 \u2014 od_order_item.save_schd_amt",slot:!0},{key:"giftNm",label:"\uC0AC\uC740\uD488",colGroup:"\u{1F381} \uD504\uB85C\uBAA8\uC158",thBg:"#fff8ee",thColor:"#e65100",width:92,headerTip:"\uC9C0\uAE09\uB41C \uC0AC\uC740\uD488 \u2014 pm_gift",slot:!0},{key:"itemOrderAmt",label:"\uC8FC\uBB38\uAE08\uC561",colGroup:"\u{1F4B0} \uAE08\uC561",colGroupBg:"#e8f5e9",colGroupColor:"#1b5e20",colGroupBorderColor:"#a5d6a7",thBg:"#daf5e9",thColor:"#1565c0",width:80,headerTip:"\uC8FC\uBB38\uAE08\uC561 = \uD310\uB9E4\uB2E8\uAC00 \xD7 \uC8FC\uBB38\uC218\uB7C9 (unit_price \xD7 order_qty)",tdStyle:()=>"text-align:right;padding-right:6px;font-size:11px;color:#1565c0;font-weight:600;",titleFmt:()=>"\uC8FC\uBB38\uAE08\uC561 = \uD310\uB9E4\uB2E8\uAC00 \xD7 \uC8FC\uBB38\uC218\uB7C9",fmt:e=>e.itemOrderAmt?Number(e.itemOrderAmt).toLocaleString():"-"},{key:"orgDiscountAmt",label:"\uD560\uC778\uAE08\uC561",colGroup:"\u{1F4B0} \uAE08\uC561",thBg:"#daf5e9",thColor:"#c2410c",width:75,headerTip:"\uD560\uC778\uAE08\uC561 = \uC8FC\uBB38 \uD655\uC815 \uC2DC\uC810 \uC2A4\uB0C5\uC0F7 \uD560\uC778\uC561 (org_discount_amt)",tdStyle:e=>"text-align:right;padding-right:6px;font-size:11px;"+(e.orgDiscountAmt?"color:#c2410c;font-weight:600;":"color:#d8d8d8;"),titleFmt:()=>"\uD560\uC778\uAE08\uC561 = \uC8FC\uBB38 \uD655\uC815 \uC2DC\uC810 \uD560\uC778 \uC2A4\uB0C5\uC0F7",fmt:e=>e.orgDiscountAmt?Number(e.orgDiscountAmt).toLocaleString():"-"},{key:"itemCancelAmt",label:"\uCDE8\uC18C\uAE08\uC561",colGroup:"\u{1F4B0} \uAE08\uC561",thBg:"#daf5e9",thColor:"#dc2626",width:75,headerTip:"\uCDE8\uC18C\uAE08\uC561 = \uD074\uB808\uC784(\uCDE8\uC18C/\uBC18\uD488) \uB204\uC801 \uCDE8\uC18C\uC561",tdStyle:e=>"text-align:right;padding-right:6px;font-size:11px;"+(e.itemCancelAmt?"color:#dc2626;font-weight:600;":"color:#d8d8d8;"),titleFmt:()=>"\uCDE8\uC18C\uAE08\uC561 = \uD074\uB808\uC784(\uCDE8\uC18C/\uBC18\uD488) \uB204\uC801 \uCDE8\uC18C\uC561",fmt:e=>e.itemCancelAmt?Number(e.itemCancelAmt).toLocaleString():"-"},{key:"itemCompletedAmt",label:"\uD655\uC815\uAE08\uC561",colGroup:"\u{1F4B0} \uAE08\uC561",thBg:"#daf5e9",thColor:"#15803d",width:75,headerTip:"\uD655\uC815\uAE08\uC561 = \uC8FC\uBB38\uAE08\uC561 - \uCDE8\uC18C\uAE08\uC561 (item_order_amt - item_cancel_amt)",tdStyle:e=>"text-align:right;padding-right:6px;font-size:11px;"+(e.itemCompletedAmt?"color:#15803d;font-weight:600;":"color:#d8d8d8;"),titleFmt:()=>"\uD655\uC815\uAE08\uC561 = \uC8FC\uBB38\uAE08\uC561 - \uCDE8\uC18C\uAE08\uC561",fmt:e=>e.itemCompletedAmt?Number(e.itemCompletedAmt).toLocaleString():"-"},{key:"outboundShippingFee",label:"\uBC30\uC1A1\uBE44",colGroup:"\u{1F4B0} \uAE08\uC561",thBg:"#daf5e9",thColor:"#dc2626",width:68,headerTip:"\uBC30\uC1A1\uBE44 = \uD574\uB2F9 \uD56D\uBAA9\uC758 \uCD9C\uACE0 \uBC30\uC1A1\uB8CC (\uBD80\uBD84\uBC30\uC1A1 \uC2DC \uD56D\uBAA9\uBCC4 \uC548\uBD84)",tdStyle:e=>"text-align:right;padding-right:6px;font-size:11px;"+(e.outboundShippingFee?"color:#dc2626;font-weight:600;":"color:#d8d8d8;"),titleFmt:()=>"\uBC30\uC1A1\uBE44 = \uD574\uB2F9 \uD56D\uBAA9\uC758 \uCD9C\uACE0 \uBC30\uC1A1\uB8CC",fmt:e=>e.outboundShippingFee?Number(e.outboundShippingFee).toLocaleString():"-"},{key:"settleSaleAmt",label:"\uD310\uB9E4\uAE08\uC561",colGroup:"\u{1F4B5} \uC815\uC0B0\uAE08\uC561",colGroupBg:"#f3e5f5",colGroupColor:"#6a1b9a",colGroupBorderColor:"#ce93d8",thBg:"#ede7f6",thColor:"#1565c0",width:76,headerTip:"\uD310\uB9E4\uAE08\uC561 = \uC815\uC0B0 \uD56D\uBAA9 \uD310\uB9E4\uAC00 \uD569\uACC4 (st_settle_item.item_price)",tdStyle:e=>"text-align:right;padding-right:6px;font-size:11px;"+(e.settleSaleAmt?"color:#1565c0;font-weight:600;":"color:#d8d8d8;"),titleFmt:()=>"\uD310\uB9E4\uAE08\uC561 = \uC815\uC0B0 \uD56D\uBAA9 \uD310\uB9E4\uAC00 \uD569\uACC4",fmt:e=>e.settleSaleAmt?Number(e.settleSaleAmt).toLocaleString():"-"},{key:"settleCommissionAmt",label:"\uD50C\uB7AB\uD3FC\uC218\uC218\uB8CC",colGroup:"\u{1F4B5} \uC815\uC0B0\uAE08\uC561",thBg:"#ede7f6",thColor:"#c2410c",width:80,headerTip:"\uD50C\uB7AB\uD3FC\uC218\uC218\uB8CC = \uD310\uB9E4\uAE08\uC561 \xD7 \uC5C5\uCCB4\uBCC4 \uC218\uC218\uB8CC\uC728",tdStyle:e=>"text-align:right;padding-right:6px;font-size:11px;"+(e.settleCommissionAmt?"color:#c2410c;font-weight:600;":"color:#d8d8d8;"),titleFmt:()=>"\uD50C\uB7AB\uD3FC\uC218\uC218\uB8CC = \uD310\uB9E4\uAE08\uC561 \xD7 \uC218\uC218\uB8CC\uC728",fmt:e=>e.settleCommissionAmt?Number(e.settleCommissionAmt).toLocaleString():"-"},{key:"settleVendorAmt",label:"\uD310\uB9E4\uC790\uAE08\uC561",colGroup:"\u{1F4B5} \uC815\uC0B0\uAE08\uC561",thBg:"#ede7f6",thColor:"#15803d",width:76,headerTip:"\uD310\uB9E4\uC790\uAE08\uC561 = \uD310\uB9E4\uAE08\uC561 - \uD50C\uB7AB\uD3FC\uC218\uC218\uB8CC (\uC5C5\uCCB4 \uC2E4\uC9C0\uAE09\uC561)",tdStyle:e=>"text-align:right;padding-right:6px;font-size:11px;"+(e.settleVendorAmt?"color:#15803d;font-weight:600;":"color:#d8d8d8;"),titleFmt:()=>"\uD310\uB9E4\uC790\uAE08\uC561 = \uD310\uB9E4\uAE08\uC561 - \uD50C\uB7AB\uD3FC\uC218\uC218\uB8CC",fmt:e=>e.settleVendorAmt?Number(e.settleVendorAmt).toLocaleString():"-"},{key:"_settleShipFee",label:"\uBC30\uC1A1\uBE44",colGroup:"\u{1F4B5} \uC815\uC0B0\uAE08\uC561",thBg:"#ede7f6",thColor:"#6a1b9a",width:68,headerTip:"\uBC30\uC1A1\uBE44(\uC815\uC0B0) = \uC5C5\uCCB4 \uC815\uC0B0 \uC2DC \uAC00\uC0B0\uB418\uB294 \uCD9C\uACE0 \uBC30\uC1A1\uB8CC (\uAE08\uC561 \uADF8\uB8F9\uC758 \uBC30\uC1A1\uBE44\uC640 \uB3D9\uC77C \uAC12)",tdStyle:e=>"text-align:right;padding-right:6px;font-size:11px;"+(e.outboundShippingFee?"color:#6a1b9a;font-weight:600;":"color:#d8d8d8;"),titleFmt:()=>"\uBC30\uC1A1\uBE44(\uC815\uC0B0) = \uC815\uC0B0 \uC2DC \uAC00\uC0B0\uB418\uB294 \uCD9C\uACE0 \uBC30\uC1A1\uB8CC",fmt:e=>e.outboundShippingFee?Number(e.outboundShippingFee).toLocaleString():"-"},{key:"_settleStatus",label:"\uC815\uC0B0\uC0C1\uD0DC",colGroup:"\u{1F4C5} \uC815\uC0B0\uB9C8\uAC10",colGroupBg:"#e0f2f1",colGroupColor:"#00695c",colGroupBorderColor:"#80cbc4",thBg:"#e0f2f1",thColor:"#00695c",width:62,headerTip:"\uC815\uC0B0 \uB9C8\uAC10 \uCC98\uB9AC \uC5EC\uBD80 (od_order_item.settle_yn)",tdStyle:()=>"text-align:center;padding:1px 2px;",badge:e=>X(e),badgeLabel:e=>j(e)},{key:"settleDate",label:"\uC815\uC0B0\uC77C",colGroup:"\u{1F4C5} \uC815\uC0B0\uB9C8\uAC10",thBg:"#e0f2f1",thColor:"#00695c",width:78,headerTip:"\uC815\uC0B0 \uB9C8\uAC10 \uCC98\uB9AC\uC77C\uC2DC (od_order_item.settle_date)",tdStyle:()=>"text-align:center;padding:1px 2px;font-size:10px;color:#555;",fmt:e=>e.settleDate?String(e.settleDate).substring(0,10):"-"},{key:"_vouchers",label:"\uBC1C\uAE09 \uC804\uD45C",colGroup:"\u{1F4CB} \uC804\uD45C",colGroupBg:"#e8eaf6",colGroupColor:"#283593",colGroupBorderColor:"#9fa8da",thBg:"#e8eaf6",thColor:"#283593",width:136,tdStyle:()=>"text-align:left;padding:4px 6px;vertical-align:middle;",slot:!0},{key:"_actions",label:"\uC791\uC5C5",width:56,align:"center",slot:!0,pin:"right"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8"}],U.baseSearch=[{key:"memberId",type:"pick",label:"\uD68C\uC6D0",nameKey:"memberNm",display:e=>e.memberNm||e.memberId,placeholder:"\uD68C\uC6D0 \uC120\uD0DD",onOpen:()=>u("pick-member-open"),onClear:()=>u("pick-member-clear")},{key:"orderId",type:"pick",label:"\uC8FC\uBB38",nameKey:"orderId",display:e=>e.orderId,placeholder:"\uC8FC\uBB38 \uC120\uD0DD",onOpen:()=>u("pick-order-open"),onClear:()=>u("pick-order-clear")},{key:"vendorId",type:"pick",label:"\uD310\uB9E4\uC5C5\uCCB4",nameKey:"vendorNm",display:e=>e.vendorNm||e.vendorId,placeholder:"\uC5C5\uCCB4 \uC120\uD0DD",onOpen:()=>u("pick-vendor-open"),onClear:()=>u("pick-vendor-clear")},{key:"brandId",type:"pick",label:"\uBE0C\uB79C\uB4DC",nameKey:"brandNm",placeholder:"\uBE0C\uB79C\uB4DC\uBA85 \uC785\uB825",onOpen:()=>u("pick-brand-open"),onClear:()=>u("pick-brand-clear")},{key:"mdUserId",type:"pick",label:"MD",nameKey:"mdUserNm",display:e=>e.mdUserNm||e.mdUserId,placeholder:"MD \uC120\uD0DD",onOpen:()=>u("pick-md-open"),onClear:()=>u("pick-md-clear")},{key:"dlivCourierCd",type:"select",label:"\uBC30\uC1A1\uC0AC",options:()=>f.couriers,nullLabel:"\uC804\uCCB4"},{key:"orderItemStatusCds",type:"multiCheck",label:"\uC8FC\uBB38\uD56D\uBAA9\uC0C1\uD0DC",options:()=>f.order_item_statuses,placeholder:"\uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD"},{key:"_claimCombo",type:"slot",name:"claimCombo"},{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"prodNm",label:"\uC0C1\uD488\uBA85"},{value:"brandNm",label:"\uBE0C\uB79C\uB4DC\uBA85"}],placeholder:"\uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"112px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825",width:"180px"},{key:"_dateRange",type:"dateRange",typeKey:"dateRangeType",startKey:"dateRangeStart",endKey:"dateRangeEnd",typeOptions:()=>f.od_date_types,dateWidth:"136px",rangeOptions:()=>window.boUtil.bofDateRangeOptions,onRangeChange:()=>u("searchParam-dateRange")},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>L,nullLabel:"\uC804\uCCB4"}],{columns:U,items:S,listGridPager:c,searchParam:o,uiState:B,codes:f,detailPanel:p,picks:d,cfSummary:q,cfSummaryGridRow:ke,cfDisplayRows:Ie,toggleGroup:ve,handleBtnAction:u,handleSelectAction:ye,handleRowClick:Ce,handleRowEdit:xe,fnClaimStatusOpts:Ee,fnClaimTypeOpts:Ae,fnClaimCellValid:Se,fnSettleBadgeCls:X,fnSettleBadgeLbl:j,fnVoucherBadge:Pe,fnVoucherLbl:Re,fnErpVoucherBadge:De,fnErpVoucherLbl:Ge,fnErpVoucherTypeNm:Oe,fnCallbackModal:he,promoModal:g,openPromoModal:pe,closePromoModal:me,openOrderDtlPop:ge,openOrderPromoPop:fe,excelModal:ue,buildExcelParams:be}},template:`
<bo-page title="\uC8FC\uBB38\uD56D\uBAA9\uAD00\uB9AC" :share-query="searchParam">

  <!-- ===== \u25A0. \uAC80\uC0C9 ============================================================ -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" :max-rows="2"
      :columns="columns.baseSearch" :param="searchParam"
      @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')">
      <template #claimCombo>
        <div class="search-field">
          <label class="search-label">\uD074\uB808\uC784\uC0C1\uC138</label>
          <bo-combo-matrix-select v-model="searchParam.claimCombos"
            :row-options="fnClaimStatusOpts()" :col-options="fnClaimTypeOpts()"
            :cell-valid="fnClaimCellValid" min-width="120px" />
        </div>
      </template>
    </bo-search-area>
  </bo-container>

  <!-- ===== \u25A0. \uBAA9\uB85D =========================================================== -->
  <bo-container title="\uC8FC\uBB38\uD56D\uBAA9 \uBAA9\uB85D" :count-text="'\uCD1D ' + listGridPager.pageTotalCount.toLocaleString() + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
    </template>
    <bo-group-table
      :columns="columns.listGrid"
      :rows="cfDisplayRows"
      row-key="orderItemId"
      :selected-key="detailPanel.selectedOrderItemId"
      max-height="calc(100vh - 360px)"
      table-style="min-width:2200px;table-layout:fixed;width:100%;"
      :loading="uiState.loading"
      :summary-row="cfSummaryGridRow"
      summary-pos="top"
      summary-label="tot"
      summary-bg="#1e2f4a"
      summary-border-color="#2563eb"
      summary-text-color="#e8f4ff"
      col-border="1px solid #e2e8f0"
      @cell-click="e => handleRowClick(e.row)">

      <template #cell-_rowNum="{ row }">
        <span style="color:#999;font-size:11px;">{{ (listGridPager.pageNo - 1) * listGridPager.pageSize + row._displayIdx + 1 }}</span>
      </template>

      <template #cell-orderItemId="{ row }">
        <div style="text-align:center;line-height:1.35;">
          <div style="font-family:monospace;font-size:10px;color:#777;">{{ row.orderItemId ? row.orderItemId.substring(0, 12) + '..' : '-' }}</div>
          <div style="font-family:monospace;font-size:9px;" :style="detailPanel.selectedOrderId === row.orderId ? 'color:#e8587a;font-weight:700;' : 'color:#aaa;'">{{ row.orderId ? row.orderId.substring(0, 12) + '..' : '-' }}</div>
        </div>
      </template>

      <template #group-header="{ row }">
        <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:#dbe5f7;border-top:1px solid #bccdea;border-bottom:1px solid #bccdea;cursor:pointer;"
          @click="toggleGroup(row.orderId)">
          <span style="font-size:11px;color:#64748b;width:14px;display:inline-block;text-align:center;">{{ row.collapsed ? '\u25B6' : '\u25BC' }}</span>
          <span style="font-size:12px;font-weight:700;color:#334155;font-family:monospace;">{{ row.orderId }}</span>
          <span style="font-size:12px;color:#555;">{{ row.memberNm || '-' }}</span>
          <span style="font-size:11px;color:#94a3b8;">{{ row.itemCount }}\uAC74</span>
          <span style="display:flex;gap:4px;" @click.stop>
            <button type="button" class="btn btn-secondary btn-xs" @click="openOrderDtlPop(row.orderId)">\uC8FC\uBB38\uC0C1\uC138</button>
            <button type="button" class="btn btn-secondary btn-xs" @click="openOrderPromoPop(row.orderId)">\uD504\uB85C\uBAA8\uC158\uC0C1\uC138</button>
          </span>
        </div>
      </template>

      <template #cell-prodNm="{ row }">
        <div style="overflow:hidden;padding:0 6px;max-width:100%;">
          <div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left;" :title="row.prodNm || ''">{{ row.prodNm || '-' }}</div>
          <div v-if="row.prodOptNm1" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left;font-size:10px;color:#888;">
            [{{ row.prodOptNm1 }}{{ row.prodOptNm2 ? '/' + row.prodOptNm2 : '' }}]
          </div>
        </div>
      </template>

      <template #cell-discntUsageNm="{ row }">
        <div v-if="row.discntUsageCount" style="padding:0 4px;overflow:hidden;line-height:1.3;">
          <div style="display:flex;align-items:center;gap:2px;">
            <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:9px;color:#e65100;flex:1;"
              :title="row.discntUsageNm || row.discntUsageTopId || ''">{{ row.discntUsageNm || row.discntUsageTopId || '-' }}</span>
            <button type="button" title="\uC801\uC6A9\uB41C \uD560\uC778 \uBCF4\uAE30"
              style="border:none;background:none;padding:0;margin-left:1px;font-size:8px;line-height:1;color:#999;cursor:pointer;flex-shrink:0;"
              @click.stop="openPromoModal(row)">\u{1F50D}</button>
          </div>
          <div style="font-size:9px;color:#c2410c;">{{ '-' + Number(row.discntUsageAmt || 0).toLocaleString() + '\uC6D0' }}</div>
        </div>
        <span v-else style="color:#d8d8d8;font-size:13px;">-</span>
      </template>

      <template #cell-couponUsageNm="{ row }">
        <div v-if="row.couponUsageCount" style="padding:0 4px;overflow:hidden;line-height:1.3;">
          <div style="display:flex;align-items:center;gap:2px;">
            <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:9px;color:#e65100;flex:1;"
              :title="row.couponUsageNm || row.couponUsageTopId || ''">{{ row.couponUsageNm || row.couponUsageTopId || '-' }}</span>
            <button type="button" title="\uC801\uC6A9\uB41C \uCFE0\uD3F0 \uBCF4\uAE30"
              style="border:none;background:none;padding:0;margin-left:1px;font-size:8px;line-height:1;color:#999;cursor:pointer;flex-shrink:0;"
              @click.stop="openPromoModal(row)">\u{1F50D}</button>
          </div>
          <div style="font-size:9px;color:#c2410c;">{{ '-' + Number(row.couponUsageAmt || 0).toLocaleString() + '\uC6D0' }}</div>
        </div>
        <span v-else style="color:#d8d8d8;font-size:13px;">-</span>
      </template>

      <template #cell-saveSchdAmt="{ row }">
        <div v-if="row.saveSchdAmt" style="display:flex;align-items:center;justify-content:flex-end;gap:2px;padding:0 4px;overflow:hidden;">
          <span style="font-size:9px;color:#6a1b9a;" title="\uAD6C\uB9E4\uD655\uC815 \uD6C4 \uC801\uB9BD \uC608\uC815 \uAE08\uC561">{{ '(\uC644\uB8CC\uD6C4) +' + Number(row.saveSchdAmt).toLocaleString() }}</span>
          <button type="button" title="\uC801\uB9BD\uAE08 \uB0B4\uC5ED \uBCF4\uAE30"
            style="border:none;background:none;padding:0;margin-left:1px;font-size:8px;line-height:1;color:#999;cursor:pointer;flex-shrink:0;"
            @click.stop="openPromoModal(row)">\u{1F50D}</button>
        </div>
        <span v-else style="color:#d8d8d8;font-size:13px;">-</span>
      </template>

      <template #cell-giftNm="{ row }">
        <div v-if="row.giftId" style="display:flex;align-items:center;gap:2px;padding:0 4px;overflow:hidden;">
          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:9px;color:#e65100;flex:1;"
            :title="row.giftNm || row.giftId || ''">{{ row.giftNm || row.giftId || '-' }}</span>
          <button type="button" title="\uC9C0\uAE09\uB41C \uC0AC\uC740\uD488 \uBCF4\uAE30"
            style="border:none;background:none;padding:0;margin-left:1px;font-size:8px;line-height:1;color:#999;cursor:pointer;flex-shrink:0;"
            @click.stop="openPromoModal(row)">\u{1F50D}</button>
        </div>
        <span v-else style="color:#d8d8d8;font-size:13px;">-</span>
      </template>

      <template #cell-_vouchers="{ row }">
        <template v-if="row.erpVouchers ? row.erpVouchers.length : false">
          <div v-for="v in row.erpVouchers" :key="v.typeCd"
            style="display:flex;align-items:center;gap:3px;margin-bottom:2px;white-space:nowrap;">
            <span style="font-size:9px;color:#555;font-family:monospace;min-width:20px;">{{ fnErpVoucherTypeNm(v.typeCd) }}</span>
            <span :class="'badge ' + fnErpVoucherBadge(v.statusCd)" style="font-size:9px;padding:0 3px;">{{ fnErpVoucherLbl(v.statusCd) }}</span>
            <span v-if="v.voucherNo" style="font-size:9px;color:#777;font-family:monospace;">{{ v.voucherNo.substring(0, 8) }}</span>
          </div>
        </template>
        <span v-else-if="row.voucherStatusCd" :class="'badge ' + fnVoucherBadge(row.voucherStatusCd)" style="font-size:10px;">{{ fnVoucherLbl(row.voucherStatusCd) }}</span>
        <span v-else style="color:#d8d8d8;font-size:13px;">\xB7</span>
      </template>

      <template #cell-_actions="{ row }">
        <div class="actions" @click.stop>
          <button class="btn btn_row_edit" @click.stop="handleRowEdit(row)">\uC218\uC815</button>
        </div>
      </template>

    </bo-group-table>
    <bo-pager v-if="listGridPager.pageTotalCount > 0" :pager="listGridPager"
      :on-set-page="n => handleBtnAction('items-pager-setPage', n)"
      :on-size-change="() => handleSelectAction('items-pager-sizeChange')" />
    <bo-excel-down-modal :show="excelModal.show" domain="odOrderItem" area-nm="\uC8FC\uBB38\uD56D\uBAA9"
      :columns="columns.listGrid" ui-nm="\uC8FC\uBB38\uD56D\uBAA9\uAD00\uB9AC" :params="buildExcelParams()"
      @close="excelModal.show = false" />
  </bo-container>

  <!-- ===== \u25A0. \uC120\uD0DD \uD31D\uC5C5 ======================================================= -->
  <bo-cm-popup-modal popup-cmd="cmPopup-member-pick" popup-code="member" :show="picks.member" :on-callback="fnCallbackModal" />
  <bo-cm-popup-modal popup-cmd="cmPopup-order-pick"  popup-code="order"  :show="picks.order"  :on-callback="fnCallbackModal" />
  <bo-cm-popup-modal popup-cmd="cmPopup-vendor-pick" popup-code="vendor" :show="picks.vendor" :on-callback="fnCallbackModal" />
  <bo-cm-popup-modal popup-cmd="cmPopup-brand-pick"  popup-code="brand"  :show="picks.brand"  :on-callback="fnCallbackModal" />
  <bo-cm-popup-modal popup-cmd="cmPopup-md-pick"     popup-code="user"   :show="picks.md"     :on-callback="fnCallbackModal" />

  <!-- ===== \u25A0. \uD504\uB85C\uBAA8\uC158 \uC0C1\uC138 \uBAA8\uB2EC (\uD560\uC778/\uCFE0\uD3F0/\uC801\uB9BD\uAE08/\uC0AC\uC740\uD488 \u{1F50D} \uC544\uC774\uCF58 \uACF5\uC6A9) ======================= -->
  <bo-modal :show="promoModal.show" title="\uC801\uC6A9\uB41C \uD504\uB85C\uBAA8\uC158 \uC0C1\uC138" width="720px" @close="closePromoModal">
    <div v-if="promoModal.row">
      <div style="font-size:13px;color:#333;margin-bottom:10px;">
        <b>{{ promoModal.row.prodNm || '-' }}</b>
        <span style="color:#999;font-size:11px;margin-left:6px;">#{{ promoModal.row.orderItemId }}</span>
      </div>

      <div class="card" style="padding:10px 14px;margin-bottom:12px;background:#fafafa;">
        <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:6px;">\uAE08\uC561\uACC4\uC0B0</div>
        <div style="display:flex;flex-direction:column;gap:3px;font-size:12px;">
          <div style="display:flex;justify-content:space-between;">
            <span>\uC8FC\uBB38\uAE08\uC561</span><span>{{ Number(promoModal.row.itemOrderAmt || 0).toLocaleString() }}\uC6D0</span>
          </div>
          <div style="display:flex;justify-content:space-between;color:#c2410c;">
            <span>- \uD560\uC778 \uC801\uC6A9\uC561</span><span>{{ Number(promoModal.row.discntUsageAmt || 0).toLocaleString() }}\uC6D0</span>
          </div>
          <div style="display:flex;justify-content:space-between;color:#c2410c;">
            <span>- \uCFE0\uD3F0 \uD560\uC778\uC561</span><span>{{ Number(promoModal.row.couponUsageAmt || 0).toLocaleString() }}\uC6D0</span>
          </div>
          <div style="display:flex;justify-content:space-between;border-top:1px solid #e0e0e0;padding-top:4px;font-weight:700;color:#15803d;">
            <span>= \uD655\uC815\uAE08\uC561</span><span>{{ Number(promoModal.row.itemCompletedAmt || 0).toLocaleString() }}\uC6D0</span>
          </div>
          <div style="display:flex;justify-content:space-between;color:#6a1b9a;margin-top:4px;">
            <span>\uC801\uB9BD\uAE08 \uC0AC\uC6A9 (\uBCC4\uB3C4 \uACB0\uC81C\uC218\uB2E8, \uC0C1\uD488\uAE08\uC561 \uACC4\uC0B0\uACFC \uBB34\uAD00)</span><span>{{ Number(promoModal.row.saveUsageAmt || 0).toLocaleString() }}\uC6D0</span>
          </div>
        </div>
      </div>

      <div v-if="promoModal.loading" style="text-align:center;padding:20px;color:#999;">\uBD88\uB7EC\uC624\uB294 \uC911...</div>
      <template v-else>
        <div style="margin-bottom:10px;">
          <div style="font-size:12px;font-weight:700;color:#e65100;margin-bottom:4px;">\uD560\uC778 ({{ promoModal.discounts.length }}\uAC74)</div>
          <table v-if="promoModal.discounts.length" class="admin-table" style="font-size:11px;">
            <thead><tr><th>\uD560\uC778\uBA85</th><th>\uC720\uD615</th><th>\uAC12</th><th>\uD560\uC778\uAE08\uC561</th><th>\uC801\uC6A9\uC77C\uC2DC</th></tr></thead>
            <tbody>
              <tr v-for="d in promoModal.discounts" :key="d.discntUsageId">
                <td>{{ d.discntNm || d.discntId }}</td>
                <td style="text-align:center;">{{ d.discntTypeCd || '-' }}</td>
                <td style="text-align:right;">{{ d.discntValue != null ? d.discntValue : '-' }}</td>
                <td style="text-align:right;">{{ Number(d.discntAmt || 0).toLocaleString() }}\uC6D0</td>
                <td style="text-align:center;">{{ d.usedDate ? String(d.usedDate).substring(0, 16).replace('T', ' ') : '-' }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else style="color:#bbb;font-size:11px;">\uC801\uC6A9\uB41C \uD560\uC778 \uC5C6\uC74C</div>
        </div>

        <div style="margin-bottom:10px;">
          <div style="font-size:12px;font-weight:700;color:#e65100;margin-bottom:4px;">\uCFE0\uD3F0 ({{ promoModal.coupons.length }}\uAC74)</div>
          <table v-if="promoModal.coupons.length" class="admin-table" style="font-size:11px;">
            <thead><tr><th>\uCFE0\uD3F0\uBA85</th><th>\uCF54\uB4DC</th><th>\uD560\uC778\uAE08\uC561</th><th>\uC0AC\uC6A9\uC77C\uC2DC</th></tr></thead>
            <tbody>
              <tr v-for="c in promoModal.coupons" :key="c.couponUsageId">
                <td>{{ c.couponNm || c.couponId }}</td>
                <td style="font-family:monospace;">{{ c.couponCode || '-' }}</td>
                <td style="text-align:right;">{{ Number(c.discountAmt || 0).toLocaleString() }}\uC6D0</td>
                <td style="text-align:center;">{{ c.usedDate ? String(c.usedDate).substring(0, 16).replace('T', ' ') : '-' }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else style="color:#bbb;font-size:11px;">\uC801\uC6A9\uB41C \uCFE0\uD3F0 \uC5C6\uC74C</div>
        </div>

        <div style="margin-bottom:10px;">
          <div style="font-size:12px;font-weight:700;color:#e65100;margin-bottom:4px;">\uC801\uB9BD\uAE08 \uC0AC\uC6A9 ({{ promoModal.saves.length }}\uAC74)</div>
          <table v-if="promoModal.saves.length" class="admin-table" style="font-size:11px;">
            <thead><tr><th>\uC0AC\uC6A9\uAE08\uC561</th><th>\uC0AC\uC6A9 \uD6C4 \uC794\uC561</th><th>\uC0AC\uC6A9\uC77C\uC2DC</th></tr></thead>
            <tbody>
              <tr v-for="s in promoModal.saves" :key="s.saveUsageId">
                <td style="text-align:right;">{{ Number(s.useAmt || 0).toLocaleString() }}\uC6D0</td>
                <td style="text-align:right;">{{ Number(s.balanceAmt || 0).toLocaleString() }}\uC6D0</td>
                <td style="text-align:center;">{{ s.usedDate ? String(s.usedDate).substring(0, 16).replace('T', ' ') : '-' }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else style="color:#bbb;font-size:11px;">\uC801\uB9BD\uAE08 \uC0AC\uC6A9 \uB0B4\uC5ED \uC5C6\uC74C</div>
        </div>

        <div>
          <div style="font-size:12px;font-weight:700;color:#e65100;margin-bottom:4px;">\uC0AC\uC740\uD488</div>
          <div v-if="promoModal.row.giftId" style="font-size:12px;">
            {{ promoModal.row.giftNm || promoModal.row.giftId }}
            <span style="color:#999;font-size:10px;margin-left:6px;">#{{ promoModal.row.giftId }}</span>
          </div>
          <div v-else style="color:#bbb;font-size:11px;">\uC9C0\uAE09\uB41C \uC0AC\uC740\uD488 \uC5C6\uC74C</div>
        </div>
      </template>
    </div>
  </bo-modal>
</bo-page>
`};
