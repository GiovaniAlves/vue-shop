import axiosClient from '@/axios'

export default {
   async register ({ commit }, user) {
      const response = await axiosClient.post('/register', user)
      commit('SET_USER', response.data)
      return response
   },

   login ({ commit }, user) {
      const { data } = axiosClient.post('/login', user)
      commit('SET_USER', data)
      return data
   }
}
