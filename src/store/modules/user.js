const state = {
  user: null,
  hasSession: false,
};

const getters = {
  currentUser: () => state.user,
  hasSession: () => state.hasSession,
};

const actions = {
  addUser({ commit }, payload) {
    commit("setUser", payload);
    if (payload) {
      commit("setSession", true);
    }
  },
  addWhatchList({ commit }) {
    commit("setWhatchList");
  },
};

const mutations = {
  setUser($state, payload) {
    const statyCopy = $state;
    statyCopy.user = payload;
  },
  setSession($state, payload) {
    const statyCopy = $state;
    statyCopy.hasSession = payload;
  },
};


export default {
  state,
  actions,
  getters,
  mutations,
};
