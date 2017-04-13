import Vue from 'vue'

const state = {
  categoryList: [
    {
      id: "1",
      title: "Web design course",
      duration: "6 Months",
      professor: "Jane Doe",
      students: "200+",
      imageUrl: "https://hahow.in/images/57622ff5f1399b0900e234d4"
    },
    {
      id: "2",
      title: "Web design course",
      duration: "6 Months",
      professor: "Jane Doe",
      students: "200+",
      imageUrl: "https://hahow.in/images/57622ff5f1399b0900e234d4"
    },
    {
      id: "3",
      title: "Web design course",
      duration: "6 Months",
      professor: "Jane Doe",
      students: "200+",
      imageUrl: "https://hahow.in/images/57622ff5f1399b0900e234d4"
    },
    {
      id: "4",
      title: "Web design course",
      duration: "6 Months",
      professor: "Jane Doe",
      students: "200+",
      imageUrl: "https://hahow.in/images/57622ff5f1399b0900e234d4"
    }
  ]
}

const getters = {
  getCategory: state => state.categoryList
}

const mutations = {

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
