<template>

  <div class="title">
    <h1>F1 Drivers Profile</h1>
  </div>

  <div class="drivers">
    <el-card
    class="drivers-card"
    v-for="item of driverData"
    :key="item.name"
    >
      <div class="drivers-photo">
        <img :src="item.src" alt="">
      </div>
      <h1>{{ item.name }}</h1>
      <h2>{{ item.number }}</h2>
      <p>{{ item.introduce }}</p>
    </el-card>
  </div>

</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'

const { proxy } = getCurrentInstance()

const driverData = ref([])
const getDriverData = async () => {
  const data = await proxy.$api.getDriverData()
  driverData.value = data.driverData
}

onMounted(() => {
  getDriverData()
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

.title {
  text-align: center;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.5);
  h1 {
    font-size: 50px;
    font-weight: bold;              //设置为粗体
    font-family: Formula1-turbo;    //使用自定义字体
    color: #000000;
  }
}

.drivers {
  margin: 0 10%;                               //左右外边距为父元素宽度的10%
  margin-top: 10px;
  height: auto;                //元素的高度由内容自动撑开（不设置固定高度）
  display: grid;               //采用二维/网格布局，设置后，这个元素的所有直系子元素将成为网格项目
  grid-template-columns: repeat(auto-fill, 320px);   //这个属性用来定义网格中的列
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
  .drivers-card {
    position: relative;
    width: 300px;
    height: 450px;
    margin: 15px;
    border-radius: 20px;        //设置圆角
  
    overflow: auto;
    /**
    元素的内容没有超出其尺寸，那么一切正常显示，不会有滚动条出现
    但当内容超出元素的尺寸时，浏览器会自动为元素添加滚动条，以便用户可以滚动查看溢出的内容 
    */
    display: flex;               //采用弹性布局，卡片变为弹性项目
    flex-direction: column;       //卡片的排列方向为垂直列
    align-items: center;         //卡片在水平方向居中
    /*  color: rgb(0, 0, 0); */
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    flex-shrink: 0;         //卡片在父元素空间不足时禁止收缩
  
    border-bottom: 5px solid #ff2800;
    border-top: 5px solid #ff2800;
    .drivers-photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0%;
    overflow: hidden;
    transition: 0.5s;    //当元素的 CSS 属性发生变化时（如悬停时的大小、颜色变化），自动添加 0.5 秒的过渡效果
    }
    .drivers-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.drivers .drivers-card:hover .drivers-photo {
    top: 30px;
    left: 50%;                           //鼠标经过图片位置发生变化
    transform: translateX(-50%); /* 补偿自身宽度 */
    width: 120px;                        //鼠标经过图片大小发生变化
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 0 20 px rgba(0, 0, 0, 0.8);
}

/* �ӽ��䱳�� */
.drivers .drivers-card .drivers-photo ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, #222);
}

.drivers .drivers-card h1 {
    font-size: 30px;
    position: absolute;          //h1和图片都设置了绝对定位，脱离文本流，但h1是后来设置的，所以会压在图片上面
    top: 370px;
    left: 50%;                     /* 新增：水平居中 */
    transform: translateX(-50%);    /* 新增：补偿自身宽度 */
    white-space: nowrap;           /* 禁止换行 */
    transition: 0.5s;
    color: rgb(255, 255, 255);
    font-weight: bold;
}

.drivers .drivers-card:hover h1 {
    top: 170px;
    color: rgb(0, 0, 0);
}

.drivers .drivers-card h2 {
    margin-top: 220px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    font-size: 20px;
    font-family: Formula1-turbo;
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
}

.drivers .drivers-card p {
    display: none;          //隐藏且不占有位置
    font-family: Formula1-Regular;
    width: 90%;
    text-indent: 32px;
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 30px;
    text-align: justify; // 两端对齐
}

/*��꾭����Ƭʱ��ʾ*/
.drivers .drivers-card:hover p {
    display: block;
}

</style>