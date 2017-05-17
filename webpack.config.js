var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: {
   js: APP_DIR +'/ipl.js'
  },
module : {
    loaders : [
    {
      test : /\.js?/,
      include : APP_DIR,
      loader : 'babel-loader',
      exclude: /node_modules/
    },
      { test: /\.csv$/, loader: 'dsv-loader' } 
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  watch: true
};


module.exports = config;
