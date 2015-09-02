/**
* Copyright (c) 2015, Peter W Moresi
*
*/

import Router, {Route} from 'react-router';
import App from './components/PixelsApp';

import Intro from './components/Intro';
import GettingStarted from './components/GettingStarted';
import Buttons from './components/Buttons';
import Typography from './components/Typography';
import Tables from './components/Tables';
import Forms from './components/Forms';
import Navs from './components/Navs';
import Indicators from './components/Indicators';
import Containers from './components/Containers';
import AnimationDemo from './components/AnimationDemo';

// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>
    <Route path="/" handler={Intro}/>
    <Route path="getting-started" handler={GettingStarted}/>
    <Route path="buttons" handler={Buttons}/>
    <Route path="type" handler={Typography}/>
    <Route path="tables" handler={Tables}/>
    <Route path="forms" handler={Forms}/>
    <Route path="nav-tabs" handler={Navs}/>
    <Route path="indicators" handler={Indicators}/>
    <Route path="containers" handler={Containers}/>
    <Route path="animation" handler={AnimationDemo}/>
  </Route>
);

let rootInstance;

Router.run(routes, Router.HistoryLocation, (Root) => {
  rootInstance = React.render(<Root/>, document.body);
});

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
