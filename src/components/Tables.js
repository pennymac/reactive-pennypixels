import React from 'react';
import SWITCH from 'formula-switch'
import range from 'lodash.range';

let rows = range(1, 5000);

export default class Tables extends React.Component {

  constructor() {
    super();
    this.state = {
      rows: rows,
      startRow: 1,
      rowNum: 10,
      sucessRow: 4,
      dangerRow: 5,
      warningRow: 6,
      activeRow: 10
    };
  }

  handleStartRowChanged(event) {
    this.setState( { startRow: +event.currentTarget.value });
  }
  
  handleRowNumChanged(event) {
    this.setState( { rowNum: +event.currentTarget.value });
  }

  handleSuccessRowChanged(event) {
    this.setState( { sucessRow: +event.currentTarget.value } );
  }

  handleDangerRowChanged(event) {
    this.setState( { dangerRow: +event.currentTarget.value } );
  }

  handleWarningRowChanged(event) {
    this.setState( { warningRow: +event.currentTarget.value } );
  }

  handleRowClicked(event) {
    this.setState( { activeRow: +event.currentTarget.rowIndex } );
  }
  
  render() {
    return (
      <div className="bs-docs-section">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h2 id="tables">Tables</h2>
            </div>
            <div className="col-sm-12 col-md-2">
              <div className="form-group">
                <label className="control-label" htmlFor="focusedInput">Start Row</label>
                <input className="form-control" min="1" max="49" type="number" onKeyUp={ this.handleStartRowChanged.bind(this) } defaultValue={ this.state.startRow }/>
              </div>
            </div>
            <div className="col-sm-12 col-md-2">
              <div className="form-group">
                <label className="control-label" htmlFor="focusedInput">Number of Rows</label>
                <input className="form-control" min="1" max={ this.state.rows.length+1 } type="number" onKeyUp={ this.handleRowNumChanged.bind(this) } defaultValue={ this.state.rowNum }/>
              </div>
            </div>
            <div className="col-sm-12 col-md-2">
              <div className="form-group">
                <label className="control-label" htmlFor="focusedInput">Success Row</label>
                <input className="form-control" min="1" max={ this.state.rows.length+1 } type="number" onKeyUp={ this.handleSuccessRowChanged.bind(this) } defaultValue={ this.state.sucessRow }/>
              </div>
            </div>
            <div className="col-sm-12 col-md-2">
              <div className="form-group">
                <label className="control-label" htmlFor="focusedInput">Danger Row</label>
                <input className="form-control" min="1" max={ this.state.rows.length+1 } type="number" onKeyUp={ this.handleDangerRowChanged.bind(this) } defaultValue={ this.state.dangerRow }/>
              </div>
            </div>
            <div className="col-sm-12 col-md-2">
              <div className="form-group">
                <label className="control-label" htmlFor="focusedInput">Warning Row</label>
                <input className="form-control" min="1" max={ this.state.rows.length+1 } type="number" onKeyUp={ this.handleWarningRowChanged.bind(this) } defaultValue={ this.state.warningRow }/>
              </div>
            </div>
            <div className="bs-example col-sm-12">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                  </tr>
                </thead>
                <tbody>
                  { rows.slice(this.state.startRow-1, this.state.startRow + this.state.rowNum-1).map((n) => {
                    return (
                      <tr onClick={ this.handleRowClicked.bind(this) } className={ SWITCH(n, this.state.activeRow, 'active', this.state.sucessRow, 'success', this.state.dangerRow, 'danger', this.state.warningRow, 'warning', '') }>
                        <td>{n}</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                    ) }) }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
