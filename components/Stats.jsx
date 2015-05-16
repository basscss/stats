
var React = require('react');
var Row = require('./Row.jsx');
var Col = require('./Col.jsx');
var SizeGraph = require('./SizeGraph.jsx');
var RulesGraph = require('./RulesGraph.jsx');
var SpecificityGraph = require('./SpecificityGraph.jsx');
var RuleSizeGraph = require('./RuleSizeGraph.jsx');
var HistoryTable = require('./HistoryTable.jsx');

var Stats = React.createClass({

  render: function() {
    return (
      <main className="py2">
        <Row>
          <Col sm={6}>
            <SizeGraph {...this.props} />
          </Col>
          <Col sm={6}>
            <RulesGraph {...this.props} />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <SpecificityGraph {...this.props} />
          </Col>
          <Col sm={6}>
            <RuleSizeGraph {...this.props} />
          </Col>
        </Row>
        <HistoryTable {...this.props} />
      </main>
    )
  }

});

module.exports = Stats;

