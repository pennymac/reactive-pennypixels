import React from 'react';

export default class Containers extends React.Component {
  render() {
    return (
      <div className="bs-docs-section">

        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h2 id="containers">Containers</h2>
            </div>
            <div className="bs-example">
              <div className="jumbotron">
                <h1>Jumbotron</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p><a className="btn btn-primary btn-lg">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-12">
            <h2>List groups</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="bs-example">
              <ul className="list-group">
                <li className="list-group-item">
                  <span className="badge">14</span>
                  Cras justo odio
                </li>
                <li className="list-group-item">
                  <span className="badge">2</span>
                  Dapibus ac facilisis in
                </li>
                <li className="list-group-item">
                  <span className="badge">1</span>
                  Morbi leo risus
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bs-example">
              <div className="list-group">
                <a href="#" className="list-group-item active">
                  Cras justo odio
                </a>
                <a href="#" className="list-group-item">Dapibus ac facilisis in
                </a>
                <a href="#" className="list-group-item">Morbi leo risus
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bs-example">
              <div className="list-group">
                <a href="#" className="list-group-item">
                  <h4 className="list-group-item-heading">List group item heading</h4>
                  <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
                <a href="#" className="list-group-item">
                  <h4 className="list-group-item-heading">List group item heading</h4>
                  <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-12">
            <h2>Panels</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">        
            <div className="panel panel-default">
              <div className="panel-body">
                Basic panel
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">Panel heading</div>
              <div className="panel-body">
                Panel content
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body">
                Panel content
              </div>
              <div className="panel-footer">Panel footer</div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Panel primary</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>
            <div className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title">Panel success</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Panel warning</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h3 className="panel-title">Panel danger</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Panel info</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h2>Wells</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="well">
              Look, I'm in a well!
            </div>
          </div>
          <div className="col-lg-4">
            <div className="well well-sm">
              Look, I'm in a small well!
            </div>
          </div>
          <div className="col-lg-4">
            <div className="well well-lg">
              Look, I'm in a large well!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
