const Checkout = () => import('../view/OrderCheckout.vue')
const Orders = () => import('../view/Orders.vue')
const OrderDetail = () => import('../view/OrderDetail.vue')

export default [
   {
      path: '/pagamento',
      name: 'checkout',
      meta: { requiresAuth: true },
      component: Checkout
   },
   {
      path: '/pedidos',
      name: 'Orders',
      component: Orders
   },
   {
      path: '/detalhes-pedido/:id',
      name: 'orderDetail',
      component: OrderDetail
   }
]
