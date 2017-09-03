import React from 'react';
import ReactDOM from 'react-dom';
import * as WineActions from '../../actions/wineactions';
import CountryOptions from './inputs/countryoptions';
import YearOptions from './inputs/yearoptions';
const randomUuid = require('uuid/v4');

class Wine {
  constructor(name, stars, country, color, grapes, year_made, region, contains_gluten){
      this.name = name || null;
      this.stars = stars || null;
      this.country = country || null;
      this.color = color || null;
      this.grapes = grapes || null;
      this.year_made = year_made || null;
      this.region = region || null;
      this.id = randomUuid();
  }
}

export default class SubmitView extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount(){
  }

  handleSubmit(e){
    e.preventDefault();
    const name = this.nameInput.value;
    const stars = this.starsSelect.value;
    const countrySelectElement = ReactDOM.findDOMNode(this.countrySelect)
    const country = countrySelectElement.value;
    const color = this.colorSelect.value;
    const grapes = this.grapesInput.value;
    const yearSelectElement = ReactDOM.findDOMNode(this.yearSelect);
    const year = yearSelectElement.value;
    const region = this.regionInput.value;

    const vin = new Wine(name, stars, country, color, grapes, year, region);
    console.log(vin);
    WineActions.addWine(vin);
  }

  render () {
    return (
      <div class="submit-view">
        <div class="top-bar" onClick={this.handleClick}>
          <div class="icon-btn icon-btn--back"></div>
        </div>
        <h2>Add a wine</h2>
        <form class="submit-view__form">
          <div class="row">
            <div class="col">
              <label for="wine-name">
                Name:
              </label>
              <input id="wine-name" ref={(input) => this.nameInput = input} type="text" name="name" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label for="wine-rating">
                Stars rating:
              </label>
                <select id="wine-rating" ref={(select) => this.starsSelect = select}>
                  <option value="1" label="1"/>
                  <option value="2" label="2"/>
                  <option value="3" label="3"/>
                  <option value="4" label="4"/>
                  <option value="5" label="5"/>
                </select>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label for="wine-colors">
                Color:
              </label>
              <select id="wine-colors" ref={(select) => this.colorSelect = select}>
                <option value="Red">Red</option>
                <option value="White">White</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label for="wine-grapes">
                Grapes:
              </label>
              <input id="wine-grapes" ref={(input) => this.grapesInput = input} type="text" name="name" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label for="wine-region">
                Region:
              </label>
              <input id="wine-region" ref={(input) => this.regionInput = input} type="text" name="name" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <CountryOptions ref={(select) => { this.countrySelect = select; }}/>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <YearOptions ref={(select) => { this.yearSelect = select; }} />
            </div>
          </div>

          <div class="row">
            <div class="col">
            </div>

          </div>
          <button onClick={this.handleSubmit.bind(this)}>Add</button>
        </form>
      </div>
    );
  }
}
