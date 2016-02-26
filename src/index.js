import React from 'react'
import { render } from 'react-dom'

// preload stores
import UserStore from './stores/User'
import SettingStore from './stores/Setting'

import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import PixelsApp from './components/PixelsApp'

import Intro from './components/Intro';
import CustomerSupportPage from './components/CustomerSupport';
import DashboardPage from './components/Dashboard';
import ProfilePage from './components/Profile';
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
      <Route path="/dashboard" component={CustomerSupportPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>
), document.getElementById('root'))
