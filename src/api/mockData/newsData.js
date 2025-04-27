export default {
  getNewsData: () => {
    return {
      code: 200,
      data: {
        newsData: [
          {
            title: '"我觉得我从没驾驶过F1赛车"-诺里斯在巴林排位赛中以令人失望的第6名成绩后寻找答案',
            type: '新闻',
            src: new URL("@/assets/image/news/news2.png", import.meta.url).href,
          },
          {
            title: 'Russell和Antonelli在巴林违反排位赛规则后被罚发车',
            type: '新闻',
            src: new URL("@/assets/image/news/news3.png", import.meta.url).href,
          },
          {
            title: '汉密尔顿向法拉利道歉，因为在巴林"没有完成这项工作"，但发誓要"在赛道上说话"',
            type: '新闻',
            src: new URL("@/assets/image/news/news4.png", import.meta.url).href,
          },
          {
            title: '加斯利"非常高兴"，因为他在巴林排位赛中"非常特殊的一圈"后排在第4位',
            type: '新闻',
            src: new URL("@/assets/image/news/news5.png", import.meta.url).href,
          },
          {
            title: 'Prastri在巴林第50场比赛中获得杆位，很高兴"能在关键时刻交付"',
            type: '新闻',
            src: new URL("@/assets/image/news/news6.png", import.meta.url).href,
          },
          {
            title: '皮亚斯特里在巴林排位赛大奖赛中击败拉塞尔和勒克莱尔获得杆位',
            type: '新闻',
            src: new URL("@/assets/image/news/news7.png", import.meta.url).href,
          },
        ]
      }
    }
  }
}