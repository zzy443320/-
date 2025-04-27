<template>

  <div class="lbt-container">
    <el-carousel :interval="5000">
      <el-carousel-item v-for="item of images" :key="item.src">
        <img :src="item.src"/>
      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="main">
    <el-row>
      <el-col :span="16">
        <div class="news">
          <div>
            <div class="line-1"><i></i></div>
            <div class="line-2"><i></i></div>
          </div>

          <div class="big-news">
            <h1>{{ bNews.type }}</h1>
            <h2>{{ bNews.title }}</h2>
            <div class="photo">
              <img :src="bNews.src" alt="">
            </div>
          </div>

          <div class="small-news">
            <div
            v-for="item of newsData"
            :key="item.title"
            class="item"
            >
              <div class="photo">
                <img :src="item.src" alt="">
              </div>
              <div class="text">
                <h1>{{ item.type }}</h1>
                <h2>{{ item.title }}</h2>
              </div>
            </div>
          </div>
        </div>
      </el-col>


      <el-col :span="8">
        <div class="ranking">
          <el-card>
            <div class="ranking_header">
              <h2 class="ranking_title h4 margin_0 padding_b_10">
              <span class="ranking_term">F1</span>
                  截至第8站摩纳哥大奖赛车手积分榜
              </h2>
            </div>
            <el-table :data="tableData" border>
              <el-table-column 
              v-for="(val, key) of tableLabel" :key="key" :prop="key" :label="val" :width="key === 'driver' ? 270 : 60"/>
            </el-table>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
// import {useRouter} from 'vue-router'
// const images = [
//  { src: "../assets/image/home_news1.png" },
//  { src: "../assets/image/home_news2.png" },
//  { src: "../assets/image/home_news3.png" },
//  { src: "../assets/image/home_news4.png" },
// ]

const { proxy } = getCurrentInstance()

const images = [
  { src: new URL("../assets/image/home-lbt1.png", import.meta.url).href },
  { src: new URL("../assets/image/home-lbt2.png", import.meta.url).href },
  { src: new URL("../assets/image/home-lbt3.png", import.meta.url).href },
  { src: new URL("../assets/image/home-lbt4.png", import.meta.url).href }
]

const bNews = ref({
  title: '迈凯伦在前进中，梅赛德斯在混合中，动作丰富--巴林大奖赛的看点',
  type: '特征',
  src: new URL("@/assets/image/news/news1.png", import.meta.url).href,
})

const tableData = ref([])
const tableLabel = ref(
  {
    pos: 'pos.',
    driver: 'Driver',
    point: 'point'
  }
)

const newsData = ref([])

const getTableData = async () => {
  const data = await proxy.$api.getTableData()
  tableData.value = data.tableData
}

const getNewsData = async () => {
  const data = await proxy.$api.getNewsData()
  newsData.value = data.newsData
}


onMounted(() => {
  getTableData(),
  getNewsData()
})
</script>

<style scoped lang="less">

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

