import Vue from 'vue'
import DefaultTemplate from './layouts/Default'
import router from './router'
import store from './store'
import jQuery from 'jquery'
require('./plugins')

window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(DefaultTemplate)
}).$mount('#app')
