
var React = require('react');

var Col = React.createClass({

  getDefaultProps: function() {
    return {
      margin: true,
    }
  },

  render: function() {

    var classNames = [
      'px2',
      (this.props.margin ? 'mb2' : '')
    ];
    var w = this.props.width;
    var sm = this.props.sm;
    var md = this.props.md;
    var lg = this.props.lg;
    if (w) {
      classNames.push('col');
    } else if (sm) {
      classNames.push('sm-col');
    } else if (md) {
      classNames.push('md-col');
    } else if (lg) {
      classNames.push('lg-col');
    }

    if (w) { classNames.push('col-' + w); }
    if (sm) { classNames.push('sm-col-' + sm); }
    if (md) { classNames.push('md-col-' + md); }
    if (lg) { classNames.push('lg-col-' + lg); }

    return (
      <div className={classNames.join(' ')}>
        {this.props.children}
      </div>
    )
  }

});

module.exports = Col;

