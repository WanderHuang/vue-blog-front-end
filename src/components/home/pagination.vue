<template>
  <div class="pagination">
    <div class="page-pre" @click="directPre"></div>
    <div class="page-current">{{page}}</div>
    <div class="page-after" @click="directAfter"></div>
  </div>
</template>
<script>
// driverjs 浮动窗口
import Driver from 'driver.js'
const driver = new Driver()
export default {
  name: 'pagination',
  props: {
    page: {
      type: Number | String,
      default: () => {
        return 0
      }
    },
    err: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  watch: {
    err (newVal, oldVal) {
      if (newVal) {
        driver.highlight({
          element: '.pagination',
          popover: {
            title: '查询出错'
          }
        })
      }
    }
  },
  computed: {
    $page () {
      return Number(this.page)
    }
  },
  methods: {
    directPre () {
      if (this.$page <= 1) {
        driver.highlight({
          element: '.page-pre',
          popover: {
            title: '已经是第一页拉！'
          }
        })
      } else {
        this.$emit('queryPage', this.$page - 1)
      }
    },
    directAfter (err) {
      if (err === false) {
        driver.highlight({
          element: '.page-after',
          popover: {
            title: '已经是最后一页拉！'
          }
        })
      } else {
        this.$emit('queryPage', this.$page + 1)
      }
    }
  }
}
</script>
<style>
/** 主页中需要引入driver.js的样式表*/
</style>
