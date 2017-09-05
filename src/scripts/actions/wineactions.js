import dispatcher from "../stores/dispatcher";

export function addWine(data){
  dispatcher.dispatch({
    type:"SUBMIT_WINE",
    data
  })
}

export function deleteWine(data){
  dispatcher.dispatch({
    type:"DELETE_WINE",
    data
  })
}

export function editWine(data){
  dispatcher.dispatch({
    type:"EDIT_WINE",
    data
  })
}

export function showDetailView(data){
  dispatcher.dispatch({
    type:"SHOW_WINE_IN_DETAIL",
    data
  })
}
