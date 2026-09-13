window.__shopjoy_modal_esc_attached__||(window.__shopjoy_modal_esc_attached__=!0,document.addEventListener("keydown",l=>{if(l.key!=="Escape")return;const b=document.querySelector(".modal-overlay");b&&b.click()})),window.TemplatePreviewModal={name:"TemplatePreviewModal",inheritAttrs:!1,props:{tmpl:{type:Object,default:()=>({})},sampleParams:{type:String,default:"{}"},reloadTrigger:{type:Number,default:0},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close"],setup(l,{emit:b}){const{computed:m}=Vue,B=(v,N={})=>{if(v==="modal-close"){b("close"),l.onCallback&&l.onCallback(l.modalName,null,null);return}else console.warn("[handleBtnAction] unknown cmd:",v)},u=(v,N={})=>{console.warn("[handleSelectAction] unknown cmd:",v)},_=m(()=>{try{return JSON.parse(l.sampleParams||"{}")}catch{return{}}}),S=m(()=>{var v;return["\uBA54\uC77C\uD15C\uD50C\uB9BF","MMS\uD15C\uD50C\uB9BF"].includes((v=l.tmpl)==null?void 0:v.templateType)}),f=v=>{if(!v)return"";let N=v;return S.value||(N=v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),N.replace(/\{\{(\w+)\}\}/g,(H,U)=>_.value[U]!==void 0?`<span style="background:#fff3cd;color:#856404;border-radius:3px;padding:0 2px;font-weight:600;">${String(_.value[U])}</span>`:`<span style="color:#dc3545;font-weight:600;">{{${U}}}</span>`)},s=m(()=>{var v;return f(((v=l.tmpl)==null?void 0:v.subject)||"")}),a=m(()=>{var v;return f(((v=l.tmpl)==null?void 0:v.content)||"")}),C=m(()=>{var v;return{\uBA54\uC77C\uD15C\uD50C\uB9BF:"badge-blue",\uBB38\uC790\uD15C\uD50C\uB9BF:"badge-green",MMS\uD15C\uD50C\uB9BF:"badge-orange",kakao\uD1A1\uD15C\uD50C\uB9BF:"badge-purple",kakao\uC54C\uB9BC\uD1A1\uD15C\uD50C\uB9BF:"badge-purple"}[(v=l.tmpl)==null?void 0:v.templateType]||"badge-gray"}),A=m(()=>Object.entries(_.value).map(([v,N])=>({k:v,v:N}))),G=v=>"{{"+v+"}}";return{cfSiteNm:m(()=>boUtil.bofGetSiteNm()),tmpl:m(()=>l.tmpl),cfRenderedSubject:s,cfRenderedContent:a,cfIsHtml:S,cfTypeBadge:C,cfParamList:A,fmtKey:G,handleBtnAction:B,handleSelectAction:u}},template:`
<bo-modal :show="true" max-width="700px" @close="handleBtnAction('modal-close')">
  <div class="modal-header" style="margin:-20px -20px 14px -20px;">
    <span class="modal-title">
      \u{1F4C4} \uD15C\uD50C\uB9BF \uBBF8\uB9AC\uBCF4\uAE30
      <span style="font-size:11px;color:#2563eb;font-weight:500;margin-left:8px;">
        {{ cfSiteNm }}
      </span>
    </span>
    <span class="modal-close" @click="handleBtnAction('modal-close')">
      \u2715
    </span>
  </div>
  <!-- \uD15C\uD50C\uB9BF \uAE30\uBCF8\uC815\uBCF4 -->
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding:10px 14px;background:#f8f9fa;border-radius:8px;">
    <span class="badge" :class="cfTypeBadge">
      {{ tmpl?.templateType }}
    </span>
    <span style="font-weight:700;font-size:14px;color:#1a1a2e;">
      {{ tmpl?.templateNm }}
    </span>
  </div>
  <!-- \uD30C\uB77C\uBBF8\uD130 \uC0D8\uD50C \uBC43\uC9C0 -->
  <div v-if="cfParamList.length" style="margin-bottom:12px;">
    <div style="font-size:11px;color:#888;font-weight:600;margin-bottom:5px;">
      \uD30C\uB77C\uBBF8\uD130 \uC0D8\uD50C\uAC12
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:5px;">
      <span v-for="p in cfParamList" :key="p.k"
        style="display:inline-flex;align-items:center;gap:3px;font-size:11px;background:#f0f4ff;border:1px solid #d0d9ff;border-radius:4px;padding:2px 8px;color:#2563eb;">
        <b>
          {{ fmtKey(p.k) }}
        </b>
        <span style="color:#aaa;margin:0 2px;">
          =
        </span>
        <span style="color:#856404;background:#fff3cd;border-radius:2px;padding:0 3px;">
          {{ p.v }}
        </span>
      </span>
    </div>
  </div>
  <div v-else style="margin-bottom:12px;font-size:12px;color:#aaa;">
    \uD30C\uB77C\uBBF8\uD130 \uC0D8\uD50C\uAC12 \uC5C6\uC74C
  </div>
  <!-- \uC81C\uBAA9 -->
  <div v-if="tmpl?.subject" style="margin-bottom:12px;">
    <div style="font-size:11px;color:#888;font-weight:600;margin-bottom:4px;">
      \uC81C\uBAA9 (Subject)
    </div>
    <div style="padding:9px 13px;background:#fff;border:1px solid #e8e8e8;border-radius:7px;font-size:13px;color:#333;"
      v-html="cfRenderedSubject">
    </div>
  </div>
  <!-- \uB0B4\uC6A9 \uBBF8\uB9AC\uBCF4\uAE30 -->
  <div>
    <div style="font-size:11px;color:#888;font-weight:600;margin-bottom:5px;">
      \uB0B4\uC6A9 \uBBF8\uB9AC\uBCF4\uAE30
    </div>
    <!-- HTML \uD0C0\uC785 -->
    <div v-if="cfIsHtml"
      style="padding:18px;background:#fff;border:1px solid #e0e0e0;border-radius:8px;min-height:120px;max-height:380px;overflow-y:auto;font-size:13px;line-height:1.8;"
      v-html="cfRenderedContent">
    </div>
    <!-- \uD14D\uC2A4\uD2B8 \uD0C0\uC785 -->
    <pre v-else
      style="padding:14px 16px;background:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;min-height:80px;max-height:280px;overflow-y:auto;font-size:13px;line-height:1.8;white-space:pre-wrap;word-break:break-all;margin:0;color:#333;"
      v-html="cfRenderedContent"></pre>
    </div>
    <div style="margin-top:18px;display:flex;justify-content:flex-end;">
      <button class="btn btn_close" @click="handleBtnAction('modal-close')">
        \uB2EB\uAE30
      </button>
    </div>
  </bo-modal>
`},window.TemplateSendModal={name:"TemplateSendModal",inheritAttrs:!1,props:{tmpl:{type:Object,default:()=>({})},dispDataset:{type:Object,default:()=>({})},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)},reloadTrigger:{type:Number,default:0},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close"],setup(l,{emit:b}){const{ref:m,reactive:B,computed:u,watch:_,onMounted:S}=Vue,f=u(()=>boUtil.bofGetSiteNm()),s=B({type:"member",searchValue:""}),a=B([]),C=n=>n.memberId||n.userId||n.boUserId,A=B([]),G=B([]),F=B([]),v=async()=>{var n,h,w;try{const[R,j,se]=await Promise.all([boApiSvc.syDept.getList({pageSize:1e4},"\uBD80\uC11C\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C"),boApiSvc.mbMember.getList({pageSize:1e4},"\uD68C\uC6D0\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C"),boApiSvc.syUser.getList({pageSize:1e4},"\uC0AC\uC6A9\uC790\uAD00\uB9AC","\uBAA9\uB85D\uC870\uD68C")]);A.splice(0,A.length,...((n=R.data)==null?void 0:n.data)||[]),G.splice(0,G.length,...((h=j.data)==null?void 0:h.data)||[]),F.splice(0,F.length,...((w=se.data)==null?void 0:w.data)||[])}catch{}};S(()=>{v()}),_(()=>l.reloadTrigger,()=>{l.reloadTrigger&&v()});const N=B({selectedDeptId:null,selectedGrade:null,deptSearchValue:""}),H=u(()=>N.selectedDeptId),U=u(()=>N.selectedGrade),J=(n,h,w)=>n.filter(R=>(R.parentDeptId||null)===(h||null)&&R.useYn==="Y").sort((R,j)=>(R.sortOrd||0)-(j.sortOrd||0)).map(R=>({...R,_depth:w,_kids:J(n,R.deptId,w+1)})),Q=(n,h=[])=>(n.forEach(w=>{h.push(w),Q(w._kids,h)}),h),q=u(()=>{const n=N.deptSearchValue.trim().toLowerCase(),h=n?A.filter(w=>w.useYn==="Y"&&w.deptNm.toLowerCase().includes(n)):A;return Q(J(h,null,1))}),o=n=>{const h=new Set,w=[n];for(;w.length;){const R=w.shift();h.add(R),A.filter(j=>j.parentDeptId===R).forEach(j=>w.push(j.deptId))}return h},L=["VIP","\uC6B0\uC218","\uC77C\uBC18"],ee=u(()=>{const n=s.searchValue.trim().toLowerCase();let h=G;return U.value&&(h=h.filter(w=>w.memberGrade===U.value||w.grade===U.value)),n&&(h=h.filter(w=>(w.memberNm||"").toLowerCase().includes(n)||(w.memberEmail||w.email||"").toLowerCase().includes(n)||String(w.memberId||w.userId||"").includes(n))),h}),E=u(()=>{const n=s.searchValue.trim().toLowerCase();let h=F;if(H.value!==null){const w=o(H.value);h=h.filter(R=>w.has(R.deptId))}return n&&(h=h.filter(w=>(w.userNm||w.name||"").toLowerCase().includes(n)||(w.userEmail||w.email||"").toLowerCase().includes(n)||String(w.userId||w.boUserId||"").includes(n))),h}),Z=u(()=>s.type==="member"?ee.value:E.value),te=n=>a.includes(C(n)),oe=n=>{const h=C(n),w=a.indexOf(h);w===-1?a.push(h):a.splice(w,1)},Y=u(()=>Z.value.length>0&&Z.value.every(n=>a.includes(C(n)))),ie=()=>{Y.value?a.splice(0):Z.value.forEach(n=>{const h=C(n);a.includes(h)||a.push(h)})};_(()=>s.type,()=>{a.splice(0),s.searchValue="",N.selectedDeptId=null,N.selectedGrade=null});const re=u(()=>{var n;return{\uBA54\uC77C\uD15C\uD50C\uB9BF:"badge-blue",\uBB38\uC790\uD15C\uD50C\uB9BF:"badge-green",MMS\uD15C\uD50C\uB9BF:"badge-orange",kakao\uD1A1\uD15C\uD50C\uB9BF:"badge-purple",kakao\uC54C\uB9BC\uD1A1\uD15C\uD50C\uB9BF:"badge-purple",\uC2DC\uC2A4\uD15C\uC54C\uB9BC:"badge-red",\uD68C\uC6D0\uC54C\uB9BC:"badge-teal"}[(n=l.tmpl)==null?void 0:n.templateType]||"badge-gray"}),ne=n=>({VIP:"#f59e0b",\uC6B0\uC218:"#2563eb",\uC77C\uBC18:"#6b7280"})[n]||"#6b7280",i=n=>(s.type==="member"?n.memberNm||n.memberEmail||"":n.userNm||n.loginId||"")||"",y=n=>(s.type==="member"?n.memberEmail||n.email||"":n.loginId||n.userEmail||"")||"",T=n=>s.type==="member"?n.memberEmail||n.email||n.memberPhone||"":[(A.find(w=>w.deptId===n.deptId)||{}).deptNm||"",n.userEmail||""].filter(Boolean).join(" \xB7 ")||"-",V=n=>s.type==="member"?n.memberGrade||n.grade||"":n.userStatusCd||"",P=n=>{if(s.type==="user")return n.userStatusCd==="ACTIVE"?"background:#dcfce7;color:#16a34a;":"background:#f3f4f6;color:#9ca3af;";const h=n.memberGrade||n.grade;return h==="VIP"?"background:#fef3c7;color:#d97706;":h==="\uC6B0\uC218"?"background:#dbeafe;color:#1d4ed8;":"background:#f3f4f6;color:#6b7280;"},de=async()=>{var w;if(!a.length){l.showToast("\uBC1C\uC1A1\uD560 \uC218\uC2E0\uC790\uB97C \uC120\uD0DD\uD558\uC138\uC694.","info");return}const n=s.type==="member"?"\uD68C\uC6D0":"\uAD00\uB9AC\uC790";await l.showConfirm("\uD15C\uD50C\uB9BF \uBC1C\uC1A1",`[${(w=l.tmpl)==null?void 0:w.templateNm}] \uD15C\uD50C\uB9BF\uC744 \uC120\uD0DD\uB41C ${n} ${a.length}\uBA85\uC5D0\uAC8C \uBC1C\uC1A1\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,{btnOk:"\uBC1C\uC1A1",btnCancel:"\uCDE8\uC18C"})&&(l.showToast(`${n} ${a.length}\uBA85\uC5D0\uAC8C \uBC1C\uC1A1 \uC694\uCCAD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`),b("close"),l.onCallback&&l.onCallback(l.modalName,null,null))},K=(n,h={})=>{if(n==="modal-close"){b("close"),l.onCallback&&l.onCallback(l.modalName,null,null);return}else{if(n==="modal-send")return de();if(n==="searchParam-type"){s.type=h;return}else{if(n==="list-toggle-all")return ie();console.warn("[handleBtnAction] unknown cmd:",n)}}},ae=(n,h={})=>{if(n==="deptTree-select"){N.selectedDeptId=h;return}else if(n==="grade-select"){N.selectedGrade=h;return}else{if(n==="list-toggle")return oe(h);console.warn("[handleSelectAction] unknown cmd:",n)}};return{cfSiteNm:f,searchParam:s,uiState:N,cfList:Z,selected:a,fnIsSelected:te,cfAllChecked:Y,cfTypeBadge:re,fnGradeBadgeColor:ne,fnDisplayNm:i,fnDisplayLogin:y,fnDisplaySub:T,fnDisplayBadge:V,fnBadgeStyle:P,getId:C,selectedDeptId:H,selectedGrade:U,cfFlatDeptTree:q,MEMBER_GRADES:L,tmpl:u(()=>l.tmpl),handleBtnAction:K,handleSelectAction:ae}},template:`
<bo-modal :show="true" max-width="800px" max-height="84vh" box-pad="0" body-pad="0" @close="handleBtnAction('modal-close')">
  <div style="background:#fff;border-radius:14px;display:flex;flex-direction:column;overflow:hidden;">
    <!-- \u2500\u2500 \uD5E4\uB354 \u2500\u2500 -->
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid #f0f0f0;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:10px;min-width:0;">
        <span style="font-size:15px;font-weight:800;color:#1a1a2e;flex-shrink:0;">
          \u{1F4E8} {{ tmpl?.templateNm || '\uBC1C\uC1A1\uD558\uAE30' }}
        </span>
        <code v-if="tmpl?.templateCode" style="font-size:11px;color:#888;background:#efefef;padding:1px 8px;border-radius:4px;flex-shrink:0;">
          {{ tmpl.templateCode }}
        </code>
        <span style="font-size:10px;font-weight:600;color:#2563eb;background:#eff6ff;padding:2px 8px;border-radius:20px;flex-shrink:0;">
          {{ cfSiteNm }}
        </span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span v-if="selected.length" style="font-size:12px;color:#52c41a;font-weight:700;background:#f6ffed;padding:3px 10px;border-radius:20px;">
          {{ selected.length }}\uBA85 \uC120\uD0DD\uB428
        </span>
        <span style="cursor:pointer;font-size:20px;color:#d1d5db;line-height:1;" @click="handleBtnAction('modal-close')">
          \u2715
        </span>
      </div>
    </div>
    <!-- \u2500\u2500 \uD0ED \u2500\u2500 -->
      <div style="display:flex;border-bottom:2px solid #f0f0f0;flex-shrink:0;background:#fff;">
        <button @click="handleBtnAction('searchParam-type', 'member')"
        style="padding:9px 24px;background:none;border:none;cursor:pointer;font-size:13px;font-weight:600;transition:all .12s;"
        :style="searchParam.type==='member'?'border-bottom:2px solid #e8587a;color:#e8587a;margin-bottom:-2px;':'color:#9ca3af;'">
          \u{1F465} \uD68C\uC6D0
        </button>
        <button @click="handleBtnAction('searchParam-type', 'user')"
        style="padding:9px 24px;background:none;border:none;cursor:pointer;font-size:13px;font-weight:600;transition:all .12s;"
        :style="searchParam.type==='user'?'border-bottom:2px solid #e8587a;color:#e8587a;margin-bottom:-2px;':'color:#9ca3af;'">
          \u{1F464} \uAD00\uB9AC\uC790
        </button>
      </div>
      <!-- \u2500\u2500 \uBC14\uB514: \uC88C(\uD544\uD130) + \uC6B0(\uBAA9\uB85D) \u2500\u2500 -->
      <div style="display:flex;min-height:420px;max-height:60vh;overflow:hidden;">
        <!-- \uC88C: \uD544\uD130 \uD328\uB110 -->
        <div style="width:200px;flex-shrink:0;border-right:1px solid #f0f0f0;display:flex;flex-direction:column;background:#f8f9fb;">
          <!-- \uAD00\uB9AC\uC790 \uD0ED: \uBD80\uC11C \uD2B8\uB9AC -->
          <template v-if="searchParam.type==='user'">
            <div style="padding:10px 10px 8px;border-bottom:1px solid #ebebeb;">
              <div style="font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px;">
                \uC870\uC9C1 / \uBD80\uC11C
              </div>
              <div style="position:relative;">
                <span style="position:absolute;left:8px;top:50%;transform:translateY(-50%);font-size:11px;color:#bbb;">
                  \u{1F50D}
                </span>
                <input v-model="uiState.deptSearchValue" placeholder="\uBD80\uC11C \uAC80\uC0C9"
                style="width:100%;border:1px solid #e5e7eb;border-radius:7px;padding:5px 8px 5px 24px;font-size:12px;outline:none;box-sizing:border-box;background:#fff;" />
              </div>
            </div>
            <div style="flex:1;overflow-y:auto;padding:6px 6px;">
              <!-- \uC804\uCCB4 \uB8E8\uD2B8 -->
              <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;cursor:pointer;margin-bottom:2px;transition:all .12s;"
              :style="selectedDeptId===null?'background:#e8587a;box-shadow:0 2px 8px rgba(232,88,122,0.25);':''"
              @click="handleSelectAction('deptTree-select', null)">
                <span style="font-size:8px;font-weight:900;flex-shrink:0;" :style="{ color: selectedDeptId===null?'#fff':'#e8587a' }">
                  \u25CF
                </span>
                <span style="font-size:13px;font-weight:700;flex:1;" :style="{ color: selectedDeptId===null?'#fff':'#374151' }">
                  \uC804\uCCB4
                </span>
              </div>
              <!-- \uBD80\uC11C \uD2B8\uB9AC -->
              <div v-for="d in cfFlatDeptTree" :key="d.deptId"
              style="display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:8px;cursor:pointer;margin-bottom:1px;transition:all .12s;"
              :style="selectedDeptId===d.deptId?'background:#e8587a;box-shadow:0 2px 6px rgba(232,88,122,0.2);':''"
              @click="handleSelectAction('deptTree-select', d.deptId)">
                <span style="flex-shrink:0;font-weight:800;"
                :style="{ marginLeft:((d._depth-1)*13)+'px', fontSize:d._depth===1?'10px':'8px',
                color:selectedDeptId===d.deptId?'#fff':['#2563eb','#52c41a','#f59e0b'][Math.min(d._depth-1,2)] }">
                  {{ ['\u25CF','\u25E6','\xB7'][Math.min(d._depth-1,2)] }}
                </span>
                <span style="font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                :style="{ fontWeight:d._depth===1?'600':'400', color:selectedDeptId===d.deptId?'#fff':'#374151' }">
                  {{ d.deptNm }}
                </span>
              </div>
            </div>
          </template>
          <!-- \uD68C\uC6D0 \uD0ED: \uB4F1\uAE09 \uD544\uD130 -->
          <template v-else>
            <div style="padding:10px 10px 8px;border-bottom:1px solid #ebebeb;">
              <div style="font-size:10px;font-weight:700;color:#9ca3af;letter-spacing:.07em;text-transform:uppercase;">
                \uD68C\uC6D0 \uB4F1\uAE09
              </div>
            </div>
            <div style="flex:1;overflow-y:auto;padding:6px 6px;">
              <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;cursor:pointer;margin-bottom:2px;transition:all .12s;"
              :style="selectedGrade===null?'background:#e8587a;box-shadow:0 2px 8px rgba(232,88,122,0.25);':''"
              @click="handleSelectAction('grade-select', null)">
                <span style="font-size:8px;font-weight:900;flex-shrink:0;" :style="{ color: selectedGrade===null?'#fff':'#e8587a' }">
                  \u25CF
                </span>
                <span style="font-size:13px;font-weight:700;" :style="{ color: selectedGrade===null?'#fff':'#374151' }">
                  \uC804\uCCB4
                </span>
              </div>
              <div v-for="g in MEMBER_GRADES" :key="g"
              style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;cursor:pointer;margin-bottom:1px;transition:all .12s;"
              :style="selectedGrade===g?'background:#e8587a;box-shadow:0 2px 6px rgba(232,88,122,0.2);':''"
              @click="handleSelectAction('grade-select', g)">
                <span style="width:8px;height:8px;border-radius:50%;flex-shrink:0;"
                :style="{ background: selectedGrade===g?'#fff':fnGradeBadgeColor(g) }">
                </span>
                <span style="font-size:13px;font-weight:600;" :style="{ color: selectedGrade===g?'#fff':'#374151' }">
                  {{ g }}
                </span>
              </div>
            </div>
          </template>
        </div>
        <!-- \uC6B0: \uC0AC\uC6A9\uC790 \uBAA9\uB85D -->
        <div style="flex:1;display:flex;flex-direction:column;min-width:0;overflow:hidden;background:#fff;">
          <div style="padding:10px 14px 8px;border-bottom:1px solid #f0f0f0;flex-shrink:0;">
            <div style="position:relative;">
              <span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:12px;color:#bbb;">
                \u{1F50D}
              </span>
              <input v-model="searchParam.searchValue" :placeholder="searchParam.type==='member'?'\uC774\uB984 / \uC774\uBA54\uC77C / ID \uAC80\uC0C9':'\uC774\uB984 / \uC774\uBA54\uC77C / ID \uAC80\uC0C9'"
              style="width:100%;border:1px solid #e5e7eb;border-radius:7px;padding:6px 10px 6px 28px;font-size:12px;outline:none;box-sizing:border-box;" />
            </div>
          </div>
          <div style="display:flex;align-items:center;padding:7px 14px;border-bottom:1px solid #f0f0f0;flex-shrink:0;background:#fafafa;">
            <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:12px;font-weight:600;color:#374151;user-select:none;">
              <input type="checkbox" :checked="cfAllChecked" @change="handleBtnAction('list-toggle-all')" style="width:14px;height:14px;" />
              \uC804\uCCB4\uC120\uD0DD
            </label>
            <span style="margin-left:auto;font-size:12px;color:#9ca3af;">
              \uCD1D
              <b style="color:#374151;">
                {{ cfList.length }}
              </b>
              \uBA85
            </span>
          </div>
          <div style="flex:1;overflow-y:auto;">
            <div v-if="cfList.length===0" style="text-align:center;color:#bbb;padding:52px 0;font-size:13px;">
              <div style="font-size:32px;margin-bottom:8px;">
                \u{1F50D}
              </div>
              \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
            </div>
            <div v-for="item in cfList" :key="getId(item)"
            style="display:flex;align-items:center;gap:10px;padding:9px 14px;border-bottom:1px solid #f5f5f5;cursor:pointer;transition:background .1s;"
            :style="fnIsSelected(item)?'background:#f0fff4;':''"
            @click="handleSelectAction('list-toggle', item)">
              <input type="checkbox" :checked="fnIsSelected(item)" @click.stop="handleSelectAction('list-toggle', item)"
              style="width:15px;height:15px;flex-shrink:0;accent-color:#52c41a;cursor:pointer;" />
              <div style="width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:800;transition:all .1s;"
              :style="fnIsSelected(item)?'background:#52c41a;color:#fff;':'background:#f3f4f6;color:#6b7280;'">
                {{ fnDisplayNm(item).charAt(0) || '\xB7' }}
              </div>
              <div style="flex:1;min-width:0;">
                <div style="font-size:13px;font-weight:600;color:#1a1a2e;display:flex;align-items:baseline;gap:5px;">
                  {{ fnDisplayNm(item) }}
                  <span style="font-size:11px;color:#9ca3af;font-weight:400;">
                    {{ fnDisplayLogin(item) }}
                  </span>
                </div>
                <div style="font-size:11px;color:#b0b7c3;margin-top:2px;">
                  {{ fnDisplaySub(item) }}
                </div>
              </div>
              <span v-if="fnDisplayBadge(item)" style="font-size:10px;padding:2px 8px;border-radius:20px;font-weight:700;flex-shrink:0;"
              :style="fnBadgeStyle(item)">
                {{ fnDisplayBadge(item) }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- \u2500\u2500 \uD478\uD130 \u2500\u2500 -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 20px;border-top:1px solid #f0f0f0;flex-shrink:0;background:#fff;">
        <span style="font-size:12px;" :style="selected.length?'color:#52c41a;font-weight:600;':'color:#bbb;'">
          {{ selected.length ? selected.length+'\uBA85\uC774 \uC120\uD0DD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.' : '\uBAA9\uB85D\uC5D0\uC11C \uC218\uC2E0\uC790\uB97C \uC120\uD0DD\uD558\uC138\uC694.' }}
        </span>
        <div style="display:flex;gap:8px;">
          <button style="padding:8px 22px;border-radius:8px;border:1px solid #e5e7eb;background:#fff;color:#6b7280;font-size:13px;font-weight:600;cursor:pointer;"
          @click="handleBtnAction('modal-close')">
            \uCDE8\uC18C
          </button>
          <button :disabled="!selected.length"
          style="padding:8px 22px;border-radius:8px;border:none;font-size:13px;font-weight:700;cursor:pointer;transition:all .15s;"
          :style="selected.length?'background:#52c41a;color:#fff;box-shadow:0 2px 8px rgba(82,196,26,0.35);':'background:#f3f4f6;color:#d1d5db;cursor:not-allowed;'"
          @click="handleBtnAction('modal-send')">
            \u{1F4E8} \uBC1C\uC1A1{{ selected.length?' ('+selected.length+'\uBA85)':'' }}
          </button>
        </div>
      </div>
    </div>
  </bo-modal>
`},window.DispPreviewModal={name:"DispPreviewModal",inheritAttrs:!1,props:{show:{type:Boolean,default:!1,reloadTrigger:{type:Number,default:0}},mode:{type:String,default:"single"},tabLabel:{type:String,default:"\uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30"},area:{type:String,default:""},widgets:{type:Array,default:()=>[]},widget:{type:Object,default:()=>({})},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close"],setup(l,{emit:b}){const{computed:m}=Vue,B=m(()=>l.widgets.filter(s=>s.area===l.area&&s.status==="\uD65C\uC131").sort((s,a)=>(s.sortOrder||0)-(a.sortOrder||0))),u=m(()=>({...l.widget,status:"\uD65C\uC131"})),_=m(()=>boConsts.WIDGET_LABEL[l.widget&&l.widget.widgetType]||l.widget&&l.widget.widgetType||"");return{cfAreaWidgets:B,cfPreviewWidget:u,cfWidgetLabel:_,handleBtnAction:(s,a={})=>{if(s==="modal-close"){b("close"),l.onCallback&&l.onCallback(l.modalName,null,null);return}else console.warn("[handleBtnAction] unknown cmd:",s)},handleSelectAction:(s,a={})=>{console.warn("[handleSelectAction] unknown cmd:",s)}}},template:`
<bo-modal :show="show" max-width="720px" max-height="88vh" box-pad="0" body-pad="0" :z-index="500" @close="handleBtnAction('modal-close')">
  <div style="background:#fff;border-radius:12px;height:100%;display:flex;flex-direction:column;overflow:hidden;">
    <!-- \uD5E4\uB354 -->
    <div style="padding:14px 18px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;background:#fafafa;">
      <div>
        <span style="font-size:14px;font-weight:700;color:#333;">
          \u{1F441} \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30
        </span>
        <span style="margin-left:8px;font-size:12px;color:#e8587a;font-weight:600;">
          {{ tabLabel }}
        </span>
        <span v-if="mode==='single' ? (cfWidgetLabel) : false" style="margin-left:6px;font-size:11px;color:#aaa;">
        ({{ cfWidgetLabel }})
      </span>
      <span v-if="mode==='all' ? (area) : false" style="margin-left:6px;font-size:11px;color:#aaa;">
      \uC601\uC5ED: {{ area }}
    </span>
  </div>
  <button @click="handleBtnAction('modal-close')"
        style="background:none;border:none;cursor:pointer;font-size:18px;color:#aaa;line-height:1;padding:2px 6px;">
    \u2715
  </button>
</div>
<!-- \uCF58\uD150\uCE20 -->
<div style="flex:1;overflow-y:auto;padding:20px;">
  <!-- mode=all: \uD574\uB2F9 area \uC804\uCCB4 \uC704\uC82F -->
  <template v-if="mode==='all'">
    <div v-if="cfAreaWidgets.length===0"
          style="text-align:center;color:#bbb;padding:40px 0;font-size:13px;">
      <div style="font-size:32px;margin-bottom:8px;">
        \u{1F4ED}
      </div>
      [{{ area }}] \uC601\uC5ED\uC5D0 \uD65C\uC131 \uC704\uC82F\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
    <div v-else style="display:flex;flex-direction:column;gap:12px;">
      <div v-for="w in cfAreaWidgets" :key="w.dispId">
        <div style="font-size:10px;color:#bbb;margin-bottom:4px;font-family:monospace;">
          #{{ w.dispId }} {{ w.name }} \xB7 \uC21C\uC11C{{ w.sortOrder }}
        </div>
        <disp-x04-widget
              :params="{ isLoggedIn: false, userGrade: '' }"
              :disp-dataset="{ displays: [], codes: [] }"
              :disp-opt="{ showBadges: true }"
              :widget-item="w"
              />
      </div>
    </div>
  </template>
  <!-- mode=single: \uD604\uC7AC form \uB2E8\uC77C \uC704\uC82F -->
  <template v-else>
    <div style="font-size:10px;color:#bbb;margin-bottom:8px;font-family:monospace;">
      \uD604\uC7AC \uC785\uB825\uAC12 \uAE30\uC900 \uC2E4\uC2DC\uAC04 \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30
    </div>
    <!-- widgetType \uC5C6\uC73C\uBA74 DispWidget \uB80C\uB354 \uAE08\uC9C0 (widgetType.startsWith \uC624\uB958 \uBC29\uC9C0) -->
    <div v-if="cfPreviewWidget.widgetType"
          style="border:1px dashed #e0e0e0;border-radius:8px;padding:16px;background:#fafbff;">
      <disp-x04-widget
            :params="{ isLoggedIn: false, userGrade: '' }"
            :disp-dataset="{ displays: [], codes: [] }"
            :disp-opt="{ showBadges: true }"
            :widget-item="cfPreviewWidget"
            />
    </div>
    <div v-else
          style="text-align:center;color:#bbb;padding:40px 0;font-size:13px;">
      <div style="font-size:28px;margin-bottom:8px;">
        \u{1F3A8}
      </div>
      \uD589(1~5\uD589)\uC5D0\uC11C \uC704\uC82F \uC720\uD615\uC744 \uC120\uD0DD\uD558\uBA74
      <br>
      \uC704\uC82F\uBBF8\uB9AC\uBCF4\uAE30\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
    </div>
  </template>
</div>
<!-- \uD478\uD130 -->
<div style="padding:10px 18px;border-top:1px solid #f0f0f0;text-align:right;flex-shrink:0;background:#fafafa;">
  <button class="btn btn_close" @click="handleBtnAction('modal-close')">
    \uB2EB\uAE30
  </button>
</div>
</div>
</bo-modal>
`},window.RowPickModal={name:"RowPickModal",inheritAttrs:!1,props:{title:{type:String,default:"\uC804\uC2DC\uD56D\uBAA9 \uBCF5\uC0AC"},reloadTrigger:{type:Number,default:0},displays:{type:Array,default:()=>[]},areas:{type:Array,default:()=>[]},excludePanelId:{type:Number,default:null},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close","pick-multi"],setup(l,{emit:b}){const{ref:m,reactive:B,computed:u}=Vue,_=m(""),S=m(""),f=m(""),s=B([]),a=B({page:1,size:5}),C=[2,3,4,5,10,20,50,100],A=m(""),G=B(new Set(["__root__"])),F=i=>{G.has(i)?G.delete(i):G.add(i)},v=i=>G.has(i),N=i=>{A.value=A.value===i?"":i,a.page=1},H=i=>{const y=l.areas.find(T=>T.codeValue===i);return y?y.codeLabel:i},U=u(()=>{const i=[];return(l.displays||[]).forEach(y=>{l.excludePanelId&&y.dispId===l.excludePanelId||(y.rows||[]).forEach((T,V)=>{i.push({__rowId:y.dispId+"_"+V,__panelId:y.dispId,__panelName:y.name,__area:y.area,__status:y.status,row:T,sortIdx:V})})}),i}),J=u(()=>U.value.filter(i=>{const y=S.value.trim().toLowerCase();if(y){const T=_.value||"widgetNm,panelNm,widgetType",V=[];if(T.includes("widgetNm")&&V.push((i.row.widgetNm||"").toLowerCase().includes(y)),T.includes("panelNm")&&V.push((i.__panelName||"").toLowerCase().includes(y)),T.includes("widgetType")&&V.push((i.row.widgetType||"").toLowerCase().includes(y)),!V.some(Boolean))return!1}return!(f.value&&i.__status!==f.value||A.value&&(i.__area||"").split("_")[0]!==A.value)})),Q=()=>{const i=J.value.length;a.pageTotalCount=i,a.pageTotalPage=Math.max(1,Math.ceil(i/a.size)),a.pageList=J.value.slice((a.page-1)*a.size,a.page*a.size);const y=a.page,T=a.pageTotalPage,V=Math.max(1,y-2),P=Math.min(T,V+4);a.pageNums=Array.from({length:P-V+1},(de,K)=>V+K)};Vue.watch(J,()=>{a.page=1,Q()},{immediate:!0});const q=u(()=>{const i={};return U.value.forEach(y=>{const T=(y.__area||"(\uBBF8\uB4F1\uB85D)").split("_")[0];i[T]=(i[T]||0)+1}),Object.keys(i).sort().map(y=>({label:y,count:i[y]}))}),o=B(new Set),L=i=>o.has(i),ee=i=>{o.has(i)?o.delete(i):o.add(i)},E=u(()=>(a.pageList||[]).length>0&&(a.pageList||[]).every(i=>o.has(i.__rowId))),Z=()=>{E.value?(a.pageList||[]).forEach(i=>o.delete(i.__rowId)):(a.pageList||[]).forEach(i=>o.add(i.__rowId))},te=()=>{const i=U.value.filter(y=>o.has(y.__rowId));i.length&&(b("pick-multi",i.map(y=>({...y.row}))),l.onCallback&&l.onCallback(l.modalName,null,i.map(y=>({...y.row}))),o.clear())},oe=i=>{b("pick-multi",[{...i.row}]),l.onCallback&&l.onCallback(l.modalName,null,[{...i.row}])},Y=i=>i==="\uD65C\uC131"?"badge-green":"badge-gray",ie=i=>boConsts.WIDGET_LABEL[i]||i||"-";return Vue.onMounted(()=>{s.splice(0,s.length,{codeValue:"\uD65C\uC131",codeLabel:"\uD65C\uC131"},{codeValue:"\uBE44\uD65C\uC131",codeLabel:"\uBE44\uD65C\uC131"})}),{searchType:_,searchValue:S,searchStatus:f,activeStatuses:s,pager:a,PAGE_SIZES:C,selectedTreeKey:A,isTreeOpen:v,cfTree:q,statusCls:Y,areaNm:H,wLabel:ie,checked:o,isChecked:L,cfAllChecked:E,handleBtnAction:(i,y={})=>{if(i==="modal-close"){b("close"),l.onCallback&&l.onCallback(l.modalName,null,null);return}else{if(i==="modal-pick-multi")return te();if(i==="list-toggle-all")return Z();if(i==="pager-set"){a.page=y;return}else{if(i==="pager-size")return a.size=y,a.page=1,Q();console.warn("[handleBtnAction] unknown cmd:",i)}}},handleSelectAction:(i,y={})=>{if(i==="tree-toggle")return F(y);if(i==="tree-select")return N(y);if(i==="list-toggle")return ee(y);if(i==="list-pick")return oe(y);console.warn("[handleSelectAction] unknown cmd:",i)}}},template:`
<bo-modal :show="true" width="1100px" max-width="98vw" max-height="92vh"
  box-pad="0" body-pad="0" :z-index="9999" @close="handleBtnAction('modal-close')">
  <div style="background:#fafafa;border-radius:14px;display:flex;flex-direction:column;height:100%;overflow:hidden;">
    <div style="background:linear-gradient(135deg,#1565c0,#42a5f5);color:#fff;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:14px;font-weight:700;">
        \u{1F517} {{ title }}
      </span>
      <button @click="handleBtnAction('modal-close')" style="background:none;border:none;color:#fff;font-size:22px;cursor:pointer;line-height:1;padding:0;opacity:.85;">
        \xD7
      </button>
    </div>
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
      <bo-multi-check-select
        v-model="searchType"
        :options="[
        { value: 'widgetNm', label: '\uC704\uC82F\uBA85' },
        { value: 'panelNm',  label: '\uD328\uB110\uBA85' },
        { value: 'widgetType',     label: '\uC720\uD615' },
        ]"
        placeholder="\uAC80\uC0C9\uB300\uC0C1 \uC804\uCCB4"
        all-label="\uC804\uCCB4 \uC120\uD0DD"
        min-width="160px" />
      <input v-model="searchValue" placeholder="\uAC80\uC0C9\uC5B4 \uC785\uB825" style="flex:1;min-width:200px;padding:6px 10px;border:1px solid #d0d0d0;border-radius:6px;font-size:12px;" />
      <select v-model="searchStatus" style="padding:6px 10px;border:1px solid #d0d0d0;border-radius:6px;font-size:12px;">
        <option value="">\uD328\uB110\uC0C1\uD0DC \uC804\uCCB4</option>
        <option v-for="c in activeStatuses" :key="c.codeValue" :value="c.codeValue">{{ c.codeLabel }}</option>
      </select>
    </div>
    <div style="flex:1;overflow:hidden;display:flex;gap:12px;padding:12px;background:#f4f5f8;">
      <div style="width:220px;flex-shrink:0;background:#fff;border-radius:8px;padding:12px;overflow-y:auto;">
        <div style="font-size:12px;font-weight:700;color:#555;margin-bottom:8px;">
          \uC0AC\uC6A9\uC704\uCE58 \uD2B8\uB9AC
        </div>
        <div @click="handleSelectAction('tree-toggle', '__root__'); handleSelectAction('tree-select', '')"
          :style="{ display:'flex',alignItems:'center',justifyContent:'space-between',padding:'6px 8px',borderRadius:'6px',cursor:'pointer',fontSize:'12px',marginBottom:'4px',background: selectedTreeKey==='' ? '#e3f2fd' : '#f8f9fb',color: selectedTreeKey==='' ? '#1565c0' : '#222',fontWeight:700,border:'1px solid '+(selectedTreeKey==='' ? '#90caf9' : '#e4e7ec') }">
          <span>
            {{ isTreeOpen('__root__') ? '\u25BC' : '\u25B6' }} \u{1F4C2} \uC804\uCCB4
          </span>
          <span style="font-size:10px;background:#fff;color:#555;border:1px solid #ddd;border-radius:10px;padding:1px 7px;">
            {{ pager.pageTotalCount }}
          </span>
        </div>
        <div v-if="isTreeOpen('__root__')" style="padding-left:12px;">
          <div v-for="node in cfTree" :key="node.label"
            @click="handleSelectAction('tree-select', node.label)"
            :style="{ display:'flex',alignItems:'center',justifyContent:'space-between',padding:'5px 8px',borderRadius:'6px',cursor:'pointer',fontSize:'12px',marginBottom:'2px',background: selectedTreeKey===node.label ? '#e3f2fd' : 'transparent',color: selectedTreeKey===node.label ? '#1565c0' : '#333',fontWeight: selectedTreeKey===node.label ? 700 : 500 }">
            <span>
              \u25B8 {{ node.label }}
            </span>
            <span style="font-size:10px;background:#f0f2f5;color:#666;border-radius:10px;padding:1px 7px;">
              {{ node.count }}
            </span>
          </div>
        </div>
      </div>
      <div style="flex:1;background:#fff;border-radius:8px;overflow:hidden;display:flex;flex-direction:column;">
        <div style="padding:10px 14px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#555;display:flex;justify-content:space-between;align-items:center;">
          <span>
            \uCD1D
            <b>
              {{ pager.pageTotalCount }}
            </b>
            \uAC74
            <span v-if="checked.size" style="color:#1565c0;margin-left:8px;">
              \uC120\uD0DD {{ checked.size }}\uAC1C
            </span>
          </span>
          <button v-if="checked.size" @click="handleBtnAction('modal-pick-multi')" class="btn btn-primary btn-sm" style="font-size:11px;">
            \uC120\uD0DD\uD55C {{ checked.size }}\uAC1C \uC77C\uAD04 \uBCF5\uC0AC
          </button>
        </div>
        <div style="flex:1;overflow-y:auto;">
          <table class="bo-table" style="margin:0;">
            <thead>
              <tr>
                <th style="width:36px;text-align:center;">
                  <input type="checkbox" :checked="cfAllChecked" @change="handleBtnAction('list-toggle-all')" />
                </th>
                <th style="width:110px;">
                  \uC704\uC82F \uC720\uD615
                </th>
                <th>
                  \uC804\uC2DC\uD56D\uBAA9 \uC815\uBCF4
                </th>
                <th style="width:160px;text-align:left;">
                  \uC0AC\uC6A9\uC704\uCE58\uACBD\uB85C
                </th>
                <th style="width:90px;text-align:right;">
                  \uC120\uD0DD
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!(pager.pageList||[]).length">
                <td colspan="5" style="text-align:center;padding:30px;color:#bbb;font-size:12px;">
                  \uD45C\uC2DC\uD560 \uC804\uC2DC\uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
                </td>
              </tr>
              <tr v-for="o in pager.pageList" :key="o.__rowId"
                :style="isChecked(o.__rowId)?'background:#eef6fd;':''">
                <td style="text-align:center;vertical-align:top;padding-top:14px;">
                  <input type="checkbox" :checked="isChecked(o.__rowId)" @change="handleSelectAction('list-toggle', o.__rowId)" />
                </td>
                <td style="vertical-align:top;padding-top:12px;">
                  <span style="background:#f5f5f5;border:1px solid #e8e8e8;border-radius:6px;padding:1px 7px;font-size:11px;color:#555;">
                    {{ wLabel(o.row.widgetType) }}
                  </span>
                </td>
                <td style="padding:10px 12px;">
                  <div style="margin-bottom:4px;">
                    <span style="font-size:14px;font-weight:700;color:#222;">
                      {{ o.row.widgetNm || ('\uC704\uC82F '+(o.sortIdx+1)) }}
                    </span>
                    <span class="badge" :class="statusCls(o.__status)" style="font-size:11px;margin-left:8px;">
                      {{ o.__status }}
                    </span>
                  </div>
                  <div style="font-size:11px;color:#555;line-height:1.5;">
                    <span>
                      <b style="color:#888;">
                        \uC18C\uC18D \uD328\uB110:
                      </b>
                      {{ o.__panelName }} (#{{ o.__panelId }})
                    </span>
                    <span v-if="o.row.clickAction ? (o.row.clickAction !== 'none') : false" style="margin-left:10px;">
                    <b style="color:#888;">
                      \uD074\uB9AD:
                    </b>
                    {{ o.row.clickAction }}
                  </span>
                </div>
              </td>
              <td style="vertical-align:top;padding-top:12px;">
                <span style="background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:8px;padding:1px 7px;font-size:11px;">
                  {{ (o.__area||'').split('_')[0] || '-' }} &gt; {{ areaNm(o.__area) }}
                </span>
              </td>
              <td style="vertical-align:top;padding-top:10px;text-align:right;">
                <button @click="handleSelectAction('list-pick', o)" class="btn btn-primary btn-sm" style="font-size:11px;">
                  \uBCF5\uC0AC
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pagination" style="padding:10px 16px;border-top:1px solid #f0f0f0;margin-top:0;">
        <div>
        </div>
        <div class="pager">
          <button :disabled="pager.page===1" @click="handleBtnAction('pager-set', 1)">
            \xAB
          </button>
          <button :disabled="pager.page===1" @click="handleBtnAction('pager-set', pager.page-1)">
            \u2039
          </button>
          <button v-for="n in pager.pageNums" :key="n" :class="{active:pager.page===n}" @click="handleBtnAction('pager-set', n)">
            {{ n }}
          </button>
          <button :disabled="pager.page===pager.pageTotalPage" @click="handleBtnAction('pager-set', pager.page+1)">
            \u203A
          </button>
          <button :disabled="pager.page===pager.pageTotalPage" @click="handleBtnAction('pager-set', pager.pageTotalPage)">
            \xBB
          </button>
        </div>
        <div class="pager-right">
          <select class="size-select" :value="pager.size" @change="handleBtnAction('pager-size', Number($event.target.value))">
            <option v-for="s in PAGE_SIZES" :key="s" :value="s">{{ s }}\uAC1C</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
</bo-modal>
`},window.BoRefModal={name:"BoRefModal",inheritAttrs:!1,props:{state:{type:Object,default:()=>({})},reloadTrigger:{type:Number,default:0},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close"],setup(l,{emit:b}){const{reactive:m,watch:B}=Vue,u=()=>{b("close"),l.onCallback&&l.onCallback(l.modalName,null,null)},_=l.state,S=m({}),f=m({}),s=m({}),a=m({}),C=m({}),A={member:o=>boApiSvc.mbMember.getById(o,"\uD68C\uC6D0\uC0C1\uC138","\uC0C1\uC138\uC870\uD68C"),product:o=>boApiSvc.pdProd.getById(o,"\uC0C1\uD488\uC0C1\uC138","\uC0C1\uC138\uC870\uD68C"),order:o=>boApiSvc.odOrder.getById(o,"\uC8FC\uBB38\uC0C1\uC138","\uC0C1\uC138\uC870\uD68C"),claim:o=>boApiSvc.odClaim.getById(o,"\uD074\uB808\uC784\uC0C1\uC138","\uC0C1\uC138\uC870\uD68C"),coupon:o=>boApiSvc.pmCoupon.getById(o,"\uCFE0\uD3F0\uC0C1\uC138","\uC0C1\uC138\uC870\uD68C")},G={member:S,product:f,order:s,claim:a,coupon:C};B(()=>[_.type,_.id],async([o,L])=>{var ee;if(Object.values(G).forEach(E=>{Object.keys(E).forEach(Z=>delete E[Z])}),!(!o||!L||!A[o]))try{const E=await A[o](L);(ee=E.data)!=null&&ee.data&&Object.assign(G[o],E.data.data)}catch{}},{immediate:!0});const F=o=>({\uD65C\uC131:"badge-green",\uD310\uB9E4\uC911:"badge-green",\uC9C4\uD589\uC911:"badge-blue",\uC644\uB8CC:"badge-gray",\uC885\uB8CC:"badge-gray",\uBC30\uC1A1\uC644\uB8CC:"badge-gray",\uCDE8\uC18C\uB428:"badge-red",\uC815\uC9C0:"badge-red",\uD488\uC808:"badge-red",\uBC30\uC1A1\uC911:"badge-orange",\uBC30\uC1A1\uC900\uBE44\uC911:"badge-orange",\uACB0\uC81C\uC644\uB8CC:"badge-orange",\uB9CC\uB8CC:"badge-red",\uC608\uC815:"badge-purple"})[o]||"badge-gray";return{member:S,product:f,order:s,claim:a,coupon:C,badgeCls:F,s:_,memberFormColumns:[{key:"memberId",label:"\uD68C\uC6D0ID",type:"readonly"},{key:"memberNm",label:"\uC774\uB984",type:"readonly"},{key:"loginId",label:"\uC774\uBA54\uC77C(ID)",type:"readonly"},{key:"memberPhone",label:"\uC5F0\uB77D\uCC98",type:"readonly",fmt:o=>o||"-"},{key:"gradeCd",label:"\uB4F1\uAE09",type:"readonly",html:!0,fmt:o=>o?`<span class="badge badge-purple">${o}</span>`:"-"},{key:"memberStatusCd",label:"\uC0C1\uD0DC",type:"readonly",html:!0,fmt:o=>o?`<span class="badge ${F(o)}">${o}</span>`:"-"},{key:"joinDate",label:"\uAC00\uC785\uC77C",type:"readonly",fmt:o=>o?String(o).slice(0,10):"-"},{key:"lastLogin",label:"\uCD5C\uADFC \uB85C\uADF8\uC778",type:"readonly",fmt:o=>o?String(o).slice(0,16):"-"},{key:"orderCount",label:"\uC8FC\uBB38\uC218",type:"readonly",fmt:o=>o!=null?o+"\uAC74":"-"},{key:"totalPurchaseAmt",label:"\uCD1D \uAD6C\uB9E4\uC561",type:"readonly",fmt:o=>o!=null?o.toLocaleString()+"\uC6D0":"-"}],productFormColumns:[{key:"productId",label:"\uC0C1\uD488ID",type:"readonly"},{key:"prodNm",label:"\uC0C1\uD488\uBA85",type:"readonly"},{key:"category",label:"\uCE74\uD14C\uACE0\uB9AC",type:"readonly"},{key:"price",label:"\uAC00\uACA9",type:"readonly",fmt:o=>o!=null?o.toLocaleString()+"\uC6D0":"-"},{key:"stock",label:"\uC7AC\uACE0",type:"readonly",fmt:o=>o!=null?o+"\uAC1C":"-"},{key:"brand",label:"\uBE0C\uB79C\uB4DC",type:"readonly"},{key:"statusCd",label:"\uC0C1\uD0DC",type:"readonly",html:!0,fmt:o=>o?`<span class="badge ${F(o)}">${o}</span>`:"-"},{key:"regDate",label:"\uB4F1\uB85D\uC77C",type:"readonly"}],orderFormColumns:[{key:"orderId",label:"\uC8FC\uBB38ID",type:"readonly"},{key:"_member",label:"\uD68C\uC6D0",type:"readonly",fmt:(o,L)=>`${L.userNm||"-"} (ID: ${L.userId||"-"})`},{key:"orderDate",label:"\uC8FC\uBB38\uC77C\uC2DC",type:"readonly"},{key:"prodNm",label:"\uC0C1\uD488",type:"readonly"},{key:"totalPrice",label:"\uACB0\uC81C\uAE08\uC561",type:"readonly",fmt:o=>o!=null?o.toLocaleString()+"\uC6D0":"-"},{key:"payMethodCd",label:"\uACB0\uC81C\uC218\uB2E8",type:"readonly"},{key:"statusCd",label:"\uC0C1\uD0DC",type:"readonly",html:!0,fmt:o=>o?`<span class="badge ${F(o)}">${o}</span>`:"-"}],claimFormColumns:[{key:"claimId",label:"\uD074\uB808\uC784ID",type:"readonly"},{key:"userNm",label:"\uD68C\uC6D0",type:"readonly"},{key:"orderId",label:"\uC8FC\uBB38ID",type:"readonly"},{key:"type",label:"\uC720\uD615",type:"readonly",html:!0,fmt:o=>o?`<span class="badge badge-orange">${o}</span>`:"-"},{key:"statusCd",label:"\uC0C1\uD0DC",type:"readonly",html:!0,fmt:o=>o?`<span class="badge ${F(o)}">${o}</span>`:"-"},{key:"prodNm",label:"\uC0C1\uD488\uBA85",type:"readonly"},{key:"reasonCd",label:"\uC0AC\uC720",type:"readonly"},{key:"requestDate",label:"\uC2E0\uCCAD\uC77C",type:"readonly"},{key:"refundAmount",label:"\uD658\uBD88\uAE08\uC561",type:"readonly",visible:o=>!!o.refundAmount,fmt:o=>o!=null?o.toLocaleString()+"\uC6D0":"-"}],couponFormColumns:[{key:"couponId",label:"\uCFE0\uD3F0ID",type:"readonly"},{key:"name",label:"\uCFE0\uD3F0\uBA85",type:"readonly"},{key:"code",label:"\uCF54\uB4DC",type:"readonly"},{key:"_discount",label:"\uD560\uC778",type:"readonly",fmt:(o,L)=>L.discountTypeCd==="rate"?L.discountValue+"%":L.discountTypeCd==="shipping"?"\uBB34\uB8CC\uBC30\uC1A1":L.discountValue!=null?L.discountValue.toLocaleString()+"\uC6D0":"-"},{key:"_minOrder",label:"\uCD5C\uC18C\uC8FC\uBB38",type:"readonly",fmt:(o,L)=>L.minOrder?L.minOrder.toLocaleString()+"\uC6D0 \uC774\uC0C1":"\uC81C\uD55C\uC5C6\uC74C"},{key:"issueTo",label:"\uBC1C\uAE09\uB300\uC0C1",type:"readonly"},{key:"expiry",label:"\uB9CC\uB8CC\uC77C",type:"readonly"},{key:"statusCd",label:"\uC0C1\uD0DC",type:"readonly",html:!0,fmt:o=>o?`<span class="badge ${F(o)}">${o}</span>`:"-"}],handleBtnAction:(o,L={})=>{if(o==="modal-close")return u();console.warn("[handleBtnAction] unknown cmd:",o)},handleSelectAction:(o,L={})=>{console.warn("[handleSelectAction] unknown cmd:",o)}}},template:`
<bo-modal :show="true" @close="handleBtnAction('modal-close')">
  <div class="modal-header" style="margin:-20px -20px 14px -20px;">
    <span class="modal-title">
      {{ s.type==='member'?'\uD68C\uC6D0 \uC0C1\uC138':s.type==='product'?'\uC0C1\uD488 \uC0C1\uC138':s.type==='order'?'\uC8FC\uBB38 \uC0C1\uC138':s.type==='claim'?'\uD074\uB808\uC784 \uC0C1\uC138':'\uCFE0\uD3F0 \uC0C1\uC138' }}
    </span>
    <span class="modal-close" @click="handleBtnAction('modal-close')">
      \xD7
    </span>
  </div>
  <!-- \uD68C\uC6D0 -->
  <template v-if="s.type==='member'">
    <bo-form-area plain-readonly v-if="member.userId" :columns="memberFormColumns" :form="member" :cols="2" readonly label-left :show-actions="false" label-width="100px" />
    <div v-else style="color:#999;text-align:center;padding:20px;">
      \uD68C\uC6D0 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
  </template>
  <!-- \uC0C1\uD488 -->
  <template v-else-if="s.type==='product'">
    <bo-form-area plain-readonly v-if="product.productId" :columns="productFormColumns" :form="product" :cols="2" readonly label-left :show-actions="false" label-width="100px" />
    <div v-else style="color:#999;text-align:center;padding:20px;">
      \uC0C1\uD488 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
  </template>
  <!-- \uC8FC\uBB38 -->
  <template v-else-if="s.type==='order'">
    <bo-form-area plain-readonly v-if="order.orderId" :columns="orderFormColumns" :form="order" :cols="2" readonly label-left :show-actions="false" label-width="100px" />
    <div v-else style="color:#999;text-align:center;padding:20px;">
      \uC8FC\uBB38 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
  </template>
  <!-- \uD074\uB808\uC784 -->
  <template v-else-if="s.type==='claim'">
    <bo-form-area plain-readonly v-if="claim.claimId" :columns="claimFormColumns" :form="claim" :cols="2" readonly label-left :show-actions="false" label-width="100px" />
    <div v-else style="color:#999;text-align:center;padding:20px;">
      \uD074\uB808\uC784 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
  </template>
  <!-- \uCFE0\uD3F0 -->
  <template v-else-if="s.type==='coupon'">
    <bo-form-area plain-readonly v-if="coupon.couponId" :columns="couponFormColumns" :form="coupon" :cols="2" readonly label-left :show-actions="false" label-width="100px" />
    <div v-else style="color:#999;text-align:center;padding:20px;">
      \uCFE0\uD3F0 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
  </template>
  <div style="margin-top:16px;text-align:right;">
    <button class="btn btn_close" @click="handleBtnAction('modal-close')">
      \uB2EB\uAE30
    </button>
  </div>
</bo-modal>
`},window.AuthProfileModal={name:"AuthProfileModal",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},form:{type:Object,required:!0},img:{type:Object,default:()=>({})},uploading:{type:Boolean,default:!1},authUser:{type:Object,default:()=>({})},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["save","img-change","img-remove","close"],setup(l,{emit:b}){return{baseFormColumns:[{key:"name",label:"\uC774\uB984",type:"text",required:!0,placeholder:"\uC774\uB984"},{key:"phone",label:"\uC5F0\uB77D\uCC98",type:"text",placeholder:"010-0000-0000"},{type:"rowBreak"},{key:"email",label:"\uC774\uBA54\uC77C",type:"readonly",colSpan:2},{type:"rowBreak"},{key:"dept",label:"\uBD80\uC11C",type:"text",placeholder:"\uBD80\uC11C\uBA85",colSpan:2}],fnInitial:()=>{var S,f;return(((S=l.authUser)==null?void 0:S.authNm)||((f=l.authUser)==null?void 0:f.name)||"").charAt(0)||"?"},handleBtnAction:(S,f={})=>{if(S==="modal-close"){b("close"),l.onCallback&&l.onCallback(l.modalName,null,null);return}else{if(S==="modal-save")return b("save");if(S==="form-img-change"){b("img-change",f),l.onCallback&&l.onCallback(l.modalName,null,f);return}else if(S==="form-img-remove"){b("img-remove"),l.onCallback&&l.onCallback(l.modalName,null,!0);return}else console.warn("[handleBtnAction] unknown cmd:",S)}},handleSelectAction:(S,f={})=>{console.warn("[handleSelectAction] unknown cmd:",S)}}},template:`
<bo-modal :show="show" title="\u{1F64D} \uD504\uB85C\uD544" width="440px" @close="handleBtnAction('modal-close')">
  <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;padding:14px;background:#fff5f7;border-radius:10px;">
    <!-- \uD504\uB85C\uD544 \uC0AC\uC9C4 -->
    <label style="position:relative;cursor:pointer;flex-shrink:0;" :title="uploading ? '\uC5C5\uB85C\uB4DC \uC911...' : '\uD074\uB9AD\uD558\uC5EC \uC0AC\uC9C4 \uBCC0\uACBD'">
      <img v-if="img.cdnImgUrl"
        :src="img.cdnImgUrl"
        style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:2px solid #e8587a;" />
      <div v-else style="width:64px;height:64px;border-radius:50%;background:#e8587a;color:#fff;font-size:24px;font-weight:700;display:flex;align-items:center;justify-content:center;">
        {{ fnInitial() }}
      </div>
      <div style="position:absolute;bottom:0;right:0;width:20px;height:20px;border-radius:50%;background:#e8587a;color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center;border:2px solid #fff;">
        <span v-if="uploading">
          \u23F3
        </span>
        <span v-else>
          \u{1F4F7}
        </span>
      </div>
      <input type="file" accept="image/*" style="display:none;" :disabled="uploading" @change="handleBtnAction('form-img-change', $event)" />
    </label>
    <div>
      <div style="font-size:15px;font-weight:700;color:#1a1a2e;">
        {{ authUser?.authNm || authUser?.name || '' }}
      </div>
      <div style="font-size:12px;color:#e8587a;font-weight:600;margin-top:3px;">
        {{ authUser?.role || '' }}
      </div>
      <div style="font-size:11px;color:#aaa;margin-top:2px;">
        \uAC00\uC785\uC77C: {{ authUser?.regDate || '' }}
      </div>
      <div v-if="img.cdnImgUrl" style="font-size:11px;color:#bbb;margin-top:2px;">
        <span style="cursor:pointer;color:#e8587a;" @click.prevent="handleBtnAction('form-img-remove')">
          \u2715 \uC0AC\uC9C4 \uC0AD\uC81C
        </span>
      </div>
    </div>
  </div>
  <bo-form-area :columns="baseFormColumns" :form="form" :cols="2" :show-actions="false" />
  <template #footer>
    <button class="btn btn_cancel" @click="handleBtnAction('modal-close')">
      \uCDE8\uC18C
    </button>
    <button class="btn btn_save" @click="handleBtnAction('modal-save')">
      \uC800\uC7A5
    </button>
  </template>
</bo-modal>
`},window.AuthUserPickModal={name:"AuthUserPickModal",inheritAttrs:!1,props:{modal:{type:Object,required:!0},rows:{type:Array,default:()=>[]},total:{type:Number,default:0},totalPage:{type:Number,default:1},loginId:{type:String,default:""},pageSize:{type:Number,default:20},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["search","go-page","pick","close"],setup(l,{emit:b}){const{computed:m}=Vue,B=(s,a={})=>{if(s==="modal-close"){b("close"),l.onCallback&&l.onCallback(l.modalName,null,null);return}else{if(s==="searchParam-search")return b("search");if(s==="pager-set")return b("go-page",a);console.warn("[handleBtnAction] unknown cmd:",s)}},u=(s,a={})=>{if(s==="users-pick"){b("pick",a),l.onCallback&&l.onCallback(l.modalName,null,a);return}else console.warn("[handleSelectAction] unknown cmd:",s)};return{cfPager:m(()=>{const s=l.modal.pageNo,a=l.totalPage,C=Math.max(1,s-2),A=Math.min(a,C+4);return{pageNo:l.modal.pageNo,pageSize:l.pageSize,pageTotalCount:l.total,pageTotalPage:l.totalPage,pageNums:Array.from({length:A-C+1},(G,F)=>C+F)}}),userGridColumns:[{key:"userNm",label:"\uC774\uB984",cellStyle:"font-weight:700;color:#1a1a2e;",fmt:(s,a)=>s||a.label||"-"},{key:"loginId",label:"\uB85C\uADF8\uC778ID",mono:!0,cellStyle:"color:#888;font-size:11px;",fmt:s=>s||"-"},{key:"userEmail",label:"\uC774\uBA54\uC77C",cellStyle:"color:#999;font-size:11px;",fmt:s=>s||"-"},{key:"userPhone",label:"\uC5F0\uB77D\uCC98",cellStyle:"color:#999;font-size:11px;",fmt:s=>s||"-"},{key:"deptNm",label:"\uBD80\uC11C",cellStyle:"color:#777;",fmt:s=>s||"-"},{key:"roleNm",label:"\uAD8C\uD55C",align:"center",badge:s=>s.roleNm?"badge-purple":"badge-gray",fmt:s=>s||"\u2014"},{key:"userStatusCd",label:"\uC0C1\uD0DC",align:"center",badge:s=>s.userStatusCd==="ACTIVE"?"badge-green":"badge-red",fmt:(s,a)=>s==="ACTIVE"?"\uD65C\uC131":a.userStatusCdNm||"\uBE44\uD65C\uC131"},{type:"actions",actions:[{label:"\uC120\uD0DD",style:"background:linear-gradient(135deg,#f9a8c9,#e8587a);color:#fff;border:none;border-radius:6px;padding:3px 10px;font-size:10px;font-weight:700;cursor:pointer;",onClick:s=>u("users-pick",s)}]}],baseSearchColumns:[{key:"searchValue",type:"text",placeholder:"\uC774\uB984 / \uB85C\uADF8\uC778ID / \uC774\uBA54\uC77C \uAC80\uC0C9..."}],handleBtnAction:B,handleSelectAction:u}},template:`
<bo-modal :show="modal.show" width="960px" max-width="96vw" box-pad="0" body-pad="0"
  :z-index="9100" @close="handleBtnAction('modal-close')">
  <div style="display:flex;flex-direction:column;max-height:90vh;">
    <!-- \uBAA8\uB2EC \uD5E4\uB354 -->
    <div style="background:linear-gradient(135deg,#fff0f4,#ffe4ec,#ffd5e1);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ffc8d6;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:18px;">
          \u{1F465}
        </span>
        <div>
          <div style="font-size:14px;font-weight:800;color:#1a1a2e;">
            \uC0AC\uC6A9\uC790 \uC120\uD0DD
          </div>
          <div style="font-size:10px;color:#e8587a;margin-top:1px;">
            \uC120\uD0DD \uC2DC \uB9C8\uC2A4\uD130 \uD328\uC2A4\uC6CC\uB4DC(1111)\uB85C \uC790\uB3D9 \uB85C\uADF8\uC778
          </div>
        </div>
      </div>
      <button @click="handleBtnAction('modal-close')" style="background:none;border:none;cursor:pointer;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;color:#e8587a;" onmouseover="this.style.background='#ffd5e1'" onmouseout="this.style.background='none'">
        \u2715
      </button>
    </div>
    <!-- \uBCF8\uBB38 (\uC2A4\uD06C\uB864 \uC601\uC5ED) -->
    <div style="padding:14px 18px;overflow-y:auto;flex:1;">
      <!-- \uAC80\uC0C9\uBC14 -->
      <bo-search-area :columns="baseSearchColumns" :param="modal" :show-reset="false"
        @search="handleBtnAction('searchParam-search')" />
      <!-- \uAC74\uC218 -->
      <div style="font-size:11px;color:#aaa;margin:8px 0;">
        \uCD1D
        <b style="color:#e8587a;">
          {{ total }}
        </b>
        \uBA85
      </div>
      <!-- \uD14C\uC774\uBE14 + \uD398\uC774\uC800 (BoGrid \uB0B4\uC7A5) -->
      <div style="overflow-x:auto;border-radius:8px;border:1px solid #f0e0e8;">
        <bo-grid :columns="userGridColumns" :rows="modal.loading ? [] : rows" :pager="cfPager" row-key="loginId"
          :empty-text="modal.loading ? '\u23F3 \uC870\uD68C \uC911...' : '\u{1F50D} \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.'"
          row-clickable
          :row-style="row => loginId===(row.loginId||row.userId) ? 'background:#fff0f4;' : ''"
          @row-click="row => handleSelectAction('users-pick', row)" />
        <bo-pager :pager="cfPager" :on-set-page="n => handleBtnAction('pager-set', n)" :on-size-change="() => handleBtnAction('pager-set', 1)" />
      </div>
    </div>
  </div>
</bo-modal>
`},window.AuthPwChangeModal={name:"AuthPwChangeModal",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},form:{type:Object,required:!0},error:{type:String,default:""},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["save","close"],setup(l,{emit:b}){return{basePwFormColumns:[{key:"current",label:"\uD604\uC7AC \uBE44\uBC00\uBC88\uD638",type:"password",required:!0,placeholder:"\uD604\uC7AC \uBE44\uBC00\uBC88\uD638"},{key:"next",label:"\uC0C8 \uBE44\uBC00\uBC88\uD638",type:"password",required:!0,placeholder:"\uC0C8 \uBE44\uBC00\uBC88\uD638 (6\uC790 \uC774\uC0C1)"},{key:"confirm",label:"\uC0C8 \uBE44\uBC00\uBC88\uD638 \uD655\uC778",type:"password",required:!0,placeholder:"\uC0C8 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC785\uB825"}],handleBtnAction:(_,S={})=>{if(_==="modal-close"){b("close"),props.onCallback&&props.onCallback(props.modalName,null,null);return}else{if(_==="modal-save")return b("save");console.warn("[handleBtnAction] unknown cmd:",_)}},handleSelectAction:(_,S={})=>{console.warn("[handleSelectAction] unknown cmd:",_)}}},template:`
<bo-modal :show="show" title="\u{1F511} \uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD" width="380px" @close="handleBtnAction('modal-close')">
  <bo-form-area :columns="basePwFormColumns" :form="form" :cols="1" :show-actions="false" />
  <div v-if="error" class="login-error">
    {{ error }}
  </div>
  <template #footer>
    <button class="btn btn_cancel" @click="handleBtnAction('modal-close')">
      \uCDE8\uC18C
    </button>
    <button class="btn btn-primary" @click="handleBtnAction('modal-save')">
      \uBCC0\uACBD
    </button>
  </template>
</bo-modal>
`},window.AuthLoginModal={name:"AuthLoginModal",inheritAttrs:!1,props:{modal:{type:Object,required:!0},loginForm:{type:Object,required:!0},regForm:{type:Object,required:!0},error:{type:String,default:""},authMethods:{type:Array,default:()=>[]},userRoles:{type:Array,default:()=>[]},mode:{type:String,default:"modal"},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["do-login","do-register","do-social","open-user-pick","close","clear-error"],setup(l,{emit:b}){const m=a=>{l.modal.tab=a,b("clear-error")},B=(a,C={})=>{if(a==="modal-close"){b("close"),l.onCallback&&l.onCallback(l.modalName,null,null);return}else{if(a==="modal-login")return b("do-login");if(a==="modal-register")return b("do-register");if(a==="modal-open-user-pick")return b("open-user-pick");if(a==="modal-social")return b("do-social",C);if(a==="tab-change")return m(C);console.warn("[handleBtnAction] unknown cmd:",a)}},u=(a,C={})=>{console.warn("[handleSelectAction] unknown cmd:",a)},_=[{key:"name",label:"\uC774\uB984",type:"text",required:!0,placeholder:"\uC774\uB984"},{key:"phone",label:"\uC5F0\uB77D\uCC98",type:"text",placeholder:"010-0000-0000"},{type:"rowBreak"},{key:"email",label:"\uC774\uBA54\uC77C",type:"text",required:!0,placeholder:"\uC774\uBA54\uC77C \uC785\uB825",colSpan:2},{type:"rowBreak"},{key:"password",label:"\uBE44\uBC00\uBC88\uD638",type:"password",required:!0,placeholder:"\uBE44\uBC00\uBC88\uD638"},{key:"confirmPw",label:"\uBE44\uBC00\uBC88\uD638 \uD655\uC778",type:"password",required:!0,placeholder:"\uC7AC\uC785\uB825"},{type:"rowBreak"},{key:"role",label:"\uC5ED\uD560",type:"select",colSpan:2,options:()=>(l.userRoles||[]).map(a=>({value:a.codeValue,label:a.codeLabel}))}],S=[{key:"loginId",label:"\uB85C\uADF8\uC778 ID",type:"text",placeholder:"\uB85C\uADF8\uC778 ID \uC785\uB825"},{key:"loginPwd",label:"\uBE44\uBC00\uBC88\uD638",type:"password",placeholder:"\uBE44\uBC00\uBC88\uD638 \uC785\uB825"},{key:"authMethod",label:"\uC778\uC99D\uBC29\uC2DD",type:"slot",name:"authMethod"}],f=Vue.computed(()=>l.mode==="page"),s=Vue.computed(()=>{const a=window.envBoConsts||{},C=(A,G)=>A?A+(G?":"+G:""):"(\uC0C1\uB300\uACBD\uB85C)";return{mode:a.runMode||"local",api:C(a.baseApiHost,a.baseApiPort),cdn:C(a.cdnApiHost,a.cdnApiPort)}});return{baseRegFormColumns:_,baseLoginFormColumns:S,cfIsPage:f,envBadge:s,handleBtnAction:B,handleSelectAction:u}},template:`
<bo-modal :show="cfIsPage ? true : !!modal.show" width="420px" box-pad="0" body-pad="0"
  :overlay-bg="cfIsPage ? '#f3f4f6' : 'rgba(18,24,40,0.55)'"
  :close-on-backdrop="!cfIsPage" @close="handleBtnAction('modal-close')">
  <div class="login-modal-box">
    <div style="text-align:center;font-size:10px;color:#9ca3af;line-height:1.4;margin-bottom:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
      {{ envBadge.mode }} \xB7 api {{ envBadge.api }} \xB7 cdn {{ envBadge.cdn }}
    </div>
    <div class="login-modal-header">
      <div class="login-tabs">
        <span :class="{active: modal.tab==='login'}" @click="handleBtnAction('tab-change', 'login')">
          \uB85C\uADF8\uC778
        </span>
        <span :class="{active: modal.tab==='register'}" @click="handleBtnAction('tab-change', 'register')">
          \uD68C\uC6D0\uAC00\uC785
        </span>
      </div>
      <span v-if="!cfIsPage" class="modal-close" @click="handleBtnAction('modal-close')">
        \u2715
      </span>
    </div>
    <!-- \uB85C\uADF8\uC778 \uD3FC -->
    <div v-if="modal.tab==='login'">
      <bo-form-area :columns="baseLoginFormColumns" :form="loginForm" :cols="1" :show-actions="false">
        <template #authMethod>
          <div class="auth-methods">
            <label v-for="m in authMethods" :key="m"
              class="auth-method-item" :class="{active: loginForm.authMethod===m}">
              <input type="radio" :value="m" v-model="loginForm.authMethod" style="display:none" />
              {{ m }}
            </label>
          </div>
        </template>
      </bo-form-area>
      <div v-if="error" class="login-error">
        {{ error }}
      </div>
      <button class="btn btn-primary" style="width:100%;margin-top:4px;" @click="handleBtnAction('modal-login')">
        \uB85C\uADF8\uC778
      </button>
      <!-- \uC18C\uC15C \uB85C\uADF8\uC778 (\uAD6C\uAE00 / \uCE74\uCE74\uC624 / \uB124\uC774\uBC84) -->
      <div style="display:flex;align-items:center;gap:10px;margin:16px 0 12px;color:#bbb;font-size:0.78rem;">
        <div style="flex:1;height:1px;background:#eee;">
        </div>
        \uC18C\uC15C \uB85C\uADF8\uC778
        <div style="flex:1;height:1px;background:#eee;">
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <button @click="handleBtnAction('modal-social', 'google')"
          style="width:100%;padding:10px;border:1.5px solid #ddd;border-radius:8px;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;font-size:0.85rem;color:#333;font-weight:600;">
          <span style="font-size:1.05rem;">
            \u{1F310}
          </span>
          Google\uB85C \uB85C\uADF8\uC778
        </button>
        <button @click="handleBtnAction('modal-social', 'kakao')"
          style="width:100%;padding:10px;border:none;border-radius:8px;background:#FEE500;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;font-size:0.85rem;color:#3C1E1E;font-weight:700;">
          <span style="font-size:1.05rem;">
            \u{1F4AC}
          </span>
          \uCE74\uCE74\uC624\uB85C \uB85C\uADF8\uC778
        </button>
        <button @click="handleBtnAction('modal-social', 'naver')"
          style="width:100%;padding:10px;border:none;border-radius:8px;background:#03C75A;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;font-size:0.85rem;color:#fff;font-weight:700;">
          <span style="font-size:1.05rem;font-weight:900;">
            N
          </span>
          \uB124\uC774\uBC84\uB85C \uB85C\uADF8\uC778
        </button>
      </div>
      <div style="text-align:center;margin-top:12px;font-size:12px;color:#aaa;">
        <span>
          \uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?
        </span>
        <span style="color:#e8587a;cursor:pointer;margin-left:6px;font-weight:600;" @click="handleBtnAction('tab-change', 'register')">
          \uD68C\uC6D0\uAC00\uC785
        </span>
      </div>
      <div style="text-align:center;margin-top:14px;">
        <button @click="handleBtnAction('modal-open-user-pick')" style="background:none;border:none;cursor:pointer;font-size:0.72rem;color:#aaa;text-decoration:underline;padding:0;">
          \uC0AC\uC6A9\uC790 \uC120\uD0DD\uD558\uC5EC \uB85C\uADF8\uC778 (\uAC1C\uBC1C)
        </button>
      </div>
    </div>
    <!-- \uD68C\uC6D0\uAC00\uC785 \uD3FC -->
    <div v-if="modal.tab==='register'">
      <bo-form-area :columns="baseRegFormColumns" :form="regForm" :cols="2" :show-actions="false" />
      <div v-if="error" class="login-error">
        {{ error }}
      </div>
      <button class="btn btn-primary" style="width:100%;margin-top:4px;" @click="handleBtnAction('modal-register')">
        \uAC00\uC785\uD558\uAE30
      </button>
      <div style="text-align:center;margin-top:12px;font-size:12px;color:#aaa;">
        <span>
          \uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?
        </span>
        <span style="color:#e8587a;cursor:pointer;margin-left:6px;font-weight:600;" @click="handleBtnAction('tab-change', 'login')">
          \uB85C\uADF8\uC778
        </span>
      </div>
    </div>
  </div>
</bo-modal>
`},window.BoExcelUploadModal={name:"BoExcelUploadModal",inheritAttrs:!1,props:{defaultDomain:{type:String,default:""},modalName:{type:String,default:""},onCallback:{type:Function,default:null}},emits:["close","saved"],setup(l,{emit:b}){var be;const{ref:m,reactive:B,computed:u}=Vue,_=m("upload"),S=[{id:"upload",label:"\uC5C5\uB85C\uB4DC"},{id:"desc",label:"\uC124\uBA85"}],f=m([]),s=m(""),a=m(!1),C=B({}),A=B({total:0,insert:0,update:0,errors:0}),F=new Date().getFullYear(),v=B({dateRangeType:"reg_date",dateRangeStart:`${F-3}-01-01`,dateRangeEnd:`${F}-12-31`,useYn:""}),N=m([]),H=m(null),U=m([]),J=m(""),Q=m(""),q=m(null),o=m(!1),L=new Map,ee=async()=>{var c,r;const e=te.value;if(!e){q.value=null;return}if(L.has(e)){q.value=L.get(e);return}const t="/bo/excel/"+e+"/meta";o.value=!0;try{const d=((c=(await window.boApi.get(t,window.coUtil.cofApiHdr(y.value,"\uB3C4\uBA54\uC778\uBA54\uD0C0\uC870\uD68C"))).data)==null?void 0:c.data)||null;if(L.set(e,d),q.value=d,d&&Array.isArray(d.columns)){const p=(r=window.sfGetBoCodeStore)==null?void 0:r.call(window);p&&d.columns.forEach(k=>{var x;if(k.codeGrp&&!C[k.codeGrp]){const I=((x=p.sgGetGrpCodes)==null?void 0:x.call(p,k.codeGrp))||[];C[k.codeGrp]=I.map(z=>{var $,O;return{value:($=z.codeValue)!=null?$:z.codeVal,label:(O=z.codeLabel)!=null?O:z.codeNm}})}})}}catch(g){console.warn("[BoExcelUploadModal] \uB3C4\uBA54\uC778 \uBA54\uD0C0 \uC870\uD68C \uC2E4\uD328:",g),q.value=null}finally{o.value=!1}},E=B({ran:!1,ok:!0,items:[],ranAt:""}),Z=u(()=>window.BO_EXCEL_DOMAINS||[]),te=m(l.defaultDomain||((be=Z.value[0])==null?void 0:be.key)||""),oe=u(()=>te.value&&Z.value.find(e=>e.key===te.value)||null),Y=u(()=>{var e;return((e=oe.value)==null?void 0:e.baseUrl)||""}),ie=u(()=>Y.value?Y.value+"/excel":""),re=u(()=>Y.value?Y.value+"/exists-check":""),ne=u(()=>Y.value?Y.value+"/upsert-list":""),i=u(()=>{var e;return((e=oe.value)==null?void 0:e.label)||Q.value||""}),y=u(()=>i.value||"\uC5D1\uC140\uC5C5\uB85C\uB4DC"),T=u(()=>i.value||"\uB370\uC774\uD130"),V=u(()=>i.value?i.value+" \uC5D1\uC140 \uC5C5\uB85C\uB4DC":"\uC5D1\uC140 \uC5C5\uB85C\uB4DC"),P=(e,t,c)=>{var r;return(((r=window.boApp)==null?void 0:r.showToast)||(()=>{}))(e,t,c)},de=(e,t)=>{var c;return(((c=window.boApp)==null?void 0:c.showConfirm)||(()=>Promise.resolve(!0)))(e,t)},K=u(()=>U.value),ae=u(()=>J.value),n=u(()=>f.value.length>0),h=u(()=>f.value.filter(e=>!e._err)),w=u(()=>{if(K.value.length)return K.value;const e=q.value;return!e||!Array.isArray(e.columns)?[]:e.columns.map(t=>({field:t.fieldName||t.field,label:t.label||t.fieldName||t.field,codeGrp:t.codeGrp||"",isKey:!!t.isKey||e.keyField&&(t.fieldName||t.field)===e.keyField,required:!!t.required,readOnly:!!t.readOnly,desc:t.desc||t.remark||""}))}),R=u(()=>{var e;return ae.value||((e=q.value)==null?void 0:e.keyField)||""}),j=()=>{A.total=f.value.length,A.insert=f.value.filter(e=>!e._err&&!e._exists).length,A.update=f.value.filter(e=>!e._err&&e._exists).length,A.errors=f.value.filter(e=>e._err).length},se=async()=>{var r,g;const e=(r=window.sfGetBoCodeStore)==null?void 0:r.call(window);if(!e)return;const t=[];K.value.forEach(d=>t.push({codeGrp:d.codeGrp})),(((g=q.value)==null?void 0:g.columns)||[]).forEach(d=>t.push({codeGrp:d.codeGrp})),await e.saLoadCodes(t.map(d=>d.codeGrp).filter(Boolean));const c=new Set;t.forEach(d=>{var k;if(!d.codeGrp||c.has(d.codeGrp)||(c.add(d.codeGrp),C[d.codeGrp]&&C[d.codeGrp].length))return;const p=((k=e.sgGetGrpCodes)==null?void 0:k.call(e,d.codeGrp))||[];p.length&&(C[d.codeGrp]=p.map(x=>{var I,z;return{value:(I=x.codeValue)!=null?I:x.codeVal,label:(z=x.codeLabel)!=null?z:x.codeNm}}))})};(async()=>{var c,r;const e=(c=window.sfGetBoCodeStore)==null?void 0:c.call(window);if(!e||N.value.length)return;await e.saLoadCodes(["USE_YN"],{compNm:"BoModals"});const t=((r=e.sgGetGrpCodes)==null?void 0:r.call(e,"USE_YN"))||[];N.value=t.map(g=>{var d,p;return{value:(d=g.codeValue)!=null?d:g.codeVal,label:(p=g.codeLabel)!=null?p:g.codeNm}})})();const ye=async(e,t={})=>{var c;if(e==="tab-change"){_.value=t,t==="desc"&&(q.value||await ee(),await se());return}else{if(e==="download-sample")return we();if(e==="download-all")return ke();if(e==="choose-file"){(c=document.getElementById("__bo_excel_upload_file__"))==null||c.click();return}else if(e==="clear-rows"){f.value=[],s.value="",j(),ce();return}else if(e==="remove-row"){f.value.splice(t,1),j();return}else if(e==="clear-inspect"){ce(),f.value.forEach(r=>{r._err=""}),j();return}else{if(e==="ui-inspect")return ve();if(e==="inspect")return xe();if(e==="grid-download")return Ae();if(e==="excel-upload")return Se();if(e==="grid-upload"||e==="save")return ge();if(e==="close"){b("close");return}else console.warn("[BoExcelUploadModal:handleBtnAction] unknown cmd:",e)}}},he=async(e,t={})=>{if(e==="domain-change"){te.value=t,q.value=null,await ee(),await se();return}else console.warn("[BoExcelUploadModal:handleSelectAction] unknown cmd:",e)},ce=()=>{E.ran=!1,E.ok=!0,E.items=[],E.ranAt=""},xe=async()=>{var I,z,$,O;ce();const e=[],t=(D,M,W)=>e.push({level:D,label:M,detail:W});if(!n.value){t("error","\uB370\uC774\uD130 \uC5C6\uC74C","\uBBF8\uB9AC\uBCF4\uAE30 \uADF8\uB9AC\uB4DC\uC5D0 \uD589\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."),Object.assign(E,{ran:!0,ok:!1,items:e,ranAt:new Date().toLocaleTimeString()});return}if(!ne.value){t("error","\uB300\uC0C1 \uB3C4\uBA54\uC778 \uBBF8\uC120\uD0DD","\uC0C1\uB2E8 [\uB300\uC0C1] select \uC5D0\uC11C \uB3C4\uBA54\uC778\uC744 \uC120\uD0DD\uD558\uC138\uC694."),Object.assign(E,{ran:!0,ok:!1,items:e,ranAt:new Date().toLocaleTimeString()});return}f.value.forEach(D=>{D._err=""}),t("info","\uC810\uAC80 \uBAA8\uB4DC","\uC11C\uBC84 testRun (DB \uBBF8\uBC18\uC601, \uD589\uB9C8\uB2E4 \uAC80\uC99D)"),t("info","\uB300\uC0C1 \uB3C4\uBA54\uC778",`${((I=oe.value)==null?void 0:I.label)||""} (${Y.value})`),a.value=!0;let c;try{const D={testRun:!0,rows:f.value.map(M=>{const W={};return K.value.forEach(X=>{const le=X.field||X.fieldName;W[le]=M[le]}),W._row_status=M._rowStatus||"I",W})};c=await window.boApi.post(ne.value,D,window.coUtil.cofApiHdr(y.value,"\uC5C5\uB85C\uB4DC\uC810\uAC80"))}catch(D){const M=coUtil.cofErrMsg(D,"\uC11C\uBC84 \uC810\uAC80 \uD638\uCD9C \uC2E4\uD328");t("error","\uC11C\uBC84 \uD638\uCD9C \uC2E4\uD328",M),Object.assign(E,{ran:!0,ok:!1,items:e,ranAt:new Date().toLocaleTimeString()}),a.value=!1;return}a.value=!1;const r=((z=c.data)==null?void 0:z.data)||{},g=Array.isArray(r.errors)?r.errors:[],d=($=r.inserted)!=null?$:0,p=(O=r.updated)!=null?O:0,k=f.value.length;if(g.forEach(D=>{const M=(D.rowIndex||0)-1;if(M>=0&&M<f.value.length){const W=f.value[M]._err;f.value[M]._err=(W?W+" / ":"")+(D.message||"\uC624\uB958")}}),j(),t("ok","\uD589\uC218",`${k.toLocaleString()}\uAC74 / \uC0C1\uD55C ${window.coUtil.EXCEL_UPLOAD_MAX_ROWS.toLocaleString()}\uAC74`),g.length===0)t("ok","\uAC80\uC99D \uD1B5\uACFC",`\uC815\uC0C1 ${k}\uAC74 (\uC608\uC0C1 \u2014 \uC2E0\uADDC ${d} / \uC218\uC815 ${p})`);else{t("error","\uC624\uB958 \uD589",`${g.length}\uAC74 \u2014 \uADF8\uB9AC\uB4DC\uC758 \uC624\uB958 \uD589\uC5D0\uC11C \uBA54\uC2DC\uC9C0\uB97C \uD655\uC778\uD558\uC138\uC694.`);const D=g.slice(0,3).map(M=>`${M.rowIndex}\uD589: ${M.message}`).join(" / ");t("info","\uC624\uB958 \uC0D8\uD50C",D+(g.length>3?" \u2026":"")),t("ok","\uC815\uC0C1 \uD589",`${k-g.length}\uAC74 (\uC608\uC0C1 \u2014 \uC2E0\uADDC ${d} / \uC218\uC815 ${p})`)}t("info","DB \uBC18\uC601 \uC5EC\uBD80","\uBBF8\uBC18\uC601 (testRun) \u2014 \uAC80\uC99D\uB9CC \uC218\uD589");const x=e.some(D=>D.level==="error");Object.assign(E,{ran:!0,ok:!x,items:e,ranAt:new Date().toLocaleTimeString()})},ve=()=>{ce();const e=[],t=(x,I,z)=>e.push({level:x,label:I,detail:z});if(!n.value){t("error","\uB370\uC774\uD130 \uC5C6\uC74C","\uBBF8\uB9AC\uBCF4\uAE30 \uADF8\uB9AC\uB4DC\uC5D0 \uD589\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."),Object.assign(E,{ran:!0,ok:!1,items:e,ranAt:new Date().toLocaleTimeString()});return}const c=K.value,r=ae.value;t("info","\uC810\uAC80 \uBAA8\uB4DC","UI \uC810\uAC80 (\uD074\uB77C\uC774\uC5B8\uD2B8 \uB2E8\uB3C5 \uAC80\uC99D)"),t("ok","\uCEEC\uB7FC \uC778\uC2DD",`${c.length}\uAC1C \uCEEC\uB7FC`);const g=f.value.length,d=window.coUtil.EXCEL_UPLOAD_MAX_ROWS;if(g>d?t("error","\uD589\uC218 \uC0C1\uD55C \uCD08\uACFC",`${g.toLocaleString()}\uAC74 > \uC0C1\uD55C ${d.toLocaleString()}\uAC74`):t("ok","\uD589\uC218",`${g.toLocaleString()}\uAC74 / \uC0C1\uD55C ${d.toLocaleString()}\uAC74`),f.value.forEach(x=>{x._err=""}),r){const x=new Map,I=[];if(f.value.forEach((z,$)=>{const O=z[r];O==null||O===""||(x.has(O)?(I.push({key:O,first:x.get(O)+1,second:$+1}),z._err=(z._err?z._err+" / ":"")+`\uD0A4\uC911\uBCF5(${O})`):x.set(O,$))}),I.length){const z=I.slice(0,3).map($=>`${$.key}(${$.first}\u2194${$.second})`).join(", ");t("error","\uD0A4 \uC911\uBCF5",`${I.length}\uAC74 \u2014 ${z}${I.length>3?" ...":""}`)}else t("ok","\uD0A4 \uC911\uBCF5 \uC5C6\uC74C",`${r} \uAC12 \uBAA8\uB450 \uC720\uC77C`)}else t("warn","\uD0A4 \uD544\uB4DC \uBBF8\uC778\uC2DD","\uD0A4 \uCEEC\uB7FC\uC774 \uC5C6\uC5B4 \uC911\uBCF5 \uAC80\uC0AC \uC0DD\uB7B5");const p=c.filter(x=>x.codeGrp);if(p.length){let x=0;const I=[];for(const z of p){const $=C[z.codeGrp]||[];if($.length===0){I.push(`${z.label}: \uCF54\uB4DC\uADF8\uB8F9(${z.codeGrp}) \uB85C\uB4DC \uC2E4\uD328`);continue}const O=new Set($.map(M=>String(M.value)));let D=0;f.value.forEach((M,W)=>{const X=M[z.field];X==null||X===""||O.has(String(X))||(D++,x++,M._err=(M._err?M._err+" / ":"")+`${z.label}:${X}`)}),D&&I.push(`${z.label}(${z.codeGrp}): ${D}\uAC74`)}x?t("error","\uCF54\uB4DC\uAC12 \uC624\uB958",I.join(" / ")):t("ok","\uCF54\uB4DC\uAC12 \uAC80\uC99D",`${p.length}\uAC1C \uCF54\uB4DC \uCEEC\uB7FC \uBAA8\uB450 \uC720\uD6A8`)}j();const k=e.some(x=>x.level==="error");Object.assign(E,{ran:!0,ok:!k,items:e,ranAt:new Date().toLocaleTimeString()})},we=()=>{if(!K.value.length){P("\uBA3C\uC800 [\uC870\uAC74\uB370\uC774\uD0C0 \uB2E4\uC6B4\uB85C\uB4DC] \uBC1B\uC740 \uD30C\uC77C\uC744 \uD55C \uBC88 \uC120\uD0DD\uD558\uBA74 \uCEEC\uB7FC \uC815\uBCF4\uAC00 \uC778\uC2DD\uB429\uB2C8\uB2E4.","info");return}const e=ae.value,t=K.value.map(r=>r.label+((r.field||r.fieldName)===e?"[\uD0A4]":"")),c=[t];window.coUtil.cofExportCsv(c,t.map((r,g)=>({label:r,key:g})),T.value+"_\uC0D8\uD50C.csv")},ke=async()=>{if(!ie.value){P("\uB300\uC0C1 \uB3C4\uBA54\uC778\uC744 \uBA3C\uC800 \uC120\uD0DD\uD558\uC138\uC694.","error");return}const e={};v.dateRangeType&&(e.dateRangeType=v.dateRangeType),v.dateRangeStart&&(e.dateRangeStart=v.dateRangeStart),v.dateRangeEnd&&(e.dateRangeEnd=v.dateRangeEnd),v.useYn&&(e.useYn=v.useYn,e.status=v.useYn),a.value=!0;try{await window.coUtil.cofDownloadExcel(ie.value,e,T.value+"_\uC804\uCCB4",y.value,"\uC804\uCCB4\uB2E4\uC6B4\uB85C\uB4DC")}catch(t){P(coUtil.cofErrMsg(t,"\uC804\uCCB4 \uB2E4\uC6B4\uB85C\uB4DC \uC2E4\uD328"),"error",0)}finally{a.value=!1}},Ae=()=>{if(!n.value){P("\uB2E4\uC6B4\uB85C\uB4DC\uD560 \uB370\uC774\uD0C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}if(typeof window.XLSX=="undefined"){P("xlsx \uB77C\uC774\uBE0C\uB7EC\uB9AC(SheetJS)\uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error",0);return}const e=K.value,t=ae.value,c=[];c.push([Q.value||i.value,...Array(Math.max(e.length-1,0)).fill("")]),c.push(e.map(p=>p.label+(p.field===t?"(key)":"")+(p.codeGrp?`(\uCF54\uB4DC:${p.codeGrp})`:""))),c.push(e.map(p=>p.field+(p.field===t?"(key)":"")+(p.codeGrp?`(gcd:${p.codeGrp})`:""))),f.value.forEach(p=>{c.push(e.map(k=>p[k.field]!=null?p[k.field]:""))});const r=window.XLSX.utils.aoa_to_sheet(c),g=window.XLSX.utils.book_new();window.XLSX.utils.book_append_sheet(g,r,T.value.substring(0,31)||"Sheet1");const d=window.coUtil.cofBuildExportFilename(T.value+"_\uADF8\uB9AC\uB4DC.xlsx");window.XLSX.writeFile(g,d)},Se=async()=>{var r,g,d,p;if(!H.value){P("\uC5C5\uB85C\uB4DC\uD560 \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. [\uD30C\uC77C \uC120\uD0DD] \uD558\uC138\uC694.","error");return}if(!Y.value){P("\uB300\uC0C1 \uB3C4\uBA54\uC778\uC744 \uBA3C\uC800 \uC120\uD0DD\uD558\uC138\uC694.","error");return}if(!await de("\uC5D1\uC140\uC5C5\uB85C\uB4DC",`\uC6D0\uBCF8 \uD30C\uC77C [${H.value.name}]\uC744 \uADF8\uB300\uB85C \uC11C\uBC84\uC5D0 \uC5C5\uB85C\uB4DC\uD569\uB2C8\uB2E4.
(\uC11C\uBC84\uC5D0\uC11C \uC9C1\uC811 \uD30C\uC2F1 \uD6C4 upsert. \uADF8\uB9AC\uB4DC \uC218\uC815\uC0AC\uD56D\uC740 \uBC18\uC601\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.)`))return;const t=Y.value+"/upsert-file",c=new FormData;c.append("file",H.value),a.value=!0;try{const x=((r=(await window.boApi.post(t,c,{headers:{"Content-Type":"multipart/form-data"},...window.coUtil.cofApiHdr(y.value,"\uC5D1\uC140\uC5C5\uB85C\uB4DC")})).data)==null?void 0:r.data)||{};P(`\uC5D1\uC140\uC5C5\uB85C\uB4DC \uC644\uB8CC - \uC2E0\uADDC ${(g=x.inserted)!=null?g:"?"} / \uC218\uC815 ${(d=x.updated)!=null?d:"?"}`,"success"),b("saved",x),b("close"),l.onCallback&&l.onCallback(l.modalName,null,x)}catch(k){const x=(p=k.response)==null?void 0:p.status;if(x===404||x===405)return P("\uC11C\uBC84\uC5D0 [\uC5D1\uC140\uC5C5\uB85C\uB4DC] \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uAC00 \uC5C6\uC5B4 \uADF8\uB9AC\uB4DC\uC5C5\uB85C\uB4DC\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4.","info"),a.value=!1,ge();P(coUtil.cofErrMsg(k,"\uC5D1\uC140\uC5C5\uB85C\uB4DC \uC2E4\uD328"),"error",0)}finally{a.value=!1}},Ce=async e=>{var c;const t=(c=e.target.files)==null?void 0:c[0];if(t){H.value=t,s.value=t.name,e.target.value="",ce(),a.value=!0;try{const r=await _e(t);if(r.length===0){P("\uD30C\uC77C\uC5D0 \uB370\uC774\uD0C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error"),f.value=[],j();return}if(r.length>window.coUtil.EXCEL_UPLOAD_MAX_ROWS){P(`\uC5C5\uB85C\uB4DC \uD589\uC218\uAC00 \uC0C1\uD55C(${window.coUtil.EXCEL_UPLOAD_MAX_ROWS.toLocaleString()})\uC744 \uCD08\uACFC\uD569\uB2C8\uB2E4. \uD604\uC7AC ${r.length.toLocaleString()}\uAC74.`,"error",0);return}const g=r.map(d=>Ie(d));f.value=g,j(),re.value&&await Me(),j()}catch(r){console.error("[BoExcelUploadModal:onFileChange]",r),P(r.message||"\uD30C\uC77C \uD30C\uC2F1 \uC2E4\uD328","error",0)}finally{a.value=!1}}},_e=async e=>{const t=(e.name||"").toLowerCase();if(t.endsWith(".csv")||t.endsWith(".txt")){const c=await e.text();return ue(c)}if(t.endsWith(".xlsx")||t.endsWith(".xls")){if(typeof window.XLSX=="undefined")throw new Error("xlsx \uD30C\uC11C(SheetJS)\uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68 \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.");const c=await e.arrayBuffer(),r=window.XLSX.read(c,{type:"array"}),g=r.SheetNames[0];if(!g)throw new Error("\uC5D1\uC140 \uD30C\uC77C\uC5D0 \uC2DC\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");const d=window.XLSX.utils.sheet_to_csv(r.Sheets[g],{blankrows:!1});return ue(d)}throw new Error("\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uD30C\uC77C \uD615\uC2DD\uC785\uB2C8\uB2E4. (.csv / .xlsx / .xls \uB9CC \uC9C0\uC6D0)")},ue=e=>{const t=Be(e);if(t.length===0)return[];if(t.length>=4&&ze(t)){const d=t[0],p=t[1],k=t[2];Q.value=(d[0]||"").trim();const x=/\(\s*key\s*\)/i,I=/\(\s*(?:코드|code|gcd)\s*[:：]\s*([A-Za-z][A-Za-z0-9_]*)\b[^)]*\)/i,z=[];let $="";k.forEach((M,W)=>{const X=(M||"").trim();if(!X)return;const le=x.test(X),pe=(p[W]||"").trim(),me=X.match(I)||pe.match(I),Le=me?me[1].toUpperCase():"",fe=X.replace(x,"").replace(I,"").trim(),Ne=(pe||fe).replace(x,"").replace(I,"").replace(/\s+/g," ").trim();z.push({field:fe,label:Ne,isKey:le,codeGrp:Le}),le&&($=fe)}),U.value=z,J.value=$,se();const O=z.map(M=>M.field),D=[];for(let M=3;M<t.length;M++){const W=t[M];if(W.every(le=>le===""||le==null))continue;const X={};O.forEach((le,pe)=>{X[le]=W[pe]!=null?W[pe]:""}),D.push(X)}return D}const r=t[0].map(d=>(d||"").trim()),g=[];for(let d=1;d<t.length;d++){const p=t[d];if(p.every(x=>x===""||x==null))continue;const k={};r.forEach((x,I)=>{k[x]=p[I]!=null?p[I]:""}),g.push(k)}return g},Be=e=>{if(!e)return[];e.charCodeAt(0)===65279&&(e=e.slice(1));const t=[];let c=[],r="",g=!1;for(let d=0;d<e.length;d++){const p=e[d];g?p==='"'?e[d+1]==='"'?(r+='"',d++):g=!1:r+=p:p==='"'?g=!0:p===","?(c.push(r),r=""):p==="\r"||(p===`
`?(c.push(r),t.push(c),c=[],r=""):r+=p)}return(r!==""||c.length)&&(c.push(r),t.push(c)),t},ze=e=>{if(e.length<4)return!1;const t=e[1]||[],c=e[2]||[],r=/\(\s*(?:key|코드|code|gcd)\b/i;return t.some(p=>r.test(p||""))||c.some(p=>r.test(p||""))?!0:c.length>0&&c.every(p=>{const k=(p||"").replace(/\(\s*key\s*\)/i,"").replace(/\(\s*(?:코드|code|gcd)\s*[:：][^)]*\)/i,"").trim();return k===""||/^[a-z][a-zA-Z0-9_]*$/.test(k)})},Ie=e=>{const t={_err:"",_exists:!1,_rowStatus:"I"};return K.value.forEach(c=>{var d,p;const r=c.field||c.fieldName;let g=(p=(d=e[r])!=null?d:e[c.label])!=null?p:"";typeof g=="string"&&(g=g.trim()),t[r]=g}),t},Me=async()=>{var c,r,g;const e=ae.value;if(!e||!re.value)return;const t=f.value.map(d=>d[e]).filter(d=>d!=null&&d!=="");if(t.length)try{const d=await window.boApi.post(re.value,{keys:t},window.coUtil.cofApiHdr(y.value,"\uD0A4\uC874\uC7AC\uCCB4\uD06C")),p=((r=(c=d.data)==null?void 0:c.data)==null?void 0:r.existsMap)||((g=d.data)==null?void 0:g.existsMap)||{};f.value.forEach(k=>{k._exists=!!p[k[e]],k._rowStatus==="I"&&k._exists?k._rowStatus="U":k._rowStatus==="U"&&!k._exists&&(k._rowStatus="I")})}catch(d){console.warn("[BoExcelUploadModal:fnCheckExists]",d)}},ge=async()=>{var e,t,c;if(!n.value){P("\uC5C5\uB85C\uB4DC\uD560 \uB370\uC774\uD0C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}if(!ne.value){P("\uB300\uC0C1 \uB3C4\uBA54\uC778\uC744 \uBA3C\uC800 \uC120\uD0DD\uD558\uC138\uC694.","error");return}if(A.errors>0){if(!await de("\uC5C5\uB85C\uB4DC",`\uC624\uB958 ${A.errors}\uAC74\uC740 \uC81C\uC678\uD558\uACE0 ${A.total-A.errors}\uAC74\uB9CC \uC800\uC7A5\uD569\uB2C8\uB2E4. \uACC4\uC18D\uD560\uAE4C\uC694?`))return}else if(!await de("\uC5C5\uB85C\uB4DC",`${A.total}\uAC74 (\uC2E0\uADDC ${A.insert} / \uC218\uC815 ${A.update})\uC744 \uC800\uC7A5\uD569\uB2C8\uB2E4.`))return;a.value=!0;try{const r={rows:h.value.map(p=>{const k={};return K.value.forEach(x=>{const I=x.field||x.fieldName;k[I]=p[I]}),k._row_status=p._rowStatus||"I",k})},d=((e=(await window.boApi.post(ne.value,r,window.coUtil.cofApiHdr(y.value,"\uC5D1\uC140\uC5C5\uB85C\uB4DC"))).data)==null?void 0:e.data)||{};P(`\uC800\uC7A5 \uC644\uB8CC - \uC2E0\uADDC ${(t=d.inserted)!=null?t:A.insert} / \uC218\uC815 ${(c=d.updated)!=null?c:A.update}`,"success"),b("saved",d),l.onCallback&&l.onCallback(l.modalName,null,d),b("close"),l.onCallback&&l.onCallback(l.modalName,null,null)}catch(r){const g=coUtil.cofErrMsg(r,"\uC5C5\uB85C\uB4DC \uC2E4\uD328");P(g,"error",0)}finally{a.value=!1}};return Vue.onMounted(()=>{se(),ee()}),Vue.watch(te,()=>{f.value=[],s.value="",U.value=[],J.value="",Q.value="",j(),ce(),se(),ee()}),{tab:_,TABS:S,rows:f,fileName:s,loading:a,codesMap:C,summary:A,inspect:E,cfCols:K,cfKeyField:ae,cfHasRows:n,cfValidRows:h,cfTitle:V,cfLabel:i,cfDescCols:w,cfDescKeyField:R,domainMetaLoading:o,cfDomains:Z,cfDomain:oe,selectedDomainKey:te,searchParam:v,useYnOptions:N,selectedFile:H,handleBtnAction:ye,handleSelectAction:he,onFileChange:Ce,inspectItemsColumns:[{key:"_lvl",label:"",style:"width:24px;",align:"center",fmt:(e,t)=>t.level==="ok"?"\u25CF":t.level==="warn"?"\u25B2":t.level==="error"?"\u2716":"\xB7",cellStyle:(e,t)=>t.level==="ok"?"color:#16a34a;":t.level==="warn"?"color:#f59e0b;":t.level==="error"?"color:#dc2626;":"color:#64748b;"},{key:"label",label:"\uD56D\uBAA9",style:"width:130px;",cellStyle:"font-weight:600;color:#334155;"},{key:"detail",label:"\uB0B4\uC6A9",cellStyle:"color:#475569;"}],codesGridColumns:[{key:"value",label:"\uCF54\uB4DC\uAC12",style:"width:120px;",cellStyle:"font-family:monospace;"},{key:"label",label:"\uCF54\uB4DC\uBA85"}],descColsColumns:[{key:"field",label:"\uD544\uB4DC\uBA85",style:"width:160px;",cellStyle:"font-family:monospace;font-size:11px;"},{key:"label",label:"\uD55C\uAE00\uBA85"},{key:"_req",label:"\uD544\uC218",style:"width:60px;",align:"center",fmt:(e,t)=>t.required?"\u25CF":"",cellStyle:(e,t)=>t.required?"color:#dc2626;font-weight:700;":""},{key:"_key",label:"\uD0A4\uCEEC\uB7FC",style:"width:80px;",align:"center",badge:e=>e.field===R.value?{text:"\uD0A4",style:"background:#fef3c7;color:#92400e;border-radius:3px;padding:1px 6px;font-size:11px;"}:null},{key:"codeGrp",label:"\uCF54\uB4DC\uADF8\uB8F9",style:"width:140px;",fmt:e=>e||"",cellStyle:"font-family:monospace;font-size:11px;"},{key:"_codeVals",label:"\uCF54\uB4DC\uC815\uBCF4",style:"width:220px;",fmt:(e,t)=>{if(!t.codeGrp)return"";const c=C[t.codeGrp];return!c||!c.length?"(\uB85C\uB4DC \uC548 \uB428)":c.slice(0,5).map(r=>r.label+"("+r.value+")").join(" / ")+(c.length>5?" \u2026":"")},cellStyle:"font-size:11px;color:#555;"},{key:"desc",label:"\uBE44\uACE0",cellStyle:"font-size:12px;"}]}},template:`
<bo-modal :show="true" :title="cfTitle" width="1100px" height="auto" max-height="95vh" body-pad="0" @close="$emit('close')">
  <!-- bodyPad=0 \u2192 BoModal body \uC758 padding \uC81C\uAC70 \u2192 wrapper \uAC00 body \uC601\uC5ED\uC744 \uC815\uD655\uD788 100% \uCC44\uC6C0.
        wrapper \uB0B4\uBD80 padding \uC740 \uC9C1\uC811 \uAD00\uB9AC. \uBAA8\uB2EC body \uC790\uCCB4 \uC2A4\uD06C\uB864\uC740 \uC808\uB300 \uD65C\uC131\uD654\uB418\uC9C0 \uC54A\uB3C4\uB85D
        \uBAA8\uB4E0 \uC790\uC2DD\uC774 wrapper \uC548\uC5D0\uC11C flex \uB85C \uC904\uC5B4\uB4E4\uB3C4\uB85D \uAD6C\uC131. -->
  <div style="display:flex;flex-direction:column;height:100%;min-height:0;padding:20px;box-sizing:border-box;">

  <!-- \u2550\u2550\u2550 \uC0C1\uB2E8 \uC601\uC5ED (\uC790\uC5F0 \uB192\uC774, flex:0 0 auto) \u2550\u2550\u2550 -->
  <div style="flex:0 0 auto;">

  <!-- \uB3C4\uBA54\uC778 select (lib/config/excelDomains.js \uAE30\uBC18) -->
  <div style="display:flex;gap:12px;align-items:center;margin-bottom:8px;padding:10px 12px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;">
    <label style="font-size:12px;color:#475569;font-weight:600;min-width:48px;">\uB300\uC0C1</label>
    <select :value="selectedDomainKey" @change="e => handleSelectAction('domain-change', e.target.value)"
            class="form-control" style="flex:1;max-width:280px;font-size:13px;" :disabled="cfDomains.length === 0">
      <option v-for="d in cfDomains" :key="d.key" :value="d.key">{{ d.group ? '[' + d.group + '] ' : '' }}{{ d.label }}</option>
    </select>
    <span v-if="cfDomain" style="font-size:11px;color:#94a3b8;font-family:monospace;">
      {{ cfDomain.baseUrl }}
    </span>
  </div>

  <!-- \uB2E4\uC6B4\uB85C\uB4DC \uAC80\uC0C9\uC870\uAC74 (\uB4F1\uB85D\uAE30\uAC04 + \uC0AC\uC6A9\uC5EC\uBD80). [\uC870\uAC74\uB370\uC774\uD0C0 \uB2E4\uC6B4\uB85C\uB4DC] \uC2DC \uBC31\uC5D4\uB4DC\uB85C \uD568\uAED8 \uC804\uB2EC -->
  <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:12px;padding:8px 12px;background:#fffaf3;border:1px solid #fde6c4;border-radius:8px;">
    <label style="font-size:12px;color:#92400e;font-weight:600;min-width:48px;">\uC870\uAC74</label>
    <select v-model="searchParam.dateRangeType" class="form-control" style="font-size:12px;width:110px;">
      <option value="reg_date">\uB4F1\uB85D\uC77C</option>
      <option value="upd_date">\uC218\uC815\uC77C</option>
    </select>
    <input type="date" v-model="searchParam.dateRangeStart" class="form-control" style="font-size:12px;width:140px;" />
    <span style="color:#94a3b8;">~</span>
    <input type="date" v-model="searchParam.dateRangeEnd" class="form-control" style="font-size:12px;width:140px;" />
    <label style="font-size:12px;color:#92400e;font-weight:600;margin-left:8px;">\uC0AC\uC6A9\uC5EC\uBD80</label>
    <select v-model="searchParam.useYn" class="form-control" style="font-size:12px;width:120px;">
      <option value="">\uC804\uCCB4</option>
      <option v-for="o in useYnOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
    <span style="font-size:11px;color:#94a3b8;margin-left:auto;">\u203B [\uC870\uAC74\uB370\uC774\uD0C0 \uB2E4\uC6B4\uB85C\uB4DC]\uC5D0\uB9CC \uC801\uC6A9</span>
  </div>

  <!-- \uD0ED \uD5E4\uB354 -->
  <bo-tab-bar :tabs="TABS" :tab="tab" :show-modes="false" bg="#f0fdf4"
    @tab-select="id => handleBtnAction('tab-change', id)" />

  <!-- \uC5C5\uB85C\uB4DC \uD0ED\uC758 \uC561\uC158 \uBC14 (\uC0C1\uB2E8 \uACE0\uC815 \uC601\uC5ED\uC5D0 \uD3EC\uD568) -->
  <div v-show="tab==='upload'" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px;">
    <button class="btn btn-secondary btn-sm" :disabled="loading" @click="handleBtnAction('download-sample')">\u{1F4C4} \uC0D8\uD50C \uB2E4\uC6B4\uB85C\uB4DC</button>
    <button class="btn btn-secondary btn-sm" :disabled="loading" @click="handleBtnAction('download-all')">\u{1F4E5} \uC870\uAC74\uB370\uC774\uD0C0 \uB2E4\uC6B4\uB85C\uB4DC</button>
    <span style="flex:1;"></span>
    <input type="file" id="__bo_excel_upload_file__" accept=".csv,.txt,.xlsx,.xls" style="display:none;" @change="onFileChange" />
    <button class="btn btn-blue btn-sm" :disabled="loading" @click="handleBtnAction('choose-file')">\u{1F4C1} \uD30C\uC77C \uC120\uD0DD</button>
    <button v-if="cfHasRows" class="btn btn-secondary btn-sm" :disabled="loading" @click="handleBtnAction('ui-inspect')">\u{1F50D} UI\uC810\uAC80</button>
    <button v-if="cfHasRows" class="btn btn-secondary btn-sm" :disabled="loading" @click="handleBtnAction('inspect')">\u{1F4CB} \uC5C5\uB85C\uB4DC\uC810\uAC80</button>
    <button v-if="cfHasRows" class="btn btn-secondary btn-sm" :disabled="loading" @click="handleBtnAction('grid-download')">\u{1F4E4} \uADF8\uB9AC\uB4DC\uB2E4\uC6B4\uB85C\uB4DC</button>
    <button v-if="cfHasRows" class="btn btn-secondary btn-sm" @click="handleBtnAction('clear-rows')">\uCD08\uAE30\uD654</button>
  </div>

  </div>
  <!-- \u2550\u2550\u2550 /\uC0C1\uB2E8 \uC601\uC5ED \u2550\u2550\u2550 -->

  <!-- \u2500\u2500\u2500\u2500\u2500 \uD0ED1: \uC5C5\uB85C\uB4DC \uCEE8\uD150\uCE20 (\uB0A8\uB294 \uC601\uC5ED flex:1) \u2500\u2500\u2500\u2500\u2500 -->
  <div v-show="tab==='upload'" style="flex:1 1 auto;min-height:0;display:flex;flex-direction:column;">

    <!-- \uC810\uAC80 \uACB0\uACFC \uD328\uB110 -->
    <div v-if="inspect.ran"
         :style="(inspect.ok ? 'border:1px solid #86efac;background:#f0fdf4;' : 'border:1px solid #fca5a5;background:#fef2f2;') + 'border-radius:8px;padding:10px 12px;margin-bottom:10px;font-size:12px;'">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <span style="font-weight:700;" :style="inspect.ok ? 'color:#15803d;' : 'color:#b91c1c;'">
          {{ inspect.ok ? '\u2714 \uC5C5\uB85C\uB4DC \uAC00\uB2A5' : '\u2716 \uC5C5\uB85C\uB4DC \uBD88\uAC00 \u2014 \uC624\uB958 \uD56D\uBAA9 \uD655\uC778' }}
        </span>
        <span style="flex:1;"></span>
        <span style="font-size:11px;color:#94a3b8;">\uC810\uAC80 {{ inspect.ranAt }}</span>
        <button class="btn btn-secondary btn-xs" @click="handleBtnAction('clear-inspect')" title="\uAC80\uC99D \uC815\uBCF4 \uC9C0\uC6B0\uAE30">\u2715 \uC9C0\uC6B0\uAE30</button>
      </div>
      <bo-grid bare :columns="inspectItemsColumns" :rows="inspect.items" style="font-size:11px;" />
    </div>

    <!-- \uD30C\uC77C \uC548\uB0B4 -->
    <div v-if="fileName" style="font-size:12px;color:#666;margin-bottom:8px;">
      \uC120\uD0DD: <strong>{{ fileName }}</strong>
      <span style="margin-left:12px;">\uC804\uCCB4 {{ summary.total }}\uAC74</span>
      <span style="margin-left:8px;color:#2563eb;">\uC2E0\uADDC {{ summary.insert }}</span>
      <span style="margin-left:8px;color:#16a34a;">\uC218\uC815 {{ summary.update }}</span>
      <span v-if="summary.errors" style="margin-left:8px;color:#dc2626;">\uC624\uB958 {{ summary.errors }}</span>
    </div>

    <!-- \uBBF8\uB9AC\uBCF4\uAE30 \uADF8\uB9AC\uB4DC \u2014 \uD654\uBA74 \uC548\uC5D0\uC11C \uAC00\uB85C \uC2A4\uD06C\uB864\uBC14\uAE4C\uC9C0 \uD568\uAED8 \uBCF4\uC774\uB3C4\uB85D \uB192\uC774 \uC81C\uD55C.
         max-height: 95vh - \uBAA8\uB2EC \uC0C1\uB2E8/\uD558\uB2E8/\uD328\uB529 \uD569\uC0B0(\uC57D 320px) \u2192 \uD654\uBA74 \uC548\uC5D0 \uAC00\uB85C \uC2A4\uD06C\uB864\uBC14\uB3C4 \uD568\uAED8 \uB178\uCD9C. -->
    <div v-if="cfHasRows" style="height:calc(95vh - 320px);min-height:280px;max-height:680px;overflow:auto;border:1px solid #e5e7eb;border-radius:8px;">
      <table class="admin-table" style="font-size:12px;margin:0;">
        <thead style="position:sticky;top:0;background:#f9fafb;z-index:1;">
          <tr>
            <th rowspan="2" style="width:36px;text-align:center;vertical-align:middle;">#</th>
            <th rowspan="2" style="width:60px;text-align:center;vertical-align:middle;">\uC0C1\uD0DC</th>
            <th rowspan="2" style="width:74px;text-align:center;vertical-align:middle;background:#fff7ed;color:#9a3412;font-family:Consolas,Menlo,monospace;font-size:11px;">
              _row_status
            </th>
            <th v-for="c in cfCols" :key="'lbl-'+c.field"
                :style="(c.field===cfKeyField ? 'background:#fff3d6;color:#92400e;' : '') + (c.width ? 'width:' + c.width + ';' : '') + 'min-width:130px;text-align:center;'">
              {{ c.label }}
              <span v-if="c.required" style="color:#dc2626;"> *</span>
            </th>
            <th rowspan="2" style="width:40px;"></th>
          </tr>
          <tr>
            <th v-for="c in cfCols" :key="'fld-'+c.field"
                :style="(c.field===cfKeyField ? 'background:#fff3d6;color:#92400e;' : 'background:#f3f4f6;color:#6b7280;') + 'min-width:130px;font-weight:400;font-size:11px;text-align:center;font-family:Consolas,Menlo,monospace;'">
              {{ c.field }}<span v-if="c.field===cfKeyField" style="color:#92400e;">(key)</span><span v-if="c.codeGrp" style="color:#7c3aed;">(gcd:{{ c.codeGrp }})</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, idx) in rows" :key="idx" :style="r._err ? 'background:#fef2f2;' : ''">
            <td style="text-align:center;color:#999;">{{ idx + 1 }}</td>
            <td style="text-align:center;">
              <span v-if="r._err" class="badge" style="background:#fee2e2;color:#dc2626;" :title="r._err">\uC624\uB958</span>
              <span v-else-if="r._exists" class="badge" style="background:#dcfce7;color:#16a34a;">\uC218\uC815</span>
              <span v-else class="badge" style="background:#dbeafe;color:#2563eb;">\uC2E0\uADDC</span>
            </td>
            <td style="padding:2px 4px;"
                :style="r._err ? 'background:#fef2f2;' : (r._rowStatus==='D' ? 'background:#fef2f2;' : (r._rowStatus==='M' ? 'background:#fefce8;' : (r._exists ? 'background:#f0fdf4;' : 'background:#eff6ff;')))">
              <select v-model="r._rowStatus" class="form-control"
                      style="font-size:11px;padding:2px 4px;width:100%;font-family:Consolas,Menlo,monospace;font-weight:600;text-align:center;"
                      :title="'I=INSERT(\uC2E0\uADDC) \xB7 U=UPDATE(\uC218\uC815) \xB7 D=DELETE(\uC0AD\uC81C) \xB7 M=MERGE(\uD0A4 \uC788\uC73C\uBA74 \uC218\uC815, \uC5C6\uC73C\uBA74 \uC2E0\uADDC)'">
                <option value="I">I</option>
                <option value="U">U</option>
                <option value="D">D</option>
                <option value="M">M</option>
              </select>
            </td>
            <td v-for="c in cfCols" :key="c.field"
                :style="(c.field===cfKeyField ? 'background:#fffbeb;font-weight:600;' : '') + 'min-width:130px;'">
              <select v-if="c.codeGrp" v-model="r[c.field]" class="form-control" style="font-size:11px;padding:2px 4px;width:100%;">
                <option value="">\uC120\uD0DD</option>
                <option v-for="o in (codesMap[c.codeGrp] || [])" :key="o.value" :value="o.value">{{ o.label }}</option>
              </select>
              <input v-else-if="!c.readOnly" type="text" v-model="r[c.field]" class="form-control" style="font-size:11px;padding:2px 4px;width:100%;" />
              <span v-else>{{ r[c.field] }}</span>
            </td>
            <td style="text-align:center;">
              <button class="btn btn-secondary btn-xs" @click="handleBtnAction('remove-row', idx)">\u2715</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- \uC548\uB0B4 (\uD30C\uC77C \uBBF8\uC120\uD0DD \uC2DC) -->
    <div v-else style="padding:40px;text-align:center;color:#999;border:2px dashed #e5e7eb;border-radius:8px;">
      <div style="font-size:14px;margin-bottom:6px;">\uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uBA74 \uBBF8\uB9AC\uBCF4\uAE30\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</div>
      <div style="font-size:11px;">\uD0A4 \uCEEC\uB7FC(\uB178\uB780\uC0C9)\uC5D0 \uAC12\uC774 \uC788\uC73C\uBA74 <strong>\uC218\uC815</strong>, \uC5C6\uC73C\uBA74 <strong>\uC2E0\uADDC</strong>\uB85C \uCC98\uB9AC\uB429\uB2C8\uB2E4.</div>
    </div>
  </div>
  <!-- \u2500\u2500\u2500\u2500\u2500 /\uD0ED1: \uC5C5\uB85C\uB4DC \uCEE8\uD150\uCE20 \u2500\u2500\u2500\u2500\u2500 -->

  <!-- \u2500\u2500\u2500\u2500\u2500 \uD0ED2: \uC124\uBA85 \uCEE8\uD150\uCE20 (\uB0A8\uB294 \uC601\uC5ED flex:1, \uB0B4\uBD80 \uC2A4\uD06C\uB864) \u2500\u2500\u2500\u2500\u2500 -->
  <div v-show="tab==='desc'" style="flex:1 1 auto;min-height:0;display:flex;flex-direction:column;">
    <div style="flex:0 0 auto;display:flex;align-items:center;gap:8px;font-size:12px;color:#666;margin-bottom:8px;">
      <span style="font-weight:600;color:#334155;">{{ cfLabel || '\uB300\uC0C1 \uBBF8\uC120\uD0DD' }}</span>
      <span style="color:#94a3b8;">\uCEEC\uB7FC \uC815\uC758 \uBC0F \uCF54\uB4DC \uC124\uBA85</span>
      <span v-if="cfDescCols.length" style="margin-left:auto;font-size:11px;color:#94a3b8;">{{ cfDescCols.length }}\uAC1C \uCEEC\uB7FC</span>
    </div>

    <div v-if="!cfDescCols.length" style="flex:0 0 auto;padding:24px;text-align:center;color:#999;border:2px dashed #e5e7eb;border-radius:8px;">
      <div v-if="domainMetaLoading" style="font-size:13px;">\uBA54\uD0C0 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4...</div>
      <div v-else style="font-size:13px;">\uB300\uC0C1 \uB3C4\uBA54\uC778\uC758 \uCEEC\uB7FC \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C1\uB2E8\uC5D0\uC11C \uB3C4\uBA54\uC778\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.</div>
    </div>

    <!-- \uCEEC\uB7FC \uC815\uC758 + \uCF54\uB4DC \uADF8\uB8F9\uBCC4 \uAC12 \u2014 \uB0B4\uBD80\uC5D0\uC11C\uB9CC \uC2A4\uD06C\uB864 -->
    <div v-if="cfDescCols.length" style="flex:1 1 auto;min-height:0;overflow:auto;">
      <bo-grid bare :columns="descColsColumns" :rows="cfDescCols" row-key="field"
        :row-style="row => row.field === cfDescKeyField ? 'background:#fffbeb;' : ''"
        empty-text="\uCEEC\uB7FC \uC815\uBCF4 \uC5C6\uC74C" style="font-size:12px;" />

    <!-- \uCF54\uB4DC \uADF8\uB8F9\uBCC4 \uAC12 \uBAA9\uB85D -->
    <div v-for="c in cfDescCols.filter(x => x.codeGrp)" :key="'code-' + c.codeGrp" style="margin-top:16px;">
      <div style="font-size:12px;font-weight:600;margin-bottom:6px;">
        \u{1F4CB} {{ c.label }} \uCF54\uB4DC\uAC12 (<code>{{ c.codeGrp }}</code>)
      </div>
      <bo-grid bare :columns="codesGridColumns" :rows="codesMap[c.codeGrp] || []"
        row-key="value" :empty-text="'\uCF54\uB4DC \uADF8\uB8F9(' + c.codeGrp + ') \uB85C\uB4DC \uC548 \uB428'"
        style="font-size:11px;" />
    </div>

    </div>
    <!-- /\uC124\uBA85 \uB0B4\uBD80 \uC2A4\uD06C\uB864 \uC601\uC5ED -->

  </div>
  <!-- \u2500\u2500\u2500\u2500\u2500 /\uD0ED2: \uC124\uBA85 \uCEE8\uD150\uCE20 \u2500\u2500\u2500\u2500\u2500 -->

  </div>
  <!-- /flex column wrapper -->

  <!-- \u2550\u2550\u2550 \uD558\uB2E8 \uACE0\uC815 \uC601\uC5ED \u2014 BoModal #footer \uC2AC\uB86F \uC0AC\uC6A9 (\uBAA8\uB2EC \uBC15\uC2A4 \uD558\uB2E8\uC5D0 \uACE0\uC815, body \uC2A4\uD06C\uB864\uACFC \uBD84\uB9AC) \u2550\u2550\u2550 -->
  <template #footer>
    <!-- \uC5C5\uB85C\uB4DC \uD0ED: [\uCDE8\uC18C] [\uC5D1\uC140\uC5C5\uB85C\uB4DC] [\uADF8\uB9AC\uB4DC\uC5C5\uB85C\uB4DC] -->
    <template v-if="tab==='upload'">
      <button class="btn btn-secondary" :disabled="loading" @click="handleBtnAction('close')">\uCDE8\uC18C</button>
      <button class="btn btn_excel_upload" :disabled="loading || !selectedFile"
              @click="handleBtnAction('excel-upload')"
              title="\uC6D0\uBCF8 \uD30C\uC77C\uC744 \uC11C\uBC84\uC5D0 \uADF8\uB300\uB85C \uC804\uC1A1 \u2014 \uADF8\uB9AC\uB4DC \uC218\uC815\uC0AC\uD56D\uC740 \uBC18\uC601\uB418\uC9C0 \uC54A\uC74C">
        \u{1F4E4} \uC5D1\uC140\uC5C5\uB85C\uB4DC
      </button>
      <button class="btn"
              :class="(inspect.ran ? !inspect.ok : false) ? 'btn-danger' : 'btn-primary'"
              :disabled="loading || !cfHasRows" @click="handleBtnAction('grid-upload')"
              :title="(inspect.ran ? !inspect.ok : false) ? '\uC810\uAC80 \uACB0\uACFC \uC624\uB958\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uAC15\uD589 \uC2DC \uC77C\uBD80 \uD589\uB9CC \uC800\uC7A5\uB420 \uC218 \uC788\uC5B4\uC694.' : '\uADF8\uB9AC\uB4DC\uC5D0 \uD45C\uC2DC\uB41C \uD589(\uD3B8\uC9D1 \uD6C4 \uC0C1\uD0DC)\uC744 upsert'">
        {{ (inspect.ran ? !inspect.ok : false) ? '\u26A0 \uAC15\uD589 \uADF8\uB9AC\uB4DC\uC5C5\uB85C\uB4DC' : '\u{1F4CB} \uADF8\uB9AC\uB4DC\uC5C5\uB85C\uB4DC' }}
      </button>
    </template>

    <!-- \uC124\uBA85 \uD0ED: [\uB2EB\uAE30] -->
    <template v-else-if="tab==='desc'">
      <button class="btn btn-secondary" @click="handleBtnAction('close')">\uB2EB\uAE30</button>
    </template>
  </template>
  <!-- \u2550\u2550\u2550 /\uD558\uB2E8 \uACE0\uC815 \uC601\uC5ED \u2550\u2550\u2550 -->
</bo-modal>
`},window.PdReviewStatusModal={name:"PdReviewStatusModal",inheritAttrs:!1,props:{show:{type:Boolean,default:!1},reviewTitle:{type:String,default:""},currentStatus:{type:String,default:""},newStatus:{type:String,default:""},statusLabel:{type:Object,default:()=>({})},badgeFn:{type:Function,default:()=>""},modalName:{type:String,default:"review-status"},onCallback:{type:Function,default:null}},emits:["confirm","close"],setup(l,{emit:b}){const{reactive:m,watch:B}=Vue,u=m({reason:""});return B(()=>l.show,f=>{f&&(u.reason="")}),{local:u,onConfirm:()=>{l.onCallback?l.onCallback(l.modalName,null,{reason:u.reason}):b("confirm",{reason:u.reason})},onClose:()=>{l.onCallback?l.onCallback(l.modalName,null,null):b("close")}}},template:`
<bo-modal :show="show" title="\uB9AC\uBDF0 \uC0C1\uD0DC \uBCC0\uACBD" width="480px" box-pad="0" @close="onClose">
  <div style="padding:18px 20px;">
    <div style="margin-bottom:14px;font-size:13px;color:#444;line-height:1.7;">
      <div><b>\uB9AC\uBDF0</b>: {{ reviewTitle }}</div>
      <div style="margin-top:4px;">
        <b>\uC0C1\uD0DC \uBCC0\uACBD</b>:
        <span :class="['badge', badgeFn(currentStatus)]" style="margin-left:6px;">
          {{ statusLabel[currentStatus] || currentStatus }}
        </span>
        <span style="margin:0 6px;color:#888;">\u2192</span>
        <span :class="['badge', badgeFn(newStatus)]">
          {{ statusLabel[newStatus] || newStatus }}
        </span>
      </div>
    </div>
    <label class="form-label" style="font-size:12px;font-weight:600;color:#555;display:block;">
      \uBCC0\uACBD \uC0AC\uC720 <span style="color:#e57373;">*</span>
    </label>
    <textarea class="form-control" v-model="local.reason" rows="4"
      placeholder="\uC0C1\uD0DC \uBCC0\uACBD \uC0AC\uC720\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694. (\uD544\uC218)"
      style="margin:6px 0 0;width:100%;font-size:13px;box-sizing:border-box;"></textarea>
  </div>
  <template #footer>
    <button class="btn btn_cancel" @click="onClose">\uCDE8\uC18C</button>
    <button class="btn btn_save" @click="onConfirm">\uC800\uC7A5</button>
  </template>
</bo-modal>
`},window.BoAddrSearchModal={name:"BoAddrSearchModal",inheritAttrs:!1,props:{modalName:{type:String,default:"addr-search"},onCallback:{type:Function,default:null}},emits:["select","close"],setup(l,{emit:b}){const{ref:m,onMounted:B}=Vue,u=m(null),_=s=>{l.onCallback?l.onCallback(l.modalName,null,{zonecode:s.zonecode,address:s.roadAddress||s.jibunAddress}):b("select",{zonecode:s.zonecode,address:s.roadAddress||s.jibunAddress})},S=()=>{l.onCallback?l.onCallback(l.modalName,null,null):b("close")},f=()=>{u.value&&new window.daum.Postcode({oncomplete:_}).embed(u.value)};return B(()=>{if(window.daum&&window.daum.Postcode){f();return}const s=document.createElement("script");s.src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",s.onload=f,document.head.appendChild(s)}),{layerRef:u,onClose:S}},template:`
<bo-modal :show="true" title="\uC8FC\uC18C \uAC80\uC0C9" width="520px" height="540px" body-pad="0" @close="onClose">
  <template #header-extra>
    <span style="font-size:11px;color:#bbb;">https://postcode.map.kakao.com/search</span>
  </template>
  <div ref="layerRef" style="width:100%;height:100%;overflow:hidden;"></div>
</bo-modal>
`};
