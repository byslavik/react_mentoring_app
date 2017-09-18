const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: helpers.root('src'),

    entry: './index',

    output: {
        path: helpers.root( "built"),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },


    module: {
        rules: [{
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader"
                ],

            },
            {
              test: /\.s?css$/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                      {
                          loader: 'css-loader',
                          options: {
                              modules: true,
                              camelCase: true,
                              importLoaders: 1,
                              localIdentName: '[name]__[local]___[hash:base64:5]'
                          }
                      },
                      {
                        loader: 'typed-css-modules-loader',
                        options: {
                            camelCase: true,
                            outDir: './built/css-modules'
                        }
                      },
                      'sass-loader'
                  ]
              })
          },
        ]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({ filename: '[name].css' }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        })
    ]
};
