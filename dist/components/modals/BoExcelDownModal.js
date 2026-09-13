window.BoExcelDownModal={name:"BoExcelDownModal",props:{show:{type:Boolean,default:!1},domain:{type:String,required:!0},areaNm:{type:String,default:""},uiNm:{type:String,default:""},params:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]}},emits:["close"],setup(a,{emit:m}){const{reactive:b,computed:i,watch:v}=Vue,s=window.boApp.showToast,w=window.boApp.showConfirm,n=b({loading:!1,running:!1,mode:"sync",status:null,showDetail:!1}),h=(t,e)=>{if(t==="modal-close")return d();if(t==="excel-run")return T();if(t==="running-cancel")return D();if(t==="mode-select"){n.mode=e;return}if(t==="detail-toggle"){n.showDetail=!n.showDetail;return}console.warn("[handleBtnAction] unknown cmd:",t)},S=i(()=>!!(n.status&&n.status.running)),u=i(()=>n.status&&n.status.running||null),c=i(()=>n.status&&n.status.targetCount||0),N=i(()=>n.status&&n.status.syncMaxRows||0),p=i(()=>n.status&&n.status.splitRows||0),z=i(()=>n.status&&n.status.waitingCount||0),y=i(()=>!!(n.status&&n.status.syncAllowed)),g=i(()=>c.value<=0),C=i(()=>{const t=p.value;return!t||t<=0?1:Math.max(1,Math.ceil(c.value/t))}),r=i(()=>{const t=[];return(a.columns||[]).forEach(e=>{if(!(!e||!e.key)){if(Array.isArray(e.excelKeys)&&e.excelKeys.length){e.excelKeys.forEach(o=>{const l=typeof o=="string"?o:o.key,_=typeof o=="string"?l:o.label||o.key;l&&t.push({key:l,label:_})});return}String(e.key).startsWith("_")||t.push({key:e.key,label:e.label||e.key})}}),t}),E=i(()=>{if(!r.value.length)return"(\uC804\uCCB4 \uCEEC\uB7FC)";const t={};return r.value.forEach(e=>{t[e.key]=e.label}),JSON.stringify(t)}),k=i(()=>{const t=Object.entries(a.params||{}).filter(([o,l])=>l!=null&&String(l).trim()!==""&&o!=="pageNo"&&o!=="pageSize"&&o!=="excelColumns"&&o!=="excelCondText"&&o!=="sort");if(!t.length)return"(\uC804\uCCB4 \uC870\uD68C)";const e={};return t.forEach(([o,l])=>{e[o]=l}),JSON.stringify(e)}),A=i(()=>{const t=a.params&&a.params.sort;return t&&String(t).trim()?String(t):"(\uC9C0\uC815 \uC548 \uD568 \u2014 \uC11C\uBC84 \uAE30\uBCF8 \uC815\uB82C \uC801\uC6A9)"}),B=t=>t==null?"0":Number(t).toLocaleString(),f=()=>{const t={...a.params||{}};return r.value.length&&(t.excelColumns=R(r.value)),t},R=t=>t.map(e=>`${e.key}:${String(e.label).replace(/[:,]/g," ")}`).join(","),M=t=>t?String(t).replace("T"," ").substring(0,19):"-",x=async()=>{var t;n.loading=!0,n.status=null;try{const e=await boApiSvc.syExceldown.getStatus(a.domain,a.params,a.uiNm,"\uC5D1\uC140\uC0C1\uD0DC\uC870\uD68C");n.status=((t=e.data)==null?void 0:t.data)||null,n.mode=y.value?"sync":"async"}catch(e){s(coUtil.cofErrMsg(e,"\uC0C1\uD0DC \uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{n.loading=!1}},T=async()=>{var t;if(g.value){s("\uB2E4\uC6B4\uB85C\uB4DC\uD560 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}if(n.mode==="sync"){n.running=!0;try{await boApiSvc.syExceldown.downloadSync(a.domain,f(),a.areaNm,a.uiNm,"\uC989\uC2DC\uB2E4\uC6B4\uB85C\uB4DC"),s("\uB2E4\uC6B4\uB85C\uB4DC\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),d()}catch(e){s(await j(e),"error",0)}finally{n.running=!1}return}n.running=!0;try{const e=await boApiSvc.syExceldown.requestAsync(a.domain,f(),a.uiNm,"\uC608\uC57D\uB2E4\uC6B4\uB85C\uB4DC");s(((t=e.data)==null?void 0:t.message)||"\uC608\uC57D\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC644\uB8CC\uB418\uBA74 \uC54C\uB9BC\uC73C\uB85C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.","success"),d()}catch(e){s(coUtil.cofErrMsg(e,"\uC608\uC57D \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{n.running=!1}},D=async()=>{const t=u.value;if(!(!t||!await w("\uAC15\uC81C\uCDE8\uC18C",`\uC9C4\uD589 \uC911\uC778 [${t.domainNm||t.domainCd}] \uC694\uCCAD\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
\uC0DD\uC131 \uC911\uC778 \uD30C\uC77C\uC740 \uC0AD\uC81C\uB429\uB2C8\uB2E4.`)))try{await boApiSvc.syExceldown.cancel(t.exceldownId,a.uiNm,"\uAC15\uC81C\uCDE8\uC18C"),s("\uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await x()}catch(o){s(coUtil.cofErrMsg(o,"\uCDE8\uC18C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}},j=async t=>{var o;const e=(o=t.response)==null?void 0:o.data;if(e instanceof Blob)try{return JSON.parse(await e.text()).message||"\uB2E4\uC6B4\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."}catch{}return coUtil.cofErrMsg(t,"\uB2E4\uC6B4\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")},d=()=>m("close"),O=()=>{d(),window.boApp.navigate("syExceldownMng")};return v(()=>a.show,t=>{t&&x()}),{uiState:n,handleBtnAction:h,handleGoHistory:O,cfBusy:S,cfRunning:u,cfTotal:c,cfSyncMax:N,cfSplitRows:p,cfWaiting:z,cfSyncOk:y,cfEmpty:g,cfFileCount:C,cfCondText:k,cfColumnText:E,cfSortText:A,fnNum:B,fnDateTime:M,fnExcelParams:f}},template:`
<bo-modal :show="show" title="\u{1F4D7} \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC" width="560px" @close="handleBtnAction('modal-close')">
  <template #header-extra>
    <button type="button" class="btn btn_list btn-xs" @click="handleGoHistory" title="\uB0B4 \uB2E4\uC6B4\uB85C\uB4DC \uC694\uCCAD \uC774\uB825\uACFC \uC9C4\uD589\uC0C1\uD0DC\uB97C \uD655\uC778\uD569\uB2C8\uB2E4">
      \u{1F4CB} \uB2E4\uC6B4\uB85C\uB4DC \uC774\uB825
    </button>
  </template>
  <!-- ===== \u25A0. \uC870\uD68C\uC911 ====================================================== -->
  <div v-if="uiState.loading" style="padding:24px;text-align:center;color:#999;font-size:13px;">
    \uB300\uC0C1 \uAC74\uC218\uB97C \uD655\uC778\uD558\uB294 \uC911\uC785\uB2C8\uB2E4...
  </div>
  <div v-else>
    <!-- ===== \u25A0. \uC9C4\uD589\uC911 \uC548\uB0B4 (\uB3D9\uC2DC 1\uAC74 \uC81C\uD55C) ================================== -->
    <div v-if="cfBusy" style="border:1px solid #ffd6d6;background:#fff5f5;border-radius:8px;padding:12px;margin-bottom:14px;">
      <div style="font-size:13px;font-weight:700;color:#d9363e;margin-bottom:8px;">
        \uC774\uBBF8 \uC9C4\uD589 \uC911\uC778 \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC\uAC00 \uC788\uC2B5\uB2C8\uB2E4
      </div>
      <table style="width:100%;font-size:12px;color:#555;">
        <tr><td style="width:78px;color:#999;padding:2px 0;">\uB300\uC0C1</td><td>{{ cfRunning.domainNm || cfRunning.domainCd }}</td></tr>
        <tr><td style="color:#999;padding:2px 0;">\uC694\uCCAD\uC790</td><td>{{ cfRunning.regUserNm || cfRunning.regBy || '-' }}</td></tr>
        <tr><td style="color:#999;padding:2px 0;">\uC694\uCCAD\uD654\uBA74</td><td>{{ cfRunning.uiNm || '-' }}</td></tr>
        <tr><td style="color:#999;padding:2px 0;">API</td><td style="font-family:monospace;font-size:11px;">{{ cfRunning.apiUrl || '-' }}</td></tr>
        <tr><td style="color:#999;padding:2px 0;">\uAC74\uC218</td><td>{{ fnNum(cfRunning.totalCount) }}\uAC74</td></tr>
        <tr><td style="color:#999;padding:2px 0;">\uC9C4\uD589</td><td>{{ fnNum(cfRunning.doneCount) }}\uAC74 \uCC98\uB9AC\uB428</td></tr>
        <tr><td style="color:#999;padding:2px 0;">\uC2DC\uC791</td><td>{{ fnDateTime(cfRunning.startDate) }}</td></tr>
        <tr><td style="color:#999;padding:2px 0;">\uC2E4\uD589\uC11C\uBC84</td><td style="font-family:monospace;font-size:11px;">{{ cfRunning.podId || '-' }}</td></tr>
      </table>
      <div style="margin-top:10px;text-align:right;">
        <button class="btn btn_row_delete" @click="handleBtnAction('running-cancel')">\uAE30\uC874 \uC791\uC5C5 \uAC15\uC81C\uCDE8\uC18C</button>
      </div>
    </div>
    <!-- ===== \u25A0. \uB300\uC0C1 \uAC74\uC218 =================================================== -->
    <div style="border:1px solid #eee;border-radius:8px;padding:12px;margin-bottom:14px;background:#fafafa;">
      <div style="display:flex;align-items:baseline;gap:8px;">
        <span style="font-size:12px;color:#888;">\uB2E4\uC6B4\uB85C\uB4DC \uB300\uC0C1</span>
        <span style="font-size:20px;font-weight:700;color:#333;">{{ fnNum(cfTotal) }}</span>
        <span style="font-size:12px;color:#888;">\uAC74</span>
        <span v-if="cfWaiting > 0" style="margin-left:auto;font-size:11px;color:#fa8c16;">
          \uB300\uAE30\uC5F4 {{ cfWaiting }}\uAC74
        </span>
      </div>
      <div v-if="cfEmpty" style="font-size:12px;color:#d9363e;margin-top:6px;">
        \uC870\uAC74\uC5D0 \uD574\uB2F9\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uAC80\uC0C9\uC870\uAC74\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.
      </div>
    </div>
    <!-- ===== \u25A0. \uB2E4\uC6B4\uB85C\uB4DC \uC815\uBCF4 (\uD654\uBA74\uBA85 / \uC870\uAC74\uAC12\uC815\uBCF4 / \uD5E4\uB354\uBA85) \u2014 \uC774 \uD654\uBA74\uC5D0\uC11C \uC2E4\uC81C\uB85C \uC800\uC7A5\xB7\uB2E4\uC6B4\uB85C\uB4DC\uB420
         \uB0B4\uC6A9\uC744 \uC2E4\uD589 \uC804\uC5D0 \uD655\uC778\uC2DC\uD0A4\uACE0, sy_exceldown \uC774\uB825\uC5D0\uB3C4 \uB3D9\uC77C \uBB38\uAD6C\uB85C \uB0A8\uB294\uB2E4 ================== -->
    <div style="border:1px solid #eee;border-radius:8px;padding:10px 12px;margin-bottom:14px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
        <div style="font-size:11px;font-weight:700;color:#888;">\uB2E4\uC6B4\uB85C\uB4DC \uC815\uBCF4</div>
        <button type="button" class="btn btn_list btn-xs" @click="handleBtnAction('detail-toggle')">
          {{ uiState.showDetail ? '\uC870\uAC74 \uC0C1\uC138 \uC811\uAE30 \u25B2' : '\uC870\uAC74 \uC0C1\uC138 \uBCF4\uAE30 \u25BC' }}
        </button>
      </div>
      <table style="width:100%;font-size:12px;color:#555;">
        <tr>
          <td style="width:68px;color:#999;padding:3px 0;vertical-align:top;">\uD654\uBA74\uBA85</td>
          <td>{{ uiNm || '-' }}</td>
        </tr>
        <template v-if="uiState.showDetail">
          <tr>
            <td style="color:#999;padding:3px 0;vertical-align:top;">\uC815\uB82C</td>
            <td style="word-break:break-all;">{{ cfSortText }}</td>
          </tr>
          <tr>
            <td style="color:#999;padding:3px 0;vertical-align:top;">\uC870\uAC74\uAC12</td>
            <td style="word-break:break-all;">{{ cfCondText }}</td>
          </tr>
          <tr>
            <td style="color:#999;padding:3px 0;vertical-align:top;">\uD5E4\uB354\uBA85</td>
            <td style="word-break:break-all;">{{ cfColumnText }}</td>
          </tr>
        </template>
      </table>
    </div>
    <!-- ===== \u25A0. \uBC29\uC2DD \uC120\uD0DD =================================================== -->
    <div style="display:flex;flex-direction:column;gap:8px;">
      <!-- \uC989\uC2DC -->
      <label :style="'display:flex;gap:10px;padding:11px 12px;border-radius:8px;border:1px solid ' + (uiState.mode==='sync' ? '#1677ff' : '#e5e5e5') + ';' + ((cfSyncOk ? false : true) ? 'opacity:0.5;cursor:not-allowed;' : 'cursor:pointer;')">
        <input type="radio" value="sync" v-model="uiState.mode" :disabled="!cfSyncOk" style="margin-top:2px;" />
        <span style="flex:1;">
          <span style="font-size:13px;font-weight:600;color:#333;">\uC989\uC2DC \uB2E4\uC6B4\uB85C\uB4DC</span>
          <span style="font-size:11px;color:#999;margin-left:6px;">\uAE30\uBCF8</span>
          <div style="font-size:11px;color:#888;margin-top:3px;">
            \uC9C0\uAE08 \uBC14\uB85C \uBC1B\uC2B5\uB2C8\uB2E4. {{ fnNum(cfSyncMax) }}\uAC74 \uC774\uD558\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.
          </div>
          <div v-if="cfBusy" style="font-size:11px;color:#d9363e;margin-top:3px;">
            \uC9C4\uD589 \uC911\uC778 \uC791\uC5C5\uC774 \uC788\uC5B4 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
          </div>
          <div v-else-if="cfTotal > cfSyncMax" style="font-size:11px;color:#d9363e;margin-top:3px;">
            {{ fnNum(cfSyncMax) }}\uAC74\uC744 \uCD08\uACFC\uD574 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC608\uC57D\uC744 \uC774\uC6A9\uD574\uC8FC\uC138\uC694.
          </div>
        </span>
      </label>
      <!-- \uC608\uC57D -->
      <label :style="'display:flex;gap:10px;padding:11px 12px;border-radius:8px;cursor:pointer;border:1px solid ' + (uiState.mode==='async' ? '#1677ff' : '#e5e5e5')">
        <input type="radio" value="async" v-model="uiState.mode" style="margin-top:2px;" />
        <span style="flex:1;">
          <span style="font-size:13px;font-weight:600;color:#333;">\uC608\uC57D \uB2E4\uC6B4\uB85C\uB4DC</span>
          <div style="font-size:11px;color:#888;margin-top:3px;">
            \uBC31\uADF8\uB77C\uC6B4\uB4DC\uC5D0\uC11C \uB9CC\uB4E4\uACE0 \uC644\uB8CC\uB418\uBA74 \uC54C\uB9BC\uC73C\uB85C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.
            <template v-if="cfFileCount > 1">
              {{ fnNum(cfSplitRows) }}\uAC74\uC529 <b>{{ cfFileCount }}\uAC1C \uD30C\uC77C</b>\uB85C \uB098\uB220 \uC800\uC7A5\uB429\uB2C8\uB2E4.
            </template>
          </div>
          <div v-if="cfBusy" style="font-size:11px;color:#fa8c16;margin-top:3px;">
            \uC9C4\uD589 \uC911\uC778 \uC791\uC5C5 \uB4A4 \uB300\uAE30\uC5F4 {{ cfWaiting + 1 }}\uBC88\uC9F8\uB85C \uCD94\uAC00\uB429\uB2C8\uB2E4.
          </div>
        </span>
      </label>
    </div>
    <!-- ===== \u25A0. \uB3D9\uC2DC \uC2E4\uD589 \uC815\uCC45 \uC548\uB0B4 (\uD56D\uC0C1 \uB178\uCD9C) ================================ -->
    <div style="margin-top:14px;padding:10px 12px;border-radius:8px;background:#f5f8ff;border:1px solid #e3ecff;">
      <div style="font-size:11px;color:#1677ff;font-weight:600;margin-bottom:4px;">
        \u2139 \uC5D1\uC140 \uB2E4\uC6B4\uB85C\uB4DC\uB294 \uB3D9\uC2DC\uC5D0 1\uAC74\uB9CC \uC2E4\uD589\uB429\uB2C8\uB2E4
      </div>
      <div style="font-size:11px;color:#7a8699;line-height:1.6;">
        \uB300\uC6A9\uB7C9 \uC0DD\uC131\uC774 \uC11C\uBC84 \uC790\uC6D0\uC744 \uB9CE\uC774 \uC368\uC11C, \uC0AC\uC774\uD2B8 \uC804\uCCB4\uC5D0\uC11C \uD55C \uBC88\uC5D0 \uD558\uB098\uB9CC \uCC98\uB9AC\uD569\uB2C8\uB2E4.<br />
        \uB2E4\uB978 \uC0AC\uC6A9\uC790\uAC00 \uC2E4\uD589 \uC911\uC774\uBA74 <b>\uC989\uC2DC \uB2E4\uC6B4\uB85C\uB4DC\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uACE0</b>, \uC608\uC57D\uC740 \uB300\uAE30\uC5F4\uC5D0 \uC313\uC600\uB2E4\uAC00 \uC21C\uC11C\uB300\uB85C \uCC98\uB9AC\uB429\uB2C8\uB2E4.
        <template v-if="cfBusy">
          <br />\uC9C4\uD589 \uC911\uC778 \uC791\uC5C5\uC774 \uBA48\uCD98 \uAC83 \uAC19\uB2E4\uBA74 \uC704\uC758 [\uAE30\uC874 \uC791\uC5C5 \uAC15\uC81C\uCDE8\uC18C]\uB85C \uD574\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
        </template>
      </div>
    </div>
  </div>
  <!-- ===== \u25A0. \uD478\uD130 ======================================================== -->
  <template #footer>
    <button class="btn btn_confirm" :disabled="uiState.loading || uiState.running || cfEmpty"
      @click="handleBtnAction('excel-run')">
      {{ uiState.running ? '\uCC98\uB9AC \uC911...' : (uiState.mode === 'sync' ? '\uB2E4\uC6B4\uB85C\uB4DC' : '\uC608\uC57D\uD558\uAE30') }}
    </button>
    <button class="btn btn_close" @click="handleBtnAction('modal-close')">\uB2EB\uAE30</button>
  </template>
</bo-modal>
`};
