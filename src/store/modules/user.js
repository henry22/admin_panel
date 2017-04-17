import Vue from 'vue'
import axios from 'axios'

const state = {
  user: {},
  config: {
    headers: {
      'Authorization': 'Bearer b5d8aa6fbb69bcc2ff0b942fa987d1639f0a7a99'
    }
  }
}

const getters = {
  getUser: state => state.user
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

const actions = {
  postLogin({commit}, account, password) {
    axios.post('https://ec2server.santanica.co:81/api/v1/users/login', {
      account: account,
      password: password
    }, state.config)
          .then((response) => {
            console.log(response)
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
