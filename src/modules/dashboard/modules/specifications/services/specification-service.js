import axiosClient from '@/axios'
const route = '/auth/specification'

const all = (url) => {
   url = url || route
   return axiosClient.get(`${url}`)
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
   get,
   save,
   destroy
}
