<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
html, body, #main, #app {
    width: 100%;
    height: 100%;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color:cyan
}
ul li {
    list-style-type: none
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
