var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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

  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ExtractTextPlugin.extract({ // webpack 4 之后不再支持 css
  //         use: ['css-loader']
  //       })
  //     }
  //   ]
  // },
  // plugins: [
  //   new ExtractTextPlugin({
  //     filename: `[name]_[contenthash:8].css`
  //   })
  // ]
}