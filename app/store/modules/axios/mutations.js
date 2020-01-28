import Vue from 'vue'
import * as types from '../../mutation-types'

export default {
  [types.SET] (state, payload) {
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$')
    console.log('payload:')
    console.log(payload)
    Vue.set(state, payload.key, payload.value)
  }
}
