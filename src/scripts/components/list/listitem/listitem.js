import React from 'react';
import ReactDOM from 'react-dom';
import DetailView from '../../detailview/detailview';

import * as WineActions from '../../../actions/wineactions';

export default class Listitem extends React.Component {

  constructor() {
    super();
    this.state = {
      showDetails : false
    }
  }

  componentWillMount(){

  }

  handleClick(){
    WineActions.showWineInDetail(this.props.config);
  }

  // <button onClick={this.toggleDetails.bind(this)} >Show details</button>

  render () {
    return (
      <li class="wine-list__item" onClick={this.handleClick.bind(this)}>
        <h3>{this.props.config.name}</h3>


        {this.state.showDetails && <DetailView />}

      </li>
    );
  }
}
