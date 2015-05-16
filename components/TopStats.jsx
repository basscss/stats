
var React = require('react');
var filesize = require('filesize');
var Row = require('./Row.jsx');
var Col = require('./Col.jsx');
var NumberStat = require('./NumberStat.jsx');

var TopStats = React.createClass({

  renderStat: function(s, i) {
    return (
      <Col key={i} width={6} sm={4} md={3}>
        <NumberStat number={s.number} label={s.label} />
      </Col>
    )
  },

  render: function() {
    var latest = this.props.stats[this.props.stats.length-1]; 
    var stats = [];
    stats.push({ label: 'Gzipped', number: filesize(latest.gzipSize) });
    stats.push({ label: 'Rules', number: latest.rules });
    stats.push({ label: 'Selectors', number: latest.selectors });
    stats.push({ label: 'Declarations', number: latest.declarations });
    stats.push({ label: 'Properties', number: latest.properties.length });
    stats.push({ label: 'Average Specificity', number: latest.averageSpecificity.toFixed(2) });
    stats.push({ label: 'Average Ruleset Size', number: latest.averageRuleSize.toFixed(2) });

    return (
      <div>
        <h2>Version {latest.version}</h2>
        <Row>
          {stats.map(this.renderStat)}
        </Row>
      </div>
    )
  }

});

module.exports = TopStats;

