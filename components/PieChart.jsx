
var _ = require('lodash');
var React = require('react');

var PieChart = React.createClass({

  getDefaultProps: function() {
    return {
      data: [],
      width: 512,
      threshold: 1,
      legend: 8,
      fontSize: '12px',
    }
  },

  getInitialState: function() {
    var total = 0;
    this.props.data.forEach(function(d) {
      total = total + d.value;
    });
    return {
      total: total
    }
  },

  renderLegendItem: function(item, i) {
    if (i > this.props.legend - 1) {
      return false;
    }
    var percentage = (item.percentage*100).toFixed(2);
    var styles = {
      container: {
        fontSize: this.props.fontSize,
      },
      chip: {
        width: '1em',
        height: '1em',
        verticalAlign: 'middle',
        backgroundColor: item.color,
      },
      label: {
        verticalAlign: 'middle',
      }
    };
    return (
      <div key={'legend-item-'+i}
        className="bold"
        style={styles.container}>
        <div className="inline-block mr1" style={styles.chip} />
        <span style={styles.label}>{item.label} {percentage}%</span>
      </div>
    )
  },

  renderPath: function(path, i) {
    var r = this.props.width / 2;
    var x1 = r + r*Math.cos(Math.PI*path.start/180);
    var y1 = r + r*Math.sin(Math.PI*path.start/180);
    var x2 = r + r*Math.cos(Math.PI*path.end/180);
    var y2 = r + r*Math.sin(Math.PI*path.end/180);
    var pathData = [
      'M', r, r,
      'L', x1, y1,
      'A', r, r, '0 0 1', x2, y2,
      'z'
    ].join(' ');
    return (
      <path key={'path-'+i} d={pathData} fill={path.color} />
    )
  },

  render: function() {
    var width = this.props.width;
    var height = width;
    var radius = width / 2;
    var start = -90;
    var total = this.state.total;
    var other = {
      label: 'Other',
      percentage: 0,
      value: 0,
      start: 0,
      end: 0,
    };
    var threshold = this.props.threshold;

    var data = this.props.data
      .map(function(d) {
        d.percentage = d.value / total;
        var n = d.percentage * 360;
        d.start = start;
        d.end = n + start;
        start = start+ n;
        return d;
      })
      .filter(function(d) {
        if (d.percentage * 100 < threshold) {
          other.value = other.value + d.value;
          other.percentage = other.percentage + d.percentage;
          if (!other.color) {
            other.color = d.color;
          }
          if (!other.start) {
            other.start = d.start;
          }
          other.end = d.end;
          return false;
        } else {
          return true;
        }
      });
    data.push(other);

    var styles = {
      svg: {
        width: '100%',
        height: 'auto',
        maxHeight: '100%',
        display: 'block',
      },
    };
    var viewBox = [0, 0, width, height].join(' ');

    return (
      <div className="flex mxn2">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className="px2"
          viewBox={viewBox}
          width={width}
          height={height}
          style={styles.svg}>
          {data.map(this.renderPath)}
        </svg>
        <div className="px2">
          {data.map(this.renderLegendItem)}
        </div>
      </div>
    )
  }

});


module.exports = PieChart;

