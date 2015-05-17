
var React = require('react');
var StackedBar = require('./StackedBar.jsx');

var PropertiesBar = React.createClass({

  render: function() {
    var latest = this.props.stats[this.props.stats.length-1];
    var colors = this.props.colors;
    var data = latest.propertiesBreakdown.map(function(p, i) {

      var color;
      if (i < colors.length) {
        color = colors[i];
      } else {
        color = colors[i%colors.length];
      }
      return {
        label: p.property,
        value: p.total,
        color: color
      }
    });
    return (
      <div className="mb2">
        <h3>Properties Breakdown</h3>
        <StackedBar data={data} />
      </div>
    )
  }

});

module.exports = PropertiesBar;

