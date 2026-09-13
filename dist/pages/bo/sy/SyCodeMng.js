window.SyCodeMng={name:"SyCodeMng",props:{navigate:{type:Function,required:!0}},setup(B){const{reactive:h,computed:v,watch:Ie,onMounted:Y,nextTick:M}=Vue,p=window.boApp.showToast,N=window.boApp.showConfirm,w=h({use_yn:[],date_range_opts:[]}),S=h({}),t=h({checkAll:!1,dragMoved:!1,loading:!1,selectedGrp:"",grpSelectedPath:"",focusedIdx:null,selectedCodeId:"__new__",codeReloadTrigger:0,dragSrc:null,activeCodeTab:"\uC77C\uBC18",detailActive:!1,detailResetSeq:0,isTreeType:!1,grpDirtyCount:0,grpSortKey:"",grpSortDir:"asc",grpRows:[],gridRows:[]}),U=(e,o={})=>{if(e==="searchParam-list")return f();if(e==="searchParam-reset")return Object.assign(u,E),t.grpSortKey="",t.grpSortDir="asc",t.grpSelectedPath="",t.selectedGrp="",t.grpRows=[],t.gridRows=[],t.focusedIdx=null,f();if(e==="codeGroups-add")return ae();if(e==="codeGroups-save")return ce();if(e==="codes-add")return ee();if(e==="codes-save")return se();if(e==="codes-deleteChecked")return le();if(e==="codes-cancelChecked")return re();if(e==="codes-excel")return Ge();if(e==="codeTree-expandAll")return pe();if(e==="codeTree-collapseAll")return ue();if(e==="tab-change"){t.activeCodeTab=o;return}else{if(e==="detailPanel-close")return fe();if(e==="codeGroups-sort")return Q(o);console.warn("[handleBtnAction] unknown cmd:",e)}},K=(e,o={})=>{if(e==="pathTree-select")return ie(o);if(e==="codeGroups-rowOpen")return V(o.row,o.event);if(e==="codeGroups-rowCancel")return ne(o);if(e==="codeGroups-rowDelete")return de(o);if(e==="codes-reorder")return J();if(e==="codes-rowSelect"){t.selectedCodeId=o;return}else{if(e==="codes-rowEdit")return he(o);if(e==="codes-rowCancel")return oe(o);if(e==="codes-rowDelete")return te(o);if(e==="codeTree-toggle")return ge(o);console.warn("[handleSelectAction] unknown cmd:",e)}},z=(e,o,r,l={})=>{if(e==="codeGroups-cellChange")return H(r);if(e==="codeGroups-cellClick")return o==="__no__"?V(r,l.event):void 0;if(e==="codes-cellChange")return W(r);console.warn("[handleGridCellAction] unknown cmd:",e)},u=h({searchType:"",searchValue:"",grp:"",useYn:"",dateRange:"",dateRangeType:"",dateRangeStart:"",dateRangeEnd:""}),E={},g=h(new Set),G=h([]),I=h([]),L=boUtil.bofGetSiteNm();let $=-1,j=-1,A=0;const D=["codeGrp","codeLabel","codeValue","sortOrd","useYn","codeOpt1","codeRemark","parentCodeValue"],q=["codeGrp","grpNm","pathId","description","type","useYn"],O={codeGrp:{asc:"codeGrp asc",desc:"codeGrp desc"},grpNm:{asc:"grpNm asc",desc:"grpNm desc"}},F=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["USE_YN","DATE_RANGE_OPT"],{compNm:"SyCodeMng"}),w.use_yn=e.sgGetGrpCodes("USE_YN"),w.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")};Y(async()=>{const o=new Date().getFullYear();Object.assign(u,{useYn:"Y",dateRangeType:"reg_date",dateRangeStart:`${o-3}-01-01`,dateRangeEnd:`${o}-12-31`}),await F();const r=new URLSearchParams(window.location.search),l=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(u).forEach(a=>{!l.includes(a)&&r.has(a)&&(u[a]=r.get(a))}),await f(),Object.assign(E,u)});const W=e=>{e._row_status==="I"||e._row_status==="D"||(e._row_status=D.some(o=>String(e[o])!==String(e._row_org[o]))?"U":"N")},H=e=>{e._row_status==="I"||e._row_status==="D"||(e._row_status=q.some(o=>String(e[o]||"")!==String(e._row_org[o]||""))?"U":"N",C())},J=async()=>{var o,r;const e=[];if(t.gridRows.forEach((l,a)=>{const d=a+1;l.sortOrd!==d&&(l.sortOrd=d,l._row_status!=="I"&&l._row_status!=="D"&&l.codeId!=null&&(e.push({codeId:l.codeId,sortOrd:d,rowStatus:"U"}),l._row_status==="N"&&(l._row_status="U")))}),e.length>0)try{await boApiSvc.syCode.saveList("order",e,"\uACF5\uD1B5\uCF54\uB4DC\uAD00\uB9AC","\uC21C\uC11C\uBCC0\uACBD"),coUtil.cofInvalidateCodeGrps([...new Set(e.map(l=>l.codeGrp).filter(Boolean))]),p==null||p("\uC21C\uC11C\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await k()}catch(l){console.error("[SyCodeMng] sort save failed",l),p==null||p(((r=(o=l.response)==null?void 0:o.data)==null?void 0:r.message)||"\uC21C\uC11C \uC800\uC7A5 \uC2E4\uD328","error",0)}t.dragSrc=null,t.dragMoved=!1},Q=e=>{t.grpSortKey===e?t.grpSortDir==="asc"?t.grpSortDir="desc":(t.grpSortKey="",t.grpSortDir="asc"):(t.grpSortKey=e,t.grpSortDir="asc"),f()},f=async()=>{var o,r,l,a,d;const e=++A;try{const s={...Object.fromEntries(Object.entries(u).filter(([c,y])=>c!=="dateRange"&&y!==""&&y!==null&&y!==void 0)),...t.grpSelectedPath?{pathId:t.grpSelectedPath}:{},...Ce()};s.searchValue&&!s.searchType&&(s.searchType="codeGrp,codeLabel,codeValue");const[n,i]=await Promise.all([boApiSvc.syCodeGrp.getAll(s,"\uCF54\uB4DC\uAD00\uB9AC","\uADF8\uB8F9\uBAA9\uB85D\uC870\uD68C"),boApiSvc.syCode.getPage({pageNo:1,pageSize:1e5},"\uCF54\uB4DC\uAD00\uB9AC","\uCF54\uB4DC\uC218\uC9D1\uACC4")]);if(e!==A)return;const R=((o=n.data)==null?void 0:o.data)||[],_=((l=(r=i.data)==null?void 0:r.data)==null?void 0:l.pageList)||((d=(a=i.data)==null?void 0:a.data)==null?void 0:d.list)||[],T=new Map;_.forEach(c=>T.set(c.codeGrp,(T.get(c.codeGrp)||0)+1));const ve=R.map(c=>{var y;return{codeGrpId:c.codeGrpId,siteId:c.siteId||null,codeGrp:c.codeGrp,grpNm:c.grpNm,pathId:c.pathId||null,description:c.codeGrpDesc||"",useYn:c.useYn||"Y",_row_status:"N",codeCount:(y=T.get(c.codeGrp))!=null?y:0,_row_org:{codeGrp:c.codeGrp,grpNm:c.grpNm,pathId:c.pathId||null,description:c.codeGrpDesc||"",useYn:c.useYn||"Y"}}});if(t.grpRows=[],t.gridRows=[],await M(),e!==A)return;t.grpRows=ve,C(),t.focusedIdx=null,X()}catch{}},X=async()=>{var e;try{const o=Object.fromEntries(Object.entries(u).filter(([a,d])=>d!==""&&d!==null&&d!==void 0&&a!=="pathId")),l=((e=(await boApiSvc.syCodeGrp.getPathTreeNodeCounts(o,"\uACBD\uB85C\uBCC4\uCE74\uC6B4\uD2B8","\uC870\uD68C")).data)==null?void 0:e.data)||[];Object.keys(S).forEach(a=>{delete S[a]});for(const a of l)a&&a.pathId!=null&&(S[a.pathId]=a.cnt)}catch(o){console.error("[handleLoadPathTreeNodeCounts]",o)}},k=async()=>{var e,o,r,l;if(!t.selectedGrp){t.gridRows=[],t.isTreeType=!1,b();return}try{t.loading=!0;const a=await boApiSvc.syCode.getPage({pageNo:1,pageSize:1e4,codeGrp:t.selectedGrp},"\uCF54\uB4DC\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C"),d=((o=(e=a.data)==null?void 0:e.data)==null?void 0:o.pageList)||((l=(r=a.data)==null?void 0:r.data)==null?void 0:l.list)||[];t.gridRows=d.map(n=>Z(n)),t.focusedIdx=null;const s=t.grpRows.find(n=>n.codeGrp===t.selectedGrp);t.isTreeType=(s==null?void 0:s.type)==="\uD2B8\uB9AC",b()}catch{}finally{t.loading=!1}},Z=e=>({...e,_row_status:"N",_row_check:!1,codeOpt1:e.codeOpt1||"",_row_org:{codeGrp:e.codeGrp,codeLabel:e.codeLabel,codeValue:e.codeValue,sortOrd:e.sortOrd,useYn:e.useYn,codeRemark:e.codeRemark,codeOpt1:e.codeOpt1||"",parentCodeValue:e.parentCodeValue||null}}),ee=()=>{const e=t.selectedGrp,o=t.gridRows.reduce((a,d)=>d._row_status!=="D"?Math.max(a,d.sortOrd||0):a,0),r=t.focusedIdx!==null?t.focusedIdx+1:t.gridRows.length,l={codeId:$--,codeGrp:e,codeLabel:"",codeValue:"",sortOrd:o+1,useYn:"Y",codeOpt1:"",codeRemark:"",parentCodeValue:null,_row_status:"I",_row_check:!1,_row_org:{codeGrp:e,codeLabel:"",codeValue:"",sortOrd:o+1,useYn:"Y",codeOpt1:"",codeRemark:"",parentCodeValue:null}};t.gridRows.splice(r,0,l),t.focusedIdx=r,t.selectedCodeId=l.codeId},te=e=>{const o=t.gridRows[e];o._row_status==="I"?(t.gridRows.splice(e,1),t.focusedIdx!==null&&(t.focusedIdx=Math.max(0,t.focusedIdx-(t.focusedIdx>=e?1:0)))):o._row_status="D"},oe=e=>{const o=t.gridRows[e];o._row_status==="I"?(t.gridRows.splice(e,1),t.focusedIdx!==null&&(t.focusedIdx=Math.max(0,t.focusedIdx-(t.focusedIdx>=e?1:0)))):(o._row_org&&D.forEach(r=>{o[r]=o._row_org[r]}),o._row_status="N")},re=()=>{const e=new Set(t.gridRows.filter(o=>o._row_check).map(o=>o.codeId));if(!e.size){p("\uCDE8\uC18C\uD560 \uD589\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","info");return}for(let o=t.gridRows.length-1;o>=0;o--){const r=t.gridRows[o];!e.has(r.codeId)||r._row_status==="N"||(r._row_status==="I"?t.gridRows.splice(o,1):(r._row_org&&D.forEach(l=>{r[l]=r._row_org[l]}),r._row_status="N"))}},le=()=>{for(let e=t.gridRows.length-1;e>=0;e--)t.gridRows[e]._row_check&&(t.gridRows[e]._row_status==="I"?t.gridRows.splice(e,1):t.gridRows[e]._row_status="D")},se=async()=>{const e=t.gridRows.filter(d=>d._row_status==="I"),o=t.gridRows.filter(d=>d._row_status==="U"),r=t.gridRows.filter(d=>d._row_status==="D");if(!e.length&&!o.length&&!r.length){p("\uBCC0\uACBD\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}for(const d of[...e,...o])if(!d.codeGrp||!d.codeLabel||!d.codeValue){p("\uCF54\uB4DC\uADF8\uB8F9, \uCF54\uB4DC\uB77C\uBCA8, \uCF54\uB4DC\uAC12\uC740 \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.","error");return}const l=[];if(e.length&&l.push({label:`\uB4F1\uB85D ${e.length}\uAC74`,cls:"badge-blue"}),o.length&&l.push({label:`\uC218\uC815 ${o.length}\uAC74`,cls:"badge-orange"}),r.length&&l.push({label:`\uC0AD\uC81C ${r.length}\uAC74`,cls:"badge-red"}),!!await N("\uC800\uC7A5 \uD655\uC778","\uB2E4\uC74C \uB0B4\uC6A9\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",{details:l,btnOk:"\uC608",btnCancel:"\uC544\uB2C8\uC624"}))try{t.loading=!0;const d=[...e,...o,...r].map(n=>({...n,rowStatus:n._row_status}));await boApi.post("/bo/sy/code/save-list",d,coUtil.cofApiHdr("\uACF5\uD1B5\uCF54\uB4DC\uAD00\uB9AC","\uC800\uC7A5")),coUtil.cofInvalidateCodeGrps([...new Set(d.map(n=>n.codeGrp).filter(Boolean))]);const s=[];e.length&&s.push(`\uB4F1\uB85D ${e.length}\uAC74`),o.length&&s.push(`\uC218\uC815 ${o.length}\uAC74`),r.length&&s.push(`\uC0AD\uC81C ${r.length}\uAC74`),p(`${s.join(", ")} \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`),await k()}catch(d){p(coUtil.cofErrMsg(d,"\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{t.loading=!1}},ae=()=>{t.grpRows=[...t.grpRows,{codeGrp:"NEW_GRP",grpNm:"\uC2E0\uADDC \uADF8\uB8F9",pathId:"new.path",description:"",type:"\uC77C\uBC18",useYn:"Y",_row_status:"I",_tempId:j--,_row_org:{}}],C()},de=e=>{const o=t.grpRows,r=o[e];r._row_status==="I"?t.grpRows=o.filter((l,a)=>a!==e):r._row_status=r._row_status==="D"?"N":"D",C()},ne=e=>{const o=t.grpRows,r=o[e];r._row_status==="I"?t.grpRows=o.filter((l,a)=>a!==e):(Object.assign(r,r._row_org),r._row_status="N"),C()},ce=async()=>{if(!t.grpDirtyCount){p("\uBCC0\uACBD\uB41C \uD589\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","warning");return}if(!await N("\uC800\uC7A5",`${t.grpDirtyCount}\uAC74 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const o=t.grpRows.filter(r=>r._row_status!=="N").map(r=>({codeGrpId:r.codeGrpId||null,siteId:r.siteId||null,codeGrp:r.codeGrp,grpNm:r.grpNm,pathId:r.pathId||null,codeGrpDesc:r.description||null,useYn:r.useYn,rowStatus:r._row_status}));try{await boApiSvc.syCodeGrp.saveList("base",o,"\uACF5\uD1B5\uCF54\uB4DC\uADF8\uB8F9\uAD00\uB9AC","\uC800\uC7A5"),coUtil.cofInvalidateCodeGrps([...new Set(o.map(r=>r.codeGrp).filter(Boolean))]),p("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await f()}catch(r){p(coUtil.cofErrMsg(r,"\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},V=(e,o)=>{o&&o.stopPropagation(),t.selectedGrp=e.codeGrp,t.focusedIdx=null,t.checkAll=!1,x(),k()},ie=e=>{t.grpSelectedPath=e,t.selectedGrp="",t.gridRows=[],t.isTreeType=!1,t.focusedIdx=null,t.activeCodeTab="\uC77C\uBC18",x(),b(),f()},pe=()=>{g.clear();const e=t.gridRows.filter(l=>l._row_status!=="D"),o=new Map(e.map(l=>[l.codeValue,l])),r=new Set;e.forEach(l=>{const a=l.parentCodeValue;a&&o.has(a)&&r.add(a)}),r.forEach(l=>g.add(l)),b()},ue=()=>{g.clear(),b()},ge=e=>{g.has(e)?g.delete(e):g.add(e),b()},he=e=>{t.selectedCodeId=e,t.detailActive=!0,t.codeReloadTrigger++},x=()=>{t.selectedCodeId="__new__",t.detailActive=!1,t.detailResetSeq++},we=()=>{t.selectedCodeId="__new__",t.detailActive=!0,t.detailResetSeq++},fe=()=>{x()},be=(e,o={})=>{if(e==="syCodeMng"){o.reload&&k(),x();return}if(e==="__cancelEdit__"){x();return}e!=="__switchToEdit__"&&B.navigate(e,o)},_e=v(()=>t.selectedCodeId==="__new__"?null:t.selectedCodeId),ye=v(()=>`${t.selectedCodeId}_${t.detailResetSeq}`),xe=()=>{const e=t.selectedGrp||"";return e?`\uCF54\uB4DC\uBAA9\uB85D #${e}`:"\uCF54\uB4DC\uBAA9\uB85D"},C=()=>{t.grpDirtyCount=t.grpRows.filter(e=>e._row_status!=="N").length},Ce=()=>{const{grpSortKey:e,grpSortDir:o}=t;return!e||!O[e]?{}:{sort:O[e][o]}},b=()=>{if(G.splice(0),t.isTreeType){const s=t.gridRows.filter(i=>i._row_status!=="D"),n=new Map(s.map(i=>[i.codeValue,i]));s.forEach(i=>{let R=0,_=i.parentCodeValue?n.get(i.parentCodeValue):null;for(;_;)R++,_=_.parentCodeValue?n.get(_.parentCodeValue):null;G.push({label:`${i.codeLabel}(${i.codeValue})`,value:i.codeValue,displayLabel:"\u3000".repeat(R)+`${i.codeLabel}(${i.codeValue})`})})}if(I.splice(0),!t.selectedGrp)return;const e=t.gridRows.filter(s=>s._row_status!=="D"),o=new Map(e.map(s=>[s.codeValue,s])),r=new Map;e.forEach(s=>{const n=s.parentCodeValue||null;!n||!o.has(n)||(r.has(n)||r.set(n,[]),r.get(n).push(s))});const l=e.filter(s=>!s.parentCodeValue||!o.has(s.parentCodeValue)),a=s=>({value:s.codeValue,label:s.codeLabel,code:s,children:(r.get(s.codeValue)||[]).map(a)}),d=(s,n)=>{I.push({node:s,depth:n,isExpanded:g.has(s.value)}),g.has(s.value)&&s.children.forEach(i=>d(i,n+1))};l.map(a).forEach(s=>d(s,0))},P=h({show:!1}),Se=()=>({codeGrp:t.selectedGrp}),Ge=()=>{P.show=!0},m={};m.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"codeGrp",label:"\uCF54\uB4DC\uADF8\uB8F9"},{value:"codeLabel",label:"\uB77C\uBCA8"},{value:"codeValue",label:"\uCF54\uB4DC\uAC12"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"useYn",type:"select",label:"\uC0AC\uC6A9\uC5EC\uBD80",options:()=>w.use_yn,nullLabel:"\uC0AC\uC6A9\uC5EC\uBD80 \uC804\uCCB4"},{key:"dateRange",type:"dateRange",label:"\uB4F1\uB85D\uC77C",startKey:"dateRangeStart",endKey:"dateRangeEnd",rangeOptions:()=>w.date_range_opts,onRangeChange:()=>{boUtil.bofApplyDateRange(u)}}];const ke=v(()=>{const e=[{key:"codeGrp",label:"\uCF54\uB4DC\uADF8\uB8F9",edit:"text"},{key:"type",label:"\uC720\uD615",style:"width:60px;",align:"center",fmt:()=>t.isTreeType?"\uD2B8\uB9AC":"\uC77C\uBC18",cellInnerStyle:()=>"display:inline-block;padding:3px 6px;border-radius:3px;font-size:10px;font-weight:600;"+(t.isTreeType?"background:#fecaca;color:#991b1b;":"background:#dbeafe;color:#1e40af;")},{key:"codeLabel",label:"\uCF54\uB4DC\uB77C\uBCA8",edit:"text"},{key:"codeValue",label:"\uCF54\uB4DC\uAC12",edit:"text",mono:!0}];return t.isTreeType&&e.push({key:"parentCodeValue",label:"\uC0C1\uC704\uCF54\uB4DC\uAC12",style:"width:140px;",edit:"select",nullable:!0,nullLabel:"-- \uC5C6\uC74C --",options:()=>G.map(o=>({value:o.value,label:o.label}))}),e.push({key:"sortOrd",label:"\uC21C\uC11C",cls:"col-ord",edit:"number"},{key:"useYn",label:"\uC0AC\uC6A9\uC5EC\uBD80",cls:"col-use",edit:"select",options:()=>w.use_yn},{key:"codeOpt1",label:"\uC2A4\uD0C0\uC77C (code_opt1)",style:"width:140px;",edit:"text",mono:!0,placeholder:"#000000 / fa-icon"},{key:"codeRemark",label:"\uBE44\uACE0",edit:"text"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",style:"width:80px;",align:"center",cellStyle:"font-size:11px;color:#2563eb;",fmt:()=>L}),e});m.treeGrid=[{key:"codeLabel",label:"\uCF54\uB4DC\uB77C\uBCA8",style:"min-width:220px;"},{key:"codeValue",label:"\uCF54\uB4DC\uAC12",edit:"text",mono:!0},{key:"parentCodeValue",label:"\uC0C1\uC704\uCF54\uB4DC\uAC12",style:"width:140px;",edit:"select",nullable:!0,nullLabel:"-- \uC5C6\uC74C --",options:()=>G.map(e=>({value:e.value,label:e.displayLabel||e.label}))},{key:"sortOrd",label:"\uC21C\uC11C",cls:"col-ord",edit:"number"},{key:"useYn",label:"\uC0AC\uC6A9\uC5EC\uBD80",cls:"col-use",edit:"select",options:()=>w.use_yn},{key:"codeOpt1",label:"\uC2A4\uD0C0\uC77C (code_opt1)",style:"width:140px;",edit:"text",mono:!0,placeholder:"#000000 / fa-icon"},{key:"codeRemark",label:"\uBE44\uACE0",edit:"text"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",style:"width:80px;",align:"center",cellStyle:"font-size:11px;color:#2563eb;",fmt:()=>L}];const me=e=>e.node.code,Re=e=>e.node.value;return m.grpGrid=[{key:"pathId",label:"\uD45C\uC2DC\uACBD\uB85C (\uC608: aa.bb.cc)",style:"width:170px;max-width:170px;",pathPick:"sy_code_grp"},{key:"codeGrp",label:"\uCF54\uB4DC\uADF8\uB8F9",sortKey:"codeGrp",edit:"text",mono:!0},{key:"grpNm",label:"\uADF8\uB8F9\uBA85",sortKey:"grpNm"},{key:"type",label:"\uC720\uD615",style:"width:70px;",align:"center",cellInnerStyle:e=>e?"display:inline-block;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;"+(e==="\uD2B8\uB9AC"?"background:#fecaca;color:#991b1b;":"background:#dbeafe;color:#1e40af;"):""},{key:"description",label:"\uC124\uBA85",sortKey:"description",edit:"text"},{key:"useYn",label:"\uC0AC\uC6A9",cls:"col-use",edit:"select",options:()=>w.use_yn}],{columns:m,uiState:t,codeGrpCounts:S,searchParam:u,treeExpanded:g,flatTree:I,excelModal:P,buildExcelParams:Se,cfCodeGridColumns:ke,treeRowAccessor:me,treeRowKeyFn:Re,handleBtnAction:U,handleSelectAction:K,handleGridCellAction:z,fnCodeListTitle:xe,cfDetailEditId:_e,cfDetailKey:ye,openNew:we,inlineNavigate:be}},template:`
<bo-page title="\uACF5\uD1B5\uCF54\uB4DC\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uD45C\uC2DC\uACBD\uB85C \uD2B8\uB9AC + \uCF54\uB4DC\uADF8\uB8F9 CRUD ===================================== -->
  <div class="bo-2col" style="margin-bottom:12px;">
    <!-- ===== \u25A0.\u25A0. \uACBD\uB85C \uD2B8\uB9AC (bo-container bare \u2192 \uC790\uCCB4 \uCE74\uB4DC) ====================== -->
    <bo-container bare>
      <bo-path-tree-card biz-cd="sy_code_grp" title="\uD45C\uC2DC\uACBD\uB85C" :show-biz-cd="false" :counts="codeGrpCounts"
        max-height="calc(50vh - 130px)"
        :selected="uiState.grpSelectedPath" @select="path => handleSelectAction('pathTree-select', path)" />
    </bo-container>
    <!-- ===== \u25A0.\u25A0. CRUD \uADF8\uB9AC\uB4DC (bo-container bare \u2192 \uC790\uCCB4 \uCE74\uB4DC) ==================== -->
    <bo-container bare>
    <bo-grid-crud
      :columns="columns.grpGrid" :rows="uiState.grpRows" row-key="codeGrp" :selected-key="uiState.selectedGrp"
      list-title="\uACF5\uD1B5\uCF54\uB4DC\uADF8\uB8F9\uAD00\uB9AC" max-height="calc(50vh - 130px)"
      :show-row-id="false" :show-row-check="false" :draggable="false"
      :show-add="false" :show-save="false"
      :sort-state="{ sortKey: uiState.grpSortKey, sortDir: uiState.grpSortDir }"
      @sort="key => handleBtnAction('codeGroups-sort', key)"
      grid-id="codeGroups-cellChange" @cell-change="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
      @cell-click="e => handleGridCellAction('codeGroups-cellClick', e.colKey, e.row, e)">
      <template #toolbar-actions>
        <button class="btn btn_new" @click="handleBtnAction('codeGroups-add')">
          + \uD589\uCD94\uAC00
        </button>
        <button class="btn btn_save" @click="handleBtnAction('codeGroups-save')" :disabled="!uiState.grpDirtyCount">
          \uC800\uC7A5
          <span v-if="uiState.grpDirtyCount">
            ({{ uiState.grpDirtyCount }})
          </span>
        </button>
      </template>
      <template #cell-grpNm="{ row: g }">
        <td>
          <div style="display:flex;gap:8px;align-items:center;">
            <input class="grid-input" v-model="g.grpNm" :disabled="g._row_status==='D'" @input="handleGridCellAction('codeGroups-cellChange', null, g)" style="flex:1;" />
            <span v-if="g._row_status !== 'D'" style="font-size:11px;color:#666;font-weight:500;white-space:nowrap;padding:4px 8px;background:#f3f4f6;border-radius:4px;">
              {{ g.codeCount != null ? g.codeCount : '-' }}\uAC1C
            </span>
          </div>
        </td>
      </template>
      <template #row-actions="{ row: g, idx }">
        <button v-if="g._row_status !== 'D'" class="btn btn-xs" @click.stop="handleSelectAction('codeGroups-rowOpen', { row: g, event: $event })"
          style="background:#f0f4ff;border:1px solid #c7d2fe;color:#4338ca;font-weight:600;"
          title="\uCF54\uB4DC\uAD00\uB9AC">
          \uCF54\uB4DC\uAD00\uB9AC
        </button>
        <bo-row-cancel-delete :row="g" @cancel="handleSelectAction('codeGroups-rowCancel', idx)" @delete="handleSelectAction('codeGroups-rowDelete', idx)" />
      </template>
    </bo-grid-crud>
    </bo-container>
  </div>
  <!-- ===== \u25A1.\u25A1. CRUD \uADF8\uB9AC\uB4DC ============================================== -->
  <!-- ===== \u25A1. \uD45C\uC2DC\uACBD\uB85C \uD2B8\uB9AC + \uCF54\uB4DC\uADF8\uB8F9 CRUD ===================================== -->
  <!-- ===== \u25A0. \uCF54\uB4DC \uBAA9\uB85D \uC601\uC5ED (bo-container: \uD0ED + \uADF8\uB9AC\uB4DC) ========================= -->
  <bo-container title="\uCF54\uB4DC\uBAA9\uB85D">
    <!-- ===== \u25A0.\u25A0. \uC77C\uBC18/\uD2B8\uB9AC \uD0ED (\uC2AC\uB9BC) ====================================== -->
    <div style="display:flex;gap:8px;padding:0 12px;border-bottom:1px solid #e5e7eb;background:#f9fafb;">
      <button @click="handleBtnAction('tab-change', '\uC77C\uBC18')"
        style="padding:4px 14px;border:none;background:transparent;border-bottom:2px solid transparent;color:#6b7280;font-weight:500;font-size:13px;line-height:1.5;transition:all 0.2s;"
        :style="uiState.activeCodeTab==='\uC77C\uBC18' ? {borderBottomColor:'#e8587a',color:'#e8587a'} : {}">
        \uC77C\uBC18
      </button>
      <button @click="handleBtnAction('tab-change', '\uD2B8\uB9AC')" :disabled="!uiState.selectedGrp"
        style="padding:4px 14px;border:none;background:transparent;border-bottom:2px solid transparent;color:#6b7280;font-weight:500;font-size:13px;line-height:1.5;transition:all 0.2s;"
        :style="uiState.activeCodeTab==='\uD2B8\uB9AC' ? {borderBottomColor:'#e8587a',color:'#e8587a'} : {}">
        \uD2B8\uB9AC
      </button>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC77C\uBC18/\uD2B8\uB9AC \uD0ED =============================================== -->
    <!-- ===== \u25A0.\u25A0. \uC77C\uBC18 \uD0ED ================================================== -->
    <div v-if="uiState.activeCodeTab==='\uC77C\uBC18'">
      <!-- ===== \u25A0.\u25A0.\u25A0. CRUD \uADF8\uB9AC\uB4DC ============================================ -->
      <bo-grid-crud
        :columns="cfCodeGridColumns" :rows="uiState.gridRows" row-key="codeId" :selected-key="uiState.selectedCodeId"
        :list-title="fnCodeListTitle()" :show-export="true" :draggable="true"
        max-height="calc(50vh - 130px)"
        :empty-text="uiState.selectedGrp ? '\uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' : '\uADF8\uB8F9\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.'"
        v-model:focusedIdx="uiState.focusedIdx"
        v-model:checkAll="uiState.checkAll"
        @add="handleBtnAction('codes-add')" @save="handleBtnAction('codes-save')"
        @delete-checked="handleBtnAction('codes-deleteChecked')" @cancel-checked="handleBtnAction('codes-cancelChecked')"
        grid-id="codes-cellChange" @cell-change="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" @export="handleBtnAction('codes-excel')"
        @reorder="handleSelectAction('codes-reorder')"
        @row-click="row => handleSelectAction('codes-rowSelect', row.codeId)"
        @row-dblclick="row => handleSelectAction('codes-rowEdit', row.codeId)">
        <template #row-actions="{ row, idx }">
          <bo-row-cancel-delete :row="row" @cancel="handleSelectAction('codes-rowCancel', idx)" @delete="handleSelectAction('codes-rowDelete', idx)" />
        </template>
      </bo-grid-crud>
      <bo-excel-down-modal :show="excelModal.show" domain="code" area-nm="\uACF5\uD1B5\uCF54\uB4DC"
        :columns="cfCodeGridColumns" ui-nm="\uACF5\uD1B5\uCF54\uB4DC\uAD00\uB9AC" :params="buildExcelParams()"
        @close="excelModal.show = false" />
    </div>
    <!-- ===== \u25A1.\u25A1. \uC77C\uBC18 \uD0ED ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uD2B8\uB9AC \uD0ED (BoGridCrud \uD2B8\uB9AC \uBAA8\uB4DC) =============================== -->
    <div v-if="uiState.activeCodeTab==='\uD2B8\uB9AC' ? (uiState.selectedGrp) : false">
    <!-- ===== \u25A0.\u25A0.\u25A0. CRUD \uADF8\uB9AC\uB4DC ============================================ -->
    <bo-grid-crud
        :columns="columns.treeGrid"
        :rows="uiState.gridRows" row-key="codeId"
        :flat-rows="flatTree" :row-accessor="treeRowAccessor" :tree-row-key="treeRowKeyFn" :tree-row-depth="it => it.depth"
        list-title="\uD2B8\uB9AC \uD615\uC2DD \uD3B8\uC9D1" max-height="400px"
        @add="handleBtnAction('codes-add')" @save="handleBtnAction('codes-save')"
        @delete-checked="handleBtnAction('codes-deleteChecked')" @cancel-checked="handleBtnAction('codes-cancelChecked')"
        v-model:checkAll="uiState.checkAll" v-model:focusedIdx="uiState.focusedIdx"
        grid-id="codes-cellChange" @cell-change="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)">
      <template #toolbar-actions>
        <div style="display:inline-flex;border:1px solid #d1d5db;border-radius:4px;overflow:hidden;align-self:center;">
          <button type="button" @click="handleBtnAction('codeTree-expandAll')"
              style="border:none;background:#fff;color:#374151;font-size:11px;padding:4px 10px;border-right:1px solid #d1d5db;"
              title="\uBAA8\uB4E0 \uB178\uB4DC \uD3BC\uCE58\uAE30">
            \u25BC \uC804\uCCB4\uD3BC\uCE58\uAE30
          </button>
          <button type="button" @click="handleBtnAction('codeTree-collapseAll')"
              style="border:none;background:#fff;color:#374151;font-size:11px;padding:4px 10px;"
              title="\uBAA8\uB4E0 \uB178\uB4DC \uC811\uAE30">
            \u25B6 \uC804\uCCB4\uC811\uAE30
          </button>
        </div>
      </template>
      <template #cell-codeLabel="{ row, node }">
        <td style="padding-left:0;">
          <div style="display:flex;align-items:center;gap:4px;">
            <span :style="{ minWidth: (node.depth * 20 + 4) + 'px', flexShrink: 0 }">
            </span>
            <span v-if="node.node.children.length > 0"
                @click.stop="handleSelectAction('codeTree-toggle', node.node.value)"
                style="display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;color:#6b7280;font-size:12px;flex-shrink:0;">
              {{ treeExpanded.has(node.node.value) ? '\u25BC' : '\u25B6' }}
            </span>
            <span v-else style="width:20px;flex-shrink:0;">
            </span>
            <span v-if="node.depth > 0" style="color:#bfdbfe;margin-right:2px;font-weight:300;font-size:11px;">
              \u251C
            </span>
            <span :style="'flex-shrink:0;font-size:10px;font-weight:700;padding:1px 5px;border-radius:3px;'+
                (node.depth===0?'background:#dbeafe;color:#1e40af;':node.depth===1?'background:#dcfce7;color:#166534;':'background:#fef3c7;color:#92400e;')"
                :title="'\uB808\uBCA8 ' + (node.depth+1)">
              L{{ node.depth+1 }}
            </span>
            <input class="grid-input" style="flex:1;" v-model="row.codeLabel" :disabled="row._row_status==='D'" @input="handleGridCellAction('codes-cellChange', null, row)" />
            <span v-if="node.node.children.length > 0" style="flex-shrink:0;font-size:10px;color:#6b7280;background:#f3f4f6;padding:1px 5px;border-radius:3px;"
                :title="'\uC9C1\uC18D \uC790\uC2DD ' + node.node.children.length + '\uAC1C'">
              \u21B3 {{ node.node.children.length }}
            </span>
          </div>
        </td>
      </template>
      <template #row-actions="{ row }">
        <bo-row-cancel-delete :row="row"
            @cancel="handleSelectAction('codes-rowCancel', uiState.gridRows.indexOf(row))"
            @delete="handleSelectAction('codes-rowDelete', uiState.gridRows.indexOf(row))" />
      </template>
    </bo-grid-crud>
  </div>
</bo-container>
<!-- ===== \u25A1.\u25A1. \uD2B8\uB9AC \uD0ED (BoGridCrud \uD2B8\uB9AC \uBAA8\uB4DC) =============================== -->
<!-- ===== \u25A1. \uCF54\uB4DC \uBAA9\uB85D \uC601\uC5ED ================================================ -->
<!-- \u203B \uACF5\uD1B5\uCF54\uB4DC \uC0C1\uC138 \uD328\uB110 \uC81C\uAC70 (\uCF54\uB4DC\uBAA9\uB85D \uADF8\uB9AC\uB4DC\uC5D0\uC11C \uC778\uB77C\uC778 \uD3B8\uC9D1\uC73C\uB85C \uB300\uCCB4) -->
</bo-page>
`};
