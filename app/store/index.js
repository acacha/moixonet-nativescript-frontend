import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import channels from './modules/channels'
import axios from './modules/axios'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    auth,
    channels,
    axios
  },
  strict: debug
})

Vue.prototype.$store = store

export default store
