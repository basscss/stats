
var React = require('react');
var colors = require('colors.css');
var LineGraph = require('./LineGraph.jsx');

var RuleSizeGraph = React.createClass({

  render: function() {
    var data = [
      {
        label: 'Average',
        data: this.props.stats.map(function(s) {
          return s.averageRuleSize;
        }),
        color: colors.blue
      },
      {
        label: 'Min',
        data: this.props.stats.map(function(s) {
          return s.minRuleSize;
        }),
        color: colors.green
      },
      {
        label: 'Max',
        data: this.props.stats.map(function(s) {
          return s.maxRuleSize;
        }),
        color: colors.red
      },
    ];
    return (
      <div className="mb2">
        <h3>Ruleset Size</h3>
        <LineGraph
          data={data}
          min={0} />
      </div>
    )
  }

});

module.exports = RuleSizeGraph;

