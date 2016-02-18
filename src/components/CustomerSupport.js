import React from 'react';
import {setHeader} from '../stores/ActionCreator'

var YAML = require('js-yaml')
var Highlight = require('react-highlight');

const CustomerSupportPage = React.createClass({
  getInitialState() {
    return {
      user: undefined
    }
  },

  componentDidMount(){
    setHeader('Sample App :: Customer Lookup')
  },

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.handleClick()
    }
  },

  handleClick() {
    let uri = `/profile/${this.refs.username.value}`
    console.log(uri)
    fetch(uri, { credentials: 'include' })
    .then(n => n.json()).then(user => {
      console.log(user)
      this.setState({ user: user })
    })
  },

  handleClickDeactivate() {
    let uri = `/profile/${this.state.user.username}/turn/${this.state.user.is_active ? 'off' : 'on' }`
    console.log(uri)
    fetch(uri, { credentials: 'include' })
    .then(n => n.json()).then(user => {
      console.log(user)
      this.setState({ user: Object.assign({}, this.state.user, { is_active: user.is_active }) })
    })
  },
  handleClickResetMFA() {
    let uri = `/profile/reset_mfa_option/${this.state.user.username}`
    console.log(uri)
    fetch(uri, { credentials: 'include' })
    .then(n => n.json()).then(user => {
      console.log(user)
      this.setState({ user: Object.assign({}, this.state.user, { current_mfa_type: 'email' }) })
    })
  },
  render() {
    let UserProfile = (
      <Highlight className='YAML'>
        {YAML.dump(this.state.user, null, 4)}
      </Highlight>
    )

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
                  <button onClick={this.handleClick} className="btn btn-default" type="button">Lookup</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div className="row">
          <div className="col-lg-12">
            { this.state.user ? UserProfile : "Please enter a username."}
          </div>
        </div>
        <p></p>
        <button className="btn btn-primary" onClick={this.handleClickDeactivate} disabled={typeof this.state.user === 'undefined'}>
          { this.state.user && this.state.user.is_active ? 'Deactivate' : 'Activate' }
        </button>{' '}
        <button className="btn btn-primary" onClick={this.handleClickResetMFA} disabled={typeof this.state.user === 'undefined'}>
          Reset MFA to email
        </button>
      </div>
    );
  }
});

export default CustomerSupportPage
