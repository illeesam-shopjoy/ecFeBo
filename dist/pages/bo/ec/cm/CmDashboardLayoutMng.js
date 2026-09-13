window.CmDashboardLayoutMng={name:"CmDashboardLayoutMng",props:{navigate:{type:Function,required:!0},dtlId:{type:String,default:null}},setup(v){const{reactive:h,computed:D,onMounted:R}=Vue,{showToast:g,showConfirm:E}=window.boApp,x=window.cmDashWidgetUtil,f=h([]),d=h([]),l=h({loading:!1,saving:!1,dirty:!1}),B=h({}),a=h({dashboardId:"",layoutCols:4}),w=h({dateRangeStart:"",dateRangeEnd:""}),r=h({idx:null,overIdx:null}),s=h({on:!1,loading:!1,widgets:{}}),I=D(()=>{var t;return((t=window.boCommonFilter)==null?void 0:t.siteId)||""}),C=D(()=>f.find(t=>t.dashboardId===a.dashboardId)||null),_=(t,e)=>{if(t==="layout-dashChange")return Y(e);if(t==="layout-colsChange"){a.layoutCols=Number(e)||4,l.dirty=!0;return}if(t==="layout-save")return K();if(t==="layout-reload")return S();if(t==="sim-toggle")return U();if(t==="sim-apply")return s.on?k():void 0;if(t==="card-widthDec")return b(e,"panelWidth",-1);if(t==="card-widthInc")return b(e,"panelWidth",1);if(t==="card-heightDec")return b(e,"panelHeight",-1);if(t==="card-heightInc")return b(e,"panelHeight",1);if(t==="card-toggleUse"){const o=d[e];o&&(o.useYn=o.useYn==="Y"?"N":"Y",l.dirty=!0);return}console.warn("[handleBtnAction] unknown cmd:",t)};R(async()=>{await N();const t=v.dtlId&&f.some(e=>e.dashboardId===v.dtlId)?v.dtlId:f[0]?f[0].dashboardId:"";t&&await Y(t)});const N=async()=>{var t;try{const o=((t=(await boApiSvc.cmDashboard.getList({siteId:I.value},"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uBC30\uCE58","\uB300\uC2DC\uBCF4\uB4DC\uC870\uD68C")).data)==null?void 0:t.data)||[];f.splice(0,f.length,...o)}catch(e){g(coUtil.cofErrMsg(e,"\uC870\uD68C \uC624\uB958"),"error",0)}},Y=async t=>{a.dashboardId=t;const e=C.value;a.layoutCols=(e?e.layoutCols:4)||4,await S()},S=async()=>{var t;if(!a.dashboardId){d.splice(0,d.length);return}l.loading=!0;try{const o=(((t=(await boApiSvc.cmDashboard.getItemList({siteId:I.value,dashboardId:a.dashboardId},"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uBC30\uCE58","\uD56D\uBAA9\uC870\uD68C")).data)==null?void 0:t.data)||[]).filter(n=>n.dashboardId===a.dashboardId);o.sort((n,i)=>(n.sortOrd||0)-(i.sortOrd||0)),d.splice(0,d.length,...o.map(n=>({dashboardItemId:n.dashboardItemId,itemKey:n.itemKey,itemNm:n.itemNm,itemTypeCd:x.itemTypeOf(n),chartTypeCd:n.chartTypeCd||"bar",sortOrd:n.sortOrd||0,panelWidth:n.panelWidth||1,panelHeight:n.panelHeight||1,useYn:n.useYn||"Y",realtimeYn:n.realtimeYn||"N",series:n.series||[],optionJson:n.optionJson||null}))),l.dirty=!1,Object.keys(s.widgets).forEach(n=>delete s.widgets[n]),s.on&&await k()}catch(e){g(coUtil.cofErrMsg(e,"\uD56D\uBAA9 \uC870\uD68C \uC624\uB958"),"error",0)}finally{l.loading=!1}},U=async()=>{s.on=!s.on,s.on&&await k()},k=async()=>{s.loading=!0;const t=(w.dateRangeStart||"").replace(/-/g,""),e=(w.dateRangeEnd||"").replace(/-/g,"");try{await Promise.all(d.map(async o=>{var y;if(o.realtimeYn==="Y"){s.widgets[o.dashboardItemId]={kind:"realtime"};return}let n=o.dashboardItemId;try{const m=o.optionJson?JSON.parse(o.optionJson):null;m&&m._srcItemId&&(n=m._srcItemId)}catch{}const i={siteId:I.value,dashboardItemId:n};t&&(i.startYmd=t),e&&(i.endYmd=e),(t?!e:e)&&(delete i.startYmd,delete i.endYmd);const c=await boApiSvc.cmDashboard.getItemDataList(i,"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uBC30\uCE58","\uB370\uC774\uD130\uC870\uD68C"),u=x.filterRows(((y=c.data)==null?void 0:y.data)||[],t,e);s.widgets[o.dashboardItemId]=x.buildWidget(o,u)}))}catch(o){g(coUtil.cofErrMsg(o,"\uC2DC\uBBAC\uB808\uC774\uC158 \uB370\uC774\uD130 \uC870\uD68C \uC624\uB958"),"error",0)}finally{s.loading=!1}},K=async()=>{if(a.dashboardId&&await E("\uC800\uC7A5","\uD604\uC7AC \uBC30\uCE58\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")){l.saving=!0;try{const t=d.map((o,n)=>({dashboardItemId:o.dashboardItemId,rowStatus:"U",sortOrd:(n+1)*10,panelWidth:o.panelWidth,panelHeight:o.panelHeight,useYn:o.useYn}));t.length&&await boApiSvc.cmDashboard.itemSaveList("base",t,"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uBC30\uCE58","\uBC30\uCE58\uC800\uC7A5");const e=C.value;e&&e.layoutCols!==a.layoutCols&&(await boApiSvc.cmDashboard.update(a.dashboardId,{layoutCols:a.layoutCols},"\uB300\uC2DC\uBCF4\uB4DC\uD56D\uBAA9\uBC30\uCE58","\uC5F4\uC218\uC800\uC7A5"),e.layoutCols=a.layoutCols),g("\uBC30\uCE58\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),await S()}catch(t){g(coUtil.cofErrMsg(t,"\uC800\uC7A5 \uC624\uB958"),"error",0)}finally{l.saving=!1}}},P=(t,e)=>{r.idx=t,e.dataTransfer.effectAllowed="move";try{e.dataTransfer.setData("text/plain",String(t))}catch{}},j=t=>{r.overIdx=r.idx!==null&&t!==r.idx?t:null},J=t=>{if(r.idx!==null&&t!==r.idx){const e=d.splice(r.idx,1)[0];d.splice(t,0,e),l.dirty=!0}A()},A=()=>{r.idx=null,r.overIdx=null},z=12,$=150,F=56,W=h({idx:null});let p=null;const H=t=>{const e=L(t);return!!(e&&e.kind==="kpi")},M=t=>H(t)?F:$,G=(t,e)=>{const o=d[t];if(!o)return;e.preventDefault(),e.stopPropagation();const n=e.currentTarget.closest("[data-card]"),i=n?n.getBoundingClientRect():{width:0},c=Math.min(o.panelWidth||1,a.layoutCols),u=c>0?(i.width-(c-1)*z)/c:i.width;p={idx:t,x0:e.clientX,y0:e.clientY,w0:c,h0:o.panelHeight||1,cellW:u,rowH:M(o)},W.idx=t,window.addEventListener("mousemove",O),window.addEventListener("mouseup",T),document.body.style.userSelect="none"},O=t=>{if(!p)return;const e=d[p.idx];if(!e)return;const o=p.cellW+z,n=p.rowH+z,i=o>0?Math.round((t.clientX-p.x0)/o):0,c=n>0?Math.round((t.clientY-p.y0)/n):0,u=Math.min(a.layoutCols,Math.max(1,p.w0+i)),y=Math.min(3,Math.max(1,p.h0+c));e.panelWidth!==u&&(e.panelWidth=u,l.dirty=!0),e.panelHeight!==y&&(e.panelHeight=y,l.dirty=!0)},T=()=>{p=null,W.idx=null,window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",T),document.body.style.userSelect=""},b=(t,e,o)=>{const n=d[t];if(!n)return;const i=e==="panelWidth"?a.layoutCols:3,c=Math.min(i,Math.max(1,(n[e]||1)+o));c!==n[e]&&(n[e]=c,l.dirty=!0)},X=(t,e)=>{const o=Math.min(t.panelWidth||1,a.layoutCols),n=t.panelHeight||1,i=M(t);return{gridColumn:"span "+o,gridRow:"span "+n,minHeight:n*i+(n-1)*12+"px",opacity:t.useYn==="Y"?1:.45,outline:r.overIdx===e?"2px dashed #e8587a":r.idx===e?"2px solid #c7d2fe":"none"}},q=t=>(t.panelHeight||1)*150+((t.panelHeight||1)-1)*12-44+"px",L=t=>s.widgets[t.dashboardItemId]||null;return{dashboards:f,cards:d,uiState:l,codes:B,layout:a,cond:w,dragState:r,simState:s,cfSelectedDash:C,util:x,handleBtnAction:_,onCardDragStart:P,onCardDragOver:j,onCardDrop:J,onCardDragEnd:A,fnCardStyle:X,fnChartHeight:q,fnWidget:L,fnIsKpi:H,resizeState:W,onResizeStart:G}},template:`
<bo-page title="\uB300\uC2DC\uBCF4\uB4DC \uD56D\uBAA9\uBC30\uCE58"
  desc-summary="\uD56D\uBAA9 \uCE74\uB4DC\uB97C \uB4DC\uB798\uADF8\uD574 \uBC30\uCE58 \uC21C\uC11C\uB97C \uBC14\uAFB8\uACE0, \uD3ED/\uB192\uC774/\uD45C\uC2DC \uC5EC\uBD80\uB97C \uC870\uC815\uD569\uB2C8\uB2E4. \uC2DC\uBBAC\uB808\uC774\uC158\uC73C\uB85C \uC2E4\uB370\uC774\uD130 \uBBF8\uB9AC\uBCF4\uAE30\uB97C \uD655\uC778\uD55C \uB4A4 \uC800\uC7A5\uD558\uC138\uC694.">
  <!-- ===== \u25A0. \uC870\uAC74/\uB3C4\uAD6C \uC601\uC5ED =============================================== -->
  <bo-container>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px 12px;">
      <span style="font-size:12px;font-weight:700;color:#555;">\uB300\uC2DC\uBCF4\uB4DC</span>
      <select :value="layout.dashboardId" class="form-control" style="width:auto;min-width:220px;font-size:12px;height:30px;"
        @change="handleBtnAction('layout-dashChange', $event.target.value)">
        <option v-for="d in dashboards" :key="d.dashboardId" :value="d.dashboardId">
          {{ (d.uiCompNm || '').indexOf('MY:') === 0 ? '\u{1F464} ' : '' }}{{ d.dashboardNm }} ({{ d.uiCompNm }})
        </option>
      </select>
      <span style="font-size:12px;font-weight:700;color:#555;margin-left:8px;">\uC5F4\uC218</span>
      <select :value="layout.layoutCols" class="form-control" style="width:auto;font-size:12px;height:30px;"
        @change="handleBtnAction('layout-colsChange', $event.target.value)">
        <option v-for="n in [2,3,4,5,6]" :key="n" :value="n">{{ n }}\uC5F4</option>
      </select>
      <span style="font-size:12px;font-weight:700;color:#555;margin-left:8px;">\uAE30\uAC04\uC870\uAC74</span>
      <input type="date" v-model="cond.dateRangeStart" class="form-control" style="width:135px;font-size:12px;height:30px;" />
      <span style="color:#999;">~</span>
      <input type="date" v-model="cond.dateRangeEnd" class="form-control" style="width:135px;font-size:12px;height:30px;" />
      <button class="btn btn_apply" @click="handleBtnAction('sim-apply')">\uC870\uAC74 \uC801\uC6A9</button>
      <span style="flex:1;"></span>
      <button class="btn" :class="simState.on ? 'btn_confirm' : 'btn_preview'" @click="handleBtnAction('sim-toggle')">
        {{ simState.on ? '\u23F9 \uC2DC\uBBAC\uB808\uC774\uC158 \uB044\uAE30' : '\u25B6 \uC2DC\uBBAC\uB808\uC774\uC158' }}
      </button>
      <button class="btn btn_reset" @click="handleBtnAction('layout-reload')">\u21BA \uB418\uB3CC\uB9AC\uAE30</button>
      <button class="btn btn_save" :disabled="uiState.saving" @click="handleBtnAction('layout-save')">
        {{ uiState.dirty ? '\u{1F4BE} \uC800\uC7A5 *' : '\u{1F4BE} \uC800\uC7A5' }}
      </button>
    </div>
  </bo-container>
  <!-- ===== \u25A0. \uBC30\uCE58 \uCE94\uBC84\uC2A4 ================================================== -->
  <bo-container :title="'\uBC30\uCE58 \uCE94\uBC84\uC2A4' + (cfSelectedDash ? ' \u2014 ' + cfSelectedDash.dashboardNm : '')"
    :count-text="'\uD56D\uBAA9 ' + cards.length + '\uAC1C' + (simState.loading ? ' \xB7 \uB370\uC774\uD130 \uC870\uD68C\uC911\u2026' : '')">
    <div v-if="!cards.length" style="padding:48px;text-align:center;color:#aaa;">
      {{ uiState.loading ? '\uBD88\uB7EC\uC624\uB294 \uC911...' : '\uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uB300\uC2DC\uBCF4\uB4DC \uD56D\uBAA9\uAD00\uB9AC\uC5D0\uC11C \uD56D\uBAA9\uC744 \uB4F1\uB85D\uD558\uC138\uC694.' }}
    </div>
    <div v-else :style="{ display:'grid', gridTemplateColumns:'repeat(' + layout.layoutCols + ', 1fr)', gap:'12px', padding:'12px' }">
      <div v-for="(c, idx) in cards" :key="c.dashboardItemId" data-card
        :style="fnCardStyle(c, idx)"
        style="position:relative;background:#fff;border:1px solid #eee;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,.05);display:flex;flex-direction:column;overflow:hidden;"
        @dragover.prevent="onCardDragOver(idx)" @drop.prevent="onCardDrop(idx)">
        <!-- \uCE74\uB4DC \uD5E4\uB354 (\uB4DC\uB798\uADF8 \uD578\uB4E4) -->
        <div draggable="true" @dragstart="onCardDragStart(idx, $event)" @dragend="onCardDragEnd"
          style="flex-shrink:0;display:flex;align-items:center;gap:6px;padding:8px 10px;background:#fafbfc;border-bottom:1px solid #f0f0f0;cursor:grab;">
          <span style="color:#bbb;font-size:12px;">\u283F</span>
          <!-- KPI \uCE74\uB4DC\uB294 \uBCF8\uBB38\uC774 \uC544\uC774\uCF58+\uB77C\uBCA8\uC744 \uC774\uBBF8 \uBCF4\uC5EC\uC918 \uD5E4\uB354 \uC81C\uBAA9\uC774 \uC911\uBCF5 \u2192 \uC0DD\uB7B5
               (\uC774 \uD654\uBA74\uC740 \uD56D\uC0C1 \uD3B8\uC9D1 \uC0C1\uD0DC\uB77C \uB4DC\uB798\uADF8/\uD06C\uAE30\uC870\uC808 \uCEE8\uD2B8\uB864 \uB54C\uBB38\uC5D0 \uD5E4\uB354 \uC790\uCCB4\uB294 \uB0A8\uAE34\uB2E4) -->
          <template v-if="!fnIsKpi(c)">
            <span style="font-size:12px;">{{ util.itemTypeIcon(util.itemTypeOf(c)) }}</span>
            <span style="font-size:12px;font-weight:700;color:#444;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ c.itemNm }}</span>
          </template>
          <span v-if="c.realtimeYn === 'Y'" class="badge badge-red" style="font-size:9px;">\uC2E4\uC2DC\uAC04</span>
          <span style="flex:1;"></span>
          <span style="font-size:10px;color:#aaa;font-family:monospace;">{{ c.panelWidth }}\xD7{{ c.panelHeight }}</span>
          <button title="\uD3ED \uC904\uC774\uAE30"   style="border:none;background:none;cursor:pointer;font-size:11px;color:#888;padding:1px 3px;" @click="handleBtnAction('card-widthDec', idx)">\u25C0</button>
          <button title="\uD3ED \uB298\uB9AC\uAE30"   style="border:none;background:none;cursor:pointer;font-size:11px;color:#888;padding:1px 3px;" @click="handleBtnAction('card-widthInc', idx)">\u25B6</button>
          <button title="\uB192\uC774 \uC904\uC774\uAE30" style="border:none;background:none;cursor:pointer;font-size:11px;color:#888;padding:1px 3px;" @click="handleBtnAction('card-heightDec', idx)">\u25B2</button>
          <button title="\uB192\uC774 \uB298\uB9AC\uAE30" style="border:none;background:none;cursor:pointer;font-size:11px;color:#888;padding:1px 3px;" @click="handleBtnAction('card-heightInc', idx)">\u25BC</button>
          <button :title="c.useYn === 'Y' ? '\uC228\uAE30\uAE30' : '\uD45C\uC2DC\uD558\uAE30'" style="border:none;background:none;cursor:pointer;font-size:12px;padding:1px 3px;"
            @click="handleBtnAction('card-toggleUse', idx)">{{ c.useYn === 'Y' ? '\u{1F441}' : '\u{1F6AB}' }}</button>
        </div>
        <!-- \uC6B0\uD558\uB2E8 \uB9AC\uC0AC\uC774\uC988 \uD578\uB4E4 (\uB4DC\uB798\uADF8\uB85C \uD3ED/\uB192\uC774 \uC870\uC808) -->
        <div :title="'\uD06C\uAE30 \uC870\uC808 (' + c.panelWidth + '\xD7' + c.panelHeight + ')'"
          @mousedown="onResizeStart(idx, $event)"
          :style="{ background: resizeState.idx === idx ? '#e8587a' : 'transparent' }"
          style="position:absolute;right:0;bottom:0;width:18px;height:18px;cursor:nwse-resize;z-index:2;
                 border-bottom-right-radius:10px;display:flex;align-items:flex-end;justify-content:flex-end;padding:2px;">
          <span :style="{ color: resizeState.idx === idx ? '#fff' : '#c7c7c7' }"
            style="font-size:10px;line-height:1;user-select:none;">\u25E2</span>
        </div>
        <!-- \uCE74\uB4DC \uBCF8\uBB38 -->
        <div style="flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden;">
          <template v-if="simState.on">
            <template v-if="fnWidget(c)">
              <div v-if="fnWidget(c).kind === 'kpi'"
                :style="{ background: util.kpiColorOf(idx).bg }"
                style="display:flex;align-items:center;gap:8px;width:100%;height:100%;padding:10px 12px;box-sizing:border-box;">
                <div style="font-size:18px;width:32px;height:32px;border-radius:7px;background:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  {{ util.itemTypeIcon(util.itemTypeOf(c)) }}
                </div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:10px;color:#666;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ fnWidget(c).label }}</div>
                  <div :style="{ color: util.kpiColorOf(idx).color }" style="font-size:14px;font-weight:800;margin-top:2px;">
                    {{ fnWidget(c).value }}
                    <span v-if="fnWidget(c).delta !== null" :style="{ fontSize:'10px', marginLeft:'4px', fontWeight:700, color: fnWidget(c).delta >= 0 ? '#10b981' : '#ef4444' }">
                      {{ fnWidget(c).delta >= 0 ? '\u25B2' : '\u25BC' }} {{ Math.abs(fnWidget(c).delta).toLocaleString() }}
                    </span>
                  </div>
                </div>
              </div>
              <div v-else-if="fnWidget(c).kind === 'realtime'" style="text-align:center;color:#aaa;font-size:11px;">
                \u{1F534} \uC2E4\uC2DC\uAC04 \uD56D\uBAA9<br/>\uC2DC\uBBAC\uB808\uC774\uC158 \uBBF8\uC9C0\uC6D0
              </div>
              <div v-else-if="fnWidget(c).kind === 'empty'" style="text-align:center;color:#ccc;font-size:11px;">\uB370\uC774\uD130 \uC5C6\uC74C</div>
              <div v-else-if="fnWidget(c).kind === 'table'"
                style="width:100%;height:100%;overflow:auto;align-self:stretch;">
                <table class="bo-table bo-table-narrow" style="font-size:11px;">
                  <thead><tr>
                    <th v-for="col in fnWidget(c).columns" :key="col.key"
                      :style="{ textAlign: col.align }" style="padding:4px 6px;">{{ col.label }}</th>
                  </tr></thead>
                  <tbody>
                    <tr v-for="(r, ri) in fnWidget(c).rows" :key="ri">
                      <td v-for="(cell, ci) in r" :key="ci"
                        :style="{ textAlign: fnWidget(c).columns[ci].align }"
                        style="padding:3px 6px;white-space:nowrap;">{{ cell }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <co-echart v-else-if="fnWidget(c).kind === 'chart'" :option="fnWidget(c).option" :height="fnChartHeight(c)" style="width:100%;" />
            </template>
            <div v-else style="color:#ccc;font-size:11px;">\u2026</div>
          </template>
          <div v-else style="text-align:center;color:#d5d9e0;">
            <div style="font-size:30px;">{{ util.itemTypeIcon(util.itemTypeOf(c)) }}</div>
            <div style="font-size:10px;margin-top:4px;">{{ util.itemTypeLabel(util.itemTypeOf(c)) }} \xB7 {{ c.itemKey }}</div>
          </div>
        </div>
      </div>
    </div>
  </bo-container>
</bo-page>
`};
