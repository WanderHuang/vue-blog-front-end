<template>
  <section class="home-page">
    <articlePreview v-for="info in news" :view ="info" :key="info.title"></articlePreview>
  </section>
</template>
<script>
import articlePreview from '@/components/home/Preview'
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
    let len = 10
    while (len--) {
      this.news.push({
        title: '我是一个标题' + len,
        author: 'wander',
        authorAddress: '/person/wander/home',
        date: '2018-04-21',
        location: '/blog/20180421/name_hash',
        tags: [
          {
            tag: '新闻',
            link: '/blog/news/1',
            color: 'theme-1-color-purple'
          },
          {
            tag: '生活',
            link: '/blog/life/1',
            color: 'theme-1-color-purple'
          },
          {
            tag: '科技',
            link: '/blog/tech/1',
            color: 'theme-1-color-blue'
          }
        ],
        content: '----美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚--------' +
        '美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚---' +
        '-----美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚----' +
        '-----美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚----' +
        '-----美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚--------美国轰炸叙利亚----....'
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
