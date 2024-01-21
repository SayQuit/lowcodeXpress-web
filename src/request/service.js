import axios from 'axios'
import store from '../store'

const service = axios.create({
  baseURL: 'http://localhost:5507',
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    const token = store.getState().token
    if (token) config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data.msg === 'success') {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service