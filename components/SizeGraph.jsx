
var React = require('react');
var colors = require('colors.css');
var filesize = require('filesize');
var LineGraph = require('./LineGraph.jsx');

var SizeGraph = React.createClass({

  render: function() {
    var data = [
      {
        label: 'Size',
        data: this.props.stats.map(function(s) {
          return s.size;
        }),
        color: colors.blue
      },
      {
        label: 'Gzip Size',
        data: this.props.stats.map(function(s) {
          return s.gzipSize;
        }),
        color: colors.green
      }
    ];
    return (
      <div className="mb2">
        <h2>File Size</h2>
        <LineGraph
          data={data}
          min={0}
          yAxisLabelFormat={filesize} />
      </div>
    )
  }

});

module.exports = SizeGraph;

