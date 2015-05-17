
var React = require('react');
var filesize = require('filesize');
var Row = require('./Row.jsx');
var Col = require('./Col.jsx');
var NumberStat = require('./NumberStat.jsx');
var LineGraph = require('./LineGraph.jsx');

var TopStats = React.createClass({

  renderStat: function(s, i) {
    var data = [s];
    return (
      <Col key={i} width={6} sm={4} md={3}>
        <NumberStat number={s.number} label={s.label} />
        <LineGraph
          data={data}
          yAxisRules={false}
          legend={false}
          height={32}
          min={0} />
      </Col>
    )
  },

  render: function() {
    var colors = this.props.colors;
    var latest = this.props.stats[this.props.stats.length-1]; 
    var stats = [];
    //stats.push({
    //  label: 'Gzipped',
    //  number: filesize(latest.gzipSize),
    //  history: this.props.stats.map(function(s) {
    //    return s.gzipSize;
    //  }),
    //  color: colors[0]
    //});
    stats.push({
      label: 'Rules',
      number: latest.rules,
      data: this.props.stats.map(function(s) {
        return s.rules;
      }),
      color: colors[1]
    });
    stats.push({
      label: 'Selectors',
      number: latest.selectors,
      data: this.props.stats.map(function(s) {
        return s.selectors;
      }),
      color: colors[2]
    });
    stats.push({
      label: 'Declarations',
      number: latest.declarations,
      data: this.props.stats.map(function(s) {
        return s.declarations;
      }),
      color: colors[3]
    });
    stats.push({
      label: 'Properties',
      number: latest.properties.length,
      data: this.props.stats.map(function(s) {
        return s.properties.length;
      }),
      color: colors[4]
    });
    //stats.push({
    //  label: 'Average Specificity',
    //  number: latest.averageSpecificity.toFixed(2),
    //});
    //stats.push({
    //  label: 'Average Ruleset Size',
    //  number: latest.averageRuleSize.toFixed(2)
    //});

    return (
      <div>
        <h2 className="h5 caps">Latest (v{latest.version})</h2>
        <Row>
          {stats.map(this.renderStat)}
        </Row>
      </div>
    )
  }

});

module.exports = TopStats;

