import React from 'react';
var IntroPage;

export default IntroPage = React.createClass({
  getInitialState: function() {
    return {
      secondCount: 0
    }
  },

  componentDidMount() {
    setInterval( function() {
      this.setState( { secondCount: (this.state.secondCount+1) } );
    }.bind(this), 1000);
  },

  render() {
    return (
      <div className="bs-docs-section">
        <div className="row">
          <div className="col-lg-12">
            <p className="lead">
              Build responsive and reactive web applications with { ' ' }
              <a href="http://pennypixels.pennymacusa.com/">PennyPixels</a>
              { ' ' } and <a href="http://facebook.github.io/react/">React</a>
            </p>
            <p>
              The page has been loaded for {this.state.secondCount} seconds.
            </p>
          </div>
        </div>
      </div>
    );
  }
});
