export default {
   SET_PRODUCTS (state, products) {
      state.products.data = products.data
      state.products.links.data = products.links
      state.products.links.fisrtPage = products.first_page_url
      state.products.links.lastPage = products.last_page_url
   },

   SET_PRODUCTS_LOADING (state, status) {
      state.products.loading = status
   },

   DELETE_PRODUCT (state, id) {
      state.products.data = state.products.data.filter((product) => {
         return product.id !== id
      })
   },

   SET_CURRENT_PRODUCT (state, product) {
      state.currentProduct.data = product.data
   },

   SET_CURRENT_PRODUCT_LOADING (state, status) {
      state.currentProduct.loading = status
   }
}
