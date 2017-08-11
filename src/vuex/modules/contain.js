import * as types from './../mutations-types'
import axios from 'axios'

export default {
  state: {
    editableTabs: [],
    topItems: [],
    breadcrumb: [],
    tabsList: '',
    nowPages: ''
  },
  getters: {
    editableTabs: state => state.editableTabs,
    topItems: state => state.topItems,
    breadcrumb: state => state.breadcrumb,
    tabsList: state => state.tabsList,
    nowPages: state => state.nowPages
  },
  mutations: {
    // 获取数据
    [types.GET_ITEMS] (state, action) {
      state.topItems = action.topItems
    },
    // 切换tab
    [types.TABS_CUT] (state, targetName) {
      let Inx = targetName.index
      state.nowPages = state.editableTabs[Inx].index
    },
    // 增加tab
    [types.ADD_TAB] (state, subitem) {
      let tabs = state.editableTabs
      state.tabsList = parseInt(10000 * Math.random()) + ''
      // 面包屑
      let listinx = subitem.name.split('-').map((a) => --a)
      let topnav = state.topItems[listinx[0]].title
      let leftnav = state.topItems[listinx[0]].items[listinx[1]].title
      let righttab = subitem.title
      state.breadcrumb = [topnav, leftnav, righttab]
      // 增加tabs
      tabs.push({
        title: subitem.title,
        link: subitem.link,
        name: parseInt(10000 * Math.random()) + ''
      })
      // 对比右列表，去重
      var rightTab = []
      var set = new Set()
      tabs.forEach((tab) => {
        if (!set.has(tab.link)) {
          rightTab.push(tab)
          set.add(tab.link)
        } else {
          for (var i = 0; i < rightTab.length; i++) {
            var e = rightTab[i]
            if (e.link === subitem.link) {
              state.tabsList = e.name + ''
            }
          }
        }
      })
      state.editableTabs = rightTab
    },

    // 删除tab
    [types.REMOVE_TAB] (state, targetName) {
      let tabs = state.editableTabs
      let activeName = state.tabsList
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            console.log(nextTab)
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      state.tabsList = activeName
      state.editableTabs = tabs.filter(tab => tab.name !== targetName)
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

    tabsCut: ({
      commit
    }, key) => commit('TABS_CUT', key),

    addTab: ({
      commit
    }, key) => commit('ADD_TAB', key),

    removeTab: ({
      commit
    }, key) => commit('REMOVE_TAB', key)
  }
}
