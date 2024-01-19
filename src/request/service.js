import axios from 'axios'
import { errorMessage } from '../utils/message'
import { getToken } from '../utils/storage'

const service = axios.create({
  baseURL: 'http://localhost:5507',
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 这里应该改成用redux内的token，如果redux没有，就不配置
    config.headers['Authorization'] = `Bearer ${getToken()}`
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