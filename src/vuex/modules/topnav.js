export default {
  state: {
    nowIndex: 0
  },
  getters: {
    nowIndex: state => state.nowIndex
  },
  mutations: {
    reset (state, index) {
      state.nowIndex = index
    }
  },
  actions: {
    reset: ({
      commit
    }, key) => {
      commit('reset', key)
    }
  }
}
