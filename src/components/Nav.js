import React from 'react';
import {Link} from 'react-router'
import {AnimatedComponent} from 'react-set-animate'

export default class Nav extends AnimatedComponent {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    show: false,
    isShowing: false,
    height: 0
  }

  handleClick(e) {
    var min = -1, max = 300, duration = 200;
    this.state.show = !this.state.show;
    this.state.height = this.state.show ? max : min;
    //this.setAnimate( 'height', this.state.show ? max : min, duration )
    this.setState( { show: this.state.show })
  }

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
          <div
            className={ `navbar-collapse collapse ${this.state.height > 0 ? ' in' : ''}` }
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
}
