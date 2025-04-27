<template>
  <div class="common-layout">
    <el-container class="lay-container"> <!--el-container最后会渲染为div-->

      <!-- 自定义顶部菜单 -->
      <el-header>
        <el-affix>
          <main-header />
        </el-affix>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import mainHeader from "@/components/mainHeader.vue";

</script>

<style scoped lang="less">
.common-layout, .layout-container {
  width: 100%;
  height: 100%;
}

</style>