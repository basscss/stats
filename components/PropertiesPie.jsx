
var _ = require('lodash');
var React = require('react');
var brewer = require('colorbrewer');
var PieChart = require('./PieChart.jsx');

var spectral = brewer.Spectral[11];

var PropertiesPie = React.createClass({

  render: function() {
    var latest = this.props.stats[this.props.stats.length-1];
    var data = latest.propertiesBreakdown.map(function(p, i) {
      var color;
      if (i < spectral.length) {
        color = spectral[i];
      } else {
        color = spectral[i%spectral.length];
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
        <PieChart data={data} />
      </div>
    )
  }

});

module.exports = PropertiesPie;

