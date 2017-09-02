import React from 'react';
import ReactDOM from 'react-dom';
import Listitem from './listitem/listitem'
import WineStore from '../../stores/winestore';

export default class List extends React.Component {

  constructor() {
    super();
    this.state = {
      list : []
    }
  }

  componentWillMount(){
    WineStore.on('wine-list:change', listData => {
      this.setState({
        list : this.createListItems(listData)
      })
    })
  }

  createListItems(list){
    return list.map((item, index)=>{
      return <Listitem config={item} key={item.id}/>
    })
  }

  render () {
    return (
      <ul>
        {this.state.list}
      </ul>
    );
  }
}
