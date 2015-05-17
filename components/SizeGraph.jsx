
var React = require('react');
var filesize = require('filesize');
var LineGraph = require('./LineGraph.jsx');

var SizeGraph = React.createClass({

  render: function() {
    var colors = this.props.colors;
    var data = [
      {
        label: 'Minified',
        data: this.props.stats.map(function(s) {
          return s.size;
        }),
        color: colors[0]
      },
      {
        label: 'Gzipped',
        data: this.props.stats.map(function(s) {
          return s.gzipSize;
        }),
        color: colors[1]
      }
    ];
    var latest = this.props.stats[this.props.stats.length-1];
    return (
      <div className="mb2">
        <h3>File Size</h3>
        <LineGraph
          data={data}
          min={0}
          area={true}
          yAxisLabelFormat={filesize} />
      </div>
    )
  }

});

module.exports = SizeGraph;

