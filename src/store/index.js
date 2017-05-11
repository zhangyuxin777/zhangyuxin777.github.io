import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)
const state = {
  titleBar: {
    title: '主页'
  },
  spinner: false,
  article: {
    list: []
  },
  experience: {
    list: []
  },
  think: {
    list: []
  },
  count: 0,
  fontSize: 0,
  barStatus: 2
}

const mutations = {
  UPDATE_TITLE (state, title) {
    state.titleBar.title = title
  },
  ADD_ARTICLE_LIST (state, list) {
    state.article.list = list
  },
  ADD_EXPERIENCE_LIST (state, list) {
    state.experience.list = list
  },
  ADD_THINK_LIST (state, list) {
    state.think.list = list
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
