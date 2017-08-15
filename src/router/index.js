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
const vuetree = resolve => require(['components/pages/vueTree'], resolve)
const vuetransfer = resolve => require(['components/pages/vueTransfer'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '*',
      name: '404',
      component: NotFound,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/main',
      component: contain,
      meta: {
        requireAuth: true
      },
      children: [{
        path: '/main/vuetable',
        name: 'vuetable',
        component: vuetable,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/main/vueform',
        name: 'vueform',
        component: vueform,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/main/vueupload',
        name: 'vueupload',
        component: vueupload,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/main/vuecascader',
        name: 'vuecascader',
        component: vuecascader,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/main/vueslider',
        name: 'vueslider',
        component: vueslider,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/main/vuetree',
        name: 'vuetree',
        component: vuetree,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/main/vuetransfer',
        name: 'vuetransfer',
        component: vuetransfer,
        meta: {
          requireAuth: true
        }
      }]
    }
  ]
})
