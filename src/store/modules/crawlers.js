import Vue from 'vue'
import * as types from '../mutations_type.js'
import {axiosInstance} from '../axios_custom.js'

const state = {
  parser: {},
  urls: [],
  articles: []
}

const getters = {
  getParsers: state => state.parsers,
  getUrl: state => state.url,
  getArticles: state => state.articles
}

const mutations = {
  [types.SET_PARSER](state, parser) {
    var parserData = parser.data
    var article = new Object();
    article.title = parserData['ogp']['og:title'];
    article.description = parserData['ogp']['og:description']
    article.image = parserData['ogp']['og:image']
    state.articles.push(article)
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
        url: url,
        depth: 2
      }
    })
      .then((response) => {
        //console.log(response)
        for(var index in response.data) {
          var url = response.data[index]
          if(url.startsWith('https://dq.yam.com')) {
            axiosInstance.get('/crawlers/parser', {
              params: {
                url: url,
                depth: 1
              }
            })
              .then((response) => {
                //console.log(response)
                //var obj = JSON.parse(response.data)
                commit('SET_PARSER', response)
              })
              .catch((error) => console.log(error))
          }
        }
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
