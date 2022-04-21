import Page404 from '@/views/Page404'
import cartRoute from './../modules/cart/router'
import orderRoutes from '../modules/order/router'

const Home = () => import('./../views/Home.vue')
const Products = () => import('../views/Products.vue')
const ProductDetail = () => import('../views/ProductDetail.vue')

export default [
   {
      path: '',
      component: () => import('@/layouts/Website'),
      children: [
         { path: '/home', name: 'home', component: Home },
         { path: '/catalogo-produtos', name: 'productsCatalog', component: Products },
         { path: '/detalhes-produto/:url', name: 'productDetail', component: ProductDetail },
         ...cartRoute,
         ...orderRoutes,
         { path: '*', component: Page404 } // tem que ficar na última posição pq senão não conhece as rotas abaixo
      ]
   }
]
