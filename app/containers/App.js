// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        {this.props.children}
        <Link to="/">Move Home Page</Link>
      </div>
    );
  }
}
