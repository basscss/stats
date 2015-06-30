
var cssnext = require('cssnext');
var brewer = require('colorbrewer');
var pkg = require('./package.json');
var basscss = require('basscss/package.json')

var colorscheme = brewer.Spectral[11].reverse();
colorscheme.push(colorscheme.shift());

module.exports = {
  title: 'Stats',
  path: '/stats',
  stats: require('./stats.json'),
  author: pkg.author,
  description: pkg.description,
  version: basscss.version,
  css: cssnext([
      '@import "basscss";',
      '@import "basscss-utility-headings";',
      '@import "basscss-button-link";',
      '@import "app.css";',
    ].join(' '), {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false,
      customProperties: {
        variables: {
          'font-family': '"Avenir Next", "Helvetica Neue", Helvetica, sans-serif',
          'bold-font-weight': '600',
          'heading-font-weight': '600',
          'button-font-weight': '600',
          'button-font-size': 'var(--h5)',
        }
      }
    }
  }),
  colors: colorscheme,
};

