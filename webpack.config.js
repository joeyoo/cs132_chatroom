var path = require('path');
const REMOTE_URL = process.env.REMOTE_URL || 'http://localhost:8080/';

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'client/public'),
    publicPath: '/client/public/',
    filename: 'bundle.js'
  },
  devServer: {
    // https: true,
    publicPath: '/client/public/',
    host: '0.0.0.0',
    proxy: {
      "/api": {
        target: "http//localhost:8080",
        secure: false,
                    target: REMOTE_URL,
            pathRewrite: {
                '^/api' : '/'
            }
      }
    }
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
