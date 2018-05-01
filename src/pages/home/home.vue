<template>
  <section class="home-page">
    <articlePreview v-for="(info, index) in pageArticle.docs" :view ="info" :key="info.title + index"></articlePreview>
    <pagination :page="pageArticle.page" @queryPage="queryPage" ref="pagination"></pagination>
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
      pageArticle: {
        page: 1
      },
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
          if (result.data.docs.length === 0) {
            $this.$refs.pagination.directAfter(false)
          } else {
            $this.pageArticle = result.data
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
