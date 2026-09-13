window.foError401={name:"FoError401",props:["navigate"],methods:{openLogin(){typeof this.navigate=="function"?this.navigate("login"):location.href=location.pathname+"?page=login"}},template:`
<fo-page bare>
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 20px;text-align:center;min-height:60vh;">
  <div style="font-size:80px;margin-bottom:16px;">
    \u{1F512}
  </div>
  <div style="font-size:48px;font-weight:800;color:#222;letter-spacing:-1px;">
    401
  </div>
  <div style="font-size:18px;font-weight:600;color:#666;margin-top:8px;">
    \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4
  </div>
  <div style="font-size:13px;color:#aaa;margin-top:12px;">
    \uC138\uC158\uC774 \uB9CC\uB8CC\uB418\uC5C8\uAC70\uB098 \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.
  </div>
  <div style="display:flex;gap:10px;margin-top:28px;">
    <button @click="openLogin"
      style="padding:12px 28px;font-size:14px;font-weight:600;background:#e8587a;color:#fff;border:none;border-radius:8px;cursor:pointer;">
      \uB85C\uADF8\uC778
    </button>
    <button @click="navigate('home')"
      style="padding:12px 28px;font-size:14px;font-weight:600;background:#fff;color:#444;border:1px solid #ddd;border-radius:8px;cursor:pointer;">
      \uD648\uC73C\uB85C
    </button>
  </div>
  </div>
</fo-page>
`};
