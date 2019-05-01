import Vue from 'vue'
import App from './App.vue'

//Import VueRouter Library, and this app's routes
import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import StateAPIService from '@/services/stateService'

Vue.use(VueRouter) //use Vuerouter

// Configure Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// add API service to Vue prototype
Vue.prototype.$stateService = StateAPIService

// add Leaflet's CSS
import "leaflet/dist/leaflet.css"

new Vue({
  render: h => h(App),
  router  /* include the routes*/
}).$mount('#app')
