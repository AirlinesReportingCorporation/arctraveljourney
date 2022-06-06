const path = require('path');
const MiniCssExtractPlugin = require("./node_modules/mini-css-extract-plugin");
const webpack = require('./node_modules/webpack');
const UglifyJsPlugin = require('./node_modules/uglifyjs-webpack-plugin');
const CompressionPlugin = require('./node_modules/compression-webpack-plugin');

const extractSass = new MiniCssExtractPlugin({
  filename: "[name].min.css",
  chunkFilename: "[id].css"
});

module.exports = [{
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './src/index.jsx')
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    overlay: true
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?url=false',
          {
            loader: 'sass-loader',
            options: {
                outputStyle: 'compressed'
            }
          },
        ],
      }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      'react-dom': '@hot-loader/react-dom',
      'react-spring$': 'react-spring/web.cjs',
      'react-spring/renderprops$': 'react-spring/renderprops.cjs'
    },
    extensions: ['*', '.js', '.jsx'],

  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    extractSass
  ]
}];