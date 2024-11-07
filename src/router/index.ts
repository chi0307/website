import { createRouter, createWebHistory } from 'vue-router'

import { Route } from '@/router/route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      component: () => import('@/views/HomePage.vue'),
      name: Route.home,
      path: Route.home
    }
  ]
})

export default router
