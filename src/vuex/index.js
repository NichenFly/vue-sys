import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import routerexit from './modules/routerexit'

export default new Vuex.Store({
  modules: {
    routerexit   // 顶部登录

  }
})
