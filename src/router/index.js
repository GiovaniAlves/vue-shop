import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoutes from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'
import websiteRoutes from '@/modules/website/router'
import Page404 from '@/views/Page404'
import store from '@/store'
import { AUTH_TOKEN } from '@/helpers'

Vue.use(VueRouter)

const routes = [
   {
      path: '',
      redirect: '/home'
   },
   ...authRoutes,
   ...dashboardRoutes,
   ...websiteRoutes,
   {
      path: '*',
      name: 'page404',
      component: Page404
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

router.beforeEach(async (to, from, next) => {
   if (to.matched.some(route => route.meta.requiresAuth)) {
      const token = localStorage.getItem(AUTH_TOKEN)
      const loginRoute = {
         path: '/login',
         query: { redirect: to.fullPath }
      }

      if (token) {
         try {
            // se o token ainda for válido irá prosseguir normalmente
            const response = await store.dispatch('user')
            const { user } = response.data

            // só podem acessar o painel usuários adm
            if (to.matched.some(route => route.meta.isAdmin)) {
               // senão tiver a propriedade is_admin mando para o home do site.
               // eslint-disable-next-line no-prototype-builtins
               if (user.hasOwnProperty('is_admin')) {
                  return next()
               } else {
                  return next({ name: 'home' })
               }
            }

            return next()
         } catch (e) {
            console.log('Auth login error:', e)
            return next(loginRoute)
         }
      }
      return next(loginRoute)
   }
   next()
})

export default router
