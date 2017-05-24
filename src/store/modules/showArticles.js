import {axiosInstance} from '../axios_custom.js'
import * as types from '../mutations_type.js'

const state = {
  articles: []
}

const getters = {
  showArticles: state => state.articles
}

const mutations = {
  [types.SET_ARTICLES] (state, articles) {
    console.log(articles.data)
    state.articles = articles.data
  },
  [types.DELETE_ARTICLES] (state, id) {
    for(var i = 0; i < state.articles.length; i++) {
      if(state.articles[i].id === id) {
        state.articles.splice(i, 1)
      }
    }
  }
}

const actions = {
  async takeArticles ({commit}, keywords = '旅遊') {
    try {
      const articlesUrl = '/articles'
      const articlesBody = {
        params: {
          keywords: keywords,
          skip: 0,
          limit: 50
        }
      }
      const response = await axiosInstance.get(articlesUrl, articlesBody)
      console.log(response)
      commit(types.SET_ARTICLES, response)
    } catch (error) {
      console.log(error)
    }
  },
  async deleteArticles ({commit}, id) {
    try {
      const deleteUrl = '/articles/' + id
      const response = await axiosInstance.delete(deleteUrl)
      console.log(response)
      commit(types.DELETE_ARTICLES, id)
    } catch (error) {
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
