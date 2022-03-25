const SpecificationsHome = () => import('./../views/SpecificationsHome.vue')
const SpecificationsForm = () => import('./../views/SpecificationsForm.vue')

export default [
   {
      path: 'espeficacoes',
      name: 'specifications',
      component: SpecificationsHome
   },
   {
      path: 'espeficacoes/cadastrar',
      name: 'specificationsCreate',
      component: SpecificationsForm
   },
   {
      path: 'espeficacoes/:id',
      name: 'specificationsEdit',
      component: SpecificationsForm
   }
]
