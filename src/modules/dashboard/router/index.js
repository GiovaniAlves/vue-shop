import salesRoutes from './../modules/sales/router'
import productsRoutes from './../modules/products/router'
import reportsRoutes from './../modules/reports/router'
import specificationsRoutes from './../modules/specifications/router'

const Home = () => import('../views/Home.vue')

export default [
   {
      path: '',
      component: () => import('@/layouts/Dashboard'),
      props: { page: 'Painel' },
      children: [
         {
            path: '/painel',
            name: 'dashboard',
            meta: { requiresAuth: true, isAdmin: true },
            component: Home,
            children: [
               ...salesRoutes,
               ...productsRoutes,
               ...reportsRoutes,
               ...specificationsRoutes
            ]
         }
      ]
   }
]
