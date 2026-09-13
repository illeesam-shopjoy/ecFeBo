window.boError404={name:"BoError404",props:["navigate","pageId"],template:`
<div>
<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 20px;text-align:center;min-height:60vh;">
  <div style="font-size:80px;margin-bottom:16px;">
    \u{1F9ED}
  </div>
  <div style="font-size:48px;font-weight:800;color:#1a1a2e;letter-spacing:-1px;">
    404
  </div>
  <div style="font-size:18px;font-weight:600;color:#555;margin-top:8px;">
    \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4
  </div>
  <div v-if="pageId" style="font-size:13px;color:#999;margin-top:12px;">
    \uC694\uCCAD \uD398\uC774\uC9C0
    <code style="background:#f5f5f5;padding:2px 8px;border-radius:4px;color:#6a1b9a;">{{ pageId }}</code>
      \uB294 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    </div>
    <button @click="navigate('dashboard')"
    style="margin-top:28px;padding:12px 32px;font-size:14px;font-weight:600;background:#6a1b9a;color:#fff;border:none;border-radius:8px;cursor:pointer;">
      \uB300\uC2DC\uBCF4\uB4DC\uB85C
    </button>
  </div>
</div>
`};
