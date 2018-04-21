<template>
  <div id="main">
    <header class="header theme-1-header-bg">
      <div class="header-container">
        <div class="avatar-container">
          <!-- 应替换成后台获取头像 未登陆的展示LOGIN标签 已登陆的可通过点击这个按钮进入后台-->
          <img alt="avatar" src="../assets/Avatar.jpg" class="avatar" title="点击登陆"/>
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
    <div class="container">
      <router-view/>
    </div>
    <!-- <footer class="footer theme-1-footer-bg">
        <div class="footer-container">
          <ul>
              <li v-for="item in footer" class="footer-item" :key="item.key">{{item.key}}:{{item.value}}</li>
          </ul>
        </div>
    </footer> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'homeIndex',
  data () {
    return {
      header: [],
      footer: []
    }
  },
  created () {
    let $this = this
    axios.get('static/config/base.json')
      .then(response => {
        $this.header = response.data.header
        $this.footer = response.data.footer
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
    console.log('------')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-item, .footer-item {
    display: inline-block;
    margin-right: 20px;
}

/** 布局*/
#main {
  width: 100%;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header, .footer{
  height: 60px;
  width: 100%;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
}
.container{
  margin:100px auto;
}
.footer-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-container {
  height: 100%;
  margin: 0 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul li{
  font-size: 20px;
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
