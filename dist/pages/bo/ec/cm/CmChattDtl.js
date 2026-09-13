window._cmChattDtlState=window._cmChattDtlState||{tab:"chat",tabMode:"tab"},window.CmChattDtl={name:"CmChattDtl",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null},dtlMode:{type:String,default:"view"},active:{type:Boolean,default:!0},reloadTrigger:{type:Number,default:0}},setup(o){const{ref:S,reactive:c,computed:g,onMounted:z,onUnmounted:P,watch:C,nextTick:L}=Vue,l=window.boApp.showToast,I=window.boApp.showConfirm,_=window.boApp.showRefModal,a=c({loading:!1,error:null,tab:window._cmChattDtlState.tab||"chat",tabMode2:window._cmChattDtlState.tabMode||"tab",replyText:"",searchUserId:"",chat:null}),A=c({chatt_statuses:[]}),b=c({chattRoomId:null,memberId:"",memberNm:"",subject:"",chattStatusCd:""}),d=c({}),G=yup.object({memberId:yup.string().required("\uD68C\uC6D0ID\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."),subject:yup.string().required("\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")}),D=S(null),i=c({show:!1,type:"",id:null,data:null}),p=c([]),h=c([]);let u=null,m=null;const R=g(()=>!o.dtlId),O=g(()=>o.dtlMode==="view"),V=(t,e={})=>{if(t==="form-save")return W();if(t==="form-cancel")return o.navigate("__cancelEdit__");if(t==="form-close")return o.navigate("__closeDtl__");if(t==="form-edit")return o.navigate("__switchToEdit__");if(t==="chat-sendReply")return Z();if(t==="chat-close")return J();if(t==="chat-delete")return Q();if(t==="chat-back")return o.navigate("__cancelEdit__");if(t==="refModal-close")return T();if(t==="userChats-search")return N();console.warn("[handleBtnAction] unknown cmd:",t)},k=(t,e={})=>{if(t==="tab-select"){a.tab=e;return}else if(t==="tab-mode"){a.tabMode2=e;return}else{if(t==="chat-msgRef")return $(e);if(t==="chat-ref")return _(e.type,e.id);if(t==="memberChats-rowView")return o.navigate("cmChattDtl",{id:e});if(t==="userChats-rowView")return o.navigate("cmChattDtl",{id:e});console.warn("[handleSelectAction] unknown cmd:",t)}},F=(t,e,s)=>{if(t==="ref")return s==null?T():void 0;console.warn("[fnCallbackModal] unknown popCmd:",t)},E=async()=>{var t,e;if(o.dtlId){a.loading=!0,v();try{const s=await boApiSvc.cmChatt.getById(o.dtlId,"\uCC44\uD305\uAD00\uB9AC","\uC0C1\uC138\uC870\uD68C");a.chat=((t=s.data)==null?void 0:t.data)||null,a.chat&&(a.chat.memberUnreadCnt=0),h.splice(0,h.length),m=null;try{const r=((e=(await boApiSvc.cmChatt.getMessages(o.dtlId,{},"\uCC44\uD305\uAD00\uB9AC","\uBA54\uC2DC\uC9C0\uC870\uD68C")).data)==null?void 0:e.data)||[];h.push(...r),r.length>0&&(m=r[r.length-1].chattMsgId)}catch{}w(),a.chat&&(a.chat.chattStatusCd==="OPEN"||a.chat.chattStatusCd==="PENDING"||a.chat.chattStatusCd==="IN_PROGRESS")&&q()}catch(s){console.error("[catch-info]",s),a.error=s.message}finally{a.loading=!1}}},q=()=>{u||(u=setInterval(async()=>{var t;if(o.dtlId)try{const e=m?{afterMsgId:m}:{},n=((t=(await boApiSvc.cmChatt.getMessages(o.dtlId,e,"\uCC44\uD305\uAD00\uB9AC","\uD3F4\uB9C1")).data)==null?void 0:t.data)||[];if(n.length>0){h.push(...n),m=n[n.length-1].chattMsgId,w();const r=n.filter(f=>f.senderCd==="MEMBER");r.length>0&&a.chat&&(a.chat.memberUnreadCnt=(a.chat.memberUnreadCnt||0)+r.length)}}catch(e){console.warn("[poll]",e.message)}},3e3))},v=()=>{u&&(clearInterval(u),u=null)},H=t=>a.tabMode2!=="tab"||a.tab===t,$=t=>{t.productId?(i.type="product",i.id=t.productId,i.show=!0):t.orderId?(i.type="order",i.id=t.orderId,i.show=!0):t.claimId&&(i.type="claim",i.id=t.claimId,i.show=!0)},T=()=>{i.show=!1},K=t=>!!(t.productId||t.orderId||t.claimId),Y=t=>t.productId?"[\uC0C1\uD488#"+t.productId+" \uBCF4\uAE30]":t.orderId?"["+t.orderId+" \uBCF4\uAE30]":t.claimId?"["+t.claimId+" \uBCF4\uAE30]":"",w=()=>{L(()=>{const t=D.value;t&&(t.scrollTop=t.scrollHeight)})},Z=async()=>{var s,n,r;const t=a.replyText.trim();if(!t||!o.dtlId)return;const e={chattMsgId:"_tmp_"+Date.now(),senderCd:"ADMIN",msgText:t,sendDate:new Date().toISOString(),_pending:!0};h.push(e),a.replyText="",w();try{const x=(s=(await boApiSvc.cmChatt.sendMsg(o.dtlId,{msgText:t,senderCd:"ADMIN"},"\uCC44\uD305\uAD00\uB9AC","\uB2F5\uBCC0\uC804\uC1A1")).data)==null?void 0:s.data;x&&(e.chattMsgId=x.chattMsgId,e.sendDate=x.sendDate,m=x.chattMsgId),e._pending=!1,a.chat&&(a.chat.adminUnreadCnt=0)}catch(f){console.error("[sendReply]",f),e._error=!0,e._pending=!1,l(((r=(n=f.response)==null?void 0:n.data)==null?void 0:r.message)||"\uC804\uC1A1 \uC2E4\uD328","error")}},J=async()=>{var e,s;if(!(!o.dtlId||!a.chat||!await I("\uCC44\uD305 \uC885\uB8CC","\uCC44\uD305\uC744 \uC885\uB8CC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")))try{await boApiSvc.cmChatt.updateStatus(o.dtlId,{chattStatusCd:"CLOSED"},"\uCC44\uD305\uAD00\uB9AC","\uCC44\uD305\uC885\uB8CC"),a.chat.chattStatusCd="CLOSED",v(),h.push({chattMsgId:"_sys_close",senderCd:"SYSTEM",msgText:"\uCC44\uD305\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",sendDate:new Date().toISOString()}),w(),l("\uCC44\uD305\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(n){console.error("[closeChat]",n),l(((s=(e=n.response)==null?void 0:e.data)==null?void 0:s.message)||"\uC885\uB8CC \uCC98\uB9AC \uC2E4\uD328","error")}},Q=async()=>{var e,s,n;if(!(!o.dtlId||!await I("\uC0AD\uC81C",`[${((e=a.chat)==null?void 0:e.subject)||""}] \uCC44\uD305\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)))try{await boApiSvc.cmChatt.remove(o.dtlId,"\uCC44\uD305\uAD00\uB9AC","\uC0AD\uC81C"),l("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),v(),o.navigate("cmChattMng",{reload:!0})}catch(r){console.error("[catch-info]",r);const f=((n=(s=r.response)==null?void 0:s.data)==null?void 0:n.message)||r.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(f,"error",0)}},N=async()=>{var t,e;if(a.searchUserId.trim())try{const n=((e=(t=(await boApiSvc.cmChatt.getPage({memberId:a.searchUserId.trim(),pageSize:20},"\uCC44\uD305\uAD00\uB9AC","\uACE0\uAC1D\uCC44\uD305\uC870\uD68C")).data)==null?void 0:t.data)==null?void 0:e.pageList)||[];p.splice(0,p.length,...n)}catch(s){console.error("[handleSearchUserChats]",s),p.splice(0,p.length)}},W=async()=>{var e,s;Object.keys(d).forEach(n=>delete d[n]);try{await G.validate(b,{abortEarly:!1})}catch(n){console.error("[catch-info]",n),n.inner.forEach(r=>{d[r.path]=r.message}),coUtil.cofValidationToast(d,l);return}if(await I("\uB4F1\uB85D","\uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{const n={memberId:b.memberId,memberNm:b.memberNm,subject:b.subject,chattStatusCd:b.chattStatusCd},r=await boApiSvc.cmChatt.create(n,"\uCC44\uD305\uAD00\uB9AC","\uB4F1\uB85D");l&&l("\uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),o.navigate&&o.navigate("cmChattMng",{reload:!0})}catch(n){console.error("[catch-info]",n);const r=((s=(e=n.response)==null?void 0:e.data)==null?void 0:s.message)||n.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";l&&l(r,"error",0)}},X=async()=>{const t=window.sfGetBoCodeStore();await t.saLoadCodes(["CHATT_STATUS"],{compNm:"CmChattDtl"}),A.chatt_statuses=t.sgGetGrpCodes("CHATT_STATUS")};z(async()=>{await X(),R.value?a.tab="new":(await E(),a.tab="chat")}),P(()=>{v()}),C(()=>o.reloadTrigger,async(t,e)=>{if(!(t===e||t===0)){try{Object.keys(d).forEach(s=>delete d[s])}catch{}await E()}}),C(()=>a.tab,t=>{window._cmChattDtlState.tab=t}),C(()=>a.tabMode2,t=>{window._cmChattDtlState.tabMode=t});const B=g(()=>a.chat?[]:[]),tt=c([{id:"chat",label:"\uCC44\uD305 \uB0B4\uC6A9",icon:"\u{1F4AC}"},{id:"history",label:"\uD68C\uC6D0 \uCC44\uD305 \uC774\uB825",icon:"\u{1F552}",get count(){return B.value.length}}]),et=c([{id:"new",label:"\uC2E0\uADDC \uB4F1\uB85D"},{id:"search",label:"\uACE0\uAC1D \uCC44\uD305 \uC870\uD68C"}]),y={};y.memberChatGrid=[{key:"subject",label:"\uC81C\uBAA9"},{key:"_status",label:"\uC0C1\uD0DC",badge:t=>t.chattStatusCd==="IN_PROGRESS"?"badge-green":"badge-gray",fmt:(t,e)=>e.chattStatusCd},{key:"lastMsgDate",label:"\uCD5C\uADFC \uBA54\uC2DC\uC9C0",style:"max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",fmt:t=>t||"-"},{key:"regDate",label:"\uC77C\uC2DC",fmt:t=>t?String(t).slice(0,16):"-"},{type:"actions",actions:[{label:"\uC0C1\uC138",cls:"btn btn_detail",onClick:t=>k("memberChats-rowView",t.chattRoomId)}]}],y.userChatGrid=[{key:"subject",label:"\uC81C\uBAA9"},{key:"_status",label:"\uC0C1\uD0DC",badge:t=>t.chattStatusCd==="IN_PROGRESS"?"badge-green":"badge-gray",fmt:(t,e)=>e.chattStatusCd},{key:"lastMsgDate",label:"\uCD5C\uADFC \uBA54\uC2DC\uC9C0",style:"max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",fmt:t=>t||"-"},{key:"regDate",label:"\uC77C\uC2DC",fmt:t=>t?String(t).slice(0,16):"-"},{type:"actions",actions:[{label:"\uBCF4\uAE30",cls:"btn btn-blue btn-xs",onClick:t=>k("userChats-rowView",t.chattRoomId)}]}],y.newForm=[{key:"memberId",label:"\uD68C\uC6D0ID",type:"slot",name:"memberId",required:!0},{key:"memberNm",label:"\uD68C\uC6D0\uBA85",type:"text",placeholder:"\uD68C\uC6D0\uBA85"},{key:"subject",label:"\uC81C\uBAA9",type:"text",required:!0,placeholder:"\uCC44\uD305 \uC81C\uBAA9",colSpan:2},{key:"chattStatusCd",label:"\uC0C1\uD0DC",type:"select",options:()=>A.chatt_statuses,width:"200px"}];const at=t=>t.senderCd==="ADMIN"?"\uC0C1\uB2F4\uC0AC":t.senderCd==="MEMBER"?"\uACE0\uAC1D":"\uC2DC\uC2A4\uD15C",st=g(()=>{var e;const t=(e=a.chat)==null?void 0:e.chattStatusCd;return t==="OPEN"||t==="PENDING"||t==="\uC9C4\uD589\uC911"}),U=()=>{var s;const t=((s=a.chat)==null?void 0:s.chattRoomId)||o.dtlId,e=new URLSearchParams;return e.set("page","cmChattDtl"),e.set("id",t),e.set("embed","1"),`${window.location.origin}${window.location.pathname}?${e.toString()}`},nt=()=>{var t,e,s;try{const n=((t=a.chat)==null?void 0:t.chattRoomId)||o.dtlId;window.coExtSdk.shareKakao({title:`\uCC44\uD305 ${n} - ShopJoy BO`,description:((e=a.chat)==null?void 0:e.subject)||((s=a.chat)==null?void 0:s.memberNm)||"",imageUrl:window.location.origin+"/assets/img/shopjoy-share-og.png",url:U()})}catch(n){l(n.message||"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","error",0)}},ot=async()=>{try{await navigator.clipboard.writeText(U()),l("\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(t){l(t.message||"\uB9C1\uD06C \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","error",0)}},j=S(null),M=S(!1);return{columns:y,uiState:a,form:b,errors:d,refModal:i,msgBoxRef:D,cfUserChats:p,messages:h,handleBtnAction:V,handleSelectAction:k,fnCallbackModal:F,cfIsNew:R,cfDtlMode:O,cfMemberChats:B,cfChatActive:st,tabs:tt,newTabs:et,handleShareKakao:nt,handleCopyLink:ot,pdfAreaRef:j,pdfExporting:M,handleExportPdf:async()=>{var t;M.value=!0;try{const e=((t=a.chat)==null?void 0:t.chattRoomId)||o.dtlId||"new",s=coUtil.cofBuildExportFilename(`\uCC44\uD305\uC0C1\uC138_${e}.pdf`);await window.boUtil.bofExportPdf(j.value,s,l)}finally{M.value=!1}},get active(){return o.active},showTab:H,hasRef:K,refLabel:Y,fnMsgSenderLabel:at,handleSearchUserChats:N,cofAnd:coUtil.cofAnd,showRefModal:_}},template:`
<div ref="pdfAreaRef">
<bo-container bare>
  <!-- ===== \u25A0. \uC0C1\uC138 \uCE74\uB4DC (\uC81C\uBAA9 = list-title, \uD56D\uC0C1 \uD45C\uC2DC) ============================= -->
  <bo-container :title="!active ? '\uCC44\uD305 \uC0C1\uC138' : (cfIsNew ? '\uCC44\uD305 \uB4F1\uB85D' : '\uCC44\uD305 \uC0C1\uC138')"
    :title-id="!active ? '' : (cfIsNew ? '' : (uiState.chat?.chattRoomId || ''))">
    <template #toolbar-actions>
      <button v-if="active ? !cfIsNew : false" class="btn btn_link" title="\uB9C1\uD06C \uACF5\uC720(URL\uB9CC)" @click="handleCopyLink">\u{1F517}</button>
      <button v-if="active ? !cfIsNew : false" class="btn btn_kakao" title="\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720" @click="handleShareKakao">\u{1F4AC}</button>
      <button class="btn btn_pdf" title="PDF \uB2E4\uC6B4\uB85C\uB4DC" :disabled="pdfExporting" @click="handleExportPdf">
        <span v-if="pdfExporting">\u23F3</span>
      <svg v-else width="18" height="20" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2 H20 L28 10 V34 H4 Z" fill="#fff" stroke="#c2410c" stroke-width="1.5"/>
        <path d="M20 2 V10 H28 Z" fill="#f3d4c0"/>
        <rect x="2" y="20" width="28" height="12" rx="2" fill="#e2372c"/>
        <text x="16" y="29" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">PDF</text>
      </svg>
      </button>
    </template>
    <!-- ===== \u25A1. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
    <!-- ===== \u25A0. \uCC44\uD305 \uC0C1\uC138 =================================================== -->
    <div v-if="!cfIsNew">
      <bo-tab-bar :tabs="tabs" :tab="uiState.tab" :tab-mode="uiState.tabMode2"
        @tab-select="id => handleSelectAction('tab-select', id)"
        @mode-select="m => handleSelectAction('tab-mode', m)" />
      <div :class="uiState.tabMode2!=='tab' ? 'dtl-tab-grid cols-'+uiState.tabMode2.charAt(0) : ''">
        <!-- ===== \u25A0.\u25A0.\u25A0. \uCC44\uD305 \uB0B4\uC6A9 \uD0ED ============================================= -->
        <div class="card" v-show="showTab('chat')" style="margin:0;">
          <div v-if="uiState.tabMode2!=='tab'" class="dtl-tab-card-title">\u{1F4AC} \uCC44\uD305 \uB0B4\uC6A9</div>
          <template v-if="uiState.chat">
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uCC44\uD305\uBC29 \uD5E4\uB354 =========================================== -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding:10px 12px;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
              <div>
                <div style="font-size:14px;font-weight:700;color:#111;">{{ uiState.chat.subject }}</div>
                <div style="font-size:12px;color:#888;margin-top:3px;">
                  <span class="ref-link" @click="handleSelectAction('chat-ref', { type:'member', id: uiState.chat.memberId })">
                    {{ uiState.chat.memberNm }}
                  </span>
                  &nbsp;\xB7&nbsp;{{ String(uiState.chat.regDate||'').slice(0,16) }}
                  &nbsp;\xB7&nbsp;
                  <span class="badge" :class="cfChatActive ? 'badge-green' : 'badge-gray'">
                    {{ uiState.chat.chattStatusCd }}
                  </span>
                  <span v-if="uiState.chat.memberUnreadCnt > 0" class="badge badge-red" style="margin-left:6px;">
                    \uBBF8\uC77D\uC74C {{ uiState.chat.memberUnreadCnt }}
                  </span>
                </div>
              </div>
              <div style="display:flex;gap:6px;align-items:center;">
                <span v-if="cfChatActive" style="font-size:11px;color:#15803d;">\u25CF \uC2E4\uC2DC\uAC04</span>
                <button v-if="cfChatActive" class="btn btn_cancel" @click="handleBtnAction('chat-close')">
                  \uCC44\uD305 \uC885\uB8CC
                </button>
                <button class="btn btn_delete" @click="handleBtnAction('chat-delete')">\uC0AD\uC81C</button>
                <button class="btn btn_list" @click="handleBtnAction('chat-back')">\uBAA9\uB85D\uC73C\uB85C</button>
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uBA54\uC2DC\uC9C0 \uBAA9\uB85D ========================================== -->
            <div class="chat-messages" ref="msgBoxRef"
              style="height:320px;overflow-y:auto;border:1px solid #e5e7eb;border-radius:8px;padding:12px;background:#fafafa;display:flex;flex-direction:column;gap:8px;">
              <!-- SYSTEM \uBA54\uC2DC\uC9C0 -->
              <template v-for="msg in messages" :key="msg.chattMsgId">
                <div v-if="msg.senderCd==='SYSTEM'"
                  style="text-align:center;font-size:11px;color:#888;background:#f0f0f0;border-radius:6px;padding:4px 10px;margin:0 40px;">
                  {{ msg.msgText }}
                </div>
                <!-- MEMBER \uBA54\uC2DC\uC9C0 (\uC88C\uCE21) -->
                <div v-else-if="msg.senderCd==='MEMBER'" style="display:flex;align-items:flex-end;gap:6px;">
                  <div style="width:26px;height:26px;border-radius:50%;background:#e0e7ff;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;">
                    \u{1F464}
                  </div>
                  <div>
                    <div style="font-size:10px;color:#888;margin-bottom:2px;">{{ uiState.chat.memberNm }}</div>
                    <div style="background:#fff;border:1px solid #e5e7eb;border-radius:0 10px 10px 10px;padding:7px 10px;font-size:13px;line-height:1.5;max-width:280px;word-break:break-word;">
                      {{ msg.msgText }}
                      <span v-if="hasRef(msg)" class="ref-link" style="display:block;margin-top:4px;font-size:11px;" @click="handleSelectAction('chat-msgRef', msg)">
                        {{ refLabel(msg) }}
                      </span>
                    </div>
                    <div style="font-size:10px;color:#bbb;margin-top:2px;">{{ String(msg.sendDate||'').slice(11,16) }}</div>
                  </div>
                </div>
                <!-- ADMIN \uBA54\uC2DC\uC9C0 (\uC6B0\uCE21) -->
                <div v-else style="display:flex;flex-direction:row-reverse;align-items:flex-end;gap:6px;">
                  <div style="width:26px;height:26px;border-radius:50%;background:#fce7f3;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;">
                    \u{1F481}
                  </div>
                  <div>
                    <div style="font-size:10px;color:#888;margin-bottom:2px;text-align:right;">\uC0C1\uB2F4\uC0AC</div>
                    <div style="background:#e8587a;color:#fff;border-radius:10px 0 10px 10px;padding:7px 10px;font-size:13px;line-height:1.5;max-width:280px;word-break:break-word;"
                      :style="msg._error ? 'opacity:0.6;' : ''">
                      {{ msg.msgText }}
                    </div>
                    <div style="font-size:10px;color:#bbb;margin-top:2px;text-align:right;">
                      <span v-if="msg._pending" style="color:#aaa;">\uC804\uC1A1 \uC911...</span>
                      <span v-else-if="msg._error" style="color:#f87171;">\uC804\uC1A1 \uC2E4\uD328</span>
                      <span v-else>{{ String(msg.sendDate||'').slice(11,16) }}</span>
                    </div>
                  </div>
                </div>
              </template>
              <div v-if="messages.length===0" style="text-align:center;color:#aaa;padding:40px 0;font-size:13px;">
                \uBA54\uC2DC\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
              </div>
            </div>
            <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uB2F5\uBCC0 \uC785\uB825 =========================================== -->
            <div v-if="cfChatActive" style="display:flex;gap:8px;margin-top:10px;align-items:flex-end;">
              <textarea class="form-control" v-model="uiState.replyText" rows="3" placeholder="\uB2F5\uBCC0 \uC785\uB825 \uD6C4 Enter \uB610\uB294 [\uC804\uC1A1] \uD074\uB9AD" style="resize:none;flex:1;"
                @keydown.enter.exact.prevent="handleBtnAction('chat-sendReply')"></textarea>
              <button class="btn btn_send" @click="handleBtnAction('chat-sendReply')" style="white-space:nowrap;height:72px;">\uC804\uC1A1</button>
            </div>
            <div v-else style="margin-top:10px;text-align:center;color:#aaa;font-size:13px;padding:10px;background:#fafafa;border-radius:6px;">
              \uC885\uB8CC\uB41C \uCC44\uD305\uC785\uB2C8\uB2E4.
            </div>
          </template>
          <div v-else-if="uiState.loading" style="text-align:center;color:#aaa;padding:40px;">\u23F3 \uB85C\uB529 \uC911...</div>
          <div v-else style="text-align:center;color:#aaa;padding:40px;">\uCC44\uD305\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0. \uD68C\uC6D0 \uCC44\uD305 \uC774\uB825 \uD0ED ========================================== -->
        <div class="card" v-show="showTab('history')" style="margin:0;">
          <div v-if="uiState.tabMode2!=='tab'" class="dtl-tab-card-title">
            \u{1F552} \uD68C\uC6D0 \uCC44\uD305 \uC774\uB825
            <span class="tab-count">{{ cfMemberChats.length }}</span>
          </div>
          <div v-if="uiState.chat" style="margin-bottom:14px;padding:12px;background:#f9f9f9;border-radius:8px;display:flex;align-items:center;gap:12px;">
            <span style="font-size:13px;color:#555;">
              <span class="ref-link" @click="handleSelectAction('chat-ref', { type:'member', id: uiState.chat.memberId })">
                {{ uiState.chat.memberNm }}
              </span>
              \uC758 \uB2E4\uB978 \uCC44\uD305
            </span>
          </div>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ============================================= -->
          <bo-grid bare :columns="columns.memberChatGrid" :rows="cfMemberChats" row-key="chattRoomId" empty-text="\uB2E4\uB978 \uCC44\uD305 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." />
        </div>
      </div>
    </div>
    <!-- ===== \u25A1. \uC0C1\uC138 \uCE74\uB4DC (\uC218\uC815 \uC2DC \uD0ED) ======================================= -->
    <!-- ===== \u25A0. \uC2E0\uADDC \uCC44\uD305 \uB4F1\uB85D (\uC81C\uBAA9 \uCEE8\uD14C\uC774\uB108\uC640 \uD55C \uCE74\uB4DC) ============================= -->
    <template v-if="cofAnd(cfIsNew, active)">
      <bo-tab-bar :tabs="newTabs" :tab="uiState.tab" :show-modes="false"
        @tab-select="id => handleSelectAction('tab-select', id)" />
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC2E0\uADDC \uB4F1\uB85D \uD0ED (BoFormArea \uC790\uB3D9 \uB80C\uB354) ========================== -->
      <div v-show="uiState.tab==='new'">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED ============================================== -->
        <bo-form-area plain-readonly :columns="columns.newForm" :form="form" :errors="errors"
          :readonly="false" :cols="3" compact :show-actions="false">
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD68C\uC6D0ID + \uBCF4\uAE30 ======================================= -->
          <template #memberId>
            <div style="display:flex;gap:8px;align-items:center;">
              <input class="form-control" v-model="form.memberId" placeholder="\uD68C\uC6D0 ID" :class="errors.memberId ? 'is-invalid' : ''"
                @input="form.memberId && errors.memberId ? delete errors.memberId : null" />
              <span v-if="form.memberId" class="ref-link" @click="handleSelectAction('chat-ref', { type:'member', id: form.memberId })">
                \uBCF4\uAE30
              </span>
            </div>
            <span v-if="errors.memberId" class="field-error">{{ errors.memberId }}</span>
          </template>
        </bo-form-area>
        <div class="form-actions" v-if="!cfDtlMode">
          <button class="btn btn_save" @click="handleBtnAction('form-save')">\uB4F1\uB85D</button>
          <button class="btn btn_cancel" @click="handleBtnAction('form-cancel')">\uCDE8\uC18C</button>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uACE0\uAC1D \uCC44\uD305 \uC870\uD68C \uD0ED ========================================== -->
      <div v-show="uiState.tab==='search'">
        <div style="display:flex;gap:8px;margin-bottom:14px;">
          <input class="form-control" style="max-width:240px;" v-model="uiState.searchUserId" placeholder="\uD68C\uC6D0 ID \uC785\uB825" @keyup.enter="handleBtnAction('userChats-search')" />
          <button class="btn btn_search" @click="handleBtnAction('userChats-search')">\uC870\uD68C</button>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ============================================= -->
        <bo-grid bare :columns="columns.userChatGrid" :rows="cfUserChats" row-key="chattRoomId" :empty-text="uiState.searchUserId ? '\uD574\uB2F9 \uD68C\uC6D0\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.' : '\uD68C\uC6D0 ID\uB97C \uC785\uB825\uD558\uC138\uC694.'" />
      </div>
    </template>
  </bo-container>
  <!-- ===== \u25A1. \uC2E0\uADDC \uCC44\uD305 \uB4F1\uB85D (\uC81C\uBAA9 \uCEE8\uD14C\uC774\uB108 \uB2EB\uAE30) ============================= -->
  <!-- ===== \u25A0. \uBA54\uC2DC\uC9C0 \uB0B4 \uCC38\uC870 \uBAA8\uB2EC (\uC0C1\uD488/\uC8FC\uBB38/\uD074\uB808\uC784) ================================= -->
  <bo-modal :show="refModal.show"
    :title="refModal.type==='product'?'\uC0C1\uD488 \uC0C1\uC138':refModal.type==='order'?'\uC8FC\uBB38 \uC0C1\uC138':'\uD074\uB808\uC784 \uC0C1\uC138'" modal-name="ref" :on-callback="fnCallbackModal" @close="refModal.show = false">
    <div style="text-align:center;color:#aaa;padding:20px;">\uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</div>
    <template #footer>
      <button class="btn btn_close" @click="handleBtnAction('refModal-close')">\uB2EB\uAE30</button>
    </template>
  </bo-modal>
  <!-- ===== \u25A1. \uBA54\uC2DC\uC9C0 \uB0B4 \uCC38\uC870 \uBAA8\uB2EC (\uC0C1\uD488/\uC8FC\uBB38/\uD074\uB808\uC784) ================================= -->
</bo-container>
</div>
`};
