import React, {Component} from 'react';
import Nav from './Nav';
import SettingStore from '../stores/Setting'
import {connectStoreMixin} from 'react-fluxury'

const Header = React.createClass({

  mixins: [connectStoreMixin(SettingStore, state => ({
    text: state.headerText
  }))],

  render() {
    return (
      <div>
        <Nav />
        <div className="page-heading">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <p className="lead">
                  {this.state.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Header;
