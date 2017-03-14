var path = require('path');
var webpack = require('webpack');


module.exports = {
  target: "node",
  devtool: 'eval-source-map',
  entry: [
    './server.js'
  ],
  output: {
    path: path.join(__dirname),
    filename: 'server.bundle.js'
  },
  resolve : {
    moduleDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.gif$/,
        loader: 'ignore-loader' },
      { test: /\.jpg$/,
        loader: 'ignore-loader' },
      { test: /\.png$/,
        loader: 'ignore-loader' },
      { test: /\.svg/,
        loader: 'ignore-loader' },
      { test: /\.(woff|woff2|ttf|eot)/,
        loader: 'ignore-loader' },
      { test: /\.css$/,
        loader: 'ignore-loader' },
      { test: /\.scss$/,
        loader: 'ignore-loader' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

}
