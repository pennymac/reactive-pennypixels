import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
              <span className="sr-only">
                Toggle navigation
              </span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              <img
                src="http://pennypixels.pennymacusa.com/img/logo.svg"
                width="100px" />
            </a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Example Link
              </a>
            </li>
            <li>
              <a href="#">
                Example Link 2
              </a>
            </li>
          </ul>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container */}
    </nav>
  )
}
}
