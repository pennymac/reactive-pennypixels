/**
* Copyright (c) 2015, Peter W Moresi
*/
import React from 'react';
import Header from './Header';
import {loadProfile} from '../stores/ActionCreator'

/* Write some great components about what data
* this application displays and how it needs to be
* organized.
*/
const PixelsApp = React.createClass({
  render() {
    return (
      <div id="main">
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default PixelsApp
