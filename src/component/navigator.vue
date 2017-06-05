<template>
  <div class="navigator">
    <div class="item" v-for="(page, i) in pages"> 
      <a class="link" 
        :class="{ 'active': id === i }" 
        @click="linkTo(i)"
      >
        <span :class="{ 'hide': id !== i }">
          {{ pages[i] }}
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigator',
  props: ['id'],
  data: () => ({
    pages: ['简介', '技能', '项目', '教育']
  }),
  methods: {
    linkTo (i) {
      this.$emit('to', i)
    }
  }
}
</script>

<style scoped>
.navigator {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  z-index: 9;
}

.item {
  height: 25px;
  vertical-align: middle;
}

.link {
  display: inline-block;
  min-width: 40px;
  min-height: 8px;
  border-radius: 5px;
  background: #4e959f;
  transition: all .2s linear;
}

.link:hover {
  cursor: pointer;
}

.active {
  background: #fff;
}

.hide {
  display: none;
}

.link:hover .hide {
  color: #fff;
  display: inline-block;
}

/* adapt mobile browser */
@media (max-width: 430px) {
  .navigator {
    display: none;
  }
}
</style>
