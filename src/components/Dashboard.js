import React from 'react';
import YAML from 'js-yaml'
import Highlight from 'react-highlight'
import {setHeader, loadProfile} from '../stores/ActionCreator'

const DashboardPage = React.createClass({
  getInitialState() {
    return {
      user: undefined
    }
  },

  componentDidMount() {
    setHeader('Sample App :: CFPB Complaints')
    loadProfile()
    .then(profile => {
      this.setState({ loaded: true })
    })
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
  render() {
    let UserProfile = (
      <Highlight className='YAML'>
        {YAML.dump(this.state.user, null, 4)}
      </Highlight>
    )

    return (
      <div>
        <iframe style={{ width: '100%', height: 550 }} src="https://pennymac.github.io/CFPBConsumerComplaints/"></iframe>
      </div>
    );
  }
});

export default DashboardPage
