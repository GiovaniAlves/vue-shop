import SpecificationService from '@/modules/dashboard/modules/specifications/services/specification-service'

export default {
   async getSpecifications ({ commit }, { url = null } = {}) {
      commit('SET_SPECIFICATIONS_LOADING', true)

      const response = await SpecificationService.all(url)
      commit('SET_SPECIFICATIONS', response.data)
      commit('SET_SPECIFICATIONS_LOADING', false)
      return response
   },

   async getSpecification ({ commit }, id) {
      commit('SET_CURRENT_SPECIFICATION_LOADING', true)

      try {
         const response = await SpecificationService.get(id)
         commit('SET_CURRENT_SPECIFICATION', response)
         return response
      } catch (e) {
         console.log('getSpecification error: ', e)
      } finally {
         commit('SET_CURRENT_SPECIFICATION_LOADING', false)
      }
   },

   async saveSpecification ({ commit }, specification) {
      try {
         const response = await SpecificationService.save(specification)
         commit('SET_CURRENT_SPECIFICATION', response)
         return response
      } catch (e) {
         console.log('getSpecification error:', e)
      }
   },

   async deleteSpecification ({ commit }, id) {
      try {
         const response = await SpecificationService.destroy(id)
         commit('DELETE_SPECIFICATION', id)
         return response
      } catch (e) {
         console.log('deleteSpecification error:', e)
      }
   }
}
