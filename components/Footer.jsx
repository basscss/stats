
var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="py3 border-top">
        <div>
          <h3>Tooling</h3>
          <p className="h3">This page is built with <a href="http://cssstats.com" target="_blank">CSS Stats</a>, <a href="https://facebook.github.io/react/" target="_blank">React</a>, <a href="http://webpack.github.io/" target="_blank">webpack</a>, <a href="https://github.com/markdalgleish/static-site-generator-webpack-plugin" target="_blank">static-site-generator-webpack-plugin</a>, <a href="https://github.com/jxnblk/css-mixed-properties" target="_blank">css-mixed-properties</a>, <a href="https://cssnext.github.io/" target="_blank">cssnext</a>, and <a href="https://lodash.com/" target="_blank">lodash</a>.</p>
        </div>
        <div className="flex flex-baseline py2 mxn1">
          <a href="/" className="m1 button button-small button-link">Basscss.com</a>
          <div className="flex-auto" />
          <a href="http://jxnblk.com" className="m1 button button-small button-link">Made by Jxnblk</a>
        </div>
      </footer>
    )
  }

});

module.exports = Footer;

