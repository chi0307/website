import { Route } from '@/router/route'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Route.home,
      name: Route.home,
      component: () => import('@/views/HomePage.vue')
    }
  ]
})

export default router
