import axiosClient from '@/axios'

const route = '/auth/product'

const index = (urlPaginated) => {
   urlPaginated = urlPaginated || route
   return axiosClient.get(`${urlPaginated}`)
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

const search = (urlPaginated, filters) => {
   if (urlPaginated) {
      return axiosClient.post(`${urlPaginated}`, filters)
   } else {
      return axiosClient.post(`${route}/search`, filters)
   }
}

const destroy = (id) => {
   return axiosClient.delete(`${route}/${id}`)
}

export default {
   index,
   get,
   destroy,
   save,
   search
}
