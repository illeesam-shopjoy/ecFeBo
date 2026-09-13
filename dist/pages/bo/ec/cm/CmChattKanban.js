window.CmChattKanban={name:"CmChattKanban",props:{navigate:{type:Function,required:!0}},setup(ne){const{ref:ie,reactive:l,computed:oe,onMounted:F,onUnmounted:P,watch:se,nextTick:A}=Vue,p=window.boApp.showToast,z=window.boApp.showConfirm,O=[{key:"OPEN",label:"\uB300\uAE30\uC911",icon:"\u{1F7E1}",color:"#f59e0b",bg:"#fffbeb",border:"#fbbf24"},{key:"PENDING",label:"\uC0C1\uB2F4\uC911",icon:"\u{1F7E2}",color:"#10b981",bg:"#f0fdf4",border:"#34d399"},{key:"CLOSED",label:"\uC885\uB8CC",icon:"\u26AB",color:"#6b7280",bg:"#f9fafb",border:"#d1d5db"}],k=l({chatt_statuses:[],date_range_opts:[]}),f=l([]),v=l(new Set),g=l({loading:!1,activeChatId:null}),_=()=>({searchValue:"",chattStatusCd:"",dateRangeStart:`${new Date().getFullYear()-1}-01-01`,dateRangeEnd:`${new Date().getFullYear()}-12-31`}),C=l(_()),d=l([]),S=l({});let y=null;const x=l({}),c=l({draggingId:null,overCol:null}),R=(e,t={})=>{if(e==="search-list")return b();if(e==="search-reset")return Object.assign(C,_()),b();if(e==="tab-send")return L(t.id);if(e==="tab-close-chat")return U(t.id);if(e==="tab-close")return D(t.id);if(e==="tab-select")return w(t.id);if(e==="card-toggle")return $(t.id);if(e==="attach-add")return B(t.id,t.event);if(e==="attach-remove")return M(t.id,t.fi);if(e==="drag-start"){c.draggingId=t.id;return}if(e==="drag-end"){c.draggingId=null,c.overCol=null;return}if(e==="drag-over-col"){c.overCol=t.col;return}if(e==="drag-drop-col")return q(t.col)},j=(e,t,a)=>{if(e==="kanban-cellClick"&&t==="btn_join")return N(a.chattId)},b=async()=>{var e,t;g.loading=!0;try{const a={pageSize:200,pageNo:1,...coUtil.cofOmitEmpty(C)};a.searchValue&&!a.searchType&&(a.searchType="memberNm,subject");const n=((t=(e=(await boApiSvc.cmChatt.getPage(a,"\uCC44\uD305\uCE78\uBC18","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:e.data)==null?void 0:t.pageList)||[];n.forEach(s=>{const i=f.find(r=>r.chattId===s.chattId);i&&s.memberUnreadCnt>(i.memberUnreadCnt||0)&&E(s.chattId)}),f.splice(0,f.length,...n),n.forEach(s=>{x[s.chattId]===void 0&&(x[s.chattId]=!0)})}catch(a){console.error("[kanban-load]",a)}finally{g.loading=!1}},E=e=>{v.add(e),setTimeout(()=>{v.delete(e)},5e3)},u=e=>d.find(t=>t.chattId===e),N=async e=>{var a,o;if(u(e)){w(e);return}const t=l({chattId:e,subject:"\uB85C\uB529 \uC911...",memberNm:"",chattStatusCd:"OPEN",messages:[],replyText:"",pollTimer:null,pollLastId:null,unread:0,_pendingFiles:[]});d.push(t),w(e);try{const s=((a=(await boApiSvc.cmChatt.getById(e,"\uCC44\uD305\uCE78\uBC18","\uC0C1\uC138")).data)==null?void 0:a.data)||{};t.subject=s.subject||"(\uC81C\uBAA9\uC5C6\uC74C)";const i=(s.members||[]).find(T=>T.memberTypeCd==="MEMBER"),r=f.find(T=>T.chattId===e);t.memberNm=(i==null?void 0:i.refNm)||(r==null?void 0:r.memberNm)||"",t.chattStatusCd=s.chattStatusCd||"OPEN";const h=await boApiSvc.cmChatt.getMessages(e,{},"\uCC44\uD305\uCE78\uBC18","\uBA54\uC2DC\uC9C0"),I=Array.isArray((o=h.data)==null?void 0:o.data)?h.data.data:[];t.messages.push(...I),I.length&&(t.pollLastId=I[I.length-1].chattMsgId),m(e),r&&(r.memberUnreadCnt=0),(t.chattStatusCd==="OPEN"||t.chattStatusCd==="PENDING")&&G(t)}catch{p("\uCC44\uD305 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","error"),D(e)}},w=e=>{g.activeChatId=e,A(()=>m(e))},D=e=>{const t=u(e);t&&t.pollTimer&&(clearInterval(t.pollTimer),t.pollTimer=null);const a=d.findIndex(o=>o.chattId===e);a>=0&&d.splice(a,1),g.activeChatId===e&&(g.activeChatId=d.length?d[Math.max(0,a-1)].chattId:null)},L=async e=>{var n,s,i;const t=u(e);if(!t)return;const a=t.replyText.trim();if(!a)return;const o={chattMsgId:"_tmp_"+Date.now(),senderTypeCd:"ADMIN",msgText:a,sendDate:new Date().toISOString(),_pending:!0};t.messages.push(o),t.replyText="",m(e);try{const h=(n=(await boApiSvc.cmChatt.sendMsg(e,{msgText:a,senderTypeCd:"ADMIN"},"\uCC44\uD305\uCE78\uBC18","\uC804\uC1A1")).data)==null?void 0:n.data;h&&(o.chattMsgId=h.chattMsgId,o.sendDate=h.sendDate,t.pollLastId=h.chattMsgId),o._pending=!1}catch(r){o._error=!0,o._pending=!1,p(((i=(s=r.response)==null?void 0:s.data)==null?void 0:i.message)||"\uC804\uC1A1 \uC2E4\uD328","error")}},U=async e=>{var o,n;const t=u(e);if(!(!t||!await z("\uCC44\uD305 \uC885\uB8CC","\uCC44\uD305\uC744 \uC885\uB8CC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")))try{await boApiSvc.cmChatt.updateStatus(e,{statusCd:"CLOSED"},"\uCC44\uD305\uCE78\uBC18","\uCC44\uD305\uC885\uB8CC"),t.chattStatusCd="CLOSED",t.pollTimer&&(clearInterval(t.pollTimer),t.pollTimer=null),t.messages.push({chattMsgId:"_sys_"+Date.now(),senderTypeCd:"SYSTEM",msgText:"\uCC44\uD305\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",sendDate:new Date().toISOString()}),m(e),p("\uCC44\uD305\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),b()}catch(s){p(((n=(o=s.response)==null?void 0:o.data)==null?void 0:n.message)||"\uC885\uB8CC \uCC98\uB9AC \uC2E4\uD328","error")}},G=e=>{e.pollTimer||(e.pollTimer=setInterval(async()=>{var t;try{const a=e.pollLastId?{afterMsgId:e.pollLastId}:{},n=((t=(await boApiSvc.cmChatt.getMessages(e.chattId,a,"\uCC44\uD305\uCE78\uBC18","\uD3F4\uB9C1")).data)==null?void 0:t.data)||[];n.length&&(e.messages.push(...n),e.pollLastId=n[n.length-1].chattMsgId,E(e.chattId),g.activeChatId===e.chattId?m(e.chattId):e.unread++)}catch{}},3e3))},H=()=>{y=setInterval(()=>b(),1e4)},V=()=>{y&&(clearInterval(y),y=null)},m=e=>{A(()=>{const t=S[e];t&&(t.scrollTop=t.scrollHeight)})},Y=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["CHATT_STATUS","DATE_RANGE_OPT"],{compNm:"CmChattKanban"}),k.chatt_statuses=e.sgGetGrpCodes("CHATT_STATUS"),k.date_range_opts=e.sgGetGrpCodes("DATE_RANGE_OPT")};F(async()=>{await Y(),await b(),H()}),P(()=>{d.forEach(e=>{e.pollTimer&&clearInterval(e.pollTimer)}),V()});const $=e=>{x[e]=!x[e]},q=async e=>{var n,s;const t=c.draggingId;if(c.draggingId=null,c.overCol=null,!t||!e)return;const a=f.find(i=>i.chattId===t);if(!a||a.chattStatusCd===e)return;if(a.chattStatusCd==="CLOSED"){p("\uC885\uB8CC\uB41C \uCC44\uD305\uC740 \uC774\uB3D9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}if(e==="CLOSED"&&!await z("\uCC44\uD305 \uC885\uB8CC","\uC774 \uCC44\uD305\uC744 \uC885\uB8CC \uCC98\uB9AC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))return;const o=a.chattStatusCd;a.chattStatusCd=e;try{await boApiSvc.cmChatt.updateStatus(t,{statusCd:e},"\uCC44\uD305\uCE78\uBC18","\uC0C1\uD0DC\uBCC0\uACBD");const i=d.find(r=>r.chattId===t);i&&(i.chattStatusCd=e,e==="CLOSED"&&i.pollTimer&&(clearInterval(i.pollTimer),i.pollTimer=null)),p("\uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(i){a.chattStatusCd=o,p(((s=(n=i.response)==null?void 0:n.data)==null?void 0:s.message)||"\uC0C1\uD0DC \uBCC0\uACBD \uC2E4\uD328","error")}},W=e=>f.filter(t=>{const a=t.chattStatusCd||"";return e==="OPEN"?a==="OPEN":e==="PENDING"?a==="PENDING"||a==="\uC9C4\uD589\uC911":e==="CLOSED"?a==="CLOSED"||a==="\uC885\uB8CC":!1}),J=e=>{const t=e.chattStatusCd;return t==="OPEN"||t==="PENDING"||t==="\uC9C4\uD589\uC911"},Q=e=>e.memberUnreadCnt>0?e.memberUnreadCnt:0,X=e=>v.has(e),Z=e=>!!u(e),K=e=>e?String(e).slice(11,16):"",ee=e=>{if(!e)return"(\uBBF8\uD655\uC778)";const t=e.members?e.members.find(a=>a.memberTypeCd==="MEMBER")||e.members[0]:null;return(t?t.refNm:"")||"(\uBBF8\uD655\uC778)"},te=e=>{const t=e.lastMsgDate||e.regDate||"";return t?String(t).replace("T"," ").slice(0,16):""},ae=(e,t)=>{t?S[e]=t:delete S[e]},B=(e,t)=>{const a=d.find(n=>n.chattId===e);if(!a)return;a._pendingFiles||(a._pendingFiles=[]),Array.from(t.target.files||[]).forEach(n=>{const s={file:n,name:n.name,preview:null};if(n.type.startsWith("image/")){const i=new FileReader;i.onload=r=>{s.preview=r.target.result},i.readAsDataURL(n)}a._pendingFiles.push(s)}),t.target.value=""},M=(e,t)=>{const a=d.find(o=>o.chattId===e);!a||!a._pendingFiles||a._pendingFiles.splice(t,1)};return{KANBAN_COLS:O,codes:k,rooms:f,uiState:g,searchParam:C,openTabs:d,flashSet:v,expanded:x,dragState:c,handleBtnAction:R,handleGridCellAction:j,cfRoomsByCol:W,fnTabActive:J,fnUnread:Q,fnIsFlashing:X,fnIsActive:Z,fnMsgTime:K,fnRoomTime:te,fnRoomMemberNm:ee,fnSetMsgBoxRef:ae,openChat:N,selectTab:w,fnFileHref:e=>coUtil.cofImgSrc(e.cdnImgUrl||e.attachUrl||e.storagePath||""),fnFileThumb:e=>coUtil.cofImgSrc(e.thumbCdnUrl||e.thumbUrl||e.cdnImgUrl||""),fnAttachAdd:B,fnAttachRemove:M}},template:`
<div data-chk="1" style="display:flex;flex-direction:column;height:calc(100vh - 94px);overflow:hidden;background:#f1f5f9;">

  <!-- ===== [A] \uC0C1\uB2E8: \uCE78\uBC18 \uBCF4\uB4DC \uC601\uC5ED (\uC804\uCCB4 \uB192\uC774\uC758 \uC57D 40%) ===== -->
  <div style="flex:0 0 40%;display:flex;flex-direction:column;min-height:0;">
    <!-- \uD0C0\uC774\uD2C0 + \uAC80\uC0C9\uBC14 -->
    <div style="display:flex;align-items:center;gap:8px;padding:8px 16px;background:#fff;border-bottom:1px solid #e5e7eb;flex-shrink:0;flex-wrap:wrap;">
      <span style="font-size:15px;font-weight:800;color:#1a1a2e;margin-right:4px;">\u{1F4AC} \uCC44\uD305 \uCE78\uBC18 \uBCF4\uB4DC</span>
      <input v-model="searchParam.searchValue" placeholder="\uD68C\uC6D0\uBA85 \xB7 \uC81C\uBAA9 \uAC80\uC0C9"
        style="height:30px;width:150px;border:1px solid #d1d5db;border-radius:6px;padding:0 8px;font-size:12px;outline:none;"
        @keyup.enter="handleBtnAction('search-list')" />
      <select v-model="searchParam.chattStatusCd"
        style="height:30px;width:88px;border:1px solid #d1d5db;border-radius:6px;padding:0 6px;font-size:12px;background:#fff;outline:none;">
        <option value="">\uC0C1\uD0DC \uC804\uCCB4</option>
        <option v-for="c in codes.chatt_statuses" :key="c.codeValue" :value="c.codeValue">{{ c.codeLabel }}</option>
      </select>
      <input type="date" v-model="searchParam.dateRangeStart"
        style="height:30px;width:126px;border:1px solid #d1d5db;border-radius:6px;padding:0 6px;font-size:12px;outline:none;" />
      <span style="color:#bbb;font-size:11px;">~</span>
      <input type="date" v-model="searchParam.dateRangeEnd"
        style="height:30px;width:126px;border:1px solid #d1d5db;border-radius:6px;padding:0 6px;font-size:12px;outline:none;" />
      <button class="btn btn_search" style="height:30px;font-size:12px;" @click="handleBtnAction('search-list')">\uC870\uD68C</button>
      <button class="btn btn_reset"  style="height:30px;font-size:12px;" @click="handleBtnAction('search-reset')">\uCD08\uAE30\uD654</button>
    </div>
    <!-- \uCE78\uBC18 3\uC5F4: \uAC01 \uCEEC\uB7FC\uC774 \uB3C5\uB9BD \uC2A4\uD06C\uB864 -->
    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding:8px 12px;overflow-y:auto;min-height:0;">
      <div v-for="col in KANBAN_COLS" :key="col.key"
        :style="'display:flex;flex-direction:column;border-radius:10px;border:2px solid '+(dragState.overCol===col.key ? col.color : col.border)+';transition:border-color .15s;min-height:100%;'"
        @dragover.prevent="handleBtnAction('drag-over-col', {col: col.key})"
        @dragleave="handleBtnAction('drag-over-col', {col: null})"
        @drop.prevent="handleBtnAction('drag-drop-col', {col: col.key})">
        <!-- \uCEEC\uB7FC \uD5E4\uB354 -->
        <div :style="'display:flex;align-items:center;gap:5px;padding:8px 12px;font-size:12px;font-weight:800;flex-shrink:0;border-radius:8px 8px 0 0;background:'+col.bg+';color:'+col.color+';border-bottom:2px solid '+col.border+';'">
          <span style="font-size:14px;">{{ col.icon }}</span>
          <span>{{ col.label }}</span>
          <span :style="'margin-left:auto;font-size:10px;background:rgba(0,0,0,.1);border-radius:8px;padding:1px 7px;'">
            {{ cfRoomsByCol(col.key).length }}
          </span>
        </div>
        <!-- \uCE74\uB4DC \uBAA9\uB85D (\uCEEC\uB7FC \uB0B4 \uC138\uB85C \uD3BC\uCE68 \u2014 \uC2A4\uD06C\uB864 \uC5C6\uC774 \uB298\uC5B4\uB0A8) -->
        <div :style="'flex:1;padding:6px;display:flex;flex-direction:column;gap:5px;background:'+(dragState.overCol===col.key ? col.bg+'99' : col.bg+'44')+';border-radius:0 0 8px 8px;transition:background .15s;'">
          <div v-if="cfRoomsByCol(col.key).length===0"
            style="text-align:center;color:#9ca3af;font-size:11px;padding:16px 0;">\uCC44\uD305 \uC5C6\uC74C</div>

          <!-- ===== \uCC44\uD305\uB8F8 \uCE74\uB4DC (\uD5E4\uB354 + \uB0B4\uC6A9\uB780) ===== -->
          <div v-for="room in cfRoomsByCol(col.key)" :key="room.chattId"
            :class="fnIsFlashing(room.chattId) ? 'chk-flash' : ''"
            :style="'background:#fff;border-radius:8px;border:1.5px solid '+(fnIsActive(room.chattId)?'#e8587a':'#e5e7eb')+';overflow:hidden;box-shadow:'+(dragState.draggingId===room.chattId?'0 8px 24px rgba(0,0,0,.22)':'0 1px 3px rgba(0,0,0,.06)')+';opacity:'+(dragState.draggingId===room.chattId?'.55':'1')+';'">

            <!-- \u2500\u2500 \uCE74\uB4DC \uD5E4\uB354 (\uB4DC\uB798\uADF8 \uC804\uC6A9 \uD578\uB4E4) \u2500\u2500 -->
            <div
              draggable="true"
              @dragstart.stop="handleBtnAction('drag-start', {id: room.chattId})"
              @dragend.stop="handleBtnAction('drag-end', {})"
              :style="'display:flex;align-items:center;gap:5px;padding:7px 10px;cursor:grab;user-select:none;background:'+(dragState.draggingId===room.chattId?col.bg:'#fafafa')+';border-bottom:1px solid #f0f0f0;'">
              <span style="font-size:14px;color:#c4c4c4;flex-shrink:0;letter-spacing:1px;">\u283F</span>
              <span :style="'font-size:10px;width:20px;height:20px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:'+col.bg+';border:1px solid '+col.border+';flex-shrink:0;'">\u{1F464}</span>
              <span style="font-size:11px;font-weight:700;color:#1f2937;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ fnRoomMemberNm(room) }}</span>
              <span v-if="fnUnread(room)" style="background:#ef4444;color:#fff;border-radius:10px;padding:0 5px;font-size:9px;font-weight:700;flex-shrink:0;">{{ fnUnread(room) }}</span>
              <span @click.stop="handleBtnAction('card-toggle', {id: room.chattId})"
                :style="'font-size:11px;color:#aaa;cursor:pointer;flex-shrink:0;display:inline-block;transition:transform .2s;transform:'+(expanded[room.chattId]?'rotate(180deg)':'rotate(0deg)')+';'">\u25BC</span>
            </div>

            <!-- \u2500\u2500 \uCE74\uB4DC \uB0B4\uC6A9\uB780 (\u25BC \uD074\uB9AD\uC73C\uB85C \uD1A0\uAE00) \u2500\u2500 -->
            <div v-if="expanded[room.chattId]"
              style="padding:8px 10px 10px;background:#fff;">
              <div style="font-size:12px;font-weight:600;color:#374151;margin-bottom:4px;line-height:1.4;word-break:break-all;">{{ room.subject || '(\uC81C\uBAA9\uC5C6\uC74C)' }}</div>
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <span style="font-size:10px;color:#9ca3af;">\u{1F550} {{ fnRoomTime(room) }}</span>
                <span v-if="room.memberUnreadCnt > 0" style="font-size:10px;color:#ef4444;font-weight:600;">\uBBF8\uC77D\uC74C {{ room.memberUnreadCnt }}</span>
              </div>
              <button @click.stop="openChat(room.chattId)"
                style="width:100%;background:#e8587a;color:#fff;border:none;border-radius:5px;padding:5px 0;font-size:11px;font-weight:700;cursor:pointer;">
                \u{1F4AC} \uCC38\uC5EC
              </button>
            </div>
          </div>
          <!-- ===== /\uCE74\uB4DC \uB05D ===== -->

        </div>
      </div>
    </div>
  </div>

  <!-- ===== [B] \uAD6C\uBD84\uC120 ===== -->
  <div style="flex-shrink:0;height:6px;background:linear-gradient(to bottom,#e5e7eb,#f1f5f9);border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"></div>

  <!-- ===== [C] \uD558\uB2E8: \uCC44\uD305 \uC0C1\uB2F4 \uD0ED \uC601\uC5ED ===== -->
  <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0;background:#fff;">
    <!-- \uD0ED \uD5E4\uB354 \uBC14 -->
    <div style="display:flex;align-items:stretch;background:linear-gradient(to right,#fff0f4,#fff8fb);border-bottom:1px solid #f3e0e8;flex-shrink:0;overflow-x:auto;min-height:36px;">
      <!-- \uACE0\uC815 \uB808\uC774\uBE14 -->
      <div style="display:flex;align-items:center;padding:0 14px;font-size:12px;font-weight:800;color:#9f2946;white-space:nowrap;border-right:1px solid #f3e0e8;flex-shrink:0;">
        \u{1F4AC} \uCC44\uD305 \uC0C1\uB2F4
      </div>
      <!-- \uD0ED \uC5C6\uC744 \uB54C \uC548\uB0B4 -->
      <div v-if="openTabs.length===0"
        style="display:flex;align-items:center;padding:0 16px;font-size:12px;color:#bbb;">
        \uCE78\uBC18\uC5D0\uC11C [\u25B6 \uCC38\uC5EC] \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uD0ED\uC774 \uC5F4\uB9BD\uB2C8\uB2E4
      </div>
      <!-- \uCC44\uD305 \uD0ED \uBAA9\uB85D -->
      <div v-for="tab in openTabs" :key="tab.chattId"
        :style="'display:flex;align-items:center;gap:6px;padding:0 12px;cursor:pointer;border-right:1px solid #f3e0e8;font-size:12px;flex-shrink:0;border-bottom:2px solid '+(uiState.activeChatId===tab.chattId?'#e8587a':'transparent')+';background:'+(uiState.activeChatId===tab.chattId?'#fff':'transparent')+';'"
        @click="handleBtnAction('tab-select', {id: tab.chattId})">
        <span :style="'font-size:10px;color:'+(tab.chattStatusCd==='CLOSED'?'#9ca3af':'#10b981')+';'">{{ tab.chattStatusCd==='CLOSED' ? '\u26AB' : '\u{1F7E2}' }}</span>
        <span style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#374151;">{{ tab.subject }}</span>
        <span v-if="tab.unread" style="background:#ef4444;color:#fff;border-radius:10px;padding:0 5px;font-size:10px;font-weight:700;">{{ tab.unread }}</span>
        <button @click.stop="handleBtnAction('tab-close', {id: tab.chattId})"
          style="background:none;border:none;cursor:pointer;font-size:15px;color:#bbb;padding:0 2px;line-height:1;">\xD7</button>
      </div>
    </div>

    <!-- \uD0ED \uC5C6\uC744 \uB54C \uBE48 \uD654\uBA74 -->
    <div v-if="openTabs.length===0"
      style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#bbb;gap:12px;">
      <span style="font-size:40px;opacity:.2;">\u{1F4AC}</span>
      <span style="font-size:13px;">\uCC38\uC5EC\uD55C \uCC44\uD305\uC774 \uC5C6\uC2B5\uB2C8\uB2E4</span>
    </div>

    <!-- \uD0ED \uCEE8\uD150\uCE20 (flex:1 \uACE0\uC815, \uBE44\uD65C\uC131\uC740 position:absolute+visibility:hidden\uC73C\uB85C \uC228\uAE40) -->
    <div v-for="tab in openTabs" :key="tab.chattId + '_body'"
      :style="uiState.activeChatId===tab.chattId ? 'flex:1;display:flex;overflow:hidden;min-height:0;' : 'position:absolute;visibility:hidden;pointer-events:none;width:0;height:0;overflow:hidden;'">

      <!-- \u2500\u2500\u2500 \uC88C: \uBA54\uC2DC\uC9C0 + \uC785\uB825\uCC3D (flex-col) \u2500\u2500\u2500 -->
      <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0;min-width:0;">

        <!-- \uBA54\uC2DC\uC9C0 \uBAA9\uB85D -->
        <div style="flex:1;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px;background:#f8f9fb;"
          :ref="el => fnSetMsgBoxRef(tab.chattId, el)">
          <template v-for="msg in tab.messages" :key="msg.chattMsgId">
            <!-- \uC2DC\uC2A4\uD15C \uBA54\uC2DC\uC9C0 -->
            <div v-if="msg.senderTypeCd==='SYSTEM'"
              style="text-align:center;font-size:11px;color:#9ca3af;background:#eff2f5;border-radius:6px;padding:3px 14px;margin:0 30px;">
              {{ msg.msgText }}
            </div>
            <!-- \uD68C\uC6D0 \uBA54\uC2DC\uC9C0 (\uC88C\uCE21) -->
            <div v-else-if="msg.senderTypeCd==='MEMBER'" style="display:flex;gap:8px;align-items:flex-end;">
              <div style="width:28px;height:28px;border-radius:50%;background:#e0e7ff;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;">\u{1F464}</div>
              <div style="max-width:65%;">
                <div style="font-size:10px;color:#888;margin-bottom:2px;">{{ tab.memberNm }}</div>
                <div style="background:#fff;border:1px solid #e5e7eb;border-radius:0 10px 10px 10px;padding:8px 12px;font-size:13px;line-height:1.6;word-break:break-word;">{{ msg.msgText }}</div>
                <!-- \uCCA8\uBD80 \uC774\uBBF8\uC9C0 -->
                <div v-if="msg.attachFiles &amp;&amp; msg.attachFiles.length" style="display:flex;flex-wrap:wrap;gap:4px;margin-top:5px;">
                  <a v-for="f in msg.attachFiles" :key="f.attachId" :href="fnFileHref(f)" target="_blank"
                    style="display:block;width:80px;height:80px;border-radius:6px;overflow:hidden;border:1px solid #e5e7eb;">
                    <img v-if="fnFileThumb(f)" :src="fnFileThumb(f)" style="width:100%;height:100%;object-fit:cover;" />
                    <span v-else style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:22px;background:#f3f4f6;">\u{1F4CE}</span>
                  </a>
                </div>
                <div style="font-size:10px;color:#bbb;margin-top:3px;">{{ fnMsgTime(msg.sendDate) }}</div>
              </div>
            </div>
            <!-- \uC0C1\uB2F4\uC0AC \uBA54\uC2DC\uC9C0 (\uC6B0\uCE21) -->
            <div v-else style="display:flex;flex-direction:row-reverse;gap:8px;align-items:flex-end;">
              <div style="width:28px;height:28px;border-radius:50%;background:#fce7f3;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;">\u{1F481}</div>
              <div style="max-width:65%;">
                <div style="font-size:10px;color:#888;margin-bottom:2px;text-align:right;">\uC0C1\uB2F4\uC0AC</div>
                <div :style="'background:#e8587a;color:#fff;border-radius:10px 0 10px 10px;padding:8px 12px;font-size:13px;line-height:1.6;word-break:break-word;'+(msg._error?'opacity:.6;':'')">{{ msg.msgText }}</div>
                <!-- \uCCA8\uBD80 \uC774\uBBF8\uC9C0 -->
                <div v-if="msg.attachFiles &amp;&amp; msg.attachFiles.length" style="display:flex;flex-wrap:wrap;gap:4px;margin-top:5px;justify-content:flex-end;">
                  <a v-for="f in msg.attachFiles" :key="f.attachId" :href="fnFileHref(f)" target="_blank"
                    style="display:block;width:80px;height:80px;border-radius:6px;overflow:hidden;border:1px solid #fda4af;">
                    <img v-if="fnFileThumb(f)" :src="fnFileThumb(f)" style="width:100%;height:100%;object-fit:cover;" />
                    <span v-else style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:22px;background:#fce7f3;">\u{1F4CE}</span>
                  </a>
                </div>
                <div style="font-size:10px;color:#bbb;margin-top:3px;text-align:right;">
                  <span v-if="msg._pending" style="color:#aaa;">\uC804\uC1A1 \uC911...</span>
                  <span v-else-if="msg._error" style="color:#f87171;">\uC2E4\uD328</span>
                  <span v-else>{{ fnMsgTime(msg.sendDate) }}</span>
                </div>
              </div>
            </div>
          </template>
          <div v-if="tab.messages.length===0"
            style="text-align:center;color:#aaa;padding:40px 0;font-size:12px;">\uBA54\uC2DC\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
        </div>

        <!-- \u2500\u2500\u2500 \uC785\uB825 \uC601\uC5ED (\uBA54\uC2DC\uC9C0 \uBAA9\uB85D \uD558\uB2E8 \uACE0\uC815) \u2500\u2500\u2500 -->
        <div style="flex-shrink:0;border-top:1px solid #f1f5f9;background:#fff;">
          <!-- \uC885\uB8CC\uB41C \uCC44\uD305 \uC548\uB0B4 -->
          <div v-if="!fnTabActive(tab)"
            style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;background:#f9fafb;">
            <span style="font-size:12px;color:#9ca3af;">\u25CF \uC885\uB8CC\uB41C \uCC44\uD305\uC785\uB2C8\uB2E4.</span>
            <button class="btn btn_close" style="font-size:11px;" @click="handleBtnAction('tab-close', {id: tab.chattId})">\uD0ED \uB2EB\uAE30</button>
          </div>
          <!-- \uC9C4\uD589 \uC911 \uC785\uB825\uCC3D -->
          <div v-if="fnTabActive(tab)" style="display:flex;flex-direction:column;">
            <!-- \uCCA8\uBD80 \uBBF8\uB9AC\uBCF4\uAE30 -->
            <div v-if="tab._pendingFiles &amp;&amp; tab._pendingFiles.length"
              style="display:flex;gap:6px;flex-wrap:wrap;padding:8px 12px 0;border-top:1px solid #f1f5f9;background:#fafafa;">
              <div v-for="(f, fi) in tab._pendingFiles" :key="fi"
                style="position:relative;width:60px;height:60px;border-radius:6px;overflow:hidden;border:1px solid #e5e7eb;">
                <img v-if="f.preview" :src="f.preview" style="width:100%;height:100%;object-fit:cover;" />
                <span v-else style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:24px;background:#f3f4f6;">\u{1F4CE}</span>
                <button @click="handleBtnAction('attach-remove', {id: tab.chattId, fi})"
                  style="position:absolute;top:1px;right:1px;background:rgba(0,0,0,.5);color:#fff;border:none;border-radius:50%;width:16px;height:16px;font-size:11px;line-height:1;cursor:pointer;padding:0;">\xD7</button>
              </div>
            </div>
            <!-- textarea + \uBC84\uD2BC \uD589 -->
            <div style="display:flex;align-items:flex-end;gap:0;padding:0;">
              <textarea v-model="tab.replyText" rows="3"
                placeholder="\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694... (Enter: \uC804\uC1A1 / Shift+Enter: \uC904\uBC14\uAFC8)"
                style="flex:1;resize:none;font-size:13px;line-height:1.5;padding:10px 12px;border:none;outline:none;background:#fff;font-family:inherit;"
                @keydown.enter.exact.prevent="handleBtnAction('tab-send', {id: tab.chattId})">
              </textarea>
              <!-- \uC6B0\uCE21 \uBC84\uD2BC \uC138\uB85C \uC2A4\uD0DD -->
              <div style="display:flex;flex-direction:column;gap:4px;padding:8px 10px;align-items:center;border-left:1px solid #f1f5f9;flex-shrink:0;">
                <!-- \uCCA8\uBD80 \uBC84\uD2BC -->
                <label :for="'attach-' + tab.chattId"
                  style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:8px;background:#f3f4f6;cursor:pointer;font-size:18px;border:1px solid #e5e7eb;"
                  title="\uD30C\uC77C \uCCA8\uBD80">\u{1F4CE}
                  <input :id="'attach-' + tab.chattId" type="file" multiple accept="image/*,application/pdf"
                    style="display:none;"
                    @change="handleBtnAction('attach-add', {id: tab.chattId, event: $event})" />
                </label>
                <!-- \uC804\uC1A1 \uBC84\uD2BC -->
                <button @click="handleBtnAction('tab-send', {id: tab.chattId})"
                  style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:8px;background:#e8587a;color:#fff;border:none;cursor:pointer;font-size:18px;"
                  title="\uC804\uC1A1 (Enter)">\u27A4</button>
              </div>
            </div>
            <!-- \uD558\uB2E8 \uC561\uC158 \uBC14 -->
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:4px 10px 6px;gap:6px;border-top:1px solid #f9f0f3;">
              <span style="font-size:11px;color:#bbb;flex:1;">Shift+Enter: \uC904\uBC14\uAFC8</span>
              <button class="btn btn_cancel" style="font-size:11px;padding:3px 10px;"
                @click="handleBtnAction('tab-close-chat', {id: tab.chattId})">\uCC44\uD305 \uC885\uB8CC</button>
              <button class="btn btn_close" style="font-size:11px;padding:3px 10px;"
                @click="handleBtnAction('tab-close', {id: tab.chattId})">\uD0ED \uB2EB\uAE30</button>
            </div>
          </div>
        </div>
      </div>

      <!-- \u2500\u2500\u2500 \uC6B0: \uCC44\uD305\uB8F8 \uC815\uBCF4 \uC0AC\uC774\uB4DC \uD328\uB110 \u2500\u2500\u2500 -->
      <div style="width:220px;flex-shrink:0;border-left:1px solid #f1f5f9;display:flex;flex-direction:column;background:#fff;overflow-y:auto;">
        <div style="padding:14px 14px 10px;border-bottom:1px solid #f9f0f3;">
          <div style="font-size:13px;font-weight:700;color:#1f2937;margin-bottom:5px;word-break:break-all;">{{ tab.subject }}</div>
          <div style="display:flex;align-items:center;gap:5px;margin-bottom:4px;">
            <span style="font-size:12px;color:#555;">\u{1F464} {{ tab.memberNm || '(\uBBF8\uD655\uC778)' }}</span>
          </div>
          <div style="display:flex;align-items:center;gap:5px;">
            <span class="badge" :class="fnTabActive(tab) ? 'badge-green' : 'badge-gray'" style="font-size:10px;">{{ fnTabActive(tab) ? '\uC9C4\uD589\uC911' : '\uC885\uB8CC' }}</span>
            <span v-if="fnTabActive(tab)" style="font-size:10px;color:#15803d;font-weight:700;">\u25CF LIVE</span>
          </div>
        </div>
        <div style="padding:10px 14px;font-size:11px;color:#9ca3af;line-height:1.8;">
          <div>\uCC44\uD305 ID: <span style="color:#6b7280;font-family:monospace;">{{ tab.chattId }}</span></div>
          <div>\uC0C1\uD0DC: <span style="color:#6b7280;">{{ tab.chattStatusCd }}</span></div>
        </div>
      </div>
    </div>
  </div>

</div>
`};
