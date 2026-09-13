window.ZdSimulKanbanMng={name:"ZdSimulKanbanMng",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}},showConfirm:{type:Function,default:()=>Promise.resolve(!0)}},setup(n){return{onGoKanban:()=>n.navigate("odOrderKanban")}},template:`
<div>
  <div class="page-title">\u{1F3B2} \uC8FC\uBB38\uCE78\uBC18 \uC2DC\uBBAC\uB808\uC774\uD130</div>
  <div class="card" style="padding:40px;text-align:center;">
    <div style="font-size:48px;margin-bottom:16px;">\u{1F5C2}\uFE0F</div>
    <div style="font-size:18px;font-weight:600;margin-bottom:8px;color:#334155;">\uC8FC\uBB38 \uCE78\uBC18 \uC2DC\uBBAC\uB808\uC774\uC158</div>
    <div style="color:#888;margin-bottom:24px;line-height:1.7;">
      \uC8FC\uBB38 \uCE78\uBC18 \uD654\uBA74\uC5D0\uC11C \uC9C1\uC811 \uB4DC\uB798\uADF8 \uC564 \uB4DC\uB86D\uC73C\uB85C<br>
      \uC8FC\uBB38 \uC0C1\uD0DC \uBCC0\uACBD \uBC0F \uD074\uB808\uC784 \uACC4\uC0B0 \uC2DC\uBBAC\uB808\uC774\uC158\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
    </div>
    <button class="btn btn_preview" @click="onGoKanban">\u{1F4CB} \uC8FC\uBB38\uCE78\uBC18 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9</button>
  </div>
</div>`};
