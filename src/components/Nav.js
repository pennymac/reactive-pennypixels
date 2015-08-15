import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-collapse">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              <img src="http://pennypixels.pennymacusa.com/img/logo.svg" width="100px" />
            </a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#getting-started">
                Getting Started
              </a></li>
              <li className="dropdown">
                <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Elements
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#buttons">Buttons</a></li>
                  <li><a href="#type">Typography</a></li>
                  <li><a href="#tables">Tables</a></li>
                  <li><a href="#forms">Forms</a></li>
                  <li><a href="#nav-tabs">Navs</a></li>
                  <li><a href="#indicators">Indicators</a></li>
                  <li><a href="#containers">Containers</a></li>
                </ul>
              </li>
              <li><a href="mailto:uxhelp@pnmac.com">Get Help</a></li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>

    )
  }
}
