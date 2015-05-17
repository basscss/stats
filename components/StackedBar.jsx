
var _ = require('lodash');
var React = require('react');

var StackedBar = React.createClass({

  getDefaultProps: function() {
    return {
      data: [],
      height: 128,
      min: false,
      max: false,
      fontSize: '12px',
    }
  },

  getInitialState: function() {
    var min;
    var max;
    var total = 0;
    if (typeof this.props.min === 'number') {
      min = this.props.min;
    } else {
      min = _.min(this.props.data.map(function(d) { return d.value }));
    }
    if (typeof this.props.max === 'number') {
      max = this.props.max;
    } else {
      max = _.max(this.props.data.map(function(d) { return d.value }));
    }
    this.props.data.forEach(function(d) {
      total = total + d.value;
    });

    return {
      min: min,
      max: max,
      total: total
    }
  },

  renderBlock: function(block, i) {
    var style = {
      boxSizing: 'border-box',
      fontSize: this.props.fontSize,
      color: 'white',
      backgroundColor: block.color,
      width: (block.value / this.state.total * 100) + '%'
    };
    return (
      <div key={i} className="overflow-hidden" style={style}>
        {block.label}
      </div>
    )
  },

  render: function() {
    var styles = {
      container: {
        height: this.props.height
      },
    };
    console.log('stacked bar');

    return (
      <div className="flex" style={styles.container}>
        {this.props.data.map(this.renderBlock)}
      </div>
    )
  }

});


module.exports = StackedBar;

