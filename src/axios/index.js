import axios from 'axios'
import qs from 'qs'
import { resolveOnChange } from '_antd@4.10.0@antd/lib/input/Input';

const baseConfig = {
  // baseURL: process.env.NODE_ENV = 'production' ? '/' : '/api',
  baseURL: '/api',
  timeOut: 10000,
}
const http  = axios.create(baseConfig);
console.log(process.env.NODE_ENV)
http.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

http.interceptors.response.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

const get = (url, param = {}) => {
  return new Promise((resolve, reject) => {
    http.get(url, { 
      headers : {"Access-Control-Allow-Origin" : "*"}
    }).then(
      (data) => {
      resolve(data)
    }, err => {
      reject(err)
    })
  })
}

const post = (url, param = {}, ifFormData = false) => {
  return new Promise ((resolve, reject) => {
    const resData = ifFormData ? qs.stringify(param) : param;
    http.post(url, resData, (data) => {
      resolve(data)
    }, err => {
      reject(err)
    })
  })
} 

export  {
  get,
  post
}