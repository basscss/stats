
var cssnext = require('cssnext');
var pkg = require('./package.json');

module.exports = {
  title: 'Basscss Stats',
  stats: require('./stats.json'),
  author: pkg.author,
  description: pkg.description,
  version: pkg.version,
  css: cssnext([
      '@import "basscss";'
    ].join(' '), {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false,
      customProperties: {
        variables: {
          'bold-font-weight': '500',
          'heading-font-weight': '500',
          'button-font-weight': '500',
          'button-font-size': 'var(--h5)',
        }
      }
    }
  })
};

