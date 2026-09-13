(function(){const{reactive:v}=Vue,{useSimulSetup:I,makeLogCols:_,makeBaseCfgColumns:U}=window.ZdSimulBase,T="\uAE40\uC774\uBC15\uCD5C\uC815\uAC15\uC870\uC724\uC7A5\uC784\uD55C\uC624\uC11C\uC2E0\uAD8C\uD669\uC548\uC1A1\uB958\uC804".split(""),N=["\uBBFC\uC900","\uC11C\uC5F0","\uB3C4\uC724","\uC9C0\uC6B0","\uC2DC\uC6B0","\uC900\uC11C","\uC218\uC544","\uC9C0\uBBFC","\uCC44\uC6D0","\uC724\uC11C","\uAC00\uC740","\uB098\uC5F0","\uC218\uBE48","\uC608\uB9B0","\uBBFC\uC11C"],u=["company.com","shopjoy.com","gmail.com","naver.com","kakao.com"],A=["\uC6B4\uC601\uD300","\uB9C8\uCF00\uD305\uD300","\uAC1C\uBC1C\uD300","\uACE0\uAC1D\uC9C0\uC6D0\uD300","\uC601\uC5C5\uD300","\uAE30\uD68D\uD300"],f=[{cd:"ACTIVE",label:"\uC815\uC0C1"},{cd:"INACTIVE",label:"\uBE44\uD65C\uC131"},{cd:"SUSPENDED",label:"\uC815\uC9C0"}],h=[{value:"status",label:"\uC0C1\uD0DC \uBCC0\uACBD"},{value:"phone",label:"\uC804\uD654\uBC88\uD638 \uAC31\uC2E0"},{value:"memo",label:"\uBA54\uBAA8 \uC5C5\uB370\uC774\uD2B8"}];window.ZdSimulUserMng={name:"ZdSimulUserMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(D){const o=v({loginPwd:"1111",emailDomain:"__weighted__",domainWeights:{"company.com":40,"shopjoy.com":30,"gmail.com":15,"naver.com":10,"kakao.com":5},statusOnCreate:"ACTIVE",updateType:"status",fixedUserId:"",fixedUserNm:""}),z=(e,n)=>{if(o.emailDomain!=="__weighted__"&&o.emailDomain)return o.emailDomain;const s=o.domainWeights,C=Object.values(s).reduce((a,g)=>a+Number(g),0)||1;let l=Math.random()*C;for(const a of u)if(l-=Number(s[a]||0),l<=0)return a;return u[0]},E=I({domain:"\uC0AC\uC6A9\uC790",uiNm:"\uC0AC\uC6A9\uC790 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uC0AC\uC6A9\uC790",showToast:D.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:e,namePrefix:n,simulYn:s,suffix:C,randInt:l,pick:a})=>{var g,w,S,k;if(e==="create"){const d=String(Date.now()).slice(-5),r=a(T),c=a(N),p=(n||"\uC2DC\uBBAC")+r+c,i="simuser_"+d,m=i+"@"+z(l,a),te="010-"+String(l(1e3,9999))+"-"+String(l(1e3,9999)),se=a(A),P={loginId:i,userNm:p,userEmail:m,userPhone:te,userStatusCd:o.statusOnCreate,loginPwd:o.loginPwd||"1111"},x=await boApi.post("/bo/zd/simul/user/create",P,coUtil.cofApiHdr("\uC0AC\uC6A9\uC790\uC2DC\uBBAC","\uC0DD\uC131")),ae=((w=(g=x==null?void 0:x.data)==null?void 0:g.data)==null?void 0:w.userId)||i;return{ok:!0,desc:p+" / "+m+" / "+se,meta:{id:ae,params:P}}}else{let d;if(o.fixedUserId)d={userId:o.fixedUserId,userNm:o.fixedUserNm};else{const i=await boApi.get("/bo/sy/user/page",{params:{pageNo:1,pageSize:50,userStatusCd:"ACTIVE"}}),m=((k=(S=i==null?void 0:i.data)==null?void 0:S.data)==null?void 0:k.pageList)||[];if(!m.length)return{ok:!1,reason:"\uC218\uC815\uD560 ACTIVE \uC0AC\uC6A9\uC790 \uC5C6\uC74C"};d=a(m)}let r={},c="";if(o.updateType==="status"){const i=a(f);r.userStatusCd=i.cd,c="\uC0C1\uD0DC\u2192"+i.label}else o.updateType==="phone"?(r.userPhone="010-"+String(l(1e3,9999))+"-"+String(l(1e3,9999)),c="\uC804\uD654\uBC88\uD638 \uBCC0\uACBD"):(r.userMemo="[\uC2DC\uBBAC\uC218\uC815] "+new Date().toLocaleTimeString("ko-KR"),c="\uBA54\uBAA8 \uC5C5\uB370\uC774\uD2B8");const p={userId:d.userId,...r};return await boApi.post("/bo/zd/simul/user/update",p,coUtil.cofApiHdr("\uC0AC\uC6A9\uC790\uC2DC\uBBAC","\uC218\uC815")),{ok:!0,desc:(d.userNm||d.userId)+" "+c,meta:{id:d.userId,params:p}}}}}),{cfg:V,state:M,logs:O,logPager:L,logSearch:R,cfIsRunning:W,cfSuccessRate:F,onStart:j,onStop:B,onRunOnce:Z,onPreview:q,onPreviewCreate:H,onClearLog:Y,onSetLogPage:K,onSearchLog:G}=E,J=_(),Q=U(),X=[{key:"statusOnCreate",label:"\uCD08\uAE30 \uC0C1\uD0DC",type:"select",options:f.map(e=>({value:e.cd,label:e.label}))},{key:"loginPwd",label:"\uCD08\uAE30 \uBE44\uBC00\uBC88\uD638",type:"text",placeholder:"\uAE30\uBCF8: 1111",mono:!0},{key:"emailDomain",label:"\uC774\uBA54\uC77C \uB3C4\uBA54\uC778",type:"select",options:[{value:"__weighted__",label:"\uAC00\uC911\uCE58 \uB79C\uB364"},...u.map(e=>({value:e,label:e}))]}],$=[{key:"updateType",label:"\uC218\uC815 \uC720\uD615",type:"select",options:h}],ee=Vue.computed(()=>Object.values(o.domainWeights).reduce((e,n)=>e+Number(n),0)||1),t=v({show:!1,searchValue:"",rows:[],loading:!1}),b=async()=>{var e,n;t.loading=!0;try{const s=await boApi.get("/bo/sy/user/page",{params:{pageNo:1,pageSize:20,...t.searchValue?{searchValue:t.searchValue}:{}}});t.rows=((n=(e=s==null?void 0:s.data)==null?void 0:e.data)==null?void 0:n.pageList)||[]}catch{t.rows=[]}t.loading=!1},oe=async()=>{t.show=!0,t.searchValue="",await b()},y=e=>{o.fixedUserId=e.userId,o.fixedUserNm=e.userNm||e.loginId||e.userId,t.show=!1};return{fnCmPopupCallback:(e,n,s)=>{if(e==="cmPopup-user-pick"){t.show=!1,s!=null&&y(s);return}},cfg:V,domCfg:o,state:M,logs:O,logPager:L,logSearch:R,cfIsRunning:W,cfSuccessRate:F,logCols:J,baseCfgColumns:Q,createCfgColumns:X,updateCfgColumns:$,cfDomainTotal:ee,onStart:j,onStop:B,onRunOnce:Z,onPreview:q,onPreviewCreate:H,onClearLog:Y,onSetLogPage:K,onSearchLog:G,STATUSES:f,DOMAINS:u,UPDATE_TYPES:h,userPicker:t,onOpenUserPicker:oe,onSelectUser:y,_loadUserPicker:b}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F9D1}\u200D\u{1F4BC} \uC0AC\uC6A9\uC790 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#0284c7,#38bdf8)"
    accent-active="background:#e0f2fe;border:1.5px solid #0284c7;color:#0369a1;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uC0DD\uC131 \uC635\uC158 -->
  <div v-if="cfg.mode==='create'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F9D1}\u200D\u{1F4BC} \uC0AC\uC6A9\uC790 \uC0DD\uC131 \uC635\uC158</div>
    <bo-form-area :columns="createCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
  </div>

  <!-- \uAC00\uC911\uCE58 \uD328\uB110 -->
  <div v-if="cfg.mode==='create'" style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4E7} \uC774\uBA54\uC77C \uB3C4\uBA54\uC778 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.emailDomain" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="d in DOMAINS" :key="d" :value="d">{{ d }}</option>
        </select>
      </div>
      <div v-show="domCfg.emailDomain === '__weighted__'">
        <div v-for="(d, di) in DOMAINS" :key="d" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:hsl('+(di*67)+',60%,52%);flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#334155;min-width:76px;white-space:nowrap;">{{ d }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.domainWeights[d]" :style="'flex:1;accent-color:hsl('+(di*67)+',60%,52%);'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.domainWeights[d]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;text-align:right;">{{ Math.round(domCfg.domainWeights[d]/cfDomainTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="(d, di) in DOMAINS" :key="d" :style="'flex:'+domCfg.domainWeights[d]+';transition:flex .2s;background:hsl('+(di*67)+',60%,52%);'"></div>
        </div>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>

  <!-- \uC218\uC815 \uC635\uC158 -->
  <div v-if="cfg.mode==='update'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u270F \uC218\uC815 \uC635\uC158</div>
    <bo-form-area :columns="updateCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
    <div style="margin-top:12px;padding-top:10px;border-top:1px solid #f1f5f9;">
      <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:6px;">\u{1F3AF} \uC218\uC815 \uB300\uC0C1 \uC0AC\uC6A9\uC790 \uC9C0\uC815</div>
      <div style="display:flex;gap:6px;align-items:center;max-width:400px;">
        <input type="text" :value="domCfg.fixedUserNm || domCfg.fixedUserId || ''" readonly
          placeholder="\uB79C\uB364 (ACTIVE \uC0AC\uC6A9\uC790 50\uBA85 \uC911)"
          style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;cursor:pointer;"
          @click="onOpenUserPicker" />
        <button v-if="domCfg.fixedUserId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
          @click="domCfg.fixedUserId='';domCfg.fixedUserNm=''">\u2715</button>
        <button v-else class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenUserPicker">\uC120\uD0DD</button>
      </div>
      <div v-if="domCfg.fixedUserId" style="font-size:10px;color:#0284c7;margin-top:3px;font-family:monospace;">{{ domCfg.fixedUserId }}</div>
      <div v-else style="font-size:10px;color:#94a3b8;margin-top:3px;">\u{1F4A1} \uBBF8\uC9C0\uC815 \uC2DC ACTIVE \uC0AC\uC6A9\uC790 \uC911 \uB79C\uB364 \uC120\uD0DD</div>
    </div>
  </div>

  <!-- \uC2E4\uD589 \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch"
    @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- \uC0AC\uC6A9\uC790 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="userPicker.show" popup-cmd="cmPopup-user-pick" popup-code="user"
    title="\uC218\uC815\uD560 \uC0AC\uC6A9\uC790 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="userPicker.show = false" />
</div>`}})();
