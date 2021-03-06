import React from 'react';
import {Link} from 'react-router'
var Nav;

export default Nav = React.createClass({

  getInitialState: function() {
    return {
      show: false,
      isShowing: false,
    }
  },

  handleClick(e) {
    this.setState( { show: !this.state.show })
  },

  render() {

    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button
              onClick={this.handleClick}
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
            <Link className="navbar-brand" to="/">
              <img
                src="http://pennypixels.pennymacusa.com/img/logo.svg"
                width="100px" />
            </Link>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div style={ { display: this.state.show ? 'block' : 'none' }}
            className={ `navbar-collapse collapse ${this.state.show ? ' ' : ' '}` }
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link onClick={this.handleClick} to="/buttons">Buttons</Link>
              </li>
              <li>
                <Link onClick={this.handleClick} to="/type">
                  Typography
                </Link>
              </li>
              <li>
                <Link onClick={this.handleClick} to="/forms">
                  Forms
                </Link>
              </li>
              <li>
                <Link onClick={this.handleClick} to="/indicators">
                  Indicators
                </Link>
              </li>
              <li>
                <Link onClick={this.handleClick} to="/containers">
                  Containers
                </Link>
              </li>
              <li>
                <Link onClick={this.handleClick} to="/animation">
                  Animation
                </Link>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container */}
      </nav>
    )
  }
})
