(function(){const{reactive:b,computed:p}=Vue,{useSimulSetup:T,makeLogCols:h,makeBaseCfgColumns:S,makeRangeCol:C,makeRangeHandlers:_,rangeSlotTemplate:w}=window.ZdSimulBase,i=[{cd:"RATE",label:"\uC801\uB9BD\uB960 (%)",color:"#3b82f6"},{cd:"AMOUNT",label:"\uC815\uC561 \uC801\uB9BD\uAE08",color:"#f59e0b"}],l=[{cd:"PURCHASE",label:"\uAD6C\uB9E4\uC801\uB9BD",color:"#22c55e"},{cd:"REVIEW",label:"\uB9AC\uBDF0\uC801\uB9BD",color:"#3b82f6"},{cd:"JOIN",label:"\uAC00\uC785\uC801\uB9BD",color:"#f59e0b"},{cd:"BIRTHDAY",label:"\uC0DD\uC77C\uC801\uB9BD",color:"#f97316"},{cd:"VIP",label:"VIP\uCD94\uAC00\uC801\uB9BD",color:"#a855f7"},{cd:"EVENT",label:"\uC774\uBCA4\uD2B8\uCC38\uC5EC\uC801\uB9BD",color:"#06b6d4"},{cd:"ADMIN",label:"\uAD00\uB9AC\uC790\uC9C0\uAE09\uC801\uB9BD",color:"#ef4444"}],A=[{value:"ALL",label:"\uC804\uCCB4 \uC0C1\uD488"},{value:"CATEGORY",label:"\uCE74\uD14C\uACE0\uB9AC"},{value:"PRODUCT",label:"\uD2B9\uC815 \uC0C1\uD488"}],V=["\uAE30\uBCF8 \uAD6C\uB9E4 \uC801\uB9BD\uAE08","VIP \uCD94\uAC00 \uC801\uB9BD\uAE08","\uB9AC\uBDF0 \uC791\uC131 \uC801\uB9BD\uAE08","\uC0DD\uC77C \uBCF4\uB108\uC2A4 \uC801\uB9BD\uAE08","\uC2E0\uADDC \uAC00\uC785 \uC801\uB9BD\uAE08","\uC774\uBCA4\uD2B8 \uCC38\uC5EC \uC801\uB9BD\uAE08"];window.ZdSimulSaveMng={name:"ZdSimulSaveMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(M){const t=b({fixedSaveTypeCd:"__weighted__",saveTypeCdWeights:{PURCHASE:35,REVIEW:20,JOIN:15,BIRTHDAY:10,VIP:10,EVENT:7,ADMIN:3},fixedSaveValType:"__weighted__",saveValTypeWeights:{RATE:65,AMOUNT:35},saveRateMin:1,saveRateMax:10,saveAmtMin:100,saveAmtMax:5e3,saveDurationDays:365,saveScope:"PRODUCT",saveProdIds:""}),v=(e,a)=>{const n=Object.values(a).reduce((o,r)=>o+Number(r),0)||1;let d=Math.random()*n;for(const o of e)if(d-=Number(a[o.cd]||0),d<=0)return o;return e[0]},E=()=>{const e=t.fixedSaveTypeCd;return e&&e!=="__weighted__"?l.find(a=>a.cd===e)||l[0]:v(l,t.saveTypeCdWeights)},R=()=>{const e=t.fixedSaveValType;return e&&e!=="__weighted__"?i.find(a=>a.cd===e)||i[0]:v(i,t.saveValTypeWeights)},g=e=>{const a=new Date;return a.setDate(a.getDate()+e),a.toISOString().replace("T"," ").substring(0,19)},k=T({domain:"\uC801\uB9BD\uAE08",uiNm:"\uD504\uB85C\uBAA8\uC158 \uC801\uB9BD\uAE08 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uC801\uB9BD\uAE08",showToast:M.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:e,namePrefix:a,randInt:n,pick:d})=>{var o,r;if(e==="create"){const m=E(),s=R().cd==="RATE",f=s?n(t.saveRateMin,t.saveRateMax):0,u=s?0:n(t.saveAmtMin,t.saveAmtMax),x=(a||"")+"["+m.label+"] "+d(V),X=t.saveScope==="PRODUCT"&&t.saveProdIds?t.saveProdIds.split(/[\s,]+/).map(ae=>ae.trim()).filter(Boolean):[],y={saveNm:x,savePurposeCd:m.cd,saveRatePct:s?f:null,saveAmt:s?null:u,startDate:g(0),endDate:g(t.saveDurationDays),scopeCd:t.saveScope,prodIds:X,simulYn:"Y"},c=await boApi.post("/bo/zd/simul/promo/save-create",y,coUtil.cofApiHdr("\uC801\uB9BD\uAE08\uC2DC\uBBAC","\uC801\uB9BD\uAE08\uC0DD\uC131")),ee=((r=(o=c==null?void 0:c.data)==null?void 0:o.data)==null?void 0:r.saveId)||"-",te=s?f+"% \uC801\uB9BD\uB960":u.toLocaleString()+"\uC6D0 \uC815\uC561";return{ok:!0,desc:x+" "+te,meta:{id:ee,params:y}}}else return{ok:!1,reason:"\uC801\uB9BD\uAE08\uC815\uCC45 \uC218\uC815\uC740 \uBBF8\uC9C0\uC6D0 (\uC0DD\uC131 \uBAA8\uB4DC \uC0AC\uC6A9)"}}}),{cfg:I,state:P,logs:D,logPager:O,logSearch:N,cfIsRunning:W,cfSuccessRate:L,onStart:U,onStop:z,onRunOnce:Y,onPreview:H,onPreviewCreate:B,onClearLog:F,onSetLogPage:j,onSearchLog:Z}=k,J=h(),K=S(),q=[C("saveRateMin","saveRateMax","\uC801\uB9BD\uB960 \uBC94\uC704",0,50,"%",{visible:e=>e.fixedSaveValType!=="AMOUNT"}),{key:"saveAmtMin",label:"\uC815\uC561 \uC801\uB9BD\uAE08 \uCD5C\uC18C",type:"number",hint:"\uC6D0",visible:e=>e.fixedSaveValType==="AMOUNT"},{key:"saveAmtMax",label:"\uC815\uC561 \uC801\uB9BD\uAE08 \uCD5C\uB300",type:"number",hint:"\uC6D0",visible:e=>e.fixedSaveValType==="AMOUNT"},{key:"saveDurationDays",label:"\uC720\uD6A8\uAE30\uAC04",type:"number",hint:"\uC77C"},{key:"saveScope",label:"\uC801\uC6A9\uBC94\uC704",type:"select",options:A},{key:"saveProdIds",label:"\uC2DC\uBBAC \uC0C1\uD488 ID",type:"text",placeholder:"ID \uCF64\uB9C8 \uAD6C\uBD84 (\uAE30\uBCF8 5\uAC1C \uC790\uB3D9)",hint:"\uBE44\uC6B0\uBA74 simulYn=Y \uC0C1\uD488 \uC790\uB3D9\uC870\uD68C",visible:e=>e.saveScope==="PRODUCT"}],G=p(()=>Object.values(t.saveTypeCdWeights).reduce((e,a)=>e+Number(a),0)||1),$=p(()=>Object.values(t.saveValTypeWeights).reduce((e,a)=>e+Number(a),0)||1),Q=_(t,[{minKey:"saveRateMin",maxKey:"saveRateMax"}]);return{cfg:I,domCfg:t,state:P,logs:D,logPager:O,logSearch:N,cfIsRunning:W,cfSuccessRate:L,logCols:J,baseCfgColumns:K,saveCfgColumns:q,cfSaveTypeCdTotal:G,cfSaveValTypeTotal:$,SAVE_TYPE_ITEMS:l,SAVE_VAL_ITEMS:i,onStart:U,onStop:z,onRunOnce:Y,onPreview:H,onPreviewCreate:B,onClearLog:F,onSetLogPage:j,onSearchLog:Z,...Q}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1FA99} \uD504\uB85C\uBAA8\uC158 \uC801\uB9BD\uAE08 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#059669,#34d399)"
    accent-active="background:#ecfdf5;border:1.5px solid #059669;color:#065f46;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uC801\uB9BD\uAE08 \uC124\uC815 -->
  <div class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1FA99} \uC801\uB9BD\uAE08\uC815\uCC45 \uC124\uC815</div>
    <bo-form-area :columns="saveCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
      ${w("saveRateMin","saveRateMax",0,50,"%")}
    </bo-form-area>
  </div>

  <!-- \uAC00\uC911\uCE58 \uD328\uB110 -->
  <div style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <!-- \uC801\uB9BD\uAE08 \uC6A9\uB3C4 \uC720\uD615 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F3AF} \uC801\uB9BD\uAE08 \uC720\uD615 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedSaveTypeCd" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in SAVE_TYPE_ITEMS" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedSaveTypeCd==='__weighted__'">
        <div v-for="t in SAVE_TYPE_ITEMS" :key="t.cd" style="display:flex;align-items:center;gap:5px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#334155;min-width:100px;white-space:nowrap;">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.saveTypeCdWeights[t.cd]" :style="'flex:1;accent-color:'+t.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.saveTypeCdWeights[t.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;text-align:right;">{{ Math.round(domCfg.saveTypeCdWeights[t.cd]/cfSaveTypeCdTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="t in SAVE_TYPE_ITEMS" :key="t.cd" :style="'flex:'+domCfg.saveTypeCdWeights[t.cd]+';transition:flex .2s;background:'+t.color+';'"></div>
        </div>
      </div>
    </div>
    <!-- \uC801\uB9BD \uBC29\uC2DD \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4A1} \uC801\uB9BD \uBC29\uC2DD \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedSaveValType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in SAVE_VAL_ITEMS" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedSaveValType==='__weighted__'">
        <div v-for="t in SAVE_VAL_ITEMS" :key="t.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#334155;min-width:94px;white-space:nowrap;">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.saveValTypeWeights[t.cd]" :style="'flex:1;accent-color:'+t.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.saveValTypeWeights[t.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;text-align:right;">{{ Math.round(domCfg.saveValTypeWeights[t.cd]/cfSaveValTypeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="t in SAVE_VAL_ITEMS" :key="t.cd" :style="'flex:'+domCfg.saveValTypeWeights[t.cd]+';transition:flex .2s;background:'+t.color+';'"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch"
    @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />
</div>`}})();
