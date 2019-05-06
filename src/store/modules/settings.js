/**
 *
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 * 控制布局的全局变量
 *
 */
import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'
const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  theme: variables.theme,
  showSettings: showSettings, // 显示配置菜单
  tagsView: tagsView, // 切换
  fixedHeader: fixedHeader, // 固定头部
  sidebarLogo: sidebarLogo // 侧边栏logo
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

