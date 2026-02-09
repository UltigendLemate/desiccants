import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Products.vue')
  },
  {
    path: '/RnD',
    name: 'RnD',
    component: () => import('../views/rnd.vue')
  },
  {
    path: '/inquiry',
    name: 'inquiry',
    component: () => import('../views/Inquiry.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  
})



export default router
