// 基础扩展、元素
const extend = (base, ...extensions) => Object.assign({}, base, ...extensions)
const parseColor = ({ h, s, l, a }) => `hsla(${h},${s}%,${l}%,${a})`
const Color = extend.bind(null, { h: 0, s: 100, l: 100, a: 1 })
const Vector = extend.bind(null, { x: 0, y: 0 })
const Particle = extend.bind(null, {
  pos: Vector(),
  vel: Vector(),
  angle: 0,
  speed: 0,
  radius: 0,
  rotation: 0,
  color: Color()
})
const colors = [
  Color({ h: 20, s: 100, l: 50 }),
  Color({ h: 200, l: 50 }),
  Color({ h: 300, l: 50 }),
  Color({ h: 100, l: 40 })
]

// 事件循环
const animationLoop = scope => {
  if (scope.animation) {
    scope.animation(animationLoop.bind(null, scope))
  }

  const { ctx } = scope
  const { canvas } = ctx
  const rc = rough.canvas(canvas)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  scope.particles.map((p, i) => {
    p.pos.y -= p.speed
    if (i % 2) { //位置
      p.pos.x = p.pos.x + Math.sin(p.angle) * 0.2
    } else {
      p.pos.x = p.pos.x - Math.cos(p.angle) * 0.2
    }
    p.angle += 0.01 //角度
    //rough 画圆
    rc.circle(p.pos.x, p.pos.y, p.radius, {
      fill: parseColor(p.color),
      roughness: Math.random() * 1.5,
      hachureGap: p.hachureGap,
      hachureAngle: p.hachureAngle
    })
    //rough 画线
    rc.line(p.pos.x, p.pos.y + p.radius * 1.2, p.pos.x, p.pos.y + p.radius / 2, {
      bowing: Math.random() * 3
    })
    // 跳出canvas之后换位置
    if (p.pos.y + p.radius * 3 < 0) {
      p.pos.y = canvas.height + p.radius * 3
      p.pos.x = Math.random() * (canvas.width - p.radius)
    }
  })
}

const scope = {
  animation: requestAnimationFrame.bind(null), // WEB API : requestAnimationFrame
  ctx: document.createElement('canvas').getContext('2d'), // 画笔
  rotation: 0,
  particles: []
}

~(scope => {
  const { ctx: { canvas } } = scope

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  document.querySelector('#background').appendChild(canvas)

  let particleCount = 25
  while (particleCount--) {
    scope.particles.push(Particle({
      pos: {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
      },
      speed: Math.random(),
      radius: Math.random() * 60 + 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      hachureAngle: Math.random() * 90,
      hachureGap: Math.random() * 8
    }))
  }

  animationLoop(scope)
})(scope)
