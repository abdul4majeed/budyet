import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaderSwitch : false,
  },
  mutations: {
    changeLoaderSwitch (state, n) {
      state.loaderSwitch = n;
    }
  },
  getters:{
    getLoaderSwitch: state => {
      return state.loaderSwitch;
    }
  },
  actions: {
  },
  modules: {
  }
})
