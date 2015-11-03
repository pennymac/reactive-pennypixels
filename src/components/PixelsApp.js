/**
* Copyright (c) 2015, Peter W Moresi
*/

import React from 'react';
import Header from './Header';

/* Write some great components about what data
* this application displays and how it needs to be
* organized.
*/
export default class PixelsApp extends React.Component {
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
}
