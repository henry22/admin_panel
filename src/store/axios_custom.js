import axios from 'axios'
import {ACCESS_TOKEN} from './key.js'

export const axiosInstance = axios.create({
  baseURL: 'http://ec2server.santanica.co/api/v1',
  timeout: 1000,
  headers: {'Authorization': 'Bearer a8fc2cce51e0175ec3e5b10908a64fb6c58eb98b'}
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
  //Do something with response error
  const originalRequest = error.config

  if(error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true

    const accessToken = window.localStorage.getItem(ACCESS_TOKEN)

    // return axiosInstance.get('/oauth/authorise',
    // {
    //   params: {
    //     response_type: 'token',
    //     client_id: 'chopper'
    //   }
    // })
    //   .then(({data}) => {
    //     window.localStorage.setItem('accessToken', data.token)
    //     axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + data.token
    //     originalRequest.headers['Authorization'] = 'Bearer ' + data.token
    //     return axios(originalRequest)
    //   })
  }

  return Promise.reject(error)
})