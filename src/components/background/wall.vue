<template>
  <div class="wall-page" id="wall-page-plugin">
    <div v-for="(row, i) in arr" :key="'row' + i">
      <ul>
        <li v-for="(pic, j) in row" :class="pic ? 'cell-pic' : 'cell-empty'" :key="'pic' + i + j" :id="'pic' + i + j">
          <img :src="pic.src" :alt="pic.alt" v-if="pic" @mouseover="showDetail($event)" :value="'pic' + i + j">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Driver from 'driver.js'
const driver = new Driver()
export default {
  props: {
    matrix: {
      type: Array,
      default: function () {
        return [[]]
      }
    }
  },
  computed: {
    arr () {
      return this.matrix
    }
  },
  methods: {
    showDetail (e) {
      const target = e.target
      if (target.className !== 'cell-empty') {
        const src = target.getAttribute('src')
        driver.highlight({
          element: '#' + target.getAttribute('value'),
          popover: {
            title: '<img src="' + src + '" style="width: 100%">'
          }
        })
        // driver元素的mouseout 因此元素会覆盖原图 所以在此元素上做时间检测
        document.getElementById('driver-highlighted-element-stage').addEventListener('mouseout', function () {
          document.getElementById('wall-page-plugin').click()
        })
      }
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.wall-page {
  width: 100%;
  height: 100%;
  margin: 10% auto;
  div {
    margin: 0 10%;
    display: flex;
    justify-content: center;
  }
  .cell-pic {
    width: 5.5em;
    height: 5.5em;
  }
  .cell-empty {
    width: 5.5em;
    height: 5.5em;
    opacity: 0;
  }
  ul {
    display: flex;
    flex-direction: row;
    li {
      position: relative;
      margin-right: 1em;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
