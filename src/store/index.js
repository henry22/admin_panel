import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category.js'
import cards from './modules/cards.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    cards
  },
  strict: true
})
