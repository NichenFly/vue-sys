import * as types from './../mutations-types'
import axios from 'axios'

export default {
  state: {
    tabsList: 0,
    tabIndex: 0,
    nowIndex: 0,
    editableTabs: [],
    topItems: [],
    nowPages: ''
  },
  getters: {
    tabsList: state => state.tabsList,
    tabIndex: state => state.tabIndex,
    nowIndex: state => state.nowIndex,
    editableTabs: state => state.editableTabs,
    topItems: state => state.topItems,
    nowPages: state => state.nowPages
  },
  mutations: {
    [types.GET_ITEMS] (state, action) {
      state.topItems = action.topItems
    },
    [types.CUT_TAB] (state, index) {
      state.nowIndex = index
    },
    [types.TABS_CUT] (state, targetName) {
      let Inx = targetName.index
      state.nowPages = state.editableTabs[Inx].index
    },
    [types.ADD_TAB] (state, subitem) {
      let tabs = state.editableTabs
      let newTabName = ++state.tabIndex + ''
      tabs.push({
        title: subitem.title,
        name: newTabName,
        index: subitem.index
      })
      state.tabsList = newTabName
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
    getItems ({commit}, key) {
      axios.get('https://www.easy-mock.com/mock/594b682e8ac26d795f42fdff/demo2/data')
        .then(function (res) {
          commit('GET_ITEMS', res.data)
        })
    },
    cutTab: ({commit}, key) => commit('CUT_TAB', key),
    tabsCut: ({commit}, key) => commit('TABS_CUT', key),
    addTab: ({commit}, key) => commit('ADD_TAB', key),
    removeTab: ({commit}, key) => commit('REMOVE_TAB', key)
  }
}
