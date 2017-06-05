import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'

Vue.use(Vuex)

// create store
export default new Vuex.Store({
  state: {
    data: data
  }
})

