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
    { name: 'Angular', level: 7 },
    { name: 'Vue.js', level: 6 },
    { name: 'Node.js', level: 3 }
  ],
  projects: [
    {
      img: './static/img/wms.png',
      name: '汽修管理系统',
      keywords: [ 'TypeScript', 'Angular' ],
      description: '基于 Angular 2 框架开发的管理系统，模块化开发实现如库存管理与会员管理等等各大功能。\n本人同时负责 UI 设计，并优化了系统性能，通过 lazy load 异步按需加载功能模块。\n开发过程中将可通用的基础功能抽取写作可复用组件，提高了开发效率。',
      code: 'https://github.com/Kylooe/ng2-wms'
    },
    {
      img: './static/img/blog.png',
      name: 'easy-blog',
      keywords: [ 'Pug(Jade)', 'Express', 'Node.js' ],
      description: '使用 Node.js 基于 Express 框架搭建的博客系统，数据库使用 MongoDB，API 设计遵循 RESTful 风格。\n系统中各页面视图使用 Pug（Jade）作为模板引擎。\n通过 session 识别用户。',
      code: 'https://github.com/Kylooe/node-easy-blog'
    },
    {
      img: './static/img/viso.png',
      name: '可视化音乐播放器',
      keywords: [ 'HTML 5 动画', 'Web Audio API', 'JavaScript', 'Canvas' ],
      description: '使用 HTML 5 的 Web Audio API 实现的音频播放器，基于 FFT 原理对音频频域获取可视化数据，通过 Canvas 实时绘制。\n实时渲染内存开销大，通过若干实践优化了 Canvas 性能，并实现了多种视觉效果，播放过程中切换流畅。',
      code: 'http://www.github.com',
      demo: 'http://kylooe.com/Exercises/2016/v-player/index.html'
    },
    {
      img: './static/img/plane.png',
      name: 'A Plane',
      keywords: [ 'Three.js', 'JavaScript', '游戏' ],
      description: '鼠标控制躲避障碍与碰撞得分的飞机小游戏，使用 Three.js 创建各模型与控制运动，结合 TwennMax.js 进行物体的缓动处理。\n配色参考家机游戏《风之旅人》。',
      code: 'http://www.github.com',
      demo: 'http://kylooe.com/Exercises/2016/plane/plane.html'
    }
  ]
}
