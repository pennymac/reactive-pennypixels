import React from 'react';
import {setHeader} from '../stores/ActionCreator'

var IntroPage;

export default IntroPage = React.createClass({
  getInitialState: function() {
    return {
      secondCount: 0
    }
  },

  componentDidMount() {
    setHeader('Sample App')
  },

  render() {
    return (
      <div>
        <div className="row" style={{ minHeight: 10 }}>

        </div>
        <div className="row">
          <div className="col-lg-12">
            <hr />
            <p className="lead">
              Welcome to the sample application for PennyMac identity service.
            </p>
            <hr />
          </div>
        </div>
      </div>
    );
  }
});
