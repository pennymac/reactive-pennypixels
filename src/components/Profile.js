import React from 'react';
import UserStore from '../stores/User'
import {setHeader, loadProfile} from '../stores/ActionCreator'

const ProfilePage = React.createClass({
  getInitialState() {
    return {
      loading: !UserStore.isLoggedIn(),
      user: UserStore.getState()
    }
  },
  componentDidMount() {
    setHeader('Profile')

    this.token = UserStore.addListener(this.handleUserChange)

    loadProfile()
    .then(profile => {
      console.log('app got profile', profile)
      this.setState({ loaded: true })
    })

  },
  componentWillUnmount() {
    this.token.remove()
  },
  handleUserChange() {
    this.setState({
      loading: !UserStore.isLoggedIn(),
      user: UserStore.getState()
    })
  },
  render() {
    if (this.state.loading) {
      return (
        <div>
        loading...
        </div>
      )
    }
    return (
      <div className="profile-section">
        <pre style={{display: 'none'}}>
         {JSON.stringify(this.state.user, null, 4)}
        </pre>

        <div className="row">
          <div col="col-md-6">
            <b>Username: </b>
            <span>{ this.state.user.user_name }</span>
            &nbsp;&nbsp;
            <a href="/profile/username">Edit</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/profile/password">Edit Password</a>
          </div>
        </div>


        <div className="row">
          <div col="col-md-6">
            <b>Email: </b>
            <span>{ this.state.user.email }</span>
            &nbsp;&nbsp;
            <a href="/profile/email">Edit</a>
          </div>
          <div col="col-md-6">
            <b>Verified?: </b>
            <span>{this.state.user.verified_email_flag ? 'Yes' : 'No' }</span>
          </div>
        </div>

        <div className="row">
          <div col="col-md-6">
            <b>Phone: </b>
            <span>{ this.state.user.mobile_phone }</span>
            &nbsp;&nbsp;
            <a href="/profile/phone">Edit</a>
          </div>
          <div col="col-md-6">
            <b>Has TCPA?: </b>
            <span>{this.state.user.phone_tcpa ? 'Yes' : 'No' }</span>
          </div>
        </div>

        <div className="row">
          <div col="col-md-6">
            <b>Security questions: </b>
            &nbsp;&nbsp;
            <a href="/profile/security_questions">Edit</a>
          </div>
        </div>

        <div className="row">
          <div col="col-md-6">
            <b>Security options: </b>{this.state.user.current_mfa_type}
            &nbsp;&nbsp;
            <a href="/profile/security_options">Edit</a>
          </div>
        </div>


      </div>
    );
  }
});

export default ProfilePage;
