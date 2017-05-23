import Vue from 'vue'
import * as types from '../mutations_type.js'
import {axiosInstance} from '../axios_custom.js'

const state = {
  parser: {},
  urls: [],
  crawlerArticles: [
      // {
      //   imageUrl: "https://hahow.in/images/57623a93f1399b0900e2355f",
      //   image: "https://hahow.in/images/57622ff5f1399b0900e234d4",
      //   title: "新素界營養點心｜無蛋無奶零麵粉",
      //   desc: "素食不是只能吃草，你其實有更多元的選擇；\n素食不是從此跟甜品無緣，你其實有更健康的選擇。"
      // },
      // {
      //   imageUrl: "https://hahow.in/images/57623a93f1399b0900e2355f",
      //   image: "https://hahow.in/images/57622ff5f1399b0900e234d4",
      //   title: "新素界營養點心｜無蛋無奶零麵粉",
      //   desc: "素食不是只能吃草，你其實有更多元的選擇；\n素食不是從此跟甜品無緣，你其實有更健康的選擇。"
      // },
      // {
      //   imageUrl: "https://hahow.in/images/57623a93f1399b0900e2355f",
      //   image: "https://hahow.in/images/57622ff5f1399b0900e234d4",
      //   title: "新素界營養點心｜無蛋無奶零麵粉",
      //   desc: "素食不是只能吃草，你其實有更多元的選擇；\n素食不是從此跟甜品無緣，你其實有更健康的選擇。"
      // }
  ],
  locale: 'zh_Hant',
  urlSet: new Set()
}

const getters = {
  getParsers: state => state.parsers,
  getUrl: state => state.urls,
  getArticles: state => state.crawlerArticles
}

const mutations = {
  [types.SET_PARSER](state, parser) {
    var parserData = parser.data
    var article = new Object()
    var content = new Object()
    var keywordString = parserData['seo']['keywords']

    content.height = 0
    content.width = 0
    if(typeof parserData['ogp']['og:image'] !== 'undefined') {
      content.reference = parserData['ogp']['og:image'][0]
    }
    content.content_type = 2
    content.keywords

    if(typeof parserData['ogp']['og:title'] !== 'undefined') {
      article.title = parserData['ogp']['og:title'][0]
    }
    if(typeof parserData['ogp']['og:description'] !== 'undefined') {
      article.desc = parserData['ogp']['og:description'][0]
    }
    if(typeof parserData['ogp']['og:url'] !== 'undefined') {
      article.from = parserData['ogp']['og:url'][0]
    }
    if(typeof parserData['seo']['author'] !== 'undefined') {
      article.author = parserData['seo']['author'][0]
    }
    if(typeof parserData['seo']['author-avatar-20'] !== 'undefined') {
      article.author_avatar = parserData['seo']['author-avatar-20'][0]
    }
    if(typeof parserData['ogp']['og:site_name'] !== 'undefined') {
      article.site_name = parserData['ogp']['og:site_name'][0]
    }
    article.contents = [content]
    article.locale = state.locale
    article.longitude = 0
    article.latitude = 0

    article.keywords = keywordString

    if(typeof article !== 'undefined' && typeof content.reference !== 'undefined') {
      if(!state.urlSet.has(article.from)) {
        state.urlSet.add(article.from)
        state.crawlerArticles.push(article)
      }
    }
  },
  [types.SET_URLS](state, urls) {
    state.urls = urls
  },
  [types.DELETE_ARTICLE](state, index) {
    state.crawlerArticles.splice(index, 1)
  },
  [types.SET_LOCALE](state, code) {
    state.locale = code
  },
  [types.SET_ARTICLE](state) {
    state.crawlerArticles = []
  },
  [types.CLEAR_URLSET](state) {
    state.urlSet.clear()
  }
}

const actions = {
  getUrls({commit}, url) {
    commit(types.CLEAR_URLSET)
    axiosInstance.get('/crawlers/urls', {
      params: {
        url: url
      }
    })
      .then((response) => {

        for(var index in response.data) {
          var articleUrl = response.data[index]

          axiosInstance.get('/crawlers/parser', {
            params: {
              url: articleUrl
            }
          })
            .then((response) => {
              commit(types.SET_PARSER, response)
            })
            .catch((error) => console.log(error))
        }
        commit('SET_URLS', response)
      })
      .catch((error) => console.log(error))
  },
  deleteArticle({commit}, index) {
    commit(types.DELETE_ARTICLE, index)
  },
  setLocale({commit}, code) {
    commit(types.SET_LOCALE, code)
  },
  setArticle({commit}) {
    commit(types.SET_ARTICLE)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
