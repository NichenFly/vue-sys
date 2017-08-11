export default {
  state: {
    routernav: [
      {
        to: '/index',
        name: '首页'
      }, {
        to: '/read',
        name: '小思阅读'
      }
    ]
  },
  getters: {
    routernav: state => state.routernav
  },
  mutations: {
    to (state) {
    }
  },
  actions: {
    to: ({commit}, key) => commit('to', key)
  }
}
