import React from 'react';
import {Link} from 'react-router';

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
            <Link className="navbar-brand" to="/">
              <img src="http://pennypixels.pennymacusa.com/img/logo.svg" width="100px" />
            </Link>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/getting-started">
                Getting Started
              </Link></li>
              <li className="dropdown">
                <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Elements
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/buttons">Buttons</Link></li>
                  <li><Link to="/type">Typography</Link></li>
                  <li><Link to="/tables">Dynamic Tables</Link></li>
                  <li><Link to="/forms">Forms</Link></li>
                  <li><Link to="/nav-tabs">Navs</Link></li>
                  <li><Link to="/indicators">Indicators</Link></li>
                  <li><Link to="/containers">Containers</Link></li>
                  <li><Link to="/animation">AnimationDemo</Link></li>
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
