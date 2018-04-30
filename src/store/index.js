import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './_mutations'
import getters from './_getters'
import actions from './_actions'

Vue.use(Vuex)

const state = {
  user: {}
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
