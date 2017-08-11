export default {
  state: {
    routernav: [
      {
        to: '/index',
        name: '首页'
      }, {
        to: '/read',
        name: '小思阅读'
      }, {
        to: '/arts',
        name: '小思艺术'
      }, {
        to: '/course',
        name: '小思课程'
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
