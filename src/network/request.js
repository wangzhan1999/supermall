import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: "接口请联系本人VX哦13972131480",
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