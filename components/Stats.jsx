
var React = require('react');
var HistoryTable = require('./HistoryTable.jsx');

var Stats = React.createClass({

  render: function() {
    return (
      <main className="py2">
        <HistoryTable {...this.props} />
      </main>
    )
  }

});

module.exports = Stats;

