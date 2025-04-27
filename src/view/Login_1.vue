<template>

<div class="main">
  <el-form :model="loginForm">
    <div class="title">登录</div>
    <el-form-item label="电子邮件地址" label-position="top">
      <el-input type="input" placeholder="请输入账号" v-model="loginForm.email" />
    </el-form-item>
    <el-form-item label="密码" label-position="top">
      <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"/>
    </el-form-item>

    <div style="margin-top: 40px;">
      <el-button @click="handleLogin">登录</el-button>
      <span>还没有账号？<i @click="handleJump">立即注册</i></span>
      
    </div>
  </el-form>
</div>
</template>

<script setup>
import { reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import {ElMessage} from 'element-plus'

const {proxy} = getCurrentInstance()
const router = useRouter()
const loginForm = reactive({
  email: '',
  password: ''
})


const handleLogin = async () => {

  const res = await proxy.$api.login(loginForm)

  if (res){
    ElMessage.success('登陆成功！')
    setTimeout(() => {
            router.push('/home')
    }, 2000)
  }
}

const handleJump = () => {
  router.push('/login_2')
}
</script>

<style scoped lang="less">
@font-face {
    src: url(../font_style/Formula1-Regular.otf);
    font-family: Formula1-Regular;
}

.main {
  // width: 500px;
  height: auto;
  margin: 0 30%;
  margin-top: 150px;
  // border: 2px solid #000;
  .el-form {
    width: 100%;
    height: auto;
    .title {
      font-size: 32px;
      color: #333;
      letter-spacing: 5px;
      font-weight: bold;
      font-family: Formula1-Regular;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    }
    .el-form-item {
      margin-top: 30px;
      overflow: hidden;
      .el-input {
        height: 50px;
        // border: 1px solid #000;
        border-radius: 5px;
      }
    }
    :deep(.el-input__wrapper) {
      box-shadow: 0 0 0 1px #000 inset;
      border-radius: 5px;
      transition: box-shadow 0.2s ease; /* 添加过渡效果 */
    }
    .el-button {
      width: 87px;
      height: 33px;
      background-color: #EE0000;
      color: #fff;
      font-size: 13px;
    }
    span {
      height: 33px;
      line-height: 33px;
      margin-left: 20px;
      margin-bottom: 0;
      i{
        font-weight: bolder;
        padding-bottom: 3px;
        margin-left: 15px;
        border-bottom: 2px solid #EE0000;
      }
      i:hover {
        color: #EE0000;
        cursor: pointer;
      }
    }
  }
}
</style>