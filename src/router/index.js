import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Hello = resolve => require(['views/Hello'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
