<template>
  <div id="blog">
    <!-- eslint-disable-next-line -->
    <article v-for="(info, index) in news">
      <header class="article-header">
        <h2 class="article-title"><a @click="clicked">{{index}}.{{info.title}}</a></h2>
        <div class="tag-time">
          <time datetime="2018-04-19">2018-04-19</time>
        </div>
      </header>
    </article>
  </div>
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
        title: '----美国轰炸叙利亚----'
      })
    }
  },
  methods: {
    clicked (e) {
      alert('you clicked: ' + e.target.innerHTML)
    }
  }
}
</script>
<style scoped>
#blog{
  margin: 0 15%;
}
article{
  padding: 20px;
  margin-left: 30px;
}
.article-header{
  position: relative;
}
.article-header::before{
    content: " ";
    position: absolute;
    left: 0;
    top: 12px;
    width: 6px;
    height: 6px;
    margin-left: -4px;
    background: #bbb;
    border-radius: 50%;
    border: 1px solid #fff;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: background;
}
.article-title{
  margin-left: 150px;
  font-size: 20px;
}
.article-title a {
  text-decoration: none;
}
.tag-time{
  position: absolute;
  font-size: 20px;
  left: 20px;
  top: 5px;
}
</style>
