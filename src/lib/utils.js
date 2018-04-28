const extend = (base, ...extensions) => Object.assign({}, base, ...extensions)
const parseColor = ({ h, s, l, a }) => `hsla(${h},${s}%,${l}%,${a})`
const Color = extend.bind(null, { h: 0, s: 100, l: 100, a: 1 })
const Vector = extend.bind(null, { x: 0, y: 0 })

export {extend, parseColor, Color, Vector}
