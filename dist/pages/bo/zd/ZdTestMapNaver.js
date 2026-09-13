window.ZdTestMapNaver={name:"ZdTestMapNaver",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(h){var y;const{reactive:c,onMounted:x,onUnmounted:w}=Vue,n=h.showToast||((y=window.boApp)==null?void 0:y.showToast)||(()=>{}),i=c({clientId:""}),a=c({lat:37.5665,lng:126.978,zoom:15,address:"\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC911\uAD6C \uD0DC\uD3C9\uB85C1\uAC00 31"}),s=c({sdkStatus:"",sdkUrl:"",initDetail:"",geocodeResult:null,error:""}),p=c({sdkLoaded:!1,mapLoaded:!1,loading:!1});let o=null,u=null;const S=[{key:"clientId",label:"NCP Client ID",type:"text",required:!0,placeholder:"sy_prop: app.map.naver-map-client-id",mono:!0,colSpan:3,hint:"app.map.naver-map-client-id"}],I=[{key:"lat",label:"\uC704\uB3C4",type:"number",hint:"lat"},{key:"lng",label:"\uACBD\uB3C4",type:"number",hint:"lng"},{key:"zoom",label:"\uC90C",type:"number",hint:"zoom"}],_=[{key:"address",label:"\uC8FC\uC18C",type:"text",colSpan:3,hint:"address"}],C=[{key:"_label",label:"\uD56D\uBAA9",cellStyle:"color:#555;width:100px"},{key:"_value",label:"\uAC12"}];x(async()=>{var e,t,r;try{const l=await((t=(e=boApiSvc.syProp)==null?void 0:e.getList)==null?void 0:t.call(e,{propKeys:"app.map.naver-map-client-id"},"\uB124\uC774\uBC84 \uC9C0\uB3C4 API \uD14C\uC2A4\uD2B8","\uD0A4 \uC870\uD68C")),d=((r=l==null?void 0:l.data)==null?void 0:r.data)||[],K=L=>{const k=d.filter(m=>m.propKey===L&&m.propValue),f=k.find(m=>/local|dev/.test(m.propProfile||""))||k[0];return(f==null?void 0:f.propValue)||""};i.clientId=K("app.map.naver-map-client-id")}catch(l){s.error="sy_prop \uC870\uD68C \uC2E4\uD328: "+(l.message||l)}b()}),w(()=>{var e;o&&((e=o.destroy)==null||e.call(o),o=null)});const b=()=>{var t;const e=!!((t=window.naver)!=null&&t.maps);p.sdkLoaded=e,s.sdkUrl="https://openapi.map.naver.com/openapi/v3/maps.js",s.sdkStatus=e?"\u2705 Naver Maps SDK \uB85C\uB4DC\uB428":"\u274C Naver Maps SDK \uC5C6\uC74C \u2014 clientId \uC124\uC815 \uD6C4 [SDK \uB85C\uB4DC] \uBC84\uD2BC \uD074\uB9AD",s.initDetail=e?"Client ID: "+(i.clientId||"(\uBBF8\uC124\uC815)"):""},D=()=>{var t;if(!i.clientId){n("Client ID \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}if((t=window.naver)!=null&&t.maps){v();return}const e=document.createElement("script");e.src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId="+i.clientId+"&submodules=geocoder",e.onload=()=>{b(),n("Naver Maps SDK \uB85C\uB4DC \uC644\uB8CC","success"),setTimeout(v,300)},e.onerror=()=>{s.sdkStatus="\u274C SDK \uB85C\uB4DC \uC2E4\uD328 \u2014 Client ID \uC624\uB958 \uB610\uB294 \uB124\uD2B8\uC6CC\uD06C \uBB38\uC81C",n("Naver Maps SDK \uB85C\uB4DC \uC2E4\uD328","error",0)},document.head.appendChild(e)},v=()=>{var t,r;const e=document.getElementById("zd-naver-map");!e||!((t=window.naver)!=null&&t.maps)||(o&&((r=o.destroy)==null||r.call(o)),o=new naver.maps.Map(e,{center:new naver.maps.LatLng(a.lat,a.lng),zoom:a.zoom}),u=new naver.maps.Marker({position:new naver.maps.LatLng(a.lat,a.lng),map:o}),p.mapLoaded=!0,n("\uC9C0\uB3C4 \uB80C\uB354\uB9C1 \uC644\uB8CC","success"))},g=()=>{if(!o){n("\uC9C0\uB3C4\uB97C \uBA3C\uC800 \uB80C\uB354\uB9C1\uD558\uC138\uC694.","error");return}const e=new naver.maps.LatLng(parseFloat(a.lat),parseFloat(a.lng));o.setCenter(e),o.setZoom(parseInt(a.zoom)),u&&u.setPosition(e)},A=()=>{var e,t;if(!((t=(e=window.naver)==null?void 0:e.maps)!=null&&t.Service)){n("Geocoder \uC11C\uBE0C\uBAA8\uB4C8\uC774 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","error");return}if(!a.address){n("\uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}p.loading=!0,s.error="",naver.maps.Service.geocode({query:a.address},(r,l)=>{if(p.loading=!1,r!==naver.maps.Service.Status.OK){s.error="\uC9C0\uC624\uCF54\uB529 \uC2E4\uD328: "+r,n("\uC9C0\uC624\uCF54\uB529 \uC2E4\uD328","error",0);return}const d=l.v2.addresses[0];if(!d){s.error="\uC8FC\uC18C \uAC80\uC0C9 \uACB0\uACFC \uC5C6\uC74C";return}s.geocodeResult=d,a.lat=parseFloat(d.y),a.lng=parseFloat(d.x),n("\uC9C0\uC624\uCF54\uB529 \uC131\uACF5","success"),o&&g()})},z=async()=>{if(!i.clientId){n("Client ID \uB97C \uC785\uB825\uD558\uC138\uC694.","error");return}try{await boApi.put("/bo/sy/prop/bulk",[{propKey:"app.map.naver-map-client-id",propValue:i.clientId}],coUtil.cofApiHdr("\uB124\uC774\uBC84 \uC9C0\uB3C4 \uD14C\uC2A4\uD2B8","\uD0A4 \uC800\uC7A5")),n("sy_prop \uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(e){n(coUtil.cofErrMsg(e,"\uC800\uC7A5 \uC2E4\uD328"),"error",0)}};return{cfg:i,form:a,result:s,uiState:p,cfgFormColumns:S,mapFormColumns:I,geocodeFormColumns:_,geocodeGridColumns:C,cfGeocodeRows:()=>{if(!s.geocodeResult)return[];const e=s.geocodeResult;return[{_label:"\uB3C4\uB85C\uBA85 \uC8FC\uC18C",_value:e.roadAddress},{_label:"\uC9C0\uBC88 \uC8FC\uC18C",_value:e.jibunAddress},{_label:"\uC704\uB3C4",_value:e.y},{_label:"\uACBD\uB3C4",_value:e.x}]},handleBtnAction:e=>{if(e==="sdk-load")return D();if(e==="map-render")return v();if(e==="map-move")return g();if(e==="geocode")return A();if(e==="key-save")return z()}}},template:`
<div>
  <div class="page-title">\uB124\uC774\uBC84 \uC9C0\uB3C4 API \uD14C\uC2A4\uD2B8</div>

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
      <div id="zd-naver-map" style="width:100%;height:360px;border:1px solid #ddd;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center">
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
      <b>1.</b> Naver Cloud Platform \u2192 Application \u2192 Maps \uC11C\uBE44\uC2A4 \uB4F1\uB85D<br>
      <b>2.</b> Web Dynamic Map + Geocoding API \uD65C\uC131\uD654<br>
      <b>3.</b> \uD5C8\uC6A9 \uB3C4\uBA54\uC778\uC5D0 <code>127.0.0.1</code>, <code>localhost</code> \uCD94\uAC00<br>
      <b>4.</b> sy_prop <code>app.map.naver-map-client-id</code> \uC5D0 Client ID \uB4F1\uB85D<br>
      <b>5.</b> FO \uB9E4\uC7A5 \uC704\uCE58 \uD398\uC774\uC9C0(Location.js)\uC5D0\uC11C \uC2E4\uC81C \uB80C\uB354\uB9C1 \uD655\uC778
    </div>
  </div>

  <bo-zd-sy-prop-grid prop-key-prefixes="app.map." default-prop-key-filter="app.map.naver" />
  <bo-zd-yml-grid endpoint="/bo/sy/app-config/map" default-key-filter="app.map.naver" />
</div>`};
