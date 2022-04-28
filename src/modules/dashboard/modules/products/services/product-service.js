import axiosClient from '@/axios'

const routeAuthenticated = '/auth/product'
const route = '/product'

const index = (urlPaginated) => {
   urlPaginated = urlPaginated || routeAuthenticated
   return axiosClient.get(`${urlPaginated}`)
}

const get = (idOrUrl, authenticated) => {
   if (authenticated) {
      return axiosClient.get(`${routeAuthenticated}/${idOrUrl}`)
   } else {
      return axiosClient.get(`${route}/showProduct/${idOrUrl}`)
   }
}

const save = (product) => {
   if (product.id) {
      return axiosClient.put(`${routeAuthenticated}/${product.id}`, product)
   } else {
      return axiosClient.post(`${routeAuthenticated}`, product)
   }
}

const search = (urlPaginated, filters) => {
   if (urlPaginated) {
      // Rota da paginação já vem autenticada - Pois essa é a rota da parte administrativa do sistema
      return axiosClient.post(`${urlPaginated}`, filters)
   } else {
      return axiosClient.post(`${route}/search`, filters)
   }
}

const destroy = (id) => {
   return axiosClient.delete(`${routeAuthenticated}/${id}`)
}

export default {
   index,
   get,
   destroy,
   save,
   search
}
