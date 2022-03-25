import AuthService from '@/modules/auth/services/auth-service'

export default {
   async register ({ commit }, user) {
      const response = await AuthService.register(user)
      commit('SET_USER', response.data)
      return response
   },

   async login ({ commit }, user) {
      const response = await AuthService.login(user)
      commit('SET_USER', response.data)
      return response
   },

   async user () {
      return await AuthService.user()
   },

   async logout ({ commit }) {
      const response = await AuthService.logout()
      commit('LOGOUT', response.data)
      return response
   }
}
