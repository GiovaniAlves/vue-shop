import axiosClient from '@/axios'

const qtyUsers = async (date) => {
   const data = {
      date: date
   }
   const response = await axiosClient.post('/auth/user/search', data)
   return response.data
}

const salesBy = async (data) => {
   /* data: { date: '09-2022', type: 'status' ou 'category' } */
   const response = await axiosClient.post('/auth/order/search', data)
   return response.data
}

export default {
   qtyUsers,
   salesBy
}
