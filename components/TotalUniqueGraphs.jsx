
var React = require('react');
var Row = require('./Row.jsx');
var Col = require('./Col.jsx');
var TotalUniqueGraph = require('./TotalUniqueGraph.jsx');

var TotalUniqueGraphs = React.createClass({

  renderProperty: function(p, i) {
    return (
      <Col key={'property-'+i} md={6} margin={false}>
        <TotalUniqueGraph {...this.props} property={p} height={128} />
      </Col>
    )
  },

  render: function() {
    var latest = this.props.stats[this.props.stats.length-1];
    var properties = Object.keys(latest.uniques)
      .sort(function(a, b) {
        return latest.uniques[b].total - latest.uniques[a].total;
      })
      .filter(function(key) {
        return latest.uniques[key].total > 1;
      });
    return (
      <div>
        <h2>Total vs Unique Properties</h2>
        <Row>
          {properties.map(this.renderProperty)}
        </Row>
      </div>
    )
  }

});

module.exports = TotalUniqueGraphs;

