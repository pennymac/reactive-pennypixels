import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute } from 'react-router'
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux';
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

import CounterStore from './stores/CounterStore'
import TodosStore from './stores/TodosStore'

let stores = {
  count: CounterStore,
  todos: TodosStore
}

import {createStore} from 'fluxury-redux';

let store = createStore(stores)
window.store = store

// dispatch increment every second
setInterval(function() {
  store.dispatch({ type: 'increment' })
}, 1000)

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  // HAHA - Use react-redux with Fluxury stores!
  <Provider store={store}>
    <Router history={browserHistory}>
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
  </Provider>
), document.getElementById('root'))
