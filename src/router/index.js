import Vue from 'vue'
import Router from 'vue-router'
import homeIndex from '@/pages/index'
import home from '@/pages/home/home'
import blog from '@/pages/blog/blog'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeIndex',
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
          component: blog
        }
      ]
    }
  ]
})
