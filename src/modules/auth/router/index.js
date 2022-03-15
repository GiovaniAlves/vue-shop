const Login = () => import('./../views/Login.vue')
const Register = () => import('./../views/Register.vue')

export default [
   {
      path: '',
      component: () => import('@/layouts/Auth'),
      children: [
         {
            path: '/login',
            name: 'login',
            component: Login
         },
         {
            path: '/registro',
            name: 'register',
            component: Register
         }
      ]
   }
]
