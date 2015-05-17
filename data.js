
var cssnext = require('cssnext');
var colors = require('colors.css');
var pkg = require('./package.json');

module.exports = {
  title: 'Basscss Stats',
  stats: require('./stats.json'),
  author: pkg.author,
  description: pkg.description,
  version: pkg.version,
  css: cssnext([
      '@import "basscss";',
      '@import "basscss-utility-headings";'
    ].join(' '), {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false,
      customProperties: {
        variables: {
          //'font-family': '"Avenir Next", "Helvetica Neue", Helvetica, sans-serif',
          'bold-font-weight': '500',
          'heading-font-weight': '500',
          'button-font-weight': '500',
          'button-font-size': 'var(--h5)',
        }
      }
    }
  }),
  colors: colors,
};

