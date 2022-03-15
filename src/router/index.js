import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoutes from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'
import websiteRoutes from '@/modules/website/router'

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

export default router
