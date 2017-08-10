export default {
  state: {
    routernav: [
      {
        to: '/index',
        name: '首页'
      }, {
        to: '/user',
        name: '个人中心'
      }
    ]
  },
  getters: {
    routernav: state => state.routernav
  },
  mutations: {
    to (state) {
      localStorage.removeItem('breadcrumb')
      location.reload()
    }
  },
  actions: {
    to: ({commit}, key) => commit('to', key)
  }
}
