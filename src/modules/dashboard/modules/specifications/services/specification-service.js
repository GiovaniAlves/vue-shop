import axiosClient from '@/axios'

const route = '/auth/specification'

// Rota que seta todas as especificações no select da página do produto
const all = () => {
   return axiosClient.get('/auth/allSpecifications')
}

const index = (urlPaginated) => {
   urlPaginated = urlPaginated || route
   return axiosClient.get(`${urlPaginated}`)
}

const get = (id) => {
   return axiosClient.get(`${route}/${id}`)
}

const save = (specification) => {
   if (specification.id) {
      return axiosClient.put(`${route}/${specification.id}`, specification)
   } else {
      return axiosClient.post(`${route}`, specification)
   }
}

const destroy = (id) => {
   return axiosClient.delete(`${route}/${id}`)
}

export default {
   all,
   index,
   get,
   save,
   destroy
}
