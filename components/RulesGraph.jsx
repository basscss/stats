
var React = require('react');
var colors = require('colors.css');
var LineGraph = require('./LineGraph.jsx');

var RulesGraph = React.createClass({

  render: function() {
    var data = [
      {
        label: 'Rules',
        data: this.props.stats.map(function(s) {
          return s.rules;
        }),
        color: colors.blue
      },
      {
        label: 'Selectors',
        data: this.props.stats.map(function(s) {
          return s.selectors;
        }),
        color: colors.green
      },
      {
        label: 'Declarations',
        data: this.props.stats.map(function(s) {
          return s.declarations;
        }),
        color: colors.maroon
      },
      {
        label: 'Properties',
        data: this.props.stats.map(function(s) {
          return s.properties.length;
        }),
        color: colors.purple
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

