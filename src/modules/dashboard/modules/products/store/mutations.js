export default {
   SET_PRODUCTS (state, products) {
      state.products.data = products.data
      state.products.links.data = products.meta.links
      state.products.links.firstPage = products.links.first
      state.products.links.lastPage = products.links.last
      state.products.links.currentPage = products.meta.current_page
      state.products.links.totalPages = products.meta.last_page
      state.products.links.productsPerPage = products.meta.per_page
      state.products.links.totalProducts = products.meta.total
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
