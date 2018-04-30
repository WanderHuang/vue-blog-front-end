// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

// axios拦截器
axios.interceptors.request.use(config => {
  let token = localStorage.getItem('token')
  // 判断是否存在token，如果存在的话，则每个http header都加上token
  if (token) {
    config.headers.Authorization = token
    console.log('interceptors config=', config)
  }
  return config
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
