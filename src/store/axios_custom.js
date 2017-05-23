import axios from 'axios'
import {ACCESS_TOKEN} from './key.js'
import {BASE_URL} from './api_config.js'
import Qs from 'qs'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  paramsSerializer: function(params) {
   return Qs.stringify(params, {arrayFormat: 'repeat'})
  }
  // headers: {'Authorization': 'Bearer 1b003b9d45be7bc6005c9e12d6aaf4346b035d8d'}
})

axiosInstance.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

axiosInstance.interceptors.response.use(function(response) {
  //Do something with response data
  console.log('Starting Response', response);
  return response
}, function(error) {
  console.log(error.response)
  //Do something with response error
  const originalRequest = error.config

  if(error.response.status === 401 && !originalRequest._retry) {

    originalRequest._retry = true

    const accessToken = window.localStorage.getItem(ACCESS_TOKEN)

    return axiosInstance.get('/oauth/authorise',
    {
      params: {
        response_type: 'token',
        client_id: 'web',
        redirect_uri: 'https://nextstop.ai/api/oauth'
      }
    })
      .then(({data}) => {
        var accessToken = getQueryString(data.substring(1),'access_token')
        window.localStorage.setItem('accessToken', accessToken)
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
        originalRequest.headers['Authorization'] = 'Bearer ' + accessToken
        return axios(originalRequest)
      })
  }

  return Promise.reject(error)
})

function getQueryString(data, key) {
  var splitData = data.split("&")
  for (var i=0; i<splitData.length; i++) {
    var pair = splitData[i].split("=")
    if(pair[0] == key) { return pair[1] }
   }
}
