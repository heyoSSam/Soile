import { createRouter, createWebHistory } from 'vue-router'
import FeedView from '../views/FeedView.vue'
import ChatView from '../views/ChatView.vue'
import Search from '../views/SearchView.vue'
import Login from '../views/LoginView.vue'
import Signup from '@/views/SignupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/feed',
      name: 'main',
      component: FeedView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView
    },
    {
      path: '/search',
      name: 'search',
      component: Search 
    },
    {
      path:'/login',
      name: 'login',
      component: Login
    },
    {
      path:'/signup',
      name: 'signup',
      component: Signup
    },
  ]
})

export default router
