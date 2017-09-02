import React from 'react';
import ReactDOM from 'react-dom';
import * as WineActions from '../../actions/wineactions';
import ContryOptions from './inputs/contryoptions';
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

  handleSubmit(){
    const uuidName = randomUuid();
    const vin = new Wine(uuidName);
    WineActions.addWine(vin);
    const selects = ReactDOM.findDOMNode(this.select)
    console.log(this.nameInput.value, selects.value);
  }

  render () {
    return (
      <div >
        <h2 onClick={this.handleSubmit.bind(this)}>SUBMIT FORM</h2>
        <form class="wine-submission-form">
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
                <select id="wine-rating">
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
              <select id="wine-colors">
                <option value="">Color...</option>
                <option value="Red">Red</option>
                <option value="White">White</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label for="wine-grapes">
                grapes:
              </label>
              <input id="wine-grapes" ref={(input) => this.nameInput = input} type="text" name="name" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label for="wine-region">
                region:
              </label>
              <input id="wine-region" ref={(input) => this.nameInput = input} type="text" name="name" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <ContryOptions ref={(select) => { this.select = select; }}/>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <YearOptions />
            </div>
          </div>

          <div class="row">
            <div class="col">
            </div>

          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
