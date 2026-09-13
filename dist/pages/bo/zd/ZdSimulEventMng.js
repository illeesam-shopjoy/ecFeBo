(function(){const{reactive:m,computed:x,ref:de}=Vue,{useSimulSetup:k,makeLogCols:P,makeBaseCfgColumns:O,makeRangeCol:u,makeRangeHandlers:D,rangeSlotTemplate:g}=window.ZdSimulBase,c=[{cd:"ATTEND",label:"\uCD9C\uC11D\uCCB4\uD06C",badge:"badge-blue",color:"#3b82f6"},{cd:"QUIZ",label:"\uD034\uC988\uC774\uBCA4\uD2B8",badge:"badge-purple",color:"#a855f7"},{cd:"REVIEW",label:"\uB9AC\uBDF0\uC774\uBCA4\uD2B8",badge:"badge-green",color:"#22c55e"},{cd:"SHARE",label:"\uACF5\uC720\uC774\uBCA4\uD2B8",badge:"badge-orange",color:"#f97316"},{cd:"PURCHASE",label:"\uAD6C\uB9E4\uC774\uBCA4\uD2B8",badge:"badge-blue",color:"#0ea5e9"},{cd:"LOTTERY",label:"\uBCF5\uAD8C\uC774\uBCA4\uD2B8",badge:"badge-purple",color:"#8b5cf6"},{cd:"PHOTO",label:"\uD3EC\uD1A0\uC774\uBCA4\uD2B8",badge:"badge-orange",color:"#f59e0b"},{cd:"SURVEY",label:"\uC124\uBB38\uC774\uBCA4\uD2B8",badge:"badge-green",color:"#16a34a"}],y=[{value:"READY",label:"\uC900\uBE44\uC911"},{value:"ONGOING",label:"\uC9C4\uD589\uC911"},{value:"ENDED",label:"\uC885\uB8CC"},{value:"PAUSE",label:"\uC77C\uC2DC\uC815\uC9C0"}],b=[{value:"COUPON",label:"\uCFE0\uD3F0 \uC9C0\uAE09",color:"#f59e0b"},{value:"SAVE",label:"\uC801\uB9BD\uAE08 \uC9C0\uAE09",color:"#22c55e"},{value:"PRODUCT",label:"\uC0C1\uD488 \uC99D\uC815",color:"#3b82f6"},{value:"POINT",label:"\uD3EC\uC778\uD2B8 \uC9C0\uAE09",color:"#a855f7"}],A=["\uC5EC\uB984 \uD2B9\uBCC4 \uC774\uBCA4\uD2B8","\uAC00\uC744 \uAC10\uC0AC \uC774\uBCA4\uD2B8","\uC2E0\uB144 \uC774\uBCA4\uD2B8","\uCC3D\uB9BD\uAE30\uB150 \uC774\uBCA4\uD2B8","\uD560\uB85C\uC708 \uC774\uBCA4\uD2B8","\uD06C\uB9AC\uC2A4\uB9C8\uC2A4 \uC774\uBCA4\uD2B8","\uBE14\uB799\uD504\uB77C\uC774\uB370\uC774 \uC774\uBCA4\uD2B8","\uCD94\uC11D \uD2B9\uBCC4 \uC774\uBCA4\uD2B8","\uBD04\uB9DE\uC774 \uC774\uBCA4\uD2B8","\uC2E0\uC0C1\uD488 \uCD9C\uC2DC \uC774\uBCA4\uD2B8","\uD68C\uC6D0 \uAC10\uC0AC \uC774\uBCA4\uD2B8","\uC8FC\uB144 \uAE30\uB150 \uC774\uBCA4\uD2B8","\uC5B4\uB9B0\uC774\uB0A0 \uC774\uBCA4\uD2B8","\uC131\uD0C4\uC808 \uC774\uBCA4\uD2B8","\uC0C8\uD574\uB9DE\uC774 \uC774\uBCA4\uD2B8","\uC880\uBE44\uC758\uB0A0 \uC774\uBCA4\uD2B8","\uC7A5\uC560\uC778\uC758\uB0A0 \uC774\uBCA4\uD2B8","\uD560\uB85C\uC708 \uACF5\uD3EC \uC774\uBCA4\uD2B8"],N=[{value:"status",label:"\uC0C1\uD0DC \uBCC0\uACBD"},{value:"period",label:"\uAE30\uAC04 \uC5F0\uC7A5"},{value:"winner",label:"\uB2F9\uCCA8\uC790 \uC124\uC815"}];window.ZdSimulEventMng={name:"ZdSimulEventMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(I){const e=m({fixedEventType:"__weighted__",eventTypeWeights:{ATTEND:20,QUIZ:20,REVIEW:15,SHARE:15,PURCHASE:15,LOTTERY:10,PHOTO:3,SURVEY:2},fixedBenefitType:"__weighted__",benefitTypeWeights:{COUPON:45,SAVE:30,PRODUCT:15,POINT:10},durationDaysMin:5,durationDaysMax:30,startOffsetMin:0,startOffsetMax:7,createStatus:"READY",benefitType:"COUPON",benefitAmtMin:1e3,benefitAmtMax:5e4,winnerCountMin:1,winnerCountMax:100,useRandomTitle:!0,updateAction:"status",updateStatus:"ONGOING",periodExtendDays:7,fixedEventId:""}),R=()=>{if(e.fixedBenefitType&&e.fixedBenefitType!=="__weighted__")return e.fixedBenefitType;const t=e.benefitTypeWeights,a=Object.values(t).reduce((n,r)=>n+Number(r),0)||1;let o=Math.random()*a;for(const n of b)if(o-=Number(t[n.value]||0),o<=0)return n.value;return b[0].value},V=()=>{if(e.fixedEventType&&e.fixedEventType!=="__weighted__")return c.find(n=>n.cd===e.fixedEventType)||c[0];const t=e.eventTypeWeights,a=Object.values(t).reduce((n,r)=>n+Number(r),0);let o=Math.random()*a;for(const n of c)if(o-=Number(t[n.cd]||0),o<=0)return n;return c[0]},T=t=>t.toISOString().replace("T"," ").substring(0,19),h=t=>{const a=new Date;return a.setDate(a.getDate()+t),T(a)},z=k({domain:"\uC774\uBCA4\uD2B8",uiNm:"\uC774\uBCA4\uD2B8 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uC774\uBCA4\uD2B8",showToast:I.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:t,namePrefix:a,simulYn:o,randInt:n,pick:r})=>{var C,S,_,M;if(t==="create"){const i=V(),d=n(e.startOffsetMin,e.startOffsetMax),p=n(e.durationDaysMin,e.durationDaysMax),f=e.useRandomTitle?(a||"")+r(A)+" ["+i.label+"]":(a||"")+i.label+"_"+String(Date.now()).slice(-4),s={eventNm:f,eventTypeCd:i.cd,eventStatusCd:e.createStatus,startDate:h(d),endDate:h(d+p),benefitTypeCd:R(),benefitAmt:n(e.benefitAmtMin,e.benefitAmtMax),winnerCount:n(e.winnerCountMin,e.winnerCountMax),simulYn:o||"Y"},v=await boApi.post("/bo/zd/simul/event/create",s,coUtil.cofApiHdr("\uC774\uBCA4\uD2B8\uC2DC\uBBAC","\uC0DD\uC131")),se=((S=(C=v==null?void 0:v.data)==null?void 0:C.data)==null?void 0:S.eventId)||"-";return{ok:!0,desc:"["+i.label+"] "+f+" | \uB2F9\uCCA8\uC790 \uCD5C\uB300 "+s.winnerCount+"\uBA85",meta:{id:se,type:i.label,params:s}}}else{let i;if(e.fixedEventId)i={eventId:e.fixedEventId,eventNm:e.fixedEventId,endDate:null};else{const s=((M=(_=(await boApiSvc.pmEvent.getPage({pageNo:1,pageSize:30})).data)==null?void 0:_.data)==null?void 0:M.pageList)||[];if(!s.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uC774\uBCA4\uD2B8 \uC5C6\uC74C"};i=r(s)}let d={},p="";if(e.updateAction==="status")d.eventStatusCd=e.updateStatus,p="\uC0C1\uD0DC\u2192"+e.updateStatus;else if(e.updateAction==="period"){const s=i.endDate?new Date(i.endDate):new Date;s.setDate(s.getDate()+e.periodExtendDays),d.endDate=T(s),p="\uAE30\uAC04 +"+e.periodExtendDays+"\uC77C"}else d.winnerCount=n(1,50),p="\uB2F9\uCCA8\uC790 \uC218 \uBCC0\uACBD";const f={eventId:i.eventId,...d};return await boApi.post("/bo/zd/simul/event/update",f,coUtil.cofApiHdr("\uC774\uBCA4\uD2B8\uC2DC\uBBAC","\uC218\uC815")),{ok:!0,desc:i.eventNm+" \u2014 "+p,meta:{id:i.eventId,params:f}}}}}),{cfg:U,state:B,logs:W,logPager:Y,logSearch:L,cfIsRunning:H,cfSuccessRate:F,onStart:K,onStop:Z,onRunOnce:j,onPreview:G,onPreviewCreate:$,onClearLog:Q,onSetLogPage:q,onSearchLog:J}=z,X=x(()=>Object.values(e.eventTypeWeights).reduce((t,a)=>t+Number(a),0)||1),ee=x(()=>Object.values(e.benefitTypeWeights).reduce((t,a)=>t+Number(a),0)||1),te=P(),ae=O(),ne=[{key:"createStatus",label:"\uCD08\uAE30 \uC0C1\uD0DC",type:"select",options:y},u("benefitAmtMin","benefitAmtMax","\uD61C\uD0DD \uAE08\uC561 \uBC94\uC704",1e3,5e4,"\uC6D0"),u("winnerCountMin","winnerCountMax","\uB2F9\uCCA8\uC790 \uC218 \uBC94\uC704",1,200,"\uBA85"),u("startOffsetMin","startOffsetMax","\uC2DC\uC791 \uC624\uD504\uC14B \uBC94\uC704",0,30,"\uC77C"),u("durationDaysMin","durationDaysMax","\uC774\uBCA4\uD2B8 \uAE30\uAC04 \uBC94\uC704",1,60,"\uC77C"),{key:"useRandomTitle",label:"\uC81C\uBAA9 \uC790\uB3D9 \uC0DD\uC131",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]}],oe=[{key:"updateAction",label:"\uC218\uC815 \uC561\uC158",type:"select",options:N},{key:"updateStatus",label:"\uBCC0\uACBD \uC0C1\uD0DC",type:"select",options:y,visible:t=>t.updateAction==="status"},{key:"periodExtendDays",label:"\uC5F0\uC7A5 \uC77C\uC218",type:"number",hint:"\uC77C",visible:t=>t.updateAction==="period"}],ie=D(e,[{minKey:"benefitAmtMin",maxKey:"benefitAmtMax"},{minKey:"winnerCountMin",maxKey:"winnerCountMax"},{minKey:"startOffsetMin",maxKey:"startOffsetMax"},{minKey:"durationDaysMin",maxKey:"durationDaysMax"}]),l=m({show:!1,searchValue:"",rows:[],loading:!1}),E=async()=>{var t,a;l.loading=!0;try{const o=await boApiSvc.pmEvent.getPage({pageNo:1,pageSize:20,...l.searchValue?{searchValue:l.searchValue,searchType:"eventId,eventNm"}:{}});l.rows=((a=(t=o.data)==null?void 0:t.data)==null?void 0:a.pageList)||[]}catch{l.rows=[]}l.loading=!1},le=async()=>{l.show=!0,l.searchValue="",await E()},w=t=>{e.fixedEventId=t.eventId,l.show=!1};return{fnCmPopupCallback:(t,a,o)=>{if(t==="cmPopup-event-pick"){l.show=!1,o!=null&&w(o);return}},cfg:U,domCfg:e,state:B,logs:W,logPager:Y,cfIsRunning:H,cfSuccessRate:F,cfTypeTotal:X,cfBenefitTotal:ee,logCols:te,baseCfgColumns:ae,createCfgColumns:ne,updateCfgColumns:oe,onStart:K,onStop:Z,onRunOnce:j,onPreview:G,onPreviewCreate:$,onClearLog:Q,onSetLogPage:q,onSearchLog:J,logSearch:L,...ie,EVENT_TYPES:c,BENEFIT_TYPES:b,eventPicker:l,onOpenEventPicker:le,onSelectEvent:w,_loadEventPicker:E}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F389} \uC774\uBCA4\uD2B8 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <!-- \uC2E4\uD589 \uC81C\uC5B4 -->
  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#a21caf,#e879f9)"
    accent-active="background:#fdf4ff;border:1.5px solid #a21caf;color:#86198f;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uC0DD\uC131 \uC635\uC158 -->
  <div v-if="cfg.mode==='create'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F389} \uC774\uBCA4\uD2B8 \uC0DD\uC131 \uC635\uC158</div>
    <bo-form-area :columns="createCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
      ${g("benefitAmtMin","benefitAmtMax",1e3,5e4,"\uC6D0")}
      ${g("winnerCountMin","winnerCountMax",1,200,"\uBA85")}
      ${g("startOffsetMin","startOffsetMax",0,30,"\uC77C")}
      ${g("durationDaysMin","durationDaysMax",1,60,"\uC77C")}
    </bo-form-area>
  </div>

  <!-- \uC218\uC815 \uC635\uC158 -->
  <div v-if="cfg.mode==='update'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u270F \uC774\uBCA4\uD2B8 \uC218\uC815 \uC635\uC158</div>
    <bo-form-area :columns="updateCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
    <div style="margin-top:12px;padding-top:12px;border-top:1px solid #f1f5f9;">
      <div style="font-size:12px;font-weight:600;color:#475569;margin-bottom:8px;">\u{1F3AF} \uC218\uC815 \uB300\uC0C1 \uC9C0\uC815 (\uBBF8\uC9C0\uC815 \uC2DC \uB79C\uB364)</div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:12px;color:#64748b;min-width:64px;">\uC774\uBCA4\uD2B8</span>
        <input type="text" :value="domCfg.fixedEventId" readonly placeholder="\uBBF8\uC9C0\uC815 (\uB79C\uB364)"
          style="flex:1;padding:4px 8px;border:1px solid #e2e8f0;border-radius:4px;font-size:12px;background:#f8fafc;cursor:default;" />
        <button class="btn btn-sm" style="background:#a21caf;color:#fff;" @click="onOpenEventPicker">\uC120\uD0DD</button>
        <button v-if="domCfg.fixedEventId" class="btn btn-sm btn-secondary" @click="domCfg.fixedEventId=''">\uD574\uC81C</button>
      </div>
    </div>
  </div>

  <!-- \uAC00\uC911\uCE58 \uCE74\uB4DC \uD589 -->
  <div v-if="cfg.mode==='create'" style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <!-- \uC774\uBCA4\uD2B8 \uC720\uD615 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4CA} \uC774\uBCA4\uD2B8 \uC720\uD615 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedEventType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="">-- \uC5C6\uC74C --</option>
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in EVENT_TYPES" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedEventType === '__weighted__'">
        <div v-for="t in EVENT_TYPES" :key="t.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';flex-shrink:0;display:inline-block;'"></span>
          <span :class="'badge '+t.badge" style="min-width:64px;text-align:center;font-size:10px;">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.eventTypeWeights[t.cd]" :style="'flex:1;accent-color:'+t.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.eventTypeWeights[t.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.eventTypeWeights[t.cd]/cfTypeTotal*100) }}%</span>
        </div>
        <div style="display:flex;border-radius:4px;overflow:hidden;height:8px;margin-top:8px;">
          <div v-for="t in EVENT_TYPES" :key="t.cd" :title="t.label" :style="'flex:'+domCfg.eventTypeWeights[t.cd]+';background:'+t.color+';transition:flex .2s'"></div>
        </div>
      </div>
    </div>
    <!-- \uD61C\uD0DD \uC720\uD615 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F381} \uD61C\uD0DD \uC720\uD615 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedBenefitType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="">-- \uC5C6\uC74C --</option>
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="b in BENEFIT_TYPES" :key="b.value" :value="b.value">{{ b.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedBenefitType === '__weighted__'">
        <div v-for="b in BENEFIT_TYPES" :key="b.value" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+b.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#475569;min-width:64px;">{{ b.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.benefitTypeWeights[b.value]" :style="'flex:1;accent-color:'+b.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.benefitTypeWeights[b.value]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.benefitTypeWeights[b.value]/cfBenefitTotal*100) }}%</span>
        </div>
        <div style="display:flex;border-radius:4px;overflow:hidden;height:8px;margin-top:8px;">
          <div v-for="b in BENEFIT_TYPES" :key="b.value" :title="b.label" :style="'flex:'+domCfg.benefitTypeWeights[b.value]+';background:'+b.color+';transition:flex .2s'"></div>
        </div>
      </div>
    </div>
    <div></div>
  </div>

  <!-- \uC2E4\uD589 \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch" @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- \uC774\uBCA4\uD2B8 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="eventPicker.show" popup-cmd="cmPopup-event-pick" popup-code="event"
    title="\uC774\uBCA4\uD2B8 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="eventPicker.show = false" />
</div>`}})();
