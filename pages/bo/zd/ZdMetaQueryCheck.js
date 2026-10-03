/* ShopJoy Admin - 운영지원 > DB메타관리 > 쿼리점검 (2026-10-03)
 * 컬럼명을 바꿨는데 쿼리에 반영 안 된 곳을 찾는다 — 대시보드가 옛 컬럼명(qty·item_amt·login_result)으로 매일 실패하던 일에서 시작.
 * 실제 DB 에 읽기 전용으로 실행/대조: 대시보드 데이터소스 · 위젯 생성쿼리(gen_query) · BO 대시보드 일별현황 · 일별 통계 배치 ·
 * JPA 엔티티 ↔ DB 컬럼 + 최근 14일 API 오류로그의 SQL 오류(없는 컬럼/테이블·문법). */
window.ZdMetaQueryCheck = {
  name: 'ZdMetaQueryCheck',
  props: {
    navigate: { type: Function, required: true }, // 페이지 이동
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { reactive, computed, onMounted } = Vue;
    const showToast = window.boApp.showToast;
    const UI = '쿼리점검';

    const res = reactive({ dataSources: [], genQueries: [], dailyStats: [], statsJob: [], entities: { entityCnt: 0, colCnt: 0, issueCnt: 0, issues: [] },
      recentSqlErrors: [], elapsedMs: 0, checkedAt: null, siteId: '' });
    const uiState = reactive({ loading: false, tab: 'ds', siteId: '', onlyFail: true });
    const siteOptions = reactive([]);

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ ZdMetaQueryCheck.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'check-run') return runCheck();
      else if (cmd === 'tab-select') { uiState.tab = param; return; }
      else if (cmd === 'goto-errorLog') return props.navigate('syApiErrorLogMng');
      console.warn('[handleBtnAction] unknown cmd:', cmd);
    };

    const handleGridCellAction = (cmd, colKey, row) => {
      if (cmd === 'ent-cellClick' && colKey === 'tableNm' && row.tableNm) return props.navigate('zdMetaTableMng', { id: row.tableNm });
    };

    /* ##### [04] 내장 사용 함수 ################################################### */

    const runCheck = async () => {
      uiState.loading = true;
      try {
        const r = await boApiSvc.zdMeta.runQueryCheck(uiState.siteId || null, UI, '점검실행');
        Object.assign(res, r.data?.data || {});
        const fails = cfSummary.value.reduce((s, c) => s + c.fail, 0);
        showToast(fails ? `점검 완료 — 문제 ${fails}건` : '점검 완료 — 문제 없음', fails ? 'warning' : 'success');
      } catch (err) {
        console.error('[runCheck] 쿼리점검 실패', err);
        showToast(err.response?.data?.message || err.message || '쿼리점검 중 오류가 발생했습니다.', 'error', 0);
      } finally {
        uiState.loading = false;
      }
    };

    /* ★ onMounted — 사이트 목록을 받고 바로 한 번 점검한다(읽기 전용, 1초 안팎) */
    const initPage = async () => {
      try {
        siteOptions.splice(0, siteOptions.length, ...(await window.boUtil.bofLoadSiteOptions()));
        uiState.siteId = window.boCommonFilter?.siteId || siteOptions[0]?.value || 'SI260001';
      } catch (e) { uiState.siteId = 'SI260001'; }
      await runCheck();
    };
    onMounted(initPage);

    /* ##### [05] 사용자 함수 (요약 / 컬럼정의) ##################################### */

    const _cnt = (list) => ({ total: list.length, fail: list.filter(x => x.okYn === 'N').length });
    const cfSummary = computed(() => [
      { id: 'ds', label: '대시보드 데이터소스', ..._cnt(res.dataSources) },
      { id: 'gq', label: '위젯 생성쿼리', ..._cnt(res.genQueries) },
      { id: 'daily', label: '일별현황(BO 홈)', ..._cnt(res.dailyStats) },
      { id: 'job', label: '일별 통계 배치', ..._cnt(res.statsJob) },
      { id: 'ent', label: 'JPA 엔티티 ↔ DB', total: res.entities.colCnt || 0, fail: res.entities.issueCnt || 0 },
      { id: 'err', label: '최근 SQL 오류(14일)', total: res.recentSqlErrors.length, fail: res.recentSqlErrors.length },
    ]);
    const tabs = computed(() => cfSummary.value.map(s => ({ id: s.id, label: s.label, count: s.fail })));
    const _f = (list) => uiState.onlyFail ? list.filter(x => x.okYn === 'N') : list;
    const cfDs    = computed(() => _f(res.dataSources));
    const cfGq    = computed(() => _f(res.genQueries));
    const cfDaily = computed(() => _f(res.dailyStats));

    const okCol = { key: 'okYn', label: '결과', align: 'center', width: '70px', fmt: (v) => v === 'Y' ? '정상' : '실패', badge: (r) => r.okYn === 'Y' ? 'badge-green' : 'badge-red' };
    const errCol = { key: 'errorMsg', label: '오류', cellStyle: 'font-family:monospace;font-size:12px;color:#dc2626;', fmt: (v) => v || '' };
    const columns = {
      ds: [{ key: 'code', label: '데이터소스 코드', cellStyle: 'font-family:monospace;font-weight:600;', width: '220px' }, okCol, errCol],
      gq: [{ key: 'itemKey', label: '항목키', cellStyle: 'font-family:monospace;', width: '120px' }, { key: 'itemNm', label: '항목명', width: '220px' }, okCol, errCol],
      daily: [{ key: 'section', label: '섹션', cellStyle: 'font-family:monospace;', width: '200px' }, okCol, errCol],
      job: [{ key: 'section', label: '단계', width: '200px' }, okCol, errCol],
      ent: [
        { key: 'kindCd', label: '유형', width: '140px', fmt: (v) => ({ TABLE_MISSING: '테이블 없음', COLUMN_MISSING: '컬럼 없음', TYPE_MISMATCH: '타입 불일치', LENGTH_MISMATCH: '길이 불일치' }[v] || v),
          badge: (r) => r.kindCd === 'LENGTH_MISMATCH' ? 'badge-orange' : 'badge-red' },
        { key: 'tableNm', label: '테이블', link: true, cellInnerStyle: 'font-family:monospace;color:#1d4ed8;' },
        { key: 'colNm', label: '컬럼', cellStyle: 'font-family:monospace;', fmt: (v) => v || '' },
        { key: 'entityNm', label: '엔티티.필드', cellStyle: 'font-family:monospace;font-size:12px;color:#7c3aed;' },
        { key: 'detail', label: '내용', cellStyle: 'font-size:12px;' },
      ],
      err: [
        { key: 'errorMsg', label: 'SQL 오류', cellStyle: 'font-family:monospace;font-size:12px;color:#dc2626;' },
        { key: 'cnt', label: '건수', align: 'right', width: '60px' },
        { key: 'lastDate', label: '마지막', width: '150px', fmt: (v) => v ? String(v).replace('T', ' ').slice(0, 19) : '' },
        { key: 'samplePath', label: '요청(예)', cellStyle: 'font-family:monospace;font-size:11px;color:#666;' },
      ],
    };

    /* ##### [06] return ######################################################### */

    return { res, uiState, siteOptions, cfSummary, tabs, cfDs, cfGq, cfDaily, columns, handleBtnAction, handleGridCellAction };
  },
  template: `
<bo-page title="쿼리점검">
  <div style="margin:0 0 10px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;font-size:12.5px;color:#475569;line-height:1.6;">
    컬럼명을 바꿨는데 쿼리에 반영 안 된 곳을 찾습니다. 대시보드 데이터소스·위젯 생성쿼리·BO 홈 일별현황·일별 통계 배치를 실제 DB 에 <b>읽기 전용</b>으로 실행하고,
    JPA 엔티티의 컬럼을 DB 와 대조하며, 최근 14일 API 오류로그의 SQL 오류(없는 컬럼·테이블)를 모아 보여 줍니다.
    이 쿼리들은 화면이 깨지지 않게 실패를 삼키도록 돼 있어서 평소엔 빈 칸으로만 보입니다.
  </div>
  <bo-container>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
      <span style="font-size:12.5px;color:#475569;">사이트</span>
      <select class="form-control" style="width:200px;" v-model="uiState.siteId">
        <option v-for="s in siteOptions" :key="s.value" :value="s.value">{{ s.label }} ({{ s.value }})</option>
      </select>
      <button class="btn btn_save" :disabled="uiState.loading" @click="handleBtnAction('check-run')">{{ uiState.loading ? '⏳ 점검 중…' : '▶ 점검 실행' }}</button>
      <label style="display:flex;align-items:center;gap:4px;font-size:12.5px;"><input type="checkbox" v-model="uiState.onlyFail" /> 실패만 보기</label>
      <span v-if="res.checkedAt" style="margin-left:auto;font-size:12px;color:#94a3b8;">마지막 점검 {{ String(res.checkedAt).replace('T',' ').slice(0,19) }} · {{ res.elapsedMs }}ms · 사이트 {{ res.siteId }}</span>
    </div>
  </bo-container>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:8px;margin:0 0 12px;">
    <div v-for="s in cfSummary" :key="s.id" @click="handleBtnAction('tab-select', s.id)"
      :style="'cursor:pointer;padding:12px 14px;border-radius:10px;border:2px solid ' + (uiState.tab===s.id ? '#e8587a' : '#e2e8f0') + ';background:' + (uiState.tab===s.id ? '#fff8f9' : '#fff') + ';'">
      <div style="font-size:12px;color:#64748b;">{{ s.label }}</div>
      <div style="font-size:20px;font-weight:800;" :style="s.fail ? 'color:#dc2626' : 'color:#16a34a'">
        {{ s.fail ? ('문제 ' + s.fail) : '정상' }} <span style="font-size:12px;font-weight:400;color:#94a3b8;">/ {{ s.total.toLocaleString() }}</span>
      </div>
    </div>
  </div>
  <bo-container>
    <bo-tab-bar :tabs="tabs" :tab="uiState.tab" :show-modes="false" @tab-select="id => handleBtnAction('tab-select', id)" />
    <div style="padding:10px 12px;">
      <bo-grid v-show="uiState.tab==='ds'" bare :columns="columns.ds" :rows="cfDs" row-key="code" :loading="uiState.loading" table-max-height="60vh" empty-text="실패한 데이터소스가 없습니다. 👍" />
      <bo-grid v-show="uiState.tab==='gq'" bare :columns="columns.gq" :rows="cfGq" :loading="uiState.loading" table-max-height="60vh" empty-text="실패한 생성쿼리가 없습니다. 👍" />
      <bo-grid v-show="uiState.tab==='daily'" bare :columns="columns.daily" :rows="cfDaily" :loading="uiState.loading" table-max-height="60vh" empty-text="실패한 섹션이 없습니다. 👍" />
      <bo-grid v-show="uiState.tab==='job'" bare :columns="columns.job" :rows="res.statsJob" :loading="uiState.loading" empty-text="결과가 없습니다." />
      <div v-show="uiState.tab==='ent'">
        <div style="font-size:12px;color:#64748b;margin-bottom:6px;">엔티티 {{ res.entities.entityCnt }}개 · 컬럼 {{ (res.entities.colCnt || 0).toLocaleString() }}개 대조. 길이 불일치는 엔티티의 @Column(length) 와 DB varchar 길이가 다른 것입니다.</div>
        <bo-grid bare :columns="columns.ent" :rows="res.entities.issues || []" :loading="uiState.loading" table-max-height="60vh" empty-text="엔티티와 DB 가 모두 일치합니다. 👍"
          grid-id="ent-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
      </div>
      <div v-show="uiState.tab==='err'">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#64748b;margin-bottom:6px;">
          <span>API오류로그(syh_access_error_log) 중 SQL 오류를 첫 줄 기준으로 묶었습니다. 고친 뒤에도 기록은 남으니 '마지막' 시각으로 재발 여부를 보세요.</span>
          <button class="btn btn_search" @click="handleBtnAction('goto-errorLog')">API오류로그로</button>
        </div>
        <bo-grid bare :columns="columns.err" :rows="res.recentSqlErrors" :loading="uiState.loading" table-max-height="60vh" empty-text="최근 14일 SQL 오류가 없습니다. 👍" />
      </div>
    </div>
  </bo-container>
</bo-page>
`,
};
