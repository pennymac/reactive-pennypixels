var React = require('react');
var PropTypes = React.PropTypes;
import {setHeader} from '../stores/ActionCreator'

const PageNotFound = React.createClass({
  componentDidMount() {
    setHeader('Sample App :: Page not found')
  },
  render: function() {
    return (
      <h1>Bummer, page cannot be found.</h1>
    );
  }

});


export default PageNotFound;
