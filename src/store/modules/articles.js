import Vue from 'vue'
import {axiosInstance} from '../axios_custom.js'

const state = {

}

const getters = {
  getClasses: state => state.classes
}

const mutations = {

}

const actions = {
  async postArticles({commit}, article) {
    console.log(article)
    try {
      const url = '/articles'
      const response = await axiosInstance.post(url, article)
      console.log(response)
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
