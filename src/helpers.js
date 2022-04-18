const AUTH_TOKEN = 'token_vue_shop'
const USER_AUTHENTICATED = 'user_vue_shop'

const errorHandler = (errorHandler, vm, info) => {
   console.log('Error Handler: ', 'Instancia Vue', vm, ' error: ', errorHandler.message, ' info: ', info)

   const jwtErrors = ['jwt malformed', 'jwt expired', 'jwt not active', 'invalid token']
   if (jwtErrors.some(jwtError => errorHandler.message.includes(jwtError))) {
      vm.$router.push({
         name: 'login',
         query: { redirect: vm.$route.path }
      })
   }
}

export {
   AUTH_TOKEN,
   errorHandler,
   USER_AUTHENTICATED
}
