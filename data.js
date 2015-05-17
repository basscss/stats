
var cssnext = require('cssnext');
var brewer = require('colorbrewer');
var pkg = require('./package.json');

var colorscheme = brewer.GnBu[9].reverse();
colorscheme = brewer.Blues[9].reverse();
colorscheme = brewer.Spectral[11].reverse();

module.exports = {
  title: 'Basscss Stats',
  stats: require('./stats.json'),
  author: pkg.author,
  description: pkg.description,
  version: pkg.version,
  css: cssnext([
      '@import "basscss";',
      '@import "basscss-utility-headings";',
      '.lh1 { line-height: 1 }',
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

