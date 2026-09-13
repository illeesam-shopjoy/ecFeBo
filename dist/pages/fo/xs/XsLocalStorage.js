window.XsLocalStorage={name:"XsLocalStorage",props:{navigate:{type:Function,required:!0},showToast:{type:Function,default:()=>{}}},setup(i){const{reactive:s,computed:p,onMounted:u,onUnmounted:g,watch:W}=Vue,o=s({loading:!1,error:null,filterKey:"",editingKey:null,editingValue:"",valueColWidth:65,startX:0,startWidth:0}),x=(e,t={})=>{if(e==="lsItems-reload")return n();if(e==="lsItems-clearAll")return k();if(e==="lsItems-editCancel")return v();console.warn("[handleBtnAction] unknown cmd:",e)},h=(e,t={})=>{if(e==="lsItems-rowCopy")return b(t);if(e==="lsItems-rowEdit")return y(t.key,t.value);if(e==="lsItems-rowSave")return w(t);if(e==="lsItems-rowDelete")return m(t);if(e==="lsItems-resize")return z(t);console.warn("[handleSelectAction] unknown cmd:",e)},a=s([]),r=s({isResizing:!1}),n=()=>{const e=[];for(let t=0;t<localStorage.length;t++){const l=localStorage.key(t),c=localStorage.getItem(l);e.push({key:l,value:c})}e.sort((t,l)=>t.key.localeCompare(l.key)),a.splice(0,a.length,...e)},f=p(()=>{const e=Array.isArray(a)?a:[];return o.filterKey?e.filter(t=>t.key.toLowerCase().includes(o.filterKey.toLowerCase())):e}),b=e=>{try{navigator.clipboard.writeText(e),i.showToast("\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(t){i.showToast("\uBCF5\uC0AC \uC2E4\uD328: "+t.message,"error")}},y=(e,t)=>{o.editingKey=e,o.editingValue=t},w=e=>{if(e)try{localStorage.setItem(e,o.editingValue),i.showToast("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),o.editingKey=null,o.editingValue="",n()}catch(t){i.showToast("\uC800\uC7A5 \uC2E4\uD328: "+t.message,"error")}},v=()=>{o.editingKey=null,o.editingValue=""},m=e=>{if(confirm(`'${e}'\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{localStorage.removeItem(e),i.showToast("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),n()}catch(t){i.showToast("\uC0AD\uC81C \uC2E4\uD328: "+t.message,"error")}},k=()=>{if(confirm("localStorage\uC758 \uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{localStorage.clear(),i.showToast("\uBAA8\uB4E0 \uB370\uC774\uD130\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),n()}catch(e){i.showToast("\uC0AD\uC81C \uC2E4\uD328: "+e.message,"error")}},S=e=>{try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}},z=e=>{r.isResizing=!0,o.startX=e.clientX,o.startWidth=o.valueColWidth},A=e=>{if(!r.isResizing)return;const t=e.clientX-o.startX,l=Math.max(30,o.startWidth+t/window.innerWidth*100),I=100-25-10;o.valueColWidth=Math.min(I,l)},d=()=>{r.isResizing=!1};return u(async()=>{window.addEventListener("mouseup",d)}),g(()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",d)}),n(),{uiStateGlobal:o,uiState:r,handleBtnAction:x,handleSelectAction:h,cfFilteredData:f,parseValue:S}},template:`
<div style="padding: 20px;">
  <!-- ===== \u25A0. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <div style="margin-bottom: 24px;">
    <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #1a1a1a;">
      localStorage \uC815\uBCF4 \uAD00\uB9AC
    </h1>
    <p style="margin: 0; font-size: 13px; color: #666;">
      \uBE0C\uB77C\uC6B0\uC800 \uB85C\uCEEC \uC800\uC7A5\uC18C \uB370\uC774\uD130 \uC870\uD68C \uBC0F \uD3B8\uC9D1
    </p>
  </div>
  <!-- ===== \u25A1. \uBCF8\uBB38 \uC601\uC5ED =================================================== -->
  <!-- ===== \u25A0. \uAC80\uC0C9 \uBC0F \uC561\uC158 \uBC14 =============================================== -->
  <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <div style="display: flex; gap: 16px; align-items: flex-end;">
      <div style="flex: 1;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 13px; color: #333;">
          \uD0A4 \uAC80\uC0C9
        </label>
        <input
          v-model="uiStateGlobal.filterKey"
          type="text"
          placeholder="\uD0A4\uB85C \uAC80\uC0C9..."
          style="width: 100%; padding: 10px 12px; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 13px; background: white; color: #333; transition: all 0.2s;">
      </div>
      <div style="display: flex; gap: 8px;">
        <button @click="handleBtnAction('lsItems-reload')" style="padding: 10px 16px; font-size: 12px; border: 1px solid #e5e7eb; background: white; color: #666; cursor: pointer; border-radius: 6px; font-weight: 500; transition: all 0.2s;">
          \u{1F504} \uC0C8\uB85C\uACE0\uCE68
        </button>
        <button @click="handleBtnAction('lsItems-clearAll')" style="padding: 10px 16px; font-size: 12px; border: 1px solid #ffb3c1; background: #fff5f7; color: #d63384; cursor: pointer; border-radius: 6px; font-weight: 500; transition: all 0.2s;">
          \u{1F5D1}\uFE0F \uC804\uCCB4 \uC0AD\uC81C
        </button>
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uAC80\uC0C9 \uBC0F \uC561\uC158 \uBC14 =============================================== -->
  <!-- ===== \u25A0. \uD14C\uC774\uBE14 ===================================================== -->
  <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
    <div style="overflow-x: auto; position: relative; user-select: none;" :style="{ cursor: uiState.isResizing ? 'col-resize' : 'auto' }">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 ================================================= -->
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #fafafa; border-bottom: 1px solid #e5e7eb;">
            <th style="width: 25%; text-align: left; padding: 12px 16px; font-weight: 600; font-size: 13px; color: #666;">
              Key
            </th>
            <th :style="{ width: uiStateGlobal.valueColWidth + '%', textAlign: 'left', padding: '12px 16px', fontWeight: '600', fontSize: '13px', color: '#666', position: 'relative' }">
              Value
              <div
                @mousedown="handleSelectAction('lsItems-resize', $event)"
                style="position: absolute; right: -5px; top: 0; width: 10px; height: 100%; cursor: col-resize; background: transparent; display: flex; align-items: center;">
                <div style="width: 1px; height: 80%; background: #ff6b9d; opacity: 0; transition: opacity 0.2s;">
                </div>
              </div>
            </th>
            <th :style="{ width: (100 - 25 - uiStateGlobal.valueColWidth) + '%', textAlign: 'center', padding: '12px 16px', fontWeight: '600', fontSize: '13px', color: '#666' }">
              \uC791\uC5C5
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cfFilteredData" :key="item.key" style="border-bottom: 1px solid #e5e7eb; transition: all 0.2s;">
            <td style="padding: 12px 16px; word-break: break-all; font-family: 'Monaco', 'Menlo', monospace; font-size: 12px; color: #333;">
              {{ item.key }}
            </td>
            <td style="padding: 12px 16px;">
              <template v-if="uiStateGlobal.editingKey === item.key">
                <textarea
                  :value="uiStateGlobal.editingValue"
                  @input="uiStateGlobal.editingValue = $event.target.value"
                  style="width: 100%; height: 80px; padding: 10px; border: 1.5px solid #ff6b9d; border-radius: 4px; font-family: 'Monaco', 'Menlo', monospace; font-size: 12px; resize: vertical; color: #333;">
                </textarea>
                  <div style="display: flex; gap: 8px; margin-top: 8px;">
                    <button @click="handleSelectAction('lsItems-rowSave', item.key)" style="flex: 1; padding: 6px 12px; font-size: 12px; border: none; background: linear-gradient(135deg, #ff6b9d, #c44569); color: white; cursor: pointer; border-radius: 4px; font-weight: 600; transition: all 0.2s;">
                      \uC800\uC7A5
                    </button>
                    <button @click="handleBtnAction('lsItems-editCancel')" style="flex: 1; padding: 6px 12px; font-size: 12px; border: 1px solid #e5e7eb; background: white; color: #666; cursor: pointer; border-radius: 4px; font-weight: 500; transition: all 0.2s;">
                      \uCDE8\uC18C
                    </button>
                  </div>
                </template>
                <template v-else>
                  <div style="max-height: 60px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 4px; font-family: 'Monaco', 'Menlo', monospace; font-size: 11px; white-space: pre-wrap; word-break: break-all; border: 1px solid #e5e7eb; color: #333;">
                    {{ parseValue(item.value) }}
                  </div>
                </template>
              </td>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================ -->
              <td style="padding: 12px 16px; text-align: center; white-space: nowrap;">
                <button @click="handleSelectAction('lsItems-rowCopy', item.value)" style="padding: 6px 10px; font-size: 11px; border: 1px solid #e5e7eb; background: white; color: #666; cursor: pointer; border-radius: 4px; font-weight: 500; margin-right: 4px; transition: all 0.2s;">
                  \uBCF5\uC0AC
                </button>
                <button v-if="uiStateGlobal.editingKey !== item.key" class="btn_row_edit" @click="handleSelectAction('lsItems-rowEdit', { key: item.key, value: item.value })" style="margin-right: 4px;">
                  \uC218\uC815
                </button>
                <button class="btn_row_delete" @click="handleSelectAction('lsItems-rowDelete', item.key)">
                  \uC0AD\uC81C
                </button>
              </td>
            </tr>
            <tr v-if="cfFilteredData.length === 0">
              <td colspan="3" style="text-align: center; padding: 40px; color: #999; font-size: 13px;">
                \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- ===== \u25A0.\u25A0. \uD478\uD130: \uD56D\uBAA9 \uC218 ============================================== -->
      <div style="padding: 12px 16px; border-top: 1px solid #e5e7eb; background: #fafafa; font-size: 12px; color: #666;">
        \uCD1D
        <strong>
          {{ cfFilteredData.length }}
        </strong>
        \uAC1C \uD56D\uBAA9
      </div>
    </div>
  </div>
  <!-- ===== \u25A1.\u25A1. \uD478\uD130: \uD56D\uBAA9 \uC218 ============================================== -->
  <!-- ===== \u25A1. \uD14C\uC774\uBE14 ===================================================== -->
`};
