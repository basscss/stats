
var React = require('react');
var _ = require('lodash');
var filesize = require('filesize');
var Table = require('./Table.jsx');

var HistoryTable = React.createClass({

  filterKeys: function(key) {
    console.log(key);
    switch(key) {
      case 'Mix':
      case 'Uniques':
        console.log('filtered out', key);
        return false;
        break;
      default:
        return true;
        break;
    }
  },

  render: function() {
    var self = this;
    var head = [
      {
        cells: Object.keys(this.props.stats[0]).map(function(key) {
          var kebabed = _.kebabCase(key);
          return _.capitalize(kebabed.replace(/\-/g, ' '));
        }).filter(self.filterKeys)
      }
    ];

    var rows = this.props.stats.map(function(item) {
      return {
        cells: Object.keys(item).map(function(key) {
          var value;
          if (key === 'properties') {
            value = item[key].length;
          } else if (key === 'size' || key === 'gzipSize') {
            value = filesize(item[key]);
          } else if (key === 'mix' || key === 'uniques') {
            value = false;
          } else {
            value = item[key];
          }
          return value;
        }).filter(function(val) {
          if (val === false) {
            return false;
          } else {
            return true;
          }
        })
      }
    });

    return (
      <Table
        head={head}
        rows={rows} />
    )
  }

});

module.exports = HistoryTable;

