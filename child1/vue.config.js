const { resolve } = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js','.jsx', '.vue'],
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    output: {
      library: 'child1',
      libraryTarget: 'umd'
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 20000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}