(function(){const{ref:L,reactive:D,computed:F}=Vue,{useSimulSetup:I,makeLogCols:E,makeBaseCfgColumns:j,makeRangeCol:m,makeRangeHandlers:T,rangeSlotTemplate:v}=window.ZdSimulBase,b=[{value:"PENDING",label:"\uC815\uC0B0\uB300\uAE30"},{value:"CONFIRMED",label:"\uC815\uC0B0\uD655\uC815"},{value:"PAID",label:"\uC9C0\uAE09\uC644\uB8CC"},{value:"DISPUTED",label:"\uC774\uC758\uC2E0\uCCAD\uC911"},{value:"HOLD",label:"\uBCF4\uB958"}],N=[{value:"WEEKLY",label:"\uC8FC\uAC04"},{value:"MONTHLY",label:"\uC6D4\uAC04"},{value:"BIWEEKLY",label:"\uACA9\uC8FC"}],K=[{value:"status",label:"\uC0C1\uD0DC \uBCC0\uACBD"},{value:"adjust",label:"\uAE08\uC561 \uC870\uC815"},{value:"memo",label:"\uC815\uC0B0 \uBA54\uBAA8"}];window.ZdSimulSettleMng={name:"ZdSimulSettleMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(O){const e=D({saleAmtMin:1e5,saleAmtMax:5e6,feeRateMin:3,feeRateMax:15,pgFeeRateMin:1,pgFeeRateMax:3,refundAmtRatio:10,settlePeriod:"MONTHLY",createStatus:"PENDING",vendorFromDB:!0,updateAction:"status",updateStatus:"CONFIRMED",adjustAmtMin:-1e5,adjustAmtMax:1e5}),n=L([]),z=F(()=>{const t=Math.round((e.saleAmtMin+e.saleAmtMax)/2),s=(e.feeRateMin+e.feeRateMax)/2,l=(e.pgFeeRateMin+e.pgFeeRateMax)/2,c=Math.round(t*e.refundAmtRatio/100),r=Math.round(t*s/100),p=Math.round(t*l/100),g=t-c-r-p;return{saleAmt:t,refundAmt:c,feeAmt:r,pgAmt:p,settleAmt:g}}),B=t=>t.toISOString().substring(0,7),H=t=>{const s=new Date;return s.setDate(s.getDate()+t),s},x=t=>Number(t).toLocaleString("ko-KR")+"\uC6D0",Y=I({domain:"\uC815\uC0B0",uiNm:"\uC815\uC0B0 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uC815\uC0B0",showToast:O.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:t,simulYn:s,randInt:l,pick:c})=>{var r,p,g,S,R,w,h;if(t==="create"){if(e.vendorFromDB&&!n.value.length){const A=await boApiSvc.syVendor.getPage({pageNo:1,pageSize:50,vendorStatusCd:"ACTIVE"});n.value=((p=(r=A.data)==null?void 0:r.data)==null?void 0:p.pageList)||[]}const u=n.value.length?c(n.value).vendorId:"VENDOR_SIM",i=((g=n.value.find(A=>A.vendorId===u))==null?void 0:g.vendorNm)||"\uC2DC\uBBAC\uC5C5\uCCB4",a=l(e.saleAmtMin,e.saleAmtMax),o=l(e.feeRateMin,e.feeRateMax)/100,f=l(e.pgFeeRateMin,e.pgFeeRateMax)/100,d=Math.round(a*e.refundAmtRatio/100),C=Math.round(a*o),k=Math.round(a*f),y=a-d-C-k,de=H(0),P={vendorId:u,settlePeriod:e.settlePeriod,settleYm:B(de),settleStatusCd:e.createStatus,saleAmt:a,refundAmt:d,feeAmt:C,pgAmt:k,settleAmt:y,feeRate:Math.round(o*1e4)/100,simulYn:s||"Y"},M=await boApi.post("/bo/zd/simul/settle/create",P,coUtil.cofApiHdr("\uC815\uC0B0\uC2DC\uBBAC","\uC0DD\uC131")),ce=((R=(S=M==null?void 0:M.data)==null?void 0:S.data)==null?void 0:R.settleId)||"-";return{ok:!0,desc:i+" | \uB9E4\uCD9C:"+x(a)+" \u2192 \uC815\uC0B0:"+x(y),meta:{id:ce,vendorNm:i,saleAmt:a,settleAmt:y,params:P}}}else{const u=((h=(w=(await boApiSvc.stSettle.getPage({pageNo:1,pageSize:30})).data)==null?void 0:w.data)==null?void 0:h.pageList)||[];if(!u.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uC815\uC0B0 \uC5C6\uC74C"};const i=c(u);let a={},o="";if(e.updateAction==="status")a.settleStatusCd=e.updateStatus,o="\uC0C1\uD0DC\u2192"+e.updateStatus;else if(e.updateAction==="adjust"){const d=l(e.adjustAmtMin,e.adjustAmtMax);a.adjustAmt=d,o="\uC870\uC815\uAE08\uC561 "+(d>=0?"+":"")+x(d)}else a.settleMemo="[\uC2DC\uBBAC\uBA54\uBAA8] "+new Date().toLocaleTimeString("ko-KR"),o="\uBA54\uBAA8 \uCD94\uAC00";const f={settleId:i.settleId,...a};return await boApi.post("/bo/zd/simul/settle/update",f,coUtil.cofApiHdr("\uC815\uC0B0\uC2DC\uBBAC","\uC218\uC815")),{ok:!0,desc:i.settleId+" "+o,meta:{id:i.settleId,params:f}}}}}),{cfg:_,state:U,logs:V,logPager:G,logSearch:Z,cfIsRunning:$,cfSuccessRate:W,onStart:q,onStop:J,onRunOnce:Q,onPreview:X,onClearLog:ee,onSetLogPage:te,onSearchLog:ae}=Y,se=E(),oe=j(),ne=[m("saleAmtMin","saleAmtMax","\uB9E4\uCD9C \uBC94\uC704",1e5,5e6,"\uC6D0"),m("feeRateMin","feeRateMax","\uC218\uC218\uB8CC\uC728 \uBC94\uC704",0,30,"%"),m("pgFeeRateMin","pgFeeRateMax","PG\uC218\uC218\uB8CC \uBC94\uC704",0,10,"%"),{key:"refundAmtRatio",label:"\uD658\uBD88\uBE44\uC728",type:"number",hint:"%"},{key:"settlePeriod",label:"\uC815\uC0B0 \uC8FC\uAE30",type:"select",options:N},{key:"createStatus",label:"\uCD08\uAE30 \uC0C1\uD0DC",type:"select",options:b},{key:"vendorFromDB",label:"DB \uC5C5\uCCB4 \uC790\uB3D9 \uBC30\uC815",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]}],le=[{key:"updateAction",label:"\uC218\uC815 \uC561\uC158",type:"select",options:K},{key:"updateStatus",label:"\uBCC0\uACBD \uC0C1\uD0DC",type:"select",options:b,visible:t=>t.updateAction==="status"},{key:"adjustAmtMin",label:"\uC870\uC815 \uCD5C\uC18C",type:"number",hint:"\uC6D0",visible:t=>t.updateAction==="adjust"},{key:"adjustAmtMax",label:"\uC870\uC815 \uCD5C\uB300",type:"number",hint:"\uC6D0",visible:t=>t.updateAction==="adjust"}],ie=T(e,[{minKey:"saleAmtMin",maxKey:"saleAmtMax"},{minKey:"feeRateMin",maxKey:"feeRateMax"},{minKey:"pgFeeRateMin",maxKey:"pgFeeRateMax"}]);return{cfg:_,domCfg:e,state:U,logs:V,logPager:G,cfIsRunning:$,cfSuccessRate:W,cfPreview:z,logCols:se,baseCfgColumns:oe,createCfgColumns:ne,updateCfgColumns:le,onStart:q,onStop:J,onRunOnce:Q,onPreview:X,onClearLog:ee,onSetLogPage:te,onSearchLog:ae,logSearch:Z,...ie,SETTLE_STATUSES:b,vendors:n}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F4B3} \uC815\uC0B0 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <!-- \uC2E4\uD589 \uC81C\uC5B4 -->
  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#16a34a,#4ade80)"
    accent-active="background:#f0fdf4;border:1.5px solid #16a34a;color:#14532d;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" />

  <!-- \uC0DD\uC131 \uC635\uC158 -->
  <div v-if="cfg.mode==='create'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F4B3} \uC815\uC0B0 \uC0DD\uC131 \uC635\uC158</div>
    <bo-form-area :columns="createCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
      ${v("saleAmtMin","saleAmtMax",1e5,5e6,"\uC6D0")}
      ${v("feeRateMin","feeRateMax",0,30,"%")}
      ${v("pgFeeRateMin","pgFeeRateMax",0,10,"%")}
    </bo-form-area>
  </div>

  <!-- \uC218\uC815 \uC635\uC158 -->
  <div v-if="cfg.mode==='update'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u270F \uC815\uC0B0 \uC218\uC815 \uC635\uC158</div>
    <bo-form-area :columns="updateCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
  </div>

  <!-- \uC815\uC0B0 \uBBF8\uB9AC\uBCF4\uAE30 (1/3 \uD3ED, \uC544\uB798 \uC904) -->
  <div v-if="cfg.mode==='create'" style="margin-top:12px;display:grid;grid-template-columns:1fr 2fr;gap:12px;">
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4CA} \uD3C9\uADE0\uAC12 \uAE30\uC900 \uBBF8\uB9AC\uBCF4\uAE30</div>
      <div style="margin-top:10px;display:flex;flex-direction:column;gap:5px;font-size:11px;">
        <div style="display:flex;justify-content:space-between;padding:5px 8px;background:#f8fafc;border-radius:4px;">
          <span style="color:#64748b;">\uB9E4\uCD9C\uC561</span><span style="font-weight:600;">{{ cfPreview.saleAmt.toLocaleString('ko-KR') }}\uC6D0</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:5px 8px;background:#fef2f2;border-radius:4px;">
          <span style="color:#64748b;">\uD658\uBD88\uC561</span><span style="font-weight:600;color:#dc2626;">-{{ cfPreview.refundAmt.toLocaleString('ko-KR') }}\uC6D0</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:5px 8px;background:#fef2f2;border-radius:4px;">
          <span style="color:#64748b;">\uC218\uC218\uB8CC</span><span style="font-weight:600;color:#dc2626;">-{{ cfPreview.feeAmt.toLocaleString('ko-KR') }}\uC6D0</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:5px 8px;background:#fef2f2;border-radius:4px;">
          <span style="color:#64748b;">PG\uC218\uC218\uB8CC</span><span style="font-weight:600;color:#dc2626;">-{{ cfPreview.pgAmt.toLocaleString('ko-KR') }}\uC6D0</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:7px 8px;background:#f0fdf4;border-radius:4px;border:1px solid #bbf7d0;margin-top:2px;">
          <span style="color:#166534;font-weight:600;">\uCD5C\uC885 \uC815\uC0B0\uC561</span><span style="font-weight:700;color:#16a34a;font-size:13px;">{{ cfPreview.settleAmt.toLocaleString('ko-KR') }}\uC6D0</span>
        </div>
      </div>
    </div>
    <div></div>
  </div>

  <!-- \uC2E4\uD589 \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch" @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />
</div>`}})();
