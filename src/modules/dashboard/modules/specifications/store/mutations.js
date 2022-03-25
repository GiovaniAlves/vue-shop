export default {
   SET_SPECIFICATIONS (state, specifications) {
      state.specifications.data = specifications.data
      state.specifications.links.data = specifications.links
      state.specifications.links.firstPage = specifications.first_page_url
      state.specifications.links.lastPage = specifications.last_page_url
   },

   SET_SPECIFICATIONS_LOADING (state, loading) {
      state.specifications.loading = loading
   },

   DELETE_SPECIFICATION (state, id) {
      state.specifications.data = state.specifications.data.filter((specification) => {
         return specification.id !== id
      })
   },

   SET_CURRENT_SPECIFICATION (state, specification) {
      state.currentSpecification.data = specification.data
   },

   SET_CURRENT_SPECIFICATION_LOADING (state, loading) {
      state.currentSpecification.loading = loading
   }
}
