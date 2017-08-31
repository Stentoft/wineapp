import React from 'react';
import ReactDOM from 'react-dom';
import Listitem from './listitem/listitem'

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  componentWillMount(){
  }

  render () {
    return (
      <div ref={(page) => { this.page = page; }} >
        <h1>Hello wineapp</h1>
        <ul>
        <Listitem />
        <Listitem />
        <Listitem />
        <Listitem />
        <Listitem />
        <Listitem />
        <Listitem />
        <Listitem />
        </ul>
      </div>
    );
  }
}
