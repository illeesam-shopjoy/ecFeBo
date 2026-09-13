window.SyAttachDtl={name:"SyAttachDtl",props:{navigate:{type:Function,required:!0},showRefModal:{type:Function,default:()=>{}},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)},dtlId:{type:String,default:null},tabMode:{type:String,default:"tab"}},setup(a){var s,d;const{reactive:n,computed:b,onMounted:y}=Vue,r=((s=window.boApp)==null?void 0:s.showToast)||a.showToast,f=((d=window.boApp)==null?void 0:d.showConfirm)||a.showConfirm,o=n({loading:!1,dtlMode:"view"}),l=n({}),i=n([]),m=async()=>{const e=await coUtil.cofGetAttachRefTableOptions();i.splice(0,i.length,...e.map(t=>({value:t.value,label:t.label})))},p=e=>{if(e==="form-edit"){o.dtlMode="edit";return}else{if(e==="form-cancel")return o.dtlMode="view",c();if(e==="form-save")return u();if(e==="form-close")return a.navigate("syAttachMng");console.warn("[handleBtnAction] unknown cmd:",e)}},c=async()=>{var e;if(a.dtlId){o.loading=!0;try{const t=await boApiSvc.syAttach.getById(a.dtlId,"\uCCA8\uBD80\uD30C\uC77C\uAD00\uB9AC","\uC870\uD68C");Object.assign(l,((e=t.data)==null?void 0:e.data)||{})}catch(t){r(coUtil.cofErrMsg(t,"\uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),"error",0)}finally{o.loading=!1}}},u=async()=>{if(await f("\uC800\uC7A5","\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{await boApi.put(`/bo/sy/attach/${a.dtlId}`,{refTableNm:l.refTableNm||null,refId:l.refId||null,attachMemo:l.attachMemo||null,sortOrd:l.sortOrd},coUtil.apiHdr("\uCCA8\uBD80\uD30C\uC77C\uAD00\uB9AC","\uC800\uC7A5")),r("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),o.dtlMode="view",await c()}catch(t){r(coUtil.cofErrMsg(t),"error",0)}},h=e=>e?e<1024?e+" B":e<1024*1024?(e/1024).toFixed(1)+" KB":(e/(1024*1024)).toFixed(1)+" MB":"0 B";return y(async()=>{await m(),await c()}),{uiState:o,baseForm:l,baseFormColumns:[{key:"attachId",label:"\uCCA8\uBD80\uD30C\uC77CID",type:"readonly",mono:!0,colSpan:2},{key:"fileExt",label:"\uD655\uC7A5\uC790",type:"readonly"},{key:"fileNm",label:"\uD30C\uC77C\uBA85",type:"readonly",colSpan:2},{key:"fileSize",label:"\uD06C\uAE30",type:"readonly",fmt:e=>h(e)},{key:"refTableNm",label:"\uC5F0\uACC4 \uB300\uC0C1",type:"select",options:()=>i,hint:"\uC624\uC5F0\uACB0\uB41C \uD30C\uC77C\uC744 \uB2E4\uB978 \uB300\uC0C1\uC73C\uB85C \uC7AC\uC5F0\uACB0\uD560 \uB54C\uB9CC \uBCC0\uACBD"},{key:"refId",label:"\uC5F0\uACC4 ID",type:"text"},{key:"sortOrd",label:"\uC815\uB82C\uC21C\uC11C",type:"number"},{key:"storedNm",label:"\uC800\uC7A5\uD30C\uC77C\uBA85",type:"readonly",colSpan:2,mono:!0},{key:"storageTypeCd",label:"\uC2A4\uD1A0\uB9AC\uC9C0",type:"readonly"},{key:"storagePath",label:"\uC800\uC7A5\uACBD\uB85C",type:"readonly",colSpan:3,mono:!0},{key:"attachUrl",label:"\uD30C\uC77C URL",type:"readonly",colSpan:3,mono:!0},{key:"attachMemo",label:"\uBA54\uBAA8",type:"textarea",colSpan:3},{key:"regBy",label:"\uB4F1\uB85D\uC790",type:"readonly"},{key:"regDate",label:"\uB4F1\uB85D\uC77C\uC2DC",type:"readonly",fmt:e=>e?coUtil.cofYmdHms(e):"-"},{key:"updBy",label:"\uC218\uC815\uC790",type:"readonly"},{key:"updDate",label:"\uC218\uC815\uC77C\uC2DC",type:"readonly",fmt:e=>e?coUtil.cofYmdHms(e):"-"}],handleBtnAction:p}},template:`
<bo-container>
  <div class="toolbar">
    <span class="list-title">
      \uCCA8\uBD80\uD30C\uC77C \uC0C1\uC138 / \uC218\uC815
      <span v-if="baseForm.attachId" style="font-size:12px;color:#999;margin-left:8px;font-weight:400;">#{{ baseForm.attachId }}</span>
    </span>
  </div>
  <div v-if="!dtlId && !baseForm.attachId" style="padding:40px;text-align:center;color:#9ca3af;font-size:13px;">
    \uC88C\uCE21 \uBAA9\uB85D\uC5D0\uC11C \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uAC70\uB098 \uBC88\uD638\uB97C \uD074\uB9AD\uD574\uC8FC\uC138\uC694.
  </div>
  <div v-else style="padding:12px;">
    <bo-form-area :columns="baseFormColumns" :form="baseForm" :errors="{}"
      :cols="3" :readonly="uiState.dtlMode === 'view'" :show-actions="false" />
    <bo-form-actions :readonly="uiState.dtlMode === 'view'" :show-delete="false" :edit-click="() => handleBtnAction('form-edit')"
 :save-click="() => handleBtnAction('form-save')"
 :delete-click="() => handleBtnAction('form-delete')"
 :cancel-click="() => handleBtnAction('form-cancel')"
 :close-click="() => handleBtnAction('form-close')" />
  </div>
</bo-container>
`};
