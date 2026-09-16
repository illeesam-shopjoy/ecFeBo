/* ShopJoy - Plan (기획전 목록) — Event.js 를 그대로 본떠 작성 (2026-09, 기획전 FO 화면 신설) */
window.PlanPage = {
  name: 'PlanPage',
  props: {
    navigate: { type: Function, required: true },        // 페이지 이동
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 ################################################## */

    const { ref, reactive, computed, watch, onMounted } = Vue;

    const uiState = reactive({ loading: false, error: null, sortBy: 'latest' });

    const searchValue = ref('');

    const plans = reactive([]);

    const pager = reactive({ pageNo: 1, pageSize: 20, pageTotalCount: 0, pageTotalPage: 1, pageType: 'PAGE', pageSizes: [5, 10, 20, 30, 50, 100, 200, 500], pageCond: {} });

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    /* handleBtnAction — 버튼 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ Plan.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'page-goHome') {
        return props.navigate('home');
      } else if (cmd === 'sort-change') {
        uiState.sortBy = param;
        return;
      } else if (cmd === 'search-submit') {
        pager.pageNo = 1;
        handleSearchList();
        return;
      } else if (cmd === 'search-reset') {
        searchValue.value = '';
        pager.pageNo = 1;
        handleSearchList();
        return;
      } else {
        console.warn('[handleBtnAction] unknown cmd:', cmd);
      }
    };

    /* handleSelectAction — 행/선택 액션 dispatch (cmd: '{영역명}-기능명'). 5줄 이하 짧은 로직은 인라인 */
    const handleSelectAction = (cmd, param = {}, e = {}) => {
      console.log(' ■■ Plan.js : handleSelectAction -> ', cmd, param);
      if (cmd === 'plans-rowView') {
        if (e.ctrlKey || e.metaKey || e.button === 1) { return window.foApp.openNewWindow('planView', param); }
        return props.navigate('planView', { planId: param });
      } else {
        console.warn('[handleSelectAction] unknown cmd:', cmd);
      }
    };

    /* ##### [04] 내장 사용 함수 (이벤트 핸들러 on* / handle*) #################### */

    /* _adaptPlan — PmPlanDto.Item → 화면 카드 기대 형태 (기획전은 항상 진행중만 조회되므로 상태뱃지 불필요) */
    const _adaptPlan = (p) => {
      const title = p.planTitle || p.planNm || '';
      return {
        id:        p.planId,
        title,
        startDate: coUtil.cofYmd(p.startDate),
        endDate:   coUtil.cofYmd(p.endDate),
        thumbnailUrl: p.thumbnailUrl || '',
        tag:       p.planTypeCdNm || p.planTypeCd || '기획전',
      };
    };

    /* _fetchPlans — 서버 조회 1회. { list, total, totalPage } 반환 */
    const _fetchPlans = async () => {
      const sv = searchValue.value.trim();
      const params = {
        pageNo: pager.pageNo, pageSize: pager.pageSize,
        ...(uiState.sortBy === 'deadline' ? { sort: 'endDate asc' } : {}),
        ...(sv ? { searchValue: sv, searchType: 'planId,planTitle' } : {}),
      };
      const res = await foApiSvc.pmPlan.getPage(params, '기획전', '목록조회');
      const d = res.data?.data || {};
      return { list: d.pageList || [], total: d.pageTotalCount || 0, totalPage: d.pageTotalPage || 1 };
    };

    /* handleSearchList — 목록 조회 (FO는 진행중 기획전만 내려옴, planStatusCd 강제는 백엔드가 처리) */
    const handleSearchList = async () => {
      try {
        const r = await _fetchPlans();
        pager.pageTotalCount = r.total;
        pager.pageTotalPage  = r.totalPage;
        plans.splice(0, plans.length, ...r.list.map(_adaptPlan));
        coUtil.cofBuildPagerNums(pager);
      } catch (e) {
        console.error('[handleSearchList]', e);
        plans.splice(0, plans.length);
        pager.pageTotalCount = 0; pager.pageTotalPage = 1;
      }
    };

    watch(() => uiState.sortBy, () => { pager.pageNo = 1; handleSearchList(); });

    /* initPage — 화면 로드 시퀀스. 마운트 시 실행한다. */
    const initPage = async () => {
      handleSearchList();
    };
    onMounted(initPage);

    /* ##### [06] return (템플릿 노출) ############################################## */

    return {
      uiState,
      searchValue,
      handleBtnAction, handleSelectAction,
      plans,
    };
  },
  template: /* html */ `
<fo-page title="기획전" eyebrow="Promotion"
  banner-img="assets/cdn/prod/img/page-title/page-title-1.jpg"
  banner-align="center 40%"
  :crumbs="[{ label:'홈', page:'home' }, { label:'기획전' }]"
  @nav="() => handleBtnAction('page-goHome')">
  <!-- ===== ■. 검색창 ======================================================= -->
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
    <div style="position:relative;flex:1;max-width:400px;">
      <input
        v-model="searchValue"
        type="text"
        placeholder="ID 또는 기획전명 검색"
        @keyup.enter="handleBtnAction('search-submit')"
        style="width:100%;padding:9px 40px 9px 14px;border:1px solid var(--border);border-radius:6px;font-size:0.88rem;background:var(--bg-card);color:var(--text-primary);box-sizing:border-box;outline:none;" />
      <button v-if="searchValue"
        @click="handleBtnAction('search-reset')"
        style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1rem;line-height:1;padding:2px 4px;">✕</button>
    </div>
    <button @click="handleBtnAction('search-submit')"
      style="padding:9px 20px;background:var(--text-primary);color:#fff;border:none;border-radius:6px;font-size:0.88rem;font-weight:600;cursor:pointer;white-space:nowrap;">
      검색
    </button>
  </div>
  <!-- ===== □. 검색창 ======================================================= -->
  <!-- ===== ■. 정렬 ========================================================= -->
  <div style="display:flex;justify-content:flex-end;border-bottom:1px solid var(--border);margin-bottom:28px;padding-bottom:10px;">
    <button @click="handleBtnAction('sort-change', 'latest')"
      :style="{ padding:'6px 14px', background:'none', border:'none', cursor:'pointer', fontSize:'0.8rem',
      color: uiState.sortBy==='latest' ? 'var(--text-primary)' : 'var(--text-muted)',
      fontWeight: uiState.sortBy==='latest' ? '700' : '400', borderRight:'1px solid var(--border)' }">
      최근등록순
    </button>
    <button @click="handleBtnAction('sort-change', 'deadline')"
      :style="{ padding:'6px 14px', background:'none', border:'none', cursor:'pointer', fontSize:'0.8rem',
      color: uiState.sortBy==='deadline' ? 'var(--text-primary)' : 'var(--text-muted)',
      fontWeight: uiState.sortBy==='deadline' ? '700' : '400' }">
      마감임박순
    </button>
  </div>
  <!-- ===== □. 정렬 ========================================================= -->
  <!-- ===== ■. 기획전 그리드 ================================================= -->
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;">
    <div v-for="pl in plans" :key="pl.id"
      style="background:var(--bg-card);border:1px solid var(--border);border-radius:4px;overflow:hidden;cursor:pointer;transition:transform .2s,box-shadow .2s;"
      title="Ctrl+클릭/휠클릭: 새창" @click="handleSelectAction('plans-rowView', pl.id, $event)"
      @auxclick="$event.button===1 ? handleSelectAction('plans-rowView', pl.id, $event) : null"
      @mouseenter="$event.currentTarget.style.transform='translateY(-3px)';$event.currentTarget.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)'"
      @mouseleave="$event.currentTarget.style.transform='';$event.currentTarget.style.boxShadow=''">
      <div :style="{ height:'170px', background: pl.thumbnailUrl ? ('url(' + pl.thumbnailUrl + ') center/cover') : 'linear-gradient(135deg,#5b6cff 0%,#8a4fff 100%)' }">
      </div>
      <div style="padding:14px 14px 16px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px;">
          <span style="padding:2px 7px;border-radius:2px;font-size:0.68rem;font-weight:700;color:#fff;background:#5b6cff;">
            {{ pl.tag }}
          </span>
        </div>
        <div style="font-size:0.87rem;font-weight:600;color:var(--text-primary);line-height:1.45;margin-bottom:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
          {{ pl.title }}
        </div>
        <div style="font-size:0.75rem;color:var(--text-muted);">
          {{ pl.startDate }} ~ {{ pl.endDate }}
        </div>
      </div>
    </div>
  </div>
  <!-- ===== □. 기획전 그리드 ================================================= -->
  <!-- ===== ■. 빈 상태 ==================================================== -->
  <div v-if="plans.length === 0" style="text-align:center;padding:clamp(32px,6vw,60px) 0;color:var(--text-muted);">
    <div style="font-size:2rem;margin-bottom:12px;">
      📭
    </div>
    <div style="font-size:0.95rem;">
      {{ searchValue ? '검색 결과가 없습니다.' : '진행 중인 기획전이 없습니다.' }}
    </div>
  </div>
  <!-- ===== □. 빈 상태 ==================================================== -->
</fo-page>
`
};
