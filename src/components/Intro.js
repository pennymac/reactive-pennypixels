import React from 'react';
import { connect } from 'react-redux'

function IntroPage({ number }) {
  return (
    <div className="bs-docs-section">
      <div className="row">
        <div className="col-lg-12">
          <h1>
            The single page application loaded for {number} seconds.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({ number: state[0] })
)(IntroPage)
