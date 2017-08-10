// import * as types from './../mutations-types'
export default {
  state: {
    user: {
      name: '小明001'
    }
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    logOut (state) {
      localStorage.clear()
      location.reload()
    }
  },
  actions: {
    logOut: ({commit}, key) => commit('logOut', key)
  }
}
