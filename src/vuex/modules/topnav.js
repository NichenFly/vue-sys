import local from 'assets/js/local'
export default {
  state: {
    nowIndex: ''
  },
  getters: {
    nowIndex: state => state.nowIndex ? state.nowIndex : local.getItem('index')
  },
  mutations: {
    reset (state, key) {
      state.nowIndex = key
      local.setItem('index', key)
    }
  },
  actions: {
    reset: ({
      state, commit, getters, rootState
    }, key) => {
      commit('reset', key)
      let tabs = rootState.contain.nowTab
      if (tabs) {
        location.reload()
      }
    }
  }
}
