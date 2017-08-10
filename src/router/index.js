import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Hello = resolve => require(['views/Hello'], resolve)
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
      component: Hello
    }, {
      path: '/read',
      alias: '/index',
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
    }
  ]
})
