<template>

<el-container>
  <el-header>
    <login-header />
  </el-header>

  <el-main>

    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script setup>
import loginHeader from '@/components/loginHeader.vue'

</script>

<style scoped lang="less">

</style>