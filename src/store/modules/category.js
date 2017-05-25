import Vue from 'vue'
import {axiosInstance} from '../axios_custom.js'
import * as types from '../mutations_type.js'
import {PhotoApi} from './photos'

const state = {
  categoryList: [],
  imageFile: null
}

const getters = {
  getCategory: state => state.categoryList
}

const mutations = {
  [types.SET_CATEGORIES](state, categories) {
    state.categoryList = categories.data
  },
  [types.POST_CATEGORIES](state, category) {
    state.categoryList.push(category)
  },
  [types.DELETE_CATEGORIES](state, id) {
    for(var i = 0; i < state.categoryList.length; i++) {
      if(state.categoryList[i].id === id) {
        state.categoryList.splice(i, 1)
      }
    }
  },
  [types.PATCH_CATEGORIES](state, newCategory) {
    state.categoryList.forEach(function(category) {
      if(category.id === newCategory.id) {
        category.name = newCategory.name
        category.desc = newCategory.desc
        category.avatar = newCategory.avatar
      }
    })
  },
  [types.SET_IMAGE_FILE](state, photo) {
    state.imageFile = photo
  }
}

const actions = {
  saveLocalFile({commit}, imageFile) {
    commit(types.SET_IMAGE_FILE, imageFile)
  },
  getCategories({commit}) {
    axiosInstance.get('/categories')
      .then((response) => {
        console.log(response)
        commit(types.SET_CATEGORIES, response)
      })
      .catch((error) => console.log(error))
  },
  async postCategories({commit}, category) {

    try {
        if(state.imageFile != null) {
          const photoId = await PhotoApi.upload(state.imageFile);
          category.avatar = photoId;
          commit(types.SET_IMAGE_FILE, null)
        }
        const url = '/categories';
        const body = {
          name: category.name,
          desc: category.desc,
          avatar: category.avatar
        };
        const response = await axiosInstance.post(url, body);
        commit(types.POST_CATEGORIES, response.data)

    } catch(error){
        console.log(error)
    }
  },
  deleteCategories({commit}, id) {
    var deleteUrl = '/categories/' + id
    axiosInstance.delete(deleteUrl)
      .then((response) => {
        commit(types.DELETE_CATEGORIES, id)
      })
      .catch((error) => console.log(error))
  },
  async patchCategories({commit}, category) {
    try {
        if(state.imageFile != null) {
          const photoId = await PhotoApi.upload(state.imageFile);
          category.avatar = photoId;
          commit(types.SET_IMAGE_FILE, null)
        }
        const url = '/categories/' + category.id;
        const body = {
          name: category.name,
          desc: category.desc,
          avatar: category.avatar
        };
        const response = await axiosInstance.patch(url, body);
        commit(types.PATCH_CATEGORIES, response.data)

    } catch(error){
        console.log(error)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
