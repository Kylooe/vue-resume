<template>
  <div>
    <h2 class="title">教育背景</h2>
    <div class="content">
      <h3>深圳大学</h3>
      <p>本科 · 2013-2017</p>
      <p>集成电路设计与集成系统</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 1.5em;
}
h3 {
  margin: 5px;
  color: #fff;
  font-size: 2em;
}
p {
  margin: 5px;
}
</style>
