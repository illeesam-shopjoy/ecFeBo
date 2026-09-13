window.DashboardBoAppMonitor={name:"DashboardBoAppMonitor",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(F){const{ref:f,reactive:O,computed:c,onMounted:ae,onUnmounted:ne}=Vue,p=O({infoPanel:null}),D=300,b=[{value:600*1e3,label:"10\uBD84"},{value:1800*1e3,label:"30\uBD84"},{value:3600*1e3,label:"1\uC2DC\uAC04"},{value:7200*1e3,label:"2\uC2DC\uAC04"},{value:360*60*1e3,label:"6\uC2DC\uAC04"},{value:720*60*1e3,label:"12\uC2DC\uAC04"},{value:1440*60*1e3,label:"1\uC77C"},{value:2880*60*1e3,label:"2\uC77C"}],H=b[b.length-1].value,w=f(b[0].value),N=f(b[0].value),ie=c(()=>{var e;return((e=b.find(o=>o.value===w.value))==null?void 0:e.label)||""}),re=c(()=>{var e;return((e=b.find(o=>o.value===N.value))==null?void 0:e.label)||""}),L=[{value:600*1e3,label:"10\uBD84"},{value:900*1e3,label:"15\uBD84"},{value:1200*1e3,label:"20\uBD84"},{value:1800*1e3,label:"30\uBD84"},{value:3600*1e3,label:"1\uC2DC\uAC04"},{value:7200*1e3,label:"2\uC2DC\uAC04"},{value:360*60*1e3,label:"6\uC2DC\uAC04"},{value:720*60*1e3,label:"12\uC2DC\uAC04"},{value:1440*60*1e3,label:"1\uC77C"}],le=L[1].value,J=1800*1e3,T=f("recent"),d=f(le),u=f(Date.now()),se=e=>{const o=new Date(e);return o.getFullYear()+"-"+String(o.getMonth()+1).padStart(2,"0")+"-"+String(o.getDate()).padStart(2,"0")},v=O({date:"",hour:0,min:0}),y=O({date:"",hour:0,min:0}),h=(e,o)=>{const a=new Date(o);e.date=se(o),e.hour=a.getHours(),e.min=a.getMinutes()},Y=e=>{if(!e.date)return NaN;const[o,a,t]=e.date.split("-").map(Number);return new Date(o,a-1,t,e.hour,e.min,0,0).getTime()};h(v,Date.now()-J),h(y,Date.now());const ce=Array.from({length:24},(e,o)=>o),pe=Array.from({length:60},(e,o)=>o),k=f(!1),de=e=>{T.value=e,e==="range"&&(d.value=J,u.value=Date.now(),k.value=!1,h(y,u.value),h(v,u.value-d.value)),z()},fe=e=>{d.value=Number(e),k.value=!1,T.value==="range"&&(u.value=Date.now(),h(y,u.value),h(v,u.value-d.value)),z()},ue=()=>{const e=Y(v),o=Y(y);if(!e||!o||o<=e){F.showToast("\uC885\uB8CC\uC2DC\uAC01\uC740 \uC2DC\uC791\uC2DC\uAC01\uBCF4\uB2E4 \uC774\uD6C4\uC5EC\uC57C \uD569\uB2C8\uB2E4.","error");return}u.value=o,d.value=o-e,k.value=!L.some(a=>a.value===d.value),z()},me=c(()=>k.value?"custom":d.value),_=[{max:500,key:"good",label:"\uC88B\uC74C",color:"#10b981"},{max:1500,key:"ok",label:"\uBCF4\uD1B5",color:"#3b82f6"},{max:1/0,key:"warn",label:"\uACBD\uACE0",color:"#f59e0b"}],q=e=>_.find(o=>e<o.max)||_[_.length-1],m=[{key:"good",label:"\uC88B\uC74C",color:"#10b981"},{key:"ok",label:"\uBCF4\uD1B5",color:"#3b82f6"},{key:"warn",label:"\uACBD\uACE0",color:"#f59e0b"},{key:"err",label:"\uC624\uB958",color:"#ef4444"}],C=e=>e.err?3:e.rt<500?0:e.rt<1500?1:2,be=e=>m[C(e)],he={XVIEW:{compId:"(\uC5C6\uC74C)",chartType:"scatter + brush (X-View \uD788\uD2B8\uB9F5)",url:"(\uB85C\uCEEC \uBAA9\uC5C5 \u2014 \uC2E4\uC2DC\uAC04 \uC0DD\uC131)",dataKey:"xviewData",fields:"t(timestamp ms) / rt(\uC751\uB2F5\uC2DC\uAC04ms) / err(boolean) / method(GET/POST) / url / uiNm / cmdNm",desc:"\uBE0C\uB77C\uC6B0\uC800 \uB85C\uCEEC\uC5D0\uC11C 800\uAC1C \uB79C\uB364 \uD3EC\uC778\uD2B8 \uC0DD\uC131. 2\uCD08\uB9C8\uB2E4 \uC0C8 \uD3EC\uC778\uD2B8 \uCD94\uAC00. \uC2E4\uC81C \uAD6C\uD604 \uC2DC APM \uC5D0\uC774\uC804\uD2B8 \uB370\uC774\uD130 \uC5F0\uB3D9 \uD544\uC694.",tag:`<co-echart
  :option="cfOptXview"
  height="360px"
  @brush-selected="onXviewBrush"
/>`,attrs:[{k:":option",v:"cfOptXview",d:"scatter series \u2014 4\uB2E8\uACC4(\uC88B\uC74C \uCD08\uB85D/\uBCF4\uD1B5 \uD30C\uB791/\uACBD\uACE0 \uC624\uB80C\uC9C0/\uC624\uB958 \uC801\uC0C9\xD7\uB9C8\uCEE4), brush toolbox \uD3EC\uD568"},{k:"height",v:'"360px"',d:"\uB4DC\uB9B4\uB2E4\uC6B4 \uC601\uC5ED \uD3EC\uD568 \uB192\uC774"},{k:"@brush-selected",v:"onXviewBrush",d:"\uBE0C\uB7EC\uC2DC \uC120\uD0DD \uC2DC \uD2B8\uB79C\uC7AD\uC158 \uBAA9\uB85D \uC0C8\uCC3D(postMessage) emit \uD578\uB4E4\uB7EC"}]},TOPURL:{compId:"(\uC5C6\uC74C)",chartType:"bar (\uC218\uD3C9 \uB9C9\uB300)",url:"(\uB85C\uCEEC \uBAA9\uC5C5 \u2014 xviewData \uC9D1\uACC4)",dataKey:"xviewData",fields:"url / uiNm / cmdNm \uBCC4 \uD638\uCD9C\uAC74\uC218 \uC9D1\uACC4 (\uC120\uD0DD \uAE30\uAC04)",desc:"\uC120\uD0DD\uD55C \uAE30\uAC04(10\uBD84~2\uC77C) \uD2B8\uB79C\uC7AD\uC158\uC744 URL \uAE30\uC900 \uC9D1\uACC4\uD574 \uD638\uCD9C\uB7C9 \uC0C1\uC704 10\uAC1C\uB97C \uD45C\uC2DC.",tag:`<co-echart
  :option="cfOptTopUrl"
  height="260px"
/>`,attrs:[{k:":option",v:"cfOptTopUrl",d:"bar horizontal \u2014 url \uBCC4 count \uB0B4\uB9BC\uCC28\uC21C Top10, topUrlRange \uAE30\uAC04 \uD544\uD130"},{k:"height",v:'"260px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},RTTOP:{compId:"(\uC5C6\uC74C)",chartType:"bar (\uC218\uD3C9 \uB9C9\uB300, 3\uB2E8\uACC4 \uC0C9\uC0C1)",url:"(\uB85C\uCEEC \uBAA9\uC5C5 \u2014 xviewData \uC9D1\uACC4)",dataKey:"xviewData",fields:"url \uBCC4 \uD3C9\uADE0 \uC751\uB2F5\uC2DC\uAC04(ms) \uC9D1\uACC4 (\uC120\uD0DD \uAE30\uAC04)",desc:"\uC120\uD0DD\uD55C \uAE30\uAC04(10\uBD84~2\uC77C) \uD2B8\uB79C\uC7AD\uC158\uC744 URL \uAE30\uC900 \uD3C9\uADE0 \uC751\uB2F5\uC2DC\uAC04 \uC9D1\uACC4\uD574 \uC0C1\uC704 10\uAC1C \uD45C\uC2DC. \uC88B\uC74C(<500ms \uCD08\uB85D)/\uBCF4\uD1B5(<1500ms \uD30C\uB791)/\uACBD\uACE0(\u22651500ms \uC624\uB80C\uC9C0) 3\uB2E8\uACC4 \uC0C9\uC0C1 (\uD3C9\uADE0\uAC12 \uC9D1\uACC4\uB77C \uAC1C\uBCC4 \uC624\uB958 \uD50C\uB798\uADF8\uB294 \uBC18\uC601\uB418\uC9C0 \uC54A\uC74C).",tag:`<co-echart
  :option="cfOptRtTop"
  height="260px"
/>`,attrs:[{k:":option",v:"cfOptRtTop",d:"bar horizontal \u2014 url \uBCC4 \uD3C9\uADE0 \uC751\uB2F5\uC2DC\uAC04 \uB0B4\uB9BC\uCC28\uC21C Top10, rtTopRange \uAE30\uAC04 \uD544\uD130, itemStyle.color \uCF5C\uBC31\uC73C\uB85C 4\uB2E8\uACC4 \uC0C9\uC0C1"},{k:"height",v:'"260px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},RTTREND:{compId:"(\uC5C6\uC74C)",chartType:"line (10\uCD08 \uBC84\uD0B7 \uD3C9\uADE0/\uCD5C\uB300 \uC751\uB2F5\uC2DC\uAC04)",url:"(\uB85C\uCEEC \uBAA9\uC5C5 \u2014 xviewData \uC9D1\uACC4)",dataKey:"xviewData",fields:"t(10\uCD08 \uBC84\uD0B7) / avgRt / maxRt",desc:"10\uCD08 \uB2E8\uC704\uB85C \uD3C9\uADE0\xB7\uCD5C\uB300 \uC751\uB2F5\uC2DC\uAC04\uC744 \uC9D1\uACC4\uD55C \uCD94\uC774\uC120.",tag:`<co-echart
  :option="cfOptRtTrend"
  height="220px"
/>`,attrs:[{k:":option",v:"cfOptRtTrend",d:"line 2 series \u2014 \uD3C9\uADE0/\uCD5C\uB300 \uC751\uB2F5\uC2DC\uAC04"},{k:"height",v:'"220px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]},STATUSPIE:{compId:"(\uC5C6\uC74C)",chartType:"pie (\uD30C\uC774 \uCC28\uD2B8)",url:"(\uB85C\uCEEC \uBAA9\uC5C5 \u2014 xviewData \uC9D1\uACC4)",dataKey:"xviewData",fields:"\uC0C1\uD0DC\uBCC4(\uC88B\uC74C/\uBCF4\uD1B5/\uACBD\uACE0/\uC624\uB958) \uBE44\uC911",desc:"\uCD5C\uADFC 10\uBD84 \uD2B8\uB79C\uC7AD\uC158\uC758 \uC0C1\uD0DC \uBD84\uD3EC(4\uB2E8\uACC4 \uB4F1\uAE09, \uC624\uB958\uB294 err \uD50C\uB798\uADF8 \uAE30\uC900).",tag:`<co-echart
  :option="cfOptStatusPie"
  height="220px"
/>`,attrs:[{k:":option",v:"cfOptStatusPie",d:"pie series \u2014 \uC88B\uC74C/\uBCF4\uD1B5/\uACBD\uACE0/\uC624\uB958 4\uC885 \uC0C9\uC0C1"},{k:"height",v:'"220px"',d:"\uCE94\uBC84\uC2A4 \uB192\uC774"}]}},xe=(e,o,a,t,n)=>{e.stopPropagation();const l=e.currentTarget.getBoundingClientRect(),S=window.scrollY||0,i=window.scrollX||0;if(p.infoPanel&&p.infoPanel.title===o){p.infoPanel=null;return}let r=null;try{if(a){const g=a();r=g!==null&&typeof g=="object"&&"value"in g?g.value:g}}catch{}const x=n?he[n]:null;p.infoPanel={title:o,optJson:r?JSON.stringify(r,null,2):"(\uC5C6\uC74C)",dataJson:t?JSON.stringify(t,null,2):"(\uC5C6\uC74C)",src:x,apiParams:null,tab:"opt",top:l.bottom+S+6,left:Math.min(l.left+i,window.innerWidth-560)}},$=e=>{p.infoPanel&&(p.infoPanel.tab=e)},K=()=>{p.infoPanel=null},ge=(e,o={})=>{if(e==="info-close"){p.infoPanel=null;return}if(e==="infoTab-set"){$(o);return}if(e==="clipboard-copy"){o&&navigator.clipboard.writeText(o);return}console.warn("[handleBtnAction] unknown cmd:",e)},X=[{method:"GET",url:"/bo/ec/mb/member/page",uiNm:"\uD68C\uC6D0\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C",fileNm:"MbMemberMng.js",funcNm:"handleSearchList"},{method:"GET",url:"/bo/ec/pd/prod/page",uiNm:"\uC0C1\uD488\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C",fileNm:"PdProdMng.js",funcNm:"handleSearchList"},{method:"GET",url:"/bo/ec/od/order/page",uiNm:"\uC8FC\uBB38\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C",fileNm:"OdOrderMng.js",funcNm:"handleSearchData"},{method:"GET",url:"/bo/ec/od/claim/page",uiNm:"\uD074\uB808\uC784\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C",fileNm:"OdClaimMng.js",funcNm:"handleSearchList"},{method:"GET",url:"/bo/ec/pm/coupon/page",uiNm:"\uCFE0\uD3F0\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C",fileNm:"PmCouponMng.js",funcNm:"handleSearchList"},{method:"GET",url:"/bo/ec/cm/dashboard/data",uiNm:"\uB300\uC2DC\uBCF4\uB4DC",cmdNm:"\uC870\uD68C",fileNm:"DashboardBoEc01.js",funcNm:"loadDashboard"},{method:"GET",url:"/bo/sy/user/page",uiNm:"\uC0AC\uC6A9\uC790\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C",fileNm:"SyUserMng.js",funcNm:"handleSearchList"},{method:"GET",url:"/bo/sy/code/list",uiNm:"\uCF54\uB4DC\uAD00\uB9AC",cmdNm:"\uCF54\uB4DC\uBAA9\uB85D",fileNm:"SyCodeMng.js",funcNm:"fnLoadCodeList"},{method:"POST",url:"/bo/ec/pd/prod/save/base",uiNm:"\uC0C1\uD488\uAD00\uB9AC",cmdNm:"\uC800\uC7A5",fileNm:"PdProdDtl.js",funcNm:"handleSave"},{method:"POST",url:"/bo/ec/od/order/save/base",uiNm:"\uC8FC\uBB38\uAD00\uB9AC",cmdNm:"\uC800\uC7A5",fileNm:"OdOrderDtl.js",funcNm:"handleSave"},{method:"POST",url:"/bo/ec/mb/member/save/base",uiNm:"\uD68C\uC6D0\uAD00\uB9AC",cmdNm:"\uC800\uC7A5",fileNm:"MbMemberDtl.js",funcNm:"handleSave"},{method:"GET",url:"/bo/ec/dp/ui/list",uiNm:"\uC804\uC2DC\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C",fileNm:"DpDispUiMng.js",funcNm:"handleSearchList"},{method:"GET",url:"/bo/ec/pm/event/page",uiNm:"\uC774\uBCA4\uD2B8\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C",fileNm:"PmEventMng.js",funcNm:"handleSearchList"},{method:"GET",url:"/co/sy/code/groups",uiNm:"\uACF5\uD1B5",cmdNm:"\uCF54\uB4DC\uC870\uD68C",fileNm:"boCodeStore.js",funcNm:"saLoadCodes"},{method:"GET",url:"/bo/sy/menu/list",uiNm:"\uBA54\uB274\uAD00\uB9AC",cmdNm:"\uBAA9\uB85D\uC870\uD68C",fileNm:"SyMenuMng.js",funcNm:"handleSearchList"}],P={};X.forEach(e=>{P[e.url]=e});const R=e=>{const o=P[e];return o?o.uiNm+" > "+o.cmdNm:""},E=e=>P[e]&&P[e].method||"",j=[{appNm:"ecadminapi-bo",ip:"10.42.1.11",podNm:"ecadminapi-bo-7d4f9c8b6-x2k4p"},{appNm:"ecadminapi-bo",ip:"10.42.2.14",podNm:"ecadminapi-bo-7d4f9c8b6-h8m2q"},{appNm:"ecadminapi-bo",ip:"10.42.3.17",podNm:"ecadminapi-bo-7d4f9c8b6-r5t9v"},{appNm:"ecadminapi-fo",ip:"10.42.1.22",podNm:"ecadminapi-fo-5b6c8d9f4-m3n7q"},{appNm:"ecadminapi-fo",ip:"10.42.2.25",podNm:"ecadminapi-fo-5b6c8d9f4-p9k2s"},{appNm:"ecadminapi-batch",ip:"10.42.3.31",podNm:"ecadminapi-batch-6f7d8c9b2-w4x8t"}],ve=["\uC804\uCCB4",...new Set(j.map(e=>e.appNm))],I=f("\uC804\uCCB4"),ye=e=>{I.value=e,z()};let U=0;const Se=e=>{const o=new Date(e),a=o.getFullYear()+String(o.getMonth()+1).padStart(2,"0")+String(o.getDate()).padStart(2,"0"),t=String(o.getHours()).padStart(2,"0")+String(o.getMinutes()).padStart(2,"0")+String(o.getSeconds()).padStart(2,"0");return U=(U+1)%1e4,a+"_"+t+"_"+String(U).padStart(4,"0")},Q=[{httpStatus:500,errorCode:"INTERNAL_SERVER_ERROR",message:"Connection timeout while calling downstream service",stackTrace:`java.net.SocketTimeoutException: Read timed out
  at java.base/sun.nio.ch.NioSocketImpl.timedRead(NioSocketImpl.java:283)
  at com.shopjoy.ecadminapi.base.service.HttpClientService.call(HttpClientService.java:142)
  at com.shopjoy.ecadminapi.bo.controller.BoController.handle(BoController.java:58)`},{httpStatus:500,errorCode:"DB_QUERY_ERROR",message:"org.postgresql.util.PSQLException: could not obtain a connection from the pool",stackTrace:`org.postgresql.util.PSQLException: could not obtain a connection from the pool
  at com.zaxxer.hikari.pool.HikariPool.createTimeoutException(HikariPool.java:696)
  at com.zaxxer.hikari.pool.HikariPool.getConnection(HikariPool.java:197)
  at com.shopjoy.ecadminapi.base.repository.qrydsl.impl.QRepositoryImpl.selectPageData(QRepositoryImpl.java:118)`},{httpStatus:400,errorCode:"VALIDATION_ERROR",message:"searchValue \uB294 100\uC790 \uC774\uB0B4\uC5EC\uC57C \uD569\uB2C8\uB2E4.",stackTrace:`jakarta.validation.ConstraintViolationException: searchValue \uB294 100\uC790 \uC774\uB0B4\uC5EC\uC57C \uD569\uB2C8\uB2E4.
  at com.shopjoy.ecadminapi.common.exception.GlobalExceptionHandler.handleValidation(GlobalExceptionHandler.java:64)`},{httpStatus:401,errorCode:"TOKEN_EXPIRED",message:"\uC778\uC99D \uD1A0\uD070\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",stackTrace:`io.jsonwebtoken.ExpiredJwtException: JWT expired at 2026-07-25T09:12:03Z
  at com.shopjoy.ecadminapi.auth.JwtTokenProvider.validateToken(JwtTokenProvider.java:87)
  at com.shopjoy.ecadminapi.common.security.JwtAuthFilter.doFilterInternal(JwtAuthFilter.java:45)`},{httpStatus:403,errorCode:"ACCESS_DENIED",message:"\uC811\uADFC \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",stackTrace:`com.shopjoy.ecadminapi.common.exception.CmBizException: \uC811\uADFC \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
  at com.shopjoy.ecadminapi.common.security.SecurityUtil.checkRole(SecurityUtil.java:73)`},{httpStatus:409,errorCode:"DATA_CONFLICT",message:"\uC774\uBBF8 \uCC98\uB9AC\uB41C \uC694\uCCAD\uC785\uB2C8\uB2E4. (rowStatus \uCDA9\uB3CC)",stackTrace:`com.shopjoy.ecadminapi.common.exception.CmBizException: \uC774\uBBF8 \uCC98\uB9AC\uB41C \uC694\uCCAD\uC785\uB2C8\uB2E4.
  at com.shopjoy.ecadminapi.base.service.BaseService.saveList(BaseService.java:96)`},{httpStatus:503,errorCode:"SERVICE_UNAVAILABLE",message:"Redis \uCE90\uC2DC \uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",stackTrace:`io.lettuce.core.RedisConnectionException: Unable to connect to localhost:6379
  at com.shopjoy.ecadminapi.cache.RedisCacheService.get(RedisCacheService.java:39)`}],we=()=>{const e=Q[Math.floor(Math.random()*Q.length)];return{httpStatus:e.httpStatus,errorCode:e.errorCode,message:e.message,stackTrace:e.stackTrace}},M=e=>Math.floor(Math.random()*16**e).toString(16).padStart(e,"0"),B=e=>{var l;const o=Math.random()<.75?Math.random()*500:Math.random()<.7?500+Math.random()*2500:3e3+Math.random()*5e3,a=o>5e3&&Math.random()<.3,t=X[Math.floor(Math.random()*X.length)],n=j[Math.floor(Math.random()*j.length)];return{t:e,rt:Math.round(o),err:a,method:t.method,url:t.url,uiNm:t.uiNm,cmdNm:t.cmdNm,errorInfo:a?we():null,fileNm:t.fileNm,funcNm:t.funcNm,lineNo:20+Math.floor(Math.random()*480),traceId:Se(e),siteId:((l=window.boCommonFilter)==null?void 0:l.siteId)||"",buyerId:"BUYER_"+String(1+Math.floor(Math.random()*50)).padStart(3,"0"),licenseCode:"eyJzaXRl"+M(6)+"..."+M(6),userAgent:"Mozilla/5.0..."+M(6),authToken:"Bearer e..."+M(6),appNm:n.appNm,serverIp:n.ip,podNm:n.podNm}},s=f((()=>{const e=Date.now(),o=[];for(let a=0;a<800;a++)o.push(B(e-Math.random()*10*60*1e3));for(let a=0;a<2e3;a++)o.push(B(e-Math.random()*H));return o})());let G=null;const Ne=c(()=>s.value.slice(0,10)),Z=c(()=>I.value==="\uC804\uCCB4"?s.value:s.value.filter(e=>e.appNm===I.value)),Te=c(()=>{const e=T.value==="range"?u.value:Date.now(),o=e-d.value,a=Z.value.map(t=>[t.t,t.rt,C(t),t.url||"",t.uiNm||"",t.cmdNm||""]);return{tooltip:{trigger:"item",formatter:t=>{const n=new Date(t.data[0]),l=n.getHours()+":"+String(n.getMinutes()).padStart(2,"0")+":"+String(n.getSeconds()).padStart(2,"0"),S=(m[t.data[2]]||{}).label||"",i=t.data[3]||"",r=t.data[4]||"",x=t.data[5]||"";return l+"<br/>\uC751\uB2F5\uC2DC\uAC04: <b>"+t.data[1].toFixed(0)+"ms</b><br/>\uC0C1\uD0DC: "+S+(i?'<br/><span style="color:#7dd3fc;font-family:monospace;font-size:11px;">'+i+"</span>":"")+(r?'<br/><span style="color:#c4b5fd;">X-UI-Nm: <b>'+r+"</b></span>":"")+(x?' &nbsp;<span style="color:#6ee7b7;">X-Cmd-Nm: <b>'+x+"</b></span>":"")}},toolbox:{feature:{dataZoom:{yAxisIndex:"none",title:{zoom:"\uBC94\uC704 \uB4DC\uB798\uADF8",back:"\uCD08\uAE30\uD654"}},restore:{title:"\uCD08\uAE30\uD654"}},right:16,top:6},brush:{toolbox:["rect","clear"],xAxisIndex:0,seriesIndex:0,throttleType:"debounce",throttleDelay:300,outOfBrush:{colorAlpha:1},inBrush:{borderColor:"#111",borderWidth:1.5,symbolSize:8}},grid:{top:48,right:24,bottom:48,left:64},xAxis:{type:"time",min:o,max:e,axisLabel:{fontSize:10,color:"#888",formatter:t=>{const n=new Date(t);return n.getHours()+":"+String(n.getMinutes()).padStart(2,"0")}},splitLine:{lineStyle:{color:"#f0f0f0"}}},yAxis:{type:"value",name:"\uC751\uB2F5\uC2DC\uAC04(ms)",nameTextStyle:{fontSize:10,color:"#888"},min:0,axisLabel:{fontSize:10,color:"#888",formatter:t=>t+"ms"},splitLine:{lineStyle:{color:"#f0f0f0"}}},visualMap:{show:!0,type:"piecewise",categories:[0,1,2,3],dimension:2,pieces:[{value:0,label:"\uC88B\uC74C (<500ms)",color:m[0].color},{value:1,label:"\uBCF4\uD1B5 (<1500ms)",color:m[1].color},{value:2,label:"\uACBD\uACE0 (\u22651500ms)",color:m[2].color},{value:3,label:"\uC624\uB958",color:m[3].color}],right:16,bottom:40,textStyle:{fontSize:10}},series:[{type:"scatter",data:a,symbolSize:(t,n)=>n.data[2]===3?7.5:5.2,symbol:(t,n)=>n.data[2]===3?"path://M4,0 L10,0 L24,14 L24,20 L18,20 L4,6 Z M24,0 L24,6 L10,20 L4,20 L4,14 L18,0 Z":"circle",encode:{x:0,y:1,itemName:0},markLine:{symbol:"none",silent:!0,label:{show:!1},data:[{yAxis:1500,lineStyle:{type:"dashed",color:m[2].color,width:1.5}}]}}]}});let V=null;const ke=e=>{V=e,e.dispatchAction({type:"takeGlobalCursor",key:"brush",brushOption:{brushType:"rect",brushMode:"single"}})},z=()=>{V&&V.dispatchAction({type:"brush",command:"clear",areas:[]})},ee=window.location.origin;let A=null;const te=e=>{e.origin!==ee||!e.data||e.data.type!=="xview-ready"||!A||e.source!==A||A.postMessage({type:"xview-data",rows:oe},ee)};let oe=[];const Pe=e=>{const o=new Date(e.t),a=be(e);return{time:o.getHours()+":"+String(o.getMinutes()).padStart(2,"0")+":"+String(o.getSeconds()).padStart(2,"0"),rt:e.rt,status:a.label,statusColor:a.color,method:e.method||"",url:e.url||"",uiNm:e.uiNm||"",cmdNm:e.cmdNm||"",err:!!e.err,errorInfo:e.err&&e.errorInfo?{httpStatus:e.errorInfo.httpStatus,errorCode:e.errorInfo.errorCode,message:e.errorInfo.message,stackTrace:e.errorInfo.stackTrace}:null,fileNm:e.fileNm||"",funcNm:e.funcNm||"",lineNo:e.lineNo||"",traceId:e.traceId||"",siteId:e.siteId||"",buyerId:e.buyerId||"",licenseCode:e.licenseCode||"",userAgent:e.userAgent||"",authToken:e.authToken||"",appNm:e.appNm||"",serverIp:e.serverIp||"",podNm:e.podNm||""}},W=e=>{let o=e.map(Pe).sort((a,t)=>t.rt-a.rt);o.length&&(o.length>D&&(F.showToast("\uC120\uD0DD\uD55C \uD2B8\uB79C\uC7AD\uC158\uC774 "+o.length+"\uAC74\uC73C\uB85C \uB108\uBB34 \uB9CE\uC544 \uC751\uB2F5\uC2DC\uAC04 \uC0C1\uC704 "+D+"\uAC74\uB9CC \uD45C\uC2DC\uD569\uB2C8\uB2E4.","warning"),o=o.slice(0,D)),oe=o,A=window.open(window.pageUrl("bo-dash-appMon-xviewReal-boxlist-pop.html"),"xviewBoxList","width=1248,height=816,resizable=yes,scrollbars=yes"))},Re=e=>{const o=e.batch&&e.batch[0];if(!o)return;const a=o.selected&&o.selected[0],t=a&&a.dataIndex;!t||!t.length||W(t.map(n=>Z.value[n]).filter(Boolean))},Ee=e=>{const o=e&&e.name;if(!o)return;const a=Date.now()-w.value;W(s.value.filter(t=>t.url===o&&t.t>=a))},Ie=e=>{const o=e&&e.name;if(!o)return;const a=Date.now()-N.value;W(s.value.filter(t=>t.url===o&&t.t>=a))},Me=c(()=>{const e=Date.now()-w.value,o={};s.value.forEach(t=>{t.t>=e&&(o[t.url]=(o[t.url]||0)+1)});const a=Object.entries(o).sort((t,n)=>n[1]-t[1]).slice(0,10).reverse();return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t=>{const n=t[0],l=R(n.name);return n.name+(l?"<br/>"+l:"")+"<br/>\uD638\uCD9C\uAC74\uC218: <b>"+n.value+"</b>"}},grid:{top:8,right:24,bottom:24,left:200},xAxis:{type:"value",axisLabel:{fontSize:10,color:"#888"},splitLine:{lineStyle:{color:"#f0f0f0"}}},yAxis:{type:"category",data:a.map(t=>t[0]),axisLabel:{fontSize:9.5,color:"#666",fontFamily:"monospace",formatter:t=>(E(t)?"["+E(t)+"] ":"")+t}},series:[{type:"bar",data:a.map(t=>t[1]),itemStyle:{color:"#6366f1",borderRadius:[0,4,4,0]},barMaxWidth:16,label:{show:!0,position:"insideLeft",fontSize:9.5,color:"#fff",fontWeight:700,formatter:t=>R(a[t.dataIndex][0])+"  ("+t.value+"\uAC74)"}}]}}),ze=c(()=>{const e=Date.now()-N.value,o={};s.value.forEach(t=>{t.t<e||(o[t.url]||(o[t.url]={sum:0,cnt:0}),o[t.url].sum+=t.rt,o[t.url].cnt+=1)});const a=Object.entries(o).map(([t,n])=>[t,Math.round(n.sum/n.cnt)]).sort((t,n)=>n[1]-t[1]).slice(0,10).reverse();return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:t=>{const n=t[0],l=R(n.name);return n.name+(l?"<br/>"+l:"")+"<br/>\uD3C9\uADE0 \uC751\uB2F5\uC2DC\uAC04: <b>"+n.value+"ms</b> ("+q(n.value).label+")"}},grid:{top:8,right:24,bottom:24,left:200},xAxis:{type:"value",name:"ms",nameTextStyle:{fontSize:10,color:"#888"},axisLabel:{fontSize:10,color:"#888"},splitLine:{lineStyle:{color:"#f0f0f0"}}},yAxis:{type:"category",data:a.map(t=>t[0]),axisLabel:{fontSize:9.5,color:"#666",fontFamily:"monospace",formatter:t=>(E(t)?"["+E(t)+"] ":"")+t}},series:[{type:"bar",data:a.map(t=>t[1]),itemStyle:{color:t=>q(t.value).color,borderRadius:[0,4,4,0]},barMaxWidth:16,label:{show:!0,position:"insideLeft",fontSize:9.5,color:"#fff",fontWeight:700,formatter:t=>R(a[t.dataIndex][0])+"  ("+t.value+"ms)"}}]}}),Ae=c(()=>{const e=Date.now(),o=10*1e3,a=e-600*1e3,t={};s.value.forEach(i=>{const r=Math.floor(i.t/o)*o;t[r]||(t[r]=[]),t[r].push(i.rt)});const n=Object.keys(t).map(Number).sort((i,r)=>i-r),l=n.map(i=>[i,Math.round(t[i].reduce((r,x)=>r+x,0)/t[i].length)]),S=n.map(i=>[i,Math.max(...t[i])]);return{tooltip:{trigger:"axis"},legend:{data:["\uD3C9\uADE0","\uCD5C\uB300"],top:0,textStyle:{fontSize:10}},grid:{top:28,right:24,bottom:28,left:56},xAxis:{type:"time",min:a,max:e,axisLabel:{fontSize:10,color:"#888",formatter:i=>{const r=new Date(i);return r.getHours()+":"+String(r.getMinutes()).padStart(2,"0")}},splitLine:{show:!1}},yAxis:{type:"value",axisLabel:{fontSize:10,color:"#888",formatter:i=>i+"ms"},splitLine:{lineStyle:{color:"#f0f0f0"}}},series:[{name:"\uD3C9\uADE0",type:"line",data:l,smooth:!0,showSymbol:!1,lineStyle:{color:"#3b82f6",width:2}},{name:"\uCD5C\uB300",type:"line",data:S,smooth:!0,showSymbol:!1,lineStyle:{color:"#ef4444",width:1.5,type:"dashed"}}]}}),Oe=c(()=>{const e=[0,0,0,0];return s.value.forEach(o=>{e[C(o)]++}),{tooltip:{trigger:"item",formatter:o=>o.name+": "+o.value+"\uAC74 ("+o.percent+"%)"},legend:{orient:"vertical",right:8,top:"center",textStyle:{fontSize:10}},series:[{type:"pie",radius:["40%","68%"],center:["38%","50%"],data:m.map((o,a)=>({name:o.label,value:e[a],itemStyle:{color:o.color}})),label:{show:!0,position:"inside",formatter:"{c}\uAC74",fontSize:10,color:"#fff",fontWeight:"bold"},emphasis:{label:{show:!0,fontSize:11}}}]}}),De=[{key:"k",label:"\uC18D\uC131",style:"width:38%;",cellStyle:"color:#7dd3fc;font-size:10.5px;white-space:nowrap;font-weight:700;"},{key:"v",label:"\uAC12",style:"width:28%;",cellStyle:"color:#fbbf24;font-size:10.5px;white-space:nowrap;"},{key:"d",label:"\uC124\uBA85",cellStyle:"color:#cdd6f4;font-size:10.5px;"}];return ae(async()=>{document.addEventListener("click",K),window.addEventListener("message",te),G=setInterval(()=>{const e=Date.now();s.value=[...s.value.filter(o=>o.t>e-H),B(e)]},2e3)}),ne(()=>{G&&clearInterval(G),document.removeEventListener("click",K),window.removeEventListener("message",te)}),{uiState:p,attrsGridColumns:De,cfXviewSample:Ne,XVIEW_RANGE_OPTS:L,xviewMode:T,xviewRange:d,fnSetXviewMode:de,fnSetXviewRange:fe,XVIEW_APP_TABS:ve,xviewAppFilter:I,fnSetXviewAppFilter:ye,xviewRangeStart:v,xviewRangeEnd:y,HOUR_OPTS:ce,MIN_OPTS:pe,cfXviewRangeSelectValue:me,fnApplyXviewDtRange:ue,RANGE_OPTS:b,topUrlRange:w,rtTopRange:N,cfTopUrlRangeLabel:ie,cfRtTopRangeLabel:re,cfOptXview:Te,cfOptTopUrl:Me,cfOptRtTop:ze,cfOptRtTrend:Ae,cfOptStatusPie:Oe,onXviewBrush:Re,fnXviewChartReady:ke,onTopUrlClick:Ee,onRtTopClick:Ie,fnOpenInfo:xe,fnInfoTab:$,handleBtnAction:ge}},template:`
<bo-page title="App\uBAA8\uB2C8\uD130\uB300\uC2DC\uBCF4\uB4DC"
  desc-summary="API \uD2B8\uB79C\uC7AD\uC158 \uC751\uB2F5\uC2DC\uAC04\xB7\uD638\uCD9C\uB7C9\xB7\uC5D0\uB7EC\uC728\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uBAA8\uB2C8\uD130\uB9C1\uD569\uB2C8\uB2E4.">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">

    <!-- 1) X-View \uC2E4\uC2DC\uAC04 \uD788\uD2B8\uB9F5 -->
    <bo-container card-style="padding:14px;" style="grid-column:1/-1;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'X-View \uD788\uD2B8\uB9F5',()=>cfOptXview,cfXviewSample,'XVIEW')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F525}</button>
        X-View \uC2E4\uC2DC\uAC04 \uD2B8\uB79C\uC7AD\uC158 \uD788\uD2B8\uB9F5
        <span v-if="xviewMode==='recent'" style="font-size:10px;font-weight:400;color:#10b981;background:#f0fdf4;padding:2px 8px;border-radius:10px;border:1px solid #bbf7d0;">\u25CF LIVE</span>
        <span v-else style="font-size:10px;font-weight:400;color:#b45309;background:#fffbeb;padding:2px 8px;border-radius:10px;border:1px solid #fde68a;">\u23F8 \uAE30\uAC04\uACE0\uC815</span>

        <div style="display:flex;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
          <button
            @click="fnSetXviewMode('recent')"
            :style="{ padding:'3px 10px', fontSize:'11px', fontWeight:700, border:'none', cursor:'pointer',
              background: xviewMode==='recent' ? '#e8587a' : '#fafbfc', color: xviewMode==='recent' ? '#fff' : '#666' }">\uCD5C\uADFC\uC870\uD68C</button>
          <button
            @click="fnSetXviewMode('range')"
            :style="{ padding:'3px 10px', fontSize:'11px', fontWeight:700, border:'none', cursor:'pointer',
              background: xviewMode==='range' ? '#e8587a' : '#fafbfc', color: xviewMode==='range' ? '#fff' : '#666' }">\uAE30\uAC04\uC870\uD68C</button>
        </div>
        <select :value="cfXviewRangeSelectValue" @change="fnSetXviewRange($event.target.value)" class="form-control" style="width:auto;font-size:11px;padding:2px 6px;height:24px;">
          <option v-for="o in XVIEW_RANGE_OPTS" :key="o.value" :value="o.value">{{ o.label }}</option>
          <option v-if="xviewMode==='range'" value="custom" disabled>\uC9C1\uC811\uC785\uB825</option>
        </select>

        <!-- \uAE30\uAC04\uC870\uD68C \uBAA8\uB4DC: [\uC77C][\uC2DC][\uBD84] ~ [\uC77C][\uC2DC][\uBD84] \uC808\uB300 \uAD6C\uAC04 \uC9C0\uC815 (24\uC2DC\uAC04\uC81C, \uB0A0\uC9DC=date input + \uC2DC\uBD84=select) -->
        <div v-if="xviewMode==='range'" style="display:flex;align-items:center;gap:4px;">
          <input type="date" v-model="xviewRangeStart.date" class="form-control" style="font-size:11px;padding:2px 4px;height:24px;width:118px;" />
          <select v-model.number="xviewRangeStart.hour" class="form-control" style="font-size:11px;padding:2px 2px;height:24px;width:50px;">
            <option v-for="h in HOUR_OPTS" :key="h" :value="h">{{ String(h).padStart(2,'0') }}</option>
          </select>
          <span style="color:#999;">:</span>
          <select v-model.number="xviewRangeStart.min" @change="fnApplyXviewDtRange" class="form-control" style="font-size:11px;padding:2px 2px;height:24px;width:50px;">
            <option v-for="m in MIN_OPTS" :key="m" :value="m">{{ String(m).padStart(2,'0') }}</option>
          </select>
          <span style="color:#999;font-size:11px;">~</span>
          <input type="date" v-model="xviewRangeEnd.date" class="form-control" style="font-size:11px;padding:2px 4px;height:24px;width:118px;" />
          <select v-model.number="xviewRangeEnd.hour" class="form-control" style="font-size:11px;padding:2px 2px;height:24px;width:50px;">
            <option v-for="h in HOUR_OPTS" :key="h" :value="h">{{ String(h).padStart(2,'0') }}</option>
          </select>
          <span style="color:#999;">:</span>
          <select v-model.number="xviewRangeEnd.min" @change="fnApplyXviewDtRange" class="form-control" style="font-size:11px;padding:2px 2px;height:24px;width:50px;">
            <option v-for="m in MIN_OPTS" :key="m" :value="m">{{ String(m).padStart(2,'0') }}</option>
          </select>
          <button class="btn btn_search" style="font-size:11px;padding:3px 10px;height:24px;" @click="fnApplyXviewDtRange">\uC801\uC6A9</button>
        </div>

        <span style="flex:1;"></span>
        <span style="font-size:10px;color:#888;">\uBC15\uC2A4 \uB4DC\uB798\uADF8 \u2192 \uD2B8\uB79C\uC7AD\uC158 \uBAA9\uB85D \uC0C8\uCC3D \xB7 \u2715 \uD45C\uC2DC = \uC624\uB958</span>
        <span style="font-size:10px;color:#888;">\u2501 \u2501 1500ms \uACBD\uACE0</span>
      </div>

      <!-- \uC571(\uC11C\uBE44\uC2A4) \uD544\uD130 \uD0ED \u2014 \uC804\uCCB4 | app1 | app2 | ... (\uC5EC\uB7EC app \uC2DC\uB098\uB9AC\uC624 \uB300\uC751) -->
      <div v-if="XVIEW_APP_TABS.length > 2" style="display:flex;align-items:center;gap:4px;margin-bottom:8px;">
        <span style="font-size:10px;color:#888;margin-right:2px;">app</span>
        <button v-for="a in XVIEW_APP_TABS" :key="a"
          @click="fnSetXviewAppFilter(a)"
          :style="{ padding:'3px 12px', fontSize:'11px', fontWeight:700, borderRadius:'12px', cursor:'pointer',
            border: xviewAppFilter===a ? '1px solid #6366f1' : '1px solid #e5e7eb',
            background: xviewAppFilter===a ? '#eef2ff' : '#fafbfc',
            color: xviewAppFilter===a ? '#4338ca' : '#666' }">{{ a }}</button>
      </div>

      <co-echart :option="cfOptXview" height="360px" @brush-selected="onXviewBrush" @ready="fnXviewChartReady" />
    </bo-container>

    <!-- 2) \uD638\uCD9C\uB7C9 Top10 -->
    <bo-container card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'API \uD638\uCD9C\uB7C9 Top10',()=>cfOptTopUrl,null,'TOPURL')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F4CA}</button>
        API \uD638\uCD9C\uB7C9 Top10
        <select v-model="topUrlRange" class="form-control" style="width:auto;font-size:11px;padding:2px 6px;height:24px;">
          <option v-for="o in RANGE_OPTS" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
        <span style="flex:1;"></span>
        <span style="font-size:10px;color:#888;">\uCD5C\uADFC {{ cfTopUrlRangeLabel }}</span>
        <span style="font-size:10px;color:#888;">\uB9C9\uB300 \uD074\uB9AD \u2192 \uD2B8\uB79C\uC7AD\uC158 \uBAA9\uB85D \uC0C8\uCC3D</span>
      </div>
      <co-echart :option="cfOptTopUrl" height="260px" @click="onTopUrlClick" />
    </bo-container>

    <!-- 3) \uC751\uB2F5\uC2DC\uAC04 Top10 -->
    <bo-container card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'API \uC751\uB2F5\uC2DC\uAC04 Top10',()=>cfOptRtTop,null,'RTTOP')" title="\uD56D\uBAA9 \uC815\uBCF4">\u23F1</button>
        API \uC751\uB2F5\uC2DC\uAC04 Top10
        <select v-model="rtTopRange" class="form-control" style="width:auto;font-size:11px;padding:2px 6px;height:24px;">
          <option v-for="o in RANGE_OPTS" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
        <span style="flex:1;"></span>
        <span style="font-size:10px;color:#888;">\uCD5C\uADFC {{ cfRtTopRangeLabel }}</span>
        <span style="font-size:10px;color:#888;">\u{1F7E2} \uC88B\uC74C &lt;500ms \xB7 \u{1F535} \uBCF4\uD1B5 &lt;1500ms \xB7 \u{1F7E0} \uACBD\uACE0 \u22651500ms</span>
        <span style="font-size:10px;color:#888;">\uB9C9\uB300 \uD074\uB9AD \u2192 \uD2B8\uB79C\uC7AD\uC158 \uBAA9\uB85D \uC0C8\uCC3D</span>
      </div>
      <co-echart :option="cfOptRtTop" height="260px" @click="onRtTopClick" />
    </bo-container>

    <!-- 4) \uC0C1\uD0DC \uBD84\uD3EC -->
    <bo-container card-style="padding:14px;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uD2B8\uB79C\uC7AD\uC158 \uC0C1\uD0DC \uBD84\uD3EC',()=>cfOptStatusPie,null,'STATUSPIE')" title="\uD56D\uBAA9 \uC815\uBCF4">\u{1F7E2}</button>
        \uD2B8\uB79C\uC7AD\uC158 \uC0C1\uD0DC \uBD84\uD3EC (\uCD5C\uADFC 10\uBD84)
      </div>
      <co-echart :option="cfOptStatusPie" height="220px" />
    </bo-container>

    <!-- 5) \uC751\uB2F5\uC2DC\uAC04 \uCD94\uC774 -->
    <bo-container card-style="padding:14px;" style="grid-column:1/-1;">
      <div style="font-size:12px;font-weight:800;color:#444;margin-bottom:6px;display:flex;align-items:center;gap:4px;">
        <button class="dash-info-btn" @click.stop="fnOpenInfo($event,'\uC751\uB2F5\uC2DC\uAC04 \uCD94\uC774',()=>cfOptRtTrend,null,'RTTREND')" title="\uD56D\uBAA9 \uC815\uBCF4">\u23F1</button>
        \uC751\uB2F5\uC2DC\uAC04 \uCD94\uC774 (10\uCD08 \uBC84\uD0B7 \uD3C9\uADE0/\uCD5C\uB300)
      </div>
      <co-echart :option="cfOptRtTrend" height="220px" />
    </bo-container>

  </div>

  <!-- \uD56D\uBAA9 \uC815\uBCF4 \uD31D\uC624\uBC84 -->
  <teleport to="body">
    <div v-if="uiState.infoPanel"
      @click.stop
      :style="{position:'absolute',top:uiState.infoPanel.top+'px',left:uiState.infoPanel.left+'px',width:'560px',background:'#fff',borderRadius:'10px',boxShadow:'0 8px 32px rgba(0,0,0,0.18)',border:'1px solid #e5e7eb',zIndex:9999,fontFamily:'monospace',overflow:'hidden'}">
      <!-- \uD31D\uC624\uBC84 \uD5E4\uB354 -->
      <div style="display:flex;align-items:center;padding:10px 14px;background:linear-gradient(135deg,#1a1a2e,#2d2d44);color:#fff;gap:8px;">
        <span style="font-size:13px;font-weight:700;">\u{1F50D} {{ uiState.infoPanel.title }}</span>
        <span style="flex:1;"></span>
        <button @click="handleBtnAction('info-close')"
          style="background:rgba(255,255,255,0.15);border:none;color:#fff;border-radius:50%;width:22px;height:22px;cursor:pointer;font-size:12px;display:flex;align-items:center;justify-content:center;">\u2715</button>
      </div>
      <!-- \uD0ED \uBC14 (3\uD0ED) -->
      <div style="display:flex;border-bottom:1px solid #e5e7eb;background:#f8fafc;">
        <button @click="handleBtnAction('infoTab-set', 'src')"
          :style="{flex:1,padding:'7px 4px',fontSize:'11px',fontWeight:700,border:'none',cursor:'pointer',borderBottom:uiState.infoPanel.tab==='src'?'2px solid #10b981':'2px solid transparent',color:uiState.infoPanel.tab==='src'?'#10b981':'#666',background:'transparent'}">
          \u{1F4DD} \uC18C\uC2A4\uC815\uBCF4
        </button>
        <button @click="handleBtnAction('infoTab-set', 'opt')"
          :style="{flex:1,padding:'7px 4px',fontSize:'11px',fontWeight:700,border:'none',cursor:'pointer',borderBottom:uiState.infoPanel.tab==='opt'?'2px solid #e8587a':'2px solid transparent',color:uiState.infoPanel.tab==='opt'?'#e8587a':'#666',background:'transparent'}">
          \u2699 ECharts Option
        </button>
        <button @click="handleBtnAction('infoTab-set', 'data')"
          :style="{flex:1,padding:'7px 4px',fontSize:'11px',fontWeight:700,border:'none',cursor:'pointer',borderBottom:uiState.infoPanel.tab==='data'?'2px solid #3b82f6':'2px solid transparent',color:uiState.infoPanel.tab==='data'?'#3b82f6':'#666',background:'transparent'}">
          \u{1F4CA} \uC6D0\uC2DC \uB370\uC774\uD130
        </button>
      </div>
      <!-- \uC18C\uC2A4\uC815\uBCF4 \uD0ED \uBCF8\uBB38 -->
      <div v-if="uiState.infoPanel.tab==='src'" style="padding:14px 16px;font-size:11px;line-height:1.7;max-height:400px;overflow-y:auto;background:#fafbfc;display:flex;flex-direction:column;gap:12px;">
        <template v-if="uiState.infoPanel.src">
          <!-- API \uC139\uC158 -->
          <div>
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">API \uC5D4\uB4DC\uD3EC\uC778\uD2B8</div>
            <div style="background:#1e1e2e;color:#7dd3fc;border-radius:6px;padding:8px 12px;font-size:11px;">{{ uiState.infoPanel.src.url }}</div>
          </div>
          <!-- \uCC28\uD2B8 \uC720\uD615 -->
          <div>
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">\uCC28\uD2B8 \uC720\uD615</div>
            <div style="display:inline-flex;align-items:center;gap:6px;background:#fff0f4;border:1px solid #fecdd3;border-radius:6px;padding:5px 12px;color:#e8587a;font-size:11px;font-weight:700;">
              \u{1F4CA} {{ uiState.infoPanel.src.chartType }}
            </div>
          </div>
          <!-- \uB370\uC774\uD130 \uD544\uB4DC -->
          <div>
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">\uB370\uC774\uD130 \uD544\uB4DC</div>
            <div style="background:#1e1e2e;color:#86efac;border-radius:6px;padding:8px 12px;font-size:10.5px;line-height:1.8;">{{ uiState.infoPanel.src.fields }}</div>
          </div>
          <!-- \uC124\uBA85 -->
          <div>
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">\uD56D\uBAA9 \uC124\uBA85</div>
            <div style="background:#f0fdf4;border-left:3px solid #10b981;border-radius:0 6px 6px 0;padding:8px 12px;color:#065f46;font-size:11px;line-height:1.7;font-family:sans-serif;">{{ uiState.infoPanel.src.desc }}</div>
          </div>
          <!-- \uD15C\uD50C\uB9BF \uB9C8\uD06C\uC5C5 -->
          <div v-if="uiState.infoPanel.src.tag">
            <div style="font-size:10px;font-weight:700;color:#888;letter-spacing:0.5px;margin-bottom:6px;text-transform:uppercase;">\uD15C\uD50C\uB9BF \uB9C8\uD06C\uC5C5</div>
            <div style="background:#1e1e2e;border-radius:6px;overflow:hidden;">
              <pre style="margin:0;padding:10px 14px;font-size:11px;line-height:1.7;color:#e2a7f0;white-space:pre;overflow-x:auto;">{{ uiState.infoPanel.src.tag }}</pre>
            </div>
            <!-- \uC18D\uC131 \uB9E4\uD551 \uD14C\uC774\uBE14 -->
            <div v-if="uiState.infoPanel.src.attrs" style="margin-top:8px;background:#1e1e2e;border-radius:6px;overflow:hidden;">
              <div style="padding:5px 12px;background:rgba(255,255,255,0.05);font-size:9.5px;font-weight:700;color:#888;letter-spacing:0.5px;text-transform:uppercase;">\uC18D\uC131 \uB9E4\uD551</div>
              <bo-grid bare :columns="attrsGridColumns" :rows="uiState.infoPanel.src.attrs" row-key="k" />
            </div>
          </div>
        </template>
        <div v-else style="color:#aaa;padding:20px;text-align:center;">\uC18C\uC2A4\uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
      </div>
      <!-- ECharts Option / \uC6D0\uC2DC \uB370\uC774\uD130 \uD0ED \uBCF8\uBB38 -->
      <div v-if="uiState.infoPanel.tab==='opt' || uiState.infoPanel.tab==='data'" style="position:relative;">
        <pre :style="{margin:0,padding:'12px 14px',fontSize:'10.5px',lineHeight:'1.55',maxHeight:'360px',overflowY:'auto',overflowX:'auto',background:'#1e1e2e',color:'#cdd6f4',whiteSpace:'pre',tabSize:2}">{{ uiState.infoPanel.tab==='opt' ? uiState.infoPanel.optJson : uiState.infoPanel.dataJson }}</pre>
        <button @click="handleBtnAction('clipboard-copy', uiState.infoPanel.tab==='opt'?uiState.infoPanel.optJson:uiState.infoPanel.dataJson)"
          title="\uD074\uB9BD\uBCF4\uB4DC \uBCF5\uC0AC"
          style="position:absolute;top:8px;right:10px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:#aaa;border-radius:5px;padding:2px 8px;font-size:10px;cursor:pointer;">
          \u{1F4CB} \uBCF5\uC0AC
        </button>
      </div>
    </div>
  </teleport>

</bo-page>

<style>
.dash-info-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 0 2px;
  line-height: 1;
  border-radius: 4px;
  transition: transform 0.15s, background 0.15s;
  flex-shrink: 0;
}
.dash-info-btn:hover {
  transform: scale(1.25);
  background: rgba(232,88,122,0.10);
}
.dash-info-btn:active {
  transform: scale(0.95);
}
</style>
`};
