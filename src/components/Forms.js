import React from 'react';
let FormsPage;

export default FormsPage = React.createClass({
  render() {
    return (
      <div className="bs-docs-section">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h2 id="forms">Forms</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form className="bs-example form-horizontal">
              <fieldset>
                <legend>Legend</legend>
                <div className="form-group">
                  <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                  <div className="col-lg-10">
                    <input type="text" className="form-control" id="inputEmail" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                  <div className="col-lg-10">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="textArea" className="col-lg-2 control-label">Textarea</label>
                    <div className="col-lg-10">
                      <textarea className="form-control" rows={3} id="textArea" />
                      <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-2 control-label">Radios</label>
                    <div className="col-lg-10">
                      <div className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
                          Option one is this
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                          Option two can be something else
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="select" className="col-lg-2 control-label">Selects</label>
                    <div className="col-lg-10">
                      <select className="form-control" id="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <br />
                      <select multiple className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                      <div className="pull-right">
                        <button className="btn btn-link">Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="col-lg-4 col-lg-offset-1">
              <form className="bs-example">
                <div className="form-group">
                  <label className="control-label" htmlFor="focusedInput">Focused input</label>
                  <input className="form-control" id="focusedInput" type="text" defaultValue="This is focused..." />
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="disabledInput">Disabled input</label>
                  <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled />
                </div>
                <div className="form-group has-warning">
                  <label className="control-label" htmlFor="inputWarning">Input warning</label>
                  <input type="text" className="form-control" id="inputWarning" />
                </div>
                <div className="form-group has-error">
                  <label className="control-label" htmlFor="inputError">Input error</label>
                  <input type="text" className="form-control" id="inputError" />
                </div>
                <div className="form-group has-success">
                  <label className="control-label" htmlFor="inputSuccess">Input success</label>
                  <input type="text" className="form-control" id="inputSuccess" />
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="inputLarge">Large input</label>
                  <input className="form-control input-lg" type="text" id="inputLarge" />
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="inputDefault">Default input</label>
                  <input type="text" className="form-control" id="inputDefault" />
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="inputSmall">Small input</label>
                  <input className="form-control input-sm" type="text" id="inputSmall" />
                </div>
                <div className="form-group">
                  <label className="control-label">Input addons</label>
                  <div className="input-group">
                    <span className="input-group-addon">$</span>
                    <input type="text" className="form-control" />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Button</button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
});
