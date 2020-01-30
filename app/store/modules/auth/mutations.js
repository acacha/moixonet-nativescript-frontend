import Vue from 'vue'
import * as types from '../../mutation-types'

export default {
  [types.SET] (state, payload) {
    Vue.set(state, payload.key, payload.value)
    // payload.key = 'user'
    // payload.value = { name: 'Pepe Pardo', email: 'pepe@pardo.com' }
    // state[payload.key] = payload.value -> NO VA AMB VUE
    // state.payload.key = payload.value EXECUTION ERROR
  }
  // EXEMPLE ÚS
  // this.$store.commit(types.SET, { key: 'loggedIn', value: true })
  // this.$store.commit(types.SET, { key: 'user', { name: 'Pepe Pardo'} })
}
