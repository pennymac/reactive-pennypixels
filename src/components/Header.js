import React from 'react';
import Nav from './Nav';
import SettingStore from '../stores/Setting'

const Header = React.createClass({
  getInitialState: function() {
    return {
      text: SettingStore.getState().headerText
    }
  },

  componentDidMount() {
    this.token = SettingStore.addListener(this.handleSettingChange)
  },

  componentWillUnmount() {
    this.token.remove()
  },

  handleSettingChange() {
    this.setState({ text: SettingStore.getState().headerText })
  },
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
