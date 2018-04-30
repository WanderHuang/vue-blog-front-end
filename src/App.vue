<template>
  <div id="app">
    <router-view/>
    <Bubble></Bubble>
  </div>
</template>

<script>
import Bubble from '@/components/background/Bubble'
export default {
  name: 'App',
  components: {Bubble}
}
</script>

<style>
@import url("./lib/css/font-awesome/css/font-awesome.min.css");
@import url("./lib/css/global.css");
/*引入driver.js 默认样式 lib中做了自定义修改*/
@import url("./lib/css/driver.min.css");
#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
