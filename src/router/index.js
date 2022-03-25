import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoutes from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'
import websiteRoutes from '@/modules/website/router'
import store from '@/store'
import { AUTH_TOKEN } from '@/helpers'

Vue.use(VueRouter)

const routes = [
   {
      path: '',
      redirect: '/login'
   },
   ...authRoutes,
   ...dashboardRoutes,
   ...websiteRoutes
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
            await store.dispatch('user')

            // só podem acessar o painel usuários adm
            /* if (to.matched.some(route => route.meta.isAdmin)) {
               try {
                  await store.dispatch('painelProduct')
                  return next()
               } catch (e) {
                  // console.log('Permission error:', e)
                  return next({ name: 'home' })
               }
            } */

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
