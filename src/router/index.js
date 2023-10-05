import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Default.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
      ],
    }
  ]
})

export default router
