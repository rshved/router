import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import History from '../views/History.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    props: true
  },
  {
    path: '/history',
    name: 'history',
    component: History,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  Vue: Vue,
  base: process.env.BASE_URL,
  routes
})

export default router