import React from 'react';

export default class Intro extends React.Component {
  render() {
    return (
        <div className="bs-docs-section">
          <div className="row">
            <div className="col-lg-12">
              <h1>React Starter Template for PennyMac</h1>
              <p className="lead">
                Build responsive and reactive web applications with { ' ' }
                <a href="http://pennypixels.pennymacusa.com/">PennyPixels</a>
                { ' ' } and <a href="http://facebook.github.io/react/">React</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
