import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const NotFound = resolve => require(['views/notfound'], resolve)
const user = resolve => require(['views/user'], resolve)
const login = resolve => require(['views/login'], resolve)
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
      path: '*',
      name: '404',
      component: NotFound,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/read',
      component: contain,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/read/vuetable',
          component: vuetable,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vueform',
          component: vueform,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vueupload',
          component: vueupload,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuecascader',
          component: vuecascader,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vueslider',
          component: vueslider,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuetree',
          component: vuetree,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuetransfer',
          component: vuetransfer,
          meta: {
            requireAuth: true
          }
        }
      ]
    }, {
      path: '/arts',
      component: contain,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/arts/vuetable',
          component: vuetable,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/arts/vueform',
          component: vueform,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/arts/vueupload',
          component: vueupload,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/arts/vuecascader',
          component: vuecascader,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/arts/vueslider',
          component: vueslider,
          meta: {
            requireAuth: true
          }
        }
      ]
    }, {
      path: '/learn',
      component: contain,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/learn/vuetable',
          component: vuetable,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/learn/vueform',
          component: vueform,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
  let login = localStorage.getItem('login')
  if (to.meta.requireAuth) {
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

