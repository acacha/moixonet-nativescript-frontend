import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import channels from './modules/channels'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    auth,
    channels
  },
  strict: debug
})

Vue.prototype.$store = store

export default store
