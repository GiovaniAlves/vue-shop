import Vue from 'vue'

const formatPriceBr = (price) => price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
const formatPriceEn = (price) => price.toLocaleString('en', { minimumFractionDigits: 2 })

Vue.filter('format_price_br', formatPriceBr)
Vue.filter('format_price_eua', formatPriceEn)
