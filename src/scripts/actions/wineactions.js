import dispatcher from "../stores/dispatcher";

export function addWine(data){
  dispatcher.dispatch({
    type:"SUBMIT_WINE",
    data
  })
}


export function showWineInDetail(data){
  dispatcher.dispatch({
    type:"SHOW_WINE_IN_DETAIL",
    data
  })
}
