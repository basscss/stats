
var React = require('react');
var Ad = require('./Ad.jsx');

var Header = React.createClass({

  render: function() {
    return (
      <header className="py2 border-bottom">
        <div className="sm-flex flex-center">
          <div>
            <a href="/" className="button button-small button-link">Home</a>
            <h1 className="caps m0">{this.props.title}</h1>
          </div>
          <div className="flex-auto" />
          <div className="py2">
            <Ad />
          </div>
        </div>
      </header>
    )
  }

});

module.exports = Header;

