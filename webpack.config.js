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
    publicPath: '/client/public/'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
};
