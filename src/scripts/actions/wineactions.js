import dispatcher from "../stores/dispatcher";

export function addWine(data){
  dispatcher.dispatch({
    type:"SUBMITWINE",
    data
  })
}
