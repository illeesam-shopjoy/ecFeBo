(function(){const{reactive:m}=Vue,{useSimulSetup:k,makeLogCols:P,makeBaseCfgColumns:A}=window.ZdSimulBase,u=[{value:"SETTLE",label:"\uC815\uC0B0",color:"#3b82f6"},{value:"RETURN",label:"\uBC18\uD488",color:"#ef4444"},{value:"ADJ",label:"\uC870\uC815",color:"#f59e0b"},{value:"PAY",label:"\uC9C0\uAE09",color:"#22c55e"}],v=[{value:"DRAFT",label:"\uCD08\uC548"},{value:"PENDING",label:"\uAC80\uD1A0\uC911"},{value:"APPROVED",label:"\uC2B9\uC778"},{value:"REJECTED",label:"\uBC18\uB824"}],b=[{value:"status",label:"\uC0C1\uD0DC \uBCC0\uACBD"},{value:"amount",label:"\uAE08\uC561 \uC870\uC815"},{value:"desc",label:"\uC124\uBA85 \uC218\uC815"}],x=["1\uBD84\uAE30 \uB9E4\uCD9C \uC815\uC0B0","2\uBD84\uAE30 \uC6B4\uC601\uACBD\uBE44","\uAD11\uACE0\uBE44 \uC815\uC0B0","\uBB3C\uB958\uBE44 \uC815\uC0B0","\uD50C\uB7AB\uD3FC \uC218\uC218\uB8CC","\uBC18\uD488 \uCC98\uB9AC \uBE44\uC6A9","\uD504\uB85C\uBAA8\uC158 \uBE44\uC6A9","\uAE30\uD0C0 \uACBD\uBE44"];window.ZdSimulVoucherMng={name:"ZdSimulVoucherMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(E){const a=m({statusOnCreate:"DRAFT",typeWeights:{SETTLE:40,RETURN:20,ADJ:25,PAY:15},amtMin:1e4,amtMax:5e6,updateType:"status",fixedVoucherId:""}),R=()=>{const t=a.typeWeights,o=Object.values(t).reduce((c,f)=>c+Number(f),0)||1;let e=Math.random()*o;for(const c of u)if(e-=Number(t[c.value]||0),e<=0)return c.value;return u[0].value},d=m({list:[],loaded:!1}),I=async()=>{var t,o;if(d.loaded)return d.list;try{const e=await boApi.get("/bo/sy/vendor/page",{params:{pageNo:1,pageSize:100,vendorStatusCd:"ACTIVE"}});d.list=((o=(t=e==null?void 0:e.data)==null?void 0:t.data)==null?void 0:o.pageList)||[]}catch{d.list=[]}return d.loaded=!0,d.list},D=k({domain:"\uC804\uD45C",uiNm:"ERP \uC804\uD45C \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uC804\uD45C",showToast:E.showToast,defaultCfg:{mode:"create",countMin:1,countMax:3,intervalVal:20,intervalUnit:"sec",durationMin:5},runFn:async({mode:t,randInt:o,pick:e})=>{var c,f,V,w,T;if(t==="create"){const r=await I(),i=r.length?e(r):null,n=R(),g=((c=u.find(oe=>oe.value===n))==null?void 0:c.label)||n,l=e(x),p=Math.round(o(a.amtMin,a.amtMax)/100)*100,ee=coUtil.cofToYm(new Date).replace("-",""),S={erpVoucherTypeCd:n,erpVoucherStatusCd:a.statusOnCreate,erpVoucherDesc:l,voucherDate:coUtil.cofToYmd(new Date),totalDebitAmt:p,totalCreditAmt:p,settleYm:ee,vendorId:i?i.vendorId:null},h=await boApi.post("/bo/zd/simul/voucher/create",S,coUtil.cofApiHdr("\uC804\uD45C\uC2DC\uBBAC","\uC0DD\uC131")),te=((V=(f=h==null?void 0:h.data)==null?void 0:f.data)==null?void 0:V.erpVoucherId)||"";return{ok:!0,desc:g+" / "+l+" / "+coUtil.cofWon(p),meta:{id:te,params:S}}}else{let r;if(a.fixedVoucherId)r={erpVoucherId:a.fixedVoucherId};else{const l=await boApi.get("/bo/st/erp-voucher/page",{params:{pageNo:1,pageSize:50,erpVoucherStatusCd:"DRAFT"}}),p=((T=(w=l==null?void 0:l.data)==null?void 0:w.data)==null?void 0:T.pageList)||[];if(!p.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uC804\uD45C \uC5C6\uC74C (DRAFT)"};r=e(p)}let i={},n="";if(a.updateType==="status"){const l=e(v);i.erpVoucherStatusCd=l.value,n="\uC0C1\uD0DC\u2192"+l.label}else if(a.updateType==="amount"){const l=Math.round(o(a.amtMin,a.amtMax)/100)*100;i.totalDebitAmt=l,i.totalCreditAmt=l,n="\uAE08\uC561\u2192"+coUtil.cofWon(l)}else i.erpVoucherDesc=e(x)+" [\uC218\uC815]",n="\uC124\uBA85 \uC218\uC815";const g={erpVoucherId:r.erpVoucherId,...i};return await boApi.post("/bo/zd/simul/voucher/update",g,coUtil.cofApiHdr("\uC804\uD45C\uC2DC\uBBAC","\uC218\uC815")),{ok:!0,desc:r.erpVoucherId+" "+n,meta:{id:r.erpVoucherId,params:g}}}}}),{cfg:M,state:z,logs:L,logPager:O,logSearch:U,cfIsRunning:_,cfSuccessRate:N,onStart:F,onStop:W,onRunOnce:Y,onPreview:H,onPreviewCreate:B,onClearLog:J,onSetLogPage:Z,onSearchLog:j}=D,q=P(),G=A(),K=[{key:"statusOnCreate",label:"\uCD08\uAE30 \uC0C1\uD0DC",type:"select",options:v},{key:"amtMin",label:"\uAE08\uC561 \uCD5C\uC19F\uAC12(\uC6D0)",type:"number",placeholder:"10000"},{key:"amtMax",label:"\uAE08\uC561 \uCD5C\uB313\uAC12(\uC6D0)",type:"number",placeholder:"5000000"}],Q=[{key:"updateType",label:"\uC218\uC815 \uC720\uD615",type:"select",options:b}],X=Vue.computed(()=>Object.values(a.typeWeights).reduce((t,o)=>t+Number(o),0)||1),s=m({show:!1,searchValue:"",rows:[],loading:!1}),y=async()=>{var t,o;s.loading=!0;try{const e=await boApi.get("/bo/st/erp-voucher/page",{params:{pageNo:1,pageSize:20,...s.searchValue?{searchValue:s.searchValue}:{}}});s.rows=((o=(t=e==null?void 0:e.data)==null?void 0:t.data)==null?void 0:o.pageList)||[]}catch{s.rows=[]}s.loading=!1},$=async()=>{s.show=!0,s.searchValue="",await y()},C=t=>{a.fixedVoucherId=t.erpVoucherId,s.show=!1};return{fnCmPopupCallback:(t,o,e)=>{if(t==="cmPopup-voucher-pick"){s.show=!1,e!=null&&C(e);return}},cfg:M,domCfg:a,state:z,logs:L,logPager:O,logSearch:U,cfIsRunning:_,cfSuccessRate:N,logCols:q,baseCfgColumns:G,createCfgColumns:K,updateCfgColumns:Q,cfTypeTotal:X,onStart:F,onStop:W,onRunOnce:Y,onPreview:H,onPreviewCreate:B,onClearLog:J,onSetLogPage:Z,onSearchLog:j,VOUCHER_TYPES:u,VOUCHER_STATUSES:v,UPDATE_TYPES:b,voucherPicker:s,onOpenVoucherPicker:$,onSelectVoucher:C,_loadVoucherPicker:y,fnVoucherTypeLabel:t=>{var o;return((o=u.find(e=>e.value===t))==null?void 0:o.label)||t||""}}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F4C4} ERP \uC804\uD45C \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#d97706,#fbbf24)"
    accent-active="background:#fffbeb;border:1.5px solid #d97706;color:#b45309;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uC0DD\uC131 \uC635\uC158 -->
  <div v-if="cfg.mode==='create'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F4C4} \uC804\uD45C \uC0DD\uC131 \uC635\uC158</div>
    <bo-form-area :columns="createCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
    <div style="margin-top:10px;font-size:11px;color:#64748b;line-height:1.6;">
      \u2705 \uC815\uC0B0\uB144\uC6D4 = \uC774\uBC88\uB2EC / \uC804\uD45C\uC77C\uC790 = \uC624\uB298 / \uCC28\uBCC0\xB7\uB300\uBCC0 \uB3D9\uC77C \uAE08\uC561 / \uC5C5\uCCB4 = ACTIVE \uBAA9\uB85D \uC911 \uB79C\uB364
    </div>
  </div>

  <!-- \uAC00\uC911\uCE58 \uD328\uB110 -->
  <div v-if="cfg.mode==='create'" style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4CA} \uC804\uD45C \uC720\uD615 \uAC00\uC911\uCE58</div>
      <div style="margin-top:10px;">
        <div v-for="t in VOUCHER_TYPES" :key="t.value" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#334155;min-width:32px;white-space:nowrap;">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.typeWeights[t.value]" :style="'flex:1;accent-color:'+t.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.typeWeights[t.value]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;text-align:right;">{{ Math.round(domCfg.typeWeights[t.value]/cfTypeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="t in VOUCHER_TYPES" :key="t.value" :style="'flex:'+domCfg.typeWeights[t.value]+';transition:flex .2s;background:'+t.color+';'"></div>
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
    <div v-if="domCfg.updateType==='amount'" style="margin-top:8px;">
      <bo-form-area :columns="[
        {key:'amtMin',label:'\uAE08\uC561 \uCD5C\uC19F\uAC12(\uC6D0)',type:'number'},
        {key:'amtMax',label:'\uAE08\uC561 \uCD5C\uB313\uAC12(\uC6D0)',type:'number'},
      ]" :form="domCfg" :show-actions="false" :cols="3" />
    </div>
    <div style="margin-top:12px;padding-top:10px;border-top:1px solid #f1f5f9;">
      <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:6px;">\u{1F3AF} \uC218\uC815 \uB300\uC0C1 \uC804\uD45C \uC9C0\uC815</div>
      <div style="display:flex;gap:6px;align-items:center;max-width:400px;">
        <input type="text" :value="domCfg.fixedVoucherId || ''" readonly
          placeholder="\uB79C\uB364 (DRAFT \uC804\uD45C 50\uAC74 \uC911)"
          style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;cursor:pointer;"
          @click="onOpenVoucherPicker" />
        <button v-if="domCfg.fixedVoucherId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
          @click="domCfg.fixedVoucherId=''">\u2715</button>
        <button v-else class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenVoucherPicker">\uC120\uD0DD</button>
      </div>
      <div v-if="domCfg.fixedVoucherId" style="font-size:10px;color:#d97706;margin-top:3px;font-family:monospace;">{{ domCfg.fixedVoucherId }}</div>
      <div v-else style="font-size:10px;color:#94a3b8;margin-top:3px;">\u{1F4A1} \uBBF8\uC9C0\uC815 \uC2DC DRAFT \uC804\uD45C \uC911 \uB79C\uB364 \uC120\uD0DD</div>
    </div>
  </div>

  <!-- \uC2E4\uD589 \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch"
    @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- \uC804\uD45C picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="voucherPicker.show" popup-cmd="cmPopup-voucher-pick" popup-code="voucher"
    title="\uC218\uC815\uD560 \uC804\uD45C \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="voucherPicker.show = false" />
</div>`}})();
