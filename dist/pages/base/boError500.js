window.boError500={name:"BoError500",props:["navigate","message","errors"],data(){return{showErrorList:!0,expandedIds:new Set,allExpanded:!1,_mountTime:Date.now()}},computed:{cfErrorList(){return this.errors||[]},cfErrorColumns(){return[{key:"_exp",label:"",style:"width:22px",align:"center",noEllipsis:!0,linkToggle:{active:e=>this.expandedIds.has(e._rid),onClick:e=>this.toggleRow(e._rid),title:"\uC0C1\uC138\uBCF4\uAE30",activeStyle:"color:#666;font-size:11px;user-select:none;",baseStyle:"color:#bbb;font-size:11px;user-select:none;"},fmt:(e,t)=>this.expandedIds.has(t._rid)?"\u25B2":"\u25BC"},{key:"time",label:"\uC2DC\uAC04",style:"width:66px",align:"center",mono:!0,fmt:(e,t)=>this.fnFmtTime(t.time)},{key:"status",label:"\uCF54\uB4DC",style:"width:50px",align:"center",badge:e=>"badge-orange"},{key:"method",label:"Method",style:"width:64px",align:"center",mono:!0},{key:"url",label:"URL",mono:!0,cellTitle:!0},{key:"uiLabel",label:"\uD654\uBA74 > \uAE30\uB2A5",style:"width:150px",cellTitle:!0}]},cfParsed(){if(!this.message)return null;const e=this.message.split(`
`),t=e[0]||"";let n="",d="",l="",a="",r="",o="";const s=t.match(/^(GET|POST|PUT|DELETE|PATCH)\s+(\S+)\s*(\d*)\s*(?:\[([^\]>]*)(?:>\s*([^\]]*))?\])?(.*)$/i);if(s?(n=s[1].toUpperCase(),d=s[2],l=s[3]||"",r=(s[4]||"").trim(),o=(s[5]||"").trim(),a=e.slice(1).join(`
`).trim()):(e.forEach(i=>{const p=i.match(/^Method:\s*(.+)$/i),c=i.match(/^URL:\s*(.+)$/i);p&&(n=p[1].trim()),c&&(d=c[1].trim())}),a=e.filter(i=>!/^(Method:|URL:)/i.test(i)).join(`
`).trim()),!r&&!o&&a){const i=a.match(/필수 헤더 누락[:\s]+(.+)/i);i&&(r="(\uB204\uB77D)",o=i[1].trim())}return{method:n,url:d,status:l,uiNm:r,cmdNm:o,detail:a||this.message}}},methods:{onReload(){window.location.reload()},fnFmtTime(e){const t=e instanceof Date?e:new Date(e);return String(t.getHours()).padStart(2,"0")+":"+String(t.getMinutes()).padStart(2,"0")+":"+String(t.getSeconds()).padStart(2,"0")},toggleRow(e){this.expandedIds.has(e)?this.expandedIds.delete(e):this.expandedIds.add(e)},isRowExpanded(e){return this.expandedIds.has(e._rid)},toggleExpandAll(){this.allExpanded?(this.expandedIds.clear(),this.allExpanded=!1):(this.cfErrorList.forEach(e=>this.expandedIds.add(e._rid)),this.allExpanded=!0)},fnRowStyle(e){const t=e.time instanceof Date?e.time:new Date(e.time);return this._mountTime-t.getTime()<=1e4?"font-weight:700;":""}},template:`
<div>
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 20px;text-align:center;min-height:60vh;">
    <div style="font-size:80px;margin-bottom:16px;">\u{1F4A5}</div>
    <div style="font-size:48px;font-weight:800;color:#1a1a2e;letter-spacing:-1px;">500</div>
    <div style="font-size:18px;font-weight:600;color:#555;margin-top:8px;">\uC11C\uBC84 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4</div>
    <div style="font-size:13px;color:#999;margin-top:12px;max-width:520px;">
      \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694. \uBB38\uC81C\uAC00 \uC9C0\uC18D\uB418\uBA74 \uC2DC\uC2A4\uD15C \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4.
    </div>

    <!-- \uC5D0\uB7EC \uC0C1\uC138 \uBC15\uC2A4 -->
    <div v-if="message" style="margin-top:16px;max-width:760px;width:100%;text-align:left;">
      <!-- Method + URL \uAC15\uC870 \uD589 -->
      <div v-if="cfParsed &amp;&amp; (cfParsed.method || cfParsed.url)"
        style="display:flex;align-items:center;gap:8px;background:#1e1e2e;color:#cdd6f4;padding:10px 14px;border-radius:8px 8px 0 0;font-family:monospace;font-size:13px;flex-wrap:wrap;">
        <span v-if="cfParsed.method"
          style="background:#f38ba8;color:#1e1e2e;padding:2px 8px;border-radius:4px;font-weight:700;font-size:12px;">
          {{ cfParsed.method }}
        </span>
        <span style="flex:1;word-break:break-all;color:#89dceb;">{{ cfParsed.url }}</span>
        <span v-if="cfParsed.status"
          style="background:#fab387;color:#1e1e2e;padding:2px 8px;border-radius:4px;font-weight:700;font-size:12px;">
          {{ cfParsed.status }}
        </span>
      </div>
      <!-- x-ui-nm / x-cmd-nm \uD5E4\uB354 \uC815\uBCF4 \uD589 -->
      <div v-if="cfParsed &amp;&amp; (cfParsed.uiNm || cfParsed.cmdNm)"
        style="display:flex;align-items:center;gap:6px;background:#2a2a3e;padding:6px 14px;border-top:1px solid #444466;font-family:monospace;font-size:11px;flex-wrap:wrap;">
        <span style="color:#94a3b8;font-size:10px;">x-ui-nm:</span>
        <span style="color:#e879f9;font-weight:700;">{{ cfParsed.uiNm || '-' }}</span>
        <span style="color:#64748b;margin:0 6px;">|</span>
        <span style="color:#94a3b8;font-size:10px;">x-cmd-nm:</span>
        <span style="color:#38bdf8;font-weight:700;">{{ cfParsed.cmdNm || '-' }}</span>
      </div>
      <!-- \uC5D0\uB7EC \uBA54\uC2DC\uC9C0 \uBCF8\uBB38 -->
      <div style="font-size:12px;color:#c62828;background:#fff5f5;padding:10px 14px;border-radius:0 0 8px 8px;border:1px solid #fca5a5;border-top:none;font-family:monospace;white-space:pre-wrap;word-break:break-all;">{{ cfParsed ? cfParsed.detail : message }}</div>
    </div>

    <div style="display:flex;gap:10px;margin-top:28px;">
      <button @click="onReload"
        style="padding:12px 28px;font-size:14px;font-weight:600;background:#6a1b9a;color:#fff;border:none;border-radius:8px;cursor:pointer;">
        \uC0C8\uB85C\uACE0\uCE68
      </button>
      <button @click="navigate('dashboard')"
        style="padding:12px 28px;font-size:14px;font-weight:600;background:#fff;color:#444;border:1px solid #ddd;border-radius:8px;cursor:pointer;">
        \uB300\uC2DC\uBCF4\uB4DC\uB85C
      </button>
    </div>

    <!-- \uCD5C\uADFC 4xx/5xx/\uB124\uD2B8\uC6CC\uD06C \uC624\uB958 \uBAA9\uB85D \u2014 2\uAC74 \uC774\uC0C1\uC77C \uB54C\uB9CC(\uBC31\uC5D4\uB4DC \uB2E4\uC6B4 \uB4F1\uC73C\uB85C \uB3D9\uC2DC \uC2E4\uD328) \uC811\uD78C \uC0C1\uD0DC\uB85C \uB178\uCD9C -->
    <div v-if="cfErrorList.length > 1" style="margin-top:20px;max-width:900px;width:100%;text-align:left;">
      <div style="display:flex;align-items:center;gap:10px;">
        <button @click="showErrorList = !showErrorList"
          style="display:flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;font-size:12px;color:#888;padding:4px 0;">
          <span>{{ showErrorList ? '\u25B2' : '\u25BC' }}</span>
          <span>\uCD5C\uADFC \uC11C\uBC84 \uC624\uB958 {{ cfErrorList.length }}\uAC74 {{ showErrorList ? '\uC811\uAE30' : '\uBCF4\uAE30' }}</span>
        </button>
        <button v-if="showErrorList" class="btn btn-secondary btn-xs" @click="toggleExpandAll">
          {{ allExpanded ? '\uC804\uCCB4\uB2EB\uAE30' : '\uC804\uCCB4\uD3BC\uCE58\uAE30' }}
        </button>
      </div>
      <bo-grid v-if="showErrorList" bare
        :columns="cfErrorColumns" :rows="cfErrorList" row-key="_rid"
        :row-style="fnRowStyle" :is-expanded="isRowExpanded">
        <template #row-expand="{ row, colspan }">
          <td :colspan="colspan" style="background:#fff5f5;padding:8px 14px;font-family:monospace;font-size:11px;color:#c62828;white-space:pre-wrap;word-break:break-all;">
            {{ row.message || '(\uBA54\uC2DC\uC9C0 \uC5C6\uC74C)' }}
          </td>
        </template>
      </bo-grid>
    </div>
  </div>
</div>
`};
