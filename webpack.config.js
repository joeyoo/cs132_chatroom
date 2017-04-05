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
    publicPath: '/client/public/',
    proxy: {
      "/api": {
        target: "http://localhost:8080"
      }
    }
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader','babel-loader']
      }
    ]
  },
};
