<template>
  <div>
    <h2 class="title">项目</h2>
    <div class="content">
      <div class="wrapper">
        <ul class="projects"
          :style="{ left: offset + 'px' }"
        >
          <li class="project"
            v-for="item in $store.state.data.projects"
          >
            <p>{{ item.name }}</p>
            <img :src="item.img" alt="图显示不出来">
            <p class="description">{{ item.description }}</p>
            <a :href="item.code" v-if="item.code">源码</a>
            <a :href="item.demo" v-if="item.demo">DEMO</a>
          </li>
        </ul>
      </div>
      <div class="left" @click="pre">&lt;</div>
      <div class="right" @click="next">&gt;</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'project',
    data: () => ({
      offset: 0,
      length: 0
    }),
    beforeMount () {
      this.length = this.$store.state.data.projects.length
    },
    methods: {
      pre () {
        if (this.offset === 0) return
        else this.offset += 350
      },
      next () {
        if (this.offset === (this.length - 3) * -350) return
        else this.offset -= 350
      }
    }
  }
</script>

<style scoped>
.content {
  position: relative;
  width: 1100px;
  margin: 0 auto;
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
img {
  width: 270px;
  max-height: 155px;
  margin: 5px auto;
  border: 1px solid #c1e4e9;
}
.description {
  height: 165px;
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
  font-size: 3em;
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
</style>
