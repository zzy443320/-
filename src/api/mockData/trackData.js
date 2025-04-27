export default {
  getTrackData: () => {
    return {
      code: 200,
      data: {
        trackData: [
          {
            name: '阿尔伯特公园赛道',
            city: '澳大利亚',
            src: new URL("@/assets/image/澳大利亚.jpg", import.meta.url).href,
          },
          {
            name: '萨基尔赛道',
            city: '巴林',
            src: new URL("@/assets/image/巴林.jpg", import.meta.url).href,
          },
          {
            name: '蒙特卡洛赛道',
            city: '摩纳哥',
            src: new URL("@/assets/image/摩纳哥.jpg", import.meta.url).href,
          },
          {
            name: '蒙扎赛道',
            city: '意大利',
            src: new URL("@/assets/image/意大利.jpg", import.meta.url).href,
          },
          {
            name: '上海国际赛车场',
            city: '中国',
            src: new URL("@/assets/image/中国.jpg", import.meta.url).href,
          },
          {
            name: '铃鹿赛道',
            city: '日本',
            src: new URL("@/assets/image/日本.jpg", import.meta.url).href,
          },
          {
            name: '吉达滨海路赛道',
            city: '沙特阿拉伯',
            src: new URL("@/assets/image/沙特阿拉伯.jpg", import.meta.url).href,
          },
          {
            name: '迈阿密国际赛车场',
            city: '美国',
            src: new URL("@/assets/image/美国.jpg", import.meta.url).href,
          },
          {
            name: '加泰罗尼亚赛道',
            city: '西班牙',
            src: new URL("@/assets/image/西班牙.jpg", import.meta.url).href,
          },
        ]
      }
    }
  }
}