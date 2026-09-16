window.LocationPage={name:"LocationPage",props:{navigate:{type:Function,required:!0}},setup(m){const{reactive:f,ref:p,onMounted:x,watch:z}=Vue,t=f({loading:!1,error:null,mapProvider:"kakao",mapSrc:""}),l=p(null),c=p(null);let d=null;const y=(e,i={})=>{if(e==="page-goHome")return m.navigate("home");console.warn("[handleBtnAction] unknown cmd:",e)},a=37.4407,r=127.1468,v="\uACBD\uAE30\uB3C4 \uC131\uB0A8\uC2DC \uC911\uC6D0\uAD6C \uC131\uB0A8\uB300\uB85C 997\uBC88\uAE38 49-14",s=encodeURIComponent(v),o={kakao:`https://map.kakao.com/link/map/ShopJoy,${a},${r}`,google:`https://maps.google.com/maps?q=${s}&output=embed&hl=ko&z=17`,osm:`https://www.openstreetmap.org/export/embed.html?bbox=${r-.008}%2C${a-.005}%2C${r+.008}%2C${a+.005}&layer=mapnik&marker=${a}%2C${r}`},u=`https://map.kakao.com/link/map/ShopJoy,${a},${r}`,b=`https://map.naver.com/v5/search/${s}`,h=`https://maps.google.com/maps?q=${s}`,k=()=>{t.mapProvider==="google"?(t.mapProvider="osm",t.mapSrc=o.osm):t.mapError=!0},w=async()=>{try{const e=await coExtSdk.loadKakaoMap(),i=l.value;if(!i)return!1;if(typeof e.Map!="function"||typeof e.LatLng!="function")throw new Error("Kakao Maps \uC0DD\uC131\uC790\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (JS \uD0A4 \uB3C4\uBA54\uC778 \uB4F1\uB85D \uD655\uC778 \uD544\uC694).");const n=new e.Map(i,{center:new e.LatLng(a,r),level:4});return new e.Marker({map:n,position:new e.LatLng(a,r),title:"ShopJoy \uBCF8\uC0AC"}),!0}catch{return!1}},S=async()=>{try{const e=await coExtSdk.loadNaverMap(),i=c.value;if(!i)return!1;if(typeof e.Map!="function"||typeof e.LatLng!="function")throw new Error("Naver Maps \uC0DD\uC131\uC790\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (Client ID \uB3C4\uBA54\uC778 \uB4F1\uB85D \uD655\uC778 \uD544\uC694).");const n=new e.LatLng(a,r);return d=new e.Map(i,{center:n,zoom:16}),new e.Marker({map:d,position:n,title:"ShopJoy \uBCF8\uC0AC"}),!0}catch{return!1}},g=async e=>{if(t.mapError=!1,e==="kakao")t.mapProvider="kakao_sdk",await Vue.nextTick(),await w()||(t.mapProvider="google",t.mapSrc=o.google);else if(e==="naver"){if(t.mapProvider="naver_sdk",await Vue.nextTick(),d)return;await S()||(t.mapProvider="google",t.mapSrc=o.google)}else t.mapProvider="google",t.mapSrc=o.google};return x(async()=>{await g("kakao")}),{uiState:t,mapEl:l,naverMapEl:c,handleBtnAction:y,switchProvider:g,onMapError:k,kakaoLink:u,naverLink:b,googleLink:h,ADDR:v}},template:`
<fo-page title="\uC704\uCE58\uC548\uB0B4" eyebrow="About"
  banner-img="assets/cdn/prod/img/page-title/page-title-1.jpg"
  banner-align="center 40%"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'\uC704\uCE58\uC548\uB0B4' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \uC9C0\uB3C4 \uC81C\uACF5\uC790 \uC804\uD658 (2026-09 \uCD94\uAC00 \u2014 \uCE74\uCE74\uC624/\uB124\uC774\uBC84/\uAD6C\uAE00 \uC9C1\uC811 \uC120\uD0DD) ============ -->
  <div style="display:flex;gap:6px;margin-bottom:10px;">
    <button @click="switchProvider('kakao')" type="button"
      :style="{ padding:'7px 16px', borderRadius:'6px', fontSize:'0.8rem', fontWeight:700, cursor:'pointer',
      border: uiState.mapProvider==='kakao_sdk' ? '1.5px solid #FEE500' : '1px solid var(--border)',
      background: uiState.mapProvider==='kakao_sdk' ? '#FEE500' : 'var(--bg-card)',
      color: uiState.mapProvider==='kakao_sdk' ? '#3c1e1e' : 'var(--text-secondary)' }">
      \u{1F5FA} \uCE74\uCE74\uC624\uB9F5
    </button>
    <button @click="switchProvider('naver')" type="button"
      :style="{ padding:'7px 16px', borderRadius:'6px', fontSize:'0.8rem', fontWeight:700, cursor:'pointer',
      border: uiState.mapProvider==='naver_sdk' ? '1.5px solid #03C75A' : '1px solid var(--border)',
      background: uiState.mapProvider==='naver_sdk' ? '#03C75A' : 'var(--bg-card)',
      color: uiState.mapProvider==='naver_sdk' ? '#fff' : 'var(--text-secondary)' }">
      \u{1F5FA} \uB124\uC774\uBC84\uC9C0\uB3C4
    </button>
    <button @click="switchProvider('google')" type="button"
      :style="{ padding:'7px 16px', borderRadius:'6px', fontSize:'0.8rem', fontWeight:700, cursor:'pointer',
      border: uiState.mapProvider==='google' ? '1.5px solid #4285F4' : '1px solid var(--border)',
      background: uiState.mapProvider==='google' ? '#4285F4' : 'var(--bg-card)',
      color: uiState.mapProvider==='google' ? '#fff' : 'var(--text-secondary)' }">
      \u{1F5FA} \uAD6C\uAE00\uC9C0\uB3C4
    </button>
  </div>
  <!-- ===== \u25A1. \uC9C0\uB3C4 \uC81C\uACF5\uC790 \uC804\uD658 ============================================= -->
  <!-- ===== \u25A0. \uC9C0\uB3C4 \uC601\uC5ED =================================================== -->
  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin-bottom:24px;">
    <!-- ===== \u25A0.\u25A0. \uCE74\uCE74\uC624 SDK \uBAA8\uB4DC: div \uCEE8\uD14C\uC774\uB108 (\uD56D\uC0C1 DOM\uC5D0 \uC874\uC7AC \u2014 v-show. 2026-09-06,
         "Illegal constructor" \uD06C\uB798\uC2DC \uC218\uC815: initPage() \uAC00 \uC9C0\uB3C4\uB97C \uB9CC\uB4E4\uAE30 \uC804\uC5D0\uB3C4 \uC774 \uC5D8\uB9AC\uBA3C\uD2B8\uAC00
         \uC874\uC7AC\uD574\uC57C ref \uB85C \uC7A1\uC744 \uC218 \uC788\uB2E4) ================================== -->
    <div v-show="uiState.mapProvider==='kakao_sdk'"
      id="shopjoy-map" ref="mapEl"
      style="width:100%;height:clamp(220px,40vw,320px);">
    </div>
    <!-- ===== \u25A1.\u25A1. \uCE74\uCE74\uC624 SDK \uBAA8\uB4DC: div \uCEE8\uD14C\uC774\uB108 ================================== -->
    <!-- ===== \u25A0.\u25A0. \uB124\uC774\uBC84 SDK \uBAA8\uB4DC: div \uCEE8\uD14C\uC774\uB108 (2026-09 \uCD94\uAC00, \uCE74\uCE74\uC624\uC640 \uB3D9\uC77C v-show \uD328\uD134) === -->
    <div v-show="uiState.mapProvider==='naver_sdk'"
      id="shopjoy-naver-map" ref="naverMapEl"
      style="width:100%;height:clamp(220px,40vw,320px);">
    </div>
    <!-- ===== \u25A1.\u25A1. \uB124\uC774\uBC84 SDK \uBAA8\uB4DC: div \uCEE8\uD14C\uC774\uB108 ================================== -->
    <template v-if="uiState.mapProvider!=='kakao_sdk' && uiState.mapProvider!=='naver_sdk'">
      <!-- ===== \u25A0.\u25A0. iframe \uBAA8\uB4DC (Google / OSM) ============================== -->
      <iframe v-if="!uiState.mapError ? uiState.mapSrc : false" :src="uiState.mapSrc" width="100%" style="border:0;display:block;height:clamp(220px,40vw,320px);" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" @error="onMapError">
    </iframe>
    <!-- ===== \u25A1.\u25A1. iframe \uBAA8\uB4DC (Google / OSM) ============================== -->
    <!-- ===== \u25A0.\u25A0. \uB85C\uB529 \uC911 (mapSrc \uC544\uC9C1 \uBBF8\uC124\uC815) ================================== -->
    <div v-else-if="!uiState.mapError ? !uiState.mapSrc : false" style="height:clamp(220px,40vw,320px);display:flex;align-items:center;justify-content:center;background:var(--bg-base);color:var(--text-muted);font-size:13px;gap:8px;">
    <span style="animation:spin .8s linear infinite;display:inline-block;">
      \u23F3
    </span>
    \uC9C0\uB3C4 \uB85C\uB529 \uC911\u2026
  </div>
  <!-- ===== \u25A1.\u25A1. \uB85C\uB529 \uC911 (mapSrc \uC544\uC9C1 \uBBF8\uC124\uC815) ================================== -->
  <!-- ===== \u25A0.\u25A0. \uC5D0\uB7EC fallback =========================================== -->
  <div v-else
        style="height:clamp(220px,40vw,320px);display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg-base);gap:12px;">
    <div style="font-size:2.5rem;">
      \u{1F5FA}\uFE0F
    </div>
    <div style="font-size:13px;color:var(--text-muted);">
      \uC9C0\uB3C4\uB97C \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
    <a :href="googleLink" target="_blank"
          style="font-size:12px;padding:7px 18px;border-radius:20px;background:var(--blue);color:#fff;text-decoration:none;font-weight:600;">
      \uC678\uBD80 \uC9C0\uB3C4\uC5D0\uC11C \uBCF4\uAE30 \u2192
    </a>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC5D0\uB7EC fallback =========================================== -->
    </template>
<!-- ===== \u25A0.\u25A0. \uD558\uB2E8 \uBC14: \uC8FC\uC18C + \uC9C0\uB3C4\uC571 \uB9C1\uD06C ===================================== -->
<div style="padding:12px 20px;background:var(--bg-card);border-top:1px solid var(--border);display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
  <!-- min-width:0 \uC774\uBA74 flex-wrap \uC774 \uC904\uBC14\uAFC8 \uB300\uC2E0 \uD14D\uC2A4\uD2B8\uB97C 0\uC5D0 \uAC00\uAE5D\uAC8C \uC9DC\uBD80\uB77C\uB728\uB824 \uD55C \uAE00\uC790\uC529
       \uC138\uB85C\uB85C \uCABC\uAC1C\uC838 \uBCF4\uC774\uB294 \uBC84\uADF8(2026-09-06, FAQ \uBD84\uB958\uD2B8\uB9AC\uC640 \uB3D9\uC77C \uC99D\uC0C1) \u2014 \uC801\uB2F9\uD55C \uCD5C\uC18C\uD3ED\uC744 \uC918\uC11C
       \uBC84\uD2BC \uADF8\uB8F9\uC774 \uC606\uC5D0 \uBABB \uBD99\uC73C\uBA74 \uC774 span \uC790\uCCB4\uAC00 \uB2E4\uC74C \uC904\uB85C \uB118\uC5B4\uAC00\uAC8C(\uC815\uC0C1 wrap) \uD55C\uB2E4. -->
  <span style="font-size:0.83rem;color:var(--text-secondary);flex:1;min-width:200px;">
    \u{1F4CD} {{ ADDR }} 201\uD638
  </span>
  <div style="display:flex;gap:6px;flex-shrink:0;">
    <a :href="kakaoLink" target="_blank" rel="noopener"
          style="padding:5px 12px;background:#FEE500;color:#3c1e1e;border-radius:6px;font-size:0.78rem;font-weight:700;text-decoration:none;display:flex;align-items:center;gap:4px;white-space:nowrap;">
      \u{1F5FA} \uCE74\uCE74\uC624\uB9F5
    </a>
    <a :href="naverLink" target="_blank" rel="noopener"
          style="padding:5px 12px;background:#03C75A;color:#fff;border-radius:6px;font-size:0.78rem;font-weight:700;text-decoration:none;display:flex;align-items:center;gap:4px;white-space:nowrap;">
      \u{1F5FA} \uB124\uC774\uBC84\uC9C0\uB3C4
    </a>
    <a :href="googleLink" target="_blank" rel="noopener"
          style="padding:5px 12px;background:#4285F4;color:#fff;border-radius:6px;font-size:0.78rem;font-weight:700;text-decoration:none;display:flex;align-items:center;gap:4px;white-space:nowrap;">
      \u{1F5FA} \uAD6C\uAE00\uC9C0\uB3C4
    </a>
  </div>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \uD558\uB2E8 \uBC14: \uC8FC\uC18C + \uC9C0\uB3C4\uC571 \uB9C1\uD06C ===================================== -->
<!-- ===== \u25A1. \uC9C0\uB3C4 \uC601\uC5ED =================================================== -->
<!-- ===== \u25A0. \uC0C1\uC138 \uC815\uBCF4 =================================================== -->
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:clamp(10px,2vw,16px);margin-bottom:24px;">
  <!-- ===== \u25A0.\u25A0. \uC8FC\uC18C ==================================================== -->
  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
      <div style="width:40px;height:40px;border-radius:10px;background:var(--blue-dim);display:flex;align-items:center;justify-content:center;font-size:1.2rem;">
        \u{1F4CD}
      </div>
      <div style="font-size:1rem;font-weight:800;color:var(--text-primary);">
        \uC8FC\uC18C
      </div>
    </div>
    <div style="font-size:0.88rem;color:var(--text-secondary);line-height:1.8;">
      <div style="font-weight:600;color:var(--text-primary);margin-bottom:4px;">
        \uACBD\uAE30\uB3C4 \uC131\uB0A8\uC2DC \uC911\uC6D0\uAD6C
      </div>
      <div>
        \uC131\uB0A8\uB300\uB85C 997\uBC88\uAE38 49-14, 201\uD638
      </div>
      <div style="margin-top:8px;font-size:0.8rem;color:var(--text-muted);">
        \uC6B0\uD3B8\uBC88\uD638: 13401
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC8FC\uC18C ==================================================== -->
  <!-- ===== \u25A0.\u25A0. \uC601\uC5C5\uC2DC\uAC04 ================================================== -->
  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
      <div style="width:40px;height:40px;border-radius:10px;background:var(--green-dim);display:flex;align-items:center;justify-content:center;font-size:1.2rem;">
        \u{1F550}
      </div>
      <div style="font-size:1rem;font-weight:800;color:var(--text-primary);">
        \uC601\uC5C5\uC2DC\uAC04
      </div>
    </div>
    <div style="font-size:0.87rem;color:var(--text-secondary);line-height:2;">
      <div style="display:flex;justify-content:space-between;">
        <span>
          \uC6D4\uC694\uC77C ~ \uAE08\uC694\uC77C
        </span>
        <span style="font-weight:700;color:var(--text-primary);">
          09:00 \u2013 18:00
        </span>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span>
          \uD1A0\uC694\uC77C
        </span>
        <span style="font-weight:700;color:var(--text-primary);">
          10:00 \u2013 15:00
        </span>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span>
          \uC77C\uC694\uC77C / \uACF5\uD734\uC77C
        </span>
        <span style="font-weight:600;color:#ef4444;">
          \uD734\uBB34
        </span>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC601\uC5C5\uC2DC\uAC04 ================================================== -->
  <!-- ===== \u25A0.\u25A0. \uC5F0\uB77D\uCC98 =================================================== -->
  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
      <div style="width:40px;height:40px;border-radius:10px;background:var(--blue-dim);display:flex;align-items:center;justify-content:center;font-size:1.2rem;">
        \u{1F4DE}
      </div>
      <div style="font-size:1rem;font-weight:800;color:var(--text-primary);">
        \uC5F0\uB77D\uCC98
      </div>
    </div>
    <div style="font-size:0.87rem;color:var(--text-secondary);line-height:2;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span>
          \uC804\uD654
        </span>
        <a :href="'tel:'+(config?.tel||'010-3805-0206')" style="font-weight:700;color:var(--blue);text-decoration:none;">
        {{ config&&config.tel||'010-3805-0206' }}
      </a>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span>
        \uC774\uBA54\uC77C
      </span>
      <a :href="'mailto:'+(config?.email||'illeesam@gmail.com')" style="font-weight:700;color:var(--blue);text-decoration:none;font-size:0.82rem;">
      {{ config&&config.email||'illeesam@gmail.com' }}
    </a>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px;">
    <span>
      \uCE74\uCE74\uC624\uCC44\uB110
    </span>
    <span style="font-weight:700;color:var(--text-primary);">
      @shopjoy
    </span>
  </div>
</div>
</div>
</div>
<!-- ===== \u25A1.\u25A1. \uC5F0\uB77D\uCC98 =================================================== -->
<!-- ===== \u25A1. \uC0C1\uC138 \uC815\uBCF4 =================================================== -->
<!-- ===== \u25A0. \uAD50\uD1B5\uD3B8 \uC548\uB0B4 ================================================== -->
<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:clamp(16px,3vw,24px);">
  <div style="font-size:1rem;font-weight:800;color:var(--text-primary);margin-bottom:16px;">
    \u{1F68C} \uAD50\uD1B5\uD3B8 \uC548\uB0B4
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:clamp(8px,1.5vw,12px);">
    <div style="padding:14px;background:var(--bg-base);border-radius:10px;">
      <div style="font-size:0.85rem;font-weight:700;color:var(--text-primary);margin-bottom:8px;">
        \u{1F687} \uC9C0\uD558\uCCA0
      </div>
      <div style="font-size:0.82rem;color:var(--text-secondary);line-height:1.8;">
        <div>
          8\uD638\uC120 \uC131\uB0A8\uC5ED 2\uBC88 \uCD9C\uAD6C
        </div>
        <div style="color:var(--text-muted);font-size:0.78rem;">
          \uB3C4\uBCF4 \uC57D 10\uBD84
        </div>
      </div>
    </div>
    <div style="padding:14px;background:var(--bg-base);border-radius:10px;">
      <div style="font-size:0.85rem;font-weight:700;color:var(--text-primary);margin-bottom:8px;">
        \u{1F68C} \uBC84\uC2A4
      </div>
      <div style="font-size:0.82rem;color:var(--text-secondary);line-height:1.8;">
        <div>
          \uC131\uB0A8\uB300\uB85C \uC815\uB958\uC7A5 \uD558\uCC28
        </div>
        <div style="color:var(--text-muted);font-size:0.78rem;">
          220, 500\uBC88 \uC774\uC6A9
        </div>
      </div>
    </div>
    <div style="padding:14px;background:var(--bg-base);border-radius:10px;">
      <div style="font-size:0.85rem;font-weight:700;color:var(--text-primary);margin-bottom:8px;">
        \u{1F697} \uC790\uAC00\uC6A9
      </div>
      <div style="font-size:0.82rem;color:var(--text-secondary);line-height:1.8;">
        <div>
          \uC131\uB0A8IC\uC5D0\uC11C \uC57D 5\uBD84
        </div>
        <div style="color:var(--text-muted);font-size:0.78rem;">
          \uAC74\uBB3C \uB0B4 \uC8FC\uCC28 \uAC00\uB2A5 (\uBB34\uB8CC 2\uC2DC\uAC04)
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ===== \u25A1. \uAD50\uD1B5\uD3B8 \uC548\uB0B4 ================================================== -->
</fo-page>
<!-- 2026-09-06(\uCF58\uC194 "TypeError: Illegal constructor" \uD06C\uB798\uC2DC \uD6C4\uBCF4 \uC6D0\uC778 \uC81C\uAC70) \u2014 \uC5EC\uAE30 \uC788\uB358
     <style>@keyframes spin...</style> \uB97C <fo-page> \uC790\uC2DD\uC73C\uB85C \uD15C\uD50C\uB9BF \uBB38\uC790\uC5F4\uC5D0 \uC9C1\uC811 \uB123\uB358 \uAC83\uC744
     \uC81C\uAC70. spin \uD0A4\uD504\uB808\uC784\uC740 assets/css/fo-global-style0N.css \uC804\uC5ED\uC5D0 \uC62E\uACA8 \uB4F1\uB85D(\uB85C\uB529 \uC2A4\uD53C\uB108 \uB4F1
     animation:spin \uC744 \uC4F0\uB294 \uB2E4\uB978 \uD654\uBA74\uACFC \uACF5\uC720). \uCEF4\uD3EC\uB10C\uD2B8 template \uC548\uC5D0 <style> \uC744 \uB450\uB294 \uD328\uD134
     \uC790\uCCB4\uAC00 \uC774 \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC870(\uB7F0\uD0C0\uC784 \uBB38\uC790\uC5F4 \uD15C\uD50C\uB9BF)\uC5D0\uC11C \uC548\uD2F0\uD328\uD134\uC774\uB77C CSS \uB294 \uC804\uC5ED \uD30C\uC77C\uB85C \uC62E\uAE34\uB2E4. -->
`};
