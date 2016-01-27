import React from 'react';
var IntroPage;

export default IntroPage = React.createClass({
  getInitialState: function() {
    return {
      secondCount: 0
    }
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
              Welcome to the customer support sample application for PennyMac identity service.
            </p>
            <hr />
          </div>
        </div>
      </div>
    );
  }
});
