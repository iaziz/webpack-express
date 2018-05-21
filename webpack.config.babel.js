const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
	exclude: /node_modules|packages/,
	test: /\.js$/,
	use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(), 
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
