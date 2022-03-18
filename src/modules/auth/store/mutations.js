import { AUTH_TOKEN } from '@/helpers'

export default {
   SET_USER (state, userData) {
      state.user.data = userData.user
      state.user.token = userData.token
      localStorage.setItem(AUTH_TOKEN, userData.token)
   },

   LOGOUT (state) {
      state.user.data = {}
      state.user.token = null
      localStorage.removeItem(AUTH_TOKEN)
   }
}
