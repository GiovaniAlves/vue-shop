const Cart = () => import('./../views/Cart.vue')
const Checkout = () => import('./../views/Checkout.vue')
const Home = () => import('./../views/Home.vue')
const Products = () => import('./../views/Products.vue')
const ProductDetail = () => import('./../views/ProductDetail.vue')

export default [
   {
      path: '',
      component: () => import('@/layouts/Website'),
      children: [
         { path: '/carrinho', name: 'cart', component: Cart },
         { path: '/pagamento', name: 'checkout', meta: { requiresAuth: true }, component: Checkout },
         { path: '/home', name: 'home', component: Home },
         { path: '/catalogo-produtos', name: 'productsCatalog', component: Products },
         { path: '/detalhes-produto', name: 'productDetail', component: ProductDetail }
      ]
   }
]
