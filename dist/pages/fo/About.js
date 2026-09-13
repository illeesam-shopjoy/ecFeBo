window.About={name:"About",props:{navigate:{type:Function,required:!0}},setup(i){const{reactive:t,watch:o,onMounted:d}=Vue,a=t({loading:!1,error:null});return{handleBtnAction:(e,r={})=>{if(e==="page-goHome")return i.navigate("home");console.warn("[handleBtnAction] unknown cmd:",e)},values:[{icon:"\u{1F60A}",bg:"#dbeafe",title:"\uACE0\uAC1D \uC911\uC2EC",desc:"\uBAA8\uB4E0 \uC758\uC0AC\uACB0\uC815\uC758 \uAE30\uC900\uC740 \uACE0\uAC1D \uB9CC\uC871\uC785\uB2C8\uB2E4."},{icon:"\u{1F4A1}",bg:"#fef3c7",title:"\uD2B8\uB80C\uB4DC \uC120\uB3C4",desc:"\uCD5C\uC2E0 \uD328\uC158 \uD2B8\uB80C\uB4DC\uB97C \uBE60\uB974\uAC8C \uBC18\uC601\uD569\uB2C8\uB2E4."},{icon:"\u{1F331}",bg:"#dcfce7",title:"\uC9C0\uC18D \uAC00\uB2A5\uC131",desc:"\uD658\uACBD\uC744 \uC0DD\uAC01\uD558\uB294 \uC9C0\uC18D \uAC00\uB2A5\uD55C \uD328\uC158\uC744 \uC9C0\uD5A5\uD569\uB2C8\uB2E4."},{icon:"\u{1F91D}",bg:"#f3e8ff",title:"\uC2E0\uB8B0\uC640 \uD22C\uBA85\uC131",desc:"\uC815\uC9C1\uD55C \uC815\uBCF4\uC640 \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC73C\uB85C \uC2E0\uB8B0\uB97C \uC313\uC2B5\uB2C8\uB2E4."}],history:[{date:"2024\uB144 11\uC6D4",title:"ShopJoy \uC11C\uBE44\uC2A4 \uB860\uCE6D",desc:"\uBCA0\uD0C0 \uBC84\uC804 \uCD9C\uC2DC \uBC0F \uCD08\uAE30 \uC0C1\uD488 \uB77C\uC778\uC5C5 \uAD6C\uCD95"},{date:"2024\uB144 12\uC6D4",title:"\uD68C\uC6D0 1,000\uBA85 \uB2EC\uC131",desc:"\uC624\uD508 \uD55C \uB2EC \uB9CC\uC5D0 1,000\uBA85\uC758 \uD68C\uC6D0 \uC720\uCE58"},{date:"2025\uB144 02\uC6D4",title:"\uCE74\uD14C\uACE0\uB9AC \uD655\uC7A5",desc:"\uC545\uC138\uC11C\uB9AC \uCE74\uD14C\uACE0\uB9AC \uC2E0\uADDC \uCD94\uAC00, \uCD1D 5\uAC1C \uCE74\uD14C\uACE0\uB9AC \uC6B4\uC601"},{date:"2025\uB144 06\uC6D4",title:"\uBAA8\uBC14\uC77C \uC571 \uCD9C\uC2DC",desc:"iOS/Android \uC571 \uB3D9\uC2DC \uCD9C\uC2DC \uBC0F \uC571 \uC804\uC6A9 \uD560\uC778 \uC774\uBCA4\uD2B8 \uC9C4\uD589"},{date:"2026\uB144 01\uC6D4",title:"50\uAC1C \uC0C1\uD488 \uB77C\uC778\uC5C5 \uC644\uC131",desc:"\uB2E4\uC591\uD55C \uCE74\uD14C\uACE0\uB9AC\uC5D0 \uAC78\uCCD0 50\uAC00\uC9C0 \uC0C1\uD488 \uAD6C\uBE44"},{date:"2026\uB144 04\uC6D4",title:"\uB9AC\uB274\uC5BC \uC624\uD508",desc:"\uC0C8\uB85C\uC6B4 UI/UX\uB85C \uC804\uBA74 \uB9AC\uB274\uC5BC. \uB354 \uD3B8\uB9AC\uD55C \uC1FC\uD551 \uACBD\uD5D8 \uC81C\uACF5"}],bizInfo:[{label:"\uC0C1\uD638\uBA85",value:"ShopJoy (\uC1FC\uD551\uC870\uC774)"},{label:"\uB300\uD45C\uC790",value:"\uC1A1\uC131\uC77C"},{label:"\uC0AC\uC5C5\uC790\uBC88\uD638",value:"123-45-67890"},{label:"\uD1B5\uC2E0\uD310\uB9E4\uC5C5",value:"\uC81C2024-\uC131\uB0A8\uC911\uC6D0-0001\uD638"},{label:"\uC8FC\uC18C",value:"\uACBD\uAE30\uB3C4 \uC131\uB0A8\uC2DC \uC911\uC6D0\uAD6C \uC131\uB0A8\uB300\uB85C 997\uBC88\uAE38 49-14 201\uD638"},{label:"\uACE0\uAC1D\uC13C\uD130",value:"010-3805-0206"},{label:"\uC774\uBA54\uC77C",value:"illeesam@gmail.com"}]}},template:`
<fo-page title="\uD68C\uC0AC\uC18C\uAC1C" eyebrow="About"
  banner-img="assets/cdn/prod/img/page-title/page-title-2.jpg"
  banner-align="center 40%"
  :crumbs="[{ label:'\uD648', page:'home' }, { label:'\uD68C\uC0AC\uC18C\uAC1C' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== \u25A0. \uBE0C\uB79C\uB4DC \uD788\uC5B4\uB85C ================================================= -->
  <div style="background:linear-gradient(135deg,#bfdbfe,#c7d2fe);border-radius:16px;padding:20px 32px;margin-bottom:32px;color:#1e3a8a;text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-40px;right:-40px;width:180px;height:180px;border-radius:50%;background:rgba(255,255,255,0.3);">
    </div>
    <div style="position:absolute;bottom:-30px;left:-30px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,0.3);">
    </div>
    <div style="display:flex;align-items:center;justify-content:center;gap:24px;flex-wrap:wrap;position:relative;z-index:1;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="font-size:2rem;">
          \u{1F6CD}\uFE0F
        </div>
        <div>
          <div style="font-size:1.3rem;font-weight:900;line-height:1.2;">
            ShopJoy
          </div>
          <div style="font-size:0.8rem;opacity:0.75;">
            \uC1FC\uD551\uC758 \uC990\uAC70\uC6C0
          </div>
        </div>
      </div>
      <div style="width:1px;height:36px;background:rgba(30,58,138,0.2);">
      </div>
      <div style="display:flex;gap:28px;flex-wrap:wrap;">
        <div style="text-align:center;">
          <div style="font-size:1.3rem;font-weight:900;">
            2024
          </div>
          <div style="font-size:0.72rem;opacity:0.7;margin-top:1px;">
            \uC124\uB9BD\uB144\uB3C4
          </div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:1.3rem;font-weight:900;">
            50+
          </div>
          <div style="font-size:0.72rem;opacity:0.7;margin-top:1px;">
            \uC0C1\uD488 \uC885\uB958
          </div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:1.3rem;font-weight:900;">
            5\uAC1C
          </div>
          <div style="font-size:0.72rem;opacity:0.7;margin-top:1px;">
            \uCE74\uD14C\uACE0\uB9AC
          </div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:1.3rem;font-weight:900;">
            100%
          </div>
          <div style="font-size:0.72rem;opacity:0.7;margin-top:1px;">
            \uACE0\uAC1D \uB9CC\uC871 \uBAA9\uD45C
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uBE0C\uB79C\uB4DC \uD788\uC5B4\uB85C ================================================= -->
  <!-- ===== \u25A0. \uBBF8\uC158 & \uBE44\uC804 ================================================= -->
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:clamp(10px,2vw,16px);margin-bottom:clamp(16px,2vw,24px);">
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:24px;">
      <div style="font-size:1.8rem;margin-bottom:12px;">
        \u{1F3AF}
      </div>
      <div style="font-size:1rem;font-weight:800;color:var(--text-primary);margin-bottom:10px;">
        \uBBF8\uC158
      </div>
      <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.8;">
        \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC73C\uB85C \uD2B8\uB80C\uB514\uD55C \uC758\uB958\uB97C \uC81C\uACF5\uD558\uC5EC, \uB204\uAD6C\uB098 \uC790\uC2E0\uB9CC\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC27D\uACE0 \uC990\uAC81\uAC8C \uD45C\uD604\uD560 \uC218 \uC788\uB3C4\uB85D \uB3D5\uC2B5\uB2C8\uB2E4.
      </p>
    </div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:24px;">
      <div style="font-size:1.8rem;margin-bottom:12px;">
        \u2728
      </div>
      <div style="font-size:1rem;font-weight:800;color:var(--text-primary);margin-bottom:10px;">
        \uBE44\uC804
      </div>
      <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.8;">
        \uACE0\uAC1D\uC774 \uC6D0\uD558\uB294 \uC0C1\uD488\uC744 \uAC00\uC7A5 \uBE60\uB974\uACE0 \uD3B8\uB9AC\uD558\uAC8C \uB9CC\uB098\uBCFC \uC218 \uC788\uB294, \uB300\uD55C\uBBFC\uAD6D \uCD5C\uACE0\uC758 \uD328\uC158 \uC1FC\uD551 \uD50C\uB7AB\uD3FC\uC774 \uB418\uACA0\uC2B5\uB2C8\uB2E4.
      </p>
    </div>
  </div>
  <!-- ===== \u25A1. \uBBF8\uC158 & \uBE44\uC804 ================================================= -->
  <!-- ===== \u25A0. \uD575\uC2EC \uAC00\uCE58 =================================================== -->
  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:clamp(14px,2.5vw,24px);margin-bottom:clamp(16px,2vw,24px);">
    <div style="font-size:1rem;font-weight:800;color:var(--text-primary);margin-bottom:20px;">
      \u{1F48E} \uD575\uC2EC \uAC00\uCE58
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;">
      <div v-for="v in values" :key="v.icon" style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0;"
          :style="'background:'+v.bg+';'">
          {{ v.icon }}
        </div>
        <div>
          <div style="font-size:0.9rem;font-weight:700;color:var(--text-primary);margin-bottom:4px;">
            {{ v.title }}
          </div>
          <div style="font-size:0.8rem;color:var(--text-secondary);line-height:1.6;">
            {{ v.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uD575\uC2EC \uAC00\uCE58 =================================================== -->
  <!-- ===== \u25A0. \uC5F0\uD601 ====================================================== -->
  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:24px;margin-bottom:24px;">
    <div style="font-size:1rem;font-weight:800;color:var(--text-primary);margin-bottom:20px;">
      \u{1F4C5} \uC5F0\uD601
    </div>
    <div style="position:relative;padding-left:24px;">
      <div style="position:absolute;left:8px;top:0;bottom:0;width:2px;background:var(--border);">
      </div>
      <div v-for="(h, i) in history" :key="i" style="position:relative;margin-bottom:20px;padding-left:12px;">
        <div style="position:absolute;left:-20px;top:4px;width:10px;height:10px;border-radius:50%;background:var(--blue);">
        </div>
        <div style="font-size:0.78rem;font-weight:700;color:var(--blue);margin-bottom:2px;">
          {{ h.date }}
        </div>
        <div style="font-size:0.88rem;font-weight:600;color:var(--text-primary);margin-bottom:2px;">
          {{ h.title }}
        </div>
        <div style="font-size:0.8rem;color:var(--text-secondary);">
          {{ h.desc }}
        </div>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uC5F0\uD601 ====================================================== -->
  <!-- ===== \u25A0. \uC0AC\uC5C5\uC790 \uC815\uBCF4 ================================================== -->
  <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:24px;">
    <div style="font-size:1rem;font-weight:800;color:var(--text-primary);margin-bottom:16px;">
      \u{1F4CB} \uC0AC\uC5C5\uC790 \uC815\uBCF4
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;">
      <div v-for="info in bizInfo" :key="info.label" style="display:flex;gap:10px;">
        <span style="font-size:0.8rem;color:var(--text-muted);min-width:80px;flex-shrink:0;">
          {{ info.label }}
        </span>
        <span style="font-size:0.85rem;font-weight:600;color:var(--text-primary);">
          {{ info.value }}
        </span>
      </div>
    </div>
    <div style="margin-top:16px;padding:12px 16px;background:var(--bg-base);border-radius:8px;font-size:0.8rem;color:var(--text-muted);line-height:1.7;">
      \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC790\uB294 \uAC70\uB798\uC5D0 \uAD00\uD55C \uC57D\uAD00, \uCCAD\uC57D\uCCA0\uD68C \uAC00\uB2A5\uC5EC\uBD80, \uBC30\uC1A1\uBE44, \uAD50\uD658\xB7\uD658\uBD88\xB7\uBCF4\uC99D \uC870\uAC74 \uBC0F \uD488\uC9C8\uBCF4\uC99D\uAE30\uC900\uC5D0 \uB530\uB77C \uC0C1\uAC70\uB798\uB97C \uC6B4\uC601\uD569\uB2C8\uB2E4.
    </div>
  </div>
</fo-page>
<!-- ===== \u25A1. \uC0AC\uC5C5\uC790 \uC815\uBCF4 ================================================== -->
`};
