import dispatcher from "./dispatcher.js";
import { EventEmitter } from "events";
const winejson = require('./../mocked_data/catalog.json');

class WineStore extends EventEmitter {
  constructor() {
    super()
    this.setMaxListeners(50);
    this.wineList = [];
    this.getInitialWineData();
  }

  getInitialWineData(){
    this.mockedWineDataService().then((res)=>{
      this.wineList = res;
      this.emit('wine-list:change', this.wineList);
    })
  }

  mockedWineDataService(){
    return new Promise((resolve,reject)=>{
      console.log(winejson);
      resolve(winejson);
    })
  }

  addWine(wine){
    this.wineList.push(wine);
    this.emit('wine-list:change', this.wineList);
  }

  handleActions(evt){
    switch (evt.type) {
      case "SUBMITWINE": {
        this.addWine(evt.data);
      } break;
    }
  }
}

const wineStore = new WineStore;
dispatcher.register(wineStore.handleActions.bind(wineStore));

export default wineStore;
