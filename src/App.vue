<script setup>

</script>

<template>
 
 <router-view></router-view>
</template>

<style scoped>
/* el-header 会默认带有20px的padding，通过深度重新设置 */
:deep(.el-header) {
  padding: 0;
}

:deep(.el-main) {
  padding: 0;
}
</style>
