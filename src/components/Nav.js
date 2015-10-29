import React from 'react';

export default class Nav extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    show: false,
    isShowing: false
  }

  handleClick(e) {
    this.setState( { show: !this.state.show });
    console.log(this.state.show)
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
          <div
            className={ 'navbar-collapse collapse' + (this.state.show ? ' in' : '') }
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
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
          </ul>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container */}
    </nav>
  )
}
}
