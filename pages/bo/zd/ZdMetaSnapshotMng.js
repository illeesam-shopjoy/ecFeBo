/* ShopJoy Admin - 운영지원 > DB메타관리 > 스키마변경이력 (2026-10-03)
 * 지금 DB 의 테이블·컬럼 정의를 스냅샷으로 저장해 두고(zd_meta_snapshot), 다른 스냅샷 또는 지금 DB 와 비교한다.
 * 같은 테이블에서 컬럼 하나가 사라지고 같은 타입·같은 순번(또는 같은 코멘트) 컬럼이 생겼으면 "이름 변경(추정)" 으로 묶는다 —
 * 컬럼명을 바꾼 뒤 옛 이름을 쓰는 쿼리(대시보드 등)를 찾을 때 출발점. 배포 전후로 하나씩 저장해 두면 좋다. */
window.ZdMetaSnapshotMng = {
  name: 'ZdMetaSnapshotMng',
  props: {
    navigate: { type: Function, required: true }, // 페이지 이동
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { reactive, computed, onMounted } = Vue;
    const showToast   = window.boApp.showToast;
    const showConfirm = window.boApp.showConfirm;
    const UI = '스키마변경이력';

    const snapshots = reactive([]);
    const diffItems = reactive([]);
    const diffSummary = reactive({});
    const uiState = reactive({ loading: false, diffLoading: false, fromId: '', toId: '', chgType: '', diffDone: false,
      createOpen: false, createBusy: false });
    const createForm = reactive({ snapshotNm: '', snapshotDesc: '' });

    const CHG = {
      TABLE_ADD: { label: '테이블 추가', badge: 'badge-green' },
      TABLE_DROP: { label: '테이블 삭제', badge: 'badge-red' },
      TABLE_RENAME: { label: '테이블 이름변경(추정)', badge: 'badge-orange' },
      TABLE_COMMENT_CHG: { label: '테이블 코멘트', badge: 'badge-gray' },
      COL_ADD: { label: '컬럼 추가', badge: 'badge-green' },
      COL_DROP: { label: '컬럼 삭제', badge: 'badge-red' },
      COL_RENAME: { label: '컬럼 이름변경(추정)', badge: 'badge-orange' },
      TYPE_CHG: { label: '타입 변경', badge: 'badge-orange' },
      NULL_CHG: { label: 'NULL 변경', badge: 'badge-blue' },
      DEFAULT_CHG: { label: '기본값 변경', badge: 'badge-blue' },
      COMMENT_CHG: { label: '코멘트 변경', badge: 'badge-gray' },
    };

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ ZdMetaSnapshotMng.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'list-reload') return handleSearchData();
      else if (cmd === 'create-open') {
        const d = new Date(); const p = (n) => String(n).padStart(2, '0');
        createForm.snapshotNm = `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())} 스냅샷`;
        createForm.snapshotDesc = '';
        uiState.createOpen = true; return;
      }
      else if (cmd === 'create-close') { uiState.createOpen = false; return; }
      else if (cmd === 'create-save') return handleCreate();
      else if (cmd === 'diff-run') return runDiff();
      else if (cmd === 'diff-current') { uiState.fromId = param.row.snapshotId; uiState.toId = ''; return runDiff(); }
      else if (cmd === 'snapshot-delete') return handleDelete(param.row);
      else if (cmd === 'chg-filter') { uiState.chgType = uiState.chgType === param ? '' : param; return; }
      console.warn('[handleBtnAction] unknown cmd:', cmd);
    };

    const handleGridCellAction = (cmd, colKey, row) => {
      if (cmd === 'diff-cellClick' && colKey === 'tableNm' && row.tableNm) return props.navigate('zdMetaTableMng', { id: row.tableNm });
    };

    /* ##### [04] 내장 사용 함수 ################################################### */

    const handleSearchData = async () => {
      uiState.loading = true;
      try {
        const res = await boApiSvc.zdMeta.getSnapshots(UI, '조회');
        snapshots.splice(0, snapshots.length, ...(res.data?.data || []));
        if (!uiState.fromId && snapshots.length) uiState.fromId = snapshots[0].snapshotId;
      } catch (err) {
        console.error('[handleSearchData] 스냅샷 목록 조회 실패', err);
        snapshots.splice(0, snapshots.length);
      } finally {
        uiState.loading = false;
      }
    };

    const handleCreate = async () => {
      if (!String(createForm.snapshotNm || '').trim()) { showToast('스냅샷 이름을 입력해주세요.', 'error'); return; }
      uiState.createBusy = true;
      try {
        const res = await boApiSvc.zdMeta.createSnapshot({ snapshotNm: createForm.snapshotNm.trim(), snapshotDesc: createForm.snapshotDesc || null }, UI, '스냅샷저장');
        const s = res.data?.data || {};
        uiState.createOpen = false;
        await handleSearchData();
        showToast(`스냅샷을 저장했습니다 — 테이블 ${s.tableCnt} · 컬럼 ${s.columnCnt}`, 'success');
      } catch (err) {
        console.error('[handleCreate] 스냅샷 저장 실패', err);
        showToast(err.response?.data?.message || err.message || '스냅샷 저장 실패', 'error', 0);
      } finally {
        uiState.createBusy = false;
      }
    };

    const handleDelete = async (row) => {
      const ok = await showConfirm('삭제', `스냅샷 '${row.snapshotNm}' 을 삭제하시겠습니까?`);
      if (!ok) return;
      try {
        await boApiSvc.zdMeta.removeSnapshot(row.snapshotId, UI, '삭제');
        if (uiState.fromId === row.snapshotId) uiState.fromId = '';
        if (uiState.toId === row.snapshotId) uiState.toId = '';
        await handleSearchData();
        showToast('삭제되었습니다.', 'success');
      } catch (err) {
        console.error('[handleDelete] 스냅샷 삭제 실패', err);
        showToast(err.response?.data?.message || err.message || '삭제 실패', 'error', 0);
      }
    };

    const runDiff = async () => {
      if (!uiState.fromId) { showToast('비교할 이전 스냅샷을 고르세요.', 'error'); return; }
      if (uiState.fromId === uiState.toId) { showToast('서로 다른 두 시점을 고르세요.', 'error'); return; }
      uiState.diffLoading = true;
      try {
        const res = await boApiSvc.zdMeta.getSnapshotDiff(coUtil.cofOmitEmpty({ fromId: uiState.fromId, toId: uiState.toId }), UI, '비교');
        const d = res.data?.data || {};
        diffItems.splice(0, diffItems.length, ...(d.items || []));
        Object.keys(diffSummary).forEach(k => delete diffSummary[k]);
        Object.assign(diffSummary, d.summary || {});
        uiState.chgType = '';
        uiState.diffDone = true;
      } catch (err) {
        console.error('[runDiff] 스냅샷 비교 실패', err);
        showToast(err.response?.data?.message || err.message || '비교 실패', 'error', 0);
      } finally {
        uiState.diffLoading = false;
      }
    };

    onMounted(handleSearchData);

    /* ##### [05] 사용자 함수 (컬럼정의) ########################################### */

    const cfSnapOpts = computed(() => snapshots.map(s => ({ value: s.snapshotId, label: `${s.snapshotNm} (${String(s.regDate || '').replace('T', ' ').slice(0, 16)})` })));
    const cfDiffRows = computed(() => uiState.chgType ? diffItems.filter(d => d.chgTypeCd === uiState.chgType) : diffItems);
    const cfDiffChips = computed(() => Object.entries(diffSummary).map(([cd, cnt]) => ({ cd, cnt, label: CHG[cd]?.label || cd })));
    const fnDate = (v) => v ? String(v).replace('T', ' ').slice(0, 19) : '';

    const columns = {
      snaps: [
        { key: 'snapshotNm', label: '스냅샷명', cellInnerStyle: 'font-weight:600;' },
        { key: 'tableCnt', label: '테이블', align: 'right', width: '70px' },
        { key: 'columnCnt', label: '컬럼', align: 'right', width: '80px', fmt: (v) => Number(v || 0).toLocaleString() },
        { key: 'snapshotDesc', label: '메모', cellStyle: 'font-size:12px;color:#666;' },
        { key: 'regBy', label: '저장자', width: '100px' },
        { key: 'regDate', label: '저장일시', width: '150px', fmt: (v) => fnDate(v) },
        { type: 'actions', actions: [
          { label: '지금 DB와 비교', cls: 'btn btn_search btn-sm', onClick: (row) => handleBtnAction('diff-current', { row }) },
          { label: '삭제', cls: 'btn btn_row_delete btn-sm', onClick: (row) => handleBtnAction('snapshot-delete', { row }) },
        ] },
      ],
      diff: [
        { key: 'chgTypeCd', label: '변경', width: '150px', fmt: (v) => CHG[v]?.label || v, badge: (r) => CHG[r.chgTypeCd]?.badge || 'badge-gray' },
        { key: 'tableNm', label: '테이블', link: true, cellInnerStyle: 'font-family:monospace;color:#1d4ed8;' },
        { key: 'colNm', label: '컬럼', cellStyle: 'font-family:monospace;font-weight:600;', fmt: (v) => v || '' },
        { key: 'beforeVal', label: '이전', cellStyle: 'font-family:monospace;font-size:12px;color:#dc2626;', fmt: (v) => v ?? '' },
        { key: 'afterVal', label: '이후', cellStyle: 'font-family:monospace;font-size:12px;color:#15803d;', fmt: (v) => v ?? '' },
        { key: 'chgDesc', label: '설명', cellStyle: 'font-size:12px;color:#475569;' },
      ],
    };

    /* ##### [06] return ######################################################### */

    return { columns, uiState, snapshots, createForm, cfSnapOpts, cfDiffRows, cfDiffChips, diffItems, CHG,
      handleBtnAction, handleGridCellAction };
  },
  template: `
<bo-page title="스키마변경이력">
  <div style="margin:0 0 10px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;font-size:12.5px;color:#475569;line-height:1.6;">
    지금 DB 의 테이블·컬럼 정의를 <b>스냅샷</b>으로 저장하고, 다른 시점과 비교합니다. 배포·DDL 작업 전후로 하나씩 저장해 두세요.
    컬럼이 하나 사라지고 같은 타입의 컬럼이 같은 자리(또는 같은 코멘트)로 생겼으면 <b>이름 변경(추정)</b>으로 묶어 보여 줍니다 —
    옛 이름을 쓰는 쿼리는 <b>쿼리점검</b>에서 찾을 수 있습니다.
  </div>
  <bo-container title="스냅샷 목록" :count-text="'총 ' + snapshots.length + '건'">
    <template #toolbar-actions>
      <button class="btn btn_new" @click="handleBtnAction('create-open')">📸 지금 스냅샷 저장</button>
    </template>
    <bo-grid bare :columns="columns.snaps" :rows="snapshots" row-key="snapshotId" :loading="uiState.loading" table-max-height="300px"
      empty-text="저장된 스냅샷이 없습니다. [지금 스냅샷 저장]으로 기준점을 만드세요." />
  </bo-container>
  <bo-container title="비교">
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
      <span style="font-size:12.5px;">이전</span>
      <select class="form-control" style="width:300px;" v-model="uiState.fromId">
        <option value="">-- 스냅샷 선택 --</option>
        <option v-for="o in cfSnapOpts" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <span style="font-size:12.5px;">→ 이후</span>
      <select class="form-control" style="width:300px;" v-model="uiState.toId">
        <option value="">지금 DB</option>
        <option v-for="o in cfSnapOpts" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <button class="btn btn_save" :disabled="uiState.diffLoading" @click="handleBtnAction('diff-run')">{{ uiState.diffLoading ? '⏳ 비교 중…' : '비교' }}</button>
    </div>
    <div v-if="uiState.diffDone" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
      <span v-if="!cfDiffChips.length" style="font-size:12.5px;color:#16a34a;">변경 없음 — 두 시점의 정의가 같습니다.</span>
      <button v-for="c in cfDiffChips" :key="c.cd" @click="handleBtnAction('chg-filter', c.cd)"
        :style="'border:1px solid ' + (uiState.chgType===c.cd ? '#e8587a' : '#e2e8f0') + ';background:' + (uiState.chgType===c.cd ? '#fff8f9' : '#fff') + ';border-radius:14px;padding:3px 10px;font-size:12px;cursor:pointer;'">
        {{ c.label }} <b>{{ c.cnt }}</b>
      </button>
    </div>
    <bo-grid v-if="uiState.diffDone" bare :columns="columns.diff" :rows="cfDiffRows" :loading="uiState.diffLoading" table-max-height="56vh"
      empty-text="변경 사항이 없습니다." grid-id="diff-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
  </bo-container>

  <bo-modal :show="uiState.createOpen" title="📸 지금 DB 스냅샷 저장" width="520px" @close="handleBtnAction('create-close')">
    <div style="display:flex;flex-direction:column;gap:8px;">
      <label class="form-label">스냅샷 이름</label>
      <input class="form-control" v-model="createForm.snapshotNm" placeholder="예: 2026-10-03 배포 전" />
      <label class="form-label">메모</label>
      <textarea class="form-control" rows="3" v-model="createForm.snapshotDesc" placeholder="무엇을 바꾸기 전/후인지 적어 두면 비교할 때 편합니다"></textarea>
    </div>
    <template #footer>
      <button class="btn btn_save" :disabled="uiState.createBusy" @click="handleBtnAction('create-save')">{{ uiState.createBusy ? '저장 중…' : '저장' }}</button>
      <button class="btn btn_close" @click="handleBtnAction('create-close')">닫기</button>
    </template>
  </bo-modal>
</bo-page>
`,
};
