/* ShopJoy - PlanView (기획전 상세) — EventView.js 를 그대로 본떠 작성 (2026-09 신설) */
window.PlanView = {
  name: 'PlanView',
  props: {
    navigate: { type: Function, required: true },        // 페이지 이동
    dtlId:    { type: String,   default: null },          // 대상 ID
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 ################################################## */

    const { reactive, computed, onMounted } = Vue;

    const uiState = reactive({ loading: false, error: null });

    const plans = reactive([]);

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ PlanView.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'page-goPlanList') {
        return props.navigate('plan');
      } else {
        console.warn('[handleBtnAction] unknown cmd:', cmd);
      }
    };

    /* ##### [04] 내장 사용 함수 (이벤트 핸들러 on* / handle*) #################### */

    const handleSearchData = async () => {
      try {
        const res = await foApiSvc.pmPlan.getById(props.dtlId, '기획전상세', '상세조회');
        const raw = res.data?.data || null;
        plans.splice(0, plans.length, ...(raw ? [raw] : []));
        if (raw) {
          const nm = raw.planTitle || raw.planNm || '';
          foUtil.fofSetPageMeta({
            title: nm ? nm + ' | ShopJoy' : undefined,
            description: raw.planDesc || (nm ? nm + ' - ShopJoy 기획전' : undefined),
          });
        }
      } catch (e) {
        console.error('[handleSearchData]', e);
        plans.splice(0, plans.length);
      }
    };

    /* 백엔드 PmPlanDto.Item → 화면 표준 형태로 정규화 (planItems 의 타임딜 파생 필드 포함) */
    const cfPlan = computed(() => {
      const raw = plans.length > 0 ? plans[0] : null;
      if (!raw) { return null; }
      return {
        id:            raw.planId,
        title:         raw.planTitle || raw.planNm || '',
        heroEyebrow:   raw.planTypeCdNm || raw.planTypeCd || 'PLAN',
        heroSub:       raw.planDesc || '',
        heroBg:        raw.bannerUrl ? ('url(' + raw.bannerUrl + ') center/cover') : 'linear-gradient(135deg,#5b6cff 0%,#8a4fff 100%)',
        heroTextColor: '#ffffff',
        startDate:     (raw.startDate || '').toString().slice(0, 10),
        endDate:       (raw.endDate || '').toString().slice(0, 10),
        /* PmPlanItemDto.Item → 상품 카드. dealPoolId 가 있으면 타임딜 특가 뱃지 표시 */
        planItems:     (raw.planItems || []).map(it => ({
                         id:         it.planItemId,
                         prodId:     it.prodId || '',
                         memo:       it.planItemMemo || '',
                         isDeal:     !!it.dealPoolId,
                         dealPrice:  it.dealPrice,
                         remainQty:  it.dealRemainQty,
                         totalQty:   it.dealTotalQty,
                       })),
      };
    });

    const initPage = async () => {
      if (!props.dtlId) { props.navigate('plan'); return; }
      await handleSearchData();
    };
    onMounted(initPage);

    /* ##### [06] return (템플릿 노출) ############################################## */

    return {
      handleBtnAction,
      cfPlan,
    };
  },

  template: /* html */ `
<fo-page v-if="cfPlan" bare style="background:var(--bg-base);"
  @nav="p => navigate(p)">
  <!-- ===== ■. ① 히어로 배너 ================================================ -->
  <template #banner>
  <div :style="{
    background: cfPlan.heroBg,
    minHeight: '400px',
    display:'flex', flexDirection:'column',
    alignItems:'center', justifyContent:'center',
    textAlign:'center', padding:'clamp(40px,8vw,72px) clamp(16px,4vw,24px) clamp(32px,6vw,60px)',
    position:'relative', overflow:'hidden',
    }">
    <div style="position:relative;z-index:1;max-width:700px;">
      <div style="display:inline-block;padding:4px 16px;border-radius:20px;border:1px solid currentColor;font-size:0.72rem;font-weight:700;letter-spacing:2px;margin-bottom:20px;opacity:0.8;"
        :style="{ color: cfPlan.heroTextColor }">
        {{ cfPlan.heroEyebrow }}
      </div>
      <h1 style="font-size:2.6rem;font-weight:900;line-height:1.25;margin-bottom:18px;letter-spacing:-0.5px;"
        :style="{ color: cfPlan.heroTextColor }">
        {{ cfPlan.title }}
      </h1>
      <p style="font-size:0.95rem;line-height:1.7;opacity:0.8;margin-bottom:24px;"
        :style="{ color: cfPlan.heroTextColor }">
        {{ cfPlan.heroSub }}
      </p>
      <div style="font-size:0.82rem;font-weight:600;opacity:0.65;"
        :style="{ color: cfPlan.heroTextColor }">
        {{ cfPlan.startDate }} ~ {{ cfPlan.endDate }}
      </div>
    </div>
  </div>
  </template>
  <!-- ===== □. ① 히어로 배너 ================================================ -->
  <!-- ===== ■. 영역 ====================================================== -->
  <div class="page-wrap" style="max-width:960px;">
    <!-- ===== ■.■. ② 뒤로 ================================================== -->
    <button @click="handleBtnAction('page-goPlanList')"
      style="display:flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:0.82rem;margin-bottom:32px;padding:0;"
      @mouseenter="$event.currentTarget.style.color='var(--blue)'"
      @mouseleave="$event.currentTarget.style.color='var(--text-muted)'">
      ← 기획전 목록으로
    </button>
    <!-- ===== □.□. ② 뒤로 ================================================== -->
    <!-- ===== ■.■. ③ 기획전 상품 (타임딜 뱃지 포함) =========================== -->
    <div v-if="cfPlan.planItems?.length" style="margin-bottom:36px;">
    <h2 style="font-size:1.1rem;font-weight:800;color:var(--text-primary);margin-bottom:18px;">
      기획전 상품
    </h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;">
      <div v-for="it in cfPlan.planItems" :key="it.id"
          style="background:var(--bg-card);border:1px solid var(--border);border-radius:6px;padding:16px;position:relative;">
        <span v-if="it.isDeal" style="position:absolute;top:10px;right:10px;background:#ef4444;color:#fff;font-size:0.68rem;font-weight:800;padding:3px 8px;border-radius:3px;">
          ⚡ 타임딜
        </span>
        <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px;">
          상품ID
        </div>
        <div style="font-size:0.88rem;font-weight:700;color:var(--text-primary);word-break:break-all;margin-bottom:8px;">
          {{ it.prodId }}
        </div>
        <div v-if="it.isDeal" style="font-size:0.8rem;color:#ef4444;font-weight:700;">
          특가 {{ (it.dealPrice || 0).toLocaleString() }}원 · 잔여 {{ it.remainQty }}/{{ it.totalQty }}
        </div>
        <div v-else-if="it.memo" style="font-size:0.78rem;color:var(--text-muted);">
          {{ it.memo }}
        </div>
      </div>
    </div>
  </div>
  <!-- ===== □.□. ③ 기획전 상품 (타임딜 뱃지 포함) =========================== -->
  <!-- ===== ■.■. 목록으로 (하단) ============================================= -->
  <div style="text-align:center;padding-bottom:8px;">
    <button @click="handleBtnAction('page-goPlanList')"
        style="padding:11px 32px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-secondary);font-size:0.85rem;cursor:pointer;font-weight:600;"
        @mouseenter="$event.currentTarget.style.borderColor='var(--blue)';$event.currentTarget.style.color='var(--blue)'"
        @mouseleave="$event.currentTarget.style.borderColor='var(--border)';$event.currentTarget.style.color='var(--text-secondary)'">
      ← 기획전 목록으로
    </button>
  </div>
</div>
</fo-page>
<!-- ===== □.□. 목록으로 (하단) ============================================= -->
<!-- ===== □. 영역 ====================================================== -->
`,
};
