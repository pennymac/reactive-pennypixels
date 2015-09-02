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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        <link rel="stylesheet" href="http://pennypixels.pennymacusa.com/css/pp.css" />
        <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700' rel='stylesheet' type='text/css' />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />

        <Header />
        <div className="container main">
          <RouteHandler />
        </div>
      </div>
      );
    }
  }
