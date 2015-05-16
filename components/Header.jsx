
var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <header className="py2 border-bottom">
        <h1 className="m0">{this.props.title}</h1>
      </header>
    )
  }

});

module.exports = Header;

