(function(){const{ref:K,reactive:T,computed:s,onMounted:Z}=Vue,q="illeesam@gmail.com",k="010-3805-0206",{useSimulSetup:J,makeLogCols:Q,makeBaseCfgColumns:X,logPanelHtml:Je,statCardHtml:Qe}=window.ZdSimulBase,$="\uAE40\uC774\uBC15\uCD5C\uC815\uAC15\uC870\uC724\uC7A5\uC784\uD55C\uC624\uC11C\uC2E0\uAD8C\uD669\uC548\uC1A1\uB958\uC804\uD64D".split(""),ee=["\uBBFC\uC900","\uC11C\uC5F0","\uB3C4\uC724","\uC11C\uC544","\uC2DC\uC6B0","\uC9C0\uC6B0","\uC9C0\uD638","\uD558\uC740","\uC740\uC11C","\uC900\uC11C","\uC218\uC544","\uC9C0\uBBFC","\uCC44\uC6D0","\uC724\uC11C","\uC9C0\uC720","\uC5F0\uC6B0","\uAC00\uC740","\uB098\uC5F0","\uC218\uBE48","\uC608\uB9B0"],E=["gmail.com","naver.com","kakao.com","daum.net","hotmail.com","yahoo.com","icloud.com","outlook.com"],x=[{cd:"BASIC",label:"\uC77C\uBC18",badge:"badge-gray",color:"#94a3b8"},{cd:"SILVER",label:"\uC2E4\uBC84",badge:"badge-blue",color:"#3b82f6"},{cd:"GOLD",label:"\uACE8\uB4DC",badge:"badge-orange",color:"#f59e0b"},{cd:"VIP",label:"VIP",badge:"badge-purple",color:"#a855f7"}],M=[{cd:"M",label:"\uB0A8\uC131",color:"#60a5fa"},{cd:"F",label:"\uC5EC\uC131",color:"#f472b6"}],N=[{cd:"KR",label:"\uD55C\uAD6D",icon:"\u{1F1F0}\u{1F1F7}",color:"#3b82f6"},{cd:"CN",label:"\uC911\uAD6D",icon:"\u{1F1E8}\u{1F1F3}",color:"#ef4444"},{cd:"JP",label:"\uC77C\uBCF8",icon:"\u{1F1EF}\u{1F1F5}",color:"#f97316"},{cd:"US",label:"\uC601\uC5B4\uAD8C",icon:"\u{1F1FA}\u{1F1F8}",color:"#8b5cf6"},{cd:"FR",label:"\uD504\uB791\uC2A4",icon:"\u{1F1EB}\u{1F1F7}",color:"#06b6d4"},{cd:"IN",label:"\uC778\uB3C4",icon:"\u{1F1EE}\u{1F1F3}",color:"#f59e0b"}],A=[{cd:"10",label:"10\uB300",color:"#f472b6"},{cd:"20",label:"20\uB300",color:"#a78bfa"},{cd:"30",label:"30\uB300",color:"#60a5fa"},{cd:"40",label:"40\uB300",color:"#34d399"},{cd:"50",label:"50\uB300",color:"#fbbf24"},{cd:"60",label:"60\uB300+",color:"#94a3b8"}],P=[{cd:"SEARCH",label:"\uAC80\uC0C9\uC720\uC785",icon:"\u{1F50D}",color:"#3b82f6"},{cd:"SNS",label:"SNS\uAD11\uACE0",icon:"\u{1F4F1}",color:"#a855f7"},{cd:"REFERRAL",label:"\uCD94\uCC9C\uC778",icon:"\u{1F465}",color:"#22c55e"},{cd:"DIRECT",label:"\uC9C1\uC811\uC811\uC18D",icon:"\u{1F310}",color:"#f59e0b"},{cd:"EMAIL",label:"\uC774\uBA54\uC77C",icon:"\u{1F4E7}",color:"#06b6d4"},{cd:"APP",label:"\uC571\uC124\uCE58",icon:"\u{1F4F2}",color:"#f97316"}],I=[{cd:"IMPULSIVE",label:"\uCDA9\uB3D9\uAD6C\uB9E4\uD615",icon:"\u26A1",color:"#ef4444"},{cd:"COMPARE",label:"\uBE44\uAD50\uD0D0\uC0C9\uD615",icon:"\u{1F50E}",color:"#3b82f6"},{cd:"LOYAL",label:"\uB2E8\uACE8\uC7AC\uAD6C\uB9E4\uD615",icon:"\u2764\uFE0F",color:"#a855f7"},{cd:"PRICE",label:"\uAC00\uACA9\uBBFC\uAC10\uD615",icon:"\u{1F4B0}",color:"#22c55e"},{cd:"PREMIUM",label:"\uD504\uB9AC\uBBF8\uC5C4\uC120\uD638",icon:"\u{1F451}",color:"#f59e0b"}],h=[{cd:"NONE",label:"\uC77C\uBC18\uAC00\uC785",color:"#94a3b8",icon:"\u{1F4E7}"},{cd:"GOOGLE",label:"Google",color:"#ef4444",icon:"\u{1F534}"},{cd:"KAKAO",label:"Kakao",color:"#f59e0b",icon:"\u{1F7E1}"},{cd:"NAVER",label:"Naver",color:"#22c55e",icon:"\u{1F7E2}"}],v=[{cd:"NONE",label:"\uC77C\uBC18\uACE0\uAC1D",color:"#94a3b8"},{cd:"STAFF",label:"\uC9C1\uC6D0",color:"#3b82f6"},{cd:"PARTNER",label:"\uD611\uB825\uC9C1\uC6D0",color:"#a855f7"}],W=[{cd:"ACTIVE",label:"\uC815\uC0C1"},{cd:"SUSPENDED",label:"\uC815\uC9C0"},{cd:"DORMANT",label:"\uD734\uBA74"}],G=[{value:"grade",label:"\uB4F1\uAE09 \uBCC0\uACBD"},{value:"status",label:"\uC0C1\uD0DC \uBCC0\uACBD"},{value:"phone",label:"\uC804\uD654\uBC88\uD638 \uAC31\uC2E0"},{value:"memo",label:"\uBA54\uBAA8 \uC5C5\uB370\uC774\uD2B8"}];window.ZdSimulMemberMng={name:"ZdSimulMemberMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(oe){const e=T({fixedGrade:"__weighted__",gradeWeights:{BASIC:50,SILVER:25,GOLD:15,VIP:10},fixedDomain:"__weighted__",domainWeights:{"gmail.com":35,"naver.com":30,"kakao.com":15,"daum.net":8,"hotmail.com":5,"yahoo.com":3,"icloud.com":2,"outlook.com":2},fixedGender:"__weighted__",genderWeights:{M:48,F:52},fixedAgeGroup:"__weighted__",ageGroupWeights:{10:5,20:35,30:30,40:20,50:8,60:2},fixedCountry:"__weighted__",countryWeights:{KR:70,CN:10,JP:8,US:6,FR:3,IN:3},fixedChannel:"__weighted__",channelWeights:{SEARCH:35,SNS:25,REFERRAL:15,DIRECT:15,EMAIL:5,APP:5},fixedBuyType:"__weighted__",buyTypeWeights:{IMPULSIVE:30,COMPARE:25,LOYAL:20,PRICE:15,PREMIUM:10},fixedEmpType:"__weighted__",empTypeWeights:{NONE:85,STAFF:12,PARTNER:3},fixedSnsType:"__weighted__",snsTypeWeights:{NONE:50,GOOGLE:25,KAKAO:15,NAVER:10},statusOnCreate:"ACTIVE",loginPwd:"1111",randomGender:!0,agentRangeMin:20,agentRangeMax:45,updateType:"grade",emailVerified:!0,snsLinkYn:!1,memoOnCreate:!1,fixedMemberId:"",fixedMemberNm:""}),r=(o,i,t)=>{const u=Object.values(i).reduce((n,m)=>n+Number(m),0)||1;let _=Math.random()*u;for(const n of o){const m=t?t(n):n.cd||n.value||n;if(_-=Number(i[m]||0),_<=0)return n}return o[0]},ie=()=>e.fixedDomain&&e.fixedDomain!=="__weighted__"?e.fixedDomain:r(E,e.domainWeights,o=>o),R=()=>e.fixedGrade&&e.fixedGrade!=="__weighted__"?x.find(o=>o.cd===e.fixedGrade)||x[0]:r(x,e.gradeWeights),te=()=>e.fixedGender&&e.fixedGender!=="__weighted__"?e.fixedGender:r(M,e.genderWeights).cd,de=()=>e.fixedAgeGroup&&e.fixedAgeGroup!=="__weighted__"?e.fixedAgeGroup:r(A,e.ageGroupWeights).cd,ne=()=>e.fixedCountry&&e.fixedCountry!=="__weighted__"?e.fixedCountry:r(N,e.countryWeights).cd,ae=()=>e.fixedChannel&&e.fixedChannel!=="__weighted__"?e.fixedChannel:r(P,e.channelWeights).cd,le=()=>e.fixedBuyType&&e.fixedBuyType!=="__weighted__"?e.fixedBuyType:r(I,e.buyTypeWeights).cd,se=()=>e.fixedEmpType&&e.fixedEmpType!=="__weighted__"?e.fixedEmpType:r(v,e.empTypeWeights).cd,re=()=>e.fixedSnsType&&e.fixedSnsType!=="__weighted__"?e.fixedSnsType:r(h,e.snsTypeWeights).cd,pe=o=>{const i=parseInt(o,10),t=i,u=i===60?75:i+9;return Math.floor(Math.random()*(u-t+1))+t},ce=o=>o[Math.floor(Math.random()*o.length)],Xe=(o,i)=>Math.floor(Math.random()*(i-o+1))+o,ge=J({domain:"\uD68C\uC6D0",uiNm:"\uD68C\uC6D0 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uD68C\uC6D0",showToast:oe.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:o,namePrefix:i,simulYn:t,suffix:u,randInt:_,pick:n})=>{var L,D,Y,V,U,B;const m=n($),Ye=n(ee);if(o==="create"){const g="sim_"+String(Date.now()).slice(-5)+"@"+ie(),l=R(),p=te(),y=de(),a=pe(y),Ve=ne(),Ue=ae(),Be=le(),C=se(),f=re(),F=q,Fe=k,j=(i||"\uC2DC\uBBAC")+m+Ye,je=((L=v.find(S=>S.cd===C))==null?void 0:L.label)||C,He=((D=h.find(S=>S.cd===f))==null?void 0:D.label)||f,Ke=["\uB098\uC774:"+a+"\uC138","\uB4F1\uAE09:"+l.label,"\uAD6D\uAC00:"+Ve,"\uCC44\uB110:"+Ue,"\uC131\uD5A5:"+Be,"\uC9C1\uC6D0:"+je,"SNS:"+He],H={memberNm:j,loginId:g,loginPwd:e.loginPwd||"1111",memberEmail:F,memberPhone:Fe,memberGender:p,gradeCd:l.cd,memberStatusCd:e.statusOnCreate,emailVerifiedYn:e.emailVerified?"Y":"N",snsLinkYn:f!=="NONE"||e.snsLinkYn?"Y":"N",snsProvider:f!=="NONE"?f.toLowerCase():null,empTypeCd:C,memberMemo:e.memoOnCreate?"[\uC2DC\uBBAC] "+Ke.join(" / "):"",siteId:b.value.siteId||null,memberGradeId:b.value.memberGradeId||null,simulYn:t||"Y"},w=await boApi.post("/bo/zd/simul/member/create",H,coUtil.cofApiHdr("\uD68C\uC6D0\uC2DC\uBBAC","\uC0DD\uC131")),Ze=((V=(Y=w==null?void 0:w.data)==null?void 0:Y.data)==null?void 0:V.memberId)||g,qe=p==="M"?"\uB0A8":"\uC5EC";return{ok:!0,desc:"["+l.label+"/"+qe+"/"+a+"\uC138] "+j+" / "+F,meta:{id:Ze,grade:l.label,params:H}}}else{let c;if(e.fixedMemberId)c={memberId:e.fixedMemberId,memberNm:e.fixedMemberNm};else{const a=((B=(U=(await boApiSvc.mbMember.getPage({pageNo:1,pageSize:50,memberStatusCd:"ACTIVE"})).data)==null?void 0:U.data)==null?void 0:B.pageList)||[];if(!a.length)return{ok:!1,reason:"\uC218\uC815\uD560 ACTIVE \uD68C\uC6D0 \uC5C6\uC74C"};c=n(a)}const g=e.updateType;let l={},p="";if(g==="grade"){const a=R();l.gradeCd=a.cd,p="\uB4F1\uAE09\u2192"+a.label}else if(g==="status"){const a=ce(W);l.memberStatusCd=a.cd,p="\uC0C1\uD0DC\u2192"+a.label}else g==="phone"?(l.memberPhone=k,p="\uC804\uD654\uBC88\uD638 \uBCC0\uACBD"):(l.memberMemo="[\uC2DC\uBBAC\uC218\uC815] "+new Date().toLocaleTimeString("ko-KR"),p="\uBA54\uBAA8 \uC5C5\uB370\uC774\uD2B8");const y={memberId:c.memberId,...l};return await boApi.post("/bo/zd/simul/member/update",y,coUtil.cofApiHdr("\uD68C\uC6D0\uC2DC\uBBAC","\uC218\uC815")),{ok:!0,desc:c.memberNm+" "+p,meta:{id:c.memberId,params:y}}}}}),{cfg:me,state:fe,logs:xe,logPager:be,logSearch:ue,cfIsRunning:ye,cfSuccessRate:he,onStart:ve,onStop:_e,onRunOnce:Ce,onPreview:we,onPreviewCreate:Se,onClearLog:Te,onSetLogPage:ke,onSearchLog:Ee}=ge,d=T({show:!1,searchValue:"",rows:[],loading:!1}),z=async()=>{var o,i;d.loading=!0;try{const t=await boApiSvc.mbMember.getPage({pageNo:1,pageSize:20,memberStatusCd:"ACTIVE",...d.searchValue?{searchValue:d.searchValue,searchType:"memberId,memberNm,loginId"}:{}});d.rows=((i=(o=t.data)==null?void 0:o.data)==null?void 0:i.pageList)||[]}catch{d.rows=[]}d.loading=!1},Me=async()=>{d.show=!0,d.searchValue="",await z()},O=o=>{var t;e.fixedMemberId=o.memberId;const i=o.memberNm||o.loginId||o.memberId;e.fixedMemberNm=(t=window.ZdSimulBase)!=null&&t._sanitize?window.ZdSimulBase._sanitize(i):i,d.show=!1},b=K({siteId:"",memberGradeId:"",gradeNm:""});Z(async()=>{var o;try{const i=await boApi.post("/bo/zd/simul/member/defaults",{},coUtil.cofApiHdr("\uD68C\uC6D0\uC2DC\uBBAC","defaults"));(o=i==null?void 0:i.data)!=null&&o.data&&Object.assign(b.value,i.data.data)}catch{}});const Ne=s(()=>Object.values(e.gradeWeights).reduce((o,i)=>o+Number(i),0)||1),Ae=s(()=>Object.values(e.domainWeights).reduce((o,i)=>o+Number(i),0)||1),Pe=s(()=>Object.values(e.genderWeights).reduce((o,i)=>o+Number(i),0)||1),Ie=s(()=>Object.values(e.ageGroupWeights).reduce((o,i)=>o+Number(i),0)||1),We=s(()=>Object.values(e.countryWeights).reduce((o,i)=>o+Number(i),0)||1),Ge=s(()=>Object.values(e.channelWeights).reduce((o,i)=>o+Number(i),0)||1),Re=s(()=>Object.values(e.buyTypeWeights).reduce((o,i)=>o+Number(i),0)||1),ze=s(()=>Object.values(e.empTypeWeights).reduce((o,i)=>o+Number(i),0)||1),Oe=s(()=>Object.values(e.snsTypeWeights).reduce((o,i)=>o+Number(i),0)||1),Le=Q(),De=X();return{fnCmPopupCallback:(o,i,t)=>{if(o==="cmPopup-member-pick"){d.show=!1,t!=null&&O(t);return}},cfg:me,domCfg:e,state:fe,logs:xe,logPager:be,cfIsRunning:ye,cfSuccessRate:he,memberDefaults:b,cfGradeTotal:Ne,cfDomainTotal:Ae,cfGenderTotal:Pe,cfAgeGroupTotal:Ie,cfCountryTotal:We,cfChannelTotal:Ge,cfBuyTypeTotal:Re,cfEmpTypeTotal:ze,cfSnsTypeTotal:Oe,logCols:Le,baseCfgColumns:De,createCfgColumns:[{key:"statusOnCreate",label:"\uCD08\uAE30 \uC0C1\uD0DC",type:"select",options:[{value:"ACTIVE",label:"\uC815\uC0C1"},{value:"DORMANT",label:"\uD734\uBA74"}]},{key:"loginPwd",label:"\uBE44\uBC00\uBC88\uD638",type:"text",placeholder:"bypass \uBE44\uBC00\uBC88\uD638 (\uAE30\uBCF8: 1111)",mono:!0},{key:"emailVerified",label:"\uC774\uBA54\uC77C \uC778\uC99D \uC644\uB8CC",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]},{key:"snsLinkYn",label:"SNS \uC5F0\uB3D9 \uD45C\uC2DC",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]},{key:"memoOnCreate",label:"\uBA54\uBAA8 \uC790\uB3D9 \uC0DD\uC131",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]}],updateCfgColumns:[{key:"updateType",label:"\uC218\uC815 \uC720\uD615",type:"select",options:G}],onStart:ve,onStop:_e,onRunOnce:Ce,onPreview:we,onPreviewCreate:Se,onClearLog:Te,onSetLogPage:ke,onSearchLog:Ee,logSearch:ue,onAgeMinChange:()=>{e.agentRangeMin>=e.agentRangeMax&&(e.agentRangeMin=e.agentRangeMax-1)},onAgeMaxChange:()=>{e.agentRangeMax<=e.agentRangeMin&&(e.agentRangeMax=e.agentRangeMin+1)},GRADES:x,DOMAINS:E,GENDERS:M,AGE_GROUPS:A,COUNTRIES:N,CHANNELS:P,BUY_TYPES:I,EMP_TYPES:v,SNS_TYPES:h,STATUSES_UPD:W,UPDATE_TYPES:G,memberPicker:d,onOpenMemberPicker:Me,onSelectMember:O,_loadMemberPicker:z}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F465} \uD68C\uC6D0 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <!-- \uC2E4\uD589 \uC81C\uC5B4 -->
  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#7c3aed,#a855f7)"
    accent-active="background:#ede9fe;border:1.5px solid #7c3aed;color:#6d28d9;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uC0DD\uC131 \uC635\uC158 (\uC804\uCCB4 \uD3ED) -->
  <div v-if="cfg.mode==='create'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F464} \uD68C\uC6D0 \uC0DD\uC131 \uC635\uC158</div>
    <bo-form-area :columns="createCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
  </div>

  <!-- \uAC00\uC911\uCE58 \uCE74\uB4DC \uD589 (\uD5891: \uB4F1\uAE09 / \uC774\uBA54\uC77C\uB3C4\uBA54\uC778 / \uC131\uBCC4) -->
  <div v-if="cfg.mode==='create'" style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <!-- \uB4F1\uAE09 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4CA} \uB4F1\uAE09 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedGrade" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="">-- \uC5C6\uC74C --</option>
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="g in GRADES" :key="g.cd" :value="g.cd">{{ g.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedGrade === '__weighted__'">
        <div v-for="g in GRADES" :key="g.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+g.color+';flex-shrink:0;display:inline-block;'"></span>
          <span :class="'badge '+g.badge" style="min-width:38px;text-align:center;font-size:11px;">{{ g.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.gradeWeights[g.cd]" :style="'flex:1;accent-color:'+g.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.gradeWeights[g.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.gradeWeights[g.cd]/cfGradeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="g in GRADES" :key="g.cd" :style="'flex:'+domCfg.gradeWeights[g.cd]+';transition:flex .2s;background:'+g.color+';'"></div>
        </div>
      </div>
    </div>
    <!-- \uC774\uBA54\uC77C \uB3C4\uBA54\uC778 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4E7} \uC774\uBA54\uC77C \uB3C4\uBA54\uC778 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedDomain" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="">-- \uC5C6\uC74C --</option>
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="d in DOMAINS" :key="d" :value="d">{{ d }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedDomain === '__weighted__'">
        <div v-for="(d, di) in DOMAINS" :key="d" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:hsl('+(di*37)+',65%,55%);flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:10px;color:#475569;min-width:78px;white-space:nowrap;">{{ d }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.domainWeights[d]" :style="'flex:1;accent-color:hsl('+(di*37)+',65%,55%);'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.domainWeights[d]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.domainWeights[d]/cfDomainTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="d in DOMAINS" :key="d" :style="'flex:'+domCfg.domainWeights[d]+';transition:flex .2s;background:hsl('+(DOMAINS.indexOf(d)*37)+',65%,55%);'"></div>
        </div>
      </div>
    </div>
    <!-- \uC131\uBCC4 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u26A7 \uC131\uBCC4 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedGender" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="g in GENDERS" :key="g.cd" :value="g.cd">{{ g.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedGender === '__weighted__'">
        <div v-for="g in GENDERS" :key="g.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+g.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:12px;min-width:20px;">{{ g.cd === 'M' ? '\u2642' : '\u2640' }}</span>
          <span style="font-size:11px;color:#475569;min-width:24px;">{{ g.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.genderWeights[g.cd]" :style="'flex:1;accent-color:'+g.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.genderWeights[g.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.genderWeights[g.cd]/cfGenderTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div :style="'flex:'+domCfg.genderWeights.M+';transition:flex .2s;background:#60a5fa;'"></div>
          <div :style="'flex:'+domCfg.genderWeights.F+';transition:flex .2s;background:#f472b6;'"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- \uAC00\uC911\uCE58 \uCE74\uB4DC \uD5892: \uC5F0\uB839\uB300 / \uAD6D\uAC00 / \uC720\uC785\uCC44\uB110 -->
  <div v-if="cfg.mode==='create'" style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <!-- \uC5F0\uB839\uB300 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F382} \uC5F0\uB839\uB300 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedAgeGroup" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="a in AGE_GROUPS" :key="a.cd" :value="a.cd">{{ a.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedAgeGroup === '__weighted__'">
        <div v-for="a in AGE_GROUPS" :key="a.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+a.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#475569;min-width:28px;">{{ a.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.ageGroupWeights[a.cd]" :style="'flex:1;accent-color:'+a.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.ageGroupWeights[a.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.ageGroupWeights[a.cd]/cfAgeGroupTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="a in AGE_GROUPS" :key="a.cd" :style="'flex:'+domCfg.ageGroupWeights[a.cd]+';transition:flex .2s;background:'+a.color+';'"></div>
        </div>
      </div>
    </div>
    <!-- \uAD6D\uAC00 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F30F} \uAD6D\uAC00 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedCountry" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="c in COUNTRIES" :key="c.cd" :value="c.cd">{{ c.icon }} {{ c.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedCountry === '__weighted__'">
        <div v-for="c in COUNTRIES" :key="c.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span style="font-size:12px;min-width:18px;">{{ c.icon }}</span>
          <span style="font-size:11px;color:#475569;min-width:38px;">{{ c.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.countryWeights[c.cd]" :style="'flex:1;accent-color:'+c.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.countryWeights[c.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.countryWeights[c.cd]/cfCountryTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="c in COUNTRIES" :key="c.cd" :style="'flex:'+domCfg.countryWeights[c.cd]+';transition:flex .2s;background:'+c.color+';'"></div>
        </div>
      </div>
    </div>
    <!-- \uC720\uC785\uCC44\uB110 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4E1} \uC720\uC785\uCC44\uB110 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedChannel" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="ch in CHANNELS" :key="ch.cd" :value="ch.cd">{{ ch.icon }} {{ ch.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedChannel === '__weighted__'">
        <div v-for="ch in CHANNELS" :key="ch.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span style="font-size:12px;min-width:16px;">{{ ch.icon }}</span>
          <span style="font-size:10px;color:#475569;min-width:44px;white-space:nowrap;">{{ ch.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.channelWeights[ch.cd]" :style="'flex:1;accent-color:'+ch.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.channelWeights[ch.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.channelWeights[ch.cd]/cfChannelTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="ch in CHANNELS" :key="ch.cd" :style="'flex:'+domCfg.channelWeights[ch.cd]+';transition:flex .2s;background:'+ch.color+';'"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- \uAC00\uC911\uCE58 \uCE74\uB4DC \uD5893: \uAD6C\uB9E4\uC131\uD5A5 / \uC9C1\uC6D0\uC5EC\uBD80 / SNS\uAC00\uC785 -->
  <div v-if="cfg.mode==='create'" style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <!-- \uAD6C\uB9E4\uC131\uD5A5 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F6D2} \uAD6C\uB9E4\uC131\uD5A5 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedBuyType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="b in BUY_TYPES" :key="b.cd" :value="b.cd">{{ b.icon }} {{ b.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedBuyType === '__weighted__'">
        <div v-for="b in BUY_TYPES" :key="b.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span style="font-size:12px;min-width:18px;">{{ b.icon }}</span>
          <span style="font-size:10px;color:#475569;min-width:60px;white-space:nowrap;">{{ b.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.buyTypeWeights[b.cd]" :style="'flex:1;accent-color:'+b.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.buyTypeWeights[b.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.buyTypeWeights[b.cd]/cfBuyTypeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="b in BUY_TYPES" :key="b.cd" :style="'flex:'+domCfg.buyTypeWeights[b.cd]+';transition:flex .2s;background:'+b.color+';'"></div>
        </div>
      </div>
    </div>
    <!-- \uC9C1\uC6D0\uC5EC\uBD80 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F3E2} \uC9C1\uC6D0\uC5EC\uBD80 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedEmpType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="e in EMP_TYPES" :key="e.cd" :value="e.cd">{{ e.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedEmpType === '__weighted__'">
        <div v-for="e in EMP_TYPES" :key="e.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+e.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#475569;min-width:56px;white-space:nowrap;">{{ e.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.empTypeWeights[e.cd]" :style="'flex:1;accent-color:'+e.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.empTypeWeights[e.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.empTypeWeights[e.cd]/cfEmpTypeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="e in EMP_TYPES" :key="e.cd" :style="'flex:'+domCfg.empTypeWeights[e.cd]+';transition:flex .2s;background:'+e.color+';'"></div>
        </div>
        <div style="font-size:10px;color:#94a3b8;margin-top:6px;">\u{1F4A1} \uC9C1\uC6D0 \uC804\uC6A9 \uCFE0\uD3F0/\uD560\uC778 \uB9C8\uCF00\uD305 \uC2DC\uB098\uB9AC\uC624\uC5D0 \uD65C\uC6A9</div>
      </div>
    </div>
    <!-- SNS \uAC00\uC785 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F517} SNS \uAC00\uC785 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedSnsType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="s in SNS_TYPES" :key="s.cd" :value="s.cd">{{ s.icon }} {{ s.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedSnsType === '__weighted__'">
        <div v-for="s in SNS_TYPES" :key="s.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span style="font-size:12px;min-width:16px;">{{ s.icon }}</span>
          <span style="font-size:11px;color:#475569;min-width:48px;white-space:nowrap;">{{ s.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.snsTypeWeights[s.cd]" :style="'flex:1;accent-color:'+s.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.snsTypeWeights[s.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.snsTypeWeights[s.cd]/cfSnsTypeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="s in SNS_TYPES" :key="s.cd" :style="'flex:'+domCfg.snsTypeWeights[s.cd]+';transition:flex .2s;background:'+s.color+';'"></div>
        </div>
        <div style="font-size:10px;color:#94a3b8;margin-top:6px;">\u{1F4A1} NONE \uC774\uC678 \uC120\uD0DD \uC2DC snsLinkYn=Y \uC790\uB3D9 \uC124\uC815</div>
      </div>
    </div>
  </div>

  <!-- \uC218\uC815 \uC635\uC158 (\uC804\uCCB4 \uD3ED) -->
  <div v-if="cfg.mode==='update'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u270F \uC218\uC815 \uC635\uC158</div>
    <bo-form-area :columns="updateCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
    <!-- \uC218\uC815 \uB300\uC0C1 \uD68C\uC6D0 \uC9C0\uC815 -->
    <div style="margin-top:12px;padding-top:10px;border-top:1px solid #f1f5f9;">
      <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:6px;">\u{1F3AF} \uC218\uC815 \uB300\uC0C1 \uD68C\uC6D0 \uC9C0\uC815</div>
      <div style="display:flex;gap:6px;align-items:center;max-width:400px;">
        <input type="text" :value="domCfg.fixedMemberNm || domCfg.fixedMemberId || ''" readonly
          placeholder="\uB79C\uB364 (ACTIVE \uD68C\uC6D0 50\uBA85 \uC911)"
          style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;cursor:pointer;"
          @click="onOpenMemberPicker" />
        <button v-if="domCfg.fixedMemberId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
          @click="domCfg.fixedMemberId='';domCfg.fixedMemberNm=''">\u2715</button>
        <button v-else class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenMemberPicker">\uC120\uD0DD</button>
      </div>
      <div v-if="domCfg.fixedMemberId" style="font-size:10px;color:#6366f1;margin-top:3px;font-family:monospace;">{{ domCfg.fixedMemberId }}</div>
      <div v-else style="font-size:10px;color:#94a3b8;margin-top:3px;">\u{1F4A1} \uBBF8\uC9C0\uC815 \uC2DC ACTIVE \uC0C1\uD0DC \uD68C\uC6D0 50\uBA85 \uC911 \uB79C\uB364 \uC120\uD0DD</div>
    </div>
  </div>

  <!-- \uC2E4\uD589 \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch" @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- \uD68C\uC6D0 picker \uBAA8\uB2EC (\uC218\uC815 \uBAA8\uB4DC) -->
    <bo-cm-popup-modal v-if="memberPicker.show" popup-cmd="cmPopup-member-pick" popup-code="member"
    title="\uC218\uC815\uD560 \uD68C\uC6D0 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="memberPicker.show = false" />

</div>`}})();
