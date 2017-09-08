const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const helpers = require('./helpers');

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
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    }, {
                        loader: 'typed-css-modules-loader',
                        options: {
                            camelCase: true,
                            outDir: './built/css-modules'
                        },
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        }),
    ]
};
