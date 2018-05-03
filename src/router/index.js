import Vue from 'vue'
import Router from 'vue-router'
import homeIndex from '@/pages/index'
import home from '@/pages/home/home'
import blogIndex from '@/pages/blog/index'
import blog from '@/pages/blog/blog'
import login from '@/pages/login/login'
import wall from '@/pages/wall/wall'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: homeIndex,
      children: [
        {
          path: '/',
          component: home
        },
        {
          path: 'home',
          component: home
        },
        {
          path: 'blog',
          component: blogIndex
        },
        {
          path: 'wall',
          component: wall
        }
      ]
    },
    {
      name: 'articles',
      path: '/articles/:location',
      component: blog
    },
    {
      name: 'login',
      path: '/login',
      component: login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/' && !to.query.name) {
    console.info('redirect to login')
    next('/login')
  }

  if (from.path === '/login' && to.query.name && to.query.password) {
    next('/home')
  }
  next()
})

export default router
