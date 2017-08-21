export default {
  state: {
    topNav: [{
      link: '/read',
      title: '小思阅读'
    }, {
      link: '/arts',
      title: '小思艺术'
    }, {
      link: '/learn',
      title: '小思课程'
    }]
  },
  getters: {
    topNav: state => state.topNav
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
