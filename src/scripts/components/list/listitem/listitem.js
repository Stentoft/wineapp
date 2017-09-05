import React from 'react';
import ReactDOM from 'react-dom';
import DetailView from '../../detailview/detailview';

import * as WineActions from '../../../actions/wineactions';

export default class Listitem extends React.Component {
  constructor() {
    super();
  }

  handleClick(){
    WineActions.showDetailView(this.props.config);
  }

  render () {
    return (
      <li class={`wine-list__item ${this.props.config.color.toLowerCase()}`} onClick={this.handleClick.bind(this)}>
        <h3>{this.props.config.name}</h3>
      </li>
    );
  }
}
