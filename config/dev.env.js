'use strict'
// https://doc.webpack-china.org/guides/production/  webpack-merge
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
