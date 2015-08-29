import React from 'react';
import {Table, Column, TableConfig} from 'react-table-for-bootstrap';

export default class Tables extends React.Component {

  constructor() {
    super();
    this.state = {
      rows: [{
        id: 1,
        name: 'Happy Customers',
        hex: '#0F0',
        width: 420
      }, {
        id: 2,
        name: 'Unhappy Customers',
        hex: '#F00',
        width: 42
      }, {
        id: 3,
        name: 'N/A',
        hex: '#00F',
        width: 80
      }],
      startRow: 1,
      rowNum: 10,
      successRows: [1],
      dangerRows: [2],
      warningRows: [3],
      selectedRows: [],
    };
  }

  render() {
    return (
      <div>
        <TableConfig
          getTableLength={() => this.state.rows.length }
          startRow={this.state.startRow}
          numberOfRows={this.state.numberOfRows}
          successRows={this.state.successRows}
          dangerRows={this.state.dangerRows}
          warningRows={this.state.warningRows}
          selectedRows={this.state.selectedRows}
          updateStartRow={ (value) => { this.setState({ startRow: +value }) }.bind(this) }
          updateNumberOfRows={ (value) => { this.setState({ numberOfRows: +value }) }.bind(this) }
          updateSelectedRows={ (value) => { this.setState({ selectedRows: value.split(',').map((n) => +n > 0 ? +n : '' ) }) }.bind(this) }
          updateDangerRows={ (value) => { this.setState({ dangerRows: value.split(',').map((n) => +n > 0 ? +n : '' ) }) }.bind(this) }
          updateWarningRows={ (value) => { this.setState({ warningRows: value.split(',').map((n) => +n > 0 ? +n : '' ) }) }.bind(this) }
          updateSuccessRows={ (value) => { this.setState({ successRows: value.split(',').map((n) => +n > 0 ? +n : '' ) }) }.bind(this) } />

        <Table
          headerRenderers={['#', 'Status', '%']}
          startRow={this.state.startRow}
          enableHover={true}
          enableStriped={false}
          showBorder={true}
          numberOfRows={this.state.numberOfRows}
          successRows={this.state.successRows}
          dangerRows={this.state.dangerRows}
          warningRows={this.state.warningRows}
          selectedRows={this.state.selectedRows}
          getRowAt={ (rowIndex) => this.state.rows[rowIndex] }
          columnRenderers={[
            (row) => row.id,
            (row) => `${row.name} (${row.hex})`,
            (row) => <span style={{
              paddingTop: 10,
              display: 'block',
              backgroundColor: row.hex,
              width: row.width + 'px', height: '3em'
            }}></span>]
          }
          updateSelectedRows={
            (rowIndex) => {
              var index = this.state.selectedRows.indexOf(rowIndex);
              var rows = this.state.selectedRows;
              if (index === -1) {
                rows.push(rowIndex);
              } else {
                rows.splice(index, 1);
              }
              this.setState({ selectedRows: rows });
            }
          }
          />
      </div>
    )
  }
}
