
var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <header className="py2">
        <h1>{this.props.title}</h1>
      </header>
    )
  }

});

module.exports = Header;

