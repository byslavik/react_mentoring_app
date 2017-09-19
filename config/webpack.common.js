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
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({ filename: '[name].css' }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        })
    ]
};
