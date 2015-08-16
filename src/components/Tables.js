import React from 'react';
import SWITCH from 'formula-switch'

export default class Tables extends React.Component {
  render() {
    return (
      <div className="bs-docs-section">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h2 id="tables">Tables</h2>
            </div>
            <div className="bs-example">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                  </tr>
                </thead>
                <tbody>
                  { [1,2,3,4,5,6,7,8,9,10].map((n) => {
                    return (
                      <tr className={ SWITCH(n, 4, 'success', 5, 'danger', 6, 'warning', 7, 'active', '') }>
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
