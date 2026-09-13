window.SyRoleMng={name:"SyRoleMng",props:{navigate:{type:Function,required:!0}},setup(Ve){const Ye=window.nextId||{value:(e,t)=>((e||[]).reduce((l,o)=>Math.max(l,Number(o==null?void 0:o[t])||0),0)||0)+1},{ref:Ge,reactive:i,computed:k,watch:Fe,onMounted:Q}=Vue,I=window.boApp.showToast,P=window.boApp.showConfirm,w=i([]),E=i([]),L=i([]),u=i([]),m=i([]),v=i([]),s=i({checkAll:!1,error:null,userSelectOpen:!1,loading:!1,selectedPath:null,focusedIdx:null,selectedRoleId:null,menuSearchValue:""}),y=i({use_yn:[],perm_levels:["\uC5C6\uC74C","\uC77D\uAE30","\uC4F0\uAE30","\uAD00\uB9AC","\uCC28\uB2E8"],role_cats:[["ADMIN","\uAD00\uB9AC\uC790\uC5ED\uD560"],["SITE","\uC0AC\uC774\uD2B8\uC5ED\uD560"],["SALES","\uD310\uB9E4\uC5C5\uCCB4\uC5ED\uD560"],["DLIV","\uBC30\uC1A1\uC5C5\uCCB4\uC5ED\uD560"]]}),X={0:"\uC5C6\uC74C",1:"\uC77D\uAE30",2:"\uC4F0\uAE30",3:"\uAD00\uB9AC",4:"\uCC28\uB2E8"},Z={\uC5C6\uC74C:0,\uC77D\uAE30:1,\uC4F0\uAE30:2,\uAD00\uB9AC:3,\uCC28\uB2E8:4},x=i(new Set),ee=(e,t={})=>{if(e==="searchParam-list")return R("DEFAULT");if(e==="searchParam-reset")return Object.assign(f,V),s.selectedPath=null,R();if(e==="roles-save")return Se();if(e==="roles-add")return xe();if(e==="roles-deleteChecked")return _e();if(e==="roles-cancelChecked")return ve();if(e==="roles-excel")return ze();if(e==="roles-excel-upload"){C.reloadTrigger++,C.show=!0;return}else{if(e==="roles-reload")return R("RELOAD");if(e==="config-save")return be();if(e==="pathTree-expandAll"){const l=o=>{g.add(o.path),o.children.forEach(l)};l(T.value);return}else if(e==="pathTree-collapseAll"){g.clear(),g.add("");return}else{if(e==="pathTree-catChange")return R();if(e==="pathTree-toggle"){g.has(t)?g.delete(t):g.add(t);return}else{if(e==="roleMenus-toggleAll")return Pe(t);if(e==="roleMenus-setAll")return Ee(t);if(e==="roleUsers-openSelect"){s.userSelectOpen=!0;return}else if(e==="roleUsers-closeSelect"){s.userSelectOpen=!1;return}else{if(e==="roleUsers-save")return Oe();if(e==="parentModal-close"){p.show=!1;return}else if(e==="pathModal-close"){_.show=!1,_.row=null;return}else console.warn("[handleBtnAction] unknown cmd:",e)}}}}},z=(e,t={})=>{if(e==="roles-rowEdit")return $(t);if(e==="roles-rowDelete")return ye(t);if(e==="roles-rowCancel")return Re(t);if(e==="roles-rowCheckAll"){c.forEach(l=>{l._row_check=s.checkAll});return}else{if(e==="roles-rowOpenSetting")return we(t);if(e==="parentModal-open")return Ce(t);if(e==="pathTree-select")return s.selectedPath=t,s.focusedIdx=null,s.selectedRoleId=null,R();if(e==="roleMenus-set")return Me(t.menuId,t.perm);if(e==="roleMenus-toggleCheck")return Ue(t);if(e==="roleUsers-remove"){if(!s.selectedRoleId)return;const l=m.findIndex(o=>o.roleId===s.selectedRoleId&&o.boUserId===t);l!==-1&&m.splice(l,1);return}else{if(e==="roleUsers-select")return H(t);if(e==="parentModal-select"){p.targetRow&&(p.targetRow.parentRoleId=t.roleId,p.targetRow._depth=0,A(p.targetRow)),p.show=!1;return}else{if(e==="pathModal-pick")return Y(t);console.warn("[handleSelectAction] unknown cmd:",e)}}}},te=(e,t,l,o={})=>{if(e==="roles-cellChange")return A(l);console.warn("[handleGridCellAction] unknown cmd:",e)},le=(e,t,l)=>{if(e==="cmPopup-user-select"){if(l==null){s.userSelectOpen=!1;return}return H(Array.isArray(l)?l:[l])}else if(e==="cmPopup-parent-pick"){if(l==null){p.show=!1;return}p.targetRow&&(p.targetRow.parentRoleId=l.selId,p.targetRow._depth=0,A(p.targetRow)),p.show=!1;return}else if(e==="cmPopup-path-pick"){if(l==null){_.show=!1,_.row=null;return}return Y(l)}else if(e==="excel-upload"){if(l==null){C.show=!1;return}return C.show=!1,R()}else console.warn("[fnCallbackModal] unknown popCmd:",e)},f=i({searchType:"",searchValue:"",type:"",useYn:"Y",cat:"",treeCatFilter:""}),V={},c=i([]);let oe=-1;const N=["roleCode","roleNm","parentRoleId","roleTypeCd","sortOrd","useYn","restrictPerm","sensitiveViewYn","roleCat","roleRemark"],se={\uC5C6\uC74C:"#9ca3af",\uC77D\uAE30:"#2563eb",\uC4F0\uAE30:"#16a34a",\uAD00\uB9AC:"#f59e0b",\uCC28\uB2E8:"#e8587a"},re=["\u25CF","\u25E6","\xB7","-"],ne=["#e8587a","#2563eb","#52c41a","#f59e0b","#8b5cf6"],ae=e=>se[e]||"#9ca3af",ce=e=>re[Math.min(e,3)],de=e=>ne[e%5],R=async(e="DEFAULT")=>{var t,l,o,n;s.loading=!0;try{const r={pageNo:1,pageSize:1e4,...coUtil.cofOmitEmpty({searchType:f.searchType,searchValue:f.searchValue,useYn:f.useYn}),...s.selectedPath!=null?{parentRoleId:s.selectedPath}:{}},a=await boApiSvc.syRole.getPage(r,"\uC5ED\uD560\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C"),d=((l=(t=a.data)==null?void 0:t.data)==null?void 0:l.pageList)||((n=(o=a.data)==null?void 0:o.data)==null?void 0:n.list)||[];w.splice(0,w.length,...d),c.splice(0),fe(d).forEach(h=>c.push(he(h))),s.error=null,e==="RELOAD"&&await G()}catch(r){console.error("[catch-info]",r),s.error=r.message}finally{s.loading=!1}},C=i({show:!1,reloadTrigger:0}),_=i({show:!1,row:null}),Y=e=>{const t=_.row;t&&(t.pathId=e,t._row_status==="N"&&(t._row_status="U"))},g=i(new Set([""])),T=k(()=>{const e=coUtil.cofBuildGenericTree(E,"roleId","parentRoleId","roleNm","sortOrd"),t=Object.fromEntries((E||[]).map(r=>[r.roleId,r])),l={SUPER_ADMIN:["\uAD00\uB9AC\uC790","#7c3aed"],SITE_GROUP:["\uC0AC\uC774\uD2B8","#2563eb"],SITE_MGR_ROOT:["\uD310\uB9E4\uC5C5\uCCB4","#16a34a"],DLIV_ROOT:["\uBC30\uC1A1\uC5C5\uCCB4","#f59e0b"]},o={ADMIN:"SUPER_ADMIN",SITE:"SITE_GROUP",SALES:"SITE_MGR_ROOT",DLIV:"DLIV_ROOT"},n=r=>{if(r._raw&&r._raw.roleId!=null){let a=r._raw;for(;a&&a.parentRoleId;)a=t[a.parentRoleId];r._badge=a?l[a.roleCode]:null}(r.children||[]).forEach(n)};if(n(e),f.treeCatFilter){const r=o[f.treeCatFilter];e.children=(e.children||[]).filter(d=>d._raw&&d._raw.roleCode===r);const a=d=>(d.count=(d.children||[]).reduce((h,S)=>h+a(S)+1,0),d.count);a(e)}return e}),je=()=>{const e=t=>{g.add(t.path),t.children.forEach(e)};e(T.value)},$e=()=>{g.clear(),g.add("")},ie=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["USE_YN"],{compNm:"SyRoleMng"}),y.use_yn=e.sgGetGrpCodes("USE_YN")},G=async()=>{var e,t,l,o;try{const n=await boApiSvc.syRole.getPage({pageNo:1,pageSize:1e4},"\uC5ED\uD560\uAD00\uB9AC","\uD2B8\uB9AC\uC870\uD68C"),r=((t=(e=n.data)==null?void 0:e.data)==null?void 0:t.pageList)||((o=(l=n.data)==null?void 0:l.data)==null?void 0:o.list)||[];E.splice(0,E.length,...r)}catch(n){console.error("[fnLoadTreeRoles]",n)}};Q(async()=>{await ie(),ge(),await G();const e=coUtil.cofCollectExpandedToDepth(T.value,2);g.clear(),e.forEach(o=>g.add(o));const t=new URLSearchParams(window.location.search),l=["page","id","orderId","claimId","embed","dtlMode"];Object.keys(f).forEach(o=>{!l.includes(o)&&t.has(o)&&(f[o]=t.get(o))}),await R("DEFAULT"),Object.assign(V,f)});const pe=k(()=>boUtil.bofGetSiteNm()),F={ADMIN:"#7c3aed",SITE:"#2563eb",SALES:"#16a34a",DLIV:"#f59e0b"},j={SUPER_ADMIN:"ADMIN",SITE_GROUP:"SITE",SITE_MGR_ROOT:"SALES",DLIV_ROOT:"DLIV"},ue=e=>{const t=w||[],l=Object.fromEntries(w.map(r=>[r.roleId,r]));let o=e;for(;o&&o.parentRoleId;)o=l[o.parentRoleId];const n=o&&j[o.roleCode];return n?[n]:[]},O=e=>e.roleCat&&e.roleCat.length?e.roleCat:ue(e);boUtil.__roleCatOf=e=>{const t=w||[],l=w.find(a=>a.roleId===e);if(!l)return[];if(l.roleCat&&l.roleCat.length)return l.roleCat;const o=Object.fromEntries(w.map(a=>[a.roleId,a]));let n=l;for(;n&&n.parentRoleId;)n=o[n.parentRoleId];const r=n&&j[n.roleCode];return r?[r]:[]},boUtil.__roleCatLabel=e=>(y.role_cats.find(t=>t[0]===e)||[,e])[1],boUtil.__roleCatColor=e=>F[e]||"#9ca3af";const fe=e=>{const t={};e.forEach(r=>{t[r.roleId]={...r,_children:[]}});const l=[];e.forEach(r=>{r.parentRoleId&&t[r.parentRoleId]?t[r.parentRoleId]._children.push(t[r.roleId]):l.push(t[r.roleId])});const o=[],n=(r,a)=>{o.push({...r,_depth:a}),r._children.sort((d,h)=>(d.sortOrd||0)-(h.sortOrd||0)).forEach(d=>n(d,a+1))};return l.sort((r,a)=>(r.sortOrd||0)-(a.sortOrd||0)).forEach(r=>n(r,0)),o},he=e=>{const t=Array.isArray(e.roleCat)?[...e.roleCat]:[];return{...e,_depth:e._depth||0,_row_status:"N",_row_check:!1,restrictPerm:e.restrictPerm||"\uC5C6\uC74C",sensitiveViewYn:e.sensitiveViewYn||"N",roleCat:t,_row_org:{roleCode:e.roleCode,roleNm:e.roleNm,parentRoleId:e.parentRoleId,roleTypeCd:e.roleTypeCd,sortOrd:e.sortOrd,useYn:e.useYn,restrictPerm:e.restrictPerm||"\uC5C6\uC74C",sensitiveViewYn:e.sensitiveViewYn||"N",roleCat:JSON.stringify(t),roleRemark:e.roleRemark}}},ge=async()=>{var e,t,l,o,n,r,a,d;try{const[h,S]=await Promise.all([boApiSvc.syMenu.getPage({pageNo:1,pageSize:1e4},"\uC5ED\uD560\uAD00\uB9AC","\uBA54\uB274\uBAA9\uB85D"),boApiSvc.syUser.getPage({pageNo:1,pageSize:1e4},"\uC5ED\uD560\uAD00\uB9AC","\uC0AC\uC6A9\uC790\uBAA9\uB85D")]),U=((t=(e=h.data)==null?void 0:e.data)==null?void 0:t.pageList)||((o=(l=h.data)==null?void 0:l.data)==null?void 0:o.list)||[],b=((r=(n=S.data)==null?void 0:n.data)==null?void 0:r.pageList)||((d=(a=S.data)==null?void 0:a.data)==null?void 0:d.list)||[];L.splice(0,L.length,...U),v.splice(0,v.length,...b)}catch(h){console.error("[fnLoadMenusAndUsers]",h)}},$=async e=>{var t,l,o,n,r,a;if(x.clear(),!e||e<=0){u.splice(0),m.splice(0);return}s.detailLoading=!0;try{const[d,h]=await Promise.all([boApiSvc.syRole.getMenus(e,"\uC5ED\uD560\uAD00\uB9AC","\uBA54\uB274\uAD8C\uD55C\uC870\uD68C"),boApiSvc.syRole.getUsers(e,"\uC5ED\uD560\uAD00\uB9AC","\uB300\uC0C1\uC0AC\uC6A9\uC790\uC870\uD68C")]),S=((l=(t=d.data)==null?void 0:t.data)==null?void 0:l.list)||((o=d.data)==null?void 0:o.data)||[],U=((r=(n=h.data)==null?void 0:n.data)==null?void 0:r.list)||((a=h.data)==null?void 0:a.data)||[];u.splice(0,u.length,...S.map(b=>({...b,permLevel:X[b.permLevel]||"\uC77D\uAE30"}))),m.splice(0,m.length,...U.map(b=>({roleId:e,boUserId:b.userId||b.boUserId||b.userId}))),U.forEach(b=>{const B=b.userId||b.boUserId;v.find(K=>K.boUserId===B||K.userId===B)||v.push({...b,boUserId:B})})}catch(d){console.error("[handleLoadRoleDetail]",d)}finally{s.detailLoading=!1}},be=async()=>{if(!(!s.selectedRoleId||!await P("\uC124\uC815 \uC800\uC7A5","\uBA54\uB274 \uC811\uADFC\uAD8C\uD55C\uACFC \uB300\uC0C1\uC0AC\uC6A9\uC790\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")))try{const t=u.filter(o=>o.roleId===s.selectedRoleId).map(o=>{var n;return{menuId:o.menuId,permLevel:(n=Z[o.permLevel])!=null?n:1}}),l=m.filter(o=>o.roleId===s.selectedRoleId).map(o=>({boUserId:o.boUserId}));await Promise.all([boApiSvc.syRole.saveMenus(s.selectedRoleId,{menus:t},"\uC5ED\uD560\uAD00\uB9AC","\uBA54\uB274\uAD8C\uD55C\uC800\uC7A5"),boApiSvc.syRole.saveUsers(s.selectedRoleId,{users:l},"\uC5ED\uD560\uAD00\uB9AC","\uB300\uC0C1\uC0AC\uC6A9\uC790\uC800\uC7A5")]),I("\uC124\uC815\uC774 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(t){I(coUtil.cofErrMsg(t,"\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},me=e=>{s.focusedIdx=e;const t=c[e],l=t&&t.roleId&&(typeof t.roleId!="number"||t.roleId>0)?t.roleId:null;l!==s.selectedRoleId&&(s.selectedRoleId=l,$(l))},Ie=e=>!!e.roleId&&e._row_status!=="I"&&e._row_status!=="D",we=e=>{me(e),Vue.nextTick(()=>{const t=document.getElementById("role-config-panel");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})},A=e=>{if(e._row_status==="I"||e._row_status==="D")return;const t=N.some(l=>l==="roleCat"?JSON.stringify(e.roleCat||[])!==(e._row_org.roleCat||"[]"):String(e[l])!==String(e._row_org[l]));e._row_status=t?"U":"N"},xe=()=>{const e=s.focusedIdx!==null?c[s.focusedIdx]:null,t={roleId:oe--,roleCode:"",roleNm:"",parentRoleId:e?e.parentRoleId:null,roleTypeCd:e?e.roleTypeCd:"\uC5C5\uBB34",sortOrd:e?(e.sortOrd||0)+1:1,useYn:"Y",restrictPerm:"\uC5C6\uC74C",sensitiveViewYn:"N",roleCat:[],roleRemark:"",_depth:e?e._depth:0,_row_status:"I",_row_check:!1,_row_org:null},l=s.focusedIdx!==null?s.focusedIdx+1:c.length;c.splice(l,0,t),s.focusedIdx=l,s.selectedRoleId=null},ye=e=>{const t=c[e];t._row_status==="I"?(c.splice(e,1),s.focusedIdx!==null&&(s.focusedIdx=Math.max(0,s.focusedIdx-(s.focusedIdx>=e?1:0)))):t._row_status="D"},Re=e=>{const t=c[e];t._row_status==="I"?(c.splice(e,1),s.focusedIdx!==null&&(s.focusedIdx=Math.max(0,s.focusedIdx-(s.focusedIdx>=e?1:0)))):(t._row_org&&N.forEach(l=>{t[l]=t._row_org[l]}),t._row_status="N")},ve=()=>{const e=new Set(c.filter(t=>t._row_check).map(t=>t.roleId));if(!e.size){I("\uCDE8\uC18C\uD560 \uD589\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.","info");return}for(let t=c.length-1;t>=0;t--){const l=c[t];e.has(l.roleId)&&(l._row_status==="I"?c.splice(t,1):l._row_status!=="N"&&(l._row_org&&N.forEach(o=>{l[o]=l._row_org[o]}),l._row_status="N"))}},_e=()=>{for(let e=c.length-1;e>=0;e--)c[e]._row_check&&(c[e]._row_status==="I"?c.splice(e,1):c[e]._row_status="D")},Se=async()=>{const e=c.filter(a=>a._row_status==="I"),t=c.filter(a=>a._row_status==="U"),l=c.filter(a=>a._row_status==="D");if(!e.length&&!t.length&&!l.length){I("\uBCC0\uACBD\uB41C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}for(const a of[...e,...t])if(!a.roleCode||!a.roleNm){I("\uC5ED\uD560\uCF54\uB4DC\uC640 \uC5ED\uD560\uBA85\uC740 \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.","error");return}const o=[];if(e.length&&o.push({label:`\uB4F1\uB85D ${e.length}\uAC74`,cls:"badge-blue"}),t.length&&o.push({label:`\uC218\uC815 ${t.length}\uAC74`,cls:"badge-orange"}),l.length&&o.push({label:`\uC0AD\uC81C ${l.length}\uAC74`,cls:"badge-red"}),!await P("\uC800\uC7A5 \uD655\uC778","\uB2E4\uC74C \uB0B4\uC6A9\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",{details:o,btnOk:"\uC608",btnCancel:"\uC544\uB2C8\uC624"}))return;const r=[...e,...t,...l].map(a=>({...a,rowStatus:a._row_status}));try{await boApiSvc.syRole.saveList("base",r,"\uC5ED\uD560\uAD00\uB9AC","\uC800\uC7A5"),I("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),await R("RELOAD")}catch(a){I(coUtil.cofErrMsg(a),"error",0)}},ke=e=>{if(!e)return"";const t=w.find(l=>l.roleId===e);return t?t.roleNm:`ID:${e}`},p=i({show:!1,targetRow:null}),Ce=e=>{p.targetRow=e,p.show=!0},W=(e,t,l)=>e.filter(o=>(o.parentMenuId||null)===(t||null)&&o.useYn==="Y").sort((o,n)=>(o.sortOrd||0)-(n.sortOrd||0)).map(o=>({...o,_depth:l,_kids:W(e,o.menuId,l+1)})),q=(e,t=[])=>(e.forEach(l=>{t.push(l),q(l._kids,t)}),t),M=k(()=>{const e=(s.menuSearchValue||"").trim().toLowerCase(),t=L||[],l=e?t.filter(o=>o.menuNm.toLowerCase().includes(e)||o.menuCode.toLowerCase().includes(e)):t;return q(W(l,null,0))}),Ae=e=>{if(!s.selectedRoleId)return"\uC5C6\uC74C";const t=u.find(l=>l.roleId===s.selectedRoleId&&l.menuId===e);return t?t.permLevel||"\uC77D\uAE30":"\uC5C6\uC74C"},Me=(e,t)=>{if(!s.selectedRoleId)return;const l=u.findIndex(o=>o.roleId===s.selectedRoleId&&o.menuId===e);t==="\uC5C6\uC74C"?l!==-1&&u.splice(l,1):l!==-1?u[l].permLevel=t:u.push({roleId:s.selectedRoleId,menuId:e,permLevel:t})},Ee=e=>{if(!s.selectedRoleId)return;const t=M.value.filter(l=>x.has(l.menuId)).map(l=>l.menuId);t.length!==0&&(e==="\uC5C6\uC74C"?u.map((o,n)=>o.roleId===s.selectedRoleId&&t.includes(o.menuId)?n:-1).filter(o=>o>=0).reverse().forEach(o=>u.splice(o,1)):t.forEach(l=>{const o=u.findIndex(n=>n.roleId===s.selectedRoleId&&n.menuId===l);o!==-1?u[o].permLevel=e:u.push({roleId:s.selectedRoleId,menuId:l,permLevel:e})}))},Te=e=>x.has(e),Ue=e=>{x.has(e)?x.delete(e):x.add(e)},Pe=e=>{e?M.value.forEach(t=>x.add(t.menuId)):x.clear()},Le=k(()=>!s.selectedRoleId||!M.value.length?!1:M.value.every(e=>x.has(e.menuId))),Ne=()=>s.selectedRoleId?m.filter(e=>e.roleId===s.selectedRoleId).map(e=>{const t=v.find(l=>(l.userId||l.boUserId)===e.boUserId)||{};return{boUserId:e.boUserId,userNm:e.userNm||t.userNm||t.name||"",loginId:e.loginId||t.loginId||"",userEmail:e.userEmail||t.userEmail||"",deptNm:e.deptNm||t.deptNm||t.dept||"",roleNm:e.roleNm||t.roleNm||t.role||"",userStatusCd:e.userStatusCd||t.userStatusCd||t.status||""}}):[],H=e=>{s.selectedRoleId&&(e.forEach(t=>{const l=t.userId||t.boUserId;if(!l)return;m.some(n=>n.roleId===s.selectedRoleId&&n.boUserId===l)||m.push({roleId:s.selectedRoleId,boUserId:l,userNm:t.userNm||t.name||"",loginId:t.loginId||"",userEmail:t.userEmail||"",deptNm:t.deptNm||"",roleNm:t.roleNm||"",userStatusCd:t.userStatusCd||""}),v.find(n=>(n.userId||n.boUserId)===l)||v.push({...t,boUserId:l})}),s.userSelectOpen=!1)},Oe=async()=>{if(!(!s.selectedRoleId||!await P("\uB300\uC0C1\uC0AC\uC6A9\uC790 \uC800\uC7A5","\uD604\uC7AC \uB300\uC0C1\uC0AC\uC6A9\uC790 \uBAA9\uB85D\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")))try{const t=m.filter(l=>l.roleId===s.selectedRoleId).map(l=>({boUserId:l.boUserId}));await boApiSvc.syRole.saveUsers(s.selectedRoleId,{users:t},"\uC5ED\uD560\uAD00\uB9AC","\uB300\uC0C1\uC0AC\uC6A9\uC790\uC800\uC7A5"),I("\uB300\uC0C1\uC0AC\uC6A9\uC790\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(t){I(coUtil.cofErrMsg(t,"\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},De=k(()=>{if(!s.selectedRoleId)return"";const e=w.find(t=>t.roleId===s.selectedRoleId);return e?e.roleNm:""}),J=i({show:!1}),Be=()=>({...coUtil.cofOmitEmpty({searchType:f.searchType,searchValue:f.searchValue,useYn:f.useYn}),...s.selectedPath!=null?{parentRoleId:s.selectedPath}:{}}),ze=()=>{J.show=!0},D={};return D.baseSearch=[{key:"searchType",type:"multiCheck",label:"\uAC80\uC0C9\uB300\uC0C1",options:[{value:"roleCode",label:"\uC5ED\uD560\uCF54\uB4DC"},{value:"roleNm",label:"\uC5ED\uD560\uBA85"}],placeholder:"\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4",allLabel:"\uC804\uCCB4 \uC120\uD0DD",minWidth:"160px"},{key:"searchValue",type:"text",label:"\uAC80\uC0C9\uC5B4",placeholder:"\uAC80\uC0C9\uC5B4 \uC785\uB825"},{key:"cat",type:"select",label:"\uC5ED\uD560\uAD6C\uBD84",options:()=>y.role_cats.map(e=>({value:e[0],label:e[1]})),nullLabel:"\uC5ED\uD560\uAD6C\uBD84 \uC804\uCCB4"},{key:"useYn",type:"select",label:"\uC0AC\uC6A9\uC5EC\uBD80",options:()=>y.use_yn,nullLabel:"\uC0AC\uC6A9\uC5EC\uBD80 \uC804\uCCB4"}],D.baseGrid=[{key:"roleCode",label:"\uC5ED\uD560\uCF54\uB4DC",style:"width:120px;",edit:"text",mono:!0},{key:"roleNm",label:"\uC5ED\uD560\uBA85",style:"min-width:150px;",edit:"text",treeDepth:!0,treeBullet:ce,treeColor:de},{key:"parentRoleId",label:"\uC0C1\uC704\uC5ED\uD560",style:"min-width:120px;",parentPick:{label:ke,open:e=>z("parentModal-open",e),clear:e=>{e.parentRoleId=null,A(e)},title:"\uC0C1\uC704\uC5ED\uD560 \uC120\uD0DD"}},{key:"sortOrd",label:"\uC21C\uC11C",cls:"col-ord",edit:"number"},{key:"useYn",label:"\uC0AC\uC6A9\uC5EC\uBD80",cls:"col-use",edit:"select",options:()=>y.use_yn},{key:"sensitiveViewYn",label:"\uBBFC\uAC10\uC815\uBCF4\uC5F4\uB78C",style:"width:100px;",edit:"select",options:()=>y.use_yn,hint:"\uC5F0\uB77D\uCC98/\uC774\uBA54\uC77C/\uC8FC\uC18C \uB4F1 \uBBFC\uAC10\uC815\uBCF4\uB97C \uB9C8\uC2A4\uD0B9(***) \uC5C6\uC774 \uC6D0\uBCF8\uC73C\uB85C \uC870\uD68C\xB7\uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uB294 \uAD8C\uD55C"},{key:"roleCat",label:"\uC5ED\uD560\uAD6C\uBD84",style:"width:100px;",cellStyle:(e,t)=>{const l=O(t)[0];return`color:${F[l]||"#9ca3af"};font-weight:${O(t).length?700:400};`},selectIntercept:{value:e=>O(e)[0]||"",options:()=>y.role_cats.map(e=>({value:e[0],label:e[1]})),nullable:!0,nullLabel:"-",disabled:e=>e._row_status==="D",onChange:(e,t)=>{e.roleCat=t?[t]:[],A(e)}}},{key:"roleRemark",label:"\uBE44\uACE0",edit:"text"},{key:"siteNm",label:"\uC0AC\uC774\uD2B8\uBA85",style:"width:80px;",align:"center",cellStyle:"font-size:11px;color:#2563eb;",fmt:()=>pe.value}],{columns:D,uiState:s,codes:y,searchParam:f,gridRows:c,expanded:g,excelUploadModal:C,excelModal:J,buildExcelParams:Be,handleBtnAction:ee,handleSelectAction:z,handleGridCellAction:te,cfTree:T,cfShowRoleSetting:Ie,cfSelectedRoleNm:De,cfMenuTree:M,cfMenuAllChecked:Le,fnRoleUsersList:Ne,fnCallbackModal:le,fnPermColor:ae,getMenuPerm:Ae,isMenuChecked:Te,pathPickModal:_,roleTreeModal:p}},template:`
<bo-page title="\uC5ED\uD560\uAD00\uB9AC" :share-query="searchParam">
  <!-- ===== \u25A0. \uAC80\uC0C9 ====================================================== -->
  <bo-container>
    <!-- ===== \u25A0.\u25A0. \uAC80\uC0C9 \uC601\uC5ED ================================================= -->
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <!-- ===== \u25A1. \uAC80\uC0C9 ====================================================== -->
  <!-- ===== \u25A0. \uC88C \uD2B8\uB9AC + \uC6B0 \uC601\uC5ED ============================================= -->
  <div class="bo-2col" style="grid-template-columns:minmax(220px,20fr) minmax(0,80fr);">
    <!-- ===== \u25A0.\u25A0. \uD2B8\uB9AC ==================================================== -->
    <bo-container bare>
      <bo-local-tree-card title="\uC5ED\uD560" max-height="420px"
        :node="cfTree" :expanded="expanded" :selected="uiState.selectedPath"
        :on-toggle="path => handleBtnAction('pathTree-toggle', path)"
        @select="path => handleSelectAction('pathTree-select', path)" @expand-all="handleBtnAction('pathTree-expandAll')" @collapse-all="handleBtnAction('pathTree-collapseAll')">
        <template #filter>
          <select v-model="searchParam.treeCatFilter" @change="handleBtnAction('pathTree-catChange')" style="width:100%;padding:4px 6px;font-size:11px;border:1px solid #d1d5db;border-radius:5px;margin-bottom:8px;">
            <option value="">\uC5ED\uD560\uAD6C\uBD84 \uC804\uCCB4</option>
            <option v-for="c in codes.role_cats" :key="c[0]" :value="c[0]">
              {{ c[1] }}
            </option>
          </select>
        </template>
      </bo-local-tree-card>
    </bo-container>
    <!-- ===== \u25A0.\u25A0. CRUD \uADF8\uB9AC\uB4DC ============================================ -->
    <bo-container bare>
      <!-- ===== \u25A0.\u25A0.\u25A0. CRUD \uADF8\uB9AC\uB4DC ============================================ -->
      <bo-grid-crud
        :columns="columns.baseGrid" :rows="gridRows" row-key="roleId" :selected-key="uiState.selectedRoleId"
        list-title="\uC5ED\uD560\uBAA9\uB85D" :show-export="true" :show-excel-upload="true" :draggable="false"
        v-model:focusedIdx="uiState.focusedIdx"
        v-model:checkAll="uiState.checkAll"
        @add="handleBtnAction('roles-add')" @save="handleBtnAction('roles-save')"
        @delete-checked="handleBtnAction('roles-deleteChecked')" @cancel-checked="handleBtnAction('roles-cancelChecked')"
        grid-id="roles-cellChange" @cell-change="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)"
        @export="handleBtnAction('roles-excel')"
        @excel-upload="handleBtnAction('roles-excel-upload')">
        <template #row-actions="{ row, idx }">
          <span style="display:inline-flex;gap:3px;white-space:nowrap;">
            <button v-if="cfShowRoleSetting(row)"
              class="btn btn-blue"
              :style="{ fontSize:'11px', padding:'2px 6px', lineHeight:'1.3',
              fontWeight: uiState.selectedRoleId === row.roleId ? '700' : '400',
              outline: uiState.selectedRoleId === row.roleId ? '2px solid #2563eb' : 'none' }"
              @click.stop="handleSelectAction('roles-rowOpenSetting', idx)"
              title="\uD558\uB2E8 \uBA54\uB274\uC811\uADFC\uAD8C\uD55C / \uB300\uC0C1\uC0AC\uC6A9\uC790 \uC124\uC815">
              \uC124\uC815
            </button>
            <bo-row-cancel-delete :row="row" @cancel="handleSelectAction('roles-rowCancel', idx)" @delete="handleSelectAction('roles-rowDelete', idx)">
            </bo-row-cancel-delete>
          </span>
        </template>
      </bo-grid-crud>
      <bo-excel-down-modal :show="excelModal.show" domain="role" area-nm="\uC5ED\uD560"
        :columns="columns.baseGrid" ui-nm="\uC5ED\uD560\uAD00\uB9AC" :params="buildExcelParams()"
        @close="excelModal.show = false" />
    </bo-container>
  </div>
  <!-- ===== \u25A1. \uC88C \uD2B8\uB9AC + \uC6B0 \uC601\uC5ED ============================================= -->
  <!-- ===== \u25A0. \uD558\uB2E8: \uBA54\uB274 \uBC30\uBD84 + \uC0AC\uC6A9\uC790 \uBC30\uBD84 (\uC804\uCCB4 \uD3ED) ============================ -->
  <bo-container bare>
      <div id="role-config-panel" style="display:flex;gap:16px;align-items:flex-start;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC88C: \uBA54\uB274\uBAA9\uB85D =========================================== -->
        <div style="flex:1;">
          <div class="card" style="margin-bottom:0;">
            <div class="toolbar" style="flex-wrap:wrap;gap:6px;">
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                <span class="list-title" style="font-size:13px;">
                  \uBA54\uB274 \uC811\uADFC\uAD8C\uD55C
                </span>
                <span v-if="cfSelectedRoleNm" style="font-size:12px;color:#e8587a;">
                  #{{ cfSelectedRoleNm }}
                </span>
                <span v-else style="font-size:12px;color:#bbb;">
                  \uC704 \uBAA9\uB85D\uC5D0\uC11C \uC5ED\uD560\uC758 [\uC124\uC815] \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694
                </span>
              </div>
              <div v-if="uiState.selectedRoleId" style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;">
                <label style="font-size:12px;color:#555;display:flex;align-items:center;gap:4px;margin-right:4px;white-space:nowrap;">
                  <input type="checkbox" :checked="cfMenuAllChecked"
                    @change="e => handleBtnAction('roleMenus-toggleAll', e.target.checked)" />
                  \uC804\uCCB4\uC120\uD0DD
                </label>
                <span style="font-size:11px;color:#999;margin:0 4px;white-space:nowrap;">
                  \uC804\uCCB4 \uC801\uC6A9:
                </span>
                <button v-for="p in codes.perm_levels" :key="p"
                  class="btn btn-xs"
                  :style="{ background: fnPermColor(p), borderColor: fnPermColor(p), color:'#fff', fontWeight:'600', fontSize:'11px', padding:'2px 8px' }"
                  @click="handleBtnAction('roleMenus-setAll', p)">
                  {{ p }}
                </button>
                <button class="btn btn_save" style="margin-left:8px;" @click="handleBtnAction('config-save')">
                  \u{1F4BE} \uC124\uC815 \uC800\uC7A5
                </button>
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBA54\uB274 \uAC80\uC0C9 ========================================= -->
            <div v-if="uiState.selectedRoleId" style="padding:8px 0 6px;">
              <input class="form-control" v-model="uiState.menuSearchValue" placeholder="\uBA54\uB274\uBA85 \uB610\uB294 \uBA54\uB274\uCF54\uB4DC \uAC80\uC0C9"
                style="font-size:12px;padding:5px 10px;" />
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBA54\uB274 \uD2B8\uB9AC \uBAA9\uB85D ====================================== -->
            <div v-if="uiState.selectedRoleId" style="max-height:340px;overflow-y:auto;border:1px solid #f0f0f0;border-radius:6px;">
              <div v-if="!cfMenuTree.length" style="text-align:center;color:#bbb;padding:20px;font-size:13px;">
                \uBA54\uB274\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
              </div>
              <div v-for="m in cfMenuTree" :key="m.menuId"
                style="display:flex;align-items:center;padding:6px 10px;border-bottom:1px solid #f8f8f8;transition:background .1s;"
                :style="{ background: isMenuChecked(m.menuId) ? '#fff8f9' : '' }">
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD589 \uCCB4\uD06C\uBC15\uC2A4 (\uAD8C\uD55C\uAC12\uACFC \uBD84\uB9AC, \uC77C\uAD04\uC801\uC6A9 \uB300\uC0C1 \uC120\uD0DD) ===== -->
                <input type="checkbox" :checked="isMenuChecked(m.menuId)"
                  @change="handleSelectAction('roleMenus-toggleCheck', m.menuId)"
                  style="margin-right:8px;flex-shrink:0;" />
                <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBE14\uB9BF \uD2B8\uB9AC \uB4E4\uC5EC\uC4F0\uAE30 ================================ -->
                <span :style="{ marginLeft:(m._depth*14)+'px', marginRight:'5px', fontWeight:'700',
                  fontSize: m._depth===0?'7px':'11px', flexShrink:0,
                  color:['#e8587a','#2563eb','#52c41a','#f59e0b'][Math.min(m._depth,3)] }">
                  {{ ['\u25CF','\u25E6','\xB7','-'][Math.min(m._depth,3)] }}
                </span>
                <span style="font-size:13px;color:#333;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                  {{ m.menuNm }}
                </span>
                <code style="font-size:10px;color:#aaa;background:#f5f5f5;padding:1px 5px;border-radius:3px;margin:0 8px;flex-shrink:0;">
                  {{ m.menuCode }}
                </code>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAD8C\uD55C \uB808\uBCA8 \uD1A0\uAE00 \uBC84\uD2BC =============================== -->
                  <div style="display:flex;gap:2px;flex-shrink:0;">
                    <button v-for="p in codes.perm_levels" :key="p"
                    style="font-size:10px;padding:2px 7px;border-radius:4px;border:1px solid;font-weight:600;transition:all .1s;"
                    :style="getMenuPerm(m.menuId)===p
                    ? { background: fnPermColor(p), borderColor: fnPermColor(p), color:'#fff' }
                    : { background:'#f5f5f5', borderColor:'#e0e0e0', color:'#999' }"
                    @click="handleSelectAction('roleMenus-set', { menuId: m.menuId, perm: p })">
                      {{ p }}
                    </button>
                  </div>
                </div>
              </div>
              <div v-else style="text-align:center;color:#bbb;padding:40px 0;font-size:13px;">
                \uC704 \uBAA9\uB85D\uC5D0\uC11C \uC5ED\uD560\uC758 [\uC124\uC815] \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694.
              </div>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC6B0: \uB300\uC0C1\uC0AC\uC6A9\uC790 ========================================== -->
          <div style="flex:1;">
            <div class="card" style="margin-bottom:0;">
              <div class="toolbar">
                <div>
                  <span class="list-title" style="font-size:13px;">
                    \uB300\uC0C1\uC0AC\uC6A9\uC790
                  </span>
                  <span v-if="cfSelectedRoleNm" style="font-size:12px;color:#e8587a;margin-left:8px;">
                    #{{ cfSelectedRoleNm }}
                  </span>
                  <span v-else style="font-size:12px;color:#bbb;margin-left:8px;">
                    \uC704 \uBAA9\uB85D\uC5D0\uC11C \uC5ED\uD560\uC758 [\uC124\uC815] \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694
                  </span>
                </div>
                <div v-if="uiState.selectedRoleId" style="display:flex;gap:6px;align-items:center;">
                  <button class="btn btn-primary btn-sm" @click="handleBtnAction('roleUsers-openSelect')">
                    + \uC0AC\uC6A9\uC790 \uCD94\uAC00
                  </button>
                  <button class="btn btn_save" style="margin-left:4px;" @click="handleBtnAction('roleUsers-save')">
                    \u{1F4BE} \uC800\uC7A5
                  </button>
                </div>
              </div>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC120\uD0DD\uB41C \uC0AC\uC6A9\uC790 \uBAA9\uB85D ==================================== -->
              <div v-if="uiState.selectedRoleId" style="max-height:340px;overflow-y:auto;border:1px solid #f0f0f0;border-radius:6px;padding:6px;">
                <div v-if="!fnRoleUsersList().length"
                style="text-align:center;color:#bbb;padding:36px 0;font-size:13px;border:1px dashed #e0e0e0;border-radius:6px;">
                  \uCD94\uAC00\uB41C \uC0AC\uC6A9\uC790\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
                  <br>
                  <span style="font-size:12px;">
                    [\uC0AC\uC6A9\uC790 \uCD94\uAC00] \uBC84\uD2BC\uC73C\uB85C \uCD94\uAC00\uD558\uC138\uC694.
                  </span>
                </div>
                <div v-else style="display:flex;flex-direction:column;gap:6px;">
                  <div v-for="u in fnRoleUsersList()" :key="u.boUserId"
                  style="display:flex;align-items:center;padding:9px 14px;background:#fafafa;border:1px solid #f0f0f0;border-radius:6px;transition:background .1s;"
                  @mouseenter="$event.currentTarget.style.background='#fff0f4'"
                  @mouseleave="$event.currentTarget.style.background='#fafafa'">
                    <div style="width:32px;height:32px;border-radius:50%;background:#e8587a22;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:10px;">
                      <span style="font-size:13px;font-weight:700;color:#e8587a;">
                        {{ (u.userNm || '?').charAt(0) }}
                      </span>
                    </div>
                    <div style="flex:1;min-width:0;">
                      <div style="font-size:13px;font-weight:600;color:#222;">
                        {{ u.userNm || '-' }}
                      </div>
                      <div style="font-size:11px;color:#888;margin-top:1px;">
                        {{ u.loginId || '-' }} \xB7 {{ u.deptNm || '-' }} \xB7 {{ u.roleNm || '-' }}
                      </div>
                    </div>
                    <span class="badge" :class="u.userStatusCd==='ACTIVE'?'badge-green':'badge-gray'" style="font-size:10px;margin-right:8px;">
                      {{ u.userStatusCd || '-' }}
                    </span>
                    <button class="btn btn-danger btn-xs" @click="handleSelectAction('roleUsers-remove', u.boUserId)" title="\uC81C\uAC70">
                      \u2715
                    </button>
                  </div>
                </div>
              </div>
              <div v-else style="text-align:center;color:#bbb;padding:40px 0;font-size:13px;">
                \uC704 \uBAA9\uB85D\uC5D0\uC11C \uC5ED\uD560\uC744 \uC120\uD0DD\uD558\uC138\uC694.
              </div>
            </div>
          </div>
        </div>
    </bo-container>
  <!-- ===== \u25A1. \uD558\uB2E8: \uBA54\uB274 \uBC30\uBD84 + \uC0AC\uC6A9\uC790 \uBC30\uBD84 (\uC804\uCCB4 \uD3ED) ============================ -->
  <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED (\uBAA8\uB2EC) ============================================ -->
  <!-- ===== \u25A0.\u25A0. \uC0AC\uC6A9\uC790 \uC120\uD0DD \uBAA8\uB2EC =========================================== -->
  <bo-cm-popup-modal v-if="uiState.userSelectOpen" popup-cmd="cmPopup-user-select" popup-code="userByDept" result-type="array" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A0.\u25A0. \uC0C1\uC704\uC5ED\uD560 \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
  <bo-cm-popup-modal v-if="roleTreeModal ? (roleTreeModal.show) : false" popup-cmd="cmPopup-parent-pick" popup-code="role" clearable :exclude-id="roleTreeModal.targetRow?.roleId > 0 ? roleTreeModal.targetRow.roleId : null" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A0.\u25A0. \uD45C\uC2DC\uACBD\uB85C \uC120\uD0DD \uBAA8\uB2EC ========================================== -->
  <bo-cm-popup-modal v-if="pathPickModal ? (pathPickModal.show) : false" popup-cmd="cmPopup-path-pick" popup-code="path" result-type="id" :init-param="{ bizCd: 'sy_role' }" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A0.\u25A0. \uC5D1\uC140 \uC5C5\uB85C\uB4DC \uBAA8\uB2EC (\uB3C4\uBA54\uC778\uC740 \uBAA8\uB2EC \uC548\uC758 select \uB85C \uC804\uD658 \uAC00\uB2A5) ===== -->
  <bo-excel-upload-modal v-if="excelUploadModal.show"
    default-domain="role" modal-name="excel-upload" :on-callback="fnCallbackModal" />
  <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED (\uBAA8\uB2EC) ============================================ -->
</bo-page>
`};
