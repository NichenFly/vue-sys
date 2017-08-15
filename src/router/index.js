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

const router = new Router({
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
        requiresAuth: true
      }
    }, {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/main',
      component: contain,
      meta: {
        requiresAuth: true
      },
      children: [{
        path: '/main/vuetable',
        name: 'vuetable',
        component: vuetable,
        meta: {
          requiresAuth: true
        }
      }, {
        path: '/main/vueform',
        name: 'vueform',
        component: vueform,
        meta: {
          requiresAuth: true
        }
      }, {
        path: '/main/vueupload',
        name: 'vueupload',
        component: vueupload,
        meta: {
          requiresAuth: true
        }
      }, {
        path: '/main/vuecascader',
        name: 'vuecascader',
        component: vuecascader,
        meta: {
          requiresAuth: true
        }
      }, {
        path: '/main/vueslider',
        name: 'vueslider',
        component: vueslider,
        meta: {
          requiresAuth: true
        }
      }, {
        path: '/main/vuetree',
        name: 'vuetree',
        component: vuetree,
        meta: {
          requiresAuth: true
        }
      }, {
        path: '/main/vuetransfer',
        name: 'vuetransfer',
        component: vuetransfer,
        meta: {
          requiresAuth: true
        }
      }]
    }
  ]
})
// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
  let login = sessionStorage.getItem('login')
  if (to.meta.requiresAuth) {
    if (!login) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

export default router

