
var React = require('react');
var LineGraph = require('./LineGraph.jsx');

var RulesGraph = React.createClass({

  render: function() {
    var colors = this.props.colors;
    var data = [
      {
        label: 'Rules',
        data: this.props.stats.map(function(s) {
          return s.rules;
        }),
        color: colors[0]
      },
      {
        label: 'Selectors',
        data: this.props.stats.map(function(s) {
          return s.selectors;
        }),
        color: colors[1]
      },
      {
        label: 'Declarations',
        data: this.props.stats.map(function(s) {
          return s.declarations;
        }),
        color: colors[2]
      },
      {
        label: 'Properties',
        data: this.props.stats.map(function(s) {
          return s.properties.length;
        }),
        color: colors[3]
      },
    ];
    return (
      <div className="mb2">
        <h3>Rules, Selectors, and Properties</h3>
        <LineGraph
          data={data}
          min={0} />
      </div>
    )
  }

});

module.exports = RulesGraph;

