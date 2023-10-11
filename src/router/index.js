import { createRouter, createWebHistory } from 'vue-router'

import NoAuthLayout from '@/layouts/NoAuth';

import HomeNoAuth from '@/views/no-auth/Home';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => NoAuthLayout,
      children: [
        {
          path: '/',
          name: 'HomeNoAuth',
          component: HomeNoAuth
        },
      ],
    }
  ]
})

export default router
