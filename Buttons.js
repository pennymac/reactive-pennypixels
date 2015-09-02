import React from 'react';
import {buttonTypes} from './Constants'

export default class Buttons extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    alert('I\'ve got class: ' + event.currentTarget.className);
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
                    return <button type="button" className={'btn btn-' + n.toLowerCase() } onClick={ this.handleClick }>{n}</button>
                }) }
              </p>
            </div>
            <div className="bs-example">
              <p>
                { buttonTypes.map( (n) => {
                    return <button type="button" className={'btn btn-' + n.toLowerCase() + ' disabled'} onClick={ this.handleClick }>{n}</button>
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
                <button type="button" className="btn btn-primary btn-lg" onClick={ this.handleClick }>Large button</button>
                <button type="button" className="btn btn-primary" onClick={ this.handleClick }>Default button</button><br /><br />
                <button type="button" className="btn btn-primary btn-sm" onClick={ this.handleClick }>Small button</button>
                <button type="button" className="btn btn-primary btn-xs" onClick={ this.handleClick }>Mini button</button>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bs-example">
              <p>
                <button type="button" className="btn btn-default btn-lg btn-block" onClick={ this.handleClick }>
                  Block level button
                </button>
              </p>
            </div>
            <div className="bs-example" style={{marginBottom: 15}}>
              <div className="btn-group btn-group-justified">
                <a href="#" className="btn btn-default" onClick={ this.handleClick }>Left</a>
                <a href="#" className="btn btn-default" onClick={ this.handleClick }>Right</a>
                <a href="#" className="btn btn-default" onClick={ this.handleClick }>Middle</a>
              </div>
            </div>
            <div className="bs-example" style={{marginBottom: 15}}>
              <div className="btn-toolbar">
                <div className="btn-group">
                  <button type="button" className="btn btn-default" onClick={ this.handleClick }>1</button>
                  <button type="button" className="btn btn-default" onClick={ this.handleClick }>2</button>
                  <button type="button" className="btn btn-default" onClick={ this.handleClick }>3</button>
                  <button type="button" className="btn btn-default" onClick={ this.handleClick }>4</button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-default" onClick={ this.handleClick }>5</button>
                  <button type="button" className="btn btn-default" onClick={ this.handleClick }>6</button>
                  <button type="button" className="btn btn-default" onClick={ this.handleClick }>7</button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-default" onClick={ this.handleClick }>8</button>
                  <button type="button" className="btn btn-default" onClick={ this.handleClick }>9</button>
                  <div className="btn-group">
                    <button type="button"
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown">
                      Dropdown
                      <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                      <li><a href="#" onClick={ this.handleClick }>Dropdown link</a></li>
                      <li><a href="#" onClick={ this.handleClick }>Dropdown link</a></li>
                      <li><a href="#" onClick={ this.handleClick }>Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bs-example">
              <div className="btn-group-vertical">
                { [1,2,3,4].map( (n) =>
                  <button type="button"
                    className="btn btn-default" onClick={ this.handleClick }>
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
