export default {
  getDriverData: () => {
    return {
      code: 200,
      data: {
        driverData:  [
        {
          src: new URL("@/assets/image/ver.png", import.meta.url).href,
          name: '马克斯·维斯塔潘',
          number: '169PTS',
          introduce: '荷兰一级方程式赛车车手，现时效力于红牛车队。维斯塔潘保有世界一级方程式锦标赛单季最多分站冠军、单季最多颁奖台完赛、最长连续分站冠军、最长连续杆位等纪录。他在2021年、2022年和2023年赢得一级方程式赛车世界冠军'
        },
        {
          src: new URL("@/assets/image/lec.png", import.meta.url).href,
          name: '夏尔·勒克莱尔',
          number: '138PTS',
          introduce: '是一位摩纳哥一级方程式车手，目前效力于法拉利车队；他曾是法拉利车手学院的成员之一。他在2016年和2017年分别赢得了GP3系列赛和F2的车手冠军。他从2018年起代表索伯车队参加世界一级方程式锦标赛。2019年加入法拉利车队。'
        },
        {
          src: new URL("@/assets/image/nor.png", import.meta.url).href,
          name: '兰多·诺里斯',
          number: '113PTS',
          introduce: '是一位英国赛车手，现为一级方程式迈凯伦车队的车手。他曾经为卡林车队出赛国际汽联二级方程式锦标赛。诺里斯为2015年MSA方程式锦标赛、2016年丰田赛车系列赛、雷诺方程式2.0欧洲杯、雷诺方程式2.0北欧杯，以及2017年国际汽车联合会欧洲三级方程式锦标赛冠军，并在2016年获得迈凯伦汽车运动奖。诺里斯也是一名网络主播，电竞队伍Quadrant的创办人。'
        },
        {
          src: new URL("@/assets/image/sai.png", import.meta.url).href,
          name: '卡洛斯·塞恩斯',
          number: '108PTS',
          introduce: '出生于西班牙马德里，是一位西班牙一级方程式赛车车手，目前效力于法拉利车队。他是两届世界拉力锦标赛冠军卡洛斯·塞恩斯之子。'
        },
        {
          src: new URL("@/assets/image/perez.png", import.meta.url).href,
          name: '塞尔吉奥·佩雷兹',
          number: '107PTS',
          introduce: '是墨西哥一级方程式车手，现效力于红牛车队。'
        },
        {
          src: new URL("@/assets/image/pia.png", import.meta.url).href,
          name: '奥斯卡·皮亚斯特里',
          number: '71PTS',
          introduce: '是一位澳大利亚赛车手。他目前是一级方程式中迈凯伦车队的正赛车手。皮亚斯特里是2019年雷诺方程式欧洲杯和2020年国际汽联三级方程式锦标赛的冠军。2019年加入阿尔品学院。2021年，皮亚斯特里在普雷马车队赢得了国际汽联二级方程式锦标赛的冠军。'
        },
        {
          src: new URL("@/assets/image/rus.png", import.meta.url).href,
          name: '乔治·拉塞尔',
          number: '54PTS',
          introduce: '是英国一级方程式赛车手，现时效力梅賽德斯车队，一级方程式车手协会董事'
        },
        {
          src: new URL("@/assets/image/ham.png", import.meta.url).href,
          name: '刘易斯·汉密尔顿',
          number: '42PTS',
          introduce: '为英国一级方程式赛车车手，现效力于梅赛德斯车队。他是一级方程式赛车历史上的首位且是目前唯一的黑人车手。亦被视为一级方程式历来最成功的车手之一。'
        },
        {
          src: new URL("@/assets/image/alo.png", import.meta.url).href,
          name: '费尔南多·阿隆索',
          number: '33PTS',
          introduce: '是西班牙赛车手，于2005年及2006年两度获得F1世界车手冠军，目前效力于阿斯顿·马丁车队'
        },
        {
          src: new URL("@/assets/image/tsu.png", import.meta.url).href,
          name: '角田裕毅',
          number: '19PTS',
          introduce: '是一名日本一级方程式车手，目前效力于一级方程式锦标赛的RBF1车队。此前他曾效力于国际汽车联合会二级方程式锦标赛的卡林车队，并在处子赛季获得年度车手季军。他获得过日本四级方程式锦标赛的冠军。他同时是本田梦想计划和红牛少年车队成员，曾说过梦想是开一间自己的餐厅。'
        },
        {
          src: new URL("@/assets/image/str.png", import.meta.url).href,
          name: '兰斯·斯托尔',
          number: '11PTS',
          introduce: '是一名加拿大赛车手，目前参赛于一级方程式锦标赛，效力于阿斯顿·马丁车队。他曾获得国际汽联欧洲三级方程式锦标赛2016年赛季车手总冠军。因父亲是阿斯顿·马丁车队老板，他常被称为富二代或太子爷。'
        },
        {
          src: new URL("@/assets/image/ber.png", import.meta.url).href,
          name: '奥利弗·比尔曼',
          number: '6PTS',
          introduce: '是一名英国的赛车手；目前他在参加2024年二级方程式锦标赛，效力于普雷马车队，同时他是法拉利车手学院成员，也是一级方程式法拉利车队和哈斯车队的后备车手'
        },
        {
          src: new URL("@/assets/image/hul.png", import.meta.url).href,
          name: '尼科·霍肯博格',
          number: '6PTS',
          introduce: '是德国赛车手，现时效力于一级方程式的哈斯车队。2010年-2019年，他曾先后代表威廉姆斯车队、印度力量车队、索伯车队和雷诺车队等多支车队参加F1比赛。'
        },
        {
          src: new URL("@/assets/image/ric.png", import.meta.url).href,
          name: '丹尼尔·里卡多',
          number: '5PTS',
          introduce: '意裔澳籍的赛车手，目前效力于一级方程式的RBF1车队。里卡多历来在一级方程式胜出八场分站冠军，也是第三位胜出分站冠军的澳大利亚车手。'
        },
        {
          src: new URL("@/assets/image/alb.png", import.meta.url).href,
          name: '亚历山大·阿尔本',
          number: '2PTS',
          introduce: '是一名赛车手，出生于英国伦敦，同时拥有英国和泰国双重国籍，目前效力于一级方程式的威廉姆斯车队'
        },
        {
          src: new URL("@/assets/image/oco.png", import.meta.url).href,
          name: '埃斯特班·奥康',
          number: '1PTS',
          introduce: '是一位法国赛车手。他因为在2016年比利时大奖赛顶替马诺车队的里奥·哈扬托，而首度登上一级方程式赛场。奥康目前是一级方程式赛车阿尔品车队的主力车手；在此之前他曾作为印度力量车队的主力车手参加了2017和18年的一级方程式比赛，之后在2019年担任梅赛德斯-奔驰的后备车手。2020年萨基尔大奖赛中奥康夺得自己F1职业生涯中首个分站亚军和颁奖台。2021年匈牙利大奖赛中奥康夺得自己F1职业生涯中首个分站冠军。'
        },
        {
          src: new URL("@/assets/image/gas.png", import.meta.url).href,
          name: '皮埃尔·加斯利',
          number: '1PTS',
          introduce: '是法国籍职业赛车手，目前参与一级方程式赛车，效力于阿尔品车队。加斯利为2014年雷诺方程式3.5系列赛亚军及2016年GP2系列赛冠军。他在2017年马来西亚大奖赛首度登上一级方程式赛车赛场。2019赛季他升上红牛一队，在该年季中被下放至原本的红牛二队，随后于巴西站获得分站亚军。2020年意大利大奖赛，加斯利夺得生涯首座分站冠军。'
        },
        {
          src: new URL("@/assets/image/zhou.png", import.meta.url).href,
          name: '周冠宇',
          number: '0PTS',
          introduce: '是一名中国赛车手，目前效力于一级方程式的索伯车队，也是迄今为止唯一一位参加一级方程式比赛的中国车手，也是首位亦一级方程式初登场就获得积分的华人车手。'
        },
        {
          src: new URL("@/assets/image/bot.png", import.meta.url).href,
          name: '瓦尔特利·博塔斯',
          number: '0PTS',
          introduce: '生于芬兰纳斯托拉，是一位芬兰一级方程式车手，目前效力于索伯车队。他现在居住在摩纳哥'
        },
        {
          src: new URL("@/assets/image/sar.png", import.meta.url).href,
          name: '洛根·萨金特',
          number: '0PTS',
          introduce: '是一位美国赛车手，目前效力于一级方程式的威廉姆斯车队，前国际汽联二级方程式锦标赛的卡林车队成员。他目前是威廉姆斯车手学院的成员之一。'
        },
        {
          src: new URL("@/assets/image/mag.png", import.meta.url).href,
          name: '凯文·马格努森',
          number: '1PTS',
          introduce: '是一名丹麦一级方程式车手，目前效力于哈斯车队。他的父亲是前科尔维特厂队车手与一级方程式车手扬·马格努森。'
        },
        ]
      },
      msg: '操作成功'
    }
  }
}