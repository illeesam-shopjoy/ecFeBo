window.ZdTestMapGoogle={name:"ZdTestMapGoogle",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(w){var k;const{reactive:c,onMounted:x,onUnmounted:K}=Vue,l=w.showToast||((k=window.boApp)==null?void 0:k.showToast)||(()=>{}),r=c({apiKey:""}),t=c({lat:37.5665,lng:126.978,zoom:15,address:"\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC911\uAD6C \uD0DC\uD3C9\uB85C1\uAC00 31"}),s=c({sdkStatus:"",sdkUrl:"",initDetail:"",geocodeResult:null,placeResult:null,error:""}),p=c({sdkLoaded:!1,mapLoaded:!1,loading:!1});let n=null,g=null;const S=[{key:"apiKey",label:"Google Maps API Key",type:"text",required:!0,placeholder:"sy_prop: app.map.google-api-key",mono:!0,colSpan:3,hint:"app.map.google-api-key"}],A=[{key:"lat",label:"\uC704\uB3C4",type:"number",hint:"lat"},{key:"lng",label:"\uACBD\uB3C4",type:"number",hint:"lng"},{key:"zoom",label:"\uC90C",type:"number",hint:"zoom"}],_=[{key:"address",label:"\uC8FC\uC18C",type:"text",colSpan:3,hint:"address"}],I=[{key:"_label",label:"\uD56D\uBAA9",cellStyle:"color:#555;width:120px"},{key:"_value",label:"\uAC12"}];x(async()=>{var o,e,i;try{const a=await((e=(o=boApiSvc.syProp)==null?void 0:o.getList)==null?void 0:e.call(o,{propKeys:"app.map.google-api-key"},"\uAD6C\uAE00 \uC9C0\uB3C4 API \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),u=((i=a==null?void 0:a.data)==null?void 0:i.data)||[],d=z=>{const h=u.filter(f=>f.propKey===z&&f.propValue),b=h.find(f=>/local|dev/.test(f.propProfile||""))||h[0];return(b==null?void 0:b.propValue)||""};r.apiKey=d("app.map.google-api-key")}catch(a){s.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(a.message||a)}y()}),K(()=>{n=null,g=null});const y=()=>{var e;const o=!!((e=window.google)!=null&&e.maps);p.sdkLoaded=o,s.sdkUrl="https://maps.googleapis.com/maps/api/js",s.sdkStatus=o?"\u2705 Google Maps SDK \uB85C\uB4DC\uB428":"\u274C Google Maps SDK \uC5C6\uC74C \u2014 API \uD0A4 \uC124\uC815 \uD6C4 [SDK \uB85C\uB4DC] \uD074\uB9AD",s.initDetail=o?"API \uD0A4: "+(r.apiKey||"(\uBBF8\uC124\uC815)"):""},P=()=>{var e;if(!r.apiKey){l("API Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if((e=window.google)!=null&&e.maps){m();return}if(document.querySelector('script[src*="maps.googleapis.com"]')){const i=setInterval(()=>{var a;(a=window.google)!=null&&a.maps&&(clearInterval(i),y(),m())},200);return}const o=document.createElement("script");o.src="https://maps.googleapis.com/maps/api/js?key="+r.apiKey+"&libraries=places,geocoder&language=ko",o.onload=()=>{y(),l("Google Maps SDK \uB85C\uB4DC \uC644\uB8CC","success"),setTimeout(m,200)},o.onerror=()=>{s.sdkStatus="\u274C SDK \uB85C\uB4DC \uC2E4\uD328 \u2014 API \uD0A4 \uC624\uB958",l("Google Maps SDK \uB85C\uB4DC \uC2E4\uD328","error",0)},document.head.appendChild(o)},m=()=>{var e;const o=document.getElementById("zd-google-map");!o||!((e=window.google)!=null&&e.maps)||(n=new google.maps.Map(o,{center:{lat:parseFloat(t.lat),lng:parseFloat(t.lng)},zoom:parseInt(t.zoom)}),g=new google.maps.Marker({position:{lat:parseFloat(t.lat),lng:parseFloat(t.lng)},map:n}),p.mapLoaded=!0,l("Google \uC9C0\uB3C4 \uB80C\uB354\uB9C1 \uC644\uB8CC","success"))},v=()=>{if(!n){l("\uC9C0\uB3C4\uB97C \uBA3C\uC800 \uB80C\uB354\uB9C1\uD558\uC138\uC694.","error");return}const o={lat:parseFloat(t.lat),lng:parseFloat(t.lng)};n.setCenter(o),n.setZoom(parseInt(t.zoom)),g&&g.setPosition(o)},G=()=>{var e,i;if(!((i=(e=window.google)==null?void 0:e.maps)!=null&&i.Geocoder)){l("Geocoder \uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error");return}if(!t.address){l("\uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}p.loading=!0,s.error="",new google.maps.Geocoder().geocode({address:t.address,region:"KR"},(a,u)=>{if(p.loading=!1,u!=="OK"||!(a!=null&&a.length)){s.error="\uC9C0\uC624\uCF54\uB529 \uC2E4\uD328: "+u,l("\uC9C0\uC624\uCF54\uB529 \uC2E4\uD328","error",0);return}const d=a[0];s.geocodeResult={formattedAddress:d.formatted_address,lat:d.geometry.location.lat(),lng:d.geometry.location.lng(),placeId:d.place_id},t.lat=s.geocodeResult.lat,t.lng=s.geocodeResult.lng,l("\uC9C0\uC624\uCF54\uB529 \uC131\uACF5","success"),n&&v()})},M=async()=>{if(!r.apiKey){l("API Key \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}try{await boApi.put("/bo/sy/prop/bulk",[{propKey:"app.map.google-api-key",propValue:r.apiKey}],coUtil.cofApiHdr("\uAD6C\uAE00 \uC9C0\uB3C4 \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),l("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(o){l(coUtil.cofErrMsg(o,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:r,form:t,result:s,uiState:p,cfgFormColumns:S,mapFormColumns:A,geocodeFormColumns:_,geocodeGridColumns:I,cfGeocodeRows:()=>{if(!s.geocodeResult)return[];const o=s.geocodeResult;return[{_label:"\uD3EC\uB9F7 \uC8FC\uC18C",_value:o.formattedAddress},{_label:"\uC704\uB3C4",_value:o.lat},{_label:"\uACBD\uB3C4",_value:o.lng},{_label:"Place ID",_value:o.placeId}]},handleBtnAction:o=>{if(o==="sdk-load")return P();if(o==="map-render")return m();if(o==="map-move")return v();if(o==="geocode")return G();if(o==="key-save")return M()}}},template:`
<div>
  <div class="page-title">\uAD6C\uAE00 \uC9C0\uB3C4 API \uD14C\uC2A4\uD2B8</div>

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

  <!-- \uC9C0\uB3C4 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uC9C0\uB3C4 \uBBF8\uB9AC\uBCF4\uAE30</span>
      <div style="margin-left:auto;display:flex;gap:6px">
        <button class="btn btn_apply btn-sm" @click="handleBtnAction('map-render')">\uB2E4\uC2DC \uB80C\uB354\uB9C1</button>
        <button class="btn btn_confirm btn-sm" @click="handleBtnAction('map-move')">\uC88C\uD45C \uC774\uB3D9</button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="mapFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div id="zd-google-map" style="width:100%;height:360px;border:1px solid #ddd;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center">
        <span v-if="!uiState.mapLoaded" style="color:#999;font-size:13px">SDK \uB85C\uB4DC \uD6C4 \uC9C0\uB3C4\uAC00 \uC5EC\uAE30 \uD45C\uC2DC\uB429\uB2C8\uB2E4</span>
      </div>
    </div>
  </div>

  <!-- \uC9C0\uC624\uCF54\uB529 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar">
      <span class="list-title">\uC9C0\uC624\uCF54\uB529 (\uC8FC\uC18C \u2192 \uC88C\uD45C)</span>
      <div style="margin-left:auto">
        <button class="btn btn_search btn-sm" :disabled="uiState.loading" @click="handleBtnAction('geocode')">
          {{ uiState.loading ? '\u23F3 \uC870\uD68C \uC911\u2026' : '\uC9C0\uC624\uCF54\uB529' }}
        </button>
      </div>
    </div>
    <div style="padding:12px">
      <bo-form-area plain-readonly :columns="geocodeFormColumns" :form="form" :errors="{}" :cols="3" :show-actions="false" :readonly="false" compact />
      <div v-if="result.error" style="padding:8px;background:#fff5f5;border:1px solid #fca5a5;border-radius:4px;font-size:12px;color:#b91c1c">{{ result.error }}</div>
      <div v-if="result.geocodeResult" style="background:#f0fdf4;border:1px solid #86efac;border-radius:6px;padding:10px;margin-top:8px">
        <div style="font-weight:600;margin-bottom:6px;color:#15803d">\u2705 \uC9C0\uC624\uCF54\uB529 \uACB0\uACFC</div>
        <bo-grid :columns="geocodeGridColumns" :rows="cfGeocodeRows()" :show-row-num="false" />
      </div>
    </div>
  </div>

  <!-- \uC548\uB0B4 -->
  <div class="card" style="margin-bottom:12px">
    <div class="toolbar"><span class="list-title">\uC124\uC815 \uC548\uB0B4</span></div>
    <div style="padding:12px;font-size:12px;line-height:1.8;color:#444">
      <b>1.</b> Google Cloud Console \u2192 Maps JavaScript API + Geocoding API \uD65C\uC131\uD654<br>
      <b>2.</b> API \uD0A4 \uC0DD\uC131 \u2192 HTTP \uB9AC\uD37C\uB7EC \uC81C\uD55C: <code>127.0.0.1:*</code>, <code>localhost:*</code><br>
      <b>3.</b> sy_prop <code>app.map.google-api-key</code> \uC5D0 API Key \uB4F1\uB85D<br>
      <b>4.</b> SDK \uB85C\uB4DC \u2192 \uC9C0\uB3C4 \uB80C\uB354\uB9C1 \u2192 \uC9C0\uC624\uCF54\uB529 \uC21C\uC11C\uB85C \uD14C\uC2A4\uD2B8
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.map." default-prop-key-filter="app.map.google" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/map" default-key-filter="app.map.google" />
</div>`};
