<template>
  <div class="switcher" :class="{ single: isSingle }">
    <span @click="change(false)">多</span>
    <span @click="change(true)">单</span>
  </div>
</template>

<script>
export default {
  name: 'switcher',
  data: () => ({
    isSingle: false
  }),
  methods: {
    change (isSingle) {
      this.isSingle = isSingle
      this.$emit('change', isSingle)
    }
  }
}
</script>

<style>
.switcher {
  position: absolute;
  top: 20px;
  right: 30px;
  padding: 2px;
  background: #d9f3f7;
  border-radius: 5px;
  cursor: pointer;
  z-index: 99;
}
.switcher:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 25px;
  background: #fff;
  border-radius: 5px;
  z-index: -1;
  transition: all .2s ease;
}
.single:after {
  left: 20px;
}
</style>
