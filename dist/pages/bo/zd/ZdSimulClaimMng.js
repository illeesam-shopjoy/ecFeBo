(function(){const{reactive:I,computed:R,onMounted:P}=Vue,{useSimulSetup:L,makeLogCols:z,makeBaseCfgColumns:U,makeRangeCol:V,makeRangeHandlers:Q,rangeSlotTemplate:H}=window.ZdSimulBase,f=[{cd:"CANCEL",label:"\uCDE8\uC18C",badge:"badge-orange",color:"#f97316"},{cd:"RETURN",label:"\uBC18\uD488",badge:"badge-purple",color:"#a855f7"},{cd:"EXCHANGE",label:"\uAD50\uD658",badge:"badge-blue",color:"#3b82f6"}],y={CANCEL:["CLAIM_RECV","CANCEL_REQ","CANCEL_DONE"],RETURN:["CLAIM_RECV","RETURN_REQ","RETURN_COLL","RETURN_DONE"],EXCHANGE:["CLAIM_RECV","EXCH_REQ","EXCH_SHIP","EXCH_DONE"]},w={CLAIM_RECV:"\uC811\uC218",CANCEL_REQ:"\uCDE8\uC18C\uC694\uCCAD",CANCEL_DONE:"\uCDE8\uC18C\uC644\uB8CC",RETURN_REQ:"\uBC18\uD488\uC694\uCCAD",RETURN_COLL:"\uC218\uAC70\uC911",RETURN_DONE:"\uBC18\uD488\uC644\uB8CC",EXCH_REQ:"\uAD50\uD658\uC694\uCCAD",EXCH_SHIP:"\uAD50\uD658\uBC1C\uC1A1",EXCH_DONE:"\uAD50\uD658\uC644\uB8CC"},D=["\uB2E8\uC21C \uBCC0\uC2EC","\uC8FC\uBB38 \uC2E4\uC218","\uBC30\uC1A1 \uC9C0\uC5F0","\uAC00\uACA9 \uBD88\uB9CC\uC871","\uB2E4\uB978 \uC0C1\uD488\uC73C\uB85C \uB300\uCCB4"],X=["\uC0C1\uD488 \uBD88\uB7C9/\uD30C\uC190","\uC0C1\uD488 \uC124\uBA85\uACFC \uB2E4\uB984","\uC624\uBC30\uC1A1","\uD06C\uAE30/\uC0C9\uC0C1 \uBD88\uC77C\uCE58","\uC0AC\uC6A9 \uD6C4 \uBD88\uB9CC\uC871"],B=["\uC0AC\uC774\uC988 \uAD50\uD658","\uC0C9\uC0C1 \uAD50\uD658","\uAE30\uB2A5 \uBD88\uB7C9","\uB514\uC790\uC778 \uBD88\uC77C\uCE58","\uCD08\uAE30 \uBD88\uB7C9"],F=[{value:"advance",label:"\uC0C1\uD0DC \uC9C4\uD589"},{value:"memo",label:"\uCC98\uB9AC \uBA54\uBAA8 \uCD94\uAC00"}],W=["PAID","PREPARING","SHIPPED","COMPLT"];window.ZdSimulClaimMng={name:"ZdSimulClaimMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(h){const t=I({fixedClaimType:"__weighted__",typeWeights:{CANCEL:40,RETURN:35,EXCHANGE:25},refundRateMin:80,refundRateMax:100,partialClaim:!0,randomReason:!0,fromOrderStatus:"COMPLT",createStatus:"CLAIM_RECV",updateAction:"advance",advanceSteps:1,targetType:"CANCEL",fromStatus:"CLAIM_RECV",fixedOrderId:"",fixedMemberId:"",fixedMemberNm:""}),r=I({show:!1,searchValue:"",rows:[],loading:!1}),l=I({show:!1,searchValue:"",rows:[],loading:!1}),i=I({list:[],loading:!1,orderId:""}),E=async()=>{var e,o;r.loading=!0;try{const a=await boApiSvc.mbMember.getPage({pageNo:1,pageSize:30,memberStatusCd:"ACTIVE",...r.searchValue?{searchValue:r.searchValue,searchType:"memberId,memberNm,loginId"}:{}});r.rows=((o=(e=a.data)==null?void 0:e.data)==null?void 0:o.pageList)||[]}catch{r.rows=[]}r.loading=!1},M=async()=>{var e,o;l.loading=!0;try{const a=await boApiSvc.odOrder.getPage({pageNo:1,pageSize:30,...t.fixedMemberId?{memberId:t.fixedMemberId}:{},...l.searchValue?{searchValue:l.searchValue,searchType:"orderId"}:{}});l.rows=((o=(e=a.data)==null?void 0:e.data)==null?void 0:o.pageList)||[]}catch{l.rows=[]}l.loading=!1},Y=async()=>{r.show=!0,r.searchValue="",await E()},Z=async()=>{l.show=!0,l.searchValue="",await M()},S=e=>{var a;t.fixedMemberId=e.memberId;const o=e.memberNm||e.loginId||e.memberId;t.fixedMemberNm=(a=window.ZdSimulBase)!=null&&a._sanitize?window.ZdSimulBase._sanitize(o):o,r.show=!1,t.fixedOrderId="",i.list=[],i.orderId=""},j=async e=>{var o,a;if(!e){i.list=[],i.orderId="";return}i.loading=!0,i.orderId=e;try{const m=((a=(o=(await boApiSvc.odOrder.getById(e)).data)==null?void 0:o.data)==null?void 0:a.orderItems)||[];i.list=m.map(v=>({...v,_checked:!0,_claimQty:v.orderQty||1}))}catch{i.list=[]}i.loading=!1},_=async e=>{t.fixedOrderId=e.orderId,l.show=!1,await j(e.orderId)},q=async()=>{var e,o;try{const a=((o=(e=(await boApiSvc.mbMember.getPage({pageNo:1,pageSize:50,memberStatusCd:"ACTIVE"})).data)==null?void 0:e.data)==null?void 0:o.pageList)||[];if(!a.length)return h.showToast("\uC870\uD68C\uB41C \uD68C\uC6D0 \uC5C6\uC74C","error");S(a[Math.floor(Math.random()*a.length)])}catch{h.showToast("\uD68C\uC6D0 \uB79C\uB364 \uC870\uD68C \uC2E4\uD328","error")}},G=async()=>{var e,o;try{const a={pageNo:1,pageSize:50};t.fromOrderStatus&&(a.orderStatusCd=t.fromOrderStatus),t.fixedMemberId&&(a.memberId=t.fixedMemberId);const d=((o=(e=(await boApiSvc.odOrder.getPage(a)).data)==null?void 0:e.data)==null?void 0:o.pageList)||[];if(!d.length)return h.showToast("\uC870\uD68C\uB41C \uC8FC\uBB38 \uC5C6\uC74C","error");await _(d[Math.floor(Math.random()*d.length)])}catch{h.showToast("\uC8FC\uBB38 \uB79C\uB364 \uC870\uD68C \uC2E4\uD328","error")}},K=()=>{i.list.forEach(e=>{e._checked=Math.random()>.35,e._checked&&e.orderQty>1&&(e._claimQty=Math.floor(Math.random()*e.orderQty)+1)}),!i.list.some(e=>e._checked)&&i.list.length&&(i.list[0]._checked=!0)},$=()=>{const e=i.list.every(o=>o._checked);i.list.forEach(o=>{o._checked=!e}),!i.list.some(o=>o._checked)&&i.list.length&&(i.list[0]._checked=!0)},J=()=>{if(t.fixedClaimType&&t.fixedClaimType!=="__weighted__")return f.find(d=>d.cd===t.fixedClaimType)||f[0];const e=t.typeWeights,o=Object.values(e).reduce((d,m)=>d+Number(m),0);let a=Math.random()*o;for(const d of f)if(a-=Number(e[d.cd]||0),a<=0)return d;return f[0]},ee=e=>{const o=e==="CANCEL"?D:e==="RETURN"?X:B;return o[Math.floor(Math.random()*o.length)]},te=L({domain:"\uD074\uB808\uC784",uiNm:"\uD074\uB808\uC784 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uD074\uB808\uC784",showToast:h.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:e,simulYn:o,randInt:a,pick:d})=>{var m,v,A,T,O;if(e==="create"){let n;if(t.fixedOrderId)n={orderId:t.fixedOrderId};else{const p={pageNo:1,pageSize:50,simulYn:"Y"};t.fromOrderStatus&&(p.orderStatusCd=t.fromOrderStatus),t.fixedMemberId&&(p.memberId=t.fixedMemberId);const N=((v=(m=(await boApiSvc.odOrder.getPage(p)).data)==null?void 0:m.data)==null?void 0:v.pageList)||[];if(!N.length)return{ok:!1,reason:"\uB300\uC0C1 \uC8FC\uBB38 \uC5C6\uC74C (\uC0C1\uD0DC: "+(t.fromOrderStatus||"\uC804\uCCB4")+")"};n=d(N)}const c=J(),s=t.randomReason?ee(c.cd):"\uC2DC\uBBAC\uB808\uC774\uD130 \uD14C\uC2A4\uD2B8",g=a(t.refundRateMin,t.refundRateMax),x=t.fixedOrderId&&i.list.length?i.list.filter(p=>p._checked).map(p=>({orderItemId:p.orderItemId,claimQty:p._claimQty})):null,C={orderId:n.orderId,claimTypeCd:c.cd,reasonCd:s.replace(/\s/g,"_").toUpperCase().slice(0,20),claimStatusCd:t.createStatus,partialClaim:t.partialClaim,refundRate:g,simulYn:o||"Y",...x?{selectedItems:x}:{}},u=await boApi.post("/bo/zd/simul/claim/from-order",C,coUtil.cofApiHdr("\uD074\uB808\uC784\uC2DC\uBBAC","\uC0DD\uC131")),b=((A=u==null?void 0:u.data)==null?void 0:A.data)||{},k=b.claimId||"-",Se=b.itemCount?b.itemCount+"\uAC1C \uC0C1\uD488":"\uAE08\uC561\uAE30\uBC18",_e=b.refundAmt||0;return{ok:!0,desc:"["+c.label+"] "+n.orderId+" | "+Se+" | "+_e.toLocaleString()+"\uC6D0 | "+s,meta:{id:k,type:c.label,reason:s,params:{orderId:n.orderId,claimTypeCd:c.cd,claimStatusCd:t.createStatus,partialClaim:t.partialClaim,refundRate:g}}}}else{const n={pageNo:1,pageSize:50};t.fromStatus&&(n.claimStatusCd=t.fromStatus),t.targetType&&(n.claimTypeCd=t.targetType);const c=((O=(T=(await boApiSvc.odClaim.getPage(n)).data)==null?void 0:T.data)==null?void 0:O.pageList)||[];if(!c.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uD074\uB808\uC784 \uC5C6\uC74C (\uC720\uD615: "+t.targetType+", \uC0C1\uD0DC: "+t.fromStatus+")"};const s=d(c),g=y[s.claimTypeCd]||y.CANCEL;let x={},C="";if(t.updateAction==="advance"){const b=g.indexOf(s.claimStatusCd),k=g[Math.min(b+(t.advanceSteps||1),g.length-1)];x.claimStatusCd=k,C=(w[s.claimStatusCd]||s.claimStatusCd)+" \u2192 "+(w[k]||k)}else x.claimMemo="[\uC2DC\uBBAC\uCC98\uB9AC] "+new Date().toLocaleTimeString("ko-KR"),C="\uBA54\uBAA8 \uCD94\uAC00";const u={claimId:s.claimId,...x};return await boApi.post("/bo/zd/simul/claim/update",u,coUtil.cofApiHdr("\uD074\uB808\uC784\uC2DC\uBBAC","\uC218\uC815")),{ok:!0,desc:s.claimId+" "+C,meta:{id:s.claimId,params:u}}}}}),{cfg:oe,state:ae,logs:ie,logPager:de,logSearch:re,cfIsRunning:le,cfSuccessRate:se,onStart:ne,onStop:ce,onRunOnce:pe,onPreview:fe,onPreviewCreate:me,onClearLog:ge,onSetLogPage:xe,onSearchLog:ue}=te,be=R(()=>Object.values(t.typeWeights).reduce((e,o)=>e+Number(o),0)||1),ye=R(()=>y[t.targetType]||y.CANCEL),he=z(),ve=U(),Ce=[{key:"fromOrderStatus",label:"\uB300\uC0C1 \uC8FC\uBB38 \uC0C1\uD0DC",type:"select",options:[{value:"",label:"\uC804\uCCB4"},...W.map(e=>({value:e,label:e}))]},{key:"createStatus",label:"\uD074\uB808\uC784 \uCD08\uAE30 \uC0C1\uD0DC",type:"select",options:[{value:"CLAIM_RECV",label:"\uC811\uC218"}]},{key:"partialClaim",label:"\uBD80\uBD84 \uD074\uB808\uC784 (\uB79C\uB364 \uC218\uB7C9)",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]},V("refundRateMin","refundRateMax","\uD658\uBD88\uB960 \uBC94\uC704",0,100,"%",{visible:e=>!e.partialClaim}),{key:"randomReason",label:"\uC0AC\uC720 \uB79C\uB364 \uC0DD\uC131",type:"select",options:[{value:!0,label:"\uC608"},{value:!1,label:"\uC544\uB2C8\uC624"}]}],ke=[{key:"updateAction",label:"\uC218\uC815 \uC561\uC158",type:"select",options:F},{key:"targetType",label:"\uB300\uC0C1 \uC720\uD615",type:"select",options:f.map(e=>({value:e.cd,label:e.label}))},{key:"fromStatus",label:"\uD604\uC7AC \uC0C1\uD0DC",type:"select",options:[{value:"",label:"\uC804\uCCB4"},...Object.entries(w).map(([e,o])=>({value:e,label:o}))]},{key:"advanceSteps",label:"\uC9C4\uD589 \uB2E8\uACC4",type:"select",options:[{value:1,label:"1\uB2E8\uACC4"},{value:2,label:"2\uB2E8\uACC4"}],visible:e=>e.updateAction==="advance"}],Ie=Q(t,[{minKey:"refundRateMin",maxKey:"refundRateMax"}]),we=(e,o,a)=>{if(e==="cmPopup-member-pick"){r.show=!1,a!=null&&S(a);return}if(e==="cmPopup-order-pick"){l.show=!1,a!=null&&_(a);return}};return P(()=>{window.ZdSimulBase.fnSeedFixedMember(t)}),{coUtil,fnCmPopupCallback:we,cfg:oe,domCfg:t,state:ae,logs:ie,logPager:de,cfIsRunning:le,cfSuccessRate:se,cfTypeTotal:be,cfAutoFlow:ye,logCols:he,baseCfgColumns:ve,createCfgColumns:Ce,updateCfgColumns:ke,onStart:ne,onStop:ce,onRunOnce:pe,onPreview:fe,onPreviewCreate:me,onClearLog:ge,onSetLogPage:xe,onSearchLog:ue,logSearch:re,...Ie,CLAIM_TYPES:f,STATUS_FLOW:y,STATUS_LABELS:w,memberPicker:r,orderPicker:l,orderItems:i,onOpenMemberPicker:Y,onOpenOrderPicker:Z,onSelectMember:S,onSelectOrder:_,onPickRandomMember:q,onPickRandomOrder:G,onRandomCheckItems:K,onCheckAllItems:$,_loadMemberPicker:E,_loadOrderPicker:M}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F504} \uD074\uB808\uC784 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <!-- \uC2E4\uD589 \uC81C\uC5B4 -->
  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#ea580c,#fb923c)"
    accent-active="background:#fff7ed;border:1.5px solid #ea580c;color:#9a3412;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uC2DC\uBBAC \uB300\uC0C1 \uC9C0\uC815 + \uC8FC\uBB38 \uC544\uC774\uD15C \uC120\uD0DD (3\uC5F4 \uADF8\uB9AC\uB4DC) -->
  <div class="card" style="padding:12px 16px;margin-top:12px;">
    <div class="list-title">\u{1F3AF} \uC2DC\uBBAC \uB300\uC0C1 \uC9C0\uC815</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:10px;align-items:start;">
      <!-- \uD68C\uC6D0 \uC9C0\uC815 (1/3) -->
      <div>
        <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:5px;">\u{1F464} \uC8FC\uBB38 \uD68C\uC6D0 \uC9C0\uC815</div>
        <div style="display:flex;gap:5px;align-items:center;">
          <input type="text" :value="domCfg.fixedMemberNm || domCfg.fixedMemberId || ''" readonly
            style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;" />
          <button v-if="domCfg.fixedMemberId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
            @click="domCfg.fixedMemberId='';domCfg.fixedMemberNm='';domCfg.fixedOrderId='';orderItems.list=[];orderItems.orderId=''">\u2715</button>
          <button class="btn" style="height:28px;padding:0 8px;font-size:11px;background:#f0f9ff;color:#0369a1;border:1px solid #bae6fd;"
            @click="onPickRandomMember">\uB79C\uB364</button>
          <button class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenMemberPicker">\uC120\uD0DD</button>
        </div>
        <div v-if="domCfg.fixedMemberId" style="font-size:10px;color:#6366f1;margin-top:3px;font-family:monospace;">{{ domCfg.fixedMemberId }}</div>
        <div v-else style="font-size:10px;color:#94a3b8;margin-top:3px;">\uBBF8\uC9C0\uC815 \uC2DC \uC2DC\uBBAC \uC8FC\uBB38\uC758 \uD68C\uC6D0 \uB79C\uB364</div>
      </div>
      <!-- \uC8FC\uBB38 \uC9C0\uC815 (1/4) -->
      <div>
        <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:5px;">\u{1F6D2} \uB300\uC0C1 \uC8FC\uBB38 \uC9C0\uC815</div>
        <div style="display:flex;gap:5px;align-items:center;">
          <input type="text" :value="domCfg.fixedOrderId || ''" readonly
            style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;font-family:monospace;" />
          <button v-if="domCfg.fixedOrderId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
            @click="domCfg.fixedOrderId='';orderItems.list=[];orderItems.orderId=''">\u2715</button>
          <button class="btn" style="height:28px;padding:0 8px;font-size:11px;background:#f0f9ff;color:#0369a1;border:1px solid #bae6fd;"
            @click="onPickRandomOrder">\uB79C\uB364</button>
          <button class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenOrderPicker">\uC120\uD0DD</button>
        </div>
        <div v-if="domCfg.fixedOrderId" style="font-size:10px;color:#6366f1;margin-top:3px;font-family:monospace;">{{ domCfg.fixedOrderId }}</div>
        <div v-else style="font-size:10px;color:#94a3b8;margin-top:3px;">\uBBF8\uC9C0\uC815 \uC2DC \uC870\uAC74\uC5D0 \uB9DE\uB294 \uC2DC\uBBAC \uC8FC\uBB38 \uB79C\uB364</div>
      </div>
      <!-- \uC8FC\uBB38 \uC544\uC774\uD15C \uC120\uD0DD (1/3) -->
      <div v-if="coUtil.cofAnd(cfg.mode==='create', domCfg.fixedOrderId)">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <div style="font-size:11px;font-weight:600;color:#475569;">\u{1F4E6} \uC8FC\uBB38 \uC544\uC774\uD15C \uC120\uD0DD</div>
          <div style="margin-left:auto;display:flex;gap:4px;">
            <button class="btn" style="height:22px;padding:0 7px;font-size:10px;background:#f0f9ff;color:#0369a1;border:1px solid #bae6fd;"
              @click="onRandomCheckItems">\u{1F3B2} \uB79C\uB364</button>
            <button class="btn" style="height:22px;padding:0 7px;font-size:10px;background:#f8fafc;color:#475569;border:1px solid #e2e8f0;"
              @click="onCheckAllItems">{{ orderItems.list.every(it => it._checked) ? '\uC804\uCCB4\uD574\uC81C' : '\uC804\uCCB4\uC120\uD0DD' }}</button>
          </div>
        </div>
        <div v-if="orderItems.loading" style="text-align:center;padding:12px;color:#94a3b8;font-size:11px;">\uB85C\uB4DC \uC911...</div>
        <div v-else-if="!orderItems.list.length" style="text-align:center;padding:12px;color:#94a3b8;font-size:11px;">\uC544\uC774\uD15C \uC5C6\uC74C</div>
        <table v-else style="font-size:11px;width:100%;border-collapse:collapse;">
          <thead><tr style="background:#f8fafc;">
            <th style="width:28px;text-align:center;border:1px solid #e2e8f0;padding:4px;">
              <input type="checkbox" :checked="orderItems.list.every(it => it._checked)"
                :indeterminate.prop="orderItems.list.some(it => it._checked) &amp;&amp; !orderItems.list.every(it => it._checked)"
                @change="onCheckAllItems" style="cursor:pointer;" />
            </th>
            <th style="border:1px solid #e2e8f0;padding:4px 8px;">\uC0C1\uD488\uBA85</th>
            <th style="width:40px;text-align:center;border:1px solid #e2e8f0;padding:4px;">\uC8FC\uBB38</th>
            <th style="width:90px;text-align:center;border:1px solid #e2e8f0;padding:4px;">\uD074\uB808\uC784\uC218\uB7C9</th>
            <th style="width:70px;text-align:right;border:1px solid #e2e8f0;padding:4px 8px;">\uC18C\uACC4</th>
          </tr></thead>
          <tbody>
            <tr v-for="it in orderItems.list" :key="it.orderItemId"
              :style="it._checked ? '' : 'opacity:0.4;'">
              <td style="text-align:center;border:1px solid #e2e8f0;padding:4px;">
                <input type="checkbox" v-model="it._checked" style="cursor:pointer;" />
              </td>
              <td style="border:1px solid #e2e8f0;padding:4px 8px;max-width:0;">
                <div style="font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" :title="it.prodNm || it.prodId">{{ it.prodNm || it.prodId }}</div>
                <div v-if="it.optNm" style="font-size:10px;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ it.optNm }}</div>
              </td>
              <td style="text-align:center;font-family:monospace;border:1px solid #e2e8f0;padding:4px;">{{ it.orderQty }}</td>
              <td style="text-align:center;border:1px solid #e2e8f0;padding:4px;">
                <div style="display:flex;align-items:center;gap:3px;justify-content:center;">
                  <input type="range" min="1" :max="it.orderQty || 1" v-model.number="it._claimQty"
                    :disabled="!it._checked" style="width:44px;accent-color:#ea580c;" />
                  <span style="font-family:monospace;min-width:14px;font-weight:600;color:#ea580c;font-size:11px;">{{ it._claimQty }}</span>
                </div>
              </td>
              <td style="text-align:right;font-family:monospace;font-weight:600;border:1px solid #e2e8f0;padding:4px 8px;">
                {{ (it._checked ? (it.unitPrice||0)*it._claimQty : 0).toLocaleString() }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr style="background:#fff7ed;">
              <td colspan="4" style="text-align:right;font-size:11px;font-weight:600;color:#ea580c;border:1px solid #e2e8f0;padding:4px 8px;">\uC608\uC0C1 \uD658\uBD88\uC561</td>
              <td style="text-align:right;font-family:monospace;font-weight:700;color:#ea580c;border:1px solid #e2e8f0;padding:4px 8px;">
                {{ orderItems.list.filter(it => it._checked).reduce((s,it) => s+(it.unitPrice||0)*it._claimQty,0).toLocaleString() }}\uC6D0
              </td>
            </tr>
          </tfoot>
        </table>
        <div style="font-size:10px;color:#94a3b8;margin-top:4px;">\u203B \uCCB4\uD06C \uC544\uC774\uD15C\uB9CC \uD074\uB808\uC784 \uB300\uC0C1</div>
      </div>
      <!-- \uC8FC\uBB38 \uBBF8\uC9C0\uC815 \uC2DC \uC6B0\uCE21 \uBE48 \uC601\uC5ED -->
      <div v-else style="border-left:1px solid #f1f5f9;padding-left:12px;display:flex;align-items:center;justify-content:center;">
        <div style="font-size:11px;color:#cbd5e1;text-align:center;">\uC8FC\uBB38 \uC120\uD0DD \uC2DC<br>\uC544\uC774\uD15C \uBAA9\uB85D \uD45C\uC2DC</div>
      </div>
    </div>
  </div>

  <!-- \uC0DD\uC131 \uC635\uC158 (\uC804\uCCB4 \uD3ED) -->
  <div v-if="cfg.mode==='create'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F504} \uD074\uB808\uC784 \uC0DD\uC131 \uC635\uC158</div>
    <bo-form-area :columns="createCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;">
      ${H("refundRateMin","refundRateMax",0,100,"%")}
    </bo-form-area>
  </div>

  <!-- \uD074\uB808\uC784 \uC720\uD615 \uAC00\uC911\uCE58 (1/3 \uD3ED) -->
  <div v-if="cfg.mode==='create'" style="margin-top:12px;display:grid;grid-template-columns:1fr 2fr;gap:12px;">
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F4CA} \uD074\uB808\uC784 \uC720\uD615 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <label style="font-size:11px;font-weight:600;color:#475569;display:block;margin-bottom:4px;">\uC720\uD615 \uC9C0\uC815</label>
        <select v-model="domCfg.fixedClaimType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="">-- \uC5C6\uC74C --</option>
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in CLAIM_TYPES" :key="t.cd" :value="t.cd">{{ t.label }}</option>
        </select>
      </div>
      <div v-show="domCfg.fixedClaimType === '__weighted__'">
        <div v-for="t in CLAIM_TYPES" :key="t.cd" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';flex-shrink:0;display:inline-block;'"></span>
          <span :class="'badge '+t.badge" style="min-width:40px;text-align:center;font-size:11px;">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.typeWeights[t.cd]" :style="'flex:1;accent-color:'+t.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.typeWeights[t.cd]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;">{{ Math.round(domCfg.typeWeights[t.cd]/cfTypeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:4px;">
          <div v-for="t in CLAIM_TYPES" :key="t.cd" :style="'flex:'+domCfg.typeWeights[t.cd]+';transition:flex .2s;background:'+t.color"></div>
        </div>
      </div>
    </div>
    <div></div>
  </div>

  <!-- \uC218\uC815 \uC635\uC158 -->
  <div v-if="cfg.mode==='update'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u270F \uD074\uB808\uC784 \uC218\uC815 \uC635\uC158</div>
    <bo-form-area :columns="updateCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
    <div style="border-top:1px solid #f1f5f9;margin-top:10px;padding-top:10px;">
      <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:6px;">{{ domCfg.targetType }} \uC0C1\uD0DC \uD750\uB984</div>
      <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
        <template v-for="(s,i) in cfAutoFlow" :key="s">
          <span style="font-size:10px;padding:3px 7px;border-radius:4px;background:#f1f5f9;color:#64748b;">{{ STATUS_LABELS[s] || s }}</span>
          <span v-if="i < cfAutoFlow.length-1" style="color:#94a3b8;font-size:10px;"> \u2192 </span>
        </template>
      </div>
    </div>
  </div>

  <!-- \uC2E4\uD589 \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch" @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- \uD68C\uC6D0 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="memberPicker.show" popup-cmd="cmPopup-member-pick" popup-code="member"
    title="\uC2DC\uBBAC \uD68C\uC6D0 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="memberPicker.show = false" />

  <!-- \uC8FC\uBB38 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="orderPicker.show" popup-cmd="cmPopup-order-pick" popup-code="order"
    title="\uC2DC\uBBAC \uC8FC\uBB38 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="orderPicker.show = false" />
</div>`}})();
