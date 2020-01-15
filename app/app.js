import Vue from 'nativescript-vue'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
import RadAutoComplete from 'nativescript-ui-autocomplete/vue'
import VueDevtools from 'nativescript-vue-devtools'
import RadListView from 'nativescript-ui-listview/vue'
import store from './store'
import App from './components/App'
import Home from './pages/Home'
import DrawerContent from './components/DrawerContent'
import eventBus from './plugins/eventBus'
import axios from './plugins/axios'

// nativescript-platform-css is DEPRECATED and is not maintained!              -
// require('nativescript-platform-css')

Vue.use(RadSideDrawer)
Vue.use(RadListView)
Vue.use(RadAutoComplete)
Vue.use(VueDevtools)
Vue.use(eventBus)
Vue.use(axios)
// REAL DEVICE
// Vue.use(VueDevtools, { host: '192.168.1.42' })

// eslint-disable-next-line no-undef
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'Fab',
  () => require('nativescript-floatingactionbutton').Fab
)

global.vue = new Vue({
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
