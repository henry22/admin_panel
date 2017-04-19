import Vue from 'vue'
import * as types from '../mutations_type.js'

const state = {
  photos: []
}

const getters = {
  getPhotos: state => state.photos
}

const mutations = {
  [types.POST_PHOTOS](state, photo) {
    state.photos = photo
  }
}

const actions = {
  postPhotos({commit}, imageFile) {
    axiosInstance.post('/photos', {
      image: imageFile
    })
      .then((response) => {
        console.log(response)
        commit('POST_PHOTOS', response)
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
