const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
              "react-hot-loader/patch", // activate HMR for React
              "webpack-dev-server/client?http://localhost:3000",// bundle the client for webpack-dev-server and connect to the provided endpoint
              "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
              './index'
            ],

  devServer: {
      historyApiFallback: true,
      hot: true,
      port: 3000,
      publicPath:  "/"
  },
  
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
