window.foError404={name:"FoError404",props:["navigate","pageId"],template:`
<fo-page bare>
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 20px;text-align:center;min-height:60vh;">
    <div style="font-size:80px;margin-bottom:16px;">
      \u{1F6AB}
    </div>
    <div style="font-size:48px;font-weight:800;color:#222;letter-spacing:-1px;">
      404
    </div>
    <div style="font-size:18px;font-weight:600;color:#666;margin-top:8px;">
      \uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4
    </div>
    <div v-if="pageId" style="font-size:13px;color:#aaa;margin-top:12px;">
      \uC694\uCCAD\uD558\uC2E0 \uD398\uC774\uC9C0
      <code style="background:#f5f5f5;padding:2px 8px;border-radius:4px;color:#e53935;">{{ pageId }}</code>
      \uB294 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    </div>
    <button @click="navigate('home')"
      style="margin-top:28px;padding:12px 32px;font-size:14px;font-weight:600;background:#e8587a;color:#fff;border:none;border-radius:8px;cursor:pointer;">
      \uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30
    </button>
  </div>
</fo-page>
`};
