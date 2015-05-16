
var React = require('react');

var Table = React.createClass({


  renderHeadRow: function(row, i) {
    return (
      <tr key={'head-row-'+i}>
        {row.cells.map(this.renderHeaderCell)}
      </tr>
    )
  },

  renderHeaderCell: function(cell, i) {
    return (
      <th key={'header-cell-'+i}>{cell}</th>
    )
  },

  renderRow: function(row, i) {
    return (
      <tr key={'row-'+i}>
        {row.cells.map(this.renderCell)}
      </tr>
    )
  },

  renderCell: function(cell, i) {
    return <td key={'cell-'+i}>{cell}</td>
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

