import React from 'react';
import {buttonTypes} from '../constants/PennyPixels'

export default class Buttons extends React.Component {
  handleClick(event) {
    alert('I\'ve got class: ' + event.target.className);
  }
  render() {
    return (
      <div className="bs-docs-section">
        <div className="page-header">
          <div className="row">
            <div className="col-lg-12">
              <h2 id="buttons">Buttons</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="bs-example">
              <p>
                { buttonTypes.map( (n) => {
                    return <button type="button" className={'btn btn-' + n.toLowerCase() } onClick={ this.handleClick.bind(this) }>{n}</button>
                }) }
              </p>
            </div>
            <div className="bs-example">
              <p>
                { buttonTypes.map( (n) => {
                    return <button type="button" className={'btn btn-' + n.toLowerCase() + ' disabled'}>{n}</button>
                }) }
              </p>
            </div>
            <div className="bs-example" style={{marginBottom: 15}}>
              <div className="btn-toolbar" style={{margin: 0}}>
                { buttonTypes.slice(0,2).map( (n) => {
                  return (
                    <div className="btn-group">
                      <button type="button" className={ 'btn btn-' + n.toLowerCase() }>{ n }</button>
                      <button type="button" className={'btn btn-' + n.toLowerCase() + ' dropdown-toggle'} data-toggle="dropdown"><span className="caret" /></button>
                      <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider" />
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                  ); } ) }
              </div>{/* /btn-toolbar */}
            </div>
            <div className="bs-example">
              <p>
                <button type="button" className="btn btn-primary btn-lg">Large button</button>
                <button type="button" className="btn btn-primary">Default button</button><br /><br />
                <button type="button" className="btn btn-primary btn-sm">Small button</button>
                <button type="button" className="btn btn-primary btn-xs">Mini button</button>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bs-example">
              <p>
                <button type="button" className="btn btn-default btn-lg btn-block">
                  Block level button
                </button>
              </p>
            </div>
            <div className="bs-example" style={{marginBottom: 15}}>
              <div className="btn-group btn-group-justified">
                <a href="#" className="btn btn-default">Left</a>
                <a href="#" className="btn btn-default">Right</a>
                <a href="#" className="btn btn-default">Middle</a>
              </div>
            </div>
            <div className="bs-example" style={{marginBottom: 15}}>
              <div className="btn-toolbar">
                <div className="btn-group">
                  <button type="button" className="btn btn-default">1</button>
                  <button type="button" className="btn btn-default">2</button>
                  <button type="button" className="btn btn-default">3</button>
                  <button type="button" className="btn btn-default">4</button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-default">5</button>
                  <button type="button" className="btn btn-default">6</button>
                  <button type="button" className="btn btn-default">7</button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-default">8</button>
                  <div className="btn-group">
                    <button type="button"
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown">
                      Dropdown
                      <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bs-example">
              <div className="btn-group-vertical">
                { [1,2,3,4].map( (n) =>
                  <button type="button"
                    className="btn btn-default">
                    Button # {n}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
