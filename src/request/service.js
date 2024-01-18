import axios from 'axios'
import { errorMessage } from '../utils/message'

const service = axios.create({
  baseURL: 'http://localhost:5507',
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // config.headers['Authorization'] = 'Bearer' + ' ' + localStorage.getItem('token')
    return config
  },
  error => {
    errorMessage('请求失败')
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data.msg === 'success') {
      return Promise.resolve(response.data)
    } else {
      errorMessage(response.status + ' 响应失败')
      return Promise.reject(response.data)
    }
  },
  error => {
    errorMessage('响应失败')
    return Promise.reject(error)
  }
)

export default service