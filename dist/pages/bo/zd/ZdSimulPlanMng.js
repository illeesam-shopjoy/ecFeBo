(function(){const{reactive:h,ref:ge,computed:O}=Vue,{useSimulSetup:L,makeLogCols:R,makeBaseCfgColumns:z,makeRangeCol:m,makeRangeHandlers:U,rangeSlotTemplate:b}=window.ZdSimulBase,y=[{value:"READY",label:"\uC900\uBE44\uC911"},{value:"ACTIVE",label:"\uC9C4\uD589\uC911"},{value:"ENDED",label:"\uC885\uB8CC"},{value:"PAUSE",label:"\uC77C\uC2DC\uC815\uC9C0"}],c=[{cd:"SPRING_NEW",label:"\uBD04 \uC2E0\uC0C1\uD488 \uAE30\uD68D\uC804",w:10},{cd:"SUMMER_COOL",label:"\uC5EC\uB984 \uCFE8\uB9C1 \uAE30\uD68D\uC804",w:10},{cd:"CHUSEOK",label:"\uCD94\uC11D \uC120\uBB3C \uAE30\uD68D\uC804",w:10},{cd:"WINTER_WARM",label:"\uACA8\uC6B8 \uBC29\uD55C \uAE30\uD68D\uC804",w:10},{cd:"BLACK_FRI",label:"\uBE14\uB799\uD504\uB77C\uC774\uB370\uC774 \uD2B9\uAC00",w:8},{cd:"LUXURY_BRAND",label:"\uBA85\uD488 \uBE0C\uB79C\uB4DC \uC704\uD06C",w:5},{cd:"OUTDOOR",label:"\uC544\uC6C3\uB3C4\uC5B4 \uC2DC\uC98C \uAE30\uD68D\uC804",w:7},{cd:"HOME_DECOR",label:"\uD648\uC778\uD14C\uB9AC\uC5B4 \uD2B9\uC9D1",w:7},{cd:"HEALTH_FOOD",label:"\uAC74\uAC15\uC2DD\uD488 \uBAA8\uC74C\uC804",w:8},{cd:"DIGITAL",label:"\uB514\uC9C0\uD138 \uAE30\uAE30 \uD589\uC0AC",w:5},{cd:"FASHION",label:"\uD328\uC158 \uD2B8\uB80C\uB4DC \uAE30\uD68D\uC804",w:8},{cd:"BEAUTY",label:"\uBDF0\uD2F0 \uD398\uC2A4\uD0C0",w:7},{cd:"KIDS",label:"\uD0A4\uC988 \uD2B9\uBCC4 \uAE30\uD68D\uC804",w:5},{cd:"TRAVEL",label:"\uC5EC\uD589\uC6A9\uD488 \uBAA8\uC74C\uC804",w:5},{cd:"PET",label:"\uBC18\uB824\uB3D9\uBB3C \uC6A9\uD488\uC804",w:5},{cd:"CHILDREN_DAY",label:"\uC5B4\uB9B0\uC774\uB0A0 \uAE30\uD68D\uC804",w:5},{cd:"CHRISTMAS",label:"\uC131\uD0C4\uC808 \uD2B9\uBCC4\uC804",w:7},{cd:"NEW_YEAR",label:"\uC0C8\uD574\uB9DE\uC774 \uAE30\uD68D\uC804",w:7},{cd:"ZOMBIE_DAY",label:"\uC880\uBE44\uC758\uB0A0 \uD2B9\uAC00\uC804",w:3},{cd:"DISABILITY",label:"\uC7A5\uC560\uC778\uC758\uB0A0 \uAE30\uD68D\uC804",w:3},{cd:"HALLOWEEN",label:"\uD560\uB85C\uC708 \uAE30\uD68D\uC804",w:5}],Y=[{value:"status",label:"\uC0C1\uD0DC \uBCC0\uACBD"},{value:"title",label:"\uC81C\uBAA9 \uBCC0\uACBD"},{value:"period",label:"\uAE30\uAC04 \uC5F0\uC7A5"},{value:"prods",label:"\uC0C1\uD488 \uCD94\uAC00"}];window.ZdSimulPlanMng={name:"ZdSimulPlanMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(H){const e=h({durationDaysMin:3,durationDaysMax:30,startOffsetDaysMin:0,startOffsetDaysMax:14,createStatus:"READY",updateAction:"status",updateStatus:"ACTIVE",prodCountMin:3,prodCountMax:20,usePlanType:!0,addBanner:!1,periodExtendDays:7,fixedPlanType:"__weighted__",planTypeWeights:Object.fromEntries(c.map(a=>[a.cd,a.w])),fixedPlanId:"",fixedPlanNm:""}),W=()=>{if(e.fixedPlanType&&e.fixedPlanType!=="__weighted__")return c.find(i=>i.cd===e.fixedPlanType)||c[0];const a=e.planTypeWeights,t=Object.values(a).reduce((i,f)=>i+Number(f),0);let d=Math.random()*t;for(const i of c)if(d-=Number(a[i.cd]||0),d<=0)return i;return c[0]},P=a=>a.toISOString().replace("T"," ").substring(0,19),C=a=>{const t=new Date;return t.setDate(t.getDate()+a),P(t)},B=L({domain:"\uAE30\uD68D\uC804",uiNm:"\uAE30\uD68D\uC804 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uAE30\uD68D\uC804",showToast:H.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:a,namePrefix:t,simulYn:d,randInt:i,pick:f})=>{var T,M,I,_,k,A,E,N;if(a==="create"){const l=((M=(T=(await boApiSvc.pdProd.getPage({pageNo:1,pageSize:100,prodStatusCd:"SELLING"})).data)==null?void 0:T.data)==null?void 0:M.pageList)||[];if(l.length<3)return{ok:!1,reason:"\uD310\uB9E4\uC911 \uC0C1\uD488 \uBD80\uC871 (\uCD5C\uC18C 3\uAC1C \uD544\uC694)"};const r=i(e.prodCountMin,Math.min(e.prodCountMax,l.length)),o=e.usePlanType?W():null,p=(t||"")+(o?o.label:"\uAE30\uD68D\uC804_"+String(Date.now()).slice(-4)),u=i(e.startOffsetDaysMin,e.startOffsetDaysMax),n=i(e.durationDaysMin,e.durationDaysMax),x=[...l].sort(()=>Math.random()-.5).slice(0,r).map((g,fe)=>({prodId:g.prodId,sortOrd:fe+1})),v={planNm:p,planStatusCd:e.createStatus,planThemeCd:o?o.cd:null,startDate:C(u),endDate:C(u+n),items:x,simulYn:d||"Y"};v["_preview_[items]("+x.length+"\uAC1C)"]=x.map(g=>({prodId:g.prodId,sortOrd:g.sortOrd}));const w=await boApi.post("/bo/zd/simul/plan/create",v,coUtil.cofApiHdr("\uAE30\uD68D\uC804\uC2DC\uBBAC","\uC0DD\uC131")),ue=((_=(I=w==null?void 0:w.data)==null?void 0:I.data)==null?void 0:_.planId)||"-";return{ok:!0,desc:p+" | "+r+"\uAC1C \uC0C1\uD488 | "+u+"\uC77C \uD6C4 \uC2DC\uC791 "+n+"\uC77C",meta:{id:ue,theme:o?o.cd:null,cnt:r,params:v}}}else{let l;if(e.fixedPlanId)l={planId:e.fixedPlanId,planNm:e.fixedPlanNm||e.fixedPlanId,endDate:null};else{const n=((A=(k=(await boApiSvc.pmPlan.getPage({pageNo:1,pageSize:30})).data)==null?void 0:k.data)==null?void 0:A.pageList)||[];if(!n.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uAE30\uD68D\uC804 \uC5C6\uC74C"};l=f(n)}const r=e.updateAction;let o={},p="";if(r==="status")o.planStatusCd=e.updateStatus,p="\uC0C1\uD0DC\u2192"+e.updateStatus;else if(r==="title")o.planNm=l.planNm+" [\uB9AC\uB274\uC5BC]",p="\uC81C\uBAA9 \uBCC0\uACBD";else if(r==="period"){const n=l.endDate?new Date(l.endDate):new Date;n.setDate(n.getDate()+e.periodExtendDays),o.endDate=P(n),p="\uC885\uB8CC\uC77C "+e.periodExtendDays+"\uC77C \uC5F0\uC7A5"}else{const n=((N=(E=(await boApiSvc.pdProd.getPage({pageNo:1,pageSize:50,prodStatusCd:"SELLING"})).data)==null?void 0:E.data)==null?void 0:N.pageList)||[];if(n.length)o.addProdIds=[f(n).prodId],p="\uC0C1\uD488 1\uAC1C \uCD94\uAC00";else return{ok:!1,reason:"\uCD94\uAC00\uD560 \uC0C1\uD488 \uC5C6\uC74C"}}const u={planId:l.planId,...o};return await boApi.post("/bo/zd/simul/plan/update",u,coUtil.cofApiHdr("\uAE30\uD68D\uC804\uC2DC\uBBAC","\uC218\uC815")),{ok:!0,desc:l.planNm+" \u2014 "+p,meta:{id:l.planId,params:u}}}}}),{cfg:V,state:K,logs:F,logPager:G,logSearch:Z,cfIsRunning:j,cfSuccessRate:$,onStart:q,onStop:X,onRunOnce:J,onPreview:Q,onPreviewCreate:ee,onClearLog:ae,onSetLogPage:te,onSearchLog:le}=B,oe=R(),ne=z(),se=[{key:"createStatus",label:"\uCD08\uAE30 \uC0C1\uD0DC",type:"select",options:y},{key:"usePlanType",label:"\uC720\uD615\uBA85 \uC790\uB3D9",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]},m("prodCountMin","prodCountMax","\uC0C1\uD488 \uC218 \uBC94\uC704",1,50,"\uAC1C"),m("startOffsetDaysMin","startOffsetDaysMax","\uC2DC\uC791 \uC624\uD504\uC14B \uBC94\uC704",0,30,"\uC77C"),m("durationDaysMin","durationDaysMax","\uAE30\uAC04 \uBC94\uC704",1,60,"\uC77C"),{key:"addBanner",label:"\uBC30\uB108 \uC774\uBBF8\uC9C0 URL \uC790\uB3D9 \uC0DD\uC131",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]}],de=[{key:"updateAction",label:"\uC218\uC815 \uC561\uC158",type:"select",options:Y},{key:"updateStatus",label:"\uBCC0\uACBD \uC0C1\uD0DC",type:"select",options:y,visible:a=>a.updateAction==="status"},{key:"periodExtendDays",label:"\uC5F0\uC7A5 \uC77C\uC218",type:"number",hint:"\uC77C",visible:a=>a.updateAction==="period"}],ie=O(()=>Object.values(e.planTypeWeights).reduce((a,t)=>a+Number(t),0)||1),pe=U(e,[{minKey:"prodCountMin",maxKey:"prodCountMax"},{minKey:"startOffsetDaysMin",maxKey:"startOffsetDaysMax"},{minKey:"durationDaysMin",maxKey:"durationDaysMax"}]),s=h({show:!1,searchValue:"",rows:[],loading:!1}),S=async()=>{var a,t;s.loading=!0;try{const d=await boApiSvc.pmPlan.getPage({pageNo:1,pageSize:20,...s.searchValue?{searchValue:s.searchValue,searchType:"planId,planNm"}:{}});s.rows=((t=(a=d.data)==null?void 0:a.data)==null?void 0:t.pageList)||[]}catch{s.rows=[]}s.loading=!1},re=async()=>{s.show=!0,s.searchValue="",await S()},D=a=>{e.fixedPlanId=a.planId,e.fixedPlanNm=a.planNm||"",s.show=!1},ce=(a,t,d)=>{if(a==="cmPopup-plan-pick"){s.show=!1,d!=null&&D(d);return}};return{coUtil,fnCmPopupCallback:ce,cfg:V,domCfg:e,state:K,logs:F,logPager:G,cfIsRunning:j,cfSuccessRate:$,logCols:oe,baseCfgColumns:ne,createCfgColumns:se,updateCfgColumns:de,onStart:q,onStop:X,onRunOnce:J,onPreview:Q,onPreviewCreate:ee,onClearLog:ae,onSetLogPage:te,onSearchLog:le,logSearch:Z,...pe,PLAN_STATUSES:y,PLAN_TYPE_ITEMS:c,cfPlanTypeTotal:ie,planPicker:s,onOpenPlanPicker:re,onSelectPlan:D,_loadPlanPicker:S}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F5C2} \uAE30\uD68D\uC804 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <!-- \uC2E4\uD589 \uC81C\uC5B4 -->
  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#d97706,#fbbf24)"
    accent-active="background:#fff7ed;border:1.5px solid #d97706;color:#92400e;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uC0DD\uC131 \uC635\uC158 -->
  <div v-if="cfg.mode==='create'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F5C2} \uAE30\uD68D\uC804 \uC0DD\uC131 \uC635\uC158</div>
    <bo-form-area :columns="createCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
      ${b("prodCountMin","prodCountMax",1,50,"\uAC1C")}
      ${b("startOffsetDaysMin","startOffsetDaysMax",0,30,"\uC77C")}
      ${b("durationDaysMin","durationDaysMax",1,60,"\uC77C")}
    </bo-form-area>
  </div>

  <!-- \uAE30\uD68D\uC804 \uC720\uD615 \uAC00\uC911\uCE58 (1/3 \uD3ED, \uC544\uB798 \uC904) -->
  <div v-if="coUtil.cofAnd(cfg.mode==='create', domCfg.usePlanType)" style="margin-top:12px;display:grid;grid-template-columns:1fr 2fr;gap:12px;">
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4CA} \uAE30\uD68D\uC804 \uC720\uD615 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <label style="font-size:11px;font-weight:600;color:#475569;display:block;margin-bottom:4px;">\uC720\uD615 \uC9C0\uC815</label>
        <select v-model="domCfg.fixedPlanType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="">-- \uC5C6\uC74C --</option>
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in PLAN_TYPE_ITEMS" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedPlanType === '__weighted__'">
        <div v-for="(t, ti) in PLAN_TYPE_ITEMS" :key="t.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:hsl('+(ti*17)+',65%,52%);flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:10px;color:#475569;min-width:110px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" :title="t.label">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.planTypeWeights[t.cd]" :style="'flex:1;accent-color:hsl('+(ti*17)+',65%,52%);'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.planTypeWeights[t.cd]" style="width:36px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.planTypeWeights[t.cd]/cfPlanTypeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="(t, ti) in PLAN_TYPE_ITEMS" :key="t.cd" :style="'flex:'+domCfg.planTypeWeights[t.cd]+';transition:flex .2s;background:hsl('+(ti*17)+',65%,52%)'"></div>
        </div>
      </div>
    </div>
    <div></div>
  </div>

  <!-- \uC218\uC815 \uC635\uC158 -->
  <div v-if="cfg.mode==='update'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u270F \uAE30\uD68D\uC804 \uC218\uC815 \uC635\uC158</div>
    <bo-form-area :columns="updateCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
    <div style="margin-top:12px;padding-top:12px;border-top:1px solid #f1f5f9;">
      <div style="font-size:12px;font-weight:600;color:#475569;margin-bottom:8px;">\u{1F3AF} \uC218\uC815 \uB300\uC0C1 \uC9C0\uC815 (\uBBF8\uC9C0\uC815 \uC2DC \uB79C\uB364)</div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:12px;color:#64748b;min-width:64px;">\uAE30\uD68D\uC804</span>
        <input type="text" :value="domCfg.fixedPlanNm || domCfg.fixedPlanId" readonly placeholder="\uBBF8\uC9C0\uC815 (\uB79C\uB364)"
          style="flex:1;padding:4px 8px;border:1px solid #e2e8f0;border-radius:4px;font-size:12px;background:#f8fafc;cursor:default;" />
        <button class="btn btn-sm" style="background:#d97706;color:#fff;" @click="onOpenPlanPicker">\uC120\uD0DD</button>
        <button v-if="domCfg.fixedPlanId" class="btn btn-sm btn-secondary" @click="domCfg.fixedPlanId='';domCfg.fixedPlanNm=''">\uD574\uC81C</button>
      </div>
    </div>
  </div>

  <!-- \uC2E4\uD589 \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch" @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- \uAE30\uD68D\uC804 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="planPicker.show" popup-cmd="cmPopup-plan-pick" popup-code="plan"
    title="\uAE30\uD68D\uC804 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="planPicker.show = false" />
</div>`}})();
