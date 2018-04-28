import Vue from 'vue'
import Router from 'vue-router'
import homeIndex from '@/pages/index'
import home from '@/pages/home/home'
import blogIndex from '@/pages/blog/index'
import blog from '@/pages/blog/blog'

Vue.use(Router)
export default new Router({
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
        }
      ]
    },
    {
      name: 'articles',
      path: '/articles/:location',
      component: blog
    }
  ]
})
