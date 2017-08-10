import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import routerexit from './modules/routerexit'
import topnav from './modules/topnav'
import contain from './modules/contain'

export default new Vuex.Store({
  modules: {
    routerexit,   // 顶部登录
    topnav,   // 顶部导航
    contain   // 内容

  }
})
