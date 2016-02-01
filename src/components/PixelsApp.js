/**
* Copyright (c) 2015, Peter W Moresi
*/
import React from 'react';
import Header from './Header';
import {loadProfile} from '../stores/ActionCreator'

/* Write some great components about what data
* this application displays and how it needs to be
* organized.
*/
const PixelsApp = React.createClass({
  getInitialState(){
    return {
      profile: undefined,
      loaded: false,
      loadedProfile: false
    }
  },
  componentDidMount(){
    console.log('test')

    getIdentityServerUrl()
    .then(n => {
      if (!n) {
        this.setState({ error: true })
      }

      this.setState({ loaded: true })

      loadProfile()
      .then(profile => {
        console.log('app got profile', profile)
        this.setState({ loadedProfile: true })
      })

    })


  },
  render() {

    if (!this.state.loaded) {
      return <div>Loading...</div>
    }

    if (this.state.error) {
      return <div>Cannot load</div>
    }

    return (
      <div id="main">
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default PixelsApp
