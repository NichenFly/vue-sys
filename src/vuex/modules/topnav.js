export default {
  state: {
    nowIndex: 0
  },
  getters: {
    nowIndex: state => state.nowIndex
  },
  mutations: {
    to (state, index) {
      state.nowIndex = index
    }
  },
  actions: {
    to: ({
      commit
    }, key) => commit('to', key)
  }
}
