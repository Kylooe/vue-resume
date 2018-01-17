<template>
  <div class="container">
    <h2 class="title">项目</h2>
    <div class="content">
      <div class="wrapper">
        <ul class="projects"
          :style="{ left: offset + 'px' }"
        >
          <li class="project"
            v-for="item in projects"
          >
            <p class="name">{{ item.name }}</p>
            <img :src="item.img" alt="图显示不出来">
            <p class="description">{{ item.description }}</p>
            <a :href="item.code" target="_blank" v-if="item.code">源码</a>
            <a :href="item.demo" target="_blank" v-if="item.demo">DEMO</a>
          </li>
        </ul>
      </div>
      <div class="left disable" @click="arrow" @touchstart="arrow">&lt;</div>
      <div class="right" @click="arrow" @touchstart="arrow">&gt;</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'project',
    data: () => ({
      offset: 0,
      rowNum: 3,
      cardWidth: 350,
      projects: []
    }),
    beforeMount () {
      this.projects = this.$store.state.data.projects.filter((project) => project.show === true)
      if (window.innerWidth <= 430) this.rowNum = 1
    },
    updated () {
      this.offset === 0 && document.querySelector('.left').classList.add('disable')
      this.offset === ((this.projects.length - this.rowNum) * -this.cardWidth) && document.querySelector('.right').classList.add('disable')
    },
    methods: {
      arrow (e) {
        const classList = e.target.classList
        const leftward = classList.contains('left')
        const threshold = leftward ? 0 : (this.projects.length - this.rowNum) * -this.cardWidth
        if (this.offset !== threshold) {
          if (leftward) {
            this.offset += this.cardWidth
            document.querySelector('.right').classList.remove('disable')
          } else {
            this.offset -= this.cardWidth
            document.querySelector('.left').classList.remove('disable')
          }
        }
      }
    }
  }
</script>

<style scoped>
.content {
  position: relative;
  width: 1150px;
  margin: 0 auto;
  overflow: hidden;
}
.wrapper {
  width: 1050px;
  margin: 20px auto;
  overflow: hidden;
}
.projects {
  position: relative;
  width: 3000px;
  margin: 0;
  padding: 0;
  transition: all .5s ease;
}
.project {
  list-style: none;
  float: left;
  width: 300px;
  height: 450px;
  margin: 0 25px;
  background: #fff;
  box-shadow: 1px 5px 5px rgba(0,0,0,.1);
}
.project p {
  margin: 10px 20px;
}
.name {
  font-size: 20px;
}
img {
  width: 270px;
  max-height: 155px;
  margin: 5px auto;
  border: 1px solid #c1e4e9;
}
.description {
  height: 150px;
  text-align: left;
  white-space: pre-line;
}
a {
  display: inline-block;
  width: 40%;
  padding: 5px;
  background-color: #4e959f;
  color: #fff;
  border-radius: 5px;
}
a:hover {
  background-color: #c1e4e9;
  color: #4e959f;
}
.left, .right {
  position: absolute;
  bottom: 20px;
  background-color: transparent;
  color: #fff;
  font-weight: bolder;
  font-size: 50px;
  cursor: pointer;
  transition: all .2s ease;
}
.left:hover, .right:hover {
  color: #4e959f;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
.disable {
  visibility: hidden;
}

@media screen and (max-width: 430px) {
  .content {
    width: 350px;
    height: 550px;
  }
}
</style>
