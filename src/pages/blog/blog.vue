<template>
  <div id="blog-detail">
    <app-header></app-header>
    <div v-html="markedFile" class="blog-file"></div>
  </div>
</template>
<script>
import header from '@/components/background/header.vue'
import marked from 'marked'
import hljs from 'highlightjs'
import 'highlightjs/styles/googlecode.css'
import {backend} from '../../config'
const URL_BLOG = backend.base + backend.blog + '/'

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value
  },
  sanitize: true
})
const render = new marked.Renderer()
export default {
  components: {marked, hljs, 'app-header': header},
  data () {
    return {
      paragraph: '# loading'
    }
  },
  computed: {
    markedFile: function () {
      return marked(this.paragraph, {renderer: render})
    }
  },
  created () {
    let $this = this
    $this.$ajax
      .get('/', {
        baseURL: URL_BLOG,
        params: {
          location: $this.$route.params.location
        },
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'text/plain'
        }
      })
      .then(function (result) {
        console.log(result)
        $this.paragraph = result.data
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
#blog-detail{
  .blog-file{
    width: 80%;
    margin: 60px auto;
    background: rgba(196, 238, 239, 0.21176470588235294);
  }
}
</style>
