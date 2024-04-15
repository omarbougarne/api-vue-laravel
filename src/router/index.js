import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import busview from '../views/bus/View.vue'
import busCreate from '../views/bus/Create.vue'
import busEdit from '../views/bus/Edit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/bus',
      name: 'bus',
      component: busview
    },
    {
      path: '/bus/create',
      name: 'busCreate',
      component: busCreate
    },
    {
      path: '/bus/:id/edit',
      name: 'busEdit',
      component: busEdit 
    }
  ]
})

export default router
