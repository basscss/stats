
var React = require('react');
var Header = require('./Header.jsx');
var Stats = require('./Stats.jsx');
var Footer = require('./Footer.jsx');

var Body = React.createClass({

  render: function() {
    return (
      <body className="px3">
        <Header {...this.props} />
        <Stats {...this.props} />
        <Footer {...this.props} />
        <script src="ga.js"></script>
      </body>
    )
  }

});

module.exports = Body;

