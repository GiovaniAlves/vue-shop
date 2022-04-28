import productsRoutes from './../modules/products/router'
import specificationsRoutes from './../modules/specifications/router'

const Home = () => import('../views/Home.vue')
const Reports = () => import('../views/Reports.vue')

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
               {
                  path: 'relatorios',
                  name: 'dashReports',
                  alias: '/painel',
                  component: Reports
               },
               ...productsRoutes,
               ...specificationsRoutes
            ]
         }
      ]
   }
]
