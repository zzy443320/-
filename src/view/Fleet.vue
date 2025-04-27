<template>

  <div class="main">
    <div class="title">
      <h1>F1 Fleet Overview</h1>
    </div>
    <div class="tip">
      <h1>Check out your favourite teams!</h1>
    </div>
    <div class="teams">
      <el-card
      v-for="item of fleetData"
      :key="item.sn"
      shadow="hover"
      class="fleet-card"
      >
        <div class="ranking">
          <h1>{{ item.sn }}</h1>
          <h1>{{ item.number }}</h1>
        </div>

        <div class="fleet">
          <h1>{{ item.fleetName }}</h1>
          <div class="icon">
            <img :src="item.iconSrc" alt="">
          </div>
        </div>

        <div class="car">
          <img :src="item.carSrc" alt="">
        </div>
      </el-card>
    </div>
  </div>
</template>
<script setup>

import { ref, getCurrentInstance, onMounted } from 'vue'

const { proxy } = getCurrentInstance()

const fleetData = ref([])

const getFleetData = async () => {
  const data = await proxy.$api.getFleetData()
  fleetData.value = data.fleetData
}

onMounted(() => {
  getFleetData()
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
  margin: 0 10%;
  height: auto;
  // background: #fff;
  .title {
    margin-top: 50px;
    border-top: 25px solid #e6002d;
    border-right: 25px solid #e6002d;
    box-shadow: rgba(0, 0, 0, 0.5);
    padding-top: 25px;
    border-top-right-radius: 25px;
    h1 {
        font-size: 50px;
        font-weight: bold; //设置为粗体
        font-family: Formula1-turbo;
        margin-left: 5px;
    }
  }
  .tip {
    margin-top: 20px;
    padding: 25px 0;
    text-align: center;
    background-color: #A1A1A1;
    border-radius: 10px;
    h1 {
      font-size: 25px;
      color: #555;
      font-weight: bold; //设置为粗体
      font-family: Formula1-torque;
    }
  }
}

.teams {
  margin-top: 20px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 600px);
  justify-content: center;
  // align-content: start;
  .fleet-card ::before {
    border-top: 5px solid #000;
    border-right: 5px solid #000;
  }
  .fleet-card {
    transition: 0.2s;
    border: none;
    border-top: 5px solid #000;
    border-right: 5px solid #000;
    margin: 15px;
    height: 300px;
    .ranking {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #27BC61;
      h1 {
        color: #555;
        font-family: Formula1-Regular;
        font-size: 50px;
      }
    }
    .fleet {
      height: 60px;
      line-height: 60px;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      border-left: 5px solid aqua;
      h1 {
        color: #555;
        font-family: Formula1-Regular;
        font-size: 30px;
        margin-left: 5px;
      }
      .icon {
        height: 50px;
        width: 50px;
        margin: 5px 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .car {
      margin-top: 5px;
      border-top: 1px solid #27BC61;
      padding-top: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .fleet-card:hover {
    border-top: 8px solid #e6002d;
    border-right: 8px solid #e6002d;
  }
}
</style>