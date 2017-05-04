const webpack = require('webpack');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

const production = true;

// var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: __dirname + '/src/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });
var plugins = [];
// var plugins = [HTMLWebpackPluginConfig];
var outputFilename = 'js/transformed.js';
var outputPath = __dirname + '/public';

if (production) {
  // HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  //   template: __dirname + '/src/index.html',
  //   filename: '../index.html',
  //   inject: 'body'
  // });
  plugins = [
    // HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ];
  outputFilename = 'js/transformed-mini.js';
}

module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    filename: outputFilename,
    path: outputPath
  },
  plugins: plugins
};
