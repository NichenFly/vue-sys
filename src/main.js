import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/css/reset.css'

import store from './vuex'

import axios from 'axios'
Vue.prototype.$axios = axios

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
