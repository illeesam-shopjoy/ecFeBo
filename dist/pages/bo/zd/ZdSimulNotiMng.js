const MODE_META={kakao:{title:"\uBA54\uC2DC\uC9C0\uC804\uC1A1 (\uC54C\uB9BC\uD1A1)",icon:"\u{1F7E1}",channel:"kakao",notiType:"ALARM",api:"/co/cm/send/kakao",tplTypes:["KAKAO"],tplLabel:"\uC54C\uB9BC\uD1A1",desc:"\uCE74\uCE74\uC624 \uC54C\uB9BC\uD1A1 \uBC1C\uC1A1 \uC2DC\uBBAC\uB808\uC774\uC158 \u2014 \uC8FC\uBB38\uC720\uD615\uBCC4 \uC804\uC1A1 / \uBB38\uC758 / \uC778\uC99D\uC815\uBCF4 \uC804\uC1A1"},sms:{title:"\uBA54\uC2DC\uC9C0\uC804\uC1A1 (SMS)",icon:"\u{1F4AC}",channel:"sms",notiType:"ALARM",api:"/co/cm/send/sms",tplTypes:["SMS"],tplLabel:"SMS",desc:"SMS \uBC1C\uC1A1 \uC2DC\uBBAC\uB808\uC774\uC158 \u2014 \uC8FC\uBB38\uC720\uD615\uBCC4 \uC804\uC1A1 / \uBB38\uC758 / \uC778\uC99D\uC815\uBCF4 \uC804\uC1A1"},mail:{title:"\uBA54\uC2DC\uC9C0\uC804\uC1A1 (\uBA54\uC77C)",icon:"\u2709\uFE0F",channel:"mail",notiType:"ALARM",api:"/co/cm/send/mail",tplTypes:["MAIL","EMAIL"],tplLabel:"\uBA54\uC77C",desc:"\uBA54\uC77C \uBC1C\uC1A1 \uC2DC\uBBAC\uB808\uC774\uC158 \u2014 \uC8FC\uBB38\uC720\uD615\uBCC4 \uC804\uC1A1 / \uBB38\uC758 / \uC778\uC99D\uC815\uBCF4 \uC804\uC1A1"},chat:{title:"\uBA54\uC2DC\uC9C0\uC804\uC1A1 (\uCC44\uD305)",icon:"\u{1F5E8}\uFE0F",channel:"chat",notiType:"ALARM",api:"",tplTypes:[],tplLabel:"\uCC44\uD305",desc:"\uC0C1\uB2F4 \uCC44\uD305 \uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uBBAC\uB808\uC774\uC158"},notice:{title:"\uACF5\uC9C0\uC0AC\uD56D \uC0DD\uC131",icon:"\u{1F4E2}",channel:"notice",notiType:"NOTICE",api:"",tplTypes:[],desc:"\uACF5\uC9C0\uC0AC\uD56D\uC744 \uB4F1\uB85D\uD558\uACE0 \uB300\uC0C1\uC5D0\uAC8C \uACF5\uC9C0 \uC54C\uB9BC\uC744 \uBC1C\uC1A1"},error:{title:"\uC624\uB958\uC815\uBCF4 \uC0DD\uC131",icon:"\u{1F4A5}",channel:"",notiType:"ERROR",api:"",tplTypes:[],desc:"500 / 403 \uB4F1 \uC624\uB958 \uC54C\uB9BC\uC744 \uB0B4 \uC54C\uB9BC\uD568\uC5D0 \uC8FC\uC785\uD574 \uD45C\uC2DC\uB97C \uD655\uC778 (DB \uBBF8\uC800\uC7A5)"}},SCENARIOS=[{key:"ORDER_DONE",label:"\uC8FC\uBB38\uC644\uB8CC",title:"[\uC8FC\uBB38\uC644\uB8CC] \uC8FC\uBB38\uC774 \uC815\uC0C1 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4",body:`\uC8FC\uBB38\uBC88\uD638 {orderNo} \uC8FC\uBB38\uC774 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4.
\uACB0\uC81C\uAE08\uC561: {amount}\uC6D0
\uAC10\uC0AC\uD569\uB2C8\uB2E4.`},{key:"ORDER_PAY",label:"\uACB0\uC81C\uC644\uB8CC",title:"[\uACB0\uC81C\uC644\uB8CC] \uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4",body:`\uC8FC\uBB38\uBC88\uD638 {orderNo} \uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.
\uACB0\uC81C\uAE08\uC561: {amount}\uC6D0`},{key:"ORDER_DLIV",label:"\uBC30\uC1A1\uCD9C\uBC1C",title:"[\uBC30\uC1A1\uCD9C\uBC1C] \uC0C1\uD488\uC774 \uBC1C\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4",body:`\uC8FC\uBB38\uBC88\uD638 {orderNo} \uC0C1\uD488\uC774 \uBC1C\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4.
\uC1A1\uC7A5\uBC88\uD638: {invoiceNo}`},{key:"ORDER_CANCEL",label:"\uC8FC\uBB38\uCDE8\uC18C",title:"[\uC8FC\uBB38\uCDE8\uC18C] \uC8FC\uBB38\uC774 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4",body:`\uC8FC\uBB38\uBC88\uD638 {orderNo} \uC8FC\uBB38\uC774 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.
\uD658\uBD88\uAE08\uC561: {amount}\uC6D0`},{key:"INQUIRY",label:"\uBB38\uC758 \uB2F5\uBCC0",title:"[\uBB38\uC758] \uBB38\uC758\uD558\uC2E0 \uB0B4\uC6A9\uC5D0 \uB2F5\uBCC0\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4",body:`\uBB38\uC758\uD558\uC2E0 \uB0B4\uC6A9\uC5D0 \uB2F5\uBCC0\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.
\uB9C8\uC774\uD398\uC774\uC9C0 > \uBB38\uC758\uB0B4\uC5ED\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.`},{key:"AUTH_CODE",label:"\uC778\uC99D\uC815\uBCF4 \uC804\uC1A1",title:"[\uC778\uC99D] \uC778\uC99D\uBC88\uD638\uB97C \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4",body:`\uC778\uC99D\uBC88\uD638\uB294 [{authCode}] \uC785\uB2C8\uB2E4.
3\uBD84 \uC774\uB0B4\uC5D0 \uC785\uB825\uD574 \uC8FC\uC138\uC694.`},{key:"NOTICE",label:"\uACF5\uC9C0 \uC548\uB0B4",title:"[\uACF5\uC9C0] \uC11C\uBE44\uC2A4 \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4",body:`\uC548\uB155\uD558\uC138\uC694.
\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.`},{key:"CUSTOM",label:"\uC9C1\uC811 \uC785\uB825",title:"",body:""}],ERROR_PRESETS=[{key:500,label:"500 \uC11C\uBC84 \uC624\uB958",method:"GET",url:"/api/bo/ec/cm/dashboard/list",uiLabel:"\uB300\uC2DC\uBCF4\uB4DC > \uBAA9\uB85D\uC870\uD68C",message:`Internal Server Error
ERROR: column "issue_id" does not exist`},{key:403,label:"403 \uAD8C\uD55C \uC5C6\uC74C",method:"POST",url:"/api/bo/sy/user/save",uiLabel:"\uC0AC\uC6A9\uC790\uAD00\uB9AC > \uC800\uC7A5",message:"Forbidden \u2014 \uD574\uB2F9 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."},{key:404,label:"404 \uC5C6\uC74C",method:"GET",url:"/api/bo/ec/pd/prod/999999",uiLabel:"\uC0C1\uD488\uAD00\uB9AC > \uC0C1\uC138\uC870\uD68C",message:"Not Found \u2014 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uB370\uC774\uD130\uC785\uB2C8\uB2E4."},{key:401,label:"401 \uC778\uC99D \uB9CC\uB8CC",method:"GET",url:"/api/bo/sy/menu/tree",uiLabel:"\uBA54\uB274\uAD00\uB9AC > \uD2B8\uB9AC\uC870\uD68C",message:"Unauthorized \u2014 \uC138\uC158\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694."},{key:0,label:"0 \uB124\uD2B8\uC6CC\uD06C \uC624\uB958",method:"GET",url:"/api/co/cm/bo-app-store/getInitData",uiLabel:"\uC2DC\uC2A4\uD15C > \uCD08\uAE30\uD654\uB370\uC774\uD130\uC870\uD68C",message:"Network Error \u2014 timeout of 8000ms exceeded"}];window.ZdSimulNotiMng={name:"ZdSimulNotiMng",props:{navigate:{type:Function,required:!0},mode:{type:String,default:"mail"},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(d){const{reactive:b,computed:u,onMounted:A}=Vue,N=window.boNotiStore,r=b({sending:!1,pickModal:"",tplLoading:!1,tplId:null,recvTab:"user"}),M=b({}),a=b({scenario:"ORDER_DONE",title:"",content:"",orderNo:"20260815000123",amount:"39,000",invoiceNo:"1234567890",authCode:"482913"}),g=b({preset:500,repeat:1}),n=b([]),C=b([{id:"member",label:"\uD68C\uC6D0",icon:"\u{1F464}",get count(){return n.filter(e=>e.toType==="member").length}},{id:"user",label:"\uC0AC\uC6A9\uC790",icon:"\u{1F9D1}",get count(){return n.filter(e=>e.toType==="user").length}}]),k=b({searchValue:""}),f=b([]),h=b([]),R=(e,o={})=>{if(e==="pick-close"){r.pickModal="";return}else if(e==="recvTab-pick"){r.pickModal=r.recvTab;return}else if(e==="recipients-clear"){const l=n.filter(t=>t.toType!==r.recvTab);n.splice(0,n.length,...l);return}else{if(e==="templates-search")return T();if(e==="templates-reset")return k.searchValue="",T();if(e==="baseForm-send")return F();if(e==="errorForm-make")return D();if(e==="sendLogs-clear"){h.splice(0,h.length);return}else console.warn("[handleBtnAction] unknown cmd:",e)}},L=(e,o={})=>{if(e==="recvTab-select"){r.recvTab=o;return}else{if(e==="scenario-select")return w(o);if(e==="template-select")return O(o);if(e==="recipients-remove"){const l=n.findIndex(t=>t.toType===o.toType?t.toId===o.toId:!1);l>=0&&n.splice(l,1);return}else if(e==="errorPreset-select"){g.preset=o;return}else console.warn("[handleSelectAction] unknown cmd:",e)}},P=(e,o,l)=>{if(r.pickModal="",!l)return;const t=Array.isArray(l)?l:[l],i=e==="memberPick",p=i?"member":"user",c=[];t.forEach(s=>{const x=i?s.memberId||s.id:s.userId||s.id;x&&(c.some(K=>K.toId===String(x))||c.push({toType:p,toId:String(x),toNm:(i?s.memberNm||s.nm||s.name:s.userNm||s.nm||s.name)||String(x),toEmail:i?s.memberEmail||"":s.userEmail||"",toPhone:i?s.memberPhone||"":s.userPhone||""}))});const y=n.filter(s=>s.toType!==p);n.splice(0,n.length,...y,...c)},T=async()=>{if(!m.value.tplTypes.length){f.splice(0,f.length);return}r.tplLoading=!0;try{const e=await Promise.all(m.value.tplTypes.map(l=>boApiSvc.syTemplate.getPage({pageNo:1,pageSize:100,templateTypeCd:l,useYn:"Y",searchValue:k.searchValue||void 0},"\uC54C\uB9BC\uC2DC\uBBAC","\uD15C\uD50C\uB9BF\uC870\uD68C"))),o=[];e.forEach(l=>{var t,i;(((i=(t=l.data)==null?void 0:t.data)==null?void 0:i.pageList)||[]).forEach(p=>o.push(p))}),f.splice(0,f.length,...o)}catch(e){f.splice(0,f.length),d.showToast(coUtil.cofErrMsg(e,"\uD15C\uD50C\uB9BF \uC870\uD68C \uC2E4\uD328"),"error",0)}finally{r.tplLoading=!1}},O=e=>{e&&(r.tplId=e.templateId,a.scenario="CUSTOM",a.title=e.templateSubject||e.templateNm||"",a.content=coNotiStore.fnStripHtml(e.templateContent||""),d.showToast(`\uD15C\uD50C\uB9BF [${e.templateNm}] \uC744 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4.`,"success"))},F=async()=>{var p;if(!n.length){d.showToast("\uC218\uC2E0\uC790\uB97C \uBA3C\uC800 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.","error");return}if(!a.title){d.showToast("\uC81C\uBAA9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.","error");return}if(!await d.showConfirm("\uBC1C\uC1A1",`\uC218\uC2E0\uC790 ${n.length}\uBA85\uC5D0\uAC8C ${m.value.title}\uC744 \uBC1C\uC1A1\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;r.sending=!0;const o=v(a.title),l=v(a.content);let t="";if(m.value.api)try{await boApi.post(m.value.api,{subject:o,content:l,sendTo:n.map(c=>c.toEmail||c.toPhone||c.toId).join(","),alarmTypeCd:a.scenario},coUtil.cofApiHdr("\uC54C\uB9BC\uC2DC\uBBAC","\uBC1C\uC1A1")),t="\uCC44\uB110 \uBC1C\uC1A1 OK"}catch(c){t="\uCC44\uB110 \uBC1C\uC1A1 \uC2E4\uD328: "+coUtil.cofErrMsg(c,"\uC54C \uC218 \uC5C6\uC74C")}else t="\uCC44\uB110 \uBC1C\uC1A1 API \uC5C6\uC74C (\uC54C\uB9BC\uB9CC \uC801\uC7AC)";let i=0;try{i=((p=(await boApiSvc.syNoti.send({recvList:n.map(y=>({recvTypeCd:y.toType==="member"?"MEMBER":"USER",recvId:y.toId,recvNm:y.toNm})),notiTypeCd:m.value.notiType,channelCd:m.value.channel,notiTitle:o,notiContent:l},"\uC54C\uB9BC\uC2DC\uBBAC","\uC54C\uB9BC\uBC1C\uC1A1")).data)==null?void 0:p.data)||n.length,t+=" / \uC54C\uB9BC \uC800\uC7A5 "+i+"\uAC74"}catch(c){t+=" / \uC54C\uB9BC \uC800\uC7A5 \uC2E4\uD328: "+coUtil.cofErrMsg(c,"\uC54C \uC218 \uC5C6\uC74C")}h.unshift({logId:Date.now(),time:new Date,channel:m.value.title,title:o,toCount:i,toNames:n.map(c=>c.toNm).join(", "),result:t}),r.sending=!1,d.showToast(`${i}\uBA85\uC5D0\uAC8C \uBC1C\uC1A1\uD588\uC2B5\uB2C8\uB2E4. (${t})`,i>0?"success":"error",i>0?3500:0),N.fnLoadServer()},D=async()=>{const e=ERROR_PRESETS.find(t=>t.key===g.preset);if(!e)return;const o=Math.max(1,Math.min(20,Number(g.repeat)||1));if(await d.showConfirm("\uC624\uB958 \uC0DD\uC131",`[${e.label}] \uC54C\uB9BC\uC744 ${o}\uAC74 \uC0DD\uC131\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)){for(let t=0;t<o;t++)N.fnAddError({status:e.key,method:e.method,fullUrl:e.url,uiLabel:e.uiLabel,message:e.message});h.unshift({logId:Date.now(),time:new Date,channel:"\uC624\uB958\uC815\uBCF4 \uC0DD\uC131",title:e.label,toCount:o,toNames:"(\uB0B4 \uC54C\uB9BC\uD568)",result:"\uB3D9\uC77C \uC624\uB958\uB294 1\uAC74\uC73C\uB85C \uBCD1\uD569\uB418\uACE0 \uBC18\uBCF5 \uD69F\uC218\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4. (DB \uBBF8\uC800\uC7A5)"}),d.showToast(`[${e.label}] ${o}\uAC74\uC744 \uC0DD\uC131\uD588\uC2B5\uB2C8\uB2E4. \uC0C1\uB2E8 \u{1F514} \uC744 \uD655\uC778\uD558\uC138\uC694.`,"success")}},w=e=>{a.scenario=e,r.tplId=null;const o=SCENARIOS.find(l=>l.key===e);o&&(a.title=o.title,a.content=o.body)},_=()=>{const e=(o,l)=>{let t=null;try{t=JSON.parse(localStorage.getItem(o)||"null")}catch{t=null}if(!t)return;const i=l==="member"?t.memberId||t.authId||"":t.userId||t.authId||"";i&&(n.some(p=>p.toType===l?p.toId===String(i):!1)||n.push({toType:l,toId:String(i),toNm:t.authNm||t.name||t.userNm||t.memberNm||String(i),toEmail:t.email||t.userEmail||t.memberEmail||"",toPhone:t.phone||t.userPhone||t.memberPhone||""}))};e("modu-bo-auth-authUser","user"),e("modu-fo-auth-authUser","member")},v=e=>String(e||"").replace(/\{orderNo\}/g,a.orderNo).replace(/\{amount\}/g,a.amount).replace(/\{invoiceNo\}/g,a.invoiceNo).replace(/\{authCode\}/g,a.authCode),E=e=>coNotiStore.fnFmtTime(e),m=u(()=>MODE_META[d.mode]||MODE_META.mail),S=u(()=>d.mode==="error"),I=u(()=>m.value.tplTypes.length>0),B=u(()=>n.filter(e=>e.toType==="member").length),z=u(()=>n.filter(e=>e.toType==="user").length),U=u(()=>n.filter(e=>e.toType===r.recvTab)),$=u(()=>n.filter(e=>e.toType===r.pickModal).map(e=>e.toId)),V=u(()=>v(a.title)),j=u(()=>v(a.content)),G=[{key:"title",label:"\uC81C\uBAA9",type:"text",required:!0,placeholder:"\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694"},{key:"content",label:"\uB0B4\uC6A9",type:"textarea",rows:5,placeholder:"\uBCF8\uBB38\uC744 \uC785\uB825\uD558\uC138\uC694. {orderNo} {amount} {invoiceNo} {authCode} \uB294 \uC6B0\uCE21 \uCE58\uD658 \uD30C\uB77C\uBBF8\uD130 \uAC12\uC73C\uB85C \uBC14\uB01D\uB2C8\uB2E4."}],H=[{key:"orderNo",label:"\uC8FC\uBB38\uBC88\uD638 {orderNo}",type:"text"},{key:"amount",label:"\uAE08\uC561 {amount}",type:"text"},{key:"invoiceNo",label:"\uC1A1\uC7A5\uBC88\uD638 {invoiceNo}",type:"text"},{key:"authCode",label:"\uC778\uC99D\uBC88\uD638 {authCode}",type:"text"}],Y=[{key:"repeat",label:"\uC0DD\uC131 \uAC74\uC218 (1~20)",type:"number"}],Z=[{key:"time",label:"\uC2DC\uAC01",style:"width:80px;",align:"center",mono:!0,fmt:(e,o)=>E(o.time)},{key:"channel",label:"\uCC44\uB110",style:"width:140px;"},{key:"title",label:"\uC81C\uBAA9",cellTitle:!0},{key:"toCount",label:"\uAC74\uC218",style:"width:56px;",align:"right"},{key:"toNames",label:"\uC218\uC2E0\uC790",style:"width:200px;",cellTitle:!0},{key:"result",label:"\uACB0\uACFC",style:"width:300px;",cellTitle:!0}];return A(async()=>{d.mode==="notice"?w("NOTICE"):S.value||w("ORDER_DONE"),S.value||_(),I.value&&await T()}),{uiState:r,codes:M,baseForm:a,errorForm:g,recipients:n,sendLogs:h,templates:f,tplSearch:k,SCENARIOS,ERROR_PRESETS,logGridColumns:Z,sendFormColumns:G,paramFormColumns:H,errorFormColumns:Y,cfMeta:m,cfIsError:S,cfHasTpl:I,cfMemberCnt:B,cfUserCnt:z,cfPickedIds:$,cfRecvList:U,recvTabs:C,cfPreviewTitle:V,cfPreviewBody:j,fnFmtTime:E,fnCallbackModal:P,handleBtnAction:R,handleSelectAction:L}},template:`
<bo-page :title="cfMeta.icon + ' ' + cfMeta.title" :desc-summary="cfMeta.desc">
  <!-- ===== \u25A0. \uC624\uB958\uC815\uBCF4 \uC0DD\uC131 \uBAA8\uB4DC ========================================== -->
  <template v-if="cfIsError">
    <bo-container title="\uC624\uB958 \uC54C\uB9BC \uC0DD\uC131">
      <div style="padding:4px 0 10px;">
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
          <button v-for="p in ERROR_PRESETS" :key="p.key" class="btn btn-xs"
            :class="errorForm.preset === p.key ? 'btn-primary' : 'btn-secondary'"
            @click="handleSelectAction('errorPreset-select', p.key)">{{ p.label }}</button>
        </div>
        <bo-form-area :columns="errorFormColumns" :form="errorForm" :errors="{}"
          :cols="3" :show-actions="false" />
        <div style="margin-top:10px;font-size:11.5px;color:#888;line-height:1.6;">
          \xB7 \uC2E4\uC81C \uC11C\uBC84\uC5D0 \uC624\uB958\uB97C \uC77C\uC73C\uD0A4\uC9C0 \uC54A\uACE0, \uC54C\uB9BC \uD45C\uC2DC\uB97C \uD655\uC778\uD558\uAE30 \uC704\uD574 \uB0B4 \uC54C\uB9BC\uD568\uC5D0 \uC9C1\uC811 \uC8FC\uC785\uD569\uB2C8\uB2E4.<br/>
          \xB7 \uAC19\uC740 \uC624\uB958\uB97C \uC5EC\uB7EC \uAC74 \uC0DD\uC131\uD558\uBA74 \uD55C \uC904\uB85C \uBCD1\uD569\uB418\uACE0 <b>N\uD68C \uBC18\uBCF5</b> \uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4
            (\uBC31\uC5D4\uB4DC \uC7A5\uC560 \uC2DC \uAC19\uC740 \uC624\uB958\uAC00 \uC3DF\uC544\uC9C0\uB294 \uC0C1\uD669 \uC7AC\uD604).<br/>
          \xB7 \uC624\uB958 \uC54C\uB9BC\uC740 <b>DB \uC5D0 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4</b> \u2014 \uC11C\uBC84\uAC00 \uC8FD\uC5C8\uC744 \uB54C \uBC1C\uC0DD\uD558\uB294 \uC815\uBCF4\uB77C \uADF8\uB54C DB \uC4F0\uAE30\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.
        </div>
        <div class="form-actions">
          <button class="btn btn_save" :disabled="uiState.sending" @click="handleBtnAction('errorForm-make')">
            \uC624\uB958 \uC54C\uB9BC \uC0DD\uC131
          </button>
        </div>
      </div>
    </bo-container>
  </template>

  <!-- ===== \u25A0. \uBA54\uC2DC\uC9C0/\uACF5\uC9C0 \uBC1C\uC1A1 \uBAA8\uB4DC ======================================= -->
  <template v-else>
    <!-- \uC88C: \uC218\uC2E0\uB300\uC0C1\xB7\uD15C\uD50C\uB9BF / \uC911: \uBC1C\uC1A1\uB0B4\uC6A9\xB7\uBBF8\uB9AC\uBCF4\uAE30 / \uC6B0: \uCE58\uD658 \uD30C\uB77C\uBBF8\uD130(\uC138\uB85C \uB098\uC5F4) -->
    <div style="display:grid;grid-template-columns:minmax(300px,30%) minmax(0,1fr) minmax(190px,220px);gap:0 12px;align-items:start;">
      <!-- ===== \u25A0.\u25A0. \uC88C: \uC218\uC2E0\uC790 + \uD15C\uD50C\uB9BF ==================================== -->
      <div>
        <bo-container title="\uC218\uC2E0 \uB300\uC0C1" :count-text="recipients.length + '\uBA85'">
          <template #toolbar-actions>
            <button class="btn btn-secondary btn-sm" @click="handleBtnAction('recipients-clear')">
              {{ uiState.recvTab === 'member' ? '\uD68C\uC6D0' : '\uC0AC\uC6A9\uC790' }} \uBE44\uC6B0\uAE30
            </button>
          </template>
          <!-- \uD68C\uC6D0/\uC0AC\uC6A9\uC790\uB97C \uD55C \uADF8\uB9AC\uB4DC\uC5D0 \uC11E\uC9C0 \uC54A\uB294\uB2E4 \u2014 \uC120\uD0DD \uD31D\uC5C5\uC774 \uC720\uD615\uBCC4\uB85C \uB530\uB85C\uB77C \uBAA9\uB85D\uB3C4 \uAC19\uC740 \uCD95\uC73C\uB85C \uB098\uB208\uB2E4 -->
          <bo-tab-bar :tabs="recvTabs" :tab="uiState.recvTab" :show-modes="false"
            @tab-select="id => handleSelectAction('recvTab-select', id)" />
          <div style="display:flex;align-items:center;gap:8px;padding:8px 0;">
            <button class="btn btn_new" @click="handleBtnAction('recvTab-pick')">
              \uFF0B {{ uiState.recvTab === 'member' ? '\uD68C\uC6D0' : '\uC0AC\uC6A9\uC790' }} \uC120\uD0DD
            </button>
            <span style="font-size:11px;color:#888;">\uBAA9\uB85D\uC5D0\uC11C \uC5EC\uB7EC \uAC74\uC744 \uD55C \uBC88\uC5D0 \uACE0\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span>
          </div>
          <div style="border:1px solid #eef0f3;border-radius:6px;background:#fff;max-height:210px;overflow-y:auto;overflow-x:hidden;">
            <!-- \uC218\uC2E0\uC790 1\uBA85 = 1\uC904 (\uC774\uB984 \xB7 \uC774\uBA54\uC77C \xB7 \uC5F0\uB77D\uCC98). ID \uB294 \uD3ED\uB9CC \uCC28\uC9C0\uD558\uACE0 \uC4F8 \uC77C\uC774 \uC5C6\uC5B4 \uBBF8\uD45C\uC2DC -->
            <div v-for="r in cfRecvList" :key="r.toType + '-' + r.toId"
              style="display:flex;align-items:center;gap:6px;padding:5px 8px;border-bottom:1px solid #f5f5f5;font-size:11.5px;white-space:nowrap;min-width:0;">
              <span style="flex-shrink:0;font-weight:600;color:#374151;max-width:110px;overflow:hidden;text-overflow:ellipsis;"
                :title="r.toNm">{{ r.toNm }}</span>
              <span style="flex:1;min-width:0;color:#6b7280;overflow:hidden;text-overflow:ellipsis;"
                :title="r.toEmail">\u2709 {{ r.toEmail || '-' }}</span>
              <span style="flex-shrink:0;color:#6b7280;">\u260E {{ r.toPhone || '-' }}</span>
              <button class="btn btn_row_delete" style="flex-shrink:0;" @click="handleSelectAction('recipients-remove', r)">\u2715</button>
            </div>
            <div v-if="!cfRecvList.length" style="padding:28px 12px;text-align:center;color:#bbb;font-size:12px;">
              \uC120\uD0DD\uB41C {{ uiState.recvTab === 'member' ? '\uD68C\uC6D0' : '\uC0AC\uC6A9\uC790' }}\uC774(\uAC00) \uC5C6\uC2B5\uB2C8\uB2E4.
            </div>
          </div>
        </bo-container>

        <!-- ===== \u25A0.\u25A0.\u25A0. \uD15C\uD50C\uB9BF \uBAA9\uB85D (\uD574\uB2F9 \uCC44\uB110 \uD15C\uD50C\uB9BF\uC774 \uC788\uC744 \uB54C\uB9CC) ============ -->
        <bo-container v-if="cfHasTpl" :title="(cfMeta.tplLabel || '') + ' \uD15C\uD50C\uB9BF \uC120\uD0DD'" :count-text="templates.length + '\uAC74'">
          <div style="display:flex;gap:6px;align-items:center;padding:2px 0 8px;">
            <input class="form-control" v-model="tplSearch.searchValue" :placeholder="(cfMeta.tplLabel || '') + ' \uD15C\uD50C\uB9BF\uBA85 / \uCF54\uB4DC \uAC80\uC0C9'"
              style="flex:1;min-width:0;" @keyup.enter="handleBtnAction('templates-search')" />
            <button class="btn btn_search" style="flex-shrink:0;" @click="handleBtnAction('templates-search')">\uC870\uD68C</button>
            <button class="btn btn_reset" style="flex-shrink:0;" @click="handleBtnAction('templates-reset')">\uCD08\uAE30\uD654</button>
          </div>
          <div style="border:1px solid #eef0f3;border-radius:6px;background:#fff;max-height:230px;overflow-y:auto;">
            <div v-for="t in templates" :key="t.templateId"
              style="padding:5px 8px;border-bottom:1px solid #f5f5f5;cursor:pointer;"
              :style="uiState.tplId === t.templateId ? 'background:#eff6ff;outline:2px solid #2563eb;outline-offset:-2px;position:relative;z-index:1;' : ''"
              @click="handleSelectAction('template-select', t)">
              <div style="display:flex;align-items:center;gap:6px;">
                <span class="badge badge-gray" style="font-size:10px;flex-shrink:0;">{{ t.templateTypeCd }}</span>
                <span style="flex:1;min-width:0;font-size:11.5px;font-weight:600;color:#374151;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ t.templateNm }}</span>
              </div>
              <div style="font-size:10px;color:#9ca3af;margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                {{ t.templateCode }}<span v-if="t.templateSubject"> \xB7 {{ t.templateSubject }}</span>
              </div>
            </div>
            <div v-if="!templates.length" style="padding:24px 12px;text-align:center;color:#bbb;font-size:12px;">
              {{ uiState.tplLoading ? '\uC870\uD68C \uC911...' : '\uD574\uB2F9 \uCC44\uB110\uC758 \uD15C\uD50C\uB9BF\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.' }}
            </div>
          </div>
          <div style="margin-top:6px;font-size:11px;color:#888;">
            \uD15C\uD50C\uB9BF\uC744 \uD074\uB9AD\uD558\uBA74 \uC544\uB798 \uC81C\uBAA9\xB7\uB0B4\uC6A9\uC5D0 \uC790\uB3D9\uC73C\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4.
          </div>
        </bo-container>
      </div>

      <!-- ===== \u25A0.\u25A0. \uC6B0: \uB0B4\uC6A9 \uC791\uC131 + \uBBF8\uB9AC\uBCF4\uAE30 =============================== -->
      <div>
        <bo-container title="\uBC1C\uC1A1 \uB0B4\uC6A9">
          <div style="padding:2px 0 4px;">
            <!-- \uC2DC\uB098\uB9AC\uC624 \uD504\uB9AC\uC14B -->
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
              <button v-for="s in SCENARIOS" :key="s.key" class="btn btn-xs"
                :class="baseForm.scenario === s.key ? 'btn-primary' : 'btn-secondary'"
                @click="handleSelectAction('scenario-select', s.key)">{{ s.label }}</button>
            </div>
            <bo-form-area :columns="sendFormColumns" :form="baseForm" :errors="{}"
              :cols="1" :show-actions="false" />
            <div class="form-actions">
              <button class="btn btn_send" :disabled="uiState.sending" @click="handleBtnAction('baseForm-send')">
                {{ uiState.sending ? '\uBC1C\uC1A1 \uC911...' : cfMeta.icon + ' ' + recipients.length + '\uBA85\uC5D0\uAC8C \uBC1C\uC1A1' }}
              </button>
            </div>
          </div>
        </bo-container>

        <!-- ===== \u25A0.\u25A0.\u25A0. \uBBF8\uB9AC\uBCF4\uAE30 ========================================== -->
        <bo-container title="\uC218\uC2E0 \uD654\uBA74 \uBBF8\uB9AC\uBCF4\uAE30">
          <div style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
            <div style="background:#fafbfc;padding:8px 12px;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:700;color:#374151;">
              {{ cfMeta.icon }} {{ cfPreviewTitle || '(\uC81C\uBAA9 \uC5C6\uC74C)' }}
            </div>
            <div style="padding:12px;font-size:12.5px;color:#374151;white-space:pre-wrap;line-height:1.6;min-height:56px;">{{ cfPreviewBody || '(\uB0B4\uC6A9 \uC5C6\uC74C)' }}</div>
          </div>
          <div style="margin-top:8px;font-size:11.5px;color:#888;line-height:1.6;">
            \xB7 \uBC1C\uC1A1\uD558\uBA74 <b>sy_noti \uD14C\uC774\uBE14\uC5D0 \uC218\uC2E0\uC790\uBCC4 1\uD589</b> \uC73C\uB85C \uC800\uC7A5\uB418\uACE0, \uC218\uC2E0\uC790 \uBCF8\uC778 \uD654\uBA74 \uC0C1\uB2E8 \u{1F514} \uC54C\uB9BC\uC5D0 \uB739\uB2C8\uB2E4
              (\uAD00\uB9AC\uC790=\uC0AC\uC6A9\uC790 / \uC1FC\uD551\uBAB0=\uD68C\uC6D0).<br/>
            \xB7 DB \uC800\uC7A5\uC774\uB77C \uB2E4\uB978 \uAE30\uAE30\xB7\uBE0C\uB77C\uC6B0\uC800\uB85C \uC811\uC18D\uD574\uB3C4 \uADF8\uB300\uB85C \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4.
          </div>
        </bo-container>
      </div>

      <!-- ===== \u25A0.\u25A0. \uC6B0: \uCE58\uD658 \uD30C\uB77C\uBBF8\uD130 (\uC138\uB85C \uB098\uC5F4) ========================== -->
      <div>
        <bo-container title="\uCE58\uD658 \uD30C\uB77C\uBBF8\uD130">
          <div style="padding:2px 0 4px;">
            <bo-form-area :columns="paramFormColumns" :form="baseForm" :errors="{}"
              :cols="1" :show-actions="false" />
            <div style="font-size:11px;color:#9ca3af;line-height:1.6;margin-top:6px;">
              \uC81C\uBAA9\xB7\uB0B4\uC6A9\uC5D0 \uC4F4 <b>{orderNo}</b> <b>{amount}</b> <b>{invoiceNo}</b> <b>{authCode}</b> \uAC00
              \uC704 \uAC12\uC73C\uB85C \uCE58\uD658\uB418\uC5B4 \uBC1C\uC1A1\uB429\uB2C8\uB2E4.
            </div>
          </div>
        </bo-container>
      </div>
    </div>
  </template>

  <!-- ===== \u25A0. \uC804\uC1A1 \uC774\uB825 =================================================== -->
  <bo-container title="\uC2DC\uBBAC\uB808\uC774\uC158 \uC774\uB825" :count-text="sendLogs.length + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn-secondary btn-sm" @click="handleBtnAction('sendLogs-clear')">\uC774\uB825 \uBE44\uC6B0\uAE30</button>
    </template>
    <bo-grid bare :columns="logGridColumns" :rows="sendLogs" row-key="logId"
      empty-text="\uC544\uC9C1 \uBC1C\uC1A1 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." />
  </bo-container>

  <!-- ===== \u25A0. \uACF5\uD1B5 \uC120\uD0DD \uD31D\uC5C5 (cm_popup) =================================== -->
  <bo-cm-popup-modal v-if="uiState.pickModal === 'member'" popup-code="member" modal-name="memberPick"
    title="\uC218\uC2E0 \uD68C\uC6D0 \uC120\uD0DD" :multi="true" :init-selected-ids="cfPickedIds"
    :on-callback="fnCallbackModal" @close="handleBtnAction('pick-close')" />
  <bo-cm-popup-modal v-if="uiState.pickModal === 'user'" popup-code="user" modal-name="userPick"
    title="\uC218\uC2E0 \uC0AC\uC6A9\uC790 \uC120\uD0DD" :multi="true" :init-selected-ids="cfPickedIds"
    :on-callback="fnCallbackModal" @close="handleBtnAction('pick-close')" />
</bo-page>
`};
