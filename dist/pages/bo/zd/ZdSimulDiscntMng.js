(function(){const{reactive:x,computed:y}=Vue,{useSimulSetup:w,makeLogCols:k,makeBaseCfgColumns:P,makeRangeCol:I,makeRangeHandlers:M,rangeSlotTemplate:R}=window.ZdSimulBase,r=[{cd:"PROD",label:"\uC0C1\uD488\uD560\uC778",color:"#3b82f6"},{cd:"ORDER",label:"\uC8FC\uBB38\uD560\uC778",color:"#a855f7"},{cd:"SHIP",label:"\uBC30\uC1A1\uBE44\uD560\uC778",color:"#22c55e"},{cd:"SHIP_FREE",label:"\uBB34\uB8CC\uBC30\uC1A1",color:"#06b6d4"}],p=[{cd:"RATE",label:"\uC815\uB960 (%)",color:"#f59e0b"},{cd:"AMOUNT",label:"\uC815\uC561 (\uC6D0)",color:"#f97316"}],A=[{value:"ALL",label:"\uC804\uCCB4 \uC0C1\uD488"},{value:"CATEGORY",label:"\uCE74\uD14C\uACE0\uB9AC"},{value:"PRODUCT",label:"\uD2B9\uC815 \uC0C1\uD488"}],E=["\uBD04 \uC2DC\uC98C \uD560\uC778","\uC5EC\uB984 \uC138\uC77C","\uCD94\uC11D \uD2B9\uBCC4 \uD560\uC778","\uACA8\uC6B8 \uD398\uC2A4\uD0C0","\uC8FC\uB9D0 \uD2B9\uAC00 \uC774\uBCA4\uD2B8","\uC2E0\uADDC \uACE0\uAC1D \uD560\uC778","\uB300\uB7C9 \uAD6C\uB9E4 \uD560\uC778","\uD50C\uB798\uC2DC \uC138\uC77C"];window.ZdSimulDiscntMng={name:"ZdSimulDiscntMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(O){const t=x({fixedDiscntId:"",fixedDiscntTypeCd:"__weighted__",discntTypeCdWeights:{PROD:40,ORDER:30,SHIP:15,SHIP_FREE:15},fixedDiscntValTypeCd:"__weighted__",discntValTypeWeights:{RATE:60,AMOUNT:40},discntRateMin:3,discntRateMax:20,discntAmtMin:500,discntAmtMax:1e4,discntDurationDays:14,discntMinOrderAmt:0,discntMaxDiscAmt:5e4,discntScope:"PRODUCT",discntProdIds:""}),b=(e,i)=>{const s=Object.values(i).reduce((a,g)=>a+Number(g),0)||1;let l=Math.random()*s;for(const a of e)if(l-=Number(i[a.cd]||0),l<=0)return a;return e[0]},V=()=>{const e=t.fixedDiscntTypeCd;return e&&e!=="__weighted__"?r.find(i=>i.cd===e)||r[0]:b(r,t.discntTypeCdWeights)},N=()=>{const e=t.fixedDiscntValTypeCd;return e&&e!=="__weighted__"?p.find(i=>i.cd===e)||p[0]:b(p,t.discntValTypeWeights)},f=e=>{const i=new Date;return i.setDate(i.getDate()+e),i.toISOString().replace("T"," ").substring(0,19)},z=w({domain:"\uD560\uC778",uiNm:"\uD504\uB85C\uBAA8\uC158 \uD560\uC778 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uD560\uC778",showToast:O.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:e,namePrefix:i,randInt:s,pick:l})=>{var a,g,C,T;if(e==="create"){const d=V(),c=d.cd==="SHIP_FREE",o=c?null:N(),D=(o==null?void 0:o.cd)==="RATE",m=c?0:D?s(t.discntRateMin,t.discntRateMax):s(t.discntAmtMin,t.discntAmtMax),_=(i||"")+"["+d.label+"] "+l(E),oe=t.discntScope==="PRODUCT"&&t.discntProdIds?t.discntProdIds.split(/[\s,]+/).map(le=>le.trim()).filter(Boolean):[],S={discntNm:_,discntTypeCd:d.cd,discntValTypeCd:o?o.cd:null,discVal:m,startDate:f(0),endDate:f(t.discntDurationDays),scopeCd:t.discntScope,prodIds:oe,minOrderAmt:t.discntMinOrderAmt,maxDiscAmt:t.discntMaxDiscAmt,simulYn:"Y"},u=await boApi.post("/bo/zd/simul/promo/discnt-create",S,coUtil.cofApiHdr("\uD560\uC778\uC2DC\uBBAC","\uD560\uC778\uC0DD\uC131")),ae=((g=(a=u==null?void 0:u.data)==null?void 0:a.data)==null?void 0:g.discntId)||"-",ce=c?"\uBB34\uB8CC\uBC30\uC1A1":D?m+"%":m.toLocaleString()+"\uC6D0";return{ok:!0,desc:"["+d.label+(o?"/"+o.label:"")+"] "+_+" "+ce,meta:{id:ae,params:S}}}else{let d=t.fixedDiscntId;if(!d){const o=((T=(C=(await boApiSvc.pmDiscnt.getPage({pageNo:1,pageSize:30})).data)==null?void 0:C.data)==null?void 0:T.pageList)||[];if(!o.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uD560\uC778\uC815\uCC45 \uC5C6\uC74C"};d=l(o).discntId}const c={discntId:d,endDate:f(s(7,30))};return await boApi.post("/bo/zd/simul/promo/discnt-update",c,coUtil.cofApiHdr("\uD560\uC778\uC2DC\uBBAC","\uD560\uC778\uC218\uC815")),{ok:!0,desc:d+" \uAE30\uAC04 \uC5F0\uC7A5",meta:{id:d,params:c}}}}}),{cfg:L,state:W,logs:U,logPager:Y,logSearch:H,cfIsRunning:F,cfSuccessRate:j,onStart:B,onStop:Z,onRunOnce:K,onPreview:q,onPreviewCreate:G,onClearLog:$,onSetLogPage:J,onSearchLog:Q}=z,X=k(),ee=P(),te=[I("discntRateMin","discntRateMax","\uD560\uC778\uC728 \uBC94\uC704",0,100,"%",{visible:e=>e.fixedDiscntValTypeCd!=="AMOUNT"}),{key:"discntAmtMin",label:"\uD560\uC778\uC561 \uCD5C\uC18C",type:"number",hint:"\uC6D0",visible:e=>e.fixedDiscntValTypeCd==="AMOUNT"},{key:"discntAmtMax",label:"\uD560\uC778\uC561 \uCD5C\uB300",type:"number",hint:"\uC6D0",visible:e=>e.fixedDiscntValTypeCd==="AMOUNT"},{key:"discntDurationDays",label:"\uAE30\uAC04",type:"number",hint:"\uC77C"},{key:"discntMinOrderAmt",label:"\uCD5C\uC18C\uC8FC\uBB38",type:"number",hint:"\uC6D0"},{key:"discntMaxDiscAmt",label:"\uCD5C\uB300\uD560\uC778",type:"number",hint:"\uC6D0"},{key:"discntScope",label:"\uC801\uC6A9\uBC94\uC704",type:"select",options:A},{key:"discntProdIds",label:"\uC2DC\uBBAC \uC0C1\uD488 ID",type:"text",placeholder:"ID \uCF64\uB9C8 \uAD6C\uBD84 (\uAE30\uBCF8 5\uAC1C \uC790\uB3D9)",hint:"\uBE44\uC6B0\uBA74 simulYn=Y \uC0C1\uD488 \uC790\uB3D9\uC870\uD68C",visible:e=>e.discntScope==="PRODUCT"}],ie=y(()=>Object.values(t.discntTypeCdWeights).reduce((e,i)=>e+Number(i),0)||1),ne=y(()=>Object.values(t.discntValTypeWeights).reduce((e,i)=>e+Number(i),0)||1),se=M(t,[{minKey:"discntRateMin",maxKey:"discntRateMax"}]),n=x({show:!1,searchValue:"",rows:[],loading:!1}),v=async()=>{var e,i;n.loading=!0;try{const s=await boApiSvc.pmDiscnt.getPage({pageNo:1,pageSize:20,...n.searchValue?{searchValue:n.searchValue}:{}});n.rows=((i=(e=s.data)==null?void 0:e.data)==null?void 0:i.pageList)||[]}catch{n.rows=[]}n.loading=!1},de=async()=>{n.show=!0,n.searchValue="",await v()},h=e=>{t.fixedDiscntId=e.discntId,n.show=!1};return{fnCmPopupCallback:(e,i,s)=>{if(e==="cmPopup-discnt-pick"){n.show=!1,s!=null&&h(s);return}},cfg:L,domCfg:t,state:W,logs:U,logPager:Y,logSearch:H,cfIsRunning:F,cfSuccessRate:j,logCols:X,baseCfgColumns:ee,discntCfgColumns:te,cfDiscntTypeCdTotal:ie,cfDiscntValTypeTotal:ne,DISCNT_TYPE_ITEMS:r,DISCNT_VAL_TYPE_ITEMS:p,onStart:B,onStop:Z,onRunOnce:K,onPreview:q,onPreviewCreate:G,onClearLog:$,onSetLogPage:J,onSearchLog:Q,...se,discntPicker:n,onOpenDiscntPicker:de,onSelectDiscnt:h,_loadDiscntPicker:v}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F4B0} \uD504\uB85C\uBAA8\uC158 \uD560\uC778 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#2563eb,#60a5fa)"
    accent-active="background:#eff6ff;border:1.5px solid #2563eb;color:#1d4ed8;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uD560\uC778\uC815\uCC45 \uC124\uC815 -->
  <div class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F4B0} \uD560\uC778\uC815\uCC45 \uC124\uC815</div>
    <bo-form-area :columns="discntCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
      ${R("discntRateMin","discntRateMax",0,100,"%")}
    </bo-form-area>
  </div>

  <!-- \uAC00\uC911\uCE58 \uD328\uB110 -->
  <div style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:12px;">
    <!-- \uD560\uC778 \uC720\uD615 \uAC00\uC911\uCE58 (PROD/ORDER/SHIP/SHIP_FREE) -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F3AF} \uD560\uC778 \uC720\uD615 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedDiscntTypeCd" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in DISCNT_TYPE_ITEMS" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedDiscntTypeCd==='__weighted__'">
        <div v-for="t in DISCNT_TYPE_ITEMS" :key="t.cd" style="display:flex;align-items:center;gap:5px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#334155;min-width:72px;white-space:nowrap;">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.discntTypeCdWeights[t.cd]" :style="'flex:1;accent-color:'+t.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.discntTypeCdWeights[t.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;text-align:right;">{{ Math.round(domCfg.discntTypeCdWeights[t.cd]/cfDiscntTypeCdTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="t in DISCNT_TYPE_ITEMS" :key="t.cd" :style="'flex:'+domCfg.discntTypeCdWeights[t.cd]+';transition:flex .2s;background:'+t.color+';'"></div>
        </div>
      </div>
    </div>
    <!-- \uD560\uC778 \uBC29\uC2DD \uAC00\uC911\uCE58 (RATE \uC815\uB960 / AMOUNT \uC815\uC561) -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4A1} \uD560\uC778 \uBC29\uC2DD \uAC00\uC911\uCE58</div>
      <div style="font-size:10px;color:#94a3b8;margin-bottom:8px;">SHIP_FREE \uC720\uD615 \uC120\uD0DD \uC2DC \uC801\uC6A9 \uC548 \uB428</div>
      <div style="margin-bottom:10px;">
        <select v-model="domCfg.fixedDiscntValTypeCd" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in DISCNT_VAL_TYPE_ITEMS" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedDiscntValTypeCd==='__weighted__'">
        <div v-for="t in DISCNT_VAL_TYPE_ITEMS" :key="t.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#334155;min-width:72px;white-space:nowrap;">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.discntValTypeWeights[t.cd]" :style="'flex:1;accent-color:'+t.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.discntValTypeWeights[t.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;text-align:right;">{{ Math.round(domCfg.discntValTypeWeights[t.cd]/cfDiscntValTypeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="t in DISCNT_VAL_TYPE_ITEMS" :key="t.cd" :style="'flex:'+domCfg.discntValTypeWeights[t.cd]+';transition:flex .2s;background:'+t.color+';'"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- \uC218\uC815 \uB300\uC0C1 \uC9C0\uC815 -->
  <div v-if="cfg.mode==='update'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F3AF} \uC218\uC815 \uB300\uC0C1 \uD560\uC778\uC815\uCC45 \uC9C0\uC815</div>
    <div style="display:flex;gap:6px;align-items:center;max-width:400px;margin-top:10px;">
      <input type="text" :value="domCfg.fixedDiscntId || ''" readonly placeholder="\uB79C\uB364 \uC120\uD0DD"
        style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;cursor:pointer;font-family:monospace;"
        @click="onOpenDiscntPicker" />
      <button v-if="domCfg.fixedDiscntId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
        @click="domCfg.fixedDiscntId=''">\u2715</button>
      <button v-else class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenDiscntPicker">\uC120\uD0DD</button>
    </div>
    <div v-if="!domCfg.fixedDiscntId" style="font-size:10px;color:#94a3b8;margin-top:4px;">\uBBF8\uC9C0\uC815 \uC2DC \uB79C\uB364 \uD560\uC778\uC815\uCC45 \uC120\uD0DD</div>
  </div>

  <!-- \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch"
    @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="discntPicker.show" popup-cmd="cmPopup-discnt-pick" popup-code="discnt"
    title="\uD560\uC778\uC815\uCC45 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="discntPicker.show = false" />
</div>`}})();
