export default {
  title: 'Kylooe | bibu-shen@foxmail.com',
  name: 'Kylooe',
  avatar: './static/img/avatar.jpg',
  slogan: '不断学习的动力，无尽的可能性，全栈的心。',
  mail: 'bibu-shen@foxmail.com',
  skill: [
    { name: 'HTML5', level: 9 },
    { name: 'CSS3', level: 9 },
    { name: 'JavaScript', level: 8 },
    { name: 'React', level: 5 },
    { name: 'Vue', level: 5 }
  ],
  projects: [
    {
      img: './static/img/ihm.png',
      name: '澳门房屋局新官方网站',
      show: true,
      keywords: [ 'Brunch', 'sass', 'ES 6' ],
      description: '澳门特别行政区政府房屋局新官方网站。个人负责前台除首页外的所有页面重构、UI 动效、基于 Vue 开发后台系统的部分组件等等。'
    },
    {
      img: './static/img/gcs.png',
      name: '澳门新闻局照片征集平台',
      show: true,
      keywords: [ 'sass', 'ES 6', 'gulp' ],
      description: '澳門特別行政區政府新聞局面向公众的照片征集平台。\n生成 twig，除内容型图片外所有视觉效果使用 CSS 完成，自动化构建使用 gulp。',
      demo: 'https://photo.gcs.gov.mo/'
    },
    {
      img: './static/img/marathon.png',
      name: 'Macao Marathon 2017',
      show: true,
      keywords: [ 'Bootstrap', 'sass', 'Symfony 2.8', 'jQuery' ],
      description: '在历年的冗余老代码基础上基于 Bootstrap 和 jQuery 进⾏新⼀年项⽬的开发，按照设计稿重构 PC 端和移动端布局样式。整理项⽬文件结构，编写项⽬文档。独立负责上述前端相关部分，以及同项⽬ App 中活动⻚的 WebView 调整。',
      demo: 'http://www.macaomarathon.com/zh/'
    },
    {
      img: './static/img/wms.png',
      name: '管理系统',
      show: false,
      keywords: [ 'TypeScript', 'Angular' ],
      description: '一无所知时期瞎做的基于 Angular 2 框架开发的管理系统，十分粗糙，但第一次接触前端框架。',
      code: 'https://github.com/Kylooe/ng2-wms'
    },
    {
      img: './static/img/blog.png',
      name: 'easy-blog',
      show: true,
      keywords: [ 'Pug(Jade)', 'Express', 'Node.js' ],
      description: '使用 Node.js 基于 Express 框架搭建的小小博客系统，数据库使用 MongoDB，使用 Pug（Jade）作为模板引擎。\n接触并熟悉了一下 RESTful API。',
      code: 'https://github.com/Kylooe/node-easy-blog'
    },
    {
      img: './static/img/viso.png',
      name: '可视化音乐播放器',
      show: true,
      keywords: [ 'HTML 5 动画', 'Web Audio API', 'JavaScript', 'Canvas' ],
      description: '使用 HTML 5 的 Web Audio API 实现的音频播放器，通过 Canvas 实时绘制可视化音频频域数据。\n实现了几种视觉效果，播放过程中切换流畅。',
      code: 'http://www.github.com',
      demo: 'http://kylooe.com/Exercises/2016/v-player/index.html'
    },
    {
      img: './static/img/plane.png',
      name: 'A Plane',
      show: true,
      keywords: [ 'Three.js', 'JavaScript', '游戏' ],
      description: '鼠标控制躲避障碍与碰撞得分的飞机小游戏，使用 Three.js 创建各模型与控制运动，结合 TwennMax.js 进行物体的缓动处理。\n配色参考家机游戏《风之旅人》。',
      code: 'http://www.github.com',
      demo: 'http://kylooe.com/Exercises/2016/plane/plane.html'
    },
    {
      img: './static/img/plane.png',
      name: '很久以前的小白基础练习',
      show: false,
      keywords: [ 'CSS', 'JavaScript', 'HTML' ],
      description: '刚开始接触HTML与CSS时做的各种CSS练习。',
      demo: 'http://kylooe.com/Exercises/'
    }
  ]
}
