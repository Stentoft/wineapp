import React from 'react';
import ReactDOM from 'react-dom';

export default class Listitem extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  componentWillMount(){

  }

  render () {
    return (
      <li>
        <h2>{this.props.config.name}</h2>
      </li>
    );
  }
}
