import React from 'react';
import ReactDOM from 'react-dom';
import * as WineActions from '../../actions/wineactions';

export default class DetailView extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  componentWillMount(){
  }


  closeDetailView(){
    WineActions.showWineInDetail(false);
  }

  render () {
    return (
      <div class="detail-view" >
        <div class="top-bar" onClick={this.closeDetailView}>
          <div class="icon-btn icon-btn--back"></div>
        </div>
        <h2>{this.props.config.name}</h2>
        <h3>Rating: {this.props.config.stars} stars</h3>
        <h3>Country: {this.props.config.country}</h3>
        <h3>Color: {this.props.config.color}</h3>
        <h3>Grape: {this.props.config.grapes}</h3>
        <h3>Year: {this.props.config.year_made}</h3>
        <h3>Region: {this.props.config.region}</h3>
      </div>
    );
  }
}
