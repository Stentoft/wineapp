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
        <h2>A list item</h2>
      </li>
    );
  }
}
