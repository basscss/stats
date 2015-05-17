
var React = require('react');
var colors = require('colors.css');
var StackedBar = require('./StackedBar.jsx');

var PropertiesBar = React.createClass({

  render: function() {
    var latest = this.props.stats[this.props.stats.length-1];
    var colorArr = Object.keys(colors).map(function(key) {
      return colors[key];
    });
    var data = latest.propertiesBreakdown.map(function(p, i) {
      var color;
      if (i < colorArr.length) {
        color = colorArr[i];
      } else {
        color = colorArr[i%colorArr.length];
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

