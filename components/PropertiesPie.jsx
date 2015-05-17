
var _ = require('lodash');
var React = require('react');
var PieChart = require('./PieChart.jsx');


var PropertiesPie = React.createClass({

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
        label: _.kebabCase(p.property).replace(/\-/g, ' '),
        value: p.total,
        color: color
      }
    });
    return (
      <div className="mb2">
        <h3>Properties Breakdown</h3>
        <PieChart
          data={data}
          legend={16} />
      </div>
    )
  }

});

module.exports = PropertiesPie;

