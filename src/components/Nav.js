import React from 'react';
import {Link} from 'react-router';
import UserStore from '../stores/User'

const Nav = React.createClass({

  getInitialState: function() {
    return {
      show: false,
      isShowing: false,
    }
  },

  componentDidMount() {
    this.token = UserStore.addListener(this.handleUserChange)
  },

  componentWillUnmount() {
    this.token.remove()
  },

  handleUserChange() {
    this.setState({
      user: UserStore.getState()
    })
  },

  handleClick(e) {
    this.setState( { show: !this.state.show })
  },

  render() {

    return (
      <nav className="navbar navbar-light bg-faded">
        <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="http://pennypixels.pennymacusa.com/img/logo.svg"
            width="100px" />
        </Link>
          { !UserStore.isLoggedIn() ?
          (<ul className="nav navbar-nav pull-right">
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
              Sign in to Dashboard
            </a>
          </li>
          </ul>)
          :
          (<ul className="nav navbar-nav pull-right">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Logout
            </a>
          </li>
          </ul>)
          }

        </div>
      </nav>

    )
  }
})

export default Nav;
