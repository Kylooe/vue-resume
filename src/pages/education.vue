<template>
  <div class="container">
    <h2 class="title">经历</h2>
    <div class="content">
      <ul>
        <li>
          <p class="time">2013 - 2017</p>
          <h3>深圳大学</h3>
          <p>本科 · 集成电路设计与集成系统</p>
        </li>
        <li>
          <p class="time">2017.07 - 现在</p>
          <h3>珠海唯思科技/澳门唯创科技</h3>
          <p>前端开发</p>
        </li>
      </ul>
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
ul {
  padding: 0;
  list-style: none;
}
li {
  padding: 30px 0;
}
li:not(:last-child):after {
  content: '';
  position: relative;
  top: 30px;
  display: block;
  margin: auto;
  width: 200px;
  height: 2px;
  background: rgba(255, 255, 255, .5);
}
h3 {
  margin: 5px;
  color: #fff;
  font-size: 2.5rem;
}
p {
  margin: 5px;
  font-size: 1.5rem;
}
@media screen and (max-width: 430px) {
  .title {
    margin-bottom: 10px;
  }
}
</style>
