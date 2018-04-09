// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import { createTable } from '../database/mysqlmodel'
import { createmongo } from '../database/mongoschema'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: []
    }
  }

  async componentWillMount() {
    const result = await createTable();
    this.setState({ table: result })
    createmongo();
  }

  render() {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.table.map((item, i) => {
              return (<TableRow key={i} value={item}>
                <TableRowColumn>{item.dataValues.id}</TableRowColumn>
                <TableRowColumn>{item.dataValues.name}</TableRowColumn>
                <TableRowColumn>{item.dataValues.description}</TableRowColumn>
              </TableRow>)
            })}
          </TableBody>
        </Table>
        <RaisedButton label="Move to course" primary={true} />
      </div>
    );
  }
}
