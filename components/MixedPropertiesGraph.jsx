
var _ = require('lodash');
var React = require('react');
var LineGraph = require('./LineGraph.jsx');

var MixedPropertiesGraph = React.createClass({

  render: function() {
    var data = [
      {
        label: 'Average',
        data: this.props.stats.map(function(s) {
          var scores = s.mix.map(function(m) { return m.score });
          return (_.sum(scores) / scores.length);
        }),
        color: this.props.colors[0]
      },
      //{
      //  label: 'Min',
      //  data: this.props.stats.map(function(s) {
      //    var scores = s.mix.map(function(m) { return m.score });
      //    return _.min(scores);
      //  }),
      //  color: colors.green
      //},
      {
        label: 'Max',
        data: this.props.stats.map(function(s) {
          var scores = s.mix.map(function(m) { return m.score });
          return _.max(scores);
        }),
        color: this.props.colors[1]
      },
    ];
    var latest = this.props.stats[this.props.stats.length-1];
    var floatTwo = function(n) {
      return n.toFixed(2);
    };

    return (
      <div className="mb2">
        <h3>Mixed Properties Score</h3>
        <p>Score based on mixing structure and skin properties in a single ruleset. Calculated as the ratio of structure to skin properties multiplied by the total number of properties in a ruleset. Lower is better.</p>
        <LineGraph
          data={data}
          min={0}
          yAxisLabelFormat={floatTwo} />
      </div>
    )
  }

});

module.exports = MixedPropertiesGraph;

