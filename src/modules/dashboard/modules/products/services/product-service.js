import axiosClient from '@/axios'
const route = '/auth/product'

const all = (url) => {
   url = url || route
   return axiosClient.get(`${url}`)
}

const get = (id) => {
   return axiosClient.get(`${route}/${id}`)
}

const save = (product) => {
   if (product.id) {
      return axiosClient.put(`${route}/${product.id}`, product)
   } else {
      return axiosClient.post(`${route}`, product)
   }
}

const destroy = (id) => {
   return axiosClient.delete(`${route}/${id}`)
}

export default {
   all,
   get,
   destroy,
   save
}
