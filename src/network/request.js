import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    // baseURL = "http://152.136.185.210:8000/api/h8"
    // baseURL = "http://123.207.32.32:8000/api/h8"
    // baseURL = "http://106.54.54.237:8000/api/h8" 
    baseURL: "http://123.207.32.32:8000/api/h8",
    timeout: 10000
  })
  instance.interceptors.request.use(config => {
    return config;
  },error => {
    return Promise.reject(error);
  })

  instance.interceptors.response.use(response => {
    return response.data;
  },error => {
    return Promise.reject(error);
  })

  return instance(config)
}