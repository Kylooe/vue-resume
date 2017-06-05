<template>
  <div id="resume">
    <switcher @change="change" />
    <div class="fullpage"
      v-show="isFullPage"
      @mousewheel="fullscroll"
      @DOMMouseScroll="fullscroll"
    >
      <navigator :id="current" @to="to" />
      <div class="page"
        v-for="(page, index) in pages"
        :class="{
          current: current === index,
          pre: current > index,
          next: current < index
        }"
      >
        <component :is="page"></component>
      </div>
    </div>
    <pdf v-show="!isFullPage"></pdf>
  </div>
</template>

<script>
import switcher from './component/switcher'
import navigator from './component/navigator'

import profile from './pages/profile'
import skill from './pages/skill'
import project from './pages/project'
import education from './pages/education'

import pdf from './pages/pdf'

export default {
  name: 'resume',
  data: () => ({
    pages: [ 'profile', 'skill', 'project', 'education' ],
    current: 0,
    isFullPage: true
  }),
  methods: {
    to (id) {
      this.current = id
    },
    change (isSinglePage) {
      this.isFullPage = !isSinglePage
    },
    fullscroll (e) {
      e = e || window.event
      let wheelDelta = e.wheelDelta ? e.wheelDelta : -e.detail  // firefox不支持event.wheelDelta
      e.stopPropagation()
      e.preventDefault()
      if (this.lock) return
      if (wheelDelta > 0) { // +120 up, -120 down
        if (this.current === 0) return
        else this.current--
      } else if (wheelDelta < 0) {
        if (this.current === this.pages.length - 1) return
        else this.current++
      }
      this.lock = true
      setTimeout(() => { this.lock = false }, 1000)
    }
  },
  components: { switcher, navigator, profile, skill, project, education, pdf }
}
</script>

<style>
body {
  margin: 0;
}
#resume {
  padding: 60px 0;
  background-color: #eee;
  color: #4e959f;
  font-family: "Microsoft JhengHei", Helvetica, Arial, sans-serif;
}
.fullpage {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #c1e4e9;
  text-align: center;
}

.page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(100%);
  transition: transform .5s ease-out, background .3s ease-in;
}

.current, .pre, .next {
  opacity: 1;
}

.current {
  transform: translate3d(0,0,0);
}

.pre {
  transform: translate3d(0, -100%, 0);
  background: rgba(0,0,0,.3);
}

.next {
  transform: translate3d(0,100%,0);
  background: rgba(0,0,0,.3);
}

.title {
  font-size: 3em;
  color: #fff;
  text-shadow: 1px 2px #38a1db;
}

.content {
  padding: 20px;
}

a {
  text-decoration: none;
  color: #4e959f;
}
</style>
