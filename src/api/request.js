//实现基于 Axios 的 HTTP 请求封装，包含请求/响应拦截、环境配置和 Mock 开关等功能


import axios from "axios";                             //引入 Axios 库
import { ElMessage } from "element-plus";              //引入函数 ElMessage， 用于显示操作反馈（成功/警告/错误等轻量级提示） 
import config from "@/config/config.js";                        //config文件夹中的 index.js 文件导出的是一个对象，所以这里的 config 接收的是导出的对象


const service = axios.create({    //创建Axios实例对象，后续所有请求将基于此实例；并且处理请求的参数/环境
  baseURL: config.baseApi         //设置baseURL，定义所有请求的公共基础路径，所有相对路径的请求都会自动加上 baseURL 前缀
})                                //能够通过config文件控制不同环境的API地址

const NETWORK_ERROR = "网络错误"

// 添加请求拦截器                   不用在意为什么是 service.interceptors.request.use 这样子，都是规定好的
service.interceptors.request.use(
  function (config) {                 //成功拦截函数
    // 拦截成功后，对请求数据做什么处理
    console.log('config为:', config)
    // console.log('request为:', request)
    return config;                    
  },
  function (error) {                 //失败拦截函数
    // 对拦截失败的处理
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {                                //res 是 Axios 请求成功后返回的完整响应对象
    //响应成功后，对响应数据做什么处理
    const { code, data, msg } = response.data         //res.data 也是一个对象
    console.log('Axios 响应:', response);
    console.log('响应数据:', response.data);
    if (code === 200) {
      return data
    } else {
      //因为2xx范围内的状态码都会触发 function(response) 所以还需要设置错误提醒
      ElMessage.error(NETWORK_ERROR);
      return Promise.reject(NETWORK_ERROR);
    }
  },
  //对响应错误的处理
  function (error) {
    let errorMessage = '请求错误';

    if (error.response) {
      //请求发出并收到响应，但仍有错误
      const { data } = error.response;
      errorMessage = data.message
      console.log("错误信息:", errorMessage)

    } else if (error.request) {
      //请求已发出但无响应（网络错误/超时）
        if (error.code === 'ECONNABORTED') {
          errorMessage = '请求超时，请重试';
        } else {
          errorMessage = '网络连接异常，请检查网络';
        }
      } else {
        // 4. 其他错误（如取消请求）
        errorMessage = error.message || '未知错误';
        }

    // 显示错误提示
    ElMessage({
      message: errorMessage,
      type: 'error',
      duration: 3000,
      showClose: true
    });

    // 继续抛出错误（让业务代码可以捕获）
    return Promise.reject(error);
  }
) 
  
//请求封装函数 request，主要用于处理 HTTP 请求的配置，包括 请求方法、参数处理、Mock 开关、环境判断 等逻辑
function request(options) {                              //这里的 options 是 api.js 调用时传入的对象，也就是请求参数
  options.method = options.method || "get"               //设定默认值为 get ，否则为 options.method
  //关于get请求参数的调整
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data                 //因为 get 请求，参数必须放在params
  }

  //对mock的开关做处理
  let isMock = config.mock
  if (typeof options.mock !== 'undefined') {
    isMock = options.mock
  }

  //针对环境做处理
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi    //如果为生产环境，则使用的是baseApi（请求的是后端提供的接口文档）
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi   //如果为其他环境就判断是否开启 Mock 来决定请求路径
  }
  return service(options)      //service(options) 发起请求
}

export default request       //导出的是一个函数request，用于发起请求