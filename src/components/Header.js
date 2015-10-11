import React from 'react';

import Nav from './Nav';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="lead">Reactive PennyPixels v0.0.1</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
}