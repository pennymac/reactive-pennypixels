/**
 * Copyright (c) 2015, Peter W Moresi
 *
 */

import React from 'react';
import MyApp from './components/MyApp.js'

let rootInstance = React.render(
  <MyApp />,
  document.body
);

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
