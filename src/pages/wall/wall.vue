<template>
  <div class="wall-main">
    <img v-for="(pic, index) in pics" :src="pic.src" :alt="pic.alt" :key="'img' + index" class="wall-pic"/>
  </div>
</template>
<script>
import {backend} from '../../config'
export default {
  data () {
    return {
      // TODO 这一数组结构可由后端根据数据库情况返回 数据结构待定
      pics: [
        {
          src: backend.base + 'server/static/image/wall?path=0.jpg',
          alt: '图片一未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=1.jpg',
          alt: '图片二未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=0.jpg',
          alt: '图片一未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=1.jpg',
          alt: '图片二未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=0.jpg',
          alt: '图片一未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=1.jpg',
          alt: '图片二未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=0.jpg',
          alt: '图片一未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=1.jpg',
          alt: '图片二未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=0.jpg',
          alt: '图片一未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=1.jpg',
          alt: '图片二未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=0.jpg',
          alt: '图片一未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=1.jpg',
          alt: '图片二未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=0.jpg',
          alt: '图片一未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=1.jpg',
          alt: '图片二未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=0.jpg',
          alt: '图片一未加载'
        },
        {
          src: backend.base + 'server/static/image/wall?path=1.jpg',
          alt: '图片二未加载'
        }
      ]
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.wall-page {
  margin: 0 12%;
}
.wall-pic{
  margin: 0 20px;
}
</style>
