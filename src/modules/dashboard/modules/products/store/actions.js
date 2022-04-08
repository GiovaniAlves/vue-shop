import ProductService from '@/modules/dashboard/modules/products/services/product-service'

export default {
   async getProducts ({ commit }, { urlPaginated = null, filters = null } = {}) {
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

   async getProduct ({ commit }, id) {
      commit('SET_CURRENT_PRODUCT_LOADING', true)

      try {
         const response = await ProductService.get(id)
         commit('SET_CURRENT_PRODUCT', response)
         return response
      } catch (e) {
         console.log('getProduct error: ', e)
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
      try {
         const response = await ProductService.destroy(id)
         commit('DELETE_PRODUCT', id)
         return response
      } catch (e) {
         console.log('deleteProduct error: ', e)
      }
   }
}
