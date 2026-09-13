window.DispX02Area={name:"DispX02Area",props:{params:{type:Object,required:!0},dispDataset:{type:Object,default:()=>({displays:[],codes:[]})},dispOpt:{type:Object,default:()=>({layout:"auto",showHeader:!0,showBadges:!0,mode:"card",showDesc:!0})},areaItem:{type:Object,required:!0}},setup(p){var i,o;const{reactive:d}=Vue,s=d({loading:!1,error:""}),n=d({}),r=((i=p.dispOpt)==null?void 0:i.mode)||"card",l=((o=p.dispOpt)==null?void 0:o.showDesc)!==!1,c=(e,t={})=>{console.warn("[handleBtnAction] unknown cmd:",e)},x=(e,t={})=>{console.warn("[handleSelectAction] unknown cmd:",e)},f={image_banner:"\uC774\uBBF8\uC9C0 \uBC30\uB108",product_slider:"\uC0C1\uD488 \uC2AC\uB77C\uC774\uB354",product:"\uC0C1\uD488",cond_product:"\uC870\uAC74\uC0C1\uD488",chart_bar:"\uCC28\uD2B8(Bar)",chart_line:"\uCC28\uD2B8(Line)",chart_pie:"\uCC28\uD2B8(Pie)",text_banner:"\uD14D\uC2A4\uD2B8 \uBC30\uB108",info_card:"\uC815\uBCF4\uCE74\uB4DC",popup:"\uD31D\uC5C5",file:"\uD30C\uC77C",file_list:"\uD30C\uC77C\uBAA9\uB85D",coupon:"\uCFE0\uD3F0",html_editor:"HTML \uC5D0\uB514\uD130",event_banner:"\uC774\uBCA4\uD2B8",cache_banner:"\uCE90\uC26C",widget_embed:"\uC704\uC82F",textarea:"\uD14D\uC2A4\uD2B8 \uC601\uC5ED",markdown:"Markdown",barcode:"\uBC14\uCF54\uB4DC",qrcode:"QR\uCF54\uB4DC",barcode_qrcode:"\uBC14\uCF54\uB4DC+QR",video_player:"\uB3D9\uC601\uC0C1",countdown:"\uCE74\uC6B4\uD2B8\uB2E4\uC6B4",payment_widget:"\uACB0\uC81C\uC704\uC82F",approval_widget:"\uC804\uC790\uACB0\uC7AC",map_widget:"\uC9C0\uB3C4"},g={image_banner:"\u{1F5BC}",product_slider:"\u{1F6D2}",product:"\u{1F4E6}",cond_product:"\u{1F50D}",chart_bar:"\u{1F4CA}",chart_line:"\u{1F4C8}",chart_pie:"\u{1F967}",text_banner:"\u{1F4DD}",info_card:"\u2139\uFE0F",popup:"\u{1F4AC}",file:"\u{1F4CE}",file_list:"\u{1F4C1}",coupon:"\u{1F39F}",html_editor:"\u{1F4C4}",event_banner:"\u{1F389}",cache_banner:"\u{1F4B0}",widget_embed:"\u{1F9E9}",textarea:"\u{1F4CB}",markdown:"\u{1F4D1}",barcode:"\u{1F516}",qrcode:"\u{1F4F1}",barcode_qrcode:"\u{1F516}",video_player:"\u25B6\uFE0F",countdown:"\u23F1",payment_widget:"\u{1F4B3}",approval_widget:"\u2705",map_widget:"\u{1F5FA}"},v=e=>f[e]||e||"-",b=e=>g[e]||"\u25AA",y=e=>e.rows&&e.rows.length?e.rows.map(t=>t.widgetType):e.widgetType?[e.widgetType]:[],a=e=>!e.dispStartDt&&!e.dispEndDt?"\uAE30\uAC04 \uC5C6\uC74C":`${e.dispStartDt||"\u221E"} ~ ${e.dispEndDt||"\u221E"}`,u=e=>e==="\uD65C\uC131"?"badge-green":"badge-gray",h=e=>String(e||0).padStart(4,"0"),m=e=>[`#${e.dispId} ${e.name}`,`\uC0C1\uD0DC: ${e.status}`,`\uB178\uCD9C\uC870\uAC74: ${e.condition||"\uD56D\uC0C1 \uD45C\uC2DC"}`,e.authRequired?`\uC778\uC99D: \uD544\uC694${e.authGrade?" / \uB4F1\uAE09: "+e.authGrade+"\u2191":""}`:"\uC778\uC99D: \uBD88\uD544\uC694",`\uAE30\uAC04: ${a(e)}`,e.htmlDesc?`\uC124\uBA85: ${e.htmlDesc}`:""].filter(Boolean).join(`
`);return{uiState:s,codes:n,mode:r,showDesc:l,coUtil,handleBtnAction:c,handleSelectAction:x,wLabel:v,wIcon:b,padId:h,panelWidgetTypes:y,periodText:a,statusCls:u,panelTitle:m}},template:`
<div class="disp-area" style="margin-bottom:28px;">
  <!-- ===== \u25A0. \uC601\uC5ED \uD5E4\uB354 =================================================== -->
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:linear-gradient(90deg,#2d2d2d,#444);color:#fff;border-radius:8px 8px 0 0;">
    <span v-if="showDesc" style="font-size:9px;background:rgba(99,179,237,.35);color:#bee3f8;border:1px solid rgba(99,179,237,.4);border-radius:4px;padding:1px 5px;letter-spacing:.3px;flex-shrink:0;">
      DispX02Area
    </span>
    <code style="font-size:11px;background:rgba(255,255,255,.15);padding:2px 8px;border-radius:4px;letter-spacing:.5px;">
      {{ areaItem.code }}
    </code>
      <span v-if="showDesc" style="font-size:14px;font-weight:700;">
        {{ areaItem.label || areaItem.code }}
      </span>
      <span style="margin-left:auto;font-size:11px;opacity:.6;">
        \uD328\uB110 {{ areaItem.panels.length }}\uAC1C
      </span>
    </div>
    <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
    <!-- ===== \u25A0. \uC601\uC5ED \uD0C0\uC774\uD2C0 ================================================== -->
    <!-- ===== \u25A0. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
    <div v-if="coUtil.cofAnd(areaItem.info, areaItem.info?.titleYn==='Y', areaItem.info?.title)" style="padding:12px 16px 8px;font-size:16px;font-weight:700;color:#222;border-bottom:2px solid #222;margin-bottom:16px;">
    {{ areaItem.info.title }}
  </div>
  <!-- ===== \u25A1. \uC870\uAC74\uBD80 \uC601\uC5ED ================================================== -->
  <!-- ===== \u25A0. \uC601\uC5ED\uCF54\uBA58\uD2B8 (htmlDesc) \u2014 \uC785\uB825 \uC2DC \uC2E4\uC2DC\uAC04 \uBC18\uC601 ========================= -->
  <div v-if="coUtil.cofAnd(areaItem.info, areaItem.info?.htmlDesc)" style="padding:12px 16px;background:#fff;border:1px solid #e0e0e0;border-top:none;font-size:13px;color:#333;line-height:1.6;" v-html="areaItem.info.htmlDesc">
  </div>
  <!-- ===== \u25A1. \uC601\uC5ED\uCF54\uBA58\uD2B8 ================================================== -->
  <!-- ===== \u25A0. \uB9AC\uC2A4\uD2B8 \uBAA8\uB4DC ================================================== -->
  <div v-if="mode==='list'"
    style="background:#fff;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;">
    <div v-if="areaItem.panels.length===0" style="color:#ccc;font-size:13px;padding:16px;text-align:center;">
      \uC774 \uC601\uC5ED\uC5D0 \uB4F1\uB85D\uB41C \uD328\uB110\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
    <!-- ===== \u25A0.\u25A0. \uD14C\uC774\uBE14 =================================================== -->
    <table v-else style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead>
        <tr style="background:#f5f5f5;border-bottom:1px solid #e8e8e8;">
          <th style="padding:6px 10px;text-align:center;width:50px;font-weight:600;color:#666;">
            #ID
          </th>
          <th style="padding:6px 10px;font-weight:600;color:#666;">
            \uD328\uB110\uBA85
          </th>
          <th style="padding:6px 10px;text-align:center;width:60px;font-weight:600;color:#666;">
            \uC0C1\uD0DC
          </th>
          <th style="padding:6px 10px;text-align:center;width:110px;font-weight:600;color:#666;">
            \uB178\uCD9C\uC870\uAC74
          </th>
          <th style="padding:6px 10px;text-align:center;width:50px;font-weight:600;color:#666;">
            \uC778\uC99D
          </th>
          <th style="padding:6px 10px;text-align:center;width:70px;font-weight:600;color:#666;">
            \uB4F1\uAE09
          </th>
          <th style="padding:6px 10px;font-weight:600;color:#666;width:200px;">
            \uC804\uC2DC\uAE30\uAC04
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in areaItem.panels" :key="p.dispId" style="border-bottom:1px solid #f0f0f0;cursor:default;" :title="panelTitle(p)">
          <td style="padding:6px 10px;text-align:center;color:#aaa;">
            #{{ padId(p.dispId) }}
          </td>
          <td style="padding:6px 10px;font-weight:600;color:#222;">
            {{ p.name }}
          </td>
          <td style="padding:6px 10px;text-align:center;">
            <span class="badge" :class="statusCls(p.status)" style="font-size:10px;">
              {{ p.status }}
            </span>
          </td>
          <td style="padding:6px 10px;text-align:center;">
            <span style="font-size:10px;background:#e3f2fd;color:#1565c0;border-radius:8px;padding:1px 7px;white-space:nowrap;">
              {{ p.condition || '\uD56D\uC0C1 \uD45C\uC2DC' }}
            </span>
          </td>
          <td style="padding:6px 10px;text-align:center;">
            <span v-if="p.authRequired" style="font-size:10px;background:#fff3e0;color:#e65100;border-radius:8px;padding:1px 7px;">
              \uD544\uC694
            </span>
            <span v-else style="color:#ccc;font-size:11px;">
              -
            </span>
          </td>
          <td style="padding:6px 10px;text-align:center;">
            <span v-if="p.authGrade" style="font-size:10px;background:#f3e5f5;color:#6a1b9a;border-radius:8px;padding:1px 7px;">
              {{ p.authGrade }}\u2191
            </span>
            <span v-else style="color:#ccc;font-size:11px;">
              -
            </span>
          </td>
          <td style="padding:6px 10px;color:#888;font-size:11px;">
            <template v-if="p.dispStartDt || p.dispEndDt">
              {{ p.dispStartDt || '\u221E' }} ~ {{ p.dispEndDt || '\u221E' }}
            </template>
            <span v-else style="color:#ccc;">
              \uAE30\uAC04 \uC5C6\uC74C
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- ===== \u25A1.\u25A1. \uD14C\uC774\uBE14 =================================================== -->
  <!-- ===== \u25A1. \uB9AC\uC2A4\uD2B8 \uBAA8\uB4DC ================================================== -->
  <!-- ===== \u25A0. \uCE74\uB4DC \uBAA8\uB4DC =================================================== -->
  <div v-else-if="mode==='card'"
    style="display:flex;flex-wrap:wrap;gap:12px;padding:18px 14px 14px;background:#f8f8f8;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;min-height:80px;">
    <div v-if="areaItem.panels.length===0" style="color:#ccc;font-size:13px;padding:16px;width:100%;text-align:center;">
      \uC774 \uC601\uC5ED\uC5D0 \uB4F1\uB85D\uB41C \uD328\uB110\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
    </div>
    <div v-for="p in areaItem.panels" :key="p.dispId"
      :title="panelTitle(p)"
      style="position:relative;background:#fff;border:1px solid #e4e4e4;border-radius:10px;padding:14px 16px;width:230px;min-width:190px;box-shadow:0 1px 4px rgba(0,0,0,.06);display:flex;flex-direction:column;gap:6px;margin-top:6px;cursor:default;">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uC808\uB300 \uBC30\uC9C0: DispX03Panel ================================= -->
      <span v-if="showDesc" style="position:absolute;top:-9px;left:8px;font-size:7px;background:#e8f5e9;color:#2e7d32;border:1px solid #a5d6a7;border-radius:3px;padding:0 4px;line-height:16px;white-space:nowrap;">
        DispX03Panel #{{ padId(p.dispId) }}
      </span>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD328\uB110ID + \uC0C1\uD0DC + \uC774\uB984 ====================================== -->
      <div>
        <div style="display:flex;align-items:center;gap:4px;margin-bottom:3px;">
          <span style="font-size:10px;background:#eeeeee;color:#666;border-radius:4px;padding:1px 5px;flex-shrink:0;">
            #{{ p.dispId }}
          </span>
          <span class="badge" :class="statusCls(p.status)" style="font-size:10px;flex-shrink:0;">
            {{ p.status }}
          </span>
        </div>
        <span style="font-size:13px;font-weight:700;color:#222;line-height:1.35;display:block;word-break:break-all;">
          {{ p.name }}
        </span>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0. \uB178\uCD9C\uC870\uAC74 / \uC778\uC99D \uBC30\uC9C0 ======================================== -->
      <div style="display:flex;gap:5px;flex-wrap:wrap;">
        <span style="font-size:10px;background:#e3f2fd;color:#1565c0;border-radius:8px;padding:1px 7px;">
          {{ p.condition || '\uD56D\uC0C1 \uD45C\uC2DC' }}
        </span>
        <span v-if="p.authRequired" style="font-size:10px;background:#fff3e0;color:#e65100;border-radius:8px;padding:1px 7px;">
          \uC778\uC99D
        </span>
        <span v-if="coUtil.cofAnd(p.authRequired, p.authGrade)" style="font-size:10px;background:#f3e5f5;color:#6a1b9a;border-radius:8px;padding:1px 7px;">
        {{ p.authGrade }}\u2191
      </span>
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC804\uC2DC \uAE30\uAC04 =============================================== -->
    <div style="font-size:10px;color:#aaa;">
      \u{1F4C5} {{ periodText(p) }}
    </div>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC124\uBA85 ================================================== -->
    <div v-if="p.htmlDesc" style="font-size:10px;color:#999;border-top:1px solid #f0f0f0;padding-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
      {{ p.htmlDesc }}
    </div>
  </div>
</div>
<!-- ===== \u25A1. \uCE74\uB4DC \uBAA8\uB4DC =================================================== -->
<!-- ===== \u25A0. \uC0C1\uC138\uC815\uBCF4 \uBAA8\uB4DC (\uBAA8\uB4E0 \uD328\uB110 \uD3BC\uCE68) ====================================== -->
<div v-else-if="mode==='expand'"
    style="padding:14px;background:#f0f0f0;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;display:flex;flex-direction:column;gap:10px;">
  <div v-if="areaItem.panels.length===0" style="color:#ccc;font-size:13px;padding:16px;text-align:center;">
    \uC774 \uC601\uC5ED\uC5D0 \uB4F1\uB85D\uB41C \uD328\uB110\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
  </div>
  <!-- ===== \u25A0.\u25A0. \u2550\u2550\u2550\u2550 \uC124\uBA85\uBCF4\uAE30 ON : 3\uC5F4 \uADF8\uB9AC\uB4DC \u2550\u2550\u2550\u2550 ============================ -->
  <template v-if="showDesc">
    <div v-for="p in areaItem.panels" :key="p.dispId"
        style="display:grid;grid-template-columns:190px 1fr 220px;border:1px solid #d8d8d8;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.06);">
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. 1\uC5F4: \uD328\uB110 \uC81C\uBAA9 ========================================= -->
      <div style="background:#e8f0fe;padding:14px 12px;border-right:1px solid #d0d8f0;display:flex;flex-direction:column;gap:6px;">
        <div style="font-size:9px;background:#c5d5f8;color:#1a3a8a;border-radius:3px;padding:1px 6px;width:fit-content;letter-spacing:.3px;">
          DispX03Panel
        </div>
        <div style="font-size:10px;color:#666;background:#fff;border-radius:4px;padding:1px 6px;width:fit-content;">
          #{{ padId(p.dispId) }}
        </div>
        <div style="font-size:13px;font-weight:700;color:#1a237e;line-height:1.4;word-break:break-all;">
          {{ p.name }}
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px;">
          <span class="badge" :class="statusCls(p.status)" style="font-size:10px;">
            {{ p.status }}
          </span>
          <span style="font-size:10px;background:#dce8ff;color:#1565c0;border-radius:8px;padding:1px 7px;white-space:nowrap;">
            {{ p.condition || '\uD56D\uC0C1 \uD45C\uC2DC' }}
          </span>
          <span v-if="p.authRequired" style="font-size:10px;background:#fff3e0;color:#e65100;border-radius:8px;padding:1px 7px;">
            \uC778\uC99D
          </span>
          <span v-if="p.authGrade" style="font-size:10px;background:#f3e5f5;color:#6a1b9a;border-radius:8px;padding:1px 7px;">
            {{ p.authGrade }}\u2191
          </span>
        </div>
        <div style="font-size:10px;color:#7986cb;">
          \u{1F4C5} {{ periodText(p) }}
        </div>
        <div v-if="p.htmlDesc" style="font-size:10px;color:#5c6bc0;border-top:1px solid #c5d5f8;padding-top:5px;margin-top:2px;">
          {{ p.htmlDesc }}
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. 2\uC5F4: \uC704\uC82F \uCEE8\uD150\uCE20 (DispX03Panel\uC5D0 \uC704\uC784) ===================== -->
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ================================================ -->
      <div style="background:#fff;display:flex;flex-direction:column;min-width:0;">
        <div style="font-size:10px;font-weight:600;color:#888;padding:6px 12px;background:#fafafa;border-bottom:1px solid #f0f0f0;letter-spacing:.3px;">
          \uC704\uC82F \uCEE8\uD150\uCE20
        </div>
        <div style="padding:10px 12px;">
          <disp-x03-panel :params="params" :disp-dataset="dispDataset" :disp-opt="dispOpt" :panel-item="p" />
        </div>
      </div>
      <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0. 3\uC5F4: \uC18C\uC2A4\uAD6C\uC870 ========================================== -->
      <div style="background:#1e1e2e;padding:12px 14px;border-left:1px solid #111;font-family:'Consolas','Courier New',monospace;font-size:11px;line-height:1.7;overflow:auto;">
        <div style="font-size:9px;color:#6272a4;margin-bottom:6px;letter-spacing:.3px;">
          \uC18C\uC2A4 \uAD6C\uC870
        </div>
        <div style="color:#6272a4;">
          &lt;!-- #{{ padId(p.dispId) }} {{ p.name }} --&gt;
        </div>
        <div style="color:#68d391;">
          &lt;DispX03Panel
        </div>
        <div style="color:#f8f8f2;padding-left:12px;">
          area=
          <span style="color:#f1fa8c;">
            "{{ p.area }}"
          </span>
        </div>
        <div style="color:#f8f8f2;padding-left:12px;">
          status=
          <span style="color:#f1fa8c;">
            "{{ p.status }}"
          </span>
        </div>
        <div style="color:#f8f8f2;padding-left:12px;">
          condition=
          <span style="color:#f1fa8c;">
            "{{ p.condition||'\uD56D\uC0C1 \uD45C\uC2DC' }}"
          </span>
          <span style="color:#68d391;">
            &gt;
          </span>
        </div>
        <div v-for="(r, ri) in (p.rows?.length ? p.rows : [p])" :key="ri" style="padding-left:10px;margin-top:2px;">
        <span style="color:#6272a4;">
          &#47;&#47; \uC704\uC82F{{ ri+1 }}
        </span>
        <br>
        <span style="color:#f6ad55;">
          &lt;DispX04Widget
        </span>
        <span style="color:#f8f8f2;">
          widgetType=
        </span>
        <span style="color:#f1fa8c;">
          "{{ r.widgetType }}"
        </span>
        <span v-if="coUtil.cofAnd(r.clickAction, r.clickAction!=='none')">
        clickAction=
        <span style="color:#f1fa8c;">
          "{{ r.clickAction }}"
        </span>
      </span>
      <span style="color:#f6ad55;">
        /&gt;
      </span>
    </div>
    <div style="color:#68d391;">
      &lt;/DispX03Panel&gt;
    </div>
  </div>
</div>
</template>
<!-- ===== \u25A1.\u25A1. \u2550\u2550\u2550\u2550 \uC124\uBA85\uBCF4\uAE30 ON : 3\uC5F4 \uADF8\uB9AC\uB4DC \u2550\u2550\u2550\u2550 ============================ -->
<!-- ===== \u25A0.\u25A0. \u2550\u2550\u2550\u2550 \uC124\uBA85\uBCF4\uAE30 OFF : \uD328\uB110 \uCEE8\uD150\uCE20\uB9CC \uB098\uC5F4 \u2550\u2550\u2550\u2550 ======================= -->
<!-- ===== \u25A0.\u25A0. \uC601\uC5ED ==================================================== -->
<template v-else>
  <disp-x03-panel
        v-for="p in areaItem.panels" :key="p.dispId"
        :params="params"
        :disp-dataset="dispDataset"
        :disp-opt="dispOpt"
        :panel-item="p"
        />
</template>
</div>
<!-- ===== \u25A1.\u25A1. \uC601\uC5ED ==================================================== -->
<!-- ===== \u25A1. \uC0C1\uC138\uC815\uBCF4 \uBAA8\uB4DC (\uBAA8\uB4E0 \uD328\uB110 \uD3BC\uCE68) ====================================== -->
<!-- ===== \u25A0. \uC601\uC5ED-\uC704\uC82F \uC0C1\uC138\uBCF4\uAE30 \uBAA8\uB4DC (area_detail) ============================= -->
<div v-else-if="mode==='area_detail'"
    style="background:#fff;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;">
  <div v-if="areaItem.panels.length===0" style="color:#ccc;font-size:13px;padding:16px;text-align:center;">
    \uC774 \uC601\uC5ED\uC5D0 \uB4F1\uB85D\uB41C \uD328\uB110\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
  </div>
  <template v-else>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC124\uBA85\uBCF4\uAE30 ON: \uD328\uB110 \uCD9C\uCC98 \uBC30\uC9C0 + \uC704\uC82F \uCEE8\uD150\uCE20 ========================== -->
    <template v-if="showDesc">
      <div v-for="p in areaItem.panels" :key="p.dispId"
          style="display:grid;grid-template-columns:160px 1fr;border-bottom:1px solid #f0f0f0;">
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC88C: \uD328\uB110 \uCD9C\uCC98 ======================================== -->
        <div style="background:#f8f9ff;padding:10px 12px;border-right:1px solid #eaecf5;display:flex;flex-direction:column;gap:4px;justify-content:center;">
          <div style="font-size:9px;background:#c5d5f8;color:#1a3a8a;border-radius:3px;padding:1px 5px;width:fit-content;">
            DispX03Panel #{{ padId(p.dispId) }}
          </div>
          <div style="font-size:11px;font-weight:600;color:#3949ab;line-height:1.3;">
            {{ p.name }}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:3px;">
            <span class="badge" :class="statusCls(p.status)" style="font-size:9px;">
              {{ p.status }}
            </span>
            <span style="font-size:9px;background:#dce8ff;color:#1565c0;border-radius:6px;padding:0 5px;">
              {{ p.condition || '\uD56D\uC0C1 \uD45C\uC2DC' }}
            </span>
          </div>
        </div>
        <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC6B0: \uD328\uB110 \uCEE8\uD150\uCE20 (DispX03Panel\uC5D0 \uC704\uC784) ==================== -->
        <div style="padding:12px 16px;">
          <disp-x03-panel :params="params" :disp-dataset="dispDataset" :disp-opt="dispOpt" :panel-item="p" />
        </div>
      </div>
    </template>
    <!-- ===== \u25A0.\u25A0.\u25A0. \uC124\uBA85\uBCF4\uAE30 OFF: \uD328\uB110 \uCEE8\uD150\uCE20\uB9CC \uCB49 ================================= -->
    <template v-else>
      <div v-for="p in areaItem.panels" :key="p.dispId"
          style="padding:12px 16px;border-bottom:1px solid #f5f5f5;">
        <disp-x03-panel :params="params" :disp-dataset="dispDataset" :disp-opt="dispOpt" :panel-item="p" />
      </div>
    </template>
  </template>
</div>
</div>
<!-- ===== \u25A1. \uC601\uC5ED-\uC704\uC82F \uC0C1\uC138\uBCF4\uAE30 \uBAA8\uB4DC (area_detail) ============================= -->
`};
