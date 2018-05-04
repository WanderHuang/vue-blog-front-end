<template>
  <wall :matrix="heart"></wall>
</template>
<script>
import {backend} from '../../config'
import wall from '@/components/background/wall'
export default {
  components: {wall},
  data () {
    return {
      // TODO 矩阵应提供多个，供选择 矩阵都应支持持久化
      heart: [
        [0, 1, 1, 0, 0, 1, 1, 0],
        [1, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0]
      ]
    }
  },
  created () {
    // TODO 上线后应根据用户个人信息去后台获取当前照片
    for (let i = 0, row = this.heart.length; i < row; i++) {
      for (let j = 0, col = this.heart[0].length; j < col; j++) {
        let val = this.heart[i][j]
        if (val === 1) {
          this.heart[i][j] = {
            src: backend.base + 'server/static/image/wall?path=' + ((Math.random() * 2) | 0) + '.jpg',
            alt: '图片未加载'
          }
        }
      }
    }
  }
}
</script>
