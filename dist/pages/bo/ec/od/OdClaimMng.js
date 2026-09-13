window.OdClaimMng={name:"OdClaimMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}},initSearchValue:{type:String,default:null}},setup(O){const{ref:Se,reactive:I,computed:M,watch:xe,onMounted:J}=Vue,c=window.boApp.showToast,L=window.boApp.showConfirm,Z=window.boApp.showRefModal,h=I([]),N=I([]),s=I({bulkOpen:!1,loading:!1,error:null,bulkTab:"status",sortKey:"",sortDir:"asc"}),k=I({order_statuses:[],claim_types:[],claim_statuses:[],dliv_statuses:[],payment_methods:[],claim_date_types:[],approval_actions:[],req_targets:[],date_range_opts:[]}),$=I([]),F={reg:{asc:"regDate asc",desc:"regDate desc"}},R=(e,a={})=>{if(e==="searchParam-list"){if((g.dateRangeStart||g.dateRangeEnd)&&!g.dateRangeType){c("\uAE30\uAC04 \uAC80\uC0C9 \uC2DC \uAE30\uAC04\uC720\uD615\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}return C.pageNo=1,P("DEFAULT")}else{if(e==="searchParam-reset")return Object.assign(g,G),s.sortKey="",s.sortDir="asc",C.pageNo=1,q(),P();if(e==="searchParam-dateRange")return oe();if(e==="claims-add")return a&&(a.ctrlKey||a.metaKey||a.button===1)?O.openNewWindow("odClaimDtl",null,"new"):se();if(e==="actionsModal-open")return we();if(e==="actionsModal-close"){s.bulkOpen=!1;return}else if(e==="actionsModal-tabChange"){s.bulkTab=a,Object.keys(x).forEach(o=>delete x[o]);return}else{if(e==="actionsModal-apply")return Ce();if(e==="actionsModal-apprToChange")return he();if(e==="actionsModal-reqTargetChange")return j();if(e==="detailPanel-close")return ne();if(e==="memberPickModal-open"){B.open=!0;return}else if(e==="memberPickModal-close"){B.open=!1;return}else if(e==="memberPickModal-clear"){g.memberId="",g.memberNm="";return}else{if(e==="claims-sort")return te(a);if(e==="claims-pager-setPage"){a>=1&&a<=C.pageTotalPage&&(C.pageNo=a,P("PAGE_CLICK"));return}else{if(e==="mngCalc-open")return H(a);console.warn("[handleBtnAction] unknown cmd:",e)}}}}},ee=(e,a={})=>{if(e==="claims-pager-sizeChange")return C.pageNo=1,P("DEFAULT");if(e==="claims-rowEdit")return re(a);if(e==="claims-rowKanban")return window._odKanbanParams={orderId:a.orderId,claimId:a.claimId},O.navigate("odOrderKanban",{orderId:a.orderId,claimId:a.claimId});if(e==="claims-rowKanbanPop")return boUtil.bofOpenKanbanPopup(a.orderId,a.claimId,c);if(e==="claims-rowDelete")return me(a);if(e==="claims-rowRefClick")return Z(a.type,a.id);if(e==="claims-rowToggleCheck"){T.has(a)?T.delete(a):T.add(a);return}else if(e==="claims-rowToggleCheckAll"){Y.value?h.forEach(o=>T.delete(o.claimId)):h.forEach(o=>T.add(o.claimId));return}else if(e==="memberPickModal-select"){g.memberId=a.memberId,g.memberNm=a.memberNm||a.loginId||a.memberId;return}else console.warn("[handleSelectAction] unknown cmd:",e)},ae=(e,a,o)=>{if(e==="cmPopup-member-pick"){if(o==null){B.open=!1;return}g.memberId=o.selId,g.memberNm=o.selName||o.loginId||o.selId;return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},g=I({searchType:"",searchValue:"",memberId:"",memberNm:"",claimTypeCd:"",claimStatusCd:"",dateRangeType:"",dateRange:"",dateRangeStart:"",dateRangeEnd:""}),G={},C=I({pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),d=I({selectedId:"__new__",openMode:"view",reloadTrigger:0,resetSeq:0,active:!1}),T=I(new Set),K=boConsts.APPROVAL_TMPL,t=I({statusByType:{\uCDE8\uC18C:"",\uBC18\uD488:"",\uAD50\uD658:""},type:"",apprAction:"",apprComment:"",apprToUserId:"",apprToNm:"",apprToPhone:"",apprToEmail:"",reqTarget:"\uCD94\uAC00\uACB0\uC7AC",reqTargetNm:"",reqAmount:0,reqReason:"",tmplMsg:K}),x=I({}),B=I({open:!1}),z=()=>{const{sortKey:e,sortDir:a}=s;return!e||!F[e]?{}:{sort:F[e][a]}},te=e=>{s.sortKey===e?s.sortDir==="asc"?s.sortDir="desc":(s.sortKey="",s.sortDir="asc"):(s.sortKey=e,s.sortDir="asc"),C.pageNo=1,P()},P=async(e="DEFAULT")=>{var a,o,l,p,u,b,A,n,w,_,r,y,i,S;s.loading=!0;try{const v={pageNo:C.pageNo,pageSize:C.pageSize,...z(),...coUtil.cofOmitEmpty(g)};v.searchValue&&!v.searchType&&(v.searchType="claimId,orderId,memberNm,prodNm");const[m,X]=await Promise.all([boApiSvc.odClaim.getPage(v,"\uD074\uB808\uC784\uAD00\uB9AC","\uC870\uD68C").catch(()=>({data:{data:{pageList:[],pageTotalCount:0}}})),boApiSvc.mbMember.getPage({pageNo:1,pageSize:1e4},"\uD074\uB808\uC784\uAD00\uB9AC","\uC870\uD68C").catch(()=>({data:{data:{pageList:[]}}}))]);h.splice(0,h.length,...((o=(a=m.data)==null?void 0:a.data)==null?void 0:o.pageList)||((p=(l=m.data)==null?void 0:l.data)==null?void 0:p.list)||[]),N.splice(0,N.length,...((b=(u=X.data)==null?void 0:u.data)==null?void 0:b.pageList)||((n=(A=X.data)==null?void 0:A.data)==null?void 0:n.list)||[]),C.pageTotalCount=((_=(w=m.data)==null?void 0:w.data)==null?void 0:_.pageTotalCount)||0,C.pageTotalPage=((y=(r=m.data)==null?void 0:r.data)==null?void 0:y.pageTotalPage)||coUtil.cofTotalPage(C),coUtil.cofBuildPagerNums(C),Object.assign(C.pageCond,((S=(i=m.data)==null?void 0:i.data)==null?void 0:S.pageCond)||C.pageCond),s.error=null}catch(v){console.error("[catch-info]",v),s.error=v.message,h.splice(0,h.length),N.splice(0,N.length)}finally{s.loading=!1}},oe=()=>{boUtil.bofApplyDateRange(g),C.pageNo=1},le=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["ORDER_STATUS_CD","CLAIM_TYPE_CD","CLAIM_STATUS_CD","DLIV_STATUS","PAYMENT_METHOD","CLAIM_DATE_TYPE","APPROVAL_ACTION","REQ_TARGET","DATE_RANGE_OPT"],{compNm:"OdClaimMng"}),k.order_statuses=e.sgGetGrpCodes("ORDER_STATUS_CD"),k.claim_types=e.sgGetGrpCodes("CLAIM_TYPE_CD"),k.claim_statuses=e.sgGetGrpCodes("CLAIM_STATUS_CD"),k.dliv_statuses=e.sgGetGrpCodes("DLIV_STATUS"),k.payment_methods=e.sgGetGrpCodes("PAYMENT_METHOD"),k.claim_date_types=e.sgGetGrpCodes("CLAIM_DATE_TYPE"),k.approval_actions=e.sgGetGrpCodes("APPROVAL_ACTION"),k.req_targets=e.sgGetGrpCodes("REQ_TARGET"),k.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT"),$.splice(0,$.length,...await window.boUtil.bofLoadSiteOptions())};J(async()=>{const a=new Date().getFullYear();Object.assign(g,{dateRangeType:"request_date",dateRangeStart:`${a-3}-01-01`,dateRangeEnd:`${a}-12-31`}),await le(),O.initSearchValue&&(g.searchValue=O.initSearchValue,g.dateRangeStart="",g.dateRangeEnd="");const o=new URLSearchParams(window.location.search),l=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(g).forEach(p=>{!l.includes(p)&&o.has(p)&&(g[p]=o.get(p))}),await P("DEFAULT"),Object.assign(G,g)});const q=()=>{d.selectedId="__new__",d.openMode="view",d.active=!1,d.resetSeq++},re=e=>{window._odClaimDtlState&&(window._odClaimDtlState.activeTab="items"),d.selectedId=e,d.openMode="edit",d.active=!0,d.reloadTrigger++},se=()=>{d.selectedId="__new__",d.openMode="edit",d.active=!0,d.resetSeq++},ne=()=>{q()},ie=(e,a={})=>{if(e==="odClaimMng"){a.reload&&P("RELOAD"),q();return}if(e==="__cancelEdit__"){if(d.selectedId&&d.selectedId!=="__new__"){d.openMode="view";return}q();return}if(e==="__closeDtl__"){q();return}if(e==="__switchToEdit__"){d.openMode="edit";return}O.navigate(e,a)},ce=M(()=>d.selectedId==="__new__"?null:d.selectedId),de=M(()=>`${d.selectedId}_${d.openMode}_${d.resetSeq}`),pe=e=>coConsts.claimTypeColor(e),me=async e=>{var l,p;if(!await L("\uC0AD\uC81C",`[${e.claimId}]\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)||!Array.isArray(h))return;const o=h.findIndex(u=>u.claimId===e.claimId);o!==-1&&h.splice(o,1),d.selectedId===e.claimId&&q();try{const u=await boApiSvc.odClaim.remove(e.claimId,"\uD074\uB808\uC784\uAD00\uB9AC","\uC0AD\uC81C");c&&c("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(u){console.error("[catch-info]",u);const b=((p=(l=u.response)==null?void 0:l.data)==null?void 0:p.message)||u.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";c&&c(b,"error",0)}},ue=I({show:!1}),fe=()=>{const e={...z(),...coUtil.cofOmitEmpty(g)};return e.searchValue&&!e.searchType&&(e.searchType="claimId,orderId,memberNm,prodNm"),e},V=e=>T.has(e),Y=M(()=>h.length>0&&h.every(e=>T.has(e.claimId))),ge=(k.claim_statuses||[]).filter(e=>e.codeGrp==="CLAIM_STATUS_CD"&&e.useYn==="Y").sort((e,a)=>e.sortOrd-a.sortOrd),D=e=>ge.filter(a=>!a.parentCodeValues||a.parentCodeValues.includes("^"+e+"^")).map(a=>a.codeLabel),be={\uCDE8\uC18C:D("CANCEL"),\uBC18\uD488:D("RETURN"),\uAD50\uD658:D("EXCHANGE")},ye=["\uCDE8\uC18C","\uBC18\uD488","\uAD50\uD658"],he=()=>{const e=N.find(a=>String(a.memberId)===String(t.apprToUserId));e?(t.apprToNm=e.memberNm||"",t.apprToPhone=e.memberPhone||"",t.apprToEmail=e.memberEmail||""):(t.apprToNm="",t.apprToPhone="",t.apprToEmail="")},j=()=>{const e=Array.from(T),a=window.safeArrayUtils.safeFind(Array.isArray(h)?h:[],o=>e.includes(o.claimId));if(!a){t.reqTargetNm="";return}t.reqTarget==="\uC8FC\uBB38"?t.reqTargetNm=a.orderId||"":t.reqTarget==="\uC0C1\uD488"?t.reqTargetNm=a.prodNm||"":t.reqTarget==="\uBC30\uC1A1"?t.reqTargetNm=a.dlivId||(a.orderId?"\uBC30\uC1A1("+a.orderId+")":""):t.reqTargetNm=a.claimId||""},Te=M(()=>(t.tmplMsg||"").replace("{target}",t.reqTarget||"-").replace("{targetNm}",t.reqTargetNm||"-").replace("{amount}",Number(t.reqAmount||0).toLocaleString()).replace("{reason}",t.reqReason||"-")),U=M(()=>{const e={\uCDE8\uC18C:[],\uBC18\uD488:[],\uAD50\uD658:[]};return window.safeArrayUtils.safeForEach(h,a=>{T.has(a.claimId)&&e[a.claimTypeCd]&&e[a.claimTypeCd].push(a.claimId)}),e}),we=()=>{if(!T.size){c("\uD56D\uBAA9\uC744 \uC120\uD0DD\uD558\uC138\uC694.","error");return}s.bulkTab="status",t.statusByType={\uCDE8\uC18C:"",\uBC18\uD488:"",\uAD50\uD658:""},t.type="",t.apprAction="",t.apprComment="",t.apprToUserId="",t.apprToNm="",t.apprToPhone="",t.apprToEmail="",t.reqTarget="\uCD94\uAC00\uACB0\uC7AC",t.reqTargetNm="",t.reqAmount=0,t.reqReason="",t.tmplMsg=K,j(),s.bulkOpen=!0,Object.keys(x).forEach(e=>delete x[e])},ke=M(()=>{if(!s.bulkOpen)return"";const e=Array.from(T),a=window.safeArrayUtils.safeFilter(h,l=>e.includes(l.claimId));let o=[];if(s.bulkTab==="status")o=a.filter(l=>t.statusByType[l.claimTypeCd]).map(l=>`- [${l.claimId} / ${l.memberNm} (${l.claimTypeCd})] [\uD074\uB808\uC784\uAD00\uB9AC] \uD074\uB808\uC784\uC0C1\uD0DC \uBCC0\uACBD: ${l.claimStatusCd||"-"} \u2192 ${t.statusByType[l.claimTypeCd]}`);else if(s.bulkTab==="type"){if(!t.type)return"";o=a.map(l=>`- [${l.claimId} / ${l.memberNm}] [\uD074\uB808\uC784\uAD00\uB9AC] \uD074\uB808\uC784\uC720\uD615 \uBCC0\uACBD: ${l.claimTypeCd||"-"} \u2192 ${t.type}`)}else if(s.bulkTab==="approval"){if(!t.apprAction)return"";o=a.map(l=>`- [${l.claimId} / ${l.memberNm}] [\uD074\uB808\uC784\uAD00\uB9AC] \uACB0\uC7AC\uCC98\uB9AC: ${t.apprAction}${t.apprComment?" / "+t.apprComment:""}`)}else if(s.bulkTab==="approvalReq"){if(!t.apprToUserId)return"";o=a.map(l=>`- [${l.claimId} / ${l.memberNm}] [\uD074\uB808\uC784\uAD00\uB9AC] \uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD \u2192 ${t.apprToNm}(${t.apprToUserId}) / \uB300\uC0C1:${t.reqTarget}-${t.reqTargetNm} / \uAE08\uC561:${Number(t.reqAmount||0).toLocaleString()}\uC6D0`)}return o.length?`\u203B \uCD1D ${o.length}\uAC74
`+o.join(`
`):""}),Ce=async()=>{var e,a,o,l,p,u,b,A;if(!T.size){c("\uD56D\uBAA9\uC744 \uC120\uD0DD\uD558\uC138\uC694.","error"),s.bulkOpen=!1;return}if(Object.keys(x).forEach(n=>delete x[n]),s.bulkTab==="status"){const n=ye.filter(i=>t.statusByType[i]&&U.value[i].length).map(i=>({type:i,status:t.statusByType[i],ids:U.value[i]}));if(!n.length){x.statusByType="\uBCC0\uACBD\uD560 \uC0C1\uD0DC\uB97C \uD558\uB098 \uC774\uC0C1 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",c("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}const w=n.reduce((i,S)=>i+S.ids.length,0),_=n.map(i=>`[${i.type}] ${i.ids.length}\uAC74 \u2192 ${i.status}`).join(`
`);if(!await L("\uC77C\uAD04 \uD074\uB808\uC784\uC0C1\uD0DC \uBCC0\uACBD",`${_}

\uCD1D ${w}\uAC74\uC744 \uBCC0\uACBD\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;window.safeArrayUtils.safeForEach(n,i=>{window.safeArrayUtils.safeForEach(h,S=>{i.ids.includes(S.claimId)&&(S.claimStatusCd=i.status)})});const y=n.flatMap(i=>i.ids.map(S=>({claimId:S,claimStatusCd:i.status})));T.clear(),s.bulkOpen=!1;try{const i=await boApiSvc.odClaim.saveList("status",y,"\uD074\uB808\uC784\uAD00\uB9AC","\uC77C\uAD04\uCC98\uB9AC");c&&c(`${w}\uAC74 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")}catch(i){console.error("[catch-info]",i);const S=((a=(e=i.response)==null?void 0:e.data)==null?void 0:a.message)||i.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";c&&c(S,"error",0)}}else if(s.bulkTab==="type"){const n=t.type;if(!n){x.type="\uBCC0\uACBD\uD560 \uD074\uB808\uC784\uC720\uD615\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",c("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}const w=Array.from(T);if(!await L("\uC77C\uAD04 \uD074\uB808\uC784\uC720\uD615 \uBCC0\uACBD",`\uC120\uD0DD\uD55C ${w.length}\uAC74\uC758 \uD074\uB808\uC784\uC720\uD615\uC744 [${n}](\uC73C)\uB85C \uBCC0\uACBD\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;window.safeArrayUtils.safeForEach(h,y=>{w.includes(y.claimId)&&(y.claimTypeCd=n)});const r=w.map(y=>({claimId:y,claimTypeCd:n}));T.clear(),s.bulkOpen=!1;try{const y=await boApiSvc.odClaim.saveList("type",r,"\uD074\uB808\uC784\uAD00\uB9AC","\uC77C\uAD04\uCC98\uB9AC");c&&c(`${w.length}\uAC74 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")}catch(y){console.error("[catch-info]",y);const i=((l=(o=y.response)==null?void 0:o.data)==null?void 0:l.message)||y.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";c&&c(i,"error",0)}}else if(s.bulkTab==="approval"){if(!t.apprAction){x.apprAction="\uACB0\uC7AC\uCC98\uB9AC \uAD6C\uBD84\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",c("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}const n=Array.from(T);if(!await L("\uC77C\uAD04 \uACB0\uC7AC\uCC98\uB9AC",`\uC120\uD0DD\uD55C ${n.length}\uAC74\uC744 [${t.apprAction}] \uCC98\uB9AC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;window.safeArrayUtils.safeForEach(h,r=>{n.includes(r.claimId)&&(r.apprStatus=t.apprAction,r.apprComment=t.apprComment)});const _=n.map(r=>({claimId:r}));T.clear(),s.bulkOpen=!1;try{const r=await boApiSvc.odClaim.saveList("approval",_,"\uD074\uB808\uC784\uAD00\uB9AC","\uACB0\uC7AC\uCC98\uB9AC");c&&c(`${n.length}\uAC74 \uCC98\uB9AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")}catch(r){console.error("[catch-info]",r);const y=((u=(p=r.response)==null?void 0:p.data)==null?void 0:u.message)||r.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";c&&c(y,"error",0)}}else if(s.bulkTab==="approvalReq"){if(!t.apprToUserId){x.apprToUserId="\uCD94\uAC00\uACB0\uC7AC\uC790(\uD68C\uC6D0)\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",c("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}const n=Array.from(T);if(!await L("\uC77C\uAD04 \uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD",`\uC120\uD0DD\uD55C ${n.length}\uAC74\uC744 [${t.apprToNm}](\uC73C)\uB85C \uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;window.safeArrayUtils.safeForEach(h,r=>{n.includes(r.claimId)&&(r.apprToUserId=t.apprToUserId,r.apprToNm=t.apprToNm,r.reqTarget=t.reqTarget,r.reqTargetNm=t.reqTargetNm,r.reqAmount=Number(t.reqAmount||0),r.reqReason=t.reqReason)});const _=n.map(r=>({claimId:r}));T.clear(),s.bulkOpen=!1;try{const r=await boApiSvc.odClaim.saveList("approvalReq",_,"\uD074\uB808\uC784\uAD00\uB9AC","\uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD");c&&c(`${n.length}\uAC74 \uC694\uCCAD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")}catch(r){console.error("[catch-info]",r);const y=((A=(b=r.response)==null?void 0:b.data)==null?void 0:A.message)||r.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";c&&c(y,"error",0)}}},ve=Vue.toRef(s,"bulkOpen"),E={};E.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"claimId",label:"\uD074\uB808\uC784ID"},{value:"orderId",label:"\uC8FC\uBB38ID"},{value:"memberNm",label:"\uD68C\uC6D0\uBA85"},{value:"prodNm",label:"\uC0C1\uD488\uBA85"},{value:"loginId",label:"\uB85C\uADF8\uC778ID"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"memberId",type:"pick",label:"\uD68C\uC6D0",nameKey:"memberNm",display:e=>e.memberNm||e.memberId,placeholder:"\uD68C\uC6D0 \uC120\uD0DD",onOpen:()=>R("memberPickModal-open"),onClear:()=>R("memberPickModal-clear")},{key:"claimTypeCd",type:"select",label:"\uC720\uD615",options:()=>k.claim_types,nullLabel:"\uC720\uD615 \uC804\uCCB4"},{key:"claimStatusCd",type:"select",label:"\uC0C1\uD0DC",options:()=>k.claim_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"dateRange",type:"dateRange",label:"\uC2E0\uCCAD\uC77C",typeKey:"dateRangeType",startKey:"dateRangeStart",endKey:"dateRangeEnd",typeOptions:()=>k.claim_date_types,rangeOptions:()=>k.date_range_opts,onRangeChange:()=>R("searchParam-dateRange")},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>$,nullLabel:"\uC804\uCCB4"}],E.listGrid=[{key:"claimId",label:"\uD074\uB808\uC784ID",link:!0,cellInnerStyle:e=>d.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"memberNm",label:"\uD68C\uC6D0",refLink:"member",refKey:"memberId",fmt:(e,a)=>`${a.memberNm||"-"}  #${a.memberId||a.sessionKey||"-"}`},{key:"orderId",label:"\uC8FC\uBB38ID",refLink:"order"},{key:"prodNm",label:"\uC0C1\uD488"},{key:"claimItemCnt",label:"\uD56D\uBAA9\uC218",align:"right",style:"width:64px;white-space:nowrap;",fmt:e=>e==null?"-":Number(e).toLocaleString()+"\uAC1C"},{key:"reasonDetail",label:"\uC0AC\uC720"},{key:"_claimStatus",label:"\uD074\uB808\uC784\uC0C1\uD0DC",excelKeys:[{key:"claimTypeCdNm",label:"\uD074\uB808\uC784\uC720\uD615"},{key:"claimStatusCdNm",label:"\uD074\uB808\uC784\uC0C1\uD0DC"}],fmt:(e,a)=>`${a.claimTypeCdNm||a.claimTypeCd} \xB7 ${a.claimStatusCdNm||a.claimStatusCd}`,cellInnerStyle:(e,a)=>`font-size:10px;padding:2px 8px;border-radius:10px;color:#fff;font-weight:700;background:${pe(a.claimTypeCd)};`},{key:"requestDate",label:"\uC2E0\uCCAD\uC77C",sortKey:"reg",style:"white-space:nowrap;",fmt:e=>(e||"").slice(0,10)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;"}];const Ie=e=>(d.selectedId===e.claimId?"background:#fff8f9;":"")+(V(e.claimId)?"background:#eef6fd;":"");E.apprContactForm=[{key:"apprToUserId",label:"\uCD94\uAC00\uACB0\uC7AC\uC790",type:"select",colSpan:2,nullLabel:"\uC120\uD0DD\uD558\uC138\uC694",required:!0,options:()=>N.map(e=>({value:e.memberId,label:`${e.memberNm} (${e.memberId})`})),onChange:()=>R("actionsModal-apprToChange")},{key:"apprToPhone",label:"\uC804\uD654\uBC88\uD638",type:"text",readonly:!0},{key:"apprToEmail",label:"\uC774\uBA54\uC77C",type:"text",readonly:!0}],E.apprTargetForm=[{key:"reqTarget",label:"\uC694\uCCAD\uB300\uC0C1",type:"select",nullable:!1,options:()=>k.req_targets,onChange:()=>R("actionsModal-reqTargetChange")},{key:"reqTargetNm",label:"\uC694\uCCAD\uB300\uC0C1\uBA85",type:"text",placeholder:"\uC218\uC815 \uAC00\uB2A5"}],E.apprDetailForm=[{key:"reqAmount",label:"\uC694\uCCAD\uAE08\uC561",type:"number",colSpan:2},{type:"rowBreak"},{key:"reqReason",label:"\uC694\uCCAD\uC0AC\uC720",type:"textarea",rows:2,placeholder:"(\uC120\uD0DD)"},{type:"rowBreak"},{key:"tmplMsg",label:"\uC804\uC1A1 \uD15C\uD50C\uB9BF",type:"slot",name:"tmplMsg",colSpan:2,hint:"\uCE58\uD658: {target} {targetNm} {amount} {reason}"}],E.bulkApprovalForm=[{key:"apprAction",label:"\uACB0\uC7AC\uCC98\uB9AC \uAD6C\uBD84",type:"select",nullLabel:"\uC120\uD0DD\uD558\uC138\uC694",required:!0,options:()=>k.approval_actions,colSpan:2},{type:"rowBreak"},{key:"apprComment",label:"\uACB0\uC7AC \uCF54\uBA58\uD2B8",type:"textarea",rows:2,placeholder:"(\uC120\uD0DD)"}];const f=I({show:!1,loading:!1,claimId:"",claimType:"",data:null,showPayInfo:!1,showRefundInfo:!1,orderClaims:[],switchLoading:!1}),Q=function(e,a){var o=e.claimItems||[],l=o.reduce(function(v,m){return v+(m.itemAmt||m.item_amt||(m.unitPrice||m.unit_price||0)*(m.claimQty||m.claim_qty||1))},0),p=a.payAmt||a.pay_amt||a.totalAmt||a.total_amt||0,u=(a.orderItems||[]).reduce(function(v,m){return v+(m.itemOrderAmt||m.item_order_amt||(m.unitPrice||m.unit_price||m.salePrice||0)*(m.orderQty||m.order_qty||1))},0),b=u>0?l/u:p>0?l/p:0;b>1&&(b=1);var A=Math.round((a.couponDiscntAmt||a.couponDiscAmt||a.coupon_disc_amt||0)*b),n=Math.round((a.saveUseAmt||a.saveUsedAmt||a.save_used_amt||0)*b),w=Math.round((a.cacheUsedAmt||a.cache_used_amt||0)*b),_=o.reduce(function(v,m){return v+(m.claimQty||m.claim_qty||1)},0),r=(a.orderItems||[]).reduce(function(v,m){return v+(m.orderQty||m.order_qty||1)},0),y=r>0&&_>=r,i=y&&(a.shippingFee||a.dlivFee||a.dliv_fee)||0,S=Math.max(0,l-A-n-w+i);return{itemAmt:l,couponDiscAmt:A,saveUsedAmt:n,cacheUsedAmt:w,dlivFeeRefund:i,refundBase:S,isFullCancel:y,ratio:b,orderTotalAmt:p,couponNm:a.couponNm||"",saveGradePct:a.saveGradePct||0}},W=async function(e,a){var o=await boApiSvc.odClaim.getById(e,"\uD074\uB808\uC784\uAD00\uB9AC","\uACC4\uC0B0\uC870\uD68C"),l=o.data&&o.data.data||o.data||{},p=a||l.orderId||"",u={};if(p){var b=await boApiSvc.odOrder.getById(p,"\uD074\uB808\uC784\uAD00\uB9AC","\uC8FC\uBB38\uC870\uD68C");u=b.data&&b.data.data||b.data||{}}var A=await boApiSvc.odClaim.getStatusHist(e,"\uD074\uB808\uC784\uAD00\uB9AC","\uC0C1\uD0DC\uC774\uB825"),n=A.data&&A.data.data||[];return{claimData:l,orderData:u,statusHist:n,resolvedOrderId:p}},H=async function(e){var A,n,w,_;f.claimId=e.claimId||"",f.claimType=e.claimTypeCd||"",f.data=null,f.orderClaims=[],f.loading=!0,f.show=!0;try{var{claimData:a,orderData:o,statusHist:l,resolvedOrderId:p}=await W(e.claimId,e.orderId||"");if(f.claimType=a.claimTypeCd||f.claimType,f.data={claim:a,order:o,calc:Q(a,o),statusHist:l},p){var u=await boApiSvc.odClaim.getPage({orderId:p,pageNo:1,pageSize:100},"\uD074\uB808\uC784\uAD00\uB9AC","\uC8FC\uBB38\uD074\uB808\uC784\uBAA9\uB85D").catch(function(){return null}),b=u&&(((n=(A=u.data)==null?void 0:A.data)==null?void 0:n.pageList)||((_=(w=u.data)==null?void 0:w.data)==null?void 0:_.list)||[])||[];f.orderClaims=b.length?b:[a]}}catch{c("\uACC4\uC0B0 \uC815\uBCF4 \uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0),f.show=!1}finally{f.loading=!1}},Ae=async function(e){if(!(!e||e===f.claimId)){f.switchLoading=!0;try{var a=f.orderClaims.find(function(u){return u.claimId===e})||{},{claimData:o,orderData:l,statusHist:p}=await W(e,a.orderId||f.data.claim.orderId||"");f.claimId=e,f.claimType=o.claimTypeCd||"",f.data={claim:o,order:l,calc:Q(o,l),statusHist:p}}catch{c("\uD074\uB808\uC784 \uC804\uD658 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0)}finally{f.switchLoading=!1}}},_e=function(){f.show=!1};return{columns:E,excelModal:ue,buildExcelParams:fe,claims:h,members:N,uiState:s,codes:k,searchParam:g,listGridPager:C,detailPanel:d,checked:T,bulkForm:t,bulkErrors:x,bulkOpen:ve,memberPick:B,handleBtnAction:R,handleSelectAction:ee,fnCallbackModal:ae,cfDetailEditId:ce,cfDetailKey:de,cfAllChecked:Y,cfBuildTmplMsg:Te,cfBulkPreview:ke,cfCheckedByType:U,selectedId:M(()=>d.selectedId),CLAIM_STATUS_BY_TYPE:be,isChecked:V,fnGridRowStyle:Ie,inlineNavigate:ie,mngCalcDialog:f,handleOpenMngCalc:H,handleCloseMngCalc:_e,handleMngCalcSwitch:Ae}},template:`
<bo-page title="\uD074\uB808\uC784\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uD074\uB808\uC784\uBAA9\uB85D" :count-text="listGridPager.pageTotalCount + '\uAC74'">
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
        @click="handleBtnAction('claims-add', $event)"
        @auxclick="handleBtnAction('claims-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uADF8\uB9AC\uB4DC (\uAE30\uBCF8 10\uAC1C \uC601\uC5ED + \uD654\uBA74 \uB192\uC774 \uBC18\uC751\uD615 \uD655\uC7A5, \uCD08\uACFC \uC2DC \uB0B4\uBD80 \uC2A4\uD06C\uB864) =========== -->
    <div style="max-height:calc(100vh - 340px);min-height:480px;overflow-y:auto;border:1px solid #eef0f3;border-radius:6px;background:#fff;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare selectable :columns="columns.listGrid" :rows="claims" row-key="claimId" :selected-key="detailPanel.selectedId"
        :sort-state="uiState" :is-checked="isChecked" :all-checked="cfAllChecked"
        :row-style="fnGridRowStyle" empty-text="\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
        @sort="key => handleBtnAction('claims-sort', key)"
        grid-id="claims-cellClick" @cell-click="e => { if (e.col?.link) { (e.ctrlKey || e.metaKey || e.button === 1) ? props.openNewWindow('odClaimDtl', e.row.claimId) : handleSelectAction('claims-rowEdit', e.row.claimId); } }"
        @toggle-check="id => handleSelectAction('claims-rowToggleCheck', id)"
        @toggle-check-all="handleSelectAction('claims-rowToggleCheckAll')"
        @ref-click="({type,id}) => handleSelectAction('claims-rowRefClick', {type, id})" row-actions
            table-max-height="540px">
        <template #row-actions="{ row }">
          <div class="actions">
            <button class="btn btn_row_edit"
              @click="e => { (e.ctrlKey || e.metaKey || e.button === 1) ? props.openNewWindow('odClaimDtl', row.claimId, 'edit') : handleSelectAction('claims-rowEdit', row.claimId); }"
              @auxclick="e => { (e.ctrlKey || e.metaKey || e.button === 1) ? props.openNewWindow('odClaimDtl', row.claimId, 'edit') : handleSelectAction('claims-rowEdit', row.claimId); }">
              \uC218\uC815
            </button>
            <button class="btn btn_row_delete" @click="handleSelectAction('claims-rowDelete', row)">
              \uC0AD\uC81C
            </button>
            <button class="btn btn-xs" style="background:#059669;color:#fff;border:none;"
              @click="handleBtnAction('mngCalc-open', row)">
              \u{1F4B0} \uACC4\uC0B0
            </button>
            <button v-if="row.orderId" class="btn btn-xs" style="background:#3b82f6;color:#fff;border:none;"
              @click="handleSelectAction('claims-rowKanban', { orderId: row.orderId, claimId: row.claimId })">
              \uCE78\uBC18
            </button>
            <button v-if="row.orderId" class="btn btn-xs" title="\uCE78\uBC18 \uBCF4\uB4DC\uB97C \uC0C8 \uCC3D\uC73C\uB85C \uC5F4\uAE30"
              style="background:#1d4ed8;color:#fff;border:none;"
              @click="handleSelectAction('claims-rowKanbanPop', { orderId: row.orderId, claimId: row.claimId })">\u29C9</button>
          </div>
        </template>
      </bo-grid>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC800: \uD55C \uC904 \uD45C\uC2DC + \uCE74\uB4DC \uD558\uB2E8 \uAE54\uB054 \uB9C8\uAC10 ============================= -->
    <div style="margin-top:6px;white-space:nowrap;overflow-x:auto;">
      <bo-pager :pager="listGridPager" :on-set-page="n => handleBtnAction('claims-pager-setPage', n)"
        :on-size-change="() => handleSelectAction('claims-pager-sizeChange')"
        style="margin-top:0;min-height:34px;" />
    </div>
  </bo-container>
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138: ClaimDtl \uC784\uBCA0\uB4DC (\uD56D\uC0C1 \uD45C\uC2DC, \uC9C4\uC785 \uC2DC \uBE48 \uC2E0\uADDC \uD3FC) ============= -->
  <od-claim-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    />
  <!-- ===== \u25A1. \uD558\uB2E8 \uC0C1\uC138: ClaimDtl \uC784\uBCA0\uB4DC ===================================== -->
  <!-- ===== \u25A0. \uBCC0\uACBD\uC791\uC5C5 \uBAA8\uB2EC (actionsModal) ===================================== -->
  <bo-modal :show="bulkOpen" :title="'\u{1F4DD} \uBCC0\uACBD\uC791\uC5C5 (' + checked.size + '\uAC74 \uC120\uD0DD)'" width="640px" max-height="90vh" box-pad="0" @close="handleBtnAction('actionsModal-close')">
    <div style="display:flex;flex-direction:column;max-height:76vh;">
      <div style="display:flex;gap:6px;padding:10px 14px 0;background:#fafafa;">
        <button v-for="t in [{id:'status',label:'\uD074\uB808\uC784\uC0C1\uD0DC'},{id:'type',label:'\uD074\uB808\uC784\uC720\uD615'},{id:'approval',label:'\uACB0\uC7AC\uCC98\uB9AC'},{id:'approvalReq',label:'\uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD'}]" :key="t?.id"
          @click="handleBtnAction('actionsModal-tabChange', t.id)"
          :style="{flex:1,padding:'8px 12px',border:'none',cursor:'pointer',fontSize:'12.5px',borderRadius:'8px 8px 0 0',fontWeight: uiState.bulkTab===t.id?800:600,background: uiState.bulkTab===t.id?'#fff':'transparent',color: uiState.bulkTab===t.id?'#e8587a':'#888',borderBottom: uiState.bulkTab===t.id?'2px solid #e8587a':'2px solid transparent'}">
          {{ t.label }}
        </button>
      </div>
      <div style="padding:20px 18px;flex:1;overflow-y:auto;min-height:280px;">
        <div v-if="uiState.bulkTab==='status'">
          <div v-for="t in codes.claim_types.map(c=>c.codeValue)" :key="Math.random()" :style="{opacity: (cfCheckedByType[t]||[]).length ? 1 : 0.4, marginBottom:'12px'}">
            <label class="form-label">
              <span :style="{display:'inline-block',fontSize:'10px',padding:'2px 8px',borderRadius:'10px',color:'#fff',fontWeight:700,marginRight:'6px',background: t==='\uCDE8\uC18C'?'#ef4444':t==='\uBC18\uD488'?'#FFBB00':'#3b82f6'}">
                {{ t }}
              </span>
              \uC0C1\uD0DC
              <span style="font-size:11px;color:#1565c0;margin-left:4px;">
                (\uB300\uC0C1 {{ (cfCheckedByType[t]||[]).length }}\uAC74)
              </span>
            </label>
            <select class="form-control" v-model="bulkForm.statusByType[t]" :disabled="!(cfCheckedByType[t]||[]).length">
              <option value="">{{ (cfCheckedByType[t]||[]).length ? '\uC120\uD0DD\uD558\uC138\uC694 (\uBBF8\uC120\uD0DD\uC2DC \uBCC0\uACBD\uC548\uD568)' : '\uC120\uD0DD\uB41C \uD56D\uBAA9 \uC5C6\uC74C' }}</option>
              <option v-for="s in CLAIM_STATUS_BY_TYPE[t]" :key="Math.random()" :value="s">
                {{ s }}
              </option>
            </select>
          </div>
          <span v-if="bulkErrors.statusByType" class="field-error">{{ bulkErrors.statusByType }}</span>
        </div>
        <div v-if="uiState.bulkTab==='type'">
          <label class="form-label">
            \uBCC0\uACBD\uD560 \uD074\uB808\uC784\uC720\uD615
          </label>
          <select class="form-control" v-model="bulkForm.type">
            <option value="">\uC120\uD0DD\uD558\uC138\uC694</option>
            <option v-for="c in codes.claim_types" :key="c.codeValue" :value="c.codeValue">
              {{ c.codeLabel }}
            </option>
          </select>
          <span v-if="bulkErrors.type" class="field-error">{{ bulkErrors.type }}</span>
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
  <!-- ===== \u25A1. \uD68C\uC6D0 \uC120\uD0DD \uD31D\uC5C5 ================================================ -->
  <bo-cm-popup-modal popup-cmd="cmPopup-member-pick" popup-code="member" :show="memberPick.open" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uD68C\uC6D0 \uC120\uD0DD \uD31D\uC5C5 (end) ========================================== -->
  <!-- ===== \u25A0. \uD074\uB808\uC784 \uAE08\uC561 \uACC4\uC0B0 \uBAA8\uB2EC ========================================= -->
  <od-claim-calc-modal :show="mngCalcDialog.show" :claim-id="mngCalcDialog.claimId" @close="handleCloseMngCalc" />
  <!-- ===== \u25A1. \uD074\uB808\uC784 \uAE08\uC561 \uACC4\uC0B0 \uBAA8\uB2EC ========================================= -->
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="odClaim"
    area-nm="\uD074\uB808\uC784\uAD00\uB9AC" :columns="columns.listGrid" ui-nm="\uD074\uB808\uC784\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
