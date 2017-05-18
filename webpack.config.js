var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');


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
  plugins: [
  new SWPrecacheWebpackPlugin(
  {
    cacheId: 'iplDashboard',
    filename: 'serviceworker.js',
    filepath: 'app/serviceworker.js',
    maximumFileSizeToCacheInBytes: 4194304,
    runtimeCaching: [{
      handler: 'cacheFirst',
      urlPattern: /^https:\/\/dev.kraftly\.com\/.*/,
    }],
    navigateFallback: '/app-shell',
    staticFileGlobs:  [
    'build/bundle.js'
        ],
    stripPrefix:'build/'
  }
  ),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  watch: true
};


module.exports = config;
