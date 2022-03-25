const ProductsHome = () => import('../views/ProductsHome.vue')
const ProductsForm = () => import('../views/ProductsForm.vue')

export default [
   {
      path: 'produtos',
      name: 'products',
      component: ProductsHome
   },
   {
      path: 'produtos/cadastrar',
      name: 'productsCreate',
      component: ProductsForm
   },
   {
      path: 'produtos/:id',
      name: 'productsEdit',
      component: ProductsForm
   }
]
