import Vue from 'nativescript-vue'
import { EventBus } from './event-bus.js'

// this helps WebStorm with autocompletion, otherwise it's not needed
Vue.prototype.$eventBus = EventBus

export default {
  install (Vue, options) {
    // Add Vue instance methods by attaching them to Vue.prototype.
    Vue.prototype.$eventBus = EventBus
  }
}
