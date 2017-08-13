import * as types from './../mutations-types'
import axios from 'axios'

export default {
  state: {
    // 左侧导航
    navItems: [],
    // 右侧内容
    tabList: [],
    breadcrumb: [],
    nowTab: '',
    nowPages: ''
  },
  getters: {
    // 左侧导航
    navItems: state => state.navItems,
    // 右侧内容
    tabList: state => state.tabList,
    breadcrumb: state => state.breadcrumb,
    nowPages: state => state.nowPages,
    nowTab: state => state.nowTab
  },
  mutations: {
    // 获取数据
    [types.GET_ITEMS] (state, res) {
      state.navItems = res.navItems
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
        if (!set.has(tab.link)) {
          rightTab.push(tab)
          set.add(tab.link)
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
      let activeName = state.nowTab
      tabs.forEach((tab, index) => {
        if (tab.name === tabname) {
          let nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
      state.nowTab = activeName
      state.tabList = tabs.filter(tab => tab.name !== tabname)
    }
  },
  actions: {
    getItems ({
      commit
    }, key) {
      axios.get('https://www.easy-mock.com/mock/594b682e8ac26d795f42fdff/demo2/data')
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
