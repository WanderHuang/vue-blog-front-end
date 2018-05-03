<template>
  <div id="main scroll-bar">
    <app-header></app-header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import header from '@/components/background/header.vue'
export default {
  name: 'homeIndex',
  components: {
    'app-header': header
  }
}
</script>

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
.container{
  width: 100%;
  margin:100px auto 30px;
}
</style>
