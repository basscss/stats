
var React = require('react');
var Row = require('./Row.jsx');
var Col = require('./Col.jsx');
var TopStats = require('./TopStats.jsx');
var PropertiesBar = require('./PropertiesBar.jsx');
var PropertiesPie = require('./PropertiesPie.jsx');
var SizeGraph = require('./SizeGraph.jsx');
var RulesGraph = require('./RulesGraph.jsx');
var SpecificityGraph = require('./SpecificityGraph.jsx');
var RuleSizeGraph = require('./RuleSizeGraph.jsx');
var MixedPropertiesGraph = require('./MixedPropertiesGraph.jsx');
var TotalPropertiesGraph = require('./TotalPropertiesGraph.jsx');
var UniquePropertiesGraph = require('./UniquePropertiesGraph.jsx');
var TotalUniqueGraphs = require('./TotalUniqueGraphs.jsx');
var HistoryTable = require('./HistoryTable.jsx');

var Stats = React.createClass({

  render: function() {
    return (
      <main className="py2">
        <TopStats {...this.props} />
        <hr />
        <h2 className="h5 caps">Versions {this.props.stats[0].version} to {this.props.stats[this.props.stats.length-1].version}</h2>
        <SizeGraph {...this.props} />
        <Row>
          <Col sm={6}>
            <SpecificityGraph {...this.props} />
          </Col>
          <Col sm={6}>
            <RuleSizeGraph {...this.props} />
          </Col>
        </Row>
        <hr />
        <MixedPropertiesGraph {...this.props} />
        <hr />
        <TotalUniqueGraphs {...this.props} />
        <hr />
        <PropertiesPie {...this.props} />
        <hr />
        <HistoryTable {...this.props} />
      </main>
    )
  }

});

module.exports = Stats;

