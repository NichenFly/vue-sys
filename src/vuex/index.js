import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from './modules/logIn'
import topexit from './modules/topexit'
import topnav from './modules/topnav'
import contain from './modules/contain'

export default new Vuex.Store({
  modules: {
    login,    // 登录
    topexit,   // 顶部登录
    topnav,   // 顶部导航
    contain   // 内容
  }
})
