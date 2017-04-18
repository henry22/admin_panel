import Vue from 'vue'
import {axiosInstance} from '../axios_custom.js'
import * as types from '../mutations_type.js'
import {ACCESS_TOKEN} from '../key.js'


const state = {
  token: null
}

const getters = {
  isAuthenticated: state => state.token !== null
}

const mutations = {
  [types.SET_TOKEN](state, payload) {
    state.token = payload
    loaclStorage.setItem(ACCESS_TOKEN, payload)
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
