export default {
  getCalendarData: () => {
    return {
      code: 200,
      data: {
        calendarData: [
          {
            time: '2025-3-14',
            src: [
              new URL("@/assets/image/Australia_location.png", import.meta.url).href,
              new URL("@/assets/image/Australia_Circuit.png", import.meta.url).href,
            ],
            title: '澳大利亚大奖赛',
            introduce: '在2024年3月14日至3月16日在澳大利亚墨尔本举办的一级方程式赛车赛事。这是2025年世界一级方程式锦标赛的第二场分站赛事。本届赛事是自并入世界锦标赛后（追溯至1928年的100英里公路赛）的第87届澳大利亚大奖赛，并且于墨尔本大奖赛赛道第28次举办。比赛在阿尔伯特公园赛道进行，总计进行58圈。'
          },
          {
            time: '2025-3-21',
            src: [
              new URL("@/assets/image/China_location.png", import.meta.url).href,
              new URL("@/assets/image/China_Circuit.png", import.meta.url).href,
            ],
            title: '中国大奖赛',
            introduce: '是2025年3月21日至3月23日举办于中华人民共和国上海的一场一级方程式赛车赛事。比赛在上海国际赛道进行，总计56圈。这是2024年世界一级方程式锦标赛的第三场分站赛事，以及第18届的中国大奖赛。上届比赛也是自2019年中国大奖赛之后时隔5年后再次举行的中国大奖赛。由于新冠疫情，2020年至2023年的世界一级方程式锦标赛赛季均无中国大奖赛。'
          },
          {
            time: '2025-4-6',
            src: [
              new URL("@/assets/image/Japan_location.png", import.meta.url).href,
              new URL("@/assets/image/Japan_Circuit.png", import.meta.url).href,
            ],
            title: '日本大奖赛',
            introduce: '2025年4月6日至4月8日举办于日本的一场一级方程式赛车赛事。比赛在铃鹿赛道举行，总计53圈。这是2025年世界一级方程式锦标赛的第四场分站赛事，以及自1950年并入世界锦标赛后的第39届日本大奖赛。'
          },
          {
            time: '2025-4-18',
            src: [
              new URL("@/assets/image/Saudi_Arabia_location.png", import.meta.url).href,
              new URL("@/assets/image/Saudi_Arabia_Circuit.png", import.meta.url).href,
            ],
            title: '沙特阿拉伯大奖赛',
            introduce: '2025年4月18日至4月20日于沙特阿拉伯吉达的吉达滨海赛道举办的一场一级方程式赛车赛事。这是2025年世界一级方程式锦标赛的第五场分站赛事，以及第四届沙特阿拉伯大奖赛。因为穆斯林斋月的原因，本站比赛周末从星期四开始，正赛于星期六举行。'
          },
          {
            time: '2025-5-2',
            src: [
              new URL("@/assets/image/Miami_location.png", import.meta.url).href,
              new URL("@/assets/image/Miami_Circuit.png", import.meta.url).href,
            ],
            title: '迈阿密大奖赛',
            introduce: '该大奖赛将于2025年5月4日星期日在美国佛罗里达州的迈阿密国际赛车场举行，比赛超过 57 圈。首届迈阿密大奖赛于 2022 年举行，佛罗里达州的比赛与德克萨斯州在奥斯汀的比赛一起成为日历上的第二场美国比赛——也是第 11 个举办一级方程式世界锦标赛的不同美国场地。'
          },
        ]
      }
    }
  }
}