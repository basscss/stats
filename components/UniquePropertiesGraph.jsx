
var React = require('react');
var LineGraph = require('./LineGraph.jsx');

var UniquePropertiesGraph = React.createClass({

  render: function() {
    var colors = this.props.colors;
    var data = [
      {
        label: 'Margin',
        data: this.props.stats.map(function(s) {
          var sum =
            s.uniques.margin.unique +
            s.uniques.marginTop.unique +
            s.uniques.marginRight.unique +
            s.uniques.marginBottom.unique +
            s.uniques.marginLeft.unique;
          return sum;
        }),
        color: colors[0]
      },
      {
        label: 'Padding',
        data: this.props.stats.map(function(s) {
          var sum = 
            s.uniques.padding.unique +
            s.uniques.paddingTop.unique +
            s.uniques.paddingRight.unique +
            s.uniques.paddingBottom.unique +
            s.uniques.paddingLeft.unique;
          return sum;
        }),
        color: colors[1]
      },
      {
        label: 'Width',
        data: this.props.stats.map(function(s) {
          if (!s.uniques.width) { return 0 }
          return s.uniques.width.unique || 0;
        }),
        color: colors[2]
      },
      {
        label: 'Height',
        data: this.props.stats.map(function(s) {
          if (!s.uniques.height) { return 0 }
          return s.uniques.height.unique || 0;
        }),
        color: colors[3]
      },
      {
        label: 'Color',
        data: this.props.stats.map(function(s) {
          if (!s.uniques.color) { return 0 }
          return s.uniques.color.unique || 0;
        }),
        color: colors[4]
      },
      {
        label: 'Background Color',
        data: this.props.stats.map(function(s) {
          if (!s.uniques.backgroundColor) { return 0 }
          return s.uniques.backgroundColor.unique || 0;
        }),
        color: colors[5]
      },
    ];
    return (
      <div className="mb2">
        <h3>Unique Properties</h3>
        <LineGraph
          data={data}
          min={0} />
      </div>
    )
  }

});

module.exports = UniquePropertiesGraph;

