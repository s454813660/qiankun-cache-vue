const { resolve } = require('path')
module.exports = {
  publicPath: '/',
  configureWebpack: {
    resolve: {
      extensions: ['.js','.jsx', '.vue'],
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    output: {
      library: 'child0',
      libraryTarget: 'umd'
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}