import local from 'assets/js/local'
export default {
  state: {
    nowIndex: 0
  },
  getters: {
    nowIndex: state => state.nowIndex ? state.nowIndex : local.getItem('index')
  },
  mutations: {
    reset (state, index) {
      state.nowIndex = index
      local.setItem('index', index)
      location.reload()
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
