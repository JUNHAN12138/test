import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import edit from '../views/edit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path:'/edit',
    name:'edit',
    component:edit
  }
]

const router = new VueRouter({
  routes
})

export default router
