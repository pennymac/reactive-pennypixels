/**
* Copyright (c) 2015, Peter W Moresi
*/

import React from 'react';
import Header from './Header';

import Intro from './Intro';
import GettingStarted from './GettingStarted';
import Buttons from './Buttons';
import Typography from './Typography';
// import Tables from './Tables';
import Forms from './Forms';
import Navs from './Navs';
import Indicators from './Indicators';
import Containers from './Containers';
import AnimationDemo from './AnimationDemo';


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
          <Intro />
          <GettingStarted />
          <Buttons />
          <Typography />
          <Forms />
          <Indicators />
          <Containers />
          <AnimationDemo height={200} />
        </div>
      </div>
      );
    }
  }
