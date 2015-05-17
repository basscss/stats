
var _ = require('lodash');
var React = require('react');


var LineGraph = React.createClass({

  getDefaultProps: function() {
    return {
      data: [],
      height: 256,
      min: false,
      max: false,
      legend: true,
      xAxis: true,
      xAxisRules: false,
      xAxisLabels: true,
      xAxisLabelFormat: false,
      yAxis: false,
      yAxisRules: 4,
      yAxisLabels: true,
      yAxisLabelFormat: false,
      area: false,
      areaOpacity: 0.125,
      fontSize: '12px',
    }
  },

  getInitialState: function() {
    var min;
    var max;
    if (typeof this.props.min === 'number') {
      min = this.props.min;
    } else {
      min = _.min(this.props.data.map(function(d) { return _.min(d.data) }));
    }
    if (typeof this.props.max === 'number') {
      max = this.props.max;
    } else {
      max = _.max(this.props.data.map(function(d) { return _.max(d.data) }));
    }
    return {
      min: min,
      max: max
    }
  },

  renderLine: function(line, i) {
    return (
      <LineGraph.Path
        key={'line-'+i}
        {...this.props}
        {...this.state}
        {...line} />
    )
  },

  render: function() {
    // check for equal length arrays
    var styles = {
      container: {
      },
      inner: {
        position: 'relative',
        boxSizing: 'border-box',
        height: this.props.height,
      },
      lines: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1,
      },
      axes: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 2,
      },
    };

    var xAxis = this.props.xAxis ? <LineGraph.XAxis /> : false;
    var yAxis = this.props.yAxis ? <LineGraph.YAxis /> : false;
    var yAxisRules = this.props.yAxisRules ? <LineGraph.YAxisRules rules={this.props.yAxisRules} /> : false;
    var yAxisLabels = this.props.yAxisLabels ? <LineGraph.YAxisLabels {...this.props} {...this.state} /> : false;
    var legend = this.props.legend ? <LineGraph.Legend {...this.props} /> : false;

    return (
      <div style={styles.container}>
        <div style={styles.inner}>
          <div style={styles.lines}>
            {this.props.data.map(this.renderLine)}
          </div>
          <div style={styles.axes}>
            {xAxis}
            {yAxis}
            {yAxisRules}
            {yAxisLabels}
          </div>
        </div>
        {legend}
      </div>
    )
  }

});


LineGraph.Legend = React.createClass({

  renderItem: function(item, i) {
    var styles = {
      span: {
        verticalAlign: 'middle',
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
      <span key={'legend-item-'+i}
        style={styles.span}
        className="inline-block mr2">
        <div className="inline-block mr1" style={styles.chip} />
        <span style={styles.label}>{item.label}</span>
      </span>
    )
  },

  render: function() {
    var style = {
      fontSize: this.props.fontSize,
    };
    return (
      <div style={style} className="py1">
        {this.props.data.map(this.renderItem)}
      </div>
    )
  }
});


LineGraph.XAxis = React.createClass({
  render: function() {
    var style = {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
    };
    return (
      <div style={style} className="border-top"/>
    )
  }
});


LineGraph.YAxis = React.createClass({
  render: function() {
    var style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
    };
    return (
      <div style={style} className="border-left"/>
    )
  }
});


LineGraph.YAxisRules = React.createClass({

  renderRule: function(rule, i) {
    var style = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: rule.y + '%'
    };
    return (
      <div key={'rule-'+i} style={style} className="border-top" />
    )
  },

  render: function() {
    var style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    };
    var rules = [];
    for (var i = 0; i < this.props.rules; i++) {
      rules.push({
        y: (i/this.props.rules) * 100
      });
    }
    return (
      <div style={style}>
        {rules.map(this.renderRule)}
      </div>
    )
  }
});


LineGraph.YAxisLabels = React.createClass({

  renderLabel: function(label, i) {
    var style = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: label.y + '%',
      fontSize: this.props.fontSize
    };
    var value;
    if (typeof this.props.yAxisLabelFormat === 'function') {
      value = this.props.yAxisLabelFormat(label.value);
    } else {
      value = label.value;
    }
    return (
      <div key={'label-'+i} style={style}>
        {value}
      </div>
    )
  },

  render: function() {
    var style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    };
    var labels = [];
    for (var i = 0; i < this.props.yAxisRules; i++) {
      var value = (this.props.max - this.props.min) * (1 - (i/this.props.yAxisRules));
      labels.push({
        value: value,
        y: (i/this.props.yAxisRules) * 100
      });
    }
    return (
      <div style={style}>
        {labels.map(this.renderLabel)}
      </div>
    )
  }

});


LineGraph.Path = React.createClass({

  render: function() {
    var width = this.props.data.length - 1;
    var min = this.props.min;
    var max = this.props.max;
    var height = max - min + (2/100*max);
    var viewBox = [ 0, 0, width, height ].join(' ');
    var color = this.props.color || 'currentcolor';
    var styles = {
      svg: { 
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: this.props.height,
        maxHeight: '100%',
        display: 'block',
      },
      path: {
        fill: 'none',
        stroke: color,
        strokeWidth: 2,
        strokeLinejoin: 'round',
        vectorEffect: 'non-scaling-stroke'
      },
      area: {
        fill: color,
        opacity: this.props.areaOpacity,
        //mixBlendMode: 'multiply'
      }
    };

    var pathData = 'M0 ' + height + ' ';
    pathData += this.props.data.map(function(val, i) {
      return (i === 0 ? 'M' : 'L') + i + ' ' + (height - val);
    }).join(' ');

    var area = false;
    if (this.props.area) {
      var areaPath = [
        pathData,
        'L', width, height,
        'L0', height,
        'z'
      ].join(' ');
      area = <path d={areaPath} style={styles.area} />
    }

    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        preserveAspectRatio="none"
        style={styles.svg}>
        {area}
        <path d={pathData} style={styles.path} />
      </svg>
    )
  }

});

module.exports = LineGraph;

