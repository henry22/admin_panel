import Vue from 'vue'
import * as types from '../mutations_type.js'
import {axiosInstance} from '../axios_custom.js'

const state = {
  parser: {},
  urls: []
}

const getters = {
  getParsers: state => state.parsers,
  getUrl: state => state.url
}

const mutations = {
  [types.SET_PARSER](state, parser) {
    state.parser = parser
  },
  [types.SET_URLS](state, urls) {
    state.urls = urls
  }
}

const actions = {
  getParser({commit}, url) {
    axiosInstance.get('/crawlers/parser', {
      params: {
        url: 'string'
      }
    })
      .then((response) => {
        console.log(response)
        commit('SET_PARSER', response)
      })
      .catch((error) => console.log(error))
  },
  getUrls({commit}, url) {
    axiosInstance.get('/crawlers/urls', {
      params: {
        url: url
      }
    })
      .then((reponse) => {
        console.log(response)
        commit('SET_URLS', response)
      })
      .catch((error) => console.log(error))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
