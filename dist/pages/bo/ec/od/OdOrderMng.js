window.OdOrderMng={name:"OdOrderMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}},initSearchValue:{type:String,default:null}},setup(h){const{ref:Ce,reactive:u,computed:A,watch:Ie,onMounted:H}=Vue,g=window.boApp.showToast,O=window.boApp.showConfirm,Q=window.boApp.showRefModal,i=u([]),k=u([]),C=u([]),n=u({bulkOpen:!1,loading:!1,error:null,bulkTab:"status",sortKey:"",sortDir:"asc"}),b=u({order_statuses:[],payment_methods:[],dliv_statuses:[],order_date_types:[],approval_actions:[],req_targets:[],date_range_opts:[]}),N=u([]),E={reg:{asc:"orderDate asc",desc:"orderDate desc"}},I=(e,t={})=>{if(e==="searchParam-list"){if((s.dateRangeStart||s.dateRangeEnd)&&!s.dateRangeType){g("\uAE30\uAC04 \uAC80\uC0C9 \uC2DC \uAE30\uAC04\uC720\uD615\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}return p.pageNo=1,T("DEFAULT")}else{if(e==="searchParam-reset")return Object.assign(s,R),n.sortKey="",n.sortDir="asc",p.pageNo=1,S(),T();if(e==="searchParam-dateRange")return te();if(e==="orders-add"){if(t&&(t.ctrlKey||t.metaKey||t.button===1))return h.openNewWindow("odOrderDtl",null,"new");d.selectedId="__new__",d.openMode="edit",d.active=!0,d.resetSeq++,d.reloadTrigger++;return}else{if(e==="actionsModal-open")return ke();if(e==="actionsModal-close"){n.bulkOpen=!1;return}else if(e==="actionsModal-tabChange"){n.bulkTab=t,Object.keys(y).forEach(a=>delete y[a]);return}else{if(e==="actionsModal-apply")return we();if(e==="actionsModal-apprToChange")return he();if(e==="actionsModal-reqTargetChange")return B();if(e==="detailPanel-close")return S();if(e==="memberPickModal-open"){M.open=!0;return}else if(e==="memberPickModal-close"){M.open=!1;return}else if(e==="memberPickModal-clear"){s.memberId="",s.memberNm="";return}else{if(e==="orders-sort")return ee(t);if(e==="orders-pager-setPage"){t>=1&&t<=p.pageTotalPage&&(p.pageNo=t,T("PAGE_CLICK"));return}else console.warn("[handleBtnAction] unknown cmd:",e)}}}}},J=(e,t={})=>{if(e==="orders-pager-sizeChange")return p.pageNo=1,T("DEFAULT");if(e==="orders-rowRefClick")return Q(t.type,t.id);if(e==="orders-rowToggleCheck"){m.has(t)?m.delete(t):m.add(t);return}else if(e==="orders-rowToggleCheckAll"){G.value?i.forEach(a=>m.delete(a.orderId)):i.forEach(a=>m.add(a.orderId));return}else if(e==="memberPickModal-select"){s.memberId=t.memberId,s.memberNm=t.memberNm||t.loginId||t.memberId;return}else console.warn("[handleSelectAction] unknown cmd:",e)},X=(e,t,a,o={})=>{if(e==="orders-cellClick"){if(t==="btn_row_edit"){if(o&&(o.ctrlKey||o.metaKey||o.button===1))return h.openNewWindow("odOrderDtl",a.orderId,"edit");window._odOrderDtlState&&(window._odOrderDtlState.activeTab="items"),d.selectedId=a.orderId,d.openMode="edit",d.active=!0,d.reloadTrigger++;return}if(t==="btn_row_delete")return ce(a);if(t==="btn_row_kanban"){if(o&&(o.ctrlKey||o.metaKey||o.button===1))return ve(a.orderId);h.navigate("odOrderKanban",{orderId:a.orderId});return}const c=["__no__"];if(o.col&&o.col.link||c.includes(t)){if(o.ctrlKey||o.metaKey||o.button===1)return h.openNewWindow("odOrderDtl",a.orderId);window._odOrderDtlState&&(window._odOrderDtlState.activeTab="items"),d.selectedId=a.orderId,d.openMode="view",d.active=!0,d.reloadTrigger++;return}}else console.warn("[handleGridCellAction] unknown cmd:",e)},Z=(e,t,a)=>{if(e==="cmPopup-member-pick"){if(a==null){M.open=!1;return}s.memberId=a.selId,s.memberNm=a.selName||a.loginId||a.selId;return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},s=u({searchType:"",searchValue:"",memberId:"",memberNm:"",dateRangeType:"",dateRange:"",dateRangeStart:"",dateRangeEnd:"",orderStatusCd:""}),R={},p=u({pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),d=u({selectedId:"__new__",openMode:"view",reloadTrigger:0,active:!1,resetSeq:0}),m=u(new Set),D=boConsts.APPROVAL_TMPL,r=u({status:"",payMethod:"",apprAction:"",apprComment:"",apprToUserId:"",apprToNm:"",apprToPhone:"",apprToEmail:"",reqTarget:"\uC8FC\uBB38",reqTargetNm:"",reqAmount:0,reqReason:"",tmplMsg:D}),y=u({}),M=u({open:!1}),q=()=>{const{sortKey:e,sortDir:t}=n;return!e||!E[e]?{}:{sort:E[e][t]}},ee=e=>{n.sortKey===e?n.sortDir==="asc"?n.sortDir="desc":(n.sortKey="",n.sortDir="asc"):(n.sortKey=e,n.sortDir="asc"),p.pageNo=1,T()},T=async(e="DEFAULT")=>{var t,a,o,c,f,_,l,P,F,z,K,V,j,Y;n.loading=!0;try{const v={pageNo:p.pageNo,pageSize:p.pageSize,...q(),...coUtil.cofOmitEmpty(s)};v.searchValue&&!v.searchType&&(v.searchType="orderId,memberNm,loginId,recvNm,recvPhone");const[x,W]=await Promise.all([boApiSvc.odOrder.getPage(v,"\uC8FC\uBB38\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C").catch(()=>({data:{data:{pageList:[],pageTotalCount:0}}})),boApiSvc.mbMember.getPage({pageNo:1,pageSize:1e4},"\uC8FC\uBB38\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C").catch(()=>({data:{data:{pageList:[]}}}))]);i.splice(0,i.length,...((a=(t=x.data)==null?void 0:t.data)==null?void 0:a.pageList)||((c=(o=x.data)==null?void 0:o.data)==null?void 0:c.list)||[]),k.splice(0,k.length,...((_=(f=W.data)==null?void 0:f.data)==null?void 0:_.pageList)||((P=(l=W.data)==null?void 0:l.data)==null?void 0:P.list)||[]),C.splice(0,C.length),p.pageTotalCount=((z=(F=x.data)==null?void 0:F.data)==null?void 0:z.pageTotalCount)||0,p.pageTotalPage=((V=(K=x.data)==null?void 0:K.data)==null?void 0:V.pageTotalPage)||coUtil.cofTotalPage(p),coUtil.cofBuildPagerNums(p),Object.assign(p.pageCond,((Y=(j=x.data)==null?void 0:j.data)==null?void 0:Y.pageCond)||p.pageCond),n.error=null}catch(v){console.error("[catch-info]",v),n.error=v.message,i.splice(0,i.length),k.splice(0,k.length),C.splice(0,C.length)}finally{n.loading=!1}},te=()=>{boUtil.bofApplyDateRange(s),p.pageNo=1},re=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["ORDER_STATUS_CD","PAYMENT_METHOD","DLIV_STATUS","ORDER_DATE_TYPE","APPROVAL_ACTION","REQ_TARGET","DATE_RANGE_OPT"],{compNm:"OdOrderMng"}),b.order_statuses=e.sgGetGrpCodes("ORDER_STATUS_CD"),b.payment_methods=e.sgGetGrpCodes("PAYMENT_METHOD"),b.dliv_statuses=e.sgGetGrpCodes("DLIV_STATUS"),b.order_date_types=e.sgGetGrpCodes("ORDER_DATE_TYPE"),b.approval_actions=e.sgGetGrpCodes("APPROVAL_ACTION"),b.req_targets=e.sgGetGrpCodes("REQ_TARGET"),b.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT"),N.splice(0,N.length,...await window.boUtil.bofLoadSiteOptions())};H(async()=>{const t=new Date().getFullYear();Object.assign(s,{dateRangeType:"order_date",dateRangeStart:`${t-3}-01-01`,dateRangeEnd:`${t}-12-31`}),await re(),h.initSearchValue&&(s.searchValue=h.initSearchValue,s.dateRangeStart="",s.dateRangeEnd="");const a=new URLSearchParams(window.location.search),o=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(s).forEach(c=>{!o.includes(c)&&a.has(c)&&(s[c]=a.get(c))}),await T("DEFAULT"),Object.assign(R,s)});const S=()=>{d.selectedId="__new__",d.openMode="view",d.active=!1,d.resetSeq++},ae=(e,t={})=>{if(e==="odOrderMng"){t.reload&&T("RELOAD"),S();return}if(e==="__cancelEdit__"){if(d.selectedId&&d.selectedId!=="__new__"){d.openMode="view";return}S();return}if(e==="__closeDtl__"){S();return}if(e==="__switchToEdit__"){d.openMode="edit";return}h.navigate(e,t)},oe=A(()=>d.selectedId==="__new__"?null:d.selectedId),le=A(()=>`${d.selectedId}_${d.openMode}_${d.resetSeq}`),ne=boConsts.ORDER_STATUS_BADGE,de=e=>coUtil.cofCodeBadge("ORDER_STATUS_CD",e,ne[e]||"badge-gray"),se=boConsts.PAY_STATUS_BADGE,ie=e=>coUtil.cofCodeBadge("PAY_STATUS",e,se[e]||"badge-gray"),ce=async e=>{var o,c;if(!await O("\uC0AD\uC81C",`[${e.orderId}]\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)||!Array.isArray(i))return;const a=i.findIndex(f=>f.orderId===e.orderId);a!==-1&&i.splice(a,1),d.selectedId===e.orderId&&S();try{const f=await boApiSvc.odOrder.remove(e.orderId,"\uC8FC\uBB38\uAD00\uB9AC","\uC0AD\uC81C");g&&g("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(f){console.error("[catch-info]",f);const _=((c=(o=f.response)==null?void 0:o.data)==null?void 0:c.message)||f.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";g&&g(_,"error",0)}},pe=u({show:!1}),ue=()=>{const e={...q(),...coUtil.cofOmitEmpty(s)};return e.searchValue&&!e.searchType&&(e.searchType="orderId,memberNm,loginId,recvNm,recvPhone"),e},$=e=>(Array.isArray(C)?C:[]).find(t=>t.orderId===e),be=e=>coConsts.claimTypeColor(e),me={\uACC4\uC88C\uC774\uCCB4:{bg:"#e3f2fd",fg:"#1565c0"},\uCE74\uB4DC\uACB0\uC81C:{bg:"#f3e5f5",fg:"#6a1b9a"},\uCE90\uC26C:{bg:"#fff3e0",fg:"#e65100"}},ge=e=>{const t=me[e]||{bg:"#e8f5e9",fg:"#2e7d32"};return`font-size:11px;padding:2px 8px;border-radius:10px;font-weight:600;background:${t.bg};color:${t.fg};`},fe=e=>{if(e.orderItemCnt!=null)return Number(e.orderItemCnt);const t=(e.prodNm||"").match(/외\s*(\d+)/);return t?parseInt(t[1])+1:1},U=e=>m.has(e),G=A(()=>i.length>0&&i.every(e=>m.has(e.orderId))),he=()=>{const e=k.find(t=>String(t.memberId)===String(r.apprToUserId));e?(r.apprToNm=e.memberNm||"",r.apprToPhone=e.memberPhone||"",r.apprToEmail=e.memberEmail||""):(r.apprToNm="",r.apprToPhone="",r.apprToEmail="")},B=()=>{const e=Array.from(m),t=window.safeArrayUtils.safeFind(Array.isArray(i)?i:[],a=>e.includes(a.orderId));if(!t){r.reqTargetNm="";return}r.reqTarget==="\uC8FC\uBB38"?r.reqTargetNm=t.orderId||"":r.reqTarget==="\uC0C1\uD488"?r.reqTargetNm=t.prodNm||"":r.reqTarget==="\uBC30\uC1A1"?r.reqTargetNm="\uBC30\uC1A1("+t.orderId+")":r.reqTargetNm=t.orderId||""},ye=A(()=>(r.tmplMsg||"").replace("{target}",r.reqTarget||"-").replace("{targetNm}",r.reqTargetNm||"-").replace("{amount}",Number(r.reqAmount||0).toLocaleString()).replace("{reason}",r.reqReason||"-")),ke=()=>{if(!m.size){g("\uD56D\uBAA9\uC744 \uC120\uD0DD\uD558\uC138\uC694.","error");return}n.bulkTab="status",Object.assign(r,{status:"",payMethod:"",apprAction:"",apprComment:"",apprToUserId:"",apprToNm:"",apprToPhone:"",apprToEmail:"",reqTarget:"\uC8FC\uBB38",reqTargetNm:"",reqAmount:0,reqReason:"",tmplMsg:D}),B(),n.bulkOpen=!0,Object.keys(y).forEach(e=>delete y[e])},Te=A(()=>{if(!n.bulkOpen)return"";const e=Array.from(m),t=window.safeArrayUtils.safeFilter(i,o=>e.includes(o.orderId));let a=[];if(n.bulkTab==="status"){if(!r.status)return"";a=t.map(o=>`- [${o.orderId} / ${o.memberNm}] [\uC8FC\uBB38\uAD00\uB9AC] \uC8FC\uBB38\uC0C1\uD0DC \uBCC0\uACBD: ${o.orderStatusCd||"-"} \u2192 ${r.status}`)}else if(n.bulkTab==="payMethod"){if(!r.payMethod)return"";a=t.map(o=>`- [${o.orderId} / ${o.memberNm}] [\uC8FC\uBB38\uAD00\uB9AC] \uACB0\uC81C\uC218\uB2E8 \uBCC0\uACBD: ${o.payMethodCd||"-"} \u2192 ${r.payMethod}`)}else if(n.bulkTab==="approval"){if(!r.apprAction)return"";a=t.map(o=>`- [${o.orderId} / ${o.memberNm}] [\uC8FC\uBB38\uAD00\uB9AC] \uACB0\uC7AC\uCC98\uB9AC: ${r.apprAction}${r.apprComment?" / "+r.apprComment:""}`)}else if(n.bulkTab==="approvalReq"){if(!r.apprToUserId)return"";a=t.map(o=>`- [${o.orderId} / ${o.memberNm}] [\uC8FC\uBB38\uAD00\uB9AC] \uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD \u2192 ${r.apprToNm}(${r.apprToUserId}) / \uB300\uC0C1:${r.reqTarget}-${r.reqTargetNm} / \uAE08\uC561:${Number(r.reqAmount||0).toLocaleString()}\uC6D0`)}return a.length?`\u203B \uCD1D ${a.length}\uAC74
`+a.join(`
`):""}),we=async()=>{var f,_;const e=Array.from(m);if(!e.length){g("\uD56D\uBAA9\uC744 \uC120\uD0DD\uD558\uC138\uC694.","error"),n.bulkOpen=!1;return}const t={status:{field:"status",label:"\uC8FC\uBB38\uC0C1\uD0DC",path:"orders/bulk-status"},payMethod:{field:"payMethod",label:"\uACB0\uC81C\uC218\uB2E8",path:"orders/bulk-payMethod"},approval:{field:"apprAction",label:"\uACB0\uC7AC\uCC98\uB9AC",path:"orders/bulk-approval"},approvalReq:{field:"apprToUserId",label:"\uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD",path:"orders/bulk-approvalReq"}}[n.bulkTab];if(Object.keys(y).forEach(l=>delete y[l]),!r[t.field]){y[t.field]=`${t.label}\uC744(\uB97C) \uC120\uD0DD\uD574\uC8FC\uC138\uC694.`,g("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}if(!await O(`\uC77C\uAD04 ${t.label}`,`\uC120\uD0DD\uD55C ${e.length}\uAC74\uC5D0 \uB300\uD574 ${t.label} \uC791\uC5C5\uC744 \uC9C4\uD589\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;let c=[];n.bulkTab==="status"&&(window.safeArrayUtils.safeForEach(i,l=>{e.includes(l.orderId)&&(l.orderStatusCd=r.status)}),c=e.map(l=>({orderId:l,orderStatusCd:r.status}))),n.bulkTab==="payMethod"&&(window.safeArrayUtils.safeForEach(i,l=>{e.includes(l.orderId)&&(l.payMethodCd=r.payMethod)}),c=e.map(l=>({orderId:l,payMethodCd:r.payMethod}))),n.bulkTab==="approval"&&(window.safeArrayUtils.safeForEach(i,l=>{e.includes(l.orderId)&&(l.apprStatus=r.apprAction,l.apprComment=r.apprComment)}),c=e.map(l=>({orderId:l}))),n.bulkTab==="approvalReq"&&(window.safeArrayUtils.safeForEach(i,l=>{e.includes(l.orderId)&&(l.apprToUserId=r.apprToUserId,l.apprToNm=r.apprToNm,l.reqTarget=r.reqTarget,l.reqTargetNm=r.reqTargetNm,l.reqAmount=Number(r.reqAmount||0),l.reqReason=r.reqReason)}),c=e.map(l=>({orderId:l}))),m.clear(),n.bulkOpen=!1;try{const l=await boApiSvc.odOrder.saveList(n.bulkTab,c,"\uC8FC\uBB38\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C");g&&g(`${e.length}\uAC74 \uCC98\uB9AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")}catch(l){console.error("[catch-info]",l);const P=((_=(f=l.response)==null?void 0:f.data)==null?void 0:_.message)||l.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";g&&g(P,"error",0)}},_e=Vue.toRef(n,"bulkOpen"),ve=e=>boUtil.bofOpenKanbanPopup(e,null,h.showToast),w={};w.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"orderId",label:"\uC8FC\uBB38ID"},{value:"memberNm",label:"\uD68C\uC6D0\uBA85"},{value:"loginId",label:"\uB85C\uADF8\uC778ID"},{value:"recvNm",label:"\uC218\uB839\uC778"},{value:"recvPhone",label:"\uC218\uB839\uC5F0\uB77D\uCC98"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"memberId",type:"pick",label:"\uD68C\uC6D0",nameKey:"memberNm",display:e=>e.memberNm||e.memberId,placeholder:"\uD68C\uC6D0 \uC120\uD0DD",onOpen:()=>I("memberPickModal-open"),onClear:()=>I("memberPickModal-clear")},{key:"orderStatusCd",type:"select",label:"\uC0C1\uD0DC",options:()=>b.order_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"dateRange",type:"dateRange",label:"\uC8FC\uBB38\uC77C",typeKey:"dateRangeType",startKey:"dateRangeStart",endKey:"dateRangeEnd",typeOptions:()=>b.order_date_types,rangeOptions:()=>b.date_range_opts,onRangeChange:()=>I("searchParam-dateRange")},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>N,nullLabel:"\uC804\uCCB4"}];const L=e=>e.orderStatusCd==="CANCELED"||e.orderStatusCd==="\uC790\uB3D9\uCDE8\uC18C"?"\uD658\uBD88\uC644\uB8CC":e.orderStatusCd==="\uC785\uAE08\uB300\uAE30"?"\uBBF8\uACB0\uC81C":"\uACB0\uC81C\uC644\uB8CC";w.listGrid=[{key:"orderId",label:"\uC8FC\uBB38ID",link:!0,cellInnerStyle:e=>d.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"memberNm",label:"\uD68C\uC6D0",refLink:"member",refKey:"memberId",fmt:(e,t)=>`${t.memberNm||"-"}  #${t.memberId||t.sessionKey||"-"}`},{key:"orderDate",label:"\uC8FC\uBB38\uC77C\uC2DC",sortKey:"reg",style:"white-space:nowrap;",fmt:e=>e?String(e).slice(0,16):"-"},{key:"prodNm",label:"\uC0C1\uD488",fmt:(e,t)=>`${t.prodNm||""} (${fe(t)}\uAC1C)`},{key:"payAmt",label:"\uACB0\uC81C\uAE08\uC561",fmt:e=>coUtil.cofWon(e)},{key:"payMethodCd",label:"\uACB0\uC81C\uC218\uB2E8",fmt:(e,t)=>t.payMethodCdNm||t.payMethodCd||"-",cellInnerStyle:e=>ge(e)},{key:"_payStatus",label:"\uACB0\uC81C\uC0C1\uD0DC",fmt:(e,t)=>L(t),badge:e=>ie(L(e))},{key:"orderStatusCd",label:"\uC8FC\uBB38\uC0C1\uD0DC",fmt:(e,t)=>t.orderStatusCdNm||t.orderStatusCd,badge:e=>de(e.orderStatusCd)},{key:"_claim",label:"\uD074\uB808\uC784\uC0C1\uD0DC",fmt:(e,t)=>{const a=$(t.orderId);return a?`${a.claimTypeCd} \xB7 ${a.claimStatusCdNm||a.claimStatusCd}`:"-"},cellInnerStyle:(e,t)=>{const a=$(t.orderId);return a?`font-size:10px;padding:2px 8px;border-radius:8px;color:#fff;font-weight:700;background:${be(a.claimTypeCd)};`:"font-size:11px;color:#ccc;"}},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;"}];const Ae=e=>(d.selectedId===e.orderId?"background:#fff8f9;":"")+(U(e.orderId)?"background:#eef6fd;":"");return w.apprContactForm=[{key:"apprToUserId",label:"\uCD94\uAC00\uACB0\uC7AC\uC790",type:"select",colSpan:2,nullLabel:"\uC120\uD0DD\uD558\uC138\uC694",required:!0,options:()=>k.map(e=>({value:e.memberId,label:`${e.memberNm} (${e.memberId})`})),onChange:()=>I("actionsModal-apprToChange")},{key:"apprToPhone",label:"\uC804\uD654\uBC88\uD638",type:"text",readonly:!0},{key:"apprToEmail",label:"\uC774\uBA54\uC77C",type:"text",readonly:!0}],w.apprTargetForm=[{key:"reqTarget",label:"\uC694\uCCAD\uB300\uC0C1",type:"select",nullable:!1,options:()=>b.req_targets,onChange:()=>I("actionsModal-reqTargetChange")},{key:"reqTargetNm",label:"\uC694\uCCAD\uB300\uC0C1\uBA85",type:"text",placeholder:"\uC218\uC815 \uAC00\uB2A5"}],w.apprDetailForm=[{key:"reqAmount",label:"\uC694\uCCAD\uAE08\uC561",type:"number",colSpan:2},{type:"rowBreak"},{key:"reqReason",label:"\uC694\uCCAD\uC0AC\uC720",type:"textarea",rows:2,placeholder:"(\uC120\uD0DD)"},{type:"rowBreak"},{key:"tmplMsg",label:"\uC804\uC1A1 \uD15C\uD50C\uB9BF",type:"slot",name:"tmplMsg",colSpan:2,hint:"\uCE58\uD658: {target} {targetNm} {amount} {reason}"}],w.bulkApprovalForm=[{key:"apprAction",label:"\uACB0\uC7AC\uCC98\uB9AC \uAD6C\uBD84",type:"select",nullLabel:"\uC120\uD0DD\uD558\uC138\uC694",required:!0,options:()=>b.approval_actions,colSpan:2},{type:"rowBreak"},{key:"apprComment",label:"\uACB0\uC7AC \uCF54\uBA58\uD2B8",type:"textarea",rows:2,placeholder:"(\uC120\uD0DD)"}],{columns:w,excelModal:pe,buildExcelParams:ue,orders:i,members:k,uiState:n,codes:b,searchParam:s,listGridPager:p,detailPanel:d,checked:m,bulkForm:r,bulkErrors:y,bulkOpen:_e,memberPick:M,handleBtnAction:I,handleSelectAction:J,handleGridCellAction:X,fnCallbackModal:Z,cfDetailEditId:oe,cfDetailKey:le,cfAllChecked:G,cfBuildTmplMsg:ye,cfBulkPreview:Te,selectedId:A(()=>d.selectedId),isChecked:U,fnGridRowStyle:Ae,inlineNavigate:ae}},template:`
<bo-page title="\uC8FC\uBB38\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" :columns="columns.baseSearch" :param="searchParam"
      @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uC8FC\uBB38\uBAA9\uB85D" :count-text="listGridPager.pageTotalCount + '\uAC74'">
    <template #toolbar-actions>
      <span v-if="checked.size" style="margin-right:10px;font-size:12px;color:#1565c0;font-weight:700;">
        \uC120\uD0DD {{ checked.size }}\uAC74
      </span>
      <button class="btn btn-blue btn-sm" :disabled="!checked.size" @click="handleBtnAction('actionsModal-open')">
        \u{1F4DD} \uBCC0\uACBD\uC791\uC5C5 \uC120\uD0DD
      </button>
      <button class="btn btn_excel" @click="excelModal.show = true">
        \u{1F4E5} \uC5D1\uC140
      </button>
      <button class="btn btn_new" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8\uCC3D"
        @click="handleBtnAction('orders-add', $event)"
        @auxclick="handleBtnAction('orders-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uADF8\uB9AC\uB4DC (\uAE30\uBCF8 \uC57D 10\uD589 \uB192\uC774 + \uD654\uBA74 \uB192\uC774 \uBC18\uC751\uD615 \uD655\uC7A5, \uCD08\uACFC \uC2DC \uB0B4\uBD80 \uC2A4\uD06C\uB864) =========== -->
    <div style="max-height:calc(100vh - 340px);min-height:340px;overflow-y:auto;border:1px solid #eef0f3;border-radius:6px;background:#fff;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare selectable :columns="columns.listGrid" :rows="orders" row-key="orderId" :selected-key="detailPanel.selectedId"
        :sort-state="uiState" :is-checked="isChecked" :all-checked="cfAllChecked"
        :row-style="fnGridRowStyle" empty-text="\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
        @sort="key => handleBtnAction('orders-sort', key)"
        @toggle-check="id => handleSelectAction('orders-rowToggleCheck', id)"
        @toggle-check-all="handleSelectAction('orders-rowToggleCheckAll')"
        grid-id="orders-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
        @ref-click="({type,id}) => handleSelectAction('orders-rowRefClick', {type, id})" row-actions
            table-max-height="540px">
        <template #row-actions="{ row, gridId }">
          <div class="actions">
            <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_edit', row, $event)">\uC218\uC815</button>
            <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_delete', row)">\uC0AD\uC81C</button>
            <button class="btn btn_row_kanban" title="Ctrl+\uD074\uB9AD/\uD720\uD074\uB9AD: \uC0C8 \uCC3D\uC73C\uB85C \uCE78\uBC18 \uC5F4\uAE30" style="background:#8b5cf6;color:#fff;border:none;border-radius:5px;padding:3px 7px;font-size:11px;font-weight:600;cursor:pointer;" @click.stop="handleGridCellAction(gridId, 'btn_row_kanban', row, $event)" @auxclick.stop="handleGridCellAction(gridId, 'btn_row_kanban', row, $event)">\u{1F4CB} \uCE78\uBC18</button>
          </div>
        </template>
      </bo-grid>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC800: \uD55C \uC904 \uD45C\uC2DC + \uCE74\uB4DC \uD558\uB2E8 \uAE54\uB054 \uB9C8\uAC10 ============================= -->
    <div style="margin-top:6px;white-space:nowrap;overflow-x:auto;">
      <bo-pager :pager="listGridPager" :on-set-page="n => handleBtnAction('orders-pager-setPage', n)"
        :on-size-change="() => handleSelectAction('orders-pager-sizeChange')"
        style="margin-top:0;min-height:34px;" />
    </div>
  </bo-container>
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138: OrderDtl \uC784\uBCA0\uB4DC (\uD56D\uC0C1 \uD45C\uC2DC, \uC9C4\uC785 \uC2DC \uBE48 \uC2E0\uADDC \uD3FC) ===================== -->
  <od-order-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    />
  <!-- ===== \u25A1. \uD558\uB2E8 \uC0C1\uC138: OrderDtl \uC784\uBCA0\uB4DC ===================================== -->
  <!-- ===== \u25A0. \uBCC0\uACBD\uC791\uC5C5 \uBAA8\uB2EC (actionsModal) ===================================== -->
  <bo-modal :show="bulkOpen" :title="'\u{1F4DD} \uBCC0\uACBD\uC791\uC5C5 (' + checked.size + '\uAC74 \uC120\uD0DD)'" width="640px" max-height="90vh" box-pad="0" @close="handleBtnAction('actionsModal-close')">
    <div style="display:flex;flex-direction:column;max-height:76vh;">
      <div style="display:flex;gap:6px;padding:10px 14px 0;background:#fafafa;">
        <button v-for="t in [{id:'status',label:'\uC8FC\uBB38\uC0C1\uD0DC'},{id:'payMethod',label:'\uACB0\uC81C\uC218\uB2E8'},{id:'approval',label:'\uACB0\uC7AC\uCC98\uB9AC'},{id:'approvalReq',label:'\uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD'}]" :key="t?.id"
          @click="handleBtnAction('actionsModal-tabChange', t.id)"
          :style="{flex:1,padding:'8px 12px',border:'none',cursor:'pointer',fontSize:'12.5px',borderRadius:'8px 8px 0 0',fontWeight: uiState.bulkTab===t.id?800:600,background: uiState.bulkTab===t.id?'#fff':'transparent',color: uiState.bulkTab===t.id?'#e8587a':'#888',borderBottom: uiState.bulkTab===t.id?'2px solid #e8587a':'2px solid transparent'}">
          {{ t.label }}
        </button>
      </div>
      <div style="padding:20px 18px;flex:1;overflow-y:auto;min-height:280px;">
        <div v-if="uiState.bulkTab==='status'">
          <label class="form-label">
            \uBCC0\uACBD\uD560 \uC8FC\uBB38\uC0C1\uD0DC
          </label>
          <select class="form-control" v-model="bulkForm.status">
            <option value="">\uC120\uD0DD\uD558\uC138\uC694</option>
            <option v-for="c in codes.order_statuses" :key="c.codeValue" :value="c.codeValue">
              {{ c.codeLabel }}
            </option>
          </select>
          <span v-if="bulkErrors.status" class="field-error">{{ bulkErrors.status }}</span>
        </div>
        <div v-if="uiState.bulkTab==='payMethod'">
          <label class="form-label">
            \uBCC0\uACBD\uD560 \uACB0\uC81C\uC218\uB2E8
          </label>
          <select class="form-control" v-model="bulkForm.payMethod">
            <option value="">\uC120\uD0DD\uD558\uC138\uC694</option>
            <option v-for="c in codes.payment_methods" :key="c.codeValue" :value="c.codeValue">
              {{ c.codeLabel }}
            </option>
          </select>
          <span v-if="bulkErrors.payMethod" class="field-error">{{ bulkErrors.payMethod }}</span>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uACB0\uC7AC\uCC98\uB9AC (BoFormArea \uC790\uB3D9 \uB80C\uB354) =========================== -->
        <div v-if="uiState.bulkTab==='approval'">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================ -->
          <bo-form-area :columns="columns.bulkApprovalForm" :form="bulkForm" :errors="bulkErrors"
            :cols="2" :show-actions="false" />
        </div>
        <div v-if="uiState.bulkTab==='approvalReq'">
          <bo-form-area :columns="columns.apprContactForm" :form="bulkForm" :errors="bulkErrors"
            :cols="2" :show-actions="false" />
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC694\uCCAD\uB300\uC0C1/\uC694\uCCAD\uB300\uC0C1\uBA85 (BoFormArea \uC790\uB3D9 \uB80C\uB354) =================== -->
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================ -->
          <bo-form-area :columns="columns.apprTargetForm" :form="bulkForm" :errors="bulkErrors"
            :cols="2" :show-actions="false" />
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC694\uCCAD\uAE08\uC561/\uC694\uCCAD\uC0AC\uC720/\uC804\uC1A1\uD15C\uD50C\uB9BF (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============== -->
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================ -->
          <bo-form-area :columns="columns.apprDetailForm" :form="bulkForm" :errors="bulkErrors"
            :cols="2" :show-actions="false">
            <template #tmplMsg>
              <textarea class="form-control" v-model="bulkForm.tmplMsg" rows="4" style="font-family:monospace;font-size:11.5px;"></textarea>
                <div style="margin-top:6px;padding:8px 10px;background:#f6f8fa;border-radius:6px;font-family:monospace;font-size:11.5px;white-space:pre-wrap;color:#333;border:1px dashed #d0d7de;">
                  {{ cfBuildTmplMsg }}
                </div>
              </template>
            </bo-form-area>
        </div>
      </div>
      <!-- \uD0ED \uBCF8\uBB38 \uB05D (\uC704 div\uB294 padding:20px 18px;flex:1;overflow-y:auto;) -->
      <div style="padding:10px 18px 14px;border-top:1px solid #eee;background:#fafafa;flex-shrink:0;">
        <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:6px;">
          \u{1F4CB} \uC791\uC5C5\uB0B4\uC6A9
        </div>
        <textarea readonly :value="cfBulkPreview || '\uD0ED\uC5D0\uC11C \uBCC0\uACBD\uAC12\uC744 \uC120\uD0DD\uD558\uBA74 \uC791\uC5C5\uB0B4\uC6A9\uC774 \uC790\uB3D9\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4.'"
          style="width:100%;min-height:120px;max-height:200px;font-family:monospace;font-size:11.5px;padding:8px;border:1px solid #ddd;border-radius:6px;background:#fff;resize:vertical;"></textarea>
      </div>
      <div style="padding:12px 18px;border-top:1px solid #eee;display:flex;justify-content:flex-end;gap:6px;background:#fff;flex-shrink:0;">
        <button class="btn btn_cancel" @click="handleBtnAction('actionsModal-close')">
          \uCDE8\uC18C
        </button>
        <button class="btn btn_save" @click="handleBtnAction('actionsModal-apply')">
          \uC800\uC7A5
        </button>
      </div>
    </div>
  </bo-modal>
  <!-- ===== \u25A1. \uBCC0\uACBD\uC791\uC5C5 \uBAA8\uB2EC ================================================= -->
  <!-- ===== \u25A0. \uD68C\uC6D0 \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
  <bo-cm-popup-modal popup-cmd="cmPopup-member-pick" popup-code="member" :show="memberPick.open" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uD68C\uC6D0 \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="odOrder"
    area-nm="\uC8FC\uBB38\uAD00\uB9AC" :columns="columns.listGrid" ui-nm="\uC8FC\uBB38\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
