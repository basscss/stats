
import React from 'react'
import Header from 'basscss.github.io/components/PageHeader.jsx'
import Footer from 'basscss.github.io/components/Footer.jsx'
import { CarbonAd } from 'blk'
import Stats from './Stats.jsx'

var Body = React.createClass({

  render: function() {
    return (
      <body className="px3">
        <Header {...this.props} />
        <div className='clearfix'>
          <CarbonAd />
        </div>
        <Stats {...this.props} />
        <Footer {...this.props} />
        <script src="ga.js"></script>
      </body>
    )
  }

});

module.exports = Body;

