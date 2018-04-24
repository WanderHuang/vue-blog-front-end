<template>
  <div>
    <div v-html="markedFile" class="blog-file"></div>
  </div>
</template>
<script>
import codeFormatter from '@/lib/marked.js'
import marked from 'marked'
import hljs from 'highlightjs'
import 'highlightjs/styles/googlecode.css'
import {backend} from '../../config'
const URL_BLOG = backend.base + backend.blog + '/'
const render = new marked.Renderer()
render.code = function (code, language, escape) {
  return codeFormatter.getCodeBlock(code)
}
export default {
  components: {marked, hljs},
  data () {
    return {
      paragraph: '# loading'
    }
  },
  computed: {
    markedFile: function () {
      return marked(this.paragraph, {
        renderer: render,
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: true,
        sanitize: true,
        smartLists: true,
        smartypants: true,
        highlight: function (code, language, callback) {
          return hljs.highlightAuto(code).value
        }
      })
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
<style scoped>
.blog-file{
  width: 80%;
  margin: 0 auto;
  background: rgba(196, 238, 239, 0.21176470588235294);
}
.blog-code{
  background: rgba(0, 0, 0, 0.8117647058823529) !important
}
</style>
