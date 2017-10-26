import DetailView from './detailview/detailview';
import List from './list/list';
import React from 'react';
import ReactDOM from 'react-dom';
import SubmitView from './submitview/submitview';
import WineStore from '../stores/winestore';
import * as WineActions from '../actions/wineactions';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      showUnderlay : false,
      underlayView : null,
    }
  }

  componentWillMount(){
    WineStore.on('selected-wine:change', data => {
      const view = data ? <DetailView config={data}/> : null;
      this.toggleUnderlay(view)
    });
    WineStore.on('edit-wine', data => {
      const view = data ? <SubmitView config={data}/> : null;
      this.setState({
        underlayView : view
      });
    });
    WineStore.on('wine-list:change', data => {
      this.state.showSubmitView && this.toggleUnderlay();
    })
  }

  toggleUnderlay(view){
    const underlayView = view || false

    this.setState({
      showUnderlay : !this.state.showUnderlay
    })

    // For the sake of the animation
    setTimeout(()=>{
      this.setState({
        underlayView
      })
    },underlayView ? 0 : 500)
  }

  handlePageClick(e){
    if(this.state.showUnderlay){
      e.preventDefault();
      this.toggleUnderlay()
    }
  }

  showSubmitView(){
    this.toggleUnderlay(<SubmitView/>);
  }

  render () {
    return (
      <div ref={(page) => { this.page = page; }}>
        { this.state.underlayView && this.state.underlayView }
        <div class={`page-content ${this.state.showUnderlay ? 'page-content--offset' : ''}`} onClick={this.handlePageClick.bind(this)}>
          <div class="row">
            <div class="col">
              <div class="page-header">
                <h1>My Wine Stockz</h1>
              </div>
            </div>
          </div>
          <List />
          <button class="btn btn--large" onClick={this.showSubmitView.bind(this)}><div class="icon-btn icon-btn--plus"></div>Add Wine</button>
        </div>
      </div>
    );
  }
}
