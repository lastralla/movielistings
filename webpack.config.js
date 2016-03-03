var webpack = require('webpack');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var path = require('path');

var isDevMode = process.env.NODE_ENV !== "production";

var srcFolder = 'src';
var projectRoot = './';

var buildFolder = '.tmp/app/';
var fontFolder = 'fonts/';
var imgFolder = 'images/';

module.exports = {
  context: __dirname + '/' + srcFolder + '/app',
  devtool: isDevMode ? '#source-map' : null,
  entry: [
    projectRoot + 'app.module.js'
  ],

  output: {
    filename: 'app.js',
    sourceMapFilename: 'sourcemap.json',
    path: buildFolder
  },

  watch: isDevMode ? true : false,

  module: {

    preLoaders: [{
    //   test: /\.scss$/,
    //   loader: 'stylelint'
    // }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jscs!jshint'
    }],

    loaders: [{
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'ng-annotate!babel?cacheDirectory&presets[]=es2015'
    }, {
      test: /\.css$/, // Note: this is for font-awesome
      loader: 'style!css' // Note: omitting sourceMap flag, font-awesome does not seem to like it
    }, {
      test: /\.scss$/,
      loader: 'style!css?sourceMap!sass?sourceMap'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&name=' + fontFolder + '[hash].[ext]&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader?name=' + fontFolder + '[hash].[ext]'
        // }, {
        //   test: /\.(jpe?g|png|gif|svg)$/i,
        //   loaders: [
        //     'file?hash=sha512&digest=hex&name=' + imgFolder + '[hash].[ext]',
        //     'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        //   ]
    }, {
      test: /\.html$/,
      loader: 'ngtemplate?relativeTo=' + srcFolder + '/app!html'
    }]
  },

  // stylelint: {
  //   configFile: path.join(__dirname, projectRoot, '.stylelintrc')
  // },

  plugins: isDevMode ? [] : [
    // Production Build
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    })
  ]
};
