import ordersRoutes from './../modules/orders/router'
import productsRoutes from './../modules/products/router'
import reportsRoutes from './../modules/reports/router'

const Home = () => import('../views/Home.vue')

export default [
   {
      path: '',
      component: () => import('@/layouts/Dashboard'),
      children: [
         {
            path: '/painel',
            name: 'dashboard',
            meta: { requiresAuth: true, isAdmin: true },
            component: Home,
            children: [
               ...ordersRoutes,
               ...productsRoutes,
               ...reportsRoutes
            ]
         }
      ]
   }
]
