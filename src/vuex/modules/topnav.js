export default {
  state: {
    topNav: [{
      link: '/index',
      title: '首页'
    }, {
      link: '/main',
      title: '内容'
    }]
  },
  getters: {
    topNav: state => state.topNav
  },
  mutations: {
  },
  actions: {
    reset: ({
      commit, getters, rootState
    }, key) => {
      let tabs = rootState.contain.nowTab
      if (tabs) {
        location.reload()
      }
    }
  }
}
