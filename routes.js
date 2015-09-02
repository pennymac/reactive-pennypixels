'use strict';

var App = require('./PixelsApp');
var React = require('react');
var {Route} = require('react-router');

import Intro from './Intro';
import GettingStarted from './GettingStarted';
import Buttons from './Buttons';
import Typography from './Typography';
import Tables from './Tables';
import Forms from './Forms';
import Navs from './Navs';
import Indicators from './Indicators';
import Containers from './Containers';

// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>
    <Route path="/" handler={Intro}/>
    <Route path="getting-started" handler={GettingStarted}/>
    <Route path="/buttons" handler={Buttons}/>
    <Route path="type" handler={Typography}/>
    <Route path="tables" handler={Tables}/>
    <Route path="forms" handler={Forms}/>
    <Route path="nav-tabs" handler={Navs}/>
    <Route path="indicators" handler={Indicators}/>
    <Route path="containers" handler={Containers}/>
  </Route>
);

module.exports = routes;
