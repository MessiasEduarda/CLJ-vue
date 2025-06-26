import { createRouter, createWebHistory } from 'vue-router'
import Inicial from '../views/Inicial.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicial,
    },
  ],
})

export default router
