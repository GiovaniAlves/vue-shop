export default {
   SET_USER (state, userData) {
      state.user.data = userData.user
      state.user.token = userData.token
      localStorage.setItem('TOKEN_VUE_SHOP', userData.token)
   },

   LOGOUT (state) {
      state.user.data = {}
      state.user.token = null
      localStorage.removeItem('TOKEN_VUE_SHOP')
   }
}
