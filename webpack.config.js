var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var paths = [ '/' ];

var data = require('./data');

module.exports = {

  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'css-loader!cssnext-loader' }
    ]
  },

  cssnext: {
    compress: true
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', paths, data)
  ]

};

