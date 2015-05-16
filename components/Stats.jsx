
var React = require('react');
var SizeGraph = require('./SizeGraph.jsx');
var HistoryTable = require('./HistoryTable.jsx');

var Stats = React.createClass({

  render: function() {
    return (
      <main className="py2">
        <SizeGraph {...this.props} />
        <HistoryTable {...this.props} />
      </main>
    )
  }

});

module.exports = Stats;

