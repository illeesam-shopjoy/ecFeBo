/* ============================================================
 * boUserPrefStore — 관리자 사용자 개인화 설정 Pinia 스토어
 * API: GET/PUT /api/bo/sy/user-pref
 * ============================================================ */
(function (global) {
  const { defineStore } = Pinia;

  const useBoUserPrefStore = defineStore('boUserPref', {
    state: () => ({
      prefs: {},        // { [prefKey]: prefValue }
      loaded: false,
    }),

    getters: {
      sgGetPref: (state) => (key, defaultVal = null) => {
        const v = state.prefs[key];
        return v !== undefined ? v : defaultVal;
      },
    },

    actions: {
      /** 로그인 후 서버에서 전체 개인화 설정 로드 */
      async saLoadPrefs() {
        try {
          const res = await boApi.get('/bo/sy/user-pref', coUtil.cofApiHdr('개인화설정', '조회'));
          const data = res.data?.data || {};
          this.prefs = data;
          this.loaded = true;
        } catch (e) {
          this.loaded = true;
          // 401(미인증)은 조용히 무시 — 로그인 전 또는 세션 만료
          const status = e.response?.status;
          if (status !== 401) {
            const msg = coUtil.cofErrMsg(e);
            window.boApp?.showToast?.('개인화 설정 로드 실패: ' + msg, 'error');
          }
        }
      },

      /** 단일 키 저장 (서버 + 로컬 상태 동시 갱신) */
      async saSetPref(key, value) {
        this.prefs[key] = value;
        // 2026-10-03 API오류로그 정비: 로그인 토큰이 없으면 서버 저장은 생략(로컬 상태만 반영) — 비로그인 저장 시도가 401 오류로그를 남기던 문제
        let hasToken = false;
        try { hasToken = !!localStorage.getItem('modu-bo-auth-accessToken'); } catch (_) {}
        if (!hasToken) return;
        try {
          await boApi.put(
            `/bo/sy/user-pref/save?${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
            {},
            coUtil.cofApiHdr('개인화설정', '저장')
          );
        } catch (e) {
          // 2026-10-03 API오류로그 정비: 401(미인증)은 조용히 무시 — saLoadPrefs 와 동일(세션 만료 처리는 boApiAxios 가 담당)
          if (e.response?.status === 401) return;
          // 로컬 상태는 이미 반영 — 서버 오류만 알림
          const msg = coUtil.cofErrMsg(e);
          window.boApp?.showToast?.('개인화 설정 저장 실패: ' + msg, 'error');
        }
      },
    },
  });

  global.useBoUserPrefStore = useBoUserPrefStore;
  global.sfGetBoUserPrefStore = () => useBoUserPrefStore(global.sfGetPinia?.());
})(window);
