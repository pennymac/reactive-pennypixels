import React from 'react';
import {AnimatedComponent} from 'react-state-animation'

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
    var min = -1, max = 340, duration = 200;
    this.state.show = !this.state.show;
    this.state.height = this.state.show ? min : max;
    this.setAnimate( 'cubic-in-out', 'height', this.state.show ? max : min, duration )
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
            <a className="navbar-brand" href="#">
              <img
                src="http://pennypixels.pennymacusa.com/img/logo.svg"
                width="100px" />
            </a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div style={{ height: this.state.height }}
            className={ `navbar-collapse collapse ${this.state.height > 0 ? ' in' : ''}` }
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#getting-started">
              Getting Started
              </a>
            </li>
            <li>
              <a href="#buttons">
              Buttons
              </a>
            </li>
            <li>
              <a href="#type">
              Typography
              </a>
            </li>
            <li>
              <a href="#forms">
              Forms
              </a>
            </li>
            <li>
              <a href="#indicators">
                Indicators
              </a>
            </li>
            <li>
              <a href="#containers">
                Containers
              </a>
            </li>
            <li>
              <a href="#animation">
                Animation
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
