import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  auth: ''
}

const getters = {
  test () {
    console.log('test')
  }
}

const actions = {
  test () {
    console.log('test')
  }
}

const mutations = {
  test () {
    console.log('test')
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
