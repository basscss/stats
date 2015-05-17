
var _ = require('lodash');
var React = require('react');
var colors = require('colors.css');
var LineGraph = require('./LineGraph.jsx');

var TotalUniqueGraph = React.createClass({

  render: function() {
    var property = this.props.property;
    var data = [
      {
        label: 'Total',
        data: this.props.stats.map(function(s) {
          var u = s.uniques[property] || false;
          if (!u) { return 0 }
          return u.total;
        }),
        color: colors.blue
      },
      {
        label: 'Unique',
        data: this.props.stats.map(function(s) {
          var u = s.uniques[property] || false;
          if (!u) { return 0 }
          return u.unique;
        }),
        color: colors.green
      },
    ];
    var title = _.kebabCase(property).replace(/\-/g, ' ');
    return (
      <div className="">
        <h4>{title}</h4>
        <LineGraph
          {...this.props}
          data={data}
          yAxisRules={1}
          legend={false}
          height={48}
          min={0} />
      </div>
    )
  }

});

module.exports = TotalUniqueGraph;

