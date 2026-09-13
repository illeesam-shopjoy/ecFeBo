(function(){const{reactive:m}=Vue,{useSimulSetup:T,makeLogCols:E,makeBaseCfgColumns:k}=window.ZdSimulBase,u=[{value:"DELIVERY",label:"\uBC30\uC1A1\uC5C5\uCCB4",color:"#3b82f6"},{value:"SALES",label:"\uD310\uB9E4\uC5C5\uCCB4",color:"#22c55e"},{value:"SYSTEM",label:"\uC2DC\uC2A4\uD15C\uC6B4\uC601\uC5C5\uCCB4",color:"#a855f7"}],g=[{value:"ACTIVE",label:"\uACC4\uC57D\uC911"},{value:"SUSPENDED",label:"\uACC4\uC57D\uC815\uC9C0"},{value:"TERMINATED",label:"\uACC4\uC57D\uC885\uB8CC"},{value:"PENDING",label:"\uAC80\uD1A0\uC911"}],P=["\uD64D\uAE38\uB3D9","\uAE40\uCCA0\uC218","\uC774\uC601\uD76C","\uBC15\uBBFC\uC900","\uC815\uC218\uC5F0","\uCD5C\uBBFC\uC601","\uAC15\uB3D9\uC6D0","\uC870\uD604\uC544","\uC724\uC11C\uC728","\uC784\uC9C0\uC5F0"],N=["(\uC8FC)","\u321C","\uC720\uD55C(\uC8FC)","\u3231"],I=["\uD328\uC158","\uAE00\uB85C\uBC8C","\uD2B8\uB808\uC774\uB529","\uC194\uB8E8\uC158","\uCEE4\uBA38\uC2A4","\uC778\uD130\uB0B4\uC154\uB110","\uB9C8\uCF13","\uC2A4\uD1A0\uC5B4","\uBDF0\uD2F0","\uB77C\uC774\uD504"],x=[{value:"status",label:"\uC0C1\uD0DC \uBCC0\uACBD"},{value:"phone",label:"\uC804\uD654\uBC88\uD638 \uAC31\uC2E0"},{value:"remark",label:"\uBE44\uACE0 \uC5C5\uB370\uC774\uD2B8"}];window.ZdSimulVendorMng={name:"ZdSimulVendorMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(_){const t=m({statusOnCreate:"ACTIVE",fixedVendorType:"__weighted__",typeWeights:{DELIVERY:40,SALES:40,SYSTEM:20},updateType:"status",fixedVendorId:"",fixedVendorNm:""}),A=()=>{if(t.fixedVendorType&&t.fixedVendorType!=="__weighted__")return t.fixedVendorType;const o=t.typeWeights,i=Object.values(o).reduce((n,f)=>n+Number(f),0)||1;let e=Math.random()*i;for(const n of u)if(e-=Number(o[n.value]||0),e<=0)return n.value;return u[0].value},z=T({domain:"\uC5C5\uCCB4",uiNm:"\uC5C5\uCCB4 \uC2DC\uBBAC\uB808\uC774\uD130",label:"\uC2DC\uBBAC\uC5C5\uCCB4",showToast:_.showToast,defaultCfg:{mode:"create",countMin:1,countMax:1,intervalVal:30,intervalUnit:"sec",durationMin:10},runFn:async({mode:o,namePrefix:i,randInt:e,pick:n})=>{var f,h,C,S,w;if(o==="create"){const d=String(Date.now()).slice(-5),l=n(I),r=n(N),p=(i||"\uC2DC\uBBAC")+l+"\uC5C5\uCCB4"+r,s=n(P),c=A(),oe=((f=u.find(de=>de.value===c))==null?void 0:f.label)||c,te="02-"+String(e(100,999))+"-"+String(e(1e3,9999)),ae=String(e(100,999))+"-"+String(e(10,99))+"-"+String(e(1e4,99999)),ne="vendor"+d+"@"+l.toLowerCase()+".co.kr",V={vendorNm:p,ceoNm:s,vendorTypeCd:c,vendorPhone:te,vendorEmail:ne,corpNo:ae,vendorStatusCd:t.statusOnCreate,openDate:coUtil.cofToYmd(new Date),contractDate:coUtil.cofToYmd(new Date)},v=await boApi.post("/bo/zd/simul/vendor/create",V,coUtil.cofApiHdr("\uC5C5\uCCB4\uC2DC\uBBAC","\uC0DD\uC131")),ie=((C=(h=v==null?void 0:v.data)==null?void 0:h.data)==null?void 0:C.vendorId)||d;return{ok:!0,desc:p+" / "+oe+" / "+s,meta:{id:ie,params:V}}}else{let d;if(t.fixedVendorId)d={vendorId:t.fixedVendorId,vendorNm:t.fixedVendorNm};else{const s=await boApi.get("/bo/sy/vendor/page",{params:{pageNo:1,pageSize:50,vendorStatusCd:"ACTIVE"}}),c=((w=(S=s==null?void 0:s.data)==null?void 0:S.data)==null?void 0:w.pageList)||[];if(!c.length)return{ok:!1,reason:"\uC218\uC815\uD560 \uC5C5\uCCB4 \uC5C6\uC74C (ACTIVE)"};d=n(c)}let l={},r="";if(t.updateType==="status"){const s=n(g);l.vendorStatusCd=s.value,r="\uC0C1\uD0DC\u2192"+s.label}else t.updateType==="phone"?(l.vendorPhone="02-"+String(e(100,999))+"-"+String(e(1e3,9999)),r="\uC804\uD654\uBC88\uD638 \uBCC0\uACBD"):(l.vendorRemark="[\uC2DC\uBBAC\uC218\uC815] "+new Date().toLocaleTimeString("ko-KR"),r="\uBE44\uACE0 \uC5C5\uB370\uC774\uD2B8");const p={vendorId:d.vendorId,...l};return await boApi.post("/bo/zd/simul/vendor/update",p,coUtil.cofApiHdr("\uC5C5\uCCB4\uC2DC\uBBAC","\uC218\uC815")),{ok:!0,desc:(d.vendorNm||d.vendorId)+" "+r,meta:{id:d.vendorId,params:p}}}}}),{cfg:D,state:O,logs:L,logPager:R,logSearch:M,cfIsRunning:Y,cfSuccessRate:U,onStart:W,onStop:F,onRunOnce:B,onPreview:Z,onPreviewCreate:j,onClearLog:q,onSetLogPage:H,onSearchLog:G}=z,K=E(),X=k(),J=[{key:"statusOnCreate",label:"\uCD08\uAE30 \uC0C1\uD0DC",type:"select",options:g}],Q=[{key:"updateType",label:"\uC218\uC815 \uC720\uD615",type:"select",options:x}],$=Vue.computed(()=>Object.values(t.typeWeights).reduce((o,i)=>o+Number(i),0)||1),a=m({show:!1,searchValue:"",rows:[],loading:!1}),b=async()=>{var o,i;a.loading=!0;try{const e=await boApi.get("/bo/sy/vendor/page",{params:{pageNo:1,pageSize:20,...a.searchValue?{searchValue:a.searchValue}:{}}});a.rows=((i=(o=e==null?void 0:e.data)==null?void 0:o.data)==null?void 0:i.pageList)||[]}catch{a.rows=[]}a.loading=!1},ee=async()=>{a.show=!0,a.searchValue="",await b()},y=o=>{t.fixedVendorId=o.vendorId,t.fixedVendorNm=o.vendorNm||o.vendorId,a.show=!1};return{fnCmPopupCallback:(o,i,e)=>{if(o==="cmPopup-vendor-pick"){a.show=!1,e!=null&&y(e);return}},cfg:D,domCfg:t,state:O,logs:L,logPager:R,logSearch:M,cfIsRunning:Y,cfSuccessRate:U,logCols:K,baseCfgColumns:X,createCfgColumns:J,updateCfgColumns:Q,cfTypeTotal:$,onStart:W,onStop:F,onRunOnce:B,onPreview:Z,onPreviewCreate:j,onClearLog:q,onSetLogPage:H,onSearchLog:G,VENDOR_TYPES:u,VENDOR_STATUSES:g,UPDATE_TYPES:x,vendorPicker:a,onOpenVendorPicker:ee,onSelectVendor:y,_loadVendorPicker:b}},template:`
<div class="zd-simul">
  <div class="page-title">\u{1F3E2} \uC5C5\uCCB4 \uC2DC\uBBAC\uB808\uC774\uD130</div>

  <zd-simul-control-panel
    :cfg="cfg" :state="state" :base-cfg-columns="baseCfgColumns"
    :cf-is-running="cfIsRunning" :cf-success-rate="cfSuccessRate"
    accent-color="linear-gradient(90deg,#7c3aed,#a78bfa)"
    accent-active="background:#f5f3ff;border:1.5px solid #7c3aed;color:#6d28d9;"
    @start="onStart" @stop="onStop" @run-once="onRunOnce" @preview="onPreview" @preview-create="onPreviewCreate" />

  <!-- \uC0DD\uC131 \uC635\uC158 -->
  <div v-if="cfg.mode==='create'" class="card" style="padding:14px 16px;margin-top:12px;">
    <div class="list-title">\u{1F3E2} \uC5C5\uCCB4 \uC0DD\uC131 \uC635\uC158</div>
    <bo-form-area :columns="createCfgColumns" :form="domCfg" :show-actions="false" :cols="3" style="margin-top:10px;" />
    <div style="margin-top:10px;font-size:11px;color:#64748b;line-height:1.6;">
      \u2705 \uC5C5\uCCB4\uBA85 = <b>\uC2DC\uBBAC[\uC5C5\uC885][\uC811\uBBF8\uC0AC]</b> / \uBC95\uC778\uBC88\uD638 \uC790\uB3D9\uC0DD\uC131 / \uAC1C\uC5C5\uC77C\xB7\uACC4\uC57D\uC77C = \uC624\uB298
    </div>
  </div>

  <!-- \uAC00\uC911\uCE58 \uD328\uB110 -->
  <div v-if="cfg.mode==='create'" style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <div class="card" style="padding:14px 16px;">
      <div class="list-title">\u{1F3F7} \uC5C5\uCCB4 \uC720\uD615 \uAC00\uC911\uCE58</div>
      <div style="margin-top:8px;margin-bottom:10px;">
        <select v-model="domCfg.fixedVendorType" style="width:100%;border:1px solid #e2e8f0;border-radius:6px;padding:4px 8px;font-size:12px;">
          <option value="__weighted__">-- \uAC00\uC911\uCE58\uC801\uC6A9 --</option>
          <option v-for="t in VENDOR_TYPES" :key="t.value" :value="t.value">{{ t.label }}</option>
        </select>
      </div>
      <div style="margin-top:10px;">
        <div v-for="t in VENDOR_TYPES" :key="t.value" style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
          <span :style="'width:8px;height:8px;border-radius:50%;background:'+t.color+';flex-shrink:0;display:inline-block;'"></span>
          <span style="font-size:11px;color:#334155;min-width:52px;white-space:nowrap;">{{ t.label }}</span>
          <input type="range" min="0" max="100" v-model.number="domCfg.typeWeights[t.value]" :style="'flex:1;accent-color:'+t.color+';'" />
          <input type="number" min="0" max="100" v-model.number="domCfg.typeWeights[t.value]" style="width:40px;text-align:center;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;padding:2px;" />
          <span style="font-size:10px;color:#94a3b8;min-width:28px;text-align:right;">{{ Math.round(domCfg.typeWeights[t.value]/cfTypeTotal*100) }}%</span>
        </div>
        <div style="height:8px;border-radius:4px;overflow:hidden;display:flex;margin-top:6px;">
          <div v-for="t in VENDOR_TYPES" :key="t.value" :style="'flex:'+domCfg.typeWeights[t.value]+';transition:flex .2s;background:'+t.color+';'"></div>
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
      <div style="font-size:11px;font-weight:600;color:#475569;margin-bottom:6px;">\u{1F3AF} \uC218\uC815 \uB300\uC0C1 \uC5C5\uCCB4 \uC9C0\uC815</div>
      <div style="display:flex;gap:6px;align-items:center;max-width:400px;">
        <input type="text" :value="domCfg.fixedVendorNm || domCfg.fixedVendorId || ''" readonly
          placeholder="\uB79C\uB364 (ACTIVE \uC5C5\uCCB4 50\uAC1C \uC911)"
          style="flex:1;height:28px;padding:0 8px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;color:#334155;cursor:pointer;"
          @click="onOpenVendorPicker" />
        <button v-if="domCfg.fixedVendorId" class="btn" style="height:28px;padding:0 7px;font-size:11px;background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;"
          @click="domCfg.fixedVendorId='';domCfg.fixedVendorNm=''">\u2715</button>
        <button v-else class="btn btn_detail" style="height:28px;padding:0 9px;font-size:11px;" @click="onOpenVendorPicker">\uC120\uD0DD</button>
      </div>
      <div v-if="domCfg.fixedVendorId" style="font-size:10px;color:#7c3aed;margin-top:3px;font-family:monospace;">{{ domCfg.fixedVendorId }}</div>
      <div v-else style="font-size:10px;color:#94a3b8;margin-top:3px;">\u{1F4A1} \uBBF8\uC9C0\uC815 \uC2DC ACTIVE \uC5C5\uCCB4 \uC911 \uB79C\uB364 \uC120\uD0DD</div>
    </div>
  </div>

  <!-- \uC2E4\uD589 \uB85C\uADF8 -->
  <zd-simul-log-panel :logs="logs" :log-cols="logCols" :pager="logPager" :log-search="logSearch"
    @search-log="onSearchLog" max-height="320px" style="margin-top:12px;" @clear="onClearLog" @set-page="onSetLogPage" />

  <!-- \uC5C5\uCCB4 picker \uBAA8\uB2EC -->
    <bo-cm-popup-modal v-if="vendorPicker.show" popup-cmd="cmPopup-vendor-pick" popup-code="vendor"
    title="\uC218\uC815\uD560 \uC5C5\uCCB4 \uC120\uD0DD" :on-callback="fnCmPopupCallback" @close="vendorPicker.show = false" />
</div>`}})();
