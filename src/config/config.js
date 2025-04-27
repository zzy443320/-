const env = import.meta.env.MODE || "prod"        //设置环境：

//import.meta.env 是 Vite 提供的环境变量对象

// import.meta.env.MODE: 当前环境模式（如 "development"、"production"）。
//如果运行命令为 npm run dev 则当前环境为 development    运行命令为 npm run build 则当前环境为 production

// import.meta.env.DEV: 是否是开发环境（布尔值）。

// import.meta.env.PROD: 是否是生产环境（布尔值）。

// import.meta.env.VITE_*: 自定义环境变量（需以 VITE_ 开头）

//根据 mock 和环境来选择请求路径的前缀
const EnvConfig = {
  development: {
    baseApi: 'http://localhost:3000',
    mockApi: 'https://apifoxmock.com/m1/4068509-0-defalut/api',
  },
  test: {
    baseApi: '//test.future.com/api',
    mockApi: 'https://apifoxmock.com/m1/4068509-0-defalut/api',
  },
  prod: {
    baseApi: '//future.com/api',
    mockApi: 'https://apifoxmock.com/m1/4068509-0-defalut/api',
  },
}

export default {
  env,
  ...EnvConfig[env],
  mock: false,
}