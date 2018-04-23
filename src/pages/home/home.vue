<template>
  <section class="home-page">
    <articlePreview v-for="info in news" :view ="info" :key="info.title"></articlePreview>
  </section>
</template>
<script>
import articlePreview from '@/components/home/Preview'
import {backend} from '../../config'
const URL_ARTICLES = backend.base + backend.home + '/'
export default {
  data () {
    return {
      news: []
    }
  },
  components: {
    articlePreview
  },
  created () {
    // TODO 封装axios 制作分页栏
    let $this = this
    this.$ajax
      .get('/queryAll', {
        baseURL: URL_ARTICLES + 'articles',
        params: {
          page: 3
        },
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        }
      })
      .then(function (result) {
        console.log(result)
        $this.news = result.data[0].items
      })
      .catch(function (err) {
        console.log(err)
      })
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