.lbt-container {
  width: 100%;
  height: auto;
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

.main {
  margin-top: 30px;
  .news {
    padding-left: 80px;
    padding-right: 50px;
    .line-1 {
    width: 900px;
    height: 15px;
    background-color: #e6002d;
    position: relative;
      i {
        width: 0;
        height: 0;
        border-color: transparent #fff transparent transparent;
        border-style: solid;
        border-width: 15px 18px 0 0;
        position: absolute;
        right: 0;
      }
    }
    .line-2 {
      width: 882px;
      height: 15px;
      background-color: #e6002d;
      position: relative;
      margin-top: 1px;
      i {
        width: 0;
        height: 0;
        border-color: transparent #fff transparent transparent;
        border-style: solid;
        border-width: 15px 18px 0 0;
        position: absolute;
        right: 0;
      }
    }

    .big-news {
      width: 800px;
      height: 400px;
      margin-left: 50px;
      margin-top: 15px;
      h1 {
        font-size: 11px;
        color: #e6002d;
        font-weight: bolder;
      }
      h2 {
        font-size: 32px;
        font-weight: bold;
        // margin-top: 15px;
        line-height: 45px;
      }
      .photo {
        overflow: hidden;
        margin-top: 15px;
        width: 100%;
        height: 400px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        // margin-top: 15px;
        transition: 0.5s;
      }
    }
    .big-news:hover img {
      //图片放大效果:
      transform: scale(1.1);
    }
    .big-news:hover h2 {
      text-decoration: underline;
    }
  }
}

.small-news {
  height: auto;
  width: 100%;
  margin-top: 150px;
  border-top: 10px solid #e6002d;
  border-right: 10px solid #e6002d;
  border-bottom: 10px solid #e6002d;
  border-radius: 20px;  
  display: grid;               //采用二维/网格布局，设置后，这个元素的所有直系子元素将成为网格项目
  grid-template-columns: repeat(auto-fill, 270px);   //这个属性用来定义网格中的列
  /**
  repeat()用于重复定义列的模式。它接受两个参数，第一个参数是重复的次数或关键字，第二个参数是要重复的列宽值
  auto - fill：是一个关键字，表示自动填充列。它会根据网格容器的可用空间自动计算需要创建多少列，以尽可能多地填充空间，同时保证每列的宽度为320px。
  如果容器的宽度不足以容纳下一个320px宽的列，它会自动调整列的数量，以适应容器的大小
   */
  justify-content: center;
  /**
  让网格在主轴方向居中（默认是水平方向）
  */
  align-content: start;
  /**
  当行太长换行时，这个属性可以让每一行在垂直方向上靠顶部对齐
  */
  .item {
    width: 250px;
    height: auto;
    margin: 15px;
    flex-shrink: 0;
    .text {
      width: 100%;
      height: 100px;
      margin-top: 10px;
      border-right: 1px solid gray;
      border-bottom: 1px solid grey;
      border-bottom-right-radius: 10px;
      transition: 0.5s;
      h1 {
        font-size: 12px;
        color: #e6002d;
        font-weight: bold;
      }
      h2 {
        font-size: 16px;
        line-height: 22px;
        padding: 0 2px;
        margin-top: 5px;
      }
    } 
    .photo {
      width: 250px;
      height: 150px;
      overflow: hidden;
      transition: 0.5s;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s;
      }
    }
  }
  .item:hover img {
    transform: scale(1.1);
  }

  .item:hover .photo {
    height: 130px;
  }

  .item:hover .text {
    height: 120px;
    border-right: 1px solid #e6002d;
    border-bottom: 1px solid #e6002d;
  }
}


.ranking {
  margin-right: 80px;
  .el-card {
    background-color: #000;
    .ranking_header {
      text-align: center;
      border-bottom: 3px solid #e6002d;
      .ranking_title {
        font-weight: 700;
        color: #fff;
        font-size: 22px;
        margin-bottom: 5px;
      }
      .ranking_term {
      font-style: italic;
      color: #d40415;
      font-weight: 700;
      font-family: Formula1-Regular;
      display: block;
      font-size: 30px;
      margin-bottom: 5px;
        }
    }

    //强制修改表格样式
    :deep(.el-table) {
        /* 覆盖边框颜色变量 */
      --el-table-border-color: #000; /* F1主题红色 */

      /* 表格外边框 */
      border: 1px solid var(--el-table-border-color) !important;
      th{
        text-align: center !important;
        background-color: #000 !important;
        font-size: 14px;
        color: #fff;
        font-weight: bold;
      }
      td{
        text-align: center !important;
        background-color: #D5D5D5 !important;
        border-right: 1px solid #000 !important;
        border-bottom: 1px solid #000!important;
        &:last-child {
          border-right: none !important;
        }
      }
    }
  }
}
</style>