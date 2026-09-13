(function(){const{reactive:x,computed:y}=Vue,{useSimulSetup:M,makeLogCols:P,makeBaseCfgColumns:w,makeRangeCol:C,makeRangeHandlers:k,rangeSlotTemplate:b}=window.ZdSimulBase,l=[{cd:"RATE",label:"\uC815\uB960 \uD560\uC778 (%)",color:"#3b82f6"},{cd:"AMOUNT",label:"\uC815\uC561 \uD560\uC778 (\uC6D0)",color:"#f59e0b"}],r=[{cd:"PROD_DISCNT",label:"\uC0C1\uD488\uD560\uC778\uCFE0\uD3F0",color:"#3b82f6"},{cd:"ORDER_DISCNT",label:"\uC8FC\uBB38\uD560\uC778\uCFE0\uD3F0",color:"#a855f7"},{cd:"SHIP_DISCNT",label:"\uBC30\uC1A1\uBE44\uD560\uC778\uCFE0\uD3F0",color:"#22c55e"},{cd:"SHIP_FREE",label:"\uBB34\uB8CC\uBC30\uC1A1\uCFE0\uD3F0",color:"#06b6d4"},{cd:"JOIN_GIFT",label:"\uD68C\uC6D0\uAC00\uC785\uCD95\uD558\uCFE0\uD3F0",color:"#f59e0b"},{cd:"VIP",label:"VIP\uCFE0\uD3F0",color:"#f97316"},{cd:"CLAIM_COMP",label:"\uD074\uB808\uC784\uAD00\uB9AC\uC790\uC9C0\uAE09\uCFE0\uD3F0",color:"#ef4444"}],O=[{value:"ALL",label:"\uC804\uCCB4 \uC0C1\uD488"},{value:"CATEGORY",label:"\uCE74\uD14C\uACE0\uB9AC"},{value:"PRODUCT",label:"\uD2B9\uC815 \uC0C1\uD488"}],R=["\uCCAB\uAD6C\uB9E4 \uAC10\uC0AC \uCFE0\uD3F0","\uC7AC\uBC29\uBB38 \uD560\uC778 \uCFE0\uD3F0","\uC0DD\uC77C \uD2B9\uBCC4 \uCFE0\uD3F0","\uC8FC\uB9D0 \uD2B9\uAC00 \uCFE0\uD3F0","\uC2E0\uC0C1\uD488 \uB7F0\uCE6D \uCFE0\uD3F0","\uD68C\uC6D0\uB4F1\uAE09 \uC5C5\uADF8\uB808\uC774\uB4DC \uCFE0\uD3F0","VIP \uC804\uC6A9 \uD61C\uD0DD \uCFE0\uD3F0","\uC624\uB298\uB9CC \uD2B9\uAC00 \uCFE0\uD3F0","\uBA64\uBC84\uC2ED \uAC00\uC785 \uAE30\uB150 \uCFE0\uD3F0","\uD55C\uC815 \uD2B9\uAC00 \uCFE0\uD3F0"];window.ZdSimulCouponMng={name:"ZdSimulCouponMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(A){const e=x({fixedCouponId:"",fixedCouponType:"__weighted__",couponTypeWeights:{PROD_DISCNT:35,ORDER_DISCNT:22,SHIP_DISCNT:13,SHIP_FREE:10,JOIN_GIFT:10,VIP:7,CLAIM_COMP:3},fixedCouponDiscType:"__weighted__",couponDiscTypeWeights:{RATE:70,AMOUNT:30},couponDiscRateMin:5,couponDiscRateMax:30,couponDiscAmtMin:1e3,couponDiscAmtMax:3e4,couponIssueCountMin:10,couponIssueCountMax:500,couponDurationDays:30,couponScope:"PRODUCT",couponProdIds:"",couponMinOrderAmt:0,couponMaxDiscAmt:5e4}),v=(o,t)=>{const n=Object.values(t).reduce((p,u)=>p+Number(u),0)||1;let s=Math.random()*n;for(const p of o)if(s-=Number(t[p.cd]||0),s<=0)return p;return o[0]},E=()=>{const o=e.fixedCouponType;return o&&o!=="__weighted__"?r.find(t=>t.cd===o)||r[0]:v(r,e.couponTypeWeights)},N=()=>{const o=e.fixedCouponDiscType;return o&&o!=="__weighted__"?l.find(t=>t.cd===o)||l[0]:v(l,e.couponDiscTypeWeights)},g=o=>{const t=new Date;return t.setDate(t.getDate()+o),t.toISOString().replace("T"," ").substring(0,19)},z=()=>String(Date.now()).slice(-6),U=M({domain:"\uCFE0\uD3F0",uiNm:"\uD504\uB85C\uBAA8\uC158 \uCFE0\uD3F0 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uCFE0\uD3F0",showToast:A.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:o,namePrefix:t,randInt:n,pick:s})=>{var p,u,_,D;if(o==="create"){const c=E(),a=N(),d=a.cd==="RATE",f=d?n(e.couponDiscRateMin,e.couponDiscRateMax):n(e.couponDiscAmtMin,e.couponDiscAmtMax),S=(t||"")+s(R),po=e.couponScope==="PRODUCT"&&e.couponProdIds?e.couponProdIds.split(/[\s,]+/).map(lo=>lo.trim()).filter(Boolean):[],I={couponNm:S,couponCd:"SIM_C_"+z(),couponTypeCd:c.cd,couponDiscTypeCd:a.cd,discVal:f,issueCount:n(e.couponIssueCountMin,e.couponIssueCountMax),startDate:g(0),endDate:g(e.couponDurationDays),scopeCd:e.couponScope,prodIds:po,minOrderAmt:e.couponMinOrderAmt,maxDiscAmt:e.couponMaxDiscAmt,simulYn:"Y"},m=await boApi.post("/bo/zd/simul/promo/coupon-create",I,coUtil.cofApiHdr("\uCFE0\uD3F0\uC2DC\uBBAC","\uCFE0\uD3F0\uC0DD\uC131")),so=((u=(p=m==null?void 0:m.data)==null?void 0:p.data)==null?void 0:u.couponId)||"-",ao=d?f+"%":f.toLocaleString()+"\uC6D0";return{ok:!0,desc:"["+c.label+"] "+S+" "+ao,meta:{id:so,params:I}}}else{let c=e.fixedCouponId;if(!c){const d=((D=(_=(await boApiSvc.pmCoupon.getPage({pageNo:1,pageSize:30})).data)==null?void 0:_.data)==null?void 0:D.pageList)||[];if(!d.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uCFE0\uD3F0 \uC5C6\uC74C"};c=s(d).couponId}const a={couponId:c,endDate:g(n(7,30))};return await boApi.post("/bo/zd/simul/promo/coupon-update",a,coUtil.cofApiHdr("\uCFE0\uD3F0\uC2DC\uBBAC","\uCFE0\uD3F0\uC218\uC815")),{ok:!0,desc:c+" \uAE30\uAC04 \uC5F0\uC7A5",meta:{id:c,params:a}}}}}),{cfg:W,state:L,logs:V,logPager:Y,logSearch:F,cfIsRunning:H,cfSuccessRate:K,onStart:j,onStop:B,onRunOnce:G,onPreview:Z,onPreviewCreate:J,onClearLog:$,onSetLogPage:q,onSearchLog:Q}=U,X=P(),oo=w(),eo=[C("couponDiscRateMin","couponDiscRateMax","\uD560\uC778\uC728 \uBC94\uC704",0,100,"%",{visible:o=>o.fixedCouponDiscType!=="AMOUNT"}),{key:"couponDiscAmtMin",label:"\uD560\uC778\uC561 \uCD5C\uC18C",type:"number",hint:"\uC6D0",visible:o=>o.fixedCouponDiscType==="AMOUNT"},{key:"couponDiscAmtMax",label:"\uD560\uC778\uC561 \uCD5C\uB300",type:"number",hint:"\uC6D0",visible:o=>o.fixedCouponDiscType==="AMOUNT"},C("couponIssueCountMin","couponIssueCountMax","\uBC1C\uD589\uC218 \uBC94\uC704",1,1e3,"\uB9E4"),{key:"couponDurationDays",label:"\uC720\uD6A8\uAE30\uAC04",type:"number",hint:"\uC77C"},{key:"couponScope",label:"\uC801\uC6A9\uBC94\uC704",type:"select",options:O},{key:"_couponProds",label:"\uC801\uC6A9 \uC0C1\uD488",type:"slot",name:"couponProds",colSpan:3,visible:o=>o.couponScope==="PRODUCT"},{key:"couponMinOrderAmt",label:"\uCD5C\uC18C \uC8FC\uBB38\uC561",type:"number",hint:"\uC6D0"},{key:"couponMaxDiscAmt",label:"\uCD5C\uB300 \uD560\uC778\uC561",type:"number",hint:"\uC6D0"}],to=y(()=>Object.values(e.couponTypeWeights).reduce((o,t)=>o+Number(t),0)||1),no=y(()=>Object.values(e.couponDiscTypeWeights).reduce((o,t)=>o+Number(t),0)||1),io=k(e,[{minKey:"couponDiscRateMin",maxKey:"couponDiscRateMax"},{minKey:"couponIssueCountMin",maxKey:"couponIssueCountMax"}]),i=x({show:!1,searchValue:"",rows:[],loading:!1}),h=async()=>{var o,t;i.loading=!0;try{const n=await boApiSvc.pmCoupon.getPage({pageNo:1,pageSize:20,...i.searchValue?{searchValue:i.searchValue}:{}});i.rows=((t=(o=n.data)==null?void 0:o.data)==null?void 0:t.pageList)||[]}catch{i.rows=[]}i.loading=!1},co=async()=>{i.show=!0,i.searchValue="",await h()},T=o=>{e.fixedCouponId=o.couponId,i.show=!1};return{fnCmPopupCallback:(o,t,n)=>{if(o==="cmPopup-coupon-pick"){i.show=!1,n!=null&&T(n);return}},cfg:W,domCfg:e,state:L,logs:V,logPager:Y,logSearch:F,cfIsRunning:H,cfSuccessRate:K,logCols:X,baseCfgColumns:oo,couponCfgColumns:eo,cfCouponTypeTotal:to,cfDiscTotal:no,COUPON_TYPE_ITEMS:r,DISC_TYPE_ITEMS:l,onStart:j,onStop:B,onRunOnce:G,onPreview:Z,onPreviewCreate:J,onClearLog:$,onSetLogPage:q,onSearchLog:Q,...io,couponPicker:i,onOpenCouponPicker:co,onSelectCoupon:T,_loadCouponPicker:h}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F39F} \uD504\uB85C\uBAA8\uC158 \uCFE0\uD3F0 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#7c3aed,#c084fc)"
    accent-active="background:#faf5ff;border:1.5px solid #7c3aed;color:#6d28d9;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uCFE0\uD3F0 \uC124\uC815 -->
  <div class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F39F} \uCFE0\uD3F0 \uC124\uC815</div>
    <bo-form-area :columns="couponCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
      ${b("couponDiscRateMin","couponDiscRateMax",0,100,"%")}
      ${b("couponIssueCountMin","couponIssueCountMax",1,1e3,"\uB9E4")}
    </bo-form-area>
  </div>

  <!-- \uAC00\uC911\uCE58 \uD328\uB110 (\uCFE0\uD3F0 \uD0C0\uC785 1/3 + \uD560\uC778\uBC29\uC2DD 1/3 + \uBE48\uCE78 1/3) -->
  <div style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <!-- \uCFE0\uD3F0 \uC720\uD615 \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F3F7} \uCFE0\uD3F0 \uC720\uD615 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedCouponType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in COUPON_TYPE_ITEMS" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedCouponType==='__weighted__'">
        <div v-for="t in COUPON_TYPE_ITEMS" :key="t.cd" style="display:flex;align-items:center;gap:5px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#334155;min-width:108px;white-space:nowrap;">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.couponTypeWeights[t.cd]" :style="'flex:1;accent-color:'+t.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.couponTypeWeights[t.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;text-align:right;">{{ Math.round(domCfg.couponTypeWeights[t.cd]/cfCouponTypeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="t in COUPON_TYPE_ITEMS" :key="t.cd" :style="'flex:'+domCfg.couponTypeWeights[t.cd]+';transition:flex .2s;background:'+t.color"></div>
        </div>
      </div>
    </div>
    <!-- \uD560\uC778 \uBC29\uC2DD \uAC00\uC911\uCE58 -->
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4A1} \uD560\uC778 \uBC29\uC2DD \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedCouponDiscType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in DISC_TYPE_ITEMS" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedCouponDiscType==='__weighted__'">
        <div v-for="t in DISC_TYPE_ITEMS" :key="t.cd" style="display:flex;align-items:center;gap:5px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#334155;min-width:80px;white-space:nowrap;">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.couponDiscTypeWeights[t.cd]" :style="'flex:1;accent-color:'+t.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.couponDiscTypeWeights[t.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;text-align:right;">{{ Math.round(domCfg.couponDiscTypeWeights[t.cd]/cfDiscTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="t in DISC_TYPE_ITEMS" :key="t.cd" :style="'flex:'+domCfg.couponDiscTypeWeights[t.cd]+';transition:flex .2s;background:'+t.color"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- \uC218\uC815 \uB300\uC0C1 \uC9C0\uC815 -->
  <div v-if="cfg.mode==='update'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F3AF} \uC218\uC815 \uB300\uC0C1 \uCFE0\uD3F0 \uC9C0\uC815</div>
    <div style="display:flex;gap:6px;align-items:center;max-width:400px;margin-top:10px;">
      <input type="text" :value="domCfg.fixedCouponId || ''" readonly placeholder="\uB79C\uB364 \uC120\uD0DD"
        style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;cursor:pointer;font-family:monospace;"
        @click="onOpenCouponPicker" />
      <button v-if="domCfg.fixedCouponId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
        @click="domCfg.fixedCouponId=''">\u2715</button>
      <button v-else class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenCouponPicker">\uC120\uD0DD</button>
    </div>
    <div v-if="!domCfg.fixedCouponId" style="font-size:10px;color:#94a3b8;margin-top:4px;">\uBBF8\uC9C0\uC815 \uC2DC \uB79C\uB364 \uCFE0\uD3F0 \uC120\uD0DD</div>
  </div>

  <!-- \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch"
    @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="couponPicker.show" popup-cmd="cmPopup-coupon-pick" popup-code="coupon"
    title="\uCFE0\uD3F0 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="couponPicker.show = false" />
</div>`}})();
