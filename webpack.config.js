var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './src'
  ],

  output: {
    path: path.join(__dirname, 'public/assets/js'),
    filename: 'bundle.js',
    publicPath: 'assets/js'
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
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.gif$/,
        loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/,
        loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot)/,
        loader: 'url-loader?limit=1' },
      { test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader' },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style","css!autoprefixer!sass")
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
     new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    contentBase: "./public",
    hot: true,
     historyApiFallback: true
  }

}
