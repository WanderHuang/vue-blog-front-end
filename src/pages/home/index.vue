<template>
  <div id="main">
    <div class="header">
        <ul>
            <li v-for="item in header" class="header-item" :key="item.key">{{item.key}}</li>
        </ul>
    </div>
    <div class="container">
      <div class="content"></div>
    </div>
    <div class="footer">
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
  created: () => {
    let $this = this
    console.log('get base.json....')
    axios.get('static/config/base.json')
      .then(response => {
        $this.header = response.data.header
        $this.footer = response.data.footer
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted: () => {
    console.log('------')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-item, .footer-item {
    display: inline-block;
    color: #428b86
}

/** 布局*/
#main {
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.header {
    height: 100px;
    width: 100%;
    background: #c4fafb;
    position: absolute;
    top: 0;
}
.container{
    width: 100%;
    height: 100%;
}
.footer {
    height: 100px;
    width: 100%;
    background: #c4fafb;
    position: absolute;
    bottom: 0;
}

</style>
