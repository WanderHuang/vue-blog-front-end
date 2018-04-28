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
#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
