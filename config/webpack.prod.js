const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(commonConfig, {

  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({ filename: '[name].css' })
  ]
});
