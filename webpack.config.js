var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(__dirname);

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        // 1. use: ['style-loader', 'css-loader?minimize'], // querystring 方式
        // 2. require('style-loader!css-loader?minimize!./main.css'); 文件中的引用方式
        // 3.
        use: ['style-loader', {
          loader: 'css-loader', // Object 方式
          options: {
            minimize: true
          }
        }, 'postcss-loader', 'sass-loader'],
        exclude: path.resolve(__dirname, 'node_modules'),
      }
    ]
  },

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
  plugins: [
    new ExtractTextPlugin({
      filename: `[name]_[contenthash:8].css`
    })
  ],
  devtool: 'source-map',
  devServer: {
    port: 8083,
    inline: true,
    hot: true,
    historyApiFallback: true
  }
}