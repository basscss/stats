
var React = require('react');

var Row = React.createClass({

  render: function() {
    return (
      <div className="clearfix mxn2">
        {this.props.children}
      </div>
    )
  }

});

module.exports = Row;

