import React from 'react';
import Nav from './Nav';
var Header;

export default Header = React.createClass({
  render() {
    return (
      <div>
        <Nav />
        <div className="page-heading">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <p className="lead">Customer Support Sample App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
