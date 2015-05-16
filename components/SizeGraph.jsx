
var React = require('react');
var colors = require('colors.css');
var filesize = require('filesize');
var LineGraph = require('./LineGraph.jsx');

var SizeGraph = React.createClass({

  render: function() {
    var data = [
      {
        label: 'Minified',
        data: this.props.stats.map(function(s) {
          return s.size;
        }),
        color: colors.blue
      },
      {
        label: 'Gzipped',
        data: this.props.stats.map(function(s) {
          return s.gzipSize;
        }),
        color: colors.green
      }
    ];
    var latest = this.props.stats[this.props.stats.length-1];
    return (
      <div className="mb2">
        <h3>File Size</h3>
        <LineGraph
          data={data}
          min={0}
          yAxisLabelFormat={filesize} />
      </div>
    )
  }

});

module.exports = SizeGraph;

