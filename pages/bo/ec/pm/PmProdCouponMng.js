/* ShopJoy Admin - 상품쿠폰(선물 교환권) 관리 — 조회 / 사용 전 취소 / 유효기간 연장.
   FO 선물하기로 발급된 pm_prod_coupon 을 본다. 서버가 전체를 내려주므로 목록은 화면에서 페이징한다. */
window.PmProdCouponMng = {
  name: 'PmProdCouponMng',
  props: {
    navigate:     { type: Function, required: true },
    openNewWindow: { type: Function, default: () => {} },
  },
  setup(props) {

    /* ##### [01] 초기 변수 정의 #################################################### */

    const { reactive, computed, onMounted } = Vue;
    const showToast   = window.boApp.showToast;
    const showConfirm = window.boApp.showConfirm;
    const rows = reactive([]);
    const uiState = reactive({ loading: false, error: null });
    const searchParam = reactive({ statusCd: '', q: '' });
    const pager = reactive({ pageType: 'PAGE', pageNo: 1, pageSize: 20, pageTotalCount: 0, pageTotalPage: 1, pageSizes: [10, 20, 50, 100], pageCond: {} });

    const STATUS = {
      PENDING_PAY: { label: '결제 대기', badge: 'badge-orange' },
      ACTIVE:      { label: '사용 가능', badge: 'badge-green' },
      USED:        { label: '사용 완료', badge: 'badge-gray' },
      EXPIRED:     { label: '기간 만료', badge: 'badge-red' },
      CANCELLED:   { label: '취소', badge: 'badge-red' },
    };

    /* ##### [02] 액션 모음 (dispatch) ############################################## */

    /* handleBtnAction — 버튼 액션 dispatch (cmd: '{영역명}-기능명') */
    const handleBtnAction = (cmd, param = {}) => {
      console.log(' ■■ PmProdCouponMng.js : handleBtnAction -> ', cmd, param);
      if (cmd === 'searchParam-list') {
        pager.pageNo = 1;
        return handleSearchList();
      } else if (cmd === 'searchParam-reset') {
        Object.assign(searchParam, { statusCd: '', q: '' });
        pager.pageNo = 1;
        return handleSearchList();
      } else if (cmd === 'prodCoupons-pager-setPage') {
        return setPage(param);
      } else {
        console.warn('[handleBtnAction] unknown cmd:', cmd);
      }
    };

    /* handleSelectAction — 선택 액션 dispatch */
    const handleSelectAction = (cmd, param = {}) => {
      console.log(' ■■ PmProdCouponMng.js : handleSelectAction -> ', cmd, param);
      if (cmd === 'prodCoupons-pager-sizeChange') {
        pager.pageNo = 1;
        return renderPage();
      } else {
        console.warn('[handleSelectAction] unknown cmd:', cmd);
      }
    };

    /* handleGridCellAction — 행 액션 버튼 라우터 */
    const handleGridCellAction = (cmd, colKey, row) => {
      console.log(' ■■ PmProdCouponMng.js : handleGridCellAction -> ', cmd, colKey, row);
      if (cmd === 'prodCoupons-cellClick') {
        if (colKey === 'btn_row_extend') { return handleExtend(row); }
        if (colKey === 'btn_row_cancel')  { return handleCancel(row); }
      } else {
        console.warn('[handleGridCellAction] unknown cmd:', cmd);
      }
    };

    /* ##### [03] 초기 함수 ######################################################### */

    let all = [];   // 서버에서 받은 전체(필터 적용됨)

    /* renderPage — 화면 페이징 */
    const renderPage = () => {
      pager.pageTotalCount = all.length;
      pager.pageTotalPage = Math.max(1, Math.ceil(all.length / pager.pageSize));
      if (pager.pageNo > pager.pageTotalPage) { pager.pageNo = pager.pageTotalPage; }
      const s = (pager.pageNo - 1) * pager.pageSize;
      rows.splice(0, rows.length, ...all.slice(s, s + pager.pageSize));
      coUtil.cofBuildPagerNums(pager);
    };

    /* handleSearchList — 목록 조회 */
    const handleSearchList = async () => {
      uiState.loading = true;
      try {
        const res = await boApiSvc.pmProdCoupon.getList({ statusCd: searchParam.statusCd || undefined, q: searchParam.q || undefined }, '상품쿠폰관리', '조회');
        all = res.data?.data || [];
        renderPage();
        uiState.error = null;
      } catch (err) {
        console.error('[catch-info]', err);
        uiState.error = err.message;
      } finally {
        uiState.loading = false;
      }
    };

    const setPage = (n) => { if (n >= 1 && n <= pager.pageTotalPage) { pager.pageNo = n; renderPage(); } };

    const initPage = async () => { await handleSearchList(); };
    onMounted(initPage);

    /* ##### [04] 내장 사용 함수 #################################################### */

    /* handleCancel — 사용 전 쿠폰 취소 */
    const handleCancel = async (c) => {
      if (c.statusCd === 'USED' || c.statusCd === 'CANCELLED') { showToast('취소할 수 없는 상태입니다.', 'error'); return; }
      const ok = await showConfirm('쿠폰 취소', `[${c.couponCode}] ${c.prodNm} 쿠폰을 취소하시겠습니까? (환불은 주문/결제 화면에서 별도 처리)`);
      if (!ok) { return; }
      try {
        await boApiSvc.pmProdCoupon.cancel(c.prodCouponId, '상품쿠폰관리', '취소');
        showToast('취소되었습니다.', 'success');
        await handleSearchList();
      } catch (err) {
        console.error('[catch-info]', err);
        showToast((err.response?.data?.message || err.message || '오류가 발생했습니다.').split('::')[0], 'error', 0);
      }
    };

    /* handleExtend — 유효기간 30일 연장 */
    const handleExtend = async (c) => {
      if (c.statusCd !== 'ACTIVE' && c.statusCd !== 'EXPIRED') { showToast('사용 가능/만료 쿠폰만 연장할 수 있습니다.', 'error'); return; }
      const ok = await showConfirm('기간 연장', `[${c.couponCode}] 유효기간을 30일 연장하시겠습니까?`);
      if (!ok) { return; }
      try {
        await boApiSvc.pmProdCoupon.extend(c.prodCouponId, 30, '상품쿠폰관리', '연장');
        showToast('연장되었습니다.', 'success');
        await handleSearchList();
      } catch (err) {
        console.error('[catch-info]', err);
        showToast((err.response?.data?.message || err.message || '오류가 발생했습니다.').split('::')[0], 'error', 0);
      }
    };

    /* ##### [05] 사용자 함수 (컬럼정의) ############################################ */

    const ymd = (v) => (v ? String(v).slice(0, 10) : '-');
    const columns = {};
    columns.baseSearch = [
      { key: 'statusCd', type: 'select', label: '상태', nullLabel: '상태 전체',
        options: () => Object.keys(STATUS).map(k => ({ value: k, label: STATUS[k].label })) },
      { key: 'q', type: 'text', label: '검색어', placeholder: '쿠폰코드/상품명/보낸분/받는분/연락처' },
    ];
    columns.baseGrid = [
      { key: 'couponCode', label: '쿠폰코드', cellStyle: 'font-family:monospace;font-weight:700' },
      { key: 'prodNm',     label: '상품' },
      { key: 'qty',        label: '수량', align: 'center' },
      { key: 'unitPrice',  label: '단가', align: 'right', fmt: (v) => coUtil.cofWon(v) },
      { key: 'senderNm',   label: '보낸 사람', fmt: (v) => v || '-' },
      { key: 'recvNm',     label: '받는 사람', fmt: (v) => v || '-' },
      { key: 'recvPhone',  label: '받는 분 연락처', fmt: (v) => v || '-' },
      { key: 'ownerMemberId', label: '수령 회원', fmt: (v) => v || '미수령' },
      { key: 'statusCd',   label: '상태', badge: (row) => (STATUS[row.statusCd] || {}).badge || 'badge-gray',
        fmt: (v) => (STATUS[v] || {}).label || v },
      { key: 'issueDate',  label: '발급일', fmt: ymd },
      { key: 'expireDate', label: '만료일', fmt: ymd },
      { key: 'useOrderId', label: '교환 주문', fmt: (v) => v || '-' },
    ];

    /* ##### [06] return ########################################################### */

    return { columns, rows, uiState, searchParam, pager, handleBtnAction, handleSelectAction, handleGridCellAction };
  },
  template: /* html */`
<bo-page title="상품쿠폰관리" :share-query="searchParam">
  <bo-container>
    <bo-search-area :loading="uiState.loading" @search="handleBtnAction('searchParam-list')" @reset="handleBtnAction('searchParam-reset')" :columns="columns.baseSearch" :param="searchParam" />
  </bo-container>
  <bo-container title="상품쿠폰목록" :count-text="pager.pageTotalCount + '건'">
    <div v-if="uiState.error" style="color:#dc2626;padding:12px;">{{ uiState.error }}</div>
    <bo-grid :bare="true" :columns="columns.baseGrid" :rows="rows" row-key="prodCouponId"
      :row-actions="true" grid-id="prodCoupons-cellClick" @cell-click="e => handleGridCellAction(e.cmd, e.colKey, e.row)"
      table-max-height="600px">
      <template #head-actions>관리</template>
      <template #row-actions="{ row: c, gridId }">
        <div class="actions">
          <button class="btn btn_row_edit" @click.stop="handleGridCellAction(gridId, 'btn_row_extend', c)">연장</button>
          <button class="btn btn_row_delete" @click.stop="handleGridCellAction(gridId, 'btn_row_cancel', c)">취소</button>
        </div>
      </template>
    </bo-grid>
    <bo-pager v-if="pager.pageTotalCount > 0" :pager="pager" :on-set-page="n => handleBtnAction('prodCoupons-pager-setPage', n)" :on-size-change="() => handleSelectAction('prodCoupons-pager-sizeChange')" />
  </bo-container>
</bo-page>
`
};
