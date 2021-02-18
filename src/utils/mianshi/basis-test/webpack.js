const path = require('path')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    fileName: '[name].js'
  },
  devtool: 'source-map',
  context: proccess.cwd(),
  entry: './src/index.js',
  module: {

  },

}