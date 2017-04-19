import Vue from 'vue'
import {axiosInstance} from '../axios_custom.js'
import {router} from '../../main.js'
import * as types from '../mutations_type.js'
import {IS_LOGGEDIN} from '../key.js'


const state = {
  user: {},
  account: '',
  password: ''
}

const getters = {
  getUser: state => state.user,
  loggedIn: () => window.localStorage.getItem(IS_LOGGEDIN, false),
  getAccount: state => state.account,
  getPassword: state => state.password
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
  },
  [types.SET_ACCOUNT](state, account) {
    state.account = account
  },
  [types.SET_PASSWORD](state, password) {
    state.password = password
  }
}

const actions = {
  postLogin({commit}) {
    console.log('hello')
    axiosInstance.post('/users/login', {
      account: state.account,
      password: state.password
    })
      .then((response) => {
        console.log(response)
        console.log(response.data)
        console.log(response.status)
        console.log(response.statusText)
        console.log(response.headers)
        console.log(response.config)
        commit('SET_LOGIN', true)
        commit('SET_USER', response)
      })
      .catch((error) => {
        switch(error.response.data.code) {
          case 90001:
            console.log('Bad Request')
            break
          case 10010:
            console.log('AuthenticationFailed')
            break
          case 90002:
            console.log('Unprocessable Entity')
            break
        }
        // console.log(error.response)
      })
  },
  setAccount({commit}, account) {
    commit('SET_ACCOUNT', account)
  },
  setPassword({commit}, password) {
    commit('SET_PASSWORD', password)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
