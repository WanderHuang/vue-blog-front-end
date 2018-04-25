<template>
  <section class="home-page">
    <articlePreview v-for="(info, index) in news" :view ="info" :key="info.title + index"></articlePreview>
    <pagination :page="page" @queryPage="queryPage" ref="pagination"></pagination>
  </section>
</template>
<script>
import articlePreview from '@/components/home/Preview'
import pagination from '@/components/home/pagination'
import {backend} from '../../config'
const URL_ARTICLES = backend.base + backend.home + '/'
export default {
  data () {
    return {
      news: [],
      page: 0,
      err: false
    }
  },
  components: {
    articlePreview, pagination
  },
  created () {
    this.requestPage(1)
  },
  methods: {
    requestPage (page) {
      // TODO 封装axios 制作分页栏
      let $this = this
      this.$ajax
        .get('/queryAll', {
          baseURL: URL_ARTICLES + 'articles',
          params: {
            page: page
          },
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
          }
        })
        .then(function (result) {
          console.log('receive result: ' + result)
          try {
            $this.news = result.data[0].items
            $this.page = result.data[0].page
          } catch (err) {
            $this.err = true
            $this.$refs.pagination.directAfter(false)
            console.log(result)
          }
        })
        .catch(function (err) {
          $this.err = true
          $this.$refs.pagination.directAfter(false)
          console.log(err)
        })
    },
    queryPage (page) {
      this.requestPage(page)
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
