import Vue from 'vue'
import {axiosInstance} from '../axios_custom.js'
import * as types from '../mutations_type.js'
import crawlers from './crawlers.js'

const state = {

}

const getters = {

}

const mutations = {
  [types.CLEAR_ARTICLES]() {
    crawlers.state.crawlerArticles = []
  }
}

const actions = {
  async postArticles({commit}, article) {
    try {
      const url = '/articles'
      const response = await axiosInstance.post(url, article)
      console.log(response)
      commit(types.CLEAR_ARTICLES)
    } catch(error) {
      console.log(error)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
