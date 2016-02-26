import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import PixelsApp from './components/PixelsApp'

import Intro from './components/Intro';
import Buttons from './components/Buttons';
import Typography from './components/Typography';
import Forms from './components/Forms';
import Navs from './components/Navs';
import Indicators from './components/Indicators';
import Containers from './components/Containers';
import AnimationDemo from './components/AnimationDemo';
import PageNotFound from './components/PageNotFound';


function handleUpdate(){
  window.prerenderReady = true;
}
// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router history={createBrowserHistory()} onUpdate={handleUpdate}>
    <Route path="/" component={PixelsApp}>
      <IndexRoute component={Intro} />
      <Route path="buttons" component={Buttons} />
      <Route path="forms" component={Forms} />
      <Route path="type" component={Typography} />
      <Route path="navs" component={Navs} />
      <Route path="indicators" component={Indicators} />
      <Route path="containers" component={Containers} />
      <Route path="animation" component={AnimationDemo} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>
), document.getElementById('root'))
