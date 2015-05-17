
var _ = require('lodash');
var React = require('react');
var PieChart = require('./PieChart.jsx');
var Row = require('./Row.jsx');
var Col = require('./Col.jsx');


var PropertiesPie = React.createClass({

  render: function() {
    var latest = this.props.stats[this.props.stats.length-1];
    var colors = this.props.colors;
    var data = latest.propertiesBreakdown.map(function(p, i) {
      var color;
      if (i < colors.length) {
        color = colors[i];
      } else {
        color = colors[i%colors.length];
      }
      return {
        label: _.kebabCase(p.property).replace(/\-/g, ' '),
        value: p.total,
        color: color
      }
    });
    return (
      <div className="mb2">
        <h3>Properties Breakdown</h3>
        <Row>
          <Col lg={3} />
          <Col lg={7}>
            <PieChart
              data={data}
              threshold={0.5}
              donut={true}
              legend={32} />
          </Col>
        </Row>
      </div>
    )
  }

});

module.exports = PropertiesPie;

