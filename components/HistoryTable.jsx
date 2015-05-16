
var React = require('react');
var _ = require('lodash');
var filesize = require('filesize');
var Table = require('./Table.jsx');

var HistoryTable = React.createClass({

  filterKeys: function(key) {
    switch(key) {
      case 'Mix':
      case 'Uniques':
      case 'Specificities':
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
          } else if (key === 'averageSpecificity' || key === 'averageRuleSize') {
            var n = item[key];
            value = n.toFixed(2);
          } else if (key === 'mix' || key === 'uniques' || key === 'specificities') {
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
      <div className="h5">
        <Table
          head={head}
          rows={rows}
          wrapCell={false} />
      </div>
    )
  }

});

module.exports = HistoryTable;

