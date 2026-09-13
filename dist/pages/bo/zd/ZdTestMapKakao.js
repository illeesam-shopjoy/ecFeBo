window.ZdTestMapKakao={name:"ZdTestMapKakao",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(S){var h;const{reactive:k,onMounted:K,onUnmounted:_,nextTick:j}=Vue,s=S.showToast||((h=window.boApp)==null?void 0:h.showToast)||(()=>{}),l=k({jsKey:""}),t=k({lat:37.5665,lng:126.978,zoom:3,address:"\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC911\uAD6C \uD0DC\uD3C9\uB85C1\uAC00 31"}),o=k({sdkStatus:"",sdkUrl:"",initDetail:"",geocodeResult:null,error:""}),u=k({sdkLoaded:!1,mapLoaded:!1,loading:!1});let i=null,d=null;const A=[{key:"jsKey",label:"JavaScript \uD0A4",type:"text",required:!0,placeholder:"sy_prop: app.map.kakao-js-key",mono:!0,colSpan:3,hint:"app.map.kakao-js-key"}],L=[{key:"lat",label:"\uC704\uB3C4",type:"number",hint:"lat"},{key:"lng",label:"\uACBD\uB3C4",type:"number",hint:"lng"},{key:"zoom",label:"\uC90C \uB808\uBCA8 (1=\uAC00\uAE4C\uC6C0)",type:"number",hint:"zoom"}],D=[{key:"address",label:"\uC8FC\uC18C",type:"text",colSpan:3,hint:"address"}],z=[{key:"_label",label:"\uD56D\uBAA9",cellStyle:"color:#555;width:100px"},{key:"_value",label:"\uAC12"}];K(async()=>{var a,e,n;try{const r=(((e=(a=(await boApi.get("/bo/sy/app-config/all",coUtil.cofApiHdr("\uCE74\uCE74\uC624 \uC9C0\uB3C4 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C"))).data)==null?void 0:a.data)==null?void 0:e.items)||[]).find(m=>m.ymlKey==="app.map.kakao-js-key");if(r!=null&&r.ymlValue&&r.ymlValue!=="(\uBBF8\uC124\uC815)"&&(l.jsKey=r.ymlValue),!l.jsKey){const m=await boApiSvc.syProp.getList({propKeys:"app.map.kakao-js-key"},"\uCE74\uCE74\uC624 \uC9C0\uB3C4 \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C"),w=(((n=m==null?void 0:m.data)==null?void 0:n.data)||[]).filter(b=>b.propValue),x=w.find(b=>(b.propProfile||"").includes("local")||(b.propProfile||"").includes("dev"))||w[0];x&&(l.jsKey=x.propValue)}}catch(p){o.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(p.message||p)}l.jsKey?v():f()}),_(()=>{i=null,d=null});const f=()=>{var e;const a=!!((e=window.kakao)!=null&&e.maps);u.sdkLoaded=a,o.sdkUrl=l.jsKey?"https://dapi.kakao.com/v2/maps/sdk.js?appkey=...&autoload=false":"",o.sdkStatus=a?"\u2705 Kakao Maps SDK \uB85C\uB4DC\uB428":"\u274C Kakao Maps SDK \uC5C6\uC74C \u2014 JavaScript \uD0A4 \uC124\uC815 \uD6C4 [SDK \uB85C\uB4DC] \uBC84\uD2BC \uD074\uB9AD",o.initDetail=a?"\uC571\uD0A4: "+(l.jsKey||"(\uBBF8\uC124\uC815)"):""},v=()=>{var n;if(!l.jsKey){s("JavaScript \uD0A4\uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if((n=window.kakao)!=null&&n.maps){f(),y();return}const a=document.querySelector("script[data-kakao-maps]");if(a){if(o.sdkStatus="\u23F3 SDK \uB85C\uB529 \uC911\u2026",a.dataset.loaded==="1"){a.remove(),v();return}const c=a.onload;a.onload=()=>{var r;c&&c(),(r=window.kakao)!=null&&r.maps&&kakao.maps.load(()=>{f(),y()})};return}o.sdkStatus="\u23F3 SDK \uB85C\uB529 \uC911\u2026";const e=document.createElement("script");e.setAttribute("data-kakao-maps","1"),e.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey="+l.jsKey+"&libraries=services&autoload=false",e.onload=()=>{e.dataset.loaded="1",kakao.maps.load(()=>{f(),s("Kakao Maps SDK \uB85C\uB4DC \uC644\uB8CC","success"),y()})},e.onerror=()=>{e.dataset.loaded="1",o.sdkStatus="\u274C SDK \uB85C\uB4DC \uC2E4\uD328 \u2014 JavaScript \uD0A4 \uC624\uB958 \uB610\uB294 \uB3C4\uBA54\uC778 \uBBF8\uB4F1\uB85D (127.0.0.1:5501 \uD5C8\uC6A9 \uD655\uC778)",s("Kakao Maps SDK \uB85C\uB4DC \uC2E4\uD328","error",0)},document.head.appendChild(e)},y=()=>{j(()=>{var n;const a=document.getElementById("zd-kakao-map");if(!a||!((n=window.kakao)!=null&&n.maps))return;const e={center:new kakao.maps.LatLng(t.lat,t.lng),level:t.zoom};i=new kakao.maps.Map(a,e),d&&d.setMap(null),d=new kakao.maps.Marker({position:new kakao.maps.LatLng(t.lat,t.lng),map:i}),u.mapLoaded=!0,s("\uC9C0\uB3C4 \uB80C\uB354\uB9C1 \uC644\uB8CC","success")})},g=()=>{if(!i){s("\uC9C0\uB3C4\uB97C \uBA3C\uC800 \uB80C\uB354\uB9C1\uD558\uC138\uC694.","error");return}const a=new kakao.maps.LatLng(parseFloat(t.lat),parseFloat(t.lng));i.setCenter(a),i.setLevel(parseInt(t.zoom)),d&&d.setPosition(a)},M=()=>{var e,n;if(!((n=(e=window.kakao)==null?void 0:e.maps)!=null&&n.services)){s("services \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error");return}if(!t.address){s("\uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}u.loading=!0,o.error="",o.geocodeResult=null,new kakao.maps.services.Geocoder().addressSearch(t.address,(p,c)=>{if(u.loading=!1,c!==kakao.maps.services.Status.OK){o.error="\uC8FC\uC18C \uAC80\uC0C9 \uC2E4\uD328: "+c,s("\uC8FC\uC18C \uAC80\uC0C9 \uC2E4\uD328","error",0);return}const r=p[0];o.geocodeResult=r,t.lat=parseFloat(r.y),t.lng=parseFloat(r.x),s("\uC8FC\uC18C \uAC80\uC0C9 \uC131\uACF5","success"),i&&g()})},F=async()=>{if(!l.jsKey){s("JavaScript \uD0A4\uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}try{await boApi.put("/bo/sy/prop/bulk",[{propKey:"app.map.kakao-js-key",propValue:l.jsKey}],coUtil.cofApiHdr("\uCE74\uCE74\uC624 \uC9C0\uB3C4 \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),s("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(a){s(coUtil.cofErrMsg(a,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:l,form:t,result:o,uiState:u,cfgFormColumns:A,mapFormColumns:L,geocodeFormColumns:D,geocodeGridColumns:z,cfGeocodeRows:()=>{if(!o.geocodeResult)return[];const a=o.geocodeResult;return[{_label:"\uB3C4\uB85C\uBA85 \uC8FC\uC18C",_value:a.road_address?a.road_address.address_name:"-"},{_label:"\uC9C0\uBC88 \uC8FC\uC18C",_value:a.address_name},{_label:"\uC704\uB3C4",_value:a.y},{_label:"\uACBD\uB3C4",_value:a.x}]},handleBtnAction:a=>{if(a==="sdk-load")return v();if(a==="map-render")return y();if(a==="map-move")return g();if(a==="geocode")return M();if(a==="key-save")return F()}}},template:`
<div>
  <div class="page-title">\uCE74\uCE74\uC624 \uC9C0\uB3C4 API \uD14C\uC2A4\uD2B8</div>

  <!-- \uD0A4 \uC124\uC815 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">API \uD0A4 \uC124\uC815</span>
      <div style="margin-left:auto;display:flex;gap:6px">
        <button class="btn btn_save btn-sm" @click="handleBtnAction('key-save')">sy_prop \uC800\uC7A5</button>
        <button class="btn btn_apply btn-sm" @click="handleBtnAction('sdk-load')">SDK \uB85C\uB4DC + \uC9C0\uB3C4 \uB80C\uB354\uB9C1</button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="cfgFormColumns" :form="cfg" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div style="font-size:12px;color:#666;padding:6px 8px;background:#f8f9fa;border-radius:4px;line-height:2">
        <div>SDK \uC0C1\uD0DC: <strong>{{ result.sdkStatus || '\uD655\uC778 \uC911\u2026' }}</strong><span v-if="result.sdkUrl" style="margin-left:8px;color:#aaa;font-family:monospace;font-size:11px;">{{ result.sdkUrl }}</span></div>
        <div>\uCD08\uAE30\uD654 \uC0C1\uD0DC: <strong>{{ result.initDetail || (uiState.sdkLoaded ? '\uCD08\uAE30\uD654 \uC644\uB8CC' : '\uBBF8\uCD08\uAE30\uD654') }}</strong></div>
      </div>
    </div>
  </div>

  <!-- \uC9C0\uB3C4 + \uC88C\uD45C \uC774\uB3D9 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uC9C0\uB3C4 \uBBF8\uB9AC\uBCF4\uAE30</span>
      <div style="margin-left:auto;display:flex;gap:6px">
        <button class="btn btn_apply btn-sm" @click="handleBtnAction('map-render')">\uC9C0\uB3C4 \uB2E4\uC2DC \uB80C\uB354\uB9C1</button>
        <button class="btn btn_confirm btn-sm" @click="handleBtnAction('map-move')">\uC88C\uD45C \uC774\uB3D9</button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="mapFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div style="position:relative;width:100%;height:360px;">
        <div id="zd-kakao-map" style="width:100%;height:100%;border:1px solid #ddd;border-radius:6px;background:#f0f0f0;"></div>
        <div v-if="!uiState.mapLoaded" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;">
          <span style="color:#999;font-size:13px">SDK \uB85C\uB4DC \uD6C4 \uC9C0\uB3C4\uAC00 \uC5EC\uAE30 \uD45C\uC2DC\uB429\uB2C8\uB2E4</span>
        </div>
      </div>
    </div>
  </div>

  <!-- \uC8FC\uC18C \uAC80\uC0C9 (\uC9C0\uC624\uCF54\uB529) -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uC8FC\uC18C \uAC80\uC0C9 (\uC9C0\uC624\uCF54\uB529)</span>
      <div style="margin-left:auto">
        <button class="btn btn_search btn-sm" :disabled="uiState.loading" @click="handleBtnAction('geocode')">
          {{ uiState.loading ? '\u23F3 \uC870\uD68C \uC911\u2026' : '\uC8FC\uC18C \uAC80\uC0C9' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="geocodeFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c">{{ result.error }}</div>
      <div v-if="result.geocodeResult" style="background:#f0fdf4;border:1px solid #86efac;border-radius:6px;padding:10px;margin-top:8px">
        <div style="font-weight:600;margin-bottom:6px;color:#15803d">\u2705 \uC8FC\uC18C \uAC80\uC0C9 \uACB0\uACFC</div>
        <bo-grid :columns="geocodeGridColumns" :rows="cfGeocodeRows()" :show-row-num="false" />
      </div>
    </div>
  </div>

  <!-- \uC548\uB0B4 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>1.</b> Kakao Developers \u2192 \uC571 \uC0DD\uC131 \u2192 \uD50C\uB7AB\uD3FC \u2192 Web \u2192 \uC0AC\uC774\uD2B8 \uB3C4\uBA54\uC778\uC5D0 <code>http://127.0.0.1:5501</code> \uCD94\uAC00<br>
      <b>2.</b> \uC81C\uD488 \uC124\uC815 \u2192 \uCE74\uCE74\uC624\uB9F5 \u2192 \uD65C\uC131\uD654 ON<br>
      <b>3.</b> \uC571 \uD0A4 \u2192 JavaScript \uD0A4 \uBCF5\uC0AC<br>
      <b>4.</b> sy_prop <code>app.map.kakao-js-key</code> \uC5D0 JavaScript \uD0A4 \uB4F1\uB85D<br>
      <b>5.</b> Kakao \uC9C0\uB3C4 \uC90C \uB808\uBCA8\uC740 \uC22B\uC790\uAC00 \uD074\uC218\uB85D \uBA40\uC5B4\uC9D1\uB2C8\uB2E4 (Naver/Google \uACFC \uBC18\uB300)
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.map." default-prop-key-filter="app.map.kakao" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/map" default-key-filter="app.map.kakao" />
</div>`};
