/**
* Copyright (c) 2015, Peter W Moresi
*/

import React from 'react';
import {RouteHandler} from 'react-router';
import Header from './Header';

/* Write some great components about what data
* this application displays and how it needs to be
* organized.
*/
export default class PixelsApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container main">
          <RouteHandler />
        </div>
      </div>
      );
    }
  }
