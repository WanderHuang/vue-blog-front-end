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
  // 不是重定向到login页面且未鉴权 则定向到login页面
  if (to.path !== '/login' && (!localStorage.token && !localStorage.user)) {
    console.info('redirect to login')
    next('/login')
  } else if (from.path === '/login' && to.query.name && to.query.password) {
    // 来自于login页面且携带用户信息 用户鉴定在路由之前 所以这里能保证携带的用户信息是合法的
    next('/home')
  } else {
    // 其余消息
    next()
  }
})

export default router
