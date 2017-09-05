import dispatcher from "./dispatcher.js";
import { EventEmitter } from "events";
const winejson = require('./../mocked_data/catalog.json');

class WineStore extends EventEmitter {
  constructor() {
    super()
    this.setMaxListeners(50);
    this.wineList = [];
    this.getInitialWineData();
    this.selectedWine = null;
  }

  getInitialWineData(){
    this.mockedWineDataService().then((res)=>{
      this.wineList = res;
      this.emit('wine-list:change', this.wineList);
    })
  }

  mockedWineDataService(){
    return new Promise((resolve,reject)=>{
      resolve(winejson);
    })
  }

  getIndexOfWine(wine){
    const wineId = wine.id || null;
    const indexOfWine = wineId ? this.wineList.findIndex(w => w.id == wineId) : null;
    return indexOfWine
  }

  addWine(wine){
    const indexOfWine = this.getIndexOfWine(wine);
    indexOfWine ? this.wineList.splice(indexOfWine,1,wine) : this.wineList.push(wine);
    this.emit('wine-list:change', this.wineList);
  }

  deleteWine(wine){
    const indexOfWine = this.getIndexOfWine(wine)
    indexOfWine && this.wineList.splice(indexOfWine,1);
    this.emit('wine-list:change', this.wineList);
  }

  editWine(wine){
    this.emit('edit-wine', wine);
  }

  handleDetailView(wine){
    this.selectedWine = wine;
    this.emit('selected-wine:change', this.selectedWine);
  }

  handleActions(evt){
    switch (evt.type) {
      case "EDIT_WINE": {
        this.editWine(evt.data);
      } break;
      case "SUBMIT_WINE": {
        this.addWine(evt.data);
      } break;
      case "DELETE_WINE": {
        this.deleteWine(evt.data);
      } break;
      case "SHOW_WINE_IN_DETAIL": {
        this.handleDetailView(evt.data);
      } break;
    }
  }
}

const wineStore = new WineStore;
dispatcher.register(wineStore.handleActions.bind(wineStore));

export default wineStore;
