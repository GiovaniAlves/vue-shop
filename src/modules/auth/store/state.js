import { AUTH_TOKEN, USER_AUTHENTICATED } from '@/helpers'

export default {
   user: {
      data: JSON.parse(localStorage.getItem(USER_AUTHENTICATED)) || { name: '', email: '' },
      token: localStorage.getItem(AUTH_TOKEN)
   }
}
