import React from 'react';
import {connectStoreMixin} from 'react-fluxury'
import Nav from './Nav';
import countStore from '../stores/CounterStore';

var Header;

// Shows how to bind using react-fluxury mixin

export default Header = React.createClass({
  mixins: [connectStoreMixin(countStore, state => ({
   number: state
  }))],
  render() {
    return (
      <div>
        <Nav />
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="lead">
                  PennyPixels + React
                  <span style={{ float: 'right', fontSize: '0.5em', marginTop: 15 }}>
                    Timer: {this.state.number}s
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
