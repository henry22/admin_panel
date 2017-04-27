import Vue from 'vue'
import * as types from '../mutations_type.js'
import {axiosInstance} from '../axios_custom.js'

const state = {
  parser: {},
  urls: [],
  articles: [
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
  getArticles: state => state.articles
}

const mutations = {
  [types.SET_PARSER](state, parser) {
    var parserData = parser.data
    var article = new Object()
    var content = new Object();
    var keywordString = parserData['seo']['keywords']

    content.height = 0;
    content.width = 0;
    if(typeof parserData['ogp']['og:image'][0] !== 'undefined') {
      content.reference = parserData['ogp']['og:image'][0];
    }
    content.content_type = 2;
    content.keywords;

    article.title = parserData['ogp']['og:title'][0]
    article.desc = parserData['ogp']['og:description'][0]
    article.from = parserData['ogp']['og:url'][0]
    article.author = parserData['seo']['author'][0];
    article.author_avatar = parserData['seo']['author-avatar-20'][0];
    article.site_name = parserData['ogp']['og:site_name'][0]
    article.contents = [content];
    article.locale = state.locale;
    article.longitude = 0;
    article.latitude = 0;

    article.keywords = keywordString

    if(typeof article !== 'undefined' && typeof content.reference !== 'undefined') {
      console.log(article)
      if(!state.urlSet.has(article.from)) {
        state.urlSet.add(article.from)
        state.articles.push(article)
      }
    }
  },
  [types.SET_URLS](state, urls) {
    state.urls = urls
  },
  [types.DELETE_ARTICLE](state, index) {
    state.articles.splice(index, 1)
  },
  [types.SET_LOCALE](state, code) {
    state.locale = code
  }
}

const actions = {
  getUrls({commit}, url) {
    axiosInstance.get('/crawlers/urls', {
      params: {
        url: url
      }
    })
      .then((response) => {
        //console.log(response)
        var max = 5;
        var count = 0;
        for(var index in response.data) {
          var articleUrl = response.data[index]
          count++

          if(count <= max) {
            axiosInstance.get('/crawlers/parser', {
              params: {
                url: articleUrl
              }
            })
              .then((response) => {
                commit('SET_PARSER', response)
              })
              .catch((error) => console.log(error))
          }
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
