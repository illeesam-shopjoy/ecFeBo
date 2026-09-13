window.CmDashboardMenuMng={name:"CmDashboardMenuMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},scope:{type:String,default:"USER"}},setup(m){const{reactive:i,computed:l,onMounted:A}=Vue,c=window.boApp?window.boApp.showToast:m.showToast,p=i({loading:!1,error:null,seeded:!1}),E=i({}),u=i([]),h=i([]),t=i([]),r=i({from:null,overKey:null});let K=0;const I=()=>"TMP"+ ++K+"_"+Date.now().toString().slice(-5),y=l(()=>m.scope==="SYS"),v=l(()=>y.value?{title:"\uB300\uC2DC\uBCF4\uB4DC \uBA54\uB274\uAD00\uB9AC",group:"\uB300\uC2DC\uBCF4\uB4DC",icon:"\u{1F4CA}",listNm:"\uACF5\uC6A9 \uB300\uC2DC\uBCF4\uB4DC",uiNm:"\uB300\uC2DC\uBCF4\uB4DC\uBA54\uB274"}:{title:"\uC0AC\uC6A9\uC790 \uB300\uC2DC\uBCF4\uB4DC \uBA54\uB274\uAD00\uB9AC",group:"\uC0AC\uC6A9\uC790 \uB300\uC2DC\uBCF4\uB4DC",icon:"\u{1F464}",listNm:"\uB0B4\uAC00 \uBCFC \uC218 \uC788\uB294 \uB300\uC2DC\uBCF4\uB4DC",uiNm:"\uC0AC\uC6A9\uC790\uB300\uC2DC\uBCF4\uB4DC\uBA54\uB274"}),k=l(()=>{var e;return((e=window.boCommonFilter)==null?void 0:e.siteId)||""}),M=l(()=>{const e=window.sfGetBoAuthStore?window.sfGetBoAuthStore():null;return e&&e.svAuthUser&&e.svAuthUser.authId||""}),N=e=>!!e.ownerUserId||(e.uiCompNm||"").indexOf("MY:")===0,S=e=>e==="PUBLIC"||e==="ALL"?"PUBLIC":"PRIVATE",L=e=>S(e)==="PUBLIC"?"\uC804\uCCB4\uACF5\uAC1C":"\uBE44\uACF5\uAC1C",O=e=>S(e)==="PUBLIC"?"\u{1F310}":"\u{1F512}",B=(e,n)=>{if(e==="menu-addFolder")return P();if(e==="menu-remove")return _(n);if(e==="menu-save")return R();if(e==="menu-reset")return D(),c("\uC800\uC7A5 \uC804 \uAC12\uC73C\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4.","success");console.warn("[handleBtnAction] unknown cmd:",e)};A(async()=>{await F(),await D()});const F=async()=>{var e;p.loading=!0;try{const o=((e=(await boApiSvc.cmDashboard.getList({siteId:k.value,scope:"accessible"},v.value.uiNm,"\uB300\uC2DC\uBCF4\uB4DC\uC870\uD68C")).data)==null?void 0:e.data)||[];if(y.value){u.splice(0,u.length,...o.filter(d=>!N(d))),h.splice(0,h.length);return}const s=o.filter(N),a=M.value;u.splice(0,u.length,...s.filter(d=>d.ownerUserId===a)),h.splice(0,h.length,...s.filter(d=>d.ownerUserId!==a))}catch(n){c(coUtil.cofErrMsg(n,"\uC870\uD68C \uC624\uB958"),"error",0)}finally{p.loading=!1}},D=async()=>{var e;try{const o=((e=(await boApiSvc.cmDashboard.getMenuTree({siteId:k.value,scope:m.scope},v.value.uiNm,"\uBA54\uB274\uD2B8\uB9AC\uC870\uD68C")).data)==null?void 0:e.data)||[];if(!o.length){z();return}p.seeded=!1;const s={};o.forEach(w=>{const g=w.parentNodeId||"";(s[g]=s[g]||[]).push(w)});const a=[],d=(w,g)=>(s[w]||[]).forEach(f=>{a.push({key:f.dashboardMenuId,parentKey:f.parentNodeId||"",depth:g,nodeTypeCd:f.nodeTypeCd,nodeNm:f.nodeNm,dashboardId:f.dashboardId}),d(f.dashboardMenuId,g+1)});d("",0),t.splice(0,t.length,...a)}catch(n){console.warn("[\uBA54\uB274\uD2B8\uB9AC \uC870\uD68C \uC624\uB958]",n)}},z=()=>{const e=y.value?x.value.filter(n=>U(n)):x.value.slice();t.splice(0,t.length,...e.map(n=>({key:I(),parentKey:"",depth:0,nodeTypeCd:"ITEM",nodeNm:null,dashboardId:n.dashboardId}))),p.seeded=t.length>0},U=e=>{const n=e.uiCompNm||"";return n==="DashboardBoAppMonitor"||n==="DashboardBoEc"+(window.BO_SITE_NO||"01")},R=async()=>{try{const e=t.map(n=>({dashboardMenuId:n.key,parentNodeId:n.parentKey||null,nodeTypeCd:n.nodeTypeCd,nodeNm:n.nodeTypeCd==="FOLDER"?n.nodeNm||"\uC0C8 \uD3F4\uB354":null,dashboardId:n.dashboardId||null}));await boApiSvc.cmDashboard.saveMenuTree(e,{siteId:k.value,scope:m.scope},v.value.uiNm,"\uBA54\uB274\uD2B8\uB9AC\uC800\uC7A5"),p.seeded=!1,c("\uC88C\uCE21\uBA54\uB274 \uAD6C\uC131\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.","success"),await D(),j()}catch(e){c(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC624\uB958"),"error",0)}},P=()=>{t.push({key:I(),parentKey:"",depth:0,nodeTypeCd:"FOLDER",nodeNm:"\uC0C8 \uD3F4\uB354",dashboardId:null})},_=e=>{const n=t.findIndex(s=>s.key===e);if(n<0)return;const o=t[n];t.forEach(s=>{s.parentKey===e&&(s.parentKey=o.parentKey)}),t.splice(n,1),C()},C=()=>{const e={};t.forEach(s=>{(e[s.parentKey]=e[s.parentKey]||[]).push(s)});const n=[],o=(s,a)=>(e[s]||[]).forEach(d=>{d.depth=a,n.push(d),o(d.key,a+1)});o("",0),t.splice(0,t.length,...n)},q=(e,n)=>{r.from={src:e,payload:n}},b=()=>{r.from=null,r.overKey=null},G=e=>{r.overKey=e},V=e=>{const n=r.from;if(r.overKey=null,!n)return;const o=e?t.find(a=>a.key===e):null,s=o?o.nodeTypeCd==="FOLDER"?o.key:o.parentKey:"";if(n.src==="left"){const a=n.payload;if(T.value.has(a.dashboardId))return b(),c("\uC774\uBBF8 \uD2B8\uB9AC\uC5D0 \uC788\uB294 \uB300\uC2DC\uBCF4\uB4DC\uC785\uB2C8\uB2E4.","error");t.push({key:I(),parentKey:s,depth:0,nodeTypeCd:"ITEM",nodeNm:null,dashboardId:a.dashboardId})}else{const a=t.find(d=>d.key===n.payload);if(!a){b();return}if(o&&Y(o.key,a.key))return b(),c("\uC790\uAE30 \uD558\uC704\uB85C\uB294 \uC62E\uAE38 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error");if(a.parentKey=s,o&&o.nodeTypeCd!=="FOLDER"){const d=t.indexOf(a);t.splice(d,1),t.splice(t.indexOf(o)+1,0,a)}}C(),b()},Y=(e,n)=>{let o=t.find(s=>s.key===e);for(;o&&o.parentKey;){if(o.parentKey===n)return!0;o=t.find(s=>s.key===o.parentKey)}return!1},j=()=>{const e=y.value?"sys-dashboard-changed":"user-dashboard-changed";try{window.dispatchEvent(new CustomEvent(e))}catch{}},x=l(()=>u.concat(h)),T=l(()=>new Set(t.filter(e=>e.dashboardId).map(e=>e.dashboardId)));return{uiState:p,codes:E,cfAuthId:M,cfIsSys:y,cfMeta:v,menuNodes:t,menuDrag:r,cfAllDashes:x,cfMenuDashIds:T,fnNodeLabel:e=>{if(e.nodeTypeCd==="FOLDER")return e.nodeNm||"(\uD3F4\uB354)";const n=x.value.find(o=>o.dashboardId===e.dashboardId);return n?n.dashboardNm:"(\uC0AD\uC81C\uB41C \uB300\uC2DC\uBCF4\uB4DC)"},fnScopeIcon:O,fnScopeLabel:L,onMenuDragStart:q,onMenuDragEnd:b,onMenuDragOver:G,fnDropOn:V,handleBtnAction:B}},template:`
<bo-page :title="cfMeta.title"
  :desc-summary="'\uC88C\uCE21\uBA54\uB274 ' + cfMeta.group + ' \uADF8\uB8F9\uC5D0 \uBCF4\uC77C \uB300\uC2DC\uBCF4\uB4DC\uB97C \uD3F4\uB354\uB85C \uBB36\uC5B4 \uC21C\uC11C\xB7\uACC4\uCE35\uC73C\uB85C \uAD6C\uC131\uD569\uB2C8\uB2E4.'">
  <bo-container>
    <div style="padding:10px 12px;">
      <div style="font-size:11px;color:#888;margin-bottom:8px;">
        \uC88C\uCE21 \uBAA9\uB85D\uC5D0\uC11C <b>\uC6B0\uCE21 \uD2B8\uB9AC\uB85C \uB4DC\uB798\uADF8</b>\uD574 \uC88C\uCE21\uBA54\uB274\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4. \uD3F4\uB354\uB85C \uBB36\uACE0, \uD2B8\uB9AC \uC548\uC5D0\uC11C \uB04C\uC5B4 \uC704\uCE58\uB97C \uBC14\uAFB8\uACE0,
        <b>\u2715</b> \uB85C \uBA54\uB274\uC5D0\uC11C \uBE84 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uB300\uC2DC\uBCF4\uB4DC\uB294 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4). \uD2B8\uB9AC\uAC00 \uBE44\uC5B4 \uC788\uC73C\uBA74 \uBCFC \uC218 \uC788\uB294 \uB300\uC2DC\uBCF4\uB4DC\uAC00 \uC804\uBD80 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
        <span v-if="cfIsSys" style="color:#c2410c;font-weight:700;">\uC774 \uC124\uC815\uC740 \uC0AC\uC774\uD2B8 \uACF5\uD1B5\uC774\uB77C \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uAC19\uAC8C \uBCF4\uC785\uB2C8\uB2E4.</span></div>
      <div style="display:flex;align-items:flex-start;gap:10px;">
        <!-- \uC88C: \uBCFC \uC218 \uC788\uB294 \uB300\uC2DC\uBCF4\uB4DC -->
        <div style="width:340px;flex-shrink:0;border:1px solid #e5e7eb;border-radius:8px;background:#fff;display:flex;flex-direction:column;height:480px;">
          <div style="flex-shrink:0;padding:8px 10px;border-bottom:1px solid #f0f0f0;font-size:11.5px;font-weight:800;color:#444;">
            \u{1F4CB} {{ cfMeta.listNm }} ({{ cfAllDashes.length }})</div>
          <div style="flex:1;min-height:0;overflow-y:auto;padding:8px;">
            <div v-for="d in cfAllDashes" :key="d.dashboardId"
              draggable="true" @dragstart="onMenuDragStart('left', d)" @dragend="onMenuDragEnd"
              :style="{ opacity: cfMenuDashIds.has(d.dashboardId) ? 0.45 : 1 }"
              style="display:flex;align-items:center;gap:6px;border:1px solid #eee;border-radius:6px;padding:6px 8px;margin-bottom:5px;cursor:grab;background:#fafbfc;">
              <span style="font-size:12px;flex-shrink:0;">{{ cfIsSys ? cfMeta.icon : fnScopeIcon(d.shareScopeCd) }}</span>
              <span style="flex:1;min-width:0;">
                <span style="display:block;font-size:11.5px;font-weight:700;color:#444;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ d.dashboardNm }}</span>
                <span style="display:block;font-size:9.5px;color:#aaa;">
                  <template v-if="cfIsSys">\uACF5\uC6A9 \xB7 {{ d.uiCompNm || '-' }}</template>
                  <template v-else>\uC791\uC131\uC790 {{ d.ownerUserId === cfAuthId ? '\uB098' : (d.ownerUserId || '-') }} \xB7 {{ fnScopeLabel(d.shareScopeCd) }}</template></span>
              </span>
              <span v-if="cfMenuDashIds.has(d.dashboardId)" style="flex-shrink:0;font-size:9.5px;color:#4338ca;background:#eef2ff;padding:1px 6px;border-radius:8px;">\uB2F4\uAE40</span>
            </div>
            <div v-if="!cfAllDashes.length" style="font-size:11px;color:#aaa;padding:6px;">{{ cfMeta.listNm }}\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
          </div>
        </div>
        <!-- \uC6B0: \uC88C\uCE21\uBA54\uB274 \uD2B8\uB9AC -->
        <div style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:8px;background:#fff;display:flex;flex-direction:column;height:480px;">
          <div style="flex-shrink:0;display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid #f0f0f0;">
            <span style="font-size:11.5px;font-weight:800;color:#444;">
              \u{1F5C2} \uC88C\uCE21\uBA54\uB274 '{{ cfMeta.group }}' \uD2B8\uB9AC ({{ menuNodes.length }})</span>
            <button class="btn btn-xs" @click="handleBtnAction('menu-addFolder')"
              style="background:#fffbeb;color:#b45309;border:1px solid #fde68a;font-weight:700;">\uFF0B \uD3F4\uB354 \uCD94\uAC00</button>
          </div>
          <!-- \uC800\uC7A5\uB41C \uD2B8\uB9AC\uAC00 \uC5C6\uC5B4 \uD604\uC7AC \uC88C\uCE21\uBA54\uB274 \uC0C1\uD0DC\uB97C \uADF8\uB300\uB85C \uBD88\uB7EC\uC628 \uACBD\uC6B0 -->
          <div v-if="uiState.seeded" style="flex-shrink:0;padding:6px 10px;background:#fffbeb;border-bottom:1px solid #fde68a;font-size:10.5px;color:#b45309;">
            \uC544\uC9C1 \uC800\uC7A5\uB41C \uAD6C\uC131\uC774 \uC5C6\uC5B4 <b>\uC9C0\uAE08 \uC88C\uCE21\uBA54\uB274\uC5D0 \uBCF4\uC774\uB294 \uADF8\uB300\uB85C</b> \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. \uC6D0\uD558\uB294 \uB300\uB85C \uBC14\uAFBC \uB4A4 [\uC800\uC7A5]\uD558\uC138\uC694.</div>
          <!-- \uD2B8\uB9AC \uBCF8\uBB38 (\uBE48 \uACF3\uC5D0 \uB193\uC73C\uBA74 \uCD5C\uC0C1\uC704 \uB05D) -->
          <div style="flex:1;min-height:0;overflow-y:auto;padding:8px;"
            @dragover.prevent="onMenuDragOver(null)" @drop.prevent="fnDropOn(null)"
            :style="{ outline: menuDrag.overKey === null && menuDrag.from ? '2px dashed #6366f1' : 'none' }">
            <div v-for="n in menuNodes" :key="n.key"
              draggable="true" @dragstart.stop="onMenuDragStart('tree', n.key)" @dragend="onMenuDragEnd"
              @dragover.prevent.stop="onMenuDragOver(n.key)" @drop.prevent.stop="fnDropOn(n.key)"
              :style="{ marginLeft: (n.depth * 20) + 'px',
                        background: menuDrag.overKey === n.key ? '#eef2ff' : (n.nodeTypeCd === 'FOLDER' ? '#fffbeb' : '#fff'),
                        border: '1px solid ' + (menuDrag.overKey === n.key ? '#6366f1' : '#eee') }"
              style="display:flex;align-items:center;gap:6px;border-radius:6px;padding:5px 8px;margin-bottom:4px;cursor:grab;">
              <span style="font-size:12px;flex-shrink:0;">
                {{ n.nodeTypeCd === 'FOLDER' ? '\u{1F4C1}' : cfMeta.icon }}</span>
              <input v-if="n.nodeTypeCd === 'FOLDER'" v-model="n.nodeNm"
                style="flex:1;min-width:0;font-size:11.5px;font-weight:700;color:#b45309;border:1px solid #fde68a;border-radius:4px;padding:2px 6px;background:#fff;" />
              <span v-else style="flex:1;min-width:0;font-size:11.5px;font-weight:700;color:#444;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ fnNodeLabel(n) }}</span>
              <button title="\uBA54\uB274\uC5D0\uC11C \uBE7C\uAE30" @click.stop="handleBtnAction('menu-remove', n.key)"
                style="flex-shrink:0;border:none;background:none;cursor:pointer;font-size:12px;color:#dc2626;padding:0 3px;">\u2715</button>
            </div>
            <div v-if="!menuNodes.length" style="font-size:11px;color:#aaa;padding:16px;text-align:center;">
              \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4 \u2014 \uC88C\uCE21\uC5D0\uC11C \uB04C\uC5B4\uB2E4 \uB193\uC73C\uC138\uC694.<br>\uC774\uB300\uB85C \uC800\uC7A5\uD558\uBA74 \uC88C\uCE21\uBA54\uB274\uC5D0 {{ cfMeta.listNm }}\uAC00 \uC804\uBD80 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</div>
          </div>
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn_save" @click="handleBtnAction('menu-save')">\uC800\uC7A5</button>
        <button class="btn btn_reset" @click="handleBtnAction('menu-reset')">\uB418\uB3CC\uB9AC\uAE30</button>
      </div>
    </div>
  </bo-container>
</bo-page>
`};
