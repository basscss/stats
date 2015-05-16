
var React = require('react');

var NumberStat = React.createClass({

  render: function() {
    var styles = {
      number: {
        lineHeight: 1,
        //letterSpacing: '-0.05em',
      },
      label: {
        lineHeight: 1,
      }
    };
    return (
      <div>
        <div className="h1 h1-responsive bold"
          style={styles.number}>
          {this.props.number}
        </div>
        <div className="h5 bold" style={styles.label}>{this.props.label}</div>
      </div>
    )
  }

});

module.exports = NumberStat;

