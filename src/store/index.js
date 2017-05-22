import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category.js'
import articles from './modules/articles.js'
import oauth from './modules/oauth.js'
import user from './modules/user.js'
import crawlers from './modules/crawlers.js'
import language from './modules/language.js'
import showArticles from './modules/showArticles.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    articles,
    oauth,
    user,
    crawlers,
    language,
    showArticles
  },
  strict: true
})
