import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute } from 'react-router'
import PixelsApp from './components/PixelsApp'

import Intro from './components/Intro';
import Buttons from './components/Buttons';
import Typography from './components/Typography';
// import Tables from './Tables';
import Forms from './components/Forms';
import Navs from './components/Navs';
import Indicators from './components/Indicators';
import Containers from './components/Containers';
import AnimationDemo from './components/AnimationDemo';

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router>
    <Route path="/" component={PixelsApp}>
      <IndexRoute component={Intro} />
      <Route path="buttons" component={Buttons} />
      <Route path="getting-started" component={GettingStarted} />
      <Route path="forms" component={Forms} />
      <Route path="type" component={Typography} />
      <Route path="navs" component={Navs} />
      <Route path="indicators" component={Indicators} />
      <Route path="containers" component={Containers} />
      <Route path="animation" component={AnimationDemo} />
    </Route>
  </Router>
), document.getElementById('root'))
