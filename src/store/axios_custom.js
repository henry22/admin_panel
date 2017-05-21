import axios from 'axios'
import {ACCESS_TOKEN} from './key.js'
import {BASE_URL} from './api_config.js'

export const axiosInstance = axios.create({
  baseURL: BASE_URL
  // headers: {'Authorization': 'Bearer bf35e5199e9a37ca3736f65567b2aea3dc085c92'}
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
        window.localStorage.setItem('accessToken', data.token)
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + data.token
        originalRequest.headers['Authorization'] = 'Bearer ' + data.token
        console.log(window.localStorage.getItem('test'))
        return axios(originalRequest)
      })
  }

  return Promise.reject(error)
})
