//get请求从config.url获取参数，post请求从config.body中获取参数
//这个函数的作用是将 URL 查询字符串转换为对象
function param2obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '"}'
  )
}
//输入示例：/api/user?name=张三&page=2
//输出结果：{ name: "张三", page: "2" }

const userList = [
  {
    name: '张三',
    sex: '男',
    age: 88,
    birth: "2001-01-01",
    addr: '中国',
    email: '123@qq.com',
    pasaword: "12345678"
  }
]





export default {
  getUserData: () => {
    return {
      code: 200,
      data: {
        userData: userList
      },
      msg: '操作成功'
    }
  },
  addUser: config => {
    const { name, addr, age, birth, sex, email, password } = JSON.parse(config.body)
    const isUserExist = userList.some(user =>     //isUserExist用于判断用户名或者邮箱是否已存在
        user.email === email || user.name === name
      )
    if (isUserExist) {
      return {
        code: 200,
        data: "error"
      }
    } else {
      userList.unshift({
      name: name,
      addr: addr,
      age: age,
      birth: birth,
      sex: sex,
      email: email,
      password: password
      })
      return {
        code: 200,
        data: {
          message: '添加成功'
        }
      }
    }
  },
  login: config => {
    const { email, password } = JSON.parse(config.body)
    const info = userList.find(user => user.email === email)
    if (!info) {
      return {
        code: 200,
        data: "error1"
      }
    } else if (info.password !== password) {
      return {
        code: 200,
        data: "error2"
      }
    } else {
      return {
        code: 200,
        data: "success"
      }
    }
  }
}