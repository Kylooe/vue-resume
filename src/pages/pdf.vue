<template>
  <div class="wrapper">
    <div class="sidebar">
      <img class="avatar" :src="$store.state.data.avatar">
      <h1 class="title">{{ $store.state.data.name }}</h1>
      <p class="contact">{{ $store.state.data.mail }}</p>
      <p>应聘职位</p>
      <p class="job">Web前端开发工程师</p>
      <div class="skill">
        <p>个人技能</p>
        <p class="skill" v-for="skill in $store.state.data.skill">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="level" :style="{ width: skill.level*15 + 'px' }"></span>
        </p>
        <p class="skill"><span class="skill-name">英语</span><span>左手Google右手Stack Overflow</span></p>
        <p class="skill"><span class="skill-name">日语</span><span>日常交流水平读写</span></p>
        <p class="skill"><span class="skill-name">粤语</span><span>母语</span></p>
      </div>
    </div>
    <div class="main">
      <div class="part">
        <p class="subtitle">个人简介</p>
        <p>关注交互体验，擅长逻辑实现。有设计思维，对页面重构有现代化产品审美。
        可无障碍阅读英文开发文档及其他技术资料，常使用 Stack Overflow 等解决开发困惑。
        通过 Git 对代码进行版本控制及托管。习惯使用 Mac OS 进行开发。
        具有 All in 的身心状态，热爱学习，有内驱力。有一颗做全栈的心！
        </p>
      </div>
      <div class="part">
        <p class="subtitle">在线项目</p>
        <ul>
          <li v-for="project in projects">
            <p>
              <a class="project-name" :href="project.demo ? project.demo : project.code">{{ project.name }}</a>
              <span class="keyword" v-for="word in project.keywords">{{ word }}</span>
            </p>
            <p class="desc">{{ project.description }}</p>
            <img class="project-img" :src="project.img" alt="图显示不出来">
          </li>
        </ul>
      </div>
      <div class="part">
        <p class="subtitle">工作经历</p>
        <p class="point">珠海唯思科技/澳门唯创科技<span class="time">2017.07 - 现在</span></p>
        <p>经手项目基本为前台展示+后台管理的结构，本人通常负责根据设计稿实现项目前台全站多语言多终端的所有布局样式和交互逻辑，生成 HTML 结构模板和所需的 CSS 与 JS 供后端于 PHP 框架中使用。
          在职期间公司项目开发基本仍使用前端生成模板+后端套页面的模式，对此本人倾向于编写简洁明了的页面结构，使用 SASS 模块化样式，效率允许范围内使用原生 JavaScript 或 jQuery 直接实现所有交互逻辑，力求简单高效，令后端必要时也可以无障碍进行修改。
          间或使用 Vue 或 React 为项目的后台系统提供数据操作组件，如动态表单、前台用户权限统一管理等等；重构 React-native 项目的页面布局和调整UI。
        </p>
      </div>
      <div class="part">
        <p class="subtitle">教育背景</p>
        <p class="point">深圳大学<span class="time">2013.09 - 2017.06</span></p>
        <p>本科。集成电路设计与集成系统专业。
          制作过多个与专业相关的硬件开发小项目。
          在校曾于学生会权益部任职学生干事，参与组织策划及成功开展了多场规模至少达百人的活动。
          凭兴趣自学 Unity 3D 并创作体感游戏，完成后被推荐参赛并获中国大学生计算机设计大赛全国二等奖。
          做过志愿者。爱猫，熟识活动范围内的流浪猫群体，进行过流浪猫救助与救治重病流浪猫善款募捐。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pdf',
  data: () => ({
  }),
  beforeMount () {
    this.projects = this.$store.state.data.projects.filter((project) => project.show === true)
  }
}
</script>

<style scoped>
a {
  text-decoration: underline;
}
.wrapper {
  position: relative;
  margin: 0 auto;
  max-width: 1240px;
  background-color: #c1e4e9;
  box-shadow: 2px 5px 5px rgba(0,0,0,.2);
}
.sidebar {
  position: absolute;
  left: 0;
  width: 30%;
  height: 100%;
  padding: 10px;
  text-align: center;
}
.avatar {
  display: block;
  width: 180px;
  height: 180px;
  margin: 120px auto 30px;
  border: 5px solid #eee;
  border-radius: 50%;
}
.title {
  margin-bottom: 5px;
}
.sidebar .contact {
  font-size: 1.5em;
  margin-bottom: 40px;
  color: #fff;
}
.sidebar p {
  margin: 0;
}
.job {
  font-size: 2em;
}
div.skill {
  margin: 50px 15px;
}
p.skill {
  width: 100%;
  margin-top: 5px;
  font-size: 1.2em;
  text-align: left;
}
.skill span {
  display: inline-block;
}
.skill-name {
  width: 120px;
  text-align: right;
  vertical-align: top;
}
.level {
  display: inline-block;
  height: 5px;
  margin-left: 15px;
  background-color: #fff;
  vertical-align: middle;
}

.skill span:last-child {
  margin-left: 15px;
  width: calc(100% - 135px);
}
.main {
  background: #fff;
  margin-left: 30%;
  padding: 0 40px;
  overflow: hidden;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.main p {
  padding: 0 20px;
  white-space: pre-line;
}
.part {
  margin: 50px 0;
}
.part li {
  overflow: auto;
  border-bottom: 1px dashed #4e959f;
}
.part li:last-child {
  border: none;
}
.subtitle {
  background: #c1e4e9;
  font-size: 2em;
  margin: 0;
}
.point {
  font-size: 1.5em;
  margin-bottom: 15px;
  border-bottom: 1px dashed #4e959f;
}
.time {
  float: right;
  font-size: 0.8em;
}
.project-name {
  font-size: 1.5em;
}
.keyword {
  float: right;
  background-color: #c1e4e9;
  color: #4e959f;
  margin: 8px 2px;
  padding: 0 10px;
  border-radius: 5px;
}
.desc {
  display: inline-block;
  width: 500px;
  vertical-align: top;
}
.project-img {
  display: inline-block;
  height: 120px;
  margin-bottom: 10px;
  border: 1px solid #c1e4e9;
}
</style>
