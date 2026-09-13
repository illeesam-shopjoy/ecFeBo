window.XsSample07={name:"XsSample07",setup(){const{ref:f,reactive:c,computed:v,watch:xe,onMounted:he}=Vue,s=c({loading:!1,error:null,treeSearch:"",hostUrl:window.location.origin,token:"",activeTabId:null,autoPopupTabId:null,histSelIdx:null,histModal:null,histModalTab:"req",histResJson:"",histResStatus:null,histResTime:null,histResTs:"",histResProgress:0,histResSending:!1,settingsOpen:!1,treeLoaded:!1}),ge=c({http_method_opts:["GET","POST","PUT","PATCH","DELETE"]}),I=c([]),N=c({fo:!0,bo:!0,samples:!0}),me={fo:{label:"FO",color:"#1a73e8"},bo:{label:"BO",color:"#e8587a"},samples:{label:"Samples",color:"#34a853"}},K=f(""),E=f(window.location.origin),O=f(""),_=c([{k:"Content-Type",v:"application/json"},{k:"",v:""}]),ye=f(!1),w=c([]),u=c([]),ve=f(null);let _e=0;const P={},k={},A=c({}),we=f(null),L=c({top:0,left:0}),$=[1,2,3,4,5,6,7,10,15,20,30,50,60],H=[1,2,3,4,5,10,15,20,30],U=[1,2,3,4,6,12],ke=Math.max($.length,H.length,U.length),Te=Array.from({length:ke},(e,t)=>({s:$[t]!=null?$[t]:null,m:H[t]!=null?H[t]:null,h:U[t]!=null?U[t]:null})),V=2e4,g=c([]);let ze=0;const m=c([]),W=f(null),D=f(null),Se=f("req"),l=c({method:"",host:"",url:"",token:"",body:"",params:[],headers:[]}),C=f(""),j=f(null),J=f(null),F=f(""),q=f(0),X=f(!1),Y=[{domain:"ec",sub:"cm",label:"EC CM",tables:["cm_blog_cate","cm_blog_file","cm_blog_good","cm_blog_reply","cm_blog_tag","cm_blog","cm_chatt_msg","cm_chatt_room","cm_path","cmh_push_log"]},{domain:"ec",sub:"dp",label:"EC DP",tables:["dp_area_panel","dp_area","dp_panel_item","dp_panel","dp_ui_area","dp_ui","dp_widget_lib","dp_widget"]},{domain:"ec",sub:"mb",label:"EC MB",tables:["mb_dvc_token","mb_like","mb_member_addr","mb_member_grade","mb_member_group","mb_member","mb_member_sns","mbh_member_login_hist","mbh_member_login_log","mbh_member_token_log"]},{domain:"ec",sub:"od",label:"EC OD",tables:["od_cart","od_claim_item","od_claim","od_dliv_item","od_dliv","od_order_discnt","od_order_item_discnt","od_order_item","od_order","od_pay_method","od_pay","od_refund_method","od_refund","odh_claim_chg_hist","odh_claim_item_chg_hist","odh_claim_item_status_hist","odh_claim_status_hist","odh_dliv_chg_hist","odh_dliv_item_chg_hist","odh_dliv_status_hist","odh_order_chg_hist","odh_order_item_chg_hist","odh_order_item_status_hist","odh_order_status_hist","odh_pay_chg_hist","odh_pay_status_hist"]},{domain:"ec",sub:"pd",label:"EC PD",tables:["pd_category_prod","pd_category","pd_dliv_tmplt","pd_prod_bundle_item","pd_prod_content","pd_prod_img","pd_prod_opt_item","pd_prod_opt","pd_prod_qna","pd_prod_rel","pd_prod_set_item","pd_prod_sku","pd_prod_tag","pd_prod","pd_restock_noti","pd_review_attach","pd_review_comment","pd_review","pd_tag","pdh_prod_chg_hist","pdh_prod_content_chg_hist","pdh_prod_sku_chg_hist","pdh_prod_sku_price_hist","pdh_prod_sku_stock_hist","pdh_prod_status_hist","pdh_prod_view_log"]},{domain:"ec",sub:"pm",label:"EC PM",tables:["pm_cache","pm_coupon_issue","pm_coupon_item","pm_coupon_usage","pm_coupon","pm_discnt_item","pm_discnt_usage","pm_discnt","pm_event_benefit","pm_event_item","pm_event","pm_gift_cond","pm_gift_issue","pm_gift","pm_plan_item","pm_plan","pm_save_issue","pm_save_usage","pm_save","pm_voucher_issue","pm_voucher"]},{domain:"ec",sub:"st",label:"EC ST",tables:["st_erp_voucher_line","st_erp_voucher","st_recon","st_settle_adj","st_settle_close","st_settle_config","st_settle_etc_adj","st_settle_item","st_settle_pay","st_settle_raw","st_settle"]},{domain:"sy",sub:"sy",label:"SY",tables:["sy_alarm","sy_attach","sy_batch","sy_bbm","sy_bbs","sy_brand","sy_code_grp","sy_code","sy_contact","sy_dept","sy_i18n","sy_menu","sy_notice","sy_path","sy_prop","sy_role_menu","sy_role","sy_site","sy_template","sy_user_role","sy_user","sy_vendor_brand","sy_vendor_content","sy_vendor_user","sy_vendor","sy_voc","syh_alarm_send_hist","syh_api_log","syh_batch_hist","syh_batch_log","syh_send_email_log","syh_send_msg_log","syh_user_login_hist","syh_user_login_log","syh_user_token_log"]}],Re=[{label:"\uB2E8\uAC74",urlFn:e=>`select${e}`,method:"POST"},{label:"\uBAA9\uB85D",urlFn:e=>`select${e}List`,method:"POST"},{label:"\uD398\uC774\uC9C0",urlFn:e=>`select${e}Page`,method:"POST"},{label:"\uAC74\uC218",urlFn:e=>`select${e}Count`,method:"POST"},{label:"\uB4F1\uB85D",urlFn:e=>`insert${e}Insert`,method:"POST"},{label:"\uC218\uC815",urlFn:e=>`update${e}Update`,method:"PUT"},{label:"\uBD80\uBD84\uC218\uC815",urlFn:e=>`update${e}UpdateOption`,method:"PUT"},{label:"\uC0AD\uC81C",urlFn:e=>`delete${e}Delete`,method:"DELETE"},{label:"\uC77C\uAD04\uC0AD\uC81C",urlFn:e=>`delete${e}DeleteList`,method:"DELETE"}],Ie=[{label:"\uBAA9\uB85D \uC870\uD68C",urlFn:e=>e,method:"GET"},{label:"\uD398\uC774\uC9C0 \uC870\uD68C",urlFn:e=>`${e}/page`,method:"GET"},{label:"\uAC74\uC218 \uC870\uD68C",urlFn:e=>`${e}/count`,method:"GET"},{label:"\uB2E8\uAC74 \uC870\uD68C",urlFn:e=>`${e}/{id}`,method:"GET"},{label:"\uB4F1\uB85D",urlFn:e=>e,method:"POST"},{label:"\uC218\uC815",urlFn:e=>`${e}/{id}`,method:"PUT"},{label:"\uBD80\uBD84\uC218\uC815",urlFn:e=>`${e}/{id}`,method:"PATCH"},{label:"\uC0AD\uC81C",urlFn:e=>`${e}/{id}`,method:"DELETE"},{label:"\uC77C\uAD04\uC0AD\uC81C",urlFn:e=>e,method:"DELETE"}];let Pe=0,Ae=0;const We=(e,t={})=>{if(e==="tabs-closeAll")return re();if(e==="tab-send")return T();if(e==="hist-modalClose")return pe();if(e==="hist-resend")return ce();if(e==="auto-popupClose")return ne();if(e==="ls-refresh")return te();console.warn("[handleBtnAction] unknown cmd:",e)},Xe=(e,t={})=>{if(e==="tree-toggle")return Z(t);if(e==="tree-selectApi")return se(t);if(e==="tabs-close")return ae(t.tabId,t.event);if(e==="toast-close")return le(t);if(e==="hist-select")return de(t.h,t.idx);console.warn("[handleSelectAction] unknown cmd:",e)},B=e=>{var o;const t=c({id:e.id,appId:e.appId||"",label:e.label,type:e.type,open:(o=e.open)!=null?o:!1,method:e.method||"",url:e.url||"",desc:e.desc||"",params:(e.params||[]).map(n=>({...n})),body:e.body||""});return e.children&&(t.children=e.children.map(B)),t},Q=(e,t)=>{for(const o of e)if(o.children){if(o.children.some(i=>i.id===t))return o.label;const n=Q(o.children,t);if(n!==null)return n}return null},qe=e=>e.split("_").map(t=>t[0].toUpperCase()+t.slice(1)).join(""),Me=()=>B({id:"ac_root",appId:"samples",label:"boAutoCrud-method",type:"app",open:!1,children:Y.map(({domain:e,sub:t,label:o,tables:n})=>({id:`ac_${e}_${t}`,label:o,type:"folder",open:!1,children:n.map(i=>{const r=qe(i);return{id:`ac_${i}`,label:i,type:"folder",open:!1,children:Re.map(d=>({id:`ac_${i}_${++Pe}`,label:`${d.label} (${d.method})`,type:"req",method:d.method,url:`/auto/${e}/${t}/${d.urlFn(r)}`,desc:`${r} ${d.label}`,params:[],body:""}))}})}))}),Ee=()=>B({id:"ar_root",appId:"samples",label:"boAutoCrud-rest",type:"app",open:!1,children:Y.map(({domain:e,sub:t,label:o,tables:n})=>({id:`ar_${e}_${t}`,label:o,type:"folder",open:!1,children:n.map(i=>({id:`ar_${i}`,label:i,type:"folder",open:!1,children:Ie.map(r=>({id:`ar_${i}_${++Ae}`,label:`${r.label} (${r.method})`,type:"req",method:r.method,url:`/autoRest/${e}/${t}/${r.urlFn(i)}`,desc:`${i} ${r.label}`,params:[],body:""}))}))}))}),Z=e=>{e.type!=="req"&&(e.open=!e.open)},ee=(e,t=0)=>{const o=[],n=K.value.toLowerCase();for(const i of e)i.type==="app"&&!N[i.appId]||n&&i.type==="req"&&!i.label.toLowerCase().includes(n)&&!i.url.toLowerCase().includes(n)||(o.push({n:i,depth:t}),i.type!=="req"&&(i.open||n)&&ee(i.children||[],t+1).forEach(r=>o.push(r)));return o},Oe=v(()=>ee(I));xe([E,O,_],()=>{try{localStorage.setItem("modu-fo-xdev-sample07_v2",JSON.stringify({hostUrl:s.hostUrl,token:s.token,defHeaders:_.filter(e=>e.k.trim())}))}catch{}},{deep:!0});const te=()=>{w.splice(0);for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e);w.push({k:t,v:String(localStorage.getItem(t)).substring(0,100)})}w.length||w.push({k:"(\uBE44\uC5B4 \uC788\uC74C)",v:"-"})},y=v(()=>u.find(e=>e.tabId===s.activeTabId)||null),oe=e=>{const t=Q(I,e.id)||"",o=[t,e.method,e.label].filter(Boolean).join(" \xB7 "),n=t?`${t} \xB7 ${e.label}`:e.label;return c({tabId:`t${++_e}`,nodeId:e.id,tabLabel:o,shortLabel:n,method:e.method,desc:e.desc||"",reqMethod:e.method,reqUrl:e.url||"",reqBody:e.body||"",reqTab:["POST","PUT","PATCH"].includes(e.method)&&e.body?"body":"params",reqParams:c([...(e.params||[]).map(i=>({...i})),{k:"",v:""}]),reqHeaders:c([{k:"",v:""}]),resTab:"json",resJson:"",resStatus:null,resTime:null,resData:null,sending:!1,autoMs:0,autoLabel:""})},se=e=>{if(e.type!=="req")return;const t=u.find(n=>n.nodeId===e.id);if(t){s.activeTabId=t.tabId;return}const o=oe(e);u.push(o),s.activeTabId=o.tabId};setInterval(()=>{for(const e of Object.keys(k))A[e]=Math.max(0,Math.ceil((k[e]-Date.now())/1e3))},500);const G=e=>{P[e]&&(clearInterval(P[e]),delete P[e]),delete k[e],delete A[e]},ie=(e,t,o)=>{G(e.tabId),e.autoMs=t,e.autoLabel=o,t&&(k[e.tabId]=Date.now()+t,A[e.tabId]=Math.ceil(t/1e3),P[e.tabId]=setInterval(()=>{T(e),k[e.tabId]=Date.now()+t},t))},Le=(e,t)=>{if(t.stopPropagation(),e.autoMs){ie(e,0,"");return}if(s.autoPopupTabId===e.tabId){s.autoPopupTabId=null;return}const o=t.currentTarget.getBoundingClientRect();L.top=o.top,L.left=o.right+6,s.autoPopupTabId=e.tabId},ne=()=>{s.autoPopupTabId=null},$e=(e,t,o)=>{ie(e,t,o),s.autoPopupTabId=null},ae=(e,t)=>{t==null||t.stopPropagation(),G(e);const o=u.findIndex(n=>n.tabId===e);if(o!==-1){if(u.splice(o,1),s.activeTabId===e){const n=u[o]||u[o-1];s.activeTabId=n?n.tabId:null}s.autoPopupTabId===e&&(s.autoPopupTabId=null)}},re=()=>{u.forEach(e=>G(e.tabId)),u.splice(0),s.activeTabId=null,s.autoPopupTabId=null},p=e=>e!=null?String(e):"",He=({type:e,tabLabel:t,method:o,url:n,status:i,resJson:r})=>{const d=++ze,x=c({id:d,seq:d,type:e,tabLabel:t,method:o,url:n,status:i,resJson:r,jsonOpen:!1,progress:100});g.push(x);const M=Date.now(),z=setInterval(()=>{const S=Date.now()-M;if(x.progress=Math.max(0,Math.round((1-S/V)*100)),S>=V){clearInterval(z);const R=g.findIndex(a=>a.id===d);R!==-1&&g.splice(R,1)}},200);x._tick=z},le=e=>{const t=g.findIndex(o=>o.id===e);t!==-1&&(clearInterval(g[t]._tick),g.splice(t,1))},Ue=e=>{let t=e.reqUrl.trim();t.startsWith("http")||(t=s.hostUrl.replace(/\/$/,"")+(t.startsWith("/")?t:"/"+t));const o=e.reqParams.filter(n=>p(n.k).trim());if(o.length){const n=o.map(i=>`${encodeURIComponent(p(i.k))}=${encodeURIComponent(p(i.v))}`).join("&");t+=(t.includes("?")?"&":"?")+n}return t},T=async e=>{var M,z,S,R;const t=e||y.value;if(!t||!((M=t.reqUrl)!=null&&M.trim()))return;t.sending=!0,t.resJson="",t.resStatus=null,t.resTime=null,t.resData=null;const o=Ue(t),n=t.reqMethod.toLowerCase(),i=Date.now(),r={};_.filter(a=>p(a.k).trim()).forEach(a=>{r[p(a.k)]=p(a.v)}),t.reqHeaders.filter(a=>p(a.k).trim()).forEach(a=>{r[p(a.k)]=p(a.v)}),s.token.trim()&&(r.Authorization=`Bearer ${s.token.trim()}`);let d=null,x=null;try{const a={method:n,url:o,headers:r};if(["post","put","patch"].includes(n)&&((z=t.reqBody)!=null&&z.trim()))try{a.data=JSON.parse(t.reqBody)}catch{a.data=t.reqBody}const h=await axios(a);x=Date.now()-i,d=h.status,t.resStatus=d,t.resTime=x,t.resData=h.data,t.resJson=JSON.stringify(h.data,null,2)}catch(a){console.error("[catch-info]",a),x=Date.now()-i,d=((S=a.response)==null?void 0:S.status)||0,t.resStatus=d,t.resTime=x;const h=((R=a.response)==null?void 0:R.data)||{error:a.message};t.resData=h,t.resJson=JSON.stringify(h,null,2)}finally{t.sending=!1;const h=new Date().toTimeString().slice(0,8),Ke=(t.reqParams||[]).filter(b=>p(b.k).trim()).map(b=>({k:p(b.k),v:p(b.v)})),Ve=(t.reqHeaders||[]).filter(b=>p(b.k).trim()).map(b=>({k:p(b.k),v:p(b.v)}));m.unshift({id:Date.now(),method:t.reqMethod,url:o,status:d,time:x,ts:h,tabLabel:t.tabLabel,resJson:t.resJson,reqInfo:{method:t.reqMethod,url:t.reqUrl,params:Ke,headers:Ve,body:t.reqBody,token:s.token,host:s.hostUrl,defHeaders:_.filter(b=>p(b.k).trim()).map(b=>({k:p(b.k),v:p(b.v)}))}}),m.length>50&&m.splice(50),d!==null&&He({type:d>=200&&d<300?"info":"error",tabLabel:t.tabLabel,method:t.reqMethod,url:o,status:d,resJson:t.resJson})}},de=(e,t)=>{s.histSelIdx=t,W.value=t,s.histModal=e,D.value=e,s.histModalTab="req",Se.value="req",l.method=e.reqInfo.method||"",l.host=e.reqInfo.host||"",l.url=e.reqInfo.url||"",l.token=e.reqInfo.token||"",l.body=e.reqInfo.body||"",l.params=(e.reqInfo.params||[]).map(o=>({k:o.k,v:o.v})),l.headers=(e.reqInfo.headers||[]).map(o=>({k:o.k,v:o.v}))},pe=()=>{s.histModal=null,D.value=null},ce=async()=>{if(!y.value)return;const e=y.value;e.reqMethod=l.method,e.reqUrl=l.url,e.reqBody=l.body||"",e.reqParams.splice(0,e.reqParams.length,...l.params.map(i=>({...i})),{k:"",v:""}),e.reqHeaders.splice(0,e.reqHeaders.length,...l.headers.map(i=>({...i})),{k:"",v:""}),l.token&&(s.token=l.token,O.value=l.token),l.host&&(s.hostUrl=l.host,E.value=l.host),s.histResJson="",C.value="",s.histResStatus=null,j.value=null,s.histResTime=null,J.value=null,s.histResTs="",F.value="",s.histResProgress=0,q.value=0,s.histResSending=!0,X.value=!0;const t=Date.now(),o=setInterval(()=>{const i=Date.now()-t,r=Math.min(85,Math.round(i/5e3*85));s.histResProgress=r,q.value=r},80);await T(e),clearInterval(o),s.histResProgress=100,q.value=100,s.histResSending=!1,X.value=!1,s.histResJson=e.resJson,C.value=e.resJson,s.histResStatus=e.resStatus,j.value=e.resStatus,s.histResTime=e.resTime,J.value=e.resTime;const n=new Date().toTimeString().slice(0,8);s.histResTs=n,F.value=n},De=v(()=>{var o;const e=(o=y.value)==null?void 0:o.resData;if(!e)return[];const t=Array.isArray(e)?e:Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray(e==null?void 0:e.list)?e.list:null;return t!=null&&t.length?Object.keys(t[0]):[]}),Ce=v(()=>{var t;const e=(t=y.value)==null?void 0:t.resData;return e?Array.isArray(e)?e:Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray(e==null?void 0:e.list)?e.list:[]:[]}),je=v(()=>De.value.map(e=>({key:e,label:e,mono:!1}))),fe={};fe.historyGrid=[{key:"_seq",label:"#",width:"32px",align:"center"},{key:"method",label:"\uBA54\uC11C\uB4DC",width:"68px",align:"center",cellInnerStyle:e=>"font-size:9px;padding:1px 5px;border-radius:2px;font-weight:700;"+be(e)},{key:"tabLabel",label:"\uD0ED\uBA85",width:"110px",cellStyle:"color:#777;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:0;font-size:10px;",cellTitle:!0},{key:"url",label:"URL",mono:!0,cellStyle:"color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:0;"},{key:"status",label:"\uC0C1\uD0DC",width:"50px",align:"center",cellStyle:e=>ue(e),fmt:e=>e||"-"},{key:"time",label:"\uC751\uB2F5\uC2DC\uAC04",width:"64px",align:"center",fmt:e=>e+"ms"},{key:"ts",label:"\uC694\uCCAD\uC2DC\uAC04",width:"68px",align:"center"}];const Je=e=>de(e,m.indexOf(e)),Fe=e=>m.indexOf(e)===s.histSelIdx?"background:#e8f0fe;":"",Be=(e,t)=>{t.stopPropagation();let o=u.find(n=>n.nodeId===e.id);o||(o=oe(e),u.push(o)),s.activeTabId=o.tabId,T(o)},Ge=e=>e.push({k:"",v:""}),Ne=(e,t)=>{e.length>1&&e.splice(t,1)},be=e=>({GET:"background:#dcfce7;color:#166534;",POST:"background:#dbeafe;color:#1e40af;",PUT:"background:#fef3c7;color:#92400e;",PATCH:"background:#f3e8ff;color:#6b21a8;",DELETE:"background:#fee2e2;color:#991b1b;"})[e]||"background:#f0f0f0;color:#666;",ue=e=>e?e<300?"color:#166534;font-weight:700;":e<400?"color:#92400e;font-weight:700;":"color:#991b1b;font-weight:700;":"";return he(async()=>{s.treeLoaded=!0,I.push(Me()),I.push(Ee())}),{columns:fe,uiState:s,codes:ge,cfFlatTree:Oe,treeSearch:K,toggleNode:Z,selectApiNode:se,appFilter:N,APP_META:me,openTabs:u,activeTabId:ve,cfActiveTab:y,closeTab:ae,closeAllTabs:re,hostUrl:E,token:O,defHeaders:_,lsItems:w,refreshLs:te,settingsOpen:ye,toasts:g,closeToast:le,doSend:T,history:m,histSelIdx:W,histModal:D,editReq:l,histResJson:C,histResStatus:j,histResTime:J,histResTs:F,histResProgress:q,closeHistModal:pe,resendHist:ce,cfResGridRows:Ce,cfResColDefs:je,onHistClick:Je,fnHistRowStyle:Fe,addRow:Ge,removeRow:Ne,fnMethodStyle:be,fnStatusStyle:ue,quickRun:Be,autoPopupTabId:we,autoPopupPos:L,POPUP_ROWS:Te,openAutoPopup:Le,closeAutoPopup:ne,selectAuto:$e,countdown:A}},template:`
<fo-page bare>
<div style="display:flex;height:calc(100vh - 56px);overflow:hidden;font-size:12px;background:#fff;">
  <!-- ===== \u25A0. \u2501\u2501\u2501 1. Tree Panel (\uC88C\uCE21) \u2501\u2501\u2501 ============================== -->
  <div style="width:220px;flex-shrink:0;border-right:1px solid #e0e0e0;display:flex;flex-direction:column;background:#f7f8fa;overflow:hidden;">
    <!-- ===== \u25A0.\u25A0. Header ================================================ -->
    <div style="padding:7px 10px 6px;border-bottom:1px solid #e0e0e0;background:#f0f2f5;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
        <span style="font-size:11px;font-weight:800;color:#333;">
          API Endpoints
        </span>
        <button @click="uiState.settingsOpen=!settingsOpen" title="\uACF5\uD1B5 \uC124\uC815"
          style="border:none;background:none;cursor:pointer;font-size:15px;padding:0;line-height:1;"
          :style="uiState.settingsOpen?'color:#1a73e8;':'color:#999;'">
          \u2699
        </button>
      </div>
      <div style="display:flex;gap:3px;margin-bottom:6px;flex-wrap:wrap;">
        <label v-for="(meta,key) in APP_META" :key="key"
          style="font-size:10px;font-weight:700;cursor:pointer;padding:2px 7px;border-radius:10px;border:1px solid #ddd;background:#fff;transition:all .12s;user-select:none;"
          :style="appFilter[key]?'background:'+meta.color+';color:#fff;border-color:'+meta.color+';':''">
          <input type="checkbox" v-model="appFilter[key]" style="display:none;" />
          {{ meta.label }}
        </label>
      </div>
      <input v-model="treeSearch" placeholder="\u{1F50D} \uC774\uB984 / URL \uAC80\uC0C9"
        style="width:100%;box-sizing:border-box;font-size:11px;padding:4px 7px;border:1px solid #ddd;border-radius:4px;outline:none;background:#fff;" />
    </div>
    <!-- ===== \u25A1.\u25A1. Header ================================================ -->
    <!-- ===== \u25A0.\u25A0. Tree ================================================== -->
    <div style="flex:1;overflow-y:auto;padding:4px 0;">
      <div v-if="!uiState.treeLoaded" style="text-align:center;padding:20px;color:#ccc;font-size:11px;">
        \uB85C\uB529 \uC911\u2026
      </div>
      <div v-for="item in cfFlatTree" :key="item.n.id"
        @click="item.n.type==='req' ? selectApiNode(item.n) : toggleNode(item.n)"
        style="display:flex;align-items:center;gap:3px;padding:3px 6px;cursor:pointer;white-space:nowrap;overflow:hidden;transition:background .1s;user-select:none;"
        :style="'padding-left:'+(6+item.depth*11)+'px;'+(openTabs.some(t=>t.nodeId===item.n.id)?'color:#1a73e8;':'')"
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
          <span style="font-size:9px;padding:1px 3px;border-radius:2px;font-weight:700;flex-shrink:0;min-width:38px;text-align:center;" :style="fnMethodStyle(item.n.method)">
            {{ item.n.method }}
          </span>
          <span style="font-size:11px;overflow:hidden;text-overflow:ellipsis;flex:1;" :title="item.n.url">
            {{ item.n.label }}
          </span>
          <button @click.stop="quickRun(item.n, $event)" title="\uBC14\uB85C \uC2E4\uD589"
            style="flex-shrink:0;border:none;background:none;cursor:pointer;font-size:10px;color:#bbb;padding:1px 3px;border-radius:3px;line-height:1;opacity:0;transition:opacity .1s;"
            class="tree-run-btn">
            \u25B6
          </button>
        </template>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. Tree ================================================== -->
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
      <button v-if="openTabs.length" @click="closeAllTabs" title="\uC804\uCCB4 \uB2EB\uAE30"
        style="border:none;background:none;cursor:pointer;font-size:10px;color:#aaa;padding:0;">
        \u2715 \uC804\uCCB4
      </button>
    </div>
    <!-- ===== \u25A0.\u25A0. \uD0ED \uC5C6\uC744 \uB54C ================================================ -->
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
    <!-- ===== \u25A1.\u25A1. \uD0ED \uC5C6\uC744 \uB54C ================================================ -->
    <!-- ===== \u25A0.\u25A0. \uD0ED \uBAA9\uB85D ================================================== -->
    <div style="flex:1;overflow-y:auto;">
      <div v-for="tab in openTabs" :key="tab.tabId"
        @click="activeTabId=tab.tabId"
        class="sj-tab-item"
        style="position:relative;padding:6px 6px 6px 6px;cursor:pointer;border-bottom:1px solid #e8e9ec;transition:background .1s;"
        :style="activeTabId===tab.tabId
        ? 'background:#fff;border-left:3px solid #e8587a;'
        : 'background:transparent;border-left:3px solid transparent;'"
        @mouseenter="e=>{ e.currentTarget.querySelectorAll('.tab-btn').forEach(b=>b.style.opacity='1'); if(activeTabId!==tab.tabId) e.currentTarget.style.background='#eaebee'; }"
        @mouseleave="e=>{ e.currentTarget.querySelectorAll('.tab-btn').forEach(b=>b.style.opacity='0'); if(activeTabId!==tab.tabId) e.currentTarget.style.background=''; }">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC0C1\uB2E8: \uBA54\uC11C\uB4DC + \uC544\uC774\uCF58 \uBC84\uD2BC\uB4E4 ================================= -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px;">
          <span style="font-size:8px;padding:1px 4px;border-radius:2px;font-weight:700;flex-shrink:0;" :style="fnMethodStyle(tab.method)">
            {{ tab.method }}
          </span>
          <div style="display:flex;align-items:center;gap:1px;">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC790\uB3D9\uC2E4\uD589 \uD1A0\uAE00 \uC544\uC774\uCF58 =================================== -->
            <button @click.stop="openAutoPopup(tab, $event)"
              style="border:none;background:none;cursor:pointer;font-size:12px;padding:1px 2px;border-radius:3px;line-height:1;transition:all .15s;"
              :style="tab.autoMs ? 'opacity:1;color:#22a84a;text-shadow:0 0 4px #86efac;' : 'opacity:0.55;color:#777;'"
              :title="tab.autoMs ? '\uC790\uB3D9\uC2E4\uD589 \uC911: '+tab.autoLabel : '\uC790\uB3D9\uC2E4\uD589 \uC124\uC815'">
              \u23F1
            </button>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB2EB\uAE30 ============================================ -->
            <button class="tab-btn" @click.stop="closeTab(tab.tabId)"
              style="border:none;background:none;cursor:pointer;font-size:11px;color:#aaa;padding:1px 3px;border-radius:3px;opacity:0;transition:opacity .15s;line-height:1;"
              title="\uD0ED \uB2EB\uAE30">
              \u2715
            </button>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD0ED \uB808\uC774\uBE14 ============================================= -->
        <div style="font-size:10px;font-weight:600;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3;" :title="tab.tabLabel">
          {{ tab.shortLabel }}
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD558\uB2E8 \uC0C1\uD0DC ============================================= -->
        <div style="display:flex;align-items:center;gap:4px;margin-top:2px;min-height:13px;">
          <span v-if="tab.sending" style="font-size:9px;color:#1a73e8;">
            \uC804\uC1A1 \uC911\u2026
          </span>
          <span v-else-if="tab.resStatus" style="font-size:9px;" :style="fnStatusStyle(tab.resStatus)">
            {{ tab.resStatus }} \xB7 {{ tab.resTime }}ms
          </span>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC790\uB3D9\uC2E4\uD589 \uB77C\uBCA8 + \uCE74\uC6B4\uD2B8\uB2E4\uC6B4 ================================= -->
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
  <!-- ===== \u25A1.\u25A1. \uD0ED \uBAA9\uB85D ================================================== -->
  <!-- ===== \u25A1. \u2501\u2501\u2501 2. \uC5F4\uB9B0\uD0ED \uBC14 (\uC138\uB85C \uC88C\uCE21\uBA74) \u2501\u2501\u2501 =============================== -->
  <!-- ===== \u25A0. \u2501\u2501\u2501 \uC790\uB3D9\uC2E4\uD589 \uC8FC\uAE30 \uC120\uD0DD \uD31D\uC5C5 \u2501\u2501\u2501 =================================== -->
  <template v-if="autoPopupTabId">
    <!-- ===== \u25A0.\u25A0. backdrop ============================================== -->
    <div @click="closeAutoPopup" style="position:fixed;inset:0;z-index:8000;">
    </div>
    <!-- ===== \u25A0.\u25A0. popup ================================================= -->
    <div style="position:fixed;z-index:8001;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 6px 24px rgba(0,0,0,.18);min-width:230px;overflow:hidden;"
      :style="'top:'+autoPopupPos.top+'px;left:'+autoPopupPos.left+'px;'">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD5E4\uB354: \uC790\uB3D9\uC2E4\uD589 \uC5C6\uC74C ========================================= -->
      <div @click="selectAuto(openTabs.find(t=>t.tabId===autoPopupTabId), 0, '')"
        style="padding:8px 14px;font-size:11px;font-weight:700;color:#555;border-bottom:1px solid #eee;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:background .1s;"
        @mouseenter="e=>e.currentTarget.style.background='#f5f5f5'"
        @mouseleave="e=>e.currentTarget.style.background=''">
        <span>
          \u{1F6AB} \uC790\uB3D9\uC2E4\uD589 \uC5C6\uC74C
        </span>
        <span v-if="openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs===0||!openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs" style="font-size:10px;color:#34a853;">
          \u2714 \uD604\uC7AC
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uAD6C\uBD84\uC120 + \uD45C ============================================= -->
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
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCD08 =========================================== -->
              <td style="padding:1px 4px;text-align:center;">
                <button v-if="row.s!=null" @click="selectAuto(openTabs.find(t=>t.tabId===autoPopupTabId), row.s*1000, row.s+'\uCD08')"
                  style="width:100%;padding:3px 4px;font-size:11px;border:1px solid #e0e0e0;border-radius:4px;cursor:pointer;transition:all .1s;background:#f9f9f9;"
                  :style="openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs===row.s*1000?'background:#e8f4fd;border-color:#1a73e8;color:#1a73e8;font-weight:700;':''"
                  @mouseenter="e=>{ if(openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs!==row.s*1000) e.currentTarget.style.background='#eef2ff'; }"
                  @mouseleave="e=>{ if(openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs!==row.s*1000) e.currentTarget.style.background='#f9f9f9'; }">
                  {{ row.s }}\uCD08
                </button>
              </td>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBD84 =========================================== -->
              <td style="padding:1px 4px;text-align:center;">
                <button v-if="row.m!=null" @click="selectAuto(openTabs.find(t=>t.tabId===autoPopupTabId), row.m*60000, row.m+'\uBD84')"
                  style="width:100%;padding:3px 4px;font-size:11px;border:1px solid #e0e0e0;border-radius:4px;cursor:pointer;transition:all .1s;background:#f9f9f9;"
                  :style="openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs===row.m*60000?'background:#e8f4fd;border-color:#1a73e8;color:#1a73e8;font-weight:700;':''"
                  @mouseenter="e=>{ if(openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs!==row.m*60000) e.currentTarget.style.background='#eef2ff'; }"
                  @mouseleave="e=>{ if(openTabs.find(t=>t.tabId===autoPopupTabId)?.autoMs!==row.m*60000) e.currentTarget.style.background='#f9f9f9'; }">
                  {{ row.m }}\uBD84
                </button>
              </td>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC2DC =========================================== -->
              <td style="padding:1px 4px;text-align:center;">
                <button v-if="row.h!=null" @click="selectAuto(openTabs.find(t=>t.tabId===autoPopupTabId), row.h*3600000, row.h+'\uC2DC\uAC04')"
                  style="width:100%;padding:3px 4px;font-size:11px;border:1px solid #e0e0e0;border-radius:4px;cursor:pointer;transition:all .1s;background:#f9f9f9;"
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
  <!-- ===== \u25A1.\u25A1. popup ================================================= -->
  <!-- ===== \u25A1. \u2501\u2501\u2501 \uC790\uB3D9\uC2E4\uD589 \uC8FC\uAE30 \uC120\uD0DD \uD31D\uC5C5 \u2501\u2501\u2501 =================================== -->
  <!-- ===== \u25A0. \u2501\u2501\u2501 3. Main Panel (\uC6B0\uCE21) \u2501\u2501\u2501 ============================== -->
  <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0;">
    <!-- ===== \u25A0.\u25A0. \u2699 Settings Panel ====================================== -->
    <div v-show="settingsOpen" style="border-bottom:2px solid #1a73e8;background:#fff;flex-shrink:0;padding:10px 14px 12px;">
      <div style="font-size:11px;font-weight:800;color:#1a73e8;margin-bottom:8px;">
        \u2699 \uACF5\uD1B5 \uC124\uC815
        <span style="font-size:10px;font-weight:400;color:#aaa;margin-left:6px;">
          \uBCC0\uACBD\uC0AC\uD56D\uC740 localStorage\uC5D0 \uC790\uB3D9 \uC800\uC7A5
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. 1\uD589: HOST URL + BEARER TOKEN ========================= -->
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
          <div v-if="token" style="font-size:10px;color:#1a73e8;margin-top:3px;">
            \u2714 Authorization \uD5E4\uB354\uC5D0 \uC790\uB3D9 \uCD94\uAC00
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. 2\uD589: \uAE30\uBCF8 Headers + LocalStorage ======================= -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;">
        <div>
          <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;text-transform:uppercase;">
            \uAE30\uBCF8 Headers
          </div>
          <div v-for="(h,i) in defHeaders" :key="i" style="display:flex;gap:3px;margin-bottom:3px;">
            <input v-model="h.k" placeholder="Key"   style="flex:1;min-width:0;font-size:11px;padding:3px 5px;border:1px solid #ddd;border-radius:3px;outline:none;" />
            <input v-model="h.v" placeholder="Value" style="flex:1;min-width:0;font-size:11px;padding:3px 5px;border:1px solid #ddd;border-radius:3px;outline:none;" />
            <button @click="removeRow(defHeaders,i)" style="font-size:10px;padding:2px 5px;border:1px solid #fca5a5;border-radius:3px;background:#fee2e2;color:#991b1b;cursor:pointer;flex-shrink:0;">
              \u2715
            </button>
          </div>
          <button @click="addRow(defHeaders)" style="font-size:10px;padding:2px 8px;border:1px dashed #ccc;border-radius:3px;background:#f0f0f0;color:#666;cursor:pointer;">
            + \uCD94\uAC00
          </button>
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:5px;margin-bottom:3px;">
            <span style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;">
              LocalStorage
            </span>
            <button @click="refreshLs" style="font-size:10px;padding:1px 5px;border:1px solid #ddd;border-radius:3px;background:#f0f0f0;cursor:pointer;color:#666;">
              \u21BB
            </button>
          </div>
          <div style="max-height:80px;overflow-y:auto;border:1px solid #eee;border-radius:4px;background:#fff;">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 =========================================== -->
            <table style="width:100%;border-collapse:collapse;font-size:10px;">
              <tr v-for="item in lsItems" :key="item.k" style="border-bottom:1px solid #f5f5f5;">
                <td style="padding:2px 5px;color:#555;font-weight:600;width:40%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="item.k">
                  {{ item.k }}
                </td>
                <td style="padding:2px 5px;color:#888;font-family:monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="item.v">
                  {{ item.v }}
                </td>
              </tr>
            </table>
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
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD0ED \uD480 \uB124\uC784 \uD45C\uC2DC ========================================= -->
        <div style="font-size:10px;color:#aaa;margin-bottom:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="cfActiveTab.tabLabel">
          \u{1F4CC} {{ cfActiveTab.tabLabel }}
          <span v-if="cfActiveTab.desc" style="margin-left:6px;color:#ccc;">
            \u2014 {{ cfActiveTab.desc }}
          </span>
        </div>
        <div style="display:flex;gap:6px;align-items:center;">
          <select v-model="cfActiveTab.reqMethod"
            style="font-size:12px;padding:5px 6px;border:1px solid #ddd;border-radius:5px;font-weight:700;width:90px;cursor:pointer;"
            :style="fnMethodStyle(cfActiveTab.reqMethod)">
            <option v-for="m in codes.http_method_opts" :key="m">
              {{ m }}
            </option>
          </select>
          <input v-model="cfActiveTab.reqUrl" placeholder="URL" @keyup.enter="doSend()"
            style="flex:1;font-size:12px;padding:5px 10px;border:1px solid #ddd;border-radius:5px;outline:none;font-family:monospace;min-width:0;" />
          <button @click="doSend()" :disabled="cfActiveTab.sending"
            style="font-size:12px;padding:5px 20px;border:none;border-radius:5px;background:#e8587a;color:#fff;cursor:pointer;font-weight:700;white-space:nowrap;flex-shrink:0;"
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
              @click="cfActiveTab.reqTab=t.id"
              style="padding:5px 13px;font-size:11px;border:none;cursor:pointer;font-weight:600;border-bottom:2px solid transparent;transition:all .12s;"
              :style="cfActiveTab.reqTab===t.id?'background:#fff;border-bottom-color:#e8587a;color:#e8587a;':'background:transparent;color:#999;'">
              {{ t.nm }}
            </button>
          </div>
          <div style="flex:1;overflow-y:auto;padding:8px;">
            <template v-if="cfActiveTab.reqTab==='params'">
              <div v-for="(p,i) in cfActiveTab.reqParams" :key="i" style="display:flex;gap:4px;margin-bottom:4px;align-items:center;">
                <input v-model="p.k" placeholder="Key"   style="flex:1;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #ddd;border-radius:3px;outline:none;" />
                <input v-model="p.v" placeholder="Value" style="flex:1;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #ddd;border-radius:3px;outline:none;" />
                <button @click="removeRow(cfActiveTab.reqParams,i)" style="font-size:10px;padding:3px 6px;border:1px solid #fca5a5;border-radius:3px;background:#fee2e2;color:#991b1b;cursor:pointer;flex-shrink:0;">
                  \u2715
                </button>
              </div>
              <button @click="addRow(cfActiveTab.reqParams)" style="font-size:10px;padding:3px 10px;border:1px dashed #ccc;border-radius:3px;background:#f9f9f9;color:#666;cursor:pointer;">
                + \uCD94\uAC00
              </button>
            </template>
            <template v-if="cfActiveTab.reqTab==='headers'">
              <div v-for="(h,i) in cfActiveTab.reqHeaders" :key="i" style="display:flex;gap:4px;margin-bottom:4px;align-items:center;">
                <input v-model="h.k" placeholder="Key"   style="flex:1;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #ddd;border-radius:3px;outline:none;" />
                <input v-model="h.v" placeholder="Value" style="flex:1;min-width:0;font-size:11px;padding:4px 6px;border:1px solid #ddd;border-radius:3px;outline:none;" />
                <button @click="removeRow(cfActiveTab.reqHeaders,i)" style="font-size:10px;padding:3px 6px;border:1px solid #fca5a5;border-radius:3px;background:#fee2e2;color:#991b1b;cursor:pointer;flex-shrink:0;">
                  \u2715
                </button>
              </div>
              <button @click="addRow(cfActiveTab.reqHeaders)" style="font-size:10px;padding:3px 10px;border:1px dashed #ccc;border-radius:3px;background:#f9f9f9;color:#666;cursor:pointer;">
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
              @click="cfActiveTab.resTab=t.id"
              style="padding:5px 13px;font-size:11px;border:none;cursor:pointer;font-weight:600;border-bottom:2px solid transparent;transition:all .12s;"
              :style="cfActiveTab.resTab===t.id?'background:#fff;border-bottom-color:#1a73e8;color:#1a73e8;':'background:transparent;color:#999;'">
                {{ t.nm }}
                <span v-if="t.id==='grid' ? cfResGridRows.length : false" style="font-size:9px;background:#e8f0fe;color:#1a73e8;padding:1px 5px;border-radius:8px;margin-left:3px;">
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
                <div v-else>
                  <div style="font-size:10px;color:#aaa;margin-bottom:5px;">
                    \uCD1D {{ cfResGridRows.length }}\uAC74
                  </div>
                  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ===================================== -->
                  <fo-grid bare :columns="cfResColDefs" :rows="cfResGridRows" min-width="100%" />
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
          <button @click="history.splice(0);histSelIdx=null;" style="font-size:10px;padding:2px 8px;border:1px solid #ddd;border-radius:3px;background:#f0f0f0;cursor:pointer;color:#888;">
            \uC804\uCCB4 \uC0AD\uC81C
          </button>
        </div>
        <div style="max-height:228px;overflow-y:auto;">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ============================================= -->
          <fo-grid bare :columns="columns.historyGrid" :rows="history" row-key="id"
          :show-row-no="false" empty-text="\uC804\uC1A1 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
          :row-click="onHistClick" :row-style="fnHistRowStyle">
            <template #cell-_seq="{ row, idx }">
              <td style="text-align:center;padding:2px 6px;">
                <span style="position:relative;display:inline-flex;align-items:center;justify-content:center;font-size:10px;color:#999;">
                  <span v-if="row.status ? row.status<300 : false" style="position:absolute;top:-2px;right:-4px;width:6px;height:6px;border-radius:50%;background:#22c55e;">
                </span>
                <span v-else-if="row.status ? row.status>=300 : false" style="position:absolute;top:-2px;right:-4px;width:6px;height:6px;border-radius:50%;background:#ef4444;">
              </span>
              {{ history.length - idx }}
            </span>
          </td>
        </template>
      </fo-grid>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. History =============================================== -->
  <!-- ===== \u25A0.\u25A0. History \uC0C1\uC138 \uBAA8\uB2EC ========================================= -->
  <template v-if="histModal">
    <div @click="closeHistModal" style="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.45);">
    </div>
    <div style="position:fixed;z-index:9001;top:50%;left:50%;transform:translate(-50%,-50%);width:900px;max-width:96vw;max-height:86vh;background:#fff;border-radius:10px;box-shadow:0 12px 40px rgba(0,0,0,.28);display:flex;flex-direction:column;overflow:hidden;">
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC81C\uBAA9 \uD5E4\uB354 ============================================= -->
      <div style="padding:10px 16px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:8px;flex-shrink:0;background:#f8f9fa;">
        <span style="font-size:12px;font-weight:800;color:#555;">
          \uC804\uC1A1\uC774\uB825\uC0C1\uC138
        </span>
        <span style="position:relative;font-size:11px;font-weight:700;color:#888;padding:0 6px;">
          <span v-if="histModal.status ? histModal.status<300 : false" style="position:absolute;top:-2px;right:0;width:6px;height:6px;border-radius:50%;background:#22c55e;">
        </span>
        <span v-else-if="histModal.status ? histModal.status>=300 : false" style="position:absolute;top:-2px;right:0;width:6px;height:6px;border-radius:50%;background:#ef4444;">
      </span>
      #{{ history.length - histSelIdx }}
    </span>
    <span style="font-size:10px;padding:2px 7px;border-radius:3px;font-weight:700;" :style="fnMethodStyle(histModal.method)">
      {{ histModal.method }}
    </span>
    <span style="font-size:11px;font-family:monospace;color:#555;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="histModal.url">
      {{ histModal.url }}
    </span>
    <button @click="closeHistModal" style="border:none;background:none;cursor:pointer;font-size:16px;color:#aaa;padding:0;line-height:1;flex-shrink:0;">
      \u2715
    </button>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD0ED\uBA85 ================================================ -->
  <div v-if="histModal.tabLabel" style="padding:3px 16px;background:#fff;border-bottom:1px solid #f0f0f0;font-size:10px;color:#aaa;flex-shrink:0;">
    \uD0ED:
    <span style="color:#666;">
      {{ histModal.tabLabel }}
    </span>
  </div>
  <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC88C/\uC6B0 2\uCEEC\uB7FC \uBCF8\uBB38 ======================================== -->
  <div style="flex:1;display:flex;overflow:hidden;min-height:0;">
    <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC88C: \uC694\uCCAD (\uD3B8\uC9D1 \uAC00\uB2A5) =================================== -->
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
        <button @click="resendHist" :disabled="uiState.histResSending"
                style="font-size:11px;font-weight:700;padding:4px 14px;border:none;border-radius:5px;background:#e8587a;color:#fff;cursor:pointer;white-space:nowrap;"
                :style="uiState.histResSending?'opacity:.55;cursor:not-allowed;':''">
          {{ uiState.histResSending ? '\uC804\uC1A1 \uC911\u2026' : '\u25B6 \uC7AC\uC804\uC1A1' }}
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBA54\uC11C\uB4DC =========================================== -->
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;">
          \uBA54\uC11C\uB4DC
        </div>
        <select v-model="editReq.method"
                style="width:100%;box-sizing:border-box;font-size:11px;padding:5px 8px;border:1px solid #c8d6f0;border-radius:4px;background:#fff;font-family:monospace;font-weight:700;color:#333;outline:none;cursor:pointer;">
          <option v-for="m in codes.http_method_opts" :key="m">
            {{ m }}
          </option>
        </select>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. HOST ========================================== -->
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;">
          HOST
        </div>
        <input v-model="editReq.host"
                style="width:100%;box-sizing:border-box;font-size:11px;padding:5px 8px;border:1px solid #c8d6f0;border-radius:4px;background:#fff;font-family:monospace;color:#555;outline:none;" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. URL =========================================== -->
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;">
          URL
        </div>
        <input v-model="editReq.url"
                style="width:100%;box-sizing:border-box;font-size:11px;padding:5px 8px;border:1px solid #c8d6f0;border-radius:4px;background:#fff;font-family:monospace;color:#333;outline:none;" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. TOKEN ========================================= -->
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;">
          \u{1F511} Bearer Token
        </div>
        <input v-model="editReq.token" placeholder="(\uC5C6\uC74C)"
                style="width:100%;box-sizing:border-box;font-size:11px;padding:5px 8px;border:1px solid #c8d6f0;border-radius:4px;background:#fff;font-family:monospace;color:#555;outline:none;" />
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. HEADERS ======================================= -->
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;display:flex;align-items:center;justify-content:space-between;">
          <span>
            Headers
            <span style="font-size:9px;font-weight:400;color:#aaa;">
              ({{ editReq.headers.length }}\uAC1C)
            </span>
          </span>
          <button @click="editReq.headers.push({k:'',v:''})"
                  style="font-size:10px;padding:1px 7px;border:1px dashed #aad;border-radius:3px;background:#f0f4ff;color:#555;cursor:pointer;">
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
            <button @click="editReq.headers.splice(i,1)" style="border:none;background:none;cursor:pointer;color:#ccc;font-size:12px;padding:0 2px;flex-shrink:0;line-height:1;">
              \u2715
            </button>
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. PARAMS ======================================== -->
      <div style="margin-bottom:7px;">
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;display:flex;align-items:center;justify-content:space-between;">
          <span>
            Parameters
            <span style="font-size:9px;font-weight:400;color:#aaa;">
              ({{ editReq.params.length }}\uAC1C)
            </span>
          </span>
          <button @click="editReq.params.push({k:'',v:''})"
                  style="font-size:10px;padding:1px 7px;border:1px dashed #aad;border-radius:3px;background:#f0f4ff;color:#555;cursor:pointer;">
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
            <button @click="editReq.params.splice(i,1)" style="border:none;background:none;cursor:pointer;color:#ccc;font-size:12px;padding:0 2px;flex-shrink:0;line-height:1;">
              \u2715
            </button>
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. BODY ========================================== -->
      <div>
        <div style="font-size:10px;font-weight:700;color:#888;margin-bottom:3px;">
          Body
        </div>
        <textarea v-model="editReq.body" placeholder="(\uC5C6\uC74C)"
                style="width:100%;box-sizing:border-box;font-size:11px;padding:5px 8px;border:1px solid #c8d6f0;border-radius:4px;background:#fff;font-family:monospace;color:#333;outline:none;resize:vertical;min-height:60px;line-height:1.5;"></textarea>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC6B0: \uC751\uB2F5 =========================================== -->
      <div style="flex:1;display:flex;flex-direction:column;min-width:0;background:#fff;overflow:hidden;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC751\uB2F5 \uD5E4\uB354 + progress bar (\uACE0\uC815) ===================== -->
        <div style="flex-shrink:0;padding:12px 14px 0;border-bottom:1px solid #f0f0f0;">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
            <span style="font-size:10px;font-weight:800;color:#e8587a;text-transform:uppercase;letter-spacing:.05em;">
              \uC751\uB2F5
            </span>
            <span style="flex:1;">
            </span>
            <template v-if="uiState.histResSending">
              <span style="font-size:10px;color:#1a73e8;font-weight:600;">
                \uC804\uC1A1 \uC911\u2026 {{ histResProgress }}%
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
              <span style="font-size:9px;color:#1a73e8;background:#e8f0fe;padding:1px 5px;border-radius:3px;font-weight:600;">
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
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. progress bar ================================ -->
          <div style="height:6px;background:#f0f0f0;border-radius:0;margin:0 -14px;overflow:hidden;">
            <div style="height:100%;transition:width .08s linear;"
                  :style="uiState.histResSending ? 'background:#e8587a;width:'+histResProgress+'%;' : (histResStatus ? 'background:#22c55e;width:100%;' : 'width:0;')"
                  >
            </div>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC751\uB2F5 \uBCF8\uBB38 \uC2A4\uD06C\uB864 \uC601\uC5ED ================================== -->
        <div style="flex:1;overflow-y:auto;padding:12px 14px;">
          <pre v-if="!uiState.histResSending ? histResJson : false" style="margin:0;font-size:11px;font-family:monospace;white-space:pre-wrap;word-break:break-all;color:#333;line-height:1.6;background:#fafafa;border:1px solid #eee;border-radius:6px;padding:10px;">
          {{ histResJson }}
        </pre>
        <pre v-else-if="!uiState.histResSending ? (!histResJson ? histModal.resJson : false) : false" style="margin:0;font-size:11px;font-family:monospace;white-space:pre-wrap;word-break:break-all;color:#888;line-height:1.6;background:#fafafa;border:1px solid #eee;border-radius:6px;padding:10px;">
        {{ histModal.resJson }}
      </pre>
      <div v-else-if="!uiState.histResSending" style="display:flex;align-items:center;justify-content:center;height:80px;color:#ccc;font-size:12px;">
        \uC751\uB2F5 \uBCF8\uBB38 \uC5C6\uC74C
      </div>
    </div>
  </div>
</div>
</div>
</template>
</div>
<!-- ===== /Main Panel ================================================ -->
<!-- ===== \u25A1.\u25A1. History \uC0C1\uC138 \uBAA8\uB2EC ========================================= -->
<!-- ===== \u25A1. \u2501\u2501\u2501 3. Main Panel (\uC6B0\uCE21) \u2501\u2501\u2501 ============================== -->
<!-- ===== \u25A0. \u2501\u2501\u2501 Toast \uC54C\uB9BC (\uC6B0\uCE21 \uD558\uB2E8) \u2501\u2501\u2501 ================================ -->
<div style="position:fixed;right:16px;bottom:16px;z-index:9500;display:flex;flex-direction:column;gap:8px;align-items:flex-end;pointer-events:none;">
  <div v-for="t in toasts" :key="t.id"
      style="pointer-events:all;width:380px;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.22);overflow:hidden;font-size:11px;"
      :style="t.type==='error'?'border:1px solid #fca5a5;':'border:1px solid #86efac;'">
    <!-- ===== \u25A0.\u25A0.\u25A0. \uD5E4\uB354\uBC14 ================================================= -->
    <div style="display:flex;align-items:center;gap:6px;padding:6px 10px;"
        :style="t.type==='error'?'background:#fee2e2;':'background:#dcfce7;'">
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBC88\uD638 \uBC30\uC9C0 ============================================= -->
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
      <button @click="closeToast(t.id)"
          style="border:none;background:none;cursor:pointer;font-size:13px;color:#888;padding:0;line-height:1;flex-shrink:0;">
        \u2715
      </button>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. progress bar ======================================== -->
    <div style="height:3px;background:#e5e7eb;">
      <div style="height:100%;transition:width .2s linear;"
          :style="(t.type==='error'?'background:#ef4444;':'background:#22c55e;')+'width:'+t.progress+'%;'">
      </div>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. URL \uD589 =============================================== -->
    <div style="display:flex;align-items:center;gap:5px;padding:5px 10px;background:#fff;border-bottom:1px solid #f0f0f0;">
      <span style="font-size:9px;padding:1px 5px;border-radius:2px;font-weight:700;flex-shrink:0;"
          :style="t.method==='GET'?'background:#dcfce7;color:#166534;':t.method==='POST'?'background:#dbeafe;color:#1e40af;':t.method==='PUT'?'background:#fef3c7;color:#92400e;':t.method==='DELETE'?'background:#fee2e2;color:#991b1b;':'background:#f3e8ff;color:#6b21a8;'">
        {{ t.method }}
      </span>
      <span style="font-family:monospace;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:10px;" :title="t.url">
        {{ t.url }}
      </span>
      <span style="font-weight:700;flex-shrink:0;font-size:12px;"
          :style="t.status<300?'color:#166534;':t.status<400?'color:#92400e;':'color:#991b1b;'">
        {{ t.status }}
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. JSON \uC811\uD78C/\uD3BC\uCE5C ========================================== -->
    <div style="background:#f9f9f9;">
      <div @click="t.jsonOpen=!t.jsonOpen"
          style="padding:4px 10px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;user-select:none;color:#888;font-size:10px;">
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
</fo-page>
`};
