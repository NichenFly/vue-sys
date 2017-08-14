import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const NotFound = resolve => require(['views/notfound'], resolve)
const user = resolve => require(['views/user'], resolve)
const login = resolve => require(['views/login'], resolve)
const index = resolve => require(['views/index'], resolve)
const contain = resolve => require(['views/contain'], resolve)

const vuetable = resolve => require(['components/pages/vueTable'], resolve)
const vueform = resolve => require(['components/pages/vueForm'], resolve)
const vueupload = resolve => require(['components/pages/vueUpload'], resolve)
const vuecascader = resolve => require(['components/pages/vueCascader'], resolve)
const vueslider = resolve => require(['components/pages/vueSlider'], resolve)
const vuecharts = resolve => require(['components/pages/vueCharts'], resolve)
const vuetransfer = resolve => require(['components/pages/vueTransfer'], resolve)

export default new Router({
  routes: [{
    path: '*',
    component: NotFound
  }, {
    path: '/',
    redirect: 'index'
  }, {
    path: '/login',
    component: login
  }, {
    path: '/index',
    component: index
  }, {
    path: '/user',
    component: user
  }, {
    path: '/main',
    component: contain,
    children: [{
      path: '/main/vuetable',
      component: vuetable
    }, {
      path: '/main/vueform',
      component: vueform
    }, {
      path: '/main/vueupload',
      component: vueupload
    }, {
      path: '/main/vuecascader',
      component: vuecascader
    }, {
      path: '/main/vueslider',
      component: vueslider
    }, {
      path: '/main/vuecharts',
      component: vuecharts
    }, {
      path: '/main/vuetransfer',
      component: vuetransfer
    }]
  }]
})
