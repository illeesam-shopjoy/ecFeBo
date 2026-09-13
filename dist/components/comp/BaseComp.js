window.BaseAttachGrp={name:"BaseAttachGrp",props:{refTableNm:{default:null},refKeyId:{default:null},refId:{default:""},showToast:{type:Function,default:()=>{}},grpCode:{default:"common"},grpNm:{default:"\uCCA8\uBD80\uD30C\uC77C"},maxCount:{default:10},maxSizeMb:{default:10},allowExt:{default:"*"},readonly:{type:Boolean,default:!1},displayMode:{default:"list"},width:{default:"120px"},height:{default:"120px"}},emits:[],setup(e,{emit:y}){const{computed:T,ref:z,reactive:p,watch:M,onMounted:k}=Vue,n=p({uploading:!1,loading:!1}),l=p([]),f=z([]),C=(t,c={})=>{if(t==="attach-open-picker")return S();if(t==="attach-close-thumb")return G();console.warn("[handleBtnAction] unknown cmd:",t)},E=(t,c={})=>{if(t==="attach-row-remove")return H(c);if(t==="attach-row-open-thumb")return I(c);if(t==="attach-row-show-hover")return r(c.event,c.url);if(t==="attach-row-hide-hover")return u();console.warn("[handleSelectAction] unknown cmd:",t)},g=T(()=>!!(e.refTableNm&&e.refKeyId)),N=t=>({attachId:t.attachId,fileNm:t.fileNm,fileSize:t.fileSize,fileExt:t.fileExt,attachUrl:t.attachUrl||t.storagePath,cdnImgUrl:t.cdnImgUrl||"",storagePath:t.storagePath||"",thumbUrl:t.thumbUrl||"",thumbCdnUrl:t.thumbCdnUrl||""}),x=async()=>{var t;if(g.value){n.loading=!0;try{const v=((t=(await window.coApiSvc.cmAttach.getFilesByRef(e.refTableNm,e.refKeyId)).data)==null?void 0:t.data)||[];l.splice(0,l.length,...v.map(N)),f.value=v.map(i=>({attachId:i.attachId,rowStatus:"N"}))}catch(c){console.error("[BaseAttachGrp] \uD30C\uC77C \uBAA9\uB85D \uC870\uD68C \uC2E4\uD328",c)}finally{n.loading=!1}}};M(g,t=>{t&&x()},{immediate:!0});const o=async()=>{f.value=[],await x()},a=T(()=>!e.allowExt||e.allowExt==="*"?"*":e.allowExt.split(",").map(t=>"."+t.trim()).join(",")),h=z(null),S=()=>{if(!e.readonly){if(l.length>=e.maxCount){e.showToast(`\uCD5C\uB300 ${e.maxCount}\uAC1C\uAE4C\uC9C0 \uCCA8\uBD80 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`,"warning");return}h.value&&h.value.click()}},O=async t=>{var U,W,K;try{(U=t.preventDefault)==null||U.call(t),(W=t.stopPropagation)==null||W.call(t)}catch{}const c=Array.from(t.target.files||[]);if(t.target.value="",!c.length)return;const v=e.maxSizeMb*1024*1024,i=e.allowExt==="*"?null:e.allowExt.split(",").map(m=>m.trim().toLowerCase()),s=e.maxCount-l.length,d=[];for(const m of c.slice(0,s)){const $=m.name.split(".").pop().toLowerCase();if(i&&!i.includes($)){e.showToast(`\uD5C8\uC6A9\uB418\uC9C0 \uC54A\uB294 \uD655\uC7A5\uC790\uC785\uB2C8\uB2E4: .${$}`,"error");continue}if(m.size>v){e.showToast(`\uD30C\uC77C \uD06C\uAE30\uAC00 ${e.maxSizeMb}MB\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4: ${m.name}`,"error");continue}d.push(m)}if(d.length){n.uploading=!0;try{const m=new FormData;d.forEach(w=>m.append("files",w)),m.append("businessCode",e.grpCode);const D=(K=(await window.coApiSvc.cmUpload.uploadMulti(m,"\uCCA8\uBD80\uD30C\uC77C","\uC5C5\uB85C\uB4DC")).data)==null?void 0:K.data;if(!D)throw new Error("\uC5C5\uB85C\uB4DC \uC751\uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");JSON.stringify(D),(D.attachIds||[]).forEach(w=>f.value.push({attachId:w,rowStatus:"I"})),(D.files||[]).forEach(w=>{l.push({attachId:w.attachId,fileNm:w.originalName,fileSize:w.fileSize,fileExt:w.fileExt,attachUrl:w.filePath,cdnImgUrl:w.cdnImgUrl||"",storagePath:w.storagePath||"",thumbUrl:w.thumbUrl||"",thumbCdnUrl:w.thumbCdnUrl||w.thumbUrl||""})});const q=D.uploadedCount||0,X=D.failedCount||0;if(X>0&&q===0){const w=(D.failedFiles||[]).join(", ");e.showToast(`\uC5C5\uB85C\uB4DC \uC2E4\uD328: ${w||"\uD30C\uC77C \uAC80\uC99D \uC624\uB958"}`,"error",0)}else X>0?e.showToast(`${q}\uAC1C \uC5C5\uB85C\uB4DC \uC644\uB8CC, ${X}\uAC1C \uC2E4\uD328`,"warning",0):e.showToast(`${q}\uAC1C \uD30C\uC77C\uC774 \uC5C5\uB85C\uB4DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,"success")}catch(m){console.error("[BaseAttachGrp] \uC5C5\uB85C\uB4DC \uC2E4\uD328",m);const $=coUtil.cofErrMsg(m,"\uC5C5\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");e.showToast($,"error",0)}finally{n.uploading=!1}}},H=async t=>{var i,s;if(e.readonly)return;const c=f.value.findIndex(d=>d.attachId===t&&d.rowStatus==="I");if(c!==-1){f.value.splice(c,1);try{await window.coApiSvc.cmAttach.deleteFile(t)}catch(d){console.error("[BaseAttachGrp] \uD30C\uC77C \uC0AD\uC81C \uC2E4\uD328",d),e.showToast(((s=(i=d.response)==null?void 0:i.data)==null?void 0:s.message)||"\uD30C\uC77C \uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.","error",0);return}}else{const d=f.value.find(U=>U.attachId===t&&U.rowStatus==="N");d?d.rowStatus="D":f.value.push({attachId:t,rowStatus:"D"})}const v=l.findIndex(d=>d.attachId===t);v!==-1&&l.splice(v,1)},j=t=>t?t<1024?t+" B":t<1024*1024?(t/1024).toFixed(1)+" KB":(t/(1024*1024)).toFixed(1)+" MB":"0 B",V=t=>({pdf:"\u{1F4C4}",xlsx:"\u{1F4CA}",xls:"\u{1F4CA}",docx:"\u{1F4DD}",doc:"\u{1F4DD}",pptx:"\u{1F4D1}",ppt:"\u{1F4D1}",zip:"\u{1F5DC}\uFE0F",jpg:"\u{1F5BC}\uFE0F",jpeg:"\u{1F5BC}\uFE0F",png:"\u{1F5BC}\uFE0F",gif:"\u{1F5BC}\uFE0F",webp:"\u{1F5BC}\uFE0F",svg:"\u{1F5BC}\uFE0F",mp4:"\u{1F3AC}",mov:"\u{1F3AC}",mp3:"\u{1F3B5}"})[t==null?void 0:t.toLowerCase()]||"\u{1F4CE}",A=new Set(["jpg","jpeg","png","gif","webp","bmp","svg"]),_=t=>A.has(t==null?void 0:t.toLowerCase()),B=p({show:!1,url:"",nm:""}),I=t=>{B.url=t.cdnImgUrl||t.attachUrl,B.nm=t.fileNm,B.show=!0},G=()=>{B.show=!1},P=p({show:!1,url:"",x:0,y:0}),r=(t,c)=>{if(!c)return;const v=t.currentTarget.getBoundingClientRect();P.x=v.right+8,P.y=v.top,P.url=c,P.show=!0},u=()=>{P.show=!1},b=p({fromIdx:null});return{uiState:n,files:l,cfAcceptAttr:a,fileInputRef:h,cfHasRef:g,thumbState:B,hoverState:P,dragState:b,handleBtnAction:C,handleSelectAction:E,onFileChange:O,onDragStart:t=>{b.fromIdx=t},onDragOver:t=>{t.preventDefault()},onDrop:async t=>{var i,s;const c=b.fromIdx;if(b.fromIdx=null,e.readonly||c===null||c===t)return;const v=l.splice(c,1)[0];l.splice(t,0,v),l.forEach((d,U)=>{d.sortOrd=U+1});try{await Promise.all(l.map((d,U)=>window.coApiSvc.cmAttach.updateSort(d.attachId,U+1))),e.showToast("\uC21C\uC11C\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(d){console.error("[BaseAttachGrp] sort update failed",d),e.showToast(((s=(i=d.response)==null?void 0:i.data)==null?void 0:s.message)||"\uC21C\uC11C \uC800\uC7A5 \uC2E4\uD328","error",0)}},fnFmtSize:j,fnExtIcon:V,fnIsImage:_,reload:o,pendingChanges:f}},template:`
<div :style="displayMode==='image' ? 'display:inline-flex;flex-direction:column;align-items:center;gap:8px;' : 'border:1px solid #e8e8e8;border-radius:8px;background:#fafafa;padding:12px 14px;'">
  <input ref="fileInputRef" type="file" :accept="cfAcceptAttr" :multiple="displayMode!=='image' ? maxCount>1 : false" style="display:none;" @change="onFileChange" @click.stop />
  <!-- ============= [image \uBAA8\uB4DC] \uB2E8\uC77C \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0 \uBC15\uC2A4 UI ============= -->
  <template v-if="displayMode==='image'">
    <!-- \uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30 \uBC15\uC2A4 (\uBCF4\uAE30 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uD074\uB9AD \uBE44\uD65C\uC131) -->
    <div @click.prevent.stop="readonly ? null : handleBtnAction('attach-open-picker')"
      :style="{width:width,height:height,border:'2px dashed #e0e0e0',borderRadius:'10px',overflow:'hidden',cursor:readonly?'default':'pointer',background:'#fafafa',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',transition:'border-color .15s'}"
      @mouseenter="e=>{ if(!readonly) e.currentTarget.style.borderColor='#e8587a'; }"
      @mouseleave="e=>e.currentTarget.style.borderColor='#e0e0e0'"
      :title="(files[0]?.fileNm) || (readonly ? '' : '\uD074\uB9AD\uD558\uC5EC \uC774\uBBF8\uC9C0 \uC120\uD0DD')">
      <span v-if="uiState.loading || uiState.uploading" style="font-size:22px;">
        \u23F3
      </span>
      <img v-else-if="files[0] ? ((files[0].thumbCdnUrl || files[0].cdnImgUrl)) : false"
        :src="files[0].thumbCdnUrl || files[0].cdnImgUrl"
        style="width:100%;height:100%;object-fit:cover;display:block;" />
      <span v-else style="font-size:32px;color:#ccc;">
        \u{1F464}
      </span>
    </div>
    <!-- \uBC84\uD2BC (\uBCF4\uAE30 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uC228\uAE40) -->
    <div v-if="!readonly" style="display:flex;gap:6px;">
      <button type="button" @click.prevent.stop="handleBtnAction('attach-open-picker')" :disabled="uiState.uploading"
        style="font-size:11px;padding:3px 10px;border:1px solid #d9d9d9;border-radius:5px;background:#fff;cursor:pointer;color:#555;transition:all .15s;"
        @mouseenter="e=>{e.currentTarget.style.borderColor='#e8587a';e.currentTarget.style.color='#e8587a';}"
        @mouseleave="e=>{e.currentTarget.style.borderColor='#d9d9d9';e.currentTarget.style.color='#555';}">
        {{ uiState.uploading ? '\uC5C5\uB85C\uB4DC\uC911\u2026' : '\u{1F4F7} \uBCC0\uACBD' }}
      </button>
      <button v-if="files[0]" type="button" @click.prevent.stop="handleSelectAction('attach-row-remove', files[0].attachId)"
        style="font-size:11px;padding:3px 10px;border:1px solid #fca5a5;border-radius:5px;background:#fff;cursor:pointer;color:#e8587a;transition:all .15s;"
        @mouseenter="e=>{e.currentTarget.style.background='#fde8e8';}"
        @mouseleave="e=>{e.currentTarget.style.background='#fff';}">
        \u2715 \uC0AD\uC81C
      </button>
    </div>
    <span v-if="!readonly" style="font-size:10px;color:#bbb;">
      {{ allowExt }} / \uCD5C\uB300 {{ maxSizeMb }}MB
    </span>
    <!-- \uC800\uC7A5 \uAE30\uC900\uC815\uBCF4 (\uC774\uBBF8\uC9C0 \uBAA8\uB4DC: \uBC15\uC2A4 \uC544\uB798 \uC138\uB85C \uBC30\uCE58) -->
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;font-size:10px;color:#aaa;line-height:1.4;margin-top:2px;">
      <span style="display:inline-flex;align-items:center;gap:3px;">
        <span style="color:#bbb;">\u{1F4C2}</span>
        <span style="color:#777;font-weight:500;">{{ grpNm }}</span>
      </span>
      <code style="font-family:monospace;color:#7c5cbf;background:#f7f4ff;padding:0 4px;border-radius:3px;font-size:9px;">{{ grpCode }}</code>
      <code v-if="refId" style="font-family:monospace;color:#4a90d9;background:#eff6fc;padding:0 4px;border-radius:3px;font-size:9px;">{{ refId }}</code>
      <code v-if="refKeyId" style="font-family:monospace;color:#999;background:#f5f5f5;padding:0 4px;border-radius:3px;font-size:9px;">{{ refKeyId }}</code>
    </div>
  </template>
  <!-- ============= [list \uBAA8\uB4DC] \uAE30\uBCF8 \uD30C\uC77C \uBAA9\uB85D UI ============= -->
  <template v-else>
  <!-- \uC800\uC7A5 \uAE30\uC900\uC815\uBCF4 (businessCode / grpNm / refId / refTableNm+refKeyId) -->
  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:4px 10px;font-size:11px;color:#888;margin-bottom:8px;padding:6px 8px;background:#fff;border:1px solid #f0f0f0;border-radius:4px;">
    <span style="display:inline-flex;align-items:center;gap:3px;">
      <span style="color:#bbb;">\u{1F4C2}</span>
      <span style="color:#666;font-weight:500;">{{ grpNm }}</span>
    </span>
    <span style="color:#e0e0e0;">|</span>
    <span style="display:inline-flex;align-items:center;gap:3px;">
      <span style="color:#bbb;">\uBD84\uB958</span>
      <code style="font-family:monospace;color:#7c5cbf;background:#f7f4ff;padding:1px 5px;border-radius:3px;">{{ grpCode }}</code>
    </span>
    <span v-if="refId" style="color:#e0e0e0;">|</span>
    <span v-if="refId" style="display:inline-flex;align-items:center;gap:3px;">
      <span style="color:#bbb;">\uCC38\uC870</span>
      <code style="font-family:monospace;color:#4a90d9;background:#eff6fc;padding:1px 5px;border-radius:3px;">{{ refId }}</code>
    </span>
    <span v-if="refKeyId" style="color:#e0e0e0;">|</span>
    <span v-if="refKeyId" style="display:inline-flex;align-items:center;gap:3px;">
      <span style="color:#bbb;">\uC5F0\uACC4ID</span>
      <code style="font-family:monospace;color:#999;background:#f5f5f5;padding:1px 5px;border-radius:3px;">{{ refKeyId }}</code>
    </span>
  </div>
  <!-- \uD30C\uC77C \uBAA9\uB85D -->
  <div v-if="files.length" style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px;">
    <div v-for="(f, idx) in files" :key="f.attachId"
      :draggable="!readonly"
      @dragstart="readonly ? null : onDragStart(idx)"
      @dragover.prevent="readonly ? null : onDragOver"
      @drop.prevent="readonly ? null : onDrop(idx)"
      :style="'display:flex;align-items:center;gap:8px;padding:7px 10px;background:#fff;border:1px solid #f0f0f0;border-radius:6px;transition:background .1s;cursor:' + (readonly ? 'default' : 'grab') + ';'"
      @mouseenter="e=>e.currentTarget.style.background='#fff8f9'"
      @mouseleave="e=>e.currentTarget.style.background='#fff'">
      <!-- \uC21C\uC11C \uBC88\uD638 -->
      <span style="flex-shrink:0;width:16px;font-size:10px;color:#ccc;text-align:center;line-height:1;">
        {{ idx+1 }}
      </span>
      <!-- \uB4DC\uB798\uADF8 \uD578\uB4E4 (\uBCF4\uAE30 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uC228\uAE40) -->
      <span v-if="!readonly" style="flex-shrink:0;font-size:12px;color:#ccc;cursor:grab;line-height:1;" title="\uB4DC\uB798\uADF8\uD558\uC5EC \uC21C\uC11C \uBCC0\uACBD">
        \u283F
      </span>
      <span style="font-size:15px;flex-shrink:0;line-height:1;">
        {{ fnExtIcon(f.fileExt) }}
      </span>
      <span style="flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;">
        <span style="font-size:12px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:500;" :title="f.fileNm">
          {{ f.fileNm }}
        </span>
        <span v-if="f.attachUrl" style="font-size:10px;color:#bbb;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="f.attachUrl">
          {{ f.attachUrl }}
        </span>
      </span>
      <!-- \uC561\uC158 \uC544\uC774\uCF58: \uB2E4\uC6B4\uB85C\uB4DC / \uD31D\uC5C5\uBCF4\uAE30 / \uC378\uB124\uC77Chover+\uD074\uB9AD -->
      <span style="display:inline-flex;align-items:center;gap:3px;flex-shrink:0;">
        <a :href="f.cdnImgUrl || f.attachUrl" :download="f.fileNm"
          :title="'\uB2E4\uC6B4\uB85C\uB4DC | ' + (f.cdnImgUrl || f.attachUrl)"
          style="width:22px;height:22px;border:1px solid #e0e0e0;border-radius:4px;background:#fff;cursor:pointer;font-size:12px;color:#666;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;transition:all .15s;"
          @mouseenter="e=>{e.currentTarget.style.borderColor='#4a90d9';e.currentTarget.style.color='#4a90d9';}"
          @mouseleave="e=>{e.currentTarget.style.borderColor='#e0e0e0';e.currentTarget.style.color='#666';}">
          \u2B07
        </a>
        <!-- \uD31D\uC5C5\uBCF4\uAE30: \uC774\uBBF8\uC9C0\uBA74 hover \uBBF8\uB9AC\uBCF4\uAE30 + \uD074\uB9AD \uBAA8\uB2EC, \uC544\uB2C8\uBA74 \uD074\uB9AD \uBAA8\uB2EC -->
        <button @click.stop="handleSelectAction('attach-row-open-thumb', f)" type="button"
          :title="'\uD31D\uC5C5\uBCF4\uAE30 | ' + (f.cdnImgUrl || f.attachUrl)"
          style="width:22px;height:22px;border:1px solid #e0e0e0;border-radius:4px;background:#fff;cursor:pointer;font-size:12px;color:#666;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .15s;"
          @mouseenter="e=>{e.currentTarget.style.borderColor='#7c5cbf';e.currentTarget.style.color='#7c5cbf';handleSelectAction('attach-row-show-hover', {event:e, url:f.cdnImgUrl||f.attachUrl});}"
          @mouseleave="e=>{e.currentTarget.style.borderColor='#e0e0e0';e.currentTarget.style.color='#666';handleSelectAction('attach-row-hide-hover');}">
          \u2197
        </button>
        <!-- \uC378\uB124\uC77C \uC544\uC774\uCF58: hover \uBBF8\uB9AC\uBCF4\uAE30 + \uD074\uB9AD \uBAA8\uB2EC -->
        <button v-if="fnIsImage(f.fileExt)" @click.stop="handleSelectAction('attach-row-open-thumb', f)" type="button"
          :title="'\uC378\uB124\uC77C\uBCF4\uAE30 | ' + (f.thumbCdnUrl || f.cdnImgUrl || f.attachUrl)"
          style="width:22px;height:22px;border:1px solid #e0e0e0;border-radius:4px;background:#fff;cursor:pointer;font-size:12px;color:#666;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .15s;overflow:hidden;"
          @mouseenter="e=>{e.currentTarget.style.borderColor='#e8587a';handleSelectAction('attach-row-show-hover', {event:e, url:f.thumbCdnUrl||f.cdnImgUrl||f.attachUrl});}"
          @mouseleave="e=>{e.currentTarget.style.borderColor='#e0e0e0';handleSelectAction('attach-row-hide-hover');}">
          <img v-if="f.thumbCdnUrl" :src="f.thumbCdnUrl"
            style="width:100%;height:100%;object-fit:cover;display:block;" @error="e=>{e.target.style.display='none';e.target.nextElementSibling.style.display='inline-flex';}" />
          <span style="font-size:12px;color:#666;" :style="{display:f.thumbCdnUrl?'none':'inline-flex'}">
            \u{1F5BC}
          </span>
        </button>
      </span>
      <span style="font-size:11px;color:#bbb;flex-shrink:0;white-space:nowrap;">
        {{ fnFmtSize(f.fileSize) }}
      </span>
      <button v-if="!readonly" @click.stop="handleSelectAction('attach-row-remove', f.attachId)" title="\uC0AD\uC81C"
        style="flex-shrink:0;width:18px;height:18px;border:none;background:#f0f0f0;border-radius:50%;cursor:pointer;font-size:10px;color:#888;display:inline-flex;align-items:center;justify-content:center;padding:0;line-height:1;transition:background .1s;"
        @mouseenter="e=>e.currentTarget.style.background='#fde8e8'"
        @mouseleave="e=>e.currentTarget.style.background='#f0f0f0'">
        \u2715
      </button>
    </div>
  </div>
  <div v-else-if="uiState.loading" style="font-size:12px;color:#c0c0c0;padding:6px 2px 10px;display:flex;align-items:center;gap:5px;">
    <span style="font-size:14px;">
      \u23F3
    </span>
    \uD30C\uC77C \uBAA9\uB85D \uBD88\uB7EC\uC624\uB294 \uC911...
  </div>
  <div v-else style="font-size:12px;color:#c0c0c0;padding:6px 2px 10px;display:flex;align-items:center;gap:5px;">
    <span style="font-size:14px;">
      \u{1F4C2}
    </span>
    \uCCA8\uBD80\uB41C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
  </div>
  <!-- \uD558\uB2E8 \uBC84\uD2BC + \uC548\uB0B4 (\uBCF4\uAE30 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uC228\uAE40) -->
  <div v-if="!readonly" style="display:flex;align-items:center;gap:10px;">
    <button @click="handleBtnAction('attach-open-picker')" :disabled="uiState.uploading" type="button"
      style="display:inline-flex;align-items:center;gap:5px;padding:6px 13px;border:1px solid #d9d9d9;border-radius:6px;background:#fff;cursor:pointer;font-size:12px;color:#555;font-weight:500;transition:all .15s;white-space:nowrap;"
      @mouseenter="e=>{if(!uiState.uploading){e.currentTarget.style.borderColor='#e8587a';e.currentTarget.style.color='#e8587a';}}"
      @mouseleave="e=>{e.currentTarget.style.borderColor='#d9d9d9';e.currentTarget.style.color='#555';}">
      <span v-if="uiState.uploading">
        \u23F3 \uC5C5\uB85C\uB4DC \uC911...
      </span>
      <span v-else>
        \u{1F4CE} \uD30C\uC77C\uCCA8\uBD80
      </span>
    </button>
    <span style="font-size:11px;color:#bbb;">
      {{ files.length }} / {{ maxCount }}\uAC1C
      <span style="margin:0 4px;color:#e8e8e8;">
        |
      </span>
      \uCD5C\uB300 {{ maxSizeMb }}MB
      <span v-if="allowExt!=='*'">
        <span style="margin:0 4px;color:#e8e8e8;">
          |
        </span>
        {{ allowExt }}
      </span>
    </span>
  </div>
  <!-- hover \uBBF8\uB9AC\uBCF4\uAE30 \uB808\uC774\uC5B4 (fixed, \uB9C8\uC6B0\uC2A4 \uC6B0\uCE21 \uD558\uB2E8) -->
  <div v-if="hoverState.show ? (hoverState.url) : false" style="position:fixed;z-index:10000;pointer-events:none;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.35);background:#fff;border:1px solid #e0e0e0;" :style="{left: hoverState.x + 'px', top: hoverState.y + 'px'}">
  <img :src="hoverState.url" style="display:block;max-width:200px;max-height:200px;object-fit:contain;" />
</div>
<!-- \uD31D\uC5C5 \uBAA8\uB2EC -->
<div v-if="thumbState.show" @click.self="handleBtnAction('attach-close-thumb')"
    style="position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;">
  <div style="background:#fff;border-radius:12px;padding:16px;max-width:90vw;max-height:90vh;display:flex;flex-direction:column;gap:10px;box-shadow:0 8px 40px rgba(0,0,0,.4);">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;">
      <span style="font-size:13px;color:#444;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:60vw;" :title="thumbState.nm">
        {{ thumbState.nm }}
      </span>
      <button @click="handleBtnAction('attach-close-thumb')" type="button"
          style="flex-shrink:0;width:24px;height:24px;border:none;background:#f0f0f0;border-radius:50%;cursor:pointer;font-size:13px;color:#888;display:inline-flex;align-items:center;justify-content:center;padding:0;"
          @mouseenter="e=>e.currentTarget.style.background='#fde8e8'"
          @mouseleave="e=>e.currentTarget.style.background='#f0f0f0'">
        \u2715
      </button>
    </div>
    <img :src="thumbState.url" :alt="thumbState.nm"
        style="max-width:80vw;max-height:75vh;object-fit:contain;border-radius:6px;" />
  </div>
</div>
  </template>
</div>
`},window.BaseAttachOne={name:"BaseAttachOne",props:{modelValue:{default:null},showToast:{type:Function,default:()=>{}},grpCode:{default:"common"},grpNm:{default:"\uCCA8\uBD80\uD30C\uC77C"},maxSizeMb:{default:5},allowExt:{default:"jpg,jpeg,png,gif,webp"},readonly:{type:Boolean,default:!1},width:{default:"120px"},height:{default:"120px"}},emits:["update:modelValue"],setup(e,{emit:y}){const{reactive:T,ref:z,watch:p,onMounted:M}=Vue,k=T({uploading:!1,loading:!1}),n=T({attachId:null,cdnImgUrl:"",thumbCdnUrl:"",fileNm:""}),l=z(null),f=(o,a={})=>{if(o==="attach-open-picker")return g();if(o==="attach-remove")return x();console.warn("[handleBtnAction] unknown cmd:",o)},C=(o,a={})=>{console.warn("[handleSelectAction] unknown cmd:",o)},E=async o=>{var a;if(o){k.loading=!0;try{const S=(a=(await window.coApiSvc.cmAttach.getById(o)).data)==null?void 0:a.data;S?(n.attachId=S.attachId,n.cdnImgUrl=S.cdnImgUrl||"",n.thumbCdnUrl=S.thumbCdnUrl||"",n.fileNm=S.fileNm||""):(n.attachId=null,n.cdnImgUrl="",n.thumbCdnUrl="",n.fileNm="")}catch(h){console.error("[BaseAttachOne] load fail",h)}finally{k.loading=!1}}};M(()=>{e.modelValue&&E(e.modelValue)}),p(()=>e.modelValue,o=>{o&&E(o)});const g=()=>{var o;e.readonly||k.uploading||(o=l.value)==null||o.click()},N=async o=>{var O,H,j,V;try{(O=o.preventDefault)==null||O.call(o),(H=o.stopPropagation)==null||H.call(o)}catch{}const a=(j=o.target.files)==null?void 0:j[0];if(o.target.value="",!a)return;const h=a.name.split(".").pop().toLowerCase();if(!e.allowExt.split(",").map(A=>A.trim().toLowerCase()).includes(h)){e.showToast(`\uD5C8\uC6A9\uB418\uC9C0 \uC54A\uB294 \uD655\uC7A5\uC790\uC785\uB2C8\uB2E4: .${h}`,"error");return}if(a.size>e.maxSizeMb*1024*1024){e.showToast(`${e.maxSizeMb}MB \uC774\uD558 \uD30C\uC77C\uB9CC \uCCA8\uBD80 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`,"error");return}k.uploading=!0;try{n.attachId&&(await window.coApiSvc.cmAttach.deleteFile(n.attachId),n.attachId=null,n.cdnImgUrl="",n.thumbCdnUrl="");const A=new FormData;A.append("files",a),A.append("businessCode",e.grpCode);const B=(V=(await window.coApiSvc.cmUpload.uploadMulti(A,"\uCCA8\uBD80\uD30C\uC77C","\uC5C5\uB85C\uB4DC")).data)==null?void 0:V.data;if(!B)throw new Error("\uC5C5\uB85C\uB4DC \uC751\uB2F5 \uC5C6\uC74C");const I=(B.files||[])[0];I&&(n.attachId=I.attachId,n.cdnImgUrl=I.cdnImgUrl||"",n.thumbCdnUrl=I.thumbCdnUrl||I.cdnImgUrl||"",n.fileNm=I.originalName||""),y("update:modelValue",I?I.attachId:null),e.showToast("\uC5C5\uB85C\uB4DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(A){e.showToast(coUtil.cofErrMsg(A,"\uC5C5\uB85C\uB4DC \uC624\uB958"),"error",0)}finally{k.uploading=!1}},x=async()=>{var o,a;if(!e.readonly&&n.attachId)try{await window.coApiSvc.cmAttach.deleteFile(n.attachId),n.attachId=null,n.cdnImgUrl="",n.thumbCdnUrl="",n.fileNm="",y("update:modelValue",null),e.showToast("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(h){e.showToast(((a=(o=h.response)==null?void 0:o.data)==null?void 0:a.message)||"\uC0AD\uC81C \uC624\uB958","error",0)}};return{uiState:k,file:n,inputRef:l,handleBtnAction:f,handleSelectAction:C,onFileChange:N}},template:`
<div style="display:inline-flex;flex-direction:column;align-items:center;gap:8px;">
  <input ref="inputRef" type="file" style="display:none;" :accept="allowExt.split(',').map(e=>'.'+e.trim()).join(',')" @change="onFileChange" @click.stop />
  <!-- \uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30 \uBC15\uC2A4 (\uBCF4\uAE30 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uD074\uB9AD \uBE44\uD65C\uC131) -->
  <div @click.prevent.stop="readonly ? null : handleBtnAction('attach-open-picker')"
    :style="{width:width,height:height,border:'2px dashed #e0e0e0',borderRadius:'10px',overflow:'hidden',cursor:readonly?'default':'pointer',background:'#fafafa',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',transition:'border-color .15s'}"
    @mouseenter="e=>{ if(!readonly) e.currentTarget.style.borderColor='#e8587a'; }"
    @mouseleave="e=>e.currentTarget.style.borderColor='#e0e0e0'"
    :title="file.fileNm || (readonly ? '' : '\uD074\uB9AD\uD558\uC5EC \uC774\uBBF8\uC9C0 \uC120\uD0DD')">
    <span v-if="uiState.loading || uiState.uploading" style="font-size:22px;">
      \u23F3
    </span>
    <img v-else-if="file.thumbCdnUrl || file.cdnImgUrl"
      :src="file.thumbCdnUrl || file.cdnImgUrl"
      style="width:100%;height:100%;object-fit:cover;display:block;" />
    <span v-else style="font-size:32px;color:#ccc;">
      \u{1F464}
    </span>
  </div>
  <!-- \uBC84\uD2BC (\uBCF4\uAE30 \uBAA8\uB4DC\uC5D0\uC11C\uB294 \uC228\uAE40) -->
  <div v-if="!readonly" style="display:flex;gap:6px;">
    <button type="button" @click.prevent.stop="handleBtnAction('attach-open-picker')" :disabled="uiState.uploading"
      style="font-size:11px;padding:3px 10px;border:1px solid #d9d9d9;border-radius:5px;background:#fff;cursor:pointer;color:#555;transition:all .15s;"
      @mouseenter="e=>{e.currentTarget.style.borderColor='#e8587a';e.currentTarget.style.color='#e8587a';}"
      @mouseleave="e=>{e.currentTarget.style.borderColor='#d9d9d9';e.currentTarget.style.color='#555';}">
      {{ uiState.uploading ? '\uC5C5\uB85C\uB4DC\uC911\u2026' : '\u{1F4F7} \uBCC0\uACBD' }}
    </button>
    <button v-if="file.attachId" type="button" @click.prevent.stop="handleBtnAction('attach-remove')"
      style="font-size:11px;padding:3px 10px;border:1px solid #fca5a5;border-radius:5px;background:#fff;cursor:pointer;color:#e8587a;transition:all .15s;"
      @mouseenter="e=>{e.currentTarget.style.background='#fde8e8';}"
      @mouseleave="e=>{e.currentTarget.style.background='#fff';}">
      \u2715 \uC0AD\uC81C
    </button>
  </div>
  <span v-if="!readonly" style="font-size:10px;color:#bbb;">
    {{ allowExt }} / \uCD5C\uB300 {{ maxSizeMb }}MB
  </span>
  <!-- \uC800\uC7A5 \uAE30\uC900\uC815\uBCF4 (\uADF8\uB8F9\uBA85/businessCode/attachId) -->
  <div style="display:flex;flex-direction:column;align-items:center;gap:2px;font-size:10px;color:#aaa;line-height:1.4;margin-top:2px;">
    <span style="display:inline-flex;align-items:center;gap:3px;">
      <span style="color:#bbb;">\u{1F4C2}</span>
      <span style="color:#777;font-weight:500;">{{ grpNm }}</span>
    </span>
    <code style="font-family:monospace;color:#7c5cbf;background:#f7f4ff;padding:0 4px;border-radius:3px;font-size:9px;">{{ grpCode }}</code>
    <code v-if="modelValue" style="font-family:monospace;color:#999;background:#f5f5f5;padding:0 4px;border-radius:3px;font-size:9px;">{{ modelValue }}</code>
  </div>
</div>
`},(function(){if(document.getElementById("base-html-editor-style"))return;const y=document.createElement("style");y.id="base-html-editor-style",y.textContent=`
    /* \uD234\uBC14 \uC601\uC5ED\uB9CC overflow \uD574\uC81C (\uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uAC00 \uC798\uB9AC\uC9C0 \uC54A\uB3C4\uB85D).
     * \u203B \uBCF8\uBB38 \uCEE8\uD14C\uC774\uB108(-main/-ww-container/-md-container)\uC5D0 overflow:visible \uC744 \uC8FC\uBA74
     *   \uBBF8\uB9AC\uBCF4\uAE30 ON \uC73C\uB85C \uD3ED\uC774 \uC881\uC544\uC9C8 \uB54C \uB0B4\uC6A9\uC774 \uCEE8\uD14C\uC774\uB108 \uBC16\uC73C\uB85C \uD758\uB7EC \uD234\uBC14\uC640 \uACB9\uCE68(\uB808\uC774\uC544\uC6C3 \uBD95\uAD34).
     *   \uD31D\uC5C5\uC740 \uC774\uBBF8 position:fixed \uB77C \uBD80\uBAA8 overflow \uC640 \uBB34\uAD00\uD558\uBBC0\uB85C \uBCF8\uBB38\uC5D4 \uAC15\uC81C\uD558\uC9C0 \uC54A\uB294\uB2E4. */
    .toastui-editor-defaultUI,
    .toastui-editor-defaultUI-toolbar,
    .toastui-editor-toolbar,
    .toastui-editor-toolbar-icons { overflow: visible !important; }

    /* \uD31D\uC5C5 \u2014 viewport \uAE30\uC900 fixed \uB85C \uBCC0\uACBD\uD558\uC5EC \uC5B4\uB5A4 \uBD80\uBAA8\uC758 overflow:hidden \uB3C4 \uBB34\uC2DC */
    .toastui-editor-popup {
      z-index: 10050 !important;
      position: fixed !important;
    }
    /* \uD45C \uD31D\uC5C5\uC740 \uC608\uC678: \uADF8\uB9AC\uB4DC \uC140 \uC88C\uD45C \uACC4\uC0B0\uC774 fixed \uCEE8\uD14C\uC774\uB108 \uC548\uC5D0\uC11C \uC5B4\uAE0B\uB098 hover \uAC00
     * \uC5B4\uAE0B\uB0A8. absolute \uC720\uC9C0 (\uD3ED\uC774 \uC791\uC544 \uC798\uB9BC \uC601\uD5A5\uB3C4 \uBBF8\uBBF8). */
    .toastui-editor-popup.toastui-editor-popup-add-table {
      position: absolute !important;
    }
    .toastui-editor-popup-body {
      min-width: 360px;
      max-height: 70vh;
      overflow-y: auto;
      padding-bottom: 8px;
    }
    /* \uD558\uB2E8 \uD655\uC778/\uCDE8\uC18C \uBC84\uD2BC \uC601\uC5ED \u2014 \uC2A4\uD06C\uB864 \uC2DC\uC5D0\uB3C4 \uD56D\uC0C1 \uD558\uB2E8 \uACE0\uC815 */
    .toastui-editor-popup .toastui-editor-button-container,
    .toastui-editor-popup-add-image .toastui-editor-button-container,
    .toastui-editor-popup-add-link  .toastui-editor-button-container,
    .toastui-editor-popup-add-table .toastui-editor-button-container {
      margin-top: 12px;
      padding-top: 8px;
      border-top: 1px solid #eee;
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      position: sticky;
      bottom: 0;
      background: #fff;
    }

    /* \uD234\uBC14 \uD55C \uC904 \uACE0\uC815 \u2014 \uC904\uBC14\uAFC8(2\uC904) \uBC29\uC9C0. \uC881\uC73C\uBA74 \uAC00\uB85C \uC2A4\uD06C\uB864 */
    .toastui-editor-toolbar { overflow-x: auto; overflow-y: visible; }
    .toastui-editor-defaultUI-toolbar {
      flex-wrap: nowrap !important;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: visible;
    }
    .toastui-editor-toolbar-group { flex-wrap: nowrap !important; flex-shrink: 0; }

    /* \uB798\uD37C div \uAC00 \uD14C\uB450\uB9AC/\uB77C\uC6B4\uB4DC\uB97C \uB2F4\uB2F9 \u2014 Toast \uAE30\uBCF8 UI \uB294 \uC790\uCCB4 \uD14C\uB450\uB9AC \uC81C\uAC70(\uC774\uC911 \uD14C\uB450\uB9AC \uBC29\uC9C0).
     * \uB192\uC774\uB294 Toast \uAC00 props.height \uB85C \uC9C1\uC811 \uAD00\uB9AC\uD558\uBBC0\uB85C \uAC15\uC81C\uD558\uC9C0 \uC54A\uC74C(\uAC15\uC81C \uC2DC 0 \uB192\uC774 \uBD80\uBAA8\uB85C \uBD95\uAD34). */
    .base-html-editor-box .toastui-editor-defaultUI {
      border: none !important;
      border-radius: inherit;
    }
  `,document.head.appendChild(y)})(),window.BaseHtmlEditor={name:"BaseHtmlEditor",props:{modelValue:{type:String,default:""},height:{type:String,default:"320px"},showSourceToggle:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:y}){const{ref:T,watch:z,onMounted:p,onBeforeUnmount:M,nextTick:k}=Vue,n=T(null),l=T("wysiwyg"),f=T(!1),C=T(50),E=T(null);let g=null,N=!1,x=null,o=null,a=null,h=null,S=null;const O=()=>{k(()=>{try{window.dispatchEvent(new Event("resize"))}catch{}})},H=r=>{r.preventDefault();const u=E.value;u&&(h=b=>{const R=u.getBoundingClientRect();let L=((b.touches?b.touches[0].clientX:b.clientX)-R.left)/R.width*100;L=Math.max(20,Math.min(80,L)),C.value=L,O()},S=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",S),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",S)},document.addEventListener("mousemove",h),document.addEventListener("mouseup",S),document.addEventListener("touchmove",h,{passive:!1}),document.addEventListener("touchend",S))},j=(r,u={})=>{if(r==="editor-set-mode"){l.value=u;return}else if(r==="editor-toggle-preview"){f.value=!f.value,O();return}else{if(r==="editor-split-drag")return H(u);if(r==="editor-clear")return y("update:modelValue","");console.warn("[handleBtnAction] unknown cmd:",r)}},V=(r,u={})=>{if(r==="editor-source-input")return y("update:modelValue",u.target.value);console.warn("[handleSelectAction] unknown cmd:",r)},A=()=>{if(g){try{g.destroy()}catch{}g=null}},_=()=>{if(g)return;const r=n.value;if(!r)return;const u=window.toastui&&window.toastui.Editor||window.Editor;if(!u){console.warn("[BaseHtmlEditor] Toast UI Editor library not loaded");return}g=new u({el:r,height:e.height,initialEditType:"wysiwyg",previewStyle:"vertical",hideModeSwitch:!0,language:"ko-KR",usageStatistics:!1,initialValue:e.modelValue||"",toolbarItems:[["heading","bold","italic","strike"],["hr","quote"],["ul","ol","task"],["table","image","link"],["code","codeblock"]],hooks:{addImageBlobHook:(b,R)=>{const F=new FileReader;F.onload=L=>R(L.target.result,b.name||"image"),F.readAsDataURL(b)}}}),g.on("change",()=>{if(!N)try{y("update:modelValue",g.getHTML())}catch{}}),B(r)},B=r=>{if(!r)return;let u=null;const b=i=>{const s=i.target.closest(".toastui-editor-toolbar-icons");s&&r.contains(s)&&(s.closest(".toastui-editor-popup")||(u=s.getBoundingClientRect()))};r.addEventListener("mousedown",b,!0);const R=i=>{if(!(!i||!u))try{requestAnimationFrame(()=>{const s=i.getBoundingClientRect(),d=4,U=window.innerHeight,W=window.innerWidth;let K=u.bottom+d,m=u.left;K+s.height>U-8&&(K=Math.max(8,u.top-s.height-d)),m+s.width>W-8&&(m=Math.max(8,W-s.width-8)),i.style.top=K+"px",i.style.left=m+"px",i.style.right="auto",i.style.bottom="auto"})}catch{}},F=new WeakSet,L=i=>i.classList&&i.classList.contains("toastui-editor-popup-add-table"),t=i=>{if(L(i)||F.has(i))return;const s=i.style.display;s==="none"||s===""||(F.add(i),R(i))},c=i=>{i.style.display==="none"&&F.delete(i)},v=new MutationObserver(i=>{i.forEach(s=>{s.type==="attributes"&&s.target.classList&&s.target.classList.contains("toastui-editor-popup")&&(c(s.target),t(s.target)),s.type==="childList"&&s.addedNodes.forEach(d=>{d.nodeType===1&&d.classList&&d.classList.contains("toastui-editor-popup")&&t(d)})})});v.observe(r,{attributes:!0,subtree:!0,childList:!0,attributeFilter:["style","class"]}),x=v,o=b,a=r},I=()=>{if(!g)return;const r=(()=>{try{return g.getHTML()}catch{return""}})(),u=e.modelValue||"";if(r!==u){N=!0;try{g.setHTML(u,!1)}finally{setTimeout(()=>{N=!1},30)}}};p(async()=>{await k(),_()}),M(()=>{A()}),z(()=>e.modelValue,()=>{l.value==="wysiwyg"&&g&&I()}),z(l,async r=>{r==="wysiwyg"&&(await k(),g?I():_())});const G=Vue.computed(()=>({width:"100%",minHeight:e.height,padding:"12px 14px",border:"1px solid #d9d9d9",borderRadius:"6px",fontFamily:"'Consolas','D2Coding',monospace",fontSize:"12px",lineHeight:"1.7",color:"#333",resize:"vertical",boxSizing:"border-box",margin:0,background:"#fafafa",outline:"none"})),P=Vue.computed(()=>{const r=f.value?100-C.value:0;return{flex:"0 0 "+r+"%",width:r+"%",minWidth:0,height:e.height,padding:f.value?"14px 16px":"0",border:f.value?"1px solid #d0d0d0":"none",borderLeft:"none",borderRadius:"0 6px 6px 0",background:"#fff",boxSizing:"border-box",overflow:"hidden",overflowY:f.value?"auto":"hidden",lineHeight:"1.7",color:"#222",transition:"flex-basis .15s ease, width .15s ease"}});return{editorEl:n,mode:l,previewOn:f,splitPct:C,splitRoot:E,cfTextareaStyle:G,cfPreviewStyle:P,handleBtnAction:j,handleSelectAction:V}},template:`
<div>
  <div v-if="showSourceToggle" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
    <div style="display:flex;align-items:center;gap:4px;">
      <!-- \uD3B8\uC9D1 \uBAA8\uB4DC \uD1A0\uAE00: \uB514\uC790\uC778 \u2194 HTML (2-way) -->
      <button type="button" @click="handleBtnAction('editor-set-mode', 'wysiwyg')"
        :style="mode === 'wysiwyg' ? 'background:#1d4ed8;color:#fff;border-color:#1d4ed8;' : 'background:#fff;color:#555;border-color:#d0d0d0;'"
        style="font-size:11px;padding:3px 12px;border:1px solid;border-radius:4px;cursor:pointer;transition:all .15s;">
        \uB514\uC790\uC778
      </button>
      <button type="button" @click="handleBtnAction('editor-set-mode', 'source')"
        :style="mode === 'source' ? 'background:#1e1e2e;color:#7ec8e3;border-color:#7ec8e3;' : 'background:#fff;color:#555;border-color:#d0d0d0;'"
        style="font-size:11px;padding:3px 12px;border:1px solid;border-radius:4px;cursor:pointer;font-family:monospace;transition:all .15s;">
        &lt;/&gt; HTML
      </button>
      <!-- \uAD6C\uBD84\uC120 -->
      <span style="width:1px;height:16px;background:#e0e0e0;margin:0 4px;"></span>
      <!-- \uBBF8\uB9AC\uBCF4\uAE30 \uB3C5\uB9BD \uD1A0\uAE00 (\uB514\uC790\uC778/HTML \uACFC \uBCC4\uAC1C\uB85C on/off) -->
      <button type="button" @click="handleBtnAction('editor-toggle-preview')"
        :style="previewOn ? 'background:#047857;color:#fff;border-color:#047857;' : 'background:#fff;color:#555;border-color:#d0d0d0;'"
        style="font-size:11px;padding:3px 12px;border:1px solid;border-radius:4px;cursor:pointer;transition:all .15s;">
        \u{1F441} \uBBF8\uB9AC\uBCF4\uAE30
      </button>
    </div>
    <button type="button" @click="handleBtnAction('editor-clear')"
      style="font-size:11px;padding:3px 10px;border:1px solid #fca5a5;background:#fff0f0;color:#dc2626;border-radius:4px;cursor:pointer;">
      \uBE44\uC6B0\uAE30
    </button>
  </div>
  <!-- \uD3B8\uC9D1 \uC601\uC5ED | \uAD6C\uBD84\uC120 | \uBBF8\uB9AC\uBCF4\uAE30. \uAD6C\uC870\uB294 \uD56D\uC0C1 \uBD84\uD560 \uC720\uC9C0 \u2014 \uD3ED\uB9CC splitPct \uB85C \uBCC0\uACBD(DOM \uBD88\uBCC0 \u2192 \uC5D0\uB514\uD130 \uC548\uAE68\uC9D0).
       \uBBF8\uB9AC\uBCF4\uAE30 OFF: \uD3B8\uC9D1 100% (\uAD6C\uBD84\uC120\uC774 \uC6B0\uCE21 \uB05D). ON: \uD3B8\uC9D1 50% (\uAD6C\uBD84\uC120\uC774 \uC911\uC559). \uB4DC\uB798\uADF8\uB85C \uBBF8\uC138\uC870\uC815. -->
  <div ref="splitRoot" style="display:flex;align-items:stretch;gap:0;">
    <!-- \uC88C\uCE21 \uD3B8\uC9D1 \uC601\uC5ED: \uB0A8\uB294 \uD3ED \uBAA8\uB450 \uCC28\uC9C0(flex:1) \u2014 \uC6B0\uCE21 \uBBF8\uB9AC\uBCF4\uAE30 \uD3ED(0~50%)\uC5D0 \uB530\uB77C \uC790\uB3D9 \uC870\uC808 -->
    <div style="flex:1 1 0;min-width:0;">
      <!-- \uB514\uC790\uC778 \uC5D0\uB514\uD130(\uC778\uC2A4\uD134\uC2A4 DOM \uD56D\uC0C1 \uB3D9\uC77C). \uB798\uD37C\uAC00 \uD14C\uB450\uB9AC \uB2F4\uB2F9(base-html-editor-box) -->
      <div v-show="mode === 'wysiwyg'" ref="editorEl" class="base-html-editor-box"
        style="background:#fff;border:1px solid #d0d0d0;border-radius:6px 0 0 6px;overflow:hidden;">
      </div>
      <!-- HTML \uC18C\uC2A4 textarea -->
      <textarea v-show="mode === 'source'" :value="modelValue" @input="handleSelectAction('editor-source-input', $event)"
        spellcheck="false" :style="cfTextareaStyle"></textarea>
    </div>
    <!-- \uC911\uC559 \uAD6C\uBD84\uC120 \uBC14 (\uBBF8\uB9AC\uBCF4\uAE30 ON \uC77C \uB54C\uB9CC \uB4DC\uB798\uADF8 \uAC00\uB2A5) \u2014 OFF \uBA74 \uC6B0\uCE21 \uB05D, ON \uC774\uBA74 \uC911\uC559 -->
    <div @mousedown="previewOn ? handleBtnAction('editor-split-drag', $event) : null" @touchstart="previewOn ? handleBtnAction('editor-split-drag', $event) : null"
      :title="previewOn ? '\uB4DC\uB798\uADF8\uD558\uC5EC \uD06C\uAE30 \uC870\uC808' : ''"
      :style="{ flex:'0 0 8px', cursor: previewOn ? 'col-resize' : 'default', background:'#e5e7eb', borderTop:'1px solid #d0d0d0', borderBottom:'1px solid #d0d0d0', display:'flex', alignItems:'center', justifyContent:'center', userSelect:'none', transition:'all .15s ease' }">
      <span v-show="previewOn" style="color:#999;font-size:10px;line-height:1;">\u22EE\u22EE</span>
    </div>
    <!-- \uC6B0\uCE21 \uC2E4\uC2DC\uAC04 \uBBF8\uB9AC\uBCF4\uAE30: \uD3ED = (100-splitPct)% (OFF=0 \u2192 \uC811\uD798, ON=50%) -->
    <div :style="cfPreviewStyle"
      v-html="modelValue || '<span style=color:#bbb>(\uB0B4\uC6A9 \uC5C6\uC74C)</span>'">
    </div>
  </div>
  </div>
`},window.BaseTossPayWidget={name:"BaseTossPayWidget",props:{amount:{type:[Number,String],default:0},orderId:{type:String,default:""},orderName:{type:String,default:"\uC8FC\uBB38\uACB0\uC81C"},customerKey:{type:String,default:""},customerName:{type:String,default:"\uACE0\uAC1D"},successPage:{type:String,default:""},failPage:{type:String,default:""},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)},buttonLabel:{type:String,default:"\u{1F9E9} \uAC04\uD3B8 \uC704\uC82F \uACB0\uC81C"}},emits:["open","close","error"],setup(e,{emit:y}){const{reactive:T,computed:z}=Vue,p=T({open:!1,ready:!1,processing:!1});window._baseTossPayWidgetSeq=(window._baseTossPayWidgetSeq||0)+1;const M=window._baseTossPayWidgetSeq,k="toss-pay-method-"+M,n="toss-pay-agreement-"+M;let l=null,f=!1;const C=z(()=>Number(e.amount)||0),E=x=>NumbercoUtil.cofWon(x);return{ui:p,methodId:k,agreeId:n,cfAmount:C,fmtWon:E,toggle:async()=>{if(p.open){p.open=!1,y("close");return}const x=C.value;if(x<=0){e.showToast("\uACB0\uC81C\uAE08\uC561\uC774 0\uC6D0\uC785\uB2C8\uB2E4. \uAE08\uC561\uC744 \uD655\uC778\uD558\uC138\uC694.","error");return}if(p.open=!0,p.ready=!1,y("open"),!window.TossPayments){e.showToast("\uD1A0\uC2A4 \uACB0\uC81C SDK \uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. (\uD398\uC774\uC9C0\uC758 v2/standard \uC2A4\uD06C\uB9BD\uD2B8 \uD655\uC778)","error",0);return}if(!window.coExtSdk||!window.coExtSdk.getTossPaymentWidgets){e.showToast("coExtSdk \uACB0\uC81C\uC704\uC82F \uD5EC\uD37C\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. (lib/utils/coExtSdk.js \uB85C\uB4DC \uD655\uC778)","error",0);return}try{await Vue.nextTick(),window.coExtSdk.setDebugHook&&window.coExtSdk.setDebugHook((o,a)=>{e.showToast("[\uAC1C\uBC1C] "+o+`
`+window.coExtSdk._fmtParams(a),"info",0)}),l||(l=await window.coExtSdk.getTossPaymentWidgets(e.customerKey||void 0)),e.showToast(`[\uAC1C\uBC1C] \uD1A0\uC2A4 \uACB0\uC81C\uC704\uC82F \uB80C\uB354
`+window.coExtSdk._fmtParams({customerKey:e.customerKey||"ANONYMOUS",amount:x,currency:"KRW"}),"info",0),await l.setAmount({currency:"KRW",value:x}),f||(await l.renderPaymentMethods({selector:"#"+k,variantKey:"DEFAULT"}),await l.renderAgreement({selector:"#"+n,variantKey:"AGREEMENT"}),f=!0),p.ready=!0,window.coExtSdk.isTossTestKey&&window.coExtSdk.isTossTestKey()&&e.showToast("\uD1A0\uC2A4 \uD14C\uC2A4\uD2B8 \uD0A4\uB85C \uC704\uC82F\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC2E4 \uACB0\uC81C\uB294 \uC0AC\uC774\uD2B8 \uC124\uC815\uC5D0 tossClientKey(\uC6B4\uC601\uD0A4)\uB97C \uC785\uB825\uD558\uC138\uC694.","info")}catch(o){console.error("[BaseTossPayWidget \uB80C\uB354 \uC2E4\uD328]",o),p.ready=!1,y("error",o);const a=window.coExtHelp&&window.coExtHelp.toastAction({kind:"pay",provider:"toss",error:o});e.showToast("\uD1A0\uC2A4 \uC704\uC82F\uC744 \uD45C\uC2DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4: "+(o&&o.message||"\uC54C \uC218 \uC5C6\uB294 \uC624\uB958")+`
\u2192 \uD574\uACB0: \uD1A0\uC2A4 \uD074\uB77C\uC774\uC5B8\uD2B8 \uD0A4(\uACB0\uC81C\uC704\uC82F \uC5F0\uB3D9 \uD0A4, gck/ck \uB85C \uC2DC\uC791)\uB97C \uBC1C\uAE09\uBC1B\uC544 svTossClientKey \uC5D0 \uB4F1\uB85D\uD558\uC138\uC694. \uBBF8\uC124\uC815 \uC2DC \uD14C\uC2A4\uD2B8 \uD0A4\uB85C \uB3D9\uC791\uD569\uB2C8\uB2E4. (\uC790\uC138\uD55C \uBC1C\uAE09 \uBC29\uBC95\uC740 \uC544\uB798 \uBC84\uD2BC)`,"error",0,"",a)}},request:async()=>{const x=C.value;if(x<=0){e.showToast("\uACB0\uC81C\uAE08\uC561\uC774 0\uC6D0\uC785\uB2C8\uB2E4.","error");return}if(!p.ready||!l){e.showToast("\uACB0\uC81C\uC704\uC82F\uC774 \uC900\uBE44\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. ["+e.buttonLabel+"] \uB97C \uBA3C\uC800 \uB20C\uB7EC \uC704\uC82F\uC744 \uD45C\uC2DC\uD558\uC138\uC694.","error",0);return}if(await e.showConfirm("\uACB0\uC81C \uC694\uCCAD",E(x)+" \uC744 \uACB0\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")){p.processing=!0;try{await l.setAmount({currency:"KRW",value:x});const a=window.location.origin+window.location.pathname;await l.requestPayment({orderId:e.orderId||"ORDW"+String(M).padStart(6,"0"),orderName:e.orderName||"\uC8FC\uBB38\uACB0\uC81C",customerName:e.customerName||"\uACE0\uAC1D",successUrl:a+(e.successPage?"?page="+e.successPage+"&payResult=success":"?payResult=success"),failUrl:a+(e.failPage?"?page="+e.failPage+"&payResult=fail":"?payResult=fail")})}catch(a){if(console.error("[BaseTossPayWidget \uACB0\uC81C \uC2E4\uD328]",a),y("error",a),a&&(a.code==="USER_CANCEL"||/취소/.test(a.message||"")))e.showToast("\uACB0\uC81C\uAC00 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","info");else{const h=window.coExtHelp&&window.coExtHelp.toastAction({kind:"pay",provider:"toss",error:a});e.showToast("\uACB0\uC81C \uC694\uCCAD \uC2E4\uD328: "+(a&&a.message||"\uC54C \uC218 \uC5C6\uB294 \uC624\uB958")+" / \uACB0\uC81C\uC218\uB2E8 \uC120\uD0DD\xB7\uC57D\uAD00 \uB3D9\uC758 \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.","error",0,"",h)}}finally{p.processing=!1}}}}},template:`
<div>
  <div style="display:flex;align-items:center;justify-content:flex-end;gap:8px;flex-wrap:wrap;">
    <span style="font-size:12px;color:#888;">\uACB0\uC81C \uAE08\uC561 <b style="color:#e8587a;">{{ fmtWon(cfAmount) }}</b></span>
    <button type="button" class="btn btn-secondary btn-sm" :disabled="ui.processing" @click="toggle">
      {{ ui.open ? '\u2715 \uC704\uC82F \uB2EB\uAE30' : buttonLabel }}
    </button>
  </div>
  <div v-show="ui.open" style="margin-top:14px;border-top:1px dashed #e0e0e0;padding-top:14px;">
    <div style="font-size:12px;color:#888;margin-bottom:8px;">\uACB0\uC81C \uC218\uB2E8\uC744 \uC120\uD0DD\uD55C \uB4A4 [\uACB0\uC81C\uD558\uAE30] \uB97C \uB204\uB974\uC138\uC694. (Toss Client Key \uBBF8\uC124\uC815 \uC2DC \uD14C\uC2A4\uD2B8 \uD0A4)</div>
    <div :id="methodId"></div>
    <div :id="agreeId" style="margin-top:8px;"></div>
    <div style="text-align:right;margin-top:10px;">
      <button type="button" class="btn btn-primary" :disabled="ui.processing" @click="request">
        {{ ui.processing ? '\uACB0\uC81C \uCC98\uB9AC\uC911\u2026' : '\uACB0\uC81C\uD558\uAE30' }}
      </button>
    </div>
  </div>
</div>
`},window.BaseComp={attach_grp:window.BaseAttachGrp,attach_one:window.BaseAttachOne};
