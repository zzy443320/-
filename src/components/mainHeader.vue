<template>

  <el-menu text-color="#fff" active-text-color="#e6002d" background-color="#222" mode="horizontal" :default-active="activeMenu" 
    :ellipsis="false">
    <img src="../assets/image/LOGO.png">
    <el-menu-item v-for="item of list" :key="item.path" :index="item.path" @click="handleChangePath(item)">
      <component class="icons" :is="item.icon"></component>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <el-menu-item>中文/大陆</el-menu-item>
    <el-menu-item @click="handleBackTop">
      <el-icon>
        <ArrowUpBold />
      </el-icon>
      回到顶部
    </el-menu-item>
    <el-button type="danger" @click="handleLogin">登录</el-button>
  </el-menu>

</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {ElMessage } from 'element-plus'

const list = ref([
  {
    path: '/home',
    name: 'Home',
    label: '首页',
    icon: 'house',
    url: 'Home'
  },
  {
    path: '/driver',
    name: 'Driver',
    label: '车手档案',
    icon: 'user',
    url: 'Driver'
  },
  {
    path: '/fleet',
    name: 'Fleet',
    label: '车队一览',
    icon: 'flag',
    url: 'Fleet'
  },
  {
    path: '/track',
    name: 'Track',
    label: '赛道资料',
    icon: 'list',
    url: 'Track'
  },
  {
    path: '/calendar',
    name: 'Calendar',
    label: '赛历详情',
    icon: 'calendar',
    url: 'Calendar'
  },
])

const route = useRoute()
const router = useRouter()
const activeMenu = computed(() => route.path)
const handleChangePath = (item) => {
  router.push(item.path)
}

const handleLogin = () => {
  router.push('/login')
}

//点击回到头部
const handleBackTop = () => {
  // 检查是否已经在顶部
  if (window.scrollY === 0) {
    ElMessage.error('已是顶部');
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped lang="less">

.el-menu--horizontal>.el-menu-item:nth-child(6) {
  margin-right: auto;
}
.el-menu {
  width: 100%;
  border-bottom: 5px solid #e6002d;
  .el-menu-item {
    background-color: #222 !important;
  }
  .el-button {
    margin: auto 0;
    margin-right: 40px;
  }
  .el-menu-item:nth-child(8) {
    margin-right: 20px;
  }
  .el-menu-item:hover {
    color: #e6002d !important;
  }
}

img {
  height: 100%;
  width: 200px;
  margin-right: 20px;
}

.icons {
  width: 15px;
  height: 15px;
}
</style>