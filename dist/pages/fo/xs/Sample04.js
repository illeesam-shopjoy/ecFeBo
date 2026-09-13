window.XsSample04={name:"XsSample04",setup(){const{reactive:d,onMounted:u,onBeforeUnmount:v,watch:$}=Vue;let a=null;const y=`
    @keyframes s04_slideRight  { from { transform:translateX(100%); } to { transform:translateX(0); } }
    @keyframes s04_slideBottom { from { transform:translateY(100%); } to { transform:translateY(0); } }
    @keyframes s04_spin        { to   { transform:rotate(360deg); } }
    @keyframes s04_fadeIn      { from { opacity:0; } to { opacity:1; } }

    /* -- \uAD00\uB9AC\uC790 \uACF5\uD1B5 \uBAA8\uB2EC CSS (bo-global-style.css \uBBF8\uD3EC\uD568 \uD658\uACBD\uC6A9) -- */
    .modal-overlay { position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9100;display:flex;align-items:center;justify-content:center;padding:20px; }
    .modal-box     { background:#fff;border-radius:12px;padding:24px;width:100%;max-width:580px;max-height:85vh;overflow-y:auto; }
    .modal-box.wide { max-width:820px; }
    .modal-header  { display:flex;justify-content:space-between;align-items:center;margin-bottom:16px; }
    .modal-title   { font-size:16px;font-weight:700; }
    .modal-close   { cursor:pointer;font-size:22px;color:#aaa;line-height:1; }
    .modal-close:hover { color:#555; }
    .form-control  { width:100%;padding:8px 11px;border:1px solid #d9d9d9;border-radius:6px;font-size:13px;background:#fff;box-sizing:border-box; }
    .form-control:focus { outline:none;border-color:#e8587a;box-shadow:0 0 0 2px rgba(232,88,122,.1); }
    .sel-modal-list      { max-height:360px;overflow-y:auto;border:1px solid #f0f0f0;border-radius:6px; }
    .sel-modal-item      { display:flex;align-items:center;gap:8px;padding:8px 12px;border-bottom:1px solid #f5f5f5; }
    .sel-modal-item:last-child { border-bottom:none; }
    .sel-modal-item:hover      { background:#fff8f9; }
    .sel-modal-item-name { flex:1;font-size:13px;color:#222;overflow:hidden;text-overflow:ellipsis;white-space:nowrap; }
    .sel-modal-item-id   { font-size:11px;color:#888;background:#f0f4ff;padding:1px 6px;border-radius:3px;flex-shrink:0; }
    .sel-modal-item-btn  { font-size:12px;background:#e8587a;color:#fff;border:none;padding:3px 8px;border-radius:4px;cursor:pointer;flex-shrink:0; }
    .sel-modal-item-btn:hover { opacity:.85; }
    .pager-btn { min-width:28px;height:28px;padding:0 6px;border:1px solid #e0e0e0;border-radius:4px;background:#fff;font-size:12px;cursor:pointer;color:#555;transition:all .12s; }
    .pager-btn:hover:not(:disabled) { border-color:#e8587a;color:#e8587a; }
    .pager-btn.active  { background:#e8587a;color:#fff;border-color:#e8587a;font-weight:700; }
    .pager-btn:disabled { opacity:.35;cursor:default; }
    .btn           { display:inline-flex;align-items:center;gap:4px;padding:7px 14px;border-radius:6px;border:none;cursor:pointer;font-size:13px;font-weight:500;transition:opacity .15s; }
    .btn:hover     { opacity:.85; }
    .btn-primary   { background:#e8587a;color:#fff; }
    .btn-secondary { background:#fff;color:#444;border:1px solid #d9d9d9 !important; }
    .btn-blue      { background:#1677ff;color:#fff; }
    .btn-green     { background:#52c41a;color:#fff; }
    .btn-danger    { background:#ff4d4f;color:#fff; }
    .btn-sm        { padding:4px 10px;font-size:12px; }
    .btn-xs        { padding:2px 7px !important;font-size:11px !important; }
    .badge         { display:inline-block;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;white-space:nowrap; }
    .badge-blue    { background:#e6f4ff;color:#1677ff; }
    .badge-green   { background:#f6ffed;color:#389e0d; }
    .badge-red     { background:#fff1f0;color:#cf1322; }
    .badge-gray    { background:#f5f5f5;color:#8c8c8c; }
    .badge-orange  { background:#fff7e6;color:#d46b08; }
    .badge-purple  { background:#f9f0ff;color:#722ed1; }
    .badge-pink    { background:#fff0f6;color:#c41d7f; }
    .badge-teal    { background:#e6fffb;color:#08979c; }
    .badge-xs      { padding:1px 5px !important;font-size:10px !important;border-radius:4px !important;font-weight:700 !important; }
    `;u(()=>{a=document.createElement("style"),a.textContent=y,document.head.appendChild(a)}),v(()=>{a==null||a.remove(),a=null});const t=d({loading:!1,error:null,modalType:null,modalVariant:"info",modalData:null,nested2:!1}),h=d({grade_opts:[{value:"\uC77C\uBC18",label:"\uC77C\uBC18"},{value:"\uC6B0\uC218",label:"\uC6B0\uC218"},{value:"VIP",label:"VIP"},{value:"VVIP",label:"VVIP"}]}),c=d([]),n=d({name:"",email:"",phone:"",grade:"\uC77C\uBC18"}),l=d({});let s=null;globalThis.boUtil||(globalThis.boUtil={getSiteNm:()=>"ShopJoy",DATE_RANGE_OPTIONS:[],getDateRange:()=>({from:"",to:""}),isInRange:()=>!0,exportCsv:()=>{}});const w={sites:[],vendors:[],members:[],orders:[],bbms:[],boUsers:[],depts:[],roles:[],menus:[],categories:[]},p=d({type:null}),k={orderId:"ORD-2026-00123",orderDate:"2026-04-10",status:"\uBC30\uC1A1\uC911",orderItems:[{emoji:"\u{1F455}",prodNm:"\uD504\uB9AC\uBBF8\uC5C4 \uCF54\uD2BC \uD2F0\uC154\uCE20",color:"\uD654\uC774\uD2B8",size:"M",qty:2,price:58e3,productCoupon:{name:"\uC0C1\uD48810%\uD560\uC778",discount:5800}},{emoji:"\u{1F45F}",prodNm:"\uC5D0\uC5B4\uB9E5\uC2A4 \uC2A4\uB2C8\uCEE4\uC988",color:"\uBE14\uB799",size:"270",qty:1,price:129e3}],shippingFee:3e3,shippingCoupon:{discount:3e3},cashPaid:0,transferPaid:0,totalPrice:184200,courier:"CJ\uB300\uD55C\uD1B5\uC6B4",trackingNo:"1234567890",paymentDetails:[{type:"\uCE74\uB4DC",amount:184200,account:""}]},z={productId:"PRD-1001",prodNm:"\uD504\uB9AC\uBBF8\uC5C4 \uCF54\uD2BC \uD2F0\uC154\uCE20",emoji:"\u{1F455}",price:"58,000\uC6D0",badge:"\uBCA0\uC2A4\uD2B8\uC140\uB7EC",desc:"\uACE0\uAE09 \uCF54\uD2BC \uC18C\uC7AC\uB85C \uC81C\uC791\uB41C \uD504\uB9AC\uBBF8\uC5C4 \uD2F0\uC154\uCE20. \uD1B5\uAE30\uC131\uC774 \uC6B0\uC218\uD558\uACE0 \uC138\uD0C1 \uD6C4\uC5D0\uB3C4 \uD615\uD0DC\uAC00 \uC720\uC9C0\uB429\uB2C8\uB2E4.",opt1s:[{name:"\uD654\uC774\uD2B8",hex:"#f8f9fa"},{name:"\uBE14\uB799",hex:"#212529"},{name:"\uB124\uC774\uBE44",hex:"#1e3a5f"}],opt2s:["S","M","L","XL","XXL"],tags:["\uBCA0\uC2A4\uD2B8\uC140\uB7EC","\uC2E0\uC0C1\uD488","\uCF54\uD2BC100%"]},M={name:"\uD64D\uAE38\uB3D9",phone:"010-1234-5678",email:"hong@shopjoy.kr"},S={templateId:1,templateType:"\uBA54\uC77C\uD15C\uD50C\uB9BF",templateNm:"\uD68C\uC6D0\uAC00\uC785 \uD658\uC601 \uBA54\uC77C",subject:"[ShopJoy] {{name}}\uB2D8, \uD68C\uC6D0\uAC00\uC785\uC744 \uCD95\uD558\uD569\uB2C8\uB2E4!",content:'<p>\uC548\uB155\uD558\uC138\uC694, <b>{{name}}</b>\uB2D8!</p><p>ShopJoy \uD68C\uC6D0\uC774 \uB418\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4. \uC9C0\uAE08 \uBC14\uB85C \uC1FC\uD551\uC744 \uC2DC\uC791\uD574\uBCF4\uC138\uC694.</p><p>\u{1F381} \uC2E0\uADDC \uD68C\uC6D0 \uD61C\uD0DD: <span style="color:#e8587a;font-weight:700;">5,000\uC6D0 \uCFE0\uD3F0</span>\uC774 \uBC1C\uAE09\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</p>'},T=JSON.stringify({name:"\uD64D\uAE38\uB3D9",coupon:"5000"}),B=d([]),D=[{id:"alert",icon:"\u{1F514}",name:"\uC54C\uB9BC \uBAA8\uB2EC",desc:"\uC815\uBCF4 \xB7 \uC131\uACF5 \xB7 \uACBD\uACE0 \xB7 \uC624\uB958 4\uAC00\uC9C0 \uD0C0\uC785",color:"#1a73e8"},{id:"confirm",icon:"\u2753",name:"Confirm \uB2E4\uC774\uC5BC\uB85C\uADF8",desc:"\uD655\uC778/\uCDE8\uC18C \uC120\uD0DD, \uCF5C\uBC31 \uC5F0\uACB0",color:"#e8587a"},{id:"form",icon:"\u{1F4DD}",name:"\uD3FC \uC785\uB825 \uBAA8\uB2EC",desc:"\uC720\uD6A8\uC131 \uAC80\uC0AC \uD3EC\uD568 \uC785\uB825 \uD3FC",color:"#34a853"},{id:"detail",icon:"\u{1F50D}",name:"\uC0C1\uC138\uBCF4\uAE30 \uBAA8\uB2EC",desc:"\uD68C\uC6D0 \uC815\uBCF4 \uC0C1\uC138 \u2014 \uADF8\uB9AC\uB4DC \uD589 \uD074\uB9AD",color:"#7c3aed"},{id:"image",icon:"\u{1F5BC}",name:"\uC774\uBBF8\uC9C0 \uD31D\uC5C5",desc:"\uC774\uBBF8\uC9C0 \uD655\uB300 \uBDF0\uC5B4 (\uC5B4\uB450\uC6B4 \uBC30\uACBD)",color:"#b45309"},{id:"drawer",icon:"\u25E7",name:"\uC6B0\uCE21 Drawer",desc:"\uD654\uBA74 \uC624\uB978\uCABD\uC5D0\uC11C \uC2AC\uB77C\uC774\uB4DC\uC778",color:"#0f766e"},{id:"bottom",icon:"\u2B06",name:"\uBC14\uD140\uC2DC\uD2B8",desc:"\uD654\uBA74 \uD558\uB2E8\uC5D0\uC11C \uC2AC\uB77C\uC774\uB4DC\uC5C5",color:"#9333ea"},{id:"fullscreen",icon:"\u26F6",name:"\uC804\uCCB4\uD654\uBA74 \uBAA8\uB2EC",desc:"\uD654\uBA74 \uC804\uCCB4\uB97C \uB36E\uB294 \uBAA8\uB2EC",color:"#9f1239"},{id:"nested",icon:"\u29C9",name:"\uC911\uCCA9 \uBAA8\uB2EC",desc:"\uBAA8\uB2EC \uC704\uC5D0 \uB610 \uB2E4\uB978 \uBAA8\uB2EC \uC624\uD508",color:"#1e40af"},{id:"loading",icon:"\u23F3",name:"\uB85C\uB529 \uBAA8\uB2EC",desc:"2.5\uCD08 \uD6C4 \uC790\uB3D9\uC73C\uB85C \uB2EB\uD798",color:"#374151"}],O=[{id:"orderDetail",icon:"\u{1F4E6}",name:"\uC8FC\uBB38\uC0C1\uC138 \uBAA8\uB2EC",desc:"OrderDetailModal \u2014 \uC0C1\uD488/\uACB0\uC81C/\uBC30\uC1A1",color:"#2563eb"},{id:"productModal",icon:"\u{1F6CD}",name:"\uC0C1\uD488\uC0C1\uC138 \uBAA8\uB2EC",desc:"ProductModal \u2014 \uC0C9\uC0C1/\uC0AC\uC774\uC988/\uD0DC\uADF8",color:"#7c3aed"},{id:"customerModal",icon:"\u{1F464}",name:"\uC8FC\uBB38\uC790 \uC815\uBCF4 \uBAA8\uB2EC",desc:"CustomerModal \u2014 \uC8FC\uBB38\uC790/\uACB0\uC81C \uC815\uBCF4",color:"#0891b2"}],C=[{id:"catSelect",icon:"\u{1F3F7}",name:"\uCE74\uD14C\uACE0\uB9AC \uBA40\uD2F0\uC120\uD0DD",desc:"\uACF5\uD1B5\uD31D\uC5C5 category \u2014 \uD2B8\uB9AC+\uBA40\uD2F0\uCCB4\uD06C",color:"#7e22ce"}],A=[{id:"siteSelect",icon:"\u{1F310}",name:"\uC0AC\uC774\uD2B8 \uC120\uD0DD",desc:"SiteSelectModal \u2014 \uAC80\uC0C9+\uC120\uD0DD",color:"#0f766e"},{id:"vendorSelect",icon:"\u{1F3E2}",name:"\uD310\uB9E4\uC5C5\uCCB4 \uC120\uD0DD",desc:"VendorSelectModal \u2014 \uAC80\uC0C9+\uC120\uD0DD",color:"#b45309"},{id:"boUserSelect",icon:"\u{1F465}",name:"\uC0AC\uC6A9\uC790 \uC120\uD0DD",desc:"BoUserSelectModal \u2014 \uBD80\uC11C\uD2B8\uB9AC+\uBA40\uD2F0",color:"#1e40af"},{id:"memberSelect",icon:"\u{1F64B}",name:"\uD68C\uC6D0 \uC120\uD0DD",desc:"MemberSelectModal \u2014 \uD68C\uC6D0 \uAC80\uC0C9\uC120\uD0DD",color:"#9333ea"},{id:"orderSelect",icon:"\u{1F9FE}",name:"\uC8FC\uBB38 \uC120\uD0DD",desc:"OrderSelectModal \u2014 \uC8FC\uBB38 \uAC80\uC0C9\uC120\uD0DD",color:"#be185d"},{id:"bbmSelect",icon:"\u{1F4EC}",name:"\uAC8C\uC2DC\uD310 \uC120\uD0DD",desc:"BbmSelectModal \u2014 \uD398\uC774\uC9C0\uB124\uC774\uC158",color:"#065f46"},{id:"tmplPreview",icon:"\u{1F4C4}",name:"\uD15C\uD50C\uB9BF \uBBF8\uB9AC\uBCF4\uAE30",desc:"TemplatePreviewModal \u2014 {{\uD30C\uB77C\uBBF8\uD130}} \uCE58\uD658",color:"#374151"},{id:"tmplSend",icon:"\u{1F4E8}",name:"\uD15C\uD50C\uB9BF \uBC1C\uC1A1",desc:"TemplateSendModal \u2014 \uD68C\uC6D0/\uAD00\uB9AC\uC790 \uD0ED",color:"#92400e"},{id:"roleTree",icon:"\u{1F510}",name:"\uAD8C\uD55C \uD2B8\uB9AC",desc:"RoleTreeModal \u2014 \uAD8C\uD55C \uACC4\uCE35 \uC120\uD0DD",color:"#dc2626"},{id:"menuTree",icon:"\u{1F5C2}",name:"\uBA54\uB274 \uD2B8\uB9AC",desc:"MenuTreeModal \u2014 \uC0C1\uC704\uBA54\uB274 \uC120\uD0DD",color:"#0369a1"},{id:"deptTree",icon:"\u{1F3D7}",name:"\uBD80\uC11C \uD2B8\uB9AC",desc:"DeptTreeModal \u2014 \uBD80\uC11C \uACC4\uCE35 \uC120\uD0DD",color:"#4338ca"},{id:"categoryTree",icon:"\u{1F4C1}",name:"\uCE74\uD14C\uACE0\uB9AC \uD2B8\uB9AC",desc:"CategoryTreeModal \u2014 \uACC4\uCE35 \uC120\uD0DD",color:"#15803d"},{id:"dispPreview",icon:"\u{1F441}",name:"\uC804\uC2DC \uBBF8\uB9AC\uBCF4\uAE30",desc:"DispPreviewModal \u2014 \uC704\uC82F \uBBF8\uB9AC\uBCF4\uAE30",color:"#b91c1c"}],L=(e,o={})=>{if(e==="modal-close")return r();if(e==="modal-confirm")return j();if(e==="modal-loadingDemo")return P();if(e==="modal-formSubmit")return I();if(e==="modal-nested2Open")t.nested2=!0;else if(e==="modal-nested2Close")t.nested2=!1;else if(e==="modal-nestedBackdrop")t.nested2?t.nested2=!1:r();else{if(e==="bmodal-close")return g();console.warn("[handleBtnAction] unknown cmd:",e)}},E=(e,o={})=>{if(e==="member-detailOpen")return i("detail",{data:o});if(e==="member-editConfirm")return f(o);console.warn("[handleSelectAction] unknown cmd:",e)},i=(e,o={})=>{t.modalType=e,t.modalVariant=o.variant||"info",t.modalData=o.data||null,t.nested2=!1,s=o.onConfirm||null},r=()=>{t.modalType=null,t.nested2=!1,s=null},j=()=>{const e=s;r(),e&&setTimeout(e,80)},P=async()=>{i("loading"),await new Promise(e=>setTimeout(e,2500)),t.modalType==="loading"&&r()},I=()=>{if(Object.keys(l).forEach(o=>delete l[o]),n.name.trim()||(l.name="\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),n.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(l.email="\uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."):l.email="\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",Object.keys(l).length)return;const e=n.name;Object.assign(n,{name:"",email:"",phone:"",grade:"\uC77C\uBC18"}),r(),setTimeout(()=>i("alert",{variant:"success",data:{msg:`${e}\uB2D8\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`}}),80)},f=e=>{const o=e.name;i("confirm",{onConfirm:()=>i("alert",{variant:"success",data:{msg:`${o}\uB2D8 \uC815\uBCF4\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`}})})},x=e=>({VVIP:"background:#fce7f3;color:#9d174d;border:1px solid #fbcfe8;",VIP:"background:#fef9c3;color:#854d0e;border:1px solid #fde68a;",\uC6B0\uC218:"background:#d1fae5;color:#065f46;border:1px solid #a7f3d0;",\uC77C\uBC18:"background:#f0f0f0;color:#666;border:1px solid #e0e0e0;"})[e]||"background:#f0f0f0;color:#666;",m=e=>({\uD65C\uC131:"background:#d1fae5;color:#065f46;",\uD734\uBA74:"background:#fef3c7;color:#92400e;",\uD0C8\uD1F4:"background:#fee2e2;color:#991b1b;"})[e]||"",b={};b.sample04Grid=[{key:"memberId",label:"ID",width:"42px",align:"center"},{key:"name",label:"\uC774\uB984",width:"76px"},{key:"email",label:"\uC774\uBA54\uC77C",mono:!0},{key:"phone",label:"\uC5F0\uB77D\uCC98",width:"110px",align:"center"},{key:"grade",label:"\uB4F1\uAE09",width:"56px",align:"center",cellInnerStyle:e=>"font-size:10px;padding:2px 7px;border-radius:10px;font-weight:700;"+x(e)},{key:"status",label:"\uC0C1\uD0DC",width:"50px",align:"center",cellInnerStyle:e=>"font-size:10px;padding:2px 7px;border-radius:10px;font-weight:700;"+m(e)},{key:"orders",label:"\uC8FC\uBB38",width:"56px",align:"right"},{key:"totalAmt",label:"\uCD1D\uAD6C\uB9E4\uC561",width:"110px",align:"right",cellStyle:"color:var(--text-primary);font-weight:700",fmt:e=>coUtil.cofWon(e)},{key:"joinDate",label:"\uAC00\uC785\uC77C",width:"86px",align:"center"},{type:"actions",actions:[{label:"\uC0C1\uC138",style:"font-size:10px;padding:2px 8px;border:1px solid #ddd;border-radius:4px;background:#f8f9fa;cursor:pointer;color:#555;",onClick:e=>i("detail",{data:e})}]}];const _=Vue.computed(()=>c.slice(0,3)),N=e=>({info:{icon:"\u2139\uFE0F",label:"\uC548\uB0B4",bg:"#3b82f6",bar:"#3b82f6"},success:{icon:"\u2705",label:"\uC131\uACF5",bg:"#22c55e",bar:"#22c55e"},warning:{icon:"\u26A0\uFE0F",label:"\uACBD\uACE0",bg:"#f59e0b",bar:"#f59e0b"},error:{icon:"\u274C",label:"\uC624\uB958",bg:"#ef4444",bar:"#ef4444"}})[e]||{icon:"\u2139\uFE0F",label:"\uC548\uB0B4",bg:"#3b82f6",bar:"#3b82f6"},V=e=>{p.type=e},g=()=>{p.type=null};return{columns:b,uiState:t,codes:h,members:c,form:n,formErrors:l,CATALOG:D,sample04Top3:_,openModal:i,openEditConfirm:f,fnGradeBadge:x,fnStatusBadge:m,fnAlertMeta:N,boData:w,bModal:p,openBModal:V,closeBModal:g,bShowToast:(e,o="info")=>i("alert",{variant:o,data:{msg:e}}),bShowConfirm:(e,o)=>Promise.resolve(window.confirm(`${e}

${o}`)),demoOrder:k,demoProduct:z,demoUser:M,demoTmpl:S,demoSampleParams:T,catSelIds:B,CATALOG2_COMMON:O,CATALOG2_FO:C,CATALOG2_BO:A}},template:`
<fo-page bare>
<div style="padding:16px;">
  <!-- ===== \u25A0. \uC81C\uBAA9 ====================================================== -->
  <div style="font-size:16px;font-weight:700;margin-bottom:16px;">
    04. \uBAA8\uB2EC / \uD31D\uC5C5
    <span style="font-size:12px;font-weight:400;color:#888;margin-left:8px;">
      Modal &amp; Popup \uC804\uC2DC\uAD00 \u2014 \uCEE4\uC2A4\uD140 10\uC885 + BaseModal 17\uC885
    </span>
  </div>
  <!-- ===== \u25A1. \uC81C\uBAA9 ====================================================== -->
  <!-- ===== \u25A0. \u2501\u2501\u2501 \uCE74\uD0C8\uB85C\uADF8 \uCE74\uB4DC \uADF8\uB9AC\uB4DC \u2501\u2501\u2501 ===================================== -->
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin-bottom:22px;">
    <div v-for="item in CATALOG" :key="item.id"
      style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:14px 16px;display:flex;flex-direction:column;gap:10px;box-shadow:0 1px 3px rgba(0,0,0,.05);">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:24px;width:30px;text-align:center;flex-shrink:0;line-height:1;">
          {{ item.icon }}
        </span>
        <div>
          <div style="font-size:12px;font-weight:800;color:#222;">
            {{ item.name }}
          </div>
          <div style="font-size:11px;color:#9ca3af;margin-top:2px;line-height:1.4;">
            {{ item.desc }}
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. Alert: 4 variant \uBC84\uD2BC ================================= -->
      <div v-if="item.id==='alert'" style="display:flex;gap:4px;flex-wrap:wrap;">
        <button @click="openModal('alert',{variant:'info',    data:{msg:'\uC2DC\uC2A4\uD15C \uC810\uAC80\uC774 2026-04-15 02:00 \uC608\uC815\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.'}})"
          style="font-size:10px;padding:3px 8px;border:none;border-radius:4px;background:#dbeafe;color:#1e40af;cursor:pointer;font-weight:700;">
          \u2139 info
        </button>
        <button @click="openModal('alert',{variant:'success', data:{msg:'\uC800\uC7A5\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.'}})"
          style="font-size:10px;padding:3px 8px;border:none;border-radius:4px;background:#d1fae5;color:#065f46;cursor:pointer;font-weight:700;">
          \u2714 success
        </button>
        <button @click="openModal('alert',{variant:'warning', data:{msg:'\uC7AC\uACE0\uAC00 5\uAC1C \uBBF8\uB9CC\uC785\uB2C8\uB2E4. \uD655\uC778\uD574\uC8FC\uC138\uC694.'}})"
          style="font-size:10px;padding:3px 8px;border:none;border-radius:4px;background:#fef3c7;color:#92400e;cursor:pointer;font-weight:700;">
          \u26A0 warning
        </button>
        <button @click="openModal('alert',{variant:'error',   data:{msg:'\uC11C\uBC84 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.'}})"
          style="font-size:10px;padding:3px 8px;border:none;border-radius:4px;background:#fee2e2;color:#991b1b;cursor:pointer;font-weight:700;">
          \u2715 error
        </button>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. Loading: async ====================================== -->
      <button v-else-if="item.id==='loading'" @click="loadingDemo()"
        style="align-self:flex-start;font-size:11px;padding:5px 14px;border:none;border-radius:5px;cursor:pointer;font-weight:600;color:#fff;"
        :style="'background:'+item.color">
        \uC5F4\uAE30 \u2192
      </button>
      <!-- ===== \u25A0.\u25A0.\u25A0. Confirm: \uD655\uC778 \uC2DC success alert \uD45C\uC2DC ====================== -->
      <button v-else-if="item.id==='confirm'"
        @click="openModal('confirm',{onConfirm:()=>openModal('alert',{variant:'success',data:{msg:'\uD655\uC778 \uCC98\uB9AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.'}})})"
        style="align-self:flex-start;font-size:11px;padding:5px 14px;border:none;border-radius:5px;cursor:pointer;font-weight:600;color:#fff;"
        :style="'background:'+item.color">
        \uC5F4\uAE30 \u2192
      </button>
      <!-- ===== \u25A0.\u25A0.\u25A0. Detail: \uCCAB \uBC88\uC9F8 \uD68C\uC6D0 \uB370\uC774\uD130\uB85C \uC624\uD508 ============================= -->
      <button v-else-if="item.id==='detail' ? members.length : false" @click="openModal('detail',{data:members[0]})" style="align-self:flex-start;font-size:11px;padding:5px 14px;border:none;border-radius:5px;cursor:pointer;font-weight:600;color:#fff;" :style="'background:'+item.color">
      \uC5F4\uAE30 \u2192
    </button>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uADF8 \uC678 ================================================= -->
    <button v-else-if="item.id!=='detail'" @click="openModal(item.id)"
        style="align-self:flex-start;font-size:11px;padding:5px 14px;border:none;border-radius:5px;cursor:pointer;font-weight:600;color:#fff;"
        :style="'background:'+item.color">
      \uC5F4\uAE30 \u2192
    </button>
  </div>
</div>
<!-- ===== \u25A1. \u2501\u2501\u2501 \uCE74\uD0C8\uB85C\uADF8 \uCE74\uB4DC \uADF8\uB9AC\uB4DC \u2501\u2501\u2501 ===================================== -->
<!-- ===== \u25A0. \u2501\u2501\u2501 BaseModals.js \uACF5\uD1B5 \uBAA8\uB2EC (17\uC885) \u2501\u2501\u2501 ======================= -->
<div style="margin-top:22px;display:flex;flex-direction:column;gap:14px;">
  <!-- ===== \u25A0.\u25A0. \uC139\uC158 \uD5E4\uB354 ================================================= -->
  <div>
    <div style="font-size:13px;font-weight:700;color:#333;">
      BaseModals.js \uACF5\uD1B5 \uBAA8\uB2EC
      <span style="font-size:11px;font-weight:400;color:#888;margin-left:6px;">
        components/modals/BaseModals.js \u2014 17\uAC00\uC9C0 \uD328\uD134
      </span>
    </div>
  </div>
  <!-- ===== /* \u2460 FO + BO \uACF5\uD1B5 (3\uC885) ======================================= -->
  <div style="border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;background:#f0f7ff;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <span style="font-size:11px;font-weight:800;background:#2563eb;color:#fff;padding:2px 10px;border-radius:20px;">
        FO + BO \uACF5\uD1B5
      </span>
      <span style="font-size:11px;color:#2563eb;font-weight:600;">
        3\uC885
      </span>
      <span style="font-size:11px;color:#93c5fd;">
        \u2014 show prop \uBC29\uC2DD, boData \uC758\uC874\uC131 \uC5C6\uC74C
      </span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;">
      <div v-for="item in CATALOG2_COMMON" :key="item.id"
          style="background:#fff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 14px;display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:20px;flex-shrink:0;line-height:1;">
            {{ item.icon }}
          </span>
          <div>
            <div style="font-size:12px;font-weight:800;color:#1e3a8a;">
              {{ item.name }}
            </div>
            <div style="font-size:10px;color:#93c5fd;margin-top:1px;line-height:1.4;">
              {{ item.desc }}
            </div>
          </div>
        </div>
        <button @click="openBModal(item.id)"
            style="align-self:flex-start;font-size:11px;padding:4px 12px;border:none;border-radius:4px;cursor:pointer;font-weight:600;color:#fff;"
            :style="'background:'+item.color">
          \uC5F4\uAE30 \u2192
        </button>
      </div>
    </div>
  </div>
  <!-- ===== /* \u2461 FO \uC804\uC6A9 (1\uC885) ============================================ -->
  <div style="border:1px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <span style="font-size:11px;font-weight:800;background:#16a34a;color:#fff;padding:2px 10px;border-radius:20px;">
        FO \uC804\uC6A9
      </span>
      <span style="font-size:11px;color:#16a34a;font-weight:600;">
        1\uC885
      </span>
      <span style="font-size:11px;color:#86efac;">
        \u2014 \uACF5\uD1B5\uD31D\uC5C5 fo-cm-popup-modal (FO \uD5C8\uC6A9 \uD31D\uC5C5)
      </span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;">
      <div v-for="item in CATALOG2_FO" :key="item.id"
          style="background:#fff;border:1px solid #bbf7d0;border-radius:8px;padding:12px 14px;display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:20px;flex-shrink:0;line-height:1;">
            {{ item.icon }}
          </span>
          <div>
            <div style="font-size:12px;font-weight:800;color:#14532d;">
              {{ item.name }}
            </div>
            <div style="font-size:10px;color:#86efac;margin-top:1px;line-height:1.4;">
              {{ item.desc }}
            </div>
          </div>
        </div>
        <button @click="openBModal(item.id)"
            style="align-self:flex-start;font-size:11px;padding:4px 12px;border:none;border-radius:4px;cursor:pointer;font-weight:600;color:#fff;"
            :style="'background:'+item.color">
          \uC5F4\uAE30 \u2192
        </button>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uC139\uC158 \uD5E4\uB354 ================================================= -->
  <!-- ===== \u25A0.\u25A0. \u2462 BO \uC804\uC6A9 (13\uC885) ========================================= -->
  <div style="border:1px solid #fecaca;border-radius:10px;padding:14px 16px;background:#fff7f7;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <span style="font-size:11px;font-weight:800;background:#dc2626;color:#fff;padding:2px 10px;border-radius:20px;">
        BO \uC804\uC6A9
      </span>
      <span style="font-size:11px;color:#dc2626;font-weight:600;">
        13\uC885
      </span>
      <span style="font-size:11px;color:#fca5a5;">
        \u2014 boData prop \uD544\uC218, \uAD00\uB9AC \uAE30\uB2A5 \uC804\uC6A9
      </span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;">
      <div v-for="item in CATALOG2_BO" :key="item.id"
          style="background:#fff;border:1px solid #fecaca;border-radius:8px;padding:12px 14px;display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:20px;flex-shrink:0;line-height:1;">
            {{ item.icon }}
          </span>
          <div>
            <div style="font-size:12px;font-weight:800;color:#7f1d1d;">
              {{ item.name }}
            </div>
            <div style="font-size:10px;color:#fca5a5;margin-top:1px;line-height:1.4;">
              {{ item.desc }}
            </div>
          </div>
        </div>
        <button @click="openBModal(item.id)"
            style="align-self:flex-start;font-size:11px;padding:4px 12px;border:none;border-radius:4px;cursor:pointer;font-weight:600;color:#fff;"
            :style="'background:'+item.color">
          \uC5F4\uAE30 \u2192
        </button>
      </div>
    </div>
  </div>
</div>
<!-- ===== \u25A1.\u25A1. \u2462 BO \uC804\uC6A9 (13\uC885) ========================================= -->
<!-- ===== \u25A1. \u2501\u2501\u2501 BaseModals.js \uACF5\uD1B5 \uBAA8\uB2EC (17\uC885) \u2501\u2501\u2501 ======================= -->
<!-- ===== \u25A0. \u2501\u2501\u2501 \uD68C\uC6D0 \uADF8\uB9AC\uB4DC (\uC0C1\uC138\uBCF4\uAE30 \uD074\uB9AD) \u2501\u2501\u2501 ================================ -->
<div style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-top:22px;">
  <div style="padding:8px 14px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:6px;">
    <span style="font-size:12px;font-weight:800;color:#333;">
      \uD68C\uC6D0 \uBAA9\uB85D
    </span>
    <span style="font-size:12px;font-weight:700;color:#e8587a;">
      {{ members.length }}\uBA85 \uC911 3\uD589
    </span>
    <span style="font-size:11px;color:#aaa;margin-left:4px;">
      \u2014 \uD589 \uD074\uB9AD \u2192 \uC0C1\uC138\uBCF4\uAE30 \uBAA8\uB2EC
    </span>
  </div>
  <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
  <fo-grid bare :columns="columns.sample04Grid" :rows="sample04Top3"
      row-key="memberId" :show-row-no="false" min-width="680px"
      empty-text="\uB370\uC774\uD130 \uB85C\uB529 \uC911\u2026"
      :row-click="m => openModal('detail',{data:m})" />
</div>
<!-- ===== \u25A1.\u25A1. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
<!-- ===== \u25A1. \u2501\u2501\u2501 \uD68C\uC6D0 \uADF8\uB9AC\uB4DC (\uC0C1\uC138\uBCF4\uAE30 \uD074\uB9AD) \u2501\u2501\u2501 ================================ -->
<!-- ===== \u25A0. \u2501\u2501\u2501\u2501\u2501\u2501 MODALS \u2501\u2501\u2501\u2501\u2501\u2501 ==================================== -->
<!-- ===== \u25A0. \u2460 Alert \uBAA8\uB2EC ============================================== -->
<template v-if="uiState.modalType==='alert'">
  <div @click="closeModal"
      style="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.48);display:flex;align-items:center;justify-content:center;">
    <div @click.stop
        style="background:#fff;border-radius:12px;box-shadow:0 12px 48px rgba(0,0,0,.22);width:340px;max-width:90vw;overflow:hidden;">
      <div style="height:4px;" :style="'background:'+fnAlertMeta(uiState.modalVariant).bar">
      </div>
      <div style="padding:22px 20px 18px;">
        <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:18px;">
          <span style="font-size:30px;line-height:1;flex-shrink:0;">
            {{ fnAlertMeta(uiState.modalVariant).icon }}
          </span>
          <div>
            <div style="font-size:13px;font-weight:800;color:#111;margin-bottom:5px;">
              {{ fnAlertMeta(uiState.modalVariant).label }}
            </div>
            <div style="font-size:12px;color:#555;line-height:1.65;">
              {{ uiState.modalData?.msg }}
            </div>
          </div>
        </div>
        <button @click="closeModal"
            style="width:100%;padding:9px;border:none;border-radius:7px;cursor:pointer;font-size:13px;font-weight:700;color:#fff;"
            :style="'background:'+fnAlertMeta(uiState.modalVariant).bg">
          \uD655\uC778
        </button>
      </div>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \u2460 Alert \uBAA8\uB2EC ============================================== -->
<!-- ===== \u25A0. \u2461 Confirm \uB2E4\uC774\uC5BC\uB85C\uADF8 ========================================= -->
<template v-if="uiState.modalType==='confirm'">
  <div @click="closeModal"
      style="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.48);display:flex;align-items:center;justify-content:center;">
    <div @click.stop
        style="background:#fff;border-radius:12px;box-shadow:0 12px 48px rgba(0,0,0,.22);width:340px;max-width:90vw;padding:24px 22px 20px;">
      <div style="font-size:26px;margin-bottom:10px;">
        \u{1F914}
      </div>
      <div style="font-size:14px;font-weight:800;color:#111;margin-bottom:8px;">
        \uD655\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4
      </div>
      <div style="font-size:12px;color:#666;line-height:1.7;margin-bottom:22px;">
        \uC774 \uC791\uC5C5\uC744 \uC9C4\uD589\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
        <br>
        \uC791\uC5C5 \uD6C4\uC5D0\uB294 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
      <div style="display:flex;gap:8px;">
        <button @click="closeModal"
            style="flex:1;padding:9px;border:1px solid #ddd;border-radius:7px;background:#fff;cursor:pointer;font-size:13px;color:#666;">
          \uCDE8\uC18C
        </button>
        <button @click="doConfirm"
            style="flex:1;padding:9px;border:none;border-radius:7px;background:#ef4444;color:#fff;cursor:pointer;font-size:13px;font-weight:700;">
          \uD655\uC778
        </button>
      </div>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \u2461 Confirm \uB2E4\uC774\uC5BC\uB85C\uADF8 ========================================= -->
<!-- ===== \u25A0. \u2462 \uD3FC \uC785\uB825 \uBAA8\uB2EC =============================================== -->
<template v-if="uiState.modalType==='form'">
  <div @click="closeModal"
      style="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.48);display:flex;align-items:center;justify-content:center;">
    <div @click.stop
        style="background:#fff;border-radius:12px;box-shadow:0 12px 48px rgba(0,0,0,.22);width:420px;max-width:92vw;">
      <div style="padding:14px 18px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between;background:#f8f9fa;">
        <span style="font-size:13px;font-weight:800;color:#333;">
          \u{1F4DD} \uC2E0\uADDC \uD68C\uC6D0 \uB4F1\uB85D
        </span>
        <button @click="closeModal" style="border:none;background:none;cursor:pointer;font-size:18px;color:#bbb;line-height:1;">
          \u2715
        </button>
      </div>
      <div style="padding:18px 20px;">
        <div style="margin-bottom:13px;">
          <label style="display:block;font-size:11px;font-weight:700;color:#555;margin-bottom:4px;">
            \uC774\uB984
            <span style="color:#ef4444;">
              *
            </span>
          </label>
          <input v-model="form.name" placeholder="\uD64D\uAE38\uB3D9"
              style="width:100%;box-sizing:border-box;font-size:12px;padding:8px 10px;border-radius:6px;outline:none;"
              :style="formErrors.name?'border:1.5px solid #ef4444;':'border:1px solid #ddd;'" />
          <div v-if="formErrors.name" style="font-size:11px;color:#ef4444;margin-top:3px;">
            {{ formErrors.name }}
          </div>
        </div>
        <div style="margin-bottom:13px;">
          <label style="display:block;font-size:11px;font-weight:700;color:#555;margin-bottom:4px;">
            \uC774\uBA54\uC77C
            <span style="color:#ef4444;">
              *
            </span>
          </label>
          <input v-model="form.email" placeholder="example@shopjoy.kr" type="email"
              style="width:100%;box-sizing:border-box;font-size:12px;padding:8px 10px;border-radius:6px;outline:none;"
              :style="formErrors.email?'border:1.5px solid #ef4444;':'border:1px solid #ddd;'" />
          <div v-if="formErrors.email" style="font-size:11px;color:#ef4444;margin-top:3px;">
            {{ formErrors.email }}
          </div>
        </div>
        <div style="margin-bottom:13px;">
          <label style="display:block;font-size:11px;font-weight:700;color:#555;margin-bottom:4px;">
            \uC5F0\uB77D\uCC98
          </label>
          <input v-model="form.phone" placeholder="010-0000-0000"
              style="width:100%;box-sizing:border-box;font-size:12px;padding:8px 10px;border:1px solid #ddd;border-radius:6px;outline:none;" />
        </div>
        <div>
          <label style="display:block;font-size:11px;font-weight:700;color:#555;margin-bottom:4px;">
            \uB4F1\uAE09
          </label>
          <select v-model="form.grade"
              style="width:100%;font-size:12px;padding:8px 10px;border:1px solid #ddd;border-radius:6px;background:#fff;outline:none;">
            <option v-for="o in codes.grade_opts" :key="o.value" :value="o.value">
              {{ o.label }}
            </option>
          </select>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
      <div style="padding:10px 20px 16px;display:flex;gap:8px;justify-content:flex-end;border-top:1px solid #f0f0f0;">
        <button @click="closeModal" style="padding:8px 18px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:12px;color:#666;">
          \uCDE8\uC18C
        </button>
        <button @click="submitForm" style="padding:8px 18px;border:none;border-radius:6px;background:#34a853;color:#fff;cursor:pointer;font-size:12px;font-weight:700;">
          \uB4F1\uB85D
        </button>
      </div>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \u2462 \uD3FC \uC785\uB825 \uBAA8\uB2EC =============================================== -->
<!-- ===== \u25A0. \u2463 \uC0C1\uC138\uBCF4\uAE30 \uBAA8\uB2EC =============================================== -->
<template v-if="uiState.modalType==='detail' ? uiState.modalData : false">
<div @click="closeModal"
      style="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.48);display:flex;align-items:center;justify-content:center;">
  <div @click.stop
        style="background:#fff;border-radius:12px;box-shadow:0 12px 48px rgba(0,0,0,.22);width:500px;max-width:92vw;">
    <div style="padding:13px 18px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:8px;background:#f8f9fa;">
      <span style="font-size:18px;">
        \u{1F464}
      </span>
      <span style="font-size:13px;font-weight:800;color:#222;">
        \uD68C\uC6D0 \uC0C1\uC138 \uC815\uBCF4
      </span>
      <span style="font-size:10px;padding:2px 8px;border-radius:10px;font-weight:700;" :style="fnGradeBadge(uiState.modalData.grade)">
        {{ uiState.modalData.grade }}
      </span>
      <span style="font-size:10px;padding:2px 8px;border-radius:10px;font-weight:700;margin-left:2px;" :style="fnStatusBadge(uiState.modalData.status)">
        {{ uiState.modalData.status }}
      </span>
      <span style="flex:1;">
      </span>
      <button @click="closeModal" style="border:none;background:none;cursor:pointer;font-size:18px;color:#bbb;line-height:1;">
        \u2715
      </button>
    </div>
    <div style="padding:16px 20px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px 20px;margin-bottom:14px;">
        <div>
          <div style="font-size:10px;font-weight:700;color:#aaa;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">
            \uC774\uB984
          </div>
          <div style="font-size:16px;font-weight:800;color:#111;">
            {{ uiState.modalData.name }}
          </div>
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:#aaa;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">
            \uD68C\uC6D0\uBC88\uD638
          </div>
          <div style="font-size:14px;font-weight:700;color:#555;">
            #{{ uiState.modalData.memberId }}
          </div>
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:#aaa;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">
            \uC774\uBA54\uC77C
          </div>
          <div style="font-size:11px;color:#333;font-family:monospace;">
            {{ uiState.modalData.email }}
          </div>
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:#aaa;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">
            \uC5F0\uB77D\uCC98
          </div>
          <div style="font-size:12px;color:#333;">
            {{ uiState.modalData.phone }}
          </div>
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:#aaa;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">
            \uAC00\uC785\uC77C
          </div>
          <div style="font-size:12px;color:#333;">
            {{ uiState.modalData.joinDate }}
          </div>
        </div>
        <div>
          <div style="font-size:10px;font-weight:700;color:#aaa;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">
            \uC8FC\uC18C
          </div>
          <div style="font-size:11px;color:#333;">
            {{ uiState.modalData.address }}
          </div>
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uAD6C\uB9E4 \uD1B5\uACC4 =========================================== -->
      <div style="background:#f8f9fa;border-radius:8px;padding:12px 16px;display:flex;gap:0;margin-bottom:10px;">
        <div style="flex:1;text-align:center;border-right:1px solid #e5e7eb;">
          <div style="font-size:10px;color:#aaa;margin-bottom:4px;">
            \uCD1D \uC8FC\uBB38
          </div>
          <div style="font-size:20px;font-weight:800;color:#333;">
            {{ uiState.modalData.orders }}
          </div>
          <div style="font-size:10px;color:#aaa;">
            \uAC74
          </div>
        </div>
        <div style="flex:1;text-align:center;padding:0 12px;">
          <div style="font-size:10px;color:#aaa;margin-bottom:4px;">
            \uCD1D \uAD6C\uB9E4\uC561
          </div>
          <div style="font-size:18px;font-weight:800;color:#e8587a;">
            {{ uiState.modalData.totalAmt.toLocaleString() }}
          </div>
          <div style="font-size:10px;color:#aaa;">
            \uC6D0
          </div>
        </div>
      </div>
      <div v-if="uiState.modalData.memo"
            style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:8px 12px;font-size:11px;color:#92400e;">
        \u{1F4CC} {{ uiState.modalData.memo }}
      </div>
    </div>
    <div style="padding:10px 20px 14px;display:flex;gap:8px;justify-content:flex-end;border-top:1px solid #f0f0f0;">
      <button @click="openEditConfirm(uiState.modalData)"
            style="padding:7px 16px;border:none;border-radius:6px;background:#7c3aed;color:#fff;cursor:pointer;font-size:12px;font-weight:700;">
        \u270F \uC218\uC815
      </button>
      <button @click="closeModal"
            style="padding:7px 16px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:12px;color:#666;">
        \uB2EB\uAE30
      </button>
    </div>
  </div>
</div>
</template>
<!-- ===== \u25A1. \u2463 \uC0C1\uC138\uBCF4\uAE30 \uBAA8\uB2EC =============================================== -->
<!-- ===== \u25A0. \u2464 \uC774\uBBF8\uC9C0 \uD31D\uC5C5 ================================================ -->
<template v-if="uiState.modalType==='image'">
  <div @click="closeModal"
      style="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px;">
    <button @click="closeModal"
        style="position:absolute;top:18px;right:22px;border:none;background:rgba(255,255,255,.15);cursor:pointer;font-size:16px;color:#fff;padding:6px 10px;border-radius:6px;line-height:1;">
      \u2715 \uB2EB\uAE30
    </button>
    <div @click.stop
        style="width:480px;max-width:88vw;height:320px;border-radius:12px;overflow:hidden;box-shadow:0 8px 48px rgba(0,0,0,.6);background:linear-gradient(135deg,#667eea 0%,#764ba2 50%,#f64f59 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;">
      <span style="font-size:56px;">
        \u{1F6CD}\uFE0F
      </span>
      <div style="color:#fff;font-size:20px;font-weight:800;letter-spacing:.08em;">
        ShopJoy
      </div>
      <div style="color:rgba(255,255,255,.65);font-size:12px;">
        \uC774\uBBF8\uC9C0 \uBDF0\uC5B4 \uB370\uBAA8 \u2014 480 \xD7 320
      </div>
    </div>
    <div style="color:rgba(255,255,255,.45);font-size:11px;">
      \uBC30\uACBD \uB610\uB294 \u2715 \uD074\uB9AD \uC2DC \uB2EB\uAE30
    </div>
  </div>
</template>
<!-- ===== \u25A1. \u2464 \uC774\uBBF8\uC9C0 \uD31D\uC5C5 ================================================ -->
<!-- ===== \u25A0. \u2465 \uC6B0\uCE21 Drawer ============================================= -->
<template v-if="uiState.modalType==='drawer'">
  <div @click="closeModal" style="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.4);">
  </div>
  <div @click.stop
      style="position:fixed;top:0;right:0;bottom:0;z-index:9001;width:360px;max-width:88vw;background:#fff;box-shadow:-4px 0 28px rgba(0,0,0,.18);display:flex;flex-direction:column;animation:s04_slideRight .22s ease;">
    <div style="padding:13px 18px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between;background:#0f766e;color:#fff;">
      <span style="font-size:13px;font-weight:800;">
        \u25E7 \uC6B0\uCE21 Drawer
      </span>
      <button @click="closeModal" style="border:none;background:none;cursor:pointer;font-size:18px;color:rgba(255,255,255,.8);line-height:1;">
        \u2715
      </button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:18px;">
      <div style="font-size:12px;color:#555;line-height:1.8;margin-bottom:16px;">
        \uD654\uBA74 \uC6B0\uCE21\uC5D0\uC11C \uC2AC\uB77C\uC774\uB4DC\uC778\uD558\uB294 Drawer \uD328\uD134\uC785\uB2C8\uB2E4.
        <br>
        \uD544\uD130, \uC124\uC815, \uBCF4\uC870 \uC815\uBCF4 \uD45C\uC2DC \uB4F1\uC5D0 \uD65C\uC6A9\uD569\uB2C8\uB2E4.
      </div>
      <div v-for="i in 8" :key="i"
          style="padding:10px 14px;border:1px solid #f0f0f0;border-radius:8px;margin-bottom:8px;cursor:pointer;transition:background .1s;"
          @mouseenter="e=>e.currentTarget.style.background='#f0fdfa'"
          @mouseleave="e=>e.currentTarget.style.background=''">
        <div style="font-size:12px;font-weight:700;color:#0f766e;">
          \uD56D\uBAA9 {{ i }}
        </div>
        <div style="font-size:11px;color:#aaa;margin-top:2px;">
          Drawer \uB0B4 \uC2A4\uD06C\uB864 \uAC00\uB2A5\uD55C \uCF58\uD150\uCE20
        </div>
      </div>
    </div>
    <div style="padding:12px 18px 18px;border-top:1px solid #f0f0f0;">
      <button @click="closeModal" style="width:100%;padding:10px;border:none;border-radius:8px;background:#0f766e;color:#fff;cursor:pointer;font-size:13px;font-weight:700;">
        \uB2EB\uAE30
      </button>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \u2465 \uC6B0\uCE21 Drawer ============================================= -->
<!-- ===== \u25A0. \u2466 \uBC14\uD140\uC2DC\uD2B8 ================================================== -->
<template v-if="uiState.modalType==='bottom'">
  <div @click="closeModal" style="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.4);">
  </div>
  <div @click.stop
      style="position:fixed;left:0;right:0;bottom:0;z-index:9001;background:#fff;border-radius:18px 18px 0 0;box-shadow:0 -4px 28px rgba(0,0,0,.2);max-height:68vh;display:flex;flex-direction:column;animation:s04_slideBottom .22s ease;">
    <div style="padding:10px 0 4px;text-align:center;flex-shrink:0;">
      <div style="width:38px;height:4px;border-radius:2px;background:#e0e0e0;margin:0 auto;cursor:grab;" @click="closeModal">
      </div>
    </div>
    <div style="padding:4px 20px 12px;font-size:14px;font-weight:800;color:#111;flex-shrink:0;">
      \u2B06 \uBC14\uD140\uC2DC\uD2B8
    </div>
    <div style="flex:1;overflow-y:auto;padding:0 20px;">
      <div style="font-size:12px;color:#555;line-height:1.8;margin-bottom:14px;">
        \uD654\uBA74 \uD558\uB2E8\uC5D0\uC11C \uC2AC\uB77C\uC774\uB4DC\uC5C5\uD558\uB294 \uBC14\uD140\uC2DC\uD2B8 \uD328\uD134\uC785\uB2C8\uB2E4.
        <br>
        \uBAA8\uBC14\uC77C UX\uC5D0\uC11C \uC790\uC8FC \uD65C\uC6A9\uD569\uB2C8\uB2E4.
      </div>
      <div v-for="(label,i) in ['\uBC30\uC1A1\uC9C0 \uBCC0\uACBD','\uCFE0\uD3F0 \uC801\uC6A9','\uD3EC\uC778\uD2B8 \uC0AC\uC6A9','\uACB0\uC81C \uC218\uB2E8 \uBCC0\uACBD','\uC8FC\uBB38 \uBA54\uBAA8 \uCD94\uAC00','\uCDE8\uC18C/\uBC18\uD488 \uC2E0\uCCAD']" :key="i"
          style="display:flex;align-items:center;justify-content:space-between;padding:13px 0;border-bottom:1px solid #f5f5f5;cursor:pointer;"
          @mouseenter="e=>e.currentTarget.style.color='#9333ea'"
          @mouseleave="e=>e.currentTarget.style.color=''">
        <span style="font-size:13px;font-weight:600;color:inherit;">
          {{ label }}
        </span>
        <span style="color:#d1d5db;font-size:14px;">
          \u203A
        </span>
      </div>
    </div>
    <div style="padding:14px 20px 22px;flex-shrink:0;">
      <button @click="closeModal" style="width:100%;padding:12px;border:none;border-radius:10px;background:#9333ea;color:#fff;cursor:pointer;font-size:14px;font-weight:700;">
        \uB2EB\uAE30
      </button>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \u2466 \uBC14\uD140\uC2DC\uD2B8 ================================================== -->
<!-- ===== \u25A0. \u2467 \uC804\uCCB4\uD654\uBA74 \uBAA8\uB2EC =============================================== -->
<template v-if="uiState.modalType==='fullscreen'">
  <div style="position:fixed;inset:0;z-index:9000;background:#fff;display:flex;flex-direction:column;animation:s04_fadeIn .18s ease;">
    <div style="padding:12px 20px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between;background:#9f1239;color:#fff;flex-shrink:0;">
      <span style="font-size:13px;font-weight:800;">
        \u26F6 \uC804\uCCB4\uD654\uBA74 \uBAA8\uB2EC
      </span>
      <button @click="closeModal" style="border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.15);cursor:pointer;font-size:12px;color:#fff;padding:5px 14px;border-radius:6px;">
        \u2715 \uB2EB\uAE30
      </button>
    </div>
    <div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:#fafafa;">
      <span style="font-size:64px;">
        \u{1F680}
      </span>
      <div style="font-size:20px;font-weight:800;color:#222;">
        \uC804\uCCB4\uD654\uBA74 \uBAA8\uB2EC
      </div>
      <div style="font-size:13px;color:#888;text-align:center;max-width:400px;line-height:1.8;">
        \uD654\uBA74 \uC804\uCCB4\uB97C \uB36E\uB294 \uBAA8\uB2EC \uD328\uD134\uC785\uB2C8\uB2E4.
        <br>
        \uC5D0\uB514\uD130, \uC804\uCCB4 \uD3B8\uC9D1 \uD654\uBA74, \uC784\uC2DC \uB300\uC2DC\uBCF4\uB4DC \uB4F1\uC5D0 \uD65C\uC6A9\uB429\uB2C8\uB2E4.
      </div>
      <button @click="closeModal" style="margin-top:8px;padding:11px 36px;border:none;border-radius:8px;background:#9f1239;color:#fff;cursor:pointer;font-size:14px;font-weight:700;">
        \uB2EB\uAE30
      </button>
    </div>
  </div>
</template>
<!-- ===== \u25A1. \u2467 \uC804\uCCB4\uD654\uBA74 \uBAA8\uB2EC =============================================== -->
<!-- ===== \u25A0. \u2468 \uC911\uCCA9 \uBAA8\uB2EC ================================================= -->
<template v-if="uiState.modalType==='nested'">
  <div @click="uiState.nested2 ? uiState.nested2=false : closeModal()"
      style="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.48);display:flex;align-items:center;justify-content:center;">
    <div @click.stop
        style="background:#fff;border-radius:12px;box-shadow:0 12px 48px rgba(0,0,0,.22);width:420px;max-width:92vw;">
      <div style="padding:13px 18px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between;background:#f8f9fa;">
        <span style="font-size:13px;font-weight:800;color:#333;">
          \u29C9 \uC911\uCCA9 \uBAA8\uB2EC (1\uB2E8\uACC4)
        </span>
        <button @click="closeModal" style="border:none;background:none;cursor:pointer;font-size:18px;color:#bbb;line-height:1;">
          \u2715
        </button>
      </div>
      <div style="padding:20px 20px 16px;">
        <div style="font-size:12px;color:#555;line-height:1.75;margin-bottom:16px;">
          \uC774 \uBAA8\uB2EC \uC704\uC5D0 2\uB2E8\uACC4 \uBAA8\uB2EC\uC744 \uCD94\uAC00\uB85C \uC624\uD508\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
          <br>
          \uBC30\uACBD \uD074\uB9AD \uC2DC \uAC00\uC7A5 \uC0C1\uB2E8 \uBAA8\uB2EC\uBD80\uD130 \uB2EB\uD799\uB2C8\uB2E4.
        </div>
        <button @click="uiState.nested2=true"
            style="font-size:12px;padding:7px 18px;border:none;border-radius:6px;background:#1e40af;color:#fff;cursor:pointer;font-weight:700;">
          + 2\uB2E8\uACC4 \uBAA8\uB2EC \uC5F4\uAE30
        </button>
      </div>
      <div style="padding:10px 18px 14px;border-top:1px solid #f0f0f0;text-align:right;">
        <button @click="closeModal" style="padding:7px 16px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:12px;color:#666;">
          \uB2EB\uAE30
        </button>
      </div>
    </div>
  </div>
  <!-- ===== \u25A0.\u25A0. 2\uB2E8\uACC4 inner \uBAA8\uB2EC ========================================== -->
  <template v-if="uiState.nested2">
    <div @click="uiState.nested2=false"
        style="position:fixed;inset:0;z-index:9010;background:rgba(0,0,0,.32);display:flex;align-items:center;justify-content:center;">
      <div @click.stop
          style="background:#fff;border-radius:12px;box-shadow:0 12px 48px rgba(0,0,0,.35);width:300px;max-width:86vw;padding:22px 20px 18px;">
        <div style="font-size:22px;margin-bottom:10px;">
          \u2705
        </div>
        <div style="font-size:13px;font-weight:800;color:#111;margin-bottom:8px;">
          2\uB2E8\uACC4 \uBAA8\uB2EC
        </div>
        <div style="font-size:12px;color:#666;line-height:1.7;margin-bottom:18px;">
          \uBAA8\uB2EC \uC704\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC911\uCCA9 \uBAA8\uB2EC\uC785\uB2C8\uB2E4.
          <br>
          z-index\uB97C \uB192\uC5EC \uCD5C\uC0C1\uB2E8\uC5D0 \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4.
        </div>
        <button @click="uiState.nested2=false"
            style="width:100%;padding:9px;border:none;border-radius:7px;background:#1e40af;color:#fff;cursor:pointer;font-size:13px;font-weight:700;">
          \uB2EB\uAE30
        </button>
      </div>
    </div>
  </template>
</template>
<!-- ===== \u25A1.\u25A1. 2\uB2E8\uACC4 inner \uBAA8\uB2EC ========================================== -->
<!-- ===== \u25A1. \u2468 \uC911\uCCA9 \uBAA8\uB2EC ================================================= -->
<!-- ===== \u25A0. \u2469 \uB85C\uB529 \uBAA8\uB2EC ================================================= -->
<template v-if="uiState.modalType==='loading'">
  <div style="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:18px;">
    <div style="width:56px;height:56px;border:5px solid rgba(255,255,255,.25);border-top-color:#fff;border-radius:50%;animation:s04_spin .75s linear infinite;">
    </div>
    <div style="color:#fff;font-size:14px;font-weight:700;">
      \uCC98\uB9AC \uC911\uC785\uB2C8\uB2E4\u2026
    </div>
    <div style="color:rgba(255,255,255,.45);font-size:11px;">
      2.5\uCD08 \uD6C4 \uC790\uB3D9\uC73C\uB85C \uB2EB\uD799\uB2C8\uB2E4
    </div>
  </div>
</template>
<!-- ===== \u25A1. \u2469 \uB85C\uB529 \uBAA8\uB2EC ================================================= -->
<!-- ===== \u25A0. \u2501\u2501\u2501\u2501\u2501\u2501 BaseModal 17\uC885 \u2501\u2501\u2501\u2501\u2501\u2501 ============================= -->
<!-- ===== \u25A0. \u2460 \uC8FC\uBB38\uC0C1\uC138 / \u2461 \uC0C1\uD488\uC0C1\uC138 / \u2462 \uC8FC\uBB38\uC790 \u2014 show prop \uBC29\uC2DD ================== -->
<order-detail-modal modal-name="order-detail"
    :show="bModal.type==='orderDetail'"
    :order="demoOrder"
    @close="closeBModal" />
<!-- ===== \u25A1. \u2460 \uC8FC\uBB38\uC0C1\uC138 / \u2461 \uC0C1\uD488\uC0C1\uC138 / \u2462 \uC8FC\uBB38\uC790 \u2014 show prop \uBC29\uC2DD ================== -->
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<product-modal modal-name="product"
    :show="bModal.type==='productModal'"
    :product="demoProduct"
    @close="closeBModal" />
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
<!-- ===== \u25A0. \uC601\uC5ED ====================================================== -->
<customer-modal modal-name="customer"
    :show="bModal.type==='customerModal'"
    :user="demoUser"
    :order="demoOrder"
    @close="closeBModal" />
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
<!-- ===== \u25A0. \u2463~\u2468 \uC120\uD0DD \uBAA8\uB2EC \u2014 \uC870\uAC74\uBD80 \uB9C8\uC6B4\uD2B8 \uBC29\uC2DD ================================== -->
<template v-if="bModal.type==='siteSelect'">
  <bo-cm-popup-modal popup-cmd="cmPopup-site-select" popup-code="site" @select="bShowToast('\uC120\uD0DD: '+$event.siteNm,'success'); closeBModal()" @close="closeBModal" />
</template>
<!-- ===== \u25A1. \u2463~\u2468 \uC120\uD0DD \uBAA8\uB2EC \u2014 \uC870\uAC74\uBD80 \uB9C8\uC6B4\uD2B8 \uBC29\uC2DD ================================== -->
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<template v-if="bModal.type==='vendorSelect'">
  <bo-cm-popup-modal popup-cmd="cmPopup-vendor-select" popup-code="vendor" @select="bShowToast('\uC120\uD0DD: '+$event.vendorNm,'success'); closeBModal()" @close="closeBModal" />
</template>
<template v-if="bModal.type==='boUserSelect'">
  <bo-cm-popup-modal popup-cmd="cmPopup-bo-user-select" popup-code="userByDept" result-type="array" @select="bShowToast('\uC120\uD0DD: '+$event.length+'\uBA85','success'); closeBModal()" @close="closeBModal" />
</template>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<template v-if="bModal.type==='memberSelect'">
  <bo-cm-popup-modal popup-cmd="cmPopup-member-select" popup-code="member" @select="bShowToast('\uC120\uD0DD: '+$event.memberNm,'success'); closeBModal()" @close="closeBModal" />
</template>
<template v-if="bModal.type==='orderSelect'">
  <bo-cm-popup-modal popup-cmd="cmPopup-order-select" popup-code="order" @select="bShowToast('\uC120\uD0DD: '+$event.orderId,'success'); closeBModal()" @close="closeBModal" />
</template>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<template v-if="bModal.type==='bbmSelect'">
  <bo-cm-popup-modal popup-cmd="cmPopup-bbm-select" popup-code="bbm" @select="bShowToast('\uC120\uD0DD: '+$event.bbmNm,'success'); closeBModal()" @close="closeBModal" />
</template>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<!-- ===== \u25A0. \u2469~\u246A \uD15C\uD50C\uB9BF \uBAA8\uB2EC ============================================== -->
<template v-if="bModal.type==='tmplPreview'">
  <template-preview-modal modal-name="template-preview" :tmpl="demoTmpl" :sample-params="demoSampleParams" @close="closeBModal" />
</template>
<!-- ===== \u25A1. \u2469~\u246A \uD15C\uD50C\uB9BF \uBAA8\uB2EC ============================================== -->
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<template v-if="bModal.type==='tmplSend'">
  <template-send-modal modal-name="template-send" :tmpl="demoTmpl" :bo-data="boData" :show-toast="bShowToast" :show-confirm="bShowConfirm" @close="closeBModal" />
</template>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<!-- ===== \u25A0. \u246B~\u246E \uD2B8\uB9AC \uBAA8\uB2EC =============================================== -->
<template v-if="bModal.type==='roleTree'">
  <bo-cm-popup-modal popup-cmd="cmPopup-role-tree" popup-code="role" clearable @select="bShowToast('\uC120\uD0DD: '+$event.roleNm,'success'); closeBModal()" @close="closeBModal" />
</template>
<!-- ===== \u25A1. \u246B~\u246E \uD2B8\uB9AC \uBAA8\uB2EC =============================================== -->
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<template v-if="bModal.type==='menuTree'">
  <bo-cm-popup-modal popup-cmd="cmPopup-menu-tree" popup-code="menu" clearable @select="bShowToast($event.menuId?'\uC120\uD0DD: '+$event.menuNm:'\uC0C1\uC704\uC5C6\uC74C \uC120\uD0DD','success'); closeBModal()" @close="closeBModal" />
</template>
<template v-if="bModal.type==='deptTree'">
  <bo-cm-popup-modal popup-cmd="cmPopup-dept-tree" popup-code="dept" clearable @select="bShowToast($event.deptId?'\uC120\uD0DD: '+$event.deptNm:'\uCD5C\uC0C1\uC704 \uC120\uD0DD','success'); closeBModal()" @close="closeBModal" />
</template>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<template v-if="bModal.type==='categoryTree'">
  <bo-category-tree-modal modal-name="bo-category-tree" :bo-data="boData" @select="bShowToast($event.categoryId?'\uC120\uD0DD: '+$event.categoryNm:'\uCD5C\uC0C1\uC704 \uC120\uD0DD','success'); closeBModal()" @close="closeBModal" />
</template>
<!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
<!-- ===== \u25A0. \u246F \uC804\uC2DC \uBBF8\uB9AC\uBCF4\uAE30 =============================================== -->
<disp-preview-modal modal-name="disp-preview"
    :show="bModal.type==='dispPreview'"
    mode="all"
    tab-label="\uC804\uC2DC \uBBF8\uB9AC\uBCF4\uAE30 \uB370\uBAA8"
    area="MAIN_TOP"
    :widgets="[]"
    :widget="{}"
    @close="closeBModal" />
<!-- ===== \u25A1. \u246F \uC804\uC2DC \uBBF8\uB9AC\uBCF4\uAE30 =============================================== -->
<!-- ===== \u25A0. \u2470 \uCE74\uD14C\uACE0\uB9AC \uBA40\uD2F0\uC120\uD0DD ============================================= -->
<fo-cm-popup-modal popup-cmd="cmPopup-category-select" popup-code="category" :multi="true" result-type="idArray" :show="bModal.type==='catSelect'" :init-selected-ids="catSelIds" @close="closeBModal" @select="ids => { catSelIds.splice(0, catSelIds.length, ...ids); bShowToast(ids.length+'\uAC1C \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD\uB428','success'); closeBModal(); }" />
<!-- ===== \u25A1. \u2470 \uCE74\uD14C\uACE0\uB9AC \uBA40\uD2F0\uC120\uD0DD ============================================= -->
<!-- \uC774 \uD654\uBA74 \uC804\uC6A9 CSS(s04_* \uD0A4\uD504\uB808\uC784 + \uBAA8\uB2EC \uB370\uBAA8 \uC2A4\uD0C0\uC77C)\uB294 \uB354 \uC774\uC0C1 \uC5EC\uAE30(template \uC790\uC2DD <style>)\uC5D0
     \uB450\uC9C0 \uC54A\uB294\uB2E4 \u2014 setup() \uC0C1\uB2E8\uC5D0\uC11C onMounted \uC2DC document.head \uC5D0 JS\uB85C \uC9C1\uC811 \uC8FC\uC785\uD55C\uB2E4
     ("TypeError: Illegal constructor" \uD06C\uB798\uC2DC \uC6D0\uC778 \uC81C\uAC70, 2026-09-06). -->
</div>
</fo-page>
<!-- ===== \u25A1. \uC601\uC5ED ====================================================== -->
`};
