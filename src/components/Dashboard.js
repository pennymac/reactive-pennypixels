import React from 'react';
var YAML = require('js-yaml')
var Highlight = require('react-highlight');

const DashboardPage = React.createClass({
  getInitialState() {
    return {
      user: undefined
    }
  },

  componentDidMount() {
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
        <h1>
        Placeholder for your application.
        </h1>
      </div>
    );
  }
});

export default DashboardPage
