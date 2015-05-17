
var _ = require('lodash');
var React = require('react');
var LineGraph = require('./LineGraph.jsx');

var TotalUniqueGraph = React.createClass({

  render: function() {
    var property = this.props.property;
    var colors = this.props.colors;
    var latest = this.props.stats[this.props.stats.length-1];
    var data = [
      {
        label: 'Total',
        data: this.props.stats.map(function(s) {
          var u = s.uniques[property] || false;
          if (!u) { return 0 }
          return u.total;
        }),
        color: colors[0]
      },
      {
        label: 'Unique',
        data: this.props.stats.map(function(s) {
          var u = s.uniques[property] || false;
          if (!u) { return 0 }
          return u.unique;
        }),
        color: colors[1]
      },
    ];
    var total = latest.uniques[property].total;
    var unique = latest.uniques[property].unique;
    var title = _.kebabCase(property).replace(/\-/g, ' ');
    return (
      <div className="py1 border-bottom">
        <h4 className="h5 lh1 m0">{title}</h4>
        <div className="flex mxn1">
          <div className="px1">
            <h4 className="h1 lh1 m0">{total}/{unique}</h4>
          </div>
          <div className="flex-auto px1">
            <LineGraph
              {...this.props}
              data={data}
              xAxis={false}
              yAxisRules={false}
              legend={false}
              height={32}
              min={0} />
          </div>
        </div>
      </div>
    )
  }

});

module.exports = TotalUniqueGraph;

