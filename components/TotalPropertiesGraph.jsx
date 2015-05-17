
var React = require('react');
var LineGraph = require('./LineGraph.jsx');

var TotalPropertiesGraph = React.createClass({

  render: function() {
    var colors = this.props.colors;
    var data = [
      {
        label: 'Margin',
        data: this.props.stats.map(function(s) {
          var sum =
            s.uniques.margin.total +
            s.uniques.marginTop.total +
            s.uniques.marginRight.total +
            s.uniques.marginBottom.total +
            s.uniques.marginLeft.total;
          return sum;
        }),
        color: colors[0]
      },
      {
        label: 'Padding',
        data: this.props.stats.map(function(s) {
          var sum = 
            s.uniques.padding.total +
            s.uniques.paddingTop.total +
            s.uniques.paddingRight.total +
            s.uniques.paddingBottom.total +
            s.uniques.paddingLeft.total;
          return sum;
        }),
        color: colors[1]
      },
      {
        label: 'Width',
        data: this.props.stats.map(function(s) {
          if (!s.uniques.width) { return 0 }
          return s.uniques.width.total || 0;
        }),
        color: colors[2]
      },
      {
        label: 'Height',
        data: this.props.stats.map(function(s) {
          if (!s.uniques.height) { return 0 }
          return s.uniques.height.total || 0;
        }),
        color: colors[3]
      },
      {
        label: 'Color',
        data: this.props.stats.map(function(s) {
          if (!s.uniques.color) { return 0 }
          return s.uniques.color.total || 0;
        }),
        color: colors[4]
      },
      {
        label: 'Background Color',
        data: this.props.stats.map(function(s) {
          if (!s.uniques.backgroundColor) { return 0 }
          return s.uniques.backgroundColor.total || 0;
        }),
        color: colors[5]
      },
    ];
    return (
      <div className="mb2">
        <h3>Total Properties</h3>
        <LineGraph
          data={data}
          min={0} />
      </div>
    )
  }

});

module.exports = TotalPropertiesGraph;

