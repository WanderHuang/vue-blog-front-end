<template>
  <article class="theme-1-article-bg">
    <div class="home-article-container">
      <header>
        <div class="article-header">
          <h1><router-link :to="{name:'blogread', params: { location: view.location }}" class="theme-1-underline-a">{{view.title}}</router-link></h1>
          <div class="article-header-row">
            <span class="article-header-row-item theme-1-tags"><i class="fa fa-calendar"></i>{{view.date}}</span>
            <router-link :to="view.authorAddress" class="theme-1-underline-a"><span class="article-header-row-item"><i class="fa fa-user"></i>{{view.author}}</span></router-link>
          </div>
          <div class="article-header-row">
            <span class="article-header-row-item" v-for="tag in view.tags" :key="tag.tag"><router-link :to="tag.link" :class="'theme-1-underline-a ' + tag.color">{{tag.tag}}</router-link></span>
          </div>
        </div>
      </header>
      <div class="article-content">
        <p>{{view.content}}</p>
      </div>
      <footer>
        <div class="article-footer">
          <span class="article-footer-item"><router-link :to="{name:'blogread', params: { location: view.location }}" class="theme-1-blur-button">阅读全文</router-link></span>
        </div>
      </footer>
    </div>
  </article>
</template>
<script>
export default {
  name: 'articlePreview',
  props: {
    view: {
      type: Object,
      default: () => {
        return {
          title: '默认标题',
          tags: [
            {
              tag: 'some',
              link: 'home'
            }
          ]
        }
      }
    }
  }
}
</script>
<style>
.home-article-container{
    padding: 40px;
    margin-top: 10px;
}
.article-header{
  width: 100%;
  height: 100%;
  text-align: center;
}
.article-header-row{
  margin: 5px 0;
}
.article-header-row-item {
  padding: 0 5px;
}
.article-content {
  margin: 20px 0;
}
.article-footer{
  display: flex;
  justify-content: center;
}
</style>
