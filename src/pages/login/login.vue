<template>
  <div class="login-page">
    <header>
      <p>{{welcome}}</p>
      <p>{{info}}</p>
    </header>
    <section>
      <div class="form">
        <ul>
          <li><i class="fa fa-user"></i><input type="text" placeholder="用户名" v-model="user.name"></li>
          <li><i class="fa fa-key"></i><input type="password" placeholder="密码" v-model="user.password"></li>
        </ul>
      </div>
      <div class="action">
        <ul>
          <li><i class="fa fa-sign-in" title="登录" @click="login"></i></li>
          <!-- 注册暂不开放 TODO 增加注册功能-->
          <!-- <li><i class="fa fa-pencil-square-o" title="注册"></i></li> -->
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import Driver from 'driver.js'
const driver = new Driver()
export default {
  data () {
    return {
      welcome: 'Welcome to login',
      info: '请使用最新chrome浏览器以获得最佳的使用体验',
      user: {}
    }
  },
  methods: {
    // TODO 请求后台数据 是否匹配
    validate (el) {
      driver.highlight({
        element: el,
        popover: {
          title: '已经是第一页拉！'
        }
      })
    },
    login () {
      this.$router.push({
        path: 'login',
        query: {
          name: this.user.name,
          password: this.user.password
        }
      })
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
/*引入driver.js 默认样式 lib中做了自定义修改*/
@import "../../lib/css/driver.min.css";
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100px;
    p{
      text-shadow: 0 0 1px #9a90ed;
      color: #557de7;
    }
  }
  section {
    height: 100%;
    width: 100%;
    .form {
      i{
        font-size: 60px;
        padding: 3px;
        width: 60px;
        height: 60px;
        text-align: center;
        color: #2581e2bd;
        text-shadow: 0 0 5px #ff00fd8c;
      }
      input {
        width: 220px;
        background: #c6ecfb;
        display: inline-block;
        height: 30px;
        border-radius: 5px;
        margin: auto 3px;
        position: relative;
        top: -7px;
      }
    }
    .action {
      ul {
        display: flex;
        flex-direction: row-reverse;
        li {
          font-size: 40px;
          color: #567be8;
          flex-basis: 35%;
          cursor: pointer;
        }
        li:hover {
          color: rgb(95, 119, 189);
        }
      }
    }
  }
}
</style>
