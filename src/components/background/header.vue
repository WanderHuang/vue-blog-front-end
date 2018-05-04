<template>
  <header class="header theme-1-header-bg">
      <div class="header-container">
        <div class="avatar-container">
          <!-- 应替换成后台获取头像 未登陆的展示LOGIN标签 已登陆的可通过点击这个按钮进入后台-->
          <img id="avatar" alt="avatar" :src="avatar" class="avatar" title="点击修改图标"/>
        </div>
        <ul>
            <li v-for="item in header" class="header-item" :key="item.key">
              <router-link :to="item.value" :title="item.key" class="theme-1-nav-color">
                <span> <i :class="item.font"></i>{{item.key}}</span>
              </router-link>
            </li>
        </ul>
      </div>
    </header>
</template>
<script>
import {frontend, backend} from '../../config'
import { mapState } from 'vuex'
export default {
  name: 'app-header',
  data () {
    return {
      header: []
    }
  },
  computed: mapState({
    // 头像根据state.user获取
    avatar: state => {
      let user = JSON.parse(localStorage.getItem('user'))
      let avatar = state.user.avatar ? state.user.avatar : (user ? user.avatar : '')
      return backend.base + 'server/static/image/get?path=' + avatar
    }
  }),
  created () {
    // 前端定义的菜单栏资源
    let $this = this
    $this.$ajax.get('static/config/base.json', {
      baseURL: frontend.base
    })
      .then(response => {
        $this.header = response.data.header
        $this.footer = response.data.footer
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style scoped>
.header{
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.header-container {
  height: 100%;
  margin: 0 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
ul{
  display: flex;
}
ul li{
  margin-right: 20px;
  font-size: 1.2em;
  cursor: pointer;
}
.avatar-container{
  display: flex;
  justify-content: center;
}
.avatar{
  border-radius: 50%; width: 40px; height: 40px; cursor: pointer;
}
</style>
