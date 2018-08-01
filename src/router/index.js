import Vue from 'vue'
import Router from 'vue-router'
import navigation from '@/components/navigation'
import Home from '@/components/myHome'
import login from '@/components/login'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: navigation
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})
