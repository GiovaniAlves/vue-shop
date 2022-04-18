import Page404 from '@/views/Page404'
import cartRoute from './../modules/cart/router'

const Checkout = () => import('../modules/checkout/view/Checkout.vue')
const Home = () => import('./../views/Home.vue')
const Products = () => import('../views/Products.vue')
const ProductDetail = () => import('../views/ProductDetail.vue')

export default [
   {
      path: '',
      component: () => import('@/layouts/Website'),
      children: [
         { path: '/pagamento', name: 'checkout', meta: { requiresAuth: true }, component: Checkout },
         { path: '/home', name: 'home', component: Home },
         { path: '/catalogo-produtos', name: 'productsCatalog', component: Products },
         { path: '/detalhes-produto/:url', name: 'productDetail', component: ProductDetail },
         ...cartRoute,
         { path: '*', component: Page404 }
      ]
   }
]
