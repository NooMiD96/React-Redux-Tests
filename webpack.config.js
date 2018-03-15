const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  stats: {
    modules: false
  },

  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    path.resolve(__dirname, './ClientApp/index.js')
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, include: /ClientApp/, use: 'babel-loader' },
      { test: /\.css$/, include: /ClientApp/, use: 'css-loader' }
    ]
  },

  output: {
    path: __dirname + '/../public',
    chunkFilename: '[name].bundle.js',
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './Server/index.html',
      inject: "body"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],

  devtool: 'inline-source-map',

  performance: { hints: false }
}