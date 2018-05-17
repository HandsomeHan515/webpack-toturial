var path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 1. use: ['style-loader', 'css-loader?minimize'], // querystring 方式
        // 2. require('style-loader!css-loader?minimize!./main.css'); 文件中的引用方式
        // 3.
        use: ['style-loader', {
          loader: 'css-loader', // Object 方式
          options: {
            minimize: true
          }
        }]
      }
    ]
  }
}