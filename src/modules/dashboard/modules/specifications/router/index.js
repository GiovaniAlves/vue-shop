const SpecificationsHome = () => import('./../views/SpecificationsHome.vue')
const SpecificationsForm = () => import('./../views/SpecificationsForm.vue')

export default [
   {
      path: 'espeficacoes',
      name: 'specifications',
      component: SpecificationsHome
   },
   {
      path: 'espeficacao/cadastrar',
      name: 'specificationsCreate',
      component: SpecificationsForm
   },
   {
      path: 'espeficacao/:id',
      name: 'specificationsEdit',
      component: SpecificationsForm
   }
]
