window.ZdTestShareKakao={name:"ZdTestShareKakao",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(b){var k;const{reactive:p,onMounted:y}=Vue,s=b.showToast||((k=window.boApp)==null?void 0:k.showToast)||(()=>{}),r=p({kakaoJsKey:""}),t=p({shareType:"feed",title:"\uD14C\uC2A4\uD2B8 \uACF5\uC720",description:"ShopJoy \uAC1C\uBC1C\uB3C4\uAD6C\uC5D0\uC11C \uCE74\uCE74\uC624\uD1A1 \uACF5\uC720 \uD14C\uC2A4\uD2B8 \uC911\uC785\uB2C8\uB2E4.",imageUrl:"",linkUrl:window.location.origin,buttonTitle:"\uC790\uC138\uD788 \uBCF4\uAE30",text:"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720 \uD14C\uC2A4\uD2B8 \uBA54\uC2DC\uC9C0\uC785\uB2C8\uB2E4.",scrapUrl:window.location.origin}),a=p({sdkStatus:"",sdkUrl:"",initDetail:"",initStatus:"",shareResult:null,error:""}),o=p({sdkLoaded:!1,sdkInited:!1,loading:!1});y(async()=>{var e,l,n;try{const i=await((l=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:l.call(e,{propKeys:"app.auth.social.kakao-js-key"},"\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),v=((n=i==null?void 0:i.data)==null?void 0:n.data)||[],x=K=>{const u=v.filter(d=>d.propKey===K&&d.propValue),c=u.find(d=>/local|dev/.test(d.propProfile||""))||u[0];return(c==null?void 0:c.propValue)||""};r.kakaoJsKey=x("app.auth.social.kakao-js-key")}catch(i){a.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(i.message||i)}f()});const f=()=>{var l,n;const e=!!window.Kakao;if(o.sdkLoaded=e,a.sdkUrl="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js",a.sdkStatus=e?"\u2705 Kakao SDK \uB85C\uB4DC\uB428":"\u274C Kakao SDK \uC5C6\uC74C",e){const i=((n=(l=window.Kakao).isInitialized)==null?void 0:n.call(l))||!1;o.sdkInited=i,a.initStatus=i?"\u2705 \uCD08\uAE30\uD654 \uC644\uB8CC":"\u26A0\uFE0F \uCD08\uAE30\uD654 \uC804 \u2014 [SDK \uCD08\uAE30\uD654] \uD074\uB9AD"}},h=()=>{if(!r.kakaoJsKey){s("Kakao JS Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if(!window.Kakao){s("Kakao SDK \uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. bo.html \uC5D0 SDK \uB85C\uB4DC \uD655\uC778.","error",0);return}try{window.Kakao.isInitialized()||window.Kakao.init(r.kakaoJsKey),o.sdkInited=window.Kakao.isInitialized(),a.initStatus=o.sdkInited?"\u2705 \uCD08\uAE30\uD654 \uC644\uB8CC":"\u274C \uCD08\uAE30\uD654 \uC2E4\uD328",a.initDetail=o.sdkInited?"\uC571\uD0A4: "+r.kakaoJsKey:"",s(o.sdkInited?"Kakao SDK \uCD08\uAE30\uD654 \uC644\uB8CC":"Kakao SDK \uCD08\uAE30\uD654 \uC2E4\uD328",o.sdkInited?"success":"error")}catch(e){a.initDetail="\u274C "+(e.message||e),a.initStatus="\u274C \uCD08\uAE30\uD654 \uC624\uB958: "+(e.message||e),s("\uCD08\uAE30\uD654 \uC624\uB958: "+(e.message||e),"error",0)}},g=()=>{if(!o.sdkInited){s("\uBA3C\uC800 SDK \uB97C \uCD08\uAE30\uD654\uD558\uC138\uC694.","error");return}a.error="",a.shareResult=null,o.loading=!0;try{if(t.shareType==="feed")window.Kakao.Share.sendDefault({objectType:"feed",content:{title:t.title,description:t.description,imageUrl:t.imageUrl||"https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLyP4yhuJgH1BqFdBZvgO1/kakaolink40_original.png",link:{mobileWebUrl:t.linkUrl,webUrl:t.linkUrl}},buttons:[{title:t.buttonTitle,link:{mobileWebUrl:t.linkUrl,webUrl:t.linkUrl}}]}),a.shareResult={type:"feed",status:"\uACF5\uC720\uCC3D \uC5F4\uB9BC"},s("\uCE74\uCE74\uC624\uD1A1 \uD53C\uB4DC \uACF5\uC720\uCC3D \uC5F4\uB9BC","success");else if(t.shareType==="text")window.Kakao.Share.sendDefault({objectType:"text",text:t.text,link:{mobileWebUrl:t.linkUrl,webUrl:t.linkUrl}}),a.shareResult={type:"text",status:"\uACF5\uC720\uCC3D \uC5F4\uB9BC"},s("\uCE74\uCE74\uC624\uD1A1 \uD14D\uC2A4\uD2B8 \uACF5\uC720\uCC3D \uC5F4\uB9BC","success");else if(t.shareType==="scrap"){if(!t.scrapUrl){s("\uC2A4\uD06C\uB7A9\uD560 URL \uC744 \uC785\uB825\uD558\uC138\uC694.","error"),o.loading=!1;return}window.Kakao.Share.sendScrap({requestUrl:t.scrapUrl}),a.shareResult={type:"scrap",status:"\uC2A4\uD06C\uB7A9 \uACF5\uC720\uCC3D \uC5F4\uB9BC"},s("\uCE74\uCE74\uC624\uD1A1 \uC2A4\uD06C\uB7A9 \uACF5\uC720\uCC3D \uC5F4\uB9BC","success")}}catch(e){a.error=e.message||String(e),s("\uACF5\uC720 \uC624\uB958: "+a.error,"error",0)}o.loading=!1},m=async()=>{if(!r.kakaoJsKey){s("Kakao JS Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}try{await boApi.put("/bo/sy/prop/bulk",[{propKey:"app.auth.social.kakao-js-key",propValue:r.kakaoJsKey}],coUtil.cofApiHdr("\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720 \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),s("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){s(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:r,form:t,result:a,uiState:o,handleBtnAction:e=>{if(e==="sdk-init")return h();if(e==="share")return g();if(e==="key-save")return m()},cfgFormColumns:[{key:"kakaoJsKey",label:"Kakao JS Key (JavaScript \uD0A4)",type:"text",colSpan:3,mono:!0,placeholder:"sy_prop: app.auth.social.kakao-js-key",hint:"app.auth.social.kakao-js-key"}],shareFormColumns:[{key:"shareType",label:"\uACF5\uC720 \uC720\uD615",type:"select",options:[{value:"feed",label:"\uD53C\uB4DC (Feed)"},{value:"text",label:"\uD14D\uC2A4\uD2B8 (Text)"},{value:"scrap",label:"\uC2A4\uD06C\uB7A9 (Scrap)"}],hint:"shareType"},{key:"linkUrl",label:"\uB9C1\uD06C URL",type:"text",colSpan:2,mono:!0,placeholder:"https://...",hint:"linkUrl"},{key:"title",label:"\uC81C\uBAA9",type:"text",placeholder:"\uACF5\uC720 \uC81C\uBAA9",hint:"content.title",visible:e=>e.shareType==="feed"},{key:"buttonTitle",label:"\uBC84\uD2BC \uD14D\uC2A4\uD2B8",type:"text",placeholder:"\uC790\uC138\uD788 \uBCF4\uAE30",hint:"buttons[].title",visible:e=>e.shareType==="feed"},{key:"description",label:"\uC124\uBA85",type:"text",placeholder:"\uACF5\uC720 \uB0B4\uC6A9 \uC124\uBA85",hint:"content.description",visible:e=>e.shareType==="feed"},{key:"imageUrl",label:"\uC774\uBBF8\uC9C0 URL (\uBE44\uC6CC\uB450\uBA74 \uAE30\uBCF8 \uC774\uBBF8\uC9C0 \uC0AC\uC6A9)",type:"text",colSpan:2,mono:!0,placeholder:"https://...",hint:"content.imageUrl",visible:e=>e.shareType==="feed"},{key:"text",label:"\uACF5\uC720 \uD14D\uC2A4\uD2B8",type:"textarea",colSpan:3,placeholder:"\uACF5\uC720\uD560 \uD14D\uC2A4\uD2B8 \uB0B4\uC6A9",hint:"text",visible:e=>e.shareType==="text"},{key:"scrapUrl",label:"\uC2A4\uD06C\uB7A9 URL",type:"text",colSpan:3,mono:!0,placeholder:"https://\uC2A4\uD06C\uB7A9\uD560-\uD398\uC774\uC9C0-URL",hint:"requestUrl",visible:e=>e.shareType==="scrap"}]}},template:`
<div>
  <div class="page-title">\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720 \uD14C\uC2A4\uD2B8</div>

  <!-- \uD0A4 \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">API \uD0A4 \uC124\uC815</span></div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div class="form-actions" style="justify-content:flex-start;margin-top:8px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('key-save')">sy_prop \uC800\uC7A5</button>
        <button class="btn btn_apply btn-sm" @click="handleBtnAction('sdk-init')">SDK \uCD08\uAE30\uD654</button>
      </div>
      <div style="font-size:12px;color:#666;padding:6px 8px;background:#f8f9fa;border-radius:4px;line-height:2;margin-top:8px">
        <div>SDK \uC0C1\uD0DC: <strong>{{ result.sdkStatus || '\uD655\uC778 \uC911\u2026' }}</strong><span v-if="result.sdkUrl" style="margin-left:8px;color:#aaa;font-family:monospace;font-size:11px;">{{ result.sdkUrl }}</span></div>
        <div>\uCD08\uAE30\uD654 \uC0C1\uD0DC: <strong>{{ result.initDetail || result.initStatus || (uiState.sdkInited ? '\uCD08\uAE30\uD654 \uC644\uB8CC' : '\uBBF8\uCD08\uAE30\uD654') }}</strong></div>
      </div>
    </div>
  </div>

  <!-- \uACF5\uC720 \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uACF5\uC720 \uD14C\uC2A4\uD2B8</span>
      <div style="margin-left:auto">
        <button class="btn btn_send btn-sm" :disabled="uiState.loading || !uiState.sdkInited" @click="handleBtnAction('share')">
          {{ uiState.loading ? '\u23F3' : '\u{1F4AC} \uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uCC3D \uC5F4\uAE30' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="shareFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div v-if="form.shareType === 'scrap'" style="padding:8px;background:#fff8e1;border-radius:4px;font-size:12px;color:#92400e;margin-top:8px">
        \u26A0\uFE0F \uC2A4\uD06C\uB7A9\uC740 \uD574\uB2F9 URL \uC758 Open Graph \uBA54\uD0C0 \uD0DC\uADF8\uB97C \uC77D\uC5B4 \uACF5\uC720\uD569\uB2C8\uB2E4. \uCE74\uCE74\uC624 \uAC1C\uBC1C\uC790 \uCF58\uC194\uC5D0 \uB3C4\uBA54\uC778 \uB4F1\uB85D \uD544\uC694.
      </div>
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c;margin-top:8px">{{ result.error }}</div>
      <div v-if="result.shareResult" style="padding:8px;background:#f0fdf4;border:1px solid #86efac;border-radius:4px;font-size:12px;margin-top:8px">
        \u2705 {{ result.shareResult.status }}
      </div>
    </div>
  </div>

  <!-- \uC548\uB0B4 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>1.</b> <a href="https://developers.kakao.com/console/app" target="_blank">Kakao Developers</a> \u2192 \uC571 \u2192 \uD50C\uB7AB\uD3FC \u2192 Web \u2192 \uB3C4\uBA54\uC778 \uB4F1\uB85D<br>
      <b>2.</b> \uB4F1\uB85D \uB3C4\uBA54\uC778: <code>http://127.0.0.1:5501</code> (\uAC1C\uBC1C) / \uC6B4\uC601 \uB3C4\uBA54\uC778<br>
      <b>3.</b> sy_prop <code>app.auth.social.kakao-js-key</code> \uC5D0 JavaScript \uD0A4 \uB4F1\uB85D (\uC18C\uC15C \uB85C\uADF8\uC778\uACFC \uB3D9\uC77C \uD0A4)<br>
      <b>4.</b> [SDK \uCD08\uAE30\uD654] \u2192 \uACF5\uC720 \uC720\uD615 \uC120\uD0DD \u2192 [\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uCC3D \uC5F4\uAE30]<br><br>
      <b>\uACF5\uC720 \uC720\uD615 \uC124\uBA85:</b><br>
      &nbsp;&nbsp;\u2022 <b>\uD53C\uB4DC</b>: \uC774\uBBF8\uC9C0 + \uC81C\uBAA9 + \uC124\uBA85 + \uB9C1\uD06C \uBC84\uD2BC\uC774 \uD3EC\uD568\uB41C \uCE74\uB4DC\uD615 \uBA54\uC2DC\uC9C0<br>
      &nbsp;&nbsp;\u2022 <b>\uD14D\uC2A4\uD2B8</b>: \uD14D\uC2A4\uD2B8 + \uB9C1\uD06C \uBC84\uD2BC\uB9CC \uD3EC\uD568\uB41C \uB2E8\uC21C \uBA54\uC2DC\uC9C0<br>
      &nbsp;&nbsp;\u2022 <b>\uC2A4\uD06C\uB7A9</b>: \uC678\uBD80 URL \uC758 Open Graph \uBA54\uD0C0\uB370\uC774\uD130\uB97C \uC77D\uC5B4 \uC790\uB3D9 \uC0DD\uC131<br><br>
      <b>SDK:</b> bo.html \uC5D0 Kakao SDK 2.x \uAC00 \uC774\uBBF8 \uB85C\uB4DC\uB429\uB2C8\uB2E4.<br>
      <code>Kakao.Share.sendDefault()</code> \u2014 Kakao SDK 2.x \uACF5\uC720 API (v1\uC758 Kakao.Link \uD3D0\uAE30)
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.auth.social." default-prop-key-filter="app.auth.social.kakao" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/kakao" default-key-filter="app.kakao" />
</div>`};
