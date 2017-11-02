const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
      context: helpers.root('src'),
  
      entry: {server: './server'},
  
      output: {
          path: helpers.root( "built"),
          filename: '[name].js'
      },
  
      resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
  
      module: {
          rules: [{
                  test: /\.tsx?$/,
                  loaders: [
                      "awesome-typescript-loader"
                  ],
  
              },
              {
                test: /\.js?$/,
                exclude: /__tests__/
  
              },
              {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
  
                    // Could also be write as follow:
                    // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        {
                          loader: 'typed-css-modules-loader'
                        },
                      'sass-loader'
                    ]
                })
          }]
      },
  
      plugins: [
          new ExtractTextPlugin({ filename: '[name].css' })
      ],
      target: 'node',
      node: {
           fs: 'empty',
           __dirname: false,
           __filename: false
      }
  };
  
