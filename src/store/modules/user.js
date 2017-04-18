import Vue from 'vue'
import {axiosInstance} from '../axios_custom.js'
import {router} from '../../main.js'
import * as types from '../mutations_type.js'
import {IS_LOGGEDIN} from '../key.js'


const state = {
  user: {}
}

const getters = {
  getUser: state => state.user,
  loggedIn: state => window.localStorage.getItem(IS_LOGGEDIN, false)
}

const mutations = {
  [types.SET_USER](state, user) {
    state.user = user
  },
  [types.SET_LOGIN](state, isLoggedIn) {
    window.localStorage.setItem(IS_LOGGEDIN, isLoggedIn)
    if(isLoggedIn) {
      router.push('/')
    }
  }
}

const actions = {
  postLogin({commit}, account, password) {
    axiosInstance.post('/users/login', { 
      account: 'henry811010@gmail.com',
      password: 'sonic298'
    })
      .then((response) => {
        console.log(response)
        commit('SET_LOGIN', true)
        commit('SET_USER', response)
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
