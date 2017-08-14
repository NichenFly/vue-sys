import * as types from './../mutations-types'

export default {
  state: {
    user: ''
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    [types.LOGIN] (state) {
      state.user = '2222'
    }
  },
  actions: {
    logIn: ({
      commit
    }, key) => commit('LOGIN', key)
  }
}
