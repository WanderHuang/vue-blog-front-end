<template>
  <canvas id="backgroundBubble"></canvas>
</template>
<script>
import {rough} from '@/lib/rough/rough.min'
import * as Utils from '@/lib/utils'
const COUNT = 30

const Particle = Utils.extend.bind(null, {
  pos: Utils.Vector(),
  vel: Utils.Vector(),
  angle: 0,
  speed: 0,
  radius: 0,
  rotation: 0,
  color: Utils.Color()
})
const colors = [
  Utils.Color({ h: 20, s: 100, l: 50 }),
  Utils.Color({ h: 200, l: 50 }),
  Utils.Color({ h: 300, l: 50 }),
  Utils.Color({ h: 100, l: 40 })
]

export default {
  data () {
    return {
      canvas: {},
      ctx: {},
      rc: {},
      particles: [],
      hasBackground: false
    }
  },
  beforeMount () {
    if (document.querySelector('#backgroundBubble')) {
      this.hasBackground = true
    }
  },
  mounted () {
    if (!this.hasBackground) {
      this.beforeInit()
      this.init()
      this.run()
    } else {
      console.log('Already have a canvas')
    }
  },
  methods: {
    beforeInit () {
      const dom = document.querySelector('#backgroundBubble')
      dom.setAttribute('width', window.innerWidth)
      dom.setAttribute('height', window.innerHeight)
      this.ctx = dom.getContext('2d')
      this.canvas = this.ctx.canvas
      this.rc = rough.canvas(this.canvas)
    },
    init () {
      let count = COUNT
      while (count--) {
        this.particles.push(Particle({
          pos: {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height
          },
          speed: Math.random() + 0.1,
          radius: Math.random() * 60 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          hachureAngle: Math.random() * 90,
          hachureGap: Math.random() * 8
        }))
      }
    },
    move () {
      let $this = this
      this.particles.map((p, i) => {
        p.pos.y -= p.speed
        // 位置
        if (i % 2) {
          p.pos.x = p.pos.x + Math.sin(p.angle) * 0.2
        } else {
          p.pos.x = p.pos.x - Math.cos(p.angle) * 0.2
        }
        // 角度
        p.angle += 0.01
        // rough 画圆
        $this.rc.circle(p.pos.x, p.pos.y, p.radius, {
          fill: Utils.parseColor(p.color),
          roughness: Math.random() * 1.5,
          hachureGap: p.hachureGap,
          hachureAngle: p.hachureAngle
        })
        // rough 画线
        $this.rc.line(p.pos.x, p.pos.y + p.radius * 1.2, p.pos.x, p.pos.y + p.radius / 2, {
          bowing: Math.random() * 3
        })
        // 跳出canvas之后换位置
        if (p.pos.y + p.radius * 3 < 0) {
          p.pos.y = $this.canvas.height + p.radius * 3
          p.pos.x = Math.random() * ($this.canvas.width - p.radius)
        }
      })
    },
    step () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.move()
    },
    run () {
      let $this = this
      setInterval(function () {
        $this.step()
      }, 20)
    }
  }
}
</script>
<style>
#backgroundBubble {
  background: lightblue;
  position: fixed;
  top: 0;
  z-index: -500;
  opacity: 0.75;
}
</style>
