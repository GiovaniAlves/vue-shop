import ProductService from '@/modules/dashboard/modules/products/services/product-service'
import router from '@/router'
import Vue from 'vue'

export default {
   async getProducts ({ commit }, {
      urlPaginated = null,
      filters = null
   } = {}) {
      commit('SET_PRODUCTS_LOADING', true)

      let response = ''
      if (filters) {
         response = await ProductService.search(urlPaginated, filters)
      } else {
         response = await ProductService.index(urlPaginated)
      }

      commit('SET_PRODUCTS', response.data)
      commit('SET_PRODUCTS_LOADING', false)
      return response
   },

   async getProduct ({ commit }, { idOrUrl, authenticated = true } = {}) {
      commit('SET_CURRENT_PRODUCT_LOADING', true)

      try {
         const response = await ProductService.get(idOrUrl, authenticated)
         commit('SET_CURRENT_PRODUCT', response)
         return response
      } catch (e) {
         console.log('getProduct error: ', e)
         if (authenticated) {
            router.push({ name: 'products' })
            Vue.$toast.error('Produto não encontrado!')
         } else {
            router.push({ name: 'productsCatalog' })
         }
      } finally {
         commit('SET_CURRENT_PRODUCT_LOADING', false)
      }
   },

   async saveProduct ({ commit }, product) {
      const response = await ProductService.save(product)
      commit('SET_CURRENT_PRODUCT', response)
      return response
   },

   async deleteProduct ({ commit }, id) {
      const response = await ProductService.destroy(id)
      commit('DELETE_PRODUCT', id)
      return response
   }
}
