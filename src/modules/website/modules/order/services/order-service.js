import axiosClient from '@/axios'

const routeAuthenticated = '/auth/order'

const index = async () => {
   const response = await axiosClient.get(`${routeAuthenticated}`)
   return response.data
}

const get = async (id) => {
   const response = await axiosClient.get(`${routeAuthenticated}/${id}`)
   return response.data
}

const create = (order) => {
   return axiosClient.post(`${routeAuthenticated}`, order)
}

export default {
   index,
   get,
   create
}
