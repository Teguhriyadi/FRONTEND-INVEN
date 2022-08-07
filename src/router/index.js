import { createRouter, createWebHistory } from 'vue-router'
import Template from '../views/Template.vue'

const routes = [
  {
    path: '/',
    name: 'template',
    component: Template
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
