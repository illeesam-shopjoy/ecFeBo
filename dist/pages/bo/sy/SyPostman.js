window.SyPostman={name:"SyPostman",props:{navigate:{type:Function,required:!0}},setup(){const{ref:g,reactive:c,computed:z,watch:Z,onMounted:ee}=Vue,te=c({http_method_opts:["GET","POST","PUT","PATCH","DELETE"]}),s=c({treeLoaded:!1,settingsOpen:!1,histResSending:!1,treeSearchType:"",treeSearch:"",hostUrl:window.location.origin,token:"",activeTabId:null,autoPopupTabId:null,histSelIdx:null,histModal:null,histModalTab:"req",histResJson:"",histResStatus:null,histResTime:null,histResTs:"",histResProgress:0}),A=c([]),M=e=>{var o;const t=c({id:e.id,appId:e.appId||"",label:e.label,type:e.type,open:(o=e.open)!=null?o:!1,method:e.method||"",url:e.url||"",desc:e.desc||"",params:(e.params||[]).map(i=>({...i})),body:e.body||""});return e.children&&(t.children=e.children.map(M)),t},oe=(e,t={})=>{if(e==="settings-toggle"){s.settingsOpen=!s.settingsOpen;return}else{if(e==="defHeaders-add")return C(x);if(e==="lsItems-refresh")return N();if(e==="request-send")return I();if(e==="autoPopup-close")return _e();if(e==="openTabs-closeAll")return Te();if(e==="history-clear"){v.splice(0),X.value=null;return}else{if(e==="histModal-close")return qe();if(e==="histModal-resend")return Oe();if(e==="editReq-headerAdd"){r.headers.push({k:"",v:""});return}else if(e==="editReq-paramAdd"){r.params.push({k:"",v:""});return}else console.warn("[handleBtnAction] unknown cmd:",e)}}},se=(e,t={})=>{if(e==="tree-nodeClick")return t.type==="req"?ge(t):fe(t);if(e==="tree-quickRun")return Be(t.node,t.evt);if(e==="openTabs-select"){s.activeTabId=t;return}else{if(e==="openTabs-rowClose")return ke(t.tabId,t.evt);if(e==="autoPopup-open")return ve(t.tab,t.evt);if(e==="autoPopup-select")return we(t.tab,t.ms,t.label);if(e==="defHeaders-rowRemove")return H(x,t);if(e==="request-tabSelect"){u.value.reqTab=t;return}else if(e==="response-tabSelect"){u.value.resTab=t;return}else{if(e==="reqParams-add")return C(u.value.reqParams);if(e==="reqParams-rowRemove")return H(u.value.reqParams,t);if(e==="reqHeaders-add")return C(u.value.reqHeaders);if(e==="reqHeaders-rowRemove")return H(u.value.reqHeaders,t);if(e==="history-rowSelect")return Ie(t.h,t.i);if(e==="histModal-tabSelect"){s.histModalTab=t;return}else{if(e==="toasts-rowClose")return Ae(t);if(e==="toasts-rowToggleJson"){t.jsonOpen=!t.jsonOpen;return}else if(e==="editReq-headerRowRemove"){r.headers.splice(t,1);return}else if(e==="editReq-paramRowRemove"){r.params.splice(t,1);return}else console.warn("[handleSelectAction] unknown cmd:",e)}}}},D=(e,t)=>{for(const o of e)if(o.children){if(o.children.some(n=>n.id===t))return o.label;const i=D(o.children,t);if(i!==null)return i}return null},B=[{domain:"ec",sub:"cm",label:"EC CM",tables:["cm_blog_cate","cm_blog_file","cm_blog_good","cm_blog_reply","cm_blog_tag","cm_blog","cm_chatt_msg","cm_chatt_room","cm_path","cmh_push_log"]},{domain:"ec",sub:"dp",label:"EC DP",tables:["dp_area_panel","dp_area","dp_panel_item","dp_panel","dp_ui_area","dp_ui","dp_widget_lib","dp_widget"]},{domain:"ec",sub:"mb",label:"EC MB",tables:["mb_dvc_token","mb_like","mb_member_addr","mb_member_grade","mb_member_group","mb_member","mb_member_sns","mbh_member_login_hist","mbh_member_login_log","mbh_member_token_log"]},{domain:"ec",sub:"od",label:"EC OD",tables:["od_cart","od_claim_item","od_claim","od_dliv_item","od_dliv","od_order_discnt","od_order_item_discnt","od_order_item","od_order","od_pay_method","od_pay","od_refund_method","od_refund","odh_claim_chg_hist","odh_claim_item_chg_hist","odh_claim_item_status_hist","odh_claim_status_hist","odh_dliv_chg_hist","odh_dliv_item_chg_hist","odh_dliv_status_hist","odh_order_chg_hist","odh_order_item_chg_hist","odh_order_item_status_hist","odh_order_status_hist","odh_pay_chg_hist","odh_pay_status_hist"]},{domain:"ec",sub:"pd",label:"EC PD",tables:["pd_category_prod","pd_category","pd_dliv_tmplt","pd_prod_bundle_item","pd_prod_content","pd_prod_img","pd_prod_opt_item","pd_prod_opt","pd_prod_qna","pd_prod_rel","pd_prod_set_item","pd_prod_sku","pd_prod_tag","pd_prod","pd_restock_noti","pd_review_attach","pd_review_comment","pd_review","pd_tag","pdh_prod_chg_hist","pdh_prod_content_chg_hist","pdh_prod_sku_chg_hist","pdh_prod_sku_price_hist","pdh_prod_sku_stock_hist","pdh_prod_status_hist","pdh_prod_view_log"]},{domain:"ec",sub:"pm",label:"EC PM",tables:["pm_cache","pm_coupon_issue","pm_coupon_item","pm_coupon_usage","pm_coupon","pm_discnt_item","pm_discnt_usage","pm_discnt","pm_event_benefit","pm_event_item","pm_event","pm_gift_cond","pm_gift_issue","pm_gift","pm_plan_item","pm_plan","pm_save_issue","pm_save_usage","pm_save","pm_voucher_issue","pm_voucher"]},{domain:"ec",sub:"st",label:"EC ST",tables:["st_erp_voucher_line","st_erp_voucher","st_recon","st_settle_adj","st_settle_close","st_settle_config","st_settle_etc_adj","st_settle_item","st_settle_pay","st_settle_raw","st_settle"]},{domain:"sy",sub:"sy",label:"SY",tables:["sy_alarm","sy_attach","sy_batch","sy_bbm","sy_bbs","sy_brand","sy_code_grp","sy_code","sy_contact","sy_dept","sy_i18n","sy_menu","sy_notice","sy_path","sy_prop","sy_role_menu","sy_role","sy_site","sy_template","sy_user_role","sy_user","sy_vendor_brand","sy_vendor_content","sy_vendor_user","sy_vendor","sy_voc","syh_alarm_send_hist","syh_api_log","syh_batch_hist","syh_batch_log","syh_send_email_log","syh_send_msg_log","syh_user_login_hist","syh_user_login_log","syh_user_token_log"]}],ie=[{label:"\uB2E8\uAC74",urlFn:e=>`select${e}`,method:"POST"},{label:"\uBAA9\uB85D",urlFn:e=>`select${e}List`,method:"POST"},{label:"\uD398\uC774\uC9C0",urlFn:e=>`select${e}Page`,method:"POST"},{label:"\uAC74\uC218",urlFn:e=>`select${e}Count`,method:"POST"},{label:"\uB4F1\uB85D",urlFn:e=>`insert${e}Insert`,method:"POST"},{label:"\uC218\uC815",urlFn:e=>`update${e}Update`,method:"PUT"},{label:"\uBD80\uBD84\uC218\uC815",urlFn:e=>`update${e}UpdateOption`,method:"PUT"},{label:"\uC0AD\uC81C",urlFn:e=>`delete${e}Delete`,method:"DELETE"},{label:"\uC77C\uAD04\uC0AD\uC81C",urlFn:e=>`delete${e}DeleteList`,method:"DELETE"}],ne=[{label:"\uBAA9\uB85D \uC870\uD68C",urlFn:e=>e,method:"GET"},{label:"\uD398\uC774\uC9C0 \uC870\uD68C",urlFn:e=>`${e}/page`,method:"GET"},{label:"\uAC74\uC218 \uC870\uD68C",urlFn:e=>`${e}/count`,method:"GET"},{label:"\uB2E8\uAC74 \uC870\uD68C",urlFn:e=>`${e}/{id}`,method:"GET"},{label:"\uB4F1\uB85D",urlFn:e=>e,method:"POST"},{label:"\uC218\uC815",urlFn:e=>`${e}/{id}`,method:"PUT"},{label:"\uBD80\uBD84\uC218\uC815",urlFn:e=>`${e}/{id}`,method:"PATCH"},{label:"\uC0AD\uC81C",urlFn:e=>`${e}/{id}`,method:"DELETE"},{label:"\uC77C\uAD04\uC0AD\uC81C",urlFn:e=>e,method:"DELETE"}],ae=e=>e.split("_").map(t=>t[0].toUpperCase()+t.slice(1)).join("");let le=0;const re=()=>M({id:"ac_root",appId:"samples",label:"adminAutoCrud-method",type:"app",open:!1,children:B.map(({domain:e,sub:t,label:o,tables:i})=>({id:`ac_${e}_${t}`,label:o,type:"folder",open:!1,children:i.map(n=>{const a=ae(n);return{id:`ac_${n}`,label:n,type:"folder",open:!1,children:ie.map(l=>({id:`ac_${n}_${++le}`,label:`${l.label} (${l.method})`,type:"req",method:l.method,url:`/auto/${e}/${t}/${l.urlFn(a)}`,desc:`${a} ${l.label}`,params:[],body:""}))}})}))});let de=0;const pe=()=>M({id:"ar_root",appId:"samples",label:"adminAutoCrud-rest",type:"app",open:!1,children:B.map(({domain:e,sub:t,label:o,tables:i})=>({id:`ar_${e}_${t}`,label:o,type:"folder",open:!1,children:i.map(n=>({id:`ar_${n}`,label:n,type:"folder",open:!1,children:ne.map(a=>({id:`ar_${n}_${++de}`,label:`${a.label} (${a.method})`,type:"req",method:a.method,url:`/api/autoRest/${e}/${t}/${a.urlFn(n)}`,desc:`${n} ${a.label}`,params:[],body:""}))}))}))}),j=c({fo:!0,bo:!0,samples:!0}),ce={fo:{label:"FO",color:"#1a73e8"},bo:{label:"BO",color:"#e8587a"},samples:{label:"Samples",color:"#34a853"}},fe=e=>{e.type!=="req"&&(e.open=!e.open)},J=(e,t=0)=>{const o=[],i=s.treeSearch.toLowerCase(),n=s.treeSearchType||"label,url";for(const a of e)if(!(a.type==="app"&&!j[a.appId])){if(i&&a.type==="req"){const l=[];if(n.includes("label")&&l.push((a.label||"").toLowerCase().includes(i)),n.includes("url")&&l.push((a.url||"").toLowerCase().includes(i)),!l.some(Boolean))continue}o.push({n:a,depth:t}),a.type!=="req"&&(a.open||i)&&J(a.children||[],t+1).forEach(l=>o.push(l))}return o},be=z(()=>J(A)),F=g(window.location.origin),G=g(""),x=c([{k:"Content-Type",v:"application/json"},{k:"",v:""}]),ue=()=>{try{localStorage.setItem("modu-bo-xdev-postman_v1",JSON.stringify({hostUrl:s.hostUrl,token:s.token,defHeaders:x.filter(e=>e.k.trim())}))}catch{}},xe=()=>{var e;try{const t=JSON.parse(localStorage.getItem("modu-bo-xdev-postman_v1")||"{}");t.hostUrl&&(s.hostUrl=t.hostUrl),t.token&&(s.token=t.token),(e=t.defHeaders)!=null&&e.length&&(x.splice(0),t.defHeaders.forEach(o=>x.push({...o})),x.push({k:"",v:""}))}catch{}};Z([F,G,x],ue,{deep:!0});const _=c([]),N=()=>{_.splice(0);for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e);_.push({k:t,v:String(localStorage.getItem(t)).substring(0,100)})}_.length||_.push({k:"(\uBE44\uC5B4 \uC788\uC74C)",v:"-"})},b=c([]);let he=0;const u=z(()=>b.find(e=>e.tabId===s.activeTabId)||null),V=e=>{const t=D(A,e.id)||"",o=[t,e.method,e.label].filter(Boolean).join(" \xB7 "),i=t?`${t} \xB7 ${e.label}`:e.label;return c({tabId:`t${++he}`,nodeId:e.id,tabLabel:o,shortLabel:i,method:e.method,desc:e.desc||"",reqMethod:e.method,reqUrl:e.url||"",reqBody:e.body||"",reqTab:["POST","PUT","PATCH"].includes(e.method)&&e.body?"body":"params",reqParams:c([...(e.params||[]).map(n=>({...n})),{k:"",v:""}]),reqHeaders:c([{k:"",v:""}]),resTab:"json",resJson:"",resStatus:null,resTime:null,resData:null,sending:!1,autoMs:0,autoLabel:""})},ge=e=>{if(e.type!=="req")return;const t=b.find(i=>i.nodeId===e.id);if(t){s.activeTabId=t.tabId;return}const o=V(e);b.push(o),s.activeTabId=o.tabId},P={},w={},R=c({});setInterval(()=>{for(const e of Object.keys(w))R[e]=Math.max(0,Math.ceil((w[e]-Date.now())/1e3))},500);const E=e=>{P[e]&&(clearInterval(P[e]),delete P[e]),delete w[e],delete R[e]},K=(e,t,o)=>{E(e.tabId),e.autoMs=t,e.autoLabel=o,t&&(w[e.tabId]=Date.now()+t,R[e.tabId]=Math.ceil(t/1e3),P[e.tabId]=setInterval(()=>{I(e),w[e.tabId]=Date.now()+t},t))},$=c({top:0,left:0}),L=[1,2,3,4,5,6,7,10,15,20,30,50,60],O=[1,2,3,4,5,10,15,20,30],U=[1,2,3,4,6,12],me=Math.max(L.length,O.length,U.length),ye=Array.from({length:me},(e,t)=>({s:L[t]!=null?L[t]:null,m:O[t]!=null?O[t]:null,h:U[t]!=null?U[t]:null})),ve=(e,t)=>{if(t.stopPropagation(),e.autoMs){K(e,0,"");return}if(s.autoPopupTabId===e.tabId){s.autoPopupTabId=null;return}const o=t.currentTarget.getBoundingClientRect();$.top=o.top,$.left=o.right+6,s.autoPopupTabId=e.tabId},_e=()=>{s.autoPopupTabId=null},we=(e,t,o)=>{K(e,t,o),s.autoPopupTabId=null},ke=(e,t)=>{t==null||t.stopPropagation(),E(e);const o=b.findIndex(i=>i.tabId===e);if(o!==-1){if(b.splice(o,1),s.activeTabId===e){const i=b[o]||b[o-1];s.activeTabId=i?i.tabId:null}s.autoPopupTabId===e&&(s.autoPopupTabId=null)}},Te=()=>{b.forEach(e=>E(e.tabId)),b.splice(0),s.activeTabId=null,s.autoPopupTabId=null},W=2e4,y=c([]);let Se=0;const p=e=>e!=null?String(e):"",ze=({type:e,tabLabel:t,method:o,url:i,status:n,resJson:a})=>{const l=++Se,h=c({id:l,seq:l,type:e,tabLabel:t,method:o,url:i,status:n,resJson:a,jsonOpen:!1,progress:100});y.push(h);const q=Date.now(),k=setInterval(()=>{const T=Date.now()-q;if(h.progress=Math.max(0,Math.round((1-T/W)*100)),T>=W){clearInterval(k);const S=y.findIndex(d=>d.id===l);S!==-1&&y.splice(S,1)}},200);h._tick=k},Ae=e=>{const t=y.findIndex(o=>o.id===e);t!==-1&&(clearInterval(y[t]._tick),y.splice(t,1))},Pe=e=>{let t=e.reqUrl.trim();t.startsWith("http")||(t=s.hostUrl.replace(/\/$/,"")+(t.startsWith("/")?t:"/"+t));const o=e.reqParams.filter(i=>p(i.k).trim());if(o.length){const i=o.map(n=>`${encodeURIComponent(p(n.k))}=${encodeURIComponent(p(n.v))}`).join("&");t+=(t.includes("?")?"&":"?")+i}return t},I=async e=>{var q,k,T,S;const t=e||u.value;if(!t||!((q=t.reqUrl)!=null&&q.trim()))return;t.sending=!0,t.resJson="",t.resStatus=null,t.resTime=null,t.resData=null;const o=Pe(t),i=t.reqMethod.toLowerCase(),n=Date.now(),a={};x.filter(d=>p(d.k).trim()).forEach(d=>{a[p(d.k)]=p(d.v)}),t.reqHeaders.filter(d=>p(d.k).trim()).forEach(d=>{a[p(d.k)]=p(d.v)}),s.token.trim()&&(a.Authorization=`Bearer ${s.token.trim()}`);let l=null,h=null;try{const d={method:i,url:o,headers:a};if(["post","put","patch"].includes(i)&&((k=t.reqBody)!=null&&k.trim()))try{d.data=JSON.parse(t.reqBody)}catch{d.data=t.reqBody}const m=await axios(d);h=Date.now()-n,l=m.status,t.resStatus=l,t.resTime=h,t.resData=m.data,t.resJson=JSON.stringify(m.data,null,2)}catch(d){console.error("[catch-info]",d),h=Date.now()-n,l=((T=d.response)==null?void 0:T.status)||0,t.resStatus=l,t.resTime=h;const m=((S=d.response)==null?void 0:S.data)||{error:d.message};t.resData=m,t.resJson=JSON.stringify(m,null,2)}finally{t.sending=!1;const m=new Date().toTimeString().slice(0,8),Fe=(t.reqParams||[]).filter(f=>p(f.k).trim()).map(f=>({k:p(f.k),v:p(f.v)})),Ge=(t.reqHeaders||[]).filter(f=>p(f.k).trim()).map(f=>({k:p(f.k),v:p(f.v)}));v.unshift({id:Date.now(),method:t.reqMethod,url:o,status:l,time:h,ts:m,tabLabel:t.tabLabel,resJson:t.resJson,reqInfo:{method:t.reqMethod,url:t.reqUrl,params:Fe,headers:Ge,body:t.reqBody,token:s.token,host:s.hostUrl,defHeaders:x.filter(f=>p(f.k).trim()).map(f=>({k:p(f.k),v:p(f.v)}))}}),v.length>50&&v.splice(50),l!==null&&ze({type:l>=200&&l<300?"info":"error",tabLabel:t.tabLabel,method:t.reqMethod,url:o,status:l,resJson:t.resJson})}},v=c([]),X=g(null),Re=g(null),r=c({method:"",host:"",url:"",token:"",body:"",params:[],headers:[]}),Ie=(e,t)=>{s.histSelIdx=t,s.histModal=e,s.histModalTab="req",r.method=e.reqInfo.method||"",r.host=e.reqInfo.host||"",r.url=e.reqInfo.url||"",r.token=e.reqInfo.token||"",r.body=e.reqInfo.body||"",r.params=(e.reqInfo.params||[]).map(o=>({k:o.k,v:o.v})),r.headers=(e.reqInfo.headers||[]).map(o=>({k:o.k,v:o.v}))},qe=()=>{s.histModal=null},Me=g(""),Ee=g(null),$e=g(null),Le=g(""),Oe=async()=>{if(!u.value)return;const e=u.value;e.reqMethod=r.method,e.reqUrl=r.url,e.reqBody=r.body||"",e.reqParams.splice(0,e.reqParams.length,...r.params.map(i=>({...i})),{k:"",v:""}),e.reqHeaders.splice(0,e.reqHeaders.length,...r.headers.map(i=>({...i})),{k:"",v:""}),r.token&&(s.token=r.token),r.host&&(s.hostUrl=r.host),s.histResJson="",s.histResStatus=null,s.histResTime=null,s.histResTs="",s.histResProgress=0,s.histResSending=!0;const t=Date.now(),o=setInterval(()=>{const i=Date.now()-t;s.histResProgress=Math.min(85,Math.round(i/5e3*85))},80);await I(e),clearInterval(o),s.histResProgress=100,s.histResSending=!1,s.histResJson=e.resJson,s.histResStatus=e.resStatus,s.histResTime=e.resTime,s.histResTs=new Date().toTimeString().slice(0,8)},Ue=z(()=>{var o;const e=(o=u.value)==null?void 0:o.resData;if(!e)return[];const t=Array.isArray(e)?e:Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray(e==null?void 0:e.list)?e.list:null;return t!=null&&t.length?Object.keys(t[0]):[]}),Ce=z(()=>{var t;const e=(t=u.value)==null?void 0:t.resData;return e?Array.isArray(e)?e:Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray(e==null?void 0:e.list)?e.list:[]:[]}),He=[{key:"k",label:"\uD0A4",cellStyle:"color:#555;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"},{key:"v",label:"\uAC12",cellStyle:"color:#888;font-family:monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"}],De=[{key:"_no",label:"#",style:"width:32px;",align:"center",fmt:(e,t,o)=>v.length-o,cellStyle:"font-size:10px;color:#999;"},{key:"method",label:"\uBA54\uC11C\uB4DC",style:"width:68px;",align:"center",badge:e=>({text:e.method,style:Y(e.method)+"font-size:9px;padding:1px 5px;border-radius:2px;font-weight:700;"})},{key:"tabLabel",label:"\uD0ED\uBA85",style:"width:110px;",cellStyle:"color:#777;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:10px;"},{key:"url",label:"URL",cellStyle:"font-family:monospace;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"},{key:"status",label:"\uC0C1\uD0DC",style:"width:50px;",align:"center",fmt:(e,t)=>t.status||"-",cellStyle:(e,t)=>Q(t.status)},{key:"time",label:"\uC751\uB2F5\uC2DC\uAC04",style:"width:64px;",align:"center",fmt:e=>(e||"-")+(e?"ms":""),cellStyle:"color:#888;"},{key:"ts",label:"\uC694\uCCAD\uC2DC\uAC04",style:"width:68px;",align:"center",cellStyle:"color:#aaa;"}],Be=(e,t)=>{t.stopPropagation();let o=b.find(i=>i.nodeId===e.id);o||(o=V(e),b.push(o)),s.activeTabId=o.tabId,I(o)},C=e=>e.push({k:"",v:""}),H=(e,t)=>{e.length>1&&e.splice(t,1)},Y=e=>({GET:"background:#dcfce7;color:#166534;",POST:"background:#dbeafe;color:#1e40af;",PUT:"background:#fef3c7;color:#92400e;",PATCH:"background:#f3e8ff;color:#6b21a8;",DELETE:"background:#fee2e2;color:#991b1b;"})[e]||"background:#f0f0f0;color:#666;",Q=e=>e?e<300?"color:#166534;font-weight:700;":e<400?"color:#92400e;font-weight:700;":"color:#991b1b;font-weight:700;":"",je=async(e="DEFAULT")=>{xe(),N(),s.treeLoaded=!0,A.push(re()),A.push(pe())};ee(async()=>{je("DEFAULT")});const Je=Vue.toRef(s,"autoPopupTabId");return{uiState:s,codes:te,openTabs:b,hostUrl:F,token:G,defHeaders:x,lsItems:_,toasts:y,history:v,histSelIdx:X,histModal:Re,editReq:r,autoPopupPos:$,countdown:R,autoPopupTabId:Je,cfFlatTree:be,cfActiveTab:u,cfResGridColumns:Ue,cfResGridRows:Ce,handleBtnAction:oe,handleSelectAction:se,appFilter:j,APP_META:ce,POPUP_ROWS:ye,methodStyle:Y,statusStyle:Q,histResJson:Me,histResStatus:Ee,histResTime:$e,histResTs:Le,lsItemsGridColumns:He,historyGridColumns:De}},template:`
<div style="display:flex;height:calc(100vh - 94px);margin:-20px;width:calc(100% + 40px);overflow:hidden;font-size:12px;background:#fff;">
  <!-- ===== \u25A0. \u2501\u2501\u2501 1. Tree Panel (\uC88C\uCE21) \u2501\u2501\u2501 ============================== -->
  <div style="width:220px;flex-shrink:0;border-right:1px solid #e0e0e0;display:flex;flex-direction:column;background:#f7f8fa;overflow:hidden;">
    <div style="padding:7px 10px 6px;border-bottom:1px solid #e0e0e0;background:#f0f2f5;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
        <span style="font-size:11px;font-weight:800;color:#333;">
          API Endpoints
        </span>
        <button @click="handleBtnAction('settings-toggle')" title="\uACF5\uD1B5 \uC124\uC815"
          style="border:none;background:none;font-size:15px;padding:0;line-height:1;"
          :style="uiState.settingsOpen?'color:#e8587a;':'color:#999;'">
          \u2699
        </button>
      </div>
      <div style="display:flex;gap:3px;margin-bottom:6px;flex-wrap:wrap;">
        <label v-for="(meta,key) in APP_META" :key="key"
          style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;border:1px solid #ddd;background:#fff;transition:all .12s;user-select:none;"
          :style="appFilter[key]?'background:'+meta.color+';color:#fff;border-color:'+meta.color+';':''">
          <input type="checkbox" v-model="appFilter[key]" style="display:none;" />
          {{ meta.label }}
        </label>
      </div>
      <bo-multi-check-select
        v-model="uiState.treeSearchType"
        :options="[
        { value: 'label', label: '\uC774\uB984' },
        { value: 'url',   label: 'URL' },
        ]"
        placeholder="\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4"
        all-label="\uC804\uCCB4 \uC120\uD0DD"
        min-width="100%" />
      <input v-model="uiState.treeSearch" placeholder="\u{1F50D} \uAC80\uC0C9\uC5B4 \uC785\uB825"
        style="width:100%;box-sizing:border-box;font-size:11px;padding:4px 7px;border:1px solid #ddd;border-radius:4px;outline:none;background:#fff;margin-top:4px;" />
    </div>
    <!-- ===== \u25A0.\u25A0. \uC601\uC5ED ==================================================== -->
    <div style="flex:1;overflow-y:auto;padding:4px 0;">
      <div v-if="!uiState.treeLoaded" style="text-align:center;padding:20px;color:#ccc;font-size:11px;">
        \uB85C\uB529 \uC911\u2026
      </div>
      <div v-for="item in cfFlatTree" :key="item.n.id"
        @click="handleSelectAction('tree-nodeClick', item.n)"
        style="display:flex;align-items:center;gap:3px;padding:3px 6px;white-space:nowrap;overflow:hidden;transition:background .1s;user-select:none;"
        :style="'padding-left:'+(6+item.depth*11)+'px;'+(openTabs.some(t=>t.nodeId===item.n.id)?'color:#e8587a;':'')"
        @mouseenter="e=>{ e.currentTarget.style.background='#eef2ff'; const b=e.currentTarget.querySelector('.tree-run-btn'); if(b) b.style.opacity='1'; }"
        @mouseleave="e=>{ e.currentTarget.style.background=''; const b=e.currentTarget.querySelector('.tree-run-btn'); if(b) b.style.opacity='0'; }">
        <span style="flex-shrink:0;font-size:9px;color:#bbb;width:8px;text-align:center;">
          <template v-if="item.n.type==='app'">
            {{ item.n.open?'\u25BC':'\u25B6' }}
          </template>
          <template v-else-if="item.n.type==='folder'">
            {{ item.n.open?'\u25BE':'\u25B8' }}
          </template>
          <template v-else>
            \xB7
          </template>
        </span>
        <template v-if="item.n.type==='app'">
          <span style="font-size:10px;font-weight:800;padding:1px 6px;border-radius:3px;background:#333;color:#fff;">
            {{ item.n.label }}
          </span>
        </template>
        <template v-else-if="item.n.type==='folder'">
          <span style="font-size:11px;font-weight:700;color:#444;overflow:hidden;text-overflow:ellipsis;">
            \u{1F4C1} {{ item.n.label }}
          </span>
        </template>
        <template v-else>
          <span style="font-size:9px;padding:1px 3px;border-radius:2px;font-weight:700;flex-shrink:0;min-width:38px;text-align:center;" :style="methodStyle(item.n.method)">
            {{ item.n.method }}
          </span>
          <span style="font-size:11px;overflow:hidden;text-overflow:ellipsis;flex:1;" :title="item.n.url">
            {{ item.n.label }}
          </span>
          <button @click.stop="handleSelectAction('tree-quickRun', { node: item.n, evt: $event })" title="\uBC14\uB85C \uC2E4\uD589"
            style="flex-shrink:0;border:none;background:none;font-size:10px;color:#bbb;padding:1px 3px;border-radius:3px;line-height:1;opacity:0;transition:opacity .1s;"
            class="tree-run-btn">
            \u25B6
          </button>
        </template>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC601\uC5ED ==================================================== -->
  <!-- ===== \u25A1. \u2501\u2501\u2501 1. Tree Panel (\uC88C\uCE21) \u2501\u2501\u2501 ============================== -->
  <!-- ===== \u25A0. \u2501\u2501\u2501 2. \uC5F4\uB9B0\uD0ED \uBC14 (\uC138\uB85C \uC88C\uCE21\uBA74) \u2501\u2501\u2501 =============================== -->
  <div style="width:172px;flex-shrink:0;border-right:1px solid #e0e0e0;display:flex;flex-direction:column;background:#f4f5f7;overflow:hidden;">
    <div style="padding:5px 8px 4px;border-bottom:1px solid #e0e0e0;display:flex;align-items:center;justify-content:space-between;background:#eeeff2;">
      <span style="font-size:10px;font-weight:800;color:#555;">
        \uC5F4\uB9B0 \uD0ED
        <span style="font-weight:400;color:#aaa;margin-left:2px;">
          {{ openTabs.length }}
        </span>
      </span>
      <button v-if="openTabs.length" @click="handleBtnAction('openTabs-closeAll')" title="\uC804\uCCB4 \uB2EB\uAE30"
        style="border:none;background:none;font-size:10px;color:#aaa;padding:0;">
        \u2715 \uC804\uCCB4
      </button>
    </div>
    <div v-if="!openTabs.length" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;color:#ccc;">
      <span style="font-size:22px;">
        \u{1F4C2}
      </span>
      <span style="font-size:10px;text-align:center;line-height:1.4;">
        \uC88C\uCE21 API \uBAA9\uB85D\uC744
        <br>
        \uD074\uB9AD\uD558\uC138\uC694
      </span>
    </div>
    <div style="flex:1;overflow-y:auto;">
      <div v-for="tab in openTabs" :key="tab.tabId"
        @click="handleSelectAction('openTabs-select', tab.tabId)"
        style="position:relative;padding:6px 6px 6px 6px;border-bottom:1px solid #e8e9ec;transition:background .1s;"
        :style="uiState.activeTabId===tab.tabId
        ? 'background:#fff;border-left:3px solid #e8587a;'
        : 'background:transparent;border-left:3px solid transparent;'"
        @mouseenter="e=>{ e.currentTarget.querySelectorAll('.tab-btn').forEach(b=>b.style.opacity='1'); if(uiState.activeTabId!==tab.tabId) e.currentTarget.style.background='#eaebee'; }"
        @mouseleave="e=>{ e.currentTarget.querySelectorAll('.tab-btn').forEach(b=>b.style.opacity='0'); if(uiState.activeTabId!==tab.tabId) e.currentTarget.style.background=''; }">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px;">
          <span style="font-size:8px;padding:1px 4px;border-radius:2px;font-weight:700;flex-shrink:0;" :style="methodStyle(tab.method)">
            {{ tab.method }}
          </span>
          <div style="display:flex;align-items:center;gap:1px;">
            <button @click.stop="handleSelectAction('autoPopup-open', { tab: tab, evt: $event })"
              style="border:none;background:none;font-size:12px;padding:1px 2px;border-radius:3px;line-height:1;transition:all .15s;"
              :style="tab.autoMs ? 'opacity:1;color:#22a84a;text-shadow:0 0 4px #86efac;' : 'opacity:0.55;color:#777;'"
              :title="tab.autoMs ? '\uC790\uB3D9\uC2E4\uD589 \uC911: '+tab.autoLabel : '\uC790\uB3D9\uC2E4\uD589 \uC124\uC815'">
              \u23F1
            </button>
            <button class="tab-btn" @click.stop="handleSelectAction('openTabs-rowClose', { tabId: tab.tabId })"
              style="border:none;background:none;font-size:11px;color:#aaa;padding:1px 3px;border-radius:3px;opacity:0;transition:opacity .15s;line-height:1;"
              title="\uD0ED \uB2EB\uAE30">
              \u2715
            </button>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
        <div style="font-size:10px;font-weight:600;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3;" :title="tab.tabLabel">
          {{ tab.shortLabel }}
        </div>
        <div style="display:flex;align-items:center;gap:4px;margin-top:2px;min-height:13px;">
          <span v-if="tab.sending" style="font-size:9px;color:#1a73e8;">
            \uC804\uC1A1 \uC911\u2026
          </span>
          <span v-else-if="tab.resStatus" style="font-size:9px;" :style="statusStyle(tab.resStatus)">
            {{ tab.resStatus }} \xB7 {{ tab.resTime }}ms
          </span>
          <span v-if="tab.autoMs" style="font-size:9px;color:#22a84a;margin-left:auto;font-weight:600;white-space:nowrap;">
            \u23F1 {{ tab.autoLabel }}
            <span style="color:#aaa;font-weight:400;">
              ({{ countdown[tab.tabId] != null ? countdown[tab.tabId] : '-' }}\uCD08)
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \u2501\u2501\u2501 2. \uC5F4\uB9B0\uD0ED \uBC14 (\uC138\uB85C \uC88C\uCE21\uBA74) \u2501\u2501\u2501 =============================== -->
  <!-- ===== \u25A0. \u2501\u2501\u2501 \uC790\uB3D9\uC2E4\uD589 \uC8FC\uAE30 \uC120\uD0DD \uD31D\uC5C5 \u2501\u2501\u2501 =================================== -->
  <template v-if="uiState.autoPopupTabId">
    <div @click="handleBtnAction('autoPopup-close')" style="position:fixed;inset:0;z-index:8000;">
    </div>
    <div style="position:fixed;z-index:8001;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 6px 24px rgba(0,0,0,.18);min-width:230px;overflow:hidden;"
      :style="'top:'+autoPopupPos.top+'px;left:'+autoPopupPos.left+'px;'">
      <div @click="handleSelectAction('autoPopup-select', { tab: openTabs.find(t=>t.tabId===uiState.autoPopupTabId), ms: 0, label: '' })"
        style="padding:8px 14px;font-size:11px;font-weight:700;color:#555;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between;transition:background .1s;"
        @mouseenter="e=>e.currentTarget.style.background='#f5f5f5'"
        @mouseleave="e=>e.currentTarget.style.background=''">
        <span>
          \u{1F6AB} \uC790\uB3D9\uC2E4\uD589 \uC5C6\uC74C
        </span>
        <span v-if="openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs===0||!openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs" style="font-size:10px;color:#34a853;">
          \u2714 \uD604\uC7AC
        </span>
      </div>
      <div style="padding:8px;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 =============================================== -->
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <thead>
            <tr>
              <th style="padding:3px 6px;text-align:center;font-weight:700;color:#888;font-size:10px;border-bottom:1px solid #eee;width:33%;">
                \uCD08 (sec)
              </th>
              <th style="padding:3px 6px;text-align:center;font-weight:700;color:#888;font-size:10px;border-bottom:1px solid #eee;width:34%;">
                \uBD84 (min)
              </th>
              <th style="padding:3px 6px;text-align:center;font-weight:700;color:#888;font-size:10px;border-bottom:1px solid #eee;width:33%;">
                \uC2DC (hr)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row,ri) in POPUP_ROWS" :key="ri">
              <td style="padding:1px 4px;text-align:center;">
                <button v-if="row.s!=null" @click="handleSelectAction('autoPopup-select', { tab: openTabs.find(t=>t.tabId===uiState.autoPopupTabId), ms: row.s*1000, label: row.s+'\uCD08' })"
                  style="width:100%;padding:3px 4px;font-size:11px;border:1px solid #e0e0e0;border-radius:4px;transition:all .1s;background:#f9f9f9;"
                  :style="openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs===row.s*1000?'background:#e8f4fd;border-color:#1a73e8;color:#1a73e8;font-weight:700;':''"
                  @mouseenter="e=>{ if(openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs!==row.s*1000) e.currentTarget.style.background='#eef2ff'; }"
                  @mouseleave="e=>{ if(openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs!==row.s*1000) e.currentTarget.style.background='#f9f9f9'; }">
                  {{ row.s }}\uCD08
                </button>
              </td>
              <td style="padding:1px 4px;text-align:center;">
                <button v-if="row.m!=null" @click="handleSelectAction('autoPopup-select', { tab: openTabs.find(t=>t.tabId===uiState.autoPopupTabId), ms: row.m*60000, label: row.m+'\uBD84' })"
                  style="width:100%;padding:3px 4px;font-size:11px;border:1px solid #e0e0e0;border-radius:4px;transition:all .1s;background:#f9f9f9;"
                  :style="openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs===row.m*60000?'background:#e8f4fd;border-color:#1a73e8;color:#1a73e8;font-weight:700;':''"
                  @mouseenter="e=>{ if(openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs!==row.m*60000) e.currentTarget.style.background='#eef2ff'; }"
                  @mouseleave="e=>{ if(openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs!==row.m*60000) e.currentTarget.style.background='#f9f9f9'; }">
                  {{ row.m }}\uBD84
                </button>
              </td>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ========================================== -->
              <td style="padding:1px 4px;text-align:center;">
                <button v-if="row.h!=null" @click="handleSelectAction('autoPopup-select', { tab: openTabs.find(t=>t.tabId===uiState.autoPopupTabId), ms: row.h*3600000, label: row.h+'\uC2DC\uAC04' })"
                  style="width:100%;padding:3px 4px;font-size:11px;border:1px solid #e0e0e0;border-radius:4px;transition:all .1s;background:#f9f9f9;"
                  :style="openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs===row.h*3600000?'background:#e8f4fd;border-color:#1a73e8;color:#1a73e8;font-weight:700;':''"
                  @mouseenter="e=>{ if(openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs!==row.h*3600000) e.currentTarget.style.background='#eef2ff'; }"
                  @mouseleave="e=>{ if(openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs!==row.h*3600000) e.currentTarget.style.background='#f9f9f9'; }">
                  {{ row.h }}\uC2DC\uAC04
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <!-- ===== \u25A1. \u2501\u2501\u2501 \uC790\uB3D9\uC2E4\uD589 \uC8FC\uAE30 \uC120\uD0DD \uD31D\uC5C5 \u2501\u2501\u2501 =================================== -->
  <!-- ===== \u25A0. \u2501\u2501\u2501 3. Main Panel (\uC6B0\uCE21) \u2501\u2501\u2501 ============================== -->
  <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0;">
    <!-- ===== \u25A0.\u25A0. \u2699 Settings Panel ====================================== -->
    <div v-show="uiState.settingsOpen" style="border-bottom:2px solid #e8587a;background:#fff;flex-shrink:0;padding:10px 14px 12px;">
      <div style="font-size:11px;font-weight:800;color:#e8587a;margin-bottom:8px;">
        \u2699 \uACF5\uD1B5 \uC124\uC815
        <span style="font-size:10px;font-weight:400;color:#aaa;margin-left:6px;">
          \uBCC0\uACBD\uC0AC\uD56D\uC740 localStorage\uC5D0 \uC790\uB3D9 \uC800\uC7A5
        </span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
        <div>
          <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;text-transform:uppercase;">
            Host URL
          </div>
          <input v-model="hostUrl" style="width:100%;box-sizing:border-box;font-size:11px;padding:4px 7px;border:1px solid #ddd;border-radius:4px;outline:none;font-family:monospace;" />
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;text-transform:uppercase;">
            \u{1F511} Bearer Token
          </div>
          <input v-model="token" placeholder="eyJhbGci\u2026" style="width:100%;box-sizing:border-box;font-size:11px;padding:4px 7px;border:1px solid #ddd;border-radius:4px;outline:none;font-family:monospace;" />
          <div v-if="token" style="font-size:10px;color:#e8587a;margin-top:3px;">
            \u2714 Authorization \uD5E4\uB354\uC5D0 \uC790\uB3D9 \uCD94\uAC00
          </div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;">
        <div>
          <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;text-transform:uppercase;">
            \uAE30\uBCF8 Headers
          </div>
          <div v-for="(h,i) in defHeaders" :key="i" style="display:flex;gap:3px;margin-bottom:3px;">
            <input v-model="h.k" placeholder="Key"   style="flex:1;min-width:0;font-size:11px;padding:3px 5px;border:1px solid #ddd;border-radius:3px;outline:none;" />
            <input v-model="h.v" placeholder="Value" style="flex:1;min-width:0;font-size:11px;padding:3px 5px;border:1px solid #ddd;border-radius:3px;outline:none;" />
            <button @click="handleSelectAction('defHeaders-rowRemove', i)" style="font-size:10px;padding:2px 5px;border:1px solid #fca5a5;border-radius:3px;background:#fee2e2;color:#991b1b;flex-shrink:0;">
              \u2715
            </button>
          </div>
          <button @click="handleBtnAction('defHeaders-add')" style="font-size:10px;padding:2px 8px;border:1px dashed #ccc;border-radius:3px;background:#f0f0f0;color:#666;">
            + \uCD94\uAC00
          </button>
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:5px;margin-bottom:3px;">
            <span style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;">
              LocalStorage
            </span>
            <button @click="handleBtnAction('lsItems-refresh')" style="font-size:10px;padding:1px 5px;border:1px solid #ddd;border-radius:3px;background:#f0f0f0;color:#666;">
              \u21BB
            </button>
          </div>
          <div style="max-height:80px;overflow-y:auto;border:1px solid #eee;border-radius:4px;background:#fff;">
            <bo-grid bare :columns="lsItemsGridColumns" :rows="lsItems" row-key="k" empty-text="(\uBE44\uC5B4 \uC788\uC74C)" style="font-size:10px;" />
          </div>
        </div>
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \u2699 Settings Panel ====================================== -->
    <!-- ===== \u25A0.\u25A0. \uD0ED \uC5C6\uC744 \uB54C \uBE48 \uC0C1\uD0DC =========================================== -->
    <div v-if="!cfActiveTab" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#ccc;background:#fafafa;">
      <span style="font-size:40px;">
        \u{1F680}
      </span>
      <div style="font-size:14px;font-weight:600;color:#bbb;">
        \uC88C\uCE21 API Endpoints\uC5D0\uC11C \uD56D\uBAA9\uC744 \uC120\uD0DD\uD558\uC138\uC694
      </div>
      <div style="font-size:11px;color:#ccc;">
        \uC120\uD0DD\uD558\uBA74 \uC5EC\uAE30\uC5D0 \uD0ED\uC73C\uB85C \uC5F4\uB9BD\uB2C8\uB2E4
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uD0ED \uC5C6\uC744 \uB54C \uBE48 \uC0C1\uD0DC =========================================== -->
    <!-- ===== \u25A0.\u25A0. \uD65C\uC131 \uD0ED \uB0B4\uC6A9 =============================================== -->
    <template v-if="cfActiveTab">
      <!-- ===== \u25A0.\u25A0.\u25A0. Request Bar ========================================= -->
      <div style="padding:8px 12px;border-bottom:1px solid #e0e0e0;background:#fff;flex-shrink:0;">
        <div style="font-size:10px;color:#aaa;margin-bottom:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="cfActiveTab.tabLabel">
          \u{1F4CC} {{ cfActiveTab.tabLabel }}
          <span v-if="cfActiveTab.desc" style="margin-left:6px;color:#ccc;">
            \u2014 {{ cfActiveTab.desc }}
          </span>
        </div>
        <div style="display:flex;gap:6px;align-items:center;">
          <select v-model="cfActiveTab.reqMethod"
            style="font-size:12px;padding:5px 6px;border:1px solid #ddd;border-radius:5px;font-weight:700;width:90px;"
            :style="methodStyle(cfActiveTab.reqMethod)">
            <option v-for="m in codes.http_method_opts" :key="m">
              {{ m }}
            </option>
          </select>
          <input v-model="cfActiveTab.reqUrl" placeholder="URL" @keyup.enter="handleBtnAction('request-send')"
            style="flex:1;font-size:12px;padding:5px 10px;border:1px solid #ddd;border-radius:5px;outline:none;font-family:monospace;min-width:0;" />
          <button @click="handleBtnAction('request-send')" :disabled="cfActiveTab.sending"
            style="font-size:12px;padding:5px 20px;border:none;border-radius:5px;background:#e8587a;color:#fff;font-weight:700;white-space:nowrap;flex-shrink:0;"
            :style="cfActiveTab.sending?'opacity:.55;cursor:not-allowed;':''">
            {{ cfActiveTab.sending ? '\uC804\uC1A1 \uC911\u2026' : '\u25B6 \uC804\uC1A1' }}
          </button>
          <span v-if="cfActiveTab.resStatus!==null" style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:5px;flex-shrink:0;"
            :style="cfActiveTab.resStatus<300?'background:#dcfce7;color:#166534;':cfActiveTab.resStatus<400?'background:#fef3c7;color:#92400e;':'background:#fee2e2;color:#991b1b;'">
            {{ cfActiveTab.resStatus }}
          </span>
          <span v-if="cfActiveTab.resTime!==null" style="font-size:11px;color:#aaa;flex-shrink:0;">
            {{ cfActiveTab.resTime }}ms
          </span>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. Middle: Params + Response =========================== -->
      <div style="flex:1;display:flex;overflow:hidden;min-height:0;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. Params / Headers / Body =========================== -->
        <div style="width:42%;flex-shrink:0;border-right:1px solid #e0e0e0;display:flex;flex-direction:column;overflow:hidden;">
          <div style="display:flex;border-bottom:1px solid #e0e0e0;background:#f8f8f8;flex-shrink:0;">
            <button v-for="t in [{id:'params',nm:'Params'},{id:'headers',nm:'Headers'},{id:'body',nm:'Body'}]" :key="t.id"
              @click="handleSelectAction('request-tabSelect', t.id)"
              style="padding:5px 13px;font-size:11px;border:none;font-weight:600;border-bottom:2px solid transparent;transition:all .12s;"
              :style="cfActiveTab.reqTab===t.id?'background:#fff;border-bottom-color:#e8587a;color:#e8587a;':'background:transparent;color:#999;'">
              {{ t.nm }}
            </button>
          </div>
          <div style="flex:1;overflow-y:auto;padding:8px;">
            <template v-if="cfActiveTab.reqTab==='params'">
              <div v-for="(p,i) in cfActiveTab.reqParams" :key="i" style="display:flex;gap:4px;margin-bottom:4px;align-items:center;">
                <input v-model="p.k" placeholder="Key"   style="flex:1;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #ddd;border-radius:3px;outline:none;" />
                <input v-model="p.v" placeholder="Value" style="flex:1;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #ddd;border-radius:3px;outline:none;" />
                <button @click="handleSelectAction('reqParams-rowRemove', i)" style="font-size:10px;padding:3px 6px;border:1px solid #fca5a5;border-radius:3px;background:#fee2e2;color:#991b1b;flex-shrink:0;">
                  \u2715
                </button>
              </div>
              <button @click="handleSelectAction('reqParams-add')" style="font-size:10px;padding:3px 10px;border:1px dashed #ccc;border-radius:3px;background:#f9f9f9;color:#666;">
                + \uCD94\uAC00
              </button>
            </template>
            <template v-if="cfActiveTab.reqTab==='headers'">
              <div v-for="(h,i) in cfActiveTab.reqHeaders" :key="i" style="display:flex;gap:4px;margin-bottom:4px;align-items:center;">
                <input v-model="h.k" placeholder="Key"   style="flex:1;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #ddd;border-radius:3px;outline:none;" />
                <input v-model="h.v" placeholder="Value" style="flex:1;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #ddd;border-radius:3px;outline:none;" />
                <button @click="handleSelectAction('reqHeaders-rowRemove', i)" style="font-size:10px;padding:3px 6px;border:1px solid #fca5a5;border-radius:3px;background:#fee2e2;color:#991b1b;flex-shrink:0;">
                  \u2715
                </button>
              </div>
              <button @click="handleSelectAction('reqHeaders-add')" style="font-size:10px;padding:3px 10px;border:1px dashed #ccc;border-radius:3px;background:#f9f9f9;color:#666;">
                + \uCD94\uAC00
              </button>
            </template>
            <template v-if="cfActiveTab.reqTab==='body'">
              <textarea v-model="cfActiveTab.reqBody" placeholder='{
  "key": "value"
}'
                style="width:100%;box-sizing:border-box;font-size:11px;font-family:monospace;padding:7px 8px;border:1px solid #ddd;border-radius:4px;outline:none;resize:vertical;line-height:1.55;min-height:180px;"></textarea>
              </template>
            </div>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. Response ========================================== -->
          <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0;">
            <div style="display:flex;border-bottom:1px solid #e0e0e0;background:#f8f8f8;flex-shrink:0;align-items:center;">
              <button v-for="t in [{id:'json',nm:'\uC751\uB2F5 JSON'},{id:'grid',nm:'Grid'}]" :key="t.id"
              @click="handleSelectAction('response-tabSelect', t.id)"
              style="padding:5px 13px;font-size:11px;border:none;font-weight:600;border-bottom:2px solid transparent;transition:all .12s;"
              :style="cfActiveTab.resTab===t.id?'background:#fff;border-bottom-color:#1a73e8;color:#1a73e8;':'background:transparent;color:#999;'">
                {{ t.nm }}
                <span v-if="t.id==='grid' ? (cfResGridRows.length) : false" style="font-size:9px;background:#e8f0fe;color:#1a73e8;padding:1px 5px;border-radius:8px;margin-left:3px;">
                {{ cfResGridRows.length }}
              </span>
            </button>
            <span v-if="cfActiveTab.sending" style="margin-left:auto;padding:0 12px;font-size:11px;color:#aaa;">
              \uC804\uC1A1 \uC911\u2026
            </span>
          </div>
          <div style="flex:1;overflow:auto;padding:8px;">
            <template v-if="cfActiveTab.resTab==='json'">
              <pre v-if="cfActiveTab.resJson" style="font-size:11px;font-family:monospace;white-space:pre-wrap;word-break:break-all;margin:0;color:#333;line-height:1.55;">{{ cfActiveTab.resJson }}</pre>
                <div v-else style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100px;color:#ccc;gap:6px;">
                  <span style="font-size:22px;">
                    \u{1F4ED}
                  </span>
                  <span style="font-size:12px;">
                    \uC751\uB2F5\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4
                  </span>
                </div>
              </template>
              <template v-if="cfActiveTab.resTab==='grid'">
                <div v-if="!cfResGridRows.length" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100px;color:#ccc;gap:6px;">
                  <span style="font-size:22px;">
                    \u{1F4CA}
                  </span>
                  <span style="font-size:12px;">
                    {{ cfActiveTab.resData ? 'Array \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4' : '\uC751\uB2F5\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4' }}
                  </span>
                </div>
                <div v-else style="overflow-x:auto;">
                  <div style="font-size:10px;color:#aaa;margin-bottom:5px;">
                    \uCD1D {{ cfResGridRows.length }}\uAC74
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 ======================================= -->
                  <table style="width:100%;border-collapse:collapse;font-size:11px;">
                    <thead>
                      <tr style="background:#f8f9fa;border-bottom:2px solid #e0e0e0;">
                        <th style="padding:4px 6px;text-align:center;width:30px;color:#ccc;font-size:10px;font-weight:400;">
                          #
                        </th>
                        <th v-for="col in cfResGridColumns" :key="col" style="padding:4px 8px;text-align:left;font-weight:600;color:#555;white-space:nowrap;font-size:11px;">
                          {{ col }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row,i) in cfResGridRows" :key="i" style="border-bottom:1px solid #f5f5f5;">
                        <td style="text-align:center;padding:3px 6px;color:#ddd;font-size:10px;">
                          {{ i+1 }}
                        </td>
                        <td v-for="col in cfResGridColumns" :key="col" style="padding:3px 8px;color:#333;white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;" :title="String(row[col])">
                          {{ row[col] }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
            </div>
          </div>
        </div>
      </template>
      <!-- ===== \u25A1.\u25A1. \uD65C\uC131 \uD0ED \uB0B4\uC6A9 =============================================== -->
      <!-- ===== \u25A0.\u25A0. History =============================================== -->
      <div style="border-top:2px solid #e0e0e0;background:#fafafa;flex-shrink:0;">
        <div style="padding:4px 12px;border-bottom:1px solid #ebebeb;display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:11px;font-weight:700;color:#555;">
            \uC804\uC1A1 \uC774\uB825
            <span style="font-weight:400;color:#e8587a;margin-left:3px;">
              {{ history.length }}
            </span>
          </span>
          <button @click="handleBtnAction('history-clear')" style="font-size:10px;padding:2px 8px;border:1px solid #ddd;border-radius:3px;background:#f0f0f0;color:#888;">
            \uC804\uCCB4 \uC0AD\uC81C
          </button>
        </div>
        <div style="max-height:120px;overflow-y:auto;">
          <bo-grid bare :show-row-no="false" :columns="historyGridColumns" :rows="history" row-key="id"
            :row-class="(row, i) => histSelIdx===i ? 'selected-row' : ''"
            empty-text="\uC804\uC1A1 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
            style="font-size:11px;"
            @cell-click="e => handleSelectAction('history-rowSelect', { h: e.row, i: e.rowIndex })" />
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. History =============================================== -->
  <!-- ===== \u25A0.\u25A0. History \uC0C1\uC138 \uBAA8\uB2EC ========================================= -->
  <bo-modal :show="!!histModal" width="900px" box-pad="0" @close="handleBtnAction('histModal-close')">
    <div v-if="histModal" style="display:flex;flex-direction:column;max-height:80vh;overflow:hidden;">
      <div style="padding:10px 16px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:8px;flex-shrink:0;background:#f8f9fa;">
        <span style="font-size:12px;font-weight:800;color:#555;">
          \uC804\uC1A1\uC774\uB825\uC0C1\uC138
        </span>
        <span style="position:relative;font-size:11px;font-weight:700;color:#888;padding:0 6px;">
          <span v-if="histModal.status ? (histModal.status<300) : false" style="position:absolute;top:-2px;right:0;width:6px;height:6px;border-radius:50%;background:#22c55e;">
        </span>
        <span v-else-if="histModal.status ? (histModal.status>=300) : false" style="position:absolute;top:-2px;right:0;width:6px;height:6px;border-radius:50%;background:#ef4444;">
      </span>
      #{{ history.length - histSelIdx }}
    </span>
    <span style="font-size:10px;padding:2px 7px;border-radius:3px;font-weight:700;" :style="methodStyle(histModal.method)">
      {{ histModal.method }}
    </span>
    <span style="font-size:11px;font-family:monospace;color:#555;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="histModal.url">
      {{ histModal.url }}
    </span>
    <button @click="handleBtnAction('histModal-close')" style="border:none;background:none;font-size:16px;color:#aaa;padding:0;line-height:1;flex-shrink:0;">
      \u2715
    </button>
  </div>
  <div v-if="histModal.tabLabel" style="padding:3px 16px;background:#fff;border-bottom:1px solid #f0f0f0;font-size:10px;color:#aaa;flex-shrink:0;">
    \uD0ED:
    <span style="color:#666;">
      {{ histModal.tabLabel }}
    </span>
  </div>
  <div style="flex:1;display:flex;overflow:hidden;min-height:0;">
    <div style="width:50%;flex-shrink:0;border-right:1px solid #e8e8e8;overflow-y:auto;padding:12px 14px;background:#fafafa;">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;">
        <span style="font-size:10px;font-weight:800;color:#1a73e8;text-transform:uppercase;letter-spacing:.05em;">
          \uC694\uCCAD
        </span>
        <span style="font-size:10px;color:#aaa;">
          {{ histModal.ts }}
        </span>
        <span style="flex:1;">
        </span>
        <button @click="handleBtnAction('histModal-resend')" :disabled="uiState.histResSending"
                style="font-size:11px;font-weight:700;padding:4px 14px;border:none;border-radius:5px;background:#e8587a;color:#fff;white-space:nowrap;"
                :style="uiState.histResSending?'opacity:.55;cursor:not-allowed;':''">
          {{ uiState.histResSending ? '\uC804\uC1A1 \uC911\u2026' : '\u25B6 \uC7AC\uC804\uC1A1' }}
        </button>
      </div>
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;">
          \uBA54\uC11C\uB4DC
        </div>
        <select v-model="editReq.method"
                style="width:100%;box-sizing:border-box;font-size:11px;padding:5px 8px;border:1px solid #c8d6f0;border-radius:4px;background:#fff;font-family:monospace;font-weight:700;color:#333;outline:none;">
          <option v-for="m in codes.http_method_opts" :key="m">
            {{ m }}
          </option>
        </select>
      </div>
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;">
          HOST
        </div>
        <input v-model="editReq.host"
                style="width:100%;box-sizing:border-box;font-size:11px;padding:5px 8px;border:1px solid #c8d6f0;border-radius:4px;background:#fff;font-family:monospace;color:#555;outline:none;" />
      </div>
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;">
          URL
        </div>
        <input v-model="editReq.url"
                style="width:100%;box-sizing:border-box;font-size:11px;padding:5px 8px;border:1px solid #c8d6f0;border-radius:4px;background:#fff;font-family:monospace;color:#333;outline:none;" />
      </div>
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;">
          \u{1F511} Bearer Token
        </div>
        <input v-model="editReq.token" placeholder="(\uC5C6\uC74C)"
                style="width:100%;box-sizing:border-box;font-size:11px;padding:5px 8px;border:1px solid #c8d6f0;border-radius:4px;background:#fff;font-family:monospace;color:#555;outline:none;" />
      </div>
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;display:flex;align-items:center;justify-content:space-between;">
          <span>
            Headers
            <span style="font-size:9px;font-weight:400;color:#aaa;">
              ({{ editReq.headers.length }}\uAC1C)
            </span>
          </span>
          <button @click="handleBtnAction('editReq-headerAdd')"
                  style="font-size:10px;padding:1px 7px;border:1px dashed #aad;border-radius:3px;background:#f0f4ff;color:#555;">
            + \uCD94\uAC00
          </button>
        </div>
        <div style="border:1px solid #c8d6f0;border-radius:4px;overflow:hidden;background:#fff;">
          <div v-if="!editReq.headers.length" style="padding:6px 10px;font-size:11px;color:#bbb;">
            (\uC5C6\uC74C)
          </div>
          <div v-for="(h,i) in editReq.headers" :key="i" style="display:flex;border-bottom:1px solid #f0f0f0;align-items:center;gap:4px;padding:3px 6px;">
            <input v-model="h.k" placeholder="Key"   style="flex:2;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #dde3f0;border-radius:3px;background:#f8f9fc;font-family:monospace;color:#555;outline:none;" />
            <input v-model="h.v" placeholder="Value" style="flex:3;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #dde3f0;border-radius:3px;background:#f8f9fc;font-family:monospace;color:#333;outline:none;" />
            <button @click="handleSelectAction('editReq-headerRowRemove', i)" style="border:none;background:none;color:#ccc;font-size:12px;padding:0 2px;flex-shrink:0;line-height:1;">
              \u2715
            </button>
          </div>
        </div>
      </div>
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;display:flex;align-items:center;justify-content:space-between;">
          <span>
            Parameters
            <span style="font-size:9px;font-weight:400;color:#aaa;">
              ({{ editReq.params.length }}\uAC1C)
            </span>
          </span>
          <button @click="handleBtnAction('editReq-paramAdd')"
                  style="font-size:10px;padding:1px 7px;border:1px dashed #aad;border-radius:3px;background:#f0f4ff;color:#555;">
            + \uCD94\uAC00
          </button>
        </div>
        <div style="border:1px solid #c8d6f0;border-radius:4px;overflow:hidden;background:#fff;">
          <div v-if="!editReq.params.length" style="padding:6px 10px;font-size:11px;color:#bbb;">
            (\uC5C6\uC74C)
          </div>
          <div v-for="(p,i) in editReq.params" :key="i" style="display:flex;border-bottom:1px solid #f0f0f0;align-items:center;gap:4px;padding:3px 6px;">
            <input v-model="p.k" placeholder="Key"   style="flex:2;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #dde3f0;border-radius:3px;background:#f8f9fc;font-family:monospace;color:#555;outline:none;" />
            <input v-model="p.v" placeholder="Value" style="flex:3;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #dde3f0;border-radius:3px;background:#f8f9fc;font-family:monospace;color:#333;outline:none;" />
            <button @click="handleSelectAction('editReq-paramRowRemove', i)" style="border:none;background:none;color:#ccc;font-size:12px;padding:0 2px;flex-shrink:0;line-height:1;">
              \u2715
            </button>
          </div>
        </div>
      </div>
      <div>
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;">
          Body
        </div>
        <textarea v-model="editReq.body" placeholder="(\uC5C6\uC74C)"
                style="width:100%;box-sizing:border-box;font-size:11px;padding:5px 8px;border:1px solid #c8d6f0;border-radius:4px;background:#fff;font-family:monospace;color:#333;outline:none;resize:vertical;min-height:60px;line-height:1.5;"></textarea>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================== -->
      <div style="flex:1;display:flex;flex-direction:column;min-width:0;background:#fff;overflow:hidden;">
        <div style="flex-shrink:0;padding:12px 14px 0;border-bottom:1px solid #f0f0f0;">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
            <span style="font-size:10px;font-weight:800;color:#e8587a;text-transform:uppercase;letter-spacing:.05em;">
              \uC751\uB2F5
            </span>
            <span style="flex:1;">
            </span>
            <template v-if="uiState.histResSending">
              <span style="font-size:10px;color:#1a73e8;font-weight:600;">
                \uC804\uC1A1 \uC911\u2026 {{ uiState.histResProgress }}%
              </span>
            </template>
            <template v-else-if="histResStatus">
              <span style="font-size:12px;font-weight:800;" :style="histResStatus<300?'color:#166534;':histResStatus<400?'color:#92400e;':'color:#991b1b;'">
                {{ histResStatus }}
              </span>
              <span style="font-size:10px;color:#888;">
                {{ histResTime }}ms
              </span>
              <span style="font-size:10px;color:#aaa;">
                {{ histResTs }}
              </span>
              <span style="font-size:9px;color:#e8587a;background:#ffe4ec;padding:1px 5px;border-radius:3px;font-weight:600;">
                \uC7AC\uC804\uC1A1
              </span>
            </template>
            <template v-else-if="histModal.status">
              <span style="font-size:12px;font-weight:800;" :style="histModal.status<300?'color:#166534;':histModal.status<400?'color:#92400e;':'color:#991b1b;'">
                {{ histModal.status }}
              </span>
              <span style="font-size:10px;color:#888;">
                {{ histModal.time }}ms
              </span>
              <span style="font-size:10px;color:#aaa;">
                {{ histModal.ts }}
              </span>
            </template>
          </div>
          <div style="height:6px;background:#f0f0f0;border-radius:0;margin:0 -14px;overflow:hidden;">
            <div style="height:100%;transition:width .08s linear;"
                  :style="uiState.histResSending ? 'background:#e8587a;width:'+uiState.histResProgress+'%;' : (histResStatus ? 'background:#22c55e;width:100%;' : 'width:0;')"
                  >
            </div>
          </div>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px 14px;">
          <pre v-if="!uiState.histResSending ? (histResJson) : false" style="margin:0;font-size:11px;font-family:monospace;white-space:pre-wrap;word-break:break-all;color:#333;line-height:1.6;background:#fafafa;border:1px solid #eee;border-radius:6px;padding:10px;">
          {{ histResJson }}
        </pre>
        <pre v-else-if="!uiState.histResSending ? (!histResJson ? (histModal.resJson) : false) : false" style="margin:0;font-size:11px;font-family:monospace;white-space:pre-wrap;word-break:break-all;color:#888;line-height:1.6;background:#fafafa;border:1px solid #eee;border-radius:6px;padding:10px;">
        {{ histModal.resJson }}
      </pre>
      <div v-else-if="!uiState.histResSending" style="display:flex;align-items:center;justify-content:center;height:80px;color:#ccc;font-size:12px;">
        \uC751\uB2F5 \uBCF8\uBB38 \uC5C6\uC74C
      </div>
    </div>
  </div>
    </div>
  </bo-modal>
</div>
<!-- ===== /Main Panel ================================================ -->
<!-- ===== \u25A1.\u25A1. History \uC0C1\uC138 \uBAA8\uB2EC ========================================= -->
<!-- ===== \u25A1. \u2501\u2501\u2501 3. Main Panel (\uC6B0\uCE21) \u2501\u2501\u2501 ============================== -->
<!-- ===== \u25A0. \u2501\u2501\u2501 Toast \uC54C\uB9BC (\uC6B0\uCE21 \uD558\uB2E8) \u2501\u2501\u2501 ================================ -->
<div style="position:fixed;right:16px;bottom:16px;z-index:9500;display:flex;flex-direction:column;gap:8px;align-items:flex-end;pointer-events:none;">
  <div v-for="t in toasts" :key="t.id"
      style="pointer-events:all;width:380px;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.22);overflow:hidden;font-size:11px;"
      :style="t.type==='error'?'border:1px solid #fca5a5;':'border:1px solid #86efac;'">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 10px;"
        :style="t.type==='error'?'background:#fee2e2;':'background:#dcfce7;'">
      <span style="font-size:9px;font-weight:800;padding:1px 5px;border-radius:10px;flex-shrink:0;"
          :style="t.type==='error'?'background:#ef4444;color:#fff;':'background:#22c55e;color:#fff;'">
        {{ t.seq }}
      </span>
      <span style="font-size:13px;flex-shrink:0;">
        {{ t.type==='error' ? '\u{1F534}' : '\u{1F7E2}' }}
      </span>
      <span style="font-weight:700;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#333;font-size:11px;"
          :title="t.tabLabel">
        {{ t.tabLabel }}
      </span>
      <button @click="handleSelectAction('toasts-rowClose', t.id)"
          style="border:none;background:none;font-size:13px;color:#888;padding:0;line-height:1;flex-shrink:0;">
        \u2715
      </button>
    </div>
    <div style="height:3px;background:#e5e7eb;">
      <div style="height:100%;transition:width .2s linear;"
          :style="(t.type==='error'?'background:#ef4444;':'background:#22c55e;')+'width:'+t.progress+'%;'">
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:5px;padding:5px 10px;background:#fff;border-bottom:1px solid #f0f0f0;">
      <span style="font-size:9px;padding:1px 5px;border-radius:2px;font-weight:700;flex-shrink:0;"
          :style="t.method==='GET'?'background:#dcfce7;color:#166534;':t.method==='POST'?'background:#dbeafe;color:#1e40af;':t.method==='PUT'?'background:#fef3c7;color:#92400e;':t.method==='DELETE'?'background:#fee2e2;color:#991b1b;':'background:#f3e8ff;color:#6b21a8;'">
        {{ t.method }}
      </span>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
      <span style="font-family:monospace;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:10px;" :title="t.url">
        {{ t.url }}
      </span>
      <span style="font-weight:700;flex-shrink:0;font-size:12px;"
          :style="t.status<300?'color:#166534;':t.status<400?'color:#92400e;':'color:#991b1b;'">
        {{ t.status }}
      </span>
    </div>
    <div style="background:#f9f9f9;">
      <div @click="handleSelectAction('toasts-rowToggleJson', t)"
          style="padding:4px 10px;display:flex;align-items:center;justify-content:space-between;user-select:none;color:#888;font-size:10px;">
        <span>
          \uC751\uB2F5 JSON
        </span>
        <span style="font-size:9px;">
          {{ t.jsonOpen ? '\u25B2 \uC811\uAE30' : '\u25BC \uD3BC\uCE58\uAE30' }}
        </span>
      </div>
      <div v-if="t.jsonOpen" style="max-height:160px;overflow:auto;padding:0 10px 8px;">
        <pre style="margin:0;font-size:10px;font-family:monospace;white-space:pre-wrap;word-break:break-all;color:#333;line-height:1.5;">{{ t.resJson || '(\uC5C6\uC74C)' }}</pre>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ===== \u25A1. \u2501\u2501\u2501 Toast \uC54C\uB9BC (\uC6B0\uCE21 \uD558\uB2E8) \u2501\u2501\u2501 ================================ -->
`};
