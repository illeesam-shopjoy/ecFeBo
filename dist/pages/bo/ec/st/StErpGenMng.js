window.StErpGenMng={name:"StErpGenMng",props:{navigate:{type:Function,required:!0}},setup(K){const{ref:v,reactive:r,computed:f,watch:U,onMounted:x}=Vue,i=window.boApp.showToast,G=window.boApp.showConfirm,L=r({error:null}),b=r({erp_statuses:[],erp_voucher_types:[]}),V=(e,t={})=>{if(e==="preview-search")return E("DEFAULT");if(e==="preview-generate")return F();console.warn("[handleBtnAction] unknown cmd:",e)},N=async()=>{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["ERP_VOUCHER_STATUS_KR","ERP_VOUCHER_TYPE_KR"],{compNm:"StErpGenMng"});try{b.erp_statuses=e.sgGetGrpCodes("ERP_VOUCHER_STATUS_KR"),b.erp_voucher_types=e.sgGetGrpCodes("ERP_VOUCHER_TYPE_KR")}catch(t){console.error("[fnLoadCodes]",t)}},l=v(coUtil.cofToYm(new Date)),c=v("\uC815\uC0B0"),w=r([]),h=r([]),B=f(()=>h.filter(e=>e.vendorTypeCd==="SALES")),E=async(e="DEFAULT")=>{var t,s,o,a,n,u,R,S,_,A,T,k;try{const[m,M,C]=await Promise.all([boApiSvc.odOrder.getPage({pageNo:1,pageSize:1e4},"ERP\uC804\uD45C\uC0DD\uC131","\uBAA9\uB85D\uC870\uD68C"),boApiSvc.syVendor.getPage({pageNo:1,pageSize:1e4},"ERP\uC804\uD45C\uC0DD\uC131","\uBAA9\uB85D\uC870\uD68C"),boApiSvc.stErp.getGenPage({targetMon:l.value,pageNo:1,pageSize:100},"ERP\uC804\uD45C\uC0DD\uC131","\uC774\uB825\uC870\uD68C")]);w.splice(0,w.length,...((s=(t=m.data)==null?void 0:t.data)==null?void 0:s.pageList)||((a=(o=m.data)==null?void 0:o.data)==null?void 0:a.list)||[]),h.splice(0,h.length,...((u=(n=M.data)==null?void 0:n.data)==null?void 0:u.pageList)||((S=(R=M.data)==null?void 0:R.data)==null?void 0:S.list)||[]),p.splice(0,p.length,...((A=(_=C.data)==null?void 0:_.data)==null?void 0:A.pageList)||((k=(T=C.data)==null?void 0:T.data)==null?void 0:k.list)||[])}catch(m){console.error("[catch-info]",m)}};x(async()=>{await N(),await E("DEFAULT")});const d=f(()=>B.value.map(e=>{const s=w.filter(n=>n.vendorId===e.vendorId&&n.status!=="\uCDE8\uC18C\uB428"&&n.orderDate.startsWith(l.value)).reduce((n,u)=>n+u.totalPrice,0),o=Math.round(s*.1),a=s-o;return{vendorNm:e.vendorNm,debit:"\uBBF8\uC9C0\uAE09\uAE08",credit:"\uD604\uAE08",debitAmt:a,creditAmt:a,description:`${L.targetMon} ${e.vendorNm} \uC815\uC0B0\uC9C0\uAE09`}}).filter(e=>e.debitAmt>0)),p=r([]),D=r({show:!1}),F=async()=>{var t,s;if(!d.value.length){i("\uC0DD\uC131\uD560 \uC804\uD45C \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}if(await G("ERP \uC804\uD45C\uC0DD\uC131",`${l.value} ${c.value} \uC804\uD45C\uB97C \uC0DD\uC131\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)){p.unshift({genId:"GEN-"+l.value,genMon:l.value,slipType:c.value,slipCnt:d.value.length,totalAmt:d.value.reduce((o,a)=>o+a.debitAmt,0),genDate:coUtil.cofToYmd(new Date),status:"\uC0DD\uC131\uC644\uB8CC",regUserNm:"\uAD00\uB9AC\uC790"});try{await boApiSvc.stErp.gen({targetMon:l.value,slipType:c.value,rows:d.value},"\uC815\uC0B0ERP\uC0DD\uC131","\uC800\uC7A5"),i&&i("ERP \uC804\uD45C\uAC00 \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(o){console.error("[catch-info]",o);const a=((s=(t=o.response)==null?void 0:t.data)==null?void 0:s.message)||o.message||"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";i&&i(a,"error",0)}}},H={\uC804\uC1A1\uC644\uB8CC:"badge-green",\uC0DD\uC131\uC644\uB8CC:"badge-blue",\uC624\uB958:"badge-red"},O=e=>coUtil.cofCodeBadge("ERP_VOUCHER_STATUS_KR",e,H[e]||"badge-gray"),y=coUtil.cofWon,g={};g.previewGrid=[{key:"debit",label:"\uCC28\uBCC0\uACC4\uC815"},{key:"credit",label:"\uB300\uBCC0\uACC4\uC815"},{key:"debitAmt",label:"\uCC28\uBCC0\uAE08\uC561",fmt:y,cellStyle:"font-weight:700;color:#3498db"},{key:"creditAmt",label:"\uB300\uBCC0\uAE08\uC561",fmt:y,cellStyle:"font-weight:700;color:#27ae60"},{key:"description",label:"\uC801\uC694",cellStyle:"color:#666"}],g.histGrid=[{key:"genMon",label:"\uC815\uC0B0\uC6D4",cellStyle:"font-weight:700"},{key:"slipType",label:"\uC804\uD45C\uC720\uD615",badge:()=>"badge-blue"},{key:"slipCnt",label:"\uC804\uD45C\uC218",fmt:e=>e+"\uAC74"},{key:"totalAmt",label:"\uCD1D\uAE08\uC561",fmt:y,cellStyle:"font-weight:700"},{key:"genDate",label:"\uC0DD\uC131\uC77C",fmt:e=>coUtil.cofYmd(e)||"-"},{key:"status",label:"\uC0C1\uD0DC",badge:e=>O(e.status)},{key:"regUserNm",label:"\uB2F4\uB2F9\uC790"}],g.baseForm=[{key:"targetMon",label:"\uC815\uC0B0\uC6D4",type:"slot",name:"targetMon"},{key:"slipType",label:"\uC804\uD45C\uC720\uD615",type:"select",width:"160px",options:()=>b.erp_voucher_types},{key:"_actions",label:" ",type:"slot",name:"actions",hideLabel:!0}];const P=r({slipType:c.value});return U(()=>P.slipType,e=>{c.value=e}),{columns:g,targetMon:l,genHistories:p,settingForm:P,excelModal:D,handleBtnAction:V,cfPreviewRows:d,buildExcelParams:()=>({})}},template:`
<bo-page title="ERP \uC804\uD45C\uC0DD\uC131"
  desc-summary="\uB9C8\uAC10\uB41C \uC815\uC0B0 \uB370\uC774\uD130\uB97C ERP \uC5F0\uB3D9\uC6A9 \uBD84\uAC1C \uC804\uD45C \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\xB7\uC0DD\uC131\uD569\uB2C8\uB2E4."
  :desc-detail="['\u2022 \uB300\uC0C1 \uC6D4\uACFC \uC804\uD45C \uC720\uD615(\uC815\uC0B0\uC9C0\uAE09/\uC218\uC218\uB8CC \uB4F1)\uC744 \uC120\uD0DD \uD6C4 [\uC804\uD45C\uC0DD\uC131]\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.','\u2022 \uC0DD\uC131\uB41C \uC804\uD45C\uB294 \uCC28\uBCC0(\uBBF8\uC9C0\uAE09\uAE08) / \uB300\uBCC0(\uD604\uAE08) \uAD6C\uC870\uB85C \uC790\uB3D9 \uBD84\uAC1C\uB429\uB2C8\uB2E4.','\u2022 \uC0DD\uC131 \uC774\uB825\uC740 \uD558\uB2E8 \uBAA9\uB85D\uC5D0\uC11C \uD655\uC778\uD558\uBA70, ERP \uC804\uC1A1 \uC0C1\uD0DC\uB97C \uCD94\uC801\uD569\uB2C8\uB2E4.','\u2022 \uC804\uD45C \uB0B4\uC6A9 \uD655\uC778\uC740 ERP \uC804\uD45C\uC870\uD68C(StErpViewMng)\uC5D0\uC11C \uD569\uB2C8\uB2E4.'].join(String.fromCharCode(10))">
  <!-- ===== \u25A0. \uC0DD\uC131 \uC124\uC815 =================================================== -->
  <bo-container title="\uC804\uD45C \uC0DD\uC131 \uC124\uC815">
    <!-- ===== \u25A0.\u25A0. \uD3FC \uC601\uC5ED ================================================== -->
    <bo-form-area :columns="columns.baseForm" :form="settingForm" :cols="3" :show-actions="false" compact>
      <template #targetMon>
        <input class="form-control" v-model="targetMon" type="month" style="width:160px" />
      </template>
      <template #actions>
        <div style="display:flex;align-items:center;gap:8px;">
          <button class="btn btn_search" @click="handleBtnAction('preview-search')">
            \uC870\uD68C
          </button>
          <button class="btn btn_save" @click="handleBtnAction('preview-generate')">
            \u{1F4CB} ERP \uC804\uD45C\uC0DD\uC131
          </button>
        </div>
      </template>
    </bo-form-area>
    <!-- ===== \u25A1.\u25A1. \uD3FC \uC601\uC5ED ================================================== -->
    <!-- ===== \u25A0.\u25A0. \uBBF8\uB9AC\uBCF4\uAE30 ================================================== -->
    <div v-if="cfPreviewRows.length" style="margin-top:16px">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED =============================================== -->
      <bo-grid
        :columns="columns.previewGrid" :rows="cfPreviewRows"
        :list-title="'\uC804\uD45C \uBBF8\uB9AC\uBCF4\uAE30'" :count-text="cfPreviewRows.length + '\uAC74'">
      </bo-grid>
    </div>
    <div v-else style="color:#999;margin-top:12px">
      \uD574\uB2F9 \uC6D4\uC758 \uC0DD\uC131 \uB300\uC0C1 \uC804\uD45C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
  </bo-container>
  <!-- ===== \u25A1. \uC0DD\uC131 \uC124\uC815 =================================================== -->
  <!-- ===== \u25A0. \uC0DD\uC131 \uC774\uB825 =================================================== -->
  <bo-container title="\uC804\uD45C\uC0DD\uC131 \uC774\uB825" :count-text="genHistories.length + '\uAC74'">
    <template #toolbar-actions>
      <button class="btn btn_excel" @click="excelModal.show = true">\uC5D1\uC140</button>
    </template>
    <!-- ===== \u25A0.\u25A0. \uBAA9\uB85D \uC601\uC5ED ================================================= -->
    <bo-grid bare
      :columns="columns.histGrid" :rows="genHistories" row-key="genId">
    </bo-grid>
  </bo-container>
  <!-- ===== \u25A1. \uC0DD\uC131 \uC774\uB825 =================================================== -->
  <bo-excel-down-modal :show="excelModal.show" domain="stErpVoucher" area-nm="ERP\uC804\uD45C\uC0DD\uC131"
    ui-nm="ERP\uC804\uD45C\uC0DD\uC131" :columns="columns.histGrid" :params="buildExcelParams()"
    @close="excelModal.show = false" />
</bo-page>
`};
