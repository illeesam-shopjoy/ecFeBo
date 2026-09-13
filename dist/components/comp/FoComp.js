window.FoPager={name:"FoPager",props:{pager:{type:Object,default:()=>({pageNo:1,pageTotalPage:1,pageSize:20,pageSizes:[5,10,20,30,50,100,200,300,500,1e3,2e3]})},onSetPage:{type:Function,default:()=>{}},onSizeChange:{type:Function,default:()=>{}},pageWindow:{type:Number,default:10}},setup(e){return{cfPageNums:Vue.computed(()=>{var l,a;const t=Math.max(1,((l=e.pager)==null?void 0:l.pageTotalPage)||1),d=Math.min(Math.max(1,((a=e.pager)==null?void 0:a.pageNo)||1),t),i=Math.max(1,e.pageWindow);let o=Math.max(1,d-Math.floor(i/2)),p=Math.min(t,o+i-1);return o=Math.max(1,p-i+1),Array.from({length:p-o+1},(s,r)=>o+r)})}},template:`
<div v-if="pager" class="fo-grid-pager">
  <button :disabled="pager.pageNo===1" @click="onSetPage(1)" title="\uCC98\uC74C">
    \xAB
  </button>
  <button :disabled="pager.pageNo===1" @click="onSetPage(pager.pageNo-1)">
    \u2039
  </button>
  <button v-for="n in cfPageNums" :key="n" :class="{ on: pager.pageNo===n }" @click="onSetPage(n)">
    {{ n }}
  </button>
  <button :disabled="pager.pageNo===pager.pageTotalPage" @click="onSetPage(pager.pageNo+1)">
    \u203A
  </button>
  <button :disabled="pager.pageNo===pager.pageTotalPage" @click="onSetPage(pager.pageTotalPage)" title="\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0">
    {{ pager.pageTotalPage || 1 }}
  </button>
  <select v-if="(pager.pageSizes||[]).length" class="fo-grid-pager-size" v-model.number="pager.pageSize" @change="onSizeChange">
    <option v-for="s in (pager.pageSizes||[])" :key="s" :value="s">
      {{ s }}\uAC1C
    </option>
  </select>
</div>
`},window.FoTabBar={name:"FoTabBar",props:{tabs:{type:Array,default:()=>[]},tab:{type:String,default:""},tabMode:{type:String,default:"tab"},showModes:{type:Boolean,default:!1},maxCols:{type:Number,default:4},orientation:{type:String,default:"horizontal"},dense:{type:Boolean,default:!1}},emits:["tab-select","mode-select"],setup(e,{emit:n}){const t=[{id:"tab",label:"\uD0ED",icon:"\u{1F4D1}"},{id:"1col",label:"1\uC5F4",icon:"1\u25AD"},{id:"2col",label:"2\uC5F4",icon:"2\u25AD"},{id:"3col",label:"3\uC5F4",icon:"3\u25AD"},{id:"4col",label:"4\uC5F4",icon:"4\u25AD"}],d=[...t,{id:"5col",label:"5\uC5F4",icon:"5\u25AD"}];return{VIEW_MODES:Vue.computed(()=>e.maxCols===5?d:t),onTab:a=>{e.tabMode==="tab"&&n("tab-select",a)},onMode:a=>n("mode-select",a),isTabMode:()=>e.tabMode==="tab"}},template:`
<div :style="orientation==='vertical'
  ? 'display:flex;gap:8px;margin-bottom:14px;align-items:flex-start;flex-direction:column;width:max-content;'
  : 'display:flex;gap:8px;margin-bottom:14px;align-items:stretch;'">
  <div :style="orientation==='vertical'
    ? 'display:flex;flex-direction:column;gap:4px;background:#fff;padding:5px;border-radius:12px;border:1px solid #e5e7eb;box-shadow:0 1px 3px rgba(0,0,0,0.04);min-width:160px;'
    : (dense
      ? 'flex:1;display:flex;flex-wrap:wrap;gap:4px;background:#fff;padding:5px;border-radius:12px;border:1px solid #e5e7eb;box-shadow:0 1px 3px rgba(0,0,0,0.04);'
      : 'flex:1;display:flex;gap:4px;background:#fff;padding:5px;border-radius:12px;border:1px solid #e5e7eb;box-shadow:0 1px 3px rgba(0,0,0,0.04);')">
    <template v-for="t in tabs" :key="t?.id">
      <button v-if="t.visible===undefined || t.visible" @click="onTab(t.id)" :disabled="!isTabMode()"
        :style="{
          flex: (orientation==='vertical' || dense) ? 'none' : 1,
          width: orientation==='vertical' ? '100%' : 'auto',
          padding: dense ? '4px 9px' : '7px 12px', border:'none', cursor: isTabMode() ? 'pointer' : 'default',
          fontSize: dense ? '11px' : '12.5px', borderRadius:'9px', transition:'all .18s',
          display:'inline-flex', alignItems:'center',
          justifyContent: orientation==='vertical' ? 'flex-start' : 'center',
          gap: dense ? '4px' : '6px',
          opacity: isTabMode() ? 1 : 0.55,
          fontWeight: tab===t.id ? 800 : 600,
          background: (isTabMode() && tab===t.id) ? 'linear-gradient(135deg,#fff0f4,#ffe4ec)' : 'transparent',
          color:      (isTabMode() && tab===t.id) ? '#e8587a' : '#666',
          boxShadow:  (isTabMode() && tab===t.id) ? '0 2px 8px rgba(232,88,122,0.18)' : 'none',
          borderBottom: (isTabMode() && tab===t.id) ? '2px solid #e8587a' : '2px solid transparent'
        }">
        <span v-if="t.icon" style="font-size:14px;">{{ t.icon }}</span>
        <span>{{ t.label }}</span>
        <span v-if="t.count !== undefined" :style="{
          fontSize:'10.5px', fontWeight:800, padding:'1px 7px', borderRadius:'10px',
          background: (isTabMode() && tab===t.id) ? '#e8587a' : '#e5e7eb',
          color:      (isTabMode() && tab===t.id) ? '#fff' : '#666',
          minWidth:'18px', textAlign:'center', marginLeft:'auto'
        }">{{ t.count }}</span>
      </button>
    </template>
  </div>
  <div v-if="showModes" style="display:flex;gap:3px;background:#fff;padding:5px;border-radius:12px;border:1px solid #e5e7eb;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
    <button v-for="v in VIEW_MODES" :key="v?.id" @click="onMode(v.id)" :title="v.label+'\uB85C \uBCF4\uAE30'"
      :style="{
        padding:'8px 12px', border:'none', cursor:'pointer', fontSize:'13px', borderRadius:'8px',
        fontWeight:  tabMode===v.id ? 800 : 600,
        background:  tabMode===v.id ? 'linear-gradient(135deg,#fff0f4,#ffe4ec)' : 'transparent',
        color:       tabMode===v.id ? '#e8587a' : '#888',
        boxShadow:   tabMode===v.id ? '0 2px 6px rgba(232,88,122,0.18)' : 'none'
      }">
      <span style="font-size:15px;">{{ v.icon }}</span>
    </button>
  </div>
</div>
`};
