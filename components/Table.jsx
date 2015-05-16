
var React = require('react');

var Table = React.createClass({

  getDefaultProps: function() {
    return {
      head: [],
      rows: [],
      wrapHead: true,
      wrapCell: true,
    }
  },


  renderHeadRow: function(row, i) {
    return (
      <tr key={'head-row-'+i}>
        {row.cells.map(this.renderHeaderCell)}
      </tr>
    )
  },

  renderHeaderCell: function(cell, i) {
    var className = (this.props.wrapHead ? '' : 'nowrap');
    return <th key={'header-cell-'+i} className={className}>{cell}</th>
  },

  renderRow: function(row, i) {
    return (
      <tr key={'row-'+i}>
        {row.cells.map(this.renderCell)}
      </tr>
    )
  },

  renderCell: function(cell, i) {
    var className = (this.props.wrapCell ? '' : 'nowrap');
    return <td key={'cell-'+i} className={className}>{cell}</td>
  },

  render: function() {
    return (
      <div className="overflow-auto border">
        <table className="table-light">
          <thead>
            {this.props.head.map(this.renderHeadRow)}
          </thead>
          <tbody>
            {this.props.rows.map(this.renderRow)}
          </tbody>
        </table>
      </div>
    )
  }

});

module.exports = Table;

