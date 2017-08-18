import * as types from './../mutations-types'
import api from 'assets/js/api'

export default {
  state: {
    // 左侧导航
    leftNav: [],
    // 右侧内容
    tabList: [],
    breadcrumb: [],
    nowTab: '',
    nowPages: ''
  },
  getters: {
    // 左侧导航
    leftNav: state => state.leftNav,
    // 右侧内容
    tabList: state => state.tabList,
    breadcrumb: state => state.breadcrumb,
    nowPages: state => state.nowPages,
    nowTab: state => state.nowTab
  },
  mutations: {
    // 获取数据
    [types.GET_ITEMS] (state, res) {
      state.leftNav = res.leftNav
    },
    // 切换tab
    [types.TAB_CUT] (state, tabname) {
      let Inx = tabname.index
      state.nowPages = state.tabList[Inx].link
      // 反推左边区域
    },
    // 增加tab
    [types.ADD_TAB] (state, RPC) {
      let tabs = state.tabList
      state.nowTab = RPC.name
      // 增加tabs
      tabs.push({
        title: RPC.title,
        name: RPC.name,
        link: RPC.link
      })

      // 对比右列表，去重
      var rightTab = []
      var set = new Set()
      tabs.forEach((tab) => {
        if (!set.has(tab.name)) {
          rightTab.push(tab)
          set.add(tab.name)
        }
      })
      state.tabList = rightTab

      // 面包屑
      state.breadcrumb = RPC.breadcrumb
      // 当前页面
      state.activedIndex = RPC.link
    },

    // 删除tab
    [types.REMOVE_TAB] (state, tabname) {
      let tabs = state.tabList
      let activeTab = state.nowTab
      let activePage = state.nowPages
      if (activeTab === tabname) {
        // 初始化
        activePage = ''
        activeTab = ''
        // 遍历删除
        tabs.forEach((tab, index) => {
          if (tab.name === tabname) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activePage = nextTab.link
              activeTab = nextTab.name
            }
          }
        })
      }
      state.nowTab = activeTab
      state.nowPages = activePage
      state.tabList = tabs.filter(tab => tab.name !== tabname)
      // 如果tab为1，刷新页面
      if (tabs.length === 1) {
        location.reload()
      }
    }
  },
  actions: {
    getItems ({
      commit
    }, key) {
      api.get('/contain')
        .then(function (res) {
          commit('GET_ITEMS', res.data)
        })
    },

    tabCut: ({
      commit
    }, key) => commit('TAB_CUT', key),

    addTab: ({
      commit
    }, key) => commit('ADD_TAB', key),

    removeTab: ({
      commit
    }, key) => commit('REMOVE_TAB', key)
  }
}
