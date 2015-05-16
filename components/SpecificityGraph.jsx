
var React = require('react');
var colors = require('colors.css');
var LineGraph = require('./LineGraph.jsx');

var SpecificityGraph = React.createClass({

  render: function() {
    var data = [
      {
        label: 'Average',
        data: this.props.stats.map(function(s) {
          return s.averageSpecificity;
        }),
        color: colors.blue
      },
      {
        label: 'Min',
        data: this.props.stats.map(function(s) {
          return s.minSpecificity;
        }),
        color: colors.green
      },
      {
        label: 'Max',
        data: this.props.stats.map(function(s) {
          return s.maxSpecificity;
        }),
        color: colors.red
      },
    ];
    return (
      <div className="mb2">
        <h3>Specificity</h3>
        <LineGraph
          data={data}
          min={0} />
      </div>
    )
  }

});

module.exports = SpecificityGraph;

