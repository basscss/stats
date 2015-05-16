
var React = require('react');
var Header = require('./Header.jsx');
var Stats = require('./Stats.jsx');

var Body = React.createClass({

  render: function() {
    return (
      <body className="px3">
        <Header {...this.props} />
        <Stats {...this.props} />
      </body>
    )
  }

});

module.exports = Body;

