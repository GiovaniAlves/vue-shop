import { AUTH_TOKEN, USER_AUTHENTICATED } from '@/helpers'

export default {
   user: {
      data: JSON.parse(localStorage.getItem(USER_AUTHENTICATED)) || {},
      token: localStorage.getItem(AUTH_TOKEN)
   }
}
