import local from 'assets/js/local'
export default {
  state: {
    nowIndex: 0
  },
  getters: {
    nowIndex: state => state.nowIndex ? state.nowIndex : local.getItem('leftNav')
  },
  mutations: {
    reset (state, index) {
      state.nowIndex = index
      local.setItem('leftNav', index)
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
