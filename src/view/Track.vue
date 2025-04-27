<template>
<div class="main">
  <div class="title">
    <h1>F1 Track Information</h1>
  </div>

  <div class="track">
    <!-- <el-carousel :interval="5000" height="1500px" motion-blur>
      <el-carousel-item 
      v-for="item of trackData" 
      :key="item.name"
      >
        <div class="name">
          <h1 class="tracks">{{ item.name }}</h1>
          <h1 class="city">{{ item.city }}</h1>
        </div>
        <div class="photo">
          <img :src="item.src" alt="">
        </div>
      </el-carousel-item>
    </el-carousel> -->
    <el-card
    v-for="item of trackData" 
    :key="item.name"
    >
      <h1 class="tracks">{{ item.name }}</h1>
      <h1 class="city">{{ item.city }}</h1>
      <div class="photo">
        <img :src="item.src" alt="">
      </div>
    </el-card>
  </div>
</div>
</template>
<script setup>

import { ref, getCurrentInstance, onMounted } from 'vue'

const { proxy } = getCurrentInstance()
const trackData = ref([])

const getTrackData = async () => {
  const data = await proxy.$api.getTrackData()
  trackData.value = data.trackData
}

onMounted(() => {
  getTrackData()
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

.main {
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

.track {
  height: auto;
  margin: 30px 5%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 450px); 
  align-items: start;
  .el-card {
    margin: 15px;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    .tracks {
      font-size: 20px;
      font-family: Formula1-Regular;
      font-weight: bold;
    }
    .city {
      font-size: 15px;
      font-family: Formula1-Regular;
      font-weight: bold;
      margin-top: 10px;
    }
    .photo {
      width: 100%;
      height: 220px;
      margin-top: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
      }
    }
  }
}

// .el-card:hover .photo {
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   top: 5px;
//   left: 100px;
// }

.el-card:hover{
  border-left: 5px solid #000;
  border-bottom: 5px solid #000;
  border-radius: 5px;
}

// .el-card:hover h1 {
//   color: #e6002d;
// }
</style>