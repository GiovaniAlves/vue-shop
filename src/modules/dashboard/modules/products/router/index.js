const ProductsHome = () => import('../views/ProductsHome.vue')
const ProductsForm = () => import('../views/ProductsForm.vue')

export default [
   {
      path: 'produtos',
      name: 'products',
      component: ProductsHome
   },
   {
      path: 'produto/cadastrar',
      name: 'productsCreate',
      component: ProductsForm
   },
   {
      path: 'produto/:id',
      name: 'productsEdit',
      component: ProductsForm
   }
]
