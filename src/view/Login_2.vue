<template>

<div class="main">
  <el-form :model="registerForm" :rules="rules" ref="form">
    <div class="title">注册</div>
    <el-form-item label="姓名" prop="name" label-position="top">
      <el-input placeholder="请输入姓名" v-model="registerForm.name" />
    </el-form-item>

    <el-form-item label="性别" prop="sex" label-position="top">
      <el-input v-model="registerForm.sex" placeholder="请输入性别" />
    </el-form-item>

    <el-form-item label="年龄" prop="age" label-position="top">
      <el-input v-model.number="registerForm.age" placeholder="请输入年龄" />
    </el-form-item>

    <el-form-item label="出生日期" prop="birth" label-position="top">
      <el-date-picker
      v-model="registerForm.birth"
      type="date"
      placeholder="请输入"
      />
    </el-form-item>

    <el-form-item label="居住地" prop="addr" label-position="top">
      <el-input placeholder="请输入地址" v-model="registerForm.addr"/>
    </el-form-item>

    <el-form-item label="邮箱地址" prop="email" label-position="top">
      <el-input placeholder="请输入邮箱" v-model="registerForm.email"/>
    </el-form-item>

    <el-form-item label="设置密码" prop="password" label-position="top">
      <el-input type="password" placeholder="请输入密码" v-model="registerForm.password"/>
    </el-form-item>

    <div style="margin-top: 40px;">
      <el-button @click="handleRegister">注册</el-button>
      <span>已有账号？<i @click="handleJump">立即登录</i></span>
    </div>
  </el-form>
</div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import {ElMessage} from 'element-plus'

const {proxy} = getCurrentInstance()
const router = useRouter()

//输入的内容存在 registerForm 中
const registerForm = reactive({
  name: '',
  sex: '',  // 确保初始化为空字符串，而非 undefined
  age: null,
  birth: '',
  addr: '',
  email: '',
  password: '',
})

//表单验证规则：
const rules = reactive({
  name: [{ required: true, message: "姓名是必填项", trigger: "blur" }],
  age: [
    { required: true, message: "年龄是必填项", trigger: "blur" },
    { type: "number", message: "年龄必须是数字"}
  ],
  sex: [{ required: true, message: "性别是必填项", trigger: "blur" }],
  birth: [{ required: true, message: "出生日期是必填项" }],
  addr: [{ required: true, message: "地址是必填项" }],
  email: [
    { required: true, message: "邮箱是必填项" },
    { type: 'email', message: "请输入有效的邮箱地址", trigger: "blur" }
  ],
  password: [
    { required: true, message: "密码是必填项" },
    { min: 6, message: "密码长度至少为6位", trigger: "blur" }
  ],
})

//对时间格式的处理：
const timeFormat = (time) => {
  var time = new Date(time)
  var year = time.getFullYear()
  var month = time.getMonth() + 1
  var date = time.getDate()
  function add(m) {
    return m < 10 ? "0"+m : m
  }
  return year + "-" + add(month) + "-" + add(date)
}

const handleRegister = () => {
  //进行表单验证
  proxy.$refs['form'].validate(async(valid) => {
    if (valid) {
      registerForm.birth = /^\d{4}-\d{2}-\d{2}$/.test(registerForm.birth) ? registerForm.birth : timeFormat(registerForm.birth)
      // registerForm.sex = registerForm.sex === '男' ? 'M' : registerForm.sex === '女' ? 'F' : 'O';
      const res = await proxy.$api.addUser(registerForm)
      if (res) {
        ElMessage.success('注册成功！正在跳转到登录页面')
        proxy.$refs['form'].resetFields()   //重置表单
        
        setTimeout(() => {
          router.push('/login_1')
        }, 2000)
      }
    } else {
      //验证不通过后的操作
      ElMessage({
        showClose: true,
        message: '请输入正确的内容',
        type: 'error'
      })
    }
  })
}

const handleJump = () => {
  router.push('/login_1')
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
  margin: 150px 30%;
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
      .el-input {
        height: 50px;
        // border: 1px solid #000;
        border-radius: 5px;
      }
      
      .el-date-picker {
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