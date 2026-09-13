window.SyVendorUserMng={name:"SyVendorUserMng",props:{navigate:{type:Function,required:!0}},setup(Fe){const{ref:Ge,reactive:d,computed:h,watch:je,onMounted:ee}=Vue,s=window.boApp.showToast,V=window.boApp.showConfirm,M=d([]),r=d({loading:!1,roleLoading:!1,roleModalOpen:!1,vendorPickOpen:!1,error:null,selectedPath:null,searchVendorId:null,bizSearchType:"",bizSearchValue:"",bizVendorFlt:"",bizStatusFlt:"",treeRoleCat:"",formMode:"",dtlMode:"view",roleModalTemp:null,userSearchType:"",userSearchValue:"",userStatusFlt:""}),oe=h(()=>r.dtlMode==="view"),g=d({USER_STATUS:[],BOOL_YN:[],vendor_types:[["SALES","\uD310\uB9E4\uC5C5\uCCB4"],["DELIVERY","\uBC30\uC1A1\uC5C5\uCCB4"],["CS","\uCF5C\uC13C\uD130\uC5C5\uCCB4"],["SITE","\uC0AC\uC774\uD2B8\uC6B4\uC601\uC5C5\uCCB4"],["PROG","\uC720\uC9C0\uBCF4\uC218\uC5C5\uCCB4"],["PARTNER","\uC81C\uD734\uC0AC"],["INTERNAL","\uB0B4\uBD80\uBC95\uC778"]],biz_status:[["ACTIVE","\uC6B4\uC601\uC911"],["SUSPENDED","\uC911\uC9C0"],["TERMINATED","\uC885\uB8CC"]],user_employ_status:[["ACTIVE","\uC7AC\uC9C1"],["LEFT","\uD1F4\uC9C1"],["SUSPENDED","\uC911\uC9C0"]]}),z=d(new Set([null])),b=d([]),N=d([]),A=d([]),x=d([]),u=d({pageType:"PAGE",pageNo:1,pageSize:5,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),p=d({pageType:"PAGE",pageNo:1,pageSize:10,pageTotalCount:0,pageTotalPage:1,pageSizes:[5,10,20,30,50,100,200,500],pageCond:{}}),n=d({}),i=d({}),S=d([]),T=d(new Set),re=(e,o={})=>{if(e==="searchParam-list")return pe();if(e==="searchParam-reset")return ue();if(e==="userSearchParam-list")return fe();if(e==="userSearchParam-reset")return ge();if(e==="vendorUsers-add")return ye();if(e==="vendorUsers-save")return Ue();if(e==="vendorUsers-close")return w();if(e==="vendorUsers-edit")return Se();if(e==="vendorUsers-cancel")return Te();if(e==="vendorUsers-sendJoinMail"){if(!n.vendorUserEmail){s("\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.","warning");return}return s(n.vendorUserEmail+" \uB85C \uD68C\uC6D0\uAC00\uC785 \uBA54\uC77C\uC744 \uBCF4\uB0C8\uC2B5\uB2C8\uB2E4.","success")}else if(e==="vendorUsers-sendPwresetMail"){if(!n.vendorUserEmail){s("\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.","warning");return}return s(n.vendorUserEmail+" \uB85C \uBE44\uBC00\uBC88\uD638 \uCD08\uAE30\uD654 \uBA54\uC77C\uC744 \uBCF4\uB0C8\uC2B5\uB2C8\uB2E4.","success")}else{if(e==="roleModal-open")return xe();if(e==="roleModal-close")return E();if(e==="roleModal-confirm")return q();if(e==="vendors-pager-setPage")return se(o);if(e==="vendorUsers-pager-setPage")return me(o);console.warn("[handleBtnAction] unknown cmd:",e)}},R=(e,o={})=>{if(e==="vendors-rowSelect")return P(o);if(e==="vendors-pager-sizeChange")return u.pageNo=1,U();if(e==="vendorUsers-rowDelete")return we(o);if(e==="vendorUsers-pager-sizeChange")return ve();if(e==="userRoles-rowDelete")return Ce(o);if(e==="roleModal-treeToggle")return Re(o);if(e==="roleModal-treePick")return ke(o);if(e==="vendorPick-select")return be(o);console.warn("[handleSelectAction] unknown cmd:",e)},D=(e,o,t,a={})=>{if(e==="vendors-cellClick")return P(t);if(e==="vendorUsers-cellClick"){if(o==="btn_row_edit")return he(t);const l=["__no__"];if(a.col&&a.col.link||l.includes(o))return $(t)}else console.warn("[handleGridCellAction] unknown cmd:",e)},te=(e,o,t)=>{if(e==="role-select")return t==null?E():q();console.warn("[fnCallbackModal] unknown popCmd:",e)},L=async()=>{var e,o,t,a,l,c,m,f,C,J,K,Q;try{const[I,X,Z]=await Promise.all([boApiSvc.syRole.getPage({pageNo:1,pageSize:1e4},"\uC0AC\uC5C5\uC790\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC870\uD68C"),boApiSvc.syMenu.getPage({pageNo:1,pageSize:1e4},"\uC0AC\uC5C5\uC790\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC870\uD68C"),boApiSvc.syRoleMenu.getPage({pageNo:1,pageSize:1e4},"\uC0AC\uC5C5\uC790\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC870\uD68C")]);b.splice(0,b.length,...((o=(e=I.data)==null?void 0:e.data)==null?void 0:o.pageList)||((a=(t=I.data)==null?void 0:t.data)==null?void 0:a.list)||[]),N.splice(0,N.length,...((c=(l=X.data)==null?void 0:l.data)==null?void 0:c.pageList)||((f=(m=X.data)==null?void 0:m.data)==null?void 0:f.list)||[]),A.splice(0,A.length,...((J=(C=Z.data)==null?void 0:C.data)==null?void 0:J.pageList)||((Q=(K=Z.data)==null?void 0:K.data)==null?void 0:Q.list)||[])}catch(I){console.error("[catch-info]",I),console.warn("[SyVendorUserMng] role/menu load failed",I)}},le=()=>{z.add(null),b.forEach(e=>z.add(e.roleCode))},U=async()=>{var e;r.loading=!0;try{const o={pageNo:u.pageNo,pageSize:u.pageSize,...coUtil.cofOmitEmpty({searchValue:(r.bizSearchValue||"").trim(),searchType:r.bizSearchType,vendorTypeCd:r.bizVendorFlt})};o.searchValue&&!o.searchType&&(o.searchType="vendorNm,corpNo,vendorId");const a=((e=(await boApiSvc.syVendor.getPage(o,"\uC5C5\uCCB4\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC870\uD68C")).data)==null?void 0:e.data)||{};x.splice(0,x.length,...a.pageList||a.list||[]),u.pageTotalCount=a.pageTotalCount||0,u.pageTotalPage=a.pageTotalPage||1,coUtil.cofBuildPagerNums(u)}catch(o){console.error("[SyVendorUserMng] vendor load failed",o)}finally{r.loading=!1}},ne=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["USER_STATUS_CD","BOOL_YN"],{compNm:"SyVendorUserMng"}),g.USER_STATUS=e.sgGetGrpCodes("USER_STATUS_CD"),g.BOOL_YN=e.sgGetGrpCodes("BOOL_YN")};ee(async()=>{await ne(),await L(),le(),await U(),Object.assign(n,_())});const B=h(()=>Object.fromEntries(x.map(e=>[e.vendorId,e]))),F=e=>(B.value[e]||{}).vendorTypeCd||"",ae=e=>{const o=B.value[e];return o?"["+(g.vendor_types.find(a=>a[0]===o.vendorTypeCd)||[,"?"])[1]+"] "+o.vendorNm:""},se=e=>{e>=1&&e<=u.pageTotalPage&&(u.pageNo=e,U())},de=e=>({SALES:"badge-blue",DELIVERY:"badge-purple",PARTNER:"badge-teal",INTERNAL:"badge-gray"})[e]||"badge-gray",G=e=>(g.vendor_types.find(o=>o[0]===e)||[,"?"])[1],ie=e=>({ACTIVE:"badge-green",LEFT:"badge-gray",SUSPENDED:"badge-orange"})[e]||"badge-gray",ce=e=>({ACTIVE:"\uC7AC\uC9C1",LEFT:"\uD1F4\uC9C1",SUSPENDED:"\uC911\uC9C0"})[e]||e,P=e=>{r.searchVendorId=e.vendorId,r.treeRoleCat={SALES:"SALES",DELIVERY:"DELIVERY",CS:"CS",SITE:"SITE",PROG:"PROG",PARTNER:"SITE",INTERNAL:"SITE"}[e.vendorTypeCd]||"",v(e.vendorId),p.pageNo=1,j()},pe=()=>{u.pageNo=1,U()},ue=()=>{r.bizSearchType="",r.bizSearchValue="",r.bizVendorFlt="",r.bizStatusFlt="",r.selectedPath=null,u.pageNo=1,U()},fe=()=>{if(!r.searchVendorId){s("\uC5C5\uCCB4\uB97C \uBA3C\uC800 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","warning");return}p.pageNo=1,v(r.searchVendorId)},ge=()=>{r.userSearchType="",r.userSearchValue="",r.userStatusFlt="",p.pageNo=1,r.searchVendorId&&v(r.searchVendorId)},be=e=>{r.vendorPickOpen=!1,P(e)},v=async e=>{var o;if(e){r.loading=!0;try{const t={vendorId:e,pageNo:p.pageNo,pageSize:p.pageSize,...coUtil.cofOmitEmpty({searchValue:(r.userSearchValue||"").trim(),searchType:r.userSearchType,status:r.userStatusFlt})};t.searchValue&&!t.searchType&&(t.searchType="memberNm,vendorUserEmail,vendorUserMobile");const l=((o=(await boApiSvc.syVendorUser.getPage(t,"\uC0AC\uC5C5\uC790\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC870\uD68C")).data)==null?void 0:o.data)||{};M.splice(0,M.length,...l.pageList||l.list||[]),p.pageTotalCount=l.pageTotalCount||0,p.pageTotalPage=l.pageTotalPage||1,coUtil.cofBuildPagerNums(p)}catch(t){console.error("[SyVendorUserMng] user load failed",t)}finally{r.loading=!1}}},me=e=>{e>=1&&e<=p.pageTotalPage&&(p.pageNo=e,v(r.searchVendorId))},ve=()=>{p.pageNo=1,v(r.searchVendorId)},_=()=>({vendorUserId:null,vendorId:null,userId:null,memberNm:"",positionCd:"",vendorUserDeptNm:"",vendorUserPhone:"",vendorUserMobile:"",vendorUserEmail:"",birthDate:"",isMain:"N",authYn:"N",joinDate:"",leaveDate:"",vendorUserStatusCd:"ACTIVE",vendorUserRemark:""}),j=()=>{Object.assign(n,_()),r.searchVendorId&&(n.vendorId=r.searchVendorId),S.splice(0),r.formMode="",r.dtlMode="view"},ye=()=>{const e=r.searchVendorId;if(!e){s("\uC5C5\uCCB4\uB97C \uBA3C\uC800 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","warning");return}Object.assign(n,_()),n.vendorId=e,n.joinDate=coUtil.cofToYmd(new Date),S.splice(0),r.formMode="new",r.dtlMode="edit",Object.keys(i).forEach(o=>delete i[o])},Y=(e,o)=>{Object.assign(n,e),r.formMode="edit",r.dtlMode=o,O(e.vendorUserId),Object.keys(i).forEach(t=>delete i[t])},$=e=>Y(e,"view"),he=e=>Y(e,"edit"),Se=()=>{r.dtlMode="edit"},w=()=>{j()},Te=()=>{if(r.formMode==="new")return w();const e=M.find(o=>o.vendorUserId===n.vendorUserId);return e?$(e):w()},Ue=async()=>{var t;if(Object.keys(i).forEach(a=>delete i[a]),n.memberNm||(i.memberNm="\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),n.vendorUserMobile?coUtil.cofIsValidMobile(n.vendorUserMobile)||(i.vendorUserMobile="\uC62C\uBC14\uB978 \uD734\uB300\uC804\uD654 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)"):i.vendorUserMobile="\uD734\uB300\uC804\uD654\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",n.vendorUserEmail?coUtil.cofIsValidEmail(n.vendorUserEmail)||(i.vendorUserEmail="\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4."):i.vendorUserEmail="\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",coUtil.cofIsValidPhone(n.vendorUserPhone)||(i.vendorUserPhone="\uC62C\uBC14\uB978 \uC804\uD654\uBC88\uD638 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 02-1234-5678)"),Object.keys(i).length){s("\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.","error");return}const e=r.formMode==="new";if(await V(e?"\uB4F1\uB85D":"\uC800\uC7A5",e?"\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?":"\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const a=e?await boApiSvc.syVendorUser.create({...n},"\uC0AC\uC5C5\uC790\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uB4F1\uB85D"):await boApiSvc.syVendorUser.update(n.vendorUserId,{...n},"\uC0AC\uC5C5\uC790\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC800\uC7A5");if(s(e?"\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":"\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await v(n.vendorId),e)w();else{const l=(t=a.data)==null?void 0:t.data;l&&Object.assign(n,l),r.formMode="edit",r.dtlMode="view"}}catch(a){const l=coUtil.cofErrMsg(a);s(l,"error",0)}},we=async e=>{if(await V("\uC0AD\uC81C",`[${e.memberNm}] \uC0AC\uC6A9\uC790\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{const t=await boApiSvc.syVendorUser.remove(e.vendorUserId,"\uC0AC\uC5C5\uC790\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC0AD\uC81C");s("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await v(e.vendorId),r.formMode==="edit"&&n.vendorUserId===e.vendorUserId&&w()}catch(t){const a=coUtil.cofErrMsg(t);s(a,"error",0)}},O=async e=>{var o;if(e){r.roleLoading=!0;try{const t=await boApiSvc.syVendorUser.getRoles({userId:e},"\uC0AC\uC5C5\uC790\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC870\uD68C");S.splice(0,S.length,...((o=t.data)==null?void 0:o.data)||[])}catch{}finally{r.roleLoading=!1}}},Ie={SALES:"SITE_MGR_ROOT",DELIVERY:"DLIV_ROOT",CS:"CS_ROOT",SITE:"SITE_OP_ROOT",PROG:"PROG_ROOT"},k=h(()=>{const e=F(n.vendorId);return Ie[e]||null}),Me=h(()=>{const e=k.value,o=(t,a)=>b.filter(l=>l.parentRoleId===t).sort((l,c)=>(l.sortOrd||0)-(c.sortOrd||0)).map(l=>{const c=l.parentRoleId===null&&l.roleCode===e,m=a||c;return{roleId:l.roleId,roleCode:l.roleCode,roleNm:l.roleNm,isRoot:l.parentRoleId===null,allowed:m&&l.parentRoleId!==null,children:o(l.roleId,m)}});return o(null,!1)}),xe=async()=>{r.roleModalTemp=null,T.clear(),await L();const e=b.find(o=>o.roleCode===k.value);e&&T.add(e.roleId),r.roleModalOpen=!0},E=()=>{r.roleModalOpen=!1},Re=e=>{T.has(e)?T.delete(e):T.add(e)},ke=e=>{e.allowed&&(r.roleModalTemp=e.roleCode)},W=e=>{const o=Object.fromEntries(b.map(l=>[l.roleId,l]));let t=b.find(l=>l.roleCode===e);if(!t)return e;const a=[];for(;t;)a.unshift(t.roleNm),t=t.parentRoleId?o[t.parentRoleId]:null;return a.join(" > ")},Ee=e=>{var o;return((o=b.find(t=>t.roleCode===e))==null?void 0:o.roleId)||null},q=async()=>{if(!r.roleModalTemp)return;const e=Ee(r.roleModalTemp);if(!e){s("\uC5ED\uD560\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}if(S.some(o=>o.roleId===e)){s("\uC774\uBBF8 \uBD80\uC5EC\uB41C \uC5ED\uD560\uC785\uB2C8\uB2E4.","warning"),E();return}try{const o=await boApiSvc.syVendorUser.addRole({vendorId:n.vendorId,userId:n.vendorUserId,roleId:e},"\uC0AC\uC5C5\uC790\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uB4F1\uB85D");s("\uC5ED\uD560\uC774 \uBD80\uC5EC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await O(n.vendorUserId)}catch(o){const t=coUtil.cofErrMsg(o);s(t,"error",0)}E()},Ce=async e=>{if(await V("\uC5ED\uD560 \uC0AD\uC81C",`[${e.roleNm}] \uC5ED\uD560\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{const t=await boApiSvc.syVendorUser.removeRole(e.vendorUserRoleId,"\uC0AC\uC5C5\uC790\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uC0AD\uC81C");s("\uC5ED\uD560\uC774 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await O(n.vendorUserId)}catch(t){s(coUtil.cofErrMsg(t),"error",0)}},Ve={REP:"\uAD00\uB9AC",MGT:"\uAD00\uB9AC",SITE_ADMIN:"\uC4F0\uAE30",SITE_OPER:"\uC4F0\uAE30",STAFF:"\uC77D\uAE30",DLIV_REP:"\uAD00\uB9AC",DLIV_MGT:"\uAD00\uB9AC",DLIV_SITE_ADMIN:"\uC4F0\uAE30",DLIV_STAFF:"\uC77D\uAE30"},H=h(()=>r.roleModalTemp&&b.find(e=>e.roleCode===r.roleModalTemp)||null),Ne=[{key:"menuNm",label:"\uBA54\uB274",cellStyle:(e,o)=>`padding:6px 12px 6px ${12+o._depth*16}px;font-weight:${o.menuType==="\uD3F4\uB354"?700:400};border-bottom:1px solid #f3f4f6;`},{key:"_perm",label:"\uAD8C\uD55C",style:"width:80px;",align:"center",fmt:e=>e!=="\uC5C6\uC74C"?e:"\u2014",cellStyle:e=>e!=="\uC5C6\uC74C"?"text-align:center;padding:6px 12px;border-bottom:1px solid #f3f4f6;":"text-align:center;padding:6px 12px;border-bottom:1px solid #f3f4f6;color:#d1d5db;font-size:11px;"}],Ae=h(()=>{const e=H.value,o=e?A.filter(c=>c.roleId===e.roleId):[],t=Object.fromEntries(o.map(c=>[c.menuId,c.permLevel])),a=e&&Ve[e.roleCode]||"\uC5C6\uC74C",l=(c,m)=>N.filter(f=>(f.parentRoleId||null)===(c||null)).sort((f,C)=>(f.sortOrd||0)-(C.sortOrd||0)).flatMap(f=>[{...f,_depth:m,_perm:t[f.menuId]||a},...l(f.menuId,m+1)]);return l(null,0)}),Pe=e=>({\uAD00\uB9AC:"#f59e0b",\uC4F0\uAE30:"#16a34a",\uC77D\uAE30:"#2563eb",\uCC28\uB2E8:"#e8587a"})[e]||"#9ca3af",_e=(e,o)=>{e.roleCode===k.value&&o&&o.currentTarget&&(o.currentTarget.style.background="#eff6ff")},Oe=(e,o)=>{e.allowed&&r.roleModalTemp!==e.roleCode&&o&&o.currentTarget&&(o.currentTarget.style.background="#eff6ff")},ze=(e,o)=>{r.roleModalTemp!==e.roleCode&&o&&o.currentTarget&&(o.currentTarget.style.background="transparent")},y={};y.vendorSearch=[{key:"bizSearchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"vendorNm",label:"\uC5C5\uCCB4\uBA85"},{value:"corpNo",label:"\uC0AC\uC5C5\uC790\uBC88\uD638"},{value:"vendorId",label:"\uC5C5\uCCB4ID"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"140px"},{key:"bizSearchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"bizVendorFlt",type:"select",label:"\uC5C5\uCCB4\uC720\uD615",options:()=>g.vendor_types.map(e=>({value:e[0],label:e[1]})),nullLabel:"\uC5C5\uCCB4\uC720\uD615 \uC804\uCCB4"}],y.userSearch=[{key:"userSearchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"memberNm",label:"\uC774\uB984"},{value:"vendorUserEmail",label:"\uC774\uBA54\uC77C"},{value:"vendorUserMobile",label:"\uD734\uB300\uC804\uD654"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"140px"},{key:"userSearchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"userStatusFlt",type:"select",label:"\uC0C1\uD0DC",options:()=>(g.user_employ_status||[]).map(e=>({value:e[0],label:e[1]})),nullLabel:"\uC0C1\uD0DC \uC804\uCCB4"}],y.vendorGrid=[{key:"vendorTypeCd",label:"\uC5C5\uCCB4\uC720\uD615",align:"center",badge:e=>de(e.vendorTypeCd),fmt:e=>G(e)},{key:"vendorNm",label:"\uC5C5\uCCB4\uBA85",cellStyle:"font-weight:600"},{key:"bizNo",label:"\uC0AC\uC5C5\uC790\uBC88\uD638",cellInnerStyle:"font-size:11px;background:#f0f4ff;padding:2px 6px;border-radius:3px;color:#2563eb;font-family:monospace;"},{key:"ceo",label:"\uB300\uD45C\uC790"},{key:"phone",label:"\uC804\uD654",cellStyle:"font-size:11.5px"},{type:"actions",actions:[{label:e=>r.searchVendorId===e.vendorId?"\uC120\uD0DD\uB428":"\uC120\uD0DD",cls:"btn btn-primary btn-xs",onClick:e=>R("vendors-rowSelect",e)}]}],y.userGrid=[{key:"memberNm",label:"\uC774\uB984",cellStyle:"font-weight:600"},{key:"positionCd",label:"\uC9C1\uC704",cellStyle:"color:#666"},{key:"vendorUserDeptNm",label:"\uBD80\uC11C",cellStyle:"color:#666"},{key:"vendorUserMobile",label:"\uD734\uB300\uC804\uD654"},{key:"vendorUserEmail",label:"\uC774\uBA54\uC77C"},{key:"vendorUserStatusCd",label:"\uC0C1\uD0DC",style:"width:80px;text-align:center;",align:"center",badge:e=>ie(e.vendorUserStatusCd),fmt:e=>ce(e)},{type:"actions",actions:[{label:"\uC218\uC815",cls:"btn btn_row_edit btn-sm",onClick:e=>D("vendorUsers-cellClick","btn_row_edit",e)},{label:"\uC0AD\uC81C",cls:"btn btn_row_delete",onClick:e=>R("vendorUsers-rowDelete",e)}]}],y.userRoleGrid=[{key:"roleNm",label:"\uC5ED\uD560\uBA85",cellStyle:"font-weight:600",fmt:(e,o)=>o.roleNm||W(o.roleId)},{key:"grantDate",label:"\uBD80\uC5EC\uC77C\uC2DC",cellStyle:"color:#6b7280",fmt:e=>e?String(e).slice(0,16):"-"},{key:"validTerm",label:"\uC720\uD6A8\uAE30\uAC04",cellStyle:"color:#6b7280;",fmt:(e,o)=>o.validFrom||o.validTo?`${o.validFrom||"\u221E"} ~ ${o.validTo||"\u221E"}`:"\uC81C\uD55C\uC5C6\uC74C",cellInnerStyle:(e,o)=>o.validFrom||o.validTo?"":"color:#d1d5db;"},{type:"actions",actions:[{label:"\uC0AD\uC81C",cls:"btn btn_row_delete",onClick:e=>R("userRoles-rowDelete",e)}]}];const De=e=>"",Le=e=>"";y.baseVendorUserForm=[{type:"group",label:"\uAE30\uBCF8 \xB7 \uC5F0\uB77D\uCC98"},{key:"vendorId",label:"\uC5C5\uCCB4",type:"readonly",fmt:e=>ae(e)},{key:"memberNm",label:"\uC774\uB984",type:"text",required:!0},{key:"positionCd",label:"\uC9C1\uC704",type:"text"},{key:"vendorUserDeptNm",label:"\uBD80\uC11C",type:"text"},{key:"vendorUserPhone",label:"\uC0AC\uBB34\uC2E4 \uC804\uD654",type:"text",validate:e=>coUtil.cofIsValidPhone(e)?null:"\uC62C\uBC14\uB978 \uC804\uD654\uBC88\uD638 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 02-1234-5678)"},{key:"vendorUserMobile",label:"\uD734\uB300\uC804\uD654",type:"text",required:!0,validate:e=>e&&!coUtil.cofIsValidMobile(e)?"\uC62C\uBC14\uB978 \uD734\uB300\uC804\uD654 \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. (\uC608: 010-1234-5678)":null},{key:"vendorUserEmail",label:"\uC774\uBA54\uC77C",type:"text",required:!0,validate:e=>e&&!coUtil.cofIsValidEmail(e)?"\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.":null},{key:"birthDate",label:"\uC0DD\uB144\uC6D4\uC77C",type:"date"},{type:"group",label:"\uAD8C\uD55C \xB7 \uC7AC\uC9C1\uC815\uBCF4"},{key:"isMain",label:"\uB300\uD45C \uB2F4\uB2F9\uC790",type:"select",options:()=>g.BOOL_YN},{key:"authYn",label:"\uAD00\uB9AC\uAD8C\uD55C",type:"select",options:()=>g.BOOL_YN},{key:"vendorUserStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>(g.user_employ_status||[]).map(e=>({value:e[0],label:e[1]}))},{key:"joinDate",label:"\uB4F1\uB85D\uC77C",type:"date"},{key:"leaveDate",label:"\uD1F4\uC9C1\uC77C",type:"date"},{key:"vendorUserRemark",label:"\uBE44\uACE0",type:"text",colSpan:3}];const Be=d({show:!1});return{columns:y,uiState:r,cfDtlMode:oe,vendorUsers:M,vendors:x,vendorGridPager:u,userGridPager:p,formData:n,errors:i,userRoles:S,roleTreeExpanded:T,excelModal:Be,buildExcelParams:()=>{const e={vendorId:r.searchVendorId,...coUtil.cofOmitEmpty({searchValue:(r.userSearchValue||"").trim(),searchType:r.userSearchType,status:r.userStatusFlt})};return e.searchValue&&!e.searchType&&(e.searchType="memberNm,vendorUserEmail,vendorUserMobile"),e},handleBtnAction:re,handleSelectAction:R,handleGridCellAction:D,fnCallbackModal:te,cfFormRoleTree:Me,cfFormAllowedRootCode:k,cfSelectedModalRole:H,cfModalMenuList:Ae,cfMenuPermColumns:Ne,fnVendorRowStyle:De,fnUserRowStyle:Le,fnPermBadgeColor:Pe,roleNmByCode:W,fnVendorTypeCd:F,fnVendorTypeLabel:G,onRoleRootHover:_e,onRoleChildHover:Oe,onRoleChildLeave:ze}},template:`
<bo-page title="\uC5C5\uCCB4\uC0AC\uC6A9\uC790">
  <!-- ===== \u25A0. \uC5C5\uCCB4 \uBAA9\uB85D (\uC88C) + \uC0AC\uC6A9\uC790 \uBAA9\uB85D (\uC6B0) \u2014 2\uB2E8 \uADF8\uB9AC\uB4DC (\uC88C\uC6B0 \uADE0\uD615, \uD2B8\uB9AC 17:83 \uC544\uB2D8) ==================== -->
  <div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);gap:0 12px;align-items:flex-start;margin-bottom:16px;">
    <!-- ===== \u25A0.\u25A0. \uC88C: \uC5C5\uCCB4 \uAC80\uC0C9 + \uBAA9\uB85D ===================================== -->
    <div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC5C5\uCCB4 \uAC80\uC0C9 \uC601\uC5ED ========================================= -->
      <bo-container>
        <bo-search-area :columns="columns.vendorSearch" :param="uiState" :loading="uiState.loading"
          @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" />
      </bo-container>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC5C5\uCCB4 \uBAA9\uB85D ============================================= -->
      <bo-container title="\uC5C5\uCCB4\uBAA9\uB85D" :count-text="vendors.length + '\uAC74'">
        <bo-grid bare
          :columns="columns.vendorGrid" :rows="vendors" :pager="vendorGridPager" row-key="vendorId" :selected-key="uiState.searchVendorId"
          :row-style="fnVendorRowStyle"
          grid-id="vendors-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
        <bo-pager :pager="vendorGridPager" :on-set-page="n => handleBtnAction('vendors-pager-setPage', n)" :on-size-change="() => handleSelectAction('vendors-pager-sizeChange')" />
      </bo-container>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC88C: \uC5C5\uCCB4 \uAC80\uC0C9 + \uBAA9\uB85D ===================================== -->
    <!-- ===== \u25A0.\u25A0. \uC6B0: \uC0AC\uC6A9\uC790 \uAC80\uC0C9 + \uBAA9\uB85D =================================== -->
    <div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0AC\uC6A9\uC790 \uAC80\uC0C9 \uC601\uC5ED ======================================= -->
      <bo-container>
        <bo-search-area :columns="columns.userSearch" :param="uiState" :loading="uiState.loading"
          @search="handleBtnAction('userSearchParam-list')" @reset="handleBtnAction('userSearchParam-reset')" />
      </bo-container>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC0AC\uC6A9\uC790 \uBAA9\uB85D (\uD56D\uC0C1 \uD45C\uC2DC \u2014 \uC5C5\uCCB4 \uBBF8\uC120\uD0DD \uC2DC \uC548\uB0B4 empty-text) ======== -->
      <bo-container title="\uC0AC\uC6A9\uC790\uBAA9\uB85D" :count-text="vendorUsers.length + '\uAC74'">
        <template #toolbar-actions>
          <button class="btn btn_excel" :disabled="uiState.searchVendorId == null" @click="excelModal.show = true">\uC5D1\uC140</button>
          <button class="btn btn_new" :disabled="uiState.searchVendorId == null" @click="handleBtnAction('vendorUsers-add')">
            + \uC2E0\uADDC\uB4F1\uB85D
          </button>
        </template>
        <bo-grid bare
          :columns="columns.userGrid" :rows="vendorUsers" :pager="userGridPager" row-key="vendorUserId" :selected-key="formData.vendorUserId"
          :row-style="fnUserRowStyle" :loading="uiState.loading"
          :empty-text="uiState.searchVendorId != null ? '\uC0AC\uC6A9\uC790\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.' : '\uC88C\uCE21 \uC5C5\uCCB4\uBAA9\uB85D\uC5D0\uC11C \uC5C5\uCCB4\uB97C \uC120\uD0DD\uD558\uBA74 \uC0AC\uC6A9\uC790 \uBAA9\uB85D\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.'"
          grid-id="vendorUsers-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
        <bo-pager v-if="uiState.searchVendorId != null" :pager="userGridPager" :on-set-page="n => handleBtnAction('vendorUsers-pager-setPage', n)" :on-size-change="() => handleSelectAction('vendorUsers-pager-sizeChange')" />
        <bo-excel-down-modal :show="excelModal.show" domain="syVendorUser" area-nm="\uC5C5\uCCB4 \uC0AC\uC6A9\uC790"
          :columns="columns.userGrid" ui-nm="\uC5C5\uCCB4 \uC0AC\uC6A9\uC790\uAD00\uB9AC" :params="buildExcelParams()"
          @close="excelModal.show = false" />
      </bo-container>
    </div>
    <!-- ===== \u25A1.\u25A1. \uC6B0: \uC0AC\uC6A9\uC790 \uAC80\uC0C9 + \uBAA9\uB85D =================================== -->
  </div>
  <!-- ===== \u25A1. \uC5C5\uCCB4 \uBAA9\uB85D (\uC88C) + \uC0AC\uC6A9\uC790 \uBAA9\uB85D (\uC6B0) =================================== -->
  <!-- ===== \u25A0. \uC778\uB77C\uC778 \uD3FC (\uD56D\uC0C1 \uD45C\uC2DC \u2014 \uBBF8\uC120\uD0DD \uC2DC \uBE48 \uD3FC + \uBC84\uD2BC \uC228\uAE40 + \uC548\uB0B4) ============ -->
  <bo-container bare>
    <div class="card" style="margin-top:12px;">
      <div class="toolbar">
        <span class="list-title">
          {{ uiState.formMode==='new' ? '\uC5C5\uCCB4\uB2F4\uB2F9\uC790 \uC2E0\uADDC' : (uiState.formMode==='edit' ? (cfDtlMode ? '\uC5C5\uCCB4\uB2F4\uB2F9\uC790 \uC0C1\uC138' : '\uC5C5\uCCB4\uB2F4\uB2F9\uC790 \uC218\uC815') : '\uC5C5\uCCB4\uB2F4\uB2F9\uC790 \uC0C1\uC138') }}
          <span v-if="uiState.formMode==='edit'" style="margin-left:8px;font-size:11px;color:#888;font-weight:400;">
            #{{ formData.vendorUserId }}
          </span>
        </span>
        <div v-if="uiState.formMode" style="display:flex;gap:6px;flex-wrap:wrap;">
          <button class="btn btn-blue btn-sm" @click="handleBtnAction('vendorUsers-sendJoinMail')">\u2709 \uD68C\uC6D0\uAC00\uC785\uBA54\uC77C</button>
          <button class="btn btn-blue btn-sm" @click="handleBtnAction('vendorUsers-sendPwresetMail')">\u{1F511} \uBE44\uBC00\uBC88\uD638\uCD08\uAE30\uD654</button>
          <template v-if="cfDtlMode">
            <button class="btn btn_edit" @click="handleBtnAction('vendorUsers-edit')">\uC218\uC815</button>
            <button class="btn btn_close" @click="handleBtnAction('vendorUsers-close')">\uB2EB\uAE30</button>
          </template>
          <template v-else>
            <button class="btn btn_cancel" @click="handleBtnAction('vendorUsers-cancel')">\uCDE8\uC18C</button>
            <button class="btn btn_save" @click="handleBtnAction('vendorUsers-save')">\uC800\uC7A5</button>
          </template>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0. \uC5C5\uCCB4\uC0AC\uC6A9\uC790 \uC0C1\uC138 \uD3FC (\uD56D\uC0C1 \uD45C\uC2DC \u2014 \uBBF8\uC120\uD0DD \uC2DC \uBE48 \uD3FC \uAD6C\uC870 \uB178\uCD9C) =============== -->
      <div style="padding:16px;">
        <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================ -->
        <bo-form-area :columns="columns.baseVendorUserForm" :form="formData" :errors="errors"
          :cols="3" compact :show-actions="false" :readonly="cfDtlMode" plain-readonly />
      </div>
      <!-- ===== \u25A1.\u25A1. \uC5C5\uCCB4\uC0AC\uC6A9\uC790 \uC0C1\uC138 \uD3FC (BoFormArea \uC790\uB3D9 \uB80C\uB354) ========================= -->
      <!-- ===== \u25A0.\u25A0. \uC5ED\uD560 \uBAA9\uB85D (\uC218\uC815 \uBAA8\uB4DC\uC5D0\uC11C\uB9CC) ====================================== -->
      <div v-if="uiState.formMode==='edit'" style="padding:0 16px 16px;">
        <div class="toolbar" style="margin-bottom:8px;">
          <span class="list-title" style="font-size:13px;">\u{1F3AD} \uBD80\uC5EC\uB41C \uC5ED\uD560 <span class="list-count"> {{ userRoles.length }}\uAC1C </span></span>
          <button class="btn btn-blue btn-sm" @click="handleBtnAction('roleModal-open')">+ \uC5ED\uD560 \uCD94\uAC00</button>
        </div>
        <div v-if="uiState.roleLoading" style="text-align:center;padding:12px;color:#9ca3af;font-size:12px;">\uB85C\uB529 \uC911...</div>
        <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
        <bo-grid v-else bare :columns="columns.userRoleGrid" :rows="userRoles" row-key="vendorUserRoleId"
          empty-text="\uBD80\uC5EC\uB41C \uC5ED\uD560\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." />
      </div>
    </div>
  </bo-container>
  <!-- ===== \u25A1.\u25A1. \uC5ED\uD560 \uBAA9\uB85D (\uC218\uC815 \uBAA8\uB4DC\uC5D0\uC11C\uB9CC) ====================================== -->
  <!-- ===== \u25A1. \uC778\uB77C\uC778 \uD3FC =================================================== -->
  <!-- ===== \u25A0. \uC5ED\uD560 \uC120\uD0DD \uBAA8\uB2EC (BoRoleSelectModal) ============================ -->
  <bo-role-select-modal :show="uiState.roleModalOpen" title="\u{1F3AD} \uC5ED\uD560 \uC120\uD0DD"
    :confirm-disabled="!uiState.roleModalTemp"
    @close="handleBtnAction('roleModal-close')" @confirm="handleBtnAction('roleModal-confirm')">
    <!-- ===== \u25A1. \uC5ED\uD560 \uC120\uD0DD \uBAA8\uB2EC (BoRoleSelectModal) ============================ -->
    <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
    <template #header-extra>
      <span v-if="cfFormAllowedRootCode"
        :style="{display:'inline-flex',alignItems:'center',padding:'3px 10px',borderRadius:'10px',background:'#fff',border:'1px solid #93c5fd',fontWeight:700,fontSize:'11px',color:cfFormAllowedRootCode==='SITE_MGR_ROOT'?'#16a34a':'#d97706'}">
        {{ fnVendorTypeLabel(fnVendorTypeCd(formData.vendorId)) }}\uC5ED\uD560
      </span>
    </template>
    <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
    <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
    <template #tree>
      <div style="font-size:12px;font-weight:700;color:#374151;margin-bottom:8px;">\u{1F4C2} \uC5ED\uD560 \uD2B8\uB9AC</div>
      <div v-if="!cfFormAllowedRootCode" style="padding:10px;font-size:11px;color:#dc2626;background:#fef2f2;border-radius:6px;">
        \uC120\uD0DD\uD55C \uC5C5\uCCB4\uC758 \uC5C5\uCCB4\uC720\uD615\uC774 \uC5C6\uC5B4 \uC5ED\uD560\uC744 \uC120\uD0DD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <template v-for="root in cfFormRoleTree" :key="root.roleId">
        <div :style="{padding:'7px 8px',fontWeight:700,fontSize:'12.5px',display:'flex',alignItems:'center',gap:'6px',cursor:'pointer',borderRadius:'6px',marginBottom:'2px',
          color:root.roleCode===cfFormAllowedRootCode?'#1e40af':'#cbd5e1'}"
          @click="handleSelectAction('roleModal-treeToggle', root.roleId)"
          @mouseover="onRoleRootHover(root, $event)"
          @mouseout="$event.currentTarget.style.background='transparent'">
          <span style="width:12px;font-size:10px;color:#9ca3af;">{{ roleTreeExpanded.has(root.roleId)?'\u25BE':'\u25B8' }}</span>
          <span>\u{1F4C1} {{ root.roleNm }}</span>
        </div>
        <div v-if="roleTreeExpanded.has(root.roleId)" style="padding-left:14px;margin-bottom:6px;">
          <div v-for="ch in root.children" :key="ch.roleId"
            @click="handleSelectAction('roleModal-treePick', ch)"
            :style="{padding:'7px 10px',fontSize:'12.5px',cursor:ch.allowed?'pointer':'not-allowed',
            color:ch.allowed?(uiState.roleModalTemp===ch.roleCode?'#fff':'#374151'):'#d1d5db',
            background:uiState.roleModalTemp===ch.roleCode?'linear-gradient(135deg,#3b82f6,#2563eb)':'transparent',
            borderRadius:'6px',fontWeight:uiState.roleModalTemp===ch.roleCode?700:500,marginBottom:'2px',
            display:'flex',alignItems:'center',gap:'6px',transition:'all .1s'}"
            @mouseover="onRoleChildHover(ch, $event)"
            @mouseout="onRoleChildLeave(ch, $event)">
            <span style="font-size:9px;">\u25CF</span>
            <span>{{ ch.roleNm }}</span>
          </div>
        </div>
      </template>
    </template>
    <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
    <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
    <template #perm>
      <div style="font-size:12px;font-weight:700;color:#374151;margin-bottom:8px;">
        \u{1F510} \uBA54\uB274 \uC811\uADFC\uAD8C\uD55C
        <span v-if="cfSelectedModalRole" style="color:#2563eb;margin-left:8px;">\u2014 {{ cfSelectedModalRole.roleNm }}</span>
      </div>
      <div v-if="!cfSelectedModalRole" style="padding:60px 20px;text-align:center;font-size:13px;color:#9ca3af;">
        <div style="font-size:28px;margin-bottom:8px;">\u{1F448}</div>
        \uC88C\uCE21\uC5D0\uC11C \uC5ED\uD560\uC744 \uC120\uD0DD\uD558\uC138\uC694
      </div>
      <!-- ===== \u25A0.\u25A0. \uADF8\uB9AC\uB4DC =================================================== -->
      <bo-grid v-else bare :columns="cfMenuPermColumns" :rows="cfModalMenuList" row-key="menuId"
        :row-style="(row, i) => ({background: i%2===0 ? '#fff' : '#fafbfc'})"
        style="font-size:12px;">
        <template #cell-menuNm="{ row }">
          <span v-if="row.menuType==='\uD3F4\uB354'" style="color:#f59e0b;margin-right:4px;">\u{1F4C1}</span>
          <span v-else style="color:#9ca3af;margin-right:4px;font-size:10px;">\xB7</span>
          {{ row.menuNm }}
        </template>
        <template #cell-_perm="{ row }">
          <span v-if="row._perm!=='\uC5C6\uC74C'" :style="{background:fnPermBadgeColor(row._perm),color:'#fff',fontSize:'10px',padding:'2px 8px',borderRadius:'9px',fontWeight:700}">
            {{ row._perm }}
          </span>
          <span v-else style="color:#d1d5db;font-size:11px;">\u2014</span>
        </template>
      </bo-grid>
    </template>
    <!-- ===== \u25A1.\u25A1. \uD14C\uC774\uBE14 =================================================== -->
    <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
    <!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
    <template #footer-extra>
      <span style="font-size:11px;color:#6b7280;">
        <span v-if="uiState.roleModalTemp">\uC120\uD0DD: <b style="color:#2563eb;"> {{ roleNmByCode(uiState.roleModalTemp) }} </b></span>
        <span v-else style="color:#9ca3af;">\uC5ED\uD560\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694</span>
      </span>
    </template>
  </bo-role-select-modal>
  <!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
</bo-page>
`};
