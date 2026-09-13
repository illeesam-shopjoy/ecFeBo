window.foError500={name:"FoError500",props:["navigate","message"],methods:{onReload(){window.location.reload()}},template:`
<fo-page bare>
<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 20px;text-align:center;min-height:60vh;">
  <div style="font-size:80px;margin-bottom:16px;">
    \u{1F4A5}
  </div>
  <div style="font-size:48px;font-weight:800;color:#222;letter-spacing:-1px;">
    500
  </div>
  <div style="font-size:18px;font-weight:600;color:#666;margin-top:8px;">
    \uC11C\uBC84 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4
  </div>
  <div style="font-size:13px;color:#aaa;margin-top:12px;max-width:520px;">
    \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694. \uBB38\uC81C\uAC00 \uC9C0\uC18D\uB418\uBA74 \uACE0\uAC1D\uC13C\uD130\uB85C \uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4.
  </div>
  <div v-if="message" style="font-size:12px;color:#e53935;margin-top:12px;font-family:monospace;background:#fff5f5;padding:8px 14px;border-radius:6px;max-width:600px;word-break:break-all;">
    {{ message }}
  </div>
  <div style="display:flex;gap:10px;margin-top:28px;">
    <button @click="onReload"
      style="padding:12px 28px;font-size:14px;font-weight:600;background:#e8587a;color:#fff;border:none;border-radius:8px;cursor:pointer;">
      \uC0C8\uB85C\uACE0\uCE68
    </button>
    <button @click="navigate('home')"
      style="padding:12px 28px;font-size:14px;font-weight:600;background:#fff;color:#444;border:1px solid #ddd;border-radius:8px;cursor:pointer;">
      \uD648\uC73C\uB85C
    </button>
  </div>
</div>
</fo-page>
`};
