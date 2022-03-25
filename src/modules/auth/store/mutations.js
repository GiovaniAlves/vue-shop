import { AUTH_TOKEN, USER_AUTHENTICATED } from '@/helpers'

export default {
   SET_USER (state, userData) {
      state.user.data = userData.user
      state.user.token = userData.token
      localStorage.setItem(AUTH_TOKEN, userData.token)
      localStorage.setItem(USER_AUTHENTICATED, JSON.stringify(userData.user))
   },

   LOGOUT (state) {
      state.user.data = {}
      state.user.token = null
      localStorage.removeItem(AUTH_TOKEN)
      localStorage.removeItem(USER_AUTHENTICATED)
   }
}
