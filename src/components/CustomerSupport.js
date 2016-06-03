import React from 'react';
import {setHeader, loadProfile} from '../stores/ActionCreator'

var YAML = require('js-yaml')
var Highlight = require('react-highlight');

const CustomerSupportPage = React.createClass({
  getInitialState() {
    return {
      init: true,
      user: undefined,
      isError: false
    }
  },

  componentDidMount(){
    setHeader('Customer Service Sample Dashboard')

    loadProfile()
    .then(profile => {
      console.log('app got profile', profile)
      this.setState({ loaded: true })
    })

  },

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.handleClick()
    }
  },

  handleClick() {

    if (this.refs.username.value.length === 0) {
      alert('Must provide a username!')
      return;
    }

    this.setState({
      init: false,
      loading: true,
      isError: false,
      user: undefined
    })

    fetch('/full_profile', {
      credentials: 'include',
      method: 'post',
      body: JSON.stringify({
        username: this.refs.username.value,
      })
    })
    .then(n => n.json()).then(user => {
      if (typeof user.error_message !== 'undefined') {
        this.setState({
          loading: false,
          error: user.error_message,
          isError: true
        })
        return;
      }

      this.setState({
        loading: false,
        user: user,
        isError: false
      })
    })
    .catch(err => {
      this.setState({
        loading: false,
        error: 'Error',
        isError: true
      })
    })

  },

  handleClickDeactivate() {

    fetch('/profile/mode', {
      credentials: 'include',
      method: 'post',
      body: JSON.stringify({
        username: this.refs.username.value,
        mode: this.state.user.is_active ? 'off' : 'on'
      })
    })
    .then(n => n.json()).then(user => {

      if (typeof user.error_message !== 'undefined') {
        this.setState({
          error: user.error_message,
          isError: true
        })
        return;
      }

      this.setState({ user: Object.assign({}, this.state.user, { is_active: user.is_active }) })
    })
  },

  handleClickResetMFA() {
    fetch('/profile/reset_mfa_option', {
      credentials: 'include',
      method: 'post',
      body: JSON.stringify({
        username: this.state.user.username,
      })
    })
    .then(n => n.json())
    .then(user => {

      if (typeof user.error_message !== 'undefined') {
        this.setState({
          error: user.error_message,
          isError: true
        })
        return;
      }

      this.setState({ user: Object.assign({}, this.state.user, { current_mfa_type: 'email' }) })
    })
  },
  render() {

    let UserProfile

    if (this.state.init) {
      UserProfile = "Please enter a username."
    } else if (this.state.loading) {
      UserProfile = "Loading..."
    } else if (this.state.isError) {
      UserProfile = this.state.error
    } else {
      UserProfile = (
        <Highlight className='YAML'>
          {YAML.dump(this.state.user, null, 4)}
        </Highlight>
      )
    }

    return (
      <div>
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <label className="control-label">Customer user name:</label>
              <div className="input-group">
                <input ref="username" type="text" className="form-control" onKeyUp={this.handleKeyUp} />
                <span className="input-group-btn">
                  <button
                    onClick={this.handleClick}
                    className="btn btn-default" type="button">Lookup</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div className="row">
          <div className="col-lg-12">
            { UserProfile }
          </div>
        </div>
        <p></p>
        <button className="btn btn-primary" onClick={this.handleClickDeactivate} disabled={typeof this.state.user === 'undefined' || this.state.isError}>
          { this.state.user && this.state.user.is_active ? 'Deactivate' : 'Activate' }
        </button>{' '}
        <button className="btn btn-primary" onClick={this.handleClickResetMFA} disabled={typeof this.state.user === 'undefined' || this.state.isError}>
          Reset MFA to email
        </button>
      </div>
    );
  }
});

export default CustomerSupportPage
