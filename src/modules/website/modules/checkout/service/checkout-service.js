import axiosClient from '@/axios'

const routeAuthenticated = '/auth/order'

const index = () => {
   return axiosClient.get(`${routeAuthenticated}`)
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
