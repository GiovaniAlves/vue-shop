import Vue from 'vue'
import DefaultTemplate from './layouts/Default'
import router from './router'
import store from './store'
import jQuery from 'jquery'
// import { errorHandler } from '@/helpers'
require('./plugins')

window.$ = window.jQuery = jQuery

Vue.config.productionTip = false
// Vue.config.errorHandler = errorHandler

new Vue({
  router,
  store,
  render: h => h(DefaultTemplate)
}).$mount('#app')
