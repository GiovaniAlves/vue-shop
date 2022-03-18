import axiosClient from '@/axios'

export default {
   async register ({ commit }, user) {
      const response = await axiosClient.post('/register', user)
      commit('SET_USER', response.data)
      return response
   },

   async login ({ commit }, user) {
      const response = await axiosClient.post('/login', user)
      commit('SET_USER', response.data)
      return response
   },

   async logout ({ commit }) {
      const response = await axiosClient.post('/auth/logout')
      commit('LOGOUT', response.data)
      return response
   }
}
