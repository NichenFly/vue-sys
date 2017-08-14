import * as types from './../mutations-types'
import router from 'router'

export default {
  state: {
    form: {
      username: '',
      password: ''
    },
    msg: ''
  },
  getters: {
    form: state => state.form,
    msg: state => state.msg
  },
  mutations: {
    [types.LOGIN] (state) {
      router.push('/index')
      state.form.username = ''
      state.form.password = ''
    }
  },
  actions: {
    logIn: ({
      commit
    }, key) => commit('LOGIN', key)
  }
}
