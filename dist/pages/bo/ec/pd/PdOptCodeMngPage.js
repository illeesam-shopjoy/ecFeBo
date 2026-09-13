window.PdOptCodeMngPage={name:"PdOptCodeMngPage",props:{navigate:{type:Function,required:!0}},setup(){const{computed:e}=Vue;return{cfOptCodeMngUrl:e(()=>window.pageUrl("bo-pd-opt-code-mng.html"))}},template:`
<bo-page title="\uC0C1\uD488\uC635\uC158\uAD00\uB9AC"
  desc-summary="\uC0C1\uD488 \uC635\uC158 \uCF54\uB4DC(PROD_OPT_CATEGORY)\uB97C 3\uB2E8 \uACC4\uCE35\uC73C\uB85C \uB4F1\uB85D\xB7\uAD00\uB9AC\uD569\uB2C8\uB2E4.">
  <template #actions>
    <span style="font-size:11px;color:#bbb;">{{ cfOptCodeMngUrl }}</span>
  </template>
  <bo-container bare>
    <div style="position:relative;width:100%;height:calc(100vh - 220px);min-height:560px;overflow:hidden;border:1px solid #eee;border-radius:8px;">
      <iframe src="bo-pd-opt-code-mng.html" style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
    </div>
  </bo-container>
</bo-page>
`};
