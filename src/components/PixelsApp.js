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
      profile: undefined
    }
  },
  componentDidMount(){
    console.log('test')
    loadProfile()
    .then(profile => {
      console.log('app got profile', profile)
    })
  },
  render() {
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
