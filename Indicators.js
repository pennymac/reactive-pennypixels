import React from 'react';

export default class Indicators extends React.Component {
  render() {
    return (
      <div className="bs-docs-section">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h2 id="indicators">Indicators</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2>Alerts</h2>
            <div className="bs-example">
              <div className="alert alert-dismissable alert-warning">
                <button type="button" className="close" data-dismiss="alert">×</button>
                <h4>Warning!</h4>
                <p>Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" className="alert-link">vel scelerisque nisl consectetur et</a>.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="alert alert-dismissable alert-danger">
              <button type="button" className="close" data-dismiss="alert">×</button>
              <strong>Warning!</strong> You are about to delete the entire database. <a href="#" className="alert-link">Are you sure</a>?
            </div>
          </div>
          <div className="col-lg-4">
            <div className="alert alert-dismissable alert-success">
              <button type="button" className="close" data-dismiss="alert">×</button>
              <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this important alert message</a>.
            </div>
          </div>
          <div className="col-lg-4">
            <div className="alert alert-dismissable alert-info">
              <button type="button" className="close" data-dismiss="alert">×</button>
              <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but it's not super important.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h2>Labels</h2>
            <div className="bs-example" style={{marginBottom: 40}}>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
              <span className="label label-info">Info</span>
            </div>
          </div>
          <div className="col-lg-4">
            <h2>Badges</h2>
            <div className="bs-example">
              <ul className="nav nav-pills">
                <li className="active"><a href="#">Home <span className="badge">42</span></a></li>
                <li><a href="#">Profile <span className="badge" /></a></li>
                <li><a href="#">Messages <span className="badge">3</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
