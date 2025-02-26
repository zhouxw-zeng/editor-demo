import axios from "axios";
const service = axios.create({
  baseURL: "api/",
  timeout: 10000,
});

/**
 * api拦截器
 */
service.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config
})

service.interceptors.response.use((response: any) => {
  // 判断请求状态
  if (response.stastus === 200) {
    const { code } = response.data
    // api返回错误处理
    switch (code) {
      case 200:
        
        break;
    
      default:
        break;
    }
    if (code === 200) {
      return response.data
    }
  }
  return response.data
},
  async error => {
    return Promise.reject(error)
  }
);

export default service;