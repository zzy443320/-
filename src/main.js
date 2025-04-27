
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/less/index.less'

import router from '@/router/router.js'

import ElementPlus from 'element-plus'  //引入组件库
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'   //引入全局图标

import "@/api/mock.js"  //引入mockjs
import api from "./api/api"; 


const app = createApp(App)
app.config.globalProperties.$api = api
app.use(ElementPlus)
app.use(router)


app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}