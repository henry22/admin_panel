import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category.js'
import cards from './modules/cards.js'
import oauth from './modules/oauth.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    cards,
    oauth,
    user
  },
  strict: true
})
