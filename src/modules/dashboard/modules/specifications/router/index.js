const SpecificationsHome = () => import('./../views/SpecificationsHome.vue')
const SpecificationsForm = () => import('./../views/SpecificationsForm.vue')

export default [
   {
      path: 'especificacoes',
      name: 'specifications',
      component: SpecificationsHome
   },
   {
      path: 'especificacao/cadastrar',
      name: 'specificationsCreate',
      component: SpecificationsForm
   },
   {
      path: 'especificacao/:id',
      name: 'specificationsEdit',
      component: SpecificationsForm
   }
]
