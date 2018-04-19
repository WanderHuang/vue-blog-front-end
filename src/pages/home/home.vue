<template>
  <section class="home-page">
   <!-- eslint-disable-next-line -->
    <article v-for="info in news">
      <div class="article-container">
        <header>News: title here</header>
        <div>
          <template v-for="x in 100"> {{x}}.{{info.content}}</template>
        </div>
        <footer>News: footer</footer>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  data () {
    return {
      news: []
    }
  },
  created () {
    let len = 10
    while (len--) {
      this.news.push({
        content: '----美国轰炸叙利亚----'
      })
    }
  }
}
</script>
<style scoped>
.home-page{
  margin: 0 12%
}
.spare-content {
  height: 60px;
  width: 100%;
}
.article-container {
  padding: 40px
}
</style>
