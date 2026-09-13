window.OdDlivMng={name:"OdDlivMng",props:{navigate:{type:Function,required:!0},openNewWindow:{type:Function,default:()=>{}}},setup(O){const{ref:fe,reactive:g,computed:w,watch:ve,onMounted:j}=Vue,n=window.boApp.showToast,S=window.boApp.showConfirm,Y=window.boApp.showRefModal,c=g([]),x=g([]),r=g({bulkOpen:!1,loading:!1,error:null,bulkTab:"status",sortKey:"",sortDir:"asc"}),u=g({order_statuses:[],dliv_statuses:[],dliv_types:[],payment_methods:[],courier_codes:[],dliv_date_types:[],approval_actions:[],req_targets:[],date_range_opts:[]}),R=g([]),q={reg:{asc:"regDate asc",desc:"regDate desc"}},N=(e,a={})=>{if(e==="searchParam-list"){if((d.dateRangeStart||d.dateRangeEnd)&&!d.dateRangeType){n("\uAE30\uAC04 \uAC80\uC0C9 \uC2DC \uAE30\uAC04\uC720\uD615\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","error");return}return b.pageNo=1,I("DEFAULT")}else{if(e==="searchParam-reset")return Object.assign(d,$),r.sortKey="",r.sortDir="asc",b.pageNo=1,C(),I();if(e==="searchParam-dateRange")return X();if(e==="dlivs-add"){if(a&&(a.ctrlKey||a.metaKey||a.button===1))return O.openNewWindow("odDlivDtl",null,"new");i.selectedId="__new__",i.openMode="edit",i.active=!0,i.resetSeq++,i.reloadTrigger++;return}else{if(e==="actionsModal-open")return ce();if(e==="actionsModal-close"){r.bulkOpen=!1;return}else if(e==="actionsModal-tabChange"){r.bulkTab=a,Object.keys(v).forEach(l=>delete v[l]);return}else{if(e==="actionsModal-apply")return ue();if(e==="actionsModal-apprToChange")return ie();if(e==="actionsModal-reqTargetChange")return G();if(e==="detailPanel-close")return C();if(e==="memberPickModal-open"){M.open=!0;return}else if(e==="memberPickModal-close"){M.open=!1;return}else if(e==="memberPickModal-clear"){d.memberId="",d.memberNm="";return}else{if(e==="dlivs-sort")return J(a);if(e==="dlivs-pager-setPage"){a>=1&&a<=b.pageTotalPage&&(b.pageNo=a,I("PAGE_CLICK"));return}else console.warn("[handleBtnAction] unknown cmd:",e)}}}}},W=(e,a={})=>{if(e==="dlivs-pager-sizeChange")return b.pageNo=1,I("DEFAULT");if(e==="dlivs-rowEdit"){i.selectedId=a,i.openMode="edit",i.active=!0,i.reloadTrigger++;return}else{if(e==="dlivs-rowDelete")return le(a);if(e==="dlivs-rowRefClick")return Y(a.type,a.id);if(e==="dlivs-rowToggleCheck"){m.has(a)?m.delete(a):m.add(a);return}else if(e==="dlivs-rowToggleCheckAll"){B.value?c.forEach(l=>m.delete(l.dlivId)):c.forEach(l=>m.add(l.dlivId));return}else if(e==="memberPickModal-select"){d.memberId=a.memberId,d.memberNm=a.memberNm||a.loginId||a.memberId;return}else console.warn("[handleSelectAction] unknown cmd:",e)}},H=(e,a,l)=>{if(e==="cmPopup-member-pick"){if(l==null){M.open=!1;return}d.memberId=l.selId,d.memberNm=l.selName||l.loginId||l.selId;return}else console.warn("[fnCallbackModal] unknown popCmd:",e)},d=g({searchType:"",searchValue:"",memberId:"",memberNm:"",dlivStatusCd:"",dateRangeType:"",dateRange:"",dateRangeStart:"",dateRangeEnd:""}),$={},b=g({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),i=g({selectedId:"__new__",openMode:"view",reloadTrigger:0,active:!1,resetSeq:0}),m=g(new Set),Q=boConsts.COURIER_OPTIONS,L=boConsts.APPROVAL_TMPL,v=g({}),t=g({status:"",courier:"",trackingNo:"",apprAction:"",apprComment:"",apprToUserId:"",apprToNm:"",apprToPhone:"",apprToEmail:"",reqTarget:"\uBC30\uC1A1",reqTargetNm:"",reqAmount:0,reqReason:"",tmplMsg:L}),M=g({open:!1}),U=()=>{const{sortKey:e,sortDir:a}=r;return!e||!q[e]?{}:{sort:q[e][a]}},J=e=>{r.sortKey===e?r.sortDir==="asc"?r.sortDir="desc":(r.sortKey="",r.sortDir="asc"):(r.sortKey=e,r.sortDir="asc"),b.pageNo=1,I()},I=async(e="DEFAULT")=>{var a,l,s,p,f,_,D,P,T,h,o,k,K,z;r.loading=!0;try{const A={pageNo:b.pageNo,pageSize:b.pageSize,...U(),...coUtil.cofOmitEmpty(d)};A.searchValue&&!A.searchType&&(A.searchType="dlivId,orderId,memberNm,recvNm,outboundTrackingNo");const[E,V]=await Promise.all([boApiSvc.odDliv.getPage(A,"\uBC30\uC1A1\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C"),boApiSvc.mbMember.getPage({pageNo:1,pageSize:1e4},"\uBC30\uC1A1\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")]);c.splice(0,c.length,...((l=(a=E.data)==null?void 0:a.data)==null?void 0:l.pageList)||((p=(s=E.data)==null?void 0:s.data)==null?void 0:p.list)||[]),x.splice(0,x.length,...((_=(f=V.data)==null?void 0:f.data)==null?void 0:_.pageList)||((P=(D=V.data)==null?void 0:D.data)==null?void 0:P.list)||[]),b.pageTotalCount=((h=(T=E.data)==null?void 0:T.data)==null?void 0:h.pageTotalCount)||0,b.pageTotalPage=((k=(o=E.data)==null?void 0:o.data)==null?void 0:k.pageTotalPage)||coUtil.cofTotalPage(b),coUtil.cofBuildPagerNums(b),Object.assign(b.pageCond,((z=(K=E.data)==null?void 0:K.data)==null?void 0:z.pageCond)||b.pageCond),r.error=null}catch(A){console.error("[catch-info]",A),r.error=A.message}finally{r.loading=!1}},X=()=>{boUtil.bofApplyDateRange(d),b.pageNo=1},Z=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["ORDER_STATUS_CD","DLIV_STATUS","DLIV_TYPE_CD","PAYMENT_METHOD","COURIER","DLIV_DATE_TYPE","APPROVAL_ACTION","REQ_TARGET","DATE_RANGE_OPT"],{compNm:"OdDlivMng"}),u.order_statuses=e.sgGetGrpCodes("ORDER_STATUS_CD"),u.dliv_statuses=e.sgGetGrpCodes("DLIV_STATUS"),u.dliv_types=e.sgGetGrpCodes("DLIV_TYPE_CD"),u.payment_methods=e.sgGetGrpCodes("PAYMENT_METHOD"),u.courier_codes=e.sgGetGrpCodes("COURIER"),u.dliv_date_types=e.sgGetGrpCodes("DLIV_DATE_TYPE"),u.approval_actions=e.sgGetGrpCodes("APPROVAL_ACTION"),u.req_targets=e.sgGetGrpCodes("REQ_TARGET"),u.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT"),R.splice(0,R.length,...await window.boUtil.bofLoadSiteOptions())};j(async()=>{const a=new Date().getFullYear();Object.assign(d,{dateRangeType:"dliv_ship_date",dateRangeStart:`${a-3}-01-01`,dateRangeEnd:`${a}-12-31`}),await Z();const l=new URLSearchParams(window.location.search),s=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(d).forEach(p=>{!s.includes(p)&&l.has(p)&&(d[p]=l.get(p))}),await I("DEFAULT"),Object.assign($,d)});const C=()=>{i.selectedId="__new__",i.openMode="view",i.active=!1,i.resetSeq++},ee=(e,a={})=>{if(e==="odDlivMng"){a.reload&&I("RELOAD"),C();return}if(e==="__cancelEdit__"){if(i.selectedId&&i.selectedId!=="__new__"){i.openMode="view";return}C();return}if(e==="__closeDtl__"){C();return}if(e==="__switchToEdit__"){i.openMode="edit";return}O.navigate(e,a)},te=w(()=>i.selectedId==="__new__"?null:i.selectedId),ae=w(()=>`${i.selectedId}_${i.openMode}_${i.resetSeq}`),oe={\uC900\uBE44\uC911:"badge-orange",\uCD9C\uACE0\uC644\uB8CC:"badge-blue",\uBC30\uC1A1\uC911:"badge-blue",\uBC30\uC1A1\uC644\uB8CC:"badge-green",\uBC30\uC1A1\uC2E4\uD328:"badge-red"},re=e=>coUtil.cofCodeBadge("DLIV_STATUS",e,oe[e]||"badge-gray"),le=async e=>{var s,p;if(!await S("\uC0AD\uC81C",`[${e.dlivId}]\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)||!Array.isArray(c))return;const l=c.findIndex(f=>f.dlivId===e.dlivId);l!==-1&&c.splice(l,1),i.selectedId===e.dlivId&&C();try{const f=await boApiSvc.odDliv.remove(e.dlivId,"\uBC30\uC1A1\uAD00\uB9AC","\uC0AD\uC81C");n&&n("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(f){console.error("[catch-info]",f);const _=((p=(s=f.response)==null?void 0:s.data)==null?void 0:p.message)||f.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";n&&n(_,"error",0)}},se=g({show:!1}),ne=()=>{const e={...U(),...coUtil.cofOmitEmpty(d)};return e.searchValue&&!e.searchType&&(e.searchType="dlivId,orderId,memberNm,recvNm,outboundTrackingNo"),e},F=e=>m.has(e),B=w(()=>c.length>0&&c.every(e=>m.has(e.dlivId))),ie=()=>{const e=x.find(a=>String(a.memberId)===String(t.apprToUserId));e?(t.apprToNm=e.memberNm||"",t.apprToPhone=e.memberPhone||"",t.apprToEmail=e.memberEmail||""):(t.apprToNm="",t.apprToPhone="",t.apprToEmail="")},G=()=>{const e=Array.from(m),a=window.safeArrayUtils.safeFind(Array.isArray(c)?c:[],l=>e.includes(l.dlivId));if(!a){t.reqTargetNm="";return}t.reqTarget==="\uC8FC\uBB38"?t.reqTargetNm=a.orderId||"":t.reqTarget==="\uBC30\uC1A1"?t.reqTargetNm=a.dlivId||"":t.reqTarget==="\uC0C1\uD488"?t.reqTargetNm=a.prodNm||"":t.reqTargetNm=a.dlivId||""},de=w(()=>(t.tmplMsg||"").replace("{target}",t.reqTarget||"-").replace("{targetNm}",t.reqTargetNm||"-").replace("{amount}",Number(t.reqAmount||0).toLocaleString()).replace("{reason}",t.reqReason||"-")),ce=()=>{if(!m.size){n("\uD56D\uBAA9\uC744 \uC120\uD0DD\uD558\uC138\uC694.","error");return}r.bulkTab="status",Object.assign(t,{status:"",courier:"",trackingNo:"",apprAction:"",apprComment:"",apprToUserId:"",apprToNm:"",apprToPhone:"",apprToEmail:"",reqTarget:"\uBC30\uC1A1",reqTargetNm:"",reqAmount:0,reqReason:"",tmplMsg:L}),G(),r.bulkOpen=!0,Object.keys(v).forEach(e=>delete v[e])},pe=w(()=>{if(!r.bulkOpen)return"";const e=Array.from(m),a=window.safeArrayUtils.safeFilter(c,s=>e.includes(s.dlivId));let l=[];if(r.bulkTab==="status"){if(!t.status)return"";l=a.map(s=>`- [${s.dlivId} / ${s.recvNm||s.memberNm}] [\uBC30\uC1A1\uAD00\uB9AC] \uBC30\uC1A1\uC0C1\uD0DC \uBCC0\uACBD: ${s.dlivStatusCd||"-"} \u2192 ${t.status}`)}else if(r.bulkTab==="courier"){if(!t.courier&&!t.trackingNo)return"";l=a.map(s=>{const p=[];return t.courier&&p.push(`\uD0DD\uBC30\uC0AC: ${s.outboundCourierCd||"-"} \u2192 ${t.courier}`),t.trackingNo&&p.push(`\uC6B4\uC1A1\uC7A5: ${s.outboundTrackingNo||"-"} \u2192 ${t.trackingNo}`),`- [${s.dlivId} / ${s.recvNm||s.memberNm}] [\uBC30\uC1A1\uAD00\uB9AC] \uD0DD\uBC30\uC815\uBCF4 \uBCC0\uACBD: ${p.join(", ")}`})}else if(r.bulkTab==="approval"){if(!t.apprAction)return"";l=a.map(s=>`- [${s.dlivId} / ${s.recvNm||s.memberNm}] [\uBC30\uC1A1\uAD00\uB9AC] \uACB0\uC7AC\uCC98\uB9AC: ${t.apprAction}${t.apprComment?" / "+t.apprComment:""}`)}else if(r.bulkTab==="approvalReq"){if(!t.apprToUserId)return"";l=a.map(s=>`- [${s.dlivId} / ${s.recvNm||s.memberNm}] [\uBC30\uC1A1\uAD00\uB9AC] \uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD \u2192 ${t.apprToNm}(${t.apprToUserId}) / \uB300\uC0C1:${t.reqTarget}-${t.reqTargetNm} / \uAE08\uC561:${Number(t.reqAmount||0).toLocaleString()}\uC6D0`)}return l.length?`\u203B \uCD1D ${l.length}\uAC74
`+l.join(`
`):""}),ue=async()=>{var a,l,s,p,f,_,D,P;const e=Array.from(m);if(!e.length){n("\uD56D\uBAA9\uC744 \uC120\uD0DD\uD558\uC138\uC694.","error"),r.bulkOpen=!1;return}if(Object.keys(v).forEach(T=>delete v[T]),r.bulkTab==="status"){if(!t.status){v.status="\uBCC0\uACBD\uD560 \uBC30\uC1A1\uC0C1\uD0DC\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",n("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}if(!await S("\uC77C\uAD04 \uBC30\uC1A1\uC0C1\uD0DC \uBCC0\uACBD",`\uC120\uD0DD\uD55C ${e.length}\uAC74\uC744 [${t.status}] \uC0C1\uD0DC\uB85C \uBCC0\uACBD\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;window.safeArrayUtils.safeForEach(c,o=>{e.includes(o.dlivId)&&(o.dlivStatusCd=t.status)});const h=e.map(o=>({dlivId:o,dlivStatusCd:t.status}));m.clear(),r.bulkOpen=!1;try{const o=await boApiSvc.odDliv.saveList("status",h,"\uBC30\uC1A1\uAD00\uB9AC","\uC77C\uAD04\uCC98\uB9AC");n&&n(`${e.length}\uAC74 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")}catch(o){console.error("[catch-info]",o);const k=((l=(a=o.response)==null?void 0:a.data)==null?void 0:l.message)||o.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";n&&n(k,"error",0)}}else if(r.bulkTab==="courier"){if(!t.courier&&!t.trackingNo){v.courier="\uD0DD\uBC30\uC0AC \uB610\uB294 \uC6B4\uC1A1\uC7A5\uBC88\uD638 \uC911 \uD558\uB098\uB294 \uC785\uB825\uD574\uC8FC\uC138\uC694.",n("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}if(!await S("\uC77C\uAD04 \uD0DD\uBC30\uC815\uBCF4 \uBCC0\uACBD",`\uC120\uD0DD\uD55C ${e.length}\uAC74\uC758 \uD0DD\uBC30\uC815\uBCF4\uB97C \uBCC0\uACBD\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;window.safeArrayUtils.safeForEach(c,o=>{e.includes(o.dlivId)&&(t.courier&&(o.outboundCourierCd=t.courier),t.trackingNo&&(o.outboundTrackingNo=t.trackingNo))});const h=e.map(o=>({dlivId:o,outboundCourierCd:t.courier||null,outboundTrackingNo:t.trackingNo||null}));m.clear(),r.bulkOpen=!1;try{const o=await boApiSvc.odDliv.saveList("courier",h,"\uBC30\uC1A1\uAD00\uB9AC","\uD0DD\uBC30\uC815\uBCF4");n&&n(`${e.length}\uAC74 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")}catch(o){console.error("[catch-info]",o);const k=((p=(s=o.response)==null?void 0:s.data)==null?void 0:p.message)||o.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";n&&n(k,"error",0)}}else if(r.bulkTab==="approval"){if(!t.apprAction){v.apprAction="\uACB0\uC7AC\uCC98\uB9AC \uAD6C\uBD84\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",n("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}if(!await S("\uC77C\uAD04 \uACB0\uC7AC\uCC98\uB9AC",`\uC120\uD0DD\uD55C ${e.length}\uAC74\uC744 [${t.apprAction}] \uCC98\uB9AC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;window.safeArrayUtils.safeForEach(c,o=>{e.includes(o.dlivId)&&(o.apprStatus=t.apprAction,o.apprComment=t.apprComment)});const h=e.map(o=>({dlivId:o}));m.clear(),r.bulkOpen=!1;try{const o=await boApiSvc.odDliv.saveList("approval",h,"\uBC30\uC1A1\uAD00\uB9AC","\uACB0\uC7AC\uCC98\uB9AC");n&&n(`${e.length}\uAC74 \uCC98\uB9AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")}catch(o){console.error("[catch-info]",o);const k=((_=(f=o.response)==null?void 0:f.data)==null?void 0:_.message)||o.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";n&&n(k,"error",0)}}else if(r.bulkTab==="approvalReq"){if(!t.apprToUserId){v.apprToUserId="\uCD94\uAC00\uACB0\uC7AC\uC790(\uD68C\uC6D0)\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",n("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}if(!await S("\uC77C\uAD04 \uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD",`\uC120\uD0DD\uD55C ${e.length}\uAC74\uC744 [${t.apprToNm}](\uC73C)\uB85C \uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;window.safeArrayUtils.safeForEach(c,o=>{e.includes(o.dlivId)&&(o.apprToUserId=t.apprToUserId,o.apprToNm=t.apprToNm,o.reqTarget=t.reqTarget,o.reqTargetNm=t.reqTargetNm,o.reqAmount=Number(t.reqAmount||0),o.reqReason=t.reqReason)});const h=e.map(o=>({dlivId:o}));m.clear(),r.bulkOpen=!1;try{const o=await boApiSvc.odDliv.saveList("approvalReq",h,"\uBC30\uC1A1\uAD00\uB9AC","\uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD");n&&n(`${e.length}\uAC74 \uC694\uCCAD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")}catch(o){console.error("[catch-info]",o);const k=((P=(D=o.response)==null?void 0:D.data)==null?void 0:P.message)||o.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";n&&n(k,"error",0)}}},be=Vue.toRef(r,"bulkOpen"),y={};y.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"dlivId",label:"\uBC30\uC1A1ID"},{value:"orderId",label:"\uC8FC\uBB38ID"},{value:"memberNm",label:"\uD68C\uC6D0\uBA85"},{value:"recvNm",label:"\uC218\uB839\uC778"},{value:"outboundTrackingNo",label:"\uC1A1\uC7A5\uBC88\uD638"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"memberId",type:"pick",label:"\uD68C\uC6D0",nameKey:"memberNm",display:e=>e.memberNm||e.memberId,placeholder:"\uD68C\uC6D0 \uC120\uD0DD",onOpen:()=>N("memberPickModal-open"),onClear:()=>N("memberPickModal-clear")},{key:"dlivStatusCd",type:"select",label:"\uC0C1\uD0DC",options:()=>u.dliv_statuses,nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"},{key:"dateRange",type:"dateRange",label:"\uBC30\uC1A1\uC77C",typeKey:"dateRangeType",startKey:"dateRangeStart",endKey:"dateRangeEnd",typeOptions:()=>u.dliv_date_types,rangeOptions:()=>u.date_range_opts,onRangeChange:()=>N("searchParam-dateRange")},{key:"siteId",type:"select",label:"\uC0AC\uC774\uD2B8",options:()=>R,nullLabel:"\uC804\uCCB4"}],y.listGrid=[{key:"dlivId",label:"\uBC30\uC1A1ID",link:!0,cellInnerStyle:e=>i.selectedId===e?"color:#e8587a;font-weight:700;":""},{key:"orderId",label:"\uC8FC\uBB38ID",refLink:"order"},{key:"memberNm",label:"\uD68C\uC6D0",refLink:"member",refKey:"memberId",fmt:(e,a)=>`${a.memberNm||"-"}  #${a.memberId||a.sessionKey||"-"}`},{key:"recvNm",label:"\uC218\uB839\uC778"},{key:"_courier",label:"\uD0DD\uBC30\uC0AC",excelKeys:[{key:"outboundCourierCdNm",label:"\uD0DD\uBC30\uC0AC"}],fmt:(e,a)=>a.outboundCourierCdNm||a.outboundCourierCd},{key:"outboundTrackingNo",label:"\uC6B4\uC1A1\uC7A5\uBC88\uD638",fmt:e=>e||"-"},{key:"recvAddr",label:"\uBC30\uC1A1\uC9C0",cellStyle:"max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"},{key:"_dlivStatus",label:"\uC0C1\uD0DC",sortKey:"reg",style:"white-space:nowrap;",excelKeys:[{key:"dlivStatusCdNm",label:"\uC0C1\uD0DC"}],fmt:(e,a)=>a.dlivStatusCdNm||a.dlivStatusCd,badge:e=>re(e.dlivStatusCd)},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",cellStyle:"color:#2563eb;"}];const me=e=>(i.selectedId===e.dlivId?"background:#fff8f9;":"")+(F(e.dlivId)?"background:#eef6fd;":"");y.apprContactForm=[{key:"apprToUserId",label:"\uCD94\uAC00\uACB0\uC7AC\uC790",type:"select",colSpan:2,nullLabel:"\uC120\uD0DD\uD558\uC138\uC694",required:!0,options:()=>x.map(e=>({value:e.memberId,label:`${e.memberNm} (${e.memberId})`})),onChange:()=>N("actionsModal-apprToChange")},{key:"apprToPhone",label:"\uC804\uD654\uBC88\uD638",type:"text",readonly:!0},{key:"apprToEmail",label:"\uC774\uBA54\uC77C",type:"text",readonly:!0}],y.apprTargetForm=[{key:"reqTarget",label:"\uC694\uCCAD\uB300\uC0C1",type:"select",nullable:!1,options:()=>u.req_targets,onChange:()=>N("actionsModal-reqTargetChange")},{key:"reqTargetNm",label:"\uC694\uCCAD\uB300\uC0C1\uBA85",type:"text",placeholder:"\uC218\uC815 \uAC00\uB2A5"}],y.apprDetailForm=[{key:"reqAmount",label:"\uC694\uCCAD\uAE08\uC561",type:"number",colSpan:2},{type:"rowBreak"},{key:"reqReason",label:"\uC694\uCCAD\uC0AC\uC720",type:"textarea",rows:2,placeholder:"(\uC120\uD0DD)"},{type:"rowBreak"},{key:"tmplMsg",label:"\uC804\uC1A1 \uD15C\uD50C\uB9BF",type:"slot",name:"tmplMsg",colSpan:2,hint:"\uCE58\uD658: {target} {targetNm} {amount} {reason}"}];const ge=w(()=>{const e=u.courier_codes;return e&&e.length?e:Q});return y.bulkCourierForm=[{key:"courier",label:"\uD0DD\uBC30\uC0AC",type:"select",nullLabel:"\uC120\uD0DD\uD558\uC138\uC694",options:()=>ge.value,colSpan:2},{type:"rowBreak"},{key:"trackingNo",label:"\uC6B4\uC1A1\uC7A5\uBC88\uD638",type:"text",placeholder:"(\uC120\uD0DD\uD55C \uD56D\uBAA9 \uBAA8\uB450 \uB3D9\uC77C \uBC88\uD638\uB85C \uBCC0\uACBD)",colSpan:2}],y.bulkApprovalForm=[{key:"apprAction",label:"\uACB0\uC7AC\uCC98\uB9AC \uAD6C\uBD84",type:"select",nullLabel:"\uC120\uD0DD\uD558\uC138\uC694",required:!0,options:()=>u.approval_actions,colSpan:2},{type:"rowBreak"},{key:"apprComment",label:"\uACB0\uC7AC \uCF54\uBA58\uD2B8",type:"textarea",rows:2,placeholder:"(\uC120\uD0DD)"}],{columns:y,excelModal:se,buildExcelParams:ne,dlivs:c,members:x,uiState:r,codes:u,searchParam:d,listGridPager:b,detailPanel:i,checked:m,bulkForm:t,bulkErrors:v,bulkOpen:be,memberPick:M,handleBtnAction:N,handleSelectAction:W,fnCallbackModal:H,cfDetailEditId:te,cfDetailKey:ae,cfAllChecked:B,cfBuildTmplMsg:de,cfBulkPreview:pe,selectedId:w(()=>i.selectedId),isChecked:F,fnGridRowStyle:me,inlineNavigate:ee}},template:`
<bo-page title="\uBC30\uC1A1\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A0. \uBAA9\uB85D \uC601\uC5ED =================================================== -->
  <bo-container title="\uBC30\uC1A1\uBAA9\uB85D" :count-text="listGridPager.pageTotalCount + '\uAC74'">
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
        @click="handleBtnAction('dlivs-add', $event)"
        @auxclick="handleBtnAction('dlivs-add', $event)">
        + \uC2E0\uADDC
      </button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uADF8\uB9AC\uB4DC (\uAE30\uBCF8 10\uAC1C \uC601\uC5ED + \uD654\uBA74 \uB192\uC774 \uBC18\uC751\uD615 \uD655\uC7A5, \uCD08\uACFC \uC2DC \uB0B4\uBD80 \uC2A4\uD06C\uB864) =========== -->
    <div style="max-height:calc(100vh - 340px);min-height:480px;overflow-y:auto;border:1px solid #eef0f3;border-radius:6px;background:#fff;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid bare selectable :columns="columns.listGrid" :rows="dlivs" row-key="dlivId" :selected-key="detailPanel.selectedId"
        :sort-state="uiState" :is-checked="isChecked" :all-checked="cfAllChecked"
        :row-style="fnGridRowStyle" empty-text="\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
        @sort="key => handleBtnAction('dlivs-sort', key)"
        grid-id="dlivs-cellClick" @cell-click="e => { if (e.col?.link) { (e.ctrlKey || e.metaKey || e.button === 1) ? props.openNewWindow('odDlivDtl', e.row.dlivId) : handleSelectAction('dlivs-rowEdit', e.row.dlivId); } }"
        @toggle-check="id => handleSelectAction('dlivs-rowToggleCheck', id)"
        @toggle-check-all="handleSelectAction('dlivs-rowToggleCheckAll')"
        @ref-click="({type,id}) => handleSelectAction('dlivs-rowRefClick', {type, id})" row-actions
            table-max-height="540px">
        <template #row-actions="{ row }">
          <div class="actions">
            <button class="btn btn_row_edit"
              @click="e => { (e.ctrlKey || e.metaKey || e.button === 1) ? props.openNewWindow('odDlivDtl', row.dlivId, 'edit') : handleSelectAction('dlivs-rowEdit', row.dlivId); }"
              @auxclick="e => { (e.ctrlKey || e.metaKey || e.button === 1) ? props.openNewWindow('odDlivDtl', row.dlivId, 'edit') : handleSelectAction('dlivs-rowEdit', row.dlivId); }">
              \uC218\uC815
            </button>
            <button class="btn btn_row_delete" @click="handleSelectAction('dlivs-rowDelete', row)">
              \uC0AD\uC81C
            </button>
          </div>
        </template>
      </bo-grid>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD398\uC774\uC800: \uD55C \uC904 \uD45C\uC2DC + \uCE74\uB4DC \uD558\uB2E8 \uAE54\uB054 \uB9C8\uAC10 ============================= -->
    <div style="margin-top:6px;white-space:nowrap;overflow-x:auto;">
      <bo-pager :pager="listGridPager" :on-set-page="n => handleBtnAction('dlivs-pager-setPage', n)"
        :on-size-change="() => handleSelectAction('dlivs-pager-sizeChange')"
        style="margin-top:0;min-height:34px;" />
    </div>
  </bo-container>
  <!-- ===== \u25A0. \uD558\uB2E8 \uC0C1\uC138: DlivDtl \uCEF4\uD3EC\uB10C\uD2B8 \uC784\uBCA0\uB4DC (\uD56D\uC0C1 \uD45C\uC2DC, \uC804\uCCB4 \uD3ED) ================= -->
  <od-dliv-dtl
    :key="cfDetailKey"
    :navigate="inlineNavigate"
    :dtl-id="cfDetailEditId"
    :dtl-mode="detailPanel.openMode === 'edit' ? (cfDetailEditId ? 'edit' : 'new') : 'view'"
    :active="detailPanel.active"
    :reload-trigger="detailPanel.reloadTrigger"
    />
  <!-- ===== \u25A0. \uBCC0\uACBD\uC791\uC5C5 \uBAA8\uB2EC (actionsModal) ===================================== -->
  <bo-modal :show="bulkOpen" :title="'\u{1F4DD} \uBCC0\uACBD\uC791\uC5C5 (' + checked.size + '\uAC74 \uC120\uD0DD)'" width="480px" box-pad="0" @close="handleBtnAction('actionsModal-close')">
    <div>
      <div style="display:flex;gap:6px;padding:10px 14px 0;background:#fafafa;">
        <button v-for="t in [{id:'status',label:'\uBC30\uC1A1\uC0C1\uD0DC'},{id:'courier',label:'\uD0DD\uBC30\uC0AC\xB7\uC6B4\uC1A1\uC7A5'},{id:'approval',label:'\uACB0\uC7AC\uCC98\uB9AC'},{id:'approvalReq',label:'\uCD94\uAC00\uACB0\uC7AC\uC694\uCCAD'}]" :key="t?.id"
          @click="handleBtnAction('actionsModal-tabChange', t.id)"
          :style="{flex:1,padding:'8px 12px',border:'none',cursor:'pointer',fontSize:'12.5px',borderRadius:'8px 8px 0 0',fontWeight: uiState.bulkTab===t.id?800:600,background: uiState.bulkTab===t.id?'#fff':'transparent',color: uiState.bulkTab===t.id?'#e8587a':'#888',borderBottom: uiState.bulkTab===t.id?'2px solid #e8587a':'2px solid transparent'}">
          {{ t.label }}
        </button>
      </div>
      <div style="padding:20px 18px;flex:1;overflow-y:auto;min-height:280px;">
        <div v-if="uiState.bulkTab==='status'">
          <label class="form-label">
            \uBCC0\uACBD\uD560 \uBC30\uC1A1\uC0C1\uD0DC
          </label>
          <select class="form-control" v-model="bulkForm.status">
            <option value="">\uC120\uD0DD\uD558\uC138\uC694</option>
            <option v-for="c in codes.dliv_statuses" :key="c.codeValue" :value="c.codeValue">
              {{ c.codeLabel }}
            </option>
          </select>
          <span v-if="bulkErrors.status" class="field-error">{{ bulkErrors.status }}</span>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD0DD\uBC30\uC0AC/\uC6B4\uC1A1\uC7A5\uBC88\uD638 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ====================== -->
        <div v-if="uiState.bulkTab==='courier'">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================ -->
          <bo-form-area :columns="columns.bulkCourierForm" :form="bulkForm" :errors="bulkErrors"
            :cols="2" :show-actions="false" />
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
  <!-- ===== \u25A0. \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC \uBAA8\uB2EC (\uC989\uC2DC/\uC608\uC57D + \uC9C4\uD589\uC911 \uC548\uB0B4 + \uAC15\uC81C\uCDE8\uC18C) ========== -->
  <bo-excel-down-modal :show="excelModal.show" domain="odDliv"
    area-nm="\uBC30\uC1A1\uAD00\uB9AC" :columns="columns.listGrid" ui-nm="\uBC30\uC1A1\uAD00\uB9AC" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
