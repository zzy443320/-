<template>

  <div class="main">
    <div class="title">
      <h1>F1 Calendar</h1>
    </div>
    <div class="calendar">
      <el-timeline size="large">
        <el-timeline-item
        placement="top"
        v-for="item of calendarData"
        :key="item.time"
        :timestamp="timeFormat(item.time)"
        >
          <div class="card">
            <div class="left">
              <h4>{{ item.title }}</h4>
              <p>{{ item.introduce }}</p>
          </div>

            <div class="right">
              <el-carousel :interval="5000" motion-blur>
                <el-carousel-item v-for="(img, index) of item.src" :key="index">
                  <img :src="img" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>

</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'

const { proxy } = getCurrentInstance()

const calendarData = ref([])
const getCalendarData = async () => {
  const data = await proxy.$api.getCalendarData()
  calendarData.value = data.calendarData
}

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

onMounted(() => {
  getCalendarData()
})

</script>

<style scoped lang="less">
//引入自定义字体：
@font-face {
  src: url(../font_style/Formula1-Regular.otf);
  font-family: Formula1-Regular;
}

@font-face {
  src: url(../font_style/Formula1-torque.otf);
  font-family: Formula1-torque;
}

@font-face {
  src: url(../font_style/Formula1-turbo.otf);
  font-family: Formula1-turbo;
}

.main {
  margin: 0 10%;
  height: auto;
  .title {
    text-align: center;
    margin-top: 50px;
    box-shadow: rgba(0, 0, 0, 0.5);
    h1 {
      font-size: 50px;
      font-weight: bold; //设置为粗体
      font-family: Formula1-turbo; //使用自定义字体
      color: #000000;
    }
  }
}
.calendar {
  margin: 30px 0;
  border-top: 9px solid #000;
  border-left: 9px solid #000;
  border-radius: 27px;
  height: auto;
  // min-height: 500px;
  /* 确保最小高度 */
  .el-timeline {
    margin-left: 50px;
    margin-top: 50px;

    //修改时间戳样式
    :deep(.el-timeline-item__timestamp) {
      color: #000; // 改为 F1 主题红色
      font-family: Formula1-Regular; // 使用你的自定义字体
      font-size: 16px;
      font-weight: bold;
    }

    //修改小圆点样式
    :deep(.el-timeline-item__node) {
      background-color: #000; // 节点颜色
    }

    //修改连接线样式
    :deep(.el-timeline-item__tail) {
      border-left: 2px solid #e6002d; // 改为红色
    }
    .card {
      display: flex;
      // justify-content: center;
      .left {
        width: 500px;
        height: 300px;
        margin: 15px;
        border-top: 5px solid #e6002d;
        border-right: 5px solid #e6002d;
        border-radius: 15px;
        padding: 0 10px;
        // background-color: #f5f5f5 !important;
        h4 {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          padding: 20px 0;
        }
        p {
          font-size: 16px;
          text-align: justify; // 两端对齐
          text-indent: 2em; // 首行缩进2字符
          line-height: 30px;
        }
      }
      .right {
        width: 500px;
        height: 300px;
        margin: 15px;
        position: relative;
        .el-carousel {
          width: 100%;
          height: 100%;
          // background-color: #000;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}

</style>