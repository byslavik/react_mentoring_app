var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: 'index.js',
    context: helpers.root('src'),
    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                loader: 'raw'
            }
        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};
