/* ShopJoy Admin - 운영지원 > DB메타관리 > 표준점검 (2026-10-03)
 * 지금 DB 컬럼을 표준사전(단어·도메인)과 대조한 결과 — 미등록 단어 · 비표준 동의어 · 도메인 위반 · 같은 이름 다른 타입 ·
 * 코멘트 없는 컬럼/테이블 · 한글명 중복 단어. 샘플(zz_)·flyway 테이블은 대상에서 뺀다.
 * 코멘트 없는 컬럼/테이블은 여기서 바로 코멘트를 달 수 있다(COMMENT ON). */
window.ZdMetaStdCheck = {
  name: 'ZdMetaStdCheck',
  props: {
    navigate: { type: Function, required: true },          // 페이지 이동
    dtlId:    { type: [String, Number], default: null },    // 처음 열 점검 항목 코드 (예: 도메인관리 → 'DOMAIN')
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { reactive, computed, onMounted, watch } = Vue;
    const showToast   = window.boApp.showToast;
    const showConfirm = window.boApp.showConfirm;
    const UI = '표준점검';

    const items   = reactive([]);
    const result  = reactive({ checks: {}, summary: {}, targetColCnt: 0, wordCnt: 0 });
    const uiState = reactive({ loading: false, checkCd: 'UNKNOWN_WORD', commentOpen: false, commentBusy: false });
    const searchParam = reactive({ bizCd: '', searchValue: '' });
    const commentForm = reactive({ tableNm: '', colNm: '', commentTxt: '' });
    const codes = reactive({ bizCds: [] });

    /* 점검 항목별 설명·조치 */
    const GUIDE = {
      UNKNOWN_WORD: '컬럼명에 쓰였는데 단어사전에 없는 단어입니다. 단어사전관리 > [컬럼에서 단어 추출]로 등록하면 이 목록에서 빠집니다.',
      SYNONYM: '같은 뜻의 표준 단어가 있는데 비표준 약어를 쓴 컬럼입니다(단어의 "비표준 동의어"에 등록된 약어). 새 컬럼은 추천 컬럼명을 쓰세요 — 기존 컬럼명 변경은 쿼리 영향이 크니 신중히.',
      DOMAIN: '분류어(컬럼 끝 단어)의 도메인과 타입이 맞지 않는 컬럼입니다. 도메인을 늘리거나(허용 타입 추가) 컬럼 타입을 맞추세요.',
      SAME_NAME_TYPE: '같은 컬럼명인데 테이블마다 타입이 다릅니다. 조인·비교 시 형변환이나 잘림이 생길 수 있습니다.',
      NO_COMMENT_COL: '코멘트가 없는 컬럼입니다. [코멘트] 로 바로 달 수 있습니다(단어 분해로 만든 초안이 채워집니다).',
      NO_COMMENT_TABLE: '코멘트(한글명)가 없는 테이블입니다.',
      DUP_WORD_NM: '한글명이 같은 단어가 둘 이상입니다(예: 배송 = dliv/shipping). 하나를 표준으로 정하고 나머지는 동의어로 돌리세요.',
    };

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ ZdMetaStdCheck.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'searchParam-list') return handleSearchData();
      else if (cmd === 'searchParam-reset') { searchParam.bizCd = ''; searchParam.searchValue = ''; return handleSearchData(); }
      else if (cmd === 'check-select') { uiState.checkCd = param; return handleSearchData(); }
      else if (cmd === 'comment-edit') return openComment(param.row);
      else if (cmd === 'comment-save') return saveComment();
      else if (cmd === 'comment-close') { uiState.commentOpen = false; return; }
      else if (cmd === 'goto-word') return props.navigate('zdMetaWordMng');
      else if (cmd === 'goto-domain') return props.navigate('zdMetaDomainMng');
      console.warn('[handleBtnAction] unknown cmd:', cmd);
    };

    const handleGridCellAction = (cmd, colKey, row) => {
      if (cmd === 'items-cellClick' && colKey === 'tableNm' && row.tableNm) return props.navigate('zdMetaTableMng', { id: row.tableNm });
    };

    /* ##### [04] 내장 사용 함수 ################################################### */

    const handleSearchData = async () => {
      uiState.loading = true;
      try {
        const res = await boApiSvc.zdMeta.getStdCheck(coUtil.cofOmitEmpty({ checkCd: uiState.checkCd, ...searchParam, searchValue: (searchParam.searchValue || '').trim() }), UI, '점검');
        const d = res.data?.data || {};
        Object.assign(result, { checks: d.checks || {}, summary: d.summary || {}, targetColCnt: d.targetColCnt || 0, wordCnt: d.wordCnt || 0 });
        uiState.checkCd = d.checkCd || uiState.checkCd;
        items.splice(0, items.length, ...(d.items || []));
      } catch (err) {
        console.error('[handleSearchData] 표준점검 실패', err);
        items.splice(0, items.length);
      } finally {
        uiState.loading = false;
      }
    };

    const fnLoadBizCds = async () => {
      try {
        const res = await boApiSvc.zdMeta.getTables({}, UI, '업무구분');
        codes.bizCds = [...new Set((res.data?.data || []).map(t => t.bizCd))].sort().map(b => ({ value: b, label: b }));
      } catch (err) { console.warn('[fnLoadBizCds] 업무구분 조회 실패', err); }
    };

    const openComment = (row) => {
      commentForm.tableNm = row.tableNm;
      commentForm.colNm = row.colNm || '';
      commentForm.commentTxt = row.suggestComment || '';
      uiState.commentOpen = true;
    };

    const saveComment = async () => {
      if (!String(commentForm.commentTxt || '').trim()) { showToast('코멘트를 입력해주세요.', 'error'); return; }
      const label = commentForm.colNm ? `${commentForm.tableNm}.${commentForm.colNm}` : commentForm.tableNm;
      const ok = await showConfirm('코멘트 저장', `${label} 코멘트를 DB 에 바로 반영합니다(COMMENT ON).`);
      if (!ok) return;
      uiState.commentBusy = true;
      try {
        await boApiSvc.zdMeta.saveComment({ tableNm: commentForm.tableNm, colNm: commentForm.colNm || null, commentTxt: commentForm.commentTxt.trim() }, UI, '코멘트저장');
        uiState.commentOpen = false;
        await handleSearchData();
        showToast('코멘트를 저장했습니다.', 'success');
      } catch (err) {
        console.error('[saveComment] 코멘트 저장 실패', err);
        showToast(err.response?.data?.message || err.message || '코멘트 저장 실패', 'error', 0);
      } finally {
        uiState.commentBusy = false;
      }
    };

    /* ★ onMounted */
    const initPage = async () => {
      if (props.dtlId) uiState.checkCd = String(props.dtlId);
      await Promise.all([fnLoadBizCds(), handleSearchData()]);
    };
    onMounted(initPage);
    watch(() => props.dtlId, (v) => { if (v && v !== uiState.checkCd) { uiState.checkCd = String(v); handleSearchData(); } });

    /* ##### [05] 사용자 함수 (컬럼정의) ########################################### */

    const mono = 'font-family:monospace;';
    const tableCol = { key: 'tableNm', label: '테이블', link: true, cellInnerStyle: mono + 'color:#1d4ed8;' };
    const COLS = {
      UNKNOWN_WORD: [
        { key: 'word', label: '단어(약어)', cellInnerStyle: mono + 'font-weight:600;color:#7c3aed;', width: '120px' },
        { key: 'colCnt', label: '쓰인 컬럼 수', align: 'right', width: '100px' },
        { key: 'sampleColNms', label: '쓰인 곳(예)', cellStyle: mono + 'font-size:11px;color:#666;' },
      ],
      SYNONYM: [
        tableCol,
        { key: 'colNm', label: '컬럼명', cellInnerStyle: mono + 'font-weight:600;' },
        { key: 'word', label: '비표준', align: 'center', width: '80px', cellStyle: mono + 'color:#dc2626;' },
        { key: 'stdWord', label: '표준', align: 'center', width: '70px', cellStyle: mono + 'color:#15803d;' },
        { key: 'suggestColNm', label: '추천 컬럼명', cellStyle: mono + 'color:#15803d;' },
        { key: 'dataType', label: '타입', cellStyle: mono + 'font-size:12px;' },
        { key: 'colComment', label: '코멘트', cellStyle: 'font-size:12px;color:#666;' },
      ],
      DOMAIN: [
        tableCol,
        { key: 'colNm', label: '컬럼명', cellInnerStyle: mono + 'font-weight:600;' },
        { key: 'dataType', label: '지금 타입', cellStyle: mono + 'font-size:12px;color:#dc2626;' },
        { key: 'classWord', label: '분류어', align: 'center', width: '70px', cellStyle: mono },
        { key: 'expected', label: '도메인(허용 타입)', cellStyle: 'font-size:12px;color:#15803d;' },
        { key: 'colComment', label: '코멘트', cellStyle: 'font-size:12px;color:#666;' },
      ],
      SAME_NAME_TYPE: [
        { key: 'colNm', label: '컬럼명', cellInnerStyle: mono + 'font-weight:600;', width: '160px' },
        { key: 'typeCnt', label: '타입 수', align: 'right', width: '70px' },
        { key: 'tableCnt', label: '테이블 수', align: 'right', width: '80px' },
        { key: 'typeDist', label: '타입별 개수', cellStyle: mono + 'font-size:12px;color:#7c3aed;' },
        { key: 'detail', label: '타입별 테이블(예)', cellStyle: mono + 'font-size:11px;color:#666;' },
      ],
      NO_COMMENT_COL: [
        tableCol,
        { key: 'colNm', label: '컬럼명', cellInnerStyle: mono + 'font-weight:600;' },
        { key: 'dataType', label: '타입', cellStyle: mono + 'font-size:12px;' },
        { key: 'wordNms', label: '단어 분해', cellStyle: 'font-size:12px;color:#475569;' },
        { key: 'suggestComment', label: '코멘트 초안', cellStyle: 'font-size:12px;color:#15803d;', fmt: (v) => v || '' },
        { type: 'actions', actions: [{ label: '코멘트', cls: 'btn btn_row_edit btn-sm', onClick: (row) => handleBtnAction('comment-edit', { row }) }] },
      ],
      NO_COMMENT_TABLE: [
        tableCol,
        { key: 'tableType', label: '유형', align: 'center', width: '70px', fmt: (v) => v === 'TABLE' ? '테이블' : '뷰' },
        { key: 'colCnt', label: '컬럼', align: 'right', width: '70px' },
        { key: 'rowCnt', label: '행(추정)', align: 'right', width: '90px', fmt: (v) => Number(v || 0).toLocaleString() },
        { type: 'actions', actions: [{ label: '코멘트', cls: 'btn btn_row_edit btn-sm', onClick: (row) => handleBtnAction('comment-edit', { row }) }] },
      ],
      DUP_WORD_NM: [
        { key: 'wordNm', label: '한글명', width: '140px', cellInnerStyle: 'font-weight:600;' },
        { key: 'wordCnt', label: '단어 수', align: 'right', width: '80px' },
        { key: 'abbrs', label: '약어들', cellStyle: mono + 'color:#7c3aed;' },
      ],
    };
    const cfCols = computed(() => COLS[uiState.checkCd] || COLS.UNKNOWN_WORD);
    const cfChecks = computed(() => Object.entries(result.checks || {}).map(([cd, nm]) => ({ cd, nm, cnt: result.summary[cd] || 0 })));
    const columns = {
      baseSearch: [
        { key: 'bizCd', type: 'select', label: '업무', options: () => codes.bizCds, nullLabel: '업무 전체' },
        { key: 'searchValue', type: 'text', label: '검색어', placeholder: '테이블·컬럼·단어' },
      ],
    };

    /* ##### [06] return ######################################################### */

    return {
      columns, codes, uiState, searchParam, result, items, commentForm, GUIDE, cfCols, cfChecks,
      handleBtnAction, handleGridCellAction,
    };
  },
  template: `
<bo-page title="표준점검">
  <bo-container>
    <bo-search-area @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin:0 0 12px;">
    <div v-for="c in cfChecks" :key="c.cd" @click="handleBtnAction('check-select', c.cd)"
      :style="'cursor:pointer;padding:12px 14px;border-radius:10px;border:2px solid ' + (uiState.checkCd===c.cd ? '#e8587a' : '#e2e8f0') + ';background:' + (uiState.checkCd===c.cd ? '#fff8f9' : '#fff') + ';'">
      <div style="font-size:12px;color:#64748b;">{{ c.nm }}</div>
      <div :style="'font-size:22px;font-weight:800;color:' + (c.cnt ? '#dc2626' : '#16a34a') + ';'">{{ c.cnt.toLocaleString() }}</div>
    </div>
  </div>
  <bo-container :title="(result.checks[uiState.checkCd] || '') + ' 목록'" :count-text="'총 ' + items.length.toLocaleString() + '건 · 대상 컬럼 ' + result.targetColCnt.toLocaleString() + ' · 등록 단어 ' + result.wordCnt">
    <template #toolbar-actions>
      <button v-if="uiState.checkCd==='UNKNOWN_WORD' || uiState.checkCd==='DUP_WORD_NM'" class="btn btn_search" @click="handleBtnAction('goto-word')">단어사전관리로</button>
      <button v-if="uiState.checkCd==='DOMAIN'" class="btn btn_search" @click="handleBtnAction('goto-domain')">도메인관리로</button>
    </template>
    <div style="margin:0 0 8px;padding:8px 12px;background:#f8fafc;border-radius:6px;font-size:12px;color:#475569;">{{ GUIDE[uiState.checkCd] }}</div>
    <bo-grid bare :columns="cfCols" :rows="items" :loading="uiState.loading" table-max-height="62vh" empty-text="문제가 없습니다. 👍"
      grid-id="items-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row, e)" />
  </bo-container>

  <bo-modal :show="uiState.commentOpen" :title="'코멘트 — ' + commentForm.tableNm + (commentForm.colNm ? '.' + commentForm.colNm : ' (테이블)')" width="560px" @close="handleBtnAction('comment-close')">
    <div style="font-size:12px;color:#64748b;margin-bottom:8px;">DB 에 바로 반영됩니다(COMMENT ON).</div>
    <textarea class="form-control" rows="4" v-model="commentForm.commentTxt" style="width:100%;"></textarea>
    <template #footer>
      <button class="btn btn_save" :disabled="uiState.commentBusy" @click="handleBtnAction('comment-save')">{{ uiState.commentBusy ? '저장 중…' : '저장' }}</button>
      <button class="btn btn_close" @click="handleBtnAction('comment-close')">닫기</button>
    </template>
  </bo-modal>
</bo-page>
`,
};
