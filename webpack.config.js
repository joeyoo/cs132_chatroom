var path = require('path');
const REMOTE_URL = process.env.REMOTE_URL || 'http://localhost:3000';

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'client/public'),
    publicPath: '/client/public/',
    filename: 'bundle.js'
  },
  devServer: {
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    publicPath: path.resolve(__dirname, 'client/public'),
    // proxy: {
    //   "/api": {
    //     secure: false,
    //     target: REMOTE_URL,
    //         pathRewrite: {
    //             '^/api' : '/'
    //         }
    //   }
    // }
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
};
