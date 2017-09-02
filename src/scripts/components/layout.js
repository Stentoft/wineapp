import React from 'react';
import ReactDOM from 'react-dom';
import List from './list/list';
import SubmitView from './submitview/submitview';

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
        <SubmitView />
        <h1>Hello wineapp</h1>
        <List />
      </div>
    );
  }
}
