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
      detailViewData : false,
      showSubmitView : false,
      showUnderlay : false,
    }
  }

  componentWillMount(){
    WineStore.on('selected-wine:change', data => {
      this.toogleDetailView(data);
    })
  }

  toogleDetailView(data){
    const detailViewData = data || false
    this.toggleUnderlay();

    setTimeout(()=>{
      this.setState({
        detailViewData
      })
    },detailViewData ? 0 : 500)
  }

  toogleSubmitView(data){
    const showSubmitView = data || false
    this.toggleUnderlay();

    setTimeout(()=>{
      this.setState({
        showSubmitView
      })
    },showSubmitView ? 0 : 500)
  }

  toggleUnderlay(){
      this.setState({
        showUnderlay : !this.state.showUnderlay
      })
  }

  handlePageClick(e){
    if(this.state.showUnderlay){
      e.preventDefault();
      this.toogleDetailView();
      this.toogleSubmitView();
    }
  }

  handleSubmit(){
    this.toggleUnderlay();
    this.setState({
      showSubmitView : !this.state.showSubmitView
    })
  }

  render () {
    return (
      <div ref={(page) => { this.page = page; }}>
        { this.state.detailViewData && <DetailView config={this.state.detailViewData}/> }
        { this.state.showSubmitView && <SubmitView /> }
        <div class={`page-content ${this.state.showUnderlay ? 'page-content--offset' : ''}`} onClick={this.handlePageClick.bind(this)}>
          <h1>Hello wineapp</h1>
          <List />
          <button class="btn btn--large" onClick={this.handleSubmit.bind(this)}><div class="icon-btn icon-btn--plus"></div>Add Wine</button>
        </div>
      </div>
    );
  }
}
