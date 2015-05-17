
var React = require('react');
var LineGraph = require('./LineGraph.jsx');

var SpecificityGraph = React.createClass({

  render: function() {
    var colors = this.props.colors;
    var data = [
      {
        label: 'Average',
        data: this.props.stats.map(function(s) {
          return s.averageSpecificity;
        }),
        color: colors[0]
      },
      {
        label: 'Min',
        data: this.props.stats.map(function(s) {
          return s.minSpecificity;
        }),
        color: colors[1]
      },
      {
        label: 'Max',
        data: this.props.stats.map(function(s) {
          return s.maxSpecificity;
        }),
        color: colors[2]
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

