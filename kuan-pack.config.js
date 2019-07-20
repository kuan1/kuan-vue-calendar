const { resolve } = require('./build/utils.js')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: resolve('gh'),
  publicPath: isDev ? '' : '/kuan-vue-calendar/'
}
