window.ZdTestAppMsgSendReceiv={name:"ZdTestAppMsgSendReceiv",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(x){var S,w;const{reactive:m,ref:I,computed:C,onMounted:F,onUnmounted:M}=Vue,c=x.showToast||((S=window.boApp)==null?void 0:S.showToast)||(()=>{}),O=x.showConfirm||((w=window.boApp)==null?void 0:w.showConfirm)||(()=>Promise.resolve(!0)),P=m({}),h=I("send"),T=[{id:"send",label:"\u2709\uFE0F \uBA54\uC2DC\uC9C0 \uBC1C\uC1A1"},{id:"devices",label:"\u{1F4F1} \uB514\uBC14\uC774\uC2A4 \uBAA9\uB85D"},{id:"history",label:"\u{1F4CB} \uBC1C\uC1A1 \uC774\uB825"},{id:"receive",label:"\u{1F4E1} \uC2E4\uC2DC\uAC04 \uC218\uC2E0"}],g=m({fcmProjectId:"",apnsKeyId:"",apnsTeamId:"",apnsBundleId:"",apnsProduction:!1,smsProvider:"",smsFrom:"",kakaoSenderKey:"",kakaoFrom:""}),a=m({targetMode:"token",targetValue:"",platform:"ALL",chFcm:!0,chApns:!1,chSms:!1,chKakao:!1,chInapp:!1,msgType:"push",title:"[ShopJoy] \uC571 \uBA54\uC2DC\uC9C0 \uD14C\uC2A4\uD2B8",body:"\uC571 \uBA54\uC2DC\uC9C0 \uD1B5\uD569 \uD14C\uC2A4\uD2B8\uC785\uB2C8\uB2E4. \uC815\uC0C1 \uC218\uC2E0\uB418\uBA74 \uC544\uB798 \uC218\uC2E0 \uD655\uC778 \uD0ED\uC5D0\uC11C \uACB0\uACFC\uB97C \uD655\uC778\uD558\uC138\uC694.",imageUrl:"",badge:1,sound:"default",data:'{"type":"test","url":"/"}',templateCode:"",templateVars:'{"name":"\uD14C\uC2A4\uD2B8","orderId":"ORD001"}',kakaoContent:""}),r=m({rows:[],selected:[],filter:{platform:"",memberId:""},pager:{pageNo:1,pageSize:20,pageTotalCount:0}}),b=m({rows:[],filter:{memberId:"",channel:"",dateRangeStart:"",dateRangeEnd:""},pager:{pageNo:1,pageSize:20,pageTotalCount:0}}),d=m({msgs:[],wsStatus:"\uBBF8\uC5F0\uACB0",connected:!1});let i=null;const n=m({loading:!1,loadingDev:!1,loadingHist:!1,batchResult:null,sendLogs:[],error:""}),D=[{key:"targetMode",label:"\uB300\uC0C1 \uC720\uD615",type:"select",hint:"targetMode",options:[{value:"token",label:"\uB514\uBC14\uC774\uC2A4 \uD1A0\uD070 (\uB2E8\uAC74)"},{value:"member",label:"\uD68C\uC6D0 ID (\uC804\uCCB4 \uB514\uBC14\uC774\uC2A4)"},{value:"topic",label:"FCM Topic (\uAD6C\uB3C5\uC790)"},{value:"broadcast",label:"\uC804\uCCB4 \uBE0C\uB85C\uB4DC\uCE90\uC2A4\uD2B8"},{value:"phone",label:"\uC804\uD654\uBC88\uD638 (SMS/\uCE74\uCE74\uC624)"}]},{key:"targetValue",label:"\uBC1C\uC1A1 \uB300\uC0C1\uAC12",type:"text",hint:"targetValue",placeholder:"FCM/APNs \uD1A0\uD070 \uB610\uB294 \uD68C\uC6D0ID / Topic\uBA85 / \uC804\uD654\uBC88\uD638",visible:e=>e.targetMode!=="broadcast",colSpan:2},{key:"platform",label:"\uD50C\uB7AB\uD3FC",type:"select",hint:"platform",options:[{value:"ALL",label:"\uC790\uB3D9 \uAC10\uC9C0"},{value:"ANDROID",label:"Android (FCM)"},{value:"IOS",label:"iOS (FCM/APNs)"}],visible:e=>e.targetMode==="token"}],N=[{key:"title",label:"\uC81C\uBAA9",type:"text",hint:"title",colSpan:2},{key:"badge",label:"Badge",type:"number",hint:"badge"},{key:"body",label:"\uBCF8\uBB38",type:"textarea",hint:"body",colSpan:2,rowSpan:2},{key:"sound",label:"Sound",type:"text",hint:"sound",placeholder:"default"},{key:"imageUrl",label:"\uC774\uBBF8\uC9C0 URL (\uC120\uD0DD)",type:"text",hint:"imageUrl",placeholder:"https://\u2026/image.png"},{key:"data",label:"Data Payload (JSON)",type:"text",hint:"data",colSpan:3,mono:!0,placeholder:'{"type":"order","orderId":"ORD001"}'}],L=[{key:"templateCode",label:"\uD15C\uD50C\uB9BF \uCF54\uB4DC (\uC54C\uB9BC\uD1A1)",type:"text",hint:"templateCode",placeholder:"ORDER_CONFIRM_01",mono:!0},{key:"templateVars",label:"\uD15C\uD50C\uB9BF \uBCC0\uC218 (JSON)",type:"text",hint:"templateVars",mono:!0},{key:"kakaoContent",label:"\uCE5C\uAD6C\uD1A1 \uB0B4\uC6A9 (\uD15C\uD50C\uB9BF \uCF54\uB4DC \uC5C6\uC744 \uB54C)",type:"textarea",hint:"kakaoContent",colSpan:3,placeholder:"\uCE5C\uAD6C\uD1A1 \uD14D\uC2A4\uD2B8 \uBA54\uC2DC\uC9C0 (\uCD5C\uB300 1000\uC790)"}],R=[{key:"platform",label:"\uD50C\uB7AB\uD3FC",type:"select",hint:"platform",options:[{value:"",label:"\uC804\uCCB4"},{value:"ANDROID",label:"Android"},{value:"IOS",label:"iOS"}]},{key:"memberId",label:"\uD68C\uC6D0 ID",type:"text",hint:"memberId",placeholder:"MB000001"}],z=[{key:"channel",label:"\uCC44\uB110",type:"select",hint:"channel",options:[{value:"",label:"\uC804\uCCB4"},{value:"FCM",label:"FCM"},{value:"APNS",label:"APNs"},{value:"SMS",label:"SMS"},{value:"KAKAO",label:"\uCE74\uCE74\uC624"},{value:"INAPP",label:"InApp"}]},{key:"memberId",label:"\uD68C\uC6D0 ID",type:"text",hint:"memberId",placeholder:"MB000001"},{key:"dateRangeStart",label:"\uC2DC\uC791\uC77C",type:"date",hint:"dateRangeStart"},{key:"dateRangeEnd",label:"\uC885\uB8CC\uC77C",type:"date",hint:"dateRangeEnd"}],K=[{key:"_check",label:"\uC120\uD0DD",width:"28px",align:"center",cellType:"slot",name:"dev-check"},{key:"memberId",label:"\uD68C\uC6D0 ID",cellStyle:"cursor:pointer",link:!0},{key:"platform",label:"\uD50C\uB7AB\uD3FC",align:"center",badge:e=>e.platform==="ANDROID"?"badge badge-green":e.platform==="IOS"?"badge badge-blue":"badge badge-gray"},{key:"_token",label:"\uD1A0\uD070 (\uC55E 32\uC790)",mono:!0,fmt:(e,t)=>(t.fcmToken||t.apnsToken||"").substring(0,32)+"\u2026"},{key:"appVersion",label:"\uC571 \uBC84\uC804",fmt:e=>e||"-"},{key:"regDate",label:"\uB4F1\uB85D\uC77C"},{key:"_action",label:"\uC561\uC158",width:"80px",align:"center",cellType:"slot",name:"dev-action"}],B=[{key:"sendDate",label:"\uBC1C\uC1A1\uC77C\uC2DC",fmt:(e,t)=>e||t.regDate},{key:"channel",label:"\uCC44\uB110",align:"center",badge:e=>({FCM:"badge badge-orange",APNS:"badge badge-blue",SMS:"badge badge-green",KAKAO:"badge badge-purple",INAPP:"badge badge-gray"})[e.channel]||"badge badge-gray"},{key:"memberId",label:"\uD68C\uC6D0 ID",fmt:e=>e||"-"},{key:"title",label:"\uC81C\uBAA9"},{key:"sendStatus",label:"\uACB0\uACFC",align:"center",badge:e=>{const t=e.sendStatus||e.status;return t==="SUCCESS"?"badge badge-green":t==="FAIL"?"badge badge-red":"badge badge-gray"},fmt:(e,t)=>t.sendStatus||t.status||"-"},{key:"messageId",label:"\uBA54\uC2DC\uC9C0 ID",mono:!0,fmt:e=>e||"-"},{key:"errorMsg",label:"\uC624\uB958",fmt:e=>e||"",cellStyle:"color:#b91c1c;font-size:10px"}],V=[{key:"channel",label:"\uCC44\uB110",width:"80px",cellType:"slot",name:"guide-channel"},{key:"sendHow",label:"\uBC1C\uC1A1 \uD655\uC778 \uBC29\uBC95"},{key:"recvHow",label:"\uC218\uC2E0 \uD655\uC778 \uBC29\uBC95"}],_=[{channel:"FCM",sendHow:"\uBC1C\uC1A1 \uD0ED \u2192 FCM \uCCB4\uD06C \u2192 \uBC1C\uC1A1 \u2192 \uACB0\uACFC messageId \uD655\uC778",recvHow:"\uC2E4\uAE30\uAE30: \uC54C\uB9BC \uD2B8\uB808\uC774 \uD655\uC778 / Firebase Console \u2192 Messaging \u2192 \uCEA0\uD398\uC778 \uC774\uB825"},{channel:"APNS",sendHow:"ZdTestPushAlimApns \uC5D0\uC11C \uB2E8\uAC74 \uBC1C\uC1A1 \uD6C4 apnsId \uD655\uC778",recvHow:"\uC2E4 iOS \uAE30\uAE30 \uC7A0\uAE08\uD654\uBA74/\uC54C\uB9BC\uC13C\uD130 / Apple Developer \u2192 \uB85C\uADF8"},{channel:"SMS",sendHow:"\uBC1C\uC1A1 \uD0ED \u2192 SMS \uCCB4\uD06C \u2192 \uC804\uD654\uBC88\uD638 \uC785\uB825 \u2192 \uBC1C\uC1A1",recvHow:"\uC2E4 \uC218\uC2E0 \uBC88\uD638 \uBB38\uC790 \uC571 \uD655\uC778 / \uBC1C\uC1A1 \uC774\uB825 \uD0ED"},{channel:"KAKAO",sendHow:"\uBC1C\uC1A1 \uD0ED \u2192 \uCE74\uCE74\uC624 \uCCB4\uD06C \u2192 \uC54C\uB9BC\uD1A1 \uD15C\uD50C\uB9BF \uCF54\uB4DC \uC785\uB825 \u2192 \uBC1C\uC1A1",recvHow:"\uCE74\uCE74\uC624\uD1A1 \uC571 \uC54C\uB9BC / \uCE74\uCE74\uC624 \uBE44\uC988\uBA54\uC2DC\uC9C0 \uD3EC\uD138 \uBC1C\uC1A1 \uC774\uB825"},{channel:"INAPP",sendHow:"\uBC1C\uC1A1 \uD0ED \u2192 InApp \uCCB4\uD06C \u2192 \uBC1C\uC1A1",recvHow:"\uC774 \uD0ED\uC758 WebSocket \uC218\uC2E0 \uBAA8\uB2C8\uD130\uC5D0\uC11C \uC2E4\uC2DC\uAC04 \uD655\uC778"}];F(async()=>{var e,t,o;try{const l=await((t=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:t.call(e,{propKeys:["app.push.fcm.project-id","app.push.apns.key-id","app.push.apns.team-id","app.push.apns.bundle-id","app.push.apns.production","app.sms.provider","app.sms.from","app.kakao.sender-key","app.kakao.from"].join(",")},"\uC571 \uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C"));(((o=l==null?void 0:l.data)==null?void 0:o.data)||[]).forEach(s=>{s.propKey==="app.push.fcm.project-id"&&(g.fcmProjectId=s.propValue||""),s.propKey==="app.push.apns.key-id"&&(g.apnsKeyId=s.propValue||""),s.propKey==="app.push.apns.team-id"&&(g.apnsTeamId=s.propValue||""),s.propKey==="app.push.apns.bundle-id"&&(g.apnsBundleId=s.propValue||""),s.propKey==="app.push.apns.production"&&(g.apnsProduction=s.propValue==="true"),s.propKey==="app.sms.provider"&&(g.smsProvider=s.propValue||""),s.propKey==="app.sms.from"&&(g.smsFrom=s.propValue||""),s.propKey==="app.kakao.sender-key"&&(g.kakaoSenderKey=s.propValue||""),s.propKey==="app.kakao.from"&&(g.kakaoFrom=s.propValue||"")})}catch(l){n.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(l.message||l)}}),M(()=>{k()});const y=(e,t,o,l="info")=>{n.sendLogs.unshift({channel:e,target:(t||"").substring(0,24),msg:o,type:l,time:new Date().toLocaleTimeString()}),n.sendLogs.length>50&&n.sendLogs.pop()},H=e=>"badge "+({FCM:"badge-orange",APNS:"badge-blue",SMS:"badge-green",KAKAO:"badge-purple",INAPP:"badge-gray"}[e]||"badge-gray"),f=C(()=>{const e=[];return a.chFcm&&e.push("FCM"),a.chApns&&e.push("APNS"),a.chSms&&e.push("SMS"),a.chKakao&&e.push("KAKAO"),a.chInapp&&e.push("INAPP"),e}),U=e=>e==="ANDROID"?"badge badge-green":e==="IOS"?"badge badge-blue":"badge badge-gray",E=e=>e==="SUCCESS"?"badge badge-green":e==="FAIL"?"badge badge-red":"badge badge-gray",G=e=>{a.targetMode="token",a.targetValue=e.fcmToken||e.apnsToken||"",a.platform=e.platform||"ALL",e.platform==="IOS"?(a.chFcm=!1,a.chApns=!0):(a.chFcm=!0,a.chApns=!1),h.value="send",c("\uB300\uC0C1 \uB514\uBC14\uC774\uC2A4\uAC00 \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")},J=e=>{a.targetMode="member",a.targetValue=e,a.platform="ALL",a.chFcm=!0,a.chApns=!0,h.value="send",c("\uD68C\uC6D0 ID ["+e+"] \uAC00 \uB300\uC0C1\uC73C\uB85C \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")},j=async()=>{var l;if(!f.value.length){c("\uBC1C\uC1A1 \uCC44\uB110\uC744 1\uAC1C \uC774\uC0C1 \uC120\uD0DD\uD558\uC138\uC694.","error");return}if(a.targetMode!=="broadcast"&&!a.targetValue){c("\uBC1C\uC1A1 \uB300\uC0C1\uC744 \uC785\uB825\uD558\uC138\uC694.","error");return}n.loading=!0,n.error="",n.batchResult=null;let e={};try{e=JSON.parse(a.data||"{}")}catch{}let t={};try{t=JSON.parse(a.templateVars||"{}")}catch{}const o=a.targetMode==="broadcast"?"(\uC804\uCCB4 \uBE0C\uB85C\uB4DC\uCE90\uC2A4\uD2B8)":a.targetValue.substring(0,20)+"\u2026";try{const p=await boApi.post("/co/ext/app-msg-send/send",{targetMode:a.targetMode,targetValue:a.targetValue,platform:a.platform,channels:f.value,title:a.title,body:a.body,imageUrl:a.imageUrl||void 0,badge:a.badge,sound:a.sound,data:e,templateCode:a.templateCode||void 0,templateVars:t,kakaoContent:a.kakaoContent||void 0},coUtil.cofApiHdr("\uC571 \uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uD14C\uC2A4\uD2B8","\uBC1C\uC1A1"));n.batchResult=((l=p.data)==null?void 0:l.data)||{};const s=n.batchResult;f.value.forEach(v=>{const u=s[v.toLowerCase()]||{},A=u.success!==!1;y(v,o,A?"\u2705 "+(u.messageId||u.apnsId||u.msgId||"\uBC1C\uC1A1\uC644\uB8CC"):"\u274C "+(u.error||"\uC2E4\uD328"),A?"success":"error")}),c("\uBC1C\uC1A1 \uC644\uB8CC ("+f.value.join(", ")+")","success")}catch(p){n.error=coUtil.cofErrMsg(p,"\uBC1C\uC1A1 \uC624\uB958"),y(f.value.join("+"),o,"\u274C "+n.error,"error"),c(n.error,"error",0)}n.loading=!1},W=async()=>{var e;n.loadingDev=!0;try{const o=((e=(await boApi.get("/co/ext/app-msg-send/tokens",{params:{platform:r.filter.platform||void 0,memberId:r.filter.memberId||void 0,pageNo:r.pager.pageNo,pageSize:r.pager.pageSize},...coUtil.cofApiHdr("\uC571 \uBA54\uC2DC\uC9C0 \uD14C\uC2A4\uD2B8","\uB514\uBC14\uC774\uC2A4 \uBAA9\uB85D")})).data)==null?void 0:e.data)||{};r.rows=o.pageList||o||[],r.pager.pageTotalCount=o.pageTotalCount||(Array.isArray(o)?o.length:0)}catch(t){c("\uB514\uBC14\uC774\uC2A4 \uBAA9\uB85D \uC870\uD68C \uC2E4\uD328: "+coUtil.cofErrMsg(t),"error",0)}n.loadingDev=!1},Z=async()=>{var e;n.loadingHist=!0;try{const o=((e=(await boApi.get("/co/ext/app-msg-send/history",{params:{memberId:b.filter.memberId||void 0,channel:b.filter.channel||void 0,dateRangeStart:b.filter.dateRangeStart||void 0,dateRangeEnd:b.filter.dateRangeEnd||void 0,pageNo:b.pager.pageNo,pageSize:b.pager.pageSize},...coUtil.cofApiHdr("\uC571 \uBA54\uC2DC\uC9C0 \uD14C\uC2A4\uD2B8","\uBC1C\uC1A1 \uC774\uB825")})).data)==null?void 0:e.data)||{};b.rows=o.pageList||[],b.pager.pageTotalCount=o.pageTotalCount||0}catch(t){c("\uBC1C\uC1A1 \uC774\uB825 \uC870\uD68C \uC2E4\uD328: "+coUtil.cofErrMsg(t),"error",0)}n.loadingHist=!1},q=()=>{if((i==null?void 0:i.readyState)===WebSocket.OPEN)return;const e=(window.location.protocol==="https:"?"wss":"ws")+"://"+window.location.hostname+":8080/ws/chat";d.wsStatus="\u23F3 \uC5F0\uACB0 \uC911\u2026";try{i=new WebSocket(e),i.onopen=()=>{d.connected=!0,d.wsStatus="\u2705 \uC5F0\uACB0\uB428 ("+e+")",i.send(JSON.stringify({type:"JOIN",roomId:"DEV_MSG_MONITOR",senderId:"admin-monitor"})),d.msgs.unshift({ch:"SYS",body:"WebSocket \uC5F0\uACB0\uB428 \u2014 \uC778\uC571 \uBA54\uC2DC\uC9C0 \uC218\uC2E0 \uB300\uAE30 \uC911\u2026",time:new Date().toLocaleTimeString()})},i.onmessage=t=>{let o=t.data;try{o=JSON.parse(t.data)}catch{}d.msgs.unshift({ch:(o==null?void 0:o.type)||"MSG",body:typeof o=="string"?o:JSON.stringify(o),time:new Date().toLocaleTimeString()}),d.msgs.length>100&&d.msgs.pop()},i.onerror=()=>{d.wsStatus="\u274C \uC5F0\uACB0 \uC624\uB958",d.connected=!1},i.onclose=t=>{d.wsStatus="\uBBF8\uC5F0\uACB0 (code:"+t.code+")",d.connected=!1,i=null}}catch(t){d.wsStatus="\u274C "+t.message}},k=()=>{i&&(i.close(1e3,"\uBAA8\uB2C8\uD130 \uC885\uB8CC"),i=null)},Y=()=>{d.msgs=[]},Q=e=>{const t=r.selected.findIndex(o=>o.deviceTokenId===e.deviceTokenId);t>=0?r.selected.splice(t,1):r.selected.push(e)},X=e=>r.selected.some(t=>t.deviceTokenId===e.deviceTokenId),$=async()=>{if(!r.selected.length){c("\uB514\uBC14\uC774\uC2A4\uB97C \uC120\uD0DD\uD558\uC138\uC694.","error");return}if(!await O("\uC77C\uAD04 \uBC1C\uC1A1","\uC120\uD0DD\uB41C "+r.selected.length+"\uAC1C \uB514\uBC14\uC774\uC2A4\uC5D0 \uBC1C\uC1A1\uD569\uB2C8\uAE4C?"))return;n.loading=!0,n.error="";let t={};try{t=JSON.parse(a.data||"{}")}catch{}let o=0,l=0;for(const p of r.selected){const s=p.fcmToken||p.apnsToken||"",v=p.platform==="IOS"?"APNS":"FCM";try{await boApi.post("/co/ext/app-msg-send/send",{targetMode:"token",targetValue:s,platform:p.platform,channels:[v],title:a.title,body:a.body,data:t},coUtil.cofApiHdr("\uC571 \uBA54\uC2DC\uC9C0 \uD14C\uC2A4\uD2B8","\uC77C\uAD04 \uBC1C\uC1A1")),y(v,s,"\u2705 \uBC1C\uC1A1\uC644\uB8CC \u2192 "+(p.memberId||"-"),"success"),o++}catch(u){y(v,s,"\u274C "+coUtil.cofErrMsg(u),"error"),l++}}n.loading=!1,c("\uC77C\uAD04 \uBC1C\uC1A1 \uC644\uB8CC: \uC131\uACF5 "+o+"\uAC74 / \uC2E4\uD328 "+l+"\uAC74",o>0?"success":"error")};return{codes:P,tab:h,TABS:T,cfg:g,baseForm:a,devices:r,hist:b,recvLog:d,result:n,cfActiveChannels:f,fnChannelBadge:H,fnPlatformBadge:U,fnStatusBadge:E,isDeviceSelected:X,handleBtnAction:(e,t)=>{if(e==="send")return j();if(e==="send-to-selected")return $();if(e==="devices-load")return W();if(e==="hist-load")return Z();if(e==="device-use")return G(t);if(e==="member-use")return J(t);if(e==="device-toggle")return Q(t);if(e==="ws-connect")return q();if(e==="ws-disconnect")return k();if(e==="recv-clear")return Y();if(e==="tab")return h.value=t},targetFormColumns:D,pushFormColumns:N,kakaoFormColumns:L,deviceFilterFormColumns:R,histFilterFormColumns:z,devicesGridColumns:K,histGridColumns:B,receiveGuideGridColumns:V,receiveGuideRows:_}},template:`
<div>
  <div class="page-title">Android / iOS \uC571 \uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 &amp; \uC218\uC2E0 \uD655\uC778</div>

  <!-- \uD0ED \uBC14 -->
  <bo-tab-bar :tabs="TABS" :tab="tab" :show-modes="false" bg="#f0fdf4"
    @tab-select="id => handleBtnAction('tab', id)" />

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       \uD0ED 1: \uBA54\uC2DC\uC9C0 \uBC1C\uC1A1
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div v-if="tab==='send'">

    <!-- \uBC1C\uC1A1 \uB300\uC0C1 -->
    <div class="card" style="margin-bottom:12px">
      <div class="toolbar"><span class="list-title">\uBC1C\uC1A1 \uB300\uC0C1</span></div>
      <div style="padding:12px">
        <bo-form-area plain-readonly :columns="targetFormColumns" :form="baseForm" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
        <div v-if="baseForm.targetMode==='broadcast'" style="padding:8px;background:#fef9c3;border:1px solid #fde68a;border-radius:4px;font-size:12px;color:#92400e;margin-top:8px">
          \u26A0 \uC804\uCCB4 \uBE0C\uB85C\uB4DC\uCE90\uC2A4\uD2B8: \uB4F1\uB85D\uB41C \uBAA8\uB4E0 \uB514\uBC14\uC774\uC2A4\uC5D0 \uBC1C\uC1A1\uB429\uB2C8\uB2E4. \uC8FC\uC758\uD558\uC5EC \uC0AC\uC6A9\uD558\uC138\uC694.
        </div>
      </div>
    </div>

    <!-- \uCC44\uB110 \uC120\uD0DD -->
    <div class="card" style="margin-bottom:12px">
      <div class="toolbar"><span class="list-title">\uBC1C\uC1A1 \uCC44\uB110 (\uB2E4\uC911 \uC120\uD0DD)</span></div>
      <div style="padding:12px;display:flex;gap:16px;flex-wrap:wrap">
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer">
          <input type="checkbox" v-model="baseForm.chFcm" />
          <span class="badge badge-orange">FCM</span>
          Android + iOS \uD06C\uB85C\uC2A4\uD50C\uB7AB\uD3FC
        </label>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer">
          <input type="checkbox" v-model="baseForm.chApns" />
          <span class="badge badge-blue">APNs</span>
          iOS \uC9C1\uC811 (p8 \uD0A4)
        </label>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer">
          <input type="checkbox" v-model="baseForm.chSms" />
          <span class="badge badge-green">SMS</span>
          \uBB38\uC790 \uBA54\uC2DC\uC9C0
        </label>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer">
          <input type="checkbox" v-model="baseForm.chKakao" />
          <span class="badge badge-purple">\uCE74\uCE74\uC624</span>
          \uC54C\uB9BC\uD1A1 / \uCE5C\uAD6C\uD1A1
        </label>
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer">
          <input type="checkbox" v-model="baseForm.chInapp" />
          <span class="badge badge-gray">InApp</span>
          WebSocket \uC778\uC571 \uBA54\uC2DC\uC9C0
        </label>
      </div>
      <div style="padding:0 12px 12px;font-size:12px;color:#888">
        \uD65C\uC131 \uCC44\uB110:
        <span v-if="!cfActiveChannels.length" style="color:#e74c3c">\uC5C6\uC74C (\uCC44\uB110\uC744 1\uAC1C \uC774\uC0C1 \uC120\uD0DD\uD558\uC138\uC694)</span>
        <span v-for="ch in cfActiveChannels" :key="ch" :class="fnChannelBadge(ch)" style="margin-right:4px">{{ ch }}</span>
      </div>
    </div>

    <!-- \uBA54\uC2DC\uC9C0 \uB0B4\uC6A9 -->
    <div class="card" style="margin-bottom:12px">
      <div class="toolbar">
        <span class="list-title">\uBA54\uC2DC\uC9C0 \uB0B4\uC6A9</span>
        <div style="margin-left:auto">
          <button class="btn btn_send btn-sm" :disabled="result.loading || !cfActiveChannels.length" @click="handleBtnAction('send')">
            {{ result.loading ? '\u23F3 \uBC1C\uC1A1 \uC911\u2026' : '\u{1F680} \uBC1C\uC1A1' }}
          </button>
        </div>
      </div>
      <div style="padding:12px">
        <!-- \uACF5\uD1B5 Push/InApp \uB0B4\uC6A9 -->
        <div v-if="baseForm.chFcm || baseForm.chApns || baseForm.chInapp">
          <div style="font-size:11px;font-weight:600;color:#888;margin-bottom:6px;text-transform:uppercase">Push / \uC778\uC571 \uBA54\uC2DC\uC9C0</div>
          <bo-form-area plain-readonly :columns="pushFormColumns" :form="baseForm" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
        </div>
        <!-- \uCE74\uCE74\uC624 \uC54C\uB9BC\uD1A1 -->
        <div v-if="baseForm.chKakao" style="margin-top:12px;padding-top:12px;border-top:1px solid #f0f0f0">
          <div style="font-size:11px;font-weight:600;color:#888;margin-bottom:6px;text-transform:uppercase">\uCE74\uCE74\uC624 \uC54C\uB9BC\uD1A1 / \uCE5C\uAD6C\uD1A1</div>
          <bo-form-area plain-readonly :columns="kakaoFormColumns" :form="baseForm" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
        </div>
        <!-- SMS -->
        <div v-if="baseForm.chSms" style="margin-top:12px;padding-top:12px;border-top:1px solid #f0f0f0">
          <div style="font-size:11px;font-weight:600;color:#888;margin-bottom:6px;text-transform:uppercase">SMS \uBA54\uC2DC\uC9C0</div>
          <div style="font-size:12px;color:#666;padding:6px 8px;background:#f8f9fa;border-radius:4px">
            SMS \uB0B4\uC6A9\uC740 <b>\uBCF8\uBB38(body)</b> \uD544\uB4DC\uB97C \uADF8\uB300\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. 90\uBC14\uC774\uD2B8 \uCD08\uACFC \uC2DC LMS \uC790\uB3D9 \uC804\uD658.
            \uBC1C\uC2E0\uBC88\uD638: <code>{{ cfg.smsFrom || '(\uBBF8\uC124\uC815)' }}</code>
          </div>
        </div>
        <!-- \uACB0\uACFC -->
        <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-top:8px;white-space:pre-wrap">\u274C {{ result.error }}</div>
        <div v-if="result.batchResult" style="margin-top:8px;background:#f8f9fa;border-radius:4px;padding:10px;font-size:12px">
          <div style="font-weight:600;margin-bottom:6px">\uBC1C\uC1A1 \uACB0\uACFC</div>
          <div v-for="(v, k) in result.batchResult" :key="k" style="display:flex;gap:8px;padding:3px 0">
            <span :class="fnChannelBadge(k.toUpperCase())" style="min-width:52px;text-align:center">{{ k.toUpperCase() }}</span>
            <span :style="v.success!==false?'color:#15803d':'color:#b91c1c'">
              {{ v.success !== false ? '\u2705 ' : '\u274C ' }}{{ v.messageId || v.apnsId || v.msgId || v.error || JSON.stringify(v) }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- \uC138\uC158 \uBC1C\uC1A1 \uB85C\uADF8 -->
    <div class="card">
      <div class="toolbar">
        <span class="list-title">\uC138\uC158 \uBC1C\uC1A1 \uB85C\uADF8 (\uCD5C\uADFC 50\uAC74)</span>
      </div>
      <div style="padding:12px;max-height:240px;overflow-y:auto">
        <div v-if="!result.sendLogs.length" style="color:#999;font-size:12px;text-align:center;padding:16px">\uBC1C\uC1A1 \uD6C4 \uC774\uB825\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4</div>
        <div v-for="(log, idx) in result.sendLogs" :key="idx"
          style="display:flex;gap:8px;font-size:12px;padding:4px 0;border-bottom:1px solid #f0f0f0;align-items:flex-start">
          <span style="color:#999;white-space:nowrap">{{ log.time }}</span>
          <span :class="fnChannelBadge(log.channel)" style="white-space:nowrap">{{ log.channel }}</span>
          <span style="color:#aaa;white-space:nowrap;max-width:140px;overflow:hidden;text-overflow:ellipsis">{{ log.target }}</span>
          <span :style="log.type==='error'?'color:#b91c1c':log.type==='success'?'color:#15803d':'color:#444'">{{ log.msg }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       \uD0ED 2: \uB514\uBC14\uC774\uC2A4 \uBAA9\uB85D
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div v-if="tab==='devices'">
    <div class="card">
      <div class="toolbar">
        <span class="list-title">\uB4F1\uB85D \uB514\uBC14\uC774\uC2A4 (mb_device_token)</span>
        <div style="margin-left:auto;display:flex;gap:6px">
          <button v-if="devices.selected.length" class="btn btn_send btn-sm" @click="handleBtnAction('send-to-selected')" :disabled="result.loading">
            {{ result.loading ? '\u23F3' : ('\u2709\uFE0F \uC120\uD0DD ' + devices.selected.length + '\uAC74 \uBC1C\uC1A1') }}
          </button>
          <button class="btn btn_search btn-sm" :disabled="result.loadingDev" @click="handleBtnAction('devices-load')">
            {{ result.loadingDev ? '\u23F3' : '\uC870\uD68C' }}
          </button>
        </div>
      </div>
      <!-- \uD544\uD130 -->
      <div style="padding:12px;border-bottom:1px solid #f0f0f0">
        <bo-form-area plain-readonly :columns="deviceFilterFormColumns" :form="devices.filter" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      </div>
      <div style="padding:12px">
        <div v-if="!devices.rows.length" style="color:#999;font-size:12px;text-align:center;padding:24px">
          [\uC870\uD68C] \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694
        </div>
        <div v-else style="max-height:480px;overflow-y:auto">
          <bo-grid :columns="devicesGridColumns" :rows="devices.rows" :show-row-num="true" :pager="devices.pager">
            <template #dev-check="{ row }">
              <input type="checkbox" :checked="isDeviceSelected(row)" @change="handleBtnAction('device-toggle', row)" />
            </template>
            <template #memberId="{ row }">
              <span class="title-link" @click="handleBtnAction('member-use', row.memberId)">{{ row.memberId }}</span>
            </template>
            <template #dev-action="{ row }">
              <button class="btn btn_row_edit" @click="handleBtnAction('device-use', row)">\uC120\uD0DD</button>
            </template>
          </bo-grid>
        </div>
        <div style="margin-top:8px;font-size:12px;color:#888">
          \uC804\uCCB4 {{ devices.pager.pageTotalCount }}\uAC74 | \uC120\uD0DD {{ devices.selected.length }}\uAC74
        </div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       \uD0ED 3: \uBC1C\uC1A1 \uC774\uB825 (cmh_push_log)
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div v-if="tab==='history'">
    <div class="card">
      <div class="toolbar">
        <span class="list-title">\uBC1C\uC1A1 \uC774\uB825 (cmh_push_log)</span>
        <div style="margin-left:auto">
          <button class="btn btn_search btn-sm" :disabled="result.loadingHist" @click="handleBtnAction('hist-load')">
            {{ result.loadingHist ? '\u23F3' : '\uC870\uD68C' }}
          </button>
        </div>
      </div>
      <!-- \uD544\uD130 -->
      <div style="padding:12px;border-bottom:1px solid #f0f0f0">
        <bo-form-area plain-readonly :columns="histFilterFormColumns" :form="hist.filter" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      </div>
      <div style="padding:12px">
        <div v-if="!hist.rows.length" style="color:#999;font-size:12px;text-align:center;padding:24px">
          [\uC870\uD68C] \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694
        </div>
        <div v-else style="max-height:520px;overflow-y:auto">
          <bo-grid :columns="histGridColumns" :rows="hist.rows" :show-row-num="true" :pager="hist.pager" />
        </div>
        <div style="margin-top:8px;font-size:12px;color:#888">\uC804\uCCB4 {{ hist.pager.pageTotalCount }}\uAC74</div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       \uD0ED 4: \uC2E4\uC2DC\uAC04 \uC218\uC2E0 (WebSocket \uBAA8\uB2C8\uD130)
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div v-if="tab==='receive'">
    <div class="card" style="margin-bottom:12px">
      <div class="toolbar">
        <span class="list-title">\uC778\uC571 \uBA54\uC2DC\uC9C0 \uC2E4\uC2DC\uAC04 \uC218\uC2E0 \uBAA8\uB2C8\uD130 (WebSocket)</span>
        <div style="margin-left:auto;display:flex;align-items:center;gap:6px">
          <span class="badge" :class="recvLog.connected?'badge-green':'badge-gray'">
            {{ recvLog.connected ? '\u25CF \uC5F0\uACB0\uB428' : '\u25CB \uBBF8\uC5F0\uACB0' }}
          </span>
          <button v-if="!recvLog.connected" class="btn btn_apply btn-sm" @click="handleBtnAction('ws-connect')">\u{1F50C} \uC5F0\uACB0</button>
          <button v-else class="btn btn_cancel btn-sm" @click="handleBtnAction('ws-disconnect')">\uC5F0\uACB0 \uD574\uC81C</button>
          <button class="btn btn_reset btn-sm" @click="handleBtnAction('recv-clear')">\uB85C\uADF8 \uC9C0\uC6B0\uAE30</button>
        </div>
      </div>
      <div style="padding:12px">
        <div style="font-size:12px;color:#666;margin-bottom:8px;padding:6px 8px;background:#f8f9fa;border-radius:4px">
          \uC0C1\uD0DC: <strong>{{ recvLog.wsStatus }}</strong>
        </div>
        <div style="height:380px;overflow-y:auto;border:1px solid #e5e7eb;border-radius:6px;padding:10px;background:#111;font-family:monospace;font-size:12px;display:flex;flex-direction:column;gap:4px">
          <div v-if="!recvLog.msgs.length" style="color:#555;text-align:center;margin:auto">\uC5F0\uACB0 \uD6C4 \uC778\uC571 \uBA54\uC2DC\uC9C0\uAC00 \uC5EC\uAE30 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4</div>
          <div v-for="(m, idx) in recvLog.msgs" :key="idx" style="color:#d1d5db">
            <span style="color:#6b7280">[{{ m.time }}]</span>
            <span style="color:#60a5fa;margin:0 6px">{{ m.ch }}</span>
            {{ m.body }}
          </div>
        </div>
      </div>
    </div>

    <!-- \uC218\uC2E0 \uD655\uC778 \uBC29\uBC95 \uC548\uB0B4 -->
    <div class="card">
      <div class="toolbar"><span class="list-title">\uC218\uC2E0 \uD655\uC778 \uBC29\uBC95</span></div>
      <div style="padding:12px">
        <bo-grid :columns="receiveGuideGridColumns" :rows="receiveGuideRows" :show-row-num="false">
          <template #guide-channel="{ row }">
            <span :class="fnChannelBadge(row.channel)">{{ row.channel }}</span>
          </template>
        </bo-grid>
        <div style="margin-top:12px;padding:8px;background:#f0f4ff;border-radius:4px;font-size:12px">
          <b>\u{1F4CB} \uBC1C\uC1A1 \uC774\uB825 \uD0ED</b> \u2014 <code>cmh_push_log</code> \uD14C\uC774\uBE14\uC758 \uBAA8\uB4E0 \uCC44\uB110 \uBC1C\uC1A1 \uC774\uB825\uC744 \uC870\uD68C\uD569\uB2C8\uB2E4.<br>
          \uBC31\uC5D4\uB4DC \uC5D4\uB4DC\uD3EC\uC778\uD2B8: <code>POST /api/co/ext/app-msg-send/send</code> (\uD1B5\uD569 \uBC1C\uC1A1 \uC624\uCF00\uC2A4\uD2B8\uB808\uC774\uD130)<br>
          \uCC44\uB110\uBCC4 \uC11C\uBE44\uC2A4: <code>CmPushSendService</code> (FCM/APNs) \xB7 <code>CmSmsSendService</code> \xB7 <code>CmKakaoSendService</code> \xB7 WebSocket Broker
        </div>
      </div>
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.push.,app.sms.,app.kakao." default-prop-key-filter="app.push" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/all" default-key-filter="app.push" />

</div>`};
