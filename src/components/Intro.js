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
      <div>
        <div className="row" style={{ minHeight: 10 }}>

        </div>
        <div className="row">
          <div className="col-lg-12">
            <hr />
            <p className="lead">
              Super cool PennyMac single page application { ' ' }
              <a href="http://pennypixels.pennymacusa.com/">PennyPixels</a>
              { ' ' } and <a href="http://facebook.github.io/react/">React</a>
            </p>
            <p>
              The site has been loaded for { this.state.secondCount } seconds.
            </p>
            <hr />
          </div>
        </div>
      </div>
    );
  }
});
