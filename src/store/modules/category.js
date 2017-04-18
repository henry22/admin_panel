import Vue from 'vue'
import {axiosInstance} from '../axios_custom.js'
import * as types from '../mutations_type.js'

const state = {
  categoryList: [
    // {
    //   id: "1",
    //   title: "Web design course",
    //   duration: "6 Months",
    //   professor: "Jane Doe",
    //   students: "200+",
    //   imageUrl: "https://hahow.in/images/57622ff5f1399b0900e234d4"
    // },
    // {
    //   id: "2",
    //   title: "Web design course",
    //   duration: "6 Months",
    //   professor: "Jane Doe",
    //   students: "200+",
    //   imageUrl: "https://hahow.in/images/57622ff5f1399b0900e234d4"
    // },
    // {
    //   id: "3",
    //   title: "Web design course",
    //   duration: "6 Months",
    //   professor: "Jane Doe",
    //   students: "200+",
    //   imageUrl: "https://hahow.in/images/57622ff5f1399b0900e234d4"
    // },
    // {
    //   id: "4",
    //   title: "Web design course",
    //   duration: "6 Months",
    //   professor: "Jane Doe",
    //   students: "200+",
    //   imageUrl: "https://hahow.in/images/57622ff5f1399b0900e234d4"
    // }
  ]
}

const getters = {
  getCategory: state => state.categoryList
}

const mutations = {
  [types.GET_CATEGORIES](state, categories) {
    state.categoryList = categories.data
  },
  [types.POST_CATEGORIES](state, category) {
    state.categoryList.push(category)
  },
  [types.DELETE_CATEGORIES](state, id) {
    state.categoryList.forEach(function(category) {
      if(category.id === id) {
        state.categoryList.splice(category, 1)
      }
    })
  },
  [types.PATCH_CATEGORIES](state, newCategory) {
    state.categoryList.forEach(function(category) {
      if(category.id === newCategory.id) {
        category.name = newCategory.name
        category.desc = newCategory.desc
        category.avatar = newCategory.avatar
      }
    })
  }
}

const actions = {
  getCategories({commit}) {
    // axios.interceptors.request.use(request => {
    //   console.log('Starting Request', request)
    //   return request
    // })
    //
    // axios.interceptors.response.use(response => {
    //   console.log('Response:', response)
    //   return response
    // })
    axiosInstance.get('/categories')
      .then((response) => {
        console.log(response)
        commit('GET_CATEGORIES', response)
      })
      .catch((error) => console.log(error))
  },
  postCategories({commit}) {
    axiosInstance.post('/categories', {
      name: 'string',
      desc: 'string',
      avatar: 'string'
    })
      .then((response) => {
        console.log(response)
        commit('POST_CATEGORIES', response)
      })
      .catch((error) => console.log(error))
  },
  deleteCategories({commit}, id) {
    axiosInstance.delete('/categories')
      .then((response) => {
        console.log(response)
        commit('DELETE_CATEGORIES', id)
      })
      .catch((error) => console.log(error))
  },
  patchCategories({commit}, category) {
    axiosInstance.patch('/categories', {
      name: category.name,
      desc: category.desc,
      avatar: category.avatar
    })
      .then((response) => {
        console.log(response)
        commit('PATCH_CATEGORIES', response)
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
