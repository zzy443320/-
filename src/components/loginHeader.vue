<template>

<div class="header">
  <div class="logo">
    <img src="@/assets/image/LOGO.png" alt="">
  </div>
</div>

<div class="menu">
  <el-menu 
  mode="horizontal" 
  :style="{ width: menuWidth }" 
  text-color="#fff" 
  active-text-color="#fff" 
  background-color="#38383f" 
  :ellipsis="false" 
  :default-active="activeMenu"
  >
    <el-menu-item
    v-for="item of list"
    :key="item.path"
    :index="item.path"
    @click="handleChangePath(item)"
    >
    {{ item.label }}
    </el-menu-item>
  </el-menu>
</div>
</template>

<script setup>

import { ref, computed } from 'vue'
import {useRoute, useRouter} from 'vue-router'

const list = ref([
  {
    path: '/login_1',
    name: 'Login_1',
    label: '登录',
    url: 'Login_1'
  },
  {
    path: '/login_2',
    name: 'Login_2',
    label: '注册',
    url: 'Login_2'
  },
])

// 计算菜单宽度（每个菜单项100px + 边框/间距）
const menuWidth = computed(() => {
  return `${list.value.length * 100}px`
})

const route = useRoute()
const router = useRouter()
const activeMenu = computed(() => route.path)
const handleChangePath = (item) => {
  router.push(item.path)
}
</script>

<style scoped lang="less">

.header {
  width: 100%;
  height: 100px;
  background-color: #222;
  padding-left: 50px;
  padding-top: 10px;
  .logo {
    width: 300px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.menu {
  background-color: #38383f;
  .el-menu {
    margin: 0 auto;
    border: none;
    height: 50px;
    .el-menu-item {
      width: 100px;
      background-color: #38383f !important;
      transition: 0.1s;
      &.is-active {
        font-weight: bold;
        font-size: 20px;
        border-color: #e6002d !important;
        border-width: 5px;
      }
    }
  }
}
</style>