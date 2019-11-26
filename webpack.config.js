var path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'client/public'),
    publicPath: '/client/public/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    https: true,
    publicPath: '/client/public/',
    proxy: {
      "/api": {
        target: "http://chhh.herokuapp.com:8080"
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
