window.ZdLocalStorage={name:"ZdLocalStorage",props:{navigate:{type:Function,required:!0},adminData:{type:Object,default:()=>({})}},setup(V){const{ref:W,reactive:a,computed:u,onMounted:g,onUnmounted:y}=Vue,n=window.boApp.showToast,r=window.boApp.showConfirm,o=a([]),i=a({isResizing:!1,filterKey:"",editingKey:null,editingValue:"",valueColWidth:65,startX:0,startWidth:0}),h=(e,t={})=>{if(e==="lsItems-reload")return s();if(e==="lsItems-clearAll")return S();if(e==="lsItems-rowCopy")return f(t);if(e==="lsItems-rowEdit")return x(t.key,t.value);if(e==="lsItems-rowSave")return b(t);if(e==="lsItems-rowCancel")return w();if(e==="lsItems-rowDelete")return k(t);console.warn("[handleBtnAction] unknown cmd:",e)},m=(e,t={})=>{if(e==="lsItems-colResize")return z(t);console.warn("[handleSelectAction] unknown cmd:",e)},s=()=>{const e=[];for(let t=0;t<localStorage.length;t++){const l=localStorage.key(t),p=localStorage.getItem(l);e.push({key:l,value:p})}o.splice(0,o.length,...e.sort((t,l)=>t.key.localeCompare(l.key)))},v=u(()=>i.filterKey?o.filter(e=>e.key.toLowerCase().includes(i.filterKey.toLowerCase())):o),f=e=>{try{navigator.clipboard.writeText(e),n("\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success")}catch(t){n("\uBCF5\uC0AC \uC2E4\uD328: "+t.message,"error")}},x=(e,t)=>{i.editingKey=e,i.editingValue=t},b=e=>{if(e)try{localStorage.setItem(e,i.editingValue),n("\uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),i.editingKey=null,i.editingValue="",s()}catch(t){n("\uC800\uC7A5 \uC2E4\uD328: "+t.message,"error")}},w=()=>{i.editingKey=null,i.editingValue=""},k=async e=>{if(await r("\uC0AD\uC81C",`'${e}'\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`))try{localStorage.removeItem(e),n("\uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),s()}catch(l){n("\uC0AD\uC81C \uC2E4\uD328: "+l.message,"error")}},S=async()=>{if(await r("\uC804\uCCB4 \uC0AD\uC81C","localStorage\uC758 \uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))try{localStorage.clear(),n("\uBAA8\uB4E0 \uB370\uC774\uD130\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","success"),s()}catch(t){n("\uC0AD\uC81C \uC2E4\uD328: "+t.message,"error")}},I=e=>{try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}},z=e=>{i.isResizing=!0,i.startX=e.clientX,i.startWidth=i.valueColWidth},d=e=>{if(!i.isResizing)return;const t=e.clientX-i.startX,l=Math.max(30,i.startWidth+t/window.innerWidth*100),C=100-25-10;i.valueColWidth=Math.min(C,l)},c=()=>{i.isResizing=!1};g(async()=>{window.addEventListener("mousemove",d),window.addEventListener("mouseup",c)}),y(()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",c)}),s();const A=Vue.toRef(i,"isResizing");return{lsItems:o,uiState:i,handleBtnAction:h,handleSelectAction:m,cfFilteredItems:v,isResizing:A,parseValue:I}},template:`
<div>
  <!-- ===== \u25A0. \uD398\uC774\uC9C0 \uD0C0\uC774\uD2C0 ================================================= -->
  <div class="page-title">
    localStorage \uC815\uBCF4 \uAD00\uB9AC
  </div>
  <!-- ===== \u25A0. \uCE74\uB4DC \uC601\uC5ED =================================================== -->
  <div class="card">
    <div style="display: flex; gap: 16px; margin-bottom: 16px;">
      <div style="flex: 1;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">
          \uD0A4 \uAC80\uC0C9
        </label>
        <input
          v-model="uiState.filterKey"
          type="text"
          placeholder="\uD0A4\uB85C \uAC80\uC0C9..."
          class="form-control">
      </div>
      <div style="flex: 0 0 auto; display: flex; gap: 8px; align-items: flex-end;">
        <button @click="handleBtnAction('lsItems-reload')" class="btn btn-blue btn-sm">
          \uC0C8\uB85C\uACE0\uCE68
        </button>
        <button @click="handleBtnAction('lsItems-clearAll')" class="btn btn-danger btn-sm">
          \uC804\uCCB4 \uC0AD\uC81C
        </button>
      </div>
    </div>
    <div style="overflow-x: auto; position: relative; user-select: none;" :style="{ cursor: isResizing ? 'col-resize' : 'auto' }">
      <!-- ===== \u25A0.\u25A0.\u25A0. \uD14C\uC774\uBE14 ================================================= -->
      <table class="bo-table" style="width: 100%;">
        <thead>
          <tr>
            <th style="width: 25%; text-align: left;">
              Key
            </th>
            <th :style="{ width: uiState.valueColWidth + '%', textAlign: 'left', position: 'relative' }">
              Value
              <div
                @mousedown="handleSelectAction('lsItems-colResize', $event)"
                style="position: absolute; right: -5px; top: 0; width: 10px; height: 100%; cursor: col-resize; background: transparent; display: flex; align-items: center;">
                <div style="width: 1px; height: 80%; background: #0066cc; opacity: 0; transition: opacity 0.2s;">
                </div>
              </div>
            </th>
            <th :style="{ width: (100 - 25 - uiState.valueColWidth) + '%', textAlign: 'center' }">
              \uC791\uC5C5
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cfFilteredItems" :key="item.key" style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; word-break: break-all;">
              {{ item.key }}
            </td>
            <td style="padding: 12px;">
              <template v-if="uiState.editingKey === item.key">
                <textarea
                  :value="uiState.editingValue"
                  @input="uiState.editingValue = $event.target.value"
                  style="width: 100%; height: 80px; padding: 8px; border: 1px solid #0066cc; border-radius: 4px; font-family: monospace; font-size: 12px; resize: vertical;">
                </textarea>
                  <div style="display: flex; gap: 6px; margin-top: 8px;">
                    <button @click="handleBtnAction('lsItems-rowSave', item.key)" class="btn btn-primary" style="padding: 4px 12px; font-size: 12px;">
                      \uC800\uC7A5
                    </button>
                    <button @click="handleBtnAction('lsItems-rowCancel')" class="btn btn_cancel" style="padding: 4px 12px; font-size: 12px;">
                      \uCDE8\uC18C
                    </button>
                  </div>
                </template>
                <template v-else>
                  <div style="max-height: 60px; overflow-y: auto; background: #f9f9f9; padding: 8px; border-radius: 3px; font-family: monospace; font-size: 12px; white-space: pre-wrap; word-break: break-all; border: 1px solid #eee;">
                    {{ parseValue(item.value) }}
                  </div>
                </template>
              </td>
              <!-- ===== \u25A0.\u25A0.\u25A0.\u25A0.\u25A0.\u25A0. \uC601\uC5ED ============================================ -->
              <td style="padding: 12px; text-align: center; white-space: nowrap;">
                <button @click="handleBtnAction('lsItems-rowCopy', item.value)" class="btn btn_copy" style="padding: 4px 8px; font-size: 11px; margin-right: 2px;">
                  \uBCF5\uC0AC
                </button>
                <button v-if="uiState.editingKey !== item.key" @click="handleBtnAction('lsItems-rowEdit', { key: item.key, value: item.value })" class="btn btn_row_edit" style="padding: 4px 8px; font-size: 11px; margin-right: 2px;">
                  \uC218\uC815
                </button>
                <button @click="handleBtnAction('lsItems-rowDelete', item.key)" class="btn btn_row_delete" style="padding: 4px 8px; font-size: 11px;">
                  \uC0AD\uC81C
                </button>
              </td>
            </tr>
            <tr v-if="cfFilteredItems.length === 0">
              <td colspan="3" style="text-align: center; padding: 20px; color: #999;">
                \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="margin-top: 12px; font-size: 12px; color: #666;">
        \uCD1D {{ cfFilteredItems.length }}\uAC1C \uD56D\uBAA9
      </div>
    </div>
  </div>
  <!-- ===== \u25A1. \uCE74\uB4DC \uC601\uC5ED =================================================== -->
`};
