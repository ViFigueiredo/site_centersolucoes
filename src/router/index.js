import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PartnersView from '@/views/PartnersView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/parceiros',
      component: PartnersView
    },
    {
      path: '/sobre',
      component: AboutView
    },
    {
      path: '/contato',
      component: ContactView
    },
  ]
})

export default router
