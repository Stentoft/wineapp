import React from 'react';
import ReactDOM from 'react-dom';
import * as WineActions from '../../actions/wineactions';

export default class DetailView extends React.Component {

  constructor() {
    super();
    this.state = {
      showDeletePromt : false,
    }
  }

  editWine(){
    WineActions.editWine(this.props.config);
  }

  closeDetailView(){
    WineActions.showDetailView(false);
  }

  deleteItem(){
    WineActions.deleteWine(this.props.config);
    this.closeDetailView();
  }

  deletePromt(){
    this.setState({
      showDeletePromt : !this.state.showDeletePromt
    })
  }

  render () {
    return (
      <div class="detail-view" >
        <div class="top-bar">
          <div class="row">
            <div class="col col--1">
              <div class="icon-btn icon-btn--back" onClick={this.closeDetailView}></div>
            </div>
            <div class="col col--5 detail-view__edit-btns">
              <button class="btn btn--edit" onClick={this.editWine.bind(this)}>Edit</button>
              <button class="btn btn--delete" onClick={this.deletePromt.bind(this)}>Delete</button>
            </div>
          </div>
        </div>

        <h2>{this.props.config.name}</h2>
        <div class="row">
          <div class="col col--2">
            <h3>Rating: </h3>
          </div>
          <div class="col">
            {this.props.config.stars} stars
          </div>
        </div>
        <div class="row">
          <div class="col col--2">
            <h3>Country: </h3>
          </div>
          <div class="col">
            {this.props.config.country}
          </div>
        </div>
        <div class="row">
          <div class="col col--2">
            <h3>Color: </h3>
          </div>
          <div class="col">
            {this.props.config.color}
          </div>
        </div>
        <div class="row">
          <div class="col col--2">
            <h3>Grape: </h3>
          </div>
          <div class="col">
            {this.props.config.grapes}
          </div>
        </div>
        <div class="row">
          <div class="col col--2">
            <h3>Year: </h3>
          </div>
          <div class="col">
            {this.props.config.year_made}
          </div>
        </div>
        <div class="row">
          <div class="col col--2">
            <h3>Region: </h3>
          </div>
          <div class="col">
            {this.props.config.region}
          </div>
        </div>

        { this.state.showDeletePromt &&
          <div class="detail-view__delete-promt">
            <h3>Sure you wanna delete this wine?</h3>
            <div class="row">
              <div class="col col--3">
                <button onClick={this.deletePromt.bind(this)} class="btn btn--edit">NO</button>
              </div>
              <div class="col col--3">
                <button onClick={this.deleteItem.bind(this)} class="btn btn--delete">YES</button>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}
