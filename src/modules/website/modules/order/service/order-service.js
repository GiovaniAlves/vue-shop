import axiosClient from '@/axios'

const routeAuthenticated = '/auth/order'

const index = async () => {
   const response = await axiosClient.get(`${routeAuthenticated}`)
   return response.data
}

const get = (id) => {
   return axiosClient.get(`${routeAuthenticated}/${id}`)
}

const search = (status) => {
   return axiosClient.post(`${routeAuthenticated}/search`, status)
}

const create = (order) => {
   return axiosClient.post(`${routeAuthenticated}`, order)
}

export default {
   index,
   get,
   search,
   create
}
