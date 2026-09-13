(function(c){"use strict";if(!document.getElementById("co-noti-bell-style")){const o=document.createElement("style");o.id="co-noti-bell-style",o.textContent=["@keyframes co-noti-shake{"," 0%,100%{transform:rotate(0)} 8%{transform:rotate(-16deg)} 16%{transform:rotate(14deg)}"," 24%{transform:rotate(-12deg)} 32%{transform:rotate(10deg)} 40%{transform:rotate(-8deg)}"," 48%{transform:rotate(6deg)} 56%{transform:rotate(-4deg)} 64%{transform:rotate(3deg)}"," 72%{transform:rotate(-2deg)} 80%{transform:rotate(1deg)}}","@keyframes co-noti-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}",".co-noti-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;"," width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:15px;padding:0;transition:background .15s;}",".co-noti-btn.ctx-bo{background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.22);color:#fff;}",".co-noti-btn.ctx-bo:hover{background:rgba(255,255,255,.24);}",".co-noti-btn.ctx-fo{background:transparent;border:1px solid var(--border,#e3e3e3);color:var(--text-primary,#333);}",".co-noti-btn.ctx-fo:hover{background:rgba(0,0,0,.05);}",".co-noti-btn.is-shake .co-noti-ico{animation:co-noti-shake 2s ease-in-out;transform-origin:50% 12%;}",".co-noti-btn.is-shake .co-noti-badge{animation:co-noti-pulse .5s ease-in-out 4;}",".co-noti-ico{display:inline-block;line-height:1;}",".co-noti-badge{position:absolute;top:-5px;right:-5px;min-width:16px;height:16px;padding:0 4px;border-radius:9px;"," background:#ef4444;color:#fff;font-size:10px;font-weight:800;line-height:16px;text-align:center;"," box-shadow:0 0 0 2px rgba(0,0,0,.22);}",".co-noti-dd{position:absolute;right:0;top:calc(100% + 8px);width:376px;background:#fff;border:1px solid #e5e7eb;"," border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.20);z-index:9200;overflow:hidden;}",".co-noti-dd-hd{display:flex;align-items:center;gap:6px;padding:9px 12px;border-bottom:1px solid #f0f0f0;background:#fafbfc;}",".co-noti-row{position:relative;display:flex;gap:8px;padding:9px 10px 9px 14px;border-bottom:1px solid #f2f4f7;"," cursor:pointer;transition:background .12s;}",'.co-noti-row::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:transparent;}',".co-noti-row.is-read{background:#fff;}",".co-noti-row.is-read:hover{background:#f6f7f9;}",".co-noti-row.is-read .co-noti-title{color:#8b9099;font-weight:400;}",".co-noti-row.is-read .co-noti-meta{color:#b6bbc3;}",".co-noti-row.is-read .co-noti-emoji{opacity:.45;filter:grayscale(.7);}",".co-noti-row.is-unread{background:#fbfcff;}",".co-noti-row.is-unread:hover{background:#f2f6ff;}",".co-noti-row.is-unread::before{background:var(--noti-accent,#2563eb);}",".co-noti-row.is-unread .co-noti-title{color:#111827;font-weight:700;}",".co-noti-row.is-unread .co-noti-meta{color:#6b7280;}",".co-noti-title{display:block;font-size:12.5px;line-height:1.45;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}",".co-noti-meta{display:block;font-size:10.5px;margin-top:2px;}",".co-noti-dot{flex-shrink:0;width:7px;height:7px;border-radius:50%;margin-top:6px;}",".co-noti-row.is-read .co-noti-dot{background:#fff;border:1.5px solid #d5d9df;}",".co-noti-new{display:inline-block;margin-left:6px;padding:0 4px;border-radius:3px;background:#ef4444;color:#fff;"," font-size:9px;font-weight:800;line-height:14px;vertical-align:1px;}",".co-noti-act{flex-shrink:0;display:flex;align-items:flex-start;gap:2px;padding-top:2px;}",".co-noti-ibtn{width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;padding:0;"," border:1px solid #e5e7eb;background:#fff;border-radius:5px;cursor:pointer;font-size:10px;color:#6b7280;line-height:1;}",".co-noti-ibtn:hover{background:#eef2ff;border-color:#c7d2fe;color:#4338ca;}",".co-noti-ibtn.is-on{background:#eef2ff;border-color:#c7d2fe;color:#4338ca;}",".co-noti-body{padding:8px 12px 10px 26px;border-bottom:1px solid #f2f4f7;background:#fbfbfd;"," font-size:11.5px;color:#4b5563;white-space:pre-wrap;word-break:break-word;line-height:1.6;max-height:180px;overflow-y:auto;}",".co-noti-body-err{background:#fff5f5;color:#c62828;font-family:monospace;font-size:11px;}",".co-noti-b{display:inline-flex;align-items:center;gap:4px;padding:3px 9px;border-radius:6px;"," border:1px solid #d8dce3;background:#fff;color:#4b5563;font-size:11px;font-weight:600;"," cursor:pointer;line-height:1.7;white-space:nowrap;}",".co-noti-b:hover{background:#f3f5f8;}",".co-noti-b.is-on{background:#2563eb;border-color:#2563eb;color:#fff;}",".co-noti-b.is-danger{border-color:#f0b4b4;color:#dc2626;}",".co-noti-b.is-danger:hover{background:#fef2f2;}"].join(`
`),document.head.appendChild(o)}c.CoNotiBell={name:"CoNotiBell",props:{ctx:{type:String,default:"bo"},navigate:{type:Function,default:null}},setup(o){const{reactive:f,computed:a,watch:p,onMounted:b,onBeforeUnmount:x}=Vue,n=o.ctx==="fo"?c.foNotiStore:c.boNotiStore,t=f({ddShow:!1,listShow:!1,shaking:!1,filter:"all",selectedKey:null,expanded:{}});let l=null,s=null;const u=a(()=>n.cfUnreadCount.value),g=a(()=>n.cfTypeCounts.value),h=a(()=>n.items.slice(0,6)),y=a(()=>t.filter==="all"?n.items:n.items.filter(e=>e.type===t.filter)),k=a(()=>t.selectedKey==null?null:n.items.find(e=>e.key===t.selectedKey)||null),m=a(()=>[{key:"all",label:"\uC804\uCCB4",icon:"\u{1F4CB}"}].concat(n.TYPE_ORDER.map(e=>({key:e,label:n.TYPE_META[e].label,icon:n.TYPE_META[e].icon})))),w=a(()=>o.ctx==="fo"?"fo-modal":"bo-modal"),v=(e,i={})=>{if(e==="bell-toggle"){t.ddShow=!t.ddShow,t.ddShow&&n.fnLoadServer();return}else if(e==="list-open"){t.ddShow=!1,t.listShow=!0,t.selectedKey=null,n.fnLoadServer();return}else if(e==="list-close"){t.listShow=!1,t.selectedKey=null;return}else{if(e==="noti-reload")return n.fnLoadServer();if(e==="noti-markAllRead")return n.fnMarkAllRead();if(e==="noti-clear")return t.selectedKey=null,n.fnClear();if(e==="detail-close"){t.selectedKey=null;return}else{if(e==="detail-markUnread")return n.fnMarkUnread(t.selectedKey);console.warn("[handleBtnAction] unknown cmd:",e)}}},S=(e,i={})=>{if(e==="noti-rowSelect")return z(i);if(e==="noti-rowExpand")return A(i);if(e==="noti-rowGo")return E(i);if(e==="noti-rowRemove")return t.selectedKey===i.key&&(t.selectedKey=null),n.fnRemove(i.key);if(e==="filter-select"){t.filter=i,t.selectedKey=null;return}else console.warn("[handleSelectAction] unknown cmd:",e)},A=e=>{if(e){if(t.expanded[e.key]){delete t.expanded[e.key];return}t.expanded[e.key]=!0,n.fnMarkRead(e.key)}},z=e=>{e&&(n.fnMarkRead(e.key),t.ddShow=!1,t.listShow=!0,t.selectedKey=e.key)},E=e=>{!e||!e.linkPage||!o.navigate||(n.fnMarkRead(e.key),t.ddShow=!1,t.listShow=!1,o.navigate(e.linkPage))},r=e=>n.fnTypeMeta(e),C=e=>n.fnFmtTime(e),M=e=>String(e||"").replace(/^https?:\/\/[^/]+/,""),R=e=>"co-noti-row "+(e.read?"is-read":"is-unread"),T=e=>({"--noti-accent":r(e.type).color}),B=e=>e.read?{}:{background:r(e.type).color},U=e=>!!t.expanded[e.key],K=e=>!!(e.linkPage&&o.navigate),d=()=>{t.ddShow=!1};return p(()=>n.shakeSeq.value,()=>{l&&clearTimeout(l),t.shaking=!1,requestAnimationFrame(()=>{t.shaking=!0}),l=setTimeout(()=>{t.shaking=!1,l=null},2e3)}),b(()=>{document.addEventListener("click",d),n.fnLoadServer(),s=setInterval(()=>n.fnLoadServer(),6e4)}),x(()=>{document.removeEventListener("click",d),l&&clearTimeout(l),s&&clearInterval(s)}),{uiState:t,cfUnread:u,cfCounts:g,cfRecent:h,cfFiltered:y,cfSelected:k,cfTabs:m,cfModalTag:w,fnMeta:r,fnFmtTime:C,fnShortUrl:M,fnRowClass:R,fnRowStyle:T,fnDotStyle:B,fnExpanded:U,fnCanGo:K,handleBtnAction:v,handleSelectAction:S}},template:`
<div style="position:relative;flex-shrink:0;" @click.stop>
  <!-- ===== \u25A0. \uC885 \uC544\uC774\uCF58 + \uCE74\uC6B4\uD2B8 \uBC43\uC9C0 ====================================== -->
  <button class="co-noti-btn" :class="[ 'ctx-' + ctx, uiState.shaking ? 'is-shake' : '' ]"
    :title="'\uC54C\uB9BC ' + cfCounts.all + '\uAC74 \xB7 \uC548\uC77D\uC74C ' + cfUnread + '\uAC74'"
    @click="handleBtnAction('bell-toggle')">
    <span class="co-noti-ico">\u{1F514}</span>
    <span v-if="cfUnread" class="co-noti-badge">{{ cfUnread > 99 ? '99+' : cfUnread }}</span>
  </button>

  <!-- ===== \u25A0. \uCD5C\uADFC \uC54C\uB9BC \uB4DC\uB86D\uB2E4\uC6B4 ========================================== -->
  <div v-if="uiState.ddShow" class="co-noti-dd">
    <div class="co-noti-dd-hd">
      <span style="font-size:12px;font-weight:700;color:#374151;">\uC54C\uB9BC</span>
      <span style="font-size:11px;color:#9ca3af;">{{ cfCounts.all }}\uAC74 \xB7 \uC548\uC77D\uC74C {{ cfUnread }}</span>
      <span style="flex:1;"></span>
      <button class="co-noti-b" title="\uC0C8\uB85C\uACE0\uCE68" @click="handleBtnAction('noti-reload')">\u21BB</button>
      <button v-if="cfUnread" class="co-noti-b" title="\uBAA8\uB450 \uC77D\uC74C \uCC98\uB9AC"
        @click="handleBtnAction('noti-markAllRead')">\uBAA8\uB450\uC77D\uC74C</button>
      <button class="co-noti-b" title="\uC54C\uB9BC\uD568 \uC804\uCCB4\uBCF4\uAE30"
        @click="handleBtnAction('list-open')">\u26F6 \uC804\uCCB4\uBCF4\uAE30</button>
    </div>
    <div style="max-height:400px;overflow-y:auto;">
      <template v-for="n in cfRecent" :key="n.key">
        <div :class="fnRowClass(n)" :style="fnRowStyle(n)"
          @click="handleSelectAction('noti-rowSelect', n)">
          <span class="co-noti-dot" :style="fnDotStyle(n)"></span>
          <span class="co-noti-emoji" style="font-size:13px;flex-shrink:0;line-height:1.4;">{{ fnMeta(n.type).icon }}</span>
          <span style="flex:1;min-width:0;">
            <span class="co-noti-title" :title="n.title">
              {{ n.title }}<span v-if="!n.read" class="co-noti-new">NEW</span>
            </span>
            <span class="co-noti-meta">
              {{ fnMeta(n.type).label }} \xB7 {{ fnFmtTime(n.time) }}
              <span v-if="n.count > 1" style="color:#dc2626;font-weight:700;">\xB7 {{ n.count }}\uD68C</span>
            </span>
          </span>
          <!-- \uC6B0\uCE21 \uC544\uC774\uCF58: \uBC14\uB85C\uD3BC\uCE68 / \uC0C1\uC138\uD654\uBA74 \uC774\uB3D9 -->
          <span class="co-noti-act">
            <button class="co-noti-ibtn" :class="fnExpanded(n) ? 'is-on' : ''"
              :title="fnExpanded(n) ? '\uC811\uAE30' : '\uB0B4\uC6A9 \uD3BC\uCCD0\uBCF4\uAE30'"
              @click.stop="handleSelectAction('noti-rowExpand', n)">{{ fnExpanded(n) ? '\u25B4' : '\u25BE' }}</button>
            <button v-if="fnCanGo(n)" class="co-noti-ibtn" title="\uC0C1\uC138\uD654\uBA74\uC73C\uB85C \uC774\uB3D9"
              @click.stop="handleSelectAction('noti-rowGo', n)">\u2197</button>
          </span>
        </div>
        <!-- \uC778\uB77C\uC778 \uD3BC\uCE68 \uBCF8\uBB38 (\uBAA8\uB2EC \uC5C6\uC774 \uADF8 \uC790\uB9AC\uC5D0\uC11C \uD655\uC778) -->
        <div v-if="fnExpanded(n)" class="co-noti-body" :class="n.type === 'error' ? 'co-noti-body-err' : ''">{{ n.message || '(\uB0B4\uC6A9 \uC5C6\uC74C)' }}</div>
      </template>
      <div v-if="!cfRecent.length" style="padding:28px 12px;text-align:center;color:#bbb;font-size:12px;">
        \uBC1B\uC740 \uC54C\uB9BC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
    </div>
  </div>

  <!-- ===== \u25A0. \uC54C\uB9BC\uD568 \uBAA8\uB2EC (\uC804\uCCB4\uBCF4\uAE30) ====================================== -->
  <component :is="cfModalTag" :show="uiState.listShow" title="\uC54C\uB9BC\uD568" width="1000px" min-height="520px" max-height="86vh"
    @close="handleBtnAction('list-close')">
    <!-- ===== \u25A0.\u25A0. \uC720\uD615 \uD544\uD130 + \uD234\uBC14 ======================================== -->
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
      <button v-for="t in cfTabs" :key="t.key" class="co-noti-b"
        :class="uiState.filter === t.key ? 'is-on' : ''"
        @click="handleSelectAction('filter-select', t.key)">
        {{ t.icon }} {{ t.label }} <span style="opacity:.75;">{{ cfCounts[t.key] || 0 }}</span>
      </button>
      <span style="flex:1;"></span>
      <span style="font-size:11px;color:#9ca3af;">\uCD1D {{ cfCounts.all }}\uAC74 \xB7 \uC548\uC77D\uC74C {{ cfUnread }}\uAC74</span>
      <button class="co-noti-b" title="\uC0C8\uB85C\uACE0\uCE68" @click="handleBtnAction('noti-reload')">\u21BB</button>
      <button v-if="cfUnread" class="co-noti-b" @click="handleBtnAction('noti-markAllRead')">\uBAA8\uB450\uC77D\uC74C</button>
      <button class="co-noti-b is-danger" @click="handleBtnAction('noti-clear')">\uC804\uCCB4\uC0AD\uC81C</button>
    </div>

    <!-- ===== \u25A0.\u25A0. \uC54C\uB9BC \uBAA9\uB85D =============================================== -->
    <div style="border:1px solid #eef0f3;border-radius:6px;background:#fff;max-height:320px;overflow-y:auto;">
      <template v-for="n in cfFiltered" :key="n.key">
        <div :class="fnRowClass(n)" :style="fnRowStyle(n)"
          @click="handleSelectAction('noti-rowSelect', n)">
          <span class="co-noti-dot" :style="fnDotStyle(n)"></span>
          <span class="co-noti-emoji" style="font-size:14px;flex-shrink:0;line-height:1.4;">{{ fnMeta(n.type).icon }}</span>
          <span style="flex:1;min-width:0;">
            <span class="co-noti-title" :title="n.title">
              {{ n.title }}<span v-if="!n.read" class="co-noti-new">NEW</span>
            </span>
            <span class="co-noti-meta">
              <span class="badge" :style="{ background: fnMeta(n.type).bg, color: fnMeta(n.type).color, border: '1px solid ' + fnMeta(n.type).border, fontSize: '10px' }">
                {{ fnMeta(n.type).label }}
              </span>
              <span style="margin-left:6px;">{{ fnFmtTime(n.time) }}</span>
              <span v-if="n.count > 1" style="color:#dc2626;font-weight:700;margin-left:6px;">{{ n.count }}\uD68C \uBC18\uBCF5</span>
              <span v-if="n.url" style="margin-left:6px;font-family:monospace;">{{ fnShortUrl(n.url) }}</span>
              <span v-if="n.local" style="margin-left:6px;color:#c0c4cc;" title="\uBE0C\uB77C\uC6B0\uC800\uC5D0\uB9CC \uBCF4\uAD00 (DB \uBBF8\uC800\uC7A5)">\xB7 \uB85C\uCEEC</span>
            </span>
          </span>
          <span class="co-noti-act">
            <button class="co-noti-ibtn" :class="fnExpanded(n) ? 'is-on' : ''"
              :title="fnExpanded(n) ? '\uC811\uAE30' : '\uB0B4\uC6A9 \uD3BC\uCCD0\uBCF4\uAE30'"
              @click.stop="handleSelectAction('noti-rowExpand', n)">{{ fnExpanded(n) ? '\u25B4' : '\u25BE' }}</button>
            <button v-if="fnCanGo(n)" class="co-noti-ibtn" title="\uC0C1\uC138\uD654\uBA74\uC73C\uB85C \uC774\uB3D9"
              @click.stop="handleSelectAction('noti-rowGo', n)">\u2197</button>
            <button class="co-noti-ibtn" title="\uC774 \uC54C\uB9BC \uC0AD\uC81C"
              @click.stop="handleSelectAction('noti-rowRemove', n)">\u2715</button>
          </span>
        </div>
        <div v-if="fnExpanded(n)" class="co-noti-body" :class="n.type === 'error' ? 'co-noti-body-err' : ''">{{ n.message || '(\uB0B4\uC6A9 \uC5C6\uC74C)' }}</div>
      </template>
      <div v-if="!cfFiltered.length" style="padding:36px 12px;text-align:center;color:#bbb;font-size:12px;">
        \uD574\uB2F9 \uC720\uD615\uC758 \uC54C\uB9BC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
    </div>

    <!-- ===== \u25A0.\u25A0. \uC0C1\uC138 (\uC624\uB958\uB294 500 \uD654\uBA74\uACFC \uB3D9\uC77C \uAD6C\uC131) ======================== -->
    <div v-if="cfSelected" style="margin-top:12px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="font-size:12px;font-weight:700;color:#374151;">
          {{ fnMeta(cfSelected.type).icon }} {{ cfSelected.title }}
        </span>
        <span style="flex:1;"></span>
        <button v-if="fnCanGo(cfSelected)" class="co-noti-b"
          @click="handleSelectAction('noti-rowGo', cfSelected)">\uC0C1\uC138\uD654\uBA74\uC73C\uB85C \uC774\uB3D9 \u2197</button>
        <button class="co-noti-b" title="\uC548\uC77D\uC74C\uC73C\uB85C \uB418\uB3CC\uB9AC\uAE30"
          @click="handleBtnAction('detail-markUnread')">\uC548\uC77D\uC74C</button>
        <button class="co-noti-b" @click="handleBtnAction('detail-close')">\uB2EB\uAE30</button>
      </div>

      <!-- \uC624\uB958: \uB2E4\uD06C URL \uBC14 + \uD654\uBA74>\uAE30\uB2A5 + \uBE68\uAC04 \uBA54\uC2DC\uC9C0 \uBCF8\uBB38 -->
      <template v-if="cfSelected.type === 'error'">
        <div style="display:flex;align-items:center;gap:8px;background:#1e1e2e;color:#cdd6f4;padding:10px 14px;border-radius:8px 8px 0 0;font-family:monospace;font-size:13px;flex-wrap:wrap;">
          <span v-if="cfSelected.method" style="background:#f38ba8;color:#1e1e2e;padding:2px 8px;border-radius:4px;font-weight:700;font-size:12px;">
            {{ cfSelected.method }}
          </span>
          <span style="flex:1;word-break:break-all;color:#89dceb;">{{ cfSelected.url }}</span>
          <span style="background:#fab387;color:#1e1e2e;padding:2px 8px;border-radius:4px;font-weight:700;font-size:12px;">
            {{ cfSelected.status }}
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;background:#2a2a3e;padding:6px 14px;border-top:1px solid #444466;font-family:monospace;font-size:11px;flex-wrap:wrap;">
          <span style="color:#94a3b8;font-size:10px;">\uD654\uBA74 &gt; \uAE30\uB2A5:</span>
          <span style="color:#e879f9;font-weight:700;">{{ cfSelected.uiLabel || '-' }}</span>
          <span style="color:#64748b;margin:0 6px;">|</span>
          <span style="color:#94a3b8;font-size:10px;">\uBC1C\uC0DD:</span>
          <span style="color:#38bdf8;font-weight:700;">{{ fnFmtTime(cfSelected.time) }}</span>
          <span v-if="cfSelected.count > 1" style="color:#fab387;font-weight:700;">\xB7 {{ cfSelected.count }}\uD68C \uBC18\uBCF5</span>
        </div>
        <div style="font-size:12px;color:#c62828;background:#fff5f5;padding:10px 14px;border-radius:0 0 8px 8px;border:1px solid #fca5a5;border-top:none;font-family:monospace;white-space:pre-wrap;word-break:break-all;">{{ cfSelected.message || '(\uBA54\uC2DC\uC9C0 \uC5C6\uC74C)' }}</div>
      </template>

      <!-- \uACF5\uC9C0/\uC218\uC2E0\uC54C\uB9BC/\uD2B9\uC774\uC0AC\uD56D: \uC720\uD615 \uC0C9\uC0C1 \uCE74\uB4DC -->
      <div v-else
        :style="{ background: fnMeta(cfSelected.type).bg, border: '1px solid ' + fnMeta(cfSelected.type).border }"
        style="padding:12px 14px;border-radius:8px;font-size:12.5px;color:#374151;white-space:pre-wrap;word-break:break-word;line-height:1.6;min-height:60px;">{{ cfSelected.message || '(\uB0B4\uC6A9 \uC5C6\uC74C)' }}</div>
    </div>
  </component>
</div>
`}})(window);
