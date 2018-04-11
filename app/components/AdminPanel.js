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
import { createBuild } from '../utils/buildUtils'
import { createmongo } from '../database/mongoschema'

export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: []
    }
    this.createNewBuild = this.createNewBuild.bind(this);
  }

  async componentWillMount() {
    createmongo().then(result => {
      this.setState({ table: result }, () => {
        this.state.table.map(item => {
          console.log(item.path);
        })
      })
    });

  }

  createNewBuild() {
    createBuild();
  }
  render() {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Path</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.table.map((item, i) => {
              return (<TableRow key={i} value={item}>
                <TableRowColumn>{item.originalname}</TableRowColumn>
                <TableRowColumn>{item.path}</TableRowColumn>
              </TableRow>)
            })}
          </TableBody>
        </Table>
        <RaisedButton label="Create New build" primary={true} onClick={this.createNewBuild} />
      </div>
    );
  }
}
