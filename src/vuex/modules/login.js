import * as types from './../mutations-types'

export default {
  state: {
    form: ''
  },
  getters: {
    form: state => state.form
  },
  mutations: {
    [types.LOGIN] (state) {
      state.form = '2222'
    }
  },
  actions: {
    logIn: ({
      commit
    }, key) => commit('LOGIN', key)
  }
}
