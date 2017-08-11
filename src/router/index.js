import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

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
  routes: [
    {
      path: '/',
      redirect: 'index'
    }, {
      path: '/index',
      component: index
    }, {
      path: '/read',
      component: contain,
      children: [
        {
          path: '/read/vuetable',
          component: vuetable
        }, {
          path: '/read/vueform',
          component: vueform
        }, {
          path: '/read/vueupload',
          component: vueupload
        }, {
          path: '/read/vuecascader',
          component: vuecascader
        }, {
          path: '/read/vueslider',
          component: vueslider
        }, {
          path: '/read/vuecharts',
          component: vuecharts
        }, {
          path: '/read/vuetransfer',
          component: vuetransfer
        }
      ]
    }, {
      path: '/arts',
      component: contain,
      children: [
        {
          path: '/arts/vuetable',
          component: vuetable
        }, {
          path: '/arts/vueform',
          component: vueform
        }, {
          path: '/arts/vuecascader',
          component: vuecascader
        }, {
          path: '/arts/vueslider',
          component: vueslider
        }
      ]
    }, {
      path: '/course',
      component: contain,
      children: [
        {
          path: '/course/vuetable',
          component: vuetable
        }, {
          path: '/course/vueform',
          component: vueform
        }, {
          path: '/course/vueupload',
          component: vueupload
        }, {
          path: '/course/vuecascader',
          component: vuecascader
        }
      ]
    }
  ]
})
