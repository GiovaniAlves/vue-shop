import axiosClient from '@/axios'

const register = async user => {
   return await axiosClient.post('/register', user)
}

const login = async user => {
   return await axiosClient.post('/login', user)
}

const user = async () => {
   return await axiosClient.post('/auth/user')
}

const logout = async () => {
   return await axiosClient.post('/auth/logout')
}

export default {
   register,
   login,
   user,
   logout
}
