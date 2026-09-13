(function(){const{reactive:A,ref:_e,computed:k}=Vue,{useSimulSetup:B,makeLogCols:H,makeBaseCfgColumns:j,makeRangeCol:D,makeRangeHandlers:F,rangeSlotTemplate:M}=window.ZdSimulBase,$=[{id:"coupon",label:"\uCFE0\uD3F0"},{id:"discnt",label:"\uD560\uC778\uC815\uCC45"},{id:"save",label:"\uC801\uB9BD\uAE08\uC815\uCC45"},{id:"both",label:"\uCFE0\uD3F0+\uD560\uC778 \uD63C\uD569"}],Ie=[{value:"RATE",label:"% \uD560\uC778"},{value:"AMOUNT",label:"\uC815\uC561 \uD560\uC778"}],w=[{value:"ALL",label:"\uC804\uCCB4 \uC0C1\uD488"},{value:"CATEGORY",label:"\uCE74\uD14C\uACE0\uB9AC"},{value:"PRODUCT",label:"\uD2B9\uC815 \uC0C1\uD488"}],_=[{cd:"RATE",label:"% \uD560\uC778",color:"#3b82f6"},{cd:"AMOUNT",label:"\uC815\uC561 \uD560\uC778",color:"#f59e0b"}],P=[{cd:"RATE",label:"\uC801\uB9BD\uB960 %",color:"#22c55e"},{cd:"AMOUNT",label:"\uC815\uC561 \uC801\uB9BD",color:"#f97316"}],Z=["\uCCAB\uAD6C\uB9E4 \uAC10\uC0AC \uCFE0\uD3F0","\uC7AC\uBC29\uBB38 \uD560\uC778 \uCFE0\uD3F0","\uC0DD\uC77C \uD2B9\uBCC4 \uCFE0\uD3F0","\uC8FC\uB9D0 \uD2B9\uAC00 \uCFE0\uD3F0","\uC2E0\uC0C1\uD488 \uB7F0\uCE6D \uCFE0\uD3F0","\uD68C\uC6D0\uB4F1\uAE09 \uC5C5\uADF8\uB808\uC774\uB4DC \uCFE0\uD3F0","VIP \uC804\uC6A9 \uD61C\uD0DD \uCFE0\uD3F0","\uC624\uB298\uB9CC \uD2B9\uAC00 \uCFE0\uD3F0","\uBA64\uBC84\uC2ED \uAC00\uC785 \uAE30\uB150 \uCFE0\uD3F0","\uD55C\uC815 \uD2B9\uAC00 \uCFE0\uD3F0"],q=["\uBD04 \uC2DC\uC98C \uD560\uC778","\uC5EC\uB984 \uC138\uC77C","\uCD94\uC11D \uD2B9\uBCC4 \uD560\uC778","\uACA8\uC6B8 \uD398\uC2A4\uD0C0","\uC8FC\uB9D0 \uD2B9\uAC00 \uC774\uBCA4\uD2B8","\uC2E0\uADDC \uACE0\uAC1D \uD560\uC778","\uB300\uB7C9 \uAD6C\uB9E4 \uD560\uC778","\uD50C\uB798\uC2DC \uC138\uC77C"],G=["\uAE30\uBCF8 \uAD6C\uB9E4 \uC801\uB9BD","VIP \uCD94\uAC00 \uC801\uB9BD","\uB9AC\uBDF0 \uC791\uC131 \uC801\uB9BD","\uC0DD\uC77C \uBCF4\uB108\uC2A4 \uC801\uB9BD","\uC2E0\uADDC \uAC00\uC785 \uC801\uB9BD","\uC774\uBCA4\uD2B8 \uCC38\uC5EC \uC801\uB9BD"];window.ZdSimulPromoMng={name:"ZdSimulPromoMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(J){const o=A({promoType:"coupon",fixedCouponId:"",fixedDiscntId:"",fixedCouponDiscType:"__weighted__",couponDiscTypeWeights:{RATE:70,AMOUNT:30},couponDiscRateMin:5,couponDiscRateMax:30,couponDiscAmtMin:1e3,couponDiscAmtMax:3e4,couponIssueCountMin:10,couponIssueCountMax:500,couponDurationDays:30,couponScope:"PRODUCT",couponProdIds:"",couponMinOrderAmt:0,couponMaxDiscAmt:5e4,fixedDiscntType:"__weighted__",discntTypeWeights:{RATE:60,AMOUNT:40},discntRateMin:3,discntRateMax:20,discntAmtMin:500,discntAmtMax:1e4,discntDurationDays:14,discntMinOrderAmt:0,discntMaxDiscAmt:5e4,discntScope:"PRODUCT",discntProdIds:"",fixedSaveType:"__weighted__",saveTypeWeights:{RATE:65,AMOUNT:35},saveRateMin:1,saveRateMax:10,saveAmtMin:100,saveAmtMax:5e3,saveDurationDays:365,saveScope:"PRODUCT",saveProdIds:""}),I=(e,t,n)=>{const c=o[n];if(c&&c!=="__weighted__")return e.find(r=>r.cd===c)||e[0];const m=Object.values(t).reduce((r,S)=>r+Number(S),0)||1;let h=Math.random()*m;for(const r of e)if(h-=Number(t[r.cd]||0),h<=0)return r;return e[0]},Q=()=>I(_,o.couponDiscTypeWeights,"fixedCouponDiscType"),X=()=>I(_,o.discntTypeWeights,"fixedDiscntType"),ee=()=>I(P,o.saveTypeWeights,"fixedSaveType"),b=e=>{const t=new Date;return t.setDate(t.getDate()+e),t.toISOString().replace("T"," ").substring(0,19)},oe=()=>String(Date.now()).slice(-6),te=B({domain:"\uD504\uB85C\uBAA8\uC158",uiNm:"\uD504\uB85C\uBAA8\uC158 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uD504\uB85C\uBAA8",showToast:J.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:e,simulYn:t,namePrefix:n,randInt:c,pick:m})=>{var h,r,S,z,U,V,W,Y,L,K;if(e==="create"){let x=o.promoType;x==="both"&&(x=Math.random()<.5?"coupon":"discnt");const y=b(0);if(x==="coupon"){const i=Q(),s=i.cd==="RATE",a=s?c(o.couponDiscRateMin,o.couponDiscRateMax):c(o.couponDiscAmtMin,o.couponDiscAmtMax),u=(n||"")+m(Z),v=o.couponScope==="PRODUCT"&&o.couponProdIds?o.couponProdIds.split(/[\s,]+/).map(T=>T.trim()).filter(Boolean):[],f={couponNm:u,couponCd:"SIM_C_"+oe(),couponDiscTypeCd:i.cd,discVal:a,issueCount:c(o.couponIssueCountMin,o.couponIssueCountMax),startDate:y,endDate:b(o.couponDurationDays),scopeCd:o.couponScope,prodIds:v,minOrderAmt:o.couponMinOrderAmt,maxDiscAmt:o.couponMaxDiscAmt,simulYn:t||"Y"},l=await boApi.post("/bo/zd/simul/promo/coupon-create",f,coUtil.cofApiHdr("\uD504\uB85C\uBAA8\uC2DC\uBBAC","\uCFE0\uD3F0\uC0DD\uC131")),g=((r=(h=l==null?void 0:l.data)==null?void 0:h.data)==null?void 0:r.couponId)||"-",C=s?a+"%":a.toLocaleString()+"\uC6D0";return{ok:!0,desc:"[\uCFE0\uD3F0] "+u+" "+C+" \uD560\uC778 ["+i.label+"]",meta:{id:g,type:"\uCFE0\uD3F0",params:f}}}else if(x==="discnt"){const i=X(),s=i.cd==="RATE",a=s?c(o.discntRateMin,o.discntRateMax):c(o.discntAmtMin,o.discntAmtMax),u=(n||"")+m(q),v=o.discntScope==="PRODUCT"&&o.discntProdIds?o.discntProdIds.split(/[\s,]+/).map(T=>T.trim()).filter(Boolean):[],f={discntNm:u,discntValTypeCd:i.cd,discVal:a,startDate:y,endDate:b(o.discntDurationDays),scopeCd:o.discntScope,prodIds:v,minOrderAmt:o.discntMinOrderAmt,maxDiscAmt:o.discntMaxDiscAmt,simulYn:t||"Y"},l=await boApi.post("/bo/zd/simul/promo/discnt-create",f,coUtil.cofApiHdr("\uD504\uB85C\uBAA8\uC2DC\uBBAC","\uD560\uC778\uC0DD\uC131")),g=((z=(S=l==null?void 0:l.data)==null?void 0:S.data)==null?void 0:z.discntId)||"-",C=s?a+"%":a.toLocaleString()+"\uC6D0";return{ok:!0,desc:"[\uD560\uC778] "+u+" "+C+" ["+i.label+"]",meta:{id:g,type:"\uD560\uC778",params:f}}}else{const i=ee(),s=i.cd==="RATE",a=s?c(o.saveRateMin,o.saveRateMax):0,u=s?0:c(o.saveAmtMin,o.saveAmtMax),v=(n||"")+m(G),f=o.saveScope==="PRODUCT"&&o.saveProdIds?o.saveProdIds.split(/[\s,]+/).map(we=>we.trim()).filter(Boolean):[],l={saveNm:v,saveRatePct:s?a:null,saveAmt:s?null:u,startDate:y,endDate:b(o.saveDurationDays),scopeCd:o.saveScope,prodIds:f,simulYn:t||"Y"},g=await boApi.post("/bo/zd/simul/promo/save-create",l,coUtil.cofApiHdr("\uD504\uB85C\uBAA8\uC2DC\uBBAC","\uC801\uB9BD\uC0DD\uC131")),C=((V=(U=g==null?void 0:g.data)==null?void 0:U.data)==null?void 0:V.saveId)||"-",T=s?a+"% \uC801\uB9BD\uB960":u.toLocaleString()+"\uC6D0 \uC815\uC561";return{ok:!0,desc:"[\uC801\uB9BD] "+v+" "+T+" ["+i.label+"]",meta:{id:C,type:"\uC801\uB9BD",params:l}}}}else{const x=o.promoType==="both"?"coupon":o.promoType,y={endDate:b(c(7,30))};if(x==="coupon"){let i=o.fixedCouponId;if(!i){const a=((Y=(W=(await boApiSvc.pmCoupon.getPage({pageNo:1,pageSize:30})).data)==null?void 0:W.data)==null?void 0:Y.pageList)||[];if(!a.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uCFE0\uD3F0 \uC5C6\uC74C"};i=m(a).couponId}const s={couponId:i,...y};return await boApi.post("/bo/zd/simul/promo/coupon-update",s,coUtil.cofApiHdr("\uD504\uB85C\uBAA8\uC2DC\uBBAC","\uCFE0\uD3F0\uC218\uC815")),{ok:!0,desc:"[\uCFE0\uD3F0] "+i+" \uAE30\uAC04 \uC5F0\uC7A5",meta:{id:i,params:s}}}else{let i=o.fixedDiscntId;if(!i){const a=((K=(L=(await boApiSvc.pmDiscnt.getPage({pageNo:1,pageSize:30})).data)==null?void 0:L.data)==null?void 0:K.pageList)||[];if(!a.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uD560\uC778\uC815\uCC45 \uC5C6\uC74C"};i=m(a).discntId}const s={discntId:i,...y};return await boApi.post("/bo/zd/simul/promo/discnt-update",s,coUtil.cofApiHdr("\uD504\uB85C\uBAA8\uC2DC\uBBAC","\uD560\uC778\uC218\uC815")),{ok:!0,desc:"[\uD560\uC778] "+i+" \uAE30\uAC04 \uC5F0\uC7A5",meta:{id:i,params:s}}}}}}),{cfg:ie,state:se,logs:ne,logPager:ae,logSearch:ce,cfIsRunning:pe,cfSuccessRate:de,onStart:le,onStop:re,onRunOnce:ue,onPreview:me,onClearLog:fe,onSetLogPage:ge,onSearchLog:xe}=te,p=A({show:!1,searchValue:"",rows:[],loading:!1}),d=A({show:!1,searchValue:"",rows:[],loading:!1}),R=async()=>{var e,t;p.loading=!0;try{const n=await boApiSvc.pmCoupon.getPage({pageNo:1,pageSize:20,...p.searchValue?{searchValue:p.searchValue,searchType:"couponId,couponNm"}:{}});p.rows=((t=(e=n.data)==null?void 0:e.data)==null?void 0:t.pageList)||[]}catch{p.rows=[]}p.loading=!1},O=async()=>{var e,t;d.loading=!0;try{const n=await boApiSvc.pmDiscnt.getPage({pageNo:1,pageSize:20,...d.searchValue?{searchValue:d.searchValue,searchType:"discntId,discntNm"}:{}});d.rows=((t=(e=n.data)==null?void 0:e.data)==null?void 0:t.pageList)||[]}catch{d.rows=[]}d.loading=!1},ye=async()=>{p.show=!0,p.searchValue="",await R()},ve=async()=>{d.show=!0,d.searchValue="",await O()},E=e=>{o.fixedCouponId=e.couponId,p.show=!1},N=e=>{o.fixedDiscntId=e.discntId,d.show=!1},be=H(),he=j(),Ce=[D("couponDiscRateMin","couponDiscRateMax","\uD560\uC778\uC728 \uBC94\uC704",0,100,"%",{visible:e=>e.fixedCouponDiscType!=="AMOUNT"}),{key:"couponDiscAmtMin",label:"\uD560\uC778\uC561 \uCD5C\uC18C",type:"number",hint:"\uC6D0",visible:e=>e.fixedCouponDiscType==="AMOUNT"},{key:"couponDiscAmtMax",label:"\uD560\uC778\uC561 \uCD5C\uB300",type:"number",hint:"\uC6D0",visible:e=>e.fixedCouponDiscType==="AMOUNT"},D("couponIssueCountMin","couponIssueCountMax","\uBC1C\uD589\uC218 \uBC94\uC704",1,1e3,"\uB9E4"),{key:"couponDurationDays",label:"\uC720\uD6A8\uAE30\uAC04",type:"number",hint:"\uC77C"},{key:"couponScope",label:"\uC801\uC6A9\uBC94\uC704",type:"select",options:w},{key:"couponProdIds",label:"\uC2DC\uBBAC \uC0C1\uD488 ID",type:"text",placeholder:"ID \uCF64\uB9C8 \uAD6C\uBD84 (\uAE30\uBCF8 5\uAC1C \uC790\uB3D9)",hint:"\uBE44\uC6B0\uBA74 simulYn=Y \uC0C1\uD488 \uC790\uB3D9\uC870\uD68C",visible:e=>e.couponScope==="PRODUCT"},{key:"couponMinOrderAmt",label:"\uCD5C\uC18C \uC8FC\uBB38\uC561",type:"number",hint:"\uC6D0"},{key:"couponMaxDiscAmt",label:"\uCD5C\uB300 \uD560\uC778\uC561",type:"number",hint:"\uC6D0"}],Te=[D("discntRateMin","discntRateMax","\uD560\uC778\uC728 \uBC94\uC704",0,100,"%",{visible:e=>e.fixedDiscntType!=="AMOUNT"}),{key:"discntAmtMin",label:"\uD560\uC778\uC561 \uCD5C\uC18C",type:"number",hint:"\uC6D0",visible:e=>e.fixedDiscntType==="AMOUNT"},{key:"discntAmtMax",label:"\uD560\uC778\uC561 \uCD5C\uB300",type:"number",hint:"\uC6D0",visible:e=>e.fixedDiscntType==="AMOUNT"},{key:"discntDurationDays",label:"\uAE30\uAC04",type:"number",hint:"\uC77C"},{key:"discntMinOrderAmt",label:"\uCD5C\uC18C\uC8FC\uBB38",type:"number",hint:"\uC6D0"},{key:"discntMaxDiscAmt",label:"\uCD5C\uB300\uD560\uC778",type:"number",hint:"\uC6D0"},{key:"discntScope",label:"\uC801\uC6A9\uBC94\uC704",type:"select",options:w},{key:"discntProdIds",label:"\uC2DC\uBBAC \uC0C1\uD488 ID",type:"text",placeholder:"ID \uCF64\uB9C8 \uAD6C\uBD84 (\uAE30\uBCF8 5\uAC1C \uC790\uB3D9)",hint:"\uBE44\uC6B0\uBA74 simulYn=Y \uC0C1\uD488 \uC790\uB3D9\uC870\uD68C",visible:e=>e.discntScope==="PRODUCT"}],De=[D("saveRateMin","saveRateMax","\uC801\uB9BD\uB960 \uBC94\uC704",0,50,"%",{visible:e=>e.fixedSaveType!=="AMOUNT"}),{key:"saveAmtMin",label:"\uC815\uC561 \uC801\uB9BD \uCD5C\uC18C",type:"number",hint:"\uC6D0",visible:e=>e.fixedSaveType==="AMOUNT"},{key:"saveAmtMax",label:"\uC815\uC561 \uC801\uB9BD \uCD5C\uB300",type:"number",hint:"\uC6D0",visible:e=>e.fixedSaveType==="AMOUNT"},{key:"saveDurationDays",label:"\uC720\uD6A8\uAE30\uAC04",type:"number",hint:"\uC77C"},{key:"saveScope",label:"\uC801\uC6A9\uBC94\uC704",type:"select",options:w},{key:"saveProdIds",label:"\uC2DC\uBBAC \uC0C1\uD488 ID",type:"text",placeholder:"ID \uCF64\uB9C8 \uAD6C\uBD84 (\uAE30\uBCF8 5\uAC1C \uC790\uB3D9)",hint:"\uBE44\uC6B0\uBA74 simulYn=Y \uC0C1\uD488 \uC790\uB3D9\uC870\uD68C",visible:e=>e.saveScope==="PRODUCT"}],Me=k(()=>Object.values(o.couponDiscTypeWeights).reduce((e,t)=>e+Number(t),0)||1),Se=k(()=>Object.values(o.discntTypeWeights).reduce((e,t)=>e+Number(t),0)||1),Ae=k(()=>Object.values(o.saveTypeWeights).reduce((e,t)=>e+Number(t),0)||1),ke=F(o,[{minKey:"couponDiscRateMin",maxKey:"couponDiscRateMax"},{minKey:"couponIssueCountMin",maxKey:"couponIssueCountMax"},{minKey:"discntRateMin",maxKey:"discntRateMax"},{minKey:"saveRateMin",maxKey:"saveRateMax"}]);return{fnCmPopupCallback:(e,t,n)=>{if(e==="cmPopup-coupon-pick"){p.show=!1,n!=null&&E(n);return}if(e==="cmPopup-discnt-pick"){d.show=!1,n!=null&&N(n);return}},cfg:ie,domCfg:o,state:se,logs:ne,logPager:ae,cfIsRunning:pe,cfSuccessRate:de,logCols:be,baseCfgColumns:he,couponCfgColumns:Ce,discntCfgColumns:Te,saveCfgColumns:De,cfCouponDiscTotal:Me,cfDiscntTotal:Se,cfSaveTotal:Ae,DISC_TYPE_ITEMS:_,SAVE_VAL_ITEMS:P,onStart:le,onStop:re,onRunOnce:ue,onPreview:me,onClearLog:fe,onSetLogPage:ge,onSearchLog:xe,logSearch:ce,...ke,PROMO_TYPES:$,couponPicker:p,discntPicker:d,onOpenCouponPicker:ye,onOpenDiscntPicker:ve,onSelectCoupon:E,onSelectDiscnt:N,_loadCouponPicker:R,_loadDiscntPicker:O}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F381} \uD504\uB85C\uBAA8\uC158 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <!-- \uC2E4\uD589 \uC81C\uC5B4 -->
  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#9333ea,#c084fc)"
    accent-active="background:#faf5ff;border:1.5px solid #9333ea;color:#7e22ce;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" />

  <!-- \uD504\uB85C\uBAA8\uC158 \uC720\uD615 \uD0ED (\uBCC4\uB3C4 \uCE74\uB4DC) -->
  <div class="card" style="margin-top:12px;padding:4px;">
    <bo-tab-bar :tabs="PROMO_TYPES" :tab="domCfg.promoType" :show-modes="false" bg="#f0fdf4"
      @tab-select="v => domCfg.promoType = v" />

    <!-- \uCFE0\uD3F0 \uC124\uC815 -->
    <div v-if="domCfg.promoType==='coupon' || domCfg.promoType==='both'" style="padding:14px 16px;">
      <div class="list-title">\u{1F39F} \uCFE0\uD3F0 \uC124\uC815</div>
      <bo-form-area :columns="couponCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
        ${M("couponDiscRateMin","couponDiscRateMax",0,100,"%")}
        ${M("couponIssueCountMin","couponIssueCountMax",1,1e3,"\uB9E4")}
      </bo-form-area>
    </div>

    <!-- \uD560\uC778\uC815\uCC45 \uC124\uC815 -->
    <div v-if="domCfg.promoType==='discnt' || domCfg.promoType==='both'" style="padding:14px 16px;">
      <div class="list-title">\u{1F4B0} \uD560\uC778\uC815\uCC45 \uC124\uC815</div>
      <bo-form-area :columns="discntCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
        ${M("discntRateMin","discntRateMax",0,100,"%")}
      </bo-form-area>
    </div>

    <!-- \uC801\uB9BD\uAE08 \uC124\uC815 -->
    <div v-if="domCfg.promoType==='save'" style="padding:14px 16px;">
      <div class="list-title">\u{1F48E} \uC801\uB9BD\uAE08 \uC124\uC815</div>
      <bo-form-area :columns="saveCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
        ${M("saveRateMin","saveRateMax",0,50,"%")}
      </bo-form-area>
    </div>
  </div>

  <!-- \uAC00\uC911\uCE58 \uCE74\uB4DC \uD589 -->
  <div style="margin-top:12px;display:flex;gap:12px;flex-wrap:wrap;align-items:flex-start;">
    <!-- \uCFE0\uD3F0 \uD560\uC778 \uBC29\uC2DD \uAC00\uC911\uCE58 -->
    <div v-if="domCfg.promoType==='coupon' || domCfg.promoType==='both'" class="card" style="padding:14px 16px;width:340px;">
      <div class="list-title">\u{1F39F} \uCFE0\uD3F0 \uD560\uC778 \uBC29\uC2DD \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;">
        <select v-model="domCfg.fixedCouponDiscType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;margin-bottom:6px;">
          <option value="">-- \uC5C6\uC74C --</option>
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in DISC_TYPE_ITEMS" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
        <div v-show="domCfg.fixedCouponDiscType === '__weighted__'">
          <div v-for="t in DISC_TYPE_ITEMS" :key="t.cd" style="display:grid;grid-template-columns:10px 55px 1fr 40px 36px;align-items:center;gap:6px;margin-bottom:2px;">
            <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';display:inline-block;'"></span>
            <span style="font-size:11px;font-weight:600;color:#475569;">{{ t.label }}</span>
            <input type="range" min="0" max="100" v-model.number="domCfg.couponDiscTypeWeights[t.cd]" :style="'accent-color:'+t.color+';width:100%;'" />
            <input type="number" min="0" max="100" v-model.number="domCfg.couponDiscTypeWeights[t.cd]" style="width:40px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;padding:1px 4px;text-align:center;" />
            <span style="font-size:10px;color:#94a3b8;text-align:right;">{{ Math.round(domCfg.couponDiscTypeWeights[t.cd]/cfCouponDiscTotal*100) }}%</span>
          </div>
          <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
            <div v-for="t in DISC_TYPE_ITEMS" :key="t.cd" :style="'flex:'+domCfg.couponDiscTypeWeights[t.cd]+';transition:flex .2s;background:'+t.color"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- \uD560\uC778 \uBC29\uC2DD \uAC00\uC911\uCE58 -->
    <div v-if="domCfg.promoType==='discnt' || domCfg.promoType==='both'" class="card" style="padding:14px 16px;width:340px;">
      <div class="list-title">\u{1F4B0} \uD560\uC778 \uBC29\uC2DD \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;">
        <select v-model="domCfg.fixedDiscntType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;margin-bottom:6px;">
          <option value="">-- \uC5C6\uC74C --</option>
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in DISC_TYPE_ITEMS" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
        <div v-show="domCfg.fixedDiscntType === '__weighted__'">
          <div v-for="t in DISC_TYPE_ITEMS" :key="t.cd" style="display:grid;grid-template-columns:10px 55px 1fr 40px 36px;align-items:center;gap:6px;margin-bottom:2px;">
            <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';display:inline-block;'"></span>
            <span style="font-size:11px;font-weight:600;color:#475569;">{{ t.label }}</span>
            <input type="range" min="0" max="100" v-model.number="domCfg.discntTypeWeights[t.cd]" :style="'accent-color:'+t.color+';width:100%;'" />
            <input type="number" min="0" max="100" v-model.number="domCfg.discntTypeWeights[t.cd]" style="width:40px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;padding:1px 4px;text-align:center;" />
            <span style="font-size:10px;color:#94a3b8;text-align:right;">{{ Math.round(domCfg.discntTypeWeights[t.cd]/cfDiscntTotal*100) }}%</span>
          </div>
          <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
            <div v-for="t in DISC_TYPE_ITEMS" :key="t.cd" :style="'flex:'+domCfg.discntTypeWeights[t.cd]+';transition:flex .2s;background:'+t.color"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- \uC801\uB9BD \uBC29\uC2DD \uAC00\uC911\uCE58 -->
    <div v-if="domCfg.promoType==='save'" class="card" style="padding:14px 16px;width:340px;">
      <div class="list-title">\u{1FA99} \uC801\uB9BD \uBC29\uC2DD \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;">
        <select v-model="domCfg.fixedSaveType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;margin-bottom:6px;">
          <option value="">-- \uC5C6\uC74C --</option>
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in SAVE_VAL_ITEMS" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
        <div v-show="domCfg.fixedSaveType === '__weighted__'">
          <div v-for="t in SAVE_VAL_ITEMS" :key="t.cd" style="display:grid;grid-template-columns:10px 60px 1fr 40px 36px;align-items:center;gap:6px;margin-bottom:2px;">
            <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';display:inline-block;'"></span>
            <span style="font-size:11px;font-weight:600;color:#475569;">{{ t.label }}</span>
            <input type="range" min="0" max="100" v-model.number="domCfg.saveTypeWeights[t.cd]" :style="'accent-color:'+t.color+';width:100%;'" />
            <input type="number" min="0" max="100" v-model.number="domCfg.saveTypeWeights[t.cd]" style="width:40px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;padding:1px 4px;text-align:center;" />
            <span style="font-size:10px;color:#94a3b8;text-align:right;">{{ Math.round(domCfg.saveTypeWeights[t.cd]/cfSaveTotal*100) }}%</span>
          </div>
          <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
            <div v-for="t in SAVE_VAL_ITEMS" :key="t.cd" :style="'flex:'+domCfg.saveTypeWeights[t.cd]+';transition:flex .2s;background:'+t.color"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- \uC218\uC815 \uBAA8\uB4DC \uB300\uC0C1 \uC9C0\uC815 -->
  <div v-if="cfg.mode==='update'" class="card" style="padding:12px 16px;margin-top:12px;">
    <div class="list-title">\u{1F3AF} \uC218\uC815 \uB300\uC0C1 \uC9C0\uC815</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;">
      <!-- \uCFE0\uD3F0 \uC9C0\uC815 -->
      <div v-if="domCfg.promoType==='coupon' || domCfg.promoType==='both'">
        <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:5px;">\u{1F39F} \uC218\uC815\uD560 \uCFE0\uD3F0 \uC9C0\uC815</div>
        <div style="display:flex;gap:5px;align-items:center;">
          <input type="text" :value="domCfg.fixedCouponId || ''" readonly
            placeholder="\uB79C\uB364 \uC120\uD0DD"
            style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;cursor:pointer;font-family:monospace;"
            @click="onOpenCouponPicker" />
          <button v-if="domCfg.fixedCouponId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
            @click="domCfg.fixedCouponId=''">\u2715</button>
          <button v-else class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenCouponPicker">\uC120\uD0DD</button>
        </div>
        <div v-if="!domCfg.fixedCouponId" style="font-size:10px;color:#94a3b8;margin-top:3px;">\uBBF8\uC9C0\uC815 \uC2DC \uB79C\uB364 \uCFE0\uD3F0 \uC120\uD0DD</div>
      </div>
      <!-- \uD560\uC778\uC815\uCC45 \uC9C0\uC815 -->
      <div v-if="domCfg.promoType==='discnt' || domCfg.promoType==='both'">
        <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:5px;">\u{1F4B0} \uC218\uC815\uD560 \uD560\uC778\uC815\uCC45 \uC9C0\uC815</div>
        <div style="display:flex;gap:5px;align-items:center;">
          <input type="text" :value="domCfg.fixedDiscntId || ''" readonly
            placeholder="\uB79C\uB364 \uC120\uD0DD"
            style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;cursor:pointer;font-family:monospace;"
            @click="onOpenDiscntPicker" />
          <button v-if="domCfg.fixedDiscntId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
            @click="domCfg.fixedDiscntId=''">\u2715</button>
          <button v-else class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenDiscntPicker">\uC120\uD0DD</button>
        </div>
        <div v-if="!domCfg.fixedDiscntId" style="font-size:10px;color:#94a3b8;margin-top:3px;">\uBBF8\uC9C0\uC815 \uC2DC \uB79C\uB364 \uD560\uC778\uC815\uCC45 \uC120\uD0DD</div>
      </div>
    </div>
  </div>

  <!-- \uC2E4\uD589 \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch" @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- \uCFE0\uD3F0 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="couponPicker.show" popup-cmd="cmPopup-coupon-pick" popup-code="coupon"
    title="\uCFE0\uD3F0 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="couponPicker.show = false" />

  <!-- \uD560\uC778\uC815\uCC45 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="discntPicker.show" popup-cmd="cmPopup-discnt-pick" popup-code="discnt"
    title="\uD560\uC778\uC815\uCC45 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="discntPicker.show = false" />

</div>`}})();
