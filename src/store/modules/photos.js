import Vue from 'vue'
import * as types from '../mutations_type.js'
import {axiosInstance} from '../axios_custom.js'
import {BASE_URL} from '../api_config.js'
// 
// const state = {
//   photo: ''
// }
//
// const getters = {
//   getPhoto: state => state.photo
// }
//
// const mutations = {
//   [types.SET_PHOTO](state, photo) {
//     state.photo = photo
//   }
// }
//
// const actions = {
//   postPhotos({commit}, imageFile) {
//
//     let data = new FormData();
//
//     data.append('image', imageFile);
//
//     axiosInstance.post('/photos', data, {
//       headers: { 'Content-Type': 'multipart/form-data'},
//     })
//       .then((response) => {
//
//         commit('SET_PHOTO', response.data.id)
//       })
//       .catch((error) => console.log(error))
//
//   }
// }
//
// export default {
//   state,
//   getters,
//   mutations,
//   actions
// }



export const PhotoApi =  {

  upload: async(imageFile) => {
    let data = new FormData();
    data.append('image', imageFile);

    const photoUrl = '/photos';
    const photoBody = data;
    const photoHeader = {
      headers: { 'Content-Type': 'multipart/form-data'},
    }
    try {
        const photoResponse = await axiosInstance.post(photoUrl, photoBody, photoHeader);
        // commit('SET_PHOTO', photoResponse.data.id)

        return photoResponse.data.id;

    } catch(error){
        console.log(error)
        return null;
    }
  }
}
