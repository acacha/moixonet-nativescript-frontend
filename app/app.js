/* eslint-disable import/order */
import store from './store'
import Vue from 'nativescript-vue'
import App from './components/App'
import Home from './components/Home'
import DrawerContent from './components/DrawerContent'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(RadSideDrawer)
Vue.use(VueDevtools)
// REAL DEVICE
// Vue.use(VueDevtools, { host: '192.168.1.42' })

// eslint-disable-next-line no-undef
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  render (h) {
    return h(
      App,
      [
        h(DrawerContent, { slot: 'drawerContent' }),
        h(Home, { slot: 'mainContent' })
      ]
    )
  },
  store
}).$start()
