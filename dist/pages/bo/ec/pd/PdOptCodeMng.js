window.PdOptCodeMng={name:"PdOptCodeMng",setup(){var L,I;const{ref:X,reactive:v,computed:f,onMounted:A,nextTick:Z}=Vue,w="PROD_OPT_CATEGORY",b=((I=(L=window.sfGetBoAppStore)==null?void 0:L.call(window))==null?void 0:I.svBoSiteId)||"",t=v({node:null}),c=v(new Set),r=v({loading:!1,checkAll:!1,focusedIdx:null}),a=v([]);let S=-1;const y=["codeLabel","codeValue","sortOrd","useYn","codeOpt1","codeRemark","parentCodeValue"],_=f(()=>a.filter(e=>e.codeLevel===1?e._row_status!=="D":!1).sort((e,l)=>(e.sortOrd||0)-(l.sortOrd||0))),z=e=>a.filter(l=>l.codeLevel===2&&l.parentCodeValue===e?l._row_status!=="D":!1).sort((l,o)=>(l.sortOrd||0)-(o.sortOrd||0)),E=e=>a.filter(l=>l.codeLevel===3&&l.parentCodeValue===e?l._row_status!=="D":!1),h=f(()=>t.node?t.node.codeLevel+1:1),g=f(()=>{const e=t.node?t.node.codeValue:null,l=h.value;return a.filter(o=>o.codeLevel===l?(o.parentCodeValue||null)===e:!1).sort((o,s)=>(o.sortOrd||0)-(s.sortOrd||0))}),G=f(()=>h.value!==3?[]:a.filter(e=>e.codeLevel===2?e._row_status!=="D":!1).map(e=>({value:e.codeValue,label:e.codeLabel+" ("+e.codeValue+")"}))),N=f(()=>["1\uB2E8(\uCE74\uD14C\uACE0\uB9AC)","2\uB2E8(\uC720\uD615)","3\uB2E8(\uAC12)"][h.value-1]||""),Y=f(()=>{if(!t.node)return null;if(t.node.codeLevel===1)return[{label:"Root",code:null},{label:t.node.codeLabel,code:t.node.codeValue}];if(t.node.codeLevel===2){const e=a.find(l=>l.codeValue===t.node.parentCodeValue?l.codeLevel===1:!1);return[{label:"Root",code:null},{label:(e==null?void 0:e.codeLabel)||t.node.parentCodeValue,code:(e==null?void 0:e.codeValue)||t.node.parentCodeValue},{label:t.node.codeLabel,code:t.node.codeValue}]}return null}),B=f(()=>{const e=[{key:"codeValue",label:"\uCF54\uB4DC\uAC12",edit:"text",mono:!0,style:"min-width:160px;"},{key:"codeLabel",label:"\uCF54\uB4DC\uBA85",edit:"text",style:"min-width:140px;"},{key:"sortOrd",label:"\uC21C\uC11C",edit:"number",style:"width:60px;",align:"center"},{key:"useYn",label:"\uC0AC\uC6A9",edit:"select",style:"width:60px;",align:"center",options:[{value:"Y",label:"Y"},{value:"N",label:"N"}]},{key:"codeOpt1",label:"\uC2A4\uD0C0\uC77C(opt1)",edit:"text",mono:!0,style:"width:140px;",placeholder:"#hex or class"},{key:"codeRemark",label:"\uBE44\uACE0",edit:"text"}];return h.value===3&&e.splice(2,0,{key:"parentCodeValue",label:"\uC0C1\uC704(2\uB2E8)",edit:"select",style:"width:160px;",nullable:!0,nullLabel:"-- \uC5C6\uC74C --",options:()=>G.value}),e}),D=(e,l={})=>{if(e==="tree-root"){t.node=null,r.focusedIdx=null;return}if(e==="tree-expand-all"){_.value.forEach(o=>c.add(o.codeValue));return}if(e==="tree-collapse-all"){c.clear();return}if(e==="tree-toggle"){c.has(l)?c.delete(l):c.add(l);return}if(e==="grid-add")return K();if(e==="grid-save")return q();if(e==="grid-deleteChecked")return W();if(e==="grid-cancelChecked")return F();if(e==="grid-excel")return Q();console.warn("[handleBtnAction] unknown cmd:",e)},P=(e,l={})=>{if(e==="tree-select")return U(l);if(e==="grid-reorder")return H();console.warn("[handleSelectAction] unknown cmd:",e)},T=(e,l,o)=>{if(e==="grid-cellChange")return j(o);console.warn("[handleGridCellAction] unknown cmd:",e)},M=e=>({...e,codeLevel:e.codeLevel||1,parentCodeValue:e.parentCodeValue||null,sortOrd:Number(e.sortOrd)||0,useYn:e.useYn||"Y",codeOpt1:e.codeOpt1||"",codeRemark:e.codeRemark||"",_row_status:"N",_row_check:!1,_row_org:{codeLabel:e.codeLabel,codeValue:e.codeValue,parentCodeValue:e.parentCodeValue||null,sortOrd:Number(e.sortOrd)||0,useYn:e.useYn||"Y",codeOpt1:e.codeOpt1||"",codeRemark:e.codeRemark||""}}),m=async()=>{var e;r.loading=!0;try{const o=((e=(await boApiSvc.syCode.getAll({codeGrp:w,siteId:b,pageSize:1e4},"\uC0C1\uD488\uC635\uC158\uCF54\uB4DC","\uBAA9\uB85D\uC870\uD68C")).data)==null?void 0:e.data)||[];a.splice(0,a.length,...o.map(M)),t.node&&(a.find(d=>d.codeValue===t.node.codeValue?d.codeLevel===t.node.codeLevel:!1)?t.node.codeLevel===2&&t.node.parentCodeValue&&c.add(t.node.parentCodeValue):t.node=null)}catch(l){console.error("[handleLoad]",l),u("\uB85C\uB4DC \uC2E4\uD328: "+coUtil.cofErrMsg(l),"error",0)}finally{r.loading=!1}};A(m);const u=(e,l="success",o=3500)=>{const s=document.getElementById("popup-toast");s&&(s.textContent=e,s.className="popup-toast "+(l==="error"?"toast-error":"toast-success"),s.style.display="block",clearTimeout(s._tid),o>0&&(s._tid=setTimeout(()=>{s.style.display="none"},o)))},k=(e,l)=>new Promise(o=>o(window.confirm(e+`

`+l))),U=e=>{const l=t.node&&t.node.codeValue===e.codeValue?t.node.codeLevel===e.codeLevel:!1;t.node=l?null:e,!l&&e.codeLevel===1&&c.add(e.codeValue),!l&&e.codeLevel===2&&e.parentCodeValue&&c.add(e.parentCodeValue),r.focusedIdx=null},j=e=>{e._row_status==="I"||e._row_status==="D"||(e._row_status=y.some(l=>String(e[l]||"")!==String((e._row_org||{})[l]||""))?"U":"N")},K=()=>{const e=t.node?t.node.codeValue:null,l=h.value,o=a.filter(p=>p.codeLevel===l?(p.parentCodeValue||null)===e:!1).reduce((p,x)=>Math.max(p,Number(x.sortOrd)||0),0),s=r.focusedIdx!==null?r.focusedIdx+1:g.value.length,d={_tmpId:S--,codeId:null,siteId:b,codeGrp:w,codeValue:"",codeLabel:"",codeLevel:l,parentCodeValue:e,sortOrd:o+1,useYn:"Y",codeOpt1:"",codeRemark:"",_row_status:"I",_row_check:!1,_row_org:null},i=g.value;if(s>=i.length)a.push(d);else{const p=i[s],x=a.indexOf(p);x>-1?a.splice(x,0,d):a.push(d)}r.focusedIdx=s},V=e=>{if(e._row_status==="I"){const l=a.indexOf(e);l>-1&&a.splice(l,1)}else e._row_status="D"},O=e=>{if(e._row_status==="I"){const l=a.indexOf(e);l>-1&&a.splice(l,1)}else e._row_org&&(y.forEach(l=>{e[l]=e._row_org[l]}),e._row_status="N")},F=()=>{[...g.value].filter(e=>e._row_check).forEach(O)},W=async()=>{const e=g.value.filter(o=>o._row_check);if(!e.length){u("\uC120\uD0DD\uB41C \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}await k("\uC77C\uAD04\uC0AD\uC81C",e.length+"\uAC1C \uD56D\uBAA9\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&e.forEach(V)},q=async()=>{var i,p,x,R;const e=a.filter(n=>n._row_status==="I"),l=a.filter(n=>n._row_status==="U"),o=a.filter(n=>n._row_status==="D");if(!e.length&&!l.length&&!o.length){u("\uBCC0\uACBD\uB41C \uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.","error");return}for(const n of[...e,...l])if(!((i=n.codeValue)!=null&&i.trim())||!((p=n.codeLabel)!=null&&p.trim())){u("\uCF54\uB4DC\uAC12\uACFC \uCF54\uB4DC\uBA85\uC740 \uD544\uC218\uC785\uB2C8\uB2E4.","error");return}if(!await k("\uC800\uC7A5",(e.length?"\uB4F1\uB85D "+e.length+"\uAC74  ":"")+(l.length?"\uC218\uC815 "+l.length+"\uAC74  ":"")+(o.length?"\uC0AD\uC81C "+o.length+"\uAC74":"")+`
\uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))return;const d=[...e,...l,...o].map(n=>({codeId:n.codeId||null,siteId:b,codeGrp:w,codeValue:n.codeValue,codeLabel:n.codeLabel,codeLevel:n.codeLevel||1,parentCodeValue:n.parentCodeValue||null,sortOrd:Number(n.sortOrd)||0,useYn:n.useYn||"Y",codeOpt1:n.codeOpt1||"",codeRemark:n.codeRemark||"",rowStatus:n._row_status==="N"?"I":n._row_status}));r.loading=!0;try{await boApiSvc.syCode.saveList("base",d,"\uC0C1\uD488\uC635\uC158\uCF54\uB4DC\uAD00\uB9AC","\uC800\uC7A5"),coUtil.cofInvalidateCodeGrps([...new Set(d.map(n=>n.codeGrp).filter(Boolean))]),u("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),await m()}catch(n){u(((R=(x=n.response)==null?void 0:x.data)==null?void 0:R.message)||"\uC800\uC7A5 \uC2E4\uD328","error",0)}finally{r.loading=!1}},H=async()=>{var o,s;const e=g.value,l=[];if(e.forEach((d,i)=>{(d.sortOrd||0)!==i+1&&(d.sortOrd=i+1,d._row_status!=="I"&&d.codeId&&(l.push({codeId:d.codeId,sortOrd:i+1,rowStatus:"U"}),d._row_status==="N"&&(d._row_status="U")))}),l.length)try{await boApiSvc.syCode.saveList("order",l,"\uC0C1\uD488\uC635\uC158\uCF54\uB4DC\uAD00\uB9AC","\uC21C\uC11C\uBCC0\uACBD"),coUtil.cofInvalidateCodeGrps([...new Set(l.map(d=>d.codeGrp).filter(Boolean))]),u("\uC21C\uC11C\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),await m()}catch(d){u(((s=(o=d.response)==null?void 0:o.data)==null?void 0:s.message)||"\uC21C\uC11C \uC800\uC7A5 \uC2E4\uD328","error",0)}},C=v({show:!1}),J=()=>({codeGrp:w,siteId:b}),Q=()=>{C.show=!0};return{sel:t,uiState:r,treeExpanded:c,allRows:a,gridRows:g,gridColumns:B,excelModal:C,buildExcelParams:J,level1Nodes:_,level2Of:z,level3Of:E,levelLabel:N,breadcrumb:Y,childLevel:h,handleBtnAction:D,handleSelectAction:P,handleGridCellAction:T,deleteRow:V,cancelRow:O,fnLvColor:e=>({1:"#e8587a",2:"#1677ff",3:"#3ba87a"})[e]||"#999"}},template:`
<div style="display:flex;flex-direction:column;height:100vh;background:#f5f6fa;">

  <!-- \u25BC \uD1A0\uC2A4\uD2B8 -->
  <div id="popup-toast" style="display:none;position:fixed;bottom:24px;right:24px;z-index:9999;padding:10px 18px;border-radius:8px;font-size:13px;box-shadow:0 4px 16px rgba(0,0,0,.18);"></div>

  <!-- \u25BC \uD398\uC774\uC9C0 \uD5E4\uB354 -->
  <div style="padding:11px 20px 9px;background:#fff;border-bottom:1px solid #eee;flex-shrink:0;display:flex;align-items:baseline;gap:10px;">
    <span class="list-title" style="font-size:16px;">\uC0C1\uD488 \uC635\uC158 \uCF54\uB4DC \uAD00\uB9AC</span>
    <span style="font-size:12px;color:#bbb;">PROD_OPT_CATEGORY \uACF5\uD1B5\uCF54\uB4DC \uACC4\uCE35 \uAD00\uB9AC</span>
  </div>

  <!-- \u25BC \uBCF8\uBB38: \uD2B8\uB9AC + \uADF8\uB9AC\uB4DC -->
  <div class="bo-2col" style="flex:1;overflow:hidden;margin:12px;gap:12px;align-items:flex-start;">

    <!-- \u25A0 \uC88C\uCE21 \uD2B8\uB9AC \uD328\uB110 -->
    <div class="card" style="min-width:210px;max-width:230px;overflow:hidden;display:flex;flex-direction:column;height:calc(100vh - 94px);">

      <!-- \uD2B8\uB9AC \uD5E4\uB354 -->
      <div class="toolbar" style="padding:6px 10px;border-bottom:1px solid #f0f0f0;flex-shrink:0;">
        <span class="list-title" style="font-size:12px;flex:1;">\uCF54\uB4DC \uD2B8\uB9AC</span>
        <button class="btn btn-xs btn-secondary" style="padding:2px 5px;font-size:13px;line-height:1;"
          @click="handleBtnAction('tree-expand-all')" title="\uC804\uCCB4\uD3BC\uCE58\uAE30">\u229E</button>
        <button class="btn btn-xs btn-secondary" style="padding:2px 5px;font-size:13px;line-height:1;"
          @click="handleBtnAction('tree-collapse-all')" title="\uC804\uCCB4\uC811\uAE30">\u229F</button>
      </div>

      <!-- \uD2B8\uB9AC \uBCF8\uBB38 -->
      <div style="flex:1;overflow-y:auto;padding:4px 0;user-select:none;">

        <!-- Root \uB178\uB4DC -->
        <div class="tree-node"
          :class="{ 'tree-node-selected': !sel.node }"
          style="padding:7px 10px;display:flex;align-items:center;gap:5px;cursor:pointer;"
          @click="handleBtnAction('tree-root')">
          <span style="font-size:14px;line-height:1;color:#f59e0b;">\u{1F5C2}</span>
          <span style="font-weight:700;font-size:13px;flex:1;">Root</span>
          <span class="badge badge-gray" style="font-size:10px;">{{ level1Nodes.length }}</span>
        </div>

        <!-- 1\uB808\uBCA8 \uB178\uB4DC (\uD3BC\uCE58\uAE30/\uC811\uAE30) -->
        <template v-for="n1 in level1Nodes" :key="n1.codeValue">
          <!-- 1\uB808\uBCA8 \uD589 -->
          <div class="tree-node"
            :class="{ 'tree-node-selected': sel.node ? (sel.node.codeValue === n1.codeValue ? sel.node.codeLevel === 1 : false) : false }"
            style="padding:5px 8px 5px 8px;display:flex;align-items:center;gap:4px;cursor:pointer;">
            <!-- \uD1A0\uAE00 \uC544\uC774\uCF58 (\uD3F4\uB354 \uD3BC\uCE68/\uC811\uD798) -->
            <span style="width:18px;height:18px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px;color:#999;"
              @click.stop="handleBtnAction('tree-toggle', n1.codeValue)">
              {{ treeExpanded.has(n1.codeValue) ? '\u25BC' : '\u25B6' }}
            </span>
            <!-- \uD3F4\uB354 \uC544\uC774\uCF58 + \uB77C\uBCA8 (\uD074\uB9AD \uC2DC \uC120\uD0DD) -->
            <span style="font-size:13px;line-height:1;flex-shrink:0;"
              @click="handleSelectAction('tree-select', n1)">
              {{ treeExpanded.has(n1.codeValue) ? '\u{1F4C2}' : '\u{1F4C1}' }}
            </span>
            <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;"
              @click="handleSelectAction('tree-select', n1)">{{ n1.codeLabel }}</span>
            <span class="badge badge-gray" style="font-size:10px;flex-shrink:0;"
              @click="handleSelectAction('tree-select', n1)">{{ level2Of(n1.codeValue).length }}</span>
          </div>

          <!-- 2\uB808\uBCA8 \u2014 treeExpanded\uC5D0 \uC788\uC744 \uB54C \uD3BC\uCE68 -->
          <template v-if="treeExpanded.has(n1.codeValue)">
            <div v-for="n2 in level2Of(n1.codeValue)" :key="n2.codeValue"
              class="tree-node"
              :class="{ 'tree-node-selected tree-node-lv2': sel.node ? (sel.node.codeValue === n2.codeValue ? sel.node.codeLevel === 2 : false) : false,
                        'tree-node-lv2-plain':               sel.node ? (sel.node.codeValue === n2.codeValue ? sel.node.codeLevel !== 2 : true) : true }"
              style="padding:4px 8px 4px 30px;display:flex;align-items:center;gap:4px;cursor:pointer;"
              @click="handleSelectAction('tree-select', n2)">
              <span style="font-size:12px;line-height:1;flex-shrink:0;color:#aaa;">\u{1F4C4}</span>
              <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;">{{ n2.codeLabel }}</span>
              <span v-if="level3Of(n2.codeValue).length > 0" class="badge badge-gray" style="font-size:10px;flex-shrink:0;">{{ level3Of(n2.codeValue).length }}</span>
            </div>
            <div v-if="!level2Of(n1.codeValue).length"
              style="padding:3px 8px 3px 30px;font-size:11px;color:#ccc;font-style:italic;">
              \uD558\uC704 \uC5C6\uC74C
            </div>
          </template>
        </template>

        <div v-if="!level1Nodes.length" style="padding:20px;color:#bbb;font-size:12px;text-align:center;">
          \uCF54\uB4DC \uC5C6\uC74C
        </div>
      </div>
    </div>

    <!-- \u25A0 \uC6B0\uCE21 \uADF8\uB9AC\uB4DC \uC601\uC5ED -->
    <div style="flex:1;overflow:hidden;display:flex;flex-direction:column;gap:8px;min-width:0;">

      <!-- \uBE0C\uB808\uB4DC\uD06C\uB7FC \uBC14 -->
      <div class="card" style="padding:7px 14px;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <!-- \uC88C: \uACBD\uB85C \uB77C\uBCA8 -->
        <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
          <span style="font-weight:700;color:#e8587a;font-size:13px;">Root</span>
          <template v-if="breadcrumb">
            <template v-for="(crumb, i) in breadcrumb" :key="i">
              <span v-if="crumb.code !== null" style="color:#ccc;font-size:12px;">\u203A</span>
              <span v-if="crumb.code !== null"
                :style="i === breadcrumb.length - 1 ? 'font-weight:700;color:#e8587a;font-size:13px;' : 'color:#555;font-size:12px;'">
                {{ crumb.label }}
              </span>
            </template>
          </template>
          <span style="color:#999;font-size:11px;margin-left:4px;">
            \u25B6 <b>{{ levelLabel }}</b> \uAD00\uB9AC
            <span style="margin-left:4px;">({{ gridRows.filter(r => r._row_status !== 'D').length }}\uAC74)</span>
          </span>
        </div>
        <!-- \uC6B0: \uCF54\uB4DC \uACBD\uB85C (code1 > code2) -->
        <div v-if="breadcrumb" style="display:flex;align-items:center;gap:3px;font-family:monospace;font-size:11px;color:#aaa;flex-shrink:0;">
          <template v-for="(crumb, i) in breadcrumb" :key="'c' + i">
            <span v-if="crumb.code !== null">
              <span v-if="i > 0" style="margin:0 3px;color:#ddd;">&gt;</span>
              <span style="background:#f3f4f6;padding:1px 6px;border-radius:4px;color:#666;">{{ crumb.code }}</span>
            </span>
          </template>
        </div>
      </div>

      <!-- CRUD \uADF8\uB9AC\uB4DC -->
      <bo-grid-crud
        :columns="gridColumns"
        :rows="gridRows"
        row-key="codeId"
        :list-title="levelLabel + ' \uBAA9\uB85D'"
        :draggable="true"
        :show-export="true"
        :show-row-id="false"
        :show-row-status="false"
        :max-height="'calc(100vh - 190px)'"
        :empty-text="'[+ \uD589\uCD94\uAC00] \uBC84\uD2BC\uC73C\uB85C \uCD94\uAC00\uD558\uC138\uC694.'"
        v-model:focusedIdx="uiState.focusedIdx"
        v-model:checkAll="uiState.checkAll"
        @add="handleBtnAction('grid-add')"
        @save="handleBtnAction('grid-save')"
        @delete-checked="handleBtnAction('grid-deleteChecked')"
        @cancel-checked="handleBtnAction('grid-cancelChecked')"
        @export="handleBtnAction('grid-excel')"
        @reorder="handleSelectAction('grid-reorder')"
        grid-id="grid-cellChange"
        @cell-change="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)">
        <!-- codeOpt1 \uC0C9\uC0C1 \uBBF8\uB9AC\uBCF4\uAE30 -->
        <template #cell-codeOpt1="{ row }">
          <td>
            <div style="display:flex;align-items:center;gap:4px;">
              <span v-if="row.codeOpt1 ? row.codeOpt1.startsWith('#') : false"
                :style="'display:inline-block;width:13px;height:13px;border-radius:3px;border:1px solid #ddd;background:' + row.codeOpt1 + ';flex-shrink:0;'">
              </span>
              <input class="grid-input" v-model="row.codeOpt1" placeholder="#hex or class"
                :disabled="row._row_status === 'D'"
                @input="handleGridCellAction('grid-cellChange', 'codeOpt1', row)"
                style="flex:1;font-family:monospace;font-size:12px;" />
            </div>
          </td>
        </template>
        <!-- \uAD00\uB9AC \uBC84\uD2BC -->
        <template #row-actions="{ row, idx }">
          <bo-row-cancel-delete :row="row"
            @cancel="cancelRow(row)"
            @delete="deleteRow(row)" />
        </template>
      </bo-grid-crud>
      <bo-excel-down-modal :show="excelModal.show" domain="code" area-nm="\uC0C1\uD488\uC635\uC158\uCF54\uB4DC"
        :columns="gridColumns" ui-nm="\uC0C1\uD488\uC635\uC158\uCF54\uB4DC\uAD00\uB9AC" :params="buildExcelParams()"
        @close="excelModal.show = false" />
    </div>

  </div>
</div>`};
