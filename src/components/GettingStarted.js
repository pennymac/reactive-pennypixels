import React from 'react';

export default class GettingStarted extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="page-header">
          <div className="row">
            <div className="col-lg-12">
              <h2 id="getting-started">Getting Started</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>PennyPixels is a simple theme that overrides some default CSS values to provide your Bootstrap project with automagic PennyMac branding, colors and typography. Just follow these steps to implement it in your UI:
            </p><ol>
              <li>
                <a href="http://github.com/petermoresi/reactive-pennypixels">Clone the Starter Template Repo</a>
              </li>
              <li>Add React Components to your UI</li>
              <li><a href="#" data-toggle="modal" data-target=".bs-example-modal-lg">Watch a movie</a> because you just got back like 3 hours of your life</li>
              <li><a href="mailto:uxhelp@pnmac.com">Contact PennyMac UX</a> if you need help or have suggestions for improvement</li>
            </ol>
          </div>
          <div className="col-md-6">
            <div className="well">
              <a href="http://github.com/petermoresi/reactive-pennypixels" className="btn btn-primary btn-lg btn-block">Clone the Starter Template Repo</a>
              <p className="lead" style={{textAlign: 'center', lineHeight: '200%'}}>or
                <a href="mailto:uxhelp@pnmac.com" className="btn btn-default btn-lg btn-block">Get Help from PennyMac UX</a>
              </p></div>
          </div>
          <div className="modal fade bs-example-modal-lg" tabindex={-1} role="dialog" aria-labelledby="myLargeModalLabel">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={420} height={315} src="https://www.youtube.com/embed/K1NTojkckZw?rel=0" frameborder={0} allowfullscreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}
