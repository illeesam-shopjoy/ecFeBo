window._odClaimHistState=window._odClaimHistState||{tab:"items",tabMode:"tab"},window.OdClaimHist={name:"OdClaimHist",props:{navigate:{type:Function,required:!0},claimId:{type:String,default:null}},setup(r){const{ref:z,reactive:a,computed:s,watch:f,onMounted:u}=Vue,T=window.boApp.showToast,l=window.boApp.showRefModal,o=a({botTab:window._odClaimHistState.tab||"items",tabMode2:"tab",claimType:"\uCDE8\uC18C",claimStatus:"",relatedOrder:null,relatedDliv:null}),b=Vue.toRef(o,"botTab"),h=Vue.toRef(o,"tabMode2"),m=Vue.toRef(o,"relatedOrder"),y=Vue.toRef(o,"relatedDliv"),i=a({refund_methods:[]}),n=a([]);let v=1;const p=a({refundAmount:0,refundMethodCd:"\uACC4\uC88C\uD658\uBD88",memo:""}),w=a([{id:"items",label:"\uD074\uB808\uC784 \uD56D\uBAA9",icon:"\u21A9",get count(){return n.length}},{id:"process",label:"\uCC98\uB9AC \uC815\uBCF4",icon:"\u2699"},{id:"order",label:"\uC5F0\uAD00 \uC8FC\uBB38",icon:"\u{1F6D2}",get count(){return m.value?1:0}}]),k=(e,t={})=>{if(e==="tab-change"){o.tabMode2==="tab"&&(o.botTab=t);return}else{if(e==="claimItems-add")return D();if(e==="histList-orderRef")return l("order",t);if(e==="histList-memberRef")return l("member",t);if(e==="histList-orderEdit")return r.navigate("odOrderDtl",{id:t});if(e==="histList-dlivEdit")return r.navigate("odDlivDtl",{id:t});console.warn("[handleBtnAction] unknown cmd:",e)}},C=(e,t={})=>{if(e==="claimItems-rowRemove")return _(t);console.warn("[handleSelectAction] unknown cmd:",e)},O=async()=>{try{const e=window.sfGetBoCodeStore();await e.saLoadCodes(["REFUND_METHOD_KR"],{compNm:"OdClaimHist"}),i.refund_methods=e.sgGetGrpCodes("REFUND_METHOD_KR")}catch(e){console.error("[fnLoadCodes]",e)}};f(b,e=>{window._odClaimHistState.tab=e});const A=s(()=>{var e;return((e=window.sfGetBoCodeStore())==null?void 0:e.svCodes)||[]}),M=e=>o.tabMode2!=="tab"||o.botTab===e,S=s(()=>A.value.filter(e=>e.codeGrp==="CLAIM_STATUS_CD"&&e.useYn==="Y").sort((e,t)=>e.sortOrd-t.sortOrd).filter(e=>!e.parentCodeValues||e.parentCodeValues.includes("^"+(coConsts.CLAIM_TYPE_CD_MAP[o.claimType]||o.claimType)+"^")).map(e=>e.codeLabel).filter(e=>!["\uAC70\uBD80","\uCCA0\uD68C"].includes(e))),I=s(()=>S.value);u(async()=>{await O(),await g()}),f(()=>r.claimId,g);const D=()=>{n.push({_id:v++,bfProdNm:"",bfOptionNm:"",bfQty:1,bfPrice:0,bfStatus:"\uACB0\uC81C\uC644\uB8CC",chgProdNm:"",chgOptionNm:"",afStatus:o.claimStatus,afMemo:"",afAdmin:"",afDate:""})},_=e=>{const t=n.findIndex(d=>d._id===e);t!==-1&&n.splice(t,1)},g=async()=>{var e,t;if(!r.claimId){Object.assign(p,{refundAmount:0,refundMethodCd:"",memo:""});return}try{const d=await boApiSvc.odClaim.getById(r.claimId,"\uD074\uB808\uC784\uC774\uB825","\uCC98\uB9AC\uC815\uBCF4\uC870\uD68C"),c=((e=d.data)==null?void 0:e.data)||d.data||{};Object.assign(p,{refundAmount:(t=c.refundAmt)!=null?t:0,refundMethodCd:c.refundMethodCd||"",memo:c.memo||""})}catch(d){console.error("[handleLoadProcess]",d)}},x={};return x.processForm=[{key:"refundAmount",label:"\uD658\uBD88\uAE08\uC561",type:"number"},{key:"refundMethodCd",label:"\uD658\uBD88\uBC29\uBC95",type:"select",options:()=>i.refund_methods},{type:"rowBreak"},{key:"memo",label:"\uCC98\uB9AC \uBA54\uBAA8",type:"textarea",rows:4}],{columns:x,claimItems:n,processForm:p,codes:i,botTab:b,tabMode2:h,relatedOrder:m,relatedDliv:y,tabs:w,handleBtnAction:k,handleSelectAction:C,cfStatusOptions:I,showTab:M,showRefModal:l}},template:`
<div>
  <!-- ===== \u25A0. \uC774\uB825 \uD654\uBA74 =================================================== -->
  <div style="font-size:13px;font-weight:700;color:#555;padding:0 0 12px;">
    <span style="color:#e8587a;font-size:8px;margin-right:5px;vertical-align:middle;">
      \u25CF
    </span>
    \uC774\uB825\uC815\uBCF4
  </div>
  <!-- ===== \u25A1. \uC774\uB825 \uD654\uBA74 =================================================== -->
  <!-- ===== \u25A0. \uD0ED \uC601\uC5ED ==================================================== -->
  <bo-tab-bar :tabs="tabs" :tab="botTab" :tab-mode="tabMode2" :show-modes="false"
    @tab-select="id => handleBtnAction('tab-change', id)" />
  <!-- ===== \u25A1. \uD0ED \uC601\uC5ED ==================================================== -->
  <!-- ===== \u25A0. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
  <div :class="tabMode2!=='tab' ? 'dtl-tab-grid cols-'+tabMode2.charAt(0) : ''">
    <!-- ===== \u25A0.\u25A0. \uD074\uB808\uC784 \uD56D\uBAA9 ================================================ -->
    <div class="card" v-show="showTab('items')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
        \u21A9 \uD074\uB808\uC784 \uD56D\uBAA9
        <span class="tab-count">
          {{ claimItems.length }}
        </span>
      </div>
      <div style="display:flex;justify-content:flex-end;margin-bottom:10px;">
        <button class="btn btn_new" @click="handleBtnAction('claimItems-add')">
          + \uD56D\uBAA9 \uCD94\uAC00
        </button>
      </div>
      <div v-if="claimItems.length" style="overflow-x:auto;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 =============================================== -->
        <table style="width:100%;border-collapse:collapse;font-size:12px;min-width:1000px;">
          <thead>
            <tr>
              <th rowspan="2" style="border:1px solid #e0e0e0;padding:7px 10px;background:#f5f5f5;color:#888;text-align:center;vertical-align:middle;width:36px;">
                No
              </th>
              <th colspan="5" style="border:1px solid #e0e0e0;padding:7px 14px;background:#e6f4ff;color:#0958d9;font-weight:700;text-align:center;letter-spacing:0.5px;">
                \uD604\uC7AC
              </th>
              <th colspan="2" style="border:1px solid #e0e0e0;padding:7px 14px;background:#f6ffed;color:#389e0d;font-weight:700;text-align:center;letter-spacing:0.5px;">
                \uBCC0\uACBD\uC694\uCCAD
              </th>
              <th colspan="4" style="border:1px solid #e0e0e0;padding:7px 14px;background:#fff0f6;color:#c41d7f;font-weight:700;text-align:center;letter-spacing:0.5px;">
                \uACB0\uACFC
              </th>
              <th rowspan="2" style="border:1px solid #e0e0e0;padding:7px;background:#f5f5f5;text-align:center;vertical-align:middle;width:50px;">
                \uC0AD\uC81C
              </th>
            </tr>
            <tr>
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#f0f9ff;color:#1677ff;font-weight:600;white-space:nowrap;">
                \uC0C1\uD488\uBA85
              </th>
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#f0f9ff;color:#1677ff;font-weight:600;white-space:nowrap;">
                \uC635\uC158
              </th>
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#f0f9ff;color:#1677ff;font-weight:600;white-space:nowrap;width:60px;">
                \uC218\uB7C9
              </th>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ========================================== -->
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#f0f9ff;color:#1677ff;font-weight:600;white-space:nowrap;width:90px;">
                \uAE08\uC561
              </th>
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#f0f9ff;color:#1677ff;font-weight:600;white-space:nowrap;width:80px;">
                \uC0C1\uD0DC
              </th>
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#f6ffed;color:#389e0d;font-weight:600;white-space:nowrap;">
                \uC0C1\uD488\uBA85
              </th>
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#f6ffed;color:#389e0d;font-weight:600;white-space:nowrap;">
                \uC635\uC158
              </th>
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#fff0f6;color:#9e1068;font-weight:600;white-space:nowrap;width:90px;">
                \uCC98\uB9AC\uC0C1\uD0DC
              </th>
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#fff0f6;color:#9e1068;font-weight:600;white-space:nowrap;">
                \uBA54\uBAA8
              </th>
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#fff0f6;color:#9e1068;font-weight:600;white-space:nowrap;width:80px;">
                \uCC98\uB9AC\uC790
              </th>
              <th style="border:1px solid #e0e0e0;padding:6px 10px;background:#fff0f6;color:#9e1068;font-weight:600;white-space:nowrap;width:130px;">
                \uCC98\uB9AC\uC77C\uC2DC
              </th>
            </tr>
          </thead>
          <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 \uBCF8\uBB38 ========================================== -->
          <tbody>
            <tr v-for="(item, idx) in claimItems" :key="item?._id">
              <td style="border:1px solid #e0e0e0;padding:6px;text-align:center;color:#aaa;">
                {{ idx + 1 }}
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#f8fbff;">
                <input class="form-control" v-model="item.bfProdNm" style="font-size:12px;background:transparent;border-color:#91caff;" />
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#f8fbff;">
                <input class="form-control" v-model="item.bfOptionNm" style="font-size:12px;background:transparent;border-color:#91caff;" />
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#f8fbff;">
                <input class="form-control" type="number" v-model.number="item.bfQty" style="font-size:12px;text-align:right;background:transparent;border-color:#91caff;" />
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#f8fbff;">
                <input class="form-control" type="number" v-model.number="item.bfPrice" style="font-size:12px;text-align:right;background:transparent;border-color:#91caff;" />
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#f8fbff;">
                <input class="form-control" v-model="item.bfStatus" style="font-size:12px;background:transparent;border-color:#91caff;" />
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#f6ffed;">
                <input class="form-control" v-model="item.chgProdNm" placeholder="\uBCC0\uACBD \uD6C4 \uC0C1\uD488\uBA85" style="font-size:12px;background:transparent;border-color:#95de64;" />
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#f6ffed;">
                <input class="form-control" v-model="item.chgOptionNm" placeholder="\uBCC0\uACBD \uD6C4 \uC635\uC158" style="font-size:12px;background:transparent;border-color:#95de64;" />
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#fff5fb;">
                <select class="form-control" v-model="item.afStatus" style="font-size:12px;background:transparent;border-color:#ffadd2;">
                  <option v-for="s in cfStatusOptions" :key="Math.random()">
                    {{ s }}
                  </option>
                </select>
              </td>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ========================================== -->
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#fff5fb;">
                <input class="form-control" v-model="item.afMemo" style="font-size:12px;background:transparent;border-color:#ffadd2;" />
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#fff5fb;">
                <input class="form-control" v-model="item.afAdmin" style="font-size:12px;background:transparent;border-color:#ffadd2;" placeholder="\uCC98\uB9AC\uC790" />
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px 6px;background:#fff5fb;">
                <input class="form-control" v-model="item.afDate" style="font-size:12px;background:transparent;border-color:#ffadd2;" placeholder="2026-04-09 10:00" />
              </td>
              <td style="border:1px solid #e0e0e0;padding:4px;text-align:center;">
                <button class="btn btn-danger btn-sm" @click="handleSelectAction('claimItems-rowRemove', item._id)">
                  \uC0AD\uC81C
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else style="text-align:center;color:#aaa;padding:30px;font-size:13px;">
        \uD074\uB808\uC784 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uD074\uB808\uC784 \uD56D\uBAA9 ================================================ -->
    <!-- ===== \u25A0.\u25A0. \uCC98\uB9AC \uC815\uBCF4 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================== -->
    <div class="card" v-show="showTab('process')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
        \u2699 \uCC98\uB9AC \uC815\uBCF4
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD3FC \uC601\uC5ED (\uC870\uD68C \uC804\uC6A9 \u2014 \uD3B8\uC9D1/\uC800\uC7A5\uC740 \uC0C1\uC704 \uD074\uB808\uC784 \uC0C1\uC138\uC5D0\uC11C) ============ -->
      <bo-form-area plain-readonly readonly :columns="columns.processForm" :form="processForm" :errors="{}"
        :cols="3" :show-actions="false" />
      <div style="margin-top:10px;font-size:12px;color:#999;">
        \uD658\uBD88\uAE08\uC561 \xB7 \uD658\uBD88\uBC29\uBC95 \xB7 \uCC98\uB9AC\uBA54\uBAA8\uB294 \uC704\uCABD [\uAE30\uBCF8\uC815\uBCF4] \uD0ED\uC5D0\uC11C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
      </div>
    </div>
    <!-- ===== \u25A1.\u25A1. \uCC98\uB9AC \uC815\uBCF4 (BoFormArea \uC790\uB3D9 \uB80C\uB354) ============================== -->
    <!-- ===== \u25A0.\u25A0. \uC5F0\uAD00 \uC8FC\uBB38 ================================================= -->
    <div class="card" v-show="showTab('order')" style="margin:0;">
      <div v-if="tabMode2!=='tab'" class="dtl-tab-card-title">
        \u{1F6D2} \uC5F0\uAD00 \uC8FC\uBB38
        <span class="tab-count">
          {{ relatedOrder ? 1 : 0 }}
        </span>
      </div>
      <template v-if="relatedOrder">
        <div style="margin-bottom:12px;padding:14px;background:#f9f9f9;border-radius:8px;border:1px solid #e8e8e8;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div>
              <div style="font-size:14px;font-weight:700;margin-bottom:6px;">
                <span class="ref-link" @click="handleBtnAction('histList-orderRef', relatedOrder.orderId)">
                  {{ relatedOrder.orderId }}
                </span>
              </div>
              <div style="font-size:13px;color:#555;line-height:2;">
                <span style="color:#888;">
                  \uD68C\uC6D0
                </span>
                <span class="ref-link" style="margin:0 6px;" @click="handleBtnAction('histList-memberRef', relatedOrder.userId)">
                  {{ relatedOrder.userNm }}
                </span>
                <span style="color:#888;">
                  \uC8FC\uBB38\uC77C
                </span>
                <b style="margin-left:4px;">
                  {{ relatedOrder.orderDate }}
                </b>
                <br/>
                <span style="color:#888;">
                  \uC0C1\uD488
                </span>
                <b style="margin-left:4px;">
                  {{ relatedOrder.prodNm }}
                </b>
                <br/>
                <span style="color:#888;">
                  \uAE08\uC561
                </span>
                <b style="margin-left:4px;color:#e8587a;">
                  {{ (relatedOrder.totalPrice||0).toLocaleString() }}\uC6D0
                </b>
                &nbsp;\xB7&nbsp;
                <span style="color:#888;">
                  \uACB0\uC81C
                </span>
                <b style="margin-left:4px;">
                  {{ relatedOrder.payMethodCd }}
                </b>
                <br/>
                <span style="color:#888;">
                  \uC0C1\uD0DC
                </span>
                <span class="badge badge-blue" style="margin-left:4px;">
                  {{ relatedOrder.statusCd }}
                </span>
              </div>
            </div>
            <button class="btn btn-blue btn-sm" @click="handleBtnAction('histList-orderEdit', relatedOrder.orderId)">
              \uC8FC\uBB38 \uC218\uC815
            </button>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ============================================ -->
        <template v-if="relatedDliv">
          <div style="padding:12px 14px;background:#f0f7ff;border-radius:8px;border:1px solid #bae0ff;font-size:13px;">
            <div style="font-weight:600;color:#1677ff;margin-bottom:6px;">
              \uBC30\uC1A1 \uC815\uBCF4
            </div>
            <div style="line-height:2;color:#444;">
              <span style="color:#888;">
                \uC218\uB839\uC778
              </span>
              <b style="margin-left:4px;">
                {{ relatedDliv.receiver }}
              </b>
              &nbsp;\xB7&nbsp;
              <span style="color:#888;">
                \uBC30\uC1A1\uC9C0
              </span>
              <b style="margin-left:4px;">
                {{ relatedDliv.address }}
              </b>
              <br/>
              <span style="color:#888;">
                \uD0DD\uBC30\uC0AC
              </span>
              <b style="margin-left:4px;">
                {{ relatedDliv.courierCd }}
              </b>
              &nbsp;\xB7&nbsp;
              <span style="color:#888;">
                \uC6B4\uC1A1\uC7A5
              </span>
              <b style="margin-left:4px;">
                {{ relatedDliv.trackingNo || '-' }}
              </b>
              &nbsp;\xB7&nbsp;
              <span class="badge badge-green">
                {{ relatedDliv.statusCd }}
              </span>
            </div>
            <button class="btn btn-secondary btn-sm" style="margin-top:8px;" @click="handleBtnAction('histList-dlivEdit', relatedDliv.dlivId)">
              \uBC30\uC1A1 \uC218\uC815
            </button>
          </div>
        </template>
      </template>
      <div v-else style="text-align:center;color:#aaa;padding:30px;font-size:13px;">
        \uC5F0\uAD00 \uC8FC\uBB38 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
      </div>
    </div>
  </div>
</div>
<!-- ===== \u25A1.\u25A1. \uC5F0\uAD00 \uC8FC\uBB38 ================================================= -->
<!-- ===== \u25A1. \uD0ED \uCEE8\uD150\uCE20 =================================================== -->
`};
