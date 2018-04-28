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
export default {
  components: {marked, hljs, 'app-header': header},
  data () {
    return {
      paragraph: '# loading'
    }
  },
  computed: {
    markedFile: function () {
      return marked(this.paragraph, {renderer: new marked.Renderer()})
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
          'Content-Type': 'text/html'
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
<style scoped>
.blog-file{
  margin: 0 12%;
  background: hsl(193, 39%, 75%);
}
</style>
