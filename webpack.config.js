var path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'client/public'),
    publicPath: '/client/public/',
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/client/public/'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loaders: ['react-hot-loader','babel-loader']
      }
    ]
  },
};
