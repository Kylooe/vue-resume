<template>
  <div class="container">
    <h2 class="title">技能</h2>
    <div class="content">
      <div class="skills">
        <div class="skill"
          v-for="skill in $store.state.data.skill"
        >
          <p class="name">{{ skill.name }}</p>
          <div class="level"
            :style="[{ width: skill.level*weight + 'px' }, skillStyle]">
          </div>
        </div>
      </div>
      <div class="other">
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'skill',
    data: () => ({
      weight: 30
    }),
    beforeMount () {
      if (window.innerWidth <= 430) this.weight = 15
    },
    computed: {
      skillStyle: function () {
        return {
          background: `linear-gradient(90deg, #fff ${this.weight / 3 * 2}px, transparent ${this.weight / 3}px)`,
          backgroundSize: `${this.weight}px 100%`
        }
      }
    }
  }
</script>

<style scoped>
  .skills {
    margin: auto;
    max-width: 100%;
    width: 960px;
    text-align: left;
  }
  .skill {
    display: inline-block;
    width: 400px;
    padding: 20px 40px;
    text-align: left;
    transition: all .2s;
  }
  .skill:hover {
    background: rgba(0,0,0,.2);
    border-radius: 5px;
  }
  .name {
    display: inline-block;
    width: 100px;
    margin: 0;
    background-color: #fff;
    color: #4e959f;
    line-height: 50px;
    text-align: center;
    vertical-align: middle;
    box-shadow: -2px 5px 5px rgba(0,0,0,.1);
  }
  .level {
    display: inline-block;
    height: 50px;
    margin-left: 15px;
    background-color: #4e959f;
    /*background: linear-gradient(90deg, #fff 20px, transparent 10px);*/
    /*background-size: 30px 100%;*/
    background-repeat: repeat;
    vertical-align: middle;
  }
  .other {
    margin-top: 40px;
  }
  .other p {
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px #38a1db;
  }
  .panel {
    margin: 30px;
  }
  .tag {
    margin: 10px;
    padding: 5px 15px;
    background: #fff;
    border-radius: 2px;
  }

@media (max-width: 430px) {
  .name {
    line-height: 30px;
  }
  .level {
    height: 30px;
  }
}
</style>
