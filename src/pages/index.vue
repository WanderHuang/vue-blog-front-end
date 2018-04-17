<template>
  <div id="main">
    <div class="header center-container ">
        <ul>
            <li v-for="item in header" class="header-item" :key="item.key"><router-link :to="item.value">{{item.key}}</router-link></li>
        </ul>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <div class="footer center-container">
        <ul>
            <li v-for="item in footer" class="footer-item" :key="item.key">{{item.key}}:{{item.value}}</li>
        </ul>
    </div>
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
    font-family: 'Times New Roman', Times, serif;
}

/** 布局*/
#main {
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.header {
    height: 100px;
    width: 100%;
}
.container{
    width: 100%;
    height: 100%;
    overflow: hidden; /* BFC */
}
.footer {
    height: 100px;
    width: 100%;
}
.center-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
ul li:hover {
  color:#c4fafb;
  cursor: pointer;
}

</style>
