import axiosClient from '@/axios'

const routeAuthenticated = '/auth/specification'

// Rota que seta todas as especificações no select da página do produto
const all = () => {
   return axiosClient.get('/auth/allSpecifications')
}

const index = (urlPaginated) => {
   urlPaginated = urlPaginated || routeAuthenticated
   return axiosClient.get(`${urlPaginated}`)
}

const get = (id) => {
   return axiosClient.get(`${routeAuthenticated}/${id}`)
}

const save = (specification) => {
   if (specification.id) {
      return axiosClient.put(`${routeAuthenticated}/${specification.id}`, specification)
   } else {
      return axiosClient.post(`${routeAuthenticated}`, specification)
   }
}

const destroy = (id) => {
   return axiosClient.delete(`${routeAuthenticated}/${id}`)
}

export default {
   all,
   index,
   get,
   save,
   destroy
}
