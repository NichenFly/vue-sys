import * as types from './../mutations-types'
import axios from 'axios'

export default {
  state: {
    editableTabs: [],
    topItems: [],
    tabsList: '',
    nowPages: ''
  },
  getters: {
    tabsList: state => state.tabsList,
    editableTabs: state => state.editableTabs,
    topItems: state => state.topItems,
    nowPages: state => state.nowPages
  },
  mutations: {
    [types.GET_ITEMS] (state, action) {
      state.topItems = action.topItems
    },

    [types.TABS_CUT] (state, targetName) {
      let Inx = targetName.index
      state.nowPages = state.editableTabs[Inx].index
    },

    [types.ADD_TAB] (state, subitem) {
      let tabs = state.editableTabs
      let newTabName = ++state.tabsList + ''
      state.tabsList = newTabName
      // 增加tabs
      tabs.push({
        title: subitem.title,
        name: newTabName,
        index: subitem.index
      })
      // 对比右列表，去重
      var rightTab = []
      var set = new Set()
      tabs.forEach((tab) => {
        if (!set.has(tab.index)) {
          rightTab.push(tab)
          set.add(tab.index)
        } else {
          for (var i = 0; i < rightTab.length; i++) {
            var e = rightTab[i]
            if (e.index === subitem.index) {
              state.tabsList = i + 1 + ''
            }
          }
        }
      })
      state.editableTabs = rightTab
    },

    [types.REMOVE_TAB] (state, targetName) {
      let tabs = state.editableTabs
      let activeName = state.tabsList
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
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
